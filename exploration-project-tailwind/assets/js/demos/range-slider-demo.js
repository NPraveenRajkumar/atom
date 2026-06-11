// Component Demo Functions
export function initRangeSliderDemo() {
  const section = document.getElementById('range-slider');
  if (!section) return;

  section.innerHTML = `
    
    <p>Slider input for selecting values or ranges with customizable styling. <strong>(Supports Keyboard: Focus and use Arrow Keys)</strong></p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showSliderSizes()" variant="outline">📏 Sizes</ui-button>
      <ui-button onclick="showBasicSlider()" variant="outline">Basic</ui-button>
      <ui-button onclick="showRangeSlider()" variant="outline">Range</ui-button>
      <ui-button onclick="showSteppedSlider()" variant="outline">Stepped</ui-button>
      <ui-button onclick="showColoredSlider()" variant="outline">Colored</ui-button>
      <ui-button onclick="showVerticalSlider()" variant="outline">Vertical</ui-button>
      <ui-button onclick="showDetailedSlider()" variant="outline">👑 Apex Slider</ui-button>
      <ui-button onclick="showNewFeatures()" variant="outline">✨ New Features</ui-button>
      <ui-button onclick="showInteractiveSlider()" variant="outline">🎮 Interactive Playground</ui-button>
      <ui-button onclick="showAdvancedFeaturesSlider()" variant="outline">🧩 Advanced Features</ui-button>
      <ui-button onclick="showMinMaxDynamicStepSlider()" variant="outline">Min/Max Dynamic Step</ui-button>
    </div>

    <div id="sliderDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    // Range Slider Demo Functions
    window.showNewFeatures = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div style="display: flex; flex-direction: column; gap: 36px; max-width: 640px;">

          <div class="demo-block">
            <h3>Label, Prefix & Suffix</h3>
            <p style="color:#6b7280;margin-bottom:16px;">Use <code>label</code>, <code>prefix-text</code>, and <code>suffix-text</code> for rich labeled sliders.</p>
            <ui-range-slider label="Volume" value="60" suffix-text="%" show-tooltip tooltip-always-visible></ui-range-slider>
            <div style="margin-top:20px">
            <ui-range-slider label="Price ($)" value="350" min="0" max="1000" step="10" prefix-text="$" show-tooltip tooltip-always-visible size="md"></ui-range-slider>
            </div>
            <div style="margin-top:20px">
            <ui-range-slider label="Font Size" value="16" min="8" max="72" step="1" suffix-text="px" show-tooltip tooltip-always-visible variant="purple"></ui-range-slider>
            </div>
          </div>

          <div class="demo-block">
            <h3>Semantic Variants</h3>
            <p style="color:#6b7280;margin-bottom:16px;">Use <code>variant</code> instead of <code>color</code> for semantic theming.</p>
            <div style="display:flex;flex-direction:column;gap:18px;">
              <ui-range-slider label="Primary" variant="primary" value="65" tooltip-always-visible></ui-range-slider>
              <ui-range-slider label="Success" variant="success" value="80" tooltip-always-visible></ui-range-slider>
              <ui-range-slider label="Danger" variant="danger" value="35" tooltip-always-visible></ui-range-slider>
              <ui-range-slider label="Warning" variant="warning" value="55" tooltip-always-visible></ui-range-slider>
              <ui-range-slider label="Info" variant="info" value="70" tooltip-always-visible></ui-range-slider>
              <ui-range-slider label="Purple" variant="purple" value="45" tooltip-always-visible></ui-range-slider>
            </div>
          </div>

          <div class="demo-block">
            <h3>Gradient Track & Custom Gradients</h3>
            <p style="color:#6b7280;margin-bottom:16px;">Enable <code>gradient-track</code> for semantic gradients or pass a custom <code>color</code> object.</p>
            <div style="display:flex;flex-direction:column;gap:18px;">
              <ui-range-slider label="Blue Gradient" variant="primary" value="70" gradient-track tooltip-always-visible size="md"></ui-range-slider>
              <ui-range-slider label="Success Gradient" variant="success" value="55" gradient-track tooltip-always-visible size="md"></ui-range-slider>
              <ui-range-slider label="Ocean Flow (Gradient Knobs)" color='{"from": "#10b981", "to": "#10b981"}' value="65" gradient-track tooltip-always-visible size="md"></ui-range-slider>
              <ui-range-slider label="Sunset Fire (Gradient Knobs)" color='{"from": "#f59e0b", "to": "#ef4444"}' value="85" gradient-track tooltip-always-visible size="md"></ui-range-slider>
              <ui-range-slider label="Neon Cosmic (Range + Gradient Knobs)" color='{"from": "#6366f1", "to": "#ec4899"}' range start-value="20" end-value="75" gradient-track tooltip-always-visible size="md"></ui-range-slider>
            </div>
          </div>

          <div class="demo-block">
            <h3>Min/Max Labels</h3>
            <p style="color:#6b7280;margin-bottom:16px;">Enable <code>show-min-max</code> to show range boundaries at the ends of the track.</p>
            <ui-range-slider label="Temperature (°C)" min="-20" max="60" value="22" suffix-text="°C" show-min-max variant="info" tooltip-always-visible></ui-range-slider>
            <div style="margin-top:20px">
            <ui-range-slider label="Budget Range" min="0" max="10000" step="100" range start-value="1000" end-value="7500" prefix-text="$" show-min-max variant="success" tooltip-always-visible></ui-range-slider>
            </div>
          </div>

          <div class="demo-block">
            <h3>Input Sync</h3>
            <p style="color:#6b7280;margin-bottom:16px;">Enable <code>input-sync</code> to add editable number inputs synced with the slider position.</p>
            <ui-range-slider label="Single value with input" value="42" min="0" max="100" variant="primary" input-sync show-value="false"></ui-range-slider>
            <div style="margin-top:20px">
            <ui-range-slider label="Range with inputs" range start-value="20" end-value="80" min="0" max="100" variant="purple" input-sync show-value="false"></ui-range-slider>
            </div>
          </div>

          <div class="demo-block">
            <h3>Active Mark Highlighting</h3>
            <p style="color:#6b7280;margin-bottom:16px;">Marks inside the selected range are now highlighted in the accent color.</p>
            <ui-range-slider label="Progress Steps" min="0" max="100" step="25" value="75" show-marks variant="success" tooltip-always-visible size="md" marks='[{"value":0,"label":"Start"},{"value":25,"label":"25%"},{"value":50,"label":"Half"},{"value":75,"label":"75%"},{"value":100,"label":"Done"}]'></ui-range-slider>
          </div>

        </div>
      `;
    };

    window.showBasicSlider = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h4>Basic Slider</h4>
          <ui-range-slider id="basicSlider" min="0" max="100" value="50"></ui-range-slider>
          <div id="basicValue" style="margin-top: 12px; padding: 10px; background: #f0f9ff; border-radius: 6px; text-align: center;">
            Value: <strong>50</strong>
          </div>
        </div>
      </div>
    `;
      setTimeout(() => {
        const slider = document.getElementById('basicSlider');
        if (slider) {
          slider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('basicValue');
            if (valueDiv) {
              valueDiv.innerHTML = `Value: <strong>${e.detail}</strong>`;
            }
          });
        }
      }, 100);
    };

    window.showRangeSlider = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h4>Price Range Selector</h4>
          <p style="color: #6b7280; font-size: 13px;">Select a price range</p>
          <ui-range-slider 
            id="rangeSlider" 
            range="true"
            min="0" 
            max="1000" 
            start-value="200" 
            end-value="800"
            display-format="$\${value}"
            color="#10b981"></ui-range-slider>
          <div id="rangeValue" style="margin-top: 12px; padding: 10px; background:var(--accent-green-soft,#dcfce7); border-radius: 6px; text-align: center;">
            Range: <strong>$200 - $800</strong>
          </div>
        </div>
        <div>
          <h4>Temperature Range</h4>
          <p style="color: #6b7280; font-size: 13px;">Set temperature limits</p>
          <ui-range-slider 
            id="tempSlider" 
            range="true"
            min="-20" 
            max="50" 
            start-value="10" 
            end-value="30"
            display-format="\${value}°C"
            color="#ef4444"></ui-range-slider>
        </div>
      </div>
    `;
      setTimeout(() => {
        const slider = document.getElementById('rangeSlider');
        if (slider) {
          slider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('rangeValue');
            if (valueDiv) {
              valueDiv.innerHTML = `Range: <strong>$${e.detail.start} - $${e.detail.end}</strong>`;
            }
          });
        }
      }, 100);
    };

    window.showSliderWithIcons = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h4>Volume Control</h4>
          <ui-range-slider 
            min="0" 
            max="100" 
            value="70"
            start-icon="🔇"
            end-icon="🔊"
            color="#10b981"></ui-range-slider>
        </div>
        <div>
          <h4>Brightness</h4>
          <ui-range-slider 
            min="0" 
            max="100" 
            value="60"
            start-icon="🌙"
            end-icon="☀️"
            color="#f59e0b"></ui-range-slider>
        </div>
        <div>
          <h4>Speed</h4>
          <ui-range-slider 
            min="0" 
            max="100" 
            value="45"
            start-icon="🐢"
            end-icon="🚀"
            color="#8b5cf6"></ui-range-slider>
        </div>
        <div>
          <h4>With Text Labels</h4>
          <ui-range-slider 
            min="0" 
            max="100" 
            value="50"
            start-icon="Min"
            end-icon="Max"
            color="#ec4899"></ui-range-slider>
        </div>
      </div>
    `;
    };

    window.showSliderSizes = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 600px; display: flex; flex-direction: column; gap: 30px;">
        <div class="demo-block">
          <h3>Universal Sizing Spectrum</h3>
          <p style="color: #6b7280; margin-bottom: 24px;">From micro-adjustments to high-visibility controls.</p>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            ${['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
              .map(
                s => `
              <div style="display: flex; align-items: center; gap: 16px;">
                <span style="width: 80px; font-size: 11px; font-weight: 800; color:var(--text-secondary,#64748b); text-transform: uppercase;">${s}</span>
                <ui-range-slider size="${s}" value="${Math.floor(Math.random() * 100)}" style="flex: 1;"></ui-range-slider>
              </div>
            `,
              )
              .join('')}
          </div>
        </div>
      </div>
    `;
    };

    window.showSliderColors = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h4 style="color: #10b981;">Blue</h4>
          <ui-range-slider value="60" color="#10b981"></ui-range-slider>
        </div>
        <div>
          <h4 style="color: #10b981;">Green</h4>
          <ui-range-slider value="70" color="#10b981"></ui-range-slider>
        </div>
        <div>
          <h4 style="color:var(--accent-yellow,#f59e0b);">Orange</h4>
          <ui-range-slider value="50" color="#f59e0b"></ui-range-slider>
        </div>
        <div>
          <h4 style="color:var(--accent-red,#ef4444);">Red</h4>
          <ui-range-slider value="80" color="#ef4444"></ui-range-slider>
        </div>
        <div>
          <h4 style="color:var(--accent-purple,#8b5cf6);">Purple</h4>
          <ui-range-slider value="45" color="#8b5cf6"></ui-range-slider>
        </div>
        <div>
          <h4 style="color:var(--accent-pink,#ec4899);">Pink</h4>
          <ui-range-slider value="65" color="#ec4899"></ui-range-slider>
        </div>
        <div>
          <h4>Custom Track Color</h4>
          <ui-range-slider value="55" color="#10b981" track-color="#fecaca"></ui-range-slider>
        </div>
      </div>
    `;
    };

    window.showSliderSteps = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h4>Regular Steps (Step: 10)</h4>
          <p style="color: #6b7280; font-size: 13px;">Values snap to multiples of 10</p>
          <ui-range-slider 
            min="0" 
            max="100" 
            step="10"
            value="50"
            show-marks="true"></ui-range-slider>
        </div>
        <div>
          <h4>Custom Steps (Non-linear)</h4>
          <p style="color: #6b7280; font-size: 13px;">0, 10, 25, 50, 100, 200, 500</p>
          <ui-range-slider 
            id="customStepSlider"
            min="0" 
            max="500"
            value="50"
            show-marks="true"
            color="#8b5cf6"></ui-range-slider>
        </div>
        <div>
          <h4>With Labels</h4>
          <ui-range-slider 
            id="labelSlider"
            min="0" 
            max="5"
            step="1"
            value="2"
            show-marks="true"
            color="#ec4899"></ui-range-slider>
        </div>
      </div>
    `;
      setTimeout(() => {
        const customSlider = document.getElementById('customStepSlider');
        if (customSlider) {
          customSlider.customSteps = [0, 10, 25, 50, 100, 200, 500];
        }

        const labelSlider = document.getElementById('labelSlider');
        if (labelSlider) {
          labelSlider.marks = [
            { value: 0, label: 'None' },
            { value: 1, label: 'Low' },
            { value: 2, label: 'Med' },
            { value: 3, label: 'High' },
            { value: 4, label: 'Max' },
            { value: 5, label: 'Ultra' },
          ];
        }
      }, 100);
    };

    window.showVerticalSlider = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 800px;">
        <h3>Vertical Sliders</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Sliders can be displayed vertically for different UI layouts.</p>
        
        <div style="display: flex; gap: 60px; align-items: flex-start; justify-content: center; padding: 30px; background-color: #f9fafb; border-radius: 8px; flex-wrap: wrap;">
          <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            <h4 style="margin: 0;">Volume</h4>
            <ui-range-slider 
              id="verticalVolume"
              vertical="true"
              min="0" 
              max="100" 
              value="70"
              color="#10b981"
              start-icon="🔇"
              end-icon="🔊"></ui-range-slider>
            <div id="volumeValue" style="padding: 8px 16px; background:var(--accent-blue-soft,#dbeafe); border-radius: 6px; font-size: 14px;">
              <strong>70%</strong>
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            <h4 style="margin: 0;">Brightness</h4>
            <ui-range-slider 
              id="verticalBrightness"
              vertical="true"
              min="0" 
              max="100" 
              value="60"
              color="#f59e0b"
              start-icon="🌙"
              end-icon="☀️"></ui-range-slider>
            <div id="brightnessValue" style="padding: 8px 16px; background:var(--accent-yellow-soft,#fef3c7); border-radius: 6px; font-size: 14px;">
              <strong>60%</strong>
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            <h4 style="margin: 0;">Temperature</h4>
            <ui-range-slider 
              id="verticalTemp"
              vertical="true"
              range="true"
              min="0" 
              max="100" 
              start-value="30"
              end-value="70"
              color="#ef4444"></ui-range-slider>
            <div id="tempValue" style="padding: 8px 16px; background:var(--accent-red-soft,#fee2e2); border-radius: 6px; font-size: 14px;">
              <strong>30-70°C</strong>
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            <h4 style="margin: 0;">Priority</h4>
            <ui-range-slider 
              id="verticalPriority"
              vertical="true"
              min="1" 
              max="5" 
              value="3"
              step="1"
              show-marks="true"
              color="#8b5cf6"></ui-range-slider>
            <div id="priorityValue" style="padding: 8px 16px; background:var(--accent-purple-soft,#ede9fe); border-radius: 6px; font-size: 14px;">
              <strong>md</strong>
            </div>
          </div>
          
          <div style="display: flex; flex-direction: column; align-items: center; gap: 16px;">
            <h4 style="margin: 0;">Speed</h4>
            <ui-range-slider 
              id="verticalSpeed"
              vertical="true"
              min="0" 
              max="100" 
              value="45"
              color="#10b981"
              size="md"
              start-icon="🐢"
              end-icon="🚀"></ui-range-slider>
            <div id="speedValue" style="padding: 8px 16px; background:var(--accent-green-soft,#d1fae5); border-radius: 6px; font-size: 14px;">
              <strong>45%</strong>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding: 20px; background-color:var(--bg-primary,white); border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
          <h4>Different Sizes</h4>
          <div style="display: flex; gap: 40px; align-items: flex-end; justify-content: center; padding: 20px;">
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
              <span style="font-size: 13px; color: #6b7280;">Small</span>
              <ui-range-slider 
                vertical="true"
                size="sm"
                value="40"
                color="#10b981"></ui-range-slider>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
              <span style="font-size: 13px; color: #6b7280;">md</span>
              <ui-range-slider 
                vertical="true"
                size="md"
                value="60"
                color="#10b981"></ui-range-slider>
            </div>
            <div style="display: flex; flex-direction: column; align-items: center; gap: 12px;">
              <span style="font-size: 13px; color: #6b7280;">Large</span>
              <ui-range-slider 
                vertical="true"
                size="lg"
                value="80"
                color="#f59e0b"></ui-range-slider>
            </div>
          </div>
        </div>
      </div>
    `;

      setTimeout(() => {
        const volumeSlider = document.getElementById('verticalVolume');
        if (volumeSlider) {
          volumeSlider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('volumeValue');
            if (valueDiv) {
              valueDiv.innerHTML = `<strong>${e.detail}%</strong>`;
            }
          });
        }

        const brightnessSlider = document.getElementById('verticalBrightness');
        if (brightnessSlider) {
          brightnessSlider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('brightnessValue');
            if (valueDiv) {
              valueDiv.innerHTML = `<strong>${e.detail}%</strong>`;
            }
          });
        }

        const tempSlider = document.getElementById('verticalTemp');
        if (tempSlider) {
          tempSlider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('tempValue');
            if (valueDiv) {
              valueDiv.innerHTML = `<strong>${e.detail.start}-${e.detail.end}°C</strong>`;
            }
          });
        }

        const prioritySlider = document.getElementById('verticalPriority');
        if (prioritySlider) {
          const priorities = { 1: 'Very Low', 2: 'Low', 3: 'md', 4: 'High', 5: 'Critical' };
          prioritySlider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('priorityValue');
            if (valueDiv) {
              valueDiv.innerHTML = `<strong>${priorities[e.detail]}</strong>`;
            }
          });
        }

        const speedSlider = document.getElementById('verticalSpeed');
        if (speedSlider) {
          speedSlider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('speedValue');
            if (valueDiv) {
              valueDiv.innerHTML = `<strong>${e.detail}%</strong>`;
            }
          });
        }
      }, 100);
    };

    window.showInteractiveSlider = function () {
      console.log('showInteractiveSlider called');
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Customize the slider properties and see changes in real-time!</p>
        
        <div style="background-color:var(--bg-primary,white); padding: 20px; border-radius: 8px; margin-bottom: 20px; border:1px solid var(--border-default,#e5e7eb);">
          <h4 style="margin: 0 0 16px;">Settings</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Label:</span>
              <ui-input type="text" id="sliderLabel" value="Live Preview" oninput="updateInteractiveSlider()"
                >
            </label>

            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Min Value:</span>
              <ui-input type="number" id="sliderMin" value="0" oninput="updateInteractiveSlider()"
                >
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Max Value:</span>
              <ui-input type="number" id="sliderMax" value="100" oninput="updateInteractiveSlider()"
                >
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Step:</span>
              <ui-input type="number" id="sliderStep" value="1" min="1" oninput="updateInteractiveSlider()"
                >
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Value:</span>
              <ui-input type="number" id="sliderValue" value="50" oninput="updateInteractiveSlider()"
                >
            </label>

            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Prefix Text:</span>
              <ui-input type="text" id="sliderPrefixText" placeholder="e.g., $" oninput="updateInteractiveSlider()"
                >
            </label>

            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Suffix Text:</span>
              <ui-input type="text" id="sliderSuffixText" placeholder="e.g., % or px" value="%" oninput="updateInteractiveSlider()"
                >
            </label>

            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Display Format:</span>
              <ui-input type="text" id="sliderDisplayFormat" placeholder="e.g., Value: {value}" oninput="updateInteractiveSlider()"
                >
            </label>
            
            <div class="form-group">
               <label>Variant</label>
               <ui-dropdown id="sliderVariant" onchange="updateInteractiveSlider()" class="demo-select">
                 <option value="" selected>Default</option>
                 <option value="primary">Primary</option>
                 <option value="success">Success</option>
                 <option value="danger">Danger</option>
                 <option value="warning">Warning</option>
                 <option value="info">Info</option>
                 <option value="purple">Purple</option>
                 <option value="glass">Glassmorphism</option>
                 <option value="detailed">Elite/Detailed</option>
               </ui-dropdown>
            </div>
            <div class="form-group" style="display: flex; gap: 16px; align-items: flex-end; padding-bottom: 8px;">
               <ui-checkbox id="sliderRangeMode" checked label="👥 Range" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
               <ui-checkbox id="sliderMinMax" checked label="📏 Min/Max" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
               <ui-checkbox id="sliderInputSync" checked label="⌨️ Input Sync" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
              <ui-checkbox id="sliderShowTooltip" checked label="💬 Tooltip" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
              <ui-checkbox id="sliderTooltipAlwaysVisible" label="👀 Tooltip Always Visible" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
              <ui-checkbox id="sliderShowValue" checked label="🔢 Value Display" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
               <ui-checkbox id="sliderCircle" label="🔘 Circle Variant" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
               <ui-checkbox id="sliderRtl" label="🌍 RTL" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
            </div>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Color:</span>
              <ui-input type="color" id="sliderColor" value="#10b981" oninput="updateInteractiveSlider()"
                >
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Track Color:</span>
              <ui-input type="color" id="sliderTrackColor" value="#e5e7eb" oninput="updateInteractiveSlider()"
                >
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Start Icon:</span>
              <ui-input type="text" id="sliderStartIcon" placeholder="e.g., 🔇 or Min" oninput="updateInteractiveSlider()"
                >
              <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px;">
                <ui-button onclick="document.getElementById('sliderStartIcon').value='🔇'; updateInteractiveSlider();" style="padding: 4px 8px; font-size: 11px; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">🔇 Volume</ui-button>
                <ui-button onclick="document.getElementById('sliderStartIcon').value='🌙'; updateInteractiveSlider();" style="padding: 4px 8px; font-size: 11px; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">🌙 Dark</ui-button>
                <ui-button onclick="document.getElementById('sliderStartIcon').value='🐢'; updateInteractiveSlider();" style="padding: 4px 8px; font-size: 11px; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">🐢 Slow</ui-button>
                <ui-button onclick="document.getElementById('sliderStartIcon').value='Min'; updateInteractiveSlider();" style="padding: 4px 8px; font-size: 11px; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">Min</ui-button>
              </div>
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>End Icon:</span>
              <ui-input type="text" id="sliderEndIcon" placeholder="e.g., 🔊 or Max" oninput="updateInteractiveSlider()"
                >
              <div style="display: flex; gap: 4px; flex-wrap: wrap; margin-top: 4px;">
                <ui-button onclick="document.getElementById('sliderEndIcon').value='🔊'; updateInteractiveSlider();" style="padding: 4px 8px; font-size: 11px; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">🔊 Volume</ui-button>
                <ui-button onclick="document.getElementById('sliderEndIcon').value='☀️'; updateInteractiveSlider();" style="padding: 4px 8px; font-size: 11px; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">☀️ Light</ui-button>
                <ui-button onclick="document.getElementById('sliderEndIcon').value='🚀'; updateInteractiveSlider();" style="padding: 4px 8px; font-size: 11px; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">🚀 Fast</ui-button>
                <ui-button onclick="document.getElementById('sliderEndIcon').value='Max'; updateInteractiveSlider();" style="padding: 4px 8px; font-size: 11px; background: #f3f4f6; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">Max</ui-button>
              </div>
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Size:</span>
              <ui-dropdown id="sliderSize" oninput="updateInteractiveSlider()" style="padding: 6px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                <option value="sm">Small</option>
                <option value="md" selected>md</option>
                <option value="lg">Large</option>
              </ui-dropdown>
            </label>

            <ui-checkbox id="sliderGradient" label="Gradient Track" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
            
            <ui-checkbox id="sliderVertical" label="Vertical" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
            
            <ui-checkbox id="sliderShowMarks" label="Show Marks" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
            
            <ui-checkbox id="sliderDisabled" label="Disabled" oncheckboxchange="updateInteractiveSlider()"></ui-checkbox>
          </div>
          
          <div id="rangeControls" style="margin-top: 16px; display: none; padding-top: 16px; border-top: 1px solid #e5e7eb;">
            <h4 style="margin: 0 0 12px;">Range Mode Settings:</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
              <label style="display: flex; flex-direction: column; gap: 4px;">
                <span>Start Value:</span>
                <ui-input type="number" id="sliderStartValue" value="30" oninput="updateInteractiveSlider()"
                  >
              </label>
              
              <label style="display: flex; flex-direction: column; gap: 4px;">
                <span>End Value:</span>
                <ui-input type="number" id="sliderEndValue" value="70" oninput="updateInteractiveSlider()"
                  >
              </label>
            </div>
          </div>
        </div>
        
        <div style="padding: 20px; background-color: #f9fafb; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
          <div id="interactiveSliderContainer" style="min-height: 100px; display: flex; align-items: center; justify-content: center;"></div>
          <div id="sliderCurrentValue" style="margin-top: 16px; padding: 12px; background-color: var(--accent-blue-soft,#dbeafe); border-radius: 6px; text-align: center; font-family: monospace;">
            Value: <strong>50</strong>
          </div>
          
          <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
            <ui-button onclick="copyRangeSliderCode()" id="copyRangeSliderBtn" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); color: white; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer; transition: all 0.2s;">Copy</ui-button>
            <code id="rangeSliderCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
              &lt;ui-range-slider ...&gt;&lt;/ui-range-slider&gt;
            </code>
          </div>
        </div>
      </div>
    `;

      window.copyRangeSliderCode = () => {
        const code = document.getElementById('rangeSliderCodeBlock').innerText;
        const btn = document.getElementById('copyRangeSliderBtn');

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

      window.updateRangeSliderCode = () => {
        const slider = document.getElementById('interactiveSlider');
        const codeBlock = document.getElementById('rangeSliderCodeBlock');
        if (!slider || !codeBlock) return;

        let props = '';
        if (slider.getAttribute('range')) {
          props += ` range`;
          if (slider.getAttribute('start-value')) props += ` start-value="${slider.getAttribute('start-value')}"`;
          if (slider.getAttribute('end-value')) props += ` end-value="${slider.getAttribute('end-value')}"`;
        } else {
          if (slider.getAttribute('value')) props += ` value="${slider.getAttribute('value')}"`;
        }

        if (slider.getAttribute('min') && slider.getAttribute('min') !== '0') props += ` min="${slider.getAttribute('min')}"`;
        if (slider.getAttribute('max') && slider.getAttribute('max') !== '100') props += ` max="${slider.getAttribute('max')}"`;
        if (slider.getAttribute('step') && slider.getAttribute('step') !== '1') props += ` step="${slider.getAttribute('step')}"`;
        if (slider.getAttribute('label')) props += ` label="${slider.getAttribute('label')}"`;
        if (slider.getAttribute('size') && slider.getAttribute('size') !== 'md') props += ` size="${slider.getAttribute('size')}"`;
        if (slider.getAttribute('variant')) props += ` variant="${slider.getAttribute('variant')}"`;
        if (slider.getAttribute('color') && slider.getAttribute('color') !== '#10b981') props += ` color="${slider.getAttribute('color')}"`;
        if (slider.getAttribute('track-color') && slider.getAttribute('track-color') !== '#e5e7eb') props += ` track-color="${slider.getAttribute('track-color')}"`;
        if (slider.getAttribute('start-icon')) props += ` start-icon="${slider.getAttribute('start-icon')}"`;
        if (slider.getAttribute('end-icon')) props += ` end-icon="${slider.getAttribute('end-icon')}"`;
        if (slider.getAttribute('prefix-text')) props += ` prefix-text="${slider.getAttribute('prefix-text')}"`;
        if (slider.getAttribute('suffix-text')) props += ` suffix-text="${slider.getAttribute('suffix-text')}"`;
        if (slider.getAttribute('display-format')) props += ` display-format="${slider.getAttribute('display-format')}"`;
        if (slider.getAttribute('show-tooltip') === 'false') props += ` show-tooltip="false"`;
        if (slider.hasAttribute('tooltip-always-visible')) props += ` tooltip-always-visible`;
        if (slider.getAttribute('show-value') === 'false') props += ` show-value="false"`;
        if (slider.hasAttribute('show-min-max')) props += ` show-min-max`;
        if (slider.hasAttribute('input-sync')) props += ` input-sync`;
        if (slider.hasAttribute('gradient-track')) props += ` gradient-track`;
        if (slider.getAttribute('vertical')) props += ` vertical`;
        if (slider.getAttribute('show-marks')) props += ` show-marks`;
        if (slider.hasAttribute('circle')) props += ` circle`;
        if (slider.hasAttribute('rtl')) props += ` rtl`;
        if (slider.getAttribute('disabled')) props += ` disabled`;

        codeBlock.innerText = `<ui-range-slider${props}></ui-range-slider>`;
      };

      setTimeout(() => {
        updateInteractiveSlider();

        // Toggle range controls visibility
        const rangeCheckbox = document.getElementById('sliderRangeMode');
        if (rangeCheckbox) {
          rangeCheckbox.addEventListener('change', () => {
            const rangeControls = document.getElementById('rangeControls');
            if (rangeControls) {
              rangeControls.style.display = rangeCheckbox.checked ? 'block' : 'none';
            }
          });
        }
      }, 50);
    };

    window.updateInteractiveSlider = function () {
      const label = document.getElementById('sliderLabel')?.value || '';
      const min = document.getElementById('sliderMin')?.value || '0';
      const max = document.getElementById('sliderMax')?.value || '100';
      const step = document.getElementById('sliderStep')?.value || '1';
      const value = document.getElementById('sliderValue')?.value || '50';
      const prefixText = document.getElementById('sliderPrefixText')?.value || '';
      const suffixText = document.getElementById('sliderSuffixText')?.value || '';
      const size = document.getElementById('sliderSize')?.value || 'md';
      const variant = document.getElementById('sliderVariant')?.value || '';
      const color = document.getElementById('sliderColor')?.value || '#10b981';
      const trackColor = document.getElementById('sliderTrackColor')?.value || '#e5e7eb';
      const startIcon = document.getElementById('sliderStartIcon')?.value || '';
      const endIcon = document.getElementById('sliderEndIcon')?.value || '';
      const displayFormat = document.getElementById('sliderDisplayFormat')?.value || '';
      const isRange = document.getElementById('sliderRangeMode')?.checked || false;
      const showMinMax = document.getElementById('sliderMinMax')?.checked || false;
      const inputSync = document.getElementById('sliderInputSync')?.checked || false;
      const showTooltip = document.getElementById('sliderShowTooltip')?.checked ?? true;
      const tooltipAlwaysVisible = document.getElementById('sliderTooltipAlwaysVisible')?.checked || false;
      const showValue = document.getElementById('sliderShowValue')?.checked ?? true;
      const gradientTrack = document.getElementById('sliderGradient')?.checked || false;
      const circle = document.getElementById('sliderCircle')?.checked || false;
      const rtl = document.getElementById('sliderRtl')?.checked || false;
      const vertical = document.getElementById('sliderVertical')?.checked || false;
      const showMarks = document.getElementById('sliderShowMarks')?.checked || false;
      const disabled = document.getElementById('sliderDisabled')?.checked || false;
      const startValue = document.getElementById('sliderStartValue')?.value || '30';
      const endValue = document.getElementById('sliderEndValue')?.value || '70';

      const container = document.getElementById('interactiveSliderContainer');
      const valueDisplay = document.getElementById('sliderCurrentValue');

      if (container) {
        let html = `
        <ui-range-slider 
          id="interactiveSlider"
          ${label ? `label="${label}"` : ''}
          min="${min}" 
          max="${max}" 
          step="${step}"
          ${isRange ? `range="true" start-value="${startValue}" end-value="${endValue}"` : `value="${value}"`}
          size="${size}"
          ${variant ? `variant="${variant}"` : ''}
          color="${color}"
          track-color="${trackColor}"
          ${startIcon ? `start-icon="${startIcon}"` : ''}
          ${endIcon ? `end-icon="${endIcon}"` : ''}
          ${prefixText ? `prefix-text="${prefixText}"` : ''}
          ${suffixText ? `suffix-text="${suffixText}"` : ''}
          ${displayFormat ? `display-format="${displayFormat}"` : ''}
          show-tooltip="${showTooltip}"
          ${tooltipAlwaysVisible ? 'tooltip-always-visible' : ''}
          show-value="${showValue}"
          ${showMinMax ? 'show-min-max' : ''}
          ${inputSync ? 'input-sync' : ''}
          ${gradientTrack ? 'gradient-track' : ''}
          ${vertical ? 'vertical="true"' : ''}
          ${showMarks ? 'show-marks="true"' : ''}
          ${disabled ? 'disabled="true"' : ''}
          ${circle ? 'circle' : ''}
          ${rtl ? 'rtl' : ''}
        ></ui-range-slider>
      `;
        container.innerHTML = html;

        // Update value display
        if (valueDisplay) {
          if (isRange) {
            valueDisplay.innerHTML = `Range: <strong>${startValue} - ${endValue}</strong>`;
          } else {
            valueDisplay.innerHTML = `Value: <strong>${value}</strong>`;
          }
        }

        // Add event listener to track changes
        setTimeout(() => {
          const slider = document.getElementById('interactiveSlider');
          if (slider && valueDisplay) {
            slider.addEventListener('sliderChange', e => {
              if (isRange && e.detail.start !== undefined) {
                valueDisplay.innerHTML = `Range: <strong>${e.detail.start} - ${e.detail.end}</strong>`;
              } else {
                valueDisplay.innerHTML = `Value: <strong>${e.detail}</strong>`;
              }
              window.updateRangeSliderCode();
            });
          }
          window.updateRangeSliderCode();
        }, 100);
      }
    };

    window.showSteppedSlider = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h4>Regular Steps (Step: 10)</h4>
          <p style="color: #6b7280; font-size: 13px;">Values snap to multiples of 10</p>
          <ui-range-slider 
            min="0" 
            max="100" 
            step="10"
            value="50"
            show-marks="true"></ui-range-slider>
        </div>
        <div>
          <h4>T-Shirt Sizes</h4>
          <p style="color: #6b7280; font-size: 13px;">Select a size</p>
          <ui-range-slider 
            id="sizeSlider"
            min="0" 
            max="4"
            value="2"
            show-marks="true"
            color="#10b981"></ui-range-slider>
          <div id="sizeValue" style="margin-top: 12px; padding: 10px; background:var(--accent-blue-soft,#dbeafe); border-radius: 6px; text-align: center;">
            Size: <strong>M</strong>
          </div>
        </div>
        <div>
          <h4>Priority Levels</h4>
          <p style="color: #6b7280; font-size: 13px;">Low, md, High, Critical</p>
          <ui-range-slider 
            id="prioritySlider"
            min="1" 
            max="4"
            value="2"
            show-marks="true"
            color="#ef4444"></ui-range-slider>
          <div id="priorityValue" style="margin-top: 12px; padding: 10px; background:var(--accent-red-soft,#fee2e2); border-radius: 6px; text-align: center;">
            Priority: <strong>md</strong>
          </div>
        </div>
      </div>
    `;
      setTimeout(() => {
        const sizeSlider = document.getElementById('sizeSlider');
        if (sizeSlider) {
          const sizes = ['XS', 'S', 'M', 'L', 'XL'];
          sizeSlider.restrictedValues = [0, 1, 2, 3, 4];
          sizeSlider.marks = [
            { value: 0, label: 'XS' },
            { value: 1, label: 'S' },
            { value: 2, label: 'M' },
            { value: 3, label: 'L' },
            { value: 4, label: 'XL' },
          ];
          sizeSlider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('sizeValue');
            if (valueDiv) {
              valueDiv.innerHTML = `Size: <strong>${sizes[e.detail]}</strong>`;
            }
          });
        }

        const prioritySlider = document.getElementById('prioritySlider');
        if (prioritySlider) {
          const priorities = { 1: 'Low', 2: 'md', 3: 'High', 4: 'Critical' };
          prioritySlider.restrictedValues = [1, 2, 3, 4];
          prioritySlider.marks = [
            { value: 1, label: 'Low' },
            { value: 2, label: 'Med' },
            { value: 3, label: 'High' },
            { value: 4, label: 'Crit' },
          ];
          prioritySlider.addEventListener('sliderChange', e => {
            const valueDiv = document.getElementById('priorityValue');
            if (valueDiv) {
              valueDiv.innerHTML = `Priority: <strong>${priorities[e.detail]}</strong>`;
            }
          });
        }
      }, 100);
    };

    window.showColoredSlider = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h4 style="color: #10b981;">Blue</h4>
          <ui-range-slider value="60" color="#10b981"></ui-range-slider>
        </div>
        <div>
          <h4 style="color: #10b981;">Green</h4>
          <ui-range-slider value="70" color="#10b981"></ui-range-slider>
        </div>
        <div>
          <h4 style="color:var(--accent-yellow,#f59e0b);">Orange</h4>
          <ui-range-slider value="50" color="#f59e0b"></ui-range-slider>
        </div>
        <div>
          <h4 style="color:var(--accent-red,#ef4444);">Red</h4>
          <ui-range-slider value="80" color="#ef4444"></ui-range-slider>
        </div>
        <div>
          <h4 style="color:var(--accent-purple,#8b5cf6);">Purple</h4>
          <ui-range-slider value="45" color="#8b5cf6"></ui-range-slider>
        </div>
        <div>
          <h4 style="color:var(--accent-pink,#ec4899);">Pink</h4>
          <ui-range-slider value="65" color="#ec4899"></ui-range-slider>
        </div>
        <div>
          <h4>Custom Track Color</h4>
          <ui-range-slider value="55" color="#10b981" track-color="#fecaca"></ui-range-slider>
        </div>
      </div>
    `;
    };

    window.showSliderMarks = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 500px; display: flex; flex-direction: column; gap: 30px;">
        <div>
          <h4>Simple Marks</h4>
          <ui-range-slider 
            min="0" 
            max="10"
            step="1"
            value="5"
            show-marks="true"
            color="#10b981"></ui-range-slider>
        </div>
        <div>
          <h4>Marks with Labels</h4>
          <ui-range-slider 
            id="marksLabelSlider"
            min="0" 
            max="100"
            value="50"
            show-marks="true"
            color="#10b981"></ui-range-slider>
        </div>
        <div>
          <h4>Range with Marks</h4>
          <ui-range-slider 
            id="rangeMarksSlider"
            range="true"
            min="0" 
            max="100"
            start-value="30"
            end-value="70"
            show-marks="true"
            color="#f59e0b"></ui-range-slider>
        </div>
        <div style="display: flex; gap: 20px; justify-content: center; padding: 20px;">
          <div>
            <h4 style="text-align: center;">Vertical with Marks</h4>
            <ui-range-slider 
              id="verticalMarksSlider"
              vertical="true"
              min="0" 
              max="10"
              step="2"
              value="6"
              show-marks="true"
              color="#8b5cf6"></ui-range-slider>
          </div>
        </div>
      </div>
    `;
      setTimeout(() => {
        const marksSlider = document.getElementById('marksLabelSlider');
        if (marksSlider) {
          marksSlider.marks = [
            { value: 0, label: 'Start' },
            { value: 25, label: '25%' },
            { value: 50, label: 'Half' },
            { value: 75, label: '75%' },
            { value: 100, label: 'End' },
          ];
        }

        const rangeMarks = document.getElementById('rangeMarksSlider');
        if (rangeMarks) {
          rangeMarks.marks = [
            { value: 0, label: '0' },
            { value: 50, label: '50' },
            { value: 100, label: '100' },
          ];
        }

        const verticalMarks = document.getElementById('verticalMarksSlider');
        if (verticalMarks) {
          verticalMarks.marks = [
            { value: 0, label: 'Min' },
            { value: 5, label: 'Mid' },
            { value: 10, label: 'Max' },
          ];
        }
      }, 100);
    };

    window.showDetailedSlider = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="demo-block reveal-slide-up">
          <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
            <div>
              <h3 style="margin: 0;">👑 Apex Range Substrate</h3>
              <p style="color: #6b7280; font-size: 14px; margin: 4px 0 0 0;">Experience the high-fidelity tactile slider with enhanced gradients, floating speech-bubble tooltips, and tactical track markers.</p>
            </div>
          </div>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 32px;">
            <!-- Detailed Single -->
            <div style="background:var(--bg-primary,white); padding: 32px; border-radius: 28px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 10px 40px rgba(0,0,0,0.04);">
              <h4 style="margin: 0 0 24px 0; color:var(--text-primary,#1e293b); font-size: 18px; font-weight: 800;">Atmospheric Control</h4>
              <ui-range-slider variant="detailed" label="OXYGEN LEVEL" value="82" suffix-text="%" gradient-track="true" show-tooltip="true" tooltip-always-visible="true"></ui-range-slider>
              <div style="margin-top: 40px;">
                <ui-range-slider variant="detailed" label="THERMAL INTENSITY" value="45" suffix-text="°C" color="#f43f5e" gradient-track="true" show-tooltip="true" tooltip-always-visible="true"></ui-range-slider>
              </div>
            </div>

            <!-- Detailed Range -->
            <div style="background:var(--bg-primary,white); padding: 32px; border-radius: 28px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 10px 40px rgba(0,0,0,0.04);">
              <h4 style="margin: 0 0 24px 0; color:var(--text-primary,#1e293b); font-size: 18px; font-weight: 800;">Bandwidth Allocation</h4>
              <ui-range-slider variant="detailed" range="true" label="DATA PIPELINE" start-value="250" end-value="750" min="0" max="1000" suffix-text="MB" gradient-track="true" show-tooltip="true" tooltip-always-visible="true" show-marks="true" marks='[{"value":0},{"value":250},{"value":500},{"value":750},{"value":1000}]'></ui-range-slider>
            </div>

            <!-- Glass Slider -->
              <div style="background:var(--bg-primary,white); padding: 32px; border-radius: 28px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 10px 40px rgba(0,0,0,0.04);">
              <h4 style="margin: 0 0 24px 0; color:var(--text-primary,#1e293b); font-size: 18px; font-weight: 800;">Cinematic Glass</h4>
              <ui-range-slider variant="glass" label="NEBULA DENSITY" value="65" suffix-text="μ" show-tooltip="true" tooltip-always-visible="true" size="md"></ui-range-slider>
              <p style="margin-top: 20px; font-size: 12px; color:var(--text-secondary,#64748b);">Frost-grade backdrop filter with atomic saturation.</p>
            </div>
          </div>
        </div>

        <style>
          @keyframes pulse {
            0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.4); }
            70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(244, 63, 94, 0); }
            100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); }
          }
        </style>
      `;
    };

    window.showAdvancedFeaturesSlider = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div style="max-width: 500px; margin: 0 auto;">
          <h4>Advanced Features Demo</h4>
          <p style="color:#6b7280;">Dynamic step, configurable range, Indian number formatting, and emits value changes.</p>
          <ui-range-slider id="advSlider" min="0" max="1000000" value="50000" input-sync></ui-range-slider>
          <div style="margin: 12px 0;">
            <label>Min: <ui-input id="advMin" type="number" value="0" style="width:80px;"></label>
            <label>Max: <ui-input id="advMax" type="number" value="1000000" style="width:100px;"></label>
            <label>Step: <ui-input id="advStep" type="number" value="1000" style="width:80px;"></label>
          </div>
          <div id="advSliderValue" style="padding: 10px; background: #f0f9ff; border-radius: 6px; text-align: center;">
            Value: <strong>₹50,000</strong>
          </div>
        </div>
      `;
      setTimeout(() => {
        const slider = document.getElementById('advSlider');
        const min = document.getElementById('advMin');
        const max = document.getElementById('advMax');
        const step = document.getElementById('advStep');
        const valueDiv = document.getElementById('advSliderValue');

        // Indian number formatting
        function formatIndianNumber(num) {
          return Number(num).toLocaleString('en-IN');
        }

        // Dynamic step logic
        slider.addEventListener('sliderChange', e => {
          let val = e.detail;
          // Example: step increases for higher values
          if (val < 100000) slider.step = 1000;
          else if (val < 500000) slider.step = 5000;
          else slider.step = 10000;
          valueDiv.innerHTML = `Value: <strong>₹${formatIndianNumber(val)}</strong>`;
        });

        // Configurable range
        [min, max, step].forEach(input => {
          input.addEventListener('input', () => {
            slider.min = min.value;
            slider.max = max.value;
            slider.step = step.value;
          });
        });
      }, 100);
    };

    window.showMinMaxDynamicStepSlider = function () {
      const container = document.getElementById('sliderDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div style="max-width: 550px; margin: 0 auto;">
          <h4 style="font-weight: 800; color:var(--text-primary,#1e293b);">Dual Range with Dynamic Step</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 24px;">Adjust both boundaries. Step size adapts as handles cross threshold regions.</p>
          
          <ui-range-slider 
            id="minMaxSlider" 
            range="true"
            min="0" 
            max="100" 
            start-value="10" 
            end-value="90"
            input-sync="true" 
            show-min-max="true"
            variant="success"
          ></ui-range-slider>

          <div id="minMaxSliderValue" style="padding: 14px; background:var(--accent-green-soft,#f0fdf4); border: 1px solid #dcfce7; border-radius: 12px; text-align: center; margin-top: 20px;">
            Range: <span style="font-weight: 800; color: var(--accent-green,#166534);">10 – 90</span>
          </div>
        </div>
      `;
      setTimeout(() => {
        const slider = document.getElementById('minMaxSlider');
        const valueDiv = document.getElementById('minMaxSliderValue');

        slider.addEventListener('sliderChange', e => {
          const { start, end } = e.detail;

          // Apply dynamic step to both handles or component logic
          // For simplicity, we use the average or dominant handle position
          const avg = (start + end) / 2;

          if (avg < 25) slider.step = 1;
          else if (avg < 50) slider.step = 5;
          else if (avg < 75) slider.step = 10;
          else slider.step = 25;

          valueDiv.innerHTML = `Range: <span style="font-weight: 800; color: var(--accent-green,#166534);">${start} – ${end}</span>`;
        });
      }, 100);
    };

    showBasicSlider();
  }, 100);
}
