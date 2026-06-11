import { r as registerInstance, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const uiDockHostCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.ui-dock-host-layout{display:flex;width:100%;height:100%;overflow:hidden}.dock-main-area{flex:1;overflow:auto;position:relative;background:var(--ui-content-bg, #f8fafc)}.dock-panel{background:var(--ui-surface, var(--bg-primary, #ffffff));color:var(--ui-text, #1e293b);box-shadow:0 4px 24px rgba(0, 0, 0, 0.08);border-radius:12px;overflow:hidden;display:flex;flex-direction:column;min-width:180px;min-height:120px;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);border:1px solid var(--ui-border, var(--border-subtle, #e2e8f0))}.dock-panel.left{border-left:4px solid var(--color-primary, #6366f1);border-radius:0 12px 12px 0}.dock-panel.right{border-right:4px solid var(--color-primary, #6366f1);border-radius:12px 0 0 12px}.dock-panel.top{border-top:4px solid var(--color-primary, #6366f1);border-radius:0 0 12px 12px}.dock-panel.bottom{border-bottom:4px solid var(--color-primary, #6366f1);border-radius:12px 12px 0 0}.dock-panel.floating{background:var(--ui-surface, var(--bg-primary, #ffffff));box-shadow:0 12px 48px rgba(0, 0, 0, 0.15);border-radius:18px;border:1px solid rgba(99, 102, 241, 0.2);min-width:120px;min-height:80px;z-index:9999}.dock-resize-handle{background:rgba(99, 102, 241, 0.1);border-radius:0 0 12px 0;position:absolute;right:0;bottom:0;width:16px;height:16px;cursor:nwse-resize;z-index:10;transition:background 0.2s}.dock-resize-handle:hover{background:rgba(99, 102, 241, 0.3)}.dock-header{background:var(--bg-primary, #f8fafc);padding:10px 16px;font-weight:700;font-size:0.875rem;color:var(--color-primary, #475569);display:flex;align-items:center;justify-content:space-between;cursor:move;user-select:none;border-bottom:1px solid var(--border-subtle, #f1f5f9)}.dock-float-btn{background:var(--bg-primary, #eff6ff);border:1px solid var(--border-subtle, #dbeafe);color:var(--color-primary-hover, #2563eb);padding:4px 10px;border-radius:6px;font-size:11px;font-weight:600;cursor:pointer;margin-left:8px;transition:all 0.2s}.dock-float-btn:hover{background:var(--bg-primary, #dbeafe);transform:translateY(-1px)}.dock-content{flex:1;padding:16px;overflow:auto;line-height:1.5}@media (prefers-color-scheme: dark){.dock-header{background:var(--bg-primary, #1e293b);color:var(--text-standard, #f1f5f9);border-bottom-color:var(--color-primary, #334155)}.dock-float-btn{background:var(--color-primary, #334155);border-color:var(--color-primary, #475569);color:var(--color-primary, #60a5fa)}}`;

const UiDockHost = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    get el() { return getElement(this); }
    dock = 'left';
    width = '320px';
    height = '320px';
    relative = false;
    position = { x: 100, y: 100 };
    dragOffset = { x: 0, y: 0 };
    dragging = false;
    onHeaderMouseDown = (ev) => {
        if (this.dock === 'float') {
            this.dragging = true;
            this.dragOffset = {
                x: ev.clientX - this.position.x,
                y: ev.clientY - this.position.y
            };
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
        }
    };
    onMouseMove = (ev) => {
        if (this.dragging) {
            // Assign a new object to trigger reactivity
            this.position = {
                x: ev.clientX - this.dragOffset.x,
                y: ev.clientY - this.dragOffset.y
            };
        }
        if (this.resizing) {
            const newWidth = Math.max(120, ev.clientX - this.el.getBoundingClientRect().left);
            const newHeight = Math.max(80, ev.clientY - this.el.getBoundingClientRect().top);
            this.width = newWidth + 'px';
            this.height = newHeight + 'px';
        }
    };
    onMouseUp = () => {
        this.dragging = false;
        this.resizing = false;
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
    };
    resizing = false;
    // Removed unused resizeStart
    onResizeMouseDown = (ev) => {
        if (this.dock === 'float') {
            ev.stopPropagation();
            this.resizing = true;
            document.addEventListener('mousemove', this.onMouseMove);
            document.addEventListener('mouseup', this.onMouseUp);
        }
    };
    toggleFloat = () => {
        this.dock = this.dock === 'float' ? 'left' : 'float';
        const event = new CustomEvent('dockChange', { detail: { dock: this.dock }, bubbles: true });
        this.el.dispatchEvent(event);
    };
    getDockStyle() {
        if (this.dock === 'float') {
            return {
                position: 'fixed',
                left: `${this.position.x}px`,
                top: `${this.position.y}px`,
                width: this.width,
                height: this.height,
                zIndex: '1000',
            };
        }
        const style = {
            flexShrink: '0',
            zIndex: '200',
        };
        if (this.dock === 'left' || this.dock === 'right') {
            style.width = this.width;
            style.height = '100%';
        }
        else {
            style.width = '100%';
            style.height = this.height;
        }
        return style;
    }
    getFlexDirection() {
        switch (this.dock) {
            case 'left': return 'row';
            case 'right': return 'row-reverse';
            case 'top': return 'column';
            case 'bottom': return 'column-reverse';
            default: return 'row';
        }
    }
    render() {
        const isFloating = this.dock === 'float';
        return (h(Host, { key: 'ae3a9906a747c4ae3d2f504e230b6438261bc699', class: {
                'ui-dock-host-layout': true,
                'is-floating': isFloating,
                [`is-docked-${this.dock}`]: !isFloating,
                'is-relative': this.relative
            }, style: {
                display: isFloating ? 'block' : 'flex',
                flexDirection: this.getFlexDirection(),
                width: '100%',
                height: '100%',
                position: this.relative ? 'relative' : 'fixed',
                top: '0',
                left: '0',
                pointerEvents: isFloating ? 'none' : 'auto' // Allow clicking through layout when only a floating window exists
            } }, h("div", { key: '9c64f35a9e8225b8ab4a4ca7b1ff516676a1b2aa', class: "dock-main-area", style: { flex: '1', overflow: 'auto', pointerEvents: 'auto' } }, h("slot", { key: '73fa260f89788adb5d6f04fc985052aa31fc1e5d', name: "main" })), h("div", { key: 'a2ec976d0c2268a1022fbf043936671a2932985f', class: {
                'dock-panel': true,
                'floating': isFloating,
                [this.dock]: !isFloating
            }, style: {
                ...this.getDockStyle(),
                pointerEvents: 'auto'
            } }, h("div", { key: '12ae10fc29ce6cdb243964765cd5e6ea4d01742c', class: "dock-header", onMouseDown: this.onHeaderMouseDown }, h("span", { key: 'c0d6ef086badd0b21ab9c2d66fbf0a226d7be995', class: "dock-header-content" }, h("slot", { key: '09ac92cfe25a30b2213e2aefb26e71b5401dbfd0', name: "header" }, "Dock Host")), h("ui-button", { key: 'bf3971544a8e4ae3de4a311e8fcc71d679b8d9b7', variant: "ghost", onClick: this.toggleFloat, title: isFloating ? 'Dock' : 'Float', size: "sm", icon: isFloating ? 'layout' : 'maximize', iconLibrary: "lucide", label: isFloating ? 'Dock' : 'Float' })), h("div", { key: 'c7bc3b6668e730f5e466c977e625890ad820cb06', class: "dock-content" }, h("slot", { key: '50e0ce9c5beff1b054732c28bdcad6a01f2bd1ef' })), isFloating && (h("div", { key: 'd827c4c190fcd6a1fdf258d9524b7646e1d05619', class: "dock-resize-handle", onMouseDown: this.onResizeMouseDown, style: { position: 'absolute', right: '0', bottom: '0', width: '16px', height: '16px', cursor: 'nwse-resize', zIndex: '10' } })))));
    }
};
UiDockHost.style = uiDockHostCss();

export { UiDockHost as ui_dock_host };
