import { r as registerInstance, c as createEvent, a as getElement, h } from './index-Dqu2zaH1.js';

const advancedDataTableCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host([color=primary]),.table-color-primary{--table-primary:var(--color-primary-hover, #2563eb);--table-primary-rgb:var(--color-primary-rgb)}:host([color=secondary]),.table-color-secondary{--table-primary:var(--color-primary, #64748b);--table-primary-rgb:var(--color-primary-rgb)}:host([color=success]),.table-color-success{--table-primary:var(--color-success, #10b981);--table-primary-rgb:var(--color-success-rgb)}:host([color=danger]),.table-color-danger{--table-primary:var(--color-danger, #ef4444);--table-primary-rgb:var(--color-danger-rgb)}:host([color=warning]),.table-color-warning{--table-primary:var(--color-warning, #f59e0b);--table-primary-rgb:var(--color-warning-rgb)}:host([color=info]),.table-color-info{--table-primary:var(--color-primary, #0ea5e9);--table-primary-rgb:var(--color-info-rgb)}:host{display:block;font-family:"Inter", -apple-system, sans-serif;--table-bg:var(--bg-primary, #ffffff);--table-header-bg:var(--bg-primary, #f8fafc);--table-border:var(--border-subtle, #f1f5f9);--table-text:var(--text-primary, #1e293b);--table-text-secondary:var(--text-secondary, #64748b);--table-text-secondary-rgb:100, 116, 139;--table-hover:var(--bg-primary, #f1f5f9);--table-primary:var(--color-primary-hover, #2563eb);--table-primary-rgb:var(--color-primary-rgb, 37, 99, 235);--table-selected:rgba(var(--table-primary-rgb), 0.1);--table-shadow:rgba(0, 0, 0, 0.05);--table-striped-bg:rgba(0, 0, 0, 0.02);--table-striped-bg-dark:rgba(255, 255, 255, 0.02)}.data-table-container{background:var(--table-bg);border-radius:8px;box-shadow:0 1px 3px var(--table-shadow);overflow:hidden}.data-table-container.dark-mode,:host-context(.theme-dark) .data-table-container,:host-context(.dark) .data-table-container{--table-bg:var(--bg-secondary, #0f172a);--table-header-bg:var(--bg-primary, #1e293b);--table-border:rgba(255, 255, 255, 0.05);--table-text:var(--text-primary, #f8fafc);--table-text-secondary:var(--text-secondary, #94a3b8);--table-hover:rgba(255, 255, 255, 0.03);--table-selected:rgba(var(--table-primary-rgb), 0.1);--table-shadow:rgba(0, 0, 0, 0.4)}:host-context(.theme-light) .data-table-container,:host-context(.light) .data-table-container{--table-bg:var(--bg-primary, #ffffff);--table-header-bg:var(--bg-primary, #f8fafc);--table-border:var(--border-subtle, #f1f5f9);--table-text:var(--text-primary, #1e293b);--table-text-secondary:var(--text-secondary, #64748b);--table-hover:var(--bg-primary, #f1f5f9);--table-selected:rgba(var(--table-primary-rgb), 0.1);--table-shadow:rgba(0, 0, 0, 0.05)}.advanced-table-glass{background:transparent !important;box-shadow:none !important}.advanced-table-glass .table-toolbar{background:rgba(255, 255, 255, 0.03);backdrop-filter:blur(12px) saturate(160%);border-color:rgba(255, 255, 255, 0.08)}.advanced-table-glass .data-table thead{background:rgba(255, 255, 255, 0.05);backdrop-filter:blur(8px)}.advanced-table-glass .data-table tbody tr{background:transparent}.advanced-table-glass .data-table tbody tr:hover{background:rgba(255, 255, 255, 0.04)}.advanced-table-glass.dark-mode .table-toolbar{background:rgba(0, 0, 0, 0.2)}.advanced-table-glass.dark-mode .data-table thead{background:rgba(0, 0, 0, 0.3)}.advanced-table-raised{box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);border:1px solid rgba(0, 0, 0, 0.05)}.advanced-table-raised .data-table thead{background:linear-gradient(to bottom, var(--bg-primary, #f8fafc), var(--bg-secondary, #f1f5f9))}.table-toolbar{display:flex;justify-content:space-between;align-items:center;padding:16px 20px;background:var(--table-header-bg);border-bottom:1px solid var(--table-border);gap:16px;flex-wrap:wrap;transition:all cubic-bezier(0.4, 0, 0.2, 1)}.toolbar-left,.toolbar-right{display:flex;gap:12px;align-items:center;flex-wrap:wrap}.search-box{position:relative;min-width:250px}.search-box input{width:100%;padding:8px 36px 8px 12px;border:1px solid var(--table-border);border-radius:6px;font-size:14px;background:var(--table-bg);color:var(--table-text);transition:all 0.2s}.search-box input:focus{outline:none;border-color:var(--table-primary);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.search-icon{position:absolute;right:12px;top:50%;transform:translateY(-50%);pointer-events:none;opacity:0.5}.toolbar-btn{padding:8px 16px;background:var(--table-bg);color:var(--table-text);border:1px solid var(--table-border);border-radius:6px;font-size:14px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:6px}.toolbar-btn:hover{background:var(--table-hover);border-color:var(--table-primary)}.toolbar-btn:active{transform:scale(0.98)}.table-wrapper{overflow-x:auto;overflow-y:auto;max-height:70vh;position:relative}.table-wrapper::-webkit-scrollbar{width:8px;height:8px}.table-wrapper::-webkit-scrollbar-track{background:var(--table-header-bg)}.table-wrapper::-webkit-scrollbar-thumb{background:var(--table-border);border-radius:4px}.table-wrapper::-webkit-scrollbar-thumb:hover{background:var(--table-text-secondary)}.data-table{width:100%;border-collapse:collapse;color:var(--table-text);font-size:13.5px;letter-spacing:-0.01em}.data-table.bordered{border:1px solid var(--table-border);border-radius:8px}.data-table thead{background:var(--table-header-bg);position:relative;z-index:10}.data-table.sticky-header thead{position:sticky;top:0;z-index:20}.data-table th{padding:14px 20px;text-align:left;font-weight:600;white-space:nowrap;background:var(--table-header-bg);color:var(--table-text-secondary);border-bottom:2px solid var(--table-border);user-select:none;text-transform:uppercase;font-size:11px;letter-spacing:0.05em;transition:background cubic-bezier(0.4, 0, 0.2, 1), color cubic-bezier(0.4, 0, 0.2, 1)}.data-table th.sticky-column{position:sticky;left:0;z-index:30;box-shadow:2px 0 4px var(--table-shadow)}.data-table th.sortable{cursor:pointer;transition:background 0.2s}.data-table th.sortable:hover{background:var(--table-hover)}.column-header-content{display:flex;align-items:center;justify-content:space-between;gap:8px;min-height:24px}.drag-handle{cursor:grab;padding:0 4px;margin-right:4px;color:var(--table-text-secondary);font-size:14px;line-height:1;opacity:0.6;transition:all 0.2s;user-select:none;letter-spacing:-2px}.drag-handle:hover{opacity:1;color:var(--table-primary)}.drag-handle:active{cursor:grabbing}.column-label{flex:1;cursor:pointer;user-select:none}.data-table th.sortable .column-label:hover{color:var(--table-primary)}.column-header-content span:first-child{flex:1}.sort-icon{font-size:12px;opacity:0.5;transition:opacity 0.2s}.data-table th.sorted .sort-icon{opacity:1;color:var(--table-primary)}.column-filter{margin-top:8px}.column-filter input{width:100%;padding:4px 8px;border:1px solid var(--table-border);border-radius:4px;font-size:12px;background:var(--table-bg);color:var(--table-text)}.column-filter input:focus{outline:none;border-color:var(--table-primary)}.column-group{border-bottom:1px solid var(--table-border);background:var(--table-header-bg);font-weight:700}.resize-handle{position:absolute;top:0;right:0;width:4px;height:100%;cursor:col-resize;user-select:none;background:transparent;transition:background 0.2s;z-index:10}.resize-handle:hover{background:var(--table-primary)}.resize-handle::before{content:"";position:absolute;top:0;bottom:0;left:-2px;right:-2px;}.data-table th.resizing{user-select:none;cursor:col-resize}.data-table th.resizing .resize-handle{background:var(--table-primary)}.data-table tbody tr{transition:background cubic-bezier(0.4, 0, 0.2, 1);border-bottom:1px solid var(--table-border)}.data-table.hoverable tbody tr:hover{background:var(--table-hover);box-shadow:inset 4px 0 0 var(--table-primary)}.data-table.striped tbody tr:nth-child(even){background:var(--table-striped-bg)}.data-table-container.dark-mode .data-table.striped tbody tr:nth-child(even){background:var(--table-striped-bg-dark)}.data-table tbody tr.selected{background:var(--table-selected) !important}.data-table td{padding:14px 20px;color:var(--table-text);transition:color cubic-bezier(0.4, 0, 0.2, 1)}.data-table.compact td,.data-table.compact th{padding:6px 12px}.data-table.comfortable td,.data-table.comfortable th{padding:16px 20px}.data-table td.sticky-column{position:sticky;left:0;background:var(--table-bg);z-index:15;box-shadow:2px 0 4px var(--table-shadow)}.data-table tbody tr:hover td.sticky-column{background:var(--table-hover)}.data-table tbody tr.selected td.sticky-column{background:var(--table-selected)}.select-column{width:48px;text-align:center !important;padding:8px !important}.select-column input[type=checkbox]{width:18px;height:18px;cursor:pointer;accent-color:var(--table-primary)}.actions-column{width:60px;text-align:center !important;padding:8px !important;position:relative}.row-actions-container{position:relative;display:inline-block}.row-actions-trigger{background:transparent;border:none;cursor:pointer;padding:4px 8px;border-radius:4px;color:var(--table-text-secondary);font-size:18px;line-height:1;transition:all 0.2s ease;display:flex;align-items:center;justify-content:center}.row-actions-trigger:hover{background:var(--table-hover);color:var(--table-text)}.row-actions-trigger:active{background:var(--table-border)}.action-dots{font-weight:bold;letter-spacing:-2px}.row-actions-menu{position:absolute;top:100%;right:0;background:var(--table-bg);border:1px solid var(--table-border);border-radius:6px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);min-width:140px;z-index:1000;margin-top:4px;overflow:hidden;animation:fadeInMenu 0.15s ease-out}@keyframes fadeInMenu{from{opacity:0;transform:translateY(-8px)}to{opacity:1;transform:translateY(0)}}.row-action-item{display:flex;align-items:center;gap:8px;width:100%;padding:10px 14px;background:transparent;border:none;text-align:left;cursor:pointer;color:var(--table-text);font-size:14px;transition:background 0.15s ease;border-bottom:1px solid var(--table-border)}.row-action-item:last-child{border-bottom:none}.row-action-item:hover{background:var(--table-hover)}.row-action-item:active{background:var(--table-border)}.action-icon{font-size:16px;width:20px;display:flex;align-items:center;justify-content:center}.action-label{flex:1}.grouping-selector{display:flex;align-items:center;gap:8px;margin-left:16px}.grouping-selector label{font-size:14px;font-weight:500;color:var(--table-text);white-space:nowrap}.grouping-selector select{padding:8px 12px;border:1px solid var(--table-border);border-radius:6px;font-size:14px;background:var(--table-bg);color:var(--table-text);cursor:pointer;min-width:150px;transition:all 0.2s}.grouping-selector select:focus{outline:none;border-color:var(--table-primary);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.grouping-selector select:hover{border-color:var(--table-primary)}.group-header-row{background:var(--table-header-bg);border-top:2px solid var(--table-border);border-bottom:2px solid var(--table-border);transition:background 0.2s}.group-header-row:hover{background:var(--table-hover)}.group-header-cell{cursor:pointer;user-select:none;font-weight:600;padding:12px 16px !important;outline:none}.group-header-cell:focus{outline:2px solid var(--table-primary);outline-offset:-2px}.group-header-content{display:flex;align-items:center;gap:10px}.group-expand-icon{display:inline-flex;align-items:center;justify-content:center;width:20px;height:20px;font-size:12px;color:var(--table-primary);transition:transform 0.2s ease}.group-header-row[aria-expanded=true] .group-expand-icon{transform:rotate(0deg)}.group-header-row[aria-expanded=false] .group-expand-icon{transform:rotate(-90deg)}.group-label{font-size:15px;color:var(--table-text);font-weight:600}.group-count{font-size:13px;color:var(--table-text-secondary);font-weight:normal;margin-left:4px}.group-data-row{animation:fadeIn 0.2s ease-in-out}@keyframes fadeIn{from{opacity:0}to{opacity:1}}.group-data-row td{padding-left:48px !important;border-left:3px solid transparent;transition:all 0.2s}.group-data-row td:first-child{border-left:3px solid var(--table-border)}.group-data-row.selected{background:var(--table-selected)}.group-data-row.selected td:first-child{border-left-color:var(--table-primary)}.group-data-row:hover{background:var(--table-hover)}.group-data-row:hover td:first-child{border-left-color:var(--table-primary)}.editable-cell{cursor:pointer;padding:4px;border-radius:4px;transition:background 0.15s}.editable-cell:hover{background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.data-table td input,.data-table td select{width:100%;padding:6px 8px;border:2px solid var(--table-primary);border-radius:4px;font-size:14px;background:var(--table-bg);color:var(--table-text)}.data-table td input:focus,.data-table td select:focus{outline:none;box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.loading-cell,.empty-cell{text-align:center !important;padding:48px 16px !important;color:var(--table-text-secondary)}.loading-cell{display:flex;flex-direction:column;align-items:center;gap:12px}.loading-spinner{width:48px;height:48px;border:3px solid rgba(var(--table-primary-rgb), 0.1);border-top-color:var(--table-primary);border-radius:50%;animation:spin 0.8s cubic-bezier(0.4, 0, 0.2, 1) infinite;box-shadow:0 0 20px rgba(var(--table-primary-rgb), 0.15)}.skeleton-row td{padding:14px 20px}.skeleton-content,.skeleton-checkbox{height:16px;width:100%;background:linear-gradient(90deg, rgba(var(--table-text-secondary-rgb), 0.05) 25%, rgba(var(--table-text-secondary-rgb), 0.15) 37%, rgba(var(--table-text-secondary-rgb), 0.05) 63%);background-size:400% 100%;animation:skeleton-shimmer 2s cubic-bezier(0.4, 0, 0.2, 1) infinite;border-radius:4px}.skeleton-checkbox{width:18px;height:18px;margin:0 auto}@keyframes skeleton-shimmer{0%{background-position:100% 50%}100%{background-position:0% 50%}}.pagination-container{display:flex;justify-content:space-between;align-items:center;padding:16px;background:var(--table-header-bg);border-top:1px solid var(--table-border);gap:16px;flex-wrap:wrap}.pagination-info{color:var(--table-text-secondary);font-size:14px}.pagination-controls{display:flex;gap:4px;align-items:center}.page-btn{min-width:36px;height:36px;padding:8px 12px;background:var(--table-bg);color:var(--table-text);border:1px solid var(--table-border);border-radius:6px;font-size:14px;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;justify-content:center}.page-btn:hover:not(:disabled){background:var(--table-hover);border-color:var(--table-primary)}.page-btn:disabled{opacity:0.4;cursor:not-allowed}.page-btn.active{background:var(--table-primary);color:var(--text-standard, #ffffff);border-color:var(--table-primary)}.page-size-selector{display:flex;align-items:center;gap:8px}.page-size-selector label{display:flex;align-items:center;gap:8px;color:var(--table-text-secondary);font-size:14px}.page-size-selector select{padding:6px 32px 6px 12px;border:1px solid var(--table-border);border-radius:6px;background:var(--table-bg);color:var(--table-text);font-size:14px;cursor:pointer;appearance:none;background-image:url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='12' height='12' viewBox='0 0 12 12'%3E%3Cpath fill='%236b7280' d='M6 9L1 4h10z'/%3E%3C/svg%3E");background-repeat:no-repeat;background-position:right 8px center}.page-size-selector select:focus{outline:none;border-color:var(--table-primary)}.column-settings-dialog,.export-dialog{position:fixed;top:0;left:0;right:0;bottom:0;z-index:1000;display:flex;align-items:center;justify-content:center}.dialog-overlay{position:absolute;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);backdrop-filter:blur(4px)}.dialog-content{position:relative;background:var(--table-bg);border-radius:12px;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);max-width:500px;width:90%;max-height:80vh;display:flex;flex-direction:column;animation:dialogSlideIn 0.2s ease-out}@keyframes dialogSlideIn{from{opacity:0;transform:scale(0.95) translateY(-20px)}to{opacity:1;transform:scale(1) translateY(0)}}.dialog-header{display:flex;justify-content:space-between;align-items:center;padding:20px;border-bottom:1px solid var(--table-border)}.dialog-header h3{margin:0;font-size:18px;font-weight:600;color:var(--table-text)}.close-btn{width:32px;height:32px;padding:0;background:transparent;border:none;color:var(--table-text-secondary);font-size:24px;cursor:pointer;border-radius:6px;transition:all 0.2s;display:flex;align-items:center;justify-content:center}.close-btn:hover{background:var(--table-hover);color:var(--table-text)}.dialog-body{padding:20px;overflow-y:auto;flex:1}.dialog-footer{padding:16px 20px;border-top:1px solid var(--table-border);display:flex;justify-content:flex-end;gap:12px}.dialog-footer button{padding:10px 20px;background:var(--table-primary);color:var(--text-standard, #ffffff);border:none;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.2s}.dialog-footer button:hover{background:var(--table-primary-hover)}.column-list{display:flex;flex-direction:column;gap:8px}.column-item{display:flex;align-items:center;gap:12px;padding:12px;background:var(--table-header-bg);border-radius:6px;cursor:pointer;transition:background 0.2s}.column-item:hover{background:var(--table-hover)}.column-item input[type=checkbox]{width:18px;height:18px;cursor:pointer;accent-color:var(--table-primary)}.column-item span{flex:1;color:var(--table-text);font-size:14px}.export-options{display:flex;flex-direction:column;gap:12px}.export-btn{padding:16px;background:var(--table-bg);color:var(--table-text);border:2px solid var(--table-border);border-radius:8px;font-size:15px;font-weight:500;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:12px}.export-btn:hover{background:var(--table-hover);border-color:var(--table-primary);transform:translateX(4px)}@media (max-width: 768px){.table-toolbar{flex-direction:column;align-items:stretch}.toolbar-left,.toolbar-right{width:100%;justify-content:space-between}.search-box{min-width:100%}.pagination-container{flex-direction:column;align-items:stretch;gap:12px}.pagination-info,.pagination-controls,.page-size-selector{justify-content:center}.table-wrapper{max-height:60vh}.data-table{font-size:13px}.data-table th,.data-table td{padding:8px 12px}}@media (max-width: 480px){.data-table{font-size:12px}.data-table th,.data-table td{padding:6px 8px}.toolbar-btn{font-size:13px;padding:6px 12px}.pagination-controls .page-btn{min-width:32px;height:32px;padding:4px 8px;font-size:13px}}.data-table:focus-within{outline:2px solid var(--table-primary);outline-offset:2px}button:focus-visible,input:focus-visible,select:focus-visible{outline:2px solid var(--table-primary);outline-offset:2px}.data-table-container *{box-sizing:border-box}.data-table tbody tr{contain:layout style}.data-table th[draggable=true]{cursor:move}.data-table th[draggable=true]:active{opacity:0.5}.skeleton-row{animation:pulse 1.5s ease-in-out infinite}.skeleton-cell{padding:12px 16px}.skeleton-content{height:16px;background:linear-gradient(90deg, var(--table-border) 25%, var(--table-hover) 50%, var(--table-border) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:4px}.skeleton-checkbox{width:16px;height:16px;background:linear-gradient(90deg, var(--table-border) 25%, var(--table-hover) 50%, var(--table-border) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:3px;margin:0 auto}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}@keyframes pulse{0%,100%{opacity:1}50%{opacity:0.7}}.cell-input{width:100%;padding:6px 8px;border:1px solid var(--table-border);border-radius:4px;background:var(--table-bg);color:var(--table-text);font-size:14px}.cell-input:focus{outline:none;border-color:var(--table-primary);box-shadow:0 0 0 2px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.cell-select{width:100%;padding:6px 8px;border:1px solid var(--table-border);border-radius:4px;background:var(--table-bg);color:var(--table-text);font-size:14px;cursor:pointer}.cell-radio-group{display:flex;flex-direction:column;gap:6px}.radio-label{display:flex;align-items:center;gap:6px;cursor:pointer;font-size:14px}.radio-label input[type=radio]{cursor:pointer}.cell-checkbox{width:18px;height:18px;cursor:pointer}.cell-switch{position:relative;display:inline-block;width:44px;height:24px}.cell-switch input{opacity:0;width:0;height:0}.switch-slider{position:absolute;cursor:pointer;top:0;left:0;right:0;bottom:0;background-color:var(--bg-secondary, #ccc);transition:0.3s;border-radius:24px}.switch-slider:before{position:absolute;content:"";height:18px;width:18px;left:3px;bottom:3px;background-color:var(--bg-primary, #ffffff);transition:0.3s;border-radius:50%}.cell-switch input:checked+.switch-slider{background-color:var(--table-primary)}.cell-switch input:checked+.switch-slider:before{transform:translateX(20px)}.cell-rating{display:flex;gap:4px;font-size:18px}.cell-rating .star{cursor:pointer;color:var(--bg-secondary, #d1d5db);transition:color 0.2s}.cell-rating .star.filled{color:var(--color-danger, #fbbf24)}.cell-rating .star:hover{color:var(--color-danger, #fcd34d)}.cell-rating-display{display:flex;gap:2px;font-size:16px}.cell-rating-display .star{color:var(--bg-secondary, #d1d5db)}.cell-rating-display .star.filled{color:var(--color-danger, #fbbf24)}.cell-boolean{font-size:18px;font-weight:bold}.cell-switch-display{display:inline-block}.switch-indicator{display:inline-block;padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;background:var(--bg-primary, #e5e7eb);color:var(--text-muted, #6b7280);text-transform:uppercase}.switch-indicator.active{background:var(--table-primary);color:var(--text-standard, #ffffff)}.cell-image{display:block;object-fit:cover}.cell-password{letter-spacing:2px;font-family:monospace}.cell-link{color:var(--table-primary);text-decoration:none;transition:color 0.2s}.cell-link:hover{color:var(--table-primary-hover);text-decoration:underline}.column-group{background:var(--table-header-bg);font-weight:600;border-bottom:2px solid var(--table-border)}.data-table thead tr:has(.column-group)+tr th{border-top:1px solid var(--table-border)}.filter-panel{position:fixed;top:50%;left:50%;transform:translate(-50%, -50%);background:var(--table-bg);border:1px solid var(--table-border);border-radius:12px;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.2), 0 10px 10px -5px rgba(0, 0, 0, 0.1);min-width:600px;max-width:90vw;max-height:80vh;z-index:1000;display:flex;flex-direction:column;animation:slideIn 0.2s ease-out}@keyframes slideIn{from{opacity:0;transform:translate(-50%, -45%)}to{opacity:1;transform:translate(-50%, -50%)}}.filter-panel::before{content:"";position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);backdrop-filter:blur(4px);z-index:-1}.filter-panel-header{display:flex;justify-content:space-between;align-items:center;padding:20px 24px;border-bottom:1px solid var(--table-border)}.filter-panel-header h4{margin:0;font-size:18px;font-weight:600;color:var(--table-text);display:flex;align-items:center;gap:8px}.filter-panel-header .close-btn{background:transparent;border:none;font-size:28px;line-height:1;cursor:pointer;color:var(--table-text-secondary);padding:0;width:32px;height:32px;display:flex;align-items:center;justify-content:center;border-radius:6px;transition:all 0.2s}.filter-panel-header .close-btn:hover{background:var(--table-hover);color:var(--table-text)}.filter-panel-body{padding:24px;overflow-y:auto;flex:1}.filter-builder{margin-bottom:24px}.filter-row{display:grid;grid-template-columns:1fr 1fr 1.5fr auto;gap:12px;align-items:center}.filter-field-select,.filter-operator-select{padding:10px 12px;border:1px solid var(--table-border);border-radius:6px;font-size:14px;background:var(--table-bg);color:var(--table-text);cursor:pointer;transition:all 0.2s}.filter-field-select:focus,.filter-operator-select:focus{outline:none;border-color:var(--table-primary);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.filter-field-select:hover,.filter-operator-select:hover{border-color:var(--table-primary)}.filter-field-select:disabled,.filter-operator-select:disabled{opacity:0.5;cursor:not-allowed}.filter-value-input{padding:10px 12px;border:1px solid var(--table-border);border-radius:6px;font-size:14px;background:var(--table-bg);color:var(--table-text);transition:all 0.2s}.filter-value-input:focus{outline:none;border-color:var(--table-primary);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.filter-value-input:disabled{opacity:0.5;cursor:not-allowed;background:var(--table-header-bg)}.add-filter-btn{padding:10px 20px;background:var(--table-primary);color:var(--text-standard, #ffffff);border:none;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;transition:all 0.2s;white-space:nowrap}.add-filter-btn:hover:not(:disabled){background:var(--table-primary-hover);transform:translateY(-1px);box-shadow:0 4px 6px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.add-filter-btn:active:not(:disabled){transform:translateY(0)}.add-filter-btn:disabled{opacity:0.5;cursor:not-allowed}.active-filters{border-top:1px solid var(--table-border);padding-top:20px}.active-filters-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px}.active-filters-header span{font-size:14px;font-weight:600;color:var(--table-text)}.clear-all-btn{padding:6px 12px;background:transparent;color:var(--color-danger, #ef4444);border:1px solid var(--color-danger, #ef4444);border-radius:6px;font-size:13px;cursor:pointer;transition:all 0.2s}.clear-all-btn:hover{background:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff)}.filter-chips{display:flex;flex-wrap:wrap;gap:8px}.filter-chip{display:inline-flex;align-items:center;gap:8px;padding:8px 12px;background:var(--table-selected);border:1px solid var(--table-primary);border-radius:20px;font-size:13px;color:var(--table-text);animation:chipSlideIn 0.2s ease-out}@keyframes chipSlideIn{from{opacity:0;transform:translateX(-10px)}to{opacity:1;transform:translateX(0)}}.filter-chip-label{display:flex;align-items:center;gap:4px}.filter-chip-label strong{color:var(--table-primary)}.filter-chip-remove{background:transparent;border:none;color:var(--table-text-secondary);font-size:20px;line-height:1;cursor:pointer;padding:0;width:20px;height:20px;display:flex;align-items:center;justify-content:center;border-radius:50%;transition:all 0.2s}.filter-chip-remove:hover{background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.1);color:var(--color-danger, #ef4444)}.no-filters{text-align:center;padding:32px;color:var(--table-text-secondary);font-size:14px}.pinned-row-top{position:sticky !important;top:0;z-index:25;background:var(--table-bg);box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.pinned-row-bottom{position:sticky !important;bottom:0;z-index:25;background:var(--table-bg);box-shadow:0 -2px 4px rgba(0, 0, 0, 0.1)}.pinned-row-top::before,.pinned-row-bottom::before{content:"";position:absolute;left:0;right:0;height:3px;background:linear-gradient(90deg, var(--color-primary, #10b981), var(--color-primary, #8b5cf6));opacity:0.6}.pinned-row-top::before{top:0}.pinned-row-bottom::before{bottom:0}.pinned-row-top:hover,.pinned-row-bottom:hover{background:var(--table-hover)}.sort-icon.multi-sort{position:relative;display:inline-flex;align-items:center;gap:4px}.sort-order-badge{display:inline-flex;align-items:center;justify-content:center;min-width:18px;height:18px;padding:0 4px;background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff);border-radius:50%;font-size:11px;font-weight:600;line-height:1}.aggregation-footer{background:var(--bg-primary, #f9fafb);border-top:2px solid var(--border-default, #e5e7eb);font-weight:600}.aggregation-cell{padding:12px}.aggregation-values{display:flex;gap:16px;flex-wrap:wrap}.agg-item{display:flex;gap:6px;align-items:center}.agg-label{color:var(--text-muted, #6b7280);font-size:12px;text-transform:uppercase}.agg-value{color:var(--text-primary, #111827);font-size:14px;font-weight:700}.row-details-row{background:var(--bg-primary, #f9fafb)}.row-details-panel{padding:20px;border:1px solid var(--border-default, #e5e7eb);border-radius:8px;margin:8px}.details-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:16px;padding-bottom:12px;border-bottom:2px solid var(--border-default, #e5e7eb)}.details-header h4{margin:0;color:var(--text-primary, #111827);font-size:16px}.close-details-btn{background:none;border:none;font-size:24px;color:var(--text-muted, #6b7280);cursor:pointer;padding:0;width:30px;height:30px;display:flex;align-items:center;justify-content:center;border-radius:4px}.close-details-btn:hover{background:var(--bg-primary, #e5e7eb);color:var(--text-primary, #111827)}.details-content{display:grid;grid-template-columns:repeat(auto-fill, minmax(250px, 1fr));gap:12px}.detail-item{display:flex;gap:8px;padding:8px;background:var(--bg-primary, #ffffff);border-radius:4px;border:1px solid var(--border-default, #e5e7eb)}.detail-label{color:var(--text-muted, #6b7280);font-size:13px;min-width:100px}.detail-value{color:var(--text-primary, #111827);font-size:13px;word-break:break-word}.keyboard-shortcuts-modal{position:fixed;top:0;left:0;right:0;bottom:0;background:rgba(0, 0, 0, 0.5);display:flex;align-items:center;justify-content:center;z-index:10000}.keyboard-shortcuts-modal .modal-content{background:var(--bg-primary, #ffffff);border-radius:12px;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1);max-width:500px;width:90%;max-height:80vh;overflow:auto}.keyboard-shortcuts-modal .modal-header{display:flex;justify-content:space-between;align-items:center;padding:20px;border-bottom:1px solid var(--border-default, #e5e7eb)}.keyboard-shortcuts-modal .modal-header h3{margin:0;font-size:18px;color:var(--text-primary, #111827)}.keyboard-shortcuts-modal .modal-header button{background:none;border:none;font-size:24px;color:var(--text-muted, #6b7280);cursor:pointer;padding:0;width:30px;height:30px}.keyboard-shortcuts-modal .modal-body{padding:20px}.shortcuts-table{width:100%;border-collapse:collapse}.shortcuts-table tr{border-bottom:1px solid var(--border-default, #e5e7eb)}.shortcuts-table tr:last-child{border-bottom:none}.shortcuts-table td{padding:12px 8px}.shortcut-key{font-family:"Courier New", monospace;background:var(--bg-secondary, #f3f4f6);padding:4px 8px;border-radius:4px;font-size:13px;font-weight:600;color:var(--text-secondary, #374151);white-space:nowrap}.shortcut-desc{color:var(--text-muted, #6b7280);font-size:14px}.validation-error-tooltip{position:absolute;bottom:100%;left:0;background:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff);padding:6px 10px;border-radius:4px;font-size:12px;white-space:nowrap;z-index:100;margin-bottom:4px;display:flex;align-items:center;gap:6px;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1)}.validation-error-tooltip::after{content:"";position:absolute;top:100%;left:10px;border:5px solid transparent;border-top-color:var(--color-danger, #ef4444)}.error-icon{font-size:14px}.error-message{font-weight:500}td.has-validation-error{position:relative;border:2px solid var(--color-danger, #ef4444) !important;background:var(--bg-primary, #fef2f2)}.virtual-scroll-container{overflow-y:auto;position:relative;will-change:transform}.virtual-scroll-content{position:relative}.auto-size-btn{padding:4px 8px;font-size:12px;background:var(--bg-secondary, #f3f4f6);border:1px solid var(--border-strong, #d1d5db);border-radius:4px;cursor:pointer;color:var(--text-secondary, #374151)}.auto-size-btn:hover{background:var(--bg-primary, #e5e7eb)}.premium-badge{display:inline-flex;align-items:center;gap:4px;padding:2px 6px;background:linear-gradient(135deg, var(--color-primary, #667eea) 0%, var(--color-primary, #764ba2) 100%);color:var(--text-standard, #ffffff);border-radius:4px;font-size:10px;font-weight:600;text-transform:uppercase;letter-spacing:0.5px}@media (prefers-color-scheme: dark){.aggregation-footer{background:var(--bg-primary, #1f2937);border-top-color:var(--border-default, #374151)}.row-details-panel{background:var(--bg-primary, #1f2937);border-color:var(--border-default, #374151)}.keyboard-shortcuts-modal .modal-content{background:var(--bg-primary, #1f2937);color:var(--text-standard, #f3f4f6)}.detail-item{background:var(--bg-secondary, #111827);border-color:var(--border-default, #374151)}}.cell-editor{width:100%;padding:6px 8px;border:2px solid var(--color-primary, #10b981);border-radius:4px;font-size:14px;outline:none}.date-editor,.datetime-editor{cursor:pointer}.number-editor{text-align:right}.select-editor{cursor:pointer;background:var(--bg-primary, #ffffff)}.checkbox-editor{width:20px;height:20px;cursor:pointer}.formatted-currency{color:var(--color-success-hover, #059669);font-weight:600}.formatted-percentage{color:var(--color-primary, #7c3aed);font-weight:600}.formatted-date{color:var(--color-primary, #0284c7)}.cell-range-selected{background:var(--bg-primary, #dbeafe) !important;border:2px solid var(--color-primary, #10b981) !important}.range-selection-anchor{background:var(--color-primary, #bfdbfe) !important;border:2px dashed var(--color-primary, #10b981) !important}.copy-indicator{position:absolute;top:50%;left:50%;transform:translate(-50%, -50%);background:var(--color-success, #10b981);color:var(--text-standard, #ffffff);padding:8px 16px;border-radius:8px;font-size:14px;font-weight:600;z-index:1000;animation:fadeInOut 1s ease-in-out}@keyframes fadeInOut{0%,100%{opacity:0}50%{opacity:1}}.color-scale-cell{position:relative;color:var(--text-primary, #111827);font-weight:600}.data-bar-cell{position:relative;padding:8px}.data-bar-value{position:relative;z-index:1;font-weight:600}.icon-set{display:inline-flex;align-items:center;gap:6px}.icon-set-icon{font-size:16px}.icon-positive{color:var(--color-success, #10b981)}.icon-neutral{color:var(--color-warning, #f59e0b)}.icon-negative{color:var(--color-danger, #ef4444)}.cell-with-formatting{transition:all 0.2s ease}.cell-with-formatting:hover{transform:scale(1.02);box-shadow:0 2px 8px rgba(0, 0, 0, 0.1)}.cell-progress-bar{width:100%;height:24px;background:var(--bg-primary, #e5e7eb);border-radius:12px;overflow:hidden;position:relative}.cell-progress-fill{height:100%;background:linear-gradient(90deg, var(--color-primary, #10b981) 0%, var(--color-primary, #1d4ed8) 100%);transition:width 0.3s ease;display:flex;align-items:center;justify-content:center;color:var(--text-standard, #ffffff);font-size:12px;font-weight:600}.cell-editor:focus{border-color:var(--color-primary-hover, #2563eb);box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.cell-editor-error{border-color:var(--color-danger, #ef4444)}.cell-editor-error:focus{box-shadow:0 0 0 3px rgba(var(--color-danger-rgb, 239, 68, 68), 0.1)}.bulk-actions-toolbar{position:sticky;top:0;z-index:100;background:var(--bg-secondary, #f3f4f6);border-bottom:2px solid var(--border-default, #e5e7eb);padding:12px 16px;display:flex;align-items:center;gap:12px;animation:slideDown 0.3s ease}@keyframes slideDown{from{transform:translateY(-100%);opacity:0}to{transform:translateY(0);opacity:1}}.bulk-actions-count{font-weight:600;color:var(--text-secondary, #374151)}.bulk-action-btn{padding:6px 12px;background:var(--bg-primary, #ffffff);border:1px solid var(--border-strong, #d1d5db);border-radius:6px;font-size:14px;cursor:pointer;transition:all 0.2s}.bulk-action-btn:hover{background:var(--bg-primary, #f9fafb);border-color:var(--color-primary, #9ca3af)}.bulk-action-btn.primary{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff);border-color:var(--color-primary, #10b981)}.bulk-action-btn.primary:hover{background:var(--color-primary-hover, #2563eb)}.bulk-action-btn.danger{background:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff);border-color:var(--color-danger, #ef4444)}.bulk-action-btn.danger:hover{background:var(--color-danger-hover, #dc2626)}@media print{.data-table-container{box-shadow:none !important;border:none !important;overflow:visible !important;max-height:none !important}.table-wrapper{max-height:none !important;overflow:visible !important}.table-toolbar,.pagination-container,.filter-panel,.column-settings-dialog,.export-dialog,.keyboard-shortcuts-modal,.actions-column,.select-column,.row-details-toggle-cell,.bulk-actions-bar{display:none !important}.data-table{width:100% !important;border-collapse:collapse !important}.data-table th,.data-table td{color:var(--text-primary, #000) !important;border:1px solid var(--border-default, #ccc) !important;padding:8px !important}tr{break-inside:avoid;page-break-inside:avoid}}.context-menu{position:fixed;background:var(--table-bg);border:1px solid var(--table-border);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1);border-radius:6px;padding:4px;min-width:160px;z-index:9999}.context-menu-item{padding:8px 12px;cursor:pointer;display:flex;align-items:center;gap:8px;color:var(--table-text);font-size:14px;border-radius:4px}.context-menu-item:hover{background:var(--table-hover)}.mobile-cards-view{display:flex;flex-direction:column;gap:12px;padding:12px}.mobile-card{background:var(--table-bg);border:1px solid var(--table-border);border-radius:8px;padding:12px}.mobile-card .card-header{display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;padding-bottom:8px;border-bottom:1px solid var(--table-border);font-weight:600}.mobile-card .card-field{display:flex;justify-content:space-between;margin-bottom:8px;font-size:14px}.mobile-card .card-field label{color:var(--table-text-secondary);font-weight:500}.data-table td.focused-cell{box-shadow:inset 0 0 0 2px var(--table-primary) !important;background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.05);z-index:10}.data-table td:focus{outline:none}.data-table th.pinned-left,.data-table td.pinned-left{position:sticky;left:0;z-index:25;box-shadow:2px 0 4px var(--table-shadow)}.data-table th.pinned-right,.data-table td.pinned-right{position:sticky;right:0;z-index:25;box-shadow:-2px 0 4px var(--table-shadow)}.header-menu-trigger{background:transparent;border:none;cursor:pointer;padding:4px;border-radius:4px;color:var(--table-text-secondary);opacity:0;transition:all 0.2s;font-size:16px;line-height:1}.data-table th:hover .header-menu-trigger{opacity:1}.header-menu-trigger:hover{background:var(--table-hover);color:var(--table-text)}.context-menu.header-context-menu{min-width:200px}.context-menu-header{padding:8px 12px;font-size:12px;font-weight:700;text-transform:uppercase;color:var(--table-text-secondary);border-bottom:1px solid var(--table-border);margin-bottom:4px}.context-menu ul{list-style:none;padding:0;margin:0}.context-menu li{padding:8px 12px;cursor:pointer;font-size:14px;transition:background 0.2s;position:relative}.context-menu li:hover{background:var(--table-hover)}.context-menu li.divider{height:1px;background:var(--table-border);padding:0;margin:4px 0;cursor:default}.context-menu li.has-submenu::after{content:"";font-size:10px;position:absolute;right:12px;opacity:0.5}.context-menu .submenu{position:absolute;left:100%;top:0;display:none;background:var(--table-bg);border:1px solid var(--table-border);border-radius:6px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.15);min-width:140px;padding:4px}.context-menu li.has-submenu:hover>.submenu{display:block}.sr-announcer{position:absolute;left:-10000px;width:1px;height:1px;overflow:hidden}.data-table th.pinned-left,.data-table td.pinned-left{background:linear-gradient(to right, rgba(var(--color-primary-rgb, 59, 130, 246), 0.05), transparent);border-right:2px solid rgba(var(--color-primary-rgb, 59, 130, 246), 0.3)}.data-table th.pinned-right,.data-table td.pinned-right{background:linear-gradient(to left, rgba(var(--color-primary-rgb, 59, 130, 246), 0.05), transparent);border-left:2px solid rgba(var(--color-primary-rgb, 59, 130, 246), 0.3)}.data-table th.pinned-left::before,.data-table th.pinned-right::before{content:"";font-size:10px;opacity:0.6;margin-right:4px}.data-table th.pinned-left:hover,.data-table th.pinned-right:hover{background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.pin-indicator{font-size:12px;margin-right:4px;opacity:0.8;display:inline-block;animation:pinPulse 2s ease-in-out infinite}@keyframes pinPulse{0%,100%{opacity:0.8}50%{opacity:1}}.data-table th.pinned-left,.data-table td.pinned-left{background:linear-gradient(to right, rgba(var(--color-primary-rgb, 59, 130, 246), 0.05), transparent), var(--table-bg) !important;background-blend-mode:normal}.data-table th.pinned-right,.data-table td.pinned-right{background:linear-gradient(to left, rgba(var(--color-primary-rgb, 59, 130, 246), 0.05), transparent), var(--table-bg) !important;background-blend-mode:normal}.data-table th.pinned-left{background:linear-gradient(to right, rgba(var(--color-primary-rgb, 59, 130, 246), 0.05), transparent), var(--table-header-bg) !important}.data-table td.pinned-left{background:linear-gradient(to right, rgba(var(--color-primary-rgb, 59, 130, 246), 0.05), transparent), var(--table-bg) !important}.data-table th.pinned-right{background:linear-gradient(to left, rgba(var(--color-primary-rgb, 59, 130, 246), 0.05), transparent), var(--table-header-bg) !important}.data-table td.pinned-right{background:linear-gradient(to left, rgba(var(--color-primary-rgb, 59, 130, 246), 0.05), transparent), var(--table-bg) !important}.data-table-footer{background-color:var(--table-header-bg, #f8fafc);border-top:2px solid var(--border-subtle, #e2e8f0);font-weight:600;z-index:2}.data-table-container tfoot tr{position:sticky;bottom:0;background-color:var(--table-header-bg, #f8fafc);z-index:3;box-shadow:0 -1px 2px rgba(0, 0, 0, 0.05)}.data-table-footer td{padding:12px 16px;border-bottom:1px solid var(--border-subtle, #e2e8f0);background-color:inherit;vertical-align:top}.agg-item{display:flex;flex-direction:column;font-size:0.75rem;margin-bottom:4px}.agg-label{color:var(--text-muted, #64748b);text-transform:uppercase;font-size:0.65rem;margin-bottom:1px}.agg-value{color:var(--text-primary, #0f172a);font-weight:700;font-size:0.85rem}`;

const AdvancedDataTable = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.rowSelect = createEvent(this, "rowSelect");
        this.rowDeselect = createEvent(this, "rowDeselect");
        this.cellEdit = createEvent(this, "cellEdit");
        this.cellEditStart = createEvent(this, "cellEditStart");
        this.cellEditStop = createEvent(this, "cellEditStop");
        this.rowEditStart = createEvent(this, "rowEditStart");
        this.rowEditStop = createEvent(this, "rowEditStop");
        this.sortChange = createEvent(this, "sortChange");
        this.filterChange = createEvent(this, "filterChange");
        this.pageChange = createEvent(this, "pageChange");
        this.searchChange = createEvent(this, "searchChange");
        this.columnOrderChange = createEvent(this, "columnOrderChange");
        this.columnVisibilityChange = createEvent(this, "columnVisibilityChange");
        this.columnPin = createEvent(this, "columnPin");
        this.rowPin = createEvent(this, "rowPin");
        this.rowReorderEvent = createEvent(this, "rowReorderEvent");
        this.dataExport = createEvent(this, "dataExport");
        this.groupToggle = createEvent(this, "groupToggle");
        this.groupByChange = createEvent(this, "groupByChange");
        this.rowEdit = createEvent(this, "rowEdit");
        this.rowDelete = createEvent(this, "rowDelete");
        this.rowAction = createEvent(this, "rowAction");
        this.lazyLoadMore = createEvent(this, "lazyLoadMore");
    }
    get el() { return getElement(this); }
    /**
     * Table configuration
     */
    config = {
        columns: [],
        data: [],
        selectable: false,
        pagination: true,
        pageSize: 10,
    };
    /**
     * Columns definition
     */
    columns = [];
    /**
     * Table data
     */
    data = [];
    /**
     * Enable row selection
     */
    selectable = false;
    /**
     * Enable multiple row selection
     */
    multiSelect = true;
    /**
     * Enable inline editing
     */
    editable = false;
    /**
     * Enable sticky header
     */
    stickyHeader = true;
    /**
     * Enable pagination
     */
    pagination = true;
    /**
     * Page size
     */
    pageSize = 10;
    /**
     * Page size options
     */
    pageSizeOptions = [5, 10, 25, 50, 100];
    /**
     * Pagination theme
     */
    paginationTheme = 'default';
    /**
     * Pagination shape
     */
    paginationShape = 'default';
    /**
     * Enable keyboard navigation for pagination
     */
    paginationKeyboardNav = true;
    /**
     * Enable quick jump buttons
     */
    paginationQuickJump = false;
    /**
     * Quick jump step size
     */
    paginationQuickJumpStep = 5;
    /**
     * Show progress indicator
     */
    paginationShowProgress = false;
    /**
     * Sticky pagination
     */
    paginationSticky = false;
    /**
     * Sticky position
     */
    paginationStickyPosition = 'bottom';
    /**
     * Enable page transitions
     */
    paginationTransitions = true;
    /**
     * Sync pagination with URL
     */
    paginationUrlSync = false;
    /**
     * URL parameter name
     */
    paginationUrlParam = 'page';
    /**
     * Persist page to localStorage
     */
    paginationPersistPage = false;
    /**
     * LocalStorage key
     */
    paginationStorageKey = 'table-page';
    /**
     * Enable swipe gestures
     */
    paginationSwipeGestures = true;
    /**
     * Smart compact mode
     */
    paginationSmartCompact = false;
    /**
     * Smart compact threshold
     */
    paginationSmartCompactThreshold = 20;
    /**
     * Auto-hide pagination on single page
     */
    paginationAutoHide = true;
    /**
     * Responsive pagination mode
     */
    paginationResponsive = true;
    /**
     * Mobile breakpoint for pagination
     */
    paginationMobileBreakpoint = 768;
    /**
     * Enable virtual scrolling for performance with lg datasets
     */
    virtualScroll = false;
    /**
     * Row height for virtual scrolling (px)
     */
    virtualRowHeight = 48;
    /**
     * Enable advanced filter operators
     */
    advancedFilters = false;
    /**
     * Enable column aggregation (sum, avg, min, max)
     */
    columnAggregation = false;
    /**
     * Aggregation functions to show
     */
    aggregationFunctions = ['sum', 'avg', 'min', 'max', 'count'];
    /**
     * Persist table state to localStorage
     */
    persistState = false;
    /**
     * LocalStorage key for state persistence
     */
    stateStorageKey = 'table-state';
    /**
     * Enable multi-column sorting
     */
    multiSort = false;
    /**
     * Maximum number of sort columns
     */
    maxSortColumns = 3;
    /**
     * Enable column auto-sizing
     */
    autoSizeColumns = false;
    /**
     * Enable row details panel
     */
    rowDetails = false;
    /**
     * Enable keyboard shortcuts
     */
    keyboardShortcuts = true;
    /**
     * Enable Excel export (.xlsx)
     */
    excelExport = false;
    /**
     * Enable inline validation
     */
    inlineValidation = false;
    /**
     * Validation rules for columns
     */
    validationRules = {};
    // ========== NEW HIGH-VALUE FEATURES ==========
    /**
     * Enable advanced cell editors (date picker, dropdown, etc.)
     */
    advancedCellEditors = true;
    /**
     * Enable column formatting (currency, date, percentage)
     */
    columnFormatting = true;
    /**
     * Enable range selection (Shift+Click)
     */
    rangeSelection = false;
    /**
     * Enable copy/paste functionality
     */
    copyPaste = false;
    /**
     * Enable conditional formatting (color scales, data bars)
     */
    conditionalFormatting = false;
    /**
     * Conditional formatting rules
     */
    formattingRules = {};
    // ========== PHASE 2 ADVANCED FEATURES ==========
    /**
     * Enable context menus on right click
     */
    contextMenu = false;
    /**
     * Enable mobile card view for sm screens
     */
    mobileCardView = true;
    /**
     * Enable lazy loading of data
     */
    lazyLoad = false;
    /**
     * Enable PDF export
     */
    pdfExport = false;
    /**
     * Enable sparklines in cells
     */
    enableSparklines = false;
    /**
     * Enable undo/redo functionality
     */
    undoRedo = false;
    /**
     * Enable print optimization
     */
    printOptimized = false;
    /**
     * Enable enhanced accessibility features
     */
    enhancedAccessibility = true;
    /**
     * Enable advanced validation (ranges, lists)
     */
    advancedValidation = false;
    /**
     * Enable global search
     */
    searchable = true;
    /**
     * Enable sorting
     */
    sortable = true;
    /**
     * Enable filtering
     */
    filterable = true;
    /**
     * Enable column reordering
     */
    columnReorder = true;
    /**
     * Enable column visibility toggle
     */
    columnVisibility = true;
    /**
     * Row height variant
     */
    rowHeight = 'normal';
    /**
     * Enable striped rows
     */
    striped = true;
    /**
     * Custom striped row color for light mode
     */
    stripedColor;
    /**
     * Custom striped row color for dark mode
     */
    stripedColorDark;
    /**
     * Enable hover effect
     */
    hoverable = true;
    /**
     * Enable borders
     */
    bordered = true;
    /**
     * Loading state
     */
    loading = false;
    /**
     * Show skeleton while loading
     */
    showSkeleton = true;
    /**
     * Number of skeleton rows to show
     */
    skeletonRows = 5;
    /**
     * Empty message
     */
    emptyMessage = 'No data available';
    /**
     * Server-side mode
     */
    serverSide = false;
    /**
     * Total rows (for server-side pagination)
     */
    totalRows = 0;
    /**
     * Enable export
     */
    exportable = true;
    /**
     * Theme mode
     */
    theme = 'auto';
    /** High-Fidelity: Table variant */
    variant = 'default';
    /** High-Fidelity: Primary color theme */
    color = 'primary';
    /**
     * Enable data grouping
     */
    grouping = false;
    /**
     * Field to group by (for row grouping)
     */
    groupBy = '';
    /**
     * Expand groups by default
     */
    expandGroupsByDefault = true;
    /**
     * Show group count
     */
    showGroupCount = true;
    /**
     * Enable column grouping (multi-level headers)
     */
    columnGrouping = false;
    /**
     * Enable row grouping controls in toolbar
     */
    showGroupingControls = true;
    /**
     * Enable Tree Data mode (hierarchical)
     */
    treeData = false;
    /**
     * Show actions menu (3-dot menu) for each row
     */
    showActions = false;
    /**
     * Custom actions to show in the row actions menu
     */
    customActions;
    /**
     * Default library for icons
     */
    iconLibrary = 'default';
    /**
     * Enable column pinning
     */
    columnPinning = true;
    /**
     * Enable row pinning
     */
    rowPinning = true;
    /**
     * Enable row spanning
     */
    rowSpanning = false;
    /**
     * Enable row reordering via drag and drop
     */
    rowReorder = false;
    /**
     * Enable multi-column filtering
     */
    multiFilter = true;
    /**
     * Show filter panel
     */
    showFilterPanel = false;
    /**
     * Show column panel
     */
    showColumnPanel = false;
    /**
     * Custom header background (solid color or gradient)
     */
    headerBackground;
    // ========== PRIVATE STATE ==========
    state = {
        selectedRows: new Set(),
        virtualVisibleRange: { start: 0, end: 50 },
        sortConfig: { field: '', direction: null },
        filterConfig: {},
        searchQuery: '',
        pagination: {
            currentPage: 1,
            pageSize: 10,
            totalPages: 1,
            totalRows: 0,
        },
        editingCell: null,
        columnOrder: [],
        visibleColumns: new Set(),
        columnWidths: new Map(),
        expandedGroups: new Set(),
        groupBy: null,
        expandedRows: new Set(),
        focusedCell: null,
    };
    draggedColumn = null;
    draggedRow = null;
    showColumnSettings = false;
    showExportDialog = false;
    resizingColumn = null;
    activeActionMenu = null;
    pinnedColumns = { left: [], right: [] };
    pinnedRows = { top: [], bottom: [] };
    editingRow = null;
    activeFilters = new Map();
    filterPanelField = '';
    filterPanelOperator = 'contains';
    filterPanelValue = '';
    draggedColumnInPanel = null;
    columnSearchQuery = '';
    // Premium features state
    virtualScrollOffset = 0;
    virtualVisibleRange = { start: 0, end: 50 };
    multiSortConfig = [];
    columnAggregations = new Map();
    expandedRowDetails = new Set();
    validationErrors = new Map(); // rowId -> field -> error
    showKeyboardShortcutsHelp = false;
    advancedFilterConfig = new Map();
    // New features state
    rangeSelectionAnchor = null;
    clipboardData = [];
    formattingCache = new Map();
    // Phase 2 State
    contextMenuState = { visible: false, x: 0, y: 0, type: 'cell', target: null };
    undoStack = [];
    redoStack = [];
    lazyLoadedRows = new Set();
    isMobileView = false;
    /**
     * Events
     */
    rowSelect;
    rowDeselect;
    cellEdit;
    cellEditStart;
    cellEditStop;
    rowEditStart;
    rowEditStop;
    sortChange;
    filterChange;
    pageChange;
    searchChange;
    columnOrderChange;
    columnVisibilityChange;
    columnPin;
    rowPin;
    rowReorderEvent;
    dataExport;
    groupToggle;
    groupByChange;
    rowEdit;
    rowDelete;
    rowAction;
    lazyLoadMore;
    resizeObserver;
    lazyLoadObserver;
    editInputRef;
    resizeStartX = 0;
    resizeStartWidth = 0;
    resizingColumnId = '';
    componentWillLoad() {
        this.initializeState();
    }
    componentDidLoad() {
        // Load saved state first
        this.loadTableState();
        this.setupResizeObserver();
        this.applyTheme();
        this.setupClickOutsideListener();
        this.setupGlobalKeyboardShortcuts();
        // Calculate aggregations if enabled
        // if (this.columnAggregation) {
        //   this.calculateAggregations();
        // }
        // Add copy/paste listeners if enabled
        if (this.copyPaste) {
            document.addEventListener('copy', this.handleCopy);
            document.addEventListener('paste', this.handlePaste);
        }
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
        if (this.lazyLoadObserver) {
            this.lazyLoadObserver.disconnect();
        }
        // Clean up resize event listeners
        document.removeEventListener('mousemove', this.handleResizeMove);
        document.removeEventListener('mouseup', this.handleResizeEnd);
        // Clean up copy/paste listeners
        if (this.copyPaste) {
            document.removeEventListener('copy', this.handleCopy);
            document.removeEventListener('paste', this.handlePaste);
        }
        // Clean up click outside listener
        document.removeEventListener('click', this.handleClickOutside);
    }
    onDataOrColumnsChange() {
        this.initializeState();
    }
    onPageSizeChange(newSize) {
        this.state = {
            ...this.state,
            pagination: {
                ...this.state.pagination,
                pageSize: newSize,
                currentPage: 1,
                totalPages: this.calculateTotalPages(newSize),
            },
        };
    }
    onGroupByChange(newGroupBy) {
        this.handleGroupByChange(newGroupBy);
    }
    onThemeChange() {
        this.applyTheme();
    }
    /**
     * Public methods
     */
    async selectRow(rowId) {
        const newSelected = new Set(this.state.selectedRows);
        newSelected.add(rowId);
        this.updateSelectedRows(newSelected);
    }
    async deselectRow(rowId) {
        const newSelected = new Set(this.state.selectedRows);
        newSelected.delete(rowId);
        this.updateSelectedRows(newSelected);
    }
    async selectAllRows() {
        const allIds = this.getProcessedData().map(row => row.id);
        this.updateSelectedRows(new Set(allIds));
    }
    async deselectAllRows() {
        this.updateSelectedRows(new Set());
    }
    async getSelectedRows() {
        return Array.from(this.state.selectedRows);
    }
    async exportData(options = { format: 'csv' }) {
        const data = this.prepareExportData(options);
        this.performExport(data, options);
    }
    async resetFilters() {
        this.state = {
            ...this.state,
            filterConfig: {},
            searchQuery: '',
            pagination: { ...this.state.pagination, currentPage: 1 },
        };
    }
    async resetSort() {
        this.state = {
            ...this.state,
            sortConfig: { field: '', direction: null },
        };
    }
    async goToPage(page) {
        if (page >= 1 && page <= this.state.pagination.totalPages) {
            this.state = {
                ...this.state,
                pagination: { ...this.state.pagination, currentPage: page },
            };
            this.pageChange.emit({ page, pageSize: this.state.pagination.pageSize });
        }
    }
    async refresh() {
        this.initializeState();
    }
    async print() {
        if (this.printOptimized) {
            window.print();
        }
        else {
            // Create a temporary print frame or styling
            const style = document.createElement('style');
            style.textContent = `
        @media print {
          body * { visibility: hidden; }
          .data-table-container, .data-table-container * { visibility: visible; }
          .data-table-container { position: absolute; left: 0; top: 0; width: 100%; }
          .toolbar, .pagination-container, .column-settings-panel, .filter-panel { display: none !important; }
          .data-table { width: 100% !important; border-collapse: collapse !important; }
          .data-table td, .data-table th { border: 1px solid #ddd !important; padding: 8px !important; }
        }
      `;
            document.head.appendChild(style);
            window.print();
            document.head.removeChild(style);
        }
    }
    initializeState() {
        const cols = this.parseColumns();
        const flatColumns = this.flattenColumns(cols);
        // Initialize column widths with smart distribution
        const columnWidths = this.calculateInitialColumnWidths(flatColumns);
        // Initialize grouping
        const initialGroupBy = this.groupBy || null;
        const expandedGroups = new Set();
        if (initialGroupBy && this.expandGroupsByDefault) {
            // We'll populate this after data is available
            const data = this.parseData();
            const groups = this.groupData(data, initialGroupBy);
            groups.forEach((_, key) => expandedGroups.add(key));
        }
        this.state = {
            ...this.state,
            columnOrder: flatColumns.map(col => col.id),
            visibleColumns: new Set(flatColumns.filter(col => col.visible !== false).map(col => col.id)),
            columnWidths: columnWidths,
            groupBy: initialGroupBy,
            expandedGroups: expandedGroups,
            pagination: {
                currentPage: 1,
                pageSize: this.pageSize,
                totalPages: this.calculateTotalPages(this.pageSize),
                totalRows: this.getTotalRows(),
            },
            focusedCell: null,
        };
    }
    parseColumns() {
        if (typeof this.columns === 'string') {
            try {
                return JSON.parse(this.columns);
            }
            catch {
                return [];
            }
        }
        return this.columns || [];
    }
    parseData() {
        if (typeof this.data === 'string') {
            try {
                return JSON.parse(this.data);
            }
            catch {
                return [];
            }
        }
        return this.data || [];
    }
    parsePageSizeOptions() {
        if (typeof this.pageSizeOptions === 'string') {
            try {
                return JSON.parse(this.pageSizeOptions);
            }
            catch {
                return [5, 10, 25, 50, 100];
            }
        }
        return this.pageSizeOptions;
    }
    flattenColumns(columns) {
        const result = [];
        const flatten = (cols) => {
            cols.forEach(col => {
                if (col.children && col.children.length > 0) {
                    flatten(col.children);
                }
                else {
                    result.push(col);
                }
            });
        };
        flatten(columns);
        return result;
    }
    getVisibleColumns() {
        const cols = this.parseColumns();
        const flatColumns = this.flattenColumns(cols);
        return this.state.columnOrder
            .map(id => flatColumns.find(col => col.id === id))
            .filter((col) => !!col && this.state.visibleColumns.has(col.id));
    }
    getTotalRows() {
        if (this.serverSide) {
            return this.totalRows;
        }
        return this.parseData().length;
    }
    calculateTotalPages(pageSize) {
        const total = this.getTotalRows();
        return Math.ceil(total / pageSize);
    }
    getProcessedData() {
        let data = this.parseData();
        // Handle Tree Data Flattening
        if (this.treeData) {
            if (!this.state.searchQuery && Object.keys(this.state.filterConfig).length === 0 && !this.state.sortConfig.field) {
                data = this.flattenTreeData(data);
            }
            else {
                data = this.flattenTreeData(data);
            }
        }
        // Apply search
        if (this.searchable && this.state.searchQuery) {
            data = this.applySearch(data, this.state.searchQuery);
        }
        // Apply basic filters
        if (this.filterable && Object.keys(this.state.filterConfig).length > 0) {
            data = this.applyFilters(data, this.state.filterConfig);
        }
        // Apply advanced filters (PREMIUM)
        if (this.advancedFilters) {
            data = this.applyAdvancedFilters(data);
        }
        // Apply sort (multi-sort or single sort) (PREMIUM)
        if (this.sortable) {
            if (this.multiSort && this.multiSortConfig.length > 0) {
                data = this.applyMultiSort(data);
            }
            else if (this.state.sortConfig.field && this.state.sortConfig.direction) {
                data = this.applySort(data, this.state.sortConfig);
            }
        }
        // Update total rows after filtering
        if (!this.serverSide) {
            this.state.pagination.totalRows = data.length;
            this.state.pagination.totalPages = this.calculateTotalPages(this.state.pagination.pageSize);
        }
        // Calculate aggregations (PREMIUM)
        // if (this.columnAggregation) {
        //   this.calculateAggregations();
        // }
        // Apply pagination (skip if virtual scroll)
        if (this.pagination && !this.serverSide && !this.virtualScroll) {
            data = this.applyPagination(data);
        }
        // Save state if persistence enabled (PREMIUM)
        if (this.persistState) {
            this.saveTableState();
        }
        return data;
    }
    applySearch(data, query) {
        const lowerQuery = query.toLowerCase();
        const columns = this.getVisibleColumns();
        return data.filter(row => {
            return columns.some(col => {
                const value = col.field ? row[col.field] : '';
                return String(value).toLowerCase().includes(lowerQuery);
            });
        });
    }
    applyFilters(data, filters) {
        return data.filter(row => {
            return Object.keys(filters).every(field => {
                const filterValue = filters[field];
                if (filterValue === null || filterValue === '')
                    return true;
                const rowValue = row[field];
                if (typeof filterValue === 'string') {
                    return String(rowValue).toLowerCase().includes(filterValue.toLowerCase());
                }
                return rowValue === filterValue;
            });
        });
    }
    applySort(data, sort) {
        return [...data].sort((a, b) => {
            const aVal = a[sort.field];
            const bVal = b[sort.field];
            if (aVal === bVal)
                return 0;
            const comparison = aVal < bVal ? -1 : 1;
            return sort.direction === 'asc' ? comparison : -comparison;
        });
    }
    applyPagination(data) {
        const { currentPage, pageSize } = this.state.pagination;
        const start = (currentPage - 1) * pageSize;
        const end = start + pageSize;
        return data.slice(start, end);
    }
    groupData(data, groupByField) {
        const groups = new Map();
        data.forEach(row => {
            const groupValue = row[groupByField] !== undefined && row[groupByField] !== null
                ? String(row[groupByField])
                : '(Empty)';
            if (!groups.has(groupValue)) {
                groups.set(groupValue, []);
            }
            groups.get(groupValue).push(row);
        });
        return groups;
    }
    handleGroupToggle(groupKey) {
        const newExpanded = new Set(this.state.expandedGroups);
        if (newExpanded.has(groupKey)) {
            newExpanded.delete(groupKey);
        }
        else {
            newExpanded.add(groupKey);
        }
        this.state = { ...this.state, expandedGroups: newExpanded };
        this.groupToggle.emit({ groupKey, expanded: newExpanded.has(groupKey) });
    }
    handleGroupByChange(field) {
        const newGroupBy = field === this.state.groupBy ? null : field;
        // Initialize expanded groups based on expandGroupsByDefault prop
        const expandedGroups = new Set();
        if (newGroupBy && this.expandGroupsByDefault) {
            const data = this.getProcessedData();
            const groups = this.groupData(data, newGroupBy);
            groups.forEach((_, key) => expandedGroups.add(key));
        }
        this.state = {
            ...this.state,
            groupBy: newGroupBy,
            expandedGroups: expandedGroups,
        };
        if (newGroupBy) {
            this.groupByChange.emit({ field: newGroupBy });
        }
    }
    handleSort(field) {
        if (!this.sortable)
            return;
        this.pushUndoState();
        const currentSort = this.state.sortConfig;
        let newDirection = 'asc';
        if (currentSort.field === field) {
            if (currentSort.direction === 'asc') {
                newDirection = 'desc';
            }
            else if (currentSort.direction === 'desc') {
                newDirection = null;
            }
        }
        const newSort = {
            field: newDirection ? field : '',
            direction: newDirection,
        };
        this.state = { ...this.state, sortConfig: newSort };
        this.sortChange.emit(newSort);
        // Announce to screen readers
        if (this.enhancedAccessibility && newDirection) {
            this.announceToScreenReader(`Sorted by ${field} ${newDirection === 'asc' ? 'ascending' : 'descending'}`);
        }
    }
    handleSearch(event) {
        this.pushUndoState();
        const input = event.target;
        this.state = {
            ...this.state,
            searchQuery: input.value,
            pagination: { ...this.state.pagination, currentPage: 1 },
        };
        this.searchChange.emit({ query: input.value });
    }
    handleFilter(field, value) {
        this.pushUndoState();
        const newFilters = { ...this.state.filterConfig };
        if (value === '') {
            delete newFilters[field];
        }
        else {
            newFilters[field] = value;
        }
        this.state = {
            ...this.state,
            filterConfig: newFilters,
            pagination: { ...this.state.pagination, currentPage: 1 },
        };
        this.filterChange.emit(newFilters);
        // Announce to screen readers
        if (this.enhancedAccessibility) {
            const filterCount = Object.keys(newFilters).length;
            this.announceToScreenReader(`${filterCount} filter${filterCount !== 1 ? 's' : ''} applied`);
        }
    }
    handleRowSelect(rowId, event) {
        const checkbox = event.target;
        const newSelected = new Set(this.state.selectedRows);
        if (checkbox.checked) {
            if (this.multiSelect) {
                newSelected.add(rowId);
            }
            else {
                newSelected.clear();
                newSelected.add(rowId);
            }
        }
        else {
            newSelected.delete(rowId);
        }
        this.updateSelectedRows(newSelected);
    }
    handleSelectAll(event) {
        const checkbox = event.target;
        if (checkbox.checked) {
            const allIds = this.getProcessedData().map(row => row.id);
            this.updateSelectedRows(new Set(allIds));
        }
        else {
            this.updateSelectedRows(new Set());
        }
    }
    updateSelectedRows(selected) {
        this.pushUndoState();
        this.state = { ...this.state, selectedRows: selected };
        const selectedArray = Array.from(selected);
        if (selected.size > 0) {
            this.rowSelect.emit({ selectedRows: selectedArray });
            // Announce to screen readers
            if (this.enhancedAccessibility) {
                this.announceToScreenReader(`${selected.size} row${selected.size !== 1 ? 's' : ''} selected`);
            }
        }
        else {
            this.rowDeselect.emit({ selectedRows: selectedArray });
            if (this.enhancedAccessibility) {
                this.announceToScreenReader('All rows deselected');
            }
        }
    }
    handleCellEdit(rowId, field, value) {
        // Phase 2: Inline Validation
        if (this.advancedValidation) {
            const error = this.validateCell(rowId, field, value);
            const rowKey = String(rowId);
            if (error) {
                const rowErrors = this.validationErrors.get(rowKey) || new Map();
                rowErrors.set(field, error);
                this.validationErrors = new Map(this.validationErrors).set(rowKey, rowErrors);
            }
            else {
                const rowErrors = this.validationErrors.get(rowKey);
                if (rowErrors && rowErrors.has(field)) {
                    rowErrors.delete(field);
                    this.validationErrors = new Map(this.validationErrors);
                }
            }
        }
        // Emit stop event before edit
        this.cellEditStop.emit({ rowId, field, value });
        // Emit main edit event
        this.cellEdit.emit({ rowId, field, value });
        // Clear editing state
        this.state = { ...this.state, editingCell: null };
        // Check if row editing should stop
        if (this.editingRow === rowId && !this.editable) {
            this.stopRowEdit(rowId);
        }
    }
    startCellEdit(rowId, field) {
        if (!this.editable)
            return;
        const row = Array.isArray(this.data) ? this.data.find(r => r.id === rowId) : null;
        const currentValue = row ? row[field] : null;
        // Emit start event
        this.cellEditStart.emit({ rowId, field, value: currentValue });
        // Start row editing if not already started
        if (this.editingRow !== rowId) {
            this.startRowEdit(rowId);
        }
        this.state = { ...this.state, editingCell: { rowId, field } };
        setTimeout(() => {
            if (this.editInputRef) {
                this.editInputRef?.setFocus();
                if (this.editInputRef && 'select' in this.editInputRef) {
                    this.editInputRef.select();
                }
            }
        }, 0);
    }
    startRowEdit(rowId) {
        const row = Array.isArray(this.data) ? this.data.find(r => r.id === rowId) : null;
        if (row) {
            this.editingRow = rowId;
            this.rowEditStart.emit({ row });
        }
    }
    stopRowEdit(rowId) {
        const row = Array.isArray(this.data) ? this.data.find(r => r.id === rowId) : null;
        if (row) {
            this.editingRow = null;
            this.rowEditStop.emit({ row });
        }
    }
    toggleRowExpansion(rowId, event) {
        event.stopPropagation();
        const newExpanded = new Set(this.state.expandedRows);
        if (newExpanded.has(rowId)) {
            newExpanded.delete(rowId);
        }
        else {
            newExpanded.add(rowId);
        }
        this.state = { ...this.state, expandedRows: newExpanded };
    }
    flattenTreeData(data, depth = 0) {
        let result = [];
        data.forEach(row => {
            // Clone row to avoid mutating original data property, 
            // but simplistic clone might lose methods if any. 
            // Assuming data is POJO.
            const flatRow = { ...row, _depth: depth, _hasChildren: row.children && row.children.length > 0 };
            result.push(flatRow);
            if (row.children && row.children.length > 0 && this.state.expandedRows.has(row.id)) {
                result = result.concat(this.flattenTreeData(row.children, depth + 1));
            }
        });
        return result;
    }
    // New handlers for ui-pagination component
    handlePaginationChange(event) {
        const { page, itemsPerPage } = event.detail;
        this.state = {
            ...this.state,
            pagination: {
                ...this.state.pagination,
                currentPage: page,
                pageSize: itemsPerPage,
            },
        };
        this.pageChange.emit({ page, pageSize: itemsPerPage });
    }
    handlePageSizeChangeFromPagination(event) {
        const newPageSize = event.detail;
        this.state = {
            ...this.state,
            pagination: {
                ...this.state.pagination,
                pageSize: newPageSize,
                currentPage: 1,
                totalPages: this.calculateTotalPages(newPageSize),
            },
        };
        this.pageChange.emit({ page: 1, pageSize: newPageSize });
    }
    // ========== PREMIUM FEATURES HELPER METHODS ==========
    // Virtual Scrolling
    handleVirtualScroll = (event) => {
        if (!this.virtualScroll)
            return;
        const target = event.target;
        const scrollTop = target.scrollTop;
        const start = Math.floor(scrollTop / this.virtualRowHeight);
        const visibleCount = Math.ceil(target.clientHeight / this.virtualRowHeight);
        const end = start + visibleCount + 10; // buffer rows
        this.virtualVisibleRange = { start: Math.max(0, start - 5), end };
    };
    // Multi-Column Sort
    handleMultiSort(field, event) {
        if (!this.multiSort) {
            this.handleSort(field);
            return;
        }
        this.pushUndoState();
        const ctrl = event && (event.ctrlKey || event.metaKey);
        const existing = this.multiSortConfig.findIndex(s => s.field === field);
        let newConfig = [...this.multiSortConfig];
        if (ctrl) {
            // Add to multi-sort
            if (existing >= 0) {
                if (newConfig[existing].direction === 'asc') {
                    newConfig[existing].direction = 'desc';
                }
                else {
                    newConfig.splice(existing, 1);
                }
            }
            else {
                if (newConfig.length < this.maxSortColumns) {
                    newConfig.push({ field, direction: 'asc' });
                }
            }
        }
        else {
            // Single sort
            newConfig = existing >= 0 && newConfig[existing].direction === 'asc'
                ? [{ field, direction: 'desc' }]
                : [{ field, direction: 'asc' }];
        }
        this.multiSortConfig = newConfig;
    }
    applyMultiSort(data) {
        if (!this.multiSort || this.multiSortConfig.length === 0) {
            return this.applySort(data, this.state.sortConfig);
        }
        return [...data].sort((a, b) => {
            for (const sort of this.multiSortConfig) {
                const aVal = a[sort.field];
                const bVal = b[sort.field];
                if (aVal !== bVal) {
                    const comparison = aVal < bVal ? -1 : 1;
                    return sort.direction === 'asc' ? comparison : -comparison;
                }
            }
            return 0;
        });
    }
    // Advanced Filters
    filterOperators = {
        equals: (value, filterValue) => value === filterValue,
        notEquals: (value, filterValue) => value !== filterValue,
        contains: (value, filterValue) => String(value).toLowerCase().includes(String(filterValue).toLowerCase()),
        startsWith: (value, filterValue) => String(value).toLowerCase().startsWith(String(filterValue).toLowerCase()),
        endsWith: (value, filterValue) => String(value).toLowerCase().endsWith(String(filterValue).toLowerCase()),
        greaterThan: (value, filterValue) => Number(value) > Number(filterValue),
        lessThan: (value, filterValue) => Number(value) < Number(filterValue),
        isEmpty: (value) => value === null || value === undefined || value === '',
        isNotEmpty: (value) => value !== null && value !== undefined && value !== '',
    };
    applyAdvancedFilters(data) {
        if (!this.advancedFilters || this.advancedFilterConfig.size === 0)
            return data;
        return data.filter(row => {
            return Array.from(this.advancedFilterConfig.entries()).every(([field, config]) => {
                const operator = this.filterOperators[config.operator];
                return operator ? operator(row[field], config.value) : true;
            });
        });
    }
    // State Persistence
    saveTableState() {
        if (!this.persistState || typeof window === 'undefined')
            return;
        try {
            const state = {
                sortConfig: this.multiSort ? this.multiSortConfig : this.state.sortConfig,
                filterConfig: this.state.filterConfig,
                columnOrder: this.state.columnOrder,
                visibleColumns: Array.from(this.state.visibleColumns),
                columnWidths: Array.from(this.state.columnWidths.entries()),
                pagination: this.state.pagination,
                groupBy: this.state.groupBy,
            };
            localStorage.setItem(this.stateStorageKey, JSON.stringify(state));
        }
        catch (e) {
            console.error('Failed to save table state:', e);
        }
    }
    loadTableState() {
        if (!this.persistState || typeof window === 'undefined')
            return;
        try {
            const saved = localStorage.getItem(this.stateStorageKey);
            if (saved) {
                const state = JSON.parse(saved);
                if (this.multiSort && state.multiSortConfig) {
                    this.multiSortConfig = state.multiSortConfig;
                }
                this.state = {
                    ...this.state,
                    sortConfig: state.sortConfig || this.state.sortConfig,
                    filterConfig: state.filterConfig || {},
                    columnOrder: state.columnOrder || this.state.columnOrder,
                    visibleColumns: new Set(state.visibleColumns || this.state.visibleColumns),
                    columnWidths: new Map(state.columnWidths || []),
                    groupBy: state.groupBy || null,
                };
            }
        }
        catch (e) {
            console.error('Failed to load table state:', e);
        }
    }
    // Row Details
    toggleRowDetails(rowId) {
        const newExpanded = new Set(this.expandedRowDetails);
        if (newExpanded.has(rowId)) {
            newExpanded.delete(rowId);
        }
        else {
            newExpanded.add(rowId);
        }
        this.expandedRowDetails = newExpanded;
    }
    // Column Auto-sizing
    // Inline Validation
    validateCell(_rowId, field, value) {
        if (!this.inlineValidation && !this.advancedValidation)
            return null;
        // Check column-level validator first
        const column = this.getVisibleColumns().find(c => c.field === field);
        if (column && column.validator) {
            const row = Array.isArray(this.data) ? this.data.find(r => r.id === _rowId) : null;
            const result = column.validator(value, row);
            if (result !== true && result !== null) {
                return typeof result === 'string' ? result : 'Invalid value';
            }
        }
        if (!this.validationRules[field])
            return null;
        const rules = this.validationRules[field];
        if (rules.required && (value === null || value === undefined || value === '')) {
            return 'This field is required';
        }
        if (rules.minLength && String(value).length < rules.minLength) {
            return `Minimum length is ${rules.minLength}`;
        }
        if (rules.maxLength && String(value).length > rules.maxLength) {
            return `Maximum length is ${rules.maxLength}`;
        }
        if (rules.min !== undefined && Number(value) < rules.min) {
            return `Minimum value is ${rules.min}`;
        }
        if (rules.max !== undefined && Number(value) > rules.max) {
            return `Maximum value is ${rules.max}`;
        }
        if (rules.pattern && !new RegExp(rules.pattern).test(String(value))) {
            return rules.patternMessage || 'Invalid format';
        }
        // Advanced validation: Custom sync function
        if (this.advancedValidation && rules.custom && typeof rules.custom === 'function') {
            try {
                const result = rules.custom(value);
                if (result !== true) {
                    return typeof result === 'string' ? result : 'Validation failed';
                }
            }
            catch (error) {
                return 'Validation error';
            }
        }
        // Advanced validation: Async custom function (handled separately)
        if (this.advancedValidation && rules.asyncCustom && typeof rules.asyncCustom === 'function') {
            this.validateCellAsync(_rowId, field, value, rules.asyncCustom);
        }
        return null;
    }
    async validateCellAsync(rowId, field, value, asyncValidator) {
        try {
            const result = await asyncValidator(value);
            const rowKey = String(rowId);
            if (result !== true) {
                const error = typeof result === 'string' ? result : 'Async validation failed';
                const rowErrors = this.validationErrors.get(rowKey) || new Map();
                rowErrors.set(field, error);
                this.validationErrors = new Map(this.validationErrors).set(rowKey, rowErrors);
            }
            else {
                const rowErrors = this.validationErrors.get(rowKey);
                if (rowErrors && rowErrors.has(field)) {
                    rowErrors.delete(field);
                    this.validationErrors = new Map(this.validationErrors);
                }
            }
        }
        catch (error) {
            const rowKey = String(rowId);
            const rowErrors = this.validationErrors.get(rowKey) || new Map();
            rowErrors.set(field, 'Async validation error');
            this.validationErrors = new Map(this.validationErrors).set(rowKey, rowErrors);
        }
    }
    // ========== NEW HIGH-VALUE FEATURES IMPLEMENTATION ==========
    // Feature 1: Advanced Cell Editors
    renderAdvancedCellEditor(row, column, value) {
        if (!this.advancedCellEditors) {
            return this.renderEditableCell(row, column, value);
        }
        const handleChange = (newValue) => {
            this.handleCellEdit(row.id, column.field, newValue);
            this.state = { ...this.state, editingCell: null };
        };
        switch (column.type) {
            case 'date':
            case 'datetime':
            case 'number':
                return (h("ui-input", { type: column.type === 'datetime' ? 'datetime-local' : column.type, value: value || '', onInputChange: (v) => handleChange(column.type === 'number' ? Number(v.detail) : v.detail), onInputBlur: () => this.state = { ...this.state, editingCell: null }, customClass: `cell-editor ${column.type}-editor`, size: "sm" }));
            case 'boolean':
                return (h("ui-checkbox", { checked: !!value, onCheckboxChange: (e) => handleChange(e.detail.checked), size: "sm" }));
            default:
                return this.renderEditableCell(row, column, value);
        }
    }
    // Feature 2: Column Formatting
    formatCellValue(value, column) {
        if (!this.columnFormatting || value === null || value === undefined) {
            return String(value || '');
        }
        // Use custom formatter if provided
        if (column.format) {
            return column.format(value);
        }
        // Auto-format based on column type
        switch (column.type) {
            case 'number':
                return new Intl.NumberFormat().format(Number(value));
            case 'date':
                return new Intl.DateTimeFormat().format(new Date(value));
            case 'datetime':
                return new Intl.DateTimeFormat(undefined, {
                    dateStyle: 'short',
                    timeStyle: 'short'
                }).format(new Date(value));
            default:
                // Check for currency pattern in field name
                if (column.field?.toLowerCase().includes('price') ||
                    column.field?.toLowerCase().includes('cost') ||
                    column.field?.toLowerCase().includes('amount')) {
                    return new Intl.NumberFormat(undefined, {
                        style: 'currency',
                        currency: 'USD'
                    }).format(Number(value));
                }
                // Check for percentage pattern
                if (column.field?.toLowerCase().includes('percent') ||
                    column.field?.toLowerCase().includes('rate')) {
                    return new Intl.NumberFormat(undefined, {
                        style: 'percent',
                        minimumFractionDigits: 2
                    }).format(Number(value) / 100);
                }
                return String(value);
        }
    }
    // Feature 3: Range Selection
    handleCellClick(rowId, field, event) {
        if (!this.rangeSelection || !event.shiftKey) {
            return;
        }
        if (!this.rangeSelectionAnchor) {
            this.rangeSelectionAnchor = { rowId, field };
            return;
        }
        // Select range of cells
        const data = this.getProcessedData();
        const startRowIndex = data.findIndex(r => r.id === this.rangeSelectionAnchor.rowId);
        const endRowIndex = data.findIndex(r => r.id === rowId);
        const minRow = Math.min(startRowIndex, endRowIndex);
        const maxRow = Math.max(startRowIndex, endRowIndex);
        // Select all rows in range
        const selectedRows = new Set(this.state.selectedRows);
        for (let i = minRow; i <= maxRow; i++) {
            selectedRows.add(data[i].id);
        }
        this.state = { ...this.state, selectedRows };
    }
    // Feature 4: Copy/Paste
    handleCopy = (event) => {
        if (!this.copyPaste || this.state.selectedRows.size === 0) {
            return;
        }
        event.preventDefault();
        const data = this.getProcessedData();
        const columns = this.getVisibleColumns();
        const selectedData = data.filter(row => this.state.selectedRows.has(row.id));
        // Create tab-separated values
        const headers = columns.map(col => col.label).join('\t');
        const rows = selectedData.map(row => columns.map(col => this.formatCellValue(row[col.field], col)).join('\t')).join('\n');
        const textData = headers + '\n' + rows;
        event.clipboardData?.setData('text/plain', textData);
        // Store for internal paste
        this.clipboardData = selectedData.map(row => columns.map(col => row[col.field]));
    };
    handlePaste = (event) => {
        if (!this.copyPaste || !this.editable) {
            return;
        }
        event.preventDefault();
        const pastedText = event.clipboardData?.getData('text/plain');
        if (!pastedText)
            return;
        // Parse pasted data
        const rows = pastedText.split('\n').map(row => row.split('\t'));
        // Emit paste event for external handling
        this.cellEdit.emit({
            rowId: 'paste',
            field: 'multiple',
            value: rows
        });
    };
    // Feature 5: Conditional Formatting
    getConditionalFormattingStyle(value, column) {
        if (!this.conditionalFormatting || !this.formattingRules[column.field]) {
            return {};
        }
        const rules = this.formattingRules[column.field];
        const numValue = Number(value);
        // Color scale
        if (rules.colorScale) {
            const { min, max, minColor, maxColor } = rules.colorScale;
            const ratio = (numValue - min) / (max - min);
            const r = Math.round(minColor.r + (maxColor.r - minColor.r) * ratio);
            const g = Math.round(minColor.g + (maxColor.g - minColor.g) * ratio);
            const b = Math.round(minColor.b + (maxColor.b - minColor.b) * ratio);
            return { backgroundColor: `rgb(${r}, ${g}, ${b})` };
        }
        // Data bars
        if (rules.dataBar) {
            const { min, max, color } = rules.dataBar;
            const percentage = ((numValue - min) / (max - min)) * 100;
            return {
                background: `linear-gradient(90deg, ${color} ${percentage}%, transparent ${percentage}%)`
            };
        }
        // Custom rules
        if (rules.custom && typeof rules.custom === 'function') {
            return rules.custom(value);
        }
        return {};
    }
    toggleColumnVisibility(columnId) {
        const newVisible = new Set(this.state.visibleColumns);
        if (newVisible.has(columnId)) {
            newVisible.delete(columnId);
        }
        else {
            newVisible.add(columnId);
        }
        this.state = { ...this.state, visibleColumns: newVisible };
        this.columnVisibilityChange.emit({ visible: Array.from(newVisible) });
    }
    handleColumnDragStart(columnId, event) {
        this.draggedColumn = columnId;
        event.dataTransfer.effectAllowed = 'move';
    }
    handleColumnDragOver(event) {
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }
    handleColumnDrop(targetColumnId, event) {
        event.preventDefault();
        if (!this.draggedColumn || this.draggedColumn === targetColumnId)
            return;
        const newOrder = [...this.state.columnOrder];
        const draggedIndex = newOrder.indexOf(this.draggedColumn);
        const targetIndex = newOrder.indexOf(targetColumnId);
        newOrder.splice(draggedIndex, 1);
        newOrder.splice(targetIndex, 0, this.draggedColumn);
        this.state = { ...this.state, columnOrder: newOrder };
        this.columnOrderChange.emit({ order: newOrder });
        this.draggedColumn = null;
    }
    /**
     * Pin/Unpin column
     */
    async handleColumnPin(columnId, position) {
        const newPinned = { ...this.pinnedColumns };
        // Remove from both sides first
        newPinned.left = newPinned.left.filter(id => id !== columnId);
        newPinned.right = newPinned.right.filter(id => id !== columnId);
        // Add to new position
        if (position === 'left') {
            newPinned.left.push(columnId);
        }
        else if (position === 'right') {
            newPinned.right.push(columnId);
        }
        this.pinnedColumns = newPinned;
        this.columnPin.emit({ columnId, position });
    }
    /**
     * Pin/Unpin row
     */
    async handleRowPin(rowId, position) {
        const newPinned = { ...this.pinnedRows };
        // Remove from both positions first
        newPinned.top = newPinned.top.filter(id => id !== rowId);
        newPinned.bottom = newPinned.bottom.filter(id => id !== rowId);
        // Add to new position
        if (position === 'top') {
            newPinned.top.push(rowId);
        }
        else if (position === 'bottom') {
            newPinned.bottom.push(rowId);
        }
        this.pinnedRows = newPinned;
        this.rowPin.emit({ rowId, position });
    }
    /**
     * Row reordering handlers
     */
    handleRowDragStart(rowIndex, event) {
        if (!this.rowReorder)
            return;
        this.draggedRow = rowIndex;
        event.dataTransfer.effectAllowed = 'move';
    }
    handleRowDragOver(event) {
        if (!this.rowReorder)
            return;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
    }
    handleRowDrop(targetRowIndex, event) {
        event.preventDefault();
        if (this.draggedRow === null || this.draggedRow === targetRowIndex)
            return;
        this.rowReorderEvent.emit({ fromIndex: this.draggedRow, toIndex: targetRowIndex });
        this.draggedRow = null;
    }
    /**
     * Multi-filter management
     */
    addFilter(field, operator, value) {
        const fieldFilters = this.activeFilters.get(field) || [];
        fieldFilters.push({ operator, value });
        this.activeFilters.set(field, fieldFilters);
        // Update filter config
        const newFilters = { ...this.state.filterConfig };
        newFilters[field] = fieldFilters;
        this.state = { ...this.state, filterConfig: newFilters };
        this.filterChange.emit(newFilters);
    }
    removeFilter(field, index) {
        const fieldFilters = this.activeFilters.get(field) || [];
        fieldFilters.splice(index, 1);
        if (fieldFilters.length === 0) {
            this.activeFilters.delete(field);
        }
        else {
            this.activeFilters.set(field, fieldFilters);
        }
        // Update filter config
        const newFilters = { ...this.state.filterConfig };
        if (fieldFilters.length === 0) {
            delete newFilters[field];
        }
        else {
            newFilters[field] = fieldFilters;
        }
        this.state = { ...this.state, filterConfig: newFilters };
        this.filterChange.emit(newFilters);
    }
    clearAllFilters() {
        this.activeFilters.clear();
        this.state = { ...this.state, filterConfig: {} };
        this.filterChange.emit({});
    }
    handleResizeStart = (columnId, event) => {
        event.preventDefault();
        event.stopPropagation();
        this.resizingColumnId = columnId;
        this.resizeStartX = event.clientX;
        this.resizeStartWidth = this.state.columnWidths.get(columnId) || 150;
        this.resizingColumn = columnId;
        document.addEventListener('mousemove', this.handleResizeMove);
        document.addEventListener('mouseup', this.handleResizeEnd);
        // Prevent text selection during resize
        document.body.style.userSelect = 'none';
    };
    handleResizeMove = (event) => {
        if (!this.resizingColumnId)
            return;
        const diff = event.clientX - this.resizeStartX;
        const newWidth = Math.max(50, this.resizeStartWidth + diff); // Minimum width of 50px
        const newWidths = new Map(this.state.columnWidths);
        newWidths.set(this.resizingColumnId, newWidth);
        this.state = {
            ...this.state,
            columnWidths: newWidths,
        };
    };
    handleResizeEnd = () => {
        this.resizingColumnId = '';
        this.resizingColumn = null;
        document.body.style.userSelect = '';
        document.removeEventListener('mousemove', this.handleResizeMove);
        document.removeEventListener('mouseup', this.handleResizeEnd);
    };
    calculateInitialColumnWidths(columns) {
        const widths = new Map();
        const visibleColumns = columns.filter(col => col.visible !== false);
        const columnCount = visibleColumns.length;
        // Base width calculation with non-linear scaling for many columns
        let baseWidth;
        if (columnCount <= 3) {
            baseWidth = 250;
        }
        else if (columnCount <= 6) {
            baseWidth = 200;
        }
        else if (columnCount <= 10) {
            baseWidth = 150;
        }
        else if (columnCount <= 15) {
            baseWidth = 120;
        }
        else {
            baseWidth = 100;
        }
        visibleColumns.forEach(col => {
            // Use specified width if available, otherwise use calculated base width
            if (col.width) {
                // Parse width (e.g., "200px" -> 200)
                const parsed = parseInt(col.width);
                widths.set(col.id, isNaN(parsed) ? baseWidth : parsed);
            }
            else {
                widths.set(col.id, baseWidth);
            }
        });
        return widths;
    }
    prepareExportData(options) {
        let data = options.selectedOnly
            ? this.parseData().filter(row => this.state.selectedRows.has(row.id))
            : this.getProcessedData();
        const columns = options.visibleColumnsOnly
            ? this.getVisibleColumns()
            : this.flattenColumns(this.parseColumns());
        return data.map(row => {
            const exportRow = {};
            columns.forEach(col => {
                if (col.field) {
                    exportRow[col.label] = col.format
                        ? col.format(row[col.field])
                        : row[col.field];
                }
            });
            return exportRow;
        });
    }
    performExport(data, options) {
        if (options.format === 'csv') {
            this.exportToCSV(data, options.fileName || 'export.csv');
        }
        else if (options.format === 'json') {
            this.exportToJSON(data, options.fileName || 'export.json');
        }
        else if (options.format === 'excel') {
            this.exportToExcel(data, options.fileName || 'export.xlsx');
        }
        this.dataExport.emit({ data, format: options.format });
        this.showExportDialog = false;
    }
    exportToCSV(data, fileName) {
        if (data.length === 0)
            return;
        const headers = Object.keys(data[0]);
        const csvContent = [
            headers.join(','),
            ...data.map(row => headers.map(header => {
                const value = row[header];
                return typeof value === 'string' && value.includes(',')
                    ? `"${value}"`
                    : value;
            }).join(','))
        ].join('\n');
        this.downloadFile(csvContent, fileName, 'text/csv');
    }
    exportToJSON(data, fileName) {
        const jsonContent = JSON.stringify(data, null, 2);
        this.downloadFile(jsonContent, fileName, 'application/json');
    }
    exportToExcel(data, fileName) {
        if (data.length === 0)
            return;
        const headers = Object.keys(data[0]);
        // Build Excel XML (SpreadsheetML format)
        let xml = '<?xml version="1.0"?><?mso-application progid="Excel.Sheet"?>';
        xml += '<Workbook xmlns="urn:schemas-microsoft-com:office:spreadsheet" ';
        xml += 'xmlns:ss="urn:schemas-microsoft-com:office:spreadsheet">';
        xml += '<Styles>';
        xml += '<Style ss:ID="Header"><Font ss:Bold="1"/><Interior ss:Color="#4472C4" ss:Pattern="Solid"/></Style>';
        xml += '<Style ss:ID="Default"><Borders><Border ss:Position="Bottom" ss:LineStyle="Continuous" ss:Weight="1"/></Borders></Style>';
        xml += '</Styles>';
        xml += '<Worksheet ss:Name="Sheet1"><Table>';
        // Add header row
        xml += '<Row ss:StyleID="Header">';
        headers.forEach(header => {
            xml += `<Cell><Data ss:Type="String">${this.escapeXml(header)}</Data></Cell>`;
        });
        xml += '</Row>';
        // Add data rows
        data.forEach(row => {
            xml += '<Row ss:StyleID="Default">';
            headers.forEach(header => {
                const value = row[header];
                const type = typeof value === 'number' ? 'Number' : 'String';
                const cellValue = value !== null && value !== undefined ? value : '';
                xml += `<Cell><Data ss:Type="${type}">${this.escapeXml(String(cellValue))}</Data></Cell>`;
            });
            xml += '</Row>';
        });
        xml += '</Table></Worksheet></Workbook>';
        this.downloadFile(xml, fileName, 'application/vnd.ms-excel');
    }
    escapeXml(unsafe) {
        return unsafe
            .replace(/&/g, '&amp;')
            .replace(/</g, '&lt;')
            .replace(/>/g, '&gt;')
            .replace(/"/g, '&quot;')
            .replace(/'/g, '&apos;');
    }
    downloadFile(content, fileName, mimeType) {
        const blob = new Blob([content], { type: mimeType });
        const url = URL.createObjectURL(blob);
        const link = document.createElement('a');
        link.href = url;
        link.download = fileName;
        link.click();
        URL.revokeObjectURL(url);
    }
    // ========== PHASE 2 EXPORT & UTILS ==========
    exportToPDF() {
        // Check if print optimization is enabled, use window.print as fallback
        if (this.printOptimized) {
            window.print();
        }
        else {
            console.warn('PDF Export requires jspdf library. Please enable print mode.');
            alert('PDF Export not fully implemented without jspdf. Printing page instead.');
            window.print();
        }
    }
    // ========== UNDO/REDO ==========
    pushUndoState() {
        if (!this.undoRedo)
            return;
        // Deep copy state
        const stateCopy = JSON.parse(JSON.stringify(this.state));
        this.undoStack = [...this.undoStack, stateCopy];
        this.redoStack = []; // Clear redo
        // Limit stack size
        if (this.undoStack.length > 20)
            this.undoStack.shift();
    }
    handleUndo() {
        if (!this.undoRedo || this.undoStack.length === 0)
            return;
        const currentState = JSON.parse(JSON.stringify(this.state));
        this.redoStack = [...this.redoStack, currentState];
        const prevState = this.undoStack.pop();
        this.undoStack = [...this.undoStack]; // trigger update
        this.state = { ...prevState };
    }
    handleRedo() {
        if (!this.undoRedo || this.redoStack.length === 0)
            return;
        const currentState = JSON.parse(JSON.stringify(this.state));
        this.undoStack = [...this.undoStack, currentState];
        const nextState = this.redoStack.pop();
        this.redoStack = [...this.redoStack];
        this.state = { ...nextState };
    }
    setupGlobalKeyboardShortcuts() {
        document.addEventListener('keydown', (e) => {
            if (this.undoRedo) {
                if ((e.ctrlKey || e.metaKey) && e.key === 'z') {
                    e.preventDefault();
                    this.handleUndo();
                }
                if ((e.ctrlKey || e.metaKey) && (e.key === 'y' || (e.shiftKey && e.key === 'z'))) {
                    e.preventDefault();
                    this.handleRedo();
                }
            }
            // Cell Navigation
            if (this.keyboardShortcuts && !this.state.editingCell) {
                this.handleKeyboardNavigation(e);
            }
        });
    }
    handleKeyboardNavigation(e) {
        const keys = ['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight', 'Enter', 'Escape', 'Tab'];
        if (!keys.includes(e.key))
            return;
        const data = this.getProcessedData();
        const columns = this.getVisibleColumns();
        if (data.length === 0 || columns.length === 0)
            return;
        let { focusedCell } = this.state;
        // If no cell focused, focus first cell on any arrow key
        if (!focusedCell) {
            if (['ArrowUp', 'ArrowDown', 'ArrowLeft', 'ArrowRight'].includes(e.key)) {
                this.setFocusedCell(data[0].id, columns[0].field ?? '');
                e.preventDefault();
            }
            return;
        }
        const currentRowIndex = data.findIndex(r => r.id === focusedCell.rowId);
        const currentColIndex = columns.findIndex(c => c.field === focusedCell.field);
        if (currentRowIndex === -1 || currentColIndex === -1)
            return;
        switch (e.key) {
            case 'ArrowUp':
                if (currentRowIndex > 0) {
                    this.setFocusedCell(data[currentRowIndex - 1].id, focusedCell.field);
                    e.preventDefault();
                }
                break;
            case 'ArrowDown':
                if (currentRowIndex < data.length - 1) {
                    this.setFocusedCell(data[currentRowIndex + 1].id, focusedCell.field);
                    e.preventDefault();
                }
                break;
            case 'ArrowLeft':
                if (currentColIndex > 0) {
                    this.setFocusedCell(focusedCell.rowId, columns[currentColIndex - 1].field ?? '');
                    e.preventDefault();
                }
                break;
            case 'ArrowRight':
                if (currentColIndex < columns.length - 1) {
                    this.setFocusedCell(focusedCell.rowId, columns[currentColIndex + 1].field ?? '');
                    e.preventDefault();
                }
                break;
            case 'Enter':
                if (this.editable) {
                    this.startCellEdit(focusedCell.rowId, focusedCell.field);
                    e.preventDefault();
                }
                break;
            case 'Escape':
                this.setFocusedCell(null, '');
                break;
        }
    }
    setFocusedCell(rowId, field) {
        this.state = {
            ...this.state,
            focusedCell: rowId ? { rowId, field } : null
        };
        // Scroll into view if needed
        if (rowId) {
            setTimeout(() => {
                const cell = this.el.shadowRoot?.querySelector(`td[data-row-id="${rowId}"][data-field="${field}"]`);
                if (cell) {
                    cell.scrollIntoView({ block: 'nearest', inline: 'nearest' });
                }
            }, 0);
        }
    }
    applyTheme() {
        const root = this.el.shadowRoot?.querySelector('.data-table-container');
        if (!root)
            return;
        if (this.theme === 'auto') {
            const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
            root.classList.toggle('dark-mode', prefersDark);
        }
        else {
            root.classList.toggle('dark-mode', this.theme === 'dark');
        }
    }
    setupClickOutsideListener = () => {
        document.addEventListener('click', this.handleClickOutside);
        document.addEventListener('contextmenu', (e) => {
            if (this.contextMenu && this.contextMenuState.visible) {
                // Did we click inside the menu?
                const target = e.target;
                const menu = (this.el.shadowRoot || this.el).querySelector('.context-menu');
                if (menu && menu.contains(target)) {
                    return;
                }
                // If not, let default happen or just close? 
                // If we right clicked elsewhere, we want to open new menu there.
                // So this handler shouldn't block new menu.
            }
        });
    };
    handleClickOutside = (e) => {
        // Close actions menu if clicking outside
        if (this.activeActionMenu !== null) {
            const target = e.target;
            const actionsContainer = target.closest('.row-actions-container');
            // If click is outside any actions container, close the menu
            if (!actionsContainer) {
                this.activeActionMenu = null;
            }
        }
        // Close context menu
        if (this.contextMenuState.visible) {
            // Check if click is inside menu
            const target = e.target;
            const menu = (this.el.shadowRoot || this.el).querySelector('.context-menu');
            if (menu && menu.contains(target))
                return;
            this.contextMenuState = { ...this.contextMenuState, visible: false };
        }
    };
    handleHeaderContextMenu(e, col) {
        e.preventDefault();
        e.stopPropagation();
        const rect = e.currentTarget.getBoundingClientRect();
        this.contextMenuState = {
            visible: true,
            x: rect.left,
            y: rect.bottom + window.scrollY,
            type: 'header',
            target: col
        };
    }
    toggleColumnPin(columnId, side) {
        const newPinned = { ...this.pinnedColumns };
        // Remove from both sides first
        newPinned.left = newPinned.left.filter(id => id !== columnId);
        newPinned.right = newPinned.right.filter(id => id !== columnId);
        if (side === 'left') {
            newPinned.left.push(columnId);
        }
        else if (side === 'right') {
            newPinned.right.push(columnId);
        }
        this.pinnedColumns = newPinned;
        this.contextMenuState = { ...this.contextMenuState, visible: false };
    }
    handleContextMenu(e, type, target) {
        if (!this.contextMenu)
            return;
        e.preventDefault();
        e.stopPropagation();
        // Calculate position
        const x = e.clientX;
        const y = e.clientY;
        this.contextMenuState = {
            visible: true,
            x,
            y,
            type,
            target
        };
    }
    setupResizeObserver() {
        this.resizeObserver = new ResizeObserver((entries) => {
            this.el.shadowRoot?.host.dispatchEvent(new CustomEvent('tableResize'));
            // Update mobile view state
            for (const entry of entries) {
                this.isMobileView = entry.contentRect.width < 768;
            }
        });
        this.resizeObserver.observe(this.el);
    }
    setupLazyLoadObserver(element) {
        if (!element || !this.lazyLoad)
            return;
        // Disconnect existing observer if any
        if (this.lazyLoadObserver) {
            this.lazyLoadObserver.disconnect();
        }
        // Create new IntersectionObserver
        this.lazyLoadObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !this.loading) {
                    // Emit event to load more data
                    const currentCount = this.parseData().length;
                    this.lazyLoadMore.emit({ currentCount });
                }
            });
        }, {
            root: null, // viewport
            rootMargin: '100px', // trigger 100px before reaching sentinel
            threshold: 0.1
        });
        this.lazyLoadObserver.observe(element);
    }
    announceToScreenReader(message) {
        if (!this.enhancedAccessibility)
            return;
        // Create or get ARIA live region
        let liveRegion = this.el.shadowRoot?.querySelector('.sr-announcer');
        if (!liveRegion) {
            liveRegion = document.createElement('div');
            liveRegion.className = 'sr-announcer';
            liveRegion.setAttribute('aria-live', 'polite');
            liveRegion.setAttribute('aria-atomic', 'true');
            liveRegion.setAttribute('role', 'status');
            this.el.shadowRoot?.appendChild(liveRegion);
        }
        // Clear and set message
        liveRegion.textContent = '';
        setTimeout(() => {
            liveRegion.textContent = message;
        }, 100);
    }
    // ========== AGGREGATION LOGIC ==========
    calculateAggregations(data) {
        const results = {};
        this.getVisibleColumns().forEach(col => {
            if (col.aggregation && col.aggregation.length > 0) {
                results[col.id] = {};
                col.aggregation.forEach(type => {
                    const values = data.map(row => row[col.field]).filter(v => v !== null && v !== undefined && v !== '');
                    switch (type) {
                        case 'sum':
                            results[col.id]['sum'] = values.reduce((a, b) => Number(a) + Number(b), 0);
                            break;
                        case 'avg':
                            const sum = values.reduce((a, b) => Number(a) + Number(b), 0);
                            results[col.id]['avg'] = values.length > 0 ? sum / values.length : 0;
                            break;
                        case 'min':
                            if (col.type === 'date' || (col.id && col.id.toLowerCase().includes('date'))) {
                                values.sort();
                                results[col.id]['min'] = values[0];
                            }
                            else {
                                results[col.id]['min'] = Math.min(...values.map(v => Number(v)));
                            }
                            break;
                        case 'max':
                            if (col.type === 'date' || (col.id && col.id.toLowerCase().includes('date'))) {
                                values.sort();
                                results[col.id]['max'] = values[values.length - 1];
                            }
                            else {
                                results[col.id]['max'] = Math.max(...values.map(v => Number(v)));
                            }
                            break;
                        case 'count':
                            results[col.id]['count'] = values.length;
                            break;
                    }
                });
            }
        });
        return results;
    }
    renderAggregationFooter() {
        const data = this.getProcessedData();
        const aggregations = this.calculateAggregations(data);
        const hasAggregations = Object.keys(aggregations).length > 0;
        if (!hasAggregations)
            return null;
        return (h("tfoot", { class: "data-table-footer" }, h("tr", null, (this.selectable || this.multiSelect) && h("td", null), this.rowDetails && h("td", null), this.getVisibleColumns().map(col => {
            const agg = aggregations[col.id];
            const isPinnedLeft = this.pinnedColumns.left.includes(col.id);
            const isPinnedRight = this.pinnedColumns.right.includes(col.id);
            return (h("td", { class: {
                    'pinned-left': isPinnedLeft,
                    'pinned-right': isPinnedRight
                }, style: {
                    position: (isPinnedLeft || isPinnedRight) ? 'sticky' : undefined,
                    left: isPinnedLeft ? this.getPinnedOffset(col.id, 'left') : undefined,
                    right: isPinnedRight ? this.getPinnedOffset(col.id, 'right') : undefined,
                    zIndex: (isPinnedLeft || isPinnedRight) ? '3' : undefined,
                    textAlign: col.align || 'left'
                } }, agg && Object.entries(agg).map(([key, value]) => (h("div", { class: "agg-item" }, h("span", { class: "agg-label" }, key, ":"), h("span", { class: "agg-value" }, col.format && typeof value === 'number' ? col.format(value) : value))))));
        }))));
    }
    renderSkeletonRows(columns) {
        return Array.from({ length: this.skeletonRows }, (_, rowIndex) => (h("tr", { key: `skeleton-${rowIndex}`, class: "skeleton-row" }, this.selectable && (h("td", { class: "skeleton-cell" }, h("ui-skeleton", { shape: "square", size: "sm", width: "16px", height: "16px" }))), columns.map(col => (h("td", { key: `skeleton-${rowIndex}-${col.id}`, class: "skeleton-cell" }, h("ui-skeleton", { shape: "text", animationType: "wave", width: `${30 + Math.random() * 40}%` })))))));
    }
    getPinnedOffset(columnId, side) {
        const visibleColumns = this.getVisibleColumns();
        const isPinned = (col) => side === 'left' ? this.pinnedColumns.left.includes(col.id) : this.pinnedColumns.right.includes(col.id);
        const pinnedCols = visibleColumns.filter(col => isPinned(col));
        const index = pinnedCols.findIndex(col => col.id === columnId);
        if (index <= 0)
            return '0px';
        let offset = 0;
        for (let i = 0; i < index; i++) {
            const colId = pinnedCols[i].id;
            const width = this.state.columnWidths.get(colId) || 150; // Default width assumption
            offset += width;
        }
        return `${offset}px`;
    }
    renderColumnHeader(column, rowSpan = 1) {
        if (column.children && column.children.length > 0) {
            return (h("th", { class: "column-group", colSpan: this.getLeafColumnCount(column), style: { textAlign: column.align || 'left' } }, h("div", { class: "column-header-content" }, h("span", null, column.label))));
        }
        const isSorted = this.state.sortConfig.field === column.field;
        const sortDirection = isSorted ? this.state.sortConfig.direction : null;
        const columnWidth = this.state.columnWidths.get(column.id);
        return (h("th", { rowSpan: rowSpan > 1 ? rowSpan : undefined, class: {
                'sortable': this.sortable && column.sortable !== false,
                'sorted': isSorted,
                'sticky-column': column.sticky || this.pinnedColumns.left.includes(column.id) || this.pinnedColumns.right.includes(column.id),
                'resizing': this.resizingColumn === column.id,
                'pinned-left': this.pinnedColumns.left.includes(column.id),
                'pinned-right': this.pinnedColumns.right.includes(column.id),
            }, style: {
                width: columnWidth ? `${columnWidth}px` : (column.width || 'auto'),
                minWidth: column.minWidth,
                textAlign: column.align || 'left',
                position: (column.sticky || this.pinnedColumns.left.includes(column.id) || this.pinnedColumns.right.includes(column.id)) ? 'sticky' : 'relative',
                left: this.pinnedColumns.left.includes(column.id) ? this.getPinnedOffset(column.id, 'left') : undefined,
                right: this.pinnedColumns.right.includes(column.id) ? this.getPinnedOffset(column.id, 'right') : undefined,
                zIndex: (column.sticky || this.pinnedColumns.left.includes(column.id) || this.pinnedColumns.right.includes(column.id)) ? '30' : undefined
            } }, h("div", { class: "column-header-content" }, this.columnReorder && (h("span", { class: "drag-handle", draggable: true, onDragStart: (e) => this.handleColumnDragStart(column.id, e), onDragOver: (e) => this.handleColumnDragOver(e), onDrop: (e) => this.handleColumnDrop(column.id, e), title: "Drag to reorder" }, h("ui-icon", { name: "grip-vertical", library: "lucide", size: "1.2em" }))), h("span", { class: "column-label", onClick: (e) => column.sortable !== false && this.handleMultiSort(column.field || column.id, e) }, (this.pinnedColumns.left.includes(column.id) || this.pinnedColumns.right.includes(column.id)) && (h("ui-icon", { name: "pin", library: "lucide", size: "14px", class: "pin-indicator" })), column.label), this.sortable && column.sortable !== false && (() => {
            // Multi-sort indicator
            if (this.multiSort) {
                const sortIndex = this.multiSortConfig.findIndex(s => s.field === (column.field || column.id));
                if (sortIndex >= 0) {
                    const sort = this.multiSortConfig[sortIndex];
                    return (h("span", { class: "sort-icon multi-sort" }, h("ui-icon", { name: sort.direction === 'asc' ? 'arrow-up' : 'arrow-down', library: "lucide", size: "14px" }), h("span", { class: "sort-order-badge" }, sortIndex + 1)));
                }
                return h("ui-icon", { name: "arrow-up-down", library: "lucide", size: "14px", class: "sort-icon" });
            }
            // Single sort indicator
            return (h("span", { class: "sort-icon" }, !isSorted && h("ui-icon", { name: "arrow-up-down", library: "lucide", size: "14px" }), isSorted && h("ui-icon", { name: sortDirection === 'asc' ? 'arrow-up' : 'arrow-down', library: "lucide", size: "14px" })));
        })(), h("ui-button", { variant: "ghost", class: "header-menu-trigger", onClick: (e) => this.handleHeaderContextMenu(e, column), ariaLabel: "Column options", icon: "more-vertical", iconLibrary: "lucide", iconOnly: true, size: "sm" })), this.filterable && column.filterable !== false && (h("div", { class: "column-filter" }, h("ui-input", { type: "text", placeholder: `Filter ${column.label}...`, value: this.state.filterConfig[column.field || column.id] || '', onInputChange: (e) => this.handleFilter(column.field || column.id, e.detail), onClick: (e) => e.stopPropagation(), size: "sm", variant: "outlined" }))), h("div", { class: "resize-handle", onMouseDown: (e) => this.handleResizeStart(column.id, e), onClick: (e) => e.stopPropagation() })));
    }
    renderTableHeaders() {
        const columns = this.parseColumns();
        const hasMultiLevel = columns.some(col => col.children && col.children.length > 0);
        if (!hasMultiLevel) {
            return (h("tr", null, this.selectable && (h("th", { class: "select-column" }, this.multiSelect && (h("ui-checkbox", { checked: this.state.selectedRows.size === this.getProcessedData().length, onCheckboxChange: (e) => this.handleSelectAll(e), ariaLabel: "Select all rows", size: "sm" })))), this.getVisibleColumns().map(col => this.renderColumnHeader(col)), this.showActions && (h("th", { class: "actions-column" }, "Actions")), this.rowDetails && (h("th", { class: "row-details-column" }, "Details"))));
        }
        // Multi-level headers
        const headerRows = [];
        const maxDepth = this.getMaxColumnDepth(columns);
        for (let depth = 0; depth < maxDepth; depth++) {
            headerRows.push(h("tr", null, depth === 0 && this.selectable && (h("th", { class: "select-column", rowSpan: maxDepth }, this.multiSelect && (h("ui-checkbox", { checked: this.state.selectedRows.size === this.getProcessedData().length, onCheckboxChange: (e) => this.handleSelectAll(e), ariaLabel: "Select all rows", size: "sm" })))), this.renderHeaderLevel(columns, depth, 0, maxDepth), depth === 0 && this.showActions && (h("th", { class: "actions-column", rowSpan: maxDepth }, "Actions")), depth === 0 && this.rowDetails && (h("th", { class: "row-details-column", rowSpan: maxDepth }, "Details"))));
        }
        return headerRows;
    }
    getMaxColumnDepth(columns) {
        let maxDepth = 1;
        const checkDepth = (cols, currentDepth) => {
            cols.forEach(col => {
                if (col.children && col.children.length > 0) {
                    maxDepth = Math.max(maxDepth, currentDepth + 1);
                    checkDepth(col.children, currentDepth + 1);
                }
            });
        };
        checkDepth(columns, 1);
        return maxDepth;
    }
    renderHeaderLevel(columns, targetDepth, currentDepth = 0, maxDepth = 1) {
        const result = [];
        columns.forEach(col => {
            const isGroup = col.children && col.children.length > 0;
            const isVisible = isGroup ? this.getLeafColumnCount(col) > 0 : this.state.visibleColumns.has(col.id);
            if (!isVisible)
                return;
            if (currentDepth === targetDepth) {
                const rowSpan = isGroup ? 1 : maxDepth - currentDepth;
                result.push(this.renderColumnHeader(col, rowSpan));
            }
            else if (isGroup) {
                result.push(...this.renderHeaderLevel(col.children, targetDepth, currentDepth + 1, maxDepth));
            }
        });
        return result;
    }
    renderCell(row, column) {
        const isEditing = this.state.editingCell?.rowId === row.id &&
            this.state.editingCell?.field === column.field;
        const value = column.field ? row[column.field] : '';
        // Determine content based on mode
        let content;
        if (this.editable && column.editable !== false) {
            // Use advanced cell editors if enabled
            content = this.advancedCellEditors
                ? this.renderAdvancedCellEditor(row, column, value)
                : this.renderEditableCell(row, column, value);
        }
        else if (isEditing && column.editable !== false) {
            content = this.advancedCellEditors
                ? this.renderAdvancedCellEditor(row, column, value)
                : this.renderEditableCell(row, column, value);
        }
        else {
            // Use column formatting for display
            const formattedValue = this.columnFormatting
                ? this.formatCellValue(value, column)
                : this.renderDisplayCell(row, column, value);
            content = formattedValue;
        }
        // Handle Tree Data Indentation for the first visible column
        const visibleCols = this.getVisibleColumns();
        const isFirstColumn = visibleCols.length > 0 && visibleCols[0].id === column.id;
        if (this.treeData && isFirstColumn) {
            const depth = row._depth || 0;
            const hasChildren = row._hasChildren;
            const isExpanded = this.state.expandedRows.has(row.id);
            const indentation = depth * 24; // 24px per level
            return (h("div", { class: "cell-content-wrapper", style: { display: 'flex', alignItems: 'center' } }, h("span", { style: { paddingLeft: `${indentation}px` } }), hasChildren ? (h("span", { class: "tree-toggle-icon", onClick: (e) => this.toggleRowExpansion(row.id, e), style: {
                    cursor: 'pointer',
                    marginRight: '8px',
                    display: 'inline-block',
                    width: '16px',
                    textAlign: 'center',
                    userSelect: 'none'
                } }, h("ui-icon", { name: isExpanded ? 'chevron-down' : 'chevron-right', library: "lucide", size: "14px" }))) : (h("span", { style: { display: 'inline-block', width: '24px' } }) // Spacer for alignment
            ), h("div", { class: "cell-inner-content", style: { flex: '1' } }, content)));
        }
        // Handle Column Reorder alignment spacer for standard cells
        if (this.columnReorder && (!column.align || column.align === 'left')) {
            return (h("div", { class: "cell-content-wrapper", style: { display: 'flex', alignItems: 'center' } }, h("span", { class: "drag-handle-spacer", style: { width: '22px', flexShrink: '0' } }), h("div", { class: "cell-inner-content", style: { flex: '1' } }, content)));
        }
        return content;
    }
    getLeafColumnCount(column) {
        if (!column.children || column.children.length === 0)
            return 1;
        let count = 0;
        column.children.forEach(child => {
            if (child.children && child.children.length > 0) {
                count += this.getLeafColumnCount(child);
            }
            else if (this.state.visibleColumns.has(child.id)) {
                count += 1;
            }
        });
        return count;
    }
    renderEditableCell(row, column, value) {
        // Only clear editing state on blur if table is not in global editable mode
        const handleBlur = () => {
            if (!this.editable) {
                this.state = { ...this.state, editingCell: null };
            }
        };
        const handleKeyDown = (e, inputEl) => {
            if (e.key === 'Enter') {
                this.handleCellEdit(row.id, column.field, inputEl.value);
            }
            else if (e.key === 'Escape') {
                if (!this.editable) {
                    handleBlur();
                }
            }
        };
        switch (column.type) {
            case 'select':
                return (h("select", { ref: (el) => {
                        if (el) {
                            this.editInputRef = el;
                            el.value = value;
                        }
                    }, onChange: (e) => this.handleCellEdit(row.id, column.field, e.target.value), onBlur: handleBlur, class: "cell-select" }, column.selectOptions?.map(opt => (h("option", { value: opt.value, selected: opt.value === value }, opt.label)))));
            case 'radio':
                return (h("div", { class: "cell-radio-group" }, column.radioOptions?.map(opt => (h("label", { class: "radio-label" }, h("ui-radio", { name: `${row.id}-${column.field}`, value: opt.value, checked: opt.value === value, onRadioChange: (e) => this.handleCellEdit(row.id, column.field, e.detail.value), label: opt.label, size: "sm" }))))));
            case 'checkbox':
                return (h("ui-checkbox", { ref: (el) => (this.editInputRef = el), checked: value === true || value === 'true', onCheckboxChange: (e) => this.handleCellEdit(row.id, column.field, e.detail.checked), onCheckboxBlur: handleBlur, size: "sm" }));
            case 'switch':
                return (h("ui-switch", { checked: value === true || value === 'true', onSwitchChange: (e) => this.handleCellEdit(row.id, column.field, e.detail.checked), size: "sm" }));
            case 'rating':
                const maxRating = column.maxRating || 5;
                const currentRating = Number(value) || 0;
                return (h("div", { class: "cell-rating" }, Array.from({ length: maxRating }, (_, i) => i + 1).map(star => (h("span", { class: { 'star': true, 'filled': star <= currentRating }, onClick: () => this.handleCellEdit(row.id, column.field, star) }, h("ui-icon", { name: "star", library: "lucide", size: "1.2em", color: star <= currentRating ? '#ffc107' : '#bdbdbd' }))))));
            case 'date':
            case 'time':
            case 'datetime':
            case 'password':
            case 'email':
                return (h("ui-input", { ref: (el) => (this.editInputRef = el), type: column.type === 'datetime' ? 'datetime-local' : column.type, value: value, onInputChange: (e) => this.handleCellEdit(row.id, column.field, e.detail), onInputBlur: handleBlur, onInputKeydown: (e) => handleKeyDown(e.detail, e.target), customClass: "cell-input", variant: "plain", size: "sm" }));
            case 'url':
                return (h("ui-input", { ref: (el) => (this.editInputRef = el), type: column.type === 'number' ? 'number' : column.type === 'tel' ? 'tel' : column.type === 'url' ? 'url' : 'text', value: value, onInputChange: (e) => this.handleCellEdit(row.id, column.field, e.detail), onInputBlur: handleBlur, onInputKeydown: (e) => handleKeyDown(e.detail, e.target), customClass: "cell-input", variant: "plain", size: "sm" }));
        }
    }
    renderDisplayCell(row, column, value) {
        // Handle custom render function
        if (column.render) {
            return (h("span", { class: { 'editable-cell': this.editable && column.editable !== false }, onDblClick: () => this.editable && column.editable !== false && this.startCellEdit(row.id, column.field) }, column.render(value, row, 0)));
        }
        // Handle Sparklines (Phase 2)
        if (this.enableSparklines && Array.isArray(value) && value.length > 0 && typeof value[0] === 'number') {
            return this.renderSparkline(value);
        }
        // Handle different display types
        let displayContent;
        switch (column.type) {
            case 'checkbox':
            case 'boolean':
                displayContent = (h("span", { class: "cell-boolean" }, h("ui-icon", { name: value ? 'check' : 'x', library: "lucide", size: "1.2em", color: value ? '#4caf50' : '#f44336' })));
                break;
            case 'switch':
                displayContent = h("ui-switch", { checked: !!value, readonly: true, size: "sm" });
                break;
            case 'rating':
                displayContent = h("ui-rating", { value: Number(value) || 0, max: column.maxRating || 5, readonly: true, size: "sm" });
                break;
            case 'image':
                const imageStyle = column.imageStyle || {};
                displayContent = value ? (h("img", { src: value, alt: "Cell image", class: "cell-image", style: {
                        width: imageStyle.width || '40px',
                        height: imageStyle.height || '40px',
                        borderRadius: imageStyle.borderRadius || '4px',
                    } })) : null;
                break;
            case 'password':
                displayContent = h("span", { class: "cell-password" }, '•'.repeat(value?.length || 8));
                break;
            case 'date':
                displayContent = value ? new Date(value).toLocaleDateString() : '';
                break;
            case 'datetime':
                displayContent = value ? new Date(value).toLocaleString() : '';
                break;
            case 'time':
                displayContent = value;
                break;
            case 'email':
                displayContent = h("a", { href: `mailto:${value}`, class: "cell-link" }, value);
                break;
            case 'url':
                displayContent = h("a", { href: value, target: "_blank", rel: "noopener noreferrer", class: "cell-link" }, value);
                break;
            case 'tel':
                displayContent = h("a", { href: `tel:${value}`, class: "cell-link" }, value);
                break;
            default:
                displayContent = column.format ? column.format(value) : value;
        }
        return (h("span", { class: { 'editable-cell': this.editable && column.editable !== false }, onDblClick: () => this.editable && column.editable !== false && this.startCellEdit(row.id, column.field) }, displayContent));
    }
    /**
     * Render row actions menu (3-dot menu)
     */
    renderRowActions(row) {
        const isOpen = this.activeActionMenu === row.id;
        const defaultActions = [
            { label: 'Edit', value: 'edit', icon: '✏️' },
            { label: 'Delete', value: 'delete', icon: '🗑️' },
        ];
        const actions = this.customActions || defaultActions;
        return (h("div", { class: "row-actions-container" }, h("ui-button", { variant: "ghost", class: "row-actions-trigger", onClick: (e) => {
                e.stopPropagation();
                this.activeActionMenu = isOpen ? null : row.id;
            }, ariaLabel: "Row actions", icon: "more-vertical", iconLibrary: "lucide", iconOnly: true, size: "sm" }), isOpen && (h("div", { class: "row-actions-menu" }, actions.map(action => (h("ui-button", { key: action.value, variant: "ghost", class: "row-action-item", onClick: (e) => {
                e.stopPropagation();
                this.handleRowAction(row, action.value);
            }, icon: action.icon, iconLibrary: action.iconLibrary || this.iconLibrary, label: action.label, size: "sm", block: true, align: "start" })))))));
    }
    /**
     * Handle row action
     */
    handleRowAction(row, action) {
        this.activeActionMenu = null; // Close menu
        if (action === 'edit') {
            this.rowEdit.emit({ row });
        }
        else if (action === 'delete') {
            this.rowDelete.emit({ row });
        }
        else {
            this.rowAction.emit({ row, action });
        }
    }
    renderGroupedRows(data, columns) {
        const groups = this.groupData(data, this.state.groupBy);
        const rows = [];
        groups.forEach((groupRows, groupKey) => {
            const isExpanded = this.state.expandedGroups.has(groupKey);
            const groupCount = groupRows.length;
            // Render group header row
            rows.push(h("tr", { class: "group-header-row", key: `group-${groupKey}`, role: "row", "aria-expanded": isExpanded }, h("td", { colSpan: columns.length + (this.selectable ? 1 : 0) + (this.showActions ? 1 : 0), class: "group-header-cell", onClick: () => this.handleGroupToggle(groupKey), role: "button", tabIndex: 0, onKeyDown: (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        this.handleGroupToggle(groupKey);
                    }
                }, "aria-label": `${isExpanded ? 'Collapse' : 'Expand'} group ${groupKey}` }, h("div", { class: "group-header-content" }, h("span", { class: "group-expand-icon" }, h("ui-icon", { name: isExpanded ? 'chevron-down' : 'chevron-right', library: "lucide", size: "14px" })), h("span", { class: "group-label" }, groupKey), this.showGroupCount && (h("span", { class: "group-count" }, "(", groupCount, " ", groupCount === 1 ? 'item' : 'items', ")"))))));
            // Only render group rows when expanded - rows are completely hidden when collapsed
            if (isExpanded) {
                groupRows.forEach((row, rowIndex) => {
                    rows.push(h("tr", { class: {
                            'group-data-row': true,
                            'selected': this.state.selectedRows.has(row.id),
                        }, key: row.id, role: "row", "data-group": groupKey, "aria-label": `Row ${rowIndex + 1} in group ${groupKey}` }, this.selectable && (h("td", { class: "select-column", role: "cell" }, h("ui-checkbox", { checked: this.state.selectedRows.has(row.id), onCheckboxChange: (e) => this.handleRowSelect(row.id, e.detail), ariaLabel: `Select row ${rowIndex + 1}`, size: "sm" }))), columns.map(col => (h("td", { key: col.id, class: {
                            'sticky-column': !!col.sticky,
                            'focused-cell': this.state.focusedCell?.rowId === row.id && this.state.focusedCell?.field === col.field,
                            'pinned-left': this.pinnedColumns.left.includes(col.id),
                            'pinned-right': this.pinnedColumns.right.includes(col.id)
                        }, style: { textAlign: col.align || 'left' }, role: "cell", "data-row-id": row.id, "data-field": col.field, tabIndex: 0, onFocus: () => this.setFocusedCell(row.id, col.field) }, this.renderCell(row, col)))), this.showActions && (h("td", { class: "actions-column", role: "cell" }, this.renderRowActions(row))), this.rowDetails && (h("td", { class: "row-details-toggle-cell", role: "cell" }, h("ui-button", { variant: "ghost", size: "sm", onClick: () => this.toggleRowDetails(row.id), ariaLabel: "Toggle row details", icon: this.expandedRowDetails.has(row.id) ? 'chevron-down' : 'chevron-right', iconLibrary: "lucide", iconOnly: true, iconSize: "1.2em" })))));
                    if (this.rowDetails && this.expandedRowDetails.has(row.id)) {
                        rows.push(this.renderRowDetailsPanel(row));
                    }
                });
            }
        });
        return rows;
    }
    // ========== PREMIUM UI RENDER METHODS ==========
    renderRowDetailsPanel(row) {
        if (!this.rowDetails || !this.expandedRowDetails.has(row.id))
            return null;
        const columns = this.getVisibleColumns();
        const colSpan = columns.length +
            (this.selectable ? 1 : 0) +
            (this.rowReorder ? 1 : 0) +
            (this.showActions ? 1 : 0);
        return (h("tr", { key: `${row.id}-details`, class: "row-details-row" }, h("td", { colSpan: colSpan }, h("div", { class: "row-details-panel" }, h("div", { class: "details-header" }, h("h4", null, "Row Details"), h("ui-button", { variant: "ghost", onClick: () => this.toggleRowDetails(row.id), icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm" })), h("div", { class: "details-content" }, Object.entries(row).map(([key, value]) => (h("div", { key: key, class: "detail-item" }, h("strong", { class: "detail-label" }, key, ":"), h("span", { class: "detail-value" }, String(value))))))))));
    }
    renderKeyboardShortcutsModal() {
        if (!this.showKeyboardShortcutsHelp)
            return null;
        return (h("div", { class: "keyboard-shortcuts-modal", onClick: () => this.showKeyboardShortcutsHelp = false }, h("div", { class: "modal-content", onClick: (e) => e.stopPropagation() }, h("div", { class: "modal-header" }, h("h3", null, "Keyboard Shortcuts"), h("ui-button", { variant: "ghost", icon: "x", iconLibrary: "lucide", iconOnly: true, size: "sm", onClick: () => this.showKeyboardShortcutsHelp = false })), h("div", { class: "modal-body" }, h("table", { class: "shortcuts-table" }, h("tbody", null, h("tr", null, h("td", { class: "shortcut-key" }, "Ctrl + F"), h("td", { class: "shortcut-desc" }, "Focus search")), h("tr", null, h("td", { class: "shortcut-key" }, "Ctrl + A"), h("td", { class: "shortcut-desc" }, "Select all rows")), h("tr", null, h("td", { class: "shortcut-key" }, "Ctrl + E"), h("td", { class: "shortcut-desc" }, "Export data")), h("tr", null, h("td", { class: "shortcut-key" }, "Ctrl + Click"), h("td", { class: "shortcut-desc" }, "Multi-column sort")), h("tr", null, h("td", { class: "shortcut-key" }, "Shift + ?"), h("td", { class: "shortcut-desc" }, "Show this help")), h("tr", null, h("td", { class: "shortcut-key" }, "Arrow Keys"), h("td", { class: "shortcut-desc" }, "Navigate cells"))))))));
    }
    // ========== PHASE 2 RENDER METHODS ==========
    renderSparkline(data) {
        if (data.length < 2)
            return data.join(', ');
        const width = 100;
        const height = 20;
        const min = Math.min(...data);
        const max = Math.max(...data);
        const range = max - min || 1;
        const points = data.map((val, i) => {
            const x = (i / (data.length - 1)) * width;
            const y = height - ((val - min) / range) * height;
            return `${x},${y}`;
        }).join(' ');
        return (h("svg", { width: width, height: height, class: "sparkline", style: { display: 'block' } }, h("polyline", { points: points, fill: "none", stroke: "currentColor", "stroke-width": "1.5" })));
    }
    renderContextMenu() {
        if (!this.contextMenuState.visible)
            return null;
        const { x, y, type, target } = this.contextMenuState;
        const style = { top: `${y}px`, left: `${x}px`, position: 'fixed', zIndex: '1000' };
        if (type === 'header') {
            const col = target;
            const isPinnedLeft = this.pinnedColumns.left.includes(col.id);
            const isPinnedRight = this.pinnedColumns.right.includes(col.id);
            return (h("div", { class: "context-menu header-context-menu", style: style }, h("div", { class: "context-menu-header" }, col.label, " Options"), h("ul", null, h("li", { onClick: () => this.handleSort(col.field || col.id) }, this.state.sortConfig.field === (col.field || col.id) && this.state.sortConfig.direction === 'asc' ? h("span", null, h("ui-icon", { name: "check", library: "lucide", size: "1.2em" }), " Sort Decending") : 'Sort Ascending'), h("li", { class: "divider" }), h("li", { class: "has-submenu" }, "Pin Column", h("ul", { class: "submenu" }, h("li", { onClick: () => this.toggleColumnPin(col.id, 'left') }, isPinnedLeft && h("ui-icon", { name: "check", library: "lucide", size: "1.2em" }), "Pin to Left"), h("li", { onClick: () => this.toggleColumnPin(col.id, 'right') }, isPinnedRight && h("ui-icon", { name: "check", library: "lucide", size: "1.2em" }), "Pin to Right"), h("li", { onClick: () => this.toggleColumnPin(col.id, 'none') }, !isPinnedLeft && !isPinnedRight && h("ui-icon", { name: "check", library: "lucide", size: "1.2em" }), "No Pin"))), h("li", { onClick: () => this.toggleColumnVisibility(col.id) }, "Hide Column"), h("li", { class: "divider" }), h("li", { onClick: () => { this.handleFilter(col.field || col.id, ''); this.contextMenuState = { ...this.contextMenuState, visible: false }; } }, "Clear Column Filter"))));
        }
        return (h("div", { class: "context-menu", style: style }, h("ul", null, h("li", { onClick: () => this.handleContextAction('copy') }, "Copy"), type === 'row' && h("li", { onClick: () => this.handleContextAction('delete') }, "Delete Row"), type === 'cell' && h("li", { onClick: () => this.handleContextAction('edit') }, "Edit Cell"), h("li", { class: "divider" }), h("li", { onClick: () => this.handleContextAction('export') }, "Export Row"))));
    }
    handleContextAction(action) {
        const { target, type } = this.contextMenuState;
        if (action === 'copy') {
            let text = '';
            if (type === 'cell') {
                text = String(target.value || '');
            }
            else if (type === 'row') {
                text = JSON.stringify(target);
            }
            if (text) {
                navigator.clipboard.writeText(text).catch(err => console.error('Copy failed', err));
            }
        }
        else if (action === 'edit' && type === 'cell') {
            this.startCellEdit(target.rowId, target.field);
        }
        this.contextMenuState = { ...this.contextMenuState, visible: false };
    }
    renderMobileCards(data) {
        const columns = this.getVisibleColumns();
        return (h("div", { class: "mobile-cards-view" }, data.map(row => (h("div", { class: "mobile-card", key: row.id }, h("div", { class: "card-header" }, this.selectable && (h("ui-checkbox", { checked: this.state.selectedRows.has(row.id), onCheckboxChange: (e) => this.handleRowSelect(row.id, e.detail), size: "sm" })), h("span", { class: "card-title" }, "Row #", row.id), this.showActions && h("div", { class: "card-actions" }, this.renderRowActions(row))), h("div", { class: "card-body" }, columns.map(col => (h("div", { class: "card-field", key: col.id }, h("label", null, col.label || col.field), h("div", { class: "card-value" }, this.renderCell(row, col))))))))), this.renderLazyLoadSentinel()));
    }
    renderLazyLoadSentinel() {
        if (!this.lazyLoad)
            return null;
        // Sentinel for IntersectionObserver
        return (h("div", { class: "lazy-load-sentinel", ref: (el) => {
                if (el)
                    this.setupLazyLoadObserver(el);
            }, style: { height: '20px', textAlign: 'center', padding: '10px' } }, this.loading ? 'Loading more...' : ''));
    }
    renderValidationError(rowId, field) {
        if (!this.advancedValidation)
            return null;
        const rowKey = String(rowId);
        const error = this.validationErrors.get(rowKey)?.get(field);
        if (!error)
            return null;
        return (h("div", { class: "validation-error-tooltip" }, h("ui-icon", { name: "alert-triangle", library: "lucide", size: "14px", class: "error-icon", color: "#f44336" }), h("span", { class: "error-message" }, error)));
    }
    renderPagination() {
        if (!this.pagination)
            return null;
        const { currentPage, pageSize, totalRows } = this.state.pagination;
        return (h("div", { class: "pagination-container" }, h("ui-pagination", { "total-items": totalRows, "items-per-page": pageSize, "current-page": currentPage, "show-first-last": true, "show-page-size": true, "show-total": true, "page-size-options": JSON.stringify(this.parsePageSizeOptions()), theme: this.paginationTheme, shape: this.paginationShape, "keyboard-nav": this.paginationKeyboardNav, "quick-jump": this.paginationQuickJump, "quick-jump-step": this.paginationQuickJumpStep, "show-progress": this.paginationShowProgress, sticky: this.paginationSticky, "sticky-position": this.paginationStickyPosition, "page-transition": this.paginationTransitions, "url-sync": this.paginationUrlSync, "url-param": this.paginationUrlParam, "persist-page": this.paginationPersistPage, "storage-key": this.paginationStorageKey, "swipe-gestures": this.paginationSwipeGestures, "smart-compact": this.paginationSmartCompact, "smart-compact-threshold": this.paginationSmartCompactThreshold, "auto-hide": this.paginationAutoHide, "responsive-mode": this.paginationResponsive, "mobile-breakpoint": this.paginationMobileBreakpoint, onPageChange: (e) => this.handlePaginationChange(e), onItemsPerPageChange: (e) => this.handlePageSizeChangeFromPagination(e) })));
    }
    renderToolbar() {
        return (h("div", { class: "table-toolbar" }, h("div", { class: "toolbar-left" }, this.searchable && (h("div", { class: "search-box" }, h("ui-input", { type: "text", placeholder: "Search...", value: this.state.searchQuery, onInputChange: (e) => this.handleSearch(e.detail), ariaLabel: "Search table", size: "sm", prefixIcon: "search", variant: "outlined" }))), this.grouping && this.renderGroupingSelector()), h("div", { class: "toolbar-right" }, this.filterable && (h("ui-button", { variant: "ghost", size: "sm", icon: "filter", iconLibrary: "lucide", iconSize: "1.1em", label: "Filters", ariaLabel: "Filter panel", onClick: () => this.showFilterPanel = !this.showFilterPanel, "data-expanded": this.showFilterPanel })), this.columnVisibility && (h("ui-button", { variant: "ghost", size: "sm", icon: "settings", iconLibrary: "lucide", iconSize: "1.1em", label: "Columns", ariaLabel: "Column settings", onClick: () => this.showColumnSettings = !this.showColumnSettings, "data-expanded": this.showColumnSettings })), this.exportable && (h("ui-button", { variant: "ghost", size: "sm", icon: "download", iconLibrary: "lucide", iconSize: "1.1em", label: "Export", ariaLabel: "Export data", onClick: () => this.showExportDialog = !this.showExportDialog })), h("ui-button", { variant: "ghost", size: "sm", icon: "refresh-cw", iconLibrary: "lucide", iconSize: "1.1em", label: "Refresh", ariaLabel: "Refresh table", onClick: () => this.refresh() }))));
    }
    renderGroupingSelector() {
        const groupableColumns = this.getVisibleColumns().filter(col => col.groupBy !== false);
        if (groupableColumns.length === 0)
            return null;
        return (h("div", { class: "grouping-selector" }, h("label", { htmlFor: "group-by-select" }, "Group by:"), h("select", { id: "group-by-select", onInput: (e) => this.handleGroupByChange(e.target.value), "aria-label": "Group table by column" }, h("option", { value: "", selected: !this.state.groupBy }, "None"), groupableColumns.map(col => (h("option", { value: col.field || col.id, key: col.id, selected: this.state.groupBy === (col.field || col.id) }, col.label))))));
    }
    renderFilterPanel() {
        if (!this.showFilterPanel)
            return null;
        const flatColumns = this.flattenColumns(this.parseColumns());
        const filterableColumns = flatColumns.filter(col => col.filterable !== false);
        const getColumnType = (col) => {
            if (col.type)
                return col.type;
            // Auto-detect from field name
            if (col.field?.includes('date') || col.field?.includes('Date'))
                return 'date';
            if (col.field?.includes('price') || col.field?.includes('salary') || col.field?.includes('amount'))
                return 'number';
            if (col.field?.includes('email'))
                return 'email';
            return 'text';
        };
        const getOperatorsForType = (type) => {
            const commonOps = [
                { value: 'equals', label: 'Equals' },
                { value: 'notEquals', label: 'Not Equals' },
            ];
            if (type === 'number' || type === 'date') {
                return [
                    ...commonOps,
                    { value: 'greaterThan', label: 'Greater Than' },
                    { value: 'lessThan', label: 'Less Than' },
                    { value: 'between', label: 'Between' },
                ];
            }
            if (type === 'text' || type === 'email' || type === 'url') {
                return [
                    ...commonOps,
                    { value: 'contains', label: 'Contains' },
                    { value: 'notContains', label: 'Not Contains' },
                    { value: 'startsWith', label: 'Starts With' },
                    { value: 'endsWith', label: 'Ends With' },
                ];
            }
            return commonOps;
        };
        const selectedColumn = filterableColumns.find(col => col.id === this.filterPanelField);
        const columnType = selectedColumn ? getColumnType(selectedColumn) : 'text';
        const operators = getOperatorsForType(columnType);
        return (h("div", { class: "filter-panel" }, h("div", { class: "filter-panel-header" }, h("h4", null, h("ui-icon", { name: "filter", library: "lucide", size: "1.1em" }), " Advanced Filters"), h("ui-button", { variant: "ghost", size: "sm", icon: "x", iconLibrary: "lucide", iconSize: "1.1em", onClick: () => this.showFilterPanel = false })), h("div", { class: "filter-panel-body" }, h("div", { class: "filter-builder" }, h("div", { class: "filter-row" }, h("select", { class: "filter-field-select", onChange: (e) => {
                this.filterPanelField = e.target.value;
                this.filterPanelValue = '';
            } }, h("option", { value: "", selected: this.filterPanelField === '' }, "Select Column..."), filterableColumns.map(col => (h("option", { value: col.id, selected: this.filterPanelField === col.id }, col.label)))), h("select", { class: "filter-operator-select", onChange: (e) => this.filterPanelOperator = e.target.value, disabled: !this.filterPanelField }, operators.map(op => (h("option", { value: op.value, selected: this.filterPanelOperator === op.value }, op.label)))), h("ui-input", { type: columnType === 'number' ? 'number' : columnType === 'date' ? 'date' : 'text', customClass: "filter-value-input", value: this.filterPanelValue, onInputChange: (e) => this.filterPanelValue = e.detail, placeholder: "Filter value...", disabled: !this.filterPanelField, size: "sm", variant: "outlined" }), h("ui-button", { variant: "ghost", size: "sm", icon: "plus", iconLibrary: "lucide", iconSize: "1.2em", label: "Add", onClick: () => {
                if (this.filterPanelField && this.filterPanelValue) {
                    this.addFilter(this.filterPanelField, this.filterPanelOperator, this.filterPanelValue);
                    this.filterPanelField = '';
                    this.filterPanelValue = '';
                }
            }, disabled: !this.filterPanelField || !this.filterPanelValue }))), h("div", { class: "active-filters" }, h("div", { class: "active-filters-header" }, h("span", null, "Active Filters (", Array.from(this.activeFilters.values()).flat().length, ")"), this.activeFilters.size > 0 && (h("ui-button", { variant: "ghost", size: "sm", label: "Clear All", onClick: () => this.clearAllFilters() }))), h("div", { class: "filter-chips" }, Array.from(this.activeFilters.entries()).map(([field, filters]) => {
            const column = flatColumns.find(col => col.id === field);
            return filters.map((filter, index) => (h("div", { class: "filter-chip" }, h("span", { class: "filter-chip-label" }, h("strong", null, column?.label || field), " ", filter.operator, " \"", filter.value, "\""), h("ui-button", { variant: "ghost", size: "sm", class: "filter-chip-remove", icon: "x", iconLibrary: "lucide", iconSize: "14px", onClick: () => this.removeFilter(field, index) }))));
        }), this.activeFilters.size === 0 && (h("div", { class: "no-filters" }, "No active filters")))))));
    }
    renderColumnSettings() {
        if (!this.showColumnSettings)
            return null;
        const flatColumns = this.flattenColumns(this.parseColumns());
        return (h("div", { class: "column-settings-dialog" }, h("div", { class: "dialog-overlay", onClick: () => this.showColumnSettings = false }), h("div", { class: "dialog-content" }, h("div", { class: "dialog-header" }, h("h3", null, "Column Settings"), h("ui-button", { variant: "ghost", size: "sm", icon: "x", iconLibrary: "lucide", iconSize: "1.2em", onClick: () => this.showColumnSettings = false })), h("div", { class: "dialog-body" }, h("div", { class: "column-list" }, flatColumns.map(col => (h("label", { class: "column-item" }, h("ui-checkbox", { checked: this.state.visibleColumns.has(col.id), onCheckboxChange: () => this.toggleColumnVisibility(col.id), label: col.label, size: "sm" })))))), h("div", { class: "dialog-footer" }, h("ui-button", { variant: "primary", label: "Done", onClick: () => this.showColumnSettings = false })))));
    }
    renderExportDialog() {
        if (!this.showExportDialog)
            return null;
        return (h("div", { class: "export-dialog" }, h("div", { class: "dialog-overlay", onClick: () => this.showExportDialog = false }), h("div", { class: "dialog-content" }, h("div", { class: "dialog-header" }, h("h3", null, "Export Data"), h("ui-button", { variant: "ghost", size: "sm", icon: "x", iconLibrary: "lucide", iconSize: "1.2em", onClick: () => this.showExportDialog = false })), h("div", { class: "dialog-body" }, h("div", { class: "export-options" }, h("ui-button", { variant: "ghost", fullWidth: true, icon: "file-text", iconLibrary: "lucide", iconSize: "1.2em", label: "Export as CSV", onClick: () => this.exportData({ format: 'csv', visibleColumnsOnly: true }) }), h("ui-button", { variant: "ghost", fullWidth: true, icon: "clipboard", iconLibrary: "lucide", iconSize: "1.2em", label: "Export as JSON", onClick: () => this.exportData({ format: 'json', visibleColumnsOnly: true }) }), this.pdfExport && (h("ui-button", { variant: "ghost", fullWidth: true, icon: "book", iconLibrary: "lucide", iconSize: "1.2em", label: "Export as PDF", onClick: () => this.exportToPDF() })), this.state.selectedRows.size > 0 && (h("ui-button", { variant: "ghost", fullWidth: true, icon: "check-circle", iconLibrary: "lucide", iconSize: "1.2em", label: `Export Selected Only (${this.state.selectedRows.size} rows)`, onClick: () => this.exportData({ format: 'csv', selectedOnly: true }) })))))));
    }
    getHostStyles() {
        const styles = {};
        if (this.headerBackground)
            styles['--table-header-bg'] = this.headerBackground;
        if (this.stripedColor)
            styles['--table-striped-bg'] = this.stripedColor;
        if (this.stripedColorDark)
            styles['--table-striped-bg-dark'] = this.stripedColorDark;
        return styles;
    }
    render() {
        const allData = this.getProcessedData();
        const columns = this.getVisibleColumns();
        // Virtual Scrolling Logic
        let displayData = allData;
        let topSpacer = 0;
        let bottomSpacer = 0;
        if (this.virtualScroll) {
            const { start, end } = this.state.virtualVisibleRange;
            // Ensure range is valid
            const safeStart = Math.max(0, start);
            const safeEnd = Math.min(allData.length, end);
            displayData = allData.slice(safeStart, safeEnd);
            topSpacer = safeStart * this.virtualRowHeight;
            bottomSpacer = (allData.length - safeEnd) * this.virtualRowHeight;
        }
        // Mobile View Check (Phase 2)
        if (this.mobileCardView && this.isMobileView) {
            return (h("div", { class: {
                    'data-table-container': true,
                    'mobile-view': true,
                    [`advanced-table-${this.variant}`]: true,
                    [`table-color-${this.color}`]: true,
                    'dark-mode': this.theme === 'dark',
                    [this.rowHeight]: !!this.rowHeight
                }, style: this.getHostStyles() }, this.renderToolbar(), this.renderMobileCards(displayData), this.renderPagination(), this.renderFilterPanel(), this.renderColumnSettings(), this.renderExportDialog(), this.renderKeyboardShortcutsModal(), this.renderContextMenu()));
        }
        return (h("div", { class: {
                'data-table-container': true,
                [`advanced-table-${this.variant}`]: true,
                [`table-color-${this.color}`]: true,
                'dark-mode': this.theme === 'dark',
                [this.rowHeight]: !!this.rowHeight
            }, style: this.getHostStyles() }, this.renderToolbar(), h("div", { class: {
                'table-wrapper': true,
                'virtual-scroll': this.virtualScroll
            }, onScroll: this.virtualScroll ? this.handleVirtualScroll : undefined }, h("table", { class: {
                'data-table': true,
                'sticky-header': this.stickyHeader,
                'striped': this.striped,
                'hoverable': this.hoverable,
                'bordered': this.bordered,
            }, role: "table", "aria-label": "Data table" }, h("thead", null, this.renderTableHeaders()), h("tbody", null, this.loading && this.showSkeleton && this.renderSkeletonRows(columns), this.loading && !this.showSkeleton && (h("tr", null, h("td", { colSpan: columns.length + (this.selectable ? 1 : 0) + (this.showActions ? 1 : 0) + (this.rowDetails ? 1 : 0), class: "loading-cell" }, h("div", { class: "loading-container" }, h("ui-loader", { type: "spinner", size: "2em", color: "primary" }), h("span", null, "Loading..."))))), !this.loading && allData.length === 0 && (h("tr", null, h("td", { colSpan: columns.length + (this.selectable ? 1 : 0) + (this.showActions ? 1 : 0) + (this.rowDetails ? 1 : 0), class: "empty-cell" }, this.emptyMessage))), topSpacer > 0 && (h("tr", { style: { height: `${topSpacer}px` }, role: "presentation" }, h("td", { colSpan: columns.length + (this.selectable ? 1 : 0) + (this.showActions ? 1 : 0), style: { padding: '0', border: 'none' } }))), !this.loading && displayData.length > 0 && this.state.groupBy && this.renderGroupedRows(displayData, columns), !this.loading && displayData.length > 0 && !this.state.groupBy && displayData.map((row, rowIndex) => [
            h("tr", { class: {
                    'selected': this.state.selectedRows.has(row.id),
                    'pinned-row-top': this.pinnedRows.top.includes(row.id),
                    'pinned-row-bottom': this.pinnedRows.bottom.includes(row.id),
                }, key: row.id, role: "row", onContextMenu: (e) => this.handleContextMenu(e, 'row', row), "data-row-id": row.id }, this.selectable && (h("td", { class: "select-column", role: "cell" }, h("ui-checkbox", { checked: this.state.selectedRows.has(row.id), onCheckboxChange: (e) => this.handleRowSelect(row.id, e), ariaLabel: `Select row ${rowIndex + 1}`, size: "sm" }))), columns.map(col => (h("td", { key: col.id, class: {
                    'sticky-column': !!col.sticky,
                    'range-selection-cell': true,
                    'focused-cell': this.state.focusedCell?.rowId === row.id && this.state.focusedCell?.field === col.field,
                    'pinned-left': this.pinnedColumns.left.includes(col.id),
                    'pinned-right': this.pinnedColumns.right.includes(col.id)
                }, style: {
                    textAlign: col.align || 'left',
                    left: this.pinnedColumns.left.includes(col.id) ? this.getPinnedOffset(col.id, 'left') : undefined,
                    right: this.pinnedColumns.right.includes(col.id) ? this.getPinnedOffset(col.id, 'right') : undefined,
                    ...this.getConditionalFormattingStyle(row[col.field], col)
                }, role: "cell", onClick: (e) => this.handleCellClick(row.id, col.field, e), onContextMenu: (e) => this.handleContextMenu(e, 'cell', { rowId: row.id, field: col.field, value: row[col.field] }), "data-row-id": row.id, "data-field": col.field, tabIndex: 0, onFocus: () => this.setFocusedCell(row.id, col.field) }, this.renderCell(row, col), this.renderValidationError(row.id, col.field)))), this.showActions && (h("td", { class: "actions-column", role: "cell" }, this.renderRowActions(row))), this.rowDetails && (h("td", { class: "row-details-toggle-cell", role: "cell" }, h("ui-button", { variant: "ghost", size: "sm", icon: this.expandedRowDetails.has(row.id) ? 'chevron-down' : 'chevron-right', iconLibrary: "lucide", iconSize: "16px", ariaLabel: "Toggle row details", onClick: () => this.toggleRowDetails(row.id) })))),
            this.renderRowDetailsPanel(row)
        ]), bottomSpacer > 0 && (h("tr", { style: { height: `${bottomSpacer}px` }, role: "presentation" }, h("td", { colSpan: 100, style: { padding: '0', border: 'none' } })))), this.columnAggregation && this.renderAggregationFooter()), this.renderLazyLoadSentinel()), this.renderPagination(), this.renderFilterPanel(), this.renderColumnSettings(), this.renderExportDialog(), this.renderKeyboardShortcutsModal(), this.renderContextMenu()));
    }
    static get watchers() { return {
        "data": [{
                "onDataOrColumnsChange": 0
            }],
        "columns": [{
                "onDataOrColumnsChange": 0
            }],
        "pageSize": [{
                "onPageSizeChange": 0
            }],
        "groupBy": [{
                "onGroupByChange": 0
            }],
        "theme": [{
                "onThemeChange": 0
            }]
    }; }
};
AdvancedDataTable.style = advancedDataTableCss();

export { AdvancedDataTable as ui_advanced_data_table };
