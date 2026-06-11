import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';
import { c as calculateUniversalPlacement, g as getTransformedAncestorOffset, b as correctViewportCoordinates } from './dom-BMFah5q3.js';

const workspaceManagerCss = () => `.sr-only.sc-ui-workspace-manager{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only.sc-ui-workspace-manager{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.sc-ui-workspace-manager-h{display:flex;height:100%;width:100%;overflow:hidden}.lm-vertical-nav.sc-ui-workspace-manager{width:50px;background:var(--bg-secondary, #2b2b2b);display:flex;flex-direction:column;align-items:center;padding:0;gap:0;overflow-y:auto;flex-shrink:0}.lm-vertical-nav.lm-vertical-nav-left.sc-ui-workspace-manager{border-right:1px solid var(--border-strong, #3e3e42);box-shadow:2px 0 8px rgba(0, 0, 0, 0.3)}.lm-vertical-nav.lm-vertical-nav-right.sc-ui-workspace-manager{border-left:1px solid var(--border-strong, #3e3e42);box-shadow:-2px 0 8px rgba(0, 0, 0, 0.3)}.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager{width:100%;height:50px;display:flex;flex-direction:column;align-items:center;justify-content:center;cursor:pointer;color:var(--text-muted, #858585);transition:all 0.15s ease;padding:0;position:relative}.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager::before{content:"";position:absolute;top:0;bottom:0;width:2px;background:transparent;transition:background 0.15s ease}.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:24px;margin-bottom:0}.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager .lm-nav-label.sc-ui-workspace-manager{font-size:8px;text-align:center;max-width:100%;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;margin-top:2px;font-weight:400;letter-spacing:0.5px;text-transform:uppercase}.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager:hover{background:var(--bg-secondary, #2d2d30);color:var(--text-standard, #ffffff)}.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager:hover::before{background:var(--bg-secondary, #505050)}.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager:active,.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.active.sc-ui-workspace-manager{background:var(--bg-primary, #1e1e1e);color:var(--text-standard, #ffffff)}.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager:active::before,.lm-vertical-nav.sc-ui-workspace-manager .lm-nav-item.active.sc-ui-workspace-manager::before{background:var(--color-primary, #007acc)}.lm-vertical-nav.lm-vertical-nav-left.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager::before{left:0}.lm-vertical-nav.lm-vertical-nav-right.sc-ui-workspace-manager .lm-nav-item.sc-ui-workspace-manager::before{right:0}.lm-container.sc-ui-workspace-manager{position:relative;width:100%;height:100%;display:flex;flex-direction:column;overflow:hidden}.lm-container.lm-maximized.sc-ui-workspace-manager{background:var(--bg-secondary, #0f172a)}.lm-maximized-panel.sc-ui-workspace-manager{width:100%;height:100%;display:flex;flex-direction:column;background:var(--bg-secondary, #0f172a);overflow:hidden}.lm-maximized-header.sc-ui-workspace-manager{display:flex;align-items:center;justify-content:space-between;background:linear-gradient(135deg, var(--color-primary, #1e3a8a) 0%, var(--color-primary, #10b981) 100%);color:var(--text-standard, #ffffff);padding:8px 12px;border-bottom:1px solid var(--color-primary-hover, #2563eb);flex-shrink:0;min-height:40px;box-shadow:0 2px 8px rgba(0, 0, 0, 0.3)}.lm-maximized-header.sc-ui-workspace-manager .lm-maximized-title.sc-ui-workspace-manager{font-size:16px;font-weight:600}.lm-maximized-header.sc-ui-workspace-manager .lm-maximized-actions.sc-ui-workspace-manager{display:flex;gap:8px}.lm-maximized-header.sc-ui-workspace-manager .lm-maximized-actions.sc-ui-workspace-manager button.sc-ui-workspace-manager{background:rgba(255, 255, 255, 0.2);border:none;color:var(--text-standard, #ffffff);cursor:pointer;padding:6px 10px;border-radius:4px;transition:all 0.2s;font-size:14px}.lm-maximized-header.sc-ui-workspace-manager .lm-maximized-actions.sc-ui-workspace-manager button.sc-ui-workspace-manager:hover{background:rgba(255, 255, 255, 0.3);transform:scale(1.05)}.lm-maximized-header.sc-ui-workspace-manager .lm-maximized-actions.sc-ui-workspace-manager button.sc-ui-workspace-manager i.sc-ui-workspace-manager{pointer-events:none}.lm-maximized-content.sc-ui-workspace-manager{flex:1;overflow:auto;background:var(--bg-secondary, #0f172a);color:var(--text-standard, #e5e7eb)}.lm-maximized-content.sc-ui-workspace-manager::-webkit-scrollbar{width:8px;height:8px}.lm-maximized-content.sc-ui-workspace-manager::-webkit-scrollbar-track{background:var(--bg-primary, #1e293b)}.lm-maximized-content.sc-ui-workspace-manager::-webkit-scrollbar-thumb{background:var(--color-primary, #475569);border-radius:4px}.lm-maximized-content.sc-ui-workspace-manager::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #64748b)}.lm-slot.sc-ui-workspace-manager{width:100%;height:100%;display:flex;flex-direction:column;min-height:0;min-width:0}.lm-region.sc-ui-workspace-manager{display:flex;flex-direction:column;height:100%;width:100%;min-height:0;min-width:0;overflow:visible;position:relative}.lm-region.lm-region-navigation.sc-ui-workspace-manager .lm-region-header.sc-ui-workspace-manager{background:var(--color-primary, #1e3a8a);border-bottom:2px solid var(--color-primary, #10b981)}.lm-region.lm-region-title-only.sc-ui-workspace-manager .lm-region-header.sc-ui-workspace-manager{background:var(--color-primary, #374151);justify-content:center;padding:8px 12px}.lm-region.lm-region-no-header.sc-ui-workspace-manager .lm-region-content.sc-ui-workspace-manager{border-radius:0}.lm-region.lm-region-content-only.sc-ui-workspace-manager{overflow:hidden}.lm-region.lm-region-content-only.sc-ui-workspace-manager .lm-panel-host.sc-ui-workspace-manager{width:100%;height:100%;margin:0;padding:0;border:none;background:transparent}.lm-region.lm-region-header-only.sc-ui-workspace-manager .lm-region-header.sc-ui-workspace-manager{background:var(--bg-primary, #1f2937);padding:6px 12px;border-bottom:2px solid var(--color-primary, #10b981)}.lm-region-title.sc-ui-workspace-manager{flex:1;display:flex;align-items:center;font-weight:600;font-size:14px;color:var(--text-standard, #e5e7eb);padding:0 8px}.lm-navigation-header.sc-ui-workspace-manager{flex:1;display:flex;align-items:center;gap:8px;padding:0 8px}.lm-navigation-title.sc-ui-workspace-manager{font-weight:700;font-size:13px;text-transform:uppercase;letter-spacing:0.5px;color:var(--text-standard, #ffffff)}.lm-region-header.sc-ui-workspace-manager{display:flex;align-items:center;gap:4px;background:var(--bg-primary, #1f2937);color:var(--text-standard, #e5e7eb);padding:2px 6px;border-bottom:1px solid var(--border-default, #374151);flex-shrink:0;min-height:36px;min-width:0;width:100%;overflow:visible;position:relative;z-index:11000;box-shadow:0 1px 3px rgba(0, 0, 0, 0.2)}.lm-tabs-container.sc-ui-workspace-manager{display:flex;align-items:center;gap:4px;background:var(--bg-secondary, #0f172a);padding:0 4px;flex:1;min-width:0;overflow:visible;max-width:100%}.lm-tab-scroll-btn.sc-ui-workspace-manager{display:flex;align-items:center;justify-content:center;width:28px;height:28px;min-width:28px;cursor:pointer;flex-shrink:0;flex-basis:28px;transition:all 0.2s ease}.lm-tab-scroll-btn.sc-ui-workspace-manager:hover{transform:translateY(-1px)}.lm-tab-scroll-btn.sc-ui-workspace-manager:active{transform:scale(0.95)}.lm-tab-scroll-btn.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:12px}.lm-tabs.sc-ui-workspace-manager{display:flex;gap:2px;overflow-x:auto;overflow-y:visible;scrollbar-width:thin;scrollbar-color:var(--text-secondary, #374151) var(--text-primary, #1f2937);flex:1;min-width:0}.lm-tabs.sc-ui-workspace-manager::-webkit-scrollbar{height:6px}.lm-tabs.sc-ui-workspace-manager::-webkit-scrollbar-track{background:var(--bg-primary, #1f2937)}.lm-tabs.sc-ui-workspace-manager::-webkit-scrollbar-thumb{background:var(--color-primary, #374151);border-radius:3px}.lm-tabs.sc-ui-workspace-manager::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #4b5563)}.lm-tab-separator.sc-ui-workspace-manager{width:1px;background:linear-gradient(to bottom, transparent 20%, var(--color-primary, #10b981) 50%, transparent 80%);margin:0 4px;flex-shrink:0;opacity:0.5}.lm-panel-dropdown-wrapper.sc-ui-workspace-manager{position:relative;flex-shrink:0;z-index:1}.lm-panel-list-btn.sc-ui-workspace-manager{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid var(--border-default, #374151);background:var(--bg-primary, #1f2937);color:var(--text-muted, #9ca3af);border-radius:4px;cursor:pointer;flex-shrink:0;transition:all 0.2s ease}.lm-panel-list-btn.sc-ui-workspace-manager:hover{background:var(--color-primary, #374151);color:var(--text-standard, #e5e7eb);border-color:var(--border-dark)}.lm-panel-list-btn.sc-ui-workspace-manager:active{transform:scale(0.95)}.lm-panel-list-btn.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:14px}.lm-panel-dropdown-menu.sc-ui-workspace-manager{position:absolute;top:calc(100% + 4px);right:0;min-width:220px;max-width:320px;max-height:400px;overflow-y:auto;background:var(--bg-primary, #1f2937);border:1px solid var(--border-default, #374151);border-radius:6px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.5);z-index:2;scrollbar-width:thin;scrollbar-color:var(--text-secondary, #4b5563) var(--text-primary, #1f2937)}.lm-panel-dropdown-menu.sc-ui-workspace-manager::-webkit-scrollbar{width:6px}.lm-panel-dropdown-menu.sc-ui-workspace-manager::-webkit-scrollbar-track{background:var(--bg-primary, #1f2937)}.lm-panel-dropdown-menu.sc-ui-workspace-manager::-webkit-scrollbar-thumb{background:var(--color-primary, #4b5563);border-radius:3px}.lm-panel-dropdown-menu.sc-ui-workspace-manager::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #6b7280)}.lm-panel-dropdown-header.sc-ui-workspace-manager{padding:8px 12px;font-size:11px;font-weight:600;text-transform:uppercase;color:var(--text-secondary);border-bottom:1px solid var(--border-default, #374151);background:var(--bg-secondary, #111827);position:sticky;top:0;z-index:1}.lm-panel-dropdown-item.sc-ui-workspace-manager{display:flex;align-items:center;gap:8px;padding:8px 12px;cursor:pointer;transition:all 0.15s ease;color:var(--text-standard, #e5e7eb);font-size:13px}.lm-panel-dropdown-item.sc-ui-workspace-manager:hover{background:var(--color-primary, #374151)}.lm-panel-dropdown-item.active.sc-ui-workspace-manager{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff);font-weight:500}.lm-panel-dropdown-item.sc-ui-workspace-manager i.sc-ui-workspace-manager:first-child{width:16px;text-align:center;font-size:12px;color:var(--text-muted, #9ca3af)}.lm-panel-dropdown-item.sc-ui-workspace-manager .lm-panel-dropdown-title.sc-ui-workspace-manager{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.lm-panel-dropdown-item.sc-ui-workspace-manager .fa-check.sc-ui-workspace-manager{color:var(--text-standard, #ffffff);font-size:12px}.lm-panel-dropdown-item.sc-ui-workspace-manager .lm-dot.sc-ui-workspace-manager{width:6px;height:6px;border-radius:50%;background:var(--color-warning, #f59e0b)}.lm-minimize-btn.sc-ui-workspace-manager{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid var(--border-default, #374151);background:var(--bg-primary, #1f2937);color:var(--text-muted, #9ca3af);border-radius:4px;cursor:pointer;flex-shrink:0;transition:all 0.2s ease}.lm-minimize-btn.sc-ui-workspace-manager:hover{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff);border-color:var(--primary-color)}.lm-minimize-btn.sc-ui-workspace-manager:active{transform:scale(0.95)}.lm-minimize-btn.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:14px}.lm-close-all-btn.sc-ui-workspace-manager{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid var(--border-default, #374151);background:var(--bg-primary, #1f2937);color:var(--text-muted, #9ca3af);border-radius:4px;cursor:pointer;flex-shrink:0;transition:all 0.2s ease}.lm-close-all-btn.sc-ui-workspace-manager:hover{background:var(--color-danger, #991b1b);color:var(--color-danger, #fca5a5);border-color:var(--color-danger-hover, #dc2626)}.lm-close-all-btn.sc-ui-workspace-manager:active{transform:scale(0.95)}.lm-close-all-btn.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:14px}.lm-actions-menu-wrapper.sc-ui-workspace-manager{position:relative;flex-shrink:0;z-index:1}.lm-actions-menu-btn.sc-ui-workspace-manager{display:flex;align-items:center;justify-content:center;width:28px;height:28px;border:1px solid var(--border-default, #374151);background:var(--bg-primary, #1f2937);color:var(--text-muted, #9ca3af);border-radius:4px;cursor:pointer;flex-shrink:0;transition:all 0.2s ease}.lm-actions-menu-btn.sc-ui-workspace-manager:hover{background:var(--color-primary, #374151);color:var(--text-standard, #e5e7eb);border-color:var(--border-dark)}.lm-actions-menu-btn.sc-ui-workspace-manager:active{transform:scale(0.95)}.lm-actions-menu-btn.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:14px}.lm-actions-dropdown-menu.sc-ui-workspace-manager{position:absolute;top:calc(100% + 4px);right:0;min-width:180px;background:var(--bg-primary, #1f2937);border:1px solid var(--border-default, #374151);border-radius:6px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.5);z-index:2;overflow:hidden}.lm-actions-menu-item.sc-ui-workspace-manager{display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;transition:all 0.15s ease;color:var(--text-standard, #e5e7eb);font-size:13px}.lm-actions-menu-item.sc-ui-workspace-manager:hover{background:var(--color-primary, #374151)}.lm-actions-menu-item.sc-ui-workspace-manager i.sc-ui-workspace-manager{width:16px;text-align:center;font-size:13px;color:var(--text-muted, #9ca3af)}.lm-actions-menu-item.sc-ui-workspace-manager span.sc-ui-workspace-manager{flex:1}.lm-actions-menu-divider.sc-ui-workspace-manager{height:1px;background:var(--color-primary, #374151);margin:4px 0}.lm-tab.sc-ui-workspace-manager{display:flex;align-items:center;gap:6px;padding:6px 10px;border-radius:4px 4px 0 0;background:var(--bg-secondary, #111827);cursor:pointer;user-select:none;white-space:nowrap;flex-shrink:0;transition:all 0.2s ease;border:1px solid transparent;border-bottom:none;position:relative;z-index:1}.lm-tab.sc-ui-workspace-manager:hover{background:var(--bg-primary, #1f2937);border-color:var(--border-dark);transform:translateY(-1px);z-index:2}.lm-tab.sc-ui-workspace-manager .fa-thumbtack.sc-ui-workspace-manager{color:var(--primary-color);font-size:11px;animation:pinPulse 2s ease-in-out infinite}@keyframes pinPulse{0%,100%{opacity:0.7}50%{opacity:1}}.lm-tab.active.sc-ui-workspace-manager{background:var(--bg-primary, #0b1020);color:var(--text-standard, #ffffff);border-color:var(--primary-color);box-shadow:0 2px 8px rgba(var(--color-success-rgb, 61, 205, 88), 0.2)}.lm-tab.sc-ui-workspace-manager .lm-dot.sc-ui-workspace-manager{display:inline-block;width:8px;height:8px;border-radius:50%;background:var(--color-danger, #eab308)}.lm-region-actions.sc-ui-workspace-manager{margin-left:auto;display:inline-flex;gap:6px}.lm-region-actions.sc-ui-workspace-manager button.sc-ui-workspace-manager{appearance:none;border:none;background:transparent;color:inherit;padding:6px;cursor:pointer;border-radius:4px;transition:all 0.2s ease;display:inline-flex;align-items:center;justify-content:center}.lm-region-actions.sc-ui-workspace-manager button.sc-ui-workspace-manager:hover{background:var(--color-primary, #374151);color:var(--primary-color)}.lm-region-actions.sc-ui-workspace-manager button.sc-ui-workspace-manager:active{transform:scale(0.95)}.lm-tab.sc-ui-workspace-manager .lm-tab-btn.sc-ui-workspace-manager{appearance:none;border:none;background:transparent;color:inherit;padding:4px;cursor:pointer;border-radius:4px;transition:all 0.15s ease;display:inline-flex;align-items:center;justify-content:center}.lm-tab.sc-ui-workspace-manager .lm-tab-btn.sc-ui-workspace-manager:hover{background:rgba(var(--color-success-rgb, 61, 205, 88), 0.15);color:var(--primary-color);transform:scale(1.1)}.lm-tab.sc-ui-workspace-manager .lm-tab-btn.sc-ui-workspace-manager:active{transform:scale(0.9)}.lm-tab.sc-ui-workspace-manager .lm-tab-btn.lm-tab-actions.sc-ui-workspace-manager:hover{background:rgba(156, 163, 175, 0.15);color:var(--text-muted, #9ca3af)}.lm-tab.sc-ui-workspace-manager .lm-tab-btn.lm-close.sc-ui-workspace-manager:hover{background:rgba(var(--color-danger-rgb, 220, 38, 38), 0.15);color:var(--color-danger-hover, #dc2626)}.lm-tab-actions-wrapper.sc-ui-workspace-manager{position:relative;display:inline-flex;align-items:center;z-index:1}.lm-tab.sc-ui-workspace-manager:has(.lm-tab-actions-menu){z-index:10002}.lm-tab-actions-menu.sc-ui-workspace-manager{position:absolute;top:100%;right:0;margin-top:4px;background:var(--bg-primary, #1f2937);border:1px solid var(--border-default, #374151);border-radius:6px;box-shadow:0 4px 12px rgba(0, 0, 0, 0.3);z-index:10001;min-width:140px;overflow:hidden;animation:slideDown 0.15s ease}.lm-tab-actions-menu-fixed.sc-ui-workspace-manager{position:fixed;background:var(--bg-primary, #1f2937);border:1px solid var(--border-default, #374151);border-radius:6px;box-shadow:0 4px 24px rgba(0, 0, 0, 0.5);z-index:12000;min-width:160px;overflow:hidden;transform:translateX(-100%);animation:slideDown 0.15s ease}.lm-tab-actions-item.sc-ui-workspace-manager{display:flex;align-items:center;gap:10px;padding:10px 14px;cursor:pointer;color:var(--text-standard, #e5e7eb);font-size:13px;transition:all 0.15s ease}.lm-tab-actions-item.sc-ui-workspace-manager i.sc-ui-workspace-manager{width:16px;text-align:center;font-size:13px;color:var(--text-muted, #9ca3af)}.lm-tab-actions-item.sc-ui-workspace-manager:hover{background:var(--color-primary, #374151);color:var(--primary-color)}.lm-tab-actions-item.sc-ui-workspace-manager:hover i.sc-ui-workspace-manager{color:var(--primary-color)}.lm-tab-actions-item.lm-tab-actions-danger.sc-ui-workspace-manager{color:var(--color-danger, #fca5a5)}.lm-tab-actions-item.lm-tab-actions-danger.sc-ui-workspace-manager i.sc-ui-workspace-manager{color:var(--color-danger, #fca5a5)}.lm-tab-actions-item.lm-tab-actions-danger.sc-ui-workspace-manager:hover{background:var(--color-danger, #991b1b);color:var(--text-standard, #ffffff)}.lm-tab-actions-item.lm-tab-actions-danger.sc-ui-workspace-manager:hover i.sc-ui-workspace-manager{color:var(--text-standard, #ffffff)}.lm-tab-actions-item.sc-ui-workspace-manager:first-child{border-top-left-radius:6px;border-top-right-radius:6px}.lm-tab-actions-item.sc-ui-workspace-manager:last-child{border-bottom-left-radius:6px;border-bottom-right-radius:6px}.lm-tab-actions-divider.sc-ui-workspace-manager{height:1px;background:var(--color-primary, #374151);margin:4px 8px}.lm-region-content.sc-ui-workspace-manager{position:relative;flex:1;background:var(--bg-secondary, #0f172a);color:var(--text-standard, #e5e7eb);min-height:0;min-width:0;overflow:hidden;display:flex;flex-direction:column}.lm-panel-host.sc-ui-workspace-manager{position:absolute;inset:0;padding:0;overflow:auto;display:flex;flex-direction:column;scrollbar-width:thin;scrollbar-color:var(--text-secondary, #374151) var(--text-primary, #0f172a)}.lm-panel-host.sc-ui-workspace-manager::-webkit-scrollbar{width:8px;height:8px}.lm-panel-host.sc-ui-workspace-manager::-webkit-scrollbar-track{background:var(--bg-secondary, #0f172a)}.lm-panel-host.sc-ui-workspace-manager::-webkit-scrollbar-thumb{background:var(--color-primary, #374151);border-radius:4px}.lm-panel-host.sc-ui-workspace-manager::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #4b5563)}.lm-empty.sc-ui-workspace-manager{position:absolute;inset:0;display:grid;place-items:center;color:var(--text-muted, #9ca3af);font-size:14px;font-style:italic}.lm-popout-layer.sc-ui-workspace-manager{position:absolute;inset:0;pointer-events:none}.lm-popout-window.sc-ui-workspace-manager{position:absolute;background:var(--bg-secondary, #0f172a);border:1px solid var(--color-success, #3dcd58);border-radius:10px;box-shadow:0 20px 60px rgba(0, 0, 0, 0.6), 0 0 0 1px rgba(var(--color-success-rgb, 61, 205, 88), 0.3);overflow:hidden;pointer-events:auto;display:flex;flex-direction:column;backdrop-filter:blur(10px)}.lm-popout-header.sc-ui-workspace-manager{display:flex;align-items:center;justify-content:space-between;padding:8px 12px;background:linear-gradient(135deg, var(--bg-primary, #1f2937), var(--bg-secondary, #111827));border-bottom:1px solid var(--border-default, #374151);cursor:move;user-select:none}.lm-popout-header.sc-ui-workspace-manager:active{cursor:grabbing}.lm-popout-content.sc-ui-workspace-manager{flex:1;overflow:auto;padding:0;scrollbar-width:thin;scrollbar-color:var(--text-secondary, #374151) var(--text-primary, #0f172a)}.lm-popout-content.sc-ui-workspace-manager::-webkit-scrollbar{width:8px;height:8px}.lm-popout-content.sc-ui-workspace-manager::-webkit-scrollbar-track{background:var(--bg-secondary, #0f172a)}.lm-popout-content.sc-ui-workspace-manager::-webkit-scrollbar-thumb{background:var(--color-primary, #374151);border-radius:4px}.lm-popout-content.sc-ui-workspace-manager::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #4b5563)}.lm-tabs.drag-over.sc-ui-workspace-manager,.lm-region-content.drag-over.sc-ui-workspace-manager{outline:2px dashed var(--color-success, #3dcd58)}.lm-context-menu.sc-ui-workspace-manager{position:fixed;background:var(--bg-secondary, #111827);color:var(--text-standard, #e5e7eb);border:1px solid var(--border-default, #374151);border-radius:6px;box-shadow:0 8px 24px rgba(0, 0, 0, 0.4);padding:6px;display:grid;gap:4px;z-index:11000}.lm-context-menu.sc-ui-workspace-manager button.sc-ui-workspace-manager{appearance:none;border:none;background:var(--bg-primary, #1f2937);color:inherit;padding:6px 8px;border-radius:4px;cursor:pointer;text-align:left;display:flex;align-items:center;gap:8px}.lm-context-menu.sc-ui-workspace-manager button.sc-ui-workspace-manager:disabled{opacity:0.5;cursor:not-allowed;color:var(--text-secondary)}.lm-context-menu.sc-ui-workspace-manager button.sc-ui-workspace-manager i.sc-ui-workspace-manager{width:14px;text-align:center}.lm-context-menu.sc-ui-workspace-manager button.sc-ui-workspace-manager:hover:not(:disabled){background:var(--color-primary, #374151)}.lm-navigation-content.sc-ui-workspace-manager{flex:1;overflow-y:auto;overflow-x:hidden;background:var(--bg-secondary, #0f172a)}.lm-navigation-content.sc-ui-workspace-manager::-webkit-scrollbar{width:8px}.lm-navigation-content.sc-ui-workspace-manager::-webkit-scrollbar-track{background:var(--bg-primary, #1e293b)}.lm-navigation-content.sc-ui-workspace-manager::-webkit-scrollbar-thumb{background:var(--color-primary, #475569);border-radius:4px}.lm-navigation-content.sc-ui-workspace-manager::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #64748b)}.lm-navigation-section.sc-ui-workspace-manager{border-bottom:1px solid var(--border-subtle, #1e293b)}.lm-navigation-section.sc-ui-workspace-manager:last-child{border-bottom:none}.lm-navigation-section-header.sc-ui-workspace-manager{display:flex;align-items:center;gap:8px;padding:10px 12px;background:var(--bg-primary, #1f2937);color:var(--text-standard, #e5e7eb);cursor:pointer;transition:all 0.2s;border-left:3px solid transparent}.lm-navigation-section-header.sc-ui-workspace-manager:hover{background:var(--color-primary, #374151)}.lm-navigation-section-header.active.sc-ui-workspace-manager{background:var(--color-primary, #1e3a8a);border-left-color:var(--primary-color);font-weight:600}.lm-navigation-section-header.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:14px;color:var(--text-muted, #9ca3af);width:16px;text-align:center}.lm-navigation-section-title.sc-ui-workspace-manager{flex:1;font-size:13px}.lm-navigation-section-close.sc-ui-workspace-manager{display:none;background:transparent;border:none;color:var(--text-muted, #9ca3af);cursor:pointer;padding:4px;border-radius:3px;transition:all 0.2s}.lm-navigation-section-close.sc-ui-workspace-manager:hover{background:rgba(255, 255, 255, 0.1);color:var(--text-standard, #ffffff)}.lm-navigation-section-close.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:12px;pointer-events:none}.lm-navigation-section-header.sc-ui-workspace-manager:hover .lm-navigation-section-close.sc-ui-workspace-manager{display:block}.lm-navigation-section-content.sc-ui-workspace-manager{padding:12px;background:var(--bg-secondary, #0f172a);overflow:auto;max-height:400px}.lm-navigation-section-content.sc-ui-workspace-manager::-webkit-scrollbar{width:6px}.lm-navigation-section-content.sc-ui-workspace-manager::-webkit-scrollbar-track{background:var(--bg-primary, #1e293b)}.lm-navigation-section-content.sc-ui-workspace-manager::-webkit-scrollbar-thumb{background:var(--color-primary, #475569);border-radius:3px}.lm-navigation-section-content.sc-ui-workspace-manager::-webkit-scrollbar-thumb:hover{background:var(--color-primary, #64748b)}.lm-header-only-title.sc-ui-workspace-manager{flex:1;display:flex;align-items:center;gap:8px;font-weight:600;font-size:14px;color:var(--text-standard, #e5e7eb)}.lm-header-only-title.sc-ui-workspace-manager i.sc-ui-workspace-manager{font-size:14px;color:var(--text-muted, #9ca3af)}.lm-header-only-title.sc-ui-workspace-manager span.sc-ui-workspace-manager{color:var(--text-standard, #ffffff)}.lm-header-only-actions.sc-ui-workspace-manager{display:flex;align-items:center;gap:8px}.lm-header-btn.sc-ui-workspace-manager{background:rgba(255, 255, 255, 0.1);border:none;color:var(--text-standard, #e5e7eb);cursor:pointer;padding:6px 10px;border-radius:4px;transition:all 0.2s;font-size:13px;display:flex;align-items:center;justify-content:center}.lm-header-btn.sc-ui-workspace-manager:hover{background:rgba(255, 255, 255, 0.2);transform:scale(1.05)}.lm-header-btn.sc-ui-workspace-manager i.sc-ui-workspace-manager{pointer-events:none}.lm-context-menu.sc-ui-workspace-manager hr.sc-ui-workspace-manager{border:none;border-top:1px solid var(--border-default, #374151);margin:6px 0}`;

const WorkspaceManager = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.layoutChange = createEvent(this, "layoutChange");
        this.panelAdded = createEvent(this, "panelAdded");
        this.panelRemoved = createEvent(this, "panelRemoved");
        this.panelMoved = createEvent(this, "panelMoved");
        this.panelPoppedOut = createEvent(this, "panelPoppedOut");
        this.panelDocked = createEvent(this, "panelDocked");
        this.panelMaximized = createEvent(this, "panelMaximized");
        this.panelRestored = createEvent(this, "panelRestored");
        this.regionAdded = createEvent(this, "regionAdded");
        this.regionRemoved = createEvent(this, "regionRemoved");
    }
    get el() { return getElement(this); }
    /** Initial regions configuration */
    regions = [];
    handleRegionsChange() {
        this.initRegions();
        this.root = { ...this.root };
        this.layoutVersion++;
    }
    /** Horizontal or vertical split for top-level regions */
    direction = 'horizontal';
    /** Persist sizes between reloads */
    saveState = true;
    /** LocalStorage key when saveState=true */
    stateKey = 'layout-manager-state';
    /** Root container node holding initial regions */
    root;
    panelsById = {};
    popouts = {};
    maximizedPanel;
    preMaximizeState;
    draggingPanel;
    draggingPopout;
    layoutVersion = 0; // Increment to force re-render of resizable panels
    contextMenu;
    tabActionsMenu;
    floatingDropdown;
    openDropdowns = {};
    openActionsMenu = {};
    regionsNeedingScroll = {};
    minimizedRegions = {};
    dragOverTarget;
    floatingDropdownTrigger;
    tabActionsMenuTrigger;
    layoutChange;
    panelAdded;
    panelRemoved;
    panelMoved;
    panelPoppedOut;
    panelDocked;
    panelMaximized;
    panelRestored;
    regionAdded;
    regionRemoved;
    /** Get the current layout state */
    async getLayoutState() {
        return {
            root: this.root,
            panels: this.panelsById,
        };
    }
    /** Clear all regions (reset to empty layout) */
    async clearAllRegions() {
        // Close all panels first (this should clear panelsById)
        await this.closeAllPanels();
        // Force clear all state
        this.panelsById = {};
        this.popouts = {};
        this.maximizedPanel = undefined;
        this.draggingPanel = undefined;
        this.draggingPopout = undefined;
        this.contextMenu = undefined;
        this.tabActionsMenu = undefined;
        this.openDropdowns = {};
        this.openActionsMenu = {};
        // Reset root to have no children
        this.root = {
            id: '__root__',
            title: 'Root',
            direction: this.direction,
            children: [],
            panels: [],
        };
        this.floatingDropdownTrigger = undefined;
        this.tabActionsMenuTrigger = undefined;
        this.emitLayoutChange();
    }
    handleScroll() {
        if (this.floatingDropdown || this.tabActionsMenu) {
            this.recalculateMenuPositions();
        }
    }
    recalculateMenuPositions() {
        requestAnimationFrame(() => {
            if (this.floatingDropdown && this.floatingDropdownTrigger) {
                const placement = calculateUniversalPlacement(this.floatingDropdownTrigger, {
                    menuWidth: 200,
                    menuHeight: 300,
                    gap: 4,
                    align: 'end'
                });
                this.floatingDropdown = {
                    ...this.floatingDropdown,
                    x: placement.left ?? 0,
                    y: placement.top ?? 0,
                };
            }
            if (this.tabActionsMenu && this.tabActionsMenuTrigger) {
                const placement = calculateUniversalPlacement(this.tabActionsMenuTrigger, {
                    menuWidth: 180,
                    menuHeight: 200,
                    gap: 4,
                    align: 'end'
                });
                this.tabActionsMenu = {
                    ...this.tabActionsMenu,
                    x: placement.left ?? 0,
                    y: placement.top ?? 0,
                };
            }
        });
    }
    componentWillLoad() {
        if (this.saveState) {
            this.loadState();
        }
        if (!this.root || (this.root.children?.length === 0 && this.root.panels?.length === 0)) {
            this.initRegions();
        }
        document.addEventListener('click', this.handleDocumentClick);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick);
    }
    handleDocumentClick = (e) => {
        // Close dropdowns if clicking outside
        const target = e.target;
        if (!target.closest('.lm-panel-dropdown-wrapper')) {
            if (Object.values(this.openDropdowns).some(v => v)) {
                this.openDropdowns = {};
            }
        }
        if (!target.closest('.lm-actions-menu-wrapper')) {
            if (Object.values(this.openActionsMenu).some(v => v)) {
                this.openActionsMenu = {};
            }
        }
    };
    parseRegions() {
        const parsed = typeof this.regions === 'string' ? JSON.parse(this.regions) : this.regions;
        return (parsed || []).map((r) => ({
            id: r.id,
            title: r.title,
            size: r.size ?? 25,
            minSize: r.minSize,
            maxSize: r.maxSize,
            collapsible: r.collapsible ?? false,
        }));
    }
    initRegions() {
        const base = this.parseRegions();
        const total = base.reduce((sum, r) => sum + (r.size || 0), 0) || 100;
        const children = base.map(r => ({
            ...r,
            size: ((r.size || 100 / base.length) / total) * 100,
            panels: [],
            activePanelId: undefined,
        }));
        this.root = {
            id: '__root__',
            title: 'Root',
            size: 100,
            panels: [],
            children,
            direction: this.direction,
        };
    }
    /** Add a panel into a region. If element is provided, it will be moved into the panel content. */
    async addPanel(opts) {
        const id = opts.id || `panel-${Date.now()}-${Math.floor(Math.random() * 1000)}`;
        const region = this.findRegionNode(opts.regionId)?.node;
        if (!region)
            throw new Error(`Region not found: ${opts.regionId}`);
        // For content-only regions, only allow the first panel and ignore all others
        if (region.type === 'content-only') {
            if (region.panels && region.panels.length > 0) {
                return region.panels[0]; // Return the existing panel ID
            }
        }
        const panel = {
            id,
            title: opts.title,
            regionId: region.id,
            closable: opts.closable !== false,
            icon: opts.icon,
            iconLibrary: opts.iconLibrary,
            allowPopout: opts.allowPopout !== false,
            element: opts.element,
            html: opts.html,
        };
        // Force immutable update to trigger re-render
        this.panelsById = { ...this.panelsById, [id]: panel };
        region.panels = [...(region.panels || []), id];
        region.activePanelId = id;
        // Force root update to trigger re-render
        this.root = { ...this.root };
        this.panelAdded.emit(panel);
        this.emitLayoutChange();
        return id;
    }
    /** Remove a panel by id */
    async removePanel(panelId) {
        const panel = this.panelsById[panelId];
        if (!panel)
            return;
        // Prevent removing pinned panels
        if (panel.pinned) {
            return;
        }
        // If this panel is maximized, restore first
        if (this.maximizedPanel === panelId) {
            this.maximizedPanel = undefined;
            this.preMaximizeState = undefined;
        }
        const region = this.findRegionNode(panel.regionId)?.node;
        if (region) {
            region.panels = (region.panels || []).filter(id => id !== panelId);
            if (region.activePanelId === panelId) {
                region.activePanelId = region.panels[(region.panels || []).length - 1] || undefined;
            }
        }
        const { [panelId]: removed, ...rest } = this.panelsById;
        this.panelsById = rest;
        const { [panelId]: removedPop, ...restPop } = this.popouts;
        this.popouts = restPop;
        this.root = { ...this.root };
        this.panelRemoved.emit({ panelId, regionId: region?.id || '' });
        this.emitLayoutChange();
    }
    /** Move a panel to another region */
    async movePanel(panelId, targetRegionId, index) {
        const panel = this.panelsById[panelId];
        if (!panel)
            throw new Error(`Panel not found: ${panelId}`);
        const fromRegion = this.findRegionNode(panel.regionId)?.node;
        const toRegion = this.findRegionNode(targetRegionId)?.node;
        if (!toRegion)
            throw new Error(`Target region not found: ${targetRegionId}`);
        if (fromRegion) {
            fromRegion.panels = (fromRegion.panels || []).filter(id => id !== panelId);
            if (fromRegion.activePanelId === panelId) {
                fromRegion.activePanelId = fromRegion.panels[(fromRegion.panels || []).length - 1] || undefined;
            }
        }
        panel.regionId = toRegion.id;
        const newPanels = [...(toRegion.panels || [])];
        if (index === undefined || index < 0 || index > newPanels.length) {
            newPanels.push(panelId);
        }
        else {
            newPanels.splice(index, 0, panelId);
        }
        toRegion.panels = newPanels;
        toRegion.activePanelId = panelId;
        this.panelsById = { ...this.panelsById };
        this.root = { ...this.root };
        this.panelMoved.emit({ panelId, from: fromRegion?.id || '', to: toRegion.id });
        this.emitLayoutChange();
    }
    /** Popout a panel (make floating). Removes from region but keeps alive in overlay */
    async popoutPanel(panelId, position) {
        const panel = this.panelsById[panelId];
        if (!panel)
            throw new Error(`Panel not found: ${panelId}`);
        const region = this.findRegionNode(panel.regionId)?.node;
        if (region) {
            region.panels = (region.panels || []).filter(id => id !== panelId);
            if (region.activePanelId === panelId) {
                region.activePanelId = region.panels[(region.panels || []).length - 1] || undefined;
            }
        }
        this.popouts = {
            ...this.popouts,
            [panelId]: {
                x: position?.x ?? 100,
                y: position?.y ?? 100,
                width: position?.width ?? 400,
                height: position?.height ?? 300,
            },
        };
        this.root = { ...this.root };
        this.panelPoppedOut.emit({ panelId });
        this.emitLayoutChange();
    }
    /** Dock a popped-out panel back into a region */
    async dockPanel(panelId, regionId, index) {
        if (!this.popouts[panelId])
            return;
        const { [panelId]: removed, ...rest } = this.popouts;
        this.popouts = rest;
        await this.movePanel(panelId, regionId, index);
        this.panelDocked.emit({ panelId, regionId });
    }
    /** Split a leaf region into two child regions */
    async splitRegion(regionId, direction = 'horizontal') {
        const found = this.findRegionNode(regionId);
        if (!found)
            throw new Error(`Region not found: ${regionId}`);
        const { node } = found;
        if (node.children && node.children.length)
            return; // already split
        // Create two child leaf regions and distribute existing panels
        const r1 = { id: `${regionId}-a`, title: node.title, size: 50, panels: [], activePanelId: undefined };
        const r2 = { id: `${regionId}-b`, title: node.title, size: 50, panels: [], activePanelId: undefined };
        // Move current active to first
        if (node.panels?.length) {
            r1.panels = [...node.panels];
            r1.activePanelId = node.activePanelId;
            node.panels = [];
            node.activePanelId = undefined;
        }
        node.children = [r1, r2];
        node.direction = direction;
        this.root = { ...this.root };
        this.emitLayoutChange();
    }
    /** Maximize a panel to fill the entire layout */
    async maximizePanel(panelId) {
        if (!this.panelsById[panelId])
            throw new Error(`Panel not found: ${panelId}`);
        // Store current layout state before maximizing
        this.preMaximizeState = {
            root: JSON.parse(JSON.stringify(this.root)),
            panelsById: JSON.parse(JSON.stringify(this.panelsById)),
        };
        this.maximizedPanel = panelId;
        this.panelMaximized.emit({ panelId });
    }
    /** Restore a maximized panel to normal layout */
    async restorePanel() {
        if (!this.maximizedPanel)
            return;
        const panelId = this.maximizedPanel;
        // Restore the pre-maximize state if available
        if (this.preMaximizeState) {
            // Validate that the state is still valid
            if (this.preMaximizeState.root && this.preMaximizeState.panelsById) {
                this.root = this.preMaximizeState.root;
                this.panelsById = this.preMaximizeState.panelsById;
                // Force a complete re-render by creating new object references
                this.root = { ...this.root };
                this.panelsById = { ...this.panelsById };
                // Increment version to force resizable panels to re-initialize
                this.layoutVersion++;
            }
            this.preMaximizeState = undefined;
        }
        this.maximizedPanel = undefined;
        this.panelRestored.emit({ panelId });
        // Emit layout change to notify consumers
        this.emitLayoutChange();
    }
    /** Close all panels in a specific region */
    async closeAllPanels(regionId) {
        if (regionId) {
            const found = this.findRegionNode(regionId);
            if (!found || !found.node.panels)
                return;
            const panelIds = [...found.node.panels];
            for (const id of panelIds) {
                await this.removePanel(id);
            }
        }
        else {
            // Close all panels in all regions
            const panelIds = Object.keys(this.panelsById);
            for (const id of panelIds) {
                await this.removePanel(id);
            }
        }
    }
    /** Merge a split region back to a single leaf (left child remains) */
    async mergeRegion(regionId) {
        const found = this.findRegionNode(regionId);
        if (!found)
            return;
        const { node } = found;
        if (!node.children || !node.children.length)
            return;
        const left = node.children[0];
        // Adopt left child's panel state
        node.panels = [...(left.panels || [])];
        node.activePanelId = left.activePanelId;
        node.children = undefined;
        node.direction = undefined;
        this.root = { ...this.root };
        this.emitLayoutChange();
    }
    /** Create a new region */
    async createRegion(config) {
        // Prevent duplicates anywhere in the tree
        if (this.findRegionNode(config.id))
            return;
        const children = this.root.children || [];
        const total = children.reduce((s, r) => s + (r.size || 0), 0) || 100;
        const newSize = config.size ?? 100 / (children.length + 1);
        const normalizedNewSize = (newSize / (total + newSize)) * 100;
        // Reduce existing regions proportionally
        const adjusted = children.map(r => ({
            ...r,
            size: (r.size || 0) * (total / (total + newSize)),
        }));
        this.root.children = [
            ...adjusted,
            {
                id: config.id,
                title: config.title,
                size: normalizedNewSize,
                minSize: config.minSize,
                maxSize: config.maxSize,
                collapsible: config.collapsible ?? false,
                panels: [],
                activePanelId: undefined,
            },
        ];
        this.emitLayoutChange();
    }
    /** Add a new region to the root layout */
    async addRegion(opts) {
        if (!this.root || !this.root.children) {
            // Initialize root if not yet ready
            this.root = { id: '__root__', title: 'Root', direction: this.direction, children: [], panels: [] };
        }
        const regionId = opts.id || `region-${Date.now()}`;
        const title = opts.title || `Region ${this.root.children.length + 1}`;
        const position = opts.position || 'end';
        const type = opts.type || 'default';
        // Check if region ID already exists
        if (this.findRegionNode(regionId)) {
            throw new Error(`Region with id '${regionId}' already exists`);
        }
        // Create new region
        const newRegion = {
            id: regionId,
            title: title,
            size: opts.size || 100 / (this.root.children.length + 1),
            panels: [],
            activePanelId: undefined,
            type: type,
        };
        // Add to children
        if (position === 'start') {
            this.root.children = [newRegion, ...this.root.children];
        }
        else {
            this.root.children = [...this.root.children, newRegion];
        }
        // Normalize sizes to ensure they sum to 100% (unless skipNormalization is true)
        if (!opts.skipNormalization) {
            const total = this.root.children.reduce((sum, r) => sum + (r.size || 0), 0);
            this.root.children = this.root.children.map(r => ({
                ...r,
                size: ((r.size || 0) / total) * 100,
            }));
        }
        this.root = { ...this.root };
        this.emitLayoutChange();
        this.regionAdded.emit({ regionId, title });
        return regionId;
    }
    /** Normalize region sizes to sum to 100% */
    async normalizeRegionSizes() {
        if (!this.root || !this.root.children)
            return;
        const total = this.root.children.reduce((sum, r) => sum + (r.size || 0), 0);
        if (total === 0)
            return;
        this.root.children = this.root.children.map(r => ({
            ...r,
            size: ((r.size || 0) / total) * 100,
        }));
        this.root = { ...this.root };
        this.emitLayoutChange();
    }
    /** Remove a region (panels will be moved to the nearest region) */
    async removeRegion(regionId) {
        const found = this.findRegionNode(regionId);
        if (!found)
            return;
        const { parent } = found;
        if (!parent || !parent.children)
            return; // do not remove root
        const idx = parent.children.findIndex(c => c.id === regionId);
        const removed = parent.children[idx];
        const target = parent.children[idx - 1] || parent.children[idx + 1];
        parent.children = parent.children.filter(c => c.id !== regionId);
        if (target && removed && removed.panels?.length) {
            target.panels = [...(target.panels || []), ...removed.panels];
            target.activePanelId = target.activePanelId || removed.activePanelId || (target.panels || [])[(target.panels || []).length - 1];
        }
        // Rebalance sizes
        const remaining = parent.children;
        const total = remaining.reduce((s, r) => s + (r.size || 0), 0) || 100;
        parent.children = remaining.map(r => ({ ...r, size: ((r.size || 0) / total) * 100 }));
        this.root = { ...this.root };
        this.emitLayoutChange();
        this.regionRemoved.emit({ regionId });
    }
    onPanelPopout(ev) {
        this.popoutPanel(ev.detail.panelId);
    }
    onPanelSelect(ev) {
        const region = this.findRegionNode(ev.detail.regionId)?.node;
        if (region) {
            region.activePanelId = ev.detail.panelId;
            this.root = { ...this.root };
            this.emitLayoutChange();
        }
    }
    emitLayoutChange() {
        // Emit a flattened list of leaf regions for consumers
        const regions = [];
        const walk = (n) => {
            if (n.children && n.children.length)
                n.children.forEach(walk);
            else
                regions.push(n);
        };
        walk(this.root);
        this.layoutChange.emit({ regions });
        if (this.saveState) {
            this.saveStateToStorage();
        }
    }
    saveStateToStorage() {
        try {
            const panelsById = Object.fromEntries(Object.entries(this.panelsById).map(([id, panel]) => {
                const { element, ...serializablePanel } = panel;
                return [id, serializablePanel];
            }));
            const state = {
                root: this.root,
                panelsById,
                minimizedRegions: this.minimizedRegions
            };
            localStorage.setItem(this.stateKey, JSON.stringify(state));
        }
        catch (e) {
            console.error('[WorkspaceManager] Failed to save state', e);
        }
    }
    loadState() {
        try {
            const saved = localStorage.getItem(this.stateKey);
            if (saved) {
                const state = JSON.parse(saved);
                this.root = state.root;
                this.panelsById = state.panelsById;
                this.minimizedRegions = state.minimizedRegions || {};
            }
        }
        catch (e) {
            console.error('[WorkspaceManager] Failed to load state', e);
        }
    }
    findRegionNode(id) {
        let res;
        const dfs = (n, parent) => {
            if (n.id === id) {
                res = { node: n, parent };
                return;
            }
            if (n.children)
                n.children.forEach(child => dfs(child, n));
        };
        dfs(this.root);
        return res;
    }
    scrollTabs(regionId, direction) {
        const tabsEl = document.querySelector(`[data-region-id="${regionId}"] .lm-tabs`);
        if (!tabsEl)
            return;
        const scrollAmount = 200;
        tabsEl.scrollBy({ left: direction === 'left' ? -scrollAmount : scrollAmount, behavior: 'smooth' });
    }
    togglePanelDropdown(regionId, event) {
        event?.stopPropagation();
        const isOpen = !this.openDropdowns[regionId];
        this.openDropdowns = { ...this.openDropdowns, [regionId]: isOpen };
        if (isOpen && event) {
            this.floatingDropdownTrigger = event.currentTarget;
            const placement = calculateUniversalPlacement(this.floatingDropdownTrigger, {
                menuWidth: 200,
                menuHeight: 300,
                gap: 4,
                align: 'end'
            });
            this.floatingDropdown = {
                x: placement.left ?? 0,
                y: placement.top ?? 0,
                regionId,
                type: 'panel',
            };
        }
        else {
            this.floatingDropdown = undefined;
            this.floatingDropdownTrigger = undefined;
        }
    }
    selectPanelFromDropdown(regionId, panelId) {
        this.selectPanel(regionId, panelId);
        this.openDropdowns = { ...this.openDropdowns, [regionId]: false };
        this.floatingDropdown = undefined;
    }
    toggleActionsMenu(regionId, event) {
        event?.stopPropagation();
        const isOpen = !this.openActionsMenu[regionId];
        this.openActionsMenu = { ...this.openActionsMenu, [regionId]: isOpen };
        if (isOpen && event) {
            this.floatingDropdownTrigger = event.currentTarget;
            const placement = calculateUniversalPlacement(this.floatingDropdownTrigger, {
                menuWidth: 200,
                menuHeight: 300,
                gap: 4,
                align: 'end'
            });
            this.floatingDropdown = {
                x: placement.left ?? 0,
                y: placement.top ?? 0,
                regionId,
                type: 'actions',
            };
        }
        else {
            this.floatingDropdown = undefined;
            this.floatingDropdownTrigger = undefined;
        }
    }
    minimizeRegion(regionId) {
        // Don't allow minimize while a panel is maximized
        if (this.maximizedPanel) {
            return;
        }
        const found = this.findRegionNode(regionId);
        if (!found) {
            return;
        }
        const region = found.node;
        const parent = found.parent;
        // Don't allow minimizing a region that contains the maximized panel
        if (this.maximizedPanel) {
            const panel = this.panelsById[this.maximizedPanel];
            if (panel && panel.regionId === regionId) {
                return;
            }
        }
        // Get first panel's icon if available for the nav icon
        const firstPanel = region.panels?.[0] ? this.panelsById[region.panels[0]] : null;
        const icon = firstPanel?.icon || 'fas fa-window-minimize';
        // Find region's index in parent and determine side
        let index = -1;
        let parentId;
        let side = 'left';
        if (parent && parent.children) {
            index = parent.children.findIndex(c => c.id === regionId);
            parentId = parent.id;
            // Determine side based on position - first half is left, second half is right
            const midPoint = Math.floor(parent.children.length / 2);
            side = index < midPoint ? 'left' : 'right';
            // Remove region from parent's children
            const remaining = parent.children.filter(c => c.id !== regionId);
            // Redistribute space to remaining siblings proportionally
            if (remaining.length > 0) {
                const currentTotal = remaining.reduce((sum, r) => sum + (r.size || 0), 0);
                // Normalize all remaining regions to total 100%
                if (currentTotal > 0) {
                    remaining.forEach(r => {
                        r.size = ((r.size || 0) / currentTotal) * 100;
                    });
                }
                else {
                    // If no sizes set, distribute equally
                    const equalSize = 100 / remaining.length;
                    remaining.forEach(r => {
                        r.size = equalSize;
                    });
                }
            }
            parent.children = remaining;
        }
        else if (this.root.id === regionId) {
            // Cannot minimize root region
            return;
        }
        // Store minimized region info with full state
        this.minimizedRegions = {
            ...this.minimizedRegions,
            [regionId]: {
                title: region.title || regionId,
                icon,
                iconLibrary: firstPanel?.iconLibrary,
                region: { ...region },
                parentId,
                index,
                side,
            },
        };
        // Increment version to force resizable panels to re-initialize with new sizes
        this.layoutVersion++;
        this.root = { ...this.root };
        this.emitLayoutChange();
    }
    restoreRegion(regionId) {
        const minimized = this.minimizedRegions[regionId];
        if (!minimized) {
            return;
        }
        const { region, parentId, index } = minimized;
        // Find parent and restore region
        if (parentId) {
            const parentFound = this.findRegionNode(parentId);
            if (parentFound && parentFound.node && parentFound.node.children) {
                const parent = parentFound.node;
                // Create a fresh copy of the region to avoid reference issues
                const restoredRegion = JSON.parse(JSON.stringify(region));
                // Insert region back at original position
                const newChildren = [...(parent.children ?? [])];
                newChildren.splice(index, 0, restoredRegion);
                // Recalculate sizes
                const totalSize = newChildren.reduce((sum, r) => sum + (r.size || 0), 0);
                if (totalSize > 0) {
                    newChildren.forEach(r => {
                        r.size = ((r.size || 0) / totalSize) * 100;
                    });
                }
                parent.children = newChildren;
                // Increment version to force resizable panels to re-initialize with correct sizes
                this.layoutVersion++;
            }
        }
        // Remove from minimized regions
        const { [regionId]: removed, ...rest } = this.minimizedRegions;
        this.minimizedRegions = rest;
        this.root = { ...this.root };
        this.emitLayoutChange();
    }
    closeAllAndRemoveRegion(regionId) {
        const region = this.findRegionNode(regionId)?.node;
        if (!region)
            return;
        // Close all panels in this region
        const panelIds = [...region.panels];
        panelIds.forEach(panelId => {
            this.removePanel(panelId);
        });
        // Remove the region
        this.removeRegion(regionId);
    }
    renderTabs(region) {
        const panels = region.panels.map(id => this.panelsById[id]).filter(Boolean);
        //const isDropdownOpen = this.openDropdowns[region.id];
        const pinnedPanels = panels.filter(p => p.pinned);
        const unpinnedPanels = panels.filter(p => !p.pinned);
        const hasPinnedAndUnpinned = pinnedPanels.length > 0 && unpinnedPanels.length > 0;
        const showScrollButtons = this.regionsNeedingScroll[region.id] || false;
        return (h("div", { class: "lm-tabs-container", "data-region-id": region.id }, showScrollButtons && (h("ui-button", { variant: "ghost", size: "sm", icon: "chevron-left", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Scroll left", onClick: () => this.scrollTabs(region.id, 'left') })), h("div", { class: "lm-tabs", onDragOver: e => {
                e.preventDefault();
                this.handleDragOver(e, region.id);
            }, onDragLeave: () => this.dragOverTarget = undefined, onDrop: e => this.handleTabDrop(e, region) }, panels.map((p, index) => {
            const isPinned = p.pinned;
            const isFirstUnpinned = !isPinned && index > 0 && panels[index - 1]?.pinned;
            return (h("div", { key: p.id }, isFirstUnpinned && hasPinnedAndUnpinned && h("div", { class: "lm-tab-separator", title: "Pinned / Unpinned divider" }), h("div", { class: { 'lm-tab': true, 'active': region.activePanelId === p.id, 'pinned': !!isPinned }, draggable: true, onDragStart: e => this.handleTabDragStart(e, p, region), onContextMenu: e => this.openContextMenu(e, region.id, p.id), onClick: () => this.selectPanel(region.id, p.id) }, p.icon && h("ui-icon", { name: p.icon, library: p.iconLibrary || 'lucide' }), h("span", { class: "lm-tab-title" }, p.title), isPinned && (h("ui-icon", { name: "thumbtack", library: "fontawesome", class: "lm-tab-btn", title: "Unpin", onClick: (e) => {
                    e.stopPropagation();
                    this.togglePin(p.id);
                } })), p.dirty && h("span", { class: "lm-dot", title: "Unsaved changes" }), h("ui-button", { variant: "ghost", size: "sm", icon: "ellipsis-v", iconLibrary: "fontawesome", ariaLabel: "More actions", onClick: (e) => {
                    e.stopPropagation();
                    const isOpen = !this.openDropdowns[`tab-${p.id}`];
                    this.openDropdowns = { ...this.openDropdowns, [`tab-${p.id}`]: isOpen };
                    if (isOpen) {
                        this.tabActionsMenuTrigger = e.currentTarget;
                        const rect = this.tabActionsMenuTrigger.getBoundingClientRect();
                        const offset = getTransformedAncestorOffset(this.el);
                        this.tabActionsMenu = {
                            x: rect.right - offset.x,
                            y: rect.bottom - offset.y + 4,
                            panelId: p.id,
                        };
                    }
                    else {
                        this.tabActionsMenu = undefined;
                        this.tabActionsMenuTrigger = undefined;
                    }
                } }), p.closable && !isPinned && (h("ui-button", { variant: "ghost", size: "sm", icon: "times", iconLibrary: "fontawesome", ariaLabel: "Close", onClick: (e) => {
                    e.stopPropagation();
                    this.removePanel(p.id);
                } })))));
        })), showScrollButtons && (h("ui-button", { variant: "ghost", size: "sm", icon: "chevron-right", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Scroll right", onClick: () => this.scrollTabs(region.id, 'right') }))));
    }
    handleTabDragStart(ev, panel, region) {
        this.draggingPanel = { panelId: panel.id, fromRegionId: region.id };
        ev.dataTransfer?.setData('text/plain', panel.id);
        ev.dataTransfer?.setDragImage(ev.target, 0, 0);
    }
    handleTabDrop(ev, targetRegion) {
        ev.preventDefault();
        const panelId = ev.dataTransfer?.getData('text/plain') || this.draggingPanel?.panelId;
        if (!panelId)
            return;
        // If dropping on a specific tab, insert before its index
        let insertIndex = undefined;
        const targetEl = ev.target;
        const tabEl = targetEl.closest('.lm-tab');
        if (tabEl) {
            const tabs = Array.from(tabEl.parentElement.querySelectorAll('.lm-tab'));
            insertIndex = tabs.indexOf(tabEl);
        }
        this.movePanel(panelId, targetRegion.id, insertIndex);
        this.draggingPanel = undefined;
    }
    selectPanel(regionId, panelId) {
        const region = this.findRegionNode(regionId)?.node;
        if (region) {
            region.activePanelId = panelId;
            this.root = { ...this.root };
            this.emitLayoutChange();
        }
    }
    switchToPanel(regionId, panelId) {
        const region = this.findRegionNode(regionId)?.node;
        if (region && region.panels.includes(panelId)) {
            region.activePanelId = panelId;
            this.root = { ...this.root };
        }
    }
    renderNavigationRegion(region) {
        const panels = region.panels.map(id => this.panelsById[id]).filter(Boolean);
        return (h("div", { class: "lm-region lm-region-navigation", "data-region-id": region.id }, h("div", { class: "lm-region-header" }, h("div", { class: "lm-navigation-header" }, h("span", { class: "lm-navigation-title" }, region.title || 'Navigation')), h("ui-button", { variant: "ghost", size: "sm", icon: "times-circle", iconLibrary: "fontawesome", ariaLabel: "Close all panels and remove region", onClick: () => this.closeAllAndRemoveRegion(region.id) })), h("div", { class: "lm-navigation-content" }, panels.map(panel => (h("div", { class: "lm-navigation-section", "data-panel-id": panel.id }, h("div", { class: {
                'lm-navigation-section-header': true,
                'active': region.activePanelId === panel.id,
            }, onClick: () => this.switchToPanel(region.id, panel.id) }, panel.icon && h("ui-icon", { name: panel.icon, library: panel.iconLibrary || 'default' }), h("span", { class: "lm-navigation-section-title" }, panel.title), h("ui-button", { variant: "ghost", size: "sm", class: "lm-navigation-section-close", icon: "times", iconLibrary: "fontawesome", ariaLabel: "Close panel", onClick: (e) => {
                e.stopPropagation();
                this.removePanel(panel.id);
            } })), region.activePanelId === panel.id && h("div", { class: "lm-navigation-section-content", ref: host => this.attachContent(host, panel) })))), panels.length === 0 && h("div", { class: "lm-empty" }, "No panels open"))));
    }
    renderHeaderOnlyRegion(region) {
        const active = region.activePanelId ? this.panelsById[region.activePanelId] : undefined;
        return (h("div", { class: "lm-region lm-region-header-only", "data-region-id": region.id }, h("div", { class: "lm-region-header" }, h("div", { class: "lm-header-only-title" }, active?.icon && h("ui-icon", { name: active.icon, library: active.iconLibrary || 'default' }), h("span", null, active?.title || region.title || 'Content')), h("div", { class: "lm-header-only-actions" }, h("div", { class: "lm-panel-dropdown-wrapper" }, h("ui-button", { variant: "ghost", size: "sm", icon: "list", iconLibrary: "fontawesome", ariaLabel: "Show all panels", onClick: (e) => this.togglePanelDropdown(region.id, e) })), active && (h("ui-button", { variant: "ghost", size: "sm", icon: "expand", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Maximize", onClick: () => this.maximizePanel(active.id) })), active && (h("ui-button", { variant: "ghost", size: "sm", icon: "external-link-alt", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Pop out", onClick: () => this.popoutPanel(active.id) })), h("ui-button", { variant: "ghost", size: "sm", icon: "times-circle", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Close all panels and remove region", onClick: () => this.closeAllAndRemoveRegion(region.id) }))), h("div", { class: "lm-region-content" }, active && h("div", { class: "lm-panel-host", "data-panel-id": active.id, ref: host => this.attachContent(host, active) }), !active && h("div", { class: "lm-empty" }, "No content available"))));
    }
    renderLeafRegion(region) {
        const active = region.activePanelId ? this.panelsById[region.activePanelId] : undefined;
        const regionType = region.type || 'default';
        const showHeader = regionType !== 'no-header' && regionType !== 'content-only';
        const showTabs = regionType !== 'title-only' && regionType !== 'no-header' && regionType !== 'content-only' && regionType !== 'navigation' && regionType !== 'header-only';
        const showActions = regionType === 'default';
        const showScrollButtons = this.regionsNeedingScroll[region.id] || false;
        // For content-only type, render pure content with no UI chrome
        if (regionType === 'content-only') {
            return (h("div", { class: "lm-region lm-region-content-only", "data-region-id": region.id }, active && h("div", { class: "lm-panel-host", "data-panel-id": active.id, ref: host => this.attachContent(host, active) })));
        }
        // For navigation type, render all panels stacked vertically
        if (regionType === 'navigation') {
            return this.renderNavigationRegion(region);
        }
        // For header-only type, render header with buttons and content below
        if (regionType === 'header-only') {
            return this.renderHeaderOnlyRegion(region);
        }
        return (h("div", { class: {
                'lm-region': true,
                [`lm-region-${regionType}`]: true,
            }, "data-region-id": region.id }, showHeader && (h("div", { class: "lm-region-header" }, regionType === 'title-only' && (h("div", { class: "lm-region-title" }, h("span", null, region.title))), showTabs && this.renderTabs(region), showActions && (h("div", { class: "lm-region-actions" }, showScrollButtons && (h("div", { class: "lm-panel-dropdown-wrapper" }, h("ui-button", { variant: "ghost", size: "sm", icon: "list", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Show all panels", onClick: (e) => this.togglePanelDropdown(region.id, e) }))), h("div", { class: "lm-actions-menu-wrapper" }, h("ui-button", { variant: "ghost", size: "sm", icon: "ellipsis-v", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Actions", onClick: (e) => this.toggleActionsMenu(region.id, e) })), h("ui-button", { variant: "ghost", size: "sm", icon: "window-minimize", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Minimize region", onClick: () => this.minimizeRegion(region.id) }), (region.panels?.length || 0) > 0 && (h("ui-button", { variant: "ghost", size: "sm", icon: "times-circle", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Close all panels and remove region", onClick: () => this.closeAllAndRemoveRegion(region.id) })))))), h("div", { class: "lm-region-content", onDragOver: e => {
                e.preventDefault();
                this.handleDragOver(e, region.id);
            }, onDragLeave: () => this.dragOverTarget = undefined, onDrop: e => this.handleTabDrop(e, region) }, active && h("div", { class: "lm-panel-host", "data-panel-id": active.id, ref: host => this.attachContent(host, active) }), !active && h("div", { class: "lm-empty" }, "No tabs open"), this.dragOverTarget?.regionId === region.id && (h("div", { class: `lm-drop-highlighter lm-drop-${this.dragOverTarget.position}` })))));
    }
    renderRegionNode(node) {
        if (node.children && node.children.length) {
            const panelsConfig = node.children.map(child => ({
                id: child.id,
                size: child.size,
                minSize: child.minSize,
                maxSize: child.maxSize,
                collapsible: child.collapsible,
            }));
            return (h("ui-resizable-panel", { key: `resizable-${node.id}-v${this.layoutVersion}`, direction: node.direction || 'horizontal', panels: JSON.stringify(panelsConfig), saveState: false, stateKey: `${this.stateKey}-${node.id}`, showHandleIcon: true }, node.children.map(child => (h("div", { slot: child.id, class: "lm-slot" }, this.renderRegionNode(child))))));
        }
        return this.renderLeafRegion(node);
    }
    attachContent(host, panel) {
        if (!host)
            return;
        // Clear existing
        while (host.firstChild)
            host.removeChild(host.firstChild);
        if (panel.element) {
            host.appendChild(panel.element);
        }
        else if (panel.html) {
            host.innerHTML = sanitizeHTML(panel.html);
        }
    }
    renderVerticalNav(side) {
        const minimizedEntries = Object.entries(this.minimizedRegions).filter(([_, info]) => info.side === side);
        if (minimizedEntries.length === 0)
            return null;
        return (h("div", { class: `lm-vertical-nav lm-vertical-nav-${side}` }, minimizedEntries.map(([regionId, info]) => (h("div", { key: regionId, class: "lm-nav-item", title: info.title, onClick: () => this.restoreRegion(regionId) }, h("ui-icon", { name: info.icon, library: info.iconLibrary || 'default' }), h("span", { class: "lm-nav-label" }, info.title))))));
    }
    render() {
        // If a panel is maximized, render only that panel
        if (this.maximizedPanel) {
            const p = this.panelsById[this.maximizedPanel];
            if (p) {
                return (h(Host, null, h("div", { class: "lm-container lm-maximized" }, h("div", { class: "lm-maximized-panel" }, h("div", { class: "lm-maximized-header" }, h("span", { class: "lm-maximized-title" }, p.title), h("div", { class: "lm-maximized-actions" }, h("ui-button", { variant: "ghost", size: "sm", icon: "compress", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Restore", onClick: () => this.restorePanel() }), h("ui-button", { variant: "ghost", size: "sm", icon: "times", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Close", onClick: () => this.removePanel(this.maximizedPanel) }))), h("div", { class: "lm-maximized-content", ref: host => this.attachContent(host, p) })))));
            }
        }
        return (h(Host, null, this.renderVerticalNav('left'), h("div", { class: "lm-container" }, this.root && this.renderRegionNode(this.root), h("div", { class: "lm-popout-layer" }, Object.keys(this.popouts).map(panelId => {
            const pop = this.popouts[panelId];
            const p = this.panelsById[panelId];
            if (!p)
                return null;
            const style = { left: `${pop.x}px`, top: `${pop.y}px`, width: `${pop.width}px`, height: `${pop.height}px` };
            return (h("div", { class: "lm-popout-window", style: style, "data-panel-id": panelId }, h("div", { class: "lm-popout-header", onMouseDown: e => this.startPopoutDrag(e, panelId) }, h("span", { class: "lm-popout-title" }, p.title), h("div", { class: "lm-popout-actions" }, h("ui-button", { variant: "ghost", size: "sm", icon: "download", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Dock", onClick: () => this.dockPanel(panelId, p.regionId) }), h("ui-button", { variant: "ghost", size: "sm", icon: "times", iconLibrary: "fontawesome", iconSize: "14px", ariaLabel: "Close", onClick: () => this.removePanel(panelId) }))), h("div", { class: "lm-popout-content", ref: host => this.attachContent(host, p) })));
        })), this.contextMenu && this.renderContextMenu(), this.tabActionsMenu && this.renderTabActionsMenu(), this.floatingDropdown && this.renderFloatingDropdown()), this.renderVerticalNav('right')));
    }
    startPopoutDrag(e, panelId) {
        const pop = this.popouts[panelId];
        if (!pop)
            return;
        const target = e.currentTarget.parentElement;
        const rect = target.getBoundingClientRect();
        const offsetX = e.clientX - rect.left;
        const offsetY = e.clientY - rect.top;
        this.draggingPopout = { panelId, offsetX, offsetY };
        const onMove = (ev) => {
            let x = ev.clientX - this.draggingPopout.offsetX;
            let y = ev.clientY - this.draggingPopout.offsetY;
            const snapThreshold = 20;
            const vw = window.innerWidth;
            const vh = window.innerHeight;
            // Snap to viewport edges
            if (Math.abs(x) < snapThreshold)
                x = 0;
            if (Math.abs(y) < snapThreshold)
                y = 0;
            if (Math.abs(x + pop.width - vw) < snapThreshold)
                x = vw - pop.width;
            if (Math.abs(y + pop.height - vh) < snapThreshold)
                y = vh - pop.height;
            this.popouts[panelId] = { ...this.popouts[panelId], x, y };
            // Force re-render
            this.popouts = { ...this.popouts };
        };
        const onUp = () => {
            document.removeEventListener('mousemove', onMove);
            document.removeEventListener('mouseup', onUp);
            this.draggingPopout = undefined;
        };
        document.addEventListener('mousemove', onMove);
        document.addEventListener('mouseup', onUp);
    }
    openContextMenu(e, regionId, panelId) {
        e.preventDefault();
        const coords = correctViewportCoordinates(e.clientX, e.clientY, this.el);
        this.contextMenu = {
            x: coords.x,
            y: coords.y,
            regionId,
            panelId,
        };
        const onClickAway = () => {
            this.contextMenu = undefined;
            document.removeEventListener('click', onClickAway);
        };
        document.addEventListener('click', onClickAway, { once: true });
    }
    renderContextMenu() {
        const { x, y, regionId, panelId } = this.contextMenu;
        const panel = this.panelsById[panelId];
        const style = { left: `${x}px`, top: `${y}px` };
        return (h("div", { class: "lm-context-menu", style: style }, h("ui-button", { variant: "ghost", fullWidth: true, icon: "thumbtack", iconLibrary: "fontawesome", iconSize: "14px", label: panel?.pinned ? 'Unpin Tab' : 'Pin Tab', onClick: () => {
                this.togglePin(panelId);
                this.contextMenu = undefined;
            } }), h("hr", null), h("ui-button", { variant: "ghost", fullWidth: true, disabled: panel?.pinned, label: panel?.pinned ? 'Close (Pinned)' : 'Close', onClick: () => {
                this.removePanel(panelId);
                this.contextMenu = undefined;
            } }), h("ui-button", { variant: "ghost", fullWidth: true, icon: "arrows-alt-h", iconLibrary: "fontawesome", iconSize: "14px", label: "Close Others", onClick: () => {
                this.closeOthers(regionId, panelId);
                this.contextMenu = undefined;
            } }), h("ui-button", { variant: "ghost", fullWidth: true, icon: "arrow-right", iconLibrary: "fontawesome", iconSize: "14px", label: "Close to the Right", onClick: () => {
                this.closeToRight(regionId, panelId);
                this.contextMenu = undefined;
            } }), h("hr", null), h("ui-button", { variant: "ghost", fullWidth: true, label: "Move to New Group (H)", onClick: () => {
                this.splitRegion(regionId, 'horizontal').then(() => this.movePanel(panelId, `${regionId}-b`));
                this.contextMenu = undefined;
            } }), h("ui-button", { variant: "ghost", fullWidth: true, label: "Move to New Group (V)", onClick: () => {
                this.splitRegion(regionId, 'vertical').then(() => this.movePanel(panelId, `${regionId}-b`));
                this.contextMenu = undefined;
            } })));
    }
    renderTabActionsMenu() {
        const { x, y, panelId } = this.tabActionsMenu;
        const p = this.panelsById[panelId];
        if (!p)
            return null;
        const style = { left: `${x}px`, top: `${y}px` };
        return (h("div", { class: "lm-tab-actions-menu-fixed", style: style }, h("div", { class: "lm-tab-actions-item", onClick: e => {
                e.stopPropagation();
                this.maximizePanel(panelId);
                this.openDropdowns = { ...this.openDropdowns, [`tab-${panelId}`]: false };
                this.tabActionsMenu = undefined;
            } }, h("ui-icon", { name: "expand", library: "fontawesome", size: "14px" }), h("span", null, "Maximize")), p.allowPopout && (h("div", { class: "lm-tab-actions-item", onClick: e => {
                e.stopPropagation();
                this.popoutPanel(panelId);
                this.openDropdowns = { ...this.openDropdowns, [`tab-${panelId}`]: false };
                this.tabActionsMenu = undefined;
            } }, h("ui-icon", { name: "window-restore", library: "fontawesome" }), h("span", null, "Pop Out"))), h("div", { class: "lm-tab-actions-divider" }), h("div", { class: "lm-tab-actions-item", onClick: e => {
                e.stopPropagation();
                this.togglePin(panelId);
                this.openDropdowns = { ...this.openDropdowns, [`tab-${panelId}`]: false };
                this.tabActionsMenu = undefined;
            } }, p.pinned ? (h(h.Fragment, null, h("ui-icon", { name: "thumbtack", library: "fontawesome" }), h("span", null, "Unpin Tab"))) : (h(h.Fragment, null, h("ui-icon", { name: "thumbtack", library: "fontawesome" }), h("span", null, "Pin Tab")))), h("div", { class: "lm-tab-actions-divider" }), h("div", { class: "lm-tab-actions-item", onClick: e => {
                e.stopPropagation();
                this.closeOthers(p.regionId, panelId);
                this.tabActionsMenu = undefined;
            } }, h("ui-icon", { name: "arrows-alt-h", library: "fontawesome" }), h("span", null, "Close Others")), h("div", { class: "lm-tab-actions-item", onClick: e => {
                e.stopPropagation();
                this.closeToRight(p.regionId, panelId);
                this.tabActionsMenu = undefined;
            } }, h("ui-icon", { name: "arrow-right", library: "fontawesome" }), h("span", null, "Close to the Right")), h("div", { class: "lm-tab-actions-divider" }), h("div", { class: "lm-tab-actions-item lm-tab-actions-danger", onClick: e => {
                e.stopPropagation();
                this.removePanel(panelId);
                this.tabActionsMenu = undefined;
            } }, h("ui-icon", { name: "times", library: "fontawesome" }), h("span", null, "Close"))));
    }
    closeOthers(regionId, panelId) {
        const region = this.findRegionNode(regionId)?.node;
        if (!region)
            return;
        const ids = (region.panels || []).filter(id => id !== panelId);
        ids.forEach(id => this.removePanel(id));
    }
    closeToRight(regionId, panelId) {
        const region = this.findRegionNode(regionId)?.node;
        if (!region)
            return;
        const idx = (region.panels || []).indexOf(panelId);
        const ids = (region.panels || []).slice(idx + 1);
        ids.forEach(id => this.removePanel(id));
    }
    togglePin(panelId) {
        const panel = this.panelsById[panelId];
        if (!panel)
            return;
        // Toggle pin state
        panel.pinned = !panel.pinned;
        // Find the region containing this panel
        const region = this.findRegionNode(panel.regionId)?.node;
        if (!region || !region.panels)
            return;
        // Reorder panels: pinned panels on the left, unpinned on the right
        const currentPanels = region.panels.map(id => this.panelsById[id]).filter(Boolean);
        const pinnedPanels = currentPanels.filter(p => p.pinned).map(p => p.id);
        const unpinnedPanels = currentPanels.filter(p => !p.pinned).map(p => p.id);
        // Update region panels order
        region.panels = [...pinnedPanels, ...unpinnedPanels];
        // Force re-render
        this.panelsById = { ...this.panelsById };
        this.root = { ...this.root };
    }
    checkTabsOverflow() {
        // Check all regions to see if their tabs overflow
        const allRegions = [];
        const collectRegions = (node) => {
            if (node.panels) {
                allRegions.push(node);
            }
            if (node.children) {
                node.children.forEach(collectRegions);
            }
        };
        if (this.root)
            collectRegions(this.root);
        const needsUpdate = {};
        allRegions.forEach(region => {
            const container = this.el.querySelector(`[data-region-id="${region.id}"] .lm-tabs`);
            if (container) {
                const containerWidth = container.offsetWidth;
                const scrollWidth = container.scrollWidth;
                needsUpdate[region.id] = scrollWidth > containerWidth;
            }
        });
        // Only update state if something changed
        if (JSON.stringify(needsUpdate) !== JSON.stringify(this.regionsNeedingScroll)) {
            this.regionsNeedingScroll = needsUpdate;
        }
    }
    handleDragOver(e, regionId) {
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        let position = 'center';
        const threshold = 0.2; // 20% edge detection
        if (y < rect.height * threshold)
            position = 'top';
        else if (y > rect.height * (1 - threshold))
            position = 'bottom';
        else if (x < rect.width * threshold)
            position = 'left';
        else if (x > rect.width * (1 - threshold))
            position = 'right';
        this.dragOverTarget = { regionId, position };
    }
    renderFloatingDropdown() {
        if (!this.floatingDropdown)
            return null;
        const { x, y, regionId, type } = this.floatingDropdown;
        const region = this.findRegionById(this.root, regionId);
        if (!region)
            return null;
        if (type === 'panel') {
            const panels = region.panels.map(id => this.panelsById[id]).filter(Boolean);
            return (h("div", { class: "lm-panel-dropdown-menu", style: {
                    position: 'fixed',
                    top: `${y}px`,
                    left: `${x}px`,
                    zIndex: '12000',
                    minWidth: '200px',
                } }, h("div", { class: "lm-panel-dropdown-header" }, "All Panels (", panels.length, ")"), panels.map(p => (h("div", { class: {
                    'lm-panel-dropdown-item': true,
                    'active': region.activePanelId === p.id,
                }, onClick: () => this.selectPanelFromDropdown(region.id, p.id) }, p.icon && h("ui-icon", { name: p.icon, library: p.iconLibrary || 'lucide', style: { marginRight: '8px' } }), h("span", null, p.title))))));
        }
        else {
            const active = region.activePanelId ? this.panelsById[region.activePanelId] : null;
            return (h("div", { class: "lm-actions-dropdown-menu", style: {
                    position: 'fixed',
                    top: `${y}px`,
                    left: `${x}px`,
                    zIndex: '12000',
                    minWidth: '180px',
                } }, h("div", { class: "lm-actions-item", onClick: () => {
                    this.splitRegion(region.id, 'horizontal');
                    this.floatingDropdown = undefined;
                    this.openActionsMenu = {};
                } }, h("ui-icon", { name: "columns", library: "fontawesome", class: "lm-actions-icon" }), "Split Horizontal"), h("div", { class: "lm-actions-item", onClick: () => {
                    this.splitRegion(region.id, 'vertical');
                    this.floatingDropdown = undefined;
                    this.openActionsMenu = {};
                } }, h("ui-icon", { name: "grip-lines", library: "fontawesome", class: "lm-actions-icon" }), "Split Vertical"), h("div", { class: "lm-actions-divider" }), active && (h("div", { class: "lm-actions-item", onClick: () => {
                    this.maximizePanel(active.id);
                    this.floatingDropdown = undefined;
                    this.openActionsMenu = {};
                } }, h("ui-icon", { name: "expand", library: "fontawesome", class: "lm-actions-icon" }), "Maximize Panel")), (region.panels?.length || 0) > 0 && (h(h.Fragment, null, h("div", { class: "lm-actions-divider" }), h("div", { class: "lm-actions-item", onClick: () => {
                    this.closeAllPanels(region.id);
                    this.floatingDropdown = undefined;
                    this.openActionsMenu = {};
                } }, h("ui-icon", { name: "times", library: "fontawesome", class: "lm-actions-icon" }), "Close All Panels"))), h("div", { class: "lm-actions-divider" }), h("div", { class: "lm-actions-item", onClick: () => {
                    this.mergeRegion(region.id);
                    this.floatingDropdown = undefined;
                    this.openActionsMenu = {};
                } }, h("ui-icon", { name: "compress", library: "fontawesome", class: "lm-actions-icon" }), "Merge Region"), h("div", { class: "lm-actions-divider" }), h("div", { class: "lm-actions-item lm-actions-danger", onClick: () => {
                    this.closeAllAndRemoveRegion(region.id);
                    this.floatingDropdown = undefined;
                    this.openActionsMenu = {};
                } }, h("ui-icon", { name: "trash", library: "fontawesome", class: "lm-actions-icon" }), "Remove Group")));
        }
    }
    findRegionById(node, id) {
        if (node.id === id)
            return node;
        for (const child of (node.children ?? [])) {
            const found = this.findRegionById(child, id);
            if (found)
                return found;
        }
        return null;
    }
    componentDidUpdate() {
        // Check tabs overflow after render
        setTimeout(() => this.checkTabsOverflow(), 0);
    }
    static get watchers() { return {
        "regions": [{
                "handleRegionsChange": 0
            }]
    }; }
};
WorkspaceManager.style = workspaceManagerCss();

export { WorkspaceManager as ui_workspace_manager };
