import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const smartStepperCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.stepper-header{display:flex;gap:16px;margin-bottom:16px}.step-header{padding:12px 16px;border-radius:4px;background:#fff;cursor:pointer;transition:all 0.2s;border:1px solid #e5e7eb;display:flex;align-items:center;gap:12px;position:relative;flex:1;min-width:0;}:host-context(.stepper-horizontal) .step-header:not(:last-child)::after{content:"";position:absolute;right:-16px;top:50%;width:16px;height:2px;background:#e5e7eb;z-index:1;display:none;}.step-header:hover:not(.disabled){background:#f9fafb;border-color:#d1d5db}.step-header.active{border-color:#3b82f6;background:#eff6ff}.step-header.completed{border-color:#10b981;background:#f0fdf4;}.step-header.disabled{opacity:0.5;cursor:not-allowed;background:#f3f4f6}.step-icon{width:32px;height:32px;border-radius:50%;background:#e5e7eb;color:#6b7280;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;flex-shrink:0;transition:all 0.2s}.step-header.active .step-icon{background:#3b82f6;color:#fff}.step-header.completed .step-icon{background:#10b981;color:#fff}.step-text{display:flex;flex-direction:column;min-width:0}.step-title{font-weight:600;font-size:14px;color:#1f2937;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.step-desc{font-size:12px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.stepper-content{min-height:80px;background:#fff;border-radius:4px;box-shadow:0 1px 4px rgba(0, 0, 0, 0.04);padding:16px}`;

const SmartStepper = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.stepperChange = createEvent(this, "stepperChange");
    }
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
    get host() { return getElement(this); }
    /**
     * Event emitted when active step changes
     */
    stepperChange;
    /**
     * Programmatic API: Go to next step
     */
    async next() {
        const steps = this.getStepsSync();
        if (this.activeStep < steps.length - 1) {
            return this.goTo(this.activeStep + 1);
        }
        return false;
    }
    /**
     * Programmatic API: Go to previous step
     */
    async prev() {
        if (this.activeStep > 0) {
            return this.goTo(this.activeStep - 1);
        }
        return false;
    }
    /**
     * Programmatic API: Go to specific step
     */
    async goTo(stepIndex) {
        const steps = this.getStepsSync();
        if (stepIndex >= 0 && stepIndex < steps.length) {
            this.activeStep = stepIndex;
            this.updateStepVisibility();
            this.stepperChange.emit({
                index: stepIndex,
                step: steps[stepIndex]
            });
            return true;
        }
        return false;
    }
    /**
     * Get current step element
     */
    async getCurrentStep() {
        const steps = this.getStepsSync();
        return steps[this.activeStep] || null;
    }
    /**
     * Get all step elements
     */
    async getSteps() {
        return this.getStepsSync();
    }
    getStepsSync() {
        return Array.from(this.host.querySelectorAll('smart-step'));
    }
    updateStepVisibility() {
        const steps = this.getStepsSync();
        steps.forEach((step, index) => {
            const content = step.querySelector('.stepper-content');
            if (content) {
                content.style.display = index === this.activeStep ? 'block' : 'none';
            }
            // Update header classes
            const header = step.querySelector('.step-header');
            if (header) {
                header.classList.remove('active', 'completed');
                if (index === this.activeStep) {
                    header.classList.add('active');
                }
                else if (index < this.activeStep) {
                    header.classList.add('completed');
                }
            }
        });
    }
    handleStepClick = (event) => {
        const target = event.target;
        const stepElement = target.closest('smart-step');
        if (stepElement) {
            const steps = this.getStepsSync();
            const stepIndex = steps.indexOf(stepElement);
            if (stepIndex !== -1) {
                this.goTo(stepIndex);
            }
        }
    };
    componentDidLoad() {
        this.updateStepVisibility();
    }
    componentDidUpdate() {
        this.updateStepVisibility();
    }
    handleStepClickEvent(event) {
        event.stopPropagation();
        const stepElement = event.target;
        const steps = this.getStepsSync();
        const stepIndex = steps.indexOf(stepElement);
        if (stepIndex !== -1) {
            this.goTo(stepIndex);
        }
    }
    render() {
        const containerClasses = [
            'smart-stepper-container',
            `stepper-${this.orientation}`,
            `stepper-${this.size}`
        ].join(' ');
        return (h("div", { key: '5243803a66e8bfae497796c6bf73d4f006fa35e4', class: containerClasses }, h("div", { key: '6a7b4c7d81107e2f42ededb0e598c18ad0c8966a', class: "stepper-header", onClick: this.handleStepClick }, h("slot", { key: 'dcec321fde59e2b21f49344fd1d105a822d2d9c4' })), h("div", { key: 'd9fff061e8c196a8eef547c036ba9c9a384d59d8', class: "stepper-content-area" }, h("slot", { key: 'a89db3104943e20880b5633732e801dfdcd70dff', name: "content" }))));
    }
};
SmartStepper.style = smartStepperCss();

export { SmartStepper as ui_smart_stepper };
