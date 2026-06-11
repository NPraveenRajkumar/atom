import { r as registerInstance, c as createEvent, h } from './index-DUsoYu9r.js';

const dockCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.dock-container{display:inline-flex;align-items:center;justify-content:center;padding:8px;border-radius:16px;background:var(--dock-bg, rgba(255, 255, 255, 0.8));box-shadow:var(--dock-shadow, 0 4px 16px rgba(0, 0, 0, 0.1));border:1px solid var(--dock-border, rgba(0, 0, 0, 0.1))}.dock-blur{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px)}.dock-bottom,.dock-top{flex-direction:row}.dock-left,.dock-right{flex-direction:column}.dock-items{display:flex;gap:8px;align-items:center}.dock-left .dock-items,.dock-right .dock-items{flex-direction:column}.dock-item{position:relative;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;border-radius:12px;background:var(--dock-item-bg, transparent);transition:all 0.2s ease;outline:none}.dock-item:hover{background:var(--dock-item-hover-bg, rgba(0, 0, 0, 0.05))}.dock-item:focus{box-shadow:0 0 0 2px var(--primary-color, var(--color-primary, #10b981))}.dock-item:active{transform:scale(0.95) !important}.dock-item-disabled{opacity:0.4;cursor:not-allowed;pointer-events:none}.dock-sm .dock-item{width:40px;height:40px;padding:8px}.dock-md .dock-item{width:56px;height:56px;padding:12px}.dock-lg .dock-item{width:72px;height:72px;padding:16px}.dock-item-content{position:relative;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.dock-item-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%;font-size:inherit;color:var(--dock-icon-color, var(--text-primary, #1f2937))}.dock-item-icon svg{width:100%;height:100%;fill:currentColor}.dock-sm .dock-item-icon{font-size:20px}.dock-md .dock-item-icon{font-size:28px}.dock-lg .dock-item-icon{font-size:36px}.dock-item-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 5px;display:flex;align-items:center;justify-content:center;background-color:var(--badge-bg, var(--color-danger, #ef4444));color:var(--badge-color, var(--text-standard, #ffffff));border-radius:9px;font-size:11px;font-weight:600;line-height:1;border:2px solid var(--dock-bg, var(--bg-primary, #ffffff))}.dock-item-label{position:absolute;padding:6px 12px;background:var(--label-bg, rgba(0, 0, 0, 0.8));color:var(--label-color, var(--text-standard, #ffffff));border-radius:6px;font-size:12px;font-weight:500;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity 0.2s ease;z-index:10}.dock-bottom .dock-item-label{bottom:calc(100% + 12px);left:50%;transform:translateX(-50%)}.dock-top .dock-item-label{top:calc(100% + 12px);left:50%;transform:translateX(-50%)}.dock-left .dock-item-label{left:calc(100% + 12px);top:50%;transform:translateY(-50%)}.dock-right .dock-item-label{right:calc(100% + 12px);top:50%;transform:translateY(-50%)}.dock-item-hovered .dock-item-label{opacity:1}.dock-item-label::after{content:"";position:absolute;width:0;height:0;border:5px solid transparent}.dock-bottom .dock-item-label::after{top:100%;left:50%;transform:translateX(-50%);border-top-color:var(--label-bg, rgba(0, 0, 0, 0.8))}.dock-top .dock-item-label::after{bottom:100%;left:50%;transform:translateX(-50%);border-bottom-color:var(--label-bg, rgba(0, 0, 0, 0.8))}.dock-left .dock-item-label::after{right:100%;top:50%;transform:translateY(-50%);border-right-color:var(--label-bg, rgba(0, 0, 0, 0.8))}.dock-right .dock-item-label::after{left:100%;top:50%;transform:translateY(-50%);border-left-color:var(--label-bg, rgba(0, 0, 0, 0.8))}@media (prefers-color-scheme: dark){.dock-container{background:var(--dock-bg, rgba(30, 30, 30, 0.8));border-color:var(--dock-border, rgba(255, 255, 255, 0.1))}.dock-item:hover{background:var(--dock-item-hover-bg, rgba(255, 255, 255, 0.1))}.dock-item-icon{color:var(--dock-icon-color, #f3f4f6)}}@media (prefers-reduced-motion: reduce){.dock-item,.dock-item-label,.dock-item-bounce{transition:none;animation:none}}.active-indicator{position:absolute;width:4px;height:4px;background-color:var(--active-indicator-color, var(--color-primary, #10b981));border-radius:50%;bottom:4px}.dock-top .active-indicator{top:4px;bottom:auto}.dock-left .active-indicator{left:4px;top:50%;transform:translateY(-50%);bottom:auto}.dock-right .active-indicator{right:4px;top:50%;transform:translateY(-50%);bottom:auto}@keyframes dockBounce{0%,20%,50%,80%,100%{transform:translateY(0) scale(1)}40%{transform:translateY(-10px) scale(1)}60%{transform:translateY(-5px) scale(1)}}.dock-item-bounce{animation:dockBounce 2s infinite}.dock-separator{width:1px;height:24px;background-color:var(--separator-bg, rgba(0, 0, 0, 0.1));margin:0 4px}.dock-left .dock-separator,.dock-right .dock-separator{width:24px;height:1px;margin:4px 0}@media (prefers-color-scheme: dark){.dock-separator{background-color:rgba(255, 255, 255, 0.1)}.active-indicator{background-color:var(--color-primary, #60a5fa)}}`;

const Dock = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dockItemClick = createEvent(this, "dockItemClick");
        this.itemsOrderChange = createEvent(this, "itemsOrderChange");
    }
    // ... (props remain same)
    items = '[]';
    position = 'bottom';
    size = 'md';
    magnify = true;
    blurEffect = true;
    showLabels = true;
    /** Default library for icons */
    iconLibrary = 'default';
    /** localStorage key for persisting drag-reorder. Empty string disables persistence. */
    persistKey = '';
    parsedItems = [];
    hoveredIndex = -1;
    dockItemClick;
    itemsOrderChange;
    isDragging = false;
    draggedIndex = -1;
    dragX = 0;
    dragY = 0;
    targetIndex = -1;
    itemsContainer;
    componentWillLoad() {
        if (this.persistKey) {
            try {
                const stored = localStorage.getItem(this.persistKey);
                if (stored) {
                    this.parsedItems = JSON.parse(stored);
                    return;
                }
            }
            catch { /* ignore */ }
        }
        this.parseItems(this.items);
    }
    onItemsPropChange(newVal) {
        this.parseItems(newVal);
    }
    parseItems(itemsString) {
        try {
            this.parsedItems = JSON.parse(itemsString);
        }
        catch (error) {
            console.error('Invalid JSON for dock items:', error);
            this.parsedItems = [];
        }
    }
    handleItemClick(item) {
        if (item.disabled || item.separator)
            return;
        this.dockItemClick.emit({
            itemId: String(item.id ?? ''),
            item: item
        });
    }
    handleMouseEnter(index) {
        this.hoveredIndex = index;
    }
    handleMouseLeave() {
        this.hoveredIndex = -1;
    }
    getMagnificationScale(index) {
        if (!this.magnify || this.hoveredIndex === -1)
            return 1;
        if (this.isDragging)
            return 1;
        const distance = Math.abs(index - this.hoveredIndex);
        // Smooth exponential decay curve for "Apple-style" magnification
        const maxScale = 1.6;
        const sigma = 1.25;
        const scale = 1 + (maxScale - 1) * Math.exp(-(distance * distance) / (2 * sigma * sigma));
        return Math.max(1, scale);
    }
    handleDragStart(e, index) {
        if (this.parsedItems[index].separator)
            return;
        this.isDragging = true;
        this.draggedIndex = index;
        this.targetIndex = index;
        this.dragX = e.clientX;
        this.dragY = e.clientY;
        document.addEventListener('mousemove', this.handleGlobalMouseMove);
        document.addEventListener('mouseup', this.handleGlobalMouseUp);
    }
    handleGlobalMouseMove = (e) => {
        if (!this.isDragging)
            return;
        this.dragX = e.clientX;
        this.dragY = e.clientY;
        // Calculate new target index based on position
        if (this.itemsContainer) {
            const items = Array.from(this.itemsContainer.querySelectorAll('.dock-item'));
            let closestIndex = -1;
            let minDistance = Infinity;
            items.forEach((item, idx) => {
                const rect = item.getBoundingClientRect();
                const centerX = rect.left + rect.width / 2;
                const centerY = rect.top + rect.height / 2;
                const dist = this.position === 'bottom' || this.position === 'top'
                    ? Math.abs(e.clientX - centerX)
                    : Math.abs(e.clientY - centerY);
                if (dist < minDistance) {
                    minDistance = dist;
                    closestIndex = idx;
                }
            });
            if (closestIndex !== -1 && closestIndex !== this.targetIndex) {
                this.targetIndex = closestIndex;
            }
        }
    };
    handleGlobalMouseUp = () => {
        if (!this.isDragging)
            return;
        if (this.targetIndex !== -1 && this.targetIndex !== this.draggedIndex) {
            const newItems = [...this.parsedItems];
            const [draggedItem] = newItems.splice(this.draggedIndex, 1);
            newItems.splice(this.targetIndex, 0, draggedItem);
            this.parsedItems = newItems;
            this.itemsOrderChange.emit(this.parsedItems);
            if (this.persistKey) {
                try {
                    localStorage.setItem(this.persistKey, JSON.stringify(this.parsedItems));
                }
                catch { /* ignore */ }
            }
        }
        this.isDragging = false;
        this.draggedIndex = -1;
        this.targetIndex = -1;
        document.removeEventListener('mousemove', this.handleGlobalMouseMove);
        document.removeEventListener('mouseup', this.handleGlobalMouseUp);
    };
    renderDockItem(item, index) {
        if (item.separator) {
            return h("div", { class: "dock-separator", role: "separator" });
        }
        const scale = this.getMagnificationScale(index);
        const isHovered = this.hoveredIndex === index;
        const isDragged = this.draggedIndex === index;
        const isTarget = this.targetIndex === index;
        // Add margin adjustment to prevent overlapping during magnification
        const baseMargin = 4;
        let margin = this.magnify && this.hoveredIndex !== -1
            ? baseMargin + (scale - 1) * 20
            : baseMargin;
        // Shift items to make room for the dragged item
        let translateX = 0;
        let translateY = 0;
        if (this.isDragging && !isDragged) {
            const shift = 40; // Approximate width of an item
            if (this.position === 'bottom' || this.position === 'top') {
                if (index >= this.targetIndex && index < this.draggedIndex)
                    translateX = shift;
                if (index <= this.targetIndex && index > this.draggedIndex)
                    translateX = -shift;
            }
            else {
                if (index >= this.targetIndex && index < this.draggedIndex)
                    translateY = shift;
                if (index <= this.targetIndex && index > this.draggedIndex)
                    translateY = -shift;
            }
        }
        const itemStyle = {
            transform: isDragged
                ? `translate(${this.dragX - (this.dragX - 0)}px, ${this.dragY - (this.dragY - 0)}px) scale(1.1)`
                : `translate(${translateX}px, ${translateY}px) scale(${scale})`,
            margin: `0 ${margin}px`,
            transition: this.isDragging && isDragged ? 'none' : 'transform 0.2s cubic-bezier(0.4, 0, 0.2, 1), margin 0.2s cubic-bezier(0.4, 0, 0.2, 1)',
            zIndex: isDragged ? '1000' : '1',
            pointerEvents: this.isDragging && !isDragged ? 'none' : 'auto',
            opacity: isDragged ? '0.8' : '1'
        };
        // Fix absolute positioning for the dragged item
        if (isDragged) {
            itemStyle.position = 'fixed';
            itemStyle.left = `${this.dragX - 25}px`; // Center roughly
            itemStyle.top = `${this.dragY - 25}px`;
            itemStyle.margin = '0';
            itemStyle.transform = 'scale(1.2)';
        }
        return (h("ui-tooltip", { content: item.label, position: this.position === 'bottom' ? 'top' : (this.position === 'top' ? 'bottom' : (this.position === 'left' ? 'right' : 'left')), disabled: this.showLabels }, h("div", { class: {
                'dock-item': true,
                'dock-item-disabled': !!item.disabled,
                'dock-item-active': !!item.active,
                'dock-item-bounce': !!item.bounce,
                'dock-item-hovered': isHovered,
                'dock-item-dragged': isDragged,
                'dock-item-target': isTarget
            }, style: itemStyle, onClick: () => !this.isDragging && this.handleItemClick(item), onMouseEnter: () => !this.isDragging && this.handleMouseEnter(index), onMouseLeave: () => !this.isDragging && this.handleMouseLeave(), onMouseDown: (e) => this.handleDragStart(e, index), role: "button", tabindex: item.disabled ? -1 : 0, "aria-label": item.label, "aria-disabled": item.disabled ? 'true' : 'false', slot: "target" }, h("div", { class: "dock-item-content" }, item.icon && (h("div", { class: "dock-item-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.5rem" }))), item.badge !== undefined && item.badge > 0 && (h("span", { class: "dock-item-badge" }, item.badge))), item.active && h("div", { class: "active-indicator" }), this.showLabels && (h("div", { class: "dock-item-label" }, item.label)))));
    }
    render() {
        const dockClasses = {
            'dock-container': true,
            [`dock-${this.position}`]: true,
            [`dock-${this.size}`]: true,
            'dock-blur': this.blurEffect
        };
        return (h("div", { key: 'f022edbbd0b53e600fd30e5cf97cc1b2e83e0f38', class: dockClasses }, h("div", { key: 'abb7911fe7fbec90e25ccc030299d95ec148c36d', class: "dock-items", ref: el => this.itemsContainer = el }, this.parsedItems.map((item, index) => this.renderDockItem(item, index)))));
    }
    static get watchers() { return {
        "items": [{
                "onItemsPropChange": 0
            }]
    }; }
};
Dock.style = dockCss();

export { Dock as ui_dock };
