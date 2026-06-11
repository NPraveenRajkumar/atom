import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const dividerCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%;box-sizing:border-box}:host([orientation=vertical]){display:inline-flex;width:auto;height:100%;align-self:stretch;vertical-align:middle}.divider{display:flex;align-items:center;width:100%;height:100%;margin:16px 0;color:var(--divider-text-color, var(--text-muted, #6b7280));font-size:var(--divider-text-size, 14px);white-space:nowrap;font-family:inherit;box-sizing:border-box}.divider-vertical{flex-direction:column;height:100%;min-height:1em;width:auto;margin:0 16px}.divider-line{flex:1;height:1px;background-color:var(--divider-color, #e5e7eb);position:relative;}.divider-gradient .divider-line{background:linear-gradient(to right, transparent, var(--divider-color, #e5e7eb), transparent);height:2px}.divider-vertical .divider-line{width:1px;height:auto;flex:1}.divider-main-content{padding:0 var(--divider-gap, 16px);text-transform:var(--divider-text-transform, capitalize);font-weight:500;display:inline-flex;align-items:center;gap:8px;color:var(--divider-text-color, var(--text-muted, #6b7280));white-space:nowrap;background-color:var(--bg-primary, #ffffff);position:relative;z-index:1}.divider-main-content:empty{display:none;padding:0}.divider-icon{display:inline-flex;align-items:center;justify-content:center}.divider-vertical .divider-main-content{padding:16px 0;writing-mode:vertical-rl;letter-spacing:0.1em}.divider-upright .divider-main-content{text-orientation:upright;letter-spacing:0}.divider-text-left .divider-line:first-child,.divider-text-start .divider-line:first-child{flex:0 0 20px}.divider-text-left .divider-line:last-child,.divider-text-start .divider-line:last-child{flex:1}.divider-text-center .divider-line:first-child,.divider-text-center .divider-line:last-child{flex:1}.divider-text-right .divider-line:first-child,.divider-text-end .divider-line:first-child{flex:1}.divider-text-right .divider-line:last-child,.divider-text-end .divider-line:last-child{flex:0 0 20px}.divider-vertical.divider-text-left .divider-line:first-child{flex:0 0 20px}.divider-vertical.divider-text-left .divider-line:last-child{flex:1}.divider-vertical.divider-text-center .divider-line:first-child,.divider-vertical.divider-text-center .divider-line:last-child{flex:1}.divider-vertical.divider-text-right .divider-line:first-child{flex:1}.divider-vertical.divider-text-right .divider-line:last-child{flex:0 0 20px}.divider-solid .divider-line{background-color:var(--bg-primary, #e5e7eb)}.divider-dashed .divider-line{border-bottom:2px dashed var(--border-strong, #d1d5db);background:none;height:0}.divider-dotted .divider-line{border-bottom:2px dotted var(--border-strong, #d1d5db);background:none;height:0}.divider-double-solid .divider-line{border-top:1px solid var(--border-default, #e5e7eb);border-bottom:1px solid var(--border-default, #e5e7eb);height:3px;background:none}.divider-double-dashed .divider-line{border-top:2px dashed var(--border-strong, #d1d5db);border-bottom:2px dashed var(--border-strong, #d1d5db);height:3px;background:none}.divider-double-dotted .divider-line{border-top:2px dotted var(--border-strong, #d1d5db);border-bottom:2px dotted var(--border-strong, #d1d5db);height:3px;background:none}.divider-sm .divider-line{height:1px}.divider-sm.divider-vertical .divider-line{width:1px}.divider-md .divider-line{height:2px}.divider-md.divider-vertical .divider-line{width:2px}.divider-lg .divider-line{height:3px}.divider-lg.divider-vertical .divider-line{width:3px}.divider-sm.divider-dashed .divider-line{border-bottom-width:1px}.divider-sm.divider-dotted .divider-line{border-bottom-width:1px}.divider-md.divider-dashed .divider-line{border-bottom-width:2px}.divider-md.divider-dotted .divider-line{border-bottom-width:2px}.divider-lg.divider-dashed .divider-line{border-bottom-width:3px}.divider-lg.divider-dotted .divider-line{border-bottom-width:3px}.divider-sm.divider-double-solid .divider-line,.divider-sm.divider-double-dashed .divider-line,.divider-sm.divider-double-dotted .divider-line{border-top-width:1px;border-bottom-width:1px;height:2px}.divider-md.divider-double-solid .divider-line,.divider-md.divider-double-dashed .divider-line,.divider-md.divider-double-dotted .divider-line{border-top-width:2px;border-bottom-width:2px;height:4px}.divider-lg.divider-double-solid .divider-line,.divider-lg.divider-double-dashed .divider-line,.divider-lg.divider-double-dotted .divider-line{border-top-width:3px;border-bottom-width:3px;height:6px}.divider-custom .divider-line{background-color:var(--divider-color, #e5e7eb)}.divider-custom.divider-dashed .divider-line,.divider-custom.divider-dotted .divider-line,.divider-custom.divider-double-solid .divider-line,.divider-custom.divider-double-dashed .divider-line,.divider-custom.divider-double-dotted .divider-line{border-color:var(--divider-color, var(--border-default, #e5e7eb))}.divider-custom .divider-text{color:var(--divider-text-color, var(--text-muted, #6b7280))}.divider-animation-fade{animation:dividerFadeIn 0.5s ease}.divider-animation-slide{animation:dividerSlideIn 0.5s ease}.divider-animation-expand{animation:dividerExpand 0.5s ease}@keyframes dividerFadeIn{from{opacity:0}to{opacity:1}}@keyframes dividerSlideIn{from{transform:translateX(-20px);opacity:0}to{transform:translateX(0);opacity:1}}@keyframes dividerExpand{from{transform:scaleX(0);opacity:0}to{transform:scaleX(1);opacity:1}}.divider-clickable{cursor:pointer;transition:all 0.2s ease}.divider-clickable:hover{transform:scale(1.02)}.divider-clickable:focus-visible{outline:2px solid var(--color-primary, #10b981);outline-offset:2px;border-radius:4px}.divider-shadow .divider-line{box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.divider-glow .divider-line{box-shadow:0 0 10px currentColor;filter:brightness(1.2)}.divider-pattern-dots .divider-line{background-image:radial-gradient(circle, currentColor 1px, transparent 1px);background-size:8px 8px;background-color:transparent;height:8px}.divider-aura .divider-line{position:relative;overflow:hidden;box-shadow:0 0 15px currentColor;filter:brightness(1.2)}.divider-aura .divider-line::after{content:"";position:absolute;top:0;left:-100%;width:60%;height:100%;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.6), transparent);animation:auraFlow 3s infinite ease-in-out}@keyframes auraFlow{0%{left:-100%}50%{left:150%}100%{left:150%}}.divider-glass .divider-main-content{background:rgba(255, 255, 255, 0.05);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid rgba(255, 255, 255, 0.2);padding:8px 20px;border-radius:30px;box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.15)}.divider-kinetic .divider-line{background:linear-gradient(-45deg, var(--color-danger, #ee7752), var(--color-danger, #e73c7e), var(--color-primary, #23a6d5), var(--color-success, #23d5ab));background-size:400% 400%;animation:kineticGradient 10s ease infinite;height:2px}@keyframes kineticGradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.divider-icon-anim-spin .divider-icon{animation:iconSpin 4s linear infinite}.divider-icon-anim-pulse .divider-icon{animation:iconPulse 2s ease-in-out infinite}.divider-icon-anim-flip .divider-icon{animation:iconFlip 3s ease-in-out infinite}@keyframes iconSpin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes iconPulse{0%,100%{transform:scale(1)}50%{transform:scale(1.3)}}@keyframes iconFlip{0%{transform:rotateY(0deg)}50%{transform:rotateY(180deg)}100%{transform:rotateY(360deg)}}.divider-pattern-stripes .divider-line{background-image:repeating-linear-gradient(45deg, currentColor, currentColor 2px, transparent 2px, transparent 6px);background-color:transparent;height:8px}.divider-pattern-wavy .divider-line{background-image:url("data:image/svg+xml,%3Csvg width='100' height='10' xmlns='http://www.w3.org/2000/svg'%3E%3Cpath d='M0 5 Q 25 0, 50 5 T 100 5' stroke='%23e5e7eb' fill='none' stroke-width='2'/%3E%3C/svg%3E");background-repeat:repeat-x;background-size:100px 10px;background-color:transparent;height:10px}.divider-pattern-zigzag .divider-line{background-image:linear-gradient(135deg, currentColor 25%, transparent 25%), linear-gradient(225deg, currentColor 25%, transparent 25%);background-size:10px 10px;background-position:0 0, 5px 0;background-repeat:repeat-x;background-color:transparent;height:10px}.divider-inset-start{margin-left:40px}.divider-inset-end{margin-right:40px}.divider-inset-both{margin-left:40px;margin-right:40px}.divider-vertical.divider-inset-start{margin-left:0;margin-top:40px}.divider-vertical.divider-inset-end{margin-right:0;margin-bottom:40px}.divider-vertical.divider-inset-both{margin-left:0;margin-right:0;margin-top:40px;margin-bottom:40px}.divider-spacing-compact{margin:8px 0}.divider-spacing-comfortable{margin:24px 0}.divider-spacing-spacious{margin:40px 0}.divider-vertical.divider-spacing-compact{margin:0 8px}.divider-vertical.divider-spacing-comfortable{margin:0 24px}.divider-vertical.divider-spacing-spacious{margin:0 40px}.divider-badge{display:inline-flex;align-items:center;justify-content:center;min-width:20px;height:20px;padding:0 6px;margin-left:8px;background-color:var(--color-primary, #10b981);color:var(--text-standard, #ffffff);border-radius:10px;font-size:11px;font-weight:600;line-height:1}.divider-line{border-radius:var(--divider-border-radius, 0)}.divider-content-wrapper{display:flex;align-items:center;gap:12px}.divider-main-content{display:flex;align-items:center;gap:8px;padding:0 12px;background-color:var(--bg-primary, #ffffff);position:relative;z-index:1}.divider-text-area{display:flex;align-items:center;gap:8px}.divider-label{text-transform:var(--divider-text-transform, capitalize);font-weight:700;letter-spacing:-0.01em}.divider-label-group{display:flex;flex-direction:column;gap:2px}.divider-subtitle{font-size:0.7rem;font-weight:500;opacity:0.6;text-transform:none;letter-spacing:0.02em}.divider-with-subtitle{padding:12px 0}.divider-image{width:32px;height:32px;border-radius:50%;object-fit:cover;border:2px solid rgba(255, 255, 255, 0.8);box-shadow:0 4px 10px rgba(0, 0, 0, 0.1)}.divider-shimmer{width:80px;height:16px;background:linear-gradient(90deg, var(--bg-primary, #f3f4f6) 25%, var(--bg-primary, #e5e7eb) 50%, var(--bg-primary, #f3f4f6) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:4px}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}.divider-plain .divider-line{display:none}.divider-plain .divider-main-content{padding:0}@media (prefers-reduced-motion: reduce){.divider-animation-fade,.divider-animation-slide,.divider-animation-expand,.divider-clickable,.divider-shimmer{animation:none;transition:none}}.color-primary .divider-line{background-color:var(--color-primary, #10b981);border-color:var(--color-primary, #10b981)}.color-secondary .divider-line{background-color:var(--text-muted, #6b7280);border-color:var(--color-primary, #6b7280)}.color-success .divider-line{background-color:var(--color-success, #10b981);border-color:var(--color-success, #10b981)}.color-danger .divider-line{background-color:var(--color-danger, #ef4444);border-color:var(--color-danger, #ef4444)}.color-warning .divider-line{background-color:var(--color-warning, #f59e0b);border-color:var(--color-warning, #f59e0b)}.divider-linecap-round .divider-line{border-radius:9999px}.divider-linecap-square .divider-line{border-radius:0}.divider-lines-none .divider-line{display:none}.divider-shape{position:relative;width:100%;overflow:hidden;line-height:0;margin:16px 0}.divider-shape svg{display:block;width:calc(100% + 1.3px);height:50px;transform:rotate(180deg);}.divider-shape svg path{fill:var(--divider-color, #e5e7eb);stroke:none}.divider-shape-curve svg{height:50px}.divider-shape-tilt svg{height:40px}.divider-shape-triangle svg{height:40px}.divider-shape-wave svg{height:60px}.divider-shape-zigzag svg{height:30px}.divider-shape-arrow svg{height:30px}.color-primary .divider-shape svg path{fill:var(--color-primary, #10b981)}.color-secondary .divider-shape svg path{fill:var(--text-muted, #6b7280)}.color-success .divider-shape svg path{fill:var(--color-success, #10b981)}.color-danger .divider-shape svg path{fill:var(--color-danger, #ef4444)}.color-warning .divider-shape svg path{fill:var(--color-warning, #f59e0b)}.color-info .divider-shape svg path{fill:var(--color-info, #06b6d4)}.divider-step-node{position:absolute;width:22px;height:22px;background:var(--bg-primary, #ffffff);border:2px solid var(--border-subtle, #e2e8f0);border-radius:50%;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:var(--color-primary, #94a3b8);transform:translate(-50%, -50%);top:50%;z-index:2;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.divider-vertical .divider-step-node{left:50%;top:auto}.divider-step-node.is-completed{background:var(--color-success, #10b981);border-color:var(--color-success, #10b981);color:var(--text-standard, #ffffff);transform:translate(-50%, -50%) scale(1.1)}.divider-step-node.is-active{border-color:var(--color-primary, #8b5cf6);color:var(--color-primary, #8b5cf6);background:var(--bg-primary, #ffffff);box-shadow:0 0 0 4px rgba(139, 92, 246, 0.15);transform:translate(-50%, -50%) scale(1.2)}.divider-heatmap .divider-line{background:linear-gradient(90deg, var(--color-success, #10b981) 0%, var(--color-warning, #f59e0b) 50%, var(--color-danger, #ef4444) 100%) no-repeat left, var(--border-default, #e5e7eb);background-size:var(--divider-percent, 100%) 100%, 100% 100%;height:2px !important}.divider-ripple{position:relative;overflow:hidden;cursor:pointer}.ripple-container{position:absolute;top:0;left:0;width:100%;height:100%;pointer-events:none}.ripple-container span{position:absolute;transform:translate(-50%, -50%);background-color:rgba(255, 255, 255, 0.4);border-radius:50%;animation:rippleAnim 0.8s ease-out forwards;width:20px;height:20px}@keyframes rippleAnim{0%{transform:translate(-50%, -50%) scale(0);opacity:1}100%{transform:translate(-50%, -50%) scale(20);opacity:0}}.divider-parallax{filter:drop-shadow(0 12px 15px rgba(0, 0, 0, 0.2));transition:all 0.4s ease}.divider-parallax:hover{transform:translateY(-4px);filter:drop-shadow(0 20px 25px rgba(0, 0, 0, 0.25))}.divider-reveal.is-revealed .divider-line{transform:scaleX(1) !important;opacity:1 !important}.divider-reveal .divider-line{transform:scaleX(0);opacity:0;transition:transform 1.2s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s ease;transform-origin:center}.divider-draggable{cursor:ew-resize !important;user-select:none}.divider-draggable .divider-line{position:relative;overflow:hidden}.divider-draggable.is-dragging{cursor:grabbing !important}.divider-organic:hover .divider-line{animation:organicWobble 2s infinite alternate ease-in-out}@keyframes organicWobble{0%{transform:scaleY(1) skewX(0deg)}33%{transform:scaleY(1.4) skewX(2deg)}66%{transform:scaleY(0.8) skewX(-2deg)}100%{transform:scaleY(1.2) skewX(1deg)}}.divider-stream .divider-line{position:relative;overflow:hidden}.divider-stream .divider-line::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);animation:streamFlicker 0.15s infinite}@keyframes streamFlicker{0%{opacity:0.1}50%{opacity:0.6}100%{opacity:0.1}}.divider-holographic:hover .divider-line{filter:drop-shadow(2px 0 0 rgba(255, 0, 0, 0.5)) drop-shadow(-2px 0 0 rgba(0, 255, 255, 0.5));transition:filter 0.2s ease}.divider-teleport{cursor:pointer}`;

const Divider = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dividerClick = createEvent(this, "dividerClick");
        this.dividerChange = createEvent(this, "dividerChange");
        this.dividerHaptic = createEvent(this, "dividerHaptic");
    }
    get el() { return getElement(this); }
    /**
     * Text to display on the divider
     */
    text = '';
    /**
     * Icon to display on the divider (emoji or character)
     */
    icon = '';
    /**
     * Subtitle text to display below the main text
     */
    subtitle = '';
    /**
     * Dynamic flowing glow effect (Aura)
     */
    aura = false;
    /**
     * Glassmorphism effect (backdrop-blur)
     */
    glass = false;
    /**
     * Kinetic animated gradient flow
     */
    kinetic = false;
    /**
     * Animation style for the icon/icon area
     */
    iconAnimation = 'none';
    /**
     * Use upright characters in vertical orientation
     */
    upright = false;
    /**
     * Number of steps for timeline/stepper mode
     */
    steps = 0;
    /**
     * Current active step in stepper mode (1-indexed)
     */
    currentStep = 0;
    /**
     * Heatmap status gradient based on percentage
     */
    heatmap = false;
    /**
     * Percentage for heatmap gradient (0-100)
     */
    percent = 0;
    /**
     * Tactile ripple effect on click
     */
    ripple = false;
    /**
     * Parallax shadow projection for depth
     */
    parallax = false;
    /**
     * Cinematic reveal animation on scroll into view
     */
    reveal = false;
    /**
     * Turn the divider into a functional range slider/scrubber
     */
    dragEnabled = false;
    /**
     * Organic wobbling SVG morph on hover
     */
    organic = false;
    /**
     * Chromatic aberration (glitch) effect on hover
     */
    holographic = false;
    /**
     * Real-time data streaming flicker on the line track
     */
    stream = false;
    /**
     * Target element ID to scroll to when clicked
     */
    teleportTo = '';
    /**
     * Emit haptic audio events on interaction
     */
    enableHaptics = false;
    /**
     * Orientation of the divider: 'horizontal' or 'vertical'
     */
    orientation = 'horizontal';
    /**
     * Visual variant of the divider line
     */
    variant = 'solid';
    /**
     * Size/thickness of the divider line
     */
    size = 'md';
    /**
    * Text alignment: 'start', 'center', or 'end'
    */
    textAlign = 'center';
    /**
     * Theme color or custom CSS color
     */
    color = '';
    /**
     * Custom color for the text (CSS color value)
     */
    textColor = '';
    /**
     * Text transformation
     */
    textTransform = 'capitalize';
    /**
     * Vertical alignment: 'top', 'center', or 'bottom' (only for vertical orientation)
     */
    verticalAlign = 'center';
    /**
     * Spacing around the divider (margin)
     */
    gap = '';
    /**
     * If true, renders without the separator lines
     */
    plain = false;
    /**
     * Image URL to display as an avatar/icon
     */
    image = '';
    /**
     * Loading state (shows a shimmer effect)
     */
    loading = false;
    /**
     * Precise thickness (e.g., '1px', '4px') - overrides size if set
     */
    thickness = '';
    /**
     * Automatic orientation switch based on screen width
     */
    responsive = 'none';
    /**
     * Animation type
     */
    animation = 'none';
    /**
     * Make divider clickable
     */
    clickable = false;
    /**
     * Shadow effect
     */
    shadow = false;
    /**
     * Glow effect
     */
    glow = false;
    /**
     * Opacity (0-1)
     */
    opacity = 1;
    /**
     * Pattern style
     */
    pattern = 'none';
    /**
     * Inset style
     */
    inset = 'none';
    /**
     * Spacing preset
     */
    spacing = 'none';
    /**
     * Badge/counter text
     */
    badge = '';
    /**
     * Max width for divider
     */
    maxWidth = '';
    /**
     * Border radius for lines
     */
    borderRadius = '';
    /**
     * Height of the divider
     */
    height = '';
    /**
     * Control which lines are rendered: 'all', 'start', 'end', or 'none'
     */
    lines = 'all';
    /**
     * Style of the line ends: 'butt', 'round', or 'square'
     */
    linecap = 'butt';
    /**
     * Shape divider type
     */
    shape = 'none';
    /**
     * Color for the shape divider
     */
    shapeColor = '';
    isRevealed;
    isDragging = false;
    /**
     * Fired when divider is clicked
     */
    dividerClick;
    /**
     * Fired when draggable divider changes
     */
    dividerChange;
    /**
     * Fired for audio/haptic cues
     */
    dividerHaptic;
    observer;
    componentWillLoad() {
        // If reveal is false, show immediately. 
        // If reveal is true, keep hidden until intersection in componentDidLoad
        this.isRevealed = !this.reveal;
    }
    componentDidLoad() {
        if (this.reveal) {
            this.observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        this.isRevealed = true;
                        if (this.enableHaptics)
                            this.dividerHaptic.emit({ type: 'reveal' });
                        this.observer.disconnect();
                    }
                });
            }, { threshold: 0.1 });
            this.observer.observe(this.el);
        }
    }
    disconnectedCallback() {
        if (this.observer)
            this.observer.disconnect();
        this.handleMouseUp();
    }
    async triggerReveal() {
        this.isRevealed = true;
    }
    handleMouseDown = (e) => {
        if (this.ripple)
            this.handleRipple(e);
        if (!this.dragEnabled)
            return;
        this.isDragging = true;
        this.updateValueOnMove(e);
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    };
    handleTouchStart = (e) => {
        if (this.ripple)
            this.handleRipple(e);
        if (!this.dragEnabled)
            return;
        this.isDragging = true;
        this.updateValueOnMove(e);
        document.addEventListener('touchmove', this.handleTouchMove, { passive: false });
        document.addEventListener('touchend', this.handleMouseUp);
    };
    handleMouseMove = (e) => {
        if (this.isDragging) {
            this.updateValueOnMove(e);
        }
    };
    handleTouchMove = (e) => {
        if (this.isDragging) {
            e.preventDefault();
            this.updateValueOnMove(e);
        }
    };
    handleMouseUp = () => {
        if (this.isDragging) {
            this.isDragging = false;
            document.removeEventListener('mousemove', this.handleMouseMove);
            document.removeEventListener('touchmove', this.handleTouchMove);
            document.removeEventListener('mouseup', this.handleMouseUp);
            document.removeEventListener('touchend', this.handleMouseUp);
        }
    };
    handleKeyDown = (e) => {
        if (!this.dragEnabled)
            return;
        let stepChange = 0;
        if (e.key === 'ArrowRight' || e.key === 'ArrowUp')
            stepChange = 5;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowDown')
            stepChange = -5;
        if (stepChange !== 0) {
            e.preventDefault();
            const newPercent = Math.max(0, Math.min(100, (this.percent || 0) + stepChange));
            const stepValue = this.steps > 0 ? Math.round((newPercent / 100) * (this.steps - 1)) + 1 : 0;
            this.dividerChange.emit({ percent: newPercent, step: stepValue });
        }
    };
    updateValueOnMove(e) {
        const rect = this.el.getBoundingClientRect();
        const isHorizontal = this.orientation === 'horizontal';
        const clientX = 'touches' in e ? e.touches[0].clientX : e.clientX;
        const clientY = 'touches' in e ? e.touches[0].clientY : e.clientY;
        let newValue = 0;
        if (isHorizontal) {
            newValue = ((clientX - rect.left) / rect.width) * 100;
        }
        else {
            newValue = ((clientY - rect.top) / rect.height) * 100;
        }
        newValue = Math.max(0, Math.min(100, newValue));
        const step = this.steps > 0 ? Math.round((newValue / 100) * (this.steps - 1)) + 1 : 0;
        this.dividerChange.emit({ percent: Math.round(newValue), step });
        if (this.enableHaptics && this.steps > 0 && step !== this.currentStep) {
            this.dividerHaptic.emit({ type: 'step' });
        }
    }
    handleClick = (ev) => {
        if (this.enableHaptics)
            this.dividerHaptic.emit({ type: 'click' });
        if (this.teleportTo) {
            const target = document.querySelector(this.teleportTo);
            if (target) {
                target.scrollIntoView({ behavior: 'smooth', block: 'start' });
            }
        }
        if (this.clickable || this.ripple || this.dragEnabled) {
            this.dividerClick.emit(ev);
        }
    };
    handleRipple = (e) => {
        const rippleContainer = this.el.shadowRoot?.querySelector('.ripple-container');
        if (!rippleContainer)
            return;
        const rect = this.el.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const span = document.createElement('span');
        span.style.left = `${x}px`;
        span.style.top = `${y}px`;
        rippleContainer.appendChild(span);
        setTimeout(() => span.remove(), 800);
    };
    renderSteps(position) {
        const totalSteps = this.steps;
        const current = this.currentStep;
        const isHorizontal = this.orientation === 'horizontal';
        let startStep = 1;
        let endStep = totalSteps;
        if (this.textAlign === 'center') {
            const mid = Math.ceil(totalSteps / 2);
            if (position === 'start')
                endStep = mid;
            else
                startStep = mid + 1;
        }
        else if (this.textAlign === 'left') {
            if (position === 'start')
                return null;
        }
        else if (this.textAlign === 'right') {
            if (position === 'end')
                return null;
        }
        const stepsArray = [];
        for (let i = startStep; i <= endStep; i++) {
            stepsArray.push(i);
        }
        return stepsArray.map((step) => {
            const isCompleted = step < current;
            const isActive = step === current;
            const stepStyle = isHorizontal
                ? { left: `${((step - startStep) / (endStep - startStep + 1)) * 100 + (100 / (endStep - startStep + 1) / 2)}%` }
                : { top: `${((step - startStep) / (endStep - startStep + 1)) * 100 + (100 / (endStep - startStep + 1) / 2)}%` };
            return (h("div", { class: {
                    'divider-step-node': true,
                    'is-completed': isCompleted,
                    'is-active': isActive
                }, style: stepStyle }, h("span", { class: "step-label" }, step)));
        });
    }
    renderShape() {
        if (this.shape === 'none')
            return null;
        const shapeStyle = this.shapeColor ? { fill: this.shapeColor } : {};
        const shapes = {
            curve: "M0,0 C50,100 50,100 100,0 L100,100 0,100 Z",
            tilt: "M0,0 L100,100 L0,100 Z",
            triangle: "M0,100 L50,0 L100,100 Z",
            wave: "M0,50 Q25,0 50,50 T100,50 L100,100 0,100 Z",
            zigzag: "M0,100 L25,0 L50,100 L75,0 L100,100 Z",
            arrow: "M0,0 L50,50 L100,0 L100,100 L0,100 Z"
        };
        return (h("div", { class: `divider-shape divider-shape-${this.shape}` }, h("svg", { viewBox: "0 0 100 100", preserveAspectRatio: "none", style: shapeStyle }, h("path", { d: shapes[this.shape] || '' }))));
    }
    render() {
        if (this.shape !== 'none')
            return this.renderShape();
        const isThemeColor = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'].includes(this.color);
        const classes = [
            'divider',
            `divider-${this.orientation}`,
            `divider-${this.variant}`,
            `divider-${this.size}`,
            `divider-text-${this.textAlign}`,
            this.orientation === 'vertical' ? `divider-vertical-${this.verticalAlign}` : '',
            this.plain ? 'divider-plain' : '',
            this.loading ? 'divider-loading' : '',
            this.image ? 'divider-with-image' : '',
            this.responsive !== 'none' ? `divider-responsive-${this.responsive}` : '',
            isThemeColor ? `color-${this.color}` : (this.color ? 'divider-custom' : ''),
            this.textColor ? 'divider-custom-text' : '',
            this.animation !== 'none' ? `divider-animation-${this.animation}` : '',
            this.clickable || this.ripple || this.dragEnabled ? 'divider-interactive' : '',
            this.shadow ? 'divider-shadow' : '',
            this.glow ? 'divider-glow' : '',
            this.pattern !== 'none' ? `divider-pattern-${this.pattern}` : '',
            this.inset !== 'none' ? `divider-inset-${this.inset}` : '',
            this.spacing !== 'none' ? `divider-spacing-${this.spacing}` : '',
            this.badge ? 'divider-with-badge' : '',
            this.aura ? 'divider-aura' : '',
            this.glass ? 'divider-glass' : '',
            this.kinetic ? 'divider-kinetic' : '',
            this.iconAnimation !== 'none' ? `divider-icon-anim-${this.iconAnimation}` : '',
            this.upright ? 'divider-upright' : '',
            this.steps > 0 ? 'divider-with-steps' : '',
            this.heatmap ? 'divider-heatmap' : '',
            this.reveal ? 'divider-reveal' : '',
            this.isRevealed ? 'is-revealed' : '',
            this.dragEnabled ? 'divider-draggable' : '',
            this.isDragging ? 'is-dragging' : '',
            this.organic ? 'divider-organic' : '',
            this.holographic ? 'divider-holographic' : '',
            this.stream ? 'divider-stream' : '',
            this.ripple ? 'divider-ripple' : '',
            this.parallax ? 'divider-parallax' : '',
            this.subtitle ? 'divider-with-subtitle' : '',
            this.lines !== 'all' ? `divider-lines-${this.lines}` : '',
            this.linecap !== 'butt' ? `divider-linecap-${this.linecap}` : ''
        ].filter(Boolean).join(' ');
        const style = {
            ...(!isThemeColor && this.color && { '--divider-color': this.color }),
            ...(this.textColor && { '--divider-text-color': this.textColor }),
            ...(this.textTransform && { '--divider-text-transform': this.textTransform }),
            ...(this.thickness && { '--divider-thickness': this.thickness }),
            ...(this.gap && { margin: this.gap }),
            ...(this.opacity !== 1 && { opacity: this.opacity.toString() }),
            ...(this.maxWidth && { maxWidth: this.maxWidth }),
            ...(this.borderRadius && { '--divider-border-radius': this.borderRadius }),
            ...(this.height && { height: this.height }),
            ...(this.heatmap && this.percent && { '--divider-percent': `${this.percent}%` }),
        };
        const hasContent = this.text || this.icon || this.image || this.loading;
        const showStartLine = !this.plain && (this.lines === 'all' || this.lines === 'start');
        const showEndLine = !this.plain && (this.lines === 'all' || this.lines === 'end');
        return (h("div", { class: classes, style: style, onMouseDown: this.handleMouseDown, onTouchStart: this.handleTouchStart, onKeyDown: this.handleKeyDown, onClick: this.handleClick, role: this.dragEnabled ? 'slider' : (this.clickable || this.ripple ? 'button' : 'separator'), "aria-orientation": this.orientation, "aria-label": this.text || 'divider', "aria-valuenow": this.dragEnabled ? this.percent : undefined, "aria-valuemin": this.dragEnabled ? 0 : undefined, "aria-valuemax": this.dragEnabled ? 100 : undefined, "aria-valuetext": this.dragEnabled ? `${this.percent}% ${this.steps > 0 ? `(Step ${this.currentStep})` : ''}` : undefined, tabindex: this.dragEnabled || this.clickable || this.ripple ? 0 : undefined }, this.ripple && h("div", { class: "ripple-container" }), showStartLine && (h("div", { class: "divider-line first" }, this.steps > 0 && this.renderSteps('start'))), h("div", { class: "divider-content-wrapper" }, h("slot", { name: "start" }), hasContent && (h("span", { class: "divider-main-content" }, this.loading ? h("div", { class: "divider-shimmer" }) : (h("div", { class: "divider-text-area" }, this.image && h("img", { src: this.image, alt: "divider-img", class: "divider-image" }), !this.image && (this.icon || this.el.querySelector('[slot="icon"]')) && (h("span", { class: "divider-icon" }, h("slot", { name: "icon" }, this.icon.length > 2 ?
            h("ui-icon", { name: this.icon, library: "fontawesome", size: this.size === 'lg' ? '18px' : '14px' }) :
            this.icon))), h("div", { class: "divider-label-group" }, this.text && h("span", { class: "divider-label" }, this.text), this.subtitle && h("span", { class: "divider-subtitle" }, this.subtitle)), this.badge && h("span", { class: "divider-badge" }, this.badge))))), h("slot", null), h("slot", { name: "end" })), showEndLine && (h("div", { class: "divider-line last" }, this.steps > 0 && this.renderSteps('end')))));
    }
};
Divider.style = dividerCss();

export { Divider as ui_divider };
