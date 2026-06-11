import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-Dqu2zaH1.js';

const asidePanelCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:contents;--aside-overlay-bg:rgba(0, 0, 0, 0.4);--aside-panel-bg:var(--aside-bg, var(--bg-primary, #ffffff));--aside-panel-shadow:0 10px 40px -4px rgba(0, 0, 0, 0.1), 0 4px 12px -2px rgba(0, 0, 0, 0.06);--aside-panel-text:var(--text-primary, #0f172a);--aside-close-btn-color:var(--text-muted, #64748b);--aside-close-btn-hover-color:var(--text-primary, #0f172a);--aside-close-btn-hover-bg:var(--bg-secondary, #f1f5f9);--aside-close-btn-focus:var(--color-primary, #10b981);--aside-resize-handle-hover:var(--color-primary, #10b981);--aside-resize-handle-active:var(--color-primary-hover, #2563eb);--aside-panel-padding:32px;--aside-transition-duration:0.3s;--aside-ease:cubic-bezier(0.65, 0, 0.35, 1);--aside-z-index-overlay:1500;--aside-z-index-panel:1501;--aside-mini-size:64px}.aside-container{display:block}.overlay{position:fixed;top:0;left:0;width:100%;height:100%;background-color:var(--aside-overlay-bg);opacity:0;visibility:hidden;transition:opacity var(--aside-transition-duration) var(--aside-ease), visibility var(--aside-transition-duration) var(--aside-ease);z-index:var(--aside-z-index-overlay)}.overlay.visible{opacity:1;visibility:visible}.panel{position:fixed;background-color:var(--aside-panel-bg);color:var(--aside-panel-text);box-shadow:var(--aside-panel-shadow);transition:transform var(--aside-transition-duration) var(--aside-ease), width var(--aside-transition-duration) var(--aside-ease), height var(--aside-transition-duration) var(--aside-ease), opacity var(--aside-transition-duration) var(--aside-ease), visibility var(--aside-transition-duration) var(--aside-ease);z-index:var(--aside-z-index-panel);display:flex;flex-direction:column;overflow:hidden;visibility:hidden;pointer-events:none;transform-style:preserve-3d;--aside-dir-transform:translate(0, 0);transform:var(--aside-center-transform, none) var(--aside-dir-transform)}.panel-left{--aside-dir-transform:translateX(-110%)}.panel-right{--aside-dir-transform:translateX(110%)}.panel-top{--aside-dir-transform:translateY(-110%)}.panel-bottom{--aside-dir-transform:translateY(110%)}.panel.open{visibility:visible;pointer-events:auto;--aside-dir-transform:translate(0, 0)}.panel.maximized{width:90% !important;height:90% !important;border-radius:16px;z-index:1550;box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.5);margin:1%}.panel.maximized .resize-handle{display:none !important}.panel.resizing{transition:none !important;user-select:none}.parallax-active{transition:transform var(--aside-transition-duration) var(--aside-ease), width var(--aside-transition-duration) var(--aside-ease), height var(--aside-transition-duration) var(--aside-ease), opacity var(--aside-transition-duration) var(--aside-ease)}.panel.mini .panel-header,.panel.mini .panel-footer,.panel.mini .toolbar-right,.panel.mini .close-btn{display:none !important}.panel.mini .panel-content{opacity:0.1;filter:blur(4px);pointer-events:none}.panel-header-toolbar{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:rgba(0, 0, 0, 0.02);border-bottom:1px solid rgba(0, 0, 0, 0.05)}.panel-header-toolbar .toolbar-left,.panel-header-toolbar .toolbar-right{display:flex;align-items:center;gap:8px}.toolbar-btn{background:transparent;border:none;width:32px;height:32px;border-radius:6px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--aside-close-btn-color);transition:all 0.2s ease}.toolbar-btn:hover{background:var(--aside-close-btn-hover-bg);color:var(--aside-close-btn-hover-color)}.voice-btn.active{color:var(--color-danger, #ef4444);animation:voice-breathing 1.5s infinite ease-in-out}.panel-header{padding:24px var(--aside-panel-padding);border-bottom:1px solid var(--border-subtle, #e2e8f0);position:relative}.panel-header .header-main{display:flex;align-items:baseline;justify-content:space-between;gap:8px}.panel-header .header-badge{background:var(--border-subtle, #e2e8f0);color:var(--color-primary, #475569);padding:2px 8px;border-radius:999px;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em}.panel-header .header-progress{position:absolute;bottom:0;left:0;right:0;height:2px;background:rgba(0, 0, 0, 0.05)}.panel-header .header-progress .progress-bar{height:100%;background:var(--color-primary, #10b981);transition:width 0.3s ease}.theme-zenith .header-badge{background:rgba(var(--color-success-rgb, 16, 185, 129), 0.2);color:var(--color-success, #10b981)}.theme-zenith .header-progress .progress-bar{background:var(--color-success, #10b981);box-shadow:0 0 5px var(--color-success, #10b981)}.panel-content{flex:1;padding:var(--aside-panel-padding);overflow-y:auto}.panel-footer{padding:20px var(--aside-panel-padding);border-top:1px solid var(--border-subtle, #e2e8f0);background-color:var(--bg-primary, #f8fafc)}.variant-glass .panel,.theme-glass .panel{background:rgba(255, 255, 255, 0.7);backdrop-filter:blur(16px) saturate(180%);border:1px solid rgba(255, 255, 255, 0.3)}.variant-glass.panel-left{border-right:1px solid rgba(255, 255, 255, 0.3)}.variant-floating .panel{border-radius:16px;border:1px solid rgba(0, 0, 0, 0.08);box-shadow:0 20px 40px -10px rgba(0, 0, 0, 0.2), 0 10px 15px -5px rgba(0, 0, 0, 0.1)}.variant-floating .panel.panel-right:not(.open){--aside-dir-transform:translateX(calc(100% + 80px))}.variant-floating .panel.panel-left:not(.open){--aside-dir-transform:translateX(calc(-100% - 80px))}.variant-floating .panel.panel-top:not(.open){--aside-dir-transform:translateY(calc(-100% - 80px))}.variant-floating .panel.panel-bottom:not(.open){--aside-dir-transform:translateY(calc(100% + 80px))}.theme-radiant .panel{background:linear-gradient(135deg, var(--bg-primary, #ffffff), var(--bg-primary, #f8fafc));border:2px solid transparent;background-clip:padding-box;box-shadow:0 20px 50px rgba(0, 0, 0, 0.15)}.theme-zenith .panel{background:var(--bg-secondary, #0f172a);color:var(--bg-primary, #ffffff);border-color:var(--bg-primary, var(--border-subtle, #1e293b))}.theme-zenith .panel .panel-header,.theme-zenith .panel .panel-footer{border-color:var(--bg-primary, var(--border-subtle, #1e293b));background:var(--bg-primary, var(--border-subtle, #1e293b))}.resize-handle{position:absolute;background-color:transparent;z-index:1510;transition:background-color 0.2s ease, opacity 0.2s ease;display:flex;align-items:center;justify-content:center}.resize-handle:hover{background-color:var(--aside-resize-handle-hover)}.resize-indicator{display:flex;gap:2px;pointer-events:none;opacity:0.5}.resize-handle:hover .resize-indicator{opacity:1}.resize-handle-left,.resize-handle-right{flex-direction:column}.resize-handle-left .resize-indicator,.resize-handle-right .resize-indicator{flex-direction:column}.resize-indicator span{width:3px;height:3px;background-color:currentColor;border-radius:50%;box-shadow:0 0 2px rgba(0, 0, 0, 0.2)}.resize-handle-left{right:0;top:0;bottom:0;width:6px;cursor:ew-resize}.resize-handle-right{left:0;top:0;bottom:0;width:6px;cursor:ew-resize}.resize-handle-top{bottom:0;left:0;right:0;height:6px;cursor:ns-resize}.resize-handle-bottom{top:0;left:0;right:0;height:6px;cursor:ns-resize}.loading-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(255, 255, 255, 0.7);display:flex;align-items:center;justify-content:center;z-index:1600;backdrop-filter:blur(4px);overflow:hidden}.loading-overlay::after{content:"";position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(90deg, transparent, rgba(var(--color-primary-rgb, 59, 130, 246), 0.1), transparent);animation:aside-shimmer 2s infinite}.spinner{width:48px;height:48px;border:4px solid rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);border-top-color:var(--color-primary, #10b981);border-radius:50%;animation:aside-spin 1s infinite linear}@keyframes aside-spin{to{transform:rotate(360deg)}}@keyframes aside-shimmer{100%{left:200%}}.theme-zenith .panel.open{animation:zenith-heartbeat 4s ease-in-out infinite}@keyframes zenith-heartbeat{0%,100%{box-shadow:0 0 0 0 rgba(var(--color-success-rgb, 16, 185, 129), 0)}50%{box-shadow:0 0 20px 2px rgba(var(--color-success-rgb, 16, 185, 129), 0.2)}}@media (prefers-color-scheme: dark){:host{--aside-panel-bg:var(--bg-primary, #1e293b);--aside-panel-text:var(--bg-secondary, #f1f5f9)}.panel-header,.panel-footer{border-color:var(--color-primary, #334155)}.panel-footer{background:var(--bg-secondary, #0f172a)}.loading-overlay{background:rgba(15, 23, 42, 0.7)}}.aside-container.animation-slide-in-out .panel{opacity:1}.aside-container.animation-fade .panel:not(.open){opacity:0;visibility:hidden;--aside-dir-transform:translate(0, 0) !important}.aside-container.animation-fade .panel.open{opacity:1;visibility:visible}.aside-container.animation-scale .panel:not(.open){opacity:0;visibility:hidden;--aside-dir-transform:scale(0.95)}.aside-container.animation-scale .panel.open{opacity:1;visibility:visible;--aside-dir-transform:scale(1)}.variant-none .panel,.theme-none .panel{background:transparent !important;box-shadow:none !important;border:none !important}`;

const AsidePanel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.asideClosed = createEvent(this, "asideClosed");
        this.asideOpened = createEvent(this, "asideOpened");
        this.asideResized = createEvent(this, "asideResized");
        this.asideActionClick = createEvent(this, "asideActionClick");
        this.asideStateChange = createEvent(this, "asideStateChange");
    }
    /**
     * Whether the aside panel is open
     */
    open = false;
    /**
     * Direction from which the panel slides in: 'left', 'right', 'top', 'bottom'
     */
    direction = 'right';
    /**
     * Width of the panel (for left/right) or height (for top/bottom)
     */
    size = '320px';
    /**
     * Enable 'Mini' mode (collapsed into a thin icon-bar)
     */
    mini = false;
    /**
     * Width/Height of the panel in its 'Mini' state
     */
    miniSize = '64px';
    /**
     * Prevent closing via overlay or escape (Locked state)
     */
    pinned = false;
    /**
     * Legacy variant support (maps to theme if set)
     */
    variant = 'default';
    /**
     * Visual theme: 'default' | 'glass' | 'radiant' | 'zenith'
     */
    theme = 'default';
    /**
     * Enable auditory haptics (Industrial click sounds)
     */
    haptic = false;
    /**
     * Enable 3D Parallax tilt effect on content
     */
    enableParallax = false;
    /**
     * Voice-Activated navigation (Hands-Free)
     */
    enableVoiceControl = false;
    /**
     * Sync group ID for broadcasting state across instances
     */
    syncGroup = '';
    /**
     * Scope to a specific container ID (teleports if necessary)
     */
    /**
     * Whether the panel is in 'Maximized' (Full Screen) mode
     */
    maximized = false;
    /**
     * Whether the panel should automatically enter 'Mini' mode on sm screens
     */
    autoMini = true;
    /**
     * Global shortcut key to toggle the panel (requires Ctrl key, e.g. 'B')
     */
    toggleShortcut = '';
    /**
     * Whether to show the 3-dot action menu button in the toolbar
     */
    showActions = false;
    /**
     * Array of items for the action menu (3-dot)
     */
    actionItems = [];
    /**
     * Stagger offset for multi-instance layouts (pixels)
     */
    stackOffset = 0;
    scope = 'body';
    /**
     * Whether to show the close button
     */
    closeable = true;
    /**
     * Whether clicking the overlay closes the panel
     */
    closeOnOverlayClick = true;
    /**
     * Whether to show the background overlay
     */
    showOverlay = false;
    /**
     * Whether the panel can be closed by pressing Escape key
     */
    closeOnEscape = true;
    /**
     * Whether the panel is resizable
     */
    resizable = false;
    /**
     * Color of the resize handle (e.g. '#3bf673')
     */
    resizeHandleColor = '';
    /**
     * Whether to show a visual indicator on the resize handle
     */
    showResizeIndicator = true;
    /**
     * Minimum size (width or height) in pixels
     */
    minSize = 200;
    /**
     * Whether to enable Right-to-Left (RTL) mode
     */
    rtl = false;
    /**
     * Maximum size (width or height) in pixels
     */
    maxSize = 1200;
    /**
     * Backdrop blur amount (e.g., '8px')
     */
    backdropBlur = '0';
    /**
     * Animation transition duration (e.g. '0.3s' or '500ms')
     */
    transitionDuration = '0.3s';
    /**
     * Animation style for opening and closing
     * @default 'slide-in-out'
     */
    animationType = 'slide-in-out';
    /**
     * Whether the panel is in a loading state
     */
    loading = false;
    /**
     * Diagnostic progress bar percentage (0-100, -1 to hide)
     */
    progress = -1;
    /**
     * Status badge label for the header
     */
    badge = "";
    /**
     * Key to persist the panel's open state and size in localStorage
     */
    persistKey;
    /**
     * Offset from the screen edge for 'floating' variant (e.g., '20px')
     */
    floatingOffset = '20px';
    /**
     * Secondary dimension size for 'floating' variant (height if left/right, width if top/bottom)
     * If 'auto', it stretches to the full viewport minus offsets.
     */
    secondarySize = 'auto';
    /**
     * Alignment along the secondary axis for 'floating' variant
     */
    floatingAlign = 'stretch';
    /**
     * Background color of the panel
     */
    backgroundColor = 'white';
    /**
     * Event emitted when the panel is closed
     */
    asideClosed;
    /**
     * Event emitted when the panel is opened
     */
    asideOpened;
    /**
     * Event emitted when the panel is resized
     */
    asideResized;
    /**
     * Event emitted when the 3-dot action menu is clicked
     */
    asideActionClick;
    /**
     * Event emitted when the state (open/mini) changes
     */
    asideStateChange;
    currentSize;
    isResizing = false;
    isListening = false;
    mouseRotation = { x: 0, y: 0 };
    get hostElement() { return getElement(this); }
    startPos = 0;
    startSize = 0;
    firstFocusableEl;
    lastFocusableEl;
    watchOpenHandler(newValue) {
        if (newValue) {
            this.playHaptic('open');
            this.asideOpened.emit();
            this.handleFocusTrap();
            this.saveState();
            this.broadcastState();
            if (this.scope === 'body')
                document.body.classList.add('ui-aside-open');
        }
        else {
            this.playHaptic('close');
            this.asideClosed.emit();
            this.saveState();
            this.broadcastState();
            if (this.scope === 'body')
                document.body.classList.remove('ui-aside-open');
        }
        this.asideStateChange.emit({ open: this.open, mini: this.mini });
    }
    watchMiniHandler() {
        this.playHaptic('toggle');
        this.asideStateChange.emit({ open: this.open, mini: this.mini });
        this.saveState();
    }
    handleWindowResize() {
        if (this.autoMini && window.innerWidth < 1024) {
            this.mini = true;
        }
    }
    componentWillLoad() {
        this.loadState();
        if (!this.currentSize) {
            this.currentSize = parseInt(this.size);
        }
        if (this.autoMini && window.innerWidth < 1024) {
            this.mini = true;
        }
    }
    handleRemoteSync(ev) {
        if (!this.syncGroup || ev.detail.group !== this.syncGroup || ev.detail.sourceId === this.hostElement.id)
            return;
        this.open = ev.detail.open;
        this.mini = ev.detail.mini;
    }
    broadcastState() {
        if (!this.syncGroup)
            return;
        window.dispatchEvent(new CustomEvent('asideRemoteState', {
            detail: {
                group: this.syncGroup,
                sourceId: this.hostElement.id,
                open: this.open,
                mini: this.mini
            }
        }));
    }
    playHaptic(type) {
        if (!this.haptic)
            return;
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            const now = audioCtx.currentTime;
            if (type === 'open') {
                oscillator.frequency.setValueAtTime(440, now);
                oscillator.frequency.exponentialRampToValueAtTime(880, now + 0.1);
            }
            else if (type === 'close') {
                oscillator.frequency.setValueAtTime(880, now);
                oscillator.frequency.exponentialRampToValueAtTime(220, now + 0.15);
            }
            else {
                oscillator.frequency.setValueAtTime(660, now);
                oscillator.frequency.exponentialRampToValueAtTime(440, now + 0.1);
            }
            gainNode.gain.setValueAtTime(0.1, now);
            gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            oscillator.start();
            oscillator.stop(now + 0.15);
        }
        catch (e) { /* Audio context fail */ }
    }
    disconnectedCallback() {
        if (this.scope === 'body')
            document.body.classList.remove('ui-aside-open');
    }
    watchSizeHandler(newValue) {
        if (newValue) {
            this.currentSize = parseInt(newValue);
        }
    }
    componentDidLoad() {
        if (this.open) {
            this.handleFocusTrap();
        }
    }
    loadState() {
        if (this.persistKey) {
            const saved = localStorage.getItem(`aside-panel-${this.persistKey}`);
            if (saved) {
                try {
                    const { open, mini, size } = JSON.parse(saved);
                    this.open = open;
                    this.mini = mini;
                    this.currentSize = size;
                }
                catch (e) {
                    console.warn('Failed to load aside-panel state', e);
                }
            }
        }
    }
    saveState() {
        if (this.persistKey) {
            localStorage.setItem(`aside-panel-${this.persistKey}`, JSON.stringify({
                open: this.open,
                mini: this.mini,
                size: this.currentSize
            }));
        }
    }
    handleFocusTrap() {
        if (this.open && !this.mini) {
            setTimeout(() => {
                const focusableEls = this.hostElement.shadowRoot?.querySelectorAll('a[href], area[href], input:not([disabled]), select:not([disabled]), textarea:not([disabled]), button:not([disabled]), [tabindex="0"]');
                if (focusableEls && focusableEls.length > 0) {
                    this.firstFocusableEl = focusableEls[0];
                    this.lastFocusableEl = focusableEls[focusableEls.length - 1];
                    this.firstFocusableEl.focus();
                }
            }, 100);
        }
    }
    handleKeyDown(event) {
        // Global toggle shortcut (e.g. Ctrl + B)
        if (this.toggleShortcut && event.ctrlKey && event.key.toLowerCase() === this.toggleShortcut.toLowerCase()) {
            event.preventDefault();
            this.toggle();
            return;
        }
        if (!this.open)
            return;
        if (this.closeOnEscape && event.key === 'Escape' && !this.pinned) {
            this.handleClose();
        }
        // Elite Keyboard Resizing
        if (this.resizable && event.altKey) {
            const step = event.shiftKey ? 50 : 10;
            if (['ArrowLeft', 'ArrowRight', 'ArrowUp', 'ArrowDown'].includes(event.key)) {
                event.preventDefault();
                let delta = 0;
                if (event.key === 'ArrowLeft')
                    delta = (this.direction === 'left' ? -step : (this.direction === 'right' ? step : 0));
                if (event.key === 'ArrowRight')
                    delta = (this.direction === 'left' ? step : (this.direction === 'right' ? -step : 0));
                if (event.key === 'ArrowUp')
                    delta = (this.direction === 'top' ? -step : (this.direction === 'bottom' ? step : 0));
                if (event.key === 'ArrowDown')
                    delta = (this.direction === 'top' ? step : (this.direction === 'bottom' ? -step : 0));
                this.currentSize = Math.max(this.minSize, Math.min(this.maxSize, this.currentSize + delta));
                this.asideResized.emit({ size: this.currentSize });
                this.saveState();
                this.playHaptic('toggle');
            }
        }
        if (event.key === 'Tab') {
            const shadowRoot = this.hostElement.shadowRoot;
            const activeEl = shadowRoot ? shadowRoot.activeElement : document.activeElement;
            if (event.shiftKey) {
                if (activeEl === this.firstFocusableEl) {
                    this.lastFocusableEl.focus();
                    event.preventDefault();
                }
            }
            else {
                if (activeEl === this.lastFocusableEl) {
                    this.firstFocusableEl.focus();
                    event.preventDefault();
                }
            }
        }
    }
    /**
     * Toggle Maximized state
     */
    async toggleMaximize() {
        this.maximized = !this.maximized;
        this.playHaptic('toggle');
    }
    /**
     * Toggle the panel open/closed
     */
    async toggle() {
        this.open = !this.open;
    }
    /**
     * Toggle Mini state
     */
    async toggleMini() {
        this.mini = !this.mini;
    }
    /**
     * Open the panel
     */
    async show() {
        this.open = true;
    }
    /**
     * Close the panel
     */
    async hide() {
        if (this.pinned)
            return;
        this.open = false;
    }
    async initVoice() {
        if (!this.enableVoiceControl || !('webkitSpeechRecognition' in window))
            return;
        const recognition = new window.webkitSpeechRecognition();
        recognition.continuous = false;
        recognition.interimResults = false;
        recognition.lang = 'en-US';
        recognition.onstart = () => { this.isListening = true; };
        recognition.onend = () => { this.isListening = false; };
        recognition.onresult = (event) => {
            const command = event.results[0][0].transcript.toLowerCase();
            if (command.includes('side') || command.includes('panel')) {
                if (command.includes('open') || command.includes('show'))
                    this.show();
                if (command.includes('close') || command.includes('hide'))
                    this.hide();
                if (command.includes('mini') || command.includes('collapse'))
                    this.mini = true;
                if (command.includes('expand'))
                    this.mini = false;
            }
        };
        recognition.start();
    }
    handleResizeStart = (e) => {
        if (!this.resizable || this.mini)
            return;
        e.preventDefault();
        this.isResizing = true;
        if (this.direction === 'left' || this.direction === 'right') {
            this.startPos = e.clientX;
        }
        else {
            this.startPos = e.clientY;
        }
        this.startSize = this.currentSize;
        document.addEventListener('mousemove', this.handleResizeMove);
        document.addEventListener('mouseup', this.handleResizeEnd);
    };
    handleResizeMove = (e) => {
        if (!this.isResizing)
            return;
        let delta = 0;
        let maxViewportSize = 0;
        if (this.direction === 'left' || this.direction === 'right') {
            maxViewportSize = window.innerWidth * 0.9;
            if (this.direction === 'left') {
                delta = e.clientX - this.startPos;
            }
            else {
                delta = this.startPos - e.clientX;
            }
        }
        else {
            maxViewportSize = window.innerHeight * 0.9;
            if (this.direction === 'top') {
                delta = e.clientY - this.startPos;
            }
            else {
                delta = this.startPos - e.clientY;
            }
        }
        let newSize = this.startSize + delta;
        const currentMax = Math.min(this.maxSize, maxViewportSize);
        newSize = Math.max(this.minSize, Math.min(currentMax, newSize));
        this.currentSize = newSize;
    };
    handleResizeEnd = () => {
        this.isResizing = false;
        document.removeEventListener('mousemove', this.handleResizeMove);
        document.removeEventListener('mouseup', this.handleResizeEnd);
        this.asideResized.emit({ size: this.currentSize });
        this.saveState();
    };
    handleClose = () => {
        if (this.pinned)
            return;
        this.open = false;
    };
    handleOverlayClick = () => {
        if (this.closeOnOverlayClick && !this.pinned) {
            this.handleClose();
        }
    };
    handleParallax = (e) => {
        if (!this.enableParallax || !this.open || this.mini)
            return;
        const rect = this.hostElement.getBoundingClientRect();
        const x = (e.clientX - rect.left) / rect.width - 0.5;
        const y = (e.clientY - rect.top) / rect.height - 0.5;
        this.mouseRotation = { x: y * 5, y: -x * 5 };
    };
    resetParallax = () => {
        this.mouseRotation = { x: 0, y: 0 };
    };
    hostStyle() {
        const styles = {};
        const sizeValue = this.maximized ? '90%' : (this.mini ? this.miniSize : (this.currentSize ? `${this.currentSize}px` : this.size));
        const isFloating = this.variant === 'floating';
        const offset = isFloating ? this.floatingOffset : (this.stackOffset ? `${this.stackOffset}px` : '0');
        let centerTransform = 'none';
        if (this.direction === 'left' || this.direction === 'right') {
            styles.width = sizeValue;
            styles[this.direction] = offset;
            if (isFloating) {
                if (this.floatingAlign === 'stretch') {
                    styles.top = offset;
                    styles.bottom = offset;
                    styles.height = `calc(100vh - 2 * ${offset})`;
                }
                else {
                    styles.height = this.secondarySize === 'auto' ? '60%' : this.secondarySize;
                    if (this.floatingAlign === 'start') {
                        styles.top = offset;
                        styles.bottom = 'auto';
                    }
                    else if (this.floatingAlign === 'end') {
                        styles.bottom = offset;
                        styles.top = 'auto';
                    }
                    else {
                        // center
                        styles.top = '50%';
                        centerTransform = 'translateY(-50%)';
                    }
                }
            }
            else {
                styles.height = '100vh';
                styles.top = '0';
                styles.bottom = '0';
            }
        }
        else {
            styles.height = sizeValue;
            styles[this.direction] = offset;
            if (isFloating) {
                if (this.floatingAlign === 'stretch') {
                    styles.left = offset;
                    styles.right = offset;
                    styles.width = `calc(100vw - 2 * ${offset})`;
                }
                else {
                    styles.width = this.secondarySize === 'auto' ? '60%' : this.secondarySize;
                    if (this.floatingAlign === 'start') {
                        styles.left = offset;
                        styles.right = 'auto';
                    }
                    else if (this.floatingAlign === 'end') {
                        styles.right = offset;
                        styles.left = 'auto';
                    }
                    else {
                        // center
                        styles.left = '50%';
                        centerTransform = 'translateX(-50%)';
                    }
                }
            }
            else {
                styles.width = '100vw';
                styles.left = '0';
                styles.right = '0';
            }
        }
        if (this.enableParallax && !this.mini && !this.maximized) {
            centerTransform = centerTransform === 'none' ? '' : centerTransform;
            centerTransform += ` perspective(1000px) rotateX(${this.mouseRotation.x}deg) rotateY(${this.mouseRotation.y}deg)`;
        }
        styles['--aside-center-transform'] = centerTransform.trim();
        styles['--aside-transition-duration'] = this.transitionDuration;
        styles['--aside-bg'] = this.backgroundColor || 'white';
        styles.backgroundColor = 'var(--aside-bg, #ffffff)';
        return styles;
    }
    render() {
        const activeTheme = this.theme !== 'default' ? this.theme : this.variant;
        return (h(Host, { key: '6fe78ffb52aa0a9d3c2659ab49da7bbb8220cd73', class: {
                'aside-container': true,
                'open': this.open,
                'mini': this.mini,
                'maximized': this.maximized,
                [`theme-${activeTheme}`]: true,
                [`variant-${activeTheme}`]: true,
                [`dir-${this.direction}`]: true,
                [`animation-${this.animationType}`]: true,
                'is-pinned': this.pinned,
                'rtl': this.rtl
            }, style: this.hostStyle(), role: "complementary", "aria-expanded": this.open.toString(), "aria-hidden": (!this.open).toString() }, this.showOverlay && !this.mini && (h("div", { key: 'b377c132e1a18b11fe14fea92fb42edea15e7931', class: { 'overlay': true, 'visible': this.open }, style: { backdropFilter: this.backdropBlur !== '0' ? `blur(${this.backdropBlur})` : 'none' }, onClick: this.handleOverlayClick })), h("div", { key: '64557685915ff59acf459637b07eb27a2cdd7960', class: {
                'panel': true,
                [`panel-${this.direction}`]: true,
                'open': this.open,
                'mini': this.mini,
                'resizing': this.isResizing,
                'loading': this.loading,
                'parallax-active': this.enableParallax
            }, style: this.hostStyle(), onMouseMove: this.handleParallax, onMouseLeave: this.resetParallax }, this.loading && (h("div", { key: '0944112418e5cff5052444dfe972b9097c8a87cc', class: "loading-overlay" }, h("div", { key: 'd78691ea1bd174e74431b7f1e937f5c3a15a7480', class: "spinner" }))), this.resizable && !this.mini && (h("div", { key: 'b6c3327d7f2b2b390e7034f99f26baa9fb5a8e78', class: `resize-handle resize-handle-${this.direction}`, style: this.resizeHandleColor ? { backgroundColor: this.resizeHandleColor } : {}, onMouseDown: this.handleResizeStart }, this.showResizeIndicator && (h("div", { key: '7d0446ab14ce40d3de648647d10b825c4e17255b', class: "resize-indicator" }, h("span", { key: 'fd5a84994e2e84d3934404fe01d990b0741cf69d' }), h("span", { key: '3f5bb3beb076185b6b375485c2eda33a86ce1af4' }), h("span", { key: '1e2fc6fe5129ee60dc91816fb0aecb367a0f5d48' }))))), h("div", { key: 'd5f732ce0f5c0263a47821107c68fb42491423ac', class: "panel-header-toolbar" }, h("div", { key: 'f7c0483a59e5ca7b0e1a1b63f564f0662f92fbf4', class: "toolbar-left" }, this.mini ? (h("ui-button", { variant: "ghost", size: "sm", icon: "chevron-right", iconLibrary: "lucide", iconSize: "14px", ariaLabel: "Expand", onClick: () => this.toggleMini() })) : (h("div", { style: { display: 'flex', gap: '4px' } }, h("ui-button", { variant: "ghost", size: "sm", icon: "chevron-left", iconLibrary: "lucide", iconSize: "14px", ariaLabel: "Collapse to Mini", onClick: () => this.toggleMini() }), !this.mini && (h("ui-button", { variant: "ghost", size: "sm", icon: this.maximized ? 'minimize' : 'maximize', iconLibrary: "lucide", iconSize: "14px", ariaLabel: this.maximized ? 'Restore' : 'Maximize', onClick: () => this.toggleMaximize() })))), this.enableVoiceControl && (h("ui-button", { key: '779b43eae11da432d5c6f093d8b18bbbb6555d90', variant: "ghost", size: "sm", icon: "mic", iconLibrary: "lucide", iconSize: "14px", ariaLabel: "Voice Interaction", class: this.isListening ? 'active' : '', onClick: () => this.initVoice() }))), h("div", { key: 'abb834e57587a11fc4cee2868cfdff72989aafa6', class: "toolbar-right" }, this.showActions && (h("ui-button", { key: '727b404a4d895d83802bf906f77cbf78b79ed4df', id: "aside-actions-trigger", variant: "ghost", size: "sm", icon: "ellipsis-vertical", iconLibrary: "lucide", iconSize: "16px", ariaLabel: "More Actions", onClick: () => this.asideActionClick.emit() })), this.showActions && (h("ui-context-menu", { key: 'b79ede6b5aafe1ab1bfe2dd48b1392aa261c6149', items: this.actionItems, target: "#aside-actions-trigger", openOn: "click", placement: "bottom", onItemSelect: (ev) => this.asideActionClick.emit(ev.detail) })), this.pinned && h("ui-icon", { key: '2c959558d6431ce998868df3f11d0a46e708a8c6', name: "pin", library: "lucide", size: "14px", class: "pin-status" }), this.closeable && !this.pinned && (h("ui-button", { key: '3e09ac4d9d907ffa6479774ae1fe8af67dd48173', variant: "ghost", size: "sm", icon: "x", iconLibrary: "lucide", iconSize: "16px", ariaLabel: "Close panel", onClick: this.handleClose })))), h("div", { key: '88b297a05ea5c189d4301b5fa6ae6da924234f9d', class: "panel-header" }, h("div", { key: '769c42bf0fafef4cd5dd67e19a8c834edd47c212', class: "header-main" }, h("slot", { key: 'b2332bf17c6ad844421beba7842d1195c9b23dd2', name: "header" }), this.badge && h("span", { key: '51ec6d287c748533e817a9d1ac6d5f08ef2a723e', class: "header-badge" }, this.badge)), this.progress > -1 && (h("div", { key: '20cef73dab1865d28bc0c116b55d1fdfed6fb315', class: "header-progress" }, h("div", { key: '7f5ae92599c2625da1e29fb1b1e1d890a7de61d3', class: "progress-bar", style: { width: `${Math.min(100, Math.max(0, this.progress))}%` } })))), h("div", { key: 'd38f06820140b669ab0db1160adbd39718cf1d85', class: "panel-content" }, h("slot", { key: 'fd4171defde8576a75373d1f68f47b816fb7f638', name: "content" }), h("slot", { key: 'ed33565d953da868b3039684239aae6029582e2f' })), !this.mini && (h("div", { key: 'c58ffbd97eceba87ff9f85d1782cb357b5e87229', class: "panel-footer" }, h("slot", { key: '5ddc80b5ca138471895d9f86733c524094f4da8d', name: "footer" }))))));
    }
    static get watchers() { return {
        "open": [{
                "watchOpenHandler": 0
            }],
        "mini": [{
                "watchMiniHandler": 0
            }],
        "size": [{
                "watchSizeHandler": 0
            }]
    }; }
};
AsidePanel.style = asidePanelCss();

export { AsidePanel as ui_aside_panel };
