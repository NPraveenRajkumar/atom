import { r as registerInstance, c as createEvent, h, H as Host } from './index-DUsoYu9r.js';

const colorControllerCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;font-family:inherit;width:100%;max-width:2a0px}.col-ctrl-label{font-size:13px;font-weight:700;color:var(--color-primary, #6366f1);margin-bottom:12px;text-transform:uppercase;letter-spacing:0.05em}.col-ctrl-grid{display:flex;flex-direction:column;gap:6px}.col-ctrl-row{display:flex;align-items:center;gap:8px}.col-ctrl-key{flex:0 0 20px;font-size:12px;font-weight:500;color:var(--text-secondary, #4b5563)}.col-ctrl-input-wrapper{flex:1;display:flex;align-items:center;border:1px solid var(--border-default, #e5e7eb);border-radius:4px;background:var(--bg-primary, #ffffff);padding:2px 6px;transition:all 0.2s}.col-ctrl-input-wrapper:focus-within{border-color:var(--color-primary, #6366f1);box-shadow:0 0 0 2px rgba(var(--color-primary-rgb, 99, 102, 241), 0.1)}.col-ctrl-input{flex:1;border:none;background:transparent;outline:none;font-size:13px;padding:4px;width:100%;color:var(--text-primary, #111827);font-family:monospace;text-align:right}.col-ctrl-input::-webkit-outer-spin-button,.col-ctrl-input::-webkit-inner-spin-button{-webkit-appearance:none;margin:0}.hex-row .col-ctrl-key{font-family:monospace;font-weight:700}.col-ctrl-unit{font-size:12px;color:var(--text-muted, #9ca3af);margin-left:4px;min-width:12px}.hex-input{text-align:left;letter-spacing:0.05em;font-weight:600}`;

const ColorController = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colorChange = createEvent(this, "colorChange");
    }
    /** Current color as a hex string */
    value = '#10b981';
    /** Label for the entire group */
    label = '';
    /** Emitted when any color channel changes */
    colorChange;
    r = 16;
    g = 185;
    b = 129;
    h = 159;
    s = 91;
    v = 73;
    hex = '10B981';
    handleValueUpdate(newValue) {
        this.updateAllFromHex(newValue);
    }
    componentWillLoad() {
        this.updateAllFromHex(this.value);
    }
    updateAllFromHex(hex) {
        if (!hex)
            return;
        const clean = hex.startsWith('#') ? hex.slice(1) : hex;
        this.hex = clean.toUpperCase();
        const bigInt = parseInt(clean, 16);
        this.r = (bigInt >> 16) & 255;
        this.g = (bigInt >> 8) & 255;
        this.b = bigInt & 255;
        const r = this.r / 255;
        const g = this.g / 255;
        const b = this.b / 255;
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        const d = max - min;
        let h = 0;
        if (d === 0)
            h = 0;
        else if (max === r)
            h = ((g - b) / d) % 6;
        else if (max === g)
            h = (b - r) / d + 2;
        else if (max === b)
            h = (r - g) / d + 4;
        h = Math.round(h * 60);
        if (h < 0)
            h += 360;
        const s = max === 0 ? 0 : d / max;
        const v = max;
        this.h = h;
        this.s = Math.round(s * 100);
        this.v = Math.round(v * 100);
    }
    emitChange() {
        this.value = `#${this.hex}`;
        this.colorChange.emit(this.value);
    }
    handleHexInput = (e) => {
        const val = e.detail.value || '';
        if (val.length === 6 || val.length === 3) {
            if (/^[0-9A-Fa-f]+$/.test(val)) {
                this.hex = val.toUpperCase();
                this.updateAllFromHex(this.hex);
                this.emitChange();
            }
        }
    };
    handleRgbChange(channel, val) {
        if (isNaN(val))
            return;
        this[channel] = Math.max(0, Math.min(255, val));
        this.hex = ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1).toUpperCase();
        this.updateAllFromHex(this.hex);
        this.emitChange();
    }
    handleHsvChange(channel, val) {
        if (isNaN(val))
            return;
        if (channel === 'h')
            this.h = Math.max(0, Math.min(360, val));
        if (channel === 's')
            this.s = Math.max(0, Math.min(100, val));
        if (channel === 'v')
            this.v = Math.max(0, Math.min(100, val));
        // HSV to RGB
        const h = this.h;
        const s = this.s / 100;
        const v = this.v / 100;
        const c = v * s;
        const x = c * (1 - Math.abs((h / 60) % 2 - 1));
        const m = v - c;
        let r = 0, g = 0, b = 0;
        if (h < 60) {
            r = c;
            g = x;
            b = 0;
        }
        else if (h < 120) {
            r = x;
            g = c;
            b = 0;
        }
        else if (h < 180) {
            r = 0;
            g = c;
            b = x;
        }
        else if (h < 240) {
            r = 0;
            g = x;
            b = c;
        }
        else if (h < 300) {
            r = x;
            g = 0;
            b = c;
        }
        else {
            r = c;
            g = 0;
            b = x;
        }
        this.r = Math.round((r + m) * 255);
        this.g = Math.round((g + m) * 255);
        this.b = Math.round((b + m) * 255);
        this.hex = ((1 << 24) + (this.r << 16) + (this.g << 8) + this.b).toString(16).slice(1).toUpperCase();
        this.emitChange();
    }
    render() {
        return (h(Host, { key: '8a799159e4f7d80bbe881ba3a93d1a6faed5a54e' }, this.label && h("div", { key: 'd32e7f8bcf4ab190437317d2697a86486e84d264', class: "col-ctrl-label" }, this.label), h("div", { key: '75cc18672f23ef572569ac2cc9d125373264c962', class: "col-ctrl-grid" }, h("div", { key: 'af936f413bb4b7aeff0dd9752deadc0ce1dfcb03', class: "col-ctrl-row" }, h("span", { key: '71c0d3c44062a67c1402d2e2b92f81c3ce8878dc', class: "col-ctrl-key" }, "H"), h("div", { key: '08c832583ca9f956c3fc761fa32b712d208d853d', class: "col-ctrl-input-wrapper" }, h("ui-input", { key: '283a471f4bf8af83f37b7ac201a81d25e6803dba', class: "col-ctrl-input", type: "number", value: this.h, onInputChange: (v) => this.handleHsvChange('h', parseInt(v.detail)), variant: "plain" }), h("span", { key: 'ef039c70dbc01252f0129f95f7eca4f6302f9049', class: "col-ctrl-unit" }, "\u00B0"))), h("div", { key: '68c91d46d38583bd8a8158452033088811453d1c', class: "col-ctrl-row" }, h("span", { key: '3dfb8b3a1f1053080d6ca3c3b03027fa46cc33bd', class: "col-ctrl-key" }, "S"), h("div", { key: '929558e93d27bc799a2401b0f01f358222c24c24', class: "col-ctrl-input-wrapper" }, h("ui-input", { key: 'a2fcdc19f32f5348848347319c134d94d8963ca5', class: "col-ctrl-input", type: "number", value: this.s, onInputChange: (v) => this.handleHsvChange('s', parseInt(v.detail)), variant: "plain" }), h("span", { key: 'de5d00b3264b1284fe23ca13f9611e5046c444d6', class: "col-ctrl-unit" }, "%"))), h("div", { key: '4e744c31accbcdbe6505a160e693926e6001ac9c', class: "col-ctrl-row", style: { marginBottom: '12px' } }, h("span", { key: '9feef4b4fe6459e34f6ac36a42c90d24413da27b', class: "col-ctrl-key" }, "V"), h("div", { key: '9d1821a375ab9473de477c7ab38cea6cd0cf9c57', class: "col-ctrl-input-wrapper" }, h("ui-input", { key: '259bb011612129fd3589fcb7febf15bdd0e7ce13', class: "col-ctrl-input", type: "number", value: this.v, onInputChange: (v) => this.handleHsvChange('v', parseInt(v.detail)), variant: "plain" }), h("span", { key: '3646c32d18517429f758cfef21d34df5d9ec407e', class: "col-ctrl-unit" }, "%"))), h("div", { key: '4f0dae6cce89af626b9d545dda0971ab2f041bca', class: "col-ctrl-row" }, h("span", { key: '6995401c0f6cabba13eb35c596e039769dc33c0a', class: "col-ctrl-key" }, "R"), h("div", { key: 'cc802f297a286f745957b613b37f3ab5ea12fa4e', class: "col-ctrl-input-wrapper" }, h("ui-input", { key: '633391de1afcd81d7ce6f68656569f858a673d62', class: "col-ctrl-input", type: "number", value: this.r, onInputChange: (v) => this.handleRgbChange('r', parseInt(v.detail)), variant: "plain" }))), h("div", { key: 'f4dce90ceb3f0849cb17101c07229b384739d5f1', class: "col-ctrl-row" }, h("span", { key: 'c3891f220f1fccf54fd84ded9674bad3100c530f', class: "col-ctrl-key" }, "G"), h("div", { key: '187f474a516c7a1bd35cce0e03e9aeb3c8d3b6b8', class: "col-ctrl-input-wrapper" }, h("ui-input", { key: '60be98aaf3e10a67b43bb2206e767d60e7bc1e04', class: "col-ctrl-input", type: "number", value: this.g, onInputChange: (v) => this.handleRgbChange('g', parseInt(v.detail)), variant: "plain" }))), h("div", { key: 'a844765b839bfa715a150932d1b3b80c44899d11', class: "col-ctrl-row", style: { marginBottom: '12px' } }, h("span", { key: '548be88547a50add11eb34c6f837e6fca6d9fbfd', class: "col-ctrl-key" }, "B"), h("div", { key: 'eaab04459f36946161d9165d917cff488b27a841', class: "col-ctrl-input-wrapper" }, h("ui-input", { key: '7a3b67f4b98a20e920c8c6537a48354a891d76e5', class: "col-ctrl-input", type: "number", value: this.b, onInputChange: (v) => this.handleRgbChange('b', parseInt(v.detail)), variant: "plain" }))), h("div", { key: '97a6584e32baa09c44a1c3dc80e93c45ea8b1282', class: "col-ctrl-row hex-row" }, h("span", { key: 'aed2ff62dd29ada3896212ede2c24cbf679591ca', class: "col-ctrl-key" }, "#"), h("div", { key: 'b75b8984f2e9dfca0c01022c45a2b1a6e23ba925', class: "col-ctrl-input-wrapper hex-wrapper" }, h("ui-input", { key: '1e051860e57dd8f10298ac939509173bebaca5e3', class: "col-ctrl-input hex-input", value: this.hex, onInputChange: (v) => this.handleHexInput({ detail: { value: v.detail } }), variant: "plain" }))))));
    }
    static get watchers() { return {
        "value": [{
                "handleValueUpdate": 0
            }]
    }; }
};
ColorController.style = colorControllerCss();

export { ColorController as ui_color_controller };
