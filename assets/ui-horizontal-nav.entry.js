import { r as registerInstance, c as createEvent, h } from './index-DUsoYu9r.js';

const horizontalNavCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%}.horizontal-nav-container{position:relative;display:flex;align-items:center;width:100%}.horizontal-nav-container.scrollable .horizontal-nav{overflow-x:auto;scrollbar-width:none;-ms-overflow-style:none}.horizontal-nav-container.scrollable .horizontal-nav::-webkit-scrollbar{display:none}.horizontal-nav{display:flex;width:100%;background-color:#ffffff;border-radius:8px;padding:4px}.nav-list{display:flex;list-style:none;margin:0;padding:0;gap:4px;width:100%}.horizontal-nav.full-width .nav-list{flex:1}.horizontal-nav.full-width .nav-list-item{flex:1}.horizontal-nav.full-width .nav-item{width:100%;justify-content:center}.horizontal-nav.align-start .nav-list{justify-content:flex-start}.horizontal-nav.align-center .nav-list{justify-content:center}.horizontal-nav.align-end .nav-list{justify-content:flex-end}.horizontal-nav.align-space-between .nav-list{justify-content:space-between}.nav-list-item{display:flex}.nav-item{display:flex;align-items:center;gap:8px;padding:8px 16px;background:none;border:none;border-radius:6px;color:#64748b;text-decoration:none;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap;font-size:14px;position:relative}.horizontal-nav.size-sm .nav-item{padding:6px 12px;font-size:12px;gap:6px}.horizontal-nav.size-md .nav-item{padding:8px 16px;font-size:14px;gap:8px}.horizontal-nav.size-lg .nav-item{padding:10px 20px;font-size:16px;gap:10px}.horizontal-nav.variant-default .nav-item:hover:not(.disabled):not(.active){background-color:#f1f5f9;color:#475569}.horizontal-nav.variant-default .nav-item.active{background-color:#eff6ff;color:#3b82f6}.horizontal-nav.variant-pills .nav-item{border-radius:20px}.horizontal-nav.variant-pills .nav-item:hover:not(.disabled):not(.active){background-color:#f1f5f9;color:#475569}.horizontal-nav.variant-pills .nav-item.active{background-color:#3b82f6;color:white}.horizontal-nav.variant-underline{background-color:transparent;border-bottom:1px solid #e2e8f0;border-radius:0;padding:0}.horizontal-nav.variant-underline .nav-item{border-radius:0;padding-bottom:12px;margin-bottom:-1px}.horizontal-nav.variant-underline .nav-item::after{content:"";position:absolute;bottom:0;left:0;right:0;height:2px;background-color:transparent;transition:background-color 0.2s ease}.horizontal-nav.variant-underline .nav-item:hover:not(.disabled):not(.active){color:#475569}.horizontal-nav.variant-underline .nav-item:hover:not(.disabled):not(.active)::after{background-color:#cbd5e1}.horizontal-nav.variant-underline .nav-item.active{color:#3b82f6}.horizontal-nav.variant-underline .nav-item.active::after{background-color:#3b82f6}.horizontal-nav.variant-segmented{background-color:#f1f5f9;border-radius:8px;padding:4px}.horizontal-nav.variant-segmented .nav-item{background-color:transparent}.horizontal-nav.variant-segmented .nav-item:hover:not(.disabled):not(.active){background-color:rgba(255, 255, 255, 0.5)}.horizontal-nav.variant-segmented .nav-item.active{background-color:white;color:#1e293b;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1)}.nav-item.disabled{opacity:0.4;cursor:not-allowed}.nav-item-content{display:flex;align-items:center;gap:inherit}.nav-icon{display:inline-flex;align-items:center;font-size:1.1em;line-height:1}.nav-icon svg{width:1em;height:1em;fill:currentColor}.nav-label{line-height:1}.nav-badge{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 6px;background-color:#ef4444;color:white;font-size:11px;font-weight:600;border-radius:10px;line-height:1}.nav-item.active .nav-badge{background-color:#dc2626}.horizontal-nav.with-divider .nav-list-item:not(:last-child)::after{content:"";width:1px;height:20px;background-color:#e2e8f0;margin:auto 4px}.scroll-button{position:absolute;top:50%;transform:translateY(-50%);width:32px;height:32px;display:flex;align-items:center;justify-content:center;background-color:white;border:1px solid #e2e8f0;border-radius:50%;cursor:pointer;z-index:10;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transition:all 0.2s ease}.scroll-button:hover{background-color:#f8fafc;border-color:#cbd5e1}.scroll-button.left{left:4px}.scroll-button.right{right:4px}.scroll-button svg{width:16px;height:16px;color:#64748b}.horizontal-nav.display-list{padding:0;background:transparent}.horizontal-nav.display-list .nav-list{flex-direction:column;gap:0}.horizontal-nav.display-list .nav-list-item{width:100%;border-bottom:1px solid #e5e7eb}.horizontal-nav.display-list .nav-list-item:last-child{border-bottom:none}.horizontal-nav.display-list .nav-item{width:100%;padding:12px 16px;border-radius:0;justify-content:flex-start;background-color:#ffffff}.horizontal-nav.display-list .nav-item:hover{background-color:#f9fafb}.horizontal-nav.display-list .nav-item.active{background-color:#eff6ff;border-left:3px solid #3b82f6;padding-left:13px}.horizontal-nav.display-list.variant-pills .nav-item,.horizontal-nav.display-list.variant-underline .nav-item,.horizontal-nav.display-list.variant-segmented .nav-item{border-radius:0}.horizontal-nav.display-list.variant-pills .nav-item.active{background-color:#eff6ff}.horizontal-nav.display-list.size-sm .nav-item{padding:8px 12px}.horizontal-nav.display-list.size-sm .nav-item.active{padding-left:9px}.horizontal-nav.display-list.size-lg .nav-item{padding:16px 20px}.horizontal-nav.display-list.size-lg .nav-item.active{padding-left:17px}@media (max-width: 640px){.horizontal-nav.size-md .nav-item{padding:6px 12px;font-size:13px}.horizontal-nav.size-lg .nav-item{padding:8px 16px;font-size:14px}}`;

const HorizontalNav = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navItemClick = createEvent(this, "navItemClick");
    }
    /**
     * Navigation items
     */
    items = [];
    /**
     * Active item ID
     */
    activeId;
    /**
     * Variant style
     */
    variant = 'default';
    /**
     * Size of navigation items
     */
    size = 'md';
    /**
     * Alignment of items
     */
    align = 'start';
    /**
     * Enable scrolling for overflow items
     */
    scrollable = false;
    /**
     * Show divider between items
     */
    showDivider = false;
    /**
     * Full width items
     */
    fullWidth = false;
    /**
     * Display format: 'buttons' (default) or 'list'
     */
    displayAs = 'buttons';
    /**
     * Default library for icons
     */
    iconLibrary = 'default';
    /**
     * Event emitted when a nav item is clicked
     */
    navItemClick;
    scrollLeft = 0;
    canScrollLeft = false;
    canScrollRight = false;
    navRef;
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
        if (item.disabled) {
            event.preventDefault();
            return;
        }
        if (!item.href) {
            event.preventDefault();
        }
        this.activeId = item.id;
        this.navItemClick.emit(item);
    };
    handleScroll = () => {
        if (!this.navRef)
            return;
        const { scrollLeft, scrollWidth, clientWidth } = this.navRef;
        this.scrollLeft = scrollLeft;
        this.canScrollLeft = scrollLeft > 0;
        this.canScrollRight = scrollLeft < scrollWidth - clientWidth - 1;
    };
    scrollToDirection = (direction) => {
        if (!this.navRef)
            return;
        const scrollAmount = 200;
        const newScrollLeft = direction === 'left'
            ? this.navRef.scrollLeft - scrollAmount
            : this.navRef.scrollLeft + scrollAmount;
        this.navRef.scrollTo({ left: newScrollLeft, behavior: 'smooth' });
    };
    componentDidLoad() {
        if (this.scrollable && this.navRef) {
            this.handleScroll();
        }
    }
    render() {
        const items = this.parseItems();
        const containerClasses = {
            'horizontal-nav-container': true,
            'scrollable': this.scrollable,
        };
        const navClasses = {
            'horizontal-nav': true,
            [`variant-${this.variant}`]: true,
            [`size-${this.size}`]: true,
            [`align-${this.align}`]: true,
            'full-width': this.fullWidth,
            'with-divider': this.showDivider,
            [`display-${this.displayAs}`]: true,
        };
        return (h("div", { key: 'fbcf314495c91cb99bc90db33029196edfdb63a2', class: containerClasses }, this.scrollable && this.canScrollLeft && (h("button", { key: 'f8de2c214e9d6f5b2a98c8f15dd11d21590e21bc', class: "scroll-button left", onClick: () => this.scrollToDirection('left'), "aria-label": "Scroll left" }, h("svg", { key: 'f578cf8f8051944b9d172fb4d6b97e23e0534e1a', viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" }, h("polyline", { key: 'dc8225738c6d416bff540136ce13421bf92ab06d', points: "15 18 9 12 15 6" })))), h("nav", { key: '3296d5d35db2f5447bbf0081e4a2670e65b25046', class: navClasses, ref: (el) => (this.navRef = el), onScroll: this.handleScroll }, h("ul", { key: '66db7520e79ced35998900fb72abe09ac99b15c1', class: "nav-list" }, items.map((item) => this.renderItem(item)))), this.scrollable && this.canScrollRight && (h("button", { key: 'bdf0b40342ff2c07a541258a4cda3310dfa07c5e', class: "scroll-button right", onClick: () => this.scrollToDirection('right'), "aria-label": "Scroll right" }, h("svg", { key: '6cd30d589d60113d2e3cccda8d6c3f7914d23750', viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2" }, h("polyline", { key: '02dcff53f897c9dff39369fc1b9c48cd06cb5365', points: "9 18 15 12 9 6" }))))));
    }
    renderItem(item) {
        const isActive = item.active || item.id === this.activeId;
        const itemClasses = {
            'nav-item': true,
            'active': isActive,
            'disabled': item.disabled,
        };
        const content = (h("span", { class: "nav-item-content" }, item.icon && (h("span", { class: "nav-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.2em" }))), h("span", { class: "nav-label" }, item.label), item.badge && h("span", { class: "nav-badge" }, item.badge)));
        return (h("li", { key: item.id, class: "nav-list-item" }, item.href && !item.disabled ? (h("a", { href: item.href, class: itemClasses, onClick: (e) => this.handleItemClick(item, e) }, content)) : (h("button", { class: itemClasses, disabled: item.disabled, onClick: (e) => this.handleItemClick(item, e) }, content))));
    }
};
HorizontalNav.style = horizontalNavCss();

export { HorizontalNav as ui_horizontal_nav };
