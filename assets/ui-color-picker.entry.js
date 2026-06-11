import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const colorPickerCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;font-family:inherit}.cp-label{display:block;font-size:13px;font-weight:600;color:var(--text-secondary, #374151);margin-bottom:6px}.cp-trigger-wrapper{position:relative;display:inline-block}.cp-trigger{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;border:1.5px solid var(--border-strong, #d1d5db);border-radius:10px;background:var(--bg-primary, #ffffff);cursor:pointer;font-size:13px;font-weight:500;color:var(--text-secondary, #374151);transition:border-color 0.2s, box-shadow 0.2s;min-width:140px}.cp-trigger:hover:not(.cp-disabled){border-color:var(--color-primary, #10b981);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.12)}.cp-trigger:hover:not(.cp-disabled).cp-disabled{opacity:0.5;cursor:not-allowed}.cp-trigger-swatch{width:20px;height:20px;border-radius:50%;border:2px solid rgba(0, 0, 0, 0.1);flex-shrink:0}.cp-trigger-value{flex:1;font-family:monospace}.cp-trigger-arrow{font-size:10px;color:var(--text-muted, #9ca3af)}.cp-dropdown{position:absolute;top:calc(100% + 6px);left:0;z-index:1000;background:var(--bg-primary, #ffffff);border:1px solid var(--border-default, #e5e7eb);border-radius:14px;box-shadow:0 20px 40px rgba(0, 0, 0, 0.15);overflow:hidden;animation:cp-drop-in 0.15s ease}@keyframes cp-drop-in{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}.cp-panel{width:460px;padding:14px}.cp-panel-hue{width:280px}.cp-panel-input{width:480px}.cp-panel-input .cp-inputs-grid{grid-template-columns:1fr;gap:16px}.cp-panel-input .cp-input-wrap.cp-full{grid-column:span 1}.cp-gradient{width:100%;height:140px;border-radius:8px;position:relative;cursor:crosshair;margin-bottom:12px;user-select:none}.cp-gradient-thumb{position:absolute;width:14px;height:14px;border-radius:50%;border:2.5px solid var(--border-subtle, #fff);box-shadow:0 1px 4px rgba(0, 0, 0, 0.3);transform:translate(-50%, -50%);pointer-events:none}.cp-row{display:flex;align-items:center;gap:10px;margin-bottom:10px}.cp-preview{width:32px;height:32px;border-radius:8px;border:2px solid rgba(0, 0, 0, 0.1);flex-shrink:0}.cp-sliders{flex:1;display:flex;flex-direction:column;gap:12px}.cp-hue-slider,.cp-alpha-slider{width:100%;--slider-track-height:12px;--slider-thumb-size:20px}.cp-hue-slider::part(track),.cp-alpha-slider::part(track){height:12px;border-radius:6px;box-shadow:inset 0 1px 3px rgba(0, 0, 0, 0.2)}.cp-hue-slider::part(thumb),.cp-alpha-slider::part(thumb){width:20px;height:20px;border:3px solid #fff;box-shadow:0 4px 10px rgba(0, 0, 0, 0.3);background:transparent}.cp-inputs-grid{display:grid;grid-template-columns:1fr 1fr;gap:8px;margin-bottom:14px}.cp-panel-multi-format .cp-inputs-grid{grid-template-columns:1fr}.cp-panel-multi-format .cp-input-wrap.cp-full{grid-column:span 1}.cp-input-wrap{display:flex;flex-direction:column;gap:8px}.cp-input-wrap.cp-full{grid-column:span 2}.cp-sm-label{font-size:11px;font-weight:800;color:var(--text-muted, #94a3b8);text-transform:uppercase;letter-spacing:0.05em}.cp-input-wrap.cp-inline-row{display:grid;grid-template-columns:60px 1fr;align-items:center;gap:16px;background:rgba(var(--ui-input-bg-rgb, 248, 250, 252), 0.5);padding:12px 16px;border-radius:12px;border:1px solid var(--border-subtle, #f1f5f9);transition:all 0.2s ease}.cp-input-wrap.cp-inline-row:hover{background:#fff;border-color:var(--border-strong, #e2e8f0);box-shadow:0 4px 12px rgba(0, 0, 0, 0.03)}.cp-channel-grid{display:grid;grid-template-columns:repeat(auto-fit, minmax(64px, 1fr));gap:10px;width:100%}.cp-channel-field{display:flex;flex-direction:column;gap:6px;align-items:center}.cp-channel-field .cp-channel-label{font-size:10px;font-weight:700;color:var(--text-muted, #94a3b8);margin-bottom:2px}.cp-channel-field ui-input{width:100%;--ui-input-text-align:center}.cp-text-input{--ui-input-text-align:left}:host(.cp-variant-hue) .cp-panel{padding-block:12px}:host(.cp-variant-hue) .cp-row{margin-bottom:12px}:host(.cp-variant-input) .cp-panel{padding:12px}:host(.cp-variant-input) .cp-name-display,:host(.cp-variant-input) .cp-text-input{min-height:36px}.cp-name-display{width:100%;border:1.5px solid var(--border-subtle, #f3f4f6);background:var(--bg-primary, #f9fafb);border-radius:8px;padding:6px 10px;font-size:12px;font-weight:600;color:var(--text-secondary, #4b5563);box-sizing:border-box}.cp-swatches{display:flex;flex-wrap:wrap;gap:6px}.cp-swatch{width:22px;height:22px;border-radius:6px;border:2px solid transparent;cursor:pointer;transition:transform 0.1s, border-color 0.15s, box-shadow 0.15s;padding:0;margin:0;outline:none;box-sizing:border-box;flex-shrink:0}.cp-swatch:hover{transform:scale(1.15)}.cp-swatch.cp-swatch-active{border-color:var(--bg-primary, #ffffff);box-shadow:0 0 0 1px var(--bg-primary, #ffffff), 0 0 0 3px var(--swatch-color, var(--color-primary, #10b981))}`;

const ColorPicker = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.colorChange = createEvent(this, "colorChange");
    }
    /** Current hex color value */
    value = '#3bf673';
    /** Label */
    label = '';
    /** Show hex input field */
    showHex = true;
    /** Show RGB input field */
    showRgb = true;
    /** Show RGBA input field */
    showRgba = true;
    /** Show HSL input field */
    showHsl = true;
    /** Show HSLA input field */
    showHsla = true;
    /** Show alpha channel slider */
    showAlpha = false;
    /** Show preset swatches */
    showSwatches = true;
    /** Custom swatches (hex strings) */
    swatches = [];
    /** Format: 'hex' | 'rgb' | 'rgba' | 'hsl' | 'hsla' */
    format = 'hex';
    /** Disabled */
    disabled = false;
    /** Show as inline (no trigger button) */
    inline = false;
    /** Size */
    size = 'md';
    /** Form internal name */
    name = '';
    /** Required */
    required = false;
    /** Show recently picked colors history */
    showRecent = true;
    /** Show eye dropper button (modern browsers only) */
    showEyeDropper = true;
    /** Show color name display */
    showColorName = true;
    /** Enable gradient mode */
    showGradient = false;
    /** Display variant: full picker, hue slider only, or direct inputs */
    variant = 'default';
    get el() { return getElement(this); }
    internals;
    isOpen = false;
    hue = 220;
    saturation = 80;
    lightness = 60;
    alpha = 1;
    hexInput = '#3bf673';
    isInvalid = false;
    invalidField = null;
    recentColors = [];
    isGradientMode = false;
    gradientStops = ['#3bf673', '#10b981'];
    activeStopIndex = 0;
    colorChange;
    handleDocumentPointerDown = (event) => {
        if (!this.isOpen || this.inline) {
            return;
        }
        const eventPath = typeof event.composedPath === 'function' ? event.composedPath() : [];
        const clickedInside = eventPath.includes(this.el);
        if (!clickedInside && !this.el.contains(event.target)) {
            this.isOpen = false;
        }
    };
    defaultSwatches = [
        '#ef4444', '#f97316', '#f59e0b', '#eab308', '#84cc16',
        '#22c55e', '#10b981', '#06b6d4', '#3bf673', '#8b5cf6',
        '#ec4899', '#f43f5e', '#6b7280', '#1f2937', '#ffffff',
    ];
    colorNames = {
        '#ff0000': 'Red', '#00ff00': 'Lime', '#0000ff': 'Blue',
        '#ffffff': 'White', '#000000': 'Black', '#808080': 'Gray',
        '#ffff00': 'Yellow', '#00ffff': 'Cyan', '#ff00ff': 'Magenta',
        '#3bf673': 'Royal Blue', '#10b981': 'Emerald', '#ef4444': 'Red Orange',
        '#f59e0b': 'Amber', '#8b5cf6': 'Violet', '#6b7280': 'Slate'
    };
    initializeInternals() {
        if (this.internals || typeof this.el?.attachInternals !== 'function') {
            return;
        }
        try {
            this.internals = this.el.attachInternals();
        }
        catch (error) {
            if (!(error instanceof DOMException) || error.name !== 'NotSupportedError') {
                throw error;
            }
        }
    }
    componentWillLoad() {
        this.initializeInternals();
        this.syncValueToState(this.value);
        this.value = this.getFormattedValue();
        this.updateFormValue();
        this.loadHistory();
    }
    connectedCallback() {
        document.addEventListener('pointerdown', this.handleDocumentPointerDown, true);
    }
    disconnectedCallback() {
        document.removeEventListener('pointerdown', this.handleDocumentPointerDown, true);
    }
    loadHistory() {
        if (!this.showRecent)
            return;
        try {
            const saved = localStorage.getItem('ui-color-history');
            if (saved) {
                this.recentColors = JSON.parse(saved);
            }
        }
        catch (e) {
            console.error('Failed to load color history', e);
        }
    }
    saveHistory(color) {
        if (!this.showRecent)
            return;
        const newHistory = [color, ...this.recentColors.filter(c => c !== color)].slice(0, 10);
        this.recentColors = newHistory;
        localStorage.setItem('ui-color-history', JSON.stringify(newHistory));
    }
    updateFormValue() {
        if (this.internals) {
            this.internals?.setFormValue(this.value);
        }
    }
    valueChanged(val) {
        this.syncValueToState(val);
    }
    getSwatches() {
        if (typeof this.swatches === 'string') {
            try {
                return JSON.parse(this.swatches);
            }
            catch {
                return this.defaultSwatches;
            }
        }
        return this.swatches.length > 0 ? this.swatches : this.defaultSwatches;
    }
    clamp(value, min, max) {
        return Math.min(max, Math.max(min, value));
    }
    roundAlpha(value) {
        return Math.round(this.clamp(value, 0, 1) * 100) / 100;
    }
    componentToHex(value) {
        return Math.round(this.clamp(value, 0, 255)).toString(16).padStart(2, '0');
    }
    rgbToHsl(r, g, b) {
        const rn = this.clamp(r, 0, 255) / 255;
        const gn = this.clamp(g, 0, 255) / 255;
        const bn = this.clamp(b, 0, 255) / 255;
        const max = Math.max(rn, gn, bn);
        const min = Math.min(rn, gn, bn);
        const l = (max + min) / 2;
        let h = 0;
        let s = 0;
        if (max !== min) {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            switch (max) {
                case rn:
                    h = ((gn - bn) / d + (gn < bn ? 6 : 0)) / 6;
                    break;
                case gn:
                    h = ((bn - rn) / d + 2) / 6;
                    break;
                default:
                    h = ((rn - gn) / d + 4) / 6;
                    break;
            }
        }
        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100),
        };
    }
    parseHex(hex) {
        const normalized = hex.trim();
        const match = normalized.match(/^#([0-9a-f]{3}|[0-9a-f]{4}|[0-9a-f]{6}|[0-9a-f]{8})$/i);
        if (!match)
            return null;
        let raw = match[1];
        if (raw.length === 3 || raw.length === 4) {
            raw = raw.split('').map(char => `${char}${char}`).join('');
        }
        const hasAlpha = raw.length === 8;
        const r = parseInt(raw.slice(0, 2), 16);
        const g = parseInt(raw.slice(2, 4), 16);
        const b = parseInt(raw.slice(4, 6), 16);
        const alpha = hasAlpha ? parseInt(raw.slice(6, 8), 16) / 255 : this.alpha;
        const hsl = this.rgbToHsl(r, g, b);
        return {
            hex: `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b)}`,
            alpha: this.roundAlpha(alpha),
            ...hsl,
        };
    }
    parseRgbColor(value) {
        const match = value.trim().match(/^rgba?\(([^)]+)\)$/i);
        if (!match)
            return null;
        const parts = match[1].split(',').map(part => part.trim());
        if (parts.length !== 3 && parts.length !== 4)
            return null;
        const rgb = parts.slice(0, 3).map(part => Number(part));
        if (rgb.some(part => Number.isNaN(part)))
            return null;
        const [r, g, b] = rgb.map(part => this.clamp(part, 0, 255));
        const alpha = parts[3] !== undefined ? this.roundAlpha(Number(parts[3])) : this.alpha;
        if (Number.isNaN(alpha))
            return null;
        const hsl = this.rgbToHsl(r, g, b);
        return {
            hex: `#${this.componentToHex(r)}${this.componentToHex(g)}${this.componentToHex(b)}`,
            alpha,
            ...hsl,
        };
    }
    parseHslColor(value) {
        const match = value.trim().match(/^hsla?\(([^)]+)\)$/i);
        if (!match)
            return null;
        const parts = match[1].split(',').map(part => part.trim());
        if (parts.length !== 3 && parts.length !== 4)
            return null;
        const hue = Number(parts[0]);
        const saturation = Number(parts[1].replace('%', ''));
        const lightness = Number(parts[2].replace('%', ''));
        const alpha = parts[3] !== undefined ? this.roundAlpha(Number(parts[3])) : this.alpha;
        if ([hue, saturation, lightness, alpha].some(part => Number.isNaN(part)))
            return null;
        const normalizedHue = ((hue % 360) + 360) % 360;
        const normalizedSaturation = this.clamp(saturation, 0, 100);
        const normalizedLightness = this.clamp(lightness, 0, 100);
        return {
            hex: this.hslToHex(normalizedHue, normalizedSaturation, normalizedLightness),
            alpha,
            h: Math.round(normalizedHue),
            s: Math.round(normalizedSaturation),
            l: Math.round(normalizedLightness),
        };
    }
    parseColorValue(value) {
        if (!value || value.startsWith('linear-gradient'))
            return null;
        return this.parseHex(value)
            || this.parseRgbColor(value)
            || this.parseHslColor(value);
    }
    syncParsedColor(parsedColor) {
        this.hue = parsedColor.h;
        this.saturation = parsedColor.s;
        this.lightness = parsedColor.l;
        this.alpha = this.roundAlpha(parsedColor.alpha);
        this.hexInput = this.getHexInputValue(parsedColor.hex, parsedColor.alpha);
        this.isInvalid = false;
        this.invalidField = null;
    }
    syncValueToState(value) {
        const parsedColor = this.parseColorValue(value);
        if (parsedColor) {
            this.syncParsedColor(parsedColor);
        }
    }
    hslToHex(h, s, l) {
        const hn = h / 360, sn = s / 100, ln = l / 100;
        let r, g, b;
        if (sn === 0) {
            r = g = b = ln;
        }
        else {
            const hue2rgb = (p, q, t) => {
                if (t < 0)
                    t += 1;
                if (t > 1)
                    t -= 1;
                if (t < 1 / 6)
                    return p + (q - p) * 6 * t;
                if (t < 1 / 2)
                    return q;
                if (t < 2 / 3)
                    return p + (q - p) * (2 / 3 - t) * 6;
                return p;
            };
            const q = ln < 0.5 ? ln * (1 + sn) : ln + sn - ln * sn;
            const p = 2 * ln - q;
            r = hue2rgb(p, q, hn + 1 / 3);
            g = hue2rgb(p, q, hn);
            b = hue2rgb(p, q, hn - 1 / 3);
        }
        const toHex = (x) => Math.round(x * 255).toString(16).padStart(2, '0');
        return `#${toHex(r)}${toHex(g)}${toHex(b)}`;
    }
    getRgbValues() {
        const hex = this.hslToHex(this.hue, this.saturation, this.lightness).replace('#', '');
        return {
            r: parseInt(hex.slice(0, 2), 16),
            g: parseInt(hex.slice(2, 4), 16),
            b: parseInt(hex.slice(4, 6), 16),
        };
    }
    getHexValue(baseHex = this.hslToHex(this.hue, this.saturation, this.lightness), alpha = this.alpha) {
        if (alpha < 1) {
            return `${baseHex}${this.componentToHex(alpha * 255)}`;
        }
        return baseHex;
    }
    getHexInputValue(baseHex = this.hslToHex(this.hue, this.saturation, this.lightness), alpha = this.alpha) {
        return this.getHexValue(baseHex, alpha).replace(/^#/, '');
    }
    getRgbString(includeAlpha = false) {
        const { r, g, b } = this.getRgbValues();
        return includeAlpha
            ? `rgba(${r}, ${g}, ${b}, ${this.roundAlpha(this.alpha)})`
            : `rgb(${r}, ${g}, ${b})`;
    }
    getHslString(includeAlpha = false) {
        return includeAlpha
            ? `hsla(${this.hue}, ${this.saturation}%, ${this.lightness}%, ${this.roundAlpha(this.alpha)})`
            : `hsl(${this.hue}, ${this.saturation}%, ${this.lightness}%)`;
    }
    getFormattedValue() {
        switch (this.format) {
            case 'rgb':
                return this.getRgbString(false);
            case 'rgba':
                return this.getRgbString(true);
            case 'hsl':
                return this.getHslString(false);
            case 'hsla':
                return this.getHslString(true);
            case 'hex':
            default:
                return this.getHexValue();
        }
    }
    updateColorFromInput(value, source) {
        if (source === 'hex')
            this.hexInput = value.replace(/^#/, '');
        const normalizedValue = source === 'hex'
            ? `#${value.replace(/^#/, '')}`
            : value;
        const parsedColor = this.parseColorValue(normalizedValue);
        if (!parsedColor) {
            this.isInvalid = true;
            this.invalidField = source;
            return;
        }
        this.syncParsedColor(parsedColor);
        const formattedValue = this.getFormattedValue();
        this.value = formattedValue;
        this.updateFormValue();
        this.colorChange.emit(formattedValue);
        // Removed redundant saveHistory call
    }
    emitChange() {
        const hex = this.hslToHex(this.hue, this.saturation, this.lightness);
        if (this.isGradientMode) {
            this.gradientStops[this.activeStopIndex] = hex;
            this.gradientStops = [...this.gradientStops];
            const grad = `linear-gradient(90deg, ${this.gradientStops[0]}, ${this.gradientStops[1]})`;
            this.value = grad;
            this.colorChange.emit(grad);
        }
        else {
            this.value = this.getFormattedValue();
            this.hexInput = this.getHexInputValue(hex, this.alpha);
            this.isInvalid = false;
            this.invalidField = null;
            this.updateFormValue();
            this.colorChange.emit(this.value);
            this.saveHistory(hex);
        }
    }
    toggleGradientMode = () => {
        this.isGradientMode = !this.isGradientMode;
        this.emitChange();
    };
    async handleEyeDropper() {
        if (!('EyeDropper' in window)) {
            alert('EyeDropper API is not supported in this browser.');
            return;
        }
        // @ts-ignore
        const eyeDropper = new EyeDropper();
        try {
            const result = await eyeDropper.open();
            this.handleSwatch(result.sRGBHex);
        }
        catch (e) {
            // EyeDropper cancelled or failed
        }
    }
    getColorName(hex) {
        const h = hex.toLowerCase();
        return this.colorNames[h] || 'Custom';
    }
    handleHexInput = (e) => {
        this.updateColorFromInput(e.detail, 'hex');
    };
    handleSwatch = (color) => {
        const parsedColor = this.parseHex(color);
        if (!parsedColor)
            return;
        this.syncParsedColor(parsedColor);
        this.value = this.getFormattedValue();
        this.updateFormValue();
        this.colorChange.emit(this.value);
        this.saveHistory(parsedColor.hex);
    };
    parseChannelValue(value) {
        if (value === '' || value === null || value === undefined) {
            return null;
        }
        const numericValue = Number(value);
        return Number.isFinite(numericValue) ? numericValue : null;
    }
    setChannelValidation(fieldKey) {
        this.isInvalid = Boolean(fieldKey);
        this.invalidField = fieldKey;
    }
    applyRgbColor(r, g, b, alpha = this.alpha) {
        const nextR = Math.round(this.clamp(r, 0, 255));
        const nextG = Math.round(this.clamp(g, 0, 255));
        const nextB = Math.round(this.clamp(b, 0, 255));
        const nextAlpha = this.roundAlpha(alpha);
        const nextHsl = this.rgbToHsl(nextR, nextG, nextB);
        this.syncParsedColor({
            hex: `#${this.componentToHex(nextR)}${this.componentToHex(nextG)}${this.componentToHex(nextB)}`,
            alpha: nextAlpha,
            ...nextHsl,
        });
        this.value = this.getFormattedValue();
        this.updateFormValue();
        this.colorChange.emit(this.value);
        // Removed redundant saveHistory call
    }
    applyHslColor(h, s, l, alpha = this.alpha) {
        const nextHue = Math.round(this.clamp(h, 0, 360));
        const nextSaturation = Math.round(this.clamp(s, 0, 100));
        const nextLightness = Math.round(this.clamp(l, 0, 100));
        const nextAlpha = this.roundAlpha(alpha);
        this.syncParsedColor({
            hex: this.hslToHex(nextHue, nextSaturation, nextLightness),
            alpha: nextAlpha,
            h: nextHue,
            s: nextSaturation,
            l: nextLightness,
        });
        this.value = this.getFormattedValue();
        this.updateFormValue();
        this.colorChange.emit(this.value);
        // Removed redundant saveHistory call
    }
    handleRgbChannelChange = (channel, event) => {
        const channelValue = this.parseChannelValue(event.detail);
        const fieldKey = `rgb-${channel}`;
        if (channelValue === null || channelValue < 0 || channelValue > 255) {
            this.setChannelValidation(fieldKey);
            return;
        }
        const currentRgb = this.getRgbValues();
        currentRgb[channel] = Math.round(channelValue);
        this.setChannelValidation(null);
        this.applyRgbColor(currentRgb.r, currentRgb.g, currentRgb.b);
    };
    handleRgbaChannelChange = (channel, event) => {
        const channelValue = this.parseChannelValue(event.detail);
        const fieldKey = `rgba-${channel}`;
        if (channelValue === null) {
            this.setChannelValidation(fieldKey);
            return;
        }
        const currentRgb = this.getRgbValues();
        let nextAlpha = this.alpha;
        if (channel === 'a') {
            if (channelValue < 0 || channelValue > 1) {
                this.setChannelValidation(fieldKey);
                return;
            }
            nextAlpha = channelValue;
        }
        else {
            if (channelValue < 0 || channelValue > 255) {
                this.setChannelValidation(fieldKey);
                return;
            }
            currentRgb[channel] = Math.round(channelValue);
        }
        this.setChannelValidation(null);
        this.applyRgbColor(currentRgb.r, currentRgb.g, currentRgb.b, nextAlpha);
    };
    handleHslChannelChange = (channel, event) => {
        const channelValue = this.parseChannelValue(event.detail);
        const fieldKey = `hsl-${channel}`;
        const limits = { h: 360, s: 100, l: 100 };
        if (channelValue === null || channelValue < 0 || channelValue > limits[channel]) {
            this.setChannelValidation(fieldKey);
            return;
        }
        const nextHsl = {
            h: this.hue,
            s: this.saturation,
            l: this.lightness,
            [channel]: Math.round(channelValue),
        };
        this.setChannelValidation(null);
        this.applyHslColor(nextHsl.h, nextHsl.s, nextHsl.l);
    };
    handleHslaChannelChange = (channel, event) => {
        const channelValue = this.parseChannelValue(event.detail);
        const fieldKey = `hsla-${channel}`;
        if (channelValue === null) {
            this.setChannelValidation(fieldKey);
            return;
        }
        const nextHsl = {
            h: this.hue,
            s: this.saturation,
            l: this.lightness,
        };
        let nextAlpha = this.alpha;
        if (channel === 'a') {
            if (channelValue < 0 || channelValue > 1) {
                this.setChannelValidation(fieldKey);
                return;
            }
            nextAlpha = channelValue;
        }
        else {
            const limits = { h: 360, s: 100, l: 100 };
            if (channelValue < 0 || channelValue > limits[channel]) {
                this.setChannelValidation(fieldKey);
                return;
            }
            nextHsl[channel] = Math.round(channelValue);
        }
        this.setChannelValidation(null);
        this.applyHslColor(nextHsl.h, nextHsl.s, nextHsl.l, nextAlpha);
    };
    isHueVariant() {
        return this.variant === 'hue';
    }
    isInputVariant() {
        return this.variant === 'input';
    }
    showGradientSurface() {
        return !this.isHueVariant() && !this.isInputVariant();
    }
    showSliderSection() {
        return !this.isInputVariant();
    }
    showInputSection() {
        return this.showHex || this.showRgb || this.showRgba || this.showHsl || this.showHsla || this.isInputVariant();
    }
    getPanelClasses() {
        return {
            'cp-panel': true,
            'cp-panel-hue': this.isHueVariant(),
            'cp-panel-input': this.isInputVariant(),
            'cp-panel-multi-format': this.showInputSection(),
        };
    }
    renderFormatInput(label, value, onInputChange, formatKey) {
        return (h("div", { class: "cp-input-wrap cp-full cp-inline-row" }, h("span", { class: "cp-sm-label" }, label), h("ui-input", { class: { 'cp-text-input': true, 'cp-input-error': this.isInvalid && this.invalidField === formatKey }, type: "text", value: value, onInputChange: onInputChange, size: "sm" })));
    }
    renderChannelInput(fieldKey, label, value, min, max, step, onInputChange) {
        return (h("div", { class: "cp-channel-field" }, h("span", { class: "cp-channel-label" }, label), h("ui-input", { class: { 'cp-text-input': true, 'cp-channel-input': true, 'cp-input-error': this.isInvalid && this.invalidField === fieldKey }, type: "number", min: min, max: max, step: step, value: value, onInputChange: onInputChange, size: "sm" })));
    }
    renderChannelGroup(label, columns, fields) {
        return (h("div", { class: "cp-input-wrap cp-full cp-channel-group cp-inline-row" }, h("span", { class: "cp-sm-label" }, label), h("div", { class: { 'cp-channel-grid': true, 'cp-channel-grid-3': columns === 3, 'cp-channel-grid-4': columns === 4 } }, fields)));
    }
    render() {
        const currentColor = this.hslToHex(this.hue, this.saturation, this.lightness);
        const swatches = this.getSwatches();
        const picker = (h("div", { key: '1e6a1eb368643f6e67d9804cce7bcfed32b1bd1d', class: this.getPanelClasses() }, this.showGradientSurface() && (h("div", { key: '2970c7db9dde45a2f88ed3ede420df322c6556dc', class: "cp-gradient", role: "slider", "aria-label": "Saturation and Lightness", "aria-valuemin": 0, "aria-valuemax": 100, "aria-valuenow": this.saturation, "aria-valuetext": `Saturation ${this.saturation}%, Lightness ${this.lightness}%`, tabindex: "0", onKeyDown: (e) => {
                const step = e.shiftKey ? 10 : 1;
                if (e.key === 'ArrowLeft') {
                    this.saturation = Math.max(0, this.saturation - step);
                    this.emitChange();
                }
                if (e.key === 'ArrowRight') {
                    this.saturation = Math.min(100, this.saturation + step);
                    this.emitChange();
                }
                if (e.key === 'ArrowUp') {
                    this.lightness = Math.min(100, this.lightness + step);
                    this.emitChange();
                }
                if (e.key === 'ArrowDown') {
                    this.lightness = Math.max(0, this.lightness - step);
                    this.emitChange();
                }
            }, style: { background: `linear-gradient(to bottom, transparent, #000), linear-gradient(to right, #fff, hsl(${this.hue}, 100%, 50%))` }, onMouseDown: (e) => {
                const rect = e.currentTarget.getBoundingClientRect();
                const onMove = (me) => {
                    const x = Math.max(0, Math.min(1, (me.clientX - rect.left) / rect.width));
                    const y = Math.max(0, Math.min(1, (me.clientY - rect.top) / rect.height));
                    this.saturation = Math.round(x * 100);
                    this.lightness = Math.round((1 - y) * (100 - x * 50));
                    this.emitChange();
                };
                const onUp = () => {
                    window.removeEventListener('mousemove', onMove);
                    window.removeEventListener('mouseup', onUp);
                };
                window.addEventListener('mousemove', onMove);
                window.addEventListener('mouseup', onUp);
                onMove(e);
            } }, h("div", { key: '4136b69d81619ce158f2988be19e3e866dfa4ae8', class: "cp-gradient-thumb", style: { left: `${this.saturation}%`, top: `${100 - this.lightness}%`, background: currentColor } }))), this.showSliderSection() && (h("div", { key: '27572206380ad082b4c49a9652b171169d4d92c0', class: "cp-row" }, h("div", { key: 'c69c64ac7d1173add32d3c0541ac73fe70383d7e', class: "cp-preview", style: { background: currentColor } }), h("div", { key: '54663ac5d49a43922b4a46587383b4ea3db54520', class: "cp-sliders" }, h("ui-range-slider", { key: '058c8a3b800afafc80cb13c06cfb48462e8e8206', class: "cp-hue-slider", min: 0, max: 360, value: this.hue, onSliderChange: (e) => { this.hue = Number(e.detail); this.emitChange(); }, "aria-label": "Hue", showTooltip: false, showValue: false, hideRange: true, trackColor: "linear-gradient(to right, #f00 0%, #ff0 17%, #0f0 33%, #0ff 50%, #00f 67%, #f0f 83%, #f00 100%)" }), this.showAlpha && (h("ui-range-slider", { key: 'ef3b5d6112c7040bb1910d8171c8dc84901b628b', class: "cp-alpha-slider", min: 0, max: 100, value: Math.round(this.alpha * 100), onSliderChange: (e) => { this.alpha = Number(e.detail) / 100; this.emitChange(); }, "aria-label": "Alpha", showTooltip: false, showValue: false, hideRange: true, trackColor: `linear-gradient(to right, transparent, ${this.hslToHex(this.hue, this.saturation, this.lightness)}), url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='10' height='10'%3E%3Crect width='5' height='5' fill='%23ccc'/%3E%3Crect x='5' y='5' width='5' height='5' fill='%23ccc'/%3E%3C/svg%3E")` }))), this.showEyeDropper && 'EyeDropper' in window && (h("ui-button", { key: 'a3597f83c7b6e4293bd0975d07b8994e66580f87', variant: "ghost", onClick: () => this.handleEyeDropper(), ariaLabel: "Sample color from screen", icon: "pipette", iconLibrary: "lucide", iconOnly: true, size: "sm", title: "Sample color from screen" })))), this.showInputSection() && (h("div", { key: 'd3473eb493f2fda3167c506e8ff2470beb17bab9', class: "cp-inputs-grid" }, this.showHex && (this.renderFormatInput('HEX', this.hexInput || this.getHexInputValue(), this.handleHexInput, 'hex')), this.showRgb && (this.renderChannelGroup('RGB', 3, [
            this.renderChannelInput('rgb-r', 'R', this.getRgbValues().r, 0, 255, 1, (event) => this.handleRgbChannelChange('r', event)),
            this.renderChannelInput('rgb-g', 'G', this.getRgbValues().g, 0, 255, 1, (event) => this.handleRgbChannelChange('g', event)),
            this.renderChannelInput('rgb-b', 'B', this.getRgbValues().b, 0, 255, 1, (event) => this.handleRgbChannelChange('b', event)),
        ])), this.showRgba && (this.renderChannelGroup('RGBA', 4, [
            this.renderChannelInput('rgba-r', 'R', this.getRgbValues().r, 0, 255, 1, (event) => this.handleRgbaChannelChange('r', event)),
            this.renderChannelInput('rgba-g', 'G', this.getRgbValues().g, 0, 255, 1, (event) => this.handleRgbaChannelChange('g', event)),
            this.renderChannelInput('rgba-b', 'B', this.getRgbValues().b, 0, 255, 1, (event) => this.handleRgbaChannelChange('b', event)),
            this.renderChannelInput('rgba-a', 'A', this.alpha, 0, 1, 0.01, (event) => this.handleRgbaChannelChange('a', event)),
        ])), this.showHsl && (this.renderChannelGroup('HSL', 3, [
            this.renderChannelInput('hsl-h', 'H', this.hue, 0, 360, 1, (event) => this.handleHslChannelChange('h', event)),
            this.renderChannelInput('hsl-s', 'S', this.saturation, 0, 100, 1, (event) => this.handleHslChannelChange('s', event)),
            this.renderChannelInput('hsl-l', 'L', this.lightness, 0, 100, 1, (event) => this.handleHslChannelChange('l', event)),
        ])), this.showHsla && (this.renderChannelGroup('HSLA', 4, [
            this.renderChannelInput('hsla-h', 'H', this.hue, 0, 360, 1, (event) => this.handleHslaChannelChange('h', event)),
            this.renderChannelInput('hsla-s', 'S', this.saturation, 0, 100, 1, (event) => this.handleHslaChannelChange('s', event)),
            this.renderChannelInput('hsla-l', 'L', this.lightness, 0, 100, 1, (event) => this.handleHslaChannelChange('l', event)),
            this.renderChannelInput('hsla-a', 'A', this.alpha, 0, 1, 0.01, (event) => this.handleHslaChannelChange('a', event)),
        ])), this.showColorName && (h("div", { key: 'e73f932f199ad98b6d0155e4f39fc6f731821e75', class: "cp-input-wrap cp-full" }, h("span", { key: 'c47ac8a26ae1f1db9cc2a6fa0888ed2568043b30', class: "cp-sm-label" }, "NAME"), h("div", { key: '393f4e95fa277dc016f4c31291683973f4f0a48a', class: "cp-name-display" }, this.getColorName(currentColor)))), this.showGradient && (h("div", { key: '9029146f00a030168b63ea55a9a1f9ec67ce7cfa', class: "cp-gradient-toggle-wrap cp-full" }, h("ui-button", { key: 'a6561f32b69e43b5651134b73a6ab195b721c2c9', variant: 'outline', class: { 'cp-gradient-toggle': true, 'cp-active': this.isGradientMode }, onClick: this.toggleGradientMode, fullWidth: true, label: this.isGradientMode ? 'Disable Gradient' : 'Enable Gradient', size: "sm" }), this.isGradientMode && (h("div", { key: 'aabaa25bd9f75a7bec76e611b9d852b8918fd718', class: "cp-stop-selectors" }, this.gradientStops.map((stop, i) => (h("button", { type: "button", class: { 'cp-swatch': true, 'cp-swatch-active': this.activeStopIndex === i }, style: { 'background-color': stop, '--swatch-color': stop, 'border-radius': '50%' }, onClick: () => this.activeStopIndex = i, "aria-label": `Gradient stop ${i + 1}` }))))))))), !this.isInputVariant() && (this.showSwatches || (this.showRecent && this.recentColors.length > 0)) && (h("div", { key: 'b928b33063877a58493f56aa01a37efac5fade30', class: "cp-swatches-section" }, h("div", { key: '02b8efedfdad4aa7bbe93b63bd3075395bef8f37', class: "cp-swatches" }, swatches.map(s => (h("ui-button", { type: "button", style: { 'background-color': s, '--swatch-color': s }, class: { 'cp-swatch': true, 'cp-swatch-active': s.toLowerCase() === currentColor.toLowerCase() }, onClick: () => this.handleSwatch(s), title: this.getColorName(s), "aria-label": `Color ${this.getColorName(s)}` })))), this.showRecent && this.recentColors.length > 0 && (h("div", { key: '68a6692afc4ae42ac02c8835fb65f40d64572ffd', class: "cp-history", style: { marginTop: '16px' } }, h("div", { key: 'c14af759e7380d18fa8b046bd91d97e0d4bb7b43', class: "cp-sm-label", style: { marginBottom: '8px' } }, "RECENT"), h("div", { key: 'a405d48643d7b452cb90dcfd5d2756a91a37585c', class: "cp-swatches" }, this.recentColors.map(s => (h("ui-button", { type: "button", style: { 'background-color': s, '--swatch-color': s, 'border-radius': '50%' }, class: { 'cp-swatch': true, 'cp-history-swatch': true, 'cp-swatch-active': s.toLowerCase() === currentColor.toLowerCase() }, onClick: () => this.handleSwatch(s), title: this.getColorName(s), "aria-label": `Recent color ${this.getColorName(s)}` }))))))))));
        return (h(Host, { key: '437644b794e0abc1a9a37f77641ef9edf0bc47d7', class: `cp-size-${this.size} cp-variant-${this.variant}` }, this.label && h("label", { key: 'ba2bb236655f6eab50c62cd18d3b07bbc0cf37b1', class: "cp-label" }, this.label), this.inline ? picker : (h("div", { class: "cp-trigger-wrapper" }, h("ui-button", { variant: "outline", disabled: this.disabled, onClick: () => !this.disabled && (this.isOpen = !this.isOpen), fullWidth: true }, h("span", { class: "cp-trigger-swatch", style: { background: this.value } }), h("span", { class: "cp-trigger-value", style: { marginLeft: '8px', flex: '1', textAlign: 'left' } }, this.isGradientMode ? this.value : this.getFormattedValue()), h("ui-icon", { name: this.isOpen ? 'chevron-up' : 'chevron-down', size: "18", library: "lucide" })), this.isOpen && (h("div", { class: "cp-dropdown" }, picker))))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }]
    }; }
};
ColorPicker.style = colorPickerCss();

export { ColorPicker as ui_color_picker };
