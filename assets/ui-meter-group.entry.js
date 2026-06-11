import { r as registerInstance, c as createEvent, h } from './index-DUsoYu9r.js';

const meterGroupCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.meter-group{display:flex;flex-direction:column;gap:12px;font-family:inherit}.meter-container{display:flex;border-radius:8px;overflow:hidden;background-color:var(--bg-primary, #e5e7eb)}.meter-horizontal .meter-container{flex-direction:row;width:100%}.meter-horizontal.meter-sm .meter-container{height:16px}.meter-horizontal.meter-md .meter-container{height:24px}.meter-horizontal.meter-lg .meter-container{height:32px}.meter-vertical{flex-direction:row}.meter-vertical .meter-container{flex-direction:column-reverse;height:200px}.meter-vertical.meter-sm .meter-container{width:16px}.meter-vertical.meter-md .meter-container{width:24px}.meter-vertical.meter-lg .meter-container{width:32px}.meter-segment{display:flex;align-items:center;justify-content:center;transition:all 0.3s ease;position:relative}.meter-segment:hover{filter:brightness(1.1)}.meter-value{color:var(--text-standard, #ffffff);font-size:11px;font-weight:600;text-shadow:0 1px 2px rgba(0, 0, 0, 0.3);white-space:nowrap}.meter-horizontal .meter-segment:first-child{border-top-left-radius:8px;border-bottom-left-radius:8px}.meter-horizontal .meter-segment:last-child{border-top-right-radius:8px;border-bottom-right-radius:8px}.meter-vertical .meter-segment:first-child{border-bottom-left-radius:8px;border-bottom-right-radius:8px}.meter-vertical .meter-segment:last-child{border-top-left-radius:8px;border-top-right-radius:8px}.meter-legend{display:flex;flex-wrap:wrap;gap:12px}.legend-item{display:flex;align-items:center;gap:6px;font-size:13px}.legend-color{width:12px;height:12px;border-radius:2px;flex-shrink:0}.legend-label{color:var(--text-secondary, #374151);font-weight:500}.legend-value{color:var(--text-muted, #6b7280);font-size:12px}.meter-circle-container{display:flex;justify-content:center;align-items:center}.meter-circle{width:100%;max-width:200px;height:auto}.meter-circle.meter-sm{max-width:120px}.meter-circle.meter-lg{max-width:280px}.circle-total-value{font-size:20px;font-weight:600;fill:var(--text-secondary, #374151)}.meter-sm .circle-total-value{font-size:14px}.meter-lg .circle-total-value{font-size:26px}`;

const MeterGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.meterClick = createEvent(this, "meterClick");
    }
    /**
     * Array of meter values
     */
    values = [];
    /**
     * Orientation of the meter
     */
    orientation = 'horizontal';
    /**
     * Height/thickness of the meter
     */
    size = 'md';
    /**
     * Show labels
     */
    showLabels = true;
    /**
     * Default library for icons
     */
    iconLibrary = 'default';
    /**
     * Show values
     */
    showValues = true;
    /**
     * Show legend
     */
    showLegend = false;
    /**
     * Shape of the meter
     */
    shape = 'line';
    /**
     * Minimum value
     */
    min = 0;
    /**
     * Maximum value
     */
    max = 100;
    /**
     * Interactive mode (clickable segments/legend)
     */
    interactive = false;
    /**
     * Enable animations for value changes
     */
    animated = true;
    /**
     * Emitted when a meter segment or legend item is clicked
     */
    meterClick;
    handleValuesChange() {
        this.normalizeProps();
    }
    componentWillLoad() {
        this.normalizeProps();
    }
    normalizeProps() {
        if (typeof this.values === 'string') {
            try {
                this.values = JSON.parse(this.values);
            }
            catch (e) {
                console.warn('Failed to parse meter-group values', e);
            }
        }
    }
    getValues() {
        return Array.isArray(this.values) ? this.values : [];
    }
    getPercentage(value) {
        const range = this.max - this.min;
        return ((value - this.min) / range) * 100;
    }
    getDefaultColor(index) {
        const colors = ['#3bf673', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899'];
        return colors[index % colors.length];
    }
    handleSegmentClick(item) {
        if (this.interactive) {
            this.meterClick.emit(item);
        }
    }
    renderCircleMeter() {
        const values = this.getValues();
        const total = values.reduce((sum, item) => sum + item.value, 0);
        const radius = 50;
        const circumference = 2 * Math.PI * radius;
        let currentOffset = 0;
        const segments = values.map((item, index) => {
            const percentage = (item.value / total) * 100;
            const strokeDasharray = (percentage / 100) * circumference;
            const strokeDashoffset = -currentOffset;
            const isColorObject = typeof item.color === 'object' && item.color !== null;
            const color = isColorObject ? item.color.from : (item.color || this.getDefaultColor(index));
            const gradientId = `meter-grad-${index}-${Math.random().toString(36).substr(2, 4)}`;
            const hasGradient = item.gradient || isColorObject;
            currentOffset += strokeDasharray;
            return {
                ...item,
                color,
                gradientId,
                strokeDasharray: `${strokeDasharray} ${circumference}`,
                strokeDashoffset,
                percentage: percentage.toFixed(1),
                hasGradient
            };
        });
        const strokeWidth = this.size === 'sm' ? 8 : this.size === 'lg' ? 16 : 12;
        return (h("div", { class: "meter-circle-container" }, h("svg", { viewBox: "0 0 120 120", class: "meter-circle" }, h("circle", { cx: "60", cy: "60", r: radius, fill: "none", stroke: "#e5e7eb", "stroke-width": strokeWidth }), h("defs", null, segments.map((segment) => {
            const isColorObject = typeof segment.color === 'object' && segment.color !== null;
            if (!segment.gradient && !isColorObject)
                return null;
            const from = isColorObject ? segment.color.from : (typeof segment.gradient === 'object' ? segment.gradient.from : segment.color);
            const to = isColorObject ? segment.color.to : (typeof segment.gradient === 'object' ? segment.gradient.to : `${segment.color}99`);
            return (h("linearGradient", { id: segment.gradientId, x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, h("stop", { offset: "0%", "stop-color": from }), h("stop", { offset: "100%", "stop-color": to })));
        })), segments.map((segment) => (h("g", { onClick: () => this.handleSegmentClick(segment), style: { cursor: this.interactive ? 'pointer' : 'default' } }, h("title", null, `${segment.label}: ${segment.value}`), h("circle", { cx: "60", cy: "60", r: radius, fill: "none", stroke: (segment.gradient || (typeof segment.color === 'object' && segment.color !== null)) ? `url(#${segment.gradientId})` : segment.color, "stroke-width": strokeWidth, "stroke-dasharray": segment.strokeDasharray, "stroke-dashoffset": segment.strokeDashoffset, "stroke-linecap": "round", transform: "rotate(-90 60 60)", style: {
                transition: this.animated ? 'stroke-dasharray 0.5s ease, stroke-dashoffset 0.5s ease' : 'none'
            } })))), this.showValues && (h("text", { x: "60", y: "60", "text-anchor": "middle", "dominant-baseline": "middle", class: "circle-total-value" }, total)))));
    }
    render() {
        const values = this.getValues();
        const total = values.reduce((sum, item) => sum + item.value, 0);
        const containerClasses = [
            'meter-group',
            `meter-${this.orientation}`,
            `meter-${this.size}`,
            `meter-${this.shape}`,
        ].join(' ');
        return (h("div", { key: '3cf1fdd83af37d9f8f7f82e0caa61f889303aa45', class: containerClasses }, this.shape === 'circle' ? (this.renderCircleMeter()) : (h("div", { class: "meter-container" }, values.map((item, index) => {
            const percentage = this.getPercentage(item.value);
            const color = item.color || this.getDefaultColor(index);
            return (h("div", { class: "meter-segment", style: {
                    [this.orientation === 'horizontal' ? 'width' : 'height']: `${percentage}%`,
                    background: (() => {
                        const isColorObject = typeof item.color === 'object' && item.color !== null;
                        if (item.gradient || isColorObject) {
                            const from = isColorObject ? item.color.from : (typeof item.gradient === 'object' ? item.gradient.from : color);
                            const to = isColorObject ? item.color.to : (typeof item.gradient === 'object' ? item.gradient.to : color + '99');
                            return `linear-gradient(${this.orientation === 'horizontal' ? 'to right' : 'to top'}, ${from}, ${to})`;
                        }
                        return color;
                    })(),
                    cursor: this.interactive ? 'pointer' : 'default',
                    transition: this.animated ? 'width 0.5s ease, height 0.5s ease' : 'none',
                }, title: `${item.label}: ${item.value}`, onClick: () => this.handleSegmentClick(item) }, this.showValues && (h("span", { class: "meter-value" }, item.value))));
        }))), (this.showLabels || this.showLegend) && (h("div", { key: '646404cbc3ac39fcf2956d292bd34d5c68162ff6', class: "meter-legend" }, values.map((item, index) => {
            const color = item.color || this.getDefaultColor(index);
            const percentage = ((item.value / total) * 100).toFixed(1);
            return (h("div", { class: "legend-item", onClick: () => this.handleSegmentClick(item), style: { cursor: this.interactive ? 'pointer' : 'default' } }, h("span", { class: "legend-color", style: { backgroundColor: typeof color === 'object' && color !== null ? color.from : color } }), item.icon && (h("span", { class: "legend-icon", style: { marginRight: '6px' } }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.1em" }))), h("span", { class: "legend-label" }, item.label), this.showValues && (h("span", { class: "legend-value" }, item.value, " (", percentage, "%)"))));
        })))));
    }
    static get watchers() { return {
        "values": [{
                "handleValuesChange": 0
            }]
    }; }
};
MeterGroup.style = meterGroupCss();

export { MeterGroup as ui_meter_group };
