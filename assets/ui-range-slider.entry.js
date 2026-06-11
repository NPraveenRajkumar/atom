import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const rangeSliderCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif}.slider-label{font-size:13px;font-weight:600;color:var(--label-color, var(--text-secondary, #374151));margin-bottom:10px;letter-spacing:0.01em}.slider-minmax-labels{display:flex;justify-content:space-between;font-size:11px;color:var(--label-subtitle-color, var(--text-muted, #9ca3af));margin-bottom:8px;padding:0;width:100%;pointer-events:none}.slider-input{width:64px;padding:4px 8px;border:1.5px solid var(--border-strong, #d1d5db);border-radius:6px;font-size:13px;font-weight:500;color:var(--text-secondary, #374151);text-align:center;outline:none;transition:border-color 0.2s;background:var(--bg-primary, #ffffff);-moz-appearance:textfield;appearance:textfield}.slider-input::-webkit-inner-spin-button,.slider-input::-webkit-outer-spin-button{opacity:1}.slider-input:focus{border-color:var(--color-primary, #10b981);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.15)}.slider-input-row{display:flex;align-items:center;gap:8px;margin-top:10px;justify-content:center}.slider-input-sep{color:var(--text-muted, #9ca3af);font-size:14px;font-weight:600}.slider-container{display:flex;align-items:flex-start;gap:16px;width:100%;user-select:none}.slider-vertical{flex-direction:column;height:300px;width:auto;align-items:center}.slider-disabled{opacity:0.5;cursor:not-allowed;pointer-events:none}.slider-icon{display:flex;align-items:center;justify-content:center;font-size:16px;color:var(--text-muted, #6b7280);flex-shrink:0;line-height:1;height:24px}.slider-sm .slider-icon{font-size:14px;height:20px}.slider-lg .slider-icon{font-size:20px;height:28px}.slider-wrapper{flex:1;display:flex;flex-direction:column;gap:8px;position:relative;align-items:stretch;min-height:24px;padding:0 12px}.slider-sm .slider-wrapper{min-height:20px}.slider-lg .slider-wrapper{min-height:28px}.slider-vertical .slider-wrapper{flex:1;width:100%;align-items:center;justify-content:center;min-height:0}.slider-track{position:relative;width:100%;border-radius:10px;cursor:pointer;background-color:var(--bg-primary, #e5e7eb);margin:12px 0}.slider-sm .slider-track{height:4px}.slider-md .slider-track{height:6px}.slider-lg .slider-track{height:8px}.slider-vertical .slider-track{width:6px;height:100%}.slider-vertical.slider-sm .slider-track{width:4px}.slider-vertical.slider-lg .slider-track{width:8px}.slider-range{position:absolute;border-radius:10px;background-color:var(--color-primary, #10b981);pointer-events:none;transition:background-color 0.2s ease}.slider-sm .slider-range{height:4px}.slider-md .slider-range{height:6px}.slider-lg .slider-range{height:8px}.slider-vertical .slider-range{width:100%;height:auto}.slider-thumb{position:absolute;transform:translate(-50%, -50%);top:50%;border-radius:50%;background-color:var(--color-primary, #10b981);cursor:grab;box-shadow:0 2px 6px rgba(0, 0, 0, 0.15);transition:transform 0.2s cubic-bezier(0.34, 1.56, 0.64, 1), box-shadow 0.2s ease, left 0.1s ease-out, bottom 0.1s ease-out;z-index:10;border:2px solid var(--bg-primary, #ffffff)}.slider-thumb:hover{transform:translate(-50%, -50%) scale(1.15);box-shadow:0 4px 14px rgba(0, 0, 0, 0.18)}.slider-thumb-active,.slider-dragging .slider-thumb-active{cursor:grabbing;transform:translate(-50%, -50%) scale(1.2);box-shadow:0 4px 16px rgba(var(--color-primary-rgb, 59, 130, 246), 0.45);z-index:11}.slider-sm .slider-thumb{width:14px;height:14px}.slider-md .slider-thumb{width:18px;height:18px}.slider-lg .slider-thumb{width:24px;height:24px}.slider-vertical .slider-thumb{left:50%;top:auto;transform:translate(-50%, 50%)}.slider-vertical .slider-thumb:hover{transform:translate(-50%, 50%) scale(1.1)}.slider-vertical .slider-thumb-active,.slider-vertical.slider-dragging .slider-thumb-active{transform:translate(-50%, 50%) scale(1.15)}.slider-tooltip{position:absolute;bottom:calc(100% + 8px);left:50%;transform:translateX(-50%);padding:4px 8px;background-color:rgba(0, 0, 0, 0.85);color:var(--text-standard, #ffffff);font-size:12px;border-radius:4px;white-space:nowrap;pointer-events:none;opacity:0;animation:tooltipFadeIn 0.2s ease forwards}.slider-tooltip::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:4px solid transparent;border-top-color:rgba(0, 0, 0, 0.85)}.slider-vertical .slider-tooltip{bottom:auto;top:50%;left:calc(100% + 8px);transform:translateY(-50%)}.slider-vertical .slider-tooltip::after{top:50%;left:-8px;transform:translateY(-50%);border:4px solid transparent;border-right-color:rgba(0, 0, 0, 0.85);border-top-color:transparent}@keyframes tooltipFadeIn{to{opacity:1}}.slider-marks{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.slider-mark{position:absolute;transform:translateX(-50%)}.slider-vertical .slider-mark{transform:translateY(50%);left:50%}.slider-mark-dot{width:8px;height:8px;border-radius:50%;background-color:var(--bg-secondary, #d1d5db);border:2px solid var(--bg-primary, #ffffff);position:absolute;top:50%;left:50%;transform:translate(-50%, -50%)}.slider-sm .slider-mark-dot{width:6px;height:6px}.slider-lg .slider-mark-dot{width:10px;height:10px}.slider-mark-label{position:absolute;top:calc(100% + 8px);left:50%;transform:translateX(-50%);font-size:11px;color:var(--text-muted, #6b7280);white-space:nowrap}.slider-vertical .slider-mark-label{top:50%;left:calc(100% + 12px);transform:translateY(-50%)}.slider-value-display{text-align:center;font-size:13px;color:var(--text-secondary, #374151);font-weight:600;margin-top:8px;letter-spacing:0.01em}.slider-sm .slider-value-display{font-size:12px}.slider-lg .slider-value-display{font-size:14px}.slider-vertical .slider-value-display{display:none}.slider-thumb:focus{outline:none;box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.25)}.slider-track.has-restricted-values .slider-mark-dot{background-color:var(--color-primary, #10b981)}.slider-range,.slider-thumb{transition:all 0.1s ease-out}.slider-dragging .slider-range,.slider-dragging .slider-thumb{transition:none}.slider-thumb[aria-disabled=true]{cursor:not-allowed;opacity:0.5}@media (hover: none) and (pointer: coarse){.slider-thumb{width:24px;height:24px}.slider-sm .slider-thumb{width:20px;height:20px}.slider-lg .slider-thumb{width:30px;height:30px}}.variant-glass .slider-track{background:rgba(255, 255, 255, 0.1) !important;backdrop-filter:blur(8px);border:1px solid rgba(255, 255, 255, 0.2);box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.1)}.variant-glass .slider-thumb{background:rgba(255, 255, 255, 0.9);backdrop-filter:blur(4px);border:1px solid var(--bg-primary, #ffffff);box-shadow:0 8px 16px rgba(0, 0, 0, 0.2)}.variant-glass .slider-thumb:hover{background:var(--bg-primary, #ffffff) !important;transform:translate(-50%, -50%) scale(1.1)}.variant-glass .slider-range{background:linear-gradient(90deg, rgba(255, 255, 255, 0.4), rgba(255, 255, 255, 0.8))}.variant-detailed .slider-track{height:12px !important;border-radius:6px !important;background:var(--bg-secondary, #f1f5f9) !important;box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.05)}.variant-detailed .slider-track::before{content:"";position:absolute;top:0;left:0;right:0;bottom:0;background:linear-gradient(rgba(0, 0, 0, 0.02), transparent);border-radius:6px;pointer-events:none}.variant-detailed .slider-range{height:12px !important;border-radius:6px !important;box-shadow:0 4px 10px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);background-size:200% 200% !important;animation:livingTrack 3s ease infinite !important}.variant-detailed .slider-range::after{content:"";position:absolute;top:0;left:0;right:0;height:50%;background:rgba(255, 255, 255, 0.2);border-radius:6px 6px 0 0}.variant-detailed .slider-mark-active .slider-mark-dot{transform:translate(-50%, -50%) scale(1.5) !important;background:var(--dd-primary, var(--color-primary, #10b981)) !important;box-shadow:0 0 10px rgba(var(--color-primary-rgb, 59, 130, 246), 0.5) !important}.variant-detailed .slider-thumb{width:24px !important;height:24px !important;background:var(--bg-primary, #ffffff);border:2px solid var(--dd-primary, var(--color-primary, #10b981)) !important;box-shadow:0 4px 12px rgba(0, 0, 0, 0.1), 0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.variant-detailed .slider-thumb::after{content:"";position:absolute;width:4px;height:10px;background:var(--bg-primary, #e2e8f0);border-radius:2px;left:50%;top:50%;transform:translate(-50%, -50%)}.variant-detailed .slider-thumb:hover{box-shadow:0 8px 24px rgba(0, 0, 0, 0.15), 0 0 0 6px rgba(var(--color-primary-rgb, 59, 130, 246), 0.15);border-color:var(--dd-primary-strong, var(--color-primary-hover, #2563eb)) !important}.variant-detailed .slider-tooltip{background:var(--bg-primary, #1e293b) !important;border-radius:10px !important;padding:8px 12px !important;font-weight:700 !important;box-shadow:0 10px 20px rgba(0, 0, 0, 0.2) !important}.variant-detailed .slider-tooltip::after{border-top-color:var(--border-subtle, #1e293b) !important}.variant-detailed .slider-mark-dot{width:4px !important;height:12px !important;border-radius:2px !important;border:none !important;background:var(--color-primary, #cbd5e1) !important}.variant-circle .slider-track{height:8px !important;background:var(--bg-secondary, #f1f5f9) !important;border:1px solid var(--border-subtle, #e2e8f0)}.variant-circle .slider-thumb{width:28px !important;height:28px !important;background:var(--bg-primary, #ffffff);border:6px solid var(--dd-primary, var(--color-primary, #10b981)) !important;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1)}.variant-circle .slider-thumb:hover{transform:translate(-50%, -50%) scale(1.1);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1)}.variant-circle .slider-range{background:var(--dd-primary, var(--color-primary, #10b981)) !important;height:8px !important}.slider-container[dir=rtl] .slider-start-icon{order:2}.slider-container[dir=rtl] .slider-end-icon{order:0}.slider-container[dir=rtl] .slider-wrapper{order:1}.slider-container[dir=rtl] .slider-thumb{cursor:grab}@keyframes livingTrack{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}`;

const RangeSlider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.sliderChange = createEvent(this, "sliderChange");
        this.sliderDragStart = createEvent(this, "sliderDragStart");
        this.sliderDragEnd = createEvent(this, "sliderDragEnd");
    }
    get el() { return getElement(this); }
    trackElement;
    isDragging = false;
    activeThumb = null;
    internals;
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
     * Current value (single slider)
     */
    value = 50;
    /**
     * Range mode - start value
     */
    startValue = 25;
    /**
     * Range mode - end value
     */
    endValue = 75;
    /**
     * Enable range mode (two thumbs)
     */
    range = false;
    /**
     * Minimum distance between thumbs in range mode
     */
    minRange = 0;
    /**
     * Disabled state
     */
    disabled = false;
    /**
     * Show value tooltip
     */
    showTooltip = true;
    /**
     * Tooltip always visible
     */
    tooltipAlwaysVisible = false;
    /**
     * Color of the slider (string, {from: string, to: string}, or array of ranges [{min: number, max: number, color: string}])
     */
    color = '#3bf673';
    /**
     * Track color
     */
    trackColor = '#e5e7eb';
    /**
     * Size variant
     */
    size = 'md';
    /**
     * Start icon/text
     */
    startIcon = '';
    /**
     * End icon/text
     */
    endIcon = '';
    /**
     * Display format function or string
     */
    displayFormat = '';
    /**
     * Show marks
     */
    showMarks = false;
    /**
     * Custom marks
     */
    marks = [];
    /**
     * Restricted values (only allow specific values)
     */
    restrictedValues = [];
    /**
     * Vertical orientation
     */
    vertical = false;
    /**
     * Label displayed above the slider
     */
    label = '';
    /**
     * Semantic color variant or aesthetic variant
     */
    variant = '';
    /**
     * Prefix string displayed before the value (e.g. '$')
     */
    prefixText = '';
    /**
     * Suffix string displayed after the value (e.g. '%', 'px')
     */
    suffixText = '';
    /**
     * Show min and max labels at the ends of the track
     */
    showMinMax = false;
    /**
     * Show an editable number input synced to the slider value
     */
    inputSync = false;
    /**
     * Use a gradient fill for the range track
     */
    gradientTrack = false;
    /**
     * Show current value label
     */
    showValue = true;
    /**
     * Custom step marks (non-linear scaling)
     */
    customSteps = [];
    /**
     * RTL support
     */
    rtl = false;
    /**
     * Circle variant (aesthetic)
     */
    circle = false;
    /**
     * Hide the colored range track portion
     */
    hideRange = false;
    /**
     * Hover state for tooltip
     */
    isHovering = false;
    /**
     * Dragging state
     */
    isDraggingState = false;
    get resolvedColor() {
        const variantColors = {
            primary: '#3bf673',
            success: '#10b981',
            danger: '#ef4444',
            warning: '#f59e0b',
            info: '#06b6d4',
            purple: '#8b5cf6',
        };
        if (Array.isArray(this.color)) {
            const val = this.range ? this.endValue : this.value;
            const rangeRule = this.color.find(r => val >= r.min && val <= r.max);
            return rangeRule ? rangeRule.color : '#3bf673';
        }
        const baseColor = typeof this.color === 'string' ? this.color : this.color.from;
        return this.variant ? variantColors[this.variant] || baseColor : baseColor;
    }
    get resolvedGradient() {
        const variantGradients = {
            primary: 'linear-gradient(90deg, #3bf673, #6366f1)',
            success: 'linear-gradient(90deg, #10b981, #34d399)',
            danger: 'linear-gradient(90deg, #ef4444, #f97316)',
            warning: 'linear-gradient(90deg, #f59e0b, #fbbf24)',
            info: 'linear-gradient(90deg, #06b6d4, #3bf673)',
            purple: 'linear-gradient(90deg, #8b5cf6, #ec4899)',
        };
        if (Array.isArray(this.color)) {
            const val = this.range ? this.endValue : this.value;
            const rangeRule = this.color.find(r => val >= r.min && val <= r.max);
            const c = rangeRule ? rangeRule.color : '#3bf673';
            return `linear-gradient(90deg, ${c}, ${c}aa)`;
        }
        const baseColor = typeof this.color === 'string' ? this.color : this.color.from;
        if (this.variant)
            return variantGradients[this.variant] || `linear-gradient(90deg, ${baseColor}, ${baseColor})`;
        if (typeof this.color === 'object' && this.color !== null && !Array.isArray(this.color)) {
            return `linear-gradient(90deg, ${this.color.from}, ${this.color.to})`;
        }
        return `linear-gradient(90deg, ${this.color}, ${this.color}aa)`;
    }
    /**
     * Emitted when value changes
     */
    sliderChange;
    /**
     * Emitted on drag start
     */
    sliderDragStart;
    /**
     * Emitted on drag end
     */
    sliderDragEnd;
    handleColorChange() {
        this.normalizeProps();
    }
    handleMarksChange() {
        this.normalizeProps();
    }
    componentWillLoad() {
        if (typeof this.el.attachInternals === 'function') {
            this.internals = this.el.attachInternals();
        }
        this.normalizeProps();
        this.updateFormValue();
    }
    updateFormValue() {
        if (this.internals) {
            if (this.range) {
                this.internals.setFormValue(`${this.startValue},${this.endValue}`);
            }
            else {
                this.internals.setFormValue(this.value.toString());
            }
        }
    }
    normalizeProps() {
        try {
            if (typeof this.color === 'string' && (this.color.startsWith('{') || this.color.startsWith('['))) {
                this.color = JSON.parse(this.color);
            }
            if (typeof this.marks === 'string') {
                this.marks = JSON.parse(this.marks);
            }
            if (typeof this.restrictedValues === 'string') {
                this.restrictedValues = JSON.parse(this.restrictedValues);
            }
            if (typeof this.customSteps === 'string') {
                this.customSteps = JSON.parse(this.customSteps);
            }
        }
        catch (e) {
            console.warn('Failed to parse complex slider prop', e);
        }
    }
    componentDidLoad() {
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
        document.addEventListener('touchmove', this.handleTouchMove);
        document.addEventListener('touchend', this.handleTouchEnd);
    }
    disconnectedCallback() {
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
        document.removeEventListener('touchmove', this.handleTouchMove);
        document.removeEventListener('touchend', this.handleTouchEnd);
    }
    getMarks() {
        if (typeof this.marks === 'string') {
            try {
                return JSON.parse(this.marks);
            }
            catch {
                return [];
            }
        }
        return this.marks;
    }
    getRestrictedValues() {
        if (typeof this.restrictedValues === 'string') {
            try {
                return JSON.parse(this.restrictedValues);
            }
            catch {
                return [];
            }
        }
        return this.restrictedValues;
    }
    getCustomSteps() {
        if (typeof this.customSteps === 'string') {
            try {
                return JSON.parse(this.customSteps);
            }
            catch {
                return [];
            }
        }
        return this.customSteps;
    }
    getNearestValue(value) {
        const restricted = this.getRestrictedValues();
        if (restricted.length > 0) {
            // Find nearest restricted value
            return restricted.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
        }
        const customSteps = this.getCustomSteps();
        if (customSteps.length > 0) {
            // Find nearest custom step
            return customSteps.reduce((prev, curr) => Math.abs(curr - value) < Math.abs(prev - value) ? curr : prev);
        }
        // Regular step
        const steps = Math.round((value - this.min) / this.step);
        const val = this.min + steps * this.step;
        return Math.min(this.max, Math.max(this.min, val));
    }
    isRtl() {
        return this.rtl || document.dir === 'rtl' || (this.el && this.el.getAttribute('dir') === 'rtl');
    }
    getPositionFromValue(value) {
        const customSteps = this.getCustomSteps();
        if (customSteps.length > 0) {
            // Non-linear scaling based on custom steps
            const sortedSteps = [...customSteps].sort((a, b) => a - b);
            const index = sortedSteps.indexOf(value);
            if (index !== -1) {
                return (index / (sortedSteps.length - 1)) * 100;
            }
            // If value not in steps, find position between steps
            for (let i = 0; i < sortedSteps.length - 1; i++) {
                if (value >= sortedSteps[i] && value <= sortedSteps[i + 1]) {
                    const ratio = (value - sortedSteps[i]) / (sortedSteps[i + 1] - sortedSteps[i]);
                    const segmentStart = (i / (sortedSteps.length - 1)) * 100;
                    const segmentEnd = ((i + 1) / (sortedSteps.length - 1)) * 100;
                    return segmentStart + ratio * (segmentEnd - segmentStart);
                }
            }
        }
        // Linear scaling
        return ((value - this.min) / (this.max - this.min)) * 100;
    }
    getValueFromPosition(position) {
        const customSteps = this.getCustomSteps();
        if (customSteps.length > 0) {
            // Non-linear scaling
            const sortedSteps = [...customSteps].sort((a, b) => a - b);
            const index = Math.round((position / 100) * (sortedSteps.length - 1));
            return sortedSteps[Math.max(0, Math.min(index, sortedSteps.length - 1))];
        }
        // Linear scaling
        const rawValue = this.min + (position / 100) * (this.max - this.min);
        return this.getNearestValue(rawValue);
    }
    handleTrackClick = (event) => {
        if (this.disabled)
            return;
        const rect = this.trackElement.getBoundingClientRect();
        let position;
        if (this.vertical) {
            position = ((rect.bottom - event.clientY) / rect.height) * 100;
        }
        else {
            const horizontalPos = ((event.clientX - rect.left) / rect.width) * 100;
            position = this.isRtl() ? 100 - horizontalPos : horizontalPos;
        }
        const newValue = this.getValueFromPosition(Math.max(0, Math.min(100, position)));
        if (this.range) {
            const startPos = this.getPositionFromValue(this.startValue);
            const endPos = this.getPositionFromValue(this.endValue);
            const clickPos = position;
            // Determine which thumb to move
            const distToStart = Math.abs(clickPos - startPos);
            const distToEnd = Math.abs(clickPos - endPos);
            if (distToStart < distToEnd) {
                this.startValue = Math.min(newValue, this.endValue - this.minRange);
            }
            else {
                this.endValue = Math.max(newValue, this.startValue + this.minRange);
            }
            this.sliderChange.emit({ start: this.startValue, end: this.endValue });
            this.updateFormValue();
        }
        else {
            this.value = newValue;
            this.sliderChange.emit(this.value);
            this.updateFormValue();
        }
    };
    handleThumbMouseDown = (thumb) => (event) => {
        if (this.disabled)
            return;
        event.preventDefault();
        this.isDragging = true;
        this.isDraggingState = true;
        this.activeThumb = thumb;
        this.sliderDragStart.emit();
    };
    handleThumbTouchStart = (thumb) => (event) => {
        if (this.disabled)
            return;
        event.preventDefault();
        this.isDragging = true;
        this.isDraggingState = true;
        this.activeThumb = thumb;
        this.sliderDragStart.emit();
    };
    handleMouseMove = (event) => {
        if (!this.isDragging || this.disabled)
            return;
        this.updateValueFromEvent(event.clientX, event.clientY);
    };
    handleTouchMove = (event) => {
        if (!this.isDragging || this.disabled)
            return;
        const touch = event.touches[0];
        this.updateValueFromEvent(touch.clientX, touch.clientY);
    };
    updateValueFromEvent(clientX, clientY) {
        if (!this.trackElement)
            return;
        const rect = this.trackElement.getBoundingClientRect();
        let position;
        if (this.vertical) {
            position = ((rect.bottom - clientY) / rect.height) * 100;
        }
        else {
            const horizontalPos = ((clientX - rect.left) / rect.width) * 100;
            position = this.isRtl() ? 100 - horizontalPos : horizontalPos;
        }
        const newValue = this.getValueFromPosition(Math.max(0, Math.min(100, position)));
        if (this.range) {
            if (this.activeThumb === 'start') {
                this.startValue = Math.min(newValue, this.endValue - this.minRange);
            }
            else if (this.activeThumb === 'end') {
                this.endValue = Math.max(newValue, this.startValue + this.minRange);
            }
            this.sliderChange.emit({ start: this.startValue, end: this.endValue });
        }
        else {
            this.value = newValue;
            this.sliderChange.emit(this.value);
        }
        this.updateFormValue();
    }
    handleMouseUp = () => {
        if (this.isDragging) {
            this.isDragging = false;
            this.isDraggingState = false;
            this.activeThumb = null;
            this.sliderDragEnd.emit();
        }
    };
    handleTouchEnd = () => {
        if (this.isDragging) {
            this.isDragging = false;
            this.isDraggingState = false;
            this.activeThumb = null;
            this.sliderDragEnd.emit();
        }
    };
    formatValue(value) {
        let formatted;
        if (this.displayFormat) {
            try {
                formatted = this.displayFormat.replace('{value}', value.toString());
            }
            catch {
                formatted = value.toString();
            }
        }
        else {
            formatted = value.toString();
        }
        return `${this.prefixText}${formatted}${this.suffixText}`;
    }
    handleInputChange = (thumb) => (event) => {
        const newValue = Math.max(this.min, Math.min(this.max, Number(event.detail)));
        if (!isNaN(newValue)) {
            if (thumb === 'start') {
                this.startValue = Math.min(newValue, this.endValue);
                this.sliderChange.emit({ start: this.startValue, end: this.endValue });
            }
            else if (thumb === 'end') {
                this.endValue = Math.max(newValue, this.startValue);
                this.sliderChange.emit({ start: this.startValue, end: this.endValue });
            }
            else {
                this.value = newValue;
                this.sliderChange.emit(this.value);
            }
        }
    };
    handleKeyDown = (thumb) => (event) => {
        if (this.disabled)
            return;
        let newValue = thumb === 'start' ? this.startValue : (this.range ? this.endValue : this.value);
        const step = this.step;
        const lgStep = this.step * 10;
        let changed = false;
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newValue = newValue + step;
                changed = true;
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newValue = newValue - step;
                changed = true;
                break;
            case 'PageUp':
                newValue = newValue + lgStep;
                changed = true;
                break;
            case 'PageDown':
                newValue = newValue - lgStep;
                changed = true;
                break;
            case 'Home':
                newValue = this.min;
                changed = true;
                break;
            case 'End':
                newValue = this.max;
                changed = true;
                break;
            default:
                return;
        }
        if (changed) {
            event.preventDefault();
            event.stopPropagation();
            // Clamp and ensure min/max
            newValue = Math.max(this.min, Math.min(this.max, newValue));
            if (this.range) {
                if (thumb === 'start') {
                    this.startValue = Math.min(newValue, this.endValue);
                }
                else {
                    this.endValue = Math.max(newValue, this.startValue);
                }
                this.sliderChange.emit({ start: this.startValue, end: this.endValue });
            }
            else {
                this.value = newValue;
                this.sliderChange.emit(this.value);
            }
        }
    };
    renderMarks() {
        const marks = this.getMarks();
        const customSteps = this.getCustomSteps();
        const activeColor = this.resolvedColor;
        let marksToRender = marks;
        if (marksToRender.length === 0 && this.showMarks) {
            const steps = customSteps.length > 0 ? customSteps : [];
            if (steps.length === 0) {
                for (let i = this.min; i <= this.max; i += this.step) {
                    steps.push(i);
                }
            }
            marksToRender = steps.map(val => ({ value: val }));
        }
        const startActive = this.range ? this.startValue : this.min;
        const endActive = this.range ? this.endValue : this.value;
        return marksToRender.map(mark => {
            const position = this.getPositionFromValue(mark.value);
            const isActive = mark.value >= startActive && mark.value <= endActive;
            const style = this.vertical
                ? { bottom: `${position}%` }
                : { left: `${position}%` };
            return (h("div", { class: "slider-mark", style: style }, h("div", { class: "slider-mark-dot", style: isActive ? { backgroundColor: activeColor, borderColor: 'white' } : {} }), mark.label && h("div", { class: "slider-mark-label" }, mark.label)));
        });
    }
    render() {
        const startPos = this.range ? this.getPositionFromValue(this.startValue) : 0;
        const endPos = this.range ? this.getPositionFromValue(this.endValue) : this.getPositionFromValue(this.value);
        const activeColor = this.resolvedColor;
        const rangeStyle = this.vertical
            ? {
                bottom: `${startPos}%`,
                height: `${endPos - startPos}%`,
                ...(this.gradientTrack
                    ? { background: this.resolvedGradient }
                    : { backgroundColor: activeColor }),
            }
            : {
                left: `${startPos}%`,
                width: `${endPos - startPos}%`,
                ...(this.gradientTrack
                    ? { background: this.resolvedGradient }
                    : { backgroundColor: activeColor }),
            };
        const thumbStyle = (pos, isVertical) => {
            const isColorObject = typeof this.color === 'object' && this.color !== null;
            const baseStyle = isVertical
                ? { bottom: `${pos}%` }
                : { [this.isRtl() ? 'right' : 'left']: `${pos}%` };
            if (isColorObject || (this.gradientTrack && this.variant)) {
                baseStyle.background = this.resolvedGradient;
            }
            else {
                baseStyle.backgroundColor = activeColor;
            }
            baseStyle.boxShadow = `0 0 0 3px ${activeColor}33`;
            return baseStyle;
        };
        return (h(Host, { dir: this.isRtl() ? 'rtl' : 'ltr' }, this.label && (h("div", { class: "slider-label" }, this.label)), h("div", { class: {
                'slider-container': true,
                [`slider-${this.size}`]: true,
                [`variant-${this.variant}`]: !!this.variant,
                'variant-circle': this.circle,
                'slider-vertical': this.vertical,
                'slider-disabled': this.disabled,
                'slider-dragging': this.isDraggingState,
                'slider-rtl': this.isRtl(),
            }, dir: this.isRtl() ? 'rtl' : 'ltr', onMouseEnter: () => (this.isHovering = true), onMouseLeave: () => (this.isHovering = false) }, this.startIcon && (h("div", { class: "slider-icon slider-start-icon" }, this.startIcon)), h("div", { class: "slider-wrapper" }, this.showMinMax && (h("div", { class: "slider-minmax-labels" }, h("span", { class: "slider-minmax-min" }, this.formatValue(this.min)), h("span", { class: "slider-minmax-max" }, this.formatValue(this.max)))), h("div", { class: "slider-track", ref: el => (this.trackElement = el), onClick: this.handleTrackClick, style: { background: this.trackColor } }, !this.hideRange && h("div", { class: "slider-range", style: rangeStyle }), this.showMarks && h("div", { class: "slider-marks" }, this.renderMarks()), this.range && (h("div", { class: {
                'slider-thumb': true,
                'slider-thumb-active': this.activeThumb === 'start',
            }, style: thumbStyle(startPos, this.vertical), onMouseDown: this.handleThumbMouseDown('start'), onTouchStart: this.handleThumbTouchStart('start'), onKeyDown: this.handleKeyDown('start'), tabIndex: this.disabled ? -1 : 0, role: "slider", "aria-label": "Start Value", "aria-valuemin": this.min, "aria-valuemax": this.endValue, "aria-valuenow": this.startValue }, (this.showTooltip && (this.tooltipAlwaysVisible || this.isHovering || this.isDraggingState)) && (h("div", { class: "slider-tooltip" }, this.formatValue(this.startValue))))), h("div", { class: {
                'slider-thumb': true,
                'slider-thumb-active': !this.range || this.activeThumb === 'end',
            }, style: thumbStyle(endPos, this.vertical), onMouseDown: this.handleThumbMouseDown(this.range ? 'end' : null), onTouchStart: this.handleThumbTouchStart(this.range ? 'end' : null), onKeyDown: this.handleKeyDown('end'), tabIndex: this.disabled ? -1 : 0, role: "slider", "aria-label": this.range ? 'End Value' : 'Value', "aria-valuemin": this.range ? this.startValue : this.min, "aria-valuemax": this.max, "aria-valuenow": this.range ? this.endValue : this.value }, (this.showTooltip && (this.tooltipAlwaysVisible || this.isHovering || this.isDraggingState)) && (h("div", { class: "slider-tooltip" }, this.formatValue(this.range ? this.endValue : this.value))))), this.showValue && (h("div", { class: "slider-value-display" }, this.range
            ? `${this.formatValue(this.startValue)} – ${this.formatValue(this.endValue)}`
            : this.formatValue(this.value))), this.inputSync && !this.range && (h("ui-input", { type: "number", class: "slider-input", min: this.min, max: this.max, step: this.step, value: this.value, disabled: this.disabled, onInputChange: this.handleInputChange('single'), size: "sm" })), this.inputSync && this.range && (h("div", { class: "slider-input-row" }, h("ui-input", { type: "number", class: "slider-input", min: this.min, max: this.endValue, step: this.step, value: this.startValue, disabled: this.disabled, onInputChange: this.handleInputChange('start'), size: "sm" }), h("span", { class: "slider-input-sep" }, "\u2013"), h("ui-input", { type: "number", class: "slider-input", min: this.startValue, max: this.max, step: this.step, value: this.endValue, disabled: this.disabled, onInputChange: this.handleInputChange('end'), size: "sm" })))), this.endIcon && (h("div", { class: "slider-icon slider-end-icon" }, this.endIcon)))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "color": [{
                "handleColorChange": 0
            }],
        "marks": [{
                "handleMarksChange": 0
            }]
    }; }
};
RangeSlider.style = rangeSliderCss();

export { RangeSlider as ui_range_slider };
