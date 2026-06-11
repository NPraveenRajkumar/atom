import { r as registerInstance, c as createEvent, a as getElement, h } from './index-Dqu2zaH1.js';
import { n as normalizeComponentSize } from './component-size-C7gf39HE.js';

const checkboxCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.checkbox-badge{display:inline-block;min-width:18px;height:18px;padding:0 6px;background:var(--color-success, #3dcd58);color:var(--text-standard, #ffffff);font-size:10px;font-weight:700;border-radius:9px;margin-inline-start:8px;vertical-align:middle;text-align:center;line-height:18px;box-shadow:0 2px 4px rgba(var(--color-success-rgb, 61, 205, 88), 0.2)}.btn-confetti{position:absolute;border-radius:50%;pointer-events:none;z-index:100;animation:confetti-drift 0.8s ease-out forwards}@keyframes confetti-drift{0%{transform:translate(0, 0) scale(1) rotate(0deg);opacity:1}100%{transform:translate(var(--vx), var(--vy)) scale(0) rotate(var(--vr));opacity:0}}[class*=checkbox-reveal-]{opacity:0;animation-fill-mode:forwards;animation-delay:var(--reveal-delay, 0ms)}.checkbox-reveal-fade-in{animation:checkbox-fade-in 0.6s ease-out forwards}.checkbox-reveal-slide-up{animation:checkbox-slide-up 0.6s cubic-bezier(0.23, 1, 0.32, 1) forwards}.checkbox-reveal-zoom{animation:checkbox-zoom 0.6s cubic-bezier(0.34, 1.56, 0.64, 1) forwards}@keyframes checkbox-fade-in{from{opacity:0}to{opacity:1}}@keyframes checkbox-slide-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes checkbox-zoom{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}.checkbox-tooltip{position:absolute;background:var(--bg-primary, #1f2937);color:var(--text-standard, #ffffff);padding:6px 12px;border-radius:6px;font-size:12px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity 0.2s ease;z-index:10}.checkbox-input-wrapper:hover .checkbox-tooltip{opacity:1}.checkbox-tooltip-top{bottom:calc(100% + 10px);left:50%;transform:translateX(-50%)}.checkbox-tooltip-bottom{top:calc(100% + 10px);left:50%;transform:translateX(-50%)}.checkbox-tooltip-left{inset-inline-end:calc(100% + 10px);top:50%;transform:translateY(-50%)}.checkbox-tooltip-right{inset-inline-start:calc(100% + 10px);top:50%;transform:translateY(-50%)}:host{display:inline-block;--ui-checkbox-border:var(--border-strong, #bfc8d8);--ui-checkbox-border-hover:var(--color-primary, #94a3b8);--ui-checkbox-bg:var(--bg-primary, #ffffff);--ui-checkbox-checked-bg:var(--color-primary, #3b82f6);--text-primary:var(--label-color, inherit);--text-secondary:var(--label-subtitle-color, inherit);--error-color-light:var(--bg-secondary, #fef2f2)}:host-context(.dark),:host-context([data-theme=dark]),:host-context([data-theme=violet]),:host-context([data-theme=pink]),:host-context([data-theme=blue]),:host-context([data-theme=green]),:host(.dark){--ui-checkbox-border:var(--border-strong, #334155);--ui-checkbox-border-hover:var(--color-primary, #475569);--ui-checkbox-bg:var(--bg-primary, #1e293b);--ui-checkbox-checked-bg:var(--color-primary, #4ade80)}.checkbox-container{display:inline-flex;flex-direction:column;gap:4px;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;vertical-align:middle;box-sizing:border-box;color:inherit}.checkbox-container.checkbox-rtl{direction:rtl}.checkbox-container *{box-sizing:border-box}.checkbox-label{display:flex;align-items:center;gap:12px;cursor:pointer;user-select:none;position:relative;transition:all 0.2s ease}.checkbox-label-top .checkbox-label{flex-direction:column;align-items:flex-start;gap:8px}.checkbox-label-top .checkbox-label .checkbox-label-text{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;color:var(--text-primary)}.checkbox-label-bottom .checkbox-label{flex-direction:column-reverse;align-items:flex-start;gap:8px}.checkbox-label-bottom .checkbox-label .checkbox-label-text{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;color:var(--text-primary)}.checkbox-label-left .checkbox-label{flex-direction:row-reverse;justify-content:flex-end}.checkbox-container.checkbox-disabled .checkbox-label{cursor:not-allowed;opacity:0.6}.checkbox-container.checkbox-readonly .checkbox-label{cursor:default}.label-section{display:flex;flex-direction:column;align-items:flex-start;flex:1;min-width:0}.label-section.is-side{flex-direction:row;align-items:baseline;gap:8px}.label-section.is-side .checkbox-description{margin-top:0}.checkbox-description{font-size:0.75rem;opacity:0.7;font-weight:400;line-height:1.1;margin-top:2px;color:var(--text-secondary)}.checkbox-input-wrapper{position:relative;display:inline-flex;align-items:center;justify-content:center;flex-shrink:0;overflow:hidden;border-radius:inherit}.checkbox-input{position:absolute;opacity:0;cursor:pointer;width:100%;height:100%;margin:0;padding:0;z-index:1;appearance:none;-webkit-appearance:none;-moz-appearance:none}.checkbox-box{position:relative;display:flex;align-items:center;justify-content:center;border:2px solid var(--ui-checkbox-border);background:var(--ui-checkbox-bg);transition:all 0.35s cubic-bezier(0.4, 0, 0.2, 1);box-shadow:0 1px 2px rgba(0, 0, 0, 0.05)}.checkbox-box .glow-layer{position:absolute;inset:-4px;background:var(--ui-checkbox-color, var(--ui-checkbox-checked-bg, var(--color-primary, #3b82f6)));opacity:0;filter:blur(12px);transition:opacity 0.4s ease;border-radius:inherit;z-index:-1;pointer-events:none}.checkbox-glow.checkbox-checked .checkbox-box .glow-layer{opacity:0.4}.checkbox-xxxs .checkbox-box{width:12px;height:12px;border-radius:3px}.checkbox-xxxs .check-icon{font-size:8px;width:8px;height:8px;display:flex;align-items:center;justify-content:center}.checkbox-xxxs .checkbox-label-text{font-size:0.75rem;line-height:1.25}.checkbox-xxs .checkbox-box{width:14px;height:14px;border-radius:4px}.checkbox-xxs .check-icon{font-size:9px;width:9px;height:9px;display:flex;align-items:center;justify-content:center}.checkbox-xxs .checkbox-label-text{font-size:0.8125rem;line-height:1.25}.checkbox-xs .checkbox-box{width:16px;height:16px;border-radius:4px}.checkbox-xs .check-icon{font-size:10px;width:10px;height:10px;display:flex;align-items:center;justify-content:center}.checkbox-xs .checkbox-label-text{font-size:0.875rem;line-height:1.5}.checkbox-sm .checkbox-box{width:18px;height:18px;border-radius:5px}.checkbox-sm .check-icon{font-size:11px;width:11px;height:11px;display:flex;align-items:center;justify-content:center}.checkbox-sm .checkbox-label-text{font-size:0.9375rem;line-height:1.5}.checkbox-md .checkbox-box{width:20px;height:20px;border-radius:6px}.checkbox-md .check-icon{font-size:12px;width:12px;height:12px;display:flex;align-items:center;justify-content:center}.checkbox-md .checkbox-label-text{font-size:1rem;line-height:1.5}.checkbox-lg .checkbox-box{width:24px;height:24px;border-radius:8px}.checkbox-lg .check-icon{font-size:14px;width:14px;height:14px;display:flex;align-items:center;justify-content:center}.checkbox-lg .checkbox-label-text{font-size:1.125rem;line-height:1.5}.checkbox-xl .checkbox-box{width:28px;height:28px;border-radius:10px}.checkbox-xl .check-icon{font-size:16px;width:16px;height:16px;display:flex;align-items:center;justify-content:center}.checkbox-xl .checkbox-label-text{font-size:1.25rem;line-height:1.5}.checkbox-xxl .checkbox-box{width:32px;height:32px;border-radius:12px}.checkbox-xxl .check-icon{font-size:18px;width:18px;height:18px;display:flex;align-items:center;justify-content:center}.checkbox-xxl .checkbox-label-text{font-size:1.375rem;line-height:1.5}.checkbox-xxxl .checkbox-box{width:40px;height:40px;border-radius:14px}.checkbox-xxxl .check-icon{font-size:24px;width:24px;height:24px;display:flex;align-items:center;justify-content:center}.checkbox-xxxl .checkbox-label-text{font-size:1.5rem;line-height:1.5}.checkbox-rounded .checkbox-box{border-radius:50%}.checkbox-square .checkbox-box{border-radius:0}.checkbox-glass .checkbox-box{background:rgba(255, 255, 255, 0.1) !important;backdrop-filter:blur(8px);border-color:rgba(255, 255, 255, 0.2) !important;border-width:1.5px}.checkbox-glass.checkbox-checked .checkbox-box{background:currentColor !important;backdrop-filter:none}.checkbox-raised .checkbox-box{border-color:rgba(0, 0, 0, 0.1);box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.8), 0 2px 4px rgba(0, 0, 0, 0.1), 0 4px 8px rgba(0, 0, 0, 0.05) !important}.checkbox-button,.checkbox-chip{width:auto}.checkbox-button .checkbox-label,.checkbox-chip .checkbox-label{padding:8px 16px;border:2px solid var(--border-color, var(--border-default, #e5e7eb));border-radius:8px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);background:var(--surface-color, var(--bg-primary, #ffffff));line-height:1.5;box-sizing:border-box;min-height:40px}.checkbox-button .checkbox-box,.checkbox-chip .checkbox-box{margin-inline-end:8px;transform:scale(0.85)}.checkbox-button.checkbox-primary.checkbox-checked .checkbox-label,.checkbox-chip.checkbox-primary.checkbox-checked .checkbox-label{background:rgba(var(--color-success-rgb, 61, 205, 88), 0.1);border-color:var(--color-success, #3dcd58)}.checkbox-button.checkbox-secondary.checkbox-checked .checkbox-label,.checkbox-chip.checkbox-secondary.checkbox-checked .checkbox-label{background:rgba(107, 114, 128, 0.1);border-color:var(--color-primary, #6b7280)}.checkbox-button.checkbox-success.checkbox-checked .checkbox-label,.checkbox-chip.checkbox-success.checkbox-checked .checkbox-label{background:rgba(22, 163, 74, 0.1);border-color:var(--color-success, #16a34a)}.checkbox-button.checkbox-danger.checkbox-checked .checkbox-label,.checkbox-chip.checkbox-danger.checkbox-checked .checkbox-label{background:rgba(var(--color-danger-rgb, 220, 38, 38), 0.1);border-color:var(--color-danger-hover, #dc2626)}.checkbox-button.checkbox-warning.checkbox-checked .checkbox-label,.checkbox-chip.checkbox-warning.checkbox-checked .checkbox-label{background:rgba(var(--color-warning-rgb, 245, 158, 11), 0.1);border-color:var(--color-warning, #f59e0b)}.checkbox-button.checkbox-info.checkbox-checked .checkbox-label,.checkbox-chip.checkbox-info.checkbox-checked .checkbox-label{background:rgba(8, 145, 178, 0.1);border-color:var(--color-info-hover, #0891b2)}.checkbox-button.checkbox-hovered:not(.checkbox-disabled) .checkbox-label,.checkbox-chip.checkbox-hovered:not(.checkbox-disabled) .checkbox-label{box-shadow:0 4px 12px rgba(0, 0, 0, 0.08);transform:translateY(-1px)}.checkbox-chip .checkbox-label{border-radius:20px;padding:4px 12px;min-height:32px}.checkbox-animate .checkbox-box::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:var(--ui-checkbox-color, var(--ui-checkbox-checked-bg, var(--color-primary, #3b82f6)));transform:scale(0);transition:transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);border-radius:inherit;z-index:0}.checkbox-animate .checkbox-checked .checkbox-box::after,.checkbox-animate .checkbox-indeterminate .checkbox-box::after{transform:scale(1)}.checkbox-animate .checkbox-checked .check-icon,.checkbox-animate .checkbox-indeterminate .check-icon{z-index:1;animation:checkmark-pop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}.checkbox-primary{--ui-checkbox-color:var(--color-primary, #3b82f6)}.checkbox-secondary{--ui-checkbox-color:var(--text-muted, #6b7280)}.checkbox-success{--ui-checkbox-color:var(--color-success, #16a34a)}.checkbox-danger{--ui-checkbox-color:var(--color-danger-hover, #dc2626)}.checkbox-warning{--ui-checkbox-color:var(--color-warning, #f59e0b)}.checkbox-info{--ui-checkbox-color:var(--color-info-hover, #0891b2)}.checkbox-checked .checkbox-box,.checkbox-indeterminate .checkbox-box{background:var(--ui-checkbox-color, var(--ui-checkbox-checked-bg, var(--color-primary, #3b82f6)));border-color:var(--ui-checkbox-color, var(--ui-checkbox-checked-bg, var(--color-primary, #3b82f6)))}.checkbox-box{background:var(--ui-checkbox-bg);border-color:var(--ui-checkbox-border)}.checkmark-svg{width:100%;height:100%;display:block;padding:10%;color:var(--text-standard, #ffffff);z-index:2}.custom-image-mark{width:100%;height:100%;object-fit:contain;border-radius:inherit;z-index:2}.custom-icon-mark{z-index:2;color:var(--text-standard, #ffffff)}.checkmark-path{stroke-dasharray:48;stroke-dashoffset:48;transition:stroke-dashoffset 0.4s cubic-bezier(0.19, 1, 0.22, 1) 0.1s}.checkbox-checked .checkmark-path{stroke-dashoffset:0}.indeterminate-path{stroke-dasharray:20;stroke-dashoffset:20;transition:stroke-dashoffset 0.3s ease}.checkbox-indeterminate .indeterminate-path{stroke-dashoffset:0}.checkbox-checked .check-icon,.checkbox-indeterminate .check-icon{transform:scale(1)}@keyframes checkmark-pop{0%{transform:scale(0) rotate(-45deg)}70%{transform:scale(1.2) rotate(0deg)}100%{transform:scale(1) rotate(0deg)}}.checkbox-focused .checkbox-box{box-shadow:0 0 0 3px rgba(var(--color-success-rgb, 61, 205, 88), 0.2);border-color:var(--ui-checkbox-checked-bg)}.checkbox-hovered:not(.checkbox-disabled):not(.checkbox-readonly) .checkbox-box{border-color:var(--ui-checkbox-border-hover)}.checkbox-ripple .checkbox-box::before{content:"";position:absolute;top:50%;left:50%;width:100%;height:100%;border-radius:50%;transform:translate(-50%, -50%) scale(0);background:rgba(0, 0, 0, 0.1);pointer-events:none}.checkbox-ripple .checkbox-input:active~.checkbox-box::before{animation:ripple 0.6s ease}@keyframes ripple{0%{transform:translate(-50%, -50%) scale(0);opacity:1}100%{transform:translate(-50%, -50%) scale(3);opacity:0}}.checkbox-skeleton{pointer-events:none}.checkbox-skeleton .checkbox-box{background:var(--bg-primary, #e5e7eb) !important;border-color:var(--border-default, #e5e7eb) !important;animation:skeleton-shimmer 1.5s infinite linear;background:linear-gradient(90deg, var(--bg-primary, #e5e7eb) 25%, var(--bg-secondary, #f3f4f6) 50%, var(--bg-primary, #e5e7eb) 75%) !important;background-size:200% 100% !important}.checkbox-skeleton .checkbox-label-text{width:100px;height:1rem;background:var(--bg-primary, #e5e7eb);border-radius:4px;color:transparent;animation:skeleton-shimmer 1.5s infinite linear;background:linear-gradient(90deg, var(--bg-primary, #e5e7eb) 25%, var(--bg-secondary, #f3f4f6) 50%, var(--bg-primary, #e5e7eb) 75%);background-size:200% 100%}@keyframes skeleton-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}.checkbox-label-text{color:var(--text-primary);font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;display:inline-block;line-height:1.5}.required-indicator{color:var(--color-danger-hover, #dc2626);margin-inline-start:4px}.helper-text{font-size:0.875rem;color:var(--text-secondary);margin-inline-start:32px;display:flex;align-items:center;gap:4px}.checkbox-label-left .helper-text{margin-inline-start:0;margin-inline-end:32px}.checkbox-label-top .helper-text,.checkbox-label-bottom .helper-text{margin-inline-start:0;justify-content:center}.helper-text.error{color:var(--color-danger-hover, #dc2626)}.checkbox-invalid .checkbox-box{border-color:var(--color-danger-hover, #dc2626)}.checkbox-invalid:not(.checkbox-checked):not(.checkbox-indeterminate) .checkbox-box{background:var(--error-color-light, #fef2f2)}.checkbox-is-button{width:100%;height:100%}.checkbox-is-button .checkbox-label{padding:8px 16px;justify-content:center;background:var(--ui-checkbox-bg);transition:all 0.2s ease;width:100%;height:100%;border-radius:0;border:1px solid var(--ui-checkbox-border)}.checkbox-is-button .checkbox-label:hover:not(.checkbox-disabled){background:rgba(0, 0, 0, 0.02)}.checkbox-is-button .checkbox-box{margin-inline-end:8px;transform:scale(0.85)}.checkbox-is-button.checkbox-checked .checkbox-label{background:var(--ui-checkbox-checked-bg);color:var(--color-primary-text, #ffffff);z-index:1;border-color:var(--ui-checkbox-checked-bg)}.checkbox-is-button.checkbox-secondary.checkbox-checked .checkbox-label{background:var(--color-primary, #6b7280);border-color:var(--color-primary, #6b7280)}.checkbox-is-button.checkbox-success.checkbox-checked .checkbox-label{background:var(--color-success, #16a34a);border-color:var(--color-success, #16a34a)}.checkbox-is-button.checkbox-danger.checkbox-checked .checkbox-label{background:var(--color-danger-hover, #dc2626);border-color:var(--color-danger-hover, #dc2626)}.checkbox-is-button.checkbox-warning.checkbox-checked .checkbox-label{background:var(--color-warning, #f59e0b);border-color:var(--color-warning, #f59e0b)}.checkbox-is-button.checkbox-info.checkbox-checked .checkbox-label{background:var(--color-info-hover, #0891b2);border-color:var(--color-info-hover, #0891b2)}.checkbox-is-button+.checkbox-is-button .checkbox-label{margin-inline-start:-1px}`;

const Checkbox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.analyticsEvent = createEvent(this, "analyticsEvent");
        this.checkboxChange = createEvent(this, "checkboxChange");
        this.checkboxFocus = createEvent(this, "checkboxFocus");
        this.checkboxBlur = createEvent(this, "checkboxBlur");
    }
    analyticsEvent;
    customClass;
    badge;
    tooltip;
    tooltipPosition = 'top';
    get el() { return getElement(this); }
    internals;
    inputElement;
    async setFocus() {
        this.inputElement?.focus();
    }
    checked = false;
    indeterminate = false;
    disabled = false;
    readonly = false;
    required = false;
    invalid = false;
    label = '';
    helperText = '';
    errorMessage = '';
    value = '';
    name = '';
    size = 'md';
    color = 'primary';
    variant = 'default';
    skeleton = false;
    labelPosition = 'right';
    customCheckIcon = '';
    customIndeterminateIcon = '';
    /** High-Fidelity: Custom Image instead of check */
    customImage = '';
    /** High-Fidelity: Library for custom icons */
    customIconLibrary = 'lucide';
    checkboxTabIndex = 0;
    ariaLabel = '';
    ariaDescribedBy = '';
    enableAnimation = true;
    rippleEffect = true;
    labelClickable = true;
    rtl = false;
    /** High-Fidelity: Secondary description text */
    description = '';
    /** Position of the descriptive text relative to the label */
    descriptionPosition = 'below';
    /** High-Fidelity: Trigger confetti burst on check */
    confetti = false;
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
    isButton = false;
    isFocused = false;
    isHovered = false;
    particles = [];
    checkboxChange;
    checkboxFocus;
    checkboxBlur;
    componentWillLoad() {
        this.internals = this.el.attachInternals();
        this.updateFormValue();
        this.updateIndeterminateState();
    }
    /**
     * Stencil form-association callback
     */
    formResetCallback() {
        this.checked = false;
        this.indeterminate = false;
        this.updateFormValue();
    }
    updateIndeterminateState() {
        if (this.inputElement) {
            this.inputElement.indeterminate = this.indeterminate;
        }
    }
    handleChange = (event) => {
        if (this.disabled || this.readonly) {
            event.preventDefault();
            return;
        }
        const target = event.target;
        this.checked = target.checked;
        this.indeterminate = false;
        // Elite: Haptic
        if (this.haptic) {
            this.triggerHaptic(this.hapticIntensity);
        }
        // Elite: Confetti
        if (this.confetti && this.checked) {
            this.triggerConfetti();
        }
        this.updateFormValue();
        this.checkboxChange.emit({
            checked: this.checked,
            value: this.value,
            indeterminate: this.indeterminate,
        });
        this.analyticsEvent.emit({ checked: this.checked, value: this.value, indeterminate: this.indeterminate });
    };
    updateFormValue() {
        this.internals.setFormValue(this.checked ? this.value || 'on' : null);
    }
    triggerHaptic(type = 'light') {
        if (!window.navigator.vibrate)
            return;
        const pattern = type === 'heavy' ? [50, 20, 50] : (type === 'md' ? [30] : [10]);
        window.navigator.vibrate(pattern);
    }
    triggerConfetti() {
        const count = 15;
        const newParticles = Array.from({ length: count }).map((_, i) => ({
            id: Date.now() + i,
            x: 50,
            y: 50,
            vx: (Math.random() - 0.5) * 8,
            vy: (Math.random() - 0.5) * 8,
            r: Math.random() * 360,
            color: ['#3DCD58', '#4ade80', '#ffffff'][Math.floor(Math.random() * 3)],
            size: Math.random() * 6 + 4
        }));
        this.particles = [...newParticles];
        setTimeout(() => (this.particles = []), 800);
    }
    handleFocus = () => {
        if (this.disabled)
            return;
        this.isFocused = true;
        this.checkboxFocus.emit();
    };
    handleBlur = () => {
        this.isFocused = false;
        this.checkboxBlur.emit();
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
            this.checked = !this.checked;
            this.indeterminate = false;
            this.checkboxChange.emit({
                checked: this.checked,
                value: this.value,
                indeterminate: this.indeterminate,
            });
        }
    };
    renderCheckmark() {
        // Only show icon if checked or indeterminate
        if (!this.checked && !this.indeterminate)
            return null;
        if (this.customImage) {
            return h("img", { src: this.customImage, class: "custom-image-mark" });
        }
        if (this.indeterminate && this.customIndeterminateIcon) {
            return h("ui-icon", { name: this.customIndeterminateIcon, library: this.customIconLibrary, class: "custom-icon-mark" });
        }
        if (!this.indeterminate && this.customCheckIcon) {
            return h("ui-icon", { name: this.customCheckIcon, library: this.customIconLibrary, class: "custom-icon-mark" });
        }
        return (h("svg", { class: "checkmark-svg", viewBox: "0 0 24 24" }, this.indeterminate ? (h("path", { class: "indeterminate-path", fill: "none", stroke: "currentColor", "stroke-width": "3", "stroke-linecap": "round", d: "M5 12h14" })) : (h("path", { class: "checkmark-path", fill: "none", stroke: "currentColor", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round", d: "M5 13l4 4L19 7" }))));
    }
    renderLabel() {
        if (!this.label)
            return null;
        return (h("div", { class: `label-section is-${this.descriptionPosition}` }, h("span", { class: { 'checkbox-label-text': true, 'non-clickable': !this.labelClickable }, onClick: (e) => {
                if (!this.labelClickable) {
                    e.preventDefault();
                }
            } }, this.label, this.required && h("span", { class: "required-indicator" }, "*")), this.description && h("span", { class: "checkbox-description" }, this.description)));
    }
    renderHelperText() {
        if (this.invalid && this.errorMessage) {
            return (h("div", { class: "helper-text error" }, h("ui-icon", { name: "exclamation-circle", library: "fontawesome", size: "14px" }), this.errorMessage));
        }
        if (this.helperText) {
            return h("div", { class: "helper-text" }, this.helperText);
        }
        return null;
    }
    render() {
        const normalizedSize = normalizeComponentSize(this.size, 'md');
        const containerClasses = {
            'checkbox-container': true,
            [`checkbox-${normalizedSize}`]: true,
            [`checkbox-${this.color}`]: true,
            [`checkbox-${this.variant}`]: true,
            'checkbox-disabled': this.disabled,
            'checkbox-readonly': this.readonly,
            'checkbox-invalid': this.invalid,
            'checkbox-focused': this.isFocused,
            'checkbox-hovered': this.isHovered,
            [`checkbox-label-${this.labelPosition}`]: true,
            'checkbox-animate': this.enableAnimation,
            'checkbox-skeleton': this.skeleton,
            'checkbox-checked': this.checked,
            'checkbox-indeterminate': this.indeterminate,
            'checkbox-rtl': this.rtl,
            'checkbox-glow': this.glow,
            'checkbox-is-button': this.isButton,
            [`checkbox-reveal-${this.reveal}`]: this.reveal !== 'none',
            ...(this.customClass ? { [this.customClass]: true } : {}),
        };
        const checkboxClasses = {
            'checkbox-input-wrapper': true,
            'checkbox-checked': this.checked,
            'checkbox-indeterminate': this.indeterminate,
            'checkbox-ripple': this.rippleEffect && !this.disabled,
        };
        return (h("div", { key: '98ae46b3ba03456e81610b5c1558d2f62b2c697e', class: containerClasses, dir: this.rtl ? 'rtl' : 'ltr', style: { '--reveal-delay': `${this.revealDelay}ms` } }, h("label", { key: '8d7a330bb7f92b454076bef8e22cee9daa8f9fb4', class: "checkbox-label", onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, (this.labelPosition === 'left' || this.labelPosition === 'top') && this.renderLabel(), h("div", { key: 'fd9728537e2c16a564f9b363012802ba8fa1235e', class: checkboxClasses }, h("input", { key: '1074f40300a98aaef23eb2c03466cc972b1b3090', ref: el => this.inputElement = el, type: "checkbox", class: "checkbox-input", checked: this.checked, disabled: this.disabled, readonly: this.readonly, required: this.required, value: this.value, name: this.name, tabindex: this.checkboxTabIndex, "aria-label": this.ariaLabel || this.label, "aria-describedby": this.ariaDescribedBy, "aria-checked": this.indeterminate ? 'mixed' : this.checked.toString(), "aria-invalid": this.invalid.toString(), onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown }), h("div", { key: 'c769aaf4fe33649562de2848871114f15c88b742', class: "checkbox-box" }, h("div", { key: '7de0b8700ecaad754fe7bc0e44da00852c4bb014', class: "glow-layer" }), this.renderCheckmark(), this.particles.map(p => (h("span", { class: "btn-confetti", key: p.id, style: {
                left: `${p.x}%`,
                top: `${p.y}%`,
                '--vx': `${p.vx}px`,
                '--vy': `${p.vy}px`,
                '--vr': `${p.r}deg`,
                backgroundColor: p.color,
                width: `${p.size}px`,
                height: `${p.size}px`
            } })))), this.badge && h("span", { key: '99ad8db8cebfa106f5865c0a96470cb481ef9e91', class: "checkbox-badge" }, this.badge), this.tooltip && (h("div", { key: 'a2c46d9e27e9d404d543c31a1449b0ae945965c2', class: `checkbox-tooltip checkbox-tooltip-${this.tooltipPosition}` }, this.tooltip))), (this.labelPosition === 'right' || this.labelPosition === 'bottom') && this.renderLabel()), this.renderHelperText()));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "indeterminate": [{
                "updateIndeterminateState": 0
            }]
    }; }
};
Checkbox.style = checkboxCss();

export { Checkbox as ui_checkbox };
