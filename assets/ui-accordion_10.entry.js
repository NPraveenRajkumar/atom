import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-D2WzX6vR.js';
import { n as normalizeComponentSize } from './component-size-C7gf39HE.js';
import { h as hexToRgb } from './utils-Ck6jDuhz.js';

const accordionCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.accordion-container{width:100%;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden;background-color:var(--accordion-bg, white);font-family:var(--font-family)}.accordion-indicators{display:flex;gap:8px;padding:16px 20px;border-bottom:1px solid #e5e7eb;background-color:#f9fafb;flex-wrap:wrap}.accordion-indicator{display:flex;align-items:center;justify-content:center;width:32px;height:32px;border:2px solid #d1d5db;border-radius:50%;background-color:white;color:#6b7280;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.2s ease;outline:none}.accordion-indicator:hover:not(.accordion-indicator-disabled){border-color:var(--selected-header-color, #10b981);color:var(--selected-header-color, #10b981);background-color:var(--selected-header-bg, #eff6ff)}.accordion-indicator:focus{box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1)}.accordion-indicator-active{border-color:var(--selected-header-color, #10b981);background-color:var(--selected-header-bg, #eff6ff);color:var(--selected-header-color, #10b981);font-weight:600}.accordion-indicator-disabled{opacity:0.5;cursor:not-allowed;pointer-events:none}.accordion-item{border-bottom:1px solid #e5e7eb}.accordion-item:last-child{border-bottom:none}.accordion-item-disabled{opacity:0.6;pointer-events:none}.accordion-header{width:100%;padding:16px 20px;background:none;border:none;text-align:left;cursor:pointer;display:flex;align-items:center;justify-content:space-between;font-size:16px;font-weight:500;color:#374151;transition:all 0.2s ease;outline:none}.accordion-header:focus{box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1);border-radius:4px}.accordion-header:hover:not(.accordion-header-disabled){background-color:transparent}.accordion-item-open .accordion-header{background-color:var(--selected-header-bg, #f0f9ff);border-left:none}.accordion-item-open .accordion-header.accordion-selection-left{border-left:3px solid var(--selected-header-color, #10b981)}.accordion-item-open .accordion-header.accordion-selection-top{border-top:3px solid var(--selected-header-color, #10b981)}.accordion-header:active:not(.accordion-header-disabled){background-color:#f3f4f6}.accordion-header:active:not(.accordion-header-disabled).accordion-physics-bouncy,.accordion-header:active:not(.accordion-header-disabled).accordion-physics-liquid{transform:perspective(500px) rotateX(-2deg) scale(0.985);transition:transform 0.1s cubic-bezier(0.4, 0, 0.2, 1)}.accordion-header:focus-visible{outline:none;box-shadow:0 0 0 2px white, 0 0 0 4px var(--selected-header-color, #10b981) !important;border-radius:4px;z-index:10}.accordion-header-disabled{cursor:not-allowed;color:#9ca3af}.accordion-header-content{display:flex !important;align-items:center;justify-content:space-between;width:100%;min-width:0;flex:1}.accordion-header-btn{width:100% !important;height:auto !important;min-height:0 !important;padding:0 !important;background:transparent !important;box-shadow:none !important;border:none !important;transform:none !important}.accordion-header-btn::part(button){padding:16px 20px !important;width:100% !important;justify-content:space-between !important;background:transparent !important;border:none !important;box-shadow:none !important}.accordion-header-btn:hover::part(button){background:rgba(0, 0, 0, 0.02) !important}.accordion-header-left{display:flex;align-items:center;gap:12px;flex:1;min-width:0;text-align:left}.accordion-header-right{display:flex;align-items:center;gap:12px;flex-shrink:0;margin-left:auto}.accordion-actions{display:flex;align-items:center;gap:4px;margin-left:4px}.accordion-icon{font-size:18px;color:#6b7280;flex-shrink:0}.accordion-image{width:24px;height:24px;border-radius:4px;object-fit:cover;flex-shrink:0}.accordion-header-text{flex:1;display:flex;flex-direction:column;min-width:0;text-align:left}.accordion-title-group{display:flex;flex-direction:column;align-items:flex-start;flex:1;min-width:0}.accordion-title{font-size:15px;font-weight:600;color:var(--color-text-primary, #111827);min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.accordion-subtitle{font-size:13px;color:var(--color-text-muted, #6b7280);margin-top:2px}.accordion-badge{background-color:#ef4444;color:white;font-size:12px;font-weight:600;padding:2px 8px;border-radius:12px;min-width:20px;text-align:center;flex-shrink:0}.accordion-arrow{color:var(--color-text-muted, #6b7280);transition:transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);flex-shrink:0;display:flex;align-items:center;justify-content:center;opacity:0.7;pointer-events:none;}.accordion-header:hover .accordion-arrow{opacity:1;color:var(--color-text-primary, #111827);transform:scale(1.1)}.accordion-item-open .accordion-arrow{transform:rotate(180deg)}.accordion-arrow.arrow-start{margin-right:4px}.accordion-content{overflow:hidden;max-height:0;opacity:0;transition:max-height var(--animation-duration, 300ms) var(--animation-timing, ease), opacity var(--animation-duration, 300ms) var(--animation-timing, ease);background-color:#f9fafb;}.accordion-content.accordion-physics-bouncy{transition:max-height var(--animation-duration, 500ms) cubic-bezier(0.68, -0.6, 0.32, 1.6), opacity var(--animation-duration, 500ms) ease, transform var(--animation-duration, 500ms) cubic-bezier(0.68, -0.6, 0.32, 1.6);transform-origin:top}.accordion-content.accordion-physics-bouncy.accordion-content-open{animation:elastic-stretch var(--animation-duration, 500ms) cubic-bezier(0.68, -0.6, 0.32, 1.6)}.accordion-content.accordion-physics-liquid{transition:max-height var(--animation-duration, 600ms) cubic-bezier(0.2, 0.8, 0.2, 1), opacity var(--animation-duration, 600ms) ease, transform var(--animation-duration, 600ms) cubic-bezier(0.2, 0.8, 0.2, 1);transform-origin:top}.accordion-content.accordion-physics-liquid.accordion-content-open{animation:liquid-stretch var(--animation-duration, 600ms) cubic-bezier(0.2, 0.8, 0.2, 1)}@keyframes elastic-stretch{0%{transform:scaleY(0.9) translateY(-10px)}60%{transform:scaleY(1.05) translateY(0)}100%{transform:scaleY(1) translateY(0)}}@keyframes liquid-stretch{0%{transform:scaleY(0.8) skewX(-2deg)}50%{transform:scaleY(1.02) skewX(1deg)}100%{transform:scaleY(1) skewX(0)}}.accordion-content:not(.accordion-content-open){max-height:0;opacity:0}.accordion-content-open{max-height:90vh;opacity:1;overflow-y:auto}.accordion-content-inner{padding:16px 20px;color:#4b5563;line-height:1.6}.accordion-content-inner p{margin-top:0;margin-bottom:12px}.accordion-content-inner p:last-child{margin-bottom:0}.accordion-container.accordion-sm .accordion-header{padding:10px 16px;font-size:13px}.accordion-container.accordion-lg .accordion-header{padding:20px 24px;font-size:18px}.accordion-container.accordion-main .accordion-header{padding:24px 32px;font-size:22px;font-weight:700}.accordion-container.accordion-section .accordion-header{padding:18px 24px;font-size:18px;font-weight:600}.accordion-container.accordion-subsection .accordion-header{padding:14px 20px;font-size:15px;font-weight:500}.accordion-container.accordion-popover .accordion-header{padding:8px 12px;font-size:13px;font-weight:500}.accordion-container.accordion-popover .accordion-content-inner{padding:8px 12px;font-size:12px}.accordion-container.accordion-bordered .accordion-item{border:1px solid #e5e7eb;margin-bottom:8px;border-radius:6px}.accordion-container.accordion-bordered .accordion-item:last-child{margin-bottom:0}.accordion-container.accordion-bordered{border:none;background:transparent}.accordion-container.accordion-splitted{border:none;background:transparent;display:flex;flex-direction:column;gap:12px}.accordion-container.accordion-splitted .accordion-item{border:1px solid #e5e7eb;border-radius:12px;background:white;box-shadow:0 1px 2px rgba(0, 0, 0, 0.05);transition:box-shadow 0.2s ease, border-color 0.2s ease}.accordion-container.accordion-splitted .accordion-item-open{box-shadow:0 4px 12px rgba(0, 0, 0, 0.08);border-color:var(--selected-header-color, #10b981)}.accordion-container.accordion-light{border:none;background:transparent}.accordion-container.accordion-light .accordion-item{border-bottom:1px solid transparent;}.accordion-container.accordion-light .accordion-header{background:transparent !important;}.accordion-container.accordion-light .accordion-header:hover{background:rgba(0, 0, 0, 0.03) !important}.accordion-container.accordion-shadow{border:none;box-shadow:0 4px 20px rgba(0, 0, 0, 0.08);border-radius:16px}.accordion-container.accordion-card-list,.accordion-container.accordion-card{border:none;background:transparent;display:flex;flex-direction:column;gap:12px;overflow:visible;}.accordion-card-list .accordion-item,.accordion-card .accordion-item{border:1px solid #e8edf2;border-radius:16px;background:#ffffff;box-shadow:0 2px 8px rgba(0, 0, 0, 0.06);transition:box-shadow 0.25s ease, border-color 0.25s ease, transform 0.15s ease;overflow:hidden}.accordion-card-list .accordion-item:hover:not(.accordion-item-disabled),.accordion-card .accordion-item:hover:not(.accordion-item-disabled){box-shadow:0 4px 18px rgba(0, 0, 0, 0.1);transform:translateY(-1px)}.accordion-card-list .accordion-item-open,.accordion-card .accordion-item-open{border-color:var(--selected-header-color, #10b981);box-shadow:0 8px 30px rgba(0, 0, 0, 0.15);transform:translateY(-2px)}.accordion-card-list .accordion-item,.accordion-card .accordion-item,.accordion-card-list .accordion-item:last-child,.accordion-card .accordion-item:last-child{border:1px solid #e8edf2}.accordion-card-list .accordion-header,.accordion-card .accordion-header{--button-padding:18px 0px;background:transparent;border-left:none !important}.accordion-card-list .accordion-header:hover:not(.accordion-header-disabled),.accordion-card .accordion-header:hover:not(.accordion-header-disabled){background:transparent}.accordion-card-list .accordion-item-open .accordion-header,.accordion-card .accordion-item-open .accordion-header{background:transparent;border-left:none !important}.accordion-card-list .accordion-icon,.accordion-card .accordion-icon{display:flex;align-items:center;justify-content:center;width:44px;height:44px;min-width:44px;border-radius:12px;background:color-mix(in srgb, var(--selected-header-color, #10b981) 12%, transparent);color:var(--selected-header-color, #10b981);font-size:20px;flex-shrink:0;transition:background 0.2s ease}@supports not (background: color-mix(in srgb, red 10%, transparent)){.accordion-card-list .accordion-icon,.accordion-card .accordion-icon{background:rgba(16, 185, 129, 0.12)}}.accordion-card-list .accordion-item:hover .accordion-icon,.accordion-card .accordion-item:hover .accordion-icon{background:color-mix(in srgb, var(--selected-header-color, #10b981) 20%, transparent)}.accordion-card-list .accordion-title,.accordion-card .accordion-title{font-size:15px;font-weight:700;color:#1a202c;white-space:normal;}.accordion-card-list .accordion-subtitle,.accordion-card .accordion-subtitle{font-size:13px;color:#8a92a0;font-weight:400;white-space:normal}.accordion-card-list .accordion-header-text,.accordion-card .accordion-header-text{gap:3px}.accordion-card-list .accordion-arrow,.accordion-card .accordion-arrow{color:#c0c8d4;font-size:14px;margin-left:16px;transition:color 0.2s ease}.accordion-card-list .accordion-item:hover .accordion-arrow,.accordion-card .accordion-item:hover .accordion-arrow{color:var(--selected-header-color, #10b981)}.accordion-card-list .accordion-item-open .accordion-arrow,.accordion-card .accordion-item-open .accordion-arrow{color:var(--selected-header-color, #10b981)}.accordion-card-list .accordion-content,.accordion-card .accordion-content{background:#f8fafc;border-top:1px solid #edf1f6}.accordion-card-list .accordion-content-inner,.accordion-card .accordion-content-inner{padding:16px 20px 20px;color:#4a5568;font-size:14px;line-height:1.65}.accordion-card-list.accordion-sm .accordion-header,.accordion-card.accordion-sm .accordion-header{padding:14px 16px}.accordion-card-list.accordion-sm .accordion-icon,.accordion-card.accordion-sm .accordion-icon{width:36px;height:36px;min-width:36px;border-radius:10px;font-size:17px}.accordion-card-list.accordion-sm .accordion-title,.accordion-card.accordion-sm .accordion-title{font-size:14px}.accordion-card-list.accordion-lg .accordion-header,.accordion-card.accordion-lg .accordion-header{padding:22px 24px}.accordion-card-list.accordion-lg .accordion-icon,.accordion-card.accordion-lg .accordion-icon{width:52px;height:52px;min-width:52px;border-radius:14px;font-size:24px}.accordion-card-list.accordion-lg .accordion-title,.accordion-card.accordion-lg .accordion-title{font-size:17px}.accordion-card-list.accordion-icon-start .accordion-arrow.arrow-start,.accordion-card.accordion-icon-start .accordion-arrow.arrow-start{margin-right:16px;margin-left:0}.accordion-headline{background:transparent !important;border:none !important;box-shadow:none !important}.accordion-headline .accordion-item{border-bottom:1px solid #e5e7eb;margin-bottom:0;transition:all 0.25s ease}.accordion-headline .accordion-item:last-child{border-bottom:none}.accordion-headline .accordion-header{padding:var(--hl-padding, 32px 0);font-size:var(--hl-title-size, 28px);font-weight:700;color:#111827;background:transparent;display:flex;flex-direction:row;align-items:flex-start;justify-content:space-between;gap:24px;border-left:none !important;text-align:left}.accordion-headline .accordion-header:hover{background:transparent;color:var(--selected-header-color, #10b981)}.accordion-headline .accordion-header-content{flex:1;display:flex;flex-direction:row;align-items:flex-start;gap:16px}.accordion-headline .accordion-header-text{display:flex;flex-direction:column;gap:var(--hl-gap, 12px);flex:1;text-align:left}.accordion-headline .accordion-title{white-space:normal;font-size:var(--hl-title-size, 28px) !important;font-weight:700;line-height:1.2;text-align:left;color:#111827}.accordion-headline .accordion-subtitle{font-size:var(--hl-subtitle-size, 16px) !important;color:#4b5563;line-height:1.6;margin-top:4px;white-space:normal;max-width:90%;font-weight:400;text-align:left}.accordion-headline{}.accordion-headline .accordion-badge{background:#1f2937;color:white;width:22px;height:22px;min-width:22px;display:flex;align-items:center;justify-content:center;border-radius:50%;font-size:11px;order:2;margin-top:6px}.accordion-headline .accordion-arrow{font-size:calc(var(--hl-title-size, 28px) * 0.7);color:#111827;margin-top:6px;opacity:0.8}.accordion-headline .accordion-item-open .accordion-header{background:transparent;border-left:none;color:#111827}.accordion-headline .accordion-content{background:transparent}.accordion-headline .accordion-content-inner{padding:0 0 40px 0;font-size:var(--hl-subtitle-size, 16px);color:#4b5563;line-height:1.6;text-align:left}.accordion-arrow.arrow-start{margin-left:0;margin-right:12px;order:-1;}@keyframes slideDown{from{opacity:0;transform:translateY(-10px)}to{opacity:1;transform:translateY(0)}}@keyframes slideUp{from{opacity:1;transform:translateY(0)}to{opacity:0;transform:translateY(-10px)}}.accordion-header:focus-visible{outline:2px solid #10b981;outline-offset:2px;z-index:10;}@media (max-width: 640px){.accordion-header{padding:12px 16px;font-size:14px}.accordion-content-inner{padding:12px 16px}.accordion-header-content{gap:8px}.accordion-badge{font-size:11px;padding:1px 6px}}.accordion-search{position:relative;padding:16px 20px;border-bottom:1px solid #e5e7eb;background-color:#f9fafb}.accordion-search-input{width:100%;padding:10px 40px 10px 16px;border:1px solid #d1d5db;border-radius:8px;font-size:14px;outline:none;transition:all 0.2s ease}.accordion-search-input:focus{border-color:#10b981;box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1)}.accordion-search-clear{position:absolute;right:28px;top:50%;transform:translateY(-50%);background:none;border:none;color:#6b7280;cursor:pointer;font-size:18px;padding:4px 8px;border-radius:4px;transition:all 0.2s ease}.accordion-search-clear:hover{background-color:#e5e7eb;color:#374151}.search-highlight{background-color:#fef08a;color:#854d0e;padding:2px 4px;border-radius:2px;font-weight:600}.accordion-controls{display:flex;gap:8px;padding:12px 20px;border-bottom:1px solid #e5e7eb;background-color:#f9fafb;flex-wrap:wrap}.accordion-control-button{padding:8px 16px;background-color:white;border:1px solid #d1d5db;border-radius:6px;font-size:14px;font-weight:500;color:#374151;cursor:pointer;transition:all 0.2s ease;outline:none}.accordion-control-button:hover:not(:disabled){background-color:#f3f4f6;border-color:#9ca3af}.accordion-control-button:active:not(:disabled){background-color:#e5e7eb}.accordion-control-button:disabled{opacity:0.5;cursor:not-allowed}.accordion-control-button:focus{box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1)}.accordion-header-text{display:flex;flex-direction:column;gap:4px;flex:1;min-width:0}.accordion-subtitle{font-size:13px;color:#6b7280;font-weight:400;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.accordion-actions{display:flex;gap:4px;margin-left:8px}.accordion-action-button{padding:6px 10px;background-color:transparent;border:1px solid #d1d5db;border-radius:4px;font-size:14px;color:#374151;cursor:pointer;transition:all 0.2s ease;outline:none}.accordion-action-button:hover:not(:disabled){background-color:#f3f4f6;border-color:#9ca3af}.accordion-action-button:disabled{opacity:0.5;cursor:not-allowed}.accordion-action-button:focus{box-shadow:0 0 0 2px rgba(59, 130, 246, 0.2)}.accordion-loading-spinner{font-size:16px;animation:spin 1s linear infinite;margin-left:8px}@keyframes spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.accordion-item-loading{opacity:0.7}.accordion-item-dragging{opacity:0.5;cursor:grabbing;transform:scale(0.98)}.accordion-item-drag-over{border-top:3px solid #10b981;background-color:#eff6ff}@keyframes accordion-shake{0%,100%{transform:translateX(0)}20%,60%{transform:translateX(-6px)}40%,80%{transform:translateX(6px)}}.accordion-item-shaking{animation:accordion-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;pointer-events:none}@keyframes accordion-success-pulse{0%{box-shadow:0 0 0 0 rgba(16, 185, 129, 0.4), 0 0 0 0 rgba(16, 185, 129, 0.2);background-color:rgba(16, 185, 129, 0.05)}50%{background-color:rgba(16, 185, 129, 0.1)}70%{box-shadow:0 0 0 15px rgba(16, 185, 129, 0), 0 0 0 30px rgba(16, 185, 129, 0)}100%{box-shadow:0 0 0 0 rgba(16, 185, 129, 0), 0 0 0 0 rgba(16, 185, 129, 0);background-color:transparent}}.accordion-item-success{border-color:#10b981 !important;animation:accordion-success-pulse 1s cubic-bezier(0.4, 0, 0.2, 1)}.accordion-item[draggable=true]{cursor:grab}.accordion-item[draggable=true]:active{cursor:grabbing}.accordion-nested-items{padding-left:0;background-color:transparent}.accordion-item-nested{margin-left:24px;position:relative;border-left:none;}.accordion-item-nested::before{content:"";position:absolute;left:-16px;top:0;bottom:0;width:2px;background:linear-gradient(180deg, var(--selected-header-color, #10b981) 0%, rgba(229, 231, 235, 0.4) 100%);opacity:0.6;transition:all 0.3s ease}.accordion-item-nested{}.accordion-item-nested::after{content:"";position:absolute;left:-16px;top:24px;width:14px;height:2px;background:var(--selected-header-color, #10b981);opacity:0.3;border-radius:0 2px 2px 0}.accordion-item-nested{}.accordion-item-nested .accordion-header::before{content:"";position:absolute;left:-18px;top:22px;width:6px;height:6px;background:var(--selected-header-color, #10b981);border-radius:50%;opacity:0.5;z-index:2}.accordion-item-nested .accordion-header{padding-left:16px;font-size:15px;background-color:rgba(0, 0, 0, 0.015);border-radius:0 8px 8px 0;margin-top:2px;margin-bottom:2px}.accordion-item-nested .accordion-header:hover{background-color:rgba(0, 0, 0, 0.03)}.accordion-item-nested .accordion-nested-items .accordion-header{background-color:rgba(0, 0, 0, 0.025);font-size:14px}.accordion-header-custom{padding:16px 20px;background-color:#f9fafb;border-bottom:1px solid #e5e7eb}.accordion-no-results{padding:32px 20px;text-align:center;color:#6b7280;font-size:14px}.accordion-no-results p{margin:0}.accordion-rtl{direction:rtl}.accordion-rtl .accordion-header{text-align:right}.accordion-rtl .accordion-arrow{margin-left:0;margin-right:12px}.accordion-rtl .accordion-arrow.arrow-start{margin-right:0;margin-left:12px}.accordion-rtl .accordion-item-open .accordion-header{border-left:none;border-right:3px solid var(--selected-header-color, #10b981)}.accordion-rtl .accordion-actions{margin-left:0;margin-right:8px}.accordion-dense .accordion-header{padding:10px 16px;font-size:14px}.accordion-dense .accordion-content-inner{padding:10px 16px;font-size:13px}.accordion-dense .accordion-search{padding:12px 16px}.accordion-dense .accordion-controls{padding:8px 16px}.accordion-dense .accordion-indicators{padding:12px 16px}.accordion-dense .accordion-indicator{width:28px;height:28px;font-size:12px}.accordion-dense .accordion-subtitle{font-size:12px}@media print{.accordion-print-expand-all .accordion-content{max-height:none !important;opacity:1 !important;display:block !important}.accordion-print-expand-all .accordion-item{page-break-inside:avoid}.accordion-search,.accordion-controls,.accordion-indicators{display:none !important}.accordion-arrow,.accordion-actions{display:none !important}.accordion-header{cursor:default;pointer-events:none}}.accordion-control-button:focus-visible,.accordion-action-button:focus-visible,.accordion-indicator:focus-visible{outline:2px solid #10b981;outline-offset:2px;border-radius:4px}.accordion-item,.accordion-header,.accordion-content,.accordion-action-button,.accordion-control-button{transition:all 0.2s ease}@media (prefers-reduced-motion: reduce){.accordion-content,.accordion-arrow,.accordion-item,.accordion-header,.accordion-loading-spinner{transition:none;animation:none}}.accordion-item-skeleton{padding:16px 20px;background:#fff}.skeleton-box{background:#e5e7eb;border-radius:4px;animation:skeleton-pulse 1.5s infinite ease-in-out}@keyframes skeleton-pulse{0%{opacity:0.6}50%{opacity:1}100%{opacity:0.6}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none}.accordion-status-badge{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;margin-left:12px;flex-shrink:0}.accordion-status-badge.status-completed{color:#10b981;background:rgba(16, 185, 129, 0.1)}.accordion-status-badge.status-error{color:#ef4444;background:rgba(239, 68, 68, 0.1)}.accordion-status-badge.status-warning{color:#f59e0b;background:rgba(245, 158, 11, 0.1)}.accordion-status-badge.status-current{color:#3b82f6;background:rgba(59, 130, 246, 0.1)}.pulse-dot{width:8px;height:8px;background-color:#3b82f6;border-radius:50%;box-shadow:0 0 0 0 rgba(59, 130, 246, 0.7);animation:status-pulse 1.5s infinite}@keyframes status-pulse{0%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(59, 130, 246, 0.7)}70%{transform:scale(1);box-shadow:0 0 0 6px rgba(59, 130, 246, 0)}100%{transform:scale(0.95);box-shadow:0 0 0 0 rgba(59, 130, 246, 0)}}.accordion-theme-glass{background:rgba(255, 255, 255, 0.4) !important;backdrop-filter:blur(12px) !important;border:1px solid rgba(255, 255, 255, 0.3) !important;box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.07) !important}.accordion-theme-glass .accordion-item{background:transparent;border-bottom:1px solid rgba(255, 255, 255, 0.1)}.accordion-theme-glass .accordion-header:hover{background:rgba(255, 255, 255, 0.2)}.accordion-theme-radiant{background:#0f172a !important;border:1px solid #1e293b !important;color:#f8fafc}.accordion-theme-radiant .accordion-item{border-bottom:1px solid #1e293b;background:transparent}.accordion-theme-radiant .accordion-header{color:#e2e8f0}.accordion-theme-radiant .accordion-header:hover{color:#38bdf8}.accordion-theme-radiant .accordion-item-open .accordion-header{background:linear-gradient(90deg, rgba(56, 189, 248, 0.05) 0%, transparent 100%);color:#38bdf8;box-shadow:inset 2px 0 0 #38bdf8}.accordion-theme-radiant .accordion-subtitle{color:#94a3b8}@media (min-width: 1024px){.accordion-columns-2{display:grid !important;grid-template-columns:1fr 1fr;gap:16px;border:none !important;background:transparent !important}.accordion-columns-2 .accordion-item{border:1px solid #e5e7eb;border-radius:12px;margin-bottom:0 !important}}.accordion-item{perspective:1000px;transform-style:preserve-3d}.accordion-header{transform:translate3d(var(--parallax-x, 0), var(--parallax-y, 0), 0) rotateX(var(--rotate-x, 0)) rotateY(var(--rotate-y, 0));transition:transform 0.1s ease-out;will-change:transform}.accordion-header-indicators{display:flex;align-items:center;gap:12px}.accordion-actions{display:flex;align-items:center;gap:4px}.accordion-progress-ring{position:relative;width:36px;height:36px;display:flex;align-items:center;justify-content:center;margin-left:8px}.accordion-progress-ring svg{width:100%;height:100%;transform:rotate(-90deg)}.accordion-progress-ring .ring-bg{stroke:#e5e7eb}.accordion-progress-ring .ring-fg{stroke:#3b82f6;stroke-linecap:round;transition:stroke-dasharray 0.5s ease}.accordion-progress-ring .progress-text{position:absolute;font-size:8px;font-weight:700;color:#1f2937;letter-spacing:-0.02em}.accordion-icon,.accordion-badge,.accordion-status-badge{transform:translateZ(20px)}.accordion-title{transform:translateZ(10px)}.accordion-header-sticky{position:sticky;top:0;z-index:50;background:inherit;box-shadow:0 4px 12px rgba(0, 0, 0, 0.03)}.accordion-header-sticky::after{content:"";position:absolute;bottom:-10px;left:0;right:0;height:10px;background:linear-gradient(to bottom, rgba(0, 0, 0, 0.02), transparent);pointer-events:none;opacity:1}.accordion-peek-snippet{display:block;font-size:13px;color:#94a3b8;font-style:italic;margin-top:4px;white-space:nowrap;overflow:hidden;text-overflow:ellipsis;max-width:90%;opacity:0.8;animation:peek-reveal 0.4s ease-out}@keyframes peek-reveal{from{opacity:0;transform:translateY(-4px)}to{opacity:0.8;transform:translateY(0)}}.accordion-bordered .accordion-header-sticky,.accordion-card .accordion-header-sticky{background:white;z-index:100}.accordion-theme-glass .accordion-header-sticky{background:rgba(255, 255, 255, 0.2);backdrop-filter:blur(12px)}.accordion-theme-radiant .accordion-header-sticky{background:#0f172a}.accordion-container{position:relative}.accordion-quick-actions{position:absolute;right:12px;top:50%;transform:translateY(-50%) translateX(10px);display:flex;gap:8px;opacity:0;pointer-events:none;transition:all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1);background:rgba(255, 255, 255, 0.9);padding:4px 8px;border-radius:20px;border:1px solid #e2e8f0;box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);z-index:20}.accordion-item:hover .accordion-quick-actions{opacity:1;transform:translateY(-50%) translateX(0);pointer-events:auto}.quick-action-btn{background:transparent;border:none;width:28px;height:28px;border-radius:50%;display:flex;align-items:center;justify-content:center;color:#64748b;cursor:pointer;transition:all 0.2s ease}.quick-action-btn:hover{background:#f1f5f9;color:#3b82f6;transform:scale(1.1)}.accordion-search-heatmap{position:absolute;top:80px;bottom:0;right:-12px;width:4px;background:rgba(226, 232, 240, 0.5);border-radius:2px;pointer-events:none;z-index:50}.heatmap-marker{position:absolute;width:8px;height:8px;left:-2px;background:#3b82f6;border-radius:50%;box-shadow:0 0 8px rgba(59, 130, 246, 0.8);pointer-events:auto;cursor:pointer;transition:transform 0.2s ease}.heatmap-marker:hover{transform:scale(1.5);background:#2563eb}.accordion-theme-radiant .accordion-quick-actions{background:#1e293b;border-color:#334155;color:white}.accordion-theme-glass .accordion-quick-actions{background:rgba(255, 255, 255, 0.15);backdrop-filter:blur(8px);border-color:rgba(255, 255, 255, 0.3)}.accordion-lock-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(15, 23, 42, 0.95);display:flex;flex-direction:column;align-items:center;justify-content:center;z-index:500;border-radius:inherit;backdrop-filter:blur(8px);animation:lock-fade-in 0.3s ease-out}.accordion-lock-overlay .lock-grid{display:grid;grid-template-columns:repeat(3, 40px);gap:20px;margin-bottom:24px}.accordion-lock-overlay .lock-dot{width:16px;height:16px;background:rgba(255, 255, 255, 0.2);border-radius:50%;cursor:pointer;transition:all 0.2s ease;box-shadow:0 0 10px rgba(0, 0, 0, 0.5)}.accordion-lock-overlay .lock-dot.active{background:#38bdf8;box-shadow:0 0 15px #38bdf8;transform:scale(1.3)}.accordion-lock-overlay .lock-hint{color:#94a3b8;font-size:14px;font-weight:600;margin-bottom:16px;text-transform:uppercase;letter-spacing:0.1em}.accordion-lock-overlay .lock-cancel{background:transparent;border:1px solid #334155;color:#94a3b8;padding:6px 16px;border-radius:6px;cursor:pointer;transition:all 0.2s ease}.accordion-lock-overlay .lock-cancel:hover{border-color:#ef4444;color:#ef4444}@keyframes lock-fade-in{from{opacity:0;background:rgba(0, 0, 0, 0)}to{opacity:1;background:rgba(15, 23, 42, 0.95)}}.accordion-header-sparkline{opacity:0.7;color:#3b82f6;margin-left:8px}.accordion-header-sparkline polyline{stroke-dasharray:100;stroke-dashoffset:100;animation:spark-draw 1.5s ease-out forwards}@keyframes spark-draw{to{stroke-dashoffset:0}}.accordion-theme-radiant .accordion-header-sparkline{color:#38bdf8}.accordion-theme-glass .accordion-header-sparkline{color:#8b5cf6}.accordion-breadcrumbs{font-size:10px;text-transform:uppercase;letter-spacing:0.05em;color:#94a3b8;margin-bottom:4px;opacity:0.6;font-weight:700}.breadcrumb-node{transition:color 0.2s ease}.breadcrumb-node:hover{color:#3b82f6}@media print{.accordion-print-expand-all .accordion-content{display:block !important;max-height:none !important;opacity:1 !important;visibility:visible !important;overflow:visible !important;border-top:1px solid #e2e8f0}.accordion-print-expand-all .accordion-item{margin-bottom:20px !important;break-inside:avoid;border:1px solid #e2e8f0 !important;box-shadow:none !important;background:white !important}.accordion-print-expand-all{}.accordion-print-expand-all .accordion-arrow,.accordion-print-expand-all .accordion-search,.accordion-print-expand-all .accordion-controls,.accordion-print-expand-all .accordion-quick-actions,.accordion-print-expand-all .accordion-lock-overlay,.accordion-print-expand-all .accordion-search-heatmap,.accordion-print-expand-all .accordion-action-button{display:none !important}.accordion-print-expand-all .accordion-header{background:#f8fafc !important;color:black !important;padding:12px !important}.accordion-print-expand-all .accordion-header-sparkline{display:inline-block !important;opacity:1 !important}}@media print{.accordion-theme-radiant.accordion-print-expand-all,.accordion-theme-glass.accordion-print-expand-all{background:white !important;color:black !important}.accordion-theme-radiant.accordion-print-expand-all .accordion-header,.accordion-theme-glass.accordion-print-expand-all .accordion-header{color:black !important;background:#f1f5f9 !important}.accordion-theme-radiant.accordion-print-expand-all .accordion-title,.accordion-theme-glass.accordion-print-expand-all .accordion-title{color:black !important}}.accordion-portal-reader{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;background:white;display:flex;flex-direction:column;animation:portal-glide-up 0.4s cubic-bezier(0.2, 0.8, 0.2, 1);padding:40px;overflow-y:auto}.accordion-portal-reader .portal-header{display:flex;justify-content:space-between;align-items:center;border-bottom:1px solid #e2e8f0;padding-bottom:24px;margin-bottom:40px}.accordion-portal-reader .portal-header-actions{display:flex;align-items:center;gap:12px;flex-shrink:0}.accordion-portal-reader .portal-title{font-size:32px;font-weight:800;letter-spacing:-0.02em;color:#0f172a}.accordion-portal-reader .portal-close-toggle::part(button){min-width:148px;padding:0.8rem 1rem;border-radius:999px;border:1px solid #cbd5e1;background:linear-gradient(180deg, #ffffff 0%, #f8fafc 100%);color:#0f172a;box-shadow:0 10px 24px rgba(15, 23, 42, 0.08);font-weight:700}.accordion-portal-reader .portal-close{background:#f1f5f9;border:none;width:48px;height:48px;border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.2s ease}.accordion-portal-reader .portal-close:hover{background:#ef4444;color:white;transform:rotate(90deg)}.accordion-portal-reader .portal-content{max-width:800px;margin:0 auto;width:100%}.accordion-portal-reader .portal-meta{text-transform:uppercase;font-size:12px;letter-spacing:0.1em;color:#64748b;font-weight:700;margin-bottom:24px}.accordion-portal-reader .portal-body{font-size:18px;line-height:1.8;color:#334155}.accordion-portal-reader .portal-body p{margin-bottom:1.5em}.accordion-collaborators{display:flex;margin-right:12px}.accordion-collaborators .presence-avatar{width:24px;height:24px;border-radius:50%;border:2px solid white;margin-left:-8px;display:flex;align-items:center;justify-content:center;font-size:10px;font-weight:800;color:white;box-shadow:0 0 10px rgba(0, 0, 0, 0.1);transition:transform 0.2s ease;cursor:pointer}.accordion-collaborators .presence-avatar:first-child{margin-left:0}.accordion-collaborators .presence-avatar:hover{transform:translateY(-4px) scale(1.1);z-index:10}.accordion-collaborators .presence-avatar img{width:100%;height:100%;border-radius:50%;object-fit:cover}.accordion-ai-briefing{position:absolute;top:100%;left:0;width:280px;background:white;border:1px solid #e2e8f0;border-radius:12px;padding:16px;box-shadow:0 10px 25px rgba(0, 0, 0, 0.1);z-index:100;opacity:0;pointer-events:none;transform:translateY(10px);transition:all 0.3s cubic-bezier(0.2, 0.8, 0.2, 1)}.accordion-ai-briefing .briefing-list{margin:0;padding:0 0 0 16px;font-size:13px;line-height:1.6;color:#475569}.accordion-ai-briefing .briefing-list li{margin-bottom:8px}.accordion-title:hover+.accordion-ai-briefing{opacity:1;transform:translateY(0)}@keyframes portal-glide-up{from{transform:translateY(100vh);opacity:0}to{transform:translateY(0);opacity:1}}.accordion-theme-radiant .accordion-portal-reader{background:#0f172a}.accordion-theme-radiant .accordion-portal-reader .portal-title,.accordion-theme-radiant .accordion-portal-reader .portal-body{color:white}.accordion-theme-radiant .accordion-portal-reader .portal-header{border-color:#1e293b}.accordion-theme-radiant .accordion-portal-reader .portal-close{background:#1e293b;color:white}.accordion-theme-radiant .accordion-portal-reader .portal-close-toggle::part(button){background:linear-gradient(180deg, #1e293b 0%, #0f172a 100%);border-color:#334155;color:#e2e8f0;box-shadow:0 12px 30px rgba(2, 6, 23, 0.45)}.accordion-theme-radiant .accordion-ai-briefing{background:#1e293b;border-color:#334155;color:white}.accordion-theme-radiant .accordion-ai-briefing .briefing-list{color:#cbd5e1}.accordion-streaming-terminal{background:#020617;border-radius:8px;border:1px solid #1e293b;margin-bottom:20px;overflow:hidden;box-shadow:inset 0 0 20px rgba(0, 0, 0, 0.5)}.accordion-streaming-terminal .terminal-header{background:#1e293b;padding:6px 16px;font-size:10px;font-weight:800;color:#94a3b8;letter-spacing:0.1em}.accordion-streaming-terminal .terminal-body{height:180px;overflow-y:auto;padding:12px;font-family:"JetBrains Mono", "Fira Code", monospace;font-size:11px;line-height:1.5;scroll-behavior:smooth}.accordion-streaming-terminal .terminal-line{display:flex;gap:12px;margin-bottom:4px;border-left:2px solid transparent;transition:all 0.2s ease}.accordion-streaming-terminal .terminal-line:hover{background:rgba(255, 255, 255, 0.05);border-left-color:#3b82f6}.accordion-streaming-terminal .line-timestamp{color:#64748b;white-space:nowrap}.accordion-streaming-terminal .line-msg{color:#cbd5e1;word-break:break-all}.quick-action-btn.voice-btn.active{background:#ef4444 !important;color:white !important;animation:voice-pulse 1.5s infinite ease-in-out;box-shadow:0 0 15px #ef4444}@keyframes voice-pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.3);opacity:0.7}100%{transform:scale(1);opacity:1}}.accordion-teleport-link{background:rgba(59, 130, 246, 0.1);border:1px solid rgba(59, 130, 246, 0.2);color:#3b82f6;font-size:9px;font-weight:800;padding:2px 6px;border-radius:4px;cursor:pointer;display:inline-flex;align-items:center;gap:4px;margin-left:8px;transition:all 0.2s ease}.accordion-teleport-link:hover{background:#3b82f6;color:white}.accordion-item{transition:transform 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), opacity 0.6s cubic-bezier(0.2, 0.8, 0.2, 1), box-shadow 0.6s ease;transform-origin:top center}`;

const Accordion = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.accordionChange = createEvent(this, "accordionChange");
        this.beforeOpen = createEvent(this, "beforeOpen");
        this.afterOpen = createEvent(this, "afterOpen");
        this.beforeClose = createEvent(this, "beforeClose");
        this.afterClose = createEvent(this, "afterClose");
        this.accordionSearch = createEvent(this, "accordionSearch");
        this.accordionReorder = createEvent(this, "accordionReorder");
        this.accordionAction = createEvent(this, "accordionAction");
    }
    get element() { return getElement(this); }
    /**
     * Array of accordion items
     */
    items = [];
    /**
     * Allow multiple items to be open at once
     */
    multiple = false;
    /**
     * Controlled open items (overrides internal state if provided)
     */
    expandedItems = null;
    /**
     * IDs of items that should be open by default
     */
    defaultOpen = [];
    /**
     * Animation duration in milliseconds
     */
    animationDuration = 300;
    /**
     * Animation timing function
     */
    animationTiming = 'ease';
    /**
     * Creative/Motion Variants
     */
    physics = 'standard';
    /**
     * Background color of the accordion
     */
    backgroundColor = 'white';
    /**
     * Enable haptic feedback on interaction
     */
    haptic = true;
    /**
     * Enable global animations
     */
    enableAnimation = true;
    /**
     * Show numbered indicators above the accordion
     */
    showNumbers = false;
    /**
     * Custom arrow icon for collapsed state
     */
    arrowIconCollapsed = 'chevron-right';
    /**
     * Custom arrow icon for expanded state
     */
    arrowIconExpanded = 'chevron-down';
    /**
     * Hide arrow icon completely
     */
    hideArrow = false;
    /**
     * Custom color for selected header (default: #10b981)
     */
    selectedHeaderColor = '#10b981';
    /**
     * Position of the selection indicator: 'left' | 'top' | 'none'
     */
    selectionPosition = 'left';
    /**
    * Accordion variant: 'default' | 'bordered' | 'splitted' | 'light' | 'shadow' | 'card' | 'card-list' | 'headline'
    * Use 'card' or 'card-list' for a separated card layout with icon pills and a right-chevron.
    * Use 'headline' for a minimalist, high-impact typography-first layout.
    */
    variant = 'default';
    /**
     * Size of the accordion: 'sm' | 'md' | 'lg'
     */
    size = 'md';
    /**
     * Position of the expand icon: 'start' | 'end'
     */
    iconPosition = 'end';
    /**
     * Enable state persistence - if provided, the string will be used as a localStorage key
     */
    persistState = '';
    /**
     * Only render accordion content when it is first opened (Performance)
     */
    lazyRender = false;
    /**
     * Visual theme: 'default' | 'glass' | 'radiant'
     */
    theme = 'default';
    /**
     * Grid columns count for accordion items (Large screens only)
     */
    columns = 1;
    /**
     * Enable 3D Parallax depth effect on hover (Premium themes only)
     */
    enableParallax = false;
    /**
     * Enable auditory haptics (premium click/collapse sounds)
     */
    enableHaptics = false;
    /**
     * Pin headers to the top during long content scrolls
     */
    stickyHeaders = false;
    /**
     * Enable floating Quick Actions toolbar on hover
     */
    enableQuickActions = false;
    /**
     * Enable a visual search "Mini-map" (Heatmap) on the right side
     */
    enableSearchHeatmap = false;
    /**
     * Automatically collapse sections after X milliseconds of inactivity (0 to disable)
     */
    focusTimeout = 0;
    /**
     * Automatically rank items based on their usage heat (requires persistState)
     */
    enableRanking = false;
    /**
     * Enable Pattern-Lock security for sensitive items
     */
    enableLocking = false;
    /**
     * Enable high-precision header sparklines for analytical data
     */
    enableSparklines = false;
    /**
     * Enable tactile swipe gestures for item actions (Mobile Context)
     */
    enableGestures = false;
    /**
     * Optional name for a synchronization group. All accordions with the same group
     * name will synchronize their toggle states globally.
     */
    syncGroup = '';
    /**
     * Show a navigation trail (breadcrumbs) for nested items in their headers
     */
    showBreadcrumbs = false;
    /**
     * Automatically expand all items and hide interactive controls when printing
     */
    printExpandAll = false;
    /**
     * Enable real-time collaborator presence indicators in headers
     */
    enableCollaborators = false;
    /**
     * Enable AI-generated content briefing tooltips on hover
     */
    enableAISummaries = false;
    /**
     * Enable full-screen 'Reading Portal' mode for deep-focus content analysis
     */
    enablePortalReader = false;
    /**
     * Enable Workflow 'Snapshots' (save/load open states)
     */
    enableSnapshots = false;
    /**
     * Enable real-time, auto-scrolling telemetry terminals inside items
     */
    enableStreaming = false;
    /**
     * Enable Voice-Activated industrial navigation (Hands-Free)
     */
    enableVoiceControl = false;
    /**
     * Enable Advanced 3D 'Holographic' depth stacking on expansion
     */
    enableHolographic = false;
    /**
     * Enable Smart-Link 'Teleportation' between accordion sections
     */
    enableTeleportation = false;
    isListening = false;
    voiceCommand = '';
    activePortalId = '';
    availableSnapshots = [];
    unlockedItems = new Set();
    patternInput = '';
    activeLockId = '';
    itemHeat = new Map();
    _collaborators = new Map();
    collabChannel = null;
    /**
     * Default library to use for icons (e.g., 'se', 'fontawesome', 'lucide', 'emoji', etc.)
     */
    iconLibrary = 'lucide';
    handleRemoteSync(ev) {
        if (!this.syncGroup || ev.detail.group !== this.syncGroup || ev.detail.sourceId === this.element.id)
            return;
        // We treat remote sync as a direct state override:
        const { itemId, isOpen, multiple } = ev.detail;
        if (multiple) {
            if (isOpen && !this.openItems.includes(itemId)) {
                this.openItems = [...this.openItems, itemId];
            }
            else if (!isOpen) {
                this.openItems = this.openItems.filter(id => id !== itemId);
            }
        }
        else {
            this.openItems = isOpen ? [itemId] : [];
        }
    }
    /**
     * Disable the entire accordion
     */
    disabled = false;
    /**
     * Enable search/filter functionality
     */
    enableSearch = false;
    /**
     * Search input placeholder
     */
    searchPlaceholder = 'Search...';
    /**
     * Show expand/collapse all buttons
     */
    enableExpandCollapseAll = false;
    /**
     * Save state to localStorage
     */
    enablePersistence = false;
    /**
     * localStorage key for persistence
     */
    persistenceKey = 'ui-accordion-state';
    /**
     * Enable drag & drop reordering
     */
    enableDragDrop = false;
    /**
     * Enable nested accordion support
     */
    enableNested = false;
    /**
     * Right-to-left mode
     */
    rtl = false;
    /**
     * Compact/dense mode
     */
    dense = false;
    /**
     * Header heading level (1-6) for accessibility
     */
    /**
     * Header heading level (1-6) for accessibility
     */
    headerLevel = 3;
    /**
     * Show global skeleton loading state
     */
    loading = false;
    /**
     * Automatically scroll the item into view when it is opened if it's partially off-screen
     */
    autoScroll = false;
    /**
     * Scrolling behavior when autoScroll is enabled
     */
    scrollBehavior = 'smooth';
    openItems = [];
    onExpandedItemsChange(newValue) {
        if (newValue !== null) {
            this.openItems = [...newValue];
        }
    }
    parsedItems = [];
    parsedDefaultOpen = [];
    searchQuery = '';
    filteredItems = [];
    draggedItemId = null;
    dragOverItemId = null;
    animatingItems = new Set();
    /** IDs of items currently shaking (Veto state) */
    isShaking = new Set();
    accordionChange;
    beforeOpen;
    afterOpen;
    beforeClose;
    afterClose;
    accordionSearch;
    accordionReorder;
    accordionAction;
    contentElements = new Map();
    itemRefs = new Map();
    focusTimers = new Map();
    onItemsChange(newValue) {
        if (typeof newValue === 'string') {
            try {
                this.parsedItems = JSON.parse(newValue);
            }
            catch (error) {
                console.error('Invalid JSON for accordion items:', error);
                this.parsedItems = [];
            }
        }
        else {
            this.parsedItems = newValue || [];
        }
        this.contentElements.clear();
    }
    onDefaultOpenChange(newValue) {
        this.parsedDefaultOpen = newValue || [];
        this.openItems = [...this.parsedDefaultOpen];
    }
    onMultipleChange(newValue, oldValue) {
        // When switching from multi to single mode, keep only the first open item
        if (oldValue && !newValue && this.openItems.length > 1) {
            this.openItems = [this.openItems[0]];
        }
    }
    onAnimationDurationChange() {
        // Trigger re-render
        this.openItems = [...this.openItems];
    }
    onShowNumbersChange() {
        // Trigger re-render
        this.openItems = [...this.openItems];
    }
    componentWillLoad() {
        // Initialize parsed items
        this.onItemsChange(this.items);
        this.onDefaultOpenChange(this.defaultOpen);
        // Load from localStorage if persistence is enabled, otherwise use default
        if (this.enablePersistence) {
            const saved = this.loadFromStorage();
            this.openItems = saved || [...this.parsedDefaultOpen];
        }
        else {
            this.openItems = [...this.parsedDefaultOpen];
        }
        // Initialize filtered items
        this.filteredItems = this.parsedItems;
        if (this.enableCollaborators) {
            this.initCollaboration();
        }
        if (this.enableAISummaries) {
            this.simulateAISummaries();
        }
    }
    initCollaboration() {
        if (!('BroadcastChannel' in window))
            return;
        this.collabChannel = new BroadcastChannel(`ui-accordion-collab-${this.persistenceKey || 'default'}`);
        this.collabChannel.onmessage = (ev) => {
            const { type, itemId, user } = ev.data;
            if (type === 'presence') {
                const current = this._collaborators.get(itemId) || [];
                if (!current.find(u => u.id === user.id)) {
                    this._collaborators.set(itemId, [...current, user]);
                    this._collaborators = new Map(this._collaborators);
                }
            }
        };
    }
    simulateAISummaries() {
        // In a real app, this would be an API call. 
        // Here we simulate "thinking" and then populating the summaryList if missing.
        this.parsedItems.forEach(item => {
            if (!item.summaryList && item.content) {
                // Logic to extract main points or simulate them
                const contentText = item.content.replace(/<[^>]*>/g, '').slice(0, 200);
                item.summaryList = [
                    `Key Insight: ${contentText.split('.')[0] || 'Analyzing content...'}`,
                    `Status: Verified by AI Engine`,
                    `Confidence: 98.4%`
                ];
            }
        });
    }
    componentDidUpdate() {
        // Set content for all items after render
        this.getAllItems(this.parsedItems).forEach(item => {
            const contentElement = this.contentElements.get(item.id);
            if (contentElement && item.content) {
                contentElement.innerHTML = sanitizeHTML(item.content);
            }
        });
        // Save to localStorage if persistence is enabled
        if (this.enablePersistence) {
            this.saveToStorage();
        }
    }
    handleKeyDown(event) {
        if (!this.element.contains(event.target))
            return;
        const target = event.target;
        const item = target.closest('.accordion-item');
        if (!item)
            return;
        const itemId = item.getAttribute('data-id');
        if (!itemId)
            return;
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.toggleItem(itemId);
                break;
            case 'ArrowDown':
                event.preventDefault();
                this.focusNextItem(itemId);
                break;
            case 'ArrowUp':
                event.preventDefault();
                this.focusPreviousItem(itemId);
                break;
            case 'Home':
                event.preventDefault();
                this.focusFirstItem();
                break;
            case 'End':
                event.preventDefault();
                this.focusLastItem();
                break;
        }
    }
    toggleItem(itemId, event) {
        if (event) {
            event.stopPropagation();
        }
        if (this.disabled)
            return;
        const allItems = this.getAllItems(this.parsedItems);
        const item = allItems.find(i => i.id === itemId);
        if (item?.disabled)
            return;
        // Check if item is currently animating
        if (this.animatingItems.has(itemId)) {
            return; // Prevent toggling during animation
        }
        const newOpenItems = [...this.openItems];
        const isCurrentlyOpen = newOpenItems.includes(itemId);
        const willBeOpen = !isCurrentlyOpen;
        // Emit before event
        const beforeEvent = {
            itemId,
            isOpen: willBeOpen,
            timestamp: Date.now()
        };
        if (willBeOpen) {
            if (item?.lockCode && !this.unlockedItems.has(itemId) && this.enableLocking) {
                this.activeLockId = itemId;
                this.patternInput = '';
                return; // Prevent opening locked item
            }
            this.updateHeat(itemId);
            this.resetFocusTimer(itemId);
            const ev = this.beforeOpen.emit(beforeEvent);
            if (ev.defaultPrevented)
                return;
        }
        else {
            this.clearFocusTimer(itemId);
            const ev = this.beforeClose.emit(beforeEvent);
            if (ev.defaultPrevented)
                return;
        }
        // Mark as animating
        this.animatingItems.add(itemId);
        this.animatingItems = new Set(this.animatingItems);
        // Update open items
        if (this.multiple) {
            if (isCurrentlyOpen) {
                if (!this.expandedItems)
                    this.openItems = newOpenItems.filter(id => id !== itemId);
            }
            else {
                if (!this.expandedItems)
                    this.openItems = [...newOpenItems, itemId];
            }
        }
        else {
            const path = this.getPathToItem(this.parsedItems, itemId) || [];
            if (isCurrentlyOpen) {
                if (!this.expandedItems)
                    this.openItems = path.filter(id => id !== itemId);
            }
            else {
                if (!this.expandedItems)
                    this.openItems = path;
            }
        }
        this.accordionChange.emit({
            itemId,
            isOpen: willBeOpen,
            openItems: this.expandedItems ? (isCurrentlyOpen ? newOpenItems.filter(id => id !== itemId) : [...newOpenItems, itemId]) : [...this.openItems]
        });
        // Broadcast state for sync groups
        if (this.syncGroup) {
            window.dispatchEvent(new CustomEvent('accordionRemoteState', {
                detail: {
                    group: this.syncGroup,
                    itemId,
                    isOpen: willBeOpen,
                    multiple: this.multiple,
                    sourceId: this.element.id
                }
            }));
        }
        // High-resolution Audio Haptic
        this.playHaptic(willBeOpen ? 'open' : 'close');
        // Traditional Vibration Haptic
        if (this.haptic && navigator.vibrate) {
            navigator.vibrate(willBeOpen ? 10 : 8);
        }
        // Emit after event after animation completes
        setTimeout(() => {
            this.animatingItems.delete(itemId);
            this.animatingItems = new Set(this.animatingItems);
            const isOpen = this.openItems.includes(itemId);
            const afterEvent = {
                itemId,
                isOpen,
                timestamp: Date.now()
            };
            if (isOpen) {
                this.afterOpen.emit(afterEvent);
                if (this.autoScroll) {
                    this.scrollToItem(itemId, this.scrollBehavior);
                }
            }
            else {
                this.afterClose.emit(afterEvent);
            }
        }, this.animationDuration);
    }
    /**
     * Triggers a kinetic shake animation on a specific item (Veto feedback)
     */
    async shake(itemId) {
        if (this.isShaking.has(itemId))
            return;
        this.isShaking.add(itemId);
        this.isShaking = new Set(this.isShaking);
        if (this.haptic && navigator.vibrate) {
            navigator.vibrate([30, 50, 30]); // Triple pulse for error/veto
        }
        setTimeout(() => {
            this.isShaking.delete(itemId);
            this.isShaking = new Set(this.isShaking);
        }, 600);
    }
    /**
     * Triggers a success radiant pulse on a specific item
     */
    async success(itemId) {
        const itemElement = this.element.shadowRoot?.querySelector(`[data-id="${itemId}"]`);
        if (itemElement) {
            itemElement.classList.add('accordion-item-success');
            if (this.haptic && navigator.vibrate) {
                navigator.vibrate([10, 30, 20]); // Double micro-click for success
            }
            setTimeout(() => {
                itemElement.classList.remove('accordion-item-success');
            }, 1000);
        }
    }
    focusNextItem(currentId) {
        const visibleItems = this.getVisibleItems(this.parsedItems);
        const currentIndex = visibleItems.findIndex(item => item.id === currentId);
        if (currentIndex === -1)
            return;
        const nextIndex = (currentIndex + 1) % visibleItems.length;
        this.focusItem(visibleItems[nextIndex].id);
    }
    focusPreviousItem(currentId) {
        const visibleItems = this.getVisibleItems(this.parsedItems);
        const currentIndex = visibleItems.findIndex(item => item.id === currentId);
        if (currentIndex === -1)
            return;
        const prevIndex = currentIndex === 0 ? visibleItems.length - 1 : currentIndex - 1;
        this.focusItem(visibleItems[prevIndex].id);
    }
    focusFirstItem() {
        const visibleItems = this.getVisibleItems(this.parsedItems);
        if (visibleItems.length > 0) {
            this.focusItem(visibleItems[0].id);
        }
    }
    focusLastItem() {
        const visibleItems = this.getVisibleItems(this.parsedItems);
        if (visibleItems.length > 0) {
            this.focusItem(visibleItems[visibleItems.length - 1].id);
        }
    }
    focusItem(itemId) {
        const itemElement = this.element.querySelector(`[data-id="${itemId}"] .accordion-header`);
        if (itemElement) {
            itemElement.focus();
        }
    }
    async openItem(itemId) {
        const allItems = this.getAllItems(this.parsedItems);
        const item = allItems.find(i => i.id === itemId);
        if (item?.disabled)
            return;
        let newOpenItems = [...this.openItems];
        if (!this.multiple) {
            newOpenItems = [];
        }
        if (!newOpenItems.includes(itemId)) {
            newOpenItems.push(itemId);
        }
        this.openItems = newOpenItems;
    }
    async closeItem(itemId) {
        this.openItems = this.openItems.filter(id => id !== itemId);
    }
    async toggleItemById(itemId) {
        this.toggleItem(itemId);
    }
    async openAll() {
        if (this.multiple) {
            this.openItems = this.getAllItems(this.parsedItems).map(item => item.id);
        }
    }
    async closeAll() {
        this.openItems = [];
    }
    async scrollToItem(itemId, behavior = 'smooth') {
        const el = this.itemRefs.get(itemId);
        if (el)
            el.scrollIntoView({ behavior, block: 'center' });
    }
    async searchItems(query) {
        this.searchQuery = query;
        this.performSearch();
    }
    async clearSearch() {
        this.searchQuery = '';
        this.filteredItems = this.parsedItems;
    }
    async getOpenItems() {
        return [...this.openItems];
    }
    async setOpenItems(itemIds) {
        this.openItems = [...itemIds];
    }
    async saveSnapshot(name) {
        if (!this.enableSnapshots)
            return;
        const key = `${this.persistenceKey}-snapshot-${name}`;
        localStorage.setItem(key, JSON.stringify(this.openItems));
        this.availableSnapshots = [...new Set([...this.availableSnapshots, name])];
        this.saveToStorage(); // Update snapshots list in persistence too
    }
    async teleportTo(itemId) {
        if (!this.enableTeleportation)
            return;
        this.openItem(itemId);
        this.scrollToItem(itemId);
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
            this.voiceCommand = command;
            // Industrial Logic: Match command to item titles or keywords
            const match = this.getAllItems(this.parsedItems).find(i => command.includes(i.title.toLowerCase()) ||
                command.includes(i.id.toLowerCase()));
            if (match)
                this.toggleItem(match.id);
            if (command.includes('reset') || command.includes('close all'))
                this.closeAll();
            if (command.includes('search for')) {
                const q = command.split('search for')[1].trim();
                this.searchItems(q);
            }
        };
        recognition.start();
    }
    // Private helper methods
    saveToStorage() {
        try {
            localStorage.setItem(this.persistenceKey, JSON.stringify(this.openItems));
        }
        catch (error) {
            console.error('Failed to save accordion state:', error);
        }
    }
    playHaptic(type) {
        if (!this.enableHaptics)
            return;
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            const now = audioCtx.currentTime;
            if (type === 'open') {
                // High-pitched industrial click
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(880, now);
                oscillator.frequency.exponentialRampToValueAtTime(100, now + 0.1);
                gainNode.gain.setValueAtTime(0.3, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.1);
            }
            else {
                // Soft, dampened collapse
                oscillator.type = 'triangle';
                oscillator.frequency.setValueAtTime(220, now);
                oscillator.frequency.exponentialRampToValueAtTime(40, now + 0.15);
                gainNode.gain.setValueAtTime(0.2, now);
                gainNode.gain.exponentialRampToValueAtTime(0.01, now + 0.15);
            }
            oscillator.start(now);
            oscillator.stop(now + 0.2);
            // Close context to free resources
            setTimeout(() => audioCtx.close(), 250);
        }
        catch (e) {
            console.warn('Audio haptics unavailable:', e);
        }
    }
    loadFromStorage() {
        try {
            const saved = localStorage.getItem(this.persistenceKey);
            return saved ? JSON.parse(saved) : null;
        }
        catch (error) {
            console.error('Failed to load accordion state:', error);
            return null;
        }
    }
    performSearch() {
        if (!this.searchQuery.trim()) {
            this.filteredItems = this.parsedItems;
            this.accordionSearch.emit({
                query: '',
                matchedItems: [],
                totalItems: this.parsedItems.length
            });
            return;
        }
        const query = this.searchQuery.toLowerCase();
        const allItems = this.getAllItems(this.parsedItems);
        const matchedIds = allItems
            .filter(item => {
            if (item.searchable === false)
                return false;
            const searchableText = `${item.title} ${item.subtitle || ''} ${item.content || ''}`.toLowerCase();
            return searchableText.includes(query);
        })
            .map(item => item.id);
        // Filter top-level items that match or have matching children
        this.filteredItems = this.parsedItems.filter(item => this.itemOrChildrenMatch(item, matchedIds));
        this.accordionSearch.emit({
            query: this.searchQuery,
            matchedItems: matchedIds,
            totalItems: allItems.length
        });
    }
    itemOrChildrenMatch(item, matchedIds) {
        if (matchedIds.includes(item.id))
            return true;
        if (item.children) {
            return item.children.some(child => this.itemOrChildrenMatch(child, matchedIds));
        }
        return false;
    }
    getAllItems(items) {
        const result = [];
        items.forEach(item => {
            result.push(item);
            if (item.children && this.enableNested) {
                result.push(...this.getAllItems(item.children));
            }
        });
        return result;
    }
    getVisibleItems(items) {
        const result = [];
        items.forEach(item => {
            result.push(item);
            const isOpen = this.openItems.includes(item.id);
            if (item.children && this.enableNested && isOpen) {
                result.push(...this.getVisibleItems(item.children));
            }
        });
        return result;
    }
    getPathToItem(items, targetId) {
        for (const item of items) {
            if (item.id === targetId) {
                return [item.id];
            }
            if (item.children) {
                const path = this.getPathToItem(item.children, targetId);
                if (path) {
                    return [item.id, ...path];
                }
            }
        }
        return null;
    }
    handleDragStart(itemId, event) {
        if (!this.enableDragDrop)
            return;
        this.draggedItemId = itemId;
        if (event.dataTransfer) {
            event.dataTransfer.effectAllowed = 'move';
            event.dataTransfer.setData('text/plain', itemId);
        }
    }
    handleDragOver(itemId, event) {
        if (!this.enableDragDrop || !this.draggedItemId)
            return;
        event.preventDefault();
        this.dragOverItemId = itemId;
        if (event.dataTransfer) {
            event.dataTransfer.dropEffect = 'move';
        }
    }
    handleDragEnd() {
        this.draggedItemId = null;
        this.dragOverItemId = null;
    }
    handleDrop(targetItemId, event) {
        if (!this.enableDragDrop || !this.draggedItemId)
            return;
        event.preventDefault();
        const draggedIndex = this.parsedItems.findIndex(item => item.id === this.draggedItemId);
        const targetIndex = this.parsedItems.findIndex(item => item.id === targetItemId);
        if (draggedIndex !== -1 && targetIndex !== -1 && draggedIndex !== targetIndex) {
            const newItems = [...this.parsedItems];
            const [draggedItem] = newItems.splice(draggedIndex, 1);
            newItems.splice(targetIndex, 0, draggedItem);
            this.parsedItems = newItems;
            this.items = [...newItems];
            this.accordionReorder.emit({
                itemId: this.draggedItemId,
                oldIndex: draggedIndex,
                newIndex: targetIndex,
                items: newItems
            });
        }
        this.handleDragEnd();
    }
    handleActionClick(itemId, actionId, action, event) {
        event.stopPropagation();
        if (action.onClick) {
            action.onClick(itemId, actionId);
        }
        this.accordionAction.emit({
            itemId,
            actionId,
            action
        });
    }
    resetFocusTimer(id) {
        if (!this.focusTimeout || this.focusTimeout <= 0)
            return;
        this.clearFocusTimer(id);
        this.focusTimers.set(id, setTimeout(() => {
            if (this.openItems.includes(id)) {
                this.toggleItem(id);
            }
        }, this.focusTimeout));
    }
    clearFocusTimer(id) {
        const timer = this.focusTimers.get(id);
        if (timer) {
            clearTimeout(timer);
            this.focusTimers.delete(id);
        }
    }
    renderPresence(item) {
        if (!this.enableCollaborators)
            return null;
        const collaborators = [...(item.collaborators || []), ...(this._collaborators.get(item.id) || [])];
        if (collaborators.length === 0)
            return null;
        return (h("div", { class: "accordion-collaborators" }, collaborators.map(user => (h("div", { class: "presence-avatar", title: user.name, style: { backgroundColor: user.color || '#3bf673' } }, user.avatar ? h("img", { src: user.avatar, alt: "" }) : (user.name ? user.name.charAt(0) : '?'))))));
    }
    renderAIBriefing(item) {
        if (!this.enableAISummaries || !item.summaryList)
            return null;
        return (h("div", { class: "accordion-ai-briefing" }, h("ul", { class: "briefing-list" }, item.summaryList.map(point => h("li", null, point)))));
    }
    renderPortalOverlay() {
        if (!this.activePortalId)
            return null;
        const item = this.getAllItems(this.parsedItems).find(i => i.id === this.activePortalId);
        if (!item)
            return null;
        const containerStyles = {
            '--accordion-bg': this.backgroundColor || 'white',
            backgroundColor: 'var(--accordion-bg, #ffffff)'
        };
        return (h("div", { class: "accordion-portal-overlay", style: containerStyles }, h("div", { class: "portal-header" }, h("div", { class: "portal-title" }, item.title), h("div", { class: "portal-header-actions" }, h("ui-button-toggle", { class: "portal-close-toggle", value: "close-portal", label: "Exit reader", icon: "x", library: this.iconLibrary, variant: "outline", shape: "pill", size: "sm", ariaLabel: "Close portal reader", onButtonToggleChange: () => this.activePortalId = '' }))), h("div", { class: "portal-content" }, h("div", { class: "portal-meta" }, item.subtitle, " | Full Focus Mode"), h("div", { class: "portal-body", innerHTML: sanitizeHTML(item.content ?? '') }))));
    }
    renderStreamingTerminal(item) {
        if (!this.enableStreaming || !item.streamData)
            return null;
        return (h("div", { class: "accordion-streaming-terminal" }, h("div", { class: "terminal-header" }, "LIVE TELEMETRY STREAM"), h("div", { class: "terminal-body", ref: el => {
                if (el)
                    el.scrollTop = el.scrollHeight;
            } }, item.streamData.map(log => (h("div", { class: "terminal-line" }, h("span", { class: "line-timestamp" }, "[", new Date().toLocaleTimeString(), "]"), h("span", { class: "line-msg" }, log)))))));
    }
    renderTeleportLink(item) {
        if (!item.teleportTo)
            return null;
        return (h("ui-button", { variant: "ghost", size: "xs", class: "accordion-teleport-link", icon: "link-2", iconLibrary: "lucide", iconSize: "12px", label: `Goto: ${item.teleportTo}`, onClick: (e) => {
                e.stopPropagation();
                if (item.teleportTo)
                    this.teleportTo(item.teleportTo);
            } }));
    }
    renderQuickActions(item) {
        if (!this.enableQuickActions)
            return null;
        const actions = item.actions || [];
        return (h("div", { class: "accordion-quick-actions" }, this.enableVoiceControl && (h("ui-button", { variant: "ghost", iconOnly: true, size: "xs", class: `quick-action-btn voice-btn ${this.isListening ? 'active' : ''}`, icon: "mic", iconLibrary: "lucide", iconSize: "14px", ariaLabel: "Start Voice Command", onClick: (e) => { e.stopPropagation(); this.initVoice(); } })), this.enablePortalReader && (h("ui-button", { variant: "ghost", iconOnly: true, size: "xs", class: "quick-action-btn portal-btn", icon: "maximize", iconLibrary: "lucide", iconSize: "14px", ariaLabel: "Open Focus Portal", onClick: (e) => {
                e.stopPropagation();
                this.activePortalId = item.id;
            } })), actions.map(action => (h("ui-button", { variant: action.variant || 'ghost', iconOnly: !action.label || !!action.icon, size: "xs", class: "quick-action-btn", icon: action.icon, iconLibrary: action.iconLibrary || this.iconLibrary, iconSize: "14px", label: action.icon ? undefined : action.label, ariaLabel: action.ariaLabel || action.label, disabled: action.disabled, onClick: (e) => {
                this.handleActionClick(item.id, action.id, action, e);
            } })))));
    }
    renderSearchHeatmap() {
        if (!this.enableSearchHeatmap || !this.searchQuery)
            return null;
        const allItems = this.getAllItems(this.parsedItems);
        const matchedIndices = allItems
            .map((item, index) => ({ id: item.id, index }))
            .filter(item => {
            const query = this.searchQuery.toLowerCase();
            return `${item.id}` && (allItems[item.index].title.toLowerCase().includes(query) ||
                (allItems[item.index].subtitle || '').toLowerCase().includes(query));
        });
        const total = allItems.length;
        return (h("div", { class: "accordion-search-heatmap" }, matchedIndices.map(match => (h("div", { class: "heatmap-marker", style: {
                top: `${(match.index / total) * 100}%`
            }, onClick: () => this._scrollToItem(match.id) })))));
    }
    _scrollToItem(id) {
        this.scrollToItem(id);
    }
    updateHeat(id) {
        if (!this.enableRanking)
            return;
        const current = this.itemHeat.get(id) || 0;
        this.itemHeat.set(id, current + 1);
        this.itemHeat = new Map(this.itemHeat);
        this.saveToStorage(); // Corrected method name
    }
    renderSparkline(data) {
        if (!this.enableSparklines || !data || data.length < 2)
            return null;
        // Defensive: if data is undefined, use empty array
        const safeData = data ?? [];
        if (safeData.length < 2)
            return null;
        const max = Math.max(...safeData);
        const min = Math.min(...safeData);
        const range = max - min || 1;
        const width = 60;
        const height = 20;
        const points = safeData.map((val, i) => {
            const x = (i / (safeData.length - 1)) * width;
            const y = height - ((val - min) / range) * height;
            return `${x},${y}`;
        }).join(' ');
        return (h("div", { class: "accordion-header-sparkline" }, h("svg", { width: width, height: height, viewBox: `0 0 ${width} ${height}` }, h("polyline", { fill: "none", stroke: "currentColor", "stroke-width": "1.5", "stroke-linecap": "round", "stroke-linejoin": "round", points: points }))));
    }
    handlePatternDot(dot) {
        this.patternInput += dot;
        const item = this.getAllItems(this.parsedItems).find(i => i.id === this.activeLockId);
        if (item && item.lockCode === this.patternInput) {
            this.unlockedItems.add(this.activeLockId);
            this.unlockedItems = new Set(this.unlockedItems);
            const idToOpen = this.activeLockId;
            this.activeLockId = '';
            this.toggleItem(idToOpen);
        }
        else if (this.patternInput.length >= (item?.lockCode?.length || 9)) {
            // Failed pattern - Reset
            this.shake(this.activeLockId);
            this.patternInput = '';
        }
    }
    renderLockOverlay() {
        if (!this.activeLockId)
            return null;
        const dots = ['1', '2', '3', '4', '5', '6', '7', '8', '9'];
        return (h("div", { class: "accordion-lock-overlay" }, h("div", { class: "lock-grid" }, dots.map(dot => (h("div", { class: { 'lock-dot': true, 'active': this.patternInput.includes(dot) }, onMouseEnter: () => this.handlePatternDot(dot), onTouchStart: () => this.handlePatternDot(dot) })))), h("div", { class: "lock-hint" }, "Draw Security Pattern"), h("ui-button", { variant: "ghost", size: "sm", class: "lock-cancel", label: "Cancel", onClick: () => this.activeLockId = '' })));
    }
    handleParallax(e, id) {
        if (!this.enableParallax)
            return;
        const item = this.itemRefs.get(id);
        if (!item)
            return;
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        const moveX = (x - centerX) / (rect.width / 4);
        const moveY = (y - centerY) / (rect.height / 4);
        item.style.setProperty('--parallax-x', `${moveX * 10}px`);
        item.style.setProperty('--parallax-y', `${moveY * 10}px`);
        item.style.setProperty('--rotate-y', `${moveX * 8}deg`);
        item.style.setProperty('--rotate-x', `${-moveY * 8}deg`);
    }
    resetParallax(id) {
        const item = this.itemRefs.get(id);
        if (!item)
            return;
        item.style.setProperty('--parallax-x', '0px');
        item.style.setProperty('--parallax-y', '0px');
        item.style.setProperty('--rotate-y', '0deg');
        item.style.setProperty('--rotate-x', '0deg');
    }
    highlightSearchText(text) {
        if (!this.searchQuery.trim())
            return text;
        const query = this.searchQuery.trim();
        const regex = new RegExp(`(${query})`, 'gi');
        return text.replace(regex, '<mark class="search-highlight">$1</mark>');
    }
    renderItem(item, depth = 0, parentTitles = []) {
        const isOpen = this.openItems.includes(item.id);
        const isDisabled = this.disabled || item.disabled || false;
        const isDragging = this.draggedItemId === item.id;
        const isDragOver = this.dragOverItemId === item.id;
        const itemClasses = [
            'accordion-item',
            isOpen && 'accordion-item-open',
            isDisabled && 'accordion-item-disabled',
            isDragging && 'accordion-item-dragging',
            isDragOver && 'accordion-item-drag-over',
            item.loading && 'accordion-item-loading',
            depth > 0 && 'accordion-item-nested',
            this.isShaking.has(item.id) && 'accordion-item-shaking'
        ].filter(Boolean).join(' ');
        const headerClasses = [
            'accordion-header',
            isDisabled && 'accordion-header-disabled',
            this.stickyHeaders && 'accordion-header-sticky',
            this.selectionPosition !== 'none' && `accordion-selection-${this.selectionPosition}`,
            this.enableAnimation && `accordion-physics-${this.physics}`
        ].filter(Boolean).join(' ');
        const contentClasses = [
            'accordion-content',
            isOpen && 'accordion-content-open',
            this.enableAnimation && `accordion-physics-${this.physics}`
        ].filter(Boolean).join(' ');
        // Calculate effective header level (max 6)
        const currentHeaderLevel = Math.min(this.headerLevel + depth, 6);
        const HeaderTag = `h${currentHeaderLevel}`; // Dynamic tag
        return (h("div", { class: itemClasses, "data-id": item.id, draggable: this.enableDragDrop && !isDisabled, onDragStart: (e) => this.handleDragStart(item.id, e), onDragOver: (e) => this.handleDragOver(item.id, e), onDragEnd: () => this.handleDragEnd(), onDrop: (e) => this.handleDrop(item.id, e), onMouseMove: (e) => this.handleParallax(e, item.id), onMouseLeave: () => this.resetParallax(item.id), style: {
                '--nest-depth': depth.toString(),
                ...(this.enableHolographic && this.openItems.length > 0 && !isOpen ? {
                    transform: `perspective(1000px) rotateX(-10deg) translateZ(-50px)`,
                    opacity: '0.6'
                } : {})
            }, ref: (el) => {
                if (el)
                    this.itemRefs.set(item.id, el);
            } }, item.headerSlot ? (h("div", { class: "accordion-header-custom", role: "heading", "aria-level": currentHeaderLevel }, h("slot", { name: item.headerSlot }))) : (h(HeaderTag, { style: { margin: 0, padding: 0 } }, h("ui-button", { variant: "accordion", class: headerClasses, onClick: (e) => this.toggleItem(item.id, e), disabled: isDisabled, fullWidth: true, "icon-position": "none", align: "start", justify: "between", noRipple: true, "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": `accordion-content-${item.id}`, ariaLabel: `${isOpen ? 'Close' : 'Open'} ${item.title}`, tabindex: isDisabled ? -1 : 0 }, h("div", { class: "accordion-header-content" }, h("div", { class: "accordion-header-left" }, this.iconPosition === 'start' && !this.hideArrow && (() => {
            const arrowName = isOpen ? this.arrowIconExpanded : this.arrowIconCollapsed;
            const arrowLib = this.iconLibrary;
            return (h("ui-icon", { name: arrowName, library: arrowLib, size: "1.2em", class: "accordion-arrow arrow-start" }));
        })(), item.image && (h("img", { src: item.image, alt: "", class: "accordion-image" })), item.icon && (h("span", { class: "accordion-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.2em" }))), h("div", { class: "accordion-header-text" }, this.showBreadcrumbs && parentTitles.length > 0 && (h("div", { class: "accordion-breadcrumbs" }, parentTitles.map((p, i) => (h("span", { class: "breadcrumb-node" }, p, " ", i < parentTitles.length - 1 ? ' > ' : ''))))), h("div", { class: "accordion-title-group" }, h("div", { class: "accordion-title", innerHTML: sanitizeHTML(this.enableSearch ? this.highlightSearchText(item.title) : item.title) }), item.subtitle && (h("div", { class: "accordion-subtitle", innerHTML: sanitizeHTML(this.enableSearch ? this.highlightSearchText(item.subtitle) : item.subtitle) })), this.renderSparkline(item.sparkline ?? []), this.renderAIBriefing(item), this.renderTeleportLink(item)), item.peek && !isOpen && !this.searchQuery && (h("span", { class: "accordion-peek-snippet", innerHTML: sanitizeHTML(item.peek) })))), h("div", { class: "accordion-header-right" }, h("div", { class: "accordion-header-indicators" }, this.renderPresence(item), this.renderQuickActions(item), item.progress !== undefined && item.progress >= 0 && (h("div", { class: "accordion-progress-ring" }, h("svg", { viewBox: "0 0 36 36" }, h("circle", { cx: "18", cy: "18", r: "16", fill: "none", class: "ring-bg", "stroke-width": "3" }), h("circle", { cx: "18", cy: "18", r: "16", fill: "none", class: "ring-fg", "stroke-width": "3", style: { strokeDasharray: `${item.progress}, 100` } })), h("span", { class: "progress-text" }, item.progress, "%"))), item.status && item.status !== 'none' && (h("div", { class: `accordion-status-badge status-${item.status}` }, item.status === 'completed' && h("ui-icon", { name: "check", library: this.iconLibrary, size: "14px" }), item.status === 'error' && h("ui-icon", { name: "alert-circle", library: this.iconLibrary, size: "14px" }), item.status === 'warning' && h("ui-icon", { name: "alert-triangle", library: this.iconLibrary, size: "14px" }), item.status === 'current' && h("div", { class: "pulse-dot" })))), item.badge !== undefined && item.badge > 0 && (h("span", { class: "accordion-badge" }, item.badge)), item.actions && item.actions.length > 0 && (h("div", { class: "accordion-actions" }, item.actions.map(action => (h("ui-button", { key: action.id, variant: action.variant || 'ghost', size: "xs", iconOnly: !!action.icon, icon: action.icon, iconLibrary: action.iconLibrary || item.iconLibrary || this.iconLibrary, iconSize: "1.1em", label: action.icon ? undefined : action.label, ariaLabel: action.ariaLabel || action.label, disabled: action.disabled, onClick: (e) => this.handleActionClick(item.id, action.id, action, e) }))))), item.loading && (h("ui-loader", { size: "xs", color: "currentColor", class: "accordion-loading-spinner" })), this.iconPosition === 'end' && !this.hideArrow && (() => {
            //  const isCardList = this.variant === 'card-list' || this.variant === 'card';
            const arrowName = isOpen ? this.arrowIconExpanded : this.arrowIconCollapsed;
            const arrowLib = this.iconLibrary;
            return (h("ui-icon", { name: arrowName, library: arrowLib, size: "1.2em", class: "accordion-arrow" }));
        })()))))), (() => {
            // God-tier Lazy Logic:
            // 1. If not lazy, always render.
            // 2. If lazy, render if: is open, is animating, OR has already been rendered once.
            const isAnimating = this.animatingItems.has(item.id);
            const hasRenderedOnce = item.renderOnceOnly;
            const showContent = !this.lazyRender || isOpen || isAnimating || hasRenderedOnce || this.printExpandAll;
            if (showContent && this.lazyRender && isOpen) {
                item.renderOnceOnly = true; // Flag for future closes
            }
            if (!showContent)
                return null;
            return (h("div", { class: contentClasses, id: `accordion-content-${item.id}`, "aria-labelledby": `accordion-header-${item.id}`, role: "region", style: {
                    '--animation-duration': `${this.animationDuration}ms`,
                    '--animation-timing': this.animationTiming
                } }, h("div", { class: "accordion-content-inner", ref: (el) => {
                    if (el && item.content) {
                        this.contentElements.set(item.id, el);
                    }
                } }, this.renderStreamingTerminal(item), item.content || h("slot", { name: `content-${item.id}` })), this.enableNested && item.children && item.children.length > 0 && (h("div", { class: "accordion-nested-items" }, item.children.map(child => this.renderItem(child, depth + 1, [...parentTitles, item.title]))))));
        })()));
    }
    renderSkeleton() {
        return Array.from({ length: 3 }).map((_, index) => (h("div", { class: "accordion-item accordion-item-skeleton", key: `skeleton-${index}` }, h("div", { class: "accordion-header" }, h("div", { class: "accordion-header-content" }, h("div", { class: "skeleton-box", style: { width: '24px', height: '24px' } }), h("div", { class: "skeleton-box", style: { width: '60%', height: '20px' } }))))));
    }
    renderNumberedIndicators() {
        return (h("div", { class: "accordion-indicators", role: "tablist", "aria-label": "Accordion navigation" }, this.parsedItems.map((item, index) => {
            const isOpen = this.openItems.includes(item.id);
            const isDisabled = this.disabled || item.disabled || false;
            const indicatorClasses = [
                'accordion-indicator',
                isOpen && 'accordion-indicator-active',
                isDisabled && 'accordion-indicator-disabled'
            ].filter(Boolean).join(' ');
            return (h("ui-button", { key: item.id, variant: isOpen ? 'primary' : 'outline', size: "xs", class: indicatorClasses, label: `${index + 1}`, onClick: () => this.toggleItem(item.id), disabled: isDisabled, ariaLabel: `Open ${item.title}`, "aria-expanded": isOpen ? 'true' : 'false', "aria-controls": `accordion-content-${item.id}` }));
        })));
    }
    render() {
        const containerClasses = [
            'accordion-container',
            `accordion-${this.size}`,
            `accordion-${this.variant}`,
            `accordion-theme-${this.theme}`,
            this.columns > 1 ? `accordion-columns-${this.columns}` : '',
            this.iconPosition === 'start' ? 'accordion-icon-start' : '',
            this.rtl ? 'accordion-rtl' : '',
            this.dense ? 'accordion-dense' : '',
            this.printExpandAll ? 'accordion-print-expand-all' : ''
        ].filter(Boolean).join(' ');
        const getFinalItems = (items) => {
            let result = [...items];
            if (this.enableRanking) {
                result.sort((a, b) => (this.itemHeat.get(b.id) || 0) - (this.itemHeat.get(a.id) || 0));
            }
            return this.enableSearch && this.searchQuery ? this.filteredItems : result;
        };
        const itemsToRender = getFinalItems(this.parsedItems);
        const containerStyles = {
            '--accordion-bg': this.backgroundColor || 'white',
            backgroundColor: 'var(--accordion-bg, #ffffff)'
        };
        return (h(Host, { class: {
                'accordion-host': true,
                'is-open': this.openItems.length > 0,
                'is-portal-active': !!this.activePortalId
            } }, h("div", { class: containerClasses, role: "tablist", "aria-multiselectable": this.multiple, dir: this.rtl ? 'rtl' : 'ltr', style: {
                ...containerStyles,
                '--selected-header-color': this.selectedHeaderColor,
                '--selected-header-bg': this.selectedHeaderColor + '1a', // Add 10% opacity, works if hex
                ...(this.variant === 'headline' ? (() => {
                    const lvl = this.headerLevel || 3;
                    const titleSizes = ['48px', '36px', '28px', '22px', '18px', '15px'];
                    const subtitleSizes = ['24px', '20px', '17px', '14px', '13px', '12px'];
                    const paddings = ['48px 0', '40px 0', '32px 0', '24px 0', '18px 0', '14px 0'];
                    const gaps = ['16px', '14px', '12px', '10px', '8px', '6px'];
                    return {
                        '--hl-title-size': titleSizes[lvl - 1],
                        '--hl-subtitle-size': subtitleSizes[lvl - 1],
                        '--hl-padding': paddings[lvl - 1],
                        '--hl-gap': gaps[lvl - 1],
                    };
                })() : {})
            } }, this.enableSearch && (h("div", { class: "accordion-search" }, h("ui-input", { type: "text", class: "accordion-search-input", placeholder: this.searchPlaceholder, value: this.searchQuery, onInputChange: (e) => {
                this.searchQuery = e.detail;
                this.performSearch();
            }, ariaLabel: "Search accordion items", showClear: false }), this.searchQuery && (h("ui-button", { variant: "ghost", iconOnly: true, size: "xs", class: "accordion-search-clear", icon: "x", iconLibrary: this.iconLibrary, iconSize: "14px", ariaLabel: "Clear search", onClick: () => this.clearSearch() })), h("div", { class: "sr-only", "aria-live": "polite", role: "status" }, this.searchQuery ? `Showing ${this.filteredItems.length} results for ${this.searchQuery}` : ''))), this.enableExpandCollapseAll && this.multiple && (h("div", { class: "accordion-controls" }, h("ui-button", { variant: "ghost", size: "sm", class: "accordion-control-button", icon: "chevron-down", iconLibrary: this.iconLibrary, iconSize: "14px", iconPosition: "left", label: "Expand All", onClick: () => this.openAll(), disabled: this.disabled, ariaLabel: "Expand all items" }), h("ui-button", { variant: "ghost", size: "sm", class: "accordion-control-button", icon: "chevron-up", iconLibrary: this.iconLibrary, iconSize: "14px", iconPosition: "left", label: "Collapse All", onClick: () => this.closeAll(), disabled: this.disabled, ariaLabel: "Collapse all items" }))), this.showNumbers && !this.loading && this.renderNumberedIndicators(), this.renderSearchHeatmap(), this.renderLockOverlay(), this.renderPortalOverlay(), this.loading ? (this.renderSkeleton()) : (itemsToRender.length > 0 ? (itemsToRender.map(item => this.renderItem(item, 0, []))) : (h("div", { class: "accordion-no-results" }, this.loading ? (h("ui-loader", { size: "xs", color: "currentColor" })) : (this.enableSearch && this.searchQuery ? (h("p", null, "No items match your search \"", this.searchQuery, "\"")) : (h("p", null, "No items to display")))))))));
    }
    static get watchers() { return {
        "expandedItems": [{
                "onExpandedItemsChange": 0
            }],
        "items": [{
                "onItemsChange": 0
            }],
        "defaultOpen": [{
                "onDefaultOpenChange": 0
            }],
        "multiple": [{
                "onMultipleChange": 0
            }],
        "animationDuration": [{
                "onAnimationDurationChange": 0
            }],
        "showNumbers": [{
                "onShowNumbersChange": 0
            }]
    }; }
};
Accordion.style = accordionCss();

const avatarCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:inline-flex;vertical-align:middle}:host *{box-sizing:border-box}:host{transition:all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}.avatar-container,.avatar-link{position:relative;display:inline-block;text-decoration:none}.avatar{position:relative;display:inline-flex;align-items:center;justify-content:center;background-color:var(--bg-secondary, #ccc);color:var(--text-standard, #ffffff);font-weight:600;overflow:visible;white-space:nowrap;text-align:center;vertical-align:middle;user-select:none;box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);transition:all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}.avatar.avatar-hovered{transform:translateY(-4px) scale(1.05);box-shadow:0 10px 20px rgba(0, 0, 0, 0.15)}.avatar.avatar-hovered.avatar-3d{transform:perspective(500px) rotateX(10deg) rotateY(10deg) translateY(-4px)}.avatar-circle{border-radius:50%}.avatar-square{border-radius:8px}.avatar-hexagon{clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);border-radius:0}.avatar-squircle{border-radius:35%}.avatar-circle img,.avatar-circle .avatar-string,.avatar-circle .avatar-icon,.avatar-hexagon img,.avatar-hexagon .avatar-string,.avatar-hexagon .avatar-icon,.avatar-squircle img,.avatar-squircle .avatar-string,.avatar-squircle .avatar-icon{border-radius:inherit;overflow:hidden}.avatar img{display:block;width:100%;height:100%;object-fit:cover;border-radius:inherit;transition:opacity 0.3s ease}.avatar-xs{width:24px;height:24px;line-height:24px;font-size:10px}.avatar-sm,.avatar-s{width:32px;height:32px;line-height:32px;font-size:12px}.avatar-default,.avatar-m{width:40px;height:40px;line-height:40px;font-size:16px}.avatar-lg,.avatar-l{width:48px;height:48px;line-height:48px;font-size:20px}.avatar-xl{width:64px;height:64px;line-height:64px;font-size:28px}.avatar-string{position:absolute;left:50%;transform:translateX(-50%);display:inline-block;white-space:nowrap}.avatar-icon{font-size:1.2em;display:flex;align-items:center;justify-content:center}.avatar-status{position:absolute;width:10px;height:10px;border-radius:50%;border:2px solid var(--border-subtle, #fff);z-index:5;box-shadow:0 1px 3px rgba(0, 0, 0, 0.1)}.avatar-status.avatar-status-top-right{top:0;right:0}.avatar-status.avatar-status-top-left{top:0;left:0}.avatar-status.avatar-status-bottom-right{bottom:0;right:0}.avatar-status.avatar-status-bottom-left{bottom:0;left:0}.avatar-status.avatar-status-online{background-color:var(--color-success, #22c55e)}.avatar-status.avatar-status-offline{background-color:transparent;border-color:var(--color-primary, #94a3b8)}.avatar-status.avatar-status-offline::after{content:"";position:absolute;inset:2px;border-radius:50%;background:var(--bg-primary, #ffffff);z-index:-1}.avatar-status.avatar-status-away{background-color:var(--color-warning, #f59e0b);clip-path:polygon(100% 0%, 100% 100%, 0% 100%, 0% 0%, 50% 50%);border:none}.avatar-status.avatar-status-busy,.avatar-status.avatar-status-dnd{background-color:var(--color-danger, #ef4444)}.avatar-status.avatar-status-busy::before,.avatar-status.avatar-status-dnd::before{content:"";position:absolute;top:50%;left:50%;width:6px;height:1.5px;background:var(--bg-primary, #ffffff);transform:translate(-50%, -50%)}.avatar-badge{position:absolute;min-width:18px;height:18px;line-height:18px;text-align:center;font-size:10px;font-weight:bold;color:var(--text-standard, #ffffff);border:2px solid var(--border-subtle, #fff);z-index:6;box-shadow:0 2px 4px rgba(0, 0, 0, 0.2)}.avatar-badge.avatar-badge-circle{border-radius:50%}.avatar-badge.avatar-badge-pill{padding:0 5px;border-radius:10px}.avatar-badge.avatar-badge-top-right{top:-4px;right:-4px}.avatar-badge.avatar-badge-top-left{top:-4px;left:-4px}.avatar-badge.avatar-badge-bottom-right{bottom:-4px;right:-4px}.avatar-badge.avatar-badge-bottom-left{bottom:-4px;left:-4px}.avatar-tooltip{position:absolute;bottom:110%;left:50%;transform:translateX(-50%);background:rgba(0, 0, 0, 0.85);color:var(--text-standard, #ffffff);padding:4px 8px;border-radius:4px;font-size:11px;white-space:nowrap;z-index:100;pointer-events:none;box-shadow:0 4px 10px rgba(0, 0, 0, 0.2)}.avatar-tooltip::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:4px solid transparent;border-top-color:rgba(0, 0, 0, 0.85)}.avatar-skeleton{background:var(--bg-primary, #eee);position:absolute;top:0;left:0;right:0;bottom:0;border-radius:inherit}.avatar-skeleton .skeleton-shimmer{width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);animation:shimmer 1.5s infinite}.avatar-loading{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(255, 255, 255, 0.8);display:flex;align-items:center;justify-content:center;z-index:4;border-radius:inherit}.avatar-edit-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);opacity:0;transition:0.2s;display:flex;align-items:center;justify-content:center;z-index:3;border-radius:inherit;color:var(--text-standard, #ffffff)}.avatar:hover .avatar-edit-overlay{opacity:1}.avatar-glass{backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);background:rgba(255, 255, 255, 0.1) !important;border:1px solid rgba(255, 255, 255, 0.2) !important}.avatar-reflection .reflection-overlay{position:absolute;top:0;left:0;width:100%;height:100%;background:linear-gradient(135deg, rgba(255, 255, 255, 0.25) 0%, transparent 50%);pointer-events:none}.avatar-verified{position:absolute;bottom:0;right:0;width:16px;height:16px;background:var(--color-primary, #1890ff);color:var(--text-standard, #ffffff);border-radius:50%;border:2px solid var(--border-subtle, #fff);display:flex;align-items:center;justify-content:center;font-size:10px;z-index:7}.avatar-story{padding:3px}.avatar-story::after{content:"";position:absolute;top:-3px;left:-3px;right:-3px;bottom:-3px;border-radius:inherit;border:2px solid transparent;background:linear-gradient(45deg, var(--color-danger, #f09433), var(--color-danger, #e6683c), var(--color-danger, #dc2743), var(--color-danger, #cc2366), var(--color-danger, #bc1888)) border-box;-webkit-mask:linear-gradient(var(--bg-primary, #fff) 0 0) padding-box, linear-gradient(var(--bg-primary, #fff) 0 0);mask:linear-gradient(var(--bg-primary, #fff) 0 0) padding-box, linear-gradient(var(--bg-primary, #fff) 0 0);-webkit-mask-composite:destination-out;mask-composite:exclude;z-index:1}.avatar-story.avatar-story-seen::after{background:var(--bg-secondary, #ccc) border-box}.avatar-story[style*="--story-segments"]::after{background:conic-gradient(from 0deg, var(--color-danger, #f09433) 0deg, var(--color-danger, #f09433) calc(360deg / var(--story-segments) - 2deg), transparent calc(360deg / var(--story-segments) - 2deg), transparent calc(360deg / var(--story-segments)));background-repeat:repeat;-webkit-mask:linear-gradient(var(--bg-primary, #fff) 0 0) padding-box, linear-gradient(var(--bg-primary, #fff) 0 0);mask:linear-gradient(var(--bg-primary, #fff) 0 0) padding-box, linear-gradient(var(--bg-primary, #fff) 0 0);-webkit-mask-composite:destination-out;mask-composite:exclude}@keyframes shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}@keyframes avatarRing{0%{transform:scale(1);opacity:1}100%{transform:scale(1.3);opacity:0}}.avatar-animation-pulse{animation:pulse 2s infinite}.avatar-animation-ring::after{content:"";position:absolute;top:-4px;left:-4px;right:-4px;bottom:-4px;border:2px solid var(--ring-color, var(--color-primary, #10b981));border-radius:inherit;animation:avatarRing 1.5s infinite}.avatar-animation-glow{box-shadow:0 0 15px var(--ring-color, var(--color-primary, #10b981));animation:avatarGlow 2s ease-in-out infinite alternate}@keyframes avatarGlow{from{box-shadow:0 0 8px var(--ring-color, var(--color-primary, #10b981))}to{box-shadow:0 0 20px var(--ring-color, var(--color-primary, #10b981))}}@keyframes pulse{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}.avatar-clickable:hover{transform:translateY(-2px);box-shadow:0 6px 15px rgba(0, 0, 0, 0.15)}.avatar-group{display:inline-flex;position:relative;align-items:center}.avatar-group.layout-stack .group-avatar{margin-right:var(--avatar-spacing, -16px);transition:all 0.5s cubic-bezier(0.25, 1, 0.5, 1);transform-origin:center bottom}.avatar-group.layout-stack .group-avatar:hover{z-index:100 !important;transform:scale(1.25) translateY(-10px);margin-right:8px !important;box-shadow:0 10px 25px rgba(0, 0, 0, 0.2);border-color:var(--border-subtle, #fff) !important}.avatar-group.layout-stack .group-avatar:hover~.group-avatar,.avatar-group.layout-stack .group-avatar:hover~.excess-avatar-container{transform:translateX(24px)}.avatar-group.layout-stack.avatar-group-animated:hover{padding-right:40px}.avatar-group.layout-grid{display:grid;grid-template-columns:repeat(auto-fill, minmax(calc(var(--avatar-size) + 8px), 1fr));gap:8px;width:100%}.avatar-list{display:flex;flex-wrap:wrap;align-items:center}.layout-stack .avatar-list{flex-wrap:nowrap}.avatar-extra{display:inline-flex;align-items:center;justify-content:center;background-color:var(--color-danger, #f56a00);color:var(--text-standard, #ffffff);font-weight:600;border:var(--avatar-border-width, 2px) solid var(--avatar-border-color, #fff);cursor:pointer;z-index:1;transition:all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1);box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);font-size:0.8em}.avatar-extra:hover{transform:scale(1.1) translateY(-4px);z-index:100;box-shadow:0 8px 20px rgba(0, 0, 0, 0.15)}.avatar-extra.shape-circle{border-radius:50%}.avatar-extra.shape-square{border-radius:8px}.avatar-extra.shape-hexagon{clip-path:polygon(50% 0%, 100% 25%, 100% 75%, 50% 100%, 0% 75%, 0% 25%);border-radius:0}.avatar-extra.shape-squircle{border-radius:35%}.excess-avatar-container{position:relative;display:inline-block}.avatar-popover{position:absolute;top:100%;right:0;background:var(--bg-primary, #ffffff);border-radius:8px;box-shadow:0 8px 24px rgba(0, 0, 0, 0.2);padding:12px;z-index:1000;min-width:180px;margin-top:8px;animation:popoverFadeIn 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}.avatar-popover::after{content:"";position:absolute;top:-12px;right:12px;border:6px solid transparent;border-bottom-color:var(--bg-primary, #ffffff)}.avatar-popover .popover-content{display:flex;flex-direction:column;gap:4px;max-height:300px;overflow-y:auto}.avatar-popover .popover-item{display:flex;align-items:center;gap:12px;padding:8px;border-radius:6px;transition:background 0.2s;cursor:pointer}.avatar-popover .popover-item:hover{background:var(--bg-secondary, #f3f4f6)}.avatar-popover .popover-item ui-avatar{transition:none !important;transform:none !important;box-shadow:none !important}.avatar-popover .popover-text{font-size:14px;color:var(--text-secondary, #374151);font-weight:500}.avatar-roster-backdrop{position:fixed;top:0;left:0;width:100vw;height:100vh;background:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:2000;backdrop-filter:blur(4px)}.avatar-roster-content{background:var(--bg-primary, #ffffff);width:90%;max-width:500px;max-height:80vh;border-radius:16px;box-shadow:0 20px 50px rgba(0, 0, 0, 0.3);display:flex;flex-direction:column;overflow:hidden;animation:modalIn 0.4s cubic-bezier(0.34, 1.56, 0.64, 1)}.roster-header{padding:20px;border-bottom:1px solid var(--border-subtle, #eee);display:flex;align-items:center;justify-content:space-between}.roster-header h3{margin:0;color:var(--text-primary, #1f2937)}.roster-header .close-btn{background:none;border:none;font-size:28px;cursor:pointer;color:var(--color-primary, #9ca3af)}.roster-header .close-btn:hover{color:var(--bg-primary, #1f2937)}.roster-list{padding:12px;overflow-y:auto;display:flex;flex-direction:column;gap:8px}.roster-item{display:flex;align-items:center;gap:16px;padding:12px;border-radius:12px;transition:background 0.2s}.roster-item:hover{background:var(--bg-primary, #f9fafb)}.roster-info{display:flex;flex-direction:column}.roster-name{font-weight:600;color:var(--text-primary, #111827)}.roster-status{font-size:11px;text-transform:capitalize;border-radius:4px;padding:1px 6px;width:fit-content}.status-online{color:var(--color-success-hover, #059669);background:var(--bg-primary, #ecfdf5)}@keyframes popoverFadeIn{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes modalIn{from{opacity:0;transform:scale(0.9) translateY(20px)}to{opacity:1;transform:scale(1) translateY(0)}}`;

const Avatar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.avatarError = createEvent(this, "avatarError");
        this.avatarClick = createEvent(this, "avatarClick");
        this.avatarUpload = createEvent(this, "avatarUpload");
        this.avatarLoad = createEvent(this, "avatarLoad");
        this.avatarMouseEnter = createEvent(this, "avatarMouseEnter");
        this.avatarMouseLeave = createEvent(this, "avatarMouseLeave");
    }
    get el() { return getElement(this); }
    /** Alternative text for the image */
    alt = '';
    /** Letter type unit distance between left and right sides */
    gap = 4;
    /** Custom icon for an icon avatar */
    icon = '';
    /** Library for the icon (e.g., 'se', 'fontawesome', etc.) */
    iconLibrary = 'default';
    /** The shape of avatar: 'circle', 'square', 'hexagon', 'squircle' */
    shape = 'circle';
    /** The size of the avatar */
    size = 'm';
    /** The address of the image for an image avatar */
    src = '';
    /** A list of sources to use for different screen resolutions */
    srcSet = '';
    /** Whether the picture is allowed to be dragged */
    imgDraggable = true;
    /** CORS settings attributes */
    crossOrigin = '';
    /** Background color for text/icon avatar */
    bgColor = '#52c41a';
    /** Text color for text/icon avatar */
    color = '#ffffff';
    /** Border for avatar */
    border = '';
    /** Tooltip text to display on hover */
    tooltipText = '';
    /** Responsive size based on screen width */
    responsiveSize = undefined;
    /** User status indicator (online, offline, away, busy, dnd) */
    status = '';
    /** Position of the status indicator */
    statusPosition = 'bottom-right';
    /** Show status indicator */
    showStatus = false;
    /** Badge count/text overlay */
    badge = '';
    /** Badge position */
    badgePosition = 'top-right';
    /** Badge color */
    badgeColor = '#ff4d4f';
    /** Enable edit/upload functionality */
    editable = false;
    /** Accept file types for upload */
    acceptTypes = 'image/*';
    /** Fallback icon when no image */
    fallbackIcon = 'fas fa-user';
    /** Loading state */
    loading = false;
    /** Enable lazy loading for images */
    lazy = false;
    /** Image fit mode */
    fit = 'cover';
    /** Show verified badge */
    verified = false;
    /** Enable glassmorphism effect */
    glass = false;
    /** Show skeleton loading shimmer */
    skeleton = false;
    /** Show premium reflection overlay */
    reflection = false;
    /** Number of segments for the story ring */
    segments = 0;
    /** Style variant of the avatar */
    variant = 'default';
    /** Enable click handler */
    clickable = false;
    /** Auto-generate color from text */
    autoColor = false;
    /** Use gradient background */
    gradient = false;
    /** Gradient colors (array of 2 colors or comma-separated string) */
    gradientColors = '';
    /** Animation type */
    animation = 'none';
    /** Ring color for animations */
    ringColor = '#3bf673';
    /** Show story ring (Instagram style) */
    story = false;
    /** Mark story as seen */
    storySeen = false;
    /** Active speaker visualizer */
    activeSpeaker = false;
    /** Animate status indicator */
    statusPulse = false;
    /** Enable 3D hover effect */
    threeD = false;
    /** Optional URL to link the avatar to */
    href = '';
    /** Content to display (letter or text) */
    content;
    /** Optional name to auto-calculate initials from */
    name;
    /** Maximum number of characters to show for initials */
    maxInitials = 2;
    /** Whether this avatar acts as a group container */
    group = false;
    /** Array of avatar props for dynamic generation (if group is true) */
    avatars = [];
    /** Maximum number of avatars to display before grouping (if group is true) */
    maxVisible = 5;
    /** Maximum config: number or object { count, style, popover } (if group is true) */
    max = undefined;
    /** Layout mode for groups: 'stack' or 'grid' */
    layout = 'stack';
    /** Spacing between avatars (in pixels) for grid mode */
    spacing = 4;
    /** Overlapping amount (negative value for overlap) */
    overlap = undefined;
    /** Border color for avatars in the group */
    groupBorderColor = 'white';
    /** Border width for avatars in the group */
    groupBorderWidth = 2;
    /** Enable popover to show all avatars when hovering over excess count */
    enablePopover = true;
    /** Enable animated shifting transitions on hover */
    animated = true;
    hasError = false;
    scale = 1;
    currentSize = 40;
    showTooltip = false;
    isHovered = false;
    uploadedImage = '';
    slottedAvatars = [];
    showPopoverGroup = false;
    isRosterOpen = false;
    isScaling = false;
    textRef;
    avatarRef;
    /** Handler when img load error */
    avatarError;
    /** Handler when avatar is clicked */
    avatarClick;
    /** Handler when file is uploaded */
    avatarUpload;
    /** Handler when image loads successfully */
    avatarLoad;
    /** Handler when mouse enters */
    avatarMouseEnter;
    /** Handler when mouse leaves */
    avatarMouseLeave;
    handleSrcChange() {
        this.hasError = false;
        this.uploadedImage = '';
    }
    handleLoadingChange(newValue) {
        if (!newValue && this.lazy && this.src) {
            this.loadImage();
        }
    }
    componentWillLoad() {
        if (this.group) {
            this.updateSlottedAvatars();
        }
    }
    componentDidLoad() {
        if (this.group) {
            this.updateSlottedAvatars();
        }
        requestAnimationFrame(() => this.setScale());
        if (this.responsiveSize) {
            this.updateResponsiveSize();
            window.addEventListener('resize', this.updateResponsiveSize);
        }
    }
    componentDidUpdate() {
        // Only trigger scaling if we have the refs and we're not already stable
        if (this.textRef && this.avatarRef) {
            requestAnimationFrame(() => this.setScale());
        }
    }
    updateSlottedAvatars() {
        const slotElement = this.el.shadowRoot?.querySelector('slot');
        const assignedElements = slotElement
            ? slotElement.assignedElements()
            : Array.from(this.el.children);
        this.slottedAvatars = assignedElements.filter(el => el.tagName.toLowerCase() === 'ui-avatar');
    }
    disconnectedCallback() {
        if (this.responsiveSize) {
            window.removeEventListener('resize', this.updateResponsiveSize);
        }
    }
    // componentDidUpdate() {
    //   this.setScale();
    // }
    updateResponsiveSize = () => {
        if (!this.responsiveSize)
            return;
        const width = window.innerWidth;
        let newSize = this.size;
        if (width < 576 && this.responsiveSize.xs !== undefined) {
            newSize = this.responsiveSize.xs;
        }
        else if (width >= 576 && width < 768 && this.responsiveSize.sm !== undefined) {
            newSize = this.responsiveSize.sm;
        }
        else if (width >= 768 && width < 992 && this.responsiveSize.md !== undefined) {
            newSize = this.responsiveSize.md;
        }
        else if (width >= 992 && width < 1200 && this.responsiveSize.lg !== undefined) {
            newSize = this.responsiveSize.lg;
        }
        else if (width >= 1200 && this.responsiveSize.xl !== undefined) {
            newSize = this.responsiveSize.xl;
        }
        this.currentSize = newSize;
    };
    setScale = () => {
        if (this.isScaling || !this.textRef || !this.avatarRef)
            return;
        const textWidth = this.textRef.offsetWidth;
        const avatarWidth = this.avatarRef.offsetWidth;
        if (textWidth === 0 || avatarWidth === 0)
            return;
        const scale = avatarWidth - this.gap * 2 < textWidth
            ? (avatarWidth - this.gap * 2) / textWidth
            : 1;
        if (Math.abs(this.scale - scale) > 0.01) {
            this.isScaling = true;
            this.scale = scale;
            // Reset scaling flag on next tick to allow future updates if dimensions change
            setTimeout(() => { this.isScaling = false; }, 100);
        }
    };
    handleImgError = (event) => {
        if (!this.el.isConnected)
            return;
        this.hasError = true;
        this.avatarError.emit(event);
    };
    handleImgLoad = (event) => {
        if (!this.el.isConnected)
            return;
        this.avatarLoad.emit(event);
    };
    handleAvatarClick = (event) => {
        if (this.clickable || this.editable) {
            if (!this.el.isConnected)
                return;
            this.avatarClick.emit(event);
            if (this.editable) {
                const input = this.el.shadowRoot?.querySelector('input[type="file"]');
                if (input)
                    input.click();
            }
        }
    };
    handleFileChange = (event) => {
        const input = event.target;
        const file = input.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (!this.el.isConnected)
                    return;
                const dataUrl = e.target?.result;
                this.uploadedImage = dataUrl;
                this.hasError = false;
                this.avatarUpload.emit({ file, dataUrl });
            };
            reader.readAsDataURL(file);
        }
    };
    handleMouseEnterAvatar = (event) => {
        if (!this.el.isConnected)
            return;
        this.isHovered = true;
        this.avatarMouseEnter.emit(event);
        if (this.tooltipText || this.alt) {
            this.showTooltip = true;
        }
    };
    handleMouseLeaveAvatar = (event) => {
        if (!this.el.isConnected)
            return;
        this.isHovered = false;
        this.avatarMouseLeave.emit(event);
        this.showTooltip = false;
    };
    getInitials(text) {
        if (!text)
            return '';
        const parts = text.trim().split(' ').filter(p => !!p);
        if (parts.length === 0)
            return '';
        if (parts.length === 1) {
            return parts[0].substring(0, this.maxInitials).toUpperCase();
        }
        return (parts[0].charAt(0) + parts[parts.length - 1].charAt(0)).toUpperCase().substring(0, this.maxInitials);
    }
    generateColorFromText(text) {
        let hash = 0;
        for (let i = 0; i < text.length; i++) {
            hash = text.charCodeAt(i) + ((hash << 5) - hash);
        }
        const colors = ['#f56a00', '#7265e6', '#ffbf00', '#00a2ae', '#52c41a', '#1890ff', '#eb2f96', '#fa8c16', '#13c2c2', '#722ed1', '#fa541c', '#2f54eb'];
        return colors[Math.abs(hash) % colors.length];
    }
    getGradientColors() {
        if (this.gradientColors) {
            try {
                const parsed = JSON.parse(this.gradientColors);
                if (Array.isArray(parsed) && parsed.length >= 2)
                    return parsed;
            }
            catch {
                const split = this.gradientColors.split(',').map(c => c.trim());
                if (split.length >= 2)
                    return split;
            }
        }
        return ['#667eea', '#764ba2'];
    }
    loadImage() {
        if (!this.src || !this.lazy)
            return;
        const img = new Image();
        img.src = this.src;
        img.onload = (e) => this.handleImgLoad(e);
        img.onerror = (e) => this.handleImgError(e);
    }
    getSizeInPixels() {
        const numericSize = parseFloat(this.currentSize);
        if (!isNaN(numericSize))
            return numericSize;
        switch (this.currentSize) {
            case 'xs': return 24;
            case 's': return 32;
            case 'sm': return 32;
            case 'default': return 20;
            case 'm': return 40;
            case 'md': return 40;
            case 'l': return 48;
            case 'lg': return 48;
            case 'xl': return 64;
            default: return 40;
        }
    }
    renderImage() {
        const imageSrc = this.uploadedImage || this.src;
        if (this.hasError || !imageSrc)
            return null;
        const draggableValue = typeof this.imgDraggable === 'boolean' ? this.imgDraggable : this.imgDraggable === 'true';
        const size = this.getSizeInPixels();
        return (h("img", { src: imageSrc, srcset: this.srcSet || undefined, alt: this.alt || this.name || "Avatar", width: size, height: size, draggable: draggableValue, crossorigin: this.crossOrigin || undefined, loading: this.lazy ? 'lazy' : undefined, onError: this.handleImgError, onLoad: this.handleImgLoad, style: { objectFit: this.fit } }));
    }
    renderIcon() {
        const isFallback = !this.icon && !!this.fallbackIcon;
        const iconClass = this.icon || this.fallbackIcon;
        if (iconClass) {
            const library = isFallback ? 'fontawesome' : this.iconLibrary;
            return h("ui-icon", { name: iconClass, library: library, size: "1.2em", class: "avatar-icon" });
        }
        return null;
    }
    renderText() {
        const textContent = this.content || this.getInitials(this.name || this.el.textContent?.trim() || '');
        if (!textContent)
            return null;
        const style = this.scale !== 1 ? {
            transform: `scale(${this.scale}) translateX(-50%)`
        } : {
            transform: 'translateX(-50%)'
        };
        return (h("span", { ref: el => this.textRef = el, class: "avatar-string", style: style }, textContent));
    }
    getAvatarSizeAlias() {
        let sizeToCheck = this.size;
        if (this.responsiveSize && this.currentSize !== this.size)
            sizeToCheck = this.currentSize;
        const numericSize = parseFloat(sizeToCheck);
        if (!isNaN(numericSize))
            return `${numericSize}px`;
        switch (sizeToCheck) {
            case 'lg': return 'l';
            case 'md': return 'm';
            case 'sm': return 's';
            default: return sizeToCheck;
        }
    }
    getTooltipText() {
        if (this.tooltipText)
            return this.tooltipText;
        if (this.alt)
            return this.alt;
        const textContent = this.name || this.el.textContent?.trim();
        return textContent || '';
    }
    renderStatusIndicator() {
        if (!this.showStatus || !this.status)
            return null;
        const statusClass = {
            'avatar-status': true,
            [`avatar-status-${this.status}`]: true,
            [`avatar-status-${this.statusPosition}`]: true,
            'avatar-status-pulse': this.statusPulse,
        };
        return h("span", { class: statusClass });
    }
    renderBadge() {
        if (!this.badge)
            return null;
        const badgeString = this.badge.toString();
        const isCircle = badgeString.length === 1;
        const badgeClass = {
            'avatar-badge': true,
            [`avatar-badge-${this.badgePosition}`]: true,
            'avatar-badge-circle': isCircle,
            'avatar-badge-pill': !isCircle,
        };
        return (h("span", { class: badgeClass, style: { backgroundColor: this.badgeColor } }, this.badge));
    }
    renderVerified() {
        if (!this.verified)
            return null;
        return (h("span", { class: "avatar-verified" }, h("ui-icon", { name: "check-circle", library: "fontawesome", size: "14px" })));
    }
    renderLoading() {
        if (!this.loading && !this.skeleton)
            return null;
        if (this.skeleton)
            return h("div", { class: "avatar-skeleton" }, h("div", { class: "skeleton-shimmer" }));
        return h("div", { class: "avatar-loading" }, h("ui-icon", { name: "loader-2", library: "lucide", spin: true, size: "18px" }));
    }
    renderEditOverlay() {
        if (!this.editable)
            return null;
        return (h("div", { class: "avatar-edit-overlay" }, h("ui-icon", { name: "camera", library: "fontawesome", size: "16px" }), h("ui-input", { type: "file", accept: this.acceptTypes, onInputChange: this.handleFileChange, style: { display: 'none' } })));
    }
    // --- Group Rendering Methods ---
    getMaxCount() {
        const maxVal = this.max || this.maxVisible;
        if (typeof maxVal === 'number')
            return maxVal;
        if (maxVal && typeof maxVal === 'object' && 'count' in maxVal)
            return maxVal.count || Infinity;
        return Infinity;
    }
    getMaxStyle() {
        if (this.max && typeof this.max === 'object' && 'style' in this.max)
            return this.max.style;
        return {};
    }
    calculateOverlap() {
        if (this.layout === 'grid')
            return this.spacing;
        if (this.overlap !== null)
            return -Math.abs(this.overlap);
        const sizeMap = { xs: 24, s: 32, sm: 32, default: 20, m: 40, md: 40, l: 40, lg: 48, xl: 64 };
        let avatarSize = 40;
        const numericSize = parseFloat(this.size);
        if (!isNaN(numericSize))
            avatarSize = numericSize;
        else if (typeof this.size === 'string' && sizeMap[this.size])
            avatarSize = sizeMap[this.size];
        return -(avatarSize * 0.4);
    }
    getAllAvatarData() {
        if (this.avatars && this.avatars.length > 0)
            return this.avatars;
        return this.slottedAvatars.map(el => ({
            src: el.getAttribute('src'),
            name: el.getAttribute('name'),
            content: el.getAttribute('content') || el.textContent?.trim(),
            tooltipText: el.getAttribute('tooltipText') || el.getAttribute('tooltip-text') || el.getAttribute('name') || el.textContent?.trim(),
            icon: el.getAttribute('icon'),
            bgColor: el.getAttribute('bgColor') || el.getAttribute('bg-color'),
            badge: el.getAttribute('badge'),
            status: el.getAttribute('status')
        }));
    }
    renderExcessCount(total, max) {
        const excess = total - max;
        if (excess <= 0)
            return null;
        const maxStyle = this.getMaxStyle();
        return (h("div", { class: "excess-avatar-container", onMouseEnter: () => this.showPopoverGroup = this.enablePopover, onMouseLeave: () => this.showPopoverGroup = false, onClick: this.toggleRoster }, h("div", { class: { 'avatar-extra': true, [`avatar-${this.getAvatarSizeAlias()}`]: true, [`shape-${this.shape}`]: true }, style: { ...maxStyle, backgroundColor: maxStyle.backgroundColor || '#f56a00' } }, "+", excess), this.showPopoverGroup && this.enablePopover && this.layout === 'stack' && this.renderPopoverGroup(max)));
    }
    renderPopoverGroup(max) {
        const all = this.getAllAvatarData();
        const hidden = all.slice(max);
        return (h("div", { class: "avatar-popover" }, h("div", { class: "popover-content" }, hidden.map((avatar, idx) => (h("div", { class: "popover-item", key: idx }, h("ui-avatar", { size: "xs", shape: this.shape, ...avatar }), h("span", { class: "popover-text" }, avatar.name || avatar.content || 'User')))))));
    }
    toggleRoster = (ev) => {
        ev.stopPropagation();
        this.isRosterOpen = !this.isRosterOpen;
    };
    closeRoster = () => {
        this.isRosterOpen = false;
    };
    renderRoster(all) {
        if (!this.isRosterOpen)
            return null;
        return (h("div", { class: "avatar-roster-backdrop", onClick: this.closeRoster }, h("div", { class: "avatar-roster-content", onClick: e => e.stopPropagation() }, h("div", { class: "roster-header" }, h("h3", null, "Participants (", all.length, ")"), h("ui-button", { variant: "ghost", onClick: this.closeRoster, ariaLabel: "Close", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })), h("div", { class: "roster-list" }, all.map((avatar, idx) => (h("div", { key: idx, class: "roster-item" }, h("ui-avatar", { ...avatar, size: "s", shape: this.shape }), h("div", { class: "roster-info" }, h("span", { class: "roster-name" }, avatar.name || avatar.content || 'Anonymous'), avatar.status && h("span", { class: `roster-status status-${avatar.status}` }, avatar.status)))))))));
    }
    render() {
        if (this.group) {
            const all = this.getAllAvatarData();
            const maxCount = this.getMaxCount();
            const visible = (this.layout === 'grid') ? all : all.slice(0, maxCount);
            const overlap = this.calculateOverlap();
            const groupClasses = {
                'avatar-group': true,
                [`layout-${this.layout}`]: true,
                'avatar-group-animated': this.animated && this.layout === 'stack',
                'expanded': this.isHovered && this.layout === 'stack'
            };
            const groupStyle = {
                '--avatar-spacing': `${overlap}px`,
                '--avatar-border-color': this.groupBorderColor,
                '--avatar-border-width': `${this.groupBorderWidth}px`,
                '--avatar-size': typeof this.size === 'number' ? `${this.size}px` : this.size.toString(),
            };
            return (h(Host, null, h("div", { class: groupClasses, style: groupStyle, onMouseEnter: () => this.isHovered = true, onMouseLeave: () => this.isHovered = false }, h("div", { class: "avatar-list" }, visible.map((avatar, index) => (h("ui-avatar", { ...avatar, key: index, size: this.size, shape: this.shape, border: `${this.groupBorderWidth}px solid ${this.groupBorderColor}`, class: "group-avatar", style: { zIndex: (this.layout === 'stack' ? (all.length - index) : 1).toString() } }))), this.layout === 'stack' && this.renderExcessCount(all.length, maxCount)), h("div", { style: { display: 'none' } }, h("slot", { onSlotchange: () => this.updateSlottedAvatars() }))), this.renderRoster(all)));
        }
        const hasImage = !!((this.uploadedImage || this.src) && !this.hasError);
        const textContent = this.content || this.name || this.el.textContent?.trim();
        const hasText = !hasImage && !!textContent;
        const hasIcon = !hasImage && !hasText && !!(this.icon || this.fallbackIcon);
        const sizeValue = this.getAvatarSizeAlias();
        const isCustomSize = !isNaN(parseFloat(this.size));
        const avatarClass = {
            'avatar': true,
            [`avatar-${this.shape}`]: true,
            [`avatar-${sizeValue}`]: !isCustomSize,
            'avatar-image': hasImage,
            'avatar-icon': hasIcon,
            'avatar-text': hasText,
            'avatar-clickable': this.clickable || this.editable || !!this.href,
            'avatar-loading': this.loading,
            'avatar-hovered': this.isHovered,
            [`avatar-animation-${this.animation}`]: this.animation !== 'none',
            'avatar-gradient': this.gradient,
            'avatar-glass': this.glass || this.variant === 'glass',
            'avatar-skeleton': this.skeleton,
            'avatar-reflection': this.reflection,
            'avatar-story': this.story,
            'avatar-story-seen': this.storySeen,
            'avatar-active-speaker': this.activeSpeaker,
            'avatar-3d': this.threeD,
        };
        const avatarStyle = {};
        if (isCustomSize || this.responsiveSize) {
            const pxSize = `${this.getSizeInPixels()}px`;
            avatarStyle.width = pxSize;
            avatarStyle.height = pxSize;
            avatarStyle.lineHeight = pxSize;
            if (isCustomSize) {
                const sizeNum = parseFloat(this.size);
                avatarStyle.fontSize = hasIcon ? `${sizeNum * 0.6}px` : `${sizeNum * 0.45}px`;
            }
        }
        if (!hasImage) {
            if (this.gradient) {
                const [c1, c2] = this.getGradientColors();
                avatarStyle.background = `linear-gradient(135deg, ${c1} 0%, ${c2} 100%)`;
            }
            else if (this.autoColor && textContent) {
                avatarStyle.backgroundColor = this.generateColorFromText(textContent);
            }
            else if (this.bgColor) {
                avatarStyle.backgroundColor = this.bgColor;
            }
        }
        if (this.color && !hasImage)
            avatarStyle.color = this.color;
        if (this.border)
            avatarStyle.border = this.border;
        if (this.animation === 'ring' || this.animation === 'glow')
            avatarStyle['--ring-color'] = this.ringColor;
        if (this.segments > 0)
            avatarStyle['--story-segments'] = this.segments;
        const tooltipText = this.getTooltipText();
        const hasTooltip = tooltipText.length > 0;
        const hostClasses = {
            [`avatar-${this.shape}`]: true,
        };
        if (typeof this.size === 'string') {
            hostClasses[`avatar-${sizeValue}`] = true;
        }
        const Tag = this.href ? 'a' : 'div';
        const tagProps = this.href ? { href: this.href, class: 'avatar-link' } : { class: 'avatar-container' };
        return (h(Host, { class: hostClasses }, h(Tag, { ...tagProps }, h("div", { ref: el => this.avatarRef = el, class: avatarClass, style: avatarStyle, onMouseEnter: this.handleMouseEnterAvatar, onMouseLeave: this.handleMouseLeaveAvatar, onClick: this.handleAvatarClick, title: this.clickable || this.editable || this.href ? undefined : tooltipText, role: this.clickable || this.editable || this.href ? 'button' : undefined, tabindex: this.clickable || this.editable || this.href ? 0 : undefined }, this.loading && this.renderLoading(), this.skeleton && this.renderLoading(), !this.loading && !this.skeleton && (hasImage ? this.renderImage() : (hasIcon ? this.renderIcon() : (hasText ? this.renderText() : null))), (this.glass || this.variant === 'glass') && h("div", { class: "glass-overlay" }), this.reflection && h("div", { class: "reflection-overlay" }), this.renderEditOverlay()), this.renderStatusIndicator(), this.renderBadge(), this.renderVerified(), hasTooltip && this.showTooltip && h("div", { class: "avatar-tooltip" }, tooltipText))));
    }
    static get watchers() { return {
        "src": [{
                "handleSrcChange": 0
            }],
        "loading": [{
                "handleLoadingChange": 0
            }]
    }; }
};
Avatar.style = avatarCss();

const badgeCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.badge-wrapper{position:relative;display:inline-block}.badge{position:absolute;display:flex;align-items:center;justify-content:center;width:fit-content;border-radius:9999px;font-weight:600}.badge.badge-single:not(.badge-shape-square){border-radius:50%;padding:0 !important;min-width:var(--badge-height);aspect-ratio:1/1}.badge.badge-pill{white-space:nowrap;border-radius:9999px}.badge{font-family:inherit;line-height:1;z-index:1;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);transition:transform 0.2s ease, opacity 0.2s ease;pointer-events:none;}.badge-sm{--badge-height:16px;min-width:14px;height:16px;padding:0 3px;font-size:10px}.badge-md{--badge-height:20px;min-width:18px;height:20px;padding:0 4px;font-size:11px}.badge-lg{--badge-height:24px;min-width:22px;height:24px;padding:0 5px;font-size:13px}.badge-dot{min-width:8px !important;width:8px;height:8px;padding:0 !important;border-radius:50%}.badge-dot.badge-sm{width:6px;height:6px}.badge-dot.badge-lg{width:10px;height:10px}.badge-top-right{top:0;inset-inline-end:0;transform:translate(40%, -40%)}[dir=rtl] .badge-top-right{transform:translate(-40%, -40%)}.badge-top-left{top:0;inset-inline-start:0;transform:translate(-40%, -40%)}[dir=rtl] .badge-top-left{transform:translate(40%, -40%)}.badge-bottom-right{bottom:0;inset-inline-end:0;transform:translate(40%, 40%)}[dir=rtl] .badge-bottom-right{transform:translate(-40%, 40%)}.badge-bottom-left{bottom:0;inset-inline-start:0;transform:translate(-40%, 40%)}[dir=rtl] .badge-bottom-left{transform:translate(40%, 40%)}.badge-inline{position:static !important;transform:none !important;vertical-align:middle;flex-shrink:0}.badge-pulse::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;box-shadow:0 0 0 0 currentColor;animation:badge-pulse 1.5s infinite ease-in-out;opacity:1}@keyframes badge-pulse{0%{transform:scale(1);box-shadow:0 0 0 0 currentColor;opacity:0.7}100%{transform:scale(2);box-shadow:0 0 0 10px transparent;opacity:0}}.badge-standard.badge-primary{background-color:var(--color-primary, #10b981);color:var(--text-standard, #ffffff)}.badge-standard.badge-secondary{background-color:var(--text-muted, #6b7280);color:var(--text-standard, #ffffff)}.badge-standard.badge-success{background-color:var(--color-success, #10b981);color:var(--text-standard, #ffffff)}.badge-standard.badge-danger{background-color:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff)}.badge-standard.badge-warning{background-color:var(--color-warning, #f59e0b);color:var(--text-standard, #ffffff)}.badge-standard.badge-info{background-color:var(--color-info, #06b6d4);color:var(--text-standard, #ffffff)}.badge-outlined{background-color:var(--bg-primary, var(--text-standard, #ffffff))}.badge-outlined.badge-primary{color:var(--color-primary, #10b981);border:2px solid var(--color-primary, #10b981)}.badge-outlined.badge-secondary{color:var(--text-muted, #6b7280);border:2px solid var(--color-primary, #6b7280)}.badge-outlined.badge-success{color:var(--color-success, #10b981);border:2px solid var(--color-success, #10b981)}.badge-outlined.badge-danger{color:var(--color-danger, #ef4444);border:2px solid var(--color-danger, #ef4444)}.badge-outlined.badge-warning{color:var(--color-warning, #f59e0b);border:2px solid var(--color-warning, #f59e0b)}.badge-outlined.badge-info{color:var(--color-info, #06b6d4);border:2px solid var(--color-info, #06b6d4)}.badge-icon{display:inline-flex;align-items:center;justify-content:center;font-size:0.9em;margin:0 2px}.badge-interactive{pointer-events:auto;cursor:pointer;transition:transform 0.2s ease, box-shadow 0.2s ease}.badge-interactive:hover{transform:scale(1.1);box-shadow:0 4px 8px rgba(0, 0, 0, 0.2)}.badge-interactive:active{transform:scale(0.95)}.badge.badge-closable{pointer-events:auto !important;border-radius:6px !important;padding-left:10px !important;padding-right:10px !important}.badge-close{background:none;border:none;color:inherit;cursor:pointer;padding:0 0 0 4px;margin-left:4px;font-size:0.9em;opacity:0.8;transition:opacity 0.2s ease;line-height:1;pointer-events:auto;position:relative;z-index:2}.badge-close:hover{opacity:1}.badge-bordered{background-color:var(--bg-primary, var(--text-standard, #ffffff));border:2px solid currentColor}.badge-bordered.badge-primary{color:var(--color-primary, #10b981);border-color:var(--color-primary, #10b981)}.badge-bordered.badge-secondary{color:var(--text-muted, #6b7280);border-color:var(--color-primary, #6b7280)}.badge-bordered.badge-success{color:var(--color-success, #10b981);border-color:var(--color-success, #10b981)}.badge-bordered.badge-danger{color:var(--color-danger, #ef4444);border-color:var(--color-danger, #ef4444)}.badge-bordered.badge-warning{color:var(--color-warning, #f59e0b);border-color:var(--color-warning, #f59e0b)}.badge-bordered.badge-info{color:var(--color-info, #06b6d4);border-color:var(--color-info, #06b6d4)}.badge-soft.badge-primary{background-color:var(--bg-primary, #eff6ff);color:var(--color-primary, #10b981)}.badge-soft.badge-secondary{background-color:var(--bg-secondary, #f3f4f6);color:var(--text-muted, #6b7280)}.badge-soft.badge-success{background-color:var(--bg-primary, #d1fae5);color:var(--color-success, #10b981)}.badge-soft.badge-danger{background-color:var(--bg-primary, #fee2e2);color:var(--color-danger, #ef4444)}.badge-soft.badge-warning{background-color:var(--bg-primary, #fef3c7);color:var(--color-warning, #f59e0b)}.badge-soft.badge-info{background-color:var(--bg-primary, #cffafe);color:var(--color-info, #06b6d4)}.badge-gradient-blue-purple{background:linear-gradient(135deg, var(--color-primary, #10b981) 0%, var(--color-primary, #8b5cf6) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-green-teal{background:linear-gradient(135deg, var(--color-success, #10b981) 0%, var(--color-info, #06b6d4) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-orange-red{background:linear-gradient(135deg, var(--color-warning, #f59e0b) 0%, var(--color-danger, #ef4444) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-pink-purple{background:linear-gradient(135deg, var(--color-danger, #ec4899) 0%, var(--color-primary, #8b5cf6) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-blue-green{background:linear-gradient(135deg, var(--color-primary, #10b981) 0%, var(--color-success, #10b981) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-purple-pink{background:linear-gradient(135deg, var(--color-primary, #8b5cf6) 0%, var(--color-danger, #ec4899) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-teal-blue{background:linear-gradient(135deg, var(--color-info, #06b6d4) 0%, var(--color-primary, #10b981) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-yellow-orange{background:linear-gradient(135deg, var(--color-danger, #fbbf24) 0%, var(--color-warning, #f59e0b) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-red-pink{background:linear-gradient(135deg, var(--color-danger, #ef4444) 0%, var(--color-danger, #ec4899) 100%);color:var(--text-standard, #ffffff);border:none}.badge-gradient-indigo-purple{background:linear-gradient(135deg, var(--color-primary, #6366f1) 0%, var(--color-primary, #8b5cf6) 100%);color:var(--text-standard, #ffffff);border:none}.badge-glow{box-shadow:0 0 10px currentColor, 0 0 20px currentColor;animation:badge-glow-pulse 2s ease-in-out infinite}@keyframes badge-glow-pulse{0%,100%{box-shadow:0 0 10px currentColor, 0 0 20px currentColor}50%{box-shadow:0 0 15px currentColor, 0 0 30px currentColor}}.badge-bounce{animation:badge-bounce 1s ease-in-out infinite}@keyframes badge-bounce{0%,100%{transform:translateY(0)}50%{transform:translateY(-5px)}}.badge-shake{animation:badge-shake 0.5s ease-in-out infinite}@keyframes badge-shake{0%,100%{transform:translateX(0)}25%{transform:translateX(-3px)}75%{transform:translateX(3px)}}.badge-pulse{animation:badge-pulse-scale 1.5s ease-in-out infinite}.badge-pulse::after{content:"";position:absolute;top:0;left:0;width:100%;height:100%;border-radius:inherit;box-shadow:0 0 0 0 currentColor;animation:badge-pulse-ring 1.5s infinite ease-in-out;opacity:1}@keyframes badge-pulse-scale{0%,100%{transform:scale(1)}50%{transform:scale(1.05)}}@keyframes badge-pulse-ring{0%{transform:scale(1);box-shadow:0 0 0 0 currentColor;opacity:0.7}100%{transform:scale(2);box-shadow:0 0 0 10px transparent;opacity:0}}.badge:focus-visible{outline:2px solid var(--color-primary, #10b981);outline-offset:2px}@media (prefers-reduced-motion: reduce){.badge-bounce,.badge-shake,.badge-pulse,.badge-glow,.badge-interactive{animation:none}.badge-pulse::after{animation:none}}.badge-shape-circle{border-radius:50%;min-width:auto;width:var(--badge-size, 20px);height:var(--badge-size, 20px);padding:0 !important;display:flex;align-items:center;justify-content:center}.badge-shape-circle.badge-sm{--badge-size:16px;font-size:9px}.badge-shape-circle.badge-md{--badge-size:20px;font-size:11px}.badge-shape-circle.badge-lg{--badge-size:24px;font-size:13px}.badge-shape-square{border-radius:4px;min-width:auto;width:var(--badge-size, 20px);height:var(--badge-size, 20px);padding:0 !important;display:flex;align-items:center;justify-content:center}.badge-shape-square.badge-sm{--badge-size:16px;font-size:9px}.badge-shape-square.badge-md{--badge-size:20px;font-size:11px}.badge-shape-square.badge-lg{--badge-size:24px;font-size:13px}`;

const Badge = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.badgeClick = createEvent(this, "badgeClick");
        this.badgeClose = createEvent(this, "badgeClose");
    }
    /**
     * Content/number to display in badge
     */
    value;
    /**
     * Maximum value to display before showing "+"
     */
    max = 99;
    /**
     * Color variant
     */
    color = 'danger';
    /**
     * Badge size
     */
    size = 'md';
    /**
     * Show as dot instead of number
     */
    dot = false;
    /**
     * Position of the badge
     */
    position = 'top-right';
    /**
     * Variant style
     */
    variant = 'standard';
    /**
     * Whether to show badge if value is zero
     */
    showZero = false;
    /**
     * Animation type
     */
    animation = 'none';
    /**
     * Horizontal offset from position
     */
    offsetX = 0;
    /**
     * Vertical offset from position
     */
    offsetY = 0;
    /**
     * Icon to display
     */
    icon;
    /**
     * Icon position
     */
    iconPosition = 'left';
    /**
     * Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.)
     */
    iconLibrary = 'default';
    /**
     * Gradient variant (e.g., 'blue-purple', 'green-teal', 'orange-red')
     */
    gradient;
    /**
     * Custom background color
     */
    customColor;
    /**
     * Custom text color
     */
    customTextColor;
    /**
     * Make badge interactive/clickable
     */
    interactive = false;
    /**
     * Add close button
     */
    closeable = false;
    /**
     * Add glow effect
     */
    glow = false;
    /**
     * Badge shape
     */
    shape = 'default';
    /**
     * Use inline positioning instead of absolute anchors
     */
    inline = false;
    /**
     * High-Fidelity: RTL support
     */
    rtl = false;
    isVisible = true;
    /**
     * Fired when badge is clicked (interactive mode)
     */
    badgeClick;
    /**
     * Fired when badge is closed
     */
    badgeClose;
    handleClick = (e) => {
        if (this.interactive) {
            e.stopPropagation();
            this.badgeClick.emit();
        }
    };
    handleClose = (e) => {
        e.stopPropagation();
        e.preventDefault();
        // Immediately hide the badge
        this.isVisible = false;
        // Emit the close event
        this.badgeClose.emit();
    };
    getDisplayValue() {
        if (this.dot)
            return '';
        if (this.value === undefined || this.value === null)
            return '';
        const numValue = typeof this.value === 'number' ? this.value : parseInt(this.value);
        if (!isNaN(numValue)) {
            if (numValue === 0 && !this.showZero)
                return '';
            return numValue > (this.max ?? 99) ? `${this.max ?? 99}+` : numValue.toString();
        }
        return this.value.toString();
    }
    render() {
        if (!this.isVisible)
            return null;
        const displayValue = this.getDisplayValue();
        const shouldShow = this.dot || displayValue !== '' || this.icon;
        const displayValueStr = displayValue.toString();
        const isSingleChar = displayValueStr.length === 1 && !this.icon;
        const classes = [
            'badge',
            `badge-${this.color}`,
            `badge-${this.size}`,
            `badge-${this.position}`,
            `badge-${this.variant}`,
            this.dot ? 'badge-dot' : '',
            (isSingleChar && !this.closeable) ? 'badge-single' : 'badge-pill',
            this.animation !== 'none' ? `badge-${this.animation}` : '',
            this.interactive ? 'badge-interactive' : '',
            this.glow ? 'badge-glow' : '',
            this.gradient ? `badge-gradient-${this.gradient}` : '',
            this.shape !== 'default' ? `badge-shape-${this.shape}` : '',
            this.inline ? 'badge-inline' : '',
            this.closeable ? 'badge-closable' : '',
        ].filter(Boolean).join(' ');
        const style = {};
        if (this.offsetX)
            style['--badge-offset-x'] = `${this.offsetX}px`;
        if (this.offsetY)
            style['--badge-offset-y'] = `${this.offsetY}px`;
        if (this.customColor)
            style['background-color'] = this.customColor;
        if (this.customTextColor)
            style['color'] = this.customTextColor;
        return (h(Host, { dir: this.rtl ? 'rtl' : undefined }, h("div", { class: "badge-wrapper" }, h("slot", null), shouldShow && (h("span", { class: classes, style: style, onClick: this.handleClick }, this.icon && this.iconPosition === 'left' && !this.dot && (h("span", { class: "badge-icon" }, h("ui-icon", { name: this.icon, library: this.iconLibrary, size: "1.1em" }))), h("slot", { name: "badge-content" }, !this.dot && displayValue), this.icon && this.iconPosition === 'right' && !this.dot && (h("span", { class: "badge-icon" }, h("ui-icon", { name: this.icon, library: this.iconLibrary, size: "1.1em" }))), this.closeable && (h("ui-button", { variant: "ghost", class: "badge-close", onClick: this.handleClose, ariaLabel: "Close badge", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })))))));
    }
};
Badge.style = badgeCss();

const buttonCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.btn-label-row{display:flex;align-items:center;justify-content:center;gap:8px;width:100%;transition:all 0.2s ease}.btn-label-row.icon-pos-left{flex-direction:row}.btn-label-row.icon-pos-right{flex-direction:row-reverse}.btn-label-row.icon-pos-top{flex-direction:column}.btn-label-row.icon-pos-bottom{flex-direction:column-reverse}.btn-label-block{display:flex;flex-direction:column;justify-content:center;min-width:0;align-items:center;text-align:center}.icon-pos-left .btn-label-block{align-items:flex-start;text-align:left}.icon-pos-right .btn-label-block{align-items:flex-end;text-align:right}.icon-pos-top .btn-label-block,.icon-pos-bottom .btn-label-block,.icon-pos-none .btn-label-block{align-items:center;text-align:center}.btn-title{font-size:inherit;font-weight:600;line-height:1.2}.btn-subtitle{font-size:0.85em;font-weight:400;color:var(--btn-subtitle-color, var(--label-subtitle-color, var(--dd-muted, #62748a)));line-height:1.2;opacity:1;transition:color 0.2s ease;margin-top:2px}.btn-subtitle.btn-subtitle-above{margin-top:0;margin-bottom:2px}.btn-icon-block{display:flex;align-items:center;justify-content:center;flex-shrink:0}:host{display:inline-block;vertical-align:middle;box-sizing:border-box;position:relative;}:host(.is-full-width){display:block;width:100%}:host(.is-grow){flex:1;display:inline-flex}.btn{display:inline-flex;align-items:center;justify-content:center}.btn.btn-align-start{justify-content:flex-start;text-align:left}.btn.btn-align-start .btn-label-block{align-items:flex-start;text-align:left}.btn.btn-align-end{justify-content:flex-end;text-align:right}.btn.btn-align-end .btn-label-block{align-items:flex-end;text-align:right}.btn.btn-align-center{justify-content:center;text-align:center}.btn.btn-align-center .btn-label-block{align-items:center;text-align:center}.btn.btn-justify-start{justify-content:flex-start}.btn.btn-justify-end{justify-content:flex-end}.btn.btn-justify-center{justify-content:center}.btn.btn-justify-between{justify-content:space-between}.btn.btn-justify-around{justify-content:space-around}.btn .btn-content,.btn .btn-label-row{display:flex;flex:1;align-items:center;justify-content:inherit;min-width:0;width:100%;gap:8px}.btn .btn-content.is-vertical,.btn .btn-label-row.is-vertical{flex-direction:column;justify-content:center}.btn .btn-label-block{display:flex;flex-direction:column;min-width:0;flex:1;justify-content:center}.btn .btn-label-block .btn-title{display:flex;flex:1;width:100%;min-width:0;align-items:center;justify-content:inherit}.btn{position:relative;width:var(--button-width, auto);height:var(--ui-button-height, 40px);min-height:100%;padding:var(--button-padding, 0 20px);border:1px solid transparent;outline:none;cursor:pointer;user-select:none;text-decoration:none;font-family:inherit;font-weight:var(--button-font-weight, 600);font-size:var(--button-font-size, 14px);line-height:var(--button-line-height, normal);white-space:nowrap;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);overflow:visible;box-sizing:border-box;-webkit-tap-highlight-color:transparent;color:var(--text-primary, #000);box-shadow:0 2px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.btn.btn-is-vertical{height:auto;min-height:var(--ui-button-height, 44px);padding:10px 16px}.btn.btn-is-vertical .btn-label-block{align-items:center;text-align:center}.btn.btn-type-image{background:transparent !important;border-color:transparent !important;box-shadow:none !important;padding:0 !important;width:auto;height:auto;min-width:0}.btn.btn-type-image .btn-image{display:block;max-width:100%;max-height:100%;width:auto;height:auto;object-fit:contain}@media (hover: hover){.btn:hover:not(.btn-disabled){box-shadow:0 4px 14px rgba(var(--color-primary-rgb, 59, 130, 246), 0.25);filter:brightness(1.08);transform:scale(1.01)}}.btn:active:not(.btn-disabled){transform:scale(0.97);box-shadow:0 1px 4px rgba(0, 0, 0, 0.12);filter:brightness(0.94);transition:transform 0.1s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.btn-selected{background:var(--btn-selected-bg, rgba(var(--color-primary-rgb, 59, 130, 246), 0.1));border-color:var(--btn-selected-border, var(--color-primary, #3b82f6));color:var(--btn-selected-color, var(--color-primary, #3b82f6));z-index:2}.btn-selected[style*="--hide-button-selection: 1"]{background-color:transparent !important;border-color:transparent !important;box-shadow:none !important}.btn-shortcut{font-size:0.8em;padding:1px 4px;background:rgba(0, 0, 0, 0.1);border-radius:4px;margin-inline-start:6px;font-family:monospace;opacity:0.7;letter-spacing:1px}.btn-primary .btn-shortcut{background:rgba(255, 255, 255, 0.2)}.btn-outline .btn-shortcut{background:rgba(0, 0, 0, 0.05)}.btn:focus-visible{box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.4)}.btn-primary{background:var(--color-primary, #10b981);box-shadow:0 2px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.btn-secondary{background:var(--color-primary, #6b7280);box-shadow:0 2px 8px rgba(0, 0, 0, 0.1)}.btn-success{background:var(--color-success, #10b981);box-shadow:0 2px 8px rgba(var(--color-success-rgb, 16, 185, 129), 0.2)}.btn-danger{background:var(--color-danger, #ef4444);box-shadow:0 2px 8px rgba(var(--color-danger-rgb, 239, 68, 68), 0.2)}.btn-warning{background:var(--color-warning, #f59e0b);box-shadow:0 2px 8px rgba(var(--color-warning-rgb, 245, 158, 11), 0.2)}.btn-info{background:var(--color-primary, #10b981);box-shadow:0 2px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.btn-dark{background:var(--bg-primary, #1f2937);color:var(--text-standard, #ffffff)}.btn-outline{background:transparent;border-color:var(--border-strong, #d1d5db);color:var(--btn-label-color, var(--label-color, var(--text-secondary, #374151)));box-shadow:none}.btn-outline:hover:not(.btn-disabled){border-color:var(--color-primary, #9ca3af);background:rgba(0, 0, 0, 0.02)}.btn-ghost{background:transparent;color:var(--btn-label-color, var(--label-color, var(--text-secondary, #374151)));box-shadow:none}.btn-ghost:hover:not(.btn-disabled){background:rgba(0, 0, 0, 0.05)}.btn-plain{background:transparent;border:none;box-shadow:none;color:inherit;padding:0;height:100%;min-width:0;width:100%;border-radius:inherit}.btn-plain:hover:not(.btn-disabled){transform:none;box-shadow:none;filter:none;background:transparent}.btn-plain:active:not(.btn-disabled){transform:none;filter:none}.btn-raised{background:var(--bg-primary, #ffffff);color:var(--btn-label-color, var(--label-color, var(--text-primary, #1f2937)));border:1px solid var(--border-default, #e5e7eb);border-bottom:3px solid var(--border-strong, #d1d5db);box-shadow:0 2px 4px rgba(0, 0, 0, 0.05)}.btn-raised:active:not(.btn-disabled){border-bottom-width:1px;transform:translateY(2px)}.btn-glass{background:rgba(255, 255, 255, 0.15);backdrop-filter:blur(10px);-webkit-backdrop-filter:blur(10px);border:1px solid rgba(255, 255, 255, 0.2);color:inherit;box-shadow:0 8px 32px rgba(0, 0, 0, 0.1)}.btn-glass:hover:not(.btn-disabled){background:rgba(255, 255, 255, 0.25)}.btn-soft{color:var(--label-color, var(--text-primary, #1e293b));border-color:transparent;box-shadow:none}.btn-soft:hover:not(.btn-disabled){background:var(--btn-soft-hover-bg, rgba(var(--color-primary-rgb, 59, 130, 246), 0.12));transform:translateY(-1px)}.btn-soft.btn-success{background:rgba(var(--color-success-rgb, 16, 185, 129), 0.1);color:var(--label-color, #10b981)}.btn-soft.btn-success:hover:not(.btn-disabled){background:rgba(var(--color-success-rgb, 16, 185, 129), 0.16)}.btn-soft.btn-danger{background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.1);color:var(--label-color, #ef4444)}.btn-soft.btn-danger:hover:not(.btn-disabled){background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.16)}.btn-soft.btn-warning{background:rgba(var(--color-warning-rgb, 245, 158, 11), 0.1);color:var(--label-color, #f59e0b)}.btn-soft.btn-warning:hover:not(.btn-disabled){background:rgba(var(--color-warning-rgb, 245, 158, 11), 0.16)}.btn-soft.btn-info{background:rgba(var(--color-info-rgb, 6, 182, 212), 0.1);color:var(--label-color, #06b6d4)}.btn-soft.btn-info:hover:not(.btn-disabled){background:rgba(var(--color-info-rgb, 6, 182, 212), 0.16)}.btn-accordion{background:transparent;color:var(--btn-label-color, var(--label-color, var(--text-secondary, #374151)));box-shadow:none;width:100%;--button-padding:16px 0px;--ui-button-height:auto;justify-content:space-between !important;border:none;font-size:16px;font-weight:500}.btn-accordion:hover:not(.btn-disabled){background:transparent;transform:none !important;box-shadow:none !important;filter:none !important}.btn-accordion:active:not(.btn-disabled){transform:none !important;background:transparent;box-shadow:none !important;filter:none !important}.btn-accordion:focus-visible,.btn-accordion:focus,.btn-accordion:active{outline:none !important;box-shadow:none !important;background:transparent !important}.btn-gradient{background:linear-gradient(135deg, var(--color-success, #3dcd58) 0%, var(--color-success, #00b894) 100%);color:var(--text-standard, #ffffff);border:none;box-shadow:0 4px 15px rgba(var(--color-success-rgb, 61, 205, 88), 0.35)}.btn-gradient:hover:not(.btn-disabled){background:linear-gradient(135deg, var(--color-success, #2ebd4a) 0%, var(--color-success, #00a381) 100%);box-shadow:0 6px 20px rgba(var(--color-success-rgb, 61, 205, 88), 0.5);transform:translateY(-1px)}.btn-gradient:active:not(.btn-disabled){box-shadow:0 2px 8px rgba(var(--color-success-rgb, 61, 205, 88), 0.3);transform:translateY(0)}.btn-gradient-blue{background:linear-gradient(135deg, var(--color-primary, #10b981) 0%, var(--color-primary, #8b5cf6) 100%);color:var(--text-standard, #ffffff);border:none;box-shadow:0 4px 15px rgba(var(--color-primary-rgb, 59, 130, 246), 0.35)}.btn-gradient-blue:hover:not(.btn-disabled){background:linear-gradient(135deg, var(--color-primary-hover, #2563eb) 0%, var(--color-primary, #7c3aed) 100%);box-shadow:0 6px 20px rgba(var(--color-primary-rgb, 59, 130, 246), 0.5);transform:translateY(-1px)}.btn-gradient-blue:active:not(.btn-disabled){box-shadow:0 2px 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3);transform:translateY(0)}.btn-gradient-purple{background:linear-gradient(135deg, var(--color-primary, #8b5cf6) 0%, var(--color-danger, #ec4899) 100%);color:var(--text-standard, #ffffff);border:none;box-shadow:0 4px 15px rgba(139, 92, 246, 0.35)}.btn-gradient-purple:hover:not(.btn-disabled){background:linear-gradient(135deg, var(--color-primary, #7c3aed) 0%, var(--color-danger, #db2777) 100%);box-shadow:0 6px 20px rgba(139, 92, 246, 0.5);transform:translateY(-1px)}.btn-gradient-purple:active:not(.btn-disabled){box-shadow:0 2px 8px rgba(139, 92, 246, 0.3);transform:translateY(0)}.btn-gradient-orange{background:linear-gradient(135deg, var(--color-danger, #f97316) 0%, var(--color-danger, #ef4444) 100%);color:var(--text-standard, #ffffff);border:none;box-shadow:0 4px 15px rgba(249, 115, 22, 0.35)}.btn-gradient-orange:hover:not(.btn-disabled){background:linear-gradient(135deg, var(--color-danger, #ea6c0a) 0%, var(--color-danger-hover, #dc2626) 100%);box-shadow:0 6px 20px rgba(249, 115, 22, 0.5);transform:translateY(-1px)}.btn-gradient-orange:active:not(.btn-disabled){box-shadow:0 2px 8px rgba(249, 115, 22, 0.3);transform:translateY(0)}.btn-gradient-ocean{background:linear-gradient(135deg, var(--color-primary, #0ea5e9) 0%, var(--color-info, #06b6d4) 100%);color:var(--text-standard, #ffffff);border:none;box-shadow:0 4px 15px rgba(14, 165, 233, 0.35)}.btn-gradient-ocean:hover:not(.btn-disabled){background:linear-gradient(135deg, var(--color-primary, #0284c7) 0%, var(--color-info-hover, #0891b2) 100%);box-shadow:0 6px 20px rgba(14, 165, 233, 0.5);transform:translateY(-1px)}.btn-gradient-ocean:active:not(.btn-disabled){box-shadow:0 2px 8px rgba(14, 165, 233, 0.3);transform:translateY(0)}.btn-gradient-sunset{background:linear-gradient(135deg, var(--color-warning, #f59e0b) 0%, var(--color-danger, #f97316) 100%);color:var(--text-standard, #ffffff);border:none;box-shadow:0 4px 15px rgba(var(--color-warning-rgb, 245, 158, 11), 0.35)}.btn-gradient-sunset:hover:not(.btn-disabled){background:linear-gradient(135deg, var(--color-warning-hover, #d97706) 0%, var(--color-danger, #ea6c0a) 100%);box-shadow:0 6px 20px rgba(var(--color-warning-rgb, 245, 158, 11), 0.5);transform:translateY(-1px)}.btn-gradient-sunset:active:not(.btn-disabled){box-shadow:0 2px 8px rgba(var(--color-warning-rgb, 245, 158, 11), 0.3);transform:translateY(0)}.btn-gradient-candy{background:linear-gradient(135deg, var(--color-danger, #ec4899) 0%, var(--color-danger, #ef4444) 100%);color:var(--text-standard, #ffffff);border:none;box-shadow:0 4px 15px rgba(236, 72, 153, 0.35)}.btn-gradient-candy:hover:not(.btn-disabled){background:linear-gradient(135deg, var(--color-danger, #db2777) 0%, var(--color-danger-hover, #dc2626) 100%);box-shadow:0 6px 20px rgba(236, 72, 153, 0.5);transform:translateY(-1px)}.btn-gradient-candy:active:not(.btn-disabled){box-shadow:0 2px 8px rgba(236, 72, 153, 0.3);transform:translateY(0)}.btn-gradient-gold{background:linear-gradient(135deg, var(--color-danger, #fbbf24) 0%, var(--color-warning-hover, #d97706) 100%);color:var(--text-standard, #ffffff);border:none;box-shadow:0 4px 15px rgba(251, 191, 36, 0.35);text-shadow:0 1px 2px rgba(0, 0, 0, 0.15)}.btn-gradient-gold:hover:not(.btn-disabled){background:linear-gradient(135deg, var(--color-warning, #f59e0b) 0%, var(--color-danger, #b45309) 100%);box-shadow:0 6px 20px rgba(251, 191, 36, 0.5);transform:translateY(-1px)}.btn-gradient-gold:active:not(.btn-disabled){box-shadow:0 2px 8px rgba(251, 191, 36, 0.3);transform:translateY(0)}.btn-xxxs{--ui-button-height:20px;font-size:10px;padding:0 6px}.btn-xxs{--ui-button-height:24px;font-size:11px;padding:0 8px}.btn-xs{--ui-button-height:28px;font-size:12px;padding:0 10px}.btn-sm{--ui-button-height:32px;font-size:13px;padding:0 12px}.btn-md{--ui-button-height:44px;font-size:14px;padding:0 18px}.btn-lg{--ui-button-height:52px;font-size:15px;padding:0 22px}.btn-xl{--ui-button-height:60px;font-size:16px;padding:0 28px}.btn-xxl{--ui-button-height:68px;font-size:18px;padding:0 36px}.btn-xxxl{--ui-button-height:84px;font-size:20px;padding:0 48px}.btn-shape-square,.btn-shape-sharp{border-radius:0}.btn-shape-rounded{border-radius:var(--button-border-radius, 8px)}.btn-shape-rounded-lg{border-radius:var(--button-border-radius, 12px)}.btn-shape-pill,.btn-shape-oval{border-radius:var(--button-border-radius, 9999px);padding-left:1.5rem !important;padding-right:1.5rem !important}.btn-icon-only{padding:0 !important;width:var(--ui-button-height, 40px) !important;min-width:var(--ui-button-height, 40px) !important;max-width:var(--ui-button-height, 40px) !important;flex:0 0 var(--ui-button-height, 40px) !important;aspect-ratio:1/1 !important;display:inline-flex;align-items:center;justify-content:center}.btn-icon-only .btn-content{width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:0;gap:0}.btn-icon-only .btn-label-group{display:flex;align-items:center;justify-content:center;width:100%;height:100%;padding:0;gap:0}.btn-icon-only .btn-icon{display:flex;align-items:center;justify-content:center;margin:0}.btn-icon-only .btn-label{margin:0;font-size:0.95em;font-weight:700;line-height:1;text-transform:uppercase;display:flex;align-items:center;justify-content:center;width:100%;height:100%}.btn-shape-circle{border-radius:50% !important;aspect-ratio:1/1 !important;padding:0 !important;width:var(--ui-button-height, 40px) !important;min-width:var(--ui-button-height, 40px) !important;max-width:var(--ui-button-height, 40px) !important;display:inline-flex;align-items:center;justify-content:center}.btn-shape-chip{border-radius:100px;height:28px !important;font-size:11px;padding:0 12px}.btn-disabled{opacity:0.5;cursor:not-allowed;filter:grayscale(0.8);pointer-events:none}.btn-loading{cursor:wait}.btn-selected{background:var(--btn-selected-bg, rgba(var(--color-primary-rgb, 59, 130, 246), 0.12));color:var(--btn-selected-color, var(--color-primary, #2563eb));font-weight:700;outline:none;box-shadow:inset 0 0 0 1px rgba(var(--color-primary-rgb, 59, 130, 246), 0.25)}.btn-selected::after{content:"";position:absolute;inset:0;border-radius:inherit;box-shadow:0 0 8px rgba(var(--color-primary-rgb, 59, 130, 246), 0.15);pointer-events:none;z-index:-1}.btn-ghost.btn-selected{background:var(--btn-selected-bg, rgba(37, 99, 235, 0.1));color:var(--btn-selected-color, var(--text-standard))}.btn-ghost.btn-selected:hover:not(.btn-disabled){background:var(--btn-selected-hover-bg, rgba(37, 99, 235, 0.16))}.btn-content{display:flex;flex-direction:row;align-items:center;justify-content:center;gap:8px;width:auto;min-width:0;max-width:100%;position:relative;z-index:1;flex:1 1 auto;overflow:hidden}.btn-icon-pos-left .btn-label-row{flex-direction:row}.btn-icon-pos-right .btn-label-row{flex-direction:row}.btn-icon-pos-top,.btn-icon-pos-bottom{height:auto;min-height:var(--ui-button-height);padding-top:10px !important;padding-bottom:10px !important}.btn-icon-pos-top .btn-label-row,.btn-icon-pos-bottom .btn-label-row{gap:4px !important;align-items:center !important;justify-content:center !important}.btn-icon-pos-top .btn-title-block,.btn-icon-pos-bottom .btn-title-block{align-items:center !important;text-align:center !important}.btn-icon-pos-top .btn-label-row{flex-direction:column}.btn-icon-pos-bottom .btn-label-row{flex-direction:column}.btn-label-group{display:inline-flex;align-items:center;justify-content:center;gap:8px;flex:1 1 auto;min-width:0;max-width:100%;overflow:hidden}.btn-label-group.is-column{flex-direction:column;gap:4px}.btn-counter{margin-inline-start:8px;vertical-align:middle;flex-shrink:0}.btn-icon,.btn-spinner{display:flex;align-items:center;justify-content:center;flex-shrink:0}.btn-label{display:inline-flex;align-items:center;gap:inherit;flex:0 1 auto;min-width:0;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;line-height:normal}.btn-img{height:1.5em;width:auto;margin:0 4px;object-fit:contain;flex-shrink:0}.btn-avatar{position:relative;flex-shrink:0;border-radius:50%;overflow:visible;display:flex;align-items:center;justify-content:center;width:calc(var(--ui-button-height) * 0.65);height:calc(var(--ui-button-height) * 0.65);background:rgba(0, 0, 0, 0.05);margin-right:8px}.btn-avatar img{width:100%;height:100%;object-fit:cover;border-radius:50%}.btn-avatar .status-dot{position:absolute;bottom:-1px;right:-1px;width:8px;height:8px;border-radius:50%;border:1.5px solid var(--bg-primary, #ffffff);z-index:1}.btn-avatar .status-dot.status-online{background-color:var(--color-success, #10b981)}.btn-avatar .status-dot.status-offline{background-color:var(--text-muted, #6b7280)}.btn-avatar .status-dot.status-busy{background-color:var(--color-danger, #ef4444)}.btn-avatar .status-dot.status-away{background-color:var(--color-warning, #f59e0b)}.btn-icon-only .btn-avatar,.btn-shape-circle .btn-avatar{margin-inline-end:0;width:100%;height:100%;border-radius:inherit}.btn-icon-only .btn-avatar img,.btn-shape-circle .btn-avatar img{border-radius:inherit}.btn-has-bg{background-size:cover;background-position:center;position:relative}.btn-has-bg::before{content:"";position:absolute;inset:0;background:rgba(0, 0, 0, 0.3);transition:opacity 0.2s}.btn-has-bg:hover::before{background:rgba(0, 0, 0, 0.4)}.elevation-0{box-shadow:none}.elevation-1{box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.elevation-2{box-shadow:0 4px 8px rgba(0, 0, 0, 0.12)}.elevation-3{box-shadow:0 8px 16px rgba(0, 0, 0, 0.15)}.elevation-4{box-shadow:0 12px 24px rgba(0, 0, 0, 0.18)}.elevation-5{box-shadow:0 20px 40px rgba(0, 0, 0, 0.2)}ui-badge.is-inline{margin:0px}ui-badge.is-absolute{position:absolute;z-index:10;pointer-events:none;width:0;height:0}.pos-top-right{top:-1rem;inset-inline-end:0}.pos-top-left{top:-1rem;inset-inline-start:0}.pos-bottom-right{bottom:1rem;inset-inline-end:0}.pos-bottom-left{bottom:1rem;inset-inline-start:0}.btn-ripple-container{position:absolute;inset:0;pointer-events:none;overflow:hidden;z-index:0}.ripple{position:absolute;border-radius:50%;background:rgba(255, 255, 255, 0.3);transform:scale(0);animation:ripple-anim 0.6s linear}@keyframes ripple-anim{to{transform:scale(4);opacity:0}}.btn-soft{box-shadow:none;border:none}.btn-soft.btn-primary,.btn-soft.btn-success,.btn-soft.btn-danger,.btn-soft.btn-warning,.btn-soft.btn-info{color:var(--label-color)}.btn-soft.btn-secondary{color:var(--label-subtitle-color)}.btn-soft:hover:not(.btn-disabled){background:currentColor;color:var(--text-standard, #ffffff);filter:none}.btn-active{transform:translateY(1px);filter:brightness(0.9) !important;box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.1) !important}.btn-skeleton{pointer-events:none;background:var(--bg-secondary, #f1f5f9) !important;border:none !important;color:transparent !important;box-shadow:none !important;position:relative;overflow:hidden}.btn-skeleton *{opacity:0 !important}.btn-skeleton::after{content:"";position:absolute;inset:0;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.5), transparent);animation:btn-shimmer 1.5s infinite}@keyframes btn-shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(100%)}}.btn-gradient-sunset{background:linear-gradient(135deg, var(--color-primary, #f093fb) 0%, var(--color-danger, #f5576c) 100%);color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-gradient-ocean{background:linear-gradient(135deg, var(--color-primary, #4facfe) 0%, var(--color-primary, #00f2fe) 100%);color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-gradient-midnight{background:linear-gradient(135deg, var(--bg-primary, #232526) 0%, var(--bg-secondary, #414345) 100%);color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-gradient-forest{background:linear-gradient(135deg, var(--color-primary, #11998e) 0%, var(--color-success, #38ef7d) 100%);color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-gradient-blaze{background:linear-gradient(135deg, var(--color-danger, #ff512f) 0%, var(--color-danger, #dd2476) 100%);color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-dropdown-icon{margin-inline-start:4px;display:flex;align-items:center;opacity:0.8;transition:transform 0.2s}.btn:hover .btn-dropdown-icon{transform:translateY(1px)}.btn-magnetic,.btn-tilt{transition:transform 0.2s cubic-bezier(0.25, 0.1, 0.25, 1);will-change:transform;transform-style:preserve-3d}.btn-glow{position:relative}.btn-glow::before{content:"";position:absolute;inset:-2px;background:currentColor;border-radius:inherit;filter:blur(8px);opacity:0.4;z-index:-1;animation:btn-glow-pulse 2s ease-in-out infinite}@keyframes btn-glow-pulse{0%,100%{opacity:0.3;transform:scale(1)}50%{opacity:0.6;transform:scale(1.05)}}.confetti-particle{position:absolute;top:50%;left:50%;width:8px;height:8px;background-color:var(--particle-color);border-radius:2px;pointer-events:none;z-index:10;animation:confetti-burst 0.8s ease-out forwards}@keyframes confetti-burst{0%{transform:translate(-50%, -50%) rotate(0deg) scale(1);opacity:1}100%{transform:translate(calc(cos(var(--particle-angle)) * 100px * var(--particle-velocity)), calc(sin(var(--particle-angle)) * 100px * var(--particle-velocity))) rotate(720deg) scale(0);opacity:0}}.btn-primary.btn-glow{color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-primary.btn-glow::before{background:var(--ui-primary, var(--color-success, #3dcd58))}.btn-success.btn-glow{color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-success.btn-glow::before{background:var(--ui-success, var(--color-success, #10b981))}.btn-danger.btn-glow{color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-danger.btn-glow::before{background:var(--ui-danger, var(--color-danger, #ef4444))}.btn-warning.btn-glow{color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-warning.btn-glow::before{background:var(--ui-warning, var(--color-warning, #f59e0b))}.btn-info.btn-glow{color:var(--bg-primary, var(--text-standard, #ffffff))}.btn-info.btn-glow::before{background:var(--ui-info, var(--color-info-hover, #0891b2))}.btn-glossy{position:relative;overflow:hidden}.btn-glossy::after{content:"";position:absolute;top:0;left:-100%;width:50%;height:100%;background:linear-gradient(to right, transparent, rgba(255, 255, 255, 0.4), transparent);transform:skewX(-25deg);animation:glossy-sweep 4s infinite ease-in-out}@keyframes glossy-sweep{0%{left:-100%}30%{left:150%}100%{left:150%}}.btn-icon{display:inline-flex;transition:transform 0.2s cubic-bezier(0.4, 0, 0.2, 1)}.btn-icon ui-icon{transition:opacity 0.2s, transform 0.2s}.btn:hover .btn-icon ui-icon{transform:scale(1.1)}.btn-hold-track{position:absolute;top:0;left:0;height:100%;background:rgba(0, 0, 0, 0.15);pointer-events:none;z-index:0;transition:width 0.05s linear}.btn-has-theme{--btn-theme-bg:var(--btn-theme-color, var(--color-primary, #10b981));--btn-theme-text:var(--text-standard, #ffffff);background:var(--btn-theme-bg);color:var(--btn-theme-text);border:none}.btn-has-theme:hover:not(.btn-disabled){background:color-mix(in srgb, var(--btn-theme-bg), #000 10%);box-shadow:0 4px 12px color-mix(in srgb, var(--btn-theme-bg), transparent 70%)}.btn-has-theme.btn-outline{background:transparent;color:var(--btn-theme-bg);border:1px solid var(--btn-theme-bg)}.btn-has-theme.btn-outline:hover:not(.btn-disabled){background:var(--btn-theme-bg);color:var(--text-standard, #ffffff)}.btn-has-theme.btn-soft{color:var(--btn-theme-bg)}.btn-has-theme.btn-soft:hover:not(.btn-disabled){background:var(--btn-theme-bg);color:var(--text-standard, #ffffff)}.btn-progress-track{position:absolute;top:0;left:0;height:100%;background:color-mix(in srgb, currentColor, transparent 80%);z-index:1;pointer-events:none;transition:width 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.btn-primary .btn-progress-track{background:rgba(0, 0, 0, 0.2)}.btn-outline .btn-progress-track{background:color-mix(in srgb, currentColor, transparent 85%)}.btn-accordion{background:transparent;border:none;padding:0;height:auto;min-height:48px;width:100%;border-radius:0;box-shadow:none;color:inherit;--button-width:100%}.btn-accordion .btn-content,.btn-accordion .btn-label-row{padding:0 20px;justify-content:space-between}.btn-accordion .btn-label-block,.btn-accordion .btn-title{align-items:stretch;text-align:left;width:100%;display:flex;flex-direction:column}.btn-accordion:hover:not(.btn-disabled){background:rgba(0, 0, 0, 0.02);transform:none;box-shadow:none;filter:none}.btn-accordion:active:not(.btn-disabled){background:rgba(0, 0, 0, 0.05);transform:none}.btn-shaking{animation:btn-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}@keyframes btn-shake{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-4px, 0, 0)}40%,60%{transform:translate3d(4px, 0, 0)}}.btn-rainbow.btn-glow::before{animation:btn-rainbow-glow 4s linear infinite;opacity:0.6}@keyframes btn-rainbow-glow{0%{background:var(--color-danger, #ff0000);filter:hue-rotate(0deg) blur(10px)}100%{background:var(--color-danger, #ff0000);filter:hue-rotate(360deg) blur(10px)}}.btn-liquid-progress{overflow:hidden}.btn-liquid-progress::after{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:rgba(255, 255, 255, 0.2);border-radius:38%;animation:btn-liquid-wave 3s linear infinite}@keyframes btn-liquid-wave{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.btn-split{padding-right:0 !important}.btn-split .btn-dropdown-icon{height:100%;padding:0 12px;margin-inline-start:8px;border-inline-start:1px solid rgba(255, 255, 255, 0.2);display:flex;align-items:center;transition:background 0.2s}.btn-split .btn-dropdown-icon:hover{background:rgba(0, 0, 0, 0.1)}.btn-confirm-pop{position:absolute;bottom:calc(100% + 12px);left:50%;transform:translateX(-50%);background:var(--bg-primary, #1f2937);color:var(--text-standard, #ffffff);padding:12px 16px;border-radius:12px;font-size:13px;display:flex;align-items:center;gap:12px;white-space:nowrap;box-shadow:0 10px 25px rgba(0, 0, 0, 0.2);z-index:100;animation:pop-in 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.btn-confirm-pop::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:6px solid transparent;border-top-color:var(--border-strong, #1f2937)}.btn-confirm-pop .pop-actions{display:flex;gap:6px}.btn-confirm-pop .pop-actions button{width:24px;height:24px;border:none;border-radius:6px;cursor:pointer;display:flex;align-items:center;justify-content:center;font-size:11px;transition:transform 0.1s}.btn-confirm-pop .pop-actions button:active{transform:scale(0.9)}.btn-confirm-pop .pop-actions .pop-btn-no{background:var(--text-secondary, #374151);color:var(--bg-primary, #ffffff)}.btn-confirm-pop .pop-actions .pop-btn-yes{background:var(--color-success, #10b981);color:var(--bg-primary, #ffffff)}@keyframes pop-in{from{opacity:0;transform:translateX(-50%) translateY(10px) scale(0.9)}to{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}}.btn-reveal-fade-in{animation:btn-fade-in 0.6s ease-out forwards}.btn-reveal-slide-up{animation:btn-slide-up 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275) forwards}.btn-reveal-zoom{animation:btn-zoom-in 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards}@keyframes btn-fade-in{from{opacity:0}to{opacity:1}}@keyframes btn-slide-up{from{opacity:0;transform:translateY(20px)}to{opacity:1;transform:translateY(0)}}@keyframes btn-zoom-in{from{opacity:0;transform:scale(0.8)}to{opacity:1;transform:scale(1)}}.btn-tooltip-pop{position:absolute;top:-10px;left:50%;transform:translateX(-50%) translateY(-100%);background:var(--bg-primary, #1f2937);color:var(--text-standard, #ffffff);padding:4px 10px;border-radius:6px;font-size:11px;white-space:nowrap;pointer-events:none;z-index:1000;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1);animation:tooltip-in 0.2s ease-out}.btn-tooltip-pop::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:4px solid transparent;border-top-color:var(--border-strong, #1f2937)}@keyframes tooltip-in{from{opacity:0;transform:translateX(-50%) translateY(-90%) scale(0.95)}to{opacity:1;transform:translateX(-50%) translateY(-100%) scale(1)}}.btn-animate-gradient{background-size:240% 240% !important;animation:bg-living-gradient 6s ease infinite !important}@keyframes bg-living-gradient{0%{background-position:0% 50%}50%{background-position:100% 50%}100%{background-position:0% 50%}}.btn-pulse{position:relative}.btn-pulse::before{content:"";position:absolute;inset:-6px;background:inherit;border-radius:inherit;opacity:0.4;z-index:-1;animation:btn-energy-pulse 2s cubic-bezier(0.24, 0, 0.38, 1) infinite}@keyframes btn-energy-pulse{0%{transform:scale(1);opacity:0.4;filter:blur(2px)}100%{transform:scale(1.3);opacity:0;filter:blur(8px)}}.btn-group-start{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;border-right:0.5px solid rgba(0, 0, 0, 0.1) !important}.btn-group-middle{border-radius:0 !important;border-right:0.5px solid rgba(0, 0, 0, 0.1) !important}.btn-group-end{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.btn-is-slider{background:rgba(0, 0, 0, 0.05) !important;border:1px solid rgba(0, 0, 0, 0.1) !important;box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.05) !important;color:var(--text-muted, #64748b) !important;cursor:default !important;overflow:hidden;position:relative}.btn-is-slider:hover{transform:none !important}.btn-is-slider .btn-slider-handle{position:absolute;top:4px;height:calc(100% - 8px);width:52px;background:var(--bg-primary, #ffffff);border-radius:inherit;display:flex;align-items:center;justify-content:center;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);cursor:grab;z-index:10;transition:left 0.05s linear;color:var(--ui-primary, var(--color-success, #3dcd58))}.btn-is-slider .btn-slider-handle:active{cursor:grabbing}.btn-is-slider.btn-primary .btn-slider-handle{color:var(--ui-primary, var(--color-success, #3dcd58))}.btn-is-slider.btn-danger .btn-slider-handle{color:var(--ui-danger, var(--color-danger, #ef4444))}.btn-is-slider.btn-success .btn-slider-handle{color:var(--ui-success, var(--color-success, #10b981))}.btn-icon-hover-rotate:hover:not(.btn-disabled) .btn-icon{transform:rotate(15deg);transition:transform 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.btn-follow-glow::before{content:"";position:absolute;inset:0;background:radial-gradient(circle 80px at var(--glow-x, 0) var(--glow-y, 0), rgba(255, 255, 255, 0.15), transparent);opacity:0;transition:opacity 0.3s;pointer-events:none;z-index:1}.btn-follow-glow:hover::before{opacity:1}.btn-spinning .btn-icon{animation:btn-icon-spin 0.6s cubic-bezier(0.34, 1.56, 0.64, 1)}@keyframes btn-icon-spin{from{transform:rotate(0deg)}to{transform:rotate(360deg)}}.btn-shatter{position:absolute;background:rgba(0, 0, 0, 0.6);pointer-events:none;z-index:100;animation:btn-shatter-explode 0.8s cubic-bezier(0.1, 0.8, 0.3, 1) forwards}@keyframes btn-shatter-explode{0%{transform:translate(0, 0) rotate(0);opacity:1}100%{transform:translate(var(--vx), var(--vy)) rotate(var(--vr));opacity:0}}.btn-spinner.is-ring{width:24px;height:24px}.btn-spinner.is-ring .progress-ring{transform:rotate(-90deg);width:100%;height:100%}.btn-spinner.is-ring .progress-ring circle{stroke-linecap:round}.btn-spinner.is-ring .progress-ring .ring-bg{stroke:rgba(255, 255, 255, 0.1)}.btn-spinner.is-ring .progress-ring .ring-fg{stroke:currentColor;transition:stroke-dasharray 0.3s ease}.btn-primary .ring-bg{stroke:rgba(0, 0, 0, 0.1)}.btn:focus-visible{outline:none;box-shadow:0 0 0 2px var(--ui-surface), 0 0 0 4px var(--ui-primary, var(--color-success, #3dcd58)) !important;z-index:100}.btn:active:not(.btn-disabled),.btn-active:not(.btn-disabled){transform:translateY(1px) scale(0.96);box-shadow:0 1px 2px rgba(0, 0, 0, 0.1) !important;filter:brightness(0.95)}.btn-raised:active:not(.btn-disabled){box-shadow:0 2px 4px rgba(0, 0, 0, 0.15) !important}@media (max-width: 640px){.btn-hide-mobile{padding:0 !important;width:var(--ui-button-height) !important;min-width:var(--ui-button-height) !important}.btn-hide-mobile .btn-label,.btn-hide-mobile .btn-label-group,.btn-hide-mobile .btn-dropdown-icon{display:none !important}.btn-hide-mobile .btn-icon{margin:0 !important}}.btn-progress-fill{position:absolute;left:0;top:0;bottom:0;background:rgba(255, 255, 255, 0.2);border-radius:inherit;pointer-events:none;transition:width 0.4s ease;z-index:0}.btn-image{width:100%;height:100%;object-fit:cover;border-radius:inherit;display:block}`;

const Button = class {
    get el() { return getElement(this); }
    internals;
    nativeButton;
    async setFocus() {
        this.nativeButton?.focus();
    }
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonClick = createEvent(this, "buttonClick");
        this.internals = this.el.attachInternals();
    }
    /** Image source for image button */
    imgSrc;
    /** Alt text for image button */
    imgAlt;
    /** Button type: 'button', 'submit', 'reset', 'image' */
    type = 'button';
    /** Avatar source for avatar button */
    avatarSrc;
    /** Alt text for avatar-btn */
    avatarAlt;
    /** Status dot for avatar: 'online', 'offline', 'busy', 'away' */
    avatarStatus = '';
    /** Values associated with the button (for use in groups) */
    value;
    /** Button label text */
    label;
    /** Optional subtitle text (shown above/below main label) */
    subtitle;
    /** Description text (alias for subtitle, common in toggle contexts) */
    description;
    /** Position of the description/subtitle: 'above' | 'below' | 'left' | 'right' */
    descriptionPosition = 'below';
    /** Optional icon content (can be name, SVG path, URL, or emoji) */
    icon;
    /** Library for the icon (e.g., 'se', 'fontawesome', 'lucide', etc.) */
    iconLibrary = 'lucide';
    /** Render icon only (no label) */
    iconOnly = false;
    /** Icon position relative to label */
    iconPosition = 'left';
    /** Content alignment within button: 'start' | 'center' | 'end' */
    align = 'center';
    /** Content justification: 'start' | 'center' | 'end' | 'between' | 'around' */
    justify = 'center';
    /** Optional override for icon size */
    iconSize;
    /** Optional override for icon color */
    iconColor = 'currentColor';
    /** Visual variant */
    variant = 'outline';
    /** Button color */
    color = 'none';
    /** Size */
    size = 'md';
    /** Disabled state */
    disabled = false;
    /** Loading state (shows spinner) */
    loading = false;
    /** Loading spinner position */
    loadingPosition = 'left';
    /** Full width button (shorthand for width="100%") */
    fullWidth = false;
    /** Custom width (e.g., '100%', '200px', 'auto') */
    width;
    /** Custom min-width */
    minWidth;
    /** Button shape */
    shape = 'rounded';
    /** Rounded corner style (legacy override) */
    rounded = true;
    /** Pill-shaped (legacy override) */
    pill = false;
    /** Circle-shaped (shorthand for shape="circle") */
    circle = false;
    /** Link URL. If set, renders as an anchor tag. */
    href;
    /** Link target */
    target;
    /** Link relationships */
    rel;
    /** If true, the button will grow to fill available space in a flex container */
    grow = false;
    /** Badge content */
    badge;
    /** Badge color variant (primary, success, danger, etc.) */
    badgeColor = 'danger';
    /** Custom background color for the badge */
    badgeCustomColor;
    /** Custom text color for the badge */
    badgeCustomTextColor;
    /** Badge position */
    badgePosition = 'top-right';
    /** RTL support */
    rtl = false;
    /** Selected state (for toggle groups) */
    selected = false;
    /** Elevation level (0-5) */
    elevation;
    /** Reveal animation type */
    reveal = 'none';
    /** Reveal delay in ms */
    revealDelay = 0;
    /** Disable ripple effect */
    noRipple = false;
    /** Accessible label override (especially useful for icon-only buttons) */
    ariaLabel;
    /** Text to copy to clipboard when clicked. Shows feedback icon. */
    copyValue;
    /** Progress fill (0–100). Shows a background fill bar. */
    progress;
    copied = false;
    /** Click event */
    buttonClick;
    handleClick = (event) => {
        if (this.disabled || this.loading) {
            event.preventDefault();
            event.stopPropagation();
            return;
        }
        if (!this.noRipple) {
            this.createRipple(event);
        }
        if (this.copyValue) {
            navigator.clipboard?.writeText(this.copyValue).then(() => {
                this.copied = true;
                setTimeout(() => (this.copied = false), 2000);
            });
        }
        if (this.type === 'submit' && !this.disabled) {
            this.internals.form?.requestSubmit();
        }
        else if (this.type === 'reset' && !this.disabled) {
            this.internals.form?.reset();
        }
        this.buttonClick.emit(event);
    };
    createRipple(event) {
        const btn = event.currentTarget;
        const container = btn.querySelector('.btn-ripple-container');
        if (!container)
            return;
        const circle = document.createElement("span");
        const diameter = Math.max(btn.clientWidth, btn.clientHeight);
        const radius = diameter / 2;
        const rect = btn.getBoundingClientRect();
        circle.style.width = circle.style.height = `${diameter}px`;
        circle.style.left = `${event.clientX - rect.left - radius}px`;
        circle.style.top = `${event.clientY - rect.top - radius}px`;
        circle.classList.add("ripple");
        const ripple = container.getElementsByClassName("ripple")[0];
        if (ripple) {
            ripple.remove();
        }
        container.appendChild(circle);
    }
    /**
     * Positions the icon relative to the label according to `iconPosition`.
     *
     * Layout model:
     *
     *   'left'   →  [icon] [badges + label]          — horizontal, icon before
     *   'right'  →  [badges + label] [icon]          — horizontal, icon after
     *   'top'    →  [icon]                           — vertical, icon above
     *               [badges + label]
     *   'bottom' →  [badges + label]                 — vertical, icon below
     *               [icon]
     *
     * The btn-label-group wrapper handles inline badges and the text label.
     * Top/bottom icons sit outside that wrapper so flex-direction changes
     * are not needed — the DOM order itself drives the visual order.
     */
    renderButtonContent(iconElement, avatarElement, spinner) {
        const trimmedLabel = this.label?.trim();
        const trimmedDescription = (this.description || this.subtitle || '').trim();
        const hasLabel = !!trimmedLabel;
        const hasDescription = !!trimmedDescription;
        // Show label block if we have a label prop, description prop, OR if it's not an icon-only button (fallback to slot)
        const showLabel = (hasLabel || hasDescription || !this.iconOnly);
        if (this.iconOnly) {
            return this.loading ? spinner : (avatarElement || iconElement || h("slot", null));
        }
        const badgeInlineLeft = this.badge && (this.badgePosition === 'inline-left' ||
            (this.rtl && this.badgePosition === 'inline-right')) ? (h("ui-badge", { class: "btn-badge-inline", value: this.badge.toString(), color: this.badgeColor, "custom-color": this.badgeCustomColor, "custom-text-color": this.badgeCustomTextColor, size: "sm" })) : null;
        const badgeInlineRight = this.badge && (this.badgePosition === 'inline-right' ||
            (this.rtl && this.badgePosition === 'inline-left')) ? (h("ui-badge", { class: "btn-badge-inline", value: this.badge.toString(), color: this.badgeColor, "custom-color": this.badgeCustomColor, "custom-text-color": this.badgeCustomTextColor, size: "sm" })) : null;
        const showSpinnerAtStart = this.loading && (this.loadingPosition === 'left' || (this.loadingPosition === 'icon' && !iconElement && !avatarElement));
        const showSpinnerAtEnd = this.loading && this.loadingPosition === 'right';
        const showSpinnerCentered = this.loading && (this.loadingPosition === 'center' || this.loadingPosition === 'icon');
        const iconBlock = (avatarElement || iconElement || showSpinnerCentered) ? (h("div", { class: "btn-icon-block", part: "icon-block" }, showSpinnerCentered ? spinner : (avatarElement || iconElement))) : null;
        const labelBlock = showLabel ? (h("div", { class: "btn-label-block", part: "label-block" }, h("div", { class: "btn-title", part: "title" }, this.copied ? '✓ Copied!' : (hasLabel ? trimmedLabel : h("slot", null))), hasDescription && (h("div", { class: `btn-subtitle btn-subtitle-${this.descriptionPosition}`, part: "subtitle" }, trimmedDescription)))) : null;
        return (h("div", { class: {
                'btn-label-row': true,
                [`icon-pos-${this.iconPosition}`]: true
            } }, badgeInlineLeft, showSpinnerAtStart && spinner, iconBlock, labelBlock, showSpinnerAtEnd && spinner, badgeInlineRight));
    }
    render() {
        const isImageButton = !!this.imgSrc;
        const isAvatarButton = !!this.avatarSrc;
        const showIcon = !!this.icon && !this.loading;
        const Tag = (this.href ? 'a' : 'button');
        const normalizedSize = normalizeComponentSize(this.size, 'md');
        const spinner = this.loading ? (h("span", { class: `btn-spinner btn-spinner-${this.loadingPosition}` }, h("ui-loader", { size: "xs", color: "currentColor" }))) : null;
        const sanitizedLabel = this.ariaLabel || (this.label || this.el.textContent || '').trim();
        const finalAriaLabel = sanitizeHTML(sanitizedLabel);
        const renderProps = this.href ? {
            href: this.href,
            target: this.target,
            rel: this.rel,
            role: 'button',
            'aria-label': finalAriaLabel
        } : {
            type: this.type === 'image' ? 'button' : this.type,
            disabled: this.disabled || this.loading,
            'aria-label': finalAriaLabel
        };
        const iconElement = showIcon ? (h("span", { class: "btn-icon", part: "icon", "aria-hidden": "true" }, h("ui-icon", { name: this.icon, library: this.iconLibrary, size: this.iconSize || normalizedSize, color: this.iconColor || 'currentColor' }))) : null;
        const avatarElement = isAvatarButton ? (h("span", { class: "btn-avatar" }, h("img", { src: this.avatarSrc, alt: this.avatarAlt || '' }), this.avatarStatus && h("span", { class: `status-dot status-${this.avatarStatus}` }))) : null;
        const styles = {
            '--button-width': this.width ? this.width : (this.fullWidth ? '100%' : 'auto'),
            '--button-min-width': this.minWidth ? this.minWidth : 'auto',
            'animation-delay': this.reveal !== 'none' && this.revealDelay > 0 ? `${this.revealDelay}ms` : undefined
        };
        const sizeClass = normalizedSize;
        const hostClass = [
            'btn',
            `btn-${typeof this.variant === 'string' ? this.variant : 'none'}`,
            this.color && `btn-${this.color}`,
            `btn-${sizeClass}`,
            (this.disabled || this.loading) && 'btn-disabled',
            this.iconOnly && !this.loading && 'btn-icon-only',
            this.loading && 'btn-loading',
            this.fullWidth && 'btn-full-width',
            this.grow && 'btn-grow',
            // Shape Cascading: Explicit 'shape' wins (with 'default' falling back to 'rounded'), then shorthand props.
            (this.shape && this.shape !== 'default') ? `btn-shape-${this.shape}` :
                this.circle ? 'btn-shape-circle' :
                    this.pill ? 'btn-shape-pill' :
                        isAvatarButton ? 'btn-shape-circle' :
                            'btn-shape-rounded',
            this.selected && 'btn-selected',
            this.iconPosition === 'top' || this.iconPosition === 'bottom' ? 'btn-is-vertical' : '',
            !!this.elevation && `btn-elevation-${this.elevation}`,
            isImageButton && 'btn-type-image',
            isAvatarButton && 'btn-type-avatar',
            `btn-align-${this.align}`,
            `btn-justify-${this.justify}`,
            `icon-pos-${this.iconPosition}`,
            this.loading && `btn-loading-${this.loadingPosition}`,
            this.rtl && 'btn-rtl',
            this.reveal !== 'none' && `reveal-${this.reveal}`,
        ].filter(Boolean).join(' ');
        return (h(Tag, { key: 'd8605634f3cc899257ed9d6960ca1cf4e0aaf031', ...renderProps, style: styles, class: hostClass, part: "button", dir: this.rtl ? 'rtl' : 'ltr', onClick: this.handleClick, ref: (el) => (this.nativeButton = el) }, !this.noRipple && h("span", { key: 'cba383c8098e685d8f2ade718daa452e0884a034', class: "btn-ripple-container" }), h("span", { key: '469dd3ab6fe97d66e8aa50434e9407da2806f7c9', class: "btn-content" }, isImageButton ? (h("fragment", null, this.loading && spinner, h("img", { src: this.imgSrc, alt: this.imgAlt || '', class: "btn-image" }))) : (this.renderButtonContent(iconElement, avatarElement, spinner))), this.badge && !this.badgePosition.startsWith('inline') && (h("ui-badge", { key: '7ee2666b4d24ebed0516b6a15cf7c4c194ea1116', class: `btn-badge is-absolute pos-${this.badgePosition}`, value: this.badge.toString(), color: this.badgeColor, "custom-color": this.badgeCustomColor, "custom-text-color": this.badgeCustomTextColor, size: "sm" })), this.progress !== undefined && (h("span", { key: 'a132192aa0c0548de607fcd8f4c1b7d61bb04bfc', class: "btn-progress-fill", style: { width: `${Math.min(100, Math.max(0, this.progress))}%` } }))));
    }
    static get delegatesFocus() { return true; }
    static get formAssociated() { return true; }
};
Button.style = buttonCss();

const buttonToggleCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:contents}.button-toggle-item{width:100%}.button-toggle-item.full-width{width:100%}.button-toggle-item{}.button-list-vertical .button-toggle-item::part(button){justify-content:flex-start;text-align:left}.toggle-spinner{display:inline-block;width:14px;height:14px;border:2px solid currentColor;border-top-color:transparent;border-radius:50%;animation:toggle-spin 0.6s linear infinite}@keyframes toggle-spin{to{transform:rotate(360deg)}}.reveal-fade-in{animation:toggle-fade-in 0.4s ease both}.reveal-slide-up{animation:toggle-slide-up 0.4s ease both}.reveal-zoom{animation:toggle-zoom 0.35s ease both}@keyframes toggle-fade-in{from{opacity:0}to{opacity:1}}@keyframes toggle-slide-up{from{opacity:0;transform:translateY(8px)}to{opacity:1;transform:translateY(0)}}@keyframes toggle-zoom{from{opacity:0;transform:scale(0.9)}to{opacity:1;transform:scale(1)}}`;

const ButtonToggle = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonToggleChange = createEvent(this, "buttonToggleChange");
    }
    get el() { return getElement(this); }
    /** The value associated with this toggle */
    value = '';
    /** Display label */
    label;
    /** Icon name */
    icon;
    /** Icon on the left side (overrides icon when display-mode is both-sides) */
    iconLeft;
    /** Icon on the right side */
    iconRight;
    /** Icon position relative to label */
    iconPosition = 'left';
    /** Show icon only (hide label) */
    iconOnly = false;
    /** Form field name */
    name = '';
    /** Whether this toggle is selected */
    selected = false;
    /** Disabled state */
    disabled = false;
    /** Read-only state */
    readonly = false;
    /** Loading state */
    loading = false;
    /** Size */
    size = 'md';
    /** Color */
    color = 'primary';
    /** Visual variant */
    variant = 'soft';
    /** Description text */
    description;
    /** Description position */
    descriptionPosition = 'below';
    /** Full width */
    fullWidth = false;
    /** Reveal animation */
    reveal = 'none';
    /** Reveal delay in ms */
    revealDelay = 0;
    /** Shape */
    shape = 'rounded';
    /** Icon library */
    library = 'lucide';
    /** Avatar source */
    avatarSrc;
    /** Avatar alt text */
    avatarAlt;
    /** Status indicator */
    status;
    /** Emitted when toggle is clicked */
    buttonToggleChange;
    handleClick = (e) => {
        e.stopPropagation();
        if (this.disabled || this.readonly || this.loading)
            return;
        this.buttonToggleChange.emit({ value: this.value });
    };
    render() {
        const style = {};
        if (this.reveal !== 'none' && this.revealDelay > 0) {
            style['animation-delay'] = `${this.revealDelay}ms`;
        }
        return (h("ui-button", { key: '97cc24c55a704ecd85f39d443f4cc098b3194138', part: "button", label: this.label, description: this.description, descriptionPosition: this.descriptionPosition, shape: this.shape, variant: this.variant, size: this.size, selected: this.selected, style: style, icon: this.icon || this.iconLeft || this.iconRight, iconPosition: this.iconPosition, iconLibrary: this.library, iconOnly: this.iconOnly, avatarSrc: this.avatarSrc, avatarAlt: this.avatarAlt, avatarStatus: this.status, disabled: this.disabled || this.loading, "aria-pressed": this.selected ? 'true' : 'false', "aria-label": this.label, role: "radio", onClick: this.handleClick, tabIndex: this.disabled ? -1 : 0, class: {
                'button-toggle-item': true,
                'full-width': this.fullWidth
            } }, h("slot", { key: '2d5cdcb204273dbd82191ff0da555eec5d79ed6d' })));
    }
};
ButtonToggle.style = buttonToggleCss();

const buttonToggleGroupCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.ui-button-toggle-group{display:inline-flex;flex-direction:column;gap:12px;width:max-content;min-width:fit-content;font-family:inherit}.ui-button-toggle-group.group-rtl{direction:rtl}.ui-button-toggle-group.group-wrap .button-list{flex-wrap:wrap}.ui-button-toggle-group{}.ui-button-toggle-group.group-shape-round{--group-radius:12px;--indicator-radius:8px}.ui-button-toggle-group.group-shape-pill{--group-radius:99px;--indicator-radius:99px}.ui-button-toggle-group.group-shape-square{--group-radius:0px;--indicator-radius:0px}.ui-button-toggle-group{}.ui-button-toggle-group.group-variant-chip .button-list{background:transparent;padding:4px;gap:10px;box-shadow:none;flex-wrap:wrap;border:none !important;overflow:visible}.ui-button-toggle-group.group-variant-chip ui-button{transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.ui-button-toggle-group.group-variant-chip ui-button:hover{transform:translateY(-2px)}.ui-button-toggle-group.group-variant-chip ui-button::part(button){background:rgba(255, 255, 255, 0.5) !important;backdrop-filter:blur(8px);border:1px solid rgba(0, 0, 0, 0.05) !important;border-radius:99px !important;color:#64748b !important;font-weight:500 !important;--button-padding:8px 18px;--ui-button-height:auto;min-height:32px;box-shadow:0 2px 4px rgba(0, 0, 0, 0.02) !important}.ui-button-toggle-group.group-variant-chip ui-button:hover::part(button){border-color:rgba(var(--color-primary-rgb, 16, 185, 129), 0.2) !important;background:#ffffff !important;color:var(--color-primary, #10b981) !important;box-shadow:0 4px 12px rgba(0, 0, 0, 0.05) !important}.ui-button-toggle-group.group-variant-chip ui-button[selected]::part(button){background:var(--indicator-bg, var(--color-primary, #10b981)) !important;color:#ffffff !important;opacity:1 !important;border-color:transparent !important;font-weight:700 !important;box-shadow:0 8px 20px rgba(var(--color-primary-rgb, 16, 185, 129), 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.3) !important;transform:translateY(-1px)}.ui-button-toggle-group.group-variant-chip ui-button[selected]:hover::part(button){filter:brightness(1.1);box-shadow:0 10px 25px rgba(var(--color-primary-rgb, 16, 185, 129), 0.35), inset 0 1px 1px rgba(255, 255, 255, 0.4) !important}.button-group-label{font-weight:700;color:var(--label-color, #1e293b);font-size:0.9375rem;margin-bottom:6px;display:flex;align-items:center}.required-indicator{color:var(--color-danger-hover, #dc2626);margin-left:4px}.button-list{display:flex;padding:var(--group-padding, 6px);padding:var(--group-padding, 4px);border-radius:var(--group-radius, 10px);position:relative;background:var(--button-group-bg, #f1f5f9);border:1px solid var(--border-color, #e2e8f0);overflow:hidden;transform:translateZ(0);isolation:isolate;background-clip:padding-box;color:var(--text-color, #64748b);box-shadow:inset 0 1px 2px rgba(0, 0, 0, 0.03)}.selection-indicator{position:absolute;top:0;left:0;background:var(--indicator-bg, #10b981);opacity:0;pointer-events:none;transition:transform 0.4s cubic-bezier(0.19, 1, 0.22, 1), width 0.3s cubic-bezier(0.19, 1, 0.22, 1), height 0.3s cubic-bezier(0.19, 1, 0.22, 1), opacity 0.2s ease;z-index:1;border-radius:var(--indicator-radius, 99px);box-shadow:0 8px 20px rgba(0, 0, 0, 0.12), inset 0 1px 1px rgba(255, 255, 255, 0.3);border:1px solid rgba(255, 255, 255, 0.1);box-sizing:border-box;}.selection-indicator::after{content:"";position:absolute;inset:0;background:rgba(0, 0, 0, 0.05);border-radius:inherit;opacity:0;transition:opacity 0.2s}.button-list:hover .selection-indicator::after{opacity:0.2}.button-list-horizontal{flex-direction:row;align-items:stretch}.button-list-vertical{flex-direction:column;align-items:stretch}.button-list ui-button{flex:none;position:relative;z-index:2;--button-padding:8px 16px;--ui-button-height:auto;min-height:44px}.button-list-vertical ui-button{width:100%}.button-list ui-button[icon-only]{width:44px !important;--button-padding:0 !important;--ui-button-height:44px !important;flex:0 0 44px !important}.button-list-full-width ui-button{flex:1}.button-list ui-button::part(button){background:rgba(var(--ui-input-focus-rgb, 99, 102, 241), 0.02) !important;color:inherit !important;border:none !important;box-shadow:none !important;font-weight:600 !important;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);--button-border-radius:var(--indicator-radius, 8px);opacity:1}.button-list ui-button::part(subtitle){opacity:0.7;color:inherit !important}.button-list ui-button:hover::part(button){opacity:1;background:rgba(var(--ui-input-focus-rgb, 99, 102, 241), 0.05) !important;color:var(--indicator-bg, var(--color-primary-dark, #059669)) !important}.button-list:not(.group-multi-select) ui-button[selected]::part(button){color:var(--indicator-text-color, #ffffff);z-index:5;opacity:1}.ui-button-toggle-group .button-list ui-button[selected]::part(title),.ui-button-toggle-group .button-list ui-button[selected]::part(subtitle),.ui-button-toggle-group .button-list ui-button[selected]::part(icon){color:var(--indicator-text-color, #ffffff);opacity:1}.group-multi-select .button-list ui-button[selected]::part(button){background:var(--indicator-bg, #10b981);color:var(--indicator-text-color, #ffffff);opacity:1;box-shadow:0 4px 12px rgba(var(--color-primary-rgb, 16, 185, 129), 0.25), inset 0 1px 1px rgba(255, 255, 255, 0.2);border-radius:var(--indicator-radius, 30px);border:1px solid rgba(255, 255, 255, 0.1);z-index:5;transform:scale(0.96)}.button-list-horizontal:not([style*="--group-padding"]) ui-button:not(:last-child)::after{content:"";position:absolute;right:0;top:25%;height:50%;width:1px;background:linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.08) 20%, rgba(0, 0, 0, 0.08) 80%, transparent);z-index:3;transition:opacity 0.2s ease}.button-list ui-button[selected]::after,.button-list ui-button[selected]+ui-button::after{opacity:0 !important}.helper-text{font-size:0.875rem;color:var(--text-muted, #64748b);margin-top:6px;font-weight:400}.helper-text.error{color:#ef4444}.ui-button-toggle-group[variant=dropdown] .button-list{--group-padding:0;--indicator-radius:4px}.dropdown-container{position:relative;display:inline-flex}.dropdown-button{display:flex;align-items:stretch;background:var(--button-group-bg, #f1f5f9);border:1px solid var(--border-color, #e2e8f0);border-radius:var(--group-radius, 10px);overflow:hidden;transition:all 0.2s ease}.dropdown-button.dropdown-button-open{border-color:var(--color-primary, #10b981);box-shadow:0 0 0 3px rgba(16, 185, 129, 0.1)}.dropdown-action-button{border-radius:0 !important;flex:1;--button-padding:0 16px;--ui-button-height:44px}.dropdown-toggle-button{border-radius:0 !important;width:44px;border-left:1px solid rgba(0, 0, 0, 0.05) !important;--button-padding:0;--ui-button-height:44px}.dropdown-menu{position:absolute;top:calc(100% + 4px);left:0;min-width:100%;width:max-content;background:#ffffff;border:1px solid #e2e8f0;border-radius:8px;box-shadow:0 10px 25px rgba(0, 0, 0, 0.1);z-index:1000;display:flex;flex-direction:column;padding:6px;opacity:0;visibility:hidden;transform:translateY(10px);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1)}.dropdown-menu.dropdown-menu-open{opacity:1;visibility:visible;transform:translateY(0)}.dropdown-option{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:6px;cursor:pointer;color:#475569;font-size:0.9375rem;font-weight:500;transition:all 0.15s ease;white-space:nowrap}.dropdown-option:hover{background:#f1f5f9;color:#1e293b}.dropdown-option.dropdown-option-selected{background:rgba(16, 185, 129, 0.1);color:#10b981}.dropdown-option.dropdown-option-disabled{opacity:0.5;cursor:not-allowed;pointer-events:none}.dropdown-option .option-icon{display:flex;align-items:center;justify-content:center;color:inherit;font-size:1.1em}.dropdown-option .option-label{flex:1}.dropdown-option .option-check{color:#10b981;margin-left:auto;display:flex;align-items:center}.dropdown-search{padding:4px 8px 8px;border-bottom:1px solid #f1f5f9;margin-bottom:4px}.dropdown-search input{width:100%;padding:8px 12px;border:1px solid #e2e8f0;border-radius:6px;font-size:0.8125rem;outline:none;transition:all 0.2s}.dropdown-search input:focus{border-color:#10b981;box-shadow:0 0 0 2px rgba(16, 185, 129, 0.1)}`;

const ButtonToggleGroup = class {
    get el() { return getElement(this); }
    internals;
    focusFrameId = null;
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.buttonToggleGroupChange = createEvent(this, "buttonToggleGroupChange");
        this.buttonToggleGroupAction = createEvent(this, "buttonToggleGroupAction");
        this.buttonToggleGroupBatch = createEvent(this, "buttonToggleGroupBatch");
        this.buttonToggleGroupSearch = createEvent(this, "buttonToggleGroupSearch");
        this.buttonToggleGroupExport = createEvent(this, "buttonToggleGroupExport");
        this.buttonToggleGroupImport = createEvent(this, "buttonToggleGroupImport");
        this.buttonToggleGroupAnalytics = createEvent(this, "buttonToggleGroupAnalytics");
        this.internals = this.el.attachInternals();
    }
    // Core props
    value = '';
    name = '';
    disabled = false;
    readonly = false;
    required = false;
    invalid = false;
    label = '';
    helperText = '';
    errorMessage = '';
    orientation = 'horizontal';
    /** Size category (xxxs to xxxl) */
    size = 'md';
    /** Visual color (string or {from: string, to: string}) */
    color = 'primary';
    /** Visual variant (glass, raised, etc) */
    variant = 'soft';
    options = [];
    fullWidth = false;
    iconPosition = 'left';
    iconLibrary = 'default';
    library;
    iconOnly = false;
    mode = 'segmented';
    buttonAction;
    buttonActionLabel = 'Action';
    keepButtonLabel = false;
    customContent = false;
    loading = false;
    /** Button shape (rounded, pill, chip, etc) */
    shape = 'rounded';
    // Premium features
    multiSelect = false;
    batchActions = false;
    searchEnabled = false;
    exportEnabled = false;
    importEnabled = false;
    analyticsEnabled = false;
    advancedTheme = '';
    /** Entrance animation */
    reveal = 'none';
    /** Base delay for group reveal */
    revealDelay = 0;
    /** Stagger delay between items */
    revealStagger = 50;
    /** High-Fidelity: Indicator follows cursor slightly when near selection */
    magneticIndicator = false;
    /** RTL support */
    rtl = false;
    /** Allow buttons to wrap to new lines */
    wrap = false;
    width = '';
    /** localStorage key for persisting selected value across reloads. Empty string disables persistence. */
    persistKey = '';
    // Internal state
    buttons = [];
    isDropdownOpen = false;
    searchQuery = '';
    selectedValues = [];
    analytics = {};
    focusIndex = -1;
    ariaLive = '';
    selectionIndicatorRef;
    resizeObserver;
    mutationObserver;
    // Events
    buttonToggleGroupChange;
    buttonToggleGroupAction;
    buttonToggleGroupBatch;
    buttonToggleGroupSearch;
    buttonToggleGroupExport;
    buttonToggleGroupImport;
    buttonToggleGroupAnalytics;
    componentWillLoad() {
        this.normalizeProps();
        this.updateOptions();
        this.syncButtons();
        this.updateOptionsFromChildren();
        if (this.persistKey) {
            try {
                const stored = localStorage.getItem(this.persistKey);
                if (stored !== null)
                    this.value = JSON.parse(stored);
            }
            catch { /* ignore */ }
        }
    }
    componentDidLoad() {
        if (this.mode === 'dropdown') {
            document.addEventListener('click', this.handleClickOutside);
        }
        this.el.addEventListener('keydown', this.handleKeyDown);
        // Gliding Indicator Setup
        if (typeof ResizeObserver !== 'undefined') {
            this.resizeObserver = new ResizeObserver(() => this.updateIndicator());
            this.resizeObserver.observe(this.el);
        }
        // Mutation Observer for light DOM children sync
        if (typeof MutationObserver !== 'undefined') {
            this.mutationObserver = new MutationObserver(() => this.updateOptionsFromChildren());
            this.mutationObserver.observe(this.el, { childList: true, subtree: true, attributes: true });
        }
        // Initial position
        setTimeout(() => this.updateIndicator(), 100);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleClickOutside);
        this.el.removeEventListener('keydown', this.handleKeyDown);
        if (this.focusFrameId !== null) {
            cancelAnimationFrame(this.focusFrameId);
            this.focusFrameId = null;
        }
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        if (this.mutationObserver) {
            this.mutationObserver.disconnect();
        }
    }
    handleMouseMove = (ev) => {
        if (!this.magneticIndicator || !this.selectionIndicatorRef || this.mode === 'dropdown' || this.multiSelect)
            return;
        const buttons = Array.from(this.el.shadowRoot?.querySelectorAll('ui-button') ?? []);
        const selectedBtn = buttons.find((btn) => btn.value === this.value);
        if (!selectedBtn)
            return;
        const rect = selectedBtn.getBoundingClientRect();
        const centerX = rect.left + rect.width / 2;
        const centerY = rect.top + rect.height / 2;
        // Calculate distance from center of selected button
        const dist = Math.hypot(ev.clientX - centerX, ev.clientY - centerY);
        if (dist < 150) {
            const x = (ev.clientX - centerX) / 8;
            const y = (ev.clientY - centerY) / 8;
            const left = selectedBtn.offsetLeft;
            const top = selectedBtn.offsetTop;
            const inset = 4;
            this.selectionIndicatorRef.style.transform = `translate(${left + x + inset}px, ${top + y + inset}px) scale(1.02)`;
        }
        else {
            const left = selectedBtn.offsetLeft;
            const top = selectedBtn.offsetTop;
            const inset = 4;
            this.selectionIndicatorRef.style.transform = `translate(${left + inset}px, ${top + inset}px) scale(1)`;
        }
    };
    updateIndicator() {
        if (!this.selectionIndicatorRef || this.mode === 'dropdown' || this.multiSelect)
            return;
        requestAnimationFrame(() => {
            const buttons = Array.from(this.el.shadowRoot?.querySelectorAll('ui-button') ?? []);
            const selectedBtn = buttons.find((btn) => btn.value === this.value);
            if (selectedBtn) {
                // Use offset-based positioning for better stability
                const left = selectedBtn.offsetLeft;
                const top = selectedBtn.offsetTop;
                const width = selectedBtn.offsetWidth;
                const height = selectedBtn.offsetHeight;
                // Add a small inset for the 'floating' effect
                const inset = 4;
                this.selectionIndicatorRef.style.width = `${width - (inset * 2)}px`;
                this.selectionIndicatorRef.style.height = `${height - (inset * 2)}px`;
                this.selectionIndicatorRef.style.transform = `translate(${left + inset}px, ${top + inset}px)`;
                this.selectionIndicatorRef.style.opacity = '1';
                // Notify buttons to hide their own selection backgrounds
                buttons.forEach((btn) => {
                    btn.style.setProperty('--hide-button-selection', '1');
                });
            }
            else {
                this.selectionIndicatorRef.style.opacity = '0';
                buttons.forEach((btn) => {
                    btn.style.setProperty('--hide-button-selection', '0');
                });
            }
        });
    }
    handleClickOutside = (event) => {
        if (!this.el.contains(event.target)) {
            this.isDropdownOpen = false;
        }
    };
    componentDidUpdate() {
        this.syncButtons();
        this.updateIndicator();
    }
    watchValue() {
        this.syncButtons();
        if (this.analyticsEnabled)
            this.trackAnalytics('change', this.value);
        this.ariaLive = `Selection changed: ${Array.isArray(this.value) ? this.value.join(', ') : this.value}`;
        this.internals.setFormValue(Array.isArray(this.value) ? this.value.join(',') : (this.value || ''));
    }
    handleColorChange() {
        this.normalizeProps();
    }
    handleOptionsChange() {
        this.updateOptions();
    }
    normalizeProps() {
        try {
            if (typeof this.color === 'string' && this.color.startsWith('{')) {
                this.color = JSON.parse(this.color);
            }
            if (typeof this.options === 'string') {
                this.buttons = JSON.parse(this.options);
            }
        }
        catch (e) {
            console.warn('Failed to parse complex button-toggle-group prop', e);
        }
    }
    updateOptions() {
        if (typeof this.options === 'string') {
            try {
                this.buttons = JSON.parse(this.options);
            }
            catch {
                console.error('Invalid options JSON');
                this.buttons = [];
            }
        }
        else if (Array.isArray(this.options) && this.options.length > 0) {
            this.buttons = [...this.options];
        }
        else {
            this.updateOptionsFromChildren();
        }
    }
    updateOptionsFromChildren() {
        const childNodes = Array.from(this.el.children);
        if (childNodes.length === 0)
            return;
        const newButtons = childNodes
            .filter(child => child.tagName.toLowerCase() === 'ui-button-toggle' || child.tagName.toLowerCase() === 'ui-button')
            .map((child, idx) => {
            const c = child;
            return {
                value: c.value || child.getAttribute('value') || `opt-${idx}`,
                label: c.label || child.getAttribute('label') || child.textContent?.trim(),
                icon: c.icon || child.getAttribute('icon'),
                disabled: c.disabled || child.hasAttribute('disabled'),
                description: c.description || child.getAttribute('description'),
                descriptionPosition: c.descriptionPosition || child.getAttribute('description-position'),
                iconLibrary: c.library || c.iconLibrary || child.getAttribute('icon-library') || child.getAttribute('library')
            };
        });
        // Deep compare to avoid infinite updates
        if (JSON.stringify(this.buttons) !== JSON.stringify(newButtons)) {
            this.buttons = newButtons;
        }
    }
    handleButtonToggleChange(event) {
        const newValue = event.detail.value;
        if (this.multiSelect) {
            if (this.selectedValues.includes(newValue)) {
                this.selectedValues = this.selectedValues.filter(v => v !== newValue);
            }
            else {
                this.selectedValues = [...this.selectedValues, newValue];
            }
            this.value = [...this.selectedValues];
            this.buttonToggleGroupChange.emit({ value: this.value });
            this._persistValue();
            if (this.analyticsEnabled)
                this.trackAnalytics('multiSelect', this.value);
            this.ariaLive = `Selection changed: ${this.selectedValues.join(', ')}`;
        }
        else {
            if (this.value !== newValue) {
                this.value = newValue;
                this.syncButtons();
                this.buttonToggleGroupChange.emit({ value: this.value });
                this._persistValue();
                if (this.analyticsEnabled)
                    this.trackAnalytics('change', this.value);
                this.ariaLive = `Selection changed: ${this.value}`;
            }
            else if (!this.required) {
                this.value = '';
                this.syncButtons();
                this.buttonToggleGroupChange.emit({ value: this.value });
                this._persistValue();
                if (this.analyticsEnabled)
                    this.trackAnalytics('deselect', this.value);
                this.ariaLive = `Selection cleared`;
            }
        }
    }
    handleDropdownToggle = (event) => {
        event.stopPropagation();
        if (this.disabled || this.readonly)
            return;
        this.isDropdownOpen = !this.isDropdownOpen;
    };
    handleButtonAction = (event) => {
        event.stopPropagation();
        if (this.disabled || this.readonly)
            return;
        if (this.buttonAction) {
            this.buttonAction();
        }
        this.buttonToggleGroupAction.emit({ value: this.value });
    };
    handleOptionSelect = (optionValue, event) => {
        event.stopPropagation();
        if (this.disabled || this.readonly)
            return;
        this.value = optionValue;
        this.isDropdownOpen = false;
        this.syncButtons();
        this.buttonToggleGroupChange.emit({ value: this.value });
        this._persistValue();
    };
    _persistValue() {
        if (this.persistKey) {
            try {
                localStorage.setItem(this.persistKey, JSON.stringify(this.value));
            }
            catch { /* ignore */ }
        }
    }
    syncButtons() {
        const buttons = this.el.shadowRoot?.querySelectorAll('ui-button') ?? [];
        if (this.multiSelect && Array.isArray(this.value)) {
            buttons.forEach((button) => {
                button.selected = this.value.includes(button.value);
            });
        }
        else {
            buttons.forEach((button) => {
                button.selected = button.value === this.value;
            });
        }
    }
    renderLabel() {
        if (!this.label)
            return null;
        return (h("div", { class: "button-group-label" }, this.label, this.required && h("span", { class: "required-indicator" }, "*"), this.searchEnabled && (h("ui-input", { class: "button-group-search", placeholder: "Search...", value: this.searchQuery, prefixIcon: "search", iconLibrary: this.iconLibrary, showClear: true, size: "sm", onInputChange: (e) => this.handleSearch(e.detail), onInputClear: () => this.handleSearch(''), "aria-label": "Search toggles" }))));
    }
    renderHelperText() {
        if (this.invalid && this.errorMessage) {
            return (h("div", { class: "helper-text error" }, h("ui-icon", { name: "exclamation-circle", library: "fontawesome", size: "14px" }), this.errorMessage));
        }
        if (this.helperText) {
            return h("div", { class: "helper-text" }, this.helperText);
        }
        if (this.ariaLive) {
            return h("div", { class: "sr-only", "aria-live": "polite" }, this.ariaLive);
        }
        return null;
    }
    getFilteredButtons() {
        return this.searchEnabled && this.searchQuery
            ? this.buttons.filter(opt => (opt.label || opt.value).toLowerCase().includes(this.searchQuery.toLowerCase()))
            : this.buttons;
    }
    renderDropdownButton() {
        const filteredButtons = this.getFilteredButtons();
        const selectedOption = this.buttons.find(opt => opt.value === this.value);
        // Use fixed label if keepButtonLabel is true, otherwise show selected option label
        const displayLabel = this.keepButtonLabel ? this.buttonActionLabel : (selectedOption?.label || this.buttonActionLabel);
        const displayIcon = this.keepButtonLabel ? null : selectedOption?.icon;
        const buttonClasses = {
            'dropdown-button': true,
            'dropdown-button-open': this.isDropdownOpen,
            'dropdown-button-disabled': this.disabled,
            'dropdown-button-readonly': this.readonly,
            [`dropdown-button-${this.size}`]: true,
            [`dropdown-button-${this.color}`]: true,
            [`dropdown-button-${this.variant}`]: true,
            [`dropdown-button-${this.shape}`]: true,
        };
        const dropdownClasses = {
            'dropdown-menu': true,
            'dropdown-menu-open': this.isDropdownOpen,
        };
        return (h("div", { class: "dropdown-container" }, h("div", { class: buttonClasses }, h("ui-button", { variant: "ghost", class: "dropdown-action-button", onClick: this.handleButtonAction, disabled: this.disabled || this.loading, loading: this.loading, icon: displayIcon, iconLibrary: this.iconLibrary, label: displayLabel, size: this.size, color: this.color, justify: "center" }), h("ui-button", { variant: "ghost", class: "dropdown-toggle-button", onClick: this.handleDropdownToggle, disabled: this.disabled || this.loading, ariaLabel: this.isDropdownOpen ? 'Close dropdown' : 'Open dropdown', icon: this.isDropdownOpen ? 'chevron-up' : 'chevron-down', iconLibrary: "lucide", iconOnly: true, size: this.size, color: this.color })), h("div", { class: dropdownClasses }, this.searchEnabled && (h("div", { class: "dropdown-search" }, h("input", { type: "text", value: this.searchQuery, onInput: (e) => this.searchQuery = e.target.value, placeholder: "Search..." }))), this.customContent ? (h("div", { class: "dropdown-custom-content" }, h("slot", { name: "dropdown-content" }))) : (filteredButtons.map((option, idx) => {
            const isSelected = this.value === option.value;
            const optionClasses = {
                'dropdown-option': true,
                'dropdown-option-selected': isSelected,
                'dropdown-option-disabled': option.disabled,
            };
            return (h("div", { class: optionClasses, onClick: (e) => !option.disabled && this.handleOptionSelect(option.value, e), role: "option", "aria-selected": isSelected.toString(), style: { '--index': idx.toString() } }, option.icon && (h("div", { class: "option-icon" }, h("ui-icon", { name: option.icon, library: option.iconLibrary || this.iconLibrary, size: "16px" }))), option.avatarSrc && (h("div", { class: "option-avatar" }, h("img", { src: option.avatarSrc, alt: option.avatarAlt || option.label }), option.status && h("span", { class: `status-dot status-${option.status}` }))), h("span", { class: "option-label" }, option.label || option.value), isSelected && (h("div", { class: "option-check" }, h("ui-icon", { name: "check", library: "lucide", size: "14px" })))));
        })))));
    }
    render() {
        const containerClasses = {
            'ui-button-toggle-group': true,
            [`group-${this.orientation}`]: true,
            'group-disabled': this.disabled,
            'group-invalid': this.invalid,
            'group-full-width': this.fullWidth,
            'group-rtl': this.rtl,
            'group-multi-select': this.multiSelect,
            'group-single-select': !this.multiSelect,
            'group-dropdown-mode': this.mode === 'dropdown',
            [`group-${this.color}`]: true,
            [`group-variant-${this.variant}`]: true,
            [`group-size-${this.size}`]: true,
            [`group-shape-${this.shape}`]: true,
            [`theme-${this.advancedTheme}`]: !!this.advancedTheme,
            [`group-reveal-${this.reveal}`]: this.reveal !== 'none',
        };
        const buttonListClasses = {
            'button-list': true,
            [`button-list-${this.orientation}`]: true,
        };
        // Filter buttons by search
        const filteredButtons = this.getFilteredButtons();
        // Calculate dynamic theme colors based on the 'color' prop
        let indicatorBg = 'var(--color-primary, #10b981)';
        let indicatorColor = 'var(--color-primary-contrast, #ffffff)';
        if (typeof this.color === 'string') {
            if (this.color.startsWith('#') || this.color.startsWith('rgb')) {
                indicatorBg = this.color;
                // Simple contrast calculation for custom HEX
                if (this.color.startsWith('#') && this.color.length === 7) {
                    const r = parseInt(this.color.slice(1, 3), 16);
                    const g = parseInt(this.color.slice(3, 5), 16);
                    const b = parseInt(this.color.slice(5, 7), 16);
                    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;
                    indicatorColor = (yiq >= 128) ? '#1a1a1a' : '#ffffff';
                }
            }
            else {
                indicatorBg = `var(--color-${this.color})`;
                indicatorColor = `var(--color-${this.color}-contrast, #ffffff)`;
            }
        }
        else if (this.color && typeof this.color === 'object') {
            const from = this.color.from || '#10b981';
            const to = this.color.to || from;
            indicatorBg = `linear-gradient(135deg, ${from}, ${to})`;
            // For gradients, we default to white as it usually looks premium on vibrant colors
            indicatorColor = '#ffffff';
        }
        const hostStyles = {
            width: this.width,
            '--indicator-bg': indicatorBg,
            '--indicator-text-color': indicatorColor
        };
        return (h("div", { key: '2a8531e523b28208a24139e5424eaa90be9c7073', class: containerClasses, role: this.multiSelect ? 'group' : 'radiogroup', "aria-label": this.label, tabIndex: 0, style: hostStyles, onMouseMove: (e) => this.handleMouseMove(e), onMouseLeave: () => this.updateIndicator() }, this.renderLabel(), this.batchActions && (h("div", { key: 'e30632897c55499283fe0e6886bd7a3e7f590bad', class: "batch-actions" }, h("ui-button", { key: '407de40948622de1cc9e14fcdae9d9ce06d8ec8c', variant: "ghost", onClick: this.selectAll, disabled: this.disabled, label: "Select All", size: "sm" }), h("ui-button", { key: '19699cfd346bb5d7fa4bab0f56f0b8b55333d148', variant: "ghost", onClick: this.clearAll, disabled: this.disabled, label: "Clear All", size: "sm" }), this.exportEnabled && h("ui-button", { key: 'a3e66305b6edca7fc19394bd7413af5f5801fc5f', variant: "ghost", onClick: this.exportSelection, label: "Export", size: "sm" }), this.importEnabled && h("ui-button", { key: 'de9512a60ee5bfdef71b409f17be20f0c1d575a8', variant: "ghost", onClick: this.importSelection, label: "Import", size: "sm" }))), this.mode === 'dropdown' ? (this.renderDropdownButton()) : (h("div", { class: buttonListClasses }, !this.multiSelect && h("div", { class: "selection-indicator", ref: el => this.selectionIndicatorRef = el }), filteredButtons.map((option, idx) => (h("ui-button", { key: option.value, value: option.value, label: option.label, icon: option.icon, iconPosition: option.icon ? this.iconPosition : 'none', iconOnly: this.iconOnly, name: this.name, selected: this.multiSelect ? this.selectedValues.includes(option.value) : this.value === option.value, disabled: this.disabled || option.disabled, readonly: this.readonly, loading: this.loading, size: this.size, variant: this.variant, description: option.description, "description-position": option.descriptionPosition, "full-width": this.fullWidth, reveal: this.reveal, "reveal-delay": this.revealDelay + (idx * this.revealStagger), tabIndex: this.focusIndex === idx ? 0 : -1, "aria-checked": this.multiSelect ? this.selectedValues.includes(option.value) : this.value === option.value, "aria-label": option.label || option.value, onFocus: () => this.handleFocus(idx), onBlur: this.handleBlur, onClick: (e) => {
                e.stopPropagation();
                if (!this.disabled && !option.disabled) {
                    this.handleButtonToggleChange({ detail: { value: option.value } });
                }
            }, shape: this.shape, iconLibrary: option.iconLibrary || this.library || this.iconLibrary }))))), this.renderHelperText(), this.analyticsEnabled && (h("div", { key: 'cefc7fae744e3cc636c5b014a53fbb3ac07051f2', class: "analytics-info" }, h("pre", { key: '00a1e53ab91350e9a5c7cc753e782f64a48e4f99' }, JSON.stringify(this.analytics, null, 2))))));
    }
    // Premium and accessibility methods
    handleKeyDown = (e) => {
        if (this.disabled || this.readonly)
            return;
        const filteredButtons = this.searchEnabled && this.searchQuery
            ? this.buttons.filter(opt => (opt.label || opt.value).toLowerCase().includes(this.searchQuery.toLowerCase()))
            : this.buttons;
        if (filteredButtons.length === 0)
            return;
        if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
            this.focusIndex = (this.focusIndex + 1) % filteredButtons.length;
            this.focusButton(this.focusIndex);
            e.preventDefault();
        }
        else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
            this.focusIndex = (this.focusIndex - 1 + filteredButtons.length) % filteredButtons.length;
            this.focusButton(this.focusIndex);
            e.preventDefault();
        }
        else if (e.key === ' ' || e.key === 'Enter') {
            const option = filteredButtons[this.focusIndex];
            if (option && !option.disabled) {
                this.handleButtonToggleChange({ detail: { value: option.value } });
            }
            e.preventDefault();
        }
    };
    focusButton(idx) {
        const buttonList = this.el.shadowRoot?.querySelectorAll('ui-button') ?? [];
        if (buttonList[idx]) {
            buttonList[idx].focus();
        }
    }
    scheduleFocusIndexUpdate(nextIndex, shouldVerifyActiveElement = false) {
        if (this.focusFrameId !== null) {
            cancelAnimationFrame(this.focusFrameId);
        }
        this.focusFrameId = requestAnimationFrame(() => {
            this.focusFrameId = null;
            if (shouldVerifyActiveElement) {
                const activeElement = this.el.shadowRoot?.activeElement || document.activeElement;
                if (activeElement && this.el.contains(activeElement)) {
                    return;
                }
            }
            if (this.focusIndex !== nextIndex) {
                this.focusIndex = nextIndex;
            }
        });
    }
    handleFocus(idx) {
        this.scheduleFocusIndexUpdate(idx);
    }
    handleBlur = () => {
        this.scheduleFocusIndexUpdate(-1, true);
    };
    handleSearch(query) {
        this.searchQuery = query;
        this.buttonToggleGroupSearch.emit({ query });
    }
    selectAll = () => {
        if (!this.multiSelect)
            return;
        this.selectedValues = this.buttons.map(opt => opt.value);
        this.value = [...this.selectedValues];
        this.buttonToggleGroupBatch.emit({ values: this.selectedValues });
        this.ariaLive = `All selected: ${this.selectedValues.join(', ')}`;
    };
    clearAll = () => {
        if (!this.multiSelect)
            return;
        this.selectedValues = [];
        this.value = [];
        this.buttonToggleGroupBatch.emit({ values: [] });
        this.ariaLive = `Selection cleared`;
    };
    exportSelection = () => {
        if (!this.exportEnabled)
            return;
        let values;
        if (this.multiSelect) {
            values = Array.isArray(this.selectedValues) ? this.selectedValues : [];
        }
        else {
            values = typeof this.value === 'string' ? [this.value] : [];
        }
        this.buttonToggleGroupExport.emit({ values });
        this.ariaLive = `Exported: ${values.join(', ')}`;
    };
    importSelection = () => {
        if (!this.importEnabled)
            return;
        // For demo, just select first two
        this.selectedValues = this.buttons.slice(0, 2).map(opt => opt.value);
        this.value = [...this.selectedValues];
        this.buttonToggleGroupImport.emit({ values: this.selectedValues });
        this.ariaLive = `Imported: ${this.selectedValues.join(', ')}`;
    };
    trackAnalytics(event, value) {
        if (!this.analyticsEnabled)
            return;
        if (!this.analytics[event])
            this.analytics[event] = [];
        this.analytics[event].push({ value, timestamp: Date.now() });
        this.buttonToggleGroupAnalytics.emit({ event, value });
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": [{
                "watchValue": 0
            }],
        "color": [{
                "handleColorChange": 0
            }],
        "options": [{
                "handleOptionsChange": 0
            }]
    }; }
};
ButtonToggleGroup.style = buttonToggleGroupCss();

const contextMenuCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.ctx-menu{position:fixed;z-index:20000;min-width:220px;max-width:min(320px, 100vw - 16px);--ctx-bg:var(--bg-primary, #ffffff);--ctx-fg:var(--text-primary, #000000);--ctx-border:var(--border-default, #d9d9d9);--ctx-hover:var(--bg-secondary, #e6e6e6);--ctx-active:rgba(0, 138, 22, 0.08);--ctx-active-fg:var(--color-success, #008a16);--ctx-active-icon:var(--color-success, #008a16);background-color:var(--ctx-bg, #ffffff) !important;background-image:none !important;color:var(--ctx-fg);border:1px solid var(--ctx-border);border-radius:10px;box-shadow:0 12px 28px rgba(0, 0, 0, 0.22), 0 8px 10px rgba(0, 0, 0, 0.12), 0 0 0 1px rgba(0, 0, 0, 0.05);padding:6px;animation:ctx-enter 120ms ease-out;transform-origin:var(--ctx-origin-x, 0%) var(--ctx-origin-y, 0%);scrollbar-width:thin;scrollbar-color:rgba(0, 0, 0, 0.2) transparent}.ctx-menu::-webkit-scrollbar{width:8px}.ctx-menu::-webkit-scrollbar-track{background:transparent}.ctx-menu::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.2);border-radius:4px}.ctx-menu::-webkit-scrollbar-thumb:hover{background:rgba(0, 0, 0, 0.3)}.ctx-virtual-scroll{width:100%;position:relative}.ctx-virtual-spacer{position:relative;width:100%}.ctx-virtual-offset{position:absolute;inset:0;width:100%}:host([theme=dark]) .ctx-menu::-webkit-scrollbar-thumb,:host-context([data-theme=dark]) .ctx-menu::-webkit-scrollbar-thumb,:host-context(.dark) .ctx-menu::-webkit-scrollbar-thumb,html[data-theme=dark] :host .ctx-menu::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.2)}:host([theme=dark]) .ctx-menu,:host-context([data-theme=dark]) .ctx-menu,:host-context(.dark) .ctx-menu,html[data-theme=dark] :host .ctx-menu{--ctx-bg:var(--bg-primary, #1e293b);--ctx-fg:var(--bg-primary, #e2e8f0);--ctx-border:var(--color-primary, #334155);--ctx-hover:var(--color-primary, #334155);--ctx-active:rgba(0, 138, 22, 0.15);--ctx-active-fg:var(--color-success, #008a16);--ctx-active-icon:var(--color-success, #008a16);box-shadow:0 12px 28px rgba(0, 0, 0, 0.4), 0 8px 10px rgba(0, 0, 0, 0.2)}@keyframes ctx-enter{from{opacity:0;transform:scale(0.96)}to{opacity:1;transform:scale(1)}}.ctx-list{list-style:none;margin:0;padding:4px;overflow:visible;scrollbar-width:thin;scrollbar-color:rgba(0, 0, 0, 0.2) transparent}.ctx-list::-webkit-scrollbar{width:8px}.ctx-list::-webkit-scrollbar-track{background:transparent}.ctx-list::-webkit-scrollbar-thumb{background:rgba(0, 0, 0, 0.2);border-radius:4px}.ctx-list::-webkit-scrollbar-thumb:hover{background:rgba(0, 0, 0, 0.3)}:host([theme=dark]) .ctx-list::-webkit-scrollbar-thumb,:host-context([data-theme=dark]) .ctx-list::-webkit-scrollbar-thumb,:host-context(.dark) .ctx-list::-webkit-scrollbar-thumb,html[data-theme=dark] :host .ctx-list::-webkit-scrollbar-thumb{background:rgba(255, 255, 255, 0.2)}:host([theme=dark]) .ctx-list::-webkit-scrollbar-thumb:hover,:host-context([data-theme=dark]) .ctx-list::-webkit-scrollbar-thumb:hover,:host-context(.dark) .ctx-list::-webkit-scrollbar-thumb:hover,html[data-theme=dark] :host .ctx-list::-webkit-scrollbar-thumb:hover{background:rgba(255, 255, 255, 0.3)}.ctx-item{position:relative;display:block;border-radius:8px;cursor:pointer;user-select:none}.ctx-item:hover,.ctx-item-active{background:var(--ctx-hover, var(--bg-secondary, #f3f4f6))}.ctx-item-selected{background:var(--ctx-active, #e0f2fe);color:var(--ctx-active-fg, #0284c7);font-weight:600;position:relative}.ctx-item-selected::before{content:"";position:absolute;left:2px;top:50%;transform:translateY(-50%);width:4px;height:24px;background-color:var(--color-success, #008a16);border-radius:4px}.ctx-item-selected .ctx-icon-area{color:var(--ctx-active-icon, inherit)}.ctx-item-disabled{opacity:0.55;cursor:not-allowed}.ctx-icon-area{width:24px;height:24px;display:inline-flex;align-items:center;justify-content:center;color:var(--ctx-icon, var(--text-muted, #6b7280));font-size:14px;flex-shrink:0}.ctx-sub-arrow{color:var(--ctx-muted, var(--text-muted, #9ca3af));font-weight:600;justify-self:end}.ctx-divider{height:1px;margin:6px 8px;background:var(--ctx-divider, #e5e7eb)}.ctx-header{padding:8px 12px;font-size:11px;text-transform:uppercase;color:var(--ctx-muted, var(--text-muted, #9ca3af));font-weight:600;letter-spacing:0.5px;pointer-events:none}.ctx-item-danger{color:var(--color-danger, #ef4444);}.ctx-item-danger:hover{background:var(--bg-primary, #fee2e2);color:var(--color-danger, #b91c1c);}.ctx-item-danger .ctx-icon-area{color:currentColor}.ctx-description{display:block;font-size:11px;color:var(--ctx-muted, var(--text-muted, #6b7280));margin-top:2px;line-height:1.3}.ctx-text-content{display:flex;flex-direction:column;flex:1;min-width:0}.ctx-label-row{display:flex;align-items:center;justify-content:space-between;width:100%}.ctx-item-content{display:flex;align-items:center;gap:8px;padding:6px 10px;text-decoration:none;color:inherit;width:100%;box-sizing:border-box}.ctx-label{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.ctx-shortcut{margin-left:8px}.ctx-submenu{position:absolute;top:0;left:calc(100% + 4px);min-width:220px;max-width:min(320px, 100vw - 16px);background:var(--ctx-bg, var(--bg-primary, #ffffff));backdrop-filter:blur(20px) saturate(200%);-webkit-backdrop-filter:blur(20px) saturate(200%);border:1px solid var(--ctx-border, var(--border-default, #e5e7eb));border-radius:10px;box-shadow:0 12px 28px rgba(0, 0, 0, 0.25), 0 8px 10px rgba(0, 0, 0, 0.15);padding:6px;z-index:1000}.ctx-sub-left{left:auto;right:calc(100% + 4px)}@media (prefers-color-scheme: dark){.ctx-menu,.ctx-submenu{background:var(--ctx-bg, var(--bg-secondary, #111827));color:var(--ctx-fg, #f3f4f6);border-color:var(--ctx-border, var(--border-default, #374151));box-shadow:0 12px 28px rgba(0, 0, 0, 0.48), 0 8px 10px rgba(0, 0, 0, 0.35)}.ctx-item:hover,.ctx-item-active{background:var(--ctx-hover, var(--bg-primary, #1f2937))}.ctx-divider{background:var(--ctx-divider, #374151)}.ctx-muted,.ctx-shortcut,.ctx-sub-arrow{color:var(--text-muted, #9ca3af)}}:host([theme=green]) .ctx-menu,:host-context([data-theme=green]) .ctx-menu,:host-context(.green) .ctx-menu,html[data-theme=green] :host .ctx-menu,:host([theme=green]) .ctx-submenu,:host-context([data-theme=green]) .ctx-submenu,:host-context(.green) .ctx-submenu,html[data-theme=green] :host .ctx-submenu{--ctx-bg:var(--color-success, #3dcd58);--ctx-fg:var(--bg-primary, #ffffff);--ctx-border:rgba(255, 255, 255, 0.2);--ctx-hover:rgba(255, 255, 255, 0.1);--ctx-active:rgba(255, 255, 255, 0.2);--ctx-active-fg:var(--bg-primary, #ffffff);--ctx-active-icon:var(--bg-primary, #ffffff);--ctx-divider:rgba(255, 255, 255, 0.2);--ctx-muted:rgba(255, 255, 255, 0.7);box-shadow:0 12px 28px rgba(0, 0, 0, 0.2), 0 8px 10px rgba(0, 0, 0, 0.1)}:host([theme=green]) .ctx-shortcut,:host([theme=green]) .ctx-sub-arrow,:host-context([data-theme=green]) .ctx-shortcut,:host-context([data-theme=green]) .ctx-sub-arrow,:host-context(.green) .ctx-shortcut,:host-context(.green) .ctx-sub-arrow{color:rgba(255, 255, 255, 0.7)}@media (prefers-reduced-motion: reduce){.ctx-menu{animation:none}}`;

const UiContextMenu = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.itemSelect = createEvent(this, "itemSelect");
        this.menuItemClick = createEvent(this, "menuItemClick");
        this.longPress = createEvent(this, "longPress");
        this.menuToggle = createEvent(this, "menuToggle");
    }
    get hostEl() { return getElement(this); }
    /** Menu items, can be JSON string or array */
    items = [];
    internalItems = [];
    hasItemTemplate = false;
    onItemsChange() {
        this.internalItems = this.parseItems();
        this.resetVirtualScroll();
    }
    onLoadItemsChange() {
        this.resetVirtualScroll();
    }
    onVisibleCountChange() {
        this.resetVirtualScroll();
    }
    onPersistStateChange() {
        if (!this.persistState) {
            this.persistedState.clear();
        }
    }
    componentWillLoad() {
        this.internalItems = this.parseItems();
        this.detectItemTemplate();
    }
    /** Listen trigger on: contextmenu, click, hover */
    openOn = 'contextmenu';
    /** Placement of the menu relative to target: 'bottom' (default), 'top', 'right', 'left' */
    placement = 'bottom';
    /** Optional CSS selector for a target element to attach the context menu */
    target;
    onTargetChange() {
        this.attachTarget();
    }
    /** Close menu when selecting an item */
    closeOnSelect = true;
    /** Pixel padding from viewport edges */
    viewportPadding = 16;
    /** Delay for submenu opening on hover (ms) */
    submenuOpenDelay = 120;
    /** Delay for closing menu on mouse leave (ms) */
    hoverCloseDelay = 50;
    /** Attach to slotted target only; otherwise listen at document */
    targetOnly = false;
    /** Reserve space for icons area even if item has no icon */
    theme = 'light';
    reserveIconSpace = true;
    /** Keep checkbox/radio state even if the menu re-opens */
    persistState = false;
    /** Duration needed for a touch to be treated as a long press (ms) */
    longPressDuration = 500;
    /** Set to a positive value (with `itemHeight`) to enable virtualized rendering of the root list. */
    visibleCount = 0;
    /** Fixed per-item height (px) used when virtualization is active so offsets can be calculated. */
    itemHeight = 48;
    /** Optional async loader for paginated/virtualized root items (return `[]` when no further data is available). */
    loadItems;
    /** ID of the currently selected item (for persistent highlighting) */
    selectedId;
    /** Default library for icons */
    iconLibrary = 'default';
    /** Emits when an item is selected */
    itemSelect;
    /** Alias event used by existing demos */
    menuItemClick;
    /** Emits when the menu opens via a long press */
    longPress;
    /** Emits when menu toggles */
    menuToggle;
    /** Hook invoked before menu opens; return false or rejected Promise to cancel */
    beforeOpen;
    /** Hook invoked before menu closes; return false or rejected Promise to cancel */
    beforeClose;
    open = false;
    pos = { x: 0, y: 0 };
    activePath = []; // indices per level
    hoverPath = []; // used for hover tracking
    typeahead = '';
    submenuSide = []; // computed per level
    virtualStart = 0;
    loadingVirtual = false;
    rootMenuEl;
    openTimeout;
    closeTimeout; // For root menu hover
    lastKeyTime = 0;
    keyBuffer = '';
    slottedTarget;
    lastAnchorEls = [];
    targetElement;
    longPressTimer;
    virtualScrollEl;
    persistedState = new Map();
    virtualHasMore = true;
    templateObserver;
    componentDidLoad() {
        this.attachTarget();
        this.detectItemTemplate();
        this.setupTemplateObserver();
        this.scheduleInitialLoad();
        document.addEventListener('click', this.onGlobalClick, { capture: true });
        document.addEventListener('contextmenu', this.onGlobalContextMenu, { capture: true });
        window.addEventListener('resize', this.onWindowResize);
        window.addEventListener('scroll', this.onWindowResize, true);
        window.addEventListener('uiContextMenuOpen', this.handleOtherMenuOpen);
    }
    disconnectedCallback() {
        this.disconnectTemplateObserver();
        document.removeEventListener('click', this.onGlobalClick, { capture: true });
        document.removeEventListener('contextmenu', this.onGlobalContextMenu, { capture: true });
        window.removeEventListener('resize', this.onWindowResize);
        window.removeEventListener('scroll', this.onWindowResize, true);
        window.removeEventListener('uiContextMenuOpen', this.handleOtherMenuOpen);
    }
    handleOtherMenuOpen = (e) => {
        // Close if another menu opened and it's not us or one of our submenus calling it
        if (e.detail && e.detail.source !== this.hostEl) {
            this.close();
        }
    };
    detectItemTemplate() {
        this.hasItemTemplate = !!this.hostEl.querySelector('template[slot="item"]');
    }
    setupTemplateObserver() {
        if (this.templateObserver)
            return;
        if (typeof globalThis.MutationObserver === 'undefined') {
            return;
        }
        this.templateObserver = new MutationObserver(() => {
            this.detectItemTemplate();
        });
        this.templateObserver.observe(this.hostEl, { childList: true, subtree: true });
    }
    disconnectTemplateObserver() {
        this.templateObserver?.disconnect();
        this.templateObserver = undefined;
    }
    scheduleInitialLoad() {
        if (this.loadItems) {
            this.loadMoreItems();
        }
    }
    ensureVirtualItems() {
        if (!this.loadItems)
            return;
        if (this.virtualHasMore && !this.loadingVirtual) {
            this.loadMoreItems();
        }
    }
    resetVirtualScroll() {
        this.virtualStart = 0;
        this.virtualHasMore = true;
        this.loadingVirtual = false;
        if (this.virtualScrollEl) {
            this.virtualScrollEl.scrollTop = 0;
        }
        this.ensureVirtualItems();
    }
    async loadMoreItems(limitOverride) {
        if (!this.loadItems || this.loadingVirtual || !this.virtualHasMore)
            return;
        this.loadingVirtual = true;
        const offset = this.internalItems.length;
        const limit = limitOverride ?? Math.max(this.visibleCount || 1, 8);
        try {
            const promise = this.loadItems(offset, limit);
            const newItems = await promise;
            if (newItems && newItems.length) {
                const normalized = this.normalizeItems(newItems);
                this.internalItems = [...this.internalItems, ...normalized];
                if (newItems.length < limit) {
                    this.virtualHasMore = false;
                }
            }
            else {
                this.virtualHasMore = false;
            }
        }
        catch {
            this.virtualHasMore = false;
        }
        finally {
            this.loadingVirtual = false;
        }
    }
    handleVirtualScroll = (event) => {
        const target = event.currentTarget;
        if (!target)
            return;
        const start = Math.floor(target.scrollTop / Math.max(1, this.itemHeight));
        if (start !== this.virtualStart) {
            this.virtualStart = start;
        }
        this.maybeLoadMoreFromScroll(target);
    };
    maybeLoadMoreFromScroll(el) {
        if (!this.loadItems || this.loadingVirtual || !this.virtualHasMore)
            return;
        const threshold = this.itemHeight * 2;
        if (el.scrollTop + el.clientHeight >= el.scrollHeight - threshold) {
            this.loadMoreItems();
        }
    }
    get virtualizationActive() {
        return this.visibleCount > 0 && this.itemHeight > 0;
    }
    getVirtualWindow(total) {
        const visible = Math.min(Math.max(this.visibleCount, 1), total || 1);
        const maxStart = Math.max(0, total - visible);
        const start = Math.min(this.virtualStart, maxStart);
        if (start !== this.virtualStart) {
            this.virtualStart = start;
        }
        const buffer = 2;
        const end = Math.min(total, start + visible + buffer);
        const topPadding = start * this.itemHeight;
        const bottomPadding = Math.max(0, (total - end) * this.itemHeight);
        return { start, end, visible, topPadding, bottomPadding, containerHeight: visible * this.itemHeight };
    }
    async evaluateHook(hook) {
        if (!hook)
            return true;
        try {
            const result = hook();
            if (result && typeof result.then === 'function') {
                return (await result) !== false;
            }
            return result !== false;
        }
        catch {
            return false;
        }
    }
    attachTarget() {
        // Explicit target selector takes precedence
        if (this.target) {
            try {
                // Try finding in Shadow Root / Current Scope first
                const root = this.hostEl.getRootNode();
                let el = root.querySelector(this.target);
                // Fallback to global document
                if (!el) {
                    el = document.querySelector(this.target);
                }
                if (el) {
                    this.targetElement = el;
                    this.bindEvents(el);
                }
            }
            catch { }
        }
        // Fallback to slotted target
        if (!this.targetElement) {
            const slot = this.hostEl.shadowRoot?.querySelector('slot');
            if (slot) {
                const assigned = slot.assignedElements();
                if (assigned.length > 0) {
                    this.slottedTarget = assigned[0];
                    this.targetElement = this.slottedTarget;
                    this.bindEvents(this.slottedTarget);
                }
            }
        }
    }
    bindEvents(el) {
        if (this.openOn === 'hover') {
            el.addEventListener('mouseenter', this.onTargetMouseEnter);
            el.addEventListener('mouseleave', this.onTargetMouseLeave);
            el.addEventListener('click', this.onTargetClick);
        }
        else {
            const evt = this.openOn === 'click' ? 'click' : 'contextmenu';
            el.addEventListener(evt, this.onTargetTrigger);
        }
        // Mobile Long Press Support
        el.addEventListener('touchstart', this.onTouchStart, { passive: true });
        el.addEventListener('touchend', this.onTouchEnd, { passive: true });
        el.addEventListener('touchmove', this.onTouchMove, { passive: true });
    }
    normalizeItems(items) {
        // Map 'separator' to 'divider' for internal handling
        return (items || []).map(it => {
            const copy = { ...it };
            if (copy.separator === true)
                copy.divider = true;
            if (copy.children && copy.children.length)
                copy.children = this.normalizeItems(copy.children);
            this.applyPersistedState(copy);
            return copy;
        });
    }
    applyPersistedState(item) {
        if (this.persistState && item.id) {
            const saved = this.persistedState.get(String(item.id));
            if (saved && saved.checked !== undefined) {
                item.checked = saved.checked;
            }
        }
        if (item.children) {
            item.children.forEach(child => this.applyPersistedState(child));
        }
    }
    parseItems() {
        let arr = [];
        if (typeof this.items === 'string') {
            try {
                arr = JSON.parse(this.items);
            }
            catch {
                arr = [];
            }
        }
        else {
            arr = this.items || [];
        }
        return this.normalizeItems(arr);
    }
    onTargetTrigger = (e) => {
        if (this.openOn === 'contextmenu')
            e.preventDefault();
        const point = { x: e.clientX, y: e.clientY };
        this.openAt(point);
    };
    onTargetMouseEnter = (e) => {
        if (this.closeTimeout)
            clearTimeout(this.closeTimeout);
        const target = e.currentTarget;
        const rect = target.getBoundingClientRect();
        if (this.placement === 'top') {
            this.openAt({ x: rect.left, y: rect.top });
        }
        else if (this.placement === 'right') {
            this.openAt({ x: rect.right, y: rect.top });
        }
        else if (this.placement === 'left') {
            this.openAt({ x: rect.left, y: rect.top });
        }
        else {
            // Bottom
            this.openAt({ x: rect.left, y: rect.bottom });
        }
    };
    onTargetMouseLeave = () => {
        this.closeTimeout = window.setTimeout(() => {
            this.close();
        }, this.hoverCloseDelay);
    };
    onTargetClick = (_e) => {
        // If clicking trigger while hover mode, maybe toggle? or prevent default?
        // For now, do nothing or user preference
    };
    onTouchStart = (e) => {
        if (this.openOn !== 'contextmenu')
            return;
        this.longPressTimer = setTimeout(() => {
            const touch = e.touches[0];
            const point = { x: touch.clientX, y: touch.clientY };
            this.openAt(point);
            this.longPress.emit(point);
        }, this.longPressDuration);
    };
    onTouchEnd = () => {
        if (this.longPressTimer)
            clearTimeout(this.longPressTimer);
    };
    onTouchMove = () => {
        if (this.longPressTimer)
            clearTimeout(this.longPressTimer);
    };
    onMenuMouseEnter = () => {
        if (this.closeTimeout)
            clearTimeout(this.closeTimeout);
    };
    onMenuMouseLeave = () => {
        this.onTargetMouseLeave();
    };
    onGlobalContextMenu = (e) => {
        if (this.targetOnly)
            return;
        if (this.openOn !== 'contextmenu')
            return;
        // If explicit target provided, only open when inside that target
        if (this.targetElement && !this.targetElement.contains(e.target))
            return;
        if (this.hostEl.contains(e.target))
            return; // ignore inside shadow host
        e.preventDefault();
        const point = { x: e.clientX, y: e.clientY };
        this.openAt(point);
    };
    onGlobalClick = (e) => {
        if (!this.open)
            return;
        const target = e.target;
        const composedPath = typeof e.composedPath === 'function' ? e.composedPath() : [];
        const clickedInsideHost = composedPath.includes(this.hostEl);
        const clickedInsideTarget = this.targetElement ? composedPath.includes(this.targetElement) : false;
        const clickedInsideShadowRoot = !!this.hostEl.shadowRoot?.contains(target);
        const clickedInsideMenu = !!this.rootMenuEl?.contains(target);
        // Close if clicked outside menu or clicking non-left button
        if (!clickedInsideHost
            && !clickedInsideTarget
            && !clickedInsideShadowRoot
            && !clickedInsideMenu
            && !this.hostEl.contains(target)
            && (!this.targetElement || !this.targetElement.contains(target))) {
            this.close();
        }
    };
    onWindowResize = () => {
        if (!this.open)
            return;
        // Re-clamp position on resize/scroll
        requestAnimationFrame(() => this.clampRootPosition());
    };
    async openAt(point) {
        if (!await this.evaluateHook(this.beforeOpen)) {
            return;
        }
        this.open = true;
        this.pos = { ...point };
        this.activePath = [];
        this.hoverPath = [];
        this.submenuSide = [];
        // Only emit event if component is still connected to DOM
        if (this.hostEl.isConnected) {
            this.menuToggle.emit(true);
            window.dispatchEvent(new CustomEvent('uiContextMenuOpen', {
                detail: { source: this.hostEl }
            }));
        }
        requestAnimationFrame(() => {
            this.rootMenuEl = this.hostEl.shadowRoot?.querySelector('.ctx-menu');
            this.clampRootPosition();
            // Focus for keyboard navigation
            this.rootMenuEl?.querySelector('[role="menu"]')?.focus();
        });
    }
    async close() {
        if (this.open && await this.evaluateHook(this.beforeClose)) {
            this.open = false;
            // Only emit event if component is still connected to DOM
            if (this.hostEl.isConnected) {
                this.menuToggle.emit(false);
            }
            this.activePath = [];
            this.hoverPath = [];
            this.submenuSide = [];
        }
    }
    clampRectToViewport(rect, padding) {
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        const dx = Math.min(0, vw - padding - rect.right) + Math.max(0, padding - rect.left);
        const dy = Math.min(0, vh - padding - rect.bottom) + Math.max(0, padding - rect.top);
        return { dx, dy };
    }
    clampRootPosition() {
        if (!this.rootMenuEl)
            return;
        const el = this.rootMenuEl;
        const padding = this.viewportPadding;
        const vh = window.innerHeight;
        // Clamp position to viewport
        const rect = el.getBoundingClientRect();
        const { dx, dy } = this.clampRectToViewport(rect, padding);
        let newX = Math.round(this.pos.x + dx);
        let newY = Math.round(this.pos.y + dy);
        // Prevent the menu from going off the left or top edge of the screen completely
        if (newX < padding)
            newX = padding;
        if (newY < padding)
            newY = padding;
        this.pos = { x: newX, y: newY };
        // Clamp height if menu is taller than viewport from its current position
        const availableHeight = vh - padding - newY;
        if (!this.virtualizationActive) {
            if (rect.height > availableHeight) {
                el.style.maxHeight = `${availableHeight}px`;
                el.style.overflowY = 'auto';
            }
            else {
                el.style.maxHeight = '';
                el.style.overflowY = '';
            }
        }
        else {
            el.style.maxHeight = '';
            el.style.overflowY = '';
        }
        // Update transform origin for nicer animation
        const originX = (dx < 0) ? '100%' : (dx > 0) ? '0%' : '50%';
        const originY = (dy < 0) ? '100%' : (dy > 0) ? '0%' : '50%';
        el.style.setProperty('--ctx-origin-x', originX);
        el.style.setProperty('--ctx-origin-y', originY);
    }
    openSubmenu(level, index, anchorEl) {
        // Compute submenu side based on viewport space
        const anchorRect = anchorEl.getBoundingClientRect();
        const spaceRight = window.innerWidth - anchorRect.right;
        const spaceLeft = anchorRect.left;
        const side = spaceRight >= 240 || spaceRight >= spaceLeft ? 'right' : 'left';
        this.submenuSide = [...this.submenuSide.slice(0, level), side];
        // Update active path
        this.activePath = [...this.activePath.slice(0, level), index];
        this.lastAnchorEls[level] = anchorEl;
        // After render, adjust submenu position to keep within viewport
        this.scheduleSubmenuPosition(level);
    }
    handleMouseEnterItem(level, index, el) {
        window.clearTimeout(this.openTimeout);
        this.openTimeout = window.setTimeout(() => {
            this.openSubmenu(level, index, el);
            this.hoverPath = [...this.activePath];
        }, this.submenuOpenDelay);
    }
    handleClickItem(item, path, ev) {
        if (item.disabled || item.divider)
            return;
        if (item.children && item.children.length > 0) {
            // open submenu immediately on click
            const target = ev.currentTarget;
            const level = path.length - 1;
            this.openSubmenu(level, path[level], target);
            return;
        }
        // Handle State Changes
        if (item.type === 'checkbox') {
            item.checked = !item.checked;
            this.internalItems = [...this.internalItems]; // trigger render
        }
        else if (item.type === 'radio') {
            // Find siblings and uncheck them
            const parentItems = path.length > 1
                ? this.getItemsAtPath(path.slice(0, -1))
                : this.internalItems;
            parentItems.forEach(it => {
                if (it.type === 'radio')
                    it.checked = false;
            });
            item.checked = true;
            this.internalItems = [...this.internalItems]; // trigger render
        }
        this.itemSelect.emit({ item, path });
        this.menuItemClick.emit({ item, path });
        // Don't close for checkboxes/radios usually, but let's stick to prop unless overridden?
        // Standard behavior: clicking checkbox keeps menu open.
        if (item.type !== 'checkbox' && item.type !== 'radio' && this.closeOnSelect) {
            this.close();
        }
    }
    getItemsAtPath(path) {
        // Use internalItems instead of parsing prop again
        let options = this.internalItems;
        for (const idx of path) {
            const node = options[idx];
            if (!node || !node.children)
                return [];
            options = node.children;
        }
        return options;
    }
    navMove(level, delta) {
        const items = this.getItemsAtPath(this.activePath.slice(0, level + 1));
        const currentIndex = this.activePath[level] ?? -1;
        let nextIdx = currentIndex + delta;
        const clamp = (i) => Math.max(0, Math.min(i, items.length - 1));
        // Skip dividers/disabled
        const isSelectable = (i) => {
            const it = items[i];
            return it && !it.divider && !it.disabled;
        };
        nextIdx = clamp(nextIdx);
        while (!isSelectable(nextIdx) && (delta > 0 ? nextIdx < items.length - 1 : nextIdx > 0)) {
            nextIdx = clamp(nextIdx + delta);
        }
        this.activePath = [...this.activePath.slice(0, level), nextIdx];
        // Try positioning submenu if it opens due to selection change
        const anchor = this.getAnchorElForLevel(level);
        if (anchor)
            this.scheduleSubmenuPosition(level);
    }
    keydown = (e) => {
        if (!this.open)
            return;
        const level = this.activePath.length ? this.activePath.length - 1 : 0;
        const currentLevelItems = this.getItemsAtPath(this.activePath.slice(0, level + 1));
        const currentIndex = this.activePath[level] ?? 0;
        const currentItem = currentLevelItems[currentIndex];
        switch (e.key) {
            case 'ArrowDown':
                e.preventDefault();
                this.navMove(level, 1);
                break;
            case 'ArrowUp':
                e.preventDefault();
                this.navMove(level, -1);
                break;
            case 'ArrowRight': {
                e.preventDefault();
                if (currentItem?.children?.length) {
                    this.activePath = [...this.activePath, 0];
                    this.submenuSide = [...this.submenuSide, 'right'];
                    const anchor = this.getAnchorElForLevel(level);
                    if (anchor)
                        this.scheduleSubmenuPosition(level);
                }
                break;
            }
            case 'ArrowLeft': {
                e.preventDefault();
                if (this.activePath.length > 0) {
                    this.activePath = this.activePath.slice(0, -1);
                    this.submenuSide = this.submenuSide.slice(0, -1);
                }
                else {
                    this.close();
                }
                break;
            }
            case 'Enter': {
                e.preventDefault();
                if (currentItem)
                    this.itemSelect.emit({ item: currentItem, path: [...this.activePath] });
                if (this.closeOnSelect)
                    this.close();
                break;
            }
            case 'Escape':
                this.close();
                break;
            default: {
                // typeahead
                if (e.key.length === 1) {
                    const now = Date.now();
                    if (now - this.lastKeyTime > 800) {
                        this.keyBuffer = '';
                    }
                    this.lastKeyTime = now;
                    this.keyBuffer += e.key.toLowerCase();
                    const items = this.getItemsAtPath(this.activePath.slice(0, level + 1));
                    const idx = items.findIndex(it => !it.divider && !it.disabled && it.label && it.label.toLowerCase().startsWith(this.keyBuffer));
                    if (idx >= 0) {
                        this.activePath = [...this.activePath.slice(0, level), idx];
                    }
                }
            }
        }
    };
    getAnchorElForLevel(level) {
        // Find the LI element corresponding to activePath[level]
        try {
            const root = this.hostEl.shadowRoot?.querySelector('.ctx-menu > .ctx-list');
            if (!root)
                return undefined;
            let ul = root;
            for (let i = 0; i <= level; i++) {
                const idx = this.activePath[i];
                if (idx == null)
                    return undefined;
                const lis = ul.querySelectorAll(':scope > .ctx-item');
                const li = lis[idx];
                if (!li)
                    return undefined;
                if (i === level)
                    return li;
                // Next level UL resides inside submenu of this LI
                const nextUl = li.querySelector(':scope > .ctx-submenu > .ctx-list');
                if (!nextUl)
                    return undefined;
                ul = nextUl;
            }
        }
        catch { }
        return undefined;
    }
    scheduleSubmenuPosition(level) {
        requestAnimationFrame(() => this.positionSubmenu(level));
    }
    positionSubmenu(level) {
        const anchorEl = this.lastAnchorEls[level] || this.getAnchorElForLevel(level);
        if (!anchorEl)
            return;
        const submenu = anchorEl.querySelector(':scope > .ctx-submenu');
        if (!submenu)
            return;
        const padding = this.viewportPadding;
        const vw = window.innerWidth;
        const vh = window.innerHeight;
        // Measure submenu
        const rect = submenu.getBoundingClientRect();
        const anchorRect = anchorEl.getBoundingClientRect();
        // Horizontal flip if needed
        const overflowRight = rect.right > vw - padding;
        const overflowLeft = rect.left < padding;
        const side = this.submenuSide[level] || 'right';
        if ((side === 'right' && overflowRight) || (side === 'left' && overflowLeft)) {
            const spaceRight = vw - anchorRect.right;
            const spaceLeft = anchorRect.left;
            const desiredSide = spaceLeft > spaceRight ? 'left' : 'right';
            if (desiredSide !== side) {
                this.submenuSide = [...this.submenuSide.slice(0, level), desiredSide];
                // Re-run after flip renders
                requestAnimationFrame(() => this.positionSubmenu(level));
                return;
            }
        }
        // Vertical shift to keep within viewport
        let offsetY = 0;
        const afterRect = submenu.getBoundingClientRect();
        if (afterRect.bottom > vh - padding) {
            offsetY -= Math.ceil(afterRect.bottom - (vh - padding));
        }
        let newTop = afterRect.top + offsetY;
        if (newTop < padding) {
            offsetY += Math.ceil(padding - newTop);
            newTop = padding;
        }
        // Apply offset if any
        if (offsetY !== 0) {
            submenu.style.top = `${offsetY}px`;
        }
        else {
            submenu.style.top = '0px';
        }
        // Clamp height if submenu is taller than viewport from its current position
        const availableHeight = vh - padding - newTop;
        if (afterRect.height > availableHeight) {
            submenu.style.maxHeight = `${availableHeight}px`;
            submenu.style.overflowY = 'auto';
        }
        else {
            submenu.style.maxHeight = '';
            submenu.style.overflowY = '';
        }
    }
    renderItems(items, level, baseIndex = 0) {
        const activeIdx = this.activePath[level] ?? -1;
        const side = this.submenuSide[level] || 'right';
        const hasIcons = items.some(i => !!i.icon || i.checked !== undefined || i.type === 'checkbox' || i.type === 'radio' || (i.id && i.id === this.selectedId) || !!i.iconTemplate);
        const shouldReserve = this.reserveIconSpace && hasIcons;
        const parentPath = this.activePath.slice(0, level);
        return (h("ul", { class: { 'ctx-list': true, 'ctx-list-no-icons': !shouldReserve }, role: "menu", tabindex: 0, onKeyDown: this.keydown }, items.map((item, idx) => {
            if (item.divider || item.type === 'separator') {
                return h("li", { class: "ctx-divider", role: "separator" });
            }
            if (item.type === 'header') {
                return h("li", { class: "ctx-header", role: "presentation" }, item.label);
            }
            const actualIndex = baseIndex + idx;
            const isActive = actualIndex === activeIdx;
            const hasChildren = !!item.children?.length;
            const Tag = (item.href && !item.disabled && !hasChildren) ? 'a' : 'div';
            const attrs = (item.href && !item.disabled && !hasChildren) ? { href: item.href } : {};
            const isDanger = item.variant === 'danger';
            const isSelected = !!(item.id && item.id === this.selectedId);
            const path = [...parentPath, actualIndex];
            const slotProps = {
                name: 'item',
                item,
                index: actualIndex,
                level,
                path,
                checked: !!(item.checked || isSelected),
                active: isActive,
                hasChildren,
                disabled: !!item.disabled,
                variant: item.variant,
            };
            const defaultMarkup = (h(Tag, { class: "ctx-item-content", ...attrs }, (shouldReserve || item.icon || item.checked !== undefined || isSelected || item.iconTemplate) && (h("span", { class: "ctx-icon-area" }, item.iconTemplate ? (h("span", { class: "ctx-icon-slot", innerHTML: sanitizeHTML(item.iconTemplate) })) : item.icon ? (h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.2em" })) : (item.checked || isSelected ? (h("ui-icon", { name: "check", library: "lucide", size: "1.2em" })) : ''))), h("div", { class: "ctx-text-content" }, h("div", { class: "ctx-label-row" }, h("span", { class: "ctx-label" }, item.label), item.shortcut && h("span", { class: "ctx-shortcut" }, item.shortcut)), item.description && h("span", { class: "ctx-description" }, item.description)), hasChildren && (h("span", { class: "ctx-sub-arrow" }, h("ui-icon", { name: "chevron-right", library: "lucide", size: "12px" })))));
            return (h("li", { class: {
                    'ctx-item': true,
                    'ctx-item-active': isActive,
                    'ctx-item-selected': isSelected,
                    'ctx-item-disabled': !!item.disabled,
                    'ctx-item-danger': isDanger,
                    'ctx-item-has-children': hasChildren,
                }, role: item.type === 'checkbox' ? 'menuitemcheckbox' : item.type === 'radio' ? 'menuitemradio' : 'menuitem', "aria-checked": item.checked || isSelected ? 'true' : 'false', "aria-haspopup": hasChildren ? 'menu' : null, "aria-disabled": item.disabled ? 'true' : null, onMouseEnter: (ev) => this.handleMouseEnterItem(level, actualIndex, ev.currentTarget), onClick: (ev) => this.handleClickItem(item, path, ev) }, h("slot", { ...slotProps }, defaultMarkup), hasChildren && isActive && (h("div", { class: { 'ctx-submenu': true, [`ctx-sub-${side}`]: true } }, this.renderItems(item.children, level + 1)))));
        })));
    }
    render() {
        const items = this.internalItems;
        let transform = '';
        if (this.placement === 'top')
            transform = 'translateY(-100%)';
        else if (this.placement === 'left')
            transform = 'translateX(-100%)';
        const shouldVirtualize = this.virtualizationActive && (this.loadItems || items.length > this.visibleCount);
        const windowInfo = shouldVirtualize && items.length > 0 ? this.getVirtualWindow(items.length) : null;
        return (h(Host, { key: 'c2181afce5b7b4ef2d7df5a2d991bb70d41f27cb' }, h("slot", { key: '4142323103c62c98771ce563dfb0618ab88de56d' }), this.open && (h("div", { key: '9326f1949e3f13b96d4641ebea1cf8496014ae15', class: "ctx-menu", style: {
                position: 'fixed',
                zIndex: '11000',
                left: `${this.pos.x}px`,
                top: `${this.pos.y}px`,
                transform: transform
            }, onMouseEnter: this.onMenuMouseEnter, onMouseLeave: this.onMenuMouseLeave }, windowInfo ? (h("div", { class: "ctx-virtual-scroll", ref: el => (this.virtualScrollEl = el || undefined), style: {
                height: `${windowInfo.containerHeight}px`,
                overflowY: 'auto'
            }, onScroll: this.handleVirtualScroll }, h("div", { class: "ctx-virtual-spacer", style: { height: `${items.length * this.itemHeight}px` } }, h("div", { class: "ctx-virtual-offset", style: { transform: `translateY(${windowInfo.topPadding}px)` } }, this.renderItems(items.slice(windowInfo.start, windowInfo.end), 0, windowInfo.start), this.loadingVirtual && (h("div", { class: "ctx-virtual-loader", style: { height: `${this.itemHeight}px` } }, h("ui-loader", { type: "dots", size: "xs" }))))))) : (this.renderItems(items, 0))))));
    }
    static get watchers() { return {
        "items": [{
                "onItemsChange": 0
            }],
        "loadItems": [{
                "onLoadItemsChange": 0
            }],
        "visibleCount": [{
                "onVisibleCountChange": 0
            }],
        "persistState": [{
                "onPersistStateChange": 0
            }],
        "target": [{
                "onTargetChange": 0
            }]
    }; }
};
UiContextMenu.style = contextMenuCss();

const iconCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:inline-flex;align-items:center;justify-content:center;overflow:visible;line-height:1;vertical-align:middle;color:inherit;}.material-symbols-outlined{font-family:"Material Symbols Outlined" !important;font-weight:normal;font-style:normal;font-size:1em;line-height:1;letter-spacing:normal;text-transform:none;display:inline-block;white-space:nowrap;word-wrap:normal;direction:ltr;-webkit-font-smoothing:antialiased;text-rendering:optimizeLegibility;-moz-osx-font-smoothing:grayscale;font-feature-settings:"liga"}.icon-container{display:flex;align-items:center;justify-content:center;line-height:1;user-select:none;width:100%;height:100%}.icon-container svg,.icon-container .lucide-wrapper svg{display:block;width:100%;height:100%}.icon-container img{display:block;width:100%;height:100%;object-fit:contain}.icon-container i{font-size:inherit;color:inherit;line-height:1;display:flex;align-items:center;justify-content:center;width:1em;height:1em}.emoji-icon{font-family:"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif;font-style:normal;font-size:inherit;line-height:1;color:unset;display:inline-flex;align-items:center;justify-content:center;user-select:none}.fa-spin{animation:fa-spin 2s infinite linear}@keyframes fa-spin{0%{transform:rotate(0deg)}100%{transform:rotate(359deg)}}`;

const Icon = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
    }
    /**
     * The name of the icon
     */
    name;
    /**
     * The library to use for the icon.
     * Options: 'se' (Schneider Electric), 'fontawesome', 'icons8', 'iconoir', 'ionicons', 'lucide', 'bootstrap', 'google' (Material Symbols), 'remixicon', 'emoji' (renders the name as a native emoji), or 'default' (URL/SVG/Text)
     */
    library = 'default';
    /**
     * Optional source URL for an image icon
     */
    src;
    /**
     * The size of the icon (e.g., '16px', '2rem', or a number)
     * For 'se', 'ionicons', and 'lucide', this maps to specific library behavior.
     */
    size;
    /**
     * Optional fill color for the icon (works with 'lucide' and 'google')
     */
    fill;
    /**
     * The color of the icon
     */
    /**
     * The color of the icon
     */
    color;
    /**
     * Whether the icon should spin
     */
    spin = false;
    /**
     * Accessible label for the icon. If provided, the icon will have role="img" and an aria-label.
     * If not provided, the icon is considered decorative (aria-hidden="true").
     */
    label;
    /**
     * Whether the icon is in a loading state. Shows a small loader.
     */
    loading = false;
    fetchedSvg = '';
    isFetching = false;
    get el() { return getElement(this); }
    lucideContainer;
    static lucideLoadingPromise = null;
    static svgCache = new Map();
    handleIconChange() {
        this.initLucide();
        this.loadRemoteSvg();
    }
    componentWillLoad() {
        this.loadRemoteSvg();
    }
    componentDidLoad() {
        this.initLucide();
        this.ensureLibraryStyles();
    }
    componentDidUpdate() {
        this.initLucide();
        this.ensureLibraryStyles();
    }
    async loadRemoteSvg() {
        const lib = (this.library || 'default').trim().toLowerCase();
        const nameStr = (this.name || '').trim();
        // 1. Guard: Don't fetch if name is missing or if the library doesn't actually use the fetched SVG
        // Bootstrap icons are rendered via Font-CSS (<i> tags), so fetching the SVG is redundant and risky.
        if (!nameStr || (lib !== 'iconoir' && lib !== 'custom' && lib !== 'default')) {
            this.fetchedSvg = '';
            return;
        }
        let url = '';
        if (lib === 'iconoir') {
            const iconName = nameStr.startsWith('iconoir-') ? nameStr.replace('iconoir-', '') : nameStr;
            url = `https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/icons/regular/${iconName}.svg`;
        }
        if (!url) {
            this.fetchedSvg = '';
            return;
        }
        if (Icon.svgCache.has(url)) {
            this.fetchedSvg = Icon.svgCache.get(url);
            return;
        }
        this.isFetching = true;
        try {
            const resp = await fetch(url);
            if (resp.ok) {
                const svg = await resp.text();
                // Simple sanitization/strip width/height for container flow
                const sanitized = svg.replace(/width=".*?"/, 'width="100%"').replace(/height=".*?"/, 'height="100%"');
                Icon.svgCache.set(url, sanitized);
                this.fetchedSvg = sanitized;
            }
        }
        catch (_e) {
            this.fetchedSvg = '';
        }
        finally {
            this.isFetching = false;
        }
    }
    // Duplicate removed: componentDidUpdate
    async initLucide() {
        if (this.getEffectiveLibrary() !== 'lucide' || !this.lucideContainer)
            return;
        if (!window.lucide) {
            if (!Icon.lucideLoadingPromise) {
                Icon.lucideLoadingPromise = new Promise((resolve) => {
                    let retries = 0;
                    const check = () => {
                        if (window.lucide) {
                            resolve();
                        }
                        else if (retries < 100) {
                            retries++;
                            setTimeout(check, 100);
                        }
                        else {
                            console.warn(`[ui-icon] Global Lucide load timeout after 10s. Icon library may be blocked or slow.`);
                            resolve();
                        }
                    };
                    check();
                });
            }
            await Icon.lucideLoadingPromise;
        }
        this.renderLucideIcon();
    }
    renderLucideIcon() {
        const lucide = window.lucide;
        if (!lucide || !this.lucideContainer)
            return;
        const name = (this.name || '').trim();
        if (!name)
            return;
        // Clear previous content
        this.lucideContainer.innerHTML = '';
        // PascalCase conversion for direct icon object access (e.g., search -> Search)
        const pascalName = name.replace(/(^\w|-\w)/g, clear => clear.replace(/-/, '').toUpperCase());
        try {
            const iconObj = lucide.icons ? lucide.icons[pascalName] : null;
            if (iconObj && typeof iconObj.toSVG === 'function') {
                const svg = iconObj.toSVG({
                    'width': '100%',
                    'height': '100%',
                    'stroke': 'currentColor',
                    'fill': this.fill || 'none',
                    'stroke-width': 2,
                });
                this.lucideContainer.innerHTML = sanitizeHTML(svg);
            }
            else {
                // Safe creation: Add the icon to the container via data attribute
                const iconEl = document.createElement('i');
                iconEl.setAttribute('data-lucide', name);
                iconEl.style.display = 'block';
                iconEl.style.width = '100%';
                iconEl.style.height = '100%';
                this.lucideContainer.appendChild(iconEl);
                lucide.createIcons({
                    icons: lucide.icons,
                    root: this.lucideContainer,
                    attrs: {
                        width: '100%',
                        height: '100%',
                        stroke: 'currentColor',
                        fill: this.fill || 'none',
                        'stroke-width': 2
                    },
                });
            }
        }
        catch (e) {
            console.warn(`[ui-icon] Render failed for "${name}", trying fallback...`);
            // Last-ditch attempt with standard createIcons if it exists
            if (typeof lucide.createIcons === 'function') {
                lucide.createIcons();
            }
        }
    }
    isSvgPath(str) {
        if (typeof str !== 'string')
            return false;
        const trimmed = str.trim();
        // Check if string starts with an SVG M/m command followed by a number
        return /^[mM]\s*[-+]?(?:\d*\.\d+|\d+)/.test(trimmed) && /[a-zA-Z]/.test(trimmed.substring(1));
    }
    isUrl(str) {
        if (typeof str !== 'string')
            return false;
        return str.startsWith('http') || str.startsWith('/') || str.startsWith('./') || str.startsWith('../') || str.includes('.svg') || str.includes('.png') || str.includes('.jpg');
    }
    isEmoji(str) {
        if (typeof str !== 'string')
            return false;
        // Check if the string contains emoji characters using Unicode properties
        return /\p{Extended_Pictographic}/u.test(str);
    }
    getParsedSize() {
        if (typeof this.size === 'number')
            return `${this.size}px`;
        if (!this.size)
            return 'var(--size, 1em)';
        const namedSizes = {
            xxxs: '0.75rem', // 12px (fits 20px button)
            xxs: '0.875rem', // 14px (fits 24px button)
            xs: '1rem', // 16px (fits 28px button)
            sm: '1.125rem', // 18px (fits 32px button)
            md: '1.25rem', // 20px (fits 38px button)
            lg: '1.375rem', // 22px (fits 42px button)
            xl: '1.5rem', // 24px (fits 48px button)
            xxl: '1.75rem', // 28px (fits 54px button)
            xxxl: '2rem', // 32px (fits 64px button)
        };
        const rawSize = this.size?.toString().trim() ?? '';
        const normalized = normalizeComponentSize(rawSize, rawSize || 'md').toLowerCase();
        // Check for CSS variable fallback if size isn't a known named size or raw value
        if (!namedSizes[normalized] && !rawSize.includes('px') && !rawSize.includes('rem') && !rawSize.includes('em')) {
            if (/^\d+$/.test(rawSize))
                return `${rawSize}px`;
            return `var(--size, ${rawSize})`;
        }
        return namedSizes[normalized] || rawSize || '16px';
    }
    getEffectiveLibrary() {
        let lib = (this.library || 'default').trim().toLowerCase();
        const nameStr = (this.name || '').trim();
        if (lib === 'default') {
            if (this.isUrl(nameStr) || this.isSvgPath(nameStr)) {
                return 'custom';
            }
            else if (this.isEmoji(nameStr)) {
                return 'emoji';
            }
            else if (nameStr.includes('fa-') || nameStr.startsWith('fa ')) {
                return 'fontawesome';
            }
            else if (nameStr.startsWith('bi-')) {
                return 'bootstrap';
            }
            else if (nameStr.startsWith('ri-')) {
                return 'remixicon';
            }
            else {
                return 'lucide';
            }
        }
        return lib;
    }
    ensureLibraryStyles() {
        const lib = this.getEffectiveLibrary();
        const libUrls = {
            fontawesome: 'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css',
            icons8: 'https://maxst.icons8.com/vue-static/landings/line-awesome/line-awesome/1.3.0/css/line-awesome.min.css',
            iconoir: 'https://cdn.jsdelivr.net/gh/iconoir-icons/iconoir@main/css/iconoir.css',
            bootstrap: 'https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css',
            remixicon: 'https://cdn.jsdelivr.net/npm/remixicon@4.6.0/fonts/remixicon.css',
            google: 'https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined',
        };
        const url = libUrls[lib];
        if (!url || !this.el.shadowRoot)
            return;
        if (this.el.shadowRoot.querySelector(`link[href="${url}"]`))
            return;
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = url;
        this.el.shadowRoot.appendChild(link);
    }
    render() {
        const parsedSize = this.getParsedSize();
        const lib = this.getEffectiveLibrary();
        const containerStyle = {
            fontSize: parsedSize,
            width: parsedSize,
            height: parsedSize,
            color: this.color || 'inherit',
            display: 'inline-flex',
            alignItems: 'center',
            justifyContent: 'center',
        };
        const accessibilityAttrs = this.label
            ? { role: 'img', 'aria-label': this.label }
            : { 'aria-hidden': 'true' };
        return (h(Host, { key: '5a6bf9c51b3f46ec61428d94b6b230c5ec25527d', style: containerStyle, ...accessibilityAttrs }, h("div", { key: '531c468608680f4d9a5d543f0b1088ffeb75f4dc', class: `icon-container ${this.spin ? 'fa-spin' : ''}` }, (this.loading || this.isFetching)
            ? h("ui-loader", { size: "0.8em", color: "currentColor", type: "spinner" })
            : this.renderIconContent(lib, parsedSize))));
    }
    renderIconContent(lib, parsedSize) {
        const nameStr = (this.name || '').trim();
        // 0. Custom / URL / SVG Path (Prioritize)
        if (lib === 'custom' || this.isUrl(nameStr) || this.isSvgPath(nameStr) || this.src) {
            if (this.src || this.isUrl(nameStr)) {
                const url = this.src || nameStr;
                return h("img", { src: url, alt: "", style: { width: '100%', height: '100%', objectFit: 'contain' } });
            }
            if (this.isSvgPath(nameStr)) {
                return (h("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2", "stroke-linecap": "round", "stroke-linejoin": "round", style: { width: '100%', height: '100%' } }, h("path", { d: nameStr })));
            }
        }
        // 2. Font Awesome
        if (lib === 'fontawesome') {
            let faClasses = nameStr;
            if (!nameStr.includes('fa-') && !nameStr.startsWith('fa ')) {
                faClasses = `fa-solid fa-${nameStr}`;
            }
            else if (nameStr.startsWith('fa-') && !nameStr.includes(' ')) {
                faClasses = `fa-solid ${nameStr}`;
            }
            return h("i", { class: faClasses, "aria-hidden": "true", style: { fontSize: 'inherit', color: 'inherit' } });
        }
        // 3. Icons8 (Line Awesome) - Supporting both font and SVG fetch
        if (lib === 'icons8') {
            const laClasses = nameStr.includes('la-') ? nameStr : `las la-${nameStr}`;
            return h("i", { class: laClasses, "aria-hidden": "true", style: { fontSize: 'inherit', color: 'inherit' } });
        }
        // 4. Iconoir - Supporting both font and SVG fetch
        if (lib === 'iconoir') {
            if (this.fetchedSvg) {
                return h("div", { class: "svg-container", style: { width: '100%', height: '100%' }, innerHTML: sanitizeHTML(this.fetchedSvg) });
            }
            const iconoirClass = nameStr.startsWith('iconoir-') ? nameStr : `iconoir-${nameStr}`;
            return h("i", { class: iconoirClass, style: { fontSize: 'inherit', color: 'inherit' } });
        }
        // 5. Ionicons
        if (lib === 'ionicons') {
            return (h("ion-icon", { name: this.name, style: {
                    fontSize: parsedSize,
                    color: this.color || 'inherit',
                } }));
        }
        // 6. Lucide — handled by the container ref in render()
        if (lib === 'lucide') {
            return h("div", { class: "lucide-wrapper", style: { width: '100%', height: '100%' }, ref: el => (this.lucideContainer = el) });
        }
        // 7. Bootstrap Icons
        if (lib === 'bootstrap') {
            const bootstrapClass = nameStr.startsWith('bi-') ? nameStr : `bi-${nameStr}`;
            return h("i", { class: `bi ${bootstrapClass}`, style: { fontSize: 'inherit', color: 'inherit' } });
        }
        // 8. Google Material Symbols
        if (lib === 'google') {
            return (h("span", { class: "material-symbols-outlined", style: { fontSize: 'inherit', color: 'inherit' } }, this.name));
        }
        // 9. Remix Icon
        if (lib === 'remixicon') {
            const remixClass = nameStr.startsWith('ri-') ? nameStr : `ri-${nameStr}`;
            return h("i", { class: remixClass, style: { fontSize: 'inherit', color: 'inherit' } });
        }
        // 10. Emoji
        if (lib === 'emoji') {
            return (h("span", { class: "emoji-icon", "aria-hidden": "true", style: {
                    fontSize: 'inherit',
                    lineHeight: '1',
                    fontStyle: 'normal',
                    //     fontFamily: '"Apple Color Emoji", "Segoe UI Emoji", "Noto Color Emoji", sans-serif',
                    userSelect: 'none',
                } }, this.name));
        }
        // 11. Default
        return nameStr;
    }
    static get watchers() { return {
        "name": [{
                "handleIconChange": 0
            }],
        "library": [{
                "handleIconChange": 0
            }]
    }; }
};
Icon.style = iconCss();

const inputCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:inline-block;width:var(--ui-input-width, auto);min-width:0;max-width:100%}:host.variant-plain{min-width:0;box-sizing:border-box}:host{--ui-input-bg:var(--bg-primary, #ffffff);--ui-input-color:var(--text-primary, #1e293b);--ui-input-color-rgb:30,   41,   59;--ui-input-border:var(--color-primary, #bfc8d8);--ui-input-border-hover:var(--color-primary, #94a3b8);--ui-input-focus:var(--color-primary, #6366f1);--ui-input-focus-rgb:99,   102,   241;--ui-input-placeholder:var(--ui-input-color);--ui-input-label:var(--label-color, var(--text-primary, #1e293b));--ui-input-helper:var(--label-subtitle-color, var(--text-muted, #64748b));--ui-input-addon-bg:var(--bg-primary, #f8fafc);--ui-input-addon-border:var(--border-subtle, #e2e8f0);--ui-input-addon-color:var(--text-muted, #64748b);--ui-input-radius:10px;--ui-input-soft-bg:var(--bg-secondary, #f8fafc);--ui-input-soft-border:var(--border-subtle, #e2e8f0);--ui-input-filled-bg:var(--bg-secondary, #f1f5f9);--ui-input-underlined-border:var(--border-default, #e2e8f0);--ui-input-placeholder-opacity:0.45}:host(.input-color-primary){--ui-input-focus:var(--color-primary, #10b981);--ui-input-focus-rgb:unquote(37, 99, 235);--ui-input-border:var(--color-primary-border, #bfdbfe);--ui-input-border-hover:var(--color-primary, #10b981);--ui-input-addon-bg:var(--color-primary, #2563eb);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-primary, #10b981);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-primary-soft, #eff6ff);--ui-input-soft-border:var(--color-primary-border, #bfdbfe);--ui-input-filled-bg:var(--color-primary-ghost, #f1f5f9)}:host :host .input-color-primary{--ui-input-focus:var(--color-primary, #10b981);--ui-input-focus-rgb:unquote(37, 99, 235);--ui-input-border:var(--color-primary-border, #bfdbfe);--ui-input-border-hover:var(--color-primary, #10b981);--ui-input-addon-bg:var(--color-primary, #2563eb);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-primary, #10b981);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-primary-soft, #eff6ff);--ui-input-soft-border:var(--color-primary-border, #bfdbfe);--ui-input-filled-bg:var(--color-primary-ghost, #f1f5f9)}:host(.has-primary){--ui-input-focus:var(--color-primary, #10b981);--ui-input-focus-rgb:unquote(37, 99, 235);--ui-input-border:var(--color-primary, #10b981);--ui-input-border-hover:var(--color-primary, #10b981);--ui-input-brand-color:var(--color-primary, #10b981)}:host.has-value .input-container,:host.focused .input-container{border-color:var(--ui-input-border) !important}:host(.input-color-secondary){--ui-input-focus:var(--color-secondary, #64748b);--ui-input-focus-rgb:unquote(100, 116, 139);--ui-input-border:var(--color-secondary-border, #e2e8f0);--ui-input-border-hover:var(--color-secondary, #64748b);--ui-input-addon-bg:var(--color-secondary, #64748b);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-secondary, #64748b);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-secondary-soft, #f1f5f9);--ui-input-soft-border:var(--color-secondary-border, #e2e8f0);--ui-input-filled-bg:var(--color-secondary-ghost, #f8fafc)}:host :host .input-color-secondary{--ui-input-focus:var(--color-secondary, #64748b);--ui-input-focus-rgb:unquote(100, 116, 139);--ui-input-border:var(--color-secondary-border, #e2e8f0);--ui-input-border-hover:var(--color-secondary, #64748b);--ui-input-addon-bg:var(--color-secondary, #64748b);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-secondary, #64748b);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-secondary-soft, #f1f5f9);--ui-input-soft-border:var(--color-secondary-border, #e2e8f0);--ui-input-filled-bg:var(--color-secondary-ghost, #f8fafc)}:host(.has-secondary){--ui-input-focus:var(--color-secondary, #64748b);--ui-input-focus-rgb:unquote(100, 116, 139);--ui-input-border:var(--color-secondary, #64748b);--ui-input-border-hover:var(--color-secondary, #64748b);--ui-input-brand-color:var(--color-secondary, #64748b)}:host.has-value .input-container,:host.focused .input-container{border-color:var(--ui-input-border) !important}:host(.input-color-success){--ui-input-focus:var(--color-success, #10b981);--ui-input-focus-rgb:unquote(16, 185, 129);--ui-input-border:var(--color-success-border, #bbf7d0);--ui-input-border-hover:var(--color-success, #10b981);--ui-input-addon-bg:var(--color-success, #10b981);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-success, #10b981);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-success-soft, #f0fdf4);--ui-input-soft-border:var(--color-success-border, #bbf7d0);--ui-input-filled-bg:var(--color-success-ghost, #f0fdf4)}:host :host .input-color-success{--ui-input-focus:var(--color-success, #10b981);--ui-input-focus-rgb:unquote(16, 185, 129);--ui-input-border:var(--color-success-border, #bbf7d0);--ui-input-border-hover:var(--color-success, #10b981);--ui-input-addon-bg:var(--color-success, #10b981);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-success, #10b981);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-success-soft, #f0fdf4);--ui-input-soft-border:var(--color-success-border, #bbf7d0);--ui-input-filled-bg:var(--color-success-ghost, #f0fdf4)}:host(.has-success){--ui-input-focus:var(--color-success, #10b981);--ui-input-focus-rgb:unquote(16, 185, 129);--ui-input-border:var(--color-success, #10b981);--ui-input-border-hover:var(--color-success, #10b981);--ui-input-brand-color:var(--color-success, #10b981)}:host.has-value .input-container,:host.focused .input-container{border-color:var(--ui-input-border) !important}:host(.input-color-danger){--ui-input-focus:var(--color-danger, #ef4444);--ui-input-focus-rgb:unquote(239, 68, 68);--ui-input-border:var(--color-danger-border, #fecaca);--ui-input-border-hover:var(--color-danger, #ef4444);--ui-input-addon-bg:var(--color-danger, #ef4444);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-danger, #ef4444);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-danger-soft, #fef2f2);--ui-input-soft-border:var(--color-danger-border, #fecaca);--ui-input-filled-bg:var(--color-danger-ghost, #fef2f2)}:host :host .input-color-danger{--ui-input-focus:var(--color-danger, #ef4444);--ui-input-focus-rgb:unquote(239, 68, 68);--ui-input-border:var(--color-danger-border, #fecaca);--ui-input-border-hover:var(--color-danger, #ef4444);--ui-input-addon-bg:var(--color-danger, #ef4444);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-danger, #ef4444);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-danger-soft, #fef2f2);--ui-input-soft-border:var(--color-danger-border, #fecaca);--ui-input-filled-bg:var(--color-danger-ghost, #fef2f2)}:host(.has-danger){--ui-input-focus:var(--color-danger, #ef4444);--ui-input-focus-rgb:unquote(239, 68, 68);--ui-input-border:var(--color-danger, #ef4444);--ui-input-border-hover:var(--color-danger, #ef4444);--ui-input-brand-color:var(--color-danger, #ef4444)}:host.has-value .input-container,:host.focused .input-container{border-color:var(--ui-input-border) !important}:host(.input-color-error){--ui-input-focus:var(--color-danger, #ef4444);--ui-input-focus-rgb:unquote(239, 68, 68);--ui-input-border:var(--color-danger-border, #fecaca);--ui-input-border-hover:var(--color-danger, #ef4444);--ui-input-addon-bg:var(--color-danger, #ef4444);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-danger, #ef4444);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-danger-soft, #fef2f2);--ui-input-soft-border:var(--color-danger-border, #fecaca);--ui-input-filled-bg:var(--color-danger-ghost, #fef2f2)}:host :host .input-color-error{--ui-input-focus:var(--color-danger, #ef4444);--ui-input-focus-rgb:unquote(239, 68, 68);--ui-input-border:var(--color-danger-border, #fecaca);--ui-input-border-hover:var(--color-danger, #ef4444);--ui-input-addon-bg:var(--color-danger, #ef4444);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-danger, #ef4444);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-danger-soft, #fef2f2);--ui-input-soft-border:var(--color-danger-border, #fecaca);--ui-input-filled-bg:var(--color-danger-ghost, #fef2f2)}:host(.has-error){--ui-input-focus:var(--color-danger, #ef4444);--ui-input-focus-rgb:unquote(239, 68, 68);--ui-input-border:var(--color-danger, #ef4444);--ui-input-border-hover:var(--color-danger, #ef4444);--ui-input-brand-color:var(--color-danger, #ef4444)}:host.has-value .input-container,:host.focused .input-container{border-color:var(--ui-input-border) !important}:host(.input-color-warning){--ui-input-focus:var(--color-warning, #f59e0b);--ui-input-focus-rgb:unquote(245, 158, 11);--ui-input-border:var(--color-warning-border, #fde68a);--ui-input-border-hover:var(--color-warning, #f59e0b);--ui-input-addon-bg:var(--color-warning, #f59e0b);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-warning, #f59e0b);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-warning-soft, #fffbeb);--ui-input-soft-border:var(--color-warning-border, #fde68a);--ui-input-filled-bg:var(--color-warning-ghost, #fffbeb)}:host :host .input-color-warning{--ui-input-focus:var(--color-warning, #f59e0b);--ui-input-focus-rgb:unquote(245, 158, 11);--ui-input-border:var(--color-warning-border, #fde68a);--ui-input-border-hover:var(--color-warning, #f59e0b);--ui-input-addon-bg:var(--color-warning, #f59e0b);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-warning, #f59e0b);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-warning-soft, #fffbeb);--ui-input-soft-border:var(--color-warning-border, #fde68a);--ui-input-filled-bg:var(--color-warning-ghost, #fffbeb)}:host(.has-warning){--ui-input-focus:var(--color-warning, #f59e0b);--ui-input-focus-rgb:unquote(245, 158, 11);--ui-input-border:var(--color-warning, #f59e0b);--ui-input-border-hover:var(--color-warning, #f59e0b);--ui-input-brand-color:var(--color-warning, #f59e0b)}:host.has-value .input-container,:host.focused .input-container{border-color:var(--ui-input-border) !important}:host(.input-color-info){--ui-input-focus:var(--color-info, #0ea5e9);--ui-input-focus-rgb:unquote(14, 165, 233);--ui-input-border:var(--color-info-border, #bae6fd);--ui-input-border-hover:var(--color-info, #0ea5e9);--ui-input-addon-bg:var(--color-info, #0ea5e9);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-info, #0ea5e9);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-info-soft, #f0f9ff);--ui-input-soft-border:var(--color-info-border, #bae6fd);--ui-input-filled-bg:var(--color-info-ghost, #f0f9ff)}:host :host .input-color-info{--ui-input-focus:var(--color-info, #0ea5e9);--ui-input-focus-rgb:unquote(14, 165, 233);--ui-input-border:var(--color-info-border, #bae6fd);--ui-input-border-hover:var(--color-info, #0ea5e9);--ui-input-addon-bg:var(--color-info, #0ea5e9);--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--color-info, #0ea5e9);--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:var(--color-info-soft, #f0f9ff);--ui-input-soft-border:var(--color-info-border, #bae6fd);--ui-input-filled-bg:var(--color-info-ghost, #f0f9ff)}:host(.has-info){--ui-input-focus:var(--color-info, #0ea5e9);--ui-input-focus-rgb:unquote(14, 165, 233);--ui-input-border:var(--color-info, #0ea5e9);--ui-input-border-hover:var(--color-info, #0ea5e9);--ui-input-brand-color:var(--color-info, #0ea5e9)}:host.has-value .input-container,:host.focused .input-container{border-color:var(--ui-input-border) !important}:host.input-color-custom{--ui-input-focus:var(--ui-custom-color, var(--color-primary, #10b981));--ui-input-focus-rgb:var(--ui-custom-color-rgb, 59, 130, 246);--ui-input-addon-bg:var(--ui-custom-color, var(--color-primary, #10b981));--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--ui-custom-color, var(--color-primary, #10b981));--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:rgba(var(--ui-custom-color-rgb, 59, 130, 246), 0.12);--ui-input-soft-border:rgba(var(--ui-custom-color-rgb, 59, 130, 246), 0.3);--ui-input-filled-bg:rgba(var(--ui-custom-color-rgb, 59, 130, 246), 0.08)}:host(.input-color-custom){--ui-input-focus:var(--ui-custom-color, var(--color-primary, #10b981));--ui-input-focus-rgb:var(--ui-custom-color-rgb, 59, 130, 246);--ui-input-addon-bg:var(--ui-custom-color, var(--color-primary, #10b981));--ui-input-addon-color:var(--text-standard, #ffffff);--ui-input-brand-color:var(--ui-custom-color, var(--color-primary, #10b981));--ui-input-addon-border:rgba(255, 255, 255, 0.1);--ui-input-soft-bg:rgba(var(--ui-custom-color-rgb, 59, 130, 246), 0.12);--ui-input-soft-border:rgba(var(--ui-custom-color-rgb, 59, 130, 246), 0.3);--ui-input-filled-bg:rgba(var(--ui-custom-color-rgb, 59, 130, 246), 0.08)}:host([class*=input-color-]) .prefix-icon:not(.prefix-icon--clickable),:host([class*=input-color-]) .suffix-icon:not(.suffix-icon--clickable){color:var(--ui-input-label);background:rgba(var(--ui-input-focus-rgb), 0.08);border-color:rgba(var(--ui-input-focus-rgb), 0.15)}:host([class*=input-color-]) .input-label{color:var(--ui-input-label)}:host[class*=input-color-] .prefix-icon:not(.prefix-icon--clickable),:host[class*=input-color-] .suffix-icon:not(.suffix-icon--clickable){color:var(--ui-input-brand-color);background:rgba(var(--ui-input-focus-rgb), 0.08);border-color:rgba(var(--ui-input-focus-rgb), 0.15)}:host[class*=input-color-] .input-label{color:var(--ui-input-label-color, var(--ui-input-label))}:host [class*=block-color-].block-color-primary{background:var(--color-primary, #10b981) !important;color:var(--text-standard, #ffffff) !important}:host [class*=block-color-].block-color-secondary{background:var(--color-secondary, #64748b) !important;color:var(--text-standard, #ffffff) !important}:host [class*=block-color-].block-color-success{background:var(--color-success, #10b981) !important;color:var(--text-standard, #ffffff) !important}:host [class*=block-color-].block-color-danger{background:var(--color-danger, #ef4444) !important;color:var(--text-standard, #ffffff) !important}:host [class*=block-color-].block-color-error{background:var(--color-danger, #ef4444) !important;color:var(--text-standard, #ffffff) !important}:host [class*=block-color-].block-color-warning{background:var(--color-warning, #f59e0b) !important;color:var(--text-standard, #ffffff) !important}:host [class*=block-color-].block-color-info{background:var(--color-info, #0ea5e9) !important;color:var(--text-standard, #ffffff) !important}:host.gradient-decorators [class*=prefix-],:host.gradient-decorators [class*=suffix-]:not(.hidden){background-clip:padding-box !important;border:none !important}:host.gradient-decorators.input-color-primary [class*=prefix-],:host.gradient-decorators.input-color-primary [class*=suffix-]{background:linear-gradient(135deg, var(--color-primary, #10b981), var(--color-primary, #6366f1)) !important}:host.gradient-decorators.input-color-secondary [class*=prefix-],:host.gradient-decorators.input-color-secondary [class*=suffix-]{background:linear-gradient(135deg, var(--color-secondary, #64748b), var(--color-primary, #6366f1)) !important}:host.gradient-decorators.input-color-success [class*=prefix-],:host.gradient-decorators.input-color-success [class*=suffix-]{background:linear-gradient(135deg, var(--color-success, #10b981), var(--color-primary, #6366f1)) !important}:host.gradient-decorators.input-color-danger [class*=prefix-],:host.gradient-decorators.input-color-danger [class*=suffix-]{background:linear-gradient(135deg, var(--color-danger, #ef4444), var(--color-primary, #6366f1)) !important}:host.gradient-decorators.input-color-error [class*=prefix-],:host.gradient-decorators.input-color-error [class*=suffix-]{background:linear-gradient(135deg, var(--color-danger, #ef4444), var(--color-primary, #6366f1)) !important}:host.gradient-decorators.input-color-warning [class*=prefix-],:host.gradient-decorators.input-color-warning [class*=suffix-]{background:linear-gradient(135deg, var(--color-warning, #f59e0b), var(--color-primary, #6366f1)) !important}:host.gradient-decorators.input-color-info [class*=prefix-],:host.gradient-decorators.input-color-info [class*=suffix-]{background:linear-gradient(135deg, var(--color-info, #0ea5e9), var(--color-primary, #6366f1)) !important}:host.full-width{display:block;width:100%}:host.multiline .input-field{resize:both;height:auto;min-height:100px;line-height:1.6;padding:12px 14px;white-space:pre-wrap;overflow-y:auto;text-overflow:clip}:host.shake-animation{animation:shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both !important}:host(.shake-animation){animation:shake 0.6s cubic-bezier(0.36, 0.07, 0.19, 0.97) both !important}:host-context(.dark),:host-context([data-theme=dark]),:host(.dark){--ui-input-bg:var(--bg-primary, #1e293b);--ui-input-color:var(--text-standard, #f1f5f9);--ui-input-border:var(--border-default, #334155);--ui-input-border-hover:var(--border-strong, #475569);--ui-input-focus:var(--color-primary, #4ade80);--ui-input-focus-rgb:var(--color-primary-rgb);--ui-input-placeholder:var(--text-muted);--ui-input-label:var(--label-color, #f5f5f5);--ui-input-helper:var(--label-subtitle-color, #c2c2c2);--ui-input-addon-bg:var(--bg-secondary, #0f172a);--ui-input-addon-border:var(--border-subtle, #334155);--ui-input-addon-color:var(--label-subtitle-color, #c2c2c2)}:host-context([data-theme=violet]){--ui-input-bg:var(--bg-primary, #1a1440);--ui-input-color:var(--text-standard, #f5f3ff);--ui-input-border:var(--color-primary);--ui-input-border-hover:var(--color-primary-hover);--ui-input-placeholder:var(--text-muted);--ui-input-label:var(--label-color, #ffffff);--ui-input-helper:var(--label-subtitle-color, #ddd6fe);--ui-input-addon-bg:var(--bg-secondary);--ui-input-addon-border:var(--border-subtle);--ui-input-addon-color:var(--label-subtitle-color)}.input-wrapper{display:flex;flex-direction:column;gap:8px;width:100%;max-width:100%;min-width:0}.input-wrapper.full-width{width:100%}:host(.size-xxxs) .input-wrapper .input-field,.input-wrapper.size-xxxs .input-field{padding:var(--ui-input-padding, 0 6px);font-size:11px;height:20px;line-height:20px;text-align:var(--ui-input-text-align, left)}:host(.size-xxxs) .input-wrapper .input-label,.input-wrapper.size-xxxs .input-label{font-size:11px;line-height:16px}:host(.size-xxxs) .input-wrapper .helper-text,.input-wrapper.size-xxxs .helper-text{font-size:9px}:host(.size-xxxs) .input-wrapper .prefix-icon,:host(.size-xxxs) .input-wrapper .suffix-icon,:host(.size-xxxs) .input-wrapper .prefix-text,:host(.size-xxxs) .input-wrapper .suffix-text,.input-wrapper.size-xxxs .prefix-icon,.input-wrapper.size-xxxs .suffix-icon,.input-wrapper.size-xxxs .prefix-text,.input-wrapper.size-xxxs .suffix-text{padding:0 6px;font-size:11px}:host(.size-xxxs) .input-wrapper .otp-box,.input-wrapper.size-xxxs .otp-box{height:28px;width:22px;max-width:22px;font-size:11px}:host(.size-xxs) .input-wrapper .input-field,.input-wrapper.size-xxs .input-field{padding:var(--ui-input-padding, 0 8px);font-size:12px;height:24px;line-height:24px;text-align:var(--ui-input-text-align, left)}:host(.size-xxs) .input-wrapper .input-label,.input-wrapper.size-xxs .input-label{font-size:12px;line-height:18px}:host(.size-xxs) .input-wrapper .helper-text,.input-wrapper.size-xxs .helper-text{font-size:10px}:host(.size-xxs) .input-wrapper .prefix-icon,:host(.size-xxs) .input-wrapper .suffix-icon,:host(.size-xxs) .input-wrapper .prefix-text,:host(.size-xxs) .input-wrapper .suffix-text,.input-wrapper.size-xxs .prefix-icon,.input-wrapper.size-xxs .suffix-icon,.input-wrapper.size-xxs .prefix-text,.input-wrapper.size-xxs .suffix-text{padding:0 8px;font-size:12px}:host(.size-xxs) .input-wrapper .otp-box,.input-wrapper.size-xxs .otp-box{height:32px;width:26px;max-width:26px;font-size:12px}:host(.size-xs) .input-wrapper .input-field,.input-wrapper.size-xs .input-field{padding:var(--ui-input-padding, 0 10px);font-size:13px;height:28px;line-height:28px;text-align:var(--ui-input-text-align, left)}:host(.size-xs) .input-wrapper .input-label,.input-wrapper.size-xs .input-label{font-size:13px;line-height:20px}:host(.size-xs) .input-wrapper .helper-text,.input-wrapper.size-xs .helper-text{font-size:11px}:host(.size-xs) .input-wrapper .prefix-icon,:host(.size-xs) .input-wrapper .suffix-icon,:host(.size-xs) .input-wrapper .prefix-text,:host(.size-xs) .input-wrapper .suffix-text,.input-wrapper.size-xs .prefix-icon,.input-wrapper.size-xs .suffix-icon,.input-wrapper.size-xs .prefix-text,.input-wrapper.size-xs .suffix-text{padding:0 10px;font-size:13px}:host(.size-xs) .input-wrapper .otp-box,.input-wrapper.size-xs .otp-box{height:36px;width:30px;max-width:30px;font-size:13px}:host(.size-sm) .input-wrapper .input-container,.input-wrapper.size-sm .input-container{min-height:32px}:host(.size-sm) .input-wrapper .input-field,.input-wrapper.size-sm .input-field{padding:var(--ui-input-padding, 0 12px);font-size:14px;height:32px;line-height:32px;text-align:var(--ui-input-text-align, left)}:host(.size-sm) .input-wrapper .input-label,.input-wrapper.size-sm .input-label{font-size:14px;line-height:22px}:host(.size-sm) .input-wrapper .helper-text,.input-wrapper.size-sm .helper-text{font-size:11px}:host(.size-sm) .input-wrapper .prefix-icon,:host(.size-sm) .input-wrapper .suffix-icon,:host(.size-sm) .input-wrapper .prefix-text,:host(.size-sm) .input-wrapper .suffix-text,.input-wrapper.size-sm .prefix-icon,.input-wrapper.size-sm .suffix-icon,.input-wrapper.size-sm .prefix-text,.input-wrapper.size-sm .suffix-text{padding:0 12px;font-size:14px}:host(.size-sm) .input-wrapper .otp-box,.input-wrapper.size-sm .otp-box{height:40px;width:32px;max-width:32px;font-size:14px}:host(.size-md) .input-wrapper .input-container,.input-wrapper.size-md .input-container{min-height:38px}:host(.size-md) .input-wrapper .input-field,.input-wrapper.size-md .input-field{padding:var(--ui-input-padding, 0 14px);font-size:15px;height:38px;line-height:38px;text-align:var(--ui-input-text-align, left)}:host(.size-md) .input-wrapper .input-label,.input-wrapper.size-md .input-label{font-size:15px;line-height:24px}:host(.size-md) .input-wrapper .helper-text,.input-wrapper.size-md .helper-text{font-size:12px}:host(.size-md) .input-wrapper .prefix-icon,:host(.size-md) .input-wrapper .suffix-icon,:host(.size-md) .input-wrapper .prefix-text,:host(.size-md) .input-wrapper .suffix-text,.input-wrapper.size-md .prefix-icon,.input-wrapper.size-md .suffix-icon,.input-wrapper.size-md .prefix-text,.input-wrapper.size-md .suffix-text{padding:0 14px;font-size:15px}:host(.size-md) .input-wrapper .otp-box,.input-wrapper.size-md .otp-box{height:46px;width:36px;max-width:36px;font-size:16px}:host(.size-lg) .input-wrapper .input-container,.input-wrapper.size-lg .input-container{min-height:42px}:host(.size-lg) .input-wrapper .input-field,.input-wrapper.size-lg .input-field{padding:var(--ui-input-padding, 0 16px);font-size:16px;height:42px;line-height:42px;text-align:var(--ui-input-text-align, left)}:host(.size-lg) .input-wrapper .input-label,.input-wrapper.size-lg .input-label{font-size:16px;line-height:26px}:host(.size-lg) .input-wrapper .helper-text,.input-wrapper.size-lg .helper-text{font-size:13px}:host(.size-lg) .input-wrapper .prefix-icon,:host(.size-lg) .input-wrapper .suffix-icon,:host(.size-lg) .input-wrapper .prefix-text,:host(.size-lg) .input-wrapper .suffix-text,.input-wrapper.size-lg .prefix-icon,.input-wrapper.size-lg .suffix-icon,.input-wrapper.size-lg .prefix-text,.input-wrapper.size-lg .suffix-text{padding:0 16px;font-size:18px}:host(.size-lg) .input-wrapper .otp-box,.input-wrapper.size-lg .otp-box{height:52px;width:42px;max-width:42px;font-size:18px}:host(.size-xl) .input-wrapper .input-container,.input-wrapper.size-xl .input-container{min-height:48px}:host(.size-xl) .input-wrapper .input-field,.input-wrapper.size-xl .input-field{padding:var(--ui-input-padding, 0 18px);font-size:18px;height:48px;line-height:48px;text-align:var(--ui-input-text-align, left)}:host(.size-xl) .input-wrapper .input-label,.input-wrapper.size-xl .input-label{font-size:18px;line-height:28px}:host(.size-xl) .input-wrapper .helper-text,.input-wrapper.size-xl .helper-text{font-size:14px}:host(.size-xl) .input-wrapper .prefix-icon,:host(.size-xl) .input-wrapper .suffix-icon,:host(.size-xl) .input-wrapper .prefix-text,:host(.size-xl) .input-wrapper .suffix-text,.input-wrapper.size-xl .prefix-icon,.input-wrapper.size-xl .suffix-icon,.input-wrapper.size-xl .prefix-text,.input-wrapper.size-xl .suffix-text{padding:0 18px;font-size:20px}:host(.size-xl) .input-wrapper .otp-box,.input-wrapper.size-xl .otp-box{height:60px;width:48px;max-width:48px;font-size:20px}:host(.size-xxl) .input-wrapper .input-container,.input-wrapper.size-xxl .input-container{min-height:54px}:host(.size-xxl) .input-wrapper .input-field,.input-wrapper.size-xxl .input-field{padding:var(--ui-input-padding, 0 20px);font-size:20px;height:54px;line-height:54px;text-align:var(--ui-input-text-align, left)}:host(.size-xxl) .input-wrapper .input-label,.input-wrapper.size-xxl .input-label{font-size:20px;line-height:32px}:host(.size-xxl) .input-wrapper .helper-text,.input-wrapper.size-xxl .helper-text{font-size:15px}:host(.size-xxl) .input-wrapper .prefix-icon,:host(.size-xxl) .input-wrapper .suffix-icon,:host(.size-xxl) .input-wrapper .prefix-text,:host(.size-xxl) .input-wrapper .suffix-text,.input-wrapper.size-xxl .prefix-icon,.input-wrapper.size-xxl .suffix-icon,.input-wrapper.size-xxl .prefix-text,.input-wrapper.size-xxl .suffix-text{padding:0 20px;font-size:24px}:host(.size-xxl) .input-wrapper .otp-box,.input-wrapper.size-xxl .otp-box{height:68px;width:54px;max-width:54px;font-size:22px}:host(.size-xxxl) .input-wrapper .input-field,.input-wrapper.size-xxxl .input-field{padding:var(--ui-input-padding, 0 24px);font-size:24px;height:64px;line-height:64px;text-align:var(--ui-input-text-align, left)}:host(.size-xxxl) .input-wrapper .input-label,.input-wrapper.size-xxxl .input-label{font-size:24px;line-height:36px}:host(.size-xxxl) .input-wrapper .helper-text,.input-wrapper.size-xxxl .helper-text{font-size:16px}:host(.size-xxxl) .input-wrapper .prefix-icon,:host(.size-xxxl) .input-wrapper .suffix-icon,:host(.size-xxxl) .input-wrapper .prefix-text,:host(.size-xxxl) .input-wrapper .suffix-text,.input-wrapper.size-xxxl .prefix-icon,.input-wrapper.size-xxxl .suffix-icon,.input-wrapper.size-xxxl .prefix-text,.input-wrapper.size-xxxl .suffix-text{padding:0 24px;font-size:28px}:host(.size-xxxl) .input-wrapper .otp-box,.input-wrapper.size-xxxl .otp-box{height:80px;width:64px;max-width:64px;font-size:26px}.input-label{display:block;font-size:11px;font-weight:700;color:var(--ui-input-label-color, var(--ui-input-label));margin-bottom:8px;letter-spacing:0.08em;text-transform:uppercase;opacity:0.65}.input-label .required-indicator{color:var(--color-danger-hover, #dc2626);margin-left:3px;font-size:16px;vertical-align:middle}.input-container{position:relative;display:flex;align-items:center;border:1px solid var(--ui-input-border);border-radius:var(--ui-input-radius);background:var(--ui-input-bg);box-shadow:0 2px 4px rgba(0, 0, 0, 0.02), inset 0 1px 1px rgba(255, 255, 255, 0.5);transition:border-color 0.25s ease, box-shadow 0.25s ease, background-color 0.25s ease;width:100%;max-width:100%;min-width:0;overflow:visible;padding:0 !important;z-index:1}.input-container .clipping-layer{position:absolute;inset:-1px;overflow:hidden;border-radius:inherit;pointer-events:none;z-index:0}.density-cozy .input-container{gap:6px}.density-compact .input-container{gap:4px}.input-field{flex:1;border:none;outline:none;background:transparent;font-family:inherit;color:var(--ui-input-color);width:100%;min-width:0;font-weight:400;text-align:var(--ui-input-text-align, left);padding:0 var(--ui-input-padding-x, 12px) !important;transition:color 0.2s, opacity 0.2s;-webkit-font-smoothing:antialiased;-moz-osx-font-smoothing:grayscale;text-overflow:ellipsis;overflow:hidden;white-space:nowrap}.input-field::placeholder{color:var(--ui-input-placeholder);font-weight:400;opacity:var(--ui-input-placeholder-opacity)}.input-field:disabled{cursor:not-allowed;opacity:0.6;color:var(--text-muted, #6b7280)}.input-field:read-only{cursor:default;color:var(--text-secondary, #374151)}:host(.variant-outlined) .input-container{border:1px solid var(--ui-input-border);background:var(--ui-input-bg);box-shadow:0 2px 4px rgba(0, 0, 0, 0.02)}:host(.variant-outlined.focused) .input-container{border-color:var(--ui-input-focus) !important;box-shadow:0 0 0 3px rgba(var(--ui-input-focus-rgb, 99, 102, 241), 0.15), 0 1px 3px rgba(0, 0, 0, 0.08) !important}:host(.variant-filled) .input-container{border-bottom:2px solid transparent;border-radius:10px 10px 0 0;border:none;background:var(--ui-input-filled-bg);box-shadow:inset 0 -1px 0 0 var(--border-strong, #d1d5db)}:host(.variant-filled.focused) .input-container{background:var(--bg-primary, #e5e7eb);border-bottom-color:var(--ui-input-focus);box-shadow:inset 0 -2px 0 0 var(--ui-input-focus)}:host(.variant-underlined) .input-container{border-bottom:1px solid var(--ui-input-underlined-border, var(--border-strong, #d1d5db));border-radius:0;padding-left:0;padding-right:0;border:none;background:transparent;box-shadow:none}:host(.variant-underlined.focused) .input-container{border-bottom-color:var(--ui-input-focus);box-shadow:0 1px 0 0 var(--ui-input-focus)}:host(.variant-soft) .input-container{border:1px solid var(--ui-input-soft-border);background:var(--ui-input-soft-bg);box-shadow:none}:host(.variant-soft.focused) .input-container{background:var(--ui-input-bg);border-color:var(--ui-input-focus);box-shadow:0 0 0 3px rgba(var(--ui-input-focus-rgb, 99, 102, 241), 0.1), 0 2px 6px 0 rgba(0, 0, 0, 0.04) !important}.variant-borderless .input-container,.variant-plain .input-container{border:none !important;background:transparent !important;box-shadow:none !important;padding:0 !important}.floating-label{position:absolute;left:12px;top:50%;transform:translateY(-50%);background:transparent;padding:0 4px;color:var(--ui-input-label, var(--label-subtitle-color));pointer-events:none;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);font-size:14px;line-height:1;z-index:2}.input-wrapper.has-prefix .floating-label{left:56px}.input-wrapper.has-prefix-text .floating-label{left:76px}.focused .floating-label,.has-value .floating-label,.is-always-floated .floating-label{top:0;left:12px;transform:translateY(-56%) scale(0.8);transform-origin:left bottom;background:var(--ui-input-bg);padding:0 6px;font-size:14px;font-weight:700;color:var(--label-color, #111827);letter-spacing:0.04em;text-transform:uppercase;z-index:5}.input-wrapper.has-prefix .focused .floating-label,.input-wrapper.has-prefix .has-value .floating-label,.input-wrapper.has-prefix .is-always-floated .floating-label{left:56px}.input-wrapper.has-prefix-text .focused .floating-label,.input-wrapper.has-prefix-text .has-value .floating-label,.input-wrapper.has-prefix-text .is-always-floated .floating-label{left:76px}.prefix-text,.suffix-text,.prefix-icon,.suffix-icon{display:flex;align-items:center;align-self:stretch;background:var(--ui-input-addon-bg);border-color:var(--ui-input-addon-border)}.prefix-text.prefix-text,.prefix-text.prefix-icon,.suffix-text.prefix-text,.suffix-text.prefix-icon,.prefix-icon.prefix-text,.prefix-icon.prefix-icon,.suffix-icon.prefix-text,.suffix-icon.prefix-icon{border-right:1px solid var(--ui-input-addon-border);border-radius:calc(var(--ui-input-radius) - 1px) 0 0 calc(var(--ui-input-radius) - 1px);margin-right:2px}.prefix-text.suffix-text,.prefix-text.suffix-icon,.suffix-text.suffix-text,.suffix-text.suffix-icon,.prefix-icon.suffix-text,.prefix-icon.suffix-icon,.suffix-icon.suffix-text,.suffix-icon.suffix-icon{border-left:1px solid var(--ui-input-addon-border);border-radius:0 calc(var(--ui-input-radius) - 1px) calc(var(--ui-input-radius) - 1px) 0;margin-left:2px}.prefix-text,.suffix-text,.prefix-icon,.suffix-icon{display:flex;align-items:center;justify-content:center;padding:0 12px;color:var(--label-icon-color, var(--label-subtitle-color));font-weight:500}.prefix-text--clickable,.suffix-text--clickable,.prefix-icon--clickable,.suffix-icon--clickable{cursor:pointer;border:none;transition:background 0.15s ease, transform 0.1s ease, box-shadow 0.15s ease;user-select:none}.prefix-text--clickable:hover,.suffix-text--clickable:hover,.prefix-icon--clickable:hover,.suffix-icon--clickable:hover{background:var(--ui-input-border-hover, rgba(var(--ui-input-focus-rgb, 99, 102, 241), 0.12));filter:brightness(0.92)}.prefix-text--clickable:active,.suffix-text--clickable:active,.prefix-icon--clickable:active,.suffix-icon--clickable:active{transform:scale(0.93)}.prefix-text--clickable:focus-visible,.suffix-text--clickable:focus-visible,.prefix-icon--clickable:focus-visible,.suffix-icon--clickable:focus-visible{outline:2px solid var(--ui-input-focus);outline-offset:-2px}.input-field-stack{position:relative;flex:1;display:flex;align-items:center;min-width:0;overflow:hidden}.input-field-stack .input-field{flex:1 !important;z-index:2 !important;background:transparent !important}.ghost-text-overlay{position:absolute;top:50%;left:0;transform:translateY(-50%);pointer-events:none;color:rgba(var(--ui-input-color-rgb), 0.35);font-size:inherit;padding-left:inherit;z-index:1;white-space:pre}.otp-container{display:flex;gap:8px;width:100%;justify-content:center;align-items:center;position:relative;padding:6px 16px;box-sizing:border-box}.otp-container input.input-field{position:absolute;opacity:0;inset:0;z-index:2;cursor:pointer}.otp-box{flex:0 0 auto;width:38px;height:46px;max-width:38px;overflow:hidden;border:2px solid var(--ui-input-border);border-radius:12px;display:flex;align-items:center;justify-content:center;font-size:16px;font-weight:400;background:var(--bg-primary, #ffffff);transition:border-color 0.2s, box-shadow 0.2s;line-height:1;user-select:none}.otp-box.filled{border-color:var(--ui-input-focus);box-shadow:0 0 0 3px rgba(var(--ui-input-focus-rgb), 0.15), 0 4px 12px rgba(var(--ui-input-focus-rgb), 0.12)}.otp-box.active{border-color:var(--ui-input-focus);box-shadow:0 0 0 3px rgba(var(--ui-input-focus-rgb), 0.2)}.otp-box.active::after{content:"";width:2px;height:1.2em;background:var(--ui-input-focus);animation:otp-cursor 1s infinite}@keyframes otp-cursor{0%,100%{opacity:1}50%{opacity:0}}.has-gradient-border .clipping-layer::before{content:"";position:absolute;inset:-150%;background:conic-gradient(from 0deg, var(--color-primary, #8b5cf6), var(--color-danger, #ec4899), var(--color-success, #10b981), var(--color-warning, #f59e0b), var(--color-primary, #8b5cf6));animation:spin-shader 4s linear infinite;z-index:-1}.has-gradient-border .input-container{border-color:transparent !important}@keyframes spin-shader{100%{transform:rotate(360deg)}}.has-backdrop-sheen .clipping-layer::after{content:"";position:absolute;top:0;left:-150%;width:100%;height:100%;background:linear-gradient(135deg, transparent, rgba(255, 255, 255, 0.3), transparent);animation:sheen-flow 3s ease-in-out infinite;transform:skewX(-20deg)}@keyframes sheen-flow{0%{left:-150%}100%{left:150%}}.liquid-ripple{position:absolute;background:rgba(var(--ui-input-focus-rgb, 61, 205, 88), 0.25);border-radius:50%;transform:translate(-50%, -50%) scale(0);pointer-events:none;animation:ripple-animation 0.6s cubic-bezier(0.4, 0, 0.2, 1)}@keyframes ripple-animation{0%{transform:translate(-50%, -50%) scale(0);opacity:0.5}100%{transform:translate(-50%, -50%) scale(4);opacity:0}}.range-input-wrapper{display:flex;align-items:center;flex:1;gap:12px;height:100%;padding:0 14px;width:100%;min-width:0;overflow:hidden;position:relative}.range-input-wrapper input[type=range]{-webkit-appearance:none;appearance:none;flex:1;background:transparent;cursor:pointer;height:38px;z-index:2;margin:0}.range-input-wrapper input[type=range]:focus{outline:none}.range-input-wrapper input[type=range]::-webkit-slider-runnable-track{height:6px;background:linear-gradient(to right, var(--ui-input-focus) 0%, var(--ui-input-focus) var(--range-progress), var(--border-subtle, #e2e8f0) var(--range-progress), var(--border-subtle, #e2e8f0) 100%);border-radius:6px;transition:all 0.2s ease}.range-input-wrapper input[type=range]::-moz-range-track{height:6px;background:var(--border-subtle, #e2e8f0);border-radius:6px}.range-input-wrapper input[type=range]::-moz-range-progress{background:var(--ui-input-focus);height:6px;border-radius:6px 0 0 6px}.range-input-wrapper input[type=range]::-webkit-slider-thumb{-webkit-appearance:none;appearance:none;height:18px;width:18px;background:#ffffff;border:2px solid var(--ui-input-focus);border-radius:50%;margin-top:-6px;box-shadow:0 2px 5px rgba(0, 0, 0, 0.15), 0 0 0 0 rgba(var(--ui-input-focus-rgb), 0);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);z-index:10}.range-input-wrapper input[type=range]:hover::-webkit-slider-thumb{box-shadow:0 3px 8px rgba(0, 0, 0, 0.2), 0 0 0 4px rgba(var(--ui-input-focus-rgb), 0.1);transform:scale(1.1)}.range-input-wrapper input[type=range]:active::-webkit-slider-thumb{transform:scale(0.95);background:var(--ui-input-focus);border-color:#ffffff}.range-input-wrapper input[type=range]::-moz-range-thumb{height:16px;width:16px;background:#ffffff;border:2px solid var(--ui-input-focus);border-radius:50%;box-shadow:0 2px 4px rgba(0, 0, 0, 0.1);cursor:pointer}.range-input-wrapper input[type=range]:disabled{cursor:not-allowed;opacity:0.6}.range-input-wrapper input[type=range]:disabled::-webkit-slider-runnable-track{background:var(--border-subtle, #e2e8f0)}.range-input-wrapper input[type=range]:disabled::-webkit-slider-thumb{border-color:var(--text-muted)}.range-input-wrapper .range-manual-adornment{display:flex;align-items:center;margin-left:12px}.range-input-wrapper .range-manual-input{width:60px;height:28px;border:1px solid var(--ui-input-focus);border-radius:6px;background:rgba(var(--ui-input-focus-rgb), 0.05);color:var(--ui-input-focus);font-size:13px;font-weight:700;text-align:center;outline:none;transition:all 0.2s;font-family:inherit}.range-input-wrapper .range-manual-input::-webkit-inner-spin-button,.range-input-wrapper .range-manual-input::-webkit-outer-spin-button{-webkit-appearance:none;margin:0}.range-input-wrapper .range-manual-input:focus{background:#ffffff;box-shadow:0 0 0 2px rgba(var(--ui-input-focus-rgb), 0.2)}.status-indicator{display:inline-flex;align-items:center;gap:8px;position:relative;margin:0 8px;padding:4px 10px;border-radius:20px;font-size:11px;font-weight:700;background:var(--bg-primary, #ffffff);box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1);z-index:10;border:1px solid rgba(0, 0, 0, 0.05)}.status-indicator .status-dot{width:7px;height:7px;border-radius:50%}.status-indicator.status-online{color:var(--color-success)}.status-indicator.status-online .status-dot{background:var(--color-success);box-shadow:0 0 10px var(--color-success)}.status-indicator.status-away{color:var(--color-warning)}.status-indicator.status-away .status-dot{background:var(--color-warning);box-shadow:0 0 10px var(--color-warning)}.status-indicator.status-listening{color:var(--color-danger);background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.05);border-color:rgba(var(--color-danger-rgb, 239, 68, 68), 0.2)}.status-indicator.status-listening .mic-pulse{animation:mic-pulse 1.5s infinite;font-size:14px}.status-indicator .status-label{margin-left:2px;text-transform:capitalize;color:var(--text-secondary)}@keyframes mic-pulse{0%{transform:scale(1);opacity:1}50%{transform:scale(1.2);opacity:0.7}100%{transform:scale(1);opacity:1}}.typing-animation{display:inline-flex;gap:2px}.typing-animation span{width:3px;height:3px;border-radius:50%;background:currentColor;animation:typing-blink 1.4s infinite both}.typing-animation span:nth-child(2){animation-delay:0.2s}.typing-animation span:nth-child(3){animation-delay:0.4s}@keyframes typing-blink{0%,80%,100%{opacity:0}40%{opacity:1}}.linear-loading-bar{position:absolute;bottom:-1.5px;left:-1.5px;right:-1.5px;height:3px;background:rgba(var(--ui-input-focus-rgb), 0.1);overflow:hidden;z-index:5}.linear-loading-bar::after{content:"";position:absolute;width:50%;height:100%;background:linear-gradient(90deg, transparent, var(--ui-input-focus), transparent);animation:linear-loading-flow 1.5s infinite}@keyframes linear-loading-flow{0%{left:-50%}100%{left:100%}}.input-footer{display:flex;justify-content:space-between;gap:12px;font-size:13px;margin-top:6px}.helper-text{display:inline-flex;align-items:center;gap:6px;color:var(--ui-input-helper-color, var(--ui-input-helper));flex:1}.helper-text .validation-icon{font-size:1.15em}.helper-text.success-text{color:var(--color-success, #10b981)}.helper-text.error-text{color:var(--color-danger, #ef4444)}.helper-text.warning-text{color:var(--color-warning, #f59e0b)}.helper-text.info-text{color:var(--color-primary, #0ea5e9)}.character-counter{color:var(--text-muted);font-size:12px;margin-left:auto}.autocomplete-dropdown{position:absolute;top:100%;left:0;right:0;background:var(--ui-input-bg);border:1.5px solid var(--ui-input-border);border-radius:12px;box-shadow:0 10px 25px -5px rgba(0, 0, 0, 0.1);margin-top:6px;max-height:280px;overflow-y:auto;z-index:1000;padding:6px}.autocomplete-dropdown .autocomplete-item{display:flex;align-items:center;gap:12px;padding:10px 14px;border-radius:8px;cursor:pointer;transition:all 0.2s}.autocomplete-dropdown .autocomplete-item:hover{background:rgba(var(--ui-input-focus-rgb), 0.08);color:var(--ui-input-focus);transform:translateX(4px)}.input-field[type=date],.input-field[type=datetime-local],.input-field[type=month],.input-field[type=week],.input-field[type=time]{cursor:pointer}.input-field[type=date]::-webkit-calendar-picker-indicator,.input-field[type=datetime-local]::-webkit-calendar-picker-indicator,.input-field[type=month]::-webkit-calendar-picker-indicator,.input-field[type=week]::-webkit-calendar-picker-indicator,.input-field[type=time]::-webkit-calendar-picker-indicator{cursor:pointer;opacity:0.6;transition:opacity 0.15s ease}.input-field[type=date]::-webkit-calendar-picker-indicator:hover,.input-field[type=datetime-local]::-webkit-calendar-picker-indicator:hover,.input-field[type=month]::-webkit-calendar-picker-indicator:hover,.input-field[type=week]::-webkit-calendar-picker-indicator:hover,.input-field[type=time]::-webkit-calendar-picker-indicator:hover{opacity:1}.input-field[type=file]{cursor:pointer}.input-field[type=file]::-webkit-file-upload-button{cursor:pointer}.input-field[type=file]::file-selector-button{cursor:pointer}.input-field[type=color]{cursor:pointer}.input-field[type=color]::-webkit-color-swatch-wrapper,.input-field[type=color]::-webkit-color-swatch{cursor:pointer}.otp-container input.input-field{cursor:pointer}.otp-box{cursor:pointer}.shortcut-hint{cursor:default;user-select:none}.dirty-indicator{cursor:default}@keyframes shake{0%,100%{transform:translate3d(0, 0, 0)}10%,90%{transform:translate3d(-3px, 0, 0)}20%,80%{transform:translate3d(6px, 0, 0)}30%,50%,70%{transform:translate3d(-10px, 0, 0)}40%,60%{transform:translate3d(10px, 0, 0)}}`;

const STANDARD_COLORS = ['primary', 'secondary', 'success', 'warning', 'danger', 'error', 'info', 'default'];
const Input = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.analyticsEvent = createEvent(this, "analyticsEvent");
        this.inputChange = createEvent(this, "inputChange");
        this.inputFocus = createEvent(this, "inputFocus");
        this.inputBlur = createEvent(this, "inputBlur");
        this.inputClear = createEvent(this, "inputClear");
        this.inputKeydown = createEvent(this, "inputKeydown");
        this.inputKeyup = createEvent(this, "inputKeyup");
        this.inputCopy = createEvent(this, "inputCopy");
        this.fileSelected = createEvent(this, "fileSelected");
        this.suggestionSelected = createEvent(this, "suggestionSelected");
        this.prefixClick = createEvent(this, "prefixClick");
        this.suffixClick = createEvent(this, "suffixClick");
        this.search = createEvent(this, "search");
        this.inputInput = createEvent(this, "inputInput");
        this.focusInternal = createEvent(this, "focusInternal");
        this.pasteInternal = createEvent(this, "pasteInternal");
        this.wheelInternal = createEvent(this, "wheelInternal");
        if (hostRef.$hostElement$["s-ei"]) {
            this.internals = hostRef.$hostElement$["s-ei"];
        }
        else {
            this.internals = hostRef.$hostElement$.attachInternals();
            hostRef.$hostElement$["s-ei"] = this.internals;
        }
    }
    get element() { return getElement(this); }
    badge;
    color = 'primary';
    prefixColor;
    suffixColor;
    gradientDecorators = false;
    rippleEffect = true;
    // Master Tier Power Features
    linearLoading = false;
    hintTooltip = '';
    successPulse = false;
    alwaysFloated = false;
    shakeOnError = false;
    maxRows = 5;
    autocompleteSuggestions = [];
    // Apex Tier Mastery Features
    voiceInput = false;
    shortcutHint = '';
    textTransform = 'none';
    relativeTime = false;
    highlightMatches = true;
    dropZone = false;
    // Zenith Tier Final Specifications
    ghostText = '';
    revealOnHold = false;
    noSpaces = false;
    alphaOnly = false;
    numericOnly = false;
    showPasswordStrength = false;
    showProgressCircle = false;
    dirtyTracking = false;
    defaultValue = '';
    otpLength = 6;
    voiceEnabled = false;
    statusIndicator = 'none';
    validationTrigger = 'onInput';
    gradientBorder = false;
    backdropSheen = false;
    isPasswordHeld = false;
    currentGhost = '';
    isDirty = false;
    isRecording = false;
    isDragging = false;
    rippleX = 0;
    rippleY = 0;
    showRipple = false;
    showClearButton = false;
    customClass;
    analyticsEvent;
    inputElement;
    colorPickerElement;
    filePickerElement;
    debounceTimer;
    internals;
    type = 'text';
    variant = 'outlined';
    size = 'md';
    width;
    value = '';
    placeholder = '';
    label = '';
    helperText = '';
    errorText = '';
    successText = '';
    warningText = '';
    infoText = '';
    validationState = 'none';
    disabled = false;
    readonly = false;
    required = false;
    multiline = false;
    rows = 3;
    autoResize = false;
    minRows;
    cols;
    maxLength;
    minLength;
    showCounter = false;
    showClear = false;
    showPasswordToggle = true;
    prefixIcon = '';
    suffixIcon = '';
    prefixText = '';
    suffixText = '';
    floatingLabel = false;
    autocomplete = 'off';
    min;
    max;
    step;
    pattern;
    name;
    inputId;
    debounce = 0;
    loading = false;
    fullWidth = false;
    autofocus = false;
    customTabIndex;
    showCopy = false;
    density = 'standard';
    showDividers = false;
    mask = 'none';
    currency = 'USD';
    accept; // for file input
    multiple = false; // for file input
    minLengthIndicator;
    maxLengthIndicator;
    tooltip;
    suggestions = [];
    inputmode;
    clearIcon = 'x-circle';
    showSteppers = false;
    showTypeIcon = true;
    formatter;
    parser;
    autoSelect = false;
    autoTrim = false;
    rtl = false;
    passwordStrengthCalculator;
    resize = 'vertical';
    enterkeyhint;
    passwordIcon = 'eye';
    passwordVisibleIcon = 'eye-off';
    skeleton = false;
    prefixClickable = false;
    suffixClickable = false;
    allowedChars = '';
    blockInvalidPaste = false;
    customMask = '';
    selectOnClick = false;
    clearOnEscape = true;
    autoCapitalize = 'none';
    async setFocus() {
        if (this.inputElement) {
            this.inputElement.focus();
        }
    }
    async openFilePicker() {
        if (this.filePickerElement) {
            this.filePickerElement.click();
        }
    }
    async openColorPicker() {
        if (this.colorPickerElement) {
            this.colorPickerElement.click();
        }
    }
    isFocused = false;
    isPasswordVisible = false;
    currentLength = 0;
    showSuggestions = false;
    selectedSuggestionIndex = -1;
    rangeValue = 50;
    shake = false;
    passwordStrength = 0; // 0-4
    capsLockOn = false;
    selectedFileNames = '';
    internalErrorText = '';
    validate(value) {
        if (!value && !this.required) {
            this.validationState = 'none';
            this.internalErrorText = '';
            return;
        }
        if (this.type === 'email' && value) {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                this.validationState = 'error';
                this.internalErrorText = 'Please enter a valid email address';
                return;
            }
        }
        if (this.type === 'color' && value) {
            const colorRegex = /^#([A-Fa-f0-9]{3}){1,2}$/;
            if (!colorRegex.test(value)) {
                this.validationState = 'error';
                this.internalErrorText = 'Please enter a valid Hex color (e.g. #ff0000)';
                return;
            }
        }
        if (this.type === 'url' && value) {
            const urlRegex = /^(https?:\/\/)?([\da-z\.-]+)\.([a-z\.]{2,6})([\/\w \.-]*)*\/?$/i;
            if (!urlRegex.test(value)) {
                this.validationState = 'error';
                this.internalErrorText = 'Please enter a valid URL';
                return;
            }
        }
        if (this.pattern && value) {
            const customRegex = new RegExp(this.pattern);
            if (!customRegex.test(value)) {
                this.validationState = 'error';
                this.internalErrorText = 'Please match the requested format';
                return;
            }
        }
        if (this.type === 'number' && value) {
            const numValue = parseFloat(value);
            if (this.min !== undefined && numValue < parseFloat(this.min)) {
                this.validationState = 'error';
                this.internalErrorText = `Value must be greater than or equal to ${this.min}`;
                return;
            }
            if (this.max !== undefined && numValue > parseFloat(this.max)) {
                this.validationState = 'error';
                this.internalErrorText = `Value must be less than or equal to ${this.max}`;
                return;
            }
        }
        if (value) {
            if (this.minLengthIndicator && value.length < this.minLengthIndicator) {
                this.validationState = 'error';
                this.internalErrorText = `Please lengthen this text to ${this.minLengthIndicator} characters or more`;
                return;
            }
            if (this.maxLengthIndicator && value.length > this.maxLengthIndicator) {
                this.validationState = 'error';
                this.internalErrorText = `Please shorten this text to ${this.maxLengthIndicator} characters or less`;
                return;
            }
        }
        if (this.validationState === 'error' && this.internalErrorText) {
            if (this.internals) {
                this.internals.setValidity({ customError: true }, this.internalErrorText, this.inputElement);
            }
        }
        else {
            if (this.internals) {
                this.internals.setValidity({});
            }
            this.validationState = 'none';
            this.internalErrorText = '';
        }
    }
    updateFormValue() {
        if (this.internals) {
            this.internals.setFormValue(this.value);
        }
    }
    inputChange;
    inputFocus;
    inputBlur;
    inputClear;
    inputKeydown;
    inputKeyup;
    inputCopy;
    fileSelected;
    suggestionSelected;
    prefixClick;
    suffixClick;
    search;
    inputInput;
    focusInternal;
    pasteInternal;
    wheelInternal;
    valueChanged(newValue) {
        this.currentLength = newValue?.length || 0;
        if (this.autoTrim && newValue) {
            this.value = newValue.trim();
        }
        if (this.dirtyTracking) {
            this.isDirty = newValue !== this.defaultValue;
        }
        if (this.autoResize && this.multiline && this.inputElement) {
            this.resizeTextarea();
        }
        if (this.type === 'password' && newValue) {
            this.passwordStrength = this.calculatePasswordStrength(newValue);
        }
        if (this.type === 'range') {
            this.rangeValue = parseFloat(newValue) || 0;
        }
        this.updateClearButtonVisibility();
        this.updateFormValue();
    }
    handleValidationStateChange(newValue) {
        if (this.shakeOnError && newValue === 'error') {
            this.shake = true;
            setTimeout(() => (this.shake = false), 600);
        }
    }
    handleShakeChange(newValue) {
        if (newValue) {
            setTimeout(() => (this.shake = false), 600);
        }
    }
    componentWillLoad() {
        if (typeof this.attachInternals === 'function') {
            this.internals = this.attachInternals();
        }
        this.currentLength = this.value?.length || 0;
        if (this.type === 'range' && this.value) {
            this.rangeValue = parseFloat(this.value) || 0;
        }
        this.updateFormValue();
    }
    resizeObserver;
    componentDidLoad() {
        if (this.autoResize && this.multiline && this.inputElement) {
            this.resizeTextarea();
            // Setup ResizeObserver to handle content changes or visibility toggles
            this.resizeObserver = new ResizeObserver(() => {
                this.resizeTextarea();
            });
            this.resizeObserver.observe(this.inputElement);
        }
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        if (this.debounceTimer) {
            clearTimeout(this.debounceTimer);
        }
    }
    updateClearButtonVisibility() {
        this.showClearButton = this.showClear && !!this.value;
    }
    getRangePercentage() {
        const min = parseFloat(this.min) || 0;
        const max = parseFloat(this.max) || 100;
        return ((this.rangeValue - min) / (max - min)) * 100;
    }
    resizeTextarea() {
        if (this.inputElement && this.multiline) {
            const textarea = this.inputElement;
            textarea.style.height = 'auto';
            const lineHeight = parseInt(getComputedStyle(textarea).lineHeight) || 20;
            const maxRowsHeight = this.maxRows ? this.maxRows * lineHeight : 0;
            let newHeight = textarea.scrollHeight;
            if (this.maxRows && newHeight > maxRowsHeight && maxRowsHeight > 0) {
                textarea.style.height = `${maxRowsHeight}px`;
                textarea.style.overflowY = 'auto';
            }
            else {
                textarea.style.height = `${newHeight}px`;
                textarea.style.overflowY = 'hidden';
            }
        }
    }
    getMaskPlaceholder() {
        if (this.customMask)
            return this.customMask.replace(/#/g, 'X').replace(/A/g, 'X');
        const placeholders = {
            'phone': '(XXX) XXX-XXXX',
            'credit-card': 'XXXX XXXX XXXX XXXX',
            'date': 'MM/DD/YYYY',
            'currency': '$0.00',
            'ssn': 'XXX-XX-XXXX',
            'zip': 'XXXXX',
            'none': ''
        };
        return placeholders[this.mask] || '';
    }
    applyMask(value) {
        if (!value)
            return value;
        if (this.customMask) {
            const cleanValue = value.replace(/[^A-Za-z0-9]/g, '');
            let result = '';
            let valueIdx = 0;
            for (let i = 0; i < this.customMask.length && valueIdx < cleanValue.length; i++) {
                const maskChar = this.customMask[i];
                if (maskChar === '#' || maskChar === 'A') {
                    result += cleanValue[valueIdx++];
                }
                else {
                    result += maskChar;
                }
            }
            return result;
        }
        if (this.mask === 'none' && this.type !== 'currency')
            return value;
        const maskToUse = this.type === 'currency' ? 'currency' : this.mask;
        const digits = value.replace(/\D/g, '');
        switch (maskToUse) {
            case 'phone': {
                if (!digits)
                    return '';
                if (digits.length <= 3)
                    return `(${digits}`;
                if (digits.length <= 6)
                    return `(${digits.slice(0, 3)}) ${digits.slice(3)}`;
                return `(${digits.slice(0, 3)}) ${digits.slice(3, 6)}-${digits.slice(6, 10)}`;
            }
            case 'credit-card': {
                return digits.match(/.{1,4}/g)?.join(' ').slice(0, 19) || digits;
            }
            case 'date': {
                if (digits.length <= 2)
                    return digits;
                if (digits.length <= 4)
                    return `${digits.slice(0, 2)}/${digits.slice(2)}`;
                return `${digits.slice(0, 2)}/${digits.slice(2, 4)}/${digits.slice(4, 8)}`;
            }
            case 'currency': {
                if (!digits)
                    return '';
                const amount = (parseInt(digits) / 100).toFixed(2);
                return new Intl.NumberFormat('en-US', {
                    style: 'currency',
                    currency: this.currency,
                }).format(parseFloat(amount));
            }
            case 'ssn': {
                if (digits.length <= 3)
                    return digits;
                if (digits.length <= 5)
                    return `${digits.slice(0, 3)}-${digits.slice(3)}`;
                return `${digits.slice(0, 3)}-${digits.slice(3, 5)}-${digits.slice(5, 9)}`;
            }
            case 'zip': {
                return digits.slice(0, 5);
            }
            default:
                return value;
        }
    }
    calculatePasswordStrength(password) {
        if (this.passwordStrengthCalculator) {
            return this.passwordStrengthCalculator(password);
        }
        let strength = 0;
        if (password.length >= 1) {
            if (password.length >= 8)
                strength++;
            if (/[A-Z]/.test(password))
                strength++;
            if (/[0-9]/.test(password))
                strength++;
            if (/[^A-Za-z0-9]/.test(password))
                strength++;
        }
        return strength;
    }
    applyTextTransform(val) {
        if (!val || this.textTransform === 'none')
            return val;
        switch (this.textTransform) {
            case 'uppercase': return val.toUpperCase();
            case 'lowercase': return val.toLowerCase();
            case 'capitalize': return val.charAt(0).toUpperCase() + val.slice(1).toLowerCase();
            case 'pascal': return val.split(/\s+/).map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join('');
            case 'words': return val.split(' ').map(w => w.charAt(0).toUpperCase() + w.slice(1).toLowerCase()).join(' ');
            case 'sentences': return val.split('. ').map(s => s.charAt(0).toUpperCase() + s.slice(1)).join('. ');
            default: return val;
        }
    }
    recognition = null;
    voiceStatusTimer = null;
    setVoiceStatus(listening) {
        this.isRecording = listening;
        // Update the status indicator
        if (listening) {
            this.statusIndicator = 'listening';
        }
        else {
            // Briefly show 'Not listening' then clear
            this.statusIndicator = 'none';
            // Use a custom state via the label; we repurpose the indicator briefly
            clearTimeout(this.voiceStatusTimer);
            // Temporarily inject a custom value to show 'Not listening'
            this._voiceOffLabel = true;
            this.voiceStatusTimer = setTimeout(() => {
                this._voiceOffLabel = false;
                // Force a re-render by toggling a throwaway state
                this.isRecording = false;
            }, 1500);
        }
    }
    startVoiceRecognition = () => {
        // ── Stop if currently recording ─────────────────────────────────────────
        if (this.isRecording) {
            if (this.recognition) {
                this.recognition.stop(); // onend will call setVoiceStatus(false)
            }
            else {
                this.setVoiceStatus(false);
            }
            return;
        }
        // ── Start ────────────────────────────────────────────────────────────────
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        if (SpeechRecognition) {
            this.recognition = new SpeechRecognition();
            this.recognition.continuous = false;
            this.recognition.interimResults = false;
            this.recognition.onstart = () => this.setVoiceStatus(true);
            this.recognition.onend = () => { this.setVoiceStatus(false); this.recognition = null; };
            this.recognition.onerror = () => { this.setVoiceStatus(false); this.recognition = null; };
            this.recognition.onresult = (event) => {
                const transcript = event.results[0][0].transcript;
                this.value = this.applyTextTransform(transcript);
                this.inputInput.emit(this.value);
                this.inputChange.emit(this.value);
            };
            // Optimistically set recording state immediately (onstart fires asynchronously)
            this.setVoiceStatus(true);
            this.recognition.start();
        }
        else {
            // No API — still toggle for visual demo/testing
            this.setVoiceStatus(true);
        }
    };
    handleMouseDown = (e) => {
        if (!this.rippleEffect)
            return;
        const rect = e.currentTarget.getBoundingClientRect();
        this.rippleX = e.clientX - rect.left;
        this.rippleY = e.clientY - rect.top;
        this.showRipple = true;
        setTimeout(() => (this.showRipple = false), 600);
    };
    handleDragOver = (e) => {
        if (!this.dropZone || this.type !== 'file')
            return;
        e.preventDefault();
        this.isDragging = true;
    };
    handleDragLeave = () => {
        this.isDragging = false;
    };
    handleDrop = (e) => {
        if (!this.dropZone || this.type !== 'file')
            return;
        e.preventDefault();
        this.isDragging = false;
        const files = e.dataTransfer?.files;
        if (files && files.length > 0) {
            if (this.filePickerElement) {
                this.filePickerElement.files = files;
                // Trigger the file selected flow
                const event = new window.Event('input', { bubbles: true });
                this.filePickerElement.dispatchEvent(event);
            }
            this.selectedFileNames = Array.from(files).map(f => f.name).join(', ');
            this.fileSelected.emit(files);
        }
    };
    highlightTextMatches(text) {
        if (!text || !this.value || !this.highlightMatches)
            return text;
        const query = this.value.toLowerCase();
        const textLower = text.toLowerCase();
        const index = textLower.indexOf(query);
        if (index === -1)
            return text;
        return (h("span", null, text.slice(0, index), h("b", { class: "match-highlight" }, text.slice(index, index + query.length)), text.slice(index + query.length)));
    }
    getRelativeTimeString(dateStr) {
        try {
            const date = new Date(dateStr);
            if (isNaN(date.getTime()))
                return '';
            const now = new Date();
            const diffInDays = Math.round((date.getTime() - now.getTime()) / (1000 * 60 * 60 * 24));
            const rtf = new Intl.RelativeTimeFormat('en', { numeric: 'auto' });
            return rtf.format(diffInDays, 'day');
        }
        catch {
            return '';
        }
    }
    applyZenithFiltering(val) {
        let result = val;
        if (this.noSpaces)
            result = result.replace(/\s/g, '');
        if (this.alphaOnly)
            result = result.replace(/[^a-zA-Z]/g, '');
        if (this.numericOnly)
            result = result.replace(/[^0-9.]/g, '');
        return result;
    }
    handleInput = (event) => {
        const target = event.target;
        let newValue = target.value;
        newValue = this.applyZenithFiltering(newValue);
        newValue = this.applyTextTransform(newValue);
        target.value = newValue;
        if (this.ghostText) {
            if (newValue && this.ghostText.toLowerCase().startsWith(newValue.toLowerCase())) {
                this.currentGhost = this.ghostText.slice(newValue.length);
            }
            else {
                this.currentGhost = '';
            }
        }
        if (this.allowedChars) {
            const regex = new RegExp(this.allowedChars, 'g');
            const matches = newValue.match(regex);
            newValue = matches ? matches.join('') : '';
            if (target.value !== newValue)
                target.value = newValue;
        }
        if (this.type === 'number') {
            newValue = newValue.replace(/(?!^-)[^0-9.]/g, '');
            const parts = newValue.split('.');
            if (parts.length > 2)
                newValue = parts[0] + '.' + parts.slice(1).join('');
            target.value = newValue;
        }
        if (this.parser)
            newValue = this.parser(newValue);
        if ((this.mask !== 'none' || this.type === 'currency') && this.type !== 'password') {
            newValue = this.applyMask(newValue);
            target.value = newValue;
        }
        if (this.type === 'range')
            this.rangeValue = parseFloat(newValue);
        if (this.type === 'file' && target instanceof HTMLInputElement && target.files) {
            const files = Array.from(target.files);
            this.selectedFileNames = files.map(f => f.name).join(', ');
            this.fileSelected.emit(target.files);
            return;
        }
        this.value = newValue;
        this.currentLength = newValue.length;
        if (this.validationTrigger === 'onInput') {
            this.validate(newValue);
        }
        if (this.autoResize && this.multiline)
            this.resizeTextarea();
        if ((this.suggestions.length > 0 || this.autocompleteSuggestions.length > 0) && newValue) {
            this.showSuggestions = true;
            this.selectedSuggestionIndex = -1;
        }
        if (this.debounce > 0) {
            clearTimeout(this.debounceTimer);
            this.debounceTimer = setTimeout(() => {
                this.inputChange.emit(this.value);
                if (this.analyticsEvent)
                    this.analyticsEvent.emit({ value: this.value });
            }, this.debounce);
        }
        else {
            this.inputChange.emit(this.value);
            if (this.analyticsEvent)
                this.analyticsEvent.emit({ value: this.value });
        }
    };
    handleFocus = (event) => {
        this.isFocused = true;
        this.inputFocus.emit(event);
        if ((this.autoSelect || this.selectOnClick) && this.inputElement) {
            this.inputElement.select();
        }
    };
    handleBlur = (event) => {
        this.isFocused = false;
        if (this.validationTrigger === 'onInput' || this.validationTrigger === 'onBlur') {
            this.validate(this.value);
        }
        this.inputBlur.emit(event);
        if (this.autoTrim && this.value) {
            this.value = this.value.trim();
            this.inputChange.emit(this.value);
        }
    };
    handleRangeManualInput = (e) => {
        const target = e.target;
        const val = target.value;
        const min = parseFloat(this.min) || 0;
        const max = parseFloat(this.max) || 100;
        let numericVal = parseFloat(val);
        if (isNaN(numericVal))
            return;
        if (numericVal < min)
            numericVal = min;
        if (numericVal > max)
            numericVal = max;
        this.rangeValue = numericVal;
        this.value = numericVal.toString();
        this.inputChange.emit(this.value);
    };
    stepValue = (direction) => {
        if (this.disabled || this.readonly || this.type !== 'number')
            return;
        const step = parseFloat(this.step) || 1;
        const current = parseFloat(this.value) || 0;
        const precision = (this.step?.toString().split('.')[1] || '').length;
        let newValue = direction === 'up' ? current + step : current - step;
        newValue = parseFloat(newValue.toFixed(precision));
        if (this.min !== undefined)
            newValue = Math.max(parseFloat(this.min), newValue);
        if (this.max !== undefined)
            newValue = Math.min(parseFloat(this.max), newValue);
        this.value = newValue.toString();
        this.inputChange.emit(this.value);
    };
    renderSteppers() {
        if (this.type !== 'number' || !this.showSteppers || this.variant === 'plain' || this.variant === 'borderless')
            return null;
        return (h("div", { class: "stepper-controls" }, h("ui-button", { variant: "ghost", size: "xxs", iconOnly: true, onClick: () => this.stepValue('up'), disabled: this.disabled || this.readonly, tabIndex: -1, icon: "chevron-up", iconLibrary: "lucide", ariaLabel: "Increase value" }), h("ui-button", { variant: "ghost", size: "xxs", iconOnly: true, onClick: () => this.stepValue('down'), disabled: this.disabled || this.readonly, tabIndex: -1, icon: "chevron-down", iconLibrary: "lucide", ariaLabel: "Decrease value" })));
    }
    handleClear = () => {
        this.value = '';
        this.currentLength = 0;
        this.inputChange.emit(this.value);
        this.inputClear.emit();
        if (this.inputElement)
            this.inputElement.focus();
    };
    handleKeydown = (event) => {
        if (this.type === 'password' && typeof event.getModifierState === 'function') {
            this.capsLockOn = event.getModifierState("CapsLock");
        }
        if (this.showSuggestions && this.suggestions.length > 0) {
            const filtered = this.getFilteredSuggestions();
            if (event.key === 'ArrowDown') {
                event.preventDefault();
                this.selectedSuggestionIndex = Math.min(this.selectedSuggestionIndex + 1, filtered.length - 1);
            }
            else if (event.key === 'ArrowUp') {
                event.preventDefault();
                this.selectedSuggestionIndex = Math.max(this.selectedSuggestionIndex - 1, 0);
            }
            else if (event.key === 'Enter' && this.selectedSuggestionIndex >= 0) {
                event.preventDefault();
                this.selectSuggestion(filtered[this.selectedSuggestionIndex]);
            }
            else if (event.key === 'Escape') {
                this.showSuggestions = false;
                this.selectedSuggestionIndex = -1;
            }
        }
        else if (event.key === 'Escape' && this.clearOnEscape) {
            this.handleClear();
        }
        if (event.key === 'Enter' && this.type === 'search') {
            this.search.emit(this.value);
        }
        this.inputKeydown.emit(event);
    };
    handleKeyup = (event) => {
        if (this.type === 'password' && typeof event.getModifierState === 'function') {
            this.capsLockOn = event.getModifierState("CapsLock");
        }
        this.inputKeyup.emit(event);
    };
    handleCopy = async () => {
        if (this.value) {
            try {
                await navigator.clipboard.writeText(this.value);
                this.inputCopy.emit(this.value);
            }
            catch (err) {
                console.error('Failed to copy:', err);
            }
        }
    };
    selectSuggestion(suggestion) {
        this.value = suggestion;
        this.showSuggestions = false;
        this.selectedSuggestionIndex = -1;
        this.suggestionSelected.emit(suggestion);
        this.inputChange.emit(suggestion);
    }
    getFilteredSuggestions() {
        if (!this.suggestions || !Array.isArray(this.suggestions))
            return [];
        if (!this.value)
            return this.suggestions;
        const query = this.value.toLowerCase();
        return this.suggestions.filter(s => s && typeof s === 'string' && s.toLowerCase().includes(query));
    }
    getCurrencyIcon() {
        if (!this.currency)
            return undefined;
        const map = {
            'USD': 'dollar-sign',
            'EUR': 'euro',
            'GBP': 'pound-sterling',
            'JPY': 'japanese-yen',
            'INR': 'indian-rupee',
            'RUB': 'russian-ruble',
            'ILS': 'shekel-sign'
        };
        return map[this.currency.toUpperCase()];
    }
    renderCurrencyText() {
        try {
            if (this.getCurrencyIcon())
                return null;
            const parts = new Intl.NumberFormat('en', { style: 'currency', currency: this.currency || 'USD' }).formatToParts(0);
            const symbol = parts.find(p => p.type === 'currency')?.value || '$';
            return h("span", { class: "prefix-text currency-text" }, symbol);
        }
        catch {
            return h("span", { class: "prefix-text currency-text" }, this.currency || '$');
        }
    }
    getValidationMessage() {
        if (this.validationState === 'error')
            return this.errorText || this.internalErrorText;
        if (this.validationState === 'success')
            return this.successText;
        if (this.validationState === 'warning')
            return this.warningText;
        if (this.validationState === 'info')
            return this.infoText;
        return this.helperText;
    }
    renderPrefixIcon() {
        let iconName = this.prefixIcon;
        // Explicitly handle 'none' or 'false' — do NOT return for empty string:
        // the type-icon block below may still assign an icon
        if (iconName === 'none' || iconName === 'false')
            return null;
        if (!iconName && this.showTypeIcon && !this.prefixText) {
            const typeIcons = {
                'search': 'search',
                'email': 'mail',
                'tel': 'phone',
                'url': 'link',
                'number': 'hash',
                'date': 'calendar',
                'currency': this.getCurrencyIcon()
            };
            iconName = typeIcons[this.type] ?? '';
        }
        if (!iconName && this.type === 'currency')
            return this.renderCurrencyText();
        if (!iconName && this.mask === 'credit-card')
            iconName = 'credit-card';
        if (!iconName && this.type === 'color')
            iconName = 'palette';
        // For plain/borderless number inputs, we don't want the default hash icon
        if (this.type === 'number' && (this.variant === 'plain' || this.variant === 'borderless') && !this.prefixIcon) {
            return null;
        }
        const hasSlotContent = !!this.element.querySelector('[slot="prefix-icon"]');
        if (!iconName && !hasSlotContent)
            return null;
        return (h("div", { class: {
                'prefix-icon': true,
                'prefix-icon--clickable': this.prefixClickable,
                [`block-color-${this.prefixColor}`]: !!this.prefixColor
            }, onClick: () => this.prefixClickable && this.prefixClick.emit(), role: this.prefixClickable ? 'button' : undefined, tabIndex: this.prefixClickable ? 0 : undefined, "aria-label": this.prefixClickable ? 'Prefix action' : undefined }, h("slot", { name: "prefix-icon" }, iconName && h("ui-icon", { library: "lucide", name: iconName, color: "currentColor" }))));
    }
    renderSuffixContent() {
        const elements = [];
        if (this.showClearButton) {
            elements.push(h("ui-button", { variant: "ghost", size: "xxs", iconOnly: true, class: "clear-button", onClick: this.handleClear, ariaLabel: "Clear input", tabIndex: -1, icon: this.clearIcon, iconLibrary: "lucide" }));
        }
        if (this.type === 'password' && this.showPasswordToggle) {
            const handleHoldStart = () => {
                if (this.revealOnHold)
                    this.isPasswordHeld = true;
            };
            const handleHoldEnd = () => {
                if (this.revealOnHold)
                    this.isPasswordHeld = false;
            };
            elements.push(h("ui-button", { variant: "ghost", size: "xxs", iconOnly: true, class: "password-toggle", onClick: () => !this.revealOnHold && (this.isPasswordVisible = !this.isPasswordVisible), onMouseDown: handleHoldStart, onMouseUp: handleHoldEnd, onMouseLeave: handleHoldEnd, onTouchStart: handleHoldStart, onTouchEnd: handleHoldEnd, ariaLabel: this.isPasswordVisible ? 'Hide password' : 'Show password', tabIndex: -1, icon: this.isPasswordVisible || this.isPasswordHeld ? this.passwordVisibleIcon : this.passwordIcon, iconLibrary: "lucide" }));
        }
        if (this.capsLockOn) {
            elements.push(h("div", { class: "caps-lock-warning", title: "Caps Lock is ON" }, h("ui-icon", { library: "lucide", name: "arrow-big-up" })));
        }
        if (this.loading) {
            elements.push(h("ui-icon", { library: "lucide", name: "loader-2", class: "loading-spinner", spin: true }));
        }
        if (this.showCopy) {
            elements.push(h("ui-button", { variant: "ghost", size: "xxs", iconOnly: true, class: "copy-button", onClick: this.handleCopy, ariaLabel: "Copy to clipboard", icon: "copy", iconLibrary: "lucide" }));
        }
        if (this.showProgressCircle && this.maxLength) {
            const percentage = Math.min((this.currentLength / this.maxLength) * 100, 100);
            const radius = 9;
            const circumference = 2 * Math.PI * radius;
            const offset = circumference - (percentage / 100) * circumference;
            elements.push(h("div", { class: "progress-circle-container", title: `${this.currentLength}/${this.maxLength}` }, h("svg", { class: "progress-circle-svg", viewBox: "0 0 24 24" }, h("circle", { class: "ring-track", cx: "12", cy: "12", r: radius }), h("circle", { class: "ring-fill", cx: "12", cy: "12", r: radius, style: { strokeDasharray: `${circumference}`, strokeDashoffset: `${offset}` } }))));
        }
        if (this.voiceEnabled || this.voiceInput) {
            elements.push(h("ui-button", { variant: this.isRecording ? 'danger' : 'ghost', size: "xxs", iconOnly: true, class: { 'voice-button': true, 'is-recording': this.isRecording }, onClick: this.startVoiceRecognition, ariaLabel: this.isRecording ? 'Stop listening' : 'Start voice input', title: this.isRecording ? 'Listening… click to stop' : 'Click to speak', icon: this.isRecording ? 'mic-off' : 'mic', iconLibrary: "lucide" }));
        }
        if (this.shortcutHint) {
            elements.push(h("div", { class: "shortcut-hint" }, this.shortcutHint));
        }
        const hasSuffixSlot = !!this.element.querySelector('[slot="suffix-icon"]');
        if (this.suffixIcon || hasSuffixSlot) {
            elements.push(h("div", { class: {
                    'suffix-icon': true,
                    'suffix-icon--clickable': this.suffixClickable,
                    [`block-color-${this.suffixColor}`]: !!this.suffixColor
                }, onClick: () => this.suffixClickable && this.suffixClick.emit(), role: this.suffixClickable ? 'button' : undefined, tabIndex: this.suffixClickable ? 0 : undefined, "aria-label": this.suffixClickable ? 'Suffix action' : undefined }, h("slot", { name: "suffix-icon" }, this.suffixIcon && h("ui-icon", { library: "lucide", name: this.suffixIcon, color: "currentColor" }))));
        }
        return elements.length > 0 ? elements : null;
    }
    renderLengthIndicator() {
        if (!this.minLengthIndicator && !this.maxLengthIndicator)
            return null;
        const current = this.currentLength;
        const min = this.minLengthIndicator || this.minLength || 0;
        const max = this.maxLengthIndicator || this.maxLength || 0;
        let status = 'normal';
        if (min && current < min)
            status = 'warning';
        if (max && current > max)
            status = 'error';
        if (min && current >= min && max && current <= max)
            status = 'success';
        return (h("span", { class: `length-indicator ${status}` }, min && current < min && `${min - current} more characters needed`, max && `${current}/${max}`));
    }
    renderAutocomplete() {
        const filtered = this.getFilteredSuggestions();
        const items = this.autocompleteSuggestions.length > 0
            ? this.autocompleteSuggestions
            : filtered.map(s => ({ text: s, subtitle: undefined, icon: undefined }));
        if (!this.showSuggestions || items.length === 0)
            return null;
        return (h("div", { class: "autocomplete-dropdown", exportparts: "dropdown" }, items.map((item, index) => {
            if (!item)
                return null;
            return (h("div", { class: { 'autocomplete-item': true, 'active': index === this.selectedSuggestionIndex }, onClick: () => this.selectSuggestion(item.text) }, item.icon && h("ui-icon", { library: "lucide", name: item.icon, class: "suggestion-icon" }), h("div", { class: "suggestion-text-block" }, h("span", { class: "suggestion-main-text" }, this.highlightTextMatches(item.text)), item.subtitle && h("span", { class: "suggestion-subtitle" }, item.subtitle))));
        })));
    }
    render() {
        const isColor = this.type === 'color';
        const isFile = this.type === 'file';
        const isOtp = this.type === 'otp' || this.type === 'pin';
        const inputType = (this.isPasswordVisible || this.isPasswordHeld) || isColor || isFile ? 'text' : this.type;
        const validationMessage = this.getValidationMessage();
        const isCustomColor = this.color && !STANDARD_COLORS.includes(this.color);
        const hostStyles = {
            ...(isCustomColor ? { '--ui-custom-color': this.color, '--ui-custom-color-rgb': hexToRgb(this.color) } : {}),
            '--ui-input-width': this.width
        };
        const hasRealPrefix = !!((this.prefixIcon && this.prefixIcon !== 'none' && this.prefixIcon !== 'false') || this.prefixText || (this.showTypeIcon && ['search', 'email', 'tel', 'url', 'number', 'date', 'currency'].includes(this.type) && !this.prefixIcon && !this.prefixText && this.variant !== 'plain' && this.variant !== 'borderless') || isColor || this.type === 'currency');
        const hasRealSuffix = !!((this.suffixIcon && this.suffixIcon !== 'none' && this.suffixIcon !== 'false') || this.suffixText || this.showClear || this.type === 'search' || (this.type === 'password' && this.showPasswordToggle) || this.loading || this.showCopy || this.voiceInput || this.shortcutHint);
        const inputClasses = {
            'input-wrapper': true,
            'focused': this.isFocused,
            'disabled': this.disabled,
            'readonly': this.readonly,
            'has-value': !!this.value,
            'has-prefix': hasRealPrefix,
            'has-suffix': hasRealSuffix,
            'multiline': this.multiline,
            'full-width': this.fullWidth,
            'shake-animation': this.shake,
            'gradient-decorators': this.gradientDecorators,
            'is-always-floated': this.alwaysFloated,
            'is-success-pulse': this.successPulse && this.validationState === 'success',
            'is-skeleton': this.skeleton,
            [`variant-${this.variant}`]: true,
            [`size-${this.size}`]: true,
            [`density-${this.density}`]: true,
            'is-otp': isOtp,
            'has-gradient-border': this.gradientBorder,
            'has-backdrop-sheen': this.backdropSheen,
        };
        const commonProps = {
            ref: (el) => (this.inputElement = el),
            class: 'input-field',
            placeholder: (this.floatingLabel && !this.isFocused && !this.value) ? '' : (this.placeholder || this.getMaskPlaceholder()),
            disabled: this.disabled,
            readonly: this.readonly,
            required: this.required,
            autocomplete: this.autocomplete,
            maxlength: isOtp ? this.otpLength : this.maxLength,
            name: this.name,
            id: this.inputId,
            autofocus: this.autofocus,
            onInput: this.handleInput,
            onFocus: this.handleFocus,
            onBlur: this.handleBlur,
            onKeyDown: this.handleKeydown,
            onKeyUp: this.handleKeyup,
        };
        return (h(Host, { key: 'e4063f1d2456a41e57309506da2b79f1bbf518bd', class: {
                [`variant-${this.variant}`]: true,
                [`size-${this.size}`]: true,
                'full-width': this.fullWidth,
                [`has-${this.validationState}`]: this.validationState !== 'none',
                [`input-color-${isCustomColor ? 'custom' : this.color}`]: true,
                'shake-animation': this.shake,
                'focused': this.isFocused,
            }, style: hostStyles }, h("div", { key: '7fd5939b576307e8285e5f53c91a7fc969617fa0', class: { ...inputClasses, 'input-ripple': this.rippleEffect } }, this.label && !this.floatingLabel && !isOtp && h("label", { key: '0fa810d3e66f3d224340d93006df75b63f528912', class: "input-label" }, this.label, this.required && '*'), h("div", { key: 'e2c21f6e14645a1fce1e6de5b1500ba41e04b115', class: "input-container", onMouseDown: this.handleMouseDown, onDragOver: this.handleDragOver, onDragLeave: this.handleDragLeave, onDrop: this.handleDrop }, h("div", { key: '73c7397d9d57c3effd34b6dab5bac043da68a78f', class: "clipping-layer" }, this.showRipple && h("div", { key: 'dc23482a5f56c51605911625605285451225ca81', class: "liquid-ripple", style: { left: `${this.rippleX}px`, top: `${this.rippleY}px` } }), this.linearLoading && h("div", { key: 'a10a205c11a4dc9468d709148ab713f5a927699b', class: "linear-loading-bar" }), this.backdropSheen && h("div", { key: '1d09a9fd9aa04999bc56186fec1be51f963f0e3d', class: "backdrop-sheen-effect" })), this.renderAutocomplete(), (this.badge || (this.dirtyTracking && this.isDirty)) && (h("span", { key: '8b6b915bbf616387f937e25b73c15cd4f42694c3', class: `input-badge ${!this.badge ? 'dot-mode' : ''}` }, this.badge || '')), this.renderPrefixIcon(), this.floatingLabel && !isOtp && h("label", { key: '36418949fb5a3613f3c56517db0b2ba52e74d1d0', class: "floating-label" }, this.label, this.required && '*'), this.multiline ? (h("textarea", { ...commonProps, style: { resize: this.autoResize ? 'none' : this.resize }, value: this.value })) : isOtp ? (h("div", { class: "otp-container" }, Array.from({ length: this.otpLength }).map((_, i) => (h("div", { class: { 'otp-box': true, 'filled': this.value.length > i, 'active': this.value.length === i && this.isFocused } }, this.value[i] || ''))), h("input", { ...commonProps, style: { opacity: '0', position: 'absolute', inset: '0', caretColor: 'transparent' } }))) : this.type === 'range' ? (h("div", { class: "range-input-wrapper", style: { '--range-progress': `${this.getRangePercentage()}%` } }, h("input", { ...commonProps, type: "range", value: this.rangeValue, min: this.min || 0, max: this.max || 100, step: this.step || 1 }), h("div", { class: "range-manual-adornment" }, h("input", { type: "number", class: "range-manual-input", value: this.rangeValue, min: this.min || 0, max: this.max || 100, step: this.step || 1, onInput: this.handleRangeManualInput })))) : (h("div", { class: "input-field-stack" }, h("input", { ...commonProps, type: inputType, value: isFile ? this.selectedFileNames : this.value }), this.currentGhost && h("span", { class: "ghost-text-overlay", onClick: () => (this.value = this.ghostText) }, this.currentGhost))), isColor && (h("input", { key: '71f29e41543ada3bb27402ec955ce17172866c35', type: "color", style: { opacity: '0', position: 'absolute', inset: '0', pointerEvents: 'none' }, value: this.value || '#000000', onInput: (e) => { this.value = e.target.value; this.inputChange.emit(this.value); }, ref: (el) => (this.colorPickerElement = el) })), isFile && (h("input", { key: 'f11732d7b0a60588b2d3fc74525cecb63c494a0d', type: "file", style: { opacity: '0', position: 'absolute', inset: '0', cursor: 'pointer', zIndex: '1' }, accept: this.accept, multiple: this.multiple, onInput: this.handleInput, ref: (el) => (this.filePickerElement = el) })), this.suffixText && h("span", { key: '5daa65c5274948ca30e12f9d305b5ed36aca27b9', class: { 'suffix-text': true, [`block-color-${this.suffixColor}`]: !!this.suffixColor } }, this.suffixText), (this.statusIndicator !== 'none' || this.isRecording || this._voiceOffLabel) && (h("div", { key: 'f0a15ca443598eccff24608f24e03f6b6c524409', class: `status-indicator status-${this.isRecording ? 'listening' : this._voiceOffLabel ? 'offline' : this.statusIndicator}` }, !this.voiceEnabled && !this.voiceInput && (this.statusIndicator === 'listening' || this.isRecording) && (h("ui-icon", { key: '3debcf72af06dab5cd5ab03f9e81793cde4c0a95', library: "lucide", name: "mic", class: "mic-pulse" })), this.statusIndicator !== 'listening' && !this.isRecording && !this._voiceOffLabel && (h("span", { key: '440b5c5cad18a6b7cd0de8c04dd0f49ae35db124', class: "status-dot" })), h("span", { key: 'bffc20acbaf070199bef467cefa3c25adc328221', class: "status-label" }, this.isRecording
            ? 'Listening'
            : this._voiceOffLabel
                ? 'Not listening'
                : this.statusIndicator !== 'none'
                    ? this.statusIndicator.charAt(0).toUpperCase() + this.statusIndicator.slice(1)
                    : null), this.statusIndicator === 'typing' && h("span", { key: '19262bd829f945fd203266ea67c248a94a775f71', class: "typing-animation" }, h("span", { key: '769cbdde9e871c0fefa37466f5189bd4b95f04c9' }), h("span", { key: 'ada0306edd6f3f942e0d0258b820f3d425278654' }), h("span", { key: '687a023614358579750b5f493ad2bb8511ef2910' })))), this.renderSuffixContent(), this.renderSteppers(), this.hintTooltip && h("div", { key: '86d50262507a075bd68ea71fabcf4914d6a118e3', class: "hint-tooltip-icon", title: this.hintTooltip }, h("ui-icon", { key: 'e5590e7a20808a41bdfc3719e00b9e5ad2fc4a1d', library: "lucide", name: "help-circle" }))), (validationMessage || this.showCounter || this.minLengthIndicator || this.maxLengthIndicator || (this.type === 'password' && this.value && this.showPasswordStrength)) && (h("div", { key: '9479bdd436afd44ee5b05dfc99bd6ce84379f058', class: "input-footer" }, this.type === 'password' && this.value && this.showPasswordStrength && (h("div", { key: '0ea62a19ed66dc33e98a3aba4a63c62589fb560e', class: "password-strength-meter" }, h("div", { key: '3564a2205d7ade940909e12ef18b3ec71c06b583', class: `strength-bar strength-${this.passwordStrength}` }))), validationMessage && (h("span", { key: '4015b4eb68d7045a4447df795debefa080acd854', class: `helper-text ${this.validationState !== 'none' ? this.validationState + '-text' : ''}` }, this.validationState === 'error' && h("ui-icon", { key: 'bb9a04f2f7b577d9d797e574263fc96800e7184a', library: "lucide", name: "alert-circle", class: "validation-icon" }), this.validationState === 'warning' && h("ui-icon", { key: '2e756012a47e39f76472cd21497c692cb2cb66fa', library: "lucide", name: "alert-triangle", class: "validation-icon" }), this.validationState === 'success' && h("ui-icon", { key: '66d61660c177e1f4fece47bf7433c37045a13506', library: "lucide", name: "check-circle-2", class: "validation-icon" }), this.validationState === 'info' && h("ui-icon", { key: '6e41af71dd9abacd6f58e386297d023294dff819', library: "lucide", name: "info", class: "validation-icon" }), validationMessage)), this.relativeTime && this.type === 'date' && this.value && (h("span", { key: 'ac8f3dae2f0aa149cf6394e7683599a6a3e4505e', class: "relative-time-overlay" }, this.getRelativeTimeString(this.value))), this.showCounter && this.maxLength && h("span", { key: '5226cbf5034a58151a46c687180616246c9039d9', class: "character-counter" }, this.currentLength, "/", this.maxLength), this.renderLengthIndicator())))));
    }
    static get formAssociated() { return true; }
    static get watchers() { return {
        "value": [{
                "valueChanged": 0
            }],
        "validationState": [{
                "handleValidationStateChange": 0
            }],
        "shake": [{
                "handleShakeChange": 0
            }]
    }; }
};
Input.style = inputCss();

const navigationBarCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{--nav-bg:#fcfcfc;--nav-color:#000000;--nav-border-color:#d9d9d9;--nav-item-hover-bg:#e6e6e6;--nav-item-active-bg:rgba(0, 138, 22, 0.08);--nav-item-active-color:#008a16;--nav-accent-gradient:linear-gradient(135deg, #3b82f6 0%, #8b5cf6 100%);--nav-width:280px;--nav-transition:width 0.3s cubic-bezier(0.4, 0.0, 0.2, 1);display:flex;flex-direction:column;height:100%;width:var(--nav-width);background:var(--nav-bg);color:var(--nav-color);border-right:1px solid var(--nav-border-color);transition:var(--nav-transition);box-sizing:border-box;position:relative;z-index:100}:host(.pos-right){border-right:none;border-left:1px solid var(--nav-border-color)}.nav-toggle-edge{position:absolute;top:48px;right:-12px;width:24px;height:24px;background:var(--nav-bg);border:1px solid var(--nav-border-color);border-radius:50%;display:flex;align-items:center;justify-content:center;cursor:pointer;z-index:101;color:var(--nav-color);box-shadow:0 1px 3px rgba(0, 0, 0, 0.1);transition:transform 0.2s, background-color 0.2s}.nav-toggle-edge:hover{background-color:var(--nav-item-hover-bg)}:host(.pos-right) .nav-toggle-edge{right:auto;left:-12px;transform:rotate(180deg)}:host(.is-collapsed) .nav-toggle-edge{transform:rotate(180deg)}:host(.pos-right.is-collapsed) .nav-toggle-edge{transform:rotate(0deg)}:host([data-theme=dark]){--nav-bg:#111827;--nav-color:#94a3b8;--nav-border-color:#1e293b;--nav-item-hover-bg:#1e293b;--nav-item-active-bg:rgba(0, 138, 22, 0.15);--nav-item-active-color:#008a16}:host([data-theme=green]){--nav-bg:#3DCD58;--nav-color:#ffffff;--nav-border-color:rgba(255, 255, 255, 0.2);--nav-item-hover-bg:rgba(255, 255, 255, 0.1);--nav-item-active-bg:rgba(255, 255, 255, 0.2);--nav-item-active-color:#ffffff}:host([orientation=horizontal]){width:100%;height:64px;flex-direction:row;border-right:none;border-bottom:1px solid var(--nav-border-color)}:host([orientation=horizontal]) .nav-blocks-container{display:flex !important;flex-direction:row !important;align-items:center;width:100%;height:100%;overflow:visible;flex-wrap:nowrap !important;justify-content:flex-start !important}:host([orientation=horizontal]) .nav-header{border-bottom:none;border-right:1px solid var(--nav-border-color);flex-shrink:0}:host(.is-collapsed) .nav-block-categories,:host(.is-collapsed) .nav-block-top,:host(.is-collapsed) .nav-block-secondary,:host(.is-collapsed) .nav-block-bottom,:host(.is-collapsed) .nav-block-profile{overflow:visible !important}:host([orientation=horizontal]) .nav-block-bottom{margin-left:auto}:host([orientation=horizontal]) .nav-block-categories,:host([orientation=horizontal]) .nav-block-top,:host([orientation=horizontal]) .nav-block-secondary,:host([orientation=horizontal]) .nav-block-bottom,:host([orientation=horizontal]) .nav-block-profile{display:flex !important;flex-direction:row !important;align-items:center;padding:0;overflow:visible !important;border:none !important;height:100%;flex-shrink:0;flex-grow:0 !important;max-height:none !important;flex-wrap:nowrap !important}:host([orientation=horizontal]) .nav-block-categories,:host([orientation=horizontal]) .nav-block-top,:host([orientation=horizontal]) .nav-block-secondary,:host([orientation=horizontal]) .nav-search-bar{border-right:none !important}:host([orientation=horizontal]) .nav-block-top{flex:none}:host([orientation=horizontal]) .nav-item-wrapper{height:100%;display:flex !important;flex-direction:row !important;align-items:center;flex-shrink:0}:host([orientation=horizontal]) .nav-item{height:100%;padding:0 6px;margin:0 !important;border-radius:0;display:flex;align-items:center;justify-content:center;white-space:nowrap}:host([orientation=horizontal]) .nav-icon{margin-right:4px;}:host([orientation=horizontal]) .nav-glider{left:0;right:auto;bottom:0px !important;top:auto !important;height:3px !important;border-radius:4px 4px 0 0;background-color:var(--nav-item-active-color);transition:left 0.3s cubic-bezier(0.4, 0, 0.2, 1), width 0.3s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s}:host([orientation=horizontal]) .nav-toggle-edge{display:none}:host([orientation=horizontal]) .nav-block-bottom .nav-label,:host([orientation=horizontal]) .nav-block-profile .nav-label{display:none;}:host([orientation=horizontal]) .nav-search-bar{padding:0 12px;border-bottom:none;border-right:1px solid var(--nav-border-color);height:100%;display:flex;align-items:center}:host([orientation=horizontal]) .nav-search-bar>div{width:150px}:host(.is-drawer){position:fixed;top:0;left:0;bottom:0;height:100vh;box-shadow:4px 0 16px rgba(0, 0, 0, 0.1);z-index:1000}:host(.is-drawer.pos-right){left:auto;right:0;box-shadow:-4px 0 16px rgba(0, 0, 0, 0.1)}.nav-backdrop{position:fixed;top:0;left:0;right:0;bottom:0;background-color:rgba(0, 0, 0, 0.4);z-index:-1;}:host(.is-drawer){overflow:visible;}.nav-header{flex-shrink:0;min-height:64px;display:flex;align-items:center;padding:0 16px;overflow:hidden;white-space:nowrap;position:relative}.nav-mobile-close{position:absolute;right:16px;top:50%;transform:translateY(-50%);cursor:pointer;padding:4px}.nav-blocks-container{display:flex;flex-direction:column;height:100%;overflow:visible;}.nav-block-categories{flex-shrink:0;max-height:30%;overflow-y:auto;overflow-x:visible;display:flex;flex-direction:column;padding:8px 0;border-bottom:1px solid var(--nav-border-color);scrollbar-width:thin;scrollbar-color:var(--nav-border-color) transparent}.nav-block-top{flex:1;overflow-y:auto;overflow-x:visible;display:flex;flex-direction:column;padding:8px 0;scrollbar-width:thin;scrollbar-color:var(--nav-border-color) transparent}.nav-block-bottom{flex-shrink:0;border-top:1px solid var(--nav-border-color);padding:8px 0;display:flex;flex-direction:column;overflow:visible;min-height:fit-content;max-height:fit-content;}.nav-header{border-bottom:1px solid var(--nav-border-color)}.nav-search-bar{padding:8px 16px;border-bottom:1px solid var(--nav-border-color)}.nav-block-secondary{padding:8px 0;border-top:1px solid var(--nav-border-color);display:flex;flex-direction:column;overflow:visible}.nav-block-profile{flex-shrink:0;padding:8px 0;border-top:1px solid var(--nav-border-color);display:flex;flex-direction:column;overflow:visible;min-height:fit-content;max-height:fit-content;}.nav-block-categories::-webkit-scrollbar,.nav-block-top::-webkit-scrollbar{width:4px}.nav-block-categories::-webkit-scrollbar-thumb,.nav-block-top::-webkit-scrollbar-thumb{background-color:var(--nav-border-color);border-radius:4px}.nav-item-wrapper{display:flex;flex-direction:column;min-width:0;}.nav-item{display:flex;align-items:center;height:40px;cursor:pointer;user-select:none;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);white-space:nowrap;position:relative;overflow:visible;margin:2px 8px;border-radius:8px;outline:none;}a.nav-item{text-decoration:none;color:inherit}.nav-item:focus-visible{outline:2px solid var(--nav-item-active-color);outline-offset:-2px}.nav-item:hover{background-color:var(--nav-item-hover-bg)}.nav-item.active,.nav-item.active-ancestor{background-color:var(--nav-item-active-bg);color:var(--nav-item-active-color);font-weight:500;position:relative}.nav-glider{position:absolute;width:4px;background-color:#008a16;border-radius:4px;transition:top 0.25s cubic-bezier(0.4, 0, 0.2, 1), height 0.2s ease, opacity 0.2s;pointer-events:none;z-index:10;left:6px}:host(.indicator-end) .nav-glider{left:auto;right:6px}.nav-item-wrapper:not(.level-0)>.nav-item{font-size:0.95em;opacity:0.9;height:36px;}.nav-item-wrapper:not(.level-0)>.nav-item.active{background-color:var(--nav-item-active-bg);color:var(--nav-item-active-color);font-weight:600;position:relative}.nav-item-wrapper:not(.level-0)>.nav-item.active::before{content:"";position:absolute;left:2px;top:50%;transform:translateY(-50%);width:4px;height:32px;border-radius:4px;background-color:var(--nav-item-active-color)}.nav-children{position:relative;}.nav-icon-container{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0}.nav-status-dot{position:absolute;top:2px;right:12px;width:8px;height:8px;border-radius:50%;border:1.5px solid var(--nav-bg);z-index:2}:host(.is-collapsed) .nav-status-dot,:host([orientation=horizontal]) .nav-status-dot{right:0px}.nav-status-dot.status-online{background-color:#22c55e}.nav-status-dot.status-offline{background-color:#94a3b8}.nav-status-dot.status-away{background-color:#eab308}.nav-status-dot.status-busy{background-color:#ef4444}.nav-icon{display:flex;align-items:center;justify-content:center;width:24px;height:24px;flex-shrink:0;margin-right:12px}:host(.is-collapsed) .nav-icon,:host([orientation=horizontal]) .nav-block-bottom .nav-icon,:host([orientation=horizontal]) .nav-block-profile .nav-icon{margin-right:0}.nav-label-container{display:flex;align-items:center;gap:8px;flex:1;min-width:0}.nav-badge{background-color:var(--nav-item-active-color);color:white;font-size:10px;font-weight:700;padding:0 6px;height:16px;border-radius:8px;display:flex;align-items:center;justify-content:center;flex-shrink:0}.nav-badge-mini{position:absolute;top:-4px;right:-4px;background-color:#ef4444;color:white;font-size:9px;font-weight:800;min-width:14px;height:14px;padding:0 3px;border-radius:7px;display:flex;align-items:center;justify-content:center;border:1.5px solid var(--nav-bg);z-index:3}.nav-item{border-left:3px solid transparent}.nav-item.active .nav-icon{color:currentColor;}.nav-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.nav-item.no-icon .nav-label{font-size:12px;opacity:0.8;padding-left:4px}.nav-item.is-user-profile .nav-icon{background:var(--nav-accent-gradient);border-radius:50%;color:white !important;width:32px;height:32px;min-width:32px;box-shadow:0 4px 10px rgba(59, 130, 246, 0.4);margin-right:12px}.nav-item.is-user-profile .nav-icon ui-icon{width:18px !important;height:18px !important;font-size:18px !important}.nav-item.is-user-profile .nav-label{font-weight:600;color:var(--nav-color)}.nav-arrow{display:flex;align-items:center;justify-content:center;width:16px;height:16px;margin-left:8px;transition:transform 0.2s}:host([orientation=horizontal]) .nav-arrow{margin-left:4px}.nav-arrow .rotate-180{transform:rotate(180deg)}.nav-children{display:flex;flex-direction:column;overflow:hidden;animation:slideDown 0.2s ease-out}@keyframes slideDown{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}:host(.is-collapsed:not([orientation=horizontal])) .nav-item{justify-content:center;padding:0 !important;margin:4px 0;width:100%;border-radius:0}:host(.is-collapsed:not([orientation=horizontal])) .nav-icon{margin-right:0}:host(.is-collapsed:not([orientation=horizontal])) .nav-label,:host(.is-collapsed:not([orientation=horizontal])) .nav-arrow{display:none;}.nav-tooltip{position:absolute;background:#1e293b;color:#f8fafc;padding:6px 12px;border-radius:6px;font-size:12px;font-weight:500;white-space:nowrap;box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);border:1px solid rgba(255, 255, 255, 0.1);z-index:2000;pointer-events:none;opacity:0;visibility:hidden;transition:opacity 0.2s, transform 0.2s, visibility 0.2s}.nav-tooltip.visible{opacity:1;visibility:visible}:host(.is-collapsed:not([orientation=horizontal])) .nav-tooltip{left:100%;top:50%;transform:translateY(-50%) translateX(-10px);margin-left:10px}:host(.is-collapsed:not([orientation=horizontal])) .nav-tooltip.visible{transform:translateY(-50%) translateX(0)}:host([orientation=horizontal]) .nav-tooltip{top:100%;left:50%;transform:translateX(-50%) translateY(-10px);margin-top:8px}:host([orientation=horizontal]) .nav-tooltip.visible{transform:translateX(-50%) translateY(0)}:host(:not(.is-collapsed):not([orientation=horizontal])) .nav-tooltip{left:50%;bottom:100%;transform:translateX(-50%) translateY(10px);margin-bottom:8px}:host(:not(.is-collapsed):not([orientation=horizontal])) .nav-tooltip.visible{transform:translateX(-50%) translateY(0)}.nav-tooltip::before{content:"";position:absolute;width:8px;height:8px;background:#1e293b;transform:rotate(45deg);z-index:-1;border:1px solid rgba(255, 255, 255, 0.1)}:host(.is-collapsed:not([orientation=horizontal])) .nav-tooltip::before{left:-4px;top:50%;margin-top:-4px;border-right:none;border-top:none}:host([orientation=horizontal]) .nav-tooltip::before{top:-4px;left:50%;margin-left:-4px;border-right:none;border-bottom:none}:host(:not(.is-collapsed):not([orientation=horizontal])) .nav-tooltip::before{bottom:-4px;left:12px;border-left:none;border-top:none}`;

const NavigationBar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.navOpen = createEvent(this, "navOpen");
        this.navClose = createEvent(this, "navClose");
        this.navToggle = createEvent(this, "navToggle");
        this.navItemClick = createEvent(this, "navItemClick");
        this.itemExpand = createEvent(this, "itemExpand");
        this.itemCollapse = createEvent(this, "itemCollapse");
    }
    get el() { return getElement(this); }
    // --------------------------------------------------------------------------
    // Props: Configuration API
    // --------------------------------------------------------------------------
    /** Main data source: Array of navigation items */
    items = [];
    /** Secondary data source: Categories to show at the top */
    categories = [];
    /** Bottom items data source */
    bottomItems = [];
    /** Secondary items data source */
    secondaryItems = [];
    /** Secondary bottom items data source */
    bottomItemsSecondary = [];
    /** Show search bar in expanded mode */
    showSearch = false;
    /** Mode of the navigation */
    mode = 'collapsed';
    /** Positioning of the navigation */
    position = 'left';
    /** Whether the navigation is collapsible */
    collapsible = true;
    /** Width when expanded (css unit) */
    expandedWidth = '280px';
    /** Width when collapsed (css unit) */
    collapsedWidth = '64px';
    /** Show only icons in collapsed mode */
    iconOnly = true;
    /** Accordion mode: one expanded at a time */
    accordion = false;
    /** ID of the currently active item (route aware) */
    activeId;
    /** Theme preference (just sets a class or attribute) */
    theme = 'auto';
    /** Layout orientation */
    orientation = 'vertical';
    /** Density of items */
    density = 'comfortable';
    /** Position of the active item indicator bar: 'start' (left) or 'end' (right) */
    indicatorPosition = 'start';
    /** Maximum number of items to show before overflowing to "More" menu */
    maxItems = 4;
    /** Company Logo URL */
    companyLogo;
    /** Company Name */
    companyName;
    /** Default library for icons */
    iconLibrary = 'default';
    // --------------------------------------------------------------------------
    // State
    // --------------------------------------------------------------------------
    isExpanded = true;
    isMobile = false;
    expandedItems = new Set();
    keyword = '';
    effectiveTheme = 'light';
    gliderTop = 0;
    gliderHeight = 0;
    gliderLeft = 0;
    gliderWidth = 0;
    gliderOpacity = 0;
    hoveredId = null;
    hoveredIconId = null;
    // --------------------------------------------------------------------------
    // Events
    // --------------------------------------------------------------------------
    navOpen;
    navClose;
    navToggle;
    navItemClick;
    itemExpand;
    itemCollapse;
    // --------------------------------------------------------------------------
    // Lifecycle & Watchers
    // --------------------------------------------------------------------------
    componentWillLoad() {
        this.checkScreenSize();
        this.handleModeChange();
        this.expandParents();
        this.syncTheme();
    }
    componentDidLoad() {
        // Resize Observer for Glider
        this.resizeObserver = new ResizeObserver(() => {
            this.checkScreenSize();
            this.updateGlider();
        });
        this.resizeObserver.observe(document.body);
        // Theme Observer (watch for runtime theme changes)
        this.themeObserver = new MutationObserver(() => this.syncTheme());
        this.themeObserver.observe(document.documentElement, { attributes: true, attributeFilter: ['class', 'data-theme'] });
        this.themeObserver.observe(document.body, { attributes: true, attributeFilter: ['class'] });
        // Initial Glider
        requestAnimationFrame(() => this.updateGlider());
    }
    componentDidRender() {
        requestAnimationFrame(() => this.updateGlider());
    }
    disconnectedCallback() {
        if (this.resizeObserver)
            this.resizeObserver.disconnect();
        if (this.themeObserver)
            this.themeObserver.disconnect();
    }
    handleResize() {
        if (this.mode === 'auto') {
            this.checkScreenSize();
        }
    }
    checkScreenSize() {
        const isMobileNow = window.innerWidth < 768;
        if (isMobileNow !== this.isMobile) {
            this.isMobile = isMobileNow;
            // If switching to mobile, collapse by default
            if (isMobileNow) {
                this.isExpanded = false;
            }
            else {
                this.isExpanded = true;
            }
        }
    }
    handleModeChange() {
        if (this.mode === 'auto') {
            this.checkScreenSize();
        }
        else {
            this.isExpanded = this.mode === 'expanded';
        }
        this.isMobile = window.innerWidth < 768;
        this.isMobile = window.innerWidth < 768;
    }
    handleScroll() {
        this.updateGlider();
    }
    onThemeChange() {
        this.syncTheme();
    }
    onActiveIdChange() {
        this.expandParents();
        requestAnimationFrame(() => this.updateGlider());
    }
    onExpandChange() {
        requestAnimationFrame(() => this.updateGlider());
    }
    resizeObserver;
    themeObserver;
    // onWindowResize already defined or needs to be matched
    syncTheme() {
        if (this.theme === 'auto') {
            const el = document.documentElement;
            const body = document.body;
            const themeAttr = el.getAttribute('data-theme');
            if (el.classList.contains('green') || body.classList.contains('green') || themeAttr === 'green') {
                this.effectiveTheme = 'green';
            }
            else if (el.classList.contains('dark') || body.classList.contains('dark') || themeAttr === 'dark' || window.matchMedia('(prefers-color-scheme: dark)').matches) {
                this.effectiveTheme = 'dark';
            }
            else {
                this.effectiveTheme = 'light';
            }
        }
        else {
            this.effectiveTheme = this.theme;
        }
    }
    updateGlider() {
        if (!this.el)
            return;
        // Target both active item and active ancestor, or the hovered item
        const selector = this.hoveredId ? `#nav-item-${this.hoveredId}` : '.nav-item.active, .nav-item.active-ancestor';
        const activeItem = this.el.shadowRoot?.querySelector(selector);
        if (activeItem) {
            const hostRect = this.el.getBoundingClientRect();
            const itemRect = activeItem.getBoundingClientRect();
            if (this.orientation === 'horizontal') {
                const left = itemRect.left - hostRect.left;
                const width = itemRect.width;
                if (this.gliderLeft !== left || this.gliderWidth !== width || this.gliderOpacity !== 1) {
                    this.gliderLeft = left;
                    this.gliderWidth = width;
                    this.gliderOpacity = 1;
                }
            }
            else {
                const top = itemRect.top - hostRect.top;
                const height = itemRect.height;
                // Only update if values actually changed to prevent render loops
                if (this.gliderTop !== top || this.gliderHeight !== height || this.gliderOpacity !== 1) {
                    this.gliderTop = top;
                    this.gliderHeight = height;
                    this.gliderOpacity = 1;
                }
            }
        }
        else {
            if (this.gliderOpacity !== 0) {
                this.gliderOpacity = 0;
            }
        }
    }
    expandParents() {
        if (!this.activeId)
            return;
        const newExpanded = new Set(this.expandedItems);
        let changed = false;
        const findAndExpand = (items) => {
            for (const item of items) {
                if (item.children && item.children.length > 0) {
                    if (this.hasActiveChild(item)) {
                        if (!newExpanded.has(item.id)) {
                            newExpanded.add(item.id);
                            changed = true;
                        }
                        findAndExpand(item.children);
                    }
                }
            }
        };
        findAndExpand(this.categories || []);
        findAndExpand(this.items || []);
        findAndExpand(this.bottomItems || []);
        findAndExpand(this.secondaryItems || []);
        findAndExpand(this.bottomItemsSecondary || []);
        if (changed) {
            this.expandedItems = newExpanded;
        }
    }
    // --------------------------------------------------------------------------
    // Public API (Methods)
    // --------------------------------------------------------------------------
    async open() {
        if (!this.collapsible)
            return;
        this.isExpanded = true;
        if (this.mode !== 'auto')
            this.mode = 'expanded';
        this.navOpen.emit();
    }
    async close() {
        if (!this.collapsible)
            return;
        this.isExpanded = false;
        if (this.mode !== 'auto')
            this.mode = 'collapsed';
        this.navClose.emit();
    }
    async toggle() {
        if (this.isExpanded)
            await this.close();
        else
            await this.open();
        this.navToggle.emit({ expanded: this.isExpanded });
    }
    async setActive(id) {
        this.activeId = id;
    }
    // --------------------------------------------------------------------------
    // Internal Logic
    // --------------------------------------------------------------------------
    handleItemClick(item) {
        if (item.children && item.children.length > 0) {
            if (!this.isExpanded || this.orientation === 'horizontal') {
                let firstChild = item.children[0];
                while (firstChild && firstChild.children && firstChild.children.length > 0) {
                    firstChild = firstChild.children[0];
                }
                if (firstChild && !firstChild.disabled) {
                    this.activeId = firstChild.id;
                    this.navItemClick.emit(firstChild);
                    if (this.isMobile) {
                        this.close();
                    }
                }
                return;
            }
            // Toggle the item's expansion state
            this.toggleItem(item.id);
        }
        else {
            if (item.disabled)
                return;
            this.activeId = item.id;
            this.navItemClick.emit(item);
            // Auto-close on mobile selection
            if (this.isMobile) {
                this.close();
            }
        }
    }
    hasActiveChild(item) {
        if (!item.children)
            return false;
        return item.children.some(child => child.id === this.activeId || this.hasActiveChild(child));
    }
    toggleItem(id) {
        const newSet = new Set(this.expandedItems);
        if (newSet.has(id)) {
            newSet.delete(id);
            this.itemCollapse.emit(id);
        }
        else {
            newSet.add(id);
            this.itemExpand.emit(id);
        }
        this.expandedItems = newSet;
    }
    // --------------------------------------------------------------------------
    // Keyboard Navigation
    // --------------------------------------------------------------------------
    handleKeyDown(e, item) {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            this.handleItemClick(item);
        }
        else if (e.key === 'ArrowDown') {
            e.preventDefault();
            this.focusNext(e.target);
        }
        else if (e.key === 'ArrowUp') {
            e.preventDefault();
            this.focusPrev(e.target);
        }
        else if (e.key === 'ArrowRight') {
            if (!this.expandedItems.has(item.id)) {
                this.toggleItem(item.id);
            }
        }
        else if (e.key === 'ArrowLeft') {
            if (this.expandedItems.has(item.id)) {
                this.toggleItem(item.id);
            }
        }
    }
    focusNext(current) {
        const all = Array.from(this.el.shadowRoot.querySelectorAll('.nav-item'));
        const index = all.indexOf(current);
        if (index > -1 && index < all.length - 1) {
            all[index + 1].focus();
        }
    }
    focusPrev(current) {
        const all = Array.from(this.el.shadowRoot.querySelectorAll('.nav-item'));
        const index = all.indexOf(current);
        if (index > 0) {
            all[index - 1].focus();
        }
    }
    // --------------------------------------------------------------------------
    // Render Helpers
    // --------------------------------------------------------------------------
    renderToggle() {
        if (!this.collapsible || this.isMobile)
            return null;
        return (h("div", { class: "nav-toggle-edge", onClick: () => this.toggle() }, h("svg", { viewBox: "0 0 24 24", width: "14", height: "14", stroke: "currentColor", "stroke-width": "2", fill: "none" }, h("path", { d: "M15 18l-6-6 6-6" }))));
    }
    filterItems(items) {
        if (!this.keyword)
            return items;
        const lower = this.keyword.toLowerCase();
        // Recursive filter
        const filterRec = (list) => {
            return list
                .filter(item => {
                const match = item.label.toLowerCase().includes(lower);
                const childMatch = item.children && filterRec(item.children).length > 0;
                return match || childMatch;
            })
                .map(item => {
                // Return shallow clone with filtered children if needed?
                // For simplicity, just return item, but if we assume children need filtering for display:
                if (item.children) {
                    return { ...item, children: filterRec(item.children) };
                }
                return item;
            });
        };
        return filterRec(items);
    }
    /**
     * Render a list of items with Overflow logic (Max 4 items -> 3 + More)
     */
    renderNavList(items, keySuffix) {
        const filtered = this.filterItems(items);
        const threshold = this.maxItems;
        // If searching OR in horizontal mode, show all matches (disable overflow for "all items" request)
        if (this.keyword || this.orientation === 'horizontal' || filtered.length <= threshold) {
            return filtered.map(item => this.renderItem(item));
        }
        // Overflow Logic: Show (threshold-1) items + "More"
        const visibleCount = threshold - 1;
        const visible = filtered.slice(0, visibleCount);
        const hidden = filtered.slice(visibleCount);
        const moreItem = {
            id: `nav-overflow-${keySuffix}`,
            label: 'More',
            icon: 'more-horizontal',
            iconLibrary: 'lucide', // Defaulting to lucide for 'More' dots
            children: hidden,
        };
        return [...visible.map(item => this.renderItem(item)), this.renderItem(moreItem)];
    }
    getBlocks() {
        return {
            categories: [...(this.categories || []), ...(this.items || []).filter(i => i.block === 'categories')],
            primary: (this.items || []).filter(i => !i.block || i.block === 'primary'),
            secondary: [...(this.secondaryItems || []), ...(this.items || []).filter(i => i.block === 'secondary')],
            bottom: [...(this.bottomItems || []), ...(this.items || []).filter(i => i.block === 'bottom')],
            bottomSecondary: [...(this.bottomItemsSecondary || []), ...(this.items || []).filter(i => i.block === 'bottomSecondary')],
        };
    }
    // --------------------------------------------------------------------------
    // Render
    // --------------------------------------------------------------------------
    render() {
        const blocks = this.getBlocks();
        const hostClass = [
            !this.isExpanded && 'is-collapsed',
            this.isMobile && 'is-drawer',
            this.isMobile && this.isExpanded && 'drawer-open',
            `pos-${typeof this.position === 'string' ? this.position : ''}`,
            `indicator-${typeof this.indicatorPosition === 'string' ? this.indicatorPosition : ''}`,
        ].filter(Boolean).join(' ');
        const vars = {
            '--nav-width': typeof this.isExpanded === 'boolean' ? (this.isExpanded ? this.expandedWidth : this.isMobile ? '0px' : this.collapsedWidth) : this.collapsedWidth,
        };
        return (h(Host, { key: '5d7d3ba7a371bb0b2c7067c9ef6ffadf1cc5cf2c', style: vars, class: hostClass, theme: null, "data-theme": this.effectiveTheme }, h("div", { key: '822e6bca215424cf97ee14360e5474f279898d08', class: "nav-glider", style: {
                top: this.orientation === 'horizontal' ? 'auto' : `${typeof this.gliderTop === 'number' ? this.gliderTop : 0}px`,
                height: this.orientation === 'horizontal' ? '3px' : `${typeof this.gliderHeight === 'number' ? this.gliderHeight : 0}px`,
                left: this.orientation === 'horizontal' ? `${typeof this.gliderLeft === 'number' ? this.gliderLeft : 0}px` : this.position === 'left' ? '6px' : 'auto',
                right: this.orientation === 'horizontal' ? 'auto' : this.position === 'right' ? '6px' : 'auto',
                width: this.orientation === 'horizontal' ? `${typeof this.gliderWidth === 'number' ? this.gliderWidth : 0}px` : '4px',
                bottom: this.orientation === 'horizontal' ? '0' : 'auto',
                opacity: `${typeof this.gliderOpacity === 'number' ? this.gliderOpacity : 0}`,
            } }), this.renderToggle(), this.isMobile && this.isExpanded && h("div", { key: 'e561f5ba73dcded187227d24c05271ffe8cd35be', class: "nav-backdrop", onClick: () => this.close() }), h("div", { key: '00336a31f7c62f1e4225811a8526316869eacb67', class: "nav-blocks-container" }, h("div", { key: '08bb7aa63e515127943aa1858b6246e924752237', class: "nav-header" }, h("slot", { key: '5052017567308f9e24e13c273fa6e6f81bdabb54', name: "header" }, (this.companyLogo || this.companyName) && (h("div", { key: '3a374287ff56db7e8e48786a9fd82d046eb27a24', class: "nav-company-block", style: { display: 'flex', alignItems: 'center', gap: '12px', padding: '0 24px', height: '64px' } }, this.companyLogo && h("img", { key: 'c51ab5c8072dce6e11738da2df7a2c2d77534989', src: this.companyLogo, alt: this.companyName || 'Logo', style: { height: '32px', width: 'auto' } }), this.isExpanded && this.companyName && (h("span", { key: 'c37a8d0bc5ea530ac6e4c90d45aed571e401ad65', class: "nav-company-name", style: { fontWeight: '600', fontSize: '16px' } }, this.companyName))))), h("slot", { key: 'b552595e83958add3197c9bd83eda6454d975dad', name: "logo" }), this.isMobile && (h("div", { key: 'dfc692bd4d940e34bdd3c1ee0f7bab24e390623a', class: "nav-mobile-close", onClick: () => this.close() }, h("svg", { key: '38bc9e4c9799d01510b8c0a354d4c4be370775c8', viewBox: "0 0 24 24", width: "24", height: "24", stroke: "currentColor", fill: "none" }, h("path", { key: '9e5ce385a716770a940247a2e97d5a002928f536', d: "M18 6L6 18M6 6l12 12" }))))), this.showSearch && this.isExpanded && (h("div", { key: '6210ee48a40ec6ac0a1b37c6064be9539041d89a', class: "nav-search-bar" }, h("div", { key: '91be6b4b089065dec8601ad39d6f5ee6314c2743', style: {
                position: 'relative',
                display: 'flex',
                alignItems: 'center',
                background: 'var(--nav-item-hover-bg, #f1f5f9)',
                borderRadius: '6px',
                padding: '4px 8px',
            } }, h("svg", { key: 'eb7de33bd4feea4137a01b38a3c461536d471d0e', viewBox: "0 0 24 24", width: "16", height: "16", fill: "none", stroke: "currentColor", "stroke-width": "2", style: { opacity: '0.5', marginRight: '8px' } }, h("circle", { key: 'e38c3bf011c65f5f6adf7283cfa4362afba456d6', cx: "11", cy: "11", r: "8" }), h("line", { key: '62dbce91bf5b3cce61f4fe711b9d70b9ddb2192f', x1: "21", y1: "21", x2: "16.65", y2: "16.65" })), h("input", { key: '2e3c9743f142fe4fec5e5d232edbfa7a453a5520', type: "text", placeholder: "Search...", value: this.keyword, onInput: e => (this.keyword = e.target.value), style: {
                background: 'transparent',
                border: 'none',
                outline: 'none',
                width: '100%',
                fontSize: '14px',
                color: 'inherit',
            } })))), blocks.categories.length > 0 && (h("div", { key: 'bbfc7918309d8a05aa89f1cf29564f4a7e0f5657', class: "nav-block-categories", role: "tree" }, this.renderNavList(blocks.categories, 'cat'))), h("div", { key: '856526bb6ebc4fb642f895e9d3977068562df9db', class: "nav-block-top", role: "tree" }, this.renderNavList(blocks.primary, 'top'), h("slot", { key: 'f7f37b72d9b37144f7a982028d04dc2a182dd792', name: "menu-item" }), " ", blocks.primary.length === 0 && blocks.categories.length === 0 && blocks.secondary.length === 0 && h("slot", { key: '53ca544ecb67734f153b7c327c85100f33c74092', name: "empty-state" }, "No Items")), blocks.secondary.length > 0 && (h("div", { key: '2d23b401f03faaa7c27aae850e84a5de3751b667', class: "nav-block-secondary", role: "tree" }, this.renderNavList(blocks.secondary, 'sec'))), blocks.bottom.length > 0 && (h("div", { key: 'e7f4d57d73f042d7c300f6a960469a8cef50afdd', class: "nav-block-bottom", role: "tree" }, blocks.bottom.map(item => this.renderItem(item)), h("slot", { key: '4ae38e3116a10f7ab3a244fb0ae3cfc3ad91e7d6', name: "footer" }))), blocks.bottomSecondary.length > 0 && (h("div", { key: 'e79b2b33ccf1e47902376599065562024a45eaff', class: "nav-block-profile", role: "tree" }, blocks.bottomSecondary.map(item => this.renderItem(item)))))));
    }
    isBottomItem(id) {
        const blocks = this.getBlocks();
        return blocks.bottom.some(item => item.id === id) || blocks.bottomSecondary.some(item => item.id === id);
    }
    /**
     * Recursive Item Renderer
     */
    renderItem(item, level = 0) {
        if (item.type === 'divider') {
            return h("div", { class: "nav-divider", style: { height: '1px', background: 'var(--ui-input-border, #e2e8f0)', margin: '8px 0' } });
        }
        if (item.type === 'title') {
            return this.isExpanded || this.orientation === 'horizontal' ? (h("div", { class: `nav-title level-${level}`, style: { fontSize: '11px', fontWeight: 'bold', textTransform: 'uppercase', color: '#94a3b8', padding: '12px 16px 4px 16px' } }, item.label)) : null;
        }
        const expanded = this.expandedItems.has(item.id);
        const isDirectlyActive = this.activeId === item.id;
        // In collapsed mode, highlight parent if child is active
        const active = isDirectlyActive || (!this.isExpanded && this.hasActiveChild(item));
        const activeAncestor = this.isExpanded && this.hasActiveChild(item);
        const hasChildren = item.children && item.children.length > 0;
        const paddingLeft = level * 16 + 16 + 'px';
        const itemId = `nav-item-${item.id}`;
        // Determine tag type: use 'a' if href exists and no children (leaf node), otherwise 'div'
        const Tag = item.href && !hasChildren ? 'a' : 'div';
        const attrs = item.href && !hasChildren ? { href: item.href } : {};
        const itemClass = [
            'nav-item',
            active && 'active',
            activeAncestor && 'active-ancestor',
            expanded && 'expanded',
            item.id === 'user-profile' && 'is-user-profile',
            !item.icon && 'no-icon',
        ].filter(Boolean).join(' ');
        return (h("div", { key: item.id, class: `nav-item-wrapper level-${level}`, role: "none" }, h(Tag, { id: itemId, ...attrs, class: itemClass, style: { paddingLeft: this.orientation === 'horizontal' ? '0' : this.isExpanded ? paddingLeft : '0' }, onMouseEnter: () => {
                if (this.orientation === 'horizontal') {
                    this.hoveredId = item.id;
                    this.updateGlider();
                }
                // Set hover for tooltip (collapsed mode, items without children)
                if (!hasChildren && !this.isExpanded) {
                    this.hoveredIconId = item.id;
                }
            }, onMouseLeave: () => {
                if (this.orientation === 'horizontal') {
                    this.hoveredId = null;
                    this.updateGlider();
                }
                // Clear hover for tooltip
                this.hoveredIconId = null;
            }, onClick: e => {
                e.stopPropagation();
                this.handleItemClick(item);
            }, onKeyDown: e => this.handleKeyDown(e, item), title: !this.isExpanded && hasChildren ? item.label : '', tabindex: "0", role: "treeitem", "aria-expanded": hasChildren ? (expanded ? 'true' : 'false') : null, "aria-selected": active ? 'true' : 'false' }, (item.icon || item.avatar || item.type === 'image' || item.type === 'icon' || item.type === 'avatar' || item.imageUrl) && (h("span", { class: "nav-icon-container" }, item.avatar || item.type === 'avatar' ? (h("ui-avatar", { src: item.avatar || item.imageUrl, shape: "circle", class: "nav-avatar-icon", size: this.isExpanded || this.orientation === 'horizontal' ? '1.5rem' : '2rem', status: item.status })) : item.type === 'image' || item.imageUrl ? (h("img", { src: item.imageUrl, alt: item.label, class: "nav-image-icon", style: { width: '24px', height: '24px', borderRadius: '4px', objectFit: 'cover' } })) : (h("span", { class: "nav-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.25rem" }))), item.status && !item.avatar && item.type !== 'avatar' && h("span", { class: `nav-status-dot status-${item.status}` }), !this.isExpanded && item.badge && h("span", { class: "nav-badge-mini" }, item.badge), this.orientation === 'horizontal' && (item.id === 'user-profile' || this.isBottomItem(item.id)) && item.badge && h("span", { class: "nav-badge-mini" }, item.badge))), !hasChildren && !this.isExpanded && this.hoveredIconId === item.id && h("div", { class: { 'nav-tooltip': true, 'visible': true } }, item.label), (this.isExpanded || (this.orientation === 'horizontal' && !this.isBottomItem(item.id))) && (h("span", { class: "nav-label-container" }, h("span", { class: "nav-label" }, item.label), item.badge && h("span", { class: "nav-badge" }, item.badge))), hasChildren && (this.isExpanded || this.orientation === 'horizontal') && (h("span", { class: "nav-arrow" }, h("svg", { viewBox: "0 0 24 24", width: "16", height: "16", stroke: "currentColor", fill: "none", class: expanded && this.orientation !== 'horizontal' ? 'rotate-180' : '' }, h("path", { d: "M6 9l6 6 6-6" }))))), (() => {
            const contextItems = hasChildren ? item.children : [];
            if (!contextItems || contextItems.length === 0)
                return null;
            if (!this.isExpanded || this.orientation === 'horizontal') {
                return (h("ui-context-menu", { target: `#${itemId}`, items: contextItems, selectedId: this.activeId, theme: this.effectiveTheme, openOn: "hover", placement: this.orientation === 'horizontal' ? 'bottom' : this.position === 'left' ? 'right' : 'left', onItemSelect: e => {
                        e.stopPropagation();
                        if (hasChildren) {
                            this.handleItemClick(e.detail.item);
                        }
                        else {
                            this.handleItemClick(item);
                        }
                    } }));
            }
            return null;
        })(), hasChildren && expanded && this.isExpanded && this.orientation !== 'horizontal' && (h("div", { class: "nav-children", role: "group" }, item.children.map(child => this.renderItem(child, level + 1))))));
    }
    static get watchers() { return {
        "mode": [{
                "handleModeChange": 0
            }],
        "theme": [{
                "onThemeChange": 0
            }],
        "activeId": [{
                "onActiveIdChange": 0
            }],
        "isExpanded": [{
                "onExpandChange": 0
            }]
    }; }
};
NavigationBar.style = navigationBarCss();

export { Accordion as ui_accordion, Avatar as ui_avatar, Badge as ui_badge, Button as ui_button, ButtonToggle as ui_button_toggle, ButtonToggleGroup as ui_button_toggle_group, UiContextMenu as ui_context_menu, Icon as ui_icon, Input as ui_input, NavigationBar as ui_navigation_bar };
