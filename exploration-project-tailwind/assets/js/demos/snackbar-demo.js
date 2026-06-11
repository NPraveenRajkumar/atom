export const initSnackbarDemo = () => {
  const section = document.getElementById('snackbar');
  if (!section) return;

  section.innerHTML = `
    <p>Advanced notification system with card stacking, smart grouping, and lifecycle hooks.</p>

    <div class="demo-controls-wrapper">
      <div class="demo-grid-wrapper" id="snackbarNav">
        <ui-button id="btnSnackPlayground" label="🎮 Interactive Playground" variant="outline"></ui-button>
        <ui-button id="btnSnackBasic" label="Basic" variant="outline"></ui-button>
        <ui-button id="btnSnackPositions" label="Positions" variant="outline"></ui-button>
        <ui-button id="btnSnackStacking" label="Stacking & Cards" variant="outline"></ui-button>
        <ui-button id="btnSnackAdvanced" label="Advanced Features" variant="outline"></ui-button>
        <ui-button id="btnSnackNew" label="🆕 New Features" variant="outline"></ui-button>
        <ui-button id="btnSnackWorkflows" label="🔄 Workflows" variant="outline"></ui-button>
        <ui-button id="btnSnackLogic" label="🧪 Logic & Priority" variant="outline"></ui-button>
        <ui-button id="btnSnackThemes" label="💎 Themes & Sizes" variant="outline"></ui-button>
        <ui-button id="btnSnackClear" label="🗑️ Clear All" variant="outline"></ui-button>
      </div>
    </div>

    <div id="snackbarDemoContainer" style="margin-top: 20px;"></div>
    
    <!-- Hidden Global Instance -->
    <ui-snackbar id="globalSnackbar" position="bottom-right" max-visible="5" portal="true"></ui-snackbar>
  `;

  const container = document.getElementById('snackbarDemoContainer');
  window.globalSnackbar = document.getElementById('globalSnackbar');

  const btnMap = {
    btnSnackPlayground: () => window.showInteractiveSnackbar(),
    btnSnackBasic: () => window.showBasicSnackbars(),
    btnSnackPositions: () => window.showSnackbarPositions(),
    btnSnackStacking: () => window.showSnackbarStacking(),
    btnSnackAdvanced: () => window.showAdvancedSnackbars(),
    btnSnackNew: () => window.showNewFeatures(),
    btnSnackWorkflows: () => window.showWorkflowSnackbars(),
    btnSnackLogic: () => window.showLogicSnackbars(),
    btnSnackThemes: () => window.showThemedSnackbars(),
    btnSnackClear: () => window.globalSnackbar.closeAll(),
  };

  const updateActiveBtn = (id) => {
    Object.keys(btnMap).forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.selected = (btnId === id);
    });
  };

  setTimeout(() => {
    Object.entries(btnMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          updateActiveBtn(id);
          func?.();
        });
      }
    });

    // Default view
    updateActiveBtn('btnSnackPlayground');
    window.showInteractiveSnackbar();
  }, 100);

  // Helper for logging
  window.logSnackbarEvent = function (message) {
    const logContent = document.getElementById('eventLogContent');
    if (logContent) {
      const timestamp = new Date().toLocaleTimeString();
      const entry = document.createElement('div');
      entry.style.color = '#059669';
      entry.textContent = `[${timestamp}] ${message}`;
      if (logContent.querySelector('[style*="color: #9ca3af"]')) {
        logContent.innerHTML = '';
      }
      logContent.insertBefore(entry, logContent.firstChild);
      while (logContent.children.length > 5) {
        logContent.removeChild(logContent.lastChild);
      }
    }
  };

  window.showInteractiveSnackbar = () => {
    updateActiveBtn('btnSnackPlayground');
    container.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:20px;padding:28px;border:1px solid var(--border-default,#e2e8f0);">
        <h3>🎮 Interactive Playground</h3>
        <p style="margin-bottom: 20px; color:var(--text-secondary,#64748b); font-size: 14px;">Configure every property of the Snackbar system in real-time.</p>
        
        <div style="background-color:var(--bg-secondary,#f8fafc); padding: 24px; border-radius: 12px; margin-bottom: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.4);">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
            
            <!-- Column 1: Container Props -->
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <h4 style="margin: 0; font-size: 11px; color:var(--accent-pink,#ec4899); text-transform: uppercase; letter-spacing: 0.05em; font-weight: 800;">Container Props</h4>
              
              <ui-dropdown label="Position" id="pgPosition" value="bottom-right">
                <option value="bottom-right">Bottom Right</option>
                <option value="bottom-left">Bottom Left</option>
                <option value="bottom-center">Bottom Center</option>
                <option value="top-right">Top Right</option>
                <option value="top-left">Top Left</option>
                <option value="top-center">Top Center</option>
              </ui-dropdown>

              <ui-dropdown label="Stack Mode" id="pgStackMode" value="stack">
                <option value="stack">Stack (Standard)</option>
                <option value="queue">Queue (FIFO)</option>
                <option value="lifo">LIFO (Stack)</option>
              </ui-dropdown>

              <ui-dropdown label="Open Animation" id="pgOpenMode" value="slide-down">
                <option value="slide-down">Slide Down</option>
                <option value="slide-up">Slide Up</option>
                <option value="slide-left">Slide Left</option>
                <option value="slide-right">Slide Right</option>
                <option value="fade">Fade</option>
                <option value="scale">Scale</option>
                <option value="bounce">Bounce</option>
                <option value="spring">Spring</option>
              </ui-dropdown>

              <ui-input type="number" label="Max Visible" id="pgMaxVisible" value="5" min="1" max="20"></ui-input>

              <ui-input type="number" label="Global Duration (ms)" id="pgGlobalDuration" value="5000" step="500"></ui-input>

              <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 4px; padding: 10px; background:var(--bg-tertiary,#f1f5f9); border-radius: 8px; border:1px solid var(--border-subtle,#f1f5f9);">
                <ui-checkbox label="Card Stacking" id="pgCardStack"></ui-checkbox>
                <ui-checkbox label="Smart Grouping" id="pgCoalesce"></ui-checkbox>
                <ui-checkbox label="Pause on Focus Loss" id="pgPauseFocus" checked></ui-checkbox>
                <ui-checkbox label="Pause on Hover" id="pgPauseHover" checked></ui-checkbox>
                <ui-checkbox label="Show Countdown chip" id="pgShowCountdown"></ui-checkbox>
                <ui-checkbox label="Auto Portal" id="pgPortal" checked></ui-checkbox>
              </div>

              <ui-input type="number" label="Max Duration cap (ms, 0=off)" id="pgMaxDuration" value="0" step="1000"></ui-input>
            </div>

            <!-- Column 2: Notification Props -->
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <h4 style="margin: 0; font-size: 11px; color: #10b981; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 800;">Notification Props</h4>
              
              <ui-dropdown label="Type" id="pgType" value="info">
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
                <option value="neutral">Neutral</option>
                <option value="loading">Loading</option>
                <option value="sovereign">Sovereign</option>
              </ui-dropdown>

              <ui-dropdown label="Variant" id="pgVariant" value="filled">
                <option value="filled">Filled</option>
                <option value="soft">Soft</option>
                <option value="outlined">Outlined</option>
                <option value="glass">Glass</option>
              </ui-dropdown>

              <ui-dropdown label="Size" id="pgSize" value="md">
                <option value="sm">Small</option>
                <option value="md">md</option>
                <option value="lg">Large</option>
              </ui-dropdown>

              <ui-dropdown label="Priority" id="pgPriority" value="normal">
                <option value="normal">Normal</option>
                <option value="high">High</option>
                <option value="urgent">Urgent</option>
              </ui-dropdown>

              <ui-dropdown label="Theme Override" id="pgTheme" value="system">
                <option value="system">System Default</option>
                <option value="light">Forced Light</option>
                <option value="dark">Forced Dark</option>
              </ui-dropdown>

              <ui-dropdown label="Progress Type" id="pgProgress" value="bar">
                <option value="bar">Bar (Bottom)</option>
                <option value="ring">Ring (Icon Area)</option>
                <option value="none">Disabled</option>
              </ui-dropdown>
            </div>

            <!-- Column 3: Content & Assets -->
            <div style="display: flex; flex-direction: column; gap: 14px;">
              <h4 style="margin: 0; font-size: 11px; color: #10b981; text-transform: uppercase; letter-spacing: 0.05em; font-weight: 800;">Content & Assets</h4>
              
              <ui-input label="Title" id="pgTitle" placeholder="Notification Title"></ui-input>

              <ui-input label="Message" id="pgMessage" multiline="true" style="height: 60px;" value="Synchronizing assets with edge nodes..."></ui-input>

              <ui-input label="Custom Icon (Lucide)" id="pgIcon" placeholder="e.g. coffee, zap, bell"></ui-input>

              <ui-input label="Avatar URL" id="pgAvatar" placeholder="https://..."></ui-input>

              <ui-dropdown label="Sound Engine" id="pgSoundMode" value="none">
                <option value="synth">Adaptive Synth</option>
                <option value="none">Muted</option>
                <option value="custom">Custom URL</option>
              </ui-dropdown>

              <div style="display: flex; flex-direction: column; gap: 10px; margin-top: 4px; padding: 10px; background:var(--bg-tertiary,#f1f5f9); border-radius: 8px; border:1px solid var(--border-subtle,#f1f5f9);">
                <ui-checkbox label="Closable" id="pgClosable" checked></ui-checkbox>
                <ui-checkbox label="Haptic Feedback" id="pgHaptic"></ui-checkbox>
                <ui-checkbox label="Slot Support" id="pgEnableSlots"></ui-checkbox>
              </div>
            </div>

          </div>

          <ui-button onclick="firePgNotification()" >Fire Notification 🔥</ui-button>
        </div>

        <div style="margin-top: 20px; background: #0f172a; padding: 20px; border-radius: 12px; position: relative; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
          <div style="color:var(--text-secondary,#64748b); font-size: 11px; position: absolute; top: 12px; left: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">Usage Code</div>
          <ui-button onclick="copyPgCode()" style="position: absolute; top: 12px; right: 12px; background: rgba(255,255,255,0.1); color: white; border: 1px solid rgba(255,255,255,0.2); padding: 4px 10px; border-radius: 6px; font-size: 11px; cursor: pointer;">Copy</ui-button>
          <code id="snackbarCodeBlock" style="color: #f8fafc; font-family: 'Fira Code', monospace; font-size: 13px; display: block; overflow-x: auto; white-space: pre-wrap; line-height: 1.6; margin-top: 20px;"></code>
        </div>

        <div id="eventLog" style="margin-top: 24px; padding: 16px; background-color:var(--bg-secondary,#f8fafc); border-radius: 10px; border:1px solid var(--border-default,#e2e8f0);">
          <h4 style="margin: 0 0 12px; font-size: 14px; color:var(--text-secondary,#64748b); font-weight: 700;">Event Log:</h4>
          <div id="eventLogContent" style="font-family: 'Fira Code', monospace; font-size: 12px; color:var(--text-secondary,#64748b); max-height: 120px; overflow-y: auto;">
            <div style="color:var(--text-secondary,#64748b);">Waiting for events...</div>
          </div>
        </div>
      </div>
      
      <style>
        .pg-label { display: flex; flex-direction: column; gap: 6px; font-size: 12px; font-weight: 700; color:var(--text-secondary,#64748b); }
        .pg-select, .pg-input { padding: 10px 12px; border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; font-size: 13px; font-family: inherit; color:var(--text-primary,#1e293b); background:var(--bg-secondary,#f8fafc); outline: none; transition: border-color 0.2s; }
        .pg-select:focus, .pg-input:focus { border-color:var(--accent-pink,#ec4899); }
        .pg-checkbox { display: flex; align-items: center; gap: 8px; font-size: 13px; font-weight: 500; cursor: pointer; color:var(--text-secondary,#64748b); }
        .demo-block h3 { margin-bottom: 8px; font-size: 24px; font-weight: 800; color:var(--text-primary,#1e293b); }
      </style>
    `;

    globalSnackbar.removeEventListener('snackbarClosed', window._lastClsHandler);
    window._lastClsHandler = e => logSnackbarEvent(`snackbarClosed: ${e.detail.id}`);
    globalSnackbar.addEventListener('snackbarClosed', window._lastClsHandler);

    // Wire playground controls
    setTimeout(() => {
      const ctrls = [
        { id: 'pgPosition', event: 'dropdownChange' },
        { id: 'pgStackMode', event: 'dropdownChange' },
        { id: 'pgOpenMode', event: 'dropdownChange' },
        { id: 'pgMaxVisible', event: 'inputChange' },
        { id: 'pgGlobalDuration', event: 'inputChange' },
        { id: 'pgCardStack', event: 'checkboxChange' },
        { id: 'pgCoalesce', event: 'checkboxChange' },
        { id: 'pgPauseFocus', event: 'checkboxChange' },
        { id: 'pgPauseHover', event: 'checkboxChange' },
        { id: 'pgShowCountdown', event: 'checkboxChange' },
        { id: 'pgPortal', event: 'checkboxChange' },
        { id: 'pgMaxDuration', event: 'inputChange' },
        { id: 'pgType', event: 'dropdownChange' },
        { id: 'pgVariant', event: 'dropdownChange' },
        { id: 'pgSize', event: 'dropdownChange' },
        { id: 'pgPriority', event: 'dropdownChange' },
        { id: 'pgTheme', event: 'dropdownChange' },
        { id: 'pgProgress', event: 'dropdownChange' },
        { id: 'pgTitle', event: 'inputChange' },
        { id: 'pgMessage', event: 'inputChange' },
        { id: 'pgIcon', event: 'inputChange' },
        { id: 'pgAvatar', event: 'inputChange' },
        { id: 'pgSoundMode', event: 'dropdownChange' },
        { id: 'pgClosable', event: 'checkboxChange' },
        { id: 'pgHaptic', event: 'checkboxChange' },
        { id: 'pgEnableSlots', event: 'checkboxChange' },
      ];

      ctrls.forEach(ctrl => {
        const el = document.getElementById(ctrl.id);
        if (el) el.addEventListener(ctrl.event, () => updateInteractiveSnackbar());
      });

      updateInteractiveSnackbar();
    }, 100);
  };

  window.updateInteractiveSnackbar = () => {
    const codeBlock = document.getElementById('snackbarCodeBlock');
    if (!codeBlock) return;

    const props = {
      position: document.getElementById('pgPosition').value,
      maxVisible: document.getElementById('pgMaxVisible').value,
      stackMode: document.getElementById('pgStackMode').value,
      openMode: document.getElementById('pgOpenMode').value,
      duration: document.getElementById('pgGlobalDuration').value,
      maxDuration: document.getElementById('pgMaxDuration')?.value || '0',
      cardStack: document.getElementById('pgCardStack').checked,
      coalesce: document.getElementById('pgCoalesce').checked,
      pauseOnFocusLoss: document.getElementById('pgPauseFocus').checked,
      pauseOnHover: document.getElementById('pgPauseHover')?.checked ?? true,
      showCountdown: document.getElementById('pgShowCountdown')?.checked ?? false,
      portal: document.getElementById('pgPortal').checked,
      soundMode: document.getElementById('pgSoundMode').value,
      enableSlots: document.getElementById('pgEnableSlots').checked,
    };

    const item = {
      type: document.getElementById('pgType').value,
      variant: document.getElementById('pgVariant').value,
      size: document.getElementById('pgSize').value,
      priority: document.getElementById('pgPriority').value,
      theme: document.getElementById('pgTheme').value,
      progress: document.getElementById('pgProgress').value,
      title: document.getElementById('pgTitle').value,
      message: document.getElementById('pgMessage').value,
      icon: document.getElementById('pgIcon').value,
      avatar: document.getElementById('pgAvatar').value,
      closable: document.getElementById('pgClosable').checked,
      haptic: document.getElementById('pgHaptic').checked,
    };

    codeBlock.textContent = `
// 1. Configure the Container
const snackbar = document.querySelector('ui-snackbar');
snackbar.position = '${props.position}';
snackbar.stackMode = '${props.stackMode}';
snackbar.openMode = '${props.openMode}';
snackbar.maxVisible = ${props.maxVisible};
snackbar.duration = ${props.duration};
${parseInt(props.maxDuration) > 0 ? `snackbar.maxDuration = ${props.maxDuration};\n` : ''}snackbar.cardStack = ${props.cardStack};
snackbar.coalesce = ${props.coalesce};
snackbar.pauseOnHover = ${props.pauseOnHover};
snackbar.pauseOnFocusLoss = ${props.pauseOnFocusLoss};
snackbar.showCountdown = ${props.showCountdown};
snackbar.soundMode = '${props.soundMode}';
snackbar.enableSlots = ${props.enableSlots};

// 2. Fire the Notification
snackbar.add({
  type: '${item.type}',
  variant: '${item.variant}',
  size: '${item.size}',
  priority: '${item.priority}',
  ${item.theme !== 'system' ? `theme: '${item.theme}',\n  ` : ''}${item.title ? `title: '${item.title}',\n  ` : ''}message: '${item.message}',
  ${item.icon ? `icon: '${item.icon}',\n  ` : ''}${item.avatar ? `avatar: '${item.avatar}',\n  ` : ''}progress: '${item.progress}',
  closable: ${item.closable},
  haptic: ${item.haptic}
});`.trim();
  };

  window.firePgNotification = () => {
    // Apply Global Props
    globalSnackbar.position = document.getElementById('pgPosition').value;
    globalSnackbar.stackMode = document.getElementById('pgStackMode').value;
    globalSnackbar.openMode = document.getElementById('pgOpenMode').value;
    globalSnackbar.maxVisible = parseInt(document.getElementById('pgMaxVisible').value);
    globalSnackbar.duration = parseInt(document.getElementById('pgGlobalDuration').value);
    globalSnackbar.maxDuration = parseInt(document.getElementById('pgMaxDuration')?.value || '0');
    globalSnackbar.cardStack = document.getElementById('pgCardStack').checked;
    globalSnackbar.coalesce = document.getElementById('pgCoalesce').checked;
    globalSnackbar.pauseOnHover = document.getElementById('pgPauseHover')?.checked ?? true;
    globalSnackbar.pauseOnFocusLoss = document.getElementById('pgPauseFocus').checked;
    globalSnackbar.showCountdown = document.getElementById('pgShowCountdown')?.checked ?? false;
    globalSnackbar.portal = document.getElementById('pgPortal').checked;
    globalSnackbar.soundMode = document.getElementById('pgSoundMode').value;
    globalSnackbar.enableSlots = document.getElementById('pgEnableSlots').checked;

    // Trigger Notification
    globalSnackbar.add({
      type: document.getElementById('pgType').value,
      variant: document.getElementById('pgVariant').value,
      size: document.getElementById('pgSize').value,
      priority: document.getElementById('pgPriority').value,
      theme: document.getElementById('pgTheme').value !== 'system' ? document.getElementById('pgTheme').value : undefined,
      title: document.getElementById('pgTitle').value || undefined,
      message: document.getElementById('pgMessage').value,
      icon: document.getElementById('pgIcon').value || undefined,
      avatar: document.getElementById('pgAvatar').value || undefined,
      progress: document.getElementById('pgProgress').value,
      closable: document.getElementById('pgClosable').checked,
      haptic: document.getElementById('pgHaptic').checked,
    });
  };

  window.showBasicSnackbars = () => {
    updateActiveBtn('btnSnackBasic');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Standard Types</h3>
        <p>All 7 notification types with their default icons and colours.</p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px;">
          <ui-button onclick="globalSnackbar.add({message:'Operation completed successfully', title:'Success', type:'success'})">✅ Success</ui-button>
          <ui-button onclick="globalSnackbar.add({message:'An unexpected error occurred', title:'Error', type:'error'})">❌ Error</ui-button>
          <ui-button onclick="globalSnackbar.add({message:'Disk usage is above 90%', title:'Warning', type:'warning'})">⚠️ Warning</ui-button>
          <ui-button onclick="globalSnackbar.add({message:'3 new updates available', title:'Info', type:'info'})">ℹ️ Info</ui-button>
          <ui-button onclick="globalSnackbar.add({message:'Reminder: meeting at 3pm', type:'neutral', variant:'outlined'})">💬 Neutral</ui-button>
          <ui-button onclick="globalSnackbar.add({message:'Syncing with cloud...', type:'loading', duration:0, progress:'ring'})">⏳ Loading</ui-button>
          <ui-button onclick="testSovereignProtocol()">👑 Sovereign</ui-button>
        </div>
      </div>

      <div class="demo-block" style="margin-top: 20px;">
        <h3>Visual Variants</h3>
        <p>4 visual styles applied to the same info notification.</p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 20px;">
          <ui-button onclick="globalSnackbar.add({type:'info', variant:'filled', title:'Filled', message:'Default filled style'})">Filled</ui-button>
          <ui-button onclick="globalSnackbar.add({type:'info', variant:'soft', title:'Soft', message:'Muted background style'})">Soft</ui-button>
          <ui-button onclick="globalSnackbar.add({type:'info', variant:'outlined', title:'Outlined', message:'Border-only style'})">Outlined</ui-button>
          <ui-button onclick="globalSnackbar.add({type:'info', variant:'glass', title:'Glass', message:'Frosted glass style'})">Glass</ui-button>
        </div>
      </div>

      <div class="demo-block" style="margin-top: 20px;">
        <h3>Countdown Chip + Progress</h3>
        <p>Enable <code>showCountdown</code> to display a live "Xs" chip; combine with <code>progress</code> for a visual timer.</p>
        <div style="display:flex; gap:12px; flex-wrap:wrap; margin-top:16px;">
          <ui-button onclick="testCountdownDemo('bar')" >⏱ Bar + Countdown</ui-button>
          <ui-button onclick="testCountdownDemo('ring')" >🔵 Ring + Countdown</ui-button>
        </div>
      </div>
    `;

    window.testCountdownDemo = progressType => {
      globalSnackbar.showCountdown = true;
      globalSnackbar
        .add({
          title: 'Auto-closing in 8s',
          message: `Watch the ${progressType} progress and countdown chip.`,
          type: 'info',
          progress: progressType,
          duration: 8000,
        })
        .then(() => {
          globalSnackbar.showCountdown = false;
        });
    };
  };

  window.showSnackbarPositions = () => {
    updateActiveBtn('btnSnackPositions');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Anchor Positions</h3>
        <p>Choose where notifications appear on the screen.</p>
        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; margin-top: 20px; max-width: 600px;">
          <ui-button onclick="testPosition('top-left')" >Top Left</ui-button>
          <ui-button onclick="testPosition('top-center')" >Top Center</ui-button>
          <ui-button onclick="testPosition('top-right')" >Top Right</ui-button>
          <ui-button onclick="testPosition('bottom-left')" >Bottom Left</ui-button>
          <ui-button onclick="testPosition('bottom-center')" >Bottom Center</ui-button>
          <ui-button onclick="testPosition('bottom-right')" >Bottom Right</ui-button>
        </div>
      </div>
    `;
    window.testPosition = pos => {
      globalSnackbar.position = pos;
      globalSnackbar.add({ message: `Switched to ${pos}`, type: 'info' });
    };
  };

  window.showSnackbarStacking = () => {
    updateActiveBtn('btnSnackStacking');
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎴 Card Stacking Mode</h3>
        <p>Visual stacking engine where notifications occupy less space and expand logically. Highly optimized for mobile and clean dashboards.</p>
        
        <div style="display: flex; gap: 12px; margin-top: 20px; background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
          <div style="flex: 1;">
            <h4 style="margin: 0 0 8px; font-weight: 700;">Global Toggle</h4>
            <div style="display: flex; gap: 10px;">
              <ui-button onclick="testCardStack(true)" style="flex: 1;">Enable Stack</ui-button>
              <ui-button onclick="testCardStack(false)" style="flex: 1; ">Disable</ui-button>
            </div>
          </div>
        </div>

        <div style="margin-top: 30px;">
          <h4 style="margin: 0 0 12px; font-weight: 700;">Orientation Playground</h4>
          <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">Test how the Material Tray adapts to different screen anchors.</p>
          
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 10px; max-width: 600px;">
            <ui-button onclick="testStackedPosition('top-left')" >Top Left</ui-button>
            <ui-button onclick="testStackedPosition('top-center')" >Top Center</ui-button>
            <ui-button onclick="testStackedPosition('top-right')" >Top Right</ui-button>
            <ui-button onclick="testStackedPosition('bottom-left')"  >Bottom Left</ui-button>
            <ui-button onclick="testStackedPosition('bottom-center')"  >Bottom Center</ui-button>
            <ui-button onclick="testStackedPosition('bottom-right')"  >Bottom Right</ui-button>
          </div>
        </div>
      </div>

      
    `;

    window.testCardStack = enabled => {
      globalSnackbar.cardStack = enabled;
      globalSnackbar.maxVisible = 5;
      globalSnackbar.closeAll();
      if (enabled) {
        setTimeout(() => {
          for (let i = 0; i < 4; i++) {
            globalSnackbar.add({ title: `Stack Element ${i + 1}`, message: `This is a high-fidelity stacked notification layer.`, type: 'info', duration: 0 });
          }
        }, 300);
      }
    };

    window.testStackedPosition = pos => {
      globalSnackbar.cardStack = true;
      globalSnackbar.position = pos;
      globalSnackbar.closeAll();
      setTimeout(() => {
        const types = ['success', 'error', 'info', 'warning'];
        const titles = ['System Sync', 'Access Denied', 'Update Ready', 'Limit Warning'];
        for (let i = 0; i < 4; i++) {
          globalSnackbar.add({
            title: titles[i],
            message: `Positioning engine synchronized at ${pos} edge.`,
            type: types[i],
            duration: 0,
          });
        }
      }, 300);
    };
  };

  window.showAdvancedSnackbars = () => {
    updateActiveBtn('btnSnackAdvanced');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Live Dynamic Updates</h3>
        <p>Update existing notifications in real-time (e.g. progress percentages).</p>
        <ui-button onclick="testLiveUpdater()" >Start Process Demo</ui-button>
      </div>
      <div class="demo-block" style="margin-top: 20px;">
        <h3>Rich Media & Slots</h3>
        <p>Inject complex HTML layouts using the 'enable-slots' property.</p>
        <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-top: 12px;">
          <ui-button onclick="testSlottedMedia()" >Launch Social Slot</ui-button>
          <ui-button onclick="testLongMessage()" >Long Text Stress Test</ui-button>
        </div>
      </div>
    `;

    window.testLongMessage = () => {
      globalSnackbar.add({
        title: 'Network Stress Alert',
        message:
          'This_is_an_exceptionally_long_message_without_any_natural_spaces_to_test_the_word_break_logic_and_ensure_it_does_not_overflow_the_screen_width_under_extreme_circumstances_like_continuous_path_descriptors_or_unformatted_log_strings_that_might_be_passed_from_an_active_terminal_output_buffer.',
        type: 'warning',
        duration: 0,
      });
      globalSnackbar.add({
        title: 'Multi-line Paragraph',
        message:
          'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.',
        type: 'info',
        duration: 0,
      });
    };
  };

  window.showWorkflowSnackbars = () => {
    updateActiveBtn('btnSnackWorkflows');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Intelligent Workflows</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-top: 20px;">
          <div style="background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
            <h4 style="margin: 0 0 8px; font-weight: 700;">Async Promise</h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 12px;">Automatic Loading -> Success/Error state.</p>
            <ui-button onclick="testSnackbarPromise()" >Run Job</ui-button>
          </div>
          <div style="background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
            <h4 style="margin: 0 0 8px; font-weight: 700;">Undoable Action</h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 12px;">Archive or Delete with a 6s rollback window.</p>
            <ui-button onclick="testSnackbarUndoable()" >Delete Item</ui-button>
          </div>
          <div style="background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
            <h4 style="margin: 0 0 8px; font-weight: 700;">Quick Input</h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 12px;">Collect data directly within the popup.</p>
            <ui-button onclick="testSnackbarInput()" >Add Tag</ui-button>
          </div>
        </div>
      </div>
    `;
  };

  window.showLogicSnackbars = () => {
    updateActiveBtn('btnSnackLogic');
    container.innerHTML = `
      <div class="demo-block">
        <h3>🧪 Behavior & Business Logic</h3>
        <p>Demonstrating how the component handles congestion and delivery intelligence.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
          <!-- Smart Coalescing -->
          <div style="background:var(--accent-yellow-soft,#fffbeb); padding: 20px; border-radius: 12px; border: 1px solid #fde68a;">
            <h4 style="color:var(--accent-yellow,#92400e); margin: 0 0 8px;">Smart Coalescing</h4>
            <p style="font-size: 13px; color:var(--accent-yellow,#b45309); margin-bottom: 15px;">Automatically groups identical messages into a single entry with a counter.</p>
            <ui-button onclick="testCoalesce()" ">Spam 10 Messages</ui-button>
          </div>

          <!-- Priority Reordering -->
          <div style="background:var(--accent-green-soft,#f0fdf4); padding: 20px; border-radius: 12px; border: 1px solid #bbf7d0;">
            <h4 style="color: var(--accent-green,#166534); margin: 0 0 8px;">Priority Reordering</h4>
            <p style="font-size: 13px; color:var(--accent-green,#15803d); margin-bottom: 15px;">Trigger 5 normal messages, then jump the line with a High priority alert.</p>
            <ui-button onclick="testPriorityJam()" ">Priority Jam Demo</ui-button>
          </div>

          <!-- Animation Lab -->
          <div style="background:var(--accent-purple-soft,#f5f3ff); padding: 20px; border-radius: 12px; border: 1px solid #ddd6fe;">
            <h4 style="color: #5b21b6; margin: 0 0 8px;">Animation Lab</h4>
            <p style="font-size: 13px; color:var(--accent-purple,#6d28d9); margin-bottom: 15px;">Cycle through all entry physics systems sequentially.</p>
            <ui-button onclick="testAnimationLab()" ">Run Animation Cycle</ui-button>
          </div>
        </div>
      </div>
    `;

    window.testCoalesce = () => {
      globalSnackbar.coalesce = true;
      globalSnackbar.add({ message: 'Coalescing active. Repeating signal...', type: 'warning' });
      let count = 0;
      const t = setInterval(() => {
        globalSnackbar.add({ message: 'Repeating signal...', type: 'warning' });
        if (++count > 8) clearInterval(t);
      }, 200);
    };

    window.testPriorityJam = () => {
      globalSnackbar.closeAll();
      globalSnackbar.stackMode = 'stack';
      for (let i = 0; i < 3; i++) {
        globalSnackbar.add({ message: `Normal importance message ${i + 1}`, type: 'info', duration: 0 });
      }
      setTimeout(() => {
        globalSnackbar.add({
          message: 'CRITICAL OVERRIDE: High priority alert bypassing queue!',
          type: 'error',
          priority: 'urgent',
          duration: 0,
        });
      }, 1000);
    };

    window.testAnimationLab = async () => {
      const anims = ['slide-up', 'slide-down', 'slide-left', 'slide-right', 'fade', 'scale', 'bounce', 'spring'];
      globalSnackbar.closeAll();
      for (const anim of anims) {
        globalSnackbar.openMode = anim;
        globalSnackbar.add({ message: `Testing animation: ${anim}`, type: 'info', duration: 1500 });
        await new Promise(r => setTimeout(r, 800));
      }
    };
  };

  window.showThemedSnackbars = () => {
    updateActiveBtn('btnSnackThemes');
    container.innerHTML = `
      <div class="demo-block">
        <h3>💎 Branding, Themes & Scaling</h3>
        <p>Adapt the notification system to your specific UI guidelines.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; margin-top: 20px;">
          <!-- Light Theme -->
          <div style="background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
             <h4 style="margin: 0 0 12px;">Adaptive Themes</h4>
             <ui-button onclick="testTheme('light')" -weight: 600; margin-bottom: 8px;">Force Light Mode</ui-button>
             <ui-button onclick="testTheme('dark')" ">Force Dark Mode</ui-button>
          </div>

          <!-- Component Sizing -->
          <div style="background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
             <h4 style="margin: 0 0 12px;">Component Scaling</h4>
             <div style="display: flex; gap: 8px;">
                <ui-button onclick="testSize('sm')" >Small</ui-button>
                <ui-button onclick="testSize('md')" >md</ui-button>
                <ui-button onclick="testSize('lg')" >Large</ui-button>
              </div>
              <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 10px;">Dynamically rescales padding, fonts, and icon sizes for global parity.</p>
          </div>
        </div>
      </div>
    `;

    window.testTheme = t => {
      globalSnackbar.theme = t;
      globalSnackbar.add({ message: `Forced ${t} theme active`, type: 'info' });
    };
    window.testSize = s => {
      globalSnackbar.size = s;
      globalSnackbar.add({ message: `Scaling set to ${s} variant`, type: 'success' });
    };
  };

  // Common Helpers
  window.testSovereignProtocol = () => {
    globalSnackbar.add({
      type: 'sovereign',
      title: 'SOVEREIGN_PROTOCOL_ARMED',
      message: 'Universal encryption layer active. Multi-regional synchronization at 100% fidelity.',
      duration: 8000,
      haptic: true,
    });
  };

  window.testLiveUpdater = async () => {
    const id = await globalSnackbar.add({
      type: 'loading',
      title: 'System Initializing...',
      message: 'Preparing assets for global deployment',
      duration: 0,
      progress: 'ring',
    });

    let progress = 0;
    const interval = setInterval(() => {
      progress += 20;
      globalSnackbar.update(id, {
        title: progress === 100 ? 'Deployment Complete' : `Processing Assets: ${progress}%`,
        message: progress === 100 ? 'All nodes are green. System is live.' : 'Transferring encrypted data packets...',
        type: progress === 100 ? 'success' : 'loading',
      });

      if (progress === 100) {
        clearInterval(interval);
        globalSnackbar.update(id, { duration: 4000, progress: 'bar' });
      }
    }, 1000);
  };

  window.testSlottedMedia = () => {
    globalSnackbar.enableSlots = true;
    const slotId = 'slot-' + Date.now();
    const slotDiv = document.createElement('div');
    slotDiv.id = slotId;
    slotDiv.innerHTML = `
      <div style="background:var(--bg-primary,white); padding: 20px; border-radius: 16px; box-shadow: 0 15px 30px -10px rgba(0,0,0,0.2); border:1px solid var(--border-default,#e2e8f0); min-width: 360px; animation: slideUp 0.5s ease; position: relative; pointer-events: auto; margin-bottom: 10px;">
        <div style="display: flex; gap: 16px; align-items: start; margin-bottom: 16px;">
          <div style="width: 44px; height: 44px; border-radius: 10px; background: linear-gradient(135deg, #10b981, #10b981); display: flex; align-items: center; justify-content: center; color: white;">
            <ui-icon library="lucide" name="file-text" size="24px"></ui-icon>
          </div>
          <div style="flex: 1;">
            <div style="font-weight: 800; color:var(--text-primary,#0f172a); font-size: 15px;">New Shared Document</div>
            <div style="font-size: 13px; color:var(--text-secondary,#64748b); margin-top: 2px;">"Q1_Report_Final.pdf" shared by <b>Sarah</b></div>
          </div>
          <ui-button onclick="this.closest('div[id^=slot-]').remove()" style="border: none; background:var(--bg-tertiary,#f1f5f9); color:var(--text-secondary,#64748b); width: 24px; height: 24px; border-radius: 6px; cursor: pointer; display: flex; align-items: center; justify-content: center; font-size: 10px;">✕</ui-button>
        </div>
        <div style="display: flex; gap: 10px;">
          <ui-button onclick="alert('Downloading...')" ; cursor: pointer;">Download</ui-button>
          <ui-button onclick="this.closest('div[id^=slot-]').remove()" 00; cursor: pointer;">Ignore</ui-button>
        </div>
      </div>
    `;
    globalSnackbar.appendChild(slotDiv);
  };

  window.testSnackbarPromise = () => {
    globalSnackbar.promise(new Promise((resolve, reject) => setTimeout(Math.random() > 0.3 ? resolve : reject, 3000)), {
      loading: 'Synchronizing assets with edge nodes...',
      success: 'Asset synchronization complete!',
      error: 'Connection timeout. Failed to sync.',
    });
  };

  window.testSnackbarUndoable = () => {
    globalSnackbar.undoable({
      message: 'Project "Delta-Nine" has been archived.',
      type: 'error',
      onUndo: () => globalSnackbar.add({ message: 'Restoration successful!', type: 'success' }),
      onDismiss: () => console.log('Archive confirmed.'),
    });
  };

  window.testSnackbarInput = () => {
    globalSnackbar.add({
      type: 'info',
      message: 'Deployment complete. Add a tag for this build:',
      duration: 0,
      input: {
        placeholder: 'e.g. production-v2',
        onSubmit: val => globalSnackbar.add({ message: `Tag "${val}" applied successfully.`, type: 'success' }),
      },
    });
  };

  window.copyPgCode = () => {
    const code = document.getElementById('snackbarCodeBlock').textContent;
    navigator.clipboard.writeText(code);
    globalSnackbar.add({ message: 'Implementation code copied!', type: 'success', duration: 2000 });
  };

  // ── Wire new events to interactive playground event log ──────
  globalSnackbar.addEventListener('snackbarAdded', e => logSnackbarEvent(`✅ snackbarAdded: ${e.detail.item.message?.substring(0, 40)}`));
  globalSnackbar.addEventListener('snackbarUpdated', e => logSnackbarEvent(`✏️ snackbarUpdated: id=${e.detail.id}`));

  // ── New Features Demo ────────────────────────────────────────
  window.showNewFeatures = () => {
    updateActiveBtn('btnSnackNew');
    globalSnackbar.cardStack = false;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🆕 New Features Showcase</h3>
        <p style="color:var(--text-secondary,#64748b); font-size:14px; margin-bottom:24px;">All 7 newly implemented capabilities in one place.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 16px;">

          <!-- Events -->
          <div style="background:var(--accent-green-soft,#f0fdf4); padding:20px; border-radius:12px; border:1px solid #bbf7d0;">
            <h4 style="color:var(--accent-green,#166534); margin:0 0 6px;">📡 snackbarAdded / Updated Events</h4>
            <p style="font-size:13px;color:var(--accent-green,#15803d);margin-bottom:12px;">Fire a notification — both events are logged in the Playground event log.</p>
            <ui-button onclick="testEventsDemo()" >Fire &amp; Observe Events</ui-button>
          </div>

          <!-- getAll() -->
          <div style="background:var(--accent-blue-soft,#eff6ff); padding:20px; border-radius:12px; border:1px solid #bfdbfe;">
            <h4 style="color:var(--accent-blue,#1e40af); margin:0 0 6px;">📋 getAll()</h4>
            <p style="font-size:13px;color:var(--accent-blue,#1d4ed8);margin-bottom:12px;">Query all current notifications programmatically.</p>
            <ui-button onclick="testGetAll()" >getAll() Snapshot</ui-button>
            <pre id="getAllOutput" style="margin-top:10px;background:#1e3a5f;color:#93c5fd;padding:10px;border-radius:6px;font-size:11px;max-height:100px;overflow-y:auto;display:none;"></pre>
          </div>

          <!-- pause() / resume() -->
          <div style="background:#fdf4ff; padding:20px; border-radius:12px; border:1px solid #e9d5ff;">
            <h4 style="color:#6b21a8; margin:0 0 6px;">⏯️ pause(id) / resume(id)</h4>
            <p style="font-size:13px;color:#7e22ce;margin-bottom:12px;">Freeze or thaw individual notification timers.</p>
            <div style="display:flex;gap:8px;">
              <ui-button onclick="testPauseResume('pause')" >⏸ Pause</ui-button>
              <ui-button onclick="testPauseResume('resume')" >▶ Resume</ui-button>
            </div>
          </div>

          <!-- replace() -->
          <div style="background:var(--accent-orange-soft,#fff7ed); padding:20px; border-radius:12px; border:1px solid #fed7aa;">
            <h4 style="color:#9a3412; margin:0 0 6px;">🔄 replace(id, newItem)</h4>
            <p style="font-size:13px;color:var(--accent-orange,#c2410c);margin-bottom:12px;">Completely swap an existing notification with new content.</p>
            <ui-button onclick="testReplaceDemo()" >Replace in 2s</ui-button>
          </div>

          <!-- closeNext() fix -->
          <div style="background:var(--bg-tertiary,#f1f5f9); padding:20px; border-radius:12px; border:1px solid #cbd5e1;">
            <h4 style="color:var(--text-primary,#0f172a); margin:0 0 6px;">🗂 closeNext() — Fixed FIFO/LIFO</h4>
            <p style="font-size:13px;color:#475569;margin-bottom:12px;">Queue mode closes oldest first; Stack removes newest.</p>
            <div style="display:flex;gap:8px;">
              <ui-button onclick="testCloseNext('queue')" >Queue FIFO</ui-button>
              <ui-button onclick="testCloseNext('stack')" >Stack LIFO</ui-button>
            </div>
          </div>

          <!-- pauseOnHover -->
          <div style="background:#fefce8; padding:20px; border-radius:12px; border:1px solid #fde68a;">
            <h4 style="color:#854d0e; margin:0 0 6px;">🖱️ pauseOnHover Prop</h4>
            <p style="font-size:13px;color:var(--accent-yellow,#92400e);margin-bottom:12px;">Toggle whether hovering pauses auto-dismiss timers.</p>
            <div style="display:flex;gap:8px;">
              <ui-button onclick="setPauseOnHover(true)" >Pause ON</ui-button>
              <ui-button onclick="setPauseOnHover(false)" >Pause OFF</ui-button>
            </div>
          </div>

          <!-- Stack Count Badge -->
          <div style="background:#f0fdfa; padding:20px; border-radius:12px; border:1px solid #99f6e4;">
            <h4 style="color:#134e4a; margin:0 0 6px;">🔢 Stack Count Badge</h4>
            <p style="font-size:13px;color:#0f766e;margin-bottom:12px;">Collapsed stacks show a pill count badge. Click it to expand.</p>
            <ui-button onclick="testStackBadge()" >Show Stack Badge</ui-button>
          </div>

        </div>
      </div>
    `;

    let _pauseResumeId = null;

    window.testEventsDemo = () => {
      globalSnackbar.add({ title: 'Event Fired', message: 'Check the Playground → Event Log', type: 'info' });
      globalSnackbar.add({ message: 'Second event for update test', type: 'success', duration: 10000 }).then(id => {
        setTimeout(() => globalSnackbar.update(id, { title: 'Updated!', message: 'This fires snackbarUpdated event' }), 1500);
      });
    };

    window.testGetAll = async () => {
      globalSnackbar.add({ message: 'Snapshot item A', type: 'info', duration: 4000 });
      globalSnackbar.add({ message: 'Snapshot item B', type: 'success', duration: 4000 });
      setTimeout(async () => {
        const all = await globalSnackbar.getAll();
        const output = document.getElementById('getAllOutput');
        if (output) {
          output.style.display = 'block';
          output.textContent = JSON.stringify(
            all.map(i => ({ id: i.id, type: i.type, message: i.message })),
            null,
            2,
          );
        }
      }, 200);
    };

    window.testPauseResume = async action => {
      if (action === 'pause') {
        const id = await globalSnackbar.add({ title: 'Timer Frozen', message: 'This will not auto-close until resumed', type: 'warning', duration: 6000 });
        _pauseResumeId = id;
        await globalSnackbar.pause(id);
        globalSnackbar.add({ message: 'Timer paused! Click Resume to restart.', type: 'info', duration: 3000 });
      } else if (_pauseResumeId) {
        await globalSnackbar.resume(_pauseResumeId);
        globalSnackbar.add({ message: 'Timer resumed!', type: 'success', duration: 2000 });
        _pauseResumeId = null;
      } else {
        globalSnackbar.add({ message: 'Pause a notification first.', type: 'warning', duration: 2000 });
      }
    };

    window.testReplaceDemo = async () => {
      const id = await globalSnackbar.add({ title: 'Original Message', message: 'Will be replaced in 2 seconds...', type: 'info', duration: 10000 });
      setTimeout(() => {
        globalSnackbar.replace(id, { title: '✅ Replaced!', message: 'This is the brand new content.', type: 'success', duration: 5000 });
      }, 2000);
    };

    window.testCloseNext = mode => {
      globalSnackbar.stackMode = mode;
      globalSnackbar.closeAll();
      setTimeout(() => {
        ['First', 'Second', 'Third'].forEach((label, i) => {
          setTimeout(() => globalSnackbar.add({ message: `${label} notification (${mode})`, type: 'info', duration: 0 }), i * 150);
        });
        setTimeout(() => globalSnackbar.closeNext(), 600);
      }, 200);
    };

    window.setPauseOnHover = enabled => {
      globalSnackbar.pauseOnHover = enabled;
      globalSnackbar.add({
        message: `pauseOnHover = ${enabled}. ${enabled ? 'Hover to pause timer.' : 'Hovering will NOT pause timers.'}`,
        type: enabled ? 'success' : 'warning',
        duration: 5000,
      });
    };

    window.testStackBadge = () => {
      globalSnackbar.cardStack = true;
      globalSnackbar.position = 'bottom-right';
      globalSnackbar.closeAll();
      setTimeout(() => {
        ['Network Alert', 'Build Complete', 'Deployment Done', 'Sync Finished'].forEach((title, i) => {
          setTimeout(() => globalSnackbar.add({ title, message: 'System event detected.', type: ['error', 'success', 'info', 'warning'][i], duration: 0 }), i * 100);
        });
      }, 300);
    };

    // maxDuration demo
    window.testMaxDuration = cap => {
      globalSnackbar.maxDuration = cap;
      globalSnackbar.add({
        title: `maxDuration = ${cap}ms`,
        message: `This would last 30s — but it's capped to ${cap / 1000}s.`,
        type: 'warning',
        duration: 30000,
        progress: 'bar',
      });
      globalSnackbar.add({ message: `Cap applied: closes in ~${cap / 1000}s`, type: 'info', duration: 2000 });
    };

    // showCountdown demo
    window.testShowCountdown = on => {
      globalSnackbar.showCountdown = on;
      globalSnackbar.add({
        title: on ? 'Countdown ON' : 'Countdown OFF',
        message: on ? 'Watch the Xs chip in the corner.' : 'Chip is hidden.',
        type: 'info',
        duration: 10000,
        progress: 'bar',
      });
    };

    // RTL demo — only affects this snackbar instance, never the page
    window.testRTL = enable => {
      globalSnackbar.closeAll();
      globalSnackbar.textDirection = enable ? 'rtl' : 'ltr';
      globalSnackbar.position = 'bottom-right';
      setTimeout(
        () =>
          globalSnackbar.add({
            title: enable ? '🌐 RTL Mode Active' : '↩️ Back to LTR',
            message: enable
              ? 'Slide animation, icon, and close button are all mirrored. (مرحبا بكم في الوضع العربي)'
              : 'Direction restored to LTR. Page layout was never affected.',
            type: enable ? 'info' : 'success',
            duration: 7000,
            progress: 'bar',
          }),
        100,
      );
    };

    // Inject the 3 new cards into the grid (append after existing cards)
    const grid = container.querySelector('[style*="grid-template-columns"]');
    if (grid) {
      grid.insertAdjacentHTML(
        'beforeend',
        `
        <!-- maxDuration -->
        <div style="background:#fff1f2; padding:20px; border-radius:12px; border:1px solid #fecdd3;">
          <h4 style="color:#9f1239; margin:0 0 6px;">⏱ maxDuration Cap</h4>
          <p style="font-size:13px;color:#be123c;margin-bottom:12px;">Clamps any duration to a ceiling. The notification below would last 30s — but gets cut.</p>
          <div style="display:flex;gap:8px;">
            <ui-button onclick="testMaxDuration(3000)" >Cap 3s</ui-button>
            <ui-button onclick="testMaxDuration(8000)" >Cap 8s</ui-button>
          </div>
        </div>

        <!-- showCountdown -->
        <div style="background:#f0fdfa; padding:20px; border-radius:12px; border:1px solid #99f6e4;">
          <h4 style="color:#134e4a; margin:0 0 6px;">🔢 showCountdown Chip</h4>
          <p style="font-size:13px;color:#0f766e;margin-bottom:12px;">Displays a live "Xs" countdown inside the notification. Hides on hover (timer paused).</p>
          <div style="display:flex;gap:8px;">
            <ui-button onclick="testShowCountdown(true)" >Enable</ui-button>
            <ui-button onclick="testShowCountdown(false)" >Disable</ui-button>
          </div>
        </div>

        <!-- RTL -->
        <div style="background:var(--accent-purple-soft,#f5f3ff); padding:20px; border-radius:12px; border:1px solid #ddd6fe;">
          <h4 style="color:#5b21b6; margin:0 0 6px;">🌐 RTL Support</h4>
          <p style="font-size:13px;color:var(--accent-purple,#6d28d9);margin-bottom:12px;">Auto-detected from <code>dir="rtl"</code>. Positions and slide animations are mirrored.</p>
          <div style="display:flex;gap:8px;">
            <ui-button onclick="testRTL(true)" >Enable RTL</ui-button>
            <ui-button onclick="testRTL(false)" >Back to LTR</ui-button>
          </div>
        </div>
      `,
      );
    }
  };

  // Default view
  showInteractiveSnackbar();
};

window.initSnackbarDemo = initSnackbarDemo;
