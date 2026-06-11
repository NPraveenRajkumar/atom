import { r as registerInstance, c as createEvent, h, H as Host } from './index-DUsoYu9r.js';

const patternInputCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif}.pattern-input-wrapper{display:flex;flex-direction:column;gap:8px}.pattern-input-label{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;color:var(--label-color, var(--text-secondary, #374151));margin-bottom:8px}.pattern-input-required{color:var(--color-danger, #ef4444);margin-left:4px}.pattern-input-container{position:relative;display:flex;align-items:center;background:var(--bg-primary, #ffffff);border:2px solid var(--border-strong, #d1d5db);border-radius:8px;transition:all 0.2s ease;padding:0 12px}.pattern-input-container:hover:not(.pattern-input-container-error){border-color:var(--color-primary, #9ca3af)}.pattern-input-container-focused{border-color:var(--color-primary-hover, #2563eb);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 37, 99, 235), 0.1)}.pattern-input-container-error{border-color:var(--color-danger, #ef4444)}.pattern-input-container-error.pattern-input-container-focused{box-shadow:0 0 0 3px rgba(var(--color-danger-rgb, 239, 68, 68), 0.1)}.pattern-input-container-success{border-color:var(--color-success, #10b981)}.pattern-input-container-success.pattern-input-container-focused{box-shadow:0 0 0 3px rgba(var(--color-success-rgb, 16, 185, 129), 0.1)}.pattern-input-field{flex:1;border:none;outline:none;background:transparent;font-size:14px;color:var(--text-primary, #1f2937);font-family:"Courier New", monospace;letter-spacing:0.5px}.pattern-input-field::placeholder{color:var(--text-muted, #9ca3af);font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;letter-spacing:normal}.pattern-input-field:disabled{cursor:not-allowed;color:var(--text-muted, #9ca3af);background:var(--bg-primary, #f9fafb)}.pattern-input-sm{padding:6px 10px}.pattern-input-sm .pattern-input-field{font-size:13px;padding:2px 0}.pattern-input-md{padding:8px 12px}.pattern-input-md .pattern-input-field{font-size:14px;padding:4px 0}.pattern-input-lg{padding:10px 14px}.pattern-input-lg .pattern-input-field{font-size:16px;padding:6px 0}.pattern-input-status{display:flex;align-items:center;margin-left:8px}.status-icon{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;border-radius:50%;font-size:12px;font-weight:bold}.status-error{background:var(--bg-primary, #fef2f2);color:var(--color-danger, #ef4444)}.status-success{background:var(--bg-primary, #f0fdf4);color:var(--color-success, #10b981)}.pattern-input-footer{display:flex;justify-content:space-between;align-items:flex-start;min-height:20px}.pattern-input-messages{flex:1}.helper-text,.validation-message{display:block;font-size:12px;line-height:1.4}.helper-text{color:var(--text-muted, #6b7280)}.validation-error{color:var(--color-danger, #ef4444);font-weight:500}.validation-success{color:var(--color-success, #10b981);font-weight:500}.char-counter{font-size:12px;color:var(--text-muted, #6b7280);font-weight:500;white-space:nowrap;margin-left:12px}.pattern-input-disabled{opacity:0.6;cursor:not-allowed}.pattern-input-disabled .pattern-input-container{background:var(--bg-primary, #f9fafb);cursor:not-allowed}.pattern-input-field:focus-visible{outline:none}.status-icon{animation:statusFadeIn 0.2s ease}@keyframes statusFadeIn{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}.pattern-input-field[placeholder]{text-overflow:ellipsis}:host(.pattern-input-focused) .pattern-input-field{font-family:"Courier New", monospace}`;

const UIPatternInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.patternInputChange = createEvent(this, "patternInputChange");
        this.patternInput = createEvent(this, "patternInput");
        this.patternInputFocus = createEvent(this, "patternInputFocus");
        this.patternInputBlur = createEvent(this, "patternInputBlur");
        this.patternInputValidate = createEvent(this, "patternInputValidate");
    }
    inputElement;
    debounceTimer;
    /** Current input value */
    value = '';
    /** Input pattern for display (e.g., "(###) ###-####" for phone) */
    pattern;
    /** Validation regex pattern */
    validationRegex;
    /** Placeholder text */
    placeholder;
    /** Label text */
    label;
    /** Input name for forms */
    name;
    /** Disabled state */
    disabled = false;
    /** Required field */
    required = false;
    /** Size variant */
    size = 'md';
    /** Show validation status */
    showValidation = true;
    /** Allowed characters regex (default: all) */
    allowedChars;
    /** Auto-format as user types */
    autoFormat = true;
    /** Mask character for pattern (default: #) */
    maskChar = '#';
    /** Show character counter */
    showCounter = false;
    /** Max length */
    maxLength;
    /** Input type restriction */
    inputType = 'text';
    /** Helper text */
    helperText;
    /** Error message */
    errorMessage;
    /** Success message */
    successMessage;
    /** RTL support */
    rtl = false;
    /** Whether the input is clearable */
    clearable = false;
    /** Validation state */
    isValid = true;
    isTouched = false;
    isFocused = false;
    /** Value change event */
    patternInputChange;
    /** Input event */
    patternInput;
    /** Focus event */
    patternInputFocus;
    /** Blur event */
    patternInputBlur;
    /** Validation event */
    patternInputValidate;
    valueChanged(newValue) {
        this.validateInput(newValue);
    }
    componentDidLoad() {
        if (this.value) {
            this.validateInput(this.value);
        }
    }
    getInputTypeRegex() {
        switch (this.inputType) {
            case 'numeric':
                return /^[0-9]*$/;
            case 'alpha':
                return /^[a-zA-Z]*$/;
            case 'alphanumeric':
                return /^[a-zA-Z0-9]*$/;
            case 'custom':
                return this.allowedChars ? new RegExp(this.allowedChars) : null;
            default:
                return null;
        }
    }
    isCharAllowed(char, currentValue) {
        const typeRegex = this.getInputTypeRegex();
        if (typeRegex) {
            const testValue = currentValue + char;
            return typeRegex.test(testValue);
        }
        return true;
    }
    extractRawValue(formatted) {
        if (!this.pattern || !this.autoFormat)
            return formatted;
        // Remove all non-alphanumeric characters except spaces
        return formatted.replace(/[^\w\s]/g, '').replace(/\s+/g, '');
    }
    formatValue(raw) {
        if (!this.pattern || !this.autoFormat)
            return raw;
        let formatted = '';
        let rawIndex = 0;
        for (let i = 0; i < this.pattern.length && rawIndex < raw.length; i++) {
            const patternChar = this.pattern[i];
            if (patternChar === this.maskChar) {
                formatted += raw[rawIndex];
                rawIndex++;
            }
            else {
                formatted += patternChar;
            }
        }
        return formatted;
    }
    validateInput(value) {
        if (!value && !this.required) {
            this.isValid = true;
            return true;
        }
        if (!value && this.required) {
            this.isValid = false;
            return false;
        }
        if (this.validationRegex) {
            try {
                const regex = new RegExp(this.validationRegex);
                const rawValue = this.extractRawValue(value);
                this.isValid = regex.test(rawValue);
            }
            catch (e) {
                console.error('Invalid validation regex:', e);
                this.isValid = false;
            }
        }
        else {
            this.isValid = true;
        }
        return this.isValid;
    }
    handleInput = (event) => {
        let newValue = event.detail;
        // Extract raw characters
        const raw = this.extractRawValue(newValue);
        // Apply formatting if enabled
        const formatted = this.autoFormat ? this.formatValue(raw) : raw;
        // Update value
        this.value = formatted;
        // Validate
        const isValid = this.validateInput(formatted);
        // Emit events
        this.patternInput.emit({ value: raw, formatted });
        // Debounced change event
        clearTimeout(this.debounceTimer);
        this.debounceTimer = setTimeout(() => {
            this.patternInputChange.emit({ value: raw, formatted, isValid });
            this.patternInputValidate.emit({ isValid, value: raw });
        }, 300);
    };
    handleKeyPress = (event) => {
        if (this.disabled)
            return;
        const char = event.key;
        // Allow control keys
        if (char.length > 1 || event.ctrlKey || event.metaKey)
            return;
        const currentValue = this.extractRawValue(this.value);
        // Check if character is allowed
        if (!this.isCharAllowed(char, currentValue)) {
            event.preventDefault();
            return;
        }
        // Check max length
        if (this.maxLength && currentValue.length >= this.maxLength) {
            event.preventDefault();
        }
    };
    handlePaste = (event) => {
        if (this.disabled)
            return;
        event.preventDefault();
        const pastedText = event.clipboardData?.getData('text') || '';
        // Filter pasted text based on allowed characters
        let filtered = '';
        for (const char of pastedText) {
            if (this.isCharAllowed(char, filtered)) {
                filtered += char;
            }
        }
        // Apply max length
        if (this.maxLength) {
            const currentRaw = this.extractRawValue(this.value);
            const remaining = this.maxLength - currentRaw.length;
            filtered = filtered.substring(0, remaining);
        }
        // Insert filtered text
        const formatted = this.autoFormat ? this.formatValue(filtered) : filtered;
        this.value = formatted;
        if (this.inputElement) {
            this.inputElement.value = formatted;
        }
        // Validate and emit
        const isValid = this.validateInput(formatted);
        this.patternInputChange.emit({ value: filtered, formatted, isValid });
    };
    handleFocus = () => {
        this.isFocused = true;
        this.patternInputFocus.emit();
    };
    handleBlur = () => {
        this.isFocused = false;
        this.isTouched = true;
        this.patternInputBlur.emit();
    };
    getValidationMessage() {
        if (!this.isTouched || !this.showValidation)
            return null;
        if (!this.isValid && this.errorMessage) {
            return this.errorMessage;
        }
        if (this.isValid && this.value && this.successMessage) {
            return this.successMessage;
        }
        return null;
    }
    getCharCount() {
        const raw = this.extractRawValue(this.value);
        return {
            current: raw.length,
            max: this.maxLength,
        };
    }
    render() {
        const validationMsg = this.getValidationMessage();
        const charCount = this.getCharCount();
        const showError = this.isTouched && !this.isValid && this.showValidation;
        const showSuccess = this.isTouched && this.isValid && this.value && this.showValidation;
        return (h(Host, { key: '9cfd6e56d3dd519cf55cac5e2235f2354a52721c', class: {
                'pattern-input-host': true,
                'pattern-input-disabled': this.disabled,
                'pattern-input-focused': this.isFocused,
                'pattern-input-error': showError,
                'pattern-input-success': showSuccess,
            } }, h("div", { key: '1671b3507d2aec67260e71b5d5474c0f0c7d651e', class: "pattern-input-wrapper", dir: this.rtl ? 'rtl' : 'ltr' }, this.label && (h("label", { key: '930d777f7a89a971ba40dc70c7d40580efe61553', class: "pattern-input-label" }, this.label, this.required && h("span", { key: 'ec37aa883c2685c3d5f6f8216555e1d7e1ea03fc', class: "pattern-input-required" }, "*"))), h("div", { key: '8072997dc60ce56e0c66aac528ffcc031c7279b8', class: {
                'pattern-input-container': true,
                [`pattern-input-${this.size}`]: true,
                'pattern-input-container-focused': this.isFocused,
                'pattern-input-container-error': showError,
                'pattern-input-container-success': showSuccess,
            } }, h("slot", { key: 'd6a57fddf8b72b150ded442c8a396cff618c67e4', name: "prefix" }), h("ui-input", { key: 'e599eb6b3930f523b994e6ca144f11e2679bb578', ref: el => (this.inputElement = el), type: "text", class: "pattern-input-field", value: this.value, placeholder: this.placeholder || this.pattern, disabled: this.disabled, required: this.required, name: this.name, maxLength: this.pattern?.length || this.maxLength, onInputChange: this.handleInput, onInputKeydown: (e) => this.handleKeyPress(e.detail), onPasteInternal: (e) => this.handlePaste(e.detail), onFocusInternal: this.handleFocus, onInputBlur: this.handleBlur, ariaInvalid: showError, ariaRequired: this.required, fullWidth: true, size: this.size }), this.showValidation && (h("span", { key: '70fd6c40881eb546323d3328fa492b079b6af342', class: "pattern-input-status" }, showError && h("ui-icon", { key: '6c7e1aa7143bd48d713e5a6151623a12f1c593d8', name: "x-circle", library: "lucide", size: "1.2em", class: "status-icon status-error" }), showSuccess && h("ui-icon", { key: '1ca858ea0ce27bc2e58b27b30a35d5412bfde6c7', name: "check-circle", library: "lucide", size: "1.2em", class: "status-icon status-success" }))), this.clearable && this.value && !this.disabled && (h("ui-button", { key: '099210c8bcb453b480c84069d4de050b7d0f4ee3', variant: "ghost", class: "pattern-input-clear", onClick: () => {
                this.value = '';
                this.patternInputChange.emit({ value: '', formatted: '', isValid: this.required ? false : true });
            }, ariaLabel: "Clear input", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })), h("slot", { key: 'e69b12741509f6d5882b15bc8f68adc962f0d83e', name: "suffix" })), h("div", { key: '85a62c89a440665d10cedbb79be5e46ea5415dae', class: "pattern-input-footer" }, h("div", { key: '3c225fb91c2de23a2e142896eb83016cf5572e2e', class: "pattern-input-messages" }, this.helperText && !validationMsg && (h("span", { key: '6ad5311570c86551b4836977b6094028c13317c3', class: "helper-text" }, this.helperText)), validationMsg && (h("span", { key: '91e7c6a38f345345581f6835d141196b4539c0ce', class: {
                'validation-message': true,
                'validation-error': showError,
                'validation-success': showSuccess,
            } }, validationMsg))), this.showCounter && (h("span", { key: 'ad4fd580ebc1fcd9923bc8e58064ee35935a057a', class: "char-counter" }, charCount.current, charCount.max && ` / ${charCount.max}`))))));
    }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
UIPatternInput.style = patternInputCss();

export { UIPatternInput as ui_pattern_input };
