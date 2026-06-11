import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const dragDropCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.drag-drop{display:flex;flex-direction:column;align-items:stretch;gap:var(--drag-drop-gap, 0.5rem);background:var(--drag-drop-background, transparent);padding:var(--drag-drop-padding, 0)}.drag-drop--horizontal{flex-direction:row;flex-wrap:wrap}.drag-drop__item{display:flex;align-items:center;padding:0.75rem 1rem;background:var(--drag-drop-item-background, var(--ui-color-surface, var(--bg-primary, #ffffff)));border:1px solid var(--drag-drop-border-color, var(--ui-color-border, #d9d9d9));border-radius:var(--drag-drop-border-radius, 0.5rem);box-shadow:var(--drag-drop-item-shadow, 0 1px 2px rgba(15, 23, 42, 0.05));transition:transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;cursor:grab}.drag-drop__item--dragging{opacity:0.5;box-shadow:var(--drag-drop-dragging-shadow, 0 15px 25px rgba(15, 23, 42, 0.15))}.drag-drop__item--over{border-color:var(--drag-drop-highlight-color, var(--ui-color-primary, #0b5fff))}.drag-drop__handle{width:32px;height:32px;display:inline-flex;align-items:center;justify-content:center;margin-inline-end:0.75rem;border-radius:50%;background:var(--drag-drop-handle-background, rgba(15, 23, 42, 0.05));color:var(--drag-drop-handle-color, var(--ui-color-base, #0b5fff));font-size:1rem;line-height:1;cursor:grab}.drag-drop__content{flex:1;display:flex;flex-direction:column;gap:0.2rem}.drag-drop__label{font-weight:600;color:var(--drag-drop-label-color, var(--ui-color-base, #0f172a))}.drag-drop__description{font-size:0.875rem;color:var(--drag-drop-description-color, var(--ui-color-muted, var(--text-muted, #6b7280)))}.drag-drop__detail{font-size:0.75rem;}.drag-drop__item:active{cursor:grabbing}`;

const UIDragDrop = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uiDragDropChange = createEvent(this, "uiDragDropChange");
        this.uiDragStart = createEvent(this, "uiDragStart");
        this.uiDragEnd = createEvent(this, "uiDragEnd");
        this.uiDrop = createEvent(this, "uiDrop");
    }
    get el() { return getElement(this); }
    items = [];
    /**
     * Layout direction of the stack.
     */
    orientation = 'vertical';
    /**
     * Space between cards (any CSS length).
     */
    gap = '0.5rem';
    /**
     * When true each card is draggable; set to false to disable the behaviour.
     */
    draggableEnabled = true;
    /**
     * Group name to allow dragging between different ui-drag-drop containers.
     */
    group = '';
    internalItems = [];
    draggingIndex = null;
    dragOverIndex = null;
    uiDragDropChange;
    uiDragStart;
    uiDragEnd;
    uiDrop;
    componentWillLoad() {
        this.syncItems();
    }
    watchItems() {
        this.syncItems();
    }
    syncItems() {
        this.internalItems = (this.items ?? []).map((item) => ({ ...item }));
    }
    onDragStart(event, index) {
        if (!this.draggableEnabled) {
            event.preventDefault();
            return;
        }
        this.draggingIndex = index;
        const item = this.internalItems[index];
        if (event.dataTransfer) {
            const data = JSON.stringify({ item, index, group: this.group });
            event.dataTransfer.setData('application/x-ui-drag-drop', data);
            event.dataTransfer.effectAllowed = 'move';
            const ghost = event.currentTarget;
            event.dataTransfer.setDragImage(ghost, 20, 20);
        }
        this.uiDragStart.emit({ item, index });
    }
    onDragOver(event, index) {
        event.preventDefault();
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
        }
        if (index !== this.draggingIndex) {
            if (this.orientation === 'horizontal') {
                // In RTL, dragging right moves toward lower indices; correct the target index.
                const isRtl = getComputedStyle(this.el).direction === 'rtl';
                if (isRtl && this.draggingIndex !== null) {
                    // Mirror: treat dragging toward higher X as moving toward lower index
                    const correctedIndex = this.internalItems.length - 1 - index;
                    const correctedDragging = this.internalItems.length - 1 - this.draggingIndex;
                    this.dragOverIndex = correctedDragging !== correctedIndex ? index : this.dragOverIndex;
                }
                else {
                    this.dragOverIndex = index;
                }
            }
            else {
                this.dragOverIndex = index;
            }
        }
    }
    onDrop(event, index) {
        event.preventDefault();
        const rawData = event.dataTransfer?.getData('application/x-ui-drag-drop');
        if (!rawData)
            return;
        try {
            const { item, index: sourceIndex, group: sourceGroup } = JSON.parse(rawData);
            if (this.group && sourceGroup !== this.group) {
                return; // Incompatible groups
            }
            const isSameContainer = this.draggingIndex !== null;
            // In RTL horizontal mode, the visual drop position is mirrored.
            const isRtlHorizontal = this.orientation === 'horizontal'
                && getComputedStyle(this.el).direction === 'rtl';
            const targetIndex = isRtlHorizontal
                ? this.internalItems.length - 1 - index
                : index;
            const adjustedSource = isRtlHorizontal
                ? this.internalItems.length - 1 - sourceIndex
                : sourceIndex;
            if (isSameContainer) {
                this.reorder(isRtlHorizontal ? adjustedSource : sourceIndex, targetIndex);
            }
            else {
                // Cross-container: Add item at index
                const newItems = [...this.internalItems];
                newItems.splice(targetIndex, 0, item);
                this.internalItems = newItems;
            }
            this.uiDrop.emit({ item, sourceIndex, targetIndex: index, sourceGroup });
            this.emitOrder();
        }
        catch (e) {
            console.error('Failed to parse drag-drop data', e);
        }
        this.draggingIndex = null;
        this.dragOverIndex = null;
    }
    onDragEnd() {
        if (this.draggingIndex !== null) {
            this.uiDragEnd.emit({ item: this.internalItems[this.draggingIndex], index: this.draggingIndex });
        }
        this.draggingIndex = null;
        this.dragOverIndex = null;
    }
    reorder(from, to) {
        const newOrder = [...this.internalItems];
        const [moved] = newOrder.splice(from, 1);
        newOrder.splice(to, 0, moved);
        this.internalItems = newOrder;
    }
    emitOrder() {
        this.uiDragDropChange.emit({
            items: this.internalItems,
            order: this.internalItems.map((item) => String(item.id)).filter((id) => id !== 'undefined'),
        });
    }
    renderItem(item, index) {
        const classes = {
            'drag-drop__item': true,
            'drag-drop__item--dragging': index === this.draggingIndex,
            'drag-drop__item--over': index === this.dragOverIndex,
        };
        return (h("div", { class: classes, role: "listitem", draggable: this.draggableEnabled, onDragStart: (event) => this.onDragStart(event, index), onDragOver: (event) => this.onDragOver(event, index), onDrop: (event) => this.onDrop(event, index), onDragEnd: () => this.onDragEnd() }, h("span", { class: "drag-drop__handle", "aria-hidden": "true" }, "::"), h("div", { class: "drag-drop__content" }, h("span", { class: "drag-drop__label" }, item.label), item.description && h("span", { class: "drag-drop__description" }, item.description), item.detail && h("sm", { class: "drag-drop__detail" }, item.detail))));
    }
    render() {
        const containerClasses = {
            'drag-drop': true,
            [`drag-drop--${this.orientation}`]: true,
        };
        const styles = {
            gap: this.gap,
        };
        return (h("div", { key: '8610eaa90602aa5ddeebce5afe2437eec3aebc97', class: containerClasses, style: styles, role: "list" }, this.internalItems.map((item, index) => this.renderItem(item, index))));
    }
    static get watchers() { return {
        "items": [{
                "watchItems": 0
            }]
    }; }
};
UIDragDrop.style = dragDropCss();

export { UIDragDrop as ui_drag_drop };
