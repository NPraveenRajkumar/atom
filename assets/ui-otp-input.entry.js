import { r as registerInstance, c as createEvent, a as getElement, h, F as Fragment } from './index-DUsoYu9r.js';

const otpInputCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.otp-input{display:flex;flex-direction:column;gap:12px}.otp-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;color:var(--label-color, var(--text-primary, #333));margin-bottom:8px}.otp-inputs-container{display:flex;gap:8px;justify-content:center;align-items:center}.otp-divider{width:12px;height:2px;background:var(--border-color, #e0e0e0);margin-inline-start:4px;margin-inline-end:4px}.otp-input-field{width:48px;height:56px;text-align:center;font-size:24px;font-weight:600;border:2px solid var(--border-color, #e0e0e0);border-radius:8px;background:var(--surface-color, var(--bg-primary, #ffffff));outline:none;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);caret-color:var(--primary-color, var(--color-success, #3dcd58))}.otp-input-field:hover:not(:disabled){border-color:var(--border-hover, #bbb)}.otp-input-field:focus,.otp-input-field.focused{border-color:var(--primary-color, var(--color-success, #3dcd58));box-shadow:0 0 0 3px rgba(var(--color-success-rgb, 61, 205, 88), 0.15);transform:translateY(-2px)}.otp-input-field.filled{border-color:var(--primary-color, var(--color-success, #3dcd58));background:var(--primary-color-light, rgba(var(--color-success-rgb, 61, 205, 88), 0.05))}.otp-input-field:disabled{background:var(--background-secondary, #f5f5f5);cursor:not-allowed;opacity:0.6}.otp-input-sm .otp-input-field{width:40px;height:48px;font-size:20px}.otp-input-lg .otp-input-field{width:56px;height:64px;font-size:28px}.otp-input-secondary .otp-input-field:focus{border-color:var(--color-primary, #6b7280);box-shadow:0 0 0 3px rgba(107, 114, 128, 0.15)}.otp-input-success .otp-input-field:focus{border-color:var(--color-success, #16a34a);box-shadow:0 0 0 3px rgba(22, 163, 74, 0.15)}.otp-input-danger .otp-input-field:focus{border-color:var(--color-danger-hover, #dc2626);box-shadow:0 0 0 3px rgba(var(--color-danger-rgb, 220, 38, 38), 0.15)}.otp-input-warning .otp-input-field:focus{border-color:var(--color-warning, #f59e0b);box-shadow:0 0 0 3px rgba(var(--color-warning-rgb, 245, 158, 11), 0.15)}.otp-input-info .otp-input-field:focus{border-color:var(--color-info-hover, #0891b2);box-shadow:0 0 0 3px rgba(8, 145, 178, 0.15)}.otp-input-underlined .otp-input-field{border:none;border-bottom:2px solid var(--border-color);border-radius:0;background:transparent}.otp-input-underlined .otp-input-field:focus{transform:none;border-bottom-color:var(--primary-color);box-shadow:none}.otp-input-flushed .otp-input-field{border:none;background:var(--background-secondary, var(--bg-secondary, #f3f4f6));border-radius:12px}.otp-input-flushed .otp-input-field:focus{background:var(--surface-color);box-shadow:0 4px 12px rgba(0, 0, 0, 0.05)}.otp-input-separated .otp-input-field{margin-inline-start:4px;margin-inline-end:4px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.05);border-radius:12px}.otp-input-invalid{animation:otp-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}.otp-input-invalid .otp-input-field{border-color:var(--danger-color, #f44336) !important}.otp-input-invalid .otp-input-field:focus{box-shadow:0 0 0 3px rgba(244, 67, 54, 0.15)}.error-text{display:flex;align-items:center;gap:6px;font-size:12px;color:var(--danger-color, #f44336)}.error-text i{font-size:14px}.helper-text{font-size:12px;color:var(--label-subtitle-color, var(--text-secondary, #666));text-align:center}.otp-input-skeleton{pointer-events:none}.otp-input-skeleton .otp-input-field{background:linear-gradient(90deg, var(--bg-secondary, #f3f4f6) 25%, var(--bg-primary, #e5e7eb) 50%, var(--bg-secondary, #f3f4f6) 75%);background-size:200% 100%;animation:skeleton-shimmer 1.5s infinite linear;border-color:transparent}.otp-input-skeleton .otp-label{width:80px;height:14px;background:var(--bg-primary, #e5e7eb);border-radius:4px;margin-bottom:8px}@keyframes skeleton-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@keyframes otp-shake{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-4px, 0, 0)}40%,60%{transform:translate3d(4px, 0, 0)}}@keyframes fillPulse{0%{transform:scale(1)}50%{transform:scale(1.1);box-shadow:0 0 15px rgba(var(--color-success-rgb, 61, 205, 88), 0.3)}100%{transform:scale(1)}}.otp-input-field.filled{animation:fillPulse 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}`;

const OtpInput = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.otpChange = createEvent(this, "otpChange");
        this.otpComplete = createEvent(this, "otpComplete");
        this.otpSubmit = createEvent(this, "otpSubmit");
        this.resendClick = createEvent(this, "resendClick");
    }
    get el() { return getElement(this); }
    length = 6;
    value = '';
    label = '';
    helperText = '';
    errorText = '';
    disabled = false;
    readonly = false;
    required = false;
    type = 'number';
    autoFocus = true;
    secure = false;
    size = 'md';
    color = 'primary';
    variant = 'default';
    invalid = false;
    skeleton = false;
    autoSubmit = false;
    groupSize = 0; // 0 means no grouping
    placeholder = '';
    /** RTL support */
    rtl = false;
    /** Resend interval in seconds */
    resendInterval = 60;
    /** Custom label for resend button */
    resendLabel = 'Resend Code';
    otpValues = [];
    focusedIndex = -1;
    internalInvalid = false;
    internalErrorText = '';
    resendTimer = 0;
    resendIntervalId;
    otpChange;
    otpComplete;
    otpSubmit;
    resendClick;
    inputRefs = [];
    componentWillLoad() {
        this.otpValues = new Array(this.length).fill('');
        if (this.value) {
            const chars = this.value.split('').slice(0, this.length);
            this.otpValues = [...chars, ...new Array(this.length - chars.length).fill('')];
        }
    }
    startResendTimer() {
        this.resendTimer = this.resendInterval;
        this.resendIntervalId = setInterval(() => {
            if (this.resendTimer > 0) {
                this.resendTimer--;
            }
            else {
                clearInterval(this.resendIntervalId);
            }
        }, 1000);
    }
    handleResend = () => {
        if (this.resendTimer > 0)
            return;
        this.resendClick.emit();
        this.startResendTimer();
    };
    disconnectedCallback() {
        if (this.resendIntervalId)
            clearInterval(this.resendIntervalId);
    }
    componentDidLoad() {
        if (this.autoFocus && this.inputRefs[0]) {
            this.inputRefs[0].focus();
        }
    }
    handleValueChange(newValue) {
        if (newValue === this.otpValues.join(''))
            return;
        const chars = newValue.split('').slice(0, this.length);
        this.otpValues = [...chars, ...new Array(this.length - chars.length).fill('')];
    }
    handleInput = (e, index) => {
        let inputValue = e.detail;
        // Only allow single character
        if (inputValue.length > 1) {
            inputValue = inputValue.slice(-1);
        }
        // Validate input type
        if ((this.type === 'number' || this.type === 'numeric') && inputValue && !/^\d$/.test(inputValue)) {
            this.showTemporaryError('Only numbers allowed');
            return;
        }
        if (this.type === 'alphanumeric' && inputValue && !/^[a-zA-Z0-9]$/.test(inputValue)) {
            this.showTemporaryError('Only letters and numbers allowed');
            return;
        }
        // Clear error if valid input
        this.internalInvalid = false;
        this.internalErrorText = '';
        this.otpValues[index] = inputValue;
        this.otpValues = [...this.otpValues];
        const fullValue = this.otpValues.join('');
        this.value = fullValue;
        const isComplete = fullValue.length === this.length && !fullValue.includes('');
        this.otpChange.emit({ value: fullValue, complete: isComplete });
        if (isComplete) {
            this.otpComplete.emit({ value: fullValue });
            if (this.autoSubmit) {
                this.handleSubmit();
            }
        }
        // Move to next input
        if (inputValue && index < this.length - 1) {
            this.inputRefs[index + 1]?.focus();
        }
    };
    handleSubmit = () => {
        this.otpSubmit.emit({ value: this.value });
    };
    handleKeyDown = (e, index) => {
        if (e.key === 'Backspace') {
            if (!this.otpValues[index] && index > 0) {
                this.otpValues[index - 1] = '';
                this.otpValues = [...this.otpValues];
                this.inputRefs[index - 1]?.focus();
                const fullValue = this.otpValues.join('');
                this.value = fullValue;
                this.otpChange.emit({ value: fullValue, complete: false });
            }
        }
        else if (e.key === 'ArrowLeft' && index > 0) {
            if (this.rtl) {
                if (index < this.length - 1)
                    this.inputRefs[index + 1]?.focus();
            }
            else {
                this.inputRefs[index - 1]?.focus();
            }
        }
        else if (e.key === 'ArrowRight' && index < this.length - 1) {
            if (this.rtl) {
                this.inputRefs[index - 1]?.focus();
            }
            else {
                this.inputRefs[index + 1]?.focus();
            }
        }
    };
    handlePaste = (e) => {
        e.preventDefault();
        const pasteData = e.clipboardData.getData('text');
        const chars = pasteData.split('').slice(0, this.length);
        if ((this.type === 'number' || this.type === 'numeric') && !/^\d+$/.test(chars.join(''))) {
            this.showTemporaryError('Only numbers allowed');
            return;
        }
        if (this.type === 'alphanumeric' && !/^[a-zA-Z0-9]+$/.test(chars.join(''))) {
            this.showTemporaryError('Only letters and numbers allowed');
            return;
        }
        this.internalInvalid = false;
        this.internalErrorText = '';
        this.otpValues = [...chars, ...new Array(this.length - chars.length).fill('')];
        const fullValue = this.otpValues.join('');
        this.value = fullValue;
        const isComplete = fullValue.length === this.length;
        this.otpChange.emit({ value: fullValue, complete: isComplete });
        if (isComplete) {
            this.otpComplete.emit({ value: fullValue });
            this.inputRefs[this.length - 1]?.focus();
        }
        else {
            this.inputRefs[chars.length]?.focus();
        }
    };
    errorTimeout;
    showTemporaryError(message) {
        this.internalInvalid = true;
        this.internalErrorText = message;
        if (this.errorTimeout) {
            clearTimeout(this.errorTimeout);
        }
        this.errorTimeout = setTimeout(() => {
            this.internalInvalid = false;
            this.internalErrorText = '';
        }, 2000);
    }
    handleFocus = (index) => {
        if (this.focusedIndex === index)
            return;
        this.focusedIndex = index;
        // Select all text on focus
        this.inputRefs[index]?.select();
    };
    handleBlur = () => {
        this.focusedIndex = -1;
    };
    clear() {
        this.otpValues = new Array(this.length).fill('');
        this.value = '';
        this.otpChange.emit({ value: '', complete: false });
        this.inputRefs[0]?.focus();
    }
    focus() {
        this.inputRefs[0]?.focus();
    }
    render() {
        const isInvalid = this.invalid || this.internalInvalid;
        const currentErrorText = this.internalErrorText || this.errorText;
        const containerClasses = {
            'otp-input': true,
            [`otp-input-${this.size}`]: true,
            [`otp-input-${this.color}`]: true,
            [`otp-input-${this.variant}`]: true,
            'otp-input-disabled': this.disabled,
            'otp-input-readonly': this.readonly,
            'otp-input-invalid': isInvalid,
            'otp-input-skeleton': this.skeleton,
        };
        return (h("div", { key: '0a0a9c52b8714d1f057b2957f0ebcc78a8579d5f', class: containerClasses, dir: this.rtl ? 'rtl' : 'ltr' }, this.label && h("label", { key: '46fb358d236e21367170beee13b0fa63c7bb045c', class: "otp-label" }, this.label), h("div", { key: '4c768be697520bbb7b9be1f481efa5aeea85aa5f', class: "otp-inputs-container" }, this.otpValues.map((val, index) => {
            const showDivider = this.groupSize > 0 && (index + 1) % this.groupSize === 0 && index !== this.length - 1;
            return (h(Fragment, null, h("ui-input", { ref: el => (this.inputRefs[index] = el), type: this.secure ? 'password' : 'text', inputMode: this.type === 'number' || this.type === 'numeric' ? 'numeric' : 'text', pattern: this.type === 'number' || this.type === 'numeric' ? '[0-9]*' : undefined, maxLength: 1, class: {
                    'otp-input-field': true,
                    'focused': this.focusedIndex === index,
                    'filled': !!val,
                }, value: val, placeholder: this.placeholder, disabled: this.disabled || this.skeleton, readonly: this.readonly, onInputChange: e => this.handleInput(e, index), onInputKeydown: e => this.handleKeyDown(e.detail, index), onPasteInternal: e => (index === 0 ? this.handlePaste(e.detail) : e.detail.preventDefault()), onFocusInternal: () => this.handleFocus(index), onInputBlur: this.handleBlur, ariaLabel: `Digit ${index + 1}`, size: this.size, align: "center" }), showDivider && h("div", { class: "otp-divider" })));
        })), isInvalid && currentErrorText && (h("div", { key: 'c5349d5e5e04c6f238e8d2e826684d1a47464385', class: "error-text" }, h("ui-icon", { key: '440b6a35be56cb372799676c24436cb8655fe8e7', name: "exclamation-circle", library: "fontawesome" }), currentErrorText)), !isInvalid && this.helperText && h("div", { key: '9e8357a1bc20e41ae07a2cb14b8f88c1b6c73b9f', class: "helper-text" }, this.helperText), h("div", { key: '11f5ed36239872e672e9626ad8713a603a7a50fe', class: "otp-resend-container" }, h("ui-button", { key: 'bb46ef1c84eafc63a5a8ed507972f7c33646544d', variant: "ghost", size: "sm", onClick: this.handleResend, disabled: this.resendTimer > 0 || this.disabled, label: `${this.resendLabel} ${this.resendTimer > 0 ? `(${this.resendTimer}s)` : ''}` }))));
    }
    static get watchers() { return {
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
OtpInput.style = otpInputCss();

export { OtpInput as ui_otp_input };
