import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const timerCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.timer-container{display:flex;flex-direction:column;gap:24px;padding:24px;background:var(--bg-primary, #ffffff);border-radius:12px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.05);font-family:inherit;align-items:center;outline:none}.timer-container:focus{box-shadow:0 0 0 3px rgba(var(--color-success-rgb, 16, 185, 129), 0.5)}:host(.timer-no-shadow) .timer-container,:host(.timer-no-shadow) .timer-container-compact{box-shadow:none}:host(.timer-collapsed) .timer-steps,:host(.timer-collapsed) .timer-laps{display:none}:host(.timer-collapsed) .timer-container{padding:16px;gap:16px;align-items:stretch}:host(.timer-collapsed) .timer-controls{justify-content:center;flex-wrap:wrap}:host(.timer-collapsed) .timer-display{width:160px;height:160px}.timer-steps{display:flex;gap:12px;width:100%;justify-content:center}.timer-step{flex:1;max-width:120px;display:flex;flex-direction:column;gap:8px;opacity:0.5;transition:opacity 0.3s}.timer-step-active{opacity:1}.timer-step-completed{opacity:0.8}.timer-step-header{display:flex;align-items:center;gap:8px}.timer-step-index{width:24px;height:24px;border-radius:50%;background:var(--bg-primary, #e5e7eb);display:flex;align-items:center;justify-content:center;font-size:12px;font-weight:600}.timer-step-active .timer-step-index{background:var(--color-success, #10b981);color:var(--text-standard, #ffffff)}.timer-step-completed .timer-step-index{background:var(--color-success-hover, #059669);color:var(--text-standard, #ffffff)}.timer-step-label{font-size:13px;font-weight:500;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.timer-display{position:relative;width:200px;height:200px;display:flex;align-items:center;justify-content:center}.timer-progress-svg{width:100%;height:100%;transform:rotate(-90deg)}.timer-progress-bg{fill:none;stroke:var(--text-standard, #f3f4f6);stroke-width:8}.timer-progress-bar{fill:none;stroke:var(--color-success, #10b981);stroke-width:8;stroke-linecap:round;stroke-dasharray:283;transition:stroke-dashoffset 0.3s linear}.timer-time-text{position:absolute;font-size:var(--timer-time-font-size, 42px);font-weight:700;color:var(--color-primary, #064e3b);font-family:monospace;max-width:140px;text-align:center;display:flex;flex-direction:column;align-items:center;justify-content:center;line-height:1.2}.timer-controls{display:flex;gap:12px}.timer-btn{padding:10px 24px;border:none;border-radius:8px;background:var(--color-success, #10b981);color:var(--text-standard, #ffffff);font-weight:600;cursor:pointer;transition:background 0.2s}.timer-btn:hover{background:var(--color-success-hover, #059669)}.timer-btn-secondary{background:var(--bg-secondary, #f3f4f6);color:var(--text-secondary, #374151)}.timer-btn-secondary:hover{background:var(--bg-primary, #e5e7eb)}.timer-progress-linear{position:absolute;bottom:0;left:0;width:100%;height:4px;background:var(--bg-secondary, #f3f4f6);overflow:hidden}.timer-progress-linear-bar{height:100%;background:var(--timer-primary-color, var(--color-success, #10b981));transition:width 0.3s linear}.timer-display:has(.timer-progress-linear){height:60px;}@keyframes timer-pulse{0%{transform:scale(1);box-shadow:0 4px 12px rgba(var(--color-danger-rgb, 239, 68, 68), 0.1)}50%{transform:scale(1.02);box-shadow:0 4px 24px rgba(var(--color-danger-rgb, 239, 68, 68), 0.3)}100%{transform:scale(1);box-shadow:0 4px 12px rgba(var(--color-danger-rgb, 239, 68, 68), 0.1)}}.timer-alert{border:2px solid var(--color-danger, #ef4444);animation:timer-pulse 1.5s infinite ease-in-out}.timer-alert .timer-time-text{color:var(--color-danger, #ef4444)}.timer-alert .timer-progress-bar{stroke:var(--color-danger, #ef4444)}.timer-container-compact{display:inline-flex;align-items:center;gap:16px;padding:12px 20px;background:var(--bg-primary, #ffffff);border-radius:9999px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.05);border:1px solid var(--border-default, #e5e7eb)}.timer-time-text-compact{font-size:20px;font-weight:700;font-family:monospace;min-width:80px}.timer-controls-compact{display:flex;gap:8px}.timer-btn-icon{background:transparent;border:none;cursor:pointer;font-size:16px;padding:4px;border-radius:50%;transition:background 0.2s;display:flex;align-items:center;justify-content:center}.timer-btn-icon:hover{background:var(--bg-secondary, #f3f4f6)}.timer-laps{width:100%;margin-top:24px;border-top:1px solid var(--border-subtle, #f3f4f6);padding-top:16px}.timer-laps-title{font-size:14px;font-weight:600;color:var(--text-muted, #6b7280);margin-bottom:12px}.timer-laps-list{max-height:150px;overflow-y:auto;display:flex;flex-direction:column;gap:8px}.timer-lap-item{display:flex;justify-content:space-between;font-size:13px;color:var(--text-secondary, #374151);padding:8px 12px;background:var(--bg-primary, #f9fafb);border-radius:6px}.timer-lap-time{font-family:monospace;font-weight:600}@media (prefers-color-scheme: dark){.timer-container{background:var(--bg-primary, #1f2937);box-shadow:0 4px 12px rgba(0, 0, 0, 0.2)}.timer-container-compact{background:var(--bg-primary, #1f2937);border-color:var(--border-default, #374151)}.timer-time-text{color:var(--text-standard, #ffffff)}.timer-step-index{background:var(--color-primary, #374151);color:var(--text-muted, #9ca3af)}.timer-progress-bg{stroke:var(--text-secondary, var(--border-default, #374151))}.timer-btn-secondary{background:var(--color-primary, #374151);color:var(--text-standard, #ffffff)}.timer-lap-item{background:var(--bg-secondary, #111827);color:var(--text-standard, #ffffff)}.timer-btn-icon:hover{background:var(--color-primary, #374151)}}`;

const Timer = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.timerTick = createEvent(this, "timerTick");
        this.timerStart = createEvent(this, "timerStart");
        this.timerPause = createEvent(this, "timerPause");
        this.timerComplete = createEvent(this, "timerComplete");
        this.timerAllComplete = createEvent(this, "timerAllComplete");
        this.timerLap = createEvent(this, "timerLap");
        this.timerNext = createEvent(this, "timerNext");
        this.timerPrev = createEvent(this, "timerPrev");
        this.timerGoTo = createEvent(this, "timerGoTo");
    }
    get el() { return getElement(this); }
    /** Steps definition */
    steps = [];
    normalizedSteps = [];
    isNarrow = false;
    /** Flow type */
    flow = 'linear';
    /** Timer mode */
    mode = 'countdown';
    /** Current active step index */
    activeStep = 0;
    /** Theme variables */
    theme;
    /** Whether to auto-start the timer */
    autoStart = false;
    /** Loop back to start on completion */
    loop = false;
    /** Precision mode */
    precision = 'seconds';
    /** Display variant */
    variant = 'full';
    /** Percentage threshold for alert (countdown only) */
    alertThreshold = 10;
    /** Target date for countdown (ISO string or date string) */
    targetDate;
    /** Whether to persist the timer state in local storage */
    persist; // key for storage
    /** Progress visualization type */
    progressType = 'circular';
    /** Time formatting style */
    format = 'default';
    /** Toggle the outer drop-shadow effect (true by default) */
    useShadow = true;
    /** Automatically switch to the compact layout when the container becomes narrow */
    collapse = false;
    /** Whether to enable browser notifications */
    enableNotifications = false;
    /** Whether to enable sound alerts */
    enableSound = false;
    /** Template for notification title when a phase completes. Use {{label}} placeholder. */
    notificationTitle = 'Timer Complete';
    /** Template for notification body when a phase completes. Use {{label}} placeholder. */
    notificationBody = '{{label}} phase finished.';
    /** Duration in seconds for simple countdown/stopwatch */
    duration = 0;
    /** State */
    currentTime = 0; // in milliseconds if precision is milliseconds, else seconds
    isRunning = false;
    totalDuration = 0;
    laps = [];
    isAlerting = false;
    activeStepColor;
    normalizedTheme = {};
    timerInterval;
    collapseBreakpoint = 640;
    /** Events */
    timerTick;
    timerStart;
    timerPause;
    timerComplete;
    timerAllComplete;
    timerLap;
    timerNext;
    timerPrev;
    timerGoTo;
    normalizeSteps(newSteps) {
        if (typeof newSteps === 'string') {
            try {
                this.normalizedSteps = JSON.parse(newSteps);
            }
            catch {
                this.normalizedSteps = [];
            }
        }
        else {
            this.normalizedSteps = newSteps || [];
        }
        this.initStep();
    }
    watchDuration(newVal) {
        if (this.normalizedSteps.length === 0) {
            this.totalDuration = newVal;
            this.currentTime = this.precision === 'milliseconds' ? newVal * 1000 : newVal;
        }
    }
    normalizeTheme(newTheme) {
        if (typeof newTheme === 'string') {
            try {
                this.normalizedTheme = JSON.parse(newTheme);
            }
            catch {
                this.normalizedTheme = {};
            }
        }
        else {
            this.normalizedTheme = newTheme || {};
        }
    }
    componentWillLoad() {
        this.normalizeSteps(this.steps);
        this.normalizeTheme(this.theme);
        this.loadPersistedState();
        this.initTargetDate();
        this.initNotifications();
        this.updateResponsiveState();
        // Support simple duration if no steps provided
        if (this.duration > 0 && this.normalizedSteps.length === 0) {
            this.totalDuration = this.duration;
            this.currentTime = this.precision === 'milliseconds' ? this.duration * 1000 : this.duration;
        }
    }
    handleWindowResize() {
        this.updateResponsiveState();
    }
    updateResponsiveState() {
        if (typeof window === 'undefined')
            return;
        this.isNarrow = window.innerWidth <= this.collapseBreakpoint;
    }
    initNotifications() {
        if (this.enableNotifications && 'Notification' in window) {
            Notification.requestPermission();
        }
    }
    initTargetDate() {
        if (this.targetDate) {
            const target = new Date(this.targetDate).getTime();
            const now = Date.now();
            const diff = Math.max(0, Math.floor((target - now) / 1000));
            this.mode = 'countdown';
            this.normalizedSteps = [{ label: 'Countdown', duration: diff }];
            this.initStep();
            this.start();
        }
    }
    loadPersistedState() {
        if (!this.persist)
            return;
        const data = localStorage.getItem(`ui-timer-${this.persist}`);
        if (data) {
            try {
                const state = JSON.parse(data);
                this.activeStep = state.activeStep;
                this.currentTime = state.currentTime;
                if (state.wasRunning)
                    this.start();
            }
            catch (e) {
                console.warn('Failed to load persisted timer state');
            }
        }
    }
    savePersistedState() {
        if (!this.persist)
            return;
        localStorage.setItem(`ui-timer-${this.persist}`, JSON.stringify({
            activeStep: this.activeStep,
            currentTime: this.currentTime,
            wasRunning: this.isRunning,
            timestamp: Date.now()
        }));
    }
    componentDidLoad() {
        if (this.autoStart) {
            this.start();
        }
    }
    disconnectedCallback() {
        this.isRunning = false;
        this.stopInterval();
    }
    initStep() {
        const step = this.normalizedSteps[this.activeStep];
        const duration = step?.duration || 0;
        this.totalDuration = duration;
        this.laps = [];
        this.isAlerting = false;
        this.activeStepColor = step?.color;
        if (this.mode === 'stopwatch') {
            this.currentTime = 0;
        }
        else {
            this.currentTime = this.precision === 'milliseconds' ? duration * 1000 : duration;
        }
    }
    playSound(type) {
        if (!this.enableSound)
            return;
        try {
            const ctx = new (window.AudioContext || window.webkitAudioContext)();
            const osc = ctx.createOscillator();
            const gain = ctx.createGain();
            osc.connect(gain);
            gain.connect(ctx.destination);
            if (type === 'tick') {
                osc.frequency.setValueAtTime(800, ctx.currentTime);
                gain.gain.setValueAtTime(0.1, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.1);
                osc.start();
                osc.stop(ctx.currentTime + 0.1);
            }
            else {
                osc.type = 'sine';
                osc.frequency.setValueAtTime(440, ctx.currentTime);
                osc.frequency.exponentialRampToValueAtTime(880, ctx.currentTime + 0.2);
                gain.gain.setValueAtTime(0.2, ctx.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, ctx.currentTime + 0.5);
                osc.start();
                osc.stop(ctx.currentTime + 0.5);
            }
        }
        catch (e) {
            console.warn('Audio feedback failed');
        }
    }
    notify(title, body, label) {
        if (this.enableNotifications && 'Notification' in window && Notification.permission === 'granted') {
            const t = title.replace('{{label}}', label);
            const b = body.replace('{{label}}', label);
            new Notification(t, { body: b });
        }
    }
    stopInterval() {
        if (this.timerInterval) {
            clearTimeout(this.timerInterval);
            this.timerInterval = null;
        }
    }
    emitStepEvent(type, index) {
        const step = this.normalizedSteps[index];
        if (!step)
            return;
        const payload = { index, step };
        if (type === 'next') {
            this.timerNext.emit(payload);
        }
        else if (type === 'prev') {
            this.timerPrev.emit(payload);
        }
        else {
            this.timerGoTo.emit(payload);
        }
    }
    async start() {
        if (this.isRunning)
            return;
        this.isRunning = true;
        this.timerStart.emit({ stepIndex: this.activeStep });
        const intervalMs = this.precision === 'milliseconds' ? 10 : 1000;
        const stepValue = this.precision === 'milliseconds' ? 10 : 1;
        let expected = performance.now() + intervalMs;
        const tick = () => {
            if (!this.isRunning)
                return;
            const now = performance.now();
            const drift = now - expected;
            if (this.mode === 'countdown') {
                if (this.currentTime > 0) {
                    this.currentTime -= stepValue;
                    this.checkAlert();
                    this.timerTick.emit({ remaining: this.currentTime, stepIndex: this.activeStep, mode: this.mode });
                    this.savePersistedState();
                    if (this.currentTime > 0 && this.currentTime <= 3 && this.precision === 'seconds') {
                        this.playSound('tick');
                    }
                }
                else {
                    this.playSound('complete');
                    this.handleStepComplete();
                    return;
                }
            }
            else {
                this.currentTime += stepValue;
                this.timerTick.emit({ remaining: this.currentTime, stepIndex: this.activeStep, mode: this.mode });
                this.savePersistedState();
                const target = this.precision === 'milliseconds' ? this.totalDuration * 1000 : this.totalDuration;
                if (target > 0 && this.currentTime >= target) {
                    this.handleStepComplete();
                    return;
                }
            }
            expected += intervalMs;
            this.timerInterval = setTimeout(tick, Math.max(0, intervalMs - drift));
        };
        this.timerInterval = setTimeout(tick, intervalMs);
    }
    async pause() {
        this.isRunning = false;
        if (this.timerInterval)
            clearTimeout(this.timerInterval);
        this.timerInterval = null;
        this.timerPause.emit({ stepIndex: this.activeStep });
    }
    async reset() {
        this.pause();
        this.initStep();
    }
    async next() {
        if (this.activeStep >= this.normalizedSteps.length - 1) {
            return;
        }
        this.pause();
        this.activeStep++;
        this.initStep();
        if (this.autoStart) {
            await this.start();
        }
        this.emitStepEvent('next', this.activeStep);
    }
    async prev() {
        if (this.activeStep <= 0) {
            return;
        }
        this.pause();
        this.activeStep--;
        this.initStep();
        if (this.autoStart) {
            await this.start();
        }
        this.emitStepEvent('prev', this.activeStep);
    }
    async goTo(index) {
        if (index < 0 || index >= this.normalizedSteps.length || index === this.activeStep) {
            return;
        }
        this.pause();
        this.activeStep = index;
        this.initStep();
        if (this.autoStart) {
            await this.start();
        }
        this.emitStepEvent('goto', this.activeStep);
    }
    async lap() {
        if (this.mode !== 'stopwatch')
            return;
        this.laps = [...this.laps, this.currentTime];
        this.timerLap.emit({ time: this.currentTime, lapIndex: this.laps.length - 1 });
    }
    handleKeyDown(ev) {
        if (document.activeElement !== this.el)
            return;
        if (ev.code === 'Space') {
            ev.preventDefault();
            this.isRunning ? this.pause() : this.start();
        }
        else if (ev.code === 'KeyR') {
            this.reset();
        }
        else if (ev.code === 'KeyL') {
            this.lap();
        }
        else if (ev.code === 'KeyN') {
            this.next();
        }
        else if (ev.code === 'KeyP') {
            this.prev();
        }
    }
    checkAlert() {
        if (this.mode !== 'countdown' || this.totalDuration === 0) {
            this.isAlerting = false;
            return;
        }
        const currentSeconds = this.precision === 'milliseconds' ? this.currentTime / 1000 : this.currentTime;
        const percentage = (currentSeconds / this.totalDuration) * 100;
        this.isAlerting = percentage <= this.alertThreshold;
    }
    handleStepComplete() {
        this.stopInterval();
        this.isRunning = false;
        this.timerComplete.emit({ stepIndex: this.activeStep });
        const label = this.normalizedSteps[this.activeStep]?.label || 'Timer';
        this.notify(this.notificationTitle, this.notificationBody, label);
        if (this.activeStep < this.normalizedSteps.length - 1) {
            this.activeStep++;
            this.initStep();
            this.start();
            this.emitStepEvent('next', this.activeStep);
        }
        else {
            this.timerAllComplete.emit();
            if (this.loop) {
                this.activeStep = 0;
                this.initStep();
                this.start();
                this.emitStepEvent('next', this.activeStep);
            }
        }
    }
    calculateOffset() {
        const circumference = 283; // 2 * PI * 45
        if (this.totalDuration === 0) {
            return this.mode === 'stopwatch' ? 0 : circumference;
        }
        const currentSeconds = this.precision === 'milliseconds' ? this.currentTime / 1000 : this.currentTime;
        let progress = 0;
        if (this.mode === 'countdown') {
            progress = (this.totalDuration - currentSeconds) / this.totalDuration;
        }
        else {
            progress = currentSeconds / this.totalDuration;
        }
        progress = Math.max(0, Math.min(1, progress));
        return circumference - (circumference * progress);
    }
    formatTime(time) {
        const isMs = this.precision === 'milliseconds';
        let totalSeconds = isMs ? Math.floor(time / 1000) : time;
        let ms = isMs ? Math.floor((time % 1000) / 10) : 0;
        if (this.format === 'human') {
            const m = Math.floor(totalSeconds / 60);
            const s = totalSeconds % 60;
            if (m > 0)
                return `${m}m ${s}s`;
            return `${s}s`;
        }
        if (this.format === 'simple') {
            return totalSeconds.toString();
        }
        const days = Math.floor(totalSeconds / 86400);
        const hArr = Math.floor((totalSeconds % 86400) / 3600);
        const mArr = Math.floor((totalSeconds % 3600) / 60);
        const sArr = totalSeconds % 60;
        let timeStr = '';
        if (days > 0) {
            timeStr = `${days}d ${hArr}:${mArr < 10 ? '0' : ''}${mArr}:${sArr < 10 ? '0' : ''}${sArr}`;
        }
        else if (hArr > 0) {
            timeStr = `${hArr}:${mArr < 10 ? '0' : ''}${mArr}:${sArr < 10 ? '0' : ''}${sArr}`;
        }
        else {
            timeStr = `${mArr}:${sArr < 10 ? '0' : ''}${sArr}`;
        }
        if (isMs) {
            timeStr += `.${ms < 10 ? '0' : ''}${ms}`;
        }
        return timeStr;
    }
    render() {
        const showCompact = this.variant === 'compact' || (this.collapse && this.isNarrow);
        return (h(Host, { key: '1d8f1a154864e347f0458302b6684857981d54d0', class: {
                'timer-has-shadow': this.useShadow,
                'timer-no-shadow': !this.useShadow,
                'timer-collapsed': this.collapse && this.isNarrow
            } }, showCompact ? this.renderCompact() : this.renderFull()));
    }
    renderFull() {
        const stepOverrides = this.activeStepColor ? { '--timer-primary-color': this.activeStepColor } : {};
        const themeMerged = { ...this.normalizedTheme, ...stepOverrides };
        return (h("div", { class: {
                'timer-container': true,
                'timer-alert': this.isAlerting
            }, style: themeMerged }, h("div", { class: "timer-steps" }, this.normalizedSteps.map((step, i) => (h("div", { class: {
                'timer-step': true,
                'timer-step-active': i === this.activeStep,
                'timer-step-completed': i < this.activeStep
            } }, h("div", { class: "timer-step-header" }, h("span", { class: "timer-step-index" }, i + 1), h("span", { class: "timer-step-label" }, step.label)))))), h("div", { class: "timer-display" }, this.progressType === 'circular' ? (h("svg", { class: "timer-progress-svg", viewBox: "0 0 100 100" }, h("circle", { class: "timer-progress-bg", cx: "50", cy: "50", r: "45" }), h("circle", { class: "timer-progress-bar", cx: "50", cy: "50", r: "45", style: {
                'stroke-dashoffset': `${this.calculateOffset()}`
            } }))) : (h("div", { class: "timer-progress-linear" }, h("div", { class: "timer-progress-linear-bg" }), h("div", { class: "timer-progress-linear-bar", style: { width: `${(1 - (this.calculateOffset() / 283)) * 100}%` } }))), h("div", { class: "timer-time-text" }, h("slot", { name: "content" }, this.formatTime(this.currentTime)))), h("div", { class: "timer-controls" }, h("ui-button", { variant: "primary", onClick: () => this.isRunning ? this.pause() : this.start(), label: this.isRunning ? 'Pause' : 'Start' }), this.mode === 'stopwatch' && (h("ui-button", { variant: "secondary", onClick: () => this.lap(), label: "Lap" })), h("ui-button", { variant: "secondary", onClick: () => this.reset(), label: "Reset" }), h("ui-button", { variant: "outline", onClick: () => this.next(), label: "Skip" })), this.laps.length > 0 && (h("div", { class: "timer-laps" }, h("div", { class: "timer-laps-title" }, "Laps"), h("div", { class: "timer-laps-list" }, this.laps.map((lapTime, i) => (h("div", { class: "timer-lap-item" }, h("span", null, "Lap ", i + 1), h("span", { class: "timer-lap-time" }, this.formatTime(lapTime))))))))));
    }
    renderCompact() {
        return (h("div", { class: {
                'timer-container-compact': true,
                'timer-alert': this.isAlerting
            }, style: this.normalizedTheme }, h("div", { class: "timer-time-text-compact" }, this.formatTime(this.currentTime)), h("div", { class: "timer-controls-compact" }, h("ui-button", { variant: "ghost", iconOnly: true, size: "sm", onClick: () => this.isRunning ? this.pause() : this.start(), icon: this.isRunning ? 'pause' : 'play', iconLibrary: "lucide", iconSize: "1.2em", ariaLabel: this.isRunning ? 'Pause' : 'Start' }), h("ui-button", { variant: "ghost", iconOnly: true, size: "sm", onClick: () => this.reset(), icon: "rotate-cw", iconLibrary: "lucide", iconSize: "1.2em", ariaLabel: "Reset" }), this.mode === 'stopwatch' && (h("ui-button", { variant: "ghost", iconOnly: true, size: "sm", onClick: () => this.lap(), icon: "flag", iconLibrary: "lucide", iconSize: "1.2em", ariaLabel: "Lap" })))));
    }
    static get watchers() { return {
        "steps": [{
                "normalizeSteps": 0
            }],
        "duration": [{
                "watchDuration": 0
            }],
        "theme": [{
                "normalizeTheme": 0
            }]
    }; }
};
Timer.style = timerCss();

export { Timer as ui_timer };
