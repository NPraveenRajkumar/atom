import { r as registerInstance, h } from './index-DUsoYu9r.js';

const myStepCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}`;

const MyStep = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    stepTitle = '';
    icon = '';
    subtitle = '';
    badge = '';
    tooltip = '';
    disabled = false;
    status = '';
    index = 0;
    validate;
    async renderContent() {
        return h("slot", null);
    }
    render() {
        return h("slot", { key: '44701e8e4f9dfe6e74f8b9581a80ef6b2c9a5880' });
    }
};
MyStep.style = myStepCss();

export { MyStep as my_step };
