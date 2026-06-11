// Speedometer Component Demo - Enhanced with All Features
export function initSpeedometerDemo() {
  const section = document.getElementById('speedometer');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-container">
      <div class="demo-header">
        <h1>Speedometer Component</h1>
        <p>Advanced gauge component with interactive dragging, secondary needles, and custom arc angles.</p>
      </div>

      <div class="demo-controls" style="margin-bottom: 32px; display: flex; gap: 12px; flex-wrap: wrap;">
        <ui-button id="btnSpeedPlayground" label="Playground" variant="outline"></ui-button>
        <ui-button id="btnSpeedBasic" label="Basic" variant="outline"></ui-button>
        <ui-button id="btnSpeedCompare" label="Compare" variant="outline"></ui-button>
        <ui-button id="btnSpeedAngles" label="Angles" variant="outline"></ui-button>
        <ui-button id="btnSpeedInteractive" label="Interactive" variant="outline"></ui-button>
        <ui-button id="btnSpeedLabels" label="Labels" variant="outline"></ui-button>
        <ui-button id="btnSpeedGradients" label="Gradients" variant="outline"></ui-button>
        <ui-button id="btnSpeedLive" label="Live Demo" variant="outline"></ui-button>
      </div>

      <div id="speedometerDemoContainer"></div>
    </div>
  `;

  // Setup Event Listeners for Nav
  setTimeout(() => {
    document.getElementById('btnSpeedPlayground')?.addEventListener('click', () => window.showSpeedometerPlayground());
    document.getElementById('btnSpeedBasic')?.addEventListener('click', () => window.showBasicSpeedometer());
    document.getElementById('btnSpeedCompare')?.addEventListener('click', () => window.showDoubleNeedleDemo());
    document.getElementById('btnSpeedAngles')?.addEventListener('click', () => window.showDynamicAnglesDemo());
    document.getElementById('btnSpeedInteractive')?.addEventListener('click', () => window.showInteractiveDashboard());
    document.getElementById('btnSpeedLabels')?.addEventListener('click', () => window.showCustomLabelsSpeedometer());
    document.getElementById('btnSpeedGradients')?.addEventListener('click', () => window.showSpeedometerGradients());
    document.getElementById('btnSpeedLive')?.addEventListener('click', () => window.showSpeedometerLive());
    
    window.showSpeedometerPlayground();
  }, 0);
}

// 🎮 Interactive Playground
window.showSpeedometerPlayground = function () {
  const container = document.getElementById('speedometerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>Interactive Playground</h3>
      <div style="display: grid; grid-template-columns: 360px 1fr; gap: 32px;">
        <div class="control-panel" style="padding: 24px; background:var(--bg-secondary,#f9fafb); border-radius: 12px; border:1px solid var(--border-default,#e5e7eb); box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; gap: 20px;">
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <ui-input id="playValue" label="Target Value" type="number" value="65"></ui-input>
            <ui-input id="playSecondaryValue" label="Secondary Value" type="number" value="45"></ui-input>
          </div>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <ui-input id="playMinValue" label="Minimum" type="number" value="0"></ui-input>
            <ui-input id="playMaxValue" label="Maximum" type="number" value="100"></ui-input>
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #475569;">Start Angle: <span id="lblStartAngle">-135°</span></label>
            <ui-input type="range" id="playStartAngle" min="-360" max="360" value="-135" style="width: 100%; cursor: pointer;">
          </div>

          <div style="display: flex; flex-direction: column; gap: 8px;">
            <label style="display: block; font-size: 13px; font-weight: 600; color: #475569;">End Angle: <span id="lblEndAngle">135°</span></label>
            <ui-input type="range" id="playEndAngle" min="-360" max="360" value="135" style="width: 100%; cursor: pointer;">
          </div>

          <ui-dropdown 
            id="playNeedleShape" 
            label="Needle Style" 
            value="triangle" 
            options='[{"label": "Triangle", "value": "triangle"}, {"label": "Arrow", "value": "arrow"}, {"label": "Line", "value": "line"}]'
          ></ui-dropdown>

          <div style="display: flex; flex-direction: column; gap: 12px; padding: 12px; background:var(--bg-primary,white); border-radius: 8px; border:1px solid var(--border-default,#e2e8f0);">
            <ui-checkbox id="playInteractive" label="Interactive Drag" checked></ui-checkbox>
            <ui-checkbox id="playShowTicks" label="Show Scale Ticks" checked></ui-checkbox>
            <ui-checkbox id="playGradient" label="Enable Premium Gradient"></ui-checkbox>
          </div>
        </div>

        <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background:var(--bg-primary,white); border:1px solid var(--border-default,#e5e7eb); border-radius: 16px; padding: 48px; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <div id="playgroundPreview"></div>
          
          <div id="speedometerLog" style="margin-top: 40px; width: 100%; padding: 16px; background: #0f172a; color: #38bdf8; border-radius: 12px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; height: 120px; overflow-y: auto; box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1);">
             <div style="color:var(--text-secondary,#64748b); margin-bottom: 8px; font-weight: 600; border-bottom: 1px solid #1e293b; padding-bottom: 4px;">System Event Log</div>
             <div id="pg-log-content">Ready for interaction...</div>
          </div>
        </div>
      </div>
    </div>
  `;

  // Attach Playground Listeners
  setTimeout(() => {
    const inputs = ['playValue', 'playSecondaryValue', 'playMinValue', 'playMaxValue'];
    inputs.forEach(id => document.getElementById(id)?.addEventListener('inputChange', () => window.updatePlayground()));
    
    document.getElementById('playNeedleShape')?.addEventListener('valueChange', () => globalThis.updatePlayground());
    
    const checkboxes = ['playInteractive', 'playShowTicks', 'playGradient'];
    checkboxes.forEach(id => document.getElementById(id)?.addEventListener('checkboxChange', () => window.updatePlayground()));
    
    document.getElementById('playStartAngle')?.addEventListener('input', () => window.updatePlayground());
    document.getElementById('playEndAngle')?.addEventListener('input', () => window.updatePlayground());

    window.updatePlayground();
  }, 0);
};

window.updatePlayground = () => {
  const props = {
    value: parseFloat(document.getElementById('playValue').value) || 0,
    secondaryValue: parseFloat(document.getElementById('playSecondaryValue').value) || 0,
    minValue: parseFloat(document.getElementById('playMinValue').value) || 0,
    maxValue: parseFloat(document.getElementById('playMaxValue').value) || 100,
    startAngle: parseInt(document.getElementById('playStartAngle').value),
    endAngle: parseInt(document.getElementById('playEndAngle').value),
    needleShape: document.getElementById('playNeedleShape').value,
    interactive: document.getElementById('playInteractive').checked,
    showTicks: document.getElementById('playShowTicks').checked,
    gradientColors: document.getElementById('playGradient').checked ? '["#10b981", "#fbbf24", "#ef4444"]' : '',
    size: 280,
  };

  document.getElementById('lblStartAngle').textContent = props.startAngle + '°';
  document.getElementById('lblEndAngle').textContent = props.endAngle + '°';

  const preview = document.getElementById('playgroundPreview');
  preview.innerHTML = `<ui-speedometer id="pgSpeedometer"></ui-speedometer>`;
  const el = document.getElementById('pgSpeedometer');

  Object.assign(el, props);

  el.addEventListener('valueChange', e => {
    document.getElementById('playValue').value = e.detail;
    const log = document.getElementById('pg-log-content');
    const entry = document.createElement('div');
    entry.style.marginBottom = '2px';
    entry.textContent = `> [${new Date().toLocaleTimeString()}] valueChange: ${e.detail.toFixed(2)}`;
    log.prepend(entry);
  });
};

// ⚔️ Compare & Contrast Demo
window.showDoubleNeedleDemo = function () {
  const container = document.getElementById('speedometerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>Target vs Actual Analysis</h3>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 40px;">Utilize the secondary needle to provide context, such as targets, thresholds, or historical benchmarks.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 48px; justify-items: center;">
        <div style="text-align: center; background:var(--bg-primary,white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <h4 style="margin-bottom: 32px;">Achievement Target</h4>
          <ui-speedometer 
            value="82" 
            secondary-value="95" 
            label="Achievement" 
            unit="%" 
            needle-color="#8b5cf6"
            size="220"
          ></ui-speedometer>
          <div style="margin-top: 24px; font-size: 14px; display: flex; gap: 16px; justify-content: center; font-weight: 600;">
            <span style="color:var(--accent-purple,#8b5cf6); display: flex; align-items: center; gap: 6px;">
              <span style="width: 10px; height: 10px; border-radius: 2px; background: var(--accent-purple,#8b5cf6);"></span>
              Actual (82%)
            </span>
            <span style="color:var(--text-secondary,#64748b); display: flex; align-items: center; gap: 6px;">
              <span style="width: 10px; height: 10px; border-radius: 2px; background: #cbd5e1;"></span>
              Target (95%)
            </span>
          </div>
        </div>

        <div style="text-align: center; background:var(--bg-primary,white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <h4 style="margin-bottom: 32px;">Profit Variance</h4>
          <ui-speedometer 
            value="42" 
            secondary-value="38" 
            label="Margin" 
            unit="%" 
            needle-color="#10b981"
            size="220"
          ></ui-speedometer>
          <div style="margin-top: 24px; font-size: 14px; display: flex; gap: 16px; justify-content: center; font-weight: 600;">
            <span style="color: #10b981; display: flex; align-items: center; gap: 6px;">
              <span style="width: 10px; height: 10px; border-radius: 2px; background: #10b981;"></span>
              Q2 (42%)
            </span>
            <span style="color:var(--text-secondary,#64748b); display: flex; align-items: center; gap: 6px;">
              <span style="width: 10px; height: 10px; border-radius: 2px; background: #cbd5e1;"></span>
              Q1 (38%)
            </span>
          </div>
        </div>
      </div>
    </div>
  `;
};

// 📐 Dynamic Angles Demo
window.showDynamicAnglesDemo = function () {
  const container = document.getElementById('speedometerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>Custom Arc Geometry</h3>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 40px;">Define precise start and end angles to fit any UI design requirement, from semi-circles to full orbital displays.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px; justify-items: center;">
        <div style="text-align: center;">
          <h4 style="font-size: 14px; color: #475569; margin-bottom: 16px;">180° Semi-circle</h4>
          <ui-speedometer value="50" start-angle="-90" end-angle="90" size="180" label="Semi"></ui-speedometer>
          <div style="margin-top: 12px; font-family: monospace; font-size: 11px; background:var(--bg-tertiary,#f1f5f9); padding: 4px 8px; border-radius: 4px; color:var(--text-secondary,#64748b);">-90° to 90°</div>
        </div>

        <div style="text-align: center;">
          <h4 style="font-size: 14px; color: #475569; margin-bottom: 16px;">270° Modern Classic</h4>
          <ui-speedometer value="50" start-angle="-135" end-angle="135" size="180" label="Classic"></ui-speedometer>
          <div style="margin-top: 12px; font-family: monospace; font-size: 11px; background:var(--bg-tertiary,#f1f5f9); padding: 4px 8px; border-radius: 4px; color:var(--text-secondary,#64748b);">-135° to 135°</div>
        </div>

        <div style="text-align: center;">
          <h4 style="font-size: 14px; color: #475569; margin-bottom: 16px;">360° Orbital Circular</h4>
          <ui-speedometer value="75" start-angle="0" end-angle="360" size="180" label="Fuel"></ui-speedometer>
          <div style="margin-top: 12px; font-family: monospace; font-size: 11px; background:var(--bg-tertiary,#f1f5f9); padding: 4px 8px; border-radius: 4px; color:var(--text-secondary,#64748b);">0° to 360°</div>
        </div>
        
        <div style="text-align: center;">
          <h4 style="font-size: 14px; color: #475569; margin-bottom: 16px;">90° Vertical Sector</h4>
          <ui-speedometer value="30" start-angle="-90" end-angle="0" size="180" label="Sector"></ui-speedometer>
          <div style="margin-top: 12px; font-family: monospace; font-size: 11px; background:var(--bg-tertiary,#f1f5f9); padding: 4px 8px; border-radius: 4px; color:var(--text-secondary,#64748b);">-90° to 0°</div>
        </div>
      </div>
    </div>
  `;
};

// 🖱️ Interactive Dashboard Demo
window.showInteractiveDashboard = function () {
  const container = document.getElementById('speedometerDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>Interactive Controller</h3>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 48px;">The speedometer can act as a high-fidelity input device. Drag the needle to control other system metrics.</p>
      
      <div style="display: flex; gap: 64px; align-items: center; justify-content: center; flex-wrap: wrap;">
        <div style="text-align: center;">
           <ui-speedometer 
            id="masterControl" 
            value="45" 
            interactive="true" 
            size="260" 
            label="System Master" 
            needle-color="#10b981"
          ></ui-speedometer>
          <div style="margin-top: 16px; color: #10b981; font-size: 13px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.1em;">
            <i class="fas fa-hand-pointer"></i> Drag Needle to Adjust
          </div>
        </div>

        <div style="flex: 1; min-width: 320px; display: flex; flex-direction: column; gap: 32px;">
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 12px;">
              <span style="font-weight: 700; color:var(--text-primary,#1e293b);">Active Workload</span>
              <span id="loadVal" style="font-family: monospace; font-weight: 700; color:var(--accent-green,#059669); background: #ecfdf5; padding: 2px 8px; border-radius: 4px;">45.0%</span>
            </div>
            <div style="height: 12px; background:var(--bg-tertiary,#f1f5f9); border-radius: 6px; overflow: hidden; border:1px solid var(--border-default,#e2e8f0);">
              <div id="loadBar" style="height: 100%; width: 45%; background: linear-gradient(90deg, #10b981, #34d399); transition: width 0.1s cubic-bezier(0.4, 0, 0.2, 1);"></div>
            </div>
          </div>

          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            <div style="display: flex; justify-content: space-between; margin-bottom: 16px;">
              <span style="font-weight: 700; color:var(--text-primary,#1e293b);">Optimization Intensity</span>
              <span id="optVal" style="font-family: monospace; font-weight: 700; color: #0284c7; background: #f0f9ff; padding: 2px 8px; border-radius: 4px;">45</span>
            </div>
            <ui-meter-group id="meterEffect" value="45" max="100"></ui-meter-group>
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const master = document.getElementById('masterControl');
    const loadVal = document.getElementById('loadVal');
    const loadBar = document.getElementById('loadBar');
    const optVal = document.getElementById('optVal');
    const meter = document.getElementById('meterEffect');

    master?.addEventListener('valueChange', e => {
      const val = e.detail;
      loadVal.textContent = val.toFixed(1) + '%';
      loadBar.style.width = val + '%';
      optVal.textContent = Math.round(val);
      if (meter) meter.value = val;
    });
  }, 100);
};

window.showBasicSpeedometer = function () {
  const container = document.getElementById('speedometerDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-block">
      <h3>Universal Gauge Styles</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 48px; margin-top: 40px; justify-items: center;">
        <ui-speedometer value="45" max-value="100" unit="km/h" label="Current Velocity" size="200"></ui-speedometer>
        <ui-speedometer value="72" show-percentage label="Engine Efficiency" size="200" needle-color="#3b82f6"></ui-speedometer>
        <ui-speedometer value="28" min-value="-20" max-value="50" unit="°C" label="Atmospheric Temp" size="200" needle-color="#f59e0b"></ui-speedometer>
        <ui-speedometer
          value="64"
          max-value="100"
          label="Single Color"
          needle-color="#10b981"
          ranges='[{"min":0,"max":100,"color":"#10b981"}]'
          size="200"
        ></ui-speedometer>
      </div>
    </div>
  `;
};

window.showCustomLabelsSpeedometer = function () {
  const container = document.getElementById('speedometerDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-block">
      <h3>Contextual Scale Mapping</h3>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 40px;">Replace numeric scale marks with semantic strings for better readability in specialized domains.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 48px; justify-items: center;">
        <div style="text-align: center;">
          <ui-speedometer id="lblFuel" value="100" label="Fuel Status" needle-color="#ef4444" size="220"></ui-speedometer>
        </div>
        <div style="text-align: center;">
          <ui-speedometer id="lblPerformance" value="75" label="Service Tier" needle-color="#10b981" size="220"></ui-speedometer>
        </div>
      </div>
    </div>
  `;
  setTimeout(() => {
    const fuel = document.getElementById('lblFuel');
    if (fuel) fuel.customLabels = JSON.stringify({ 0: 'Empty', 50: 'Half', 100: 'Full' });
    const perf = document.getElementById('lblPerformance');
    if (perf) perf.customLabels = JSON.stringify({ 0: 'Bronze', 50: 'Gold', 100: 'Elite' });
  }, 100);
};

window.showSpeedometerGradients = function () {
  const container = document.getElementById('speedometerDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-block">
      <h3>Premium Chroma Gradients</h3>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 40px;">Apply multi-stop gradients across the gauge arc to visualize intensity, health, or progression.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 40px; justify-items: center;">
        <div style="text-align: center; background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
          <h4 style="margin-bottom: 24px; font-size: 15px;">Network Throughput</h4>
          <ui-speedometer value="65" gradient-colors='["#3b82f6", "#2dd4bf"]' label="Bandwidth" unit="Mbps" size="200"></ui-speedometer>
        </div>
        
        <div style="text-align: center; background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
          <h4 style="margin-bottom: 24px; font-size: 15px;">Thermal Load</h4>
          <ui-speedometer value="85" gradient-colors='["#f59e0b", "#ef4444"]' label="CPU Core 0" unit="°C" size="200"></ui-speedometer>
        </div>

        <div style="text-align: center; background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
          <h4 style="margin-bottom: 24px; font-size: 15px;">System Security</h4>
          <ui-speedometer value="50" gradient-colors='["#8b5cf6", "#ec4899"]' label="Risk Index" size="200"></ui-speedometer>
        </div>

        <div style="text-align: center; background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
          <h4 style="margin-bottom: 24px; font-size: 15px;">Eco Drive</h4>
          <ui-speedometer value="70" gradient-colors='["#ef4444", "#fbbf24", "#10b981"]' label="Efficiency" size="200"></ui-speedometer>
        </div>
      </div>
    </div>
  `;
};

window.showSpeedometerLive = function () {
  const container = document.getElementById('speedometerDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-block">
      <h3>Live Telemetry Simulation</h3>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 40px;">Simulate real-time data ingestion and observe the component's smooth interpolation and responsive updates.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(260px, 1fr)); gap: 48px; margin-top: 30px; justify-items: center;">
        <ui-speedometer id="liveS1" value="30" label="Processor Load" unit="%" size="220" needle-color="#3b82f6"></ui-speedometer>
        <ui-speedometer id="liveS2" value="120" max-value="300" label="IO Latency" unit="ms" size="220" needle-color="#8b5cf6"></ui-speedometer>
      </div>
      
      <div style="text-align: center; margin-top: 48px;">
        <ui-button id="liveToggle" label="Start Live Stream" color="success" variant="outline" size="large"></ui-button>
      </div>
    </div>
  `;

  let interval;
  const btn = document.getElementById('liveToggle');
  btn.addEventListener('click', () => {
    if (interval) {
      clearInterval(interval);
      interval = null;
      btn.label = 'Resume Live Stream';
      btn.color = 'success';
    } else {
      btn.label = 'Terminate Stream';
      btn.color = 'danger';
      interval = setInterval(() => {
        const s1 = document.getElementById('liveS1');
        const s2 = document.getElementById('liveS2');
        if (s1) s1.value = 20 + Math.random() * 66;
        if (s2) s2.value = 50 + Math.random() * 220;
      }, 1000);
    }
  });
};
