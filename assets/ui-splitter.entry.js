import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const splitterCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%;height:100%;--gutter-size:8px;--gutter-color:var(--text-standard, #e5e7eb);--gutter-hover-color:var(--color-primary, #10b981);--panel-bg:var(--bg-primary, #ffffff);--panel-border:var(--border-default, #e5e7eb)}.splitter-container{display:flex;width:100%;height:100%;position:relative;overflow:hidden}.splitter-horizontal{flex-direction:row}.splitter-vertical{flex-direction:column}.splitter-rounded{border-radius:8px;overflow:hidden}.splitter-elevated{box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)}.splitter-panel{position:relative;overflow:auto;background:var(--panel-bg);flex-shrink:0}.splitter-panel::-webkit-scrollbar{width:8px;height:8px}.splitter-panel::-webkit-scrollbar-track{background:var(--bg-primary, #f1f1f1)}.splitter-panel::-webkit-scrollbar-thumb{background:var(--bg-tertiary, #888);border-radius:4px}.splitter-panel::-webkit-scrollbar-thumb:hover{background:var(--bg-secondary, #555)}.splitter-panel-animated{transition:width 0.3s ease, height 0.3s ease}.splitter-panel-collapsed{overflow:hidden}.splitter-gutter{position:relative;flex-shrink:0;display:flex;align-items:center;justify-content:center;cursor:col-resize;transition:background-color 0.2s ease;user-select:none}.splitter-gutter i{color:var(--text-muted, #9ca3af);font-size:12px;pointer-events:none;transition:color 0.2s ease}.splitter-gutter:hover i,.splitter-gutter.splitter-gutter-active i{color:var(--text-standard, #ffffff)}.splitter-gutter-vertical{cursor:row-resize}.splitter-gutter-horizontal{cursor:col-resize}.splitter-gutter-active{background:var(--gutter-hover-color) !important;z-index:10}.splitter-gutter-hovered{background:var(--gutter-hover-color)}.splitter-collapse-btn{position:absolute;top:8px;right:8px;width:24px;height:24px;border:none;background:var(--bg-secondary, #f3f4f6);border-radius:4px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;z-index:5}.splitter-collapse-btn i{font-size:12px;color:var(--text-muted, #6b7280)}.splitter-collapse-btn:hover{background:var(--bg-primary, #e5e7eb);transform:scale(1.1)}.splitter-collapse-btn:hover i{color:var(--text-secondary, #374151)}.splitter-collapse-btn:active{transform:scale(0.95)}.splitter-dragging{cursor:col-resize;user-select:none}.splitter-dragging .splitter-panel{pointer-events:none}.splitter-dragging.splitter-vertical{cursor:row-resize}.splitter-rtl{direction:rtl}.splitter-rtl .splitter-collapse-btn{right:auto;left:8px}.splitter-theme-dark{--panel-bg:var(--bg-primary, #1f2937);--panel-border:var(--border-default, #374151);--gutter-color:var(--text-secondary, #374151);--gutter-hover-color:var(--color-primary, #10b981)}.splitter-theme-dark .splitter-panel{color:var(--text-standard, #f9fafb)}.splitter-theme-dark .splitter-panel::-webkit-scrollbar-track{background:var(--bg-secondary, #111827)}.splitter-theme-dark .splitter-panel::-webkit-scrollbar-thumb{background:var(--color-primary, #4b5563)}.splitter-theme-dark .splitter-panel::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #6b7280)}.splitter-theme-dark .splitter-collapse-btn{background:var(--color-primary, #374151)}.splitter-theme-dark .splitter-collapse-btn i{color:var(--text-muted, #9ca3af)}.splitter-theme-dark .splitter-collapse-btn:hover{background:var(--color-primary, #4b5563)}.splitter-theme-dark .splitter-collapse-btn:hover i{color:var(--bg-secondary, #d1d5db)}.splitter-theme-dark .splitter-gutter i{color:var(--text-muted, #6b7280)}@media (prefers-color-scheme: dark){.splitter-theme-auto{--panel-bg:var(--bg-primary, #1f2937);--panel-border:var(--border-default, #374151);--gutter-color:var(--text-secondary, #374151);--gutter-hover-color:var(--color-primary, #10b981)}.splitter-theme-auto .splitter-panel{color:var(--text-standard, #f9fafb)}.splitter-theme-auto .splitter-panel::-webkit-scrollbar-track{background:var(--bg-secondary, #111827)}.splitter-theme-auto .splitter-panel::-webkit-scrollbar-thumb{background:var(--color-primary, #4b5563)}.splitter-theme-auto .splitter-panel::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #6b7280)}.splitter-theme-auto .splitter-collapse-btn{background:var(--color-primary, #374151)}.splitter-theme-auto .splitter-collapse-btn i{color:var(--text-muted, #9ca3af)}.splitter-theme-auto .splitter-collapse-btn:hover{background:var(--color-primary, #4b5563)}.splitter-theme-auto .splitter-collapse-btn:hover i{color:var(--bg-secondary, #d1d5db)}.splitter-theme-auto .splitter-gutter i{color:var(--text-muted, #6b7280)}}@media (max-width: 768px){.splitter-gutter{width:12px !important;height:12px !important}.splitter-collapse-btn{width:32px;height:32px}.splitter-collapse-btn i{font-size:14px}}.splitter-gutter:focus{outline:2px solid var(--gutter-hover-color);outline-offset:2px}.splitter-collapse-btn:focus{outline:2px solid var(--color-primary, #10b981);outline-offset:2px}`;

const AppSplitter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sizeChange = createEvent(this, "sizeChange");
        this.panelCollapse = createEvent(this, "panelCollapse");
        this.splitterDragStart = createEvent(this, "splitterDragStart");
        this.splitterDragEnd = createEvent(this, "splitterDragEnd");
    }
    get el() { return getElement(this); }
    // Basic Props
    direction = 'horizontal';
    gutterSize = 8;
    gutterColor = '#e5e7eb';
    gutterHoverColor = '#0de44dff';
    // Panel Configuration
    panels = [];
    sizes = [];
    // Premium Features
    snapThreshold = 20; // Snap to min/max when within threshold
    animated = true;
    persistState = false;
    storageKey = 'splitter-state';
    showGutterIcon = true;
    doubleClickCollapse = true;
    keyboardNavigation = true;
    rtl = false;
    // Styling
    theme = 'auto';
    rounded = false;
    elevated = false;
    isDragging = false;
    activeGutterIndex = -1;
    hoveredGutterIndex = -1;
    collapsedPanels = new Set();
    sizeChange;
    panelCollapse;
    splitterDragStart;
    splitterDragEnd;
    startPos = 0;
    startSizes = [];
    panelRefs = [];
    componentWillLoad() {
        this.initializeSizes();
        if (this.persistState) {
            this.loadState();
        }
    }
    componentDidLoad() {
        // Re-initialize sizes if slots weren't detected during componentWillLoad
        if (this.sizes.length === 0) {
            this.initializeSizes();
        }
        if (this.keyboardNavigation) {
            document.addEventListener('keydown', this.handleKeyDown);
        }
    }
    disconnectedCallback() {
        if (this.keyboardNavigation) {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    }
    handlePanelsChange() {
        this.initializeSizes();
    }
    initializeSizes() {
        const panelCount = this.getPanelCount();
        if (panelCount === 0)
            return;
        // Only initialize if sizes array is empty or doesn't match panel count
        if (this.sizes.length !== panelCount) {
            // Initialize with equal sizes or from panel config
            this.sizes = Array(panelCount).fill(0).map((_, i) => {
                return this.panels[i]?.size || (100 / panelCount);
            });
        }
    }
    getPanelCount() {
        const slots = this.el.querySelectorAll('[slot^="panel-"]');
        return Math.max(slots.length, this.panels.length);
    }
    loadState() {
        try {
            const stored = localStorage.getItem(this.storageKey);
            if (stored) {
                const state = JSON.parse(stored);
                this.sizes = state.sizes || this.sizes;
                this.collapsedPanels = new Set(state.collapsed || []);
            }
        }
        catch (e) {
            console.error('Failed to load splitter state:', e);
        }
    }
    saveState() {
        if (!this.persistState)
            return;
        try {
            const state = {
                sizes: this.sizes,
                collapsed: Array.from(this.collapsedPanels)
            };
            localStorage.setItem(this.storageKey, JSON.stringify(state));
        }
        catch (e) {
            console.error('Failed to save splitter state:', e);
        }
    }
    handleMouseDown = (e, gutterIndex) => {
        e.preventDefault();
        this.isDragging = true;
        this.activeGutterIndex = gutterIndex;
        this.startPos = this.direction === 'horizontal' ? e.clientX : e.clientY;
        this.startSizes = [...this.sizes];
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        this.splitterDragStart.emit({ index: gutterIndex });
    };
    handleMouseMove = (e) => {
        if (!this.isDragging || this.activeGutterIndex === -1)
            return;
        const currentPos = this.direction === 'horizontal' ? e.clientX : e.clientY;
        const delta = currentPos - this.startPos;
        const finalDelta = (this.rtl && this.direction === 'horizontal') ? -delta : delta;
        const containerSize = this.direction === 'horizontal'
            ? this.el.offsetWidth
            : this.el.offsetHeight;
        const deltaPercent = (finalDelta / containerSize) * 100;
        const newSizes = [...this.startSizes];
        const leftIndex = this.activeGutterIndex;
        const rightIndex = this.activeGutterIndex + 1;
        const leftPanel = this.panels[leftIndex];
        const rightPanel = this.panels[rightIndex];
        // Theoretical new sizes without clamping
        let nextLeft = this.startSizes[leftIndex] + deltaPercent;
        // Calculate the effective range for the gutter movement
        // Left movement (decreasing left panel size)
        const leftMin = leftPanel?.minSize !== undefined ? leftPanel.minSize : 0;
        const leftMax = leftPanel?.maxSize !== undefined ? leftPanel.maxSize : 100;
        // Right movement (decreasing right panel size)
        const rightMin = rightPanel?.minSize !== undefined ? rightPanel.minSize : 0;
        const rightMax = rightPanel?.maxSize !== undefined ? rightPanel.maxSize : 100;
        // The gutter can move in a range defined by BOTH panels
        // To decrease left size, we are limited by leftMin AND rightMax
        // To increase left size, we are limited by leftMax AND rightMin
        const combinedMin = Math.max(leftMin, (this.startSizes[leftIndex] + this.startSizes[rightIndex]) - rightMax);
        const combinedMax = Math.min(leftMax, (this.startSizes[leftIndex] + this.startSizes[rightIndex]) - rightMin);
        let finalLeft = Math.max(combinedMin, Math.min(combinedMax, nextLeft));
        // Snap to min/max if within threshold
        if (this.snapThreshold > 0) {
            if (Math.abs(finalLeft - leftMin) < this.snapThreshold)
                finalLeft = leftMin;
            if (Math.abs(this.startSizes[leftIndex] + this.startSizes[rightIndex] - finalLeft - rightMin) < this.snapThreshold) {
                finalLeft = this.startSizes[leftIndex] + this.startSizes[rightIndex] - rightMin;
            }
        }
        newSizes[leftIndex] = finalLeft;
        newSizes[rightIndex] = (this.startSizes[leftIndex] + this.startSizes[rightIndex]) - finalLeft;
        this.sizes = newSizes;
        this.sizeChange.emit({ sizes: this.sizes, index: this.activeGutterIndex });
    };
    handleMouseUp = () => {
        if (this.isDragging) {
            this.isDragging = false;
            this.splitterDragEnd.emit({ index: this.activeGutterIndex, sizes: this.sizes });
            this.activeGutterIndex = -1;
            this.saveState();
        }
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    };
    handleGutterDoubleClick = (gutterIndex) => {
        if (!this.doubleClickCollapse)
            return;
        const panel = this.panels[gutterIndex];
        if (!panel?.collapsible)
            return;
        this.toggleCollapse(gutterIndex);
    };
    toggleCollapse(panelIndex) {
        const isCollapsed = this.collapsedPanels.has(panelIndex);
        if (isCollapsed) {
            this.collapsedPanels.delete(panelIndex);
        }
        else {
            this.collapsedPanels.add(panelIndex);
            // Collapse to minSize or 0
            const minSize = this.panels[panelIndex]?.minSize || 0;
            this.sizes[panelIndex] = minSize;
        }
        this.collapsedPanels = new Set(this.collapsedPanels);
        this.panelCollapse.emit({ index: panelIndex, collapsed: !isCollapsed });
        this.saveState();
    }
    handleKeyDown = (e) => {
        if (!this.keyboardNavigation || this.activeGutterIndex === -1)
            return;
        const step = 5; // 5% step
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            e.preventDefault();
            this.adjustSize(this.activeGutterIndex, -step);
        }
        else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            e.preventDefault();
            this.adjustSize(this.activeGutterIndex, step);
        }
    };
    adjustSize(gutterIndex, delta) {
        const newSizes = [...this.sizes];
        newSizes[gutterIndex] += delta;
        newSizes[gutterIndex + 1] -= delta;
        this.sizes = newSizes;
        this.sizeChange.emit({ sizes: this.sizes, index: gutterIndex });
    }
    renderGutter(index) {
        const isActive = this.activeGutterIndex === index;
        const isHovered = this.hoveredGutterIndex === index;
        const gutterClasses = {
            'splitter-gutter': true,
            'splitter-gutter-active': isActive,
            'splitter-gutter-hovered': isHovered,
            'splitter-gutter-horizontal': this.direction === 'horizontal',
            'splitter-gutter-vertical': this.direction === 'vertical',
        };
        return (h("div", { class: gutterClasses, style: {
                width: this.direction === 'horizontal' ? `${this.gutterSize}px` : '100%',
                height: this.direction === 'vertical' ? `${this.gutterSize}px` : '100%',
                background: isHovered || isActive ? this.gutterHoverColor : this.gutterColor,
            }, onMouseDown: (e) => this.handleMouseDown(e, index), onDblClick: () => this.handleGutterDoubleClick(index), onMouseEnter: () => this.hoveredGutterIndex = index, onMouseLeave: () => this.hoveredGutterIndex = -1 }, this.showGutterIcon && (h("ui-icon", { name: `grip-${this.direction === 'horizontal' ? 'vertical' : 'lines'}`, library: "fontawesome" }))));
    }
    renderPanel(index) {
        const size = this.sizes[index] || 0;
        const isCollapsed = this.collapsedPanels.has(index);
        const panel = this.panels[index];
        const panelClasses = {
            'splitter-panel': true,
            'splitter-panel-collapsed': isCollapsed,
            'splitter-panel-animated': this.animated && !this.isDragging,
        };
        const panelStyle = {
            [this.direction === 'horizontal' ? 'width' : 'height']: `${size}%`,
            [this.direction === 'horizontal' ? 'height' : 'width']: '100%',
        };
        return (h("div", { ref: (el) => this.panelRefs[index] = el, class: panelClasses, style: panelStyle }, h("slot", { name: `panel-${index}` }), panel?.collapsible && (h("ui-button", { variant: "ghost", onClick: () => this.toggleCollapse(index), ariaLabel: isCollapsed ? 'Expand' : 'Collapse', icon: `chevron-${isCollapsed ? 'right' : 'left'}`, iconLibrary: "fontawesome", iconOnly: true, size: "sm" }))));
    }
    render() {
        const panelCount = this.getPanelCount();
        const panels = [];
        for (let i = 0; i < panelCount; i++) {
            panels.push(this.renderPanel(i));
            // Add gutter between panels (not after last panel)
            if (i < panelCount - 1) {
                panels.push(this.renderGutter(i));
            }
        }
        const containerClasses = {
            'splitter-container': true,
            [`splitter-${this.direction}`]: true,
            [`splitter-theme-${this.theme}`]: true,
            'splitter-rounded': this.rounded,
            'splitter-elevated': this.elevated,
            'splitter-dragging': this.isDragging,
            'splitter-rtl': this.rtl,
        };
        return (h("div", { key: 'e4576c74bbbb36dd9e15f0e7860efd48e878656c', class: containerClasses }, panels));
    }
    static get watchers() { return {
        "panels": [{
                "handlePanelsChange": 0
            }]
    }; }
};
AppSplitter.style = splitterCss();

export { AppSplitter as ui_splitter };
