import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const carouselCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%;height:100%;box-sizing:border-box}.carousel{position:relative;width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;box-sizing:border-box;background:var(--carousel-bg, var(--bg-primary, #ffffff));user-select:none}.carousel.dragging{cursor:grabbing}.carousel.dragging .carousel-track{transition:none !important}.carousel.vertical{flex-direction:column}.carousel-track-wrapper{width:100%;height:100%;overflow:hidden;display:flex;flex:1 1 auto;position:relative}.carousel-track{display:flex;transition:transform var(--carousel-speed, 0.5s) cubic-bezier(0.4, 0, 0.2, 1);will-change:transform;width:100%;height:100%}.carousel.vertical .carousel-track{flex-direction:column}::slotted(*){flex-shrink:0;width:100%;height:100%;box-sizing:border-box;overflow:hidden}.effect-fade .carousel-track,:host([effect=fade]) .carousel-track{transform:none !important;display:block !important;position:relative;height:100%}.effect-fade ::slotted(*),:host([effect=fade]) ::slotted(*){position:absolute !important;top:0;left:0;opacity:0;transition:opacity 0.8s cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none;width:100%;height:100%;z-index:1}.effect-fade ::slotted([data-active=true]),:host([effect=fade]) ::slotted([data-active=true]){opacity:1;pointer-events:auto;z-index:10}.effect-flip .carousel-track-wrapper,:host([effect=flip]) .carousel-track-wrapper{perspective:1500px;overflow:visible}.effect-flip .carousel-track,:host([effect=flip]) .carousel-track{transform:none !important;display:block !important;position:relative;height:100%;transform-style:preserve-3d}.effect-flip ::slotted(*),:host([effect=flip]) ::slotted(*){position:absolute !important;top:0;left:50%;width:100%;height:100%;transform:translate3d(-50%, 0, 0) rotateY(-180deg);opacity:0;transition:transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s;backface-visibility:hidden}.effect-flip ::slotted([data-active=true]),:host([effect=flip]) ::slotted([data-active=true]){opacity:1;transform:translate3d(-50%, 0, 0) rotateY(0deg);z-index:10}.effect-cube .carousel-track-wrapper,:host([effect=cube]) .carousel-track-wrapper{perspective:2000px;overflow:visible}.effect-cube .carousel-track,:host([effect=cube]) .carousel-track{transform:none !important;display:block !important;transform-style:preserve-3d;position:relative;height:100%}.effect-cube ::slotted(*),:host([effect=cube]) ::slotted(*){position:absolute !important;top:0;left:50%;width:100%;height:100%;opacity:0;transition:transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s;transform:translate3d(-50%, 0, -300px) rotateY(90deg);backface-visibility:hidden;transform-origin:center center}.effect-cube ::slotted([data-active=true]),:host([effect=cube]) ::slotted([data-active=true]){opacity:1;transform:translate3d(-50%, 0, 0) rotateY(0deg);z-index:10}.effect-cube ::slotted([data-offset="-1"]),:host([effect=cube]) ::slotted([data-offset="-1"]){opacity:0.2;transform:translate3d(-100%, 0, -300px) rotateY(90deg);z-index:5}.effect-cube ::slotted([data-offset="1"]),:host([effect=cube]) ::slotted([data-offset="1"]){opacity:0.2;transform:translate3d(0%, 0, -300px) rotateY(-90deg);z-index:5}.effect-scale .carousel-track,:host([effect=scale]) .carousel-track{transform:none !important;display:block !important;height:100%;position:relative}.effect-scale ::slotted(*),:host([effect=scale]) ::slotted(*){position:absolute !important;top:0;left:50%;width:100%;height:100%;transform:translate3d(-50%, 0, 0) scale(1.15);opacity:0;transition:all 0.8s cubic-bezier(0.16, 1, 0.3, 1)}.effect-scale ::slotted([data-active=true]),:host([effect=scale]) ::slotted([data-active=true]){opacity:1;transform:translate3d(-50%, 0, 0) scale(1);z-index:10}.effect-coverflow .carousel-track-wrapper,:host([effect=coverflow]) .carousel-track-wrapper{perspective:1500px;overflow:visible}.effect-coverflow .carousel-track,:host([effect=coverflow]) .carousel-track{transform:none !important;display:block !important;position:relative;transform-style:preserve-3d;height:100%}.effect-coverflow ::slotted(*),:host([effect=coverflow]) ::slotted(*){position:absolute !important;top:0;left:50%;transition:all 0.8s cubic-bezier(0.16, 1, 0.3, 1);width:90%;height:100%;transform:translate3d(-50%, 0, -200px) scale(0.7) rotateY(60deg);opacity:0}.effect-coverflow ::slotted([data-active=true]),:host([effect=coverflow]) ::slotted([data-active=true]){transform:translate3d(-50%, 0, 0) scale(1) rotateY(0deg);opacity:1;z-index:10}.effect-coverflow ::slotted([data-offset="-1"]),:host([effect=coverflow]) ::slotted([data-offset="-1"]){transform:translate3d(-110%, 0, -150px) scale(0.85) rotateY(45deg);opacity:0.6;z-index:5}.effect-coverflow ::slotted([data-offset="1"]),:host([effect=coverflow]) ::slotted([data-offset="1"]){transform:translate3d(10%, 0, -150px) scale(0.85) rotateY(-45deg);opacity:0.6;z-index:5}.effect-stack .carousel-track,:host([effect=stack]) .carousel-track{transform:none !important;display:block !important;height:100%}.effect-stack ::slotted(*),:host([effect=stack]) ::slotted(*){position:absolute !important;top:0;left:0;opacity:0;transform:translateY(40px) scale(0.9);transition:all 0.7s cubic-bezier(0.16, 1, 0.3, 1)}.effect-stack ::slotted([data-active=true]),:host([effect=stack]) ::slotted([data-active=true]){opacity:1;transform:translateY(0) scale(1);z-index:10}.effect-stack ::slotted([data-visible=true]:not([data-active=true])),:host([effect=stack]) ::slotted([data-visible=true]:not([data-active=true])){opacity:0.6;transform:translateY(20px) scale(0.95);z-index:5}.effect-depth .carousel-track,:host([effect=depth]) .carousel-track{transform:none !important;display:block !important;position:relative;height:100%}.effect-depth ::slotted(*),:host([effect=depth]) ::slotted(*){position:absolute !important;top:0;left:50%;width:90%;height:100%;transition:transform 0.8s cubic-bezier(0.16, 1, 0.3, 1), opacity 0.8s;transform:translate3d(-50%, 0, -400px) scale(0.5);opacity:0}.effect-depth ::slotted([data-active=true]),:host([effect=depth]) ::slotted([data-active=true]){transform:translate3d(-50%, 0, 0) scale(1);opacity:1;z-index:10}.effect-depth ::slotted([data-offset="-1"]),:host([effect=depth]) ::slotted([data-offset="-1"]){transform:translate3d(-105%, 0, -200px) scale(0.8);opacity:0.5;z-index:5}.effect-depth ::slotted([data-offset="1"]),:host([effect=depth]) ::slotted([data-offset="1"]){transform:translate3d(5%, 0, -200px) scale(0.8);opacity:0.5;z-index:5}.effect-ken-burns ::slotted(*),:host([effect=ken-burns]) ::slotted(*){position:absolute !important;top:0;left:0;opacity:0;overflow:hidden;height:100%;width:100%;transition:opacity 1.5s ease}.effect-ken-burns ::slotted([data-active=true]),:host([effect=ken-burns]) ::slotted([data-active=true]){opacity:1;z-index:10;animation:kenBurnsPremium 10s cubic-bezier(0.4, 0, 0.2, 1) infinite alternate}@keyframes kenBurnsPremium{0%{transform:scale(1) translate(0, 0)}100%{transform:scale(1.2) translate(-2%, -2%)}}.effect-wheel .carousel-track-wrapper,:host([effect=wheel]) .carousel-track-wrapper{perspective:1500px;overflow:visible}.effect-wheel .carousel-track,:host([effect=wheel]) .carousel-track{transform-style:preserve-3d;transition:transform 0.8s cubic-bezier(0.16, 1, 0.3, 1);height:100%}.effect-wheel ::slotted(*),:host([effect=wheel]) ::slotted(*){position:absolute !important;top:0;left:0;opacity:0.2;transform:rotateX(45deg) translateZ(-200px);transition:all 0.8s cubic-bezier(0.16, 1, 0.3, 1)}.effect-wheel ::slotted([data-active=true]),:host([effect=wheel]) ::slotted([data-active=true]){opacity:1;transform:rotateX(0deg) translateZ(0);z-index:10}.effect-wheel ::slotted([data-visible=true]:not([data-active=true])),:host([effect=wheel]) ::slotted([data-visible=true]:not([data-active=true])){opacity:0.4;transform:rotateX(-45deg) translateZ(-150px)}.carousel-indicators{position:absolute;left:50%;bottom:20px;transform:translateX(-50%);display:flex;gap:8px;z-index:10}.carousel-indicators button{width:12px;height:6px;border-radius:3px;border:none;background:rgba(255, 255, 255, 0.4);cursor:pointer;transition:0.3s}.carousel-indicators button.active{width:24px;background:var(--bg-primary, #ffffff);box-shadow:0 2px 8px rgba(0, 0, 0, 0.2)}.indicator-pie{position:relative;width:36px;height:36px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;background:rgba(0, 0, 0, 0.1);border:1.5px solid transparent;transition:0.3s}.indicator-pie:hover{background:rgba(0, 0, 0, 0.2);border-color:rgba(255, 255, 255, 0.2)}.indicator-pie.active{background:rgba(0, 0, 0, 0.3)}.indicator-pie svg{width:100%;height:100%;overflow:visible;stroke-linecap:round}:host([indicators-type=segments]) .carousel-indicators{top:20px;bottom:auto;left:0;right:0;transform:none;padding:0 16px;gap:4px;width:100%;box-sizing:border-box}.progress-segment{flex:1;height:3px;border-radius:2px;overflow:hidden;background:rgba(255, 255, 255, 0.2)}.progress-segment .progress-fill{height:100%;background:var(--bg-primary, #ffffff);transition:width 0.1s linear}.carousel-arrow{position:absolute;top:50%;transform:translateY(-50%);width:44px;height:44px;border-radius:50%;border:none;background:rgba(255, 255, 255, 0.2);color:var(--bg-primary, var(--text-standard, #ffffff));cursor:pointer;backdrop-filter:blur(8px);display:flex;align-items:center;justify-content:center;z-index:10;transition:0.3s}.carousel-arrow:hover:not(:disabled){background:rgb(255, 255, 255);color:var(--bg-primary, #000);transform:translateY(-50%) scale(1.1)}.carousel-arrow:disabled{opacity:0.2;cursor:not-allowed}.carousel-arrow.prev{left:20px}.carousel-arrow.next{right:20px}.carousel-controls{position:absolute;top:20px;right:20px;display:flex;gap:8px;z-index:20}.carousel-controls .carousel-arrow{position:static;transform:none;border-radius:8px;background:var(--bg-primary, #ffffff);color:var(--bg-primary, var(--border-subtle, #1e293b));border:1px solid var(--border-subtle, #e2e8f0);width:38px;height:38px;box-shadow:0 4px 10px rgba(0, 0, 0, 0.05)}.carousel-controls .carousel-arrow:hover:not(:disabled){transform:translateY(-2px);border-color:var(--color-primary, #94a3b8)}.carousel-counter{position:absolute;top:20px;left:20px;background:rgba(0, 0, 0, 0.5);color:var(--bg-primary, var(--text-standard, #ffffff));padding:4px 12px;border-radius:20px;font-size:11px;font-weight:800;backdrop-filter:blur(4px)}.fullscreen-toggle{position:absolute;bottom:20px;right:20px;background:rgba(255, 255, 255, 0.2);color:var(--bg-primary, #ffffff);border:none;width:32px;height:32px;border-radius:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;backdrop-filter:blur(4px)}.fullscreen-toggle:hover{background:rgba(255, 255, 255, 0.4)}:host(.parallax-mode) .carousel-track [data-visible=true]>*{transition:transform 0.7s ease-out}:host(.parallax-mode) .carousel-track [data-active=true]>*{transform:scale(1.05)}:host(.legendary-animate) .carousel-track [data-active=true]>*{animation:slideUpFade 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;opacity:0}@keyframes slideUpFade{from{transform:translateY(30px);opacity:0}to{transform:translateY(0);opacity:1}}`;

const Carousel = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.beforeChange = createEvent(this, "beforeChange");
        this.afterChange = createEvent(this, "afterChange");
    }
    get el() { return getElement(this); }
    /** Slides to show at once (responsive) */
    slidesToShow = 1;
    /** Slides to scroll per action */
    slidesToScroll = 1;
    /** Enable infinite looping */
    infinite = true;
    /** Enable autoplay */
    autoplay = false;
    /** Autoplay interval (ms) */
    autoplayInterval = 3000;
    /** Show navigation arrows */
    arrows = true;
    /** Show indicators (dots) */
    indicators = true;
    /** Vertical mode */
    vertical = false;
    /** Responsive breakpoints */
    responsive = '';
    /** Enable swipe/touch */
    swipe = true;
    /** Enable keyboard navigation */
    keyboard = true;
    /** Pause autoplay on hover */
    pauseOnHover = true;
    /** Custom previous arrow template */
    prevArrow = '&lt;';
    /** Custom next arrow template */
    nextArrow = '&gt;';
    /** Disable infinite looping */
    loop = true;
    /** Animation duration (ms) */
    animationDuration = 500;
    /** Animation easing function */
    animationEasing = 'cubic-bezier(0.4,0,0.2,1)';
    /** Carousel width */
    width = '100%';
    /** Carousel height */
    height = '400px';
    /** Transition effect */
    effect = 'slide';
    /** Enable center mode */
    centerMode = false;
    /** Padding for center mode (e.g., '50px') */
    centerPadding = '50px';
    /** Enable mouse dragging */
    enableDrag = true;
    /** Enable variable width slides */
    variableWidth = false;
    /** Show autoplay progress bar */
    showProgress = false;
    /** Show slide counter (e.g. 1/10) */
    showCounter = false;
    /** Enable auto-height (adjusts to content) */
    autoHeight = false;
    /** Pause on interaction (clicks/drags) */
    pauseOnInteract = true;
    /** Selector of another carousel to sync with (e.g., '#thumbSlider') */
    asNavFor = '';
    /** Enable parallax effect for slide content */
    parallax = false;
    /** Enable lazy loading of images inside slides */
    lazyLoad = false;
    /** Zoom effect on the active slide (Center Mode recommended) */
    zoomActive = false;
    /** Type of navigation indicators: 'dots', 'segments' (stories-style), or 'pie' (circular) */
    indicatorsType = 'dots';
    /** Staggered animations for elements inside the active slide (e.g. titles, buttons) */
    animateContent = false;
    /** Use stories-style progress indicators (segments) - DEPRECATED: use indicatorsType='segments' instead */
    useProgressSegments = false;
    /** Enable mouse wheel navigation */
    mouseWheel = false;
    /** Enable continuous 'Ticker' mode (smooth scrolling without pauses) */
    ticker = false;
    /** Speed for ticker mode (pixels per frame, approx 1-3 for smooth motion) */
    tickerSpeed = 1;
    /** Position of navigation arrows */
    arrowsPosition = 'sides';
    current = 0;
    slidesCount = 0;
    isHovered = false;
    containerWidth = 0;
    containerHeight = 0;
    isDragging = false;
    dragOffset = 0;
    autoplayProgress = 0;
    isFullscreen = false;
    trackTranslate = 'translateX(0px)';
    tickerOffset = 0;
    beforeChange;
    afterChange;
    intervalId = null;
    progressInterval = null;
    tickerRaf = 0;
    animationTimer = null;
    startX = 0;
    startY = 0;
    observer;
    onCurrentChange() {
        this.updateActiveSlides();
    }
    onSlidesToShowChange() {
        this.updateSlidesCount();
    }
    updateSlidesCount = () => {
        const slot = this.el.shadowRoot?.querySelector('slot');
        const slides = slot ? slot.assignedElements() : Array.from(this.el.children);
        this.slidesCount = slides.length;
        // For stack-based 3D effects, we want items to be full-size so CSS can scale them.
        const isStackEffect = ['fade', 'flip', 'cube', 'coverflow', 'stack', 'depth', 'ken-burns', 'wheel'].includes(this.effect);
        const effectiveSlidesToShow = isStackEffect ? 1 : Math.min(this.slidesToShow, this.slidesCount);
        const slideWidth = `${100 / effectiveSlidesToShow}%`;
        slides.forEach((slide) => {
            const htmlSlide = slide;
            if (!this.variableWidth) {
                htmlSlide.style.width = slideWidth;
            }
            htmlSlide.style.flexShrink = '0';
        });
    };
    updateActiveSlides = () => {
        const slot = this.el.shadowRoot?.querySelector('slot');
        const slides = slot ? slot.assignedElements() : Array.from(this.el.children);
        const isStackEffect = ['fade', 'flip', 'cube', 'coverflow', 'stack', 'depth', 'ken-burns', 'wheel'].includes(this.effect);
        const effectiveSlidesToShow = isStackEffect ? 1 : Math.min(this.slidesToShow, this.slidesCount);
        // Pixel-based offset for variable width to avoid blank spaces
        if (this.variableWidth && this.effect === 'slide') {
            let offsetPx = 0;
            for (let i = 0; i < this.current; i++) {
                offsetPx += slides[i].offsetWidth || 0;
            }
            this.trackTranslate = this.vertical ? `translateY(-${offsetPx}px)` : `translateX(-${offsetPx}px)`;
        }
        slides.forEach((slide, index) => {
            const isActive = index === this.current;
            const offset = index - this.current;
            const isVisible = isStackEffect
                ? (Math.abs(offset) <= 1)
                : (index >= this.current && index < this.current + effectiveSlidesToShow);
            slide.setAttribute('data-index', index.toString());
            slide.setAttribute('data-offset', offset.toString());
            if (isActive) {
                slide.setAttribute('data-active', 'true');
                slide.setAttribute('aria-hidden', 'false');
            }
            else {
                slide.removeAttribute('data-active');
                slide.setAttribute('aria-hidden', 'true');
            }
            if (isVisible) {
                slide.setAttribute('data-visible', 'true');
            }
            else {
                slide.removeAttribute('data-visible');
            }
        });
        if (this.autoHeight) {
            this.syncHeight();
        }
    };
    syncHeight() {
        const slot = this.el.shadowRoot?.querySelector('slot');
        const activeSlide = slot?.assignedElements()[this.current];
        if (activeSlide) {
            const h = activeSlide.offsetHeight;
            if (h > 0)
                this.height = `${h}px`;
        }
    }
    componentWillLoad() {
        this.updateSlidesCount();
        this.updateResponsive();
        this.updateActiveSlides();
    }
    componentDidLoad() {
        if (this.ticker) {
            this.startTicker();
        }
        else if (this.autoplay) {
            this.startAutoplay();
        }
        window.addEventListener('resize', this.updateResponsive);
        document.addEventListener('visibilitychange', this.handleVisibilityChange);
        if (this.lazyLoad) {
            this.setupLazyLoading();
        }
    }
    _ariaAnnouncement = '';
    setupLazyLoading() {
        if (this.observer)
            this.observer.disconnect();
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const img = entry.target;
                    if (img.dataset.src) {
                        img.src = img.dataset.src;
                        img.removeAttribute('data-src');
                    }
                    this.observer.unobserve(entry.target);
                }
            });
        }, { root: this.el, rootMargin: '400px' });
        // Use querySelectorAll to find images in light DOM (slots)
        const lazyImages = this.el.querySelectorAll('img[data-src]');
        lazyImages.forEach(img => this.observer.observe(img));
    }
    handleVisibilityChange = () => {
        if (document.hidden) {
            this.stopAutoplay();
            this.stopTicker();
        }
        else {
            if (this.ticker)
                this.startTicker();
            else if (this.autoplay)
                this.startAutoplay();
        }
    };
    disconnectedCallback() {
        window.removeEventListener('resize', this.updateResponsive);
        document.removeEventListener('visibilitychange', this.handleVisibilityChange);
        // Clean up drag listeners in case the component is destroyed mid-drag.
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
        this.isDragging = false;
        this.stopAutoplay();
        this.stopTicker();
        if (this.animationTimer)
            clearTimeout(this.animationTimer);
        if (this.observer)
            this.observer.disconnect();
    }
    onMouseEnter() {
        this.isHovered = true;
        if (this.pauseOnHover) {
            this.stopAutoplay();
            this.stopTicker();
        }
    }
    onMouseLeave() {
        this.isHovered = false;
        if (this.pauseOnHover) {
            if (this.ticker)
                this.startTicker();
            else if (this.autoplay)
                this.startAutoplay();
        }
    }
    handleWheel(e) {
        if (!this.mouseWheel)
            return;
        if (Math.abs(e.deltaX) > 10 || Math.abs(e.deltaY) > 10) {
            e.preventDefault();
            if (this.vertical) {
                e.deltaY > 0 ? this.next() : this.prev();
            }
            else {
                e.deltaX > 0 ? this.next() : this.prev();
            }
        }
    }
    async toggleFullscreen() {
        this.isFullscreen = !this.isFullscreen;
    }
    async next() {
        this.goTo(this.current + this.slidesToScroll);
    }
    async prev() {
        this.goTo(this.current - this.slidesToScroll);
    }
    async refresh() {
        this.updateSlidesCount();
        this.updateActiveSlides();
    }
    async goTo(index) {
        let next = index;
        const from = this.current;
        if (this.infinite && !this.variableWidth) {
            if (next < 0)
                next = this.slidesCount - 1;
            if (next >= this.slidesCount)
                next = 0;
        }
        else {
            // In variable width or non-infinite, cap at the last feasible item
            const limit = this.variableWidth ? this.slidesCount - 1 : this.slidesCount - this.slidesToShow;
            next = Math.max(0, Math.min(next, limit));
        }
        if (from !== next) {
            this.beforeChange.emit({ from, to: next });
            this.current = next;
            this.resetAutoplayProgress();
            // Sync with other carousel if asNavFor is set
            if (this.asNavFor) {
                const other = document.querySelector(this.asNavFor);
                if (other && typeof other.goTo === 'function') {
                    other.goTo(next);
                }
            }
            this.animationTimer = setTimeout(() => {
                this._ariaAnnouncement = `Slide ${this.current + 1} of ${this.slidesCount}`;
                this.afterChange.emit({ current: this.current });
                this.animationTimer = null;
            }, this.animationDuration);
        }
    }
    updateResponsive = () => {
        // Example: responsive='[{"breakpoint":600,"slidesToShow":1},{"breakpoint":900,"slidesToShow":2}]'
        if (!this.responsive)
            return;
        try {
            const breakpoints = JSON.parse(this.responsive);
            const width = window.innerWidth;
            let slides = this.slidesToShow;
            breakpoints.forEach((bp) => {
                if (width <= bp.breakpoint)
                    slides = bp.slidesToShow;
            });
            this.slidesToShow = slides;
        }
        catch { }
        this.updateSlidesCount();
    };
    startAutoplay = () => {
        if (this.intervalId)
            return;
        const startTime = Date.now();
        this.intervalId = setInterval(() => {
            if (!this.isHovered && !this.isDragging) {
                this.next();
            }
        }, this.autoplayInterval);
        if (this.showProgress) {
            this.progressInterval = setInterval(() => {
                if (!this.isHovered && !this.isDragging) {
                    const elapsed = Date.now() - startTime;
                    this.autoplayProgress = (elapsed % this.autoplayInterval) / this.autoplayInterval * 100;
                }
            }, 16);
        }
    };
    startTicker = () => {
        if (this.tickerRaf)
            return;
        const slot = this.el.shadowRoot?.querySelector('slot');
        const slides = slot ? slot.assignedElements() : Array.from(this.el.children);
        if (slides.length === 0)
            return;
        const animate = () => {
            if (!this.isHovered && !this.isDragging) {
                this.tickerOffset -= this.tickerSpeed;
                // Loop back when we've moved a full slide set (simplification)
                // For a true industrial ticker, we would clone slides, but here we can modulate.
                const totalWidth = slides.reduce((acc, curr) => acc + curr.offsetWidth, 0);
                if (Math.abs(this.tickerOffset) >= totalWidth && this.infinite) {
                    this.tickerOffset = 0;
                }
                this.trackTranslate = this.vertical
                    ? `translateY(${this.tickerOffset}px)`
                    : `translateX(${this.tickerOffset}px)`;
            }
            this.tickerRaf = requestAnimationFrame(animate);
        };
        this.tickerRaf = requestAnimationFrame(animate);
    };
    stopTicker = () => {
        if (this.tickerRaf)
            cancelAnimationFrame(this.tickerRaf);
        this.tickerRaf = 0;
    };
    resetAutoplayProgress = () => {
        if (this.autoplay) {
            this.stopAutoplay();
            this.startAutoplay();
        }
    };
    stopAutoplay = () => {
        if (this.intervalId)
            clearInterval(this.intervalId);
        if (this.progressInterval)
            clearInterval(this.progressInterval);
        this.intervalId = null;
        this.progressInterval = null;
        this.autoplayProgress = 0;
    };
    onIndicatorClick = (idx) => {
        this.goTo(idx);
    };
    onArrowClick = (dir) => {
        dir === 'prev' ? this.prev() : this.next();
    };
    onKeyDown = (e) => {
        if (!this.keyboard)
            return;
        if (e.key === 'ArrowLeft' || e.key === 'ArrowUp')
            this.prev();
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown')
            this.next();
    };
    onTouchStartX = 0;
    onTouchStartY = 0;
    onTouchMove = (e) => {
        if (!this.swipe)
            return;
        const touch = e.touches[0];
        const dx = touch.clientX - this.onTouchStartX;
        const dy = touch.clientY - this.onTouchStartY;
        if (this.vertical && Math.abs(dy) > 30) {
            if (dy > 0)
                this.prev();
            else
                this.next();
        }
        else if (!this.vertical && Math.abs(dx) > 30) {
            if (dx > 0)
                this.prev();
            else
                this.next();
        }
    };
    onTouchStart = (e) => {
        if (!this.swipe)
            return;
        const touch = e.touches[0];
        this.onTouchStartX = touch.clientX;
        this.onTouchStartY = touch.clientY;
        this.isDragging = true;
        this.dragOffset = 0;
    };
    onTouchEnd = () => {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        if (Math.abs(this.dragOffset) > 50) {
            if (this.dragOffset > 0)
                this.prev();
            else
                this.next();
        }
        this.dragOffset = 0;
    };
    // Mouse drag support
    handleMouseDown = (e) => {
        if (!this.enableDrag)
            return;
        this.isDragging = true;
        this.startX = e.clientX;
        this.startY = e.clientY;
        this.dragOffset = 0;
        window.addEventListener('mousemove', this.onMouseMove);
        window.addEventListener('mouseup', this.onMouseUp);
    };
    onMouseMove = (e) => {
        if (!this.isDragging)
            return;
        const dx = e.clientX - this.startX;
        const dy = e.clientY - this.startY;
        this.dragOffset = this.vertical ? dy : dx;
    };
    onMouseUp = () => {
        if (!this.isDragging)
            return;
        this.isDragging = false;
        if (Math.abs(this.dragOffset) > 50) {
            if (this.dragOffset > 0)
                this.prev();
            else
                this.next();
            if (this.pauseOnInteract)
                this.stopAutoplay();
        }
        this.dragOffset = 0;
        window.removeEventListener('mousemove', this.onMouseMove);
        window.removeEventListener('mouseup', this.onMouseUp);
    };
    render() {
        const isHorizontal = !this.vertical;
        const style = isHorizontal ? { width: '100%', flexDirection: 'row' } : { height: '100%', flexDirection: 'column' };
        const prevDisabled = !this.infinite && this.current === 0;
        const nextDisabled = !this.infinite && this.current >= this.slidesCount - this.slidesToShow;
        const renderArrow = (dir) => {
            const isDisabled = dir === 'prev' ? prevDisabled : nextDisabled;
            return (h("ui-button", { variant: "ghost", class: { [`carousel-arrow ${dir}`]: true, 'disabled': isDisabled }, onClick: () => !isDisabled && this.onArrowClick(dir), ariaLabel: `${dir === 'prev' ? 'Previous' : 'Next'} Slide`, disabled: isDisabled, icon: dir === 'prev' ? 'chevron-left' : 'chevron-right', iconLibrary: "lucide", iconSize: "24px" }));
        };
        return (h(Host, { class: {
                'is-fullscreen': this.isFullscreen,
                'auto-height': this.autoHeight,
                'parallax-mode': this.parallax,
                'zoom-active': this.zoomActive,
                'legendary-animate': this.animateContent,
                [`arrows-pos-${this.arrowsPosition}`]: true,
                [`effect-${this.effect}`]: true
            } }, h("div", { class: { 'carousel': true, 'vertical': !isHorizontal, 'dragging': this.isDragging }, style: { width: this.width, height: this.height }, tabindex: this.keyboard ? 0 : -1, onKeyDown: this.onKeyDown, role: "region", "aria-roledescription": "carousel", "aria-label": "Carousel" }, this.showProgress && this.indicatorsType === 'dots' && (h("div", { class: "autoplay-progress" }, h("div", { class: "progress-bar", style: { width: `${this.autoplayProgress}%` } }))), this.arrows && this.arrowsPosition === 'top-right' && (h("div", { class: "carousel-controls" }, renderArrow('prev'), renderArrow('next'))), this.arrows && this.arrowsPosition === 'sides' && renderArrow('prev'), h("div", { class: "carousel-track-wrapper", style: style, onTouchStart: this.onTouchStart, onTouchMove: this.onTouchMove, onTouchEnd: this.onTouchEnd, onMouseDown: this.handleMouseDown }, h("div", { class: "carousel-track", style: {
                transform: this.ticker
                    ? this.trackTranslate
                    : (this.variableWidth && this.effect === 'slide'
                        ? this.trackTranslate
                        : (this.effect === 'slide'
                            ? (isHorizontal
                                ? `translateX(calc(-${this.current * (100 / this.slidesToShow)}% + ${this.dragOffset}px))`
                                : `translateY(calc(-${this.current * (100 / this.slidesToShow)}% + ${this.dragOffset}px))`)
                            : 'none')),
                transition: this.ticker ? 'none' : `transform ${this.animationDuration}ms ${this.animationEasing}`,
                display: 'flex',
                ...style,
            } }, h("slot", { onSlotchange: () => {
                this.updateSlidesCount();
                if (this.lazyLoad)
                    this.setupLazyLoading();
            } }), this.ticker && h("slot", { name: "ticker-clone", onSlotchange: this.updateSlidesCount }))), h("div", { class: "sr-only", "aria-live": "polite", "aria-atomic": "true" }, this._ariaAnnouncement), this.arrows && this.arrowsPosition === 'sides' && renderArrow('next'), this.showCounter && (h("div", { class: "carousel-counter" }, this.current + 1, " / ", this.slidesCount)), this.indicators && (h("div", { class: "carousel-indicators" }, Array.from({ length: this.slidesCount - this.slidesToShow + 1 }, (_, idx) => {
            const active = idx === this.current;
            const type = this.useProgressSegments ? 'segments' : this.indicatorsType;
            if (type === 'segments') {
                return (h("div", { class: { 'progress-segment': true, 'active': active } }, h("div", { class: "progress-fill", style: { width: active ? `${this.autoplayProgress}%` : (idx < this.current ? '100%' : '0%') } })));
            }
            if (type === 'pie') {
                return (h("div", { class: { 'indicator-pie': true, 'active': active }, onClick: () => this.onIndicatorClick(idx) }, h("svg", { viewBox: "0 0 32 32" }, h("circle", { cx: "16", cy: "16", r: "14", fill: "none", stroke: "rgba(255,255,255,0.15)", "stroke-width": "2" }), active && (h("circle", { cx: "16", cy: "16", r: "14", fill: "none", stroke: "white", "stroke-width": "3", "stroke-dasharray": "88", "stroke-dashoffset": 88 - (88 * this.autoplayProgress / 100), style: { transition: 'stroke-dashoffset 0.05s linear' }, transform: "rotate(-90 16 16)" })))));
            }
            return (h("ui-button", { variant: "ghost", size: "xxs", class: { active }, onClick: () => this.onIndicatorClick(idx), ariaLabel: `Go to slide ${idx + 1}` }));
        }))), h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, class: "fullscreen-toggle", onClick: () => this.toggleFullscreen(), ariaLabel: "Toggle Fullscreen", icon: this.isFullscreen ? "minimize" : "maximize", iconLibrary: "lucide", iconSize: "18px" }))));
    }
    static get watchers() { return {
        "current": [{
                "onCurrentChange": 0
            }],
        "slidesToShow": [{
                "onSlidesToShowChange": 0
            }]
    }; }
};
Carousel.style = carouselCss();

export { Carousel as ui_carousel };
