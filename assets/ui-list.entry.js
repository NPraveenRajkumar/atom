import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const listCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.list-container{display:flex;flex-direction:column;background:var(--bg-primary, #ffffff);border-radius:12px;overflow:hidden;font-family:var(--font-family);box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03);transition:all 0.3s ease;width:100%}.list-label{padding:16px 20px 8px;font-size:1.125rem;font-weight:700;color:var(--text-primary, #1e293b)}.list-subheader{padding:4px 20px 12px;font-size:0.8125rem;font-weight:600;color:var(--text-muted, #64748b);text-transform:uppercase;letter-spacing:0.05em}.list{display:flex;flex-direction:column;width:100%}.list.list-horizontal{flex-direction:row;overflow-x:auto;padding:8px;gap:8px}.list.list-horizontal::-webkit-scrollbar{display:none}.list-search{padding:12px 20px;display:flex;align-items:center;gap:10px;background:var(--bg-primary, #f8fafc);border-bottom:1px solid var(--border-subtle, #f1f5f9);position:relative}.list-search .search-icon{font-size:0.875rem;color:var(--color-primary, #94a3b8)}.list-search .search-input{flex:1;border:none;background:transparent;font-size:14px;outline:none;color:var(--text-primary, #1e293b)}.list-search .search-input::placeholder{color:var(--color-primary, #cbd5e1)}.list-search .search-clear{background:var(--bg-primary, #e2e8f0);border:none;border-radius:50%;width:18px;height:18px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--color-primary, #475569);font-size:10px;transition:all 0.2s}.list-search .search-clear:hover{background:var(--color-primary, #cbd5e1)}.list-loading,.list-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:48px 24px;gap:16px;color:var(--color-primary, #94a3b8);text-align:center}.list-loading ui-icon,.list-empty ui-icon{font-size:32px;opacity:0.5}.list-loading span,.list-empty span{font-size:14px;font-weight:500}.list-pagination{padding:12px 20px;border-top:1px solid var(--border-subtle, #f1f5f9);display:flex;align-items:center;justify-content:center;gap:6px;background:var(--bg-primary, #f8fafc)}.list-pagination .pagination-button{min-width:32px;height:32px;border-radius:8px;border:1px solid transparent;background:transparent;color:var(--text-muted, #64748b);font-weight:600;font-size:13px;cursor:pointer;display:flex;align-items:center;justify-content:center;transition:all 0.2s}.list-pagination .pagination-button:hover:not(:disabled){background:var(--bg-primary, #ffffff);border-color:var(--border-subtle, #e2e8f0);color:var(--color-primary, #10b981)}.list-pagination .pagination-button.active{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff)}.list-pagination .pagination-button:disabled{opacity:0.3;cursor:not-allowed}.list-pagination .pagination-ellipsis{color:var(--color-primary, #cbd5e1);font-size:12px;padding:0 4px}.list[style*=max-height]::-webkit-scrollbar{width:8px}.list[style*=max-height]::-webkit-scrollbar-track{background:transparent}.list[style*=max-height]::-webkit-scrollbar-thumb{background:var(--bg-primary, #e2e8f0);border-radius:10px;border:2px solid transparent;background-clip:content-box}.list[style*=max-height]::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #cbd5e1);background-clip:content-box}.virtual-list{contain:strict;will-change:transform}.list-container{overflow:visible}.list-container.list-has-selection .list-header-adaptive{background:var(--bg-primary, #eff6ff);border-bottom-color:var(--color-primary, #bfdbfe)}.list-container.list-has-selection .list-label{color:var(--color-primary, #1e40af)}.list-container.list-has-selection .list-search{display:none}.list-container.selection-theme-primary.list-has-selection .list-header-adaptive{background:linear-gradient(135deg, var(--color-success, #3dcd58), var(--color-success, #2a9d47))}.list-container.selection-theme-primary.list-has-selection .list-header-adaptive .list-label,.list-container.selection-theme-primary.list-has-selection .list-header-adaptive .list-subheader{color:var(--text-standard, #ffffff)}.list-header-adaptive{transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.list-bulk-header{border-top:none;display:flex;align-items:center;justify-content:space-between;padding:12px 20px;background:var(--bg-secondary, #f1f5f9);border-bottom:1px solid var(--border-subtle, #e2e8f0);animation:slideDownBulk 0.3s ease-out}.list-bulk-header .bulk-select-all{display:flex;align-items:center;gap:12px;font-size:0.875rem;font-weight:600;color:var(--color-primary, #475569)}.list-bulk-header .bulk-actions{display:flex;align-items:center;gap:8px}.list-bulk-header .bulk-action-btn{display:flex;align-items:center;gap:6px;padding:6px 12px;border:none;background:var(--bg-primary, #ffffff);border-radius:6px;color:var(--text-primary, #1e293b);font-size:0.8125rem;font-weight:600;cursor:pointer;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05);transition:all 0.2s}.list-bulk-header .bulk-action-btn:hover{background:var(--bg-primary, #f8fafc);transform:translateY(-1px)}.list-bulk-header .bulk-action-btn:active{transform:translateY(0)}.list-bulk-header .bulk-action-btn ui-icon{font-size:0.875rem}.list-bulk-header .bulk-action-btn ui-icon[name=trash],.list-bulk-header .bulk-action-btn ui-icon[name=archive]{color:var(--color-danger, #ef4444)}@keyframes slideDownBulk{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}.sticky-header{position:sticky;top:0;z-index:20;background:var(--bg-primary, #ffffff);box-shadow:0 1px 3px rgba(0, 0, 0, 0.1)}.list-sync-bar{height:2px;width:100%;background:var(--bg-secondary, #f3f4f6);position:relative;overflow:hidden}.list-sync-bar::after{content:"";position:absolute;top:0;left:0;bottom:0;width:30%;background:var(--color-primary, #10b981);animation:listSyncMode 2s infinite linear}@keyframes listSyncMode{0%{left:-30%}100%{left:100%}}.list-filter-chips{display:flex;align-items:center;gap:8px;padding:8px 16px;overflow-x:auto;border-bottom:1px solid var(--border-subtle, #f1f5f9)}.list-filter-chips::-webkit-scrollbar{display:none}.list-filter-chips .filter-chip{flex-shrink:0;padding:6px 14px;border-radius:20px;border:1px solid var(--border-subtle, #e2e8f0);background:var(--bg-primary, #ffffff);font-size:0.75rem;font-weight:600;color:var(--color-primary, #475569);cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:6px}.list-filter-chips .filter-chip:hover{background:var(--bg-primary, #f8fafc);color:var(--bg-primary, #1e293b)}.list-filter-chips .filter-chip.active{background:var(--bg-primary, #1e293b);color:var(--text-standard, #ffffff);border-color:var(--border-subtle, #1e293b)}.list-filter-chips .filter-chip .chip-count{opacity:0.6;font-weight:400}.list-sorting-headers{display:flex;background:var(--bg-primary, #f8fafc);border-bottom:1px solid var(--border-subtle, #f1f5f9);padding:8px 16px}.list-sorting-headers .sort-header{flex:1;font-size:0.6875rem;font-weight:700;color:var(--text-muted, #64748b);text-transform:uppercase;letter-spacing:0.05em;display:flex;align-items:center;gap:4px;cursor:pointer}.list-sorting-headers .sort-header:hover{color:var(--text-primary, #1e293b)}.list-sorting-headers .sort-header ui-icon{font-size:0.75rem;opacity:0.4}.list-group-footer{padding:8px 16px;background:var(--bg-primary, #fdfdfd);border-top:1px solid var(--border-subtle, #f1f5f9);font-size:0.6875rem;font-weight:700;color:var(--color-primary, #94a3b8);text-transform:uppercase;letter-spacing:0.025em;text-align:right}.list-floating-fab{position:absolute;bottom:24px;right:24px;width:56px;height:56px;border-radius:28px;background:var(--bg-primary, #1e293b);color:var(--text-standard, #ffffff);display:flex;align-items:center;justify-content:center;box-shadow:0 4px 14px rgba(0, 0, 0, 0.25);cursor:pointer;z-index:100;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);animation:fabShow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.list-floating-fab:hover{background:var(--color-primary, #334155);transform:scale(1.1)}.list-floating-fab:active{transform:scale(0.95)}.list-floating-fab ui-icon{font-size:1.25rem}@keyframes fabShow{from{transform:scale(0) translateY(20px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}.list-shortcut-palette,.list-quick-look-modal{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(15, 23, 42, 0.4);backdrop-filter:blur(8px);z-index:1000;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.2s ease-out}.palette-content{background:var(--bg-primary, #ffffff);width:90%;max-width:440px;border-radius:20px;padding:32px;box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25)}.palette-content h3{margin:0 0 20px;font-size:1.125rem;font-weight:700;color:var(--text-primary, #1e293b)}.palette-content .shortcut-grid{display:flex;flex-direction:column;gap:12px}.palette-content .s-row{display:flex;align-items:center;gap:12px;font-size:0.875rem;color:var(--text-muted, #64748b)}.palette-content kbd{background:var(--bg-secondary, #f1f5f9);border:1px solid var(--border-subtle, #e2e8f0);border-bottom-width:3px;padding:2px 6px;border-radius:4px;font-family:inherit;font-weight:700;color:var(--text-primary, #1e293b);min-width:24px;text-align:center}.quick-look-content{background:var(--bg-primary, #ffffff);width:90%;max-width:600px;border-radius:24px;padding:0;overflow:hidden;box-shadow:0 40px 80px -20px rgba(0, 0, 0, 0.3);position:relative}.quick-look-content .close-look{position:absolute;top:20px;right:20px;cursor:pointer;opacity:0.5}.quick-look-content .close-look:hover{opacity:1}.quick-look-content .look-header{background:var(--bg-primary, #f8fafc);padding:40px 48px 32px;border-bottom:1px solid var(--border-subtle, #f1f5f9)}.quick-look-content .look-header h2{margin:0;font-size:1.5rem;color:var(--text-primary, #1e293b)}.quick-look-content .look-header span{color:var(--text-muted, #64748b);font-size:0.875rem}.quick-look-content .look-body{padding:32px 48px 48px}.quick-look-content .look-body p{color:var(--color-primary, #475569);line-height:1.6}.quick-look-content .look-body .look-stats{display:flex;gap:40px;margin-top:24px}.quick-look-content .look-body .l-stat{font-size:0.8125rem;color:var(--color-primary, #94a3b8)}.quick-look-content .look-body .l-stat strong{display:block;font-size:1.125rem;color:var(--text-primary, #1e293b);font-weight:700}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.list-lasso-box{position:absolute;background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.15);border:1px solid var(--color-primary, #10b981);border-radius:2px;pointer-events:none;z-index:100;box-shadow:0 0 10px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.list-focus-spring-ring{position:absolute;left:0;right:0;border:2px solid var(--color-primary, #10b981);border-radius:8px;pointer-events:none;z-index:10;transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.04)}.list-view-tabs{display:flex;gap:24px;margin-left:24px;align-items:center}.list-view-tabs .view-tab{font-size:0.8125rem;font-weight:600;color:var(--text-muted, #64748b);cursor:pointer;position:relative;transition:color 0.2s}.list-view-tabs .view-tab.active{color:var(--text-primary, #1e293b)}.list-view-tabs .view-tab.active::after{content:"";position:absolute;bottom:-8px;left:0;right:0;height:2px;background:var(--color-primary, #10b981);border-radius:1px}.list-header-adaptive{display:flex;justify-content:space-between;align-items:center;padding:16px 24px;border-bottom:1px solid var(--border-subtle, #f1f5f9)}.list-header-adaptive .header-main-titles{flex:1}.list-power-launcher-container{position:absolute;bottom:24px;right:24px;z-index:1000;display:flex;flex-direction:column;align-items:flex-end;gap:12px}.list-power-launcher-container .launcher-fab{width:56px;height:56px;border-radius:50%;background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff);display:flex;align-items:center;justify-content:center;font-size:1.5rem;box-shadow:0 10px 25px rgba(var(--color-primary-rgb, 59, 130, 246), 0.4);cursor:pointer;transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.list-power-launcher-container .launcher-fab.active{background:var(--bg-primary, #1e293b);transform:rotate(90deg)}.list-power-launcher-container .launcher-fab:hover{transform:scale(1.1)}.list-power-launcher-container .launcher-menu{background:rgba(255, 255, 255, 0.85);backdrop-filter:blur(12px);border:1px solid rgba(255, 255, 255, 0.5);border-radius:20px;padding:12px;width:240px;box-shadow:0 20px 50px rgba(0, 0, 0, 0.15);animation:launcherShow 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.list-power-launcher-container .launcher-menu .l-item{display:flex;align-items:center;gap:12px;padding:12px 16px;border-radius:12px;font-size:0.875rem;font-weight:600;color:var(--color-primary, #475569);cursor:pointer;transition:all 0.2s}.list-power-launcher-container .launcher-menu .l-item ui-icon{font-size:1rem;opacity:0.7}.list-power-launcher-container .launcher-menu .l-item:hover{background:var(--bg-secondary, #f1f5f9);color:var(--bg-primary, #1e293b)}.list-power-launcher-container .launcher-menu .l-item.danger{color:var(--color-danger, #ef4444)}.list-power-launcher-container .launcher-menu .l-item.danger:hover{background:var(--bg-primary, #fef2f2)}@keyframes launcherShow{from{transform:scale(0.8) translateY(20px);opacity:0}to{transform:scale(1) translateY(0);opacity:1}}.list-sync-bar{position:absolute;top:0;left:0;right:0;height:2px;background:var(--color-primary, #10b981);animation:syncProgress 2s linear infinite}@keyframes syncProgress{0%{transform:scaleX(0);transform-origin:left}50%{transform:scaleX(1);transform-origin:left}51%{transform:scaleX(1);transform-origin:right}100%{transform:scaleX(0);transform-origin:right}}.list-ekg-container{position:absolute;bottom:0;left:0;right:0;height:20px;overflow:hidden;pointer-events:none;opacity:0.3}.list-ekg-waveform path{stroke-dasharray:200;stroke-dashoffset:200;animation:ekgScroll 4s linear infinite}@keyframes ekgScroll{to{stroke-dashoffset:-200}}@media (forced-colors: active){.list-item,.list-group-header,.list-header,.list-footer{border:1px solid CanvasText}.list-focus-spring-ring{outline:3px solid Highlight;background:transparent}}.list-confetti-burst{position:absolute;top:50%;left:50%;pointer-events:none;z-index:1000}.list-confetti-burst .confetti-particle{position:absolute;width:8px;height:8px;background:var(--color-primary, #10b981);border-radius:2px;animation:confettiFall 2s ease-out forwards}@keyframes confettiFall{0%{transform:translate(0, 0) rotate(0deg);opacity:1}100%{transform:translate(var(--dx), var(--dy)) rotate(360deg);opacity:0}}.group-header-custom{display:flex;align-items:center;gap:16px;padding:12px 24px;background:var(--bg-primary, #f8fafc);cursor:pointer;border-bottom:1px solid var(--border-subtle, #f1f5f9)}.group-header-custom .group-title-label{font-weight:700;color:var(--text-primary, #1e293b);flex:1;text-transform:uppercase;letter-spacing:0.1em;font-size:0.75rem}.group-header-custom .group-pill{background:var(--border-subtle, #e2e8f0);padding:2px 8px;border-radius:12px;font-size:0.7rem;color:var(--color-primary, #64748b);font-weight:800}.group-mini-dashboard{background:rgba(255, 255, 255, 0.7);backdrop-filter:blur(10px);padding:16px 32px;display:flex;align-items:center;gap:40px;border-bottom:1px solid rgba(0, 0, 0, 0.05);animation:slideDownFade 0.3s ease-out}.group-mini-dashboard .gm-stat{font-size:0.8125rem;color:var(--text-muted, #64748b)}.group-mini-dashboard .gm-stat strong{display:block;color:var(--text-primary, #1e293b);font-size:1.1rem}@keyframes slideDownFade{from{transform:translateY(-10px);opacity:0}to{transform:translateY(0);opacity:1}}.presence-cursors-layer{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:1000}.ghost-cursor{position:absolute;display:flex;align-items:center;gap:8px;transition:all 0.5s cubic-bezier(0.175, 0.885, 0.32, 1.275);pointer-events:none}.ghost-cursor ui-icon{font-size:1.25rem;filter:drop-shadow(0 2px 4px rgba(0, 0, 0, 0.2))}.ghost-cursor .cursor-label{background:var(--bg-primary, #ffffff);padding:4px 10px;border-radius:20px;font-size:0.75rem;font-weight:700;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);white-space:nowrap;border:1px solid rgba(0, 0, 0, 0.05)}.ghost-cursor.cursor-blue ui-icon{color:var(--color-primary, #10b981)}.ghost-cursor.cursor-blue .cursor-label{color:var(--color-primary, #10b981)}.ghost-cursor.cursor-purple ui-icon{color:var(--color-primary, #a855f7)}.ghost-cursor.cursor-purple .cursor-label{color:var(--color-primary, #a855f7)}.ghost-cursor.cursor-green ui-icon{color:var(--color-success, #10b981)}.ghost-cursor.cursor-green .cursor-label{color:var(--color-success, #10b981)}.is-morphing .list-item{transition:all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.is-morphing .list-item-avatar-container,.is-morphing ui-avatar{transform:scale(1.15)}.list-item-aura-online{background:linear-gradient(135deg, rgba(var(--color-success-rgb, 16, 185, 129), 0.03), rgba(255, 255, 255, 0))}.list-item-aura-online.list-item-hovered{background:linear-gradient(135deg, rgba(var(--color-success-rgb, 16, 185, 129), 0.08), rgba(255, 255, 255, 0))}.list-item-aura-danger{background:linear-gradient(135deg, rgba(var(--color-danger-rgb, 239, 68, 68), 0.04), rgba(255, 255, 255, 0));position:relative}.list-item-aura-danger::before{content:"";position:absolute;inset:0;background:radial-gradient(circle at 10% 50%, rgba(var(--color-danger-rgb, 239, 68, 68), 0.05), transparent 70%);animation:auraShift 8s infinite alternate}@keyframes auraShift{from{transform:translateX(-5%)}to{transform:translateX(5%)}}.list-command-palette-overlay{position:fixed;inset:0;background:rgba(15, 23, 42, 0.4);backdrop-filter:blur(12px);z-index:2000;display:flex;align-items:flex-start;justify-content:center;padding-top:15vh;animation:fadeIn 0.2s ease-out}.list-command-palette-overlay .command-palette-content{width:100%;max-width:600px;background:var(--bg-primary, #ffffff);border-radius:16px;box-shadow:0 25px 70px rgba(0, 0, 0, 0.3);overflow:hidden;border:1px solid rgba(255, 255, 255, 0.2)}.list-command-palette-overlay .command-palette-content .cp-search{display:flex;align-items:center;padding:20px 24px;border-bottom:1px solid var(--border-subtle, #f1f5f9);gap:16px}.list-command-palette-overlay .command-palette-content .cp-search ui-icon{font-size:1.25rem;color:var(--color-primary, #94a3b8)}.list-command-palette-overlay .command-palette-content .cp-search input{flex:1;border:none;outline:none;font-size:1.1rem;color:var(--text-primary, #1e293b);font-weight:500;background:transparent}.list-command-palette-overlay .command-palette-content .cp-search kbd{font-size:0.75rem;padding:4px 8px;background:var(--bg-primary, #f8fafc);border:1px solid var(--border-subtle, #e2e8f0);border-radius:6px;color:var(--color-primary, #94a3b8)}.list-command-palette-overlay .command-palette-content .cp-results{max-height:400px;overflow-y:auto;padding:8px}.list-command-palette-overlay .command-palette-content .cp-results .cp-item{display:flex;align-items:center;gap:16px;padding:12px 16px;border-radius:10px;cursor:pointer;transition:all 0.2s}.list-command-palette-overlay .command-palette-content .cp-results .cp-item ui-icon{color:var(--text-muted, #64748b);font-size:1.1rem}.list-command-palette-overlay .command-palette-content .cp-results .cp-item span{font-size:0.9375rem;color:var(--color-primary, #334155);font-weight:500}.list-command-palette-overlay .command-palette-content .cp-results .cp-item:hover{background:var(--bg-secondary, #f1f5f9)}.list-command-palette-overlay .command-palette-content .cp-results .cp-item:hover ui-icon{color:var(--color-primary, #10b981)}.list-command-palette-overlay .command-palette-content .cp-results .cp-item:hover span{color:var(--text-primary, #1e293b)}.list-scrollbar-minimap{position:absolute;top:0;right:0;bottom:0;width:4px;background:rgba(0, 0, 0, 0.03);z-index:100;pointer-events:none}.list-scrollbar-minimap .m-marker{position:absolute;left:0;right:0;height:3px;border-radius:2px}.list-scrollbar-minimap .m-marker.m-online{background:var(--color-success, #10b981)}.list-scrollbar-minimap .m-marker.m-busy{background:var(--color-warning, #f59e0b)}.list-scrollbar-minimap .m-marker.m-danger{background:var(--color-danger, #ef4444)}`;

const AppList = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.listItemSelect = createEvent(this, "listItemSelect");
        this.listChange = createEvent(this, "listChange");
        this.listStarToggle = createEvent(this, "listStarToggle");
        this.swipeAction = createEvent(this, "swipeAction");
        this.longPress = createEvent(this, "longPress");
        this.searchChange = createEvent(this, "searchChange");
        this.itemsReorder = createEvent(this, "itemsReorder");
        this.pageChange = createEvent(this, "pageChange");
        this.loadMore = createEvent(this, "loadMore");
        this.bulkAction = createEvent(this, "bulkAction");
        this.columnSort = createEvent(this, "columnSort");
    }
    get el() { return getElement(this); }
    label = '';
    size = 'md';
    color = 'default';
    variant = 'text';
    dense = false;
    dividers = false;
    rounded = false;
    elevated = false;
    selectable = true;
    multiSelect = false;
    selectedValues = [];
    maxHeight = '';
    fullWidth = false;
    padding = true;
    subheader = '';
    // New enhanced features
    virtual = false;
    itemHeight = 48;
    items = [];
    searchable = false;
    searchPlaceholder = 'Search...';
    searchQuery = '';
    loading = false;
    loadingText = 'Loading...';
    skeleton = false;
    emptyText = 'No items found';
    showEmpty = true;
    isDraggable = false;
    paginated = false;
    itemsPerPage = 10;
    currentPage = 1;
    checkboxSelection = false;
    keyboardNavigation = true;
    grouped = false;
    groupBy = '';
    // New Variants
    flush = false;
    horizontal = false;
    numbered = false;
    infinite = false;
    loadMoreThreshold = 50;
    stickyHeaders = false;
    showBulkHeader = false;
    bulkActions = []; // [{icon:'', label:'', action:''}]
    grid = false;
    gridCols = 3;
    dragGroup = '';
    altMode = true; // Enable Ghost Layer
    altKeyPressed = false;
    isPowerLauncherOpen = false;
    emptyStateTitle = 'No results found';
    emptyStateActionLabel = '';
    selectionHeaderColor = 'primary';
    ariaLabel = 'System Cluster List'; // Accessibility Root Label
    density = 'comfortable';
    viewTabs = []; // [{label:'', filter:''}]
    commandK = true;
    showMinimap = true;
    isCommandKOpen = false;
    commandQuery = '';
    activeTab = 0;
    focusRingTop = -1;
    focusRingHeight = 0;
    showConfetti = false;
    isEKGActive = true;
    groupDashboards = new Set();
    syncing = false;
    filterChips = []; // [{label:'', value:'', active:false}]
    showSortingHeaders = false;
    columns = []; // [{label:'', key:'', sortable:true}]
    showGroupFooter = false;
    groupFooterLabel = 'Items'; // "Total: 5 Items"
    floatingFAB = false;
    isPaletteOpen = false;
    isQuickLookOpen = false;
    shiftSelectionStartIndex = -1;
    scrollTop = 0;
    lassoActive = false;
    lassoStart = { x: 0, y: 0 };
    lassoEnd = { x: 0, y: 0 };
    visibleItems = [];
    filteredItems = [];
    focusedIndex = -1;
    draggedItem = null;
    totalPages = 1;
    listItemSelect;
    listChange;
    listStarToggle;
    swipeAction;
    longPress;
    searchChange;
    itemsReorder;
    pageChange;
    loadMore;
    bulkAction;
    columnSort;
    _sortColumn = '';
    _sortDir = 'asc';
    listRef;
    scrollTimeout;
    componentWillLoad() {
        try {
            this.filterItems();
        }
        catch (e) {
            console.error('[AppList] Error filtering items:', e);
        }
    }
    componentDidLoad() {
        if (this.virtual) {
            this.updateVisibleItems();
        }
    }
    handleItemsChange() {
        this.filterItems();
    }
    filterItems() {
        let items = [...this.items];
        // Apply search filter
        if (this.searchQuery && this.searchable) {
            const query = this.searchQuery.toLowerCase();
            items = items.filter(item => {
                if (typeof item === 'string')
                    return item.toLowerCase().includes(query);
                if (item.label)
                    return item.label.toLowerCase().includes(query);
                if (item.text)
                    return item.text.toLowerCase().includes(query);
                return JSON.stringify(item).toLowerCase().includes(query);
            });
        }
        this.filteredItems = items;
        // Calculate pagination
        if (this.paginated) {
            this.totalPages = Math.ceil(items.length / this.itemsPerPage);
            const start = (this.currentPage - 1) * this.itemsPerPage;
            const end = start + this.itemsPerPage;
            this.filteredItems = items.slice(start, end);
        }
        if (this.virtual) {
            this.updateVisibleItems();
        }
    }
    getGroupedItems() {
        if (!this.grouped || !this.groupBy)
            return null;
        const groups = {};
        this.filteredItems.forEach(item => {
            const key = item[this.groupBy] || 'Other';
            if (!groups[key])
                groups[key] = [];
            groups[key].push(item);
        });
        return groups;
    }
    updateVisibleItems() {
        if (!this.listRef || !this.virtual)
            return;
        const containerHeight = this.listRef.clientHeight || 400;
        const startIndex = Math.floor(this.scrollTop / this.itemHeight);
        const endIndex = Math.ceil((this.scrollTop + containerHeight) / this.itemHeight);
        this.visibleItems = this.filteredItems.slice(Math.max(0, startIndex - 5), Math.min(this.filteredItems.length, endIndex + 5));
    }
    handleScroll = (e) => {
        const target = e.target;
        this.scrollTop = target.scrollTop;
        if (this.virtual) {
            clearTimeout(this.scrollTimeout);
            this.scrollTimeout = setTimeout(() => {
                this.updateVisibleItems();
            }, 50);
        }
        if (this.infinite) {
            const scrollBottom = target.scrollHeight - target.scrollTop - target.clientHeight;
            if (scrollBottom < this.loadMoreThreshold) {
                this.loadMore.emit();
            }
        }
    };
    handleLassoStart = (e) => {
        if (this.isPaletteOpen || this.isQuickLookOpen)
            return;
        if (!e.target.classList.contains('list'))
            return;
        this.lassoActive = true;
        const rect = this.listRef.getBoundingClientRect();
        this.lassoStart = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        this.lassoEnd = { ...this.lassoStart };
        document.addEventListener('mousemove', this.handleLassoMove);
        document.addEventListener('mouseup', this.handleLassoEnd);
    };
    handleLassoMove = (e) => {
        if (!this.lassoActive)
            return;
        const rect = this.listRef.getBoundingClientRect();
        this.lassoEnd = { x: e.clientX - rect.left, y: e.clientY - rect.top };
        this.checkLassoSelection();
    };
    handleLassoEnd = () => {
        this.lassoActive = false;
        document.removeEventListener('mousemove', this.handleLassoMove);
        document.removeEventListener('mouseup', this.handleLassoEnd);
    };
    checkLassoSelection() {
        const x1 = Math.min(this.lassoStart.x, this.lassoEnd.x);
        const x2 = Math.max(this.lassoStart.x, this.lassoEnd.x);
        const y1 = Math.min(this.lassoStart.y, this.lassoEnd.y);
        const y2 = Math.max(this.lassoStart.y, this.lassoEnd.y);
        const itemEls = this.listRef.querySelectorAll('ui-list-item');
        const newValues = [...this.selectedValues];
        itemEls.forEach((el) => {
            const itemRect = el.getBoundingClientRect();
            const listRect = this.listRef.getBoundingClientRect();
            const itemY = itemRect.top - listRect.top;
            const itemX = itemRect.left - listRect.left;
            // Lasso bounding box intersection
            if (itemY + itemRect.height > y1 && itemY < y2 && itemX + itemRect.width > x1 && itemX < x2) {
                const val = el.value || el.label;
                if (!newValues.includes(val))
                    newValues.push(val);
            }
        });
        this.selectedValues = Array.from(new Set(newValues));
    }
    handleGlobalKeyDown(e) {
        if (!this.keyboardNavigation)
            return;
        if (e.composedPath()[0] instanceof HTMLInputElement || e.composedPath()[0] instanceof HTMLTextAreaElement)
            return;
        if (e.key === '?') {
            e.preventDefault();
            this.isPaletteOpen = !this.isPaletteOpen;
            return;
        }
        if (this.isPaletteOpen && e.key === 'Escape') {
            this.isPaletteOpen = false;
            return;
        }
        if (e.key === '[' || e.key === ']') {
            e.preventDefault();
            this.jumpToGroup(e.key === '[' ? 'prev' : 'next');
            return;
        }
        if (e.key === ' ' && !this.isPaletteOpen) {
            e.preventDefault();
            this.isQuickLookOpen = !this.isQuickLookOpen;
            return;
        }
        const isShift = e.shiftKey;
        if (e.key === 'Alt')
            this.altKeyPressed = true;
        if (e.key === 'k' && (e.ctrlKey || e.metaKey)) {
            e.preventDefault();
            this.isCommandKOpen = !this.isCommandKOpen;
        }
        switch (e.key.toLowerCase()) {
            case 'j':
            case 'arrowdown':
                e.preventDefault();
                const nextIdx = Math.min(this.filteredItems.length - 1, this.focusedIndex + 1);
                if (isShift && this.focusedIndex >= 0)
                    this.handleRangeSelection(this.focusedIndex, nextIdx);
                this.moveFocusRel(1);
                break;
            case 'k':
            case 'arrowup':
                e.preventDefault();
                const prevIdx = Math.max(0, this.focusedIndex - 1);
                if (isShift && this.focusedIndex >= 0)
                    this.handleRangeSelection(this.focusedIndex, prevIdx);
                this.moveFocusRel(-1);
                break;
            case 'x':
                if (this.focusedIndex >= 0) {
                    const item = this.filteredItems[this.focusedIndex];
                    const val = item.value || item.id || this.focusedIndex.toString();
                    this.handleItemSelection(val, !this.selectedValues.includes(val));
                }
                break;
        }
    }
    handleGlobalKeyUp(e) {
        if (e.key === 'Alt')
            this.altKeyPressed = false;
    }
    handleKeyDown = (e) => {
        if (!this.keyboardNavigation)
            return;
        const items = this.filteredItems;
        if (items.length === 0)
            return;
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.moveFocus(1);
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.moveFocus(-1);
        }
        else if (e.key === 'Enter' && this.focusedIndex >= 0) {
            const item = items[this.focusedIndex];
            const value = item.value || item.id || this.focusedIndex.toString();
            this.handleItemSelection(value, true);
        }
        else if (e.key === ' ' && this.checkboxSelection && this.focusedIndex >= 0) {
            e.preventDefault();
            const item = items[this.focusedIndex];
            const value = item.value || item.id || this.focusedIndex.toString();
            const isSelected = this.selectedValues.includes(value);
            this.handleItemSelection(value, !isSelected);
        }
    };
    handleRangeSelection(start, end) {
        if (this.shiftSelectionStartIndex === -1)
            this.shiftSelectionStartIndex = start;
        const lower = Math.min(this.shiftSelectionStartIndex, end);
        const upper = Math.max(this.shiftSelectionStartIndex, end);
        const newValues = Array.from(new Set([...this.selectedValues]));
        for (let i = lower; i <= upper; i++) {
            const val = this.filteredItems[i].value || this.filteredItems[i].label;
            if (!newValues.includes(val))
                newValues.push(val);
        }
        this.selectedValues = newValues;
        this.listChange.emit({ values: this.selectedValues });
    }
    jumpToGroup(dir) {
        const groups = this.getGroupedItems();
        if (!groups)
            return;
        const groupNames = Object.keys(groups);
        const currentItem = this.filteredItems[this.focusedIndex];
        if (!currentItem) {
            this.moveFocus(0);
            return;
        }
        const currentGroupName = groupNames.find(name => groups[name].includes(currentItem));
        if (!currentGroupName)
            return;
        let nextIdx = groupNames.indexOf(currentGroupName) + (dir === 'next' ? 1 : -1);
        if (nextIdx < 0)
            nextIdx = groupNames.length - 1;
        if (nextIdx >= groupNames.length)
            nextIdx = 0;
        const targetItem = groups[groupNames[nextIdx]][0];
        const targetGlobalIdx = this.filteredItems.indexOf(targetItem);
        this.moveFocus(targetGlobalIdx - this.focusedIndex);
    }
    moveFocusRel(delta) {
        const nextIndex = Math.max(0, Math.min(this.focusedIndex + delta, this.filteredItems.length - 1));
        if (nextIndex !== this.focusedIndex) {
            this.focusedIndex = nextIndex;
            this.updateFocusRing();
            this.scrollToFocused();
            // Accessibility Focus Sync
            const itemEls = this.el.shadowRoot?.querySelectorAll('ui-list-item');
            itemEls?.[nextIndex]?.focus();
        }
    }
    updateFocusRing() {
        const items = this.el.shadowRoot?.querySelectorAll('ui-list-item');
        const focusedEl = items?.[this.focusedIndex];
        if (focusedEl) {
            const listRect = this.listRef.getBoundingClientRect();
            const itemRect = focusedEl.getBoundingClientRect();
            this.focusRingTop = itemRect.top - listRect.top + this.listRef.scrollTop;
            this.focusRingHeight = itemRect.height;
        }
    }
    moveFocus(delta) {
        this.moveFocusRel(delta);
    }
    scrollToFocused() {
        if (this.listRef && this.focusedIndex >= 0) {
            const focusedEl = this.listRef.children[this.focusedIndex];
            if (focusedEl) {
                focusedEl.scrollIntoView({ block: 'nearest', behavior: 'smooth' });
                focusedEl.focus();
            }
        }
    }
    handleDragStart = (e, item, index) => {
        if (!this.isDraggable)
            return;
        this.draggedItem = { item, index };
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', e.target.outerHTML);
        e.target.classList.add('dragging');
    };
    handleDragOver = (e) => {
        if (!this.isDraggable || !this.draggedItem)
            return;
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    };
    handleDrop = (e, dropIndex) => {
        e.preventDefault();
        const sourceListId = e.dataTransfer.getData('source-list-id');
        const sourceDragGroup = e.dataTransfer.getData('drag-group');
        const itemData = e.dataTransfer.getData('item-data');
        if (sourceDragGroup && sourceDragGroup !== this.dragGroup) {
            console.warn('[AppList] Drag group mismatch');
            return;
        }
        if (sourceListId === this.el.id || !sourceListId) {
            if (!this.draggedItem)
                return;
            // Internal reorder
            const dragIndex = this.draggedItem.index;
            if (dragIndex === dropIndex)
                return;
            const newItems = [...this.filteredItems];
            const [removed] = newItems.splice(dragIndex, 1);
            newItems.splice(dropIndex, 0, removed);
            this.filteredItems = newItems;
            this.itemsReorder.emit({ items: newItems });
        }
        else {
            // External drop
            try {
                const item = JSON.parse(itemData);
                const newItems = [...this.filteredItems];
                newItems.splice(dropIndex, 0, item);
                this.filteredItems = newItems;
                this.itemsReorder.emit({ items: newItems });
            }
            catch (e) {
                console.error('[AppList] Error parsing external item data', e);
            }
        }
        this.draggedItem = null;
    };
    handleDragEnd = (e) => {
        e.target.classList.remove('dragging');
        this.draggedItem = null;
    };
    handleItemSelection(value, selected) {
        if (!this.selectable)
            return;
        if (this.multiSelect || this.checkboxSelection) {
            if (selected) {
                if (!this.selectedValues.includes(value)) {
                    this.selectedValues = [...this.selectedValues, value];
                }
            }
            else {
                this.selectedValues = this.selectedValues.filter(v => v !== value);
            }
        }
        else {
            this.selectedValues = selected ? [value] : [];
        }
        this.listItemSelect.emit({ value, values: this.selectedValues });
        this.listChange.emit({ values: this.selectedValues });
    }
    goToPage(page) {
        if (page < 1 || page > this.totalPages)
            return;
        this.currentPage = page;
        this.pageChange.emit({ page });
    }
    renderSearch() {
        if (!this.searchable)
            return null;
        return (h("div", { class: "list-search" }, h("ui-icon", { name: "search", library: "fontawesome", class: "search-icon" }), h("ui-input", { type: "text", class: "search-input", placeholder: this.searchPlaceholder, value: this.searchQuery, onInputChange: (e) => {
                this.searchQuery = e.detail;
                this.searchChange.emit({ query: this.searchQuery });
            }, prefixIcon: "search", size: "sm" }), this.searchQuery && (h("ui-button", { variant: "ghost", class: "search-clear", onClick: () => {
                this.searchQuery = '';
                this.searchChange.emit({ query: '' });
            }, icon: "times", iconLibrary: "fontawesome", iconOnly: true, size: "sm" }))));
    }
    renderLoading() {
        if (!this.loading)
            return null;
        return (h("div", { class: "list-loading" }, h("ui-loader", { type: "spinner", size: "1.2em", color: "primary" }), h("span", null, this.loadingText)));
    }
    renderEmpty() {
        if (!this.showEmpty || this.loading || this.filteredItems.length > 0)
            return null;
        return (h("div", { class: "list-empty" }, h("ui-icon", { name: "inbox", library: "fontawesome" }), h("span", null, this.emptyText)));
    }
    renderPagination() {
        if (!this.paginated || this.totalPages <= 1)
            return null;
        const pages = [];
        for (let i = 1; i <= this.totalPages; i++) {
            if (i === 1 ||
                i === this.totalPages ||
                (i >= this.currentPage - 2 && i <= this.currentPage + 2)) {
                pages.push(h("ui-button", { variant: i === this.currentPage ? "primary" : "ghost", class: {
                        'pagination-button': true,
                        'active': i === this.currentPage
                    }, onClick: () => this.goToPage(i), label: i.toString(), size: "sm" }));
            }
            else if (i === this.currentPage - 3 || i === this.currentPage + 3) {
                pages.push(h("span", { class: "pagination-ellipsis" }, "..."));
            }
        }
        return (h("div", { class: "list-pagination" }, h("ui-button", { variant: "ghost", class: "pagination-button", disabled: this.currentPage === 1, onClick: () => this.goToPage(this.currentPage - 1), icon: "chevron-left", iconLibrary: "fontawesome", iconOnly: true, size: "sm" }), pages, h("ui-button", { variant: "ghost", class: "pagination-button", disabled: this.currentPage === this.totalPages, onClick: () => this.goToPage(this.currentPage + 1), icon: "chevron-right", iconLibrary: "fontawesome", iconOnly: true, size: "sm" })));
    }
    renderVirtualList() {
        const totalHeight = this.filteredItems.length * this.itemHeight;
        const offsetY = Math.floor(this.scrollTop / this.itemHeight) * this.itemHeight;
        return (h("div", { class: "virtual-list", style: { height: `${totalHeight}px`, position: 'relative' } }, h("div", { style: { transform: `translateY(${offsetY}px)` } }, this.visibleItems.map((item, index) => this.renderItem(item, index)))));
    }
    renderItem(item, index) {
        const value = item.value || item.id || index.toString();
        const isSelected = this.selectedValues.includes(value);
        // Dynamic props from item object
        const label = item.label || item.text || item;
        const sublabel = item.sublabel || '';
        const icon = item.icon || '';
        const userAvatar = item.avatar || item.userAvatar || '';
        const image = item.image || '';
        const badge = item.badge || '';
        const counter = item.counter || '';
        const tags = item.tags || '';
        return (h("ui-list-item", { style: { '--item-index': index.toString() }, label: label, sublabel: sublabel, value: value, icon: icon, userAvatar: userAvatar, image: image, selected: isSelected, skeleton: this.skeleton || this.loading, highlight: this.searchQuery, size: this.size, badge: badge, counter: counter, tags: tags, interactive: this.selectable, onListItemClick: () => this.handleItemSelection(value, !isSelected), onCheckboxChange: (e) => this.handleItemSelection(value, e.detail.checked), showCheckbox: this.checkboxSelection, swipeActions: item.swipeActions ?? true, leftActionIcon: item.leftActionIcon ?? "check", rightActionIcon: item.rightActionIcon ?? "trash", leftActions: item.leftActions || [], rightActions: item.rightActions || [], avatarGroup: item.avatarGroup || item.collaborators || '', avatarGroupPosition: item.avatarGroupPosition || 'content', progress: item.progress ?? -1, status: item.status || '', statusPosition: item.statusPosition || 'bottom-right', starred: item.starred || false, showStar: item.showStar || false, expandable: item.expandable || false, priorityPulse: item.priorityPulse || false, presence: item.presence || [], presenceCursors: item.presenceCursors || [], density: this.density, auraMode: true, sparkline: item.sparkline || [], metadata: item.metadata || {}, showGhostLayer: this.altKeyPressed, gridMode: this.grid, focused: this.focusedIndex === index, class: {
                'draggable': this.isDraggable,
                'focused-item': this.focusedIndex === index
            }, draggable: this.isDraggable, onDragStart: (e) => {
                this.handleDragStart(e, item, index);
                e.dataTransfer.setData('source-list-id', this.el.id);
                e.dataTransfer.setData('drag-group', this.dragGroup);
                e.dataTransfer.setData('item-data', JSON.stringify(item));
            }, onDragOver: this.handleDragOver, onDrop: (e) => this.handleDrop(e, index), onDragEnd: this.handleDragEnd, onSwipeAction: (e) => {
                e.stopPropagation();
                this.swipeAction.emit({ value: e.detail.value, side: e.detail.side, action: e.detail.action });
            }, onLongPress: (e) => {
                e.stopPropagation();
                this.longPress.emit({ value: e.detail.value });
            }, onStarToggle: (e) => {
                e.stopPropagation();
                this.listStarToggle.emit({ value: e.detail.value, starred: e.detail.starred });
            } }));
    }
    renderGroupFooter(groupItems) {
        if (!this.showGroupFooter)
            return null;
        return (h("div", { class: "list-group-footer", slot: "footer" }, this.groupFooterLabel, ": ", groupItems.length));
    }
    handleItemClick(event) {
        const { value, selected, shiftKey, ctrlKey, metaKey } = event.detail;
        if (!this.selectable) {
            return;
        }
        const clickedIndex = this.filteredItems.findIndex(it => (it.value || it.id || it.label) === value);
        if (shiftKey && this.shiftSelectionStartIndex !== -1 && this.multiSelect) {
            this.handleRangeSelection(this.shiftSelectionStartIndex, clickedIndex);
        }
        else if ((ctrlKey || metaKey) && this.multiSelect) {
            this.handleItemSelection(value, !this.selectedValues.includes(value));
            this.shiftSelectionStartIndex = clickedIndex;
        }
        else {
            this.handleItemSelection(value, selected);
            this.shiftSelectionStartIndex = clickedIndex;
        }
        this.listItemSelect.emit({ value, values: this.selectedValues, shiftKey, ctrlKey, metaKey });
        this.listChange.emit({ values: this.selectedValues });
    }
    renderContent() {
        if (this.loading) {
            return this.renderLoading();
        }
        if (this.virtual) {
            return this.renderVirtualList();
        }
        if (this.grouped && this.items && this.items.length > 0) {
            return this.renderGroupedItems();
        }
        if (this.items && this.items.length > 0) {
            if (this.filteredItems.length > 0) {
                return this.filteredItems.map((item, index) => this.renderItem(item, index));
            }
            return this.renderEmpty();
        }
        return h("slot", null);
    }
    renderEKGWaveform() {
        if (!this.isEKGActive)
            return null;
        return (h("div", { class: "list-ekg-container" }, h("svg", { class: "list-ekg-waveform", viewBox: "0 0 100 20", preserveAspectRatio: "none" }, h("path", { d: "M0,10 L10,10 L12,2 L15,18 L18,10 L30,10 L32,5 L35,15 L38,10 L50,10 L52,0 L55,20 L58,10 L100,10", fill: "none", stroke: "rgba(59, 130, 246, 0.4)", "stroke-width": "1.5" }))));
    }
    renderConfetti() {
        if (!this.showConfetti)
            return null;
        const particles = Array.from({ length: 20 });
        return (h("div", { class: "list-confetti-burst" }, particles.map(() => h("div", { class: "confetti-particle" }))));
    }
    renderGroupDashboard(groupName, items) {
        const isExpanded = this.groupDashboards.has(groupName);
        if (!isExpanded)
            return null;
        const avgHealth = Math.round(items.reduce((acc, it) => acc + (it.progress || 0), 0) / items.length);
        const onlineCount = items.filter(it => it.status === 'online').length;
        return (h("div", { class: "group-mini-dashboard" }, h("div", { class: "gm-stat" }, "Group Pulse: ", h("strong", null, avgHealth, "%")), h("div", { class: "gm-stat" }, "Vitality: ", h("strong", null, onlineCount, "/", items.length, " Active")), h("div", { class: "gm-spark", style: { flex: '1' } }, h("svg", { height: "24", width: "100%" }, h("path", { d: "M0,12 Q25,2 50,12 T100,12", fill: "none", stroke: "#3bf673", "stroke-width": "2" })))));
    }
    renderGroupedItems() {
        const groups = this.getGroupedItems();
        if (!groups)
            return null;
        return Object.keys(groups).map(groupName => (h("ui-list-group", { key: groupName, label: groupName, collapsible: true, expanded: true }, h("div", { slot: "header", class: "group-header-custom", onClick: (e) => {
                e.stopPropagation();
                const newDash = new Set(this.groupDashboards);
                if (newDash.has(groupName))
                    newDash.delete(groupName);
                else
                    newDash.add(groupName);
                this.groupDashboards = newDash;
            } }, h("span", { class: "group-title-label" }, groupName), h("span", { class: "group-pill" }, groups[groupName].length, " Nodes"), h("ui-icon", { name: this.groupDashboards.has(groupName) ? 'chart-bar' : 'chevron-down', library: "fontawesome" })), this.renderGroupDashboard(groupName, groups[groupName]), groups[groupName].map((item, idx) => {
            const globalIdx = this.filteredItems.indexOf(item);
            return (h("div", { key: `${groupName}-${idx}` }, this.renderItem(item, globalIdx)));
        }), this.renderGroupFooter(groups[groupName]))));
    }
    renderCommandPalette() {
        if (!this.isCommandKOpen)
            return null;
        const commands = [
            { label: 'Switch to Grid View', action: () => this.grid = true, icon: 'th' },
            { label: 'Switch to Compact Mode', action: () => this.density = 'compact', icon: 'list' },
            { label: 'Export to CSV', action: () => this.bulkAction.emit({ action: 'export-csv', values: this.selectedValues }), icon: 'download' },
            { label: 'Filter by Critical', action: () => this.searchQuery = 'online', icon: 'shield-alt' }
        ].filter(c => c.label.toLowerCase().includes(this.commandQuery.toLowerCase()));
        return (h("div", { class: "list-command-palette-overlay", onClick: () => this.isCommandKOpen = false }, h("div", { class: "command-palette-content", onClick: e => e.stopPropagation() }, h("div", { class: "cp-search" }, h("ui-icon", { name: "search" }), h("ui-input", { type: "text", placeholder: "Type a command or search...", value: this.commandQuery, onInputChange: (e) => this.commandQuery = e.detail, autoFocus: true, prefixIcon: "search", size: "sm" }), h("kbd", null, "ESC")), h("div", { class: "cp-results" }, commands.map(cmd => (h("div", { class: "cp-item", onClick: () => { cmd.action(); this.isCommandKOpen = false; } }, h("ui-icon", { name: cmd.icon }), h("span", null, cmd.label))))))));
    }
    renderMinimap() {
        if (!this.showMinimap)
            return null;
        return (h("div", { class: "list-scrollbar-minimap" }, this.filteredItems.map((item, i) => {
            if (item.status === 'online' || item.status === 'busy' || item.priorityPulse) {
                const pct = (i / this.filteredItems.length) * 100;
                return h("div", { class: `m-marker m-${item.status || 'danger'}`, style: { top: `${pct}%` } });
            }
            return null;
        })));
    }
    renderViewTabs() {
        if (!this.viewTabs || this.viewTabs.length === 0)
            return null;
        return (h("div", { class: "list-view-tabs" }, this.viewTabs.map((tab, idx) => (h("div", { key: tab.label, class: { 'view-tab': true, 'active': this.activeTab === idx }, onClick: () => { this.activeTab = idx; this.filterItems(); } }, tab.label)))));
    }
    render() {
        const listClasses = {
            'list': true,
            [`list-${this.size}`]: true,
            [`list-${this.variant}`]: true,
            'list-dense': this.dense,
            'list-dividers': this.dividers,
            'list-rounded': this.rounded,
            'list-elevated': this.elevated,
            'list-full-width': this.fullWidth,
            'list-no-padding': !this.padding,
            'list-draggable': this.isDraggable,
            'list-keyboard-nav': this.keyboardNavigation,
            'list-flush': this.flush,
            'list-horizontal': this.horizontal,
            'list-numbered': this.numbered,
            'list-grid': this.grid,
            'list-selection-active': this.selectedValues.length > 0
        };
        const containerClasses = {
            'list-container': true,
            'list-has-selection': this.selectedValues.length > 0,
            [`selection-theme-${this.selectionHeaderColor}`]: this.selectedValues.length > 0
        };
        const gridStyle = this.grid ? {
            display: 'grid',
            gridTemplateColumns: `repeat(${this.gridCols}, 1fr)`,
            gap: '16px',
            padding: '16px'
        } : {};
        const listStyle = {
            ...(this.maxHeight ? { maxHeight: this.maxHeight, overflowY: 'auto' } : {}),
            ...gridStyle
        };
        return (h("div", { key: '4f41d5f9b82328c5e5b6b990d2cba0fb85d02aa5', class: containerClasses, onKeyDown: this.handleKeyDown, tabindex: "0" }, this.syncing && h("div", { key: 'b5ccede5c41d256002443a4212650290614978ab', class: "list-sync-bar" }), h("div", { key: 'ed6271a638dd129ac647487306f59be583d87e9e', class: "list-header-adaptive" }, h("div", { key: 'db465ed90ceb6591344a2ce62fb081c11d126309', class: "header-main-titles" }, this.label && h("div", { key: '84064fc69f3df5d1a36094c42c531f794375709a', class: "list-label" }, this.label), this.subheader && h("div", { key: '43b6852ce14d2a109e7d49f0ee4a2023b7b99476', class: "list-subheader" }, this.subheader)), this.renderViewTabs()), this.renderSearch(), this.filterChips.length > 0 && (h("div", { key: '755badc3efa061e5ef7f8be478813eb83df98cdc', class: "list-filter-chips" }, this.filterChips.map(chip => (h("ui-button", { variant: chip.active ? "primary" : "ghost", class: { 'filter-chip': true, 'active': chip.active }, label: `${chip.label} ${chip.count !== undefined ? chip.count : ''}`, size: "sm" }))))), this.showSortingHeaders && (h("div", { key: '978d41292344852cf0ee831127b66cd2ab742664', class: "list-sorting-headers" }, this.columns.map(col => (h("div", { class: "sort-header", onClick: () => { const dir = this._sortColumn === col.key && this._sortDir === 'asc' ? 'desc' : 'asc'; this._sortColumn = col.key; this._sortDir = dir; this.columnSort.emit({ key: col.key, direction: dir }); } }, h("span", null, col.label), col.sortable && h("ui-icon", { name: "sort", library: "fontawesome" })))))), this.showBulkHeader && this.multiSelect && (h("div", { key: '01ebcaf21ee576b05618c5614a3667af24644ec0', class: "list-bulk-header" }, h("div", { key: '4af56532d24827bf7509a5a45a484ce6d59115cd', class: "bulk-select-all" }, h("ui-check-box", { key: '7ae0e47d3dc1341e81b2ae57df4a6c4b5ec97838', checked: this.selectedValues.length === this.items.length && this.items.length > 0, indeterminate: this.selectedValues.length > 0 && this.selectedValues.length < this.items.length, onCheckChange: (e) => {
                if (e.detail.checked) {
                    this.selectedValues = this.items.map((item, i) => item.value || item.id || i.toString());
                }
                else {
                    this.selectedValues = [];
                }
                this.listChange.emit({ values: this.selectedValues });
            } }), h("span", { key: 'aaa3441cd736d78f9486cc0fd01053b109620615', class: "bulk-count" }, this.selectedValues.length, " selected")), this.selectedValues.length > 0 && (h("div", { key: '3e2c3dc520b207692f61a09afd786e4e4bfbe462', class: "bulk-actions" }, this.bulkActions.map(action => (h("ui-button", { variant: "ghost", onClick: () => this.bulkAction.emit({ action: action.action, values: this.selectedValues }), icon: action.icon, iconLibrary: "fontawesome", label: action.label, size: "sm" }))))))), this.floatingFAB && this.selectedValues.length > 0 && (h("div", { key: 'd79e22941c6125d0447cd2646bcef0cd32410ad3', class: "list-power-launcher-container" }, h("div", { key: '5428fc9a5d581c15b9a42977eae4f08f253c4845', class: { 'launcher-fab': true, 'active': this.isPowerLauncherOpen }, onClick: () => this.isPowerLauncherOpen = !this.isPowerLauncherOpen }, h("ui-icon", { key: '10dd1b7d30e8fb9e9f3c90b65779c888663452a4', name: this.isPowerLauncherOpen ? 'times' : 'bolt', library: "fontawesome" })), this.isPowerLauncherOpen && (h("div", { key: 'b6c35850477fac5716818e449500a39a3cf894ed', class: "launcher-menu" }, h("div", { key: 'db4d1a4e3077bdb5c804b0ca9a75b2aea21bf5a7', class: "l-item", onClick: () => this.bulkAction.emit({ action: 'rolling-restart', values: this.selectedValues }) }, h("ui-icon", { key: '76597b228c9ad53087cacd6dbc11a3e3d4f2b2c1', name: "redo" }), " Rolling Restart"), h("div", { key: '9ba4804ace67bb7503c8713e816b4bc6197270b2', class: "l-item", onClick: () => this.bulkAction.emit({ action: 'sync-cluster', values: this.selectedValues }) }, h("ui-icon", { key: 'b673a8122860064908af7f11dd018b263671fa7e', name: "sync" }), " Sync Cluster"), h("div", { key: 'e01d57b46a14199afa99138d86701fca24d99537', class: "l-item", onClick: () => this.bulkAction.emit({ action: 'patch-security', values: this.selectedValues }) }, h("ui-icon", { key: '0da91a692f0e54baf6db39eee99de7ebc45f793c', name: "shield-alt" }), " Patch Security"), h("div", { key: '34cb252b35171aa5357a78d0a0d608f51de56925', class: "l-item danger", onClick: () => this.bulkAction.emit({ action: 'delete', values: this.selectedValues }) }, h("ui-icon", { key: 'ab94d9a829f7be9a6ec8f907b6c3c7f59c8452e3', name: "trash" }), " Terminate Selected"))))), this.isPaletteOpen && (h("div", { key: '7672cd318acb612ac9585f47fee917d98a3677de', class: "list-shortcut-palette", onClick: () => this.isPaletteOpen = false }, h("div", { key: 'b309a9ebc87081a00c39cbcf1d401780985b948a', class: "palette-content", onClick: e => e.stopPropagation() }, h("h3", { key: '2523a0a5d0f15eed66626b600c165d9c0d53e2d2' }, "\u2328\uFE0F Keyboard Shortcuts"), h("div", { key: 'e5d8fb61bc6a0164f1d59212f35d0f0d6b7efab9', class: "shortcut-grid" }, h("div", { key: '084c0a83d39f91615d2a8452bc3c7efbe0df34ba', class: "s-row" }, h("kbd", { key: 'b3be0998858c61f71c30de13f6e9fd1c7d691eae' }, "J"), " / ", h("kbd", { key: '386cc175f72faddbf616a40bf68ce551ed3e9cf6' }, "K"), " ", h("span", { key: 'deaeb0b4ee946a4d85b142b05b8bebd10b2657f6' }, "Navigate Down / Up")), h("div", { key: 'cd1c0ff59b78ff48927dcb940a85a928bd9a7e9f', class: "s-row" }, h("kbd", { key: '01d28ed64ea5a5c25ae23227a4d0d2d485437486' }, "Shift"), " + ", h("kbd", { key: 'ebfe4726a80f0e3333d5712298ddd089c5098a21' }, "J/K"), " ", h("span", { key: '1bde7e50bb79bed0aae5ee15e1106c1479a5383a' }, "Select Range")), h("div", { key: 'c11efad0545b775bd5b1f0cfc4a085317c3ebfee', class: "s-row" }, h("kbd", { key: '45cf6bc72acb696ad2fbde766fc57d6e3c01c6b4' }, "X"), " ", h("span", { key: 'b86e2314e06fb7d8ff22c71bb231b3e828c96b5a' }, "Toggle Selection")), h("div", { key: '1767c7ba0256d1f6ba117c11f969071be099c73d', class: "s-row" }, h("kbd", { key: '28bf817768a742ffbaa0b87ac5ca78ec965c7e4c' }, "Enter"), " ", h("span", { key: '71640ceb7349f38f285ed64fb81f690f96005e62' }, "Activate / Open")), h("div", { key: 'b49d904e6303444b9b8e1fc7f611aad5e4a469e5', class: "s-row" }, h("kbd", { key: '493d94845640a0b0578f2e99fe07e16ae5ff92ee' }, "Space"), " ", h("span", { key: '14b9767880acf71e36d181b0e0c3ff1ab682f272' }, "Quick Look Preview")), h("div", { key: '782f31daa50b9329794da1845e14d4379700a5a5', class: "s-row" }, h("kbd", { key: 'ebd8dc3dc59cc388caf58d1287c86473ffd76b38' }, "["), " / ", h("kbd", { key: '0347ff672424c8db103e20f5ecf519b0b974d4de' }, "]"), " ", h("span", { key: 'b6f87b61cf822fdf6349bdb92849f0175029e4de' }, "Jump to Prev / Next Group")), h("div", { key: '0cfe752e9649c00712f22b780307084252c138cf', class: "s-row" }, h("kbd", { key: '9de296e60383b0b90d9696311eb5bc5bb64b889d' }, "?"), " ", h("span", { key: '1b33a99b0f72740380c869bfdee4ab656562b028' }, "Toggle this help")))))), this.isQuickLookOpen && (h("div", { key: '00db6f10e7905b7d70882985cc9089a6bbb4cfee', class: "list-quick-look-modal", onClick: () => this.isQuickLookOpen = false }, h("div", { key: '22bab4c4be5a1020ccfa34c7fee8f330d44d8bcd', class: "quick-look-content", onClick: e => e.stopPropagation() }, h("ui-icon", { key: '7c691ac455958af2f12d9ce764095b0aae950f70', name: "times", class: "close-look", onClick: () => this.isQuickLookOpen = false }), h("div", { key: 'c56f0449bfb3280b6dc7141bc14c91874f6ed35f', class: "look-header" }, h("h2", { key: '250cb1ecb5ebc771477659fbdcd83a27aee6145c' }, this.filteredItems[this.focusedIndex]?.label), h("span", { key: '1082b6cd8b3d2c56087e0ac9668e88932085f67d' }, this.filteredItems[this.focusedIndex]?.sublabel)), h("div", { key: '5258151eca6121d08a568a82b60b27c1055eb203', class: "look-body" }, h("p", { key: '496227a18a6a9b8aea97386e14544d6d66c0e3e8' }, "Comprehensive detail for Node ID: ", this.filteredItems[this.focusedIndex]?.value || 'N/A'), h("div", { key: 'ef427801b310f9ff61569c24b79046131f02b425', class: "look-stats" }, h("div", { key: '21f28568f90ba336e43f868b33bad2c9690cf19b', class: "l-stat" }, "Status: ", h("strong", { key: 'b05364c86b63383d5a3b1e2105a57564f36f90e0' }, this.filteredItems[this.focusedIndex]?.status || 'Idle')), h("div", { key: '9535c7091e299aa1a3c1c214cd6097024c8d304b', class: "l-stat" }, "Health: ", h("strong", { key: '0dd13ce8f148f8308a21054a78345ee61df47c36' }, this.filteredItems[this.focusedIndex]?.progress || 100, "%"))))))), h("div", { key: 'b995d870eed468e011dd91edd18b6527c7d1c72e', ref: el => this.listRef = el, class: listClasses, style: listStyle, role: "list", "aria-label": this.ariaLabel, "aria-busy": this.syncing ? 'true' : 'false', part: "list", onScroll: this.handleScroll, onMouseDown: this.handleLassoStart }, this.renderMinimap(), this.focusRingTop >= 0 && (h("div", { key: 'cb4547a1aab482125b7e80e6db56ec6a2ede865c', class: "list-focus-spring-ring", style: {
                top: `${this.focusRingTop}px`,
                height: `${this.focusRingHeight}px`
            } })), this.lassoActive && (h("div", { key: 'ec54df7225b07efc02cd87b5613c3ddb84e967d4', class: "list-lasso-box", style: {
                left: `${Math.min(this.lassoStart.x, this.lassoEnd.x)}px`,
                top: `${Math.min(this.lassoStart.y, this.lassoEnd.y)}px`,
                width: `${Math.abs(this.lassoEnd.x - this.lassoStart.x)}px`,
                height: `${Math.abs(this.lassoEnd.y - this.lassoStart.y)}px`
            } })), this.renderContent()), this.renderPagination(), this.renderCommandPalette(), this.renderEKGWaveform(), this.renderConfetti(), this.showConfetti && h("div", { key: '2bf97fc32fb8863cb61df68a7bf152f66f2a5bdd', class: "a11y-sr-only", "aria-live": "assertive" }, "Industrial Batch Operation Completed Successfully"), this.syncing && h("div", { key: '955b2edcc60b8e6eeb1b35a0532956263ea3eb80', class: "a11y-sr-only", "aria-live": "polite" }, "Cluster data is currently synchronizing...")));
    }
    static get watchers() { return {
        "items": [{
                "handleItemsChange": 0
            }],
        "searchQuery": [{
                "handleItemsChange": 0
            }],
        "currentPage": [{
                "handleItemsChange": 0
            }]
    }; }
};
AppList.style = listCss();

export { AppList as ui_list };
