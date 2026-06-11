import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const speedometerCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.speedometer-container{position:relative;display:inline-flex;flex-direction:column;align-items:center;justify-content:center;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif}.speedometer-svg{display:block}.value-arc{transition:stroke 0.3s ease;filter:drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1))}.needle{transition:transform 0.3s ease;filter:drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))}.tick-label{font-size:11px;fill:var(--text-muted, #6b7280);font-weight:500}.value-display{position:absolute;bottom:var(--value-bottom, 8px);left:50%;transform:translateX(-50%);text-align:center;pointer-events:none}.value-number-svg{font-size:32px;font-weight:700;fill:var(--text-primary, #1f2937);transition:fill 0.3s ease}.value-unit-svg{font-size:18px;font-weight:500;fill:var(--text-muted, #6b7280)}.value-label-svg{font-size:13px;fill:var(--text-muted, #6b7280);font-weight:500;text-transform:uppercase;letter-spacing:0.5px}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.8}}.speedometer-container:hover .value-arc{filter:drop-shadow(0 4px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3))}`;

const Speedometer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChange = createEvent(this, "valueChange");
    }
    get hostElement() { return getElement(this); }
    /**
     * Current value to display
     */
    value = 0;
    /**
     * Secondary value (optional) for comparison, displays as a ghost needle
     */
    secondaryValue;
    /**
     * Minimum value
     */
    minValue = 0;
    /**
     * Maximum value
     */
    maxValue = 100;
    /**
     * Size of the speedometer in pixels
     */
    size = 200;
    /**
     * Label text displayed below the value
     */
    label = '';
    /**
     * Unit text (e.g., 'km/h', 'mph', '%')
     */
    unit = '';
    /**
     * Show percentage instead of actual value
     */
    showPercentage = false;
    /**
     * Color ranges as JSON string: [{ min, max, color }]
     */
    ranges = '[]';
    /**
     * Needle color
     */
    needleColor = '#1f2937';
    /**
     * Show tick marks
     */
    showTicks = true;
    /**
     * Number of major ticks
     */
    tickCount = 10;
    /**
     * Animation duration in milliseconds
     */
    animationDuration = 1000;
    /**
     * Start angle in degrees (default -135 for 270° arc)
     */
    startAngle = -135;
    /**
     * End angle in degrees (default 135 for 270° arc)
     */
    endAngle = 135;
    /**
     * Needle shape: 'triangle', 'arrow', 'line'
     */
    needleShape = 'triangle';
    /**
     * Custom text labels mapping (value -> label). JSON string.
     * Example: "{0: 'Low', 50: 'Med', 100: 'High'}"
     */
    customLabels = '';
    /**
     * Gradient colors for the arc
     */
    gradientColors = '';
    /**
     * Enable interactive mode (drag needle to set value)
     */
    interactive = false;
    /**
     * Emitted when the value changes in interactive mode
     */
    valueChange;
    parsedLabels = {};
    animatedValue = 0;
    parsedRanges = [];
    parsedGradients = [];
    gradientId = `speedometer-grad-${Math.floor(Math.random() * 1000000)}`;
    animationFrame;
    animationStartTime;
    animationStartValue;
    isDragging = false;
    rect;
    handleValueChange(newValue) {
        this.animateToValue(newValue);
    }
    handleRangesChange(newValue) {
        this.parseRanges(newValue);
    }
    handleLabelsChange(newValue) {
        this.parseLabels(newValue);
    }
    handleGradientChange(newValue) {
        this.parseGradients(newValue);
    }
    parseLabels(json) {
        if (!json) {
            this.parsedLabels = {};
            return;
        }
        try {
            this.parsedLabels = JSON.parse(json);
        }
        catch (e) {
            console.error('Invalid customLabels JSON', e);
        }
    }
    componentWillLoad() {
        this.parseRanges(this.ranges);
        this.parseLabels(this.customLabels);
        this.parseGradients(this.gradientColors);
        this.animatedValue = this.value;
    }
    componentDidLoad() {
        this.animateToValue(this.value);
    }
    disconnectedCallback() {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
    }
    parseRanges(rangesString) {
        if (!rangesString) {
            this.parsedRanges = [];
            return;
        }
        try {
            this.parsedRanges = JSON.parse(rangesString);
        }
        catch (error) {
            console.error('Invalid JSON for speedometer ranges:', error);
            this.parsedRanges = [];
        }
    }
    parseGradients(gradString) {
        if (!gradString) {
            this.parsedGradients = [];
            return;
        }
        try {
            this.parsedGradients = JSON.parse(gradString);
        }
        catch (e) {
            // Allow comma-separated colors
            this.parsedGradients = gradString.split(',').map(s => s.trim());
        }
    }
    animateToValue(targetValue) {
        if (this.animationFrame) {
            cancelAnimationFrame(this.animationFrame);
        }
        this.animationStartTime = performance.now();
        this.animationStartValue = this.animatedValue;
        const animate = (currentTime) => {
            const elapsed = currentTime - this.animationStartTime;
            const progress = Math.min(elapsed / this.animationDuration, 1);
            // Easing function (ease-out-cubic)
            const eased = 1 - Math.pow(1 - progress, 3);
            this.animatedValue = this.animationStartValue + (targetValue - this.animationStartValue) * eased;
            if (progress < 1) {
                this.animationFrame = requestAnimationFrame(animate);
            }
            else {
                this.animatedValue = targetValue;
            }
        };
        this.animationFrame = requestAnimationFrame(animate);
    }
    async exportImage(filename = 'speedometer', format = 'png') {
        const svg = this.hostElement.shadowRoot.querySelector('svg');
        if (!svg)
            return;
        if (format === 'svg') {
            const svgData = new XMLSerializer().serializeToString(svg);
            const blob = new Blob([svgData], { type: 'image/svg+xml;charset=utf-8' });
            const url = URL.createObjectURL(blob);
            this.downloadFile(url, `${filename}.svg`);
        }
        else {
            // PNG Export via Canvas
            const svgData = new XMLSerializer().serializeToString(svg);
            const canvas = document.createElement('canvas');
            canvas.width = this.size;
            canvas.height = this.size;
            const ctx = canvas.getContext('2d');
            const img = new Image();
            img.onload = () => {
                ctx.drawImage(img, 0, 0);
                const url = canvas.toDataURL('image/png');
                this.downloadFile(url, `${filename}.png`);
            };
            img.src = 'data:image/svg+xml;base64,' + btoa(unescape(encodeURIComponent(svgData)));
        }
    }
    downloadFile(url, filename) {
        const a = document.createElement('a');
        a.href = url;
        a.download = filename;
        document.body.appendChild(a);
        a.click();
        document.body.removeChild(a);
    }
    handleMouseDown = (e) => {
        if (!this.interactive)
            return;
        this.isDragging = true;
        this.rect = this.hostElement.shadowRoot.querySelector('.speedometer-container').getBoundingClientRect();
        this.updateValueFromEvent(e);
        window.addEventListener('mousemove', this.handleMouseMove);
        window.addEventListener('mouseup', this.handleMouseUp);
    };
    handleMouseMove = (e) => {
        if (!this.isDragging)
            return;
        e.preventDefault();
        this.updateValueFromEvent(e);
    };
    handleMouseUp = () => {
        this.isDragging = false;
        window.removeEventListener('mousemove', this.handleMouseMove);
        window.removeEventListener('mouseup', this.handleMouseUp);
    };
    updateValueFromEvent(e) {
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        const centerX = this.rect.left + this.rect.width / 2;
        const centerY = this.rect.top + this.rect.height / 2;
        // Relative to center
        const dx = clientX - centerX;
        const dy = clientY - centerY;
        // Standardize to [0...360) where 0 is Right (atan2 standard)
        let angle = Math.atan2(dy, dx) * (180 / Math.PI);
        angle = (angle + 360) % 360;
        // Map to Gauge logic: Gauge 0 (value=0) is at startAngle relative to Gauge Center (Top= -90 from atan2)
        // Our start/end angles are relative to TOP (0 at Top).
        // atan2 0 is RIGHT. Gauge TOP is -90 in atan2 space.
        // Convert atan2 angle (0 at Right) to Gauge angle (0 at Top)
        let gaugeAngle = (angle + 90) % 360;
        // Normalized gaugeAngle now has 0 at Top.
        // Map gaugeAngle to be relative to startAngle
        // Handle the wrap-around based on start/end
        const normStart = (this.startAngle + 360) % 360;
        const totalArc = this.endAngle - this.startAngle;
        let relativeAngle = (gaugeAngle - normStart + 360) % 360;
        // If relativeAngle > totalArc, it's in the "dead zone" / gap at the bottom
        if (relativeAngle > totalArc) {
            // Find if closer to start or end
            if (relativeAngle > totalArc + (360 - totalArc) / 2) {
                relativeAngle = 0; // Closer to start
            }
            else {
                relativeAngle = totalArc; // Closer to end
            }
        }
        let logicalAngle = this.startAngle + relativeAngle;
        // Clamp to formal range
        logicalAngle = Math.max(this.startAngle, Math.min(this.endAngle, logicalAngle));
        // Map Angle back to Value
        const totalUsable = this.endAngle - this.startAngle;
        const percent = (logicalAngle - this.startAngle) / totalUsable;
        const newValue = this.minValue + (this.maxValue - this.minValue) * percent;
        const rounded = Math.round(newValue * 2) / 2; // 0.5 step for precision
        if (rounded !== this.value) {
            this.value = rounded;
            this.valueChange.emit(this.value);
        }
    }
    getColorForValue(value) {
        if (this.parsedRanges.length === 0) {
            return 'var(--primary-color)'; // Default theme-based color
        }
        const range = this.parsedRanges.find(r => value >= r.min && value <= r.max);
        return range ? range.color : this.parsedRanges[0].color;
    }
    valueToAngle(value) {
        const percentage = (value - this.minValue) / (this.maxValue - this.minValue);
        const totalAngle = this.endAngle - this.startAngle;
        return this.startAngle + totalAngle * percentage;
    }
    polarToCartesian(centerX, centerY, radius, angleInDegrees) {
        const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
        return {
            x: centerX + (radius * Math.cos(angleInRadians)),
            y: centerY + (radius * Math.sin(angleInRadians))
        };
    }
    createArc(centerX, centerY, radius, startAngle, endAngle) {
        const start = this.polarToCartesian(centerX, centerY, radius, endAngle);
        const end = this.polarToCartesian(centerX, centerY, radius, startAngle);
        const lgArcFlag = endAngle - startAngle <= 180 ? '0' : '1';
        return [
            'M', start.x, start.y,
            'A', radius, radius, 0, lgArcFlag, 0, end.x, end.y
        ].join(' ');
    }
    renderArc() {
        const center = this.size / 2;
        const radius = (this.size / 2) - 30;
        const strokeWidth = 20;
        // Background arc
        const backgroundPath = this.createArc(center, center, radius, this.startAngle, this.endAngle);
        // Value arc (colored based on ranges or gradient)
        const currentAngle = this.valueToAngle(this.animatedValue);
        const valuePath = this.createArc(center, center, radius, this.startAngle, currentAngle);
        let strokeColor = this.getColorForValue(this.animatedValue);
        if (this.parsedGradients.length > 1) {
            strokeColor = `url(#${this.gradientId})`;
        }
        return (h("g", null, h("defs", null, this.parsedGradients.length > 1 && (h("linearGradient", { id: this.gradientId, x1: "0%", y1: "0%", x2: "100%", y2: "0%" }, this.parsedGradients.map((color, index) => (h("stop", { offset: `${(index / (this.parsedGradients.length - 1)) * 100}%`, "stop-color": color })))))), h("path", { d: backgroundPath, fill: "none", stroke: "#e5e7eb", "stroke-width": strokeWidth, "stroke-linecap": "round" }), this.parsedRanges.length > 0 ? (this.parsedRanges.map(range => {
            const rangeStartAngle = this.valueToAngle(range.min);
            const rangeEndAngle = this.valueToAngle(range.max);
            const rangePath = this.createArc(center, center, radius, rangeStartAngle, rangeEndAngle);
            return (h("path", { d: rangePath, fill: "none", stroke: range.color, "stroke-width": strokeWidth, "stroke-linecap": "round", opacity: "0.3" }));
        })) : null, h("path", { d: valuePath, fill: "none", stroke: strokeColor, "stroke-width": strokeWidth, "stroke-linecap": "round", class: "value-arc" })));
    }
    renderTicks() {
        if (!this.showTicks)
            return null;
        const center = this.size / 2;
        const outerRadius = (this.size / 2) - 20;
        const innerRadius = outerRadius - 10;
        const ticks = [];
        for (let i = 0; i <= this.tickCount; i++) {
            const percentage = i / this.tickCount;
            const angle = this.startAngle + (this.endAngle - this.startAngle) * percentage;
            const outer = this.polarToCartesian(center, center, outerRadius, angle);
            const inner = this.polarToCartesian(center, center, innerRadius, angle);
            ticks.push(h("line", { x1: outer.x, y1: outer.y, x2: inner.x, y2: inner.y, stroke: "#9ca3af", "stroke-width": "2", "stroke-linecap": "round" }));
            // Add labels for major ticks
            if (i % 2 === 0) {
                const labelRadius = innerRadius - 15;
                const labelPos = this.polarToCartesian(center, center, labelRadius, angle);
                const tickValue = this.minValue + (this.maxValue - this.minValue) * percentage;
                const displayValue = Math.round(tickValue);
                ticks.push(h("text", { x: labelPos.x, y: labelPos.y, "text-anchor": "middle", "dominant-baseline": "middle", class: "tick-label" }, this.parsedLabels[tickValue] !== undefined ? this.parsedLabels[tickValue] : displayValue));
            }
        }
        return h("g", null, ticks);
    }
    renderNeedle(value, color, isSecondary = false) {
        const center = this.size / 2;
        const needleLength = (this.size / 2) - 40;
        const needleWidth = isSecondary ? 2 : 4;
        const angle = this.valueToAngle(value);
        const tip = this.polarToCartesian(center, center, needleLength, angle);
        // Create needle shape
        const angleRad = (angle - 90) * Math.PI / 180;
        const perpAngle1 = angleRad + Math.PI / 2;
        const perpAngle2 = angleRad - Math.PI / 2;
        const base1 = {
            x: center + needleWidth * Math.cos(perpAngle1),
            y: center + needleWidth * Math.sin(perpAngle1)
        };
        const base2 = {
            x: center + needleWidth * Math.cos(perpAngle2),
            y: center + needleWidth * Math.sin(perpAngle2)
        };
        let needlePath = '';
        if (this.needleShape === 'line' || isSecondary) {
            needlePath = `M ${base1.x} ${base1.y} L ${tip.x} ${tip.y}`;
        }
        else if (this.needleShape === 'arrow') {
            const mid = this.polarToCartesian(center, center, needleLength * 0.7, angle);
            needlePath = `M ${base1.x} ${base1.y} L ${mid.x} ${mid.y} L ${tip.x} ${tip.y} L ${mid.x} ${mid.y} L ${base2.x} ${base2.y} Z`;
        }
        else {
            needlePath = `M ${base1.x} ${base1.y} L ${tip.x} ${tip.y} L ${base2.x} ${base2.y} Z`;
        }
        return (h("g", { class: isSecondary ? 'needle-secondary' : 'needle-primary', style: { opacity: isSecondary ? '0.6' : '1' } }, h("path", { d: needlePath, fill: color, class: "needle" }), h("circle", { cx: center, cy: center, r: isSecondary ? 4 : 8, fill: color }), !isSecondary && (h("circle", { cx: center, cy: center, r: "4", fill: "#fff" }))));
    }
    renderValue() {
        const displayValue = this.showPercentage
            ? Math.round(((this.animatedValue - this.minValue) / (this.maxValue - this.minValue)) * 100)
            : Math.round(this.animatedValue * 10) / 10;
        const displayUnit = this.showPercentage ? '%' : this.unit;
        const center = this.size / 2;
        const valueY = this.size - Math.max(15, Math.round(this.size * 0.1));
        return (h("g", { class: "value-group", style: { fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif' } }, h("text", { x: center, y: valueY, "text-anchor": "middle", class: "value-number-svg", fill: "currentColor", "font-weight": "700" }, displayValue, displayUnit && h("tspan", { class: "value-unit-svg", "font-size": "0.6em", dx: "4", "font-weight": "500" }, displayUnit)), this.label && (h("text", { x: center, y: valueY + 20, "text-anchor": "middle", class: "value-label-svg", fill: "#9ca3af", "font-size": "12", "font-weight": "500", style: { textTransform: 'uppercase', letterSpacing: '0.5px' } }, this.label))));
    }
    render() {
        return (h("div", { key: '570b60c58715ce7a233153441a669a866e4df90a', class: {
                'speedometer-container': true,
                'interactive': this.interactive,
                'is-dragging': this.isDragging
            }, onMouseDown: this.handleMouseDown, style: {
                width: `${this.size}px`,
                height: `${this.size}px`,
                cursor: this.interactive ? (this.isDragging ? 'grabbing' : 'grab') : 'default'
            } }, h("svg", { key: 'a05ee4e7e85418f36e106209ec363f84071ff58f', width: this.size, height: this.size, viewBox: `0 0 ${this.size} ${this.size}`, class: "speedometer-svg" }, this.renderArc(), this.renderTicks(), this.secondaryValue !== undefined && this.renderNeedle(this.secondaryValue, '#9ca3af', true), this.renderNeedle(this.animatedValue, this.needleColor), this.renderValue())));
    }
    static get watchers() { return {
        "value": [{
                "handleValueChange": 0
            }],
        "ranges": [{
                "handleRangesChange": 0
            }],
        "customLabels": [{
                "handleLabelsChange": 0
            }],
        "gradientColors": [{
                "handleGradientChange": 0
            }]
    }; }
};
Speedometer.style = speedometerCss();

export { Speedometer as ui_speedometer };
