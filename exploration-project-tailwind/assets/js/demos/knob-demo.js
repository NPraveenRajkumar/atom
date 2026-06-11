export function initKnobDemo() {
  const section = document.getElementById('knob');
  if (!section) return;

  section.innerHTML = `
    
    <p>Rotary control knob for precise value selection. Drag around the dial or use your mouse wheel to rotate.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showBasicKnob()" variant="outline">Basic</ui-button>
      <ui-button onclick="showColorKnob()" variant="outline">Colors</ui-button>
      <ui-button onclick="showSizesKnob()" variant="outline">Sizes</ui-button>
      <ui-button onclick="showCustomContentKnob()" variant="outline">Custom Content</ui-button>
      <ui-button onclick="showGradientKnob()" variant="outline">✨ Gradients</ui-button>
      <ui-button onclick="showInteractiveKnob()" variant="outline">🎮 Playground</ui-button>
      <ui-button onclick="showSpeedometerKnob()" variant="outline">🚗 Speedometer</ui-button>
    </div>

    <div id="knobDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    window.showCustomContentKnob = function () {
      const container = document.getElementById('knobDemoContainer');
      if (!container) return;

      container.innerHTML = `
            <div class="demo-block">
                <h3>Custom Center Content</h3>
                <p>Use keyboard arrow keys to control the knobs.</p>
                <div style="display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; padding: 20px;">
                    <div style="text-align: center;">
                        <ui-knob value="60" show-value="false" size="140" stroke-width="10" color="#8b5cf6">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="font-size: 24px;">🔊</span>
                                <span style="font-size: 14px; font-weight: bold; color: #6b7280;">Volume</span>
                            </div>
                        </ui-knob>
                    </div>
                    
                    <div style="text-align: center;">
                        <ui-knob value="72" show-value="false" size="140" stroke-width="10" color="#f59e0b">
                            <div style="display: flex; flex-direction: column; align-items: center;">
                                <span style="font-size: 28px; font-weight: bold; color:var(--accent-yellow,#f59e0b);">72°</span>
                                <span style="font-size: 12px; color: #9ca3af;">TARGET</span>
                            </div>
                        </ui-knob>
                    </div>
                </div>
            </div>
        `;
    };

    window.showBasicKnob = function () {
      const container = document.getElementById('knobDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="demo-block">
          <h3>Basic Knob & New Features</h3>
          <div style="display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; padding: 20px;">
            <div style="text-align: center;">
              <p style="margin-bottom:8px; font-weight:500; font-size:14px;">Default</p>
              <ui-knob value="50" show-value="true" enable-wheel="true"></ui-knob>
            </div>
            <div style="text-align: center;">
              <p style="margin-bottom:8px; font-weight:500; font-size:14px;">Scale Labels</p>
              <ui-knob value="75" show-labels="true" show-value="true" enable-wheel="true"></ui-knob>
            </div>
            <div style="text-align: center;">
              <p style="margin-bottom:8px; font-weight:500; font-size:14px;">Input Editing</p>
              <ui-knob value="30" allow-input="true" show-value="true" enable-wheel="true"></ui-knob>
              <p style="font-size:12px; color:#6b7280; margin-top:4px;">(Double click to edit)</p>
            </div>
             <div style="text-align: center;">
              <p style="margin-bottom:8px; font-weight:500; font-size:14px;">Snap to Step (25)</p>
              <ui-knob value="25" snap="true" step="25" show-labels="true" show-value="true" enable-wheel="true"></ui-knob>
            </div>
          </div>
        </div>
      `;
    };

    window.showColorKnob = function () {
      const container = document.getElementById('knobDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="demo-block">
          <h3>Different Colors</h3>
          <div style="display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; padding: 20px;">
            <div style="text-align: center;">
              <ui-knob value="60" color="#10b981" show-value="true" enable-wheel="true"></ui-knob>
            </div>
            <div style="text-align: center;">
              <ui-knob value="45" color="#10b981" show-value="true" enable-wheel="true"></ui-knob>
            </div>
            <div style="text-align: center;">
              <ui-knob value="80" color="#ef4444" show-value="true" enable-wheel="true"></ui-knob>
            </div>
            <div style="text-align: center;">
              <ui-knob value="35" color="#f59e0b" show-value="true" enable-wheel="true"></ui-knob>
            </div>
            <div style="text-align: center;">
              <ui-knob value="90" color="#8b5cf6" show-value="true" enable-wheel="true"></ui-knob>
            </div>
          </div>
        </div>
      `;
    };

    window.showGradientKnob = function () {
      const container = document.getElementById('knobDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="demo-block">
          <h3>✨ High-Fidelity Gradients</h3>
          <p>Premium SVG gradients that flow with the rotary motion.</p>
          <div style="display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; padding: 20px;">
            <div style="text-align: center;">
              <ui-knob value="65" color='{"from": "#10b981", "to": "#8b5cf6"}' size="120" stroke-width="12" show-value="true"></ui-knob>
              <p style="font-size: 11px; margin-top: 8px; color:var(--text-secondary,#64748b);">Ocean Deep</p>
            </div>
            <div style="text-align: center;">
              <ui-knob value="80" color='{"from": "#10b981", "to": "#10b981"}' size="120" stroke-width="12" show-value="true"></ui-knob>
              <p style="font-size: 11px; margin-top: 8px; color:var(--text-secondary,#64748b);">Arctic Ice</p>
            </div>
            <div style="text-align: center;">
              <ui-knob value="45" color='{"from": "#f59e0b", "to": "#ef4444"}' size="120" stroke-width="12" show-value="true"></ui-knob>
              <p style="font-size: 11px; margin-top: 8px; color:var(--text-secondary,#64748b);">Sunburst</p>
            </div>
            <div style="text-align: center;">
              <ui-knob value="90" color='{"from": "#6366f1", "to": "#ec4899"}' size="120" stroke-width="12" show-value="true"></ui-knob>
              <p style="font-size: 11px; margin-top: 8px; color:var(--text-secondary,#64748b);">Cyberpunk</p>
            </div>
          </div>
        </div>
      `;
    };

    window.showSizesKnob = function () {
      const container = document.getElementById('knobDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="demo-block">
          <h3>Different Sizes</h3>
          <div style="display: flex; gap: 40px; flex-wrap: wrap; justify-content: center; align-items: center; padding: 20px;">
            <div style="text-align: center;">
              <ui-knob value="50" size="80" stroke-width="6" show-value="true" enable-wheel="true"></ui-knob>
            </div>
            <div style="text-align: center;">
              <ui-knob value="65" size="120" stroke-width="8" show-value="true" enable-wheel="true"></ui-knob>
            </div>
            <div style="text-align: center;">
              <ui-knob value="80" size="160" stroke-width="10" show-value="true" enable-wheel="true"></ui-knob>
            </div>
          </div>
        </div>
      `;
    };

    window.showSpeedometerKnob = function () {
      const container = document.getElementById('knobDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="demo-block">
          <h3>Speedometer</h3>
          <p style="color:var(--text-secondary,#64748b);">Use buttons to accelerate/decelerate. Wheel and drag also work.</p>
          <div style="display:flex; gap:24px; align-items:center; justify-content:center; flex-wrap:wrap; padding: 20px;">
            <div style="text-align:center;">
              <ui-knob id="speedKnob" value="0" min="0" max="240" step="10" size="180" stroke-width="10" color="#16a34a" track-color="#e5e7eb" show-value="true" value-suffix=" km/h" show-ticks="true" tick-count="12" tick-color="#94a3b8" tick-length="0.12" start-angle="135" end-angle="405"></ui-knob>
              <div style="margin-top:12px; display:flex; gap:12px; justify-content:center;">
                <ui-button id="speedDec" >Brake −</ui-button>
                <ui-button id="speedInc" >Gas +</ui-button>
              </div>
            </div>
          </div>
        </div>
      `;

      const knob = document.getElementById('speedKnob');
      const dec = document.getElementById('speedDec');
      const inc = document.getElementById('speedInc');
      const clamp = (v, min, max) => Math.max(min, Math.min(max, v));
      const numAttr = (el, name, def = 0) => {
        const v = el?.getAttribute(name);
        const n = Number(v);
        return Number.isFinite(n) ? n : def;
      };

      const applyDelta = deltaSteps => {
        const current = numAttr(knob, 'value', 0);
        const step = numAttr(knob, 'step', 10);
        const min = numAttr(knob, 'min', 0);
        const max = numAttr(knob, 'max', 240);
        const next = clamp(current + deltaSteps * step, min, max);
        knob.setAttribute('value', String(next));
      };

      dec && (dec.onclick = () => applyDelta(-1));
      inc && (inc.onclick = () => applyDelta(1));
    };

    window.showInteractiveKnob = function () {
      const container = document.getElementById('knobDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div style="background-color:var(--bg-primary,white); border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
          <h3>🎮 Interactive Playground</h3>
          <div style="display: flex; gap: 30px; flex-wrap: wrap; margin-top: 20px;">
            <div style="flex: 1; min-width: 300px;">
              <div style="display: flex; flex-direction: column; gap: 15px;">
                <div style="display:flex; gap:8px; flex-wrap:wrap;">
                  <ui-button type="button" onclick="applyKnobPreset('volume')" >Preset: Volume %</ui-button>
                  <ui-button type="button" onclick="applyKnobPreset('temperature')" >Preset: Temp °C</ui-button>
                  <ui-button type="button" onclick="applyKnobPreset('speed')" >Preset: Speed km/h</ui-button>
                  <ui-button type="button" onclick="applyKnobPreset('rpm')" >Preset: Tachometer RPM</ui-button>
                </div>
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Value:</label>
                  <ui-input type="number" id="knobValue" value="50" min="0" max="100" oninput="updateInteractiveKnob()"
                 >
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Min Value:</label>
                  <ui-input type="number" id="knobMin" value="0" oninput="updateInteractiveKnob()"
                    >
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Max Value:</label>
                  <ui-input type="number" id="knobMax" value="100" oninput="updateInteractiveKnob()"
                    >
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Step:</label>
                  <ui-input type="number" id="knobStep" value="1" min="1" oninput="updateInteractiveKnob()"
                    >
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Size:</label>
                  <ui-input type="number" id="knobSize" value="120" min="50" max="300" oninput="updateInteractiveKnob()"
                    >
                </div>
                <div style="display:flex; gap:12px;">
                  <div style="flex:1;">
                    <label style="display:block; margin-bottom:5px; font-weight:500;">Start Angle:</label>
                    <ui-input type="number" id="knobStartAngle" value="135" min="0" max="360" oninput="updateInteractiveKnob()"
                      >
                  </div>
                  <div style="flex:1;">
                    <label style="display:block; margin-bottom:5px; font-weight:500;">End Angle:</label>
                    <ui-input type="number" id="knobEndAngle" value="405" min="0" max="540" oninput="updateInteractiveKnob()"
                      >
                  </div>
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Stroke Width:</label>
                  <ui-input type="number" id="knobStrokeWidth" value="8" min="2" max="20" oninput="updateInteractiveKnob()"
                    >
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Color:</label>
                  <ui-input type="color" id="knobColor" value="#10b981" oninput="updateInteractiveKnob()"
                    >
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Value Suffix (unit):</label>
                  <ui-input type="text" id="knobValueSuffix" value="" oninput="updateInteractiveKnob()"
                     placeholder="e.g., %, km/h, °">
                </div>
                
                <ui-checkbox id="knobShowValue" checked label="Show Value" onCheckboxChange="updateInteractiveKnob()"></ui-checkbox>
                <ui-checkbox id="knobEnableWheel" checked label="Enable Mouse Wheel" onCheckboxChange="updateInteractiveKnob()"></ui-checkbox>
                <ui-checkbox id="knobShowMinMax" label="Show Min/Max" onCheckboxChange="updateInteractiveKnob()"></ui-checkbox>
                <ui-checkbox id="knobShowLabels" label="Show Scale Labels" onCheckboxChange="updateInteractiveKnob()"></ui-checkbox>
                <ui-checkbox id="knobSnap" label="Snap to Steps" onCheckboxChange="updateInteractiveKnob()"></ui-checkbox>
                <ui-checkbox id="knobAllowInput" label="Allow Input Edit (Dbl Click)" onCheckboxChange="updateInteractiveKnob()"></ui-checkbox>


                <hr style="margin:6px 0; border:none; border-top:1px solid #e5e7eb;">
                <div style="display:flex; gap:12px; align-items:center; flex-wrap:wrap;">
                  <div style="flex:1; min-width:150px;">
                    <ui-checkbox id="knobShowTicks" label="Show Ticks:" onCheckboxChange="updateInteractiveKnob()"></ui-checkbox>
                  </div>
                  <div style="flex:1; min-width:150px;">
                    <label style="display:block; margin-bottom:5px; font-weight:500;">Tick Count:</label>
                    <ui-input type="number" id="knobTickCount" value="10" min="2" max="60" oninput="updateInteractiveKnob()"
                      >
                  </div>
                  <div style="flex:1; min-width:150px;">
                    <label style="display:block; margin-bottom:5px; font-weight:500;">Tick Length:</label>
                    <ui-input type="number" id="knobTickLength" value="0.1" step="0.01" min="0.02" max="0.4" oninput="updateInteractiveKnob()"
                      >
                  </div>
                  <div style="flex:1; min-width:150px;">
                    <label style="display:block; margin-bottom:5px; font-weight:500;">Tick Color:</label>
                    <ui-input type="color" id="knobTickColor" value="#94a3b8" oninput="updateInteractiveKnob()"
                      >
                  </div>
                </div>
                
                <ui-checkbox id="knobReadonly" label="Read Only" onCheckboxChange="updateInteractiveKnob()"></ui-checkbox>
              </div>
            </div>
            
            <div style="flex: 1; min-width: 300px; background-color: var(--bg-secondary, #f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb); display: flex; flex-direction: column; gap: 16px; justify-content: center; align-items: center;">
              <div id="interactiveKnobContainer" tabindex="0" aria-label="Knob playground" style="outline:none;"></div>
              <div style="display:flex; gap:12px; align-items:center;">
                <ui-button id="knobDecrementBtn" >− Decrease</ui-button>
                <ui-button id="knobIncrementBtn" >+ Increase</ui-button>
              </div>
              
              <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative; width: 100%;">
                <ui-button onclick="copyKnobCode()" id="copyKnobBtn" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); color: white; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer; transition: all 0.2s;">Copy</ui-button>
                <code id="knobCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px;">
                  &lt;ui-knob ...&gt;&lt;/ui-knob&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      `;

      window.copyKnobCode = () => {
        const code = document.getElementById('knobCodeBlock').innerText;
        const btn = document.getElementById('copyKnobBtn');

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

      window.updateKnobCode = () => {
        const knob = document.querySelector('#interactiveKnobContainer ui-knob');
        const codeBlock = document.getElementById('knobCodeBlock');
        if (!knob || !codeBlock) return;

        let props = '';
        if (knob.getAttribute('value') && knob.getAttribute('value') !== '0') props += ` value="${knob.getAttribute('value')}"`;
        if (knob.getAttribute('min') && knob.getAttribute('min') !== '0') props += ` min="${knob.getAttribute('min')}"`;
        if (knob.getAttribute('max') && knob.getAttribute('max') !== '100') props += ` max="${knob.getAttribute('max')}"`;
        if (knob.getAttribute('step') && knob.getAttribute('step') !== '1') props += ` step="${knob.getAttribute('step')}"`;
        if (knob.getAttribute('size') && knob.getAttribute('size') !== '100') props += ` size="${knob.getAttribute('size')}"`;
        if (knob.getAttribute('stroke-width')) props += ` stroke-width="${knob.getAttribute('stroke-width')}"`;
        if (knob.getAttribute('color') && knob.getAttribute('color') !== '#10b981') props += ` color="${knob.getAttribute('color')}"`;
        if (knob.getAttribute('start-angle') && knob.getAttribute('start-angle') !== '135') props += ` start-angle="${knob.getAttribute('start-angle')}"`;
        if (knob.getAttribute('end-angle') && knob.getAttribute('end-angle') !== '405') props += ` end-angle="${knob.getAttribute('end-angle')}"`;
        if (knob.getAttribute('value-suffix')) props += ` value-suffix="${knob.getAttribute('value-suffix')}"`;
        if (knob.getAttribute('show-value')) props += ` show-value`;
        if (knob.getAttribute('readonly')) props += ` readonly`;
        if (knob.getAttribute('disabled')) props += ` disabled`;
        if (knob.getAttribute('show-labels')) props += ` show-labels`;
        if (knob.getAttribute('snap')) props += ` snap`;
        if (knob.getAttribute('allow-input')) props += ` allow-input`;

        // Ticks
        if (knob.getAttribute('show-ticks')) {
          props += ` show-ticks`;
          if (knob.getAttribute('tick-count')) props += ` tick-count="${knob.getAttribute('tick-count')}"`;
        }

        codeBlock.innerText = `<ui-knob${props}></ui-knob>`;
      };

      updateInteractiveKnob();
    };

    window.updateInteractiveKnob = function () {
      const value = document.getElementById('knobValue')?.value || 50;
      const min = document.getElementById('knobMin')?.value || 0;
      const max = document.getElementById('knobMax')?.value || 100;
      const step = document.getElementById('knobStep')?.value || 1;
      const size = document.getElementById('knobSize')?.value || 120;
      const strokeWidth = document.getElementById('knobStrokeWidth')?.value || 8;
      const color = document.getElementById('knobColor')?.value || '#10b981';
      const startAngle = document.getElementById('knobStartAngle')?.value || 135;
      const endAngle = document.getElementById('knobEndAngle')?.value || 405;
      const valueSuffix = document.getElementById('knobValueSuffix')?.value || '';
      const showValue = document.getElementById('knobShowValue')?.checked !== false;
      const showMinMax = document.getElementById('knobShowMinMax')?.checked || false;
      const enableWheel = document.getElementById('knobEnableWheel')?.checked !== false;
      const readonly = document.getElementById('knobReadonly')?.checked || false;
      const showTicks = document.getElementById('knobShowTicks')?.checked || false;
      const tickCount = document.getElementById('knobTickCount')?.value || 10;
      const tickLength = document.getElementById('knobTickLength')?.value || 0.1;
      const tickColor = document.getElementById('knobTickColor')?.value || '#94a3b8';

      const showLabels = document.getElementById('knobShowLabels')?.checked || false;
      const snap = document.getElementById('knobSnap')?.checked || false;
      const allowInput = document.getElementById('knobAllowInput')?.checked || false;

      const container = document.getElementById('interactiveKnobContainer');
      if (!container) return;

      container.innerHTML = '';

      const knob = document.createElement('ui-knob');
      knob.setAttribute('value', value);
      knob.setAttribute('min', min);
      knob.setAttribute('max', max);
      knob.setAttribute('step', step);
      knob.setAttribute('size', size);
      knob.setAttribute('stroke-width', strokeWidth);
      knob.setAttribute('color', color);
      knob.setAttribute('start-angle', startAngle);
      knob.setAttribute('end-angle', endAngle);
      if (valueSuffix) knob.setAttribute('value-suffix', valueSuffix);
      if (showValue) knob.setAttribute('show-value', 'true');
      if (readonly) knob.setAttribute('readonly', 'true');
      if (enableWheel) knob.setAttribute('enable-wheel', 'true');
      if (showMinMax) knob.setAttribute('show-min-max', 'true');
      if (showTicks) knob.setAttribute('show-ticks', 'true');
      if (showTicks) knob.setAttribute('tick-count', String(tickCount));
      if (showTicks) knob.setAttribute('tick-length', String(tickLength));
      if (showTicks) knob.setAttribute('tick-color', String(tickColor));

      if (showLabels) knob.setAttribute('show-labels', 'true');
      if (snap) knob.setAttribute('snap', 'true');
      if (allowInput) knob.setAttribute('allow-input', 'true');

      container.appendChild(knob);

      // Listen for value changes (committed)
      knob.addEventListener('knobChange', event => {
        const valueInput = document.getElementById('knobValue');
        if (valueInput) valueInput.value = event.detail;
      });
      // Listen for live input while dragging/wheeling
      knob.addEventListener('knobInput', event => {
        const valueInput = document.getElementById('knobValue');
        if (valueInput) valueInput.value = event.detail;
      });

      // Wire inc/dec buttons to adjust knob value programmatically
      const decBtn = document.getElementById('knobDecrementBtn');
      const incBtn = document.getElementById('knobIncrementBtn');
      const toNumber = el => Number((el && el.value) || 0);

      const applyDelta = delta => {
        const current = Number(knob.getAttribute('value')) || 0;
        const s = Number(step);
        const newVal = Math.max(Number(min), Math.min(Number(max), current + delta * (s || 1)));
        knob.setAttribute('value', String(newVal));
        // also reflect in the form input
        const valueInput = document.getElementById('knobValue');
        if (valueInput) valueInput.value = String(newVal);
        window.updateKnobCode();
      };

      if (decBtn) decBtn.onclick = () => applyDelta(-1);
      if (incBtn) incBtn.onclick = () => applyDelta(1);
      const containerEl = document.getElementById('interactiveKnobContainer');
      if (containerEl) {
        containerEl.onkeydown = e => {
          if (e.key === 'ArrowLeft' || e.key === 'ArrowDown') {
            applyDelta(-1);
            e.preventDefault();
          } else if (e.key === 'ArrowRight' || e.key === 'ArrowUp') {
            applyDelta(1);
            e.preventDefault();
          }
        };
      }
      window.updateKnobCode();
    };

    // Presets for quick configuration
    window.applyKnobPreset = function (name) {
      const setVal = (id, val) => {
        const el = document.getElementById(id);
        if (el) el.value = String(val);
      };
      const setChecked = (id, checked) => {
        const el = document.getElementById(id);
        if (el) el.checked = !!checked;
      };
      switch (name) {
        case 'volume':
          setVal('knobMin', 0);
          setVal('knobMax', 100);
          setVal('knobStep', 1);
          setVal('knobValue', 75);
          setVal('knobColor', '#10b981');
          setVal('knobValueSuffix', '%');
          setChecked('knobShowMinMax', true);
          setChecked('knobShowValue', true);
          setChecked('knobEnableWheel', true);
          setChecked('knobShowTicks', false);
          setChecked('knobShowLabels', true);
          setChecked('knobSnap', false);
          setChecked('knobAllowInput', true);
          break;
        case 'temperature':
          setVal('knobMin', -20);
          setVal('knobMax', 50);
          setVal('knobStep', 1);
          setVal('knobValue', 22);
          setVal('knobColor', '#ef4444');
          setVal('knobValueSuffix', ' °C');
          setChecked('knobShowMinMax', true);
          setChecked('knobShowValue', true);
          setChecked('knobEnableWheel', true);
          setChecked('knobShowTicks', true);
          setVal('knobTickCount', 14);
          setVal('knobTickLength', 0.08);
          setVal('knobTickColor', '#94a3b8');
          setChecked('knobShowLabels', true);
          setChecked('knobAllowInput', true);
          break;
        case 'speed':
          setVal('knobMin', 0);
          setVal('knobMax', 240);
          setVal('knobStep', 10);
          setVal('knobValue', 60);
          setVal('knobColor', '#16a34a');
          setVal('knobValueSuffix', ' km/h');
          setChecked('knobShowMinMax', true);
          setChecked('knobShowValue', true);
          setChecked('knobEnableWheel', true);
          setChecked('knobShowTicks', true);
          setVal('knobTickCount', 12);
          setVal('knobTickLength', 0.12);
          setVal('knobTickColor', '#94a3b8');
          setVal('knobStartAngle', 135);
          setVal('knobEndAngle', 405);
          setChecked('knobShowLabels', true);
          break;
        case 'rpm':
          setVal('knobMin', 0);
          setVal('knobMax', 8000);
          setVal('knobStep', 250);
          setVal('knobValue', 1500);
          setVal('knobColor', '#ef4444');
          setVal('knobValueSuffix', ' RPM');
          setChecked('knobShowMinMax', true);
          setChecked('knobShowValue', true);
          setChecked('knobEnableWheel', true);
          setChecked('knobShowTicks', true);
          setVal('knobTickCount', 16);
          setVal('knobTickLength', 0.1);
          setVal('knobTickColor', '#64748b');
          setVal('knobStartAngle', 180);
          setVal('knobEndAngle', 420);
          break;
      }
      updateInteractiveKnob();
    };

    showBasicKnob();
  }, 100);
}
