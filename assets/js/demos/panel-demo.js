/**
 * UI Panel Component Demo
 * Demonstrates all features: themes, animations, badges, drag-drop, resize, minimize/maximize
 */

export function initPanelDemo() {
  const section = document.getElementById('panel');
  if (!section) return;

  section.innerHTML = `
    <p>Flexible container component with themes, animations, badges, and window-like features.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showPlayground()"  label="🎮 Playground" size="md"riant="outline"></ui-button>
      <ui-button onclick="showBasicPanel()"  label="📄 Basic Panel" size="md"riant="outline"></ui-button>
      <ui-button onclick="showThemes()"  label="🎨 Themes" size="md"riant="outline"></ui-button>
      <ui-button onclick="showAnimations()"  label="✨ Animations" size="md"riant="outline"></ui-button>
      <ui-button onclick="showBadges()"  label="🏷️ Badges" size="md"riant="outline"></ui-button>
      <ui-button onclick="showDraggable()"  label="🖱️ Draggable" size="md"riant="outline"></ui-button>
      <ui-button onclick="showResizable()"  label="↔️ Resizable" size="md"riant="outline"></ui-button>
      <ui-button onclick="showMinMax()"  label="⬜ Min/Max" size="md"riant="outline"></ui-button>
      <ui-button onclick="showPersistence()"  label="💾 Persistence" size="md"riant="outline"></ui-button>
      <ui-button onclick="showPositioning()"  label="📍 Positioning" size="md"riant="outline"></ui-button>
      <ui-button onclick="showPremiumfeatures()"  label="💎 Premium" size="md"riant="outline"></ui-button>
      <ui-button onclick="showAllFeatures()"  label="🚀 All Features" size="md"riant="outline"></ui-button>
    </div>

    <div id="panelDemoArea"></div>
  `;

  const panelDemoArea = document.getElementById('panelDemoArea');

  // Basic Panel Demo
  window.showBasicPanel = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>📄 Basic Panel</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Simple panel with title, content, and footer</p>
        
        <ui-panel panel-title="Welcome Panel" panel-subtitle="This is a basic panel example">
          <div slot="content">
            <p>This is the main content area of the panel. You can put any content here.</p>
            <p>Panels are great for organizing content into distinct sections.</p>
          </div>
          <div slot="footer" style="display: flex; gap: 8px;">
            <ui-button variant="outline" color="success" label="Save" size="md"ui-button>
            <ui-button variant="outline" color="secondary" label="Cancel" size="md"ui-button>
          </div>
        </ui-panel>
      </div>
    `;
  };

  // Themes Demo
  window.showThemes = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>🎨 Panel Themes</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Different color themes for various use cases</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
          <ui-panel panel-title="Default Theme" theme="default">
            <div slot="content">Standard neutral theme</div>
          </ui-panel>
          
          <ui-panel panel-title="Primary Theme" theme="primary">
            <div slot="content">Blue theme for primary actions</div>
          </ui-panel>
          
          <ui-panel panel-title="Success Theme" theme="success">
            <div slot="content">Green theme for success messages</div>
          </ui-panel>
          
          <ui-panel panel-title="Warning Theme" theme="warning">
            <div slot="content">Orange theme for warnings</div>
          </ui-panel>
          
          <ui-panel panel-title="Danger Theme" theme="danger">
            <div slot="content">Red theme for errors or critical actions</div>
          </ui-panel>
          
          <ui-panel panel-title="Info Theme" theme="info">
            <div slot="content">Cyan theme for informational content</div>
          </ui-panel>
        </div>
      </div>
    `;
  };

  // Animations Demo
  window.showAnimations = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>✨ Panel Animations</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Different animation types for collapse/expand</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
          <ui-panel panel-title="Slide Animation" toggleable animation-type="slide" animation-duration="400ms">
            <div slot="content">
              <p>Click the toggle button to see slide animation</p>
              <p>Duration: 400ms</p>
            </div>
          </ui-panel>
          
          <ui-panel panel-title="Fade Animation" toggleable animation-type="fade" animation-duration="300ms">
            <div slot="content">
              <p>Click the toggle button to see fade animation</p>
              <p>Duration: 300ms</p>
            </div>
          </ui-panel>
          
          <ui-panel panel-title="Scale Animation" toggleable animation-type="scale" animation-duration="250ms">
            <div slot="content">
              <p>Click the toggle button to see scale animation</p>
              <p>Duration: 250ms</p>
            </div>
          </ui-panel>
        </div>
      </div>
    `;
  };

  // Badges Demo
  window.showBadges = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>🏷️ Panel Badges</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Add badges to panel headers for notifications or status</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 16px;">
          <ui-panel panel-title="Dot Badge" badge="1" badge-variant="dot" theme="primary">
            <div slot="content">Badge variant: dot (small indicator)</div>
          </ui-panel>
          
          <ui-panel panel-title="Count Badge" badge="5" badge-variant="count" theme="success">
            <div slot="content">Badge variant: count (number display)</div>
          </ui-panel>
          
          <ui-panel panel-title="Text Badge" badge="NEW" badge-variant="text" theme="warning">
            <div slot="content">Badge variant: text (custom text)</div>
          </ui-panel>
          
          <ui-panel panel-title="Notifications" badge="12" badge-variant="count" theme="danger">
            <div slot="content">Unread notifications count</div>
          </ui-panel>
        </div>
      </div>
    `;
  };

  // Draggable Demo
  window.showDraggable = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>🖱️ Draggable Panels</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Click and drag the panel header to move it around</p>
        
        <div style="position: relative; height: 500px; background:var(--bg-secondary,#f9fafb); border-radius: 8px; padding: 16px;">
          <ui-panel 
            panel-title="Draggable Panel 1" 
            is-draggable 
            width="350px" 
            height="200px"
            theme="primary"
          >
            <div slot="content">
              <p><strong>Drag me!</strong></p>
              <p>Click and hold the header to drag this panel around.</p>
            </div>
          </ui-panel>
          
          <ui-panel 
            panel-title="Draggable Panel 2" 
            is-draggable 
            width="350px" 
            height="200px"
            theme="success"
            style="margin-top: 20px;"
          >
            <div slot="content">
              <p><strong>I'm draggable too!</strong></p>
              <p>Multiple panels can be dragged independently.</p>
            </div>
          </ui-panel>
        </div>
      </div>
    `;
  };

  // Resizable Demo
  window.showResizable = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>↔️ Resizable Panels</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Drag the edges or corners to resize the panel</p>
        
        <ui-panel 
          panel-title="Resizable Panel" 
          resizable 
          width="400px" 
          height="300px"
          min-width="250px"
          min-height="150px"
          theme="info"
        >
          <div slot="content">
            <p><strong>Resize me!</strong></p>
            <p>Drag any edge or corner to resize this panel.</p>
            <p><strong>New:</strong> The panel now handles its own size state, so resizing works automatically!</p>
            <p>Minimum width: 250px</p>
            <p>Minimum height: 150px</p>
            <p>Try resizing from different corners!</p>
          </div>
        </ui-panel>
      </div>
    `;
  };

  // Minimize/Maximize Demo
  window.showMinMax = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>⬜ Minimize & Maximize</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Window-like behavior with minimize and maximize buttons</p>
        
        <ui-panel 
          panel-title="Window Panel" 
          minimizable 
          maximizable 
          width="500px" 
          height="300px"
          theme="primary"
        >
          <div slot="content">
            <h4>Window-like Panel</h4>
            <p>Click the minimize button (−) to collapse to title bar only.</p>
            <p>Click the maximize button (□) to expand to full screen.</p>
            <p>When maximized, click restore (⧉) to return to original size.</p>
            <p><strong>New:</strong> It correctly remembers your custom resized dimensions when restoring!</p>
            <p>This panel has both minimize and maximize capabilities!</p>
          </div>
          <div slot="footer">
            <ui-button variant="outline" color="success" label="Action" size="md"ui-button>
          </div>
        </ui-panel>
      </div>
    `;
  };

  // Persistence Demo
  window.showPersistence = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>💾 State Persistence</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Panels can remember their size, position, and collapsed state even after a page refresh.</p>
        
        <div style="position: relative; height: 500px; background:var(--bg-secondary,#f9fafb); border-radius: 8px; padding: 16px;">
          <ui-panel 
            panel-title="Persistent Panel" 
            persist-key="demo-persistence"
            is-draggable 
            resizable 
            toggleable
            width="350px" 
            height="250px"
            theme="warning"
          >
            <div slot="content">
              <h4>I Remember Everything!</h4>
              <p>1. Drag me around.</p>
              <p>2. Resize me.</p>
              <p>3. Collapse me.</p>
              <p>4. <strong>Refresh the page</strong> (or click other demo tabs and come back).</p>
              <p>Notice how I stay exactly where you left me!</p>
            </div>
          </ui-panel>
          
          <ui-panel 
            panel-title="Normal Panel" 
            is-draggable 
            resizable 
            width="350px" 
            height="200px"
            theme="info"
            style="margin-top: 20px; margin-left: 200px;"
          >
            <div slot="content">
              <h4>I Forget Everything</h4>
              <p>I don't have a <code>persist-key</code>, so I reset on every load.</p>
            </div>
          </ui-panel>
        </div>
      </div>
    `;
  };

  // Positioning Demo
  window.showPositioning = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>📍 Coordinate-Based Positioning</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Open panels at precise global coordinates using <code>x</code> and <code>y</code> props.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">
          <div style="padding: 20px; background: var(--bg-secondary); border: 1px solid var(--border-default); border-radius: 8px; text-align: center;">
            <p style="color: var(--text-primary);">Top-Left (100, 100)</p>
            <ui-button onclick="openCustomPos('100px', '100px', 'primary')" variant="outline" color="success" label="Open at 100, 100"></ui-button>
          </div>
          <div style="padding: 20px; background: var(--bg-secondary); border: 1px solid var(--border-default); border-radius: 8px; text-align: center;">
            <p style="color: var(--text-primary);">Center-ish (30%, 40%)</p>
            <ui-button onclick="openCustomPos('30%', '40%', 'success')" variant="outline" color="success" label="Open at 30%, 40%"></ui-button>
          </div>
          <div style="padding: 20px; background: var(--bg-secondary); border: 1px solid var(--border-default); border-radius: 8px; text-align: center;">
            <p style="color: var(--text-primary);">Bottom-Right Offset</p>
            <ui-button onclick="openCustomPos('calc(100% - 420px)', 'calc(100% - 320px)', 'warning')" variant="outline" color="warning" label="Open near Bottom-Right"></ui-button>
          </div>
        </div>

        <div id="positionalPanelContainer"></div>
      </div>
    `;

    window.openCustomPos = function (x, y, theme) {
      const container = document.getElementById('positionalPanelContainer');
      const panel = document.createElement('ui-panel');
      panel.panelTitle = 'Localized Panel';
      panel.x = x;
      panel.y = y;
      panel.width = '400px';
      panel.theme = theme;
      panel.pinned = true;
      panel.innerHTML = `
        <div slot="content">
          <p>This panel was opened at:</p>
          <code>X: ${x}</code><br/>
          <code>Y: ${y}</code>
          <p style="margin-top: 10px; font-size: 13px; color: #666;">It uses fixed positioning relative to the viewport.</p>
        </div>
      `;
      container.appendChild(panel);
      panel.addEventListener('panelClose', () => panel.remove());
    };
  };

  // Playground Demo
  window.showPlayground = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block playground-block" style="padding: 0; overflow: hidden; border-radius: 12px; background: var(--bg-tertiary, #f1f5f9); border: 1px solid var(--border-default); display: grid; grid-template-columns: 320px 1fr; height: 700px;">
        <!-- Controls -->
        <div class="playground-controls" style="padding: 20px; background: var(--bg-secondary, #f8fafc); border-right: 1px solid var(--border-default); overflow-y: auto; color:var(--text-primary,#1e293b); scrollbar-width: thin;">
          <h4 style="margin: 0 0 20px 0; color: var(--text-secondary, #64748b); text-transform: uppercase; font-size: 12px; letter-spacing: 1px; border-bottom: 1px solid var(--border-default); padding-bottom: 5px;">✨ Visuals</h4>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <div>
              <ui-input label="Title" id="playTitle" value="Interactive Panel"></ui-input>
            </div>
            <div>
              <ui-input label="Icon (Emoji)" id="playIcon" value="🚀"></ui-input>
            </div>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <ui-dropdown label="Variant" id="playVariant" value="elevated" options='[{"label":"Elevated","value":"elevated"},{"label":"Outlined","value":"outlined"},{"label":"Filled","value":"filled"},{"label":"Flat","value":"flat"}]'></ui-dropdown>
            <ui-dropdown label="Theme" id="playTheme" value="primary" options='[{"label":"Primary","value":"primary"},{"label":"Success","value":"success"},{"label":"Warning","value":"warning"},{"label":"Danger","value":"danger"},{"label":"Info","value":"info"},{"label":"Default","value":"default"}]'></ui-dropdown>
          </div>

          <div style="margin-bottom: 12px;">
            <label style="display: block; font-size: 11px; color:var(--text-secondary,#64748b); margin-bottom: 4px; text-transform: uppercase;">Background Color</label>
            <ui-color-picker id="playBgColor" value="#ffffff"></ui-color-picker>
          </div>

          <h4 style="margin: 20px 0 15px 0; color: var(--color-primary); text-transform: uppercase; font-size: 12px; letter-spacing: 1px; border-bottom: 1px solid var(--border-default); padding-bottom: 5px;">📐 Layout & Positioning</h4>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 12px;">
            <div>
              <ui-input label="Width" id="playWidth" value="450px"></ui-input>
            </div>
            <div>
              <ui-input label="Height" id="playHeight" value="300px"></ui-input>
            </div>
          </div>

          <div style="margin-bottom: 12px;">
            <ui-dropdown label="Preset Position" id="playPosition" value="" options='[{"label":"None (Relative)","value":""},{"label":"Center","value":"center"},{"label":"Top","value":"top"},{"label":"Bottom","value":"bottom"},{"label":"Left","value":"left"},{"label":"Right","value":"right"}]'></ui-dropdown>
          </div>

          <h4 style="margin: 20px 0 15px 0; color: var(--color-primary); text-transform: uppercase; font-size: 12px; letter-spacing: 1px; border-bottom: 1px solid var(--border-default); padding-bottom: 5px;">⚙️ Features</h4>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px; margin-bottom: 20px;">
            <ui-checkbox id="playDraggable" label="Drag" checked="true"></ui-checkbox>
            <ui-checkbox id="playResizable" label="Resize" checked="true"></ui-checkbox>
            <ui-checkbox id="playMinimizable" label="Min" checked="true"></ui-checkbox>
            <ui-checkbox id="playMaximizable" label="Max" checked="true"></ui-checkbox>
            <ui-checkbox id="playToggleable" label="Collapse" checked="true"></ui-checkbox>
            <ui-checkbox id="playModal" label="Modal"></ui-checkbox>
            <ui-checkbox id="playGlass" label="Glass"></ui-checkbox>
            <ui-checkbox id="playPinned" label="Pinned"></ui-checkbox>
            <ui-checkbox id="playPersistence" label="Persist"></ui-checkbox>
            <ui-checkbox id="playLoading" label="Loading"></ui-checkbox>
            <ui-checkbox id="playAura" label="Aura Glow"></ui-checkbox>
            <ui-checkbox id="playEnableSearch" label="Search"></ui-checkbox>
          </div>

          <div style="margin-bottom: 20px;">
            <label style="display: block; font-size: 11px; color: var(--text-secondary); margin-bottom: 4px; text-transform: uppercase;">Elevation Depth (0-5)</label>
            <ui-input type="range" id="playElevation" min="0" max="5" value="2" style="width: 100%; cursor: pointer;">
          </div>

          <ui-button onclick="updatePlay()" variant="outline" color="success" label="Apply Changes" style="width: 100%"></ui-button>
          
          <div style="margin-top: 20px; background: var(--bg-tertiary, #f1f5f9); padding: 12px; border-radius: 6px; position: relative; border: 1px solid var(--border-default);">
             <ui-button onclick="copyPanelCode()" id="copyPanelBtn" style="position: absolute; top: 6px; right: 6px; background: var(--bg-primary, #fff); color: var(--text-primary); border: 1px solid var(--border-default); padding: 2px 6px; border-radius: 4px; font-size: 10px; cursor: pointer;">Copy</ui-button>
             <code id="panelCodeBlock" style="color: var(--text-primary); font-family: monospace; font-size: 11px; display: block; overflow-x: auto; white-space: pre-wrap;"></code>
          </div>
        </div>

        <!-- Canvas -->
        <div id="playCanvas" style="position: relative; padding: 40px; background-image: radial-gradient(var(--border-default, #e2e8f0) 1px, transparent 1px); background-size: 20px 20px; display: flex; align-items: center; justify-content: center; overflow: hidden; background-color: var(--bg-tertiary, #f1f5f9);">
          <ui-panel 
            id="playPanel"
            panel-title="Interactive Panel"
            is-draggable
            resizable
            minimizable
            maximizable
            toggleable
            width="450px"
            height="300px"
            theme="primary"
            variant="elevated"
          >
            <div slot="content">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 15px;">
                <div style="width: 40px; height: 40px; background: #10b981; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-size: 20px;">🚀</div>
                <div>
                  <h4 style="margin: 0; color: var(--text-primary); font-size: 15px;">Live Playground</h4>
                  <p style="margin: 0; color:var(--text-secondary,#64748b); font-size: 12px;">Premium ui-panel component</p>
                </div>
              </div>
              <p style="color: var(--text-primary); font-size: 13px; line-height: 1.5;">
                This playground allows you to test all premium features in real-time. Use the sidebar to configure visual styles, layouts, and interactive behaviors.
              </p>
            </div>
          </ui-panel>
        </div>
      </div>
    `;

    // Initialize code block
    setTimeout(() => {
      updatePlay();
    }, 100);

    window.updatePlay = function () {
      const panel = document.getElementById('playPanel');
      if (!panel) return;

      panel.panelTitle = document.getElementById('playTitle').value;
      panel.icon = document.getElementById('playIcon').value;
      panel.variant = document.getElementById('playVariant').value;
      panel.theme = document.getElementById('playTheme').value;
      panel.width = document.getElementById('playWidth').value;
      panel.height = document.getElementById('playHeight').value;
      panel.position = document.getElementById('playPosition').value || undefined;
      panel.backgroundColor = document.getElementById('playBgColor').value;

      panel.isDraggable = document.getElementById('playDraggable').checked;
      panel.resizable = document.getElementById('playResizable').checked;
      panel.minimizable = document.getElementById('playMinimizable').checked;
      panel.maximizable = document.getElementById('playMaximizable').checked;
      panel.toggleable = document.getElementById('playToggleable').checked;
      panel.modal = document.getElementById('playModal').checked;
      panel.glass = document.getElementById('playGlass').checked;
      panel.pinned = document.getElementById('playPinned').checked;
      panel.loading = document.getElementById('playLoading').checked;
      panel.aura = document.getElementById('playAura').checked;
      panel.enableSearch = document.getElementById('playEnableSearch').checked;
      panel.elevation = parseInt(document.getElementById('playElevation').value);

      if (document.getElementById('playPersistence').checked) {
        panel.persistKey = 'integrated-playground-panel';
      } else {
        panel.persistKey = undefined;
      }

      panel.requestUpdate?.();

      // Update Code Block
      const codeBlock = document.getElementById('panelCodeBlock');
      if (codeBlock) {
        let props = '';
        const title = document.getElementById('playTitle').value;
        const icon = document.getElementById('playIcon').value;
        const variant = document.getElementById('playVariant').value;
        const theme = document.getElementById('playTheme').value;
        const width = document.getElementById('playWidth').value;
        const height = document.getElementById('playHeight').value;
        const position = document.getElementById('playPosition').value;

        if (title && title !== 'Interactive Panel') props += ` panel-title="${title}"`;
        if (icon && icon !== '🚀') props += ` icon="${icon}"`;
        if (variant !== 'elevated') props += ` variant="${variant}"`;
        if (theme !== 'primary') props += ` theme="${theme}"`;
        if (width !== '450px') props += ` width="${width}"`;
        if (height !== '300px') props += ` height="${height}"`;
        if (position) props += ` position="${position}"`;
        if (document.getElementById('playBgColor').value !== '#ffffff') props += ` background-color="${document.getElementById('playBgColor').value}"`;

        if (document.getElementById('playDraggable').checked) props += ' is-draggable';
        if (document.getElementById('playResizable').checked) props += ' resizable';
        if (document.getElementById('playMinimizable').checked) props += ' minimizable';
        if (document.getElementById('playMaximizable').checked) props += ' maximizable';
        if (document.getElementById('playToggleable').checked) props += ' toggleable';
        if (document.getElementById('playModal').checked) props += ' modal';
        if (document.getElementById('playGlass').checked) props += ' glass';
        if (document.getElementById('playPinned').checked) props += ' pinned';
        if (document.getElementById('playPersistence').checked) props += ' persist-key="my-panel"';
        if (document.getElementById('playLoading').checked) props += ' loading';
        if (document.getElementById('playAura').checked) props += ' aura';
        if (document.getElementById('playEnableSearch').checked) props += ' enable-search';
        if (parseInt(document.getElementById('playElevation').value) !== 2) props += ` elevation="${document.getElementById('playElevation').value}"`;

        codeBlock.innerText = `<ui-panel${props}>\n  <div slot="content">Panel content</div>\n</ui-panel>`;
      }
    };

    window.copyPanelCode = () => {
      const code = document.getElementById('panelCodeBlock').innerText;
      const btn = document.getElementById('copyPanelBtn');
      navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.background = '#10b981';
        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.background = 'rgba(255,255,255,0.1)';
        }, 2000);
      });
    };
  };

  // Premium Features Demo
  window.showPremiumfeatures = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>💎 Premium Features</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Advanced positioning, modal behavior, and glassmorphism.</p>
        
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <!-- Modal Trigger -->
          <div style="flex: 1; min-width: 250px; padding: 20px; background: var(--bg-secondary); border: 1px solid var(--border-default); border-radius: 8px; text-align: center;">
            <h4 style="color: var(--text-primary);">Modal Center Panel</h4>
            <p style="font-size: 14px; margin-bottom: 16px; color: var(--text-secondary);">Panel focused in center with backdrop</p>
            <ui-button onclick="openModalPanel()" variant="outline" color="success" label="Open Modal"></ui-button>
          </div>

          <!-- Side Panel Trigger -->
          <div style="flex: 1; min-width: 250px; padding: 20px; background: var(--bg-secondary); border: 1px solid var(--border-default); border-radius: 8px; text-align: center;">
            <h4 style="color: var(--text-primary);">Side Panel (Drawer)</h4>
            <p style="font-size: 14px; margin-bottom: 16px; color: var(--text-secondary);">Fixed panel docked to the right</p>
            <ui-button onclick="openSidePanel()" variant="outline" color="success" label="Open Side Panel"></ui-button>
          </div>

          <!-- Glass Panel Trigger -->
          <div style="flex: 1; min-width: 250px; padding: 20px; background: url('/build/assets/images/slide1.png') center/cover; border-radius: 8px; text-align: center;">
            <h4 style="color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Glass Panel</h4>
            <p style="font-size: 14px; margin-bottom: 16px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Frosted glass effect overlay</p>
            <ui-button onclick="openGlassPanel()" variant="outline" color="primary" label="Open Glass Panel" style="backdrop-filter: blur(4px)"></ui-button>
          </div>
        </div>

        <!-- Render Area for dynamic panels -->
        <div id="dynamicPanelContainer"></div>
      </div>
    `;

    // Definition of handlers attached to window
    window.openModalPanel = function () {
      const container = document.getElementById('dynamicPanelContainer');
      container.innerHTML = '';

      const panel = document.createElement('ui-panel');
      panel.panelTitle = 'Modal Command Center';
      panel.panelSubtitle = 'Focused Strategic interaction';
      panel.icon = '🛡️';
      panel.modal = true;
      panel.dismissible = true;
      panel.position = 'center';
      panel.width = '460px';
      panel.showClose = true;
      panel.toggleable = false;
      panel.animationType = 'scale';

      panel.innerHTML = `
            <div slot="content" style="text-align: center; padding: 20px;">
                <div style="background:var(--accent-blue-soft,#eff6ff); width: 60px; height: 60px; border-radius: 50%; display: flex; align-items: center; justify-content: center; margin: 0 auto 16px;">
                    <svg viewBox="0 0 24 24" fill="none" class="icon" stroke="#10b981" stroke-width="2" style="width: 32px; height: 32px;"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path></svg>
                </div>
                <h4 style="margin: 0 0 8px; color: #1f2937; font-weight: 800;">Apex Security Protocol</h4>
                <p style="margin: 0; color: #6b7280; font-size: 14px;">This panel is correctly centered in the viewport using the updated Apex Positioning Engine.</p>
            </div>
            <div slot="footer" style="padding: 16px; justify-content: center; gap: 12px; display: flex;">
                <ui-button onclick="closeDynamicPanel()" variant="outline" color="success" label="Authorize" size="md"yle="width: 120px;"></ui-button>
                <ui-button onclick="closeDynamicPanel()" variant="outline" color="secondary" label="Decline" size="md"yle="width: 120px;"></ui-button>
            </div>
        `;

      container.appendChild(panel);

      panel.addEventListener('panelSettings', e => {
        alert('Settings for Panel: ' + e.detail.panelId + '\nRedirecting to strategic dashboard...');
      });

      panel.addEventListener('panelClose', () => {
        container.innerHTML = '';
      });
    };

    window.openSidePanel = function () {
      const container = document.getElementById('dynamicPanelContainer');
      container.innerHTML = '';

      const panel = document.createElement('ui-panel');
      panel.panelTitle = 'Settings';
      panel.position = 'right';
      panel.height = '100vh';
      panel.width = '320px';
      panel.modal = true;
      panel.dismissible = true;
      panel.showClose = true;
      panel.animationType = 'slide';

      const menuItems = [
        { icon: '👤', label: 'Profile' },
        { icon: '🔔', label: 'Notifications', badge: '3' },
        { icon: '🔒', label: 'Privacy' },
        { icon: '💳', label: 'Billing' },
        { icon: '⚙️', label: 'General' },
      ];

      panel.innerHTML = `
            <div slot="content" style="padding: 0;">
                <div style="padding: 16px; border-bottom: 1px solid #e5e7eb;">
                    <p style="margin: 0; font-size: 13px; color: #6b7280; text-transform: uppercase; font-weight: 600;">Account</p>
                </div>
                ${menuItems
                  .map(
                    item => `
                    <div style="padding: 12px 16px; display: flex; align-items: center; justify-content: space-between; cursor: pointer; transition: background 0.2s;" onmouseover="this.style.backgroundColor='#f9fafb'" onmouseout="this.style.backgroundColor='transparent'">
                        <span style="display: flex; align-items: center; gap: 12px; color: #374151; font-weight: 500;">
                            <span>${item.icon}</span> ${item.label}
                        </span>
                        ${item.badge ? `<span style="background: var(--accent-red,#ef4444); color: white; font-size: 11px; padding: 2px 6px; border-radius: 10px; font-weight: 600;">${item.badge}</span>` : '<span style="color: #9ca3af;">›</span>'}
                    </div>
                `,
                  )
                  .join('')}
                <div style="padding: 16px; border-top: 1px solid var(--border-default); margin-top: 16px;">
                    <ui-button variant="outline" color="danger" label="Sign Out" style="width: 100%"></ui-button>
                </div>
            </div>
        `;

      container.appendChild(panel);
      panel.addEventListener('panelClose', () => {
        container.innerHTML = '';
      });
    };

    window.openGlassPanel = function () {
      const container = document.getElementById('dynamicPanelContainer');
      container.innerHTML = '';

      const panel = document.createElement('ui-panel');
      panel.glass = true;
      panel.icon = '💎';
      panel.panelTitle = 'Glass Obsidian';
      panel.position = 'center';
      panel.modal = true; // Use modal to center properly with backdrop
      panel.dismissible = true;
      panel.width = '420px';
      panel.theme = 'default';
      panel.animationType = 'scale';

      // CSS for glass content to look good against the blur
      const glassStyle = `
            color: white; 
            text-shadow: 0 2px 4px rgba(0,0,0,0.2); 
            text-align: center;
        `;

      panel.innerHTML = `
            <div slot="content" style="${glassStyle} padding: 30px 20px;">
                <h2 style="margin: 0 0 10px; font-size: 24px; font-weight: 700;">Glassmorphism</h2>
                <p style="margin: 0 0 24px; opacity: 0.9; line-height: 1.6;">
                    Blur the lines between content and background. This panel uses <code style="background: rgba(255,255,255,0.2); padding: 2px 6px; border-radius: 4px;">backdrop-filter</code> to create a frosted glass effect.
                </p>
                <div style="display: flex; gap: 16px; justify-content: center;">
                    <ui-button onclick="closeDynamicPanel()" variant="outline" color="secondary" label="Explore" style="border-radius: 30px"></ui-button>
                </div>
            </div>
        `;

      container.appendChild(panel);
      panel.addEventListener('panelClose', () => {
        container.innerHTML = '';
      });
    };

    window.closeDynamicPanel = function () {
      const container = document.getElementById('dynamicPanelContainer');
      if (container) container.innerHTML = '';
    };
  };

  // All Features Demo
  window.showAllFeatures = function () {
    panelDemoArea.innerHTML = `
      <div class="demo-block">
        <h3>🚀 All Features Combined</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">A panel with all features enabled</p>
        
        <div style="position: relative; height: 600px; background:var(--bg-secondary,#f9fafb); border-radius: 8px; padding: 16px;">
          <ui-panel 
            panel-title="Super Panel" 
            panel-subtitle="All features enabled"
            is-draggable 
            resizable 
            minimizable 
            maximizable 
            toggleable
            pinned
            badge="Pro"
            badge-variant="text"
            theme="primary"
            animation-type="scale"
            animation-duration="300ms"
            width="500px" 
            height="400px"
            min-width="300px"
            min-height="200px"
            keyboard-nav
          >
            <div slot="content">
              <h4>✨ Feature-Rich Panel</h4>
              <ul style="line-height: 1.8;">
                <li>🎨 <strong>Theme:</strong> Primary (blue)</li>
                <li>🏷️ <strong>Badge:</strong> "Pro" text badge</li>
                <li>🖱️ <strong>Draggable:</strong> Drag from header</li>
                <li>↔️ <strong>Resizable:</strong> Drag edges/corners</li>
                <li>⬜ <strong>Minimize/Maximize:</strong> Use buttons</li>
                <li>🔽 <strong>Collapsible:</strong> Toggle content</li>
                <li>📌 <strong>Pinned:</strong> Stays on top</li>
                <li>⌨️ <strong>Keyboard:</strong> ESC to close, Space to toggle</li>
                <li>✨ <strong>Animation:</strong> Scale effect</li>
              </ul>
              <p style="margin-top: 16px; padding: 12px; background:var(--accent-blue-soft,#eff6ff); border-radius: 6px; border-left: 4px solid #10b981;">
                <strong>Try it:</strong> Drag, resize, minimize, maximize, collapse, or press ESC/Space!
              </p>
            </div>
            <div slot="footer">
              <ui-button style="padding: 6px 12px; background: #10b981; color: white; border: none; border-radius: 4px; cursor: pointer;">Save</ui-button>
              <ui-button style="padding: 6px 12px; background: #6b7280; color: white; border: none; border-radius: 4px; cursor: pointer;">Cancel</ui-button>
            </div>
          </ui-panel>
        </div>
      </div>
    `;
  };

  // Show basic panel by default
  showPlayground();
}

// Auto-initialize if demo container exists
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', () => {
    if (window.initPanelDemo) window.initPanelDemo();
  });
} else {
  if (window.initPanelDemo) window.initPanelDemo();
}
