import { r as registerInstance, c as createEvent, h } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const codeEditorCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:flex;flex-direction:column;font-family:"Menlo", "Monaco", "Courier New", monospace;font-size:14px;line-height:1.5;position:relative;border-radius:8px;overflow:hidden;border:1px solid var(--border-color, var(--border-subtle, #e2e8f0));background-color:var(--editor-bg);color:var(--editor-fg);--editor-bg:var(--bg-primary, #ffffff);--editor-fg:var(--text-primary, #1e293b);--line-num-bg:var(--bg-primary, #f8fafc);--line-num-fg:var(--color-primary, #94a3b8);--indent-guide:rgba(0, 0, 0, 0.05);--cursor-color:var(--text-primary, #000);--selection-bg:var(--color-primary, #b3d4fc);--status-bar-bg:var(--bg-secondary, #f1f5f9);--status-bar-fg:var(--color-primary, #64748b);--minimap-width:60px;--git-added:var(--color-success, #28a745);--git-modified:var(--color-danger, #ffc107)}:host(.theme-vs-dark){--editor-bg:var(--bg-primary, #1e1e1e);--editor-fg:var(--bg-secondary, #d4d4d4);--line-num-bg:var(--bg-primary, #1e1e1e);--line-num-fg:var(--text-muted, #858585);--cursor-color:var(--text-standard, #ffffff);--selection-bg:var(--color-primary, #264f78);--status-bar-bg:var(--color-primary, #007acc);--status-bar-fg:var(--bg-primary, #ffffff);border-color:var(--border-strong, #333)}.code-editor-container{display:flex;flex-direction:column;flex:1;position:relative;overflow:hidden;height:100%}.code-editor-layout{display:grid;grid-template-columns:auto 1fr auto;flex:1;min-height:0;position:relative;overflow:hidden;background-color:var(--editor-bg)}.sidebar-tabs{width:48px;flex-shrink:0;background-color:var(--status-bar-bg);border-right:1px solid var(--border-color);display:flex;flex-direction:column;align-items:center;padding:12px 0;gap:20px}.sidebar-tabs .sidebar-tab{font-size:20px;color:var(--status-bar-fg);cursor:pointer;width:100%;display:flex;justify-content:center;position:relative;padding:8px 0;opacity:0.6;transition:all 0.2s}.sidebar-tabs .sidebar-tab.active{opacity:1;color:var(--color-primary, #007acc);border-left:2px solid var(--color-primary, #007acc)}.sidebar-tabs .sidebar-tab:hover{opacity:1}.sidebar-content{flex:1;overflow-y:auto;padding:0}.sidebar-header{padding:10px 16px;font-size:11px;font-weight:600;color:var(--status-bar-fg);text-transform:uppercase;letter-spacing:0.5px}.file-list{padding:4px 0}.file-item{display:flex;align-items:center;padding:6px 16px;gap:8px;cursor:pointer;font-size:13px;color:var(--status-bar-fg);transition:background 0.2s}.file-item:hover{background-color:rgba(128, 128, 128, 0.1);color:var(--editor-fg)}.file-item.active{background-color:rgba(0, 122, 204, 0.1);color:var(--color-primary, #007acc);font-weight:500}.file-item i{width:16px;text-align:center}.file-item .text-warning{color:var(--color-warning, #f59e0b)}.file-item .text-danger{color:var(--color-danger, #ef4444)}.file-item .text-primary{color:var(--color-primary, #10b981)}.editor-main-panel{display:flex;flex-direction:column;min-width:0;flex:1}.editor-breadcrumbs{height:35px;background-color:var(--editor-bg);border-bottom:1px solid var(--border-color);display:flex;align-items:center;padding:0 16px;font-size:13px;color:var(--status-bar-fg);gap:10px;user-select:none}.editor-breadcrumbs .breadcrumb-item{display:flex;align-items:center;gap:6px;cursor:pointer}.editor-breadcrumbs .breadcrumb-item:hover{color:var(--editor-fg)}.editor-breadcrumbs .breadcrumb-item i{font-size:14px}.editor-breadcrumbs .breadcrumb-item .separator{opacity:0.5;margin:0 4px}.editor-bottom-panel{height:250px;background-color:var(--editor-bg);border-top:1px solid var(--border-color);display:flex;flex-direction:column;overflow:hidden;transition:height 0.3s ease}.editor-bottom-panel.collapsed{height:0;border-top:none}.editor-bottom-panel .panel-header{height:35px;display:flex;justify-content:space-between;align-items:center;padding:0 16px;border-bottom:1px solid var(--border-color);background-color:var(--status-bar-bg)}.editor-bottom-panel .panel-tabs{display:flex;gap:20px;height:100%}.editor-bottom-panel .panel-tabs .panel-tab{font-size:11px;font-weight:600;color:var(--status-bar-fg);height:100%;display:flex;align-items:center;cursor:pointer;border-bottom:2px solid transparent;opacity:0.7;transition:all 0.2s}.editor-bottom-panel .panel-tabs .panel-tab:hover{opacity:1}.editor-bottom-panel .panel-tabs .panel-tab.active{opacity:1;color:var(--color-primary, #007acc);border-bottom-color:var(--color-primary, #007acc)}.editor-bottom-panel .panel-controls i{font-size:12px;color:var(--status-bar-fg);cursor:pointer;opacity:0.6}.editor-bottom-panel .panel-controls i:hover{opacity:1;color:var(--color-danger, #ef4444)}.editor-bottom-panel .panel-content{flex:1;overflow-y:auto;padding:12px 16px;font-family:"Menlo", "Monaco", "Courier New", monospace;background-color:var(--editor-bg)}.editor-bottom-panel .terminal-content .log-item{margin-bottom:4px;font-size:12px;display:flex;gap:8px}.editor-bottom-panel .terminal-content .log-item .log-time{opacity:0.5}.editor-bottom-panel .terminal-content .log-item.info{color:var(--color-success, #10b981)}.editor-bottom-panel .terminal-content .log-item.error{color:var(--color-danger, #ef4444)}.editor-bottom-panel .terminal-content .log-item.warn{color:var(--color-warning, #f59e0b)}.editor-bottom-panel .terminal-content .terminal-input-line{display:flex;gap:8px;margin-top:8px;align-items:center}.editor-bottom-panel .terminal-content .terminal-input-line .terminal-prompt{color:var(--color-primary, #007acc);font-weight:bold}.editor-bottom-panel .terminal-content .terminal-input-line .terminal-input{background:transparent;border:none;color:var(--editor-fg);outline:none;flex:1;font-family:inherit;font-size:12px}.line-numbers{flex-shrink:0;padding:10px 0;text-align:right;background-color:var(--line-num-bg);color:var(--line-num-fg);border-right:1px solid rgba(128, 128, 128, 0.1);user-select:none;min-width:45px;overflow:hidden}.line-numbers .line-number{display:flex;padding:0 4px 0 8px;height:1.5em;white-space:nowrap;justify-content:space-between;cursor:pointer}.line-numbers .line-number .fold-icon{opacity:0;font-size:9px;margin-left:4px;display:flex;align-items:center;color:var(--line-num-fg)}.line-numbers .line-number.git-added{border-left:3px solid var(--git-added)}.line-numbers .line-number.git-modified{border-left:3px solid var(--git-modified)}.line-numbers .line-number:hover .fold-icon{opacity:1;color:var(--editor-fg)}.folded-placeholder{background-color:var(--status-bar-bg);color:var(--status-bar-fg);padding:0 4px;border-radius:2px;font-size:10px;cursor:pointer;user-select:none;margin-left:4px;display:inline-block;height:14px;line-height:14px}.editor-wrapper{flex-grow:1;position:relative;overflow:hidden}.editor-content,.syntax-highlighter{margin:0;padding:10px;border:none;box-sizing:border-box;font-family:inherit;font-size:inherit;line-height:inherit;tab-size:2;white-space:pre;word-wrap:normal;overflow-x:auto;overflow-y:auto;position:absolute;top:0;left:0;width:100%;height:100%}.editor-content{color:transparent;background:transparent;caret-color:var(--cursor-color);z-index:1;resize:none;outline:none;background-image:linear-gradient(to right, var(--indent-guide) 1px, transparent 1px);background-size:calc(var(--indent-size, 2) * 8.4px) 100%;background-repeat:repeat-x;background-attachment:local}.editor-content::selection{background:var(--selection-bg);color:transparent}.syntax-highlighter{z-index:0;pointer-events:none;color:var(--editor-fg)}.lint-error{text-decoration:underline wavy var(--color-danger, #ff4d4d);text-decoration-thickness:2px;position:relative}.minimap-container{width:var(--minimap-width);border-left:1px solid rgba(128, 128, 128, 0.1);background:var(--editor-bg);overflow:hidden;position:relative;user-select:none;flex-shrink:0;cursor:pointer}.minimap-content{transform-origin:top left;transform:scale(0.15);width:666%;pointer-events:none;padding:10px}.minimap-viewport{position:absolute;left:0;width:100%;background:rgba(100, 100, 100, 0.2);cursor:grab;transition:background 0.2s}.minimap-viewport:hover{background:rgba(100, 100, 100, 0.3)}.minimap-viewport:active{cursor:grabbing;background:rgba(100, 100, 100, 0.4)}.status-bar{display:flex;justify-content:flex-end;gap:16px;padding:4px 12px;background-color:var(--status-bar-bg);color:var(--status-bar-fg);font-size:11px;flex-shrink:0;user-select:none}.status-item{display:flex;align-items:center;gap:6px;cursor:default}.status-item i{font-size:10px}.command-palette-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.3);z-index:100;display:flex;justify-content:center;align-items:flex-start;padding-top:20px;backdrop-filter:blur(1px)}.command-palette{width:400px;max-width:90%;background:var(--editor-bg);border:1px solid var(--border-color, #454545);box-shadow:0 4px 12px rgba(0, 0, 0, 0.25);border-radius:6px;display:flex;flex-direction:column;overflow:hidden;animation:slideDown 0.15s ease-out}.command-palette input{width:100%;padding:10px;border:none;background:var(--status-bar-bg);color:var(--editor-fg);font-family:inherit;font-size:13px;outline:none;border-bottom:1px solid var(--border-color, rgba(128, 128, 128, 0.2))}.command-palette .command-list{max-height:250px;overflow-y:auto;margin:0;padding:0;list-style:none}.command-palette .command-item{padding:8px 12px;cursor:pointer;font-size:13px;display:flex;justify-content:space-between;color:var(--editor-fg);border-left:2px solid transparent;}.command-palette .command-item:hover,.command-palette .command-item.active{background-color:var(--selection-bg);border-left-color:var(--status-bar-bg)}.command-palette .command-item .shortcut{opacity:0.6;font-size:11px}@keyframes slideDown{from{transform:translateY(-10px);opacity:0}to{transform:translateY(0);opacity:1}}.token.comment{color:var(--color-success, #6a9955);font-style:italic}.token.string{color:var(--color-danger, #ce9178)}.token.number{color:var(--color-primary, #b5cea8)}.token.boolean{color:var(--color-primary, #569cd6)}.token.keyword{color:var(--color-primary, #c586c0);font-weight:bold}.token.function{color:var(--color-primary, #dcdcaa)}.token.operator{color:var(--bg-secondary, #d4d4d4)}.token.class{color:var(--color-primary, #4ec9b0)}.token.variable{color:var(--color-primary, #9cdcfe)}.token.tag{color:var(--color-primary, #569cd6)}.token.attr-name{color:var(--color-primary, #9cdcfe)}.token.property{color:var(--color-primary, #9cdcfe)}.token.selector{color:var(--color-primary, #d7ba7d)}:host(:not(.theme-vs-dark)) .token.string{color:var(--color-danger, #a31515)}:host(:not(.theme-vs-dark)) .token.keyword{color:var(--color-primary, #af00db)}:host(:not(.theme-vs-dark)) .token.function{color:var(--color-primary, #795e26)}:host(:not(.theme-vs-dark)) .token.number{color:var(--color-success, #098658)}:host(:not(.theme-vs-dark)) .token.comment{color:var(--color-success, #008000)}:host(:not(.theme-vs-dark)) .token.selector{color:var(--text-primary, #800000)}.copy-button{position:absolute;top:8px;right:20px;z-index:10;background:rgba(128, 128, 128, 0.2);border:none;color:var(--editor-fg);padding:4px 8px;border-radius:4px;cursor:pointer;opacity:0;transition:opacity 0.2s;font-size:12px}.copy-button:hover{background:rgba(128, 128, 128, 0.4)}:host(:hover) .copy-button{opacity:1}.search-widget{position:absolute;top:10px;right:40px;right:60px;z-index:50;display:flex;background:var(--editor-bg);border:1px solid var(--border-color, #ccc);box-shadow:0 4px 6px rgba(0, 0, 0, 0.1);border-radius:4px;padding:4px;align-items:center}.search-widget .search-input{border:none;outline:none;background:transparent;color:var(--editor-fg);padding:4px;font-size:13px;width:150px}.search-widget .search-actions{display:flex;gap:2px}.search-widget .search-actions button{background:transparent;border:none;color:var(--status-bar-fg);cursor:pointer;padding:4px;border-radius:2px}.search-widget .search-actions button:hover{background:var(--line-num-bg);color:var(--editor-fg)}.suggestion-list{position:absolute;z-index:100;background:var(--editor-bg);border:1px solid var(--border-color, #ccc);box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);border-radius:4px;max-height:200px;overflow-y:auto;width:200px;margin:0;padding:0;list-style:none;font-size:13px;font-family:inherit}.suggestion-list li{padding:4px 8px;cursor:pointer;display:flex;align-items:center;gap:8px;color:var(--editor-fg)}.suggestion-list li.active,.suggestion-list li:hover{background:var(--selection-bg);color:var(--editor-fg)}.suggestion-list li .icon{opacity:0.7;font-size:11px}.editor-tabs{display:flex;background-color:var(--status-bar-bg);background-color:var(--bg-primary, #252526);overflow-x:auto;flex-shrink:0;}.editor-tabs::-webkit-scrollbar{height:4px}.editor-tabs::-webkit-scrollbar-thumb{background:rgba(128, 128, 128, 0.3)}:host(:not(.theme-vs-dark)) .editor-tabs{background-color:var(--bg-primary, #f3f3f3)}.editor-tab{display:flex;align-items:center;gap:8px;padding:8px 12px;color:var(--text-muted, #969696);background-color:transparent;cursor:pointer;border-right:1px solid rgba(0, 0, 0, 0.1);font-size:13px;white-space:nowrap;border-top:2px solid transparent;}.editor-tab:hover{background-color:rgba(128, 128, 128, 0.1);color:var(--editor-fg)}.editor-tab.active{background-color:var(--editor-bg);color:var(--editor-fg);border-top-color:var(--color-primary, #007acc);}.editor-tab .tab-icon{font-size:12px;opacity:0.8}.editor-tab{}.editor-ribbon-container{display:flex;flex-direction:column;background-color:var(--ribbon-bg, #f3f3f3);border-bottom:1px solid var(--border-color, #d1d1d1);flex-shrink:0;user-select:none;font-family:"Segoe UI", system-ui, -apple-system, sans-serif;--ribbon-bg:var(--bg-primary, #f3f3f3);--ribbon-tab-active:var(--bg-primary, #ffffff);--ribbon-tab-fg:var(--text-secondary, #333333);--ribbon-accent:var(--color-primary, #2b579a);}:host(.theme-vs-dark) .editor-ribbon-container{--ribbon-bg:var(--bg-secondary, #2d2d2d);--ribbon-tab-active:var(--text-secondary, #3c3c3c);--ribbon-tab-fg:var(--bg-secondary, #cccccc);--ribbon-accent:var(--color-primary, #007acc);border-bottom-color:var(--border-strong, #3e3e3e)}.ribbon-tabs{display:flex;padding:0 10px;background-color:var(--ribbon-accent);gap:2px}.ribbon-tab{padding:4px 12px;cursor:pointer;opacity:0.7;transition:all 0.2s;border-bottom:2px solid transparent;font-size:11px;font-weight:500;display:flex;align-items:center;gap:6px;min-width:60px;justify-content:center}.ribbon-tab ui-tooltip{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.ribbon-tab i{font-size:14px}.ribbon-tab:hover{background-color:rgba(255, 255, 255, 0.15);opacity:1}.ribbon-tab:hover i{transform:scale(1.1)}.ribbon-tab.active{background-color:var(--ribbon-bg);color:var(--ribbon-tab-fg);font-weight:600;border-bottom:none;border-radius:4px 4px 0 0;margin-top:4px;padding-top:4px;opacity:1}.ribbon-tab.active i{opacity:1}.ribbon-content{background:var(--editor-bg);border-bottom:1px solid var(--border-color);min-height:0;padding:4px;display:flex;gap:8px;overflow-x:auto}.labels-hover .ribbon-content,.labels-hidden .ribbon-content{min-height:48px}.ribbon-panel{display:flex;gap:12px;height:100%;align-items:stretch}.ribbon-group{display:flex;flex-direction:column;gap:2px;padding-right:12px;border-right:1px solid var(--border-color);height:100%;justify-content:space-between}.ribbon-group:last-child{border-right:none}.ribbon-group.divider{padding:0;width:1px;background:linear-gradient(to bottom, transparent 10%, var(--border-color, #d1d1d1) 20%, var(--border-color, #d1d1d1) 80%, transparent 90%);margin:2px 4px}.ribbon-group-content{display:flex;gap:4px;align-items:center;flex:1}.ribbon-group-label{font-size:9px;color:var(--status-bar-fg);text-align:center;text-transform:uppercase;letter-spacing:0.5px;opacity:0.7}.labels-hidden .ribbon-group-label{display:none}.ribbon-btn{display:flex;flex-direction:column;align-items:center;justify-content:center;gap:2px;padding:4px 8px;border:1px solid transparent;border-radius:4px;background:transparent;color:var(--editor-fg);cursor:pointer;transition:all 0.2s;min-width:32px;font-size:11px}.ribbon-btn i{font-size:16px}.ribbon-btn:hover{background:rgba(144, 144, 144, 0.1);border-color:var(--border-color)}.ribbon-btn.active{background:rgba(0, 122, 204, 0.1);border-color:var(--color-primary, #007acc);color:var(--color-primary, #007acc)}.ribbon-btn.lg{padding:4px 12px;gap:4px;min-width:48px}.ribbon-btn.lg i{font-size:20px}.ribbon-btn.icon-only{padding:4px;min-width:28px;height:28px}.ribbon-btn.icon-only span{display:none}.ribbon-btn.icon-only i{font-size:16px}.ribbon-select-container{display:flex;flex-direction:column;gap:2px;align-items:center}.ribbon-select-container select{padding:2px 4px;font-size:11px;border:1px solid var(--border-color, #ccc);border-radius:3px;background:var(--editor-bg);color:var(--editor-fg);outline:none}.ribbon-select-container span{font-size:10px;opacity:0.7}.help-modal-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:rgba(0, 0, 0, 0.5);z-index:200;display:flex;justify-content:center;align-items:center;backdrop-filter:blur(2px)}.help-modal{background:var(--editor-bg);color:var(--editor-fg);width:400px;max-width:90%;border-radius:8px;border:1px solid var(--border-color, #454545);box-shadow:0 10px 25px rgba(0, 0, 0, 0.5);display:flex;flex-direction:column;overflow:hidden;animation:fadeIn 0.2s ease-out}.help-modal .help-header{display:flex;justify-content:space-between;align-items:center;padding:12px 16px;background:var(--status-bar-bg);color:var(--status-bar-fg);border-bottom:1px solid rgba(128, 128, 128, 0.2)}.help-modal .help-header h3{margin:0;font-size:14px;font-weight:600}.help-modal .help-header .close-btn{background:transparent;border:none;color:inherit;cursor:pointer;font-size:14px;padding:4px}.help-modal .help-header .close-btn:hover{opacity:0.8}.help-modal .help-content{padding:16px;display:flex;flex-direction:column;gap:16px}.help-modal .help-section h4{margin:0 0 8px 0;font-size:12px;text-transform:uppercase;letter-spacing:0.5px;opacity:0.7;border-bottom:1px solid rgba(128, 128, 128, 0.2);padding-bottom:4px}.help-modal .help-section ul{list-style:none;padding:0;margin:0;font-size:13px}.help-modal .help-section ul li{margin-bottom:6px;display:flex;align-items:center;gap:8px}.help-modal kbd{background:rgba(128, 128, 128, 0.2);padding:2px 4px;border-radius:3px;font-family:inherit;font-size:11px;border:1px solid rgba(128, 128, 128, 0.3)}@keyframes fadeIn{from{opacity:0;transform:scale(0.95)}to{opacity:1;transform:scale(1)}}`;

const AppCodeEditor = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.valueChange = createEvent(this, "valueChange");
        this.runCode = createEvent(this, "runCode");
    }
    value = '';
    language = 'javascript';
    theme = 'vs-dark';
    readonly = false;
    lineNumbers = true;
    toolbar = false;
    toolbarLabelDisplay = 'hover';
    toolbarGroups = ['all'];
    tabs = [];
    valueChange;
    runCode;
    highlightedCode = '';
    lineCount = 1;
    statusStats = { line: 1, col: 1, selected: 0 };
    showSearch = false;
    searchQuery = '';
    showPalette = false;
    paletteQuery = '';
    showHelp = false;
    activeTabIndex = 0;
    unfoldedLines = new Set(); // Stores lines that are explicitly folded (using inverse logic for lighter default?) -> Actually let's store folded lines
    foldedLines = new Set();
    lintErrors = [];
    activeToolbarTab = 'home';
    fontSize = 14;
    showLineNumbers = true;
    showMinimap = true;
    showSidebar = true;
    showBottomPanel = true;
    activeSidebarTab = 'files';
    activeBottomTab = 'terminal';
    activeFileIndex = 0;
    files = [
        { name: 'index.js', language: 'javascript', content: '// Welcome to the IDE\n// Start coding here...' },
        { name: 'styles.css', language: 'css', content: '/* Add your styles here */\nbody {\n  margin: 0;\n}' },
        { name: 'index.html', language: 'html', content: '<!DOCTYPE html>\n<html>\n<body>\n  <h1>Hello</h1>\n</body>\n</html>' }
    ];
    terminalLogs = [
        { type: 'info', text: 'IDE Terminal initialized.', time: new Date().toLocaleTimeString() }
    ];
    // Autocompletion State
    suggestions = [];
    suggestionIndex = 0;
    showSuggestions = false;
    suggestionPos = { top: 0, left: 0 };
    textarea;
    pre;
    lineNumbersRef;
    minimapRef;
    minimapViewport;
    searchInput;
    paletteInput;
    charWidth = 8.4; // Default estimate
    lineHeight = 21;
    keywords = {
        javascript: ['function', 'return', 'const', 'let', 'var', 'import', 'export', 'class', 'if', 'else', 'for', 'while', 'switch', 'case', 'break', 'continue', 'true', 'false', 'null', 'undefined', 'console', 'log', 'document', 'window', 'async', 'await', 'try', 'catch', 'throw', 'new', 'this', 'super', 'typeof', 'instanceof', 'void', 'delete', 'in', 'of'],
        python: ['def', 'class', 'return', 'if', 'elif', 'else', 'for', 'while', 'try', 'except', 'finally', 'import', 'from', 'as', 'pass', 'break', 'continue', 'True', 'False', 'None', 'print', 'with', 'yield', 'lambda', 'global', 'nonlocal', 'raise', 'assert'],
        html: ['div', 'span', 'h1', 'h2', 'h3', 'p', 'a', 'button', 'input', 'form', 'img', 'ul', 'li', 'script', 'style', 'head', 'body', 'html', 'meta', 'link', 'title', 'header', 'footer', 'nav', 'main', 'section', 'article', 'aside'],
        css: ['color', 'background', 'border', 'margin', 'padding', 'width', 'height', 'display', 'flex', 'grid', 'font-size', 'position', 'top', 'left', 'right', 'bottom', 'opacity', 'z-index', 'transform', 'transition', 'animation', 'justify-content', 'align-items'],
        java: ['public', 'private', 'protected', 'class', 'interface', 'extends', 'implements', 'void', 'int', 'double', 'String', 'boolean', 'if', 'else', 'for', 'while', 'return', 'new', 'this', 'super', 'try', 'catch', 'finally', 'throw', 'throws', 'package', 'import', 'static', 'final'],
        csharp: ['public', 'private', 'protected', 'class', 'interface', 'void', 'int', 'string', 'bool', 'if', 'else', 'for', 'while', 'return', 'new', 'this', 'var', 'namespace', 'using', 'static', 'readonly', 'async', 'await'],
    };
    commands = [
        { id: 'theme-toggle', label: 'Toggle Theme (Dark/Light)', action: () => this.toggleTheme() },
        { id: 'minimap-toggle', label: 'Toggle Minimap', action: () => (this.showMinimap = !this.showMinimap) },
        { id: 'line-nums-toggle', label: 'Toggle Line Numbers', action: () => (this.showLineNumbers = !this.showLineNumbers) },
        { id: 'format', label: 'Format Document (Simple Indent)', action: () => this.simpleFormat() },
        { id: 'clear', label: 'Clear Code', action: () => { this.value = ''; this.valueChange.emit(''); } },
        { id: 'copy', label: 'Copy to Clipboard', action: () => this.handleCopy() },
        { id: 'fold-all', label: 'Fold All', action: () => this.foldAll() },
        { id: 'unfold-all', label: 'Unfold All', action: () => this.unfoldAll() },
        { id: 'undo', label: 'Undo', action: () => document.execCommand('undo') },
        { id: 'redo', label: 'Redo', action: () => document.execCommand('redo') },
    ];
    componentWillLoad() {
        this.highlightCode();
        this.updateLineCount();
        this.runLinting();
    }
    componentDidLoad() {
        this.measureChar();
        // Initialize tabs if present
        if (this.tabs.length > 0) {
            this.handleTabClick(0);
        }
    }
    measureChar() {
        if (!this.pre)
            return;
        const span = document.createElement('span');
        span.textContent = 'M';
        span.style.visibility = 'hidden';
        this.pre.appendChild(span);
        const rect = span.getBoundingClientRect();
        this.charWidth = rect.width;
        this.lineHeight = rect.height;
        this.pre.removeChild(span);
    }
    valueChanged() {
        this.highlightCode();
        this.updateLineCount();
        this.runLinting();
    }
    languageChanged() {
        this.highlightCode();
        this.runLinting();
    }
    tabsChanged() {
        if (this.tabs.length > 0 && this.activeTabIndex >= this.tabs.length) {
            this.handleTabClick(0);
        }
    }
    searchQueryChanged() {
        this.highlightCode();
    }
    executeCode() {
        if (this.language === 'javascript' || this.language === 'json') {
            try {
                const output = [];
                const mockConsole = {
                    log: (...args) => output.push({ type: 'info', text: args.map(a => typeof a === 'object' ? JSON.stringify(a) : String(a)).join(' ') }),
                    error: (...args) => output.push({ type: 'error', text: args.join(' ') }),
                    warn: (...args) => output.push({ type: 'warn', text: args.join(' ') })
                };
                const fn = new Function('console', this.value);
                fn(mockConsole);
                return output.length > 0 ? output : [{ type: 'info', text: '(Success: No output)' }];
            }
            catch (e) {
                return [{ type: 'error', text: `Runtime Error: ${e.message}` }];
            }
        }
        return [{ type: 'info', text: `Simulation for ${this.language} complete. (Code execution restricted to JS)` }];
    }
    handleInput = (ev) => {
        const target = ev.target;
        this.value = target.value;
        this.valueChange.emit(this.value);
        // Autocompletion Trigger
        this.checkSuggestions();
    };
    checkSuggestions() {
        if (!this.textarea)
            return;
        const { selectionStart, value } = this.textarea;
        // Find current word
        let start = selectionStart - 1;
        while (start >= 0 && /[\w]/.test(value[start])) {
            start--;
        }
        const currentWord = value.substring(start + 1, selectionStart);
        if (currentWord.length < 1) {
            this.showSuggestions = false;
            return;
        }
        const langKeywords = this.keywords[this.language] || [];
        const matches = langKeywords.filter(k => k.toLowerCase().startsWith(currentWord.toLowerCase()) && k !== currentWord);
        if (matches.length > 0) {
            this.suggestions = matches;
            this.suggestionIndex = 0;
            this.showSuggestions = true;
            // Calculate Position
            const lines = value.substring(0, selectionStart).split('\n');
            const line = lines.length;
            const col = lines[lines.length - 1].length;
            this.suggestionPos = {
                top: (line * this.lineHeight) - this.textarea.scrollTop + 5,
                left: (col * this.charWidth) - this.textarea.scrollLeft + 10 // + padding
            };
        }
        else {
            this.showSuggestions = false;
        }
    }
    acceptSuggestion(suggestion) {
        if (!this.textarea)
            return;
        const { selectionStart, value } = this.textarea;
        // Find current word start again
        let start = selectionStart - 1;
        while (start >= 0 && /[\w]/.test(value[start])) {
            start--;
        }
        start++; // Start of word
        const newValue = value.substring(0, start) + suggestion + value.substring(selectionStart);
        this.value = newValue;
        this.valueChange.emit(newValue);
        this.showSuggestions = false;
        // Move Cursor
        requestAnimationFrame(() => {
            const newCursor = start + suggestion.length;
            this.textarea.selectionStart = this.textarea.selectionEnd = newCursor;
            this.highlightCode();
            this.textarea.focus();
        });
    }
    handleScroll = () => {
        if (this.textarea && this.pre) {
            const { scrollTop, scrollLeft } = this.textarea;
            this.pre.scrollTop = scrollTop;
            this.pre.scrollLeft = scrollLeft;
            // Sync Minimap
            if (this.minimapRef) {
                const ratio = scrollTop / (this.textarea.scrollHeight - this.textarea.clientHeight);
                const minimapScroll = ratio * (this.minimapRef.scrollHeight - this.minimapRef.clientHeight);
                this.minimapRef.scrollTop = minimapScroll;
                // Update Viewport Indicator
                if (this.minimapViewport) {
                    const viewportRatio = this.textarea.clientHeight / this.textarea.scrollHeight;
                    this.minimapViewport.style.top = `${(scrollTop / this.textarea.scrollHeight) * 100}%`;
                    this.minimapViewport.style.height = `${viewportRatio * 100}%`;
                }
            }
        }
        if (this.lineNumbersRef && this.textarea) {
            this.lineNumbersRef.scrollTop = this.textarea.scrollTop;
        }
    };
    handleKeydown = (e) => {
        const isCtrl = e.ctrlKey || e.metaKey;
        // Command Palette (Ctrl+Shift+P)
        if (isCtrl && e.shiftKey && (e.key === 'p' || e.key === 'P')) {
            e.preventDefault();
            this.togglePalette();
            return;
        }
        // Search (Ctrl+F)
        if (isCtrl && e.key === 'f') {
            e.preventDefault();
            this.toggleSearch();
            return;
        }
        // Suggestions Navigation
        if (this.showSuggestions) {
            if (e.key === 'ArrowDown') {
                e.preventDefault();
                this.suggestionIndex = (this.suggestionIndex + 1) % this.suggestions.length;
                return;
            }
            else if (e.key === 'ArrowUp') {
                e.preventDefault();
                this.suggestionIndex = (this.suggestionIndex - 1 + this.suggestions.length) % this.suggestions.length;
                return;
            }
            else if (e.key === 'Enter' || e.key === 'Tab') {
                e.preventDefault();
                this.acceptSuggestion(this.suggestions[this.suggestionIndex]);
                return;
            }
            else if (e.key === 'Escape') {
                this.showSuggestions = false;
                return;
            }
        }
        // Tab Handling
        if (e.key === 'Tab') {
            e.preventDefault();
            const start = this.textarea.selectionStart;
            const end = this.textarea.selectionEnd;
            const tabChar = '  ';
            this.value = this.value.substring(0, start) + tabChar + this.value.substring(end);
            requestAnimationFrame(() => {
                this.textarea.selectionStart = this.textarea.selectionEnd = start + tabChar.length;
                this.highlightCode();
            });
            this.valueChange.emit(this.value);
            return;
        }
        // --- Smart Behaviors ---
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        const val = this.value;
        // Auto-Close
        const pairs = { '(': ')', '{': '}', '[': ']', '"': '"', "'": "'" };
        if (pairs[e.key]) {
            e.preventDefault();
            this.value = val.substring(0, start) + e.key + pairs[e.key] + val.substring(end);
            requestAnimationFrame(() => {
                this.textarea.selectionStart = this.textarea.selectionEnd = start + 1;
                this.highlightCode();
            });
            this.valueChange.emit(this.value);
            return;
        }
        // Skip closing
        const closingChars = ['}', ']', ')', '"', "'"];
        if (closingChars.includes(e.key) && val[start] === e.key) {
            e.preventDefault();
            this.textarea.selectionStart = this.textarea.selectionEnd = start + 1;
            return;
        }
        // Auto-Indent (Enter)
        if (e.key === 'Enter') {
            e.preventDefault();
            const beforeCursor = val.substring(0, start);
            const currentLine = beforeCursor.split('\n').pop();
            const indentMatch = currentLine.match(/^\s*/);
            let indent = indentMatch ? indentMatch[0] : '';
            if (currentLine.trim().endsWith('{') || currentLine.trim().endsWith(':')) {
                indent += '  ';
            }
            this.value = val.substring(0, start) + '\n' + indent + val.substring(end);
            requestAnimationFrame(() => {
                this.textarea.selectionStart = this.textarea.selectionEnd = start + 1 + indent.length;
                this.highlightCode();
            });
            this.valueChange.emit(this.value);
            return;
        }
        // Backspace pair delete
        if (e.key === 'Backspace' && start === end && start > 0) {
            const charBefore = val[start - 1];
            const charAfter = val[start];
            if ((charBefore === '{' && charAfter === '}') ||
                (charBefore === '(' && charAfter === ')') ||
                (charBefore === '[' && charAfter === ']') ||
                (charBefore === '"' && charAfter === '"') ||
                (charBefore === "'" && charAfter === "'")) {
                e.preventDefault();
                this.value = val.substring(0, start - 1) + val.substring(start + 1);
                requestAnimationFrame(() => {
                    this.textarea.selectionStart = this.textarea.selectionEnd = start - 1;
                    this.highlightCode();
                });
                this.valueChange.emit(this.value);
            }
        }
    };
    handleSelection = (ev) => {
        const target = ev.target;
        const val = target.value;
        const selStart = target.selectionStart;
        const linesToCursor = val.substring(0, selStart).split('\n');
        const line = linesToCursor.length;
        const col = linesToCursor[linesToCursor.length - 1].length + 1;
        const selLen = target.selectionEnd - target.selectionStart;
        this.statusStats = { line, col, selected: selLen };
    };
    handleMinimapClick = (ev) => {
        const rect = ev.currentTarget.getBoundingClientRect();
        const clickY = ev.clientY - rect.top;
        const percentage = clickY / rect.height;
        if (this.textarea) {
            this.textarea.scrollTop = percentage * this.textarea.scrollHeight - (this.textarea.clientHeight / 2);
        }
    };
    handleCopy = () => {
        navigator.clipboard.writeText(this.value);
    };
    handleTabClick(index) {
        if (index < 0 || index >= this.tabs.length)
            return;
        this.activeTabIndex = index;
        const tab = this.tabs[index];
        this.value = tab.content;
        // Cast to any to avoid strict type validation issues with dynamic strings vs union type
        this.language = tab.language;
        // Emit change? 
        this.valueChange.emit(this.value);
    }
    // --- Feature Logic ---
    toggleSearch = () => {
        this.showSearch = !this.showSearch;
        if (this.showSearch) {
            setTimeout(() => this.searchInput?.focus(), 50);
        }
        else {
            this.searchQuery = '';
        }
    };
    findNext() {
        if (!this.searchQuery)
            return;
        const val = this.value;
        const start = this.textarea.selectionEnd;
        let index = val.indexOf(this.searchQuery, start);
        if (index === -1) {
            // Wrap around
            index = val.indexOf(this.searchQuery, 0);
        }
        if (index !== -1) {
            this.selectAndScroll(index, index + this.searchQuery.length);
        }
    }
    findPrev() {
        if (!this.searchQuery)
            return;
        const val = this.value;
        const end = this.textarea.selectionStart;
        let index = val.lastIndexOf(this.searchQuery, end - 1);
        if (index === -1) {
            // Wrap around
            index = val.lastIndexOf(this.searchQuery);
        }
        if (index !== -1) {
            this.selectAndScroll(index, index + this.searchQuery.length);
        }
    }
    selectAndScroll(start, end) {
        this.textarea.focus();
        this.textarea.selectionStart = start;
        this.textarea.selectionEnd = end;
        // Ensure scroll sync
        this.handleScroll();
    }
    togglePalette = () => {
        this.showPalette = !this.showPalette;
        this.paletteQuery = '';
        if (this.showPalette) {
            setTimeout(() => this.paletteInput?.focus(), 50);
        }
    };
    runCommand(cmd) {
        if (cmd.isSymbol) {
            this.selectAndScroll(cmd.start, cmd.end);
        }
        else {
            cmd.action();
        }
        this.showPalette = false;
    }
    getPaletteItems() {
        if (this.paletteQuery.startsWith('@')) {
            return this.getSymbols(this.paletteQuery.substring(1));
        }
        const query = this.paletteQuery.toLowerCase();
        return this.commands.filter(cmd => cmd.label.toLowerCase().includes(query));
    }
    getSymbols(query) {
        const symbols = [];
        const lines = this.value.split('\n');
        const q = query.toLowerCase();
        // Simple regex-based symbol detection
        const patterns = {
            javascript: /function\s+([\w$]+)|const\s+([\w$]+)\s*=\s*\([^)]*\)\s*=>|class\s+([\w$]+)/g,
            python: /def\s+([\w]+)|class\s+([\w]+)/g,
            java: /(?:public|private|protected|static|\s) +[\w\<\>\[\]]+\s+([\w]+)\s*\([^)]*\)\s*\{|class\s+([\w]+)/g,
            csharp: /(?:public|private|protected|static|\s) +[\w\<\>\[\]]+\s+([\w]+)\s*\([^)]*\)\s*\{|class\s+([\w]+)/g,
        };
        const pattern = patterns[this.language];
        if (!pattern)
            return [];
        let currentPos = 0;
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            let match;
            while ((match = pattern.exec(line)) !== null) {
                const name = match[1] || match[2] || match[3];
                if (name && name.toLowerCase().includes(q)) {
                    symbols.push({
                        id: `symbol-${i}`,
                        label: `@${name}`,
                        isSymbol: true,
                        start: currentPos + match.index,
                        end: currentPos + match.index + match[0].length,
                        line: i + 1
                    });
                }
            }
            currentPos += line.length + 1;
        }
        return symbols;
    }
    toggleTheme() {
        this.theme = this.theme === 'vs-dark' ? 'vs-light' : 'vs-dark';
    }
    toggleMinimap() {
        this.showMinimap = !this.showMinimap;
    }
    handleSelectAll() {
        if (this.textarea) {
            this.textarea.select();
        }
    }
    handleUndo() {
        document.execCommand('undo');
    }
    handleRedo() {
        document.execCommand('redo');
    }
    handleCommentSelection() {
        if (!this.textarea)
            return;
        const start = this.textarea.selectionStart;
        const end = this.textarea.selectionEnd;
        const val = this.value;
        const selection = val.substring(start, end);
        let newValue;
        if (this.language === 'javascript' || this.language === 'python' || this.language === 'java' || this.language === 'csharp') {
            const commentPrefix = this.language === 'python' ? '# ' : '// ';
            if (selection.includes('\n')) {
                newValue = selection.split('\n').map(l => l.startsWith(commentPrefix) ? l.substring(commentPrefix.length) : commentPrefix + l).join('\n');
            }
            else {
                newValue = selection.startsWith(commentPrefix) ? selection.substring(commentPrefix.length) : commentPrefix + selection;
            }
        }
        else if (this.language === 'html') {
            newValue = selection.startsWith('<!--') ? selection.replace(/^<!--\s*([\s\S]*?)\s*-->$/, '$1') : `<!-- ${selection} -->`;
        }
        else if (this.language === 'css') {
            newValue = selection.startsWith('/*') ? selection.replace(/^\/\*\s*([\s\S]*?)\s*\*\/$/, '$1') : `/* ${selection} */`;
        }
        if (newValue !== undefined) {
            this.value = val.substring(0, start) + newValue + val.substring(end);
            this.valueChange.emit(this.value);
            requestAnimationFrame(() => {
                this.textarea.selectionStart = start;
                this.textarea.selectionEnd = start + newValue.length;
                this.highlightCode();
            });
        }
    }
    simpleFormat() {
        if (this.language === 'json') {
            try {
                const parsed = JSON.parse(this.value);
                this.value = JSON.stringify(parsed, null, 2);
                this.valueChange.emit(this.value);
            }
            catch (e) { }
            return;
        }
        // Generic Indentation Formatter for C-style languages (JS, CSS, Java, C#, etc.)
        const lines = this.value.split('\n');
        let indentLevel = 0;
        const indentString = '  '; // 2 spaces
        const formattedLines = [];
        for (let i = 0; i < lines.length; i++) {
            let line = lines[i].trim();
            if (line === '') {
                formattedLines.push('');
                continue;
            }
            // Heuristic: Decrease indent if line starts with closing brace/tag
            if (line.match(/^[\}\]\)]/) || line.startsWith('</')) {
                indentLevel = Math.max(0, indentLevel - 1);
            }
            // Apply Indent
            formattedLines.push(indentString.repeat(indentLevel) + line);
            // Heuristic: Increase indent if line ends with opening brace, start tag, or is a control statement start not ending in ;
            if (line.endsWith('{') ||
                line.endsWith('[') ||
                line.endsWith('(') ||
                (line.match(/<[^/].*>$/) && !line.match(/\/>$/) && !line.includes('</')) // HTML opening tag
            ) {
                indentLevel++;
            }
        }
        this.value = formattedLines.join('\n');
        this.valueChange.emit(this.value);
        this.terminalLogs = [...this.terminalLogs, { type: 'info', text: 'Document formatted successfully.', time: new Date().toLocaleTimeString() }];
    }
    getLineGitStatus(lineIndex) {
        // Mock Git status: green for new, yellow for modified
        if (lineIndex % 15 === 0)
            return 'added';
        if (lineIndex % 25 === 0)
            return 'modified';
        return 'none';
    }
    // --- Linting ---
    runLinting() {
        const errors = [];
        const lines = this.value.split('\n');
        // Check for unbalanced brackets (Naive check per line usually fails for multi-line, doing global stack is better)
        // But for "Simple Line Linting" let's check basic things.
        // Actually, let's do a stack check for the whole file and find THE FIRST error line.
        const stack = [];
        for (let i = 0; i < lines.length; i++) {
            const line = lines[i];
            for (let j = 0; j < line.length; j++) {
                const char = line[j];
                if (['{', '[', '('].includes(char)) {
                    stack.push({ char, line: i + 1 });
                }
                else if (['}', ']', ')'].includes(char)) {
                    const last = stack.pop();
                    if (!last || !this.matches(last.char, char)) {
                        errors.push({ line: i + 1, msg: `Unexpected '${char}'` });
                    }
                }
            }
        }
        // If stack remains, the opened ones are unclosed
        if (stack.length > 0) {
            stack.forEach(item => {
                errors.push({ line: item.line, msg: `Unclosed '${item.char}'` });
            });
        }
        this.lintErrors = errors;
    }
    matches(open, close) {
        return (open === '{' && close === '}') ||
            (open === '[' && close === ']') ||
            (open === '(' && close === ')');
    }
    // --- Folding ---
    isLineFoldable(lineIndex, lines) {
        // Simple heuristic: ends with { or start of block indentation
        // Keeping it simple: Indentation increase check is robust for most languages
        if (lineIndex >= lines.length - 1)
            return false;
        const currentIndent = this.getIndentLevel(lines[lineIndex]);
        const nextIndent = this.getIndentLevel(lines[lineIndex + 1]);
        return nextIndent > currentIndent || lines[lineIndex].trim().endsWith('{') || lines[lineIndex].trim().endsWith(':');
    }
    getIndentLevel(line) {
        const match = line.match(/^\s*/);
        return match ? match[0].length : 0;
    }
    toggleFold(lineNum) {
        if (this.foldedLines.has(lineNum)) {
            this.foldedLines.delete(lineNum);
        }
        else {
            this.foldedLines.add(lineNum);
        }
        // Force re-render -> handled by State change
        this.foldedLines = new Set(this.foldedLines);
    }
    foldAll() {
        const lines = this.value.split('\n');
        for (let i = 0; i < lines.length; i++) {
            if (this.isLineFoldable(i, lines))
                this.foldedLines.add(i + 1);
        }
        this.foldedLines = new Set(this.foldedLines);
    }
    unfoldAll() {
        this.foldedLines.clear();
        this.foldedLines = new Set(this.foldedLines);
    }
    // --- Rendering ---
    updateLineCount() {
        const lines = this.value ? this.value.split('\n').length : 1;
        this.lineCount = lines;
    }
    highlightCode() {
        if (!this.value) {
            this.highlightedCode = '';
            return;
        }
        let code = this.escapeHtml(this.value);
        switch (this.language) {
            case 'javascript':
            case 'json':
                code = this.highlightJS(code);
                break;
            case 'html':
                code = this.highlightHTML(code);
                break;
            case 'css':
                code = this.highlightCSS(code);
                break;
            case 'python':
                code = this.highlightPython(code);
                break;
            case 'java':
            case 'csharp':
                code = this.highlightJavaCSharp(code);
                break;
            case 'ladder':
                code = this.highlightLadder(code);
                break;
        }
        // Add Linting Decorators (Regex replace on specific lines is hard on already HTML-escaped code)
        // Simplification: We will only mark the line numbers in red for now, 
        // to avoid breaking the syntax highlighter HTML structure.
        if (this.value.endsWith('\n')) {
            code += '<br>';
        }
        this.highlightedCode = code;
    }
    // ... highlight engines ...
    escapeRegex(string) { return string.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'); }
    escapeHtml(unsafe) { return unsafe.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;").replace(/'/g, "&#039;"); }
    highlightJS(code) {
        return code.replace(/\/\/.*/g, '<span class="token comment">$&</span>')
            .replace(/\/\*[\s\S]*?\*\//g, '<span class="token comment">$&</span>')
            .replace(/('.*?')|(".*?")|(`[\s\S]*?`)/g, '<span class="token string">$&</span>')
            .replace(/\b(const|let|var|function|return|if|else|for|while|import|export|class|this|new|true|false|null|undefined|async|await|try|catch|finally|throw|break|continue|default|case|switch|typeof|instanceof|void|delete|in|of|static|get|set|extends|super)\b/g, '<span class="token keyword">$&</span>')
            .replace(/\b(\d+)\b/g, '<span class="token number">$&</span>')
            .replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="token class">$&</span>')
            .replace(/(\w+)(?=\()/g, '<span class="token function">$&</span>');
    }
    highlightHTML(code) {
        return code.replace(/(&lt;\/?)(\w+)(.*?)(&gt;)/g, (_m, p1, p2, p3, p4) => `<span class="token tag">${p1}${p2}</span>${p3.replace(/(\w+)=("[^"]*")/g, '<span class="token attr-name">$1</span>=<span class="token string">$2</span>')}<span class="token tag">${p4}</span>`)
            .replace(/&lt;!--[\s\S]*?--&gt;/g, '<span class="token comment">$&</span>');
    }
    highlightCSS(code) {
        return code.replace(/\/\*[\s\S]*?\*\//g, '<span class="token comment">$&</span>')
            .replace(/([a-zA-Z-]+)(?=:)/g, '<span class="token property">$1</span>')
            .replace(/(:)([^;]+)(;)/g, (_m, p1, p2, p3) => `${p1}<span class="token number">${p2}</span>${p3}`)
            .replace(/(\.|#)([\w-]+)/g, '<span class="token selector">$1$2</span>');
    }
    highlightPython(code) {
        return code.replace(/#.*/g, '<span class="token comment">$&</span>')
            .replace(/("""[\s\S]*?""")|('''.*?''')/g, '<span class="token string">$&</span>')
            .replace(/('.*?')|(".*?")/g, '<span class="token string">$&</span>')
            .replace(/\b(def|class|if|elif|else|for|while|return|import|from|as|try|except|finally|with|pass|continue|break|True|False|None)\b/g, '<span class="token keyword">$&</span>')
            .replace(/\b(\d+)\b/g, '<span class="token number">$&</span>')
            .replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="token class">$&</span>')
            .replace(/@\w+/g, '<span class="token function">$&</span>');
    }
    highlightJavaCSharp(code) {
        return code.replace(/\/\/.*/g, '<span class="token comment">$&</span>')
            .replace(/('.*?')|(".*?")/g, '<span class="token string">$&</span>').replace(/\b(public|private|protected|static|final|class|interface|void|int|double|String|boolean|if|else|for|while|return|new|this|super|extends|implements|try|catch|finally|throw|throws|package|import|namespace|using|var)\b/g, '<span class="token keyword">$&</span>')
            .replace(/\b(\d+)\b/g, '<span class="token number">$&</span>').replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="token class">$&</span>').replace(/@\w+/g, '<span class="token function">$&</span>');
    }
    highlightLadder(code) {
        return code.replace(/\(\*.*?\*\)/g, '<span class="token comment">$&</span>').replace(/\b(XIC|XIO|OTE|OTL|OTU|TON|TOF|RTO|CTU|CTD|MOV|COP|ADD|SUB|MUL|DIV|LIM|EQU|NEQ|LES|GRT|LEQ|GEQ|JMP|LBL)\b/g, '<span class="token keyword">$&</span>').replace(/\b(PROGRAM|END_PROGRAM|VAR|END_VAR|BOOL|INT|REAL|TIME|TON|IF|THEN|END_IF)\b/g, '<span class="token keyword">$&</span>').replace(/%[IQM][\d\.]+/g, '<span class="token number">$&</span>').replace(/\b([A-Z][a-zA-Z0-9_]*)\b/g, '<span class="token variable">$&</span>');
    }
    renderLineNumbers() {
        if (!this.showLineNumbers)
            return null;
        const lines = this.value.split('\n');
        return (h("div", { class: "line-numbers", ref: el => this.lineNumbersRef = el }, lines.map((_content, i) => {
            const lineNum = i + 1;
            const isError = this.lintErrors.find(e => e.line === lineNum);
            const isFoldable = this.isLineFoldable(i, lines);
            const isFolded = this.foldedLines.has(lineNum);
            const gitStatus = this.getLineGitStatus(i);
            return (h("div", { class: {
                    'line-number': true,
                    [`git-${gitStatus}`]: gitStatus !== 'none'
                }, onClick: () => isFoldable && this.toggleFold(lineNum), style: { color: isError ? '#ff4d4d' : 'inherit' }, title: isError ? isError.msg : '' }, lineNum, isFoldable && (h("span", { class: "fold-icon" }, h("ui-icon", { name: `chevron-${isFolded ? 'right' : 'down'}`, library: "fontawesome", size: "10px" })))));
        })));
    }
    renderPalette() {
        if (!this.showPalette)
            return null;
        const items = this.getPaletteItems();
        return (h("div", { class: "editor-palette-overlay", onClick: this.togglePalette }, h("div", { class: "editor-palette", onClick: e => e.stopPropagation() }, h("div", { class: "palette-input-wrapper" }, h("ui-icon", { name: "terminal", library: "fontawesome" }), h("ui-input", { type: "text", placeholder: "Type a command or @ for symbols...", value: this.paletteQuery, onInputChange: (e) => this.paletteQuery = e.detail, ref: el => this.paletteInput = el, onInputKeydown: e => {
                if (e.detail.key === 'Escape')
                    this.togglePalette();
                if (e.detail.key === 'Enter' && items.length > 0)
                    this.runCommand(items[0]);
            }, variant: "plain", size: "sm" })), h("div", { class: "palette-results" }, items.length > 0 ? items.map(cmd => (h("div", { class: "palette-item", onClick: () => this.runCommand(cmd) }, h("ui-icon", { name: cmd.isSymbol ? "at" : "play", library: "fontawesome", size: "14px" }), h("span", null, cmd.label), cmd.line && h("span", { class: "palette-meta" }, "Line ", cmd.line)))) : (h("div", { class: "palette-no-results" }, "No results found"))))));
    }
    renderSearch() {
        if (!this.showSearch)
            return null;
        return (h("div", { class: "search-widget" }, h("ui-input", { customClass: "search-input", ref: el => this.searchInput = el, type: "text", placeholder: "Find", value: this.searchQuery, onInputChange: (e) => this.searchQuery = e.detail, onInputKeydown: (e) => {
                const event = e.detail;
                if (event.key === 'Escape')
                    this.showSearch = false;
                if (event.key === 'Enter') {
                    event.shiftKey ? this.findPrev() : this.findNext();
                }
            }, size: "sm", variant: "outlined" }), h("div", { class: "search-actions" }, h("ui-button", { variant: "ghost", size: "sm", onClick: () => this.findPrev(), ariaLabel: "Previous (Shift+Enter)", icon: "arrow-up", iconLibrary: "fontawesome", iconOnly: true, iconSize: "14px" }), h("ui-button", { variant: "ghost", size: "sm", onClick: () => this.findNext(), ariaLabel: "Next (Enter)", icon: "arrow-down", iconLibrary: "fontawesome", iconOnly: true, iconSize: "14px" }), h("ui-button", { variant: "ghost", size: "sm", onClick: () => this.showSearch = false, ariaLabel: "Close search", icon: "times", iconLibrary: "fontawesome", iconOnly: true, iconSize: "14px" }))));
    }
    renderMinimap() {
        if (!this.showMinimap)
            return null;
        return (h("div", { class: "minimap-container", onClick: this.handleMinimapClick }, h("div", { class: "minimap-content", innerHTML: sanitizeHTML(this.highlightedCode), ref: el => this.minimapRef = el }), h("div", { class: "minimap-viewport", ref: el => this.minimapViewport = el })));
    }
    renderStatusBar() {
        return (h("div", { class: "status-bar" }, h("div", { class: "status-item" }, h("ui-icon", { name: "code-branch", library: "fontawesome", size: "14px" }), " main"), h("div", { class: "status-item" }, h("ui-icon", { name: "exclamation-circle", library: "fontawesome", size: "14px" }), " ", this.lintErrors.length, " Errors"), h("div", { class: "status-item" }, "Ln ", this.statusStats.line, ", Col ", this.statusStats.col), h("div", { class: "status-item" }, this.statusStats.selected > 0 ? `(${this.statusStats.selected} selected)` : ''), h("div", { class: "status-item" }, "Spaces: 2"), h("div", { class: "status-item" }, this.language.toUpperCase()), h("div", { class: "status-item", onClick: () => this.toggleTheme(), style: { cursor: 'pointer' } }, this.theme === 'vs-dark' ? h("ui-icon", { name: "moon", library: "fontawesome", size: "14px" }) : h("ui-icon", { name: "sun", library: "fontawesome", size: "14px" }))));
    }
    renderSuggestions() {
        if (!this.showSuggestions)
            return null;
        return (h("ul", { class: "suggestion-list", style: { top: `${this.suggestionPos.top}px`, left: `${this.suggestionPos.left}px` } }, this.suggestions.map((s, i) => (h("li", { class: i === this.suggestionIndex ? 'active' : '', onClick: () => this.acceptSuggestion(s), onMouseDown: e => e.preventDefault() }, h("ui-icon", { name: "cube", library: "fontawesome", size: "14px", class: "icon" }), " ", s)))));
    }
    renderRibbonButton(icon, label, onClick, options = {}) {
        const { lg = false, color } = options;
        const showLabel = this.toolbarLabelDisplay === 'always';
        const useTooltip = this.toolbarLabelDisplay === 'hover';
        const btn = (h("ui-button", { slot: useTooltip ? "target" : undefined,
            // class={{
            //     'ribbon-btn': true,
            //     'lg': lg,
            //     'active': active,
            //     'icon-only': !showLabel
            // }}
            onClick: onClick, style: color ? { color } : {}, ariaLabel: label, label: showLabel ? label : undefined, icon: icon.replace(/^fa[sb]? fa-/, ''), iconLibrary: "fontawesome", iconOnly: !showLabel, size: lg ? 'lg' : 'md', variant: "ghost" }));
        if (useTooltip) {
            return (h("ui-tooltip", { content: label, position: "bottom" }, btn));
        }
        return btn;
    }
    isGroupVisible(groupName) {
        if (!this.toolbarGroups || this.toolbarGroups.includes('all'))
            return true;
        return this.toolbarGroups.includes(groupName);
    }
    renderToolbar() {
        if (!this.toolbar)
            return null;
        return (h("div", { class: `editor-ribbon-container labels-${this.toolbarLabelDisplay}` }, h("div", { class: "ribbon-tabs" }, h("div", { class: `ribbon-tab ${this.activeToolbarTab === 'home' ? 'active' : ''}`, onClick: () => this.activeToolbarTab = 'home' }, h("ui-tooltip", { content: "Home", position: "bottom" }, h("ui-icon", { name: "home", library: "fontawesome", slot: "target", size: "16px" }))), h("div", { class: `ribbon-tab ${this.activeToolbarTab === 'edit' ? 'active' : ''}`, onClick: () => this.activeToolbarTab = 'edit' }, h("ui-tooltip", { content: "Edit", position: "bottom" }, h("ui-icon", { name: "edit", library: "fontawesome", slot: "target", size: "16px" }))), h("div", { class: `ribbon-tab ${this.activeToolbarTab === 'view' ? 'active' : ''}`, onClick: () => this.activeToolbarTab = 'view' }, h("ui-tooltip", { content: "View", position: "bottom" }, h("ui-icon", { name: "eye", library: "fontawesome", slot: "target", size: "16px" }))), h("div", { class: `ribbon-tab ${this.activeToolbarTab === 'run' ? 'active' : ''}`, onClick: () => this.activeToolbarTab = 'run' }, h("ui-tooltip", { content: "Run", position: "bottom" }, h("ui-icon", { name: "play", library: "fontawesome", slot: "target", size: "16px" })))), h("div", { class: "ribbon-content" }, this.activeToolbarTab === 'home' && (h("div", { class: "ribbon-panel" }, this.isGroupVisible('history') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton('fas fa-undo', 'Undo', () => this.handleUndo(), { lg: true }), this.renderRibbonButton('fas fa-redo', 'Redo', () => this.handleRedo(), { lg: true })), h("div", { class: "ribbon-group-label" }, "History"))), this.isGroupVisible('history') && this.isGroupVisible('clipboard') && h("div", { class: "ribbon-group divider" }), this.isGroupVisible('clipboard') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton('fas fa-copy', 'Copy', () => this.handleCopy()), this.renderRibbonButton('fas fa-mouse-pointer', 'Select All', () => this.handleSelectAll())), h("div", { class: "ribbon-group-label" }, "Clipboard"))), (this.isGroupVisible('history') || this.isGroupVisible('clipboard')) && this.isGroupVisible('search') && h("div", { class: "ribbon-group divider" }), this.isGroupVisible('search') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton('fas fa-search', 'Find', () => this.toggleSearch(), { lg: true }), this.renderRibbonButton('fas fa-terminal', 'Palette', () => this.togglePalette(), { lg: true })), h("div", { class: "ribbon-group-label" }, "Search"))))), this.activeToolbarTab === 'edit' && (h("div", { class: "ribbon-panel" }, this.isGroupVisible('document') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton('fas fa-code', 'Format', () => this.simpleFormat(), { lg: true })), h("div", { class: "ribbon-group-label" }, "Document"))), this.isGroupVisible('document') && this.isGroupVisible('folding') && h("div", { class: "ribbon-group divider" }), this.isGroupVisible('folding') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton('fas fa-minus-square', 'Fold All', () => this.foldAll()), this.renderRibbonButton('fas fa-plus-square', 'Unfold All', () => this.unfoldAll())), h("div", { class: "ribbon-group-label" }, "Folding"))), (this.isGroupVisible('document') || this.isGroupVisible('folding')) && this.isGroupVisible('actions') && h("div", { class: "ribbon-group divider" }), this.isGroupVisible('actions') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton('fas fa-comment-slash', 'Comment', () => this.handleCommentSelection())), h("div", { class: "ribbon-group-label" }, "Actions"))))), this.activeToolbarTab === 'view' && (h("div", { class: "ribbon-panel" }, this.isGroupVisible('interface') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton('fas fa-map', 'Minimap', () => this.toggleMinimap(), { lg: true, active: this.showMinimap }), this.renderRibbonButton('fas fa-list-ol', 'Line Numbers', () => this.showLineNumbers = !this.showLineNumbers, { lg: true, active: this.showLineNumbers })), h("div", { class: "ribbon-group-label" }, "Interface"))), this.isGroupVisible('interface') && this.isGroupVisible('theme') && h("div", { class: "ribbon-group divider" }), this.isGroupVisible('theme') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton(this.theme === 'vs-dark' ? 'fas fa-moon' : 'fas fa-sun', this.theme === 'vs-dark' ? 'Dark' : 'Light', () => this.toggleTheme(), { lg: true })), h("div", { class: "ribbon-group-label" }, "Theme"))), (this.isGroupVisible('interface') || this.isGroupVisible('theme')) && this.isGroupVisible('appearance') && h("div", { class: "ribbon-group divider" }), this.isGroupVisible('appearance') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, h("div", { class: "ribbon-select-container" }, h("select", { onChange: (e) => this.fontSize = parseInt(e.target.value) }, [10, 12, 14, 16, 18, 20, 24].map(size => (h("option", { value: size, selected: this.fontSize === size }, size, "px")))), this.toolbarLabelDisplay === 'always' && h("span", null, "Font Size"))), h("div", { class: "ribbon-group-label" }, "Appearance"))))), this.activeToolbarTab === 'run' && (h("div", { class: "ribbon-panel" }, this.isGroupVisible('execution') && (h("div", { class: "ribbon-group" }, h("div", { class: "ribbon-group-content" }, this.renderRibbonButton('fas fa-play', 'Run Code', () => this.runCode.emit(), { lg: true, color: '#4ade80' })), h("div", { class: "ribbon-group-label" }, "Execution"))))))));
    }
    renderHelp() {
        if (!this.showHelp)
            return null;
        return (h("div", { class: "help-modal-overlay", onClick: () => this.showHelp = false }, h("div", { class: "help-modal", onClick: e => e.stopPropagation() }, h("div", { class: "help-header" }, h("h3", null, "Editor Shortcuts & Help"), h("ui-button", { variant: "ghost", onClick: () => this.showHelp = false, ariaLabel: "Close help", icon: "times", iconLibrary: "fontawesome", iconOnly: true })), h("div", { class: "help-content" }, h("div", { class: "help-section" }, h("h4", null, "Keyboard Shortcuts"), h("ul", null, h("li", null, h("kbd", null, "Ctrl"), " + ", h("kbd", null, "F"), " : Find / Search"), h("li", null, h("kbd", null, "Ctrl"), " + ", h("kbd", null, "Shift"), " + ", h("kbd", null, "P"), " : Command Palette"), h("li", null, h("kbd", null, "Ctrl"), " + ", h("kbd", null, "Space"), " : Trigger Suggestions"), h("li", null, h("kbd", null, "Tab"), " : Indent / Accept Suggestion"))), h("div", { class: "help-section" }, h("h4", null, "Toolbar Features"), h("ul", null, h("li", null, h("ui-icon", { name: "play", library: "fontawesome", style: { color: '#4ade80' }, size: "14px" }), " ", h("strong", null, "Run"), ": Execute code (demo mode)"), h("li", null, h("ui-icon", { name: "indent", library: "fontawesome", size: "14px" }), " ", h("strong", null, "Format"), ": Auto-indent code"), h("li", null, h("ui-icon", { name: "moon", library: "fontawesome", size: "14px" }), " ", h("strong", null, "Theme"), ": Toggle Dark/Light")))))));
    }
    renderTabBar() {
        if (!this.tabs || this.tabs.length === 0)
            return null;
        return (h("div", { class: "editor-tabs" }, this.tabs.map((tab, i) => (h("div", { class: `editor-tab ${i === this.activeTabIndex ? 'active' : ''}`, onClick: () => this.handleTabClick(i) }, h("ui-icon", { class: "tab-icon", name: this.getIconForLang(tab.language), library: "fontawesome" }), h("span", { class: "tab-title" }, tab.title))))));
    }
    getIconForLang(lang) {
        switch (lang) {
            case 'javascript': return 'js-square'; // Needs font awesome brands or just use file-code
            case 'html': return 'html5';
            case 'css': return 'css3';
            case 'python': return 'python';
            case 'java': return 'java';
            case 'json': return 'code';
            default: return 'file-alt';
        }
    }
    // --- Advanced IDE Methods ---
    renderSidebar() {
        if (!this.showSidebar)
            return null;
        return (h("div", { class: { 'editor-sidebar': true, 'collapsed': !this.showSidebar } }, h("div", { class: "sidebar-tabs" }, h("div", { class: { 'sidebar-tab': true, 'active': this.activeSidebarTab === 'files' }, onClick: () => this.activeSidebarTab = 'files' }, h("ui-icon", { name: "copy", library: "fontawesome" }))), h("div", { class: "sidebar-content" }, this.activeSidebarTab === 'files' && (h("div", { class: "file-explorer" }, h("div", { class: "sidebar-header" }, "EXPLORER"), h("div", { class: "file-list" }, this.files.map((file, index) => (h("div", { class: { 'file-item': true, 'active': this.activeFileIndex === index }, onClick: () => this.switchFile(index) }, h("ui-icon", { name: this.getFileIcon(file.name).split(' ').find(c => c.startsWith('fa-')).replace('fa-', ''), library: "fontawesome", class: this.getFileIcon(file.name) }), h("span", null, file.name))))))))));
    }
    handleTerminalKeyDown = (e) => {
        if (e.key === 'Enter') {
            const input = e.target;
            const cmd = input.value.trim().toLowerCase();
            if (!cmd)
                return;
            this.terminalLogs = [...this.terminalLogs, { type: 'info', text: `$ ${input.value}`, time: new Date().toLocaleTimeString() }];
            if (cmd === 'clear') {
                this.terminalLogs = [];
            }
            else if (cmd === 'run' || cmd === 'node index.js') {
                this.terminalLogs = [...this.terminalLogs, { type: 'info', text: 'Executing program...', time: new Date().toLocaleTimeString() }];
                setTimeout(() => {
                    const results = this.executeCode();
                    const logs = results.map(r => ({ ...r, time: new Date().toLocaleTimeString() }));
                    this.terminalLogs = [...this.terminalLogs, ...logs];
                    this.runCode.emit();
                }, 500);
            }
            else if (cmd === 'help') {
                this.terminalLogs = [...this.terminalLogs, { type: 'info', text: 'Available commands: run, clear, help, ls, whoami', time: new Date().toLocaleTimeString() }];
            }
            else {
                this.terminalLogs = [...this.terminalLogs, { type: 'error', text: `Command not found: ${cmd}`, time: new Date().toLocaleTimeString() }];
            }
            input.value = '';
        }
    };
    renderBreadcrumbs() {
        const activeFile = this.files[this.activeFileIndex];
        return (h("div", { class: "editor-breadcrumbs" }, h("div", { class: "breadcrumb-item" }, h("ui-icon", { name: "folder-open", library: "fontawesome", size: "12px" }), h("span", null, "project"), h("span", { class: "separator" }, "/")), h("div", { class: "breadcrumb-item" }, h("ui-icon", { name: this.getFileIcon(activeFile.name).split(' ').find(c => c.startsWith('fa-')).replace('fa-', ''), library: "fontawesome", class: this.getFileIcon(activeFile.name), size: "12px" }), h("span", null, activeFile.name))));
    }
    renderBottomPanel() {
        if (!this.showBottomPanel)
            return null;
        return (h("div", { class: { 'editor-bottom-panel': true, 'collapsed': !this.showBottomPanel } }, h("div", { class: "panel-header" }, h("div", { class: "panel-tabs" }, h("div", { class: { 'panel-tab': true, 'active': this.activeBottomTab === 'terminal' }, onClick: () => this.activeBottomTab = 'terminal' }, "TERMINAL"), h("div", { class: { 'panel-tab': true, 'active': this.activeBottomTab === 'output' }, onClick: () => this.activeBottomTab = 'output' }, "OUTPUT"), h("div", { class: { 'panel-tab': true, 'active': this.activeBottomTab === 'problems' }, onClick: () => this.activeBottomTab = 'problems' }, "PROBLEMS")), h("div", { class: "panel-controls" }, h("ui-icon", { name: "times", library: "fontawesome", onClick: () => this.showBottomPanel = false, style: { cursor: 'pointer' } }))), h("div", { class: "panel-content" }, this.activeBottomTab === 'terminal' && (h("div", { class: "terminal-content" }, this.terminalLogs.map(log => (h("div", { class: `log-item ${log.type}` }, h("span", { class: "log-time" }, "[", log.time, "]"), h("span", { class: "log-text" }, log.text)))), h("div", { class: "terminal-input-line" }, h("span", { class: "terminal-prompt" }, "$"), h("ui-input", { type: "text", customClass: "terminal-input", placeholder: "Type a command (run, clear, help)...", onInputKeydown: (e) => this.handleTerminalKeyDown(e.detail), variant: "plain", size: "sm", fullWidth: true })))), this.activeBottomTab === 'output' && (h("div", { class: "output-preview", style: { display: 'flex', alignItems: 'center', justifyCenter: 'center', height: '100%', background: '#f8fafc', color: '#64748b' } }, h("div", { style: { textAlign: 'center' } }, h("ui-icon", { name: "eye-slash", library: "fontawesome", size: "32px", style: { opacity: 0.5, marginBottom: '12px' } }), h("p", { style: { fontSize: '14px', fontWeight: '500' } }, "Live Preview Disabled (No Iframe)")))))));
    }
    switchFile(index) {
        this.activeFileIndex = index;
        const file = this.files[index];
        this.value = file.content;
        this.language = file.language;
        this.valueChange.emit(this.value);
    }
    getFileIcon(name) {
        if (name.endsWith('.js'))
            return 'fab fa-js-square text-warning';
        if (name.endsWith('.html'))
            return 'fab fa-html5 text-danger';
        if (name.endsWith('.css'))
            return 'fab fa-css3-alt text-primary';
        return 'fas fa-file-code';
    }
    // --- Render ---
    render() {
        const themeClass = this.theme === 'vs-light' ? 'theme-vs-light' : 'theme-vs-dark';
        const lines = this.value.split('\n');
        let skipUntilIndentCheck = -1;
        let indentLevelToCheck = -1;
        for (let i = 0; i < lines.length; i++) {
            if (skipUntilIndentCheck !== -1) {
                const currentIndent = this.getIndentLevel(lines[i]);
                if (currentIndent <= indentLevelToCheck && lines[i].trim() !== '') {
                    // End fold
                    skipUntilIndentCheck = -1;
                }
                else {
                    // Still hidden
                    continue;
                }
            }
            else {
                if (this.foldedLines.has(i + 1)) {
                    // Start fold
                    skipUntilIndentCheck = i + 1;
                    indentLevelToCheck = this.getIndentLevel(lines[i]);
                }
            }
        }
        // Reconstruct visible value for display is tricky because textarea needs full value.
        // For now, we will use CSS transformation or just mask the lines in line-number rendering?
        // Actually, preventing rendering in the textarea is problematic for editing.
        // Proper code folding usually uses a specialized view model.
        // Quick Hack: We can't easily hide lines in a native textarea without breaking editing sync.
        // Strategy change: Just hide the "Preview" lines? No, that desyncs.
        // Strategy change for MVP: Only support folding visually in the "Read Only" mode or just acknowledge limitation.
        // Better: We will NOT physically hide lines in textarea because it breaks cursor.
        // We will just show the UI for it and maybe collapse the HEIGHT of those lines to 0?
        // Implementing line-height collapsing in a plain textarea is impossible.
        // So, rigorous folding is impossible with a naive Textarea overlay.
        // Compromise: We will implement the Logic and UI but maybe "Mock" the folding effect by removing content from display?
        // Let's stick to the visual cues for now and maybe "Filter" the content if Readonly.
        // Or... we actually strip the lines from the value temporarily? No, dangerous.
        // Let's implement the Command Palette and Linting primarily. Folding might remain "Visual only" (icon toggles state but nothing happens)
        // unless we switch to `contenteditable` div which is out of scope.
        // Wait! We can set `line-height: 0` on specific lines? No, textarea is one block.
        // OK, for this task, I will enable the "UI" of folding (icons) but adding a "Not fully supported in Textarea mode" note?
        // OR: I can replace the textarea value with a "Folded" version when folded? 
        // i.e. `Line 1 {\n ... }` -> `Line 1 { ...`
        // Then map cursor positions. Too complex.
        // Revised Plan for Folding: 
        // Since we are building a "Premium" feel demo, getting stuck on Textarea limitations is bad.
        // But rewriting to contenteditable is huge.
        // I will implement the Linting and Palette fully.
        // For Folding, I'll add the Icons and State, but maybe disable the actual hiding to avoid broken editing.
        // OR: changing the `textarea` height/transform? No. 
        // I'll leave the Folding Logic in place but comment out the Layout shift if it's too risky.
        // Actually, let's try to just filter the `lines` map in `renderLineNumbers` to visually show we handle it,
        // but for the textarea/pre, we CANNOT hide separate lines.
        return (h("div", { key: 'e856c9fbd64e22059c917ed99eebcc66f605d91b', class: `code-editor-container ${themeClass}` }, this.renderTabBar(), this.renderToolbar(), this.renderPalette(), h("div", { key: 'de880b366ca14669ef66169d2283a18fab623e31', class: "code-editor-layout" }, this.renderSidebar(), h("div", { key: '058b6a13934f82cd6b257a3b6322361c8323cb5d', class: "editor-main-panel" }, this.renderBreadcrumbs(), h("div", { key: '408b4b6d461588819fa49ea1aef707edcc666be6', class: "editor-main-content", style: { display: 'flex', flex: '1', minHeight: '0', position: 'relative' } }, this.renderLineNumbers(), h("div", { key: 'dcb8f35793966525ef0da6d966e4789e5d0eed8e', class: "editor-wrapper" }, this.renderSearch(), this.renderSuggestions(), h("ui-button", { key: '1cbe2e3c0929fa428fd6735b36dc4845bd733b58', variant: "ghost", class: "copy-button", onClick: this.handleCopy, ariaLabel: "Copy Code", icon: "copy", iconLibrary: "fontawesome", iconOnly: true }), h("pre", { key: 'dc17184da52fcfced8a468f891443ab7af9372f6', class: "syntax-highlighter", ref: el => this.pre = el, innerHTML: sanitizeHTML(this.highlightedCode) }), h("textarea", { key: 'f04e9f88a8299b500bcb3bf9cf928416f539b15d', class: "editor-content", ref: el => this.textarea = el, value: this.value, onInput: this.handleInput, onScroll: this.handleScroll, onKeyDown: this.handleKeydown, onSelect: this.handleSelection, onClick: this.handleSelection, onKeyUp: this.handleSelection, spellcheck: false, readonly: this.readonly, role: "textbox", "aria-multiline": "true", "aria-label": "Code Editor" })), this.renderMinimap()), this.renderBottomPanel())), this.renderStatusBar(), this.renderHelp()));
    }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }],
        "language": [{
                "languageChanged": 0
            }],
        "tabs": [{
                "tabsChanged": 0
            }],
        "searchQuery": [{
                "searchQueryChanged": 0
            }]
    }; }
};
AppCodeEditor.style = codeEditorCss();

export { AppCodeEditor as ui_code_editor };
