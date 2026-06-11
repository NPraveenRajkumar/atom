import { r as registerInstance, c as createEvent, h, a as getElement } from './index-DUsoYu9r.js';

const smartMenuCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif}.context-menu{position:fixed;background:linear-gradient(135deg, #667eea 0%, #764ba2 100%);backdrop-filter:blur(10px);border-radius:12px;padding:6px;min-width:220px;box-shadow:0 10px 40px rgba(0, 0, 0, 0.3), 0 0 0 1px rgba(255, 255, 255, 0.1) inset;z-index:10000;animation:menuFadeIn 0.15s ease-out;user-select:none}.context-menu.submenu{background:linear-gradient(135deg, #f093fb 0%, #f5576c 100%)}@keyframes menuFadeIn{from{opacity:0;transform:scale(0.95) translateY(-5px)}to{opacity:1;transform:scale(1) translateY(0)}}.menu-item{display:flex;align-items:center;padding:10px 14px;cursor:pointer;border-radius:8px;color:white;font-size:14px;font-weight:500;transition:all 0.15s ease;position:relative;gap:10px}.menu-item:hover:not(.disabled){background:rgba(255, 255, 255, 0.2);transform:translateX(2px)}.menu-item.active{background:rgba(255, 255, 255, 0.25)}.menu-item.disabled{opacity:0.4;cursor:not-allowed}.menu-icon{font-size:16px;width:20px;display:flex;align-items:center;justify-content:center}.menu-label-container{flex:1;display:flex;flex-direction:column}.menu-label{white-space:nowrap}.menu-description{font-size:11px;opacity:0.7;font-weight:normal;margin-top:1px}.submenu-arrow{font-size:10px;opacity:0.8;margin-left:auto}.menu-divider{height:1px;background:rgba(255, 255, 255, 0.2);margin:6px 8px}`;

const SmartMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.menuItemClick = createEvent(this, "menuItemClick");
    }
    /**
     * Menu items, can be JSON string or array of MenuItem
     */
    items = [];
    target; // CSS selector for target element
    /**
     * Event emitted when a menu item is clicked
     */
    menuItemClick;
    visible = false;
    position = { x: 0, y: 0 };
    activeSubmenus = {};
    submenuPositions = {};
    parsedItems = [];
    submenuOpenTimeouts = {};
    submenuCloseTimeouts = {};
    menuRef;
    targetElement = null;
    contextMenuHandler;
    targetRetryCount = 0;
    maxTargetRetries = 10;
    targetRetryDelay = 100; // ms
    handleItemsChange(newValue) {
        this.parseItems(newValue);
    }
    componentWillLoad() {
        this.parseItems(this.items);
    }
    componentDidLoad() {
        this.attachContextMenuHandler();
        // Observe DOM changes to re-attach if target is replaced
        if (this.target) {
            const observer = new MutationObserver(() => {
                this.attachContextMenuHandler();
            });
            observer.observe(document.body, { childList: true, subtree: true });
            this._targetObserver = observer;
        }
    }
    parseItems(items) {
        if (typeof items === 'string') {
            try {
                this.parsedItems = JSON.parse(items);
            }
            catch {
                this.parsedItems = [];
            }
        }
        else {
            this.parsedItems = items || [];
        }
    }
    attachContextMenuHandler() {
        if (!this.target) {
            // Fallback: listen on document if no target specified
            if (!this.contextMenuHandler) {
                this.contextMenuHandler = (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.show(event.clientX, event.clientY);
                };
                document.addEventListener('contextmenu', this.contextMenuHandler);
            }
            return;
        }
        const el = document.querySelector(this.target);
        if (el !== this.targetElement) {
            // Remove old listener if target changed
            if (this.targetElement && this.contextMenuHandler) {
                this.targetElement.removeEventListener('contextmenu', this.contextMenuHandler);
            }
            this.targetElement = el;
        }
        if (this.targetElement) {
            if (!this.contextMenuHandler) {
                this.contextMenuHandler = (event) => {
                    event.preventDefault();
                    event.stopPropagation();
                    this.show(event.clientX, event.clientY);
                };
            }
            this.targetElement.addEventListener('contextmenu', this.contextMenuHandler);
            this.targetRetryCount = 0;
        }
        else if (this.targetRetryCount < this.maxTargetRetries) {
            this.targetRetryCount++;
            setTimeout(() => this.attachContextMenuHandler(), this.targetRetryDelay);
        }
    }
    disconnectedCallback() {
        // Clean up event listener
        if (this.targetElement && this.contextMenuHandler) {
            this.targetElement.removeEventListener('contextmenu', this.contextMenuHandler);
        }
        if (this._targetObserver) {
            this._targetObserver.disconnect();
        }
        // Remove document fallback
        if (!this.target && this.contextMenuHandler) {
            document.removeEventListener('contextmenu', this.contextMenuHandler);
        }
    }
    handleClickOutside() {
        if (this.visible) {
            this.hide();
        }
    }
    handleResize() {
        if (this.visible) {
            this.hide();
        }
    }
    async show(x, y) {
        this.visible = true;
        this.activeSubmenus = {};
        this.submenuPositions = {};
        setTimeout(() => {
            this.position = this.calculatePosition(x, y, this.menuRef);
        }, 0);
    }
    async hide() {
        this.visible = false;
        this.activeSubmenus = {};
        this.submenuPositions = {};
    }
    calculatePosition(x, y, element) {
        if (!element)
            return { x, y };
        const rect = element.getBoundingClientRect();
        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        let finalX = x;
        let finalY = y;
        // Adjust horizontal position
        if (x + rect.width > viewportWidth) {
            finalX = viewportWidth - rect.width - 5;
        }
        // Adjust vertical position
        if (y + rect.height > viewportHeight) {
            finalY = viewportHeight - rect.height - 5;
        }
        return { x: Math.max(5, finalX), y: Math.max(5, finalY) };
    }
    handleItemClick(item, event) {
        event.stopPropagation();
        if (item.disabled || item.divider)
            return;
        if (item.submenu && item.submenu.length > 0) {
            return; // Let hover handle submenu
        }
        if (item.action) {
            item.action();
        }
        // Emit event for demo purposes
        this.menuItemClick.emit({ label: item.label, item });
        this.hide();
    }
    handleItemHover(item, index, event, path = '') {
        const currentPath = path ? `${path}-${index}` : `${index}`;
        // Only one submenu per level
        const level = currentPath.split('-').length - 1;
        Object.keys(this.submenuOpenTimeouts).forEach(key => {
            if (key.split('-').length - 1 === level && key !== currentPath) {
                clearTimeout(this.submenuOpenTimeouts[key]);
                delete this.submenuOpenTimeouts[key];
                this.activeSubmenus[key] = false;
            }
        });
        if (item.submenu && item.submenu.length > 0 && !item.disabled) {
            // Add delay before opening submenu
            if (this.submenuOpenTimeouts[currentPath])
                clearTimeout(this.submenuOpenTimeouts[currentPath]);
            if (this.submenuCloseTimeouts[currentPath])
                clearTimeout(this.submenuCloseTimeouts[currentPath]);
            this.submenuOpenTimeouts[currentPath] = window.setTimeout(() => {
                this.activeSubmenus = { ...this.activeSubmenus, [currentPath]: true };
                setTimeout(() => {
                    const submenuElement = this.hostElement?.shadowRoot?.querySelector(`.submenu-${currentPath}`);
                    if (submenuElement) {
                        const target = event.currentTarget;
                        const targetRect = target.getBoundingClientRect();
                        const submenuRect = submenuElement.getBoundingClientRect();
                        const viewportWidth = window.innerWidth;
                        const viewportHeight = window.innerHeight;
                        // Default: open right and down
                        let x = targetRect.right;
                        let y = targetRect.top;
                        let direction = 'right';
                        let vertical = 'down';
                        // Horizontal edge detection (flip left if needed)
                        if (x + submenuRect.width > viewportWidth) {
                            x = targetRect.left - submenuRect.width;
                            direction = 'left';
                        }
                        // Vertical edge detection (flip up if needed)
                        if (y + submenuRect.height > viewportHeight) {
                            y = Math.max(5, viewportHeight - submenuRect.height - 5);
                            if (y < targetRect.top)
                                vertical = 'up';
                        }
                        // Clamp to viewport
                        x = Math.max(5, Math.min(x, viewportWidth - submenuRect.width - 5));
                        y = Math.max(5, Math.min(y, viewportHeight - submenuRect.height - 5));
                        this.submenuPositions = {
                            ...this.submenuPositions,
                            [currentPath]: { x, y, direction, vertical }
                        };
                    }
                }, 0);
            }, 120); // 120ms delay
        }
        else {
            // Clear all submenus that are not ancestors of this path
            Object.keys(this.submenuOpenTimeouts).forEach(key => {
                if (!key.startsWith(currentPath) && !currentPath.startsWith(key)) {
                    clearTimeout(this.submenuOpenTimeouts[key]);
                    delete this.submenuOpenTimeouts[key];
                    this.activeSubmenus[key] = false;
                }
            });
            Object.keys(this.submenuCloseTimeouts).forEach(key => {
                if (!key.startsWith(currentPath) && !currentPath.startsWith(key)) {
                    clearTimeout(this.submenuCloseTimeouts[key]);
                    delete this.submenuCloseTimeouts[key];
                }
            });
            const newActiveSubmenus = {};
            const newSubmenuPositions = {};
            Object.keys(this.activeSubmenus).forEach(key => {
                if (key.startsWith(currentPath) || currentPath.startsWith(key)) {
                    newActiveSubmenus[key] = this.activeSubmenus[key];
                    if (this.submenuPositions[key]) {
                        newSubmenuPositions[key] = this.submenuPositions[key];
                    }
                }
            });
            this.activeSubmenus = newActiveSubmenus;
            this.submenuPositions = newSubmenuPositions;
        }
    }
    handleSubmenuClick(item, event) {
        event.stopPropagation();
        if (item.disabled || item.divider)
            return;
        if (item.action) {
            item.action();
        }
        this.hide();
    }
    iconLibrary = 'default';
    renderMenuItem(item, index) {
        if (item.divider) {
            return h("div", { class: "menu-divider" });
        }
        const hasSubmenu = item.submenu && item.submenu.length > 0;
        const path = `${index}`;
        return (h("div", { class: {
                'menu-item': true,
                'disabled': item.disabled,
                'has-submenu': hasSubmenu,
                'active': this.activeSubmenus[path]
            }, "data-path": path, onClick: (e) => this.handleItemClick(item, e), onMouseEnter: (e) => this.handleItemHover(item, index, e), onMouseLeave: () => {
                setTimeout(() => {
                    const submenu = this.hostElement?.shadowRoot?.querySelector(`.submenu-${path}`);
                    if (!submenu || !submenu.matches(':hover')) {
                        this.activeSubmenus[path] = false;
                        this.submenuPositions[path] = undefined;
                    }
                }, 150);
            } }, item.icon && h("span", { class: "menu-icon" }, h("ui-icon", { name: item.icon, library: this.iconLibrary, size: "16px" })), h("div", { class: "menu-label-container" }, h("span", { class: "menu-label" }, item.label), item.description && h("span", { class: "menu-description" }, item.description)), hasSubmenu && (h("span", { class: "submenu-arrow" }, h("ui-icon", { name: "chevron-right", library: "lucide", size: "14px" })))));
    }
    renderSubmenu(items, path, level = 1) {
        const position = this.submenuPositions[path];
        if (!position || level > 4)
            return null;
        return (h("div", { class: `context-menu submenu submenu-${path} submenu-${position.direction} submenu-${position.vertical}`, style: {
                left: `${position.x}px`,
                top: `${position.y}px`,
                zIndex: `${10000 + level}`
            }, onMouseEnter: () => {
                if (this.submenuCloseTimeouts[path]) {
                    clearTimeout(this.submenuCloseTimeouts[path]);
                    delete this.submenuCloseTimeouts[path];
                }
                this.activeSubmenus[path] = true;
            }, onMouseLeave: () => {
                if (this.submenuOpenTimeouts[path]) {
                    clearTimeout(this.submenuOpenTimeouts[path]);
                    delete this.submenuOpenTimeouts[path];
                }
                this.submenuCloseTimeouts[path] = window.setTimeout(() => {
                    this.activeSubmenus[path] = false;
                }, 200);
            } }, items.map((item, index) => {
            if (item.divider) {
                return h("div", { class: "menu-divider" });
            }
            const hasSubmenu = item.submenu && item.submenu.length > 0;
            const currentPath = `${path}-${index}`;
            const isActive = this.activeSubmenus[currentPath];
            return (h("div", { class: {
                    'menu-item': true,
                    'disabled': item.disabled,
                    'has-submenu': hasSubmenu,
                    'active': isActive
                }, onClick: (e) => this.handleItemClick(item, e), onMouseEnter: (e) => this.handleItemHover(item, index, e, path), onMouseLeave: () => {
                    if (this.submenuOpenTimeouts[currentPath]) {
                        clearTimeout(this.submenuOpenTimeouts[currentPath]);
                        delete this.submenuOpenTimeouts[currentPath];
                    }
                    this.submenuCloseTimeouts[currentPath] = window.setTimeout(() => {
                        this.activeSubmenus[currentPath] = false;
                    }, 200);
                } }, item.icon && h("span", { class: "menu-icon" }, h("ui-icon", { name: item.icon, library: this.iconLibrary, size: "16px" })), h("div", { class: "menu-label-container" }, h("span", { class: "menu-label" }, item.label), item.description && h("span", { class: "menu-description" }, item.description)), hasSubmenu && (h("span", { class: "submenu-arrow" }, h("ui-icon", { name: position.direction === 'left' ? 'chevron-left' : 'chevron-right', library: "lucide", size: "14px" })))));
        }), Object.keys(this.activeSubmenus).map(subPath => {
            if (subPath.startsWith(path + '-')) {
                const subItems = this.getItemsByPath(subPath);
                if (subItems && subItems.length > 0) {
                    return this.renderSubmenu(subItems, subPath, level + 1);
                }
            }
            return null;
        })));
    }
    getItemsByPath(path) {
        const indices = path.split('-').map(i => parseInt(i));
        let items = this.parsedItems;
        for (let i = 0; i < indices.length; i++) {
            const index = indices[i];
            if (items && items[index] && items[index].submenu) {
                items = items[index].submenu;
            }
            else {
                return null;
            }
        }
        return items;
    }
    get hostElement() { return getElement(this); }
    render() {
        if (!this.visible)
            return null;
        return (h("div", { id: "smart-menu-host" }, h("div", { class: "context-menu", ref: (el) => this.menuRef = el, style: {
                left: `${this.position.x}px`,
                top: `${this.position.y}px`
            }, onClick: (e) => e.stopPropagation() }, this.parsedItems.map((item, index) => this.renderMenuItem(item, index))), Object.keys(this.activeSubmenus).map(path => {
            if (this.activeSubmenus[path]) {
                const items = this.getItemsByPath(path);
                if (items && items.length > 0) {
                    const level = path.split('-').length + 1;
                    return this.renderSubmenu(items, path, level);
                }
            }
            return null;
        })));
    }
    static get watchers() { return {
        "items": [{
                "handleItemsChange": 0
            }]
    }; }
};
SmartMenu.style = smartMenuCss();

export { SmartMenu as ui_smart_context_menu };
