import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';

const paginationCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;position:relative;z-index:0}:host(.has-open-dropdown){z-index:100}.ui-pagination{display:flex;align-items:center;gap:8px;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif}.ui-pagination.pagination-sm{font-size:12px}.ui-pagination.pagination-md{font-size:14px}.ui-pagination.pagination-lg{font-size:16px}.ui-pagination.pagination-default .pagination-btn{cursor:pointer;border-radius:8px}.ui-pagination.pagination-outlined .pagination-btn{cursor:pointer;border-radius:8px}.ui-pagination.pagination-filled .pagination-btn{cursor:pointer;border-radius:8px}.ui-pagination.pagination-floating{background:var(--bg-primary, #ffffff);padding:8px 16px;border-radius:50px;box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);border:1px solid var(--border-default, #e5e7eb);width:fit-content}.ui-pagination.pagination-glass{background:rgba(255, 255, 255, 0.1);backdrop-filter:blur(12px);padding:10px 20px;border-radius:16px;border:1px solid rgba(255, 255, 255, 0.2);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.15);width:fit-content}.ui-pagination.pagination-soft{gap:12px}.ui-pagination.pagination-modern{background:var(--bg-primary, #ffffff);padding:12px 24px;border-radius:24px;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.05), 0 10px 10px -5px rgba(0, 0, 0, 0.02);border:1px solid var(--border-default, #f3f4f6);gap:16px;width:fit-content}.ui-pagination.pagination-modern .pagination-btn.active{box-shadow:0 4px 12px rgba(var(--color-primary-rgb, 59, 130, 246), 0.3)}.ui-pagination.pagination-minimalist{gap:20px;padding:4px}.ui-pagination.pagination-minimalist .pagination-btn{position:relative}.ui-pagination.pagination-minimalist .pagination-btn:after{content:"";position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);width:0;height:2px;background:var(--color-primary, #10b981);transition:width 0.3s ease}.ui-pagination.pagination-minimalist .pagination-btn.active:after{width:80%}.ui-pagination.pagination-premium{background:var(--bg-primary, #ffffff);padding:12px 28px;border-radius:40px;box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.1), 0 10px 15px -5px rgba(0, 0, 0, 0.04);border:none;gap:12px;width:fit-content}.ui-pagination.pagination-premium .pagination-btn.active{background:linear-gradient(135deg, var(--color-primary, #6366f1), var(--color-primary-hover, #4f46e5)) !important;color:white !important;box-shadow:0 10px 20px -5px rgba(var(--color-primary-rgb, 99, 102, 241), 0.5);transform:scale(1.1);transition:all 0.3s cubic-bezier(0.34, 1.56, 0.64, 1)}.ui-pagination.pagination-premium .pagination-btn:hover:not(.active):not(.disabled){background:var(--bg-secondary, #f8fafc);transform:translateY(-2px)}.ui-pagination.pagination-underline{gap:12px}.ui-pagination.pagination-underline .pagination-btn.active{position:relative;color:var(--color-primary, #10b981) !important;background:transparent !important}.ui-pagination.pagination-underline .pagination-btn.active::after{content:"";position:absolute;bottom:2px;left:20%;right:20%;height:2px;background:var(--color-primary, #10b981);border-radius:2px;box-shadow:0 2px 4px rgba(var(--color-primary-rgb, 16, 185, 129), 0.3)}.pagination-main-content{display:flex;align-items:center;justify-content:center;flex:1}.ui-pagination.pagination-has-container{justify-content:center;margin-left:auto;margin-right:auto}.ui-pagination.pagination-segmented{gap:0;width:fit-content;border-radius:8px;overflow:hidden;border:1px solid var(--border-default, #e5e7eb);background:var(--bg-primary, #ffffff)}.ui-pagination.pagination-segmented.pagination-shape-pill{border-radius:30px}.ui-pagination.pagination-segmented.pagination-shape-pill .pagination-btn:first-child{border-top-left-radius:30px !important;border-bottom-left-radius:30px !important}.ui-pagination.pagination-segmented.pagination-shape-pill .pagination-btn:last-child{border-top-right-radius:30px !important;border-bottom-right-radius:30px !important}.ui-pagination.pagination-segmented .pagination-btn,.ui-pagination.pagination-segmented .pagination-label,.ui-pagination.pagination-segmented .pagination-pages{border-radius:0 !important;border:none !important;margin:0 !important;display:flex;align-items:center}.ui-pagination.pagination-segmented .pagination-pages{gap:0;border-left:1px solid var(--border-default, #e5e7eb) !important;border-right:1px solid var(--border-default, #e5e7eb) !important}.ui-pagination.pagination-segmented .pagination-label{padding:0 16px;font-weight:600;font-size:13px;color:var(--text-secondary, #374151);border-left:1px solid var(--border-default, #e5e7eb) !important;border-right:1px solid var(--border-default, #e5e7eb) !important;background:var(--bg-primary, #ffffff);height:100%;min-height:36px}.ui-pagination.pagination-segmented .pagination-btn:not(:last-child){border-right:1px solid var(--border-default, #e5e7eb) !important}.ui-pagination.pagination-arrows-joined .pagination-prev{border-top-right-radius:0 !important;border-bottom-right-radius:0 !important;border-right:none !important}.ui-pagination.pagination-arrows-joined .pagination-next{border-top-left-radius:0 !important;border-bottom-left-radius:0 !important}.pagination-joined{display:flex;gap:0}.ui-pagination.pagination-vertical{flex-direction:column;width:fit-content;height:auto;gap:12px}.ui-pagination.pagination-vertical .pagination-pages,.ui-pagination.pagination-vertical .pagination-indicators,.ui-pagination.pagination-vertical .pagination-input-container,.ui-pagination.pagination-vertical .pagination-dropdown-container,.ui-pagination.pagination-vertical .pagination-joined{flex-direction:column}.ui-pagination.pagination-vertical.pagination-segmented{border-radius:8px}.ui-pagination.pagination-vertical.pagination-segmented .pagination-btn,.ui-pagination.pagination-vertical.pagination-segmented .pagination-label,.ui-pagination.pagination-vertical.pagination-segmented .pagination-pages{width:100%;border-right:none !important;border-bottom:1px solid var(--border-default, #e5e7eb) !important}.ui-pagination.pagination-vertical.pagination-segmented .pagination-btn:last-child,.ui-pagination.pagination-vertical.pagination-segmented .pagination-label:last-child,.ui-pagination.pagination-vertical.pagination-segmented .pagination-pages:last-child{border-bottom:none !important}.ui-pagination.pagination-vertical.pagination-segmented.pagination-shape-pill{border-radius:20px}.ui-pagination.pagination-vertical.pagination-segmented.pagination-shape-pill .pagination-btn:first-child{border-radius:20px 20px 0 0 !important}.ui-pagination.pagination-vertical.pagination-segmented.pagination-shape-pill .pagination-btn:last-child{border-radius:0 0 20px 20px !important}.ui-pagination.pagination-vertical.pagination-arrows-joined .pagination-prev{border-bottom-left-radius:0 !important;border-bottom-right-radius:0 !important;border-bottom:none !important}.ui-pagination.pagination-vertical.pagination-arrows-joined .pagination-next{border-top-left-radius:0 !important;border-top-right-radius:0 !important}.ui-pagination.pagination-vertical.pagination-underline .pagination-btn.active::after{bottom:20%;top:20%;left:2px;right:auto;width:2px;height:auto}.pagination-btn.disabled{opacity:0.5;cursor:not-allowed;pointer-events:none}.pagination-btn:focus{outline:none;box-shadow:0 0 0 2px var(--bg-primary, #ffffff), 0 0 0 4px var(--color-primary, #10b981)}.pagination-btn svg{display:inline-flex;vertical-align:middle;width:16px;height:16px}.ui-pagination.pagination-sm .pagination-btn svg{width:14px;height:14px}.ui-pagination.pagination-lg .pagination-btn svg{width:18px;height:18px}.pagination-basic{display:flex;align-items:center;gap:4px}.pagination-pages{display:flex;align-items:center;gap:2px}.pagination-compact{display:flex;align-items:center;gap:12px}.pagination-info{font-weight:500;color:var(--text-secondary, #374151);white-space:nowrap}.pagination-detailed{display:flex;flex-direction:column;gap:16px;align-items:center}.pagination-details{display:flex;align-items:center;gap:16px;flex-wrap:wrap;justify-content:center}.pagination-total{color:var(--text-muted, #6b7280);font-size:0.875em;margin-left:auto}.pagination-size-selector{display:flex;align-items:center;gap:8px;font-size:0.875em;position:relative;z-index:1}.pagination-size-selector .pagination-size-label{color:var(--text-secondary, #374151);font-weight:500}.pagination-size-selector .pagination-size-suffix{color:var(--text-muted, #64748b)}.pg-dropdown{position:relative;display:inline-flex}.pg-dropdown-open-host{z-index:30}.pg-dropdown-trigger{display:inline-flex;align-items:center;gap:6px;background:var(--bg-primary, #ffffff);border:1.5px solid var(--border-default, #e2e8f0);border-radius:20px;padding:5px 10px 5px 12px;font-size:13px;font-weight:600;font-family:inherit;color:var(--text-primary, #1e293b);cursor:pointer;outline:none;transition:all 0.2s ease;white-space:nowrap}.pg-dropdown-trigger:hover{border-color:var(--color-primary, #3b82f6);box-shadow:0 2px 8px rgba(59, 130, 246, 0.12)}.pg-dropdown-trigger.pg-dropdown-open{border-color:var(--color-primary, #3b82f6);box-shadow:0 0 0 3px rgba(59, 130, 246, 0.12)}.pg-dropdown-trigger:disabled{opacity:0.5;cursor:not-allowed}.pg-dropdown-trigger-wide{min-width:110px;justify-content:space-between}.pg-dropdown-arrow{flex-shrink:0;transition:transform 0.2s ease;opacity:0.6}.pg-arrow-up{transform:rotate(180deg)}.pg-dropdown-panel{position:absolute;top:calc(100% + 6px);left:50%;transform:translateX(-50%);min-width:100%;width:max-content;background:var(--bg-primary, #ffffff);border:1px solid var(--border-default, #e2e8f0);border-radius:18px;box-shadow:0 12px 40px rgba(0, 0, 0, 0.18), 0 4px 12px rgba(0, 0, 0, 0.1);z-index:100;padding:6px;overflow:hidden;animation:pgDropdownIn 0.15s ease-out}.pg-dropdown-panel-scroll{max-height:220px;overflow-y:auto;scrollbar-width:thin}.pg-dropdown-panel-scroll::-webkit-scrollbar{width:4px}.pg-dropdown-panel-scroll::-webkit-scrollbar-track{background:transparent}.pg-dropdown-panel-scroll::-webkit-scrollbar-thumb{background:#cbd5e1;border-radius:4px}@keyframes pgDropdownIn{from{opacity:0;transform:translateX(-50%) translateY(-4px)}to{opacity:1;transform:translateX(-50%) translateY(0)}}.pg-dropdown-item{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:center;justify-content:space-between;gap:12px;padding:7px 12px;border-radius:12px;cursor:pointer;font-size:13px;font-weight:500;color:var(--text-primary, #1e293b);transition:background 0.15s ease;white-space:nowrap}.pg-dropdown-item:hover{background:var(--bg-secondary, #f1f5f9)}.pg-dropdown-item-selected{background:#ecfdf5 !important;color:#059669 !important;font-weight:700}.pg-dropdown-item-selected:hover{background:#d1fae5 !important}.pg-dropdown-check{flex-shrink:0;color:#059669}.pagination-size-premium{gap:12px}.pagination-jump{display:flex;align-items:center;gap:8px;font-size:0.875em}.pagination-jump label{color:var(--text-secondary, #374151)}.pagination-jump input{width:44px;padding:4px 8px;border:1px solid var(--border-strong, #d1d5db);border-radius:8px;text-align:center;transition:all 0.2s ease}.pagination-jump input:focus{outline:none;border-color:var(--color-primary, #10b981);box-shadow:0 0 0 2px var(--bg-primary, #ffffff), 0 0 0 4px var(--color-primary, #10b981)}.pagination-jump-btn{margin-left:4px}.pagination-minimal{display:flex;align-items:center;gap:8px}.pagination-input-group{display:flex;align-items:center;gap:8px}.pagination-page-input{min-width:0 !important;text-align:center;font-size:inherit}.pagination-separator{color:var(--text-muted, #6b7280);font-weight:500}.pagination-total-pages{font-weight:500;color:var(--text-secondary, #374151)}.pagination-advanced{display:flex;flex-direction:column;gap:16px;align-items:center}.pagination-controls{display:flex;align-items:center;gap:24px;flex-wrap:wrap;justify-content:space-between;width:100%}.pagination-summary{color:var(--text-muted, #6b7280);font-size:0.875em}.pagination-jump-section{display:flex;align-items:center;gap:8px;font-size:0.875em}.pagination-jump-section label{color:var(--text-secondary, #374151)}.pagination-jump-section input{width:44px;padding:4px 8px;border:1px solid var(--border-strong, #d1d5db);border-radius:8px;text-align:center}.pagination-infinite{display:flex;flex-direction:column;align-items:center;gap:12px}.pagination-loading{display:flex;align-items:center;justify-content:center}.pagination-infinite-info{color:var(--text-muted, #6b7280);font-size:0.875em}.pagination-spinner{width:24px;height:24px;border:2px solid var(--border-default, #e5e7eb);border-top:2px solid var(--color-primary, #10b981);border-radius:50%;animation:spin 1s linear infinite}@keyframes spin{0%{transform:rotate(0deg)}100%{transform:rotate(360deg)}}@media (max-width: 640px){.ui-pagination{flex-wrap:wrap;justify-content:center}.pagination-detailed .pagination-details,.pagination-advanced .pagination-controls{flex-direction:column;gap:12px}.pagination-basic{flex-wrap:wrap}.pagination-pages{order:2;width:100%;justify-content:center}.pagination-first,.pagination-prev{order:1}.pagination-next,.pagination-last{order:3}}@media (prefers-color-scheme: dark){.ui-pagination.pagination-default .pagination-btn{background-color:var(--bg-primary, var(--text-primary, #1f2937));border-color:var(--border-default, #374151);color:var(--text-standard, #f9fafb)}.ui-pagination.pagination-default .pagination-btn:hover:not(.disabled):not(.active){background-color:var(--text-secondary, #374151);border-color:var(--border-strong, #4b5563)}.ui-pagination.pagination-outlined .pagination-btn{border-color:var(--border-default, #374151);color:var(--text-standard, #f9fafb)}.ui-pagination.pagination-outlined .pagination-btn:hover:not(.disabled):not(.active){border-color:var(--border-strong, #4b5563);background-color:var(--text-secondary, #374151)}.ui-pagination.pagination-filled .pagination-btn{background-color:var(--text-secondary, #374151);color:var(--text-standard, #f9fafb)}.ui-pagination.pagination-filled .pagination-btn:hover:not(.disabled):not(.active){background-color:var(--text-secondary, #4b5563)}.pagination-info,.pagination-total,.pagination-size-selector label,.pagination-jump label,.pagination-separator,.pagination-total-pages,.pagination-summary,.pagination-jump-section label,.pagination-infinite-info{color:var(--bg-secondary, #d1d5db)}.pagination-size-selector select,.pagination-jump input,.pagination-page-input,.pagination-jump-section input{background-color:var(--bg-primary, var(--text-primary, #1f2937));border-color:var(--border-default, #374151);color:var(--text-standard, #f9fafb);border-radius:8px}.ui-pagination.pagination-floating{background-color:var(--bg-primary, #111827);border-color:var(--border-default, #374151);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.5), 0 4px 6px -2px rgba(0, 0, 0, 0.3)}.ui-pagination.pagination-glass{background-color:rgba(15, 23, 42, 0.4);border-color:rgba(255, 255, 255, 0.05);box-shadow:0 8px 32px 0 rgba(0, 0, 0, 0.6)}.ui-pagination.pagination-modern{background-color:var(--bg-primary, #111827);border-color:var(--border-default, #1f2937);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.6)}.ui-pagination.pagination-premium{background-color:var(--bg-primary, #111827);box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.7)}.ui-pagination.pagination-premium .pagination-btn:hover:not(.active):not(.disabled){background:var(--bg-secondary, #1e293b)}.ui-pagination.pagination-segmented{background-color:var(--bg-primary, #111827);border-color:var(--border-default, #1f2937)}.ui-pagination.pagination-segmented .pagination-btn,.ui-pagination.pagination-segmented .pagination-label,.ui-pagination.pagination-segmented .pagination-pages{border-color:var(--border-default, #1f2937) !important}.ui-pagination.pagination-segmented .pagination-label{background-color:var(--bg-primary, #111827);color:var(--text-standard, #f9fafb)}.ui-pagination.pagination-underline .pagination-btn.active::after{background:var(--color-primary, #60a5fa);box-shadow:0 2px 8px rgba(96, 165, 250, 0.5)}}.pagination-dropdown-container{display:inline-flex;align-items:center;position:relative;isolation:isolate;overflow:visible;background:var(--bg-primary, #ffffff);padding:6px;border-radius:40px;box-shadow:0 10px 25px -5px rgba(0, 0, 0, 0.08), 0 8px 10px -6px rgba(0, 0, 0, 0.05);border:1px solid var(--border-default, rgba(226, 232, 240, 0.8));gap:8px;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.pagination-dropdown-container:hover{box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);border-color:var(--color-primary-light, rgba(59, 130, 246, 0.2));transform:translateY(-1px)}.pagination-dropdown-wrapper{position:relative;display:flex;align-items:center;min-width:130px;justify-content:center;z-index:2}.pagination-dropdown-wrapper ui-dropdown{width:100%;--dd-shadow:none;}.pagination-dropdown-wrapper-open{z-index:30}.pagination-total{padding:0 12px;color:var(--text-muted, #64748b);font-size:13px;font-weight:600;border-right:1px solid var(--border-default, #e2e8f0);height:24px;display:flex;align-items:center;letter-spacing:-0.01em}.pagination-dropdown-container .pagination-size-selector,.pagination-input-container .pagination-size-selector{padding:0 12px;border-right:1px solid var(--border-default, #e2e8f0);height:24px;font-size:12px;gap:6px}.pagination-dropdown-container .pagination-size-selector .pagination-size-label,.pagination-input-container .pagination-size-selector .pagination-size-label{color:var(--text-muted, #94a3b8);font-weight:700;text-transform:uppercase;font-size:10px;letter-spacing:0.05em}.pagination-dropdown-container .pagination-size-selector .pagination-size-suffix,.pagination-input-container .pagination-size-selector .pagination-size-suffix{display:none}.pagination-dropdown-container .pagination-size-selector ui-dropdown,.pagination-input-container .pagination-size-selector ui-dropdown{width:auto;min-width:50px;--dropdown-trigger-padding:0 8px;--dropdown-trigger-height:28px;--dropdown-trigger-bg:transparent;--dropdown-trigger-border:none;--dropdown-value-font-size:13px;--dropdown-value-font-weight:600}.pagination-input-container{display:inline-flex;align-items:center;position:relative;isolation:isolate;overflow:visible;background:var(--bg-primary, rgba(255, 255, 255, 0.95));backdrop-filter:blur(8px);padding:2px 6px;border-radius:40px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.05);border:1.5px solid var(--border-default, #e2e8f0);gap:6px;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1)}.pagination-page-input{flex:none !important;width:auto;min-width:44px}.pagination-page-input ui-input{--input-text-align:center;--input-border-radius:20px;--input-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.02);--input-height:28px;--input-font-size:13px;--input-font-weight:700;--input-border-color:#e2e8f0;--input-padding-inline:4px}.pagination-input-label{font-size:13px;font-weight:500;color:var(--text-muted, #94a3b8);display:flex;gap:1rem;align-items:center}.pagination-input-label strong{color:var(--text-primary, #1e293b);font-weight:700;font-size:14px}.pagination-dropdown-container .pagination-btn,.pagination-input-container .pagination-btn{position:relative;z-index:1;width:32px;height:32px;border-radius:50% !important;display:flex;align-items:center;justify-content:center;transition:all 0.2s cubic-bezier(0.34, 1.56, 0.64, 1);background:transparent !important;border:none !important;color:var(--text-secondary, #475569) !important}.pagination-dropdown-container .pagination-btn:hover:not(.disabled),.pagination-input-container .pagination-btn:hover:not(.disabled){background:var(--bg-secondary, #f8fafc) !important;transform:scale(1.15);color:var(--color-primary, #2563eb) !important}.pagination-dropdown-container .pagination-btn:active:not(.disabled),.pagination-input-container .pagination-btn:active:not(.disabled){transform:scale(0.95)}.pagination-dropdown-container .pagination-btn svg,.pagination-input-container .pagination-btn svg{width:18px;height:18px}.ui-pagination.pagination-dropdown-open .pagination-dropdown-container .pagination-btn,.ui-pagination.pagination-dropdown-open .pagination-input-container .pagination-btn{z-index:1}@media (prefers-color-scheme: dark){.pagination-dropdown-container,.pagination-input-container{background:var(--bg-primary, #0f172a);border-color:rgba(255, 255, 255, 0.05);box-shadow:0 10px 40px -10px rgba(0, 0, 0, 0.5)}.pagination-total{border-color:rgba(255, 255, 255, 0.1);color:#94a3b8}.pagination-dropdown-container .pagination-size-selector,.pagination-input-container .pagination-size-selector{border-color:rgba(255, 255, 255, 0.1)}.pagination-dropdown-container .pagination-size-selector .pagination-size-label,.pagination-input-container .pagination-size-selector .pagination-size-label{color:#64748b}.pagination-input-label strong{color:#f1f5f9}.pagination-btn:hover:not(.disabled){background:rgba(255, 255, 255, 0.05) !important}}.pagination-page-input.has-error{border-color:var(--color-danger, #ef4444) !important;background-color:var(--color-danger-light, rgba(239, 68, 68, 0.05)) !important}.pagination-error-message{position:absolute;top:100%;left:50%;transform:translateX(-50%);background:var(--color-danger, #ef4444);color:white;padding:4px 10px;border-radius:4px;font-size:11px;margin-top:8px;white-space:nowrap;z-index:10;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1)}.pagination-error-message::before{content:"";position:absolute;top:-4px;left:50%;transform:translateX(-50%);border-left:5px solid transparent;border-right:5px solid transparent;border-bottom:5px solid var(--color-danger, #ef4444)}.ui-pagination.pagination-sm .pagination-error-message{font-size:10px;padding:2px 8px}.pagination-indicator-container{display:flex;align-items:center;gap:16px}.pagination-indicators{display:flex;align-items:center;gap:8px}.pagination-indicator{position:relative;display:flex;align-items:center;justify-content:center;cursor:pointer;transition:all 0.3s ease}.pagination-indicator-dot{width:8px;height:8px;border-radius:50%;background-color:var(--inactive-color, #cbd5e1);transition:all 0.3s ease}.pagination-indicator:hover .pagination-indicator-dot{background-color:var(--hover-color, #94a3b8);transform:scale(1.2)}.pagination-indicator-active .pagination-indicator-dot{background-color:var(--primary-color, var(--color-primary, #10b981));transform:scale(1.5)}.pagination-indicator-label{position:absolute;top:-30px;background-color:var(--primary-color, var(--color-primary, #10b981));color:var(--text-standard, #ffffff);padding:4px 10px;border-radius:12px;font-size:12px;font-weight:600;white-space:nowrap;animation:indicatorSlideIn 0.2s ease}.pagination-indicator-label::after{content:"";position:absolute;bottom:-4px;left:50%;transform:translateX(-50%);width:0;height:0;border-left:5px solid transparent;border-right:5px solid transparent;border-top:5px solid var(--primary-color, var(--color-primary, #10b981))}@keyframes indicatorSlideIn{from{opacity:0;transform:translateY(5px)}to{opacity:1;transform:translateY(0)}}.pagination-nav-btn:disabled{opacity:0.4;cursor:not-allowed}.pagination-nav-btn svg{width:16px;height:16px}.ui-pagination.pagination-sm .pagination-indicator-dot{width:6px;height:6px}.ui-pagination.pagination-sm .pagination-nav-btn{width:28px;height:28px}.ui-pagination.pagination-sm .pagination-indicator-label{font-size:10px;padding:2px 8px;top:-26px}.ui-pagination.pagination-lg .pagination-indicator-dot{width:10px;height:10px}.ui-pagination.pagination-lg .pagination-nav-btn{width:40px;height:40px}.ui-pagination.pagination-lg .pagination-nav-btn svg{width:20px;height:20px}.ui-pagination.pagination-lg .pagination-indicator-label{font-size:14px;padding:6px 12px;top:-36px}@media (prefers-color-scheme: dark){.pagination-indicator-dot{background-color:var(--inactive-color, #475569)}.pagination-indicator:hover .pagination-indicator-dot{background-color:var(--hover-color, var(--text-muted, #64748b))}.pagination-indicator-active .pagination-indicator-dot{background-color:var(--primary-color, #60a5fa)}.pagination-indicator-label{background-color:var(--primary-color, #60a5fa)}.pagination-indicator-label::after{border-top-color:var(--primary-color, #60a5fa)}.pagination-nav-btn{background-color:var(--bg-color, var(--bg-primary, var(--text-primary, #1f2937)));border-color:var(--border-color, var(--border-default, #374151));color:var(--text-color, #d1d5db)}.pagination-nav-btn:hover:not(:disabled){background-color:var(--hover-bg, var(--text-secondary, #374151));border-color:var(--primary-color, #60a5fa);color:var(--primary-color, #60a5fa)}}.sr-only{position:absolute;width:0px;height:0px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0;display:none}.ui-pagination.pagination-shape-rounded .pagination-btn{border-radius:12px !important}.ui-pagination.pagination-shape-pill .pagination-btn{border-radius:24px !important;padding-left:16px !important;padding-right:16px !important}.ui-pagination.pagination-shape-circle .pagination-btn{border-radius:50% !important;width:36px !important;height:36px !important;min-width:36px !important;padding:0 !important;display:inline-flex !important;align-items:center !important;justify-content:center !important}.pagination-rtl{direction:rtl}.pagination-rtl .pagination-pages{flex-direction:row-reverse}@media (max-width: 768px){.pagination-mobile .pagination-btn{min-width:36px;height:36px;padding:8px;font-size:14px}.pagination-mobile .pagination-pages{gap:4px}.pagination-mobile .pagination-total,.pagination-mobile .pagination-summary{font-size:12px}}.ui-pagination:focus{outline:none;box-shadow:0 0 0 2px var(--bg-primary, #ffffff), 0 0 0 4px var(--color-primary, #10b981);border-radius:8px}.ui-pagination:focus:not(:focus-visible){outline:none}.pagination-btn:focus-visible{outline:none;box-shadow:0 0 0 2px var(--bg-primary, #ffffff), 0 0 0 4px var(--color-primary, #10b981)}@media (prefers-reduced-motion: reduce){.pagination-btn,.pagination-indicator{transition:none}}.sr-only{position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0, 0, 0, 0);white-space:nowrap;border-width:0}.pagination-transitioning .pagination-btn.active{animation:pageTransition 0.3s ease}@keyframes pageTransition{0%{transform:scale(0.95);opacity:0.7}100%{transform:scale(1);opacity:1}}.pagination-sticky{position:sticky;z-index:100;background:var(--bg-primary, #ffffff);box-shadow:0 2px 8px rgba(0, 0, 0, 0.1);padding:12px 16px;border-radius:8px}.pagination-sticky-top{top:0}.pagination-sticky-bottom{bottom:0}.pagination-progress-bar{width:100%;height:3px;background:var(--bg-primary, #e5e7eb);border-radius:2px;overflow:hidden;margin-bottom:12px}.pagination-progress-fill{height:100%;background:linear-gradient(90deg, var(--color-primary, #10b981), var(--color-primary, #8b5cf6));transition:width 0.3s ease}.pagination-theme-primary .pagination-progress-fill{background:linear-gradient(90deg, var(--color-primary, #10b981), var(--color-primary, #60a5fa))}.pagination-theme-success .pagination-progress-fill{background:linear-gradient(90deg, var(--color-success, #10b981), var(--color-success, #34d399))}.pagination-theme-danger .pagination-progress-fill{background:linear-gradient(90deg, var(--color-danger, #ef4444), var(--color-danger, #f87171))}.pagination-theme-warning .pagination-progress-fill{background:linear-gradient(90deg, var(--color-warning, #f59e0b), var(--color-danger, #fbbf24))}.pagination-theme-info .pagination-progress-fill{background:linear-gradient(90deg, var(--color-info, #06b6d4), var(--color-primary, #22d3ee))}@media (max-width: 768px){.ui-pagination{touch-action:pan-y;user-select:none}}@media (prefers-reduced-motion: reduce){.pagination-transitioning .pagination-btn.active{animation:none}.pagination-progress-fill{transition:none}}.pagination-quick-jump{background:var(--bg-secondary, #f3f4f6) !important;border:1px solid var(--border-strong, #d1d5db) !important;color:var(--text-muted, #6b7280) !important;font-weight:600;font-size:0.875em;min-width:44px !important}.pagination-quick-jump:hover:not(:disabled){background:var(--bg-primary, #e5e7eb) !important;border-color:var(--color-primary, #9ca3af) !important;color:var(--text-secondary, #374151) !important}.pagination-quick-jump:active:not(:disabled){transform:scale(0.95)}.pagination-theme-primary .pagination-quick-jump:hover:not(:disabled){background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.1) !important;border-color:var(--color-primary, #10b981) !important;color:var(--color-primary, #10b981) !important}.pagination-theme-success .pagination-quick-jump:hover:not(:disabled){background:rgba(var(--color-success-rgb, 16, 185, 129), 0.1) !important;border-color:var(--color-success, #10b981) !important;color:var(--color-success, #10b981) !important}.pagination-theme-danger .pagination-quick-jump:hover:not(:disabled){background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.1) !important;border-color:var(--color-danger, #ef4444) !important;color:var(--color-danger, #ef4444) !important}`;

const Pagination = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.pageChange = createEvent(this, "pageChange");
        this.itemsPerPageChange = createEvent(this, "itemsPerPageChange");
        this.validationError = createEvent(this, "validationError");
    }
    get el() { return getElement(this); }
    /**
     * Hide navigation buttons (next, previous, first, last) in dropdown/input modes
     */
    hideNavButtons = false;
    /**
     * Current active page (1-based)
     */
    currentPage = 1;
    /**
     * Total number of items
     */
    totalItems = 0;
    /**
     * Number of items per page
     */
    itemsPerPage = 10;
    /**
     * Maximum number of page buttons to show
     */
    maxVisiblePages = 5;
    /**
     * Type of pagination to display
     */
    type = 'basic';
    /**
     * Size of the pagination component
     */
    size = 'md';
    /**
     * Visual variant of the pagination
     */
    variant = 'default';
    /**
     * Color theme
     */
    theme = 'primary';
    /**
     * Whether to show first/last buttons
     */
    showFirstLast = true;
    /**
     * Whether to show previous/next buttons
     */
    showPrevNext = true;
    /**
     * Whether to show page size selector
     */
    showPageSize = false;
    /**
     * Whether to show total count
     */
    showTotal = false;
    /**
     * Whether to show jump to page input
     */
    showJumpTo = false;
    /**
     * Custom text for previous button
     */
    prevText = 'Previous';
    /**
     * Custom text for next button
     */
    nextText = 'Next';
    /**
     * Custom text for first button
     */
    firstText = 'First';
    /**
     * Custom text for last button
     */
    lastText = 'Last';
    /**
     * Available page sizes for selector
     */
    pageSizes = [10, 25, 50, 100];
    /**
     * Whether pagination is disabled
     */
    disabled = false;
    /**
     * Whether to show only icons (no text labels)
     */
    iconOnly = false;
    /**
     * Whether to use infinite scroll style (shows loading state)
     */
    infinite = false;
    /**
     * Loading state for infinite scroll
     */
    loading = false;
    /**
     * Whether to use compact mode (for dropdown and input types)
     */
    compact = false;
    /**
     * Enable keyboard navigation
     */
    keyboardNav = true;
    shape = 'default';
    /**
     * Pill-shaped buttons (shorthand for shape="pill")
     */
    pill = false;
    /**
     * Circle-shaped buttons (shorthand for shape="circle")
     */
    circle = false;
    /**
     * Custom prev icon (emoji or SVG string)
     */
    prevIcon = '';
    /**
     * Custom next icon (emoji or SVG string)
     */
    nextIcon = '';
    /**
     * Custom first icon (emoji or SVG string)
     */
    firstIcon = '';
    /**
     * Custom last icon (emoji or SVG string)
     */
    lastIcon = '';
    /**
     * Mobile breakpoint (px)
     */
    mobileBreakpoint = 768;
    /**
     * Auto-switch to compact mode on mobile
     */
    responsiveMode = true;
    /**
     * RTL support
     */
    rtl = false;
    /**
     * Show tooltip on ellipsis hover with hidden page numbers
     */
    ellipsisTooltip = true;
    /**
     * Enable page transition animations
     */
    pageTransition = true;
    /**
     * Sync current page with URL query parameter
     */
    urlSync = false;
    /**
     * URL parameter name for page number
     */
    urlParam = 'page';
    autoHide = true;
    getEffectiveShape() {
        if (this.shape !== 'default')
            return this.shape;
        if (this.circle)
            return 'circle';
        if (this.pill)
            return 'pill';
        return 'default';
    }
    /**
     * Enable quick jump buttons (+5, -5)
     */
    quickJump = false;
    /**
     * Quick jump step size
     */
    quickJumpStep = 5;
    /**
     * Make pagination sticky
     */
    sticky = false;
    /**
     * Sticky position (top or bottom)
     */
    stickyPosition = 'bottom';
    /**
     * Auto-switch to compact when pages exceed threshold
     */
    smartCompact = false;
    /**
     * Page count threshold for smart compact mode
     */
    smartCompactThreshold = 20;
    /**
     * Enable swipe gestures on mobile
     */
    swipeGestures = true;
    /**
     * Show progress indicator
     */
    showProgress = false;
    /**
     * If true, shows a checkmark (tick) next to selected items in internal dropdowns.
     */
    showSelectedMarker = true;
    /**
     * Layout buttons without gaps, inside a single border-radius container
     */
    segmented = false;
    /**
     * Hide page number buttons completely
     */
    hideNumbers = false;
    /**
     * Show custom label (e.g. "3 OF 10") instead of or alongside numbers
     */
    showLabel = false;
    /**
     * Template for the label when showLabel is true. Uses {current} and {total} placeholders.
     */
    labelTemplate = '{current} OF {total}';
    /**
     * Only join navigation arrows (prev/next) together
     */
    arrowsJoined = false;
    /**
     * Layout the pagination vertically
     */
    vertical = false;
    /**
     * Persist page to localStorage
     */
    persistPage = false;
    /**
     * LocalStorage key for persistence
     */
    storageKey = 'pagination-page';
    /**
     * Emitted when page changes
     */
    pageChange;
    /**
     * Emitted when items per page changes
     */
    itemsPerPageChange;
    /**
     * Emitted when validation error occurs
     */
    validationError;
    jumpToPage = null;
    inputError = '';
    pageInputValue = '1';
    showEllipsisTooltip = false;
    ellipsisPages = [];
    isTransitioning = false;
    isMobile = false;
    openDropdown = null;
    handleTotalChange() {
        if (this.currentPage > this.totalPages && this.totalPages > 0) {
            this.currentPage = this.totalPages;
        }
    }
    handleCurrentPageChange(newValue) {
        this.syncPageInputState(newValue);
    }
    handleOpenDropdownChange(newValue) {
        // Elevate host z-index in the light DOM so the panel stacks above
        // sibling ui-pagination shadow hosts (shadow DOM z-index is isolated)
        this.el.classList.toggle('has-open-dropdown', newValue !== null);
    }
    paginationRef;
    touchStartX = 0;
    touchEndX = 0;
    handleOutsideClick = (e) => {
        if (!this.openDropdown)
            return;
        const path = e.composedPath();
        if (!path.includes(this.el)) {
            this.openDropdown = null;
        }
    };
    componentWillLoad() {
        // Initial responsive check
        if (this.responsiveMode && typeof window !== 'undefined') {
            this.checkMobileView();
        }
        // URL sync - read from URL on load
        if (this.urlSync && typeof window !== 'undefined') {
            const urlPage = this.getPageFromURL();
            if (urlPage && urlPage !== this.currentPage) {
                this.currentPage = urlPage;
            }
        }
        // LocalStorage persistence - read from storage on load
        if (this.persistPage && typeof window !== 'undefined') {
            const storedPage = this.getPageFromStorage();
            if (storedPage && storedPage !== this.currentPage) {
                this.currentPage = storedPage;
            }
        }
        this.syncPageInputState(this.currentPage);
    }
    componentDidLoad() {
        // Close dropdown on outside click
        if (typeof window !== 'undefined') {
            document.addEventListener('pointerdown', this.handleOutsideClick, true);
            window.addEventListener('click', this.handleOutsideClick);
        }
        // Responsive mode - add listener
        if (this.responsiveMode && typeof window !== 'undefined') {
            window.addEventListener('resize', this.checkMobileView);
        }
        // Swipe gestures for mobile
        if (this.swipeGestures && this.paginationRef) {
            this.paginationRef.addEventListener('touchstart', this.handleTouchStart, { passive: true });
            this.paginationRef.addEventListener('touchend', this.handleTouchEnd, { passive: true });
        }
    }
    disconnectedCallback() {
        if (typeof window !== 'undefined') {
            window.removeEventListener('resize', this.checkMobileView);
            window.removeEventListener('click', this.handleOutsideClick);
            document.removeEventListener('pointerdown', this.handleOutsideClick, true);
        }
        if (this.swipeGestures && this.paginationRef) {
            this.paginationRef.removeEventListener('touchstart', this.handleTouchStart);
            this.paginationRef.removeEventListener('touchend', this.handleTouchEnd);
        }
    }
    checkMobileView = () => {
        if (typeof window !== 'undefined') {
            this.isMobile = window.innerWidth < this.mobileBreakpoint;
        }
    };
    handleKeyDown = (e) => {
        if (!this.keyboardNav || this.disabled)
            return;
        switch (e.key) {
            case 'ArrowLeft':
                e.preventDefault();
                if (this.rtl) {
                    this.handlePageChange(this.currentPage + 1);
                }
                else {
                    this.handlePageChange(this.currentPage - 1);
                }
                break;
            case 'ArrowRight':
                e.preventDefault();
                if (this.rtl) {
                    this.handlePageChange(this.currentPage - 1);
                }
                else {
                    this.handlePageChange(this.currentPage + 1);
                }
                break;
            case 'Home':
                e.preventDefault();
                this.handlePageChange(1);
                break;
            case 'End':
                e.preventDefault();
                this.handlePageChange(this.totalPages);
                break;
        }
    };
    // URL Sync helpers
    getPageFromURL() {
        if (typeof window === 'undefined')
            return null;
        const params = new URLSearchParams(window.location.search);
        const page = params.get(this.urlParam);
        return page ? parseInt(page, 10) : null;
    }
    updateURL(page) {
        if (typeof window === 'undefined')
            return;
        const url = new URL(window.location.href);
        url.searchParams.set(this.urlParam, page.toString());
        window.history.pushState({}, '', url.toString());
    }
    // LocalStorage helpers
    getPageFromStorage() {
        if (typeof window === 'undefined')
            return null;
        const stored = localStorage.getItem(this.storageKey);
        return stored ? parseInt(stored, 10) : null;
    }
    savePageToStorage(page) {
        if (typeof window === 'undefined')
            return;
        localStorage.setItem(this.storageKey, page.toString());
    }
    // Swipe gesture handlers
    handleTouchStart = (e) => {
        this.touchStartX = e.changedTouches[0].screenX;
    };
    handleTouchEnd = (e) => {
        this.touchEndX = e.changedTouches[0].screenX;
        this.handleSwipe();
    };
    handleSwipe() {
        const swipeThreshold = 50;
        const diff = this.touchStartX - this.touchEndX;
        if (Math.abs(diff) > swipeThreshold) {
            if (diff > 0) {
                this.handlePageChange(this.rtl ? this.currentPage - 1 : this.currentPage + 1);
            }
            else {
                this.handlePageChange(this.rtl ? this.currentPage + 1 : this.currentPage - 1);
            }
        }
    }
    // Quick jump handler
    handleQuickJump(direction) {
        const step = this.quickJumpStep;
        const newPage = direction === 'forward'
            ? Math.min(this.currentPage + step, this.totalPages)
            : Math.max(this.currentPage - step, 1);
        this.handlePageChange(newPage);
    }
    // Progress calculation
    get progressPercentage() {
        return (this.currentPage / this.totalPages) * 100;
    }
    get totalPages() {
        return Math.ceil(this.totalItems / this.itemsPerPage);
    }
    get visiblePages() {
        const totalPages = this.totalPages;
        const current = this.currentPage;
        const maxVisible = this.maxVisiblePages;
        if (totalPages <= maxVisible) {
            return Array.from({ length: totalPages }, (_, i) => i + 1);
        }
        const half = Math.floor(maxVisible / 2);
        let start = Math.max(1, current - half);
        let end = Math.min(totalPages, start + maxVisible - 1);
        if (end - start + 1 < maxVisible) {
            start = Math.max(1, end - maxVisible + 1);
        }
        return Array.from({ length: end - start + 1 }, (_, i) => start + i);
    }
    handlePageChange(page) {
        this.openDropdown = null;
        this.jumpToPage = null;
        if (page < 1 || page > this.totalPages || page === this.currentPage || this.disabled) {
            return;
        }
        // Page transition animation
        if (this.pageTransition) {
            this.isTransitioning = true;
            setTimeout(() => this.isTransitioning = false, 300);
        }
        this.currentPage = page;
        this.syncPageInputState(page);
        // URL sync
        if (this.urlSync) {
            this.updateURL(page);
        }
        // LocalStorage persistence
        if (this.persistPage) {
            this.savePageToStorage(page);
        }
        this.pageChange.emit({ page, itemsPerPage: this.itemsPerPage });
    }
    handleItemsPerPageChange(itemsPerPage) {
        this.openDropdown = null;
        this.itemsPerPage = itemsPerPage;
        this.currentPage = 1; // Reset to first page when changing page size
        this.syncPageInputState(1);
        this.itemsPerPageChange.emit(itemsPerPage);
        this.pageChange.emit({ page: 1, itemsPerPage });
    }
    handleJumpToPage() {
        this.openDropdown = null;
        const rawValue = this.pageInputValue.trim();
        // Validate input
        if (!rawValue) {
            this.jumpToPage = null;
            this.inputError = 'Please enter a valid number';
            this.validationError.emit('Please enter a valid number');
            return;
        }
        const requestedPage = Number(rawValue);
        if (isNaN(requestedPage)) {
            this.inputError = 'Please enter a valid number';
            this.validationError.emit('Please enter a valid number');
            return;
        }
        if (requestedPage < 1) {
            this.inputError = `Page number must be at least 1`;
            this.validationError.emit(this.inputError);
            return;
        }
        if (requestedPage > this.totalPages) {
            this.inputError = `Page number cannot exceed ${this.totalPages}`;
            this.validationError.emit(this.inputError);
            return;
        }
        // Clear error and navigate
        this.inputError = '';
        this.jumpToPage = requestedPage;
        const page = Math.max(1, Math.min(this.totalPages, requestedPage));
        this.handlePageChange(page);
    }
    syncPageInputState(page) {
        const normalizedPage = Number.isFinite(page) && page > 0 ? page : 1;
        this.jumpToPage = normalizedPage;
        this.pageInputValue = normalizedPage.toString();
    }
    getPageInputWidth() {
        const totalPageDigits = Math.max(1, this.totalPages.toString().length);
        const currentValueDigits = Math.max(0, this.pageInputValue.trim().length);
        const digits = Math.max(2, totalPageDigits, currentValueDigits);
        const padding = this.size === 'sm' ? '1.75rem' : this.size === 'lg' ? '2.5rem' : '2rem';
        const maxVisibleDigits = this.size === 'sm' ? 4 : this.size === 'lg' ? 8 : 6;
        const visibleDigits = Math.min(digits, maxVisibleDigits);
        return `calc(${visibleDigits}ch + ${padding})`;
    }
    handleInputChange(e) {
        const value = typeof e.detail === 'string' ? e.detail : `${e.detail ?? ''}`;
        this.pageInputValue = value;
        if (value === '') {
            this.jumpToPage = null;
            this.inputError = '';
            return;
        }
        const numValue = Number(value);
        if (isNaN(numValue)) {
            this.inputError = 'Please enter a valid number';
            this.validationError.emit(this.inputError);
            return;
        }
        this.jumpToPage = numValue;
        // Clear error if value is now valid
        if (numValue >= 1 && numValue <= this.totalPages) {
            this.inputError = '';
        }
    }
    renderPageSizeSelector() {
        if (!this.showPageSize)
            return null;
        const isPremium = ['glass', 'modern', 'premium'].includes(this.variant);
        const isOpen = this.openDropdown === 'pageSize';
        return (h("div", { class: {
                'pagination-size-selector': true,
                'pagination-size-premium': isPremium,
                'pagination-size-selector-open': isOpen
            }, onClick: (e) => e.stopPropagation() }, h("span", { class: "pagination-size-label" }, "Show:"), h("div", { class: { 'pg-dropdown': true, 'pg-dropdown-open-host': isOpen } }, h("button", { class: { 'pg-dropdown-trigger': true, 'pg-dropdown-open': isOpen }, onClick: () => { this.openDropdown = isOpen ? null : 'pageSize'; }, disabled: this.disabled, type: "button" }, h("span", null, this.itemsPerPage), h("svg", { class: { 'pg-dropdown-arrow': true, 'pg-arrow-up': isOpen }, width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "m6 9 6 6 6-6" }))), isOpen && (h("div", { class: "pg-dropdown-panel" }, this.pageSizes.map(size => (h("div", { class: { 'pg-dropdown-item': true, 'pg-dropdown-item-selected': size === this.itemsPerPage }, onClick: () => { this.handleItemsPerPageChange(size); this.openDropdown = null; } }, h("span", null, size), size === this.itemsPerPage && (h("svg", { class: "pg-dropdown-check", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "M20 6 9 17l-5-5" })))))))))));
    }
    getPageLabel() {
        return this.labelTemplate
            .replace('{current}', this.currentPage.toString())
            .replace('{total}', this.totalPages.toString());
    }
    getNavIcon(type) {
        if (this.vertical) {
            if (type === 'first')
                return this.firstIcon || 'chevrons-up';
            if (type === 'prev')
                return this.prevIcon || 'chevron-up';
            if (type === 'next')
                return this.nextIcon || 'chevron-down';
            if (type === 'last')
                return this.lastIcon || 'chevrons-down';
        }
        if (type === 'first')
            return this.firstIcon || 'chevrons-left';
        if (type === 'prev')
            return this.prevIcon || 'chevron-left';
        if (type === 'next')
            return this.nextIcon || 'chevron-right';
        if (type === 'last')
            return this.lastIcon || 'chevrons-right';
        return '';
    }
    renderBasicPagination() {
        const { currentPage, totalPages, visiblePages, showFirstLast, showPrevNext } = this;
        const canGoPrev = currentPage > 1;
        const canGoNext = currentPage < totalPages;
        return (h("div", { class: "pagination-basic" }, showFirstLast && (h("ui-button", { variant: this.getButtonVariant(-1), size: this.size === 'sm' ? 'sm' : this.size === 'lg' ? 'lg' : 'md',
            // class={`pagination-btn pagination-first ${!canGoPrev ? 'disabled' : ''}`}
            onClick: () => this.handlePageChange(1), disabled: !canGoPrev || this.disabled, ariaLabel: "First page", icon: this.iconOnly ? "chevrons-left" : undefined, iconLibrary: "lucide", label: this.iconOnly ? undefined : this.firstText, shape: this.getEffectiveShape() })), showPrevNext && (h("ui-button", { variant: this.getButtonVariant(-1), size: this.size === 'sm' ? 'sm' : this.size === 'lg' ? 'lg' : 'md',
            // class={{
            //   'pagination-btn': true,
            //   'pagination-prev': true,
            //   'pagination-joined': this.arrowsJoined || this.segmented,
            //   'disabled': !canGoPrev
            // }}
            onClick: () => this.handlePageChange(currentPage - 1), disabled: !canGoPrev || this.disabled, ariaLabel: "Previous page", icon: this.iconOnly || this.arrowsJoined ? this.getNavIcon('prev') : undefined, iconLibrary: "lucide", label: this.iconOnly || this.arrowsJoined ? undefined : this.prevText, shape: this.getEffectiveShape() })), this.showLabel && (h("div", { class: {
                'pagination-label': true,
                'pagination-joined': this.segmented
            } }, this.getPageLabel())), !this.hideNumbers && (h("div", { class: {
                'pagination-pages': true,
                'pagination-joined': this.segmented
            } }, visiblePages.map(page => (h("ui-button", { key: page, variant: this.getButtonVariant(page), size: this.size === 'sm' ? 'sm' : this.size === 'lg' ? 'lg' : 'md',
            // class={{
            //   'pagination-btn': true,
            //   'pagination-page': true,
            //   'active': page === currentPage
            // }}
            onClick: () => this.handlePageChange(page), disabled: this.disabled, label: `${page}`, shape: this.getEffectiveShape() }))))), showPrevNext && (h("ui-button", { variant: this.getButtonVariant(-1), size: this.size === 'sm' ? 'sm' : this.size === 'lg' ? 'lg' : 'md',
            // class={{
            //   'pagination-btn': true,
            //   'pagination-next': true,
            //   'pagination-joined': this.arrowsJoined || this.segmented,
            //   'disabled': !canGoNext
            // }}
            onClick: () => this.handlePageChange(currentPage + 1), disabled: !canGoNext || this.disabled, ariaLabel: "Next page", icon: this.iconOnly || this.arrowsJoined ? this.getNavIcon('next') : undefined, iconLibrary: "lucide", label: this.iconOnly || this.arrowsJoined ? undefined : this.nextText, shape: this.getEffectiveShape() })), showFirstLast && (h("ui-button", { variant: this.getButtonVariant(-1), size: this.size === 'sm' ? 'sm' : this.size === 'lg' ? 'lg' : 'md',
            //// class={`pagination-btn pagination-last ${!canGoNext ? 'disabled' : ''}`}
            onClick: () => this.handlePageChange(totalPages), disabled: !canGoNext || this.disabled, ariaLabel: "Last page", icon: this.iconOnly ? "chevrons-right" : undefined, iconLibrary: "lucide", label: this.iconOnly ? undefined : this.lastText, shape: this.getEffectiveShape() })), this.quickJump && (h("ui-button", { variant: this.getButtonVariant(-1), size: this.size === 'sm' ? 'sm' : this.size === 'lg' ? 'lg' : 'md',
            //// class={`pagination-btn pagination-quick-backward ${!canGoPrev ? 'disabled' : ''}`}
            onClick: () => this.handleQuickJump('backward'), disabled: !canGoPrev || this.disabled, ariaLabel: `Jump back ${this.quickJumpStep} pages`, icon: "chevrons-left", iconLibrary: "lucide", shape: this.getEffectiveShape() })), this.quickJump && (h("ui-button", { variant: this.getButtonVariant(-1), size: this.size === 'sm' ? 'sm' : this.size === 'lg' ? 'lg' : 'md',
            // class={`pagination-btn pagination-quick-forward ${!canGoNext ? 'disabled' : ''}`}
            onClick: () => this.handleQuickJump('forward'), disabled: !canGoNext || this.disabled, ariaLabel: `Jump forward ${this.quickJumpStep} pages`, icon: "chevrons-right", iconLibrary: "lucide", shape: this.getEffectiveShape() }))));
    }
    renderCompactPagination() {
        const { currentPage, totalPages } = this;
        const canGoPrev = currentPage > 1;
        const canGoNext = currentPage < totalPages;
        return (h("div", { class: "pagination-compact" }, h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "chevron-left", iconLibrary: "lucide", iconSize: "14px",
            // class={`pagination-btn pagination-prev ${!canGoPrev ? 'disabled' : ''}`}
            onClick: () => this.handlePageChange(currentPage - 1), disabled: !canGoPrev || this.disabled, ariaLabel: "Previous page", shape: this.getEffectiveShape() }), h("span", { class: "pagination-info" }, currentPage, " of ", totalPages), h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "chevron-right", iconLibrary: "lucide", iconSize: "14px",
            // class={`pagination-btn pagination-next ${!canGoNext ? 'disabled' : ''}`}
            onClick: () => this.handlePageChange(currentPage + 1), disabled: !canGoNext || this.disabled, ariaLabel: "Next page", shape: this.getEffectiveShape() })));
    }
    renderDetailedPagination() {
        const startItem = (this.currentPage - 1) * this.itemsPerPage + 1;
        const endItem = Math.min(this.currentPage * this.itemsPerPage, this.totalItems);
        return (h("div", { class: "pagination-detailed" }, this.renderBasicPagination(), h("div", { class: "pagination-details" }, this.showTotal && (h("span", { class: "pagination-total" }, "Showing ", startItem, "-", endItem, " of ", this.totalItems, " items")), this.renderPageSizeSelector(), this.showJumpTo && (h("div", { class: "pagination-jump" }, h("label", null, "Go to page:"), h("ui-input", { type: "number", min: 1, max: this.totalPages, value: this.jumpToPage, class: this.inputError ? 'has-error' : '', onInputChange: (e) => this.handleInputChange(e), onInputKeydown: (e) => e.detail.key === 'Enter' && this.handleJumpToPage(), disabled: this.disabled, size: "sm", variant: "plain", showTypeIcon: false, style: { width: this.getPageInputWidth() } }), h("ui-button", { variant: "primary", size: "sm",
            //// pagination-jump-btn"
            onClick: () => this.handleJumpToPage(), disabled: this.disabled, label: "Go", shape: this.getEffectiveShape() }))))));
    }
    renderMinimalPagination() {
        const { currentPage, totalPages } = this;
        const canGoPrev = currentPage > 1;
        const canGoNext = currentPage < totalPages;
        return (h("div", { class: "pagination-minimal" }, h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "chevrons-left", iconLibrary: "lucide", iconSize: "14px",
            // class={`pagination-btn pagination-prev ${!canGoPrev ? 'disabled' : ''}`}
            onClick: () => this.handlePageChange(currentPage - 1), disabled: !canGoPrev || this.disabled, ariaLabel: "Previous page", shape: this.getEffectiveShape() }), h("div", { class: "pagination-input-group" }, h("ui-input", { type: "number", min: 1, max: totalPages, value: this.jumpToPage || this.currentPage, onInputChange: (e) => this.handleInputChange(e), onInputBlur: () => this.handleJumpToPage(), onInputKeydown: (e) => e.detail.key === 'Enter' && this.handleJumpToPage(), disabled: this.disabled, class: `pagination-page-input ${this.inputError ? 'has-error' : ''}`, size: "sm", variant: "plain", showTypeIcon: false, style: { width: this.getPageInputWidth() } }), h("span", { class: "pagination-separator" }, "of"), h("span", { class: "pagination-total-pages" }, totalPages)), h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "chevrons-right", iconLibrary: "lucide", iconSize: "14px",
            // class={`pagination-btn pagination-next ${!canGoNext ? 'disabled' : ''}`}
            onClick: () => this.handlePageChange(currentPage + 1), disabled: !canGoNext || this.disabled, ariaLabel: "Next page", shape: this.getEffectiveShape() })));
    }
    renderAdvancedPagination() {
        return (h("div", { class: "pagination-advanced" }, h("div", { class: "pagination-controls" }, this.renderPageSizeSelector(), this.showTotal && (h("div", { class: "pagination-summary" }, "Showing ", ((this.currentPage - 1) * this.itemsPerPage) + 1, " to ", Math.min(this.currentPage * this.itemsPerPage, this.totalItems), " of ", this.totalItems, " entries"))), this.renderBasicPagination(), this.showJumpTo && (h("div", { class: "pagination-jump-section" }, h("label", null, "Jump to page:"), h("ui-input", { type: "text", inputmode: "numeric", pattern: "[0-9]*", value: this.currentPage.toString(), size: this.size, onInputChange: (e) => this.handleInputChange(e), class: {
                'pagination-page-input': true,
                'has-error': this.inputError !== ''
            }, style: { width: this.getPageInputWidth() }, error: this.inputError !== '', showError: false, disabled: this.disabled }), h("ui-button", { variant: "primary", size: "sm",
            ////class="pagination-btn"
            onClick: () => this.handleJumpToPage(), disabled: this.disabled, label: "Go", shape: this.getEffectiveShape() })))));
    }
    renderInfinitePagination() {
        return (h("div", { class: "pagination-infinite" }, h("div", { class: "pagination-loading" }, this.loading ? (h("ui-loader", { size: "xs", color: "currentColor" })) : (h("ui-button", { variant: "primary",
            // pagination-load-more"
            onClick: () => this.handlePageChange(this.currentPage + 1), disabled: this.currentPage >= this.totalPages || this.disabled, label: "Load More", shape: this.getEffectiveShape() }))), this.showTotal && (h("div", { class: "pagination-infinite-info" }, "Showing ", this.currentPage * this.itemsPerPage, " of ", this.totalItems, " items"))));
    }
    renderDropdownPagination() {
        const pageOptions = [];
        for (let i = 1; i <= this.totalPages; i++) {
            pageOptions.push({
                label: `Page ${i} of ${this.totalPages}`,
                value: i.toString()
            });
        }
        return (h("div", { class: "pagination-dropdown-container" }, this.showTotal && (h("div", { class: "pagination-total" }, this.totalItems, " Items")), this.renderPageSizeSelector(), !this.hideNavButtons && (h("ui-button", { variant: "ghost", iconOnly: true, icon: "chevron-left", iconLibrary: "lucide",
            // pagination-prev"
            onClick: () => this.handlePageChange(this.currentPage - 1), disabled: this.currentPage === 1 || this.disabled, ariaLabel: "Previous page", shape: "circle" })), h("div", { class: { 'pagination-dropdown-wrapper': true, 'pagination-dropdown-wrapper-open': this.openDropdown === 'page' }, onClick: (e) => e.stopPropagation() }, h("div", { class: { 'pg-dropdown': true, 'pg-dropdown-open-host': this.openDropdown === 'page' } }, h("button", { class: { 'pg-dropdown-trigger': true, 'pg-dropdown-trigger-wide': true, 'pg-dropdown-open': this.openDropdown === 'page' }, onClick: () => { this.openDropdown = this.openDropdown === 'page' ? null : 'page'; }, disabled: this.disabled, type: "button" }, h("span", null, "Page ", this.currentPage, " of ", this.totalPages), h("svg", { class: { 'pg-dropdown-arrow': true, 'pg-arrow-up': this.openDropdown === 'page' }, width: "12", height: "12", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "2.5", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "m6 9 6 6 6-6" }))), this.openDropdown === 'page' && (h("div", { class: "pg-dropdown-panel pg-dropdown-panel-scroll" }, pageOptions.map(opt => (h("div", { class: { 'pg-dropdown-item': true, 'pg-dropdown-item-selected': opt.value === this.currentPage.toString() }, onClick: () => { this.handlePageChange(parseInt(opt.value)); this.openDropdown = null; } }, h("span", null, opt.label), opt.value === this.currentPage.toString() && (h("svg", { class: "pg-dropdown-check", width: "14", height: "14", viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", "stroke-width": "3", "stroke-linecap": "round", "stroke-linejoin": "round" }, h("path", { d: "M20 6 9 17l-5-5" })))))))))), !this.hideNavButtons && (h("ui-button", { variant: "ghost", iconOnly: true, icon: "chevron-right", iconLibrary: "lucide",
            // pagination-next"
            onClick: () => this.handlePageChange(this.currentPage + 1), disabled: this.currentPage === this.totalPages || this.disabled, ariaLabel: "Next page", shape: "circle" }))));
    }
    renderInputPagination() {
        return (h("div", { class: "pagination-input-container" }, this.showTotal && (h("div", { class: "pagination-total" }, this.totalItems, " Total")), this.renderPageSizeSelector(), !this.hideNavButtons && (h("ui-button", { variant: "ghost", iconOnly: true, icon: this.getNavIcon('first'), iconLibrary: "lucide",
            // pagination-first"
            onClick: () => this.handlePageChange(1), disabled: this.currentPage === 1 || this.disabled, ariaLabel: "First page", shape: "circle" })), !this.hideNavButtons && (h("ui-button", { variant: "ghost", iconOnly: true, icon: this.getNavIcon('prev'), iconLibrary: "lucide",
            // pagination-prev"
            onClick: () => this.handlePageChange(this.currentPage - 1), disabled: this.currentPage === 1 || this.disabled, ariaLabel: "Previous page", shape: "circle" })), h("ui-input", { type: "text", inputmode: "numeric", pattern: "[0-9]*", class: `pagination-page-input ${this.inputError ? 'has-error' : ''}`, value: this.pageInputValue, onInputChange: (e) => this.handleInputChange(e), onInputKeydown: (e) => e.detail.key === 'Enter' && this.handleJumpToPage(), onFocusInternal: () => { this.inputError = ''; }, disabled: this.disabled, size: this.size, variant: "plain", showTypeIcon: false, showError: false, style: { width: this.getPageInputWidth() } }), h("span", { class: "pagination-input-label" }, "of ", h("strong", null, this.totalPages)), !this.hideNavButtons && (h("ui-button", { variant: "ghost", iconOnly: true, icon: this.getNavIcon('next'), iconLibrary: "lucide",
            // pagination-next"
            onClick: () => this.handlePageChange(this.currentPage + 1), disabled: this.currentPage === this.totalPages || this.disabled, ariaLabel: "Next page", shape: "circle" })), !this.hideNavButtons && (h("ui-button", { variant: "ghost", iconOnly: true, icon: this.getNavIcon('last'), iconLibrary: "lucide",
            // pagination-last"
            onClick: () => this.handlePageChange(this.totalPages), disabled: this.currentPage === this.totalPages || this.disabled, shape: "circle" }))));
    }
    renderIndicatorPagination() {
        const pages = Array.from({ length: this.totalPages }, (_, i) => i + 1);
        return (h("div", { class: "pagination-indicator-container" }, this.showPrevNext && (h("ui-button", { variant: this.getButtonVariant(-1), iconOnly: true, icon: "chevron-left", iconLibrary: "lucide",
            //class="pagination-nav-btn"
            onClick: () => this.handlePageChange(this.currentPage - 1), disabled: this.currentPage === 1 || this.disabled, ariaLabel: "Previous page", shape: this.getEffectiveShape() })), h("div", { class: "pagination-indicators" }, pages.map(page => (h("div", { class: {
                'pagination-indicator': true,
                'pagination-indicator-active': page === this.currentPage
            }, onClick: () => !this.disabled && this.handlePageChange(page), role: "button", tabindex: this.disabled ? -1 : 0, "aria-label": `Go to page ${page}`, "aria-current": page === this.currentPage ? 'page' : undefined }, h("div", { class: "pagination-indicator-dot" }), page === this.currentPage && (h("div", { class: "pagination-indicator-label" }, page)))))), this.showPrevNext && (h("ui-button", { variant: this.getButtonVariant(-1), iconOnly: true, icon: "chevron-right", iconLibrary: "lucide",
            //class="pagination-nav-btn"
            onClick: () => this.handlePageChange(this.currentPage + 1), disabled: this.currentPage === this.totalPages || this.disabled, ariaLabel: "Next page", shape: this.getEffectiveShape() })), this.showTotal && (h("div", { class: "pagination-total" }, this.currentPage, " / ", this.totalPages))));
    }
    getButtonVariant(page) {
        if (page === this.currentPage) {
            if (this.variant === 'soft')
                return 'soft';
            if (this.variant === 'glass')
                return 'glass';
            if (this.variant === 'modern')
                return 'primary';
            if (this.variant === 'premium')
                return 'primary';
            return this.theme;
        }
        if (this.variant === 'outlined')
            return 'outline';
        if (this.variant === 'floating')
            return 'raised';
        if (this.variant === 'glass')
            return 'glass';
        if (this.variant === 'soft')
            return 'soft';
        if (this.variant === 'modern')
            return 'ghost';
        if (this.variant === 'minimalist')
            return 'plain';
        if (this.variant === 'premium')
            return 'ghost';
        if (this.variant === 'underline')
            return 'ghost';
        return 'ghost';
    }
    render() {
        // Auto-hide when only one page
        if (this.autoHide && this.totalPages <= 1 && !this.infinite) {
            return null;
        }
        // Smart compact mode - auto-switch based on page count
        const effectiveType = this.smartCompact && this.totalPages > this.smartCompactThreshold
            ? 'compact'
            : (this.responsiveMode && this.isMobile ? 'compact' : this.type);
        const effectiveShape = this.shape !== 'default' ? this.shape : (this.circle ? 'circle' : (this.pill ? 'pill' : 'default'));
        const classes = {
            'ui-pagination': true,
            [`pagination-${effectiveType}`]: true,
            [`pagination-${this.size}`]: true,
            [`pagination-${this.variant}`]: true,
            [`pagination-theme-${this.theme}`]: this.theme !== 'default',
            [`pagination-shape-${effectiveShape}`]: effectiveShape !== 'default',
            'pagination-disabled': this.disabled,
            'pagination-segmented': this.segmented,
            'pagination-arrows-joined': this.arrowsJoined,
            'pagination-vertical': this.vertical,
            'pagination-rtl': this.rtl,
            'pagination-mobile': this.isMobile,
            'pagination-sticky': this.sticky,
            [`pagination-sticky-${this.stickyPosition}`]: this.sticky,
            'pagination-transitioning': this.isTransitioning,
            'pagination-has-container': ['floating', 'glass', 'modern', 'premium'].includes(this.variant),
            'pagination-dropdown-open': this.openDropdown !== null,
        };
        return (h("div", { class: classes, onKeyDown: this.handleKeyDown, tabindex: this.keyboardNav && !this.disabled ? 0 : -1, role: "navigation", "aria-label": "Pagination Navigation", ref: (el) => this.paginationRef = el }, h("div", { role: "status", "aria-live": "polite", "aria-atomic": "true", class: "sr-only" }, "Page ", this.currentPage, " of ", this.totalPages), this.showProgress && (h("div", { class: "pagination-progress-bar" }, h("div", { class: "pagination-progress-fill", style: { width: `${this.progressPercentage}%` } }))), h("div", { class: "pagination-main-content" }, this.infinite ? this.renderInfinitePagination() :
            effectiveType === 'basic' ? this.renderBasicPagination() :
                effectiveType === 'compact' ? this.renderCompactPagination() :
                    effectiveType === 'detailed' ? this.renderDetailedPagination() :
                        effectiveType === 'minimal' ? this.renderMinimalPagination() :
                            effectiveType === 'advanced' ? this.renderAdvancedPagination() :
                                effectiveType === 'dropdown' ? this.renderDropdownPagination() :
                                    effectiveType === 'input' ? this.renderInputPagination() :
                                        effectiveType === 'indicator' ? this.renderIndicatorPagination() :
                                            this.renderBasicPagination()), this.showTotal && effectiveType !== 'detailed' && effectiveType !== 'advanced' && effectiveType !== 'dropdown' && (h("div", { class: "pagination-total" }, "Total ", this.totalItems, " items"))));
    }
    static get watchers() { return {
        "totalItems": [{
                "handleTotalChange": 0
            }],
        "itemsPerPage": [{
                "handleTotalChange": 0
            }],
        "currentPage": [{
                "handleCurrentPageChange": 0
            }],
        "openDropdown": [{
                "handleOpenDropdownChange": 0
            }]
    }; }
};
Pagination.style = paginationCss();

const ratingCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:inline-block;--rating-primary:var(--color-primary, #10b981);--rating-warning:var(--color-warning, #f59e0b);--rating-success:var(--color-success, #10b981);--rating-danger:var(--color-danger, #ef4444)}.rating-container{display:inline-flex;flex-direction:column;gap:12px;user-select:none;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.rating-container.rating-victory .rating-item-active:last-child{animation:rating-victory-pulse 0.8s cubic-bezier(0.4, 0, 0.2, 1)}.rating-container.rating-victory .rating-item-active .rating-icon-container::after{content:"";position:absolute;width:6px;height:6px;background:currentColor;border-radius:50%;filter:blur(2px);animation:rating-particle-burst 0.8s cubic-bezier(0.4, 0, 0.2, 1) forwards;box-shadow:10px -20px 0 0 currentColor, -15px -25px 0 0 currentColor, 20px -30px 0 0 currentColor}.rating-container.rating-glow .rating-item-active .rating-icon-fill{filter:drop-shadow(0 0 8px currentColor);animation:rating-shimmer 2s infinite linear}@keyframes rating-shimmer{0%{opacity:0.8}50%{opacity:1}100%{opacity:0.8}}.rating-items{display:flex;align-items:center;gap:8px}.rating-rtl .rating-items{flex-direction:row-reverse}.rating-item{background:none;border:none;padding:0;margin:0;cursor:pointer;outline:none;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);display:flex;align-items:center;justify-content:center;position:relative}.rating-item:hover:not(:disabled){transform:scale(1.25);z-index:2}.rating-item.rating-item-active{transform:scale(1.15);z-index:5}.rating-item.rating-item-selected{transform:scale(1.3);z-index:10}.rating-item.rating-item-emoji{background:var(--bg-secondary, #f1f5f9);border-radius:50%;padding:10px;font-size:1.5em;filter:grayscale(1);opacity:0.5;transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);line-height:1;display:flex;align-items:center;justify-content:center;box-shadow:inset 0 2px 4px rgba(0, 0, 0, 0.02)}.rating-item.rating-item-emoji.rating-item-active,.rating-item.rating-item-emoji.rating-item-selected{filter:grayscale(0);opacity:1;background:var(--bg-primary, #ffffff);transform:scale(1.3) !important;box-shadow:0 8px 16px rgba(0, 0, 0, 0.08), inset 0 2px 4px rgba(255, 255, 255, 0.8);z-index:20}.rating-item.rating-item-emoji .emoji-display{transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);display:inline-block}.rating-item:disabled{cursor:not-allowed;opacity:0.5}.rating-icon-container{position:relative;display:flex;align-items:center;justify-content:center;flex-shrink:0;width:34px;height:34px}.rating-size-xxxs .rating-icon-container{width:14px;height:14px}.rating-size-xxs .rating-icon-container{width:18px;height:18px}.rating-size-xs .rating-icon-container{width:22px;height:22px}.rating-size-sm .rating-icon-container{width:26px;height:26px}.rating-size-md .rating-icon-container{width:34px;height:34px}.rating-size-lg .rating-icon-container{width:44px;height:44px}.rating-size-xl .rating-icon-container{width:56px;height:56px}.rating-size-xxl .rating-icon-container{width:72px;height:72px}.rating-size-xxxl .rating-icon-container{width:96px;height:96px}.rating-icon-bg{color:var(--text-muted, #94a3b8);opacity:0.4 !important;transition:all 0.3s;display:block;width:100%;height:100%;position:absolute;top:0;left:0}.rating-glass .rating-icon-bg{color:rgba(255, 255, 255, 0.4);opacity:0.5}.rating-icon-bg.img,.rating-icon-bg img{filter:grayscale(100%);opacity:0.5}.rating-icon-fill{position:absolute;top:0;left:0;height:100%;width:0%;overflow:hidden;color:var(--rating-active-color, var(--color-warning, #f59e0b));transition:width 0.3s cubic-bezier(0.4, 0, 0.2, 1);pointer-events:none}.rating-icon-fill ui-icon,.rating-icon-fill img{display:block;position:absolute;top:0;left:0;width:34px;height:34px;flex-shrink:0}.rating-size-xxxs .rating-icon-fill ui-icon,.rating-size-xxxs .rating-icon-fill img{width:14px;height:14px}.rating-size-xxs .rating-icon-fill ui-icon,.rating-size-xxs .rating-icon-fill img{width:18px;height:18px}.rating-size-xs .rating-icon-fill ui-icon,.rating-size-xs .rating-icon-fill img{width:22px;height:22px}.rating-size-sm .rating-icon-fill ui-icon,.rating-size-sm .rating-icon-fill img{width:26px;height:26px}.rating-size-md .rating-icon-fill ui-icon,.rating-size-md .rating-icon-fill img{width:34px;height:34px}.rating-size-lg .rating-icon-fill ui-icon,.rating-size-lg .rating-icon-fill img{width:44px;height:44px}.rating-size-xl .rating-icon-fill ui-icon,.rating-size-xl .rating-icon-fill img{width:56px;height:56px}.rating-size-xxl .rating-icon-fill ui-icon,.rating-size-xxl .rating-icon-fill img{width:72px;height:72px}.rating-size-xxxl .rating-icon-fill ui-icon,.rating-size-xxxl .rating-icon-fill img{width:96px;height:96px}.rating-icon-fill img{filter:none;opacity:1;max-width:none}.rating-item-smiley{background:rgba(var(--text-standard-rgb, 128, 128, 128), 0.08);border:1px solid rgba(var(--text-standard-rgb, 128, 128, 128), 0.1);border-radius:50%;display:flex;align-items:center;justify-content:center;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);position:relative;cursor:pointer}.rating-size-xxxs .rating-item-smiley{padding:4px}.rating-size-xxs .rating-item-smiley{padding:5px}.rating-size-xs .rating-item-smiley{padding:6px}.rating-size-sm .rating-item-smiley{padding:8px}.rating-size-md .rating-item-smiley{padding:10px}.rating-size-lg .rating-item-smiley{padding:12px}.rating-size-xl .rating-item-smiley{padding:16px}.rating-size-xxl .rating-item-smiley{padding:20px}.rating-size-xxxl .rating-item-smiley{padding:24px}.rating-item-smiley.rating-item-active,.rating-item-smiley.rating-item-selected{background:rgba(var(--primary-rgb, 139, 92, 246), 0.15);transform:scale(1.15);color:var(--rating-active-color);box-shadow:0 0 0 4px rgba(var(--primary-rgb, 139, 92, 246), 0.05), 0 4px 12px rgba(0, 0, 0, 0.05)}.rating-glass .rating-item-smiley{background:rgba(255, 255, 255, 0.05)}.rating-glass .rating-item-smiley.rating-item-selected{background:rgba(255, 255, 255, 0.15)}.rating-item-thumb{padding:10px;background:var(--bg-primary, #f8fafc);border:1px solid var(--border-subtle, #e2e8f0);border-radius:12px}.rating-item-thumb.rating-item-active{background:var(--bg-primary, #ffffff);box-shadow:0 4px 12px rgba(0, 0, 0, 0.05);border-color:var(--rating-active-color)}.rating-item-thumb.rating-item-thumb-up:hover:not(:disabled){color:var(--rating-success);border-color:var(--rating-success)}.rating-item-thumb.rating-item-thumb-down:hover:not(:disabled){color:var(--rating-danger);border-color:var(--rating-danger)}.smiley-item-wrapper{display:flex;flex-direction:column;align-items:center;gap:8px}.rating-size-lg .smiley-item-wrapper{gap:12px}.rating-size-xl .smiley-item-wrapper{gap:16px}.smiley-label{font-size:11px;font-weight:700;color:var(--rating-active-color, var(--color-success, #10b981));text-transform:capitalize;letter-spacing:-0.2px;white-space:nowrap}.rating-size-lg .smiley-label{font-size:13px}.rating-size-xl .smiley-label{font-size:15px}.rating-total-reviews{display:flex;align-items:center;justify-content:center;gap:4px;margin-top:4px;color:var(--color-primary, #94a3b8);font-size:11px;font-weight:500;font-style:italic}.rating-rtl .rating-total-reviews{flex-direction:row-reverse}.rating-total-reviews .review-dot{opacity:0.5}.rating-primary{--rating-active-color:var(--rating-primary)}.rating-warning{--rating-active-color:var(--rating-warning)}.rating-success{--rating-active-color:var(--rating-success)}.rating-danger{--rating-active-color:var(--rating-danger)}.rating-size-xxxs .rating-icon-container,.rating-size-xxxs .rating-item-smiley{width:14px;height:14px}.rating-size-xxxs ui-icon{--size:14px}.rating-size-xxxs img{width:14px;height:14px}.rating-size-xxs .rating-icon-container,.rating-size-xxs .rating-item-smiley{width:18px;height:18px}.rating-size-xxs ui-icon{--size:18px}.rating-size-xxs img{width:18px;height:18px}.rating-size-xs .rating-icon-container,.rating-size-xs .rating-item-smiley{width:22px;height:22px}.rating-size-xs ui-icon{--size:22px}.rating-size-xs img{width:22px;height:22px}.rating-size-sm .rating-icon-container,.rating-size-sm .rating-item-smiley{width:26px;height:26px}.rating-size-sm ui-icon{--size:26px}.rating-size-sm img{width:26px;height:26px}.rating-size-md .rating-icon-container,.rating-size-md .rating-item-smiley{width:34px;height:34px}.rating-size-md ui-icon{--size:34px}.rating-size-md img{width:34px;height:34px}.rating-size-lg .rating-icon-container,.rating-size-lg .rating-item-smiley{width:44px;height:44px}.rating-size-lg ui-icon{--size:44px}.rating-size-lg img{width:44px;height:44px}.rating-size-xl .rating-icon-container,.rating-size-xl .rating-item-smiley{width:56px;height:56px}.rating-size-xl ui-icon{--size:56px}.rating-size-xl img{width:56px;height:56px}.rating-size-xxl .rating-icon-container,.rating-size-xxl .rating-item-smiley{width:72px;height:72px}.rating-size-xxl ui-icon{--size:72px}.rating-size-xxl img{width:72px;height:72px}.rating-size-xxxl .rating-icon-container,.rating-size-xxxl .rating-item-smiley{width:96px;height:96px}.rating-size-xxxl ui-icon{--size:96px}.rating-size-xxxl img{width:96px;height:96px}.rating-glass{background:rgba(255, 255, 255, 0.05);backdrop-filter:blur(12px);padding:16px;border-radius:16px;border:1px solid rgba(255, 255, 255, 0.1);box-shadow:0 4px 20px rgba(0, 0, 0, 0.1)}.rating-raised{background:var(--bg-primary, #f8fafc);padding:20px;border-radius:20px;box-shadow:8px 8px 16px rgba(0, 0, 0, 0.05), -4px -4px 12px var(--bg-primary, #ffffff);border:1px solid rgba(0, 0, 0, 0.02)}@keyframes rating-particle-burst{0%{transform:scale(0);opacity:1}100%{transform:scale(1.5) translateY(-60px);opacity:0}}@keyframes skeleton-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}@keyframes rating-victory-pulse{from{transform:scale(1.1);filter:drop-shadow(0 0 0px var(--rating-active-color))}to{transform:scale(1.4);filter:drop-shadow(0 0 12px var(--rating-active-color))}}.rating-items-container{display:flex;align-items:center;gap:24px}.rating-summary{display:flex;align-items:center;gap:16px}.rating-summary .summary-divider{width:1px;height:24px;background:var(--bg-primary, #e2e8f0)}.rating-size-lg .rating-summary .summary-divider,.rating-size-xl .rating-summary .summary-divider{height:32px}.rating-summary .summary-content{display:flex;flex-direction:column;justify-content:center;line-height:1.2}.rating-summary .summary-content .summary-label{font-size:14px;font-weight:800;color:var(--rating-active-color, #1e293b);margin:0}.rating-summary .summary-content .summary-value{font-size:12px;font-weight:600;color:var(--rating-active-color, var(--color-success, #10b981));opacity:0.6;margin:0}.rating-summary-bottom{margin-top:12px;justify-content:center}.rating-summary-bottom .summary-divider{display:none}.rating-summary-bottom .summary-content{flex-direction:row;align-items:center;gap:8px}.rating-value{display:flex;flex-direction:column;align-items:center;gap:2px}.rating-label{font-size:13px;font-weight:700;color:var(--rating-active-color);text-transform:uppercase;letter-spacing:0.5px}.rating-number{font-size:11px;font-weight:500;color:var(--color-primary, #94a3b8)}.rating-description{color:var(--color-primary, #94a3b8);font-size:10px;font-weight:400;line-height:1.4;opacity:0.8;max-width:200px}.rating-description-side{margin-inline-start:12px;padding-inline-start:12px;border-inline-start:1px solid rgba(0, 0, 0, 0.08);display:flex;align-items:center}.rating-description-bottom{margin-top:8px;text-align:center;width:100%}.rating-victory-particle{position:absolute;width:var(--size, 6px);height:var(--size, 6px);background:var(--clr, #fbbf24);border-radius:2px;pointer-events:none;z-index:50;animation:rating-particle-burst 1s cubic-bezier(0, 0, 0.2, 1) forwards}@keyframes rating-particle-burst{0%{transform:translate(0, 0) rotate(0deg) scale(0);opacity:1}15%{transform:translate(calc(var(--tx) * 0.2), calc(var(--ty) * 0.2)) rotate(45deg) scale(1.2)}100%{transform:translate(var(--tx), var(--ty)) rotate(var(--rot)) scale(0);opacity:0}}.rating-invalid .rating-icon-bg{color:var(--rating-danger, var(--color-danger, #ef4444));opacity:0.2}.rating-invalid .rating-icon-fill{color:var(--rating-danger, var(--color-danger, #ef4444))}.rating-invalid.rating-glow .rating-item-active{filter:drop-shadow(0 0 8px rgba(var(--color-danger-rgb, 239, 68, 68), 0.4))}.rating-helper{margin-top:8px;font-size:11px;color:var(--text-muted, #64748b);display:flex;align-items:center;gap:6px}.rating-helper.rating-error{color:var(--color-danger, #ef4444)}.rating-histogram{display:flex;flex-direction:column;gap:6px;margin-top:16px;padding-top:16px;border-top:1px solid var(--border-subtle, #e2e8f0);width:100%}.histogram-row{display:flex;align-items:center;gap:12px;font-size:11px}.histogram-label{display:flex;align-items:center;gap:4px;min-width:40px;font-weight:600;color:var(--text-standard, #475569)}.histogram-bar-container{flex:1;height:8px;background:var(--bg-secondary, #f1f5f9);border-radius:4px;overflow:hidden}.histogram-bar-fill{height:100%;border-radius:4px;transition:width 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.histogram-count{min-width:30px;text-align:right;font-weight:500;color:var(--text-muted, #94a3b8)}.rating-container:focus{outline:none}.rating-container:focus .rating-items{box-shadow:0 0 0 3px var(--rating-active-color, #fbbf24) 44;border-radius:8px;padding:4px;margin:-4px}`;

const Rating = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.ratingChange = createEvent(this, "ratingChange");
    }
    get el() { return getElement(this); }
    /**
     * Type of rating
     */
    type = 'star';
    /**
     * Current rating value
     */
    value = 0;
    /**
     * Maximum rating value (for star and smiley types)
     */
    max = 5;
    /**
     * Size of the rating icons
     */
    size = 'md';
    /**
     * Color of active rating
     */
    color = 'warning';
    /**
     * Custom active color (hex/css color)
     */
    activeColor;
    /**
     * Custom active fill color (hex/css color)
     */
    activeFillColor;
    /**
     * Read-only mode
     */
    readonly = false;
    /**
     * Disabled state
     */
    disabled = false;
    /**
     * Allow half ratings (only for star type)
     */
    allowHalf = false;
    /**
     * Show rating value text
     */
    showValue = false;
    /**
     /** High-Fidelity: Tactical side/bottom description */
    description;
    descriptionPosition = 'bottom';
    /** Custom labels for ratings
     */
    labels;
    /** High-Fidelity: Atmospheric glow on active items */
    glow = false;
    /** High-Fidelity: Sensory vibration feedback */
    haptic = false;
    /** High-Fidelity: Victory pulse on max rating */
    victoryGlow = false;
    /** High-Fidelity: Visual variant */
    variant = 'default';
    /** High-Fidelity: Allow clearing the rating by clicking the same value */
    clearable = false;
    /** Custom Icon Name (Lucide) */
    iconName = 'star';
    /** Icon Library */
    iconLibrary = 'lucide';
    /** High-Fidelity: Image URL for the rating marker */
    image;
    /** High-Fidelity: Dynamic color mapping for individual items (JSON array) */
    colorMap;
    /** Validation: Error state */
    invalid = false;
    /** Validation: Error message */
    errorMessage;
    /** Show total review count */
    showReviews = false;
    /** Total review count value */
    totalReviews = 0;
    /** Validation: Helper text */
    helperText;
    /**
     * Show a distribution histogram of total reviews
     */
    showHistogram = false;
    /**
     * Data for the rating summary histogram (JSON array of counts from 5 to 1 stars)
     */
    summaryData;
    /**
     * Use native emojis instead of icons for smiley rating
     */
    useEmoji = false;
    /**
     * Show a visual summary of the current rating (label and value)
     */
    showSummary = false;
    /**
     * Position of the summary
     */
    summaryPosition = 'side';
    /**
     * RTL support
     */
    rtl = false;
    hoverValue = 0;
    isVictory = false;
    particles = [];
    /**
     * Emitted when rating changes
     */
    ratingChange;
    getLabels() {
        if (this.labels) {
            try {
                return typeof this.labels === 'string' ? JSON.parse(this.labels) : this.labels;
            }
            catch {
                return [];
            }
        }
        return [];
    }
    handleClick = (rating) => {
        if (this.readonly || this.disabled)
            return;
        if (this.type === 'thumb') {
            // Thumb: toggle between 1 (up), -1 (down), 0 (none)
            if (this.value === rating) {
                this.value = 0;
            }
            else {
                this.value = rating;
            }
        }
        else {
            if (this.clearable && this.value === rating) {
                this.value = 0;
            }
            else {
                this.value = rating;
            }
        }
        if (this.haptic && 'vibrate' in navigator) {
            navigator.vibrate(this.value === this.max ? [15, 30, 15] : 10);
        }
        if (this.value === this.max) {
            this.triggerVictory();
        }
        this.ratingChange.emit(this.value);
    };
    handleKeyDown = (event) => {
        if (this.readonly || this.disabled)
            return;
        let newValue = this.value;
        const step = this.allowHalf ? 0.5 : 1;
        const isRtl = this.rtl || this.el.dir === 'rtl' || !!this.el.closest('[dir="rtl"]');
        switch (event.key) {
            case 'ArrowRight':
            case 'ArrowUp':
                newValue = isRtl
                    ? Math.max(0, this.value - step)
                    : Math.min(this.max, this.value + step);
                event.preventDefault();
                break;
            case 'ArrowLeft':
            case 'ArrowDown':
                newValue = isRtl
                    ? Math.min(this.max, this.value + step)
                    : Math.max(0, this.value - step);
                event.preventDefault();
                break;
            case 'Home':
                newValue = 0;
                event.preventDefault();
                break;
            case 'End':
                newValue = this.max;
                event.preventDefault();
                break;
            default:
                return;
        }
        if (newValue !== this.value) {
            this.value = newValue;
            this.ratingChange.emit(this.value);
            if (this.value === this.max)
                this.triggerVictory();
        }
    };
    triggerVictory = () => {
        if (!this.victoryGlow)
            return;
        this.isVictory = true;
        // Create euphoria particles
        const newParticles = Array.from({ length: 24 }).map((_, i) => ({
            id: Date.now() + i,
            tx: (Math.random() - 0.5) * 500,
            ty: -(Math.random() * 300 + 100),
            rot: Math.random() * 720,
            clr: ['#fbbf24', '#f59e0b', '#3bf673', '#10b981', '#ef4444', '#6366f1'][i % 6],
            size: Math.random() * 8 + 4
        }));
        this.particles = newParticles;
        setTimeout(() => {
            this.isVictory = false;
            this.particles = [];
        }, 1500);
    };
    handleMouseEnter = (rating) => {
        if (this.readonly || this.disabled)
            return;
        this.hoverValue = rating;
    };
    handleMouseLeave = () => {
        if (this.readonly || this.disabled)
            return;
        this.hoverValue = 0;
    };
    renderStarRating() {
        const items = [];
        const currentValue = this.hoverValue || this.value;
        const colorMapArray = this.colorMap ? JSON.parse(this.colorMap) : null;
        for (let i = 1; i <= this.max; i++) {
            const isActive = currentValue >= i;
            const isHalf = this.allowHalf && currentValue >= i - 0.5 && currentValue < i;
            const isHovered = this.hoverValue >= i;
            const itemColor = colorMapArray && colorMapArray[i - 1] ? colorMapArray[i - 1] : (this.activeColor || this.color);
            const activeFill = this.activeFillColor || 'currentColor';
            items.push(h("button", { type: "button", class: {
                    'rating-item': true,
                    'rating-item-active': isActive || isHalf,
                    'rating-item-half': isHalf,
                    'rating-item-hover': isHovered,
                    [`rating-color-${itemColor}`]: !!itemColor,
                }, onClick: () => this.handleClick(i), onMouseEnter: () => this.handleMouseEnter(i), onMouseLeave: this.handleMouseLeave, disabled: this.disabled || this.readonly, "aria-label": `Rate ${i} out of ${this.max}` }, h("div", { class: "rating-icon-container" }, this.image ? (h("img", { src: this.image, class: "rating-icon-bg", alt: "rating" })) : (h("ui-icon", { name: this.iconName, color: "currentColor", library: this.iconLibrary, size: this.size, class: "rating-icon-bg" })), h("div", { class: "rating-icon-fill", style: { width: isHalf ? '50%' : (isActive ? '100% ' : '0%') } }, this.image ? (h("img", { src: this.image, alt: "rating active" })) : (h("ui-icon", { name: this.iconName, color: "currentColor", library: this.iconLibrary, size: this.size, fill: activeFill }))))));
        }
        return items;
    }
    renderHistogram() {
        if (!this.summaryData)
            return null;
        try {
            const data = typeof this.summaryData === 'string' ? JSON.parse(this.summaryData) : this.summaryData;
            if (!Array.isArray(data))
                return null;
            const total = data.reduce((a, b) => a + b, 0);
            const activeColor = this.activeColor || `var(--rating-${this.color})`;
            return (h("div", { class: "rating-histogram" }, data.map((count, index) => {
                const stars = data.length - index;
                const percentage = total > 0 ? (count / total) * 100 : 0;
                return (h("div", { class: "histogram-row" }, h("span", { class: "histogram-label" }, stars, " ", h("ui-icon", { name: "star", library: "lucide", size: "10px" })), h("div", { class: "histogram-bar-container" }, h("div", { class: "histogram-bar-fill", style: { width: `${percentage}%`, backgroundColor: activeColor } })), h("span", { class: "histogram-count" }, count)));
            })));
        }
        catch {
            return null;
        }
    }
    renderSmileyRating() {
        const items = [];
        const labels = this.getLabels();
        const icons = ['frown', 'meh', 'smile', 'laugh', 'heart'];
        const emojis = ['😢', '😕', '😐', '🙂', '😄'];
        const currentValue = this.hoverValue || this.value;
        for (let i = 1; i <= this.max; i++) {
            const isHovered = this.hoverValue === i;
            const isSelected = this.value === i;
            const isActive = currentValue === i || (this.useEmoji && currentValue >= i);
            const icon = icons[i - 1] || 'smile';
            const emoji = emojis[i - 1] || '🙂';
            items.push(h("div", { class: "smiley-item-wrapper" }, h("button", { type: "button", class: {
                    'rating-item': true,
                    'rating-item-smiley': true,
                    'rating-item-active': isActive,
                    'rating-item-selected': isSelected,
                    'rating-item-hover': isHovered,
                    'rating-item-emoji': this.useEmoji,
                }, onClick: () => this.handleClick(i), onMouseEnter: () => this.handleMouseEnter(i), onMouseLeave: this.handleMouseLeave, disabled: this.disabled || this.readonly, "aria-label": labels[i - 1] || `Rate ${i} out of ${this.max}` }, this.useEmoji ? (h("span", { class: "emoji-display" }, currentValue >= i || isSelected ? emoji : '⚪')) : (h("div", { class: "rating-icon-container" }, h("ui-icon", { name: icon, color: "currentColor", library: "lucide", size: this.size, class: "rating-icon-bg" }), h("div", { class: "rating-icon-fill", style: { width: isActive ? '100%' : '0%' } }, h("ui-icon", { name: icon, color: "currentColor", library: "lucide", size: this.size }))))), labels[i - 1] && (h("span", { class: "smiley-label" }, labels[i - 1]))));
        }
        return items;
    }
    renderThumbRating() {
        const thumbUpActive = this.value === 1 || this.hoverValue === 1;
        const thumbDownActive = this.value === -1 || this.hoverValue === -1;
        return [
            h("button", { type: "button", class: {
                    'rating-item': true,
                    'rating-item-thumb': true,
                    'rating-item-active': thumbUpActive,
                    'rating-item-thumb-up': true,
                }, onClick: () => this.handleClick(1), onMouseEnter: () => this.handleMouseEnter(1), onMouseLeave: this.handleMouseLeave, disabled: this.disabled || this.readonly, "aria-label": "Thumbs up" }, h("div", { class: "rating-icon-container" }, h("ui-icon", { name: "thumbs-up", color: "currentColor", library: "lucide", class: "rating-icon-bg" }), h("div", { class: "rating-icon-fill", style: { width: thumbUpActive ? '100%' : '0%' } }, h("ui-icon", { name: "thumbs-up", color: "currentColor", library: "lucide" })))),
            h("button", { type: "button", class: {
                    'rating-item': true,
                    'rating-item-thumb': true,
                    'rating-item-active': thumbDownActive,
                    'rating-item-thumb-down': true,
                }, onClick: () => this.handleClick(-1), onMouseEnter: () => this.handleMouseEnter(-1), onMouseLeave: this.handleMouseLeave, disabled: this.disabled || this.readonly, "aria-label": "Thumbs down" }, h("div", { class: "rating-icon-container" }, h("ui-icon", { name: "thumbs-down", library: "lucide", class: "rating-icon-bg" }), h("div", { class: "rating-icon-fill", style: { width: thumbDownActive ? '100%' : '0%' } }, h("ui-icon", { name: "thumbs-down", library: "lucide" })))),
        ];
    }
    render() {
        const isRtl = this.rtl || this.el.dir === 'rtl' || !!this.el.closest('[dir="rtl"]');
        const classes = {
            'rating-container': true,
            'rating-rtl': isRtl,
            [`rating-size-${this.size}`]: true,
            [`rating-variant-${this.variant}`]: true,
            'rating-readonly': this.readonly,
            'rating-disabled': this.disabled,
            'rating-glow': this.glow,
            'rating-victory': this.isVictory,
            'rating-invalid': this.invalid,
        };
        const labels = this.getLabels();
        const currentLabel = this.type === 'thumb'
            ? (this.value === 1 ? 'Liked' : this.value === -1 ? 'Disliked' : '')
            : labels[(this.hoverValue || this.value) - 1];
        const descriptionElement = this.description && (h("div", { key: 'ddad90f4a42a3c07145f31156cdc6495f33b0bee', class: `rating-description rating-description-${this.descriptionPosition}` }, this.description));
        const helperElement = (this.invalid && this.errorMessage) ? (h("div", { class: "rating-helper rating-error" }, h("ui-icon", { name: "alert-circle", library: "lucide", size: "12px" }), h("span", null, this.errorMessage))) : this.helperText ? (h("div", { class: "rating-helper" }, this.helperText)) : null;
        const dynamicStyle = {
            '--rating-active-color': this.activeColor || `var(--rating-${this.color})`,
            '--rating-fill-color': this.activeFillColor || 'currentColor',
        };
        const summaryElement = (this.showSummary && currentLabel) ? (h("div", { class: `rating-summary rating-summary-${this.summaryPosition}` }, h("div", { class: "summary-divider" }), h("div", { class: "summary-content" }, h("p", { class: "summary-label" }, currentLabel), h("p", { class: "summary-value" }, (this.hoverValue || this.value).toFixed(0), " / ", this.max)))) : null;
        return (h("div", { key: '09946cb1ba974009053c5cdf39a92c904f485cc7', class: classes, style: dynamicStyle, tabindex: this.disabled ? -1 : 0, onKeyDown: this.handleKeyDown, role: "group", "aria-label": "Rating component" }, h("div", { key: '8c56d47b79ddd22a69fd58dee44f13182ebabc3f', class: "rating-items-container" }, h("div", { key: '6c9206ec1dc844689631a32799dd368bef1160b0', class: "rating-items" }, this.type === 'star' && this.renderStarRating(), this.type === 'smiley' && this.renderSmileyRating(), this.type === 'thumb' && this.renderThumbRating(), this.descriptionPosition === 'side' && descriptionElement), this.summaryPosition === 'side' && summaryElement), this.showValue && !this.showSummary && this.type !== 'thumb' && (h("div", { key: '2b733f67e6c01f31e789b79ea1f652a63edcde39', class: "rating-value" }, currentLabel && h("span", { key: 'd5ca42772c409783b2ef5dea7da47944df87eec9', class: "rating-label" }, currentLabel), h("span", { key: '860c841ed2d7b2e642ad132d91bcd731e1a974c2', class: "rating-number" }, (this.hoverValue || this.value).toFixed(this.allowHalf ? 1 : 0), " / ", this.max))), this.showReviews && this.totalReviews > 0 && (h("div", { key: 'd3f05521d7337580d120356ce44cc149211fe28f', class: "rating-total-reviews" }, h("span", { key: '4f3c9863f74bb3e2a5f2d46cb94bef7e053471a1', class: "review-dot" }, "\u2022"), h("span", { key: '9eb1794ad9f571667afd26857719bc38c68f5dbf', class: "review-count" }, "(", this.totalReviews, " reviews)"))), this.descriptionPosition === 'bottom' && descriptionElement, this.summaryPosition === 'bottom' && summaryElement, this.showHistogram && this.renderHistogram(), helperElement, this.particles.map(p => (h("div", { key: p.id, class: "rating-victory-particle", style: {
                '--tx': `${p.tx}px`,
                '--ty': `${p.ty}px`,
                '--rot': `${p.rot}deg`,
                '--clr': p.clr,
                '--size': `${p.size}px`,
                'left': '50%',
                'top': '50%'
            } })))));
    }
};
Rating.style = ratingCss();

const skeletonLoaderCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{--skeleton-bg:var(--skeleton-loader-bg, var(--bg-tertiary, #e2e8f0));--skeleton-wave-bg:var(--skeleton-loader-wave-bg, var(--bg-secondary, #f3f4f6));--skeleton-border-radius:var(--skeleton-loader-border-radius, 4px);--skeleton-progress-bar-bg:var(--skeleton-loader-progress-bar-bg, var(--bg-primary, #ffffff));--skeleton-focus-ring:var(--skeleton-loader-focus-ring, var(--color-primary, #10b981));--skeleton-focus-shadow:var(--skeleton-loader-focus-shadow, #dbeafe)}:host-context([data-theme=dark]),:host-context([data-theme=blue]),:host-context([data-theme=violet]),:host-context([data-theme=green]),:host-context([data-theme=pink]),:host-context(.theme-dark),:host-context(.theme-blue),:host-context(.theme-violet),:host-context(.theme-green),:host-context(.theme-pink),:host(.theme-dark),:host([dark=dark]),:host-context(.skeleton-dark),.skeleton-dark{--skeleton-bg:var(--skeleton-loader-bg, var(--bg-secondary, #1e293b));--skeleton-wave-bg:var(--skeleton-loader-wave-bg, var(--bg-tertiary, #334155))}.skeleton-color-primary{--skeleton-bg:color-mix(in srgb, var(--color-primary, #10b981) 20%, transparent);--skeleton-wave-bg:color-mix(in srgb, var(--color-primary, #10b981) 40%, transparent)}.skeleton-color-secondary{--skeleton-bg:color-mix(in srgb, var(--color-secondary, #64748b) 20%, transparent);--skeleton-wave-bg:color-mix(in srgb, var(--color-secondary, #64748b) 40%, transparent)}.skeleton-color-success{--skeleton-bg:color-mix(in srgb, var(--color-success, #22c55e) 20%, transparent);--skeleton-wave-bg:color-mix(in srgb, var(--color-success, #22c55e) 40%, transparent)}.skeleton-color-danger{--skeleton-bg:color-mix(in srgb, var(--color-danger, #ef4444) 20%, transparent);--skeleton-wave-bg:color-mix(in srgb, var(--color-danger, #ef4444) 40%, transparent)}.skeleton-color-warning{--skeleton-bg:color-mix(in srgb, var(--color-warning, #f59e0b) 20%, transparent);--skeleton-wave-bg:color-mix(in srgb, var(--color-warning, #f59e0b) 40%, transparent)}.skeleton-color-info{--skeleton-bg:color-mix(in srgb, var(--color-info, #38bdf8) 20%, transparent);--skeleton-wave-bg:color-mix(in srgb, var(--color-info, #38bdf8) 40%, transparent)}.skeleton-replication-container ::slotted([slot=custom]:focus-visible){outline:2px solid var(--color-primary, #10b981);outline-offset:2px;border-radius:4px;box-shadow:0 0 0 2px var(--border-subtle, #dbeafe);transition:outline 0.2s, box-shadow 0.2s}.skeleton-rtl .skeleton{direction:rtl;--skeleton-wave-angle:-90deg;animation-direction:reverse}.skeleton-progress-bar{transition:width 0.3s cubic-bezier(0.4, 0, 0.2, 1);background:var(--skeleton-wave-bg, var(--bg-primary, #ffffff));height:4px;border-radius:2px;margin-top:4px}.skeleton-replication-container slot[name=custom]{display:block;margin-top:8px}:host{display:block}.skeleton{background:var(--skeleton-bg, #f0f0f0);position:relative;overflow:hidden}.skeleton-animated.skeleton-pulse{animation:skeleton-pulse var(--skeleton-wave-speed, 1.5s) ease-in-out infinite}.skeleton-animated.skeleton-wave{background:linear-gradient(var(--skeleton-wave-angle, 90deg), var(--skeleton-bg, #f0f0f0) 25%, var(--skeleton-wave-bg, #e0e0e0) 50%, var(--skeleton-bg, #f0f0f0) 75%);background-size:200% 100%;animation:skeleton-wave var(--skeleton-wave-speed, 1.5s) ease-in-out infinite;}.skeleton-dark .skeleton-animated.skeleton-wave{background:linear-gradient(var(--skeleton-wave-angle, 90deg), var(--skeleton-bg, #1e293b) 25%, var(--skeleton-wave-bg, #334155) 50%, var(--skeleton-bg, #1e293b) 75%);background-size:200% 100%}.skeleton-animated.skeleton-shimmer{background:linear-gradient(110deg, var(--skeleton-bg, #f0f0f0) 8%, var(--skeleton-wave-bg, #e0e0e0) 18%, var(--skeleton-bg, #f0f0f0) 33%);background-size:200% 100%;animation:skeleton-shimmer var(--skeleton-wave-speed, 1.5s) linear infinite}.skeleton-animated.skeleton-sheen::after{content:"";position:absolute;top:0;right:0;bottom:0;left:0;transform:translateX(-100%);background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);animation:skeleton-sheen var(--skeleton-wave-speed, 1.5s) infinite}.skeleton-animated.skeleton-glow{animation:skeleton-glow var(--skeleton-wave-speed, 1.5s) ease-in-out infinite alternate}.skeleton-animated.skeleton-flicker{animation:skeleton-flicker 0.2s infinite}.skeleton-circle{border-radius:50%}.skeleton-rounded{border-radius:var(--skeleton-border-radius, 4px)}.skeleton-text{border-radius:4px}.skeleton-avatar{border-radius:50%}.skeleton-button{border-radius:6px}.skeleton-card{border-radius:8px;padding:16px}.skeleton-list-item{border-radius:4px;padding:12px;display:flex;align-items:center;gap:12px}.skeleton-card-content{display:flex;flex-direction:column;gap:12px}.skeleton-card-header{display:flex;align-items:center;gap:12px}.skeleton-card-title{flex:1;display:flex;flex-direction:column;gap:6px}.skeleton-card-body{display:flex;flex-direction:column;gap:8px}.skeleton-list-content{display:flex;align-items:center;gap:12px;width:100%}.skeleton-list-text{flex:1;display:flex;flex-direction:column;gap:6px}.skeleton-card .skeleton-circle,.skeleton-card .skeleton-text,.skeleton-list-item .skeleton-circle,.skeleton-list-item .skeleton-text{background:var(--skeleton-bg, #f0f0f0);animation:inherit}.skeleton-image-icon{display:flex;align-items:center;justify-content:center;width:100%;height:100%}.skeleton-profile-template{display:flex;align-items:center;gap:16px}.skeleton-profile-template .skeleton-profile-lines{display:flex;flex-direction:column;gap:8px}.skeleton-media-object-template{display:flex;align-items:flex-start;gap:12px}.skeleton-media-object-template .skeleton-media-lines{display:flex;flex-direction:column;gap:6px}.skeleton-feed-template{width:100%;padding:16px;border:1px solid var(--ui-color-border, var(--border-default, #e5e7eb));border-radius:12px;background:var(--ui-color-surface, var(--bg-primary, #ffffff))}.skeleton-mask{width:fit-content;height:fit-content;min-width:20px;min-height:20px;display:inline-block}.skeleton-mask>*{visibility:hidden}.skeleton-mask.skeleton-ghost>*{visibility:visible !important;opacity:0.15 !important;filter:blur(2px) grayscale(1)}.skeleton-replication-container{width:100%;display:flex;gap:var(--skeleton-gap, 16px)}.skeleton-replication-container.skeleton-direction-row{flex-wrap:wrap;flex-direction:row !important}.skeleton-replication-container.skeleton-direction-column{flex-direction:column !important}.skeleton-elevated{box-shadow:var(--skeleton-elevation, none)}@keyframes skeleton-pulse{0%,100%{opacity:1}50%{opacity:0.6}}@keyframes skeleton-wave{0%{background-position:-200% 0}100%{background-position:200% 0}}@keyframes skeleton-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}@keyframes skeleton-sheen{100%{transform:translateX(100%)}}@keyframes skeleton-glow{from{box-shadow:0 0 5px rgba(255, 255, 255, 0), inset 0 0 5px rgba(255, 255, 255, 0)}to{box-shadow:0 0 20px rgba(255, 255, 255, 0.2), inset 0 0 10px rgba(255, 255, 255, 0.1)}}@keyframes skeleton-flicker{0%{opacity:0.95}25%{opacity:1}50%{opacity:0.9}75%{opacity:1}100%{opacity:0.95}}:host{--skeleton-border-radius:4px}.skeleton-speed-slow.skeleton-pulse{animation-duration:3s}.skeleton-speed-slow.skeleton-wave{animation-duration:3s}.skeleton-speed-slow.skeleton-shimmer{animation-duration:3.5s}.skeleton-speed-slow.skeleton-sheen::after{animation-duration:3.5s}.skeleton-speed-slow.skeleton-glow{animation-duration:3s}.skeleton-speed-normal.skeleton-pulse{animation-duration:1.5s}.skeleton-speed-normal.skeleton-wave{animation-duration:1.5s}.skeleton-speed-normal.skeleton-shimmer{animation-duration:1.8s}.skeleton-speed-normal.skeleton-sheen::after{animation-duration:1.8s}.skeleton-speed-normal.skeleton-glow{animation-duration:1.5s}.skeleton-speed-fast.skeleton-pulse{animation-duration:0.8s}.skeleton-speed-fast.skeleton-wave{animation-duration:0.8s}.skeleton-speed-fast.skeleton-shimmer{animation-duration:1s}.skeleton-speed-fast.skeleton-sheen::after{animation-duration:1s}.skeleton-speed-fast.skeleton-glow{animation-duration:0.8s}`;

const SkeletonLoader = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.skeletonShow = createEvent(this, "skeletonShow");
        this.skeletonHide = createEvent(this, "skeletonHide");
    }
    /** ARIA label for accessibility */
    ariaLabel;
    /** ARIA live region (off, polite, assertive) */
    ariaLive = 'off';
    /** ARIA role override (status, progressbar, etc.) */
    ariaRole;
    /** Progress value (0-100) for determinate skeletons */
    progress;
    /** Show in dark mode (auto, light, dark) */
    dark = 'auto';
    /** RTL shimmer direction */
    rtl = false;
    /** Fires when skeleton is shown */
    skeletonShow;
    /** Fires when skeleton is hidden */
    skeletonHide;
    /**
     * Layout template to use for automatic skeleton generation.
     * If set to something other than 'none', the `shape` prop is overridden for the template layout.
     */
    template = 'none';
    /**
     * Number of items to replicate (useful for lists, cards, etc.)
     * Default: 1
     */
    count = 1;
    /**
     * Layout direction for replicated items ('row' or 'column')
     */
    direction = 'column';
    /**
     * If true, animations will automatically pause when the component is not in the viewport.
     * Dramatically improves performance and battery life for long lists.
     */
    lazyAnimation = true;
    /**
     * Animation speed
     */
    speed = 'normal';
    /**
     * Color variant or custom color (hex/rgba)
     */
    color = 'neutral';
    radius;
    /**
     * Stagger delay in ms between replicated items
     * Makes the animation feel more organic as it flows down the page.
     */
    stagger = 0;
    /**
     * Layout gap between replicated items (e.g. '12px', '1rem')
     */
    gap = '16px';
    /**
     * Optional explicit highlight/shimmer color for the wave animation.
     * If not provided, it is auto-derived from `color` by lightening it.
     */
    highlightColor;
    /**
     * Elevation / shadow intensity (0-4) to match the UI component it mimics
     */
    elevation = 0;
    /**
     * Shape of the skeleton
     */
    shape = 'rectangle';
    /**
     * If true, the skeleton acts as a mask over its children.
     * Useful for wrapping text or components to skeletonize them seamlessly.
     */
    mask = false;
    /**
     * If true, keeps the children visible at low opacity and blurred behind the skeleton.
     * Only works when `mask` is true.
     */
    ghost = false;
    /**
     * Predefined size of the skeleton (xs, sm, md, lg, xl, 2xl)
     */
    size = 'md';
    /**
     * Width of the skeleton
     */
    width = '100%';
    /**
     * Height of the skeleton
     */
    height = '20px';
    /**
     * Border radius for rounded shapes
     */
    borderRadius = '4px';
    /**
     * Whether to show animation
     */
    animated = true;
    /**
     * Animation type: 'pulse' or 'wave'
     */
    animationType = 'pulse';
    /**
     * Custom class for additional styling
     */
    customClass = '';
    /**
     * Delay in milliseconds before showing the skeleton.
     * Prevents "flicker" for high-speed connections.
     */
    delay = 0;
    /**
     * Angle of the wave animation (e.g. '45deg', '90deg').
     * Default: '90deg' (horizontal)
     */
    waveAngle = '90deg';
    /**
     * Duration of the wave animation cycle (e.g. '1.5s', '3s').
     * Default: '1.5s'
     */
    waveSpeed = '1.5s';
    /**
     * Number of rows (lines) to render when shape is 'text'
     */
    rows = 1;
    /**
     * Width of the last row when multi-line text is used (e.g. '60%')
     */
    lastRowWidth = '80%';
    isActuallyVisible = false;
    isInView = true;
    delayTimer;
    observer;
    componentDidLoad() {
        if (this.lazyAnimation) {
            this.setupObserver();
        }
    }
    setupObserver() {
        if (typeof globalThis.IntersectionObserver === 'undefined') {
            this.isInView = true;
            return;
        }
        this.observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                this.isInView = entry.isIntersecting;
            });
        }, { threshold: 0.1 });
        if (this.el) {
            this.observer.observe(this.el);
        }
    }
    handleDelayChange() {
        this.handleVisibility();
    }
    componentWillLoad() {
        this.handleVisibility();
    }
    get el() { return getElement(this); }
    handleVisibility() {
        if (this.delay <= 0) {
            if (!this.isActuallyVisible)
                this.skeletonShow?.emit();
            this.isActuallyVisible = true;
            return;
        }
        if (this.delayTimer)
            clearTimeout(this.delayTimer);
        if (this.isActuallyVisible)
            this.skeletonHide?.emit();
        this.isActuallyVisible = false;
        this.delayTimer = setTimeout(() => {
            this.isActuallyVisible = true;
            this.skeletonShow?.emit();
        }, this.delay);
    }
    disconnectedCallback() {
        if (this.delayTimer)
            clearTimeout(this.delayTimer);
        if (this.observer)
            this.observer.disconnect();
    }
    getSizeDimensions() {
        const sizeMap = {
            '3xs': { width: '12px', height: '12px' },
            '2xs': { width: '16px', height: '16px' },
            'xs': { width: '20px', height: '20px' },
            'sm': { width: '24px', height: '24px' },
            'md': { width: '32px', height: '32px' },
            'lg': { width: '48px', height: '48px' },
            'xl': { width: '64px', height: '64px' },
            '2xl': { width: '80px', height: '80px' },
            '3xl': { width: '120px', height: '120px' },
            '4xl': { width: '160px', height: '160px' },
        };
        return sizeMap[this.size] || sizeMap['md'];
    }
    getSkeletonStyles() {
        // Use size dimensions as defaults if width/height are not explicitly set
        const sizeDims = this.getSizeDimensions();
        const baseStyles = {
            width: this.width !== '100%' ? this.width : sizeDims.width,
            height: this.height !== '20px' ? this.height : sizeDims.height,
        };
        switch (this.shape) {
            case 'circle':
                baseStyles.borderRadius = '50%';
                // Ensure width and height are equal for circles
                const circleSize = Math.min(parseInt(this.width), parseInt(this.height) || parseInt(this.width));
                baseStyles.width = `${circleSize}px`;
                baseStyles.height = `${circleSize}px`;
                break;
            case 'square':
                // Ensure width and height are equal for squares
                const squareSize = Math.min(parseInt(this.width), parseInt(this.height) || parseInt(this.width));
                baseStyles.width = `${squareSize}px`;
                baseStyles.height = `${squareSize}px`;
                baseStyles.borderRadius = '0';
                break;
            case 'oval':
                baseStyles.borderRadius = '50%';
                // Oval allows different width and height (ellipse)
                break;
            case 'rounded-square':
                // Ensure width and height are equal for rounded squares
                const roundedSquareSize = Math.min(parseInt(this.width), parseInt(this.height) || parseInt(this.width));
                baseStyles.width = `${roundedSquareSize}px`;
                baseStyles.height = `${roundedSquareSize}px`;
                baseStyles.borderRadius = this.borderRadius;
                break;
            case 'rounded-rectangle':
                baseStyles.borderRadius = this.borderRadius;
                // Rounded rectangle allows different width and height
                break;
            case 'rounded':
                baseStyles.borderRadius = this.borderRadius;
                break;
            case 'text':
                baseStyles.borderRadius = '4px';
                // Text shapes use smer heights based on size
                const textSizeMap = {
                    '3xs': '10px',
                    '2xs': '12px',
                    'xs': '14px',
                    'sm': '16px',
                    'md': '18px',
                    'lg': '24px',
                    'xl': '32px',
                    '2xl': '40px',
                    '3xl': '48px',
                    '4xl': '64px',
                };
                baseStyles.height = textSizeMap[this.size] || '18px';
                break;
            case 'avatar':
                baseStyles.borderRadius = '50%';
                const avatarSize = this.getSizeDimensions();
                baseStyles.width = this.width !== '100%' ? this.width : avatarSize.width;
                baseStyles.height = this.height !== '20px' ? this.height : avatarSize.height;
                break;
            case 'button':
                baseStyles.borderRadius = '6px';
                const buttonHeightMap = {
                    'xs': '24px',
                    'sm': '28px',
                    'md': '32px',
                    'lg': '36px',
                    'xl': '40px',
                    '2xl': '44px',
                };
                baseStyles.height = this.height !== '20px' ? this.height : (buttonHeightMap[this.size] || '32px');
                break;
            case 'pill':
                baseStyles.borderRadius = '20px';
                const pillHeightMap = {
                    'xs': '20px',
                    'sm': '24px',
                    'md': '28px',
                    'lg': '32px',
                };
                baseStyles.height = this.height !== '20px' ? this.height : (pillHeightMap[this.size] || '28px');
                baseStyles.width = this.width !== '100%' ? this.width : '60px';
                break;
            case 'card':
                baseStyles.borderRadius = '8px';
                const cardHeightMap = {
                    'xs': '80px',
                    'sm': '100px',
                    'md': '120px',
                    'lg': '160px',
                    'xl': '200px',
                    '2xl': '240px',
                };
                baseStyles.minHeight = this.height !== '20px' ? this.height : (cardHeightMap[this.size] || '120px');
                break;
            case 'list-item':
                baseStyles.borderRadius = '4px';
                const listItemHeightMap = {
                    'xs': '32px',
                    'sm': '36px',
                    'md': '40px',
                    'lg': '48px',
                    'xl': '56px',
                    '2xl': '64px',
                };
                baseStyles.height = this.height !== '20px' ? this.height : (listItemHeightMap[this.size] || '40px');
                break;
            case 'image':
                baseStyles.borderRadius = '8px';
                const imageHeightMap = {
                    'xs': '100px',
                    'sm': '150px',
                    'md': '200px',
                    'lg': '250px',
                    'xl': '300px',
                    '2xl': '400px',
                };
                baseStyles.height = this.height !== '20px' ? this.height : (imageHeightMap[this.size] || '200px');
                baseStyles.display = 'flex';
                baseStyles.alignItems = 'center';
                baseStyles.justifyContent = 'center';
                break;
            case 'none':
                baseStyles.background = 'transparent';
                baseStyles.width = 'auto';
                baseStyles.height = 'auto';
                break;
            default: // rectangle
                baseStyles.borderRadius = '0';
                break;
        }
        return baseStyles;
    }
    /**
     * Resolves the actual color value based on variant or custom string
     */
    // private getBaseColor(): string {
    //   const colorMap: Record<string, string> = {
    //     primary: '#3DCD58',
    //     secondary: '#64748b',
    //     success: '#22c55e',
    //     danger: '#ef4444',
    //     warning: '#f59e0b',
    //     info: '#3bf673',
    //     neutral: 'var(--skeleton-bg, #e2e8f0)',
    //   };
    //   const resolved = colorMap[this.color] || this.color;
    //   // Handle theme-based defaults if empty or neutral
    //   if (!this.color || this.color === 'neutral') {
    //     return 'var(red, #e2e8f0)';
    //   }
    //   return resolved;
    // }
    // /**
    //  * Derives a lighter shimmer color from the base color.
    //  * Works for most hex colors; for others falls back to the theme wave variable.
    //  */
    // private getHighlightColor(base: string): string {
    //   // If user explicitly provided a highlight, use it
    //   if (this.highlightColor) return this.highlightColor;
    //   // Handle generic theme variables
    //   if (base.includes('--skeleton-bg')) {
    //     return 'var(--skeleton-wave-bg, #f3f4f6)';
    //   }
    //   // Try to parse hex and lighten
    //   const hex = base.trim();
    //   if (/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{6})$/.test(hex)) {
    //     let full = hex.slice(1);
    //     if (full.length === 3) {
    //       full = full.split('').map(c => c + c).join('');
    //     }
    //     const r = Math.min(255, parseInt(full.substring(0, 2), 16) + 30);
    //     const g = Math.min(255, parseInt(full.substring(2, 4), 16) + 30);
    //     const b = Math.min(255, parseInt(full.substring(4, 6), 16) + 30);
    //     return `rgb(${r}, ${g}, ${b})`;
    //   }
    //   // For other types of strings, fallback to the theme wave variable if available
    //   return 'var(--skeleton-wave-bg, #f3f4f6)';
    // }
    render() {
        if (!this.isActuallyVisible)
            return null;
        const countArr = Array.from({ length: Math.max(1, this.count) });
        // ARIA role logic
        const ariaRole = this.ariaRole || (typeof this.progress === 'number' ? 'progressbar' : 'status');
        const ariaProps = {
            role: ariaRole,
            'aria-busy': true,
            'aria-label': this.ariaLabel,
            'aria-live': this.ariaLive,
        };
        if (ariaRole === 'progressbar' && typeof this.progress === 'number') {
            ariaProps['aria-valuenow'] = this.progress;
            ariaProps['aria-valuemin'] = 0;
            ariaProps['aria-valuemax'] = 100;
        }
        // Dark mode/RTL
        const darkThemes = ['dark', 'blue', 'violet', 'green', 'pink'];
        const docTheme = document.documentElement.getAttribute('data-theme') || '';
        const isDarkAuto = this.dark === 'auto' && ((window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) ||
            darkThemes.some(t => document.documentElement.classList.contains('theme-' + t) || document.body.classList.contains('theme-' + t)) ||
            darkThemes.includes(docTheme) ||
            !!this.el.closest(darkThemes.map(t => `.theme-${t}, [data-theme="${t}"]`).join(', ')));
        const darkClass = this.dark === 'dark' || isDarkAuto ? 'skeleton-dark' : '';
        const rtlClass = this.rtl ? 'skeleton-rtl' : '';
        return (h("div", { class: `skeleton-replication-container skeleton-direction-${this.direction} ${darkClass} ${rtlClass}`, style: { display: 'flex', flexDirection: this.direction, gap: this.gap }, ...ariaProps }, countArr.map((_, index) => {
            // ...existing code...
            const staggerDelay = this.stagger > 0 ? `${index * this.stagger}ms` : '0ms';
            const isAnimating = this.animated && (!this.lazyAnimation || this.isInView);
            // ...existing code...
            const namedColors = ['neutral', 'primary', 'secondary', 'success', 'danger', 'warning', 'info'];
            const isCustomColor = !namedColors.includes(this.color);
            const skeletonClass = {
                'skeleton': true,
                'skeleton-animated': isAnimating,
                [`skeleton-${this.animationType}`]: isAnimating,
                [`skeleton-${this.shape}`]: true,
                [`skeleton-speed-${this.speed}`]: true,
                [`skeleton-color-${this.color}`]: !isCustomColor && this.color !== 'neutral',
                'skeleton-mask': this.mask,
                'skeleton-ghost': this.ghost && this.mask,
                'skeleton-elevated': this.elevation > 0,
                [this.customClass]: !!this.customClass,
            };
            const customStyles = {
                '--skeleton-stagger-delay': staggerDelay,
                '--skeleton-wave-angle': this.waveAngle,
                '--skeleton-wave-speed': this.waveSpeed,
                '--skeleton-gap': this.gap,
                '--skeleton-elevation': this.elevation > 0 ? `var(--ui-shadow-${this.elevation}, 0 2px 8px rgba(0,0,0,0.05))` : 'none',
            };
            // Custom hex/rgba colors: set as CSS vars so animations still work via gradients
            if (isCustomColor) {
                customStyles['--skeleton-bg'] = this.color;
                customStyles['--skeleton-wave-bg'] = this.highlightColor || this.color;
            }
            if (this.radius) {
                customStyles['--skeleton-border-radius'] = this.radius;
            }
            const isCircular = ['circle', 'avatar', 'oval'].includes(this.shape);
            const styles = {
                ...this.getSkeletonStyles(),
                ...customStyles,
                animationDelay: staggerDelay,
                ...(isCircular ? {} : (this.radius || this.borderRadius !== '4px' ? { borderRadius: this.radius || this.borderRadius } : {}))
            };
            return (h("div", { class: skeletonClass, style: styles, key: index }, this.renderContent(), typeof this.progress === 'number' && (h("div", { class: "skeleton-progress-bar", style: { width: this.progress + '%', height: '4px', background: 'var(--skeleton-wave-bg, #fff)', borderRadius: '2px', marginTop: '4px' } }))));
        }), h("slot", { name: "custom" })));
    }
    renderContent() {
        const isText = this.shape === 'text';
        const hasRows = isText && this.rows > 1;
        return [
            (this.mask || this.shape === 'none') ? h("slot", null) : null,
            hasRows && !this.mask ? (h("div", { class: "skeleton-text-rows", style: { display: 'flex', flexDirection: 'column', gap: '8px', width: '100%' } }, Array.from({ length: this.rows }).map((_, i) => {
                const isLast = i === this.rows - 1;
                const rowWidth = isLast ? this.lastRowWidth : (i > 0 && i % 2 === 0 ? '92%' : '100%');
                return (h("div", { class: "skeleton-text-row", style: {
                        height: '1em',
                        width: rowWidth,
                        backgroundColor: 'inherit',
                        borderRadius: '4px',
                        animation: 'inherit'
                    } }));
            }))) : null,
            this.shape === 'card' && !this.mask ? (h("div", { class: "skeleton-card-content" }, h("div", { class: "skeleton-card-header" }, h("div", { class: "skeleton-circle", style: { width: '32px', height: '32px', borderRadius: '50%' } }), h("div", { class: "skeleton-card-title" }, h("div", { class: "skeleton-text", style: { width: '60%', height: '16px', borderRadius: '4px' } }), h("div", { class: "skeleton-text", style: { width: '40%', height: '12px', borderRadius: '4px' } }))), h("div", { class: "skeleton-card-body" }, h("div", { class: "skeleton-text", style: { width: '100%', height: '14px', borderRadius: '4px' } }), h("div", { class: "skeleton-text", style: { width: '80%', height: '14px', borderRadius: '4px' } }), h("div", { class: "skeleton-text", style: { width: '90%', height: '14px', borderRadius: '4px' } })))) : null,
            this.shape === 'list-item' && !this.mask ? (h("div", { class: "skeleton-list-content" }, h("div", { class: "skeleton-circle", style: { width: '32px', height: '32px', borderRadius: '50%' } }), h("div", { class: "skeleton-list-text" }, h("div", { class: "skeleton-text", style: { width: '70%', height: '14px', borderRadius: '4px' } }), h("div", { class: "skeleton-text", style: { width: '50%', height: '12px', borderRadius: '4px' } })))) : null,
            this.shape === 'image' && !this.mask ? (h("div", { class: "skeleton-image-icon" }, h("ui-icon", { name: "image", library: "lucide", size: "25%", style: { opacity: '0.2' } }))) : null,
            this.template === 'profile' ? (h("div", { class: "skeleton-profile-template" }, h("ui-skeleton-loader", { shape: "circle", size: this.size, color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("div", { class: "skeleton-profile-lines" }, h("ui-skeleton-loader", { shape: "text", size: this.size, width: "120px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("ui-skeleton-loader", { shape: "text", size: "xs", width: "80px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated })))) : null,
            this.template === 'media-object' ? (h("div", { class: "skeleton-media-object-template" }, h("ui-skeleton-loader", { shape: "rounded-rectangle", width: "48px", height: "48px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("div", { class: "skeleton-media-lines", style: { flex: '1' } }, h("ui-skeleton-loader", { shape: "text", size: "md", width: "70%", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("ui-skeleton-loader", { shape: "text", size: "xs", width: "40%", color: this.color, "highlight-color": this.highlightColor, animated: this.animated, style: { marginTop: '4px' } }), h("ui-skeleton-loader", { shape: "text", size: "xs", width: "90%", color: this.color, "highlight-color": this.highlightColor, animated: this.animated, style: { marginTop: '8px' } })))) : null,
            this.template === 'feed-item' ? (h("div", { class: "skeleton-feed-template" }, h("div", { class: "feed-header", style: { display: 'flex', gap: '12px', marginBottom: '16px' } }, h("ui-skeleton-loader", { shape: "circle", size: "md", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("div", { style: { flex: '1' } }, h("ui-skeleton-loader", { shape: "text", size: "xs", width: "100px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("ui-skeleton-loader", { shape: "text", size: "xs", width: "60px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated, style: { marginTop: '4px' } }))), h("ui-skeleton-loader", { shape: "rectangle", width: "100%", height: "200px", "border-radius": "8px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("div", { class: "feed-footer", style: { marginTop: '12px', display: 'flex', gap: '8px' } }, h("ui-skeleton-loader", { shape: "button", size: "sm", width: "60px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("ui-skeleton-loader", { shape: "button", size: "sm", width: "60px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated })))) : null,
            this.template === 'table-row' ? (h("div", { class: "skeleton-table-row-template", style: { display: 'flex', gap: '20px', alignItems: 'center', width: '100%', padding: '12px 0' } }, h("ui-skeleton-loader", { shape: "rectangle", width: "20px", height: "20px", "border-radius": "4px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("ui-skeleton-loader", { shape: "text", width: "15%", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("ui-skeleton-loader", { shape: "text", width: "35%", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("ui-skeleton-loader", { shape: "text", width: "20%", color: this.color, "highlight-color": this.highlightColor, animated: this.animated }), h("ui-skeleton-loader", { shape: "pill", width: "80px", color: this.color, "highlight-color": this.highlightColor, animated: this.animated, style: { marginLeft: 'auto' } }))) : null,
        ];
    }
    static get watchers() { return {
        "delay": [{
                "handleDelayChange": 0
            }]
    }; }
};
SkeletonLoader.style = skeletonLoaderCss();

export { Pagination as ui_pagination, Rating as ui_rating, SkeletonLoader as ui_skeleton };
