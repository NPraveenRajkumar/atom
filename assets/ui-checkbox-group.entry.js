import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const checkboxGroupCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.checkbox-group{display:flex;flex-direction:column;gap:12px}.checkbox-group.is-victory .group-label .selection-count{animation:victory-pulse 2s infinite ease-in-out;background:var(--primary-color);color:var(--text-standard, #ffffff);box-shadow:0 0 15px var(--primary-color)}.group-label{display:flex;align-items:center;justify-content:space-between;font-size:11px;font-weight:700;color:var(--label-color, var(--text-primary, #333));margin-bottom:8px;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;cursor:default}.group-label .selection-count{font-size:10px;font-weight:600;text-transform:none;letter-spacing:normal;opacity:1;color:var(--label-subtitle-color, var(--text-secondary, #666));background:var(--bg-secondary, #f3f4f6);padding:2px 8px;border-radius:10px}.required-indicator{color:var(--danger-color, #f44336);margin-inline-start:4px}.select-all-container{padding-bottom:8px;border-bottom:1px solid var(--border-color, #e0e0e0)}.checkbox-group-items{display:flex}.checkbox-group-vertical .checkbox-group-items{flex-direction:column}.checkbox-group-horizontal .checkbox-group-items{flex-direction:row;flex-wrap:wrap}.checkbox-group-disabled{opacity:0.6;pointer-events:none}.checkbox-group-readonly{pointer-events:none}.checkbox-group-invalid .group-label{color:var(--danger-color, #f44336)}.helper-text{font-size:12px;color:var(--label-subtitle-color, var(--text-secondary, #666));display:flex;align-items:center;gap:6px}.helper-text.error{color:var(--danger-color, #f44336)}.helper-text i{font-size:14px}.checkbox-group-sm .group-label{font-size:12px}.checkbox-group-sm .helper-text{font-size:11px}.checkbox-group-lg .group-label{font-size:16px}.checkbox-group-lg .helper-text{font-size:13px}.checkbox-search{position:relative;margin-bottom:4px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.checkbox-search .search-input-wrapper{position:relative;display:flex;align-items:center;background:rgba(var(--primary-rgb, 139, 92, 246), 0.03);border:1px solid rgba(0, 0, 0, 0.05);border-radius:12px;padding:2px 4px;transition:all 0.3s}.checkbox-search .search-input-wrapper:focus-within{background:var(--bg-primary, #ffffff);border-color:var(--primary-color);box-shadow:0 4px 12px rgba(var(--primary-rgb), 0.15);transform:translateY(-1px)}.checkbox-search .search-icon{margin-left:12px;opacity:0.4;font-size:16px;color:var(--primary-color)}.checkbox-search input.search-input{flex:1;border:none;background:transparent;padding:10px 12px;font-size:13px;font-weight:500;color:var(--text-primary);outline:none}.checkbox-search input.search-input::placeholder{opacity:1}.checkbox-search .clear-search{background:rgba(0, 0, 0, 0.05);border:none;border-radius:50%;width:24px;height:24px;display:flex;align-items:center;justify-content:center;cursor:pointer;margin-right:6px;color:var(--text-secondary);transition:all 0.2s}.checkbox-search .clear-search:hover{background:rgba(0, 0, 0, 0.1);color:var(--text-primary);transform:scale(1.1)}.checkbox-search .clear-search ui-icon{font-size:14px}@keyframes victory-pulse{0%{transform:scale(1);box-shadow:0 0 0px var(--primary-color)}50%{transform:scale(1.05);box-shadow:0 0 15px var(--primary-color)}100%{transform:scale(1);box-shadow:0 0 0px var(--primary-color)}}.no-results{font-size:14px;color:var(--text-secondary, #999);padding:8px 0;font-style:italic}.checkbox-group-grid .checkbox-group-items{display:grid}`;

const CheckboxGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.groupChange = createEvent(this, "groupChange");
        this.groupValidation = createEvent(this, "groupValidation");
    }
    /**
     * Ensures value is always a string array
     */
    normalizeValue(val) {
        if (Array.isArray(val))
            return val;
        if (typeof val === 'string')
            return val ? val.split(',') : [];
        return [];
    }
    get el() { return getElement(this); }
    internals;
    value = [];
    name = '';
    label = '';
    helperText = '';
    errorMessage = '';
    required = false;
    disabled = false;
    readonly = false;
    invalid = false;
    orientation = 'vertical';
    gap = '12px';
    showSelectAll = false;
    selectAllLabel = 'Select All';
    buttonGroup = false;
    min = 0;
    max = Infinity;
    validateOnChange = true;
    size = 'md';
    color = 'primary';
    showSelectionCount = false;
    /** Entrance animation */
    reveal = 'none';
    /** Delay for entry animation (ms) */
    revealDelay = 0;
    /** Stagger delay between items */
    revealStagger = 60;
    /** High-Fidelity: Victory glow pulse when all selected */
    victoryGlow = false;
    /** High-Fidelity: RTL support */
    rtl = false;
    selectAllState = 'none';
    isVictory = false;
    groupChange;
    groupValidation;
    componentWillLoad() {
        this.internals = this.el.attachInternals();
        this.updateFormValue();
        this.discoverCheckboxes();
        this.updateCheckboxStates();
        this.updateSelectAllState();
    }
    /**
     * Stencil form-association callback
     */
    formResetCallback() {
        this.value = [];
        this.updateCheckboxStates();
        this.updateSelectAllState();
        this.updateFormValue();
    }
    handleValueChange() {
        this.updateCheckboxStates();
        this.updateSelectAllState();
        if (this.validateOnChange) {
            this.validate();
        }
    }
    handleCheckboxChange(event) {
        const { checked, value: checkboxValue } = event.detail;
        if (this.disabled || this.readonly)
            return;
        let valueArr = this.normalizeValue(this.value);
        if (checked) {
            if (!valueArr.includes(checkboxValue)) {
                if (this.max === Infinity || valueArr.length < this.max) {
                    valueArr = [...valueArr, checkboxValue];
                }
            }
        }
        else {
            valueArr = valueArr.filter(v => v !== checkboxValue);
        }
        this.value = valueArr;
        this.groupChange.emit({ value: this.value });
        this.updateSelectAllState();
        if (this.validateOnChange) {
            this.validate();
        }
        this.updateFormValue();
    }
    updateFormValue() {
        if (this.name) {
            const data = new FormData();
            this.value.forEach(val => data.append(this.name, val));
            this.internals.setFormValue(data);
        }
        else {
            this.internals.setFormValue(this.value.join(','));
        }
    }
    discoverCheckboxes() {
        // This is no longer needed as we use getAllCheckboxes in real-time
    }
    updateCheckboxStates() {
        const allCbs = this.getAllCheckboxes();
        const valueArr = this.normalizeValue(this.value);
        const isMaxReached = this.max !== Infinity && valueArr.length >= this.max;
        allCbs.forEach((checkbox, index) => {
            checkbox.checked = valueArr.includes(checkbox.value);
            checkbox.disabled = this.disabled || (isMaxReached && !checkbox.checked) || checkbox.disabled;
            checkbox.readonly = this.readonly;
            checkbox.size = this.size;
            checkbox.color = this.color;
            checkbox.reveal = this.reveal;
            checkbox.revealDelay = this.revealDelay + (index * this.revealStagger);
            checkbox.rtl = this.rtl;
            checkbox.isButton = this.buttonGroup;
            if (this.name) {
                checkbox.name = this.name;
            }
        });
    }
    getAllCheckboxes() {
        const slotted = Array.from(this.el.querySelectorAll('ui-checkbox'));
        // If we have options prop, we need to consider them too, but they are rendered as components
        // Stencil's shadow DOM might make this tricky if they are inside. 
        // Actually, we can just get them from the shadow root if they are rendered in renderDataOptions
        const shadowCbs = Array.from(this.el.shadowRoot.querySelectorAll('ui-checkbox'));
        return [...slotted, ...shadowCbs];
    }
    updateSelectAllState() {
        const allCbs = this.getAllCheckboxes();
        const valueArr = this.normalizeValue(this.value);
        const enabledCheckboxes = allCbs.filter((cb) => !cb.disabled);
        if (enabledCheckboxes.length === 0)
            return;
        const checkedCount = enabledCheckboxes.filter((cb) => valueArr.includes(cb.value)).length;
        if (checkedCount === 0) {
            this.selectAllState = 'none';
            this.isVictory = false;
        }
        else if (checkedCount === enabledCheckboxes.length) {
            this.selectAllState = 'all';
            if (this.victoryGlow)
                this.isVictory = true;
        }
        else {
            this.selectAllState = 'some';
            this.isVictory = false;
        }
    }
    handleSelectAllChange = (event) => {
        if (this.disabled || this.readonly)
            return;
        const target = event.target;
        const allCbs = this.getAllCheckboxes();
        const enabledCheckboxes = allCbs.filter((cb) => !cb.disabled);
        if (target.checked) {
            // Select all enabled checkboxes
            const allValues = enabledCheckboxes.map((cb) => cb.value);
            const uniqueValues = Array.from(new Set([...this.value, ...allValues]));
            // Respect max limit
            if (this.max !== Infinity) {
                this.value = uniqueValues.slice(0, this.max);
            }
            else {
                this.value = uniqueValues;
            }
        }
        else {
            // Deselect all
            const enabledValues = enabledCheckboxes.map((cb) => cb.value);
            this.value = this.value.filter(v => !enabledValues.includes(v));
        }
        this.groupChange.emit({ value: this.value });
        this.updateSelectAllState();
        if (this.validateOnChange) {
            this.validate();
        }
    };
    validate() {
        const errors = [];
        if (this.required && this.value.length === 0) {
            errors.push('At least one option must be selected');
        }
        if (this.min > 0 && this.value.length < this.min) {
            errors.push(`At least ${this.min} option${this.min > 1 ? 's' : ''} must be selected`);
        }
        if (this.max !== Infinity && this.value.length > this.max) {
            errors.push(`No more than ${this.max} option${this.max > 1 ? 's' : ''} can be selected`);
        }
        const valid = errors.length === 0;
        this.groupValidation.emit({ valid, errors });
        return valid;
    }
    selectAll() {
        const allCbs = this.getAllCheckboxes();
        const enabledCheckboxes = allCbs.filter((cb) => !cb.disabled);
        const allValues = enabledCheckboxes.map((cb) => cb.value);
        if (this.max !== Infinity) {
            this.value = allValues.slice(0, this.max);
        }
        else {
            this.value = allValues;
        }
        this.groupChange.emit({ value: this.value });
    }
    deselectAll() {
        this.value = [];
        this.groupChange.emit({ value: this.value });
    }
    toggleAll() {
        if (this.selectAllState === 'all') {
            this.deselectAll();
        }
        else {
            this.selectAll();
        }
    }
    renderSelectAll() {
        if (!this.showSelectAll)
            return null;
        return (h("div", { class: "select-all-container" }, h("ui-checkbox", { checked: this.selectAllState === 'all', indeterminate: this.selectAllState === 'some', label: this.selectAllLabel, disabled: this.disabled, readonly: this.readonly, size: this.size, color: this.color, rtl: this.rtl, onCheckboxChange: this.handleSelectAllChange })));
    }
    renderLabel() {
        if (!this.label)
            return null;
        return (h("div", { class: "group-label" }, h("span", { class: "label-text" }, this.label, this.required && h("span", { class: "required-indicator" }, "*")), this.showSelectionCount && (h("span", { class: "selection-count" }, "(", this.value.length, this.max !== Infinity ? ` / ${this.max}` : '', " selected)"))));
    }
    renderHelperText() {
        if (this.invalid && this.errorMessage) {
            return (h("div", { class: "helper-text error" }, h("ui-icon", { name: "fa-exclamation-circle" }), this.errorMessage));
        }
        if (this.helperText) {
            return h("div", { class: "helper-text" }, this.helperText);
        }
        if (this.min > 0 || this.max !== Infinity) {
            const count = this.value.length;
            let text = '';
            if (this.min > 0 && this.max !== Infinity) {
                text = `Select ${this.min}-${this.max} options (${count} selected)`;
            }
            else if (this.min > 0) {
                text = `Select at least ${this.min} option${this.min > 1 ? 's' : ''} (${count} selected)`;
            }
            else if (this.max !== Infinity) {
                text = `Select up to ${this.max} option${this.max > 1 ? 's' : ''} (${count} selected)`;
            }
            return h("div", { class: "helper-text" }, text);
        }
        return null;
    }
    options = [];
    searchable = false;
    searchPlaceholder = 'Search options...';
    layout = 'list';
    columns = 2; // For grid layout
    searchQuery = '';
    handleSearch = (e) => {
        this.searchQuery = e.target.value.toLowerCase();
    };
    getFilteredOptions() {
        if (!this.options || this.options.length === 0)
            return [];
        // Normalize options
        const normalizedOptions = this.options.map(opt => typeof opt === 'string' ? { label: opt, value: opt, disabled: false } : opt);
        if (!this.searchQuery)
            return normalizedOptions;
        return normalizedOptions.filter(opt => opt.label.toLowerCase().includes(this.searchQuery));
    }
    renderSearch() {
        if (!this.searchable)
            return null;
        return (h("div", { class: {
                'checkbox-search': true,
                'search-active': this.searchQuery.length > 0
            } }, h("div", { class: "search-input-wrapper" }, h("ui-icon", { name: "search", library: "lucide", class: "search-icon" }), h("input", { type: "text", placeholder: this.searchPlaceholder, onInput: this.handleSearch, value: this.searchQuery, class: "search-input" }), this.searchQuery.length > 0 && (h("ui-button", { variant: "ghost", class: "clear-search", onClick: () => { this.searchQuery = ''; }, icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })))));
    }
    renderDataOptions() {
        const visibleOptions = this.getFilteredOptions();
        if (visibleOptions.length === 0 && this.searchQuery) {
            return h("div", { class: "no-results" }, "No options found");
        }
        const valueArr = this.normalizeValue(this.value);
        return visibleOptions.map((opt, index) => (h("ui-checkbox", { value: opt.value, label: opt.label, disabled: this.disabled || opt.disabled, readonly: this.readonly, size: this.size, color: this.color, variant: opt.variant || 'default', name: this.name, checked: valueArr.includes(opt.value), reveal: this.reveal, revealDelay: this.revealDelay + (index * this.revealStagger), rtl: this.rtl, isButton: this.buttonGroup, onCheckboxChange: this.handleCheckboxChange })));
    }
    render() {
        const containerClasses = {
            'checkbox-group': true,
            [`checkbox-group-${this.orientation}`]: this.layout === 'list',
            [`checkbox-group-grid`]: this.layout === 'grid',
            [`checkbox-group-cols-${this.columns}`]: this.layout === 'grid',
            [`checkbox-group-${this.size}`]: true,
            'checkbox-group-disabled': this.disabled,
            'checkbox-group-readonly': this.readonly,
            'checkbox-group-invalid': this.invalid,
            'checkbox-group-button': this.buttonGroup,
            'is-victory': this.isVictory
        };
        const hasDataOptions = this.options && this.options.length > 0;
        return (h("div", { key: '05a2da58c9dd7f3438076d3beb725f3596545cb6', class: containerClasses, dir: this.rtl ? 'rtl' : 'ltr' }, this.renderLabel(), this.renderSearch(), this.renderSelectAll(), h("div", { key: '0a64f5ff1b6474c771059e6d856b42a48641d5a1', class: "checkbox-group-items", style: this.layout === 'grid' ? {
                display: 'grid',
                gridTemplateColumns: `repeat(${this.columns}, 1fr)`,
                gap: this.gap
            } : { gap: this.gap }, role: "group", "aria-labelledby": this.label ? 'group-label' : undefined, "aria-required": this.required ? 'true' : 'false', "aria-invalid": this.invalid ? 'true' : 'false' }, hasDataOptions ? this.renderDataOptions() : h("slot", null)), this.renderHelperText()));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": [{
                "handleValueChange": 0
            }]
    }; }
};
CheckboxGroup.style = checkboxGroupCss();

export { CheckboxGroup as ui_checkbox_group };
