import { r as registerInstance, c as createEvent, h, H as Host } from './index-DUsoYu9r.js';

const emptyStateCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;width:100%}.empty-state-container{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;box-sizing:border-box}.empty-state-container.full-height{min-height:100vh}.empty-state-container.variant-default{background:transparent}.empty-state-container.variant-outlined{border:2px dashed var(--border-strong, #d1d5db);border-radius:12px}.empty-state-container.variant-filled{background:var(--bg-primary, #f9fafb);border-radius:12px}.empty-state-container.variant-minimal{padding:24px}.empty-state-container.variant-glass{background:rgba(var(--ui-color-surface-rgb, 255, 255, 255), 0.4);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border:1px solid rgba(var(--ui-color-surface-rgb, 255, 255, 255), 0.3);border-radius:20px;box-shadow:0 12px 40px rgba(0, 0, 0, 0.1)}.empty-state-container.variant-glass .empty-state-title{color:var(--ui-color-text, var(--text-primary, #111827))}.empty-state-container.variant-glass .empty-state-title{color:var(--text-primary, #1a1a1a);text-shadow:0 1px 2px rgba(255, 255, 255, 0.5)}.empty-state-container.rounded{border-radius:16px}.empty-state-container.elevated{box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)}.empty-state-container.compact{padding:16px}.empty-state-container.compact .empty-state-icon{margin-bottom:12px}.empty-state-container.compact .empty-state-title{font-size:1.1rem;margin-bottom:4px}.empty-state-container.compact .empty-state-message{font-size:0.85rem;margin-bottom:16px}.empty-state-container.compact .empty-state-actions{margin-bottom:0;gap:8px}.empty-state-container.compact .action-button{padding:6px 12px;font-size:0.8rem}.empty-state-container.size-sm{padding:24px 16px}.empty-state-container.size-sm .empty-state-icon i{font-size:48px}.empty-state-container.size-sm .empty-state-title{font-size:1.25rem}.empty-state-container.size-sm .empty-state-message{font-size:0.875rem}.empty-state-container.size-md{padding:48px 24px}.empty-state-container.size-md .empty-state-icon i{font-size:64px}.empty-state-container.size-md .empty-state-title{font-size:1.5rem}.empty-state-container.size-md .empty-state-message{font-size:1rem}.empty-state-container.size-lg{padding:64px 32px}.empty-state-container.size-lg .empty-state-icon i{font-size:96px}.empty-state-container.size-lg .empty-state-title{font-size:2rem}.empty-state-container.size-lg .empty-state-message{font-size:1.125rem}.empty-state-container.align-left{align-items:flex-start;text-align:left}.empty-state-container.align-left .empty-state-content{align-items:flex-start}.empty-state-container.align-center{align-items:center;text-align:center}.empty-state-container.align-center .empty-state-content{align-items:center}.empty-state-container.align-right{align-items:flex-end;text-align:right}.empty-state-container.align-right .empty-state-content{align-items:flex-end}.empty-state-container.animated .empty-state-icon,.empty-state-container.animated .empty-state-image,.empty-state-container.animated .empty-state-illustration{animation:fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1), bob 4s ease-in-out infinite 0.8s}.empty-state-container.animated .empty-state-title{animation:fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.1s both}.empty-state-container.animated .empty-state-message{animation:fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.2s both}.empty-state-container.animated .empty-state-actions{animation:fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) 0.3s both}.empty-state-container:hover .empty-state-icon i,.empty-state-container:hover .empty-state-illustration ui-icon{transform:scale(1.05) translateY(-5px);filter:drop-shadow(0 10px 15px rgba(0, 0, 0, 0.1))}.empty-state-content{display:flex;flex-direction:column;align-items:center;max-width:100%;width:100%}.empty-state-icon{margin-bottom:24px}.empty-state-icon i{font-size:64px;color:var(--text-muted, #9ca3af);transition:color 0.3s ease}.type-error .empty-state-icon i{color:var(--color-danger, #ef4444)}.type-401 .empty-state-icon i{color:var(--color-primary, #8b5cf6);animation:fadeIn 1s ease-in-out infinite alternate}.type-403 .empty-state-icon i{color:var(--color-danger, #f43f5e)}.type-404 .empty-state-icon i{color:var(--color-warning, #f59e0b);animation:glitch 2.5s linear infinite alternate}.type-offline .empty-state-icon i{color:var(--text-muted, #64748b);animation:pulse-signal 2s ease-in-out infinite}.type-500 .empty-state-icon i{color:var(--color-danger, #ef4444);animation:glitch 0.5s linear infinite alternate;animation-delay:2s}.type-no-results .empty-state-icon i{color:var(--text-muted, #6b7280)}.type-coming-soon .empty-state-icon i{color:var(--color-success, #3dcd58)}.type-maintenance .empty-state-icon i{color:var(--color-warning, #f59e0b);animation:rotate-slow 6s linear infinite}.type-onboarding .empty-state-icon i{color:var(--color-primary, #10b981);animation:fadeInUp 1s ease-out}.type-accomplishment .empty-state-icon i,.type-success .empty-state-icon i{color:var(--color-success, #10b981);animation:popOut 1.5s ease-out infinite alternate}.type-paywall .empty-state-icon i{color:var(--color-warning-hover, #d97706);animation:bounce 2s infinite}.type-no-messages .empty-state-icon i{color:var(--color-danger, #ec4899)}.type-no-notifications .empty-state-icon i{color:var(--color-danger, #f43f5e)}.type-no-favorites .empty-state-icon i{color:var(--color-danger, #ef4444)}.type-429 .empty-state-icon i{color:var(--color-primary, #6366f1);animation:pulse-signal 2s infinite}.type-418 .empty-state-icon i{color:var(--color-primary, #7c3aed)}.empty-state-image{margin-bottom:24px;max-width:300px}.empty-state-image img{width:100%;height:auto;object-fit:contain;border-radius:8px}.size-lg .empty-state-image{max-width:400px}.empty-state-illustration{margin-bottom:24px;position:relative;display:flex;justify-content:center;align-items:center}.empty-state-illustration .illustration-placeholder{width:120px;height:120px;background:linear-gradient(135deg, rgba(var(--color-success-rgb, 61, 205, 88), 0.1), rgba(var(--color-primary-rgb, 59, 130, 246), 0.1));border-radius:30% 70% 70% 30%/30% 30% 70% 70%;display:flex;align-items:center;justify-content:center;animation:morph 8s ease-in-out infinite;position:relative;overflow:hidden}.empty-state-illustration .illustration-placeholder i{font-size:48px;color:var(--primary-color, var(--color-primary, #10b981));z-index:2}.empty-state-illustration .illustration-placeholder .illustration-glow{position:absolute;width:100%;height:100%;background:radial-gradient(circle, rgba(var(--color-success-rgb, 61, 205, 88), 0.2) 0%, transparent 70%);animation:pulse 4s ease-in-out infinite}.empty-state-illustration img{max-width:100%;height:auto;border-radius:12px;animation:float 6s ease-in-out infinite}.empty-state-title{margin:0 0 12px 0;font-size:1.5rem;font-weight:600;color:var(--empty-state-title-color, var(--text-primary, #111827));line-height:1.3}.empty-state-message{margin:0 0 32px 0;font-size:1rem;color:var(--empty-state-message-color, var(--text-muted, #6b7280));line-height:1.6;max-width:100%}.empty-state-actions{display:flex;flex-direction:column;gap:16px;width:100%;max-width:400px;margin-bottom:24px}.empty-state-actions .simple-actions,.empty-state-actions .complex-actions{display:flex;gap:12px;justify-content:center;flex-wrap:wrap}.empty-state-search{display:flex;align-items:center;gap:12px;background:var(--ui-color-surface-soft, rgba(0, 0, 0, 0.03));border:1px solid var(--ui-color-border, var(--border-default, #e5e7eb));padding:8px 16px;border-radius:12px;margin-bottom:8px;width:100%;transition:all 0.2s}.empty-state-search:focus-within{border-color:var(--color-primary, #10b981);box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);background:var(--bg-primary, #ffffff)}.empty-state-search ui-icon{color:var(--text-muted, #6b7280)}.empty-state-search input{border:none;background:transparent;outline:none;font-size:0.9375rem;flex:1;color:inherit}.empty-state-timer{margin-bottom:16px;width:100%;text-align:center}.empty-state-timer .timer-text{font-size:0.85rem;color:var(--text-muted, #6b7280);font-weight:500;display:block;margin-bottom:8px}.empty-state-timer .timer-progress{height:4px;background:var(--bg-secondary, #f3f4f6);border-radius:2px;overflow:hidden}.empty-state-timer .timer-progress-bar{height:100%;background:var(--color-primary, #10b981);transition:width 1s linear}.empty-state-description{margin:-16px 0 32px 0;font-size:0.875rem;color:var(--text-muted, #9ca3af);max-width:80%;line-height:1.5}.action-button{display:inline-flex;align-items:center;gap:8px;padding:12px 24px;border:none;border-radius:8px;font-size:0.9375rem;font-weight:500;cursor:pointer;transition:all 0.2s ease;white-space:nowrap}.action-button i{font-size:1rem}.action-button.primary{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff)}.action-button.primary:hover{background:var(--color-primary-hover, #2563eb);transform:translateY(-1px);box-shadow:0 4px 12px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3)}.action-button.primary:active{transform:translateY(0)}.action-button.primary.is-loading{opacity:0.8;cursor:wait;pointer-events:none}.action-button.primary.is-loading i{margin-right:8px}.action-button.secondary{background:var(--bg-secondary, #f3f4f6);color:var(--text-secondary, #374151);border:1px solid var(--border-default, #e5e7eb)}.action-button.secondary:hover{background:var(--bg-primary, #e5e7eb);border-color:var(--border-strong, #d1d5db)}.action-button.secondary:active{background:var(--bg-secondary, #d1d5db)}.action-button.text{background:transparent;color:var(--color-success, #3dcd58);padding:8px 16px}.action-button.text:hover{background:rgba(var(--color-success-rgb, 61, 205, 88), 0.1)}.action-button.text:active{background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.15)}.size-sm .action-button{padding:8px 16px;font-size:0.875rem}.size-lg .action-button{padding:14px 28px;font-size:1rem}.empty-state-items{margin-bottom:24px;width:100%;max-width:400px}.items-title{margin:0 0 12px 0;font-size:0.875rem;font-weight:600;color:var(--text-muted, #6b7280);text-transform:uppercase;letter-spacing:0.05em}.items-list{list-style:none;padding:0;margin:0;display:flex;flex-direction:column;gap:8px}.item{display:flex;align-items:center;gap:12px;padding:12px 16px;background:var(--bg-primary, #f9fafb);border:1px solid var(--border-default, #e5e7eb);border-radius:8px;cursor:pointer;transition:all 0.2s ease}.item i{font-size:1rem;color:var(--text-muted, #6b7280);flex-shrink:0}.item span{font-size:0.9375rem;color:var(--text-secondary, #374151);flex:1}.item:hover{background:var(--bg-secondary, #f3f4f6);border-color:var(--border-strong, #d1d5db);transform:translateX(4px)}.item:active{background:var(--bg-primary, #e5e7eb)}.empty-state-back{align-self:flex-start;margin-bottom:24px}.back-button{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;background:transparent;border:none;border-radius:6px;color:var(--text-muted, #6b7280);font-size:0.9375rem;cursor:pointer;transition:all 0.2s ease}.back-button i{font-size:0.875rem}.back-button:hover{background:var(--bg-secondary, #f3f4f6);color:var(--text-secondary, #374151)}.back-button:active{background:var(--bg-primary, #e5e7eb)}@keyframes fadeInUp{from{opacity:0;transform:translateY(40px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}@keyframes bob{0%,100%{transform:translateY(0)}50%{transform:translateY(-12px)}}@keyframes glitch{0%{transform:translate(0)}2%{transform:translate(-2px, 1.5px)}4%{transform:translate(-2px, -1.5px)}6%{transform:translate(2px, 1.5px)}8%{transform:translate(2px, -1.5px)}10%{transform:translate(0)}100%{transform:translate(0)}}@keyframes pulse-signal{0%,100%{opacity:1;transform:scale(1)}50%{opacity:0.5;transform:scale(0.92)}}@keyframes rotate-slow{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}@keyframes morph{0%{border-radius:30% 70% 70% 30%/30% 30% 70% 70%}50%{border-radius:50% 50% 20% 80%/25% 80% 20% 75%}100%{border-radius:30% 70% 70% 30%/30% 30% 70% 70%}}@keyframes float{0%,100%{transform:translateY(0)}50%{transform:translateY(-10px)}}@keyframes pulse{0%,100%{transform:scale(1);opacity:0.5}50%{transform:scale(1.2);opacity:0.8}}.confetti-active{position:relative;overflow:hidden}.confetti-active::before,.confetti-active::after{content:"🎉";position:absolute;font-size:2rem;animation:popOut 1s ease-out forwards;pointer-events:none;z-index:10}.confetti-active::before{left:10%;top:20%;animation-delay:0.1s}.confetti-active::after{right:10%;top:30%;animation-delay:0.3s}@keyframes popOut{0%{transform:scale(0) rotate(0deg);opacity:0}50%{transform:scale(1.5) rotate(15deg);opacity:1}100%{transform:scale(1.2) rotate(0deg);opacity:0;transform:translateY(-50px)}}::slotted([slot=custom-content]){margin:16px 0}::slotted([slot=footer]){margin-top:24px}@media (max-width: 640px){.empty-state-container{padding:32px 16px}.empty-state-container.size-lg{padding:48px 20px}.empty-state-icon i{font-size:48px !important}.empty-state-image{max-width:200px !important}.empty-state-title{font-size:1.25rem !important}.empty-state-message{font-size:0.875rem !important}.action-button{width:100%;justify-content:center}.simple-actions,.complex-actions{flex-direction:column;width:100%}}`;

const EmptyState = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.actionClick = createEvent(this, "actionClick");
        this.backClick = createEvent(this, "backClick");
        this.itemClick = createEvent(this, "itemClick");
        this.searchChange = createEvent(this, "searchChange");
        this.retry = createEvent(this, "retry");
    }
    // Content Props
    heading;
    message;
    type = 'no-data';
    // Visual Props
    icon;
    image;
    imageAlt = 'Empty state';
    iconColor;
    iconSize = '64px';
    // Style Props
    variant = 'default';
    size = 'md';
    align = 'center';
    rounded = false;
    elevated = false;
    fullHeight = false;
    padding;
    maxWidth = '500px';
    compact = false;
    loadingAction;
    illustration;
    confetti = false;
    /** Primary description / Troubleshooting tip */
    description;
    /** Show a search box within the empty state (useful for no-results) */
    showSearch = false;
    searchPlaceholder = 'Try another search...';
    searchValue = '';
    /** Auto-retry delay in seconds for error/offline states */
    retryDelay = 0;
    retryLabel = 'Retrying in {n}s...';
    // Actions
    actions = '[]';
    primaryAction;
    primaryActionIcon;
    secondaryAction;
    secondaryActionIcon;
    // List Items
    items = '[]';
    itemsTitle;
    // Additional Features
    showBackButton = false;
    backButtonLabel = 'Go Back';
    animated = true;
    customClass;
    // Events
    actionClick;
    backClick;
    itemClick;
    searchChange;
    retry;
    parseActions() {
        if (typeof this.actions === 'string') {
            try {
                return JSON.parse(this.actions);
            }
            catch {
                return [];
            }
        }
        return this.actions || [];
    }
    parseItems() {
        if (typeof this.items === 'string') {
            try {
                return JSON.parse(this.items);
            }
            catch {
                return [];
            }
        }
        return this.items || [];
    }
    handleActionClick(action) {
        this.actionClick.emit({ action: action.label, value: action.value });
    }
    handlePrimaryAction() {
        if (this.primaryAction) {
            this.actionClick.emit({ action: 'primary', value: this.primaryAction });
        }
    }
    handleSecondaryAction() {
        if (this.secondaryAction) {
            this.actionClick.emit({ action: 'secondary', value: this.secondaryAction });
        }
    }
    handleBackClick() {
        this.backClick.emit();
    }
    handleItemClick(item) {
        this.itemClick.emit({ item });
    }
    handleSearchChange(e) {
        const input = e.target;
        this.searchChange.emit(input.value);
    }
    currentRetryCount = 0;
    retryTimer;
    onRetryDelayChange() {
        if (this.retryDelay > 0) {
            this.startRetryTimer();
        }
        else {
            if (this.retryTimer)
                clearInterval(this.retryTimer);
        }
    }
    componentWillLoad() {
        if (this.retryDelay > 0) {
            this.startRetryTimer();
        }
    }
    startRetryTimer() {
        this.currentRetryCount = this.retryDelay;
        if (this.retryTimer)
            clearInterval(this.retryTimer);
        this.retryTimer = setInterval(() => {
            this.currentRetryCount--;
            if (this.currentRetryCount <= 0) {
                clearInterval(this.retryTimer);
                this.retry.emit();
            }
        }, 1000);
    }
    disconnectedCallback() {
        if (this.retryTimer)
            clearInterval(this.retryTimer);
    }
    getDefaultContent() {
        const defaults = {
            'no-data': {
                icon: 'inbox',
                library: 'fontawesome',
                heading: 'No Data Available',
                message: 'There is no data to display at the moment.',
            },
            'no-results': {
                icon: 'search',
                library: 'fontawesome',
                heading: 'No Results Found',
                message: 'We couldn\'t find any results matching your search.',
            },
            'error': {
                icon: 'exclamation-triangle',
                library: 'fontawesome',
                heading: 'Something Went Wrong',
                message: 'An error occurred while loading the data. Please try again.',
            },
            '404': {
                icon: 'frown',
                library: 'fontawesome',
                heading: '404 - Not Found',
                message: 'The resource you are looking for has vanished into the void.',
            },
            '401': {
                icon: 'user-lock',
                library: 'fontawesome',
                heading: '401 - Unauthorized',
                message: 'Please log in to access this protected area.',
            },
            '403': {
                icon: 'ban',
                library: 'fontawesome',
                heading: '403 - Forbidden',
                message: 'You do not have the required permissions to view this content.',
            },
            '405': {
                icon: 'hand-paper',
                library: 'fontawesome',
                heading: '405 - Method Not Allowed',
                message: 'This action is not supported for this resource.',
            },
            '410': {
                icon: 'trash-alt',
                library: 'fontawesome',
                heading: '410 - Gone',
                message: 'This resource has been permanently removed.',
            },
            '418': {
                icon: 'coffee',
                library: 'fontawesome',
                heading: '418 - I\'m a Teapot',
                message: 'I refuse to brew coffee because I am, short and stout, a teapot.',
            },
            '429': {
                icon: 'hourglass-half',
                library: 'fontawesome',
                heading: '429 - Too Many Requests',
                message: 'You\'ve sent too many requests. Please take a breath and try again later.',
            },
            '500': {
                icon: 'server',
                library: 'fontawesome',
                heading: '500 - Server Error',
                message: 'Something went wrong on our end. Our best minds are on it.',
            },
            '503': {
                icon: 'plug',
                library: 'fontawesome',
                heading: '503 - Service Unavailable',
                message: 'The server is temporarily down for maintenance or overloaded.',
            },
            'offline': {
                icon: 'wifi',
                library: 'fontawesome',
                heading: 'No Internet Connection',
                message: 'Check your network cables, modem, and router or try reconnecting.',
            },
            'onboarding': {
                icon: 'paper-plane',
                library: 'fontawesome',
                heading: 'Welcome Abroad!',
                message: 'Get started by creating your first project or inviting teammates.',
            },
            'accomplishment': {
                icon: 'trophy',
                library: 'fontawesome',
                heading: 'You\'re All Caught Up!',
                message: 'Great job! You\'ve completed everything on your list for today.',
            },
            'success': {
                icon: 'check-circle',
                library: 'fontawesome',
                heading: 'Mission Accomplished',
                message: 'Action completed successfully. Everything looks perfect.',
            },
            'no-messages': {
                icon: 'comment-slash',
                library: 'fontawesome',
                heading: 'No Messages Yet',
                message: 'It\'s quiet here. Start a conversation to see messages appear.',
            },
            'no-notifications': {
                icon: 'bell-slash',
                library: 'fontawesome',
                heading: 'No New Notifications',
                message: 'We\'ll let you know when something important happens.',
            },
            'no-favorites': {
                icon: 'heart-broken',
                library: 'fontawesome',
                heading: 'No Favorites Saved',
                message: 'Tap the heart icon on items you love to save them here.',
            },
            'no-tasks': {
                icon: 'clipboard-check',
                library: 'fontawesome',
                heading: 'No Tasks Found',
                message: 'Your list is empty. Add a new task to stay organized.',
            },
            'no-history': {
                icon: 'history',
                library: 'fontawesome',
                heading: 'No Recent Activity',
                message: 'Your history will appear here once you start using the app.',
            },
            'no-files': {
                icon: 'folder-open',
                library: 'fontawesome',
                heading: 'Folder is Empty',
                message: 'Drag and drop files here to upload or click "New File".',
            },
            'paywall': {
                icon: 'crown',
                library: 'fontawesome',
                heading: 'Premium Feature',
                message: 'Unlock this and 50+ other features with a Pro subscription.',
            },
            'no-search': {
                icon: 'search-minus',
                library: 'fontawesome',
                heading: 'No Results Matching Filters',
                message: 'Try adjusting your search terms or filters to find what you need.',
            },
            'empty': {
                icon: 'folder-open',
                library: 'fontawesome',
                heading: 'Nothing Here Yet',
                message: 'Get started by adding your first item.',
            },
            'coming-soon': {
                icon: 'rocket',
                library: 'fontawesome',
                heading: 'Coming Soon',
                message: 'This feature is under development and will be available soon.',
            },
            'maintenance': {
                icon: 'tools',
                library: 'fontawesome',
                heading: 'Under Maintenance',
                message: 'We are currently performing maintenance. Please check back later.',
            },
            'custom': {
                icon: 'info-circle',
                library: 'fontawesome',
                heading: 'Empty State',
                message: 'No content available.',
            },
        };
        return defaults[this.type] || defaults.custom;
    }
    renderIcon() {
        const defaultContent = this.getDefaultContent();
        const iconToShow = this.icon || defaultContent.icon;
        if (this.image) {
            return (h("div", { class: "empty-state-image" }, h("img", { src: this.image, alt: this.imageAlt })));
        }
        if (this.illustration) {
            // For now, we'll map simple keys to basic SVG patterns or use the string as a URL if it looks like one
            const isUrl = this.illustration.startsWith('http') || this.illustration.startsWith('/') || this.illustration.includes('.');
            if (isUrl) {
                return (h("div", { class: "empty-state-illustration" }, h("img", { src: this.illustration, alt: this.imageAlt })));
            }
            // Built-in illustrations logic
            const illustrations = {
                'no-data': (h("svg", { viewBox: "0 0 200 160", fill: "none", class: "illust-svg" }, h("rect", { x: "40", y: "40", width: "120", height: "80", rx: "8", fill: "currentColor", "fill-opacity": "0.1" }), h("path", { d: "M40 60h120M70 80h60M70 100h30", stroke: "currentColor", "stroke-width": "2", "stroke-opacity": "0.2", "stroke-linecap": "round" }), h("circle", { cx: "100", cy: "80", r: "20", fill: "currentColor", "fill-opacity": "0.05" }))),
                'error': (h("svg", { viewBox: "0 0 200 160", fill: "none", class: "illust-svg illust-error" }, h("circle", { cx: "100", cy: "80", r: "50", fill: "currentColor", "fill-opacity": "0.1" }), h("path", { d: "M100 50v40M100 105v5", stroke: "currentColor", "stroke-width": "6", "stroke-linecap": "round" }), h("path", { d: "M60 120l80-80", stroke: "currentColor", "stroke-width": "2", "stroke-opacity": "0.3", "stroke-dasharray": "5 5" }))),
                'no-results': (h("svg", { viewBox: "0 0 200 160", fill: "none", class: "illust-svg" }, h("circle", { cx: "90", cy: "70", r: "30", stroke: "currentColor", "stroke-width": "3", "stroke-opacity": "0.2" }), h("path", { d: "M115 95l30 30", stroke: "currentColor", "stroke-width": "3", "stroke-opacity": "0.2", "stroke-linecap": "round" }), h("rect", { x: "40", y: "110", width: "120", height: "4", rx: "2", fill: "currentColor", "fill-opacity": "0.1" }))),
                'offline': (h("svg", { viewBox: "0 0 200 160", fill: "none", class: "illust-svg" }, h("path", { d: "M50 80a70 70 0 0 1 100 0M70 100a40 40 0 0 1 60 0M100 120h.01", stroke: "currentColor", "stroke-width": "3", "stroke-opacity": "0.2", "stroke-linecap": "round" }), h("line", { x1: "60", y1: "50", x2: "140", y2: "130", stroke: "currentColor", "stroke-width": "2", "stroke-opacity": "0.5" }))),
            };
            return (h("div", { class: `empty-state-illustration illustration-${this.illustration}` }, illustrations[this.illustration] || (h("div", { class: "illustration-placeholder" }, h("ui-icon", { name: iconToShow, library: defaultContent.library || 'fontawesome', size: "48px" }), h("div", { class: "illustration-glow" })))));
        }
        if (iconToShow) {
            return (h("div", { class: "empty-state-icon" }, h("slot", { name: "icon" }, h("ui-icon", { name: iconToShow, library: defaultContent.library || 'fontawesome', size: this.iconSize, color: this.iconColor || 'currentColor' }))));
        }
        return (h("div", { class: "empty-state-icon" }, h("slot", { name: "icon" })));
    }
    renderActions() {
        const parsedActions = this.parseActions();
        const hasSimpleActions = this.primaryAction || this.secondaryAction;
        const hasComplexActions = parsedActions.length > 0;
        if (!hasSimpleActions && !hasComplexActions) {
            return null;
        }
        return (h("div", { class: "empty-state-actions" }, this.showSearch && (h("div", { class: "empty-state-search" }, h("ui-icon", { name: "search", library: "lucide", size: "16px" }), h("ui-input", { placeholder: this.searchPlaceholder, value: this.searchValue, onInput: (e) => this.handleSearchChange(e) }))), this.retryDelay > 0 && this.currentRetryCount > 0 && (h("div", { class: "empty-state-timer" }, h("span", { class: "timer-text" }, this.retryLabel.replace('{n}', this.currentRetryCount.toString())), h("div", { class: "timer-progress" }, h("div", { class: "timer-progress-bar", style: { width: `${(this.currentRetryCount / this.retryDelay) * 100}%` } })))), hasSimpleActions && (h("div", { class: "simple-actions" }, this.primaryAction && (h("ui-button", { variant: "primary", loading: this.loadingAction === 'primary', disabled: this.loadingAction === 'primary', onClick: () => this.handlePrimaryAction(), icon: this.primaryActionIcon, iconLibrary: "fontawesome", label: this.primaryAction })), this.secondaryAction && (h("ui-button", { variant: "secondary", loading: this.loadingAction === 'secondary', disabled: this.loadingAction === 'secondary', onClick: () => this.handleSecondaryAction(), icon: this.secondaryActionIcon?.replace(/^fa[sb]? fa-/, ''), iconLibrary: "fontawesome", label: this.secondaryAction })))), hasComplexActions && (h("div", { class: "complex-actions" }, parsedActions.map((action) => (h("ui-button", { variant: (action.variant || 'secondary'), loading: this.loadingAction === action.value || this.loadingAction === action.label, disabled: this.loadingAction === action.value || this.loadingAction === action.label, onClick: () => this.handleActionClick(action), icon: action.icon?.replace(/^fa[sb]? fa-/, ''), iconLibrary: "fontawesome", label: action.label }))))), h("slot", { name: "actions" })));
    }
    renderItems() {
        const parsedItems = this.parseItems();
        if (parsedItems.length === 0) {
            return null;
        }
        return (h("div", { class: "empty-state-items" }, this.itemsTitle && h("h4", { class: "items-title" }, this.itemsTitle), h("ul", { class: "items-list" }, parsedItems.map((item) => (h("li", { class: "item", onClick: () => this.handleItemClick(item) }, item.icon && h("ui-icon", { name: item.icon, library: "fontawesome", size: "14px" }), h("span", null, item.label)))))));
    }
    renderBackButton() {
        if (!this.showBackButton) {
            return null;
        }
        return (h("div", { class: "empty-state-back" }, h("ui-button", { variant: "ghost", onClick: () => this.handleBackClick(), icon: "arrow-left", iconLibrary: "fontawesome", label: this.backButtonLabel, size: "sm" })));
    }
    render() {
        const defaultContent = this.getDefaultContent();
        const headingToShow = this.heading || defaultContent.heading;
        const messageToShow = this.message || defaultContent.message;
        const containerClasses = {
            'empty-state-container': true,
            [`variant-${this.variant}`]: true,
            [`size-${this.size}`]: true,
            [`align-${this.align}`]: true,
            [`type-${this.type}`]: true,
            'rounded': this.rounded,
            'elevated': this.elevated,
            'full-height': this.fullHeight,
            'animated': this.animated,
            'compact': this.compact,
            'confetti-active': this.confetti,
            ...(this.customClass ? { [this.customClass]: true } : {}),
        };
        const containerStyle = {
            padding: this.padding || undefined,
            maxWidth: this.maxWidth || undefined,
        };
        return (h(Host, { key: '0f7a224ca36c6e2fcda778b134ed8d8d4396d9b6' }, h("div", { key: '6ac5efd99135e6484d84139250e84e8e22b7fedd', class: containerClasses, style: containerStyle }, this.renderBackButton(), h("div", { key: 'c8ab7670d312a8ea4e5e69b2331db1b6374476c4', class: "empty-state-content" }, this.renderIcon(), h("slot", { key: '11d5618957f52edc36c6db9370b630bf02ef58fc', name: "heading" }, headingToShow && h("h2", { key: '786051e59375b5e04cad426320fc768a0622cf82', class: "empty-state-title" }, headingToShow)), h("slot", { key: '11a7eb49b8e3eb457942125ad1512bfaf062228b', name: "message" }, messageToShow && h("p", { key: '7c74c4c3721f562ae616ee1992ab0782f81f6b3d', class: "empty-state-message" }, messageToShow)), this.description && (h("p", { key: 'a49d0e45e660f30a3af67c6db480cf2ce2a5717e', class: "empty-state-description" }, this.description)), h("slot", { key: '31d8ea03a88a1032c02fa6ae1bb511d1a239cd62', name: "custom-content" }), this.renderItems(), this.renderActions(), h("slot", { key: '20d487b415fe17ba94746fafd2bbf97dfa033b0d', name: "footer" })))));
    }
    static get watchers() { return {
        "retryDelay": [{
                "onRetryDelayChange": 0
            }]
    }; }
};
EmptyState.style = emptyStateCss();

export { EmptyState as ui_empty_state };
