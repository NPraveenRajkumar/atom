// Component Demo Functions
export function initSpeedDialDemo() {
  const section = document.getElementById('speed-dial');
  if (!section) return;

  section.innerHTML = `
    
    <p>Floating action button with expandable menu for quick actions.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showBasicSpeedDial()" variant="outline">Basic</ui-button>
      <ui-button onclick="showSpeedDialPositions()" variant="outline">Positions</ui-button>
      <ui-button onclick="showSpeedDialColors()" variant="outline">Colors</ui-button>
      <ui-button onclick="showSpeedDialApex()" variant="outline">🏆 Apex Showcase</ui-button>
      <ui-button onclick="showSpeedDialCustom()" variant="outline">Custom</ui-button>
      <ui-button onclick="showContainerPositioning()" variant="outline">Container</ui-button>
      <ui-button onclick="showInteractiveSpeedDial()" variant="outline">🎮 Interactive Playground</ui-button>
    </div>

    <div id="speedDialDemoContainer" style="margin-top: 20px;"></div>
  `;

  // Initialize with basic speed dial
  setTimeout(() => {
    // Speed Dial Demo Functions
    window.showBasicSpeedDial = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>Basic Speed Dial</h4>
        <p style="color: #6b7280;">Click the button in the bottom-right corner to see the actions</p>
      </div>
    `;
      setTimeout(() => {
        const dial = document.createElement('ui-speed-dial');
        dial.setAttribute('position', 'bottom-right');
        dial.setAttribute('color', 'primary');
        dial.setAttribute('icon-library', 'lucide');
        dial.setAttribute('action-library', 'lucide');
        dial.actions = [
          { id: 'add', label: 'Add Item', icon: 'plus', color: '#10b981' },
          { id: 'edit', label: 'Edit', icon: 'pencil', color: '#10b981' },
          { id: 'share', label: 'Share', icon: 'share', color: '#f59e0b' },
          { id: 'delete', label: 'Delete', icon: 'trash-2', color: '#ef4444' },
        ];
        container.appendChild(dial);

        dial.addEventListener('actionClick', e => {
          alert('Action clicked: ' + e.detail);
        });
      }, 100);
    };

    window.showSpeedDialPositions = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <h4>Different Positions</h4>
        <p style="color: #6b7280; margin-bottom: 20px;">Speed dials placed in all four corners</p>
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 20px; text-align: center;">
          <div style="padding: 10px; background: #f3f4f6; border-radius: 6px;">
            <strong>Top Left</strong>
          </div>
          <div style="padding: 10px; background: #f3f4f6; border-radius: 6px;">
            <strong>Top Right</strong>
          </div>
          <div style="padding: 10px; background: #f3f4f6; border-radius: 6px;">
            <strong>Bottom Left</strong>
          </div>
          <div style="padding: 10px; background: #f3f4f6; border-radius: 6px;">
            <strong>Bottom Right</strong>
          </div>
        </div>
      </div>
    `;
      setTimeout(() => {
        const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right'];
        const colors = ['primary', 'success', 'warning', 'danger'];

        positions.forEach((pos, idx) => {
          const dial = document.createElement('ui-speed-dial');
          dial.setAttribute('position', pos);
          dial.setAttribute('color', colors[idx]);
          dial.setAttribute('strategy', 'absolute');
          dial.setAttribute('icon-library', 'lucide');
          dial.setAttribute('action-library', 'lucide');
          dial.setAttribute('size', 'sm');
          dial.actions = [
            { id: 'action1', label: 'Action 1', icon: 'hash' },
            { id: 'action2', label: 'Action 2', icon: 'hash' },
            { id: 'action3', label: 'Action 3', icon: 'hash' },
          ];
          container.appendChild(dial);
        });
      }, 100);
    };

    window.showSpeedDialDirections = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>Custom Directions</h4>
        <p style="color: #6b7280;">Force specific opening directions</p>
        <div style="margin-top: 20px; display: flex; gap: 20px; justify-content: center; flex-wrap: wrap;">
          <div style="padding: 10px; background:var(--accent-yellow-soft,#fef3c7); border-radius: 6px;">Up</div>
          <div style="padding: 10px; background:var(--accent-blue-soft,#dbeafe); border-radius: 6px;">Down</div>
          <div style="padding: 10px; background:var(--accent-pink-soft,#fce7f3); border-radius: 6px;">Left</div>
          <div style="padding: 10px; background:var(--accent-green-soft,#dcfce7); border-radius: 6px;">Right</div>
        </div>
      </div>
    `;
      setTimeout(() => {
        const directions = [
          { dir: 'up', pos: 'bottom-left', color: 'warning' },
          { dir: 'down', pos: 'top-left', color: 'info' },
          { dir: 'left', pos: 'bottom-right', color: 'danger' },
          { dir: 'right', pos: 'bottom-left', color: 'success' },
        ];

        directions.forEach((config, idx) => {
          const dial = document.createElement('ui-speed-dial');
          dial.setAttribute('position', config.pos);
          dial.setAttribute('direction', config.dir);
          dial.setAttribute('color', config.color);
          dial.setAttribute('icon-library', 'lucide');
          dial.setAttribute('action-library', 'lucide');
          dial.setAttribute('size', 'sm');
          dial.actions = [
            { id: 'a1', label: config.dir.toUpperCase(), icon: 'arrow-right' },
            { id: 'a2', label: 'Action', icon: 'star' },
          ];
          container.appendChild(dial);
        });
      }, 100);
    };

    window.showSpeedDialSizes = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>Different Sizes</h4>
        <p style="color: #6b7280;">Small, md, and Large speed dials</p>
      </div>
    `;
      setTimeout(() => {
        const sizes = ['sm', 'md', 'lg'];
        const positions = ['bottom-left', 'bottom-right', 'top-right'];

        sizes.forEach((size, idx) => {
          const dial = document.createElement('ui-speed-dial');
          dial.setAttribute('position', positions[idx]);
          dial.setAttribute('size', size);
          dial.setAttribute('color', 'primary');
          dial.setAttribute('strategy', 'absolute');
          dial.setAttribute('icon-library', 'lucide');
          dial.setAttribute('action-library', 'lucide');
          dial.actions = [
            { id: 'add', label: 'Add (' + size.toUpperCase() + ')', icon: 'plus' },
            { id: 'edit', label: 'Edit', icon: 'pencil' },
          ];
          container.appendChild(dial);
        });
      }, 100);
    };

    window.showSpeedDialRadial = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>Radial & Arc Layouts</h4>
        <p style="color: #6b7280;">Modern circular and semi-circular action menus</p>
        <div style="display: flex; gap: 40px; justify-content: center; height: 300px; align-items: center;">
           <div style="position: relative; width: 100px; height: 100px; border: 1px dashed #ccc; border-radius: 50%;">
              <p style="font-size: 10px;">Radial (360°)</p>
              <ui-speed-dial id="dialRadial" position="center" layout="radial" color="primary" size="md" icon-library="lucide" action-library="lucide"></ui-speed-dial>
           </div>
           <div style="position: relative; width: 100px; height: 100px; border: 1px dashed #ccc; border-radius: 50%;">
              <p style="font-size: 10px;">Arc (120°)</p>
              <ui-speed-dial id="dialArc" position="center" layout="arc" direction="up" color="success" size="md" icon-library="lucide" action-library="lucide"></ui-speed-dial>
           </div>
        </div>
      </div>
    `;
      setTimeout(() => {
        const actions = [
          { id: '1', label: 'Feature 1', icon: 'zap' },
          { id: '2', label: 'Feature 2', icon: 'star' },
          { id: '3', label: 'Feature 3', icon: 'heart' },
          { id: '4', label: 'Feature 4', icon: 'bell' },
          { id: '5', label: 'Feature 5', icon: 'cloud' },
        ];
        document.getElementById('dialRadial').actions = actions;
        document.getElementById('dialArc').actions = actions;
      }, 100);
    };

    window.showSpeedDialColors = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <h4>Color Variants</h4>
        <p style="color: #6b7280; margin-bottom: 20px;">All available color schemes</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 15px;">
          <div style="padding: 10px; background:var(--accent-blue-soft,#dbeafe); border-radius: 6px;">Primary</div>
          <div style="padding: 10px; background: #e5e7eb; border-radius: 6px;">Secondary</div>
          <div style="padding: 10px; background:var(--accent-green-soft,#dcfce7); border-radius: 6px;">Success</div>
          <div style="padding: 10px; background:var(--accent-red-soft,#fee2e2); border-radius: 6px;">Danger</div>
          <div style="padding: 10px; background:var(--accent-yellow-soft,#fef3c7); border-radius: 6px;">Warning</div>
          <div style="padding: 10px; background: #cffafe; border-radius: 6px;">Info</div>
        </div>
      </div>
    `;
      setTimeout(() => {
        const colors = ['primary', 'secondary', 'success', 'danger', 'warning', 'info'];
        const positions = ['top-left', 'top-right', 'bottom-left', 'bottom-right', 'top-left', 'bottom-right'];

        colors.forEach((color, idx) => {
          const dial = document.createElement('ui-speed-dial');
          dial.setAttribute('position', positions[idx]);
          dial.setAttribute('color', color);
          dial.setAttribute('strategy', 'absolute');
          dial.setAttribute('icon-library', 'lucide');
          dial.setAttribute('action-library', 'lucide');
          dial.setAttribute('size', 'sm');
          dial.actions = [
            { id: 'action1', label: color.toUpperCase(), icon: 'star' },
            { id: 'action2', label: 'Action', icon: 'zap' },
          ];
          container.appendChild(dial);
        });
      }, 100);
    };

    window.showSpeedDialWithTooltips = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>With Tooltips</h4>
        <p style="color: #6b7280;">Hover over action buttons to see tooltips</p>
      </div>
    `;
      setTimeout(() => {
        const dial = document.createElement('ui-speed-dial');
        dial.setAttribute('position', 'bottom-right');
        dial.setAttribute('color', 'primary');
        dial.setAttribute('show-tooltips', 'true');
        dial.setAttribute('icon-library', 'lucide');
        dial.setAttribute('action-library', 'lucide');
        dial.setAttribute('size', 'md');
        dial.actions = [
          { id: 'save', label: 'Save Document', icon: 'save' },
          { id: 'print', label: 'Print Document', icon: 'printer' },
          { id: 'email', label: 'Send via Email', icon: 'mail' },
          { id: 'download', label: 'Download File', icon: 'download' },
          { id: 'settings', label: 'Open Settings', icon: 'settings' },
        ];
        container.appendChild(dial);

        dial.addEventListener('actionClick', e => {
          const actionLabels = {
            save: 'Document saved!',
            print: 'Printing...',
            email: 'Opening email client...',
            download: 'Download started',
            settings: 'Opening settings...',
          };
          alert(actionLabels[e.detail] || 'Action: ' + e.detail);
        });
      }, 100);
    };

    // Initialize home speed dial demo
    window.initHomeSpeedDial = function () {
      const container = document.getElementById('homeSpeedDialDemo');
      if (!container) return;

      setTimeout(() => {
        const dial = document.createElement('ui-speed-dial');
        dial.setAttribute('position', 'bottom-right');
        dial.setAttribute('color', 'primary');
        dial.setAttribute('icon-library', 'lucide');
        dial.setAttribute('action-library', 'lucide');
        dial.setAttribute('size', 'md');
        dial.actions = [
          { id: 'add', label: 'Add', icon: 'plus', color: '#10b981' },
          { id: 'edit', label: 'Edit', icon: 'pencil', color: '#10b981' },
          { id: 'share', label: 'Share', icon: 'share', color: '#f59e0b' },
        ];
        container.appendChild(dial);
      }, 200);
    };

    window.showTriggerModes = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>Trigger Modes</h4>
        <p style="color: #6b7280; margin-bottom: 20px;">Use Click (default) or Hover to open the menu</p>
        <div style="display: flex; gap: 40px; justify-content: center;">
          <div style="position: relative; width: 100px; height: 100px;">
            <p><strong>Hover Me</strong></p>
            <ui-speed-dial position="center" trigger="hover" color="success" size="md" show-tooltips="true" icon-library="lucide" action-library="lucide">
               <!-- Actions added dynamically -->
            </ui-speed-dial>
          </div>
           <div style="position: relative; width: 100px; height: 100px;">
            <p><strong>Click Me</strong></p>
            <ui-speed-dial position="center" trigger="click" color="primary" size="md" icon-library="lucide" action-library="lucide">
               <!-- Actions added dynamically -->
            </ui-speed-dial>
          </div>
        </div>
      </div>
    `;
      setTimeout(() => {
        document.querySelectorAll('ui-speed-dial').forEach(dial => {
          dial.actions = [
            { id: '1', label: 'Like', icon: 'thumbs-up' },
            { id: '2', label: 'Share', icon: 'link' },
          ];
        });
      }, 100);
    };

    window.showSpeedDialApex = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>Apex Elite Showcase</h4>
        <p style="color: #6b7280;">Combining Radial Distribution, Glassmorphism, and Physics</p>
        <div style="display: flex; gap: 60px; justify-content: center; height: 350px; align-items: center;">
           <div style="position: relative; width: 120px; height: 120px; border: 1px dashed #ccc; border-radius: 50%;">
              <p style="font-size: 10px; margin-top: -20px;">Radial Apex</p>
              <ui-speed-dial id="dialApex1" position="center" strategy="absolute" layout="radial" magnetic="true" glassy="true" color="primary" size="md" icon-library="lucide" action-library="lucide"></ui-speed-dial>
           </div>
           <div style="position: relative; width: 120px; height: 120px; border: 1px dashed #ccc; border-radius: 50%;">
              <p style="font-size: 10px; margin-top: -20px;">Arc Apex</p>
              <ui-speed-dial id="dialApex2" position="center" strategy="absolute" layout="arc" direction="up" magnetic="true" is-draggable="true" toggle-icon="x" color="success" size="md" icon-library="lucide" action-library="lucide"></ui-speed-dial>
           </div>
        </div>
      </div>
    `;
      setTimeout(() => {
        const actions = [
          { id: '1', label: 'Feature 1', icon: 'zap', badge: '5', badgeColor: '#ef4444', shortcut: '1' },
          { id: '2', label: 'Feature 2', icon: 'star', badge: 'new', badgeColor: '#10b981', shortcut: '2' },
          { id: '3', label: 'Feature 3', icon: 'heart', shortcut: '3' },
          { id: '4', label: 'Feature 4', icon: 'bell', shortcut: '4' },
          { id: '5', label: 'Feature 5', icon: 'settings', shortcut: 's' },
        ];
        document.getElementById('dialApex1').actions = actions;
        document.getElementById('dialApex2').actions = actions;
      }, 100);
    };

    window.showSpeedDialCustom = function () {
      const container = document.getElementById('speedDialDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>Custom Speed Dial</h4>
        <p style="color: #6b7280;">Fully customized speed dial with custom styling</p>
      </div>
    `;
      setTimeout(() => {
        const dial = document.createElement('ui-speed-dial');
        dial.setAttribute('position', 'bottom-right');
        dial.setAttribute('color', 'danger');
        dial.setAttribute('size', 'lg');
        dial.setAttribute('show-tooltips', 'true');
        dial.setAttribute('icon-library', 'lucide');
        dial.setAttribute('action-library', 'lucide');
        dial.actions = [
          { id: 'custom1', label: 'Custom Action 1', icon: 'star', color: '#8b5cf6' },
          { id: 'custom2', label: 'Custom Action 2', icon: 'palette', color: '#ec4899' },
          { id: 'custom3', label: 'Custom Action 3', icon: 'rocket', color: '#06b6d4' },
        ];
        container.appendChild(dial);

        dial.addEventListener('actionClick', e => {
          alert('Custom action clicked: ' + e.detail);
        });
      }, 100);
    };

    showBasicSpeedDial();
  }, 100);

  // Interactive Playground
  window.showInteractiveSpeedDial = function () {
    const container = document.getElementById('speedDialDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="background-color:var(--bg-primary,white); border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px;">
            <h3>🎮 Interactive Playground</h3>
            <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Position:</label>
                <ui-dropdown id="speedDialPosition" onchange="updateInteractiveSpeedDial()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                  <option value="top-left">Top Left</option>
                  <option value="top-right">Top Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-right" selected>Bottom Right</option>
                </ui-dropdown>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Layout:</label>
                <ui-dropdown id="speedDialLayout" onchange="updateInteractiveSpeedDial()" 
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
                  <option value="linear">Linear (Default)</option>
                  <option value="radial">Radial Circle</option>
                  <option value="arc">90° Arc</option>
                </ui-dropdown>
              </div>

              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Size:</label>
                <ui-dropdown id="speedDialSize" onchange="updateInteractiveSpeedDial()" 
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
                  <option value="sm">Small (40px)</option>
                  <option value="md" selected>md (56px)</option>
                  <option value="lg">Large (72px)</option>
                </ui-dropdown>
              </div>

              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Variant:</label>
                <ui-dropdown id="speedDialVariant" onchange="updateInteractiveSpeedDial()" 
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
                  <option value="ghost">Ghost</option>
                </ui-dropdown>
              </div>

              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Shape:</label>
                <ui-dropdown id="speedDialShape" onchange="updateInteractiveSpeedDial()" 
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
                  <option value="rounded" selected>Rounded</option>
                  <option value="square">Square</option>
                  <option value="sharp">Sharp</option>
                  <option value="oval">Oval</option>
                  <option value="chip">Chip</option>
                  <option value="circle">Circle</option>
                </ui-dropdown>
              </div>

              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Main Color:</label>
                <ui-dropdown id="speedDialColor" onchange="updateInteractiveSpeedDial()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                  <option value="primary" selected>Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="success">Success</option>
                  <option value="danger">Danger</option>
                  <option value="warning">Warning</option>
                  <option value="info">Info</option>
                </ui-dropdown>
              </div>

              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Strategy:</label>
                <ui-dropdown id="speedDialStrategy" onchange="updateInteractiveSpeedDial()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                  <option value="fixed" selected>Fixed (Screen)</option>
                  <option value="absolute">Absolute (Container)</option>
                </ui-dropdown>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Trigger:</label>
                <ui-dropdown id="speedDialTrigger" onchange="updateInteractiveSpeedDial()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                  <option value="click" selected>Click</option>
                  <option value="hover">Hover</option>
                </ui-dropdown>
              </div>

              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Direction:</label>
                <ui-dropdown id="speedDialDirection" onchange="updateInteractiveSpeedDial()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                  <option value="auto" selected>Auto</option>
                  <option value="up">Up</option>
                  <option value="down">Down</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                </ui-dropdown>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Tooltip Position:</label>
                <ui-dropdown id="speedDialTooltipPosition" onchange="updateInteractiveSpeedDial()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                  <option value="auto" selected>Auto</option>
                  <option value="left">Left</option>
                  <option value="right">Right</option>
                  <option value="top">Top</option>
                  <option value="bottom">Bottom</option>
                </ui-dropdown>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Icon:</label>
                <ui-input type="text" id="speedDialIcon" value="+" onchange="updateInteractiveSpeedDial()"
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
              </div>
              
              <ui-checkbox id="speedDialShowTooltips" checked label="Show Tooltips" oncheckboxchange="updateInteractiveSpeedDial()"></ui-checkbox>

              <ui-checkbox id="speedDialGlassy" label="Glassy Effect" oncheckboxchange="updateInteractiveSpeedDial()"></ui-checkbox>

              <ui-checkbox id="speedDialMagnetic" checked label="Magnetic (Apex)" oncheckboxchange="updateInteractiveSpeedDial()"></ui-checkbox>

              <ui-checkbox id="speedDialDraggable" label="Draggable (Apex)" oncheckboxchange="updateInteractiveSpeedDial()"></ui-checkbox>

              <ui-checkbox id="speedDialPersist" checked label="Persist Drag Position (Apex)" oncheckboxchange="updateInteractiveSpeedDial()"></ui-checkbox>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Offset X (e.g. 50px):</label>
                <ui-input type="text" id="speedDialOffsetX" placeholder="Default: 24px" onchange="updateInteractiveSpeedDial()"
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Offset Y (e.g. 50px):</label>
                <ui-input type="text" id="speedDialOffsetY" placeholder="Default: 24px" onchange="updateInteractiveSpeedDial()"
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
              </div>

              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Actions (JSON):</label>
                <textarea id="speedDialActions" onchange="updateInteractiveSpeedDial()" 
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; font-family: monospace; font-size: 12px; min-height: 150px;">[
  {"id": "add", "label": "Add", "icon": "plus", "color": "#10b981"},
  {"id": "edit", "label": "Edit", "icon": "pencil", "color": "#10b981"},
  {"id": "share", "label": "Share", "icon": "share", "color": "#f59e0b"},
  {"id": "delete", "label": "Delete", "icon": "trash-2", "color": "#ef4444"}
]
</textarea>
              </div>
            </div>
          </div>
          
          <div style="flex: 1; min-width: 300px; background-color: #f9fafb; padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb); position: relative; min-height: 500px;">
            <h4 style="margin-top: 0;">Preview:</h4>
            <p style="color: #6b7280; font-size: 14px;">Click the button to see the speed dial actions</p>
            <div id="interactiveSpeedDialContainer" style="margin-top: 20px;"></div>
            <div id="speedDialOutput" style="margin-top: 20px; padding: 10px; background-color:var(--bg-primary,white); border-radius: 4px; font-family: monospace; font-size: 12px; display: none;"></div>
            
            <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
              <ui-button onclick="copySpeedDialCode()" id="copySpeedDialBtn" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); color: white; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer; transition: all 0.2s;">Copy</ui-button>
              <code id="speedDialCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
                <ui-speed-dial ...></ui-speed-dial>
              </code>
            </div>
          </div>
        </div>
      </div>
    `;

    updateInteractiveSpeedDial();
  };

  window.showContainerPositioning = function () {
    const container = document.getElementById('speedDialDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="text-align: center; padding: 40px;">
        <h4>Container-Based Positioning</h4>
        <p style="color: #6b7280; margin-bottom: 20px;">
          Using <code>strategy="absolute"</code> to confine the speed dial to a specific container.
        </p>
        
        <!-- The Container -->
        <div style="
          position: relative; 
          width: 300px; 
          height: 400px; 
          margin: 0 auto; 
          border: 2px dashed #cbd5e1; 
          border-radius: 8px; 
          background:var(--bg-secondary,#f8fafc);
          display: flex; 
          align-items: center; 
          justify-content: center;
          color:var(--text-secondary,#64748b);
        ">
          <p>I am a relative container</p>
          
          <!-- Absolute Speed Dial inside Container -->
          <ui-speed-dial 
            position="bottom-right" 
            strategy="absolute" 
            color="primary" 
            size="md"
            style="--speed-dial-bottom: 16px; --speed-dial-right: 16px;" 
            id="container-dial"
            icon-library="lucide"
            action-library="lucide"
          >
          </ui-speed-dial>
        </div>
      </div>
      `;

    setTimeout(() => {
      const dial = document.getElementById('container-dial');
      if (dial) {
        dial.actions = [
          { id: '1', label: 'In Container', icon: 'package' },
          { id: '2', label: 'Restricted', icon: 'zap' },
        ];
        dial.addEventListener('actionClick', e => alert(e.detail));
      }
    }, 100);
  };

  window.updateInteractiveSpeedDial = function () {
    const position = document.getElementById('speedDialPosition').value;
    const size = document.getElementById('speedDialSize').value;
    const color = document.getElementById('speedDialColor').value;
    const layout = document.getElementById('speedDialLayout').value;
    const variant = document.getElementById('speedDialVariant').value;
    const shape = document.getElementById('speedDialShape').value;
    const trigger = document.getElementById('speedDialTrigger').value;
    const strategy = document.getElementById('speedDialStrategy').value;
    const direction = document.getElementById('speedDialDirection').value;
    const tooltipPosition = document.getElementById('speedDialTooltipPosition').value;
    const icon = document.getElementById('speedDialIcon').value;
    const offsetX = document.getElementById('speedDialOffsetX').value;
    const offsetY = document.getElementById('speedDialOffsetY').value;
    const showTooltips = document.getElementById('speedDialShowTooltips').checked;
    const actionsText = document.getElementById('speedDialActions').value;

    const container = document.getElementById('interactiveSpeedDialContainer');
    const outputDiv = document.getElementById('speedDialOutput');

    if (!container) return;

    // Remove existing speed dial
    const existingDial = container.querySelector('ui-speed-dial');
    if (existingDial) {
      existingDial.remove();
    }

    try {
      const actions = JSON.parse(actionsText);

      const dial = document.createElement('ui-speed-dial');
      dial.setAttribute('position', position);
      dial.setAttribute('size', size);
      dial.setAttribute('color', color);
      dial.setAttribute('layout', layout);
      dial.setAttribute('variant', variant);
      dial.setAttribute('shape', shape);
      dial.setAttribute('trigger', trigger);
      dial.setAttribute('strategy', strategy);
      dial.setAttribute('direction', direction);
      dial.setAttribute('tooltip-position', tooltipPosition);
      dial.setAttribute('icon', icon);
      dial.setAttribute('glassy', document.getElementById('speedDialGlassy').checked);
      dial.setAttribute('magnetic', document.getElementById('speedDialMagnetic').checked);
      dial.setAttribute('is-draggable', document.getElementById('speedDialDraggable').checked);
      dial.setAttribute('persistence-id', document.getElementById('speedDialPersist').checked ? 'playground' : null);
      dial.setAttribute('icon-library', 'lucide');
      dial.setAttribute('action-library', 'lucide');

      // Ensure container is relative if testing absolute strategy
      if (strategy === 'absolute') {
        container.style.position = 'relative';
        container.style.overflow = 'hidden';
      } else {
        container.style.position = '';
        container.style.overflow = '';
      }

      // Apply custom offsets via CSS variables
      let style = '';
      if (offsetX) {
        style += `--speed-dial-left: ${offsetX}; --speed-dial-right: ${offsetX}; `;
      }
      if (offsetY) {
        style += `--speed-dial-top: ${offsetY}; --speed-dial-bottom: ${offsetY}; `;
      }
      if (style) {
        dial.setAttribute('style', style);
      }

      if (showTooltips) {
        dial.setAttribute('show-tooltips', 'true');
      }
      dial.actions = actions;

      container.appendChild(dial);

      // Add event listener
      dial.addEventListener('actionClick', event => {
        outputDiv.style.display = 'block';
        outputDiv.textContent = `Action clicked: ${event.detail}`;
      });

      dial.addEventListener('speedDialToggle', event => {
        outputDiv.style.display = 'block';
        outputDiv.textContent = `Speed dial ${event.detail ? 'opened' : 'closed'}`;
      });

      outputDiv.style.display = 'none';

      // Generate code block
      const codeBlock = document.getElementById('speedDialCodeBlock');
      if (codeBlock) {
        let code = `<ui-speed-dial icon-library="lucide" action-library="lucide"`;
        if (position !== 'bottom-right') code += `\n  position="${position}"`;
        code += `\n  size="${size}"`;
        code += `\n  variant="${variant}"`;
        code += `\n  shape="${shape}"`;
        code += `\n  layout="${layout}"`;
        if (color !== 'primary') code += `\n  color="${color}"`;
        if (trigger !== 'click') code += `\n  trigger="${trigger}"`;
        if (strategy !== 'fixed') code += `\n  strategy="${strategy}"`;
        if (direction !== 'auto') code += `\n  direction="${direction}"`;
        if (tooltipPosition !== 'auto') code += `\n  tooltip-position="${tooltipPosition}"`;
        if (icon !== '+') code += `\n  icon="${icon}"`;
        if (dial.glassy) code += `\n  glassy="true"`;
        if (dial.magnetic) code += `\n  magnetic="true"`;
        if (dial.hasAttribute('is-draggable')) code += `\n  is-draggable="true"`;
        if (dial.persistenceId) code += `\n  persistence-id="${dial.persistenceId}"`;
        if (style) code += `\n  style="${style.trim()}"`;
        if (showTooltips) code += `\n  show-tooltips="true"`;
        code += `>\n</ui-speed-dial>\n\n<script>\n  const dial = document.querySelector('ui-speed-dial');\n  dial.actions = ${JSON.stringify(actions, null, 2)};\n</script>`;
        codeBlock.innerText = code;
      }
    } catch (error) {
      outputDiv.style.display = 'block';
      outputDiv.style.color = '#ef4444';
      outputDiv.textContent = `Invalid JSON: ${error.message}`;
    }
  };

  window.copySpeedDialCode = function () {
    const codeBlock = document.getElementById('speedDialCodeBlock');
    const copyBtn = document.getElementById('copySpeedDialBtn');
    if (!codeBlock || !copyBtn) return;

    const code = codeBlock.innerText;
    navigator.clipboard.writeText(code).then(() => {
      const originalText = copyBtn.innerText;
      copyBtn.innerText = 'Copied!';
      copyBtn.style.backgroundColor = '#10b981';
      setTimeout(() => {
        copyBtn.innerText = originalText;
        copyBtn.style.backgroundColor = 'rgba(255,255,255,0.1)';
      }, 2000);
    });
  };
}
