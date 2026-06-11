import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const speedDialCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;z-index:1000;position:fixed;left:auto;right:auto;top:auto;bottom:auto}:host(.speed-dial-strategy-absolute){position:absolute}:host(.speed-dial-strategy-fixed){position:fixed}.speed-dial-container{position:relative}:host(.speed-dial-top-left){top:var(--speed-dial-top, 24px);left:var(--speed-dial-left, 24px)}:host(.speed-dial-top-right){top:var(--speed-dial-top, 24px);right:var(--speed-dial-right, 24px)}:host(.speed-dial-bottom-left){bottom:var(--speed-dial-bottom, 24px);left:var(--speed-dial-left, 24px)}:host(.speed-dial-bottom-right){bottom:var(--speed-dial-bottom, 24px);right:var(--speed-dial-right, 24px)}:host(.speed-dial-center),:host(.speed-dial-bottom-center){left:50%;bottom:var(--speed-dial-bottom, 24px);transform:translateX(-50%)}:host(.speed-dial-top-center){left:50%;top:var(--speed-dial-top, 24px);transform:translateX(-50%)}:host(.speed-dial-center-left){left:var(--speed-dial-left, 24px);top:50%;transform:translateY(-50%)}:host(.speed-dial-center-right){right:var(--speed-dial-right, 24px);top:50%;transform:translateY(-50%)}.speed-dial-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;opacity:0;animation:fadeIn 0.2s forwards;z-index:-1}.speed-dial-glassy .speed-dial-backdrop{backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px)}@keyframes fadeIn{to{opacity:1}}.speed-dial-button{position:relative;z-index:2;display:flex !important;align-items:center;justify-content:center;cursor:pointer;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);outline:none;-webkit-tap-highlight-color:transparent;background:transparent !important;border:none;padding:0;margin:0}.speed-dial-elastic .speed-dial-button{animation:speed-dial-elastic-anim 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes speed-dial-elastic-anim{0%{transform:scale(1)}30%{transform:scale(1.15, 0.85)}60%{transform:scale(0.9, 1.1)}100%{transform:scale(1)}}.speed-dial-button:hover{box-shadow:0 6px 12px rgba(0, 0, 0, 0.3);transform:scale(1.05)}.speed-dial-button:active{transform:scale(0.95)}.speed-dial-button-open:not(.speed-dial-button-has-toggle-icon){transform:rotate(45deg)}.speed-dial-button-open:not(.speed-dial-button-has-toggle-icon):hover{transform:rotate(45deg) scale(1.05)}.speed-dial-sm .speed-dial-button{width:40px;height:40px;font-size:18px}.speed-dial-sm .speed-dial-button{width:40px;height:40px;font-size:20px}.speed-dial-md .speed-dial-button{width:56px;height:56px;font-size:24px}.speed-dial-lg .speed-dial-button{width:72px;height:72px;font-size:32px}.speed-dial-icon{transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.speed-dial-actions{position:absolute;display:flex;gap:12px;z-index:1}.speed-dial-actions-up{flex-direction:column-reverse;bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:12px}.speed-dial-actions-down{flex-direction:column;top:100%;left:50%;transform:translateX(-50%);margin-top:12px}.speed-dial-actions-left{flex-direction:row-reverse;right:100%;top:50%;transform:translateY(-50%);margin-right:12px}.speed-dial-actions-right{flex-direction:row;left:100%;top:50%;transform:translateY(-50%);margin-left:12px}.speed-dial-layout-radial,.speed-dial-layout-arc{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);width:0;height:0;overflow:visible}.speed-dial-layout-radial .speed-dial-action-wrapper,.speed-dial-layout-arc .speed-dial-action-wrapper{position:absolute;top:50%;left:50%;margin:-24px;transform-origin:center center;transition:all 0.4s cubic-bezier(0.34, 1.56, 0.64, 1);--angle:var(--item-angle, 0deg);--radius:100px;transform:rotate(var(--angle)) translate(var(--radius)) rotate(calc(-1 * var(--angle))) scale(0);opacity:0}.speed-dial-open .speed-dial-layout-radial .speed-dial-action-wrapper,.speed-dial-open .speed-dial-layout-arc .speed-dial-action-wrapper{transform:rotate(var(--angle)) translate(var(--radius)) rotate(calc(-1 * var(--angle))) scale(1);opacity:1}.speed-dial-action-wrapper{position:relative;opacity:0;transform:scale(0);animation:actionAppear 0.2s cubic-bezier(0.4, 0, 0.2, 1) forwards}@keyframes actionAppear{from{opacity:0;transform:translate(0, 0) scale(0)}to{opacity:1;transform:var(--translation, translate(0, 0)) scale(1)}}.speed-dial-layout-linear .speed-dial-action-wrapper{--translation:translate(0, 0)}.speed-dial-layout-radial .speed-dial-action-wrapper,.speed-dial-layout-arc .speed-dial-action-wrapper{--translation:translate(calc(cos(var(--angle)) * var(--radius)), calc(sin(var(--angle)) * -1 * var(--radius)))}.speed-dial-action{display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease;background:transparent !important;border:none}.speed-dial-sm .speed-dial-action{width:36px;height:36px;font-size:16px}.speed-dial-md .speed-dial-action{width:48px;height:48px;font-size:20px}.speed-dial-lg .speed-dial-action{width:60px;height:60px;font-size:24px}.speed-dial-action:hover:not(.speed-dial-action-disabled){box-shadow:0 4px 10px rgba(0, 0, 0, 0.3);transform:scale(1.1)}.speed-dial-action:active:not(.speed-dial-action-disabled){transform:scale(0.95)}.speed-dial-action-disabled{opacity:0.5;cursor:not-allowed}.speed-dial-action-icon{display:flex;align-items:center;justify-content:center}.speed-dial-action-badge{position:absolute;top:-4px;right:-4px;min-width:18px;height:18px;padding:0 4px;border-radius:9px;background-color:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff);font-size:10px;font-weight:700;display:flex;align-items:center;justify-content:center;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2);border:2px solid var(--bg-primary, #ffffff)}.speed-dial-action-shortcut{position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);background:var(--color-primary, #374151);color:var(--text-standard, #ffffff);font-size:8px;padding:1px 4px;border-radius:4px;font-weight:700;text-transform:uppercase;z-index:1000;pointer-events:none}.speed-dial-action-shortcut.speed-dial-dragging{pointer-events:auto;z-index:2000}.speed-dial-action-shortcut{opacity:0.8}.speed-dial-tooltip{position:absolute;background-color:rgba(0, 0, 0, 0.85);color:var(--text-standard, #ffffff);padding:6px 12px;border-radius:4px;font-size:12px;white-space:nowrap;pointer-events:none;opacity:0;transition:opacity 0.2s ease;z-index:1001}.speed-dial-action-wrapper:hover .speed-dial-tooltip{opacity:1}.speed-dial-tooltip-left{right:100%;top:50%;transform:translateY(-50%);margin-right:8px}.speed-dial-tooltip-right{left:100%;top:50%;transform:translateY(-50%);margin-left:8px}.speed-dial-tooltip-top{bottom:100%;left:50%;transform:translateX(-50%);margin-bottom:8px}.speed-dial-tooltip-bottom{top:100%;left:50%;transform:translateX(-50%);margin-top:8px}.speed-dial-tooltip::after{content:"";position:absolute;width:0;height:0;border:4px solid transparent}.speed-dial-tooltip-left::after{right:-8px;top:50%;transform:translateY(-50%);border-left-color:rgba(0, 0, 0, 0.85)}.speed-dial-tooltip-right::after{left:-8px;top:50%;transform:translateY(-50%);border-right-color:rgba(0, 0, 0, 0.85)}.speed-dial-tooltip-top::after{bottom:-8px;left:50%;transform:translateX(-50%);border-top-color:rgba(0, 0, 0, 0.85)}.speed-dial-tooltip-bottom::after{top:-8px;left:50%;transform:translateX(-50%);border-bottom-color:rgba(0, 0, 0, 0.85)}.speed-dial-button:focus-visible,.speed-dial-action:focus-visible{outline:2px solid var(--color-primary-hover, #2563eb);outline-offset:2px}`;

const SpeedDial = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.actionClick = createEvent(this, "actionClick");
        this.speedDialToggle = createEvent(this, "speedDialToggle");
    }
    get el() { return getElement(this); }
    /**
     * Position of the speed dial button
     */
    position = 'bottom-right';
    /**
     * Speed dial actions
     */
    actions = [];
    /**
     * Positioning strategy: 'fixed' (screen) or 'absolute' (container)
     */
    strategy = 'fixed';
    /**
     * Icon for the main button
     */
    icon = 'plus';
    /**
     * Library for the main button icon
     */
    iconLibrary = 'se';
    /**
     * Icon to show when open (e.g., 'close' or 'x')
     */
    toggleIcon;
    /**
     * Default library for actions
     */
    actionLibrary = 'default';
    /**
     * Color scheme
     */
    color = 'primary';
    /**
     * Size of the button
     */
    size = 'md';
    /**
     * Button variant
     */
    variant = 'solid';
    /**
     * Direction of dial opening
     */
    direction = 'auto';
    /**
     * Button shape
     */
    shape = 'rounded';
    /**
     * Tooltip position
     */
    tooltipPosition = 'auto';
    /**
     * Show tooltips/labels
     */
    showTooltips = true;
    /**
     * Position of the label/tooltip
     */
    labelPosition = 'auto';
    /**
     * Hide the label text but keep it for screen readers
     */
    labelHide = false;
    /**
     * Trigger mode: 'click' (default) or 'hover'
     */
    trigger = 'click';
    /**
     * Opening layout style: 'linear', 'radial', or 'arc'
     */
    layout = 'linear';
    /**
     * Close dial when window scrolls
     */
    closeOnScroll = false;
    /**
     * Use glassmorphism effect
     */
    glassy = false;
    /**
     * Use magnetic pull effect
     */
    magnetic = false;
    /**
     * Strength of magnetic pull (0 to 1)
     */
    magneticStrength = 0.3;
    /**
     * Radius of magnetic pull in pixels
     */
    magneticRadius = 150;
    /**
     * Unique ID to persist the draggable position in localStorage
     */
    persistenceId;
    /**
     * Allow dragging the speed dial to reposition it
     */
    isDraggable = false;
    /**
     * Open state
     */
    isOpen = false;
    /**
     * Magnetic translation
     */
    magneticTransform = { x: 0, y: 0 };
    /**
     * Action item angles (for radial/arc)
     */
    itemAngles = [];
    /**
     * Current drag offset
     */
    dragOffset = { x: 0, y: 0 };
    /**
     * Is currently being dragged
     */
    isDragging = false;
    /**
     * Animation state for elasticity
     */
    isElastic = false;
    /**
     * Emitted when an action is clicked
     */
    actionClick;
    /**
     * Emitted when speed dial opens/closes
     */
    speedDialToggle;
    mainButton;
    closeTimer;
    dragStartPos = { x: 0, y: 0 };
    initialOffset = { x: 0, y: 0 };
    componentWillLoad() {
        this.loadPersistedPosition();
    }
    loadPersistedPosition() {
        if (this.persistenceId && this.isDraggable) {
            const saved = localStorage.getItem(`ui-speed-dial-pos-${this.persistenceId}`);
            if (saved) {
                try {
                    this.dragOffset = JSON.parse(saved);
                }
                catch (e) {
                    console.error('Failed to load SpeedDial position', e);
                }
            }
        }
    }
    savePersistedPosition() {
        if (this.persistenceId && this.isDraggable) {
            localStorage.setItem(`ui-speed-dial-pos-${this.persistenceId}`, JSON.stringify(this.dragOffset));
        }
    }
    getActions() {
        if (typeof this.actions === 'string') {
            try {
                return JSON.parse(this.actions);
            }
            catch {
                return [];
            }
        }
        return this.actions;
    }
    getDialDirection() {
        if (this.direction !== 'auto') {
            return this.direction;
        }
        // Auto-determine direction based on position
        if (this.position === 'center') {
            return 'up';
        }
        else if (this.position.startsWith('bottom')) {
            return 'up';
        }
        else if (this.position.startsWith('top')) {
            return 'down';
        }
        else if (this.position.endsWith('right')) {
            return 'left';
        }
        else {
            return 'right';
        }
    }
    getTooltipPosition() {
        if (this.labelPosition && this.labelPosition !== 'auto') {
            return this.labelPosition;
        }
        if (this.tooltipPosition && this.tooltipPosition !== 'auto') {
            return this.tooltipPosition;
        }
        // Auto-determine tooltip position based on button position and viewport
        const rect = this.el.getBoundingClientRect();
        const margin = 120; // Distance needed for tooltip
        if (this.position.endsWith('right')) {
            if (rect.left < margin)
                return 'right'; // Flip if near left edge
            return 'left';
        }
        if (this.position.endsWith('left')) {
            if (rect.right > window.innerWidth - margin)
                return 'left'; // Flip if near right edge
            return 'right';
        }
        if (this.position.startsWith('top')) {
            if (rect.bottom > window.innerHeight - margin)
                return 'top';
            return 'bottom';
        }
        return 'top';
    }
    toggleDial = () => {
        if (this.isDragging)
            return; // Prevent toggle during/after drag
        this.triggerElastic();
        this.setOpen(!this.isOpen);
    };
    triggerElastic() {
        this.isElastic = true;
        setTimeout(() => (this.isElastic = false), 400);
    }
    handleOpenChange(open) {
        if (open) {
            this.calculateSafeAngles();
        }
    }
    calculateSafeAngles() {
        if (this.layout === 'linear')
            return;
        const actions = this.getActions();
        const count = actions.length;
        if (count === 0)
            return;
        const newAngles = [];
        const rect = this.el.getBoundingClientRect();
        const margin = 100; // Safe distance buffer
        let startAngle = 0;
        let endAngle = 360;
        if (this.layout === 'arc') {
            const dir = this.getDialDirection();
            // Base angles for directions
            if (dir === 'up') {
                startAngle = 180;
                endAngle = 360;
            }
            else if (dir === 'down') {
                startAngle = 0;
                endAngle = 180;
            }
            else if (dir === 'left') {
                startAngle = 90;
                endAngle = 270;
            }
            else if (dir === 'right') {
                startAngle = 270;
                endAngle = 450;
            }
            // EDGE AWARENESS: Shift arc if near horizontal/vertical edges
            const nearRight = rect.right > window.innerWidth - margin || this.position.includes('right');
            const nearLeft = rect.left < margin || this.position.includes('left');
            const nearTop = rect.top < margin || this.position.includes('top');
            const nearBottom = rect.bottom > window.innerHeight - margin || this.position.includes('bottom');
            if (nearRight && (dir === 'up' || dir === 'auto')) {
                startAngle -= 45;
                endAngle -= 45;
            }
            if (nearLeft && (dir === 'up' || dir === 'auto')) {
                startAngle += 45;
                endAngle += 45;
            }
            if (nearTop && (dir === 'right' || dir === 'auto')) {
                startAngle += 45;
                endAngle += 45;
            }
            if (nearBottom && (dir === 'right' || dir === 'auto')) {
                startAngle -= 45;
                endAngle -= 45;
            }
            // Handle side-center positions
            if (this.position === 'center-left') {
                startAngle = 270;
                endAngle = 450;
            }
            if (this.position === 'center-right') {
                startAngle = 90;
                endAngle = 270;
            }
        }
        // Distribute actions
        const range = endAngle - startAngle;
        const step = count > 1 ? range / (this.layout === 'radial' ? count : count - 1) : 0;
        for (let i = 0; i < count; i++) {
            newAngles.push(startAngle + (i * step));
        }
        this.itemAngles = newAngles;
    }
    setOpen(open) {
        if (this.isOpen !== open) {
            this.isOpen = open;
            this.speedDialToggle.emit(this.isOpen);
        }
    }
    handleActionClick = (action) => {
        if (action.disabled)
            return;
        this.actionClick.emit(String(action.id));
        this.setOpen(false);
    };
    handleBackdropClick = () => {
        if (this.isOpen && this.trigger !== 'hover') {
            this.setOpen(false);
        }
    };
    handleWindowScroll() {
        if (this.isOpen && this.closeOnScroll) {
            this.setOpen(false);
        }
    }
    handleGlobalKeyDown(ev) {
        const actions = this.getActions();
        if (!actions || actions.length === 0)
            return;
        // Check shortcuts
        const action = actions.find(a => a.shortcut === ev.key && !a.disabled);
        if (action) {
            ev.preventDefault();
            this.handleActionClick(action);
            return;
        }
    }
    handleMouseMove(ev) {
        if (!this.magnetic)
            return;
        const rect = this.el.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        const dx = ev.clientX - centerX;
        const dy = ev.clientY - centerY;
        const dist = Math.sqrt(dx * dx + dy * dy);
        if (dist < this.magneticRadius) {
            // Pull toward cursor
            const influence = 1 - (dist / this.magneticRadius);
            this.magneticTransform = {
                x: dx * this.magneticStrength * influence,
                y: dy * this.magneticStrength * influence
            };
        }
        else if (this.magneticTransform.x !== 0 || this.magneticTransform.y !== 0) {
            this.magneticTransform = { x: 0, y: 0 };
        }
    }
    // DRAG HANDLERS
    onMouseDown(ev) {
        if (!this.isDraggable)
            return;
        this.isDragging = true;
        this.dragStartPos = { x: ev.clientX, y: ev.clientY };
        this.initialOffset = { ...this.dragOffset };
        this.setOpen(false); // Close dial when starting to drag
        document.addEventListener('mousemove', this.onMouseMove);
        document.addEventListener('mouseup', this.onMouseUp);
    }
    onMouseMove = (ev) => {
        if (!this.isDragging)
            return;
        const dx = ev.clientX - this.dragStartPos.x;
        const dy = ev.clientY - this.dragStartPos.y;
        this.dragOffset = {
            x: this.initialOffset.x + dx,
            y: this.initialOffset.y + dy
        };
    };
    onMouseUp = () => {
        this.isDragging = false;
        document.removeEventListener('mousemove', this.onMouseMove);
        document.removeEventListener('mouseup', this.onMouseUp);
        this.savePersistedPosition();
        // Logic to "snap" to corners could go here if desired
    };
    // Hover handlers
    onMouseEnter = () => {
        if (this.trigger === 'hover') {
            clearTimeout(this.closeTimer);
            this.setOpen(true);
        }
    };
    onMouseLeave = () => {
        if (this.trigger === 'hover') {
            this.closeTimer = setTimeout(() => {
                this.setOpen(false);
            }, 300); // Slight delay to prevent flickering
        }
    };
    // Keyboard navigation
    // Keyboard navigation for open state
    handleLocalKeyDown(ev) {
        if (!this.isOpen)
            return;
        const actionButtons = Array.from(this.el.shadowRoot?.querySelectorAll('.speed-dial-action') ?? []);
        // If focused on main button and arrow key pressed, move to first action
        if (document.activeElement === this.mainButton || this.el.shadowRoot?.activeElement === this.mainButton) {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(ev.key)) {
                ev.preventDefault();
                if (actionButtons.length > 0) {
                    actionButtons[actionButtons.length - 1].focus(); // Focus last item (closest to main button often)
                }
                return;
            }
        }
        // Trap or navigate between actions
        const currentIndex = actionButtons.indexOf(this.el.shadowRoot?.activeElement);
        if (ev.key === 'Escape') {
            this.setOpen(false);
            this.mainButton.focus();
        }
        else if (currentIndex !== -1) {
            if (['ArrowDown', 'ArrowRight'].includes(ev.key)) {
                ev.preventDefault();
                // Let's assume logical visual order might vary, but index order is simpler
                // Actually, let's just cycle.
                const next = (currentIndex + 1) % actionButtons.length;
                actionButtons[next].focus();
            }
            else if (['ArrowUp', 'ArrowLeft'].includes(ev.key)) {
                ev.preventDefault();
                const prev = (currentIndex - 1 + actionButtons.length) % actionButtons.length;
                actionButtons[prev].focus();
            }
        }
    }
    render() {
        const actions = this.getActions();
        const dialDirection = this.getDialDirection();
        const tooltipPos = this.getTooltipPosition();
        const containerClasses = {
            'speed-dial-container': true,
            [`speed-dial-${this.size}`]: true,
            'speed-dial-open': this.isOpen,
            'speed-dial-glassy': this.glassy,
            'speed-dial-dragging': this.isDragging,
            'speed-dial-elastic': this.isElastic,
        };
        const mainButtonClasses = {
            'speed-dial-button': true,
            'speed-dial-main': true,
            [`speed-dial-${this.color}`]: true,
            [`speed-dial-variant-${this.variant}`]: true,
            [`speed-dial-shape-${this.shape}`]: true,
            'speed-dial-button-open': this.isOpen,
            'speed-dial-button-has-toggle-icon': !!this.toggleIcon,
        };
        const actionsClasses = {
            'speed-dial-actions': true,
            [`speed-dial-actions-${dialDirection}`]: true,
            [`speed-dial-layout-${this.layout}`]: true,
        };
        const hostClasses = {
            [`speed-dial-strategy-${this.strategy}`]: true,
            [`speed-dial-${this.position}`]: true,
        };
        const containerStyle = {
            '--magnetic-x': `${this.magneticTransform.x}px`,
            '--magnetic-y': `${this.magneticTransform.y}px`,
            '--drag-x': `${this.dragOffset.x}px`,
            '--drag-y': `${this.dragOffset.y}px`,
            'transform': `translate(calc(var(--magnetic-x, 0px) + var(--drag-x, 0px)), calc(var(--magnetic-y, 0px) + var(--drag-y, 0px)))`,
            'transition': (this.magneticTransform.x === 0 && !this.isDragging) ? 'transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)' : 'none',
            'cursor': this.isDraggable ? (this.isDragging ? 'grabbing' : 'grab') : 'default',
        };
        return (h(Host, { key: '044e35eacc272591b4f60488eb366c40c1b1f236', class: hostClasses, onMouseEnter: this.onMouseEnter, onMouseLeave: this.onMouseLeave }, h("div", { key: '37b6426b0b26e5fbb55a7d52a1b1a515a3d56954', class: containerClasses, style: containerStyle }, this.isOpen && this.trigger === 'click' && (h("div", { key: '4abeed7f2425ec14494dd7bb8e772eee322ff6a6', class: "speed-dial-backdrop", onClick: this.handleBackdropClick })), h("div", { key: '0bfdc8b5ce0ca3949742414078299c3fda31d755', class: actionsClasses, role: "menu", "aria-orientation": ['top', 'bottom'].includes(dialDirection) ? 'vertical' : 'horizontal' }, this.isOpen && actions.map((action, index) => {
            const angle = this.itemAngles[index] || 0;
            const actionStyle = {
                '--item-angle': `${angle}deg`,
                '--index': index.toString(),
                '--stagger-delay': `${index * 0.05}s`,
                'animation-delay': `${index * 0.05}s`,
            };
            return (h("div", { key: action.id, class: "speed-dial-action-wrapper", style: actionStyle }, h("ui-button", { variant: "ghost", class: {
                    'speed-dial-action': true,
                    [`speed-dial-${action.variant || this.variant}`]: true,
                    [`speed-dial-variant-${action.variant || this.variant}`]: true,
                    [`speed-dial-shape-${action.shape || this.shape}`]: true,
                    [`speed-dial-${action.color || this.color}`]: true,
                    'speed-dial-action-disabled': action.disabled,
                }, onClick: () => this.handleActionClick(action), disabled: action.disabled, ariaLabel: action.label, style: {
                    backgroundColor: action.color || undefined,
                } }, h("span", { class: "speed-dial-action-icon" }, h("ui-icon", { name: action.icon, library: action.iconLibrary || this.actionLibrary, size: "1.25em" })), action.badge && (h("span", { class: "speed-dial-action-badge", style: { backgroundColor: action.badgeColor } }, action.badge)), action.shortcut && (h("span", { class: "speed-dial-action-shortcut" }, action.shortcut))), this.showTooltips && action.label && (h("div", { class: {
                    [`speed-dial-tooltip`]: true,
                    [`speed-dial-tooltip-${tooltipPos}`]: true,
                    'speed-dial-tooltip-hidden': this.labelHide
                } }, action.label))));
        })), h("ui-button", { key: '3a6825fce27f39d7a4a689b4e860b7363b34e67f', variant: "ghost", class: mainButtonClasses, onClick: this.toggleDial, ariaLabel: "Speed dial menu", "aria-expanded": this.isOpen ? 'true' : 'false', "aria-haspopup": "true", ref: (el) => (this.mainButton = el) }, h("slot", { key: 'b59d109049ce98eae735d4e598a929669171d247', name: "trigger-icon" }, h("span", { key: '3d3c55dbbd3b67ade9dbd28a66b60feb2483e12a', class: "speed-dial-icon" }, h("ui-icon", { key: 'b0c231ad4fe207ca18e2b8efcf8ad891072d7c65', name: this.isOpen && this.toggleIcon ? this.toggleIcon : this.icon, library: this.iconLibrary, size: "1.5rem" })))))));
    }
    static get watchers() { return {
        "isOpen": [{
                "handleOpenChange": 0
            }]
    }; }
};
SpeedDial.style = speedDialCss();

export { SpeedDial as ui_speed_dial };
