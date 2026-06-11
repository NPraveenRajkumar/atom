import { r as registerInstance, a as getElement, h } from './index-DUsoYu9r.js';

const smartStepCss = () => `@charset "UTF-8";.sr-only.sc-smart-step{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only.sc-smart-step{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.sc-smart-step-h{display:block;counter-increment:step-counter;flex:1}.smart-step-wrapper.sc-smart-step{display:flex;flex-direction:column}.step-header.sc-smart-step{padding:12px 16px;border-radius:6px;background:#fff;cursor:pointer;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);border:1px solid #e5e7eb;display:flex;align-items:center;gap:12px;position:relative;user-select:none;margin-bottom:8px}.step-header.sc-smart-step:hover:not(.disabled):not(.active){background:#f9fafb;border-color:#d1d5db;transform:translateY(-1px)}.step-header.active.sc-smart-step{border-color:#3b82f6;background:#eff6ff;box-shadow:0 4px 6px -1px rgba(59, 130, 246, 0.1)}.step-header.completed.sc-smart-step{border-color:#10b981;background:#f0fdf4}.step-header.disabled.sc-smart-step{opacity:0.6;cursor:not-allowed;background:#f3f4f6;border-color:#e5e7eb}.step-icon.sc-smart-step{width:32px;height:32px;border-radius:50%;background:#f3f4f6;color:#6b7280;display:flex;align-items:center;justify-content:center;font-weight:600;font-size:14px;flex-shrink:0;transition:all 0.3s ease;border:2px solid transparent}.step-header.active.sc-smart-step .step-icon.sc-smart-step{background:#3b82f6;color:#fff;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.2)}.step-header.completed.sc-smart-step .step-icon.sc-smart-step{background:#10b981;color:#fff}.step-header.status-error.sc-smart-step .step-icon.sc-smart-step{background:#ef4444;color:#fff}.custom-icon.sc-smart-step{line-height:1}.step-number.sc-smart-step::before{content:counter(step-counter)}.step-header.completed.sc-smart-step .step-number.sc-smart-step::before{content:"✓";font-size:16px}.step-text.sc-smart-step{display:flex;flex-direction:column;min-width:0;flex:1}.step-title.sc-smart-step{font-weight:600;font-size:14px;color:#1f2937;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.4}.step-header.active.sc-smart-step .step-title.sc-smart-step{color:#1d4ed8}.step-header.completed.sc-smart-step .step-title.sc-smart-step{color:#15803d}.step-desc.sc-smart-step{font-size:12px;color:#6b7280;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;line-height:1.4}.sc-smart-step-h:not(:last-of-type) .step-header.sc-smart-step::after{content:"";position:absolute;right:-12px;top:50%;border:solid #d1d5db;border-width:0 2px 2px 0;display:inline-block;padding:3px;transform:translateY(-50%) rotate(-45deg);opacity:0.5;display:none}.stepper-content.sc-smart-step{background:#fff;border:1px solid #e5e7eb;border-radius:0 0 6px 6px;padding:24px;margin-top:-6px;display:none;animation:slideDown 0.3s ease-out}@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}`;

const SmartStep = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get host() { return getElement(this); }
    /**
     * The label to display for the step
     */
    label;
    /**
     * Whether the step is valid/finished (optional status indicator)
     */
    status = 'default';
    /**
     * Optional description/subtitle for the step
     */
    description;
    /**
     * Optional icon/number to display.
     * If not provided, parent SmartStepper can provide an index.
     */
    icon;
    /**
     * Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.)
     */
    iconLibrary = 'default';
    /**
     * Whether this step is disabled (not clickable)
     */
    disabled = false;
    render() {
        return (h("div", { key: 'a2c117d2cec46a6f1fdafab7cb152026a1c637be', class: "smart-step-wrapper" }, h("div", { key: '470c34c7b17ad9b6e829ebfb30e1b4c3848d1c09', class: {
                'step-header': true,
                'disabled': this.disabled,
                [`status-${this.status}`]: true
            } }, h("div", { key: '6a6cbddfd46581cbdb2e22ba9dfddad491faf93b', class: "step-icon" }, this.icon ? (h("span", { class: "custom-icon" }, h("ui-icon", { name: this.icon, library: this.iconLibrary, size: "1.2rem" }))) : h("span", { class: "step-number" })), h("div", { key: '2d11b3d888e9cc500723d0be29a8c6fc580372b7', class: "step-text" }, h("span", { key: '8a13c5542cc413516b7a083e26330a34f7a43990', class: "step-title" }, this.label), this.description && h("span", { key: '1ad7e4e299a6d6faa338445a926279ec3d04c7b3', class: "step-desc" }, this.description))), h("div", { key: 'df61b0cb3ba51afbba28d4075c8e7a128616b74a', class: "stepper-content" }, h("slot", { key: '277c02deb6d5ee2c2ac992e3ea3da964cf8dd9e2' }))));
    }
};
SmartStep.style = smartStepCss();

export { SmartStep as smart_step };
