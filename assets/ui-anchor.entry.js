import { r as registerInstance, c as createEvent, a as getElement, h } from './index-Dqu2zaH1.js';

const anchorCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.anchor{display:flex;padding:16px;background:var(--bg-primary, #ffffff);border-radius:8px;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);position:relative;--anchor-active-color:var(--color-primary-hover, #2563eb);transition:all 0.3s ease}.anchor--sm{padding:8px}.anchor--sm .anchor-item{padding:6px 12px;font-size:0.75rem}.anchor--md{padding:16px}.anchor--md .anchor-item{padding:12px 16px;font-size:0.875rem}.anchor--lg{padding:20px}.anchor--lg .anchor-item{padding:16px 20px;font-size:1rem}.anchor--dark{background:var(--bg-primary, #1f2937)}.anchor--dark .anchor-item{color:var(--text-muted, #9ca3af)}.anchor--dark .anchor-item:hover:not(.disabled){background:var(--color-primary, #374151);color:var(--text-standard, #f3f4f6)}.anchor--dark .anchor-item.active{background:var(--color-primary, #1e40af);color:var(--text-standard, #dbeafe)}.anchor--custom{background:var(--anchor-bg, var(--bg-primary, #ffffff))}.anchor--custom .anchor-item{color:var(--anchor-text, var(--text-muted, #6b7280))}.anchor--custom .anchor-item:hover:not(.disabled){background:var(--anchor-hover-bg, var(--bg-secondary, #f3f4f6));color:var(--anchor-hover-text, var(--text-primary, #111827))}.anchor--custom .anchor-item.active{background:var(--anchor-active-bg, #eff6ff);color:var(--anchor-active-color)}.anchor--horizontal.anchor--align-center{justify-content:center}.anchor--horizontal.anchor--align-right{justify-content:flex-end}.anchor--horizontal.anchor--align-left{justify-content:flex-start}.anchor--vertical.anchor--align-center .anchor-item{justify-content:center;text-align:center}.anchor--vertical.anchor--align-right .anchor-item{justify-content:flex-end;text-align:right;flex-direction:row-reverse}.anchor--vertical.anchor--align-right .anchor-indicator{left:auto;right:0;border-radius:2px 0 0 2px}.anchor--affixed{position:fixed !important;animation:slideDown 0.3s ease}@keyframes slideDown{from{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}.anchor-progress{position:absolute;top:0;left:0;right:0;height:3px;background:var(--bg-primary, #e5e7eb);border-radius:8px 8px 0 0;overflow:hidden}.anchor-progress-bar{height:100%;background:var(--anchor-active-color);transition:width 0.1s ease}.anchor--vertical .anchor-progress{top:0;left:0;bottom:0;right:auto;width:3px;height:auto;border-radius:8px 0 0 8px}.anchor--vertical .anchor-progress-bar{width:100%;height:0;transition:height 0.1s ease}.anchor-indicator{position:absolute;background:var(--anchor-active-color);transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);border-radius:2px;pointer-events:none;z-index:2}.anchor--vertical.anchor--with-indicator .anchor-indicator{left:-16px;width:3px;height:24px}.anchor--horizontal.anchor--with-indicator .anchor-indicator{bottom:-16px;height:3px;width:60px}.anchor-type-dot .anchor-indicator{background:var(--anchor-active-color);width:8px;height:8px;border-radius:50%;transition:transform 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);transform-origin:center;box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.anchor-type-dot.anchor--vertical .anchor-indicator{left:-13px}.anchor-type-dot.anchor--horizontal .anchor-indicator{bottom:-19px}.anchor--sticky{position:sticky}.anchor--vertical.anchor--left{left:0}.anchor--vertical.anchor--right{top:80px;right:0}.anchor--horizontal.anchor--top{top:0;left:0;right:0;z-index:100}.anchor--horizontal.anchor--bottom{bottom:0;left:0;right:0;z-index:100}.anchor-list{list-style:none;margin:0;padding:0;display:flex;gap:8px;width:100%}.anchor--vertical .anchor-list{flex-direction:column}.anchor--horizontal .anchor-list{flex-direction:row;flex-wrap:wrap}.anchor-item{display:flex;align-items:center;gap:12px;padding:12px 16px;cursor:pointer;border-radius:6px;transition:all 0.2s ease;color:var(--text-muted, #6b7280);font-size:0.875rem;font-weight:500;position:relative;user-select:none;outline:none}.anchor-item:hover:not(.disabled){background:var(--bg-secondary, #f3f4f6);color:var(--text-primary, #111827)}.anchor-item:focus-visible{box-shadow:0 0 0 2px var(--anchor-active-color);outline:2px solid transparent}.anchor-item.active{color:var(--anchor-active-color);font-weight:600}.anchor-item.disabled{opacity:0.5;cursor:not-allowed;pointer-events:none}.anchor-item.dot-type{gap:12px}.dot-marker{width:8px;height:8px;border-radius:50%;background-color:var(--bg-secondary, #d1d5db);transition:all 0.3s ease;flex-shrink:0}.anchor-item.dot-type:hover .dot-marker{background-color:var(--text-muted, #9ca3af)}.anchor--horizontal .anchor-item.dot-type{flex-direction:column;align-items:center}.anchor-number{font-size:0.75rem;font-weight:600;color:inherit;opacity:0.7;min-width:24px}.anchor--with-numbers .anchor-item{gap:8px}.anchor-icon{font-size:1rem;display:flex;align-items:center;justify-content:center}.anchor-label{white-space:nowrap}.anchor--horizontal .anchor-item:not(.dot-type){flex-direction:column;gap:4px;text-align:center;min-width:80px}.anchor-badge{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;background:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff);font-size:0.75rem;font-weight:600;border-radius:10px;line-height:1}.anchor-item.active .anchor-badge{background:var(--anchor-active-color)}.anchor-sublist{list-style:none;margin:0;padding:0;display:flex;flex-direction:column}.anchor-toggle{display:inline-flex;align-items:center;justify-content:center;width:16px;height:16px;font-size:0.75rem;color:var(--text-muted, #9ca3af);transition:transform 0.2s ease;margin-right:-4px;border-radius:4px}.anchor-toggle:hover{background:var(--bg-primary, #e5e7eb);color:var(--text-secondary, #4b5563)}.anchor-toggle.expanded{transform:rotate(90deg)}.anchor-item.has-children{font-weight:500}.anchor--vertical .anchor-item{position:relative}.anchor--vertical .anchor-indicator{transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1), height 0.3s ease, top 0.3s ease}`;

const Anchor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.anchorClick = createEvent(this, "anchorClick");
        this.anchorItemClick = createEvent(this, "anchorItemClick");
        this.activeItemChange = createEvent(this, "activeItemChange");
        this.navigate = createEvent(this, "navigate");
        this.affixChange = createEvent(this, "affixChange");
        this.progressChange = createEvent(this, "progressChange");
        this.expandChange = createEvent(this, "expandChange");
    }
    get el() { return getElement(this); }
    /** Array of anchor items or JSON string. Replaces old `links` prop. */
    items = [];
    /** Backward-compatible JSON string prop (same as items) */
    links = '';
    /** Orientation / mode: Orientation */
    mode = 'vertical';
    /** Alias for mode */
    orientation = 'vertical';
    /** Position when sticky */
    position = 'left';
    /** Currently active item id */
    activeItem = '';
    /** Alias for activeItem (backward-compat) */
    activeLink = '';
    /** Offset from top when scrolling to section */
    scrollOffset = 80;
    /** Emit navigate event instead of browser navigation */
    routerNavigate = false;
    /** Auto-load FontAwesome icons */
    loadIcons = true;
    /** Stick the component using CSS position:sticky */
    sticky = true;
    /** CSS selector of scrollable container. Defaults to window. */
    scrollContainer = '';
    /** Enable smooth scrolling behavior */
    smoothScroll = true;
    /** Show tooltip on hover */
    showTooltip = false;
    /** Show active indicator line/dot */
    showIndicator = true;
    /** Custom IntersectionObserver rootMargin */
    observerRootMargin = '';
    /** Use named slot per item instead of inline rendering */
    useSlot = false;
    /** Show numeric/alpha/roman numbering */
    showNumbers = false;
    /** Style of numbers shown */
    numberStyle = 'numeric';
    /** Size variant */
    size = 'md';
    /** Theme variant */
    theme = 'light';
    /** Color of the active indicator */
    activeColor = '#18ff3e';
    /** Text alignment inside items */
    alignment = 'left';
    /** Update URL hash on navigation */
    updateHash = false;
    /** Enable affix/sticky behavior on scroll */
    affix = false;
    /** Scroll threshold (px) before affix kicks in */
    affixOffset = 20;
    /** Indicator type: 'line' or 'dot' */
    indicator = 'line';
    /** CSS selector of container to auto-generate links from h1-h4 */
    autoGenContainer = '';
    /** Show scroll progress bar */
    showProgress = false;
    /** Enable keyboard arrow navigation between items */
    arrowNavigation = true;
    /** Allow items with children to be collapsed */
    collapsible = false;
    /** Expand all collapsible items by default */
    defaultExpanded = true;
    derivedItems = [];
    currentActive = '';
    isAffixed = false;
    scrollProgress = 0;
    expandedItems = new Set();
    indicatorStyle = {};
    _observer = null;
    _onWindowScroll = null;
    _onContainerScroll = null;
    _onHashChange = null;
    linkElements = new Map();
    scrollTimeout;
    anchorClick;
    anchorItemClick;
    activeItemChange;
    navigate;
    affixChange;
    progressChange;
    expandChange;
    componentWillLoad() {
        if (this.autoGenContainer) {
            this.generateLinksFromContainer();
        }
        else {
            this.parseItems();
        }
        this.currentActive = this.activeItem || this.activeLink;
        if (this.defaultExpanded) {
            this.expandAll();
        }
    }
    itemsChanged() {
        if (!this.autoGenContainer) {
            this.parseItems();
        }
    }
    handleAutoGenContainerChange() {
        this.generateLinksFromContainer();
    }
    parseItems() {
        // Priority: items > links > slotted children
        const rawItems = this.items;
        if (rawItems && (typeof rawItems === 'string' ? rawItems.length > 0 : rawItems.length > 0)) {
            if (typeof rawItems === 'string') {
                try {
                    this.derivedItems = JSON.parse(rawItems);
                }
                catch {
                    this.derivedItems = [];
                }
            }
            else {
                this.derivedItems = [...rawItems];
            }
            return;
        }
        if (this.links && this.links.length > 0) {
            try {
                this.derivedItems = JSON.parse(this.links);
            }
            catch {
                this.derivedItems = [];
            }
            return;
        }
        // Slot-based children fallback
        const children = Array.from(this.el.querySelectorAll('ui-anchor-item'));
        if (children.length > 0) {
            this.derivedItems = children.map(el => ({
                id: el.getAttribute('target') || el.getAttribute('id') || '',
                label: el.getAttribute('label') || '',
                icon: el.getAttribute('icon') ?? undefined,
                iconLibrary: el.getAttribute('iconLibrary') || el.getAttribute('icon-library'),
                disabled: el.hasAttribute('disabled'),
                badge: el.getAttribute('badge') ?? undefined,
                tooltip: el.getAttribute('tooltip') ?? undefined,
                href: el.getAttribute('href') ?? undefined,
                target: el.getAttribute('target') ?? undefined,
                rel: el.getAttribute('rel') ?? undefined,
            }));
        }
    }
    generateLinksFromContainer() {
        if (!this.autoGenContainer)
            return;
        const container = document.querySelector(this.autoGenContainer);
        if (!container)
            return;
        const headers = container.querySelectorAll('h1, h2, h3, h4');
        this.derivedItems = Array.from(headers).map((header, index) => {
            if (!header.id)
                header.id = `auto-anchor-${index}`;
            return { id: `link-${index}`, label: header.innerText ?? header.textContent ?? '', target: header.id ?? '' };
        });
    }
    componentDidLoad() {
        this.setupScrollSpy();
        this.setupAffix();
        this.setupProgress();
        if (this.updateHash)
            this.setupHashNavigation();
        setTimeout(() => this.updateIndicatorPosition(this.currentActive), 100);
    }
    disconnectedCallback() {
        if (this._observer) {
            try {
                this._observer.disconnect();
            }
            catch (e) { }
        }
        if (this._onWindowScroll)
            window.removeEventListener('scroll', this._onWindowScroll);
        if (this._onContainerScroll && this.scrollContainer) {
            document.querySelector(this.scrollContainer)?.removeEventListener('scroll', this._onContainerScroll);
        }
        if (this._onHashChange)
            window.removeEventListener('hashchange', this._onHashChange);
        if (this.scrollTimeout)
            clearTimeout(this.scrollTimeout);
    }
    getParsedItems() {
        return this.derivedItems;
    }
    flattenItems(items) {
        return items.reduce((acc, item) => {
            acc.push(item);
            if (item.children)
                acc.push(...this.flattenItems(item.children));
            return acc;
        }, []);
    }
    expandAll() {
        const flatItems = this.flattenItems(this.getParsedItems());
        flatItems.forEach(item => {
            if (item.children && item.children.length > 0)
                this.expandedItems.add(item.id);
        });
        this.expandedItems = new Set(this.expandedItems);
    }
    setupAffix() {
        if (!this.affix)
            return;
        const handleScroll = () => {
            const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
            const newAffix = scrollTop > this.affixOffset;
            if (newAffix !== this.isAffixed) {
                this.isAffixed = newAffix;
                this.affixChange.emit(this.isAffixed);
            }
        };
        window.addEventListener('scroll', handleScroll);
        this._onWindowScroll = handleScroll;
        handleScroll();
    }
    setupProgress() {
        if (!this.showProgress)
            return;
        const handleScroll = () => {
            if (this.scrollTimeout)
                clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                const scrollArea = this.scrollContainer ? document.querySelector(this.scrollContainer) : null;
                if (scrollArea) {
                    const sh = scrollArea.scrollHeight - scrollArea.clientHeight;
                    this.scrollProgress = sh > 0 ? (scrollArea.scrollTop / sh) * 100 : 0;
                }
                else {
                    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                    const scrollHeight = document.documentElement.scrollHeight - window.innerHeight;
                    this.scrollProgress = scrollHeight > 0 ? (scrollTop / scrollHeight) * 100 : 0;
                }
                this.progressChange.emit(this.scrollProgress);
            }, 50);
        };
        if (this.scrollContainer) {
            document.querySelector(this.scrollContainer)?.addEventListener('scroll', handleScroll);
            this._onContainerScroll = handleScroll;
        }
        else {
            window.addEventListener('scroll', handleScroll);
            if (!this._onWindowScroll)
                this._onWindowScroll = handleScroll;
        }
        handleScroll();
    }
    setupHashNavigation() {
        this._onHashChange = () => {
            const hash = window.location.hash.substring(1);
            if (hash)
                this.scrollToSection(hash);
        };
        window.addEventListener('hashchange', this._onHashChange);
    }
    setupScrollSpy() {
        const flatItems = this.flattenItems(this.getParsedItems());
        let scrollRoot = this.scrollContainer ? document.querySelector(this.scrollContainer) : null;
        if (!scrollRoot && this.scrollContainer) {
            const fromParent = this.el.parentElement?.closest('.examples-split-layout, .viewport-pane');
            if (fromParent)
                scrollRoot = fromParent.querySelector(this.scrollContainer);
        }
        const margin = this.observerRootMargin || `-${this.scrollOffset}px 0px -50% 0px`;
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    const elId = entry.target.getAttribute('id');
                    const found = flatItems.find(it => it.target === elId || it.id === elId);
                    if (elId && found)
                        this.setActiveState(found.id);
                }
            });
        }, { root: scrollRoot, rootMargin: margin, threshold: 0 });
        flatItems.forEach((item) => {
            const elId = item.target || item.id;
            if (!elId)
                return;
            let element = document.getElementById(elId);
            if (!element && scrollRoot)
                element = scrollRoot.querySelector(`#${elId}`);
            if (element)
                observer.observe(element);
        });
        this._observer = observer;
    }
    setActiveState(id) {
        if (this.currentActive === id)
            return;
        this.currentActive = id;
        this.activeItem = id;
        this.activeLink = id;
        const item = this.flattenItems(this.getParsedItems()).find(i => i.id === id);
        if (item)
            this.activeItemChange.emit({ id: item.id, label: item.label ?? '' });
        this.updateIndicatorPosition(id);
        if (this.collapsible)
            this.ensureVisible(id, this.getParsedItems());
    }
    ensureVisible(id, items, parentId = null) {
        for (const item of items) {
            if (item.id === id) {
                if (parentId && !this.expandedItems.has(parentId))
                    this.toggleExpand(parentId, true);
                return true;
            }
            if (item.children) {
                const found = this.ensureVisible(id, item.children, item.id);
                if (found) {
                    if (parentId && !this.expandedItems.has(parentId))
                        this.toggleExpand(parentId, true);
                    return true;
                }
            }
        }
        return false;
    }
    scrollToSection(idOrTarget) {
        const element = document.getElementById(idOrTarget) || document.querySelector(`#${idOrTarget}`);
        if (!element)
            return;
        let scrollContainerEl = this.scrollContainer ? document.querySelector(this.scrollContainer) : null;
        if (!scrollContainerEl && this.scrollContainer) {
            const fromParent = this.el.parentElement?.closest('.examples-split-layout, .viewport-pane');
            if (fromParent)
                scrollContainerEl = fromParent.querySelector(this.scrollContainer);
        }
        if (scrollContainerEl) {
            const containerRect = scrollContainerEl.getBoundingClientRect();
            const elementRect = element.getBoundingClientRect();
            const scrollTop = scrollContainerEl.scrollTop + (elementRect.top - containerRect.top) - this.scrollOffset;
            scrollContainerEl.scrollTo({ top: scrollTop, behavior: this.smoothScroll ? 'smooth' : 'auto' });
        }
        else {
            const offsetPosition = element.getBoundingClientRect().top + window.pageYOffset - this.scrollOffset;
            window.scrollTo({ top: offsetPosition, behavior: this.smoothScroll ? 'smooth' : 'auto' });
        }
        if (this.updateHash)
            history.pushState(null, '', `#${idOrTarget}`);
    }
    updateIndicatorPosition(id) {
        if (!this.showIndicator || !id)
            return;
        requestAnimationFrame(() => {
            const el = this.linkElements.get(id);
            if (!el)
                return;
            const container = this.el.shadowRoot?.querySelector('.anchor-list');
            if (!container)
                return;
            const containerRect = container.getBoundingClientRect();
            const linkRect = el.getBoundingClientRect();
            const curMode = this.orientation || this.mode;
            if (curMode === 'vertical') {
                this.indicatorStyle = {
                    transform: `translateY(${linkRect.top - containerRect.top}px)`,
                    height: `${linkRect.height}px`,
                };
            }
            else {
                this.indicatorStyle = {
                    transform: `translateX(${linkRect.left - containerRect.left}px)`,
                    width: `${linkRect.width}px`,
                };
            }
        });
    }
    handleItemClick = (item, event) => {
        if (event.metaKey || event.ctrlKey || event.shiftKey || event.altKey) {
            this.anchorItemClick.emit({ id: item.id, label: item.label ?? '' });
            this.anchorClick.emit({ linkId: item.id, targetId: item.target || '' });
            return;
        }
        if (item.disabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.anchorItemClick.emit({ id: item.id, label: item.label ?? '' });
        this.anchorClick.emit({ linkId: item.id, targetId: item.target || '' });
        this.setActiveState(item.id);
        if (item.href && !item.href.startsWith('#') && this.routerNavigate) {
            this.navigate.emit({ href: item.href, target: item.target, rel: item.rel });
            return;
        }
        const target = item.href && item.href.startsWith('#')
            ? item.href.substring(1)
            : (item.target || item.id);
        this.scrollToSection(target);
    };
    toggleExpand(id, forceState) {
        const newSet = new Set(this.expandedItems);
        const shouldExpand = forceState !== undefined ? forceState : !newSet.has(id);
        shouldExpand ? newSet.add(id) : newSet.delete(id);
        this.expandedItems = newSet;
        this.expandChange.emit({ id, expanded: shouldExpand });
    }
    handleKeyDown = (item, event, flatIndex) => {
        if (item.disabled)
            return;
        const key = event.key;
        if (key === 'Enter' || key === ' ') {
            event.preventDefault();
            this.setActiveState(item.id);
            const target = item.href && item.href.startsWith('#') ? item.href.substring(1) : (item.target || item.id);
            this.scrollToSection(target);
            return;
        }
        if (this.collapsible && (item.children?.length ?? 0) > 0) {
            if (key === 'ArrowRight' && !this.expandedItems.has(item.id)) {
                this.toggleExpand(item.id, true);
                event.preventDefault();
                return;
            }
            if (key === 'ArrowLeft' && this.expandedItems.has(item.id)) {
                this.toggleExpand(item.id, false);
                event.preventDefault();
                return;
            }
        }
        if (this.arrowNavigation && (key === 'ArrowDown' || key === 'ArrowUp')) {
            event.preventDefault();
            const listItems = this.el.shadowRoot?.querySelectorAll('.anchor-item') ?? [];
            const next = listItems[key === 'ArrowDown' ? flatIndex + 1 : flatIndex - 1];
            next?.focus();
        }
    };
    watchActiveItem(newVal) {
        if (newVal && newVal !== this.currentActive) {
            this.setActiveState(newVal);
            try {
                this.scrollToSection(newVal);
            }
            catch (e) { }
        }
    }
    async setActive(id) {
        if (!id)
            return;
        this.setActiveState(id);
        this.scrollToSection(id);
    }
    getNumberPrefix(index, level = 0, parentPrefix = '') {
        const n = index + 1;
        let prefix;
        switch (this.numberStyle) {
            case 'decimal':
                prefix = n.toString().padStart(2, '0');
                break;
            case 'alpha':
                prefix = String.fromCharCode(97 + index);
                break;
            case 'roman':
                const romans = ['i', 'ii', 'iii', 'iv', 'v', 'vi', 'vii', 'viii', 'ix', 'x'];
                prefix = romans[index] || String(n);
                break;
            default:
                prefix = String(n);
                break;
        }
        if (level > 0 && parentPrefix) {
            const clean = parentPrefix.endsWith('.') ? parentPrefix.slice(0, -1) : parentPrefix;
            return `${clean}.${prefix}.`;
        }
        return `${prefix}.`;
    }
    renderItem(item, index, level = 0, parentPrefix = '', countRef) {
        const hasChildren = item.children && item.children.length > 0;
        const isExpanded = this.expandedItems.has(item.id);
        const prefix = this.showNumbers ? this.getNumberPrefix(index, level, parentPrefix) : '';
        const flatIdx = countRef.val++;
        const isActive = this.currentActive === item.id;
        const curMode = this.orientation || this.mode;
        const toggleBtn = hasChildren && this.collapsible && curMode === 'vertical' ? (h("span", { class: `anchor-toggle ${isExpanded ? 'expanded' : ''}`, onClick: (e) => { e.stopPropagation(); this.toggleExpand(item.id); } }, h("ui-icon", { name: "chevron-right", library: "fontawesome", size: "12px" }))) : null;
        const innerContent = (h("div", { style: { display: 'contents' } }, this.showNumbers && h("span", { class: "anchor-number" }, prefix), toggleBtn, item.icon && h("span", { class: "anchor-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || 'lucide', size: "1.2em" })), this.indicator === 'dot'
            ? h("span", { class: "dot-marker" })
            : h("span", { class: "anchor-label" }, item.label), item.badge && h("span", { class: "anchor-badge" }, item.badge)));
        return (h("div", { class: "anchor-item-wrapper" }, h("li", { ref: el => {
                if (el)
                    this.linkElements.set(item.id, el);
            }, class: {
                'anchor-item': true,
                'active': isActive,
                'disabled': !!item.disabled,
                'has-children': !!hasChildren,
                [`level-${level}`]: true,
                'dot-type': this.indicator === 'dot',
            }, "data-id": item.id, title: this.indicator === 'dot'
                ? (item.tooltip || item.label)
                : (this.showTooltip ? item.tooltip : undefined), tabindex: item.disabled ? -1 : 0, role: "button", "aria-current": isActive ? 'true' : 'false', "aria-disabled": item.disabled ? 'true' : 'false', "aria-expanded": hasChildren ? String(isExpanded) : undefined, style: { paddingLeft: curMode === 'vertical' ? `${16 + level * 16}px` : undefined }, onClick: (e) => this.handleItemClick(item, e), onKeyDown: (e) => this.handleKeyDown(item, e, flatIdx) }, this.useSlot
            ? h("slot", { name: `item-${item.id}` }, innerContent)
            : innerContent), hasChildren && isExpanded && (h("ul", { class: "anchor-sublist" }, item.children.map((c, i) => this.renderItem(c, i, level + 1, prefix, countRef))))));
    }
    render() {
        const items = this.getParsedItems();
        const countRef = { val: 0 };
        const curMode = this.orientation || this.mode;
        const wrapperStyle = (this.affix && this.isAffixed)
            ? { position: 'fixed', top: `${this.affixOffset}px`, zIndex: '1000' }
            : {};
        return (h("nav", { key: '85e96011d2a9daae2ca20941ee3ab496961d1e6b', class: {
                'anchor': true,
                [`anchor--${curMode}`]: true,
                [`anchor--${this.position}`]: true,
                [`anchor--${this.size}`]: true,
                [`anchor--${this.theme}`]: true,
                [`anchor--align-${this.alignment}`]: true,
                [`anchor-type-${this.indicator}`]: true,
                'anchor--sticky': this.sticky,
                'anchor--affixed': this.affix && this.isAffixed,
                'anchor--with-indicator': this.showIndicator,
                'anchor--with-numbers': this.showNumbers,
                'show-progress': this.showProgress,
            }, style: { '--anchor-active-color': this.activeColor, ...wrapperStyle } }, this.showProgress && (h("div", { key: '02805460ccef5d7c0ffc52d00de050d91fb1bd78', class: "anchor-progress" }, h("div", { key: 'dfa97ee018532f56e8d9c078f8980b3e52dd75a9', class: "anchor-progress-bar", style: {
                width: curMode === 'horizontal' ? `${this.scrollProgress}%` : '100%',
                height: curMode === 'vertical' ? `${this.scrollProgress}%` : '100%',
            } }))), h("ul", { key: 'd1ffe5c5041220ea11909ed67f52062bc5386953', class: "anchor-list", style: { position: 'relative' } }, items.map((item, index) => this.renderItem(item, index, 0, '', countRef)), this.showIndicator && (h("div", { key: '40f921ba4343544049edb8589fce02f1e2e8f64d', class: "anchor-indicator", style: this.indicatorStyle })))));
    }
    static get watchers() { return {
        "items": [{
                "itemsChanged": 0
            }],
        "links": [{
                "itemsChanged": 0
            }],
        "autoGenContainer": [{
                "handleAutoGenContainerChange": 0
            }],
        "activeItem": [{
                "watchActiveItem": 0
            }],
        "activeLink": [{
                "watchActiveItem": 0
            }]
    }; }
};
Anchor.style = anchorCss();

export { Anchor as ui_anchor };
