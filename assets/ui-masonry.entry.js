import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const masonryCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.masonry-wrapper{width:100%;padding:16px}.masonry-filters{display:flex;gap:16px;align-items:center;margin-bottom:24px;padding:16px;background:var(--bg-primary, #f9fafb);border-radius:8px;flex-wrap:wrap}.masonry-filters .filter-group{display:flex;gap:8px;align-items:center}.masonry-filters .filter-group label{font-weight:600;font-size:0.875rem;color:var(--text-secondary, #374151)}.masonry-filters .filter-group select{padding:8px 12px;border:1px solid var(--border-strong, #d1d5db);border-radius:6px;font-size:0.875rem;background:var(--bg-primary, #ffffff);cursor:pointer;min-width:120px}.masonry-filters .filter-group select:focus{outline:none;border-color:var(--color-primary-hover, #2563eb);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 37, 99, 235), 0.1)}.masonry-filters .filter-group .sort-button{padding:8px 12px;border:1px solid var(--border-strong, #d1d5db);border-radius:6px;background:var(--bg-primary, #ffffff);cursor:pointer;transition:all 0.2s ease;color:var(--text-muted, #6b7280)}.masonry-filters .filter-group .sort-button:hover{background:var(--bg-secondary, #f3f4f6);border-color:var(--color-primary, #9ca3af)}.masonry-filters .filter-group .sort-button.active{background:var(--color-success, #3dcd58);color:var(--text-standard, #ffffff);border-color:var(--color-success, #3dcd58)}.masonry-filters .filter-group .sort-button:focus{outline:none;box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 37, 99, 235), 0.1)}.masonry-container{width:100%}.masonry-columns{column-gap:16px}.masonry-columns .masonry-item{break-inside:avoid;page-break-inside:avoid;display:inline-block;width:100%}.masonry-grid{display:grid;grid-auto-rows:auto;width:100%}.masonry-grid .masonry-item{width:100%}.masonry-flex-columns{display:flex;width:100%}.masonry-flex-columns .masonry-column{display:flex;flex-direction:column}.masonry-item{cursor:pointer;transition:transform 0.2s ease, box-shadow 0.2s ease;background:var(--bg-primary, #ffffff);border-radius:8px;overflow:hidden;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1)}.masonry-item:hover{transform:translateY(-4px);box-shadow:0 4px 12px rgba(0, 0, 0, 0.15)}.masonry-item.animate{animation:fadeInUp 0.3s ease forwards;opacity:0}.default-item img{width:100%;height:auto;display:block;object-fit:cover}.default-item .item-title{margin:12px 16px 8px;font-size:1rem;font-weight:600;color:var(--text-primary, #111827);line-height:1.4}.default-item .item-description{margin:0 16px 12px;font-size:0.875rem;color:var(--text-muted, #6b7280);line-height:1.5}.default-item .item-tags{display:flex;gap:8px;flex-wrap:wrap;margin:0 16px 16px}.default-item .item-tags .tag{padding:4px 8px;background:var(--bg-primary, #eff6ff);color:var(--color-success, #3dcd58);font-size:0.75rem;font-weight:500;border-radius:4px}.masonry-loading{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;color:var(--text-muted, #6b7280)}.masonry-loading .spinner{width:48px;height:48px;border:4px solid var(--border-default, #e5e7eb);border-top-color:var(--color-success, #3dcd58);border-radius:50%;animation:spin 0.8s linear infinite;margin-bottom:16px}.masonry-loading p{font-size:1rem;font-weight:500}.masonry-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;color:var(--text-muted, #9ca3af)}.masonry-empty i{font-size:48px;margin-bottom:16px}.masonry-empty p{font-size:1rem;font-weight:500}@keyframes fadeInUp{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes spin{to{transform:rotate(360deg)}}.skeleton-item{background:var(--bg-secondary, #f3f4f6);position:relative;overflow:hidden;border-radius:8px}.skeleton-item .skeleton-shimmer{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(90deg, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 0.5) 50%, rgba(255, 255, 255, 0) 100%);animation:shimmer 1.5s infinite;transform:translateX(-100%)}@keyframes shimmer{100%{transform:translateX(100%)}}.masonry-lightbox{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.9);z-index:9999;display:flex;flex-direction:column;align-items:center;justify-content:center;animation:fadeIn 0.3s ease}.masonry-lightbox .lightbox-close{position:absolute;top:20px;right:20px;background:transparent;border:none;color:var(--text-standard, #ffffff);font-size:2rem;cursor:pointer;z-index:10001;transition:transform 0.2s ease}.masonry-lightbox .lightbox-close:hover{transform:scale(1.1)}.masonry-lightbox .lightbox-content{display:flex;align-items:center;justify-content:center;width:100%;height:100%;padding:40px;box-sizing:border-box;position:relative}.masonry-lightbox .lightbox-nav{background:rgba(255, 255, 255, 0.1);border:none;color:var(--text-standard, #ffffff);font-size:1.5rem;padding:16px;border-radius:50%;cursor:pointer;transition:all 0.2s ease;backdrop-filter:blur(4px)}.masonry-lightbox .lightbox-nav:hover{background:rgba(255, 255, 255, 0.2);transform:scale(1.1)}.masonry-lightbox .lightbox-nav.prev{margin-right:20px}.masonry-lightbox .lightbox-nav.next{margin-left:20px}.masonry-lightbox .lightbox-image-container{position:relative;max-width:80%;max-height:80vh;border-radius:8px;overflow:hidden;box-shadow:0 20px 50px rgba(0, 0, 0, 0.5)}.masonry-lightbox .lightbox-image-container .lightbox-image{display:block;width:100%;height:100%;object-fit:contain;max-height:80vh}.masonry-lightbox .lightbox-image-container .lightbox-details{position:absolute;bottom:0;left:0;width:100%;background:linear-gradient(to top, rgba(0, 0, 0, 0.8), transparent);padding:24px;color:var(--text-standard, #ffffff);transform:translateY(100%);transition:transform 0.3s ease;box-sizing:border-box}.masonry-lightbox .lightbox-image-container .lightbox-details h3{margin:0 0 8px;font-size:1.25rem}.masonry-lightbox .lightbox-image-container .lightbox-details p{margin:0;opacity:0.8;font-size:0.9rem}.masonry-lightbox .lightbox-image-container:hover .lightbox-details{transform:translateY(0)}.masonry-lightbox .lightbox-counter{position:absolute;bottom:20px;color:rgba(255, 255, 255, 0.6);font-size:0.9rem;letter-spacing:1px}.default-item{position:relative}.default-item .image-wrapper{position:relative;overflow:hidden}.default-item .image-wrapper .item-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.4);opacity:0;transition:opacity 0.3s ease;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(2px)}.default-item .image-wrapper .item-overlay .overlay-actions{display:flex;gap:12px;transform:translateY(20px);transition:transform 0.3s ease}.default-item .image-wrapper .item-overlay .action-btn{width:40px;height:40px;border-radius:50%;background:var(--bg-primary, #ffffff);border:none;color:var(--text-secondary, #333);font-size:1rem;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2)}.default-item .image-wrapper .item-overlay .action-btn:hover{transform:translateY(-2px);background:var(--color-success, #3dcd58);color:var(--text-standard, #ffffff)}.default-item .image-wrapper:hover .item-overlay{opacity:1}.default-item .image-wrapper:hover .item-overlay .overlay-actions{transform:translateY(0)}@keyframes fadeIn{from{opacity:0}to{opacity:1}}`;

const Masonry = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.itemClick = createEvent(this, "itemClick");
        this.filterChange = createEvent(this, "filterChange");
        this.sortChange = createEvent(this, "sortChange");
        this.itemSelectionChange = createEvent(this, "itemSelectionChange");
        this.layoutChange = createEvent(this, "layoutChange");
        this.itemsLoaded = createEvent(this, "itemsLoaded");
        this.batchDelete = createEvent(this, "batchDelete");
    }
    get el() { return getElement(this); }
    items = [];
    columns = 3;
    gap = 16;
    layoutType = 'masonry';
    itemMinWidth = 200;
    itemMaxWidth = 400;
    breakpoints = '{"640":2,"768":3,"1024":4,"1280":5}';
    filterBy = '';
    sortBy = '';
    sortOrder = 'asc';
    animationDuration = 300;
    enableAnimation = true;
    loadingState = false;
    emptyMessage = 'No items to display';
    showFilters = false;
    filterOptions = [];
    lazyLoad = false;
    lazyLoadMargin = '200px';
    infiniteScroll = false;
    infiniteScrollDistance = 200;
    selectable = false;
    multiSelect = false;
    showBatchActions = false;
    lightbox = false;
    filteredItems = [];
    currentColumns = 3;
    isResizing = false;
    selectedItems = new Set();
    loadedImages = new Set();
    visibleItems = 12;
    activeImageIndex = -1;
    isLightboxOpen = false;
    itemClick;
    filterChange;
    sortChange;
    itemSelectionChange;
    layoutChange;
    itemsLoaded;
    batchDelete;
    resizeObserver;
    componentWillLoad() {
        this.updateFilteredItems();
        this.calculateColumns();
    }
    componentDidLoad() {
        this.setupResizeObserver();
        if (this.infiniteScroll) {
            this.setupInfiniteScroll();
        }
        if (this.lazyLoad) {
            this.setupLazyLoading();
        }
    }
    handleWindowKeyDown(event) {
        // Handle Lightbox navigation
        if (this.isLightboxOpen && this.lightbox) {
            if (event.key === 'Escape')
                this.closeLightbox();
            if (event.key === 'ArrowRight')
                this.nextImage(event);
            if (event.key === 'ArrowLeft')
                this.prevImage(event);
            return;
        }
        // Only handle if component has focus or selection is active
        if (this.selectedItems.size > 0 || document.activeElement === this.el) {
            this.handleKeyDown(event);
        }
    }
    handleKeyDown(event) {
        if (!this.selectable)
            return;
        // Ctrl+A: Select all items
        if (event.ctrlKey && event.key === 'a') {
            event.preventDefault();
            this.selectAll();
            return;
        }
        // Escape: Deselect all
        if (event.key === 'Escape' && this.selectedItems.size > 0) {
            event.preventDefault();
            this.deselectAll();
            return;
        }
        // Delete: Delete selected items
        if (event.key === 'Delete' && this.selectedItems.size > 0) {
            event.preventDefault();
            this.deleteSelected();
            return;
        }
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        if (this.infiniteScrollObserver) {
            this.infiniteScrollObserver.disconnect();
        }
        if (this.lazyLoadObserver) {
            this.lazyLoadObserver.disconnect();
        }
    }
    infiniteScrollObserver;
    lazyLoadObserver;
    setupInfiniteScroll() {
        if (typeof globalThis.IntersectionObserver === 'undefined') {
            return;
        }
        this.infiniteScrollObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && this.visibleItems < this.filteredItems.length) {
                    this.visibleItems = Math.min(this.visibleItems + 12, this.filteredItems.length);
                    this.itemsLoaded.emit({ count: this.visibleItems, total: this.filteredItems.length });
                }
            });
        }, { rootMargin: `${this.infiniteScrollDistance}px` });
        // Attach observer to sentinel element after render
        setTimeout(() => {
            const sentinel = this.el.shadowRoot?.querySelector('.infinite-scroll-sentinel');
            if (sentinel) {
                this.infiniteScrollObserver.observe(sentinel);
            }
        }, 100);
    }
    setupLazyLoading() {
        if (typeof globalThis.IntersectionObserver === 'undefined') {
            return;
        }
        this.lazyLoadObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const index = parseInt(entry.target.getAttribute('data-index'));
                    this.loadedImages = new Set([...this.loadedImages, index]);
                    const img = entry.target;
                    const dataSrc = img.getAttribute('data-src');
                    if (dataSrc && !img.src) {
                        img.src = dataSrc;
                    }
                    this.lazyLoadObserver.unobserve(entry.target);
                }
            });
        }, { rootMargin: this.lazyLoadMargin });
        // Attach observer to lazy images after render
        setTimeout(() => {
            const lazyImages = this.el.shadowRoot?.querySelectorAll('img[data-src]');
            lazyImages?.forEach(img => this.lazyLoadObserver.observe(img));
        }, 100);
    }
    toggleSelection(index, event) {
        if (!this.selectable)
            return;
        if (event) {
            event.stopPropagation();
        }
        const newSelected = new Set(this.selectedItems);
        if (newSelected.has(index)) {
            newSelected.delete(index);
        }
        else {
            if (!this.multiSelect) {
                newSelected.clear();
            }
            newSelected.add(index);
        }
        this.selectedItems = newSelected;
        const selectedIndices = Array.from(this.selectedItems);
        const selectedItemsData = selectedIndices.map(i => this.filteredItems[i]);
        this.itemSelectionChange.emit({ selectedItems: selectedItemsData, indices: selectedIndices });
    }
    selectAll() {
        if (!this.selectable)
            return;
        this.selectedItems = new Set(this.filteredItems.map((_, i) => i));
        const selectedIndices = Array.from(this.selectedItems);
        const selectedItemsData = selectedIndices.map(i => this.filteredItems[i]);
        this.itemSelectionChange.emit({ selectedItems: selectedItemsData, indices: selectedIndices });
    }
    deselectAll() {
        this.selectedItems = new Set();
        this.itemSelectionChange.emit({ selectedItems: [], indices: [] });
    }
    deleteSelected() {
        const indicesToDelete = Array.from(this.selectedItems);
        const itemsToDelete = indicesToDelete.map(i => this.filteredItems[i]);
        this.batchDelete.emit({ items: itemsToDelete, indices: indicesToDelete });
        this.selectedItems = new Set();
        this.itemSelectionChange.emit({ selectedItems: [], indices: [] });
    }
    watchItemsChange() {
        this.updateFilteredItems();
    }
    watchColumnsChange() {
        this.calculateColumns();
    }
    getParsedItems() {
        if (typeof this.items === 'string') {
            try {
                return JSON.parse(this.items);
            }
            catch {
                console.error('Invalid items JSON');
                return [];
            }
        }
        return this.items;
    }
    getParsedFilterOptions() {
        if (typeof this.filterOptions === 'string') {
            try {
                return JSON.parse(this.filterOptions);
            }
            catch {
                return [];
            }
        }
        return this.filterOptions;
    }
    getParsedBreakpoints() {
        try {
            return JSON.parse(this.breakpoints);
        }
        catch {
            return { 640: 2, 768: 3, 1024: 4, 1280: 5 };
        }
    }
    setupResizeObserver() {
        this.resizeObserver = new ResizeObserver(() => {
            this.isResizing = true;
            this.calculateColumns();
            setTimeout(() => {
                this.isResizing = false;
            }, 100);
        });
        const container = this.el.shadowRoot.querySelector('.masonry-container');
        if (container) {
            this.resizeObserver.observe(container);
        }
    }
    calculateColumns() {
        const container = this.el.shadowRoot?.querySelector('.masonry-container');
        if (!container)
            return;
        const width = container.clientWidth;
        const breakpoints = this.getParsedBreakpoints();
        const sortedBreakpoints = Object.keys(breakpoints)
            .map(Number)
            .sort((a, b) => b - a);
        let cols = this.columns;
        for (const bp of sortedBreakpoints) {
            if (width >= bp) {
                cols = breakpoints[bp];
                break;
            }
        }
        this.currentColumns = cols;
    }
    updateFilteredItems() {
        let items = [...this.getParsedItems()];
        // Filter
        if (this.filterBy) {
            items = items.filter(item => {
                const [key, value] = this.filterBy.split(':');
                return item[key] && item[key].toString().toLowerCase().includes(value.toLowerCase());
            });
        }
        // Sort
        if (this.sortBy) {
            items.sort((a, b) => {
                const aVal = a[this.sortBy];
                const bVal = b[this.sortBy];
                if (typeof aVal === 'number' && typeof bVal === 'number') {
                    return this.sortOrder === 'asc' ? aVal - bVal : bVal - aVal;
                }
                const aStr = String(aVal).toLowerCase();
                const bStr = String(bVal).toLowerCase();
                if (this.sortOrder === 'asc') {
                    return aStr.localeCompare(bStr);
                }
                else {
                    return bStr.localeCompare(aStr);
                }
            });
        }
        this.filteredItems = items;
    }
    handleItemClick = (item, index) => {
        this.itemClick.emit({ item, index });
    };
    handleFilterChange = (key, value) => {
        this.filterChange.emit({ filterBy: key, value });
    };
    handleSortChange = (sortBy, order) => {
        this.sortChange.emit({ sortBy, order });
    };
    getColumnItems(columnIndex) {
        if (this.layoutType === 'masonry') {
            return this.filteredItems.filter((_, index) => index % this.currentColumns === columnIndex);
        }
        return this.filteredItems;
    }
    renderFilters() {
        if (!this.showFilters)
            return null;
        const filterOptions = this.getParsedFilterOptions();
        return (h("div", { class: "masonry-filters" }, h("div", { class: "filter-group" }, h("label", null, "Filter:"), h("select", { onChange: (e) => {
                const val = e.target.value;
                const key = filterOptions[0]?.key || 'category';
                this.handleFilterChange(key, val);
            } }, h("option", { value: "" }, "All"), filterOptions.map(option => (h("option", { value: option.key }, option.label))))), h("div", { class: "filter-group" }, h("label", null, "Sort:"), h("select", { onChange: (e) => this.handleSortChange(e.target.value, this.sortOrder) }, h("option", { value: "" }, "None"), h("option", { value: "title" }, "Title"), h("option", { value: "date" }, "Date"), h("option", { value: "size" }, "Size"))), h("div", { class: "filter-group" }, h("ui-button", { variant: "ghost", class: { 'sort-button': true, 'active': this.sortOrder === 'asc' }, onClick: () => this.handleSortChange(this.sortBy, 'asc'), icon: "arrow-up", iconLibrary: "fontawesome", iconOnly: true, size: "sm" }), h("ui-button", { variant: "ghost", class: { 'sort-button': true, 'active': this.sortOrder === 'desc' }, onClick: () => this.handleSortChange(this.sortBy, 'desc'), icon: "arrow-down", iconLibrary: "fontawesome", iconOnly: true, size: "sm" }))));
    }
    renderMasonryLayout() {
        const itemsToRender = this.infiniteScroll ? this.filteredItems.slice(0, this.visibleItems) : this.filteredItems;
        return (h("div", { class: "masonry-columns", role: "grid", "aria-label": "Masonry layout", style: {
                'column-count': this.currentColumns.toString(),
                'column-gap': `${this.gap}px`,
            } }, itemsToRender.map((item, index) => (h("div", { class: {
                'masonry-item': true,
                'animate': this.enableAnimation && !this.isResizing,
                'selected': this.selectedItems.has(index),
            }, style: {
                'margin-bottom': `${this.gap}px`,
                'animation-delay': this.enableAnimation ? `${index * 50}ms` : '0ms',
            }, onClick: () => this.handleItemClick(item, index), role: "gridcell", "aria-selected": this.selectedItems.has(index) ? 'true' : 'false', tabindex: 0 }, this.selectable && (h("div", { class: "selection-checkbox" }, h("ui-checkbox", { checked: this.selectedItems.has(index), onCheckboxChange: (e) => this.toggleSelection(index, e), ariaLabel: `Select ${item.title || `item ${index + 1}`}`, size: "sm" }))), h("slot", { name: `item-${index}` }, this.renderDefaultItem(item, index))))), this.infiniteScroll && this.visibleItems < this.filteredItems.length && (h("div", { class: "infinite-scroll-sentinel" }))));
    }
    renderGridLayout() {
        const itemsToRender = this.infiniteScroll ? this.filteredItems.slice(0, this.visibleItems) : this.filteredItems;
        return (h("div", { class: "masonry-grid", role: "grid", "aria-label": "Grid layout", style: {
                'grid-template-columns': `repeat(${this.currentColumns}, 1fr)`,
                'gap': `${this.gap}px`,
            } }, itemsToRender.map((item, index) => (h("div", { class: {
                'masonry-item': true,
                'animate': this.enableAnimation && !this.isResizing,
                'selected': this.selectedItems.has(index),
            }, style: {
                'animation-delay': this.enableAnimation ? `${index * 50}ms` : '0ms',
            }, onClick: () => this.handleItemClick(item, index), role: "gridcell", "aria-selected": this.selectedItems.has(index) ? 'true' : 'false', tabindex: 0 }, this.selectable && (h("div", { class: "selection-checkbox" }, h("ui-checkbox", { checked: this.selectedItems.has(index), onCheckboxChange: (e) => this.toggleSelection(index, e), ariaLabel: `Select ${item.title || `item ${index + 1}`}`, size: "sm" }))), h("slot", { name: `item-${index}` }, this.renderDefaultItem(item, index))))), this.infiniteScroll && this.visibleItems < this.filteredItems.length && (h("div", { class: "infinite-scroll-sentinel" }))));
    }
    renderColumnsLayout() {
        const columns = Array.from({ length: this.currentColumns }, (_, i) => i);
        const itemsToRender = this.infiniteScroll ? this.filteredItems.slice(0, this.visibleItems) : this.filteredItems;
        return (h("div", { class: "masonry-flex-columns", role: "grid", "aria-label": "Column layout", style: {
                'gap': `${this.gap}px`,
            } }, columns.map(columnIndex => (h("div", { class: "masonry-column", style: { 'flex': '1' }, role: "row" }, this.getColumnItems(columnIndex).map((item, itemIndex) => {
            const globalIndex = columnIndex + (itemIndex * this.currentColumns);
            if (globalIndex >= itemsToRender.length)
                return null;
            return (h("div", { class: {
                    'masonry-item': true,
                    'animate': this.enableAnimation && !this.isResizing,
                    'selected': this.selectedItems.has(globalIndex),
                }, style: {
                    'margin-bottom': `${this.gap}px`,
                    'animation-delay': this.enableAnimation ? `${globalIndex * 50}ms` : '0ms',
                }, onClick: () => this.handleItemClick(item, globalIndex), role: "gridcell", "aria-selected": this.selectedItems.has(globalIndex) ? 'true' : 'false', tabindex: 0 }, this.selectable && (h("div", { class: "selection-checkbox" }, h("ui-checkbox", { checked: this.selectedItems.has(globalIndex), onCheckboxChange: (e) => this.toggleSelection(globalIndex, e), ariaLabel: `Select ${item.title || `item ${globalIndex + 1}`}`, size: "sm" }))), h("slot", { name: `item-${globalIndex}` }, this.renderDefaultItem(item, globalIndex))));
        })))), this.infiniteScroll && this.visibleItems < this.filteredItems.length && (h("div", { class: "infinite-scroll-sentinel" }))));
    }
    // --- Lightbox Methods ---
    openLightbox(index, event) {
        if (!this.lightbox)
            return;
        event.stopPropagation();
        this.activeImageIndex = index;
        this.isLightboxOpen = true;
        document.body.style.overflow = 'hidden'; // Prevent scroll
    }
    closeLightbox() {
        this.isLightboxOpen = false;
        document.body.style.overflow = '';
    }
    nextImage(event) {
        if (event)
            event.stopPropagation();
        if (this.activeImageIndex < this.filteredItems.length - 1) {
            this.activeImageIndex++;
        }
        else {
            this.activeImageIndex = 0; // Loop
        }
    }
    prevImage(event) {
        if (event)
            event.stopPropagation();
        if (this.activeImageIndex > 0) {
            this.activeImageIndex--;
        }
        else {
            this.activeImageIndex = this.filteredItems.length - 1; // Loop
        }
    }
    renderLightbox() {
        if (!this.isLightboxOpen || this.activeImageIndex === -1)
            return null;
        const item = this.filteredItems[this.activeImageIndex];
        if (!item)
            return null;
        return (h("div", { class: "masonry-lightbox", onClick: () => this.closeLightbox() }, h("ui-button", { variant: "ghost", class: "lightbox-close", onClick: () => this.closeLightbox(), icon: "times", iconLibrary: "fontawesome", iconOnly: true, size: "lg", ariaLabel: "Close lightbox" }), h("div", { class: "lightbox-content", onClick: e => e.stopPropagation() }, h("ui-button", { variant: "ghost", class: "lightbox-nav prev", onClick: (e) => this.prevImage(e), icon: "chevron-left", iconLibrary: "fontawesome", iconOnly: true, size: "lg", ariaLabel: "Previous image" }), h("div", { class: "lightbox-image-container" }, h("img", { src: item.image, alt: item.title, class: "lightbox-image" }), h("div", { class: "lightbox-details" }, h("h3", null, item.title), item.description && h("p", null, item.description))), h("ui-button", { variant: "ghost", class: "lightbox-nav next", onClick: (e) => this.nextImage(e), icon: "chevron-right", iconLibrary: "fontawesome", iconOnly: true, size: "lg", ariaLabel: "Next image" })), h("div", { class: "lightbox-counter" }, this.activeImageIndex + 1, " / ", this.filteredItems.length)));
    }
    // --- Skeleton Loading ---
    renderSkeleton() {
        // Generate empty placeholders matching current columns
        const skeletonCount = this.currentColumns * 3; // Enough to fill screen
        const items = Array.from({ length: skeletonCount }, (_, i) => i);
        // We can reuse the masonry layout logic but with skeleton items
        const columns = Array.from({ length: this.currentColumns }, (_, i) => i);
        return (h("div", { class: "masonry-flex-columns skeleton-wrapper", style: { 'gap': `${this.gap}px` } }, columns.map(columnIndex => (h("div", { class: "masonry-column", style: { 'flex': '1' } }, items
            .filter((_, index) => index % this.currentColumns === columnIndex)
            .map((_, i) => (h("div", { class: "masonry-item skeleton-item", style: {
                'margin-bottom': `${this.gap}px`,
                // Randomize height for realistic effect
                'height': `${200 + (i * 50) % 200}px`
            } }, h("div", { class: "skeleton-shimmer" })))))))));
    }
    renderDefaultItem(item, index) {
        const itemStyle = {
            'min-width': this.itemMinWidth ? `${this.itemMinWidth}px` : undefined,
            'max-width': this.itemMaxWidth ? `${this.itemMaxWidth}px` : undefined,
        };
        return (h("div", { class: "default-item", style: itemStyle }, h("div", { class: "image-wrapper" }, item.image && (this.lazyLoad ? (h("img", { "data-src": item.image, "data-index": index.toString(), alt: item.title || 'Item', class: "lazy-image", style: { opacity: this.loadedImages.has(index) ? '1' : '0.3' } })) : (h("img", { src: item.image, alt: item.title || 'Item', loading: "lazy" }))), h("div", { class: "item-overlay" }, h("div", { class: "overlay-actions" }, this.lightbox && (h("ui-button", { variant: "ghost", onClick: (e) => this.openLightbox(index, e), ariaLabel: "View Fullscreen", icon: "expand-alt", iconLibrary: "fontawesome", iconOnly: true, size: "sm" })), h("ui-button", { variant: "ghost", ariaLabel: "Like", icon: "heart", iconLibrary: "fontawesome", iconOnly: true, size: "sm" }), h("ui-button", { variant: "ghost", ariaLabel: "Info", icon: "info", iconLibrary: "fontawesome", iconOnly: true, size: "sm" })))), item.title && h("h3", { class: "item-title" }, item.title), item.description && h("p", { class: "item-description" }, item.description), item.tags && (h("div", { class: "item-tags" }, item.tags.map(tag => (h("span", { class: "tag" }, tag)))))));
    }
    renderEmpty() {
        return (h("div", { class: "masonry-empty" }, h("ui-icon", { name: "inbox", library: "fontawesome" }), h("p", null, this.emptyMessage)));
    }
    renderBatchActions() {
        if (!this.showBatchActions || this.selectedItems.size === 0)
            return null;
        return (h("div", { class: "batch-actions-toolbar", role: "toolbar", "aria-label": "Batch actions" }, h("span", { class: "selection-count" }, this.selectedItems.size, " selected"), h("div", { class: "action-buttons" }, h("ui-button", { variant: "ghost", onClick: () => this.selectAll(), ariaLabel: "Select all items", icon: "check-square", iconLibrary: "fontawesome", label: "Select All" }), h("ui-button", { variant: "ghost", onClick: () => this.deselectAll(), ariaLabel: "Clear selection", icon: "times", iconLibrary: "fontawesome", label: "Clear" }), h("ui-button", { variant: "ghost", onClick: () => this.deleteSelected(), class: "delete-button", ariaLabel: "Delete selected items", icon: "trash", iconLibrary: "fontawesome", label: "Delete" }))));
    }
    render() {
        if (this.loadingState) {
            return this.renderSkeleton();
        }
        if (this.filteredItems.length === 0) {
            return this.renderEmpty();
        }
        return (h("div", { class: "masonry-wrapper", tabindex: this.selectable ? 0 : -1 }, this.renderFilters(), this.renderBatchActions(), h("div", { class: {
                'masonry-container': true,
                [`masonry-${this.layoutType}`]: true,
            } }, this.layoutType === 'masonry' && this.renderMasonryLayout(), this.layoutType === 'grid' && this.renderGridLayout(), this.layoutType === 'columns' && this.renderColumnsLayout()), this.renderLightbox()));
    }
    static get watchers() { return {
        "items": [{
                "watchItemsChange": 0
            }],
        "filterBy": [{
                "watchItemsChange": 0
            }],
        "sortBy": [{
                "watchItemsChange": 0
            }],
        "sortOrder": [{
                "watchItemsChange": 0
            }],
        "columns": [{
                "watchColumnsChange": 0
            }]
    }; }
};
Masonry.style = masonryCss();

export { Masonry as ui_masonry };
