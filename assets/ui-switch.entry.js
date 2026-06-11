import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const switchCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:inline-block;--switch-primary:var(--color-primary-hover, #2563eb);--switch-secondary:var(--color-primary, #64748b);--switch-success:var(--color-success, #10b981);--switch-danger:var(--color-danger, #ef4444);--switch-warning:var(--color-warning, #f59e0b);--switch-info:var(--color-primary, #10b981);--switch-primary-rgb:37, 99, 235;--switch-secondary-rgb:100, 116, 139;--switch-success-rgb:16, 185, 129;--switch-danger-rgb:239, 68, 104;--switch-warning-rgb:245, 158, 11;--switch-info-rgb:59, 130, 246;--switch-track-bg:var(--bg-primary, #e2e8f0);--switch-thumb-bg:var(--bg-primary, #ffffff);--switch-text:var(--label-color, var(--text-primary, #1e293b));--switch-text-muted:var(--label-subtitle-color, var(--text-secondary, #64748b));--switch-font:-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif;--switch-duration:0.4s;--switch-easing:cubic-bezier(0.4, 0, 0.2, 1);--switch-transition:all var(--switch-duration) var(--switch-easing)}:host-context(.dark),:host-context([data-theme=dark]),:host-context([data-theme=violet]),:host-context([data-theme=pink]),:host-context([data-theme=blue]),:host-context([data-theme=green]){--switch-track-bg:var(--bg-secondary, #1e293b);--switch-thumb-bg:var(--bg-primary, #334155)}.switch-host{font-family:var(--switch-font);-webkit-tap-highlight-color:transparent}.switch-host.switch-glow.switch-checked .switch-track{box-shadow:0 0 15px rgba(var(--switch-primary-rgb, 37, 99, 235), 0.4)}.switch-host.switch-glow.switch-checked.switch-success .switch-track{box-shadow:0 0 15px rgba(var(--switch-success-rgb), 0.4)}.switch-host.switch-glow.switch-checked.switch-danger .switch-track{box-shadow:0 0 15px rgba(var(--switch-danger-rgb), 0.4)}.switch-host.switch-glow.switch-checked.switch-warning .switch-track{box-shadow:0 0 15px rgba(var(--switch-warning-rgb), 0.4)}.switch-host.switch-glow.switch-checked.switch-info .switch-track{box-shadow:0 0 15px rgba(var(--switch-info-rgb), 0.4)}.switch-host{--switch-easing:cubic-bezier(0.4, 0, 0.2, 1)}.switch-host.switch-physics-linear{--switch-easing:cubic-bezier(0, 0, 1, 1)}.switch-host.switch-physics-stiff{--switch-easing:cubic-bezier(0.18, 0.89, 0.32, 1.28);--switch-duration:0.2s}.switch-host.switch-physics-liquid{--switch-easing:cubic-bezier(0.4, 0, 0.2, 1);--switch-duration:0.4s}.switch-host.switch-physics-bouncy{--switch-easing:cubic-bezier(0.68, -0.6, 0.32, 1.6);--switch-duration:0.5s}.switch-host .switch-track,.switch-host .switch-thumb,.switch-host .switch-track-text,.switch-host .switch-ripple{transition:var(--switch-transition)}:host(.switch-color-primary){--switch-active-bg:var(--switch-primary);--switch-active-bg-rgb:var(--color-primary-rgb)}:host(.switch-color-success){--switch-active-bg:var(--switch-success);--switch-active-bg-rgb:var(--color-success-rgb)}:host(.switch-color-danger){--switch-active-bg:var(--switch-danger);--switch-active-bg-rgb:var(--color-danger-rgb)}:host(.switch-color-warning){--switch-active-bg:var(--switch-warning);--switch-active-bg-rgb:var(--color-warning-rgb)}:host(.switch-color-info){--switch-active-bg:var(--switch-info);--switch-active-bg-rgb:var(--color-primary-rgb)}:host(.switch-color-secondary){--switch-active-bg:var(--switch-secondary);--switch-active-bg-rgb:var(--color-primary-rgb)}:host(.switch-checked.switch-solid) .switch-track{background:var(--switch-active-bg);border-color:rgba(0, 0, 0, 0.05)}:host(.switch-checked.switch-solid) .switch-track-text{color:var(--color-primary-text, #ffffff)}:host(.switch-glass) .switch-track{background:rgba(255, 255, 255, 0.1) !important;backdrop-filter:blur(8px) saturate(180%);border:1px solid rgba(255, 255, 255, 0.2)}:host(.switch-glass.switch-checked) .switch-track{background:rgba(var(--switch-active-bg-rgb, 37, 99, 235), 0.2) !important;border-color:rgba(var(--switch-active-bg-rgb, 37, 99, 235), 0.4)}:host(.switch-glass.switch-checked) .switch-track-text{color:var(--switch-active-bg);text-shadow:0 0 8px rgba(var(--switch-active-bg-rgb), 0.4)}:host(.switch-raised) .switch-track{background:var(--bg-secondary, #f1f5f9);box-shadow:inset 4px 4px 8px rgba(0, 0, 0, 0.06), inset -4px -4px 8px rgba(255, 255, 255, 0.8)}:host(.switch-raised) .switch-thumb{box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06), inset 0 1px 0 rgba(255, 255, 255, 0.8)}:host(.switch-raised.switch-checked) .switch-track{background:linear-gradient(135deg, var(--switch-active-bg), rgba(var(--switch-active-bg-rgb), 0.8));box-shadow:inset 2px 2px 4px rgba(0, 0, 0, 0.2)}:host(.switch-outlined) .switch-track{background:transparent !important;border:2px solid var(--border-subtle, #e2e8f0)}:host(.switch-outlined.switch-checked) .switch-track{border-color:var(--switch-active-bg)}:host(.switch-outlined) .switch-thumb{background:var(--color-primary, #94a3b8)}:host(.switch-outlined.switch-checked) .switch-thumb{background:var(--switch-active-bg);box-shadow:0 0 10px rgba(var(--switch-active-bg-rgb), 0.3)}:host(.switch-glow.switch-checked) .switch-track{box-shadow:0 0 12px rgba(var(--switch-active-bg-rgb), 0.3);animation:switch-glow-pulse 2s ease-in-out infinite}.switch-loading .switch-track{position:relative;overflow:hidden}.switch-loading .switch-track::before{content:"";position:absolute;inset:0;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.4), transparent);background-size:200% 100%;animation:switch-shimmer 1.5s infinite linear;z-index:1}.switch-loading .switch-track::after{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px);background-size:4px 4px;opacity:0.5;z-index:0}@keyframes switch-shimmer{0%{background-position:-200% 0}100%{background-position:200% 0}}.switch-container-outer{display:flex;flex-direction:column}.switch-container{display:inline-flex;align-items:center;gap:12px;cursor:pointer;user-select:none;position:relative;transition:opacity var(--switch-duration) var(--switch-easing);font-family:"Inter", -apple-system, sans-serif}.switch-label-left{flex-direction:row-reverse}.switch-wrapper{position:relative;display:inline-flex;align-items:center;flex-shrink:0}.switch-input{position:absolute;width:100%;height:100%;opacity:0;cursor:inherit;z-index:2;margin:0;outline:none}.switch-input:focus-visible~.switch-track{box-shadow:0 0 0 2px var(--bg-primary, #ffffff), 0 0 0 4px var(--switch-active-bg, var(--switch-primary));transform:scale(1.02)}.switch-track{position:relative;display:flex;align-items:center;background:var(--switch-track-bg);border-radius:9999px;transition:background-color var(--switch-duration) var(--switch-easing), box-shadow 0.2s ease, transform 0.2s cubic-bezier(0.175, 0.885, 0.32, 1.275);overflow:hidden;border:1px solid rgba(0, 0, 0, 0.05)}.switch-container:hover .switch-track{filter:brightness(1.05);box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)}.switch-container:active .switch-track{transform:scale(0.96);filter:brightness(0.95)}.switch-ripple{position:absolute;left:50%;top:50%;width:10px;height:10px;background:rgba(255, 255, 255, 0.4);border-radius:50%;transform:translate(-50%, -50%);pointer-events:none;animation:switch-ripple-expand 0.6s cubic-bezier(0, 0, 0.2, 1) forwards;z-index:1}.switch-loading-overlay{position:absolute;inset:0;background:rgba(255, 255, 255, 0.15);z-index:10;overflow:hidden}.switch-loading-overlay::after{content:"";position:absolute;inset:0;background-image:linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px);background-size:8px 8px;opacity:0.3}.switch-loading-overlay::before{content:"";position:absolute;top:0;left:-100%;width:100%;height:100%;background:linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.25), transparent);animation:switch-shimmer 1.5s infinite}@keyframes switch-shimmer{0%{transform:translateX(-100%)}100%{transform:translateX(200%)}}@keyframes switch-ripple-expand{0%{transform:translate(-50%, -50%) scale(0);opacity:0.8}100%{transform:translate(-50%, -50%) scale(15);opacity:0}}.switch-thumb{position:absolute;background-color:var(--bg-primary, #ffffff);border-radius:50%;box-shadow:var(--shadow-sm);transition:transform var(--switch-duration) var(--switch-easing), background-color var(--switch-duration) var(--switch-easing), box-shadow var(--switch-duration) var(--switch-easing);z-index:2;display:flex;align-items:center;justify-content:center;border:0.5px solid rgba(0, 0, 0, 0.04)}.switch-thumb:hover{transform:scale(1.05) translateZ(0);box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)}.switch-icon{display:flex;align-items:center;justify-content:center;font-size:10px}.switch-track-text{position:absolute;font-size:calc(var(--switch-thumb-size, 20px) * 0.45);font-weight:800;color:var(--switch-text-muted);text-transform:uppercase;user-select:none;pointer-events:none;transition:var(--switch-transition);opacity:0.8;letter-spacing:0.02em}.switch-xxxs{--switch-thumb-size:10px;--switch-track-width:24px}.switch-xxxs .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:12px}.switch-xxxs .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-xxxs.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-xxxs .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-xxxs.switch-checked .switch-track-text{left:4px}.switch-xxs{--switch-thumb-size:12px;--switch-track-width:28px}.switch-xxs .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:14px}.switch-xxs .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-xxs.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-xxs .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-xxs.switch-checked .switch-track-text{left:4px}.switch-xs{--switch-thumb-size:14px;--switch-track-width:32px}.switch-xs .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:17px}.switch-xs .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-xs.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-xs .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-xs.switch-checked .switch-track-text{left:4px}.switch-sm{--switch-thumb-size:16px;--switch-track-width:36px}.switch-sm .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:20px}.switch-sm .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-sm.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-sm .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-sm.switch-checked .switch-track-text{left:4px}.switch-md{--switch-thumb-size:20px;--switch-track-width:44px}.switch-md .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:24px}.switch-md .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-md.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-md .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-md.switch-checked .switch-track-text{left:4px}.switch-lg{--switch-thumb-size:24px;--switch-track-width:52px}.switch-lg .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:28px}.switch-lg .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-lg.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-lg .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-lg.switch-checked .switch-track-text{left:4px}.switch-xl{--switch-thumb-size:28px;--switch-track-width:64px}.switch-xl .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:32px}.switch-xl .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-xl.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-xl .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-xl.switch-checked .switch-track-text{left:4px}.switch-xxl{--switch-thumb-size:34px;--switch-track-width:76px}.switch-xxl .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:38px}.switch-xxl .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-xxl.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-xxl .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-xxl.switch-checked .switch-track-text{left:4px}.switch-xxxl{--switch-thumb-size:40px;--switch-track-width:88px}.switch-xxxl .switch-track{width:var(--switch-track-width);min-width:var(--switch-track-width);height:44px}.switch-xxxl .switch-thumb{width:var(--switch-thumb-size);height:var(--switch-thumb-size);left:2px}.switch-xxxl.switch-checked .switch-thumb{transform:translateX(calc(var(--switch-track-width) - var(--switch-thumb-size) - 4px))}.switch-xxxl .switch-track-text{position:absolute;top:50%;transform:translateY(-50%);width:calc(var(--switch-track-width) - var(--switch-thumb-size) - 6px);text-align:center;line-height:1;left:calc(var(--switch-thumb-size) + 2px);transition:all var(--switch-duration) var(--switch-easing)}.switch-xxxl.switch-checked .switch-track-text{left:4px}@keyframes switch-glow-pulse{0%,100%{filter:drop-shadow(0 0 5px rgba(var(--switch-active-bg-rgb, 37, 99, 235), 0.3))}50%{filter:drop-shadow(0 0 12px rgba(var(--switch-active-bg-rgb, 37, 99, 235), 0.6))}}.switch-glass .switch-track{background:rgba(255, 255, 255, 0.08) !important;backdrop-filter:blur(16px) saturate(180%);border:1px solid rgba(255, 255, 255, 0.12);box-shadow:inset 0 1px 1px rgba(255, 255, 255, 0.05), 0 4px 6px -1px rgba(0, 0, 0, 0.1)}.switch-glass .switch-thumb{background:rgba(255, 255, 255, 0.9);backdrop-filter:blur(8px);box-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);border:1px solid rgba(255, 255, 255, 0.3)}.switch-raised .switch-track{background:var(--bg-secondary, #f1f5f9);box-shadow:inset 4px 4px 8px rgba(0, 0, 0, 0.06), inset -4px -4px 8px rgba(255, 255, 255, 0.8);border:1px solid rgba(0, 0, 0, 0.02)}.switch-raised .switch-thumb{background:linear-gradient(145deg, var(--bg-primary, #ffffff), var(--bg-primary, #f8fafc));box-shadow:2px 2px 5px rgba(0, 0, 0, 0.05), -1px -1px 3px rgba(255, 255, 255, 0.9);border:0.5px solid rgba(0, 0, 0, 0.02)}.switch-image-container{width:100%;height:100%;display:flex;align-items:center;justify-content:center;overflow:hidden;border-radius:inherit}.switch-thumb-image{width:100%;height:100%;object-fit:cover;transition:transform 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.switch-rounded .switch-track,.switch-rounded .switch-thumb{border-radius:4px}.switch-square .switch-track,.switch-square .switch-thumb{border-radius:0}.switch-pill .switch-track,.switch-pill .switch-thumb{border-radius:9999px}.thumb-square .switch-thumb{border-radius:2px}.switch-vertical .switch-container{flex-direction:column}.switch-vertical .switch-track{flex-direction:column}.switch-vertical .switch-thumb{left:50%;transform:translateX(-50%);top:2px}.switch-vertical.switch-xxxs .switch-track{width:12px;height:24px}.switch-vertical.switch-xxxs.switch-checked .switch-thumb{transform:translate(-50%, 11px)}.switch-vertical.switch-xxs .switch-track{width:14px;height:28px}.switch-vertical.switch-xxs.switch-checked .switch-thumb{transform:translate(-50%, 13px)}.switch-vertical.switch-xs .switch-track{width:17px;height:32px}.switch-vertical.switch-xs.switch-checked .switch-thumb{transform:translate(-50%, 15px)}.switch-vertical.switch-sm .switch-track{width:20px;height:36px}.switch-vertical.switch-sm.switch-checked .switch-thumb{transform:translate(-50%, 16px)}.switch-vertical.switch-md .switch-track{width:24px;height:44px}.switch-vertical.switch-md.switch-checked .switch-thumb{transform:translate(-50%, 20px)}.switch-vertical.switch-lg .switch-track{width:28px;height:52px}.switch-vertical.switch-lg.switch-checked .switch-thumb{transform:translate(-50%, 24px)}.switch-vertical.switch-xl .switch-track{width:32px;height:64px}.switch-vertical.switch-xl.switch-checked .switch-thumb{transform:translate(-50%, 32px)}.switch-vertical.switch-xxl .switch-track{width:38px;height:76px}.switch-vertical.switch-xxl.switch-checked .switch-thumb{transform:translate(-50%, 38px)}.switch-vertical.switch-xxxl .switch-track{width:44px;height:88px}.switch-vertical.switch-xxxl.switch-checked .switch-thumb{transform:translate(-50%, 44px)}.switch-disabled{opacity:0.5;cursor:not-allowed !important}.switch-readonly{cursor:default !important}.switch-readonly .switch-input{pointer-events:none}.switch-invalid .switch-track{border-color:var(--switch-danger);box-shadow:0 0 0 2px rgba(var(--color-danger-rgb, 239, 68, 68), 0.1)}.switch-focused .switch-track{box-shadow:0 0 0 3px rgba(var(--color-primary-rgb, 37, 99, 235), 0.2)}.switch-hovered:not(.switch-disabled) .switch-track{filter:brightness(0.95)}.switch-gradient .switch-track{border:none}.switch-elevation-1 .switch-track{box-shadow:0 2px 4px rgba(0, 0, 0, 0.1)}.switch-elevation-2 .switch-track{box-shadow:0 4px 8px rgba(0, 0, 0, 0.1)}.switch-elevation-3 .switch-track{box-shadow:0 6px 12px rgba(0, 0, 0, 0.1)}.switch-elevation-4 .switch-track{box-shadow:0 8px 16px rgba(0, 0, 0, 0.1)}.switch-elevation-5 .switch-track{box-shadow:0 10px 20px rgba(0, 0, 0, 0.1)}.switch-indeterminate .switch-thumb{left:50%;transform:translateX(-50%)}.switch-indeterminate .switch-thumb::after{content:"";position:absolute;width:50%;height:2px;background:var(--switch-active-bg, #94a3b8);border-radius:4px}.switch-rtl{direction:rtl}.switch-rtl .switch-container{flex-direction:row-reverse}.switch-rtl .switch-thumb{left:auto;inset-inline-start:2px;inset-inline-end:auto}.switch-rtl.switch-checked .switch-thumb{transform:translateX(calc(-1 * (var(--switch-track-width) - var(--switch-thumb-size) - 4px)))}.switch-rtl .switch-track-text{inset-inline-start:4px;inset-inline-end:auto;text-align:left;left:auto}.switch-rtl.switch-checked .switch-track-text{inset-inline-start:calc(var(--switch-thumb-size) + 8px);inset-inline-end:auto;left:auto}.switch-loading-overlay{position:absolute;inset:0;background:rgba(255, 255, 255, 0.2);z-index:1}.switch-spinner{display:flex;align-items:center;justify-content:center}.switch-label{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;opacity:0.65;display:flex;flex-direction:column;line-height:1.2}.switch-description-bottom{font-size:11px;font-weight:400;color:var(--switch-text-muted);opacity:0.8;margin-top:2px}.switch-description-side{font-size:12px;font-weight:400;color:var(--switch-text-muted);opacity:0.6;margin-inline-start:12px;padding-inline-start:12px;border-inline-start:1px solid rgba(0, 0, 0, 0.08);white-space:nowrap}.switch-required{color:var(--switch-danger);margin-inline-start:2px}.switch-helper-text{margin-top:4px;font-size:12px;color:var(--switch-text-muted);display:flex;align-items:center;gap:4px}.switch-tooltip{position:absolute;bottom:100%;left:50%;transform:translateX(-50%) translateY(-10px);background:rgba(15, 23, 42, 0.95);color:var(--text-standard, #ffffff);padding:6px 12px;border-radius:6px;font-size:12px;white-space:nowrap;pointer-events:none;z-index:100;box-shadow:0 4px 12px rgba(0, 0, 0, 0.2);border:1px solid rgba(255, 255, 255, 0.1);animation:tooltip-fade-in 0.2s ease}.switch-tooltip::after{content:"";position:absolute;top:100%;left:50%;transform:translateX(-50%);border:5px solid transparent;border-top-color:rgba(15, 23, 42, 0.95)}@keyframes tooltip-fade-in{from{opacity:0;transform:translateX(-50%) translateY(-5px)}to{opacity:1;transform:translateX(-50%) translateY(-10px)}}.switch-error-text{color:var(--switch-danger)}.switch-success-feedback{color:var(--switch-success);margin-inline-start:8px;animation:success-pop 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}@keyframes success-pop{0%{transform:scale(0);opacity:0}100%{transform:scale(1);opacity:1}}.switch-confirm-overlay{position:fixed;inset:0;background:rgba(0, 0, 0, 0.4);backdrop-filter:blur(2px);z-index:1000;display:flex;align-items:center;justify-content:center;animation:fade-in 0.2s ease}.switch-confirm-dialog{background:var(--bg-primary, #ffffff);padding:24px;border-radius:12px;box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1);max-width:320px;width:90%;animation:slide-up 0.3s ease}.confirm-message{margin-bottom:20px;font-size:15px;color:var(--text-primary, #1e293b);line-height:1.5}.confirm-actions{display:flex;gap:12px;justify-content:flex-end}.confirm-btn{padding:8px 16px;border-radius:6px;font-size:14px;font-weight:600;cursor:pointer;border:none;transition:all 0.2s}.confirm-btn.cancel{background:var(--bg-secondary, #f1f5f9);color:var(--color-primary, #475569)}.confirm-btn.ok{background:var(--switch-primary);color:var(--text-standard, #ffffff)}.confirm-btn:hover{opacity:0.9;transform:translateY(-1px)}.switch-shaking{animation:switch-shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both}@keyframes switch-shake{10%,90%{transform:translate3d(-1px, 0, 0)}20%,80%{transform:translate3d(2px, 0, 0)}30%,50%,70%{transform:translate3d(-4px, 0, 0)}40%,60%{transform:translate3d(4px, 0, 0)}}@keyframes fade-in{from{opacity:0}to{opacity:1}}@keyframes slide-up{from{transform:translateY(10px);opacity:0}to{transform:translateY(0);opacity:1}}`;

const UISwitch = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.switchChange = createEvent(this, "switchChange");
        this.switchFocus = createEvent(this, "switchFocus");
        this.switchBlur = createEvent(this, "switchBlur");
        this.switchConfirm = createEvent(this, "switchConfirm");
        this.switchSuccess = createEvent(this, "switchSuccess");
    }
    get el() { return getElement(this); }
    /** Checked state */
    checked = false;
    /** Disabled state */
    disabled = false;
    /** Readonly state */
    readonly = false;
    /** Invalid state */
    invalid = false;
    /** Loading state (shows spinner) */
    loading = false;
    /** Size variant */
    size = 'md';
    /** Semantic color variant */
    color = 'primary';
    /** Material archetype variant */
    variant = 'solid';
    /** Shape style */
    shape = 'default';
    /** Custom width for the switch track (e.g., '100px', 'auto') */
    width;
    /**
     * Label for the switch
     */
    label = '';
    /** Label position */
    labelPosition = 'right';
    /** Elevation level (0-5) */
    elevation = 0;
    /** Shape of the thumb */
    thumbShape = 'circle';
    /** Icon when unchecked */
    iconOff;
    /** Icon when checked */
    iconOn;
    /** Show icons */
    showIcons = false;
    /** Performance/Animation toggle */
    enableAnimation = true;
    /** Orientation */
    orientation = 'horizontal';
    /** Helper text below switch */
    helperText = '';
    /** Error message when invalid */
    errorMessage = '';
    /** Custom text on track when checked */
    checkedText = '';
    /** Custom text on track when unchecked */
    uncheckedText = '';
    /** Show text symbols on track */
    showTrackText = false;
    /** RTL support */
    rtl = false;
    /** Associated form ID */
    formId = '';
    /** Form field name */
    name = '';
    /** Form field value */
    value = 'on';
    /** Animation physics preset */
    physics = 'liquid';
    /** Glow effect when active */
    glow = false;
    /** Require confirmation before toggle */
    requireConfirmation = false;
    /** Confirmation message */
    confirmationMessage = 'Are you sure you want to change this?';
    /** Indeterminate state */
    indeterminate = false;
    /** Show success feedback after change */
    showSuccessFeedback = false;
    /** Tab index */
    switchTabIndex = 0;
    /** Aria label override */
    ariaLabel = '';
    /** Use gradient colors */
    gradient = false;
    /** Gradient colors (JSON array of strings) */
    gradientColors = '';
    /** Auto-submit nearest form on change */
    autoSubmit = false;
    /** Show check/cross icons by default */
    showDefaultIcons = false;
    /** Required field indicator */
    required = false;
    /** Sensory vibration feedback */
    haptic = false;
    /** Tactical side/bottom description */
    description;
    descriptionPosition = 'bottom';
    /** High-Fidelity: Image URL for checked state */
    checkedImage;
    /** High-Fidelity: Image URL for unchecked state */
    uncheckedImage;
    /** Enable async toggle mode (waits for external confirmation) */
    async = false;
    /** Internal processing state for async operations */
    internalLoading = false;
    /** Visual shake feedback for validation failures or vetoed changes */
    isShaking = false;
    /**
     * Triggers a visual 'Shake' effect and haptic vibration pattern
     * to indicate a rejected action or validation failure.
     */
    async shake() {
        this.isShaking = true;
        if (this.haptic && 'vibrate' in navigator) {
            navigator.vibrate([10, 50, 10, 50, 10]); // Multi-pulse rejection pattern
        }
        setTimeout(() => {
            this.isShaking = false;
        }, 600);
    }
    /** Show tooltip on hover */
    showTooltip = false;
    /** Tooltip text */
    tooltipText = '';
    /** Icon library to use */
    iconLibrary = 'ionicons';
    isFocused = false;
    isHovered = false;
    showingSuccess = false;
    showConfirmDialog = false;
    pendingValue = false;
    showRipple = false;
    /** Change event */
    switchChange;
    /** Focus event */
    switchFocus;
    /** Blur event */
    switchBlur;
    /** Confirmation event */
    switchConfirm;
    /** Success feedback event */
    switchSuccess;
    handleCheckedChange(newValue) {
        if (this.autoSubmit) {
            this.triggerFormSubmit();
        }
        if (this.showSuccessFeedback && newValue) {
            this.triggerSuccessFeedback();
        }
    }
    triggerFormSubmit() {
        let form = null;
        if (this.formId) {
            form = document.getElementById(this.formId);
        }
        else {
            // Find the parent form
            form = this.el.closest('form');
        }
        if (form) {
            const event = new window.Event('submit', { cancelable: true, bubbles: true });
            form.dispatchEvent(event);
            if (!event.defaultPrevented) {
                form.submit();
            }
        }
    }
    handleChange = (event) => {
        if (this.disabled || this.readonly || this.loading) {
            event.preventDefault();
            return;
        }
        const input = event.target;
        const nextChecked = input.checked;
        if (this.indeterminate) {
            this.indeterminate = false;
            input.indeterminate = false;
        }
        if (this.requireConfirmation) {
            this.pendingValue = nextChecked;
            this.showConfirmDialog = true;
            input.checked = this.checked; // Revert visually until confirmed
            return;
        }
        if (this.haptic && 'vibrate' in navigator) {
            navigator.vibrate(this.checked ? 10 : 15);
        }
        if (this.async) {
            // In async mode, we emit the event but do not toggle the internal state.
            // The parent must manually update 'checked' once the operation succeeds.
            this.switchChange.emit({ checked: nextChecked, value: this.value });
            input.checked = this.checked; // Revert visually
            this.internalLoading = true;
            return;
        }
        this.applyToggle(nextChecked);
    };
    /**
     * Public method to clear the internal loading state
     * (Used after an async operation completes)
     */
    async stopAsyncLoading() {
        this.internalLoading = false;
    }
    applyToggle(newChecked) {
        if (this.checked !== newChecked) {
            this.checked = newChecked;
            if (this.checked)
                this.triggerRipple();
            this.switchChange.emit({ checked: this.checked, value: this.value });
        }
    }
    triggerRipple() {
        this.showRipple = true;
        setTimeout(() => {
            this.showRipple = false;
        }, 600);
    }
    triggerSuccessFeedback() {
        this.showingSuccess = true;
        this.switchSuccess.emit();
        setTimeout(() => {
            this.showingSuccess = false;
        }, 2000);
    }
    handleConfirm = () => {
        this.showConfirmDialog = false;
        this.switchConfirm.emit({ confirmed: true, value: this.pendingValue });
        this.applyToggle(this.pendingValue);
    };
    handleCancel = () => {
        this.showConfirmDialog = false;
        this.switchConfirm.emit({ confirmed: false, value: this.pendingValue });
    };
    handleFocus = () => {
        if (!this.disabled && !this.loading) {
            this.isFocused = true;
            this.switchFocus.emit();
        }
    };
    handleBlur = () => {
        this.isFocused = false;
        this.switchBlur.emit();
    };
    handleMouseEnter = () => {
        if (!this.disabled)
            this.isHovered = true;
    };
    handleMouseLeave = () => {
        this.isHovered = false;
    };
    handleKeyDown = (event) => {
        if (this.disabled || this.readonly || this.loading)
            return;
        if (event.key === 'Enter' || event.key === ' ') {
            event.preventDefault();
            this.triggerRipple();
            this.applyToggle(!this.checked);
        }
    };
    getIcon() {
        if (this.loading) {
            return (h("span", { class: "switch-spinner" }, h("ui-icon", { name: "refresh", library: this.iconLibrary, spin: true, size: "14px" })));
        }
        const currentImage = this.checked ? this.checkedImage : this.uncheckedImage;
        if (currentImage) {
            return (h("div", { class: "switch-image-container" }, h("img", { src: currentImage, class: "switch-thumb-image", alt: "status" })));
        }
        if (this.checked) {
            if (this.iconOn)
                return h("span", { class: "switch-icon" }, h("ui-icon", { name: this.iconOn, library: this.iconLibrary, size: "calc(var(--switch-thumb-size, 20px) * 0.6)" }));
            if (this.showIcons || this.showDefaultIcons)
                return h("span", { class: "switch-icon" }, h("ui-icon", { name: "checkmark", library: this.iconLibrary, size: "calc(var(--switch-thumb-size, 20px) * 0.6)" }));
        }
        else {
            if (this.iconOff)
                return h("span", { class: "switch-icon" }, h("ui-icon", { name: this.iconOff, library: this.iconLibrary, size: "calc(var(--switch-thumb-size, 20px) * 0.6)" }));
            if (this.showIcons || this.showDefaultIcons)
                return h("span", { class: "switch-icon" }, h("ui-icon", { name: "close", library: this.iconLibrary, size: "calc(var(--switch-thumb-size, 20px) * 0.6)" }));
        }
        return null;
    }
    renderTrackText() {
        if (!this.showTrackText)
            return null;
        const text = this.checked ? (this.checkedText || 'ON') : (this.uncheckedText || 'OFF');
        return h("span", { class: "switch-track-text" }, text);
    }
    renderHelperText() {
        if (this.invalid && this.errorMessage) {
            return (h("div", { class: "switch-helper-text switch-error-text" }, h("ui-icon", { name: "alert-circle", library: "lucide", size: "12px" }), h("span", null, this.errorMessage)));
        }
        if (this.helperText) {
            return h("div", { class: "switch-helper-text" }, this.helperText);
        }
        return null;
    }
    renderTooltip() {
        if (!this.showTooltip || !this.tooltipText || !this.isHovered)
            return null;
        return (h("div", { class: "switch-tooltip" }, this.tooltipText));
    }
    renderSuccessFeedback() {
        if (!this.showingSuccess)
            return null;
        return (h("div", { class: "switch-success-feedback" }, h("ui-icon", { name: "check-circle", library: "lucide", size: "16px" })));
    }
    renderConfirmDialog() {
        if (!this.showConfirmDialog)
            return null;
        return (h("div", { class: "switch-confirm-overlay", onClick: this.handleCancel }, h("div", { class: "switch-confirm-dialog", onClick: e => e.stopPropagation() }, h("div", { class: "confirm-message" }, this.confirmationMessage), h("div", { class: "confirm-actions" }, h("ui-button", { variant: "ghost", size: "sm", onClick: this.handleCancel, label: "Cancel" }), h("ui-button", { variant: "primary", size: "sm", onClick: this.handleConfirm, label: "Confirm" })))));
    }
    render() {
        const labelElement = this.label && (h("span", { key: '7ebf67ab54d6402ea0df0c4de0970d6cc2e43824', class: "switch-label" }, this.label, this.required && h("span", { key: '7044082ec79f25bd865e823bf0b4f8387dc18e11', class: "switch-required" }, "*"), this.description && this.descriptionPosition === 'bottom' && (h("span", { key: 'efe44feacd88bb77a6a8c128811610e7c9e45f16', class: "switch-description-bottom" }, this.description))));
        const sideDescription = this.description && this.descriptionPosition === 'side' && (h("span", { key: '3fd19deb053caafb0b8482378067b1e0e7c6e93f', class: "switch-description-side" }, this.description));
        const trackStyle = {};
        if (this.gradient && this.gradientColors) {
            try {
                const colors = JSON.parse(this.gradientColors);
                if (Array.isArray(colors) && colors.length >= 2) {
                    trackStyle.background = `linear-gradient(135deg, ${colors[0]} 0%, ${colors[1]} 100%)`;
                }
            }
            catch (e) { }
        }
        const hostStyle = {};
        if (this.width) {
            hostStyle['--switch-track-width'] = this.width;
        }
        return (h(Host, { key: '2452fea25ee064d76b1255e099143b7c0c9b22da', style: hostStyle, class: {
                'switch-host': true,
                'switch-disabled': this.disabled || this.loading,
                'switch-readonly': this.readonly,
                'switch-checked': this.checked,
                'switch-invalid': this.invalid,
                'switch-focused': this.isFocused,
                'switch-hovered': this.isHovered,
                'switch-vertical': this.orientation === 'vertical',
                'switch-animate': this.enableAnimation,
                'switch-indeterminate': this.indeterminate,
                'switch-glow': this.glow,
                'switch-rtl': this.rtl,
                [`switch-physics-${this.physics}`]: true,
                [`switch-elevation-${this.elevation}`]: this.elevation > 0,
                [`switch-color-${this.color}`]: true,
                [`switch-${this.variant}`]: true,
            }, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave }, h("div", { key: 'fbf20bb14cc99bd32eb4a52df4eefa60480804c4', part: "container", class: {
                'switch-container-outer': true,
                [`switch-${this.size}`]: true,
                [`switch-color-${this.color}`]: true,
                [`switch-physics-${this.physics}`]: true,
                [`switch-variant-${this.variant}`]: true,
                [`switch-${this.shape}`]: true,
                [`thumb-${this.thumbShape}`]: true,
                'switch-checked': this.checked,
                'switch-disabled': this.disabled,
                'switch-readonly': this.readonly,
                'switch-loading': this.loading || this.internalLoading,
                'switch-error': this.invalid,
                'switch-glow': this.glow && this.checked,
                'switch-haptic': this.haptic,
                'switch-rtl': this.rtl,
                'switch-shaking': this.isShaking,
                'switch-animate': this.enableAnimation,
                'switch-indeterminate': this.indeterminate,
            } }, h("label", { key: 'e089fc07a8a05b88b7281756e8720f42e4e39dee', part: "label", class: {
                'switch-container': true,
                [`switch-${this.size}`]: true,
                [`switch-color-${this.color}`]: true,
                [`switch-${this.variant}`]: true,
                [`switch-${this.shape}`]: true,
                [`thumb-${this.thumbShape}`]: true,
                'switch-label-left': this.labelPosition === 'left',
                'switch-label-right': this.labelPosition === 'right' || !this.labelPosition,
            } }, this.labelPosition === 'left' && labelElement, h("div", { key: '3e1ca73f5839376c5effc92ad13686465dfe1c69', part: "wrapper", class: "switch-wrapper" }, h("input", { key: '620498359d8a26fdc9413e936b423ebc92e9e921', type: "checkbox", class: "switch-input", checked: this.checked, disabled: this.disabled || this.loading, readonly: this.readonly, name: this.name, value: this.value, required: this.required, tabindex: this.switchTabIndex, onChange: this.handleChange, onFocus: this.handleFocus, onBlur: this.handleBlur, onKeyDown: this.handleKeyDown, "aria-label": this.ariaLabel || this.label, "aria-checked": this.indeterminate ? 'mixed' : (this.checked ? 'true' : 'false'), "aria-disabled": (this.disabled || this.loading).toString(), "aria-invalid": this.invalid.toString(), ref: el => {
                if (el && this.indeterminate)
                    el.indeterminate = true;
            } }), h("div", { key: 'ed2db623b8d85ec19ec08b04d49f32ccbd22c2ca', part: "track", class: {
                'switch-track': true,
                'switch-track-checked': this.checked,
                'switch-track-disabled': this.disabled || this.loading,
                'switch-gradient': this.gradient,
            }, style: trackStyle }, this.renderTrackText(), h("div", { key: 'f1fb7ac21b764239756664271a156a484d90ae71', part: "thumb", class: {
                'switch-thumb': true,
                'switch-thumb-checked': this.checked,
                'switch-thumb-loading': this.loading,
            } }, this.getIcon()), this.showRipple && h("div", { key: '12e603dc7715a81be1b49e10f3ff08ecd95d5a25', class: "switch-ripple" }), this.loading && h("div", { key: 'c09738abdd1ee94b9fd7ccb69569ab8b432425ed', class: "switch-loading-overlay" }))), this.labelPosition === 'right' && labelElement, sideDescription, this.renderSuccessFeedback()), this.renderHelperText(), this.renderTooltip()), this.renderConfirmDialog()));
    }
    static get watchers() { return {
        "checked": [{
                "handleCheckedChange": 0
            }]
    }; }
};
UISwitch.style = switchCss();

export { UISwitch as ui_switch };
