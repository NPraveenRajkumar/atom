import { r as registerInstance, c as createEvent, h, H as Host } from './index-DUsoYu9r.js';

const commandPaletteCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;position:fixed;z-index:9999;inset:0}:host(.cp-hidden){display:none;pointer-events:none}.cp-backdrop,.cp-modal{pointer-events:auto}.cp-backdrop{position:fixed;inset:0;background:rgba(0, 0, 0, 0.4);backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);animation:cp-fade-in 0.25s cubic-bezier(0.4, 0, 0.2, 1)}@keyframes cp-fade-in{from{opacity:0}to{opacity:1}}.cp-modal{position:fixed;top:20%;left:50%;transform:translateX(-50%);width:560px;max-width:calc(100vw - 32px);background:var(--bg-primary, #ffffff);border-radius:16px;box-shadow:0 25px 60px rgba(0, 0, 0, 0.25);overflow:hidden;animation:cp-slide-in 0.15s ease;z-index:10000}@keyframes cp-slide-in{from{opacity:0;transform:translateX(-50%) translateY(-12px) scale(0.97)}to{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}}.cp-search-row{display:flex;align-items:center;gap:10px;padding:14px 16px;border-bottom:1px solid var(--border-subtle, #f3f4f6)}.cp-search-icon{font-size:18px;color:var(--text-muted, #9ca3af);flex-shrink:0}.cp-search-input{flex:1;border:none;outline:none;font-size:16px;color:var(--text-primary, #111827);background:transparent}.cp-search-input::placeholder{color:var(--bg-secondary, #d1d5db)}.cp-clear{border:none;background:none;color:var(--text-muted, #9ca3af);font-size:14px;cursor:pointer;padding:4px;border-radius:50%;line-height:1}.cp-clear:hover{background:var(--bg-secondary, #f3f4f6);color:var(--text-secondary, #374151)}.cp-esc{background:var(--bg-secondary, #f3f4f6);border:1px solid var(--border-default, #e5e7eb);border-radius:5px;padding:2px 7px;font-size:11px;color:var(--text-muted, #6b7280);flex-shrink:0}.cp-results{max-height:380px;overflow-y:auto}.cp-results::-webkit-scrollbar{width:4px}.cp-results::-webkit-scrollbar-thumb{background:var(--bg-primary, #e5e7eb);border-radius:4px}.cp-empty{text-align:center;padding:40px 20px;color:var(--text-muted, #6b7280);font-size:14px}.cp-empty strong{color:var(--text-secondary, #374151)}.cp-group{padding:6px 0}.cp-group-label{padding:6px 16px 4px;font-size:11px;font-weight:700;color:var(--text-muted, #9ca3af);text-transform:uppercase;letter-spacing:0.6px}.cp-item{display:flex;align-items:center;gap:12px;padding:10px 16px;cursor:pointer;border-radius:8px;margin:0 8px;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);opacity:0;transform:translateY(10px);animation:cp-item-appear 0.3s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;animation-delay:calc(var(--stagger-idx, 0) * 0.03s)}.cp-item:hover,.cp-item.cp-item-active{background:var(--bg-secondary, #f3f4f6);transform:scale(1.01) translateY(0)}.cp-item:hover .cp-item-label,.cp-item.cp-item-active .cp-item-label{color:var(--color-primary, #10b981)}@keyframes cp-item-appear{to{opacity:1;transform:translateY(0)}}.cp-item-icon{font-size:20px;flex-shrink:0;width:28px;text-align:center}.cp-item-content{flex:1;min-width:0}.cp-item-label{display:block;font-size:14px;font-weight:500;color:var(--text-primary, #111827)}.cp-item-desc{display:block;font-size:12px;color:var(--text-muted, #9ca3af);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.cp-shortcut{background:var(--bg-secondary, #f3f4f6);border:1px solid var(--border-default, #e5e7eb);border-radius:5px;padding:2px 8px;font-size:11px;color:var(--text-muted, #6b7280);white-space:nowrap;flex-shrink:0}.cp-footer{display:flex;gap:18px;align-items:center;padding:10px 16px;border-top:1px solid var(--border-subtle, #f3f4f6);background:var(--bg-primary, #fafafa);font-size:11px;color:var(--text-muted, #9ca3af)}.cp-footer kbd{background:var(--bg-primary, #e5e7eb);border:1px solid var(--border-strong, #d1d5db);border-radius:4px;padding:1px 5px;font-size:10px;color:var(--text-secondary, #374151);margin-right:3px}`;

const CommandPalette = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.commandSelect = createEvent(this, "commandSelect");
        this.paletteOpen = createEvent(this, "paletteOpen");
        this.paletteClose = createEvent(this, "paletteClose");
    }
    /** List of commands */
    commands = [];
    /** Placeholder text */
    placeholder = 'Search commands…';
    /** Keyboard shortcut to open (default: Meta+K) */
    shortcut = 'k';
    /** Open state */
    open = false;
    /** Max visible items */
    maxVisible = 8;
    /** Show recent items */
    showRecent = true;
    /** localStorage key for persisting recent commands (empty = no persistence) */
    persistKey = 'ui-command-palette-recent';
    query = '';
    activeIndex = 0;
    recent = [];
    isExecuting = false;
    commandSelect;
    paletteOpen;
    paletteClose;
    inputRef;
    handlePersistKeyChange() {
        this.checkPersistence();
    }
    componentWillLoad() {
        this.checkPersistence();
        this.handleGlobalKey = this.handleGlobalKey.bind(this);
    }
    checkPersistence() {
        if (this.persistKey && this.showRecent) {
            try {
                const stored = localStorage.getItem(this.persistKey);
                if (stored) {
                    this.recent = JSON.parse(stored);
                }
            }
            catch { /* ignore */ }
        }
    }
    componentDidLoad() {
        window.addEventListener('keydown', this.handleGlobalKey);
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleGlobalKey);
    }
    async show() {
        this.open = true;
        this.query = '';
        this.isExecuting = false;
        setTimeout(() => this.inputRef?.focus(), 50);
        this.paletteOpen.emit();
    }
    async hide() {
        this.open = false;
        this.isExecuting = false;
        this.paletteClose.emit();
    }
    handleGlobalKey(e) {
        if ((e.metaKey || e.ctrlKey) && e.key === this.shortcut) {
            e.preventDefault();
            this.open ? this.hide() : this.show();
        }
        if (e.key === 'Escape' && this.open)
            this.hide();
    }
    getCommands() {
        if (typeof this.commands === 'string') {
            try {
                return JSON.parse(this.commands);
            }
            catch {
                return [];
            }
        }
        return this.commands;
    }
    fuzzyMatch(text, query) {
        text = text.toLowerCase();
        query = query.toLowerCase();
        if (text.includes(query))
            return 10;
        let score = 0;
        let queryIdx = 0;
        for (let i = 0; i < text.length && queryIdx < query.length; i++) {
            if (text[i] === query[queryIdx]) {
                score += 5;
                queryIdx++;
            }
        }
        return queryIdx === query.length ? score : 0;
    }
    getFiltered() {
        const q = this.query.toLowerCase().trim();
        const all = this.getCommands();
        if (!q) {
            if (this.showRecent && this.recent.length > 0) {
                const recentItems = this.recent.map(id => all.find(c => c.id === id)).filter(Boolean);
                return recentItems.slice(0, this.maxVisible);
            }
            return all.slice(0, this.maxVisible);
        }
        return all
            .map(c => ({
            item: c,
            score: Math.max(this.fuzzyMatch(c.label ?? '', q) * 2, this.fuzzyMatch(c.description || '', q), this.fuzzyMatch(c.group || '', q))
        }))
            .filter(res => res.score > 0)
            .sort((a, b) => b.score - a.score)
            .map(res => res.item)
            .slice(0, this.maxVisible);
    }
    select(item) {
        this.recent = [String(item.id), ...this.recent.filter(id => id !== String(item.id))].slice(0, 5);
        if (this.persistKey && this.showRecent) {
            try {
                localStorage.setItem(this.persistKey, JSON.stringify(this.recent));
            }
            catch { /* ignore */ }
        }
        this.commandSelect.emit(item);
        item.action?.();
        this.hide();
    }
    handleKey = (e) => {
        const items = this.getFiltered();
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.activeIndex = (this.activeIndex + 1) % items.length;
        }
        if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.activeIndex = (this.activeIndex - 1 + items.length) % items.length;
        }
        if (e.key === 'Enter' && items[this.activeIndex]) {
            this.select(items[this.activeIndex]);
        }
    };
    groupItems(items) {
        return items.reduce((acc, item) => {
            const g = item.group || (this.showRecent && !this.query && this.recent.includes(String(item.id)) ? 'Recent' : 'Commands');
            (acc[g] = acc[g] || []).push(item);
            return acc;
        }, {});
    }
    render() {
        if (!this.open)
            return h(Host, { class: "cp-hidden" });
        const filtered = this.getFiltered();
        const grouped = this.groupItems(filtered);
        let globalIdx = 0;
        return (h(Host, null, h("div", { class: "cp-backdrop", onClick: () => this.hide() }), h("div", { class: "cp-modal", role: "dialog", "aria-modal": "true" }, h("div", { class: "cp-search-row" }, h("span", { class: "cp-search-icon" }, "\u2318"), h("input", { ref: el => (this.inputRef = el), class: "cp-search-input", type: "text", placeholder: this.placeholder, value: this.query, onInput: (e) => { this.query = e.target.value; this.activeIndex = 0; }, onKeyDown: this.handleKey, role: "combobox", "aria-expanded": this.open.toString(), "aria-haspopup": "listbox", "aria-autocomplete": "list", "aria-activedescendant": filtered[this.activeIndex] ? `cp-item-${filtered[this.activeIndex].id}` : undefined }), this.query && (h("ui-button", { variant: "ghost", size: "xxs", iconOnly: true, class: "cp-clear", onClick: () => (this.query = ''), ariaLabel: "Clear", icon: "x", iconLibrary: "lucide", iconSize: "14px" })), h("kbd", { class: "cp-esc" }, "esc")), filtered.length === 0 ? (h("div", { class: "cp-empty" }, "No commands found for \"", h("strong", null, this.query), "\"")) : (h("div", { class: "cp-results", role: "listbox" }, Object.entries(grouped).map(([group, items]) => (h("div", { class: "cp-group", key: group }, h("div", { class: "cp-group-label" }, group), items.map(item => {
            const idx = globalIdx++;
            return (h("div", { id: `cp-item-${item.id}`, class: { 'cp-item': true, 'cp-item-active': idx === this.activeIndex }, role: "option", "aria-selected": idx === this.activeIndex, onClick: () => this.select(item), onMouseEnter: () => (this.activeIndex = idx), key: item.id, style: { '--stagger-idx': `${idx}` } }, item.icon && h("span", { class: "cp-item-icon" }, item.icon), h("div", { class: "cp-item-content" }, h("span", { class: "cp-item-label" }, item.label), item.description && h("span", { class: "cp-item-desc" }, item.description)), item.shortcut && h("kbd", { class: "cp-shortcut" }, item.shortcut)));
        })))))), h("div", { class: "cp-footer" }, h("span", null, h("kbd", null, "\u2191\u2193"), " Navigate"), h("span", null, h("kbd", null, "\u21B5"), " Select"), h("span", null, h("kbd", null, "esc"), " Close")))));
    }
    static get watchers() { return {
        "persistKey": [{
                "handlePersistKeyChange": 0
            }]
    }; }
};
CommandPalette.style = commandPaletteCss();

export { CommandPalette as ui_command_palette };
