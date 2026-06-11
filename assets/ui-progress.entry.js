import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-Dqu2zaH1.js';

const progressCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}:host *{box-sizing:border-box}.progress{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;font-size:14px;height:100%;width:100%;border-radius:inherit;display:flex;flex-direction:column}.progress-line-wrapper{display:flex;align-items:center;gap:12px}.progress-line-wrapper.progress-status-bar--top{flex-direction:column;align-items:stretch;gap:4px}.progress-line-wrapper.progress-status-bar--top .progress-line-trail{flex:none}.progress-line-wrapper.progress-orient-vertical{flex-direction:column;height:100%;width:100%}.progress-line-wrapper.progress-orient-vertical .progress-text{text-align:center;min-width:unset;font-size:11px;font-weight:700;letter-spacing:0.05em;margin-top:8px;margin-left:0}.progress-line-trail{position:relative;overflow:hidden;transition:all 0.3s ease}.progress-line-trail:hover{opacity:0.9}.progress-line-bar{position:absolute;top:0;left:0;transition:width 0.5s cubic-bezier(0.4, 0, 0.2, 1), height 0.5s cubic-bezier(0.4, 0, 0.2, 1);border-radius:inherit;display:flex;align-items:center;justify-content:center;white-space:nowrap}.progress-text-inside{position:relative;z-index:2;font-weight:700;padding:0 8px;display:flex;align-items:center;justify-content:center}.progress-success-bar{position:absolute;top:0;right:0;border-radius:inherit}.progress-active .progress-line-bar::before{content:"";position:absolute;top:0;left:0;bottom:0;right:0;background:var(--bg-primary, #ffffff);opacity:0;animation:progress-active 2s cubic-bezier(0.23, 1, 0.32, 1) infinite;border-radius:inherit}@keyframes progress-active{0%{opacity:0.1;width:0}20%{opacity:0.5;width:0}100%{opacity:0;width:100%}}.progress-indeterminate.progress-line .progress-line-bar{width:100%}.progress-indeterminate.progress-line .progress-line-bar::after{content:"";position:absolute;top:0;left:0;bottom:0;width:50%;background:linear-gradient(to right, transparent, rgba(255, 255, 255, 0.5), transparent);animation:progress-line-indeterminate 1.5s infinite linear}@keyframes progress-line-indeterminate{0%{left:-100%}100%{left:100%}}.progress-steps-wrapper{display:flex;align-items:center;gap:12px}.progress-steps-container{display:flex;gap:4px;flex:1}.progress-step{border-radius:4px;transition:background 0.3s ease}.progress-circle-wrapper{position:relative;display:inline-block}.progress-indeterminate.progress-circle .progress-circle-wrapper,.progress-indeterminate.progress-dashboard .progress-circle-wrapper{animation:progress-circle-rotate 2s infinite linear}.progress-circle-path{transition:stroke-dashoffset 0.5s cubic-bezier(0.4, 0, 0.2, 1)}@keyframes progress-circle-rotate{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}.progress-circle-text{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);text-align:center;font-size:24px;font-weight:600;color:rgba(0, 0, 0, 0.85)}.progress-sm .progress-circle-text{font-size:16px}.progress-text{font-size:14px;color:rgba(0, 0, 0, 0.65);white-space:nowrap;min-width:32px;text-align:right;display:inline-flex;align-items:center;justify-content:flex-end;gap:6px}.progress-text ui-icon{font-size:16px;vertical-align:middle}.progress-circle .progress-text{text-align:center}.progress-text i{font-size:16px;vertical-align:middle;margin-right:4px}.progress-success .progress-text i,.progress-completed .progress-text i{color:var(--color-success, #52c41a)}.progress-text-warning i{color:var(--color-danger, #faad14)}.progress-text-exception i,.progress-exception .progress-text i,.progress-danger .progress-text i,.progress-interrupted .progress-text i{color:var(--color-danger, #ff4d4f)}.progress-text-empty{color:var(--color-neutral, #8c8c8c) !important}.progress-text-empty i,.progress-text-empty ui-icon{color:var(--color-neutral, #8c8c8c) !important}.progress-text-running{color:var(--color-primary, #1890ff) !important}.progress-text-running i,.progress-text-running ui-icon{color:var(--color-primary, #1890ff) !important}.progress-text-success{color:var(--color-success, #52c41a) !important}.progress-text-success i,.progress-text-success ui-icon{color:var(--color-success, #52c41a) !important}.progress-text-exception{color:var(--color-danger, #ff4d4f) !important}.progress-text-exception i,.progress-text-exception ui-icon{color:var(--color-danger, #ff4d4f) !important}.progress-success .progress-line-bar,.progress-completed .progress-line-bar{background:var(--color-success, #52c41a)}.progress-warning .progress-line-bar{background:var(--color-danger, #faad14)}.progress-exception .progress-line-bar,.progress-danger .progress-line-bar,.progress-interrupted .progress-line-bar{background:var(--color-danger, #ff4d4f)}.progress-empty .progress-line-bar{background:var(--color-neutral, #d9d9d9)}.progress-running .progress-line-bar{background:var(--color-primary, #1890ff)}.progress-success .progress-circle-path,.progress-completed .progress-circle-path{stroke:var(--color-success, #52c41a)}.progress-warning .progress-circle-path{stroke:var(--color-danger, #faad14)}.progress-exception .progress-circle-path,.progress-danger .progress-circle-path,.progress-interrupted .progress-circle-path{stroke:var(--color-danger, #ff4d4f)}.progress-empty .progress-circle-path{stroke:var(--color-neutral, #d9d9d9)}.progress-running .progress-circle-path{stroke:var(--color-primary, #1890ff)}.progress-sm.progress-circle .progress-circle-wrapper{width:80px;height:80px}.progress-default.progress-circle .progress-circle-wrapper{width:120px;height:120px}.progress-liquid{overflow:hidden}.progress-liquid.progress-line-bar::after{content:"";position:absolute;top:0;left:0;width:200%;height:100%;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 20'%3E%3Cpath fill='var(--bg-primary, #ffffff)' opacity='0.2' d='M0 15 Q25 10 50 15 T100 15 V20 H0 Z'/%3E%3C/svg%3E");background-size:50% 100%;animation:wave-move 2s infinite linear}.progress-liquid.progress-circle-path{filter:url(#liquid-filter);stroke-dasharray:20 2 !important;animation:circular-liquid 2s infinite linear}@keyframes circular-liquid{0%{stroke-dashoffset:0}100%{stroke-dashoffset:44}}@keyframes wave-move{0%{transform:translateX(0)}100%{transform:translateX(-50%)}}.progress-glass .progress-line-trail{background:rgba(255, 255, 255, 0.1) !important;backdrop-filter:blur(8px);border:1px solid rgba(255, 255, 255, 0.2);box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.05)}.progress-glass .progress-circle-wrapper path:first-child{stroke:rgba(255, 255, 255, 0.2) !important;filter:blur(1px)}.progress-glow.progress-line .progress-line-bar{filter:drop-shadow(0 0 8px currentColor)}.progress-glow.progress-circle .progress-circle-path,.progress-glow.progress-dashboard .progress-circle-path{filter:drop-shadow(0 0 6px currentColor)}.progress-glow.progress-success.progress-line .progress-line-bar,.progress-glow.progress-completed.progress-line .progress-line-bar{filter:drop-shadow(0 0 8px rgba(82, 196, 26, 0.45)) !important}.progress-glow.progress-success.progress-circle .progress-circle-path,.progress-glow.progress-success.progress-dashboard .progress-circle-path,.progress-glow.progress-completed.progress-circle .progress-circle-path,.progress-glow.progress-completed.progress-dashboard .progress-circle-path{filter:drop-shadow(0 0 6px rgba(82, 196, 26, 0.45)) !important}.progress-glow.progress-exception.progress-line .progress-line-bar,.progress-glow.progress-danger.progress-line .progress-line-bar,.progress-glow.progress-interrupted.progress-line .progress-line-bar{filter:drop-shadow(0 0 8px rgba(255, 77, 79, 0.45)) !important}.progress-glow.progress-exception.progress-circle .progress-circle-path,.progress-glow.progress-exception.progress-dashboard .progress-circle-path,.progress-glow.progress-danger.progress-circle .progress-circle-path,.progress-glow.progress-danger.progress-dashboard .progress-circle-path,.progress-glow.progress-interrupted.progress-circle .progress-circle-path,.progress-glow.progress-interrupted.progress-dashboard .progress-circle-path{filter:drop-shadow(0 0 6px rgba(255, 77, 79, 0.45)) !important}.progress-glow.progress-warning.progress-line .progress-line-bar{filter:drop-shadow(0 0 8px rgba(250, 173, 20, 0.45)) !important}.progress-glow.progress-warning.progress-circle .progress-circle-path,.progress-glow.progress-warning.progress-dashboard .progress-circle-path{filter:drop-shadow(0 0 6px rgba(250, 173, 20, 0.45)) !important}.progress-glow.progress-running.progress-line .progress-line-bar,.progress-glow.progress-active.progress-line .progress-line-bar{filter:drop-shadow(0 0 8px rgba(24, 144, 255, 0.45)) !important}.progress-glow.progress-running.progress-circle .progress-circle-path,.progress-glow.progress-running.progress-dashboard .progress-circle-path,.progress-glow.progress-active.progress-circle .progress-circle-path,.progress-glow.progress-active.progress-dashboard .progress-circle-path{filter:drop-shadow(0 0 6px rgba(24, 144, 255, 0.45)) !important}.progress-industrial{mask-size:16px 100%;mask-image:linear-gradient(to right, var(--text-primary, #000) 70%, transparent 70%)}.progress-orient-vertical .progress-industrial{mask-size:100% 16px;mask-image:linear-gradient(to top, var(--text-primary, #000) 70%, transparent 70%)}.progress-industrial{box-shadow:inset 0 1px 2px rgba(255, 255, 255, 0.4), inset 0 -1px 2px rgba(0, 0, 0, 0.3), 0 1px 3px rgba(0, 0, 0, 0.2);border:1px solid rgba(255, 255, 255, 0.1)}.progress-vibrate{animation:thermal-vibration 0.15s infinite}@keyframes thermal-vibration{0%{transform:translateY(0)}25%{transform:translateY(-1px) translateX(1px)}50%{transform:translateY(1px) translateX(-1px)}75%{transform:translateY(-1px)}100%{transform:translateY(0)}}.progress-peak-marker{position:absolute;top:-4px;bottom:-4px;width:2px;background:var(--color-primary, #1890ff);box-shadow:0 0 8px var(--color-primary, #1890ff);transition:left 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);z-index:10;pointer-events:none}.progress-peak-marker::after{content:"";position:absolute;top:-4px;left:-3px;border-left:4px solid transparent;border-right:4px solid transparent;border-top:4px solid var(--color-primary, #1890ff)}.progress-vitality-pulse{position:absolute;inset:0;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);width:50%;animation:vitality-wave 3s infinite ease-in-out;pointer-events:none;z-index:5}.progress-orient-vertical .progress-vitality-pulse{width:100%;height:50%;background:linear-gradient(180deg, transparent, rgba(255, 255, 255, 0.2), transparent);animation:vitality-wave-vertical 3s infinite ease-in-out}@keyframes vitality-wave{0%{transform:translateX(-100%) skewX(-20deg)}50%{opacity:0.5}100%{transform:translateX(200%) skewX(-20deg)}}@keyframes vitality-wave-vertical{0%{transform:translateY(100%) skewY(-20deg)}50%{opacity:0.5}100%{transform:translateY(-200%) skewY(-20deg)}}.progress-tick{position:absolute;background:rgba(0, 0, 0, 0.1);pointer-events:none;z-index:1}.progress-orient-horizontal .progress-tick{top:0;bottom:0;width:1px}.progress-orient-vertical .progress-tick{left:0;right:0;height:1px}.milestone-marker{position:absolute;top:50%;transform:translate(-50%, -50%);z-index:15;cursor:help;display:flex;align-items:center;justify-content:center}.progress-orient-vertical .milestone-marker{left:50%;transform:translate(-50%, 50%)}.milestone-marker ui-icon{font-size:14px;color:var(--text-primary, #1a202c);background:var(--bg-primary, #ffffff);border-radius:50%;padding:2px;box-shadow:0 0 6px rgba(0, 0, 0, 0.1)}.milestone-dot{width:8px;height:8px;background:var(--bg-primary, #ffffff);border:2px solid var(--color-primary, #1890ff);border-radius:50%;box-shadow:0 0 4px rgba(0, 0, 0, 0.15)}.multi-progress-container{border-top:1px solid var(--border-subtle, #edf2f7);padding-top:16px;margin-top:20px}.multi-progress-item{transition:all 0.2s ease}.multi-progress-item:hover{transform:translateX(4px)}.multi-progress-bar-wrap{position:relative;overflow:hidden;box-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.05)}.multi-progress-label{letter-spacing:0.025em;text-transform:uppercase}.time-estimate{font-size:11px;color:var(--color-primary, #718096);font-weight:600;margin-top:8px;display:block}.pause-button{display:flex;align-items:center;justify-content:center;background:var(--bg-primary, #f7fafc);border:1px solid var(--border-subtle, #e2e8f0);border-radius:50%;width:24px;height:24px;cursor:pointer;color:var(--color-primary, #4a5568);transition:all 0.2s ease;margin-top:8px}.pause-button:hover{background:var(--bg-primary, #edf2f7);color:var(--color-primary, #2d3748);transform:scale(1.1)}.pause-button ui-icon{font-size:10px}.progress-skeleton .progress-line-trail{background:var(--bg-primary, #e2e8f0) !important;position:relative;overflow:hidden}.progress-skeleton .progress-line-trail::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);animation:progress-shimmer 1.5s infinite}.progress-skeleton .progress-line-bar{display:none !important}@keyframes progress-shimmer{from{transform:translateX(-100%)}to{transform:translateX(100%)}}@media (forced-colors: active){.progress-line-trail{border:1px solid CanvasText}.progress-line-bar{background:Highlight}.progress-peak-marker{background:Mark;box-shadow:none}.progress-tick{background:CanvasText;opacity:0.3}}.progress-status-header{display:flex;width:100%;margin-bottom:4px}.progress-status-header--left{justify-content:flex-start}.progress-status-header--center{justify-content:center}.progress-status-header--right{justify-content:flex-end}.progress-status-chip{display:inline-flex;align-items:center;gap:4px;font-size:11px;font-weight:700;line-height:1;padding:4px 10px;border-radius:999px;white-space:nowrap;box-shadow:0 1px 6px rgba(0, 0, 0, 0.18);backdrop-filter:blur(4px);pointer-events:none;user-select:none}.progress-status-chip ui-icon{font-size:11px}.progress-status-chip--not-started{background:rgba(241, 245, 249, 0.93);color:#475569;border:1px solid #e2e8f0}.progress-status-chip--running{background:rgba(239, 246, 255, 0.93);color:#1d4ed8;border:1px solid #bfdbfe}.progress-status-chip--running ui-icon{animation:progress-spin 1s linear infinite}.progress-status-chip--interrupted{background:rgba(255, 251, 235, 0.93);color:#b45309;border:1px solid #fde68a}.progress-status-chip--completed{background:rgba(240, 253, 244, 0.93);color:#15803d;border:1px solid #bbf7d0}@keyframes progress-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}`;

const Progress = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.progressChange = createEvent(this, "progressChange");
    }
    /**
     * Type of progress
     */
    type = 'line';
    /**
     * Current progress percentage (0-100)
     */
    percent = 0;
    /**
     * Status of progress
     */
    status = 'normal';
    currentStatus = 'normal';
    /**
     * Width of progress bar stroke
     */
    strokeWidth = 10;
    /**
     * Color of progress bar (string or gradient object)
     */
    strokeColor = '#1890ff';
    /**
     * Color of unfilled part
     */
    trailColor = '#f0f0f0';
    /**
     * Enable automatic gradient based on status or strokeColor
     */
    gradient = false;
    /**
     * Whether to display progress value and status icon
     */
    showInfo = true;
    /**
     * Custom format function for progress text
     */
    format = (percent) => `${percent}%`;
    /**
     * Size of progress (only for type='circle' or 'dashboard')
     */
    size = 'default';
    /**
     * Width/Length of progress bar (for type='line' and orientation='horizontal')
     */
    width = '100%';
    /**
     * Height/Length of progress bar (for type='line' and orientation='vertical')
     */
    height = '100%';
    /**
     * Shape of progress linecap
     */
    strokeLinecap = 'round';
    /**
     * Segmented success percent
     */
    success = null;
    /**
     * Total step count (for steps progress)
     */
    steps = 0;
    /**
     * Gap degree (for circle/dashboard type)
     */
    gapDegree = 0;
    /**
     * Gap position (for circle/dashboard type)
     */
    gapPosition = 'top';
    /**
     * Multiple progress bars for stacked display
     */
    multiProgress = [];
    /**
     * Buffer percentage for loading states
     */
    buffer = 0;
    /**
     * Show buffer indicator
     */
    showBuffer = false;
    /**
     * Paused state
     */
    paused = false;
    /**
     * Show pause/resume button
     */
    showPauseButton = false;
    /**
     * Estimated time remaining in seconds
     */
    estimatedTime = 0;
    /**
     * Show time estimation
     */
    showTimeEstimate = false;
    /**
    * Milestone markers
    */
    milestones = [];
    /**
     * Indeterminate state (infinite animation)
     */
    indeterminate = false;
    /**
     * Decimal precision for percentage display
     */
    decimalPrecision = 0;
    /**
     * Independent color for the percentage text
     */
    percentageColor = '';
    /**
     * Enable premium wave/liquid animation
     */
    liquid = false;
    /**
     * Dynamic threshold mapping [{percent: 80, color: 'red', status: 'danger'}]
     */
    thresholds = [];
    /**
     * Icon name to display alongside status
     */
    icon = '';
    /**
     * Icon library (lucide, fontawesome, se, core)
     */
    iconLibrary = 'lucide';
    /**
     * Whether to display in skeleton/loading mode
     */
    skeleton = false;
    /**
     * Tracks the maximum percent reached (Ghost Marker)
     */
    peakMarker = 0;
    /**
     * Show a background 'vitality' pulse synchronized with system health
     */
    vitality = false;
    /**
     * Raw metric labels (e.g. '5.2 GB / 10 GB')
     */
    dataLabels = '';
    /**
     * Enable glassmorphism effect for the trail
     */
    glass = false;
    /**
     * Status-bar variant: shows a lifecycle label (Not Started / Running / Interrupted / Completed)
     * above the progress bar derived automatically from percent + status.
     */
    statusBar = false;
    /**
     * Alignment of the status badge inside the status bar header.
     * 'left' (default) — badge left, percent right.
     * 'center' — badge and percent centered together.
     * 'right' — badge right, percent left.
     */
    statusBarAlign = 'left';
    /**
     * Position of the status chip/badge in status-bar mode.
     * 'inside' (default) — inside the progress bar trail (requires minimum height of 32px).
     * 'top' — above the progress bar (allows smaller progress bar heights).
     */
    statusBarPosition = 'inside';
    /**
     * Custom text labels for each status-bar state.
     * Pass any subset to override — unset keys keep their defaults.
     * e.g. { notStarted: 'Pending', running: 'In Progress', interrupted: 'Paused', completed: 'Done' }
     */
    statusLabels = {};
    /**
     * Enable dynamic glow effect based on status
     */
    glow = false;
    /**
     * Label position
     */
    labelPosition = 'outside';
    /**
     * Orientation of the progress bar
     */
    orientation = 'horizontal';
    /**
     * Allow manual interaction (slider mode)
     */
    interactive = false;
    /**
     * Show scale ticks at specific intervals (e.g. 10)
     */
    ticks = 0;
    animatedPercent = 0;
    isDragging = false;
    gradientId = `ui-progress-gradient-${Math.random().toString(36).substr(2, 9)}`;
    get el() { return getElement(this); }
    /**
     * Emitted when user interacts/scrubs
     */
    progressChange;
    componentWillLoad() {
        this.animatedPercent = this.percent;
        this.currentStatus = this.status;
        this.normalizeProps();
    }
    normalizeProps() {
        try {
            if (typeof this.milestones === 'string')
                this.milestones = JSON.parse(this.milestones);
            if (typeof this.thresholds === 'string')
                this.thresholds = JSON.parse(this.thresholds);
            if (typeof this.success === 'string')
                this.success = JSON.parse(this.success);
            if (typeof this.strokeColor === 'string' && (this.strokeColor.startsWith('{'))) {
                this.strokeColor = JSON.parse(this.strokeColor);
            }
            if (typeof this.multiProgress === 'string') {
                this.multiProgress = JSON.parse(this.multiProgress);
            }
            if (typeof this.statusLabels === 'string')
                this.statusLabels = JSON.parse(this.statusLabels);
        }
        catch (e) {
            console.warn('Failed to parse complex progress prop', e);
        }
    }
    handlePercentChange(newPercent) {
        if (newPercent > this.peakMarker) {
            this.peakMarker = newPercent;
        }
        this.animateProgress(newPercent);
        this.applyThresholds(newPercent);
    }
    handleStrokeColorChange() {
        this.normalizeProps();
    }
    handleStatusChange(newStatus) {
        this.currentStatus = newStatus;
    }
    applyThresholds(val) {
        if (!this.thresholds.length)
            return;
        const sorted = [...this.thresholds].sort((a, b) => b.percent - a.percent);
        const match = sorted.find(t => val >= t.percent);
        if (match) {
            if (match.status)
                this.currentStatus = match.status;
            if (match.color)
                this.strokeColor = match.color; // strokeColor is usually internal or we just use it for rendering anyway
        }
        else {
            this.currentStatus = this.status;
        }
    }
    animateProgress(targetPercent) {
        const duration = 500;
        const startPercent = this.animatedPercent;
        const diff = targetPercent - startPercent;
        const startTime = Date.now();
        const animate = () => {
            const currentTime = Date.now();
            const elapsed = currentTime - startTime;
            const progress = Math.min(elapsed / duration, 1);
            this.animatedPercent = startPercent + diff * this.easeOut(progress);
            if (progress < 1) {
                requestAnimationFrame(animate);
            }
        };
        requestAnimationFrame(animate);
    }
    easeOut(t) {
        return 1 - Math.pow(1 - t, 3);
    }
    handleInteraction = (e) => {
        if (!this.interactive)
            return;
        this.isDragging = true;
        this.updateFromEvent(e);
        const handleUp = () => {
            this.isDragging = false;
            document.removeEventListener('mousemove', handleMove);
            document.removeEventListener('mouseup', handleUp);
            document.removeEventListener('touchmove', handleMove);
            document.removeEventListener('touchend', handleUp);
        };
        const handleMove = (ev) => {
            if (this.isDragging)
                this.updateFromEvent(ev);
        };
        document.addEventListener('mousemove', handleMove);
        document.addEventListener('mouseup', handleUp);
        document.addEventListener('touchmove', handleMove);
        document.addEventListener('touchend', handleUp);
    };
    updateFromEvent(e) {
        const rect = this.el.shadowRoot?.querySelector('.progress-line-trail')?.getBoundingClientRect();
        if (!rect)
            return;
        const clientX = e.touches ? e.touches[0].clientX : e.clientX;
        const clientY = e.touches ? e.touches[0].clientY : e.clientY;
        let val = 0;
        if (this.orientation === 'vertical') {
            val = 100 - ((clientY - rect.top) / rect.height) * 100;
        }
        else {
            val = ((clientX - rect.left) / rect.width) * 100;
        }
        const constrained = Math.max(0, Math.min(100, Math.round(val)));
        this.percent = constrained;
        this.progressChange.emit({ value: constrained });
    }
    renderTicks() {
        if (this.ticks <= 0)
            return null;
        const count = Math.floor(100 / this.ticks);
        const nodes = [];
        for (let i = 0; i <= count; i++) {
            const pos = i * this.ticks;
            nodes.push(h("div", { class: "progress-tick", style: { [this.orientation === 'vertical' ? 'bottom' : 'left']: `${pos}%` } }));
        }
        return nodes;
    }
    getStatusInfo() {
        const lbl = this.statusLabels || {};
        if (this.currentStatus === 'interrupted') {
            return { label: lbl.interrupted ?? 'Interrupted', cssClass: 'interrupted', iconName: 'ban' };
        }
        if (this.animatedPercent >= 100 || this.currentStatus === 'completed') {
            return { label: lbl.completed ?? 'Completed', cssClass: 'completed', iconName: 'check-circle' };
        }
        if (this.animatedPercent <= 0) {
            return { label: lbl.notStarted ?? 'Not Started', cssClass: 'not-started', iconName: 'circle' };
        }
        return { label: lbl.running ?? 'Running', cssClass: 'running', iconName: 'loader' };
    }
    renderStatusBarChip(isOnTop = false) {
        const { label, cssClass, iconName } = this.getStatusInfo();
        const pct = Number(this.animatedPercent.toFixed(this.decimalPrecision));
        let style = {};
        if (!isOnTop) {
            style = { position: 'absolute', top: '50%', transform: 'translateY(-50%)', zIndex: '2' };
            if (this.statusBarAlign === 'right') {
                style.right = '8px';
            }
            else if (this.statusBarAlign === 'center') {
                style.left = '50%';
                style.transform = 'translate(-50%, -50%)';
            }
            else {
                style.left = '8px';
            }
        }
        return (h("div", { class: `progress-status-chip progress-status-chip--${cssClass}`, style: style }, h("ui-icon", { name: iconName, library: "lucide" }), h("span", null, label), h("span", { "aria-hidden": "true", style: { opacity: '0.45', margin: '0 1px' } }, "\u00B7"), h("span", null, pct, "%")));
    }
    getStrokeColor() {
        if (this.currentStatus === 'success' || this.currentStatus === 'completed') {
            return '#52c41a';
        }
        if (this.currentStatus === 'exception' || this.currentStatus === 'danger' || this.currentStatus === 'interrupted') {
            return '#ff4d4f';
        }
        if (this.currentStatus === 'warning') {
            return '#faad14';
        }
        if (this.currentStatus === 'empty') {
            return '#d9d9d9';
        }
        if (this.currentStatus === 'running') {
            return '#1890ff';
        }
        const hasGradient = this.gradient || (typeof this.strokeColor === 'object' && this.strokeColor !== null);
        if (hasGradient) {
            return `url(#${this.gradientId})`;
        }
        if (typeof this.strokeColor === 'string') {
            return this.strokeColor;
        }
        return '#1890ff';
    }
    renderLineProgress() {
        const strokeColor = this.getStrokeColor();
        const roundedPercent = Number(this.animatedPercent.toFixed(this.decimalPrecision));
        let backgroundStyle = strokeColor;
        const isGradientProp = typeof this.strokeColor === 'object' && this.strokeColor !== null;
        const gradientObj = isGradientProp ? this.strokeColor : null;
        const direction = this.orientation === 'vertical' ? 'to top' : (gradientObj ? (gradientObj.direction || 'to right') : 'to right');
        if (this.gradient || isGradientProp) {
            let fromColor = '#1890ff';
            let toColor = '#52c41a';
            if (gradientObj) {
                fromColor = gradientObj.from || fromColor;
                toColor = gradientObj.to || toColor;
            }
            else {
                // Generate automatic gradient based on status or color
                fromColor = strokeColor;
                // Lighten/Darken logic or just a secondary color
                toColor = this.status === 'normal' ? '#69c0ff' : strokeColor;
            }
            backgroundStyle = `linear-gradient(${direction}, ${fromColor}, ${toColor})`;
        }
        const showStatusOnTop = this.statusBar && this.statusBarPosition === 'top';
        // When status-bar chip is active and inside, ensure the trail is at least 32px tall so the chip fits
        const effectiveStrokeWidth = (this.statusBar && this.statusBarPosition === 'inside' && this.orientation !== 'vertical')
            ? Math.max(this.strokeWidth, 32) : this.strokeWidth;
        const progressStyle = {
            [this.orientation === 'vertical' ? 'height' : 'width']: this.indeterminate ? '100%' : `${Math.min(this.animatedPercent, 100)}%`,
            [this.orientation === 'vertical' ? 'width' : 'height']: '100%',
            borderRadius: this.strokeLinecap === 'round' ? `${effectiveStrokeWidth}px` : '0',
            background: backgroundStyle,
            color: strokeColor,
            ...(this.orientation === 'vertical' ? { position: 'absolute', bottom: '0', left: '0' } : {})
        };
        const trailStyle = {
            [this.orientation === 'vertical' ? 'width' : 'height']: `${effectiveStrokeWidth}px`,
            [this.orientation === 'vertical' ? 'height' : 'width']: this.orientation === 'vertical'
                ? (typeof this.height === 'number' ? `${this.height}px` : this.height)
                : (typeof this.width === 'number' ? `${this.width}px` : this.width),
            borderRadius: this.strokeLinecap === 'round' ? `${effectiveStrokeWidth}px` : '0',
            background: this.trailColor,
            cursor: this.interactive ? 'pointer' : 'default',
            flex: showStatusOnTop ? 'none' : '1'
        };
        return (h("div", { class: {
                'progress-line-wrapper': true,
                'progress-status-bar': this.statusBar,
                'progress-status-bar--top': showStatusOnTop,
                [`progress-orient-${this.orientation}`]: true
            } }, showStatusOnTop && (h("div", { class: `progress-status-header progress-status-header--${this.statusBarAlign}` }, this.renderStatusBarChip(true))), !this.statusBar && this.labelPosition === 'top' && this.showInfo && this.renderProgressInfo(), h("div", { class: "progress-line-trail", style: trailStyle, onMouseDown: this.handleInteraction, onTouchStart: this.handleInteraction }, this.statusBar && this.statusBarPosition === 'inside' && this.renderStatusBarChip(false), this.vitality && h("div", { class: "progress-vitality-pulse" }), this.renderTicks(), this.showBuffer && this.buffer > 0 && (h("div", { class: "progress-buffer-bar", style: {
                [this.orientation === 'vertical' ? 'height' : 'width']: `${Math.min(this.buffer, 100)}%`,
                [this.orientation === 'vertical' ? 'width' : 'height']: `${this.strokeWidth}px`,
                background: `${strokeColor}33`,
                ...(this.orientation === 'vertical' ? { position: 'absolute', bottom: '0', left: '0' } : {})
            } })), h("div", { class: {
                'progress-line-bar': true,
                'progress-active': (this.currentStatus === 'active' || this.indeterminate) && !this.paused,
                'progress-indeterminate': this.indeterminate,
                'progress-liquid': this.liquid,
                'progress-industrial': this.type === 'industrial',
                'progress-vibrate': this.status === 'danger'
            }, style: progressStyle }, this.labelPosition === 'inside' && this.showInfo && (h("div", { class: "progress-text-inside", style: { color: this.percentageColor || '#fff', fontSize: `${Math.max(this.strokeWidth * 0.6, 9)}px` } }, this.icon && h("ui-icon", { name: this.icon, library: this.iconLibrary, style: { marginRight: '4px' } }), this.format(roundedPercent))), this.success && (this.success.percent ?? 0) > 0 && (h("div", { class: "progress-success-bar", style: {
                [this.orientation === 'vertical' ? 'height' : 'width']: `${((this.success.percent ?? 0) / this.animatedPercent) * 100}%`,
                background: this.success.strokeColor || '#52c41a',
                ...(this.orientation === 'vertical' ? { position: 'absolute', bottom: '0', left: '0' } : {})
            } }))), this.peakMarker > 0 && (h("div", { class: "progress-peak-marker", style: { [this.orientation === 'vertical' ? 'bottom' : 'left']: `${this.peakMarker}%` }, title: `Session Peak: ${this.peakMarker}%` })), this.milestones.map(milestone => (h("div", { class: "milestone-marker", style: { [this.orientation === 'vertical' ? 'bottom' : 'left']: `${milestone.percent}%` }, title: milestone.label }, milestone.icon ? h("ui-icon", { name: milestone.icon.replace(/^fa[sb]? fa-/, ''), library: "fontawesome" }) : h("div", { class: "milestone-dot" }))))), this.multiProgress.length > 0 && this.renderMultiProgress(), !this.statusBar && this.labelPosition !== 'top' && this.showInfo && this.renderProgressInfo(), this.showTimeEstimate && this.estimatedTime > 0 && this.renderTimeEstimate(), this.showPauseButton && this.renderPauseButton()));
    }
    renderMultiProgress() {
        return (h("div", { class: "multi-progress-container", style: { display: 'flex', flexDirection: 'column', gap: '8px', marginTop: '12px' } }, this.multiProgress.map((prog) => (h("div", { class: "multi-progress-item", style: { display: 'flex', alignItems: 'center', gap: '12px' } }, h("div", { class: "multi-progress-bar-wrap", style: { flex: '1', height: `${this.strokeWidth}px`, background: this.trailColor, borderRadius: '4px', overflow: 'hidden' } }, h("div", { class: "multi-progress-bar", style: {
                width: `${prog.percent}%`,
                background: prog.color || this.getStrokeColor(),
                height: '100%',
                transition: 'width 0.5s ease'
            } })), prog.label && h("span", { class: "multi-progress-label", style: { fontSize: '11px', fontWeight: '700', color: '#64748b' } }, prog.label))))));
    }
    renderTimeEstimate() {
        const minutes = Math.floor(this.estimatedTime / 60);
        const seconds = this.estimatedTime % 60;
        const timeStr = minutes > 0 ? `${minutes}m ${seconds}s` : `${seconds}s`;
        return h("span", { class: "time-estimate" }, "Est. ", timeStr, " remaining");
    }
    renderPauseButton() {
        return (h("ui-button", { variant: "ghost", class: "pause-button", onClick: () => this.paused = !this.paused, icon: this.paused ? 'play' : 'pause', iconLibrary: "fontawesome", iconOnly: true, size: "sm" }));
    }
    renderStepsProgress() {
        const steps = [];
        const stepWidth = 100 / this.steps;
        const strokeColor = this.getStrokeColor();
        for (let i = 0; i < this.steps; i++) {
            const stepPercent = ((i + 1) / this.steps) * 100;
            const isActive = stepPercent <= this.animatedPercent;
            steps.push(h("div", { class: {
                    'progress-step': true,
                    'progress-step-active': isActive
                }, style: {
                    width: `${stepWidth}%`,
                    background: isActive ? strokeColor : this.trailColor,
                    height: `${this.strokeWidth}px`
                } }));
        }
        return (h("div", { class: "progress-steps-wrapper", style: { width: typeof this.width === 'number' ? `${this.width}px` : this.width } }, h("div", { class: "progress-steps-container" }, steps), this.showInfo && this.renderProgressInfo()));
    }
    renderCircleProgress() {
        const size = this.size === 'sm' ? 80 : 120;
        const strokeWidth = this.strokeWidth || (this.size === 'sm' ? 6 : 8);
        const radius = (size - strokeWidth) / 2;
        const circumference = 2 * Math.PI * radius;
        const offset = this.indeterminate
            ? circumference * 0.75 // Constant partial stroke for indeterminate
            : circumference - (this.animatedPercent / 100) * circumference;
        const strokeColor = this.getStrokeColor();
        const gapDegree = this.type === 'dashboard' ? (this.gapDegree || 75) : this.gapDegree;
        const gapPosition = this.gapPosition;
        let rotation = 0;
        if (gapPosition === 'bottom')
            rotation = 180;
        else if (gapPosition === 'top')
            rotation = 0;
        else if (gapPosition === 'left')
            rotation = 270;
        else if (gapPosition === 'right')
            rotation = 90;
        const pathString = this.getCirclePath(size / 2, size / 2, radius, gapDegree, rotation);
        const iconEl = this.icon ? h("ui-icon", { name: this.icon, library: this.iconLibrary, style: { display: 'block', fontSize: `${this.size === 'sm' ? 18 : 24}px`, marginBottom: '4px' } }) : null;
        const isGradientProp = typeof this.strokeColor === 'object' && this.strokeColor !== null;
        const gradientObj2 = isGradientProp ? this.strokeColor : null;
        const hasGradient = this.gradient || isGradientProp;
        return (h("div", { class: "progress-circle-wrapper", style: { width: `${size}px`, height: `${size}px` } }, h("svg", { width: size, height: size }, hasGradient && (h("defs", null, h("linearGradient", { id: this.gradientId, x1: "0%", y1: "0%", x2: "100%", y2: "100%" }, h("stop", { offset: "0%", "stop-color": gradientObj2 ? (gradientObj2.from || strokeColor) : strokeColor }), h("stop", { offset: "100%", "stop-color": gradientObj2 ? (gradientObj2.to || '#52c41a') : (this.status === 'normal' ? '#69c0ff' : strokeColor) })))), h("path", { d: pathString, stroke: this.trailColor, "stroke-width": strokeWidth, fill: "none", "stroke-linecap": this.strokeLinecap }), h("path", { d: pathString, stroke: strokeColor, "stroke-width": strokeWidth, fill: "none", "stroke-linecap": this.strokeLinecap, "stroke-dasharray": circumference, "stroke-dashoffset": offset, style: { color: strokeColor }, class: {
                'progress-circle-path': true,
                'progress-indeterminate': this.indeterminate,
                'progress-liquid': this.liquid
            } })), this.showInfo && (h("div", { class: "progress-circle-text" }, iconEl, this.renderProgressInfo()))));
    }
    getCirclePath(cx, cy, radius, gapDegree, rotation) {
        const gapRad = (gapDegree * Math.PI) / 180;
        const startAngle = -Math.PI / 2 + gapRad / 2 + (rotation * Math.PI) / 180;
        const endAngle = startAngle + 2 * Math.PI - gapRad;
        const startX = cx + radius * Math.cos(startAngle);
        const startY = cy + radius * Math.sin(startAngle);
        const endX = cx + radius * Math.cos(endAngle);
        const endY = cy + radius * Math.sin(endAngle);
        const lgArcFlag = 2 * Math.PI - gapRad > Math.PI ? 1 : 0;
        return `M ${startX} ${startY} A ${radius} ${radius} 0 ${lgArcFlag} 1 ${endX} ${endY}`;
    }
    renderProgressInfo() {
        if (this.indeterminate)
            return null;
        const roundedPercent = Number(this.animatedPercent.toFixed(this.decimalPrecision));
        const text = this.dataLabels || this.format(roundedPercent);
        const infoStyle = this.percentageColor ? { color: this.percentageColor } : {};
        const iconEl = this.icon ? h("ui-icon", { name: this.icon, library: this.iconLibrary, style: { marginRight: '6px' } }) : null;
        if (this.currentStatus === 'success' || this.currentStatus === 'completed') {
            return (h("span", { class: "progress-text progress-text-success", style: infoStyle }, iconEl || h("ui-icon", { name: "check-circle", library: "fontawesome" }), this.labelPosition !== 'inside' && (this.dataLabels || (this.currentStatus === 'completed' ? 'Completed' : text))));
        }
        if (this.currentStatus === 'exception' || this.currentStatus === 'danger' || this.currentStatus === 'interrupted') {
            return (h("span", { class: "progress-text progress-text-exception", style: infoStyle }, iconEl || h("ui-icon", { name: "exclamation-triangle", library: "fontawesome" }), this.labelPosition !== 'inside' && (this.dataLabels || (this.currentStatus === 'interrupted' ? 'Interrupted' : text))));
        }
        if (this.currentStatus === 'warning') {
            return (h("span", { class: "progress-text progress-text-warning", style: infoStyle }, iconEl || h("ui-icon", { name: "exclamation-circle", library: "fontawesome" }), text));
        }
        if (this.currentStatus === 'empty') {
            return (h("span", { class: "progress-text progress-text-empty", style: infoStyle }, iconEl || h("ui-icon", { name: "circle", library: "fontawesome", style: { opacity: 0.4 } }), this.labelPosition !== 'inside' && (this.dataLabels || 'Empty')));
        }
        if (this.currentStatus === 'running') {
            return (h("span", { class: "progress-text progress-text-running", style: infoStyle }, iconEl || h("ui-icon", { name: "sync", library: "fontawesome", class: "fa-spin", style: { color: '#1890ff' } }), this.labelPosition !== 'inside' && (this.dataLabels || `Running (${text})`)));
        }
        return (h("span", { class: "progress-text", style: infoStyle }, iconEl, text));
    }
    render() {
        const progressClass = {
            'progress': true,
            [`progress-${this.type}`]: true,
            'progress-active': this.status === 'active' || this.currentStatus === 'running' || this.indeterminate,
            [`progress-${this.size}`]: this.type !== 'line',
            'progress-indeterminate': this.indeterminate,
            'progress-liquid': this.liquid,
            'progress-glass': this.glass,
            'progress-glow': this.glow,
            'progress-skeleton': this.skeleton,
            [`progress-${this.currentStatus}`]: true,
        };
        let content;
        if (this.steps > 0 && this.type === 'line') {
            content = this.renderStepsProgress();
        }
        else if (this.type === 'line') {
            content = this.renderLineProgress();
        }
        else {
            content = this.renderCircleProgress();
        }
        const roundedPercent = Number(this.animatedPercent.toFixed(this.decimalPrecision));
        return (h(Host, { key: '21dcb1b89582338f185767a4301e4cf435c1842c', role: "progressbar", "aria-valuenow": roundedPercent, "aria-valuemin": "0", "aria-valuemax": "100", "aria-label": this.dataLabels || `Progress: ${this.percent}%`, style: this.orientation === 'vertical' ? { height: typeof this.height === 'number' ? `${this.height}px` : this.height } : {} }, h("div", { key: '7aebc6dc0cb2804300c171598c47699d8c8fabe8', class: progressClass }, content, (this.liquid || this.type === 'industrial') && (h("svg", { key: '7a70f4821a0752d1106107e9fa9618cf2b4de889', style: { position: 'absolute', width: '0', height: '0' } }, h("filter", { key: 'a899fcbc62ef322086eee654f24d0bf8b1cf83a6', id: "liquid-filter" }, h("feGaussianBlur", { key: '5b8dc993e949a4cddd661d3b45b9c44fe25e4f4d', in: "SourceGraphic", stdDeviation: "10", result: "blur" }), h("feColorMatrix", { key: '55da24d44b6cb35cd28e0f301d3c8316e3554e8d', in: "blur", mode: "matrix", values: "1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -7", result: "goo" }), h("feBlend", { key: 'e59ec2eda298c0796be6b28a1b2afd9a6dadab63', in: "SourceGraphic", in2: "goo" })))))));
    }
    static get watchers() { return {
        "percent": [{
                "handlePercentChange": 0
            }],
        "strokeColor": [{
                "handleStrokeColorChange": 0
            }],
        "status": [{
                "handleStatusChange": 0
            }]
    }; }
};
Progress.style = progressCss();

export { Progress as ui_progress };
