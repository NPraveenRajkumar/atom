import { r as registerInstance, a as getElement, h } from './index-DUsoYu9r.js';
import { g as getTransformedAncestorOffset } from './dom-BMFah5q3.js';
import { G as GlobalEventBus } from './event-bus-vwwmWKs9.js';

const Serialization = {
    serialize(layout) {
        return JSON.stringify(layout);
    },
    deserialize(s) {
        return JSON.parse(s);
    }
};

class StateEngine {
    state;
    constructor(initial) {
        this.state = initial || StateEngine.emptyLayout();
    }
    static emptyLayout() {
        return {
            version: 1,
            root: { id: 'root', type: 'row', children: [] },
            floating: []
        };
    }
    findPanel(id, node = this.state.root) {
        for (let i = 0; i < node.children.length; i++) {
            const child = node.children[i];
            if (child.type === 'panel' && child.id === id)
                return { parent: node, index: i };
            if (child.children) {
                const res = this.findPanel(id, child);
                if (res)
                    return res;
            }
        }
        return null;
    }
    addPanel(panel, targetContainerId) {
        const p = { ...panel, id: panel.id || `p_${Date.now()}`, type: 'panel' };
        // If no target string, default to root or first active container
        let target = targetContainerId ? this.findContainer(targetContainerId) : null;
        if (!target) {
            // Find valid target (row/column/tabs)
            // Recursive search for first suitable container
            const findFirst = (node) => {
                if (['row', 'column', 'tabs'].includes(node.type))
                    return node;
                for (const c of node.children) {
                    if (c.children) {
                        const res = findFirst(c);
                        if (res)
                            return res;
                    }
                }
                return null;
            };
            target = findFirst(this.state.root);
        }
        if (target) {
            // Enforce 'single' container limit
            if (target.type === 'single' && target.children.length > 0) {
                console.warn(`Container ${target.id} is 'single' and already has a panel. Rejecting add.`);
                return null; // Reject
            }
            target.children.push(p);
        }
        else {
            // Fallback: root children
            this.state.root.children.push(p);
        }
        GlobalEventBus.emit('panel:added', p);
        return p.id;
    }
    removePanel(id) {
        const found = this.findPanel(id);
        if (!found || !found.parent)
            return false;
        const removed = found.parent.children.splice(found.index, 1)[0];
        GlobalEventBus.emit('panel:removed', removed);
        return true;
    }
    resizePanel(containerId, index, delta) {
        const container = this.findContainer(containerId);
        if (!container || !container.children || container.children.length <= index + 1)
            return;
        const current = container.children[index];
        const next = container.children[index + 1];
        if (!current.size)
            current.size = 50;
        if (!next.size)
            next.size = 50;
        const change = delta * 0.1;
        current.size += change;
        next.size -= change;
        if (current.size < 5)
            current.size = 5;
        if (next.size < 5)
            next.size = 5;
        GlobalEventBus.emit('layout:updated', this.state);
    }
    setActiveTab(containerId, tabId) {
        const container = this.findContainer(containerId);
        if (!container || container.type !== 'tabs')
            return;
        container.activeTabId = tabId;
        GlobalEventBus.emit('layout:updated', this.state);
    }
    findContainer(id, node = this.state.root) {
        if (node.id === id)
            return node;
        for (const c of node.children) {
            if (c.children) {
                const res = this.findContainer(id, c);
                if (res)
                    return res;
            }
        }
        return null;
    }
    save() {
        return JSON.parse(JSON.stringify(this.state));
    }
    load(s) {
        this.state = s;
        GlobalEventBus.emit('layout:loaded', s);
        GlobalEventBus.emit('layout:updated', this.state);
    }
    splitPanel(targetPanelId, direction, newPanel) {
        const found = this.findPanel(targetPanelId);
        if (!found || !found.parent)
            return false;
        const { parent, index } = found;
        const currentPanel = parent.children[index];
        const nextPanel = { ...newPanel, id: newPanel.id || `p_${Date.now()}`, type: 'panel' };
        const targetType = direction === 'horizontal' ? 'row' : 'column';
        // Redistribute size
        const totalSize = currentPanel.size || 100;
        const halfSize = totalSize / 2;
        currentPanel.size = halfSize;
        nextPanel.size = halfSize;
        if (parent.type === targetType) {
            parent.children.splice(index + 1, 0, nextPanel);
        }
        else {
            const newContainer = {
                id: `c_${Date.now()}`,
                type: targetType,
                children: [currentPanel, nextPanel]
            };
            parent.children.splice(index, 1, newContainer);
        }
        this.rebalanceSizes(parent);
        GlobalEventBus.emit('layout:updated', this.state);
        GlobalEventBus.emit('panel:added', nextPanel);
        return nextPanel.id;
    }
    getPanelState(id, node = this.state.root) {
        const found = this.findPanel(id, node);
        if (found)
            return found.parent.children[found.index];
        return null;
    }
    movePanel(id, targetContainerId, targetIndex) {
        const found = this.findPanel(id);
        if (!found || !found.parent)
            return false;
        const panel = found.parent.children.splice(found.index, 1)[0];
        const target = this.findContainer(targetContainerId);
        if (!target) {
            const targetPanel = this.findPanel(targetContainerId);
            if (targetPanel) {
                targetPanel.parent.children.splice(targetPanel.index + 1, 0, panel);
                this.cleanupContainers(this.state.root);
                GlobalEventBus.emit('layout:updated', this.state);
                return true;
            }
            return false;
        }
        if (typeof targetIndex === 'number')
            target.children.splice(targetIndex, 0, panel);
        else
            target.children.push(panel);
        this.cleanupContainers(this.state.root);
        GlobalEventBus.emit('panel:moved', panel, targetContainerId);
        GlobalEventBus.emit('layout:updated', this.state);
        return true;
    }
    mergePanel(id, targetId) {
        const panelCfg = this.getPanelState(id);
        const foundTargetContainer = this.findContainer(targetId);
        if (foundTargetContainer && foundTargetContainer.type === 'tabs') {
            return this.movePanel(id, targetId);
        }
        const foundTargetPanel = this.findPanel(targetId);
        if (foundTargetPanel) {
            const { parent, index } = foundTargetPanel;
            const targetPanel = parent.children[index];
            // Remove self
            this.removePanel(id);
            // Create new tabs container
            const newTabs = {
                id: `c_tabs_${Date.now()}`,
                type: 'tabs',
                children: [targetPanel, { ...panelCfg, id }]
            };
            parent.children.splice(index, 1, newTabs);
            this.cleanupContainers(this.state.root);
            GlobalEventBus.emit('layout:updated', this.state);
            return true;
        }
        return false;
    }
    cleanupContainers(node) {
        node.children = node.children.filter(child => {
            if (child.children) {
                this.cleanupContainers(child);
                return child.children.length > 0;
            }
            return true;
        });
        this.rebalanceSizes(node);
    }
    rebalanceSizes(node) {
        if (!node.children || node.children.length === 0)
            return;
        // Ensure all children have a size
        const childrenWithNoSize = node.children.filter(c => !c.size);
        if (childrenWithNoSize.length > 0) {
            const totalSize = node.children.reduce((acc, c) => acc + (c.size || 0), 0);
            const remaining = Math.max(0, 100 - totalSize);
            const perEmpty = remaining / childrenWithNoSize.length;
            childrenWithNoSize.forEach(c => c.size = perEmpty);
        }
        // Optional: normalize to 100% total if many panels
        const total = node.children.reduce((acc, c) => acc + (c.size || 0), 0);
        if (total > 0 && Math.abs(total - 100) > 0.1) {
            node.children.forEach(c => c.size = (c.size / total) * 100);
        }
    }
    collapsePanel(id) {
        const p = this.getPanelState(id);
        if (p && !p.collapsed) {
            p.collapsed = true;
            GlobalEventBus.emit('layout:updated', this.state);
            return true;
        }
        return false;
    }
    expandPanel(id) {
        const p = this.getPanelState(id);
        if (p && p.collapsed) {
            p.collapsed = false;
            GlobalEventBus.emit('layout:updated', this.state);
            return true;
        }
        return false;
    }
}

const layoutManagerCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.lm-root{display:flex;flex-direction:column;width:100%;height:100%;overflow:hidden;position:relative}.lm-floating{position:absolute;top:0;left:0;width:0;height:0;z-index:9999}`;

const LayoutManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    initialLayout; // JSON string
    layout;
    engine;
    isDragging = false;
    draggedPanelId = null;
    dropIndicator = null;
    currentDropTargetId = null;
    currentDropIndex = null;
    componentWillLoad() {
        if (this.initialLayout) {
            try {
                const s = Serialization.deserialize(this.initialLayout);
                this.engine = new StateEngine(s);
            }
            catch (err) {
                console.warn('Invalid initial layout, using empty layout', err);
                this.engine = new StateEngine();
            }
        }
        else
            this.engine = new StateEngine();
        this.layout = this.engine.save();
        // Listen to drag events
        GlobalEventBus.on('panel:dragstart', (data) => {
            this.isDragging = true;
            this.draggedPanelId = data.panelId;
            document.addEventListener('mousemove', this.onGlobalMouseMove);
            document.addEventListener('mouseup', this.onGlobalMouseUp);
        });
        // Listen to resize events
        GlobalEventBus.on('splitter:drag', (data) => {
            // ... (existing resize logic)
            // Check orientation of container to decide dx or dy
            const container = this.engine.findContainer(data.containerId);
            let delta = 0;
            if (container) {
                if (container.type === 'row' || container.type === 'horizontal')
                    delta = data.dx;
                else if (container.type === 'column' || container.type === 'vertical')
                    delta = data.dy;
                if (delta !== 0) {
                    this.engine.resizePanel(data.containerId, data.index, delta);
                    this.layout = this.engine.save(); // trigger re-render
                }
            }
        });
        GlobalEventBus.on('tab:changed', (data) => {
            this.engine.setActiveTab(data.containerId, data.tabId);
            this.layout = this.engine.save();
        });
        GlobalEventBus.on('panel:closed', (id) => {
            this.engine.removePanel(id);
            this.layout = this.engine.save();
        });
        GlobalEventBus.on('layout:updated', () => {
            this.layout = this.engine.save();
        });
        // Expose for demo use
        window.LayoutEventBus = GlobalEventBus;
    }
    resizeObserver;
    componentDidLoad() {
        if (typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver(() => {
                this.checkAutoCollapse();
            });
            this.resizeObserver.observe(this.el);
        }
    }
    disconnectedCallback() {
        if (this.resizeObserver)
            this.resizeObserver.disconnect();
        document.removeEventListener('mousemove', this.onGlobalMouseMove);
        document.removeEventListener('mouseup', this.onGlobalMouseUp);
    }
    checkAutoCollapse() {
        if (!this.el)
            return;
        const panels = Array.from(this.el.querySelectorAll('.lm-panel'));
        panels.forEach(panelEl => {
            const id = panelEl.getAttribute('data-id');
            const p = this.engine.getPanelState(id);
            if (!p || !p.collapsible || p.collapsed)
                return;
            const rect = panelEl.getBoundingClientRect();
            const minW = p.minWidth || 100;
            const minH = p.minHeight || 100;
            // Logic: if panel is smer than its min size, collapse it
            // For row containers, check width. For columns, check height.
            // Or just check both.
            if (rect.width < minW || rect.height < minH) {
                this.engine.collapsePanel(id);
                this.layout = this.engine.save();
            }
        });
    }
    async addPanel(cfg) {
        const id = this.engine.addPanel(cfg);
        this.layout = this.engine.save();
        return id;
    }
    async removePanel(id) {
        const ok = this.engine.removePanel(id);
        this.layout = this.engine.save();
        return ok;
    }
    async saveLayout() {
        return Serialization.serialize(this.engine.save());
    }
    async loadLayout(json) {
        const s = Serialization.deserialize(json);
        this.engine.load(s);
        this.layout = this.engine.save();
        return true;
    }
    async splitPanel(targetPanelId, direction, newPanel) {
        const id = this.engine.splitPanel(targetPanelId, direction, newPanel);
        if (id) {
            this.layout = this.engine.save();
            return id;
        }
        return null;
    }
    getIndicatorStyle() {
        if (!this.dropIndicator)
            return {};
        const { rect, zone } = this.dropIndicator;
        const offset = getTransformedAncestorOffset(this.el);
        const style = {
            position: 'fixed',
            pointerEvents: 'none',
            zIndex: '10000',
            background: 'rgba(59, 130, 246, 0.3)',
            border: '2px solid #3bf673',
            transition: 'all 0.1s ease-out',
            borderRadius: '4px',
        };
        const left = rect.left - offset.x;
        const top = rect.top - offset.y;
        const width = rect.width;
        const height = rect.height;
        switch (zone) {
            case 'left':
                style.left = `${left}px`;
                style.top = `${top}px`;
                style.width = `${width / 2}px`;
                style.height = `${height}px`;
                break;
            case 'right':
                style.left = `${left + width / 2}px`;
                style.top = `${top}px`;
                style.width = `${width / 2}px`;
                style.height = `${height}px`;
                break;
            case 'top':
                style.left = `${left}px`;
                style.top = `${top}px`;
                style.width = `${width}px`;
                style.height = `${height / 2}px`;
                break;
            case 'bottom':
                style.left = `${left}px`;
                style.top = `${top + height / 2}px`;
                style.width = `${width}px`;
                style.height = `${height / 2}px`;
                break;
            case 'root-left':
                style.left = `${left}px`;
                style.top = `${top}px`;
                style.width = `40px`;
                style.height = `${height}px`;
                break;
            case 'root-right':
                style.left = `${left + width - 40}px`;
                style.top = `${top}px`;
                style.width = `40px`;
                style.height = `${height}px`;
                break;
            case 'root-top':
                style.left = `${left}px`;
                style.top = `${top}px`;
                style.width = `${width}px`;
                style.height = `40px`;
                break;
            case 'root-bottom':
                style.left = `${left}px`;
                style.top = `${top + height - 40}px`;
                style.width = `${width}px`;
                style.height = `40px`;
                break;
            case 'center':
            default:
                style.left = `${left}px`;
                style.top = `${top}px`;
                style.width = `${width}px`;
                style.height = `${height}px`;
                break;
        }
        return style;
    }
    onGlobalMouseMove = (e) => {
        if (!this.isDragging)
            return;
        const rect = this.el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        // Check Root Edges first (VS Code-style full length sidebars)
        let rootZone = null;
        const edgeThreshold = 30; // 30px from edge
        if (x < edgeThreshold)
            rootZone = 'root-left';
        else if (x > rect.width - edgeThreshold)
            rootZone = 'root-right';
        else if (y < edgeThreshold)
            rootZone = 'root-top';
        else if (y > rect.height - edgeThreshold)
            rootZone = 'root-bottom';
        if (rootZone) {
            this.currentDropTargetId = 'root';
            this.dropIndicator = { rect, zone: rootZone };
            return;
        }
        // Find the panel/container we are hovering over
        const elements = document.elementsFromPoint(e.clientX, e.clientY);
        const targetEl = elements.find(el => el.classList.contains('lm-panel') || el.classList.contains('lm-container') || el.classList.contains('lm-tabs'));
        if (targetEl) {
            let id = targetEl.getAttribute('data-id');
            const targetRect = targetEl.getBoundingClientRect();
            // Special case for tabs: we want to find the insertion index
            if (targetEl.classList.contains('lm-tabs')) {
                const tabList = targetEl.querySelector('.lm-tab-list');
                if (tabList) {
                    const tabs = Array.from(tabList.querySelectorAll('.lm-tab'));
                    let closestIndex = tabs.length;
                    tabs.forEach((tab, idx) => {
                        const tr = tab.getBoundingClientRect();
                        if (e.clientX < tr.left + tr.width / 2) {
                            if (closestIndex === tabs.length)
                                closestIndex = idx;
                        }
                    });
                    this.currentDropTargetId = targetEl.getAttribute('data-id');
                    this.currentDropIndex = closestIndex;
                    this.dropIndicator = { rect: targetRect, zone: 'center', index: closestIndex };
                    return;
                }
            }
            if (id === this.draggedPanelId) {
                this.dropIndicator = null;
                this.currentDropTargetId = null;
                return;
            }
            const relX = (e.clientX - targetRect.left) / targetRect.width;
            const relY = (e.clientY - targetRect.top) / targetRect.height;
            let zone = 'center';
            if (relX < 0.25)
                zone = 'left';
            else if (relX > 0.75)
                zone = 'right';
            else if (relY < 0.25)
                zone = 'top';
            else if (relY > 0.85)
                zone = 'bottom';
            this.currentDropTargetId = id;
            this.currentDropIndex = null;
            this.dropIndicator = { rect: targetRect, zone };
        }
        else {
            this.dropIndicator = null;
            this.currentDropTargetId = null;
            this.currentDropIndex = null;
        }
    };
    onGlobalMouseUp = () => {
        if (this.isDragging && this.draggedPanelId && this.currentDropTargetId) {
            const zone = this.dropIndicator?.zone;
            const targetId = this.currentDropTargetId;
            const draggedId = this.draggedPanelId;
            if (zone === 'center') {
                // Merge with target (into tabs)
                if (draggedId.startsWith('new:')) {
                    const type = draggedId.split(':')[1];
                    const newId = `p_${Date.now()}`;
                    this.engine.addPanel({ id: newId, title: type, content: `Content for ${type}` });
                    if (this.currentDropIndex !== null) {
                        this.engine.movePanel(newId, targetId, this.currentDropIndex);
                    }
                    else {
                        this.engine.mergePanel(newId, targetId);
                    }
                }
                else {
                    if (this.currentDropIndex !== null) {
                        this.engine.movePanel(draggedId, targetId, this.currentDropIndex);
                    }
                    else {
                        this.engine.mergePanel(draggedId, targetId);
                    }
                }
            }
            else if (zone.startsWith('root-')) {
                // Root split
                const dir = zone === 'root-left' || zone === 'root-right' ? 'horizontal' : 'vertical';
                let panelCfg;
                if (draggedId.startsWith('new:')) {
                    const type = draggedId.split(':')[1];
                    panelCfg = { id: `p_${Date.now()}`, title: type, content: `Content for ${type}` };
                }
                else {
                    panelCfg = this.engine.getPanelState(draggedId);
                    this.engine.removePanel(draggedId);
                }
                if (panelCfg) {
                    this.engine.splitPanel(this.layout.root.id, dir, panelCfg);
                }
            }
            else if (zone) {
                // Split logic
                const direction = zone === 'left' || zone === 'right' ? 'horizontal' : 'vertical';
                let panelCfg;
                if (draggedId.startsWith('new:')) {
                    const type = draggedId.split(':')[1];
                    panelCfg = { id: `p_${Date.now()}`, title: type, content: `New ${type}` };
                }
                else {
                    panelCfg = this.engine.getPanelState(draggedId);
                    this.engine.removePanel(draggedId);
                }
                if (panelCfg) {
                    this.engine.splitPanel(targetId, direction, panelCfg);
                }
            }
            this.layout = this.engine.save();
        }
        this.isDragging = false;
        this.draggedPanelId = null;
        this.dropIndicator = null;
        document.removeEventListener('mousemove', this.onGlobalMouseMove);
        document.removeEventListener('mouseup', this.onGlobalMouseUp);
    };
    render() {
        return (h("div", { key: 'a7d960702919a492c0f69534926d1a3eb3be72dd', class: "lm-root" }, h("lm-container", { key: '065dad724b014066c553e9eedc8f43f893d7d573', node: this.layout.root }), this.dropIndicator && h("div", { key: '8ed57f7562cdaf20c5d65f79cc16c638d8450b95', class: `lm-drop-indicator ${this.dropIndicator.zone}`, style: this.getIndicatorStyle() }), h("div", { key: '001e3f78b7e233858cad4ff5035849091dca554e', class: "lm-floating" }, this.layout.floating.map(f => (h("lm-floating-window", { "panel-id": f.id }))))));
    }
};
LayoutManager.style = layoutManagerCss();

export { LayoutManager as layout_manager };
