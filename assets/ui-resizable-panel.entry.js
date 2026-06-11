import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const resizablePanelCss = () => `.sr-only.sc-ui-resizable-panel{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only.sc-ui-resizable-panel{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.sc-ui-resizable-panel-h{display:block;width:100%;height:100%;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif}.resizable-container.sc-ui-resizable-panel{display:flex;width:100%;height:100%;overflow:hidden;position:relative}.resizable-container.resizable-horizontal.sc-ui-resizable-panel{flex-direction:row}.resizable-container.resizable-vertical.sc-ui-resizable-panel{flex-direction:column}.resizable-container.resizable-theme-dark.sc-ui-resizable-panel{background:var(--bg-secondary, #0f172a);color:var(--text-standard, #f3f4f6)}.resizable-container.resizable-dragging.sc-ui-resizable-panel{cursor:col-resize}.resizable-container.resizable-dragging.resizable-vertical.sc-ui-resizable-panel{cursor:row-resize}.resizable-container.resizable-dragging.sc-ui-resizable-panel{user-select:none}.resizable-container.resizable-dragging.sc-ui-resizable-panel *.sc-ui-resizable-panel{pointer-events:none}.resizable-container.resizable-animated.sc-ui-resizable-panel .resizable-panel.sc-ui-resizable-panel{transition:width 0.2s ease, height 0.2s ease}.panel-wrapper.sc-ui-resizable-panel{display:flex;flex-direction:row;flex:0 0 auto;min-width:0;min-height:0}.resizable-vertical.sc-ui-resizable-panel .panel-wrapper.sc-ui-resizable-panel{flex-direction:column}.resizable-panel.sc-ui-resizable-panel{overflow:auto;position:relative;background:var(--bg-primary, #ffffff);border:none;min-width:0;min-height:0;width:100%;height:100%;flex-shrink:0}.resizable-panel.sc-ui-resizable-panel::-webkit-scrollbar{width:8px;height:8px}.resizable-panel.sc-ui-resizable-panel::-webkit-scrollbar-track{background:var(--bg-secondary, #f3f4f6)}.resizable-panel.sc-ui-resizable-panel::-webkit-scrollbar-thumb{background:var(--bg-secondary, #d1d5db);border-radius:4px}.resizable-panel.sc-ui-resizable-panel::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #9ca3af)}.resizable-panel.panel-collapsed.sc-ui-resizable-panel{display:none}.resizable-theme-dark.sc-ui-resizable-panel .resizable-panel.sc-ui-resizable-panel{background:var(--bg-secondary, #0f172a);color:var(--text-standard, #f3f4f6)}.resizable-theme-dark.sc-ui-resizable-panel .resizable-panel.sc-ui-resizable-panel::-webkit-scrollbar-track{background:var(--bg-primary, #1f2937)}.resizable-theme-dark.sc-ui-resizable-panel .resizable-panel.sc-ui-resizable-panel::-webkit-scrollbar-thumb{background:var(--color-primary, #4b5563)}.resizable-theme-dark.sc-ui-resizable-panel .resizable-panel.sc-ui-resizable-panel::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #6b7280)}.resize-handle.sc-ui-resizable-panel{position:relative;flex-shrink:0;display:flex;align-items:center;justify-content:center;background:transparent;transition:all 0.2s;z-index:10}.resize-handle.resize-handle-horizontal.sc-ui-resizable-panel{cursor:col-resize;width:1px;height:100%}.resize-handle.resize-handle-horizontal.sc-ui-resizable-panel:hover{background:var(--color-success, #3dcd58);width:2px}.resize-handle.resize-handle-vertical.sc-ui-resizable-panel{cursor:row-resize;height:1px;width:100%}.resize-handle.resize-handle-vertical.sc-ui-resizable-panel:hover{background:var(--color-success, #3dcd58);height:2px}.resize-handle.resize-handle-active.sc-ui-resizable-panel{background:var(--color-success, #3dcd58)}.resize-handle.resize-handle-disabled.sc-ui-resizable-panel{cursor:not-allowed;opacity:0.5}.resize-handle.resize-handle-disabled.sc-ui-resizable-panel:hover{background:transparent}.resizable-theme-dark.sc-ui-resizable-panel .resize-handle.sc-ui-resizable-panel{background:transparent}.resizable-theme-dark.sc-ui-resizable-panel .resize-handle.sc-ui-resizable-panel:hover{background:var(--color-success, #3dcd58)}.resizable-theme-dark.sc-ui-resizable-panel .resize-handle.resize-handle-disabled.sc-ui-resizable-panel:hover{background:transparent}.resize-handle-icon.sc-ui-resizable-panel{pointer-events:none;color:var(--text-muted, #6b7280);font-size:12px;opacity:0;transition:opacity 0.2s}.resize-handle.sc-ui-resizable-panel:hover .resize-handle-icon.sc-ui-resizable-panel{opacity:1}.resize-handle-active.sc-ui-resizable-panel .resize-handle-icon.sc-ui-resizable-panel{opacity:1;color:var(--text-standard, #ffffff)}.resizable-theme-dark.sc-ui-resizable-panel .resize-handle-icon.sc-ui-resizable-panel{color:var(--text-muted, #9ca3af)}.resize-handle-active.sc-ui-resizable-panel .resizable-theme-dark.sc-ui-resizable-panel .resize-handle-icon.sc-ui-resizable-panel{color:var(--text-standard, #ffffff)}.collapse-button.sc-ui-resizable-panel{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:20px;height:20px;border-radius:50%;border:1px solid var(--border-strong, #d1d5db);background:var(--bg-primary, #ffffff);color:var(--text-muted, #6b7280);cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:10px;transition:all 0.2s;pointer-events:auto;z-index:20;opacity:0.8;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1)}.resize-handle.sc-ui-resizable-panel:hover .collapse-button.sc-ui-resizable-panel{opacity:1;background:var(--bg-primary, #ffffff);border-color:var(--color-primary, #9ca3af)}.collapse-button.sc-ui-resizable-panel:hover{background:var(--color-success, #3dcd58) !important;border-color:var(--color-success, #3dcd58) !important;color:var(--text-standard, #ffffff) !important;transform:translate(-50%, -50%) scale(1.2)}.collapse-button.sc-ui-resizable-panel:active{transform:translate(-50%, -50%) scale(0.95)}.resizable-theme-dark.sc-ui-resizable-panel .collapse-button.sc-ui-resizable-panel{background:var(--color-primary, #374151);border-color:var(--border-strong, #4b5563);color:var(--text-muted, #9ca3af);opacity:0.8}.resizable-theme-dark.sc-ui-resizable-panel .collapse-button.sc-ui-resizable-panel:hover{background:var(--color-success, #3dcd58);border-color:var(--color-success, #3dcd58);color:var(--text-standard, #ffffff)}.resize-handle-horizontal.sc-ui-resizable-panel .collapse-button.sc-ui-resizable-panel{top:50%;left:50%}.resize-handle-vertical.sc-ui-resizable-panel .collapse-button.sc-ui-resizable-panel{top:50%;left:50%}.resizable-panel.sc-ui-resizable-panel ui-resizable-panel.sc-ui-resizable-panel{width:100%;height:100%;border:none}`;

const AppResizablePanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.panelResize = createEvent(this, "panelResize");
        this.panelCollapse = createEvent(this, "panelCollapse");
        this.resizeStart = createEvent(this, "resizeStart");
        this.resizeEnd = createEvent(this, "resizeEnd");
    }
    get el() { return getElement(this); }
    direction = 'horizontal';
    panels = [];
    handleSize = 8;
    handleColor = '#d1d5db';
    handleHoverColor = '#3DCD58';
    minPanelSize = 10;
    maxPanelSize = -1;
    saveState = false;
    stateKey = 'resizable-panel-state';
    theme = 'light';
    animated = false;
    showHandleIcon = true;
    snapToEdge = false;
    snapThreshold = 30;
    internalPanels = [];
    isDragging = false;
    dragHandleIndex = -1;
    dragStartPos = 0;
    dragStartSizes = [];
    panelResize;
    panelCollapse;
    resizeStart;
    resizeEnd;
    containerRef;
    panelRefs = [];
    hasMouseMoved = false;
    applyResizeDelta(index, deltaPx, containerSize) {
        if (!containerSize || index < 0)
            return;
        const newPanels = [...this.internalPanels];
        const leftPanel = newPanels[index];
        const rightPanel = newPanels[index + 1];
        if (!leftPanel || !rightPanel)
            return;
        const totalPairSize = (this.dragStartSizes[index] ?? leftPanel.size ?? 0) + (this.dragStartSizes[index + 1] ?? rightPanel.size ?? 0);
        const deltaPercent = (deltaPx / containerSize) * 100;
        let newLeftSize = (this.dragStartSizes[index] ?? leftPanel.size ?? 0) + deltaPercent;
        let newRightSize = (this.dragStartSizes[index + 1] ?? rightPanel.size ?? 0) - deltaPercent;
        const minLeft = leftPanel.minSize ?? this.minPanelSize;
        const minRight = rightPanel.minSize ?? this.minPanelSize;
        const maxLeft = leftPanel.maxSize ?? this.maxPanelSize;
        const maxRight = rightPanel.maxSize ?? this.maxPanelSize;
        if (newLeftSize < minLeft) {
            newLeftSize = minLeft;
            newRightSize = totalPairSize - newLeftSize;
        }
        if (newRightSize < minRight) {
            newRightSize = minRight;
            newLeftSize = totalPairSize - newRightSize;
        }
        if (maxLeft > 0 && newLeftSize > maxLeft) {
            newLeftSize = maxLeft;
            newRightSize = totalPairSize - newLeftSize;
        }
        if (maxRight > 0 && newRightSize > maxRight) {
            newRightSize = maxRight;
            newLeftSize = totalPairSize - newRightSize;
        }
        const thresholdPercent = this.snapToEdge && this.snapThreshold > 0 && containerSize > 0
            ? (this.snapThreshold / containerSize) * 100
            : 0;
        const collapseEvents = [];
        let leftSize = newLeftSize;
        let rightSize = newRightSize;
        if (thresholdPercent > 0) {
            if (leftSize <= thresholdPercent) {
                const wasCollapsed = leftPanel.collapsed;
                leftPanel.collapsed = true;
                leftSize = 0;
                rightSize = totalPairSize;
                rightPanel.collapsed = false;
                if (!wasCollapsed) {
                    collapseEvents.push({ panel: leftPanel, collapsed: true });
                }
            }
            else if (leftPanel.collapsed && leftSize > thresholdPercent) {
                leftPanel.collapsed = false;
                leftSize = Math.max(leftSize, minLeft);
                rightSize = totalPairSize - leftSize;
                collapseEvents.push({ panel: leftPanel, collapsed: false });
            }
            if (rightSize <= thresholdPercent) {
                const wasCollapsed = rightPanel.collapsed;
                rightPanel.collapsed = true;
                rightSize = 0;
                leftSize = totalPairSize;
                leftPanel.collapsed = false;
                if (!wasCollapsed) {
                    collapseEvents.push({ panel: rightPanel, collapsed: true });
                }
            }
            else if (rightPanel.collapsed && rightSize > thresholdPercent) {
                rightPanel.collapsed = false;
                rightSize = Math.max(rightSize, minRight);
                leftSize = totalPairSize - rightSize;
                collapseEvents.push({ panel: rightPanel, collapsed: false });
            }
        }
        else {
            if (leftPanel.collapsed && leftSize > 0) {
                leftPanel.collapsed = false;
            }
            if (rightPanel.collapsed && rightSize > 0) {
                rightPanel.collapsed = false;
            }
        }
        const sizesChanged = leftPanel.size !== leftSize || rightPanel.size !== rightSize || collapseEvents.length > 0;
        leftPanel.size = leftSize;
        rightPanel.size = rightSize;
        this.internalPanels = [...newPanels];
        if (sizesChanged) {
            this.panelResize.emit({ panels: this.internalPanels, index });
            collapseEvents.forEach(evt => this.panelCollapse.emit(evt));
        }
    }
    componentWillLoad() {
        this.parsePanels();
        if (this.saveState) {
            this.loadState();
        }
    }
    handlePanelsChange() {
        // Only re-parse if not currently dragging to avoid interference
        if (!this.isDragging) {
            this.parsePanels();
        }
    }
    parsePanels() {
        let parsedPanels = typeof this.panels === 'string' ? JSON.parse(this.panels) : this.panels;
        if (!parsedPanels || parsedPanels.length === 0) {
            parsedPanels = [
                { id: 'panel-1', size: 50 },
                { id: 'panel-2', size: 50 }
            ];
        }
        // Normalize sizes to percentages
        const totalSize = parsedPanels.reduce((sum, p) => sum + (p.size || 0), 0);
        if (totalSize > 0 && Math.abs(totalSize - 100) > 0.1) {
            // Only normalize if total is not already close to 100
            parsedPanels = parsedPanels.map((p) => ({
                ...p,
                size: ((p.size || 0) / totalSize) * 100,
                minSize: p.minSize || this.minPanelSize,
                maxSize: p.maxSize || this.maxPanelSize,
                resizable: p.resizable !== false,
                collapsible: p.collapsible || false,
                collapsed: p.collapsed || false,
                collapseDirection: p.collapseDirection || (this.direction === 'horizontal' ? 'left' : 'up'),
            }));
        }
        else {
            // Sizes already normalized, just add defaults
            parsedPanels = parsedPanels.map((p) => ({
                ...p,
                minSize: p.minSize || this.minPanelSize,
                maxSize: p.maxSize || this.maxPanelSize,
                resizable: p.resizable !== false,
                collapsible: p.collapsible || false,
                collapsed: p.collapsed || false,
                collapseDirection: p.collapseDirection || (this.direction === 'horizontal' ? 'left' : 'up'),
            }));
        }
        this.internalPanels = parsedPanels;
    }
    loadState() {
        if (!this.saveState)
            return; // Don't load state if saveState is false
        try {
            const saved = localStorage.getItem(this.stateKey);
            if (saved) {
                const savedPanels = JSON.parse(saved);
                // Only apply saved state if it matches the current panels structure
                if (savedPanels && savedPanels.length === this.internalPanels.length) {
                    this.internalPanels = this.internalPanels.map((panel, idx) => ({
                        ...panel,
                        size: savedPanels[idx]?.size || panel.size,
                        collapsed: savedPanels[idx]?.collapsed || panel.collapsed,
                    }));
                }
            }
        }
        catch (e) {
            console.warn('Failed to load panel state:', e);
        }
    }
    saveStateToStorage() {
        if (this.saveState) {
            try {
                const state = this.internalPanels.map(p => ({
                    id: p.id,
                    size: p.size,
                    collapsed: p.collapsed,
                }));
                localStorage.setItem(this.stateKey, JSON.stringify(state));
            }
            catch (e) {
                console.warn('Failed to save panel state:', e);
            }
        }
    }
    handleMouseDown(index, event) {
        const leftPanel = this.internalPanels[index];
        const rightPanel = this.internalPanels[index + 1];
        if (!leftPanel?.resizable || rightPanel?.resizable === false)
            return;
        event.preventDefault();
        this.isDragging = true;
        this.dragHandleIndex = index;
        this.dragStartPos = this.direction === 'horizontal' ? event.clientX : event.clientY;
        this.dragStartSizes = this.internalPanels.map(p => p.size ?? 0);
        this.hasMouseMoved = false;
        this.resizeStart.emit({ index });
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    }
    handleMouseMove = (event) => {
        if (!this.isDragging || this.dragHandleIndex === -1)
            return;
        event.preventDefault();
        // Mark that mouse has moved
        this.hasMouseMoved = true;
        const currentPos = this.direction === 'horizontal' ? event.clientX : event.clientY;
        const delta = currentPos - this.dragStartPos;
        const containerSize = this.direction === 'horizontal'
            ? this.containerRef.offsetWidth
            : this.containerRef.offsetHeight;
        this.applyResizeDelta(this.dragHandleIndex, delta, containerSize);
    };
    handleMouseUp = () => {
        if (this.isDragging) {
            const wasDragging = this.hasMouseMoved;
            const dragIndex = this.dragHandleIndex;
            const finalSizes = this.internalPanels.map(p => p.size ?? 0);
            // Only emit resizeEnd and save state if mouse actually moved
            if (wasDragging) {
                this.resizeEnd.emit({
                    index: dragIndex,
                    sizes: finalSizes.map(s => s ?? 0)
                });
                this.saveStateToStorage();
            }
            // Reset drag state AFTER emitting events to prevent parsePanels from interfering
            this.dragHandleIndex = -1;
            this.hasMouseMoved = false;
            this.isDragging = false;
        }
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    };
    handleTouchStart(index, event) {
        const leftPanel = this.internalPanels[index];
        const rightPanel = this.internalPanels[index + 1];
        if (!leftPanel?.resizable || rightPanel?.resizable === false)
            return;
        event.preventDefault();
        const touch = event.touches[0];
        this.isDragging = true;
        this.dragHandleIndex = index;
        this.dragStartPos = this.direction === 'horizontal' ? touch.clientX : touch.clientY;
        this.dragStartSizes = this.internalPanels.map(p => p.size ?? 0);
        this.hasMouseMoved = false;
        this.resizeStart.emit({ index });
        document.addEventListener('touchmove', this.handleTouchMove);
        document.addEventListener('touchend', this.handleTouchEnd);
    }
    handleTouchMove = (event) => {
        if (!this.isDragging || this.dragHandleIndex === -1)
            return;
        event.preventDefault();
        // Mark that touch has moved
        this.hasMouseMoved = true;
        const touch = event.touches[0];
        const currentPos = this.direction === 'horizontal' ? touch.clientX : touch.clientY;
        const delta = currentPos - this.dragStartPos;
        const containerSize = this.direction === 'horizontal'
            ? this.containerRef.offsetWidth
            : this.containerRef.offsetHeight;
        this.applyResizeDelta(this.dragHandleIndex, delta, containerSize);
    };
    handleTouchEnd = () => {
        if (this.isDragging) {
            const wasDragging = this.hasMouseMoved;
            const dragIndex = this.dragHandleIndex;
            const finalSizes = this.internalPanels.map(p => p.size ?? 0);
            // Only emit resizeEnd and save state if touch actually moved
            if (wasDragging) {
                this.resizeEnd.emit({
                    index: dragIndex,
                    sizes: finalSizes.map(s => s ?? 0)
                });
                this.saveStateToStorage();
            }
            // Reset drag state AFTER emitting events to prevent parsePanels from interfering
            this.dragHandleIndex = -1;
            this.hasMouseMoved = false;
            this.isDragging = false;
        }
        document.removeEventListener('touchmove', this.handleTouchMove);
        document.removeEventListener('touchend', this.handleTouchEnd);
    };
    toggleCollapse(index) {
        const panel = this.internalPanels[index];
        if (!panel.collapsible)
            return;
        const newPanels = [...this.internalPanels];
        const isCollapsing = !panel.collapsed;
        const direction = panel.collapseDirection || (this.direction === 'horizontal' ? 'left' : 'up');
        if (isCollapsing) {
            // When collapsing, give this panel's size to the appropriate adjacent panel
            const sizeToDistribute = newPanels[index].size ?? 0;
            // Determine which adjacent panel should receive the space based on collapse direction
            let targetIndex = -1;
            if (this.direction === 'horizontal') {
                if (direction === 'left' && index < newPanels.length - 1) {
                    // Panel collapses to left, so right panel grows
                    targetIndex = index + 1;
                }
                else if (direction === 'right' && index > 0) {
                    // Panel collapses to right, so left panel grows
                    targetIndex = index - 1;
                }
            }
            else {
                // Vertical direction
                if (direction === 'up' && index < newPanels.length - 1) {
                    // Panel collapses up, so panel below grows
                    targetIndex = index + 1;
                }
                else if (direction === 'bottom' && index > 0) {
                    // Panel collapses down, so panel above grows
                    targetIndex = index - 1;
                }
            }
            if (targetIndex !== -1 && !newPanels[targetIndex].collapsed) {
                // Give all space to the target adjacent panel
                newPanels[targetIndex] = {
                    ...newPanels[targetIndex],
                    size: (newPanels[targetIndex].size ?? 0) + sizeToDistribute
                };
            }
            else {
                // Fallback: distribute to all other non-collapsed panels
                const otherPanels = newPanels.filter((_, i) => i !== index && !newPanels[i].collapsed);
                if (otherPanels.length > 0) {
                    const sizePerPanel = sizeToDistribute / otherPanels.length;
                    newPanels.forEach((p, i) => {
                        if (i !== index && !p.collapsed) {
                            newPanels[i] = { ...p, size: (p.size ?? 0) + sizePerPanel };
                        }
                    });
                }
            }
            newPanels[index] = { ...panel, collapsed: true, size: 0 };
        }
        else {
            // When expanding, take size from the appropriate adjacent panel
            const targetSize = panel.minSize || 30;
            // Determine which adjacent panel should give up space
            let targetIndex = -1;
            if (this.direction === 'horizontal') {
                if (direction === 'left' && index < newPanels.length - 1) {
                    // Panel expanding from left, take from right panel
                    targetIndex = index + 1;
                }
                else if (direction === 'right' && index > 0) {
                    // Panel expanding from right, take from left panel
                    targetIndex = index - 1;
                }
            }
            else {
                if (direction === 'top' && index < newPanels.length - 1) {
                    // Panel expanding from top, take from panel below
                    targetIndex = index + 1;
                }
                else if (direction === 'bottom' && index > 0) {
                    // Panel expanding from down, take from panel above
                    targetIndex = index - 1;
                }
            }
            if (targetIndex !== -1 && !newPanels[targetIndex].collapsed) {
                // Take space from the target adjacent panel
                const availableSize = (newPanels[targetIndex].size ?? 0) - (newPanels[targetIndex].minSize || 10);
                const sizeToTake = Math.min(targetSize, availableSize);
                newPanels[targetIndex] = {
                    ...newPanels[targetIndex],
                    size: (newPanels[targetIndex].size ?? 0) - sizeToTake
                };
                newPanels[index] = { ...panel, collapsed: false, size: sizeToTake };
            }
            else {
                // Fallback: take from all other panels
                const otherPanels = newPanels.filter((_, i) => i !== index && !newPanels[i].collapsed);
                if (otherPanels.length > 0) {
                    const sizePerPanel = targetSize / otherPanels.length;
                    newPanels.forEach((p, i) => {
                        if (i !== index && !p.collapsed) {
                            newPanels[i] = { ...p, size: Math.max((p.minSize || 10), (p.size ?? 0) - sizePerPanel) };
                        }
                    });
                }
                newPanels[index] = { ...panel, collapsed: false, size: targetSize };
            }
        }
        this.internalPanels = newPanels;
        this.panelCollapse.emit({ panel: newPanels[index], collapsed: !!newPanels[index].collapsed });
        this.saveStateToStorage();
    }
    disconnectedCallback() {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('touchmove', this.handleTouchMove);
        document.removeEventListener('touchend', this.handleTouchEnd);
    }
    getCollapseIcon(panel) {
        const direction = panel.collapseDirection || (this.direction === 'horizontal' ? 'left' : 'up');
        if (panel.collapsed) {
            // Show expand icon (opposite of collapse direction)
            switch (direction) {
                case 'left': return 'right';
                case 'right': return 'left';
                case 'top': return 'bottom';
                case 'bottom': return 'top';
                default: return 'right';
            }
        }
        else {
            // Show collapse icon
            return direction;
        }
    }
    render() {
        const containerClasses = {
            'resizable-container': true,
            [`resizable-${this.direction}`]: true,
            [`resizable-theme-${this.theme}`]: true,
            'resizable-dragging': this.isDragging,
            'resizable-animated': this.animated && !this.isDragging,
        };
        return (h(Host, { key: 'e95db5c4b7d28becf543e44ab2d80a1fb5a34f5a' }, h("div", { key: 'c8c49f4e023ba66b1535447b567eebe685e9f464', class: containerClasses, ref: el => this.containerRef = el }, this.internalPanels.map((panel, index) => (h("div", { key: panel.id, class: "panel-wrapper", style: {
                [this.direction === 'horizontal' ? 'width' : 'height']: panel.collapsed ? `${this.handleSize}px` : `${panel.size}%`,
            } }, h("div", { class: {
                'resizable-panel': true,
                'panel-collapsed': !!panel.collapsed,
            }, ref: el => this.panelRefs[index] = el }, h("slot", { name: panel.id })), index < this.internalPanels.length - 1 && (h("div", { class: {
                'resize-handle': true,
                [`resize-handle-${this.direction}`]: true,
                'resize-handle-active': this.dragHandleIndex === index,
                'resize-handle-disabled': !panel.resizable || this.internalPanels[index + 1]?.resizable === false,
            }, style: {
                [this.direction === 'horizontal' ? 'width' : 'height']: `${this.handleSize}px`,
                backgroundColor: this.dragHandleIndex === index ? this.handleHoverColor : this.handleColor,
            }, onMouseDown: (e) => this.handleMouseDown(index, e), onTouchStart: (e) => this.handleTouchStart(index, e), onDblClick: () => this.toggleCollapse(index) }, this.showHandleIcon && panel.resizable && this.internalPanels[index + 1]?.resizable !== false && (h("div", { class: "resize-handle-icon" }, h("ui-icon", { name: `grip-${this.direction === 'horizontal' ? 'vertical' : 'lines'}`, library: "fontawesome" }))), panel.collapsible && (h("ui-button", { variant: "ghost", class: "collapse-button", onClick: (e) => {
                e.stopPropagation();
                e.preventDefault();
                this.toggleCollapse(index);
            }, onMouseDown: (e) => {
                e.stopPropagation();
                e.preventDefault();
            }, ariaLabel: panel.collapsed ? 'Expand' : 'Collapse', icon: `chevron-${this.getCollapseIcon(panel)}`, iconLibrary: "fontawesome", iconOnly: true, size: "sm" }))))))))));
    }
    static get watchers() { return {
        "panels": [{
                "handlePanelsChange": 0
            }]
    }; }
};
AppResizablePanel.style = resizablePanelCss();

export { AppResizablePanel as ui_resizable_panel };
