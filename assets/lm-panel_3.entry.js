import { r as registerInstance, h } from './index-DUsoYu9r.js';
import { G as GlobalEventBus } from './event-bus-vwwmWKs9.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const lmPanelCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%;height:100%;overflow:hidden}.lm-panel{display:flex;flex-direction:column;flex:1;width:100%;height:100%;background:var(--bg-primary, #ffffff);overflow:hidden;border:1px solid var(--border-subtle, #e2e8f0)}.lm-panel-header{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:var(--bg-primary, #f8fafc);border-bottom:1px solid var(--border-subtle, #e2e8f0);min-height:36px;flex-shrink:0}.lm-panel-header .lm-title{font-size:13px;font-weight:600;color:var(--color-primary, #334155);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lm-panel-header .lm-controls{display:flex;align-items:center;gap:8px}.lm-close{background:transparent;border:none;cursor:pointer;padding:4px;border-radius:4px;display:flex;align-items:center;justify-content:center;color:var(--text-muted, #64748b);width:20px;height:20px;font-size:16px;line-height:1;transition:all 0.2s}.lm-close:hover{background:var(--bg-primary, #fee2e2);color:var(--color-danger, #ef4444)}.lm-panel-body{flex:1;overflow:auto;position:relative;display:flex;flex-direction:column}.lm-panel-body>div{flex:1}`;

const LmPanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    panel;
    closePanel() {
        GlobalEventBus.emit('panel:closed', this.panel.id);
    }
    onHeaderMouseDown = (e) => {
        GlobalEventBus.emit('panel:dragstart', {
            panelId: this.panel.id,
            x: e.clientX,
            y: e.clientY
        });
    };
    render() {
        return (h("div", { key: 'ed9841ccbbf9405cce4768bfc6b95679e3073612', class: "lm-panel", "data-id": this.panel.id }, h("div", { key: 'da601613fad1f4fbbfe710dab28023641fc09e22', class: "lm-panel-header", onMouseDown: e => this.onHeaderMouseDown(e) }, h("div", { key: 'd5770de243fe1b56344cc7eac1747fb27fdac878', class: "lm-title", style: { display: 'flex', alignItems: 'center' } }, this.panel.icon && h("ui-icon", { key: 'ae016e3300eb49f9a57b455caf7507bd97436b41', name: this.panel.icon, library: "lucide", style: { width: '16px', height: '16px', marginRight: '8px' } }), this.panel.title), h("div", { key: '44f63e8f914ff8d2fc49159e6c4aea47a4bf9110', class: "lm-controls" }, this.panel.closable !== false && (h("ui-button", { key: 'ab22aed20eb1f50fca03ccd70e56eb502d150fe7', variant: "ghost", class: "lm-close", onClick: () => this.closePanel(), ariaLabel: "Close panel", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "xxs" })))), h("div", { key: '7f7b24123c8ef2f29e854bde5bf021b8b269860b', class: "lm-panel-body" }, this.panel.content ? (h("div", { innerHTML: sanitizeHTML(this.panel.content) })) : (h("slot", null)))));
    }
};
LmPanel.style = lmPanelCss();

const lmSplitterCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;z-index:10}.lm-splitter{background-color:var(--bg-primary, #e2e8f0);transition:background-color 0.2s;flex-shrink:0;}.lm-splitter.horizontal{width:4px;height:100%;cursor:col-resize}.lm-splitter{}.lm-splitter.vertical{width:100%;height:4px;cursor:row-resize}.lm-splitter:hover{background-color:var(--color-primary, #10b981)}@media (max-width: 768px){:host{display:none !important}}`;

const LmSplitter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    containerId;
    index;
    startX;
    startY;
    onDown(e) {
        this.startX = e.clientX;
        this.startY = e.clientY;
        window.addEventListener('mousemove', this.onMove);
        window.addEventListener('mouseup', this.onUp);
    }
    onMove = (e) => {
        // Determine delta based on parent flex direction (not known here directly, passing generic delta)
        // Actually we can infer delta X/Y
        // Let's pass pixel differences
        const dx = e.clientX - this.startX;
        const dy = e.clientY - this.startY;
        // We update start positions for incremental delta
        this.startX = e.clientX;
        this.startY = e.clientY;
        // Emit event
        // The direction likely matters to the container
        GlobalEventBus.emit('splitter:drag', {
            containerId: this.containerId,
            index: this.index,
            dx,
            dy
        });
    };
    onUp = () => {
        window.removeEventListener('mousemove', this.onMove);
        window.removeEventListener('mouseup', this.onUp);
    };
    direction = 'horizontal'; // Default to horizontal (vertical bar) for row layout
    render() {
        return h("div", { key: '10a37bce5b34d39754a42339ece2fd8c1759ffec', class: `lm-splitter ${this.direction}`, onMouseDown: e => this.onDown(e) });
    }
};
LmSplitter.style = lmSplitterCss();

const lmTabsCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%}.lm-tabs{background-color:var(--bg-secondary, #f1f5f9);border-bottom:1px solid var(--border-subtle, #e2e8f0);display:flex}.lm-tabs.horizontal{flex-direction:row;width:100%;min-height:32px;overflow-x:auto}.lm-tabs.vertical{flex-direction:column;height:100%;width:100%;overflow-y:auto;overflow-x:hidden;background-color:var(--color-primary, #334155);color:var(--color-primary, #94a3b8)}.lm-tabs{}.lm-tabs::-webkit-scrollbar{display:none}.lm-tab-list{display:flex}.lm-tabs.horizontal .lm-tab-list{flex-direction:row}.lm-tabs.vertical .lm-tab-list{flex-direction:column;width:100%;align-items:center}.lm-tab{padding:8px 16px;font-size:13px;color:var(--text-muted, #64748b);cursor:pointer;transition:all 0.2s;white-space:nowrap;user-select:none;display:flex;align-items:center;justify-content:center}.lm-tab:hover{background:var(--bg-primary, #e2e8f0);color:var(--color-primary, #334155)}.lm-tabs.horizontal .lm-tab{border-right:1px solid var(--border-subtle, #e2e8f0);background:var(--bg-secondary, #f1f5f9)}.lm-tabs.horizontal .lm-tab.active{background:var(--bg-primary, #ffffff);color:var(--color-primary, #10b981);font-weight:500;border-bottom:2px solid var(--color-primary, #10b981)}.lm-tabs.vertical .lm-tab{width:48px;height:48px;padding:0;border-bottom:none;color:var(--color-primary, #94a3b8)}.lm-tabs.vertical .lm-tab:hover{background:rgba(255, 255, 255, 0.1);color:var(--text-standard, #f1f5f9)}.lm-tabs.vertical .lm-tab.active{background:var(--bg-primary, #ffffff);color:var(--color-primary, #10b981);border-left:2px solid var(--color-primary, #10b981);}.lm-tab-title{flex:1;overflow:hidden;text-overflow:ellipsis}.lm-tab-close{margin-left:8px;width:16px;height:16px;display:flex;align-items:center;justify-content:center;border-radius:4px;font-size:14px;line-height:1;color:var(--color-primary, #94a3b8);transition:all 0.2s;cursor:pointer}.lm-tab-close:hover{background:var(--bg-primary, #e2e8f0);color:var(--color-danger, #ef4444)}.active .lm-tab-close{color:var(--color-primary, #94a3b8)}.active .lm-tab-close:hover{background:var(--bg-secondary, #f1f5f9);color:var(--color-danger, #ef4444)}.lm-tabs.vertical .lm-tab-close{display:none;}`;

const LmTabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    panels;
    activeTabId;
    containerId;
    mode = 'horizontal';
    switchTab(id) {
        GlobalEventBus.emit('tab:changed', { containerId: this.containerId, tabId: id });
    }
    closePanel(e, id) {
        e.stopPropagation();
        GlobalEventBus.emit('panel:closed', id);
    }
    onTabMouseDown(e, id) {
        if (e.button !== 0)
            return; // Only left click
        // Don't drag if clicking the close button
        if (e.target.classList.contains('lm-tab-close'))
            return;
        GlobalEventBus.emit('panel:dragstart', { panelId: id, x: e.clientX, y: e.clientY });
    }
    render() {
        return (h("div", { key: 'febe482fbf5af159c3be293e1964d12eacf44ac2', class: `lm-tabs ${this.mode}` }, h("div", { key: '85a936ec854d5044ce2994b49fff517e5fe877e4', class: "lm-tab-list" }, this.panels.map(p => (h("div", { class: `lm-tab ${p.id === this.activeTabId ? 'active' : ''}`, "data-id": p.id, onClick: () => this.switchTab(p.id), onMouseDown: (e) => this.onTabMouseDown(e, p.id) }, h("span", { class: "lm-tab-title", style: { display: 'flex', alignItems: 'center' } }, p.icon && h("ui-icon", { name: p.icon, library: "lucide", style: { width: '14px', height: '14px', marginRight: '6px' } }), p.title), p.closable !== false && (h("span", { class: "lm-tab-close", onClick: (e) => this.closePanel(e, p.id) }, "\u00D7"))))))));
    }
};
LmTabs.style = lmTabsCss();

export { LmPanel as lm_panel, LmSplitter as lm_splitter, LmTabs as lm_tabs };
