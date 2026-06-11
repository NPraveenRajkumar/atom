import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const panelCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.panel-container{display:flex;flex-direction:column;position:relative;background-color:var(--panel-bg, #ffffff);border-radius:var(--panel-border-radius, 8px);overflow:hidden;transition:box-shadow 0.2s ease, border-color 0.2s ease}.panel-elevated{border:1px solid var(--panel-border-color, var(--border-default, #e5e7eb));box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)}.panel-active.panel-elevated{box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);border-color:var(--color-primary, #10b981)}.panel-outlined{border:1px solid var(--panel-border-color, var(--border-strong, #d1d5db));box-shadow:none}.panel-filled{border:1px solid transparent;background-color:var(--panel-filled-bg, var(--bg-secondary, #f3f4f6));box-shadow:none}.panel-filled .panel-header{background-color:transparent;border-bottom:1px solid rgba(0, 0, 0, 0.05);}.panel-flat{border:none;box-shadow:none;background:transparent}.panel-flat .panel-header{background:transparent;border-bottom:1px solid var(--border-default, #e5e7eb);padding-left:0;padding-right:0}.panel-flat .panel-content{padding-left:0;padding-right:0}.panel-flat .panel-footer{padding-left:0;padding-right:0}.panel-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;background-color:var(--panel-header-bg, var(--bg-primary, var(--text-standard, #ffffff)));border-bottom:1px solid var(--panel-border-color, var(--border-default, #e5e7eb));min-height:48px;user-select:none}.panel-title-wrapper{flex:1;display:flex;flex-direction:column;gap:2px;margin-right:16px}.panel-title{display:flex;align-items:center;gap:8px}.panel-title-text{margin:0;font-size:16px;font-weight:600;color:var(--panel-text-primary, var(--text-primary, #111827));line-height:1.4}.panel-subtitle{font-size:13px;color:var(--panel-text-secondary, var(--text-muted, #6b7280));line-height:1.4}.panel-actions{display:flex;align-items:center;gap:4px;}.panel-action-btn{display:inline-flex;align-items:center;justify-content:center;width:32px;height:32px;padding:0;border:none;background:transparent;border-radius:6px;color:var(--panel-action-color, var(--text-muted, #6b7280));cursor:pointer;transition:all 0.2s}.panel-action-btn:hover{background-color:var(--panel-action-hover-bg, var(--bg-secondary, #f3f4f6));color:var(--panel-text-primary, var(--text-primary, #111827))}.panel-action-btn:focus-visible{outline:2px solid var(--color-primary, #10b981);outline-offset:2px}.panel-action-btn .icon{width:18px;height:18px}.panel-action-list-popup{position:absolute;top:100%;right:0;margin-top:8px;background-color:var(--panel-bg, var(--bg-primary, var(--text-standard, #ffffff)));border:1px solid var(--panel-border-color, var(--border-default, #e5e7eb));border-radius:8px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);z-index:1001;min-width:150px;overflow:hidden}.panel-toggle-btn{transition:transform 0.3s ease}.panel-toggle-btn.collapsed{transform:rotate(180deg);}.panel-body-wrapper{display:flex;flex-direction:column;flex:1;min-height:0;position:relative;overflow:hidden}.panel-collapsed .panel-body-wrapper{display:none}.panel-content{flex:1;padding:16px;overflow-y:auto;min-height:0;color:var(--panel-text-primary, var(--text-secondary, #374151));font-size:14px;line-height:1.5;}.panel-content::-webkit-scrollbar{width:6px}.panel-content::-webkit-scrollbar-track{background:transparent}.panel-content::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.1);border-radius:10px}.panel-content:hover::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.2)}.panel-content.no-padding{padding:0}.panel-footer{padding:12px 16px;background-color:var(--panel-footer-bg, var(--bg-primary, #f9fafb));border-top:1px solid var(--panel-border-color, var(--border-default, #e5e7eb));display:flex;align-items:center;justify-content:flex-end;gap:8px}.panel-loading-overlay{position:absolute;inset:0;background-color:rgba(255, 255, 255, 0.7);backdrop-filter:blur(2px);z-index:10;display:flex;align-items:center;justify-content:center}.panel-spinner{width:30px;height:30px;border:3px solid var(--border-default, #e5e7eb);border-top-color:var(--color-primary, #10b981);border-radius:50%;animation:spin 0.8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}@media (prefers-color-scheme: dark){.panel-container{--panel-bg:var(--bg-primary, #1f2937);--panel-border-color:var(--border-default, #374151);--panel-text-primary:var(--bg-primary, #f3f4f6);--panel-text-secondary:var(--color-primary, #9ca3af);--panel-header-bg:var(--bg-primary, #1f2937)}.panel-filled{background-color:var(--bg-secondary, var(--text-primary, #111827))}.panel-footer{--panel-footer-bg:var(--bg-secondary, #111827)}.panel-action-btn{--panel-action-color:var(--text-muted, #9ca3af);--panel-action-hover-bg:var(--color-primary, #374151)}.panel-loading-overlay{background-color:rgba(31, 41, 55, 0.7)}.panel-spinner{border-color:var(--border-strong, #4b5563);border-top-color:var(--color-primary, #60a5fa)}.panel-theme-primary{--panel-theme-bg:var(--color-primary, #1e3a8a);--panel-theme-text:var(--color-primary, #bfdbfe)}.panel-theme-success{--panel-theme-bg:var(--color-primary, #064e3b);--panel-theme-text:var(--color-success, #a7f3d0)}.panel-theme-warning{--panel-theme-bg:var(--color-danger, #78350f);--panel-theme-text:var(--color-primary, #fde68a)}.panel-theme-danger{--panel-theme-bg:var(--color-danger, #7f1d1d);--panel-theme-text:var(--color-danger, #fecaca)}.panel-theme-info{--panel-theme-bg:var(--color-primary, #164e63);--panel-theme-text:var(--color-primary, #a5f3fc)}}.panel-theme-primary{--panel-theme-color:var(--color-primary, #10b981);--panel-theme-bg:var(--bg-primary, #eff6ff);--panel-theme-border:var(--color-primary, #10b981);--panel-theme-text:var(--color-primary, #1e40af)}.panel-theme-success{--panel-theme-color:var(--color-success, #10b981);--panel-theme-bg:var(--bg-primary, #d1fae5);--panel-theme-border:var(--color-success, #10b981);--panel-theme-text:var(--color-primary, #065f46)}.panel-theme-warning{--panel-theme-color:var(--color-warning, #f59e0b);--panel-theme-bg:var(--bg-primary, #fef3c7);--panel-theme-border:var(--color-warning, #f59e0b);--panel-theme-text:var(--color-danger, #92400e)}.panel-theme-danger{--panel-theme-color:var(--color-danger, #ef4444);--panel-theme-bg:var(--bg-primary, #fee2e2);--panel-theme-border:var(--color-danger, #ef4444);--panel-theme-text:var(--color-danger, #991b1b)}.panel-theme-info{--panel-theme-color:var(--color-info, #06b6d4);--panel-theme-bg:var(--bg-primary, #cffafe);--panel-theme-border:var(--color-info, #06b6d4);--panel-theme-text:var(--color-primary, #155e75)}.panel-theme-primary .panel-header,.panel-theme-success .panel-header,.panel-theme-warning .panel-header,.panel-theme-danger .panel-header,.panel-theme-info .panel-header{background-color:var(--panel-theme-bg);border-bottom-color:var(--panel-theme-border);border-left:4px solid var(--panel-theme-color)}.panel-theme-primary .panel-title-text,.panel-theme-success .panel-title-text,.panel-theme-warning .panel-title-text,.panel-theme-danger .panel-title-text,.panel-theme-info .panel-title-text{color:var(--panel-theme-color)}.panel-theme-primary .panel-content,.panel-theme-success .panel-content,.panel-theme-warning .panel-content,.panel-theme-danger .panel-content,.panel-theme-info .panel-content{color:var(--panel-theme-text)}.panel-theme-primary .panel-subtitle,.panel-theme-success .panel-subtitle,.panel-theme-warning .panel-subtitle,.panel-theme-danger .panel-subtitle,.panel-theme-info .panel-subtitle{color:var(--panel-theme-text);opacity:0.8}.panel-badge{display:inline-flex;align-items:center;justify-content:center;font-size:11px;font-weight:600;line-height:1;border-radius:10px;margin-left:8px}.panel-badge-dot{width:8px;height:8px;border-radius:50%;background-color:var(--panel-theme-color, var(--color-primary, #10b981))}.panel-badge-count,.panel-badge-text{padding:3px 8px;background-color:var(--panel-theme-color, var(--color-primary, #10b981));color:var(--text-standard, #ffffff);min-width:20px}@keyframes slideIn{from{max-height:0;opacity:0}to{max-height:1000px;opacity:1}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes scaleIn{from{transform:scale(0.95);opacity:0}to{transform:scale(1);opacity:1}}.panel-animation-slide .panel-body-wrapper{animation:slideIn var(--animation-duration, 300ms) ease-out}.panel-animation-fade .panel-body-wrapper{animation:fadeIn var(--animation-duration, 300ms) ease-out}.panel-animation-scale .panel-body-wrapper{animation:scaleIn var(--animation-duration, 300ms) ease-out}.panel-minimized .panel-body-wrapper{display:none}.panel-minimized{height:auto !important}.panel-maximized{position:fixed !important;top:0 !important;left:0 !important;width:100vw !important;height:100vh !important;max-width:none !important;max-height:none !important;z-index:9999 !important;border-radius:0 !important}.panel-draggable{cursor:move}.panel-dragging{opacity:0.9;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);cursor:grabbing !important}.panel-draggable .panel-header{cursor:move}.panel-resizable{position:relative}.panel-resize-handles{position:absolute;inset:0;pointer-events:none}.resize-handle{position:absolute;pointer-events:all;z-index:10}.resize-n,.resize-s{left:0;right:0;height:8px;cursor:ns-resize}.resize-n{top:0}.resize-s{bottom:0}.resize-e,.resize-w{top:0;bottom:0;width:8px;cursor:ew-resize}.resize-e{right:0}.resize-w{left:0}.resize-ne,.resize-nw,.resize-se,.resize-sw{width:12px;height:12px}.resize-ne{top:0;right:0;cursor:nesw-resize}.resize-nw{top:0;left:0;cursor:nwse-resize}.resize-se{bottom:0;right:0;cursor:nwse-resize}.resize-sw{bottom:0;left:0;cursor:nesw-resize}.panel-resizing{user-select:none}.panel-pinned{z-index:1000;box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25)}.panel-container:focus-visible{outline:2px solid var(--color-primary, #10b981);outline-offset:2px}.panel-minimize-btn:hover{background-color:var(--bg-primary, #fef3c7);color:var(--color-warning, #f59e0b)}.panel-maximize-btn:hover{background-color:var(--bg-primary, #dbeafe);color:var(--color-primary, #10b981)}@media (max-width: 768px){.panel-draggable{position:relative !important;transform:none !important}.panel-resizable .panel-resize-handles{display:none}}.panel-pin-btn.active{color:var(--color-primary, #10b981);background-color:var(--bg-primary, #dbeafe)}.panel-pin-btn.active svg{fill:currentColor}.panel-resizable::after{content:"";position:absolute;bottom:4px;right:4px;width:12px;height:12px;background-image:radial-gradient(circle, var(--bg-secondary, #d1d5db) 1px, transparent 1px);background-size:4px 4px;opacity:0.6;pointer-events:none}.panel-backdrop{position:fixed;inset:0;background-color:rgba(0, 0, 0, 0.4);backdrop-filter:blur(2px);z-index:999;animation:fadeIn 0.2s ease-out}.panel-modal{box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);z-index:1000}.panel-glass{background-color:rgba(255, 255, 255, 0.7);backdrop-filter:blur(12px);border:1px solid rgba(255, 255, 255, 0.3)}.panel-theme-dark .panel-glass,:host-context(.dark) .panel-glass{background-color:rgba(30, 41, 59, 0.6);border-color:rgba(255, 255, 255, 0.1)}[class*=panel-position-]{position:fixed;z-index:1000;margin:0}.panel-position-center{top:50%;left:50%;translate:-50% -50%}.panel-position-top{top:20px;left:50%;translate:-50% 0}.panel-position-bottom{bottom:20px;left:50%;translate:-50% 0}.panel-position-left{top:50%;left:20px;translate:0 -50%}.panel-position-right{top:50%;right:20px;translate:0 -50%}.panel-position-top-left{top:20px;left:20px}.panel-position-top-right{top:20px;right:20px}.panel-position-bottom-left{bottom:20px;left:20px}.panel-position-bottom-right{bottom:20px;right:20px}.panel-aura{box-shadow:0 0 0 0 var(--panel-theme-color, rgba(var(--color-primary-rgb, 59, 130, 246), 0.4));animation:panelAuraPulse 2s infinite}@keyframes panelAuraPulse{0%{box-shadow:0 0 0 0 var(--panel-theme-color, rgba(var(--color-primary-rgb, 59, 130, 246), 0.4))}70%{box-shadow:0 0 0 15px transparent}100%{box-shadow:0 0 0 0 transparent}}.panel-search-container{flex:1;max-width:300px;margin:0 20px}.search-inner{position:relative;display:flex;align-items:center;background:rgba(0, 0, 0, 0.05);border-radius:6px;padding:4px 8px;border:1px solid rgba(0, 0, 0, 0.05);transition:all 0.2s}.search-inner:focus-within{background:var(--bg-primary, #ffffff);border-color:var(--color-primary, #10b981);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.search-icon{width:14px;height:14px;opacity:0.5;margin-right:8px}.search-inner input{border:none;background:transparent;font-size:13px;width:100%;color:inherit;padding:2px 0;outline:none}.search-clear{background:none;border:none;color:var(--color-primary, #9ca3af);cursor:pointer;padding:0 4px;font-size:10px}.panel-elevation-0{box-shadow:none}.panel-elevation-1{box-shadow:0 1px 3px rgba(0, 0, 0, 0.12)}.panel-elevation-2{box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1)}.panel-elevation-3{box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1)}.panel-elevation-4{box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1)}.panel-elevation-5{box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25)}@media (prefers-color-scheme: dark){.panel-content::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.1)}.panel-content:hover::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.2)}}.panel-header-icon-inline{font-size:1.2em;line-height:1}`;

const Panel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.panelClose = createEvent(this, "panelClose");
        this.panelSettings = createEvent(this, "panelSettings");
        this.toggle = createEvent(this, "toggle");
        this.panelMinimize = createEvent(this, "panelMinimize");
        this.panelMaximize = createEvent(this, "panelMaximize");
        this.panelRestore = createEvent(this, "panelRestore");
        this.panelDragStart = createEvent(this, "panelDragStart");
        this.panelDrag = createEvent(this, "panelDrag");
        this.panelDragEnd = createEvent(this, "panelDragEnd");
        this.panelResizeStart = createEvent(this, "panelResizeStart");
        this.panelResize = createEvent(this, "panelResize");
        this.panelResizeEnd = createEvent(this, "panelResizeEnd");
        this.panelSearch = createEvent(this, "panelSearch");
    }
    get element() { return getElement(this); }
    /**
     * Unique identifier for the panel
     */
    panelId = '';
    /**
     * Panel width
     */
    width = '100%';
    /**
     * Panel height
     */
    height = 'auto';
    /**
     * Maximum width of the panel
     */
    maxWidth = 'none';
    /**
     * Maximum height of the panel
     */
    maxHeight = 'none';
    /**
     * Show close button
     */
    showClose = true;
    /**
     * Show settings button
     */
    showSettings = true;
    /**
     * Panel title text
     */
    panelTitle = '';
    /**
     * Panel subtitle text
     */
    panelSubtitle = '';
    /**
     * Visual variant
      */
    variant = 'elevated';
    /**
     * Whether the panel is toggleable (collapsible)
     */
    toggleable = false;
    /**
     * Whether the panel is currently collapsed
     */
    collapsed = false;
    /**
     * Whether the panel is in loading state
     */
    loading = false;
    /**
     * Remove processing on content padding
     */
    noPadding = false;
    /**
     * Color theme for the panel
     */
    theme = 'default';
    /**
     * Animation duration for collapse/expand
     */
    animationDuration = '300ms';
    /**
     * Animation type for collapse/expand
     */
    animationType = 'slide';
    /**
     * Badge content (number or text)
     */
    badge = '';
    /**
     * Badge variant style
     */
    badgeVariant = 'count';
    /**
     * Panel icon to show in header
     */
    icon = '';
    /**
     * Enable keyboard navigation
     */
    keyboardNav = true;
    /**
     * Dynamic flowing glow effect (Aura)
     */
    aura = false;
    /**
     * Integrated search bar in header
     */
    enableSearch = false;
    /**
     * Search placeholder text
     */
    searchPlaceholder = 'Search content...';
    /**
     * Elevation level (0-5) for shadow depth
     */
    elevation = 2;
    panelClose;
    panelSettings;
    toggle;
    /**
     * Minimizable panel
     */
    minimizable = false;
    /**
     * Maximizable panel
     */
    maximizable = false;
    /**
     * Minimized state
     */
    minimized = false;
    /**
     * Maximized state
     */
    maximized = false;
    /**
     * Draggable panel
     */
    isDraggable = false;
    /** Limit dragging within the viewport */
    bounds = 'none';
    /** Snap to window edges when dragging close to them */
    edgeSnapping = false;
    /** Snap distance in pixels */
    snapThreshold = 20;
    /** Snap to a grid while dragging */
    snapToGrid = false;
    /** Size of the grid for snapping */
    gridSize = 20;
    /** Apply 3D tilt physics during drag */
    dragPhysics = false;
    /**
     * Resizable panel
     */
    resizable = false;
    /**
     * Minimum width when resizing
     */
    minWidth = '200px';
    /**
     * Minimum height when resizing
     */
    minHeight = '100px';
    /**
     * Pinned panel (stays on top)
     */
    pinned = false;
    /**
     * Key to persist the panel's open state and size in localStorage
     */
    persistenceId;
    /**
     * Overflow behavior
     */
    overflow = 'auto';
    /**
     * Position of the panel (docking)
     */
    position;
    /**
     * Horizontal position (e.g., '100px', '20%'). Used if position is not set.
     */
    x;
    /**
     * Vertical position (e.g., '100px', '20%'). Used if position is not set.
     */
    y;
    /**
     * Show backdrop behind the panel (modal mode)
     */
    modal = false;
    /**
     * Close panel when clicking on backdrop
     */
    dismissible = false;
    /**
     * Glassmorphism effect
     */
    glass = false;
    /**
     * Background color of the panel
     */
    backgroundColor = 'white';
    panelMinimize;
    panelMaximize;
    panelRestore;
    panelDragStart;
    panelDrag;
    panelDragEnd;
    panelResizeStart;
    panelResize;
    panelResizeEnd;
    panelSearch;
    // @ts-ignore - Stored for future state restoration feature
    previousDimensions = { width: '100%', height: 'auto' };
    isDragging = false;
    isResizing = false;
    currentWidth;
    currentHeight;
    isActive = false;
    searchQuery = '';
    dragStartX = 0;
    dragStartY = 0;
    dragPosition = { x: 0, y: 0 };
    resizeStartWidth = 0;
    initialRect;
    lastMouseX = 0;
    dragTilt = 0;
    resizeStartHeight = 0;
    resizeHandle = '';
    componentWillLoad() {
        this.loadState();
        if (!this.currentWidth)
            this.currentWidth = this.width;
        if (!this.currentHeight)
            this.currentHeight = this.height;
    }
    loadState() {
        if (this.persistenceId) {
            const saved = localStorage.getItem(`ui-panel-${this.persistenceId}`);
            if (saved) {
                try {
                    const state = JSON.parse(saved);
                    this.collapsed = state.collapsed ?? this.collapsed;
                    this.minimized = state.minimized ?? this.minimized;
                    this.maximized = state.maximized ?? this.maximized;
                    this.dragPosition = state.dragPosition ?? this.dragPosition;
                    this.currentWidth = state.currentWidth ?? this.currentWidth;
                    this.currentHeight = state.currentHeight ?? this.currentHeight;
                    this.pinned = state.pinned ?? this.pinned;
                    this.previousDimensions = state.previousDimensions ?? this.previousDimensions;
                }
                catch (e) {
                    console.warn('Failed to load panel state', e);
                }
            }
        }
    }
    saveState() {
        if (this.persistenceId) {
            const state = {
                collapsed: this.collapsed,
                minimized: this.minimized,
                maximized: this.maximized,
                dragPosition: this.dragPosition,
                currentWidth: this.currentWidth,
                currentHeight: this.currentHeight,
                pinned: this.pinned,
                previousDimensions: this.previousDimensions
            };
            localStorage.setItem(`ui-panel-${this.persistenceId}`, JSON.stringify(state));
        }
    }
    handleFocus = () => {
        this.isActive = true;
        // Notify other panels to deactivate if needed, or handled via CSS z-index
    };
    handleBlur = () => {
        this.isActive = false;
    };
    handleKeyDown = (e) => {
        if (!this.keyboardNav)
            return;
        if (e.key === 'Escape' && this.showClose) {
            this.handleClose(e);
        }
        else if ((e.key === ' ' || e.key === 'Enter') && this.toggleable) {
            e.preventDefault();
            this.handleToggle();
        }
        else if (this.isDraggable && e.shiftKey) {
            // Keyboard drag
            const step = this.snapToGrid ? this.gridSize : 20;
            if (e.key === 'ArrowUp') {
                this.dragPosition = { ...this.dragPosition, y: this.dragPosition.y - step };
                e.preventDefault();
            }
            if (e.key === 'ArrowDown') {
                this.dragPosition = { ...this.dragPosition, y: this.dragPosition.y + step };
                e.preventDefault();
            }
            if (e.key === 'ArrowLeft') {
                this.dragPosition = { ...this.dragPosition, x: this.dragPosition.x - step };
                e.preventDefault();
            }
            if (e.key === 'ArrowRight') {
                this.dragPosition = { ...this.dragPosition, x: this.dragPosition.x + step };
                e.preventDefault();
            }
            this.saveState();
            this.panelDrag.emit({ panelId: this.panelId, x: this.dragPosition.x, y: this.dragPosition.y });
        }
    };
    handleMinimize = (e) => {
        e.stopPropagation();
        this.minimized = !this.minimized;
        if (this.minimized && this.maximized) {
            this.maximized = false;
        }
        this.panelMinimize.emit({ panelId: this.panelId });
        this.saveState();
    };
    handleMaximize = (e) => {
        e.stopPropagation();
        if (!this.maximized) {
            // Store current dimensions before maximizing
            this.previousDimensions = { width: this.currentWidth, height: this.currentHeight };
            this.maximized = true;
            this.minimized = false;
            this.panelMaximize.emit({ panelId: this.panelId });
        }
        else {
            // Restore previous dimensions
            this.maximized = false;
            // Apply previousDimensions
            this.currentWidth = this.previousDimensions.width;
            this.currentHeight = this.previousDimensions.height;
            this.panelRestore.emit({ panelId: this.panelId });
        }
        this.saveState();
    };
    handleDragStart = (e) => {
        if (!this.isDraggable || this.maximized)
            return;
        this.isDragging = true;
        this.dragStartX = e.clientX - this.dragPosition.x;
        this.dragStartY = e.clientY - this.dragPosition.y;
        this.initialRect = this.element.getBoundingClientRect();
        this.lastMouseX = e.clientX;
        this.panelDragStart.emit({ panelId: this.panelId, x: this.dragPosition.x, y: this.dragPosition.y });
        document.addEventListener('mousemove', this.handleDragMove);
        document.addEventListener('mouseup', this.handleDragEnd);
    };
    handleDragMove = (e) => {
        if (!this.isDragging)
            return;
        let deltaX = e.clientX - this.dragStartX;
        let deltaY = e.clientY - this.dragStartY;
        if (this.dragPhysics) {
            const vX = e.clientX - this.lastMouseX;
            this.lastMouseX = e.clientX;
            const tiltX = Math.max(-15, Math.min(15, vX * 0.4));
            // Ease into tilt smoothly
            this.dragTilt = tiltX;
        }
        if (this.snapToGrid && this.gridSize > 0) {
            deltaX = Math.round(deltaX / this.gridSize) * this.gridSize;
            deltaY = Math.round(deltaY / this.gridSize) * this.gridSize;
        }
        let newX = deltaX;
        let newY = deltaY;
        if (this.bounds === 'viewport' && this.initialRect) {
            const screenX = this.initialRect.left + newX;
            const screenY = this.initialRect.top + newY;
            const minVisible = 40;
            const viewWidth = window.innerWidth;
            const viewHeight = window.innerHeight;
            if (screenX + this.initialRect.width < minVisible) {
                newX = minVisible - this.initialRect.width - this.initialRect.left;
            }
            if (screenX > viewWidth - minVisible) {
                newX = viewWidth - minVisible - this.initialRect.left;
            }
            if (screenY < 0) {
                newY = -this.initialRect.top;
            }
            if (screenY > viewHeight - minVisible) {
                newY = viewHeight - minVisible - this.initialRect.top;
            }
        }
        if (this.edgeSnapping && this.initialRect) {
            const screenX = this.initialRect.left + newX;
            const screenY = this.initialRect.top + newY;
            const vW = window.innerWidth;
            const vH = window.innerHeight;
            const t = this.snapThreshold;
            if (Math.abs(screenX) < t) {
                newX = -this.initialRect.left;
            }
            if (Math.abs(screenY) < t) {
                newY = -this.initialRect.top;
            }
            if (Math.abs(screenX + this.initialRect.width - vW) < t) {
                newX = vW - this.initialRect.width - this.initialRect.left;
            }
            if (Math.abs(screenY + this.initialRect.height - vH) < t) {
                newY = vH - this.initialRect.height - this.initialRect.top;
            }
        }
        this.dragPosition = { x: newX, y: newY };
        this.panelDrag.emit({ panelId: this.panelId, x: newX, y: newY });
    };
    handleDragEnd = () => {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        if (this.dragPhysics)
            this.dragTilt = 0;
        if (this.edgeSnapping && this.initialRect) {
            const screenX = this.initialRect.left + this.dragPosition.x;
            const vW = window.innerWidth;
            if (screenX <= 0) {
                this.maximized = false;
                this.currentWidth = '50vw';
                this.currentHeight = '100vh';
                this.dragPosition = { x: -this.initialRect.left, y: -this.initialRect.top };
            }
            else if (screenX + this.initialRect.width >= vW) {
                this.maximized = false;
                this.currentWidth = '50vw';
                this.currentHeight = '100vh';
                this.dragPosition = { x: vW - (vW / 2) - this.initialRect.left, y: -this.initialRect.top };
            }
        }
        this.panelDragEnd.emit({ panelId: this.panelId, x: this.dragPosition.x, y: this.dragPosition.y });
        this.saveState();
        document.removeEventListener('mousemove', this.handleDragMove);
        document.removeEventListener('mouseup', this.handleDragEnd);
    };
    handleResizeStart = (e, handle) => {
        if (!this.resizable)
            return;
        e.stopPropagation();
        this.isResizing = true;
        this.resizeHandle = handle;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
        const rect = this.element.getBoundingClientRect();
        this.resizeStartWidth = rect.width;
        this.resizeStartHeight = rect.height;
        this.panelResizeStart.emit({ panelId: this.panelId, width: rect.width, height: rect.height });
        document.addEventListener('mousemove', this.handleResizeMove);
        document.addEventListener('mouseup', this.handleResizeEnd);
    };
    handleResizeMove = (e) => {
        if (!this.isResizing)
            return;
        const deltaX = e.clientX - this.dragStartX;
        const deltaY = e.clientY - this.dragStartY;
        let newWidth = this.resizeStartWidth;
        let newHeight = this.resizeStartHeight;
        let diffX = 0;
        let diffY = 0;
        if (this.resizeHandle.includes('e'))
            newWidth += deltaX;
        if (this.resizeHandle.includes('w')) {
            newWidth -= deltaX;
            diffX = deltaX;
        }
        if (this.resizeHandle.includes('s'))
            newHeight += deltaY;
        if (this.resizeHandle.includes('n')) {
            newHeight -= deltaY;
            diffY = deltaY;
        }
        // Apply min dimensions
        const minW = parseInt(this.minWidth) || 200;
        const minH = parseInt(this.minHeight) || 100;
        if (newWidth < minW) {
            if (this.resizeHandle.includes('w')) {
                diffX = this.resizeStartWidth - minW;
            }
            newWidth = minW;
        }
        if (newHeight < minH) {
            if (this.resizeHandle.includes('n')) {
                diffY = this.resizeStartHeight - minH;
            }
            newHeight = minH;
        }
        this.currentWidth = `${newWidth}px`;
        this.currentHeight = `${newHeight}px`;
        if (this.resizeHandle.includes('w') || this.resizeHandle.includes('n')) {
            this.dragPosition = {
                x: this.dragPosition.x + diffX,
                y: this.dragPosition.y + diffY
            };
        }
        this.panelResize.emit({ panelId: this.panelId, width: newWidth, height: newHeight });
    };
    handleResizeEnd = () => {
        if (!this.isResizing)
            return;
        this.isResizing = false;
        const rect = this.element.getBoundingClientRect();
        this.panelResizeEnd.emit({ panelId: this.panelId, width: rect.width, height: rect.height });
        this.saveState();
        document.removeEventListener('mousemove', this.handleResizeMove);
        document.removeEventListener('mouseup', this.handleResizeEnd);
    };
    handleClose = (e) => {
        e.stopPropagation();
        this.panelClose.emit({ panelId: this.panelId });
    };
    showActionList = false;
    handleSettings = (e) => {
        e.stopPropagation();
        this.showActionList = !this.showActionList;
        this.panelSettings.emit({ panelId: this.panelId });
        if (this.showActionList) {
            document.addEventListener('click', this.closeActionList);
        }
        else {
            document.removeEventListener('click', this.closeActionList);
        }
    };
    closeActionList = (e) => {
        const isClickInside = this.element.shadowRoot?.querySelector('.panel-settings-wrapper')?.contains(e.target) || this.element.contains(e.target);
        if (!isClickInside) {
            this.showActionList = false;
            document.removeEventListener('click', this.closeActionList);
        }
    };
    handleSearchInput = (e) => {
        this.searchQuery = e.detail;
        this.panelSearch.emit({ query: this.searchQuery });
    };
    handleToggle = () => {
        if (this.toggleable) {
            this.collapsed = !this.collapsed;
            this.toggle.emit({ collapsed: this.collapsed });
            this.saveState();
        }
    };
    handlePinToggle = (e) => {
        e.stopPropagation();
        this.pinned = !this.pinned;
        this.saveState();
    };
    render() {
        const panelStyle = {
            width: this.maximized ? '100vw' : this.currentWidth,
            height: this.collapsed || this.minimized ? 'auto' : (this.maximized ? '100vh' : this.currentHeight),
            maxWidth: this.maximized ? 'none' : this.maxWidth,
            maxHeight: this.maximized ? 'none' : this.maxHeight,
            '--animation-duration': this.animationDuration,
            transform: this.isDraggable ? `translate(${this.dragPosition.x}px, ${this.dragPosition.y}px)` + (this.dragPhysics && this.isDragging ? ` rotateY(${this.dragTilt}deg) rotateZ(${this.dragTilt * 0.1}deg)` : '') : '',
            transition: this.isDragging && !this.snapToGrid ? 'transform 0.1s ease-out' : 'transform 0.2s cubic-bezier(0.2, 0.8, 0.2, 1), width 0.3s ease, height 0.3s ease',
            position: this.position ? 'fixed' : (this.x || this.y ? 'fixed' : (this.isDraggable || this.maximized ? 'fixed' : 'relative')),
            top: this.maximized ? '0' : (this.y ? this.y : (this.position ? '' : 'auto')),
            left: this.maximized ? '0' : (this.x ? this.x : (this.position ? '' : 'auto')),
            right: this.position || this.x ? '' : 'auto',
            bottom: this.position || this.y ? '' : 'auto',
            zIndex: this.pinned || this.modal ? '1000' : (this.isActive || this.isDraggable ? '101' : (this.isDraggable ? '100' : 'auto')),
            margin: '0',
            '--panel-bg': this.backgroundColor || 'white',
            'background-color': 'var(--panel-bg, #ffffff)'
        };
        const containerClasses = {
            'panel-container': true,
            'panel-active': this.isActive,
            [`panel-${this.variant}`]: true,
            [`panel-theme-${this.theme}`]: true,
            [`panel-animation-${this.animationType}`]: true,
            'panel-collapsed': this.collapsed,
            'panel-minimized': this.minimized,
            'panel-maximized': this.maximized,
            'panel-loading': this.loading,
            'panel-draggable': this.isDraggable,
            'panel-dragging': this.isDragging,
            'panel-resizable': this.resizable,
            'panel-resizing': this.isResizing,
            'panel-pinned': this.pinned,
            'panel-modal': this.modal,
            'panel-glass': this.glass,
            'panel-aura': this.aura,
            'panel-with-search': this.enableSearch,
            [`panel-elevation-${this.elevation}`]: true,
            [`panel-position-${this.position}`]: !!this.position,
        };
        const contentStyle = {
            overflow: this.overflow,
        };
        // Overlay click handler
        const handleOverlayClick = (e) => {
            if (this.modal && this.dismissible) {
                e.stopPropagation();
                this.handleClose(e);
            }
        };
        return (h("div", { key: '843a2cdb343598710c2e3cf1d04994e362a0f33b', class: containerClasses, style: panelStyle, onKeyDown: this.handleKeyDown, onFocus: this.handleFocus, onBlur: this.handleBlur, tabindex: this.keyboardNav ? 0 : -1, role: "region", "aria-label": this.panelTitle || 'Panel', "aria-expanded": !this.collapsed && !this.minimized }, this.modal && h("div", { key: '96a9377520a2998e820d02159da6bdaba2838dc9', class: "panel-backdrop", onClick: handleOverlayClick }), h("div", { key: '92adc3528c404b4d4338a4c2960463a48abeb282', class: "panel-header", onClick: this.toggleable ? this.handleToggle : undefined, onMouseDown: this.isDraggable ? this.handleDragStart : undefined, style: { cursor: this.isDraggable ? 'move' : (this.toggleable ? 'pointer' : 'default') } }, h("div", { key: 'b8baae2f2f4c4ae873c0a6f332d87dda76e4e3cd', class: "panel-title-wrapper" }, h("div", { key: 'cf6ca464d5fefea869a43388126fdef0b3bf71a2', class: "panel-title" }, this.icon && h("span", { key: 'a8c6607d8e1d0347440830458b1aaa13fef70966', class: "panel-header-icon-inline" }, this.icon), this.panelTitle && h("h3", { key: '2b99cbe49e2391639e619afa8ab2701def0deee3', class: "panel-title-text" }, this.panelTitle), h("slot", { key: '62cdfbaff1db11a4005c8b5ac2b92627edd07ebf', name: "header-icon" }), this.badge && (h("span", { key: '1b90d8c207d75555523ac1bfd74a13cae26b41de', class: `panel-badge panel-badge-${this.badgeVariant}` }, this.badgeVariant === 'dot' ? '' : this.badge))), this.panelSubtitle && h("div", { key: '6b56cd614017acc97e28327cfea0d5b4e4a83ef7', class: "panel-subtitle" }, this.panelSubtitle), h("slot", { key: '96e631d10bd2d3c35bca1183cc72a0c185fe0d05', name: "header" })), this.enableSearch && (h("div", { key: '1f2533ac720e317df6e0bf170bc16eb1eda5e764', class: "panel-search-container", onClick: (e) => e.stopPropagation() }, h("div", { key: '77afd05fef848e31b845692fe02d516987a4e963', class: "search-inner" }, h("ui-icon", { key: '844401caaf4fcfcb744f806ec9badd3e4d3a6ff2', name: "search", library: "lucide", class: "search-icon", size: "1.2em" }), h("ui-input", { key: 'ab85da17a38ac78c81d5bb776aca1f2dcb2f15c4', type: "text", placeholder: this.searchPlaceholder, onInputChange: this.handleSearchInput, value: this.searchQuery, size: "sm", fullWidth: true }), this.searchQuery && (h("ui-button", { key: 'b2c298aba23825796122bf235816c2eb3b36d9a4', variant: "ghost", class: "search-clear", onClick: () => { this.searchQuery = ''; this.panelSearch.emit({ query: '' }); }, ariaLabel: "Clear search", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "xxs" }))))), h("div", { key: '3c1bbc4de3923fab63d3d213a420ea20b9fc76f2', class: "panel-actions" }, h("slot", { key: '4df5712a389b6b8f5a5fb819d7e2ebee0228dd42', name: "header-actions" }), h("ui-button", { key: '9da9f9d850fd944fa71e53ea305f3b9cd079a064', variant: "ghost", class: `panel-pin-btn ${this.pinned ? 'active' : ''}`, onClick: this.handlePinToggle, ariaLabel: this.pinned ? "Unpin" : "Pin", icon: "pin", iconLibrary: "lucide", iconOnly: true, size: "sm", title: this.pinned ? "Unpin" : "Pin" }), this.minimizable && !this.maximized && (h("ui-button", { key: 'bb57989ff64f7e40cac99c20ab80b7ba3b5571ae', variant: "ghost", onClick: this.handleMinimize, ariaLabel: "Minimize panel", icon: "minus", iconLibrary: "lucide", iconOnly: true, size: "sm", title: "Minimize" })), this.maximizable && !this.minimized && (h("ui-button", { key: 'a8c74703bf14e4542825bbeb3d439288bf0ae6ca', variant: "ghost", onClick: this.handleMaximize, ariaLabel: this.maximized ? "Restore" : "Maximize", icon: this.maximized ? "copy" : "square", iconLibrary: "lucide", iconOnly: true, size: "sm", title: this.maximized ? "Restore" : "Maximize" })), this.showSettings && (h("div", { key: 'cabe3fd3cbd49f8501f60c63fa308844bd33ab85', class: "panel-settings-wrapper", style: { position: 'relative' } }, h("ui-button", { key: '84ce872e7528dee72cfa2b574acf999a94b3cf03', variant: "ghost", onClick: this.handleSettings, ariaLabel: "Panel settings", icon: "settings", iconLibrary: "lucide", iconOnly: true, size: "sm", title: "Settings" }), this.showActionList && (h("div", { key: '4992efa9846d614f721bc06c7744694d0019f201', class: "panel-action-list-popup" }, h("slot", { key: '2e13a0eb84b6bc48c02136e730915bd7b35ea432', name: "action-list" }))))), this.toggleable && (h("ui-button", { key: '7b74e90b36016a2c2410bf59296d1c8b6ccb48f7', variant: "ghost", class: `panel-action-btn panel-toggle-btn ${this.collapsed ? 'collapsed' : ''}`, onClick: (e) => { e.stopPropagation(); this.handleToggle(); }, ariaLabel: this.collapsed ? "Expand" : "Collapse", icon: "chevron-up", iconLibrary: "lucide", iconOnly: true, size: "sm" })), this.showClose && (h("ui-button", { key: '7a84ee96567a763bbf68cc187807439a3ef70b1b', variant: "ghost", onClick: this.handleClose, ariaLabel: "Close panel", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm", title: "Close" })))), !this.minimized && (h("div", { key: 'd15ea87f83ad63ffea4edf8017b23c5795a3b848', class: "panel-body-wrapper" }, this.loading && (h("div", { key: 'd6e3f9c0c43950d232643a19bfb2907c138e1afd', class: "panel-loading-overlay" }, h("div", { key: '08a48431ac6bb39b3c27444b18ea2f5cd29d55c0', class: "panel-spinner" }))), h("div", { key: 'c81065f34b525c67e082deffc9a41177c7b654d7', class: `panel-content ${this.noPadding ? 'no-padding' : ''}`, style: contentStyle }, h("slot", { key: '5aacbe8e43c160570596ac2aff83d00098b438c0', name: "content" }), h("slot", { key: '4caeef2dd57a822dc98c5fb1ec6fca10b3a62796' })), h("div", { key: '14d8117a5004c0522a0108a3879612cec4158344', class: "panel-footer" }, h("slot", { key: 'ca2f91902d37806ad5f4e4a5eebc67bc9fb5043a', name: "footer" })))), this.resizable && !this.maximized && !this.minimized && (h("div", { key: '4b22c21852d6f3cfc46c64d205db8d3276aabbbe', class: "panel-resize-handles" }, h("div", { key: '3bcf0a8f5418adbe5e871d872c4355e6aa03f384', class: "resize-handle resize-n", onMouseDown: (e) => this.handleResizeStart(e, 'n') }), h("div", { key: '377eb4f44c1d2a2991b2cf92dd57ec5eb120b040', class: "resize-handle resize-s", onMouseDown: (e) => this.handleResizeStart(e, 's') }), h("div", { key: '0bd73e6d97af791249f6876b013f5a162822477e', class: "resize-handle resize-e", onMouseDown: (e) => this.handleResizeStart(e, 'e') }), h("div", { key: '6f44b5ad062e97258b2bb29de30587e647bbde44', class: "resize-handle resize-w", onMouseDown: (e) => this.handleResizeStart(e, 'w') }), h("div", { key: '10dd0e6a1dc7a2c813090176b48b64882d26f694', class: "resize-handle resize-ne", onMouseDown: (e) => this.handleResizeStart(e, 'ne') }), h("div", { key: 'b3bcb6031895a3e13da4466092a238c4dd78b0cd', class: "resize-handle resize-nw", onMouseDown: (e) => this.handleResizeStart(e, 'nw') }), h("div", { key: '8a194a9b536b1d562a549945fd9de12e28c8c70d', class: "resize-handle resize-se", onMouseDown: (e) => this.handleResizeStart(e, 'se') }), h("div", { key: '4ad815d53e99dd50929204ea6e7b40e73191a161', class: "resize-handle resize-sw", onMouseDown: (e) => this.handleResizeStart(e, 'sw') })))));
    }
};
Panel.style = panelCss();

export { Panel as ui_panel };
