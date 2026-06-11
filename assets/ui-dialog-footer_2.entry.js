import { r as registerInstance, h, c as createEvent, a as getElement } from './index-DUsoYu9r.js';

const dialogFooterCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%}.dialog-footer{display:flex;align-items:center;flex-wrap:wrap;gap:12px;padding:16px 24px;background-color:transparent}.dialog-footer--end{justify-content:flex-end}.dialog-footer--start{justify-content:flex-start}.dialog-footer--center{justify-content:center}.dialog-footer--space-between{justify-content:space-between}.dialog-footer--sticky{position:sticky;bottom:0;z-index:1;background-color:var(--bg-primary, #ffffff)}.dialog-footer--no-divider{border-top:none}.dialog-footer button{padding:8px 16px;border:1px solid var(--border-strong, #d1d5db);border-radius:6px;background-color:var(--bg-primary, #ffffff);color:var(--text-secondary, #374151);font-size:14px;cursor:pointer;transition:all 0.2s ease}.dialog-footer button:hover{background-color:var(--bg-secondary, #f3f4f6);border-color:var(--color-primary, #9ca3af)}.dialog-footer button:focus{outline:none;box-shadow:0 0 0 2px var(--color-primary, #10b981)}`;

const DialogFooter = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Horizontal alignment of footer content */
    align = 'end';
    /** Pin the footer to the bottom of the dialog when content scrolls */
    sticky = false;
    /** Show/hide the top divider border */
    divider = true;
    render() {
        const classes = [
            'dialog-footer',
            `dialog-footer--${this.align}`,
            this.sticky ? 'dialog-footer--sticky' : '',
            !this.divider ? 'dialog-footer--no-divider' : '',
        ].filter(Boolean).join(' ');
        return (h("div", { key: 'cc45b1ff88c4328b99763205bee3927ba65e4ee6', class: classes }, h("slot", { key: 'e36560274bd1fce4b5b4b3c21e3cd50e8a99eb6a', name: "start" }), h("slot", { key: '936d96c5a6477e5fac84e43aaaf3a321575e06ca' })));
    }
};
DialogFooter.style = dialogFooterCss();

const dialogHeaderCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.dialog-header-section{display:flex;align-items:center;justify-content:space-between;padding:12px 20px;background-color:transparent;border-bottom:none;cursor:move;user-select:none;gap:12px}.dialog-title-section{flex:1;margin:0;display:flex;align-items:center;gap:12px}.dialog-title-section h1,.dialog-title-section h2,.dialog-title-section h3,.dialog-title-section h4,.dialog-title-section h5,.dialog-title-section h6{margin:0;font-size:18px;font-weight:600;color:var(--text-primary, #111827);line-height:1.2;display:inline-block;vertical-align:middle;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:450px;min-width:0}.title-label-wrapper{display:flex;flex-direction:column;gap:2px;min-width:0;flex:1}.title-label-wrapper .title-row{display:flex;flex-direction:row !important;align-items:center;gap:8px;flex-shrink:0;min-width:0;max-width:100%}.title-label-wrapper .dialog-subtitle{margin:0;font-size:14px;color:var(--text-muted, #6b7280);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:550px;opacity:0.8}.title-label-wrapper.one-liner{flex-direction:column !important;align-items:flex-start !important;gap:2px !important}.title-label-wrapper.one-liner h3{font-size:16px !important;max-width:400px}.title-label-wrapper.one-liner .dialog-subtitle{font-size:13px !important;max-width:400px}.status-icon{font-size:20px;line-height:1}.dialog-controls{display:flex;gap:8px;align-items:center}.dialog-btn{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:none;border-radius:4px;background-color:var(--ui-bg-muted, rgba(0, 0, 0, 0.03));color:var(--text-muted, #6b7280);cursor:pointer;transition:all 0.2s ease}.dialog-btn:hover{background-color:var(--bg-primary, #e5e7eb) !important;color:var(--text-secondary, #374151) !important}.dialog-btn svg{width:16px;height:16px}.dialog-menu-wrapper{position:relative;display:flex;align-items:center}.dialog-menu-popup{display:none !important;position:absolute;top:100%;right:0;width:200px}.header-avatar{width:40px;height:40px;border-radius:50%;overflow:hidden;border:4px solid rgba(255, 255, 255, 0.2);flex-shrink:0}.header-avatar img{width:100%;height:100%;object-fit:cover}.header-icon{width:36px;height:36px;background:rgba(0, 0, 0, 0.05);border-radius:8px;display:flex;align-items:center;justify-content:center;color:var(--text-muted, #64748b);flex-shrink:0}.status-success .status-icon{color:var(--color-success, #10b981)}.status-error .status-icon{color:var(--color-danger, #ef4444)}.status-warning .status-icon{color:var(--color-warning, #f59e0b)}.status-info .status-icon{color:var(--color-primary, #10b981)}.status-icon{display:flex;align-items:center;font-size:1.25rem}`;

const DialogHeader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.minimize = createEvent(this, "minimize");
        this.maximize = createEvent(this, "maximize");
        this.close = createEvent(this, "close");
        this.menu = createEvent(this, "menu");
    }
    /**
     * Dialog title
     */
    dialogTitle = '';
    /**
     * Subtitle text
     */
    subtitle = '';
    /**
     * Whether to show minimize button
     */
    showMinimize = true;
    /**
     * Whether to show maximize button
     */
    showMaximize = true;
    /**
     * Whether to show close button
     */
    showClose = true;
    /**
     * Whether to show menu button
     */
    showMenu = false;
    /**
     * Icon name for the menu trigger button. Defaults to 'more-horizontal' (⋯).
     */
    menuIcon = 'more-horizontal';
    /**
     * Menu items for the built-in context menu.
     */
    menuItems = [];
    /**
     * Tooltip/title for the menu trigger button.
     */
    menuTitle = 'Menu';
    /**
     * Dialog variant style
     */
    variant = 'outlined';
    /**
     * Dialog status/type
     */
    status = 'default';
    /**
     * Dialog type (messagebox etc)
     */
    type = 'modal';
    /**
     * Icon name to show before the title
     */
    icon = '';
    /**
     * User avatar URL to show before the title
     */
    avatar = '';
    /**
     * Library to use for icons
     */
    iconLibrary = 'default';
    /**
     * Semantic tag for the title (h1-h6)
     */
    titleTag = 'h3';
    /**
     * Position of the icon/avatar relative to the title
     */
    iconPosition = 'left';
    get el() { return getElement(this); }
    hasTitleTooltip = false;
    hasSubtitleTooltip = false;
    titleEl;
    subtitleEl;
    /**
     * Event emitted when minimize button is clicked
     */
    minimize;
    /**
     * Event emitted when maximize button is clicked
     */
    maximize;
    /**
     * Event emitted when close button is clicked
     */
    close;
    /**
     * Event emitted when menu button is clicked
     */
    menu;
    handleMinimize = () => {
        this.minimize.emit();
    };
    handleMaximize = () => {
        this.maximize.emit();
    };
    handleClose = () => {
        this.close.emit();
    };
    handleMenu = (e) => {
        this.menu.emit({ originalEvent: e, trigger: e.currentTarget });
    };
    componentDidLoad() {
        this.checkTruncation();
    }
    componentDidUpdate() {
        this.checkTruncation();
    }
    handleResize() {
        this.checkTruncation();
    }
    checkTruncation() {
        if (this.titleEl) {
            const isTruncated = this.titleEl.scrollWidth > this.titleEl.clientWidth;
            if (this.hasTitleTooltip !== isTruncated) {
                this.hasTitleTooltip = isTruncated;
            }
        }
        if (this.subtitleEl) {
            const isTruncated = this.subtitleEl.scrollWidth > this.subtitleEl.clientWidth;
            if (this.hasSubtitleTooltip !== isTruncated) {
                this.hasSubtitleTooltip = isTruncated;
            }
        }
    }
    render() {
        const statusIcons = {
            info: 'info',
            success: 'check-circle',
            warning: 'alert-triangle',
            error: 'alert-circle',
        };
        const Tag = this.titleTag;
        const renderAsset = () => {
            if (this.avatar) {
                return (h("div", { class: "header-avatar" }, h("img", { src: this.avatar, alt: "Avatar" })));
            }
            if (this.status !== 'default') {
                return (h("span", { class: "status-icon", title: this.status.toUpperCase() }, h("ui-icon", { name: statusIcons[this.status], library: this.iconLibrary, size: "1.2em" })));
            }
            if (this.icon && this.status === 'default') {
                return (h("span", { class: "header-icon" }, h("ui-icon", { name: this.icon, library: this.iconLibrary, size: "1.2em" })));
            }
            return null;
        };
        return (h("div", { class: {
                'dialog-header-section': true,
                [`status-${this.status}`]: this.status !== 'default',
                [`type-${this.type}`]: true
            } }, h("div", { class: "dialog-title-section" }, h("slot", null, (this.dialogTitle || this.subtitle) && (h("div", { class: { 'title-label-wrapper': true, 'one-liner': this.type === 'messagebox' } }, h("div", { class: "title-row" }, this.iconPosition === 'left' && (h("slot", { name: "icon" }, renderAsset())), this.dialogTitle && (h(Tag, { ref: (el) => (this.titleEl = el), title: this.hasTitleTooltip ? this.dialogTitle : undefined }, this.dialogTitle)), this.iconPosition === 'right' && (h("slot", { name: "icon" }, renderAsset()))), this.subtitle && (h("p", { class: "dialog-subtitle", ref: (el) => (this.subtitleEl = el), title: this.hasSubtitleTooltip ? this.subtitle : undefined }, this.subtitle)))))), h("div", { class: "dialog-controls" }, h("slot", { name: "header-actions" }), h("slot", { name: "actions" }), ((Array.isArray(this.menuItems) ? this.menuItems.length > 0 : !!this.menuItems)) && (h("div", { class: "dialog-menu-wrapper" }, h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: this.menuIcon, iconLibrary: this.iconLibrary, onButtonClick: this.handleMenu, title: this.menuTitle }), h("div", { class: "dialog-menu-popup", style: { display: 'none' } }, h("slot", { name: "menu-list" })))), this.showMinimize && (h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "minus", onClick: () => this.handleMinimize(), title: "Minimize" })), this.showMaximize && (h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "maximize-2", onClick: () => this.handleMaximize(), title: "Maximize" })), this.showClose && (h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "x", onClick: () => this.handleClose(), title: "Close", part: "close-btn" })))));
    }
};
DialogHeader.style = dialogHeaderCss();

export { DialogFooter as ui_dialog_footer, DialogHeader as ui_dialog_header };
