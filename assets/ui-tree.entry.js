import { r as registerInstance, c as createEvent, a as getElement, h, H as Host } from './index-DUsoYu9r.js';

const treeCss = () => `@charset "UTF-8";.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;font-family:-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;width:100%;--tree-bg:var(--bg-primary, #ffffff);--tree-text:var(--text-primary, #1f2937);--tree-text-muted:var(--color-primary, #6b7280);--tree-border-color:var(--border-default, #e5e7eb);--tree-primary:var(--color-success, #3dcd58);--tree-primary-50:rgba(var(--color-success-rgb, 61, 205, 88), 0.08);--tree-primary-100:rgba(var(--color-success-rgb, 61, 205, 88), 0.15);--tree-primary-200:rgba(var(--color-success-rgb, 61, 205, 88), 0.25);--tree-muted:var(--color-primary, #9ca3af);--tree-node-hover-bg:rgba(0, 0, 0, 0.02);--tree-line-color-default:rgba(0, 0, 0, 0.15);--tree-error:var(--color-danger, #ef4444);--tree-info:var(--color-primary, #10b981);--tree-success:var(--color-success, #10b981);--tree-warning:var(--color-warning, #f59e0b)}.tree-container{width:100%;background:var(--tree-bg);border-radius:8px;overflow:visible;}.tree-container.tree-theme-dark{--tree-bg:var(--bg-primary, #1f2937);--tree-text:var(--bg-primary, #f3f4f6);--tree-text-muted:var(--color-primary, #9ca3af);--tree-border-color:var(--border-default, #374151);--tree-node-hover-bg:rgba(255, 255, 255, 0.05);--tree-line-color-default:rgba(255, 255, 255, 0.1);background:var(--tree-bg);color:var(--tree-text)}.tree-container.tree-variant-bordered{border:1px solid var(--tree-border-color)}.tree-container.tree-variant-rounded{border-radius:12px}.tree-container.tree-variant-rounded .tree-node{border-radius:8px}.tree-container.tree-variant-minimal{background:transparent}.tree-container.tree-variant-minimal .tree-node{background:transparent}.tree-container.tree-variant-minimal .tree-node:hover{background:rgba(0, 0, 0, 0.02)}.tree-container.tree-variant-glass{--tree-glass-bg:rgba(255, 255, 255, 0.1);--tree-glass-border:rgba(255, 255, 255, 0.2);--tree-glass-text:var(--text-primary, #111827);background:var(--tree-glass-bg);backdrop-filter:blur(12px);-webkit-backdrop-filter:blur(12px);border:1px solid var(--tree-glass-border);box-shadow:0 8px 32px 0 rgba(31, 38, 135, 0.1)}.tree-container.tree-variant-glass .tree-node{color:var(--tree-glass-text)}.tree-container.tree-variant-glass .tree-node:hover{background:rgba(255, 255, 255, 0.2)}.tree-container.tree-variant-glass .tree-node.tree-node-selected{background:var(--tree-primary-200)}.tree-container.tree-variant-glass .tree-search input{background:rgba(255, 255, 255, 0.2);border-color:rgba(255, 255, 255, 0.3);color:var(--tree-text)}.tree-container.tree-variant-glass .tree-search input::placeholder{color:var(--tree-text-muted)}.tree-container.tree-variant-glass .tree-line{background:var(--tree-line-color-default)}.tree-container.tree-glow{box-shadow:0 0 20px var(--tree-primary-200);border-color:var(--tree-primary-100)}.tree-theme-dark.tree-variant-glass{--tree-glass-bg:rgba(17, 24, 39, 0.4);--tree-glass-border:rgba(255, 255, 255, 0.1);--tree-glass-text:var(--tree-text);background:var(--tree-glass-bg);border:1px solid var(--tree-glass-border)}.tree-theme-dark.tree-variant-glass .tree-node{color:var(--tree-glass-text)}.tree-theme-dark.tree-variant-glass .tree-node:hover{background:rgba(255, 255, 255, 0.1)}.tree-theme-dark.tree-variant-glass .tree-search input{background:rgba(0, 0, 0, 0.2);border-color:var(--tree-glass-border)}.tree-theme-dark.tree-variant-glass .tree-line{background:var(--tree-glass-border)}.tree-search{position:relative;padding:16px;border-bottom:1px solid var(--tree-border-color)}.tree-search ui-icon{position:absolute;left:28px;top:50%;transform:translateY(-50%);color:var(--tree-muted);font-size:14px}.tree-search input{width:100%;padding:10px 12px 10px 36px;border:1px solid var(--tree-border-color);background:transparent;color:inherit;border-radius:6px;font-size:14px;outline:none;transition:all 0.2s}.tree-search input:focus{border-color:var(--tree-primary);box-shadow:0 0 0 3px var(--tree-primary-50)}.tree-search input::placeholder{color:var(--tree-muted)}.tree-theme-dark .tree-search input:focus{border-color:var(--tree-primary)}.tree-inner{position:relative}.tree-node{position:relative;display:block;width:100%}.tree-connector-harness-group{position:absolute;left:24px;top:0;width:var(--tree-indent-full, 100%);height:100%;pointer-events:none;z-index:1}.tree-v-line-container{position:absolute;left:0;top:0;width:100%;height:100%}.tree-hook-container{position:absolute;left:0;top:0;width:100%}.tree-connectors-svg{display:block;width:100%;height:100%;overflow:visible}.tree-connectors-svg path,.tree-connectors-svg line{transition:stroke 0.3s ease, stroke-width 0.3s ease, stroke-opacity 0.4s ease}.tree-connectors-svg .path-highlight{--line-color-final:var(--tree-primary) !important;stroke:var(--line-color-final) !important;stroke-opacity:1 !important;filter:drop-shadow(0 0 5px var(--tree-primary-400))}.tree-theme-dark .tree-line{--default-line-color:rgba(255, 255, 255, 0.1)}.tree-expand-icon{display:flex;align-items:center;justify-content:center;width:24px;height:24px;flex-shrink:0;color:var(--tree-text-muted);font-size:11px;cursor:pointer;z-index:2}.tree-expand-icon:hover{color:var(--tree-primary)}.tree-expand-icon{margin-right:8px}.tree-animated .tree-node-expanded .tree-expand-icon ui-icon{transform:rotate(0deg)}.tree-animated .tree-node-collapsed .tree-expand-icon ui-icon{transform:rotate(-90deg)}.tree-expand-spacer{width:24px;height:24px;flex-shrink:0;margin-right:8px}.tree-checkbox{display:flex;align-items:center;justify-content:center}.tree-checkbox input[type=checkbox]{width:18px;height:18px;cursor:pointer;accent-color:var(--tree-primary)}.tree-node-icon{display:flex;align-items:center;justify-content:center;width:20px;height:20px;flex-shrink:0;font-size:16px;color:var(--tree-primary)}.tree-node-icon.tree-node-icon-spacer{visibility:hidden}.tree-node-icon.tree-node-icon-default{color:var(--tree-text-muted)}.tree-theme-dark .tree-node-icon.tree-node-icon-default{color:var(--tree-text-muted)}.tree-node-content{display:flex;align-items:center;gap:8px;flex:1;min-width:0;position:relative;z-index:2;cursor:pointer;transition:background-color 0.2s ease}.tree-node-content:hover{background-color:var(--tree-node-hover-bg)}.tree-node-content .tree-node-text-group{display:flex;align-items:center;gap:8px;flex:1;min-width:0}.tree-node-content .tree-node-label{flex:1;overflow:hidden;text-overflow:ellipsis;white-space:nowrap;font-size:14px;color:var(--tree-text)}.tree-theme-dark .tree-node-label{color:var(--tree-text)}.tree-node-spinner{display:flex;align-items:center;color:var(--tree-primary)}.tree-node-actions{display:flex;align-items:center;gap:4px;opacity:0;transition:opacity 0.2s;pointer-events:none;margin-left:8px}.tree-node:hover .tree-node-actions{opacity:1;pointer-events:auto}.tree-action-btn{background:transparent;border:none;border-radius:50%;width:28px;height:28px;display:flex;align-items:center;justify-content:center;cursor:pointer;color:var(--tree-text-muted);transition:all 0.2s cubic-bezier(0.4, 0, 0.2, 1);padding:0;margin-left:2px}.tree-action-btn:hover{background:var(--tree-primary-100);color:var(--tree-primary);transform:scale(1.1);box-shadow:0 0 10px var(--tree-primary-50)}.tree-action-btn:active{transform:scale(0.95)}.tree-theme-dark .tree-action-btn{color:var(--tree-text-muted)}.tree-theme-dark .tree-action-btn:hover{background:var(--tree-node-hover-bg)}.tree-node-badge{padding:2px 8px;border-radius:12px;font-size:11px;font-weight:600;flex-shrink:0}.tree-node-badge.tree-node-badge-default{background:var(--tree-border-color);color:var(--tree-text-muted)}.tree-node-badge.tree-node-badge-primary{background:var(--tree-primary-100);color:var(--tree-primary)}.tree-node-badge.tree-node-badge-secondary{background:var(--tree-border-color);color:var(--tree-text-muted)}.tree-node-badge.tree-node-badge-success{background:var(--tree-primary-100);color:var(--tree-success)}.tree-node-badge.tree-node-badge-danger{background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.1);color:var(--tree-error)}.tree-node-badge.tree-node-badge-warning{background:rgba(var(--color-warning-rgb, 245, 158, 11), 0.1);color:var(--color-warning, #f59e0b)}.tree-node-badge.tree-node-badge-info{background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);color:var(--tree-info)}.tree-node-counter{display:flex;align-items:center;justify-content:center;min-width:22px;height:22px;padding:0 6px;background:var(--tree-primary);color:var(--tree-bg);border-radius:11px;font-size:11px;font-weight:600;flex-shrink:0}.tree-children{overflow:hidden}.tree-animated .tree-children{animation:slideDown 0.2s ease-out}@keyframes slideDown{from{opacity:0;transform:translateY(-5px)}to{opacity:1;transform:translateY(0)}}.tree-empty{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:60px 20px;color:var(--tree-text-muted)}.tree-empty i{font-size:48px;margin-bottom:12px;opacity:0.5}.tree-empty p{margin:0;font-size:14px}.tree-orientation-horizontal .tree-content{overflow-x:auto}.tree-orientation-horizontal .tree-node-wrapper{display:flex}.tree-orientation-horizontal .tree-children{display:flex;flex-direction:column;margin-left:24px;padding-left:24px;border-left:1px solid var(--tree-border-color)}.tree-orientation-horizontal .tree-node{padding-left:0}.tree-layout-org-chart .tree-content{display:flex;justify-content:center;padding:60px 40px;overflow:auto;min-height:400px}.tree-layout-org-chart .tree-node-wrapper{display:flex;flex-direction:column;align-items:center;position:relative;padding:20px 0 0 0;transition:all 0.3s ease}.tree-layout-org-chart .tree-node-wrapper::before,.tree-layout-org-chart .tree-node-wrapper::after{content:"";position:absolute;top:0;right:50%;width:50%;height:20px;border-top:var(--tree-line-width, 1px) solid var(--tree-line-color, rgba(0, 0, 0, 0.1))}.tree-layout-org-chart .tree-node-wrapper::after{right:auto;left:50%;border-left:var(--tree-line-width, 1px) solid var(--tree-line-color, rgba(0, 0, 0, 0.1))}.tree-layout-org-chart{}.tree-layout-org-chart .tree-content>.tree-node-wrapper::before,.tree-layout-org-chart .tree-content>.tree-node-wrapper::after{display:none !important}.tree-layout-org-chart .tree-content>.tree-node-wrapper{padding-top:0}.tree-layout-org-chart{}.tree-layout-org-chart .tree-node-wrapper:first-child::before{border:0 none}.tree-layout-org-chart .tree-node-wrapper:last-child::after{border:0 none}.tree-layout-org-chart .tree-node-wrapper:first-child:not(:only-child)::after{border-radius:12px 0 0 0}.tree-layout-org-chart .tree-node-wrapper:last-child:not(:only-child)::before{border-right:var(--tree-line-width, 1px) solid var(--tree-line-color, rgba(0, 0, 0, 0.1));border-radius:0 12px 0 0}.tree-layout-org-chart{}.tree-layout-org-chart .tree-node-wrapper:only-child::after{border-radius:0;border-left:var(--tree-line-width, 1px) solid var(--tree-line-color, rgba(0, 0, 0, 0.1))}.tree-layout-org-chart .tree-node-wrapper:only-child::before{display:none}.tree-layout-org-chart{}.tree-layout-org-chart .tree-node-branch>.tree-node::after{content:"";position:absolute;bottom:-20px;left:50%;width:1px;height:20px;background:var(--tree-line-color-default)}.tree-layout-org-chart .tree-node{border:1px solid var(--tree-border-color);background:var(--tree-bg);box-shadow:0 4px 12px var(--tree-primary-50);padding:12px 24px;min-width:160px;max-width:300px;justify-content:center;margin:0 15px;z-index:2;transition:all 0.3s cubic-bezier(0.4, 0, 0.2, 1);border-radius:10px}.tree-layout-org-chart .tree-node:hover{border-color:var(--tree-primary);box-shadow:0 12px 24px var(--tree-primary-100);transform:translateY(-4px)}.tree-layout-org-chart .tree-node.tree-node-selected{border-color:var(--tree-primary);background:var(--tree-primary-50)}.tree-layout-org-chart .tree-children{display:flex;flex-direction:row;justify-content:center;position:relative;padding-top:20px}.tree-layout-org-chart{}.tree-layout-org-chart.tree-theme-dark .tree-node{background:var(--tree-bg);border-color:var(--tree-border-color);box-shadow:0 4px 12px rgba(0, 0, 0, 0.2)}.tree-layout-org-chart.tree-theme-dark .tree-node-wrapper::before,.tree-layout-org-chart.tree-theme-dark .tree-node-wrapper::after{border-color:var(--tree-line-color-default)}.tree-layout-org-chart.tree-theme-dark .tree-node-branch>.tree-node::after{background:var(--tree-line-color-default)}.tree-hide-lines .tree-lines,.tree-hide-lines .tree-node-wrapper::before,.tree-hide-lines .tree-node-wrapper::after,.tree-hide-lines .tree-line-vertical::after,.tree-hide-lines .tree-node::after{display:none !important}.tree-variant-modern-green{--tree-bg:var(--bg-secondary, #0f172a);--tree-text:var(--bg-primary, #f8fafc);--tree-text-muted:var(--color-primary, #94a3b8);--tree-primary:var(--color-success, #10b981);--tree-line-color-default:var(--color-success, #10b981);background:var(--tree-bg);color:var(--tree-text);border:1px solid rgba(var(--color-success-rgb, 16, 185, 129), 0.2);box-shadow:0 4px 20px rgba(0, 0, 0, 0.4)}.tree-variant-modern-green .tree-node{color:var(--tree-text-muted);font-weight:500;letter-spacing:0.02em}.tree-variant-modern-green .tree-node:hover{background:var(--tree-primary-50);color:var(--tree-primary)}.tree-variant-modern-green .tree-node.tree-node-selected{background:var(--tree-primary-100);color:var(--tree-primary);border-left:2px solid var(--tree-primary)}.tree-variant-modern-green .tree-line{--default-line-color:var(--tree-primary);--line-width:2px;opacity:0.6}.tree-variant-modern-green .tree-line-curved{border-bottom-left-radius:14px}.tree-variant-modern-green .tree-search input{background:rgba(0, 0, 0, 0.3);border-color:var(--tree-primary-100);color:var(--tree-text)}.tree-variant-modern-green .tree-search input:focus{border-color:var(--tree-primary);box-shadow:0 0 0 3px var(--tree-primary-100)}.tree-variant-modern-green .tree-node-icon{color:var(--tree-primary)}.tree-variant-modern-green .tree-expand-icon{color:var(--tree-primary)}.tree-variant-modern-green .tree-expand-icon:hover{color:var(--tree-primary)}.tree-node-selected{border-top:0 none !important}.tree-node-selected::before,.tree-node-selected::after{border-top:0 none !important}.tree-node[draggable=true]{cursor:move}.tree-node:active{opacity:0.6}.tree-drop-indicator{height:2px;background:var(--tree-primary);border-radius:2px;margin:0 8px;box-shadow:0 0 6px var(--tree-primary-200);animation:pulseIndicator 0.5s ease infinite alternate}@keyframes pulseIndicator{from{opacity:0.7}to{opacity:1}}.tree-node.tree-drop-inside>.tree-node-content{outline:2px dashed var(--tree-primary);outline-offset:-2px;border-radius:6px;background:var(--tree-primary-50)}.tree-children-drop-target{background:var(--tree-primary-50);border-radius:6px}.tree-edit-input{flex:1;min-width:80px;padding:2px 8px;border:1.5px solid var(--tree-primary);border-radius:4px;font-size:13px;font-family:inherit;color:var(--tree-text);background:var(--tree-bg);outline:none;box-shadow:0 0 0 3px var(--tree-primary-50)}.tree-edit-input:focus{box-shadow:0 0 0 3px var(--tree-primary-100)}.tree-theme-dark .tree-edit-input{background:rgba(255, 255, 255, 0.05);color:var(--tree-text)}.tree-search-icon{position:absolute;left:28px;top:50%;transform:translateY(-50%);color:var(--tree-muted);pointer-events:none}.tree-search-clear{position:absolute;right:26px;top:50%;transform:translateY(-50%);background:none;border:none;cursor:pointer;color:var(--tree-text-muted);padding:4px;display:flex;align-items:center;border-radius:4px;transition:color 0.2s, background 0.2s}.tree-search-clear:hover{color:var(--tree-error);background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.08)}.tree-toolbar{display:flex;align-items:center;gap:4px;padding:6px 12px;border-bottom:1px solid var(--tree-border-color);background:rgba(0, 0, 0, 0.01)}.tree-theme-dark .tree-toolbar{background:rgba(255, 255, 255, 0.02)}.tree-toolbar-sep{width:1px;height:18px;background:var(--tree-border-color);margin:0 4px}.tree-toolbar-btn{display:flex;align-items:center;gap:5px;padding:5px 10px;border:1px solid var(--tree-border-color);border-radius:6px;background:var(--tree-bg);color:var(--tree-text-muted);font-size:12px;cursor:pointer;transition:all 0.15s;white-space:nowrap}.tree-toolbar-btn:hover:not(:disabled){background:var(--tree-primary-50);color:var(--tree-primary);border-color:var(--tree-primary)}.tree-toolbar-btn:disabled{opacity:0.4;cursor:not-allowed}.tree-context-menu{min-width:170px;background:var(--tree-bg);border:1px solid var(--tree-border-color);border-radius:10px;box-shadow:0 8px 32px rgba(0, 0, 0, 0.12), 0 2px 8px rgba(0, 0, 0, 0.06);padding:6px;z-index:9999;animation:contextMenuIn 0.12s cubic-bezier(0.4, 0, 0.2, 1);overflow:hidden}@keyframes contextMenuIn{from{opacity:0;transform:scale(0.95) translateY(-4px)}to{opacity:1;transform:scale(1) translateY(0)}}.tree-context-item{display:flex;align-items:center;gap:8px;padding:8px 12px;border-radius:6px;font-size:13px;color:var(--tree-text);cursor:pointer;transition:background 0.12s}.tree-context-item:hover{background:var(--tree-primary-50);color:var(--tree-primary)}.tree-context-item.disabled{opacity:0.4;pointer-events:none}.tree-context-item.tree-context-item-danger{color:var(--tree-error)}.tree-context-item.tree-context-item-danger:hover{background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.08);color:var(--tree-error)}.tree-context-separator{height:1px;background:var(--tree-border-color);margin:4px 6px}.tree-theme-dark .tree-context-menu{background:var(--bg-primary, #1f2937);border-color:var(--border-default, #374151);box-shadow:0 8px 32px rgba(0, 0, 0, 0.4)}.tree-node-avatar{width:24px;height:24px;flex-shrink:0;border-radius:50%;overflow:hidden;display:flex;align-items:center;justify-content:center}.tree-node-avatar img{width:100%;height:100%;object-fit:cover}.tree-node-avatar-initials{display:flex;align-items:center;justify-content:center;width:24px;height:24px;border-radius:50%;font-size:10px;font-weight:700;text-transform:uppercase;letter-spacing:0.5px;flex-shrink:0}.tree-node-avatar-initials.tree-node-avatar-primary{background:var(--tree-primary-100);color:var(--tree-primary)}.tree-node-avatar-initials.tree-node-avatar-success{background:rgba(var(--color-success-rgb, 16, 185, 129), 0.1);color:var(--tree-success)}.tree-node-avatar-initials.tree-node-avatar-danger{background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.1);color:var(--tree-error)}.tree-node-avatar-initials.tree-node-avatar-warning{background:rgba(var(--color-warning-rgb, 245, 158, 11), 0.1);color:var(--tree-warning)}.tree-node-avatar-initials.tree-node-avatar-info{background:rgba(var(--color-primary-rgb, 59, 130, 246), 0.1);color:var(--tree-info)}.tree-node-avatar-initials.tree-node-avatar-default{background:var(--tree-border-color);color:var(--tree-text-muted)}.tree-node-description{font-size:11px;color:var(--tree-text-muted);white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.tree-node-tag{padding:1px 7px;border-radius:12px;font-size:10px;font-weight:600;background:var(--tree-border-color);color:var(--tree-text-muted);white-space:nowrap;flex-shrink:0}.tree-node-lock{display:flex;align-items:center;color:var(--tree-text-muted);flex-shrink:0;margin-left:4px}.tree-action-danger:hover{color:var(--tree-error) !important;background:rgba(var(--color-danger-rgb, 239, 68, 68), 0.1) !important}.tree-action-warning:hover{color:var(--tree-warning) !important;background:rgba(var(--color-warning-rgb, 245, 158, 11), 0.1) !important}.tree-action-success:hover{color:var(--tree-success) !important;background:rgba(var(--color-success-rgb, 16, 185, 129), 0.1) !important}.tree-highlight{background:rgba(245, 200, 10, 0.35);color:inherit;border-radius:2px;padding:0 1px}.tree-variant-compact .tree-node-content{min-height:28px !important;font-size:12px}.tree-variant-compact .tree-expand-icon,.tree-variant-compact .tree-expand-spacer{width:18px;height:18px}.tree-variant-compact .tree-node-icon{width:16px;height:16px;font-size:13px}.tree-variant-directory{--tree-primary:var(--color-warning, #f59e0b)}.tree-variant-directory .tree-node-branch>.tree-node-content .tree-node-icon ui-icon{color:var(--color-warning, #f59e0b)}.tree-variant-directory .tree-node-leaf>.tree-node-content .tree-node-icon ui-icon{color:var(--color-primary, #60a5fa)}.tree-variant-directory .tree-node-selected>.tree-node-content{background:rgba(var(--color-warning-rgb, 245, 158, 11), 0.08)}.tree-variant-cards .tree-node-content{border:1px solid var(--tree-border-color);border-radius:10px;margin:3px 8px 3px 0;padding-right:12px !important;background:var(--tree-bg);box-shadow:0 1px 3px rgba(0, 0, 0, 0.04);transition:box-shadow 0.2s, border-color 0.2s}.tree-variant-cards .tree-node-content:hover{border-color:var(--tree-primary);box-shadow:0 4px 12px var(--tree-primary-50)}.tree-variant-cards .tree-node-selected>.tree-node-content{border-color:var(--tree-primary);background:var(--tree-primary-50);box-shadow:0 4px 12px var(--tree-primary-100)}.tree-variant-cards.tree-theme-dark .tree-node-content{background:rgba(255, 255, 255, 0.04);border-color:var(--tree-border-color);box-shadow:0 1px 3px rgba(0, 0, 0, 0.2)}.tree-variant-git-graph{--tree-git-lane-color:rgba(100, 116, 139, 0.45);--tree-git-commit-color:var(--tree-primary);--tree-git-commit-leaf-color:rgba(148, 163, 184, 0.85)}.tree-variant-git-graph .tree-connector-harness-group{display:none}.tree-variant-git-graph .tree-node-content{position:relative}.tree-variant-git-graph .tree-node-content::before,.tree-variant-git-graph .tree-node-content::after{content:"";position:absolute;pointer-events:none;z-index:1}.tree-variant-git-graph{}.tree-variant-git-graph .tree-node-content::before{left:calc(var(--depth, 0) * var(--tree-indent, 24px) + 12px);top:0;bottom:0;width:1.5px;background:var(--tree-git-lane-color)}.tree-variant-git-graph{}.tree-variant-git-graph .tree-node-content::after{left:calc(var(--depth, 0) * var(--tree-indent, 24px) + 8px);top:50%;width:9px;height:9px;transform:translateY(-50%);border-radius:50%;background:var(--tree-git-commit-color);box-shadow:0 0 0 2px var(--tree-bg)}.tree-variant-git-graph .tree-node-leaf>.tree-node-content::after{background:var(--tree-git-commit-leaf-color)}.tree-variant-git-graph .tree-node-selected>.tree-node-content::after{width:10px;height:10px;background:var(--tree-primary);box-shadow:0 0 0 2px var(--tree-bg), 0 0 0 6px var(--tree-primary-50)}.tree-variant-git-graph .tree-node:hover>.tree-node-content::before{background:color-mix(in srgb, var(--tree-primary) 35%, var(--tree-git-lane-color))}.tree-theme-dark.tree-variant-git-graph{--tree-git-lane-color:rgba(148, 163, 184, 0.35);--tree-git-commit-leaf-color:rgba(203, 213, 225, 0.85)}.tree-node-focused>.tree-node-content{outline:2px solid var(--tree-primary);outline-offset:-1px;border-radius:4px}.tree-content::-webkit-scrollbar{width:4px}.tree-content::-webkit-scrollbar-track{background:transparent}.tree-content::-webkit-scrollbar-thumb{background:var(--tree-border-color);border-radius:4px}.tree-theme-dark.tree-layout-org-chart .tree-node{background:var(--bg-primary, #1f2937);border-color:var(--border-default, #374151);color:var(--tree-text)}.tree-theme-dark.tree-layout-org-chart .tree-node:hover{border-color:var(--tree-primary)}.tree-node-sm>.tree-node-content{min-height:32px !important;font-size:12px}.tree-node-md>.tree-node-content{min-height:40px !important;font-size:14px}.tree-node-lg>.tree-node-content{min-height:48px !important;font-size:16px}.tree-node-primary>.tree-node-content .tree-node-label{color:var(--tree-primary)}.tree-node-success>.tree-node-content .tree-node-label{color:var(--tree-success)}.tree-node-danger>.tree-node-content .tree-node-label{color:var(--tree-error)}.tree-node-warning>.tree-node-content .tree-node-label{color:var(--tree-warning)}.tree-node-info>.tree-node-content .tree-node-label{color:var(--tree-info)}.tree-animated .tree-children{animation:treeSlideIn 0.18s cubic-bezier(0.4, 0, 0.2, 1)}@keyframes treeSlideIn{from{opacity:0;transform:translateY(-6px)}to{opacity:1;transform:translateY(0)}}`;

const Tree = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.nodeClick = createEvent(this, "nodeClick");
        this.nodeExpand = createEvent(this, "nodeExpand");
        this.nodeSelect = createEvent(this, "nodeSelect");
        this.nodeCheck = createEvent(this, "nodeCheck");
        this.nodeDragStart = createEvent(this, "nodeDragStart");
        this.nodeDrop = createEvent(this, "nodeDrop");
        this.treeChange = createEvent(this, "treeChange");
        this.nodeAction = createEvent(this, "nodeAction");
        this.nodeEdit = createEvent(this, "nodeEdit");
        this.nodeContextMenu = createEvent(this, "nodeContextMenu");
        this.nodeLazyLoad = createEvent(this, "nodeLazyLoad");
        this.nodeAdd = createEvent(this, "nodeAdd");
        this.nodeRemove = createEvent(this, "nodeRemove");
        this.nodeMove = createEvent(this, "nodeMove");
    }
    get el() { return getElement(this); }
    // ─── Props ───────────────────────────────────────────────────────────────────
    nodes = [];
    orientation = 'vertical';
    showLines = true;
    showIcons = true;
    expandable = true;
    selectable = false;
    multiSelect = false;
    checkboxes = false;
    checkboxSync = true;
    enableDrag = false;
    searchable = false;
    animated = true;
    indent = 24;
    nodeHeight = 40;
    expandAll = false;
    collapseAll = false;
    layout = 'tree';
    variant = 'default';
    size = 'md';
    theme = 'light';
    showGlow = false;
    connectorWidth = 1;
    connectorColor = '';
    connectorOpacity = 1;
    connectorShape = 'rounded';
    iconLibrary = 'lucide';
    inlineEdit = false;
    contextMenuEnabled = false;
    undoRedoEnabled = false;
    lazyLoad = false;
    virtualScroll = false;
    virtualScrollHeight = 400;
    showNodeActions = true;
    showAvatars = true;
    expandIconType = 'chevron';
    expandedIcon = '';
    collapsedIcon = '';
    expandIconSize = '14px';
    expandIconColor = '';
    // ─── State ───────────────────────────────────────────────────────────────────
    internalNodes = [];
    selectedNodes = [];
    searchTerm = '';
    draggedNode = null;
    focusedNodeId = null;
    editingNodeId = null;
    editingValue = '';
    contextMenuVisible = false;
    contextMenuNode = null;
    contextMenuX = 0;
    contextMenuY = 0;
    undoStack = [];
    redoStack = [];
    dragOverNodeId = null;
    dragPosition = 'inside';
    _selectionPathIds = new Set();
    // ─── Events ──────────────────────────────────────────────────────────────────
    nodeClick;
    nodeExpand;
    nodeSelect;
    nodeCheck;
    nodeDragStart;
    nodeDrop;
    treeChange;
    nodeAction;
    nodeEdit;
    nodeContextMenu;
    nodeLazyLoad;
    nodeAdd;
    nodeRemove;
    nodeMove;
    // ─── Lifecycle ───────────────────────────────────────────────────────────────
    componentWillLoad() {
        this.parseNodes();
        document.addEventListener('click', this.handleDocumentClick);
    }
    disconnectedCallback() {
        document.removeEventListener('click', this.handleDocumentClick);
    }
    // ─── Watchers ────────────────────────────────────────────────────────────────
    parseNodes() {
        let parsed = typeof this.nodes === 'string' ? JSON.parse(this.nodes) : this.nodes;
        if (this.expandAll)
            parsed = this._expandAllRecursive(parsed);
        else if (this.collapseAll)
            parsed = this._collapseAllRecursive(parsed);
        this.internalNodes = parsed;
    }
    // ─── PUBLIC METHODS ──────────────────────────────────────────────────────────
    async expandAllNodes() {
        this._saveUndo();
        this.internalNodes = this._expandAllRecursive(this.internalNodes);
    }
    async collapseAllNodes() {
        this._saveUndo();
        this.internalNodes = this._collapseAllRecursive(this.internalNodes);
    }
    async selectNode(id) {
        this.internalNodes = this._selectById(id, this.internalNodes);
    }
    async getNodePath(id) {
        return this._findPath(id, this.internalNodes) ?? [];
    }
    async getBreadcrumb(id) {
        const path = await this.getNodePath(id);
        return path.map(pid => {
            const n = this._findNode(pid, this.internalNodes);
            return { id: pid, label: n?.label ?? String(pid) };
        });
    }
    async updateNode(id, data) {
        this._saveUndo();
        this.internalNodes = this._updateData(id, data, this.internalNodes);
    }
    async scrollToNode(id) {
        const path = await this.getNodePath(id);
        if (path.length > 1)
            this.internalNodes = this._expandPath(path.slice(0, -1), this.internalNodes);
        setTimeout(() => {
            const nodeEl = this.el.querySelector(`[data-node-id="${id}"]`);
            nodeEl?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 60);
    }
    async expandByPath(path) {
        this.internalNodes = this._expandPath(path, this.internalNodes);
    }
    async selectByPath(path) {
        if (!path.length)
            return;
        this.internalNodes = this._expandPath(path.slice(0, -1), this.internalNodes);
        this.internalNodes = this._selectById(path[path.length - 1], this.internalNodes);
    }
    async getSelectedNodes() {
        return this._dfs(this.internalNodes).filter(n => this.selectedNodes.includes(n.id));
    }
    async dfsTraversal(startId, order = 'pre') {
        const roots = startId ? [this._findNode(startId, this.internalNodes)].filter((n) => n !== null) : this.internalNodes;
        return order === 'post' ? this._dfsPost(roots) : this._dfs(roots);
    }
    async bfsTraversal(startId) {
        const roots = startId ? [this._findNode(startId, this.internalNodes)].filter((n) => n !== null) : this.internalNodes;
        return this._bfs(roots);
    }
    async flattenTree(nodes = this.internalNodes) {
        const result = [];
        const walk = (nodes, parentId, depth, path) => {
            nodes.forEach((node, index) => {
                const { children, ...rest } = node;
                const np = [...path, node.id];
                result.push({ ...rest, parentId, depth, index, path: np, hasChildren: !!(children?.length) });
                if (node.expanded && children)
                    walk(children, node.id, depth + 1, np);
            });
        };
        walk(nodes, null, 0, []);
        return result;
    }
    async addNode(parentId, node) {
        this._saveUndo();
        this.internalNodes = parentId === null
            ? [...this.internalNodes, node]
            : this._addToParent(parentId, node, this.internalNodes);
        this.nodeAdd.emit({ parentId, node });
    }
    async removeNode(id) {
        this._saveUndo();
        const node = this._findNode(id, this.internalNodes);
        this.internalNodes = this._removeNode(id, this.internalNodes);
        if (node)
            this.nodeRemove.emit({ node });
    }
    async moveNode(nodeId, targetId, position) {
        this._saveUndo();
        this.internalNodes = this._moveNode(nodeId, targetId, position, this.internalNodes);
        this.nodeMove.emit({ nodeId, targetId, position });
    }
    async undo() {
        if (!this.undoStack.length)
            return;
        const prev = this.undoStack[this.undoStack.length - 1];
        this.redoStack = [...this.redoStack, JSON.stringify(this.internalNodes)];
        this.undoStack = this.undoStack.slice(0, -1);
        this.internalNodes = JSON.parse(prev);
    }
    async redo() {
        if (!this.redoStack.length)
            return;
        const next = this.redoStack[this.redoStack.length - 1];
        this.undoStack = [...this.undoStack, JSON.stringify(this.internalNodes)];
        this.redoStack = this.redoStack.slice(0, -1);
        this.internalNodes = JSON.parse(next);
    }
    async diffTrees(oldNodes, newNodes) {
        const oldFlat = new Map(this._dfs(oldNodes).map(n => [n.id, n]));
        const newFlat = new Map(this._dfs(newNodes).map(n => [n.id, n]));
        const added = [];
        const removed = [];
        const modified = [];
        newFlat.forEach((node, id) => {
            if (!oldFlat.has(id))
                added.push(node);
            else if (JSON.stringify(oldFlat.get(id)) !== JSON.stringify(node))
                modified.push({ id, oldNode: oldFlat.get(id), newNode: node });
        });
        oldFlat.forEach((node, id) => {
            if (!newFlat.has(id))
                removed.push(node);
        });
        return { added, removed, modified };
    }
    async getState() {
        const expanded = [];
        this._dfs(this.internalNodes).forEach(n => {
            if (n.expanded)
                expanded.push(n.id);
        });
        return { nodes: this.internalNodes, selectedNodes: this.selectedNodes, expandedNodes: expanded };
    }
    async restoreState(state) {
        this._saveUndo();
        this.internalNodes = state.nodes;
        this.selectedNodes = state.selectedNodes;
    }
    // ─── PRIVATE HELPERS ────────────────────────────────────────────────────────
    _saveUndo() {
        if (!this.undoRedoEnabled)
            return;
        this.undoStack = [...this.undoStack.slice(-49), JSON.stringify(this.internalNodes)];
        this.redoStack = [];
    }
    _expandAllRecursive(nodes) {
        return nodes.map(n => ({ ...n, expanded: true, children: n.children ? this._expandAllRecursive(n.children) : undefined }));
    }
    _collapseAllRecursive(nodes) {
        return nodes.map(n => ({ ...n, expanded: false, children: n.children ? this._collapseAllRecursive(n.children) : undefined }));
    }
    _findNode(id, nodes) {
        for (const n of nodes) {
            if (n.id === id)
                return n;
            if (n.children) {
                const f = this._findNode(id, n.children);
                if (f)
                    return f;
            }
        }
        return null;
    }
    _findPath(id, nodes, path = []) {
        for (const n of nodes) {
            const cur = [...path, n.id];
            if (n.id === id)
                return cur;
            if (n.children) {
                const f = this._findPath(id, n.children, cur);
                if (f)
                    return f;
            }
        }
        return null;
    }
    _expandPath(path, nodes) {
        return nodes.map(n => {
            if (path.includes(n.id))
                return { ...n, expanded: true, children: n.children ? this._expandPath(path, n.children) : undefined };
            if (n.children)
                return { ...n, children: this._expandPath(path, n.children) };
            return n;
        });
    }
    _selectById(id, nodes) {
        return nodes.map(n => {
            if (n.id === id) {
                const sel = !n.selected;
                if (this.multiSelect)
                    this.selectedNodes = sel ? [...this.selectedNodes, id] : this.selectedNodes.filter(s => s !== id);
                else
                    this.selectedNodes = sel ? [id] : [];
                this.nodeSelect.emit({ node: n, selected: sel });
                this.treeChange.emit({ nodes: this.internalNodes, selectedNodes: this.selectedNodes });
                return { ...n, selected: sel };
            }
            if (!this.multiSelect && n.selected && n.id !== id)
                return { ...n, selected: false, children: n.children ? this._selectById(id, n.children) : undefined };
            if (n.children)
                return { ...n, children: this._selectById(id, n.children) };
            return n;
        });
    }
    _updateData(id, data, nodes) {
        return nodes.map(n => {
            if (n.id === id)
                return { ...n, ...data };
            if (n.children)
                return { ...n, children: this._updateData(id, data, n.children) };
            return n;
        });
    }
    _addToParent(parentId, newNode, nodes) {
        return nodes.map(n => {
            if (n.id === parentId)
                return { ...n, expanded: true, isLeaf: false, children: [...(n.children || []), newNode] };
            if (n.children)
                return { ...n, children: this._addToParent(parentId, newNode, n.children) };
            return n;
        });
    }
    _removeNode(id, nodes) {
        return nodes.filter(n => n.id !== id).map(n => ({ ...n, children: n.children ? this._removeNode(id, n.children) : undefined }));
    }
    _moveNode(nodeId, targetId, position, nodes) {
        const nodeToMove = this._findNode(nodeId, nodes);
        if (!nodeToMove || nodeId === targetId)
            return nodes;
        const withoutNode = this._removeNode(nodeId, nodes);
        if (position === 'inside')
            return this._addToParent(targetId, nodeToMove, withoutNode);
        return this._insertRelative(nodeToMove, targetId, position, withoutNode);
    }
    _insertRelative(node, targetId, pos, nodes) {
        const result = [];
        for (const n of nodes) {
            if (n.id === targetId) {
                if (pos === 'before') {
                    result.push(node);
                    result.push(n);
                }
                else {
                    result.push(n);
                    result.push(node);
                }
            }
            else {
                result.push(n.children ? { ...n, children: this._insertRelative(node, targetId, pos, n.children) } : n);
            }
        }
        return result;
    }
    _dfs(nodes, result = []) {
        for (const n of nodes) {
            result.push(n);
            if (n.children)
                this._dfs(n.children, result);
        }
        return result;
    }
    _dfsPost(nodes, result = []) {
        for (const n of nodes) {
            if (n.children)
                this._dfsPost(n.children, result);
            result.push(n);
        }
        return result;
    }
    _bfs(roots) {
        const result = [];
        const queue = [...roots];
        while (queue.length) {
            const n = queue.shift();
            if (!n)
                break;
            result.push(n);
            if (n.children)
                queue.push(...n.children);
        }
        return result;
    }
    // Checkbox indeterminate sync
    _syncChildren(node, checked) {
        return { ...node, checked, indeterminate: false, children: node.children?.map(c => this._syncChildren(c, checked)) };
    }
    _syncParent(node) {
        if (!node.children?.length)
            return node;
        const kids = node.children.map(c => this._syncParent(c));
        const ck = kids.filter(c => c.checked && !c.indeterminate).length;
        const ind = kids.filter(c => c.indeterminate).length;
        const all = kids.length;
        return { ...node, children: kids, checked: ck === all, indeterminate: ck > 0 && ck < all || ind > 0 };
    }
    _applyCheckbox(targetId, checked, nodes) {
        return nodes.map(n => {
            if (n.id === targetId)
                return { ...this._syncChildren(n, checked), checked, indeterminate: false };
            if (n.children) {
                const updatedKids = this._applyCheckbox(targetId, checked, n.children);
                const updNode = { ...n, children: updatedKids };
                return this.checkboxSync ? this._syncParent(updNode) : updNode;
            }
            return n;
        });
    }
    _getSelectionPathIds() {
        const pathIds = new Set();
        const walk = (nodes, path) => {
            for (const n of nodes) {
                const p = [...path, n.id];
                if (this.selectedNodes.includes(n.id))
                    p.forEach(id => pathIds.add(id));
                if (n.children)
                    walk(n.children, p);
            }
        };
        walk(this.internalNodes, []);
        return pathIds;
    }
    _getVisibleNodes(nodes = this.internalNodes, result = []) {
        for (const n of nodes) {
            result.push(n);
            if (n.expanded && n.children)
                this._getVisibleNodes(n.children, result);
        }
        return result;
    }
    _findParent(id, nodes = this.internalNodes, parent = null) {
        for (const n of nodes) {
            if (n.id === id)
                return parent;
            if (n.children) {
                const f = this._findParent(id, n.children, n);
                if (f)
                    return f;
            }
        }
        return null;
    }
    _selectRange(startId, endId) {
        const vis = this._getVisibleNodes();
        const si = vis.findIndex(n => n.id === startId);
        const ei = vis.findIndex(n => n.id === endId);
        if (si === -1 || ei === -1)
            return this.internalNodes;
        const range = vis.slice(Math.min(si, ei), Math.max(si, ei) + 1).map(n => n.id);
        this.selectedNodes = Array.from(new Set([...this.selectedNodes, ...range]));
        return this._applySelection(this.internalNodes);
    }
    _applySelection(nodes) {
        return nodes.map(n => ({ ...n, selected: this.selectedNodes.includes(n.id), children: n.children ? this._applySelection(n.children) : undefined }));
    }
    _toggleNode(nodeId, nodes = this.internalNodes) {
        return nodes.map(n => {
            if (n.id === nodeId) {
                const newExp = !n.expanded;
                this.nodeExpand.emit({ node: n, expanded: newExp });
                if (newExp && this.lazyLoad && n.isLeaf === false && !n.children?.length) {
                    this.nodeLazyLoad.emit({ node: n });
                    return { ...n, expanded: newExp, loading: true };
                }
                return { ...n, expanded: newExp };
            }
            if (n.children)
                return { ...n, children: this._toggleNode(nodeId, n.children) };
            return n;
        });
    }
    // ─── EVENT HANDLERS ─────────────────────────────────────────────────────────
    handleNodeClick(node, path, event) {
        if (node.disabled)
            return;
        const canExpand = !!(node.children?.length) || (this.lazyLoad && node.isLeaf === false);
        if (this.expandable && canExpand)
            this.internalNodes = this._toggleNode(node.id);
        if (this.selectable) {
            if (this.multiSelect && event) {
                if (event.shiftKey && this.focusedNodeId)
                    this.internalNodes = this._selectRange(this.focusedNodeId, node.id);
                else if (event.ctrlKey || event.metaKey)
                    this.internalNodes = this._selectById(node.id, this.internalNodes);
                else {
                    this.selectedNodes = [node.id];
                    this.internalNodes = this._applySelection(this.internalNodes);
                }
            }
            else {
                this.internalNodes = this._selectById(node.id, this.internalNodes);
            }
        }
        this.focusedNodeId = node.id;
        this.nodeClick.emit({ node, path });
    }
    handleCheckboxChange(node, event) {
        const checked = event.detail.checked;
        if (this.checkboxSync)
            this.internalNodes = this._applyCheckbox(node.id, checked, this.internalNodes);
        else
            this.internalNodes = this._updateData(node.id, { checked }, this.internalNodes);
        const updated = this._findNode(node.id, this.internalNodes);
        this.nodeCheck.emit({ node: updated ?? node, checked, indeterminate: updated?.indeterminate ?? false });
        this.treeChange.emit({ nodes: this.internalNodes, selectedNodes: this.selectedNodes });
    }
    handleDragStart(node, event) {
        if (!this.enableDrag || node.disabled)
            return;
        this.draggedNode = node;
        event.dataTransfer.effectAllowed = 'move';
        event.dataTransfer.setData('text/plain', String(node.id));
        this.nodeDragStart.emit(node);
    }
    handleDragOver(targetNode, event) {
        if (!this.enableDrag)
            return;
        event.preventDefault();
        event.dataTransfer.dropEffect = 'move';
        this.dragOverNodeId = targetNode.id;
        const el = event.currentTarget;
        const rect = el.getBoundingClientRect();
        const pct = (event.clientY - rect.top) / rect.height;
        this.dragPosition = pct < 0.25 ? 'before' : pct > 0.75 ? 'after' : 'inside';
    }
    handleDragLeave(event) {
        const related = event.relatedTarget;
        if (!this.el.contains(related))
            this.dragOverNodeId = null;
    }
    handleDrop(targetNode, event) {
        if (!this.enableDrag || !this.draggedNode)
            return;
        event.preventDefault();
        const pos = this.dragPosition;
        const src = this.draggedNode;
        this.nodeDrop.emit({ draggedNode: src, targetNode, position: pos });
        if (src.id !== targetNode.id) {
            this._saveUndo();
            this.internalNodes = this._moveNode(src.id, targetNode.id, pos, this.internalNodes);
        }
        this.draggedNode = null;
        this.dragOverNodeId = null;
    }
    handleSearchInput(event) {
        this.searchTerm = event.detail.toLowerCase();
    }
    handleDocumentClick = () => {
        if (this.contextMenuVisible)
            this.contextMenuVisible = false;
    };
    handleContextMenu(node, event) {
        if (!this.contextMenuEnabled)
            return;
        event.preventDefault();
        event.stopPropagation();
        this.contextMenuNode = node;
        this.contextMenuX = event.clientX;
        this.contextMenuY = event.clientY;
        this.contextMenuVisible = true;
        this.nodeContextMenu.emit({ node, x: event.clientX, y: event.clientY });
    }
    startEditing(node) {
        this.editingNodeId = node.id;
        this.editingValue = node.label ?? '';
        setTimeout(() => {
            const input = this.el.querySelector('.tree-edit-input');
            if (input) {
                input.focus();
                input.select();
            }
        }, 40);
    }
    cancelEditing() { this.editingNodeId = null; this.editingValue = ''; }
    commitEditing(node) {
        const val = this.editingValue.trim();
        if (!val) {
            this.cancelEditing();
            return;
        }
        const old = node.label;
        this._saveUndo();
        this.internalNodes = this._updateData(node.id, { label: val }, this.internalNodes);
        this.nodeEdit.emit({ node, newLabel: val, oldLabel: old ?? '' });
        this.cancelEditing();
    }
    handleKeyDown = (event) => {
        const vis = this._getVisibleNodes();
        const ci = vis.findIndex(n => n.id === this.focusedNodeId);
        switch (event.key) {
            case 'ArrowDown':
                event.preventDefault();
                if (ci === -1 && vis.length)
                    this.focusedNodeId = vis[0].id;
                else if (ci < vis.length - 1)
                    this.focusedNodeId = vis[ci + 1].id;
                break;
            case 'ArrowUp':
                event.preventDefault();
                if (ci > 0)
                    this.focusedNodeId = vis[ci - 1].id;
                break;
            case 'ArrowRight': {
                event.preventDefault();
                const n = vis[ci];
                if (n?.children?.length && !n.expanded)
                    this.internalNodes = this._toggleNode(n.id);
                else if (n?.expanded && ci < vis.length - 1)
                    this.focusedNodeId = vis[ci + 1].id;
                break;
            }
            case 'ArrowLeft': {
                event.preventDefault();
                const n = vis[ci];
                if (n?.expanded && n.children?.length)
                    this.internalNodes = this._toggleNode(n.id);
                else {
                    const p = this._findParent(n?.id);
                    if (p)
                        this.focusedNodeId = p.id;
                }
                break;
            }
            case 'Enter':
            case ' ':
                event.preventDefault();
                if (vis[ci])
                    this.handleNodeClick(vis[ci], []);
                break;
            case 'F2':
                if (this.inlineEdit && this.focusedNodeId !== null) {
                    const n = this._findNode(this.focusedNodeId, this.internalNodes);
                    if (n && !n.disabled)
                        this.startEditing(n);
                }
                break;
            case 'Escape':
                this.cancelEditing();
                this.contextMenuVisible = false;
                break;
            case 'Home':
                event.preventDefault();
                if (vis.length)
                    this.focusedNodeId = vis[0].id;
                break;
            case 'End':
                event.preventDefault();
                if (vis.length)
                    this.focusedNodeId = vis[vis.length - 1].id;
                break;
            case 'z':
            case 'Z':
                if ((event.ctrlKey || event.metaKey) && this.undoRedoEnabled) {
                    event.preventDefault();
                    if (event.shiftKey)
                        this.redo();
                    else
                        this.undo();
                }
                break;
        }
    };
    // ─── FILTER / HIGHLIGHT ─────────────────────────────────────────────────────
    filterNodes(nodes) {
        if (!this.searchTerm)
            return nodes;
        return nodes.filter(n => {
            const match = (n.label ?? '').toLowerCase().includes(this.searchTerm);
            const childMatch = n.children && this.filterNodes(n.children).length > 0;
            return match || childMatch;
        }).map(n => ({ ...n, expanded: true, children: n.children ? this.filterNodes(n.children) : undefined }));
    }
    renderLabel(label) {
        if (!this.searchTerm || !label.toLowerCase().includes(this.searchTerm))
            return label;
        const lower = label.toLowerCase();
        const idx = lower.indexOf(this.searchTerm);
        return [
            label.substring(0, idx),
            h("mark", { class: "tree-highlight" }, label.substring(idx, idx + this.searchTerm.length)),
            label.substring(idx + this.searchTerm.length),
        ];
    }
    _renderExpandIcon(isExpanded, node) {
        let iconName = '';
        let style = {};
        const library = node.iconLibrary ?? this.iconLibrary;
        if (this.expandIconType === 'custom') {
            iconName = isExpanded ? (this.expandedIcon || 'chevron-down') : (this.collapsedIcon || 'chevron-right');
        }
        else {
            switch (this.expandIconType) {
                case 'plus-minus':
                    iconName = isExpanded ? 'minus' : 'plus';
                    break;
                case 'arrow':
                    iconName = isExpanded ? 'arrow-down' : 'arrow-right';
                    break;
                case 'caret':
                    iconName = isExpanded ? 'caret-down' : 'caret-right';
                    break;
                case 'chevron':
                default:
                    iconName = 'chevron-right';
                    style = { transform: `rotate(${isExpanded ? '90deg' : '0deg'})`, transition: 'transform 0.2s ease' };
                    break;
            }
        }
        if (this.expandIconColor) {
            style.color = this.expandIconColor;
        }
        return (h("div", { class: "tree-expand-icon", onClick: (e) => { e.stopPropagation(); this.internalNodes = this._toggleNode(node.id); } }, h("ui-icon", { name: iconName, library: library, size: this.expandIconSize, style: style })));
    }
    renderNode(node, level = 0, path = [], isLast = false, parentPath = [], index = 0, groupHasIcons = false) {
        const hasChildren = !!(node.children?.length);
        const canExpand = hasChildren || (this.lazyLoad && node.isLeaf === false);
        const isExpanded = !!node.expanded;
        const isSelected = node.selected || this.selectedNodes.includes(node.id);
        const isEditing = this.editingNodeId === node.id;
        const isDragOver = this.dragOverNodeId === node.id;
        const currentPath = [...path, node.id];
        const depth = level;
        const baseWidth = this.connectorWidth || 1.8;
        const selPathIds = this._selectionPathIds || new Set();
        // SVG connectors
        const connectors = [];
        if (this.showLines && this.layout === 'tree' && depth > 0) {
            const vLines = [];
            const hJunctions = [];
            for (let i = 0; i < depth; i++) {
                const segW = Math.max(0.6, baseWidth - i * 0.3);
                const lx = i * this.indent + 12;
                const isHL = selPathIds.has(currentPath[i + 1] ?? '');
                const color = node.connectorColor || this.connectorColor || 'var(--tree-line-color-default)';
                const opacity = this.connectorOpacity;
                const showV = i < depth - 1 ? !parentPath[i + 1] : !isLast;
                if (showV) {
                    vLines.push(h("line", { x1: lx, y1: "0", x2: lx, y2: "100%", stroke: color, "stroke-width": segW, "stroke-opacity": isHL ? 1 : opacity, class: isHL ? 'path-highlight' : '', "vector-effect": "non-scaling-stroke" }));
                }
                if (i === depth - 1) {
                    const cr = this.connectorShape === 'square' ? 0 : 8;
                    const hy = this.nodeHeight / 2;
                    const hx = (i + 1) * this.indent;
                    const pd = cr > 0 ? `M ${lx} 0 L ${lx} ${hy - cr} Q ${lx} ${hy} ${lx + cr} ${hy} L ${hx} ${hy}` : `M ${lx} 0 L ${lx} ${hy} L ${hx} ${hy}`;
                    hJunctions.push(h("path", { d: pd, fill: "none", stroke: color, "stroke-width": segW, "stroke-opacity": isHL ? 1 : opacity, "stroke-linecap": "round", class: isHL ? 'path-highlight' : '', "vector-effect": "non-scaling-stroke" }), h("circle", { cx: hx, cy: hy, r: "2.5", fill: color, opacity: isHL ? 1 : 0.8 }));
                }
            }
            connectors.push(h("div", { class: "tree-connector-harness-group", style: { '--tree-indent-full': `${depth * this.indent}px` } }, h("div", { class: "tree-v-line-container" }, h("svg", { class: "tree-connectors-svg", width: "100%", height: "100%", preserveAspectRatio: "none" }, vLines)), h("div", { class: "tree-hook-container", style: { height: `${this.nodeHeight}px` } }, h("svg", { class: "tree-connectors-svg", width: "100%", height: "100%", viewBox: `0 0 ${depth * this.indent} ${this.nodeHeight}`, preserveAspectRatio: "xMinYMin meet" }, hJunctions))));
        }
        const nodeIcon = node.icon ?? (this.showIcons ? (canExpand ? (isExpanded ? 'folder-open' : 'folder') : 'file-text') : null);
        const nodeClasses = {
            'tree-node': true,
            'tree-node-expanded': isExpanded,
            'tree-node-collapsed': !isExpanded,
            'tree-node-selected': isSelected,
            'tree-node-disabled': !!node.disabled,
            'tree-node-leaf': !canExpand,
            'tree-node-branch': canExpand,
            'tree-node-focused': this.focusedNodeId === node.id,
            'tree-node-editing': isEditing,
            'tree-node-loading': !!node.loading,
            'tree-node-drag-over': isDragOver,
            [`tree-drop-${this.dragPosition}`]: isDragOver,
            [`tree-node-${node.color ?? 'default'}`]: true,
            [`tree-node-${this.size}`]: true,
            'has-checkbox': this.checkboxes,
            'group-has-icons': groupHasIcons,
        };
        const ariaAttrs = {
            role: 'treeitem',
            'aria-expanded': canExpand ? String(isExpanded) : undefined,
            'aria-selected': String(isSelected),
            'aria-level': String(level + 1),
            'aria-disabled': node.disabled ? 'true' : undefined,
            tabindex: (this.focusedNodeId === node.id || (this.focusedNodeId === null && level === 0 && index === 0)) ? '0' : '-1',
        };
        const nodeContent = (h("div", { class: nodeClasses, key: node.id, "data-node-id": node.id, "data-depth": depth, style: { '--depth': String(depth) } }, this.layout === 'tree' && connectors, isDragOver && this.dragPosition === 'before' && h("div", { class: "tree-drop-indicator tree-drop-before-line" }), h("div", { class: "tree-node-content", style: this.layout === 'tree' ? { paddingLeft: `${(depth + 1) * this.indent}px`, minHeight: `${this.nodeHeight}px` } : { minHeight: `${this.nodeHeight}px` }, onClick: (e) => !isEditing && this.handleNodeClick(node, currentPath, e), onDblClick: () => this.inlineEdit && !node.disabled && this.startEditing(node), onContextMenu: (e) => this.handleContextMenu(node, e), draggable: this.enableDrag && !node.disabled, onDragStart: (e) => this.handleDragStart(node, e), onDragOver: (e) => this.handleDragOver(node, e), onDragLeave: (e) => this.handleDragLeave(e), onDrop: (e) => this.handleDrop(node, e), ...ariaAttrs }, this.expandable && canExpand
            ? this._renderExpandIcon(isExpanded, node)
            : h("div", { class: "tree-expand-spacer" }), this.checkboxes && (h("div", { class: "tree-checkbox" }, h("ui-checkbox", { checked: !!node.checked, disabled: !!node.disabled, indeterminate: !!node.indeterminate, onCheckboxChange: (e) => this.handleCheckboxChange(node, e), size: "sm" }))), this.showAvatars && (node.avatar || node.avatarInitials) && (h("div", { class: "tree-node-avatar" }, node.avatar
            ? h("img", { src: node.avatar, alt: node.label })
            : h("span", { class: `tree-node-avatar-initials tree-node-avatar-${node.color ?? 'primary'}` }, node.avatarInitials))), (nodeIcon || groupHasIcons) && (h("div", { class: `tree-node-icon${!nodeIcon ? ' tree-node-icon-spacer' : ''}` }, nodeIcon && !node.loading && (h("ui-icon", { name: nodeIcon, library: node.iconLibrary ?? this.iconLibrary, size: "16px", style: { color: node.color ? `var(--tree-${node.color})` : undefined } })), node.loading && h("ui-icon", { name: "loader-2", library: "lucide", spin: true, size: "16px" }))), h("div", { class: "tree-node-text-group" }, isEditing
            ? (h("ui-input", { class: "tree-edit-input", type: "text", value: this.editingValue, onInputChange: (e) => { this.editingValue = e.detail; }, onInputKeydown: (e) => {
                    if (e.detail.key === 'Enter')
                        this.commitEditing(node);
                    else if (e.detail.key === 'Escape')
                        this.cancelEditing();
                    e.detail.stopPropagation();
                }, onInputBlur: () => this.commitEditing(node), autoFocus: true, size: "sm", fullWidth: true }))
            : h("div", { class: "tree-node-label" }, this.renderLabel(node.label ?? '')), node.description && !isEditing && h("div", { class: "tree-node-description" }, node.description)), node.tag && h("div", { class: "tree-node-tag" }, node.tag), node.badge && h("div", { class: `tree-node-badge tree-node-badge-${node.color ?? 'primary'}` }, node.badge), node.counter !== undefined && h("div", { class: "tree-node-counter" }, node.counter), node.locked && (h("div", { class: "tree-node-lock", title: node.lockTooltip ?? 'Locked' }, h("ui-icon", { name: "lock", library: "fontawesome", size: "12px" }))), this.showNodeActions && (node.actions?.length ?? 0) > 0 && (h("div", { class: "tree-node-actions" }, node.actions.map((action) => (h("ui-button", { variant: "ghost", size: "sm", class: `tree-action-btn${action.color ? ` tree-action-${action.color}` : ''}`, icon: action.icon, iconLibrary: action.library ?? this.iconLibrary, iconSize: "13px", ariaLabel: action.tooltip, disabled: !!action.disabled, onClick: (e) => { e.stopPropagation(); this.nodeAction.emit({ node, action: String(action.id ?? '') }); } })))))), isDragOver && this.dragPosition === 'after' && h("div", { class: "tree-drop-indicator tree-drop-after-line" }), canExpand && isExpanded && this.layout === 'tree' && (h("div", { class: `tree-children${isDragOver && this.dragPosition === 'inside' ? ' tree-children-drop-target' : ''}` }, hasChildren && node.children.map((child, idx) => {
            const childHasIcons = node.children.some(c => c.icon || this.showIcons);
            return this.renderNode(child, level + 1, currentPath, idx === node.children.length - 1, [...parentPath, isLast], idx, childHasIcons);
        })))));
        if (this.layout === 'org-chart') {
            return (h("div", { class: "tree-node-wrapper" }, nodeContent, canExpand && isExpanded && (h("div", { class: "tree-children" }, hasChildren && node.children.map((child, idx) => {
                const childHasIcons = node.children.some(c => c.icon || this.showIcons);
                return this.renderNode(child, level + 1, currentPath, idx === node.children.length - 1, [...parentPath, isLast], idx, childHasIcons);
            })))));
        }
        return nodeContent;
    }
    // ─── CONTEXT MENU ───────────────────────────────────────────────────────────
    renderContextMenu() {
        if (!this.contextMenuEnabled || !this.contextMenuVisible || !this.contextMenuNode)
            return null;
        const n = this.contextMenuNode;
        return (h("div", { class: "tree-context-menu", style: { position: 'fixed', left: `${this.contextMenuX}px`, top: `${this.contextMenuY}px` }, onClick: (e) => e.stopPropagation() }, this.selectable && (h("div", { class: "tree-context-item", onClick: () => { this.handleNodeClick(n, []); this.contextMenuVisible = false; } }, h("ui-icon", { name: "check", library: "fontawesome", size: "13px" }), " Select")), this.expandable && (n.children?.length ?? 0) > 0 && (h("div", { class: "tree-context-item", onClick: () => { this.internalNodes = this._toggleNode(n.id); this.contextMenuVisible = false; } }, h("ui-icon", { name: n.expanded ? 'chevron-up' : 'chevron-down', library: "lucide", size: "13px" }), n.expanded ? 'Collapse' : 'Expand')), this.inlineEdit && !n.disabled && (h("div", { class: "tree-context-item", onClick: () => { this.startEditing(n); this.contextMenuVisible = false; } }, h("ui-icon", { name: "pen", library: "lucide", size: "13px" }), " Rename")), h("div", { class: "tree-context-separator" }), h("div", { class: "tree-context-item", onClick: () => { this.expandAllNodes(); this.contextMenuVisible = false; } }, "Expand All"), h("div", { class: "tree-context-item", onClick: () => { this.collapseAllNodes(); this.contextMenuVisible = false; } }, "Collapse All"), this.undoRedoEnabled && [
            h("div", { class: "tree-context-separator" }),
            h("div", { class: `tree-context-item${!this.undoStack.length ? ' disabled' : ''}`, onClick: () => { this.undo(); this.contextMenuVisible = false; } }, "Undo"),
            h("div", { class: "tree-context-item tree-context-item-danger", onClick: () => {
                    this._saveUndo();
                    const node = this._findNode(n.id, this.internalNodes);
                    this.internalNodes = this._removeNode(n.id, this.internalNodes);
                    if (node)
                        this.nodeRemove.emit({ node });
                    this.contextMenuVisible = false;
                } }, "Delete"),
        ]));
    }
    // ─── MAIN RENDER ────────────────────────────────────────────────────────────
    render() {
        this._selectionPathIds = this._getSelectionPathIds();
        const filtered = this.searchable ? this.filterNodes(this.internalNodes) : this.internalNodes;
        const topHasIcons = filtered.some(n => n.icon || this.showIcons);
        const cls = {
            'tree-container': true,
            [`tree-orientation-${this.orientation}`]: true,
            [`tree-layout-${this.layout}`]: true,
            [`tree-variant-${this.variant}`]: true,
            [`tree-theme-${this.theme}`]: true,
            'tree-animated': this.animated,
            'tree-show-lines': this.showLines,
            'tree-hide-lines': !this.showLines,
            'tree-selectable': this.selectable,
            'tree-glow': this.showGlow,
        };
        return (h(Host, { key: 'dae18b9d9751a023555e848bb0b5aaebdd235770', class: cls, style: { '--tree-indent': `${this.indent}px`, '--tree-node-height': `${this.nodeHeight}px` }, onKeyDown: this.handleKeyDown, tabIndex: 0 }, h("div", { key: '9b15d92f21722bcd345733cfa44206e3c83a2fa9', class: "tree-inner", role: "tree", "aria-multiselectable": this.multiSelect ? 'true' : 'false' }, this.searchable && (h("div", { key: 'be71bda4e65cfcf704616ef2ae563630bffde2fa', class: "tree-search" }, h("ui-icon", { key: '53d76e4229942408bf50ab0c72d3ce6d1811fbd2', name: "search", library: "fontawesome", size: "13px", class: "tree-search-icon" }), h("ui-input", { key: 'b8edf92c3dda73600fd0a653739aa1206be64698', type: "text", placeholder: "Search tree...", value: this.searchTerm, onInputChange: (e) => this.handleSearchInput(e), ariaLabel: "Search tree", size: "sm", fullWidth: true }), this.searchTerm && (h("ui-button", { key: '66800256ed8fc8139dab93bd920d25a2a6219cdf', variant: "ghost", size: "sm", class: "tree-search-clear", icon: "times", iconLibrary: "fontawesome", iconSize: "11px", ariaLabel: "Clear search", onClick: () => { this.searchTerm = ''; } })))), this.undoRedoEnabled && (h("div", { key: 'a391e1e016e422fbdd2781a09daf176bf8fe58df', class: "tree-toolbar" }, h("ui-button", { key: '73de8c1affc18220f94912f546c7e992d81850ed', variant: "ghost", size: "sm", icon: "undo", iconLibrary: "fontawesome", iconSize: "13px", label: "Undo", ariaLabel: "Undo (Ctrl+Z)", disabled: !this.undoStack.length, onClick: () => this.undo() }), h("ui-button", { key: '0aebc8cafd66fb273eb7e39b682a29a24f73bfcc', variant: "ghost", size: "sm", icon: "redo", iconLibrary: "fontawesome", iconSize: "13px", label: "Redo", ariaLabel: "Redo (Ctrl+Shift+Z)", disabled: !this.redoStack.length, onClick: () => this.redo() }), h("div", { key: '5bf0083e6ccd220d480a29f0fce27e220dba4231', class: "tree-toolbar-sep" }), h("ui-button", { key: '4aee1b4dfa0e8a99770e2ea55670cf17a3491bfb', variant: "ghost", size: "sm", icon: "expand", iconLibrary: "fontawesome", iconSize: "13px", ariaLabel: "Expand all", onClick: () => this.expandAllNodes() }), h("ui-button", { key: '31c8f23735e0aabb53bee60f63f823f0facbf4c2', variant: "ghost", size: "sm", icon: "compress", iconLibrary: "fontawesome", iconSize: "13px", ariaLabel: "Collapse all", onClick: () => this.collapseAllNodes() }))), h("div", { key: 'c635c7a4205a04d0fbb29bbbf666d82e3799e76e', class: "tree-content", style: this.virtualScroll ? { height: `${this.virtualScrollHeight}px`, overflowY: 'auto' } : {}, onScroll: () => this.virtualScroll && this.el.forceUpdate() }, this.virtualScroll && this.layout === 'tree' ? ((() => {
            const visibleNodes = this._getVisibleNodes(filtered);
            const scrollTop = this.el.shadowRoot?.querySelector('.tree-content')?.scrollTop || 0;
            const startIndex = Math.max(0, Math.floor(scrollTop / this.nodeHeight) - 2);
            const endIndex = Math.min(visibleNodes.length, startIndex + Math.ceil(this.virtualScrollHeight / this.nodeHeight) + 4);
            return (h("div", { class: "tree-virtual-scroller", style: { height: `${visibleNodes.length * this.nodeHeight}px`, position: 'relative' } }, h("div", { class: "tree-virtual-offset", style: { transform: `translateY(${startIndex * this.nodeHeight}px)` } }, visibleNodes.slice(startIndex, endIndex).map((node, _idx) => {
                const path = this._findPath(node.id, this.internalNodes) || [];
                const isLast = false; // Hard to determine in flat list without extra metadata
                return this.renderNode(node, path.length - 1, path.slice(0, -1), isLast, [], 0, false);
            }))));
        })()) : (filtered.length > 0
            ? filtered.map((node, idx) => this.renderNode(node, 0, [], idx === filtered.length - 1, [], idx, topHasIcons))
            : (h("div", { class: "tree-empty" }, h("ui-icon", { name: "folder-open", library: "fontawesome", size: "40px" }), h("p", null, this.searchTerm ? 'No results found' : 'No items')))))), this.renderContextMenu()));
    }
    static get watchers() { return {
        "nodes": [{
                "parseNodes": 0
            }],
        "expandAll": [{
                "parseNodes": 0
            }],
        "collapseAll": [{
                "parseNodes": 0
            }]
    }; }
};
Tree.style = treeCss();

export { Tree as ui_tree };
