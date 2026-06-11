import { r as registerInstance, h, H as Host } from './index-DUsoYu9r.js';

const breadcrumbCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.breadcrumb{display:flex;align-items:center}.breadcrumb-list{display:flex;align-items:center;flex-wrap:wrap;list-style:none;margin:0;padding:0;gap:4px}.breadcrumb-item-wrapper{display:flex;align-items:center;gap:4px}.breadcrumb-item{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;color:var(--text-muted, #64748b);text-decoration:none;border-radius:6px;transition:all 0.2s ease;font-weight:500;cursor:pointer;background-color:transparent}.breadcrumb-item.size-sm{padding:4px 8px;font-size:12px;gap:4px}.breadcrumb-item.size-md{padding:6px 12px;font-size:14px;gap:6px}.breadcrumb-item.size-lg{padding:8px 16px;font-size:16px;gap:8px}.breadcrumb-item:hover:not(.active):not(.disabled){color:var(--color-primary, #10b981);background-color:var(--bg-primary, #eff6ff)}.breadcrumb-item.active{color:var(--text-primary, #1e293b);font-weight:600;cursor:default;background-color:var(--bg-secondary, #f1f5f9)}.breadcrumb-item.disabled{color:var(--color-primary, #cbd5e1);cursor:not-allowed;opacity:0.6}.breadcrumb-item.home{padding:6px 10px}.breadcrumb-content{display:flex;align-items:center;gap:inherit}.breadcrumb-icon{display:inline-flex;align-items:center;font-size:1em;line-height:1}.breadcrumb-icon svg{width:1em;height:1em;fill:currentColor}.breadcrumb-label{white-space:nowrap}.breadcrumb-separator{display:inline-flex;align-items:center;color:var(--color-primary, #cbd5e1);font-size:0.875em;user-select:none;padding:0 4px}.breadcrumb-separator svg{width:1em;height:1em;fill:currentColor}.breadcrumb-badge{display:inline-flex;align-items:center;justify-content:center;padding:2px 6px;border-radius:999px;font-size:10px;font-weight:700;line-height:1;margin-left:4px}.badge-neutral{background:var(--bg-secondary, #f1f5f9);color:var(--color-primary, #475569)}.badge-primary{background:var(--bg-primary, #dbeafe);color:var(--color-primary, #1e40af)}.badge-success{background:var(--bg-primary, #dcfce7);color:var(--color-success, #166534)}.badge-warning{background:var(--bg-primary, #fef9c3);color:var(--color-danger, #854d0e)}.badge-danger{background:var(--bg-primary, #fee2e2);color:var(--color-danger, #991b1b)}.badge-info{background:var(--bg-primary, #e0f2fe);color:var(--color-primary, #075985)}.ellipsis-wrapper{position:relative}.breadcrumb-ellipsis-btn{display:inline-flex;align-items:center;justify-content:center;border:none;background:transparent;padding:4px 8px;color:var(--color-primary, #94a3b8);cursor:pointer;border-radius:4px;transition:all 0.2s}.breadcrumb-ellipsis-btn:hover{background:var(--bg-secondary, #f1f5f9);color:var(--text-muted, #64748b)}.breadcrumb-dropdown{position:absolute;top:100%;left:0;z-index:1000;min-width:160px;background:var(--bg-primary, #ffffff);border-radius:8px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);border:1px solid var(--border-subtle, #e2e8f0);margin-top:8px;padding:4px;animation:dropdownIn 0.2s ease-out}@keyframes dropdownIn{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.dropdown-list{list-style:none;margin:0;padding:0}.dropdown-item a{display:flex;align-items:center;gap:10px;padding:8px 12px;color:var(--color-primary, #475569);text-decoration:none;font-size:13px;font-weight:500;border-radius:6px;transition:background 0.2s}.dropdown-item a:hover{background:var(--bg-secondary, #f1f5f9);color:var(--color-primary, #10b981)}.dropdown-item .item-icon{font-size:14px}.breadcrumb-variant-pills .breadcrumb-item{background:var(--bg-secondary, #f1f5f9);border-radius:999px;margin:0 2px}.breadcrumb-variant-pills .breadcrumb-item:hover{background:var(--bg-primary, #e2e8f0)}.breadcrumb-variant-pills .breadcrumb-item.active{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff)}.breadcrumb-variant-glass{background:rgba(15, 23, 42, 0.3);backdrop-filter:blur(8px);padding:8px 16px;border-radius:12px;border:1px solid rgba(255, 255, 255, 0.1)}.breadcrumb-variant-glass .breadcrumb-item{color:rgba(255, 255, 255, 0.7)}.breadcrumb-variant-glass .breadcrumb-item:hover{color:var(--text-standard, #ffffff);background:rgba(255, 255, 255, 0.1)}.breadcrumb-variant-glass .breadcrumb-item.active{color:var(--text-standard, #ffffff);background:rgba(255, 255, 255, 0.2)}.breadcrumb-variant-glass .breadcrumb-separator{color:rgba(255, 255, 255, 0.3)}@media (max-width: 640px){.breadcrumb-item.size-md{padding:4px 8px;font-size:12px}.breadcrumb-item.size-lg{padding:6px 12px;font-size:14px}}`;

const BreadcrumbItemComponent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * Label for the breadcrumb item
     */
    label;
    /**
     * Optional link for the breadcrumb item
     */
    href;
    /**
     * Optional icon for the breadcrumb item
     */
    icon;
    /**
     * Icon library to use
     */
    iconLibrary = 'default';
    /**
     * Whether the item is the currently active page
     */
    active = false;
    /**
     * Whether the item is disabled
     */
    disabled = false;
    /**
     * Optional badge text to display next to the label
     */
    badge;
    /**
     * Size inherited from parent (set automatically)
     */
    size = 'md';
    render() {
        const classes = {
            'breadcrumb-item': true,
            'active': this.active,
            'disabled': this.disabled,
            [`size-${this.size}`]: true,
        };
        const content = (h("span", { key: '7247bee3f00e6cc3de54c9860d014243b5d9c4cb', class: "breadcrumb-content" }, this.icon && (h("span", { key: '2537f399d8d557033b72f63a9bc190b208ebdf88', class: "breadcrumb-icon" }, h("ui-icon", { key: '951ece78e4e9936fd8f459bb041940c9f6632390', name: this.icon, library: this.iconLibrary, size: "1.1em" }))), h("span", { key: '9b2cc37dc1ae16e0b4f73ee0b12ecd168c930c49', class: "breadcrumb-label" }, h("slot", { key: 'd150b1d67baaa1f1ee0a679a4eded9fb2fe70e88' }, this.label)), this.badge !== undefined && (h("span", { key: '90d28ba9ab8e41cb81e4956fb4eb2a06fc940145', class: "breadcrumb-badge" }, this.badge))));
        return (h(Host, { key: '867a980816ed6ca77aeedd631e00f284a8cccbf5', class: "breadcrumb-item-wrapper" }, this.href && !this.disabled && !this.active ? (h("a", { href: this.href, class: classes, "aria-current": this.active ? 'page' : undefined }, content)) : (h("span", { class: classes, "aria-current": this.active ? 'page' : undefined }, content))));
    }
};
BreadcrumbItemComponent.style = breadcrumbCss();

export { BreadcrumbItemComponent as ui_breadcrumb_item };
