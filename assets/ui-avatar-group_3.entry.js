import { r as registerInstance, a as getElement, h, H as Host, c as createEvent } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const avatarGroupCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.avatar-group{display:inline-flex;position:relative;align-items:center}.avatar-group.layout-stack .group-avatar{margin-right:var(--avatar-spacing, -16px);transition:all 0.5s cubic-bezier(0.25, 1, 0.5, 1);transform-origin:center bottom}.avatar-group.layout-stack .group-avatar:hover{z-index:100 !important;transform:scale(1.25) translateY(-10px);margin-right:8px !important;box-shadow:0 10px 25px rgba(0, 0, 0, 0.2);border-color:var(--border-subtle, #fff) !important}.avatar-group.layout-stack .group-avatar:hover~.group-avatar,.avatar-group.layout-stack .group-avatar:hover~.excess-avatar-container{transform:translateX(24px)}.avatar-group.layout-stack.avatar-group-animated:hover{padding-right:40px}.avatar-group.layout-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(var(--avatar-size) + 8px), 1fr));gap:8px;width:100%}.avatar-list{display:flex;flex-wrap:wrap;align-items:center}.layout-stack .avatar-list{flex-wrap:nowrap}.avatar-extra{display:inline-flex;align-items:center;justify-content:center;background-color:var(--color-danger, #f56a00);color:var(--text-standard, #ffffff);font-weight:600;border:var(--avatar-border-width, 2px) solid var(--avatar-border-color, #fff);cursor:pointer;z-index:1;transition:transform 0.2s;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);font-size:0.8em}.avatar-extra:hover{transform:scale(1.1) translateY(-4px);z-index:100;box-shadow:0 8px 20px rgba(0, 0, 0, 0.15)}.avatar-extra.shape-circle{border-radius:50%}.avatar-extra.shape-square{border-radius:8px}.avatar-popover{position:absolute;top:100%;right:0;background:var(--bg-primary, #ffffff);border-radius:8px;box-shadow:0 8px 24px rgba(0, 0, 0, 0.2);padding:12px;z-index:1000;min-width:180px;margin-top:8px;animation:popoverFadeIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}.avatar-popover::after{content:"";position:absolute;top:-12px;right:12px;border:6px solid transparent;border-bottom-color:var(--bg-primary, #ffffff)}.avatar-popover .popover-content{display:flex;flex-direction:column;gap:4px;max-height:300px;overflow-y:auto}.avatar-popover .popover-item{display:flex;align-items:center;gap:12px;padding:8px;border-radius:6px;transition:background 0.2s;cursor:pointer}.avatar-popover .popover-item:hover{background:var(--bg-secondary, #f3f4f6)}.avatar-popover .popover-item ui-avatar{transition:none !important;transform:none !important;box-shadow:none !important}.avatar-popover .popover-text{font-size:14px;color:var(--text-secondary, #374151);font-weight:500}@keyframes popoverFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}.avatar-roster-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:2000;backdrop-filter:blur(4px)}.avatar-roster-content{background:var(--bg-primary, #ffffff);width:90%;max-width:500px;max-height:80vh;border-radius:16px;box-shadow:0 20px 50px rgba(0, 0, 0, 0.3);display:flex;flex-direction:column;overflow:hidden;animation:modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)}.roster-header{padding:20px;border-bottom:1px solid var(--border-subtle, #eee);display:flex;align-items:center;justify-content:space-between}.roster-header h3{margin:0;color:var(--text-primary, #1f2937)}.roster-header .close-btn{background:none;border:none;font-size:28px;cursor:pointer;color:var(--text-muted, #9ca3af)}.roster-header .close-btn:hover{color:var(--text-primary, #1f2937)}.roster-list{padding:12px;overflow-y:auto;display:flex;flex-direction:column;gap:8px}.roster-item{display:flex;align-items:center;gap:16px;padding:12px;border-radius:12px;transition:background 0.2s}.roster-item:hover{background:var(--bg-primary, #f9fafb)}.roster-info{display:flex;flex-direction:column}.roster-name{font-weight:600;color:var(--text-primary, #111827)}.roster-status{font-size:11px;text-transform:capitalize;border-radius:4px;padding:1px 6px;width:fit-content}.status-online{color:var(--color-success-hover, #059669);background:var(--bg-primary, #ecfdf5)}@keyframes modalIn{from{opacity:0;transform:scale(0.9) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}`;

const AvatarGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /** Array of avatar props for dynamic generation */
    avatars = [];
    /** Maximum number of avatars to display before grouping */
    maxVisible = 5;
    /** Maximum config: number or object { count, style, popover } */
    max = null;
    /** Size of avatars in the group */
    size = 'm';
    /** Shape to apply to all avatars in the group */
    shape = 'circle';
    /** Layout mode: 'stack' or 'grid' */
    layout = 'stack';
    /** Spacing between avatars (in pixels) for grid mode */
    spacing = 4;
    /** Overlapping amount (negative value for overlap) */
    overlap = null;
    /** Border color for avatars in the group */
    borderColor = 'white';
    /** Border width for avatars in the group */
    borderWidth = 2;
    /** Enable popover to show all avatars when hovering over excess count */
    enablePopover = true;
    /** Enable animated shifting transitions on hover */
    animated = true;
    slottedAvatars = [];
    showPopover = false;
    isRosterOpen = false;
    isHovered = false;
    handleSlotChange() {
        this.updateSlottedAvatars();
    }
    componentWillLoad() {
        this.updateSlottedAvatars();
    }
    componentDidLoad() { }
    updateSlottedAvatars() {
        const slotElement = this.el.shadowRoot?.querySelector('slot');
        const assignedElements = slotElement
            ? slotElement.assignedElements()
            : Array.from(this.el.children);
        this.slottedAvatars = assignedElements.filter(el => el.tagName.toLowerCase() === 'ui-avatar');
    }
    getMaxCount() {
        const maxVal = this.max || this.maxVisible;
        if (typeof maxVal === 'number')
            return maxVal;
        if (maxVal && typeof maxVal === 'object' && 'count' in maxVal)
            return maxVal.count || Infinity;
        return Infinity;
    }
    getMaxStyle() {
        if (this.max && typeof this.max === 'object' && 'style' in this.max)
            return this.max.style;
        return {};
    }
    calculateOverlap() {
        if (this.layout === 'grid')
            return this.spacing;
        if (this.overlap !== null)
            return -Math.abs(this.overlap);
        const sizeMap = { xs: 24, s: 32, sm: 32, default: 20, m: 40, lg: 40, l: 48, xl: 64 };
        let avatarSize = 40;
        const numericSize = parseFloat(this.size);
        if (!isNaN(numericSize))
            avatarSize = numericSize;
        else if (typeof this.size === 'string' && sizeMap[this.size])
            avatarSize = sizeMap[this.size];
        return -(avatarSize * 0.4);
    }
    handleMouseEnterGroup = () => { this.isHovered = true; };
    handleMouseLeaveGroup = () => { this.isHovered = false; this.showPopover = false; };
    toggleRoster = (ev) => { ev.stopPropagation(); this.isRosterOpen = !this.isRosterOpen; };
    closeRoster = () => { this.isRosterOpen = false; };
    renderExcessCount(total, max) {
        const excess = total - max;
        if (excess <= 0)
            return null;
        const maxStyle = this.getMaxStyle();
        return (h("div", { class: "excess-avatar-container", onMouseEnter: () => this.showPopover = this.enablePopover, onMouseLeave: () => this.showPopover = false, onClick: this.toggleRoster }, h("div", { class: { 'avatar-extra': true, [`avatar-${this.getSizeAlias()}`]: true, [`shape-${this.shape}`]: true }, style: { ...maxStyle, backgroundColor: maxStyle.backgroundColor || '#f56a00' } }, "+", excess), this.showPopover && this.enablePopover && this.layout === 'stack' && this.renderPopover(max)));
    }
    renderPopover(max) {
        const all = this.getAllAvatarData();
        const hidden = all.slice(max);
        return (h("div", { class: "avatar-popover" }, h("div", { class: "popover-content" }, hidden.map((avatar, idx) => (h("div", { class: "popover-item", key: idx }, h("ui-avatar", { size: "xs", shape: this.shape, src: avatar.src, icon: avatar.icon, name: avatar.name, content: avatar.content, bgColor: avatar.bgColor }), h("span", { class: "popover-text" }, avatar.name || avatar.content || 'User')))))));
    }
    getAllAvatarData() {
        if (this.avatars && this.avatars.length > 0)
            return this.avatars;
        return this.slottedAvatars.map(el => ({
            src: el.getAttribute('src'),
            name: el.getAttribute('name'),
            content: el.getAttribute('content') || el.textContent?.trim(),
            tooltipText: el.getAttribute('tooltipText') || el.getAttribute('tooltip-text') || el.getAttribute('name') || el.textContent?.trim(),
            icon: el.getAttribute('icon'),
            bgColor: el.getAttribute('bgColor') || el.getAttribute('bg-color'),
            badge: el.getAttribute('badge'),
            status: el.getAttribute('status')
        }));
    }
    getSizeAlias() {
        const sizeMap = { sm: 's', md: 'm', lg: 'l' };
        return sizeMap[this.size] || this.size;
    }
    render() {
        const all = this.getAllAvatarData();
        const maxCount = this.getMaxCount();
        const visible = (this.layout === 'grid') ? all : all.slice(0, maxCount);
        const overlap = this.calculateOverlap();
        const groupClasses = {
            'avatar-group': true,
            [`layout-${this.layout}`]: true,
            'avatar-group-animated': this.animated && this.layout === 'stack',
            'expanded': this.isHovered && this.layout === 'stack'
        };
        const groupStyle = {
            '--avatar-spacing': `${overlap}px`,
            '--avatar-border-color': this.borderColor,
            '--avatar-border-width': `${this.borderWidth}px`,
            '--avatar-size': typeof this.size === 'number' ? `${this.size}px` : this.size.toString(),
        };
        return (h(Host, { key: 'd1c53574be9549de6cce9cf8aae33ac8019dd556' }, h("div", { key: '0f64bd06b7f8bd077e98286b9df7cd24e1924a50', class: groupClasses, style: groupStyle, onMouseEnter: this.handleMouseEnterGroup, onMouseLeave: this.handleMouseLeaveGroup }, h("div", { key: '937475ddb42adc924320a2f15f61a76f3ec3c916', class: "avatar-list" }, visible.map((avatar, index) => (h("ui-avatar", { ...avatar, key: index, size: this.size, shape: this.shape, border: `${this.borderWidth}px solid ${this.borderColor}`, class: "group-avatar", style: { zIndex: (this.layout === 'stack' ? (all.length - index) : 1).toString() } }))), this.layout === 'stack' && this.renderExcessCount(all.length, maxCount)), h("div", { key: '52779f80360501b288b88cd896f2dd117b18c0e1', style: { display: 'none' } }, h("slot", { key: 'bd6996c4789091de98a2f01349990412278e51ee' }))), this.isRosterOpen && (h("div", { key: 'fb404a5fd2e4723bb54465a8e6b94d220052721d', class: "avatar-roster-backdrop", onClick: this.closeRoster }, h("div", { key: '81df0d927175829c2fe80e3c39bf81350011620e', class: "avatar-roster-content", onClick: e => e.stopPropagation() }, h("div", { key: '89cea0f5aed19f87eaab53bdab36b0ccf429dc54', class: "roster-header" }, h("h3", { key: '3d113ccb91edb0b47e7bccc311af3f52f09ed5f2' }, "Participants (", all.length, ")"), h("ui-button", { key: 'ad42880fadf89334d69ff0fca445adf7fb1b4494', variant: "ghost", onClick: this.closeRoster, ariaLabel: "Close roster", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })), h("div", { key: 'd683e744b8a132d600d8681254c39b0569b1564c', class: "roster-list" }, all.map((avatar, idx) => (h("div", { key: idx, class: "roster-item" }, h("ui-avatar", { ...avatar, size: "s", shape: this.shape }), h("div", { class: "roster-info" }, h("span", { class: "roster-name" }, avatar.name || avatar.content || 'Anonymous'), avatar.status && h("span", { class: `roster-status status-${avatar.status}` }, avatar.status)))))))))));
    }
};
AvatarGroup.style = avatarGroupCss();

const stackCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:inline-block}:host(.stack-horizontal) .stack-container{flex-direction:row}:host(.stack-vertical) .stack-container{flex-direction:column}.stack-container{display:flex;gap:var(--stack-spacing, 8px)}:host(.stack-wrap-wrap) .stack-container{flex-wrap:wrap}:host(.stack-wrap-wrap-reverse) .stack-container{flex-wrap:wrap-reverse}:host(.stack-show-dividers) .stack-container{gap:0}:host(.stack-show-dividers) ::slotted(*:not(:last-child)){position:relative;margin-right:var(--stack-spacing, 8px);display:flex;align-items:center}:host(.stack-show-dividers) ::slotted(*:not(:last-child))::after{content:"";position:absolute;right:calc(var(--stack-spacing, 8px) / -2);background:var(--bg-primary, #e5e7eb)}:host(.stack-horizontal.stack-show-dividers) ::slotted(*:not(:last-child))::after{width:1px;height:60%;top:20%}:host(.stack-vertical.stack-show-dividers) ::slotted(*:not(:last-child))::after{height:1px;width:60%;left:20%;bottom:calc(var(--stack-spacing, 8px) / -2)}:host(.divider-dashed) ::slotted(*:not(:last-child))::after{border-right:1px dashed var(--border-default, #e5e7eb);background:none}:host(.divider-dotted) ::slotted(*:not(:last-child))::after{border-right:1px dotted var(--border-default, #e5e7eb);background:none}:host(.stack-overlap) .stack-container{padding-right:20px}:host(.stack-overlap) ::slotted(*){margin-right:var(--stack-overlap, -12px) !important;transition:transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), z-index 0s, filter 0.3s ease;position:relative;z-index:1;border:2px solid var(--bg-primary, #ffffff);box-sizing:border-box;filter:drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));cursor:pointer}:host(.stack-overlap) ::slotted(*:hover){transform:translateY(-8px) scale(1.1) rotate(1deg);z-index:100 !important;filter:drop-shadow(0 12px 24px rgba(0, 0, 0, 0.2))}:host(.stack-overlap) ::slotted(*:last-child){margin-right:0 !important}.stack-roster-backdrop{position:fixed;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.3);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:10000;animation:fadeIn 0.2s ease-out}.stack-roster-content{background:var(--bg-primary, #ffffff);width:90%;max-width:400px;max-height:80vh;border-radius:16px;box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);display:flex;flex-direction:column;overflow:hidden;animation:slideUp 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}.roster-header{padding:16px 20px;border-bottom:1px solid var(--border-subtle, #f1f5f9);display:flex;justify-content:space-between;align-items:center}.roster-header h4{margin:0;font-size:16px;font-weight:600;color:var(--text-primary, #1e293b)}.close-btn{background:var(--bg-secondary, #f1f5f9);border:none;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--text-muted, #64748b);font-size:18px;transition:all 0.2s}.close-btn:hover{background:var(--bg-primary, #e2e8f0);color:var(--text-primary, #0f172a)}.roster-list{padding:12px;overflow-y:auto;display:flex;flex-direction:column;gap:8px}.roster-item{padding:10px;border-radius:10px;background:var(--bg-primary, #f8fafc);border:1px solid var(--border-subtle, #f1f5f9);display:flex;align-items:center;transition:background 0.2s}.roster-item:hover{background:var(--bg-secondary, #f1f5f9)}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes slideUp{from{transform:translateY(20px);opacity:0}to{transform:translateY(0);opacity:1}}.stack-overflow-indicator{display:flex;align-items:center;justify-content:center;min-width:32px;height:32px;border-radius:50%;background:var(--bg-secondary, #f3f4f6);border:2px solid var(--bg-primary, #ffffff);color:var(--text-secondary, #4b5563);font-size:12px;font-weight:600;z-index:10;cursor:pointer;transition:transform 0.2s}.stack-overflow-indicator:hover{transform:scale(1.1);background:var(--bg-primary, #e5e7eb)}@media (prefers-color-scheme: dark){.stack-roster-content{background:var(--bg-primary, #1e293b)}.roster-header h4{color:var(--text-standard, #ffffff)}.roster-item{background:var(--color-primary, #334155);border-color:var(--color-primary, #475569)}.roster-item:hover{background:var(--color-primary, #475569)}.stack-overflow-indicator{background:var(--color-primary, #374151);border-color:var(--border-strong, #1f2937);color:var(--text-standard, #f3f4f6)}.stack-overflow-indicator:hover{background:var(--color-primary, #4b5563)}}`;

const Stack = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    /** Stacking direction */
    direction = 'horizontal';
    /** Flex wrap behavior */
    wrap = 'nowrap';
    /** Spacing between items (negative for overlap) */
    spacing = '8px';
    /** Align items */
    align = 'center';
    /** Justify content */
    justify = 'start';
    /** Maximum items to show before '+N' */
    max = 0;
    /** Whether to overlap items */
    overlap = false;
    /** Whether to show dividers between items */
    showDividers = false;
    /** Type of divider to show */
    dividerType = 'solid';
    childrenCount = 0;
    isRosterOpen = false;
    mutationObserver;
    componentWillLoad() {
        this.updateChildrenCount();
    }
    componentDidLoad() {
        this.mutationObserver = new MutationObserver(() => {
            this.updateChildrenCount();
        });
        this.mutationObserver.observe(this.el, { childList: true });
    }
    disconnectedCallback() {
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
    }
    toggleRoster = () => {
        this.isRosterOpen = !this.isRosterOpen;
    };
    closeRoster = () => {
        this.isRosterOpen = false;
    };
    updateChildrenVisibility(actualMax) {
        Array.from(this.el.children).forEach((child, index) => {
            if (index < actualMax) {
                child.style.display = '';
            }
            else {
                child.style.display = 'none';
            }
        });
    }
    updateChildrenCount() {
        this.childrenCount = this.el.children.length;
    }
    renderRoster(allChildren, total) {
        return (h("div", { class: "stack-roster-backdrop", onClick: this.closeRoster }, h("div", { class: "stack-roster-content", onClick: e => e.stopPropagation() }, h("div", { class: "roster-header" }, h("div", { class: "roster-titles" }, h("h4", { class: "roster-main-title" }, "Hidden Items"), h("span", { class: "roster-sub-title" }, total, " items total")), h("ui-button", { variant: "ghost", onClick: this.closeRoster, ariaLabel: "Close roster", icon: "times", iconLibrary: "fontawesome", iconOnly: true, size: "sm" })), h("div", { class: "roster-list" }, allChildren.map((child, idx) => (h("div", { key: idx, class: "roster-item" }, h("div", { class: "roster-item-preview", innerHTML: sanitizeHTML(child.outerHTML) }), h("span", { class: "roster-item-label" }, "Item ", idx + 1))))))));
    }
    render() {
        const isOverlapping = this.overlap || (this.spacing.startsWith('-'));
        const actualMax = this.max > 0 ? this.max : this.childrenCount;
        const overflowCount = this.childrenCount - actualMax;
        const allChildren = Array.from(this.el.children);
        // Update visibility after render to avoid layout thrashing
        requestAnimationFrame(() => this.updateChildrenVisibility(actualMax));
        return (h(Host, { key: '6568eda1f5875356d720bc67a8c234f6f97effcf', class: {
                'ui-stack': true,
                [`stack-${this.direction}`]: true,
                [`stack-wrap-${this.wrap}`]: true,
                'stack-overlap': isOverlapping,
                'stack-show-dividers': this.showDividers && !isOverlapping,
                [`divider-${this.dividerType}`]: this.showDividers
            }, style: {
                '--stack-spacing': isOverlapping ? '0' : this.spacing,
                '--stack-overlap': isOverlapping ? (this.spacing.startsWith('-') ? this.spacing : '-12px') : '0',
                'align-items': this.align,
                'justify-content': this.justify,
                'flex-wrap': this.wrap
            } }, h("div", { key: '3363f516615fadfd894b42961f94d83a7a254011', class: "stack-container" }, h("slot", { key: '5f2c8cb4d62229c4439858f5433f30ed78d9bd71' }), overflowCount > 0 && (h("div", { key: 'eb7614444d0beba127e9d1a9ca125265dbcd5e43', class: "stack-overflow-indicator", onClick: (e) => { e.stopPropagation(); this.toggleRoster(); }, onKeyDown: (e) => {
                if (e.key === 'Enter')
                    this.toggleRoster();
            }, tabindex: "0", role: "button", title: `View ${overflowCount} more items` }, "+", overflowCount))), this.isRosterOpen && this.renderRoster(allChildren, this.childrenCount)));
    }
};
Stack.style = stackCss();

const tagGroupCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.tag-group-container{display:flex;flex-direction:column;gap:12px;padding:8px 12px;border:1.5px solid var(--border-subtle, #e2e8f0);border-radius:10px;background:var(--bg-primary, #f8fafc);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);min-height:42px}.tag-group-container:focus-within{background:var(--bg-primary, #ffffff);border-color:var(--color-primary, #10b981);box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.tag-group-container.is-readonly{background:transparent;border-color:transparent;padding:0;pointer-events:none}.tag-group-inline-input{flex:1;min-width:60px;border:none;background:transparent;font-size:13px;padding:4px 0;outline:none;color:var(--text-primary, #1e293b)}.tag-group-inline-input::placeholder{color:var(--color-primary, #94a3b8)}ui-stack[overlap] ui-tag,ui-stack[overlap=true] ui-tag{--ui-tag-border:2px solid var(--bg-primary, #ffffff) !important;transition:transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}ui-stack[overlap] ui-tag:hover,ui-stack[overlap=true] ui-tag:hover{transform:translateY(-4px) scale(1.1);z-index:100 !important}ui-tag[highlighted=true]{--ui-tag-bg:var(--color-primary, #10b981) !important;--ui-tag-color:var(--text-standard, #ffffff) !important;--ui-tag-border:1px solid var(--color-primary-hover, #2563eb) !important;transform:scale(1.05);box-shadow:0 4px 6px -1px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.tag-group-overflow-toggle{margin-top:4px;align-self:flex-start;background:var(--bg-secondary, #f1f5f9);border:1px solid var(--border-subtle, #e2e8f0);color:var(--text-muted, #64748b);font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.1em;cursor:pointer;padding:4px 12px;border-radius:999px;transition:all 0.2s ease}.tag-group-overflow-toggle:hover{background:var(--bg-primary, #ffffff);color:var(--color-primary, #10b981);border-color:var(--color-primary, #10b981);transform:translateY(-1px)}.tag-group-overflow-toggle:active{transform:translateY(0)}.tag-group-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:24px;gap:8px;color:var(--color-primary, #94a3b8);background:transparent}.tag-group-empty ui-icon{opacity:0.4}.tag-group-empty span{font-size:13px;font-weight:500}.tag-group-empty.no-results{padding:12px;border-radius:8px;background:rgba(241, 245, 249, 0.5);color:var(--text-muted, #64748b);border:1px dashed var(--border-subtle, #e2e8f0)}`;

const TagGroup = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tagAdd = createEvent(this, "tagAdd");
        this.tagGroupChange = createEvent(this, "tagGroupChange");
    }
    get el() { return getElement(this); }
    /**
     * Maximum number of tags to display before hiding and showing (+N)
     */
    max = 0;
    /**
     * Spacing between tags
     */
    spacing = '8px';
    /**
     * Whether to overlap tags (avatar style)
     */
    overlap = false;
    /**
     * Selected values (for checkable tags)
     */
    value = [];
    /**
     * Selection mode: 'none', 'single', or 'multiple'
     */
    selectionMode = 'none';
    /**
     * Bulk size for all tags in group
     */
    size;
    /**
     * Bulk variant for all tags in group
     */
    variant;
    /**
     * Bulk color for all tags in group
     */
    color;
    /**
     * Whether all tags in group should be rounded
     */
    rounded = false;
    /**
     * Whether all tags in group should be removable
     */
    removable = false;
    /**
     * Whether users can add new tags (Premium)
     */
    creatable = false;
    /**
     * Whether tags are filterable via search (Premium)
     */
    searchable = false;
    /**
     * Whether overflow tags can be toggled to show (Premium)
     */
    collapsible = false;
    /**
     * Case sensitivity for search and duplicates
     */
    caseSensitive = false;
    /**
     * Delimiters to trigger tag creation
     */
    delimiters = [',', ' '];
    /**
     * Whether all tags in group should show as skeletons
     */
    skeleton = false;
    /**
     * Bulk shape for all tags in group
     */
    shape;
    /**
     * Bulk animation for all tags in group
     */
    animation;
    /**
     * Whether the entire group is read-only (disables all selection/removal)
     */
    readOnly = false;
    /**
     * Placeholder text when group is empty (creatable mode)
     */
    placeholder = 'Add tag...';
    /**
     * Event emitted when a new tag is added
     */
    tagAdd;
    searchQuery = '';
    isExpanded = false;
    isLastTagHighlighted = false;
    tagGroupChange;
    handleKeyDown(ev) {
        if (this.readOnly)
            return;
        const tags = Array.from(this.el.querySelectorAll('ui-tag'));
        const activeElement = this.el.shadowRoot?.activeElement || document.activeElement;
        // Find if any tag is focused or contains focus
        const focusedTagIndex = tags.findIndex(t => t === activeElement || t.contains(activeElement));
        const isInputFocused = activeElement === this.el.shadowRoot?.querySelector('.tag-group-inline-input');
        if (ev.key === 'ArrowLeft') {
            if (isInputFocused && ev.target.selectionStart === 0) {
                // Focus last tag
                if (tags.length > 0) {
                    tags[tags.length - 1].focus();
                    ev.preventDefault();
                }
            }
            else if (focusedTagIndex > 0) {
                tags[focusedTagIndex - 1].focus();
                ev.preventDefault();
            }
        }
        else if (ev.key === 'ArrowRight') {
            if (focusedTagIndex !== -1) {
                if (focusedTagIndex === tags.length - 1) {
                    this.el.shadowRoot?.querySelector('.tag-group-inline-input')?.focus();
                }
                else {
                    tags[focusedTagIndex + 1].focus();
                }
                ev.preventDefault();
            }
        }
        else if ((ev.key === 'Backspace' || ev.key === 'Delete') && focusedTagIndex !== -1) {
            const tagToRemove = tags[focusedTagIndex];
            const nextToFocus = focusedTagIndex < tags.length - 1 ? tags[focusedTagIndex + 1] : this.el.shadowRoot?.querySelector('.tag-group-inline-input');
            if (this.removable) {
                const tagValue = tagToRemove.value || tagToRemove.label;
                this.removeTagByValue(tagValue);
                if (nextToFocus)
                    nextToFocus.focus();
                ev.preventDefault();
            }
        }
    }
    handleGroupChange() {
        this.updateChildren();
    }
    handleTagRemove(ev) {
        if (this.readOnly)
            return;
        // Find the tag that was removed
        const tag = ev.target;
        if (!tag)
            return;
        const tagValue = tag.value || tag.label;
        // If it was selected, remove it from the value array
        if (Array.isArray(this.value)) {
            const index = this.value.indexOf(tagValue);
            if (index > -1) {
                const newValue = [...this.value];
                newValue.splice(index, 1);
                this.value = newValue;
                this.tagGroupChange.emit(this.value);
            }
        }
        else if (this.value === tagValue) {
            this.value = '';
            this.tagGroupChange.emit(this.value);
        }
        // Explicitly remove from DOM if it's a child of this component
        if (tag.parentNode === this.el) {
            this.el.removeChild(tag);
        }
        // Delay updating children slightly to allow for removal animation
        setTimeout(() => this.updateChildren(), 50);
    }
    handleTagCheck(ev) {
        if (this.readOnly || this.selectionMode === 'none')
            return;
        const tag = ev.target;
        const tagValue = tag.value || tag.label;
        if (this.selectionMode === 'single') {
            this.value = ev.detail ? tagValue : '';
            this.syncSelection();
        }
        else {
            const current = Array.isArray(this.value) ? [...this.value] : (this.value ? [this.value] : []);
            if (ev.detail) {
                if (!current.includes(tagValue))
                    current.push(tagValue);
            }
            else {
                const index = current.indexOf(tagValue);
                if (index > -1)
                    current.splice(index, 1);
            }
            this.value = current;
            this.syncSelection();
        }
        this.tagGroupChange.emit(this.value);
    }
    componentDidLoad() {
        this.updateChildren();
        // Listen for slot changes
        const slot = this.el.shadowRoot?.querySelector('slot');
        if (slot) {
            slot.addEventListener('slotchange', () => this.updateChildren());
        }
    }
    updateChildren() {
        const tags = Array.from(this.el.querySelectorAll('ui-tag'));
        const query = this.searchQuery.toLowerCase();
        tags.forEach((tag, index) => {
            // Apply bulk styles
            if (this.size)
                tag.size = this.size;
            if (this.variant)
                tag.variant = this.variant;
            if (this.color)
                tag.color = this.color;
            // Default to circle if overlapping and no shape set
            if (this.overlap && !this.shape && !tag.shape) {
                tag.shape = 'circle';
            }
            else if (this.shape) {
                tag.shape = this.shape;
            }
            else if (this.rounded) {
                tag.shape = 'pill';
            }
            if (this.skeleton)
                tag.skeleton = this.skeleton;
            if (this.animation)
                tag.animation = this.animation;
            tag.removable = this.readOnly ? false : this.removable;
            tag.disabled = this.readOnly;
            if (this.selectionMode !== 'none')
                tag.checkable = true;
            // Handle filtering
            const label = tag.label || '';
            const matches = label.toLowerCase().includes(query);
            // Handle max/collapsible
            const isOverMax = this.max > 0 && index >= this.max;
            const isHighlighted = this.isLastTagHighlighted && index === (tags.length - 1);
            if (isHighlighted) {
                tag.setAttribute('highlighted', 'true');
            }
            else {
                tag.removeAttribute('highlighted');
            }
            const shouldBeVisible = matches && (!isOverMax || this.isExpanded);
            tag.style.display = shouldBeVisible ? '' : 'none';
        });
        this.syncSelection();
    }
    syncSelection() {
        const tags = Array.from(this.el.querySelectorAll('ui-tag'));
        const currentSelected = Array.isArray(this.value) ? this.value : [this.value];
        tags.forEach((tag) => {
            const tagValue = tag.value || tag.label;
            tag.checked = currentSelected.includes(tagValue);
        });
    }
    handleSearch = (ev) => {
        this.searchQuery = ev.detail;
        this.updateChildren();
    };
    addTags(input) {
        if (!input)
            return;
        this.isLastTagHighlighted = false;
        // Escape delimiters for regex
        const escapedDelimiters = this.delimiters.map(d => d.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')).join('|');
        const regex = new RegExp(escapedDelimiters || ',', 'g');
        const labels = input.split(regex).map(s => s.trim()).filter(s => !!s);
        labels.forEach(label => {
            // Check for duplicates (pulse logic)
            const allTags = Array.from(this.el.querySelectorAll('ui-tag'));
            const existing = allTags.find((t) => this.caseSensitive
                ? t.label === label
                : t.label.toLowerCase() === label.toLowerCase());
            if (existing) {
                existing.pulse = true;
                setTimeout(() => existing.pulse = false, 2000);
            }
            else {
                const newTag = document.createElement('ui-tag');
                newTag.setAttribute('label', label);
                this.el.appendChild(newTag);
                this.tagAdd.emit(label);
            }
        });
        this.updateChildren();
    }
    removeLastTag() {
        const tags = Array.from(this.el.querySelectorAll('ui-tag'));
        if (tags.length > 0) {
            const last = tags[tags.length - 1];
            // Emit removal sync
            const tagValue = last.value || last.label;
            // Sync internal selection if needed
            if (Array.isArray(this.value)) {
                const idx = this.value.indexOf(tagValue);
                if (idx > -1) {
                    const newValue = [...this.value];
                    newValue.splice(idx, 1);
                    this.value = newValue;
                    this.tagGroupChange.emit(this.value);
                }
            }
            this.el.removeChild(last);
            this.updateChildren();
        }
    }
    removeTagByValue(tagValue) {
        if (Array.isArray(this.value)) {
            const index = this.value.indexOf(tagValue);
            if (index > -1) {
                const newValue = [...this.value];
                newValue.splice(index, 1);
                this.value = newValue;
                this.tagGroupChange.emit(this.value);
            }
        }
        else if (this.value === tagValue) {
            this.value = '';
            this.tagGroupChange.emit(this.value);
        }
        const tags = Array.from(this.el.querySelectorAll('ui-tag'));
        const tag = tags.find(t => (t.value || t.label) === tagValue);
        if (tag) {
            this.el.removeChild(tag);
        }
        this.updateChildren();
    }
    handleAddTag = (ev) => {
        const input = ev.detail.target;
        const val = input.value;
        const key = ev.detail.key;
        if (key === 'Enter' || (this.delimiters.includes(key) && val.trim())) {
            if (this.delimiters.includes(key)) {
                ev.detail.preventDefault();
            }
            this.addTags(val);
            input.value = '';
            return;
        }
        if (key === 'Backspace' && !val) {
            if (this.isLastTagHighlighted) {
                this.removeLastTag();
                this.isLastTagHighlighted = false;
            }
            else {
                this.isLastTagHighlighted = true;
                this.updateChildren();
            }
        }
        else if (val || key !== 'Backspace') {
            this.isLastTagHighlighted = false;
            this.updateChildren();
        }
        if (key === 'Escape') {
            this.isLastTagHighlighted = false;
            this.updateChildren();
        }
    };
    // private handlePaste = (ev: ClipboardEvent) => {
    //     ev.preventDefault();
    //     const text = ev.clipboardData.getData('text');
    //     this.addTags(text);
    //     (ev.target as HTMLInputElement).value = '';
    // }
    toggleExpand = () => {
        this.isExpanded = !this.isExpanded;
    };
    render() {
        const allTags = Array.from(this.el.querySelectorAll('ui-tag'));
        const visibleTags = allTags.filter((t) => t.style.display !== 'none');
        const canShowExpand = this.max > 0 && allTags.length > this.max;
        const isEmpty = allTags.length === 0;
        const noResults = allTags.length > 0 && visibleTags.length === 0;
        const showInlineInput = (this.searchable || this.creatable) && !this.readOnly;
        return (h(Host, { key: 'a27c92c78b6c9072b966c299c67ce1677ee9e036' }, h("div", { key: 'f043228fbbe2f79c2800384c2dacaa1cb0148505', class: {
                'tag-group-container': true,
                'is-readonly': this.readOnly,
                'is-empty': isEmpty
            } }, h("ui-stack", { key: 'ca9b9a02f7650193b1633fc4a1b0c5c37e51229a', spacing: this.spacing, overlap: this.overlap, max: this.isExpanded ? 0 : this.max, wrap: "wrap" }, h("slot", { key: 'd764e67e7dc971c7949d24db226ab9154a657e27' }), showInlineInput && (h("ui-input", { key: '271591fa4b6bdca9aa879a0179c87018bcd744fc', type: "text", class: "tag-group-inline-input", placeholder: isEmpty ? this.placeholder : '', value: this.searchQuery, onInputChange: this.handleSearch, onInputKeydown: this.handleAddTag, size: "sm", variant: "borderless", hideBorder: true, fullWidth: true }))), noResults && (h("div", { key: '32a338d6978df6192b25a0e98f27079aa3b39ef9', class: "tag-group-empty no-results" }, h("span", { key: 'ce1d744f56bbd0c85eab6e9c458fade4c1b12fd1' }, "No tags match \"", this.searchQuery, "\""))) || (isEmpty && this.readOnly && (h("div", { key: '306938778dae4c4c1890278a67a1df651850792b', class: "tag-group-empty" }, h("ui-icon", { key: 'b0d025b5476d3895ff968b72eb06d5afff79b870', name: "tag", library: "lucide", size: "1.4em" }), h("span", { key: '52debfaff2c840d1a8c56119f81ec22380082392' }, "No items assigned")))), this.collapsible && canShowExpand && (h("ui-button", { key: 'a689ec4aa7f4536f0babc1edf0edeae22a151630', variant: "ghost", size: "sm", class: "tag-group-overflow-toggle", onClick: this.toggleExpand, label: this.isExpanded ? 'Show less' : `View all ${allTags.length} items` })))));
    }
    static get watchers() { return {
        "isExpanded": [{
                "handleGroupChange": 0
            }],
        "skeleton": [{
                "handleGroupChange": 0
            }],
        "shape": [{
                "handleGroupChange": 0
            }],
        "color": [{
                "handleGroupChange": 0
            }]
    }; }
};
TagGroup.style = tagGroupCss();

export { AvatarGroup as ui_avatar_group, Stack as ui_stack, TagGroup as ui_tag_group };
