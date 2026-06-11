import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';
import { c as calculateUniversalPlacement } from './dom-BMFah5q3.js';

const smartLocationDropdownCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%;--sld-border:#cfd8e3;--sld-border-strong:#b4c1d1;--sld-focus:#2563eb;--sld-text:#10213a;--sld-muted:#62748a;--sld-bg:#ffffff;--sld-panel:rgba(255, 255, 255, 0.98);--sld-panel-solid:#ffffff;--sld-hover:#f3f8ff;--sld-selected:#e8f1ff;--sld-chip:#edf4ff;--sld-shadow:0 18px 40px rgba(15, 23, 42, 0.16)}.location-dropdown{position:relative;width:100%;font-family:"Segoe UI", Roboto, sans-serif}.location-trigger{border:1px solid var(--sld-border);border-radius:14px;min-height:48px;width:100%;display:flex;align-items:center;justify-content:space-between;gap:10px;padding:11px 14px;background:linear-gradient(180deg, #ffffff 0%, #f8fbff 100%);color:var(--sld-text);cursor:pointer;box-shadow:0 2px 8px rgba(15, 23, 42, 0.04);transition:border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease, transform 0.2s ease}.location-trigger:hover{border-color:var(--sld-border-strong);box-shadow:0 10px 22px rgba(37, 99, 235, 0.08)}.location-trigger:focus,.location-dropdown.open .location-trigger{border-color:var(--sld-focus);box-shadow:0 0 0 4px rgba(37, 99, 235, 0.14), 0 16px 32px rgba(37, 99, 235, 0.14);outline:none}.location-dropdown.disabled .location-trigger{opacity:0.72;cursor:not-allowed}.trigger-text{flex:1;font-size:14px;font-weight:500;line-height:1.35;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.trigger-text.placeholder{color:#91a0b4}.trigger-icons{display:inline-flex;align-items:center;gap:6px}.arrow{transition:transform 0.18s ease;color:var(--sld-muted)}.arrow.open{transform:rotate(180deg)}.clear-btn,.fav-btn,.chip-remove{border:none;background:transparent;display:inline-flex;align-items:center;justify-content:center;cursor:pointer;color:var(--sld-muted);padding:0}.clear-btn:hover,.fav-btn:hover,.chip-remove:hover{color:var(--sld-text)}.clear-btn{width:24px;height:24px;border-radius:999px;background:#eef4fb}.clear-btn:hover{background:#e2ecf8}.fav-btn.active{color:#d97706}.selected-chips{display:flex;flex-wrap:wrap;gap:8px;margin-top:10px}.selected-chip{display:inline-flex;align-items:center;gap:6px;padding:5px 10px;border-radius:999px;border:1px solid #d7e7ff;background:var(--sld-chip);box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.9);max-width:100%}.chip-label{font-size:12px;color:#1c3657;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.selected-more{font-size:12px;color:#37557b;align-self:center}.menu{border:1px solid rgba(180, 193, 209, 0.72);border-radius:18px;background:var(--sld-panel-solid);background-color:var(--sld-panel-solid);backdrop-filter:blur(18px);box-shadow:var(--sld-shadow);overflow:hidden;isolation:isolate}.search-row{position:sticky;top:0;z-index:1;padding:12px;border-bottom:1px solid #edf2f7;background:var(--sld-panel)}.search-input{width:100%;border:1px solid #d4deea;border-radius:12px;padding:11px 13px;font-size:14px;outline:none;background:#f9fbfe;color:var(--sld-text);transition:border-color 0.2s ease, box-shadow 0.2s ease, background 0.2s ease}.search-input:focus{border-color:var(--sld-focus);background:#ffffff;box-shadow:0 0 0 4px rgba(37, 99, 235, 0.1)}.options-list{padding:8px;overflow-y:auto;max-height:inherit;background:var(--sld-panel-solid)}.location-option{padding:11px 12px;display:flex;align-items:center;justify-content:space-between;gap:12px;cursor:pointer;border:1px solid transparent;border-radius:14px;background:var(--sld-panel-solid);transition:background 0.18s ease, border-color 0.18s ease, box-shadow 0.18s ease, transform 0.18s ease}.location-option:hover,.location-option-highlighted{background:var(--sld-hover);border-color:#d7e7ff;box-shadow:0 10px 24px rgba(37, 99, 235, 0.08);transform:translateY(-1px)}.location-option-selected{background:var(--sld-selected);border-color:#b9d4ff;box-shadow:inset 0 1px 0 rgba(255, 255, 255, 0.85)}.location-option-disabled{opacity:0.5;cursor:not-allowed}.location-option-main{min-width:0;display:flex;align-items:center;gap:8px;flex:1}.location-option-text{min-width:0;display:flex;flex-direction:column}.location-label{font-size:13px;font-weight:600;color:var(--sld-text);white-space:normal;overflow:hidden;text-overflow:ellipsis}.location-code{font-size:11px;color:var(--sld-muted)}.location-option-meta{display:inline-flex;align-items:center;gap:8px}.location-type{font-size:10px;border:1px solid #d8e5f3;border-radius:999px;padding:4px 8px;color:#55708f;background:#f7fbff;text-transform:uppercase;letter-spacing:0.08em;font-weight:700}.fav-btn{width:28px;height:28px;border-radius:999px;background:#f6f9fc}.fav-btn:hover{background:#ebf2f8}.status{padding:14px;font-size:13px;background:var(--sld-panel-solid)}.status.loading,.status.empty{color:var(--sld-muted)}.status.error{color:#b91c1c;background:#fef2f2}.create-btn{width:100%;border:none;border-top:1px solid #edf2f7;background:#f7fbff;color:var(--sld-text);font-size:13px;display:flex;align-items:center;justify-content:center;gap:6px;padding:13px;cursor:pointer;font-weight:600}.create-btn:hover{background:#eef6ff}.footer-meta{display:flex;justify-content:space-between;gap:10px;border-top:1px solid #edf2f7;padding:10px 12px 12px;font-size:11px;color:var(--sld-muted);background:var(--sld-panel)}`;

const SmartLocationDropdown = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.locationChange = createEvent(this, "locationChange");
        this.locationSearch = createEvent(this, "locationSearch");
        this.locationOpen = createEvent(this, "locationOpen");
        this.locationClose = createEvent(this, "locationClose");
        this.locationLoadError = createEvent(this, "locationLoadError");
        this.locationCreate = createEvent(this, "locationCreate");
    }
    get hostElement() { return getElement(this); }
    /** Location options as JSON string or array */
    options = [];
    /** Selected value(s): single => 'id', multi => comma-separated ids */
    value = '';
    /** Enables multiple location selection */
    multiSelect = false;
    /** Placeholder text for trigger */
    placeholder = 'Select location';
    /** Enables searching */
    searchable = true;
    /** Search placeholder */
    searchPlaceholder = 'Search country, state, city, postal code...';
    /** Disables control */
    disabled = false;
    /** Show clear action */
    clearable = true;
    /** Maximum dropdown height in px */
    maxHeight = 360;
    /** Search debounce in ms */
    debounceMs = 250;
    /** Max selected items in multi mode (0 = no limit) */
    maxSelections = 0;
    /** Max results rendered */
    resultLimit = 250;
    /** Show recent selections section */
    showRecent = true;
    /** Show favorites section */
    showFavorites = true;
    /** Persist recent/favorites in local storage */
    persistState = true;
    /** Storage key for persistent state */
    storageKey = 'ui-smart-location-dropdown-state';
    /** Display full hierarchy path in options and selected tags */
    showPath = true;
    /** Show location type badges */
    showTypeBadge = true;
    /** Allow custom value creation from search */
    allowCustomValue = false;
    /** Force menu position to ignore transformed/positioned parent offsets */
    ignoreParentPosition = true;
    /** Portal menu to document.body (off by default to preserve shadow styling) */
    portal = false;
    /** Optional async remote location loader */
    loadLocations;
    /** Minimum characters required before async loader executes */
    remoteMinChars = 2;
    isOpen = false;
    parsedOptions = [];
    remoteOptions = [];
    selectedIds = new Set();
    searchQuery = '';
    loading = false;
    loadError = '';
    highlightedIndex = -1;
    menuLeft = 0;
    menuTop = 0;
    menuWidth = 0;
    dropdownPosition = 'bottom';
    recentIds = [];
    favoriteIds = [];
    locationChange;
    locationSearch;
    locationOpen;
    locationClose;
    locationLoadError;
    locationCreate;
    searchDebounceTimer;
    searchInputRef;
    menuElement;
    optionsRefs = [];
    rafId;
    isPortaled = false;
    searchToken = 0;
    watchOptions(newValue) {
        this.parsedOptions = this.normalizeOptions(newValue);
    }
    watchValue(newValue) {
        this.selectedIds = this.parseSelectedIds(newValue);
    }
    componentWillLoad() {
        this.parsedOptions = this.normalizeOptions(this.options);
        this.selectedIds = this.parseSelectedIds(this.value);
        this.restorePersistentState();
    }
    disconnectedCallback() {
        if (this.searchDebounceTimer) {
            clearTimeout(this.searchDebounceTimer);
        }
        this.cleanupPortal();
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
            this.rafId = 0;
        }
    }
    handleOutsideClick(event) {
        const path = typeof event.composedPath === 'function' ? event.composedPath() : [];
        const clickedHost = path.includes(this.hostElement) || this.hostElement.contains(event.target);
        const clickedMenu = !!this.menuElement && (path.includes(this.menuElement) || this.menuElement.contains(event.target));
        if (!clickedHost && !clickedMenu) {
            this.closeDropdown();
        }
    }
    handleResize() {
        if (this.isOpen) {
            this.calculatePosition();
        }
    }
    handleScroll() {
        if (this.isOpen) {
            this.calculatePosition();
        }
    }
    normalizeOptions(raw) {
        const parsed = typeof raw === 'string' ? this.tryParse(raw) : raw || [];
        const output = [];
        const walk = (items, depth, parentId, parentPath = []) => {
            items.forEach(item => {
                if (item == null || item.id == null || !item.label)
                    return;
                const idStr = String(item.id);
                const type = item.type || this.inferType(depth);
                const path = [...parentPath, item.label];
                const searchText = [item.label, item.code || '', type, path.join(' '), (item.tags || []).join(' ')].join(' ').toLowerCase();
                output.push({
                    ...item,
                    idStr,
                    parentIdStr: parentId,
                    type,
                    depth,
                    pathLabels: path,
                    searchText,
                });
                if (item.children && item.children.length > 0) {
                    walk(item.children, depth + 1, idStr, path);
                }
            });
        };
        walk(parsed, 0);
        return output;
    }
    tryParse(value) {
        if (!value)
            return [];
        try {
            const parsed = JSON.parse(value);
            return Array.isArray(parsed) ? parsed : [];
        }
        catch (error) {
            console.error('Invalid JSON for location options', error);
            return [];
        }
    }
    inferType(depth) {
        if (depth <= 0)
            return 'country';
        if (depth === 1)
            return 'state';
        if (depth === 2)
            return 'city';
        if (depth === 3)
            return 'district';
        return 'custom';
    }
    parseSelectedIds(value) {
        if (!value)
            return new Set();
        if (this.multiSelect) {
            return new Set(value.split(',').map(v => v.trim()).filter(Boolean));
        }
        return new Set([value]);
    }
    get selectedOptions() {
        const map = new Map(this.getMergedOptions().map(o => [o.idStr, o]));
        return Array.from(this.selectedIds)
            .map(id => map.get(id))
            .filter((o) => !!o);
    }
    getMergedOptions() {
        const merged = [...this.parsedOptions];
        const existing = new Set(merged.map(o => o.idStr));
        this.remoteOptions.forEach(o => {
            if (!existing.has(o.idStr)) {
                merged.push(o);
            }
        });
        return merged;
    }
    get filteredOptions() {
        const all = this.getMergedOptions();
        const query = this.searchQuery.trim().toLowerCase();
        let list = query ? all.filter(option => option.searchText.includes(query)) : all;
        if (!query) {
            const pinned = this.favoriteIds
                .map(id => list.find(o => o.idStr === id))
                .filter((o) => !!o);
            const recent = this.recentIds
                .map(id => list.find(o => o.idStr === id && !this.favoriteIds.includes(id)))
                .filter((o) => !!o);
            const used = new Set([...pinned.map(o => o.idStr), ...recent.map(o => o.idStr)]);
            const rest = list.filter(o => !used.has(o.idStr));
            list = [...pinned, ...recent, ...rest];
        }
        return list.slice(0, this.resultLimit);
    }
    get typeLabelMap() {
        return {
            country: 'Country',
            state: 'State',
            province: 'Province',
            city: 'City',
            district: 'District',
            postal: 'Postal',
            custom: 'Custom',
        };
    }
    toggleDropdown = () => {
        if (this.disabled)
            return;
        if (this.isOpen) {
            this.closeDropdown();
            return;
        }
        this.isOpen = true;
        this.locationOpen.emit();
        this.highlightedIndex = this.filteredOptions.length > 0 ? 0 : -1;
        this.schedulePositionUpdate();
        if (this.searchable) {
            window.setTimeout(() => this.searchInputRef?.focus(), 25);
        }
    };
    closeDropdown = () => {
        if (!this.isOpen)
            return;
        this.isOpen = false;
        this.locationClose.emit();
        this.highlightedIndex = -1;
        this.searchQuery = '';
        this.remoteOptions = [];
        this.loadError = '';
        this.cleanupPortal();
    };
    schedulePositionUpdate() {
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        this.rafId = requestAnimationFrame(() => {
            this.calculatePosition();
            this.rafId = 0;
        });
    }
    calculatePosition() {
        if (!this.isOpen || !this.menuElement)
            return;
        const trigger = this.hostElement.shadowRoot?.querySelector('.location-trigger');
        if (!trigger)
            return;
        if (this.portal && !this.isPortaled && this.menuElement.parentElement !== document.body) {
            document.body.appendChild(this.menuElement);
            this.isPortaled = true;
        }
        const placement = calculateUniversalPlacement(trigger, {
            menuWidth: trigger.offsetWidth,
            menuHeight: this.maxHeight,
            gap: 4,
            placement: 'auto',
            useTransformedAncestorOffset: !this.ignoreParentPosition,
        });
        this.menuLeft = placement.left;
        this.menuTop = placement.top;
        this.menuWidth = placement.width;
        this.dropdownPosition = placement.placement;
    }
    cleanupPortal() {
        if (this.portal && this.isPortaled && this.menuElement && this.menuElement.parentElement === document.body) {
            this.hostElement.appendChild(this.menuElement);
            this.isPortaled = false;
        }
    }
    onSearchInput_Custom = (value) => {
        this.searchQuery = value || '';
        if (this.searchDebounceTimer) {
            clearTimeout(this.searchDebounceTimer);
        }
        this.searchDebounceTimer = window.setTimeout(() => {
            this.runRemoteSearch(this.searchQuery);
            this.emitSearchEvent();
            this.highlightedIndex = this.filteredOptions.length > 0 ? 0 : -1;
        }, this.debounceMs);
    };
    async runRemoteSearch(query) {
        if (!this.loadLocations)
            return;
        if ((query || '').trim().length < this.remoteMinChars) {
            this.remoteOptions = [];
            this.loading = false;
            this.loadError = '';
            return;
        }
        const token = ++this.searchToken;
        this.loading = true;
        this.loadError = '';
        try {
            const remote = await this.loadLocations(query.trim());
            if (token !== this.searchToken)
                return;
            this.remoteOptions = this.normalizeOptions(remote || []);
        }
        catch (error) {
            if (token !== this.searchToken)
                return;
            const message = error instanceof Error ? error.message : 'Failed to load locations';
            this.remoteOptions = [];
            this.loadError = message;
            this.locationLoadError.emit({ query, message });
        }
        finally {
            if (token === this.searchToken) {
                this.loading = false;
                this.emitSearchEvent();
            }
        }
    }
    emitSearchEvent() {
        this.locationSearch.emit({
            query: this.searchQuery,
            localResults: this.parsedOptions.filter(o => o.searchText.includes(this.searchQuery.toLowerCase())).length,
            remoteResults: this.remoteOptions.length,
            loading: this.loading,
        });
    }
    handleKeyDown = (event) => {
        if (this.disabled)
            return;
        const options = this.filteredOptions;
        switch (event.key) {
            case 'Enter':
            case ' ': {
                if (!this.isOpen) {
                    event.preventDefault();
                    this.toggleDropdown();
                    return;
                }
                if (this.highlightedIndex >= 0 && options[this.highlightedIndex]) {
                    event.preventDefault();
                    this.selectOption(options[this.highlightedIndex], 'select');
                    return;
                }
                if (this.allowCustomValue && this.searchQuery.trim()) {
                    event.preventDefault();
                    this.createCustomLocation(this.searchQuery.trim());
                }
                return;
            }
            case 'ArrowDown':
                event.preventDefault();
                if (!this.isOpen) {
                    this.toggleDropdown();
                }
                else if (options.length > 0) {
                    this.highlightedIndex = Math.min(options.length - 1, this.highlightedIndex + 1);
                    this.scrollToHighlighted();
                }
                return;
            case 'ArrowUp':
                event.preventDefault();
                if (this.isOpen && options.length > 0) {
                    this.highlightedIndex = Math.max(0, this.highlightedIndex - 1);
                    this.scrollToHighlighted();
                }
                return;
            case 'Escape':
                if (this.isOpen) {
                    event.preventDefault();
                    this.closeDropdown();
                }
                return;
            case 'Backspace':
                if (this.multiSelect && !this.searchQuery && this.selectedIds.size > 0) {
                    const last = Array.from(this.selectedIds).at(-1);
                    if (last) {
                        this.removeSelectedId(last, 'remove');
                    }
                }
                return;
            default:
                return;
        }
    };
    scrollToHighlighted() {
        const optionElement = this.optionsRefs[this.highlightedIndex];
        optionElement?.scrollIntoView({ block: 'nearest' });
    }
    selectOption(option, trigger) {
        if (option.disabled)
            return;
        if (this.multiSelect) {
            const next = new Set(this.selectedIds);
            if (next.has(option.idStr)) {
                next.delete(option.idStr);
            }
            else {
                if (this.maxSelections > 0 && next.size >= this.maxSelections) {
                    return;
                }
                next.add(option.idStr);
            }
            this.selectedIds = next;
        }
        else {
            this.selectedIds = new Set([option.idStr]);
            this.closeDropdown();
        }
        this.touchRecent(option.idStr);
        this.syncValueAndEmit(trigger);
    }
    removeSelectedId(id, trigger) {
        if (!this.selectedIds.has(id))
            return;
        const next = new Set(this.selectedIds);
        next.delete(id);
        this.selectedIds = next;
        this.syncValueAndEmit(trigger);
    }
    clearSelection = (event) => {
        event?.stopPropagation();
        if (this.selectedIds.size === 0)
            return;
        this.selectedIds = new Set();
        this.syncValueAndEmit('clear');
    };
    toggleFavorite = (id, event) => {
        event.stopPropagation();
        const exists = this.favoriteIds.includes(id);
        this.favoriteIds = exists ? this.favoriteIds.filter(x => x !== id) : [id, ...this.favoriteIds].slice(0, 50);
        this.persistCurrentState();
    };
    touchRecent(id) {
        this.recentIds = [id, ...this.recentIds.filter(x => x !== id)].slice(0, 50);
        this.persistCurrentState();
    }
    persistCurrentState() {
        if (!this.persistState || typeof localStorage === 'undefined')
            return;
        try {
            localStorage.setItem(this.storageKey, JSON.stringify({ recentIds: this.recentIds, favoriteIds: this.favoriteIds }));
        }
        catch {
            // ignore storage errors
        }
    }
    restorePersistentState() {
        if (!this.persistState || typeof localStorage === 'undefined')
            return;
        try {
            const raw = localStorage.getItem(this.storageKey);
            if (!raw)
                return;
            const parsed = JSON.parse(raw);
            this.recentIds = Array.isArray(parsed?.recentIds) ? parsed.recentIds.map((x) => String(x)).slice(0, 50) : [];
            this.favoriteIds = Array.isArray(parsed?.favoriteIds) ? parsed.favoriteIds.map((x) => String(x)).slice(0, 50) : [];
        }
        catch {
            this.recentIds = [];
            this.favoriteIds = [];
        }
    }
    syncValueAndEmit(trigger) {
        const selectedIds = Array.from(this.selectedIds);
        this.value = this.multiSelect ? selectedIds.join(',') : selectedIds[0] || '';
        this.locationChange.emit({
            value: this.value,
            selected: this.selectedOptions,
            trigger,
            query: this.searchQuery,
        });
    }
    createCustomLocation(label) {
        const id = `custom:${label.toLowerCase().replace(/\s+/g, '-')}`;
        const custom = {
            id,
            label,
            type: 'custom',
        };
        this.locationCreate.emit(custom);
        const normalized = this.normalizeOptions([custom]);
        this.remoteOptions = [...normalized, ...this.remoteOptions.filter(o => o.idStr !== id)];
        if (normalized[0]) {
            this.selectOption(normalized[0], 'select');
        }
    }
    getDisplayText() {
        const selected = this.selectedOptions;
        if (selected.length === 0)
            return this.placeholder;
        if (!this.multiSelect) {
            return this.showPath ? selected[0].pathLabels.join(' / ') : selected[0].label;
        }
        if (selected.length === 1) {
            return this.showPath ? selected[0].pathLabels.join(' / ') : selected[0].label;
        }
        return `${selected.length} locations selected`;
    }
    renderSelectedChips() {
        if (!this.multiSelect || this.selectedOptions.length === 0)
            return null;
        const maxVisible = 3;
        const visible = this.selectedOptions.slice(0, maxVisible);
        const remaining = this.selectedOptions.length - visible.length;
        return (h("div", { class: "selected-chips" }, visible.map(option => (h("span", { class: "selected-chip", key: `chip-${option.idStr}` }, h("span", { class: "chip-label" }, this.showPath ? option.pathLabels.join(' / ') : option.label), h("ui-button", { class: "chip-remove", onButtonClick: () => this.removeSelectedId(option.idStr, 'remove'), "aria-label": `Remove ${option.label}`, variant: "plain", icon: "x", iconLibrary: "lucide", iconOnly: true })))), remaining > 0 && h("span", { class: "selected-more" }, "+", remaining)));
    }
    renderOption(option, index) {
        const selected = this.selectedIds.has(option.idStr);
        const highlighted = this.highlightedIndex === index;
        const favorite = this.favoriteIds.includes(option.idStr);
        const label = this.showPath ? option.pathLabels.join(' / ') : option.label;
        return (h("div", { class: {
                'location-option': true,
                'location-option-selected': selected,
                'location-option-highlighted': highlighted,
                'location-option-disabled': !!option.disabled,
            }, role: "option", "aria-selected": selected ? 'true' : 'false', onMouseEnter: () => (this.highlightedIndex = index), onClick: () => this.selectOption(option, 'select'), ref: el => (this.optionsRefs[index] = el) }, h("div", { class: "location-option-main" }, this.multiSelect && h("ui-icon", { name: selected ? 'check-square' : 'square', library: "lucide", size: "18px" }), h("div", { class: "location-option-text" }, h("span", { class: "location-label" }, label), option.code && h("span", { class: "location-code" }, option.code))), h("div", { class: "location-option-meta" }, this.showTypeBadge && h("span", { class: "location-type" }, this.typeLabelMap[option.type]), this.showFavorites && (h("ui-button", { class: { 'fav-btn': true, active: favorite }, onButtonClick: e => this.toggleFavorite(option.idStr, e.detail), "aria-label": favorite ? `Remove ${option.label} from favorites` : `Add ${option.label} to favorites`, variant: "plain", icon: "star", iconLibrary: "lucide", iconOnly: true })))));
    }
    render() {
        const filtered = this.filteredOptions;
        const hasSelection = this.selectedIds.size > 0;
        const canCreate = this.allowCustomValue && !!this.searchQuery.trim() && filtered.length === 0;
        return (h("div", { key: 'b1807bf502b50ae9fc48efa846426ab643d6516d', class: { 'location-dropdown': true, open: this.isOpen, disabled: this.disabled } }, h("div", { key: 'de7b775e9b312bd39da8927975e588648b4ca809', class: "location-trigger", role: "combobox", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-haspopup": "listbox", tabIndex: this.disabled ? -1 : 0, onClick: this.toggleDropdown, onKeyDown: this.handleKeyDown }, h("span", { key: 'e608f40b0ef1251ae3f9c303338ff415eb31b0cd', class: { 'trigger-text': true, placeholder: !hasSelection } }, this.getDisplayText()), h("div", { key: 'afbfc578336c32718d974e0ca2b28df8ae1bae2f', class: "trigger-icons" }, hasSelection && this.clearable && !this.disabled && (h("ui-button", { key: '65ce58563ea6447785f79325425f410ccac696b5', class: "clear-btn", onButtonClick: this.clearSelection, "aria-label": "Clear selected locations", variant: "plain", icon: "x", iconLibrary: "lucide", iconOnly: true })), h("ui-icon", { key: 'c30d26150e745053e5c64c7747692dc0e16de079', name: "chevron-down", library: "lucide", size: "16px", class: { arrow: true, open: this.isOpen } }))), this.renderSelectedChips(), this.isOpen && (h("div", { key: '17e2bda731910b2eacdcfa94c40697cb8cad6792', class: { menu: true, top: this.dropdownPosition === 'top' }, role: "listbox", ref: el => (this.menuElement = el), style: {
                maxHeight: `${this.maxHeight}px`,
                left: `${this.menuLeft}px`,
                width: `${this.menuWidth}px`,
                position: 'fixed',
                zIndex: '10020',
                top: `${this.menuTop}px`,
            } }, this.searchable && (h("div", { key: '927ac16ca61d07d1e0d9acf9cc6712ccd5e3be8a', class: "search-row" }, h("ui-input", { key: '95af520eb196a47d11ac31489237314049532bc2', ref: el => (this.searchInputRef = el), class: "search-input", value: this.searchQuery, placeholder: this.searchPlaceholder, onInputChange: (e) => this.onSearchInput_Custom(e.detail), onKeyDown: this.handleKeyDown, variant: "plain" }))), this.loading && h("div", { key: 'c5b48b1d0f1e08353dc8def6b7b962c15918f724', class: "status loading" }, "Loading locations..."), !this.loading && this.loadError && h("div", { key: '3a8f50555d86a4cf07fd27b810fe9c74168cac0e', class: "status error" }, this.loadError), !this.loading && filtered.length > 0 && (h("div", { key: '07298b5d440946c7a6d11e3ebae2d3c28d16c467', class: "options-list" }, filtered.map((option, index) => this.renderOption(option, index)))), !this.loading && filtered.length === 0 && !canCreate && h("div", { key: 'a01eb5729544c38466b7c16de2fe6e11baba36e4', class: "status empty" }, "No locations found"), canCreate && (h("ui-button", { key: '06c249712c8bf168d522678abe6fd68ae4d25949', class: "create-btn", onButtonClick: () => this.createCustomLocation(this.searchQuery.trim()), variant: "plain", align: "start", fullWidth: true, icon: "plus", iconLibrary: "lucide", label: `Create "${this.searchQuery.trim()}"` })), (this.showFavorites || this.showRecent) && !this.searchQuery && (h("div", { key: '0cfe965844fa111cb8888b1392e3dcac8b35c51a', class: "footer-meta" }, this.showFavorites && h("span", { key: '0b5f1c8816ed31ab7cdc5988f1271a2c7b384372' }, "Favorites: ", this.favoriteIds.length), this.showRecent && h("span", { key: 'aec4a486adee16e6100efa773475fc03d8b2f155' }, "Recent: ", this.recentIds.length)))))));
    }
    static get watchers() { return {
        "options": [{
                "watchOptions": 0
            }],
        "value": [{
                "watchValue": 0
            }]
    }; }
};
SmartLocationDropdown.style = smartLocationDropdownCss();

export { SmartLocationDropdown as ui_smart_location_dropdown };
