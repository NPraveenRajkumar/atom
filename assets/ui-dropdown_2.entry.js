import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';
import { c as calculateUniversalPlacement } from './dom-BMFah5q3.js';

/**
 * Utility for managing ARIA live regions to announce dynamic content to screen readers.
 */
class AriaLiveManager {
    container;
    politeRegion;
    assertiveRegion;
    constructor() {
        this.init();
    }
    init() {
        const existing = document.getElementById('aria-live-regions');
        if (existing) {
            this.container = existing;
            this.politeRegion = document.getElementById('aria-live-polite');
            this.assertiveRegion = document.getElementById('aria-live-assertive');
            return;
        }
        this.container = document.createElement('div');
        this.container.id = 'aria-live-regions';
        this.container.style.position = 'absolute';
        this.container.style.width = '1px';
        this.container.style.height = '1px';
        this.container.style.padding = '0';
        this.container.style.margin = '-1px';
        this.container.style.overflow = 'hidden';
        this.container.style.clip = 'rect(0, 0, 0, 0)';
        this.container.style.whiteSpace = 'nowrap';
        this.container.style.border = '0';
        this.politeRegion = this.createRegion('polite');
        this.assertiveRegion = this.createRegion('assertive');
        this.container.appendChild(this.politeRegion);
        this.container.appendChild(this.assertiveRegion);
        document.body.appendChild(this.container);
    }
    createRegion(politeness) {
        const el = document.createElement('div');
        el.id = `aria-live-${politeness}`;
        el.setAttribute('aria-live', politeness);
        el.setAttribute('aria-atomic', 'true');
        return el;
    }
    /**
     * Announce a message to screen readers.
     * @param message The text to announce.
     * @param politeness 'polite' (default) waits for the user to pause, 'assertive' interrupts.
     */
    announce(message, politeness = 'polite') {
        if (!this.container)
            this.init();
        const region = politeness === 'assertive' ? this.assertiveRegion : this.politeRegion;
        // Clear and reset content to ensure announcement triggers even if same message
        region.textContent = '';
        // Tiny delay to ensure the clearing is registered
        setTimeout(() => {
            region.textContent = message;
        }, 50);
    }
}
const ariaLive = new AriaLiveManager();

const dropdownCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:root{--dd-primary:var(--color-primary, #2563eb);--dd-border:var(--border-default, #cfd8e3);--dd-border-strong:var(--border-strong, #b4c1d1);--dd-focus:var(--color-primary-hover, #2563eb);--dd-text:var(--label-color, var(--text-primary, var(--color-on-surface, #10213a)));--dd-muted:var(--label-subtitle-color, var(--text-secondary, var(--color-on-surface-muted, #62748a)));--dd-bg:var(--bg-primary, #ffffff);--dd-panel:rgba(255, 255, 255, 0.98);--dd-panel-solid:var(--bg-primary, #ffffff);--dd-hover:var(--bg-primary, #f3f8ff);--dd-selected:var(--dropdown-selected-bg, var(--color-success-light, #ecfdf5));--dd-selected-bg:var(--dropdown-selected-bg, var(--color-success-light, #ecfdf5));--dd-selected-text:var(--dropdown-selected-text, var(--color-success, var(--color-on-primary, #059669)));--dd-selected-icon:var(--dropdown-selected-icon, var(--color-success, var(--color-on-primary, #059669)));--dd-selected-border:var(--dropdown-selected-border, var(--color-success-border, var(--color-on-primary-border, #a7f3d0)));--dd-transition:all 0.25s cubic-bezier(0.34, 1.56, 0.64, 1);--dd-error:var(--color-danger, #ef4444);--dd-radius-sm:8px;--dd-radius-md:10px}.dropdown-label{display:block;font-size:11px;font-weight:700;color:var(--dd-text);margin-bottom:8px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.65;cursor:default}.dropdown-container{position:relative;display:inline-flex;flex-direction:column;width:max-content;min-width:50px;vertical-align:middle}.dropdown-full-width{width:100%;display:block;}.dropdown-fit-content{width:max-content;min-width:unset}.dropdown-fit-content .ui-dropdown-menu{width:max-content;min-width:100%;white-space:nowrap}.dropdown-fit-content .dropdown-trigger{width:max-content}.dropdown-trigger{display:flex;align-items:center;justify-content:space-between;width:100%;background:var(--bg-primary, #ffffff);border:1px solid var(--dd-border);border-radius:var(--dd-radius-md);cursor:pointer;transition:var(--dd-transition);-webkit-user-select:none;user-select:none;gap:12px;padding:0 16px;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05);color:var(--dd-text);font-weight:500;line-height:normal;box-sizing:border-box}.dropdown-trigger:hover{border-color:var(--dd-border-strong);box-shadow:0 10px 22px rgba(var(--color-primary-rgb, 37, 99, 235), 0.08)}.dropdown-open .dropdown-trigger{border-color:var(--dd-focus);background:var(--dd-bg);box-shadow:0 0 0 2px rgba(var(--color-primary-rgb, 37, 99, 235), 0.1)}.dropdown-disabled .dropdown-trigger{background:var(--bg-secondary, #f1f5f9);cursor:not-allowed;opacity:0.7;border-color:var(--dd-border);box-shadow:none}.dropdown-disabled .dropdown-trigger:hover{background:var(--bg-secondary, #f1f5f9)}.dropdown-sm .dropdown-trigger{padding:0 12px;font-size:13px;min-height:32px;height:32px;border-radius:var(--dd-radius-sm)}.dropdown-md .dropdown-trigger{padding:0 16px;font-size:14px;min-height:40px;height:40px;border-radius:var(--dd-radius-md)}.dropdown-lg .dropdown-trigger{padding:0 20px;font-size:15px;min-height:44px;height:44px;border-radius:var(--dd-radius-md)}.dropdown-shape-square .dropdown-trigger,.dropdown-shape-square .dropdown-menu{border-radius:0 !important}.dropdown-shape-rounded .dropdown-trigger,.dropdown-shape-rounded .dropdown-menu{border-radius:20px !important}.dropdown-shape-pill .dropdown-trigger{border-radius:999px !important}.dropdown-shape-pill .dropdown-menu{border-radius:28px !important}.dropdown-appearance-button .dropdown-trigger{background:var(--dd-primary);border-color:var(--dd-primary);color:var(--color-primary-text, var(--dd-text, #ffffff));box-shadow:0 4px 14px 0 rgba(var(--color-primary-rgb, 37, 99, 235), 0.39)}.dropdown-appearance-button .dropdown-trigger:hover{background:var(--color-primary, #1d4ed8);border-color:var(--color-primary, #1d4ed8);transform:translateY(-1px);box-shadow:0 6px 20px rgba(var(--color-primary-rgb, 37, 99, 235), 0.23)}.dropdown-appearance-button .dropdown-trigger:active{transform:translateY(0)}.variant-glass .dropdown-trigger{background:rgba(255, 255, 255, 0.08);backdrop-filter:blur(12px) saturate(180%);border:1px solid rgba(255, 255, 255, 0.12);color:var(--text-standard, #ffffff);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.07)}.variant-glass .dropdown-trigger:hover{background:rgba(255, 255, 255, 0.12);border-color:rgba(255, 255, 255, 0.2)}.variant-glass .dropdown-display,.variant-glass .dropdown-placeholder{color:var(--text-standard, #ffffff)}.variant-glass.dropdown-open .dropdown-trigger{background:rgba(255, 255, 255, 0.15);border-color:var(--dd-focus)}.variant-toggle{min-width:unset !important}.variant-toggle .dropdown-trigger{background:transparent;border-color:transparent;padding:0 !important;min-height:unset !important;height:auto !important;box-shadow:none;gap:4px}.variant-toggle .dropdown-trigger:hover{background:var(--dd-hover);border-color:var(--dd-border)}.variant-toggle.dropdown-open .dropdown-trigger{background:var(--dd-hover);border-color:var(--dd-focus);box-shadow:0 0 0 2px rgba(var(--color-primary-rgb, 37, 99, 235), 0.1)}.variant-toggle .dropdown-display{padding:2px}.dropdown-appearance-button .dropdown-display{color:var(--color-primary-text, var(--dd-text, #ffffff))}.dropdown-appearance-button .dropdown-clear,.dropdown-appearance-button .dropdown-arrow{color:var(--color-primary-text, var(--dd-text, #ffffff))}.dropdown-display{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;display:flex;align-items:center}.dropdown-has-chips .dropdown-trigger{height:auto;min-height:48px;padding:6px 16px}.dropdown-chips{display:flex;flex-wrap:wrap;gap:6px;padding:4px 0;width:100%}.dropdown-placeholder{color:var(--label-subtitle-color, #91a0b4);font-weight:400}.dropdown-icons{display:flex;align-items:center;gap:8px;flex-shrink:0}.dropdown-clear{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;background:var(--bg-primary, #eef4fb);color:var(--dd-muted);transition:var(--dd-transition)}.dropdown-clear:hover{background:var(--bg-primary, #e2ecf8);color:var(--dd-text)}.dropdown-arrow{display:flex;align-items:center;color:var(--dd-muted);transition:transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)}.dropdown-arrow.open{transform:rotate(180deg);color:var(--dd-focus)}.ui-dropdown-menu{position:fixed;display:flex !important;flex-direction:column !important;gap:0;background:var(--bg-primary, #ffffff) !important;border:1px solid rgba(0, 0, 0, 0.08);border-radius:16px;box-shadow:0 20px 50px rgba(0, 0, 0, 0.2), 0 10px 20px rgba(0, 0, 0, 0.1);z-index:10001;overflow:hidden;animation:dropdownPop 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);width:auto;min-width:0}.ui-dropdown-menu--local{position:absolute}@keyframes dropdownPop{from{opacity:0;transform:translateY(12px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}.dropdown-menu-top{top:auto;bottom:calc(100% + 8px);animation:dropdownPopTop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes dropdownPopTop{from{opacity:0;transform:translateY(-4px) scale(0.97)}to{opacity:1;transform:translateY(0) scale(1)}}.dropdown-search{padding:12px;border-bottom:1px solid var(--border-subtle, #edf2f7);background:var(--dd-panel)}.dropdown-search-container{position:relative;display:flex;align-items:center}.dropdown-search-icon{position:absolute;left:12px;color:var(--dd-muted);pointer-events:none}.dropdown-search-input{width:100%;padding:11px 13px 11px 36px;background:var(--bg-primary, #f9fbfe);border:1px solid var(--border-default, #d4deea);border-radius:12px;font-size:14px;color:var(--dd-text);outline:none;transition:var(--dd-transition)}.dropdown-search-input::placeholder{color:var(--dd-muted);opacity:0.8}.dropdown-search-input:focus{background:var(--bg-primary, #ffffff);border-color:var(--dd-focus);box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 37, 99, 235), 0.1)}.dropdown-options{flex:1;min-height:0;overflow-y:auto;padding:8px;background:var(--dd-panel-solid)}.dropdown-menu-sm{border-radius:12px;--dd-option-min-height:28px;--dd-option-padding-y:8px;--dd-option-padding-x:12px;--dd-option-gap:10px;--dd-option-spacing-y:2px}.dropdown-menu-sm .dropdown-search{padding:8px}.dropdown-menu-sm .dropdown-search-input{min-height:34px;font-size:13px;padding:8px 12px 8px 34px}.dropdown-menu-sm .dropdown-options{padding:6px}.dropdown-menu-sm .dropdown-option-label{font-size:13px}.dropdown-menu-sm .dropdown-option-subtitle,.dropdown-menu-sm .dropdown-empty,.dropdown-menu-sm .dropdown-group-header,.dropdown-menu-sm .dropdown-bulk-actions,.dropdown-menu-sm .dropdown-select-all,.dropdown-menu-sm .dropdown-clear-all{font-size:12px}.dropdown-menu-md{border-radius:16px;--dd-option-min-height:30px;--dd-option-padding-y:10px;--dd-option-padding-x:16px;--dd-option-gap:12px;--dd-option-spacing-y:4px}.dropdown-menu-lg{border-radius:18px;--dd-option-min-height:32px;--dd-option-padding-y:12px;--dd-option-padding-x:18px;--dd-option-gap:14px;--dd-option-spacing-y:6px}.dropdown-menu-lg .dropdown-search{padding:14px}.dropdown-menu-lg .dropdown-search-input{min-height:46px;font-size:15px;padding:12px 14px 12px 40px}.dropdown-menu-lg .dropdown-options{padding:10px}.dropdown-menu-lg .dropdown-option-label{font-size:15px}.dropdown-menu-lg .dropdown-option-subtitle,.dropdown-menu-lg .dropdown-empty,.dropdown-menu-lg .dropdown-group-header,.dropdown-menu-lg .dropdown-bulk-actions,.dropdown-menu-lg .dropdown-select-all,.dropdown-menu-lg .dropdown-clear-all{font-size:14px}.dropdown-options::-webkit-scrollbar{width:5px}.dropdown-options::-webkit-scrollbar-track{background:transparent}.dropdown-options::-webkit-scrollbar-thumb{background:var(--color-primary, #cbd5e1);border-radius:10px}.dropdown-options::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #94a3b8)}.dropdown-option-wrapper{position:relative}.ui-dropdown-option,.dropdowndata{display:flex !important;flex-direction:row !important;flex-wrap:nowrap !important;align-items:center;gap:var(--dd-option-gap, 12px);background-color:transparent;transition:var(--dd-transition);border-radius:12px;margin:var(--dd-option-spacing-y, 4px) 0;padding:var(--dd-option-padding-y, 10px) var(--dd-option-padding-x, 16px);min-height:var(--dd-option-min-height, 48px);width:100%;box-sizing:border-box}.dropdown-menu-sm .ui-dropdown-option,.dropdown-menu-sm .dropdowndata{border-radius:10px}.dropdown-menu-lg .ui-dropdown-option,.dropdown-menu-lg .dropdowndata{border-radius:14px}.ui-dropdown-option:hover,.dropdowndata:hover,.dropdown-option-highlighted{background:var(--dd-hover);border-color:var(--color-primary, #d7e7ff);box-shadow:0 10px 24px rgba(var(--color-primary-rgb, 37, 99, 235), 0.08);transform:translateY(-1px)}.ui-dropdown-option-selected{background:var(--dd-selected-bg) !important;color:var(--dd-selected-text) !important;font-weight:600;border-radius:12px;margin:4px 0;box-shadow:none !important}.ui-dropdown-option-selected .dropdown-option-label{color:var(--dd-selected-text) !important;font-weight:600 !important}.dropdown-option-disabled{opacity:0.4;cursor:not-allowed;pointer-events:none}.dropdown-option-parent{font-weight:600;letter-spacing:-0.01em}.dropdown-option-left{display:flex;align-items:center;justify-content:center;flex-shrink:0}.dropdown-option-icon{display:flex;align-items:center;justify-content:center;font-size:18px;color:var(--dd-muted);line-height:1}.dropdown-option-text{flex:1;display:flex;flex-direction:column;align-items:flex-start;gap:2px;min-width:0;overflow:hidden;line-height:normal;padding:4px 0}.dropdown-option-text .dropdown-option-content{width:100%;min-width:0;overflow:hidden}.dropdown-option-label{white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%;font-size:14px;font-weight:500;color:var(--dd-text, var(--color-on-surface, #10213a))}.dropdown-option-subtitle{font-size:12px;color:var(--dd-muted, var(--color-on-surface-muted, #62748a));font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.dropdown-option-description{font-size:12px;color:var(--dd-muted, var(--color-on-surface-muted, #62748a));font-weight:400;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;width:100%}.dropdown-option-right{display:flex !important;flex-direction:row !important;flex-wrap:nowrap !important;align-items:center;justify-content:flex-end;flex-shrink:0;margin-left:auto;gap:8px}.dropdown-option-right:empty{display:none}.dropdown-option-tag{flex-shrink:0}.dropdown-option-right-icon{display:flex;align-items:center;justify-content:center;color:var(--dd-muted);opacity:0.8}.ui-dropdown-selected-marker{display:inline-flex !important;align-items:center !important;justify-content:center !important;flex-shrink:0 !important;animation:checkPop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-dropdown-selected-marker-wrap{display:inline-flex;align-items:center;gap:4px;flex-shrink:0}.ui-dropdown-selected-marker-label{font-size:11px;font-weight:500;color:var(--dd-selected-text);white-space:nowrap;animation:checkPop 0.2s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes checkPop{from{transform:scale(0.5);opacity:0}to{transform:scale(1);opacity:1}}.dropdown-checkbox{display:flex;align-items:center;justify-content:center;width:18px;height:18px;border:2px solid var(--color-primary, #cbd5e1);border-radius:5px;flex-shrink:0;transition:var(--dd-transition);background:var(--bg-primary, #ffffff);line-height:1}.dropdown-checkbox ui-icon{display:inline-flex;align-items:center;justify-content:center;color:var(--text-standard, #ffffff)}.dropdown-option-selected .dropdown-checkbox,.dropdown-checkbox.checked,.dropdown-checkbox.dropdown-checkbox-selected{background:var(--dd-primary);border-color:var(--dd-primary);box-shadow:0 0 0 2px rgba(var(--color-primary-rgb, 37, 99, 235), 0.2)}.dropdown-expand-icon{transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);color:var(--dd-muted);opacity:0.6}.dropdown-expand-icon.expanded{transform:rotate(90deg);color:var(--dd-primary);opacity:1}.dropdown-children{margin-left:20px;padding-left:12px;border-left:1px solid var(--dd-border);margin-top:-1px;margin-bottom:4px}.dropdown-empty{padding:32px 16px;font-size:14px}.dropdown-helper-text{margin-top:6px;font-size:12px;color:var(--dd-muted);display:flex;align-items:center;gap:6px;padding:0 4px}.dropdown-error-text{color:var(--dd-error);font-weight:500;animation:dropdownShake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}.dropdown-invalid .dropdown-trigger{border-color:var(--dd-error)}.dropdown-invalid .dropdown-trigger:hover{box-shadow:0 0 0 4px rgba(var(--color-danger-rgb, 239, 68, 68), 0.1)}@keyframes dropdownShake{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-4px, 0, 0)}40%,60%{transform:translate3d(4px, 0, 0)}}.dropdown-spinner{display:flex;animation:dropdownSpin 1s linear infinite;color:var(--dd-primary)}@keyframes dropdownSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.dropdown-group-header{padding:12px 14px 6px;font-size:11px;font-weight:700;color:var(--dd-muted);text-transform:uppercase;letter-spacing:0.05em;background:var(--dd-panel-solid)}.dropdown-select-all{display:flex;align-items:center;gap:8px;padding:8px 10px;cursor:pointer;font-weight:600;font-size:14px;color:var(--dd-primary);background:transparent;transition:var(--dd-transition);border-bottom:none;border-radius:10px;min-height:36px;flex:1;justify-content:flex-start}.dropdown-select-all.dropdown-select-all-with-clear{border-bottom:1px solid var(--dd-border)}.dropdown-select-all:hover{background:rgba(var(--color-primary-rgb, 37, 99, 235), 0.08)}.dropdown-select-all .dropdown-checkbox{width:18px;height:18px;border:1px solid var(--dd-border-strong);border-radius:4px;display:flex;align-items:center;justify-content:center;transition:var(--dd-transition)}.dropdown-select-all .dropdown-checkbox.checked{background-color:var(--dd-primary);border-color:var(--dd-primary)}.dropdown-skeleton{pointer-events:none}.dropdown-skeleton .dropdown-trigger{background:var(--bg-secondary, #f1f5f9);border-color:var(--border-subtle, #e2e8f0);box-shadow:none}.dropdown-skeleton .dropdown-skeleton-text{width:60%;height:14px;background:linear-gradient(90deg, var(--bg-primary, #e2e8f0) 25%, var(--bg-primary, #f8fafc) 50%, var(--bg-primary, #e2e8f0) 75%);background-size:200% 100%;animation:dropdownShimmer 1.5s infinite;border-radius:4px}.dropdown-skeleton .dropdown-skeleton-icon{width:16px;height:16px;background:var(--bg-primary, #e2e8f0);border-radius:4px}@keyframes dropdownShimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}.dropdown-separator{height:1px;background-color:var(--dd-border);margin:6px 10px;pointer-events:none}.dropdown-search-highlight{background-color:var(--bg-primary, #fef08a);color:var(--color-danger, #854d0e);border-radius:2px;padding:0 1px;font-weight:600}.dropdown-bulk-actions{display:flex;align-items:center;justify-content:space-between;padding:10px 12px;border-bottom:1px solid var(--dd-border);background:linear-gradient(180deg, var(--bg-primary, #fbfdff) 0%, var(--bg-primary, #f8fafc) 100%);font-size:13px;gap:12px}.dropdown-clear-all{display:flex;align-items:center;gap:8px;color:var(--color-danger, #ef4444);cursor:pointer;padding:8px 10px;border-radius:10px;transition:all 0.2s;font-weight:500;min-height:36px;justify-content:center;white-space:nowrap}.dropdown-clear-all:hover{background-color:var(--bg-primary, #fef2f2);color:var(--color-danger-hover, #dc2626)}.dropdown-menu-variant-nested-menu{overflow:visible}.dropdown-menu-variant-nested-menu .dropdown-options{overflow:visible;padding:6px}.dropdown-nested-columns{display:flex;align-items:stretch;min-width:max-content}.dropdown-nested-panel{min-width:210px;max-width:280px;padding:2px}.dropdown-nested-panel+.dropdown-nested-panel{border-left:1px solid var(--dd-border);margin-left:4px;padding-left:10px}.dropdown-menu-sm .dropdown-nested-panel{min-width:180px}.dropdown-menu-lg .dropdown-nested-panel{min-width:240px}.dropdown-nested-option{margin:2px 0}.dropdown-nested-option-active{background:var(--dd-hover);border-color:var(--dd-border-strong)}.variant-detailed .dropdown-trigger{border-color:var(--dd-border);border-radius:14px;min-height:48px;background:linear-gradient(180deg, var(--bg-primary, #ffffff) 0%, var(--bg-primary, #f8fbff) 100%);box-shadow:0 2px 8px rgba(15, 23, 42, 0.04);font-weight:500}.variant-detailed .dropdown-trigger:hover{border-color:var(--dd-border-strong);box-shadow:0 10px 22px rgba(var(--color-primary-rgb, 37, 99, 235), 0.08)}.variant-detailed.dropdown-open .dropdown-trigger{border-color:var(--dd-focus);box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 37, 99, 235), 0.14), 0 16px 32px rgba(var(--color-primary-rgb, 37, 99, 235), 0.14)}.variant-detailed .dropdown-menu{border-radius:20px !important;padding:6px !important;background:rgba(255, 255, 255, 0.98) !important;backdrop-filter:blur(20px) !important;box-shadow:0 20px 50px rgba(15, 23, 42, 0.22) !important}.variant-detailed .dropdown-options{padding:4px !important}.variant-detailed .ui-dropdown-option,.variant-detailed .dropdowndata{padding:12px 14px !important;border-radius:16px !important;margin:4px 0 !important;gap:14px !important;border:1px solid transparent !important;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1) !important}.variant-detailed .ui-dropdown-option:hover,.variant-detailed .ui-dropdown-option.dropdown-option-highlighted,.variant-detailed .dropdowndata:hover,.variant-detailed .dropdowndata.dropdown-option-highlighted{background:var(--bg-primary, #f0f7ff) !important;border-color:var(--border-subtle, #dbeafe) !important;transform:translateY(-1.5px) !important;box-shadow:0 8px 16px rgba(var(--color-primary-rgb, 37, 99, 235), 0.08) !important}.variant-detailed .ui-dropdown-option.ui-dropdown-option-selected,.variant-detailed .dropdowndata.ui-dropdown-option-selected{background:var(--dd-selected-bg) !important;border-color:var(--dd-selected-border) !important;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.5) !important}.variant-detailed .ui-dropdown-option.ui-dropdown-option-selected .dropdown-option-label,.variant-detailed .dropdowndata.ui-dropdown-option-selected .dropdown-option-label{color:var(--dd-selected-text) !important;font-weight:700 !important}.variant-detailed .dropdown-option-label{font-size:14px !important;font-weight:600 !important;color:var(--text-primary, #1e293b) !important;margin-bottom:2px !important}.variant-detailed .dropdown-option-subtitle{font-size:11px !important;color:var(--text-muted, #64748b) !important;font-weight:500 !important;text-transform:uppercase !important;letter-spacing:0.02em !important}.variant-detailed .dropdown-option-tag{font-size:10px !important;font-weight:700 !important;letter-spacing:0.05em !important;padding:4px 10px !important;border-radius:999px !important;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05) !important}.variant-detailed .dropdown-option-icon,.variant-detailed .dropdown-option-right-icon{font-size:20px !important;display:flex !important;align-items:center !important;justify-content:center !important}.variant-detailed .dropdown-option-right-icon{color:var(--color-primary, #cbd5e1) !important;transition:all 0.2s !important}.variant-detailed .dropdown-option-right-icon:hover{color:var(--color-warning, #f59e0b) !important;transform:scale(1.1) !important}.variant-detailed .ui-dropdown-selected-marker{display:inline-flex !important;align-items:center !important;justify-content:center !important;color:var(--dd-primary) !important;background:var(--bg-primary, #dbeafe) !important;padding:4px !important;border-radius:50% !important;flex-shrink:0 !important}.variant-detailed .dropdown-trigger-content{display:flex !important;align-items:center !important;gap:10px !important}.variant-detailed .dropdown-trigger-icon{color:var(--dd-primary, var(--color-primary, #10b981)) !important;font-size:18px !important;flex-shrink:0 !important}.variant-detailed .dropdown-trigger-label{overflow:hidden !important;text-overflow:ellipsis !important;white-space:nowrap !important}.variant-detailed .dropdown-expand-group{display:flex !important;align-items:center !important;gap:8px !important}.variant-detailed .dropdown-badge{background:var(--dd-primary, var(--color-primary, #10b981)) !important;color:var(--text-standard, #ffffff) !important;font-size:10px !important;font-weight:800 !important;height:18px !important;min-width:18px !important;padding:0 5px !important;border-radius:9px !important;display:flex !important;align-items:center !important;justify-content:center !important;box-shadow:0 4px 10px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3) !important;animation:badgePop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important}@keyframes badgePop{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}.dropdown-option:active{transform:scale(0.98);transition:transform 0.1s ease}.dropdown-option-selected.dropdowndata{position:relative;overflow:hidden}.dropdown-option-selected.dropdowndata::after{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:radial-gradient(circle, rgba(var(--color-primary-rgb, 59, 130, 246), 0.1) 0%, transparent 70%);pointer-events:none}`;

const Dropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChange = createEvent(this, "valueChange");
        this.dropdownOpen = createEvent(this, "dropdownOpen");
        this.dropdownClose = createEvent(this, "dropdownClose");
    }
    get hostElement() { return getElement(this); }
    /**
     * Options as JSON string or DropdownOption array
     */
    options = [];
    /**
     * Placeholder text
     */
    placeholder = 'Select an option';
    /**
     * Enable multi-select mode
     */
    multiSelect = false;
    /**
     * Enable cascading/hierarchical selection
     */
    cascading = false;
    /**
     * Selected value(s) - string for single, comma-separated for multi
     */
    value = '';
    /**
     * Disabled state
     */
    disabled = false;
    /**
     * Show search/filter input
     */
    searchable = false;
    /**
     * Maximum height of dropdown (in pixels)
     */
    maxHeight = 300;
    /**
     * Size variant
     */
    size = 'md';
    /**
     * Appearance: default dropdown or button-like (no arrow)
     */
    appearance = 'dropdown';
    /**
     * Aesthetic variant
     */
    variant = 'default';
    /**
     * Use chips for multi-select display
     */
    chipView = false;
    /**
     * Controls visibility of the arrow icon. If false, no arrow is shown.
     * Defaults to true for dropdown appearance; false when appearance is 'button'.
     */
    showArrow;
    /**
     * If true, dropdown positioning ignores transformed/positioned parent offsets.
     * Use this when the menu is portaled and should stay anchored to viewport coordinates.
     */
    ignoreParentPosition = true;
    /**
     * Show clear (✕) button when a value is selected.
     * - When not set (default): automatically shown for multi-select, hidden for single-select.
     * - Set to `true`  : always show the clear button (both single & multi).
     * - Set to `false` : always hide the clear button (both single & multi).
     */
    clearable;
    /**
     * If true, the dropdown will take up the full width of its container.
     */
    fullWidth = false;
    /**
     * If true, the dropdown width fits its longest option (max-content).
     */
    fitContent = false;
    /**
     * Optional width for the dropdown options panel.
     * Accepts a number (pixels) or any valid CSS width value such as `320px`, `24rem`, or `min(28rem, 90vw)`.
     * By default, the menu matches the trigger width.
     */
    menuWidth;
    /**
     * Loading state
     */
    loading = false;
    /**
     * Validation state
     */
    invalid = false;
    /**
     * Helper text / validation message
     */
    helperText;
    /**
     * Error message to show when invalid
     */
    errorMessage;
    /**
     * Placeholder for the search input
     */
    searchPlaceholder = 'Search...';
    /**
     * Default icon library for option icons (e.g. 'lucide', 'ionicons')
     */
    iconLibrary = 'ionicons';
    /**
     * If true, show the full hierarchy path in selected value (for cascading)
     */
    showPath = false;
    /** Use high-fidelity animation (Framer-like physics) */
    highFidelity = true;
    /** RTL support */
    rtl = false;
    /**
     * Shape variant (inherits from design system or parent)
     */
    shape = 'default';
    /**
     * If true, shows a checkmark (tick) next to the selected item in single-select mode.
     */
    showSelectedMarker = true;
    /**
     * Custom icon for the selection marker
     */
    selectedMarkerIcon = 'check';
    /**
     * Icon library for the selection marker icon
     */
    selectedMarkerLibrary = 'lucide';
    /**
     * Optional label text shown after the checkmark on the selected item.
     */
    selectedMarkerLabel = '';
    /**
     * Color for the selection marker icon. Defaults to the selected state color token.
     */
    selectedMarkerColor = '';
    isOpen = false;
    parsedOptions = [];
    selectedValues = new Set();
    searchQuery = '';
    expandedNodes = new Set();
    dropdownPosition = 'bottom';
    menuLeft = 0;
    menuTop = 0;
    computedMenuWidth = 0;
    menuMaxHeight = 0;
    highlightedIndex = -1;
    nestedPath = [];
    optionsRef = [];
    searchInputRef;
    searchDebounce;
    menuElement;
    rafId = null;
    isPortaled = false;
    handleDocumentClick = (event) => {
        if (!this.isOpen)
            return;
        const path = event.composedPath();
        const isInsideHost = path.some(node => node === this.hostElement);
        const isInsideMenu = this.menuElement && path.some(node => node === this.menuElement || (node instanceof Node && this.menuElement.contains(node)));
        if (!isInsideHost && !isInsideMenu) {
            this.closeDropdown();
        }
    };
    /**
     * If true, all nodes in a cascading dropdown will be expanded by default.
     */
    expandAll = false;
    /**
     * If true, shows a skeleton loading state for the trigger
     */
    skeleton = false;
    /**
     * If true, shows a "Select All" option in multi-select mode
     */
    showSelectAll = false;
    /**
     * Label for the Select All option
     */
    selectAllLabel = 'Select All';
    /**
     * Custom text color for the dropdown display
     */
    textColor = '';
    /**
     * If true, enables virtual scrolling (renders only a subset of items for performance)
     */
    virtualScroll = false;
    /**
     * If true, search filtering is case-sensitive
     */
    caseSensitive = false;
    /**
     * Label text shown above the dropdown
     */
    label = '';
    /**
     * Emitted when value changes
     */
    valueChange;
    /**
     * Emitted when dropdown opens
     */
    dropdownOpen;
    /**
     * Emitted when dropdown closes
     */
    dropdownClose;
    handleOptionsChange(newValue) {
        this.parseOptions(newValue);
        this.syncNestedPath();
    }
    handleValueChange(newValue) {
        this.updateSelectedValues(newValue);
        this.syncNestedPath();
    }
    handleSearchQueryChange() {
        clearTimeout(this.searchDebounce);
        this.searchDebounce = setTimeout(() => {
            const count = this.getVisibleOptionCount();
            ariaLive.announce(`${count} option${count !== 1 ? 's' : ''} found`);
        }, 300);
    }
    componentWillLoad() {
        this.parseOptions(this.options);
        this.updateSelectedValues(this.value);
        this.syncNestedPath();
        if (this.expandAll && this.cascading) {
            this.expandAllNodes(this.parsedOptions);
        }
    }
    expandAllNodes(options) {
        options.forEach(opt => {
            if (opt.children) {
                this.expandedNodes.add(opt.value.toString());
                this.expandAllNodes(opt.children);
            }
        });
        this.expandedNodes = new Set(this.expandedNodes);
    }
    /**
     * Programmatically open the dropdown menu
     */
    async open() {
        if (!this.isOpen) {
            this.toggleDropdown();
        }
    }
    componentDidUpdate() {
        if (this.isOpen && this.menuElement) {
            this.calculateDropdownPosition();
        }
    }
    connectedCallback() {
        this.handleViewportChange = this.handleViewportChange.bind(this);
        window.addEventListener('scroll', this.handleViewportChange, true);
        window.addEventListener('resize', this.handleViewportChange);
        document.addEventListener('click', this.handleDocumentClick, true);
        window.addEventListener('popstate', this.closeDropdown);
        window.addEventListener('hashchange', this.closeDropdown);
    }
    disconnectedCallback() {
        window.removeEventListener('scroll', this.handleViewportChange, true);
        window.removeEventListener('resize', this.handleViewportChange);
        document.removeEventListener('click', this.handleDocumentClick, true);
        window.removeEventListener('popstate', this.closeDropdown);
        window.removeEventListener('hashchange', this.closeDropdown);
        this.cleanupPortal();
    }
    getOptionId(index) {
        return `dropdown-option-${index}`;
    }
    handleKeyDown = (event) => {
        if (this.disabled)
            return;
        if (!this.searchable && event.key.length === 1 && this.isOpen) {
            const char = event.key.toLowerCase();
            const flatOptions = this.getVisibleOptions();
            const startIndex = this.highlightedIndex + 1;
            const searchList = [...flatOptions.slice(startIndex), ...flatOptions.slice(0, startIndex)];
            const matchIndex = searchList.findIndex(o => (o.label ?? '').toLowerCase().startsWith(char));
            if (matchIndex !== -1) {
                let trueIndex = startIndex + matchIndex;
                if (trueIndex >= flatOptions.length)
                    trueIndex -= flatOptions.length;
                this.highlightedIndex = trueIndex;
                this.scrollToHighlighted();
                ariaLive.announce(flatOptions[trueIndex].label ?? '');
            }
            return;
        }
        switch (event.key) {
            case 'Enter':
            case ' ':
                if (!this.isOpen) {
                    event.preventDefault();
                    this.toggleDropdown();
                }
                else if (this.highlightedIndex >= 0) {
                    event.preventDefault();
                    const flatOptions = this.getVisibleOptions();
                    if (flatOptions[this.highlightedIndex]) {
                        this.handleOptionClick(flatOptions[this.highlightedIndex], event);
                    }
                }
                break;
            case 'ArrowDown':
                event.preventDefault();
                if (!this.isOpen) {
                    this.toggleDropdown();
                }
                else {
                    const count = this.getVisibleOptionCount();
                    this.highlightedIndex = Math.min(this.highlightedIndex + 1, count - 1);
                    this.scrollToHighlighted();
                }
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (this.isOpen) {
                    this.highlightedIndex = Math.max(this.highlightedIndex - 1, 0);
                    this.scrollToHighlighted();
                }
                break;
            case 'Escape':
                if (this.isOpen) {
                    event.preventDefault();
                    this.closeDropdown();
                    this.hostElement.shadowRoot?.querySelector('.dropdown-trigger')?.focus();
                }
                break;
            case 'Tab':
                if (this.isOpen) {
                    this.closeDropdown();
                }
                break;
        }
    };
    getVisibleOptions() {
        if (this.isNestedMenuVariant()) {
            return this.getNestedMenuLevels(this.filterOptions(this.parsedOptions)).flat();
        }
        const flatOptions = [];
        const flatten = (opts) => {
            opts.forEach(o => {
                flatOptions.push(o);
                if (o.children && (this.expandedNodes.has(o.value?.toString() ?? '') || this.searchQuery)) {
                    flatten(o.children);
                }
            });
        };
        if (this.cascading)
            flatten(this.filterOptions(this.parsedOptions));
        else {
            const filtered = this.filterOptions(this.parsedOptions);
            filtered.forEach(o => flatOptions.push(o));
        }
        return flatOptions;
    }
    getVisibleOptionCount() {
        return this.getVisibleOptions().length;
    }
    scrollToHighlighted() {
        const optionEl = this.optionsRef[this.highlightedIndex];
        if (optionEl) {
            optionEl.scrollIntoView({ block: 'nearest' });
        }
    }
    isNestedMenuVariant() {
        return this.variant === 'nested-menu' && this.cascading && !this.searchQuery;
    }
    findOptionPathByValue(options, targetValue, path = []) {
        for (const option of options) {
            const currentValue = option.value?.toString() ?? '';
            const nextPath = currentValue ? [...path, currentValue] : [...path];
            if (currentValue === targetValue) {
                return nextPath;
            }
            if (option.children) {
                const childPath = this.findOptionPathByValue(option.children, targetValue, nextPath);
                if (childPath) {
                    return childPath;
                }
            }
        }
        return null;
    }
    syncNestedPath() {
        if (this.variant !== 'nested-menu' || !this.cascading) {
            this.nestedPath = [];
            return;
        }
        const selectedValue = Array.from(this.selectedValues)[0];
        if (!selectedValue) {
            this.nestedPath = [];
            return;
        }
        this.nestedPath = this.findOptionPathByValue(this.parsedOptions, selectedValue) ?? [];
    }
    setNestedPath(level, value) {
        const nextPath = this.nestedPath.slice(0, level);
        nextPath[level] = value;
        this.nestedPath = nextPath;
    }
    getNestedMenuLevels(options) {
        const levels = [];
        let currentOptions = options;
        if (currentOptions.length > 0) {
            levels.push(currentOptions);
        }
        for (let level = 0; level < this.nestedPath.length; level++) {
            const activeValue = this.nestedPath[level];
            const activeOption = currentOptions.find(option => (option.value?.toString() ?? '') === activeValue);
            if (!activeOption?.children?.length) {
                break;
            }
            currentOptions = activeOption.children;
            levels.push(currentOptions);
        }
        return levels;
    }
    getNestedMenuEstimatedWidth() {
        const perPanelWidth = this.size === 'sm' ? 190 : this.size === 'lg' ? 260 : 220;
        const levelCount = Math.max(1, this.getNestedMenuLevels(this.filterOptions(this.parsedOptions)).length);
        return perPanelWidth * levelCount;
    }
    parseOptions(options) {
        let rawOptions = [];
        if (typeof options === 'string' && options.length > 0) {
            try {
                rawOptions = JSON.parse(options);
            }
            catch (error) {
                console.error('Invalid JSON for dropdown options:', error);
                rawOptions = [];
            }
        }
        else if (Array.isArray(options) && options.length > 0) {
            rawOptions = options;
        }
        else {
            // Fallback: Parse native <option> tags from children
            const nativeOptions = Array.from(this.hostElement.querySelectorAll('option'));
            if (nativeOptions.length > 0) {
                rawOptions = nativeOptions.map(opt => ({
                    label: opt.textContent || '',
                    value: opt.value || opt.textContent || '',
                    disabled: opt.disabled,
                    ...(opt.dataset.icon ? { icon: opt.dataset.icon } : {}),
                    ...(opt.dataset.subtitle ? { subtitle: opt.dataset.subtitle } : {}),
                    ...(opt.dataset.description ? { description: opt.dataset.description } : {}),
                    ...(opt.dataset.group ? { group: opt.dataset.group } : {}),
                }));
            }
            else {
                rawOptions = [];
            }
        }
        // Transform DropdownGroup to flat list with 'group' property if detected
        const transformed = [];
        rawOptions.forEach(opt => {
            if (opt.options && Array.isArray(opt.options)) {
                // This is a group
                opt.options.forEach((child) => {
                    transformed.push({ ...child, group: opt.label });
                });
            }
            else {
                // This is a direct option
                transformed.push(opt);
            }
        });
        this.parsedOptions = transformed;
    }
    updateSelectedValues(valueString) {
        if (!valueString) {
            this.selectedValues = new Set();
        }
        else if (this.multiSelect) {
            this.selectedValues = new Set(valueString.split(',').filter(v => v));
        }
        else {
            this.selectedValues = new Set([valueString]);
        }
    }
    toggleDropdown = () => {
        if (this.disabled)
            return;
        // Only open if trigger is visible
        const trigger = (this.hostElement.shadowRoot?.querySelector('.dropdown-trigger') || this.hostElement.querySelector('.dropdown-trigger'));
        if (!trigger)
            return;
        const rect = trigger.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0)
            return;
        this.isOpen = !this.isOpen;
        if (this.isOpen) {
            this.dropdownOpen.emit();
            this.highlightedIndex = -1;
            if (this.variant === 'nested-menu' && this.cascading) {
                this.syncNestedPath();
            }
            this.schedulePositionUpdate();
            if (!this.multiSelect && this.selectedValues.size > 0) {
                const visible = this.getVisibleOptions();
                const idx = visible.findIndex(o => this.selectedValues.has(o.value?.toString() ?? ''));
                if (idx !== -1)
                    this.highlightedIndex = idx;
            }
            setTimeout(() => {
                this.calculateDropdownPosition(); // Force recalculation after paint
                if (this.searchable && this.searchInputRef) {
                    this.searchInputRef.focus();
                }
            }, 50);
        }
        else {
            this.closeDropdown();
        }
    };
    /**
     * Schedule position updates after the menu element renders.
     * Since the trigger has a CSS transition (0.2s), we re-calculate for 250ms
     * to ensure the menu stays perfectly aligned as the transition progresses.
     */
    schedulePositionUpdate() {
        if (this.rafId !== null) {
            cancelAnimationFrame(this.rafId);
        }
        const startTime = performance.now();
        const update = (now) => {
            if (!this.isOpen) {
                this.rafId = null;
                return;
            }
            this.calculateDropdownPosition();
            // Continue updating during the transition period (250ms)
            if (now - startTime < 250) {
                this.rafId = requestAnimationFrame(update);
            }
            else {
                this.rafId = null;
            }
        };
        this.rafId = requestAnimationFrame(update);
    }
    cleanupPortal() {
        if (this.rafId !== null) {
            cancelAnimationFrame(this.rafId);
            this.rafId = null;
        }
        if (this.isPortaled && this.menuElement && this.menuElement.parentElement === document.body) {
            this.hostElement.appendChild(this.menuElement);
            this.isPortaled = false;
        }
    }
    handleViewportChange() {
        if (this.isOpen) {
            this.calculateDropdownPosition();
        }
    }
    parseConfiguredMenuWidth() {
        if (this.menuWidth === undefined || this.menuWidth === null) {
            return {};
        }
        if (typeof this.menuWidth === 'number' && Number.isFinite(this.menuWidth)) {
            return {
                cssWidth: `${this.menuWidth}px`,
                pixelWidth: this.menuWidth,
            };
        }
        const rawWidth = String(this.menuWidth).trim();
        if (!rawWidth) {
            return {};
        }
        if (/^\d+(?:\.\d+)?$/.test(rawWidth)) {
            const pxValue = Number(rawWidth);
            return {
                cssWidth: `${pxValue}px`,
                pixelWidth: pxValue,
            };
        }
        if (/^\d+(?:\.\d+)?px$/i.test(rawWidth)) {
            return {
                cssWidth: rawWidth,
                pixelWidth: parseFloat(rawWidth),
            };
        }
        return { cssWidth: rawWidth };
    }
    getMenuStyle(usesLocalMenuPosition) {
        const configuredWidth = this.parseConfiguredMenuWidth();
        const measuredWidth = this.computedMenuWidth > 0 ? `${this.computedMenuWidth}px` : undefined;
        const effectiveMaxHeight = this.menuMaxHeight > 0 ? this.menuMaxHeight : (this.maxHeight || 300);
        const baseStyles = {
            left: `${this.menuLeft}px`,
            maxWidth: 'calc(100vw - 16px)',
            maxHeight: `${effectiveMaxHeight}px`,
            visibility: usesLocalMenuPosition ? 'visible' : (this.menuLeft === 0 && this.menuTop === 0 ? 'hidden' : 'visible'),
            top: `${this.menuTop}px`,
        };
        // User explicitly set a width via menuWidth prop — honour it exactly.
        if (configuredWidth.cssWidth) {
            return {
                ...baseStyles,
                width: configuredWidth.cssWidth,
            };
        }
        // fullWidth — stretch to 100% of the container/viewport.
        if (this.fullWidth) {
            return {
                ...baseStyles,
                width: measuredWidth,
                minWidth: measuredWidth,
            };
        }
        // All other cases: size to content (widest option + reserved tick space).
        return {
            ...baseStyles,
            width: 'max-content',
            minWidth: measuredWidth,
        };
    }
    shouldPortalMenu() {
        // Always portal to document.body so the panel is positioned with fixed
        // coordinates and never clipped by overflow:hidden on ancestor containers
        // (e.g. ui-toolbar shadow host, demo cards, etc.)
        return true;
    }
    calculateDropdownPosition() {
        if (!this.hostElement || !this.isOpen || !this.menuElement)
            return;
        const trigger = (this.hostElement.shadowRoot?.querySelector('.dropdown-trigger') || this.hostElement.querySelector('.dropdown-trigger'));
        if (!trigger)
            return;
        // Guard: Only position if trigger is visible and has size
        const rect = trigger.getBoundingClientRect();
        if (rect.width === 0 && rect.height === 0) {
            // Hide menu if trigger is not visible
            this.menuLeft = 0;
            this.menuTop = 0;
            this.computedMenuWidth = 0;
            this.dropdownPosition = 'bottom';
            return;
        }
        const configuredWidth = this.parseConfiguredMenuWidth();
        const triggerWidth = trigger.offsetWidth || rect.width;
        const placementWidth = !this.fitContent && configuredWidth.pixelWidth
            ? configuredWidth.pixelWidth
            : this.isNestedMenuVariant()
                ? Math.max(triggerWidth, this.getNestedMenuEstimatedWidth())
                : triggerWidth;
        const shouldPortal = this.shouldPortalMenu();
        if (shouldPortal && this.menuElement.parentElement !== document.body) {
            document.body.appendChild(this.menuElement);
            this.isPortaled = true;
        }
        else if (!shouldPortal && this.isPortaled) {
            this.cleanupPortal();
        }
        const gap = 4;
        const { left, top, placement: finalPlacement, availableHeight: spaceHeight } = calculateUniversalPlacement(trigger, {
            menuWidth: placementWidth,
            menuHeight: this.maxHeight || 300,
            gap,
            placement: 'auto',
            useTransformedAncestorOffset: shouldPortal ? !this.ignoreParentPosition : true,
        });
        // Compute how much vertical space is actually available so the options list
        // can be constrained and will show a scrollbar instead of overflowing.
        const nextMaxHeight = Math.max(80, Math.min(this.maxHeight || 300, spaceHeight));
        let nextLeft = left;
        let nextTop = top;
        if (!shouldPortal) {
            // If not portaling, we need relative coordinates to host
            // However, calculateUniversalPlacement already handles offsetParent.
            // If host is the offsetParent, then left/top are already relative.
            // If NOT, we might need adjustments. 
            // Re-check the previous logic: it subtracted hostRect.left.
            nextLeft = left;
            nextTop = top;
        }
        if (this.menuLeft !== nextLeft ||
            this.menuTop !== nextTop ||
            this.computedMenuWidth !== triggerWidth ||
            this.dropdownPosition !== finalPlacement ||
            this.menuMaxHeight !== nextMaxHeight) {
            this.menuLeft = nextLeft;
            this.menuTop = nextTop;
            this.computedMenuWidth = triggerWidth;
            this.dropdownPosition = finalPlacement;
            this.menuMaxHeight = nextMaxHeight;
        }
    }
    closeDropdown = () => {
        if (this.isOpen) {
            this.isOpen = false;
            this.dropdownClose.emit();
            this.searchQuery = '';
            this.cleanupPortal();
        }
    };
    handleOptionClick = (option, event) => {
        event.stopPropagation();
        if (option.disabled)
            return;
        if (this.cascading && option.children && option.children.length > 0) {
            if (this.isNestedMenuVariant()) {
                const visibleLevels = this.getNestedMenuLevels(this.filterOptions(this.parsedOptions));
                const level = visibleLevels.findIndex(levelOptions => levelOptions.some(levelOption => (levelOption.value?.toString() ?? '') === (option.value?.toString() ?? '')));
                this.setNestedPath(level === -1 ? 0 : level, option.value?.toString() ?? '');
                return;
            }
            this.toggleNode(option.value?.toString() ?? '');
            return;
        }
        if (this.multiSelect) {
            const newSelected = new Set(this.selectedValues);
            const stringValue = option.value?.toString() ?? '';
            if (newSelected.has(stringValue)) {
                newSelected.delete(stringValue);
                ariaLive.announce(`Deselected ${option.label}`);
            }
            else {
                newSelected.add(stringValue);
                ariaLive.announce(`Selected ${option.label}`);
            }
            this.selectedValues = newSelected;
            this.value = Array.from(newSelected).join(',');
        }
        else {
            const val = option.value?.toString() ?? '';
            this.selectedValues = new Set([val]);
            this.value = val;
            this.closeDropdown();
            this.hostElement.shadowRoot?.querySelector('.dropdown-trigger')?.focus();
            ariaLive.announce(`Selected ${option.label}`);
        }
        this.emitChangeEvent();
    };
    toggleNode = (value) => {
        const newExpanded = new Set(this.expandedNodes);
        if (newExpanded.has(value)) {
            newExpanded.delete(value);
        }
        else {
            newExpanded.add(value);
        }
        this.expandedNodes = newExpanded;
    };
    handleClear = (event) => {
        event.stopPropagation();
        this.selectedValues = new Set();
        this.value = '';
        this.emitChangeEvent();
        this.hostElement.shadowRoot?.querySelector('.dropdown-trigger')?.focus();
    };
    handleSearchInput = (event) => {
        const input = event.target;
        this.searchQuery = input.value.toLowerCase();
    };
    emitChangeEvent() {
        const selectedOptions = this.getSelectedOptions();
        this.valueChange.emit({
            value: this.value,
            selectedOptions,
        });
    }
    getSelectedOptions() {
        const selected = [];
        const findSelected = (options) => {
            options.forEach(option => {
                if (this.selectedValues.has(option.value?.toString() ?? '')) {
                    selected.push(option);
                }
                if (option.children) {
                    findSelected(option.children);
                }
            });
        };
        findSelected(this.parsedOptions);
        return selected;
    }
    getSelectedDescendantCount(option) {
        if (!option.children)
            return 0;
        let count = 0;
        const countSelected = (options) => {
            options.forEach(o => {
                if (this.selectedValues.has(o.value?.toString() ?? ''))
                    count++;
                if (o.children)
                    countSelected(o.children);
            });
        };
        countSelected(option.children);
        return count;
    }
    filterOptions(options) {
        if (!this.searchQuery)
            return options;
        return options
            .filter(option => {
            const query = this.caseSensitive ? this.searchQuery : this.searchQuery.toLowerCase();
            const label = this.caseSensitive ? (option.label ?? '') : (option.label ?? '').toLowerCase();
            const subtitle = this.caseSensitive ? (option.subtitle || '') : (option.subtitle || '').toLowerCase();
            const description = this.caseSensitive ? (option.description || '') : (option.description || '').toLowerCase();
            const group = this.caseSensitive ? (option.group || '') : (option.group || '').toLowerCase();
            const matchesLabel = label.includes(query);
            const matchesSubtitle = subtitle.includes(query);
            const matchesDesc = description.includes(query);
            const matchesGroup = group.includes(query);
            const hasMatchingChildren = option.children && this.filterOptions(option.children).length > 0;
            return matchesLabel || matchesSubtitle || matchesDesc || matchesGroup || hasMatchingChildren;
        })
            .map(option => ({
            ...option,
            children: option.children ? this.filterOptions(option.children) : undefined,
        }));
    }
    getIconSize(type) {
        const sizes = {
            sm: { main: '14px', sub: '12px', marker: '16px' },
            md: { main: '16px', sub: '14px', marker: '18px' },
            lg: { main: '18px', sub: '16px', marker: '20px' },
        };
        // Defensive: fallback to 'md' if size is not a key
        let safeSize = 'md';
        if (this.size === 'sm' || this.size === 'md' || this.size === 'lg') {
            safeSize = this.size;
        }
        return sizes[safeSize][type];
    }
    highlightMatches(text) {
        if (!this.searchQuery || !text)
            return text;
        const query = this.searchQuery.toLowerCase();
        const index = text.toLowerCase().indexOf(query);
        if (index === -1)
            return text;
        return (h("span", null, text.substring(0, index), h("span", { class: "dropdown-search-highlight" }, text.substring(index, index + query.length)), text.substring(index + query.length)));
    }
    renderOption(option, level = 0, indexObj = { current: 0 }) {
        if (option.isSeparator) {
            return h("div", { class: "dropdown-separator" });
        }
        const isSelected = this.selectedValues.has(option.value?.toString() ?? '');
        const hasChildren = !!(this.cascading && option.children && option.children.length > 0);
        const myIndex = indexObj.current;
        indexObj.current++;
        const isHighlighted = myIndex === this.highlightedIndex;
        const optionId = this.getOptionId(myIndex);
        return (h("div", { class: "dropdown-option-wrapper", key: option.value?.toString() ?? '', role: "option", id: optionId, "aria-selected": isSelected ? 'true' : 'false' }, h("div", { class: {
                'ui-dropdown-option': true,
                'dropdowndata': true,
                'ui-dropdown-option-selected': isSelected,
                'dropdown-option-highlighted': isHighlighted,
                'dropdown-option-disabled': !!option.disabled,
                'dropdown-option-parent': hasChildren
            }, style: {
                paddingLeft: `${16}px`,
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
                gap: '12px',
                boxSizing: 'border-box',
                width: '100%',
                whiteSpace: 'nowrap',
                ...(isSelected ? { backgroundColor: 'var(--dd-selected-bg)', color: 'var(--dd-selected-text)', borderRadius: '12px' } : {})
            }, onClick: (e) => this.handleOptionClick(option, e), ref: (el) => {
                if (el)
                    this.optionsRef[myIndex] = el;
            } }, ((this.multiSelect && !hasChildren) || option.icon) && (h("div", { class: "dropdown-option-left" }, this.multiSelect && !hasChildren && (h("div", { class: { 'dropdown-checkbox': true, 'checked': isSelected, 'dropdown-checkbox-selected': isSelected } }, isSelected && h("ui-icon", { name: "check", library: "lucide", size: this.getIconSize('sub'), color: "white" }))), option.icon && (h("span", { class: "dropdown-option-icon" }, typeof option.icon === 'string' ? (h("ui-icon", { name: option.icon, library: option.iconLibrary, size: this.getIconSize('main') })) : (option.icon))))), h("div", { class: "dropdown-option-text" }, h("div", { class: { 'dropdown-option-content': true, 'dropdown-content-parent': hasChildren } }, h("div", { class: "dropdown-option-label" }, this.highlightMatches(option.label ?? '')), (option.subtitle || option.description) && (h("div", { class: "dropdown-option-subtitle" }, this.highlightMatches(option.subtitle ?? option.description ?? ''))))), h("div", { class: "dropdown-option-right" }, option.rightTag && (h("ui-tag", { label: option.rightTag, color: option.rightTagColor || 'default', size: "sm", variant: "light", class: "dropdown-option-tag" })), option.rightIcon && (h("span", { class: "dropdown-option-right-icon" }, h("ui-icon", { name: option.rightIcon, library: option.rightIconLibrary, size: this.getIconSize('sub') }))), hasChildren && (h("div", { class: "dropdown-expand-group" }, this.multiSelect && ((() => {
            const count = this.getSelectedDescendantCount(option);
            return count > 0 ? h("span", { class: "dropdown-badge" }, count) : null;
        })()), h("ui-icon", { name: "chevron-right", library: "lucide", size: this.getIconSize('sub'), class: { 'dropdown-expand-icon': true, 'expanded': this.expandedNodes.has(option.value?.toString() ?? '') } }))), !this.multiSelect && !hasChildren && this.showSelectedMarker && (h("span", { class: "ui-dropdown-selected-marker-wrap", style: !isSelected ? { visibility: 'hidden' } : {} }, h("ui-icon", { name: this.selectedMarkerIcon, library: this.selectedMarkerLibrary, size: this.getIconSize('marker'), class: "ui-dropdown-selected-marker", color: this.selectedMarkerColor || 'var(--dd-selected-icon)' }), this.selectedMarkerLabel && h("span", { class: "ui-dropdown-selected-marker-label" }, this.selectedMarkerLabel))))), hasChildren && this.expandedNodes.has(option.value?.toString() ?? '') && (h("div", { class: "dropdown-children" }, option.children?.map(child => this.renderOption(child, level + 1, indexObj))))));
    }
    renderChips() {
        const selectedOptions = this.getSelectedOptions();
        if (selectedOptions.length === 0)
            return this.placeholder;
        return (h("div", { class: "dropdown-chips" }, selectedOptions.map(option => (h("ui-tag", { label: option.label ?? '', size: "sm", color: "primary", variant: "light", removable: true, animation: "slide", onTagRemove: (e) => {
                e.stopPropagation();
                this.handleOptionClick(option, e);
            } })))));
    }
    getDisplayText() {
        if (this.selectedValues.size === 0) {
            return this.placeholder;
        }
        if (this.multiSelect) {
            if (this.chipView)
                return this.renderChips();
            const selectedOptions = this.getSelectedOptions();
            if (selectedOptions.length === 1) {
                return selectedOptions[0].label;
            }
            return `${selectedOptions.length} items selected`;
        }
        else {
            const selectedOptions = this.getSelectedOptions();
            if (selectedOptions.length > 0) {
                const option = selectedOptions[0];
                if (this.variant === 'detailed' && option.icon) {
                    return (h("div", { class: "dropdown-trigger-content" }, h("ui-icon", { name: option.icon, library: option.iconLibrary || this.iconLibrary, size: "18px", class: "dropdown-trigger-icon" }), h("span", { class: "dropdown-trigger-label" }, option.label)));
                }
                return option.label;
            }
            return this.placeholder;
        }
    }
    renderValidationSubstrate() {
        if (this.invalid && this.errorMessage) {
            return (h("div", { class: "dropdown-helper-text dropdown-error-text" }, h("ui-icon", { name: "alert-circle", library: "lucide", size: "12px" }), h("span", null, this.errorMessage)));
        }
        if (this.helperText) {
            return h("div", { class: "dropdown-helper-text" }, this.helperText);
        }
        return null;
    }
    render() {
        if (this.skeleton) {
            return (h("div", { class: { 'dropdown-container': true, 'dropdown-skeleton': true, [`dropdown-${this.size}`]: true, 'dropdown-full-width': this.fullWidth, 'dropdown-fit-content': this.fitContent, [`variant-${this.variant}`]: true } }, h("div", { class: "dropdown-trigger" }, h("div", { class: "dropdown-skeleton-text" }), h("div", { class: "dropdown-skeleton-icon" }))));
        }
        const filteredOptions = this.filterOptions(this.parsedOptions);
        const hasSelection = this.selectedValues.size > 0;
        const showArrow = this.showArrow !== undefined ? this.showArrow : this.appearance !== 'button';
        const effectiveClearable = this.clearable !== undefined ? this.clearable : (this.multiSelect && !this.chipView);
        const indexObj = { current: 0 };
        const activeDescendantId = this.isOpen && this.highlightedIndex >= 0 ? this.getOptionId(this.highlightedIndex) : undefined;
        const usesLocalMenuPosition = !this.shouldPortalMenu();
        // Always use theme variable for text color unless textColor is set and not placeholder
        let displayStyle = {};
        if (this.textColor && hasSelection) {
            displayStyle.color = this.textColor;
        }
        else {
            displayStyle.color = 'var(--dd-text, var(--color-on-surface, #10213a))';
        }
        return (h("div", { class: {
                'dropdown-container': true,
                [`dropdown-${this.size}`]: true,
                [`variant-${this.variant}`]: true,
                'dropdown-disabled': this.disabled,
                'dropdown-open': this.isOpen,
                'dropdown-invalid': this.invalid,
                'dropdown-appearance-button': this.appearance === 'button',
                'dropdown-full-width': this.fullWidth,
                'dropdown-fit-content': this.fitContent,
                'dropdown-has-chips': this.chipView && this.multiSelect && hasSelection,
                'dropdown-rtl': this.rtl,
                [`dropdown-shape-${this.shape}`]: this.shape !== 'default',
            }, dir: this.rtl ? 'rtl' : 'ltr' }, this.label && h("label", { class: "dropdown-label" }, this.label), h("div", { class: "dropdown-trigger", onClick: this.toggleDropdown, onKeyDown: this.handleKeyDown, tabIndex: this.disabled ? -1 : 0, role: "combobox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-haspopup": "listbox", "aria-controls": "dropdown-list", "aria-label": this.placeholder, "aria-activedescendant": activeDescendantId }, h("slot", { name: "prefix" }), h("div", { class: {
                'dropdown-display': true,
                'dropdown-placeholder': !hasSelection,
            }, style: displayStyle }, this.getDisplayText()), h("div", { class: "dropdown-icons" }, this.loading && h("span", { class: "dropdown-spinner" }, h("ui-icon", { name: "loader-2", library: "lucide", spin: true, size: "16px" })), hasSelection && effectiveClearable && !this.disabled && (h("span", { class: "dropdown-clear", onClick: this.handleClear, tabIndex: 0, role: "button", "aria-label": "Clear selection", onKeyDown: e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.stopPropagation();
                    this.handleClear(e);
                }
            } }, h("ui-icon", { name: "x", library: "lucide", size: this.getIconSize('sub') }))), showArrow && (h("ui-icon", { name: "chevron-down", library: "lucide", size: this.getIconSize('sub'), class: { 'dropdown-arrow': true, 'open': this.isOpen } })))), this.renderValidationSubstrate(), this.isOpen && (h("div", { class: {
                'ui-dropdown-menu': true,
                'ui-dropdown-menu--local': usesLocalMenuPosition,
                'dropdown-menu-top': this.dropdownPosition === 'top',
                [`dropdown-menu-${this.size}`]: true,
                [`dropdown-menu-variant-${this.variant}`]: true,
                'dropdown-menu-searchable': this.searchable,
                'dropdown-menu-cascading': this.cascading,
            }, id: "dropdown-list", role: "listbox", "aria-multiselectable": this.multiSelect ? 'true' : 'false', ref: el => {
                if (el)
                    this.menuElement = el;
            }, style: this.getMenuStyle(usesLocalMenuPosition) }, this.searchable && (h("div", { class: "dropdown-search" }, h("div", { class: "dropdown-search-container" }, h("ui-icon", { name: "search", library: "lucide", size: "16px", class: "dropdown-search-icon" }), h("input", { type: "text", class: "dropdown-search-input", placeholder: this.searchPlaceholder, value: this.searchQuery, onInput: this.handleSearchInput, ref: el => {
                if (el)
                    this.searchInputRef = el;
            }, onKeyDown: this.handleKeyDown, "aria-activedescendant": activeDescendantId })))), h("div", { class: "dropdown-options" }, this.renderBulkActions(filteredOptions), filteredOptions.length > 0 ? this.renderMenuContents(filteredOptions, indexObj) : (h("div", { class: "dropdown-empty" }, h("slot", { name: "empty-state" }, "No options found"))))))));
    }
    isAllSelected(options) {
        const flattenOptions = (opts) => {
            let result = [];
            opts.forEach(o => {
                result.push(o.value?.toString() ?? '');
                if (o.children)
                    result = [...result, ...flattenOptions(o.children)];
            });
            return result;
        };
        const allValues = flattenOptions(options);
        if (allValues.length === 0)
            return false;
        return allValues.every(v => this.selectedValues.has(v));
    }
    toggleSelectAll(options) {
        const flattenOptions = (opts) => {
            let result = [];
            opts.forEach(o => {
                result.push(o.value?.toString() ?? '');
                if (o.children)
                    result = [...result, ...flattenOptions(o.children)];
            });
            return result;
        };
        const allValues = flattenOptions(options);
        const isAll = this.isAllSelected(options);
        if (isAll) {
            allValues.forEach(v => this.selectedValues.delete(v));
        }
        else {
            allValues.forEach(v => this.selectedValues.add(v));
        }
        this.selectedValues = new Set(this.selectedValues);
        this.value = Array.from(this.selectedValues).join(',');
        this.emitChangeEvent();
    }
    clearAllSelections() {
        this.selectedValues = new Set();
        this.value = ''; // Assuming value should also be cleared
        this.emitChangeEvent();
    }
    renderBulkActions(filteredOptions) {
        if (!this.multiSelect || this.searchQuery)
            return null; // Only show bulk actions for multi-select when not searching
        const allSelected = this.isAllSelected(filteredOptions);
        const hasAnySelection = this.selectedValues.size > 0;
        const showSelectAllAction = this.showSelectAll && filteredOptions.length > 0;
        if (!showSelectAllAction && !hasAnySelection) {
            return null;
        }
        return (h("div", { class: "dropdown-bulk-actions" }, showSelectAllAction && (h("div", { class: { 'dropdown-select-all': true, 'dropdown-select-all-with-clear': hasAnySelection }, onClick: e => { e.stopPropagation(); this.toggleSelectAll(filteredOptions); } }, h("div", { class: { 'dropdown-checkbox': true, 'dropdown-checkbox-selected': allSelected } }, allSelected && h("ui-icon", { name: "check", library: "lucide", size: "12px" })), h("span", null, this.selectAllLabel))), hasAnySelection && (h("div", { class: "dropdown-clear-all", onClick: e => { e.stopPropagation(); this.clearAllSelections(); } }, h("ui-icon", { name: "trash-2", library: "lucide", size: "14px" }), h("span", null, "Clear All")))));
    }
    renderNestedMenuContents(options, indexObj) {
        const levels = this.getNestedMenuLevels(options);
        return (h("div", { class: "dropdown-nested-columns" }, levels.map((levelOptions, levelIndex) => (h("div", { class: "dropdown-nested-panel", key: `nested-level-${levelIndex}` }, levelOptions.map(option => {
            const hasChildren = !!option.children?.length;
            const value = option.value?.toString() ?? '';
            const isSelected = this.selectedValues.has(value);
            const isActive = this.nestedPath[levelIndex] === value;
            const myIndex = indexObj.current;
            indexObj.current++;
            const isHighlighted = myIndex === this.highlightedIndex;
            const optionId = this.getOptionId(myIndex);
            return (h("div", { class: "dropdown-option-wrapper", key: `${value}-${levelIndex}`, role: "option", id: optionId, "aria-selected": isSelected ? 'true' : 'false' }, h("div", { class: {
                    'ui-dropdown-option': true,
                    'dropdowndata': true,
                    'dropdown-nested-option': true,
                    'ui-dropdown-option-selected': isSelected,
                    'dropdown-option-highlighted': isHighlighted,
                    'dropdown-option-disabled': !!option.disabled,
                    'dropdown-option-parent': hasChildren,
                    'dropdown-nested-option-active': isActive,
                }, onMouseEnter: () => {
                    if (hasChildren) {
                        this.setNestedPath(levelIndex, value);
                    }
                }, onClick: (e) => this.handleOptionClick(option, e), ref: (el) => {
                    if (el)
                        this.optionsRef[myIndex] = el;
                } }, ((this.multiSelect && !hasChildren) || option.icon) && (h("div", { class: "dropdown-option-left" }, this.multiSelect && !hasChildren && (h("div", { class: { 'dropdown-checkbox': true, 'checked': isSelected, 'dropdown-checkbox-selected': isSelected } }, isSelected && h("ui-icon", { name: "check", library: "lucide", size: this.getIconSize('sub'), color: "white" }))), option.icon && (h("span", { class: "dropdown-option-icon" }, typeof option.icon === 'string' ? (h("ui-icon", { name: option.icon, library: option.iconLibrary, size: this.getIconSize('main') })) : (option.icon))))), h("div", { class: "dropdown-option-text" }, h("div", { class: "dropdown-option-content" }, h("div", { class: "dropdown-option-label" }, this.highlightMatches(option.label ?? '')), (option.subtitle || option.description) && (h("div", { class: "dropdown-option-subtitle" }, this.highlightMatches(option.subtitle ?? option.description ?? ''))))), h("div", { class: "dropdown-option-right" }, option.rightTag && (h("ui-tag", { label: option.rightTag, color: option.rightTagColor || 'default', size: "sm", variant: "light", class: "dropdown-option-tag" })), hasChildren && (h("ui-icon", { name: "chevron-right", library: "lucide", size: this.getIconSize('sub'), class: { 'dropdown-expand-icon': true, 'expanded': isActive } })), !this.multiSelect && !hasChildren && this.showSelectedMarker && (h("span", { class: "ui-dropdown-selected-marker-wrap", style: !isSelected ? { visibility: 'hidden' } : {} }, h("ui-icon", { name: this.selectedMarkerIcon, library: this.selectedMarkerLibrary, size: this.getIconSize('marker'), class: "ui-dropdown-selected-marker", color: this.selectedMarkerColor || 'var(--dd-selected-icon)' }), this.selectedMarkerLabel && h("span", { class: "ui-dropdown-selected-marker-label" }, this.selectedMarkerLabel)))))));
        }))))));
    }
    renderMenuContents(options, indexObj) {
        if (this.isNestedMenuVariant()) {
            return this.renderNestedMenuContents(options, indexObj);
        }
        const rendered = [];
        let lastGroup = null;
        const displayOptions = this.virtualScroll ? options.slice(0, 50) : options;
        displayOptions.forEach(option => {
            if (option.group && option.group !== lastGroup) {
                rendered.push(h("div", { class: "dropdown-group-header" }, option.group));
                lastGroup = option.group;
            }
            rendered.push(this.renderOption(option, 0, indexObj));
        });
        if (this.virtualScroll && options.length > 50) {
            rendered.push(h("div", { class: "dropdown-more-info" }, "Showing 50 of ", options.length, " items. Use search to find more."));
        }
        return rendered;
    }
    static get watchers() { return {
        "options": [{
                "handleOptionsChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }],
        "searchQuery": [{
                "handleSearchQueryChange": 0
            }]
    }; }
};
Dropdown.style = dropdownCss();

const toggleGroupCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--toggle-group-gap:16px;--toggle-group-border:var(--border-subtle, #e2e8f0);--toggle-group-text:var(--text-primary, #1e293b);--toggle-group-muted:var(--color-primary, #64748b);--toggle-group-primary:var(--color-primary-hover, #2563eb);--toggle-group-danger:var(--color-danger, #ef4444)}.toggle-group-host{display:flex;flex-direction:column}.toggle-group-header{display:flex;align-items:center;justify-content:space-between;margin-bottom:12px}.toggle-group-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;color:var(--toggle-group-text);display:flex;align-items:center}.toggle-group-label .required{color:var(--toggle-group-danger);margin-left:4px}.collapse-btn{background:transparent;border:none;cursor:pointer;padding:4px;border-radius:4px;color:var(--toggle-group-muted);transition:all 0.2s}.collapse-btn:hover{background:var(--bg-secondary, #f1f5f9);color:var(--toggle-group-text)}.search-container{position:relative;margin-bottom:16px}.search-container .search-icon{position:absolute;left:12px;top:50%;transform:translateY(-50%);color:var(--toggle-group-muted)}.search-container .search-input{width:100%;padding:8px 12px 8px 36px;border:1px solid var(--toggle-group-border);border-radius:8px;font-size:14px;transition:all 0.2s;outline:none}.search-container .search-input:focus{border-color:var(--toggle-group-primary);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 37, 99, 235), 0.1)}.group-controls{display:flex;gap:12px;align-items:center;margin-bottom:16px}.group-controls .control-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 12px;background:var(--bg-primary, #ffffff);border:1px solid var(--toggle-group-border);border-radius:6px;font-size:13px;font-weight:600;color:var(--toggle-group-muted);cursor:pointer;transition:all 0.2s}.group-controls .control-btn ui-icon{color:var(--toggle-group-muted)}.group-controls .control-btn:hover{background:var(--bg-primary, #f8fafc);border-color:var(--color-primary, #cbd5e1);transform:translateY(-1px);color:var(--toggle-group-text)}.max-badge{font-size:11px;background:var(--bg-secondary, #f1f5f9);color:var(--toggle-group-muted);padding:2px 8px;border-radius:9999px;font-weight:600}.group-compact{gap:8px}.group-compact .toggle-list{gap:8px}.group-compact .layout-vertical{gap:4px}.group-compact .toggle-group-header{margin-bottom:4px}.toggle-list{display:flex;gap:var(--toggle-group-gap)}.toggle-list.layout-horizontal{flex-direction:row;flex-wrap:wrap}.toggle-list.layout-vertical{flex-direction:column;gap:8px}.toggle-list.layout-grid{display:grid;gap:16px}.toggle-list{}.toggle-list.is-segmented{position:relative;background:var(--bg-secondary, #f1f5f9);padding:6px;border-radius:16px;display:inline-flex;width:fit-content;gap:0;border:none;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05)}.toggle-list.is-segmented .toggle-item-wrapper{position:relative;z-index:2;padding:10px 24px;border-radius:12px;background:transparent !important;border:none !important;box-shadow:none !important;transform:none !important;flex:1;justify-content:center;transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);min-width:120px;font-weight:700}.toggle-list.is-segmented .toggle-item-wrapper ui-switch{transition:color 0.3s ease;--switch-track-bg:transparent;--switch-thumb-bg:transparent;--switch-glow:none;pointer-events:none;width:100%;display:flex;justify-content:center}.toggle-list.is-segmented .toggle-item-wrapper ui-switch::part(track){opacity:0;visibility:hidden;display:none}.toggle-list.is-segmented .toggle-item-wrapper ui-switch::part(thumb){opacity:0;visibility:hidden;display:none}.toggle-list.is-segmented .toggle-item-wrapper ui-switch::part(container){margin:0;width:100%;display:flex;justify-content:center}.toggle-list.is-segmented .toggle-item-wrapper ui-switch::part(label){margin:0;width:100%;text-align:center;justify-content:center;align-items:center}.toggle-list.is-segmented .toggle-item-wrapper.is-active ui-switch::part(label){color:#ffffff !important;font-weight:700;text-shadow:0 1px 2px rgba(0, 0, 0, 0.1)}.toggle-list.is-segmented .toggle-item-wrapper:hover:not(.is-active){background:rgba(0, 0, 0, 0.03) !important}.toggle-list.is-segmented .segmented-indicator{position:absolute;top:6px;left:6px;bottom:6px;border-radius:12px;transition:transform 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275), width 0.4s ease, background-color 0.4s ease;box-shadow:0 4px 12px rgba(0, 0, 0, 0.12);z-index:1}.toggle-item-wrapper{display:flex;align-items:center;gap:12px;padding:6px 12px;border-radius:12px;border:1px solid transparent;transition:background-color 0.2s ease, transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275), box-shadow 0.2s ease, border-color 0.2s ease;cursor:pointer}.toggle-item-wrapper:hover{background:rgba(var(--toggle-group-primary-rgb, 37, 99, 235), 0.03);transform:translateY(-2px);box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.05)}.toggle-item-wrapper:active{transform:scale(0.96);background:rgba(var(--toggle-group-primary-rgb, 37, 99, 235), 0.06)}.toggle-item-wrapper:focus-within{background:rgba(var(--toggle-group-primary-rgb, 37, 99, 235), 0.05);border-color:rgba(var(--toggle-group-primary-rgb, 37, 99, 235), 0.4);box-shadow:0 0 0 3px rgba(var(--toggle-group-primary-rgb, 37, 99, 235), 0.15)}.toggle-item-wrapper.is-dragging{opacity:0.5;transform:scale(0.98);background:var(--bg-secondary, #f1f5f9);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1)}.toggle-item-wrapper.is-drag-over{border-top:2px solid var(--toggle-group-primary);padding-top:2px}.toggle-item-wrapper.is-focused{background:rgba(var(--toggle-group-primary-rgb, 37, 99, 235), 0.05)}.drag-handle{cursor:grab;color:var(--toggle-group-muted);opacity:0.4}.drag-handle:hover{opacity:1}.drag-handle:active{cursor:grabbing}.error-message{margin-top:8px;font-size:13px;color:var(--toggle-group-danger);display:flex;align-items:center;gap:6px}.helper-text{margin-top:8px;font-size:13px;color:var(--toggle-group-muted)}.skeleton-container{display:flex;flex-direction:inherit;gap:16px}.skeleton-item{display:flex;align-items:center;gap:12px}.skeleton-item .skeleton-switch{width:44px;height:24px;border-radius:12px;background:var(--bg-secondary, #f1f5f9)}.skeleton-item .skeleton-text{width:120px;height:16px;border-radius:4px;background:var(--bg-secondary, #f1f5f9)}.skeleton-item{animation:pulse 1.5s infinite ease-in-out}@keyframes pulse{0%{opacity:0.6}50%{opacity:1}100%{opacity:0.6}}.group-disabled{opacity:0.5;pointer-events:none}.group-collapsed .toggle-list{display:none}`;

const UIToggleGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.toggleGroupChange = createEvent(this, "toggleGroupChange");
        this.toggleGroupSearch = createEvent(this, "toggleGroupSearch");
        this.toggleGroupReorder = createEvent(this, "toggleGroupReorder");
        this.toggleGroupCollapse = createEvent(this, "toggleGroupCollapse");
    }
    get el() { return getElement(this); }
    /** Current selected value or array of values */
    value = [];
    /** Group name for forms */
    name = '';
    /** Disabled state for the entire group */
    disabled = false;
    /** Readonly state */
    readonly = false;
    /** Required field indicator */
    required = false;
    /** Invalid state */
    invalid = false;
    /** Group label */
    label = '';
    /** Helper text below group */
    helperText = '';
    /** Error message when invalid */
    errorMessage = '';
    /** Layout orientation */
    layout = 'horizontal';
    /** Grid columns count */
    columns = 3;
    /** Selection mode */
    selectionMode = 'single';
    /** Size passed to children */
    size = 'md';
    /** Semantic color passed to children */
    color = 'primary';
    /** Material archetype passed to children */
    variant = 'solid';
    /** Shape passed to children */
    shape = 'default';
    /** Options array (label, value, icon, disabled) */
    options = [];
    /** Label position for children */
    labelPosition = 'right';
    /** Show icons in children */
    showIcons = false;
    /** Enable animations */
    enableAnimation = true;
    /** Enable keyboard navigation */
    keyboardNavigation = true;
    /** Show select all/none controls (multiple mode only) */
    showSelectAll = false;
    /** Enable search/filter */
    searchable = false;
    /** Search placeholder text */
    searchPlaceholder = 'Search toggles...';
    /** Enable drag to reorder */
    isDraggable = false;
    /** Enable expand/collapse */
    collapsible = false;
    /** Initially collapsed */
    collapsed = false;
    /** Loading state */
    loading = false;
    /** Loading text */
    loadingText = 'Loading options...';
    /** Maximum selections (multiple mode) */
    maxSelections = 0;
    /** Show skeleton loading state */
    showSkeleton = false;
    /** Number of skeletons to show */
    skeletonCount = 3;
    /** Compact mode for tighter spacing */
    compact = false;
    items = [];
    searchQuery = '';
    focusedIndex = -1;
    isCollapsed = false;
    draggedIndex = -1;
    dragOverIndex = -1;
    /** Position and dimensions of the sliding indicator (segmented mode only) */
    indicatorRect = { left: 0, top: 0, width: 0, height: 0, opacity: 0 };
    listEl;
    resizeObserver;
    internals;
    toggleGroupChange;
    toggleGroupSearch;
    toggleGroupReorder;
    toggleGroupCollapse;
    handleOptionsChange() {
        this.parseOptions();
    }
    handleValueChange() {
        this.syncToggles();
        this.updateIndicator();
    }
    componentWillLoad() {
        if (typeof this.el.attachInternals === 'function') {
            this.internals = this.el.attachInternals();
        }
        this.parseOptions();
        this.isCollapsed = this.collapsed;
        // Ensure value is array for multiple mode if not already
        if (this.selectionMode === 'multiple' && !Array.isArray(this.value)) {
            this.value = this.value ? [this.value] : [];
        }
        this.updateFormValue();
    }
    updateFormValue() {
        if (this.internals) {
            const val = Array.isArray(this.value) ? this.value.join(',') : this.value;
            this.internals.setFormValue(val);
        }
    }
    componentDidRender() {
        this.updateIndicator();
        if (!this.resizeObserver && this.el && typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver(() => this.updateIndicator());
            this.resizeObserver.observe(this.el);
        }
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
            this.resizeObserver = undefined;
        }
    }
    /**
     * Recalculates the position of the sliding background indicator.
     * Only active in 'segmented' variant for single-selection groups.
     */
    async updateIndicator() {
        if (this.variant !== 'segmented' || !this.listEl || this.selectionMode === 'multiple') {
            if (this.indicatorRect.opacity !== 0) {
                this.indicatorRect = { ...this.indicatorRect, opacity: 0 };
            }
            return;
        }
        // Give the DOM a tiny moment to stabilize if called during layout changes
        requestAnimationFrame(() => {
            const selectedValue = this.value;
            if (!selectedValue) {
                this.indicatorRect = { ...this.indicatorRect, opacity: 0 };
                return;
            }
            // Find the wrapper for the selected switch
            const activeItem = this.listEl?.querySelector(`.toggle-item-wrapper[data-value="${selectedValue}"]`);
            if (activeItem) {
                this.indicatorRect = {
                    left: activeItem.offsetLeft,
                    top: activeItem.offsetTop,
                    width: activeItem.offsetWidth,
                    height: activeItem.offsetHeight,
                    opacity: 1
                };
            }
            else {
                this.indicatorRect = { ...this.indicatorRect, opacity: 0 };
            }
        });
    }
    parseOptions() {
        if (typeof this.options === 'string') {
            try {
                this.items = JSON.parse(this.options);
            }
            catch (e) {
                console.error('Invalid options JSON in ui-toggle-group');
                this.items = [];
            }
        }
        else {
            this.items = [...(this.options || [])];
        }
    }
    handleSwitchChange(event) {
        event.stopPropagation();
        const newValue = event.detail.value;
        const isChecked = event.detail.checked;
        if (this.selectionMode === 'single') {
            if (isChecked) {
                this.value = newValue;
            }
            else if (!this.required) {
                this.value = '';
            }
        }
        else {
            let values = Array.isArray(this.value) ? [...this.value] : [];
            if (isChecked) {
                if (this.maxSelections > 0 && values.length >= this.maxSelections) {
                    // Prevent selection if max reached
                    event.target.checked = false;
                    return;
                }
                if (!values.includes(newValue))
                    values.push(newValue);
            }
            else {
                values = values.filter(v => v !== newValue);
            }
            this.value = values;
        }
        this.toggleGroupChange.emit({ value: this.value });
        this.syncToggles();
        this.updateFormValue();
    }
    syncToggles() {
        const switches = this.el.shadowRoot?.querySelectorAll('ui-switch');
        switches?.forEach((sw) => {
            if (this.selectionMode === 'single') {
                sw.checked = sw.value === this.value;
            }
            else {
                const vals = Array.isArray(this.value) ? this.value : [];
                sw.checked = vals.includes(sw.value);
            }
        });
    }
    handleSearch = (e) => {
        this.searchQuery = e.detail.toLowerCase();
        const results = this.getFilteredItems();
        this.toggleGroupSearch.emit({ query: this.searchQuery, results });
    };
    getFilteredItems() {
        if (!this.searchQuery)
            return this.items;
        return this.items.filter(item => item.label?.toLowerCase().includes(this.searchQuery) ||
            item.value?.toLowerCase().includes(this.searchQuery));
    }
    handleSelectAll = (select) => {
        if (this.selectionMode !== 'multiple')
            return;
        if (select) {
            const allValues = this.items.map(i => i.value);
            this.value = this.maxSelections > 0 ? allValues.slice(0, this.maxSelections) : allValues;
        }
        else {
            this.value = [];
        }
        this.toggleGroupChange.emit({ value: this.value });
        this.syncToggles();
        this.updateFormValue();
    };
    toggleCollapse = () => {
        this.isCollapsed = !this.isCollapsed;
        this.toggleGroupCollapse.emit({ collapsed: this.isCollapsed });
    };
    // --- Drag & Drop ---
    onDragStart = (idx) => {
        if (!this.isDraggable)
            return;
        this.draggedIndex = idx;
    };
    onDragOver = (e, idx) => {
        if (!this.isDraggable)
            return;
        e.preventDefault();
        this.dragOverIndex = idx;
    };
    onDrop = (idx) => {
        if (!this.isDraggable || this.draggedIndex === -1)
            return;
        const newItems = [...this.items];
        const item = newItems.splice(this.draggedIndex, 1)[0];
        newItems.splice(idx, 0, item);
        this.items = newItems;
        this.toggleGroupReorder.emit({ oldIndex: this.draggedIndex, newIndex: idx, items: newItems });
        this.draggedIndex = -1;
        this.dragOverIndex = -1;
    };
    handleKeyDown = (e) => {
        if (!this.keyboardNavigation)
            return;
        const filtered = this.getFilteredItems();
        if (e.key === 'ArrowDown' || e.key === 'ArrowRight') {
            e.preventDefault();
            this.focusedIndex = (this.focusedIndex + 1) % filtered.length;
        }
        else if (e.key === 'ArrowUp' || e.key === 'ArrowLeft') {
            e.preventDefault();
            this.focusedIndex = (this.focusedIndex - 1 + filtered.length) % filtered.length;
        }
        else if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (this.focusedIndex !== -1) {
                const item = filtered[this.focusedIndex];
                this.toggleItemValue(item.value);
            }
        }
    };
    toggleItemValue(itemValue) {
        if (this.selectionMode === 'single') {
            this.value = itemValue;
        }
        else {
            let vals = Array.isArray(this.value) ? [...this.value] : [];
            if (vals.includes(itemValue)) {
                vals = vals.filter(v => v !== itemValue);
            }
            else {
                if (this.maxSelections === 0 || vals.length < this.maxSelections) {
                    vals.push(itemValue);
                }
            }
            this.value = vals;
        }
        this.toggleGroupChange.emit({ value: this.value });
        this.syncToggles();
        this.updateFormValue();
    }
    // --- Render Helpers ---
    renderLabel() {
        if (!this.label)
            return null;
        return (h("div", { class: "toggle-group-header" }, h("label", { class: "toggle-group-label" }, this.label, this.required && h("span", { class: "required" }, "*")), this.collapsible && (h("ui-button", { variant: "ghost", size: "xxs", iconOnly: true, icon: this.isCollapsed ? 'chevron-down' : 'chevron-up', iconLibrary: "lucide", iconSize: "16px", onClick: this.toggleCollapse, ariaLabel: this.isCollapsed ? 'Expand' : 'Collapse' }))));
    }
    renderSearch() {
        if (!this.searchable)
            return null;
        return (h("div", { class: "search-container" }, h("ui-icon", { name: "search", library: "lucide", size: "14px", class: "search-icon" }), h("ui-input", { type: "text", placeholder: this.searchPlaceholder, onInputChange: this.handleSearch, value: this.searchQuery, size: "sm", fullWidth: true })));
    }
    renderControls() {
        if (!this.showSelectAll || this.selectionMode !== 'multiple')
            return null;
        return (h("div", { class: "group-controls" }, h("ui-button", { variant: "ghost", size: "sm", onClick: () => this.handleSelectAll(true), icon: "check-circle", iconLibrary: "lucide", iconSize: "14px", label: "Select All", ariaLabel: "Select All" }), h("ui-button", { variant: "ghost", size: "sm", onClick: () => this.handleSelectAll(false), icon: "x-circle", iconLibrary: "lucide", iconSize: "14px", label: "Deselect All", ariaLabel: "Deselect All" }), this.maxSelections > 0 && h("span", { class: "max-badge" }, "Max: ", this.maxSelections)));
    }
    renderLoading() {
        if (this.showSkeleton) {
            return (h("div", { class: "skeleton-container" }, Array.from({ length: this.skeletonCount }).map(() => (h("div", { class: "skeleton-item" }, h("div", { class: "skeleton-switch" }), h("div", { class: "skeleton-text" }))))));
        }
        if (this.loading) {
            return h("div", { class: "loading-container" }, h("ui-icon", { name: "refresh", spin: true }), " ", this.loadingText);
        }
        return null;
    }
    render() {
        const isChecked = (val) => {
            if (this.selectionMode === 'single')
                return this.value === val;
            return Array.isArray(this.value) && this.value.includes(val);
        };
        const filtered = this.getFilteredItems();
        return (h(Host, { class: {
                'toggle-group-host': true,
                'group-disabled': this.disabled,
                'group-invalid': this.invalid,
                'group-collapsed': this.isCollapsed,
                'group-compact': this.compact,
            }, onKeyDown: this.handleKeyDown }, this.renderLabel(), this.renderSearch(), this.renderControls(), (this.loading || this.showSkeleton) ? this.renderLoading() : (!this.isCollapsed && (h("div", { class: {
                'toggle-list': true,
                [`layout-${this.layout}`]: true,
                'is-segmented': this.variant === 'segmented'
            }, style: this.layout === 'grid' ? { 'grid-template-columns': `repeat(${this.columns}, 1fr)` } : {}, ref: (el) => this.listEl = el }, this.variant === 'segmented' && (h("div", { class: "segmented-indicator", style: {
                transform: `translate3d(${this.indicatorRect.left}px, ${this.indicatorRect.top}px, 0)`,
                width: `${this.indicatorRect.width}px`,
                height: `${this.indicatorRect.height}px`,
                opacity: `${this.indicatorRect.opacity}`,
                backgroundColor: `var(--toggle-group-${this.color})`
            } })), filtered.map((opt, idx) => (h("div", { class: {
                'toggle-item-wrapper': true,
                'is-dragging': this.draggedIndex === idx,
                'is-drag-over': this.dragOverIndex === idx,
                'is-focused': this.focusedIndex === idx,
                'is-active': isChecked(opt.value) && this.variant === 'segmented'
            }, "data-value": opt.value, onClick: () => this.toggleItemValue(opt.value), draggable: this.isDraggable, onDragStart: () => this.onDragStart(idx), onDragOver: (e) => this.onDragOver(e, idx), onDrop: () => this.onDrop(idx) }, this.isDraggable && h("ui-icon", { name: "menu", class: "drag-handle" }), h("ui-switch", { value: opt.value, label: opt.label, "icon-on": opt.icon, disabled: this.disabled || opt.disabled, checked: isChecked(opt.value), size: this.size, color: this.color, variant: this.variant, shape: this.shape, "label-position": this.labelPosition, "show-icons": this.showIcons, "enable-animation": this.enableAnimation, readonly: this.readonly }))))))), this.invalid && this.errorMessage && (h("div", { class: "error-message" }, h("ui-icon", { name: "alert-circle", library: "lucide", size: "14px" }), this.errorMessage)), this.helperText && !this.invalid && h("div", { class: "helper-text" }, this.helperText)));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "options": [{
                "handleOptionsChange": 0
            }],
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
UIToggleGroup.style = toggleGroupCss();

export { Dropdown as ui_dropdown, UIToggleGroup as ui_toggle_group };
