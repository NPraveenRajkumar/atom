// Timer Component Demo - Elite Features
export function initTimerDemo() {
  const section = document.getElementById('timer');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Professional timing toolkit with high-precision stopwatches, visual alerts, and local persistence.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button label="🎮 Playground"  onclick="showTimerPlayground()" variant="outline"></ui-button>
      <ui-button label="✨ Overview"  onclick="showTimerOverview()" variant="outline"></ui-button>
      <ui-button label="💎 Elite Features"  onclick="showEliteDemo()" variant="outline"></ui-button>
    </div>

    <div id="timerDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    window.showTimerPlayground();
  }, 100);
}

// 💎 Elite Features Demo
window.showEliteDemo = function () {
  const container = document.getElementById('timerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 30px;">
      
      <!-- 1. Per-Step Theming -->
      <div class="demo-block">
        <h3>🎨 Dynamic Color States</h3>
        <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Colors change automatically per step (Warmup: Blue, Work: Red, Rest: Green).</p>
        <ui-timer steps='[
          {"label": "Warm Up", "duration": 10, "color": "#10b981"},
          {"label": "HIIT Sprint", "duration": 20, "color": "#ef4444"},
          {"label": "Recovery", "duration": 15, "color": "#10b981"}
        ]' auto-start="false"></ui-timer>
      </div>

      <!-- 2. Linear Progress -->
      <div class="demo-block">
        <h3>📏 Linear Progress Bar</h3>
        <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Alternative horizontal layout for toolbars or small spaces.</p>
        <ui-timer progress-type="linear" steps='[{"label": "Progress", "duration": 60}]' theme='{"--timer-primary-color": "#10b981"}'></ui-timer>
      </div>

      <!-- 3. Human Readable Format -->
      <div class="demo-block">
        <h3>⏱️ Human Readable Format</h3>
        <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Friendly strings like "2m 15s" for better UX.</p>
        <div style="display: flex; flex-direction: column; gap: 20px;">
           <ui-timer format="human" steps='[{"label": "Session", "duration": 135}]' theme='{"--timer-primary-color": "#10b981"}'></ui-timer>
        </div>
      </div>

      <!-- 4. Notifications & Sound -->
      <div class="demo-block">
        <h3>🔔 Alerts & Notifications</h3>
        <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Native browser notifications and buzzer sounds.</p>
        <div style="padding: 20px; background:var(--accent-green-soft,#f0fdf4); border-radius: 8px; border: 1px solid #10b981; text-align: center;">
           <ui-timer enable-sound="true" enable-notifications="true" steps='[{"label": "Notice Me", "duration": 5}]' theme='{"--timer-primary-color": "#10b981"}'></ui-timer>
           <p style="font-size: 11px; margin-top: 10px; color:var(--accent-green,#15803d);">Wait for 5s to hear chime and see notification.</p>
        </div>
      </div>

    </div>
  `;
}

// ✨ Consolidated Overview (Updated)
window.showTimerOverview = function () {
  const container = document.getElementById('timerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 30px;">
      
      <!-- 1. Workflow / Countdown -->
      <div class="demo-block" style="margin: 0;">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px;">⏳ Workflow Countdown</h3>
        <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Sequential timer with automatic transitions and persistence.</p>
        <ui-timer tabindex="0" persist="demo-workflow" steps='[
          {"label": "Preparation", "duration": 10},
          {"label": "Performance", "duration": 30},
          {"label": "Recovery", "duration": 15}
        ]' theme='{"--timer-primary-color": "#10b981"}'></ui-timer>
        <div style="margin-top: 15px; font-size: 11px; color: #6b7280; text-align: center;">Tip: Click timer and use <b>Space</b> to toggle, <b>R</b> to reset.</div>
      </div>

      <!-- 2. Pro Stopwatch -->
      <div class="demo-block" style="margin: 0;">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px;">⏱️ Pro Stopwatch</h3>
        <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">High-precision split timing with lap recording.</p>
        <ui-timer tabindex="0" mode="stopwatch" precision="milliseconds" steps='[{"label": "Race Timing", "duration": 0}]' theme='{"--timer-primary-color": "#10b981"}'></ui-timer>
        <div style="margin-top: 15px; font-size: 11px; color: #6b7280; text-align: center;">Tip: Use <b>L</b> to record laps when focused.</div>
      </div>

      <!-- 3. Target Date -->
      <div class="demo-block" style="margin: 0;">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px;">📅 Long-term Deadline</h3>
        <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Target date countdown for events and releases.</p>
        <div style="background:var(--accent-purple-soft,#f5f3ff); padding: 20px; border-radius: 8px; border: 1px solid #ddd6fe; display: flex; justify-content: center; align-items: center;">
           <ui-timer id="date-deadline" theme='{"--timer-primary-color": "#10b981", "--timer-time-font-size": "26px"}'></ui-timer>
        </div>
      </div>
      
      <!-- 4. Slot Support -->
      <div class="demo-block" style="margin: 0;">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 8px;">📥 Slot Customization</h3>
        <p style="font-size: 13px; opacity: 0.7; margin-bottom: 20px;">Inject custom icons or text into the timer center.</p>
        <div style="background:var(--accent-pink-soft,#fdf2f8); padding: 20px; border-radius: 8px; border: 1px solid #fbcfe8;">
          <ui-timer steps='[{"label": "Custom Slot", "duration": 60}]' theme='{"--timer-primary-color": "#10b981"}'>
             <div slot="content" style="display: flex; flex-direction: column; align-items: center; gap: 4px;">
                <span style="font-size: 24px;">🚀</span>
                <span style="font-size: 14px; font-weight: 800; color:var(--accent-pink,#be185d);">LAUNCHING</span>
             </div>
          </ui-timer>
        </div>
      </div>

    </div>
  `;

  const target = new Date();
  target.setDate(target.getDate() + 7);
  const deadline = document.getElementById('date-deadline');
  if (deadline) {
    deadline.setAttribute('target-date', target.toISOString());
  }
};

// 🎮 Interactive Playground
window.showTimerPlayground = function () {
  const container = document.getElementById('timerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>🎮 Interactive Timer Playground</h3>
      <p style="opacity: 0.7; margin-bottom: 20px;">Configure steps, modes, and behaviors in real-time.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px; margin-top: 20px;">
        <div style="background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb); max-height: 80vh; overflow-y: auto;">
          <h4 style="margin-top: 0; margin-bottom: 20px; co          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
            <ui-dropdown id="timerMode" label="Mode" options='[{"label": "Countdown", "value": "countdown"}, {"label": "Stopwatch", "value": "stopwatch"}]' value="countdown"></ui-dropdown>
            <ui-dropdown id="timerPrecision" label="Precision" options='[{"label": "Seconds", "value": "seconds"}, {"label": "Milliseconds", "value": "milliseconds"}]' value="seconds"></ui-dropdown>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
            <ui-dropdown id="timerProgressType" label="Progress Type" options='[{"label": "Circular", "value": "circular"}, {"label": "Linear", "value": "linear"}]' value="circular"></ui-dropdown>
            <ui-dropdown id="timerFormat" label="Format" options='[{"label": "Default", "value": "default"}, {"label": "Human Readable", "value": "human"}, {"label": "Simple", "value": "simple"}]' value="default"></ui-dropdown>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
            <ui-input type="datetime-local" id="timerTargetDate" label="Target Date (Countdown Only)"></ui-input>
            <ui-input type="text" id="timerPersist" label="Persist Key" placeholder="e.g. my-timer"></ui-input>
          </div>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin-bottom: 15px;">
            <ui-checkbox id="timerSound" label="Sounds"></ui-checkbox>
            <ui-checkbox id="timerNotify" label="Notifications"></ui-checkbox>
            <ui-checkbox id="timerLoop" label="Loop"></ui-checkbox>
            <ui-checkbox id="timerSlot" label="Custom Slot"></ui-checkbox>
          </div>

          <div style="margin-bottom: 15px;">
            <ui-input multiline id="timerStepsJson" label="Steps (JSON Array)" style="height: 120px;">[
  {"label": "Focus", "duration": 25, "color": "#10b981"},
  {"label": "Short Break", "duration": 5, "color": "#10b981"}
]</ui-input>
          </div>

          <ui-button label="Apply Config & Reset" color="success" style="width: 100%;" onclick="updateTimerPlayground()"></ui-button>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background:var(--bg-primary,white); border:1px solid var(--border-default,#e5e7eb); border-radius: 8px; padding: 40px; min-height: 400px;">
          <div id="timerPreview" style="width: 100%; max-width: 400px;"></div>
          
          <div id="timerLog" style="margin-top: 30px; width: 100%; padding: 12px; background:var(--bg-secondary,#f8fafc); border:1px solid var(--border-default,#e2e8f0); border-radius: 6px; font-family: monospace; font-size: 12px; height: 100px; overflow-y: auto;">
             <div style="color:var(--text-secondary,#64748b); margin-bottom: 4px;">Event Log:</div>
             <div id="timer-log-content">Timer ready.</div>
          </div>
          
          <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
            <ui-button id="copyTimerBtn" label="Copy" variant="outline" size="xxxs" onclick="copyTimerCode()" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); --ui-button-text-color: white; border: none;"></ui-button>
            <code id="timerCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
              &lt;ui-timer ...&gt;&lt;/ui-timer&gt;
            </code>
          </div>i-timer>
            </code>
          </div>
        </div>
      </div>
    </div>
  `;

  window.updateTimerPlayground = () => {
    // Add real-time listeners for first run
    if (!window.timerWired) {
      window.timerWired = true;
      const inputs = ['timerTargetDate', 'timerPersist', 'timerStepsJson'];
      const dropdowns = ['timerMode', 'timerPrecision', 'timerProgressType', 'timerFormat'];
      const checkboxes = ['timerSound', 'timerNotify', 'timerLoop', 'timerSlot'];

      inputs.forEach(id => document.getElementById(id)?.addEventListener('inputChange', () => updateTimerPlayground()));
      dropdowns.forEach(id => document.getElementById(id)?.addEventListener('dropdownChange', () => updateTimerPlayground()));
      checkboxes.forEach(id => document.getElementById(id)?.addEventListener('checkboxChange', () => updateTimerPlayground()));
    }

    const stepsRaw = document.getElementById('timerStepsJson').value;
    let steps = [];
    try {
      steps = JSON.parse(stepsRaw);
    } catch (e) {
      return;
    }

    const mode = document.getElementById('timerMode').value;
    const precision = document.getElementById('timerPrecision').value;
    const progressType = document.getElementById('timerProgressType').value;
    const format = document.getElementById('timerFormat').value;
    const targetDate = document.getElementById('timerTargetDate').value;
    const persistKey = document.getElementById('timerPersist').value;
    const enableSound = document.getElementById('timerSound').checked;
    const enableNotifications = document.getElementById('timerNotify').checked;
    const loop = document.getElementById('timerLoop').checked;
    const customSlot = document.getElementById('timerSlot').checked;

    const preview = document.getElementById('timerPreview');
    preview.innerHTML = '';

    const timer = document.createElement('ui-timer');
    timer.id = "pg-timer";
    timer.tabIndex = "0";
    timer.mode = mode;
    timer.precision = precision;
    timer.progressType = progressType;
    timer.format = format;
    timer.enableSound = enableSound;
    timer.enableNotifications = enableNotifications;
    timer.loop = loop;
    timer.steps = steps;
    timer.autoStart = false;

    if (persistKey) {
      timer.persist = persistKey;
    }

    if (mode === 'countdown' && targetDate) {
      timer.targetDate = new Date(targetDate).toISOString();
    }

    if (customSlot) {
      const slotContent = document.createElement('div');
      slotContent.slot = 'content';
      slotContent.style.textAlign = 'center';
      slotContent.innerHTML = `
            <div style="font-size: 24px; margin-bottom: 2px;">🧘</div>
            <div style="font-size: 12px; font-weight: 600; text-transform: uppercase; color: #6b7280; letter-spacing: 1px;">Focus</div>
        `;
      timer.appendChild(slotContent);
    }

    preview.appendChild(timer);

    const logContent = document.getElementById('timer-log-content');
    const log = (msg) => {
      const entry = document.createElement('div');
      entry.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
      logContent.prepend(entry);
    };

    timer.addEventListener('timerStart', (e) => log(`Start: Step ${e.detail.stepIndex}`));
    timer.addEventListener('timerComplete', (e) => log(`Complete: Step ${e.detail.stepIndex}`));
    timer.addEventListener('timerAllComplete', () => log(`All Finished!`));

    // Generate code block
    const codeBlock = document.getElementById('timerCodeBlock');
    if (codeBlock) {
      let code = '<ui-timer';
      if (mode !== 'countdown') code += `\n  mode="${mode}"`;
      if (precision !== 'seconds') code += `\n  precision="${precision}"`;
      if (progressType !== 'circular') code += `\n  progress-type="${progressType}"`;
      if (format !== 'default') code += `\n  format="${format}"`;
      if (persistKey) code += `\n  persist="${persistKey}"`;
      if (enableSound) code += '\n  enable-sound="true"';
      if (enableNotifications) code += '\n  enable-notifications="true"';
      if (loop) code += '\n  loop="true"';
      if (mode === 'countdown' && targetDate) code += `\n  target-date="${new Date(targetDate).toISOString()}"`;
      code += `\n  steps='${JSON.stringify(steps)}'`;
      code += '\n></ui-timer>';
      codeBlock.innerText = code;
    }
  };

  window.copyTimerCode = () => {
    const code = document.getElementById('timerCodeBlock').innerText;
    const btn = document.getElementById('copyTimerBtn');
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

  updateTimerPlayground();
};
