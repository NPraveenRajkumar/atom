import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const toolbarCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{--toolbar-height:48px;--toolbar-padding:8px 12px;--toolbar-gap:4px;--toolbar-bg:var(--bg-primary, #ffffff);--toolbar-border-color:var(--border-default, #e5e7eb);--toolbar-text:var(--text-primary, #111827);--toolbar-muted:var(--text-secondary, #6b7280);--toolbar-separator-color:var(--border-default, #e5e7eb);--toolbar-item-bg:transparent;--toolbar-item-bg-hover:var(--bg-secondary, #f3f4f6);--toolbar-item-bg-active:var(--color-primary-light, #eff6ff);--toolbar-item-color:var(--text-primary, #374151);--toolbar-item-color-active:var(--color-primary, #2563eb);--toolbar-item-radius:6px;--toolbar-item-height-sm:28px;--toolbar-item-height-md:34px;--toolbar-item-height-lg:40px;--toolbar-item-height-xl:48px;--toolbar-item-padding-sm:0 8px;--toolbar-item-padding-md:0 12px;--toolbar-item-padding-lg:0 16px;--toolbar-switch-width:34px;--toolbar-switch-height:18px;--toolbar-switch-on:var(--color-primary, #2563eb);--toolbar-switch-off:var(--border-strong, #d1d5db);--toolbar-switch-thumb:#ffffff;--toolbar-badge-bg:var(--color-danger, #ef4444);--toolbar-badge-color:#ffffff;--toolbar-badge-size:16px;--toolbar-overflow-menu-bg:#ffffff;--toolbar-overflow-menu-border:rgba(0, 0, 0, 0.08);--toolbar-overflow-menu-shadow:0 20px 50px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);--toolbar-overflow-menu-radius:16px;--toolbar-overflow-item-height:40px;--toolbar-transition:0.15s ease;--toolbar-shadow-1:0 1px 3px rgba(0, 0, 0, .06), 0 1px 2px rgba(0, 0, 0, .04);--toolbar-shadow-2:0 4px 12px rgba(0, 0, 0, .08), 0 2px 4px rgba(0, 0, 0, .05);--toolbar-shadow-3:0 8px 24px rgba(0, 0, 0, .10), 0 4px 8px rgba(0, 0, 0, .06);--toolbar-shadow-4:0 16px 40px rgba(0, 0, 0, .12), 0 6px 12px rgba(0, 0, 0, .07);display:block;box-sizing:border-box;position:relative;max-width:100%}:host{--_item-h:var(--toolbar-item-height-md);--_item-p:var(--toolbar-item-padding-md)}:host(.size-sm){--_item-h:var(--toolbar-item-height-sm);--_item-p:var(--toolbar-item-padding-sm)}:host(.size-md){--_item-h:var(--toolbar-item-height-md);--_item-p:var(--toolbar-item-padding-md)}:host(.size-lg){--_item-h:var(--toolbar-item-height-lg);--_item-p:var(--toolbar-item-padding-lg)}:host(.size-xl){--_item-h:var(--toolbar-item-height-xl);--_item-p:var(--toolbar-item-padding-lg)}.toolbar-body{display:flex;align-items:center;flex-wrap:nowrap;box-sizing:border-box;width:100%;max-width:100%;min-width:0;min-height:var(--toolbar-height);background:var(--toolbar-bg);color:var(--toolbar-text);font-family:var(--font-family);font-size:13px;transition:background var(--toolbar-transition), color var(--toolbar-transition);position:relative}:host(.orientation-vertical) .toolbar-body{flex-direction:column;align-items:stretch;width:var(--toolbar-height);min-height:unset;height:100%}:host(.align-start) .toolbar-body{justify-content:flex-start}:host(.align-center) .toolbar-body{justify-content:center}:host(.align-end) .toolbar-body{justify-content:flex-end}:host(.align-space-between) .toolbar-body{justify-content:space-between}:host(.align-space-around) .toolbar-body{justify-content:space-around}:host(.align-space-evenly) .toolbar-body{justify-content:space-evenly}:host .toolbar-body{overflow:hidden}:host(.overflow-scroll) .toolbar-body{overflow-x:auto;overflow-y:hidden;-webkit-overflow-scrolling:touch;}:host(.orientation-vertical) :host(.overflow-scroll) .toolbar-body{overflow-x:hidden;overflow-y:auto}:host(.overflow-scroll) .toolbar-body{scrollbar-width:thin;scrollbar-color:var(--toolbar-muted) transparent}:host(.overflow-scroll) .toolbar-body::-webkit-scrollbar{width:4px;height:4px;background:transparent}:host(.overflow-scroll) .toolbar-body::-webkit-scrollbar-thumb{background:var(--toolbar-muted);border-radius:4px;border:1px solid transparent;background-clip:content-box;opacity:0.5}:host(.overflow-scroll) .toolbar-body{}:host(.overflow-scroll) .toolbar-body:not(:hover){scrollbar-color:transparent transparent}:host(.overflow-scroll) .toolbar-body:not(:hover)::-webkit-scrollbar-thumb{background:transparent}:host(.overflow-visible) .toolbar-body{overflow:visible}:host(.overflow-wrap) .toolbar-body{flex-wrap:wrap;height:auto;min-height:var(--toolbar-height)}:host(.overflow-dropdown) .toolbar-body{overflow:hidden}:host(.overflow-dropdown.has-open-overlay) .toolbar-body,:host(.overflow-dropdown.is-overflow-open) .toolbar-body,:host(.overflow-dropdown.has-open-dropdown) .toolbar-body,:host(.has-open-overlay) .toolbar-body{overflow:visible}:host(.elevation-0) .toolbar-body{box-shadow:none}:host(.elevation-1) .toolbar-body{box-shadow:var(--toolbar-shadow-1)}:host(.elevation-2) .toolbar-body{box-shadow:var(--toolbar-shadow-2)}:host(.elevation-3) .toolbar-body{box-shadow:var(--toolbar-shadow-3)}:host(.elevation-4) .toolbar-body{box-shadow:var(--toolbar-shadow-4)}:host(.is-bordered) .toolbar-body{border:1px solid var(--toolbar-border-color)}:host(.is-rounded) .toolbar-body{border-radius:12px}:host(.position-sticky){position:sticky;z-index:var(--z-sticky, 10)}:host(.position-fixed){position:fixed;z-index:var(--z-toolbar, 20);width:100%}:host(.variant-primary) .toolbar-body{background:var(--color-primary, #2563eb);color:#ffffff;--toolbar-item-color:rgba(255, 255, 255, 0.92);--toolbar-item-bg-hover:rgba(255, 255, 255, 0.12);--toolbar-item-bg-active:rgba(255, 255, 255, 0.2);--toolbar-item-color-active:#ffffff;--toolbar-separator-color:rgba(255, 255, 255, 0.2)}:host(.variant-secondary) .toolbar-body{background:var(--bg-secondary, #f8fafc);--toolbar-item-bg-hover:var(--bg-primary, #ffffff)}:host(.variant-minimal) .toolbar-body{background:transparent;box-shadow:none;border-bottom:1px solid var(--toolbar-border-color)}:host(.variant-glass) .toolbar-body{background:rgba(255, 255, 255, 0.12);backdrop-filter:blur(16px) saturate(180%);-webkit-backdrop-filter:blur(16px) saturate(180%);border:1px solid rgba(255, 255, 255, 0.15);box-shadow:0 8px 32px rgba(31, 38, 135, 0.1);--toolbar-item-color:var(--text-primary, #1e293b);--toolbar-item-bg-hover:rgba(255, 255, 255, 0.2);--toolbar-separator-color:rgba(255, 255, 255, 0.2)}:host(.variant-elevated) .toolbar-body{box-shadow:var(--toolbar-shadow-3);border-bottom:none}:host(.variant-outlined) .toolbar-body{background:transparent;border:1px solid var(--toolbar-border-color);box-shadow:none}:host(.variant-dark) .toolbar-body{background:var(--bg-dark, #1e293b);color:#f1f5f9;--toolbar-item-color:rgba(241, 245, 249, 0.9);--toolbar-item-bg-hover:rgba(255, 255, 255, 0.08);--toolbar-item-bg-active:rgba(99, 102, 241, 0.25);--toolbar-item-color-active:#818cf8;--toolbar-separator-color:rgba(255, 255, 255, 0.1);--toolbar-overflow-menu-bg:#1e293b;--toolbar-overflow-menu-border:rgba(255, 255, 255, 0.1)}:host(.variant-inline){display:inline-block;width:auto}:host(.variant-inline) .toolbar-body{width:auto;min-height:auto;background:transparent;box-shadow:none;border:none;border-radius:0;padding:0 !important;overflow:visible}.toolbar-zones{display:flex;align-items:center;width:100%;max-width:100%;min-width:0;gap:inherit}.toolbar-zone{display:flex;align-items:center;gap:inherit;flex-shrink:0;max-width:100%;min-width:0}.toolbar-zone--left{margin-right:auto}.toolbar-zone--right{margin-left:auto}.toolbar-zone--center{flex:1;justify-content:center}:host(.has-zone-dividers) .toolbar-zones .toolbar-zone+.toolbar-zone{border-left:1px solid var(--toolbar-separator-color);padding-left:12px;margin-left:12px}.toolbar-item{display:inline-flex;align-items:center;justify-content:center;gap:5px;height:var(--_item-h);padding:var(--_item-p);border-radius:var(--toolbar-item-radius);color:var(--toolbar-item-color);background:var(--toolbar-item-bg);border:none;cursor:pointer;user-select:none;white-space:nowrap;font-size:inherit;font-weight:500;transition:background var(--toolbar-transition), color var(--toolbar-transition), box-shadow var(--toolbar-transition), opacity var(--toolbar-transition), transform 0.1s ease;outline:none;text-decoration:none;flex-shrink:0;position:relative;max-width:100%;min-width:0}.toolbar-item--button,.toolbar-item--input,.toolbar-item--search,.toolbar-item--toggle,.toolbar-item--toggle-group{padding:0 !important;background:transparent !important;border:none !important;box-shadow:none !important;height:auto !important;cursor:default !important}.toolbar-item--dropdown{overflow:visible;padding:0 !important;background:transparent !important;border:none !important;box-shadow:none !important;height:auto !important;cursor:default !important;}.toolbar-item--dropdown .dropdown-trigger,.toolbar-item--dropdown .dropdown-container .dropdown-trigger{height:var(--_item-h) !important;min-height:var(--_item-h) !important;max-height:var(--_item-h) !important;padding:0 10px !important;font-size:inherit !important;box-sizing:border-box}.toolbar-item--dropdown{}.toolbar-item--dropdown .dropdown-has-chips .dropdown-trigger{height:auto !important;min-height:var(--_item-h) !important;max-height:none !important}.toolbar-item:focus-visible{box-shadow:0 0 0 2px var(--color-primary, #2563eb);outline:none}.toolbar-item--button:hover:not(.is-disabled),.toolbar-item--avatar.is-clickable:hover{background:var(--toolbar-item-bg-hover)}.toolbar-item--button.is-active{background:var(--toolbar-item-bg-active);color:var(--toolbar-item-color-active)}.toolbar-item--button:active:not(.is-disabled){transform:scale(0.96)}.toolbar-item.is-icon-only{padding:0;width:var(--_item-h)}.toolbar-item.is-disabled,.toolbar-item[aria-disabled=true]{opacity:0.45;cursor:not-allowed;pointer-events:none}.toolbar-item.is-loading{cursor:wait;pointer-events:none}.toolbar-item--primary{background:var(--color-primary, #2563eb);color:#fff}.toolbar-item--primary:hover{background:var(--color-primary-hover, #1d4ed8)}.toolbar-item--secondary{background:var(--bg-secondary, #f1f5f9);color:var(--text-primary, #374151)}.toolbar-item--secondary:hover{background:var(--bg-tertiary, #e2e8f0)}.toolbar-item--danger{background:var(--color-danger, #ef4444);color:#fff}.toolbar-item--danger:hover{background:#dc2626}.toolbar-item--success{background:var(--color-success, #10b981);color:#fff}.toolbar-item--warning{background:var(--color-warning, #f59e0b);color:#fff}.toolbar-item--ghost,.toolbar-item--outline{background:transparent;color:var(--toolbar-item-color)}.toolbar-item--outline{border:1px solid var(--toolbar-border-color)}.toolbar-item__label{line-height:1}.toolbar-separator{width:1px;align-self:stretch;margin:4px 2px;background:var(--toolbar-separator-color);flex-shrink:0}.toolbar-separator--horizontal{width:100%;height:1px;margin:2px 4px}.toolbar-spacer{display:block;flex-shrink:0}.toolbar-text{cursor:default;font-size:13px;color:var(--toolbar-text);padding:0 6px;height:auto}.toolbar-text--bold{font-weight:700}.toolbar-text--muted{color:var(--toolbar-muted)}.toolbar-status-badge{display:inline-flex;align-items:center;padding:2px 8px;border-radius:999px;font-size:11px;font-weight:600;letter-spacing:0.03em;height:auto}.toolbar-status-badge--primary{background:#dbeafe;color:#1d4ed8}.toolbar-status-badge--success{background:#d1fae5;color:#065f46}.toolbar-status-badge--danger{background:#fee2e2;color:#991b1b}.toolbar-status-badge--warning{background:#fef3c7;color:#92400e}.toolbar-status-badge--info{background:#e0f2fe;color:#0369a1}.toolbar-status-badge.is-dot{width:8px;height:8px;border-radius:50%;padding:0}.toolbar-badge{position:absolute;top:2px;right:2px;min-width:var(--toolbar-badge-size);height:var(--toolbar-badge-size);border-radius:999px;padding:0 3px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:700;line-height:1;background:var(--toolbar-badge-bg);color:var(--toolbar-badge-color);box-shadow:0 0 0 2px var(--toolbar-bg);pointer-events:none}.toolbar-badge--success{background:var(--color-success, #10b981)}.toolbar-badge--warning{background:var(--color-warning, #f59e0b)}.toolbar-badge--info{background:var(--color-info, #2563eb)}.toolbar-item--input,.toolbar-item--search{padding:0;background:transparent;cursor:default}.toolbar-input-wrap{display:flex;align-items:center;gap:6px;height:var(--_item-h);padding:0 10px;border:1px solid var(--toolbar-border-color);border-radius:var(--toolbar-item-radius);background:var(--bg-primary, #fff);transition:border-color var(--toolbar-transition), box-shadow var(--toolbar-transition);min-width:160px;max-width:260px}.toolbar-input-wrap--search{min-width:180px}.toolbar-input-wrap:focus-within{border-color:var(--color-primary, #2563eb);box-shadow:0 0 0 2px rgba(37, 99, 235, 0.12)}.toolbar-input{flex:1;border:none;outline:none;background:transparent;color:var(--toolbar-text);font-size:13px;font-family:inherit;min-width:0}.toolbar-input::placeholder{color:var(--toolbar-muted)}.toolbar-input-icon{color:var(--toolbar-muted);flex-shrink:0}.toolbar-input-clear{display:flex;align-items:center;padding:2px;background:none;border:none;cursor:pointer;color:var(--toolbar-muted);border-radius:4px;transition:color var(--toolbar-transition), background var(--toolbar-transition);flex-shrink:0}.toolbar-input-clear:hover{color:var(--toolbar-text);background:var(--toolbar-item-bg-hover)}.toolbar-item--toggle{gap:8px;cursor:default;padding:0 8px;background:transparent}.toolbar-toggle-label{font-size:13px;color:var(--toolbar-item-color);white-space:nowrap}.toolbar-switch{position:relative;width:var(--toolbar-switch-width);height:var(--toolbar-switch-height);border-radius:999px;background:var(--toolbar-switch-off);border:none;cursor:pointer;transition:background var(--toolbar-transition);outline:none;flex-shrink:0;padding:0}.toolbar-switch:focus-visible{box-shadow:0 0 0 2px var(--color-primary, #2563eb)}.toolbar-switch.is-on{background:var(--toolbar-switch-on)}.toolbar-switch__thumb{position:absolute;top:2px;left:2px;width:calc(var(--toolbar-switch-height) - 4px);height:calc(var(--toolbar-switch-height) - 4px);border-radius:50%;background:var(--toolbar-switch-thumb);box-shadow:0 1px 3px rgba(0, 0, 0, 0.25);transition:transform var(--toolbar-transition)}.toolbar-switch.is-on .toolbar-switch__thumb{transform:translateX(calc(var(--toolbar-switch-width) - var(--toolbar-switch-height)))}.toolbar-item--avatar{padding:0 4px;position:relative;background:transparent}.toolbar-item--avatar.is-clickable{cursor:pointer;padding:4px}.toolbar-item--avatar.is-clickable:hover{background:var(--toolbar-item-bg-hover)}.toolbar-group{display:inline-flex;align-items:center;gap:inherit;flex-shrink:0;max-width:100%;min-width:0}.toolbar-group--divider{border-left:1px solid var(--toolbar-separator-color);padding-left:8px;margin-left:4px}.toolbar-group__label{font-size:11px;font-weight:600;color:var(--toolbar-muted);text-transform:uppercase;letter-spacing:0.06em;padding:0 4px}.toolbar-group.is-collapsed>*:not(.toolbar-group__label){display:none}.toolbar-spinner{width:14px;height:14px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:toolbar-spin 0.7s linear infinite}@keyframes toolbar-spin{to{transform:rotate(360deg)}}.toolbar-overflow{position:absolute;right:var(--toolbar-overflow-right, 0px);top:50%;transform:translateY(-50%);display:inline-flex;align-items:center;flex-shrink:0;z-index:var(--z-dropdown, 100);background:var(--toolbar-bg);}.toolbar-overflow::before{content:"";position:absolute;right:100%;top:0;bottom:0;width:24px;background:linear-gradient(to right, transparent, var(--toolbar-bg));pointer-events:none}.toolbar-overflow.is-open .toolbar-overflow__menu{display:block !important;opacity:1 !important;transform:scale(1) translateY(0) !important;visibility:visible !important}.toolbar-overflow__btn{position:relative}.toolbar-overflow__badge{position:absolute;top:1px;right:1px;min-width:14px;height:14px;background:var(--color-primary, #2563eb);color:#fff;border-radius:999px;font-size:9px;font-weight:700;display:flex;align-items:center;justify-content:center;padding:0 2px;pointer-events:none;box-shadow:0 0 0 2px var(--toolbar-bg)}.toolbar-overflow__menu{position:absolute;top:calc(100% + 6px);right:0;z-index:var(--z-dropdown, 100);list-style:none;margin:0;padding:6px;min-width:180px;background:var(--toolbar-overflow-menu-bg);border:1px solid var(--toolbar-overflow-menu-border);border-radius:var(--toolbar-overflow-menu-radius);box-shadow:var(--toolbar-overflow-menu-shadow);animation:toolbar-overflow-in 0.15s cubic-bezier(0.34, 1.56, 0.64, 1);max-height:320px;overflow-y:auto}:host(.orientation-vertical) .toolbar-overflow__menu{top:0;left:calc(100% + 6px);right:auto}@keyframes toolbar-overflow-in{from{opacity:0;transform:scale(0.95) translateY(-6px)}to{opacity:1;transform:scale(1) translateY(0)}}.overflow-item{display:flex;align-items:center;gap:8px;height:var(--toolbar-overflow-item-height);padding:0 10px;border-radius:6px;cursor:pointer;color:var(--toolbar-item-color);font-size:13px;font-weight:500;transition:background var(--toolbar-transition), color var(--toolbar-transition);outline:none;user-select:none;list-style:none}.overflow-item:hover,.overflow-item:focus-visible{background:var(--toolbar-item-bg-hover);color:var(--toolbar-item-color-active)}.overflow-item.is-active{color:var(--toolbar-item-color-active)}.overflow-item.is-disabled{opacity:0.45;cursor:not-allowed;pointer-events:none}.overflow-item-label{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.overflow-item-check{color:var(--toolbar-item-color-active);font-size:12px;font-weight:700}.overflow-item--toggle{justify-content:space-between}.overflow-toggle{font-size:11px;font-weight:600;padding:2px 6px;border-radius:4px;background:var(--toolbar-item-bg-hover);color:var(--toolbar-muted)}.overflow-toggle.is-on{background:var(--toolbar-item-bg-active);color:var(--toolbar-item-color-active)}.overflow-item--avatar{gap:10px}.toolbar-mobile-toggle{display:none;align-items:center;justify-content:center;width:36px;height:36px;background:none;border:none;cursor:pointer;color:var(--toolbar-text);border-radius:6px;transition:background var(--toolbar-transition);padding:0}.toolbar-mobile-toggle:hover{background:var(--toolbar-item-bg-hover)}:host(.is-mobile) .toolbar-mobile-toggle{display:flex}:host(.is-mobile) .toolbar-body,:host(.variant-inline) .toolbar-body{flex-wrap:wrap;align-items:flex-start}:host(.is-mobile.is-collapsed) .toolbar-body{display:none}:host(.is-mobile) .toolbar-zones,:host(.variant-inline) .toolbar-zones,:host(.overflow-wrap) .toolbar-zones{flex-wrap:wrap;align-items:flex-start}:host(.is-mobile) .toolbar-zone,:host(.variant-inline) .toolbar-zone,:host(.overflow-wrap) .toolbar-zone{flex-wrap:wrap;align-items:flex-start}:host(.is-mobile) .toolbar-zone--left,:host(.is-mobile) .toolbar-zone--center,:host(.is-mobile) .toolbar-zone--right{width:100%;margin-left:0;margin-right:0;justify-content:flex-start}:host(.is-mobile) .toolbar-item--input,:host(.variant-inline) .toolbar-item--input,:host(.is-mobile) .toolbar-item--search,:host(.variant-inline) .toolbar-item--search{flex:1 1 180px}:host(.orientation-vertical) .toolbar-item{width:100%;justify-content:flex-start;padding:0 14px;height:var(--_item-h)}:host(.orientation-vertical) .toolbar-item.is-icon-only{justify-content:center;padding:0}:host(.orientation-vertical) .toolbar-separator{width:80%;height:1px;margin:4px auto;align-self:center}:host(.orientation-vertical) .toolbar-overflow{position:absolute;bottom:0;right:auto;left:0;top:auto;transform:none;width:100%;justify-content:center}.toolbar-item[draggable=true]{cursor:grab}.toolbar-item[draggable=true]:active{cursor:grabbing;opacity:0.6}:host(.is-disabled) .toolbar-body{opacity:0.6;pointer-events:none;cursor:not-allowed}:host(.is-loading) .toolbar-body::after{content:"";position:absolute;bottom:0;left:0;height:2px;width:100%;background:linear-gradient(90deg, transparent 0%, var(--color-primary, #2563eb) 40%, transparent 100%);animation:toolbar-loading 1.4s ease infinite}@keyframes toolbar-loading{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}::slotted(*){flex-shrink:0;max-width:100%;min-width:0}:host(.is-mobile) ::slotted(*),:host(.variant-inline) ::slotted(*){flex-shrink:1}.toolbar-item--custom{padding:0;background:transparent;height:auto;cursor:default;max-width:100%}`;

const Toolbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toolbarItemClick = createEvent(this, "toolbarItemClick");
        this.toolbarItemChange = createEvent(this, "toolbarItemChange");
        this.toolbarOverflowChange = createEvent(this, "toolbarOverflowChange");
        this.toolbarReorder = createEvent(this, "toolbarReorder");
    }
    get el() { return getElement(this); }
    // ─── Configuration ─────────────────────────────────────────────────────────
    /**
     * JSON string or object describing the full toolbar layout.
     * Schema: { left?: ToolbarItem[], center?: ToolbarItem[], right?: ToolbarItem[] }
     */
    schema = null;
    /** Flat list of items (all rendered in the main content zone). */
    items = [];
    /** Visual variant of the toolbar. */
    variant = 'default';
    /** Size of toolbar items. */
    size = 'md';
    /** Orientation: horizontal or vertical. */
    orientation = 'horizontal';
    /** Positioning strategy. */
    position = 'static';
    /** Which edge to stick to when position is sticky or fixed. */
    stickyEdge = 'top';
    /** Alignment of items along the main axis. */
    alignment = 'start';
    /** Gap between items (CSS value). */
    gap = '4px';
    /** Padding inside the toolbar (CSS value). */
    padding = '8px 12px';
    /** Maximum height (horizontal) or width (vertical) (CSS value). */
    maxSize;
    /** Overflow handling strategy. */
    overflowStrategy = 'dropdown';
    /** Label for the overflow "More" button. */
    overflowLabel = 'More';
    /** Icon for the overflow more button. */
    overflowIcon = 'more-horizontal';
    /** Default icon library for items that don't specify one. */
    iconLibrary = 'lucide';
    /** Whether the toolbar is in a disabled state. */
    disabled = false;
    /** Whether the toolbar is in a loading state. */
    loading = false;
    /** Show dividers between zones (left/center/right). */
    zoneDividers = false;
    /** Rounded corners for the whole bar. */
    rounded = false;
    /** Elevation shadow level (0–4). */
    elevation = 1;
    /** Enable drag-and-drop reordering of toolbar items. */
    reorderable = false;
    /** Enable keyboard navigation across items. */
    keyboardNav = true;
    /** Accessible label for the toolbar element. */
    toolbarAriaLabel = 'Toolbar';
    /** Show a border around the toolbar. */
    bordered = false;
    /** Make label hidden (icon-only) for button items by default. */
    iconOnly = false;
    /** Debounce time in ms for input/search items. */
    inputDebounce = 300;
    // ─── State ─────────────────────────────────────────────────────────────────
    overflowedIds = new Set();
    isOverflowOpen = false;
    itemStates = new Map();
    dragSourceId = null;
    parsedSchema = null;
    parsedItems = [];
    isMobile = false;
    isCollapsed = false;
    openChildDropdowns = 0;
    // ─── Events ────────────────────────────────────────────────────────────────
    /** Fired when a button or clickable item is activated. */
    toolbarItemClick;
    /** Fired when an input, dropdown, toggle, or switch value changes. */
    toolbarItemChange;
    /** Fired when the visible/overflowed item set changes. */
    toolbarOverflowChange;
    /** Fired after a drag-and-drop reorder. */
    toolbarReorder;
    // ─── Internals ─────────────────────────────────────────────────────────────
    resizeObserver;
    toolbarBodyRef;
    inputDebounceTimers = new Map();
    undoStack = [];
    redoStack = [];
    focusableRefs = new Map();
    mobileBreakpoint = 640;
    // ─── Lifecycle ─────────────────────────────────────────────────────────────
    componentWillLoad() {
        this.parseItems();
        this.parseSchema();
        this.initItemStates();
        this.isMobile = window.innerWidth <= this.mobileBreakpoint;
    }
    componentDidLoad() {
        if (this.overflowStrategy === 'dropdown' && typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver(() => this.recalcOverflow());
            this.resizeObserver.observe(this.el);
        }
        requestAnimationFrame(() => this.recalcOverflow());
    }
    disconnectedCallback() {
        this.resizeObserver?.disconnect();
        this.inputDebounceTimers.forEach(t => clearTimeout(t));
    }
    // ─── Watchers ──────────────────────────────────────────────────────────────
    onItemsChange() { this.parseItems(); this.initItemStates(); requestAnimationFrame(() => this.recalcOverflow()); }
    onSchemaChange() { this.parseSchema(); this.initItemStates(); requestAnimationFrame(() => this.recalcOverflow()); }
    // ─── Listeners ─────────────────────────────────────────────────────────────
    onDocumentClick(e) {
        if (this.isOverflowOpen && e.target instanceof Node && !this.el.contains(e.target)) {
            this.isOverflowOpen = false;
        }
    }
    onKeyDown(e) {
        if (!this.keyboardNav)
            return;
        const focusable = Array.from(this.focusableRefs.values()).filter(el => el && !el.hasAttribute('disabled'));
        const idx = focusable.indexOf(document.activeElement);
        if (this.orientation === 'horizontal') {
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                focusable[(idx + 1) % focusable.length]?.focus();
            }
            else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                focusable[(idx - 1 + focusable.length) % focusable.length]?.focus();
            }
        }
        else {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                focusable[(idx + 1) % focusable.length]?.focus();
            }
            else if (e.key === 'ArrowUp') {
                e.preventDefault();
                focusable[(idx - 1 + focusable.length) % focusable.length]?.focus();
            }
        }
        if (e.key === 'Escape')
            this.isOverflowOpen = false;
    }
    onChildDropdownOpen(e) {
        const target = e.target;
        if (!target || target.tagName?.toLowerCase() !== 'ui-dropdown' || !this.el.contains(target))
            return;
        this.openChildDropdowns += 1;
    }
    onChildDropdownClose(e) {
        const target = e.target;
        if (!target || target.tagName?.toLowerCase() !== 'ui-dropdown' || !this.el.contains(target))
            return;
        this.openChildDropdowns = Math.max(0, this.openChildDropdowns - 1);
    }
    // ─── Public Methods ────────────────────────────────────────────────────────
    /** Programmatically set the value of any item by id. */
    async setItemValue(id, value) {
        const prev = this.itemStates.get(id)?.value;
        this.itemStates = new Map(this.itemStates.set(id, { ...this.itemStates.get(id), id, value }));
        const item = this.findItem(id);
        if (item)
            this.toolbarItemChange.emit({ item, value, previousValue: prev });
    }
    /** Get the current value of an item by id. */
    async getItemValue(id) {
        return this.itemStates.get(id)?.value;
    }
    /** Disable or enable an item by id. */
    async setItemDisabled(id, disabled) {
        this.itemStates = new Map(this.itemStates.set(id, { ...this.itemStates.get(id), id, disabled }));
    }
    /** Toggle visibility of an item. */
    async setItemHidden(id, hidden) {
        this.itemStates = new Map(this.itemStates.set(id, { ...this.itemStates.get(id), id, hidden }));
        requestAnimationFrame(() => this.recalcOverflow());
    }
    /** Set loading state on a specific button item. */
    async setItemLoading(id, loading) {
        this.itemStates = new Map(this.itemStates.set(id, { ...this.itemStates.get(id), id, loading }));
    }
    /** Toggle active state of a toggleable button. */
    async toggleItem(id) {
        const current = this.itemStates.get(id) ?? { id };
        this.itemStates = new Map(this.itemStates.set(id, { ...current, active: !current.active }));
    }
    /** Collapse / expand the toolbar (mobile). */
    async setCollapsed(collapsed) {
        this.isCollapsed = collapsed;
    }
    /** Open or close the overflow menu. */
    async setOverflowOpen(open) {
        this.isOverflowOpen = open;
    }
    /** Get a snapshot of current toolbar state. */
    async getStateSnapshot() {
        const snapshot = {
            activeItems: Array.from(this.itemStates.entries()).filter(([, s]) => s.active).map(([id]) => id),
            itemStates: Object.fromEntries(this.itemStates),
            timestamp: Date.now(),
        };
        return snapshot;
    }
    async restoreStateSnapshot(snapshot) {
        this.itemStates = new Map(Object.entries(snapshot.itemStates));
        requestAnimationFrame(() => this.recalcOverflow());
    }
    /** Undo last value change. */
    async undo() {
        const prev = this.undoStack.pop();
        if (!prev)
            return;
        const current = await this.getStateSnapshot();
        this.redoStack.push(current);
        await this.restoreStateSnapshot(prev);
    }
    /** Redo last undone change. */
    async redo() {
        const next = this.redoStack.pop();
        if (!next)
            return;
        const current = await this.getStateSnapshot();
        this.undoStack.push(current);
        await this.restoreStateSnapshot(next);
    }
    /** Focus a specific toolbar item by id. */
    async focusItem(id) {
        this.focusableRefs.get(id)?.focus();
    }
    // ─── Private helpers ───────────────────────────────────────────────────────
    parseItems() {
        if (!this.items) {
            this.parsedItems = [];
            return;
        }
        if (typeof this.items === 'string') {
            try {
                this.parsedItems = JSON.parse(this.items);
            }
            catch {
                this.parsedItems = [];
            }
        }
        else {
            this.parsedItems = this.items;
        }
    }
    parseSchema() {
        if (!this.schema) {
            this.parsedSchema = null;
            return;
        }
        if (typeof this.schema === 'string') {
            try {
                this.parsedSchema = JSON.parse(this.schema);
            }
            catch {
                this.parsedSchema = null;
            }
        }
        else {
            this.parsedSchema = this.schema;
        }
    }
    initItemStates() {
        const allItems = this.getAllItems();
        allItems.forEach(item => {
            if (!this.itemStates.has(item.id)) {
                const state = { id: item.id, disabled: item.disabled };
                if ('value' in item)
                    state.value = item.value;
                if ('checked' in item)
                    state.value = item.checked;
                if ('active' in item)
                    state.active = item.active;
                this.itemStates.set(item.id, state);
            }
        });
    }
    getAllItems() {
        const flat = [];
        const collect = (items) => {
            items?.forEach(item => {
                flat.push(item);
                if (item.type === 'group')
                    collect(item.items);
            });
        };
        if (this.parsedSchema) {
            collect(this.parsedSchema.left ?? []);
            collect(this.parsedSchema.center ?? []);
            collect(this.parsedSchema.right ?? []);
            collect(this.parsedSchema.overflow ?? []);
        }
        else {
            collect(this.parsedItems);
        }
        return flat;
    }
    findItem(id) {
        return this.getAllItems().find(i => i.id === id) ?? null;
    }
    recalcOverflow() {
        if (this.overflowStrategy !== 'dropdown')
            return;
        const toolbar = this.toolbarBodyRef;
        if (!toolbar)
            return;
        const newOverflowed = new Set();
        this.isMobile = window.innerWidth <= this.mobileBreakpoint;
        if (this.isMobile && this.isCollapsed) {
            // In collapsed mobile mode, everything overflows
            this.getAllItems().forEach(i => {
                if (i.type !== 'separator' && i.type !== 'spacer')
                    newOverflowed.add(i.id);
            });
        }
        else {
            const isHorizontal = this.orientation === 'horizontal';
            const containerSize = isHorizontal ? toolbar.clientWidth : toolbar.clientHeight;
            const overflowBtnSize = 48; // reserve space for the "More" button
            let usedSize = 0;
            // Sort by priority descending so high-priority items get space first
            const sortedItems = [...this.getAllItems()]
                .filter(i => i.type !== 'separator' && i.type !== 'spacer')
                .sort((a, b) => (b.priority ?? 0) - (a.priority ?? 0));
            sortedItems.forEach(item => {
                if (this.itemStates.get(item.id)?.hidden)
                    return;
                const el = this.el.shadowRoot?.querySelector(`[data-item-id="${item.id}"]`);
                if (!el)
                    return;
                const size = isHorizontal ? el.offsetWidth : el.offsetHeight;
                usedSize += size + 4; // +4 for gap
                if (usedSize > containerSize - overflowBtnSize && !item.pinToOverflow) {
                    newOverflowed.add(item.id);
                }
            });
        }
        const prevOverflowed = this.overflowedIds;
        if (JSON.stringify([...newOverflowed].sort()) !== JSON.stringify([...prevOverflowed].sort())) {
            this.overflowedIds = newOverflowed;
            this.toolbarOverflowChange.emit({
                overflowIds: [...newOverflowed],
                visibleIds: this.getAllItems().filter(i => !newOverflowed.has(i.id)).map(i => i.id),
            });
        }
    }
    pushUndoSnapshot() {
        this.getStateSnapshot().then(snap => {
            this.undoStack.push(snap);
            if (this.undoStack.length > 50)
                this.undoStack.shift();
            this.redoStack = [];
        });
    }
    handleItemClick(item, e) {
        if (this.disabled || this.itemStates.get(item.id)?.disabled || item.disabled)
            return;
        this.pushUndoSnapshot();
        if (item.type === 'button' || item.type === 'icon-button') {
            const btn = item;
            if (btn.toggleable) {
                const cur = this.itemStates.get(item.id) ?? { id: item.id };
                this.itemStates = new Map(this.itemStates.set(item.id, { ...cur, active: !cur.active }));
            }
        }
        this.toolbarItemClick.emit({ item, originalEvent: e });
    }
    handleValueChange(item, value) {
        if (this.disabled || this.itemStates.get(item.id)?.disabled)
            return;
        this.pushUndoSnapshot();
        const prev = this.itemStates.get(item.id)?.value;
        this.itemStates = new Map(this.itemStates.set(item.id, { ...this.itemStates.get(item.id), id: item.id, value }));
        this.toolbarItemChange.emit({ item, value, previousValue: prev });
    }
    isItemDisabled(item) {
        return this.disabled || !!item.disabled || !!(this.itemStates.get(item.id)?.disabled);
    }
    isItemHidden(item) {
        return !!(this.itemStates.get(item.id)?.hidden);
    }
    isItemLoading(item) {
        return !!(this.itemStates.get(item.id)?.loading);
    }
    isItemActive(item) {
        const state = this.itemStates.get(item.id);
        if (state?.active !== undefined)
            return state.active;
        return item.active ?? false;
    }
    computeItemValue(item) {
        const state = this.itemStates.get(item.id);
        if (state?.value !== undefined)
            return state.value;
        if ('value' in item)
            return item.value;
        if ('checked' in item)
            return item.checked;
        return undefined;
    }
    // ─── Drag and Drop ─────────────────────────────────────────────────────────
    handleDragStart(id) {
        this.dragSourceId = id;
    }
    handleDrop(targetId) {
        if (!this.dragSourceId || this.dragSourceId === targetId)
            return;
        const items = [...this.parsedItems];
        const fromIdx = items.findIndex(i => i.id === this.dragSourceId);
        const toIdx = items.findIndex(i => i.id === targetId);
        if (fromIdx < 0 || toIdx < 0)
            return;
        const [moved] = items.splice(fromIdx, 1);
        items.splice(toIdx, 0, moved);
        this.parsedItems = [...items];
        this.dragSourceId = null;
        this.toolbarReorder.emit(items);
    }
    // ─── Render Helpers ────────────────────────────────────────────────────────
    renderItem(item, inOverflow = false) {
        if (this.isItemHidden(item))
            return null;
        if (!inOverflow && this.overflowedIds.has(item.id) && this.overflowStrategy === 'dropdown')
            return null;
        const disabled = this.isItemDisabled(item);
        const loading = this.isItemLoading(item);
        switch (item.type) {
            case 'button':
            case 'icon-button':
                return this.renderButton(item, disabled, loading, inOverflow);
            case 'dropdown':
                return this.renderDropdown(item, disabled);
            case 'input':
            case 'search':
                return this.renderInput(item, disabled, inOverflow);
            case 'toggle':
            case 'switch':
                return this.renderToggle(item, disabled, inOverflow);
            case 'toggle-group':
                return this.renderToggleGroup(item, disabled, inOverflow);
            case 'avatar':
                return this.renderAvatar(item, inOverflow);
            case 'separator':
                return this.renderSeparator();
            case 'spacer':
                return h("span", { class: "toolbar-spacer", style: { flex: String(item.flex ?? 1) } });
            case 'text':
                return this.renderText(item);
            case 'badge':
                return this.renderBadge(item);
            case 'custom':
                return this.renderCustom(item);
            case 'group':
                return this.renderGroup(item, inOverflow);
            default:
                return null;
        }
    }
    renderButton(item, disabled, loading, inOverflow) {
        const active = this.isItemActive(item);
        const lib = item.iconLibrary ?? this.iconLibrary;
        const isIconOnly = item.iconOnly ?? (!item.label || this.iconOnly);
        if (inOverflow) {
            return (h("li", { class: { 'overflow-item': true, 'is-active': active, 'is-disabled': disabled }, role: "menuitem", "aria-disabled": disabled ? 'true' : null, onClick: disabled ? null : (e) => { this.handleItemClick(item, e); this.isOverflowOpen = false; }, onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        this.handleItemClick(item, e);
                        this.isOverflowOpen = false;
                    }
                }, tabIndex: disabled ? -1 : 0, "data-item-id": item.id }, item.icon && h("ui-icon", { name: item.icon, library: lib, size: "16px" }), h("span", { class: "overflow-item-label" }, item.label ?? item.id), active && h("span", { class: "overflow-item-check" }, "\u2713")));
        }
        // Map toolbar variant names to ui-button variant
        const btnVariant = (item.variant === 'ghost' || item.variant === 'outline' || !item.variant)
            ? (item.variant ?? 'ghost')
            : item.variant;
        return (h("div", { class: { 'toolbar-item': true, 'toolbar-item--button': true, [item.className ?? '']: !!item.className }, "data-item-id": item.id, draggable: this.reorderable, onDragStart: () => this.handleDragStart(item.id), onDrop: () => this.handleDrop(item.id), onDragOver: (e) => e.preventDefault() }, h("ui-button", { label: isIconOnly ? undefined : item.label, icon: item.icon, "icon-library": lib, "icon-only": isIconOnly, variant: btnVariant, size: this.size, disabled: disabled, loading: loading, selected: active, active: active, noRipple: true, href: item.href, target: item.target, tooltip: item.tooltip, "aria-label": item.ariaLabel ?? (isIconOnly ? item.label : undefined), badge: item.badge != null ? String(item.badge) : undefined, ref: el => el && this.focusableRefs.set(item.id, el), onButtonClick: disabled ? null : (e) => this.handleItemClick(item, e.detail) })));
    }
    renderDropdown(item, disabled) {
        const value = this.computeItemValue(item) ?? '';
        const lib = item.iconLibrary ?? this.iconLibrary;
        return (h("div", { class: { 'toolbar-item': true, 'toolbar-item--dropdown': true, 'is-disabled': disabled, [item.className ?? '']: !!item.className }, "data-item-id": item.id, title: item.tooltip }, h("ui-dropdown", { options: item.options, value: value, placeholder: item.placeholder ?? item.label ?? 'Select', disabled: disabled, multiSelect: item.multiSelect, searchable: item.searchable, clearable: item.clearable, size: this.size,
            //   showSelectedMarker={item.showSelectedMarker !== false}
            //  selectedMarkerIcon={item.selectedMarkerIcon ?? 'check'}
            // selectedMarkerLabel={item.selectedMarkerLabel ?? ''}
            onDropdownChange: (e) => this.handleValueChange(item, e.detail?.value) }, item.icon && h("ui-icon", { slot: "prefix", name: item.icon, library: lib, size: "16px" }))));
    }
    renderInput(item, disabled, inOverflow) {
        if (inOverflow)
            return null;
        const value = this.computeItemValue(item) ?? '';
        const handleChange = (val) => {
            const debounce = item.debounce ?? this.inputDebounce;
            if (this.inputDebounceTimers.has(item.id))
                clearTimeout(this.inputDebounceTimers.get(item.id));
            const timer = setTimeout(() => this.handleValueChange(item, val), debounce);
            this.inputDebounceTimers.set(item.id, timer);
        };
        return (h("div", { class: { 'toolbar-item': true, 'toolbar-item--input': true, 'is-disabled': disabled, [item.className ?? '']: !!item.className }, "data-item-id": item.id, style: { minWidth: item.minWidth, maxWidth: item.maxWidth } }, h("ui-input", { value: value, placeholder: item.placeholder ?? (item.type === 'search' ? 'Search…' : ''), disabled: disabled, size: this.size, clearable: item.clearable, "prefix-icon": item.type === 'search' ? 'search' : item.icon, "icon-library": this.iconLibrary, ref: el => el && this.focusableRefs.set(item.id, el), onInputChange: (e) => handleChange(e.detail) })));
    }
    renderToggle(item, disabled, inOverflow) {
        const checked = this.computeItemValue(item) ?? false;
        if (inOverflow) {
            return (h("li", { class: { 'overflow-item': true, 'overflow-item--toggle': true, 'is-disabled': disabled }, role: "menuitemcheckbox", "aria-checked": String(checked), "aria-disabled": disabled ? 'true' : null, tabIndex: disabled ? -1 : 0, "data-item-id": item.id, onClick: disabled ? null : () => this.handleValueChange(item, !checked), onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ')
                        this.handleValueChange(item, !checked);
                } }, h("span", { class: "overflow-item-label" }, item.label ?? item.id), h("span", { class: `overflow-toggle${checked ? ' is-on' : ''}` }, checked ? 'ON' : 'OFF')));
        }
        return (h("div", { class: { 'toolbar-item': true, 'toolbar-item--toggle': true, 'is-disabled': disabled, [item.className ?? '']: !!item.className }, "data-item-id": item.id, title: item.tooltip }, item.labelPosition !== 'right' && item.label && h("span", { class: "toolbar-toggle-label" }, item.label), h("ui-switch", { checked: checked, disabled: disabled, size: this.size, label: item.labelPosition === 'right' ? item.label : undefined, "label-position": item.labelPosition ?? 'right', ref: el => el && this.focusableRefs.set(item.id, el), onSwitchChange: (e) => this.handleValueChange(item, e.detail.checked) })));
    }
    renderToggleGroup(item, disabled, inOverflow) {
        if (inOverflow)
            return null;
        const value = this.computeItemValue(item) ?? '';
        return (h("div", { class: { 'toolbar-item': true, 'toolbar-item--toggle-group': true, 'is-disabled': disabled, [item.className ?? '']: !!item.className }, "data-item-id": item.id, title: item.tooltip }, h("ui-toggle-group", { options: item.options, value: Array.isArray(value) ? value.join(',') : value, disabled: disabled, size: (item.size ?? this.size), color: item.color, variant: item.variant, shape: item.shape, "selection-mode": item.selectionMode ?? 'single', onToggleGroupChange: (e) => this.handleValueChange(item, e.detail.value) })));
    }
    renderAvatar(item, inOverflow) {
        if (inOverflow) {
            return (h("li", { class: { 'overflow-item': true, 'overflow-item--avatar': true }, role: "menuitem", tabIndex: 0, "data-item-id": item.id }, h("ui-avatar", { src: item.src, name: item.name, size: item.size ?? '24px', status: item.status, shape: "circle" }), item.name && h("span", { class: "overflow-item-label" }, item.name)));
        }
        return (h("div", { class: { 'toolbar-item': true, 'toolbar-item--avatar': true, 'is-clickable': item.clickable, [item.className ?? '']: !!item.className }, "data-item-id": item.id, title: item.tooltip ?? item.name, role: item.clickable ? 'button' : null, tabIndex: item.clickable ? 0 : null, ref: el => item.clickable && el && this.focusableRefs.set(item.id, el), onClick: item.clickable ? (e) => this.handleItemClick(item, e) : null, onKeyDown: (e) => {
                if (item.clickable && (e.key === 'Enter' || e.key === ' '))
                    this.handleItemClick(item, e);
            } }, h("ui-avatar", { src: item.src, name: item.name, size: item.size ?? '28px', status: item.status, shape: "circle" }), item.badge != null && h("span", { class: "toolbar-badge toolbar-badge--primary" }, item.badge)));
    }
    renderSeparator() {
        return (h("div", { class: `toolbar-separator${this.orientation === 'vertical' ? ' toolbar-separator--horizontal' : ''}`, role: "separator", "aria-orientation": this.orientation === 'vertical' ? 'horizontal' : 'vertical' }));
    }
    renderText(item) {
        return (h("span", { class: { 'toolbar-item': true, 'toolbar-text': true, 'toolbar-text--bold': item.bold, 'toolbar-text--muted': item.muted, [item.className ?? '']: !!item.className }, "data-item-id": item.id }, item.content));
    }
    renderBadge(item) {
        return (h("span", { class: `toolbar-item toolbar-status-badge toolbar-status-badge--${item.color ?? 'primary'}${item.dot ? ' is-dot' : ''}`, "data-item-id": item.id }, !item.dot && item.label));
    }
    renderCustom(item) {
        if (item.component) {
            const Tag = item.component;
            return h(Tag, { "data-item-id": item.id, ...(item.componentProps ?? {}) });
        }
        if (item.html) {
            return h("div", { class: "toolbar-item toolbar-item--custom", "data-item-id": item.id, innerHTML: item.html });
        }
        return null;
    }
    renderGroup(item, inOverflow) {
        const collapsed = this.itemStates.get(item.id)?.active === false;
        return (h("div", { class: { 'toolbar-group': true, 'toolbar-group--divider': item.divider, 'is-collapsed': collapsed, [item.className ?? '']: !!item.className }, "data-item-id": item.id, role: "group", "aria-label": item.label }, item.label && (h("span", { class: "toolbar-group__label", onClick: item.collapsible ? () => {
                const cur = this.itemStates.get(item.id) ?? { id: item.id };
                this.itemStates = new Map(this.itemStates.set(item.id, { ...cur, active: !cur.active }));
            } : null }, item.label)), !collapsed && item.items.map(child => this.renderItem(child, inOverflow))));
    }
    renderOverflowMenu() {
        const overflowItems = this.getAllItems().filter(i => this.overflowedIds.has(i.id) || i.pinToOverflow);
        if (overflowItems.length === 0)
            return null;
        return (h("div", { class: `toolbar-overflow${this.isOverflowOpen ? ' is-open' : ''}` }, h("ui-button", { class: "toolbar-overflow__btn toolbar-item toolbar-item--button toolbar-item--ghost", "aria-haspopup": "menu", "aria-expanded": String(this.isOverflowOpen), "aria-label": this.overflowLabel, title: this.overflowLabel, variant: "ghost", onButtonClick: (e) => { e.detail.stopPropagation(); this.isOverflowOpen = !this.isOverflowOpen; }, icon: this.overflowIcon, "icon-library": this.iconLibrary, badge: String(overflowItems.length), iconOnly: true }), this.isOverflowOpen && (h("ul", { class: "toolbar-overflow__menu", style: { overflow: 'visible' }, role: "menu", "aria-label": this.overflowLabel }, overflowItems.map(item => this.renderItem(item, true))))));
    }
    renderZone(items, zone) {
        if (!items?.length)
            return null;
        return (h("div", { class: `toolbar-zone toolbar-zone--${zone}`, role: "group", "aria-label": zone }, items.map(item => this.renderItem(item))));
    }
    // ─── Main Render ───────────────────────────────────────────────────────────
    render() {
        const hasSchema = !!this.parsedSchema;
        const bodyStyle = {
            gap: this.gap,
            padding: this.variant === 'inline' ? '0' : this.padding,
        };
        const hostClasses = {
            [`variant-${this.variant}`]: true,
            [`orientation-${this.orientation}`]: true,
            [`position-${this.position}`]: true,
            [`size-${this.size}`]: true,
            [`elevation-${this.elevation}`]: true,
            [`align-${this.alignment}`]: true,
            'is-rounded': this.rounded,
            'is-bordered': this.bordered,
            'is-disabled': this.disabled,
            'is-loading': this.loading,
            'is-collapsed': this.isCollapsed,
            'is-mobile': this.isMobile,
            'is-overflow-open': this.isOverflowOpen,
            'has-open-overlay': this.isOverflowOpen || this.openChildDropdowns > 0,
            'has-zone-dividers': this.zoneDividers,
            'has-overflow': this.overflowedIds.size > 0,
            [`overflow-${this.overflowStrategy}`]: true,
        };
        const stickyStyle = {};
        if (this.position === 'sticky' || this.position === 'fixed') {
            stickyStyle[this.stickyEdge] = '0';
        }
        if (this.maxSize) {
            stickyStyle[this.orientation === 'horizontal' ? 'maxWidth' : 'maxHeight'] = this.maxSize;
        }
        return (h(Host, { key: 'd436d5f609b139d2811c68c158301a15c5ff3523', class: hostClasses, style: stickyStyle, role: "toolbar", "aria-label": this.toolbarAriaLabel, "aria-disabled": this.disabled ? 'true' : null }, this.isMobile && (h("ui-button", { key: 'ef9bf93650048b4c83d82cc90a59932abdb65a75', class: "toolbar-mobile-toggle", "aria-expanded": String(!this.isCollapsed), "aria-label": this.isCollapsed ? 'Expand toolbar' : 'Collapse toolbar', onButtonClick: () => { this.isCollapsed = !this.isCollapsed; }, variant: "ghost", icon: this.isCollapsed ? 'menu' : 'x', "icon-library": this.iconLibrary, iconOnly: true })), (!this.isMobile || !this.isCollapsed) && (h("div", { key: '14f8f470194941da1eb3ebf5a612cbed4fd9870b', class: "toolbar-body", style: bodyStyle, ref: el => this.toolbarBodyRef = el }, h("slot", { key: 'e717108882c11dfd3878a12a89d5b57146b3c527', name: "before" }), hasSchema ? (h("div", { class: "toolbar-zones" }, this.renderZone(this.parsedSchema.left ?? [], 'left'), this.zoneDividers && (this.parsedSchema.left?.length > 0) && (this.parsedSchema.center?.length > 0) && this.renderSeparator(), this.renderZone(this.parsedSchema.center ?? [], 'center'), this.zoneDividers && (this.parsedSchema.center?.length > 0) && (this.parsedSchema.right?.length > 0) && this.renderSeparator(), this.renderZone(this.parsedSchema.right ?? [], 'right'))) : (this.parsedItems.map(item => this.renderItem(item))), h("slot", { key: '2306eefd8213f540eb4b6034d1e975bcbcbd244e', name: "left" }), h("slot", { key: '21fc5a66550c40f54e14ff69027bf66dde88eb75', name: "center" }), h("slot", { key: '54c87776c5cacc375c2be3a2f15cfac0733c5d2f', name: "right" }), h("slot", { key: '2503cce255fae015cbbe170392f7eda94c881e12' }), this.overflowStrategy === 'dropdown' && this.renderOverflowMenu(), h("slot", { key: '6fab60c7236967cc9cd0619fa917f8812375e1d6', name: "after" })))));
    }
    static get watchers() { return {
        "items": [{
                "onItemsChange": 0
            }],
        "schema": [{
                "onSchemaChange": 0
            }]
    }; }
};
Toolbar.style = toolbarCss();

export { Toolbar as ui_toolbar };
