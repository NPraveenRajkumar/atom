import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const knobCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:inline-block}.knob-wrapper{display:flex;flex-direction:column;align-items:center;gap:12px}.knob-container{position:relative;display:flex;align-items:center;justify-content:center;cursor:pointer;user-select:none;touch-action:none;transition:transform 0.1s ease}.knob-container:hover:not(.disabled):not(.readonly){transform:scale(1.02)}.knob-container.dragging{cursor:grabbing;transform:scale(1.05)}.knob-container.disabled,.knob-container.readonly{cursor:not-allowed;opacity:0.5}.knob-svg{display:block;overflow:visible}.value-arc{filter:drop-shadow(0 2px 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3));transition:stroke 0.2s ease}.knob-container:hover:not(.disabled):not(.readonly) .value-arc{filter:drop-shadow(0 3px 6px rgba(var(--color-primary-rgb, 59, 130, 246), 0.4))}.center-dot{filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.1))}.indicator{transition:all 0.1s ease;filter:drop-shadow(0 1px 2px rgba(0, 0, 0, 0.2))}.value-label{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);display:flex;align-items:baseline;gap:2px;pointer-events:none;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif}.value-number{font-size:calc(var(--knob-size, 120px) * 0.2);font-weight:700;color:var(--text-primary, #1e293b);line-height:1}.value-suffix{font-size:calc(var(--knob-size, 120px) * 0.12);font-weight:600;color:var(--text-muted, #64748b);line-height:1}.min-max-labels{display:flex;justify-content:space-between;width:100%;font-size:12px;color:var(--text-muted, #64748b);font-weight:500;padding:0 8px}.min-label,.max-label{white-space:nowrap}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.8}}.knob-container.dragging .value-label{animation:pulse 0.3s ease-in-out}.knob-container:active:not(.disabled):not(.readonly){transform:scale(1.05)}.knob-container:focus-visible{outline:2px solid var(--color-primary, #10b981);outline-offset:4px;border-radius:50%}@media (max-width: 640px){.value-number{font-size:calc(var(--knob-size, 120px) * 0.18)}.value-suffix{font-size:calc(var(--knob-size, 120px) * 0.11)}.min-max-labels{font-size:11px}}`;

const Knob = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.knobChange = createEvent(this, "knobChange");
        this.knobInput = createEvent(this, "knobInput");
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
    /**
     * Name of the form control
     */
    name;
    /**
     * Current value
     */
    value = 0;
    /**
     * Minimum value
     */
    min = 0;
    /**
     * Maximum value
     */
    max = 100;
    /**
     * Step increment
     */
    step = 1;
    /**
     * Size of the knob
     */
    size = 120;
    /**
     * Stroke width
     */
    strokeWidth = 8;
    /**
     * Color of the active arc (string or {from: string, to: string})
     */
    color = '#3bf673';
    /**
     * Color of the track
     */
    trackColor = '#e2e8f0';
    /**
     * Enable gradient for the active arc
     */
    gradient = false;
    /**
     * Show value label
     */
    showValue = true;
    /**
     * Custom value suffix (e.g., '%', '°', 'dB')
     */
    valueSuffix = '';
    /**
     * Show min/max labels
     */
    showMinMax = false;
    /**
     * Disabled state
     */
    disabled = false;
    /**
     * Read-only state
     */
    readonly = false;
    /**
     * Start angle in degrees (0 = top, 90 = right)
     */
    startAngle = 135;
    /**
     * End angle in degrees
     */
    endAngle = 405;
    /**
     * Enable mouse wheel rotation control
     */
    enableWheel = true;
    /**
     * Show tick marks along the arc (useful for speedometer-like gauges)
     */
    showTicks = false;
    /**
     * Number of tick marks to render along the arc
     */
    tickCount = 10;
    /**
     * Tick color
     */
    tickColor = '#94a3b8';
    /**
     * Tick length factor relative to radius (0-1)
     */
    tickLength = 0.1;
    /**
     * Show numeric labels around the knob
     */
    showLabels = false;
    /**
     * Snap to step intervals
     */
    snap = false;
    /**
     * Allow double-click to edit value manually
     */
    allowInput = false;
    /**
     * Event emitted when value changes
     */
    knobChange;
    /**
     * Event emitted while dragging
     */
    knobInput;
    isDragging = false;
    angle = 0;
    isEditing = false; // For manual input
    gradientId = `ui-knob-gradient-${Math.random().toString(36).substr(2, 9)}`;
    knobRef;
    valueChanged(newValue) {
        this.updateAngle(newValue);
        this.internals.setFormValue(newValue.toString());
    }
    colorChanged() {
        this.normalizeProps();
    }
    propsChanged() {
        this.normalizeProps();
    }
    componentWillLoad() {
        this.normalizeProps();
        this.updateAngle(this.value);
        this.internals.setFormValue(this.value.toString());
    }
    normalizeProps() {
        try {
            if (typeof this.color === 'string' && this.color.startsWith('{')) {
                this.color = JSON.parse(this.color);
            }
        }
        catch (e) {
            console.warn('Failed to parse knob color prop', e);
        }
    }
    updateAngle(value) {
        const percentage = (value - this.min) / (this.max - this.min);
        const totalAngle = this.endAngle - this.startAngle;
        this.angle = this.startAngle + totalAngle * percentage;
    }
    handleMouseDown = (event) => {
        if (this.disabled || this.readonly)
            return;
        event.preventDefault();
        this.isDragging = true;
        this.updateValueFromEvent(event);
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    };
    handleMouseMove = (event) => {
        if (!this.isDragging)
            return;
        this.updateValueFromEvent(event);
        this.knobInput.emit(this.value);
    };
    handleMouseUp = () => {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.knobChange.emit(this.value);
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    };
    handleTouchStart = (event) => {
        if (this.disabled || this.readonly)
            return;
        event.preventDefault();
        this.isDragging = true;
        this.updateValueFromTouch(event);
    };
    handleTouchMove = (event) => {
        if (!this.isDragging)
            return;
        event.preventDefault();
        this.updateValueFromTouch(event);
        this.knobInput.emit(this.value);
    };
    handleTouchEnd = () => {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        this.knobChange.emit(this.value);
    };
    handleWheel = (event) => {
        if (!this.enableWheel || this.disabled || this.readonly)
            return;
        event.preventDefault();
        const direction = Math.sign(event.deltaY); // 1 = down, -1 = up
        const stepDelta = direction * this.step;
        let newValue = this.value - stepDelta; // wheel up increases, down decreases
        newValue = Math.max(this.min, Math.min(this.max, newValue));
        this.value = newValue;
        this.updateAngle(newValue);
        this.knobInput.emit(this.value);
        // Debounced change emit
        clearTimeout(this._wheelTimeout);
        this._wheelTimeout = setTimeout(() => this.knobChange.emit(this.value), 100);
    };
    handleKeyDown = (event) => {
        if (this.disabled || this.readonly)
            return;
        let newValue = this.value;
        const lgStep = this.step * 10;
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newValue = Math.min(this.max, this.value + this.step);
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newValue = Math.max(this.min, this.value - this.step);
                break;
            case 'PageUp':
                newValue = Math.min(this.max, this.value + lgStep);
                break;
            case 'PageDown':
                newValue = Math.max(this.min, this.value - lgStep);
                break;
            case 'Home':
                newValue = this.min;
                break;
            case 'End':
                newValue = this.max;
                break;
            default:
                return;
        }
        if (newValue !== this.value) {
            event.preventDefault();
            this.value = newValue;
            this.updateAngle(newValue);
            this.knobInput.emit(this.value);
            this.knobChange.emit(this.value);
        }
    };
    updateValueFromEvent(event) {
        if (!this.knobRef)
            return;
        const rect = this.knobRef.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const deltaX = event.clientX - centerX;
        const deltaY = event.clientY - centerY;
        this.calculateValueFromAngle(deltaX, deltaY);
    }
    updateValueFromTouch(event) {
        if (!this.knobRef || event.touches.length === 0)
            return;
        const rect = this.knobRef.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const touch = event.touches[0];
        const deltaX = touch.clientX - centerX;
        const deltaY = touch.clientY - centerY;
        this.calculateValueFromAngle(deltaX, deltaY);
    }
    calculateValueFromAngle(deltaX, deltaY) {
        let angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI) + 90;
        if (angle < 0)
            angle += 360;
        // Constrain angle to start/end range
        const totalAngle = this.endAngle - this.startAngle;
        if (angle < this.startAngle) {
            angle = angle + 360 >= this.startAngle ? angle + 360 : this.startAngle;
        }
        if (angle > this.endAngle && angle < this.startAngle + 360) {
            const distToStart = Math.abs(angle - this.startAngle);
            const distToEnd = Math.abs(angle - this.endAngle);
            angle = distToStart < distToEnd ? this.startAngle : this.endAngle;
        }
        angle = Math.max(this.startAngle, Math.min(this.endAngle, angle));
        const percentage = (angle - this.startAngle) / totalAngle;
        let newValue = this.min + percentage * (this.max - this.min);
        // Apply step
        let steppedValue = newValue;
        if (this.snap) { // If snap is true, we strictly snap to step
            steppedValue = Math.round(newValue / this.step) * this.step;
        }
        else {
            // Just rounding for cleaner numbers, but mostly fluid
            steppedValue = Math.round(newValue * 100) / 100;
        }
        newValue = Math.max(this.min, Math.min(this.max, steppedValue));
        this.value = newValue;
        this.angle = angle;
    }
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = ((angleInDegrees - 90) * Math.PI) / 180.0;
        return {
            x: centerX + radius * Math.cos(angleInRadians),
            y: centerY + radius * Math.sin(angleInRadians),
        };
    }
    describeArc(centerX, centerY, radius, startAngle, endAngle) {
        const start = this.polarToCartesian(centerX, centerY, radius, endAngle);
        const end = this.polarToCartesian(centerX, centerY, radius, startAngle);
        const lgArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        return `M ${start.x} ${start.y} A ${radius} ${radius} 0 ${lgArcFlag} 0 ${end.x} ${end.y}`;
    }
    componentDidLoad() {
        if (this.knobRef) {
            this.knobRef.addEventListener('wheel', this.handleWheel, { passive: false });
        }
    }
    disconnectedCallback() {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        if (this.knobRef) {
            this.knobRef.removeEventListener('wheel', this.handleWheel);
        }
    }
    startEditing = () => {
        if (this.allowInput && !this.disabled && !this.readonly) {
            this.isEditing = true;
        }
    };
    handleInputBlur = (e) => {
        const input = e.target;
        const val = parseFloat(input.value);
        if (!isNaN(val)) {
            let clamped = Math.max(this.min, Math.min(this.max, val));
            if (clamped !== this.value) {
                this.value = clamped;
                this.knobChange.emit(this.value);
            }
        }
        this.isEditing = false;
    };
    handleInputChange = (e) => {
        const val = parseFloat(e.target.value);
        if (!isNaN(val)) {
            let clamped = Math.max(this.min, Math.min(this.max, val));
            this.value = clamped;
            this.knobChange.emit(this.value);
        }
        this.isEditing = false;
    };
    handleInputKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.target.blur();
        }
    };
    render() {
        const center = this.size / 2;
        const radius = (this.size - this.strokeWidth) / 2;
        const trackPath = this.describeArc(center, center, radius, this.startAngle, this.endAngle);
        const valuePath = this.describeArc(center, center, radius, this.startAngle, this.angle);
        const knobClasses = {
            'knob-container': true,
            'disabled': this.disabled,
            'readonly': this.readonly,
            'dragging': this.isDragging,
        };
        return (h("div", { key: '1f7d0dbe9a1ba355b03c809bbcfcf41f8e7f4908', class: "knob-wrapper" }, h("div", { key: '6db0b4bf73beef4a8762a6ab4ace921849a625a9', class: knobClasses, ref: (el) => (this.knobRef = el), style: { width: `${this.size}px`, height: `${this.size}px` }, onMouseDown: this.handleMouseDown, onTouchStart: this.handleTouchStart, onTouchMove: this.handleTouchMove, onTouchEnd: this.handleTouchEnd, onKeyDown: this.handleKeyDown, tabIndex: this.disabled || this.readonly ? -1 : 0, role: "slider", "aria-valuemin": this.min, "aria-valuemax": this.max, "aria-valuenow": this.value, "aria-disabled": this.disabled, "aria-readonly": this.readonly }, h("svg", { key: 'b2cc5cb4755f3bf0ad12e1d248332813bd371b3c', width: this.size, height: this.size, class: "knob-svg" }, (() => {
            const isGradientProp = typeof this.color === 'object' && this.color !== null;
            const hasGradient = this.gradient || isGradientProp;
            if (!hasGradient)
                return null;
            const fromColor = isGradientProp ? (this.color['from'] || (typeof this.color === 'string' ? this.color : '#3bf673')) : (typeof this.color === 'string' ? this.color : '#3bf673');
            const toColor = isGradientProp ? (this.color['to'] || '#10b981') : '#10b981';
            return (h("defs", null, h("linearGradient", { id: this.gradientId, x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, h("stop", { offset: "0%", "stop-color": fromColor }), h("stop", { offset: "100%", "stop-color": toColor }))));
        })(), h("path", { key: 'c55188f1c67342a3813960c4cfd0427b65338308', d: trackPath, fill: "none", stroke: this.trackColor, "stroke-width": this.strokeWidth, "stroke-linecap": "round" }), this.showTicks && (() => {
            const total = Math.max(2, this.tickCount);
            const ticks = [];
            const totalAngle = this.endAngle - this.startAngle;
            for (let i = 0; i <= total; i++) {
                const a = this.startAngle + (totalAngle * i) / total;
                const inner = this.polarToCartesian(center, center, radius * (1 - this.tickLength), a);
                const outer = this.polarToCartesian(center, center, radius, a);
                const isMajor = i % Math.max(1, Math.floor(total / 5)) === 0;
                ticks.push(h("line", { x1: inner.x, y1: inner.y, x2: outer.x, y2: outer.y, stroke: this.tickColor, "stroke-width": isMajor ? this.strokeWidth / 2 : this.strokeWidth / 3, "stroke-linecap": "round" }));
            }
            return ticks;
        })(), this.showLabels && (() => {
            const labels = [];
            const count = 5; // Fixed number of main labels
            const totalAngle = this.endAngle - this.startAngle;
            const labelRadius = radius - 25; // Push inside track
            for (let i = 0; i <= count; i++) {
                const pct = i / count;
                const val = this.min + (this.max - this.min) * pct;
                const a = this.startAngle + (totalAngle * pct);
                const pos = this.polarToCartesian(center, center, labelRadius, a);
                labels.push(h("text", { x: pos.x, y: pos.y, "text-anchor": "middle", "dominant-baseline": "middle", class: "scale-label", fill: "#64748b", "font-size": "10px" }, Math.round(val)));
            }
            return labels;
        })(), h("path", { key: 'de24763cf753ca6dbb0451ea3552a2df7fa26b08', d: valuePath, fill: "none", stroke: (() => {
                const isGradientProp = typeof this.color === 'object' && this.color !== null;
                return (this.gradient || isGradientProp) ? `url(#${this.gradientId})` : this.color;
            })(), "stroke-width": this.strokeWidth, "stroke-linecap": "round", class: "value-arc" }), h("circle", { key: '3f0bba24738381e1be1bb06284d22af9c732a8be', cx: center, cy: center, r: this.strokeWidth / 2, fill: (() => {
                const isGradientProp = typeof this.color === 'object' && this.color !== null;
                return (this.gradient || isGradientProp) ? `url(#${this.gradientId})` : this.color;
            })(), class: "center-dot" }), (() => {
            const indicatorStart = this.polarToCartesian(center, center, radius * 0.3, this.angle);
            const indicatorEnd = this.polarToCartesian(center, center, radius * 0.85, this.angle);
            return (h("line", { x1: indicatorStart.x, y1: indicatorStart.y, x2: indicatorEnd.x, y2: indicatorEnd.y, stroke: (() => {
                    const isGradientProp = typeof this.color === 'object' && this.color !== null;
                    return (this.gradient || isGradientProp) ? `url(#${this.gradientId})` : this.color;
                })(), "stroke-width": this.strokeWidth / 2, "stroke-linecap": "round", class: "indicator" }));
        })()), h("div", { key: '6cc71ee2d411ec36b5faedfe9818c0d6e4ca34ec', class: "value-label", onDblClick: this.startEditing }, this.isEditing ? (h("ui-input", { type: "number", value: this.value.toString(), onInputBlur: this.handleInputBlur, onInputChange: (e) => this.handleInputChange(e), onInputKeydown: (e) => this.handleInputKeyDown(e.detail), autoFocus: true, customClass: "knob-input", variant: "plain", size: "sm" })) : (this.showValue ? (h("span", null, h("span", { class: "value-number" }, this.value), this.valueSuffix && h("span", { class: "value-suffix" }, this.valueSuffix))) : (h("slot", null))))), this.showMinMax && (h("div", { key: '6e7327c12d9cd9cba02822c8bc8bf9ffcc421c5c', class: "min-max-labels" }, h("span", { key: 'bb01be7b35e752c30a9f19d62c5b31fe5b354292', class: "min-label" }, this.min, this.valueSuffix), h("span", { key: '23aa1769d555a0b4aa4ac1b0dd2e90f4be599a2e', class: "max-label" }, this.max, this.valueSuffix)))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }],
        "color": [{
                "colorChanged": 0
            }],
        "tickCount": [{
                "propsChanged": 0
            }],
        "tickLength": [{
                "propsChanged": 0
            }],
        "showTicks": [{
                "propsChanged": 0
            }]
    }; }
};
Knob.style = knobCss();

export { Knob as ui_knob };
