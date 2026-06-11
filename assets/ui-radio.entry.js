import { a as getElement, r as registerInstance, c as createEvent, h } from './index-DUsoYu9r.js';
import { n as normalizeComponentSize } from './component-size-C7gf39HE.js';

const radioCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.radio-badge{display:inline-block;min-width:18px;height:18px;padding:0 6px;background:var(--color-success, #3dcd58);color:var(--text-standard, #ffffff);font-size:10px;font-weight:700;border-radius:9px;margin-inline-start:8px;vertical-align:middle;text-align:center;line-height:18px;box-shadow:0 2px 4px rgba(var(--color-success-rgb, 61, 205, 88), 0.2)}[class*=radio-reveal-]{opacity:0;animation-fill-mode:forwards;animation-delay:var(--reveal-delay, 0ms)}.radio-reveal-fade-in{animation:radio-fade-in 0.6s ease-out forwards}.radio-reveal-slide-up{animation:radio-slide-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards}.radio-reveal-zoom{animation:radio-zoom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards}@keyframes radio-fade-in{from{opacity:0}to{opacity:1}}@keyframes radio-slide-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes radio-zoom{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}.radio-tooltip{position:absolute;background:var(--bg-primary, #1f2937);color:var(--text-standard, #ffffff);padding:6px 12px;border-radius:6px;font-size:12px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity 0.2s ease;z-index:10}.radio-input-wrapper:hover .radio-tooltip{opacity:1}.radio-tooltip-top{bottom:calc(100% + 10px);left:50%;transform:translateX(-50%)}.radio-tooltip-bottom{top:calc(100% + 10px);left:50%;transform:translateX(-50%)}.radio-tooltip-left{inset-inline-end:calc(100% + 10px);top:50%;transform:translateY(-50%)}.radio-tooltip-right{inset-inline-start:calc(100% + 10px);top:50%;transform:translateY(-50%)}:host{display:block;overflow:hidden;--ui-radio-border:var(--border-strong, #94a3b8);--ui-radio-bg:var(--bg-primary, #ffffff);--ui-radio-label:var(--label-color, var(--text-primary, #111827));--ui-radio-description:var(--label-subtitle-color, var(--text-secondary, #6b7280));--ui-radio-circle-hover:rgba(0, 0, 0, 0.05)}:host-context(.dark),:host-context([data-theme=dark]),:host-context([data-theme=violet]),:host-context([data-theme=pink]),:host-context([data-theme=blue]),:host-context([data-theme=green]),:host(.dark){--ui-radio-border:var(--border-default, #64748b);--ui-radio-bg:var(--bg-secondary, #111827);--ui-radio-circle-hover:rgba(255, 255, 255, 0.05)}.radio-container{display:inline-flex;flex-direction:column;width:100%;box-sizing:border-box;font-family:inherit;color:var(--text-primary)}.radio-container.radio-rtl{direction:rtl}.radio-label{display:flex;align-items:center;gap:12px;cursor:pointer;user-select:none;position:relative;box-sizing:border-box;flex-shrink:0;overflow:visible;}.radio-label *{box-sizing:border-box}.radio-container.radio-disabled .radio-label{cursor:not-allowed;opacity:0.6}.radio-container.radio-readonly .radio-label{cursor:default}.label-section{display:flex;flex-direction:column;align-items:flex-start;flex:1;min-width:0}.label-section.is-side{flex-direction:row;align-items:baseline;gap:8px}.label-section.is-side .radio-description{margin-top:0}.radio-description{font-size:0.75rem;opacity:0.7;font-weight:400;line-height:1.1;margin-top:2px;color:var(--ui-radio-description)}.radio-input-wrapper{flex-shrink:0;overflow:visible}.radio-input{position:absolute;opacity:0;cursor:pointer;width:100%;height:100%;margin:0;padding:0;z-index:1;appearance:none;-webkit-appearance:none;-moz-appearance:none}.radio-circle{position:relative;display:flex;align-items:center;justify-content:center;border:2px solid var(--ui-radio-border);background:var(--ui-radio-bg);border-radius:50%;transition:all 0.35s cubic-bezier(0.4, 0, 0.2, 1);box-sizing:border-box;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05)}.radio-circle .glow-layer{position:absolute;inset:-4px;background:currentColor;opacity:0;filter:blur(12px);transition:opacity 0.4s ease;border-radius:inherit;z-index:-1;pointer-events:none}.radio-glow.radio-checked .radio-circle .glow-layer{opacity:0.4}.radio-xxxs .radio-circle{width:12px;height:12px}.radio-xxxs .radio-dot{width:6px;height:6px}.radio-xxxs .radio-label-text{font-size:11px;line-height:16px}.radio-xxs .radio-circle{width:14px;height:14px}.radio-xxs .radio-dot{width:7px;height:7px}.radio-xxs .radio-label-text{font-size:12px;line-height:18px}.radio-xs .radio-circle{width:16px;height:16px}.radio-xs .radio-dot{width:8px;height:8px}.radio-xs .radio-label-text{font-size:13px;line-height:20px}.radio-sm .radio-circle{width:18px;height:18px}.radio-sm .radio-dot{width:9px;height:9px}.radio-sm .radio-label-text{font-size:14px;line-height:20px}.radio-md .radio-circle{width:20px;height:20px}.radio-md .radio-dot{width:10px;height:10px}.radio-md .radio-label-text{font-size:15px;line-height:24px}.radio-lg .radio-circle{width:24px;height:24px}.radio-lg .radio-dot{width:12px;height:12px}.radio-lg .radio-label-text{font-size:16px;line-height:28px}.radio-xl .radio-circle{width:28px;height:28px}.radio-xl .radio-dot{width:14px;height:14px}.radio-xl .radio-label-text{font-size:18px;line-height:32px}.radio-xxl .radio-circle{width:32px;height:32px;border-radius:50% !important}.radio-xxl .radio-dot{width:16px;height:16px}.radio-xxl .radio-label-text{font-size:20px;line-height:36px}.radio-xxxl .radio-circle{width:40px;height:40px;border-radius:50% !important}.radio-xxxl .radio-dot{width:20px;height:20px}.radio-xxxl .radio-label-text{font-size:24px;line-height:44px}.radio-dot-container{display:flex;align-items:center;justify-content:center;width:100%;height:100%;opacity:0;transform:scale(0);transition:all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);pointer-events:none}.radio-dot-container.radio-dot-visible{opacity:1;transform:scale(1)}.radio-dot{border-radius:50%;background:currentColor}.custom-radio-image{width:100%;height:100%;object-fit:contain;border-radius:50%;padding:4px}.custom-icon{display:flex;align-items:center;justify-content:center;font-size:12px;color:currentColor}.radio-animate .radio-checked .radio-dot,.radio-animate .radio-checked .custom-icon{animation:radio-pop 0.3s ease}@keyframes radio-pop{0%{transform:scale(0)}50%{transform:scale(1.3)}100%{transform:scale(1)}}.radio-variant-bordered .radio-label{padding:12px 16px;border:1px solid var(--border-color);border-radius:12px;transition:all 0.2s ease;width:100%}.radio-variant-bordered .radio-label:hover:not(.radio-disabled){border-color:currentColor;background:rgba(0, 0, 0, 0.02)}.radio-variant-bordered.radio-checked .radio-label{border-color:currentColor;background:rgba(var(--primary-rgb, 61, 205, 88), 0.05);box-shadow:0 4px 12px rgba(0, 0, 0, 0.05)}.radio-variant-underlined .radio-label{padding:12px 4px;border-bottom:2px solid transparent;transition:all 0.2s ease;border-radius:0;width:100%;box-sizing:border-box}.radio-variant-underlined.radio-checked .radio-label{border-bottom-color:currentColor}.radio-variant-card .radio-label{padding:20px;border:2px solid var(--border-color);border-radius:16px;background:var(--surface-color);transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);box-shadow:0 4px 6px rgba(0, 0, 0, 0.02);width:100%;box-sizing:border-box}.radio-variant-card .radio-label:hover:not(.radio-disabled){transform:translateY(-2px);box-shadow:0 8px 24px rgba(0, 0, 0, 0.08);border-color:var(--border-color-hover, #cbd5e1)}.radio-variant-card.radio-checked .radio-label{border-color:currentColor;background:rgba(var(--primary-rgb, 61, 205, 88), 0.02);box-shadow:0 12px 32px rgba(0, 0, 0, 0.1)}.radio-variant-card.radio-checked:hover .radio-label{transform:translateY(-2px)}.radio-variant-glass .radio-circle{background:rgba(255, 255, 255, 0.1) !important;backdrop-filter:blur(8px);border-color:rgba(255, 255, 255, 0.2) !important;border-width:1.5px}.radio-variant-glass.radio-checked .radio-circle{background:currentColor !important;backdrop-filter:none}.radio-variant-raised .radio-circle{border-color:rgba(0, 0, 0, 0.1);box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05) !important}.radio-skeleton{pointer-events:none}.radio-skeleton .radio-circle{background:var(--bg-primary, #e5e7eb);border-color:var(--border-default, #e5e7eb) !important}.radio-skeleton .radio-label-text,.radio-skeleton .radio-description{background:var(--bg-primary, #e5e7eb);color:transparent !important;border-radius:4px;width:fit-content;min-width:120px}.radio-skeleton .radio-description{min-width:180px}.radio-skeleton .radio-label{position:relative;overflow:hidden}.radio-skeleton-shimmer{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);animation:radio-shimmer 1.5s infinite}@keyframes radio-shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.radio-primary .radio-circle{border-color:var(--color-primary, #93c5fd)}.radio-primary .radio-checked .radio-circle{border-color:var(--primary-color);color:var(--primary-color)}.radio-secondary .radio-circle{border-color:var(--border-strong, #d1d5db)}.radio-secondary .radio-checked .radio-circle{border-color:var(--color-primary, #6b7280);color:var(--text-muted, #6b7280)}.radio-success .radio-circle{border-color:var(--color-success, #86efac)}.radio-success .radio-checked .radio-circle{border-color:var(--color-success, #16a34a);color:var(--color-success, #16a34a)}.radio-danger .radio-circle{border-color:var(--color-danger, #fca5a5)}.radio-danger .radio-checked .radio-circle{border-color:var(--color-danger-hover, #dc2626);color:var(--color-danger-hover, #dc2626)}.radio-warning .radio-circle{border-color:var(--color-danger, #fcd34d)}.radio-warning .radio-checked .radio-circle{border-color:var(--color-warning, #f59e0b);color:var(--color-warning, #f59e0b)}.radio-info .radio-circle{border-color:var(--color-primary, #67e8f9)}.radio-info .radio-checked .radio-circle{border-color:var(--color-info-hover, #0891b2);color:var(--color-info-hover, #0891b2)}.radio-focused .radio-circle{box-shadow:0 0 0 2px var(--surface-color), 0 0 0 4px currentColor}.radio-primary.radio-focused .radio-circle{box-shadow:0 0 0 2px var(--surface-color), 0 0 0 4px var(--color-success, #3dcd58)}.radio-secondary.radio-focused .radio-circle{box-shadow:0 0 0 2px var(--surface-color), 0 0 0 4px var(--color-primary, #6b7280)}.radio-success.radio-focused .radio-circle{box-shadow:0 0 0 2px var(--surface-color), 0 0 0 4px var(--color-success, #16a34a)}.radio-danger.radio-focused .radio-circle{box-shadow:0 0 0 2px var(--surface-color), 0 0 0 4px var(--color-danger-hover, #dc2626)}.radio-warning.radio-focused .radio-circle{box-shadow:0 0 0 2px var(--surface-color), 0 0 0 4px var(--color-warning, #f59e0b)}.radio-info.radio-focused .radio-circle{box-shadow:0 0 0 2px var(--surface-color), 0 0 0 4px var(--color-info-hover, #0891b2)}.radio-hovered:not(.radio-disabled):not(.radio-readonly) .radio-circle{border-color:currentColor;box-shadow:0 0 0 4px rgba(0, 0, 0, 0.05)}.radio-primary.radio-hovered .radio-circle{border-color:var(--color-success, #3dcd58)}.radio-secondary.radio-hovered .radio-circle{border-color:var(--color-primary, #6b7280)}.radio-success.radio-hovered .radio-circle{border-color:var(--color-success, #16a34a)}.radio-danger.radio-hovered .radio-circle{border-color:var(--color-danger-hover, #dc2626)}.radio-warning.radio-hovered .radio-circle{border-color:var(--color-warning, #f59e0b)}.radio-info.radio-hovered .radio-circle{border-color:var(--color-info-hover, #0891b2)}.radio-ripple .radio-circle::before{content:"";position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;transform:translate(-50%, -50%) scale(0);background:rgba(0, 0, 0, 0.1);pointer-events:none}.radio-ripple .radio-input:active~.radio-circle::before{animation:ripple 0.6s ease}@keyframes ripple{0%{transform:translate(-50%, -50%) scale(0);opacity:1}100%{transform:translate(-50%, -50%) scale(3);opacity:0}}.radio-label-content{display:flex;flex-direction:column;gap:4px}.radio-label-text{color:var(--ui-radio-label);font-weight:500;line-height:1.4}.radio-description{color:var(--ui-radio-description);font-size:0.875rem;line-height:1.4}.radio-invalid .radio-circle{border-color:var(--color-danger-hover, #dc2626)}.radio-is-button{width:100%;height:100%;overflow:inherit}.radio-is-button .radio-label{padding:8px 16px;justify-content:center;background:var(--surface-color);transition:all 0.2s ease;width:100%;height:100%;border-radius:inherit}.radio-is-button .radio-label:hover:not(.radio-disabled){background:var(--bg-secondary, #f3f4f6)}.radio-is-button .radio-circle{margin-inline-end:8px;transform:scale(0.85)}.radio-is-button.radio-checked .radio-label{background:var(--primary-color);color:var(--color-primary-text, #ffffff);z-index:1;border-color:var(--primary-color)}.radio-is-button.radio-secondary.radio-checked .radio-label{background:var(--color-primary, #6b7280);border-color:var(--color-primary, #6b7280)}.radio-is-button.radio-success.radio-checked .radio-label{background:var(--color-success, #16a34a);border-color:var(--color-success, #16a34a)}.radio-is-button.radio-danger.radio-checked .radio-label{background:var(--color-danger-hover, #dc2626);border-color:var(--color-danger-hover, #dc2626)}.radio-is-button.radio-warning.radio-checked .radio-label{background:var(--color-warning, #f59e0b);border-color:var(--color-warning, #f59e0b)}.radio-is-button.radio-info.radio-checked .radio-label{background:var(--color-info-hover, #0891b2);border-color:var(--color-info-hover, #0891b2)}.radio-is-button.radio-disabled .radio-label{background:var(--bg-primary, #f9fafb);color:var(--text-muted, #9ca3af)}`;

const Radio = class {
    internals;
    inputElement;
    async setFocus() {
        this.inputElement?.focus();
    }
    analyticsEvent;
    customClass;
    badge;
    tooltip;
    tooltipPosition = 'top';
    get el() { return getElement(this); }
    checked = false;
    disabled = false;
    readonly = false;
    invalid = false;
    label = '';
    description = '';
    value = '';
    name = '';
    required = false;
    size = 'md';
    color = 'primary';
    labelPosition = 'right';
    showDot = true;
    customIcon = '';
    /** High-Fidelity: Library for custom icons */
    customIconLibrary = 'lucide';
    /** High-Fidelity: Custom image for dot */
    customImage = '';
    radioTabIndex = 0;
    ariaLabel = '';
    ariaDescribedBy = '';
    enableAnimation = true;
    rippleEffect = true;
    skeleton = false;
    variant = 'default';
    isButton = false;
    rtl = false;
    /** Position of the descriptive text relative to the label */
    descriptionPosition = 'bottom';
    /** High-Fidelity: Glow effect when checked */
    glow = false;
    /** High-Fidelity: Enable haptic feedback */
    haptic = false;
    /** High-Fidelity: Haptic intensity */
    hapticIntensity = 'light';
    /** Entry animation when mounting */
    reveal = 'none';
    /** Delay for entry animation (ms) */
    revealDelay = 0;
    isFocused = false;
    isHovered = false;
    radioChange;
    radioFocus;
    radioBlur;
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.analyticsEvent = createEvent(this, "analyticsEvent");
        this.radioChange = createEvent(this, "radioChange");
        this.radioFocus = createEvent(this, "radioFocus");
        this.radioBlur = createEvent(this, "radioBlur");
    }
    connectedCallback() {
        // Assign internals after el is available
        this.internals = this.el.attachInternals();
    }
    componentWillLoad() {
        this.updateFormValue();
        this.updateValidity();
    }
    componentDidLoad() {
    }
    handleChange = (event) => {
        if (this.disabled || this.readonly) {
            event.preventDefault();
            return;
        }
        const target = event.target;
        this.checked = target.checked;
        this.radioChange.emit({
            checked: this.checked,
            value: this.value,
        });
        this.updateFormValue();
        this.updateValidity();
        // Elite: Haptic
        if (this.haptic && this.checked) {
            this.triggerHaptic(this.hapticIntensity);
        }
        this.analyticsEvent.emit({ checked: this.checked, value: this.value });
    };
    triggerHaptic(type = 'light') {
        if (!window.navigator.vibrate)
            return;
        const pattern = type === 'heavy' ? [50, 20, 50] : (type === 'md' ? [30] : [10]);
        window.navigator.vibrate(pattern);
    }
    handleFocus = () => {
        if (this.disabled)
            return;
        this.isFocused = true;
        this.radioFocus.emit();
    };
    handleBlur = () => {
        this.isFocused = false;
        this.radioBlur.emit();
    };
    handleMouseEnter = () => {
        if (this.disabled)
            return;
        this.isHovered = true;
    };
    handleMouseLeave = () => {
        this.isHovered = false;
    };
    handleKeyDown = (event) => {
        if (this.disabled || this.readonly)
            return;
        if (event.key === ' ' || event.key === 'Enter') {
            event.preventDefault();
            if (!this.checked) {
                this.checked = true;
                this.radioChange.emit({
                    checked: this.checked,
                    value: this.value,
                });
            }
        }
    };
    updateFormValue() {
        this.internals.setFormValue(this.checked ? this.value : null);
    }
    updateValidity() {
        if (this.required && !this.checked) {
            this.internals.setValidity({ valueMissing: true }, 'Please check this box if you want to proceed.', this.el);
        }
        else {
            this.internals.setValidity({});
        }
    }
    /**
     * Checks the component's validity.
     */
    async checkValidity() {
        return this.internals.checkValidity();
    }
    /**
     * Reports the component's validity.
     */
    async reportValidity() {
        return this.internals.reportValidity();
    }
    renderDot() {
        return (h("div", { class: {
                'radio-dot-container': true,
                'radio-dot-visible': this.checked
            } }, this.customImage ? (h("img", { src: this.customImage, class: "custom-radio-image" })) : this.customIcon ? (h("span", { class: "custom-icon" }, h("ui-icon", { library: this.customIconLibrary, name: this.customIcon }))) : (h("div", { class: "radio-dot" }))));
    }
    renderLabel() {
        if (!this.label && !this.description)
            return null;
        return (h("div", { class: `label-section is-${this.descriptionPosition}` }, this.label && h("span", { class: "radio-label-text" }, this.label), this.description && h("span", { class: "radio-description" }, this.description)));
    }
    render() {
        const normalizedSize = normalizeComponentSize(this.size, 'md');
        const containerClasses = {
            'radio-container': true,
            [`radio-${normalizedSize}`]: true,
            [`radio-${this.color}`]: true,
            'radio-disabled': this.disabled,
            'radio-readonly': this.readonly,
            'radio-invalid': this.invalid,
            'radio-focused': this.isFocused,
            'radio-hovered': this.isHovered,
            [`radio-label-${this.labelPosition}`]: true,
            'radio-animate': this.enableAnimation,
            [`radio-variant-${this.variant}`]: true,
            'radio-skeleton': this.skeleton,
            'radio-is-button': this.isButton,
            'radio-checked': this.checked,
            'radio-rtl': this.rtl,
            'radio-glow': this.glow,
            [`radio-reveal-${this.reveal}`]: this.reveal !== 'none',
            ...(this.customClass ? { [this.customClass]: true } : {}),
        };
        const radioClasses = {
            'radio-input-wrapper': true,
            'radio-checked': this.checked,
            'radio-ripple': this.rippleEffect && !this.disabled,
        };
        return (h("div", { key: '0c4ce7ac6764c4d375ba9fad698b92085fb210e8', class: containerClasses, dir: this.rtl ? 'rtl' : 'ltr', style: { '--reveal-delay': `${this.revealDelay}ms` } }, h("label", { key: 'cd53fbd547c5721b8f1cde8c291de8338cedc41e', class: "radio-label", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, (this.labelPosition === 'left' || this.labelPosition === 'top') && this.renderLabel(), h("div", { key: 'fe2026a06d12c129b3eb17dd81ed9bc6f6b13938', class: radioClasses }, h("input", { key: 'd68ab326208dd78f6ba549343b68e770b9327332', type: "radio", class: "radio-input", checked: this.checked, disabled: this.disabled || this.skeleton, readonly: this.readonly, value: this.value, name: this.name, tabindex: this.radioTabIndex, "aria-label": this.ariaLabel || this.label, "aria-describedby": this.ariaDescribedBy, "aria-checked": this.checked.toString(), "aria-invalid": this.invalid.toString(), onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, ref: el => this.inputElement = el }), h("div", { key: '0d1088ea92be9fa9a6264921291e7deef5cddeb6', class: "radio-circle" }, h("div", { key: '7f86f494d8fba0f6bd19e377df69528be4772b21', class: "glow-layer" }), this.renderDot()), this.badge && !this.skeleton && h("span", { key: '91b0b95ccd42b008bfc3aecede34a72759885371', class: "radio-badge" }, this.badge), this.tooltip && !this.skeleton && (h("div", { key: '25103349c130ec435844598f0105161008bf683b', class: `radio-tooltip radio-tooltip-${this.tooltipPosition}` }, this.tooltip))), (this.labelPosition === 'right' || this.labelPosition === 'bottom') && this.renderLabel(), this.skeleton && h("div", { key: '7022cb0f5cf4ca8c10e533265083eac0dfd3021d', class: "radio-skeleton-shimmer" })), (this.invalid || !this.internals.validity.valid) && (h("div", { key: 'b019b76af7c19c92e35dcf6349100f34b6a68a45', class: "radio-error-message", role: "alert" }, this.internals.validationMessage || 'Selection required'))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
};
Radio.style = radioCss();

export { Radio as ui_radio };
