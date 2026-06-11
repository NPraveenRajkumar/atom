import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const numberInputCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;font-family:inherit}:host.full-width{width:100%}:host.full-width .ni-wrapper{width:100%}.ni-label{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;color:var(--label-color, var(--ui-text-primary, var(--text-primary, #111827)));margin-bottom:8px;transition:color 0.2s ease}.ni-wrapper{display:inline-flex;align-items:center;border:1.5px solid var(--ui-border-default, var(--border-strong, #d1d5db));border-radius:10px;background:var(--ui-bg-var(--bg-primary, #ffffff), var(--bg-primary, #ffffff));transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05)}.ni-wrapper.ni-focused{border-color:var(--ui-color-primary, var(--color-primary, #10b981));box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.12), 0 4px 12px rgba(0, 0, 0, 0.05)}.ni-wrapper.ni-focused .ni-label{color:var(--ui-color-primary, var(--color-primary, #10b981))}.ni-wrapper.ni-error{border-color:var(--ui-color-error, var(--color-danger, #ef4444))}.ni-wrapper.ni-error .ni-label{color:var(--ui-color-error, var(--color-danger, #ef4444))}.ni-wrapper.ni-error.ni-focused{box-shadow:0 0 0 4px rgba(var(--color-danger-rgb, 239, 68, 68), 0.12)}.ni-wrapper.ni-disabled{background:var(--ui-bg-muted, var(--bg-primary, #f9fafb));opacity:0.65;pointer-events:none;cursor:not-allowed}.ni-wrapper.ni-sm{height:32px;font-size:12px;border-radius:6px}.ni-wrapper.ni-md{height:40px;font-size:14px}.ni-wrapper.ni-lg{height:48px;font-size:16px;border-radius:12px}.ni-wrapper.ni-plain{border:none;background:transparent;box-shadow:none;height:auto;overflow:visible}.ni-wrapper.ni-plain.ni-focused{box-shadow:none}.ni-btn{display:flex;align-items:center;justify-content:center;width:36px;height:100%;border:none;background:var(--bg-secondary, #f3f4f6);color:var(--text-secondary, #374151);font-size:18px;font-weight:600;cursor:pointer;transition:background 0.15s, color 0.15s;flex-shrink:0;line-height:1}.ni-btn:hover:not(:disabled){background:var(--bg-primary, #e5e7eb);color:var(--bg-primary, #111)}.ni-btn:active:not(:disabled){background:var(--bg-secondary, #d1d5db)}.ni-btn:disabled{opacity:0.4;cursor:not-allowed}.ni-btn.ni-dec{border-inline-end:1.5px solid var(--border-default, #e5e7eb)}.ni-btn.ni-inc{border-inline-start:1.5px solid var(--border-default, #e5e7eb)}.ni-stacker{display:flex;flex-direction:column;height:100%;border-inline-start:1.5px solid var(--border-default, #e5e7eb)}.ni-stacker .ni-btn{width:28px;height:50%;font-size:9px}.ni-stacker .ni-btn.ni-inc-sm{border-bottom:1px solid var(--border-default, #e5e7eb);border-radius:0}.ni-stacker .ni-btn.ni-dec-sm{border-radius:0}.ni-input{flex:1;min-width:60px;border:none;outline:none;background:transparent;font-size:inherit;color:var(--text-primary, #111827);text-align:center;padding:0 8px;appearance:textfield;-moz-appearance:textfield}.ni-input::-webkit-outer-spin-button,.ni-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.ni-affix{padding:0 8px;color:var(--label-subtitle-color, var(--text-muted, #6b7280));font-size:13px;white-space:nowrap;background:var(--bg-primary, #f9fafb);height:100%;display:flex;align-items:center}.ni-affix.ni-prefix{border-inline-end:1.5px solid var(--border-default, #e5e7eb)}.ni-affix.ni-suffix{border-inline-start:1.5px solid var(--border-default, #e5e7eb)}.ni-helper{font-size:12px;margin-top:5px;color:var(--label-subtitle-color, var(--text-muted, #6b7280))}.ni-helper.ni-helper-error{color:var(--color-danger, #ef4444)}`;

const NumberInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.numberChange = createEvent(this, "numberChange");
        this.numberInput = createEvent(this, "numberInput");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    get el() { return getElement(this); }
    internals;
    /** Whether to show the type-based prefix icon (e.g. hash for numbers) */
    showTypeIcon = false;
    /** Prefix icon to display */
    prefixIcon = '';
    /** Name of the input */
    name;
    /** Current value */
    value = 0;
    /** Minimum value */
    min = -Infinity;
    /** Maximum value */
    max = Infinity;
    /** Step amount */
    step = 1;
    /** Label text */
    label = '';
    /** Placeholder */
    placeholder = '0';
    /** Disabled state */
    disabled = false;
    /** Readonly state */
    readonly = false;
    /** Size variant */
    size = 'md';
    /** Style variant */
    variant = 'default';
    /** Prefix text/symbol (e.g. '$') */
    prefixText = '';
    /** Suffix text/symbol (e.g. 'kg') */
    suffixText = '';
    /** Helper text below input */
    helperText = '';
    /** Error text — also sets error state */
    errorText = '';
    /** Number of decimal places (-1 = no rounding) */
    precision = -1;
    /** Show stepper buttons */
    showStepper = false;
    /** Controls layout of stepper: 'sides' | 'right' | 'none' */
    stepperLayout = 'sides';
    /** Keyboard shortcut: scroll wheel to change value */
    scrollWheel = true;
    /** Full width */
    fullWidth = false;
    /** RTL support */
    rtl = false;
    inputValue = '0';
    isFocused = false;
    stepperInterval;
    numberChange;
    numberInput;
    componentWillLoad() {
        if (this.variant === 'plain') {
            this.showStepper = false;
        }
        this.inputValue = this.format(this.value);
        this.internals.setFormValue(this.value.toString());
    }
    valueChanged(val) {
        this.inputValue = this.format(val);
        this.internals.setFormValue(val.toString());
    }
    format(val) {
        if (this.precision >= 0)
            return val.toFixed(this.precision);
        return String(val);
    }
    clamp(val) {
        return Math.min(this.max, Math.max(this.min, val));
    }
    increment = () => {
        if (this.disabled || this.readonly)
            return;
        const next = this.clamp(this.value + this.step);
        this.value = next;
        this.numberChange.emit(next);
    };
    decrement = () => {
        if (this.disabled || this.readonly)
            return;
        const next = this.clamp(this.value - this.step);
        this.value = next;
        this.numberChange.emit(next);
    };
    startStepping = (dir) => {
        if (this.disabled || this.readonly)
            return;
        const fn = dir === 'inc' ? this.increment : this.decrement;
        fn();
        this.stepperInterval = setInterval(fn, 100);
    };
    stopStepping = () => {
        clearInterval(this.stepperInterval);
    };
    handleInput = (e) => {
        const raw = e.detail;
        this.inputValue = raw;
        const parsed = parseFloat(raw);
        if (!isNaN(parsed)) {
            this.value = parsed;
            this.numberInput.emit(parsed);
        }
    };
    handleBlur = () => {
        this.isFocused = false;
        const parsed = parseFloat(this.inputValue);
        if (isNaN(parsed)) {
            this.value = this.clamp(0);
        }
        else {
            this.value = this.clamp(parsed);
        }
        this.inputValue = this.format(this.value);
        this.numberChange.emit(this.value);
    };
    handleWheel = (e) => {
        if (!this.scrollWheel || this.disabled || !this.isFocused)
            return;
        e.preventDefault();
        if (e.deltaY < 0)
            this.increment();
        else
            this.decrement();
    };
    handleKeyDown = (e) => {
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.increment();
        }
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.decrement();
        }
    };
    render() {
        const isError = !!this.errorText;
        const isRight = this.stepperLayout === 'right';
        return (h(Host, { key: '34a35f828baa751fbaab05db0ea6d7e4eb42281e', class: { 'full-width': this.fullWidth } }, this.label && h("label", { key: '756934f01225ddbdd8235fc9081177dedc004531', class: "ni-label" }, this.label), h("div", { key: '822ac22167cb75cdcb16274d4a5fa95291875cc9', class: {
                'ni-wrapper': true,
                [`ni-${this.size}`]: true,
                'ni-error': isError,
                'ni-disabled': this.disabled,
                'ni-focused': this.isFocused,
                'ni-right': isRight,
                'ni-rtl': this.rtl,
                'ni-plain': this.variant === 'plain',
            }, dir: this.rtl ? 'rtl' : 'ltr' }, this.showStepper && this.stepperLayout === 'sides' && (h("ui-button", { key: '714881b359dfc953c8b6f93fb0295c0ae2f134ea', variant: "ghost", onMouseDown: () => this.startStepping('dec'), onMouseUp: this.stopStepping, onMouseLeave: this.stopStepping, onTouchStart: () => this.startStepping('dec'), onTouchEnd: this.stopStepping, onClick: (e) => e.preventDefault(), disabled: this.disabled || this.value <= this.min, tabIndex: -1, ariaLabel: "Decrease", icon: "minus", iconLibrary: "lucide", iconOnly: true, size: this.size === 'sm' || this.size === 'xs' ? 'sm' : 'md' })), this.renderPrefix(), h("ui-input", { key: 'b2d56228f500995d4f6fbd78c639e6383c36bd3e', class: "ni-input", type: "number", value: this.inputValue, min: this.min === -Infinity ? undefined : this.min, max: this.max === Infinity ? undefined : this.max, step: this.step, disabled: this.disabled, readonly: this.readonly, placeholder: this.placeholder, onInputChange: this.handleInput, onInputBlur: this.handleBlur, onFocusInternal: () => (this.isFocused = true), onWheel: (e) => this.handleWheel(e), onInputKeydown: (e) => this.handleKeyDown(e.detail), fullWidth: true, size: this.size, variant: "plain", showTypeIcon: false }), this.renderSuffix(), this.showStepper && isRight && (h("div", { key: 'e400b4eea2656a85a5c5df3487ead9f45367100b', class: "ni-stacker" }, h("ui-button", { key: '9cd89756bc4792dccc9657ca39b6d6cff2a9e819', variant: "ghost", onMouseDown: () => this.startStepping('inc'), onMouseUp: this.stopStepping, onMouseLeave: this.stopStepping, onTouchStart: () => this.startStepping('inc'), onTouchEnd: this.stopStepping, onClick: (e) => e.preventDefault(), disabled: this.disabled || this.value >= this.max, tabIndex: -1, ariaLabel: "Increase", icon: "chevron-up", iconLibrary: "lucide", iconOnly: true, size: "xxs" }), h("ui-button", { key: '42248f0ccc65d42c903775f8e5fcbd97f76e04e7', variant: "ghost", onMouseDown: () => this.startStepping('dec'), onMouseUp: this.stopStepping, onMouseLeave: this.stopStepping, onTouchStart: () => this.startStepping('dec'), onTouchEnd: this.stopStepping, onClick: (e) => e.preventDefault(), disabled: this.disabled || this.value <= this.min, tabIndex: -1, ariaLabel: "Decrease", icon: "chevron-down", iconLibrary: "lucide", iconOnly: true, size: "xxs" }))), this.showStepper && this.stepperLayout === 'sides' && (h("ui-button", { key: 'dbf5c5d29bf6945baaaa96a46915440088f2509f', variant: "ghost", onMouseDown: () => this.startStepping('inc'), onMouseUp: this.stopStepping, onMouseLeave: this.stopStepping, onTouchStart: () => this.startStepping('inc'), onTouchEnd: this.stopStepping, onClick: (e) => e.preventDefault(), disabled: this.disabled || this.value >= this.max, tabIndex: -1, ariaLabel: "Increase", icon: "plus", iconLibrary: "lucide", iconOnly: true, size: this.size === 'sm' || this.size === 'xs' ? 'sm' : 'md' }))), (this.helperText || this.errorText) && (h("div", { key: 'f4f1e6ff10c5ddbbc4e49c7e2325e103537e9e08', class: { 'ni-helper': true, 'ni-helper-error': isError } }, isError ? this.errorText : this.helperText))));
    }
    renderPrefix() {
        const hasPrefix = this.prefixText || this.prefixIcon;
        const showDefaultIcon = this.showTypeIcon && !hasPrefix;
        if (!hasPrefix && !showDefaultIcon)
            return null;
        return (h("span", { class: "ni-affix ni-prefix" }, this.prefixText && h("span", null, this.prefixText), (this.prefixIcon || showDefaultIcon) && (h("ui-icon", { library: "lucide", name: this.prefixIcon || 'hash', size: "14px" }))));
    }
    renderSuffix() {
        if (!this.suffixText)
            return null;
        return h("span", { class: "ni-affix ni-suffix" }, this.suffixText);
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
NumberInput.style = numberInputCss();

export { NumberInput as ui_number_input };
