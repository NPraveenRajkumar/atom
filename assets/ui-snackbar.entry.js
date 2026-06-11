import { r as registerInstance, c as createEvent, a as getElement, h } from './index-DUsoYu9r.js';
import { s as sanitizeHTML } from './security-Dyu3Nplq.js';

const snackbarCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.snackbar-quick-input{width:100%;margin:12px 0 0 0;display:flex;align-items:center;pointer-events:auto}.snackbar-quick-input input{width:100%;min-width:0;box-sizing:border-box;padding:8px 12px;border-radius:6px;border:1px solid var(--border-default, #e5e7eb);font-size:15px;background:var(--bg-primary, #ffffff);outline:none;transition:border 0.2s, box-shadow 0.2s}.snackbar-quick-input input:focus{border:1.5px solid var(--color-primary, #6366f1);box-shadow:0 0 0 2px var(--color-primary, #c7d2fe)}:host{display:block;position:fixed;top:0;left:0;right:0;bottom:0;pointer-events:none;z-index:var(--snackbar-z-index, 10500);transform:translateZ(0);--snackbar-radius:12px;--snackbar-font:inherit;--snackbar-min-width:320px;--snackbar-max-width:440px;--snackbar-z-index:10500;--snackbar-bg:var(--bg-primary, #fdfdfd);--snackbar-color:var(--text-primary, #1f2937);--snackbar-border:rgba(0, 0, 0, 0.08);--snackbar-shadow:0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);--snackbar-success-bg:var(--color-success-hover, #059669);--snackbar-error-bg:var(--color-danger-hover, #dc2626);--snackbar-warning-bg:var(--color-warning-hover, #d97706);--snackbar-info-bg:var(--color-primary-hover, #2563eb);--snackbar-neutral-bg:var(--color-primary, #4b5563);--snackbar-badge-bg:rgba(15, 23, 42, 0.85);--snackbar-badge-color:var(--color-primary, #60a5fa)}.snackbar-container{display:block;position:absolute;z-index:10501;pointer-events:none;width:auto;max-width:100vw;box-sizing:border-box;padding:16px;display:flex;flex-direction:column;gap:12px;transition:all 0.4s cubic-bezier(0.18, 0.89, 0.32, 1.28);max-height:calc(100vh - 40px)}.snackbar-clear-all{pointer-events:auto;align-self:center;margin-bottom:8px;background:rgba(255, 255, 255, 0.9);border:1px solid rgba(0, 0, 0, 0.1);border-radius:20px;padding:6px 14px;font-size:11px;font-weight:600;color:var(--text-secondary, #4b5563);display:flex;align-items:center;gap:6px;cursor:pointer;box-shadow:0 4px 6px -1px rgba(0, 0, 0, 0.1);backdrop-filter:blur(8px);transition:all 0.2s;z-index:2000;}.snackbar-container.card-stack:not(.hovered) .snackbar-clear-all{display:none}.snackbar-clear-all:hover{background:var(--bg-primary, #ffffff);transform:translateY(-1px);box-shadow:0 6px 10px -1px rgba(0, 0, 0, 0.15)}.snackbar-clear-all .kb-hint{background:rgba(0, 0, 0, 0.05);padding:1px 4px;border-radius:3px;font-size:9px;opacity:0.6}.snackbar-badge-btn{background:var(--snackbar-badge-bg, rgba(15, 23, 42, 0.85));color:#fff;border-radius:12px;padding:2px 8px;font-size:10px;border:none;cursor:pointer;display:flex;align-items:center;transition:transform 0.2s;pointer-events:auto}.snackbar-badge-btn:hover{transform:scale(1.05)}.snackbar-badge-btn ui-icon{margin-left:4px;display:flex}.snackbar-history{margin-top:8px;padding:8px;background:rgba(0, 0, 0, 0.03);border-radius:6px;font-size:12px;max-height:120px;overflow-y:auto;scrollbar-width:thin}.snackbar-history .history-item{display:flex;gap:8px;padding:4px 0;border-bottom:1px solid rgba(0, 0, 0, 0.05)}.snackbar-history .history-item:last-child{border-bottom:none}.snackbar-history .history-item .history-time{color:var(--text-secondary, #6b7280);font-family:monospace;white-space:nowrap}.snackbar-history .history-item .history-msg{color:var(--text-primary, #111827)}.theme-dark .snackbar-clear-all{background:var(--bg-primary, #1e293b);color:var(--text-standard, #e2e8f0);border-color:rgba(255, 255, 255, 0.1)}.snackbar-countdown{position:absolute;bottom:28px;right:12px;background:rgba(0, 0, 0, 0.55);color:rgba(255, 255, 255, 0.9);border-radius:10px;padding:2px 7px;font-size:10px;font-weight:700;letter-spacing:0.02em;pointer-events:none;opacity:1;transition:opacity 0.3s ease;backdrop-filter:blur(4px);-webkit-backdrop-filter:blur(4px);z-index:10;min-width:24px;text-align:center;font-variant-numeric:tabular-nums;}.snackbar-container.rtl .snackbar-countdown{right:auto;left:12px}.snackbar-container:hover .snackbar-countdown{opacity:0}.snackbar-container.top-left{top:0;left:0;align-items:flex-start}.snackbar-container.top-right{top:0;right:0;align-items:flex-end}.snackbar-container.top-center{top:0;left:50%;transform:translateX(-50%);align-items:center}.snackbar-container.bottom-left{bottom:0;left:0;flex-direction:column-reverse;align-items:flex-start}.snackbar-container.bottom-right{bottom:0;right:0;flex-direction:column-reverse;align-items:flex-end}.snackbar-container.bottom-center{bottom:0;left:50%;transform:translateX(-50%);flex-direction:column-reverse;align-items:center}.snackbar-container.rtl.top-left{left:auto;right:0;align-items:flex-end}.snackbar-container.rtl.top-right{right:auto;left:0;align-items:flex-start}.snackbar-container.rtl.bottom-left{left:auto;right:0;align-items:flex-end}.snackbar-container.rtl.bottom-right{right:auto;left:0;align-items:flex-start}.snackbar-container.rtl .snackbar-item.slide-right{animation-name:slideInLeft}.snackbar-container.rtl .snackbar-item.slide-left{animation-name:slideInRight}.snackbar-container:not(.bottom-left):not(.bottom-right):not(.bottom-center) .snackbar-item{order:var(--stack-index)}.snackbar-container.bottom-left,.snackbar-container.bottom-right,.snackbar-container.bottom-center{padding-bottom:24px}.snackbar-container.top-left,.snackbar-container.top-right,.snackbar-container.top-center{padding-top:24px}.stack-count-badge{position:absolute;bottom:-18px;left:50%;transform:translateX(-50%);display:flex;align-items:center;gap:4px;background:rgba(15, 23, 42, 0.85);color:var(--text-standard, #ffffff);border-radius:20px;padding:4px 12px;font-size:11px;font-weight:700;cursor:pointer;z-index:200;backdrop-filter:blur(8px);-webkit-backdrop-filter:blur(8px);border:1px solid rgba(255, 255, 255, 0.15);transition:all 0.2s ease;pointer-events:auto;white-space:nowrap}.stack-count-badge:hover{background:rgba(15, 23, 42, 0.98);transform:translateX(-50%) translateY(-2px);box-shadow:0 4px 12px rgba(0, 0, 0, 0.3)}.stack-count-badge .stack-count-number{font-size:13px;font-weight:800;color:var(--color-primary, #60a5fa)}.stack-count-badge .stack-count-label{opacity:0.7;font-weight:500}.snackbar-container.bottom-left .stack-count-badge,.snackbar-container.bottom-right .stack-count-badge,.snackbar-container.bottom-center .stack-count-badge{bottom:auto;top:-18px}.snackbar-container.bottom-left .stack-count-badge:hover,.snackbar-container.bottom-right .stack-count-badge:hover,.snackbar-container.bottom-center .stack-count-badge:hover{transform:translateX(-50%) translateY(2px)}.snackbar-container.top-right .stack-count-badge,.snackbar-container.bottom-right .stack-count-badge{left:auto;right:0;transform:none}.snackbar-container.top-right .stack-count-badge:hover,.snackbar-container.bottom-right .stack-count-badge:hover{transform:translateY(-2px)}.snackbar-container.top-left .stack-count-badge,.snackbar-container.bottom-left .stack-count-badge{left:0;transform:none}.snackbar-container.top-left .stack-count-badge:hover,.snackbar-container.bottom-left .stack-count-badge:hover{transform:translateY(-2px)}.snackbar-container.card-stack{display:flex !important;flex-direction:column;width:360px;max-width:calc(100vw - 32px);min-height:160px;padding:16px;pointer-events:none;overflow:visible;--stack-gap:8px;--stack-shrink:0.04;--stack-opacity:0.15;}.snackbar-container.card-stack::before{content:"";position:absolute;inset:-8px;background:transparent;pointer-events:auto;z-index:0}.snackbar-container.card-stack:not(.hovered) .snackbar-item{position:absolute !important;margin:0 !important;pointer-events:none;transition:transform 0.5s cubic-bezier(0.25, 1, 0.5, 1), opacity 0.5s ease, width 0.5s ease;width:calc(100% - var(--stack-index, 0) * 14px);opacity:calc(1 - var(--stack-index, 0) * var(--stack-opacity));filter:brightness(calc(1 - var(--stack-index, 0) * 0.08));z-index:calc(50 - var(--stack-index, 0))}.snackbar-container.card-stack.top-left:not(.hovered) .snackbar-item,.snackbar-container.card-stack.top-right:not(.hovered) .snackbar-item,.snackbar-container.card-stack.top-center:not(.hovered) .snackbar-item{top:16px;transform:translateY(calc(var(--stack-index, 0) * var(--stack-gap)))}.snackbar-container.card-stack.bottom-left:not(.hovered) .snackbar-item,.snackbar-container.card-stack.bottom-right:not(.hovered) .snackbar-item,.snackbar-container.card-stack.bottom-center:not(.hovered) .snackbar-item{bottom:16px;transform:translateY(calc(var(--stack-index, 0) * var(--stack-gap) * -1))}.snackbar-container.card-stack.top-right:not(.hovered) .snackbar-item,.snackbar-container.card-stack.bottom-right:not(.hovered) .snackbar-item{right:0;left:auto !important}.snackbar-container.card-stack.top-left:not(.hovered) .snackbar-item,.snackbar-container.card-stack.bottom-left:not(.hovered) .snackbar-item{left:0 !important;right:auto}.snackbar-container.card-stack.top-center:not(.hovered) .snackbar-item,.snackbar-container.card-stack.bottom-center:not(.hovered) .snackbar-item{left:50% !important;right:auto;transform:translateX(-50%) translateY(calc(var(--stack-index, 0) * var(--stack-gap)))}.snackbar-container.card-stack.bottom-center:not(.hovered) .snackbar-item{transform:translateX(-50%) translateY(calc(var(--stack-index, 0) * var(--stack-gap) * -1))}@keyframes stackSlideFromTop{from{transform:translateX(-50%) translateY(-40px);opacity:0}to{transform:translateX(-50%) translateY(calc(var(--stack-index, 0) * var(--stack-gap)));opacity:calc(1 - var(--stack-index, 0) * var(--stack-opacity))}}@keyframes stackSlideFromBottom{from{transform:translateX(-50%) translateY(40px);opacity:0}to{transform:translateX(-50%) translateY(calc(var(--stack-index, 0) * var(--stack-gap) * -1));opacity:calc(1 - var(--stack-index, 0) * var(--stack-opacity))}}.snackbar-container.card-stack.top-center:not(.hovered) .snackbar-item{animation:stackSlideFromTop 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;animation-delay:calc(var(--stack-index, 0) * 60ms)}.snackbar-container.card-stack.bottom-center:not(.hovered) .snackbar-item{animation:stackSlideFromBottom 0.45s cubic-bezier(0.34, 1.56, 0.64, 1) both;animation-delay:calc(var(--stack-index, 0) * 60ms)}.snackbar-container.card-stack:not(.hovered) .snackbar-item[data-stack-index="0"]{pointer-events:auto;opacity:1 !important;filter:none !important;z-index:100 !important;box-shadow:0 8px 24px rgba(0, 0, 0, 0.18)}.snackbar-container.card-stack.top-center:not(.hovered) .snackbar-item[data-stack-index="0"],.snackbar-container.card-stack.bottom-center:not(.hovered) .snackbar-item[data-stack-index="0"]{transform:translateX(-50%) !important}.snackbar-container.card-stack.hovered{pointer-events:auto;align-items:stretch;}.snackbar-container.card-stack.hovered .snackbar-item{position:relative !important;left:auto !important;right:auto !important;top:auto !important;bottom:auto !important;width:100% !important;transform:none !important;opacity:1 !important;filter:none !important;pointer-events:auto;margin:0 0 8px 0 !important;z-index:auto !important;box-shadow:0 4px 12px rgba(0, 0, 0, 0.1);transition:transform 0.3s ease, box-shadow 0.2s ease}.snackbar-container.card-stack.hovered .snackbar-item:last-child{margin-bottom:0 !important}.snackbar-container.card-stack.hovered .snackbar-item:hover{transform:translateY(-2px) !important;box-shadow:0 12px 24px rgba(0, 0, 0, 0.14)}.snackbar-item{box-sizing:border-box;display:flex;flex-direction:column;width:auto;min-width:var(--snackbar-min-width, 320px);max-width:var(--snackbar-max-width, 440px);padding:16px;border-radius:var(--snackbar-radius, 12px);pointer-events:auto;box-shadow:var(--snackbar-shadow, 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05));background:var(--snackbar-bg, #fdfdfd);color:var(--snackbar-color, var(--text-primary, #1f2937));transition:all 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28), transform 0.2s ease;position:relative;overflow:visible;backdrop-filter:blur(16px);border:1px solid var(--snackbar-border, rgba(0, 0, 0, 0.08));z-index:calc(100 - var(--stack-index))}.snackbar-item:hover{transform:translateY(-2px);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)}.snackbar-item:focus-visible{outline:2px solid var(--color-primary, #10b981);outline-offset:4px;box-shadow:0 0 0 4px rgba(var(--color-primary-rgb, 59, 130, 246), 0.4);background:var(--bg-primary, #ffffff) !important}.snackbar-item{}.snackbar-item.sm{min-width:280px;padding:10px 12px;--snackbar-title-size:13px;--snackbar-msg-size:12px;--snackbar-icon-size:1.1rem;gap:8px}.snackbar-item.md{min-width:320px;padding:16px;--snackbar-title-size:15px;--snackbar-msg-size:14px;--snackbar-icon-size:1.25rem}.snackbar-item.lg{min-width:400px;padding:20px 24px;--snackbar-title-size:18px;--snackbar-msg-size:16px;--snackbar-icon-size:1.5rem;gap:16px}.item-main-row{display:flex;align-items:flex-start;gap:12px;width:100%}.snackbar-content{flex:1;min-width:0}.snackbar-title{font-weight:700;font-size:var(--snackbar-title-size, 15px);color:inherit;margin-bottom:2px;display:flex;align-items:center;gap:8px}.snackbar-message{font-size:var(--snackbar-msg-size, 14px);line-height:1.5;color:inherit;opacity:0.9;margin:0;word-break:break-word;white-space:pre-wrap}.snackbar-icon,.snackbar-custom-icon{font-size:var(--snackbar-icon-size, 1.25rem)}.snackbar-badge{background:rgba(0, 0, 0, 0.1);padding:2px 8px;border-radius:12px;font-size:11px;font-weight:800;transition:all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)}.snackbar-badge.pulse{animation:badgePop 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275)}@keyframes badgePop{0%{transform:scale(1)}50%{transform:scale(1.6);background:var(--color-danger, #fbbf24);color:var(--text-primary, #000);box-shadow:0 0 15px rgba(251, 191, 36, 0.5)}100%{transform:scale(1)}}.snackbar-item.filled{color:var(--text-standard, #ffffff);border:none}.snackbar-item.filled.success{background:var(--snackbar-success-bg, var(--color-success-hover, #059669))}.snackbar-item.filled.error{background:var(--snackbar-error-bg, var(--color-danger-hover, #dc2626))}.snackbar-item.filled.warning{background:var(--snackbar-warning-bg, var(--color-warning-hover, #d97706))}.snackbar-item.filled.info{background:var(--snackbar-info-bg, var(--color-primary-hover, #2563eb))}.snackbar-item.filled.neutral{background:var(--snackbar-neutral-bg, #4b5563)}.snackbar-item.filled.loading{background:var(--snackbar-neutral-bg, #4b5563)}.snackbar-item.glass{background:rgba(255, 255, 255, 0.6);backdrop-filter:blur(20px) saturate(180%);-webkit-backdrop-filter:blur(20px) saturate(180%);border:1px solid rgba(255, 255, 255, 0.4);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.15);color:var(--text-primary, #1e293b)}.snackbar-item.glass.success{border-left:4px solid var(--color-success, #10b981);background:rgba(236, 253, 245, 0.6)}.snackbar-item.glass.error{border-left:4px solid var(--color-danger, #ef4444);background:rgba(254, 242, 242, 0.6)}.snackbar-item.glass.warning{border-left:4px solid var(--color-warning, #f59e0b);background:rgba(255, 251, 235, 0.6)}.snackbar-item.glass.info{border-left:4px solid var(--color-primary, #10b981);background:rgba(239, 246, 255, 0.6)}.snackbar-item.glass .snackbar-action-btn:not(.variant-danger){background:rgba(0, 0, 0, 0.05);border-color:rgba(0, 0, 0, 0.1);color:var(--color-primary, #334155)}.snackbar-item.glass .snackbar-action-btn:not(.variant-danger):hover{background:rgba(0, 0, 0, 0.1)}.snackbar-item.outlined{background:rgba(255, 255, 255, 0.9);border-width:1.5px;border-style:solid}.snackbar-item.outlined.success{border-color:var(--color-success-hover, #059669);color:var(--color-success-hover, #059669)}.snackbar-item.outlined.error{border-color:var(--color-danger-hover, #dc2626);color:var(--color-danger-hover, #dc2626)}.snackbar-item.outlined.warning{border-color:var(--color-warning-hover, #d97706);color:var(--color-warning-hover, #d97706)}.snackbar-item.outlined.info{border-color:var(--color-primary-hover, #2563eb);color:var(--color-primary-hover, #2563eb)}.snackbar-item.outlined.neutral{border-color:var(--border-strong, #4b5563);color:var(--text-secondary, #4b5563)}.snackbar-item.soft{background:rgba(255, 255, 255, 0.95)}.snackbar-item.soft.success{border-left:4px solid var(--color-success, #10b981);background:var(--bg-primary, #ecfdf5);color:var(--color-primary, #065f46)}.snackbar-item.soft.success .snackbar-title,.snackbar-item.soft.success .snackbar-icon{color:var(--color-success-hover, #059669)}.snackbar-item.soft.error{border-left:4px solid var(--color-danger, #ef4444);background:var(--bg-primary, #fef2f2);color:var(--color-danger, #991b1b)}.snackbar-item.soft.error .snackbar-title,.snackbar-item.soft.error .snackbar-icon{color:var(--color-danger-hover, #dc2626)}.snackbar-item.soft.warning{border-left:4px solid var(--color-warning, #f59e0b);background:var(--bg-primary, #fffbeb);color:var(--color-danger, #92400e)}.snackbar-item.soft.warning .snackbar-title,.snackbar-item.soft.warning .snackbar-icon{color:var(--color-warning-hover, #d97706)}.snackbar-item.soft.info{border-left:4px solid var(--color-primary, #10b981);background:var(--bg-primary, #eff6ff);color:var(--color-primary, #1e40af)}.snackbar-item.soft.info .snackbar-title,.snackbar-item.soft.info .snackbar-icon{color:var(--color-primary-hover, #2563eb)}.snackbar-item.soft.neutral{border-left:4px solid var(--color-primary, #475569);background:var(--bg-secondary, #f3f4f6);color:var(--text-secondary, #374151)}.snackbar-item.soft.neutral .snackbar-title,.snackbar-item.soft.neutral .snackbar-icon{color:var(--color-primary, #475569)}.snackbar-item.neutral:not(.filled),.snackbar-item.loading:not(.filled){background:var(--bg-primary, #f8fafc);border-color:var(--border-subtle, #e2e8f0);color:var(--color-primary, #334155)}.snackbar-item.filled.success{background:var(--color-success, #10b981);color:var(--text-standard, #ffffff)}.snackbar-item.filled.error{background:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff)}.snackbar-item.filled.warning{background:var(--color-warning, #f59e0b);color:var(--text-standard, #ffffff)}.snackbar-item.filled.info{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff)}.snackbar-item.filled.neutral{background:var(--color-primary, #334155);color:var(--text-standard, #ffffff)}.snackbar-item.filled.loading{background:var(--color-primary, #475569);color:var(--text-standard, #ffffff)}.snackbar-item.sovereign{background:linear-gradient(135deg, var(--bg-primary, #1e293b) 0%, var(--bg-secondary, #0f172a) 100%);color:var(--color-danger, #fbbf24);border:1px solid rgba(251, 191, 36, 0.4);box-shadow:0 0 20px rgba(251, 191, 36, 0.15), 0 10px 15px -3px rgba(0, 0, 0, 0.3);overflow:hidden}.snackbar-item.sovereign::after{content:"";position:absolute;top:-50%;left:-50%;width:200%;height:200%;background:radial-gradient(circle, rgba(251, 191, 36, 0.1) 0%, transparent 70%);opacity:0.5;animation:sovereignPulse 4s infinite alternate}.snackbar-item.sovereign .snackbar-title{color:var(--color-danger, #fbbf24);text-shadow:0 0 8px rgba(251, 191, 36, 0.4);letter-spacing:0.05em}.snackbar-item.sovereign .snackbar-badge{background:var(--color-danger, #fbbf24);color:var(--text-primary, #0f172a)}.snackbar-item.sovereign .snackbar-progress{background:var(--color-danger, #fbbf24);box-shadow:0 0 10px var(--color-danger, #fbbf24);height:3px}.snackbar-item.sovereign .snackbar-icon{color:var(--color-danger, #fbbf24);filter:drop-shadow(0 0 5px rgba(251, 191, 36, 0.6))}@keyframes sovereignPulse{0%{transform:scale(1) translate(0, 0);opacity:0.3}100%{transform:scale(1.2) translate(5%, 5%);opacity:0.6}}.snackbar-item.theme-dark{background:var(--bg-secondary, #111827);color:var(--text-standard, #ffffff);border-color:rgba(255, 255, 255, 0.1);box-shadow:0 20px 25px -5px rgba(0, 0, 0, 0.5)}.snackbar-item{opacity:0;transition:all 0.5s cubic-bezier(0.18, 0.89, 0.32, 1.28), opacity 0.3s ease, max-height 0.4s ease, margin 0.4s ease;max-height:200px}.snackbar-item.slide-up{transform:translateY(40px) scale(0.9)}.snackbar-item.slide-down{transform:translateY(-40px) scale(0.9)}.snackbar-item.slide-left{transform:translateX(-100%) scale(0.9)}.snackbar-item.slide-right{transform:translateX(100%) scale(0.9)}.snackbar-item.fade{transform:scale(0.95)}.snackbar-item.scale{transform:scale(0.1)}.snackbar-item.spring{transform:translateY(100px)}.snackbar-item.show{opacity:1;transform:translate(0, 0) scale(1)}.snackbar-item.closing{opacity:0 !important;transform:scale(0.8) translateY(20px) !important;pointer-events:none;max-height:0 !important;margin-top:0 !important;margin-bottom:0 !important;padding-top:0 !important;padding-bottom:0 !important;overflow:hidden;filter:blur(8px)}.snackbar-container.top-left .snackbar-item.closing,.snackbar-container.top-right .snackbar-item.closing,.snackbar-container.top-center .snackbar-item.closing{transform:scale(0.8) translateY(-20px) !important}.snackbar-item.spring.show{animation:springEntry 0.6s cubic-bezier(0.18, 0.89, 0.32, 1.28) forwards}@keyframes springEntry{0%{transform:translateY(100px) scale(0.4);opacity:0}70%{transform:translateY(-10px) scale(1.05);opacity:1}100%{transform:translateY(0) scale(1);opacity:1}}.snackbar-item.bounce.show{animation:bounceIn 0.5s cubic-bezier(0.36, 0, 0.66, -0.56) forwards}@keyframes bounceIn{0%{transform:scale(0.3);opacity:0}50%{transform:scale(1.1);opacity:1}70%{transform:scale(0.9)}100%{transform:scale(1)}}.snackbar-actions{display:flex;align-items:center;gap:12px;margin-top:10px}.snackbar-action-btn{padding:4px 10px;border-radius:6px;font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.05em;background:rgba(0, 0, 0, 0.1);border:1px solid rgba(0, 0, 0, 0.1);color:inherit;cursor:pointer;transition:all 0.2s}.snackbar-action-btn:hover{background:rgba(0, 0, 0, 0.2)}.snackbar-item.filled .snackbar-action-btn{background:rgba(255, 255, 255, 0.2);border-color:rgba(255, 255, 255, 0.3)}.snackbar-item.filled .snackbar-action-btn:hover{background:rgba(255, 255, 255, 0.3)}.snackbar-action-btn.variant-primary{background:var(--color-primary, #10b981);color:var(--text-standard, #ffffff);border-color:var(--color-primary-hover, #2563eb)}.snackbar-action-btn.variant-primary:hover{background:var(--color-primary-hover, #2563eb)}.snackbar-action-btn.variant-danger{background:var(--color-danger, #ef4444);color:var(--text-standard, #ffffff);border-color:var(--color-danger-hover, #dc2626)}.snackbar-action-btn.variant-danger:hover{background:var(--color-danger-hover, #dc2626)}.snackbar-action-btn.variant-text{background:transparent;border:none;font-weight:600;padding:4px 6px}.snackbar-action-btn.variant-text:hover{text-decoration:underline;background:rgba(0, 0, 0, 0.05)}.snackbar-link{font-size:12px;text-decoration:underline;color:inherit;opacity:0.8;font-weight:500}.snackbar-link:hover{opacity:1}.snackbar-progress{position:absolute;bottom:0;left:0;height:4px;background:rgba(255, 255, 255, 0.5);width:0%;transition:width linear;}.snackbar-container.hovered .snackbar-progress{animation:progressPulse 2s infinite ease-in-out}@keyframes progressPulse{0%,100%{opacity:0.5}50%{opacity:0.8}}.snackbar-item:not(.filled) .snackbar-progress,.snackbar-item.neutral.filled .snackbar-progress,.snackbar-item.outlined .snackbar-progress,.snackbar-item.soft .snackbar-progress{background:currentColor;opacity:0.15}.snackbar-progress-ring{position:absolute;top:12px;right:12px;width:20px;height:20px;transform:rotate(-90deg)}.snackbar-progress-ring circle{fill:none;stroke:currentColor;stroke-width:2;stroke-dasharray:56.5;stroke-dashoffset:56.5;opacity:0.3}.snackbar-close{background:none;border:none;color:inherit;cursor:pointer;padding:4px;border-radius:50%;display:flex;align-items:center;justify-content:center;opacity:0.6;transition:all 0.2s}.snackbar-close:hover{opacity:1;background:rgba(0, 0, 0, 0.05)}.snackbar-icon-draw{width:24px;height:24px}.circle{stroke-dasharray:157;stroke-dashoffset:157;stroke-width:2;stroke-miterlimit:10;stroke:currentColor;fill:none;animation:stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards}.check{transform-origin:50% 50%;stroke-dasharray:48;stroke-dashoffset:48;stroke:currentColor;stroke-width:3;animation:stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards}@keyframes stroke{100%{stroke-dashoffset:0}}.snackbar-history-indicator{margin-top:12px;border-top:1px solid rgba(0, 0, 0, 0.05);padding-top:8px;width:100%}.expand-history-btn{background:transparent;border:none;font-size:11px;font-weight:600;color:inherit;opacity:0.6;cursor:pointer;padding:4px 0;display:flex;align-items:center;gap:4px}.expand-history-btn:hover{opacity:1;text-decoration:underline}.snackbar-history-list{max-height:0;overflow:hidden;transition:max-height 0.3s cubic-bezier(0.4, 0, 0.2, 1);display:flex;flex-direction:column;gap:6px}.snackbar-item.history-expanded .snackbar-history-list{max-height:150px;margin-top:8px;overflow-y:auto}.history-item{display:flex;flex-direction:column;padding:6px 8px;background:rgba(0, 0, 0, 0.03);border-radius:4px;font-size:12px}.history-item .history-time{font-size:10px;font-weight:700;opacity:0.5}.history-item .history-msg{opacity:0.8}.theme-dark .history-item{background:rgba(255, 255, 255, 0.05)}.snackbar-item.filled .history-item{background:rgba(255, 255, 255, 0.1)}.snackbar-loading-spinner{width:18px;height:18px;border:2px solid rgba(255, 255, 255, 0.3);border-radius:50%;border-top-color:var(--bg-primary, #ffffff);animation:spin 0.8s linear infinite}@keyframes spin{to{transform:rotate(360deg)}}.snackbar-quick-input{width:100%;margin-top:8px}.snackbar-quick-input input{width:100%;padding:8px 12px;border-radius:6px;border:1px solid rgba(0, 0, 0, 0.1);background:rgba(255, 255, 255, 0.5);font-size:13px;outline:none}.snackbar-quick-input input:focus{border-color:var(--color-primary, #10b981);background:var(--bg-primary, #ffffff)}@media (max-width: 500px){.snackbar-container{left:0 !important;right:0 !important;width:100% !important;max-width:100% !important;transform:none !important;padding:12px !important;bottom:0 !important;top:auto !important;}.snackbar-container.top-left,.snackbar-container.top-right,.snackbar-container.top-center{top:0 !important;bottom:auto !important}.snackbar-item{width:100% !important;min-width:0 !important;max-width:100% !important;margin-left:0 !important;margin-right:0 !important}.snackbar-clear-all{width:auto;align-self:center}.snackbar-container.card-stack{min-width:0 !important}.snackbar-container.card-stack::before{display:none}.snackbar-container.card-stack{}}@keyframes sb-particle-burst{0%{transform:translate(-50%, -50%) translate(0, 0) scale(0) rotate(0deg);opacity:0}15%{opacity:1;transform:translate(-50%, -50%) translate(calc(var(--tx) * 0.25px), calc(var(--ty) * 0.25px)) scale(var(--s)) rotate(calc(var(--r) * 0.2deg))}80%{opacity:0.7}100%{transform:translate(-50%, -50%) translate(calc(var(--tx) * 1px), calc(var(--ty) * 1px)) scale(0) rotate(calc(var(--r) * 1deg));opacity:0}}@keyframes sb-particle-float{0%{transform:translate(-50%, -50%) translate(0, 0) scale(0.5) rotate(0deg);opacity:0}20%{opacity:1}100%{transform:translate(-50%, -50%) translate(calc(var(--tx) * 0.5px), calc(var(--ty) * 1px)) scale(0) rotate(calc(var(--r) * 0.5deg));opacity:0}}@keyframes sb-particle-glint{0%{transform:translate(-50%, -50%) scale(0);opacity:0}30%{transform:translate(-50%, -50%) scale(1.6);opacity:1}100%{transform:translate(-50%, -50%) scale(0.3);opacity:0}}.sb-particle{position:absolute;top:50%;left:50%;pointer-events:none;will-change:transform, opacity;z-index:1000;animation-fill-mode:forwards;animation-timing-function:cubic-bezier(0.19, 1, 0.22, 1);animation-duration:var(--d, 1.2s);animation-delay:var(--delay, 0s)}.sb-particle.sb-particle--burst{width:var(--size, 8px);height:var(--size, 8px);border-radius:50%;background:radial-gradient(circle, #fbbf24 0%, #f97316 60%, transparent 100%);box-shadow:0 0 6px 1px rgba(251, 191, 36, 0.5019607843);animation-name:sb-particle-burst}.sb-particle.sb-particle--float{font-size:var(--size, 14px);line-height:1;animation-name:sb-particle-float}.sb-particle.sb-particle--glint{width:var(--size, 6px);height:var(--size, 6px);border-radius:50%;background:#fff;box-shadow:0 0 4px 2px rgba(255, 255, 255, 0.5019607843);animation-name:sb-particle-glint}.snackbar-particle{position:absolute;top:50%;left:50%;pointer-events:none;z-index:1000;opacity:0;will-change:transform, opacity}.snackbar-particle.type-glow{width:8px;height:8px;background:radial-gradient(circle, #fbbf24 0%, transparent 70%);border-radius:50%;box-shadow:0 0 10px #fbbf24;animation:snackbarParticleExplode 1.6s cubic-bezier(0.19, 1, 0.22, 1) forwards}.snackbar-particle.type-emoji{animation:snackbarParticleExplodeRotate 1.8s cubic-bezier(0.19, 1, 0.22, 1) forwards;white-space:nowrap}@keyframes snackbarParticleExplode{0%{transform:translate(-50%, -50%) scale(0);opacity:0}20%{transform:translate(-50%, -50%) scale(1.5);opacity:1}100%{transform:translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0);opacity:0}}@keyframes snackbarParticleExplodeRotate{0%{transform:translate(-50%, -50%) scale(0) rotate(0deg);opacity:0}20%{transform:translate(-50%, -50%) scale(1.5) rotate(0deg);opacity:1}100%{transform:translate(calc(-50% + var(--tx)), calc(-50% + var(--ty))) scale(0) rotate(var(--rot));opacity:0}}`;

const Snackbar = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.snackbarClosed = createEvent(this, "snackbarClosed");
        this.snackbarAdded = createEvent(this, "snackbarAdded");
        this.snackbarUpdated = createEvent(this, "snackbarUpdated");
        this.snackbarLinkClicked = createEvent(this, "snackbarLinkClicked");
        this.snackbarActionClicked = createEvent(this, "snackbarActionClicked");
    }
    get element() { return getElement(this); }
    /**
     * Position of the snackbar container
     */
    position = 'top-right';
    /**
     * Maximum number of visible snackbars
     */
    maxVisible = 5;
    /**
     * Stack mode for snackbars (only applies when maxVisible > 1)
     */
    stackMode = 'stack';
    /**
     * Open animation mode for snackbars
     */
    openMode = 'slide-down';
    /**
     * Default variant for snackbars
     */
    variant = 'filled';
    /**
     * Default size for snackbars
     */
    size = 'md';
    /**
     * Default theme for notifications
     */
    theme = 'auto';
    /**
     * Enable card stacking mode - notifications stack like cards and expand on hover
     */
    cardStack = false;
    /**
     * Default group threshold (ms) - identical messages within this window are coalesced
     */
    groupThreshold = 3000;
    /**
     * Global default duration (ms) for notifications. 0 is infinite.
     */
    duration = 5000;
    /**
     * Enable smart grouping (coalescing) of identical messages
     */
    coalesce = false;
    /**
     * Maximum duration cap (ms). Any item duration above this value is clamped. 0 = no cap.
     */
    maxDuration = 0;
    /**
     * Show a live countdown chip (e.g. "3s") inside the notification before it closes.
     * Only visible when duration > 0 and progress is set to 'bar' or 'ring'.
     */
    showCountdown = false;
    /**
     * Explicit text direction for this notification instance only.
     * 'auto' reads the CSS computed direction of the element.
     * 'rtl' / 'ltr' override immediately without touching the page layout.
     */
    textDirection = 'auto';
    onTextDirectionChange() {
        this.updateDir();
    }
    /**
     * Default library for icons
     */
    iconLibrary = 'lucide';
    /**
     * Move snackbar to the bottom of the body automatically on load
     */
    portal = true;
    /**
     * Pause timers when the cursor hovers over the snackbar
     */
    pauseOnHover = true;
    /**
     * Pause timers when the window loses focus (e.g. tab switch)
     */
    pauseOnFocusLoss = true;
    /**
     * Sound mode: 'none' | 'synth' | 'custom'
     */
    soundMode = 'synth';
    /**
     * Enable CSS particle burst on 'sovereign' type notifications.
     * Set to false to disable all particle effects.
     */
    particles = true;
    /**
     * Enable slot support for custom notification layouts
     */
    enableSlots = false;
    /**
     * Event emitted when a snackbar is closed
     */
    snackbarClosed;
    /**
     * Event emitted when a snackbar is added
     */
    snackbarAdded;
    /**
     * Event emitted when a snackbar is updated
     */
    snackbarUpdated;
    /**
     * Event emitted when a snackbar link is clicked
     */
    snackbarLinkClicked;
    /**
     * Event emitted when a snackbar action button is clicked
     */
    snackbarActionClicked;
    snackbars = [];
    visibleSnackbars = [];
    animatedItems = new Set();
    isHovered = false;
    expandedSnackbars = new Set();
    dragX = {};
    isDragging = null;
    dir = 'ltr';
    /** Per-notification remaining seconds for the countdown chip (reactive) */
    countdownSeconds = {};
    timers = {};
    startX = 0;
    componentWillLoad() {
        this.updateVisibleSnackbars();
        // Detect RTL direction from ancestral context
        this.updateDir();
        // Add global key listener
        window.addEventListener('keydown', this.handleGlobalKeyDown);
        // Portal to body if requested
        if (this.portal && document.body && this.element.parentElement !== document.body) {
            document.body.appendChild(this.element);
        }
        window.addEventListener('blur', () => this.handleWindowBlur());
        window.addEventListener('focus', () => this.handleWindowFocus());
    }
    updateDir() {
        // Explicit prop takes priority — never reads nor touches the page dir
        if (this.textDirection === 'rtl') {
            this.dir = 'rtl';
            return;
        }
        if (this.textDirection === 'ltr') {
            this.dir = 'ltr';
            return;
        }
        // 'auto': respect only the element's own CSS computed direction
        // (inherited from a parent that has dir set — NOT the global html element)
        const computed = getComputedStyle(this.element).direction;
        this.dir = (computed === 'rtl') ? 'rtl' : 'ltr';
    }
    disconnectedCallback() {
        window.removeEventListener('keydown', this.handleGlobalKeyDown);
        window.removeEventListener('blur', () => this.handleWindowBlur());
        window.removeEventListener('focus', () => this.handleWindowFocus());
    }
    handleGlobalKeyDown = (e) => {
        if (e.key === 'Escape' && this.snackbars.length > 0) {
            e.preventDefault();
            e.stopPropagation();
            this.closeAll();
        }
    };
    positionChanged() {
        this.updateVisibleSnackbars();
    }
    maxVisibleChanged() {
        this.updateVisibleSnackbars();
    }
    stackModeChanged() {
        this.updateVisibleSnackbars();
    }
    handleWindowBlur() {
        if (this.pauseOnFocusLoss)
            this.isHovered = true;
    }
    handleWindowFocus() {
        if (this.pauseOnFocusLoss) {
            this.isHovered = false;
            // Reset times to avoid jumps
            const now = Date.now();
            Object.values(this.timers).forEach(timer => {
                timer.lastTime = now;
            });
        }
    }
    updateVisibleSnackbars() {
        this.visibleSnackbars = [...this.snackbars]
            .sort((a, b) => {
            if (a.priority === 'urgent' && b.priority !== 'urgent')
                return -1;
            if (a.priority !== 'urgent' && b.priority === 'urgent')
                return 1;
            return 0;
        })
            .slice(0, this.maxVisible);
    }
    async add(item) {
        if (this.coalesce) {
            const existingIndex = this.snackbars.findIndex(it => it.message === item.message &&
                it.type === item.type);
            if (existingIndex !== -1) {
                const existingId = this.snackbars[existingIndex].id;
                const history = this.snackbars[existingIndex].history || [];
                this.update(existingId, {
                    count: (this.snackbars[existingIndex].count || 1) + 1,
                    duration: item.duration || this.snackbars[existingIndex].duration || this.duration,
                    history: [...history, { message: item.message, title: item.title, timestamp: Date.now() }]
                });
                return existingId;
            }
        }
        const id = this.generateId();
        const snackbarItem = {
            id,
            type: item.type || 'info',
            title: item.title,
            message: item.message,
            html: item.html || false,
            avatar: item.avatar,
            icon: item.icon,
            iconLibrary: item.iconLibrary || this.iconLibrary,
            link: item.link,
            action: item.action,
            actions: item.actions || [],
            duration: item.duration === 0 ? 0 : this.clampDuration(item.duration || this.duration),
            variant: item.variant || this.variant,
            size: item.size || this.size,
            customClass: item.customClass,
            closable: item.closable !== false,
            count: 1,
            haptic: item.haptic || (item.type === 'error'),
            sound: item.sound,
            progress: item.progress || 'bar',
            priority: item.priority || (item.type === 'error' ? 'urgent' : 'high'),
            theme: item.theme || this.theme,
            input: item.input,
            sticky: !!item.sticky,
            onClose: item.onClose,
            slot: item.slot,
            history: [{ message: item.message, title: item.title, timestamp: Date.now() }]
        };
        if (snackbarItem.type === 'sovereign' && this.particles) {
            this.spawnParticles(id);
        }
        if (snackbarItem.haptic && 'vibrate' in navigator) {
            if (snackbarItem.type === 'sovereign') {
                navigator.vibrate([100, 30, 100, 30, 100]);
            }
            else {
                navigator.vibrate(snackbarItem.type === 'error' ? [50, 50, 50] : 30);
            }
        }
        if (this.soundMode === 'synth') {
            this.playSynthSound(snackbarItem.type);
        }
        else if (snackbarItem.sound) {
            new Audio(snackbarItem.sound).play().catch(() => { });
        }
        if (this.stackMode === 'stack' || this.stackMode === 'lifo') {
            this.snackbars = [snackbarItem, ...this.snackbars];
        }
        else {
            this.snackbars = [...this.snackbars, snackbarItem];
        }
        if (this.snackbars.length > this.maxVisible) {
            const toRemove = this.snackbars[this.snackbars.length - 1];
            this.close(toRemove.id);
        }
        this.updateVisibleSnackbars();
        this.startTimer(id, snackbarItem.duration ?? 0);
        this.snackbarAdded.emit({ id, item: snackbarItem });
        return id;
    }
    clampDuration(ms) {
        if (this.maxDuration > 0 && ms > this.maxDuration)
            return this.maxDuration;
        return ms;
    }
    async close(id) {
        const index = this.snackbars.findIndex(item => item.id === id);
        if (index === -1)
            return;
        if (this.timers[id]) {
            cancelAnimationFrame(this.timers[id].id);
            delete this.timers[id];
        }
        this.animatedItems.add(`${id}-closing`);
        // Immediate removal to keep UI responsive as requested
        if (this.snackbars[index]?.onClose)
            this.snackbars[index].onClose();
        this.snackbarClosed.emit({ id, item: this.snackbars[index] });
        this.snackbars = this.snackbars.filter(item => item.id !== id);
        this.animatedItems.delete(id);
        this.animatedItems.delete(`${id}-closing`);
        // Clean up countdown state for this item
        if (this.countdownSeconds[id] !== undefined) {
            const { [id]: _removed, ...rest } = this.countdownSeconds;
            this.countdownSeconds = rest;
        }
        this.updateVisibleSnackbars();
    }
    async closeAll() {
        Object.values(this.timers).forEach(t => cancelAnimationFrame(t.id));
        this.timers = {};
        this.snackbars.forEach(item => {
            if (item.onClose)
                item.onClose();
            this.snackbarClosed.emit({ id: item.id, item });
        });
        this.snackbars = [];
        this.visibleSnackbars = [];
        this.animatedItems.clear();
    }
    async closeNext() {
        if (this.snackbars.length === 0)
            return;
        let idToClose;
        if (this.stackMode === 'queue') {
            // FIFO: close the oldest item (last in array since newest is first)
            idToClose = this.snackbars[this.snackbars.length - 1].id;
        }
        else {
            // stack / lifo: close the top-most (first in array = newest)
            idToClose = this.snackbars[0].id;
        }
        await this.close(idToClose);
    }
    /**
     * Returns all current notifications
     */
    async getAll() {
        return [...this.snackbars];
    }
    /**
     * Pause timer for a specific notification
     */
    async pause(id) {
        if (this.timers[id]) {
            cancelAnimationFrame(this.timers[id].id);
            this.timers[id].id = 0;
        }
    }
    /**
     * Resume timer for a specific notification
     */
    async resume(id) {
        if (this.timers[id] && this.timers[id].id === 0 && this.timers[id].remaining > 0) {
            this.timers[id].lastTime = Date.now();
            const loop = () => {
                if (!this.timers[id])
                    return;
                const now = Date.now();
                const delta = now - this.timers[id].lastTime;
                this.timers[id].lastTime = now;
                if (!this.isHovered)
                    this.timers[id].remaining -= delta;
                if (this.timers[id].remaining <= 0) {
                    this.close(id);
                }
                else {
                    this.timers[id].id = requestAnimationFrame(loop);
                }
            };
            this.timers[id].id = requestAnimationFrame(loop);
        }
    }
    /**
     * Replace an existing notification completely
     */
    async replace(id, newItem) {
        const index = this.snackbars.findIndex(it => it.id === id);
        if (index === -1)
            return;
        const replacedItem = { ...newItem, id };
        const newSnackbars = [...this.snackbars];
        newSnackbars[index] = replacedItem;
        this.snackbars = newSnackbars;
        this.updateVisibleSnackbars();
        // Restart timer
        if (this.timers[id]) {
            cancelAnimationFrame(this.timers[id].id);
            delete this.timers[id];
        }
        if ((replacedItem.duration ?? 0) > 0)
            this.startTimer(id, replacedItem.duration);
        this.snackbarUpdated.emit({ id, item: replacedItem });
    }
    async promise(promise, data) {
        const id = await this.add({
            type: 'loading',
            message: data.loading,
            duration: 0,
            closable: true
        });
        try {
            const res = await (typeof promise === 'function' ? promise() : promise);
            const successMsg = typeof data.success === 'function' ? data.success(res) : data.success;
            this.update(id, {
                type: 'success',
                message: successMsg,
                duration: data.duration || 4000,
                closable: true
            });
            return res;
        }
        catch (err) {
            const errorMsg = typeof data.error === 'function' ? data.error(err) : data.error;
            this.update(id, {
                type: 'error',
                message: errorMsg,
                duration: data.duration || 5000,
                closable: true
            });
            throw err;
        }
    }
    async undoable(data) {
        const id = await this.add({
            message: data.message,
            title: data.title,
            type: data.type || 'neutral',
            duration: data.duration || 6000,
            action: data.action || {
                label: 'UNDO',
                onClick: () => {
                    data.onUndo();
                    this.close(id);
                }
            },
            link: data.link
        });
        const listener = (event) => {
            if (event.detail.id === id) {
                if (data.onDismiss)
                    data.onDismiss();
                this.element.removeEventListener('snackbarClosed', listener);
            }
        };
        this.element.addEventListener('snackbarClosed', listener);
        return id;
    }
    async update(id, updates) {
        const index = this.snackbars.findIndex(it => it.id === id);
        if (index !== -1) {
            const countChanged = updates.count !== undefined && updates.count !== this.snackbars[index].count;
            const updatedItem = { ...this.snackbars[index], ...updates };
            const newSnackbars = [...this.snackbars];
            newSnackbars[index] = updatedItem;
            this.snackbars = newSnackbars;
            this.updateVisibleSnackbars();
            if (countChanged) {
                this.triggerBadgePulse(id);
            }
            if (updates.duration !== undefined) {
                if (this.timers[id]) {
                    cancelAnimationFrame(this.timers[id].id);
                    delete this.timers[id];
                }
                if (updates.duration > 0) {
                    this.startTimer(id, updates.duration);
                }
            }
            this.snackbarUpdated.emit({ id, item: updatedItem });
        }
    }
    generateId() {
        return `snackbar-${Date.now()}-${Math.random().toString(36).substr(2, 9)}`;
    }
    startTimer(id, duration) {
        const item = this.snackbars.find(s => s.id === id);
        if (duration <= 0 || (item && item.sticky))
            return;
        this.timers[id] = {
            remaining: duration,
            lastTime: Date.now(),
            duration: duration,
            id: 0
        };
        const loop = () => {
            if (!this.timers[id])
                return;
            const now = Date.now();
            const delta = now - this.timers[id].lastTime;
            this.timers[id].lastTime = now;
            if (!this.isHovered) {
                this.timers[id].remaining -= delta;
            }
            const progress = Math.min(100, Math.max(0, 100 - (this.timers[id].remaining / this.timers[id].duration) * 100));
            const progressBar = this.getProgressBarElement(id);
            if (progressBar) {
                progressBar.style.width = `${progress}%`;
            }
            const progressRing = this.getProgressRingElement(id);
            if (progressRing) {
                const offset = 56.5 - (progress / 100) * 56.5;
                progressRing.style.strokeDashoffset = `${offset}`;
            }
            // Countdown chip — update reactive state once per second so Stencil
            // re-renders the value without direct DOM manipulation (which would be
            // overwritten on the next virtual-DOM reconciliation).
            if (this.showCountdown) {
                const newSecs = Math.ceil(this.timers[id].remaining / 1000);
                if (this.countdownSeconds[id] !== newSecs) {
                    this.countdownSeconds = { ...this.countdownSeconds, [id]: newSecs };
                }
            }
            if (this.timers[id].remaining <= 0) {
                this.close(id);
            }
            else {
                this.timers[id].id = requestAnimationFrame(loop);
            }
        };
        this.timers[id].id = requestAnimationFrame(loop);
    }
    getProgressBarElement(id) {
        return this.element.shadowRoot?.querySelector(`[data-snackbar-id="${id}"] .snackbar-progress`);
    }
    getProgressRingElement(id) {
        return this.element.shadowRoot?.querySelector(`[data-snackbar-id="${id}"] .snackbar-progress-ring circle`);
    }
    handleCloseClick = (id) => {
        this.close(id);
    };
    handleLinkClick = (id, item) => {
        if (item.link) {
            this.snackbarLinkClicked.emit({ id, item, link: item.link });
        }
    };
    playSynthSound(type) {
        try {
            const audioCtx = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioCtx.createOscillator();
            const gainNode = audioCtx.createGain();
            oscillator.connect(gainNode);
            gainNode.connect(audioCtx.destination);
            if (type === 'success' || type === 'sovereign') {
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(880, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(1320, audioCtx.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.3);
            }
            else if (type === 'error' || type === 'warning') {
                oscillator.type = 'square';
                oscillator.frequency.setValueAtTime(220, audioCtx.currentTime);
                oscillator.frequency.exponentialRampToValueAtTime(110, audioCtx.currentTime + 0.1);
                gainNode.gain.setValueAtTime(0.05, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.4);
            }
            else {
                oscillator.type = 'sine';
                oscillator.frequency.setValueAtTime(440, audioCtx.currentTime);
                gainNode.gain.setValueAtTime(0.03, audioCtx.currentTime);
                gainNode.gain.exponentialRampToValueAtTime(0.01, audioCtx.currentTime + 0.2);
            }
            oscillator.start();
            oscillator.stop(audioCtx.currentTime + 0.5);
        }
        catch (e) { }
    }
    toggleExpand(id) {
        const newExpanded = new Set(this.expandedSnackbars);
        if (newExpanded.has(id)) {
            newExpanded.delete(id);
        }
        else {
            newExpanded.add(id);
        }
        this.expandedSnackbars = newExpanded;
    }
    triggerBadgePulse(id) {
        const badge = this.element.shadowRoot?.querySelector(`[data-snackbar-id="${id}"] .snackbar-badge`);
        if (badge) {
            badge.classList.remove('pulse');
            badge.classList.add('pulse');
        }
    }
    spawnParticles(id) {
        if (typeof window === 'undefined')
            return;
        // Lightweight CSS-only particle burst.
        // All motion is handled by @keyframes in snackbar.scss — no WAAPI needed.
        const EMOJIS = ['✨', '⭐', '💫', '🌟'];
        const COUNTS = { burst: 10, float: 8, glint: 6 };
        setTimeout(() => {
            const container = this.element.shadowRoot?.querySelector(`[data-snackbar-id="${id}"]`);
            if (!container)
                return;
            if (getComputedStyle(container).position === 'static') {
                container.style.position = 'relative';
                container.style.overflow = 'visible';
            }
            const spawn = (type, index, total) => {
                const p = document.createElement('span');
                p.className = `sb-particle sb-particle--${type}`;
                const angle = (Math.PI * 2 * index) / total;
                const velocity = 80 + Math.random() * 120;
                const tx = Math.round(Math.cos(angle) * velocity);
                const ty = Math.round(Math.sin(angle) * velocity);
                const rotation = Math.round(Math.random() * 1080 - 540);
                const duration = (1.0 + Math.random() * 0.8).toFixed(2);
                const delay = (Math.random() * 0.15).toFixed(2);
                if (type === 'burst') {
                    const size = (6 + Math.random() * 6).toFixed(1);
                    p.style.cssText = `--tx:${tx};--ty:${ty};--r:${rotation};--d:${duration}s;--delay:${delay}s;--size:${size}px`;
                }
                else if (type === 'float') {
                    const size = (12 + Math.random() * 10).toFixed(1);
                    p.textContent = EMOJIS[Math.floor(Math.random() * EMOJIS.length)];
                    p.style.cssText = `--tx:${tx};--ty:${ty};--r:${rotation};--d:${duration}s;--delay:${delay}s;--size:${size}px`;
                }
                else {
                    const size = (4 + Math.random() * 5).toFixed(1);
                    const ox = Math.round((Math.random() - 0.5) * 60);
                    const oy = Math.round((Math.random() - 0.5) * 30);
                    p.style.cssText = `top:calc(50% + ${oy}px);left:calc(50% + ${ox}px);--d:${(0.6 + Math.random() * 0.5).toFixed(2)}s;--delay:${delay}s;--size:${size}px`;
                }
                container.appendChild(p);
                // Remove after the animation finishes (duration + delay + 50ms grace)
                const cleanupMs = (parseFloat(duration) + parseFloat(delay)) * 1000 + 50;
                setTimeout(() => p.remove(), cleanupMs);
            };
            let bi = 0, fi = 0, gi = 0;
            const total = COUNTS.burst + COUNTS.float + COUNTS.glint;
            for (let i = 0; i < total; i++) {
                const roll = i % 3;
                if (roll === 0 && bi < COUNTS.burst) {
                    spawn('burst', bi++, COUNTS.burst);
                }
                else if (roll === 1 && fi < COUNTS.float) {
                    spawn('float', fi++, COUNTS.float);
                }
                else if (gi < COUNTS.glint) {
                    spawn('glint', gi++, COUNTS.glint);
                }
            }
        }, 80);
    }
    handleKeyDown = (e, id, index) => {
        if (e.key === 'Delete' || e.key === 'Backspace') {
            this.close(id);
        }
        else if (e.key === 'ArrowDown') {
            const next = this.element.shadowRoot?.querySelector(`[data-stack-index="${index + 1}"]`);
            if (next)
                next.focus();
        }
        else if (e.key === 'ArrowUp') {
            const prev = this.element.shadowRoot?.querySelector(`[data-stack-index="${index - 1}"]`);
            if (prev)
                prev.focus();
        }
    };
    handleActionClick = (id, item) => {
        this.snackbarActionClicked.emit({ id, item });
        if (item.action && item.action.onClick) {
            item.action.onClick();
        }
    };
    handleMouseDown = (e, id) => {
        this.isDragging = id;
        this.startX = e.clientX;
        this.dragX = { ...this.dragX, [id]: 0 };
        document.addEventListener('mousemove', this.handleMouseMove);
        document.addEventListener('mouseup', this.handleMouseUp);
    };
    handleMouseMove = (e) => {
        if (!this.isDragging)
            return;
        const currentX = e.clientX;
        const diff = currentX - this.startX;
        this.dragX = { ...this.dragX, [this.isDragging]: diff };
    };
    handleMouseUp = () => {
        if (!this.isDragging)
            return;
        const id = this.isDragging;
        const offset = this.dragX[id] || 0;
        if (Math.abs(offset) > 120) {
            this.dragX = { ...this.dragX, [id]: offset > 0 ? 500 : -500 };
            setTimeout(() => this.close(id), 200);
        }
        else {
            this.dragX = { ...this.dragX, [id]: 0 };
        }
        this.isDragging = null;
        document.removeEventListener('mousemove', this.handleMouseMove);
        document.removeEventListener('mouseup', this.handleMouseUp);
    };
    handleMouseEnter = () => {
        if (!this.pauseOnHover)
            return;
        this.isHovered = true;
        const now = Date.now();
        Object.values(this.timers).forEach(timer => {
            timer.lastTime = now;
        });
    };
    handleTouchStart = (e, id) => {
        this.isDragging = id;
        this.startX = e.touches[0].clientX;
        this.dragX = { ...this.dragX, [id]: 0 };
    };
    handleTouchMove = (e, id) => {
        if (this.isDragging !== id)
            return;
        const currentX = e.touches[0].clientX;
        const diff = currentX - this.startX;
        // RTL: invert resistance direction
        const isRight = this.dir === 'rtl' ? this.position.includes('left') : this.position.includes('right');
        const isLeft = this.dir === 'rtl' ? this.position.includes('right') : this.position.includes('left');
        const resistance = (isRight && diff < 0) || (isLeft && diff > 0) ? 0.2 : 1;
        this.dragX = { ...this.dragX, [id]: diff * resistance };
        if (Math.abs(diff) > 10)
            e.preventDefault();
    };
    handleTouchEnd = (id) => {
        if (this.isDragging !== id)
            return;
        const offset = this.dragX[id] || 0;
        const threshold = 100;
        // RTL: mirror the dismiss direction for left/right anchored positions
        const isRight = this.dir === 'rtl' ? this.position.includes('left') : this.position.includes('right');
        const isLeft = this.dir === 'rtl' ? this.position.includes('right') : this.position.includes('left');
        const shouldDismiss = (isRight && offset > threshold) ||
            (isLeft && offset < -threshold) ||
            (this.position.includes('center') && Math.abs(offset) > threshold);
        if (shouldDismiss) {
            this.dragX = { ...this.dragX, [id]: offset > 0 ? 500 : -500 };
            setTimeout(() => this.close(id), 200);
        }
        else {
            this.dragX = { ...this.dragX, [id]: 0 };
        }
        this.isDragging = null;
    };
    handleMouseLeave = () => {
        if (!this.pauseOnHover)
            return;
        this.isHovered = false;
        const now = Date.now();
        Object.values(this.timers).forEach(timer => {
            timer.lastTime = now;
        });
    };
    handleInputSubmit = (id, item, value) => {
        if (item.input && item.input.onSubmit) {
            item.input.onSubmit(value);
            this.close(id);
        }
    };
    renderIcon(item) {
        if (item.avatar) {
            return (h("div", { class: "snackbar-avatar" }, h("img", { src: item.avatar, alt: "" })));
        }
        if (item.icon) {
            return (h("div", { class: "snackbar-custom-icon" }, h("ui-icon", { name: item.icon, library: item.iconLibrary || this.iconLibrary, size: "1.5rem" })));
        }
        const type = item.type;
        if (type === 'success') {
            return (h("div", { class: `snackbar-icon-draw ${type}` }, h("svg", { viewBox: "0 0 52 52" }, h("circle", { class: "circle", cx: "26", cy: "26", r: "25", fill: "none" }), h("path", { class: "check", fill: "none", d: "M14.1 27.2l7.1 7.2 16.7-16.8" }))));
        }
        if (type === 'error') {
            return (h("div", { class: `snackbar-icon-draw ${type}` }, h("svg", { viewBox: "0 0 52 52" }, h("circle", { class: "circle", cx: "26", cy: "26", r: "25", fill: "none" }), h("path", { class: "cross", fill: "none", d: "M16 16 36 36 M36 16 16 36" }))));
        }
        const icons = {
            success: h("ui-icon", { name: "check-circle", library: this.iconLibrary, size: "1.25em", style: { color: 'var(--color-success-600)' } }),
            error: h("ui-icon", { name: "alert-circle", library: this.iconLibrary, size: "1.25em", style: { color: 'var(--color-danger-600)' } }),
            warning: h("ui-icon", { name: "alert-triangle", library: this.iconLibrary, size: "1.25em", style: { color: 'var(--color-warning-600)' } }),
            info: h("ui-icon", { name: "info", library: this.iconLibrary, size: "1.25em", style: { color: 'var(--color-info-600)' } }),
            neutral: h("ui-icon", { name: "bell", library: this.iconLibrary, size: "1.25em", style: { color: 'var(--color-neutral-600, #6b7280)' } }),
            loading: h("span", { class: "snackbar-loading-spinner" }),
            sovereign: h("ui-icon", { name: "crown", library: this.iconLibrary, size: "1.25em", style: { color: '#fbbf24' } })
        };
        return h("div", { class: `snackbar-icon ${type}` }, icons[type]);
    }
    getAriaLive(item) {
        if (item.priority === 'urgent')
            return 'assertive';
        return (item.priority === 'high' || item.type === 'error') ? 'polite' : 'off';
    }
    render() {
        const containerClasses = `snackbar-container ${this.position} ${this.cardStack ? 'card-stack' : ''} ${this.isHovered ? 'hovered' : ''} ${this.dir === 'rtl' ? 'rtl' : ''}`;
        return (h("div", { key: '2ca2794f89a74dc183c6490ffcc65e493eaaea30', class: containerClasses, onMouseEnter: this.handleMouseEnter, onMouseLeave: this.handleMouseLeave, role: (this.visibleSnackbars.some(s => s.type === 'error' || s.priority === 'urgent')) ? 'alert' : 'status', "aria-atomic": "true" }, this.snackbars.length > 1 && (h("ui-button", { key: 'e8288b58adc2f402e120dcacbb3d88993d535123', variant: "ghost", size: "sm", icon: "list-x", iconLibrary: this.iconLibrary, iconSize: "14px", onClick: () => this.closeAll(), ariaLabel: "Clear all notifications", class: "snackbar-clear-all", label: `Clear All (${this.snackbars.length})` }, h("span", { key: '608cb677315ac751d626e2d615ca4636e9d4a11e', class: "kb-hint", slot: "end" }, "Esc"))), this.cardStack && !this.isHovered && this.snackbars.length > 1 && (h("div", { key: '63bfc95aa5d3b7b5daa77cd286eadf2a57fcfcb4', class: "stack-count-badge", onClick: () => { this.isHovered = true; }, title: "Click to expand all notifications" }, h("span", { key: '1b3e099e53747efe22a51b6d27aacf7e7b2ad069', class: "stack-count-number" }, this.snackbars.length), h("span", { key: 'e2c05e3e0334dfe39043a0bdbc05680de497f473', class: "stack-count-label" }, "notifications"))), this.visibleSnackbars.map((item, index) => {
            const stackOffset = this.cardStack && !this.isHovered ? index : 0;
            const isClosing = this.animatedItems.has(`${item.id}-closing`);
            return (h("div", { key: item.id, "data-snackbar-id": item.id, "data-stack-index": index, class: `snackbar-item ${item.type} ${item.variant || 'filled'} ${item.size || 'md'} ${this.openMode} ${item.customClass || ''} ${this.isDragging === item.id ? 'dragging' : ''} ${isClosing ? 'closing' : ''} theme-${item.theme || this.theme}`, style: {
                    animationDelay: `${index * 0.1}s`,
                    '--stack-index': `${stackOffset}`,
                    'transform': this.dragX[item.id] ? `translateX(${this.dragX[item.id]}px) rotate(${this.dragX[item.id] / 20}deg)` : undefined,
                    'opacity': this.dragX[item.id] ? `${Math.max(0, 1 - Math.abs(this.dragX[item.id]) / 400)}` : undefined,
                    'cursor': this.isDragging === item.id ? 'grabbing' : undefined
                }, role: this.getAriaLive(item) !== 'off' ? 'log' : undefined, "aria-live": this.getAriaLive(item), onMouseDown: (e) => this.handleMouseDown(e, item.id), onKeyDown: (e) => this.handleKeyDown(e, item.id, index), onTouchStart: (e) => this.handleTouchStart(e, item.id), onTouchMove: (e) => this.handleTouchMove(e, item.id), onTouchEnd: () => this.handleTouchEnd(item.id), tabIndex: 0 }, h("div", { class: "item-main-row" }, this.renderIcon(item), h("div", { class: "snackbar-content" }, h("div", { style: { display: 'flex', alignItems: 'center', gap: '8px' } }, item.title && h("div", { class: "snackbar-title", "aria-label": `Title: ${item.title}` }, item.title), (item.count ?? 0) > 1 && (h("ui-button", { variant: "ghost", size: "sm", onClick: () => this.toggleExpand(item.id), ariaLabel: `${item.count} occurrences. Click to toggle history.`, label: `${item.count}`, icon: this.expandedSnackbars.has(item.id) ? 'chevron-up' : 'chevron-down', iconLibrary: this.iconLibrary, iconSize: "10px", iconPosition: "right" }))), this.expandedSnackbars.has(item.id) && item.history && (h("div", { class: "snackbar-history" }, item.history.map((historyEntry, i) => (h("div", { class: "history-item", key: i }, h("span", { class: "history-time" }, new Date(historyEntry.timestamp).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })), h("span", { class: "history-msg" }, historyEntry.message)))))), item.html ? (h("div", { class: "snackbar-message", innerHTML: sanitizeHTML(item.message), role: "document" })) : item.slot ? (h("div", { class: "snackbar-slot-content" }, h("slot", { name: item.slot }))) : (h("p", { class: "snackbar-message", "aria-label": `Message: ${item.message}` }, item.message))), item.closable !== false && (h("ui-button", { variant: "ghost", size: "sm", iconOnly: true, icon: "x", iconLibrary: this.iconLibrary, iconSize: "1.2em", onButtonClick: () => this.handleCloseClick(item.id), ariaLabel: "Close snackbar", class: "snackbar-close" }))), item.input && (h("div", { class: "snackbar-quick-input" }, h("ui-input", { type: item.input.type || 'text', placeholder: item.input.placeholder, onInputKeydown: (e) => {
                    if (e.detail.key === 'Enter')
                        this.handleInputSubmit(item.id, item, e.detail.target.value);
                }, autoFocus: true, size: "sm", fullWidth: true }))), (item.link || item.action || (item.actions && item.actions.length > 0)) && (h("div", { class: "snackbar-actions" }, item.action && (h("ui-button", { variant: "ghost", size: "sm", onButtonClick: () => this.handleActionClick(item.id, item), icon: item.action.icon, iconLibrary: this.iconLibrary, iconSize: "12px", label: item.action.label })), item.actions && item.actions.map(action => (h("ui-button", { variant: action.variant, size: "sm", onButtonClick: () => {
                    if (action.onClick)
                        action.onClick();
                    this.handleActionClick(item.id, item);
                },
                // class={`snackbar-action-btn variant-${action.variant || 'secondary'}`}
                icon: action.icon, iconLibrary: this.iconLibrary, iconSize: "12px", label: action.label }))), item.link && (h("a", { class: "snackbar-link", href: item.link.url, onClick: (e) => {
                    e.preventDefault();
                    this.handleLinkClick(item.id, item);
                } }, item.link.text)))), (item.duration ?? 0) > 0 && item.progress === 'ring' && (h("svg", { class: "snackbar-progress-ring", viewBox: "0 0 20 20", "aria-hidden": "true" }, h("circle", { cx: "10", cy: "10", r: "9" }))), (item.duration ?? 0) > 0 && item.progress !== 'ring' && (h("div", { class: `snackbar-progress ${item.type}`, "aria-hidden": "true" })), (item.duration ?? 0) > 0 && this.showCountdown && !item.sticky && (h("span", { class: "snackbar-countdown", "aria-hidden": "true" }, this.countdownSeconds[item.id] ?? Math.ceil((item.duration ?? 0) / 1000), "s")), item.history && item.history.length > 1 && (h("div", { class: "snackbar-history-indicator" }, h("ui-button", { variant: "ghost", size: "sm", onButtonClick: (e) => {
                    const originalEvent = e.detail; // Get the native event from CustomEvent detail
                    originalEvent.stopPropagation();
                    const itemEl = originalEvent.currentTarget.closest('.snackbar-item');
                    const isExpanded = itemEl?.classList.toggle('history-expanded');
                    const btn = originalEvent.currentTarget;
                    btn.label = isExpanded ? `Hide history` : `View previous history (${(item.history ?? []).length - 1})`;
                }, label: `View previous history (${(item.history ?? []).length - 1})` }), h("div", { class: "snackbar-history-list" }, item.history.slice(0, -1).reverse().map(historyEntry => (h("div", { class: "history-item" }, h("span", { class: "history-time" }, new Date(historyEntry.timestamp).toLocaleTimeString()), h("span", { class: "history-msg" }, historyEntry.message)))))))));
        }), this.enableSlots && h("slot", { key: '5a2fd1ebe5ba293ecf8dae3e83cbfe40ce25c995' })));
    }
    componentDidRender() {
        this.visibleSnackbars.forEach(item => {
            if (!this.animatedItems.has(item.id)) {
                this.animatedItems.add(item.id);
                setTimeout(() => {
                    const element = this.element.shadowRoot?.querySelector(`[data-snackbar-id="${item.id}"]`);
                    if (element)
                        element.classList.add('show');
                }, 10);
            }
        });
    }
    static get watchers() { return {
        "textDirection": [{
                "onTextDirectionChange": 0
            }],
        "position": [{
                "positionChanged": 0
            }],
        "maxVisible": [{
                "maxVisibleChanged": 0
            }],
        "stackMode": [{
                "stackModeChanged": 0
            }]
    }; }
};
Snackbar.style = snackbarCss();

export { Snackbar as ui_snackbar };
