import { h, F as Fragment, r as registerInstance, c as createEvent, H as Host } from './index-DUsoYu9r.js';

const navBarCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;height:100%;width:var(--nav-width-expanded, 280px);transition:width var(--nav-transition, 0.4s cubic-bezier(0.4, 0, 0.2, 1));flex-shrink:0;overflow:hidden;--nav-bg:#0f172a;--nav-text:#f8fafc;--nav-text-muted:#94a3b8;--nav-accent:#3b82f6;--nav-accent-glow:rgba(59, 130, 246, 0.4);--nav-hover-bg:rgba(255, 255, 255, 0.05);--nav-active-bg:linear-gradient(135deg, rgba(59, 130, 246, 0.2) 0%, rgba(139, 92, 246, 0.1) 100%);--nav-border:rgba(255, 255, 255, 0.08);--nav-width-expanded:280px;--nav-width-collapsed:80px;--nav-transition:0.4s cubic-bezier(0.4, 0, 0.2, 1)}:host([collapsed]){width:var(--nav-width-collapsed, 80px)}.nav-bar{display:flex;flex-direction:column;height:100%;background:var(--nav-bg);color:var(--nav-text);width:100%;border-right:1px solid var(--nav-border);position:relative;box-sizing:border-box}.nav-bar.collapsed{width:var(--nav-width-collapsed)}.nav-header{display:flex;align-items:center;justify-content:center;gap:16px;padding:24px;min-height:80px;border-bottom:1px solid var(--nav-border)}.collapsed .nav-header{padding:24px 0;justify-content:center}.nav-logo{width:32px;height:32px;object-fit:contain;filter:drop-shadow(0 0 8px rgba(255, 255, 255, 0.2))}.nav-title{font-size:18px;font-weight:700;white-space:nowrap;letter-spacing:-0.5px;background:linear-gradient(to right, #fff, #94a3b8);-webkit-background-clip:text;-webkit-text-fill-color:transparent}.collapsed .nav-title{display:none}.nav-hamburger{background:var(--nav-hover-bg);border:1px solid var(--nav-border);color:white;cursor:pointer;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:8px;transition:all 0.2s ease;margin-left:auto}.collapsed .nav-hamburger{margin-left:0}.collapsed .nav-header{flex-direction:column;padding:16px 0;height:auto;min-height:100px;gap:12px}.nav-hamburger:hover{background:var(--nav-accent);border-color:var(--nav-accent)}.nav-search{padding:16px;position:relative}.nav-search-input{width:100%;padding:10px 12px 10px 38px;background:rgba(255, 255, 255, 0.03);border:1px solid var(--nav-border);border-radius:10px;color:white;font-size:13px;outline:none;transition:all 0.3s ease}.nav-search-input:focus{border-color:var(--nav-accent);background:rgba(255, 255, 255, 0.05);box-shadow:0 0 15px var(--nav-accent-glow)}.nav-search::before{content:"";position:absolute;left:28px;top:50%;transform:translateY(-50%);width:16px;height:16px;background:url("data:image/svg+xml,%3Csvg viewBox='0 0 24 24' fill='none' stroke='%2394a3b8' stroke-width='2.5' stroke-linecap='round' stroke-linejoin='round'%3E%3Ccircle cx='11' cy='11' r='8'%3E%3C/circle%3E%3Cpath d='M21 21l-4.35-4.35'%3E%3C/path%3E%3C/svg%3E") no-repeat center;pointer-events:none}.nav-content{flex:1;display:flex;flex-direction:column;overflow-y:auto;padding:12px;gap:8px}.collapsed .nav-content{padding:12px 0}.nav-section{display:flex;flex-direction:column;gap:4px}.nav-section-bottom{}.nav-footer{padding:12px;border-top:1px solid var(--nav-border);flex-shrink:0}.collapsed .nav-footer{padding:12px 0}.nav-section-header{padding:12px 12px 8px 12px;font-size:11px;font-weight:700;text-transform:uppercase;color:var(--nav-text-muted);letter-spacing:1px;opacity:0.8}.nav-item .nav-section-header{padding-left:12px;margin-top:12px;border-top:1px solid rgba(255, 255, 255, 0.05)}.collapsed .nav-section-header{display:none}.nav-item{position:relative}.nav-item-link{display:flex;align-items:center;gap:12px;padding:12px;color:var(--nav-text-muted);text-decoration:none;border-radius:12px;transition:all 0.3s ease;font-size:14px;font-weight:500;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.nav-item-link.no-icon{font-size:13px;padding-left:16px}.nav-item-link.no-icon .nav-item-label{opacity:0.9;font-weight:400}.collapsed .nav-item-link{justify-content:center;padding:12px 0;gap:0}.nav-item-link:hover{background:var(--nav-hover-bg);color:white}.active>.nav-item-link{background:var(--nav-active-bg);color:var(--nav-accent);box-shadow:inset 0 0 0 1px rgba(59, 130, 246, 0.3)}.active>.nav-item-link::after{content:"";position:absolute;left:0;top:15%;bottom:15%;width:4px;background:var(--nav-accent);border-radius:0 4px 4px 0;box-shadow:0 0 15px var(--nav-accent)}.nav-item-arrow{margin-left:auto;transition:transform 0.3s ease;color:var(--nav-text-muted)}.expanded>.nav-item-link .nav-item-arrow{transform:rotate(180deg)}.nav-item-icon{display:flex;align-items:center;justify-content:center;width:24px;height:24px;transition:transform 0.3s ease}.nav-item-link:hover .nav-item-icon{transform:scale(1.1)}.active .nav-item-icon{color:var(--nav-accent)}.collapsed .nav-item-label{display:none}.nav-item-badge{background:var(--nav-accent);color:white;padding:2px 6px;border-radius:6px;font-size:10px;font-weight:700;margin-left:auto}.collapsed .nav-item-badge{position:absolute;top:8px;right:8px;width:8px;height:8px;padding:0;font-size:0;box-shadow:0 0 10px var(--nav-accent)}.nav-children{padding-left:24px;margin-top:4px;display:flex;flex-direction:column;gap:2px;border-left:1px solid rgba(255, 255, 255, 0.05);margin-left:24px;padding-left:12px}.is-child .nav-item-link{padding:8px 12px;font-size:13px;border-radius:10px}.collapsed .nav-children{display:none}.nav-overflow{position:relative;margin:2px 0}.nav-overflow-trigger{display:flex;align-items:center;gap:12px;padding:12px;color:var(--nav-text-muted);cursor:pointer;border-radius:12px;transition:all 0.3s ease}.nav-overflow-trigger:hover{background:var(--nav-hover-bg);color:white}.nav-overflow-menu{position:fixed;background:var(--nav-bg);border:1px solid var(--nav-border);border-radius:16px;padding:8px;min-width:220px;box-shadow:0 20px 50px rgba(0, 0, 0, 0.5);z-index:10000;display:flex;flex-direction:column;gap:4px;animation:slideUp 0.3s cubic-bezier(0.4, 0, 0.2, 1)}@keyframes slideUp{from{opacity:0;transform:translateY(10px)}to{opacity:1;transform:translateY(0)}}@keyframes slideMenu{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:translateX(0)}}.expanded .nav-item{animation:slideMenu 0.4s ease forwards}.nav-content::-webkit-scrollbar{width:4px}.nav-content::-webkit-scrollbar-thumb{background:var(--nav-border);border-radius:4px}.nav-tooltip{position:fixed;background:#1e293b;color:white;padding:6px 12px;border-radius:6px;font-size:12px;pointer-events:none;z-index:10000;white-space:nowrap;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);border:1px solid rgba(255, 255, 255, 0.1);transform:translateY(-50%);opacity:0;transition:opacity 0.2s}.nav-tooltip.visible{opacity:1}`;

const NavBar = class {
    /**
     * Navigation items for the top section
     */
    topItems = [];
    /**
     * Navigation items for the bottom section
     */
    bottomItems = [];
    /**
     * Secondary navigation items for the bottom section
     */
    bottomItemsSecondary = [];
    /**
     * Whether the navigation is collapsed (mobile/hamburger mode)
     */
    collapsed = true;
    /**
     * Whether to show the hamburger menu icon
     */
    showHamburger = true;
    /**
     * Logo URL
     */
    logoUrl;
    /**
     * Logo alt text
     */
    logoAlt = 'Logo';
    /**
     * Application title
     */
    appTitle;
    /**
     * Whether to show search input for filtering items
     */
    showSearch = false;
    /**
     * Search placeholder text
     */
    searchPlaceholder = 'Search...';
    /**
     * Default library for icons
     */
    iconLibrary = 'default';
    /**
     * Maximum number of visible items before showing overflow menu (0 = show all)
     */
    maxVisibleItems = 0;
    /**
    * Event emitted when a nav item is clicked
    */
    navItemClicked;
    /**
     * Event emitted when navigation is toggled
     */
    navToggled;
    expandedItems = new Set();
    searchQuery = '';
    showOverflowMenu = false;
    isHoveringMenu = false;
    overflowMenuPosition = { top: '0px', left: '0px' };
    hoveredIcon = null;
    tooltipPos = { top: 0, left: 0 };
    overflowTriggerRef;
    /**
     * Toggle the navigation collapsed state
     */
    async toggle() {
        this.collapsed = !this.collapsed;
        this.navToggled.emit({ collapsed: this.collapsed });
    }
    /**
     * Expand the navigation
     */
    async expand() {
        this.collapsed = false;
        this.navToggled.emit({ collapsed: this.collapsed });
    }
    /**
     * Collapse the navigation
     */
    async collapse() {
        this.collapsed = true;
        this.navToggled.emit({ collapsed: this.collapsed });
    }
    componentWillLoad() {
    }
    handleHamburgerClick = () => {
        this.toggle();
    };
    handleSearchInput = (e) => {
        const input = e.target;
        this.searchQuery = input.value.toLowerCase();
    };
    filterItems = (items) => {
        if (!this.searchQuery)
            return items;
        return items.filter(item => {
            const labelMatch = item.label.toLowerCase().includes(this.searchQuery);
            const childMatch = item.children?.some(child => child.label.toLowerCase().includes(this.searchQuery));
            return labelMatch || childMatch;
        });
    };
    splitItemsByVisibility = (items) => {
        if (this.maxVisibleItems === 0 || items.length <= this.maxVisibleItems) {
            return { visible: items, overflow: [] };
        }
        return {
            visible: items.slice(0, this.maxVisibleItems),
            overflow: items.slice(this.maxVisibleItems)
        };
    };
    calculateOverflowMenuPosition = () => {
        if (!this.overflowTriggerRef)
            return;
        const triggerRect = this.overflowTriggerRef.getBoundingClientRect();
        const menuWidth = 280; // Approximate menu width
        const menuMaxHeight = 500;
        // Position the menu aligned with the trigger button
        let left = triggerRect.right + 8; // 8px gap from trigger
        let top = triggerRect.top;
        // Check if menu would overflow viewport on the right
        if (left + menuWidth > window.innerWidth) {
            // Position to the left of navbar instead
            left = triggerRect.left - menuWidth - 8;
        }
        // Check if menu would overflow viewport on the bottom
        if (top + menuMaxHeight > window.innerHeight) {
            // Align bottom of menu with bottom of viewport
            top = Math.max(8, window.innerHeight - menuMaxHeight - 8);
        }
        // Ensure menu doesn't go above viewport
        top = Math.max(8, top);
        this.overflowMenuPosition = {
            top: `${top}px`,
            left: `${left}px`
        };
    };
    handleOverflowTriggerEnter = () => {
        this.calculateOverflowMenuPosition();
        this.showOverflowMenu = true;
    };
    toggleSubitems = (itemId) => {
        const newExpanded = new Set(this.expandedItems);
        if (newExpanded.has(itemId)) {
            newExpanded.delete(itemId);
        }
        else {
            newExpanded.add(itemId);
        }
        this.expandedItems = newExpanded;
    };
    handleItemClick = (item, e, isChild = false) => {
        if (item.disabled) {
            e.preventDefault();
            return;
        }
        if (item.children && item.children.length > 0) {
            e.preventDefault();
            this.toggleSubitems(item.id);
        }
        else {
            this.navItemClicked.emit({ item, isChild });
        }
    };
    handleIconEnter = (item, event) => {
        if (this.collapsed && (!item.children || item.children.length === 0)) {
            const rect = event.currentTarget.getBoundingClientRect();
            this.hoveredIcon = item.id;
            this.tooltipPos = {
                top: rect.top + rect.height / 2,
                left: rect.right + 12
            };
        }
    };
    handleIconLeave = () => {
        if (this.hoveredIcon) {
            this.hoveredIcon = null;
        }
    };
    renderNavItem = (item, isChild = false) => {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = this.expandedItems.has(item.id);
        const itemClass = {
            'nav-item': true,
            'active': item.active,
            'disabled': item.disabled,
            'has-children': hasChildren,
            'expanded': isExpanded,
            'is-child': isChild,
        };
        const linkClass = {
            'nav-item-link': true,
            'no-icon': !item.icon
        };
        return (h("div", { key: item.id }, item.sectionHeader && !this.collapsed && (h("div", { class: "nav-section-header" }, item.sectionHeader)), h("div", { class: itemClass }, h("a", { href: item.href || '#', class: linkClass, onClick: (e) => this.handleItemClick(item, e, isChild) }, item.icon && (h("span", { class: "nav-item-icon", onMouseEnter: (e) => this.handleIconEnter(item, e), onMouseLeave: this.handleIconLeave }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.25rem" }))), !this.collapsed && (h(Fragment, null, h("span", { class: "nav-item-label" }, item.label), item.badge && (h("span", { class: "nav-item-badge" }, item.badge)), hasChildren && (h("span", { class: "nav-item-arrow" }, h("ui-icon", { name: "chevron-down", library: this.iconLibrary, size: "1rem" })))))), hasChildren && isExpanded && (h("div", { class: "nav-children" }, item.children.map(child => this.renderNavItem(child, true)))))));
    };
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navItemClicked = createEvent(this, "navItemClicked");
        this.navToggled = createEvent(this, "navToggled");
    }
    connectedCallback() {
    }
    render() {
        return (h(Host, { key: '18e3c8af7dbb483dff73b88a1f355a0e3b6605f9', collapsed: this.collapsed }, h("nav", { key: 'ddf81e32206bfae3fb517a8c3b48444401d8ab28', class: `nav-bar ${this.collapsed ? 'collapsed' : 'expanded'}` }, h("div", { key: 'b4c7aebc1bfbc9ecb60123d6114efdefd07a3b5b', class: "nav-header" }, this.logoUrl && (h("img", { key: 'c7ae8fda61df03e604e275d92368b0fddb6089fa', src: this.logoUrl, alt: this.logoAlt, class: "nav-logo" })), this.appTitle && (h("span", { key: 'be00df3ab559af0244bc5d8aaa2def21a93eb404', class: "nav-title" }, this.appTitle)), this.showHamburger && (h("button", { key: '948f1574a82f4d4e10ae160e6c2e211e8d839c77', class: "nav-hamburger", onClick: this.handleHamburgerClick, "aria-label": this.collapsed ? 'Expand navigation' : 'Collapse navigation' }, this.collapsed ? (h("ui-icon", { name: "menu", library: this.iconLibrary, size: "1.5rem" })) : (h("ui-icon", { name: "x", library: this.iconLibrary, size: "1.5rem" }))))), this.showSearch && !this.collapsed && (h("div", { key: 'f83cfa8d13441a86ea9db30b91364efb8041e865', class: "nav-search" }, h("input", { key: '50a802fc2e85124866ad4d2d19d845cfe60b9ee3', type: "text", class: "nav-search-input", placeholder: this.searchPlaceholder, onInput: this.handleSearchInput }))), h("div", { key: 'ff8a5604ad82dd2ebca182c2d56d62a9abd79bed', class: "nav-content" }, this.renderSection(this.topItems, 'nav-section-top')), this.hoveredIcon && (h("div", { key: '6fe4b41539a4cd1d81c63846c25c26a8d452c9b9', class: "nav-tooltip visible", style: {
                top: `${this.tooltipPos.top}px`,
                left: `${this.tooltipPos.left}px`
            } }, [...this.topItems, ...this.bottomItems, ...this.bottomItemsSecondary]
            .flatMap(i => [i, ...(i.children || [])])
            .find(i => i.id === this.hoveredIcon)?.label)), h("div", { key: '8f6d53da23fbe4fc12151683fc0dca55bf33ab5c', class: "nav-footer" }, this.renderSection(this.bottomItems, 'nav-section-bottom'), this.renderSection(this.bottomItemsSecondary, 'nav-section-bottom-secondary')))));
    }
    renderSection(items, sectionClass) {
        if (!items || items.length === 0)
            return null;
        const filteredItems = this.filterItems(items);
        const { visible, overflow } = this.splitItemsByVisibility(filteredItems);
        return (h("div", { class: `nav-section ${sectionClass}` }, visible.map(item => this.renderNavItem(item)), overflow.length > 0 && (h("div", { class: "nav-overflow" }, h("div", { class: "nav-overflow-trigger", ref: (el) => this.overflowTriggerRef = el, onMouseEnter: this.handleOverflowTriggerEnter, onMouseLeave: () => {
                setTimeout(() => {
                    if (!this.isHoveringMenu) {
                        this.showOverflowMenu = false;
                    }
                }, 100);
            } }, h("span", { class: "nav-item-icon" }, h("ui-icon", { name: "more-horizontal", library: this.iconLibrary, size: "1.25rem" })), h("span", { class: "nav-item-label" }, "More (", overflow.length, ")")), this.showOverflowMenu && (h("div", { class: "nav-overflow-menu", onMouseEnter: () => {
                this.isHoveringMenu = true;
                this.showOverflowMenu = true;
            }, onMouseLeave: () => {
                this.isHoveringMenu = false;
                setTimeout(() => {
                    this.showOverflowMenu = false;
                }, 100);
            }, style: {
                left: this.overflowMenuPosition.left,
                top: this.overflowMenuPosition.top
            } }, overflow.map(item => this.renderNavItem(item))))))));
    }
};
NavBar.style = navBarCss();

export { NavBar as nav_bar };
