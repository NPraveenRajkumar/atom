import { r as registerInstance, h, H as Host } from './index-DUsoYu9r.js';

const inputPairCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:auto;min-width:0;--pair-radius:10px}:host.full-width{width:100%}.pair-main-label{display:block;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;color:var(--label-color, var(--text-secondary, #64748b));margin-bottom:8px}.pair-container{display:flex;align-items:flex-end;width:100%}.pair-container .input-item{flex:1;min-width:0}.pair-container{}.pair-container .input-item.left ui-input::part(container),.pair-container .input-item.right ui-input::part(container){border-radius:var(--pair-radius);border-width:1.5px}.pair-container.is-connected .input-item.left ui-input::part(container){border-top-right-radius:0;border-bottom-right-radius:0;border-right-width:0.75px}.pair-container.is-connected .input-item.right ui-input::part(container){border-top-left-radius:0;border-bottom-left-radius:0;border-left-width:0.75px}`;

const InputPair = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Left input label */
    labelLeft = '';
    /** Right input label */
    labelRight = '';
    /** Shared main label (optional) */
    label;
    /** Left input value */
    valueLeft = '';
    /** Right input value */
    valueRight = '';
    /** Left input placeholder */
    placeholderLeft = '';
    /** Right input placeholder */
    placeholderRight = '';
    /** Shared type for both inputs */
    type = 'text';
    /** Shared variant */
    variant = 'outlined';
    /** Shared size */
    size = 'md';
    /** Gap between inputs (set to 0 for connected) */
    gap = '0';
    /** Full width behavior */
    fullWidth = false;
    render() {
        return (h(Host, { key: 'fdf7f4502e0ae69ee732870df215948f6dd343d4', class: { 'full-width': this.fullWidth } }, this.label && h("div", { key: 'fab76ee80e86ffb845930a8b2ce26d210da9e72c', class: "pair-main-label" }, this.label), h("div", { key: 'cb95a4fda33d88723248c58d57e526f9ab7fc1c6', class: {
                'pair-container': true,
                'is-connected': this.gap === '0'
            }, style: { gap: this.gap !== '0' ? this.gap : undefined } }, h("div", { key: '562af03d33b4c7ec4f55ffa805dbbda5fa0e2c95', class: "input-item left" }, h("ui-input", { key: 'c75ac1faec6b8b0903d578064ba60529a923d4eb', label: this.labelLeft, placeholder: this.placeholderLeft, value: this.valueLeft, type: this.type, variant: this.variant, size: this.size, "full-width": true })), h("div", { key: '2740efa73d5758bf88c58f2853cba1da3f43a420', class: "input-item right" }, h("ui-input", { key: '4e110393af0e26ace0de9a68f12a9cb54b90d935', label: this.labelRight, placeholder: this.placeholderRight, value: this.valueRight, type: this.type, variant: this.variant, size: this.size, "full-width": true })))));
    }
};
InputPair.style = inputPairCss();

export { InputPair as ui_input_pair };
