import { r as registerInstance, c as createEvent, h, H as Host } from './index-DUsoYu9r.js';

const imageButtonCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:inline-block;vertical-align:middle;transition:transform 0.2s ease}.image-button{position:relative;overflow:hidden;border-radius:12px;cursor:pointer;background:#f3f4f6;width:100%;height:100%;display:flex;align-items:center;justify-content:center;outline:none}.image-button,.image-button *{transition:all 0.4s cubic-bezier(0.4, 0, 0.2, 1)}.image-button-sm{width:120px}.image-button-md{width:240px}.image-button-lg{width:360px}.image-button-xl{width:480px}.image-button-ratio-square{aspect-ratio:1/1}.image-button-ratio-video{aspect-ratio:16/9}.image-button-ratio-portrait{aspect-ratio:3/4}.image-button-ratio-auto{height:auto}.image-button .button-image{width:100%;height:100%;object-fit:cover;display:block}.image-button .image-placeholder{color:#9ca3af}.image-button .button-overlay{position:absolute;inset:0;background:linear-gradient(to top, rgba(0, 0, 0, 0.7) 0%, rgba(0, 0, 0, 0) 60%);display:flex;align-items:flex-end;padding:1.25rem;color:white}.image-button .overlay-content{display:flex;flex-direction:column;gap:4px}.image-button .button-label{font-weight:700;font-size:1.1rem;line-height:1.2;letter-spacing:-0.01em}.image-button .button-desc{font-size:0.85rem;opacity:0.8}.image-button-effect-zoom:hover .button-image{transform:scale(1.1)}.image-button-effect-lift:hover,.image-button-effect-lift.is-focused{transform:translateY(-8px);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)}.image-button-effect-brighten:hover .button-image{filter:brightness(1.2)}.image-button.label-mode-hover .button-overlay{opacity:0;transform:translateY(10px)}.image-button.label-mode-hover:hover .button-overlay{opacity:1;transform:translateY(0)}.image-button.is-disabled{cursor:not-allowed;opacity:0.6;filter:grayscale(1)}.image-button.is-disabled:hover{transform:none;box-shadow:none}.image-button.is-loading{cursor:wait}.image-button.is-loading .loading-overlay{position:absolute;inset:0;background:rgba(255, 255, 255, 0.7);display:flex;align-items:center;justify-content:center;color:#10b981;z-index:10}.image-button.is-focused{box-shadow:0 0 0 2px var(--bg-primary, #ffffff), 0 0 0 5px var(--color-primary, #10b981);z-index:10}@media (max-width: 640px){.image-button{width:100% !important}}`;

const ImageButton = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uiClick = createEvent(this, "uiClick");
    }
    /** Image source URL */
    src;
    /** Image alt text */
    alt = '';
    /** Button label (overlay) */
    label;
    /** Subtitle or secondary text */
    description;
    /** Hover effect: 'zoom' | 'lift' | 'brighten' | 'none' */
    effect = 'zoom';
    /** Aspect ratio: 'square' | 'video' | 'portrait' | 'auto' */
    ratio = 'square';
    /** Whether the label is always visible or only on hover */
    labelMode = 'hover';
    /** Size variant */
    size = 'md';
    /** Disabled state */
    disabled = false;
    /** Loading state */
    loading = false;
    /** Accessibility label */
    a11yLabel;
    /** Focus state for keyboard accessibility */
    isFocused = false;
    uiClick;
    handleClick = (e) => {
        if (this.disabled || this.loading) {
            e.preventDefault();
            e.stopPropagation();
            return;
        }
        this.uiClick.emit();
    };
    handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleClick(e);
        }
    };
    render() {
        const classes = {
            'image-button': true,
            [`image-button-${this.size}`]: true,
            [`image-button-ratio-${this.ratio}`]: true,
            [`image-button-effect-${this.effect}`]: true,
            [`label-mode-${this.labelMode}`]: true,
            'is-disabled': this.disabled,
            'is-loading': this.loading,
            'is-focused': this.isFocused,
        };
        return (h(Host, { key: '9f62fc59b4656078cbddd73750e41d03a0f3d2ca' }, h("div", { key: 'd6f464e2f65dd0eb5dd40892179432473b3836fe', class: classes, role: "button", tabindex: this.disabled || this.loading ? -1 : 0, "aria-label": this.a11yLabel || this.label || this.alt || 'Image Button', "aria-disabled": this.disabled ? 'true' : 'false', "aria-busy": this.loading ? 'true' : 'false', onClick: this.handleClick, onKeyDown: this.handleKeyDown, onFocus: () => this.isFocused = true, onBlur: () => this.isFocused = false }, this.src ? (h("img", { class: "button-image", src: this.src, alt: this.alt, loading: "lazy" })) : (h("div", { class: "image-placeholder" }, h("ui-icon", { name: "image", library: "fontawesome", size: "24px" }))), (this.label || this.description) && (h("div", { key: '4f8ce2e322361f645f29bf9c4f48f4c9b151f075', class: "button-overlay" }, h("div", { key: 'f3e15b029509d4ed27bef5c03d75d3bd934f190b', class: "overlay-content" }, this.label && h("div", { key: 'aac7cac7d8e07014a927acd9f572f7dac2688e3d', class: "button-label" }, this.label), this.description && h("div", { key: '1607a06a9fcde90277be03130548d974bf7c6b5c', class: "button-desc" }, this.description)))), this.loading && (h("div", { key: '9c9f38dbeb6b77fb2d8eed4ab641498aa5030bf7', class: "loading-overlay" }, h("ui-icon", { key: '2bc1e06c7a61a4e7752686d489ea2c092550d2b4', name: "spinner", library: "fontawesome", spin: true, size: "24px" }))))));
    }
};
ImageButton.style = imageButtonCss();

export { ImageButton as ui_image_button };
