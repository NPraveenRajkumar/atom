import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const animateOnScrollCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}:host(.scrubbing) .animate-container,:host(.scrubbing) ::slotted(*){animation-play-state:paused !important;animation-delay:calc(var(--scroll-progress, 0) * -1s) !important;animation-duration:1s !important;transition:none !important}.animate-container{animation-duration:var(--animation-duration, 1000ms);animation-delay:var(--animation-delay, 0ms);animation-timing-function:var(--animation-easing, ease);animation-fill-mode:both}.fade-in,::slotted(.fade-in){animation-name:fadeIn}.fade-out,::slotted(.fade-out){animation-name:fadeOut}@keyframes fadeIn{from{opacity:0;filter:blur(var(--start-blur, 0px))}to{opacity:1;filter:blur(0)}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}.slide-in-left,::slotted(.slide-in-left){animation-name:slideInLeft}.slide-in-right,::slotted(.slide-in-right){animation-name:slideInRight}.slide-in-up,::slotted(.slide-in-up){animation-name:slideInUp}.slide-in-down,::slotted(.slide-in-down){animation-name:slideInDown}.slide-out-left,::slotted(.slide-out-left){animation-name:slideOutLeft}.slide-out-right,::slotted(.slide-out-right){animation-name:slideOutRight}.slide-out-up,::slotted(.slide-out-up){animation-name:slideOutUp}.slide-out-down,::slotted(.slide-out-down){animation-name:slideOutDown}@keyframes slideInLeft{from{transform:translate3d(calc(var(--distance, 100%) * -1), 0, 0);opacity:0}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes slideInRight{from{transform:translate3d(var(--distance, 100%), 0, 0);opacity:0}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes slideInUp{from{transform:translate3d(0, var(--distance, 100%), 0);opacity:0}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes slideInDown{from{transform:translate3d(0, calc(var(--distance, 100%) * -1), 0);opacity:0}to{transform:translate3d(0, 0, 0);opacity:1}}@keyframes slideOutLeft{from{transform:translate3d(0, 0, 0);opacity:1}to{transform:translate3d(-100%, 0, 0);opacity:0}}@keyframes slideOutRight{from{transform:translate3d(0, 0, 0);opacity:1}to{transform:translate3d(100%, 0, 0);opacity:0}}@keyframes slideOutUp{from{transform:translate3d(0, 0, 0);opacity:1}to{transform:translate3d(0, -100%, 0);opacity:0}}@keyframes slideOutDown{from{transform:translate3d(0, 0, 0);opacity:1}to{transform:translate3d(0, 100%, 0);opacity:0}}.zoom-in,::slotted(.zoom-in){animation-name:zoomIn}.zoom-out,::slotted(.zoom-out){animation-name:zoomOut}@keyframes zoomIn{from{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}50%{opacity:1}}@keyframes zoomOut{from{opacity:1}50%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}to{opacity:0}}.flip-in,::slotted(.flip-in){animation-name:flipIn}.flip-out,::slotted(.flip-out){animation-name:flipOut}.flip-in-x,::slotted(.flip-in-x){animation-name:flipInX}.flip-in-y,::slotted(.flip-in-y){animation-name:flipInY}.flip-out-x,::slotted(.flip-out-x){animation-name:flipOutX}.flip-out-y,::slotted(.flip-out-y){animation-name:flipOutY}@keyframes flipIn{from{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, 90deg);animation-timing-function:ease-in;opacity:0}40%{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, -20deg);animation-timing-function:ease-in}60%{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, 10deg);opacity:1}80%{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, -5deg)}to{transform:perspective(var(--perspective, 1000px))}}@keyframes flipOut{from{transform:perspective(var(--perspective, 1000px))}30%{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, -20deg);opacity:1}to{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, 90deg);opacity:0}}@keyframes flipInX{from{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, 90deg);opacity:0}to{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, 0deg);opacity:1}}@keyframes flipInY{from{transform:perspective(var(--perspective, 1000px)) rotate3d(0, 1, 0, 90deg);opacity:0}to{transform:perspective(var(--perspective, 1000px)) rotate3d(0, 1, 0, 0deg);opacity:1}}@keyframes flipOutX{from{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, 0deg);opacity:1}to{transform:perspective(var(--perspective, 1000px)) rotate3d(1, 0, 0, 90deg);opacity:0}}@keyframes flipOutY{from{transform:perspective(var(--perspective, 1000px)) rotate3d(0, 1, 0, 0deg);opacity:1}to{transform:perspective(var(--perspective, 1000px)) rotate3d(0, 1, 0, 90deg);opacity:0}}.bounce-in,::slotted(.bounce-in){animation-name:bounceIn}.bounce-out,::slotted(.bounce-out){animation-name:bounceOut}@keyframes bounceIn{from,20%,40%,60%,80%,to{animation-timing-function:cubic-bezier(0.215, 0.61, 0.355, 1)}0%{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}20%{transform:scale3d(1.1, 1.1, 1.1)}40%{transform:scale3d(0.9, 0.9, 0.9)}60%{opacity:1;transform:scale3d(1.03, 1.03, 1.03)}80%{transform:scale3d(0.97, 0.97, 0.97)}to{opacity:1;transform:scale3d(1, 1, 1)}}@keyframes bounceOut{20%{transform:scale3d(0.9, 0.9, 0.9)}50%,55%{opacity:1;transform:scale3d(1.1, 1.1, 1.1)}to{opacity:0;transform:scale3d(0.3, 0.3, 0.3)}}.rotate-in,::slotted(.rotate-in){animation-name:rotateIn}.rotate-out,::slotted(.rotate-out){animation-name:rotateOut}@keyframes rotateIn{from{transform-origin:center;transform:rotate3d(0, 0, 1, -200deg);opacity:0}to{transform-origin:center;transform:translate3d(0, 0, 0);opacity:1}}@keyframes rotateOut{from{transform-origin:center;opacity:1}to{transform-origin:center;transform:rotate3d(0, 0, 1, 200deg);opacity:0}}.shake,::slotted(.shake){animation-name:shake}@keyframes shake{from,to{transform:translate3d(0, 0, 0)}10%,30%,50%,70%,90%{transform:translate3d(-10px, 0, 0)}20%,40%,60%,80%{transform:translate3d(10px, 0, 0)}}.zoom-in-up,::slotted(.zoom-in-up){animation-name:zoomInUp}.zoom-in-down,::slotted(.zoom-in-down){animation-name:zoomInDown}.zoom-in-left,::slotted(.zoom-in-left){animation-name:zoomInLeft}.zoom-in-right,::slotted(.zoom-in-right){animation-name:zoomInRight}@keyframes zoomInUp{from{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomInDown{from{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomInLeft{from{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}@keyframes zoomInRight{from{opacity:0;transform:scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);animation-timing-function:cubic-bezier(0.55, 0.055, 0.675, 0.19)}60%{opacity:1;transform:scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);animation-timing-function:cubic-bezier(0.175, 0.885, 0.32, 1)}}.pulse,::slotted(.pulse){animation-name:pulse}.rubber-band,::slotted(.rubber-band){animation-name:rubberBand}.tada,::slotted(.tada){animation-name:tada}.jello,::slotted(.jello){animation-name:jello}.wobble,::slotted(.wobble){animation-name:wobble}@keyframes pulse{from,to{transform:scale3d(1, 1, 1)}50%{transform:scale3d(1.05, 1.05, 1.05)}}@keyframes rubberBand{from,to{transform:scale3d(1, 1, 1)}30%{transform:scale3d(1.25, 0.75, 1)}40%{transform:scale3d(0.75, 1.25, 1)}50%{transform:scale3d(1.15, 0.85, 1)}65%{transform:scale3d(0.95, 1.05, 1)}75%{transform:scale3d(1.05, 0.95, 1)}}@keyframes tada{from,to{transform:scale3d(1, 1, 1)}10%,20%{transform:scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)}30%,50%,70%,90%{transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)}40%,60%,80%{transform:scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)}}@keyframes jello{from,11.1%,to{transform:translate3d(0, 0, 0)}22.2%{transform:skewX(-12.5deg) skewY(-12.5deg)}33.3%{transform:skewX(6.25deg) skewY(6.25deg)}44.4%{transform:skewX(-3.125deg) skewY(-3.125deg)}55.5%{transform:skewX(1.5625deg) skewY(1.5625deg)}66.6%{transform:skewX(-0.78125deg) skewY(-0.78125deg)}77.7%{transform:skewX(0.390625deg) skewY(0.390625deg)}88.8%{transform:skewX(-0.1953125deg) skewY(-0.1953125deg)}}@keyframes wobble{from,to{transform:translate3d(0, 0, 0)}15%{transform:translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)}30%{transform:translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)}45%{transform:translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)}60%{transform:translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)}75%{transform:translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)}}.roll-in,::slotted(.roll-in){animation-name:rollIn}.roll-out,::slotted(.roll-out){animation-name:rollOut}.blur-reveal,::slotted(.blur-reveal){animation-name:blurReveal}.back-in-up,::slotted(.back-in-up){animation-name:backInUp}.back-in-down,::slotted(.back-in-down){animation-name:backInDown}.back-in-left,::slotted(.back-in-left){animation-name:backInLeft}.back-in-right,::slotted(.back-in-right){animation-name:backInRight}.back-out-up,::slotted(.back-out-up){animation-name:backOutUp}.back-out-down,::slotted(.back-out-down){animation-name:backOutDown}.back-out-left,::slotted(.back-out-left){animation-name:backOutLeft}.back-out-right,::slotted(.back-out-right){animation-name:backOutRight}@keyframes backInUp{0%{transform:translateY(1200px) scale(0.7);opacity:0.7}80%{transform:translateY(0px) scale(0.7);opacity:0.7}100%{transform:scale(1);opacity:1}}@keyframes backInDown{0%{transform:translateY(-1200px) scale(0.7);opacity:0.7}80%{transform:translateY(0px) scale(0.7);opacity:0.7}100%{transform:scale(1);opacity:1}}@keyframes backInLeft{0%{transform:translateX(-2000px) scale(0.7);opacity:0.7}80%{transform:translateX(0px) scale(0.7);opacity:0.7}100%{transform:scale(1);opacity:1}}@keyframes backInRight{0%{transform:translateX(2000px) scale(0.7);opacity:0.7}80%{transform:translateX(0px) scale(0.7);opacity:0.7}100%{transform:scale(1);opacity:1}}@keyframes backOutUp{0%{transform:scale(1);opacity:1}20%{transform:translateY(0px) scale(0.7);opacity:0.7}100%{transform:translateY(-700px) scale(0.7);opacity:0}}@keyframes backOutDown{0%{transform:scale(1);opacity:1}20%{transform:translateY(0px) scale(0.7);opacity:0.7}100%{transform:translateY(700px) scale(0.7);opacity:0}}@keyframes backOutLeft{0%{transform:scale(1);opacity:1}20%{transform:translateX(0px) scale(0.7);opacity:0.7}100%{transform:translateX(-2000px) scale(0.7);opacity:0}}@keyframes backOutRight{0%{transform:scale(1);opacity:1}20%{transform:translateX(0px) scale(0.7);opacity:0.7}100%{transform:translateX(2000px) scale(0.7);opacity:0}}@keyframes rollIn{from{opacity:0;transform:translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)}to{opacity:1;transform:translate3d(0, 0, 0)}}@keyframes rollOut{from{opacity:1}to{opacity:0;transform:translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)}}@keyframes blurReveal{from{opacity:0;filter:blur(var(--start-blur, 20px));transform:scale(0.9)}to{opacity:1;filter:blur(0);transform:scale(1)}}`;

const AnimateOnScroll = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.scrollAnimationStart = createEvent(this, "scrollAnimationStart");
        this.scrollAnimationEnd = createEvent(this, "scrollAnimationEnd");
    }
    get el() { return getElement(this); }
    /**
     * CSS classes to apply when element enters viewport
     */
    enterClass = 'fade-in';
    /**
     * CSS classes to apply when element leaves viewport
     */
    leaveClass = '';
    /**
     * Threshold for intersection observer (0-1)
     */
    threshold = 0.5;
    /**
     * Root margin for intersection observer
     */
    rootMargin = '0px';
    /**
     * Whether to animate only once or every time element enters viewport
     */
    once = false;
    /**
     * Animation duration in milliseconds
     */
    duration = 1000;
    /**
     * Animation delay in milliseconds
     */
    delay = 0;
    /**
     * Animation easing function
     */
    easing = 'ease';
    /**
     * CSS class or ID of the element to use as the scroll anchor
     */
    anchor = '';
    /**
     * Selector for the root element (scroll container)
     */
    root = '';
    /**
     * Blur amount for starting state (e.g. '5px')
     * Renamed from 'blur' to avoid conflict with HTMLElement.blur()
     */
    blurAmount = '';
    /**
     * 3D Perspective value (e.g. '1000px')
     */
    perspective = '';
    /**
     * Stagger delay per child in ms (if children exist)
     */
    stagger = 0;
    /**
     * The transform origin for rotation/flip animations (e.g. 'top' or 'center')
     */
    transformOrigin = 'center';
    /**
     * Distance for slide animations (e.g. '100px')
     */
    distance = '50px';
    /**
     * Whether to reset the animation when the element leaves the viewport in reverse (scrolling up)
     */
    mirror = false;
    /**
     * Whether to disable animations for users who prefer reduced motion
     */
    respectReducedMotion = true;
    /**
     * Whether to scrub the animation based on scroll position (parallax effect)
     */
    scrub = false;
    /**
      * Emitted when the animation starts (element enters/interacts)
      */
    scrollAnimationStart;
    /**
      * Emitted when the animation ends
      */
    scrollAnimationEnd;
    isVisible = false;
    hasAnimated = false;
    observer;
    contentEl;
    rafId;
    animationTimer;
    componentDidLoad() {
        this.setupObserver();
        if (this.scrub) {
            this.startScrubLoop();
        }
    }
    disconnectedCallback() {
        if (this.observer) {
            this.observer.disconnect();
        }
        if (this.rafId) {
            cancelAnimationFrame(this.rafId);
        }
        clearTimeout(this.animationTimer);
    }
    headerScrubChange(newValue) {
        if (newValue) {
            this.startScrubLoop();
        }
        else {
            if (this.rafId)
                cancelAnimationFrame(this.rafId);
            // Reset style override
            if (this.contentEl) {
                this.contentEl.style.removeProperty('--scroll-progress');
            }
        }
    }
    startScrubLoop() {
        const loop = () => {
            if (this.isVisible && this.contentEl) {
                this.calculateScrollProgress();
            }
            this.rafId = requestAnimationFrame(loop);
        };
        loop();
    }
    currentProgress = 0;
    targetProgress = 0;
    calculateScrollProgress() {
        // Determine the scroll progress of the element within the viewport
        const anchorEl = this.anchor ? document.querySelector(this.anchor) || this.el : this.el;
        const rect = anchorEl.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        // Calculate progress: 0 when entering bottom, 1 when leaving top
        const rawProgress = (windowHeight - rect.top) / (windowHeight + rect.height);
        this.targetProgress = Math.max(0, Math.min(1, rawProgress));
        // Smooth transition (Lerp)
        this.currentProgress += (this.targetProgress - this.currentProgress) * 0.1;
        if (this.contentEl) {
            this.contentEl.style.setProperty('--scroll-progress', this.currentProgress.toFixed(4));
        }
    }
    setupObserver() {
        const options = {
            root: this.root ? document.querySelector(this.root) : null,
            rootMargin: this.rootMargin,
            threshold: this.scrub ? 0 : this.threshold, // Scrub needs immediate detection
        };
        this.observer = new IntersectionObserver((entries) => {
            // Respect user preference for reduced motion
            const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
            if (this.respectReducedMotion && prefersReducedMotion) {
                this.isVisible = true;
                this.hasAnimated = true;
                return;
            }
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    // Element entered viewport
                    if (!this.once || !this.hasAnimated) {
                        this.isVisible = true;
                        this.hasAnimated = true;
                        this.scrollAnimationStart.emit();
                        if (this.contentEl) {
                            // Handle Staggering for children
                            if (this.stagger > 0 && this.contentEl.children.length > 0) {
                                Array.from(this.contentEl.children).forEach((child, index) => {
                                    const htmlChild = child;
                                    htmlChild.style.setProperty('--animation-delay', `${this.delay + (index * this.stagger)}ms`);
                                    htmlChild.style.setProperty('--animation-duration', `${this.duration}ms`);
                                    htmlChild.style.setProperty('--animation-easing', this.easing);
                                    // Add classes to child
                                    const enterClasses = this.enterClass.split(' ').filter(c => c.trim());
                                    enterClasses.forEach(cls => child.classList.add(cls));
                                    if (this.mirror) {
                                        const leaveClasses = this.leaveClass.split(' ').filter(c => c.trim());
                                        leaveClasses.forEach(cls => child.classList.remove(cls));
                                    }
                                });
                            }
                            else {
                                // Normal single element behavior
                                const enterClasses = this.enterClass.split(' ').filter(c => c.trim());
                                enterClasses.forEach(cls => this.contentEl.classList.add(cls));
                                if (this.leaveClass || this.mirror) {
                                    const leaveClasses = this.leaveClass.split(' ').filter(c => c.trim());
                                    leaveClasses.forEach(cls => this.contentEl.classList.remove(cls));
                                }
                            }
                        }
                        if (!this.scrub) {
                            this.animationTimer = setTimeout(() => {
                                this.scrollAnimationEnd.emit();
                            }, this.duration + this.delay + (this.stagger * (this.contentEl ? this.contentEl.children.length : 0)));
                        }
                    }
                    if (this.once) {
                        this.observer.disconnect();
                    }
                }
                else {
                    // Element left viewport
                    const rect = entry.boundingClientRect;
                    const isBelow = rect.top > (window.innerHeight || document.documentElement.clientHeight);
                    // If mirror is true and element is below viewport (scrolled up), reset it
                    if (this.mirror && isBelow) {
                        this.isVisible = false;
                        this.hasAnimated = false; // Allow re-animating
                        if (this.contentEl) {
                            const enterClasses = this.enterClass.split(' ').filter(c => c.trim());
                            enterClasses.forEach(cls => this.contentEl.classList.remove(cls));
                            if (this.stagger > 0) {
                                Array.from(this.contentEl.children).forEach((child) => {
                                    enterClasses.forEach(cls => child.classList.remove(cls));
                                });
                            }
                        }
                    }
                    else if (!this.once && this.isVisible) {
                        this.isVisible = false;
                        if (this.contentEl) {
                            if (this.stagger > 0 && this.contentEl.children.length > 0) {
                                Array.from(this.contentEl.children).forEach((child) => {
                                    const leaveClasses = this.leaveClass.split(' ').filter(c => c.trim());
                                    leaveClasses.forEach(cls => child.classList.add(cls));
                                    const enterClasses = this.enterClass.split(' ').filter(c => c.trim());
                                    enterClasses.forEach(cls => child.classList.remove(cls));
                                });
                            }
                            else if (this.leaveClass) {
                                const leaveClasses = this.leaveClass.split(' ').filter(c => c.trim());
                                leaveClasses.forEach(cls => this.contentEl.classList.add(cls));
                                const enterClasses = this.enterClass.split(' ').filter(c => c.trim());
                                enterClasses.forEach(cls => this.contentEl.classList.remove(cls));
                            }
                        }
                    }
                }
            });
        }, options);
        // Observe the content element or separate anchor
        const target = this.anchor ? document.querySelector(this.anchor) : this.contentEl;
        if (target) {
            this.observer.observe(target);
        }
    }
    render() {
        const hostClass = this.scrub ? 'scrubbing' : '';
        const blur = typeof this.blurAmount === 'string' ? this.blurAmount : '0px';
        const perspective = typeof this.perspective === 'string' ? this.perspective : '1000px';
        const distance = typeof this.distance === 'string' ? this.distance : '50px';
        const origin = typeof this.transformOrigin === 'string' ? this.transformOrigin : 'center';
        const easing = typeof this.easing === 'string' ? this.easing : 'ease';
        return (h(Host, { key: '47a9d6b0f874f646bf3ba94faf32fbf958ceb177', class: hostClass }, h("div", { key: '4b44f83641692c3bdc3e4dad2ad7c3a25dfe5ac3', class: "animate-container", ref: el => this.contentEl = el, style: {
                '--animation-duration': `${this.duration}ms`,
                '--animation-delay': `${this.delay}ms`,
                '--animation-easing': easing,
                '--start-blur': blur || '0px',
                '--perspective': perspective || '1000px',
                '--distance': distance,
                '--transform-origin': origin,
                'perspective': perspective || 'none',
                'transform-origin': origin
            } }, h("slot", { key: '49dffe8ae575f94d9f94b9b0c076f88751e149c4' }))));
    }
    static get watchers() { return {
        "scrub": [{
                "headerScrubChange": 0
            }]
    }; }
};
AnimateOnScroll.style = animateOnScrollCss();

export { AnimateOnScroll as ui_animate_on_scroll };
