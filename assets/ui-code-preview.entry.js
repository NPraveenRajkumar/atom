import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const uiCodePreviewCss = () => `.sr-only.sc-ui-code-preview{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only.sc-ui-code-preview{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.sc-ui-code-preview-h{display:block;margin:16px 0;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;--preview-border-color:var(--border-default, #e0e0e0);--preview-bg-color:var(--bg-primary, var(--text-standard, #ffffff));--preview-toolbar-bg:var(--bg-primary, #f8f9fa);--preview-highlight-color:var(--color-primary, #1976d2);--preview-text-main:var(--text-primary, #202124);--preview-text-muted:var(--text-secondary, #5f6368);--preview-shadow:0 2px 8px rgba(0, 0, 0, 0.08);--code-bg:var(--bg-primary, #1d1f21)}.code-preview-root.sc-ui-code-preview{border:1px solid var(--preview-border-color);border-radius:8px;overflow:hidden;background:var(--preview-bg-color);box-shadow:var(--preview-shadow);transition:box-shadow 0.3s ease}.code-preview-root.sc-ui-code-preview:hover{box-shadow:0 4px 12px rgba(0, 0, 0, 0.12)}.code-toolbar.sc-ui-code-preview{display:flex;justify-content:space-between;align-items:center;padding:8px 16px;background:var(--preview-toolbar-bg);border-bottom:1px solid var(--preview-border-color);min-height:48px}.left-actions.sc-ui-code-preview{display:flex;align-items:center;gap:16px}.code-label.sc-ui-code-preview{font-size:14px;font-weight:600;color:var(--preview-text-main)}.lang-tabs.sc-ui-code-preview{display:flex;background:var(--bg-primary, #eee);padding:2px;border-radius:6px;gap:2px}.tab-btn.sc-ui-code-preview{background:transparent;border:none;padding:4px 12px;font-size:12px;font-weight:500;border-radius:4px;cursor:pointer;color:var(--preview-text-muted);transition:all 0.2s ease}.tab-btn.sc-ui-code-preview:hover{color:var(--preview-text-main)}.tab-btn.active.sc-ui-code-preview{background:var(--bg-primary, #ffffff);color:var(--preview-highlight-color);box-shadow:0 1px 3px rgba(0, 0, 0, 0.1)}.right-actions.sc-ui-code-preview{display:flex;align-items:center;gap:8px}.icon-action-btn.sc-ui-code-preview{background:transparent;border:1px solid transparent;padding:6px 12px;border-radius:6px;cursor:pointer;display:flex;align-items:center;gap:6px;color:var(--preview-text-muted);transition:all 0.2s ease;font-size:13px;font-weight:500}.icon-action-btn.sc-ui-code-preview:hover{background:rgba(0, 0, 0, 0.04);color:var(--preview-text-main)}.copy-btn.sc-ui-code-preview{padding:6px}.btn-text.sc-ui-code-preview{user-select:none}.chevron-icon.sc-ui-code-preview{transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.chevron-icon.rotated.sc-ui-code-preview{transform:rotate(180deg)}.reset-icon.spinning.sc-ui-code-preview{animation:spin 0.6s cubic-bezier(0.4, 0, 0.2, 1)}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.code-container.sc-ui-code-preview{overflow:hidden;transition:max-height 0.4s cubic-bezier(0.4, 0, 0.2, 1);background:var(--code-bg)}pre[class*=language-].sc-ui-code-preview{margin:0 !important;padding:20px !important;font-size:13px !important;line-height:1.6 !important;background:var(--code-bg) !important;border-radius:0 !important;max-height:100% !important;overflow:auto !important}code[class*=language-].sc-ui-code-preview{font-family:"Fira Code", "Cascadia Code", "Source Code Pro", Consolas, Monaco, "Andale Mono", "Ubuntu Mono", monospace !important;text-shadow:none !important}pre.sc-ui-code-preview::-webkit-scrollbar{width:8px;height:8px}pre.sc-ui-code-preview::-webkit-scrollbar-track{background:var(--bg-primary, #25282c)}pre.sc-ui-code-preview::-webkit-scrollbar-thumb{background:var(--bg-secondary, #4a4d51);border-radius:4px}pre.sc-ui-code-preview::-webkit-scrollbar-thumb:hover{background:var(--bg-secondary, #5a5d61)}@media (max-width: 600px){.btn-text.sc-ui-code-preview{display:none}.code-toolbar.sc-ui-code-preview{padding:8px}}`;

const UiCodePreview = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.uiReset = createEvent(this, "uiReset");
        this.expandedChange = createEvent(this, "expandedChange");
    }
    get el() { return getElement(this); }
    /**
     * The JavaScript/JSX code to display (Legacy)
     */
    jsCode = '';
    /**
     * The TypeScript/TSX code to display (Legacy)
     */
    tsCode = '';
    /**
     * The CSS code to display (Legacy)
     */
    cssCode = '';
    /**
     * The HTML code to display (Legacy)
     */
    htmlCode = '';
    /**
     * Array of code snippets to display.
     * Can be a JSON string or an array of { language, code, label? } objects.
     * Supports any language supported by PrismJS (e.g., 'python', 'java', 'csharp', 'json').
     */
    snippets = [];
    /**
     * Current active language tab
     */
    activeLang = '';
    /**
     * Label for the code block (optional)
     */
    label = '';
    /**
     * Whether the code block is expanded or collapsed
     */
    expanded = true;
    /**
     * Whether to show the reset button
     */
    showReset = false;
    /**
     * Emitted when the reset button is clicked
     */
    uiReset;
    /**
     * Emitted when expansion state changes
     */
    expandedChange;
    copied = false;
    resetting = false;
    prismLoaded = false;
    internalSnippets = [];
    handleStateChange() {
        this.highlightCode();
    }
    handleCodeChange() {
        this.processSnippets();
        if (this.expanded) {
            this.highlightCode();
        }
    }
    componentWillLoad() {
        this.processSnippets();
        if (!this.activeLang && this.internalSnippets.length > 0) {
            this.activeLang = this.internalSnippets[0].language;
        }
    }
    componentDidLoad() {
        this.loadPrism();
    }
    processSnippets() {
        let snippets = [];
        // 1. Process 'snippets' prop
        if (this.snippets) {
            if (typeof this.snippets === 'string') {
                try {
                    snippets = JSON.parse(this.snippets);
                }
                catch (e) {
                    console.error('Failed to parse snippets JSON', e);
                }
            }
            else if (Array.isArray(this.snippets)) {
                snippets = [...this.snippets];
            }
        }
        // 2. Add legacy props if valid and not already covered (or merge them)
        // We append legacy props to ensure backward compatibility
        if (this.tsCode)
            snippets.push({ language: 'typescript', code: this.tsCode, label: 'TS' });
        else if (this.jsCode)
            snippets.push({ language: 'javascript', code: this.jsCode, label: 'JS' }); // Give preference to TS if both exist, usually
        // Note: The original logic treated TS/JS sort of mutually exclusive for default view, but we can show both if explicitly passed
        // However, usually we might want to deduplicate if snippets covers it. For now, simple append.
        if (this.htmlCode)
            snippets.push({ language: 'markup', code: this.htmlCode, label: 'HTML' });
        if (this.cssCode)
            snippets.push({ language: 'css', code: this.cssCode, label: 'CSS' });
        // Deduplicate? (Optional)
        // For now, allow duplicates if user sends them.
        this.internalSnippets = snippets;
        // Logic to set default activeLang if not set or invalid
        const activeExists = this.internalSnippets.some(s => s.language === this.activeLang);
        if (!activeExists && this.internalSnippets.length > 0) {
            this.activeLang = this.internalSnippets[0].language;
        }
    }
    loadPrism() {
        if (window.Prism?.languages?.tsx) {
            // Basic check for existence, but we might need new languages
            this.checkAndLoadLanguages();
            return;
        }
        if (!window.PRISM_LOADING) {
            window.PRISM_LOADING = true;
            const firstScript = document.createElement('script');
            firstScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/prism.min.js';
            firstScript.onload = () => {
                this.checkAndLoadLanguages();
            };
            document.head.appendChild(firstScript);
            const themeLink = document.createElement('link');
            themeLink.rel = 'stylesheet';
            themeLink.href = 'https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/themes/prism-tomorrow.min.css';
            document.head.appendChild(themeLink);
        }
        else {
            // Already loading, wait for it
            const check = setInterval(() => {
                if (window.Prism) {
                    clearInterval(check);
                    this.checkAndLoadLanguages();
                }
            }, 100);
        }
    }
    checkAndLoadLanguages() {
        if (!window.Prism)
            return;
        // Identify needed languages
        const neededLangs = new Set(this.internalSnippets.map(s => s.language));
        // Always load these basics
        ['javascript', 'typescript', 'jsx', 'tsx', 'css', 'markup'].forEach(l => neededLangs.add(l));
        // Map common aliases to Prism components/filenames
        const langMap = {
            'js': 'javascript',
            'ts': 'typescript',
            'html': 'markup',
            'xml': 'markup',
            'svg': 'markup',
            'py': 'python',
            'cs': 'csharp',
            'c#': 'csharp',
            'pdk': 'php',
            'rb': 'ruby',
            'go': 'go',
            'java': 'java',
            'json': 'json',
            'bash': 'bash',
            'sh': 'bash',
            'shell': 'bash'
        };
        const toLoad = [];
        neededLangs.forEach(lang => {
            const mapped = langMap[lang.toLowerCase()] || lang.toLowerCase();
            // Check if loaded
            if (!window.Prism.languages[mapped]) {
                toLoad.push(mapped);
            }
        });
        if (toLoad.length === 0) {
            this.prismLoaded = true;
            this.highlightCode();
            return;
        }
        let loadedCount = 0;
        toLoad.forEach(comp => {
            // Prevent double loading
            if (document.querySelector(`script[src*="prism-${comp}.min.js"]`)) {
                loadedCount++;
                if (loadedCount === toLoad.length) {
                    this.prismLoaded = true;
                    this.highlightCode();
                }
                return;
            }
            const s = document.createElement('script');
            s.src = `https://cdnjs.cloudflare.com/ajax/libs/prism/1.29.0/components/prism-${comp}.min.js`;
            s.onload = () => {
                loadedCount++;
                if (loadedCount === toLoad.length) {
                    this.prismLoaded = true;
                    this.highlightCode();
                }
            };
            s.onerror = () => {
                console.warn(`Failed to load Prism language: ${comp}`);
                loadedCount++;
                // Still proceed even if one fails
                if (loadedCount === toLoad.length) {
                    this.prismLoaded = true;
                    this.highlightCode();
                }
            };
            document.head.appendChild(s);
        });
    }
    highlightCode() {
        if (this.expanded) {
            const activeSnippet = this.internalSnippets.find(s => s.language === this.activeLang) || this.internalSnippets[0];
            const code = activeSnippet ? activeSnippet.code : '';
            setTimeout(() => {
                const codeEl = this.el.querySelector('code');
                if (codeEl) {
                    // Reset content to plain text before Prism highlights it
                    codeEl.textContent = code;
                    if (window.Prism) {
                        window.Prism.highlightElement(codeEl);
                    }
                }
            }, 50);
        }
    }
    handleCopy = (e) => {
        e.stopPropagation();
        const currentSnippet = this.internalSnippets.find(s => s.language === this.activeLang);
        if (currentSnippet?.code) {
            navigator.clipboard.writeText(currentSnippet.code).then(() => {
                this.copied = true;
                setTimeout(() => (this.copied = false), 2000);
            });
        }
    };
    handleReset = (e) => {
        e.stopPropagation();
        this.resetting = true;
        this.uiReset.emit();
        setTimeout(() => (this.resetting = false), 600);
    };
    toggleExpanded = (e) => {
        e.stopPropagation();
        this.expanded = !this.expanded;
        this.expandedChange.emit(this.expanded);
    };
    getPrismLanguage(lang) {
        const map = {
            'js': 'javascript',
            'ts': 'typescript',
            'html': 'markup',
            'c#': 'csharp'
        };
        return map[lang.toLowerCase()] || lang.toLowerCase();
    }
    getLabel(snippet) {
        if (snippet.label)
            return snippet.label;
        const lang = snippet.language.toLowerCase();
        const map = {
            'javascript': 'JS',
            'typescript': 'TS',
            'markup': 'HTML',
            'css': 'CSS',
            'python': 'Python',
            'java': 'Java',
            'csharp': 'C#',
            'go': 'Go',
            'json': 'JSON'
        };
        return map[lang] || lang.toUpperCase();
    }
    render() {
        const activeSnippet = this.internalSnippets.find(s => s.language === this.activeLang) || this.internalSnippets[0];
        const currentCode = activeSnippet ? activeSnippet.code : '';
        const displayLang = activeSnippet ? activeSnippet.language : 'markup';
        const prismLang = this.getPrismLanguage(displayLang);
        return (h("div", { key: '7c018300ea409daaeffdc41909ee4cd6219ee3e7', class: { 'code-preview-root': true, 'is-expanded': this.expanded } }, h("div", { key: 'efca8affcb0b7261ea588b97950b99df29ca696a', class: "code-toolbar" }, h("div", { key: '71d77e7c07764ff350d438eb963328f1def9695f', class: "left-actions" }, this.label && h("span", { key: '54b86ab6f989e15c93d7c6421dfd548be19c3be3', class: "code-label" }, this.label), this.internalSnippets.length > 1 && (h("div", { key: 'b4d2e0ebce935db765f8b125150448f224270998', class: "lang-tabs" }, this.internalSnippets.map(snippet => (h("ui-button", { variant: this.activeLang === snippet.language ? 'primary' : 'ghost', class: { 'active': this.activeLang === snippet.language }, onClick: () => this.activeLang = snippet.language, size: "sm", label: this.getLabel(snippet) }))))), this.internalSnippets.length === 1 && !this.label && (h("span", { key: 'dfd511444c9ac3367ec094a02b39a9b2a75ce80c', class: "code-label", style: { opacity: '0.7', fontSize: '12px' } }, this.getLabel(this.internalSnippets[0])))), h("div", { key: '6db7ea479ab2760e5f4826866a763bb774b2d8d4', class: "right-actions" }, this.showReset && (h("ui-button", { key: 'b54d50c47246f4c9a7a3cd04f15ff69bc5f0ab0e', variant: "ghost", onClick: this.handleReset, title: "Reset demo", ariaLabel: "Reset demo", icon: "rotate-cw", iconLibrary: "lucide", iconOnly: true, size: "sm", loading: this.resetting })), h("ui-button", { key: '1ea0a7befd699d18b05d6bc95ba0290f7d56d447', variant: "ghost", onClick: this.toggleExpanded, title: this.expanded ? 'Hide code' : 'Show code', ariaLabel: this.expanded ? 'Hide code' : 'Show code', size: "sm", label: this.expanded ? 'Hide code' : 'Show code', icon: this.expanded ? 'chevron-up' : 'chevron-down', iconLibrary: "lucide" }), h("ui-button", { key: '42aca403662777a91d6841f0195185dceaeb04da', variant: "ghost", onClick: this.handleCopy, title: "Copy code", ariaLabel: "Copy code", size: "sm", icon: this.copied ? 'check' : 'copy', iconLibrary: "lucide", iconOnly: true, iconColor: this.copied ? '#4caf50' : undefined }))), h("div", { key: '48dee33979bc2f63352c5ed2375951b8341e812a', class: "code-container", style: { maxHeight: this.expanded ? '800px' : '0' } }, h("pre", { key: 'c426c52b4a21389c77ebfa99d7b14fdb6acc778d', class: `language-${prismLang}` }, h("code", { key: 'ece0a1bf1acedae115ac8c5f1c13cbb4065c7ee7', class: `language-${prismLang}` }, currentCode)))));
    }
    static get watchers() { return {
        "activeLang": [{
                "handleStateChange": 0
            }],
        "expanded": [{
                "handleStateChange": 0
            }],
        "jsCode": [{
                "handleCodeChange": 0
            }],
        "tsCode": [{
                "handleCodeChange": 0
            }],
        "htmlCode": [{
                "handleCodeChange": 0
            }],
        "cssCode": [{
                "handleCodeChange": 0
            }],
        "snippets": [{
                "handleCodeChange": 0
            }]
    }; }
};
UiCodePreview.style = uiCodePreviewCss();

export { UiCodePreview as ui_code_preview };
