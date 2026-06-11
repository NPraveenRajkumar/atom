import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';
import { c as calculateUniversalPlacement, g as getTransformedAncestorOffset } from './dom-BMFah5q3.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const tabsCss = () => `@charset "UTF-8";.sr-only.sc-ui-tabs{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only.sc-ui-tabs{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.sc-ui-tabs-h{display:block;overflow:visible;position:relative;--tab-pink:var(--color-danger, #ec4899);--tab-pink-light:var(--bg-primary, #fce7f3);--tab-teal:var(--color-primary, #14b8a6);--tab-teal-light:var(--bg-primary, #ccfbf1);--tab-purple:var(--color-primary, #a855f7);--tab-blue:var(--color-primary, #10b981);--tab-dark-bg:var(--bg-primary, #1e293b);--tab-dark-surface:var(--color-primary, #334155);--tab-text-primary:var(--text-primary, #0f172a);--tab-text-secondary:var(--text-secondary, #64748b);--tab-label-color:var(--tab-text-override, var(--label-color, var(--text-primary, #1f2937)));--tab-border:var(--border-subtle, #e2e8f0);--tab-indicator-bg:var(--tab-active-color, var(--tab-pink));--enterprise-easing:cubic-bezier(0.4, 0, 0.2, 1)}.tabs-container.sc-ui-tabs{display:flex;flex-direction:column;font-family:var(--font-family, "'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif");border-radius:var(--border-radius, 8px);overflow:visible;background:var(--container-bg, transparent);width:100%;position:relative}.tabs-vertical.sc-ui-tabs{flex-direction:row;height:100%}.tabs-vertical.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{flex-direction:column;border-bottom:none;border-right:1px solid var(--border-color, var(--tab-border));align-items:stretch;overflow:visible;height:100%;max-height:100%;flex-shrink:0}.tabs-vertical.sc-ui-tabs .tabs-header.sc-ui-tabs{flex-direction:column;overflow-y:auto;overflow-x:visible;min-width:180px;flex:1;max-height:calc(100% - 80px);scrollbar-width:thin}.tabs-vertical.sc-ui-tabs .tabs-header.sc-ui-tabs::-webkit-scrollbar{width:4px}.tabs-vertical.sc-ui-tabs .tabs-header.sc-ui-tabs::-webkit-scrollbar-thumb{background:var(--color-primary, #cbd5e1);border-radius:2px}.tabs-vertical.sc-ui-tabs .tab-header.sc-ui-tabs{width:100%;justify-content:flex-start;text-align:left;flex-shrink:0}.tabs-header-wrapper.sc-ui-tabs{display:flex;align-items:center;position:relative;background-color:var(--header-bg, transparent);border-bottom:1px solid var(--border-color, var(--tab-border));padding:0 4px;overflow:visible;z-index:100}.indicator-top.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{border-bottom:none;border-top:1px solid var(--border-color, var(--tab-border))}.tab-header.sc-ui-tabs{border:none;outline:none !important;background:transparent;cursor:pointer;font-family:inherit;position:relative;z-index:10}.tab-header.sc-ui-tabs:focus{outline:none !important;box-shadow:none !important}.tab-header.sc-ui-tabs:focus-visible{outline:2px solid var(--tab-pink);outline-offset:-2px;border-radius:4px}.tabs-variant-line.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:transparent;border-bottom:1px solid rgba(0, 0, 0, 0.08)}.tabs-variant-line.sc-ui-tabs .tab-header.sc-ui-tabs{border:none;border-bottom:none;margin-bottom:-1px;color:var(--tab-label-color);opacity:0.6;font-weight:500;transition:all 0.25s var(--enterprise-easing);position:relative;outline:none !important;flex-shrink:0;padding:14px 22px;background:transparent;letter-spacing:-0.01em;font-size:14px}.tabs-variant-line.sc-ui-tabs .tab-header.sc-ui-tabs::after{display:none}.tabs-variant-line.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active):not(.tab-header-disabled){color:var(--tab-label-color);opacity:0.85;background:rgba(128, 128, 128, 0.05)}.tabs-variant-line.sc-ui-tabs .tab-header-active.sc-ui-tabs{color:var(--tab-active-color, var(--tab-pink));opacity:1;font-weight:600}.tabs-variant-line.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{background:var(--tab-indicator-bg);border-radius:4px 4px 0 0;opacity:1;transition:all 0.3s var(--enterprise-easing);z-index:10;height:4px;bottom:0;top:auto;box-shadow:0 -2px 10px -1px var(--tab-active-color, var(--tab-pink))}.indicator-top.tabs-variant-line.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{border-radius:0 0 4px 4px;bottom:auto;top:0;box-shadow:0 2px 10px -1px var(--tab-active-color, var(--tab-pink))}.tabs-vertical.tabs-variant-line.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{width:4px;height:auto;left:auto;right:0;border-radius:4px 0 0 4px;background:var(--tab-indicator-bg);box-shadow:-2px 0 10px -1px var(--tab-active-color, var(--tab-pink))}.tabs-variant-card.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:var(--bg-primary, #f8fafc);border-bottom:1px solid var(--border-subtle, #e2e8f0);padding:8px 8px 0 8px;gap:4px}.tabs-variant-card.sc-ui-tabs .tab-header.sc-ui-tabs{border:none;border-radius:10px 10px 0 0;margin-bottom:-1px;padding:12px 20px;background:transparent;color:var(--tab-label-color);opacity:0.6;outline:none !important;flex-shrink:0;transition:all 0.2s ease;font-weight:500}.tabs-variant-card.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active){background:rgba(128, 128, 128, 0.05);color:var(--tab-label-color);opacity:0.85}.tabs-variant-card.sc-ui-tabs .tab-header-active.sc-ui-tabs{background:var(--bg-primary, #ffffff);color:var(--tab-active-color, var(--color-primary, #3b82f6));opacity:1;font-weight:600;box-shadow:0 -2px 8px rgba(0, 0, 0, 0.04)}.tabs-variant-pill.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{border-bottom:none;gap:10px;padding:12px;background:transparent}.tabs-variant-pill.sc-ui-tabs .tab-header.sc-ui-tabs{border-radius:10px;border:none;padding:12px 24px;transition:all 0.25s cubic-bezier(0.4, 0, 0.2, 1);font-weight:500;color:var(--tab-label-color);opacity:0.6;outline:none !important;flex-shrink:0;font-size:14px}.tabs-variant-pill.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active){background:rgba(128, 128, 128, 0.07);color:var(--tab-label-color);opacity:0.85}.tabs-variant-pill.sc-ui-tabs .tab-header-active.sc-ui-tabs{background:var(--tab-active-color, var(--color-primary, #14b8a6));color:var(--text-standard, #ffffff);opacity:1;font-weight:600;box-shadow:0 4px 14px rgba(0, 0, 0, 0.15)}.tabs-variant-subtle.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:transparent;border-bottom:none;gap:6px;padding:10px}.tabs-variant-subtle.sc-ui-tabs .tab-header.sc-ui-tabs{border-radius:8px;border:none;color:var(--tab-label-color);opacity:0.6;padding:12px 18px;transition:all 0.2s ease;outline:none !important;flex-shrink:0;font-weight:500}.tabs-variant-subtle.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active){background:rgba(128, 128, 128, 0.06);color:var(--tab-label-color);opacity:0.85}.tabs-variant-subtle.sc-ui-tabs .tab-header-active.sc-ui-tabs{background:color-mix(in srgb, var(--tab-active-color, var(--tab-pink)) 12%, transparent);color:var(--tab-active-color, var(--tab-pink));opacity:1;font-weight:600}.tabs-variant-glass.sc-ui-tabs{background:rgba(255, 255, 255, 0.75);backdrop-filter:blur(24px);-webkit-backdrop-filter:blur(24px);border:1px solid rgba(255, 255, 255, 0.7);box-shadow:0 8px 32px rgba(0, 0, 0, 0.08)}.tabs-variant-glass.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:rgba(255, 255, 255, 0.5);border-bottom:1px solid rgba(255, 255, 255, 0.4)}.tabs-variant-glass.sc-ui-tabs .tab-header.sc-ui-tabs{color:var(--tab-label-color);opacity:0.65;outline:none !important;flex-shrink:0;font-weight:500;transition:all 0.25s ease;padding:12px 20px;border:none}.tabs-variant-glass.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active){background:rgba(128, 128, 128, 0.1);color:var(--tab-label-color);opacity:0.9}.tabs-variant-glass.sc-ui-tabs .tab-header-active.sc-ui-tabs{background:rgba(255, 255, 255, 0.95);color:var(--tab-active-color, var(--color-primary, #3b82f6));opacity:1;font-weight:600;box-shadow:0 4px 12px rgba(0, 0, 0, 0.08)}.tabs-variant-folder.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:transparent;padding:0 16px;align-items:flex-end;border-bottom:none;gap:0}.tabs-variant-folder.sc-ui-tabs .tab-header.sc-ui-tabs{background:color-mix(in srgb, var(--tab-label-color) 10%, transparent);color:var(--tab-label-color);opacity:0.65;padding:12px 24px;margin-right:4px;border-radius:12px 12px 0 0;border:none;position:relative;transition:all 0.2s ease;font-weight:500;box-shadow:inset 0 -2px 4px rgba(0, 0, 0, 0.05)}.tabs-variant-folder.sc-ui-tabs .tab-header.sc-ui-tabs::before,.tabs-variant-folder.sc-ui-tabs .tab-header.sc-ui-tabs::after{content:"";position:absolute;bottom:0;width:12px;height:12px;background:transparent;pointer-events:none;display:none}.tabs-variant-folder.sc-ui-tabs .tab-header-active.sc-ui-tabs{background:var(--tab-active-color, var(--color-primary, #f59e0b));color:var(--text-standard, #ffffff);opacity:1;z-index:10;box-shadow:0 -4px 12px rgba(0, 0, 0, 0.14)}.tabs-variant-folder.sc-ui-tabs .tab-header-active.sc-ui-tabs::before{display:block;left:-12px;border-bottom-right-radius:12px;box-shadow:6px 0 0 0 var(--tab-active-color, var(--color-warning, #f59e0b))}.tabs-variant-folder.sc-ui-tabs .tab-header-active.sc-ui-tabs::after{display:block;right:-12px;border-bottom-left-radius:12px;box-shadow:-6px 0 0 0 var(--tab-active-color, var(--color-warning, #f59e0b))}.tabs-variant-slanted.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:var(--bg-secondary, #f1f5f9);padding:10px 10px 0;border-bottom:2px solid var(--border-subtle, #e2e8f0)}.tabs-variant-slanted.sc-ui-tabs .tab-header.sc-ui-tabs{padding:12px 32px;background:color-mix(in srgb, var(--tab-label-color) 8%, transparent);color:var(--tab-label-color);opacity:0.6;margin-right:-12px;font-weight:600;text-transform:uppercase;font-size:12px;letter-spacing:0.05em;clip-path:polygon(15px 0, 100% 0, calc(100% - 15px) 100%, 0 100%);transition:all 0.3s ease}.tabs-variant-slanted.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active){background:color-mix(in srgb, var(--tab-label-color) 16%, transparent);color:var(--tab-label-color);opacity:0.85}.tabs-variant-slanted.sc-ui-tabs .tab-header-active.sc-ui-tabs{background:var(--tab-active-color, var(--bg-inverted, #1e293b));color:var(--text-standard, #ffffff);opacity:1;z-index:5;transform:scale(1.05);box-shadow:0 4px 15px rgba(0, 0, 0, 0.2)}.tabs-variant-minimal.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:transparent;border-bottom:1px solid rgba(255, 255, 255, 0.1)}.tabs-variant-minimal.sc-ui-tabs .tab-header.sc-ui-tabs{padding:16px 24px;color:var(--tab-label-color);opacity:0.55;font-weight:500;transition:color 0.3s ease, opacity 0.25s ease}.tabs-variant-minimal.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active){opacity:0.8}.tabs-variant-minimal.sc-ui-tabs .tab-header-active.sc-ui-tabs{color:var(--tab-active-color, var(--tab-label-color));opacity:1}.tabs-variant-minimal.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{height:3px;bottom:0;top:auto;border-radius:3px 3px 0 0;background:var(--tab-indicator-bg);box-shadow:0 -2px 12px var(--tab-active-color, var(--tab-pink));opacity:1}.indicator-top.tabs-variant-minimal.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{border-radius:0 0 3px 3px;bottom:auto;top:0;box-shadow:0 2px 12px var(--tab-active-color, var(--tab-pink))}.indicator-style-capsule.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{height:6px !important;border-radius:6px !important;box-shadow:0 -2px 12px -2px var(--tab-active-color, var(--tab-pink))}.indicator-top.indicator-style-capsule.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{border-radius:6px !important;box-shadow:0 2px 12px -2px var(--tab-active-color, var(--tab-pink))}.tabs-vertical.indicator-style-capsule.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{width:6px !important;border-radius:6px !important;box-shadow:-2px 0 12px -2px var(--tab-active-color, var(--tab-pink))}.indicator-style-dot.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{height:6px !important;transform-origin:bottom center !important}.indicator-style-dot.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs::after{content:"";position:absolute;bottom:0;left:50%;transform:translateX(-50%);width:6px;height:6px;border-radius:50%;background:var(--tab-active-color, var(--tab-pink));box-shadow:0 0 8px 2px var(--tab-active-color, var(--tab-pink))}.indicator-style-dot.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{background:transparent !important;box-shadow:none !important;height:8px !important;border-radius:0 !important}.indicator-top.indicator-style-dot.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs::after{bottom:auto;top:0;transform:translate(-50%, 0)}.indicator-style-glow.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{height:4px !important;border-radius:4px !important;filter:blur(1px);box-shadow:0 0 8px 3px var(--tab-active-color, var(--tab-pink)), 0 0 20px 6px color-mix(in srgb, var(--tab-active-color, var(--tab-pink)) 50%, transparent) !important}.tabs-vertical.indicator-style-glow.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{width:4px !important;filter:blur(1px);box-shadow:0 0 8px 3px var(--tab-active-color, var(--tab-pink)), 0 0 20px 6px color-mix(in srgb, var(--tab-active-color, var(--tab-pink)) 50%, transparent) !important}.indicator-style-bold.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{height:8px !important;border-radius:8px 8px 0 0 !important;box-shadow:0 -3px 14px -2px var(--tab-active-color, var(--tab-pink))}.indicator-top.indicator-style-bold.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{border-radius:0 0 8px 8px !important;box-shadow:0 3px 14px -2px var(--tab-active-color, var(--tab-pink))}.tabs-vertical.indicator-style-bold.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{width:8px !important;border-radius:8px 0 0 8px !important;box-shadow:-3px 0 14px -2px var(--tab-active-color, var(--tab-pink))}.indicator-style-none.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{display:none !important}.tabs-variant-elastic.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:var(--bg-primary, #ffffff);padding:8px;border-radius:999px;border:1px solid var(--border-subtle, #e2e8f0);box-shadow:0 8px 30px rgba(0, 0, 0, 0.05);display:inline-flex;gap:0;align-self:center}.tabs-variant-elastic.sc-ui-tabs .tab-header.sc-ui-tabs{padding:10px 24px;border-radius:999px;color:var(--tab-label-color);opacity:0.55;font-weight:600;z-index:10;transition:color 0.3s ease;font-size:13px;text-transform:uppercase;letter-spacing:0.05em}.tabs-variant-elastic.sc-ui-tabs .tab-header-active.sc-ui-tabs{color:var(--text-standard, #ffffff);opacity:1}.tabs-variant-elastic.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{height:calc(100% - 16px) !important;top:8px;border-radius:999px;background:var(--tab-indicator-bg);box-shadow:0 6px 20px rgba(var(--color-primary-rgb, 59, 130, 246), 0.4);z-index:5;transition:transform 0.4s cubic-bezier(0.34, 1.56, 0.64, 1), width 0.3s ease}.tabs-variant-sidebar.tabs-vertical.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:var(--color-success, #22c55e);border-right:none;padding:24px 12px;width:80px;flex-shrink:0;display:flex;flex-direction:column;gap:32px}.tabs-variant-sidebar.tabs-vertical.sc-ui-tabs .tab-header.sc-ui-tabs{width:48px;height:48px;min-width:48px;display:flex;align-items:center;justify-content:center;border-radius:12px;background:rgba(255, 255, 255, 0.2);color:var(--text-standard, #ffffff);padding:0;margin:0 auto;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1)}.tabs-variant-sidebar.tabs-vertical.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active){background:rgba(255, 255, 255, 0.3);transform:scale(1.1)}.tabs-variant-sidebar.tabs-vertical.sc-ui-tabs .tab-header-active.sc-ui-tabs{background:var(--bg-primary, #ffffff);color:var(--color-success, #22c55e);transform:scale(1.15);box-shadow:0 8px 25px rgba(0, 0, 0, 0.15)}.tabs-variant-sidebar.tabs-vertical.sc-ui-tabs .tab-icon.sc-ui-tabs{font-size:24px}.tabs-variant-sidebar.tabs-vertical.sc-ui-tabs .tab-title.sc-ui-tabs{display:none}.tab-selection-indicator.sc-ui-tabs{position:absolute;top:0;left:0;pointer-events:none;transition:transform 0.35s cubic-bezier(0.4, 0, 0.2, 1), width 0.35s cubic-bezier(0.4, 0, 0.2, 1), height 0.35s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.2s ease, box-shadow 0.3s ease;opacity:0;z-index:5}.tab-header.sc-ui-tabs .tab-selection-indicator.sc-ui-tabs{opacity:1 !important}.tabs-variant-enclosed.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{background:var(--bg-secondary, #f1f5f9);padding:6px;gap:4px;border-radius:12px;border:1px solid var(--border-subtle, #e2e8f0)}.tabs-variant-enclosed.sc-ui-tabs .tab-header.sc-ui-tabs{background:transparent;border-radius:9px;padding:12px 20px;color:var(--tab-label-color);opacity:0.6;border:none;flex-shrink:0;outline:none !important;font-weight:500;transition:all 0.2s ease}.tabs-variant-enclosed.sc-ui-tabs .tab-header.sc-ui-tabs:hover:not(.tab-header-active){background:rgba(128, 128, 128, 0.08);color:var(--tab-label-color);opacity:0.85}.tabs-variant-enclosed.sc-ui-tabs .tab-header-active.sc-ui-tabs{background:var(--bg-primary, #ffffff);color:var(--tab-active-color, var(--tab-text-primary));opacity:1;font-weight:600;box-shadow:0 2px 6px rgba(0, 0, 0, 0.08)}.tabs-size-xs.sc-ui-tabs .tab-header.sc-ui-tabs{padding:4px 10px;font-size:11px;min-height:28px;gap:4px}.tabs-size-xs.sc-ui-tabs .tab-icon.sc-ui-tabs{font-size:12px}.tabs-size-sm.sc-ui-tabs .tab-header.sc-ui-tabs{padding:6px 12px;font-size:12px;min-height:32px}.tabs-size-md.sc-ui-tabs .tab-header.sc-ui-tabs{padding:10px 18px;font-size:14px;min-height:40px}.tabs-size-lg.sc-ui-tabs .tab-header.sc-ui-tabs{padding:14px 24px;font-size:15px;font-weight:500;min-height:48px}.tabs-size-xl.sc-ui-tabs .tab-header.sc-ui-tabs{padding:18px 32px;font-size:16px;font-weight:500;min-height:56px;letter-spacing:0.01em}.tabs-size-xs.sc-ui-tabs .tab-icon.sc-ui-tabs{font-size:12px}.tabs-size-sm.sc-ui-tabs .tab-icon.sc-ui-tabs{font-size:14px}.tabs-size-md.sc-ui-tabs .tab-icon.sc-ui-tabs{font-size:15px}.tabs-size-lg.sc-ui-tabs .tab-icon.sc-ui-tabs{font-size:18px}.tabs-size-xl.sc-ui-tabs .tab-icon.sc-ui-tabs{font-size:20px}.tabs-size-xs.sc-ui-tabs .tab-badge.sc-ui-tabs{font-size:9px;padding:1px 4px;min-width:14px;height:14px}.tabs-size-sm.sc-ui-tabs .tab-badge.sc-ui-tabs{font-size:10px;padding:1px 5px;min-width:16px;height:16px}.tabs-size-xl.sc-ui-tabs .tab-badge.sc-ui-tabs{font-size:12px;padding:3px 8px;min-width:20px;height:20px}.tabs-vertical.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{flex-direction:column;border-bottom:none;border-right:1px solid var(--border-color, var(--tab-border));align-items:stretch;overflow:visible;max-height:100%;height:100%}.tab-title.sc-ui-tabs{flex:1;white-space:nowrap !important;overflow:hidden;text-overflow:ellipsis;max-width:240px}.tabs-header.sc-ui-tabs{display:flex;flex:1;overflow:visible;flex-wrap:nowrap;position:relative}.tabs-scrollable.sc-ui-tabs .tabs-header.sc-ui-tabs{overflow-x:auto;overflow-y:visible;scrollbar-width:none;align-items:flex-end;scroll-behavior:smooth}.tabs-scrollable.sc-ui-tabs .tabs-header.sc-ui-tabs::-webkit-scrollbar{display:none}.scroll-button.sc-ui-tabs{z-index:20;background:var(--bg-primary, #ffffff);border:1px solid var(--border-subtle, #e2e8f0);border-radius:50%;cursor:pointer;display:flex;align-items:center;justify-content:center;width:34px;height:34px;min-width:34px;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);color:var(--text-muted, #64748b);margin:0 6px;box-shadow:0 2px 6px rgba(0, 0, 0, 0.08);font-size:20px;font-weight:600}.scroll-button.sc-ui-tabs:hover{background:var(--tab-pink-light);color:var(--tab-pink);border-color:var(--tab-pink);transform:scale(1.08);box-shadow:0 4px 12px rgba(236, 72, 153, 0.25)}.scroll-button.sc-ui-tabs:active{transform:scale(0.95)}.tabs-vertical.sc-ui-tabs .scroll-button.sc-ui-tabs{margin:6px 0;width:100%;min-width:auto;border-radius:6px}.tabs-vertical.sc-ui-tabs .scroll-button.scroll-up.sc-ui-tabs,.tabs-vertical.sc-ui-tabs .scroll-button.scroll-down.sc-ui-tabs{height:32px;width:100%;border-radius:6px;font-size:12px}.tabs-content.sc-ui-tabs{flex:1;position:relative;background-color:var(--content-bg, var(--bg-primary, var(--text-standard, #ffffff)));padding:0;z-index:1}.tab-content.sc-ui-tabs{display:none;padding:28px;animation-fill-mode:both}.tab-content-active.sc-ui-tabs{display:block}.tab-header-content.sc-ui-tabs{display:flex;align-items:center;gap:10px}.tab-icon.sc-ui-tabs{font-size:18px;display:inline-flex;opacity:0.9}.tab-header-active.sc-ui-tabs .tab-icon.sc-ui-tabs{opacity:1}.tab-badge.sc-ui-tabs{background-color:var(--tab-pink);color:var(--text-standard, #ffffff);padding:3px 10px;border-radius:14px;font-size:11px;line-height:1.5;font-weight:600;min-width:22px;text-align:center;transition:all 0.2s ease;box-shadow:0 2px 4px rgba(0, 0, 0, 0.15)}.tab-badge.badge-neutral.sc-ui-tabs{background-color:var(--bg-secondary, #f1f5f9);color:var(--text-muted, #64748b);box-shadow:none}.tab-badge.badge-primary.sc-ui-tabs{background-color:var(--tab-blue);color:var(--text-standard, #ffffff)}.tab-badge.badge-success.sc-ui-tabs{background-color:var(--tab-teal);color:var(--text-standard, #ffffff)}.tab-badge.badge-warning.sc-ui-tabs{background-color:var(--color-warning, #f59e0b);color:var(--text-standard, #ffffff)}.tab-close.sc-ui-tabs{margin-left:8px;width:22px;height:22px;display:flex;align-items:center;justify-content:center;border-radius:50%;border:none;background:transparent;cursor:pointer;color:var(--color-primary, #94a3b8);padding:0;transition:all 0.2s ease;font-size:18px;line-height:1}.tab-close.sc-ui-tabs:hover{background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.12);color:var(--color-danger, #ef4444);transform:scale(1.15)}.tab-close-all.sc-ui-tabs{color:var(--color-primary, #94a3b8);background:transparent;border:none;cursor:pointer;padding:10px;border-radius:10px;transition:all 0.2s ease;display:flex;align-items:center;justify-content:center}.tab-close-all.sc-ui-tabs:hover{background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.12);color:var(--color-danger, #ef4444)}.tab-close-all.sc-ui-tabs svg.sc-ui-tabs{width:18px;height:18px}.tab-list-button.sc-ui-tabs{background:transparent;border:none;cursor:pointer;color:var(--text-secondary, var(--text-muted, #64748b));padding:10px;border-radius:8px;display:flex;align-items:center;justify-content:center;transition:all 0.2s ease;margin-right:6px}.tab-list-button.sc-ui-tabs:hover{background:rgba(236, 72, 153, 0.1);color:var(--tab-pink)}.tab-list-dropdown.sc-ui-tabs{position:fixed;background:var(--bg-primary, #ffffff);min-width:240px;max-width:340px;overflow-y:auto;border-radius:14px;box-shadow:0 12px 48px rgba(0, 0, 0, 0.14), 0 4px 16px rgba(0, 0, 0, 0.1);border:1px solid rgba(0, 0, 0, 0.05);z-index:1000;padding:8px;animation:dropdownSlideIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);transform-origin:top right;display:flex;flex-direction:column}.tab-list-header.sc-ui-tabs{display:flex;align-items:center;justify-content:space-between;padding:6px 14px 10px;border-bottom:1px solid var(--border-subtle, rgba(0, 0, 0, 0.06));margin-bottom:4px}.tab-list-header-title.sc-ui-tabs{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.06em;color:var(--text-muted, #94a3b8)}.tab-list-header-count.sc-ui-tabs{font-size:11px;font-weight:600;padding:1px 8px;border-radius:20px;background:var(--bg-secondary, #f1f5f9);color:var(--text-muted, #64748b)}.tab-list-search.sc-ui-tabs{padding:8px 10px 4px}.tab-list-active-check.sc-ui-tabs{display:inline-flex;align-items:center;margin-left:auto;flex-shrink:0;color:var(--tab-pink, var(--color-primary, #ec4899));opacity:0.9}.tab-list-item.sc-ui-tabs{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:10px 14px;background:transparent;border:none;border-radius:10px;cursor:pointer;font-size:14px;color:var(--color-primary, #334155);transition:all 0.2s ease;font-weight:500}.tab-list-item.sc-ui-tabs:hover{background:var(--bg-primary, #f8fafc);color:var(--text-primary, #0f172a);transform:translateX(4px)}.tab-list-item.active.sc-ui-tabs{background:linear-gradient(135deg, rgba(236, 72, 153, 0.12) 0%, rgba(168, 85, 247, 0.12) 100%);color:var(--tab-pink);font-weight:600}.tab-list-icon.sc-ui-tabs{font-size:20px;display:inline-flex;opacity:0.9}.tab-list-item.active.sc-ui-tabs .tab-list-icon.sc-ui-tabs{opacity:1}.tab-list-title.sc-ui-tabs{flex:1;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tab-list-badge.sc-ui-tabs{background:var(--bg-secondary, #f1f5f9);color:var(--text-muted, #64748b);padding:3px 10px;border-radius:14px;font-size:11px;font-weight:600}.tab-list-item.active.sc-ui-tabs .tab-list-badge.sc-ui-tabs{background:var(--tab-pink);color:var(--text-standard, #ffffff)}.tab-actions.sc-ui-tabs{position:relative;display:flex;align-items:center;z-index:10}.tab-actions.active.sc-ui-tabs{z-index:9998}.tab-menu.sc-ui-tabs{width:26px;height:26px;display:flex;align-items:center;justify-content:center;border-radius:8px;border:none;background:transparent;cursor:pointer;color:var(--text-secondary, #94a3b8);font-weight:bold;line-height:1;padding:0;transition:all 0.2s ease;font-size:16px}.tab-menu.sc-ui-tabs:hover,.tab-actions.active.sc-ui-tabs .tab-menu.sc-ui-tabs{background:rgba(0, 0, 0, 0.06);color:var(--text-primary, #1e293b)}.tab-menu-popover.sc-ui-tabs{position:absolute;top:100%;margin-top:8px;background:var(--bg-primary, #ffffff);min-width:180px;border-radius:12px;box-shadow:0 12px 48px rgba(0, 0, 0, 0.14), 0 4px 16px rgba(0, 0, 0, 0.1);border:1px solid rgba(0, 0, 0, 0.05);z-index:9999;padding:8px;display:flex;flex-direction:column;animation:dropdownSlideIn 0.2s cubic-bezier(0.16, 1, 0.3, 1);transform-origin:top right}.tab-menu-item.sc-ui-tabs{display:flex;align-items:center;gap:12px;width:100%;text-align:left;padding:8px 12px;background:transparent;border:none;border-radius:9px;cursor:pointer;font-size:14px;color:var(--color-primary, #334155);transition:all 0.2s ease;white-space:nowrap;font-weight:500}.tab-menu-item.sc-ui-tabs:hover{background:var(--bg-secondary, #f1f5f9);color:var(--text-primary, #0f172a)}.tab-menu-item.danger.sc-ui-tabs{color:var(--color-danger, #ef4444)}.tab-menu-item.danger.sc-ui-tabs:hover{background:var(--bg-primary, #fef2f2)}.menu-icon.sc-ui-tabs{font-size:15px;width:18px;display:inline-flex;justify-content:center;opacity:0.9}.menu-divider.sc-ui-tabs{height:1px;background:var(--bg-primary, #e2e8f0);margin:6px 0}@keyframes dropdownSlideIn{from{opacity:0;transform:scale(0.96) translateY(-6px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes slideDown{from{opacity:0;margin-top:-8px}to{opacity:1;margin-top:0}}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes scaleIn{from{opacity:0}to{opacity:1}}.animation-slide.tab-content-active.sc-ui-tabs{animation:slideDown 0.35s cubic-bezier(0.4, 0, 0.2, 1)}.animation-fade.tab-content-active.sc-ui-tabs{animation:fadeIn 0.35s ease}.animation-scale.tab-content-active.sc-ui-tabs{animation:scaleIn 0.35s cubic-bezier(0.4, 0, 0.2, 1)}.tab-header-disabled.sc-ui-tabs{opacity:0.4;cursor:not-allowed;pointer-events:none}.tabs-vertical.tabs-variant-pill.sc-ui-tabs .tabs-header-wrapper.sc-ui-tabs{gap:10px;padding:12px;border-right:none}.tabs-vertical.tabs-variant-pill.sc-ui-tabs .tab-header.sc-ui-tabs{width:100%}@media (max-width: 640px){.tab-header.sc-ui-tabs{padding:10px 14px;font-size:13px}.tabs-size-lg.sc-ui-tabs .tab-header.sc-ui-tabs{padding:12px 18px;font-size:14px}}.tab-edit-input.sc-ui-tabs{background:var(--bg-primary, #ffffff);border:1px solid var(--color-primary, #1890ff);border-radius:4px;color:inherit;font-family:inherit;font-size:inherit;font-weight:inherit;padding:2px 4px;width:100%;max-width:200px;outline:none;box-shadow:0 0 0 2px rgba(24, 144, 255, 0.2)}.tabs-container[aria-orientation=vertical].sc-ui-tabs .tab-edit-input.sc-ui-tabs{max-width:none}`;

const Tabs = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.tabChange = createEvent(this, "tabChange");
        this.tabClose = createEvent(this, "tabClose");
        this.closeAll = createEvent(this, "closeAll");
        this.tabEdit = createEvent(this, "tabEdit");
        this.tabDelete = createEvent(this, "tabDelete");
        this.tabOpenPanel = createEvent(this, "tabOpenPanel");
        this.tabsReordered = createEvent(this, "tabsReordered");
        this.tabUpdate = createEvent(this, "tabUpdate");
    }
    get element() { return getElement(this); }
    /**
     * Array of tab items
     */
    items = [];
    /**
     * ID of the tab that should be active by default
     */
    defaultActive = '';
    /**
     * Animation duration in milliseconds
     */
    animationDuration = 300;
    /**
     * Orientation of tabs: 'horizontal' or 'vertical'
     */
    orientation = 'horizontal';
    /**
     * Position of the indicator for line variant: TopBottom
     */
    indicatorPosition = 'bottom';
    /**
     * Show close all button
     */
    showCloseAll = false;
    /**
     * Show tab list dropdown button
     */
    showTabList = false;
    /**
     * Maximum width for tab titles (in pixels)
     */
    maxTabWidth = 300;
    /**
     * Maximum visible length for tab titles (characters). If exceeded, title is ellipsized via CSS and full text is available in tooltip.
     */
    maxTitleLength = 24;
    /**
     * Enable text wrapping in tabs
     */
    wrapText = false;
    /**
     * Position of tabs header: 'left', 'center', 'right', 'full-width'
     */
    position = 'left';
    /**
     * Scroll mode: 'auto' (auto-scroll to active), 'manual' (user controls), 'none' (no scroll)
     */
    scrollMode = 'manual';
    /**
     * Animation on tab selection
     */
    selectionAnimation = 'slide';
    /**
     * Icon position: 'start', 'end', 'top', 'bottom'
     */
    iconPosition = 'left';
    /**
     * Show only icons (hide titles)
     */
    iconOnly = false;
    /**
     * Scroll button placement: 'split' (ends), 'start' (both left/top), 'end' (both right/bottom)
     */
    scrollButtonPlacement = 'split';
    /**
     * Tab variant style
     */
    variant = 'line';
    /**
     * Custom active/indicator color (sets --tab-active-color). Accepts any CSS color value.
     */
    activeColor = '';
    /**
     * Selection indicator shape — applies to variants that use a sliding bar (line, minimal).
     * - line    — default 4px bar
     * - capsule — pill-rounded fat bar
     * - dot     — centred dot
     * - glow    — soft blur glow bar
     * - bold    — extra-thick bar
     * - none    — no indicator
     */
    indicatorStyle = 'line';
    /**
     * Optional gradient for the indicator bar.
     * Accepts any CSS gradient string, e.g. "linear-gradient(90deg,#ec4899,#8b5cf6)".
     * When set, overrides activeColor on the indicator (activeColor still affects text & active bg).
     * Leave empty to use the solid activeColor.
     */
    indicatorGradient = '';
    /**
     * Tab size: xs | sm | md | lg | xl
     */
    size = 'md';
    /**
     * Default library for icons
     */
    iconLibrary = 'default';
    /**
     * When true, non-active tab panels are not mounted until first activated (content-based tabs only)
     */
    lazy = false;
    /**
     * Enable drag-and-drop to reorder tabs
     */
    isDraggable = false;
    activeTab = '';
    parsedItems = [];
    activeMenuTab = null; // Track open menu
    showScrollButtons = false;
    isTabListOpen = false;
    tabListPosition = null;
    tabListSearch = '';
    activeMenuPosition = null;
    editingTab = null;
    draggingTabId = null;
    tabListTrigger;
    activeMenuTrigger;
    _mountedTabs = new Set();
    tabChange;
    tabClose;
    closeAll;
    tabEdit;
    tabDelete;
    tabOpenPanel;
    tabsReordered;
    tabUpdate;
    tabsHeaderRef;
    indicatorRef;
    resizeObserver;
    parseItems(newValue) {
        if (typeof newValue === 'string') {
            try {
                this.parsedItems = JSON.parse(newValue);
            }
            catch (error) {
                console.error('Invalid JSON for tab items:', error);
                this.parsedItems = [];
            }
        }
        else {
            this.parsedItems = [...newValue];
        }
        // Set default active tab if not set
        if (!this.activeTab && this.parsedItems.length > 0) {
            this.activeTab = this.defaultActive || this.parsedItems[0].id;
        }
        setTimeout(() => this.updateIndicator(), 0);
    }
    onDefaultActiveChange(newValue) {
        if (newValue && this.parsedItems.some(item => item.id === newValue)) {
            this.activeTab = newValue;
            this.updateIndicator();
        }
    }
    onActiveTabChange() {
        this.updateIndicator();
    }
    componentWillLoad() {
        this.parseItems(this.items);
        this.activeTab = this.defaultActive || (this.parsedItems.length > 0 ? this.parsedItems[0].id : '');
    }
    componentDidLoad() {
        this.checkScrollButtons();
        if (this.scrollMode === 'auto') {
            this.scrollToActiveTab();
        }
        // Delayed check for vertical tabs where layout may not be ready
        setTimeout(() => {
            this.checkScrollButtons();
        }, 100);
        this.resizeObserver = new ResizeObserver(() => {
            this.checkScrollButtons();
        });
        if (this.element) {
            this.resizeObserver.observe(this.element);
        }
        if (this.tabsHeaderRef) {
            this.resizeObserver.observe(this.tabsHeaderRef);
        }
        // Initial indicator placement
        requestAnimationFrame(() => this.updateIndicator());
    }
    disconnectedCallback() {
        if (this.resizeObserver) {
            this.resizeObserver.disconnect();
        }
    }
    componentDidUpdate() {
        if (this.scrollMode === 'auto') {
            this.scrollToActiveTab();
        }
        this.checkScrollButtons();
        this.updateIndicator();
    }
    handleKeyDown(event) {
        if (!this.element.contains(event.target))
            return;
        const target = event.target;
        const tab = target.closest('.tab-header');
        if (!tab)
            return;
        const tabId = tab.getAttribute('data-id');
        if (!tabId)
            return;
        switch (event.key) {
            case 'Enter':
            case ' ':
                event.preventDefault();
                this.selectTab(tabId);
                break;
            case 'ArrowRight':
                if (this.orientation === 'horizontal') {
                    event.preventDefault();
                    this.focusNextTab(tabId);
                }
                break;
            case 'ArrowLeft':
                if (this.orientation === 'horizontal') {
                    event.preventDefault();
                    this.focusPreviousTab(tabId);
                }
                break;
            case 'ArrowDown':
                if (this.orientation === 'vertical') {
                    event.preventDefault();
                    this.focusNextTab(tabId);
                }
                break;
            case 'ArrowUp':
                if (this.orientation === 'vertical') {
                    event.preventDefault();
                    this.focusPreviousTab(tabId);
                }
                break;
            case 'Home':
                event.preventDefault();
                this.focusFirstTab();
                break;
            case 'End':
                event.preventDefault();
                this.focusLastTab();
                break;
        }
    }
    handleScroll() {
        if (this.isTabListOpen || this.activeMenuTab) {
            this.recalculateDropdownPositions();
        }
    }
    recalculateDropdownPositions() {
        requestAnimationFrame(() => {
            if (this.isTabListOpen && this.tabListTrigger) {
                const placement = calculateUniversalPlacement(this.tabListTrigger, {
                    menuWidth: 300,
                    menuHeight: 400,
                    gap: 6,
                    placement: 'auto',
                    align: 'end',
                    padding: 10,
                    useTransformedAncestorOffset: false,
                });
                this.tabListPosition = {
                    x: placement.left,
                    y: placement.top ?? 0,
                    width: Math.min(340, Math.max(240, this.tabListTrigger.getBoundingClientRect().width * 2)),
                    maxHeight: Math.min(420, placement.availableHeight),
                };
            }
            if (this.activeMenuTab && this.activeMenuTrigger) {
                const placement = calculateUniversalPlacement(this.activeMenuTrigger, {
                    menuWidth: 180,
                    menuHeight: 200,
                    gap: 4,
                    placement: 'bottom',
                    align: 'end',
                });
                this.activeMenuPosition = {
                    x: placement.left,
                    y: placement.top ?? 0,
                };
            }
        });
    }
    handleWindowClick(event) {
        // Close menu if clicking outside
        const target = event.target;
        if (this.activeMenuTab) {
            if (!target.closest('.tab-actions')) {
                this.activeMenuTab = null;
            }
        }
        if (this.isTabListOpen) {
            if (!target.closest('.tab-list-wrapper')) {
                this.isTabListOpen = false;
                this.tabListSearch = '';
            }
        }
    }
    toggleMenu(tabId, event) {
        event.stopPropagation();
        if (this.activeMenuTab === tabId) {
            this.activeMenuTab = null;
            this.activeMenuPosition = null;
            this.activeMenuTrigger = undefined;
        }
        else {
            this.activeMenuTrigger = event.currentTarget;
            const rect = this.activeMenuTrigger.getBoundingClientRect();
            const offset = getTransformedAncestorOffset(this.element);
            this.activeMenuTab = tabId;
            this.activeMenuPosition = {
                x: rect.right - offset.x,
                y: rect.bottom - offset.y + 4,
            };
        }
    }
    toggleTabList(event) {
        event.stopPropagation();
        this.tabListSearch = '';
        this.isTabListOpen = !this.isTabListOpen;
        if (this.isTabListOpen) {
            this.tabListTrigger = event.currentTarget;
            // Use calculateUniversalPlacement with fixed positioning (no ancestor offset)
            // so left/top are pure viewport coords matching position:fixed.
            const placement = calculateUniversalPlacement(this.tabListTrigger, {
                menuWidth: 300,
                menuHeight: 400,
                gap: 6,
                placement: 'auto',
                align: 'end',
                padding: 10,
                useTransformedAncestorOffset: false,
            });
            this.tabListPosition = {
                x: placement.left,
                y: placement.top ?? 0,
                width: Math.min(340, Math.max(240, this.tabListTrigger.getBoundingClientRect().width * 2)),
                maxHeight: Math.min(420, placement.availableHeight),
            };
        }
        else {
            this.tabListPosition = null;
            this.tabListTrigger = undefined;
        }
    }
    selectTab(tabId) {
        const item = this.parsedItems.find(i => i.id === tabId);
        if (item?.disabled)
            return;
        const previousTab = this.activeTab;
        this.activeTab = tabId;
        this.tabChange.emit({
            tabId: previousTab,
            activeTab: tabId,
        });
        // Close tab list if open
        this.isTabListOpen = false;
        // Smooth scroll to selected tab
        requestAnimationFrame(() => {
            const tabElement = this.element.querySelector(`[data-id="${tabId}"]`);
            if (tabElement) {
                tabElement.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
            }
        });
    }
    handleCloseTab(tabId, event) {
        event.stopPropagation();
        const tabIndex = this.parsedItems.findIndex(item => item.id === tabId);
        if (tabIndex === -1)
            return;
        if (this.activeTab === tabId && this.parsedItems.length > 1) {
            const newActiveIndex = tabIndex < this.parsedItems.length - 1 ? tabIndex : tabIndex - 1;
            this.activeTab = this.parsedItems[newActiveIndex].id;
        }
        this.parsedItems = this.parsedItems.filter(item => item.id !== tabId);
        this.tabClose.emit(tabId);
    }
    focusNextTab(currentId) {
        const currentIndex = this.parsedItems.findIndex(item => item.id === currentId);
        const nextIndex = (currentIndex + 1) % this.parsedItems.length;
        this.focusTab(this.parsedItems[nextIndex].id);
    }
    focusPreviousTab(currentId) {
        const currentIndex = this.parsedItems.findIndex(item => item.id === currentId);
        const prevIndex = currentIndex === 0 ? this.parsedItems.length - 1 : currentIndex - 1;
        this.focusTab(this.parsedItems[prevIndex].id);
    }
    focusFirstTab() {
        if (this.parsedItems.length > 0) {
            this.focusTab(this.parsedItems[0].id);
        }
    }
    focusLastTab() {
        if (this.parsedItems.length > 0) {
            this.focusTab(this.parsedItems[this.parsedItems.length - 1].id);
        }
    }
    focusTab(tabId) {
        const tabElement = this.element.querySelector(`[data-id="${tabId}"]`);
        if (tabElement) {
            tabElement.focus();
        }
    }
    handleDragStart = (e, tabId) => {
        if (!this.isDraggable)
            return;
        this.draggingTabId = tabId;
        if (e.dataTransfer) {
            e.dataTransfer.effectAllowed = 'move';
            e.dataTransfer.setData('text/plain', tabId);
        }
    };
    handleDragOver = (e) => {
        if (!this.isDraggable)
            return;
        e.preventDefault();
        if (e.dataTransfer) {
            e.dataTransfer.dropEffect = 'move';
        }
    };
    handleDrop = (e, targetId) => {
        if (!this.isDraggable || !this.draggingTabId || this.draggingTabId === targetId)
            return;
        e.preventDefault();
        const items = [...this.parsedItems];
        const fromIndex = items.findIndex(i => i.id === this.draggingTabId);
        const toIndex = items.findIndex(i => i.id === targetId);
        if (fromIndex !== -1 && toIndex !== -1) {
            const [movedItem] = items.splice(fromIndex, 1);
            items.splice(toIndex, 0, movedItem);
            this.parsedItems = items;
            this.tabsReordered.emit(this.parsedItems);
        }
        this.draggingTabId = null;
    };
    startEditing(tabId) {
        this.editingTab = tabId;
        setTimeout(() => {
            const input = this.element.querySelector('.tab-edit-input');
            if (input) {
                input.focus();
                input.select();
            }
        }, 50);
    }
    commitEdit(tabId, newTitle) {
        if (newTitle.trim()) {
            this.parsedItems = this.parsedItems.map(item => item.id === tabId ? { ...item, title: newTitle } : item);
            this.tabUpdate.emit({ id: tabId, title: newTitle });
        }
        this.editingTab = null;
    }
    scrollToActiveTab() {
        if (!this.tabsHeaderRef || this.scrollMode === 'none')
            return;
        const activeTabElement = this.element.querySelector('.tab-header-active');
        if (activeTabElement && this.orientation === 'horizontal') {
            const containerRect = this.tabsHeaderRef.getBoundingClientRect();
            const tabRect = activeTabElement.getBoundingClientRect();
            const scrollLeft = this.tabsHeaderRef.scrollLeft;
            if (tabRect.left < containerRect.left) {
                this.tabsHeaderRef.scrollLeft = scrollLeft - (containerRect.left - tabRect.left) - 20;
            }
            else if (tabRect.right > containerRect.right) {
                this.tabsHeaderRef.scrollLeft = scrollLeft + (tabRect.right - containerRect.right) + 20;
            }
        }
    }
    checkScrollButtons() {
        if (!this.tabsHeaderRef || this.scrollMode === 'none') {
            this.showScrollButtons = false;
            return;
        }
        if (this.orientation === 'horizontal') {
            this.showScrollButtons = this.tabsHeaderRef.scrollWidth > this.tabsHeaderRef.clientWidth + 2;
        }
        else {
            // For vertical, check if content exceeds visible area OR if we have many tabs
            const hasScrollableContent = this.tabsHeaderRef.scrollHeight > this.tabsHeaderRef.clientHeight + 2;
            const hasManyTabs = this.parsedItems.length > 8;
            this.showScrollButtons = hasScrollableContent || hasManyTabs;
        }
    }
    scrollTabs(direction) {
        if (!this.tabsHeaderRef)
            return;
        const scrollAmount = 200;
        if (direction === 'left') {
            this.tabsHeaderRef.scrollLeft -= scrollAmount;
        }
        else if (direction === 'right') {
            this.tabsHeaderRef.scrollLeft += scrollAmount;
        }
        else if (direction === 'top') {
            this.tabsHeaderRef.scrollTop -= scrollAmount;
        }
        else if (direction === 'bottom') {
            this.tabsHeaderRef.scrollTop += scrollAmount;
        }
        this.updateIndicator();
    }
    updateIndicator() {
        if (!this.indicatorRef || !this.tabsHeaderRef)
            return;
        // scoped:true — no shadow DOM, use element.querySelector
        const activeTabElement = this.element.querySelector('.tab-header-active');
        if (!activeTabElement) {
            this.indicatorRef.style.opacity = '0';
            return;
        }
        // Use getBoundingClientRect relative to the header container so scroll offsets
        // and any CSS transforms on ancestor elements are handled correctly.
        const headerRect = this.tabsHeaderRef.getBoundingClientRect();
        const tabRect = activeTabElement.getBoundingClientRect();
        if (this.orientation === 'horizontal') {
            const relativeLeft = tabRect.left - headerRect.left + this.tabsHeaderRef.scrollLeft;
            this.indicatorRef.style.transform = `translateX(${relativeLeft}px)`;
            this.indicatorRef.style.width = `${tabRect.width}px`;
            this.indicatorRef.style.height = '';
        }
        else {
            const relativeTop = tabRect.top - headerRect.top + this.tabsHeaderRef.scrollTop;
            this.indicatorRef.style.transform = `translateY(${relativeTop}px)`;
            this.indicatorRef.style.height = `${tabRect.height}px`;
            this.indicatorRef.style.width = '';
        }
        this.indicatorRef.style.opacity = '1';
    }
    async selectTabById(tabId) {
        this.selectTab(tabId);
    }
    async getActiveTab() {
        return this.activeTab;
    }
    async destroyComponent() {
        this.closeAll.emit();
        this.parsedItems = [];
        this.activeTab = '';
        this.element.remove();
    }
    handleCloseAll(event) {
        event.stopPropagation();
        this.destroyComponent();
    }
    renderTab(item) {
        const isActive = this.activeTab === item.id;
        const isDisabled = item.disabled || false;
        const isMenuOpen = this.activeMenuTab === item.id;
        const tabClasses = [
            'tab-header',
            isActive && 'tab-header-active',
            isDisabled && 'tab-header-disabled',
            this.iconOnly && 'tab-header-icon-only',
            `icon-position-${this.iconPosition}`,
            this.wrapText && 'tab-header-wrap',
        ]
            .filter(Boolean)
            .join(' ');
        const tabStyle = {
            maxWidth: this.position !== 'full-width' ? `${this.maxTabWidth}px` : 'none',
            ...(item.color && isActive ? { '--tab-active-color': item.color, '--tab-active-border': item.color } : {}),
        };
        const needsTooltip = !this.iconOnly && item.title && item.title.length > this.maxTitleLength;
        return (h("div", { key: item.id, id: `tab-header-${item.id}`, class: tabClasses, part: isActive ? 'tab tab-active' : 'tab', "data-id": item.id, onClick: () => this.selectTab(item.id), "aria-selected": isActive ? 'true' : 'false', "aria-controls": `tab-content-${item.id}`, "aria-label": `Select ${item.title} tab`, "aria-disabled": isDisabled ? 'true' : 'false', tabindex: isDisabled ? -1 : 0, role: "tab", style: tabStyle, title: needsTooltip || this.iconOnly ? item.title : undefined, draggable: this.isDraggable, onDragStart: e => this.handleDragStart(e, item.id), onDragOver: this.handleDragOver, onDrop: e => this.handleDrop(e, item.id), onKeyDown: e => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    this.selectTab(item.id);
                }
                else if (e.key === 'ArrowRight' || e.key === 'ArrowDown') {
                    e.preventDefault();
                    this.focusNextTab(item.id);
                }
                else if (e.key === 'ArrowLeft' || e.key === 'ArrowUp') {
                    e.preventDefault();
                    this.focusPreviousTab(item.id);
                }
                else if (e.key === 'Home') {
                    e.preventDefault();
                    this.focusFirstTab();
                }
                else if (e.key === 'End') {
                    e.preventDefault();
                    this.focusLastTab();
                }
            }, onDblClick: () => this.startEditing(item.id) }, h("div", { class: "tab-header-content" }, item.icon && (h("span", { class: "tab-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.2em" }))), !this.iconOnly && (this.editingTab === item.id ? (h("ui-input", { class: "tab-edit-input", value: item.title, onInputBlur: (e) => this.commitEdit(item.id, e.detail.target.value), onInputKeydown: (e) => {
                if (e.detail.key === 'Enter')
                    this.commitEdit(item.id, e.detail.target.value);
                if (e.detail.key === 'Escape')
                    this.editingTab = null;
                e.detail.stopPropagation();
            }, size: "sm", fullWidth: true })) : (h("span", { class: "tab-title" }, item.title))), item.badge !== undefined && item.badge !== null && h("span", { class: `tab-badge ${item.badgeVariant ? 'badge-' + item.badgeVariant : ''}` }, item.badge), item.actions && (h("div", { class: `tab-actions ${isMenuOpen ? 'active' : ''}` }, h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "more-horizontal", iconLibrary: this.iconLibrary, iconSize: "1.1em", ariaLabel: `Actions for ${item.title}`, ariaHasPopup: "true", ariaExpanded: isMenuOpen, onClick: (e) => this.toggleMenu(item.id, e), class: "tab-menu" }), isMenuOpen && (h("div", { class: "tab-menu-popover", role: "menu", style: {
                position: 'fixed',
                top: `${this.activeMenuPosition?.y}px`,
                left: `${this.activeMenuPosition?.x}px`,
                right: 'auto',
                zIndex: '12000',
            } }, h("ui-button", { variant: "ghost", size: "sm", fullWidth: true, icon: "edit-2", iconLibrary: this.iconLibrary, label: "Edit", class: "tab-menu-item", onClick: (e) => {
                e.stopPropagation();
                this.tabEdit.emit(item.id);
                this.activeMenuTab = null;
            }, style: { justifyContent: 'flex-start' } }), h("ui-button", { variant: "ghost", size: "sm", fullWidth: true, icon: "file-text", iconLibrary: this.iconLibrary, label: "Detail", class: "tab-menu-item", onClick: (e) => {
                e.stopPropagation();
                this.tabOpenPanel.emit(item.id);
                this.activeMenuTab = null;
            }, style: { justifyContent: 'flex-start' } }), h("div", { class: "menu-divider" }), h("ui-button", { variant: "ghost", size: "sm", fullWidth: true, icon: "trash-2", iconLibrary: this.iconLibrary, label: "Delete", class: "tab-menu-item danger", onClick: (e) => {
                e.stopPropagation();
                this.tabDelete.emit(item.id);
                this.activeMenuTab = null;
            }, style: { justifyContent: 'flex-start' } }))))), item.closable && (h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "x", iconLibrary: this.iconLibrary, iconSize: "0.9em", onClick: (event) => this.handleCloseTab(item.id, event), ariaLabel: `Close ${item.title} tab`, class: "tab-close" })))));
    }
    renderContent(item) {
        const isActive = this.activeTab === item.id;
        // Lazy mode: skip rendering non-active, content-based panels until they've been activated
        if (this.lazy && !isActive && !item.useSlot && !this._mountedTabs.has(item.id)) {
            return null;
        }
        // Track which tabs have been rendered at least once
        if (isActive)
            this._mountedTabs.add(item.id);
        const contentClasses = ['tab-content', isActive && 'tab-content-active', `animation-${this.selectionAnimation}`].filter(Boolean).join(' ');
        return (h("div", { key: item.id, class: contentClasses, id: `tab-content-${item.id}`, "aria-labelledby": `tab-header-${item.id}`, role: "tabpanel", "aria-hidden": !isActive, style: {
                '--animation-duration': `${this.animationDuration}ms`,
            } }, item.useSlot ? (h("div", { class: "tab-content-inner" }, h("slot", { name: item.slot || item.id }))) : (h("div", { class: "tab-content-inner", innerHTML: sanitizeHTML(item.content ?? '') }))));
    }
    render() {
        const containerClasses = [
            'tabs-container',
            `tabs-${this.orientation}`,
            `tabs-position-${this.position}`,
            `tabs-variant-${this.variant}`,
            `tabs-size-${this.size}`,
            this.scrollMode !== 'none' && 'tabs-scrollable',
            `buttons-${this.scrollButtonPlacement}`,
            `indicator-${this.indicatorPosition}`,
            `indicator-style-${this.indicatorStyle}`,
        ]
            .filter(Boolean)
            .join(' ');
        const containerStyle = {};
        if (this.activeColor)
            containerStyle['--tab-active-color'] = this.activeColor;
        if (this.indicatorGradient)
            containerStyle['--tab-indicator-bg'] = this.indicatorGradient;
        else if (this.activeColor)
            containerStyle['--tab-indicator-bg'] = this.activeColor;
        const headerWrapperClasses = ['tabs-header-wrapper', this.showScrollButtons && this.scrollMode !== 'none' && 'show-scroll-buttons'].filter(Boolean).join(' ');
        const showLeftUp = this.showScrollButtons && this.scrollMode !== 'none';
        const showRightDown = this.showScrollButtons && this.scrollMode !== 'none';
        const isVertical = this.orientation === 'vertical';
        const renderButton = (dir, label) => (h("ui-button", { key: '3c6fc7c093589854f1d872f28c2b4b3d384a569b', variant: "ghost", size: "sm", iconOnly: true, class: `scroll-button scroll-${dir}`, onClick: () => this.scrollTabs(dir), ariaLabel: label, icon: dir === 'left' ? 'chevron-left' : dir === 'right' ? 'chevron-right' : dir === 'top' ? 'chevron-up' : 'chevron-down', iconLibrary: this.iconLibrary, iconSize: "1.2em" }));
        return (h("div", { key: '9414cddcf48432318ef220cb9a78afc9fb9cbbc7', class: containerClasses, style: Object.keys(containerStyle).length ? containerStyle : undefined }, h("div", { key: 'd2e8880304c4003bdd30b90f2058898d7300222a', class: headerWrapperClasses }, showLeftUp &&
            (this.scrollButtonPlacement === 'start' || this.scrollButtonPlacement === 'split') &&
            (isVertical ? renderButton('top', 'Scroll up') : renderButton('left', 'Scroll left')), showRightDown && this.scrollButtonPlacement === 'start' && (isVertical ? renderButton('bottom', 'Scroll down') : renderButton('right', 'Scroll right')), h("div", { key: '96488ce3447e393501fa7932b37241a804ef279a', class: "tabs-header", part: "tabs-header", ref: el => (this.tabsHeaderRef = el), role: "tablist", "aria-orientation": this.orientation }, this.parsedItems.map(item => this.renderTab(item)), h("div", { key: '1bd98d7bcadff9975741640c301f109124c1881a', class: "tab-selection-indicator", part: "indicator", ref: el => (this.indicatorRef = el) })), showLeftUp && this.scrollButtonPlacement === 'end' && (isVertical ? renderButton('top', 'Scroll up') : renderButton('left', 'Scroll left')), showRightDown &&
            (this.scrollButtonPlacement === 'end' || this.scrollButtonPlacement === 'split') &&
            (isVertical ? renderButton('bottom', 'Scroll down') : renderButton('right', 'Scroll right')), h("div", { key: '21bfeb334606ab5dd1ae16295062dce602ac9eb6', class: "tabs-controls-group", style: { display: 'flex', alignItems: 'center', marginLeft: 'auto', paddingLeft: '8px' } }, (this.showTabList || this.showCloseAll) && (h("div", { key: 'f020d74400afecbfe455adf44ab017ca272cbefe', class: "tab-list-wrapper" }, h("ui-button", { key: '128b8b541c450be82d6815a165e1b8f8cb66cf52', variant: "ghost", size: "sm", iconOnly: true, icon: "list", iconLibrary: this.iconLibrary, iconSize: "1em", onClick: (e) => this.toggleTabList(e), ariaLabel: "List all tabs", ariaHasPopup: "true", ariaExpanded: this.isTabListOpen, title: "List All Tabs", class: "tab-list-button" }), this.isTabListOpen && (h("div", { key: 'b55c7b805f2a1da631a5a77bda9807217f3a96fb', class: "tab-list-dropdown", style: {
                position: 'fixed',
                top: `${this.tabListPosition?.y}px`,
                left: `${this.tabListPosition?.x}px`,
                width: `${this.tabListPosition?.width}px`,
                maxHeight: `${this.tabListPosition?.maxHeight ?? 420}px`,
                zIndex: '12000',
            } }, h("div", { key: '5032f2519eab9a4332e0686e2ce9ea37aa58f2ad', class: "tab-list-header" }, h("span", { key: '907eaf22e72a92147a2937a7530f37c5941d24e8', class: "tab-list-header-title" }, "Open Tabs"), h("span", { key: '3508efb55c24109536772a648a7364f7ada8289b', class: "tab-list-header-count" }, this.parsedItems.length)), h("div", { key: 'eea1f858f13dd780d5ed518079a915df070cb655', class: "tab-list-search", onClick: (e) => e.stopPropagation() }, h("ui-input", { key: '4bbb2eaa3f2c937fe05991720cc34f70f6241776', class: "tab-list-search-input", placeholder: "Search tabs...", value: this.tabListSearch, prefixIcon: "search", iconLibrary: this.iconLibrary, showClear: true, size: "sm", fullWidth: true, onInputChange: (e) => { this.tabListSearch = e.detail; }, onInputClear: () => { this.tabListSearch = ''; }, "aria-label": "Search tabs", autoFocus: true })), this.parsedItems.filter(item => !this.tabListSearch.trim() ||
            item.title?.toLowerCase().includes(this.tabListSearch.toLowerCase())).map(item => {
            const isActive = this.activeTab === item.id;
            return (h("div", { class: `tab-list-item ${isActive ? 'active' : ''}`, onClick: () => this.selectTab(item.id), role: "option", "aria-selected": isActive.toString(), title: item.title }, item.icon && (h("span", { class: "tab-list-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "16px", color: "currentColor" }))), h("span", { class: "tab-list-title" }, item.title), item.badge && h("span", { class: "tab-list-badge" }, item.badge), isActive && (h("span", { class: "tab-list-active-check" }, h("ui-icon", { name: "check", library: "lucide", size: "14px", color: "currentColor" })))));
        }))))), this.showCloseAll && (h("ui-button", { key: '7e98f8695e6d8ab32c8b0c66e7f95b0878fc789e', variant: "ghost", size: "sm", iconOnly: true, icon: "x", iconLibrary: this.iconLibrary, iconSize: "1em", onClick: (event) => this.handleCloseAll(event), ariaLabel: "Close all tabs", title: "Close All", class: "tab-close-all" })))), h("div", { key: '81b7020058c9594a86bd4cd75d908bd42397c2c4', class: "tabs-content" }, this.parsedItems.map(item => this.renderContent(item)))));
    }
    static get watchers() { return {
        "items": [{
                "parseItems": 0
            }],
        "defaultActive": [{
                "onDefaultActiveChange": 0
            }],
        "activeTab": [{
                "onActiveTabChange": 0
            }]
    }; }
};
Tabs.style = tabsCss();

export { Tabs as ui_tabs };
