import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const stepperCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%}.stepper-container{display:flex;width:100%;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;box-sizing:border-box}.stepper-horizontal{flex-direction:row}.stepper-vertical{flex-direction:column}.stepper-step{position:relative;display:flex;flex:1;vertical-align:top}.stepper-horizontal .stepper-step{margin-right:16px}.stepper-horizontal .stepper-step:last-child{margin-right:0}.stepper-vertical .stepper-step{flex-direction:column;flex:none;min-height:64px}.stepper-step-wrapper{display:flex;align-items:flex-start;width:100%}.stepper-label-right .stepper-step-wrapper{flex-direction:row}.stepper-label-left .stepper-step-wrapper{flex-direction:row-reverse}.stepper-label-left .stepper-step-indicator{margin-right:0;margin-left:8px}.stepper-horizontal.stepper-label-top .stepper-step-wrapper{flex-direction:column-reverse;align-items:center;text-align:center}.stepper-horizontal.stepper-label-top .stepper-step-indicator{margin-right:0;margin-top:8px}.stepper-horizontal.stepper-label-bottom .stepper-step-wrapper,.stepper-horizontal.stepper-label-vertical .stepper-step-wrapper{flex-direction:column;align-items:center;text-align:center}.stepper-horizontal.stepper-label-bottom .stepper-step-indicator,.stepper-horizontal.stepper-label-vertical .stepper-step-indicator{margin-right:0;margin-bottom:8px}.stepper-horizontal.stepper-label-top .stepper-step-title,.stepper-horizontal.stepper-label-bottom .stepper-step-title{display:block;width:100%}.stepper-horizontal.stepper-label-top .stepper-step-title .stepper-connector,.stepper-horizontal.stepper-label-bottom .stepper-step-title .stepper-connector{display:none}.stepper-horizontal.stepper-label-top .stepper-step-content,.stepper-horizontal.stepper-label-bottom .stepper-step-content{display:flex;flex-direction:column;align-items:center;width:100%}.stepper-label-top .stepper-step-label,.stepper-label-bottom .stepper-step-label{text-align:center;padding-right:0}.stepper-vertical.stepper-label-top .stepper-step-wrapper,.stepper-vertical.stepper-label-bottom .stepper-step-wrapper{flex-direction:row;align-items:flex-start;text-align:left}.stepper-vertical.stepper-label-top .stepper-step-indicator,.stepper-vertical.stepper-label-bottom .stepper-step-indicator{margin-right:8px;margin-top:0;margin-bottom:0}.stepper-vertical.stepper-label-top .stepper-step-content,.stepper-vertical.stepper-label-bottom .stepper-step-content{align-items:flex-start;text-align:left}.stepper-vertical.stepper-label-top .stepper-step-wrapper{align-items:flex-end;align-items:flex-start}.stepper-vertical.stepper-label-bottom .stepper-step-wrapper{align-items:flex-start}.stepper-step-indicator{display:flex;align-items:center;justify-content:center;width:32px;height:32px;margin-right:8px;background-color:var(--bg-primary, var(--text-standard, #ffffff));border:1px solid rgba(0, 0, 0, 0.25);border-radius:50%;transition:all 0.3s;flex-shrink:0;color:rgba(0, 0, 0, 0.25);font-size:14px;z-index:2}.stepper-shape-square .stepper-step-indicator{border-radius:4px !important}.stepper-shape-square-active .stepper-step-active .stepper-step-indicator{border-radius:4px !important;background-color:var(--bg-primary, #f6ffed) !important;border:1px solid var(--color-success, #b7eb8f) !important;padding:4px;width:38px !important;height:38px !important;position:relative;display:flex !important;align-items:center;justify-content:center;z-index:10}.stepper-shape-square-active .stepper-step-active .stepper-step-indicator::after{content:"";position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:24px;height:24px;background-color:var(--color-primary, #1677ff);border-radius:50%;z-index:-1}.stepper-shape-square-active .stepper-step-active .stepper-step-indicator .stepper-step-icon,.stepper-shape-square-active .stepper-step-active .stepper-step-indicator .stepper-step-number,.stepper-shape-square-active .stepper-step-active .stepper-step-indicator ui-icon{color:var(--text-standard, #ffffff) !important;font-size:14px;--icon-color:var(--text-standard, #ffffff)}.stepper--primary{--stepper-color:var(--color-primary, #1677ff);--stepper-color-hover:var(--color-primary, #4096ff);--stepper-success:var(--color-success, #52c41a);--stepper-error:var(--color-danger, #ff4d4f);--stepper-warning:var(--color-danger, #faad14)}.stepper--success{--stepper-color:var(--color-success, #52c41a);--stepper-color-hover:var(--color-success, #73d13d)}.stepper--warning{--stepper-color:var(--color-danger, #faad14);--stepper-color-hover:var(--color-danger, #ffc53d)}.stepper--danger{--stepper-color:var(--color-danger, #ff4d4f);--stepper-color-hover:var(--color-danger, #ff7875)}.stepper-label-vertical .stepper-step-indicator{margin-right:0;margin-bottom:8px}.stepper-step-active .stepper-step-indicator{background-color:var(--stepper-color, #1677ff);border-color:var(--stepper-color, #1677ff);color:var(--text-standard, #ffffff)}.stepper-step-active .stepper-step-label{color:var(--stepper-color, #1677ff);font-weight:600}.stepper-shape-square-active .stepper-step-active .stepper-step-label{color:var(--color-success, #52c41a) !important;font-weight:700}.stepper-step-completed .stepper-step-indicator,.stepper-step-success .stepper-step-indicator{background-color:var(--bg-primary, var(--text-standard, #ffffff));border-color:var(--color-success, #52c41a);color:var(--color-success, #52c41a)}.stepper-step-completed .stepper-step-label,.stepper-step-success .stepper-step-label{color:rgba(0, 0, 0, 0.45)}.stepper-step-failed .stepper-step-indicator,.stepper-step-error .stepper-step-indicator{background-color:var(--bg-primary, var(--text-standard, #ffffff));border-color:var(--color-danger, #ff4d4f);color:var(--color-danger, #ff4d4f)}.stepper-step-failed .stepper-step-label,.stepper-step-error .stepper-step-label{color:var(--color-danger, #ff4d4f)}.stepper-step-pending .stepper-step-indicator,.stepper-step-waiting .stepper-step-indicator{background-color:var(--bg-primary, var(--text-standard, #ffffff));border-color:rgba(0, 0, 0, 0.25);color:rgba(0, 0, 0, 0.25)}.stepper-step-info .stepper-step-indicator{background-color:var(--bg-primary, var(--text-standard, #ffffff));border-color:var(--color-primary, #1677ff);color:var(--color-primary, #1677ff)}.stepper-step-info .stepper-step-label{color:rgba(0, 0, 0, 0.45)}.stepper-step-warning .stepper-step-indicator{background-color:var(--bg-primary, var(--text-standard, #ffffff));border-color:var(--color-danger, #faad14);color:var(--color-danger, #faad14)}.stepper-step-warning .stepper-step-label{color:rgba(0, 0, 0, 0.45)}.stepper-step-disabled .stepper-step-indicator{background-color:var(--bg-primary, #f5f5f5);border-color:var(--border-default, #d9d9d9);color:rgba(0, 0, 0, 0.25);cursor:not-allowed}.stepper-step-disabled .stepper-step-label{color:rgba(0, 0, 0, 0.25);cursor:not-allowed}.stepper-step-icon{font-style:normal;line-height:0;text-align:center;text-transform:none;vertical-align:-0.125em;text-rendering:optimizeLegibility;-webkit-font-smoothing:antialiased}.stepper-progress-circle{position:absolute;top:-1px;left:-1px;width:34px;height:34px;transform:rotate(-90deg)}.stepper-progress-bg{fill:none;stroke:rgba(0, 0, 0, 0.06);stroke-width:2px}.stepper-progress-value{fill:none;stroke:var(--color-primary, #1677ff);stroke-width:2.5px;stroke-linecap:round;transition:stroke-dashoffset 0.3s ease}.stepper-sm .stepper-progress-circle{width:26px;height:26px}.stepper-step-image-icon{width:20px;height:20px;border-radius:50%;object-fit:cover}.stepper-step-custom-icon{display:inline-flex;align-items:center;justify-content:center;width:100%;height:100%}.stepper-step-custom-icon svg{width:16px;height:16px}.stepper-step-content{display:flex;flex-direction:column;flex:1;min-height:32px;justify-content:center}.stepper-step-label{position:relative;display:inline-block;padding-right:16px;color:rgba(0, 0, 0, 0.45);font-size:14px;line-height:32px;white-space:nowrap}.stepper-vertical .stepper-step-label{line-height:32px}.stepper-step-description{color:rgba(0, 0, 0, 0.45);font-size:14px;line-height:1.5;white-space:normal}.stepper-step-title{display:flex;align-items:center;position:relative}.stepper-connector{position:absolute;background-color:rgba(0, 0, 0, 0.06);transition:background-color 0.3s}.stepper-horizontal .stepper-connector{position:relative;flex:1;height:1px;margin:0 8px;background-color:rgba(0, 0, 0, 0.06);opacity:1;visibility:visible}.stepper-horizontal.stepper-label-bottom .stepper-connector{position:absolute;top:16px;left:50%;width:calc(100% + 16px);margin:0}.stepper-horizontal.stepper-label-top .stepper-connector{position:absolute;top:auto;bottom:16px;left:50%;width:calc(100% + 16px);margin:0}.stepper-horizontal.stepper-label-top .stepper-step,.stepper-horizontal.stepper-label-bottom .stepper-step{position:relative}.stepper-vertical .stepper-connector{top:36px;left:16px;width:1px;height:calc(100% - 40px);flex:var(--icon-line-flex, none)}.stepper-step-completed .stepper-connector,.stepper-step-success .stepper-connector,.stepper-shape-square-active .stepper-step-active .stepper-connector,.stepper-shape-square-active .stepper-connector-active{background-color:var(--color-success, #52c41a) !important;height:2px}.stepper-dot .stepper-step-indicator{width:8px;height:8px;margin-right:8px;margin-left:0;border:none;background-color:rgba(0, 0, 0, 0.25)}.stepper-dot .stepper-dot-inner{display:none}.stepper-dot .stepper-step-active .stepper-step-indicator{width:10px;height:10px;background-color:var(--color-primary, #1677ff)}.stepper-dot.stepper-horizontal .stepper-connector{position:absolute;top:4px;left:16px;width:calc(100% - 24px);margin:0}.stepper-dot.stepper-horizontal.stepper-label-bottom .stepper-connector{top:4px;left:50%;width:calc(100% + 16px);margin:0}.stepper-dot.stepper-horizontal.stepper-label-top .stepper-connector{top:auto;bottom:4px;left:50%;width:calc(100% + 16px);margin:0}.stepper-dot.stepper-vertical .stepper-connector{left:4px;top:10px}.stepper-dot .stepper-step-wrapper{align-items:center}.stepper-dot .stepper-step-content{min-height:auto}.stepper-sm .stepper-step-indicator{width:24px;height:24px;font-size:12px}.stepper-sm .stepper-step-label{font-size:14px;line-height:24px}.stepper-sm.stepper-horizontal .stepper-connector{top:12px}.stepper-lg .stepper-step-indicator{width:40px;height:40px;font-size:18px}.stepper-lg .stepper-step-label{font-size:16px;line-height:40px}.stepper-variant-inline{display:inline-flex;gap:0;border:1px solid var(--border-default, #d9d9d9);border-radius:6px;padding:0;background:var(--bg-primary, #ffffff);overflow:hidden}.stepper-variant-inline .stepper-step{padding:10px 20px;margin:0;border-right:1px solid var(--border-default, #d9d9d9);background:var(--bg-primary, #fafafa);transition:all 0.3s;position:relative}.stepper-variant-inline .stepper-step:last-child{border-right:none}.stepper-variant-inline .stepper-step:hover{background:var(--bg-primary, #f0f0f0)}.stepper-variant-inline .stepper-step-active{background:var(--color-primary, #1677ff);color:var(--text-standard, #ffffff)}.stepper-variant-inline .stepper-step-active .stepper-step-label{color:var(--text-standard, #ffffff);font-weight:600}.stepper-variant-inline .stepper-step-completed{background:var(--bg-primary, #f6ffed)}.stepper-variant-inline .stepper-connector{display:none}.stepper-variant-inline .stepper-step-indicator{width:18px;height:18px;font-size:11px}.stepper-variant-inline .stepper-step-wrapper{align-items:center}.stepper-variant-inline .stepper-step-content{min-height:auto}.stepper-variant-inline .stepper-step-label{line-height:18px;font-size:13px}.stepper-sub-steps{margin-top:8px;padding-left:12px;display:flex;flex-direction:column;gap:4px}.stepper-sub-step{display:flex;align-items:center;gap:8px;font-size:12px;color:rgba(0, 0, 0, 0.45)}.sub-step-dot{width:6px;height:6px;border-radius:50%;background-color:rgba(0, 0, 0, 0.25)}.stepper-sub-step-active .sub-step-label{color:var(--color-primary, #1677ff);font-weight:500}.stepper-sub-step-active .sub-step-dot{background-color:var(--color-primary, #1677ff)}.stepper-sub-step-completed .sub-step-dot{background-color:var(--color-success, #52c41a)}.stepper-controls{display:flex;gap:8px;margin-top:24px;justify-content:flex-end}.stepper-btn{padding:4px 15px;border-radius:6px;border:1px solid var(--border-default, #d9d9d9);background:var(--bg-primary, #ffffff);cursor:pointer;transition:all 0.2s}.stepper-btn:hover{color:var(--color-primary, #4096ff);border-color:var(--color-primary, #4096ff)}.stepper-btn.prev:hover{color:var(--color-primary, #4096ff);border-color:var(--color-primary, #4096ff)}.stepper-btn:disabled{color:rgba(0, 0, 0, 0.25);background-color:var(--bg-primary, #f5f5f5);border-color:var(--border-default, #d9d9d9);cursor:not-allowed}.stepper-step-clickable{cursor:pointer}.stepper-step-clickable:hover .stepper-step-indicator{border-color:var(--color-primary, #1677ff);color:var(--color-primary, #1677ff)}.stepper-step-clickable:hover .stepper-step-label{color:var(--color-primary, #1677ff)}.stepper-step-error-message{color:var(--color-danger, #ff4d4f);font-size:12px;margin-top:4px}.stepper-variant-navigation{border-bottom:1px solid rgba(0, 0, 0, 0.06);padding-bottom:8px}.stepper-variant-navigation .stepper-step{padding:8px 16px;margin:0;transition:background-color 0.3s}.stepper-variant-navigation .stepper-step::after{content:"";position:absolute;bottom:-8px;left:0;width:100%;height:2px;background-color:transparent;transition:all 0.3s}.stepper-variant-navigation .stepper-step-active::after{background-color:var(--color-primary, #1677ff)}.stepper-variant-navigation .stepper-step:hover{background-color:rgba(0, 0, 0, 0.02)}.stepper-variant-navigation .stepper-connector{display:none}.stepper-variant-panel{gap:0;background:transparent;padding:0;position:relative}.stepper-variant-panel .stepper-step{background:var(--bg-primary, #ffffff);border-radius:8px;padding:20px 24px;border:2px solid var(--border-subtle, #e8e8e8);transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);margin:0;margin-right:24px;flex:1;box-shadow:0 1px 2px rgba(0, 0, 0, 0.04);position:relative}.stepper-variant-panel .stepper-step:last-child{margin-right:0}.stepper-variant-panel .stepper-step::after{content:"";position:absolute;right:-14px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:14px solid transparent;border-bottom:14px solid transparent;border-left:14px solid var(--border-subtle, #ffffff);z-index:2}.stepper-variant-panel .stepper-step::before{content:"";position:absolute;right:-16px;top:50%;transform:translateY(-50%);width:0;height:0;border-top:16px solid transparent;border-bottom:16px solid transparent;border-left:16px solid var(--border-subtle, #e8e8e8);z-index:1}.stepper-variant-panel .stepper-step:last-child::after,.stepper-variant-panel .stepper-step:last-child::before{display:none}.stepper-variant-panel .stepper-step:hover{border-color:var(--border-default, #d9d9d9);box-shadow:0 2px 4px rgba(0, 0, 0, 0.08)}.stepper-variant-panel .stepper-step-active{background:linear-gradient(135deg, var(--bg-primary, #e6f4ff) 0%, var(--bg-primary, #f0f8ff) 100%);border-color:var(--color-primary, #1677ff);box-shadow:0 4px 12px rgba(22, 119, 255, 0.15);transform:scale(1.02)}.stepper-variant-panel .stepper-step-active::after{border-left-color:var(--border-subtle, #f0f8ff)}.stepper-variant-panel .stepper-step-active::before{border-left-color:var(--color-primary, #1677ff)}.stepper-variant-panel .stepper-step-active .stepper-step-indicator{background:linear-gradient(135deg, var(--color-primary, #1677ff) 0%, var(--color-primary, #4096ff) 100%);box-shadow:0 2px 8px rgba(22, 119, 255, 0.3)}.stepper-variant-panel .stepper-step-completed{background:var(--bg-primary, #f6ffed);border-color:var(--color-success, #b7eb8f)}.stepper-variant-panel .stepper-step-completed::after{border-left-color:var(--border-subtle, #f6ffed)}.stepper-variant-panel .stepper-step-completed::before{border-left-color:var(--color-success, #b7eb8f)}.stepper-variant-panel .stepper-step-completed .stepper-step-indicator{background:linear-gradient(135deg, var(--color-success, #52c41a) 0%, var(--color-success, #73d13d) 100%)}.stepper-variant-panel .stepper-step-label{font-weight:600;color:rgba(0, 0, 0, 0.85)}.stepper-variant-panel .stepper-step-active .stepper-step-label{color:var(--color-primary, #1677ff)}.stepper-variant-panel .stepper-connector{display:none}@media (max-width: 768px){.stepper-responsive.stepper-horizontal{flex-direction:column}.stepper-responsive.stepper-horizontal .stepper-step{margin-right:0;margin-bottom:16px}}.stepper-content-slot{display:none;margin-top:12px;width:100%}.stepper-step-active .stepper-content-slot{display:block}.stepper-vertical .stepper-content-slot{padding-left:0}.stepper-progress-bar{position:relative;width:100%;height:8px;background:var(--bg-primary, #e5e7eb);border-radius:4px;margin-bottom:24px;overflow:hidden}.progress-fill{height:100%;background:linear-gradient(90deg, var(--color-success, #3dcd58), var(--color-success, #22c55e));border-radius:4px;transition:width 0.4s ease;position:relative}.progress-text{position:absolute;top:12px;right:0;font-size:0.75rem;font-weight:600;color:var(--text-muted, #6b7280)}.step-optional-badge{font-size:10px;background-color:var(--bg-primary, #f5f5f5);color:var(--text-secondary, #595959);padding:2px 6px;border-radius:10px;margin-left:8px;margin-top:4px;display:inline-block;vertical-align:middle}.scroll-indicator{position:absolute;top:0;bottom:0;width:24px;pointer-events:none;z-index:10}.scroll-indicator--left{left:0;background:linear-gradient(to right, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)}.scroll-indicator--right{right:0;background:linear-gradient(to left, rgb(255, 255, 255) 0%, rgba(255, 255, 255, 0) 100%)}.stepper--snake-layout .snake-container{display:flex;flex-direction:column;gap:0;width:100%}.stepper--snake-layout .snake-row{display:flex;align-items:center;justify-content:space-between;padding:16px 0;position:relative;width:100%}.stepper--snake-layout .snake-row--odd{flex-direction:row-reverse}.stepper--snake-layout .stepper-item{position:relative;padding:0;flex:0 0 10%;max-width:10%;display:flex;justify-content:center;z-index:2;box-sizing:border-box}.stepper--snake-layout .step-icon-wrapper{width:32px;height:32px;background:var(--bg-primary, #e5e7eb);border-radius:50%;transition:all 0.2s;font-size:0.75rem;font-weight:700;color:var(--text-muted, #6b7280);display:flex;align-items:center;justify-content:center;z-index:2;position:relative;background-color:var(--bg-primary, var(--text-standard, #ffffff))}.stepper--snake-layout .stepper-item--active .step-icon-wrapper{width:36px;height:36px;background:var(--color-primary, #1677ff);color:var(--text-standard, #ffffff);transform:scale(1.1);box-shadow:0 4px 10px rgba(0, 0, 0, 0.15)}.stepper--snake-layout .stepper-item--completed .step-icon-wrapper{background:var(--color-success, #52c41a);color:var(--text-standard, #ffffff)}.stepper--snake-layout .stepper-item.has-connector::after{content:"";position:absolute;top:50%;height:2px;background:var(--bg-primary, #e5e7eb);z-index:-1;width:100%;left:50%;transform:translateY(-50%)}.stepper--snake-layout .snake-row--odd .stepper-item.has-connector::after{left:auto;right:50%}.stepper--snake-layout .stepper-item--completed.has-connector::after{background:var(--color-success, #52c41a)}.stepper--snake-layout .snake-connector-turn{position:absolute;top:50%;left:50%;transform:translateX(-50%);width:2px;height:64px;background:var(--bg-primary, #e5e7eb);z-index:-2}.stepper--snake-layout .stepper-item--completed.has-row-connector .snake-connector-turn{background:var(--color-success, #52c41a)}`;

const Stepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stepperPrevious = createEvent(this, "stepperPrevious");
        this.stepperNext = createEvent(this, "stepperNext");
        this.stepperFinish = createEvent(this, "stepperFinish");
        this.stepperFail = createEvent(this, "stepperFail");
        this.stepperChange = createEvent(this, "stepperChange");
        this.stepperValidationError = createEvent(this, "stepperValidationError");
        this.progressUpdate = createEvent(this, "progressUpdate");
        this.stepValidation = createEvent(this, "stepValidation");
        this.stepLoading = createEvent(this, "stepLoading");
    }
    /**
     * Array of steps to display
     */
    /**
     * Steps can be provided as an array or a JSON string in the attribute
     */
    steps = [];
    /**
     * Internal normalized steps
     */
    normalizedSteps = [];
    /**
     * Orientation of the stepper (horizontal or vertical)
     */
    orientation = 'horizontal';
    /**
     * Size of the stepper
     */
    size = 'md';
    /**
     * Current active step index (0-based)
     */
    activeStep = 0;
    /**
     * Whether to show step numbers
     */
    showNumbers = true;
    /**
     * Whether to show step descriptions
     */
    showDescriptions = false;
    /**
     * Show optional control buttons (Next/Previous/Finish/Failed)
     */
    showControls = false;
    /**
     * Customize control button labels
     */
    labelPrev = 'Previous';
    labelNext = 'Next';
    labelFinish = 'Finish';
    labelFail = 'Mark Failed';
    /**
     * Events emitted when control buttons are clicked
     */
    stepperPrevious;
    stepperNext;
    stepperFinish;
    stepperFail;
    /**
     * Custom icon for each status (optional)
     */
    customIcons;
    /**
     * Flow type: linear or non-linear
     */
    flow = 'linear';
    /**
     * Whether to use Shadow DOM
     */
    shadow = true;
    /**
     * Theme configuration with CSS variables
     */
    theme;
    /**
     * Enable keyboard navigation
     */
    keyboardNavigation = true;
    /**
     * Enable responsive collapse/overflow
     */
    responsive = true;
    /**
     * Maximum number of steps to show before collapsing
     */
    maxVisibleSteps = 5;
    progressDot = false;
    /**
     * Default library for icons
     */
    iconLibrary = 'default';
    /**
     * Label placement (horizontal or vertical) - DEPRECATED: use labelPosition instead
     */
    labelPlacement = 'horizontal';
    /**
     * Label position relative to step indicator
     */
    labelPosition = 'right';
    /**
     * Stepper variant style
     */
    variant = 'default';
    colorScheme = 'primary';
    animated = true;
    showProgress = false;
    validateBeforeNext;
    mobileBreakpoint = 768;
    allowStepClick = true;
    showTooltips = true;
    compact = false;
    stepsPerPage = 0;
    scrollable = true;
    clickable = false;
    iconLineWidth;
    iconLineHeight;
    iconLineFlex;
    /**
     * Shape of the step indicator (circle, square, or square-active)
     */
    stepShape = 'circle';
    /**
     * Validation errors map
     */
    validationErrors = new Map();
    isMobile = false;
    isLoading = false;
    get host() { return getElement(this); }
    /**
     * Event emitted when active step changes
     */
    stepperChange;
    /**
     * Event emitted when validation fails
     */
    stepperValidationError;
    progressUpdate;
    stepValidation;
    stepLoading;
    /**
     * Programmatic API: Go to next step
     */
    async next(options = {}) {
        return this.navigateToStep(this.activeStep + 1, options);
    }
    /**
     * Programmatic API: Go to previous step
     */
    async prev(options = {}) {
        return this.navigateToStep(this.activeStep - 1, options);
    }
    /**
     * Programmatic API: Go to specific step
     */
    async goTo(stepIndex, options = {}) {
        return this.navigateToStep(stepIndex, options);
    }
    /**
     * Programmatic API: Mark step as completed
     */
    async complete(stepIndex) {
        const index = stepIndex ?? this.activeStep;
        if (index >= 0 && index < this.normalizedSteps.length) {
            this.updateStepStatus(index, 'completed');
        }
    }
    /**
     * Programmatic API: Mark step as failed
     */
    async fail(stepIndex, errorMessage) {
        const index = stepIndex ?? this.activeStep;
        if (index >= 0 && index < this.normalizedSteps.length) {
            this.updateStepStatus(index, 'failed');
            if (errorMessage) {
                this.validationErrors.set(String(this.normalizedSteps[index].id), errorMessage);
            }
        }
    }
    /**
     * Get current step
     */
    async getCurrentStep() {
        return this.activeStep >= 0 && this.activeStep < this.normalizedSteps.length
            ? this.normalizedSteps[this.activeStep]
            : null;
    }
    /**
     * Get all steps
     */
    async getSteps() {
        return [...this.normalizedSteps];
    }
    /**
     * Validate current step
     */
    async validateCurrentStep() {
        return this.validateStep(this.activeStep);
    }
    async navigateToStep(targetIndex, options = {}) {
        if (targetIndex < 0 || targetIndex >= this.normalizedSteps.length) {
            return false;
        }
        // Removed unused variable currentStep
        const targetStep = this.normalizedSteps[targetIndex];
        // Check if navigation is allowed
        if (!options.force && !this.canNavigateTo(targetIndex)) {
            return false;
        }
        // Validate current step if not skipping validation
        if (!options.skipValidation && this.flow === 'linear' && targetIndex > this.activeStep) {
            const isValid = await this.validateStep(this.activeStep);
            if (!isValid) {
                return false;
            }
        }
        const previousIndex = this.activeStep;
        this.activeStep = targetIndex;
        // Update step statuses
        this.updateStepStatuses();
        // Emit change event
        this.stepperChange.emit({
            index: targetIndex,
            step: targetStep,
            previousIndex
        });
        return true;
    }
    handleActiveStepChange() {
        this.updateStepStatuses();
    }
    canNavigateTo(targetIndex) {
        if (this.flow === 'non-linear') {
            return true;
        }
        // In linear flow, can only go to completed steps or next step
        return targetIndex <= this.activeStep + 1;
    }
    async validateStep(stepIndex) {
        const step = this.normalizedSteps[stepIndex];
        // First run the global validateBeforeNext hook if provided
        if (this.validateBeforeNext) {
            this.isLoading = true;
            this.stepLoading.emit(true);
            try {
                const isValid = await this.validateBeforeNext(stepIndex);
                this.stepValidation.emit({ step: stepIndex, valid: isValid });
                if (!isValid) {
                    const errMsg = 'Validation failed for the current step';
                    this.validationErrors.set(String(step?.id || stepIndex), errMsg);
                    if (step) {
                        this.stepperValidationError.emit({ index: stepIndex, step, error: errMsg });
                    }
                    return false;
                }
            }
            finally {
                this.isLoading = false;
                this.stepLoading.emit(false);
            }
        }
        if (!step) {
            return true;
        }
        // Check for ui-step element validate hook
        if (step.node && typeof step.node.validate === 'function') {
            this.isLoading = true;
            this.stepLoading.emit(true);
            try {
                const isValid = await step.node.validate();
                if (!isValid) {
                    const errorMessage = 'Step validation failed';
                    this.validationErrors.set(String(step.id), errorMessage);
                    this.stepperValidationError.emit({ index: stepIndex, step, error: errorMessage });
                    return false;
                }
            }
            catch (error) {
                const errorMessage = `Validation error: ${error.message}`;
                this.validationErrors.set(String(step.id), errorMessage);
                this.stepperValidationError.emit({ index: stepIndex, step, error: errorMessage });
                return false;
            }
            finally {
                this.isLoading = false;
                this.stepLoading.emit(false);
            }
        }
        if (!step.validator) {
            return true;
        }
        try {
            const isValid = await step.validator.validate(step, step.data);
            if (!isValid) {
                const errorMessage = step.validator.errorMessage || 'Validation failed';
                this.validationErrors.set(String(step.id), errorMessage);
                this.stepperValidationError.emit({
                    index: stepIndex,
                    step,
                    error: errorMessage
                });
                return false;
            }
            // Clear any previous errors
            this.validationErrors.delete(String(step.id));
            return true;
        }
        catch (error) {
            const errorMessage = `Validation error: ${error.message}`;
            this.validationErrors.set(String(step.id), errorMessage);
            this.stepperValidationError.emit({
                index: stepIndex,
                step,
                error: errorMessage
            });
            return false;
        }
    }
    updateStepStatuses() {
        const specialStatuses = ['failed', 'error', 'waiting', 'warning', 'info', 'disabled'];
        this.normalizedSteps = this.normalizedSteps.map((step, index) => {
            // If the step already has a special status, preserve it
            if (step.status && specialStatuses.includes(step.status)) {
                return step;
            }
            let status = 'pending';
            if (index < this.activeStep) {
                status = 'completed';
            }
            else if (index === this.activeStep) {
                status = 'active';
            }
            return { ...step, status };
        });
    }
    updateStepStatus(stepIndex, status) {
        if (stepIndex >= 0 && stepIndex < this.normalizedSteps.length) {
            this.normalizedSteps = this.normalizedSteps.map((step, index) => index === stepIndex ? { ...step, status } : step);
        }
    }
    getStepIcon(status) {
        if (this.customIcons && this.customIcons[status]) {
            return this.customIcons[status];
        }
        switch (status) {
            case 'completed':
            case 'success':
                return this.iconLibrary === 'lucide' ? 'check' : 'check';
            case 'failed':
            case 'error':
                return this.iconLibrary === 'lucide' ? 'x' : 'x';
            case 'waiting':
            case 'pending':
                return this.iconLibrary === 'lucide' ? 'clock' : 'clock';
            case 'info':
                return this.iconLibrary === 'lucide' ? 'info' : 'info';
            case 'active':
                return this.iconLibrary === 'lucide' ? 'circle-dot' : 'circle-dot';
            case 'disabled':
                return this.iconLibrary === 'lucide' ? 'ban' : 'ban';
            default:
                return this.iconLibrary === 'lucide' ? 'circle' : 'circle';
        }
    }
    renderProgressCircle(percent) {
        const radius = 14;
        const circumference = 2 * Math.PI * radius;
        const offset = circumference - (percent / 100) * circumference;
        return (h("svg", { class: "stepper-progress-circle", viewBox: "0 0 32 32" }, h("circle", { class: "stepper-progress-bg", cx: "16", cy: "16", r: radius }), h("circle", { class: "stepper-progress-value", cx: "16", cy: "16", r: radius, "stroke-dasharray": circumference, "stroke-dashoffset": offset })));
    }
    renderStepIcon(step, index) {
        // Custom SVG icon or library icon name
        if (step.svgIcon) {
            // If it looks like a custom SVG (contains <svg), render as is, otherwise use ui-icon
            if (step.svgIcon.includes('<svg')) {
                return h("span", { class: "stepper-step-custom-icon", innerHTML: sanitizeHTML(step.svgIcon) });
            }
            return (h("span", { class: "stepper-step-custom-icon" }, h("ui-icon", { name: step.svgIcon, library: step.iconLibrary || this.iconLibrary, size: "1.25rem" })));
        }
        // Image URL icon
        if (step.iconUrl) {
            return h("img", { src: step.iconUrl, alt: step.label, class: "stepper-step-image-icon" });
        }
        // Custom text/emoji icon
        if (step.icon) {
            if (this.iconLibrary === 'lucide') {
                return h("span", { class: "stepper-step-icon" }, h("ui-icon", { name: step.icon, library: "lucide", size: "1.2em" }));
            }
            return h("span", { class: "stepper-step-icon", "aria-hidden": "true" }, step.icon);
        }
        // Default: show number or status icon
        if (this.showNumbers && step.status !== 'active' && step.status !== 'completed' && step.status !== 'success' && step.status !== 'failed') {
            return h("span", { class: "stepper-step-number", "aria-hidden": "true" }, index + 1);
        }
        const statusIcon = this.getStepIcon(step.status);
        return (h("span", { class: "stepper-step-icon", "aria-hidden": "true" }, h("ui-icon", { name: statusIcon, library: this.iconLibrary === 'default' ? 'lucide' : this.iconLibrary, size: "1.2em" })));
    }
    getStepClasses(step, index) {
        const classes = [
            'stepper-step',
            `stepper-step-${this.size}`,
            `stepper-step-${step.status}`
        ];
        if (index === this.activeStep) {
            classes.push('stepper-step-active');
        }
        if (index < this.activeStep) {
            classes.push('stepper-step-completed');
        }
        return classes.join(' ');
    }
    parseSteps(input) {
        if (Array.isArray(input)) {
            return input;
        }
        if (typeof input === 'string' && input.trim().length) {
            try {
                const parsed = JSON.parse(input);
                if (Array.isArray(parsed)) {
                    return parsed;
                }
            }
            catch (e) {
                console.warn('ui-stepper: failed to parse steps JSON, using defaults', e);
            }
        }
        // Fallback default steps
        return [
            { id: '1', label: 'Step 1', status: 'completed' },
            { id: '2', label: 'Step 2', status: 'active' },
            { id: '3', label: 'Step 3', status: 'waiting' },
            { id: '4', label: 'Step 4', status: 'waiting' },
        ];
    }
    stepsChanged(newVal) {
        this.normalizedSteps = this.parseSteps(newVal);
    }
    componentWillLoad() {
        this.normalizedSteps = this.parseSteps(this.steps);
        if (this.normalizedSteps.length === 0 || (this.normalizedSteps.length === 4 && this.normalizedSteps[0].label === 'Step 1')) {
            const childSteps = this.scanStepsFromChildren();
            if (childSteps.length > 0) {
                this.normalizedSteps = childSteps;
            }
        }
        this.updateStepStatuses();
    }
    scanStepsFromChildren() {
        const stepEls = Array.from(this.host.querySelectorAll('ui-step'));
        return stepEls.map((el, index) => ({
            id: el.id || `step-${index}`,
            label: el.stepTitle || el.getAttribute('step-title') || `Step ${index + 1}`,
            description: el.subtitle || el.getAttribute('subtitle') || '',
            status: el.status || el.getAttribute('status') || 'pending',
            icon: el.icon || el.getAttribute('icon') || '',
            disabled: el.disabled || el.hasAttribute('disabled'),
            node: el
        }));
    }
    onPrevClick = () => {
        const idx = Math.max(0, this.activeStep - 1);
        const step = this.normalizedSteps[idx];
        this.stepperPrevious.emit({ index: idx, step });
    };
    onNextClick = () => {
        const idx = Math.min(this.normalizedSteps.length - 1, this.activeStep + 1);
        const step = this.normalizedSteps[idx];
        this.stepperNext.emit({ index: idx, step });
    };
    onFinishClick = () => {
        const idx = this.activeStep;
        const step = this.normalizedSteps[idx];
        this.stepperFinish.emit({ index: idx, step });
    };
    onFailClick = () => {
        const idx = this.activeStep;
        const step = this.normalizedSteps[idx];
        this.stepperFail.emit({ index: idx, step });
    };
    handleKeyDown = (event) => {
        if (!this.keyboardNavigation)
            return;
        switch (event.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                event.preventDefault();
                this.prev();
                break;
            case 'ArrowRight':
            case 'ArrowDown':
                event.preventDefault();
                this.next();
                break;
            case 'Home':
                event.preventDefault();
                this.goTo(0);
                break;
            case 'End':
                event.preventDefault();
                this.goTo(this.normalizedSteps.length - 1);
                break;
        }
    };
    handleStepClick = (index) => {
        if (this.flow === 'non-linear' || index <= this.activeStep + 1) {
            this.goTo(index);
        }
    };
    getProgress() {
        if (this.normalizedSteps.length === 0)
            return 0;
        return Math.round(((this.activeStep + 1) / this.normalizedSteps.length) * 100);
    }
    renderSnakeLayout(containerClasses, themeVars) {
        const stepsPerRow = this.stepsPerPage || 10;
        const rows = [];
        for (let i = 0; i < this.normalizedSteps.length; i += stepsPerRow) {
            rows.push(this.normalizedSteps.slice(i, i + stepsPerRow));
        }
        const progress = this.getProgress();
        return (h("div", { class: `${containerClasses} stepper--snake-layout`, style: themeVars, role: "navigation", "aria-label": "Step progress" }, this.showProgress && (h("div", { class: "stepper-progress-bar", role: "progressbar", "aria-valuenow": progress, "aria-valuemin": 0, "aria-valuemax": 100 }, h("div", { class: "progress-fill", style: { width: `${progress}%` } }), h("span", { class: "progress-text", "aria-live": "polite" }, progress, "% Complete (", this.activeStep + 1, "/", this.normalizedSteps.length, ")"))), h("div", { class: "snake-container" }, rows.map((rowSteps, rowIdx) => {
            const isEvenRow = rowIdx % 2 === 0;
            return (h("div", { class: {
                    'snake-row': true,
                    'snake-row--even': isEvenRow,
                    'snake-row--odd': !isEvenRow
                } }, rowSteps.map((step, stepInRowIdx) => {
                const globalIdx = rowIdx * stepsPerRow + stepInRowIdx;
                const isLastInRow = stepInRowIdx === rowSteps.length - 1;
                const isLastStep = globalIdx === this.normalizedSteps.length - 1;
                const isClickable = this.flow === 'non-linear' || globalIdx <= this.activeStep;
                return (h("div", { class: {
                        'stepper-item': true,
                        'stepper-item--active': globalIdx === this.activeStep,
                        'stepper-item--completed': globalIdx < this.activeStep,
                        'stepper-item--pending': globalIdx > this.activeStep,
                        'stepper-item--clickable': isClickable,
                        'has-connector': !isLastInRow,
                        'has-row-connector': isLastInRow && !isLastStep
                    }, onClick: () => this.handleStepClick(globalIdx), role: "button", title: step.label }, h("div", { class: "step-icon-wrapper" }, this.isLoading && globalIdx === this.activeStep ? (h("ui-icon", { name: "refresh-cw", class: "fa-spin", library: "lucide", size: "1.2em" })) : (h("span", { class: "step-icon" }, this.renderStepIcon(step, globalIdx)))), !isLastInRow && (h("div", { class: "snake-connector-horizontal" })), isLastInRow && !isLastStep && (h("div", { class: "snake-connector-turn" }))));
            })));
        }))));
    }
    render() {
        // Compute effective label position (support legacy labelPlacement)
        let effectiveLabelPosition = this.labelPosition;
        if (this.labelPlacement === 'vertical') {
            effectiveLabelPosition = 'bottom';
        }
        const containerClasses = [
            'stepper-container',
            `stepper-${this.orientation}`,
            `stepper-${this.size}`,
            `stepper--${this.colorScheme}`,
            this.responsive ? 'stepper-responsive' : '',
            this.progressDot ? 'stepper-dot' : '',
            `stepper-label-${effectiveLabelPosition}`,
            `stepper-variant-${this.variant}`,
            this.animated ? 'stepper--animated' : '',
            this.clickable ? 'stepper--clickable' : '',
            this.compact ? 'stepper--compact' : '',
            this.scrollable ? 'stepper--scrollable' : '',
            `stepper-shape-${this.stepShape}`
        ].join(' ');
        const themeVars = this.theme ? {
            '--stepper-primary-color': this.theme.primaryColor,
            '--stepper-secondary-color': this.theme.secondaryColor,
            '--stepper-success-color': this.theme.successColor,
            '--stepper-error-color': this.theme.errorColor,
            '--stepper-warning-color': this.theme.warningColor,
            '--stepper-info-color': this.theme.infoColor,
            '--stepper-text-color': this.theme.textColor,
            '--stepper-background-color': this.theme.backgroundColor,
            '--stepper-border-color': this.theme.borderColor,
            '--stepper-font-size': this.theme.fontSize,
            '--stepper-font-family': this.theme.fontFamily,
        } : {};
        if (this.iconLineWidth)
            themeVars['--icon-line-width'] = this.iconLineWidth;
        if (this.iconLineHeight)
            themeVars['--icon-line-height'] = this.iconLineHeight;
        if (this.iconLineFlex !== undefined)
            themeVars['--icon-line-flex'] = this.iconLineFlex.toString();
        // Use special snake layout rendering for snack variant
        if (this.variant === 'snack' && this.orientation === 'horizontal') {
            return this.renderSnakeLayout(containerClasses, themeVars);
        }
        const progress = this.getProgress();
        return (h("div", { class: containerClasses, style: themeVars, role: "tablist", "aria-orientation": this.orientation, "aria-label": "Step navigation", tabindex: this.keyboardNavigation ? 0 : -1, onKeyDown: this.handleKeyDown }, this.showProgress && (h("div", { class: "stepper-progress-bar", role: "progressbar", "aria-valuenow": progress, "aria-valuemin": 0, "aria-valuemax": 100 }, h("div", { class: "progress-fill", style: { width: `${progress}%` } }), h("span", { class: "progress-text", "aria-live": "polite" }, progress, "% Complete (", this.activeStep + 1, "/", this.normalizedSteps.length, ")"))), this.scrollable && this.orientation === 'horizontal' && (h("div", { class: "scroll-indicator scroll-indicator--left" })), h("div", { class: "steps-wrapper", role: "list", style: { display: 'flex', flexDirection: this.orientation === 'horizontal' ? 'row' : 'column', width: '100%' } }, this.normalizedSteps.map((step, index) => {
            const isLast = index === this.normalizedSteps.length - 1;
            const isClickable = this.flow === 'non-linear' || index <= this.activeStep;
            const connectorStatus = (step.status === 'completed' || step.status === 'success')
                ? 'completed'
                : step.status === 'failed'
                    ? 'failed'
                    : step.status === 'active'
                        ? 'active'
                        : 'pending';
            const stepClasses = [
                ...this.getStepClasses(step, index).split(' '),
                isClickable ? 'stepper-step-clickable' : '',
                this.validationErrors.has(String(step.id)) ? 'stepper-step-error' : ''
            ].filter(Boolean).join(' ');
            return (h("div", { key: step.id, class: stepClasses, style: { position: 'relative' }, role: "tab", "aria-selected": index === this.activeStep, "aria-controls": `step-panel-${step.id}`, "aria-disabled": !isClickable, tabindex: isClickable ? 0 : -1, onClick: () => this.handleStepClick(index), onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.handleStepClick(index);
                    }
                } }, h("div", { class: "stepper-step-wrapper" }, h("div", { class: "stepper-step-indicator", style: { position: 'relative' }, "aria-label": `Step ${index + 1}: ${step.label} - ${step.status}` }, step.percent !== undefined && step.status === 'active' && !this.progressDot ? (this.renderProgressCircle(step.percent)) : this.progressDot ? (h("span", { class: "stepper-dot-inner", "aria-hidden": "true" })) : (this.renderStepIcon(step, index))), this.orientation === 'vertical' && !isLast && (h("span", { class: `stepper-connector stepper-connector-${this.orientation} stepper-connector-${connectorStatus}`, "aria-hidden": "true" })), this.orientation === 'horizontal' ? (h("div", { class: "stepper-step-content stepper-step-content-horizontal" }, h("div", { class: "stepper-step-title" }, h("div", { class: "stepper-step-label" }, step.node && step.node.renderContent ? step.node.renderContent() : step.label), !isLast && effectiveLabelPosition !== 'top' && effectiveLabelPosition !== 'bottom' && (h("span", { class: `stepper-connector stepper-connector-horizontal stepper-connector-${connectorStatus}`, "aria-hidden": "true" }))), this.showDescriptions && step.description && (h("div", { class: "stepper-step-description" }, step.description)), h("div", { class: "stepper-content-slot" }, h("slot", { name: `content-${step.id}` })), this.validationErrors.has(String(step.id)) && (h("div", { class: "stepper-step-error-message", role: "alert" }, this.validationErrors.get(String(step.id)))))) : (h("div", { class: "stepper-step-content" }, h("div", { class: {
                    'stepper-step-label': true,
                    'stepper-label-active': index === this.activeStep
                } }, step.label), this.showDescriptions && step.description && (h("div", { class: "stepper-step-description" }, step.description)), h("div", { class: {
                    'stepper-content-slot': true,
                    'stepper-content-active': index === this.activeStep,
                    'stepper-content-panel': this.variant === 'panel'
                } }, h("slot", { name: `content-${step.id}` })), this.validationErrors.has(String(step.id)) && (h("div", { class: "stepper-step-error-message", role: "alert" }, this.validationErrors.get(String(step.id)))), step.children && step.children.length > 0 && (h("div", { class: "stepper-sub-steps" }, step.children.map((child, cIdx) => (h("div", { class: `stepper-sub-step stepper-sub-step-${child.status || 'pending'}`, key: child.id || cIdx }, h("span", { class: "sub-step-dot" }), h("span", { class: "sub-step-label" }, child.label)))))))), this.orientation === 'horizontal' && !isLast && (effectiveLabelPosition === 'top' || effectiveLabelPosition === 'bottom') && (h("span", { class: `stepper-connector stepper-connector-horizontal stepper-connector-${connectorStatus}`, "aria-hidden": "true" })))));
        })), this.scrollable && this.orientation === 'horizontal' && (h("div", { class: "scroll-indicator scroll-indicator--right" })), this.showControls ? (h("div", { class: "stepper-controls", role: "group", "aria-label": "Step controls" }, h("ui-button", { variant: "secondary", size: this.size === 'sm' ? 'sm' : 'md', onClick: this.onPrevClick, disabled: this.activeStep <= 0, ariaLabel: this.labelPrev, label: this.labelPrev }), h("ui-button", { variant: "primary", size: this.size === 'sm' ? 'sm' : 'md', onClick: this.onNextClick, disabled: this.activeStep >= this.normalizedSteps.length - 1, ariaLabel: this.labelNext, label: this.labelNext }), h("ui-button", { variant: "success", size: this.size === 'sm' ? 'sm' : 'md', onClick: this.onFinishClick, ariaLabel: this.labelFinish, label: this.labelFinish }), h("ui-button", { variant: "danger", size: this.size === 'sm' ? 'sm' : 'md', onClick: this.onFailClick, ariaLabel: this.labelFail, label: this.labelFail }))) : null));
    }
    static get watchers() { return {
        "activeStep": [{
                "handleActiveStepChange": 0
            }],
        "steps": [{
                "stepsChanged": 0
            }]
    }; }
};
Stepper.style = stepperCss();

export { Stepper as ui_stepper };
