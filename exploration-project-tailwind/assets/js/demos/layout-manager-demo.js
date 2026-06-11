// Layout Manager Component Demo
export function initLayoutManagerDemo() {
  const section = document.getElementById('layout-manager');
  if (!section) return;

  section.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
      <h2 style="margin: 0; display: flex; align-items: center; gap: 10px;">
        <ui-icon name="layout" library="lucide" size="24px"></ui-icon> Layout Manager
      </h2>
      <div style="display: flex; gap: 10px;">
        <ui-button onclick="showSimpleLayout()"
          style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 13px; cursor: pointer; font-weight: 600; box-shadow: 0 2px 8px rgba(102, 126, 234, 0.3); display: flex; align-items: center; gap: 6px;">
          <ui-icon name="rotate-ccw" library="lucide" size="14px"></ui-icon> Reset Layout
        </ui-button>
        <ui-button onclick="showSection('home')"
          style="background-color: #6b7280; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
          <ui-icon name="arrow-left" library="lucide" size="12px"></ui-icon> Back to Home
        </ui-button>
      </div>
    </div>
    <p>Advanced layout manager with drag-and-drop panels, splitters, and floating windows for creating complex application layouts.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showSimpleLayout()" variant="outline"><ui-icon name="gamepad-2" library="lucide" size="16px"></ui-icon> Playground</ui-button>
      <ui-button onclick="showComplexLayout()" variant="outline"><ui-icon name="settings-2" library="lucide" size="16px"></ui-icon> Complex Layout</ui-button>
      <ui-button onclick="showVSCodeLayout()" variant="outline"><ui-icon name="code-2" library="lucide" size="16px"></ui-icon> VS Code Style</ui-button>
      <ui-button onclick="showDashboardLayout()" variant="outline"><ui-icon name="bar-chart-2" library="lucide" size="16px"></ui-icon> Dashboard</ui-button>
      <ui-button onclick="showCopilotLayout()" variant="outline"><ui-icon name="bot" library="lucide" size="16px"></ui-icon> Copilot</ui-button>
      <ui-button onclick="showAPIReference()" variant="outline"><ui-icon name="book-open" library="lucide" size="16px"></ui-icon> API Reference</ui-button>
    </div>

    <div id="layoutManagerDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    showSimpleLayout();
  }, 100);
}

// Simple Layout Demo
window.showSimpleLayout = function () {
  const container = document.getElementById('layoutManagerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">📐</span>
        Layout Playground
      </h3>
      <p style="color: #6b7280;">A basic horizontal layout with two panels side by side.</p>
      
      <div style="margin-top: 30px; border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <layout-manager id="simpleLayoutManager" style="display: block; height: 400px;"></layout-manager>
      </div>

      <div style="margin-top: 20px; display: flex; gap: 10px;">
        <ui-button onclick="addPanelToSimple()" style="padding: 10px 16px; background-color: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 8px;">
          <ui-icon name="plus" library="lucide" size="16px"></ui-icon> Add Panel
        </ui-button>
        <ui-button onclick="saveSimpleLayout()" style="padding: 10px 16px; background-color: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 8px;">
          <ui-icon name="save" library="lucide" size="16px"></ui-icon> Save Layout
        </ui-button>
      </div>

      <div style="margin-top: 30px; background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #374151;">About This Layout</h4>
        <p style="color: #6b7280; margin: 10px 0;">This demonstrates a basic horizontal split layout with two panels. The layout manager provides:</p>
        <ul style="color: #6b7280; line-height: 1.8;">
          <li><strong>Panel Management:</strong> Add, remove, and organize panels</li>
          <li><strong>Resizable Splits:</strong> Drag the splitter to resize panels</li>
          <li><strong>State Persistence:</strong> Save and restore layout configurations</li>
          <li><strong>Flexible Structure:</strong> Support for nested layouts</li>
        </ul>
      </div>
    </div>
  `;

  setTimeout(() => {
    const manager = document.getElementById('simpleLayoutManager');
    if (manager) {
      const initialLayout = {
        root: {
          id: 'root',
          type: 'horizontal',
          children: [
            {
              type: 'panel',
              id: 'panel-1',
              title: 'Panel 1',
              icon: 'layout-panel-left',
              content: '<div style="padding: 20px;"><h3>Panel 1</h3><p>This is the first panel. You can add any content here.</p></div>',
              closable: true,
            },
            {
              type: 'panel',
              id: 'panel-2',
              title: 'Panel 2',
              icon: 'layout-panel-top',
              content: '<div style="padding: 20px;"><h3>Panel 2</h3><p>This is the second panel with different content.</p></div>',
              closable: true,
            },
          ],
        },
        floating: [],
      };

      manager.initialLayout = JSON.stringify(initialLayout);
    }
  }, 200);
};

window.addPanelToSimple = async function () {
  const manager = document.getElementById('simpleLayoutManager');
  if (manager) {
    const panelCount = Math.floor(Math.random() * 1000);
    await manager.addPanel({
      title: `New Panel ${panelCount}`,
      icon: 'plus-square',
      content: `<div style="padding: 20px;"><h3>New Panel ${panelCount}</h3><p>Dynamically added panel!</p></div>`,
      closable: true,
    });
  }
};

window.saveSimpleLayout = async function () {
  const manager = document.getElementById('simpleLayoutManager');
  if (manager) {
    const layout = await manager.saveLayout();
    console.log('Saved Layout:', layout);
    alert('Layout saved to console! Check the browser console.');
  }
};

// Complex Layout Demo
window.showComplexLayout = function () {
  const container = document.getElementById('layoutManagerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
        <ui-icon name="settings-2" library="lucide" size="24px"></ui-icon> Complex Nested Layout
      </h3>
      <p style="color: #6b7280;">A sophisticated layout with nested horizontal and vertical splits.</p>
      
      <div style="margin-top: 30px; border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <layout-manager id="complexLayoutManager" style="display: block; height: 500px;"></layout-manager>
      </div>

      <div style="margin-top: 30px; background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #374151;">Complex Layout Features</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 15px;">
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="git-fork" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">Nested Layouts</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Combine horizontal and vertical splits</p>
          </div>
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="move-horizontal" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">Resizable Splitters</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Drag to resize any section</p>
          </div>
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="layout-dashboard" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">Panel Management</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Add, remove, and organize panels</p>
          </div>
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="save" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">State Management</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Save and restore configurations</p>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(async () => {
    const manager = document.getElementById('complexLayoutManager');
    if (manager) {
      const complexLayout = {
        root: {
          id: 'root',
          type: 'horizontal',
          children: [
            {
              type: 'panel',
              id: 'sidebar',
              title: 'Sidebar',
              icon: 'sidebar',
              content:
                '<div style="padding: 20px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; height: 100%;"><h3>Sidebar</h3><p>Navigation and tools</p></div>',
              closable: false,
            },
            {
              id: 'main',
              type: 'vertical',
              children: [
                {
                  type: 'panel',
                  id: 'header',
                  title: 'Header',
                  icon: 'layout-template',
                  content: '<div style="padding: 20px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white;"><h3>Header Section</h3></div>',
                  closable: true,
                },
                {
                  id: 'content-area',
                  type: 'horizontal',
                  children: [
                    {
                      type: 'panel',
                      id: 'editor',
                      title: 'Main Content',
                      icon: 'file-text',
                      content: '<div style="padding: 20px; height: 100%;"><h3>Main Content Area</h3><p>Your primary content goes here.</p></div>',
                      closable: true,
                    },
                    {
                      type: 'panel',
                      id: 'preview',
                      title: 'Preview',
                      icon: 'eye',
                      content: '<div style="padding: 20px; background:var(--accent-green-soft,#f0fdf4); height: 100%;"><h3>Preview Panel</h3><p>Live preview of changes</p></div>',
                      closable: true,
                    },
                  ],
                },
              ],
            },
          ],
        },
        floating: [],
      };

      try {
        await manager.loadLayout(JSON.stringify(complexLayout));
      } catch (e) {
        console.error('Failed to load complex layout:', e);
        manager.initialLayout = JSON.stringify(complexLayout);
      }
    }
  }, 200);
};

// VS Code Style Layout Demo
window.showVSCodeLayout = function () {
  const container = document.getElementById('layoutManagerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 20px;">
        <div>
          <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
            <ui-icon name="code-2" library="lucide" size="24px"></ui-icon> Advanced VS Code Layout
          </h3>
          <p style="color: #6b7280;">Interactive docking with Activity Bar, root-edge sidebars, and tab-merging.</p>
        </div>
        <div style="display: flex; gap: 10px; align-items: center;">
            <ui-button onclick="addGenericPanel()" style="padding: 8px 12px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer; font-size: 12px; font-weight: 600;">➕ Create New Panel</ui-button>
            <div style="background: #10b98115; padding: 10px; border-radius: 8px; border: 1px dashed #10b981;">
               <span style="font-size: 12px; color: #10b981; font-weight: bold;">PRO TIP: Drag icons or reorder tabs!</span>
            </div>
        </div>
      </div>
      
      <div style="display: flex; height: 600px; border: 1px solid #2d2d2d; border-radius: 8px; overflow: hidden; background: #1e1e1e;">
        <!-- Activity Bar -->
        <div class="demo-activity-bar" style="width: 50px; background: #333333; display: flex; flex-direction: column; align-items: center; padding-top: 15px; border-right: 1px solid #252526; user-select: none;">
            <div class="demo-activity-icon" draggable="true" data-type="Explorer" style="cursor: grab; margin-bottom: 25px; display:flex; justify-content:center; align-items:center; width:30px; height:30px; color: #858585; transition: color 0.2s;" title="Explorer"><ui-icon name="folder" library="lucide" size="20px"></ui-icon></div>
            <div class="demo-activity-icon" draggable="true" data-type="Search" style="cursor: grab; margin-bottom: 25px; display:flex; justify-content:center; align-items:center; width:30px; height:30px; color: #858585; transition: color 0.2s;" title="Search"><ui-icon name="search" library="lucide" size="20px"></ui-icon></div>
            <div class="demo-activity-icon" draggable="true" data-type="Source Control" style="cursor: grab; margin-bottom: 25px; display:flex; justify-content:center; align-items:center; width:30px; height:30px; color: #858585; transition: color 0.2s;" title="Source Control"><ui-icon name="git-branch" library="lucide" size="20px"></ui-icon></div>
            <div class="demo-activity-icon" draggable="true" data-type="Debug" style="cursor: grab; margin-bottom: 25px; display:flex; justify-content:center; align-items:center; width:30px; height:30px; color: #858585; transition: color 0.2s;" title="Run & Debug"><ui-icon name="bug" library="lucide" size="20px"></ui-icon></div>
            <div class="demo-activity-icon" draggable="true" data-type="Extensions" style="cursor: grab; margin-bottom: 25px; display:flex; justify-content:center; align-items:center; width:30px; height:30px; color: #858585; transition: color 0.2s;" title="Extensions"><ui-icon name="puzzle" library="lucide" size="20px"></ui-icon></div>
            <div class="demo-activity-icon" draggable="true" data-type="Terminal" style="cursor: grab; margin-bottom: 25px; display:flex; justify-content:center; align-items:center; width:30px; height:30px; color: #858585; transition: color 0.2s;" title="Terminal"><ui-icon name="terminal" library="lucide" size="20px"></ui-icon></div>
            <div class="demo-activity-icon" draggable="true" data-type="Output" style="cursor: grab; margin-bottom: 25px; display:flex; justify-content:center; align-items:center; width:30px; height:30px; color: #858585; transition: color 0.2s;" title="Output"><ui-icon name="clipboard-list" library="lucide" size="20px"></ui-icon></div>
            <div style="flex: 1;"></div>
            <div class="demo-activity-icon" style="margin-bottom: 15px; display:flex; justify-content:center; align-items:center; width:30px; height:30px; color: #858585; cursor: pointer;"><ui-icon name="settings" library="lucide" size="20px"></ui-icon></div>
        </div>

        <layout-manager id="vscodeLayoutManager" style="flex: 1;"></layout-manager>
      </div>
      ...
  `;

  window.addGenericPanel = async function () {
    const manager = document.getElementById('vscodeLayoutManager');
    if (manager) {
      const id = `p_${Date.now()}`;
      await manager.addPanel({
        id,
        title: `Dashboard ${Math.floor(Math.random() * 100)}`,
        content: '<div style="padding: 20px;">New panel added programmatically! You can drag its tab to move it.</div>',
      });
    }
  };

  setTimeout(async () => {
    const manager = document.getElementById('vscodeLayoutManager');
    if (manager) {
      const initialLayout = {
        version: 1,
        root: {
          id: 'root-vscode',
          type: 'vertical',
          children: [
            {
              type: 'horizontal',
              size: 70,
              children: [
                {
                  type: 'panel',
                  id: 'explorer',
                  title: 'Explorer',
                  icon: 'folder',
                  content: '<div style="padding: 15px; color: #858585; font-family: monospace;">src/app.tsx<br>assets/logo.png</div>',
                  size: 20,
                },
                {
                  type: 'tabs',
                  id: 'main-editor-tabs',
                  size: 80,
                  children: [
                    {
                      type: 'panel',
                      id: 'editor-1',
                      title: 'main.ts',
                      icon: 'file-code',
                      content: '<div style="padding: 20px; color: #dcdcaa; font-family: monospace;">console.log("Hello VS Code Docking!");</div>',
                    },
                    {
                      type: 'panel',
                      id: 'editor-2',
                      title: 'index.html',
                      icon: 'file-code',
                      content: '<div style="padding: 20px; color: #dcdcaa; font-family: monospace;">&lt;html&gt;Hello&lt;/html&gt;</div>',
                    },
                  ],
                },
              ],
            },
            {
              type: 'panel',
              id: 'terminal',
              title: 'Terminal',
              icon: 'terminal',
              size: 30,
              content: '<div style="padding: 15px; color: #10b981; font-family: monospace; background: #000; height: 100%;">$ npm start</div>',
            },
          ],
        },
        floating: [],
      };

      try {
        await manager.loadLayout(JSON.stringify(initialLayout));
      } catch (e) {
        manager.initialLayout = JSON.stringify(initialLayout);
      }

      // Initialize Activity Bar Dragging
      const icons = container.querySelectorAll('.demo-activity-icon');
      icons.forEach(icon => {
        icon.addEventListener('dragstart', e => {
          const type = icon.getAttribute('data-type');
          if (!type) return;
          if (window.LayoutEventBus) {
            window.LayoutEventBus.emit('panel:dragstart', {
              panelId: `new:${type}`,
              x: e.clientX,
              y: e.clientY,
            });
          }
        });
        icon.addEventListener('mouseenter', () => (icon.style.color = '#fff'));
        icon.addEventListener('mouseleave', () => (icon.style.color = '#858585'));
      });
    }
  }, 200);
};

// Dashboard Layout Demo
window.showDashboardLayout = function () {
  const container = document.getElementById('layoutManagerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
        <ui-icon name="bar-chart-2" library="lucide" size="24px"></ui-icon> Dashboard Layout
      </h3>
      <p style="color: #6b7280;">A dashboard-style layout perfect for data visualization and monitoring applications.</p>
      
      <div style="margin-top: 30px; border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <layout-manager id="dashboardLayoutManager" style="display: block; height: 500px;"></layout-manager>
      </div>

      <div style="margin-top: 30px; background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #374151;">Dashboard Use Cases</h4>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px; margin-top: 15px;">
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="trending-up" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">Analytics</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Real-time metrics and charts</p>
          </div>
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="target" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">KPI Tracking</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Monitor key performance indicators</p>
          </div>
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="bell" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">Notifications</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Real-time alerts and updates</p>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const manager = document.getElementById('dashboardLayoutManager');
    if (manager) {
      const dashboardLayout = {
        root: {
          id: 'root',
          type: 'vertical',
          children: [
            {
              id: 'top-section',
              type: 'horizontal',
              children: [
                {
                  type: 'panel',
                  id: 'metrics-1',
                  title: 'Total Users',
                  icon: 'bar-chart-2',
                  content: `<div style="padding: 30px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <div style="font-size: 48px; font-weight: bold;">24,537</div>
                    <div style="margin-top: 10px; opacity: 0.9;">+12.5% from last month</div>
                  </div>`,
                  closable: true,
                },
                {
                  type: 'panel',
                  id: 'metrics-2',
                  title: 'Revenue',
                  icon: 'dollar-sign',
                  content: `<div style="padding: 30px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <div style="font-size: 48px; font-weight: bold;">$127.4K</div>
                    <div style="margin-top: 10px; opacity: 0.9;">+8.3% from last month</div>
                  </div>`,
                  closable: true,
                },
                {
                  type: 'panel',
                  id: 'metrics-3',
                  title: 'Performance',
                  icon: 'zap',
                  content: `<div style="padding: 30px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: white; height: 100%; display: flex; flex-direction: column; justify-content: center; align-items: center;">
                    <div style="font-size: 48px; font-weight: bold;">98.2%</div>
                    <div style="margin-top: 10px; opacity: 0.9;">System uptime</div>
                  </div>`,
                  closable: true,
                },
              ],
            },
            {
              id: 'bottom-section',
              type: 'horizontal',
              children: [
                {
                  type: 'panel',
                  id: 'chart',
                  title: 'Analytics Chart',
                  icon: 'trending-up',
                  content: `<div style="padding: 20px; height: 100%;">
                    <h3 style="margin-top: 0;">Sales Over Time</h3>
                    <div style="background: linear-gradient(to top, #10b981 0%, transparent 100%); height: 200px; border-radius: 8px; position: relative;">
                      <div style="position: absolute; bottom: 0; left: 0; right: 0; height: 70%; background: linear-gradient(to top, #10b981 0%, #60a5fa 100%); border-radius: 8px 8px 0 0;"></div>
                    </div>
                  </div>`,
                  closable: true,
                },
                {
                  type: 'panel',
                  id: 'activity',
                  title: 'Recent Activity',
                  icon: 'bell',
                  content: `<div style="padding: 20px; height: 100%;">
                    <div style="margin-bottom: 15px; padding: 12px; background:var(--accent-green-soft,#f0fdf4); border-left: 3px solid #10b981;">
                      <strong>New user registration</strong>
                      <div style="color: #6b7280; font-size: 13px; margin-top: 3px;">2 minutes ago</div>
                    </div>
                    <div style="margin-bottom: 15px; padding: 12px; background:var(--accent-blue-soft,#eff6ff); border-left: 3px solid #10b981;">
                      <strong>Payment received</strong>
                      <div style="color: #6b7280; font-size: 13px; margin-top: 3px;">5 minutes ago</div>
                    </div>
                    <div style="padding: 12px; background:var(--accent-yellow-soft,#fef3c7); border-left: 3px solid #f59e0b;">
                      <strong>System update available</strong>
                      <div style="color: #6b7280; font-size: 13px; margin-top: 3px;">1 hour ago</div>
                    </div>
                  </div>`,
                  closable: true,
                },
              ],
            },
          ],
        },
        floating: [],
      };

      // Use loadLayout method for proper initialization
      setTimeout(async () => {
        try {
          await manager.loadLayout(JSON.stringify(dashboardLayout));
        } catch (error) {
          console.error('Error loading dashboard layout:', error);
          manager.initialLayout = JSON.stringify(dashboardLayout);
        }
      }, 100);
    }
  }, 200);
};

// Copilot Layout
window.showCopilotLayout = function () {
  const container = document.getElementById('layoutManagerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
        <ui-icon name="bot" library="lucide" size="24px"></ui-icon> AI Copilot Layout
      </h3>
      <p style="color: #6b7280;">A layout optimized for AI-assisted coding experiences with chat, code editor, and context panels.</p>
      
      <div style="margin-top: 30px; border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
        <layout-manager id="copilotLayoutManager" style="display: block; height: 600px;"></layout-manager>
      </div>

      <div style="margin-top: 30px; background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px;">
        <h4 style="margin-top: 0; color: #374151;">Copilot Layout Features</h4>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 15px;">
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="message-circle" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">AI Chat Interface</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Interactive conversation panel for AI assistance</p>
          </div>
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="code" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">Code Editor</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Main workspace for code editing</p>
          </div>
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="book" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">Context Panel</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Display relevant code context and references</p>
          </div>
          <div style="background:var(--bg-primary,white); padding: 15px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="font-size: 24px; margin-bottom: 8px;"><ui-icon name="search" library="lucide" size="24px"></ui-icon></div>
            <strong style="color: #1f2937;">Search & Navigation</strong>
            <p style="margin: 5px 0 0; color: #6b7280; font-size: 14px;">Quick file search and workspace navigation</p>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(async () => {
    const manager = document.getElementById('copilotLayoutManager');
    if (manager) {
      const copilotLayout = {
        root: {
          id: 'root',
          type: 'horizontal',
          children: [
            {
              id: 'main-workspace',
              type: 'vertical',
              size: 70,
              children: [
                {
                  id: 'editor-area',
                  type: 'horizontal',
                  children: [
                    {
                      type: 'panel',
                      id: 'file-explorer',
                      title: 'Explorer',
                      icon: 'folder',
                      size: 20,
                      content: `<div style="padding: 15px; height: 100%; overflow-y: auto; background:var(--bg-secondary,#f9fafb);">
                        <div style="margin-bottom: 8px;">
                          <ui-input type="text" placeholder="Search files..." style="width: 100%; padding: 8px; border:1px solid var(--border-default,#e5e7eb); border-radius: 6px; font-size: 12px;" />
                        </div>
                        <div style="margin-top: 15px;">
                          <div style="font-weight: 600; color: #1f2937; font-size: 13px; margin-bottom: 8px; display: flex; align-items: center; gap: 5px;">
                            <span><ui-icon name="folder" library="lucide" size="14px"></ui-icon></span> src
                          </div>
                          <div style="margin-left: 15px;">
                            <div style="padding: 6px; cursor: pointer; border-radius: 4px; font-size: 12px; color: #374151; display: flex; align-items: center; gap: 5px;" onmouseover="this.style.background='#e5e7eb'" onmouseout="this.style.background='transparent'">
                              <span><ui-icon name="folder" library="lucide" size="14px"></ui-icon></span> data-structures
                            </div>
                            <div style="margin-left: 15px;">
                              <div style="padding: 6px; cursor: pointer; border-radius: 4px; font-size: 12px; color: #374151; background:var(--accent-blue-soft,#dbeafe); font-weight: 600; display: flex; align-items: center; gap: 5px;">
                                <span><ui-icon name="file" library="lucide" size="14px"></ui-icon></span> tree.js
                              </div>
                              <div style="padding: 6px; cursor: pointer; border-radius: 4px; font-size: 12px; color: #374151; display: flex; align-items: center; gap: 5px;" onmouseover="this.style.background='#e5e7eb'" onmouseout="this.style.background='transparent'">
                                <span><ui-icon name="file" library="lucide" size="14px"></ui-icon></span> linked-list.js
                              </div>
                            </div>
                            <div style="padding: 6px; cursor: pointer; border-radius: 4px; font-size: 12px; color: #374151; margin-top: 4px; display: flex; align-items: center; gap: 5px;" onmouseover="this.style.background='#e5e7eb'" onmouseout="this.style.background='transparent'">
                              <span><ui-icon name="folder" library="lucide" size="14px"></ui-icon></span> utils
                            </div>
                          </div>
                        </div>
                      </div>`,
                      closable: false,
                    },
                    {
                      type: 'panel',
                      id: 'editor-panel',
                      title: 'Editor - tree.js',
                      icon: 'file-edit',
                      size: 80,
                      content: `<div style="padding: 0; height: 100%; background: #1f2937;">
                        <div style="background:var(--bg-secondary,#f8fafc); padding: 8px 16px; border-bottom: 1px solid #374151; display: flex; justify-content: space-between; align-items: center;">
                          <div style="display: flex; gap: 15px; font-size: 12px; color: #9ca3af;">
                            <span>JavaScript</span>
                            <span>UTF-8</span>
                            <span>LF</span>
                          </div>
                          <div style="display: flex; gap: 8px;">
                            <ui-button style="padding: 4px 8px; background: #374151; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer;">Format</ui-button>
                            <ui-button style="padding: 4px 8px; background: #374151; color: white; border: none; border-radius: 4px; font-size: 11px; cursor: pointer;">Save</ui-button>
                          </div>
                        </div>
                        <pre style="margin: 0; padding: 20px; color: #e5e7eb; font-family: 'Courier New', monospace; font-size: 14px; line-height: 1.6; overflow: auto; height: calc(100% - 41px);"><code><span style="color: #9ca3af;">1</span>  <span style="color: #c084fc;">class</span> <span style="color: #60a5fa;">BinarySearchTree</span> {
<span style="color: #9ca3af;">2</span>    <span style="color: #c084fc;">constructor</span>() {
<span style="color: #9ca3af;">3</span>      <span style="color: #c084fc;">this</span>.<span style="color: #fbbf24;">root</span> = <span style="color: #c084fc;">null</span>;
<span style="color: #9ca3af;">4</span>    }
<span style="color: #9ca3af;">5</span>  
<span style="color: #9ca3af;">6</span>    <span style="color: #34d399;">insert</span>(<span style="color: #fbbf24;">value</span>) {
<span style="color: #9ca3af;">7</span>      <span style="color: #c084fc;">const</span> newNode = <span style="color: #c084fc;">new</span> <span style="color: #60a5fa;">Node</span>(value);
<span style="color: #9ca3af;">8</span>      
<span style="color: #9ca3af;">9</span>      <span style="color: #c084fc;">if</span> (!<span style="color: #c084fc;">this</span>.root) {
<span style="color: #9ca3af;">10</span>       <span style="color: #c084fc;">this</span>.<span style="color: #fbbf24;">root</span> = newNode;
<span style="color: #9ca3af;">11</span>       <span style="color: #c084fc;">return</span>;
<span style="color: #9ca3af;">12</span>     }
<span style="color: #9ca3af;">13</span>     
<span style="color: #9ca3af;">14</span>     <span style="color: #6b7280;">// Insert logic here...</span>
<span style="color: #9ca3af;">15</span>   }
<span style="color: #9ca3af;">16</span> }</code></pre>
                      </div>`,
                      closable: false,
                    },
                  ],
                },
                {
                  id: 'bottom-panels',
                  type: 'horizontal',
                  size: 30,
                  children: [
                    {
                      type: 'panel',
                      id: 'terminal-panel',
                      title: 'Terminal',
                      icon: 'terminal',
                      content: `<div style="padding: 0; height: 100%; background: #1f2937; color: #10b981; font-family: 'Courier New', monospace;">
                        <div style="padding: 15px; font-size: 13px; line-height: 1.8;">
                          <div style="color: #9ca3af;">$ npm test</div>
                          <div style="margin-top: 10px; color: #10b981;">✓ Binary Search Tree tests</div>
                          <div style="margin-left: 20px; color: #10b981;">✓ should insert nodes correctly</div>
                          <div style="margin-left: 20px; color: #10b981;">✓ should search for values</div>
                          <div style="margin-left: 20px; color: #10b981;">✓ should handle duplicates</div>
                          <div style="margin-top: 10px; color: #10b981;">3 passing (42ms)</div>
                          <div style="margin-top: 15px; color: #9ca3af;">$ _</div>
                        </div>
                      </div>`,
                      closable: true,
                    },
                    {
                      type: 'panel',
                      id: 'problems-panel',
                      title: 'Problems',
                      icon: 'alert-triangle',
                      content: `<div style="padding: 15px; height: 100%; overflow-y: auto; background:var(--bg-primary,white);">
                        <div style="padding: 10px; background:var(--accent-yellow-soft,#fef3c7); border-left: 3px solid #f59e0b; border-radius: 4px; margin-bottom: 10px;">
                          <div style="font-weight: 600; color:var(--accent-yellow,#92400e); font-size: 13px; display: flex; align-items: center; gap: 5px;"><span><ui-icon name="alert-triangle" library="lucide" size="14px"></ui-icon></span> Warning</div>
                          <div style="color: #78350f; font-size: 12px; margin-top: 4px;">Unused variable 'temp' at line 23</div>
                        </div>
                        <div style="padding: 10px; background:var(--accent-blue-soft,#dbeafe); border-left: 3px solid #10b981; border-radius: 4px;">
                          <div style="font-weight: 600; color:var(--accent-blue,#1e40af); font-size: 13px; display: flex; align-items: center; gap: 5px;"><span><ui-icon name="info" library="lucide" size="14px"></ui-icon></span> Info</div>
                          <div style="color: #1e3a8a; font-size: 12px; margin-top: 4px;">Consider adding JSDoc comments</div>
                        </div>
                      </div>`,
                      closable: true,
                    },
                  ],
                },
              ],
            },
            {
              id: 'copilot-sidebar',
              type: 'vertical',
              size: 30,
              children: [
                {
                  type: 'panel',
                  id: 'chat-panel',
                  title: 'AI Copilot Chat',
                  icon: 'message-circle',
                  size: 70,
                  content: `<div style="padding: 20px; height: 100%; display: flex; flex-direction: column; background: linear-gradient(to bottom, #f9fafb 0%, #ffffff 100%);">
                    <div style="flex: 1; overflow-y: auto; margin-bottom: 15px; padding: 15px; background:var(--bg-primary,white); border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
                      <div style="margin-bottom: 15px; padding: 12px; background:var(--accent-blue-soft,#eff6ff); border-radius: 8px; border-left: 3px solid #10b981;">
                        <div style="font-weight: 600; color: #1f2937; margin-bottom: 5px; display: flex; align-items: center; gap: 6px;"><ui-icon name="user" library="lucide" size="14px"></ui-icon> You</div>
                        <div style="color: #374151;">How do I implement a binary search tree?</div>
                      </div>
                      <div style="margin-bottom: 15px; padding: 12px; background:var(--accent-green-soft,#f0fdf4); border-radius: 8px; border-left: 3px solid #10b981;">
                        <div style="font-weight: 600; color: #1f2937; margin-bottom: 5px; display: flex; align-items: center; gap: 6px;"><ui-icon name="bot" library="lucide" size="14px"></ui-icon> Copilot</div>
                        <div style="color: #374151;">I'll help you create a binary search tree. Here's a basic implementation with insert and search methods...</div>
                        <pre style="background: #1f2937; color: #10b981; padding: 12px; border-radius: 4px; margin-top: 8px; font-size: 12px; overflow-x: auto;"><code>class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}</code></pre>
                      </div>
                      <div style="margin-bottom: 15px; padding: 12px; background:var(--accent-blue-soft,#eff6ff); border-radius: 8px; border-left: 3px solid #10b981;">
                        <div style="font-weight: 600; color: #1f2937; margin-bottom: 5px; display: flex; align-items: center; gap: 6px;"><ui-icon name="user" library="lucide" size="14px"></ui-icon> You</div>
                        <div style="color: #374151;">Add a delete method as well</div>
                      </div>
                      <div style="padding: 12px; background:var(--accent-green-soft,#f0fdf4); border-radius: 8px; border-left: 3px solid #10b981;">
                        <div style="font-weight: 600; color: #1f2937; margin-bottom: 5px; display: flex; align-items: center; gap: 6px;"><ui-icon name="bot" library="lucide" size="14px"></ui-icon> Copilot</div>
                        <div style="color: #374151;">I'll add a delete method that handles all three cases: node with no children, one child, and two children...</div>
                      </div>
                    </div>
                    <div style="display: flex; gap: 8px;">
                      <ui-input type="text" placeholder="Ask Copilot anything..." style="flex: 1; padding: 10px; border:1px solid var(--border-default,#e5e7eb); border-radius: 6px; font-size: 14px;" />
                      <ui-button style="padding: 10px 16px; background: linear-gradient(135deg, #6366f1 0%, #8b5cf6 100%); color: white; border: none; border-radius: 6px; cursor: pointer; font-weight: 600;">Send</ui-button>
                    </div>
                  </div>`,
                  closable: false,
                },
                {
                  type: 'panel',
                  id: 'context-panel',
                  title: 'Context & Actions',
                  icon: 'book-open',
                  size: 30,
                  content: `<div style="padding: 20px; height: 100%; overflow-y: auto;">
                    <h4 style="margin-top: 0; color: #1f2937; font-size: 14px; display: flex; align-items: center; gap: 6px;"><ui-icon name="folder-open" library="lucide" size="14px"></ui-icon> Referenced Files</h4>
                    <div style="margin-bottom: 20px;">
                      <div style="padding: 10px; background:var(--bg-secondary,#f9fafb); border-radius: 6px; margin-bottom: 8px; border:1px solid var(--border-default,#e5e7eb); cursor: pointer;" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='#f9fafb'">
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="color: #10b981;"><ui-icon name="file-text" library="lucide" size="14px"></ui-icon></span>
                          <span style="color: #1f2937; font-size: 13px;">data-structures/tree.js</span>
                        </div>
                        <div style="color: #6b7280; font-size: 11px; margin-top: 4px; margin-left: 24px;">Line 45-67</div>
                      </div>
                      <div style="padding: 10px; background:var(--bg-secondary,#f9fafb); border-radius: 6px; margin-bottom: 8px; border:1px solid var(--border-default,#e5e7eb); cursor: pointer;" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='#f9fafb'">
                        <div style="display: flex; align-items: center; gap: 8px;">
                          <span style="color: #10b981;"><ui-icon name="file-text" library="lucide" size="14px"></ui-icon></span>
                          <span style="color: #1f2937; font-size: 13px;">utils/comparator.js</span>
                        </div>
                        <div style="color: #6b7280; font-size: 11px; margin-top: 4px; margin-left: 24px;">Line 12-25</div>
                      </div>
                    </div>
                    <h4 style="margin-top: 20px; color: #1f2937; font-size: 14px; display: flex; align-items: center; gap: 6px;"><ui-icon name="bookmark" library="lucide" size="14px"></ui-icon> Suggested Actions</h4>
                    <div style="display: flex; flex-direction: column; gap: 8px;">
                      <ui-button style="padding: 8px 12px; background:var(--bg-primary,white); border:1px solid var(--border-default,#e5e7eb); border-radius: 6px; text-align: left; cursor: pointer; font-size: 13px; color: #374151;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='white'">
                        <div style="font-weight: 600; display: flex; align-items: center; gap: 6px;"><ui-icon name="lightbulb" library="lucide" size="14px"></ui-icon> Add unit tests</div>
                      </ui-button>
                      <ui-button style="padding: 8px 12px; background:var(--bg-primary,white); border:1px solid var(--border-default,#e5e7eb); border-radius: 6px; text-align: left; cursor: pointer; font-size: 13px; color: #374151;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='white'">
                        <div style="font-weight: 600; display: flex; align-items: center; gap: 6px;"><ui-icon name="file-plus" library="lucide" size="14px"></ui-icon> Generate docs</div>
                      </ui-button>
                      <ui-button style="padding: 8px 12px; background:var(--bg-primary,white); border:1px solid var(--border-default,#e5e7eb); border-radius: 6px; text-align: left; cursor: pointer; font-size: 13px; color: #374151;" onmouseover="this.style.background='#f9fafb'" onmouseout="this.style.background='white'">
                        <div style="font-weight: 600; display: flex; align-items: center; gap: 6px;"><ui-icon name="search" library="lucide" size="14px"></ui-icon> Find similar code</div>
                      </ui-button>
                    </div>
                  </div>`,
                  closable: false,
                },
              ],
            },
          ],
        },
        floating: [],
      };

      // Use loadLayout method for proper initialization
      setTimeout(async () => {
        try {
          await manager.loadLayout(JSON.stringify(copilotLayout));
        } catch (error) {
          console.error('Error loading copilot layout:', error);
          manager.initialLayout = JSON.stringify(copilotLayout);
        }
      }, 100);
    }
  }, 200);
};

// API Reference
window.showAPIReference = function () {
  const container = document.getElementById('layoutManagerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
        <ui-icon name="book-open" library="lucide" size="24px"></ui-icon>
        Layout Manager API Reference
      </h3>
      
      <div style="margin-top: 30px;">
        <h4 style="color: #1f2937; margin-bottom: 15px;">Component Properties</h4>
        <div style="background:var(--bg-secondary,#f9fafb); border-radius: 8px; overflow: hidden; border:1px solid var(--border-default,#e5e7eb);">
          <table style="width: 100%; border-collapse: collapse;">
            <thead>
              <tr style="background: #f3f4f6;">
                <th style="padding: 12px; text-align: left; font-weight: 600; color: #1f2937; border-bottom: 2px solid #e5e7eb;">Property</th>
                <th style="padding: 12px; text-align: left; font-weight: 600; color: #1f2937; border-bottom: 2px solid #e5e7eb;">Type</th>
                <th style="padding: 12px; text-align: left; font-weight: 600; color: #1f2937; border-bottom: 2px solid #e5e7eb;">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;"><code>initialLayout</code></td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">string (JSON)</td>
                <td style="padding: 12px; border-bottom: 1px solid #e5e7eb;">Initial layout configuration as JSON string</td>
              </tr>
            </tbody>
          </table>
        </div>

        <h4 style="color: #1f2937; margin: 30px 0 15px 0;">Methods</h4>
        <div style="display: flex; flex-direction: column; gap: 15px;">
          <div style="background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <code style="background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">addPanel</code>
              <span style="color: #6b7280; font-size: 14px;">(config: PanelConfig) => Promise&lt;string&gt;</span>
            </div>
            <p style="margin: 0; color: #6b7280;">Add a new panel to the layout. Returns the panel ID.</p>
            <pre style="background: #1f2937; color: #10b981; padding: 15px; border-radius: 6px; margin-top: 10px; overflow-x: auto;"><code>await manager.addPanel({
  title: 'My Panel',
  icon: 'layout',
  content: '&lt;div&gt;Content&lt;/div&gt;',
  closable: true
});</code></pre>
          </div>

          <div style="background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <code style="background: var(--accent-red,#ef4444); color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">removePanel</code>
              <span style="color: #6b7280; font-size: 14px;">(id: string) => Promise&lt;boolean&gt;</span>
            </div>
            <p style="margin: 0; color: #6b7280;">Remove a panel by ID. Returns true if successful.</p>
            <pre style="background: #1f2937; color:var(--accent-red,#ef4444); padding: 15px; border-radius: 6px; margin-top: 10px; overflow-x: auto;"><code>await manager.removePanel('panel-1');</code></pre>
          </div>

          <div style="background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <code style="background: #10b981; color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">saveLayout</code>
              <span style="color: #6b7280; font-size: 14px;">() => Promise&lt;string&gt;</span>
            </div>
            <p style="margin: 0; color: #6b7280;">Save the current layout state as a JSON string.</p>
            <pre style="background: #1f2937; color: #10b981; padding: 15px; border-radius: 6px; margin-top: 10px; overflow-x: auto;"><code>const layout = await manager.saveLayout();
localStorage.setItem('myLayout', layout);</code></pre>
          </div>

          <div style="background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 10px;">
              <code style="background: var(--accent-yellow,#f59e0b); color: white; padding: 4px 8px; border-radius: 4px; font-size: 14px;">loadLayout</code>
              <span style="color: #6b7280; font-size: 14px;">(json: string) => Promise&lt;boolean&gt;</span>
            </div>
            <p style="margin: 0; color: #6b7280;">Load a layout from a JSON string.</p>
            <pre style="background: #1f2937; color:var(--accent-yellow,#f59e0b); padding: 15px; border-radius: 6px; margin-top: 10px; overflow-x: auto;"><code>const saved = localStorage.getItem('myLayout');
await manager.loadLayout(saved);</code></pre>
          </div>
        </div>

        <h4 style="color: #1f2937; margin: 30px 0 15px 0;">Layout Structure</h4>
        <div style="background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
          <p style="margin: 0 0 15px 0; color: #6b7280;">The layout configuration follows this structure:</p>
          <pre style="background: #1f2937; color: #e5e7eb; padding: 20px; border-radius: 6px; overflow-x: auto; margin: 0;"><code>{
  root: {
    id: 'root',
    type: 'horizontal' | 'vertical',
    children: [
      {
        type: 'panel',
        id: 'panel-1',
        title: 'Panel Title',
        icon: 'layout',
        content: '&lt;div&gt;HTML content&lt;/div&gt;',
        closable: true
      },
      {
        id: 'nested',
        type: 'vertical',
        children: [...]
      }
    ]
  },
  floating: []
}</code></pre>
        </div>
      </div>
    </div>
  `;
};
