/**
 * FAB (Floating Action Button) Demo
 */
export function initFabDemo() {
  const section = document.getElementById('fab');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header">
      <h2>Floating Action Button (FAB)</h2>
      <p>A floating action button represents the primary action of a screen. It can be a simple button, an extended button with text, or a speed-dial that opens multiple actions.</p>
    </div>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button id="btnFabBasic"  size="md" label="Basic FAB" variant="outline"></ui-button>
      <ui-button id="btnFabExtended"  size="md" label="Extended FAB" variant="outline"></ui-button>
      <ui-button id="btnFabSpeedDial"  size="md" label="Speed Dial FAB" variant="outline"></ui-button>
      <ui-button id="btnFabDraggable"  size="md" label="Draggable FAB" variant="outline"></ui-button>
      <ui-button id="btnFabAnimated"  size="md" label="Animations" variant="outline"></ui-button>
      <ui-button id="btnFabFloatingWindow"  size="md" label="Floating Window" variant="outline"></ui-button>
      <ui-button id="btnFabSuper"  size="md" label="Super FAB (Dual Mode)" variant="outline"></ui-button>
      <ui-button id="btnFabInteractive"  size="md" label="🎮 Interactive Playground" variant="outline"></ui-button>
      <ui-button id="btnFabScrollBehavior" size="md" label="📜 Scroll Behavior" variant="outline"></ui-button>
      <ui-button id="btnFabSizes" size="md" label="📐 Sizes & Positions" variant="outline"></ui-button>
    </div>

    <div id="fabDemoContainer" style="margin-top: 20px; min-height: 400px; position: relative; border: 1px dashed #e2e8f0; border-radius: 12px; padding: 20px; overflow: hidden; background: rgba(255,255,255,0.02);">
       <div id="fabContent" style="text-align: center; padding: 100px 20px; color:var(--text-secondary,#64748b);">
          <ui-icon name="mouse-pointer-2" size="48" style="opacity: 0.2; margin-bottom: 16px;"></ui-icon>
          <p>Select a demo above to see the FAB in action</p>
       </div>
    </div>
  `;

  const clearFabDemo = function () {
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    // Remove all existing FABs
    const fabs = container.querySelectorAll('ui-fab');
    fabs.forEach(f => f.remove());

    const content = document.getElementById('fabContent');
    if (content) content.style.display = 'none';
  };

  const showBasicFab = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    const fab = document.createElement('ui-fab');
    fab.icon = 'plus';
    fab.variant = 'primary';
    fab.position = 'bottom-right';
    // Contain it to the demo box
    fab.style.position = 'absolute';

    container.appendChild(fab);

    const content = document.getElementById('fabContent');
    content.innerHTML = `
      <h4>Basic Floating Action Button</h4>
      <p>Simple circular button with an icon. Primarily used for a single, prominent action.</p>
      <div style="margin-top: 20px; font-size: 0.85rem; color:var(--text-secondary,#64748b);">
        <code>&lt;ui-fab icon="plus" variant="primary"&gt;&lt;/ui-fab&gt;</code>
      </div>
    `;
    content.style.display = 'block';
  };

  const showExtendedFab = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    const fab = document.createElement('ui-fab');
    fab.icon = 'plus';
    fab.label = 'Create New Task';
    fab.type = 'extended';
    fab.variant = 'success';
    fab.position = 'bottom-right';
    fab.style.position = 'absolute';

    container.appendChild(fab);

    const content = document.getElementById('fabContent');
    content.innerHTML = `
      <h4>Extended FAB</h4>
      <p>Wider button that includes a text label. Useful when the icon alone isn't clear enough.</p>
      <div style="margin-top: 20px; font-size: 0.85rem; color:var(--text-secondary,#64748b);">
        <code>&lt;ui-fab type="extended" icon="plus" label="Create New Task"&gt;&lt;/ui-fab&gt;</code>
      </div>
    `;
    content.style.display = 'block';
  };

  const showSpeedDialFab = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    const fab = document.createElement('ui-fab');
    fab.icon = 'plus';
    fab.type = 'speed-dial';
    fab.variant = 'warning';
    fab.position = 'bottom-right';
    fab.direction = 'top';
    fab.toggle = true;
    fab.style.position = 'absolute';

    fab.innerHTML = `
      <ui-fab-item slot="actions" icon="image" label="Image" variant="info"></ui-fab-item>
      <ui-fab-item slot="actions" icon="video" label="Video" variant="danger"></ui-fab-item>
      <ui-fab-item slot="actions" icon="file-text" label="Document" variant="success"></ui-fab-item>
    `;

    container.appendChild(fab);

    const content = document.getElementById('fabContent');
    content.innerHTML = `
      <h4>Speed Dial FAB</h4>
      <p>Opens a menu of related actions when clicked. Supports multiple directions and radial layouts.</p>
      <div style="margin-top: 20px; font-size: 0.85rem; color:var(--text-secondary,#64748b);">
        <code>&lt;ui-fab type="speed-dial" icon="plus"&gt;...&lt;/ui-fab&gt;</code>
      </div>
    `;
    content.style.display = 'block';
  };

  const showDraggableFab = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    const fab = document.createElement('ui-fab');
    fab.icon = 'move';
    fab.label = 'Drag Me!';
    fab.type = 'extended';
    fab.setAttribute('is-draggable', 'true');
    fab.variant = 'danger';
    fab.position = 'bottom-right';
    fab.style.position = 'absolute';

    container.appendChild(fab);

    const content = document.getElementById('fabContent');
    content.innerHTML = `
      <h4>Draggable FAB</h4>
      <p>Users can reposition the button by dragging it around the screen. Great for tools or sticky actions.</p>
      <div style="margin-top: 20px; font-size: 0.85rem; color:var(--text-secondary,#64748b);">
        <code>&lt;ui-fab is-draggable="true" icon="move"&gt;&lt;/ui-fab&gt;</code>
      </div>
    `;
    content.style.display = 'block';
  };

  const showAnimatedFab = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    const animations = ['scale', 'slide', 'fade', 'none'];
    const positions = ['bottom-right', 'bottom-left', 'top-right', 'top-left'];

    animations.forEach((anim, i) => {
      const fab = document.createElement('ui-fab');
      fab.icon = 'zap';
      fab.animation = anim;
      fab.variant = 'info';
      fab.position = positions[i];
      fab.style.position = 'absolute';
      fab.label = anim.toUpperCase();
      fab.type = 'extended';
      container.appendChild(fab);
    });

    const content = document.getElementById('fabContent');
    content.innerHTML = `
      <h4>Entrance Animations</h4>
      <p>Supports different entrance effects like Scale, Slide, and Fade.</p>
    `;
    content.style.display = 'block';
  };

  const showFloatingWindowDemo = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    const fab = document.createElement('ui-fab');
    fab.icon = 'message-square';
    fab.variant = 'primary';
    fab.position = 'bottom-right';
    fab.panel = true;
    fab.panelTitle = 'Support Chat';
    fab.panelWidth = '350px';
    fab.style.position = 'absolute';

    fab.innerHTML = `
      <div slot="panel" style="display: flex; flex-direction: column; gap: 15px;">
        <div style="background:var(--bg-secondary,#f8fafc); padding: 10px; border-radius: 8px; font-size: 13px; align-self: flex-start; max-width: 80%;">
          Hello! How can we help you today? 👋
        </div>
        <div style="background: #3DCD58; color: white; padding: 10px; border-radius: 8px; font-size: 13px; align-self: flex-end; max-width: 80%;">
          I'm having trouble with the loader animations.
        </div>
        <div style="border-top: 1px solid #f1f5f9; padding-top: 10px; margin-top: auto;">
          <ui-input placeholder="Type a message..." full-width="true" rounded="true" size="md"ui-input>
        </div>
      </div>
    `;

    container.appendChild(fab);

    const content = document.getElementById('fabContent');
    content.innerHTML = `
      <h4>Floating Window Mode</h4>
      <p>Transforms the FAB into a launcher for a sophisticated floating window. Perfect for chat interfaces, quick settings, or mini-dashboards.</p>
      <div style="margin-top: 20px; font-size: 0.85rem; color:var(--text-secondary,#64748b);">
        <code>&lt;ui-fab panel="true" panel-title="Chat Support"&gt;...&lt;/ui-fab&gt;</code>
      </div>
    `;
    content.style.display = 'block';
  };

  const showSuperFab = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    const fab = document.createElement('ui-fab');
    fab.icon = 'layers';
    fab.variant = 'success';
    fab.position = 'bottom-right';
    fab.type = 'speed-dial';
    fab.toggle = true;
    fab.panel = true;
    fab.panelTitle = 'Advanced Controls';
    fab.panelWidth = '300px';
    fab.style.position = 'absolute';

    fab.innerHTML = `
      <ui-fab-item slot="actions" icon="camera" label="Screenshot" variant="info"></ui-fab-item>
      <ui-fab-item slot="actions" icon="mic" label="Record" variant="danger"></ui-fab-item>
      
      <div slot="panel">
        <p style="font-size: 13px; margin-bottom: 10px;">Select your preferred output format:</p>
        <div style="display: flex; gap: 8px;">
           <ui-tag label="PNG" variant="outline"></ui-tag>
           <ui-tag label="JPG" variant="outline" color="success"></ui-tag>
           <ui-tag label="SVG" variant="outline"></ui-tag>
        </div>
      </div>
      
      <div slot="panel-footer">
        <ui-button variant="primary" size="md" full-width="true" label="Process Now"></ui-button>
      </div>
    `;

    container.appendChild(fab);

    const content = document.getElementById('fabContent');
    content.innerHTML = `
      <h4>Super FAB: Dual Mode Interaction</h4>
      <p>Demonstrates how to combine <strong>Speed Dial</strong> actions with a <strong>Floating Window</strong> panel in a single component. Perfect for tools that need both quick shortcuts and deeper configuration.</p>
    `;
    content.style.display = 'block';
  };

  const updateFabPlayground = function (prop, value) {
    const f = document.getElementById('playgroundFab');
    if (f) f[prop] = value;
  };

  const showInteractiveFab = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;

    const content = document.getElementById('fabContent');
    content.innerHTML = `
      <div style="text-align: left; max-width: 400px; margin: 0 auto; background: rgba(255,255,255,0.05); padding: 20px; border-radius: 12px; border: 1px solid rgba(255,255,255,0.1);">
        <h4 style="margin-top: 0;">Interactive Configurator</h4>
        
        <div style="margin-bottom: 12px;">
          <label style="display: block; font-size: 12px; margin-bottom: 4px; color:var(--text-secondary,#64748b);">Variant</label>
          <ui-dropdown id="fabPropVariant" value="primary" options='[
            {"label": "Primary", "value": "primary"},
            {"label": "Success", "value": "success"},
            {"label": "Warning", "value": "warning"},
            {"label": "Danger", "value": "danger"},
            {"label": "Info", "value": "info"},
            {"label": "Secondary", "value": "secondary"}
          ]'></ui-dropdown>
        </div>

        <div style="margin-bottom: 12px;">
          <label style="display: block; font-size: 12px; margin-bottom: 4px; color:var(--text-secondary,#64748b);">Position</label>
          <ui-dropdown id="fabPropPosition" value="bottom-right" options='[
            {"label": "Bottom Right", "value": "bottom-right"},
            {"label": "Bottom Left", "value": "bottom-left"},
            {"label": "Top Right", "value": "top-right"},
            {"label": "Top Left", "value": "top-left"},
            {"label": "Bottom Center", "value": "bottom-center"},
            {"label": "Top Center", "value": "top-center"}
          ]'></ui-dropdown>
        </div>

        <div style="margin-bottom: 12px;">
          <label style="display: block; font-size: 12px; margin-bottom: 4px; color:var(--text-secondary,#64748b);">Size</label>
          <ui-dropdown id="fabPropSize" value="md" options='[
            {"label": "Medium", "value": "md"},
            {"label": "Large", "value": "large"},
            {"label": "Small", "value": "small"},
            {"label": "Mini", "value": "mini"}
          ]'></ui-dropdown>
        </div>

        <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 12px;">
          <ui-checkbox id="fabPropDraggable" label="Draggable"></ui-checkbox>
        </div>

        <div style="display: flex; gap: 10px; align-items: center; margin-bottom: 12px;">
          <ui-checkbox id="fabPropLoading" label="Loading State"></ui-checkbox>
        </div>
      </div>
    `;
    content.style.display = 'block';

    const fab = document.createElement('ui-fab');
    fab.id = 'playgroundFab';
    fab.icon = 'settings';
    fab.variant = 'primary';
    fab.position = 'bottom-right';
    fab.style.position = 'absolute';
    container.appendChild(fab);

    setTimeout(() => {
      const variantDrop = document.getElementById('fabPropVariant');
      const posDrop = document.getElementById('fabPropPosition');
      const sizeDrop = document.getElementById('fabPropSize');
      const dragCheck = document.getElementById('fabPropDraggable');
      const loadCheck = document.getElementById('fabPropLoading');

      if (variantDrop) variantDrop.addEventListener('dropdownChange', e => updateFabPlayground('variant', e.detail.value));
      if (posDrop) posDrop.addEventListener('dropdownChange', e => updateFabPlayground('position', e.detail.value));
      if (sizeDrop) sizeDrop.addEventListener('dropdownChange', e => updateFabPlayground('size', e.detail.value));
      if (dragCheck) dragCheck.addEventListener('checkboxChange', e => updateFabPlayground('isDraggable', e.detail.checked));
      if (loadCheck) loadCheck.addEventListener('checkboxChange', e => updateFabPlayground('loading', e.detail.checked));
    }, 100);
  };

  const demoMap = {
    btnFabBasic: showBasicFab,
    btnFabExtended: showExtendedFab,
    btnFabSpeedDial: showSpeedDialFab,
    btnFabDraggable: showDraggableFab,
    btnFabAnimated: showAnimatedFab,
    btnFabFloatingWindow: showFloatingWindowDemo,
    btnFabSuper: showSuperFab,
    btnFabInteractive: showInteractiveFab,
    btnFabScrollBehavior: showFabScrollBehavior,
    btnFabSizes: showFabSizes,
  };

  const showFabScrollBehavior = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;
    container.style.height = '500px';
    container.style.overflowY = 'auto';
    container.innerHTML = `
      <div style="height: 1200px; padding: 20px; position: relative;">
        <h4 style="color: var(--text-primary); margin: 0 0 8px;">📜 Scroll Behavior Demo</h4>
        <p style="color: var(--text-secondary, #64748b); font-size: 13px; margin: 0 0 16px;">Scroll down inside this box to see the FABs hide and re-appear.</p>

        <div style="background: var(--bg-secondary,#f8fafc); border-radius: 12px; padding: 16px; margin-bottom: 16px;">
          <p style="font-size: 12px; font-weight: 700; color: var(--text-secondary,#64748b); margin: 0 0 8px;">hide-on-scroll — FAB disappears when scrolling down, reappears when scrolling up</p>
        </div>
        <div style="background: var(--bg-secondary,#f8fafc); border-radius: 12px; padding: 16px;">
          <p style="font-size: 12px; font-weight: 700; color: var(--text-secondary,#64748b); margin: 0 0 8px;">show-on-scroll-up — FAB only shows when user scrolls back up</p>
        </div>

        <ui-fab icon="add" variant="primary" position="bottom-right" hide-on-scroll="true" label="Hide on scroll"></ui-fab>
        <ui-fab icon="arrow-up" variant="success" position="bottom-left" show-on-scroll-up="true" label="Scroll up to see"></ui-fab>
      </div>
    `;
  };

  const showFabSizes = function () {
    clearFabDemo();
    const container = document.getElementById('fabDemoContainer');
    if (!container) return;
    container.style.height = 'auto';
    container.style.overflowY = 'visible';
    container.innerHTML = `
      <div style="padding: 24px; display: flex; flex-direction: column; gap: 40px;">

        <div>
          <h4 style="margin: 0 0 16px; font-size: 13px; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">Size Variants</h4>
          <div style="display: flex; align-items: flex-end; gap: 24px; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <ui-fab icon="add" size="mini" variant="primary" position="static"></ui-fab>
              <span style="font-size: 11px; color: var(--text-secondary,#64748b);">mini</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <ui-fab icon="add" size="sm" variant="primary" position="static"></ui-fab>
              <span style="font-size: 11px; color: var(--text-secondary,#64748b);">small</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <ui-fab icon="add" size="md" variant="primary" position="static"></ui-fab>
              <span style="font-size: 11px; color: var(--text-secondary,#64748b);">medium</span>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <ui-fab icon="add" size="lg" variant="primary" position="static"></ui-fab>
              <span style="font-size: 11px; color: var(--text-secondary,#64748b);">large</span>
            </div>
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 16px; font-size: 13px; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">Color Variants</h4>
          <div style="display: flex; gap: 20px; flex-wrap: wrap;">
            ${['primary','secondary','success','danger','warning','info'].map(c =>
              `<div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
                <ui-fab icon="star" variant="${c}" size="md" position="static"></ui-fab>
                <span style="font-size: 11px; color: var(--text-secondary,#64748b);">${c}</span>
              </div>`
            ).join('')}
          </div>
        </div>

        <div>
          <h4 style="margin: 0 0 16px; font-size: 13px; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">Extended (with Label)</h4>
          <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: center;">
            <ui-fab icon="add" label="Create" variant="primary" size="md" position="static"></ui-fab>
            <ui-fab icon="share-social" label="Share" variant="info" size="md" position="static"></ui-fab>
            <ui-fab icon="cloud-upload" label="Upload" variant="success" size="lg" position="static"></ui-fab>
          </div>
        </div>

      </div>
    `;
  };

  setTimeout(() => {
    Object.entries(demoMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', func);
      }
    });

    // Default view
    showBasicFab();
  }, 100);
}
