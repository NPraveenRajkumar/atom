import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const calloutBannerCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}@media (prefers-color-scheme: dark){:host(.variant-info) .callout-inner{--callout-bg:#1e293b;--callout-text:#60a5fa;--callout-border:rgba(59, 130, 246, 0.35);--callout-icon-bg:rgba(59, 130, 246, 0.18);--callout-shadow:rgba(59, 130, 246, 0.13)}:host(.variant-success) .callout-inner{--callout-bg:#052e16;--callout-text:#4ade80;--callout-border:rgba(34,197,94,0.35);--callout-icon-bg:rgba(34,197,94,0.18);--callout-shadow:rgba(34,197,94,0.13)}:host(.variant-warning) .callout-inner{--callout-bg:#78350f;--callout-text:#facc15;--callout-border:rgba(251,191,36,0.35);--callout-icon-bg:rgba(251,191,36,0.18);--callout-shadow:rgba(251,191,36,0.13)}:host(.variant-danger) .callout-inner{--callout-bg:#7f1d1d;--callout-text:#f87171;--callout-border:rgba(239,68,68,0.35);--callout-icon-bg:rgba(239,68,68,0.18);--callout-shadow:rgba(239,68,68,0.13)}:host(.variant-neutral) .callout-inner{--callout-bg:#0f172a;--callout-text:#f1f5f9;--callout-border:rgba(148,163,184,0.25);--callout-icon-bg:rgba(148,163,184,0.13);--callout-shadow:rgba(148,163,184,0.09)}}a[part=callout]{text-decoration:none;color:inherit;display:block;transition:box-shadow 0.15s, filter 0.15s}a[part=callout]:hover,a[part=callout]:focus-visible{filter:brightness(1.04);box-shadow:0 6px 24px var(--callout-shadow, rgba(15, 23, 42, 0.13))}a[part=callout]:active{filter:brightness(0.98)}@keyframes callout-slide-in-top{from{opacity:0;transform:translateY(-16px)}to{opacity:1;transform:translateY(0)}}@keyframes callout-slide-out-top{from{opacity:1;transform:translateY(0);max-height:200px}to{opacity:0;transform:translateY(-16px);max-height:0;padding:0;margin:0}}@keyframes callout-slide-in-bottom{from{opacity:0;transform:translateY(16px)}to{opacity:1;transform:translateY(0)}}@keyframes callout-slide-out-bottom{from{opacity:1;transform:translateY(0);max-height:200px}to{opacity:0;transform:translateY(16px);max-height:0;padding:0;margin:0}}@keyframes callout-slide-in-left{from{opacity:0;transform:translateX(-32px)}to{opacity:1;transform:translateX(0)}}@keyframes callout-slide-out-left{from{opacity:1;transform:translateX(0);max-width:600px}to{opacity:0;transform:translateX(-32px);max-width:0;padding:0;margin:0}}@keyframes callout-slide-in-right{from{opacity:0;transform:translateX(32px)}to{opacity:1;transform:translateX(0)}}@keyframes callout-slide-out-right{from{opacity:1;transform:translateX(0);max-width:600px}to{opacity:0;transform:translateX(32px);max-width:0;padding:0;margin:0}}@keyframes callout-fade-in{from{opacity:0}to{opacity:1}}@keyframes callout-fade-out{from{opacity:1}to{opacity:0}}@keyframes callout-progress{from{transform:scaleX(1)}to{transform:scaleX(0)}}@keyframes callout-spin{to{transform:rotate(360deg)}}@keyframes callout-pulse{0%{box-shadow:0 4px 16px var(--callout-shadow, rgba(15, 23, 42, 0.07)), 0 0 0 0 var(--callout-border)}70%{box-shadow:0 4px 16px var(--callout-shadow, rgba(15, 23, 42, 0.07)), 0 0 0 7px transparent}100%{box-shadow:0 4px 16px var(--callout-shadow, rgba(15, 23, 42, 0.07)), 0 0 0 0 transparent}}:host{display:block;width:100%}:host(.enter-top){animation:callout-slide-in-top 0.25s ease both}:host(.enter-bottom){animation:callout-slide-in-bottom 0.25s ease both}:host(.enter-left){animation:callout-slide-in-left 0.25s ease both}:host(.enter-right){animation:callout-slide-in-right 0.25s ease both}:host(.enter-fade){animation:callout-fade-in 0.25s ease both}:host(.closing.enter-top){animation:callout-slide-out-top 0.25s ease both;pointer-events:none}:host(.closing.enter-bottom){animation:callout-slide-out-bottom 0.25s ease both;pointer-events:none}:host(.closing.enter-left){animation:callout-slide-out-left 0.25s ease both;pointer-events:none}:host(.closing.enter-right){animation:callout-slide-out-right 0.25s ease both;pointer-events:none}:host(.closing.enter-fade){animation:callout-fade-out 0.25s ease both;pointer-events:none}:host(.banner){border-radius:0}.callout-inner{display:grid;grid-template-columns:auto 1fr auto;gap:12px;align-items:center;padding:14px 18px;border-radius:14px;position:relative;background:var(--callout-bg, #eff6ff);color:var(--callout-text, #1e3a8a);border:1px solid var(--callout-border, transparent);box-shadow:0 4px 16px var(--callout-shadow, rgba(15, 23, 42, 0.07));overflow:hidden}:host(.compact) .callout-inner{padding:8px 14px;gap:10px;border-radius:999px;align-items:center;grid-template-columns:auto auto 1fr auto}:host(.size-sm) .callout-inner{padding:6px 10px;border-radius:8px;gap:7px}:host(.size-sm) .callout-title,:host(.size-sm) .callout-message,:host(.size-sm) .callout-inline-message{font-size:0.78rem}:host(.size-sm) .callout-icon{width:22px;height:22px;font-size:1em}:host(.size-md) .callout-inner{padding:14px 18px;border-radius:14px;gap:12px}:host(.size-md) .callout-title,:host(.size-md) .callout-message,:host(.size-md) .callout-inline-message{font-size:0.95rem}:host(.size-md) .callout-icon{width:38px;height:38px;font-size:1.25em}:host(.size-lg) .callout-inner{padding:22px 28px;border-radius:22px;gap:18px}:host(.size-lg) .callout-title,:host(.size-lg) .callout-message,:host(.size-lg) .callout-inline-message{font-size:1.15rem}:host(.size-lg) .callout-icon{width:54px;height:54px;font-size:1.5em}:host(.compact) .callout-icon{width:28px;height:28px;border-radius:50%}:host(.compact) .callout-title{font-size:0.85rem}.callout-inline-message{font-size:0.85rem;opacity:0.8;flex:1}:host(.banner) .callout-inner{border-radius:0;border-left:none;border-right:none;box-shadow:none}.callout-icon{width:38px;height:38px;border-radius:10px;flex-shrink:0;display:inline-flex;align-items:center;justify-content:center;background:var(--callout-icon-bg, rgba(255, 255, 255, 0.5))}.callout-content{display:flex;flex-direction:column;gap:3px;min-width:0}.callout-title{font-weight:600;letter-spacing:-0.01em;font-size:0.95rem;line-height:1.3}.callout-message{font-size:0.875rem;opacity:0.85;line-height:1.5}.callout-actions{display:flex;gap:8px;flex-wrap:wrap;margin-top:6px}.callout-close{background:transparent;border:none;padding:5px;flex-shrink:0;border-radius:999px;cursor:pointer;color:inherit;opacity:0.6;transition:opacity 0.15s ease, background 0.15s ease;display:inline-flex;align-items:center;justify-content:center}.callout-close:hover{opacity:1;background:rgba(15, 23, 42, 0.08)}.callout-close:focus-visible{outline:2px solid currentColor;outline-offset:2px}.callout-progress{position:absolute;bottom:0;left:0;right:0;height:3px;background:currentColor;opacity:0.3;transform-origin:left center;animation:callout-progress linear both}:host(.outlined) .callout-inner{box-shadow:none;background:transparent;border-color:var(--callout-text, currentColor) !important}:host(.variant-info) .callout-inner{--callout-bg:#eff6ff;--callout-text:#1d4ed8;--callout-border:rgba(59, 130, 246, 0.3);--callout-icon-bg:rgba(59, 130, 246, 0.12);--callout-shadow:rgba(59, 130, 246, 0.08)}:host(.variant-success) .callout-inner{--callout-bg:#f0fdf4;--callout-text:#15803d;--callout-border:rgba(22, 163, 74, 0.3);--callout-icon-bg:rgba(22, 163, 74, 0.12);--callout-shadow:rgba(22, 163, 74, 0.08)}:host(.variant-warning) .callout-inner{--callout-bg:#fffbeb;--callout-text:#b45309;--callout-border:rgba(217, 119, 6, 0.3);--callout-icon-bg:rgba(217, 119, 6, 0.12);--callout-shadow:rgba(217, 119, 6, 0.08)}:host(.variant-danger) .callout-inner{--callout-bg:#fef2f2;--callout-text:#dc2626;--callout-border:rgba(220, 38, 38, 0.3);--callout-icon-bg:rgba(220, 38, 38, 0.12);--callout-shadow:rgba(220, 38, 38, 0.08)}:host(.variant-neutral) .callout-inner{--callout-bg:#f8fafc;--callout-text:#334155;--callout-border:rgba(100, 116, 139, 0.25);--callout-icon-bg:rgba(100, 116, 139, 0.1);--callout-shadow:rgba(15, 23, 42, 0.06)}@media (max-width: 640px){.callout-inner{grid-template-columns:auto 1fr auto;padding:12px 14px}}.callout-spinner{display:inline-block;width:20px;height:20px;border:2.5px solid var(--callout-icon-bg, rgba(255, 255, 255, 0.3));border-top-color:var(--callout-text, currentColor);border-radius:50%;animation:callout-spin 0.7s linear infinite;flex-shrink:0}:host(.no-icon) .callout-inner{grid-template-columns:1fr auto}:host(.compact.no-icon) .callout-inner{grid-template-columns:auto 1fr auto}:host(.pulse) .callout-inner{animation:callout-pulse 1.8s ease-in-out infinite}:host(.solid) .callout-close:hover{background:rgba(255, 255, 255, 0.15)}:host(.solid.variant-info) .callout-inner{--callout-bg:#1d4ed8;--callout-text:#ffffff;--callout-border:transparent;--callout-icon-bg:rgba(255, 255, 255, 0.2);--callout-shadow:rgba(29, 78, 216, 0.3)}:host(.solid.variant-success) .callout-inner{--callout-bg:#15803d;--callout-text:#ffffff;--callout-border:transparent;--callout-icon-bg:rgba(255, 255, 255, 0.2);--callout-shadow:rgba(21, 128, 61, 0.3)}:host(.solid.variant-warning) .callout-inner{--callout-bg:#d97706;--callout-text:#ffffff;--callout-border:transparent;--callout-icon-bg:rgba(255, 255, 255, 0.2);--callout-shadow:rgba(217, 119, 6, 0.3)}:host(.solid.variant-danger) .callout-inner{--callout-bg:#dc2626;--callout-text:#ffffff;--callout-border:transparent;--callout-icon-bg:rgba(255, 255, 255, 0.2);--callout-shadow:rgba(220, 38, 38, 0.3)}:host(.solid.variant-neutral) .callout-inner{--callout-bg:#334155;--callout-text:#ffffff;--callout-border:transparent;--callout-icon-bg:rgba(255, 255, 255, 0.15);--callout-shadow:rgba(51, 65, 85, 0.3)}:host(.accent-bar) .callout-inner{border-left:4px solid var(--callout-text, currentColor);border-radius:0 14px 14px 0;padding-left:14px}:host(.accent-bar.banner) .callout-inner{border-radius:0}:host(.accent-bar.compact) .callout-inner{border-radius:0 999px 999px 0}:host(.sticky){position:sticky;top:0;z-index:200}.callout-progress.paused,:host(.paused) .callout-marquee-content{animation-play-state:paused}.callout-message.truncated{display:-webkit-box;-webkit-line-clamp:var(--callout-truncate-lines, 3);line-clamp:var(--callout-truncate-lines, 3);-webkit-box-orient:vertical;overflow:hidden}.callout-show-more{background:none;border:none;padding:0;margin-top:4px;font-size:0.8rem;font-weight:600;color:var(--callout-text, currentColor);cursor:pointer;opacity:0.75;text-decoration:underline;text-underline-offset:2px;display:inline-block;line-height:1.4}.callout-show-more:hover{opacity:1}.callout-show-more:focus-visible{outline:2px solid currentColor;outline-offset:2px;border-radius:2px}:host(.marquee) .callout-inner{overflow:hidden}.callout-marquee-track{display:flex;width:100%;overflow:hidden;user-select:none;gap:3rem;}.callout-marquee-group{flex-shrink:0;display:flex;align-items:center;justify-content:flex-start;gap:3rem;min-width:100%;animation:callout-scroll var(--marquee-speed, 18s) linear infinite;will-change:transform}.callout-marquee-item{display:flex;align-items:center;white-space:nowrap}@keyframes callout-scroll{from{transform:translateX(0)}to{transform:translateX(calc(-100% - 3rem))}}:host(.paused) .callout-marquee-group{animation-play-state:paused}:host(.marquee) .callout-message{overflow:hidden}`;

const UiCalloutBanner = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.calloutDismiss = createEvent(this, "calloutDismiss");
        this.calloutShow = createEvent(this, "calloutShow");
        this.calloutAction = createEvent(this, "calloutAction");
    }
    /** Custom ARIA role override (default: alert/status) */
    ariaRole;
    /** Test ID for automated testing selectors */
    testId;
    /** Auto-focus the close button or banner when shown */
    focusOnShow = false;
    /** Progress value (0-100) for banners that show progress */
    progress;
    /** i18n/localization: override all labels/messages */
    i18n;
    _id = Math.random().toString(36).slice(2, 10);
    /** Visual variant that drives accent colors and icon */
    variant = 'info';
    /** Optional heading text when no `slot="title"` is provided */
    heading;
    /** Optional message text when default slot is empty */
    message;
    /** Optional icon glyph name; falls back to slot content if provided */
    icon;
    /** Icon library used when the `icon` prop is set */
    iconLibrary = 'lucide';
    /** Show the close button and allow dismissal */
    closable = true;
    /** Accessible label for the dismiss action */
    dismissLabel = 'Dismiss';
    /** Outline style instead of full background */
    outlined = false;
    /** Compact single-line layout */
    compact = false;
    /** Full-width top-of-page banner mode (removes border-radius, adds bottom border) */
    banner = false;
    /** Auto-dismiss after this many milliseconds (0 = disabled) */
    autoClose = 0;
    /** Show a loading spinner in place of the icon and set aria-busy on the host */
    loading = false;
    /** Animate the callout with a pulsing ring to draw attention */
    pulse = false;
    /** Hide the icon column entirely */
    noIcon = false;
    /** Bold, fully-saturated background for high-emphasis notices */
    solid = false;
    /** Add a coloured left-border accent bar (VS Code–style) */
    accentBar = false;
    /** Pause the auto-close timer while the user hovers over the banner */
    pauseOnHover = false;
    /** Stick the banner to the top of its scroll container */
    sticky = false;
    /** Clamp the message to N lines with a Show more/less toggle (0 = off) */
    truncate = 0;
    /** Size scale: sm, md, lg */
    size = 'md';
    /** Persistence key to remember dismissal via localStorage */
    persistKey;
    /** Scroll the message in an infinite marquee/ticker loop */
    marquee = false;
    /** Duration (seconds) for one full marquee loop. Lower = faster. Default 18. */
    marqueeSpeed = 18;
    visible = true;
    closing = false;
    paused = false;
    expanded = false;
    closeReady = true;
    slottedHTML = '';
    get el() { return getElement(this); }
    /** Fired when the banner is dismissed */
    calloutDismiss;
    /** Fired when the banner is shown via the show() method */
    calloutShow;
    /** Fired when an action in the slot is clicked */
    calloutAction;
    autoCloseTimer;
    closeBtnTimer;
    dismissTimer;
    remainingTime = 0;
    timerStart = 0;
    handlePersistKeyChange() {
        this.checkPersistence();
    }
    componentWillLoad() {
        this.checkPersistence();
    }
    checkPersistence() {
        if (this.persistKey && typeof window !== 'undefined') {
            const value = localStorage.getItem(`ui-callout-dismissed-${this.persistKey}`);
            if (value === 'true' || value === '1') {
                this.visible = false;
            }
        }
    }
    connectedCallback() {
        if (this.focusOnShow) {
            setTimeout(() => {
                const closeBtn = this.hostElement?.shadowRoot?.querySelector('.callout-close');
                if (closeBtn)
                    closeBtn.focus();
                else
                    this.hostElement?.focus();
            }, 100);
        }
        this.scheduleAutoClose();
        if (this.closableAfter > 0 && this.closable) {
            this.closeReady = false;
            this.closeBtnTimer = setTimeout(() => { this.closeReady = true; }, this.closableAfter);
        }
        else {
            this.closeReady = true;
        }
        this.readSlottedContent();
    }
    readSlottedContent() {
        if (this.marquee) {
            setTimeout(() => {
                const slot = this.el.shadowRoot?.querySelector('.callout-message slot:not([name])');
                if (slot) {
                    const nodes = slot.assignedNodes();
                    const raw = nodes.map(node => {
                        if (node.nodeType === 3)
                            return node.textContent;
                        return node.outerHTML || node.innerHTML || node.textContent || '';
                    }).join('');
                    this.slottedHTML = sanitizeHTML(raw);
                }
            }, 50);
        }
    }
    disconnectedCallback() {
        clearTimeout(this.autoCloseTimer);
        clearTimeout(this.closeBtnTimer);
        clearTimeout(this.dismissTimer);
    }
    /** Slide/fade-in direction for entrance animation */
    enterFrom = 'top';
    /** Make the callout clickable as a link */
    href;
    /** Target for the link (if href is set) */
    target;
    /** Delay before close button appears (ms) */
    closableAfter = 0;
    /** Programmatically update props at runtime */
    async update(props) {
        Object.entries(props).forEach(([key, value]) => {
            if (key in this)
                this[key] = value;
        });
    }
    handleActionClick = (e) => {
        // Only fire for direct children of the slot
        if (e.target && e.target.closest('[slot="actions"]')) {
            this.calloutAction.emit();
        }
    };
    onAutoCloseChange() {
        clearTimeout(this.autoCloseTimer);
        this.scheduleAutoClose();
    }
    scheduleAutoClose(duration) {
        const ms = duration ?? this.autoClose;
        if (ms > 0 && this.visible) {
            this.timerStart = Date.now();
            this.remainingTime = ms;
            this.autoCloseTimer = setTimeout(() => this.dismiss(), ms);
        }
    }
    dismiss() {
        if (this.persistKey && typeof window !== 'undefined') {
            localStorage.setItem(`ui-callout-dismissed-${this.persistKey}`, 'true');
        }
        this.closing = true;
        clearTimeout(this.dismissTimer);
        this.dismissTimer = setTimeout(() => {
            this.visible = false;
            this.closing = false;
            this.calloutDismiss.emit();
        }, 250);
    }
    /** Programmatically dismiss the banner */
    async hide() {
        this.dismiss();
    }
    async show() {
        if (this.persistKey && typeof window !== 'undefined') {
            localStorage.removeItem(`ui-callout-dismissed-${this.persistKey}`);
        }
        this.visible = true;
        this.closing = false;
        this.calloutShow.emit();
        this.scheduleAutoClose();
    }
    handleDismiss = () => {
        this.dismiss();
    };
    handleMouseEnter = () => {
        if (this.pauseOnHover && this.autoClose > 0 && this.visible && !this.closing) {
            clearTimeout(this.autoCloseTimer);
            const elapsed = Date.now() - this.timerStart;
            this.remainingTime = Math.max(0, this.remainingTime - elapsed);
            this.paused = true;
        }
    };
    handleMouseLeave = () => {
        if (this.pauseOnHover && this.paused) {
            this.paused = false;
            this.timerStart = Date.now();
            this.autoCloseTimer = setTimeout(() => this.dismiss(), this.remainingTime);
        }
    };
    toggleExpand = () => {
        this.expanded = !this.expanded;
    };
    defaultIcon() {
        const map = {
            info: 'info',
            success: 'check-circle',
            warning: 'triangle-alert',
            danger: 'circle-x',
            neutral: 'bell',
        };
        return map[this.variant] ?? 'info';
    }
    getIcon() {
        const name = this.icon ?? this.defaultIcon();
        return h("ui-icon", { name: name, library: this.iconLibrary, size: "1.25em" });
    }
    render() {
        if (!this.visible)
            return null;
        const classes = {
            [`variant-${this.variant}`]: true,
            outlined: this.outlined,
            compact: this.compact,
            banner: this.banner,
            closing: this.closing,
            loading: this.loading,
            pulse: this.pulse,
            'no-icon': this.noIcon,
            solid: this.solid,
            'accent-bar': this.accentBar,
            sticky: this.sticky,
            marquee: this.marquee,
            paused: this.paused,
            [`size-${this.size}`]: true,
            [`enter-${this.enterFrom}`]: true,
        };
        // Accessibility IDs
        const titleId = `callout-title-${this._id}`;
        const msgId = `callout-msg-${this._id}`;
        const isClickable = !!this.href;
        const ariaLive = this.autoClose > 0 ? 'assertive' : 'polite';
        const i18n = this.i18n || {};
        const content = (h("div", { class: "callout-inner", role: isClickable ? 'button' : 'status', "aria-live": ariaLive, "aria-labelledby": titleId, "aria-describedby": msgId, tabIndex: isClickable && !this.href ? 0 : undefined, onKeyDown: isClickable && !this.href ? (e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.handleActionClick(e);
                }
            }) : undefined, "data-testid": this.testId }, !this.noIcon && (h("div", { class: "callout-icon", part: "icon" }, this.loading
            ? h("span", { class: "callout-spinner", "aria-hidden": "true" })
            : h("slot", { name: "icon" }, this.getIcon()))), h("div", { class: "callout-content", part: "content" }, h("div", { class: "callout-title", part: "title", id: titleId }, h("slot", { name: "title" }, this.heading)), !this.compact && (h("div", { class: { 'callout-message': true, truncated: this.truncate > 0 && !this.expanded }, part: "message", id: msgId, style: this.truncate > 0 ? { '--callout-truncate-lines': String(this.truncate) } : {} }, this.marquee ? (h("div", { class: "callout-marquee-track", style: { '--marquee-speed': `${this.marqueeSpeed * 12}s` } }, h("div", { class: "callout-marquee-group", "aria-hidden": "true" }, Array.from({ length: 12 }).map(() => (h("span", { class: "callout-marquee-item", innerHTML: sanitizeHTML(this.message || this.slottedHTML) })))), h("div", { class: "callout-marquee-group", "aria-hidden": "true" }, Array.from({ length: 12 }).map(() => (h("span", { class: "callout-marquee-item", innerHTML: sanitizeHTML(this.message || this.slottedHTML) })))), h("div", { style: { display: 'none' } }, h("slot", null, this.message)))) : (h("slot", null, this.message)))), !this.compact && this.truncate > 0 && (h("ui-button", { variant: "ghost", class: "callout-show-more", onClick: this.toggleExpand, size: "sm", label: this.expanded ? (i18n.showLessLabel || 'Show less ↑') : (i18n.showMoreLabel || 'Show more ↓') })), !this.compact && (h("div", { class: "callout-actions", part: "actions", onClick: this.handleActionClick }, h("slot", { name: "actions" })))), this.compact && (h("div", { class: "callout-inline-message", part: "message", id: msgId }, h("slot", null, this.message))), this.closable && this.closeReady && (h("ui-button", { variant: "ghost", class: "callout-close", onClick: this.handleDismiss, ariaLabel: i18n.dismissLabel || this.dismissLabel, icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" }))));
        const progress = (typeof this.progress === 'number')
            ? (h("div", { class: "callout-progress-bar", style: { width: this.progress + '%' }, "aria-valuenow": this.progress, "aria-valuemin": "0", "aria-valuemax": "100", role: "progressbar" }))
            : (this.autoClose > 0 && this.visible && !this.closing && (h("div", { class: { 'callout-progress': true, paused: this.paused }, part: "progress", style: { animationDuration: `${this.autoClose}ms` } })));
        if (this.href) {
            return (h("a", { href: this.href, target: this.target, rel: this.target === '_blank' ? 'noopener noreferrer' : undefined, class: classes, part: "callout", "aria-busy": this.loading ? 'true' : undefined, "aria-labelledby": titleId, "aria-describedby": msgId, "aria-live": ariaLive, role: this.ariaRole || (this.variant === 'neutral' ? 'status' : 'alert'), "data-testid": this.testId, tabIndex: this.focusOnShow ? 0 : undefined, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, content, progress));
        }
        return (h(Host, { class: classes, part: "callout", "aria-busy": this.loading ? 'true' : undefined, "aria-labelledby": titleId, "aria-describedby": msgId, "aria-live": ariaLive, role: this.ariaRole || (this.variant === 'neutral' ? 'status' : 'alert'), "data-testid": this.testId, tabIndex: this.focusOnShow ? 0 : undefined, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, content, progress));
    }
    static get watchers() { return {
        "persistKey": [{
                "handlePersistKeyChange": 0
            }],
        "autoClose": [{
                "onAutoCloseChange": 0
            }]
    }; }
};
UiCalloutBanner.style = calloutBannerCss();

export { UiCalloutBanner as ui_callout_banner };
