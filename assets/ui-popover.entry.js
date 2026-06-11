import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';
import { F as FocusTrap } from './focus-trap-BSQ8klD4.js';
import { a as autoUpdate, c as calculateUniversalPlacement } from './dom-BMFah5q3.js';

const popoverCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.popover-wrapper{position:relative;display:inline-block}.popover-trigger{display:inline-block;cursor:pointer}.popover-backdrop{position:fixed;inset-block-start:0;inset-inline-start:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.45);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:19999;cursor:default;animation:backdropIn 0.18s ease}@keyframes backdropIn{from{opacity:0}to{opacity:1}}.popover{position:fixed;z-index:21000;background:var(--popover-bg, var(--bg-primary, #ffffff));border:1px solid var(--popover-border, var(--border-default, #e5e7eb));border-radius:var(--popover-radius, 10px);box-shadow:0 10px 25px -5px rgba(0, 0, 0, 0.12), 0 8px 10px -6px rgba(0, 0, 0, 0.08);opacity:0;transition:opacity 0.2s ease, transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);pointer-events:none;max-width:calc(100vw - 32px);word-wrap:break-word;overflow-wrap:break-word;overflow:visible;}.popover-visible{opacity:1;pointer-events:auto}.popover-inner{overflow:hidden;border-radius:inherit;max-height:inherit;}.popover-header{display:flex;align-items:center;justify-content:space-between;margin:0;padding-block:12px;padding-inline:16px;border-block-end:1px solid var(--popover-border, var(--border-default, #e5e7eb))}.popover-title{font-weight:700;font-size:14px;color:var(--popover-text-primary, var(--text-primary, #1f2937));margin:0;letter-spacing:-0.01em}.popover-close{background:transparent;border:none;color:var(--popover-text-secondary, var(--text-muted, #9ca3af));cursor:pointer;padding:4px;display:flex;align-items:center;justify-content:center;border-radius:4px;transition:background 0.15s, color 0.15s;margin-inline-start:8px}.popover-close:hover{background:var(--popover-border, var(--border-default, #e5e7eb));color:var(--popover-text-primary, var(--text-primary, #1f2937))}.popover-body{padding-block:12px;padding-inline:16px;font-size:14px;color:var(--popover-text-secondary, var(--text-muted, #6b7280));line-height:1.6;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(0, 0, 0, 0.15) transparent}.popover-body::-webkit-scrollbar{width:4px}.popover-body::-webkit-scrollbar-track{background:transparent}.popover-body::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.15);border-radius:2px}::slotted([slot=footer]){display:block;padding-block:10px;padding-inline:16px;border-block-start:1px solid var(--popover-border, var(--border-default, #e5e7eb));background:var(--popover-footer-bg, rgba(0, 0, 0, 0.02))}.popover-dark{--popover-bg:var(--bg-primary, #1f2937);--popover-border:var(--border-default, #374151);--popover-text-primary:var(--bg-primary, #f3f4f6);--popover-text-secondary:var(--bg-secondary, #d1d5db);--popover-footer-bg:rgba(255,255,255,0.04)}.popover-dark .popover-arrow{--popover-bg:var(--bg-primary, #1f2937);--popover-border:var(--border-default, #374151)}.popover-success{--popover-bg:var(--bg-primary, #f0fdf4);--popover-border:var(--color-success, #bbf7d0);--popover-text-primary:var(--color-success, #14532d);--popover-text-secondary:var(--color-success, #166534);--popover-footer-bg:rgba(var(--color-success-rgb, 16, 185, 129), 0.06)}.popover-success .popover-header{border-block-end-color:var(--color-success, #bbf7d0)}.popover-success .popover-title::before{content:"✓  ";color:var(--color-success, #16a34a)}.popover-warning{--popover-bg:var(--bg-primary, #fffbeb);--popover-border:var(--color-primary, #fde68a);--popover-text-primary:var(--color-danger, #78350f);--popover-text-secondary:var(--color-danger, #92400e);--popover-footer-bg:rgba(var(--color-warning-rgb, 245, 158, 11), 0.06)}.popover-warning .popover-header{border-block-end-color:var(--color-primary, #fde68a)}.popover-warning .popover-title::before{content:"⚠  ";color:var(--color-warning-hover, #d97706)}.popover-error{--popover-bg:var(--bg-primary, #fef2f2);--popover-border:var(--color-danger, #fecaca);--popover-text-primary:var(--color-danger, #7f1d1d);--popover-text-secondary:var(--color-danger, #991b1b);--popover-footer-bg:rgba(var(--color-danger-rgb, 239, 68, 68), 0.06)}.popover-error .popover-header{border-block-end-color:var(--color-danger, #fecaca)}.popover-error .popover-title::before{content:"✕  ";color:var(--color-danger-hover, #dc2626)}.popover-info{--popover-bg:var(--bg-primary, #eff6ff);--popover-border:var(--color-primary, #bfdbfe);--popover-text-primary:var(--color-primary, #1e3a8a);--popover-text-secondary:var(--color-primary, #1e40af);--popover-footer-bg:rgba(var(--color-primary-rgb, 59, 130, 246), 0.06)}.popover-info .popover-header{border-block-end-color:var(--color-primary, #bfdbfe)}.popover-info .popover-title::before{content:"ℹ  ";color:var(--color-primary-hover, #2563eb)}.popover-arrow{position:absolute;width:var(--ui-popover-arrow-size, 10px);height:var(--ui-popover-arrow-size, 10px);background:var(--popover-bg, var(--bg-primary, #ffffff));border:1px solid var(--popover-border, var(--border-default, #e5e7eb));transform:rotate(45deg);pointer-events:none;box-sizing:border-box;z-index:1;}.popover-top .popover-arrow,.popover-top-start .popover-arrow,.popover-top-end .popover-arrow{border-top:none;border-left:none;}.popover-bottom .popover-arrow,.popover-bottom-start .popover-arrow,.popover-bottom-end .popover-arrow{border-right:none;border-bottom:none;}.popover-left .popover-arrow,.popover-left-start .popover-arrow,.popover-left-end .popover-arrow{border-left:none;border-bottom:none;}.popover-right .popover-arrow,.popover-right-start .popover-arrow,.popover-right-end .popover-arrow{border-top:none;border-right:none;}.popover-anim-scale{transform:scale(0.92);transform-origin:center top}.popover-anim-scale.popover-bottom,.popover-anim-scale.popover-bottom-start,.popover-anim-scale.popover-bottom-end{transform-origin:center bottom}.popover-anim-scale.popover-left,.popover-anim-scale.popover-left-start,.popover-anim-scale.popover-left-end{transform-origin:right center}.popover-anim-scale.popover-right,.popover-anim-scale.popover-right-start,.popover-anim-scale.popover-right-end{transform-origin:left center}.popover-anim-scale.popover-visible{transform:scale(1)}.popover-anim-slide.popover-top,.popover-anim-slide.popover-top-start,.popover-anim-slide.popover-top-end{transform:translateY(8px)}.popover-anim-slide.popover-bottom,.popover-anim-slide.popover-bottom-start,.popover-anim-slide.popover-bottom-end{transform:translateY(-8px)}.popover-anim-slide.popover-left,.popover-anim-slide.popover-left-start,.popover-anim-slide.popover-left-end{transform:translateX(8px)}.popover-anim-slide.popover-right,.popover-anim-slide.popover-right-start,.popover-anim-slide.popover-right-end{transform:translateX(-8px)}.popover-anim-slide.popover-visible{transform:translate(0, 0)}.popover-skeleton .popover-body{display:flex;flex-direction:column;gap:10px;padding:16px}.popover-skeleton .popover-body::before,.popover-skeleton .popover-body::after{content:"";display:block;height:12px;border-radius:6px;background:linear-gradient(90deg, var(--bg-primary, #e5e7eb) 25%, var(--bg-secondary, #f3f4f6) 50%, var(--bg-primary, #e5e7eb) 75%);background-size:200% 100%;animation:skeletonShimmer 1.4s infinite}.popover-skeleton .popover-body::after{width:65%}@keyframes skeletonShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@media (prefers-reduced-motion: reduce){.popover{transition:none;transform:none !important;opacity:1 !important;display:none}.popover-visible{display:block}}`;

const Popover = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uiBeforeOpen = createEvent(this, "uiBeforeOpen");
        this.uiOpen = createEvent(this, "uiOpen");
        this.uiBeforeClose = createEvent(this, "uiBeforeClose");
        this.uiClose = createEvent(this, "uiClose");
        this.uiToggle = createEvent(this, "uiToggle");
    }
    get element() { return getElement(this); }
    /** Popover heading text */
    heading = '';
    /**
     * The target element to anchor the popover to.
     * Can be a CSS selector (string) or a direct HTMLElement reference.
     * If not provided, it will use the element in the 'trigger' slot or its first child.
     */
    target;
    /** Popover content (HTML string). Use this for simple text or if you can't use the 'content' slot. */
    content = '';
    /** Controlled open state. */
    open = false;
    /** Disabled state. If true, popover will not show. */
    disabled = false;
    /**
     * Trigger type: 'click' | 'hover' | 'focus' | 'manual'
     * 'manual' = only show/hide via method calls
     */
    trigger = 'click';
    /** Placement of popover */
    placement = 'top';
    /** Show arrow */
    showArrow = true;
    /** Popover width */
    width = '280px';
    /** Animation type */
    animation = 'scale';
    /** Show close button */
    showCloseButton = false;
    /** Show backdrop */
    backdrop = false;
    /**
     * Visual variant.
     * 'light' | 'dark' | 'success' | 'warning' | 'error' | 'info'
     */
    variant = 'light';
    /**
     * ARIA role for the popover panel.
     * Use 'tooltip' for non-interactive hover hints, 'menu' for menus, 'dialog' for rich content.
     */
    popoverRole = 'dialog';
    /**
     * Delay in ms before showing on hover (0 = immediate)
     */
    showDelay = 0;
    /**
     * Delay in ms before hiding on hover
     */
    hideDelay = 200;
    /**
     * Close popover when window is scrolled
     */
    closeOnScroll = false;
    /**
     * Allow Escape key to close the popover (default: true)
     */
    closeOnEsc = true;
    /**
     * Maximum height of the popover body. If content exceeds this, it scrolls.
     */
    maxHeight = 'none';
    /**
     * When hover trigger is used, allow cursor to move into the popover without closing it.
     * Set to false for pure tooltip behaviour.
     */
    interactive = true;
    /** Loading state */
    loading = false;
    /** Skeleton state */
    skeleton = false;
    /** Distance between popover and trigger (in pixels) */
    offset = 12;
    /** Size of the arrow in pixels */
    arrowSize = 10;
    /** Close popover when clicking outside */
    closeOnOutsideClick = true;
    /** Close popover when focus leaves it */
    closeOnBlur = true;
    /** Match the width of the trigger element */
    matchTriggerWidth = false;
    /** Enable auto-flipping when hitting screen boundaries */
    flip = true;
    /** Enable auto-shifting (clamping) to stay inside viewport */
    shift = true;
    /** Boundary element for collision detection */
    boundary = 'viewport';
    /** Padding from boundary edges */
    padding = 24;
    /** Fallback placements for flipping (e.g. "top, bottom") */
    fallbackPlacements;
    /** Automatically choose the best placement based on available space */
    autoPlacement = false;
    /** Positioning strategy */
    strategy = 'fixed';
    /** Optional z-index for the popover panel */
    zIndex = 21000;
    /** Emitted before popover shows. Call event.preventDefault() to cancel. */
    uiBeforeOpen;
    /** Emitted when popover shows */
    uiOpen;
    /** Emitted before popover hides. Call event.preventDefault() to cancel. */
    uiBeforeClose;
    /** Emitted when popover hides */
    uiClose;
    /** Emitted when toggled */
    uiToggle;
    currentPlacement = 'top';
    popoverStyles = {};
    arrowStyles = {};
    targetElement;
    popoverContent;
    arrowElement;
    hideTimeout;
    showTimeout;
    focusTrap;
    cleanupAutoUpdate;
    resizeObserver;
    latestSizeData = { width: '', maxWidth: '', maxHeight: '' };
    updateRetries = 0;
    componentWillLoad() {
        this.currentPlacement = this.placement;
    }
    componentDidLoad() {
        this.setupTrigger();
        this.popoverContent = this.element.shadowRoot?.querySelector('.popover');
        this.arrowElement = this.element.shadowRoot?.querySelector('.popover-arrow');
        if (this.popoverContent) {
            this.resizeObserver = new ResizeObserver(() => {
                if (this.open)
                    this.updatePosition();
            });
            this.resizeObserver.observe(this.popoverContent);
        }
        window.addEventListener('keydown', this.handleGlobalKeyDown);
    }
    componentDidUpdate() {
        if (this.open && !this.cleanupAutoUpdate) {
            this.startAutoUpdate();
        }
    }
    disconnectedCallback() {
        this.cleanup();
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
        }
        window.removeEventListener('keydown', this.handleGlobalKeyDown);
        if (this.focusTrap) {
            this.focusTrap.deactivate();
        }
    }
    visibilityChanged(newValue) {
        if (newValue) {
            if (this.disabled) {
                this.open = false;
                return;
            }
            this.handleOpen();
        }
        else {
            this.handleClose();
        }
    }
    handleTriggerConfigChange() {
        this.cleanup();
        this.setupTrigger();
    }
    handleOpen() {
        if (!this.targetElement) {
            this.setupTrigger();
        }
        this.popoverContent = this.element.shadowRoot?.querySelector('.popover');
        this.arrowElement = this.element.shadowRoot?.querySelector('.popover-arrow');
        if (this.popoverContent && !this.resizeObserver) {
            this.resizeObserver = new ResizeObserver(() => {
                if (this.open)
                    this.updatePosition();
            });
            this.resizeObserver.observe(this.popoverContent);
        }
        requestAnimationFrame(() => {
            this.startAutoUpdate();
            this.updateAriaAttributes(true);
            // Add outside click listener only when open
            if (this.closeOnOutsideClick) {
                // Use a sm timeout to avoid capturing the same click that opened it
                setTimeout(() => {
                    document.addEventListener('click', this.handleOutsideClick);
                }, 10);
            }
            if (this.backdrop || this.showCloseButton || this.trigger === 'click') {
                requestAnimationFrame(() => {
                    this.initFocusTrap();
                    if (this.focusTrap)
                        this.focusTrap.activate();
                });
            }
            this.uiOpen.emit();
        });
    }
    handleClose() {
        if (this.cleanupAutoUpdate) {
            this.cleanupAutoUpdate();
            this.cleanupAutoUpdate = undefined;
        }
        document.removeEventListener('click', this.handleOutsideClick);
        if (this.focusTrap) {
            this.focusTrap.deactivate();
        }
        this.updateAriaAttributes(false);
        this.uiClose.emit();
    }
    updateAriaAttributes(expanded) {
        if (this.targetElement) {
            this.targetElement.setAttribute('aria-expanded', expanded.toString());
            this.targetElement.setAttribute('aria-haspopup', this.popoverRole === 'menu' ? 'menu' : 'true');
        }
    }
    initFocusTrap() {
        if (!this.popoverContent)
            return;
        if (!this.focusTrap) {
            this.focusTrap = new FocusTrap(this.popoverContent, {
                initialFocus: this.popoverContent,
                returnFocus: this.targetElement,
                escapeDeactivates: true,
                clickOutsideDeactivates: !this.backdrop
            });
        }
    }
    setupTrigger() {
        // 1. Check for external target via selector or reference
        if (this.target) {
            if (typeof this.target === 'string') {
                this.targetElement = document.querySelector(this.target);
            }
            else {
                this.targetElement = this.target;
            }
        }
        // 2. Fallback to slots if no external target
        if (!this.targetElement) {
            const triggerSlot = this.element.shadowRoot?.querySelector('slot[name="trigger"]');
            const defaultSlot = this.element.shadowRoot?.querySelector('slot:not([name])');
            const getAssignedElement = (slot) => {
                const elements = slot?.assignedElements();
                return elements?.length > 0 ? elements[0] : null;
            };
            this.targetElement = getAssignedElement(triggerSlot) || getAssignedElement(defaultSlot);
        }
        // 3. Last fallback: the component itself
        if (!this.targetElement) {
            this.targetElement = this.element;
        }
        if (this.targetElement && this.trigger !== 'manual') {
            // Accessibility augmentation for non-buttons
            if (!['BUTTON', 'A', 'INPUT', 'SELECT', 'TEXTAREA'].includes(this.targetElement.tagName)) {
                if (!this.targetElement.hasAttribute('role'))
                    this.targetElement.setAttribute('role', 'button');
                if (!this.targetElement.hasAttribute('tabindex'))
                    this.targetElement.setAttribute('tabindex', '0');
            }
            if (this.trigger === 'click') {
                this.targetElement.addEventListener('click', this.handleTriggerClick);
                this.targetElement.addEventListener('keydown', this.handleTargetKeyDown);
            }
            else if (this.trigger === 'hover') {
                this.targetElement.addEventListener('mouseenter', this.handleMouseEnter);
                this.targetElement.addEventListener('mouseleave', this.handleMouseLeave);
                this.targetElement.addEventListener('focusin', this.handleFocusIn);
                this.targetElement.addEventListener('focusout', this.handleFocusOut);
            }
            else if (this.trigger === 'focus') {
                this.targetElement.addEventListener('focusin', this.handleFocusIn);
                this.targetElement.addEventListener('focusout', this.handleFocusOut);
            }
            this.updateAriaAttributes(this.open);
        }
    }
    handleTargetKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.toggle();
        }
    };
    cleanup() {
        if (!this.targetElement)
            return;
        this.targetElement.removeEventListener('click', this.handleTriggerClick);
        this.targetElement.removeEventListener('keydown', this.handleTargetKeyDown);
        this.targetElement.removeEventListener('mouseenter', this.handleMouseEnter);
        this.targetElement.removeEventListener('mouseleave', this.handleMouseLeave);
        this.targetElement.removeEventListener('focusin', this.handleFocusIn);
        this.targetElement.removeEventListener('focusout', this.handleFocusOut);
        document.removeEventListener('click', this.handleOutsideClick);
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = undefined;
        }
    }
    handleTriggerClick = (e) => {
        e.stopPropagation();
        if (this.trigger === 'click') {
            this.toggle();
        }
    };
    handleFocusIn = () => {
        this.show();
    };
    handleFocusOut = () => {
        this.hide();
    };
    handleOutsideClick = (event) => {
        if (this.targetElement?.contains(event.target))
            return;
        if (this.popoverContent?.contains(event.target))
            return;
        if (this.open)
            this.hide();
    };
    handleMouseEnter = () => {
        if (this.disabled)
            return;
        clearTimeout(this.hideTimeout);
        if (this.showDelay > 0) {
            this.showTimeout = setTimeout(() => this.show(), this.showDelay);
        }
        else {
            this.show();
        }
    };
    handleMouseLeave = () => {
        clearTimeout(this.showTimeout);
        this.hideTimeout = setTimeout(() => this.hide(), this.hideDelay);
    };
    handlePopoverMouseEnter = () => {
        if (this.trigger === 'hover' && this.interactive) {
            clearTimeout(this.hideTimeout);
            clearTimeout(this.showTimeout);
        }
    };
    handlePopoverMouseLeave = () => {
        if (this.trigger === 'hover' && this.interactive) {
            this.handleMouseLeave();
        }
    };
    handleGlobalKeyDown = (e) => {
        if (this.open && this.closeOnEsc && e.key === 'Escape') {
            e.stopPropagation();
            this.hide();
        }
    };
    startAutoUpdate() {
        if (this.cleanupAutoUpdate)
            this.cleanupAutoUpdate();
        // The panel is conditionally rendered ({this.open && ...}).
        this.popoverContent = this.element.shadowRoot?.querySelector('.popover');
        if (this.showArrow) {
            this.arrowElement = this.element.shadowRoot?.querySelector('.popover-arrow');
        }
        if (!this.targetElement || !this.popoverContent)
            return;
        this.cleanupAutoUpdate = autoUpdate(this.targetElement, this.popoverContent, () => this.updatePosition(), { animationFrame: true });
    }
    async updatePosition() {
        // Always re-query the panel and arrow in case they were null during initial mount
        if (!this.popoverContent) {
            this.popoverContent = this.element.shadowRoot?.querySelector('.popover');
        }
        if (this.showArrow && !this.arrowElement) {
            this.arrowElement = this.element.shadowRoot?.querySelector('.popover-arrow');
        }
        if (!this.open || !this.popoverContent || !this.targetElement) {
            this.updateRetries = 0;
            return;
        }
        // Double-check dimensions - if 0, we might need a retry (like Tooltip component does)
        if (this.popoverContent.offsetWidth === 0 && this.updateRetries < 5) {
            this.updateRetries++;
            requestAnimationFrame(() => this.updatePosition());
            return;
        }
        this.updateRetries = 0;
        const { left, top, placement, availableHeight, availableWidth, arrowX, arrowY } = calculateUniversalPlacement(this.targetElement, {
            menuWidth: this.popoverContent.offsetWidth,
            menuHeight: this.popoverContent.offsetHeight,
            gap: this.offset,
            placement: this.autoPlacement ? 'auto' : this.placement.split('-')[0],
            align: this.placement.includes('start') ? 'start' : (this.placement.includes('end') ? 'end' : 'center'),
            padding: this.padding
        });
        this.currentPlacement = placement;
        // Constrain size based on available space
        this.latestSizeData = {
            width: this.width,
            maxWidth: `${Math.min(window.innerWidth - (this.padding * 2), availableWidth)}px`,
            maxHeight: this.maxHeight !== 'none' ? this.maxHeight : `${availableHeight}px`,
        };
        const sizeData = this.latestSizeData;
        this.popoverStyles = {
            position: this.strategy,
            left: `${left}px`,
            top: `${top}px`,
            width: this.matchTriggerWidth ? `${this.targetElement.offsetWidth}px` : (sizeData.width || this.width),
            minWidth: '160px',
            maxWidth: sizeData.maxWidth,
            maxHeight: sizeData.maxHeight,
            visibility: 'visible',
            opacity: '1'
        };
        if (this.showArrow && this.arrowElement) {
            const side = placement;
            const staticSide = { top: 'bottom', right: 'left', bottom: 'top', left: 'right' }[side];
            const halfSize = Math.round(this.arrowSize / 2);
            this.arrowStyles = {
                top: '',
                right: '',
                bottom: '',
                left: '',
                ...(side === 'top' || side === 'bottom' ?
                    { left: `${arrowX}px`, transform: 'translateX(-50%) rotate(45deg)' } :
                    { top: `${arrowY}px`, transform: 'translateY(-50%) rotate(45deg)' }),
                [staticSide]: `-${halfSize}px`,
            };
        }
    }
    async reposition() {
        return this.updatePosition();
    }
    async computePlacement() {
        return this.currentPlacement;
    }
    async show() {
        if (this.disabled)
            return;
        if (this.uiBeforeOpen) {
            const event = this.uiBeforeOpen.emit();
            if (event && event.defaultPrevented)
                return;
        }
        this.open = true;
    }
    async hide() {
        if (this.uiBeforeClose) {
            const event = this.uiBeforeClose.emit();
            if (event && event.defaultPrevented)
                return;
        }
        this.open = false;
    }
    async toggle() {
        if (this.disabled)
            return;
        if (this.open) {
            await this.hide();
        }
        else {
            await this.show();
        }
        if (this.uiToggle)
            this.uiToggle.emit({ open: this.open });
    }
    getPopoverStyle() {
        return {
            '--ui-popover-arrow-size': `${this.arrowSize}px`,
            zIndex: this.zIndex ? `${this.zIndex}` : undefined,
        };
    }
    render() {
        const popoverClasses = {
            'popover': true,
            'popover-visible': this.open,
            'popover-loading': this.loading,
            'popover-skeleton': this.skeleton,
            [`popover-${this.currentPlacement}`]: true,
            [`popover-${this.variant}`]: true,
            [`popover-anim-${this.animation}`]: true,
        };
        const finalPopoverStyle = {
            ...this.getPopoverStyle(),
            ...this.popoverStyles
        };
        return (h("div", { key: '0f7778a7317e7842be132860b1dc61b611fa247d', class: "popover-wrapper" }, h("div", { key: '2df4f3624d7335dbb9149b169778dfe288c4ff57', class: "popover-trigger" }, h("slot", { key: 'e0058a8f0c58e229df36e2ef47a402e4cf9e81dd', name: "trigger" }), h("slot", { key: '49c41549a41f352f0b94e6ae4dbde48435742ebc' })), this.backdrop && this.open && (h("div", { key: '51851882bc67bd5a1a88d7a9f8bd44df99e3dee6', class: "popover-backdrop", onClick: () => this.hide() })), this.open && (h("div", { key: 'bd82cf9d153a7b228ac7696e407bb8a0d36ae942', class: popoverClasses, style: finalPopoverStyle, onMouseEnter: () => this.handlePopoverMouseEnter(), onMouseLeave: () => this.handlePopoverMouseLeave(), role: this.popoverRole, "aria-modal": this.backdrop ? 'true' : 'false', "aria-label": this.heading || undefined }, this.showArrow && h("div", { key: '545cb01f513e171e3d79a664ea57c5cbee6b5d07', class: "popover-arrow", style: this.arrowStyles }), h("div", { key: 'bc8a9f93d49c2d1c201203728e731ef5a2850602', class: "popover-inner" }, (this.heading || this.showCloseButton) && (h("div", { key: '9dee577314cc88f1bad7372006e593f34fa1a3fc', class: "popover-header" }, this.heading && h("div", { key: '7b0b3be1e8f6b0949969172eb74702034c661f6a', class: "popover-title" }, this.heading), this.showCloseButton && (h("ui-button", { key: 'd6dcc9b87b330797f6e29bf711df0504b386f5cb', variant: "ghost", size: "xxs", iconOnly: true, class: "popover-close", onClick: () => this.hide(), ariaLabel: "Close", icon: "x", iconLibrary: "lucide", iconSize: "14px" })))), h("div", { key: '3639ca2119db19c98ce70fd11afe8ba4451cad2c', class: "popover-body", style: { maxHeight: this.maxHeight, overflowY: this.maxHeight !== 'none' ? 'auto' : undefined } }, h("slot", { key: '43b5f442af61f83b9342a8a704a625155aabb0d3', name: "content" }), this.content && h("div", { key: '1bd964f0709f66c335bfaaafe1bbe268554be279', innerHTML: sanitizeHTML(this.content) })), h("slot", { key: 'da80a35ef26a42ab2830e84ac81cdca2aef348f2', name: "footer" }))))));
    }
    static get watchers() { return {
        "open": [{
                "visibilityChanged": 0
            }],
        "target": [{
                "handleTriggerConfigChange": 0
            }],
        "trigger": [{
                "handleTriggerConfigChange": 0
            }]
    }; }
};
Popover.style = popoverCss();

export { Popover as ui_popover };
