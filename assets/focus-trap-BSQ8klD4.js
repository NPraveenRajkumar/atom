class FocusTrap {
    container;
    options;
    originalFocusedElement = null;
    firstFocusable = null;
    lastFocusable = null;
    isActive = false;
    focusableSelectors = [
        'a[href]',
        'area[href]',
        'input:not([disabled])',
        'select:not([disabled])',
        'textarea:not([disabled])',
        'button:not([disabled])',
        'iframe',
        'object',
        'embed',
        '[contenteditable]',
        '[tabindex]:not([tabindex="-1"])',
        'ui-terminal',
        'ui-code-editor'
    ];
    constructor(container, options = {}) {
        this.container = container;
        this.options = {
            escapeDeactivates: true,
            clickOutsideDeactivates: false,
            returnFocus: true,
            ...options
        };
    }
    activate() {
        if (this.isActive)
            return;
        this.originalFocusedElement = document.activeElement;
        this.isActive = true;
        // Add event listeners
        this.container.addEventListener('keydown', this.handleKeyDown);
        if (this.options.clickOutsideDeactivates) {
            document.addEventListener('click', this.handleClickOutside);
        }
        // Find focusable elements
        this.updateFocusableElements();
        // Set initial focus
        if (this.options.initialFocus) {
            const initial = typeof this.options.initialFocus === 'string'
                ? this.container.querySelector(this.options.initialFocus)
                : this.options.initialFocus;
            if (initial) {
                initial.focus();
            }
            else if (this.firstFocusable) {
                this.firstFocusable.focus();
            }
        }
        else if (this.firstFocusable) {
            this.firstFocusable.focus();
        }
        // Add visual indicator class
        this.container.classList.add('focus-trap-active');
    }
    deactivate() {
        if (!this.isActive)
            return;
        this.isActive = false;
        this.container.removeEventListener('keydown', this.handleKeyDown);
        document.removeEventListener('click', this.handleClickOutside);
        this.container.classList.remove('focus-trap-active');
        if (this.options.returnFocus && this.originalFocusedElement && document.contains(this.originalFocusedElement)) {
            if (typeof this.options.returnFocus === 'boolean') {
                this.originalFocusedElement.focus();
            }
            else {
                this.options.returnFocus.focus();
            }
        }
    }
    updateFocusableElements = () => {
        const focusableElements = Array.from(this.container.querySelectorAll(this.focusableSelectors.join(',')));
        const visibleFocusable = focusableElements.filter(el => {
            return el.offsetParent !== null && !el.hasAttribute('disabled') && el.getAttribute('tabindex') !== '-1';
        });
        this.firstFocusable = visibleFocusable[0] || null;
        this.lastFocusable = visibleFocusable[visibleFocusable.length - 1] || null;
    };
    handleKeyDown = (e) => {
        if (this.options.escapeDeactivates && e.key === 'Escape') {
            this.deactivate();
            return;
        }
        if (e.key === 'Tab') {
            this.updateFocusableElements(); // Re-scan in case contents changed
            if (!this.firstFocusable || !this.lastFocusable) {
                e.preventDefault();
                return;
            }
            const activeElement = this.getActiveElement();
            if (e.shiftKey) { // Shift + Tab
                if (activeElement === this.firstFocusable || !this.containsPierce(this.container, activeElement)) {
                    e.preventDefault();
                    this.lastFocusable?.focus();
                }
            }
            else { // Tab
                if (activeElement === this.lastFocusable || !this.containsPierce(this.container, activeElement)) {
                    e.preventDefault();
                    this.firstFocusable?.focus();
                }
            }
        }
    };
    getActiveElement() {
        let el = document.activeElement;
        while (el && el.shadowRoot && el.shadowRoot.activeElement) {
            el = el.shadowRoot.activeElement;
        }
        return el;
    }
    containsPierce(container, target) {
        if (!target)
            return false;
        let curr = target;
        while (curr) {
            if (curr === container)
                return true;
            curr = curr.parentNode || curr.host;
        }
        return false;
    }
    handleClickOutside = (e) => {
        if (!this.containsPierce(this.container, e.target)) {
            this.deactivate();
        }
    };
}

export { FocusTrap as F };
