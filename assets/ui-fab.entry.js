import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const fabCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{--ui-fab-bg:var(--ui-primary, var(--color-success, #3dcd58));--ui-fab-color:var(--text-standard, #ffffff);--ui-fab-hover-bg:var(--ui-primary-hover, #2ebd4a);--ui-fab-size:56px;--ui-fab-radius:50%;--ui-fab-shadow:0 4px 12px rgba(0, 0, 0, 0.15);--ui-fab-zindex:1000;--ui-fab-gap:16px;--ui-fab-action-size:40px;--ui-fab-transition:all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);position:fixed;z-index:var(--ui-fab-zindex);display:flex;transition:transform 0.3s ease, opacity 0.3s ease;pointer-events:none;}:host(.is-hidden){opacity:0;transform:scale(0.8);pointer-events:none}:host(.pos-bottom-right){inset-block-end:var(--fab-offset-y);inset-inline-end:var(--fab-offset-x)}:host(.pos-bottom-left){inset-block-end:var(--fab-offset-y);inset-inline-start:var(--fab-offset-x)}:host(.pos-top-right){inset-block-start:var(--fab-offset-y);inset-inline-end:var(--fab-offset-x)}:host(.pos-top-left){inset-block-start:var(--fab-offset-y);inset-inline-start:var(--fab-offset-x)}:host(.pos-bottom-center){inset-block-end:var(--fab-offset-y);inset-inline-start:50%;transform:translateX(-50%)}:host(.pos-top-center){inset-block-start:var(--fab-offset-y);inset-inline-start:50%;transform:translateX(-50%)}:host(.pos-center-right){inset-block-start:50%;inset-inline-end:var(--fab-offset-x);transform:translateY(-50%)}:host(.pos-center-left){inset-block-start:50%;inset-inline-start:var(--fab-offset-x);transform:translateY(-50%)}:host(.size-mini){--ui-fab-size:40px}:host(.size-sm){--ui-fab-size:48px}:host(.size-md){--ui-fab-size:56px}:host(.size-lg){--ui-fab-size:64px}:host(.is-extended){--ui-fab-radius:28px}:host(.is-extended) .fab-trigger{width:auto;padding-inline:20px}:host(.variant-secondary){--ui-fab-bg:var(--color-primary, #6b7280);--ui-fab-hover-bg:var(--color-primary, #4b5563)}:host(.variant-tertiary){--ui-fab-bg:var(--bg-primary, #1f2937);--ui-fab-hover-bg:var(--bg-secondary, #111827)}:host(.variant-surface){--ui-fab-bg:var(--bg-primary, var(--text-standard, #ffffff));--ui-fab-color:var(--bg-secondary, var(--text-primary, #111827));--ui-fab-hover-bg:var(--bg-primary, #f9fafb)}:host(.variant-success){--ui-fab-bg:var(--color-success, #10b981);--ui-fab-hover-bg:var(--color-success-hover, #059669)}:host(.variant-danger){--ui-fab-bg:var(--color-danger, #ef4444);--ui-fab-hover-bg:var(--color-danger-hover, #dc2626)}:host(.variant-warning){--ui-fab-bg:var(--color-warning, #f59e0b);--ui-fab-hover-bg:var(--color-warning-hover, #d97706)}:host(.variant-info){--ui-fab-bg:var(--color-primary, #10b981);--ui-fab-hover-bg:var(--color-primary-hover, #2563eb)}.fab-wrapper{display:flex;pointer-events:auto;align-items:center;justify-content:center;position:relative}:host(.dir-up) .fab-wrapper{flex-direction:column-reverse}:host(.dir-down) .fab-wrapper{flex-direction:column}:host(.dir-left) .fab-wrapper{flex-direction:row-reverse}:host(.dir-right) .fab-wrapper{flex-direction:row}:host(.dir-radial) .fab-wrapper{flex-direction:column;}.fab-trigger{width:var(--ui-fab-size);height:var(--ui-fab-size);cursor:pointer;display:flex;align-items:center;justify-content:center;position:relative;transition:var(--ui-fab-transition);outline:none;z-index:2;font-family:inherit}.fab-trigger:hover{transform:translateY(-2px)}.fab-trigger:active{transform:translateY(0) scale(0.95)}:host(.is-disabled) .fab-trigger{opacity:0.6;cursor:not-allowed;pointer-events:none}.fab-content{display:flex;align-items:center;justify-content:center;gap:8px;position:relative;height:100%}.fab-icon{transition:transform 0.3s ease, opacity 0.3s ease;display:flex;align-items:center;justify-content:center;position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.close-icon{opacity:0;transform:translate(-50%, -50%) rotate(-90deg)}:host(.is-open) .primary-icon{opacity:0;transform:translate(-50%, -50%) rotate(90deg)}:host(.is-open) .close-icon{opacity:1;transform:translate(-50%, -50%) rotate(0deg)}.fab-label{font-weight:500;font-size:14px;letter-spacing:0.5px;white-space:nowrap}:host(.is-extended) .fab-icon{position:relative;transform:none;top:0;left:0}:host(.is-extended.is-open) .primary-icon{transform:rotate(90deg)}.fab-actions{display:flex;gap:12px;visibility:hidden;z-index:1;padding:var(--ui-fab-gap);position:relative}:host(.dir-up) .fab-actions{flex-direction:column-reverse;margin-block-end:-16px}:host(.dir-down) .fab-actions{flex-direction:column;margin-block-start:-16px}:host(.dir-left) .fab-actions{flex-direction:row-reverse;margin-inline-end:-16px}:host(.dir-right) .fab-actions{flex-direction:row;margin-inline-start:-16px}:host(.dir-radial) .fab-actions{display:block;position:absolute;left:50%;top:50%;width:0;height:0;padding:0}:host(.is-open) .fab-actions{visibility:visible}::slotted(ui-fab-item){opacity:0;transform:scale(0.5);transition:all 0.2s cubic-bezier(0.25, 0.8, 0.25, 1);pointer-events:none}:host(.is-open) ::slotted(ui-fab-item){opacity:1;transform:scale(1);pointer-events:auto}:host(.dir-radial) ::slotted(ui-fab-item){position:absolute;inset-block-start:-20px;inset-inline-start:-20px}:host(.dir-radial.is-open) ::slotted(ui-fab-item){transform:translate(var(--radial-x, 0), var(--radial-y, 0)) scale(1) !important}:host(.is-open) ::slotted(ui-fab-item:nth-child(1)){transition-delay:40ms}:host(.is-open) ::slotted(ui-fab-item:nth-child(2)){transition-delay:80ms}:host(.is-open) ::slotted(ui-fab-item:nth-child(3)){transition-delay:120ms}:host(.is-open) ::slotted(ui-fab-item:nth-child(4)){transition-delay:160ms}:host(.is-open) ::slotted(ui-fab-item:nth-child(5)){transition-delay:200ms}:host(.is-open) ::slotted(ui-fab-item:nth-child(6)){transition-delay:240ms}:host(.anim-fade) ::slotted(ui-fab-item){transform:scale(1)}:host(.anim-slide-up) ::slotted(ui-fab-item){transform:translateY(20px)}:host(.is-open.anim-slide-up) ::slotted(ui-fab-item){transform:translateY(0)}:host(.anim-slide-down) ::slotted(ui-fab-item){transform:translateY(-20px)}:host(.is-open.anim-slide-down) ::slotted(ui-fab-item){transform:translateY(0)}:host(.anim-slide-left) ::slotted(ui-fab-item){transform:translateX(20px)}:host(.is-open.anim-slide-left) ::slotted(ui-fab-item){transform:translateX(0)}:host(.anim-slide-right) ::slotted(ui-fab-item){transform:translateX(-20px)}:host(.is-open.anim-slide-right) ::slotted(ui-fab-item){transform:translateX(0)}:host(.anim-rotate) ::slotted(ui-fab-item){transform:rotate(45deg) scale(0.5)}:host(.is-open.anim-rotate) ::slotted(ui-fab-item){transform:rotate(0deg) scale(1)}.spinner{width:24px;height:24px;animation:rotate 2s linear infinite}.spinner-circle{stroke-dasharray:1, 200;stroke-dashoffset:0;animation:dash 1.5s ease-in-out infinite;stroke-linecap:round}@keyframes rotate{100%{transform:rotate(360deg)}}@keyframes dash{0%{stroke-dasharray:1, 200;stroke-dashoffset:0}50%{stroke-dasharray:89, 200;stroke-dashoffset:-35px}100%{stroke-dasharray:89, 200;stroke-dashoffset:-124px}}.fab-backdrop{position:fixed;inset:0;background:rgba(255, 255, 255, 0.7);backdrop-filter:blur(4px);z-index:0;pointer-events:auto}.fab-panel{position:absolute;background:var(--ui-surface, var(--bg-primary, #ffffff));border-radius:16px;box-shadow:0 10px 40px rgba(0, 0, 0, 0.15), 0 0 0 1px rgba(0, 0, 0, 0.05);display:flex;flex-direction:column;min-width:200px;opacity:0;pointer-events:none;transform:scale(0.95);transition:opacity 0.25s cubic-bezier(0.4, 0, 0.2, 1), transform 0.25s cubic-bezier(0.4, 0, 0.2, 1);z-index:10;overflow:hidden;border:1px solid rgba(255, 255, 255, 0.1);backdrop-filter:blur(8px)}.fab-panel-header{display:flex;align-items:center;justify-content:space-between;padding:12px 16px;border-bottom:1px solid rgba(0, 0, 0, 0.05);background:rgba(0, 0, 0, 0.02)}.fab-panel-title{font-weight:700;font-size:14px;color:var(--text-primary, #1e293b);letter-spacing:-0.01em}.fab-panel-close{background:transparent;border:none;padding:4px;cursor:pointer;color:var(--text-muted, #64748b);display:flex;align-items:center;border-radius:6px;transition:all 0.2s}.fab-panel-close:hover{background:rgba(0, 0, 0, 0.05);color:var(--color-danger, #ef4444)}.fab-panel-body{flex:1;padding:16px;overflow-y:auto;min-height:0;scrollbar-width:thin}.fab-panel-body::-webkit-scrollbar{width:6px}.fab-panel-footer{display:flex;align-items:center;justify-content:flex-end;gap:8px;padding:12px 16px;background:rgba(0, 0, 0, 0.015);border-top:1px solid rgba(0, 0, 0, 0.05)}:host(.is-open) .fab-panel{opacity:1;pointer-events:auto;transform:scale(1)}:host(.pos-bottom-right) .fab-panel{inset-block-end:calc(100% + 12px);inset-inline-end:0;transform-origin:bottom right}:host(.pos-bottom-left) .fab-panel{inset-block-end:calc(100% + 12px);inset-inline-start:0;transform-origin:bottom left}:host(.pos-bottom-center) .fab-panel{inset-block-end:calc(100% + 12px);inset-inline-start:50%;transform:translateX(-50%) scale(0.95);transform-origin:bottom center}:host(.pos-bottom-center.is-open) .fab-panel{transform:translateX(-50%) scale(1)}:host(.pos-top-right) .fab-panel{inset-block-start:calc(100% + 12px);inset-inline-end:0;transform-origin:top right}:host(.pos-top-left) .fab-panel{inset-block-start:calc(100% + 12px);inset-inline-start:0;transform-origin:top left}:host(.pos-top-center) .fab-panel{inset-block-start:calc(100% + 12px);inset-inline-start:50%;transform:translateX(-50%) scale(0.95);transform-origin:top center}:host(.pos-top-center.is-open) .fab-panel{transform:translateX(-50%) scale(1)}:host(.pos-center-right) .fab-panel{inset-inline-end:calc(100% + 12px);inset-block-start:50%;transform:translateY(-50%) scale(0.95);transform-origin:center right}:host(.pos-center-right.is-open) .fab-panel{transform:translateY(-50%) scale(1)}:host(.pos-center-left) .fab-panel{inset-inline-start:calc(100% + 12px);inset-block-start:50%;transform:translateY(-50%) scale(0.95);transform-origin:center left}:host(.pos-center-left.is-open) .fab-panel{transform:translateY(-50%) scale(1)}`;

const Fab = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uiFabClick = createEvent(this, "uiFabClick");
        this.uiFabOpen = createEvent(this, "uiFabOpen");
        this.uiFabClose = createEvent(this, "uiFabClose");
        this.uiFabToggle = createEvent(this, "uiFabToggle");
        this.uiFabActionClick = createEvent(this, "uiFabActionClick");
    }
    get el() { return getElement(this); }
    isExpanded = false;
    defaultOpen = false;
    position = 'bottom-right';
    direction = 'top';
    variant = 'primary';
    size = 'md';
    type = 'standard';
    icon;
    label;
    disabled = false;
    loading = false;
    toggle = false;
    isDraggable = false;
    hideOnScroll = false;
    showOnScrollUp = false;
    offsetX = 24;
    offsetY = 24;
    zIndex = 1000;
    expandOnHover = false;
    expandOnClick = true;
    closeOnAction = true;
    backdrop = false;
    backdropClose = true;
    persistent = false;
    animation = 'scale';
    panel = false;
    panelTitle;
    panelWidth = '320px';
    panelHeight;
    panelMaxHeight = '480px';
    isDragging = false;
    isHidden = false;
    currentX = 0;
    currentY = 0;
    uiFabClick;
    uiFabOpen;
    uiFabClose;
    uiFabToggle;
    uiFabActionClick;
    dragStartX = 0;
    dragStartY = 0;
    lastScrollY = 0;
    internalOpen = false;
    componentWillLoad() {
        this.internalOpen = this.defaultOpen || this.isExpanded;
        this.currentX = this.offsetX;
        this.currentY = this.offsetY;
    }
    componentDidLoad() {
        if (this.hideOnScroll || this.showOnScrollUp) {
            this.lastScrollY = window.scrollY;
        }
    }
    openChanged(newValue) {
        this.internalOpen = newValue;
        if (newValue) {
            this.uiFabOpen.emit();
            this.calculateRadial();
        }
        else {
            this.uiFabClose.emit();
        }
    }
    async openFab() {
        this.isExpanded = true;
    }
    async closeFab() {
        this.isExpanded = false;
    }
    async toggleFab() {
        this.isExpanded = !this.internalOpen;
        this.uiFabToggle.emit({ isExpanded: this.internalOpen });
    }
    async show() {
        this.isHidden = false;
    }
    async hide() {
        this.isHidden = true;
    }
    handleScroll() {
        if (!this.hideOnScroll && !this.showOnScrollUp)
            return;
        const currentScrollY = window.scrollY;
        const scrollingDown = currentScrollY > this.lastScrollY;
        if (this.showOnScrollUp && !scrollingDown && currentScrollY > 100) {
            this.isHidden = false;
        }
        else if (this.hideOnScroll && scrollingDown && currentScrollY > 100) {
            this.isHidden = true;
            if (this.internalOpen)
                this.closeFab();
        }
        this.lastScrollY = currentScrollY;
    }
    handleKeyDown(ev) {
        if (this.disabled || this.loading)
            return;
        if (ev.key === 'Enter' || ev.key === ' ') {
            ev.preventDefault();
            this.handleClick(new MouseEvent('click'));
        }
        else if (ev.key === 'Escape' && this.internalOpen) {
            this.closeFab();
            this.focusTrigger();
        }
    }
    focusTrigger() {
        const trigger = this.el.shadowRoot?.querySelector('.fab-trigger');
        if (trigger)
            trigger.focus();
    }
    handleClick = (e) => {
        if (this.disabled || this.loading)
            return;
        if (this.type === 'speed-dial' || this.toggle || this.panel) {
            if (this.expandOnClick) {
                this.toggleFab();
            }
        }
        else {
            this.uiFabClick.emit(e);
        }
    };
    handleBackdropClick = () => {
        if (this.backdropClose && this.internalOpen && !this.persistent) {
            this.closeFab();
        }
    };
    handleMouseEnter = () => {
        if (this.expandOnHover && !this.disabled && !this.loading) {
            this.openFab();
        }
    };
    handleMouseLeave = () => {
        if (this.expandOnHover && !this.persistent) {
            this.closeFab();
        }
    };
    handlePointerDown = (e) => {
        if (!this.isDraggable || this.disabled)
            return;
        this.isDragging = true;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
        this.el.setPointerCapture(e.pointerId);
    };
    handlePointerMove = (e) => {
        if (!this.isDragging || !this.isDraggable)
            return;
        const dx = e.clientX - this.dragStartX;
        const dy = e.clientY - this.dragStartY;
        if (this.position.includes('right'))
            this.currentX -= dx;
        else if (this.position.includes('left'))
            this.currentX += dx;
        if (this.position.includes('bottom'))
            this.currentY -= dy;
        else if (this.position.includes('top'))
            this.currentY += dy;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
    };
    handlePointerUp = (e) => {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.el.releasePointerCapture(e.pointerId);
    };
    onActionClick() {
        if (this.closeOnAction && this.internalOpen && !this.persistent) {
            this.closeFab();
        }
    }
    calculateRadial() {
        if (this.direction !== 'radial')
            return;
        const items = Array.from(this.el.querySelectorAll('ui-fab-item'));
        if (!items.length)
            return;
        // Dynamically adjust distance based on item count to prevent overlap
        const baseDistance = 80;
        const distancePadding = Math.max(0, (items.length - 4) * 15);
        const distance = baseDistance + distancePadding;
        // For corner positions, we start with 90 but can expand to 100 or 110 if many items
        const baseArc = 90;
        const arcPadding = Math.max(0, (items.length - 3) * 10);
        const totalAngles = Math.min(120, baseArc + arcPadding);
        const step = items.length === 1 ? 0 : totalAngles / (items.length - 1);
        items.forEach((item, index) => {
            const angle = step * index;
            const rad = angle * (Math.PI / 180);
            let dx = Math.abs(Math.sin(rad) * distance);
            let dy = Math.abs(Math.cos(rad) * distance);
            // Determine expansion direction based on anchor
            if (this.position.includes('right'))
                dx = -dx;
            if (this.position.includes('bottom'))
                dy = -dy;
            // Handle center edge cases dynamically
            if (this.position.includes('-center')) {
                const fullArc = Math.min(220, 180 + (items.length - 3) * 15);
                const centeredStep = items.length === 1 ? 0 : fullArc / (items.length - 1);
                const centeredAngle = (centeredStep * index) - (fullArc / 2);
                const centeredRad = centeredAngle * (Math.PI / 180);
                dx = Math.sin(centeredRad) * distance;
                dy = this.position.includes('bottom') ? -Math.cos(centeredRad) * distance : Math.cos(centeredRad) * distance;
            }
            // Handle cental vertically aligned cases (center-left, center-right)
            if (this.position.includes('center-')) {
                const fullArc = Math.min(180, 120 + (items.length - 3) * 15);
                const centeredStep = items.length === 1 ? 0 : fullArc / (items.length - 1);
                const centeredAngle = (centeredStep * index) - (fullArc / 2);
                const centeredRad = centeredAngle * (Math.PI / 180);
                dy = Math.sin(centeredRad) * distance;
                dx = this.position.includes('right') ? -Math.cos(centeredRad) * distance : Math.cos(centeredRad) * distance;
            }
            item.style.setProperty('--radial-x', `${dx}px`);
            item.style.setProperty('--radial-y', `${dy}px`);
        });
    }
    render() {
        const isExtended = !!(this.type === 'extended' || (this.label && this.type !== 'speed-dial'));
        const isSpeedDial = this.type === 'speed-dial';
        const hostClasses = {
            'fab-container': true,
            [`pos-${this.position}`]: true,
            [`dir-${this.direction}`]: true,
            [`variant-${this.variant}`]: true,
            [`size-${this.size}`]: true,
            [`anim-${this.animation}`]: true,
            'is-open': this.internalOpen,
            'is-hidden': this.isHidden,
            'is-extended': isExtended,
            'is-speed-dial': isSpeedDial,
            'is-dragging': this.isDragging,
            'is-disabled': this.disabled,
            'is-loading': this.loading
        };
        const hostStyles = {
            '--fab-offset-x': `${this.currentX}px`,
            '--fab-offset-y': `${this.currentY}px`,
            'z-index': this.zIndex.toString()
        };
        return (h(Host, { key: '7e6f5d73427366ff17f1f5e65bd17f6835098b63', class: hostClasses, style: hostStyles }, this.backdrop && this.internalOpen && (h("div", { key: 'f1256c22cd5f454ca9d17c3ebd30c0cdf541b491', class: "fab-backdrop", onClick: this.handleBackdropClick })), h("div", { key: 'c6772712b949c61127a52722a7e0d2a85ec09f06', class: "fab-wrapper", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, isSpeedDial && (h("div", { key: '0398eb0d055bb156268bcb3af06ca48c89b894a3', class: "fab-actions", "aria-hidden": !this.internalOpen ? 'true' : 'false' }, h("slot", { key: '5cd5d9f5bc34719f89645cda401eb6d85db11449', name: "actions" }))), this.panel && (h("div", { key: 'd9075d5a11d5c4d0394e4d637f09f24dc03870af', class: {
                'fab-panel': true,
                'has-header': !!this.panelTitle
            }, role: "dialog", "aria-hidden": !this.internalOpen ? 'true' : 'false', style: {
                width: this.panelWidth,
                height: this.panelHeight,
                maxHeight: this.panelMaxHeight
            } }, this.panelTitle && (h("div", { key: '3becbad472d14e38d2b3ab20e2ff4c34e0269e0f', class: "fab-panel-header" }, h("span", { key: 'b140b40024a609232de0a763654d03dd0f225a9b', class: "fab-panel-title" }, this.panelTitle), h("ui-button", { key: 'e72642cfa211273ef540eab5e293e950c0180415', variant: "ghost", class: "fab-panel-close", onClick: () => this.closeFab(), ariaLabel: "Close panel", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" }))), h("div", { key: 'f8006eb878ba30e0711f74633b4cd6e85c9f41bb', class: "fab-panel-body" }, h("slot", { key: '35933e69377366b5405245f7f32df3201390066d', name: "panel" })), h("div", { key: '4332e87ae404c1cd4d4a5799f1f25d8a430df709', class: "fab-panel-footer" }, h("slot", { key: '7dbbc44576c425495dd7cd8ba53f93a9b7ff1d6a', name: "panel-footer" })))), h("ui-button", { key: 'e0459872b67bac7714d6eef306cf232253f3bfd1', variant: this.variant, shape: this.type === 'extended' || (this.label && this.type !== 'speed-dial') ? 'rounded' : 'circle', class: "fab-trigger", disabled: this.disabled || this.loading, loading: this.loading, ariaLabel: this.label || 'Floating Action Button', onClick: this.handleClick, onPointerDown: this.handlePointerDown, onPointerMove: this.handlePointerMove, onPointerUp: this.handlePointerUp, onPointerCancel: this.handlePointerUp, label: isExtended && this.label ? this.label : undefined, icon: this.icon, iconOnly: !isExtended, size: this.size === 'mini' ? 'sm' : (this.size === 'lg' ? 'lg' : 'md') }, isSpeedDial && this.toggle && this.internalOpen && (h("ui-icon", { key: 'c001fc5d8906bb8aadab821856f181fa204e994a', slot: "icon", class: "fab-icon close-icon", name: "x", size: this.size === 'mini' ? '18' : '24' })), !this.icon && !isExtended && h("slot", { key: '73458b1312ff61bcf62fb97bf076c0684389cc57', name: "trigger" })))));
    }
    static get watchers() { return {
        "isExpanded": [{
                "openChanged": 0
            }]
    }; }
};
Fab.style = fabCss();

export { Fab as ui_fab };
