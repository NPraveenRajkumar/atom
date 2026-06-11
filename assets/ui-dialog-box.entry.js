import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';
import { F as FocusTrap } from './focus-trap-BSQ8klD4.js';

const dialogBoxCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block}.ui-dialog-backdrop.minimized-backdrop,.ui-dialog-backdrop[data-minimized-backdrop]{display:none !important}.ui-dialog-backdrop{position:fixed;inset:0;width:100vw;height:100vh;background-color:rgba(0, 0, 0, 0.5);display:flex;z-index:10000;opacity:1;transition:background-color 0.2s;animation:fadeIn 0.2s ease-out}:global(body.dialog-blur-active)>*:not(ui-dialog-box){filter:blur(8px) grayscale(20%);transition:filter 0.4s ease;pointer-events:none}.ui-dialog-backdrop.backdrop-none{background-color:transparent;pointer-events:none;}.ui-dialog-backdrop.backdrop-none .ui-dialog-box{pointer-events:auto;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);border:1px solid var(--border-default, #e5e7eb)}.ui-dialog-backdrop.closing{animation:fadeOut 0.2s ease-in forwards}.ui-dialog-backdrop.hidden-mounted{display:none !important;pointer-events:none !important}.position-center{align-items:center;justify-content:center}.position-top{align-items:flex-start;justify-content:center;padding-top:3rem}.position-bottom{align-items:flex-end;justify-content:center;padding-bottom:3rem}.position-left{align-items:center;justify-content:flex-start;padding-left:3rem}.position-right{align-items:center;justify-content:flex-end;padding-right:3rem}.position-top-right{align-items:flex-start;justify-content:flex-end;padding-top:3rem;padding-right:3rem}.position-top-left{align-items:flex-start;justify-content:flex-start;padding-top:3rem;padding-left:3rem}.position-bottom-right{align-items:flex-end;justify-content:flex-end;padding-bottom:3rem;padding-right:3rem}.position-bottom-left{align-items:flex-end;justify-content:flex-start;padding-bottom:3rem;padding-left:3rem}.ui-dialog-box{background-color:var(--bg-primary, #ffffff);border-radius:var(--ui-dialog-border-radius, 8px);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);display:flex;flex-direction:column;max-width:90vw;max-height:90vh;position:relative;animation:scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1);outline:none;}.ui-dialog-box.is-nested{box-shadow:0 30px 60px -10px rgba(0, 0, 0, 0.3), 0 15px 15px -10px rgba(0, 0, 0, 0.08);border:1px solid var(--ui-color-primary, #10b981);z-index:10001;transform-origin:center center}.ui-dialog-box.is-nested .ui-dialog-header-wrapper{background-color:var(--ui-bg-muted)}.ui-dialog-box{}@media (prefers-reduced-motion: reduce){.ui-dialog-box{animation:none !important;transition:none !important}}.ui-dialog-box{}.ui-dialog-box.density-compact{--dh-padding:8px 16px;--dc-padding:16px;--df-padding:8px 16px;font-size:0.875rem}.ui-dialog-box.density-compact .ui-dialog-content-wrapper{padding:16px !important}.ui-dialog-box.density-compact .ui-dialog-header-wrapper{padding:8px 16px !important}.ui-dialog-box.density-comfortable{--dh-padding:32px 32px 16px;--dc-padding:32px;--df-padding:24px 32px}.ui-dialog-box.density-comfortable .ui-dialog-content-wrapper{padding:32px !important}.ui-dialog-box{}.ui-dialog-box.variant-glass{background:rgba(255, 255, 255, 0.72) !important;backdrop-filter:blur(28px) saturate(180%) !important;-webkit-backdrop-filter:blur(28px) saturate(180%) !important;border:1px solid rgba(255, 255, 255, 0.4) !important}.ui-dialog-box.variant-minimal{border-color:transparent !important;box-shadow:0 4px 12px rgba(0, 0, 0, 0.08) !important}.ui-dialog-box.variant-ghost{background:transparent !important;box-shadow:none !important;border-color:transparent !important}.ui-dialog-box{}.ui-dialog-box.status-info{border-top:3px solid #10b981 !important}.ui-dialog-box.status-success{border-top:3px solid #10b981 !important}.ui-dialog-box.status-warning{border-top:3px solid #f59e0b !important}.ui-dialog-box.status-error{border-top:3px solid #ef4444 !important}.ui-dialog-box{}.ui-dialog-box.animation-fade{animation:fadeIn 0.25s ease-out}.ui-dialog-box.animation-slide-up{animation:slideInUp 0.3s cubic-bezier(0.16, 1, 0.3, 1)}.ui-dialog-box.animation-slide-down{animation:slideInDown 0.3s cubic-bezier(0.16, 1, 0.3, 1)}.ui-dialog-box.animation-flip{animation:flipIn 0.4s cubic-bezier(0.16, 1, 0.3, 1)}.ui-dialog-box.animation-scale{animation:scaleIn 0.25s cubic-bezier(0.16, 1, 0.3, 1)}.ui-dialog-box.closing{animation:scaleOut 0.2s ease-in forwards}.ui-dialog-box.closing.animation-fade{animation-name:fadeOut}.ui-dialog-box.closing.animation-slide-up{animation-name:slideOutDown}.ui-dialog-box.closing.animation-slide-down{animation-name:slideOutUp}.ui-dialog-box{}.ui-dialog-box.type-drawer{border-radius:0;max-width:none;max-height:none;position:fixed !important;margin:0 !important;box-shadow:var(--elevation-navigation, 0 10px 40px rgba(0, 0, 0, 0.2))}.ui-dialog-box{}.ui-dialog-backdrop.position-left .ui-dialog-box.type-drawer{height:100% !important;left:0 !important;top:0 !important;width:400px;animation:slideInLeft 0.3s cubic-bezier(0.16, 1, 0.3, 1)}.ui-dialog-backdrop.position-right .ui-dialog-box.type-drawer{height:100% !important;right:0 !important;top:0 !important;left:auto !important;width:400px;animation:slideInRight 0.3s cubic-bezier(0.16, 1, 0.3, 1)}.ui-dialog-backdrop.position-top .ui-dialog-box.type-drawer{width:100% !important;top:0 !important;left:0 !important;height:auto;max-height:80vh;animation:slideInTop 0.3s cubic-bezier(0.16, 1, 0.3, 1)}.ui-dialog-backdrop.position-bottom .ui-dialog-box.type-drawer{width:100% !important;bottom:0 !important;top:auto !important;left:0 !important;height:auto;max-height:80vh;animation:slideInBottom 0.3s cubic-bezier(0.16, 1, 0.3, 1)}.ui-dialog-box{}.ui-dialog-box.type-fullscreen{width:100vw !important;height:100vh !important;max-width:none !important;max-height:none !important;border-radius:0;position:fixed !important;inset:0 !important;margin:0 !important;animation:fadeIn 0.3s ease-out}.ui-dialog-box{}.ui-dialog-box.type-messagebox{width:auto;min-width:320px;max-width:650px;text-align:center;border-radius:12px}.ui-dialog-box.type-messagebox .ui-dialog-content-wrapper{padding:32px 24px;display:flex;flex-direction:column;align-items:center;gap:16px}.ui-dialog-box.type-messagebox .ui-dialog-header-wrapper{justify-content:flex-start;border-bottom:none !important}.ui-dialog-box.type-messagebox .ui-dialog-footer-wrapper{justify-content:flex-end !important;display:flex !important;width:100% !important;margin:0 !important}.ui-dialog-box.type-messagebox .ui-dialog-footer-wrapper .footer-right{justify-content:flex-end !important;width:100% !important}.ui-dialog-box.debug-mode{outline:2px dashed var(--color-success, #10b981);outline-offset:4px}.ui-dialog-box.debug-mode::after{content:"DEBUG: " attr(id) " [" attr(status) "]";position:absolute;top:-12px;right:12px;background:var(--bg-secondary, #111827);color:var(--color-success, #10b981);font-family:"JetBrains Mono", monospace;font-size:10px;padding:2px 8px;border-radius:4px;z-index:99999;border:1px solid var(--color-success, #10b981);pointer-events:none}.ui-dialog-box *:focus-visible{outline:2px solid var(--ui-primary-color, var(--color-primary, #10b981));outline-offset:2px}.ui-dialog-box-container{display:flex;flex-direction:column;height:100%;width:100%;padding:0;gap:0;box-sizing:border-box;overflow:hidden}.ui-dialog-divider-line{height:1px;width:100%;background-color:var(--border-default, #e5e7eb);margin:0;padding:0;flex-shrink:0;display:block}.ui-dialog-box.is-dragging{box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.25);z-index:100000 !important;transition:none !important}.ui-dialog-box.loading-active .ui-dialog-content-wrapper,.ui-dialog-box.loading-active .ui-dialog-side-nav{pointer-events:none}.ui-dialog-box.loading-active .ui-dialog-content-wrapper *,.ui-dialog-box.loading-active .ui-dialog-side-nav *{color:transparent !important;background:linear-gradient(90deg, var(--bg-primary, #f0f0f0) 25%, var(--bg-primary, #f7f7f7) 50%, var(--bg-primary, #f0f0f0) 75%);background-size:200% 100%;animation:shimmer 1.5s infinite;border-radius:4px;border:none !important}.ui-dialog-box.loading-active .ui-dialog-content-wrapper img,.ui-dialog-box.loading-active .ui-dialog-content-wrapper svg,.ui-dialog-box.loading-active .ui-dialog-content-wrapper button,.ui-dialog-box.loading-active .ui-dialog-side-nav img,.ui-dialog-box.loading-active .ui-dialog-side-nav svg,.ui-dialog-box.loading-active .ui-dialog-side-nav button{visibility:hidden}@keyframes shimmer{0%{background-position:200% 0}100%{background-position:-200% 0}}.ui-dialog-progress-container{height:4px;background:rgba(0, 0, 0, 0.05);width:100%;position:relative;overflow:hidden;margin-top:-20px;margin-bottom:10px}.ui-dialog-progress-bar{height:100%;background:var(--ui-color-primary, var(--color-primary, #10b981));transition:width 0.3s ease-out}.ui-dialog-taskbar{position:fixed;bottom:0;left:50%;transform:translateX(-50%);background:rgba(255, 255, 255, 0.8);backdrop-filter:blur(10px);padding:8px 16px;border-radius:12px 12px 0 0;border:1px solid var(--ui-border-default);border-bottom:none;display:flex;gap:12px;z-index:1000000;box-shadow:0 -10px 30px rgba(0, 0, 0, 0.1);animation:slideUp 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.ui-dialog-taskbar .taskbar-item{padding:6px 14px;background:var(--bg-primary, #ffffff);border:1px solid var(--border-default, #ddd);border-radius:8px;font-size:13px;font-weight:500;cursor:pointer;transition:all 0.2s;display:flex;align-items:center;gap:8px}.ui-dialog-taskbar .taskbar-item:hover{background:var(--bg-primary, #f9f9f9);transform:translateY(-2px)}.ui-dialog-taskbar .taskbar-item.active{border-color:var(--ui-color-primary);color:var(--ui-color-primary)}@keyframes slideUp{from{transform:translate(-50%, 100%)}to{transform:translate(-50%, 0)}}.ui-dialog-stepper{display:flex;justify-content:space-around;padding:16px;background:var(--ui-bg-muted);border-bottom:1px solid var(--ui-border-default)}.ui-dialog-stepper .step-item{display:flex;flex-direction:column;align-items:center;position:relative;flex:1}.ui-dialog-stepper .step-item .step-dot{width:24px;height:24px;border-radius:50%;background:var(--bg-primary, #e5e7eb);color:var(--text-muted, #9ca3af);display:flex;align-items:center;justify-content:center;font-size:11px;font-weight:700;z-index:2;transition:all 0.3s}.ui-dialog-stepper .step-item .step-label{font-size:11px;margin-top:6px;color:var(--text-muted, #6b7280);transition:all 0.3s}.ui-dialog-stepper .step-item .step-line{position:absolute;top:12px;left:50%;width:100%;height:2px;background:var(--bg-primary, #e5e7eb);z-index:1}.ui-dialog-stepper .step-item.active .step-dot{background:var(--ui-color-primary);color:var(--text-standard, #ffffff);transform:scale(1.2);box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.1)}.ui-dialog-stepper .step-item.active .step-label{color:var(--ui-color-primary);font-weight:600}.ui-dialog-stepper .step-item.completed .step-dot{background:var(--color-success, #10b981);color:var(--text-standard, #ffffff)}.ui-dialog-stepper .step-item.completed .step-line{background:var(--color-success, #10b981)}.ui-dialog-box.hidden-mounted{display:none !important}.ui-dialog-box.scroll-paper{overflow:hidden;display:flex;flex-direction:column}.ui-dialog-main-container{display:flex;flex:1;min-height:0;overflow:hidden}.ui-dialog-main-container.has-side-nav{flex-direction:row}.ui-dialog-side-nav{width:240px;background:var(--ui-bg-muted, var(--bg-primary, #f9fafb));border-right:1px solid var(--ui-border-default, var(--border-default, #e5e7eb));overflow-y:auto;flex-shrink:0}.ui-dialog-toolbar{padding:8px 16px;background:var(--ui-bg-default);border-bottom:1px solid var(--ui-border-default);display:flex;align-items:center;gap:12px}.ui-dialog-status-bar{padding:4px 16px;background:var(--ui-bg-muted);border-top:1px solid var(--ui-border-default);font-size:11px;color:var(--ui-text-secondary)}.ui-dialog-box.scroll-paper .ui-dialog-content-wrapper{flex:1;overflow-y:auto;font-size:16px;line-height:1.5;color:var(--text-secondary, #374151);min-height:150px;max-height:70vh;padding:24px}.ui-dialog-backdrop.scroll-body-active{position:absolute !important;top:0 !important;left:0 !important;right:0 !important;bottom:auto !important;height:auto !important;min-height:100%;overflow:visible;display:block;padding:80px 0;background-color:rgba(0, 0, 0, 0.4)}.ui-dialog-box.scroll-body{display:block !important;max-height:none !important;height:auto !important;min-height:min-content;margin:0 auto;}.ui-dialog-box.scroll-body .ui-dialog-box-container{display:block !important;height:auto !important;overflow:visible !important}.ui-dialog-box.scroll-body{}.ui-dialog-box.scroll-body .ui-dialog-main-container{display:block !important;height:auto !important;min-height:0 !important;overflow:visible !important;flex:none !important}.ui-dialog-box.scroll-body .ui-dialog-content-wrapper{overflow:visible !important;max-height:none !important;height:auto !important;padding:24px;display:block !important}.ui-dialog-prompt-container{margin-top:16px;display:flex;flex-direction:column;gap:8px}.ui-dialog-prompt-container .prompt-label{font-size:14px;font-weight:600;color:var(--text-standard)}.ui-dialog-prompt-container .ui-dialog-prompt-input{width:100%;padding:10px 12px;border:1px solid var(--border-default, #d1d5db);border-radius:6px;font-size:14px;transition:border-color 0.2s, box-shadow 0.2s;background:var(--bg-primary);color:var(--text-standard);box-sizing:border-box}.ui-dialog-prompt-container .ui-dialog-prompt-input:focus{outline:none;border-color:var(--color-primary, #10b981);box-shadow:0 0 0 3px rgba(59, 130, 246, 0.1)}.ui-dialog-header-wrapper{min-height:fit-content;flex-shrink:0}.ui-dialog-footer-wrapper{min-height:fit-content;flex-shrink:0;width:100%}.ui-dialog-box.closing{animation:scaleOut 0.2s ease-in forwards}@keyframes shake{0%,100%{transform:translateX(0) rotate(0deg)}12.5%{transform:translateX(-6px) rotate(-1deg)}25%{transform:translateX(5px) rotate(1deg)}37.5%{transform:translateX(-4px) rotate(-0.8deg)}50%{transform:translateX(3px) rotate(0.6deg)}62.5%{transform:translateX(-2px) rotate(-0.4deg)}75%{transform:translateX(1px) rotate(0.2deg)}}.ui-dialog-box.shake .ui-dialog-box-container{animation:shake 0.4s cubic-bezier(0.36, 0.07, 0.19, 0.97) both;transform-origin:center;will-change:transform}.ui-dialog-box.variant-outlined{border:2px solid var(--border-default, #e5e7eb)}.ui-dialog-box.variant-outlined.status-info{border-color:var(--color-primary, #10b981)}.ui-dialog-box.variant-outlined.status-success{border-color:var(--color-success, #10b981)}.ui-dialog-box.variant-outlined.status-warning{border-color:var(--color-warning, #f59e0b)}.ui-dialog-box.variant-outlined.status-error{border-color:var(--color-danger, #ef4444)}.ui-dialog-box.variant-filled.status-info{background:linear-gradient(to bottom, var(--bg-primary, #dbeafe) 0%, var(--bg-primary, #ffffff) 100%);border-left:4px solid var(--color-primary, #10b981)}.ui-dialog-box.variant-filled.status-success{background:linear-gradient(to bottom, var(--bg-primary, #d1fae5) 0%, var(--bg-primary, #ffffff) 100%);border-left:4px solid var(--color-success, #10b981)}.ui-dialog-box.variant-filled.status-warning{background:linear-gradient(to bottom, var(--bg-primary, #fef3c7) 0%, var(--bg-primary, #ffffff) 100%);border-left:4px solid var(--color-warning, #f59e0b)}.ui-dialog-box.variant-filled.status-error{background:linear-gradient(to bottom, var(--bg-primary, #fee2e2) 0%, var(--bg-primary, #ffffff) 100%);border-left:4px solid var(--color-danger, #ef4444)}.ui-dialog-box.maximized{width:90vw !important;height:90vh !important;max-width:90vw;max-height:90vh;border-radius:8px;position:fixed;top:5vh !important;left:5vw !important;transform:none !important;}.ui-dialog-box.minimized{display:flex !important;flex-shrink:0;width:192px !important;height:48px !important;align-self:stretch;position:relative !important;inset:auto !important;transform:none !important;margin:0 !important;border-radius:0 !important;background:transparent !important;box-shadow:none !important;border:none !important;overflow:hidden;animation:trayTabIn 0.28s cubic-bezier(0.16, 1, 0.3, 1) forwards}.ui-dialog-box.minimized .ui-dialog-box-container{height:100%;width:100%}.ui-dialog-box.minimized .ui-tray-tab{width:100%;height:100%;display:flex;align-items:center;justify-content:center;padding:0 24px;gap:12px;cursor:pointer;background:transparent;border-right:1px solid rgba(255, 255, 255, 0.12);color:#ffffff !important;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);position:relative;font-weight:600;font-size:13.5px;min-width:160px;max-width:260px;letter-spacing:0.01em}.ui-dialog-box.minimized .ui-tray-tab:hover{background:rgba(255, 255, 255, 0.04)}.ui-dialog-box.minimized .ui-tray-tab .tab-label{color:rgba(255, 255, 255, 0.9);white-space:nowrap;overflow:hidden;text-overflow:ellipsis;flex:0 1 auto;text-align:center}.ui-dialog-box.minimized .ui-tray-tab .tab-close{background:rgba(255, 255, 255, 0.1);border:none;color:#fff;font-size:16px;padding:2px 6px;cursor:pointer;border-radius:4px;display:flex;align-items:center;justify-content:center;transition:all 0.2s;margin-left:4px}.ui-dialog-box.minimized .ui-tray-tab .tab-close:hover{background:#ef4444;color:#fff}.ui-dialog-box.minimized .ui-tray-tab:hover{background:rgba(255, 255, 255, 0.12);color:#fff}.ui-peek-panel{position:fixed;bottom:50px;left:50%;transform:translateX(-50%);width:500px;max-width:90vw;max-height:70vh;background:var(--bg-primary, #fff);border-radius:12px 12px 0 0;border:1px solid var(--border-default, #eee);box-shadow:0 -10px 40px rgba(0, 0, 0, 0.25);display:flex;flex-direction:column;overflow:hidden;z-index:1000002;animation:peekIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards}.ui-peek-panel.status-info{border-top:3px solid #10b981}.ui-peek-panel.status-success{border-top:3px solid #10b981}.ui-peek-panel.status-warning{border-top:3px solid #f59e0b}.ui-peek-panel.status-error{border-top:3px solid #ef4444}.ui-peek-panel .ui-dialog-content-wrapper{overflow-y:auto;flex:1;padding:20px}@keyframes trayTabIn{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes peekIn{from{opacity:0;transform:translateX(-50%) translateY(20px) scale(0.98)}to{opacity:1;transform:translateX(-50%) translateY(0) scale(1)}}@keyframes slideInUp{from{opacity:0;transform:translateY(30px)}to{opacity:1;transform:translateY(0)}}@keyframes slideInDown{from{opacity:0;transform:translateY(-30px)}to{opacity:1;transform:translateY(0)}}@keyframes slideOutUp{to{opacity:0;transform:translateY(-30px)}}@keyframes slideOutDown{to{opacity:0;transform:translateY(30px)}}@keyframes flipIn{from{opacity:0;transform:perspective(1000px) rotateX(-15deg)}to{opacity:1;transform:perspective(1000px) rotateX(0)}}.resize-handle{position:absolute;bottom:0;right:0;width:16px;height:16px;cursor:nwse-resize;background:linear-gradient(135deg, transparent 50%, var(--color-primary, #9ca3af) 50%);background-size:10px 10px;clip-path:polygon(100% 0, 100% 100%, 0 100%);margin:2px}.ui-dialog-box.draggable .ui-dialog-header-wrapper{cursor:move}@keyframes fadeIn{from{opacity:0}to{opacity:1}}@keyframes fadeOut{from{opacity:1}to{opacity:0}}@keyframes scaleIn{from{opacity:0;transform:scale(0.95) translateY(-10px)}to{opacity:1;transform:scale(1) translateY(0)}}@keyframes slideInLeft{from{opacity:0;transform:translateX(-100%)}to{opacity:1;transform:translateX(0)}}@keyframes slideInRight{from{opacity:0;transform:translateX(100%)}to{opacity:1;transform:translateX(0)}}@keyframes slideInTop{from{opacity:0;transform:translateY(-100%)}to{opacity:1;transform:translateY(0)}}@keyframes slideInBottom{from{opacity:0;transform:translateY(100%)}to{opacity:1;transform:translateY(0)}}@keyframes scaleOut{from{opacity:1;transform:scale(1)}to{opacity:0;transform:scale(0.95)}}@media (max-width: 768px){.ui-dialog-box{width:95vw;max-width:95vw}}.ui-dialog-box.size-xs{width:320px}.ui-dialog-box.size-sm{width:480px}.ui-dialog-box.size-md{width:768px}.ui-dialog-box.size-lg{width:1024px}.ui-dialog-box.size-xl{width:1280px}.ui-dialog-box.size-fill{width:90vw;height:90vh}.ui-dialog-footer-wrapper{padding:0;display:flex;justify-content:flex-end;align-items:center;background-color:transparent}.footer-left,.footer-right{display:flex;gap:12px;align-items:center}.footer-right{margin-left:auto}.ui-dialog-confirmation{display:flex;align-items:center;padding:0 8px}.snap-indicator{position:fixed;background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.2);border:2px solid var(--ui-color-primary, var(--color-primary, #10b981));pointer-events:none;z-index:9999;transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);border-radius:8px}.snap-indicator.snap-left{left:0;top:0;bottom:0;width:50vw}.snap-indicator.snap-right{right:0;top:0;bottom:0;width:50vw}.snap-indicator.snap-top{left:0;top:0;right:0;height:100vh}.snap-indicator.snap-bottom{left:0;bottom:0;right:0;height:50vh}.ui-dialog-sub-overlay{position:absolute;inset:0;background:rgba(0, 0, 0, 0.4);backdrop-filter:blur(4px);display:flex;align-items:center;justify-content:center;z-index:50;animation:fadeIn 0.3s ease-out}.ui-dialog-sub-overlay .sub-overlay-card{background:var(--bg-primary, #ffffff);padding:24px;border-radius:12px;box-shadow:var(--ui-shadow-lg);max-width:80%;animation:scaleIn 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.ui-dialog-sub-overlay .sub-overlay-card h4{margin:0 0 10px;font-size:18px}.ui-dialog-sub-overlay .sub-overlay-card p{margin:0 0 20px;color:var(--ui-text-secondary);line-height:1.5}.ui-dialog-sub-overlay .sub-overlay-actions{display:flex;justify-content:flex-end;gap:12px}.ui-dialog-sub-overlay .sub-overlay-actions button{padding:8px 16px;border-radius:6px;font-size:14px;font-weight:500;cursor:pointer;transition:all 0.2s}.ui-dialog-sub-overlay .sub-overlay-actions .btn-ghost{background:transparent;border:1px solid var(--ui-border-default);color:var(--ui-text-primary)}.ui-dialog-sub-overlay .sub-overlay-actions .btn-ghost:hover{background:rgba(0, 0, 0, 0.05)}.ui-dialog-sub-overlay .sub-overlay-actions .btn-primary{background:var(--ui-color-primary, var(--color-primary, #10b981));border:1px solid var(--ui-color-primary, var(--color-primary, #10b981));color:var(--text-standard, #ffffff)}.ui-dialog-sub-overlay .sub-overlay-actions .btn-primary:hover{background:var(--ui-color-primary-dark, var(--color-primary-hover, #2563eb))}.ui-dialog-box.glass-effect{background:rgba(255, 255, 255, 0.7);backdrop-filter:blur(20px);border-color:rgba(255, 255, 255, 0.4)}.spinner{width:16px;height:16px;border:2px solid rgba(255, 255, 255, 0.3);border-top-color:var(--bg-primary, #ffffff);border-radius:50%;animation:spin 0.8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}`;

const dialogTrayCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}#db-tray-dock{position:fixed;bottom:0;left:0;right:0;height:48px;z-index:1000000;pointer-events:none;display:none;flex-direction:row;align-items:flex-end;justify-content:center}#db-tray-bar{max-width:92vw;height:52px;display:flex;flex-direction:row;align-items:stretch;pointer-events:auto;overflow:hidden;border-radius:16px 16px 0 0;background:rgba(13, 17, 23, 0.98);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(200px) saturate(180%);border:1px solid rgba(255, 255, 255, 0.08);border-bottom:none;box-shadow:0 -8px 32px rgba(0, 0, 0, 0.6), inset 0 1px 0 rgba(255, 255, 255, 0.05)}#db-tray-bar .db-dock-row{display:flex;flex-direction:row;flex-wrap:nowrap;align-items:stretch;flex:1;min-width:0;overflow-x:auto;scroll-behavior:smooth;justify-content:flex-start;-ms-overflow-style:none;scrollbar-width:none;}#db-tray-bar .db-dock-row::-webkit-scrollbar{display:none}.db-dock-arrow{display:flex;align-items:center;justify-content:center;width:36px;background:transparent;border:none;cursor:pointer;color:rgba(255, 255, 255, 0.4);opacity:0;pointer-events:none;transition:opacity 0.2s, color 0.15s, background 0.15s;font-size:20px}.db-dock-arrow.visible{opacity:1;pointer-events:auto}.db-dock-arrow:hover{color:#fff;background:rgba(255, 255, 255, 0.06)}.db-dock-arrow-left{border-right:1px solid rgba(255, 255, 255, 0.08)}.db-dock-arrow-right{border-left:1px solid rgba(255, 255, 255, 0.08)}#db-dock-menu-btn{display:flex;align-items:center;justify-content:center;gap:10px;padding:0 12px;background:rgba(255, 255, 255, 0.03);margin:8px;border-radius:10px;border:1px solid rgba(255, 255, 255, 0.05);cursor:pointer;color:rgba(255, 255, 255, 0.5);transition:all 0.2s ease;min-width:64px}#db-dock-menu-btn:hover,#db-dock-menu-btn.open{background:rgba(255, 255, 255, 0.08);color:#fff;border-color:rgba(255, 255, 255, 0.1)}#db-dock-menu-btn .db-badge{min-width:20px;height:20px;border-radius:10px;background:#4f46e5;color:#fff;font-size:11px;font-weight:700;display:inline-flex;align-items:center;justify-content:center;box-shadow:0 0 12px rgba(79, 70, 229, 0.4)}#db-tray-menu-panel{position:fixed;z-index:1000003;min-width:252px;max-width:310px;background:rgba(8, 14, 30, 0.97);backdrop-filter:blur(28px) saturate(200%);-webkit-backdrop-filter:blur(28px) saturate(200%);border:1px solid rgba(255, 255, 255, 0.11);border-radius:10px;box-shadow:0 -4px 32px rgba(0, 0, 0, 0.55), 0 16px 48px rgba(0, 0, 0, 0.4);display:none;flex-direction:column;overflow:hidden;transform-origin:bottom right;animation:sdMenuIn 0.17s cubic-bezier(0.16, 1, 0.3, 1) forwards}#db-tray-menu-panel.open{display:flex}#db-tray-menu-hdr{display:flex;align-items:center;justify-content:space-between;padding:9px 13px 7px;font-size:10px;font-weight:700;letter-spacing:0.07em;text-transform:uppercase;color:rgba(255, 255, 255, 0.28);border-bottom:1px solid rgba(255, 255, 255, 0.06)}#db-tray-menu-list{max-height:320px;overflow-y:auto;scrollbar-width:thin;scrollbar-color:rgba(255, 255, 255, 0.12) transparent}.db-mi{display:flex;align-items:center;gap:10px;padding:10px 16px;cursor:pointer;transition:all 0.2s;border-bottom:1px solid rgba(255, 255, 255, 0.04)}.db-mi:last-child{border-bottom:none}.db-mi:hover{background:rgba(255, 255, 255, 0.07)}.db-mi-dot{width:7px;height:7px;border-radius:50%;background:rgba(255, 255, 255, 0.18)}.db-mi-dot.info{background:#10b981}.db-mi-dot.success{background:#10b981;box-shadow:0 0 5px rgba(16, 185, 129, 0.5)}.db-mi-dot.warning{background:#f59e0b}.db-mi-dot.error{background:#ef4444;box-shadow:0 0 5px rgba(239, 68, 68, 0.5)}.db-mi-label{flex:1;font-size:12.5px;font-weight:500;color:rgba(255, 255, 255, 0.72);overflow:hidden;text-overflow:ellipsis;white-space:nowrap}#db-tray-overlay{position:fixed;inset:0;z-index:1000002;display:none}#db-tray-overlay.open{display:block}@keyframes sdMenuIn{from{opacity:0;transform:translateY(8px) scale(0.96)}to{opacity:1;transform:translateY(0) scale(1)}}`;

// ─── Global tray registry ────────────────────────────────────────────────────
// Dock bar: [‹ arrow] [scrollable tab row] [› arrow] [≡ all-tabs menu]
const DialogTray = new class {
    _items = [];
    _outer = null;
    _row = null;
    _menuBtn = null;
    _menuPanel = null;
    _menuList = null;
    _menuOpen = false;
    _originals = new Map();
    _moving = new Set();
    _injectStyles() {
        if (document.getElementById('db-tray-dynamic-styles'))
            return;
        const s = document.createElement('style');
        s.id = 'db-tray-dynamic-styles';
        s.textContent = `
      #db-tray-dock { position: fixed; bottom: 0; left: 0; right: 0; height: 52px; z-index: 1000000; pointer-events: none; display: flex; flex-direction: row; align-items: flex-end; justify-content: center; }
      #db-tray-bar { max-width: 95vw; height: 52px; display: flex; flex-direction: row; align-items: stretch; pointer-events: auto; overflow: hidden; border-radius: 16px 16px 0 0; background: rgba(13, 17, 23, 0.98); backdrop-filter: blur(24px); -webkit-backdrop-filter: blur(24px); border: 1px solid rgba(255, 255, 255, 0.1); border-bottom: none; box-shadow: 0 -8px 32px rgba(0, 0, 0, 0.6); }
      #db-tray-bar .db-dock-row { display: flex; flex-direction: row; flex-wrap: nowrap; align-items: stretch; flex: 1; min-width: 0; overflow-x: hidden; scroll-behavior: smooth; justify-content: center; }
      #db-tray-bar .db-dock-row::-webkit-scrollbar { display: none; }
      .db-dock-arrow { display: flex; align-items: center; justify-content: center; width: 36px; background: transparent; border: none; cursor: pointer; color: #fff; opacity: 0; pointer-events: none; transition: all 0.2s; font-size: 20px; }
      .db-dock-arrow.visible { opacity: 1; pointer-events: auto; }
      #db-dock-menu-btn { display: flex; align-items: center; justify-content: center; gap: 10px; padding: 0 16px; background: rgba(255, 255, 255, 0.05); margin: 6px; border-radius: 10px; border: 1px solid rgba(255, 255, 255, 0.1); cursor: pointer; color: #fff; transition: all 0.2s; min-width: 64px; }
      #db-dock-menu-btn .db-badge { min-width: 20px; height: 20px; border-radius: 10px; background: #4f46e5; color: #fff; font-size: 11px; font-weight: 700; display: inline-flex; align-items: center; justify-content: center; }
      .ui-tray-tab { min-width: 160px; max-width: 300px; height: 52px; display: flex; align-items: center; justify-content: center; padding: 0 32px; gap: 12px; cursor: pointer; border-right: 1px solid rgba(255,255,255,0.1); transition: all 0.2s; color: #fff !important; }
      .ui-tray-tab * { color: #fff !important; }
      .ui-tray-tab:hover { background: rgba(255,255,255,0.08); }
      .ui-tray-tab .tab-label { font-size: 13.5px; font-weight: 600; color:red; white-space: nowrap; overflow: hidden; text-overflow: ellipsis; flex: 0 1 auto; margin: 0 4px; }
      .ui-tray-btn { display: flex; align-items: center; justify-content: center; width: 20px; height: 20px; border-radius: 6px; border: none; background: rgba(255,255,255,0.12); cursor: pointer; }
      .ui-tray-btn:hover { background: #ef4444; }
    `;
        document.head.appendChild(s);
    }
    _ensureDock() {
        if (this._outer)
            return;
        this._injectStyles(); // Fail-safe injection
        const outer = document.createElement('div');
        outer.id = 'db-tray-dock';
        // Use JS for critical layout to ensure it doesn't impact page height even if CSS is delayed
        Object.assign(outer.style, {
            position: 'fixed',
            bottom: '0',
            left: '0',
            right: '0',
            zIndex: '1000000',
            display: 'none',
            pointerEvents: 'none'
        });
        const bar = document.createElement('div');
        bar.id = 'db-tray-bar';
        const btnL = document.createElement('button');
        btnL.className = 'db-dock-arrow db-dock-arrow-left';
        btnL.textContent = '\u2039'; // ‹
        const row = document.createElement('div');
        row.className = 'db-dock-row';
        const btnR = document.createElement('button');
        btnR.className = 'db-dock-arrow db-dock-arrow-right';
        btnR.textContent = '\u203A'; // ›
        const menuBtn = document.createElement('button');
        menuBtn.id = 'db-dock-menu-btn';
        const menuIcon = document.createElement('span');
        menuIcon.textContent = '\u2630'; // ☰
        const badge = document.createElement('span');
        badge.className = 'db-badge';
        badge.textContent = '0';
        menuBtn.append(menuIcon, badge);
        bar.append(btnL, row, btnR, menuBtn);
        outer.appendChild(bar);
        document.body.appendChild(outer);
        const overlay = document.createElement('div');
        overlay.id = 'db-tray-overlay';
        const panel = document.createElement('div');
        panel.id = 'db-tray-menu-panel';
        // Safety position for panel too
        Object.assign(panel.style, {
            position: 'fixed',
            zIndex: '1000003',
            display: 'none'
        });
        const hdr = document.createElement('div');
        hdr.id = 'db-tray-menu-hdr';
        hdr.textContent = 'Minimized Windows';
        const list = document.createElement('div');
        list.id = 'db-tray-menu-list';
        panel.append(hdr, list);
        document.body.append(overlay, panel);
        btnL.onclick = () => { row.scrollLeft -= 180; };
        btnR.onclick = () => { row.scrollLeft += 180; };
        menuBtn.onclick = () => { this._menuOpen ? this._closeMenu() : this._openMenu(); };
        overlay.onclick = () => this._closeMenu();
        const syncArrows = () => {
            btnL.classList.toggle('visible', row.scrollLeft > 5);
            btnR.classList.toggle('visible', row.scrollLeft < row.scrollWidth - row.clientWidth - 5);
        };
        row.onscroll = syncArrows;
        if (window.ResizeObserver)
            new ResizeObserver(syncArrows).observe(row);
        this._outer = outer;
        this._row = row;
        this._menuBtn = menuBtn;
        this._menuPanel = panel;
        this._menuList = list;
    }
    _openMenu() {
        if (!this._menuBtn || !this._menuPanel)
            return;
        this._menuOpen = true;
        this._syncMenu();
        const r = this._menuBtn.getBoundingClientRect();
        const p = this._menuPanel;
        p.style.display = 'flex'; // Ensure it's rendered to get dimensions
        const pr = p.getBoundingClientRect();
        // Position fixed at bottom-right based on button position
        p.style.left = `${r.right - pr.width}px`;
        p.style.top = `${r.top - pr.height - 12}px`;
        p.classList.add('open');
        document.getElementById('db-tray-overlay')?.classList.add('open');
    }
    _closeMenu() {
        this._menuOpen = false;
        this._menuPanel?.classList.remove('open');
        document.getElementById('db-tray-overlay')?.classList.remove('open');
    }
    _syncMenu() {
        if (!this._menuList || !this._menuBtn)
            return;
        const items = this.minimized();
        const badge = this._menuBtn.querySelector('.db-badge');
        if (badge)
            badge.textContent = String(items.length);
        while (this._menuList.firstChild)
            this._menuList.removeChild(this._menuList.firstChild);
        if (!items.length) {
            const empty = document.createElement('div');
            empty.style.cssText = 'padding:16px;font-size:11px;color:#666;text-align:center;';
            empty.textContent = 'No minimized windows';
            this._menuList.appendChild(empty);
        }
        items.forEach(d => {
            const row = document.createElement('div');
            row.className = 'db-mi';
            const dot = document.createElement('span');
            dot.className = `db-mi-dot ${d.status}`;
            const label = document.createElement('span');
            label.className = 'db-mi-label';
            label.textContent = d.dockLabel || d.dialogTitle || 'Dialog';
            row.append(dot, label);
            row.onclick = () => { this.openPeekFor(d); this._closeMenu(); };
            this._menuList?.appendChild(row);
        });
    }
    openPeekFor(d) {
        const wasPeek = d._dockPeek;
        this.minimized().forEach(i => i._dockPeek = false);
        if (wasPeek) {
            d.restore(); // If was already peeking, clicking again restores it
        }
        else {
            d._dockPeek = true;
        }
        this._syncMenu();
        requestAnimationFrame(() => d.el.scrollIntoView({ behavior: 'smooth', inline: 'center' }));
    }
    register(d) {
        if (!this._items.includes(d)) {
            this._items.push(d);
            this._reflow(); // Update counter when added
        }
    }
    unregister(d) {
        if (this._moving.has(d))
            return;
        this._originals.forEach((orig, item) => {
            if (item === d && this._row && d.el.parentElement === this._row) {
                orig.parent.insertBefore(d.el, orig.nextSibling);
                this._originals.delete(d);
            }
        });
        this._items = this._items.filter(i => i !== d);
        this._reflow();
    }
    minimized() { return this._items.filter(d => d.minimized && d.open); }
    // Only items that should physically live inside the tray bar row (non-peeked tabs)
    inTray() { return this.minimized().filter(d => !d._dockPeek); }
    reflow() { this._reflow(); }
    get() { return this; }
    getAll() { return this._items; }
    getMinimized() { return this.minimized(); }
    _reflow() {
        const allMin = this.minimized();
        const itemsInTray = this.inTray();
        if (allMin.length > 0)
            this._ensureDock();
        const row = this._row;
        if (!row)
            return;
        itemsInTray.forEach(d => {
            if (d.el.parentElement !== row) {
                // Only save original parent if it's NOT the tray bar itself
                const parent = d.el.parentNode;
                if (parent && parent !== row) {
                    this._originals.set(d, { parent: parent, nextSibling: d.el.nextSibling });
                }
                else if (!this._originals.has(d)) {
                    this._originals.set(d, { parent: document.body, nextSibling: null });
                }
                this._moving.add(d);
                row.appendChild(d.el);
                this._moving.delete(d);
            }
        });
        this._originals.forEach((orig, d) => {
            const shouldBeInTray = itemsInTray.includes(d);
            if (!shouldBeInTray && d.el.parentElement === row) {
                // Safe restoration: check if nextSibling is still valid/attached
                if (orig.nextSibling && orig.nextSibling.parentNode === orig.parent) {
                    orig.parent.insertBefore(d.el, orig.nextSibling);
                }
                else {
                    // Fallback to append if sibling is gone or parent is inconsistent
                    orig.parent.appendChild(d.el);
                }
                this._originals.delete(d);
            }
        });
        if (this._outer)
            this._outer.style.display = allMin.length > 0 ? 'flex' : 'none';
        this._syncMenu();
    }
}();
const DialogBox = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.dialogClosed = createEvent(this, "dialogClosed");
        this.undo = createEvent(this, "undo");
        this.redo = createEvent(this, "redo");
        this.dialogOpened = createEvent(this, "dialogOpened");
        this.toastRequest = createEvent(this, "toastRequest");
        this.auditLog = createEvent(this, "auditLog");
        this.beforeOpen = createEvent(this, "beforeOpen");
        this.openStarted = createEvent(this, "openStarted");
        this.afterOpen = createEvent(this, "afterOpen");
        this.beforeCloseEvent = createEvent(this, "beforeCloseEvent");
        this.closeStarted = createEvent(this, "closeStarted");
        this.afterClose = createEvent(this, "afterClose");
        this.menuAction = createEvent(this, "menuAction");
        this.ok = createEvent(this, "ok");
        this.cancel = createEvent(this, "cancel");
        this.dialogReset = createEvent(this, "dialogReset");
        this.dialogMaximized = createEvent(this, "dialogMaximized");
        this.dialogMinimized = createEvent(this, "dialogMinimized");
        this.menu = createEvent(this, "menu");
    }
    _defaultDialogTitle = '';
    _defaultOkText = '';
    get el() { return getElement(this); }
    _restoredLayout = undefined;
    _isShaking = false;
    _sessionTimedOut = false;
    /**
     * Whether the dialog is open
     */
    open = false;
    /**
     * Dialog title
     */
    dialogTitle = '';
    /**
     * Dialog subtitle
     */
    subtitle = '';
    /**
     * Whether the dialog is maximized
     */
    maximized = false;
    /**
     * Whether the dialog is minimized
     */
    minimized = false;
    /**
     * Dialog width. Explicit width takes precedence over size if size is 'custom'.
     */
    width = '500px';
    /**
     * Dialog height
     */
    height = 'auto';
    /**
     * Path to header image
     */
    headerImage;
    /**
     * Icon name to show in the header
     */
    icon = '';
    /**
     * User avatar URL to show in the header
     */
    avatar = '';
    /**
     * Whether to show maximize button
     */
    showMaximize = false;
    /**
     * Whether to show minimize button
     */
    showMinimize = false;
    /**
     * Whether to show close button
     */
    showClose = true;
    /**
     * Whether to show menu button (Action Menu)
     */
    showMenu = false;
    /**
     * Icon for the menu trigger button in the header.
     * Defaults to 'more-horizontal' (⋯). Use 'settings' for a gear, 'sliders-horizontal' for filters, etc.
     */
    menuIcon = 'more-horizontal';
    /**
     * Tooltip text for the menu trigger button.
     */
    menuTitle = 'Menu';
    /**
     * Whether to show the header
     */
    showHeader = true;
    /**
     * Whether to show the footer
     */
    showFooter = true;
    /**
     * Dialog variant style
     */
    variant = 'outlined';
    /**
     * Dialog status/type
     */
    status = 'default';
    /**
     * Backdrop Behavior. 'default' (closes on click), 'static' (no close), 'none' (no backdrop).
     */
    backdrop = 'default';
    /**
     * Scroll behavior. 'paper' (scroll inside content), 'body' (scroll whole dialog).
     */
    scrollArea = 'paper';
    /**
     * Dialog functional type.
     * - 'modal': Standard centered modal.
     * - 'drawer': Slides from an edge (determined by position).
     * - 'fullscreen': Occupies entire screen.
     * - 'alert': Emphasis on the message, simple actions.
     * - 'confirm': Standard confirmation with OK/Cancel flow.
     * - 'prompt': Modal with an input field for user entry.
     * - 'messagebox': Simplified modal for informational messages.
     * - (Legacy): 'default' | 'delete' | 'upload' | 'session' | 'terms'
     */
    type = 'modal';
    /**
     * Label for the input field (only for 'prompt' type).
     */
    promptLabel = '';
    /**
     * Placeholder text for the prompt input.
     */
    promptPlaceholder = '';
    /**
     * Input type for the prompt (text, password, etc.).
     */
    promptType = 'text';
    /**
     * Initial value for the prompt input.
     */
    promptInitialValue = '';
    /**
     * Session timeout duration in seconds (only for 'session' type).
     */
    sessionTimeout = 60;
    /**
     * Whether to automatically submit 'session' dialog on timeout.
     * If false, it will just close (cancel).
     */
    autoSubmitOnTimeout = false;
    /**
     * Position of the dialog.
     * For 'drawer' type, these determine the slide direction.
     */
    position = 'center';
    /**
     * Predefined horizontal sizing.
     */
    size = 'md';
    /**
     * Visual density mode.
     */
    density = 'cozy';
    /**
     * Whether clicking the backdrop closes the dialog.
     */
    closeOnBackdrop = true;
    /**
     * Whether the ESC key closes the dialog.
     */
    closeOnEsc = true;
    /**
     * Draggable dialog (only for 'modal' type).
     */
    isDraggable = false;
    /**
     * Resizable dialog.
     */
    resizable = false;
    /**
     * Stepper steps for Wizard mode. Either an array of strings or a number.
     */
    steps = 0;
    /**
     * Current step in Wizard mode (1-indexed).
     */
    currentStep = 1;
    _currentStep = 1;
    currentStepChanged(newValue) {
        this._currentStep = newValue;
    }
    /**
     * Whether to blur the entire webpage behind this dialog.
     */
    globalBlur = false;
    /**
     * Dialog layout mode.
     * 'default': Standard dialog
     * 'side-nav': Includes a sidebar for master/detail views
     */
    layout = 'default';
    /**
     * Whether to show a toolbar below the header
     */
    showToolbar = false;
    /**
     * Whether to show a status bar above the footer
     */
    showStatusBar = false;
    /**
     * Snap to screen edges when dragging
     */
    snapToEdges = true;
    /**
     * Skeleton loading state. Transforms the dialog UI into placeholders.
     */
    loading = false;
    /**
     * Enable OS-level shortcuts (Ctrl+Enter to OK, Esc to Close).
     */
    shortcuts = true;
    /**
     * Whether the dialog contents are "dirty" (unsaved changes).
     * Triggers the confirmation prompt on close.
     */
    dirty = false;
    /**
     * Animation duration in ms.
     */
    animationDuration = 250;
    /**
     * CSS selector for the element to focus initially when opened.
     */
    initialFocus;
    /**
     * Show a "pop-out" button to open content in a separate browser window.
     */
    allowPopOut = false;
    /**
     * Whether the dialog is starred/favorited
     */
    starred = false;
    /**
     * Label for the dock when minimized.
     */
    dockLabel = '';
    /**
     * Confirmation text for checkbox (e.g. "I accept the Terms & Conditions").
     * If provided, the OK button will be disabled until checked.
     */
    confirmationText = '';
    promptValue = '';
    isConfirmed = false;
    _sessionTimeLeft = 0;
    _termsScrolled = false;
    /**
     * Header size.
     */
    headerSize = 'md';
    /**
     * Header background color override.
     */
    headerColor;
    /**
     * Whether the dialog should have a more pronounced border.
     */
    bordered = false;
    /**
     * Text for the OK button. If provided, renders an OK button in the footer.
     */
    okText;
    /**
     * Preset button set for confirmation dialogs.
     * - `'ok-cancel'`      → OK / Cancel
     * - `'yes-no'`         → Yes / No
     * - `'yes-no-cancel'`  → Yes / No / Cancel  (No maps to resetText slot, left-aligned)
     * - `'save-discard'`   → Save / Discard
     * - `'retry-cancel'`   → Retry / Cancel
     * Explicit `okText` / `cancelText` / `resetText` props always override the preset labels.
     */
    buttonSet = 'custom';
    /**
     * Text for the Cancel button. If provided, renders a Cancel button in the footer.
     */
    /**
     * Text for the Cancel button.
     */
    cancelText;
    /**
     * Whether to portal the dialog to body
     */
    portal = false;
    /**
     * Loading state for the OK button.
     */
    okLoading = false;
    /**
     * Disable the OK button.
     */
    okDisabled = false;
    /**
     * Text for the Reset button (left-aligned).
     */
    resetText;
    /**
     * Disable the Cancel button.
     */
    cancelDisabled = false;
    // ── Button-set resolution ─────────────────────────────────────────────────
    // Returns the effective {okLabel, cancelLabel, resetLabel} for the footer,
    // merging the `buttonSet` preset with any explicit text prop overrides.
    _resolveButtons() {
        const presets = {
            'ok-cancel': { ok: 'OK', cancel: 'Cancel', reset: '' },
            'yes-no': { ok: 'Yes', cancel: 'No', reset: '' },
            'yes-no-cancel': { ok: 'Yes', cancel: 'Cancel', reset: 'No' },
            'save-discard': { ok: 'Save', cancel: 'Discard', reset: '' },
            'retry-cancel': { ok: 'Retry', cancel: 'Cancel', reset: '' },
            'custom': { ok: '', cancel: '', reset: '' },
        };
        const p = presets[this.buttonSet] ?? presets['custom'];
        return {
            okLabel: this.okText ?? p.ok,
            cancelLabel: this.cancelText ?? p.cancel,
            resetLabel: this.resetText ?? p.reset,
        };
    }
    /**
     * Fullscreen on mobile devices automatically.
     */
    fullscreenOnMobile = true;
    /**
     * Keep content mounted when closed.
     */
    keepMounted = false;
    /**
     * Custom animation name.
     */
    animation = 'scale';
    /**
     * Return focus to trigger element on close.
     */
    returnFocus = true;
    /**
     * Z-Index for the dialog. Useful for nested dialogs.
     */
    zIndex = 10000;
    /**
     * Minimum Width
     */
    minWidth;
    /**
     * Minimum Height
     */
    minHeight;
    /**
     * Maximum Width
     */
    maxWidth;
    /**
     * Maximum Height
     */
    maxHeight;
    /**
     * Remember dialog position and size between sessions (requires id).
     */
    remember = false;
    /**
     * Allow swipe-to-close gesture on mobile devices.
     */
    swipeToClose = false;
    /**
     * Fire confetti when the dialog opens.
     */
    confetti = false;
    /**
     * Enable glassmorphism effect (blur) on backdrop.
     */
    glass = false;
    /**
     * Background color of the dialog panel
     */
    backgroundColor = 'white';
    /**
     * Visual progress bar percentage (0-100).
     */
    progress = -1;
    /**
     * Whether the dialog is nested (inside another dialog).
     * Triggers visual differentiation (smer size, deeper shadow).
     */
    isNested = false;
    /**
     * Whether the primary action is sensitive (requires double-confirmation).
     */
    sensitive = false;
    /**
     * Auto-close timeout in milliseconds.
     */
    autoClose = 0;
    /**
     * Alias for autoClose.
     */
    timeout = 0;
    /**
     * Enable subtle sound feedback for interactions.
     */
    sound = false;
    /**
     * Enable haptic feedback for mobile devices.
     */
    haptics = false;
    /**
     * Required permissions to view this dialog.
     */
    permissions = [];
    /**
     * Enable debug mode (shows layout boundaries and metadata).
     */
    debug = false;
    /**
     * Optional callback function to execute before closing.
     * Return false or a Promise resolving to false to prevent closing.
     */
    beforeClose;
    /**
     * Library to use for icons
     */
    iconLibrary = 'default';
    /**
     * Semantic tag for the title (h1-h6)
     */
    titleTag = 'h3';
    /**
     * Position of the icon/avatar relative to the title
     */
    iconPosition = 'left';
    /**
     * Event emitted when dialog is closed
     */
    dialogClosed;
    /**
     * Event emitted for undo action
     */
    undo;
    /**
     * Event emitted for redo action
     */
    redo;
    /**
     * Event emitted when the dialog is opened.
     */
    dialogOpened;
    /**
     * Event emitted to request a toast notification.
     */
    toastRequest;
    /**
     * Event emitted for security audit logging.
     */
    auditLog;
    /**
     * Emitted before the dialog opens. Can be cancelled via event.preventDefault().
     */
    beforeOpen;
    /**
     * Emitted when opening animation starts.
     */
    openStarted;
    /**
     * Emitted when opening animation finishes.
     */
    afterOpen;
    /**
     * Emitted before the dialog closes. Can be cancelled by event.preventDefault().
     */
    beforeCloseEvent;
    /**
     * Emitted when closing animation starts.
     */
    closeStarted;
    /**
     * Emitted when closing animation finishes.
     */
    afterClose;
    /**
     * Menu items for the built-in context menu.
     * Can be a JSON string or an array of objects.
     * If provided, clicking the menu button automatically opens a context menu.
     */
    menuItems = [];
    /**
     * Event emitted when a menu item is clicked (if using built-in menuItems)
     */
    menuAction;
    /**
     * Event emitted when OK button is clicked
     */
    ok;
    /**
     * Event emitted when Cancel button is clicked
     */
    cancel;
    /**
     * Event emitted when Reset button is clicked
     */
    dialogReset;
    /**
     * Event emitted when dialog is maximized
     */
    dialogMaximized;
    /**
     * Event emitted when dialog is minimized
     */
    dialogMinimized;
    /**
     * Event emitted when menu button is clicked
     */
    menu;
    dragStartX = 0;
    dragStartY = 0;
    isDragging = false;
    dragAnchored = false;
    isClosing = false;
    snappedEdge = 'none';
    subOverlay = null;
    minimizedToDock = false;
    _dockPeek = false;
    _autoCloseTimer = null;
    resultResolver;
    resultRejecter;
    returnValue = null;
    // Previously saved position before minimization
    lastPosition = null;
    // Resize state
    isResizing = false;
    resizeStartX = 0;
    resizeStartY = 0;
    initialWidth = 0;
    initialHeight = 0;
    initialLeft = 0;
    initialTop = 0;
    dialogElement;
    backdropElement;
    // Gmail Style Organizer for minimized tabs
    minimizedChanged(newValue) {
        if (newValue) {
            this._dockPeek = false;
            // Saving current position state
            if (this.dialogElement) {
                this.lastPosition = {
                    left: this.dialogElement.style.left,
                    top: this.dialogElement.style.top,
                    transform: this.dialogElement.style.transform,
                    position: this.dialogElement.style.position,
                    margin: this.dialogElement.style.margin
                };
            }
            this.unlockScroll();
            if (this.focusTrap)
                this.focusTrap.deactivate();
            DialogTray.reflow();
            this.dialogMinimized.emit({ minimized: true });
        }
        else {
            this._dockPeek = false;
            DialogTray.reflow();
            this.dialogMinimized.emit({ minimized: false });
            requestAnimationFrame(() => {
                // Restoring position (deferred until DOM is rendered and ref is ready)
                if (this.lastPosition && this.dialogElement) {
                    Object.assign(this.dialogElement.style, this.lastPosition);
                }
                else if (this.remember && this.el.id) {
                    this.loadLayout();
                }
                this.initFocusTrap();
            });
        }
    }
    onDockPeekChange(val) {
        if (val) {
            document.addEventListener('pointerdown', this._onDocPeekOutside, true);
        }
        else {
            document.removeEventListener('pointerdown', this._onDocPeekOutside, true);
        }
        // Sync the tray menu badge etc
        DialogTray.reflow();
    }
    _onDocPeekOutside = (e) => {
        if (!e.composedPath().includes(this.el)) {
            this._dockPeek = false;
        }
    };
    focusTrap;
    ignoreBackdropClick = false;
    componentWillLoad() {
        this._currentStep = this.currentStep;
        // Detect nesting
        this.isNested = !!this.el.parentElement?.closest('ui-dialog-box');
        // Presets: set local defaults, do not mutate props
        this._defaultDialogTitle = '';
        this._defaultOkText = '';
        if (this.type === 'delete') {
            this._defaultDialogTitle = 'Confirm Deletion';
            this._defaultOkText = 'Delete';
            this.headerColor = '#fee2e2'; // Light red background (for header component)
            this.bordered = true;
        }
        else if (this.type === 'session') {
            this._defaultDialogTitle = 'Session Timeout';
            this._defaultOkText = 'Extend Session';
        }
        else if (this.type === 'terms') {
            this._defaultDialogTitle = 'Terms & Conditions';
            this._defaultOkText = 'Accept & Continue';
            this.scrollArea = 'paper';
            // Do NOT mutate this.size here
        }
        // Automatic Z-Index for Nested Dialogs
        const openDialogs = DialogTray.get().getAll().filter(w => w.open).length;
        if (this.zIndex === 10000) { // If default
            this.zIndex = 10000 + (openDialogs * 10);
        }
        // Check Widget drag compatibility
        if (this.el.getAttribute('draggable') === 'true' && !this.isDraggable) {
            this.isDraggable = true;
        }
        // Restore layout if needed
        if (this.remember && this.el.id) {
            this.loadLayout();
        }
    }
    connectedCallback() {
        // Fires on initial connect AND after a tray reflow move.
        DialogTray.register(this);
    }
    disconnectedCallback() {
        DialogTray.unregister(this);
    }
    componentDidLoad() {
        // register() already called by connectedCallback above;
        // just handle open/layout init here.
        if (this.open) {
            this.lockScroll();
            this.initFocusTrap();
            if (this.portal) {
                document.body.appendChild(this.el);
            }
        }
    }
    saveLayout() {
        if (!this.el.id || !this.dialogElement)
            return;
        const rect = this.dialogElement.getBoundingClientRect();
        const state = {
            left: rect.left,
            top: rect.top,
            width: rect.width,
            height: rect.height,
            maximized: this.maximized
        };
        this._restoredLayout = state;
        localStorage.setItem(`ui-dialog-layout-${this.el.id}`, JSON.stringify(state));
    }
    loadLayout() {
        if (!this.el.id)
            return;
        const saved = localStorage.getItem(`ui-dialog-layout-${this.el.id}`);
        if (saved) {
            try {
                const state = JSON.parse(saved);
                if (state.maximized) {
                    this.maximized = true;
                }
                else {
                    this._restoredLayout = state;
                    if (state.width)
                        this.width = `${state.width}px`;
                    if (state.height)
                        this.height = `${state.height}px`;
                }
            }
            catch (e) { /* ignore */ }
        }
    }
    async openChanged(newValue) {
        if (newValue) {
            if (typeof this.beforeOpen?.emit === 'function') {
                const { defaultPrevented } = this.beforeOpen.emit();
                if (defaultPrevented) {
                    this.open = false;
                    return;
                }
            }
            this.isClosing = false;
            this.openStarted.emit();
            // Always rise above all currently open dialogs
            this.handleDialogClick();
            if (this.remember && this.el.id) {
                this.loadLayout();
            }
            this.lockScroll();
            // Elite/Security Hooks
            if (this.permissions && this.permissions.length > 0) {
                this.auditLog.emit({ action: 'permission_check', timestamp: Date.now(), metadata: { required: this.permissions } });
            }
            if (this.type === 'prompt') {
                this.promptValue = this.promptInitialValue;
            }
            this.dialogOpened.emit();
            this.auditLog.emit({ action: 'dialog_open', timestamp: Date.now() });
            const delay = this.autoClose || this.timeout;
            if (delay > 0) {
                if (this._autoCloseTimer)
                    clearTimeout(this._autoCloseTimer);
                this._autoCloseTimer = setTimeout(() => this.hide('timeout'), delay);
            }
            if (this.sound) {
                // Accessibility/UX Audio Hook
                this.auditLog.emit({ action: 'sound_feedback', timestamp: Date.now() });
            }
            // Initialize/Activate Focus Trap
            if (this.type === 'session') {
                this.startSessionTimer();
            }
            if (this.type === 'terms') {
                this._termsScrolled = false;
            }
            requestAnimationFrame(() => {
                setTimeout(() => {
                    if (!this.minimized) {
                        this.initFocusTrap();
                        this.autoFocusFirstElement();
                    }
                    if (this.globalBlur)
                        this.updateBodyBlur();
                    if (this.confetti)
                        this.triggerConfetti();
                    this.afterOpen.emit();
                }, 50);
            });
        }
        else {
            if (!this.isClosing) {
                await this.hide('programmatic');
            }
        }
        DialogTray.reflow();
    }
    updateBodyBlur() {
        if (this.globalBlur && this.open) {
            document.body.classList.add('dialog-blur-active');
        }
        else {
            document.body.classList.remove('dialog-blur-active');
        }
    }
    initFocusTrap() {
        if (!this.dialogElement)
            return;
        if (!this.focusTrap) {
            this.focusTrap = new FocusTrap(this.dialogElement, {
                returnFocus: this.returnFocus,
                escapeDeactivates: false, // We handle Escape manually
                clickOutsideDeactivates: false
            });
        }
        this.focusTrap.activate();
    }
    autoFocusFirstElement() {
        if (!this.dialogElement)
            return;
        // 1. Check explicit initialFocus selector
        if (this.initialFocus) {
            const el = this.dialogElement.querySelector(this.initialFocus);
            if (el) {
                el.focus();
                return;
            }
        }
        // 2. Look for autofocus attribute first, then common inputs
        const el = this.dialogElement.querySelector('[autofocus]') ||
            this.dialogElement.querySelector('input:not([disabled]), textarea:not([disabled]), select:not([disabled]), .ui-dialog-btn-ok');
        if (el)
            el.focus();
    }
    lockScroll() {
        if (this.scrollArea !== 'body') {
            document.body.style.overflow = 'hidden';
        }
    }
    unlockScroll() {
        document.body.style.overflow = '';
    }
    /**
     * Open the dialog
     */
    /**
     * Open the dialog and return a promise that resolves to true when OK is clicked, false on Cancel/Close.
     */
    async openDialog() {
        this.open = true;
        return new Promise((resolve) => {
            this.resultResolver = (val) => resolve(!!val);
        });
    }
    /**
     * Show dialog and return a promise that resolves with data when closed via OK.
     * Standardizes the return value as { data: any, canceled: boolean }.
     */
    async showWithResult() {
        this.returnValue = null;
        this.open = true;
        return new Promise((resolve) => {
            // Use resultResolver as a way to send the final object back
            this.resultResolver = (data) => resolve({ data, canceled: false });
            this.resultRejecter = () => resolve({ data: null, canceled: true });
        });
    }
    /**
     * Set the value to be returned when showWithResult resolves.
     */
    async setReturnValue(value) {
        this.returnValue = value;
    }
    async show() {
        this.returnValue = null;
        this.open = true;
    }
    /**
     * Close the dialog
     */
    async hide(source = 'programmatic') {
        if (this.resultResolver || this.resultRejecter) {
            if (this.resultRejecter)
                this.resultRejecter('Closed');
            this.resultResolver = undefined;
            this.resultRejecter = undefined;
        }
        if (this.dirty && !this.subOverlay?.visible) {
            this.showConfirmation("Unsaved Changes", "You have unsaved changes. Are you sure you want to close?", () => { this.dirty = false; this.hide(source); });
            return;
        }
        const { defaultPrevented } = this.beforeCloseEvent.emit({ source });
        if (defaultPrevented)
            return;
        if (this.beforeClose) {
            const shouldClose = await this.beforeClose();
            if (shouldClose === false)
                return;
        }
        this.isClosing = true;
        this.closeStarted.emit();
        this.stopSessionTimer();
        if (this.focusTrap)
            this.focusTrap.deactivate();
        setTimeout(() => {
            this.open = false;
            this.isClosing = false;
            this.unlockScroll();
            this.updateBodyBlur(); // remove blur
            this.dialogClosed.emit();
            if (this.el.isConnected) {
                this.afterClose.emit();
            }
        }, this.animationDuration);
    }
    /**
     * Maximize the dialog
     */
    async maximize() {
        this.maximized = !this.maximized;
        if (this.maximized) {
            this.minimized = false;
        }
        if (this.remember)
            this.saveLayout();
        this.dialogMaximized.emit({ maximized: this.maximized });
    }
    /**
     * Show an internal sub-overlay prompt (e.g., for diskard changes).
     */
    async showConfirmation(title, message, onConfirm) {
        this.subOverlay = { visible: true, title, message, onConfirm };
    }
    /**
     * Cascade all open dialogs
     */
    static async cascade() {
        const wins = DialogTray.get().getAll().filter(w => w.open && !w.minimized);
        wins.forEach((win, i) => {
            win.dialogElement.style.left = `${50 + (i * 30)}px`;
            win.dialogElement.style.top = `${50 + (i * 30)}px`;
            win.dialogElement.style.margin = '0';
            win.dialogElement.style.position = 'fixed';
            if (win.remember)
                win.saveLayout();
        });
    }
    /**
     * Tile all open dialogs
     */
    static async tile() {
        const wins = DialogTray.get().getAll().filter(w => w.open && !w.minimized);
        if (wins.length === 0)
            return;
        const cols = Math.ceil(Math.sqrt(wins.length));
        const rows = Math.ceil(wins.length / cols);
        const winW = window.innerWidth / cols;
        const winH = window.innerHeight / rows;
        wins.forEach((win, i) => {
            const r = Math.floor(i / cols);
            const c = i % cols;
            win.dialogElement.style.left = `${c * winW}px`;
            win.dialogElement.style.top = `${r * winH}px`;
            win.dialogElement.style.width = `${winW}px`;
            win.dialogElement.style.height = `${winH}px`;
            win.dialogElement.style.margin = '0';
            win.dialogElement.style.position = 'fixed';
            if (win.remember)
                win.saveLayout();
        });
    }
    /**
     * Detach the dialog content to a separate browser window
     */
    async popOut() {
        const popup = window.open('', '_blank', 'width=600,height=400');
        if (popup) {
            popup.document.title = this.dialogTitle || 'DreamUI Detached Window';
            popup.document.body.innerHTML = sanitizeHTML(this.el.innerHTML);
            // Copy styles
            document.querySelectorAll('style, link[rel="stylesheet"]').forEach(s => {
                popup.document.head.appendChild(s.cloneNode(true));
            });
            this.hide();
        }
    }
    /**
     * Minimize the dialog
     */
    async minimize() {
        this.minimized = !this.minimized;
        if (this.minimized) {
            this._dockPeek = false;
            this.minimizedToDock = true;
        }
        else {
            this.restore();
        }
        this.dialogMinimized.emit({ minimized: this.minimized });
    }
    /**
     * Restore the dialog from minimized or maximized state
     */
    async restore() {
        this.minimized = false;
        this.maximized = false;
        this._dockPeek = false;
        this.minimizedToDock = false;
        if (this.remember) {
            setTimeout(() => this.loadLayout(), 50);
        }
        this.dialogMinimized.emit({ minimized: false });
        this.dialogMaximized.emit({ maximized: false });
        DialogTray.reflow();
    }
    handleMenu = (e) => {
        // If we have built-in menu items, handle opening the context menu
        // Ensure we parse if it's a string looking like an array
        let items = this.menuItems;
        if (typeof items === 'string') {
            try {
                items = JSON.parse(items);
            }
            catch (ex) { /* ignore */ }
        }
        if (items && Array.isArray(items) && items.length > 0) {
            e.stopPropagation();
            // Pass parsed items if possible, or reliance on original prop
            this.openContextMenu(e);
            return;
        }
        this.menu.emit(e.detail);
    };
    openContextMenu(e, explicitItems) {
        let menu = document.getElementById(`ctx-menu-${this.el.id}`);
        if (!menu) {
            menu = document.createElement('ui-context-menu');
            menu.id = `ctx-menu-${this.el.id}`;
            menu.style.zIndex = (this.zIndex + 10).toString();
            document.body.appendChild(menu);
            menu.addEventListener('menuItemClick', (ev) => {
                const detail = ev.detail;
                this.menuAction.emit(detail);
                // Also emit standard menu event with action details for convenience
                this.menu.emit(detail);
                // Handle specialized built-in actions if we want (like 'close', 'minimize')
                if (detail && detail.item && detail.item.id) {
                    if (detail.item.id === 'close')
                        this.hide();
                    if (detail.item.id === 'minimize')
                        this.minimize();
                    if (detail.item.id === 'maximize')
                        this.maximize();
                }
            });
        }
        // Update items
        // Parse again to be safe or use what we know
        const itemsVal = explicitItems ? JSON.stringify(explicitItems) : (typeof this.menuItems === 'string' ? this.menuItems : JSON.stringify(this.menuItems));
        menu.items = itemsVal;
        // Position at trigger
        let rect;
        if (e.detail && e.detail.trigger) {
            rect = e.detail.trigger.getBoundingClientRect();
        }
        else if (e.detail && e.detail.originalEvent && e.detail.originalEvent.target) {
            rect = e.detail.originalEvent.target.getBoundingClientRect();
        }
        else {
            // Fallback to searching for the menu button
            const header = this.el.shadowRoot?.querySelector('ui-dialog-header');
            const btn = header?.shadowRoot?.querySelector('.dialog-btn-menu')
                || header?.querySelector('.dialog-btn-menu');
            rect = btn ? btn.getBoundingClientRect() : this.dialogElement.getBoundingClientRect();
        }
        // Slight offset
        if (rect) {
            menu.openAt({ x: rect.left, y: rect.bottom + 5 });
        }
    }
    collectFormValues() {
        const result = {};
        const processedNames = new Set();
        /**
         * Recursively scan elements for named inputs/selects/textareas.
         * This piercings into slots by looking at the Host element's Light DOM children.
         */
        const scan = (root) => {
            if (!root || typeof root.tagName !== 'string')
                return;
            const tagName = root.tagName.toUpperCase();
            const el = root;
            if (el.name && (tagName === 'INPUT' || tagName === 'SELECT' || tagName === 'TEXTAREA')) {
                const input = root;
                const type = (input.type || '').toLowerCase();
                if (type === 'checkbox') {
                    if (!result[el.name])
                        result[el.name] = [];
                    if (input.checked)
                        result[el.name].push(input.value);
                }
                else if (type === 'radio') {
                    if (input.checked)
                        result[el.name] = input.value;
                }
                else if (type === 'submit' || type === 'button' || type === 'reset') ;
                else {
                    result[el.name] = el.value;
                }
                processedNames.add(el.name);
            }
            // Recurse light-DOM children
            if (root.children) {
                for (const child of Array.from(root.children)) {
                    scan(child);
                }
            }
        };
        // Begin scan from the host element (captures all Light DOM descendants in slots)
        scan(this.el);
        // If we found nothing in Light DOM, check Shadow DOM (for built-in prompts)
        if (processedNames.size === 0 && this.el.shadowRoot) {
            scan(this.el.shadowRoot);
        }
        return processedNames.size > 0 ? result : null;
    }
    _sessionInterval;
    startSessionTimer() {
        this._sessionTimeLeft = this.sessionTimeout;
        clearInterval(this._sessionInterval);
        this._sessionInterval = setInterval(() => {
            this._sessionTimeLeft--;
            if (this._sessionTimeLeft <= 0) {
                clearInterval(this._sessionInterval);
                this._sessionTimedOut = true;
                this.dialogTitle = "Session Expired";
                this.status = "error";
                // Do NOT auto-close if we want to show the logout message
                if (this.autoSubmitOnTimeout)
                    this.handleOk();
            }
        }, 1000);
    }
    stopSessionTimer() {
        clearInterval(this._sessionInterval);
    }
    handleTermsScroll = (e) => {
        if (this.type !== 'terms' || this._termsScrolled)
            return;
        const el = e.target;
        if (el.scrollHeight - el.scrollTop <= el.clientHeight + 20) {
            this._termsScrolled = true;
        }
    };
    handleOk = () => {
        if (this.sensitive && !this.subOverlay?.visible) {
            this.showConfirmation("Sensitive Action", "This action has security implications. Are you sure you want to proceed?", () => { this.sensitive = false; this.handleOk(); });
            return;
        }
        if (this.haptics && window.navigator.vibrate) {
            window.navigator.vibrate(50);
        }
        if (this.resultResolver) {
            // Auto-collect form values when no explicit returnValue was set
            if (this.returnValue === null) {
                this.returnValue = this.collectFormValues();
            }
            this.ok.emit(this.returnValue);
            // Pass the collected data to the specific resolver format
            this.resultResolver(this.returnValue);
            this.resultResolver = undefined;
            this.resultRejecter = undefined;
        }
        else {
            this.ok.emit(this.returnValue);
        }
        this.hide();
    };
    /**
     * Programmatically submit the dialog (resolves the promise).
     * Optional value overrides auto-collection.
     */
    async submit(value) {
        if (value !== undefined) {
            this.returnValue = value;
        }
        this.handleOk();
    }
    /**
     * Programmatically cancel the dialog (rejects the promise).
     */
    async cancelDialog() {
        this.handleCancel();
    }
    handleCancel = () => {
        if (this.resultRejecter) {
            this.resultRejecter(); // Triggers the resolver with {canceled: true} logic inside showWithResult
            this.resultRejecter = undefined;
            this.resultResolver = undefined;
        }
        this.cancel.emit();
        this.hide();
    };
    handleReset = () => {
        this.auditLog.emit({ action: 'reset_clicked', timestamp: Date.now() });
        this.dialogReset.emit();
    };
    handleGlobalShortcuts(e) {
        if (!this.open || !this.shortcuts)
            return;
        // Ctrl+Enter = OK (Global)
        if (e.ctrlKey && e.key === 'Enter' && this.okText) {
            this.handleOk();
            return;
        }
        // Enter in Input = OK (Standard Form behavior)
        if (e.key === 'Enter' && this.okText) {
            const target = e.target;
            if (['INPUT', 'SELECT'].includes(target.tagName) && !target.classList.contains('no-submit')) {
                this.handleOk();
            }
        }
    }
    handleBackdropClick = (e) => {
        if (this.ignoreBackdropClick)
            return;
        if (this.backdrop === 'default' && e.target === this.backdropElement) {
            this.hide();
        }
        else if (this.backdrop === 'static' && e.target === this.backdropElement) {
            e.preventDefault();
            e.stopPropagation();
            this._isShaking = true;
            setTimeout(() => {
                this._isShaking = false;
            }, 400); // Match SCSS duration (0.4s)
        }
    };
    handleKeyDown(e) {
        // If minimized, don't trap focus or handle escape close immediately
        if (this.minimized)
            return;
        if (e.key === 'Escape' && this.open && this.closeOnEsc) {
            this.hide('esc');
            return;
        }
        // FocusTrap handles Tab
    }
    // Bring to front on any click inside the dialog
    handleDialogClick = () => {
        // Wrap in microtask to avoid "changed during rendering" warning if called from Watchers/render-adjacent paths
        requestAnimationFrame(() => {
            // Logic to increment zIndex among currently open dialogs
            const allOpened = DialogTray.get().getAll()
                .filter(w => w.open)
                .sort((a, b) => a.zIndex - b.zIndex);
            const maxZ = allOpened.length > 0 ? allOpened[allOpened.length - 1].zIndex : 10000;
            if (this.zIndex <= maxZ) {
                this.zIndex = maxZ + 1;
            }
        });
    };
    // Dragging Logic
    handlePointerDown = (e) => {
        this.handleDialogClick();
        if (this.maximized || !this.isDraggable || this.minimized)
            return;
        // Ignore if clicking on interactive elements
        const path = e.composedPath();
        const isInteractive = path.some(el => el instanceof HTMLElement &&
            (['BUTTON', 'INPUT', 'TEXTAREA', 'SELECT', 'A', 'UI-ICON'].includes(el.tagName) || el.classList.contains('dialog-btn')));
        if (isInteractive)
            return;
        // Only allow drag from header
        const header = this.dialogElement.querySelector('ui-dialog-header');
        const isHeaderClick = path.some(p => p === header || (p instanceof HTMLElement && p.localName === 'ui-dialog-header'));
        if (!isHeaderClick)
            return;
        e.preventDefault(); // Prevent scrolling on touch
        e.stopPropagation();
        this.isDragging = true;
        this.dragAnchored = false;
        // Handle Touch/Pointer coordinates
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
        const rect = this.dialogElement.getBoundingClientRect();
        this.initialLeft = rect.left;
        this.initialTop = rect.top;
        this.dragStartX = e.clientX;
        this.dragStartY = e.clientY;
        // Do NOT modify styles here — wait until movement threshold is crossed
        // to avoid snapping the dialog on a plain click.
        // Capture pointer
        if (this.dialogElement.setPointerCapture) {
            try {
                this.dialogElement.setPointerCapture(e.pointerId);
            }
            catch (ex) { }
        }
        document.addEventListener('pointermove', this.handlePointerMove);
        document.addEventListener('pointerup', this.handlePointerUp);
        document.body.style.userSelect = 'none';
        document.body.style.cursor = 'grabbing';
    };
    checkSnapping = (clientX, clientY) => {
        const threshold = 50;
        const winW = window.innerWidth;
        const winH = window.innerHeight;
        if (clientX < threshold) {
            this.snappedEdge = 'left';
        }
        else if (clientX > winW - threshold) {
            this.snappedEdge = 'right';
        }
        else if (clientY < threshold) {
            this.snappedEdge = 'top';
        }
        else if (clientY > winH - threshold) {
            this.snappedEdge = 'bottom';
        }
        else {
            this.snappedEdge = 'none';
        }
    };
    handlePointerMove = (e) => {
        if (!this.dialogElement)
            return;
        if (this.isDragging) {
            const dx = e.clientX - this.dragStartX;
            const dy = e.clientY - this.dragStartY;
            // Anti-jitter: Avoid resetting styles until true movement occurs
            if (!this.dragAnchored) {
                if (Math.abs(dx) < 5 && Math.abs(dy) < 5)
                    return;
                this.dragAnchored = true;
                this.dialogElement.style.margin = '0';
                this.dialogElement.style.position = 'fixed';
                this.dialogElement.style.left = `${this.initialLeft}px`;
                this.dialogElement.style.top = `${this.initialTop}px`;
                this.dialogElement.style.transform = 'none';
                this.dialogElement.style.width = `${this.dialogElement.offsetWidth}px`; // Lock width
                this.dialogElement.classList.add('is-dragging');
            }
            this.dialogElement.style.left = `${this.initialLeft + dx}px`;
            this.dialogElement.style.top = `${this.initialTop + dy}px`;
            if (this.snapToEdges) {
                this.checkSnapping(e.clientX, e.clientY);
            }
        }
        else if (this.isResizing) {
            const dx = e.clientX - this.resizeStartX;
            const dy = e.clientY - this.resizeStartY;
            let newWidth = this.initialWidth + dx;
            let newHeight = this.initialHeight + dy;
            // Helper to parse pixel values safely
            const parseVal = (v) => v ? parseInt(v, 10) : null;
            if (this.minWidth)
                newWidth = Math.max(newWidth, parseVal(this.minWidth) || 0);
            if (this.minHeight)
                newHeight = Math.max(newHeight, parseVal(this.minHeight) || 0);
            if (this.maxWidth)
                newWidth = Math.min(newWidth, parseVal(this.maxWidth) || 9999);
            if (this.maxHeight)
                newHeight = Math.min(newHeight, parseVal(this.maxHeight) || 9999);
            this.dialogElement.style.width = `${newWidth}px`;
            this.dialogElement.style.height = `${newHeight}px`;
        }
    };
    handlePointerUp = (e) => {
        if (!this.dialogElement) {
            this.isDragging = false;
            this.isResizing = false;
            return;
        }
        // Release capture
        if (this.isDragging && this.dialogElement.releasePointerCapture) {
            try {
                this.dialogElement.releasePointerCapture(e.pointerId);
            }
            catch (ex) { }
        }
        if (this.isResizing && e.target.releasePointerCapture) {
            try {
                e.target.releasePointerCapture(e.pointerId);
            }
            catch (ex) { }
        }
        if (this.isDragging || this.isResizing) {
            this.ignoreBackdropClick = true;
            setTimeout(() => {
                this.ignoreBackdropClick = false;
            }, 100);
        }
        if (this.isDragging && this.snapToEdges && this.snappedEdge !== 'none') {
            this.maximize(); // Changed from applySnap to maximize as per user edit
        }
        // Reset global styles
        if (this.isDragging) {
            document.body.style.userSelect = '';
            document.body.style.cursor = '';
        }
        // Commit final position so next drag starts cleanly from the landed location
        if (this.isDragging && this.dragAnchored && this.dialogElement) {
            const rect = this.dialogElement.getBoundingClientRect();
            this.dialogElement.style.left = `${rect.left}px`;
            this.dialogElement.style.top = `${rect.top}px`;
            this.dialogElement.style.transform = 'none';
        }
        this.isDragging = false;
        this.dragAnchored = false;
        this.isResizing = false;
        this.snappedEdge = 'none';
        // Persistence
        if (this.remember)
            this.saveLayout();
        // Swipe to Close detection
        if (this.swipeToClose && !this.isResizing && !this.isDragging) {
            const dx = e.clientX - this.dragStartX;
            if (Math.abs(dx) > 150) { // Swipe threshold
                this.hide();
            }
        }
        document.removeEventListener('pointermove', this.handlePointerMove);
        document.removeEventListener('pointerup', this.handlePointerUp);
    };
    handleResizePointerDown = (e) => {
        if (!this.resizable || this.maximized)
            return;
        e.stopPropagation();
        e.preventDefault();
        this.isResizing = true;
        this.resizeStartX = e.clientX;
        this.resizeStartY = e.clientY;
        const rect = this.dialogElement.getBoundingClientRect();
        this.initialWidth = rect.width;
        this.initialHeight = rect.height;
        // Lock position
        this.dialogElement.style.margin = '0';
        this.dialogElement.style.position = 'fixed';
        this.dialogElement.style.left = `${rect.left}px`;
        this.dialogElement.style.top = `${rect.top}px`;
        // Capture pointer
        try {
            e.target.setPointerCapture(e.pointerId);
        }
        catch (ex) { }
        // Alternatively capture on dialog if handle is sm
        // try { this.dialogElement.setPointerCapture(e.pointerId); } catch(ex) {}
        document.addEventListener('pointermove', this.handlePointerMove);
        document.addEventListener('pointerup', this.handlePointerUp);
    };
    renderHeader(isPeek = false) {
        if (!this.showHeader)
            return null;
        // Provide default cancelText for session/terms types if not set
        let cancelLabel = this.cancelText;
        if (!cancelLabel) {
            if (this.type === 'session')
                cancelLabel = 'Logout';
            else if (this.type === 'terms')
                cancelLabel = 'Decline';
            else
                cancelLabel = this._resolveButtons().cancelLabel;
        }
        // Use local defaults for okLabel and dialogTitle
        let okLabel = this.okText;
        if (!okLabel) {
            okLabel = this._defaultOkText || this._resolveButtons().okLabel;
        }
        let dialogTitle = this.dialogTitle;
        if (!dialogTitle) {
            dialogTitle = this._defaultDialogTitle;
        }
        return (h("ui-dialog-header", { part: "header", dialogTitle: dialogTitle, subtitle: this.subtitle, showMinimize: !isPeek && this.showMinimize && !this.maximized && this.type !== 'messagebox', showMaximize: !isPeek && this.showMaximize && this.type !== 'messagebox', showClose: this.showClose, showMenu: !isPeek && (this.showMenu || (Array.isArray(this.menuItems) ? this.menuItems.length > 0 : !!this.menuItems)), menuItems: this.menuItems, menuIcon: this.menuIcon, menuTitle: this.menuTitle, titleTag: this.titleTag, iconPosition: this.iconPosition, type: this.type, variant: this.variant, status: this.status, icon: this.icon, avatar: this.avatar, onMinimize: (e) => { e.stopImmediatePropagation(); this.minimize(); }, onMaximize: (e) => { e.stopImmediatePropagation(); this.maximize(); }, onClose: (e) => { e.stopImmediatePropagation(); this.hide('close-btn'); }, onMenu: (e) => { e.stopImmediatePropagation(); this.handleMenu(e); }, iconLibrary: this.iconLibrary, style: this.headerColor ? { backgroundColor: this.headerColor, color: '#fff' } : {} }, (this.headerImage || this.el.querySelector('[slot="header-icon"]')) && (h("div", { slot: "icon", style: { display: 'flex', alignItems: 'center', gap: '8px' } }, this.headerImage && h("img", { src: this.headerImage, alt: "", style: { width: '20px', height: '20px', borderRadius: '4px' } }), h("slot", { name: "header-icon" }))), h("slot", { name: "title", slot: "title" }), h("slot", { name: "subtitle", slot: "subtitle" }), h("slot", { name: "header-actions", slot: "actions" }), h("slot", { name: "menu-list", slot: "menu-list" }), this.allowPopOut && !isPeek && (h("ui-button", { variant: "ghost", size: "sm", icon: "external-link", iconLibrary: this.iconLibrary, iconSize: "1.2em", ariaLabel: "Pop out Window", onClick: () => this.popOut(), slot: "actions", part: "popout-btn" }))));
    }
    renderStepper() {
        if (!this.steps || (typeof this.steps === 'number' ? this.steps <= 0 : this.steps.length <= 0))
            return null;
        return (h("div", { class: "ui-dialog-stepper" }, Array.from({ length: typeof this.steps === 'number' ? this.steps : this.steps.length }).map((_, i) => (h("div", { class: {
                'step-item': true,
                'active': this._currentStep === i + 1,
                'completed': this._currentStep > i + 1
            } }, h("div", { class: "step-dot" }, i + 1), Array.isArray(this.steps) && h("div", { class: "step-label" }, this.steps[i]), i < (typeof this.steps === 'number' ? this.steps : this.steps.length) - 1 && h("div", { class: "step-line" }))))));
    }
    renderBodyContent() {
        return (h("div", { class: { 'ui-dialog-main-container': true, 'has-side-nav': this.layout === 'side-nav' } }, this.layout === 'side-nav' && (h("div", { class: "ui-dialog-side-nav" }, h("slot", { name: "side-nav" }))), h("div", { class: { 'ui-dialog-content-wrapper': true, 'type-messagebox': this.type === 'messagebox' }, part: "body", onScroll: this.handleTermsScroll }, this.type === 'session' && (h("div", { class: `ui-dialog-session-alert ${this._sessionTimedOut ? 'is-timeout' : ''}` }, h("ui-icon", { name: this._sessionTimedOut ? 'log-out' : 'clock', library: "lucide" }), this._sessionTimedOut ? (h("div", { class: "timeout-content" }, h("p", { style: { fontWeight: '600', color: '#ef4444', margin: '0 0 8px' } }, "Due to inactivity, you have been logged out."), h("p", { style: { fontSize: '13px', color: '#666', margin: '0' } }, "Please log in again to continue working on your tasks."))) : (h("span", null, "Session expiring in ", h("strong", null, this._sessionTimeLeft, "s"))))), h("slot", { name: "body" }, h("slot", null), this.type === 'prompt' && (h("div", { class: "ui-dialog-prompt-container" }, h("ui-input", { type: this.promptType, name: "prompt", class: "ui-dialog-prompt-input", value: this.promptValue, placeholder: this.promptPlaceholder, label: this.promptLabel, onInputChange: (e) => {
                this.promptValue = e.detail;
                this.returnValue = this.promptValue;
            }, autofocus: true, fullWidth: true })))))));
    }
    renderFooterContent() {
        if (!this.showFooter)
            return null;
        const { okLabel, cancelLabel, resetLabel } = this._resolveButtons();
        // If no buttons at all and no slots, skip the footer entirely
        const hasButtons = okLabel || cancelLabel || resetLabel;
        const hasSlots = !!this.confirmationText;
        if (!hasButtons && !hasSlots)
            return null;
        return (h("ui-dialog-footer", { class: "ui-dialog-footer-wrapper", part: "footer" }, h("div", { class: "footer-left" }, this.confirmationText && (h("div", { class: "ui-dialog-confirmation" }, h("ui-checkbox", { class: "confirmation-checkbox", checked: this.isConfirmed, label: this.confirmationText, onCheckboxChange: (e) => {
                this.isConfirmed = e.detail.checked;
            } }))), h("slot", { name: "footer-left" })), h("div", { class: "footer-right", part: "footer-actions" }, h("slot", { name: "actions" }, resetLabel && (h("ui-button", { variant: "outline", size: "md", onButtonClick: this.handleReset }, resetLabel)), cancelLabel && (h("ui-button", { variant: "outline", size: "md", onButtonClick: this.handleCancel, disabled: this.cancelDisabled }, cancelLabel)), okLabel && (h("ui-button", { variant: (this.status === 'default' || this.status === 'info') ? 'primary' : this.status, size: "md", onButtonClick: this._sessionTimedOut ? () => window.location.href = '/login' : this.handleOk, loading: this.okLoading, disabled: this.okDisabled || (!!this.confirmationText && !this.isConfirmed) || (this.type === 'terms' && !this._termsScrolled) }, this._sessionTimedOut ? "Go to Login" : okLabel))), h("div", { class: "footer-custom-slot" }, h("slot", { name: "footer" })))));
    }
    render() {
        if (!this.open && !this.isClosing && !this.keepMounted)
            return null;
        // ── Minimized tray render ──────────────────────────────────────────────
        if (this.minimized && this.open && !this._dockPeek) {
            return (h(Host, { class: { 'minimized': true, 'open': this.open } }, h("div", { class: `ui-tray-tab status-${this.status} ${this.variant === 'glass' ? 'variant-glass' : ''}`, onClick: () => this.restore(), onDblClick: () => this.restore(), title: `Click to Restore ${this.dialogTitle}`, style: {
                    color: '#ffffff',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    padding: '0 8px',
                    gap: '12px',
                    height: '100%',
                    width: '100%',
                    minWidth: '100px',
                    fontWeight: '600'
                } }, this.icon && h("ui-icon", { name: this.icon, color: "white", library: this.iconLibrary, size: "1rem", style: { flexShrink: '0' } }), h("span", { class: "tab-label", style: { color: '#ffffff', flex: '0 1 auto', whiteSpace: 'nowrap' } }, this.dockLabel || this.dialogTitle || 'Dialog'), h("ui-button", { variant: "ghost", size: "sm", class: "ui-tray-btn", icon: "x", iconLibrary: "lucide", iconSize: "14px", ariaLabel: "Close", onClick: (e) => { e.stopPropagation(); this.hide(); } }))));
        }
        const isHidden = !this.open && !this.isClosing && this.keepMounted;
        // Use a local variable for effective size (do not mutate prop)
        const effectiveSize = this.type === 'terms' && this.size === 'md' ? 'lg' : this.size;
        const dialogClasses = {
            'ui-dialog-box': true,
            'closing': this.isClosing,
            'maximized': this.maximized,
            'minimized': this.minimized,
            [`variant-${this.variant}`]: true,
            [`status-${this.status}`]: this.status !== 'default',
            [`size-${effectiveSize}`]: effectiveSize !== 'custom',
            'scroll-paper': this.scrollArea === 'paper',
            'scroll-body': this.scrollArea === 'body',
            [`animation-${this.animation}`]: true,
            'fullscreen-mobile': this.fullscreenOnMobile,
            'hidden-mounted': isHidden,
            'draggable': this.isDraggable,
            'is-dragging': this.isDragging,
            'loading-active': this.loading,
            'is-bordered': this.bordered,
            'is-nested': this.isNested,
            'debug-mode': this.debug,
            'glass-effect': this.glass || this.variant === 'glass',
            [`type-${this.type}`]: true,
            [`density-${this.density}`]: true,
            'shake': this._isShaking
        };
        const dialogStyles = {
            '--dialog-bg': this.backgroundColor || 'white',
            backgroundColor: 'var(--dialog-bg, #ffffff)'
        };
        if (!this.maximized) {
            const isDefaultWidth = this.width === '500px';
            const isDefaultHeight = this.height === 'auto';
            if (effectiveSize === 'custom' || !isDefaultWidth || !isDefaultHeight || this._restoredLayout) {
                if (this.width)
                    dialogStyles.width = this.width;
                if (this.height && this.scrollArea !== 'body')
                    dialogStyles.height = this.height;
            }
            if (this._restoredLayout) {
                dialogStyles.position = 'fixed';
                dialogStyles.margin = '0';
                dialogStyles.left = `${this._restoredLayout.left}px`;
                dialogStyles.top = `${this._restoredLayout.top}px`;
            }
        }
        const dialogId = this.el.id || `dialog-idx-${Math.random().toString(36).substr(2, 5)}`;
        const posClass = `position-${this.position}`;
        return (h(Host, { class: { 'open': this.open, 'minimized': this.minimized, 'dock-peek': this._dockPeek } }, this.minimized && this._dockPeek && (h("div", { class: `ui-peek-panel variant-${this.variant} status-${this.status}`, onClick: (e) => e.stopPropagation() }, this.renderHeader(true), h("div", { class: "ui-dialog-content-wrapper" }, h("slot", { name: "body" }, h("slot", null))))), (!this.minimized || this._dockPeek) && (h("div", { class: `ui-dialog-backdrop ${this.backdrop === 'none' ? 'backdrop-none' : ''} ${this.scrollArea === 'body' ? 'scroll-body-active' : ''} ${posClass} ${this.isClosing ? 'closing' : ''} ${this.glass ? 'glass-backdrop' : ''} ${isHidden ? 'hidden-mounted' : ''}`, onClick: this.handleBackdropClick, part: "backdrop", ref: (el) => (this.backdropElement = el), style: { zIndex: `${this.zIndex}` } }, h("div", { ref: (el) => (this.dialogElement = el), class: dialogClasses, style: dialogStyles, part: "panel", onPointerDown: this.handlePointerDown, tabIndex: -1, role: "dialog", "aria-modal": "true", id: dialogId }, h("div", { class: "ui-dialog-box-container", onPointerUp: this.handlePointerUp }, this.renderHeader(), this.showHeader && h("div", { class: "ui-dialog-divider-line" }), this.progress >= 0 && (h("div", { class: "ui-dialog-progress-container", title: `Progress: ${this.progress}%` }, h("div", { class: "ui-dialog-progress-bar", style: { width: `${this.progress}%` } }))), this.renderStepper(), this.showToolbar && (h("div", { class: "ui-dialog-toolbar" }, h("slot", { name: "toolbar" }))), this.renderBodyContent(), this.showStatusBar && (h("div", { class: "ui-dialog-status-bar" }, h("slot", { name: "status-bar" }))), this.showFooter && h("div", { class: "ui-dialog-divider-line" }), this.renderFooterContent(), this.resizable && !this.maximized && (h("div", { class: "resize-handle", onPointerDown: this.handleResizePointerDown })), this.subOverlay?.visible && (h("div", { class: "ui-dialog-sub-overlay" }, h("div", { class: "sub-overlay-card" }, h("h4", null, this.subOverlay.title), h("p", null, this.subOverlay.message), h("div", { class: "sub-overlay-actions" }, h("ui-button", { variant: "outline", onButtonClick: () => this.subOverlay = null }, "Cancel"), h("ui-button", { variant: "primary", onButtonClick: () => { this.subOverlay.onConfirm(); this.subOverlay = null; } }, "Confirm")))))))))));
    }
    triggerConfetti() {
        const count = 200;
        const defaults = { origin: { y: 0.7 }, zIndex: this.zIndex + 10 };
        function fire(particleRatio, opts) {
            if (window.confetti) {
                window.confetti(Object.assign({}, defaults, opts, {
                    particleCount: Math.floor(count * particleRatio)
                }));
            }
        }
        fire(0.25, { spread: 26, startVelocity: 55 });
        fire(0.2, { spread: 60 });
        fire(0.35, { spread: 100, decay: 0.91, scalar: 0.8 });
        fire(0.1, { spread: 120, startVelocity: 25, decay: 0.92, scalar: 1.2 });
        fire(0.1, { spread: 120, startVelocity: 45 });
    }
    static get watchers() { return {
        "currentStep": [{
                "currentStepChanged": 0
            }],
        "minimized": [{
                "minimizedChanged": 0
            }],
        "_dockPeek": [{
                "onDockPeekChange": 0
            }],
        "open": [{
                "openChanged": 0
            }]
    }; }
};
DialogBox.style = dialogBoxCss() + dialogTrayCss();

export { DialogBox as ui_dialog_box };
