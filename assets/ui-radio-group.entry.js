import { a as getElement, r as registerInstance, c as createEvent, h } from './index-DUsoYu9r.js';

const radioGroupCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.radio-group{display:flex;flex-direction:column;gap:12px;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif}.radio-group-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;color:var(--label-color, var(--text-primary));margin-bottom:8px}.radio-search{position:relative;margin-bottom:8px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.radio-search .search-input-wrapper{position:relative;display:flex;align-items:center;background:rgba(var(--primary-rgb, 139, 92, 246), 0.03);border:1px solid rgba(0, 0, 0, 0.05);border-radius:12px;padding:2px 4px;transition:all 0.3s}.radio-search .search-input-wrapper:focus-within{background:var(--bg-primary, #ffffff);border-color:var(--primary-color);box-shadow:0 4px 12px rgba(var(--primary-rgb), 0.15);transform:translateY(-1px)}.radio-search .search-icon{margin-inline-start:12px;opacity:0.4;font-size:16px;color:var(--primary-color)}.radio-search input.search-input{flex:1;border:none;background:transparent;padding:10px 12px;font-size:13px;font-weight:500;color:var(--text-primary);outline:none}.radio-search input.search-input::placeholder{opacity:0.5}.radio-search .clear-search{background:rgba(0, 0, 0, 0.05);border:none;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-inline-end:6px;color:var(--text-secondary);transition:all 0.2s}.radio-search .clear-search:hover{background:rgba(0, 0, 0, 0.1);color:var(--text-primary);transform:scale(1.1)}.radio-search .clear-search ui-icon{font-size:14px}.no-results{font-size:13px;color:var(--text-secondary);padding:12px 0;font-style:italic;opacity:0.7}.required-indicator{color:var(--color-danger-hover, #dc2626);margin-inline-start:4px}.radio-list{display:flex}.radio-list-vertical{flex-direction:column}.radio-list-horizontal{flex-direction:row;flex-wrap:wrap}.radio-list-grid{display:grid}.radio-group-button .radio-list{gap:0;border-radius:10px;overflow:hidden;border:1px solid var(--border-subtle, #e2e8f0);width:fit-content}.radio-group-button ui-radio:not(:first-child){margin-inline-start:-1px}.radio-group-button ui-radio{display:flex;flex:1}.radio-group-button .radio-list-vertical{flex-direction:column;width:100%}.radio-group-button .radio-list-vertical ui-radio:not(:first-child){margin-inline-start:0;margin-top:-1px}.radio-group-button .radio-list-vertical ui-radio:first-child{border-top-left-radius:10px;border-top-right-radius:10px}.radio-group-button .radio-list-vertical ui-radio:last-child{border-bottom-left-radius:10px;border-bottom-right-radius:10px}.radio-group-button .radio-list-horizontal ui-radio:first-child{border-top-left-radius:10px;border-bottom-left-radius:10px}.radio-group-button .radio-list-horizontal ui-radio:last-child{border-top-right-radius:10px;border-bottom-right-radius:10px}.radio-group-skeleton .radio-group-label{background:var(--bg-primary, #e5e7eb);color:transparent;border-radius:4px;width:150px}.helper-text{font-size:0.875rem;color:var(--label-subtitle-color, var(--text-muted, #6b7280));display:flex;align-items:center;gap:4px;margin-top:4px}.helper-text.error{color:var(--color-danger-hover, #dc2626)}.radio-group-disabled{opacity:0.6;pointer-events:none}.radio-group-invalid .radio-group-label{color:var(--color-danger-hover, #dc2626)}`;

const RadioGroup = class {
    internals;
    get el() { return getElement(this); }
    value = '';
    name = '';
    disabled = false;
    readonly = false;
    required = false;
    invalid = false;
    label = '';
    helperText = '';
    errorMessage = '';
    layout = 'vertical';
    columns = 2;
    gap = '16px';
    size = 'md';
    color = 'primary';
    options = [];
    labelPosition = 'right';
    enableAnimation = true;
    rippleEffect = true;
    buttonGroup = false;
    variant = 'default';
    skeleton = false;
    allowEmpty = false;
    showDot = true;
    /** Entrance animation */
    reveal = 'none';
    /** Delay for entry animation (ms) */
    revealDelay = 0;
    /** Stagger delay between items */
    revealStagger = 60;
    /** High-Fidelity: Searchable options */
    searchable = false;
    /** High-Fidelity: Search bar placeholder */
    searchPlaceholder = 'Search items...';
    /** High-Fidelity: RTL support */
    rtl = false;
    radios = [];
    searchQuery = '';
    radioGroupChange;
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.radioGroupChange = createEvent(this, "radioGroupChange");
        this.internals = this.el.attachInternals();
    }
    componentWillLoad() {
        this.updateOptions();
        this.internals.setFormValue(this.value);
    }
    componentDidLoad() {
        this.syncRadios();
    }
    componentDidUpdate() {
        this.syncRadios();
    }
    watchValue() {
        this.syncRadios();
    }
    updateOptions() {
        let newRadios = [];
        if (typeof this.options === 'string') {
            try {
                newRadios = JSON.parse(this.options);
            }
            catch {
                console.error('Invalid options JSON');
                newRadios = [];
            }
        }
        else if (Array.isArray(this.options)) {
            newRadios = [...this.options];
        }
        if (JSON.stringify(this.radios) !== JSON.stringify(newRadios)) {
            this.radios = newRadios;
        }
    }
    handleRadioClick(event) {
        if (!this.allowEmpty)
            return;
        // Handle both Shadow DOM and Light DOM targets
        // Handle both Shadow DOM and Light DOM targets
        const target = (event.target.closest('ui-radio') ||
            (event.composedPath && event.composedPath().find((el) => el.tagName === 'UI-RADIO')));
        if (target && !target.disabled && !this.disabled) {
            // If clicking the currently selected radio
            if (target.value === this.value) {
                // Prevent default to stop native radio from enforcing checked state (though it usually stays checked)
                event.preventDefault();
                event.stopPropagation();
                this.value = '';
                this.radioGroupChange.emit({ value: '' });
            }
        }
    }
    handleRadioChange(event) {
        // Update the group's value when a child radio is checked
        const { checked, value } = event.detail;
        if (checked) {
            this.value = value;
            this.internals.setFormValue(value);
            this.updateValidity();
            this.radioGroupChange.emit({ value });
        }
    }
    updateValidity() {
        if (this.required && !this.value) {
            this.internals.setValidity({ valueMissing: true }, 'Please select an option.', this.el);
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
    getRadios() {
        const shadowRadios = Array.from(this.el.shadowRoot.querySelectorAll('ui-radio'));
        const lightRadios = Array.from(this.el.querySelectorAll('ui-radio'));
        return [...shadowRadios, ...lightRadios];
    }
    syncRadios() {
        const radios = this.getRadios();
        radios.forEach((radio, index) => {
            radio.checked = radio.value === this.value;
            radio.isButton = this.buttonGroup;
            radio.variant = this.variant;
            radio.skeleton = this.skeleton;
            radio.name = this.name; // Propagate name
            radio.reveal = this.reveal;
            radio.revealDelay = this.revealDelay + (index * this.revealStagger);
            radio.rtl = this.rtl;
        });
    }
    renderLabel() {
        if (!this.label)
            return null;
        return (h("div", { class: "radio-group-label" }, this.label, this.required && h("span", { class: "required-indicator" }, "*")));
    }
    renderSearch() {
        if (!this.searchable)
            return null;
        return (h("div", { class: {
                'radio-search': true,
                'search-active': this.searchQuery.length > 0
            } }, h("div", { class: "search-input-wrapper" }, h("ui-icon", { name: "search", library: "lucide", class: "search-icon" }), h("ui-input", { type: "text", placeholder: this.searchPlaceholder, onInputChange: (e) => { this.searchQuery = e.detail.toLowerCase(); }, value: this.searchQuery, size: "sm", fullWidth: true }), this.searchQuery.length > 0 && (h("ui-button", { variant: "ghost", class: "clear-search", onClick: () => { this.searchQuery = ''; }, ariaLabel: "Clear search", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })))));
    }
    render() {
        const visibleOptions = Array.isArray(this.radios) ? this.radios.filter(opt => !this.searchQuery || opt.label.toLowerCase().includes(this.searchQuery)) : [];
        const containerClasses = {
            'radio-group': true,
            [`radio-group-${this.layout}`]: true,
            'radio-group-disabled': this.disabled,
            'radio-group-invalid': this.invalid,
            'radio-group-button': this.buttonGroup,
            [`radio-group-variant-${this.variant}`]: true,
            'radio-group-skeleton': this.skeleton,
        };
        const radioListClasses = {
            'radio-list': true,
            [`radio-list-${this.layout}`]: true,
        };
        const listStyle = {
            ...(this.layout === 'grid' ? { 'grid-template-columns': `repeat(${this.columns}, 1fr)` } : {}),
            'gap': this.gap
        };
        return (h("div", { key: '8f4bf0db359a75ef98dfb5719adbd6b70fea3c38', class: containerClasses, role: "radiogroup", "aria-label": this.label, dir: this.rtl ? 'rtl' : 'ltr' }, this.renderLabel(), this.renderSearch(), h("div", { key: '6eb5c03abf60138dd6b20b7830fdc80310729bf8', class: radioListClasses, style: listStyle }, h("slot", { key: 'bdc217a91c554f749634d0b9ba2965b1f626ee27' }), visibleOptions.length === 0 && this.searchQuery && (h("div", { key: 'f7dd1dc1cda443e0877a64c5e04cba402f905c6f', class: "no-results" }, "No matches found")), visibleOptions.map((option, idx) => (h("ui-radio", { value: option.value, label: option.label, description: option.description, badge: option.badge, tooltip: option.tooltip, "tooltip-position": option.tooltipPosition, name: this.name, checked: this.value === option.value, disabled: this.disabled || option.disabled, readonly: this.readonly, invalid: this.invalid, size: this.size, color: this.color, "label-position": this.labelPosition, "show-dot": this.showDot, "enable-animation": this.enableAnimation, "ripple-effect": this.rippleEffect, "is-button": this.buttonGroup, variant: this.variant, skeleton: this.skeleton, reveal: this.reveal, "reveal-delay": this.revealDelay + (idx * this.revealStagger), rtl: this.rtl })))), this.renderHelperText()));
    }
    renderHelperText() {
        if (this.invalid && this.errorMessage) {
            return (h("div", { class: "helper-text error" }, h("ui-icon", { library: "lucide", name: "alert-circle", size: "14px" }), this.errorMessage));
        }
        if (this.helperText) {
            return h("div", { class: "helper-text" }, this.helperText);
        }
        return null;
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": [{
                "watchValue": 0
            }],
        "options": [{
                "updateOptions": 0
            }]
    }; }
};
RadioGroup.style = radioGroupCss();

export { RadioGroup as ui_radio_group };
