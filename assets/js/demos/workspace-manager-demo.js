import { loadLayoutConfigs, applyLayoutConfig } from '../utils/layout-loader.js';

/**
 * Workspace Manager Demo (Zenith Layout Experience)
 * Showcases advanced layout management, persistence, and dynamic panel operations.
 */
export async function initWorkspaceManagerDemo() {
  const container = document.getElementById('workspace-manager');
  if (!container) return;

  container.innerHTML = `
    <div class="zenith-playground-header" style="
      margin-bottom: 24px;
      padding: 24px 28px;
      background: linear-gradient(135deg, #040a12 0%, #0a1628 60%, #0f1f36 100%);
      border-radius: 14px;
      border: 1px solid rgba(16,185,129,0.18);
      box-shadow: 0 0 0 1px rgba(16,185,129,0.07), 0 8px 32px rgba(0,0,0,0.5);
      color: white;
      position: relative;
      overflow: hidden;
    ">
      <div style="position:absolute;inset:0;background:radial-gradient(ellipse at 0% 50%, rgba(16,185,129,0.07) 0%, transparent 70%);pointer-events:none;"></div>
      <div style="display:flex;align-items:center;gap:16px;position:relative;">
        <div style="width:48px;height:48px;border-radius:12px;background:rgba(16,185,129,0.15);border:1px solid rgba(16,185,129,0.3);display:flex;align-items:center;justify-content:center;font-size:24px;flex-shrink:0;">🏗️</div>
        <div>
          <h2 style="margin:0;font-size:20px;font-weight:700;letter-spacing:-0.01em;display:flex;align-items:center;gap:12px;">
            Zenith Workspace Manager
            <span style="font-size:11px;background:linear-gradient(135deg,#059669,#10b981);padding:3px 10px;border-radius:20px;font-weight:600;letter-spacing:0.04em;">ENTERPRISE</span>
          </h2>
          <p style="margin:6px 0 0;opacity:0.55;font-size:14px;line-height:1.5;">Advanced multi-region layout engine — split, dock, persist, and drag panels across a fully dynamic workspace.</p>
        </div>
      </div>
    </div>

    <div class="playground-grid" style="display: grid; grid-template-columns: 260px 1fr; gap: 20px; min-height: 800px;">
      <!-- Sidebar Controls -->
      <div class="controls-column" style="display: flex; flex-direction: column; gap: 16px;">
        
        <!-- Templates Section -->
        <div class="control-card" style="background:#0a0f1a;border-radius:12px;padding:18px;border:1px solid rgba(16,185,129,0.14);box-shadow:0 4px 16px rgba(0,0,0,0.3);">
          <h4 style="margin:0 0 14px;font-size:11px;text-transform:uppercase;color:#475569;letter-spacing:0.08em;display:flex;align-items:center;gap:8px;">
            <span style="color:#10b981;">⬡</span> Layout Templates
          </h4>
          <div style="display: flex; flex-direction: column; gap: 8px;">
            <ui-button class="template-btn" data-layout="copilot" variant="outline">
              <strong style="display: block; font-size: 13px; ">GitHub Copilot</strong>
              <span style="font-size: 11px; ">Editor + AI Assistant (70:30)</span>
            </ui-button>
            <ui-button class="template-btn" data-layout="ide" variant="outline">
              <strong style="display: block; font-size: 13px; ">IDE Layout</strong>
              <span style="font-size: 11px; ">Explorer + Editor + Console</span>
            </ui-button>
            <ui-button class="template-btn" data-layout="dashboard" variant="outline">
              <strong style="display: block; font-size: 13px; ">Grid Dashboard</strong>
              <span style="font-size: 11px; ">Multi-widget visual layout</span>
            </ui-button>
            <ui-button class="template-btn" data-layout="data-center" variant="outline" color="warning" >
              <strong style="display: block; font-size: 13px; ">📊 Data Center</strong>
              <span style="font-size: 11px; color: #78716c;">Rich tables &amp; metrics demo</span>
            </ui-button>
            <ui-button class="template-btn" data-layout="containers" variant="outline">
              <strong style="display: block; font-size: 13px; ">Container Types</strong>
              <span style="font-size: 11px; ">Content, Nav, and Header-only</span>
            </ui-button>
          </div>
        </div>

        <!-- Component Actions -->
        <div class="control-card" style="background:#0a0f1a;border-radius:12px;padding:18px;border:1px solid #1e293b;box-shadow:0 4px 16px rgba(0,0,0,0.3);">
          <h4 style="margin:0 0 14px;font-size:11px;text-transform:uppercase;color:#475569;letter-spacing:0.08em;display:flex;align-items:center;gap:8px;">
            <span style="color:#10b981;">⚡</span> Quick Actions
          </h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
            <ui-button id="wm-add-panel-btn" variant="outline" color="primary" label="+ Panel"></ui-button>
            <ui-button id="wm-add-region-btn" variant="outline" color="success" label="+ Region"></ui-button>
            <ui-button id="wm-split-h-btn" variant="outline"label="Split H"></ui-button>
            <ui-button id="wm-split-v-btn" variant="outline"label="Split V"></ui-button>
            <ui-button id="wm-merge-btn" variant="outline" color="warning" label="Merge"></ui-button>
            <ui-button id="wm-export-btn" variant="outline"label="Export JSON"></ui-button>
            <ui-button id="wm-reset-btn" variant="outline" color="danger" label="Reset All" style="grid-column: span 2;"></ui-button>
          </div>
        </div>

        <!-- Status & Stats -->
        <div class="control-card" style="background:#060d18;border-radius:12px;padding:16px;border:1px solid #1e293b;">
          <h4 style="margin:0 0 12px;font-size:11px;text-transform:uppercase;color:#334155;letter-spacing:0.08em;">Workspace Status</h4>
          <div style="display: flex; flex-direction: column; gap: 10px;">
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:13px;color:#475569;">Active Regions</span>
              <span id="stat-regions" style="font-weight:700;color:#10b981;background:rgba(16,185,129,0.1);padding:2px 10px;border-radius:20px;font-size:13px;border:1px solid rgba(16,185,129,0.2);">0</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:13px;color:#475569;">Total Panels</span>
              <span id="stat-panels" style="font-weight:700;color:#10b981;background:rgba(16,185,129,0.1);padding:2px 10px;border-radius:20px;font-size:13px;border:1px solid rgba(16,185,129,0.2);">0</span>
            </div>
            <div style="display:flex;justify-content:space-between;align-items:center;">
              <span style="font-size:13px;color:#475569;">Persistence</span>
              <span style="font-size:11px;background:rgba(16,185,129,0.12);color:#10b981;padding:2px 8px;border-radius:20px;font-weight:700;border:1px solid rgba(16,185,129,0.2);">localStorage</span>
            </div>
          </div>
        </div>

        <div style="padding:14px 16px;background:rgba(16,185,129,0.05);border-radius:10px;border:1px solid rgba(16,185,129,0.15);">
          <p style="margin:0;font-size:12px;color:#475569;line-height:1.6;">
            <strong style="color:#10b981;">Tip:</strong> Drag tabs between regions. Resize via splitters. Use <code style="background:#0a0f1a;padding:1px 5px;border-radius:3px;font-size:11px;">state-key</code> prop to persist across reloads.
          </p>
        </div>
      </div>

      <!-- Main Canvas Area -->
      <div class="canvas-column" style="display: flex; flex-direction: column; gap: 16px;">
        <div style="border-radius:14px;border:1px solid rgba(16,185,129,0.15);overflow:hidden;box-shadow:0 0 0 1px rgba(16,185,129,0.06),0 12px 40px rgba(0,0,0,0.5);height:750px;position:relative;background:#060d18;">
          <ui-workspace-manager 
            id="zenith-wm-playground" 
            save-state="true"
            state-key="zenith-playground-v1" 
            direction="horizontal"
          ></ui-workspace-manager>
        </div>

        <!-- Data Output -->
        <div id="wm-json-output" style="display: none;">
          <div style="display:flex;justify-content:space-between;align-items:center;margin-bottom:12px;">
            <h4 style="margin:0;font-size:12px;color:#475569;text-transform:uppercase;letter-spacing:0.08em;">Exported Layout JSON</h4>
            <ui-button onclick="this.closest('#wm-json-output').style.display='none'" variant="ghost" color="danger" label="Close ×"></ui-button>
          </div>
          <pre id="wm-json-display" style="background:#040a12;color:#10b981;padding:20px;border-radius:12px;font-family:'Fira Code',monospace;font-size:12px;overflow-x:auto;max-height:400px;border:1px solid rgba(16,185,129,0.2);box-shadow:inset 0 2px 10px rgba(0,0,0,0.5);"></pre>
        </div>
      </div>
    </div>
  `;

  const wm = document.getElementById('zenith-wm-playground');
  const configs = await loadLayoutConfigs('/build/assets/layout-configs.json');

  // Handle template selection
  const templateBtns = container.querySelectorAll('.template-btn');
  templateBtns.forEach(btn => {
    btn.onclick = async () => {
      const layoutKey = btn.getAttribute('data-layout');
      if (configs && configs[layoutKey]) {
        // Visual feedback
       
        await applyLayoutConfig('zenith-wm-playground', configs[layoutKey]);
        updateStats();
      }
    };
  });

  // Action Buttons
  document.getElementById('wm-add-panel-btn').onclick = () => {
    const regions = wm.regions || [];
    if (regions.length === 0) {
      alert('Please add a region first or load a template.');
      return;
    }
    const targetRegion = regions[Math.floor(Math.random() * regions.length)].id;
    const panelId = `panel-${Date.now()}`;
    wm.addPanel({
      regionId: targetRegion,
      id: panelId,
      title: `Dynamic Panel`,
      icon: 'box',
      iconLibrary: 'lucide',
      html: `<div style="padding: 20px; text-align: center;"><h4>Custom Content</h4><p>Added to region: ${targetRegion}</p></div>`,
      closable: true,
    });
    updateStats();
  };

  document.getElementById('wm-add-region-btn').onclick = () => {
    const id = `region-${Date.now().toString().slice(-4)}`;
    wm.addRegion({
      id,
      title: `Region ${id.split('-')[1]}`,
      size: 25,
      collapsible: true,
    });
    updateStats();
  };

  document.getElementById('wm-split-h-btn').onclick = () => {
    const regions = wm.regions || [];
    if (regions.length === 0) return;
    const targetId = regions[0].id; // For demo, split first region
    wm.splitRegion(targetId, 'horizontal');
    updateStats();
  };

  document.getElementById('wm-split-v-btn').onclick = () => {
    const regions = wm.regions || [];
    if (regions.length === 0) return;
    const targetId = regions[0].id;
    wm.splitRegion(targetId, 'vertical');
    updateStats();
  };

  document.getElementById('wm-merge-btn').onclick = () => {
    const regions = wm.regions || [];
    if (regions.length < 2) {
      alert('Need at least 2 regions to merge.');
      return;
    }
    const targetId = regions[0].id;
    const sourceId = regions[1].id;
    wm.mergeRegion(targetId, sourceId);
    updateStats();
  };

  document.getElementById('wm-reset-btn').onclick = () => {
    if (confirm('Are you sure you want to clear the entire workspace?')) {
      wm.clearAllRegions();
      localStorage.removeItem('zenith-playground-v1');
      updateStats();
    }
  };

  document.getElementById('wm-export-btn').onclick = async () => {
    const state = await wm.getLayoutState();
    const output = document.getElementById('wm-json-output');
    const display = document.getElementById('wm-json-display');
    output.style.display = 'block';
    display.textContent = JSON.stringify(state, null, 2);
    output.scrollIntoView({ behavior: 'smooth' });
  };

  // Stats Update
  function updateStats() {
    setTimeout(() => {
      const regionCount = wm.regions ? wm.regions.length : 0;
      let panelCount = 0;
      // Note: This assumes wm exposes regions with their panels for counting,
      // or we can count via the DOM if needed. For now, we'll try to estimate or get from state.
      document.getElementById('stat-regions').textContent = regionCount;
      wm.getLayoutState().then(state => {
        let count = 0;
        if (state.regions) {
          state.regions.forEach(r => (count += r.panels ? r.panels.length : 0));
        }
        document.getElementById('stat-panels').textContent = count;
      });
    }, 200);
  }

  // Initial Load - Try to restore or load default
  setTimeout(() => {
    const saved = localStorage.getItem('zenith-playground-v1');
    if (!saved && configs && configs.copilot) {
      applyLayoutConfig('zenith-wm-playground', configs.copilot);
    }
    updateStats();
  }, 500);
}
