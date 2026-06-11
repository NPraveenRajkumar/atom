// Splitter Layout Demo
export function initSplitterDemo() {
  const section = document.getElementById('splitter');
  if (!section) return;

  section.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
      <h2 style="margin: 0; display: flex; align-items: center; gap: 10px;">
        <ui-icon name="columns" library="lucide" size="24px"></ui-icon> Splitter Partition Container
      </h2>
      <div style="display: flex; gap: 10px;">
        <ui-button onclick="showHorizontalSplitter()"
          style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; border: none; padding: 8px 16px; border-radius: 6px; font-size: 13px; cursor: pointer; font-weight: 600; display: flex; align-items: center; gap: 6px;">
          <ui-icon name="rotate-ccw" library="lucide" size="14px"></ui-icon> Reset View
        </ui-button>
        <ui-button onclick="showSection('home')"
          style="background-color: #6b7280; color: white; border: none; padding: 6px 12px; border-radius: 4px; font-size: 12px; cursor: pointer; display: flex; align-items: center; gap: 6px;">
          <ui-icon name="arrow-left" library="lucide" size="12px"></ui-icon> Back to Home
        </ui-button>
      </div>
    </div>
    <p>Flexible split views supporting proportional sizing, gutter customize colors, drag resize, snap boundaries, and double-click collapse states.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showHorizontalSplitter()" variant="outline"><ui-icon name="columns" library="lucide" size="16px"></ui-icon> Horizontal Split</ui-button>
      <ui-button onclick="showVerticalSplitter()" variant="outline"><ui-icon name="rows" library="lucide" size="16px"></ui-icon> Vertical Split</ui-button>
      <ui-button onclick="showNestedSplitter()" variant="outline"><ui-icon name="layout" library="lucide" size="16px"></ui-icon> Nested Layout Zones</ui-button>
    </div>

    <div id="splitterDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    showHorizontalSplitter();
  }, 100);
}

// Horizontal Splitter Demo
window.showHorizontalSplitter = function () {
  const container = document.getElementById('splitterDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">⚖️</span>
        Proportional Horizontal Splitter
      </h3>
      <p style="color: #6b7280; margin-bottom: 20px;">Two side-by-side content containers. Grab the vertical bar and drag left or right.</p>
      
      <div style="border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; overflow: hidden; height: 350px; background: var(--bg-tertiary, #f1f5f9);">
        <ui-splitter direction="horizontal" gutter-size="10" gutter-color="#1e293b" gutter-hover-color="#3b82f6" snap-threshold="15">
          <div slot="panel-0" style="padding: 24px; background: #1e293b; color: white; height: 100%; box-sizing: border-box;">
            <h4 style="margin-top: 0; color:var(--accent-blue,#3b82f6);">Left Panel</h4>
            <p style="font-size: 14px; color:var(--text-secondary,#64748b); line-height: 1.6;">This is the left zone. Dragging the center splitter handles resizing in real-time using proportional percentage calculation.</p>
          </div>
          <div slot="panel-1" style="padding: 24px; background: #0f172a; color: white; height: 100%; box-sizing: border-box;">
            <h4 style="margin-top: 0; color: #10b981;">Right Panel</h4>
            <p style="font-size: 14px; color:var(--text-secondary,#64748b); line-height: 1.6;">This is the right zone. It automatically shrinks or expands to occupy all remaining width space in the parent component.</p>
          </div>
        </ui-splitter>
      </div>
    </div>
  `;
};

// Vertical Splitter Demo
window.showVerticalSplitter = function () {
  const container = document.getElementById('splitterDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">↕️</span>
        Vertical Stack Splitter
      </h3>
      <p style="color: #6b7280; margin-bottom: 20px;">Top and bottom stacked containers divided by a horizontal gutter. Drag up or down.</p>
      
      <div style="border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; overflow: hidden; height: 350px; background: var(--bg-tertiary, #f1f5f9);">
        <ui-splitter direction="vertical" gutter-size="10" gutter-color="#1e293b" gutter-hover-color="#10b981" snap-threshold="15">
          <div slot="panel-0" style="padding: 24px; background: #1e293b; color: white; height: 100%; box-sizing: border-box;">
            <h4 style="margin-top: 0; color: #10b981;">Top Console</h4>
            <p style="font-size: 14px; color:var(--text-secondary,#64748b); line-height: 1.6;">This is the upper console pane. Excellent for code, workspace canvases, or visualization boards.</p>
          </div>
          <div slot="panel-1" style="padding: 24px; background: #0f172a; color: white; height: 100%; box-sizing: border-box;">
            <h4 style="margin-top: 0; color:var(--accent-yellow,#f59e0b);">Bottom Terminal Output</h4>
            <p style="font-size: 14px; color:var(--text-secondary,#64748b); line-height: 1.6;">This is the lower output pane. Ideal for terminal interfaces, logs, build stats, and problems lists.</p>
          </div>
        </ui-splitter>
      </div>
    </div>
  `;
};

// Nested Splitter Demo
window.showNestedSplitter = function () {
  const container = document.getElementById('splitterDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
      <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
        <span style="font-size: 24px;">💠</span>
        Nested Layout Zones
      </h3>
      <p style="color: #6b7280; margin-bottom: 20px;">Combining horizontal and vertical splitters inside each other to create complete app workspace mockups.</p>
      
      <div style="border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; overflow: hidden; height: 400px; background: var(--bg-tertiary, #f1f5f9);">
        <ui-splitter direction="horizontal" gutter-size="8" gutter-color="#0f172a" gutter-hover-color="#a855f7">
          <!-- Sidebar -->
          <div slot="panel-0" style="padding: 20px; background: #1e1b4b; color: white; height: 100%; box-sizing: border-box; display: flex; flex-direction: column; justify-content: center; align-items: center; border-right: 1px solid #312e81;">
            <ui-icon name="folder-tree" library="lucide" size="24px"></ui-icon>
            <h5 style="margin: 10px 0 0; color: #c084fc;">Files</h5>
            <span style="font-size: 12px; color: #818cf8;">Sidebar Pane</span>
          </div>
          
          <!-- Main Content split vertically -->
          <div slot="panel-1" style="height: 100%;">
            <ui-splitter direction="vertical" gutter-size="8" gutter-color="#0f172a" gutter-hover-color="#3b82f6">
              <div slot="panel-0" style="padding: 24px; background: #1e293b; color: white; height: 100%; box-sizing: border-box;">
                <h4 style="margin-top: 0; color:var(--accent-blue,#3b82f6);">Code Editor Workspace</h4>
                <pre style="margin: 10px 0; padding: 12px; background: #0f172a; border-radius: 6px; color: #38bdf8; font-family: monospace; font-size: 13px;">const splitter = document.querySelector('ui-splitter');</pre>
              </div>
              <div slot="panel-1" style="padding: 20px; background: #0f172a; color: white; height: 100%; box-sizing: border-box; border-top: 1px solid #1e293b;">
                <h5 style="margin-top: 0; color: #f43f5e; display: flex; align-items: center; gap: 6px;">
                  <ui-icon name="terminal" library="lucide" size="14px"></ui-icon> Terminal Console
                </h5>
                <span style="font-size: 12px; color:var(--text-secondary,#64748b); font-family: monospace;">$ npm run dev --host</span>
              </div>
            </ui-splitter>
          </div>
        </ui-splitter>
      </div>
    </div>
  `;
};
