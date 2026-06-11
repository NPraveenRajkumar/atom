import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const breadcrumbCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.breadcrumb{display:flex;align-items:center}.breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;list-style:none;margin:0;padding:0;gap:4px}.breadcrumb-item-wrapper{display:flex;align-items:center;gap:4px}.breadcrumb-item{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;color:var(--text-muted, #64748b);text-decoration:none;border-radius:6px;transition:all 0.2s ease;font-weight:500;cursor:pointer;background-color:transparent}.breadcrumb-item.size-sm{padding:4px 8px;font-size:12px;gap:4px}.breadcrumb-item.size-md{padding:6px 12px;font-size:14px;gap:6px}.breadcrumb-item.size-lg{padding:8px 16px;font-size:16px;gap:8px}.breadcrumb-item:hover:not(.active):not(.disabled){color:var(--color-primary, #10b981);background-color:var(--bg-primary, #eff6ff)}.breadcrumb-item.active{color:var(--text-primary, #1e293b);font-weight:600;cursor:default;background-color:var(--bg-secondary, #f1f5f9)}.breadcrumb-item.disabled{color:var(--color-primary, #cbd5e1);cursor:not-allowed;opacity:0.6}.breadcrumb-item.home{padding:6px 10px}.breadcrumb-content{display:flex;align-items:center;gap:inherit}.breadcrumb-icon{display:inline-flex;align-items:center;font-size:1em;line-height:1}.breadcrumb-icon svg{width:1em;height:1em;fill:currentColor}.breadcrumb-label{white-space:nowrap}.breadcrumb-separator{display:inline-flex;align-items:center;color:var(--color-primary, #cbd5e1);font-size:0.875em;user-select:none;padding:0 4px}.breadcrumb-separator svg{width:1em;height:1em;fill:currentColor}.breadcrumb-badge{display:inline-flex;align-items:center;justify-content:center;padding:2px 6px;border-radius:999px;font-size:10px;font-weight:700;line-height:1;margin-left:4px}.badge-neutral{background:var(--bg-secondary, #f1f5f9);color:var(--color-primary, #475569)}.badge-primary{background:var(--bg-primary, #dbeafe);color:var(--color-primary, #1e40af)}.badge-success{background:var(--bg-primary, #dcfce7);color:var(--color-success, #166534)}.badge-warning{background:var(--bg-primary, #fef9c3);color:var(--color-danger, #854d0e)}.badge-danger{background:var(--bg-primary, #fee2e2);color:var(--color-danger, #991b1b)}.badge-info{background:var(--bg-primary, #e0f2fe);color:var(--color-primary, #075985)}.ellipsis-wrapper{position:relative}.breadcrumb-ellipsis-btn{display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;padding:4px 8px;color:var(--color-primary, #94a3b8);cursor:pointer;border-radius:4px;transition:all 0.2s}.breadcrumb-ellipsis-btn:hover{background:var(--bg-secondary, #f1f5f9);color:var(--text-muted, #64748b)}.breadcrumb-dropdown{position:absolute;top:100%;left:0;z-index:1000;min-width:160px;background:var(--bg-primary, #ffffff);border-radius:8px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);border:1px solid var(--border-subtle, #e2e8f0);margin-top:8px;padding:4px;animation:dropdownIn 0.2s ease-out}@keyframes dropdownIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.dropdown-list{list-style:none;margin:0;padding:0}.dropdown-item a{display:flex;align-items:center;gap:10px;padding:8px 12px;color:var(--color-primary, #475569);text-decoration:none;font-size:13px;font-weight:500;border-radius:6px;transition:background 0.2s}.dropdown-item a:hover{background:var(--bg-secondary, #f1f5f9);color:var(--color-primary, #10b981)}.dropdown-item .item-icon{font-size:14px}.breadcrumb-variant-pills .breadcrumb-item{background:var(--bg-secondary, #f1f5f9);border-radius:999px;margin:0 2px}.breadcrumb-variant-pills .breadcrumb-item:hover{background:var(--bg-primary, #e2e8f0)}.breadcrumb-variant-pills .breadcrumb-item.active{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff)}.breadcrumb-variant-glass{background:rgba(15, 23, 42, 0.3);backdrop-filter:blur(8px);padding:8px 16px;border-radius:12px;border:1px solid rgba(255, 255, 255, 0.1)}.breadcrumb-variant-glass .breadcrumb-item{color:rgba(255, 255, 255, 0.7)}.breadcrumb-variant-glass .breadcrumb-item:hover{color:var(--text-standard, #ffffff);background:rgba(255, 255, 255, 0.1)}.breadcrumb-variant-glass .breadcrumb-item.active{color:var(--text-standard, #ffffff);background:rgba(255, 255, 255, 0.2)}.breadcrumb-variant-glass .breadcrumb-separator{color:rgba(255, 255, 255, 0.3)}@media (max-width: 640px){.breadcrumb-item.size-md{padding:4px 8px;font-size:12px}.breadcrumb-item.size-lg{padding:6px 12px;font-size:14px}}`;

const Breadcrumb = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.breadcrumbClick = createEvent(this, "breadcrumbClick");
    }
    get el() { return getElement(this); }
    /**
     * Internal state for the collapsed dropdown
     */
    isDropdownOpen = false;
    /**
     * Array of breadcrumb items
     */
    items = [];
    /**
     * Separator between breadcrumb items
     */
    separator = '/';
    /**
     * Custom separator icon (overrides separator text)
     */
    separatorIcon;
    /**
     * Maximum number of items to display before collapsing
     */
    maxItems = 0;
    /**
     * Show home icon as first item
     */
    showHome = false;
    /**
     * Home icon
     */
    homeIcon = '🏠';
    /**
     * Size of breadcrumb items
     */
    size = 'md';
    /**
     * Default Library for icons
     */
    iconLibrary = 'default';
    /**
     * Library for separator icon
     */
    separatorIconLibrary = 'default';
    /**
     * Visual variant of the breadcrumb
     */
    variant = 'default';
    /**
     * Enable JSON-LD Structured Data for SEO
     */
    structuredData = false;
    /**
     * Optional base URL for structured data URLs (if relative)
     */
    baseUrl = '';
    /**
     * Event emitted when a breadcrumb item is clicked
     */
    breadcrumbClick;
    parseItems() {
        if (typeof this.items === 'string') {
            try {
                return JSON.parse(this.items);
            }
            catch (e) {
                console.error('Failed to parse items JSON:', e);
                return [];
            }
        }
        return this.items;
    }
    handleItemClick = (item, event) => {
        if (item.disabled || item.active) {
            event.preventDefault();
            return;
        }
        this.breadcrumbClick.emit(item);
    };
    toggleDropdown = (event) => {
        event.stopPropagation();
        this.isDropdownOpen = !this.isDropdownOpen;
        if (this.isDropdownOpen) {
            document.addEventListener('click', this.closeDropdown);
        }
        else {
            document.removeEventListener('click', this.closeDropdown);
        }
    };
    closeDropdown = () => {
        this.isDropdownOpen = false;
        document.removeEventListener('click', this.closeDropdown);
    };
    disconnectedCallback() {
        document.removeEventListener('click', this.closeDropdown);
    }
    getItems() {
        const propItems = this.parseItems();
        if (propItems.length > 0)
            return propItems;
        // Detect slotted items if no prop items provided
        const slotted = Array.from(this.el.querySelectorAll('ui-breadcrumb-item'));
        return slotted.map(item => ({
            label: item.label || item.textContent,
            href: item.href,
            icon: item.icon,
            iconLibrary: item.iconLibrary,
            active: item.active,
            disabled: item.disabled,
            badge: item.badge
        }));
    }
    renderStructuredData(items) {
        if (!this.structuredData)
            return null;
        const breadcrumbList = {
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": items.map((item, index) => ({
                "@type": "ListItem",
                "position": index + 1,
                "name": item.label,
                "item": item.href ? (item.href.startsWith('http') ? item.href : `${this.baseUrl}${item.href}`) : undefined
            }))
        };
        return (h("script", { type: "application/ld+json", innerHTML: JSON.stringify(breadcrumbList) }));
    }
    renderSeparator(key) {
        return (h("li", { class: "breadcrumb-separator", key: key, "aria-hidden": "true" }, h("slot", { name: "separator" }, this.separatorIcon ? (h("ui-icon", { name: this.separatorIcon, library: this.iconLibrary, size: "1.1em" })) : (this.separator))));
    }
    renderItem(item, index) {
        const classes = {
            'breadcrumb-item': true,
            'active': !!item.active,
            'disabled': !!item.disabled,
            [`size-${this.size}`]: true,
        };
        const content = (h("span", { class: "breadcrumb-content" }, item.icon && (h("span", { class: "breadcrumb-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.1em" }))), h("span", { class: "breadcrumb-label" }, item.label), item.badge !== undefined && (h("span", { class: `breadcrumb-badge badge-${item.badgeVariant || 'neutral'}` }, item.badge))));
        const element = (item.href && !item.disabled && !item.active) ? (h("a", { href: item.href, class: classes, onClick: (e) => this.handleItemClick(item, e), "aria-current": item.active ? 'page' : undefined }, content)) : (h("span", { class: classes, "aria-current": item.active ? 'page' : undefined }, content));
        return (h("li", { key: `item-${index}`, class: "breadcrumb-item-wrapper" }, element));
    }
    renderHome() {
        return (h("li", { class: "breadcrumb-item-wrapper" }, h("a", { href: "/", class: `breadcrumb-item home size-${this.size}` }, h("span", { class: "breadcrumb-icon" }, h("ui-icon", { name: this.homeIcon, library: this.iconLibrary, size: "1.2em" })))));
    }
    render() {
        const items = this.getItems();
        const children = [];
        // Home Icon
        if (this.showHome) {
            children.push(this.renderHome());
            if (items.length > 0) {
                children.push(this.renderSeparator('home-sep'));
            }
        }
        if (this.maxItems > 0 && items.length > this.maxItems) {
            const keepEnd = Math.max(1, this.maxItems - 2);
            const collapsedItems = items.slice(1, items.length - keepEnd);
            // First Item
            children.push(this.renderItem(items[0], 0));
            children.push(this.renderSeparator('sep-0'));
            // Interactive Ellipsis
            children.push(h("li", { key: "ellipsis", class: `breadcrumb-item-wrapper ellipsis-wrapper ${this.isDropdownOpen ? 'is-open' : ''}` }, h("ui-button", { variant: "ghost", onClick: this.toggleDropdown, ariaLabel: "Show hidden breadcrumbs", size: "sm", label: "..." }), this.isDropdownOpen && (h("div", { class: "breadcrumb-dropdown" }, h("ul", { class: "dropdown-list" }, collapsedItems.map((item, idx) => (h("li", { key: `collapsed-${idx}`, class: "dropdown-item" }, h("a", { href: item.href || '#', onClick: (e) => this.handleItemClick(item, e) }, item.icon && (h("span", { class: "item-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1em" }))), h("span", { class: "item-label" }, item.label))))))))));
            children.push(this.renderSeparator('sep-ellipsis'));
            // Last Items
            const lastItems = items.slice(-keepEnd);
            lastItems.forEach((item, i) => {
                const realIndex = items.length - keepEnd + i;
                children.push(this.renderItem(item, realIndex));
                if (i < lastItems.length - 1) {
                    children.push(this.renderSeparator(`sep-${realIndex}`));
                }
            });
        }
        else {
            // Render All
            items.forEach((item, index) => {
                children.push(this.renderItem(item, index));
                if (index < items.length - 1) {
                    children.push(this.renderSeparator(`sep-${index}`));
                }
            });
        }
        const navClasses = [
            'breadcrumb',
            `breadcrumb-${this.size}`,
            `breadcrumb-variant-${this.variant}`,
        ].join(' ');
        return (h(Host, { key: 'cc58f67d87e5fa59d510a9eaca3fa6bbb165e790', "aria-label": "Breadcrumb" }, this.renderStructuredData(items), h("nav", { key: 'b88aceaa493445a9cc47f9e72fb40d84f57ceefd', class: navClasses }, h("ol", { key: 'fecb2561f7b18d68971352a0096e4bb855813306', class: "breadcrumb-list" }, children, h("slot", { key: '352d383a94182b58709fd670f75c11f0a4e53b99' })))));
    }
};
Breadcrumb.style = breadcrumbCss();

export { Breadcrumb as ui_breadcrumb };
