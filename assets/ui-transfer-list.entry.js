import { r as registerInstance, c as createEvent, h, H as Host } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const transferListCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%;--tl-radius:12px;--tl-shadow:0 4px 12px rgba(0, 0, 0, 0.05);--tl-active-gradient:linear-gradient(135deg, var(--ui-color-primary) 0%, #6366f1 100%);--tl-transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.transfer-container{display:flex;background:var(--ui-bg-default, var(--bg-primary, #ffffff));border:1px solid var(--ui-border-default, var(--border-default, #e5e7eb));border-radius:var(--ui-radius-lg, 12px);overflow:hidden;box-shadow:var(--ui-shadow-sm, 0 1px 3px rgba(0, 0, 0, 0.1));height:auto;min-height:200px;position:relative;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);font-family:var(--ui-font-family, inherit)}.transfer-container.is-vertical{flex-direction:column}.transfer-container.is-vertical .transfer-section{flex:1;border:none}.transfer-container.is-vertical .transfer-controls{flex-direction:row;padding:10px;border-top:1px solid var(--ui-border-default);border-bottom:1px solid var(--ui-border-default)}.transfer-container.is-vertical .control-buttons{flex-direction:row}.transfer-section{flex:1;display:flex;flex-direction:column;position:relative;min-width:0}.transfer-list-box{flex:1;border:1px solid var(--ui-border-default, var(--border-default, #e5e7eb));border-radius:var(--tl-radius);overflow:hidden;background:var(--ui-bg-var(--bg-primary, #ffffff), var(--bg-primary, #ffffff));display:flex;flex-direction:column;box-shadow:var(--tl-shadow);transition:var(--tl-transition)}.transfer-list-box:focus-within{border-color:var(--ui-color-primary);box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1), 0 8px 24px rgba(0, 0, 0, 0.08)}.transfer-list-header{padding:14px 16px;background:var(--ui-bg-muted, var(--bg-primary, #f9fafb));border-bottom:1px solid var(--ui-border-default, var(--border-default, #e5e7eb));display:flex;align-items:center;gap:10px;font-size:14px;color:var(--ui-text-primary, var(--text-primary, #111827))}.header-actions{display:flex;gap:8px;margin-right:4px}.action-btn{background:transparent;border:none;padding:4px;cursor:pointer;color:var(--ui-text-secondary);border-radius:4px;display:flex;align-items:center;transition:all 0.2s}.action-btn:hover{background:rgba(0, 0, 0, 0.05);color:var(--ui-color-primary)}.header-title{flex:1;font-weight:700;letter-spacing:-0.01em}.header-count{font-size:11px;font-weight:600;color:var(--ui-text-secondary, var(--text-muted, #6b7280));background:rgba(0, 0, 0, 0.05);padding:2px 8px;border-radius:10px;transition:transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.header-count.pop-anim{transform:scale(1.4);background:var(--ui-color-primary);color:var(--text-standard, #ffffff)}.transfer-search{padding:12px;border-bottom:1px solid var(--ui-border-default, var(--border-default, #e5e7eb));position:relative}.transfer-search input{width:100%;padding:8px 12px;border:1.5px solid var(--ui-border-default, var(--border-strong, #d1d5db));border-radius:8px;font-size:13px;outline:none;background:var(--ui-bg-var(--bg-primary, #ffffff), var(--bg-primary, #ffffff));color:var(--ui-text-primary);transition:var(--tl-transition)}.transfer-search input:focus{border-color:var(--ui-color-primary);background:var(--bg-primary, #ffffff)}.transfer-list-body{overflow-y:auto;padding:8px 0;flex:1;min-height:200px;scrollbar-width:thin;scrollbar-color:rgba(0, 0, 0, 0.1) transparent}.transfer-list-body::-webkit-scrollbar{width:6px}.transfer-list-body::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.1);border-radius:10px}.transfer-item{padding:10px 16px;font-size:14px;cursor:pointer;transition:var(--tl-transition);user-select:none;display:flex;align-items:center;position:relative;gap:12px}.transfer-item:hover:not(.disabled){background:rgba(0, 0, 0, 0.02);transform:translateX(4px)}.transfer-item.selected{background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.06);color:var(--ui-color-primary);font-weight:500}.transfer-item.selected::after{content:"";position:absolute;left:0;top:0;bottom:0;width:4px;background:var(--tl-active-gradient)}.transfer-item.disabled{opacity:0.4;cursor:not-allowed;background:var(--ui-bg-muted)}.transfer-item-main{display:flex;align-items:center;gap:12px;flex:1}.selected-check{color:var(--ui-color-primary);opacity:0.8}.transfer-group-header{padding:8px 16px;font-size:11px;font-weight:700;text-transform:uppercase;color:var(--ui-text-secondary);background:var(--ui-bg-muted);letter-spacing:0.05em;margin-top:8px;border-bottom:1px solid var(--ui-border-default)}.transfer-group-header:first-of-type{margin-top:0}.transfer-item-content{display:flex;align-items:center;justify-content:space-between;width:100%}.transfer-item-label{font-weight:500;color:var(--ui-text-primary)}.transfer-item-desc{font-size:12px;color:var(--ui-text-secondary);margin-top:1px}.transfer-empty{padding:40px 20px;text-align:center;color:var(--ui-text-muted, var(--text-muted, #9ca3af));font-size:13px;display:flex;flex-direction:column;align-items:center;gap:12px}.transfer-empty svg{opacity:0.3}.transfer-controls{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:0 16px;gap:12px;background:var(--ui-bg-muted, var(--bg-primary, #f9fafb));border-left:1px solid var(--ui-border-default, var(--border-default, #e5e7eb));border-right:1px solid var(--ui-border-default, var(--border-default, #e5e7eb));position:relative}.transfer-controls.resizable-divider{width:32px;padding:0;cursor:col-resize}.transfer-controls.resizable-divider::after{content:"";position:absolute;width:4px;height:24px;background:var(--ui-border-default);border-radius:2px;left:50%;top:50%;transform:translate(-50%, -50%)}.transfer-controls.resizable-divider:hover::after{background:var(--ui-color-primary)}.transfer-controls.resizable-divider .control-buttons{pointer-events:auto}.control-buttons{display:flex;flex-direction:column;gap:8px}.transfer-button{width:40px;height:40px;display:flex;align-items:center;justify-content:center;border:1.5px solid var(--ui-border-default, var(--border-strong, #d1d5db));background:var(--ui-bg-var(--bg-primary, #ffffff), var(--bg-primary, #ffffff));border-radius:12px;cursor:pointer;transition:var(--tl-transition);color:var(--ui-text-secondary, var(--text-secondary, #4b5563));box-shadow:0 2px 6px rgba(0, 0, 0, 0.04)}.transfer-button:hover:not(:disabled){border-color:var(--ui-color-primary);color:var(--ui-color-primary);transform:scale(1.1);box-shadow:0 4px 12px rgba(var(--color-primary-rgb, 59, 130, 246), 0.15)}.transfer-button:active:not(:disabled){transform:scale(0.95)}.transfer-button:disabled{opacity:0.4;cursor:not-allowed;background:var(--ui-bg-muted)}.transfer-reorder{display:flex;flex-direction:column;gap:10px;margin-top:20px;padding-top:20px;border-top:2px dashed var(--ui-border-default, var(--border-default, #e5e7eb))}.transfer-list-footer{border-top:1px solid var(--ui-border-default, var(--border-default, #e5e7eb));padding:10px 16px;background:var(--ui-bg-muted, var(--bg-primary, #f9fafb));display:flex;justify-content:center}.transfer-item.draggable-item{cursor:grab}.transfer-item.draggable-item:active{cursor:grabbing}.transfer-item.dragging{opacity:0.4;border:1px dashed var(--ui-color-primary);transform:scale(0.98)}.transfer-table{width:100%;border-collapse:collapse;font-size:13px}.transfer-table th{text-align:left;padding:10px 16px;background:var(--ui-bg-muted);color:var(--ui-text-secondary);font-weight:600;font-size:11px;text-transform:uppercase;letter-spacing:0.05em}.transfer-table td{padding:10px 16px;border-bottom:1px solid var(--ui-border-default);color:var(--ui-text-primary)}.transfer-table tr{cursor:pointer;transition:all 0.2s}.transfer-table tr:hover:not(.disabled){background:rgba(0, 0, 0, 0.02)}.transfer-table tr.selected{background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.06);color:var(--ui-color-primary)}.transfer-table tr.selected td{font-weight:500;color:var(--ui-color-primary)}.tree-children{margin-left:20px;border-left:1.5px dashed var(--ui-border-default)}.tree-node:hover{background:rgba(0, 0, 0, 0.015)}mark.search-highlight{background:rgba(254, 240, 138, 0.8);color:var(--color-danger, #854d0e);padding:0 2px;border-radius:2px}@keyframes itemFly{from{opacity:0;transform:scale(0.9)}to{opacity:1;transform:scale(1)}}.transfer-item-new{animation:itemPop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}@keyframes itemPop{0%{transform:scale(0.9);opacity:0;background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.05)}100%{transform:scale(1);opacity:1;background:transparent}}:host([variant=glass]) .transfer-list-box{background:rgba(255, 255, 255, 0.7);backdrop-filter:blur(12px);border-color:rgba(255, 255, 255, 0.3)}[data-theme=dark] .transfer-list-box,:host-context(.dark-theme) .transfer-list-box{background:var(--bg-secondary, #111827);border-color:var(--border-default, #374151)}[data-theme=dark] .transfer-list-header,[data-theme=dark] .transfer-list-footer,:host-context(.dark-theme) .transfer-list-header,:host-context(.dark-theme) .transfer-list-footer{background:var(--bg-primary, #1f2937);color:var(--text-standard, #ffffff)}[data-theme=dark] .header-count,:host-context(.dark-theme) .header-count{background:rgba(255, 255, 255, 0.1);color:var(--text-muted, #9ca3af)}[data-theme=dark] .transfer-search input,:host-context(.dark-theme) .transfer-search input{background:var(--bg-primary, #1f2937);border-color:var(--border-default, #374151);color:var(--text-standard, #ffffff)}[data-theme=dark] .transfer-item,:host-context(.dark-theme) .transfer-item{color:var(--bg-secondary, #d1d5db)}[data-theme=dark] .transfer-item:hover:not(.disabled),:host-context(.dark-theme) .transfer-item:hover:not(.disabled){background:rgba(255, 255, 255, 0.03)}[data-theme=dark] .transfer-item.selected,:host-context(.dark-theme) .transfer-item.selected{background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.15);color:var(--color-primary, #60a5fa)}[data-theme=dark] .transfer-button,:host-context(.dark-theme) .transfer-button{background:var(--bg-primary, #1f2937);border-color:var(--border-default, #374151);color:var(--text-standard, #ffffff)}[data-theme=dark] .transfer-button:disabled,:host-context(.dark-theme) .transfer-button:disabled{background:var(--bg-secondary, #111827)}[data-theme=dark] .tree-children,:host-context(.dark-theme) .tree-children{border-left-color:var(--border-default, #374151)}`;

const TransferList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.transferChange = createEvent(this, "transferChange");
        this.selectionChanged = createEvent(this, "selectionChanged");
    }
    /** Source items (left list) */
    sourceItems = [];
    /** Target items (right list) */
    targetItems = [];
    /** Titles for source and target lists */
    titles = ['Available', 'Selected'];
    /** Enable search functionality */
    searchable = true;
    /** Enable sorting functionality */
    sortable = false;
    /** Enable reordering in target list */
    allowReorder = false;
    /** Maximum number of items allowed in target list */
    max = Infinity;
    /** Placeholder for search input */
    searchPlaceholder = 'Search items...';
    /** Show select all checkbox */
    showSelectAll = true;
    /** Disabled state */
    disabled = false;
    /** Height of each list */
    height = '300px';
    /** Mode of the transfer list */
    mode = 'list';
    /** Enable drag and drop */
    enableDrag = false;
    /** Enable one-way mode (copy instead of move) */
    oneWay = false;
    /** Pagination support */
    pagination = false;
    pageSize = 10;
    /** Columns for table mode */
    columns = [];
    /** Loading state */
    loading = false;
    /** Default library for icons */
    iconLibrary = 'default';
    /** Custom item renderer function */
    itemRenderer = null;
    /** Property to group items by (e.g., 'category') */
    groupBy = '';
    /** Enable glassmorphism variant */
    variant = 'default';
    /** Layout orientation */
    layout = 'horizontal';
    /** Enable panel resizing (only for horizontal layout) */
    resizable = false;
    /** Custom filter option function */
    filterOption = null;
    /** Locale object for internationalization */
    locale = {
        itemUnit: 'item',
        itemsUnit: 'items',
        notFoundContent: 'No items',
        searchPlaceholder: 'Search items...',
        titles: ['Available', 'Selected']
    };
    /** State */
    sourceSearch = '';
    targetSearch = '';
    sourceSelected = new Set();
    targetSelected = new Set();
    lastSelected = null;
    draggingItem = null;
    newlyMovedKeys = new Set();
    sourcePage = 1;
    targetPage = 1;
    badgeAnimating = { source: false, target: false };
    sourceSort = 'none';
    targetSort = 'none';
    dividerPosition = 50; // Percentage
    contextMenu = { visible: false, x: 0, y: 0, item: null, side: null };
    /** Events */
    transferChange;
    selectionChanged;
    getSourceItems() {
        const items = typeof this.sourceItems === 'string' ? JSON.parse(this.sourceItems) : this.sourceItems;
        return this.sortable ? [...items].sort((a, b) => a.label.localeCompare(b.label)) : items;
    }
    getTargetItems() {
        const items = typeof this.targetItems === 'string' ? JSON.parse(this.targetItems) : this.targetItems;
        return (this.sortable && !this.allowReorder) ? [...items].sort((a, b) => a.label.localeCompare(b.label)) : items;
    }
    getTitles() {
        return typeof this.titles === 'string' ? JSON.parse(this.titles) : this.titles;
    }
    filterItems(items, search) {
        if (!search)
            return items;
        const query = search.toLowerCase();
        if (this.filterOption) {
            return items.filter(i => this.filterOption(query, i));
        }
        return items.filter(i => (i.label ?? '').toLowerCase().includes(query) || (i.description && i.description.toLowerCase().includes(query)));
    }
    handleItemClick = (side, key, e) => {
        const selected = side === 'source' ? this.sourceSelected : this.targetSelected;
        const items = side === 'source' ? this.getSourceItems() : this.getTargetItems();
        const search = side === 'source' ? this.sourceSearch : this.targetSearch;
        const filtered = this.filterItems(items, search);
        let newSelected = new Set(selected);
        // Shift-Click Range Selection
        if (e && e.shiftKey && this.lastSelected && this.lastSelected.side === side) {
            const idx1 = filtered.findIndex(i => i.key === this.lastSelected.key);
            const idx2 = filtered.findIndex(i => i.key === key);
            if (idx1 !== -1 && idx2 !== -1) {
                const start = Math.min(idx1, idx2);
                const end = Math.max(idx1, idx2);
                for (let i = start; i <= end; i++) {
                    if (!filtered[i].disabled)
                        newSelected.add(filtered[i].key);
                }
            }
        }
        else if (e && (e.ctrlKey || e.metaKey)) {
            // Toggle single with Ctrl
            if (newSelected.has(key))
                newSelected.delete(key);
            else
                newSelected.add(key);
        }
        else {
            // Standard click: Toggle or Reset others (Standard Transfer List usually toggle-multiple though)
            // I'll stick to toggle for Transfer List but record lastSelected
            if (newSelected.has(key))
                newSelected.delete(key);
            else
                newSelected.add(key);
        }
        this.lastSelected = { key, side };
        // Cascading Tree Selection
        if (this.mode === 'tree') {
            const isChecked = newSelected.has(key);
            const findItem = (list) => {
                for (const item of list) {
                    if (item.key === key)
                        return item;
                    if (item.children) {
                        const found = findItem(item.children);
                        if (found)
                            return found;
                    }
                }
                return null;
            };
            const item = findItem(items);
            if (item && item.children) {
                const toggleChildren = (children, check) => {
                    children.forEach(c => {
                        if (!c.disabled) {
                            if (check)
                                newSelected.add(c.key);
                            else
                                newSelected.delete(c.key);
                        }
                        if (c.children)
                            toggleChildren(c.children, check);
                    });
                };
                toggleChildren(item.children, isChecked);
            }
        }
        if (side === 'source')
            this.sourceSelected = new Set(newSelected);
        else
            this.targetSelected = new Set(newSelected);
        this.emitSelectionChange();
    };
    handleKeyDown = (e, side, key) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            if (!this.disabled) {
                this.handleItemClick(side, key);
            }
        }
    };
    moveToTarget = () => {
        if (this.disabled)
            return;
        const sourceItems = this.getSourceItems();
        const targetItems = this.getTargetItems();
        const itemsToMove = sourceItems.filter(item => this.sourceSelected.has(item.key));
        if (targetItems.length + itemsToMove.length > this.max) {
            alert(`Cannot move more than ${this.max} items.`);
            return;
        }
        if (this.oneWay) {
            const newItems = itemsToMove.filter(i => !targetItems.some(t => t.key === i.key));
            this.targetItems = [...targetItems, ...newItems];
        }
        else {
            this.sourceItems = sourceItems.filter(item => !this.sourceSelected.has(item.key));
            this.targetItems = [...targetItems, ...itemsToMove];
        }
        this.sourceSelected = new Set();
        this.newlyMovedKeys = new Set(itemsToMove.map(i => i.key));
        this.badgeAnimating = { ...this.badgeAnimating, target: true };
        setTimeout(() => {
            this.newlyMovedKeys = new Set();
            this.badgeAnimating = { ...this.badgeAnimating, target: false };
        }, 500);
        this.emitChange();
    };
    moveToSource = () => {
        if (this.disabled)
            return;
        const itemsToMove = this.getTargetItems().filter(item => this.targetSelected.has(item.key));
        this.targetItems = this.getTargetItems().filter(item => !this.targetSelected.has(item.key));
        if (!this.oneWay) {
            this.sourceItems = [...this.getSourceItems(), ...itemsToMove];
        }
        this.targetSelected = new Set();
        this.newlyMovedKeys = new Set(itemsToMove.map(i => i.key));
        this.badgeAnimating = { ...this.badgeAnimating, source: true };
        setTimeout(() => {
            this.newlyMovedKeys = new Set();
            this.badgeAnimating = { ...this.badgeAnimating, source: false };
        }, 500);
        this.emitChange();
    };
    moveAllToTarget = () => {
        if (this.disabled)
            return;
        const sourceItems = this.getSourceItems();
        const targetItems = this.getTargetItems();
        if (targetItems.length + sourceItems.length > this.max) {
            alert(`Cannot move all items. Limit is ${this.max}.`);
            return;
        }
        if (this.oneWay) {
            const newItems = sourceItems.filter(i => !targetItems.some(t => t.key === i.key));
            this.targetItems = [...targetItems, ...newItems];
        }
        else {
            this.targetItems = [...targetItems, ...sourceItems];
            this.sourceItems = [];
        }
        this.sourceSelected = new Set();
        this.emitChange();
    };
    moveAllToSource = () => {
        if (this.disabled)
            return;
        if (!this.oneWay) {
            const targetItems = this.getTargetItems();
            this.sourceItems = [...this.getSourceItems(), ...targetItems];
        }
        this.targetItems = [];
        this.targetSelected = new Set();
        this.emitChange();
    };
    reorder = (dir) => {
        const targetItems = this.getTargetItems();
        if (this.targetSelected.size === 0)
            return;
        const selectedKeys = Array.from(this.targetSelected);
        const items = [...targetItems];
        // Sort selected indices based on direction to prevent collision
        const indices = selectedKeys.map(k => items.findIndex(i => i.key === k)).sort((a, b) => dir === 'up' ? a - b : b - a);
        indices.forEach(idx => {
            const newIdx = dir === 'up' ? idx - 1 : idx + 1;
            if (newIdx >= 0 && newIdx < items.length) {
                const [moved] = items.splice(idx, 1);
                items.splice(newIdx, 0, moved);
            }
        });
        this.targetItems = items;
        this.badgeAnimating = { ...this.badgeAnimating, target: true };
        setTimeout(() => { this.badgeAnimating = { ...this.badgeAnimating, target: false }; }, 300);
        this.emitChange();
    };
    bulkAction = (side, action) => {
        const items = side === 'source' ? this.getSourceItems() : this.getTargetItems();
        const search = side === 'source' ? this.sourceSearch : this.targetSearch;
        const filtered = this.filterItems(items, search);
        const selected = side === 'source' ? this.sourceSelected : this.targetSelected;
        let newSelected = new Set(selected);
        if (action === 'all') {
            filtered.forEach(i => {
                if (!i.disabled)
                    newSelected.add(i.key);
            });
        }
        else if (action === 'none') {
            filtered.forEach(i => newSelected.delete(i.key));
        }
        else if (action === 'invert') {
            filtered.forEach(i => {
                if (!i.disabled) {
                    if (newSelected.has(i.key))
                        newSelected.delete(i.key);
                    else
                        newSelected.add(i.key);
                }
            });
        }
        if (side === 'source')
            this.sourceSelected = new Set(newSelected);
        else
            this.targetSelected = new Set(newSelected);
        this.emitSelectionChange();
    };
    highlightSearchText(text, search) {
        if (!search || !text)
            return text;
        const query = search.toLowerCase();
        const parts = text.split(new RegExp(`(${query})`, 'gi'));
        return parts.map(part => part.toLowerCase() === query ? h("mark", { class: "search-highlight" }, part) : part);
    }
    emitChange() {
        this.transferChange.emit({ source: this.getSourceItems(), target: this.getTargetItems() });
        this.emitSelectionChange();
    }
    emitSelectionChange() {
        this.selectionChanged.emit({ sourceSelected: Array.from(this.sourceSelected), targetSelected: Array.from(this.targetSelected) });
    }
    toggleSelectAll = (side, checked) => {
        const items = side === 'source' ? this.getSourceItems() : this.getTargetItems();
        const search = side === 'source' ? this.sourceSearch : this.targetSearch;
        const filtered = this.filterItems(items, search);
        const newSelected = new Set(side === 'source' ? this.sourceSelected : this.targetSelected);
        if (checked) {
            filtered.forEach(i => newSelected.add(i.key));
        }
        else {
            filtered.forEach(i => newSelected.delete(i.key));
        }
        if (side === 'source')
            this.sourceSelected = newSelected;
        else
            this.targetSelected = newSelected;
        this.emitSelectionChange();
    };
    // Drag & Drop Handlers
    handleDragStart = (e, item, side) => {
        if (!this.enableDrag || this.disabled || item.disabled) {
            e.preventDefault();
            return;
        }
        this.draggingItem = { key: item.key, side };
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/plain', JSON.stringify(item));
        // Add a class to styling
        e.target.classList.add('dragging');
    };
    handleDragOver = (e) => {
        if (!this.enableDrag || this.disabled)
            return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    handleDrop = (e, targetSide) => {
        if (!this.enableDrag || this.disabled || !this.draggingItem)
            return;
        e.preventDefault();
        const { key, side } = this.draggingItem;
        this.draggingItem = null;
        // Reset dragging class
        const draggingEl = this.el.shadowRoot?.querySelector('.dragging');
        if (draggingEl)
            draggingEl.classList.remove('dragging');
        // If dropped on the same side, do nothing (unless we implement reordering too)
        if (side === targetSide)
            return;
        // Execute move
        if (side === 'source') {
            // Moving from Source -> Target
            const sourceItems = this.getSourceItems();
            const itemToMove = sourceItems.find(i => i.key === key);
            if (itemToMove) {
                if (this.oneWay) {
                    // Copy
                    const targetItems = this.getTargetItems();
                    if (!targetItems.some(i => i.key === key)) {
                        this.targetItems = [...targetItems, itemToMove];
                    }
                }
                else {
                    // Move
                    this.sourceSelected.add(key); // select it temporarily to reuse move logic or just move manual
                    //  Manual move logic for single item
                    const targetItems = this.getTargetItems();
                    if (targetItems.length + 1 > this.max)
                        return;
                    this.sourceItems = sourceItems.filter(i => i.key !== key);
                    this.targetItems = [...targetItems, itemToMove];
                    this.sourceSelected.delete(key);
                }
            }
        }
        else {
            // Moving from Target -> Source
            if (this.oneWay) {
                // Just remove from target
                const targetItems = this.getTargetItems();
                this.targetItems = targetItems.filter(i => i.key !== key);
            }
            else {
                // Move back
                const targetItems = this.getTargetItems();
                const itemToMove = targetItems.find(i => i.key === key);
                if (itemToMove) {
                    this.targetItems = targetItems.filter(i => i.key !== key);
                    this.sourceItems = [...this.getSourceItems(), itemToMove];
                    this.targetSelected.delete(key);
                }
            }
        }
        this.emitChange();
    };
    toggleSort = (side) => {
        if (side === 'source')
            this.sourceSort = this.sourceSort === 'asc' ? 'desc' : 'asc';
        else
            this.targetSort = this.targetSort === 'asc' ? 'desc' : 'asc';
    };
    sortItems(items, order) {
        if (order === 'none')
            return items;
        return [...items].sort((a, b) => {
            const res = (a.label ?? '').localeCompare(b.label ?? '');
            return order === 'asc' ? res : -res;
        });
    }
    handleDividerMouseDown = (e) => {
        if (!this.resizable || this.layout === 'vertical')
            return;
        e.preventDefault();
        const startX = e.clientX;
        const startPos = this.dividerPosition;
        const containerWidth = this.el.querySelector('.transfer-container')?.clientWidth ?? 0;
        const onMouseMove = (moveEvent) => {
            const delta = ((moveEvent.clientX - startX) / containerWidth) * 100;
            this.dividerPosition = Math.min(Math.max(startPos + delta, 20), 80);
        };
        const onMouseUp = () => {
            document.removeEventListener('mousemove', onMouseMove);
            document.removeEventListener('mouseup', onMouseUp);
        };
        document.addEventListener('mousemove', onMouseMove);
        document.addEventListener('mouseup', onMouseUp);
    };
    handleContextMenu = (e, item, side) => {
        e.preventDefault();
        this.contextMenu = { visible: true, x: e.clientX, y: e.clientY, item, side };
    };
    closeContextMenu = () => {
        this.contextMenu = { ...this.contextMenu, visible: false };
    };
    el; // Need to access host element for ref
    getSelectionSummary(side) {
        const selectedKeys = side === 'source' ? this.sourceSelected : this.targetSelected;
        if (selectedKeys.size === 0)
            return null;
        const items = side === 'source' ? this.sourceItems : this.targetItems;
        const itemsList = items;
        const selectedItems = itemsList.filter(i => selectedKeys.has(i.key));
        if (this.groupBy) {
            const groupCounts = {};
            selectedItems.forEach(i => {
                const g = i[this.groupBy] || 'Other';
                groupCounts[g] = (groupCounts[g] || 0) + 1;
            });
            return Object.entries(groupCounts)
                .map(([g, c]) => `${c} ${g}`)
                .join(', ');
        }
        return '';
    }
    render() {
        const isVertical = this.layout === 'vertical';
        return (h(Host, { key: 'ef965ec2d77dfa9f377091f06a61ac8456bfc084', ref: el => this.el = el, onClick: this.closeContextMenu }, h("div", { key: '4e1aa392d7d667d228f860f664592e9a39cbaded', class: {
                'transfer-container': true,
                'is-vertical': isVertical,
                'variant-glass': this.variant === 'glass'
            } }, h("div", { key: '1de4ee40158e28ed1d71c20a0a2a28d73bf405ad', class: "transfer-section source", style: !isVertical && this.resizable ? { flex: `0 0 ${this.dividerPosition}%` } : undefined }, this.renderList('source')), h("div", { key: 'b36335fd3bb837fc5432e4a2cac969524c24c60b', class: { 'transfer-controls': true, 'resizable-divider': this.resizable && !isVertical }, onMouseDown: this.handleDividerMouseDown }, h("div", { key: 'e5e630b8898a19837a232ec24522237fa9b1ca29', class: "control-buttons" }, h("ui-button", { key: '723baf7ebada286062844d9b1bc429f5d8d66312', variant: "ghost", size: "md", iconOnly: true, icon: isVertical ? "play-skip-back" : "play-skip-forward", iconLibrary: "lucide", iconStyle: { transform: isVertical ? 'rotate(90deg)' : '' }, disabled: this.disabled || this.getSourceItems().length === 0, onClick: this.moveAllToTarget, ariaLabel: "Move All Right", class: "transfer-button" }), h("ui-button", { key: 'f389d40c0e38846515a302d15523b896a3df6c3e', variant: "ghost", size: "md", iconOnly: true, icon: isVertical ? "chevron-down" : "chevron-right", iconLibrary: "lucide", disabled: this.disabled || this.sourceSelected.size === 0, onClick: this.moveToTarget, ariaLabel: "Move Selected Right", class: "transfer-button" }), h("ui-button", { key: '0c7e67f6871a9327a4c95798650dee907448b496', variant: "ghost", size: "md", iconOnly: true, icon: isVertical ? "chevron-up" : "chevron-left", iconLibrary: "lucide", disabled: this.disabled || this.targetSelected.size === 0, onClick: this.moveToSource, ariaLabel: "Move Selected Left", class: "transfer-button" }), h("ui-button", { key: 'e6afc1e4a60648e63e4c02a413e359f75a743583', variant: "ghost", size: "md", iconOnly: true, icon: isVertical ? "play-skip-forward" : "play-skip-back", iconLibrary: "lucide", iconStyle: { transform: isVertical ? 'rotate(90deg)' : '' }, disabled: this.disabled || this.getTargetItems().length === 0, onClick: this.moveAllToSource, ariaLabel: "Move All Left", class: "transfer-button" }))), h("div", { key: '4626e6393402ecbf3e5f4c919081ac690105a7f8', class: "transfer-section target", style: !isVertical && this.resizable ? { flex: '1' } : undefined }, this.renderList('target'), this.allowReorder && (h("div", { key: '53778a0ef11e8af735955e4fdcaa9a7771890fa3', class: "transfer-reorder-floated" }, h("ui-button", { key: 'b332b36745eda62b47f3b380f21f00fc42d1d53f', variant: "ghost", size: "sm", iconOnly: true, icon: "arrow-up", iconLibrary: "lucide", disabled: this.targetSelected.size === 0, onClick: () => this.reorder('up'), ariaLabel: "Move Up", class: "transfer-button circle" }), h("ui-button", { key: '0b94cc9d83861ddba02fc59efeb1dfd27aab632e', variant: "ghost", size: "sm", iconOnly: true, icon: "arrow-down", iconLibrary: "lucide", disabled: this.targetSelected.size === 0, onClick: () => this.reorder('down'), ariaLabel: "Move Down", class: "transfer-button circle" })))), this.contextMenu.visible && (h("div", { key: 'cf41b01cbeb2bec8cfc768077026ddf4f1cd92ea', class: "transfer-context-menu", style: { top: `${this.contextMenu.y}px`, left: `${this.contextMenu.x}px` } }, h("div", { key: '2f8bce002d77529bee84f28e4ce152d4b58fe972', class: "menu-item", onClick: () => {
                if (this.contextMenu.side === 'source')
                    this.moveToTarget();
                else
                    this.moveToSource();
            } }, h("ui-icon", { key: '71bf8c920d4e5ebc27a12d658d9d0b3bbf7244bc', name: "send", library: "lucide", size: "14" }), " Move to ", this.contextMenu.side === 'source' ? 'Selected' : 'Available'), h("div", { key: '6cc356d98029ef9274e4e0d63f4879d8e03a06a0', class: "menu-item danger", onClick: () => {
                if (this.contextMenu.side === 'source')
                    this.sourceSelected.delete(this.contextMenu.item.key);
                else
                    this.targetSelected.delete(this.contextMenu.item.key);
            } }, h("ui-icon", { key: 'cbfe5dec61fe84404a968868f505c840464b5ae8', name: "x", library: "lucide", size: "14" }), " Deselect"))))));
    }
    renderList(side) {
        const items = side === 'source' ? this.getSourceItems() : this.getTargetItems();
        const order = side === 'source' ? this.sourceSort : this.targetSort;
        const sorted = this.sortItems(items, order);
        const search = side === 'source' ? this.sourceSearch : this.targetSearch;
        const selected = side === 'source' ? this.sourceSelected : this.targetSelected;
        const title = this.getTitles()[side === 'source' ? 0 : 1];
        const filteredItems = this.filterItems(sorted, search);
        const allSelected = filteredItems.length > 0 && filteredItems.every(i => selected.has(i.key));
        const indeterminate = filteredItems.some(i => selected.has(i.key)) && !allSelected;
        // Pagination Logic
        const page = side === 'source' ? this.sourcePage : this.targetPage;
        const totalPages = Math.ceil(filteredItems.length / this.pageSize);
        let displayItems = filteredItems;
        if (this.pagination) {
            const start = (page - 1) * this.pageSize;
            displayItems = filteredItems.slice(start, start + this.pageSize);
        }
        let content;
        if (this.loading) {
            content = this.renderSkeleton();
        }
        else if (this.mode === 'tree') {
            content = this.renderTreeView(displayItems, selected, side);
        }
        else if (this.mode === 'table') {
            content = this.renderTableView(displayItems, selected, side);
        }
        else {
            content = this.renderListView(displayItems, selected, side);
        }
        return (h("div", { class: "transfer-list-box" }, h("div", { class: "transfer-list-header" }, this.showSelectAll && this.mode !== 'tree' && (h("ui-checkbox", { checked: allSelected, indeterminate: indeterminate, onCheckboxChange: (e) => this.toggleSelectAll(side, e.detail.checked), disabled: this.disabled || filteredItems.length === 0, size: "sm" })), h("span", { class: "header-title" }, title), this.sortable && (h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: order === 'asc' ? "arrow-up-z-a" : "arrow-down-a-z", iconLibrary: "lucide", iconSize: "14px", onClick: () => this.toggleSort(side), ariaLabel: "Toggle Sort" })), h("div", { class: "header-actions" }, h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "check-check", iconLibrary: "lucide", iconSize: "14px", onClick: () => this.bulkAction(side, 'all'), ariaLabel: "Select All Search Results" }), h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "x", iconLibrary: "lucide", iconSize: "14px", onClick: () => this.bulkAction(side, 'none'), ariaLabel: "Clear Selection" }), h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "list-restart", iconLibrary: "lucide", iconSize: "14px", onClick: () => this.bulkAction(side, 'invert'), ariaLabel: "Invert Selection" })), h("span", { class: { 'header-count': true, 'pop-anim': side === 'source' ? this.badgeAnimating.source : this.badgeAnimating.target } }, filteredItems.filter(i => selected.has(i.key)).length, "/", filteredItems.length)), this.searchable && (h("div", { class: "transfer-search" }, h("ui-input", { type: "text", placeholder: this.searchPlaceholder, value: search, onInputChange: (e) => {
                const val = e.detail;
                if (side === 'source') {
                    this.sourceSearch = val;
                    this.sourcePage = 1;
                }
                else {
                    this.targetSearch = val;
                    this.targetPage = 1;
                }
            }, prefixIcon: "search", size: "sm", fullWidth: true }))), h("div", { class: "transfer-list-body", style: { height: this.height }, onDragOver: this.handleDragOver, onDrop: (e) => this.handleDrop(e, side) }, filteredItems.length === 0 && !this.loading ? (h("div", { class: "transfer-empty" }, h("ui-icon", { name: "inbox", library: "lucide", size: "2.5em" }), h("span", null, this.locale.notFoundContent || 'No items available'))) : (content)), h("div", { class: "transfer-list-footer" }, this.pagination && totalPages > 1 ? (h("div", { class: "pagination-controls" }, h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "chevron-left", iconLibrary: "lucide", iconSize: "1.2em", disabled: page === 1 || this.disabled, onClick: () => side === 'source' ? this.sourcePage-- : this.targetPage--, ariaLabel: "Previous page" }), h("span", { class: "pagination-info" }, page, " / ", totalPages), h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "chevron-right", iconLibrary: "lucide", iconSize: "1.2em", disabled: page === totalPages || this.disabled, onClick: () => side === 'source' ? this.sourcePage++ : this.targetPage++, ariaLabel: "Next page" }))) : (h("div", { class: "footer-summary" }, this.getSelectionSummary(side))), h("slot", { name: `${side}-footer` }))));
    }
    renderListView(items, selected, side) {
        const search = side === 'source' ? this.sourceSearch : this.targetSearch;
        // Grouping Logic
        if (this.groupBy) {
            const groups = {};
            items.forEach(item => {
                const val = item[this.groupBy] || 'Other';
                if (!groups[val])
                    groups[val] = [];
                groups[val].push(item);
            });
            return Object.entries(groups).map(([groupName, groupItems]) => [
                h("div", { class: "transfer-group-header" }, groupName),
                ...groupItems.map(item => this.renderItem(item, selected, side, search))
            ]);
        }
        return items.map(item => this.renderItem(item, selected, side, search));
    }
    renderItem(item, selected, side, search) {
        return (h("div", { class: {
                'transfer-item': true,
                'selected': selected.has(item.key),
                'disabled': !!item.disabled,
                'draggable-item': this.enableDrag,
                'transfer-item-new': this.newlyMovedKeys.has(item.key)
            }, draggable: this.enableDrag && !item.disabled && !this.disabled, onDragStart: (e) => this.handleDragStart(e, item, side), onClick: (e) => !item.disabled && !this.disabled && this.handleItemClick(side, item.key, e), onContextMenu: (e) => this.handleContextMenu(e, item, side), onKeyDown: (e) => this.handleKeyDown(e, side, item.key), tabindex: item.disabled ? -1 : 0, role: "option", "aria-selected": selected.has(item.key) ? 'true' : 'false', "aria-disabled": item.disabled ? 'true' : 'false' }, this.itemRenderer ? (h("div", { class: "transfer-item-custom", innerHTML: sanitizeHTML(this.itemRenderer(item)) })) : (h("div", { class: "transfer-item-content" }, h("div", { class: "transfer-item-main" }, item.icon && (h("span", { class: "transfer-item-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.2em" }))), h("div", { class: "transfer-item-text" }, h("span", { class: "transfer-item-label" }, this.highlightSearchText(item.label ?? '', search)), item.description && h("span", { class: "transfer-item-desc" }, this.highlightSearchText(item.description, search)))), selected.has(item.key) && h("ui-icon", { name: "check", library: "lucide", size: "0.9em", class: "selected-check" })))));
    }
    renderSkeleton() {
        return Array.from({ length: 5 }).map(() => (h("div", { class: "transfer-item skeleton-item" }, h("div", { class: "skeleton-line", style: { width: '60%' } }), h("div", { class: "skeleton-line", style: { width: '40%', marginTop: '6px' } }))));
    }
    renderTableView(items, selected, side) {
        return (h("table", { class: "transfer-table" }, h("thead", null, h("tr", null, this.columns.map(col => h("th", null, col.title)))), h("tbody", null, items.map(item => (h("tr", { class: {
                'selected': selected.has(item.key),
                'disabled': !!item.disabled
            }, onClick: () => !item.disabled && !this.disabled && this.handleItemClick(side, item.key), onKeyDown: (e) => this.handleKeyDown(e, side, item.key), tabindex: item.disabled ? -1 : 0, role: "row", "aria-selected": selected.has(item.key) ? 'true' : 'false' }, this.columns.map(col => (h("td", null, item[col.dataIndex] || item[col.dataIndex.toLowerCase()] || '')))))))));
    }
    renderTreeView(items, selected, side, level = 0) {
        const search = side === 'source' ? this.sourceSearch : this.targetSearch;
        return items.map(item => (h("div", null, h("div", { class: {
                'transfer-item': true,
                'tree-node': true,
                'selected': selected.has(item.key),
                'disabled': !!item.disabled
            }, style: { paddingLeft: `${12 + level * 20}px` }, onClick: (e) => !item.disabled && !this.disabled && this.handleItemClick(side, item.key, e), onKeyDown: (e) => this.handleKeyDown(e, side, item.key), tabindex: item.disabled ? -1 : 0, role: "treeitem", "aria-selected": selected.has(item.key) ? 'true' : 'false', "aria-disabled": item.disabled ? 'true' : 'false', "aria-level": level + 1 }, item.icon && (h("span", { class: "transfer-item-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.1em" }))), h("span", { class: "transfer-item-label" }, this.highlightSearchText(item.label ?? '', search)), item.description && h("span", { class: "transfer-item-desc" }, this.highlightSearchText(item.description, search))), item.children && item.children.length > 0 && (h("div", { class: "tree-children" }, this.renderTreeView(item.children, selected, side, level + 1))))));
    }
};
TransferList.style = transferListCss();

export { TransferList as ui_transfer_list };
