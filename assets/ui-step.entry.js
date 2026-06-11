import { r as registerInstance, h } from './index-DUsoYu9r.js';

const stepCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.stepper{display:flex;position:relative;--connector-color:var(--step-color, #4b6bfb)}.stepper[data-style=solid]::before{content:"";position:absolute;top:50%;left:0;right:0;height:2px;background:var(--connector-color)}.stepper[data-style=dotted]::before{content:"";position:absolute;top:50%;left:0;right:0;height:2px;background:repeating-linear-gradient(to right, var(--connector-color) 0 4px, transparent 4px 8px)}.stepper[data-style=dashed]::before{content:"";position:absolute;top:50%;left:0;right:0;height:2px;background:repeating-linear-gradient(to right, var(--connector-color) 0 10px, transparent 10px 20px)}.stepper[data-style=segmented]::before{content:"";position:absolute;top:50%;left:0;right:0;height:4px;background:linear-gradient(to right, var(--connector-color) 0 20%, transparent 20% 25%, var(--connector-color) 25% 45%, transparent 45% 50%, var(--connector-color) 50% 70%, transparent 70% 75%, var(--connector-color) 75% 100%)}.stepper[data-reduced=true] *{animation:none !important;transition:none !important}`;

const Step = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** parent will set index */
    index = 0;
    stepTitle = '';
    subtitle = null;
    icon = null; // could be an icon name or HTML string
    badge = null;
    tooltip = null;
    status = 'upcoming';
    disabled = false;
    /** A developer can provide a validation function on the DOM element before proceeding */
    validate;
    /** optional custom renderer - parent will call if present */
    renderContent;
    render() {
        return (h("div", { key: '34d10339a1b9505e53b2adb8059cfeee2bbb0841', class: "ui-step-container", role: "presentation" }, h("div", { key: 'adfe6db495ad914bb066963d5d01f89ec4c8b500', class: "ui-step-slots-hidden", style: { display: 'none' } }, h("slot", { key: 'f00c0378d9cb2233b917e714ff9c3b73687fb43c', name: "icon" }), h("slot", { key: 'c8fe113292f4181096a2254012cef1c5f2ce9239', name: "title" }), h("slot", { key: '933b9f3adda9b05fa55fad607db3838329c540ed', name: "description" })), h("slot", { key: '16fa7b618483d991cfab40c55bb6e3f42cf431c0' })));
    }
};
Step.style = stepCss();

export { Step as ui_step };
