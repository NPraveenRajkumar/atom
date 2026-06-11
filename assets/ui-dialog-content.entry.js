import { r as registerInstance, h } from './index-DUsoYu9r.js';

const dialogContentCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.dialog-content{flex:1;padding:16px 20px;overflow-y:hidden;color:var(--text-secondary, #374151)}.dialog-content--scrollable{overflow-y:auto}.dialog-content--no-padding{padding:0}.dialog-content p{margin:0 0 16px 0}.dialog-content p:last-child{margin-bottom:0}.dialog-content--loading{display:flex;flex-direction:column;gap:12px}.dc-skeleton{height:14px;border-radius:6px;background:linear-gradient(90deg, var(--bg-tertiary, #e5e7eb) 25%, var(--bg-secondary, #f3f4f6) 50%, var(--bg-tertiary, #e5e7eb) 75%);background-size:200% 100%;animation:dc-shimmer 1.4s ease-in-out infinite}.dc-skeleton--wide{width:100%}.dc-skeleton--md{width:72%}.dc-skeleton--narrow{width:48%}@keyframes dc-shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}`;

const DialogContent = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /** Allow content area to scroll vertically */
    scrollable = false;
    /** Remove default padding */
    noPadding = false;
    /** Show loading/skeleton state */
    loading = false;
    render() {
        if (this.loading) {
            return (h("div", { class: `dialog-content dialog-content--loading${this.noPadding ? ' dialog-content--no-padding' : ''}` }, h("div", { class: "dc-skeleton dc-skeleton--line dc-skeleton--wide" }), h("div", { class: "dc-skeleton dc-skeleton--line dc-skeleton--md" }), h("div", { class: "dc-skeleton dc-skeleton--line dc-skeleton--narrow" })));
        }
        const classes = [
            'dialog-content',
            this.scrollable ? 'dialog-content--scrollable' : '',
            this.noPadding ? 'dialog-content--no-padding' : '',
        ].filter(Boolean).join(' ');
        return (h("div", { class: classes }, h("slot", null)));
    }
};
DialogContent.style = dialogContentCss();

export { DialogContent as ui_dialog_content };
