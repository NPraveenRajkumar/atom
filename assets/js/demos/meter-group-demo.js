// Component Demo Functions
export function initMeterGroupDemo() {
  const section = document.getElementById('meter-group');
  if (!section) return;

  section.innerHTML = `
    
    <p>Visual representation of multiple values with labels and colors.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showBasicMeter()" variant="outline">Basic</ui-button>
      <ui-button onclick="showVerticalMeter()" variant="outline">Vertical</ui-button>
      <ui-button onclick="showMultiValueMeter()" variant="outline">Multi-Value</ui-button>
      <ui-button onclick="showCircleMeter()" variant="outline">Circle</ui-button>
      <ui-button onclick="showMeterSizes()" variant="outline">Sizes</ui-button>
      <ui-button onclick="showMeterWithLegend()" variant="outline">With Legend</ui-button>
      <ui-button onclick="showMeterUseCases()" variant="outline">Use Cases</ui-button>
      <ui-button onclick="showGradientMeter()" variant="outline">✨ Gradients</ui-button>
      <ui-button onclick="showInteractiveMeterGroup()" variant="outline">🎮 Playground</ui-button>
    </div>

    <div id="meterDemoContainer" style="margin-top: 20px;"></div>
  `;

  // Initialize with basic meter
  setTimeout(() => {
    // Meter Group Demo Functions
    window.showBasicMeter = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;
      const values = [
        { label: 'Used', value: 65, color: '#ef4444' },
        { label: 'Free', value: 35, color: '#10b981' },
      ];
      container.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h4>Storage Usage</h4>
        <ui-meter-group id="basicMeter" show-legend="true"></ui-meter-group>
      </div>
    `;
      requestAnimationFrame(() => {
        setTimeout(() => {
          const meter = document.getElementById('basicMeter');
          if (meter) meter.values = values;
        }, 50);
      });
    };

    window.showVerticalMeter = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;
      const values = [
        { label: 'CPU', value: 45, color: '#10b981' },
        { label: 'Memory', value: 30, color: '#10b981' },
        { label: 'Disk', value: 25, color: '#f59e0b' },
      ];
      container.innerHTML = `
      <div style="display: flex; gap: 30px; align-items: center;">
        <ui-meter-group id="verticalMeter" orientation="vertical" show-legend="true"></ui-meter-group>
        <p style="color: #6b7280;">System Resources (Vertical)</p>
      </div>
    `;
      requestAnimationFrame(() => {
        setTimeout(() => {
          const meter = document.getElementById('verticalMeter');
          if (meter) meter.values = values;
        }, 50);
      });
    };

    window.showCircleMeter = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;
      const values = [
        { label: 'Used', value: 65, color: '#ef4444' },
        { label: 'Cache', value: 20, color: '#f59e0b' },
        { label: 'Free', value: 15, color: '#10b981' },
      ];
      container.innerHTML = `
      <div style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap;">
        <div style="text-align: center;">
          <h4>Storage Usage</h4>
          <ui-meter-group id="circleMeter1" shape="circle" show-legend="true"></ui-meter-group>
        </div>
        <div style="text-align: center;">
          <h4>Project Progress</h4>
          <ui-meter-group id="circleMeter2" shape="circle" show-legend="true" size="lg"></ui-meter-group>
        </div>
      </div>
    `;
      requestAnimationFrame(() => {
        setTimeout(() => {
          const meter1 = document.getElementById('circleMeter1');
          const meter2 = document.getElementById('circleMeter2');
          if (meter1) meter1.values = values;
          if (meter2) {
            meter2.values = [
              { label: 'Completed', value: 75, color: '#10b981' },
              { label: 'In Progress', value: 15, color: '#f59e0b' },
              { label: 'Pending', value: 10, color: '#e5e7eb' },
            ];
          }
        }, 50);
      });
    };

    window.showMeterSizes = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;
      const values = [
        { label: 'Used', value: 70, color: '#10b981' },
        { label: 'Free', value: 30, color: '#e5e7eb' },
      ];
      container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h4>Small</h4>
          <ui-meter-group id="meterSm" size="md"></ui-meter-group>
        </div>
        <div>
          <h4>md</h4>
          <ui-meter-group id="meterMd" size="md"></ui-meter-group>
        </div>
        <div>
          <h4>Large</h4>
          <ui-meter-group id="meterLg" size="lg"></ui-meter-group>
        </div>
      </div>
    `;
      requestAnimationFrame(() => {
        setTimeout(() => {
          ['meterSm', 'meterMd', 'meterLg'].forEach(id => {
            const meter = document.getElementById(id);
            if (meter) meter.values = values;
          });
        }, 50);
      });
    };

    window.showMeterWithLegend = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;
      const values = [
        { label: 'Images', value: 35, color: '#8b5cf6' },
        { label: 'Videos', value: 28, color: '#10b981' },
        { label: 'Documents', value: 22, color: '#10b981' },
        { label: 'Other', value: 15, color: '#f59e0b' },
      ];
      container.innerHTML = `
      <div>
        <h4>File Storage Breakdown</h4>
        <ui-meter-group id="meterLegend" show-legend="true" show-values="true"></ui-meter-group>
      </div>
    `;
      requestAnimationFrame(() => {
        setTimeout(() => {
          const meter = document.getElementById('meterLegend');
          if (meter) meter.values = values;
        }, 50);
      });
    };

    window.showMeterUseCases = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;
      const diskValues = [
        { label: 'Used', value: 450, color: '#ef4444' },
        { label: 'Free', value: 550, color: '#10b981' },
      ];
      const taskValues = [
        { label: 'Completed', value: 75, color: '#10b981' },
        { label: 'In Progress', value: 15, color: '#f59e0b' },
        { label: 'Pending', value: 10, color: '#e5e7eb' },
      ];
      container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h4>📀 Disk Usage (450GB / 1TB)</h4>
          <ui-meter-group id="diskMeter" show-legend="true" max="1000"></ui-meter-group>
        </div>
        <div>
          <h4>✅ Project Progress</h4>
          <ui-meter-group id="taskMeter" show-legend="true"></ui-meter-group>
        </div>
      </div>
    `;
      requestAnimationFrame(() => {
        setTimeout(() => {
          const diskMeter = document.getElementById('diskMeter');
          const taskMeter = document.getElementById('taskMeter');
          if (diskMeter) diskMeter.values = diskValues;
          if (taskMeter) taskMeter.values = taskValues;
        }, 50);
      });
    };

    window.showGradientMeter = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;

      const values = [
        { label: 'Critical Load', value: 35, color: { from: '#ef4444', to: '#f59e0b' } },
        { label: 'Optimal Flow', value: 45, color: { from: '#10b981', to: '#10b981' } },
        { label: 'Safety Margin', value: 20, color: '#e5e7eb' },
      ];

      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 40px; padding: 24px;">
          <div>
            <h4>✨ Linear Flow Gradients</h4>
            <ui-meter-group id="gradMeter1" show-legend="true" show-values="true" size="lg"></ui-meter-group>
          </div>
          <div style="display: flex; gap: 60px; align-items: flex-start; flex-wrap: wrap;">
            <div style="text-align: center;">
              <h4>Circular Gradient Shell</h4>
              <ui-meter-group id="gradMeter2" shape="circle" size="lg" show-legend="true"></ui-meter-group>
            </div>
            <div style="text-align: center;">
               <h4>High-Density Racks</h4>
               <ui-meter-group id="gradMeter3" orientation="vertical" show-legend="true"></ui-meter-group>
            </div>
          </div>
        </div>
      `;

      requestAnimationFrame(() => {
        setTimeout(() => {
          const m1 = document.getElementById('gradMeter1');
          const m2 = document.getElementById('gradMeter2');
          const m3 = document.getElementById('gradMeter3');
          if (m1) m1.values = values;
          if (m2) m2.values = values;
          if (m3) m3.values = values;
        }, 50);
      });
    };

    window.showMultiValueMeter = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;
      const values = [
        { label: 'Project A', value: 30, color: '#10b981' },
        { label: 'Project B', value: 25, color: '#10b981' },
        { label: 'Project C', value: 20, color: '#f59e0b' },
        { label: 'Project D', value: 15, color: '#ef4444' },
        { label: 'Project E', value: 10, color: '#8b5cf6' },
      ];
      container.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h4>Budget Allocation (%)</h4>
        <ui-meter-group id="multiMeter" show-legend="true" show-values="true"></ui-meter-group>
      </div>
    `;
      requestAnimationFrame(() => {
        setTimeout(() => {
          const meter = document.getElementById('multiMeter');
          if (meter) meter.values = values;
        }, 50);
      });
    };

    window.showInteractiveMeterGroup = function () {
      const container = document.getElementById('meterDemoContainer');
      if (!container) return;

      container.innerHTML = `
      <div style="background-color:var(--bg-primary,white); border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <div style="display: flex; gap: 30px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px;">
            <h3>🎮 Interactive Playground</h3>
            <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Orientation:</label>
                <ui-dropdown id="meterOrientation" onchange="updateInteractiveMeter()">
                  <option value="horizontal" selected>Horizontal</option>
                  <option value="vertical">Vertical</option>
                </ui-dropdown>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Shape:</label>
                <ui-dropdown id="meterShape" onchange="updateInteractiveMeter()">
                  <option value="line" selected>Line</option>
                  <option value="circle">Circle</option>
                </ui-dropdown>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Size:</label>
                <ui-dropdown id="meterSize" onchange="updateInteractiveMeter()">
                  <option value="sm">Small</option>
                  <option value="md" selected>md</option>
                  <option value="lg">Large</option>
                </ui-dropdown>
              </div>
              
              <ui-checkbox id="meterShowLabels" checked label="Show Labels" oncheckboxchange="updateInteractiveMeter()"></ui-checkbox>
              
              <ui-checkbox id="meterShowValues" checked label="Show Values" oncheckboxchange="updateInteractiveMeter()"></ui-checkbox>
              
              <ui-checkbox id="meterShowLegend" checked label="Show Legend" oncheckboxchange="updateInteractiveMeter()"></ui-checkbox>

              <ui-checkbox id="meterInteractive" label="Interactive (Clickable)" oncheckboxchange="updateInteractiveMeter()"></ui-checkbox>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Min Value:</label>
                <ui-input type="number" id="meterMin" value="0" onchange="updateInteractiveMeter()"></ui-input>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Max Value:</label>
                <ui-input type="number" id="meterMax" value="100" onchange="updateInteractiveMeter()"></ui-input>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 5px; font-weight: 500;">Values (JSON):</label>
                <textarea id="meterValues" onchange="updateInteractiveMeter()" 
                  style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; font-family: monospace; font-size: 12px; min-height: 180px;">[
  {"label": "Used", "value": 65, "color": "#ef4444", "icon": "💾"},
  {"label": "Cache", "value": 20, "color": "#f59e0b", "icon": "⚡"},
  {"label": "Free", "value": 15, "color": "#10b981", "icon": "🆓"}
]</textarea>
              </div>
              
              <div style="display: flex; gap: 8px; flex-wrap: wrap;">
                <ui-button onclick="loadMeterPreset('storage')" >💾 Storage</ui-button>
                <ui-button onclick="loadMeterPreset('resources')">🖥️ Resources</ui-button>
                <ui-button onclick="loadMeterPreset('progress')" >📊 Progress</ui-button>
                <ui-button onclick="loadMeterPreset('budget')" >💰 Budget</ui-button>
              </div>
            </div>
          </div>
          
          <div style="flex: 1; min-width: 300px; background-color: #f9fafb; padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb); min-height: 500px;">
            <h4 style="margin-top: 0;">Preview:</h4>
            <div id="interactiveMeterContainer" style="margin-top: 20px;"></div>
            <div id="meterOutput" style="margin-top: 20px; padding: 10px; background-color:var(--bg-primary,white); border-radius: 4px; font-family: monospace; font-size: 12px; color: #6b7280;"></div>
            
            <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
              <ui-button onclick="copyMeterCode()" id="copyMeterBtn">Copy</ui-button>
              <code id="meterCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
                <ui-meter-group ...></ui-meter-group>
              </code>
            </div>
          </div>
        </div>
      </div>
    `;

      updateInteractiveMeter();
    };

    window.updateInteractiveMeter = function () {
      const orientation = document.getElementById('meterOrientation').value;
      const shape = document.getElementById('meterShape').value;
      const size = document.getElementById('meterSize').value;
      const showLabels = document.getElementById('meterShowLabels').checked;
      const showValues = document.getElementById('meterShowValues').checked;
      const showLegend = document.getElementById('meterShowLegend').checked;
      const interactive = document.getElementById('meterInteractive').checked;
      const min = document.getElementById('meterMin').value;
      const max = document.getElementById('meterMax').value;
      const valuesText = document.getElementById('meterValues').value;

      const container = document.getElementById('interactiveMeterContainer');
      const outputDiv = document.getElementById('meterOutput');

      if (!container) return;

      // Remove existing meter
      const existingMeter = container.querySelector('ui-meter-group');
      if (existingMeter) {
        existingMeter.remove();
      }

      try {
        const values = JSON.parse(valuesText);

        const meter = document.createElement('ui-meter-group');
        meter.setAttribute('orientation', orientation);
        meter.setAttribute('shape', shape);
        meter.setAttribute('size', size);
        if (showLabels) meter.setAttribute('show-labels', 'true');
        if (showValues) meter.setAttribute('show-values', 'true');
        if (showLegend) meter.setAttribute('show-legend', 'true');
        if (interactive) meter.setAttribute('interactive', 'true');
        meter.setAttribute('min', min);
        meter.setAttribute('max', max);
        meter.values = values;

        meter.addEventListener('meterClick', e => {
          const item = e.detail;
          outputDiv.textContent = `Clicked: ${item.label} (${item.value})`;
          outputDiv.style.color = item.color || '#10b981';
          outputDiv.style.fontWeight = 'bold';
        });

        container.appendChild(meter);

        // Calculate totals
        const total = values.reduce((sum, v) => sum + v.value, 0);
        if (!outputDiv.textContent.startsWith('Clicked')) {
          outputDiv.textContent = `Total: ${total} / ${max} (${((total / max) * 100).toFixed(1)}%)`;
          outputDiv.style.color = '#6b7280';
          outputDiv.style.fontWeight = 'normal';
        }

        // Generate code block
        const codeBlock = document.getElementById('meterCodeBlock');
        if (codeBlock) {
          let props = '';
          if (orientation !== 'horizontal') props += ` orientation="${orientation}"`;
          if (shape !== 'line') props += ` shape="${shape}"`;
          if (size !== 'md') props += ` size="${size}"`;
          if (showLabels) props += ' show-labels="true"';
          if (showValues) props += ' show-values="true"';
          if (showLegend) props += ' show-legend="true"';
          if (interactive) props += ' interactive="true"';
          if (min !== '0') props += ` min="${min}"`;
          if (max !== '100') props += ` max="${max}"`;

          const valuesStr = JSON.stringify(values, null, 2);
          codeBlock.innerText = `<ui-meter-group${props}></ui-meter-group>\n\n<script>\n  const meter = document.querySelector('ui-meter-group');\n  meter.values = ${valuesStr};\n</script>`;
        }
      } catch (error) {
        outputDiv.style.color = '#ef4444';
        outputDiv.textContent = `Invalid JSON: ${error.message}`;
      }
    };

    window.copyMeterCode = () => {
      const code = document.getElementById('meterCodeBlock').innerText;
      const btn = document.getElementById('copyMeterBtn');
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

    window.loadMeterPreset = function (preset) {
      const valuesTextarea = document.getElementById('meterValues');
      const maxInput = document.getElementById('meterMax');

      const presets = {
        storage: {
          max: 100,
          values: [
            { label: 'Documents', value: 35, color: '#10b981', icon: '📄' },
            { label: 'Photos', value: 28, color: '#8b5cf6', icon: '📸' },
            { label: 'Videos', value: 22, color: '#ef4444', icon: '🎥' },
            { label: 'Other', value: 10, color: '#f59e0b', icon: '📁' },
            { label: 'Free', value: 5, color: '#10b981', icon: '✨' },
          ],
        },
        resources: {
          max: 100,
          values: [
            { label: 'CPU', value: 45, color: '#ef4444', icon: '🧠' },
            { label: 'Memory', value: 35, color: '#f59e0b', icon: '💾' },
            { label: 'Disk I/O', value: 20, color: '#10b981', icon: '💿' },
          ],
        },
        progress: {
          max: 100,
          values: [
            { label: 'Completed', value: 75, color: '#10b981', icon: '✅' },
            { label: 'In Progress', value: 15, color: '#f59e0b', icon: '🚧' },
            { label: 'Pending', value: 10, color: '#e5e7eb', icon: '⏳' },
          ],
        },
        budget: {
          max: 10000,
          values: [
            { label: 'Marketing', value: 3500, color: '#ec4899', icon: '📢' },
            { label: 'Development', value: 2800, color: '#10b981', icon: '💻' },
            { label: 'Operations', value: 2200, color: '#10b981', icon: '⚙️' },
            { label: 'Research', value: 1500, color: '#8b5cf6', icon: '🔍' },
          ],
        },
      };

      const selectedPreset = presets[preset];
      if (selectedPreset) {
        valuesTextarea.value = JSON.stringify(selectedPreset.values, null, 2);
        maxInput.value = selectedPreset.max;
        updateInteractiveMeter();
      }
    };

    showBasicMeter();
  }, 100);
}
