import { r as registerInstance, c as createEvent, h } from './index-DUsoYu9r.js';

const navigationItemCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.nav-item{display:flex;flex-direction:column;cursor:pointer;border-radius:12px;margin-bottom:4px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);position:relative;user-select:none;width:100%}.item-content{display:flex;align-items:center;gap:16px;height:48px;padding:0 16px;color:var(--nav-text-dim);transition:all 0.3s ease;position:relative;z-index:2;border-radius:10px}:host([orientation=horizontal]){display:flex;align-items:center;height:64px}:host([orientation=horizontal]) .nav-item{margin-bottom:0;height:100%;display:flex;align-items:center}:host([orientation=horizontal]) .item-content{height:100%;padding:0 12px;justify-content:center}.nav-item:hover .item-content{background:var(--nav-hover-bg);color:var(--nav-text)}.nav-item.active .item-content,.nav-item.active-parent .item-content{background:var(--nav-active-bg);color:var(--nav-accent);font-weight:600;box-shadow:inset 0 0 0 1px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px)}.nav-item.active::before,.nav-item.active-parent::before{content:"";position:absolute;left:0;top:8px;bottom:8px;width:3px;background:var(--nav-accent);border-radius:0 4px 4px 0;box-shadow:0 0 10px var(--nav-accent);z-index:3}.nav-icon{display:flex;align-items:center;justify-content:center;width:24px;height:24px;font-size:20px;transition:transform 0.3s ease}.nav-item:hover .nav-icon{transform:scale(1.1)}.nav-item.active .nav-icon,.nav-item.active-parent .nav-icon{color:var(--nav-accent);transform:scale(1.1)}.nav-item.active .nav-icon svg,.nav-item.active-parent .nav-icon svg{filter:drop-shadow(0 0 5px rgba(var(--color-primary-rgb, 59, 130, 246), 0.4))}.nav-label{font-size:14px;font-weight:500;white-space:nowrap;flex:1;letter-spacing:0.3px;overflow:hidden;text-overflow:ellipsis}.nav-badge{background:var(--nav-accent-gradient);color:var(--text-standard, #ffffff);border-radius:20px;padding:2px 8px;font-size:10px;font-weight:700;text-transform:uppercase;margin-left:auto;box-shadow:0 4px 10px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3)}.nav-arrow{margin-left:auto;font-size:10px;color:var(--nav-text-dim);transition:transform 0.3s ease}.nav-item.open>.item-content .nav-arrow{transform:rotate(90deg)}.nav-submenu{list-style:none;margin:0;padding:0 0 8px 12px;overflow:hidden}.nav-item.collapsed .nav-label,.nav-item.collapsed .nav-badge,.nav-item.collapsed .nav-arrow,.nav-item.collapsed .nav-submenu:not(.floating-popover){display:none}.nav-item.collapsed .item-content{justify-content:center;padding:0;width:100%}:host([indentation="1"]) .nav-item{margin-left:8px;border-radius:8px}:host([indentation="1"]) .item-content{height:38px;font-size:13px}:host([indentation="1"]) .nav-item.active::before{width:2px;top:10px;bottom:10px}@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.nav-item.open .nav-submenu navigation-item{animation:slideDown 0.3s ease forwards}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover{background:var(--bg-primary, #1e293b) !important;z-index:2500 !important;box-shadow:0 10px 40px rgba(0, 0, 0, 0.5) !important;width:220px !important;display:flex !important;flex-direction:column !important;max-height:calc(100vh - 32px) !important;overflow-y:auto !important;overflow-x:hidden !important}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover:not(.placement-top),:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover.placement-bottom{top:0;bottom:auto}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover.placement-top{bottom:0;top:auto}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover.placement-top::before{top:auto !important;bottom:18px !important}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover::-webkit-scrollbar{width:6px}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover::-webkit-scrollbar-track{background:transparent;border-radius:12px}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover::-webkit-scrollbar-thumb{background:rgba(148, 163, 184, 0.5);border-radius:12px;transition:background 0.3s ease}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover::-webkit-scrollbar-thumb:hover{background:rgba(148, 163, 184, 0.8)}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover navigation-item,:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover>navigation-item{display:block !important;width:100% !important;height:auto !important;min-height:40px !important;opacity:1 !important;visibility:visible !important;flex-shrink:0 !important}:host([orientation=vertical]) .nav-item.is-user-profile:hover .nav-submenu.floating-popover,:host([orientation=vertical]) .nav-item.is-user-profile.hovering .nav-submenu.floating-popover,:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover:hover,:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover.is-visible{visibility:visible !important;opacity:1 !important;pointer-events:auto !important;transform:translateX(0) translateY(0) !important}:host([orientation=vertical]) .nav-item.is-user-profile:hover,:host([orientation=vertical]) .nav-item.is-user-profile.hovering{overflow:visible !important;z-index:1001 !important}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu.floating-popover::after{content:"";position:absolute;left:-25px;top:0;width:30px;height:100%;pointer-events:auto;background:transparent;z-index:2001}:host([orientation=vertical]) .nav-item.is-user-profile .nav-submenu:not(.floating-popover){display:none !important}:host(:not([orientation=horizontal])) .nav-submenu.floating-popover.placement-top.is-visible{transform:translateX(0)}:host(:not([orientation=horizontal])) .nav-submenu.floating-popover.placement-top::before{top:auto;bottom:18px}:host(:not([orientation=horizontal])) .nav-submenu.floating-popover.placement-top::after{top:auto;bottom:0;height:100%}.nav-submenu.floating-popover::after{content:"";position:absolute;top:-20px;bottom:-20px;left:-24px;width:24px;background:transparent;z-index:-1}.nav-item:hover,.nav-item.hovering{z-index:1000;overflow:visible !important}.nav-item:not(.collapsed)>.nav-submenu.floating-popover:not(.cascading){left:100%;margin-left:12px;top:0}.nav-item:not(.collapsed)>.nav-submenu.floating-popover:not(.cascading)::before{display:block;}.nav-submenu.floating-popover.cascading{left:100%;margin-left:4px;top:-4px;}.nav-submenu.floating-popover.cascading::before{top:18px;left:-6px}.popover-header{padding:12px 16px;font-size:11px;font-weight:700;color:var(--nav-text-dim);text-transform:uppercase;letter-spacing:0.05em;border-bottom:1px solid rgba(255, 255, 255, 0.05);margin-bottom:4px;user-select:none;pointer-events:none}.nav-tooltip{position:absolute;left:100%;top:50%;transform:translateY(-50%);background:var(--bg-primary, #1e293b);color:var(--text-standard, #f8fafc);padding:8px 14px;border-radius:8px;font-size:13px;font-weight:500;white-space:nowrap;box-shadow:0 8px 24px rgba(0, 0, 0, 0.5), 0 2px 8px rgba(0, 0, 0, 0.3);border:1px solid rgba(255, 255, 255, 0.1);z-index:2000;margin-left:8px;pointer-events:none;animation:fadeIn 0.2s ease forwards}.nav-submenu.floating-popover::before,.nav-tooltip::before{content:"";position:absolute;left:-6px;top:18px;width:12px;height:12px;background:var(--bg-primary, #1e293b);transform:rotate(45deg);border-left:1px solid rgba(255, 255, 255, 0.1);border-bottom:1px solid rgba(255, 255, 255, 0.1);z-index:-1}.nav-tooltip::before{top:50%;margin-top:-6px}:host([orientation=horizontal]) .nav-submenu.floating-popover::before{content:"" !important;display:block !important;visibility:visible !important;opacity:1 !important;position:absolute !important;left:50% !important;right:auto !important;top:-6px !important;bottom:auto !important;margin:0 !important;width:12px !important;height:12px !important;background:var(--bg-primary, #1e293b) !important;transform:translateX(-50%) rotate(45deg) !important;border:none !important;border-top:1px solid rgba(255, 255, 255, 0.1) !important;border-right:1px solid rgba(255, 255, 255, 0.1) !important;z-index:-1 !important;pointer-events:none !important}@keyframes fadeIn{from{opacity:0;transform:translateY(-50%) translateX(-5px)}to{opacity:1;transform:translateY(-50%) translateX(0)}}.nav-submenu.floating-popover ::slotted(navigation-item),.nav-submenu.floating-popover navigation-item{margin-left:0 !important}.nav-item.collapsed:hover{overflow:visible}.nav-item.in-popover .item-content{height:40px;padding:0 12px;border-radius:8px}.nav-item.in-popover{margin-left:0 !important;margin-bottom:2px}.nav-item.in-popover.active .item-content{background:var(--nav-active-bg);border:1px solid rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.nav-item.in-popover.active .nav-label{color:var(--nav-accent) !important;font-weight:700}.nav-item.in-popover.active::before{top:8px;bottom:8px;width:3px}.nav-arrow.cascading{margin-left:auto;opacity:0.5;transition:transform 0.3s ease}.nav-item.placement-top .nav-arrow.cascading,.nav-submenu.placement-top .nav-arrow.cascading{transform:rotate(-90deg);}.nav-submenu:not(.placement-top) .nav-arrow.cascading{transform:rotate(0deg)}:host([indentation="0"]) .nav-item.in-popover{margin-left:0}.nav-item.is-user-profile .nav-icon{background:var(--nav-accent-gradient);border-radius:50%;color:var(--text-standard, #ffffff) !important;width:32px;height:32px;min-width:32px;box-shadow:0 4px 10px rgba(var(--color-primary-rgb, 59, 130, 246), 0.4)}.nav-item.is-user-profile .nav-icon svg{width:18px;height:18px}.nav-item.is-user-profile .nav-label{font-weight:600;color:var(--nav-text)}:host([orientation=horizontal]){height:100%}:host([orientation=horizontal]) .nav-item{height:100%;flex-direction:row;align-items:center;justify-content:center;margin-bottom:0;border-radius:0;padding:0 4px}:host([orientation=horizontal]) .item-content{height:100%;padding:0 16px;border-radius:0;font-weight:600;transition:all 0.2s ease}:host([orientation=horizontal]) .nav-item:hover .item-content{background:rgba(255, 255, 255, 0.08)}:host([orientation=horizontal]) .nav-item.active::before,:host([orientation=horizontal]) .nav-item.active-parent::before{top:auto;bottom:0;left:0;right:0;width:100%;height:3px;border-radius:4px 4px 0 0}:host([orientation=horizontal]) .nav-item:not(.collapsed)>.nav-submenu.floating-popover:not(.cascading){left:0 !important;top:100% !important;bottom:auto !important;margin-left:0 !important;margin-top:8px !important;transform:translateY(-5px)}:host([orientation=horizontal][indentation="0"]) .nav-arrow{transform:rotate(90deg);}:host([orientation=horizontal][indentation="0"]) .nav-item.open>.item-content .nav-arrow{transform:rotate(-90deg);}:host([orientation=horizontal][indentation="1"]) .nav-arrow.cascading,:host([orientation=horizontal][indentation="2"]) .nav-arrow.cascading{transform:rotate(0deg);}:host([orientation=horizontal]) .nav-submenu.floating-popover::after{top:-12px;left:0;right:0;height:12px;width:100%}:host([orientation=horizontal]) .nav-submenu.floating-popover:not(.cascading)::before,:host([orientation=horizontal]) .nav-submenu.floating-popover.placement-bottom:not(.cascading)::before,:host([orientation=horizontal]) .nav-submenu.floating-popover.placement-top:not(.cascading)::before{content:"" !important;position:absolute !important;left:50% !important;right:auto !important;top:-6px !important;bottom:auto !important;width:12px !important;height:12px !important;transform:translateX(-50%) rotate(45deg) !important;background:var(--bg-primary, #1e293b) !important;border-top:1px solid rgba(255, 255, 255, 0.1) !important;border-right:1px solid rgba(255, 255, 255, 0.1) !important;border-left:none !important;border-bottom:none !important;z-index:-1 !important}:host([orientation=horizontal]) .nav-submenu.floating-popover.cascading::before{content:"" !important;position:absolute !important;left:-6px !important;right:auto !important;top:18px !important;bottom:auto !important;width:12px !important;height:12px !important;transform:rotate(45deg) !important;background:var(--bg-primary, #1e293b) !important;border-top:none !important;border-right:none !important;border-left:1px solid rgba(255, 255, 255, 0.1) !important;border-bottom:1px solid rgba(255, 255, 255, 0.1) !important;z-index:-1 !important}`;

const NavigationItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navItemClick = createEvent(this, "navItemClick");
        this.submenuToggle = createEvent(this, "submenuToggle");
        this.popoverStateChange = createEvent(this, "popoverStateChange");
    }
    item;
    collapsed = false;
    active = false;
    activeId = '';
    open = false;
    animationDuration = 350;
    indentation = 0;
    forcePopover = false;
    orientation = 'vertical';
    iconLibrary = 'default';
    isHovering = false;
    popoverPlacement = 'bottom';
    hoverTimeout;
    navItemClick;
    submenuToggle;
    popoverStateChange;
    handleMouseEnter = (ev) => {
        if (this.hoverTimeout)
            clearTimeout(this.hoverTimeout);
        // Always set hovering state
        this.isHovering = true;
        // Edge detection: for horizontal mode, always open at bottom
        // For vertical mode, check if we are in the bottom 40% of the screen
        if (this.orientation === 'horizontal') {
            this.popoverPlacement = 'bottom';
        }
        else {
            const trigger = ev.currentTarget;
            const rect = trigger.getBoundingClientRect();
            const winHeight = window.innerHeight;
            this.popoverPlacement = rect.top > winHeight * 0.6 ? 'top' : 'bottom';
        }
        const hasChildren = this.item.children && this.item.children.length > 0;
        // Trigger popover for: collapsed sidebar, forced popover, OR footer items (placement-top)
        // This ensures user profile in expanded mode still uses popover with edge detection
        if ((this.collapsed || this.forcePopover || this.popoverPlacement === 'top') && hasChildren) {
            this.popoverStateChange.emit(true);
        }
    };
    handleMouseLeave = () => {
        this.hoverTimeout = setTimeout(() => {
            this.isHovering = false;
            this.popoverStateChange.emit(false);
        }, 50);
    };
    hasActiveChild(items = this.item.children) {
        if (!items)
            return false;
        return items.some(child => child.id === this.activeId ||
            (child.children && this.hasActiveChild(child.children)));
    }
    handleClick = () => {
        const hasChildren = this.item.children && this.item.children.length > 0;
        // If it's a popover-only item (collapsed or forced), clicking should not toggle accordion
        if (hasChildren && (this.collapsed || this.forcePopover)) {
            return;
        }
        if (hasChildren) {
            this.submenuToggle.emit(this.item.id);
        }
        else {
            this.navItemClick.emit(this.item);
        }
    };
    render() {
        const hasChildren = this.item.children && this.item.children.length > 0;
        const isDirectlyActive = this.active || this.item.id === this.activeId;
        const isParentOfActive = this.hasActiveChild();
        const isPopoverMode = this.forcePopover || this.item.id === 'user-profile';
        return (h("li", { key: '9345250f187b57fec472da66335620d747dfc207', class: {
                'nav-item': true,
                'active': isDirectlyActive,
                'active-parent': isParentOfActive,
                'disabled': this.item.disabled,
                'has-children': hasChildren,
                'open': this.open && !isPopoverMode,
                'collapsed': this.collapsed,
                'hovering': this.isHovering,
                'in-popover': this.forcePopover,
                'is-user-profile': this.item.id === 'user-profile',
                'placement-top': this.popoverPlacement === 'top',
                'placement-bottom': this.popoverPlacement === 'bottom'
            }, tabindex: this.item.disabled ? -1 : 0, "aria-disabled": this.item.disabled ? 'true' : 'false', "aria-expanded": (this.open && !isPopoverMode) ? 'true' : 'false', onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: 'fed1eb168a5e1340b971dd12ecabcc3a6bb0d831', class: "item-content", onClick: this.handleClick, onKeyDown: e => {
                if (e.key === 'Enter')
                    this.handleClick();
            } }, this.item.icon && (h("span", { key: 'd84f8938d5cd2aed187bcf9e1391d02028f11563', class: "nav-icon" }, h("ui-icon", { key: '425c866305be4793ba69e1220227da3676b3fcb0', name: this.item.icon, library: this.item.iconLibrary || this.iconLibrary, size: "1.25rem" }))), (!this.collapsed || this.forcePopover) && h("span", { key: '2bdd778f72907794ca3d2b71aae3b95f44d01a41', class: "nav-label" }, this.item.label), this.item.badge && (!this.collapsed || this.forcePopover) && h("span", { key: '1941e1c4aeeef16d23835d3ebd88effc538fff95', class: "nav-badge" }, this.item.badge), hasChildren && !isPopoverMode && (h("span", { key: 'fa5be41879778fd799630738887a3cc04ebaa522', class: "nav-arrow" }, h("ui-icon", { key: 'ac63423d3f91457328483262c851e3bd94e62c63', name: "chevron-right", library: "lucide", size: "12px" }))), hasChildren && isPopoverMode && (h("span", { key: '9edca162c739fe418329716440525e9c3384273e', class: "nav-arrow cascading" }, h("ui-icon", { key: '1c3d47c485761f9f159512b2dfb549d2f1509b44', name: "chevron-right", library: "lucide", size: "12px" })))), !hasChildren && this.collapsed && this.isHovering && (h("div", { key: '0ad95cb5783779519408eb16c09faac91e79aaf6', class: "nav-tooltip" }, this.item.label))));
    }
};
NavigationItemComponent.style = navigationItemCss();

export { NavigationItemComponent as ui_navigation_item };
