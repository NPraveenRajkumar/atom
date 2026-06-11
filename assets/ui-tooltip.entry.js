import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const tooltipCss = () => `.sr-only.sc-ui-tooltip{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only.sc-ui-tooltip{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.sc-ui-tooltip-h{display:inline-block;position:relative}.tooltip-wrapper.sc-ui-tooltip{display:inline-block}.tooltip.sc-ui-tooltip{position:fixed;max-width:var(--tooltip-max-width, 300px);min-width:max-content;width:max-content;padding:8px 12px;border-radius:6px;font-size:14px;line-height:1.4;font-weight:400;z-index:var(--tooltip-z-index, var(--z-tooltip, 310));pointer-events:none;opacity:0;transition:opacity var(--tooltip-transition-duration, 200ms) var(--tooltip-transition-timing, ease), transform var(--tooltip-transition-duration, 200ms) var(--tooltip-transition-timing, ease);word-wrap:break-word;overflow-wrap:break-word;box-shadow:0 2px 8px rgba(0, 0, 0, 0.15);will-change:transform, opacity;white-space:normal}.tooltip.tooltip-interactive.sc-ui-tooltip{pointer-events:auto;cursor:default}.tooltip.tooltip-custom-color.sc-ui-tooltip{background:var(--tooltip-bg-color) !important;color:var(--tooltip-text-color, var(--text-standard, #ffffff)) !important;border-color:var(--tooltip-bg-color) !important}.tooltip-content.sc-ui-tooltip{position:relative;z-index:1;display:block;width:100%;text-align:center}.tooltip-visible.sc-ui-tooltip{opacity:1;pointer-events:auto}.tooltip-dark.sc-ui-tooltip{background:var(--bg-primary, #1f2937);color:var(--text-standard, #ffffff);border:1px solid var(--border-default, #374151)}.tooltip-light.sc-ui-tooltip{background:var(--bg-primary, #ffffff);color:var(--text-primary, #1f2937);border:1px solid var(--border-default, #e5e7eb);box-shadow:0 4px 12px rgba(0, 0, 0, 0.15)}.tooltip-primary.sc-ui-tooltip{background:linear-gradient(135deg, var(--color-success, #3dcd58) 0%, var(--color-success, #009B4E) 100%);color:var(--text-standard, #ffffff);border:1px solid var(--color-success, #009B4E)}.tooltip-info.sc-ui-tooltip{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff);border:1px solid var(--color-primary-hover, #2563eb)}.tooltip-success.sc-ui-tooltip{background:var(--color-success, #10b981);color:var(--text-standard, #ffffff);border:1px solid var(--color-success-hover, #059669)}.tooltip-warning.sc-ui-tooltip{background:var(--color-warning, #f59e0b);color:var(--text-standard, #ffffff);border:1px solid var(--color-warning-hover, #d97706)}.tooltip-error.sc-ui-tooltip{background:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff);border:1px solid var(--color-danger-hover, #dc2626)}.tooltip-glass.sc-ui-tooltip{background:rgba(255, 255, 255, 0.15) !important;backdrop-filter:blur(12px) saturate(180%);-webkit-backdrop-filter:blur(12px) saturate(180%);border:1px solid rgba(255, 255, 255, 0.2);color:var(--text-standard, #ffffff);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.37)}.tooltip-glass.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:rgba(255, 255, 255, 0.15);border:none;backdrop-filter:blur(12px)}.tooltip-arrow.sc-ui-tooltip{position:absolute;width:var(--tooltip-arrow-size, 8px);height:var(--tooltip-arrow-size, 8px);transform:rotate(45deg);z-index:0}.tooltip-custom-color.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:var(--tooltip-bg-color);border-right:1px solid var(--tooltip-bg-color);border-bottom:1px solid var(--tooltip-bg-color)}.tooltip-dark.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:var(--bg-primary, #1f2937);border-right:1px solid var(--border-default, #374151);border-bottom:1px solid var(--border-default, #374151)}.tooltip-light.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:var(--bg-primary, #ffffff);border-right:1px solid var(--border-default, #e5e7eb);border-bottom:1px solid var(--border-default, #e5e7eb)}.tooltip-primary.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:linear-gradient(135deg, var(--color-success, #3dcd58) 0%, var(--color-success, #009B4E) 100%);border-right:1px solid var(--color-success, #009B4E);border-bottom:1px solid var(--color-success, #009B4E)}.tooltip-info.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:var(--color-primary, #10b981);border-right:1px solid var(--color-primary-hover, #2563eb);border-bottom:1px solid var(--color-primary-hover, #2563eb)}.tooltip-success.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:var(--color-success, #10b981);border-right:1px solid var(--color-success-hover, #059669);border-bottom:1px solid var(--color-success-hover, #059669)}.tooltip-warning.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:var(--color-warning, #f59e0b);border-right:1px solid var(--color-warning-hover, #d97706);border-bottom:1px solid var(--color-warning-hover, #d97706)}.tooltip-error.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:var(--color-danger, #ef4444);border-right:1px solid var(--color-danger-hover, #dc2626);border-bottom:1px solid var(--color-danger-hover, #dc2626)}.tooltip-glass.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{background:rgba(255, 255, 255, 0.2);border:1px solid rgba(255, 255, 255, 0.1)}.tooltip-top.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip,.tooltip-top-left.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip,.tooltip-top-right.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{bottom:calc(var(--tooltip-arrow-size, 8px) / -2);left:50%;transform:translateX(-50%) rotate(45deg)}.tooltip-top-left.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{left:16px;transform:rotate(45deg)}.tooltip-top-right.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{left:auto;right:16px;transform:rotate(45deg)}.tooltip-bottom.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip,.tooltip-bottom-left.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip,.tooltip-bottom-right.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{top:calc(var(--tooltip-arrow-size, 8px) / -2);left:50%;transform:translateX(-50%) rotate(-135deg)}.tooltip-bottom-left.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{left:16px;transform:rotate(-135deg)}.tooltip-bottom-right.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{left:auto;right:16px;transform:rotate(-135deg)}.tooltip-left.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{right:calc(var(--tooltip-arrow-size, 8px) / -2);top:50%;transform:translateY(-50%) rotate(135deg)}.tooltip-right.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{left:calc(var(--tooltip-arrow-size, 8px) / -2);top:50%;transform:translateY(-50%) rotate(-45deg)}.tooltip-animation-fade.sc-ui-tooltip{transition:opacity 0.2s ease}.tooltip-animation-slide.tooltip-top.sc-ui-tooltip,.tooltip-animation-slide.tooltip-top-left.sc-ui-tooltip,.tooltip-animation-slide.tooltip-top-right.sc-ui-tooltip{transform:translateY(10px)}.tooltip-animation-slide.tooltip-top.tooltip-visible.sc-ui-tooltip,.tooltip-animation-slide.tooltip-top-left.tooltip-visible.sc-ui-tooltip,.tooltip-animation-slide.tooltip-top-right.tooltip-visible.sc-ui-tooltip{transform:translateY(0)}.tooltip-animation-slide.tooltip-bottom.sc-ui-tooltip,.tooltip-animation-slide.tooltip-bottom-left.sc-ui-tooltip,.tooltip-animation-slide.tooltip-bottom-right.sc-ui-tooltip{transform:translateY(-10px)}.tooltip-animation-slide.tooltip-bottom.tooltip-visible.sc-ui-tooltip,.tooltip-animation-slide.tooltip-bottom-left.tooltip-visible.sc-ui-tooltip,.tooltip-animation-slide.tooltip-bottom-right.tooltip-visible.sc-ui-tooltip{transform:translateY(0)}.tooltip-animation-slide.tooltip-left.sc-ui-tooltip{transform:translateX(10px)}.tooltip-animation-slide.tooltip-left.tooltip-visible.sc-ui-tooltip{transform:translateX(0)}.tooltip-animation-slide.tooltip-right.sc-ui-tooltip{transform:translateX(-10px)}.tooltip-animation-slide.tooltip-right.tooltip-visible.sc-ui-tooltip{transform:translateX(0)}.tooltip-animation-scale.sc-ui-tooltip{transform:scale(0.8)}.tooltip-animation-scale.tooltip-visible.sc-ui-tooltip{transform:scale(1)}.tooltip-animation-bounce.tooltip-visible.sc-ui-tooltip{animation:tooltipBounce 0.4s ease}@keyframes tooltipBounce{0%{opacity:0;transform:scale(0.3)}50%{opacity:1;transform:scale(1.05)}70%{transform:scale(0.95)}100%{transform:scale(1)}}.tooltip-animation-none.sc-ui-tooltip{transition:none}.tooltip-follow-cursor.sc-ui-tooltip .tooltip-arrow.sc-ui-tooltip{display:none}.tooltip-interactive.sc-ui-tooltip:hover{opacity:1}.tooltip-content.sc-ui-tooltip a.sc-ui-tooltip{color:inherit;text-decoration:underline}.tooltip-content.sc-ui-tooltip a.sc-ui-tooltip:hover{opacity:0.8}.tooltip-content.sc-ui-tooltip strong.sc-ui-tooltip{font-weight:600}.tooltip-content.sc-ui-tooltip em.sc-ui-tooltip{font-style:italic}.tooltip-content.sc-ui-tooltip code.sc-ui-tooltip{padding:2px 4px;border-radius:3px;font-family:"Courier New", monospace;font-size:90%}.tooltip-content.sc-ui-tooltip ul.sc-ui-tooltip,.tooltip-content.sc-ui-tooltip ol.sc-ui-tooltip{margin:4px 0;padding-left:20px}.tooltip-content.sc-ui-tooltip li.sc-ui-tooltip{margin:2px 0}.tooltip-dark.sc-ui-tooltip .tooltip-content.sc-ui-tooltip code.sc-ui-tooltip{background:rgba(255, 255, 255, 0.1);color:var(--color-primary, #93c5fd)}.tooltip-light.sc-ui-tooltip .tooltip-content.sc-ui-tooltip code.sc-ui-tooltip{background:rgba(0, 0, 0, 0.05);color:var(--color-danger-hover, #dc2626)}@media (max-width: 768px){.tooltip.sc-ui-tooltip{max-width:calc(100vw - 32px);font-size:13px}}.tooltip[aria-hidden=true].sc-ui-tooltip{display:none}@media print{.tooltip.sc-ui-tooltip{display:none !important}}.tooltip-sm.sc-ui-tooltip{padding:4px 8px;font-size:12px;max-width:200px}.tooltip-md.sc-ui-tooltip{padding:8px 12px;font-size:14px;max-width:300px}.tooltip-lg.sc-ui-tooltip{padding:12px 16px;font-size:16px;max-width:400px}.tooltip-shape-rounded.sc-ui-tooltip{border-radius:6px}.tooltip-shape-square.sc-ui-tooltip{border-radius:0}.tooltip-shape-pill.sc-ui-tooltip{border-radius:9999px;padding-left:16px;padding-right:16px}.tooltip-elevation-1.sc-ui-tooltip{box-shadow:0 4px 8px rgba(0, 0, 0, 0.15)}.tooltip-elevation-2.sc-ui-tooltip{box-shadow:0 8px 16px rgba(0, 0, 0, 0.2)}.tooltip-elevation-3.sc-ui-tooltip{box-shadow:0 12px 24px rgba(0, 0, 0, 0.25)}.tooltip-elevation-4.sc-ui-tooltip{box-shadow:0 16px 32px rgba(0, 0, 0, 0.3)}.tooltip-elevation-5.sc-ui-tooltip{box-shadow:0 20px 40px rgba(0, 0, 0, 0.35)}.tooltip-glow.sc-ui-tooltip::after{content:"";position:absolute;top:-2px;left:-2px;right:-2px;bottom:-2px;background:linear-gradient(45deg, rgba(59, 130, 246, 0.5), rgba(139, 92, 246, 0.5), rgba(236, 72, 153, 0.5), rgba(59, 130, 246, 0.5));background-size:400% 400%;border-radius:inherit;z-index:-1;filter:blur(8px);animation:tooltipPremiumGlow 3s ease infinite;opacity:0.6}@keyframes tooltipPremiumGlow{0%{background-position:0% 50%;opacity:0.4}50%{background-position:100% 50%;opacity:0.7}100%{background-position:0% 50%;opacity:0.4}}@keyframes tooltipGlowPulse{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.6;transform:scale(1.02)}}.tooltip-close.sc-ui-tooltip{position:absolute;top:4px;right:4px;width:20px;height:20px;padding:0;background:rgba(0, 0, 0, 0.2);border:none;border-radius:50%;color:currentColor;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:12px;z-index:2;transition:background 0.2s ease}.tooltip-close.sc-ui-tooltip:hover{background:rgba(0, 0, 0, 0.4)}.tooltip-close.sc-ui-tooltip:focus{outline:2px solid currentColor;outline-offset:2px}.tooltip-close.sc-ui-tooltip ui-icon.sc-ui-tooltip{--size:10px}.tooltip-light.sc-ui-tooltip .tooltip-close.sc-ui-tooltip{background:rgba(0, 0, 0, 0.1)}.tooltip-light.sc-ui-tooltip .tooltip-close.sc-ui-tooltip:hover{background:rgba(0, 0, 0, 0.2)}.tooltip-closable.sc-ui-tooltip{padding-right:32px}.tooltip-loading.sc-ui-tooltip .tooltip-content.sc-ui-tooltip{min-height:40px;display:flex;align-items:center;justify-content:center}.tooltip-loading-spinner.sc-ui-tooltip{display:flex;align-items:center;gap:8px}.tooltip-loading-spinner.sc-ui-tooltip ui-icon.sc-ui-tooltip{--size:16px}.tooltip-loading-spinner.sc-ui-tooltip span.sc-ui-tooltip{font-size:13px}.tooltip-header.sc-ui-tooltip{padding-bottom:8px;margin-bottom:8px;border-bottom:1px solid rgba(255, 255, 255, 0.2);font-weight:600;font-size:14px}.tooltip-light.sc-ui-tooltip .tooltip-header.sc-ui-tooltip{border-bottom-color:rgba(0, 0, 0, 0.1)}.tooltip-footer.sc-ui-tooltip{padding-top:8px;margin-top:8px;border-top:1px solid rgba(255, 255, 255, 0.2);font-size:12px;display:flex;gap:8px;justify-content:flex-end}.tooltip-light.sc-ui-tooltip .tooltip-footer.sc-ui-tooltip{border-top-color:rgba(0, 0, 0, 0.1)}.tooltip-sticky.sc-ui-tooltip{pointer-events:auto;box-shadow:0 4px 16px rgba(0, 0, 0, 0.2)}.tooltip-sticky.sc-ui-tooltip::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit;box-shadow:0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.5);opacity:0.6;pointer-events:none}@media (hover: none) and (pointer: coarse){.tooltip.sc-ui-tooltip{font-size:14px;padding:10px 14px}.tooltip-sm.sc-ui-tooltip{font-size:13px;padding:8px 12px}.tooltip-lg.sc-ui-tooltip{font-size:15px;padding:12px 16px}}`;

const Tooltip = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tooltipShow = createEvent(this, "tooltipShow");
        this.tooltipHide = createEvent(this, "tooltipHide");
        this.tooltipClick = createEvent(this, "tooltipClick");
        this.tooltipMouseEnter = createEvent(this, "tooltipMouseEnter");
        this.tooltipMouseLeave = createEvent(this, "tooltipMouseLeave");
        this.tooltipMouseMove = createEvent(this, "tooltipMouseMove");
        this.tooltipClose = createEvent(this, "tooltipClose");
        this.tooltipKeydown = createEvent(this, "tooltipKeydown");
        this.tooltipTouchStart = createEvent(this, "tooltipTouchStart");
        this.tooltipTouchEnd = createEvent(this, "tooltipTouchEnd");
    }
    get el() { return getElement(this); }
    /** Tooltip content text */
    content = '';
    /** Tooltip position relative to target */
    position = 'top';
    /** Trigger type for showing tooltip */
    trigger = 'hover';
    /** Visual variant/theme */
    variant = 'dark';
    /** Animation type */
    animation = 'fade-in';
    /** Show arrow pointer */
    arrow = true;
    /** Delay before showing (ms) */
    showDelay = 0;
    /** Delay before hiding (ms) */
    hideDelay = 0;
    /** Maximum width in pixels */
    maxWidth = 300;
    /** Offset from target (px) */
    offset = 8;
    /** Enable HTML content */
    html = false;
    /** Allow tooltip to be interactive (hoverable) */
    interactive = false;
    /** Disable the tooltip */
    disabled = false;
    /** Custom CSS class */
    customClass = '';
    /** z-index value */
    zIndex = 9999;
    /** Follow mouse cursor (only works with hover trigger) */
    followCursor = false;
    /** Auto-flip when out of viewport */
    autoFlip = true;
    /** Show tooltip immediately on load */
    visible = false;
    /** Custom background color (overrides variant) */
    customColor = '';
    /** Custom text color */
    textColor = '';
    /** Transition duration in milliseconds */
    transitionDuration = 200;
    /** Transition timing function */
    transitionTiming = 'ease';
    /** Arrow size in pixels */
    arrowSize = 8;
    /** Open tooltip at mouse click position (click trigger only) */
    openAtMousePosition = false;
    /** Track mouse movement and update tooltip position */
    trackMouse = false;
    /** Mouse tracking update interval in ms (for performance) */
    trackInterval = 16;
    /** Auto-shift tooltip to stay in viewport */
    autoShift = true;
    /** Show close button */
    closable = false;
    /** Enable keyboard shortcuts (ESC to close, Tab navigation) */
    keyboard = true;
    /** Render tooltip in portal (document.body) */
    portal = true;
    /** Allow nested tooltips */
    allowNested = false;
    /** Loading state */
    loading = false;
    /** Size variant */
    size = 'md';
    /** Long press duration for touch devices (ms) */
    longPressDuration = 500;
    /** Boundary element selector to constrain tooltip */
    boundary = '';
    /** Group ID for shared tooltips */
    groupId = '';
    /** Sticky tooltip (requires manual close) */
    sticky = false;
    /** Show header slot */
    showHeader = false;
    /** Show footer slot */
    showFooter = false;
    /** Close on click outside */
    closeOnClickOutside = true;
    /** Elevation level (0-5) */
    elevation = 0;
    /** Tooltip shape */
    shape = 'rounded';
    /** Show premium glow effect */
    showGlow = false;
    isVisible = false;
    isPositioned = false;
    currentPosition = 'top';
    cursorX = 0;
    cursorY = 0;
    mouseClickX = 0;
    mouseClickY = 0;
    touchStartTime = 0;
    isTouchDevice = false;
    tooltipShow;
    tooltipHide;
    tooltipClick;
    tooltipMouseEnter;
    tooltipMouseLeave;
    tooltipMouseMove;
    tooltipClose;
    tooltipKeydown;
    tooltipTouchStart;
    tooltipTouchEnd;
    targetElement;
    tooltipElement;
    defaultSlotSource;
    headerSlotSource;
    footerSlotSource;
    defaultSlotTarget;
    headerSlotTarget;
    footerSlotTarget;
    showTimeout;
    hideTimeout;
    observer;
    trackIntervalId = 0;
    lastTrackTime = 0;
    resizeObserver;
    updateRetries = 0;
    // Static group management
    static groupListeners = new Map();
    notifyGroupChange() {
        if (!this.groupId)
            return;
        const listeners = Tooltip.groupListeners.get(this.groupId) || [];
        listeners.forEach(cb => cb(this.isVisible ? this.groupId : ''));
    }
    handleGroupChange = (activeGroupId) => {
    };
    watchVisible(newValue) {
        if (this.trigger === 'manual') {
            if (newValue) {
                this.show();
            }
            else {
                this.hide();
            }
        }
    }
    componentDidLoad() {
        this.targetElement = this.el.querySelector('[slot="target"]');
        if (!this.targetElement) {
            console.warn('tooltip: No element with slot="target" found');
            return;
        }
        // Detect touch device
        this.isTouchDevice = 'ontouchstart' in window || navigator.maxTouchPoints > 0;
        this.setupEventListeners();
        // Setup keyboard listener
        if (this.keyboard) {
            document.addEventListener('keydown', this.handleKeyDown);
        }
        // Show immediately if visible prop is true
        if (this.visible && this.trigger === 'manual') {
            this.show();
        }
        if (this.observer && this.el) {
            this.observer.observe(this.el, { childList: true, subtree: true });
        }
        // Setup ResizeObserver for the target element to handle layout shifts
        if (this.targetElement && 'ResizeObserver' in window) {
            this.resizeObserver = new ResizeObserver(() => {
                if (this.isVisible) {
                    this.updatePosition();
                }
            });
            if (this.resizeObserver && this.targetElement) {
                this.resizeObserver.observe(this.targetElement);
            }
        }
        if (this.groupId) {
            if (!Tooltip.groupListeners.has(this.groupId)) {
                Tooltip.groupListeners.set(this.groupId, []);
            }
            Tooltip.groupListeners.get(this.groupId).push(this.handleGroupChange);
        }
    }
    disconnectedCallback() {
        this.removeEventListeners();
        if (this.observer) {
            this.observer.disconnect();
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        this.clearTimeouts();
        this.removeWindowListeners();
        if (this.keyboard) {
            document.removeEventListener('keydown', this.handleKeyDown);
        }
        // Remove portal element if exists
        if (this.portal && this.tooltipElement && this.tooltipElement.parentNode) {
            this.tooltipElement.parentNode.removeChild(this.tooltipElement);
        }
        if (this.groupId) {
            const listeners = Tooltip.groupListeners.get(this.groupId) || [];
            const idx = listeners.indexOf(this.handleGroupChange);
            if (idx !== -1)
                listeners.splice(idx, 1);
        }
    }
    setupEventListeners() {
        if (this.disabled)
            return;
        switch (this.trigger) {
            case 'hover':
                this.targetElement.addEventListener('mouseenter', this.handleMouseEnter);
                this.targetElement.addEventListener('mouseleave', this.handleMouseLeave);
                if (this.followCursor) {
                    this.targetElement.addEventListener('mousemove', this.handleMouseMove);
                }
                break;
            case 'click':
                this.targetElement.addEventListener('click', this.handleClick);
                if (this.closeOnClickOutside) {
                    document.addEventListener('click', this.handleDocumentClick);
                }
                break;
            case 'focus':
                this.targetElement.addEventListener('focus', this.handleFocus);
                this.targetElement.addEventListener('blur', this.handleBlur);
                break;
        }
        // Add touch support
        if (this.isTouchDevice) {
            this.targetElement.addEventListener('touchstart', this.handleTouchStart);
            this.targetElement.addEventListener('touchend', this.handleTouchEnd);
            this.targetElement.addEventListener('touchcancel', this.handleTouchCancel);
        }
    }
    removeEventListeners() {
        if (this.targetElement) {
            this.targetElement.removeEventListener('mouseenter', this.handleMouseEnter);
            this.targetElement.removeEventListener('mouseleave', this.handleMouseLeave);
            this.targetElement.removeEventListener('mousemove', this.handleMouseMove);
            this.targetElement.removeEventListener('click', this.handleClick);
            this.targetElement.removeEventListener('focus', this.handleFocus);
            this.targetElement.removeEventListener('blur', this.handleBlur);
            this.targetElement.removeEventListener('touchstart', this.handleTouchStart);
            this.targetElement.removeEventListener('touchend', this.handleTouchEnd);
            this.targetElement.removeEventListener('touchcancel', this.handleTouchCancel);
        }
        document.removeEventListener('click', this.handleDocumentClick);
    }
    clearTimeouts() {
        if (this.showTimeout)
            clearTimeout(this.showTimeout);
        if (this.hideTimeout)
            clearTimeout(this.hideTimeout);
        if (this.trackIntervalId) {
            cancelAnimationFrame(this.trackIntervalId);
            this.trackIntervalId = 0;
        }
    }
    handleMouseEnter = (e) => {
        if (this.trackMouse) {
            this.cursorX = e.clientX;
            this.cursorY = e.clientY;
            this.tooltipMouseEnter.emit(e);
        }
        this.clearTimeouts();
        this.showTimeout = window.setTimeout(() => {
            this.show();
        }, this.showDelay);
    };
    handleMouseLeave = (e) => {
        this.tooltipMouseLeave.emit(e);
        this.clearTimeouts();
        if (this.trackIntervalId) {
            cancelAnimationFrame(this.trackIntervalId);
        }
        if (!this.interactive) {
            this.hideTimeout = window.setTimeout(() => {
                this.hide();
            }, this.hideDelay);
        }
        else {
            // For interactive tooltips, check if mouse enters tooltip
            this.hideTimeout = window.setTimeout(() => {
                if (this.tooltipElement && !this.tooltipElement.matches(':hover')) {
                    this.hide();
                }
            }, this.hideDelay + 100);
        }
    };
    handleMouseMove = (e) => {
        if (this.followCursor || this.trackMouse) {
            const now = performance.now();
            if (now - this.lastTrackTime >= this.trackInterval) {
                this.cursorX = e.clientX;
                this.cursorY = e.clientY;
                this.tooltipMouseMove.emit({ x: this.cursorX, y: this.cursorY });
                this.lastTrackTime = now;
                if (this.isVisible && (this.followCursor || this.trackMouse)) {
                    this.updatePosition();
                }
            }
        }
    };
    handleClick = (e) => {
        e.stopPropagation();
        if (this.openAtMousePosition) {
            this.mouseClickX = e.clientX;
            this.mouseClickY = e.clientY;
        }
        this.tooltipClick.emit(e);
        if (this.isVisible) {
            this.forceHide();
        }
        else {
            this.show();
        }
    };
    handleDocumentClick = (e) => {
        if (this.isVisible && this.trigger === 'click') {
            const target = e.target;
            if (!this.el.contains(target) && this.tooltipElement && !this.tooltipElement.contains(target)) {
                this.hide();
            }
        }
    };
    handleFocus = () => {
        this.show();
    };
    handleBlur = () => {
        this.hide();
    };
    handleKeyDown = (e) => {
        if (!this.keyboard || !this.isVisible)
            return;
        this.tooltipKeydown.emit(e);
        if (e.key === 'Escape') {
            e.preventDefault();
            this.handleClose();
        }
    };
    handleTouchStart = (e) => {
        this.touchStartTime = Date.now();
        this.tooltipTouchStart.emit(e);
    };
    handleTouchEnd = (e) => {
        const touchDuration = Date.now() - this.touchStartTime;
        this.tooltipTouchEnd.emit(e);
        if (touchDuration >= this.longPressDuration) {
            e.preventDefault();
            if (this.isVisible) {
                this.hide();
            }
            else {
                this.show();
            }
        }
    };
    handleTouchCancel = () => {
        this.touchStartTime = 0;
    };
    handleClose = () => {
        this.tooltipClose.emit();
        this.forceHide();
    };
    handleWindowEvents = () => {
        if (this.isVisible) {
            this.updatePosition();
        }
    };
    addWindowListeners() {
        window.addEventListener('resize', this.handleWindowEvents);
        window.addEventListener('scroll', this.handleWindowEvents, true);
    }
    removeWindowListeners() {
        window.removeEventListener('resize', this.handleWindowEvents);
        window.removeEventListener('scroll', this.handleWindowEvents, true);
    }
    handleTooltipMouseEnter = () => {
        if (this.interactive) {
            this.clearTimeouts();
        }
    };
    handleTooltipMouseLeave = () => {
        if (this.interactive) {
            this.hideTimeout = window.setTimeout(() => {
                this.hide();
            }, this.hideDelay);
        }
    };
    migrateSlotsToTooltip() {
        if (!this.tooltipElement)
            return;
        // Helper to move nodes from source to target
        const move = (source, target) => {
            if (!source || !target)
                return;
            while (source.firstChild) {
                target.appendChild(source.firstChild);
            }
        };
        if (this.headerSlotSource && this.headerSlotTarget) {
            move(this.headerSlotSource, this.headerSlotTarget);
        }
        if (this.defaultSlotSource && this.defaultSlotTarget) {
            move(this.defaultSlotSource, this.defaultSlotTarget);
        }
        if (this.footerSlotSource && this.footerSlotTarget) {
            move(this.footerSlotSource, this.footerSlotTarget);
        }
    }
    restoreSlotsToHost() {
        if (!this.tooltipElement)
            return;
        // Helper to move nodes from target back to source
        const move = (target, source) => {
            if (!source || !target)
                return;
            while (target.firstChild) {
                // Skip internal elements like spinners
                const node = target.firstChild;
                if (node instanceof HTMLElement && node.classList.contains('tooltip-loading-spinner')) {
                    target.removeChild(node);
                    continue;
                }
                source.appendChild(node);
            }
        };
        if (this.headerSlotTarget && this.headerSlotSource) {
            move(this.headerSlotTarget, this.headerSlotSource);
        }
        if (this.defaultSlotTarget && this.defaultSlotSource) {
            move(this.defaultSlotTarget, this.defaultSlotSource);
        }
        if (this.footerSlotTarget && this.footerSlotSource) {
            move(this.footerSlotTarget, this.footerSlotSource);
        }
    }
    async show() {
        if (this.disabled || this.isVisible)
            return;
        this.isVisible = true;
        this.isPositioned = false;
        // Wait for render then position; track the RAF so disconnectedCallback can cancel it.
        this.trackIntervalId = requestAnimationFrame(() => {
            this.trackIntervalId = requestAnimationFrame(() => {
                this.trackIntervalId = 0;
                // Guard: skip if component was disconnected before this RAF fired.
                if (!this.el.isConnected)
                    return;
                if (this.portal && this.tooltipElement && this.tooltipElement.parentElement !== document.body) {
                    document.body.appendChild(this.tooltipElement);
                }
                this.addWindowListeners();
                this.migrateSlotsToTooltip();
                this.updatePosition();
                this.isPositioned = true;
                this.tooltipShow.emit({ position: this.currentPosition });
                this.notifyGroupChange();
            });
        });
    }
    async hide() {
        if (!this.isVisible)
            return;
        this.isPositioned = false;
        // Don't hide sticky tooltips unless explicitly closed
        if (this.sticky)
            return;
        // Move back to host if portaled so Stencil can unmount it correctly
        if (this.portal && this.tooltipElement && this.tooltipElement.parentElement === document.body) {
            this.restoreSlotsToHost();
            this.el.appendChild(this.tooltipElement);
        }
        else {
            this.restoreSlotsToHost();
        }
        this.removeWindowListeners();
        this.isVisible = false;
        this.tooltipHide.emit();
        this.notifyGroupChange();
    }
    async forceHide() {
        if (!this.isVisible)
            return;
        this.isPositioned = false;
        // Move back to host if portaled so Stencil can unmount it correctly
        if (this.portal && this.tooltipElement && this.tooltipElement.parentElement === document.body) {
            this.restoreSlotsToHost();
            this.el.appendChild(this.tooltipElement);
        }
        else {
            this.restoreSlotsToHost();
        }
        this.removeWindowListeners();
        this.isVisible = false;
        this.tooltipHide.emit();
    }
    async toggle() {
        if (this.isVisible) {
            this.hide();
        }
        else {
            this.show();
        }
    }
    updatePosition() {
        if (!this.tooltipElement || !this.targetElement)
            return;
        const targetRect = this.targetElement.getBoundingClientRect();
        const tooltipRect = this.tooltipElement.getBoundingClientRect();
        const offset = this.offset;
        // If tooltip hasn't rendered yet, try again (up to 5 times)
        if (tooltipRect.width === 0 || tooltipRect.height === 0) {
            if (this.updateRetries < 5) {
                this.updateRetries++;
                this.trackIntervalId = requestAnimationFrame(() => this.updatePosition());
            }
            return;
        }
        this.updateRetries = 0;
        let position = this.position === 'auto' ? 'top' : this.position;
        // Calculate positions
        const positions = {
            'top': {
                top: targetRect.top - tooltipRect.height - offset,
                left: targetRect.left + (targetRect.width - tooltipRect.width) / 2,
            },
            'bottom': {
                top: targetRect.bottom + offset,
                left: targetRect.left + (targetRect.width - tooltipRect.width) / 2,
            },
            'left': {
                top: targetRect.top + (targetRect.height - tooltipRect.height) / 2,
                left: targetRect.left - tooltipRect.width - offset,
            },
            'right': {
                top: targetRect.top + (targetRect.height - tooltipRect.height) / 2,
                left: targetRect.right + offset,
            },
            'top-left': {
                top: targetRect.top - tooltipRect.height - offset,
                left: targetRect.left,
            },
            'top-right': {
                top: targetRect.top - tooltipRect.height - offset,
                left: targetRect.right - tooltipRect.width,
            },
            'bottom-left': {
                top: targetRect.bottom + offset,
                left: targetRect.left,
            },
            'bottom-right': {
                top: targetRect.bottom + offset,
                left: targetRect.right - tooltipRect.width,
            },
        };
        // Open at mouse click position if enabled (click trigger)
        if (this.openAtMousePosition && this.trigger === 'click' && this.mouseClickX && this.mouseClickY) {
            positions[position] = {
                top: this.mouseClickY + offset,
                left: this.mouseClickX + offset,
            };
        }
        // Follow cursor if enabled
        else if ((this.followCursor || this.trackMouse) && this.trigger === 'hover') {
            positions[position] = {
                top: this.cursorY + offset,
                left: this.cursorX + offset,
            };
        }
        let finalPosition = position;
        let coords = positions[position];
        // Auto-flip if out of viewport
        if (this.autoFlip && !this.followCursor && !this.trackMouse && !this.openAtMousePosition) {
            const viewportWidth = window.innerWidth;
            const viewportHeight = window.innerHeight;
            // Check if tooltip goes outside viewport
            if (coords.top < 0 && (position.includes('top'))) {
                finalPosition = position.replace('top', 'bottom');
                coords = positions[finalPosition] || positions['bottom'];
            }
            else if (coords.top + tooltipRect.height > viewportHeight && position.includes('bottom')) {
                finalPosition = position.replace('bottom', 'top');
                coords = positions[finalPosition] || positions['top'];
            }
            if (coords.left < 0 && position.includes('left')) {
                finalPosition = position.replace('left', 'right');
                coords = positions[finalPosition] || positions['right'];
            }
            else if (coords.left + tooltipRect.width > viewportWidth && position.includes('right')) {
                finalPosition = position.replace('right', 'left');
                coords = positions[finalPosition] || positions['left'];
            }
        }
        // Auto-shift to keep tooltip in viewport or boundary
        if (this.autoShift) {
            let boundaryRect = {
                top: 0,
                left: 0,
                width: window.innerWidth,
                height: window.innerHeight,
            };
            // Use custom boundary if specified
            if (this.boundary) {
                const boundaryEl = document.querySelector(this.boundary);
                if (boundaryEl) {
                    const rect = boundaryEl.getBoundingClientRect();
                    boundaryRect = {
                        top: rect.top,
                        left: rect.left,
                        width: rect.width,
                        height: rect.height,
                    };
                }
            }
            const padding = 8;
            // Shift horizontally
            if (coords.left < boundaryRect.left + padding) {
                coords.left = boundaryRect.left + padding;
            }
            else if (coords.left + tooltipRect.width > boundaryRect.left + boundaryRect.width - padding) {
                coords.left = boundaryRect.left + boundaryRect.width - tooltipRect.width - padding;
            }
            // Shift vertically
            if (coords.top < boundaryRect.top + padding) {
                coords.top = boundaryRect.top + padding;
            }
            else if (coords.top + tooltipRect.height > boundaryRect.top + boundaryRect.height - padding) {
                coords.top = boundaryRect.top + boundaryRect.height - tooltipRect.height - padding;
            }
        }
        this.currentPosition = finalPosition;
        // Apply position (using fixed positioning, no need for scroll offset)
        // Ensure coordinates are valid numbers
        const finalTop = Math.max(0, Math.round(coords.top));
        const finalLeft = Math.max(0, Math.round(coords.left));
        this.tooltipElement.style.top = `${finalTop}px`;
        this.tooltipElement.style.left = `${finalLeft}px`;
    }
    render() {
        const tooltipClasses = {
            'tooltip': true,
            'tooltip-visible': this.isVisible && this.isPositioned,
            [`tooltip-${this.variant}`]: !this.customColor && !this.textColor,
            [`tooltip-${this.currentPosition}`]: true,
            [`tooltip-${this.size}`]: true,
            [`tooltip-animation-${this.animation}`]: true,
            'tooltip-interactive': this.interactive,
            'tooltip-follow-cursor': this.followCursor || this.trackMouse,
            'tooltip-custom-color': !!this.customColor || !!this.textColor,
            'tooltip-loading': this.loading,
            'tooltip-sticky': this.sticky,
            'tooltip-closable': this.closable,
            'tooltip-glow': this.showGlow,
            [`tooltip-elevation-${this.elevation}`]: this.elevation > 0,
            [`tooltip-shape-${this.shape}`]: true,
            ...(this.customClass ? { [this.customClass]: true } : {}),
        };
        const tooltipContent = (h("div", { key: '5e5c75b174869faf89475e47c40e2f733ca639cb', class: tooltipClasses, style: {
                '--tooltip-max-width': `${this.maxWidth}px`,
                '--tooltip-z-index': this.zIndex.toString(),
                '--tooltip-transition-duration': `${this.transitionDuration}ms`,
                '--tooltip-transition-timing': this.transitionTiming,
                '--tooltip-arrow-size': `${this.arrowSize}px`,
                ...(this.customColor ? { '--tooltip-bg-color': this.customColor } : {}),
                ...(this.textColor ? { '--tooltip-text-color': this.textColor } : {}),
            }, ref: el => this.tooltipElement = el, onMouseEnter: this.handleTooltipMouseEnter, onMouseLeave: this.handleTooltipMouseLeave, role: "tooltip", "aria-live": "polite" }, this.closable && (h("ui-button", { key: 'c782e3113216319ed2ac22f3c35b446b9ce7edf8', variant: "ghost", class: "tooltip-close", onClick: this.handleClose, ariaLabel: "Close tooltip", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })), this.showHeader && (h("div", { key: 'e05c1bda9cb7cb892195c71efb19ffbd4169790c', class: "tooltip-header" }, h("div", { key: 'a6cf727d9c266a6e6b7448726116ba804a38104f', ref: el => this.headerSlotTarget = el }))), h("div", { key: 'cc4d88f048bc46cfdd2eebbfdd47c8ffa6b93ed3', class: "tooltip-content" }, this.loading ? (h("div", { class: "tooltip-loading-spinner" }, h("ui-icon", { name: "loader", library: "lucide", spin: true }), h("span", null, "Loading..."))) : (this.html ? (h("div", { innerHTML: sanitizeHTML(this.content) })) : (h("span", null, this.content))), h("div", { key: '8dd2fcb7e5262cbe06c70be5c10093d44e930335', class: "tooltip-slot-content", ref: el => this.defaultSlotTarget = el })), this.showFooter && (h("div", { key: '26ce70cb64df924dcae94ef69b58392a9d36c209', class: "tooltip-footer" }, h("div", { key: '34e503228a04d14459a0d8d06298ffb2a4024a5f', ref: el => this.footerSlotTarget = el }))), this.arrow && h("div", { key: '69001577b02dbca5c611876ccf6f23deed2729c1', class: "tooltip-arrow" })));
        return (h(Host, { key: '307752cb0fd187a5e6e730d210695ab306cc56c0' }, h("div", { key: '54368e7a646845a67938888ba9f9d5f43adb60f5', class: "tooltip-wrapper" }, h("slot", { key: '4137b0ece48c46cec089ea3c25a3d2dd8627a4d2', name: "target" })), this.isVisible && tooltipContent, h("div", { key: '9953d7fe69e1696350bd17f3a884350e840ead76', class: "tooltip-slot-source", style: { display: 'none' }, "aria-hidden": "true" }, h("div", { key: 'e725fb6982d649ec5a9c650a21f5d2f03aa474e2', ref: el => this.defaultSlotSource = el }, h("slot", { key: '11f51228e8a76bd5e2ea7c26a02bc0d5ae046010' })), h("div", { key: 'e01d0037a906144fef1ed7908f784b8564340e5e', ref: el => this.headerSlotSource = el }, h("slot", { key: 'f878b0f6724fb0005bec621cc846f76f26528569', name: "header" })), h("div", { key: 'ff99e07c1ebcd501954c4eca287f62dfc024786f', ref: el => this.footerSlotSource = el }, h("slot", { key: '0a86e94fcb161cdc792acc33be982f0952d28823', name: "footer" })))));
    }
    static get watchers() { return {
        "visible": [{
                "watchVisible": 0
            }]
    }; }
};
Tooltip.style = tooltipCss();

export { Tooltip as ui_tooltip };
