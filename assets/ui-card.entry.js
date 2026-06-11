import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-Dqu2zaH1.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const cardCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;box-sizing:border-box;--ui-card-selected-border:var(--color-primary, #10b981);--ui-card-primary:var(--color-primary, #10b981);--ui-card-success:var(--color-success, #10b981);--ui-card-warning:var(--color-warning, #f59e0b);--ui-card-danger:var(--color-danger, #ef4444);--ui-card-info:var(--color-info, #06b6d4)}:host *{box-sizing:border-box}.ui-card{font-family:var(--ui-font-family, inherit);position:relative;width:100%;height:100%;transition:transform 0.3s ease, box-shadow 0.3s ease}.card-container{position:relative;width:100%;height:100%;perspective:1000px}.card-flipper{position:relative;width:100%;height:100%;transition:transform 0.6s cubic-bezier(0.4, 0, 0.2, 1);transform-style:preserve-3d}:host(.is-flipped) .card-flipper{transform:rotateY(180deg)}:host(.is-flippable){min-height:var(--ui-card-flip-min-height, 280px)}:host(.is-flippable) .card-container{min-height:var(--ui-card-flip-min-height, 280px)}:host(.is-closed){display:none !important}.card-face{position:absolute;top:0;left:0;width:100%;height:min-content;min-height:100%;backface-visibility:hidden;-webkit-backface-visibility:hidden;display:flex}.face-back{transform:rotateY(180deg)}.card-face-content{display:flex;flex-direction:column;width:100%;background:var(--ui-card-bg, var(--bg-primary, #ffffff));border-radius:var(--ui-card-radius, 8px);overflow:hidden;transition:all 0.3s ease;border:1px solid var(--ui-card-border-color, var(--border-default, #e5e7eb));box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);position:relative}.card-details-wrapper{display:flex;flex-direction:column;flex:1;width:100%}.card-variant-elevated{box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)}.card-variant-outlined{box-shadow:none;border:2px solid var(--ui-card-border-color, var(--border-default, #e5e7eb))}.card-variant-filled{background-color:var(--bg-primary, #f9fafb);border:none}.card-variant-primary{border-left:4px solid var(--ui-card-primary)}.card-variant-primary .card-header{background:linear-gradient(to right, rgba(var(--color-primary-rgb, 59, 130, 246), 0.1), transparent)}.card-variant-success{border-left:4px solid var(--ui-card-success)}.card-variant-success .card-header{background:linear-gradient(to right, rgba(var(--color-success-rgb, 16, 185, 129), 0.1), transparent)}.card-variant-warning{border-left:4px solid var(--ui-card-warning)}.card-variant-warning .card-header{background:linear-gradient(to right, rgba(var(--color-warning-rgb, 245, 158, 11), 0.1), transparent)}.card-variant-danger{border-left:4px solid var(--ui-card-danger)}.card-variant-danger .card-header{background:linear-gradient(to right, rgba(var(--color-danger-rgb, 239, 68, 68), 0.1), transparent)}.card-variant-info{border-left:4px solid var(--ui-card-info)}.card-variant-info .card-header{background:linear-gradient(to right, rgba(6, 182, 212, 0.1), transparent)}.card-variant-status{border:1px solid var(--border-default, #e5e7eb);transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.card-variant-status.card-color-primary{border:1.5px solid var(--ui-card-primary);background:color-mix(in srgb, var(--ui-card-primary) 5%, var(--ui-card-bg, var(--bg-primary, #ffffff)))}.card-variant-status.card-color-primary .card-header{border-bottom-color:color-mix(in srgb, var(--ui-card-primary) 15%, var(--border-default, #e5e7eb))}.card-variant-status.card-color-success{border:1.5px solid var(--ui-card-success);background:color-mix(in srgb, var(--ui-card-success) 5%, var(--ui-card-bg, var(--bg-primary, #ffffff)))}.card-variant-status.card-color-success .card-header{border-bottom-color:color-mix(in srgb, var(--ui-card-success) 15%, var(--border-default, #e5e7eb))}.card-variant-status.card-color-warning{border:1.5px solid var(--ui-card-warning);background:color-mix(in srgb, var(--ui-card-warning) 5%, var(--ui-card-bg, var(--bg-primary, #ffffff)))}.card-variant-status.card-color-warning .card-header{border-bottom-color:color-mix(in srgb, var(--ui-card-warning) 15%, var(--border-default, #e5e7eb))}.card-variant-status.card-color-danger{border:1.5px solid var(--ui-card-danger);background:color-mix(in srgb, var(--ui-card-danger) 5%, var(--ui-card-bg, var(--bg-primary, #ffffff)))}.card-variant-status.card-color-danger .card-header{border-bottom-color:color-mix(in srgb, var(--ui-card-danger) 15%, var(--border-default, #e5e7eb))}.card-variant-status.card-color-info{border:1.5px solid var(--ui-card-info);background:color-mix(in srgb, var(--ui-card-info) 5%, var(--ui-card-bg, var(--bg-primary, #ffffff)))}.card-variant-status.card-color-info .card-header{border-bottom-color:color-mix(in srgb, var(--ui-card-info) 15%, var(--border-default, #e5e7eb))}.card-importance-emphasized{box-shadow:0 10px 30px rgba(0, 0, 0, 0.15);border:none;background:linear-gradient(135deg, var(--bg-secondary, #111827) 0%, var(--color-primary, #374151) 100%);color:var(--text-standard, #ffffff)}.card-importance-emphasized .card-title-text,.card-importance-emphasized .card-content,.card-importance-emphasized .card-extra,.card-importance-emphasized .card-description{color:var(--text-standard, #ffffff)}.card-importance-emphasized .card-header,.card-importance-emphasized .card-footer{border-bottom-color:rgba(255, 255, 255, 0.1);border-top-color:rgba(255, 255, 255, 0.1)}.card-importance-emphasized .card-action-btn{color:rgba(255, 255, 255, 0.7)}.card-importance-emphasized .card-action-btn:hover{background:rgba(255, 255, 255, 0.1);color:var(--text-standard, #ffffff)}.card-pattern-shortcut{text-align:center;padding:32px 24px;align-items:center}.card-pattern-shortcut .card-header{border-bottom:none;padding:0;margin-bottom:16px;flex-direction:column}.card-pattern-shortcut .card-header-main{flex-direction:column;gap:12px}.card-pattern-shortcut .card-title-text{font-size:20px;text-align:center}.card-pattern-shortcut .card-avatar{margin:0 auto 8px;width:64px;height:64px}.card-pattern-shortcut .card-avatar i{font-size:32px}.card-pattern-product .card-cover{background:var(--bg-primary, #f7f7f7)}.card-pattern-product .card-content{padding-top:16px}.card-type-inner{background:var(--bg-primary, #fafafa)}.card-type-inner .card-header{background:transparent;padding:12px 16px;min-height:48px}.card-type-inner .card-content{padding:16px}.card-glass{background:rgba(255, 255, 255, 0.4);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255, 255, 255, 0.3);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.1)}.card-selectable{cursor:pointer;border:2px solid transparent !important}.card-selectable:hover{border-color:var(--border-subtle, #e6f7ff) !important;box-shadow:0 4px 12px rgba(0, 0, 0, 0.08)}.card-selected{border-color:var(--ui-card-selected-border) !important;box-shadow:0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.selection-indicator{position:absolute;top:8px;right:8px;width:24px;height:24px;background:var(--ui-card-selected-border);border-radius:50%;display:flex;align-items:center;justify-content:center;color:var(--text-standard, #ffffff);opacity:0;transform:scale(0.5);transition:all 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);z-index:10}.selection-indicator.selected{opacity:1;transform:scale(1)}.card-ribbon{position:absolute;z-index:20;padding:4px 16px;background:var(--ui-card-primary);color:var(--text-standard, #ffffff);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2)}.card-ribbon.ribbon-top-right{top:12px;right:-8px;border-radius:4px 0 0 4px}.card-ribbon.ribbon-top-right::after{content:"";position:absolute;right:0;bottom:-8px;border-right:8px solid transparent;border-top:8px solid rgba(0, 0, 0, 0.3)}.card-ribbon.ribbon-top-left{top:12px;left:-8px;border-radius:0 4px 4px 0}.card-ribbon.ribbon-top-left::after{content:"";position:absolute;left:0;bottom:-8px;border-left:8px solid transparent;border-top:8px solid rgba(0, 0, 0, 0.3)}.card-header{display:flex;align-items:center;justify-content:space-between;padding:16px 20px;border-bottom:1px solid var(--border-subtle, #f3f4f6);min-height:56px;gap:12px;transition:all 0.3s ease}.card-contain-tabs .card-header{border-bottom:none;padding-bottom:0}.card-header-main{display:flex;align-items:center;gap:12px;flex:1}.card-avatar{width:40px;height:40px;border-radius:50%;background:var(--bg-secondary, #f3f4f6);display:flex;align-items:center;justify-content:center;overflow:hidden;flex-shrink:0}.card-avatar i{font-size:18px;color:var(--text-muted, #9ca3af)}.card-avatar-img{width:100%;height:100%;object-fit:cover}.card-title-text{font-weight:700;font-size:16px;color:var(--text-primary, #111827)}.card-actions{display:flex;align-items:center;gap:4px}.card-extra{font-size:13px;color:var(--text-muted, #6b7280)}.card-action-btn{width:32px;height:32px;padding:0;border:none;background:transparent;border-radius:6px;cursor:pointer;color:var(--text-muted, #6b7280);display:flex;align-items:center;justify-content:center;transition:all 0.2s}.card-action-btn:hover{background:var(--bg-secondary, #f3f4f6);color:var(--text-primary, #111827)}.card-cover{width:100%;overflow:hidden}.card-cover img{width:100%;height:100%;object-fit:cover;display:block;transition:transform 0.5s ease}.card-hoverable:hover .card-cover img{transform:scale(1.05)}.card-content{padding:20px;flex:1;color:var(--text-secondary, #4b5563);line-height:1.6}.card-description{margin-top:12px;color:var(--text-muted, #6b7280);font-size:14px}.card-tag{display:inline-block;margin-top:12px;padding:2px 10px;background:var(--bg-secondary, #f3f4f6);border-radius:99px;font-size:12px;color:var(--text-secondary, #4b5563);font-weight:500}.card-footer{padding:16px 20px;border-top:1px solid var(--border-subtle, #f3f4f6);display:flex;flex-direction:column;gap:12px}.card-primary-btn{width:100%;padding:10px;background:var(--ui-card-primary);color:var(--text-standard, #ffffff);border:none;border-radius:6px;font-weight:600;cursor:pointer;transition:opacity 0.2s}.card-primary-btn:hover{opacity:0.9}.card-quick-actions{list-style:none;padding:0;margin:16px -20px -16px;display:flex;background:var(--bg-primary, #fafafa);border-top:1px solid var(--border-subtle, #f3f4f6)}.card-quick-actions li{flex:1;padding:12px 16px;text-align:center;color:var(--text-secondary, #4b5563);font-weight:500;cursor:pointer;transition:all 0.2s;border-right:1px solid var(--border-subtle, #f3f4f6)}.card-quick-actions li:last-child{border-right:none}.card-quick-actions li:hover{background:var(--bg-secondary, #f3f4f6);color:var(--ui-card-primary)}.card-layout-horizontal{flex-direction:row !important}.card-layout-horizontal .card-cover{width:35% !important;max-width:300px;height:auto !important;flex-shrink:0}.card-layout-horizontal .card-details-wrapper{flex:1}@media (max-width: 768px){.card-layout-horizontal{flex-direction:column !important}.card-layout-horizontal .card-cover{width:100% !important;max-width:none;aspect-ratio:16/9}}::slotted([slot=grid]){display:grid;grid-template-columns:repeat(auto-fit, minmax(200px, 1fr));gap:1px;background:var(--bg-secondary, #f3f4f6);border-top:1px solid var(--border-subtle, #f3f4f6)}::slotted([slot=grid]) ui-card{margin:0;--ui-card-radius:0}.menu-container{position:relative}.menu-dropdown{position:absolute;top:100%;right:0;background:var(--bg-primary, #ffffff);border-radius:8px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);border:1px solid var(--border-subtle, #f3f4f6);padding:6px;min-width:160px;z-index:100;margin-top:4px;animation:slideDown 0.2s ease}@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.menu-item{width:100%;padding:8px 12px;border:none;background:transparent;display:flex;align-items:center;gap:8px;border-radius:4px;cursor:pointer;font-size:14px;color:var(--text-secondary, #374151)}.menu-item:hover{background:var(--bg-primary, #f9fafb);color:var(--text-primary, #111827)}.menu-item.menu-item-disabled{opacity:0.5;cursor:not-allowed}.menu-separator{height:1px;background:var(--bg-secondary, #f3f4f6);margin:4px -6px}.card-loading-container{background:var(--bg-primary, #ffffff);border:1px solid var(--border-default, #e5e7eb);padding:20px}.skeleton-avatar{background:var(--bg-secondary, #f3f4f6);width:48px;height:48px;border-radius:50%}.skeleton-text{background:var(--bg-secondary, #f3f4f6);height:16px;border-radius:4px;position:relative;overflow:hidden}.skeleton-text::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);animation:loading-shimmer 1.5s infinite}@keyframes loading-shimmer{from{transform:translateX(-100%)}to{transform:translateX(100%)}}.card-hoverable:hover{transform:translateY(-4px);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)}.card-clickable{cursor:pointer}:host-context([data-theme=dark]) .card-face-content{background:var(--bg-primary, #1f2937);border-color:var(--border-default, #374151);color:var(--text-standard, #f3f4f6)}:host-context([data-theme=dark]) .card-title-text{color:var(--text-standard, #f9fafb)}:host-context([data-theme=dark]) .card-header{border-bottom-color:var(--border-default, #374151)}:host-context([data-theme=dark]) .card-footer{border-top-color:var(--border-default, #374151)}:host-context([data-theme=dark]) .menu-dropdown{background:var(--bg-primary, #1f2937);border-color:var(--border-default, #374151)}:host-context([data-theme=dark]) .menu-item{color:var(--bg-secondary, #d1d5db)}:host-context([data-theme=dark]) .menu-item:hover{background:var(--color-primary, #374151);color:var(--text-standard, #f9fafb)}:host-context([data-theme=dark]) .skeleton-text,:host-context([data-theme=dark]) .skeleton-avatar{background:var(--color-primary, #374151)}`;

const Card = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.cardFlip = createEvent(this, "cardFlip");
        this.menuItemClick = createEvent(this, "menuItemClick");
        this.expandToggle = createEvent(this, "expandToggle");
        this.cardToggle = createEvent(this, "cardToggle");
        this.cardClick = createEvent(this, "cardClick");
        this.cardSelect = createEvent(this, "cardSelect");
        this.cardClose = createEvent(this, "cardClose");
        this.menuActionClick = createEvent(this, "menuActionClick");
    }
    get element() { return getElement(this); }
    // --- Identity ---
    /** Unique identifier for the card */
    cardId = '';
    /** Card title string */
    cardTitle = '';
    // --- Styling & Variants ---
    /** Card variant */
    variant = 'default';
    /** Card size */
    size = 'default';
    /** Card layout orientation */
    layout = 'vertical';
    /** Card color theme */
    color = 'default';
    /** Card display mode */
    displayMode = 'default';
    /** Card shape */
    shape = 'default';
    /** Enable glassmorphism effect (premium visual) */
    glass = false;
    /** Whether to show standard border */
    bordered = true;
    /** Custom border string (e.g., '2px solid red') */
    border = '';
    /** Custom border radius */
    borderRadius = '8px';
    /** Card importance level */
    importance = 'standard';
    /** Card pattern/style preset */
    pattern = 'default';
    /** Custom head section style */
    headStyle = {};
    /** Custom body section style */
    bodyStyle = {};
    /** Type variant: 'inner' | 'default' */
    type = 'default';
    // --- Dimensions ---
    /** Width of the card */
    width = '100%';
    /** Height of the card */
    height = 'auto';
    /** Aspect ratio for cover image container */
    aspectRatio = '16/9';
    // --- Interactions ---
    /** Enable hover elevation/shadow effect */
    hoverable = false;
    /** Enable flip animation */
    flippable = false;
    /** Flip trigger mechanism: 'click' | 'hover' */
    flipTrigger = 'click';
    /** Initially flipped or controlled flipped state */
    flipped = false;
    /** Enable card expansion/collapse */
    collapsible = false;
    /** Initially collapsed or controlled collapsed state */
    collapsed = false;
    /** Show close button in header */
    closable = false;
    /** Controlled closed/dismissed state of the card */
    closed = false;
    /** Enable selection mode */
    selectable = false;
    /** Selection state */
    selected = false;
    /** Make entire card clickable (if flippable is false) */
    clickable = false;
    /** URL to navigate to when clicked */
    href = '';
    /** Link target (e.g., '_blank') */
    target = '';
    /** Enable 3D tilt effect */
    tilt = false;
    /** Enable magnetic attraction effect */
    magnetic = false;
    // --- Content Props ---
    /** Cover image URL */
    cover = '';
    /** Alt text for cover image */
    coverAlt = 'Card cover';
    /** Content to show in the extra section of the header */
    extra = '';
    /** Avatar image URL */
    avatar = '';
    /** Avatar icon class (e.g. 'fas fa-user') */
    avatarIcon = '';
    /** Ribbon text to display on a corner */
    ribbon = '';
    /** Ribbon position */
    ribbonPosition = 'top-right';
    /** Ribbon custom color */
    ribbonColor = '';
    /** Description text (pattern: shortcut) */
    description = '';
    /** Tag text (pattern: product/shortcut) */
    tag = '';
    /** Primary button text in footer */
    buttonText = '';
    /** Quick actions (comma-separated list for bottom footer) */
    actions = '';
    // --- Menus ---
    /** Show menu button (3 dots) */
    showMenu = false;
    /** Menu items (as JSON string array of CardMenuItem) */
    menuItems = '[]';
    /** Menu actions (comma-separated list, alternative to menuItems) */
    menuActions = '';
    /** Icon library for menu items */
    iconLibrary = 'default';
    /** Show loading skeleton */
    loading = false;
    /** Automatically scroll the card into view when it is expanded if it's partially off-screen */
    autoScroll = false;
    /** Scrolling behavior when autoScroll is enabled */
    scrollBehavior = 'smooth';
    isFlipped = false;
    isMenuOpen = false;
    isCollapsed = false;
    isClosed = false;
    parsedMenuItems = [];
    magneticTransform = '';
    tiltTransform = '';
    cardFlip;
    menuItemClick;
    expandToggle;
    cardToggle; // Matches set-ui bool output
    cardClick;
    cardSelect; // Matches set-ui bool output
    cardClose;
    /** Emitted when a menu action is clicked (alias for menuItemClick matching ui-card) */
    menuActionClick;
    menuRef;
    handleMenuPropsChange() {
        this.parseMenuItems();
    }
    handleFlippedChange(newValue) {
        this.isFlipped = newValue;
    }
    handleCollapsedChange(newValue) {
        this.isCollapsed = newValue;
    }
    handleClosedChange(newValue) {
        this.isClosed = newValue;
    }
    componentWillLoad() {
        this.parseMenuItems();
        this.isFlipped = this.flipped;
        this.isCollapsed = this.collapsed;
        this.isClosed = this.closed;
    }
    handleClickOutside(event) {
        if (this.isMenuOpen && this.menuRef && !this.menuRef.contains(event.target)) {
            this.isMenuOpen = false;
        }
    }
    parseMenuItems() {
        let items = [];
        // 1. Try JSON menuItems first
        if (this.menuItems && this.menuItems !== '[]') {
            try {
                items = JSON.parse(this.menuItems);
            }
            catch (error) {
                console.error('Invalid JSON for menu items:', error);
            }
        }
        // 2. Append comma-separated menuActions
        if (this.menuActions) {
            const actions = this.menuActions.split(',').map(a => a.trim());
            actions.forEach(a => {
                if (a) {
                    items.push({ id: a.toLowerCase().replace(/\s+/g, '-'), label: a });
                }
            });
        }
        this.parsedMenuItems = items;
    }
    toggleFlip = (e) => {
        if (e)
            e.stopPropagation();
        if (!this.flippable)
            return;
        this.isFlipped = !this.isFlipped;
        this.flipped = this.isFlipped;
        this.cardFlip.emit(this.isFlipped);
    };
    toggleCollapse = (event) => {
        if (event)
            event.stopPropagation();
        if (!this.collapsible)
            return;
        this.isCollapsed = !this.isCollapsed;
        this.collapsed = this.isCollapsed;
        this.cardToggle.emit(!this.isCollapsed);
        this.expandToggle.emit({ expanded: !this.isCollapsed });
        // Auto-scroll logic
        if (this.autoScroll && !this.isCollapsed) {
            setTimeout(() => {
                this.element.scrollIntoView({ behavior: this.scrollBehavior, block: 'nearest' });
            }, 300); // Wait for transition
        }
    };
    /** Programmatically scroll this card into view */
    async scrollToCard() {
        this.element.scrollIntoView({ behavior: this.scrollBehavior, block: 'nearest' });
    }
    toggleMenu = (event) => {
        event.stopPropagation();
        this.isMenuOpen = !this.isMenuOpen;
    };
    handleMenuItemClick = (itemId, event) => {
        event.stopPropagation();
        const menuItem = this.parsedMenuItems.find(item => item.id === itemId);
        if (menuItem?.disabled)
            return;
        this.menuItemClick.emit({
            itemId,
            cardId: this.cardId
        });
        this.menuActionClick.emit(itemId);
        this.isMenuOpen = false;
    };
    handleCardClick = (e) => {
        const target = e.target;
        const isInteractive = target.closest('button') || target.closest('.menu-dropdown') || target.closest('.card-actions') || target.closest('.card-action-btn');
        if (isInteractive)
            return;
        if (this.flippable && this.flipTrigger === 'click') {
            this.toggleFlip(e);
            return;
        }
        if (this.selectable) {
            this.selected = !this.selected;
            this.cardSelect.emit(this.selected);
            return;
        }
        if (this.href) {
            if (this.target === '_blank') {
                window.open(this.href, '_blank');
            }
            else {
                window.location.href = this.href;
            }
            return;
        }
        if (this.clickable) {
            this.cardClick.emit();
        }
    };
    handleMouseEnter = (ev) => {
        if (this.flippable && this.flipTrigger === 'hover') {
            this.isFlipped = true;
            this.flipped = true;
            this.cardFlip.emit(true);
        }
        this.handleMouseMove(ev);
    };
    handleMouseLeave = () => {
        if (this.flippable && this.flipTrigger === 'hover') {
            this.isFlipped = false;
            this.flipped = false;
            this.cardFlip.emit(false);
        }
        this.tiltTransform = '';
        this.magneticTransform = '';
    };
    handleMouseMove = (ev) => {
        if ((!this.magnetic && !this.tilt) || this.loading)
            return;
        const rect = this.element.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const x = ev.clientX - centerX;
        const y = ev.clientY - centerY;
        if (this.magnetic) {
            const stretch = 20;
            this.magneticTransform = `translate(${x / stretch}px, ${y / stretch}px)`;
        }
        if (this.tilt) {
            const rotateX = (y / (rect.height / 2)) * -15;
            const rotateY = (x / (rect.width / 2)) * 15;
            this.tiltTransform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
        }
    };
    handleClose = (e) => {
        e.stopPropagation();
        this.isClosed = true;
        this.closed = true;
        this.cardClose.emit();
    };
    renderMenu() {
        const showMenuDropdown = this.showMenu || this.parsedMenuItems.length > 0;
        if (!showMenuDropdown)
            return null;
        return (h("div", { class: "menu-container", ref: (el) => (this.menuRef = el) }, h("ui-button", { variant: "ghost", onClick: this.toggleMenu, ariaLabel: "Card menu", icon: "more-vertical", iconLibrary: "lucide", iconOnly: true, size: "sm" }), this.isMenuOpen && (h("div", { class: "menu-dropdown", role: "menu" }, this.parsedMenuItems.map(item => {
            if (item.separator) {
                return h("div", { class: "menu-separator", role: "separator" });
            }
            return (h("ui-button", { variant: "ghost",
                // class={[
                //   'menu-item',
                //   item.disabled && 'menu-item-disabled'
                // ].filter(Boolean).join(' ')}
                onClick: (event) => this.handleMenuItemClick(item.id, event), disabled: item.disabled, label: item.label, icon: item.icon, iconLibrary: item.iconLibrary || this.iconLibrary, fullWidth: true, align: "start", size: "sm" }));
        })))));
    }
    renderSkeleton() {
        return (h("div", { class: "skeleton-wrapper" }, h("div", { class: "skeleton-header" }, h("div", { class: "skeleton-avatar" }), h("div", { class: "skeleton-title-group" }, h("div", { class: "skeleton-text skeleton-title" }), h("div", { class: "skeleton-text skeleton-subtitle" }))), h("div", { class: "skeleton-content" }, h("div", { class: "skeleton-text full" }), h("div", { class: "skeleton-text full" }), h("div", { class: "skeleton-text half" }))));
    }
    renderSelectionIndicator() {
        if (!this.selectable)
            return null;
        return (h("div", { class: `selection-indicator ${this.selected ? 'selected' : ''}` }, this.selected && (h("ui-icon", { name: "check", library: "lucide", size: "1.2em", class: "check-icon" }))));
    }
    renderHeader() {
        const hasHeaderContent = this.cardTitle || this.extra || this.avatar || this.avatarIcon || this.closable || this.collapsible || this.showMenu || this.parsedMenuItems.length > 0;
        if (!hasHeaderContent)
            return null;
        return (h("div", { class: "card-header", style: this.headStyle }, h("div", { class: "card-header-main" }, (this.avatar || this.avatarIcon) && (h("div", { class: "card-avatar" }, this.avatar ? (h("img", { src: this.avatar, alt: "avatar", class: "card-avatar-img" })) : (h("ui-icon", { name: this.avatarIcon, library: this.iconLibrary, size: "1.2em" })))), h("div", { class: "card-title-group" }, this.cardTitle && h("div", { class: "card-title-text" }, this.cardTitle), h("slot", { name: "header" }), h("slot", { name: "title" }))), h("div", { class: "card-actions" }, (this.extra) && h("div", { class: "card-extra", innerHTML: sanitizeHTML(this.extra) }), h("slot", { name: "extra" }), h("slot", { name: "actions" }), this.collapsible && (h("ui-button", { variant: "ghost", onClick: this.toggleCollapse, ariaLabel: this.isCollapsed ? 'Expand' : 'Collapse', icon: this.isCollapsed ? 'chevron-down' : 'chevron-up', iconLibrary: "lucide", iconOnly: true, size: "sm" })), this.renderMenu(), this.closable && (h("ui-button", { variant: "ghost", onClick: this.handleClose, ariaLabel: "Close", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })))));
    }
    renderCover() {
        if (!this.cover && !this.element.querySelector('[slot="cover"]'))
            return null;
        return (h("div", { class: "card-cover", style: { aspectRatio: this.aspectRatio } }, this.cover && h("img", { src: this.cover, alt: this.coverAlt }), h("slot", { name: "cover" })));
    }
    renderFooter() {
        const commaActions = this.actions ? this.actions.split(',').map(a => a.trim()) : [];
        const hasFooterContent = this.buttonText || commaActions.length > 0 || this.element.querySelector('[slot="footer"]');
        if (!hasFooterContent)
            return null;
        return (h("div", { class: "card-footer" }, this.buttonText && h("ui-button", { variant: "primary", label: this.buttonText }), commaActions.length > 0 && (h("ul", { class: "card-quick-actions" }, commaActions.map(action => (h("li", null, h("span", { innerHTML: sanitizeHTML(action) })))))), h("slot", { name: "footer" })));
    }
    renderFrontCard() {
        const cardClasses = {
            'card-face-content': true,
            'card-collapsed': this.isCollapsed,
            'card-hoverable': this.hoverable,
            'card-selectable': this.selectable,
            'card-selected': this.selected,
            'card-clickable': !!((this.href || this.clickable) && !this.flippable),
            'card-glass': this.glass,
            [`card-layout-${this.layout}`]: true,
            [`card-importance-${this.importance}`]: true,
            [`card-pattern-${this.pattern}`]: true,
            [`card-type-${this.type}`]: true,
            [`card-variant-${this.variant}`]: true,
            [`card-color-${this.color}`]: true,
        };
        const faceStyle = {
            borderRadius: this.borderRadius,
            border: this.selected ? '2px solid var(--ui-card-selected-border, #3bf673)' : (this.bordered ? (this.border || undefined) : 'none')
        };
        return (h("div", { class: cardClasses, style: faceStyle }, this.renderCover(), h("div", { class: "card-details-wrapper" }, this.renderHeader(), h("slot", { name: "tabs" }), !this.isCollapsed && [
            h("div", { class: "card-content", style: this.bodyStyle }, h("slot", null), h("slot", { name: "content" }), this.description && h("div", { class: "card-description" }, this.description), this.tag && h("div", { class: "card-tag" }, this.tag)),
            this.renderFooter(),
            h("slot", { name: "grid" })
        ])));
    }
    renderBackCard() {
        if (!this.flippable)
            return null;
        const cardStyle = {
            borderRadius: this.borderRadius,
            border: this.bordered ? (this.border || undefined) : 'none'
        };
        const backClasses = {
            'card-face-content': true,
            'card-back': true,
            [`card-variant-${this.variant}`]: true,
            [`card-color-${this.color}`]: true,
        };
        return (h("div", { class: backClasses, style: cardStyle }, h("div", { class: "card-back-header" }, h("ui-button", { variant: "ghost", onClick: this.toggleFlip, ariaLabel: "Flip card back", icon: "arrow-left", iconLibrary: "lucide", iconOnly: true, size: "sm" })), h("div", { class: "card-content" }, h("slot", { name: "back" }, h("div", { class: "card-back-default" }, h("h3", null, "Back Side"), h("p", null, "Add content to the \"back\" slot to customize this side."))), h("slot", { name: "back-content" }))));
    }
    render() {
        const hostClass = [
            'ui-card',
            `variant-${typeof this.variant === 'string' ? this.variant : 'default'}`,
            `color-${typeof this.color === 'string' ? this.color : 'default'}`,
            `size-${typeof this.size === 'string' ? this.size : 'md'}`,
            this.isFlipped && 'is-flipped',
            this.loading && 'is-loading',
            this.flippable && 'is-flippable',
            this.isClosed && 'is-closed',
        ].filter(Boolean).join(' ');
        const containerStyle = {
            width: typeof this.width === 'string' ? this.width : undefined,
            height: typeof this.height === 'string' ? this.height : undefined,
        };
        return (h(Host, { key: '186bcc9dde0f56786499dd1f575f17996461aa7f', class: hostClass, style: containerStyle, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, this.ribbon && (h("div", { key: '9073fc18c3fedf1c31fb18f15f26e2a4acfd9387', class: `card-ribbon ribbon-${this.ribbonPosition}`, style: this.ribbonColor ? { backgroundColor: this.ribbonColor } : {} }, h("span", { key: 'fee6270b9bc17041837bd7dbffc26db9e43aad0e' }, this.ribbon))), this.loading ? (h("div", { class: "card-loading-container", style: { borderRadius: this.borderRadius } }, this.renderSkeleton())) : (h("div", { class: "card-container", onClick: this.handleCardClick, onMouseMove: this.handleMouseMove, style: {
                transform: `${this.magneticTransform} ${this.tiltTransform}`,
                transition: (!this.magneticTransform && !this.tiltTransform) ? 'transform 0.5s cubic-bezier(0.23, 1, 0.32, 1)' : 'none'
            } }, this.flippable ? (h("div", { class: "card-flipper" }, h("div", { class: "card-face face-front" }, this.renderFrontCard(), this.renderSelectionIndicator()), h("div", { class: "card-face face-back" }, this.renderBackCard()))) : ([this.renderFrontCard(), this.renderSelectionIndicator()])))));
    }
    static get watchers() { return {
        "menuItems": [{
                "handleMenuPropsChange": 0
            }],
        "menuActions": [{
                "handleMenuPropsChange": 0
            }],
        "flipped": [{
                "handleFlippedChange": 0
            }],
        "collapsed": [{
                "handleCollapsedChange": 0
            }],
        "closed": [{
                "handleClosedChange": 0
            }]
    }; }
};
Card.style = cardCss();

export { Card as ui_card };
