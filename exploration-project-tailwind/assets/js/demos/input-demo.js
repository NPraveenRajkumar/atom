// Input Component Demo
export function initInputDemo() {
  const section = document.getElementById('input');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Advanced input component with variants, icons, validation states, and masking support.</p>
    
    <div class="demo-controls-wrapper">
      <div class="demo-grid-wrapper">
        <ui-button id="btnInputPlayground" label="Playground" icon="layout" variant="outline"></ui-button>
        <ui-button id="btnInputVariants" label="Variants" icon="layers" variant="outline"></ui-button>
        <ui-button id="btnInputTextArea" label="TextArea" icon="file-text" variant="outline"></ui-button>
        <ui-button id="btnInputIcons" label="Icons & Extras" icon="plus-circle" variant="outline"></ui-button>
        <ui-button id="btnInputValidation" label="Validation" icon="check-square" variant="outline"></ui-button>
        <ui-button id="btnInputRange" label="Range Slider" icon="sliders" variant="outline"></ui-button>
        <ui-button id="btnInputColorPicker" label="Color Picker" icon="palette" variant="outline"></ui-button>
        <ui-button id="btnInputMasking" label="Input Masking" icon="mask" variant="outline"></ui-button>
        <ui-button id="btnInputFileUpload" label="File Upload" icon="folder" variant="outline"></ui-button>
        <ui-button id="btnInputCurrencies" label="Currencies" icon="dollar-sign" variant="outline"></ui-button>
        <ui-button id="btnInputMasterTier" label="Master Tier" icon="star" variant="outline"></ui-button>
        <ui-button id="btnInputPair" label="Dual/Pair" icon="users" variant="outline"></ui-button>
        <ui-button id="btnInputSizes" label="Sizes" icon="maximize" variant="outline"></ui-button>
        <ui-button id="btnInputColors" label="Colors" icon="aperture" variant="outline"></ui-button>
        <ui-button id="btnInputWidths" label="Widths" icon="move-horizontal" variant="outline"></ui-button>
        <ui-button id="btnInputCustom" label="Custom" icon="edit" variant="outline"></ui-button>
        <ui-button id="btnInputBlocks" label="Blocks" icon="grid" variant="outline"></ui-button>
        <ui-button id="btnInputAddonClicks" label="Addon Clicks" icon="mouse-pointer-click" variant="outline"></ui-button>
        <ui-button id="btnInputZenith" label="Zenith Features" icon="milky-way" variant="outline"></ui-button>
        <ui-button id="btnInputEnterprise" label="Enterprise" icon="landmark" variant="outline"></ui-button>
      </div>
    </div>

    <div id="inputDemoContainer" style="margin-top: 20px;"></div>
  `;

  function showGroupedInputsDemo() {
    const container = document.getElementById('inputDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Grouped Channel Inputs</h3>
        <p style="font-size:13px;color:#6b7280;margin-bottom:16px;">
          Numeric input fields grouped in a single row, with per-channel validation. This pattern is ideal for RGB, RGBA, HSL, HSLA, or similar multi-part values.<br>
          Each field validates its own range and highlights errors inline.
        </p>
        <div style="display:flex;flex-direction:column;gap:32px;max-width:520px;">
          <div>
            <div style="font-size:12px;color: var(--label-subtitle-color);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">RGB Example</div>
            <div style="display:flex;align-items:center;gap:10px;">
              <ui-input id="rgb-r" type="number" min="0" max="255" value="16" label="R" size="md" style="width:70px;"></ui-input>
              <ui-input id="rgb-g" type="number" min="0" max="255" value="185" label="G" size="md" style="width:70px;"></ui-input>
              <ui-input id="rgb-b" type="number" min="0" max="255" value="129" label="B" size="md" style="width:70px;"></ui-input>
              <span id="rgb-preview" style="display:inline-block;width:36px;height:36px;border-radius:8px;border:1.5px solid #e5e7eb;margin-left:16px;"></span>
            </div>
            <div id="rgb-error" style="color:var(--accent-red,#ef4444);font-size:12px;margin-top:6px;display:none;"></div>
          </div>
          <div>
            <div style="font-size:12px;color: var(--label-subtitle-color);font-weight:600;text-transform:uppercase;letter-spacing:0.5px;margin-bottom:8px;">RGBA Example</div>
            <div style="display:flex;align-items:center;gap:10px;">
              <ui-input id="rgba-r" type="number" min="0" max="255" value="139" label="R" size="md" style="width:70px;"></ui-input>
              <ui-input id="rgba-g" type="number" min="0" max="255" value="92" label="G" size="md" style="width:70px;"></ui-input>
              <ui-input id="rgba-b" type="number" min="0" max="255" value="246" label="B" size="md" style="width:70px;"></ui-input>
              <ui-input id="rgba-a" type="number" min="0" max="1" step="0.01" value="0.7" label="A" size="md" style="width:70px;"></ui-input>
              <span id="rgba-preview" style="display:inline-block;width:36px;height:36px;border-radius:8px;border:1.5px solid #e5e7eb;margin-left:16px;"></span>
            </div>
            <div id="rgba-error" style="color:var(--accent-red,#ef4444);font-size:12px;margin-top:6px;display:none;"></div>
          </div>
        </div>
      </div>
    `;

    // RGB logic
    const rgbInputs = ['rgb-r', 'rgb-g', 'rgb-b'].map(id => document.getElementById(id));
    const rgbPreview = document.getElementById('rgb-preview');
    const rgbError = document.getElementById('rgb-error');
    function updateRgb() {
      const r = parseInt(rgbInputs[0].value, 10);
      const g = parseInt(rgbInputs[1].value, 10);
      const b = parseInt(rgbInputs[2].value, 10);
      let valid = true;
      let error = '';
      [r, g, b].forEach((v, i) => {
        if (isNaN(v) || v < 0 || v > 255) {
          valid = false;
          error = 'Each channel must be 0-255.';
        }
      });
      if (valid) {
        rgbPreview.style.background = `rgb(${r},${g},${b})`;
        rgbError.style.display = 'none';
      } else {
        rgbPreview.style.background = '#fff';
        rgbError.textContent = error;
        rgbError.style.display = 'block';
      }
    }
    rgbInputs.forEach(inp => inp.addEventListener('inputChange', updateRgb));
    updateRgb();

    // RGBA logic
    const rgbaInputs = ['rgba-r', 'rgba-g', 'rgba-b', 'rgba-a'].map(id => document.getElementById(id));
    const rgbaPreview = document.getElementById('rgba-preview');
    const rgbaError = document.getElementById('rgba-error');
    function updateRgba() {
      const r = parseInt(rgbaInputs[0].value, 10);
      const g = parseInt(rgbaInputs[1].value, 10);
      const b = parseInt(rgbaInputs[2].value, 10);
      const a = parseFloat(rgbaInputs[3].value);
      let valid = true;
      let error = '';
      [r, g, b].forEach((v, i) => {
        if (isNaN(v) || v < 0 || v > 255) {
          valid = false;
          error = 'RGB channels must be 0-255.';
        }
      });
      if (isNaN(a) || a < 0 || a > 1) {
        valid = false;
        error = 'Alpha must be 0-1.';
      }
      if (valid) {
        rgbaPreview.style.background = `rgba(${r},${g},${b},${a})`;
        rgbaError.style.display = 'none';
      } else {
        rgbaPreview.style.background = '#fff';
        rgbaError.textContent = error;
        rgbaError.style.display = 'block';
      }
    }
    rgbaInputs.forEach(inp => inp.addEventListener('inputChange', updateRgba));
    updateRgba();
  }

  function showInputWidthsDemo() {
    const container = document.getElementById('inputDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>📐 Custom Width Control</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">The <code>width</code> prop allows you to precisely control the input footprint using standard CSS units (px, %, etc.).</p>
        
        <div style="display: flex; flex-direction: column; gap: 32px; padding: 20px; background: rgba(0,0,0,0.02); border-radius: 16px;">
          <div>
            <div style="margin-bottom: 12px; font-weight: 600; color: #475569;">Precision Pixel Widths</div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-input width="100px" label="100px Width" placeholder="Fixed"></ui-input>
              <ui-input width="300px" label="300px Width" placeholder="Medium fixed footprint"></ui-input>
              <ui-input width="500px" label="500px Width" placeholder="Large fixed footprint for complex data"></ui-input>
            </div>
          </div>

          <div style="border-top:1px solid var(--border-default,#e2e8f0); paddingTop: 24px;">
            <div style="margin-bottom: 12px; font-weight: 600; color: #475569;">Responsive Percentage Widths</div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-input width="25%" label="25% Width" placeholder="Small"></ui-input>
              <ui-input width="50%" label="50% Width" placeholder="Half container"></ui-input>
              <ui-input width="100%" label="100% Width (Global default)" placeholder="Full span"></ui-input>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  window.showInputTypes = function () {
    const container = document.getElementById('inputDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>🚀 All Supported Input Types</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">A comprehensive list of all HTML5 input types supported by the <code>ui-input</code> component with premium styling and automatic icons.</p>
        
        <h4 style="margin-top: 32px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Standard Text Inputs</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 16px;">
          <ui-input type="text" label="Text" placeholder="Basic text input" size="md"></ui-input>
          <ui-input type="password" label="Password" placeholder="Enter password" show-password-toggle="true" size="md"></ui-input>
          <ui-input type="email" label="Email" placeholder="user@example.com" size="md"></ui-input>
          <ui-input type="tel" label="Tel" placeholder="(555) 555-5555" size="md"></ui-input>
          <ui-input type="url" label="URL" placeholder="https://example.com" size="md"></ui-input>
          <ui-input type="search" label="Search" placeholder="Press Enter to search..." show-clear="true" size="md"></ui-input>
        </div>

        <h4 style="margin-top: 48px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Numbers & Range</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 16px;">
          <ui-input type="number" label="Number" placeholder="Enter value" size="md"></ui-input>
          <ui-input type="number" label="Number with Steppers" show-steppers="true" value="10" size="md"></ui-input>
          <ui-input type="range" label="Range" min="0" max="100" value="45" size="md"></ui-input>
        </div>

        <h4 style="margin-top: 48px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Date & Time Selection</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 16px;">
          <ui-input type="date" label="Date" size="md"></ui-input>
          <ui-input type="time" label="Time" size="md"></ui-input>
          <ui-input type="datetime-local" label="DateTime Local" size="md"></ui-input>
          <ui-input type="month" label="Month" size="md"></ui-input>
          <ui-input type="week" label="Week" size="md"></ui-input>
        </div>

        <h4 style="margin-top: 48px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Specialized Inputs & Advanced Controllers</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 16px;">
          <ui-input type="color" label="Standard Color Picker (Native)" value="#10b981" size="md"></ui-input>
          <ui-input type="file" label="File Upload" placeholder="Choose files..." size="md"></ui-input>
          <div style="background:var(--bg-primary,white); padding: 20px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0); grid-row: span 2;">
            <ui-color-controller label="Professional Color Studio" value="#8b5cf6" size="md"></ui-color-controller>
            <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 16px; line-height: 1.4;">Advanced side-by-side editing for HSL, RGB, and HEX formats with real-time synchronization.</p>
          </div>
          <ui-input type="file" label="Multiple Files" multiple="true" placeholder="Choose multiple..." size="md"></ui-input>
        </div>

        <h4 style="margin-top: 48px; border-bottom: 1px solid #eee; padding-bottom: 8px;">Attributes & Validation Constraints</h4>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 16px;">
          <ui-input label="MaxLength (10)" max-length="10" placeholder="Max 10 chars" show-counter="true" max-length-indicator="10" size="md"></ui-input>
          <ui-input label="MinLength (5)" min-length="5" placeholder="Min 5 chars" min-length-indicator="5" size="md"></ui-input>
          <ui-input label="Pattern (Numbers only)" pattern="[0-9]*" placeholder="Numbers only (Regex: [0-9]*)" size="md"></ui-input>
          <ui-input type="number" label="Numeric Constraints" min="0" max="100" step="10" value="50" show-steppers="true" helper-text="Min: 0, Max: 100, Step: 10" size="md"></ui-input>
          <ui-input multiline="true" label="Multi-line (Rows: 4)" rows="4" placeholder="Standard textarea height" size="md"></ui-input>
          <ui-input multiline="true" label="Auto-Resize (MaxRows: 6)" auto-resize="true" max-rows="6" placeholder="Type to see it grow..." size="md"></ui-input>
        </div>
      </div>
    `;
  };

  function showInteractiveInput() {
    const container = document.getElementById('inputDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block premium-playground" style="background: var(--bg-secondary, #f1f7ff); border: 1px solid var(--border-default, #d0e1ff); border-radius: 20px; padding: 24px;">
        <h3 style="color: var(--label-color); display: flex; align-items: center; gap: 8px; margin-top: 0; font-size: 1.1rem; opacity: 0.8;">
          <ui-icon library="lucide" name="layout-template"></ui-icon>
          Live Preview Context
        </h3>
        <div class="playground-workspace" style="display: flex; height: 85vh; min-height: 700px; background:var(--bg-primary,white); border-radius: 24px; border:1px solid var(--border-default,#e2e8f0); overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.12); margin-top: 32px; position: relative;">
          <!-- Custom Scrollbar Style -->
          <style>
            .playground-sidebar-scroll::-webkit-scrollbar { width: 5px; }
            .playground-sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
            .playground-sidebar-scroll::-webkit-scrollbar-thumb { background: rgba(0,0,0,0.1); border-radius: 10px; }
            .playground-sidebar-scroll::-webkit-scrollbar-thumb:hover { background: rgba(0,0,0,0.2); }
            .setting-card { background:var(--bg-primary,white); border-radius: 16px; padding: 20px; border: 1px solid rgba(208,225,255,0.3); transition: transform 0.2s, box-shadow 0.2s; box-shadow: 0 2px 10px rgba(0,0,0,0.02); }
            .setting-card:hover { transform: translateY(-2px); box-shadow: 0 8px 25px rgba(0,0,0,0.05); border-color: rgba(139,92,246,0.3); }
          </style>

          <!-- Sidebar: Navigation & Settings Groups -->
          <div class="playground-sidebar" style="width: 50%; min-width: 480px; display: flex; flex-direction: column; border-right: 1px solid rgba(0,0,0,0.05);">
            <div style="padding: 28px; border-bottom: 1px solid rgba(0,0,0,0.05); flex-shrink: 0;">
              <h3 style="margin: 0; font-size: 1.2rem; background: linear-gradient(to right, #1e293b, #64748b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: flex; align-items: center; gap: 12px; font-weight: 800; letter-spacing: -0.02em;">
                <ui-icon name="tool" library="lucide" color="primary"></ui-icon>
                Component Workbench
              </h3>
            </div>
            
            <div class="playground-sidebar-scroll" style="flex: 1; overflow-y: auto; padding: 28px; display: flex; flex-direction: column; gap: 28px;">
              <!-- Group Card: Identity -->
              <div class="setting-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--bg-tertiary,#f1f5f9); display: flex; align-items: center; justify-content: center;"><ui-icon name="database" size="16px" color="primary"></ui-icon></div>
                  <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #475569; font-weight: 700;">Data & Identity</h4>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <ui-dropdown id="inpType" label="Core Type" value="text" options='[
                    {"label": "Standard Text", "value": "text"}, {"label": "Secure Password", "value": "password"}, {"label": "Email Address", "value": "email"},
                    {"label": "Numeric Value", "value": "number"}, {"label": "Search Node", "value": "search"}, {"label": "Date Primary", "value": "date"},
                    {"label": "OTP Segment", "value": "otp"}, {"label": "PIN Master", "value": "pin"}, {"label": "Color Master", "value": "color"},
                    {"label": "Telephone Master", "value": "tel"}, {"label": "URL Master", "value": "url"}
                  ]' size="md" variant="outlined"></ui-dropdown>
                  <ui-input id="inpLabel" label="Visual Label" value="Username" size="md" variant="outlined"></ui-input>
                  <ui-input id="inpPlaceholder" label="Placeholder" value="Enter input..." size="md" variant="outlined"></ui-input>
                  <ui-input id="inpValue" label="Current Value" value="" size="md" variant="outlined"></ui-input>
                  <ui-input id="inpHelperText" label="Helping Hand (Text)" value="Keep it unique" size="md" variant="outlined"></ui-input>
                </div>
              </div>

              <!-- Group Card: Validation & Logic -->
              <div class="setting-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: #fff1f2; display: flex; align-items: center; justify-content: center;"><ui-icon name="shield-check" size="16px" color="danger"></ui-icon></div>
                  <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #be123c; font-weight: 700;">Validation & Logic</h4>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <ui-dropdown id="inpValidation" label="Validation State" value="none" options='[
                    {"label": "Neutral (None)", "value": "none"}, {"label": "Success State", "value": "success"}, {"label": "Error State", "value": "error"},
                    {"label": "Warning State", "value": "warning"}, {"label": "Info State", "value": "info"}
                  ]' size="md" variant="outlined"></ui-dropdown>
                  <ui-input id="inpErrorText" label="Error Messenger" value="Field is required" size="md" variant="outlined"></ui-input>
                   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <ui-checkbox id="inpRequired" label="Mandatory" size="md"></ui-checkbox>
                    <ui-checkbox id="inpDisabled" label="Deactivated" size="md"></ui-checkbox>
                    <ui-checkbox id="inpReadonly" label="Read Only" size="md"></ui-checkbox>
                    <ui-checkbox id="inpAutofocus" label="Auto Focus" size="md"></ui-checkbox>
                  </div>
                </div>
              </div>

              <!-- Group Card: Atmosphere -->
              <div class="setting-card" style="border-left: 4px solid #8b5cf6;">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--accent-purple-soft,#f5f3ff); display: flex; align-items: center; justify-content: center;"><ui-icon name="sparkles" size="16px" color="primary"></ui-icon></div>
                  <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color:var(--accent-purple,#7c3aed); font-weight: 700;">Zenith Atmosphere</h4>
                </div>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                  <ui-checkbox id="inpGradient" label="Atmospheric Shader" size="md"></ui-checkbox>
                  <ui-checkbox id="inpSheen" label="Glass Sheen" size="md"></ui-checkbox>
                  <ui-checkbox id="inpProgress" label="Density Ring" size="md"></ui-checkbox>
                  <ui-checkbox id="inpDirty" label="Live Tracking" size="md"></ui-checkbox>
                </div>
              </div>

              <!-- Group Card: Aesthetics -->
              <div class="setting-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--bg-tertiary,#f1f5f9); display: flex; align-items: center; justify-content: center;"><ui-icon name="palette" size="16px" color="primary"></ui-icon></div>
                  <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #475569; font-weight: 700;">Visual Synthesis</h4>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <ui-dropdown id="inpVariant" label="Render Engine" value="outlined" options='[
                    {"label": "Outlined Modern", "value": "outlined"}, {"label": "Frosted Glass", "value": "glass"}, {"label": "Depth Shadow", "value": "raised"},
                    {"label": "Subtle Soft", "value": "soft"}, {"label": "Minimalist", "value": "borderless"}, {"label": "Plain", "value": "plain"}
                  ]' size="md" variant="outlined"></ui-dropdown>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <ui-dropdown id="inpSize" label="Size Hub" value="md" options='[
                      {"label": "XXXS", "value": "xxxs"},
                      {"label": "XXS", "value": "xxs"},
                      {"label": "XS", "value": "xs"},
                      {"label": "Sm", "value": "sm"},
                      {"label": "Md", "value": "md"},
                      {"label": "Lg", "value": "lg"},
                      {"label": "XL", "value": "xl"},
                      {"label": "XXL", "value": "xxl"},
                      {"label": "XXXL", "value": "xxxl"}
                    ]' size="md" variant="outlined"></ui-dropdown>
                    <ui-dropdown id="inpDensity" label="Density" value="standard" options='[
                      {"label": "Cozy", "value": "cozy"}, {"label": "Compact", "value": "compact"}, {"label": "Standard", "value": "standard"}
                    ]' size="md" variant="outlined"></ui-dropdown>
                  </div>
                  <ui-dropdown id="inpStatus" label="Presence State" value="none" options='[
                    {"label": "None", "value": "none"}, {"label": "Online Master", "value": "online"}, {"label": "Offline Ghost", "value": "offline"},
                    {"label": "Typing Logic", "value": "typing"}, {"label": "Away Mode", "value": "away"}
                  ]' size="md" variant="outlined"></ui-dropdown>
                  <ui-checkbox id="inpShowTypeIcon" label="Show Type Icon (Hash/Mail/etc.)" checked size="md"></ui-checkbox>
                  <ui-dropdown id="inpColor" label="Color Core" value="primary" options='[
                    {"label": "Electric Violet", "value": "primary"}, {"label": "Neon Success", "value": "success"}, {"label": "Deep Danger", "value": "danger"},
                    {"label": "Royal Info", "value": "info"}, {"label": "Solar Warning", "value": "warning"}
                  ]' size="md" variant="outlined"></ui-dropdown>
                  <ui-input id="inpBadge" label="Overlay Badge" value="" size="md" variant="outlined" placeholder="e.g. New"></ui-input>
                  <ui-dropdown id="inpTransform" label="Text Engine" value="none" options='[
                    {"label": "No Transform", "value": "none"}, {"label": "Pascal Case", "value": "pascal"}, {"label": "Force Upper", "value": "uppercase"},
                    {"label": "Lower Master", "value": "lowercase"}, {"label": "Capitalize All", "value": "capitalize"}
                  ]' size="md" variant="outlined"></ui-dropdown>
                  <ui-checkbox id="inpFullWidth" label="Sovereign Width (100%)" size="md"></ui-checkbox>
                </div>
              </div>

              <!-- Group Card: Features -->
              <div class="setting-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--accent-pink-soft,#fdf2f8); display: flex; align-items: center; justify-content: center;"><ui-icon name="zap" size="16px" color="danger"></ui-icon></div>
                  <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color:var(--accent-pink,#be185d); font-weight: 700;">Operational Logic</h4>
                </div>
                  <ui-checkbox id="inpFloating" label="Floating Title" size="md"></ui-checkbox>
                   <ui-checkbox id="inpAlwaysFloated" label="Always Floated" size="md"></ui-checkbox>
                  <ui-checkbox id="inpVoice" label="Voice Node" size="md"></ui-checkbox>
                  <ui-checkbox id="inpClear" label="Quick Flush" size="md"></ui-checkbox>
                  <ui-checkbox id="inpReveal" label="Safe Reveal" size="md"></ui-checkbox>
                  <ui-checkbox id="inpStrength" label="Security Meter" size="md"></ui-checkbox>
                  <ui-checkbox id="inpCopy" label="Clone Master (Copy)" size="md"></ui-checkbox>
                   <ui-checkbox id="inpShake" label="Seismic Error (Shake)" size="md"></ui-checkbox>
                  <ui-checkbox id="inpRtl" label="Middle East Layout (RTL)" size="md"></ui-checkbox>
                  <ui-checkbox id="inpIconOnly" label="Icon Only (Hide Label & Text)" size="md"></ui-checkbox>
                </div>
              </div>

               <!-- Group Card: Multi-line Hub -->
              <div class="setting-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--accent-green-soft,#f0fdf4); display: flex; align-items: center; justify-content: center;"><ui-icon name="align-left" size="16px" color="success"></ui-icon></div>
                  <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--accent-green,#166534); font-weight: 700;">Multi-line Hub</h4>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <ui-checkbox id="inpMultiline" label="Enable Multi-line" size="md"></ui-checkbox>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <ui-input id="inpRows" label="Init Rows" value="3" type="number" size="md" variant="outlined"></ui-input>
                    <ui-input id="inpMaxRows" label="Max Limit" value="10" type="number" size="md" variant="outlined"></ui-input>
                  </div>
                  <ui-checkbox id="inpAutoResize" label="Sentient Growth (Auto-resize)" size="md"></ui-checkbox>
                </div>
              </div>

              <!-- Group Card: Adornments -->
              <div class="setting-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background: #f0f9ff; display: flex; align-items: center; justify-content: center;"><ui-icon name="plus-circle" size="16px" color="info"></ui-icon></div>
                  <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #0369a1; font-weight: 700;">Adornments</h4>
                </div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <ui-input id="inpPrefixIcon" label="Hero Icon" value="user" size="md" variant="outlined"></ui-input>
                    <ui-input id="inpSuffixIcon" label="Action Icon" value="" size="md" variant="outlined"></ui-input>
                  </div>
                   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <ui-input id="inpPrefixText" label="Prefix Text" value="" size="md" variant="outlined"></ui-input>
                    <ui-input id="inpSuffixText" label="Suffix Text" value="" size="md" variant="outlined"></ui-input>
                  </div>
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <ui-dropdown id="inpPrefixColor" label="Prefix Color" value="none" options='[
                      {"label": "None", "value": "none"}, {"label": "Primary", "value": "primary"}, {"label": "Success", "value": "success"},
                      {"label": "Danger", "value": "danger"}, {"label": "Warning", "value": "warning"}, {"label": "Info", "value": "info"}
                    ]' size="md" variant="outlined"></ui-dropdown>
                    <ui-dropdown id="inpSuffixColor" label="Suffix Color" value="none" options='[
                      {"label": "None", "value": "none"}, {"label": "Primary", "value": "primary"}, {"label": "Success", "value": "success"},
                      {"label": "Danger", "value": "danger"}, {"label": "Warning", "value": "warning"}, {"label": "Info", "value": "info"}
                    ]' size="md" variant="outlined"></ui-dropdown>
                  </div>
                  <ui-input id="inpShortcut" label="Global Shortcut" value="Cmd + K" size="md" variant="outlined"></ui-input>
                  <ui-input id="inpTooltip" label="Knowledge Tip (Tooltip)" value="" size="md" variant="outlined"></ui-input>
                </div>
              </div>

               <!-- Group Card: Constraints -->
              <div class="setting-card">
                <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                  <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--accent-orange-soft,#fff7ed); display: flex; align-items: center; justify-content: center;"><ui-icon name="lock" size="16px" color="warning"></ui-icon></div>
                  <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: #9a3412; font-weight: 700;">Limiter & Constraints</h4>
                </div>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <ui-input id="inpMaxLength" label="Max Chars" value="" type="number" size="md" variant="outlined"></ui-input>
                    <ui-checkbox id="inpCounter" label="Show Counter" style="margin-top: 24px;"></ui-checkbox>
                  </div>
                   <ui-input id="inpPattern" label="Regex Pattern" value="" size="md" variant="outlined" placeholder="e.g. [A-Z]*"></ui-input>
                </div>
              </div>
            </div>
          </div>

          <!-- Main: Canvas & Action Hub -->
          <div class="playground-main" style="flex-grow: 1; display: flex; flex-direction: column; background: var(--bg-tertiary, rgba(255,255,255,0.4));">
            <!-- Canvas Toolbar -->
            <div style="padding: 20px 32px; border-bottom: 1px solid rgba(0,0,0,0.05); display: flex; justify-content: space-between; align-items: center; background: var(--bg-primary, rgba(255,255,255,0.9));">
              <div style="display: flex; gap: 12px; align-items: center;">
                <div style="display: flex; padding: 4px; background:var(--bg-tertiary,#f1f5f9); border-radius: 8px; gap: 4px; align-items: center;">
                  <ui-button id="btnCanvasBgWhite" title="Light Cloud" style="--ui-button-bg: #fff; width: 28px; height: 28px; min-width: 28px; padding: 0; border-radius: 6px; border: 1px solid rgba(0,0,0,0.05);"></ui-button>
                  <ui-button id="btnCanvasBgDark" title="Deep Slate" style="--ui-button-bg: #0f172a; width: 28px; height: 28px; min-width: 28px; padding: 0; border-radius: 6px; border: none;"></ui-button>
                  <ui-button id="btnCanvasBgGrid" title="Blueprint Grid" icon="grid" variant="outlined" color="secondary" style="width: 28px; height: 28px; min-width: 28px; padding: 0; border-radius: 6px; --ui-button-icon-size: 14px;"></ui-button>
                </div>
                <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color:var(--text-secondary,#64748b); font-weight: 700; margin-left: 12px;">Visual Laboratory</span>
              </div>
              <div style="display: flex; gap: 8px;">
                <div style="padding: 6px 12px; background: #e0f2fe; color: #0369a1; border-radius: 100px; font-size: 10px; font-weight: 700;">VERSION 2.0.4 - ZENITH</div>
              </div>
            </div>

            <!-- The Master Canvas -->
            <div id="playgroundCanvas" style="flex-grow: 1; display: flex; align-items: center; justify-content: center; position: relative; transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); background: #fff; overflow: hidden;">
               <div id="inpInteractivePreviewContent" style="width: 100%; max-width: 480px; filter: drop-shadow(0 30px 60px rgba(0,0,0,0.1)); transform: scale(1.1); transition: all 0.6s cubic-bezier(0.16, 1, 0.3, 1);"></div>
            </div>

            <!-- Action Hub: Markup & Instrumentation -->
            <div style="height: 320px; border-top: 1px solid rgba(0,0,0,0.05); display: grid; grid-template-columns: 1fr 1fr; background: var(--bg-primary, #fff);">
               <div style="padding: 24px; border-right: 1px solid rgba(0,0,0,0.05); display: flex; flex-direction: column;">
                 <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
                   <h5 style="margin: 0; font-size: 11px; color:var(--text-secondary,#64748b); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">⚡ Implementation Blueprint</h5>
                   <ui-button id="btnCopyMarkup" label="Grab Markup" size="xxs" variant="outlined" color="primary" icon="copy"></ui-button>
                 </div>
                 <div style="flex-grow: 1; background: var(--bg-secondary, #f8fafc); border-radius: 16px; padding: 20px; border: 1px solid var(--border-default); position: relative; overflow: auto;">
                    <ui-code-preview id="markupDisplay" language="html" code="&lt;ui-input&gt;&lt;/ui-input&gt;"></ui-code-preview>
                 </div>
               </div>
               <div style="padding: 24px; display: flex; flex-direction: column;">
                 <h5 style="margin: 0 0 16px 0; font-size: 11px; color:var(--text-secondary,#64748b); font-weight: 800; text-transform: uppercase; letter-spacing: 0.05em;">📜 Atmospheric Telemetry</h5>
                 <div id="playgroundLog" style="flex-grow: 1; background:var(--bg-secondary,#f8fafc); border:1px solid var(--border-default,#eef2f6); border-radius: 16px; padding: 16px; font-family: 'JetBrains Mono', monospace; font-size: 11px; color: #475569; overflow-y: auto; display: flex; flex-direction: column; gap: 8px;">
                   <div style="text-align: center; color: #cbd5e1; margin-top: 30px;">Instrumenting component events...</div>
                 </div>
               </div>
            </div>

            <!-- Validation Strategy -->
            <div class="master-card" style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); grid-column: 1 / -1;">
               <h4 style="margin-top:0; color:var(--accent-yellow,#f59e0b);">🛡️ Validation Strategy</h4>
               <p style="font-size: 14px; opacity: 0.7; margin-bottom: 24px;">Control when validation occurs: real-time or deferred after interaction.</p>
               <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px;">
                  <ui-input 
                    label="Real-time Validation (onInput)" 
                    type="email"
                    required="true"
                    validation-trigger="onInput"
                    placeholder="Validates as you type..."
                    helper-text="Triggered on Input"
                  ></ui-input>
                  <ui-input 
                    label="Deferred Validation (onBlur)" 
                    type="email"
                    required="true"
                    validation-trigger="onBlur"
                    placeholder="Validates when you leave..."
                    helper-text="Triggered on Blur"
                  ></ui-input>
               </div>
            </div>
          </div>
        </div>
      </div>
    `;

    const setCanvasBg = function (bg) {
      const canvas = document.getElementById('playgroundCanvas');
      if (!canvas) return;
      if (bg === 'white') canvas.style.background = '#fff';
      else if (bg === 'grid') canvas.style.background = 'radial-gradient(#e5e7eb 1px, transparent 1px) 0 0 / 20px 20px, #fff';
      else canvas.style.background = bg;
    };

    const copyMarkup = function () {
      const code = document.getElementById('markupDisplay')?.textContent;
      if (code) {
        navigator.clipboard.writeText(code);
        logAction('CODE COPIED', 'Markup added to clipboard');
      }
    };

    setTimeout(() => {
      document.getElementById('btnCanvasBgWhite')?.addEventListener('click', () => setCanvasBg('white'));
      document.getElementById('btnCanvasBgDark')?.addEventListener('click', () => setCanvasBg('#0f172a'));
      document.getElementById('btnCanvasBgGrid')?.addEventListener('click', () => setCanvasBg('grid'));
      document.getElementById('btnCopyMarkup')?.addEventListener('click', copyMarkup);

      const allControls = [
        'inpType',
        'inpVariant',
        'inpColor',
        'inpSize',
        'inpStatus',
        'inpTransform',
        'inpDensity',
        'inpShowTypeIcon',
        'inpFloating',
        'inpAlwaysFloated',
        'inpClear',
        'inpVoice',
        'inpDirty',
        'inpGradient',
        'inpSheen',
        'inpProgress',
        'inpReveal',
        'inpStrength',
        'inpCopy',
        'inpShake',
        'inpRtl',
        'inpLabel',
        'inpPlaceholder',
        'inpValue',
        'inpHelperText',
        'inpErrorText',
        'inpBadge',
        'inpPrefixIcon',
        'inpSuffixIcon',
        'inpPrefixColor',
        'inpSuffixColor',
        'inpPrefixText',
        'inpSuffixText',
        'inpShortcut',
        'inpTooltip',
        'inpValidation',
        'inpRequired',
        'inpDisabled',
        'inpReadonly',
        'inpAutofocus',
        'inpFullWidth',
        'inpMultiline',
        'inpRows',
        'inpMaxRows',
        'inpAutoResize',
        'inpMaxLength',
        'inpCounter',
        'inpPattern',
        'inpIconOnly',
      ];

      allControls.forEach(id => {
        const el = document.getElementById(id);
        if (!el) return;

        // Listen to all possible interaction events
        ['valueChange', 'checkboxChange', 'inputChange', 'numberChange', 'picklistChange'].forEach(evt => {
          el.addEventListener(evt, () => updateInteractiveInput());
        });
      });

      updateInteractiveInput();
    }, 200);
  }

  const updateInteractiveInput = function () {
    const getVal = id => document.getElementById(id)?.value || '';
    const getChecked = id => !!document.getElementById(id)?.checked;

    const type = getVal('inpType');
    const label = getVal('inpLabel');
    const placeholder = getVal('inpPlaceholder');
    const value = getVal('inpValue');
    const helperText = getVal('inpHelperText');
    const variant = getVal('inpVariant');
    const size = getVal('inpSize');
    const density = getVal('inpDensity');
    const color = getVal('inpColor');
    const showTypeIcon = document.getElementById('inpShowTypeIcon')?.checked;
    const badge = getVal('inpBadge');
    const transform = getVal('inpTransform');
    const validation = getVal('inpValidation');
    const errorText = getVal('inpErrorText');

    const prefixIcon = getVal('inpPrefixIcon');
    const suffixIcon = getVal('inpSuffixIcon');
    const prefixColor = getVal('inpPrefixColor');
    const suffixColor = getVal('inpSuffixColor');
    const prefixText = getVal('inpPrefixText');
    const suffixText = getVal('inpSuffixText');
    const shortcut = getVal('inpShortcut');
    const tooltip = getVal('inpTooltip');

    const floating = getChecked('inpFloating');
    const alwaysFloated = getChecked('inpAlwaysFloated');
    const clearable = getChecked('inpClear');
    const voice = getChecked('inpVoice');
    const dirty = getChecked('inpDirty');
    const gradient = getChecked('inpGradient');
    const sheen = getChecked('inpSheen');
    const progress = getChecked('inpProgress');
    const reveal = getChecked('inpReveal');
    const strength = getChecked('inpStrength');
    const copy = getChecked('inpCopy');
    const shake = getChecked('inpShake');
    const rtl = getChecked('inpRtl');
    const fullWidth = getChecked('inpFullWidth');

    const required = getChecked('inpRequired');
    const disabled = getChecked('inpDisabled');
    const readonly = getChecked('inpReadonly');
    const autofocus = getChecked('inpAutofocus');

    const multiline = getChecked('inpMultiline');
    const rows = parseInt(getVal('inpRows')) || 3;
    const maxRows = parseInt(getVal('inpMaxRows')) || 10;
    const autoResize = getChecked('inpAutoResize');

    const maxLength = parseInt(getVal('inpMaxLength')) || undefined;
    const counter = getChecked('inpCounter');
    const pattern = getVal('inpPattern');
    const iconOnly = getChecked('inpIconOnly');

    const preview = document.getElementById('inpInteractivePreviewContent');
    if (!preview) return;

    preview.innerHTML = '';
    const component = document.createElement('ui-input');

    // Core Props
    component.type = type;
    component.label = iconOnly ? '' : label;
    component.placeholder = iconOnly ? '' : placeholder;
    component.value = value;
    component.helperText = helperText;
    component.variant = variant;
    component.size = size;
    component.density = density;
    component.color = color;
    component.showTypeIcon = showTypeIcon;
    component.badge = badge;
    component.textTransform = transform;
    component.validationState = validation;
    component.errorText = errorText;

    // Affixes & Decorations
    if (prefixIcon) component.prefixIcon = prefixIcon;
    if (suffixIcon) component.suffixIcon = suffixIcon;
    if (prefixColor && prefixColor !== 'none') component.prefixColor = prefixColor;
    if (suffixColor && suffixColor !== 'none') component.suffixColor = suffixColor;
    if (prefixText) component.prefixText = prefixText;
    if (suffixText) component.suffixText = suffixText;
    if (shortcut) component.shortcutHint = shortcut;
    if (tooltip) component.tooltip = tooltip;

    // Boolean Logic
    component.floatingLabel = floating;
    component.alwaysFloated = alwaysFloated;
    component.showClear = clearable;
    component.voiceEnabled = voice;
    component.dirtyTracking = dirty;
    component.gradientBorder = gradient;
    component.backdropSheen = sheen;
    component.showProgressCircle = progress;
    component.revealOnHold = reveal;
    component.showPasswordStrength = strength;
    component.showCopy = copy;
    component.shakeOnError = shake;
    component.rtl = rtl;
    component.fullWidth = fullWidth;

    // States
    component.required = required;
    component.disabled = disabled;
    component.readonly = readonly;
    component.autofocus = autofocus;

    // Multi-line
    component.multiline = multiline;
    component.rows = rows;
    component.maxRows = maxRows;
    component.autoResize = autoResize;

    // Constraints
    if (maxLength) component.maxLength = maxLength;
    component.showCounter = counter;
    if (pattern) component.pattern = pattern;

    if (type === 'otp' || type === 'pin') component.otpLength = 6;

    // Add listeners for Action Log
    ['inputChange', 'search', 'focus', 'blur', 'clear', 'copy'].forEach(evt => {
      component.addEventListener(evt, e => logAction(evt, e.detail));
    });

    preview.appendChild(component);

    // Update Markup Display
    const markup = `<ui-input
  type="${type}"
  ${!iconOnly ? `label="${label}"` : ''}
  variant="${variant}"
  color="${color}"
  size="${size}"
  density="${density}"
  ${value ? `value="${value}"` : ''}
  ${placeholder ? `placeholder="${placeholder}"` : ''}
  ${helperText ? `helper-text="${helperText}"` : ''}
  ${prefixIcon ? `prefix-icon="${prefixIcon}"` : ''}
  ${suffixIcon ? `suffix-icon="${suffixIcon}"` : ''}
  ${prefixColor && prefixColor !== 'none' ? `prefix-color="${prefixColor}"` : ''}
  ${suffixColor && suffixColor !== 'none' ? `suffix-color="${suffixColor}"` : ''}
  ${prefixText ? `prefix-text="${prefixText}"` : ''}
  ${suffixText ? `suffix-text="${suffixText}"` : ''}
  ${shortcut ? `shortcut-hint="${shortcut}"` : ''}
  ${floating ? 'floating-label' : ''}
  ${fullWidth ? 'full-width' : ''}
  ${multiline ? `multiline rows="${rows}"` : ''}
  ${disabled ? 'disabled' : ''}
  ${required ? 'required' : ''}
  ${gradient ? 'gradient-border' : ''}
  ${sheen ? 'backdrop-sheen' : ''}
  ${rtl ? 'rtl' : ''}
  ${validation !== 'none' ? `validation-state="${validation}"` : ''}
  ${errorText && validation === 'error' ? `error-text="${errorText}"` : ''}
></ui-input>`;

    const markupEl = document.getElementById('markupDisplay');
    if (markupEl) {
      markupEl.htmlCode = markup.trim();
    }
  };

  window.copyMarkup = function () {
    const code = document.getElementById('markupDisplay')?.textContent;
    if (code) {
      navigator.clipboard.writeText(code);
      logAction('CODE COPIED', 'Markup added to clipboard');
    }
  };

  const logAction = function (type, detail) {
    const log = document.getElementById('playgroundLog');
    if (!log) return;
    const entry = document.createElement('div');
    entry.style.padding = '4px 8px';
    entry.style.borderRadius = '4px';
    entry.style.background = '#fff';
    entry.style.border = '1px solid #eef2f6';
    entry.innerHTML = `<span style="color: #10b981; font-weight: 700;">${type.toUpperCase()}</span>: <span style="color:var(--text-primary,#1e293b);">${JSON.stringify(detail) || 'N/A'}</span> <span style="float: right; opacity: 0.5;">${new Date().toLocaleTimeString()}</span>`;
    log.appendChild(entry);
    if (log.children.length > 20) log.removeChild(log.firstChild);
  };

  window.setCanvasBg = function (bg) {
    const canvas = document.getElementById('playgroundCanvas');
    if (!canvas) return;
    if (bg === 'white') canvas.style.background = '#fff';
    else if (bg === 'grid') canvas.style.background = 'radial-gradient(#e5e7eb 1px, transparent 1px) 0 0 / 20px 20px, #fff';
    else canvas.style.background = bg;
  };

  function showInputVariants() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Input Variants & Automatic Icons</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">Variants for different design systems and automatic context-aware icons.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <ui-input label="Outlined (Default)" variant="outlined" placeholder="Outlined helper text"></ui-input>
          <ui-input label="Filled" variant="filled" placeholder="Filled helper text"></ui-input>
          <ui-input label="Underlined" variant="underlined" placeholder="Underlined helper text"></ui-input>
          <ui-input label="Soft" variant="outline" placeholder="Soft helper text"></ui-input>
          <ui-input label="Glass (Elite)" variant="glass" placeholder="Glassmorphism effects" prefix-icon="layers"></ui-input>
          <ui-input label="Raised (Elite)" variant="raised" placeholder="Neomorphic depth" prefix-icon="trending-up"></ui-input>
          <ui-input label="Borderless (Elite)" variant="borderless" placeholder="Minimalist approach" prefix-icon="minus"></ui-input>
          <ui-input label="Plain (New)" variant="plain" placeholder="Zero-clutter variant"></ui-input>
          <ui-input label="Floating Label" floating-label variant="outlined"></ui-input>
          <ui-input label="Success Theme" color="success" value="Valid input" variant="outline" prefix-icon="check-circle"></ui-input>
          <ui-input label="Warning Theme" color="warning" value="Warning state" variant="outline" prefix-icon="alert-triangle"></ui-input>
          <ui-input label="Danger Theme" color="danger" value="Error state" variant="outline" prefix-icon="x-circle"></ui-input>
          <ui-input label="Email Type (Auto Icon)" type="email"></ui-input>
          <ui-input label="Tel Type (Auto Icon)" type="tel"></ui-input>
          <ui-input label="Date Type (Auto Icon)" type="date"></ui-input>
          <ui-input label="Floating + Prefix" floating-label variant="outlined" prefix-icon="mail" placeholder="user@email.com"></ui-input>
          <ui-input label="Floating + Suffix" floating-label variant="outlined" suffix-icon="search"></ui-input>
          <ui-input label="Floating + Both" floating-label variant="outlined" prefix-icon="lock" suffix-icon="eye" type="password"></ui-input>
        </div>

        <h3 style="margin-top: 48px;">Smart Masking & Placeholders</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">Automatic formatting and hinted placeholders for structured data.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <ui-input label="Phone Number" mask="phone"></ui-input>
          <ui-input label="Credit Card" mask="credit-card"></ui-input>
          <ui-input label="Currency (USD)" mask="currency"></ui-input>
          <ui-input label="Date Mask" mask="date"></ui-input>
          <ui-input label="SSN" mask="ssn"></ui-input>
        </div>
      </div>
    `;
  }

  function showInputIcons() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Icons & Adornments</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <ui-input label="Prefix Icon" prefix-icon="mail" placeholder="Email"></ui-input>
          <ui-input label="Suffix Icon" suffix-icon="search" placeholder="Search..."></ui-input>
          
          <ui-input label="Custom Prefix Slot" placeholder="Using SVG inside slot">
            <div slot="prefix-icon" style="color:var(--accent-purple,#8b5cf6); display: flex; align-items: center; padding-right: 8px;">
               <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
            </div>
          </ui-input>

          <ui-input type="number" label="Number without default Icon" prefix-icon="none" value="45"></ui-input>

          <ui-input label="Prefix Text" prefix-text="https://" placeholder="domain.com"></ui-input>
          <ui-input label="Suffix Text" suffix-text=".com" placeholder="mywebsite"></ui-input>
          <ui-input label="Password" type="password" prefix-icon="lock" show-password-toggle placeholder="Password"></ui-input>
          <ui-input label="Clearable" show-clear placeholder="Type to see clear button" value="Clear me"></ui-input>
          <ui-input label="Search Event" type="search" placeholder="Type & hit Enter..." id="demoSearchInput"></ui-input>
        </div>
      </div>
    `;

    setTimeout(() => {
      const searchInp = document.getElementById('demoSearchInput');
      if (searchInp) {
        searchInp.addEventListener('search', e => {
          alert('Search triggered for: ' + e.detail);
        });
      }
    }, 100);
  }

  function showInputValidation() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Dynamic Validation</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">Trigger validation states, messages, and shake animations programmatically.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Live Email Validation</h4>
            <ui-input 
              id="dynamicEmailInput"
              label="Email Address" 
              placeholder="type something..."
              prefix-icon="mail"
            ></ui-input>
            <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-top: 12px;">State updates as you type (minimum 5 chars + @).</p>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Manual Trigger Controls</h4>
            <ui-input 
              id="manualValInput"
              label="Test Field" 
              value="Control me"
            ></ui-input>
            <div style="display: flex; gap: 10px; margin-top: 16px; flex-wrap: wrap;">
              <ui-button id="btnSetValError" label="Set Error" variant="danger" size="md"></ui-button>
              <ui-button id="btnSetValWarning" label="Set Warning" variant="warning" size="md"></ui-button>
              <ui-button id="btnSetValInfo" label="Set Info" variant="info" size="md"></ui-button>
              <ui-button id="btnSetValSuccess" label="Set Success" variant="success" size="md"></ui-button>
              <ui-button id="btnTriggerShake" label="Shake" variant="secondary" size="md" icon="vibrate"></ui-button>
              <ui-button id="btnResetVal" label="Reset" variant="primary" size="md"></ui-button>
            </div>
          </div>
        </div>
      </div>
    `;

    const setValState = state => {
      const el = document.getElementById('manualValInput');
      if (!el) return;
      el.validationState = state;
      if (state === 'error') el.errorText = 'An error occurred!';
      if (state === 'warning') el.warningText = 'Please review this field.';
      if (state === 'info') el.infoText = 'This field is required for verification.';
      if (state === 'success') el.successText = 'Saved successfully!';
    };

    const triggerShake = () => {
      const el = document.getElementById('manualValInput');
      if (!el) return;
      el.shake = true;
      setTimeout(() => (el.shake = false), 500);
    };

    // 1. Hook into the dynamic email input
    const emailInp = document.getElementById('dynamicEmailInput');
    if (emailInp) {
      emailInp.addEventListener('inputChange', e => {
        const val = e.detail;
        if (!val) {
          emailInp.validationState = 'none';
        } else if (val.length < 5 || !val.includes('@')) {
          emailInp.validationState = 'error';
          emailInp.errorText = 'Invalid email format';
        } else {
          emailInp.validationState = 'success';
          emailInp.successText = 'Email looks good!';
        }
      });
    }

    // 2. Setup manual controls
    setTimeout(() => {
      document.getElementById('btnSetValError')?.addEventListener('click', () => setValState('error'));
      document.getElementById('btnSetValWarning')?.addEventListener('click', () => setValState('warning'));
      document.getElementById('btnSetValInfo')?.addEventListener('click', () => setValState('info'));
      document.getElementById('btnSetValSuccess')?.addEventListener('click', () => setValState('success'));
      document.getElementById('btnTriggerShake')?.addEventListener('click', triggerShake);
      document.getElementById('btnResetVal')?.addEventListener('click', () => setValState('none'));
    }, 100);
  }

  function showInputRange() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Range Sliders</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">The standard input component now supports premium range slider styling with dynamic track filling.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
          <div class="demo-card-inner" style="padding: 20px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Default Outlined</h4>
            <ui-input type="range" label="Volume Control" min="0" max="100" value="65"></ui-input>
            <pre style="background:var(--bg-secondary,#f8fafc); padding: 12px; border-radius: 8px; font-size: 11px; margin-top: 16px;"><code>&lt;ui-input type="range" label="..."/&gt;</code></pre>
          </div>

          <div class="demo-card-inner" style="padding: 20px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Soft Variant (Green Theme)</h4>
            <ui-input type="range" label="Brightness" variant="outline" min="0" max="100" value="40" prefix-icon="sun"></ui-input>
            <pre style="background:var(--bg-secondary,#f8fafc); padding: 12px; border-radius: 8px; font-size: 11px; margin-top: 16px;"><code>&lt;ui-input type="range" variant="outline"/&gt;</code></pre>
          </div>

          <div class="demo-card-inner" style="padding: 20px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Large Sizing</h4>
            <ui-input type="range" label="Opacity" size="xl" min="0" max="1" step="0.01" value="0.85"></ui-input>
          </div>

          <div class="demo-card-inner" style="padding: 20px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Validation & Disabled</h4>
            <div style="display: flex; flex-direction: column; gap: 20px;">
              <ui-input type="range" label="Required Level" validation-state="error" error-text="Level too low" value="10"></ui-input>
              <ui-input type="range" label="Locked Setting" disabled value="50"></ui-input>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function showColorPicker() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Premium Color Picker</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">The color input features a live swatch preview and supports direct hex value editing.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Theme Color</h4>
            <ui-input type="color" label="Primary Color" value="#3DCD58"></ui-input>
            <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-top: 12px;">Click the swatch to open picker or type directly. Invalid hex codes trigger an error state automatically.</p>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Variants & Sizes</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <ui-input type="color" label="Background" variant="outline" value="#f1f5f9"></ui-input>
              <ui-input type="color" label="Accent" size="md" variant="underlined" value="#8b5cf6"></ui-input>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function showFileUpload() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <h3>Styled File Upload</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">Premium file upload experience with a custom 'Browse' button and selected filename display.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Single File</h4>
            <ui-input type="file" label="Profile Picture" placeholder="Choose an image..." accept="image/*"></ui-input>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Multiple Files</h4>
            <ui-input type="file" label="Documents" multiple="true" placeholder="Upload multiple files..."></ui-input>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>With Icons & Variants</h4>
            <ui-input type="file" label="Project Files" variant="filled" prefix-icon="file-text"></ui-input>
          </div>
        </div>
      </div>
    `;
  }

  function showInputMasking() {
    const container = document.getElementById('inputDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block animate-in" style="animation: slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1);">
        <div style="margin-bottom: 32px; text-align: center;">
          <h2 style="font-size: 2rem; margin-bottom: 8px; background: linear-gradient(135deg, #f43f5e, #fb7185); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🎭 Input Masking</h2>
          <p style="opacity: 0.7; font-size: 1.1rem;">Powerful automatic formatting for specialized data types with predictive placeholders.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 40px;">
          <!-- Phone Mask -->
          <div style="background:var(--bg-primary,white); padding: 32px; border-radius: 24px; border: 1px solid #fee2e2; box-shadow: 0 10px 25px -5px rgba(244, 63, 94, 0.05); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
              <div style="width: 44px; height: 44px; background: #fff1f2; border-radius: 14px; color: #f43f5e; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px rgba(244, 63, 94, 0.1);">
                <ui-icon library="lucide" name="phone" style="font-size: 20px;"></ui-icon>
              </div>
              <h4 style="margin: 0; font-size: 1.25rem; font-weight: 700; color:var(--text-primary,#1e293b);">Contact Information</h4>
            </div>
            <ui-input label="Cellular Phone" mask="phone" prefix-icon="phone" helper-text="Auto-formatting as you type" full-width="true"></ui-input>
          </div>

          <!-- Credit Card Mask -->
          <div style="background:var(--bg-primary,white); padding: 32px; border-radius: 24px; border: 1px solid #fee2e2; box-shadow: 0 10px 25px -5px rgba(244, 63, 94, 0.05); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
              <div style="width: 44px; height: 44px; background: #fff1f2; border-radius: 14px; color: #f43f5e; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px rgba(244, 63, 94, 0.1);">
                <ui-icon library="lucide" name="credit-card" style="font-size: 20px;"></ui-icon>
              </div>
              <h4 style="margin: 0; font-size: 1.25rem; font-weight: 700; color:var(--text-primary,#1e293b);">Secure Payment</h4>
            </div>
            <ui-input label="Card Number" mask="credit-card" prefix-icon="credit-card" placeholder="XXXX XXXX XXXX XXXX" full-width="true"></ui-input>
          </div>

          <!-- Currency Mask -->
          <div style="background:var(--bg-primary,white); padding: 32px; border-radius: 24px; border: 1px solid #fee2e2; box-shadow: 0 10px 25px -5px rgba(244, 63, 94, 0.05); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
              <div style="width: 44px; height: 44px; background: #fff1f2; border-radius: 14px; color: #f43f5e; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px rgba(244, 63, 94, 0.1);">
                <ui-icon library="lucide" name="banknote" style="font-size: 20px;"></ui-icon>
              </div>
              <h4 style="margin: 0; font-size: 1.25rem; font-weight: 700; color:var(--text-primary,#1e293b);">Transactional</h4>
            </div>
            <ui-input label="Funding Amount" mask="currency" prefix-icon="dollar-sign" full-width="true"></ui-input>
          </div>

          <!-- Date & Security -->
          <div style="background:var(--bg-primary,white); padding: 32px; border-radius: 24px; border: 1px solid #fee2e2; box-shadow: 0 10px 25px -5px rgba(244, 63, 94, 0.05); display: flex; flex-direction: column; grid-column: span 2;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 24px;">
              <div style="width: 44px; height: 44px; background: #fff1f2; border-radius: 14px; color: #f43f5e; display: flex; align-items: center; justify-content: center; box-shadow: inset 0 2px 4px rgba(244, 63, 94, 0.1);">
                <ui-icon library="lucide" name="shield-check" style="font-size: 20px;"></ui-icon>
              </div>
              <h4 style="margin: 0; font-size: 1.25rem; font-weight: 700; color:var(--text-primary,#1e293b);">Security & Date Modules</h4>
            </div>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px;">
               <ui-input label="Birth Date" mask="date" prefix-icon="calendar" full-width="true"></ui-input>
               <ui-input type="password" value="secret123" label="Protection Code (Hold eye)" reveal-on-hold="true" show-password-strength="true" full-width="true"></ui-input>
            </div>
          </div>

          <!-- SSN & Status -->
          <div style="background:var(--bg-primary,white); padding: 32px; border-radius: 24px; border: 1px solid #fee2e2; box-shadow: 0 10px 25px -5px rgba(244, 63, 94, 0.05); display: flex; flex-direction: column;">
            <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
               <ui-icon library="lucide" name="fingerprint" style="color: #f43f5e;"></ui-icon>
               <h4 style="margin: 0; font-size: 1.1rem; color:var(--text-primary,#1e293b);">Compliance</h4>
            </div>
            <ui-input label="Social Security" mask="ssn" type="password" show-password-toggle="true" full-width="true"></ui-input>
            <div style="margin-top: 16px;">
              <ui-input label="Tracking State" value="Unsaved changes" badge aria-label="Unsaved indicator" color="warning" full-width="true"></ui-input>
            </div>
          </div>
        </div>

        <div style="margin-top: 64px; padding: 48px; background: var(--bg-secondary, #fff1f2); border-radius: 32px; border: 1px solid var(--border-default, #fee2e2); box-shadow: 0 20px 50px -20px rgba(0,0,0,0.05);">
          <h4 style="margin-top: 0; margin-bottom: 32px; color: #e11d48; display: flex; align-items: center; gap: 12px; font-size: 1.5rem;">
            <ui-icon library="lucide" name="zap" style="color:var(--accent-yellow,#f59e0b);"></ui-icon>
            Advanced Architectural Logic
          </h4>
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 48px;">
            <div>
              <strong style="color:var(--text-primary,#1e293b); display: block; margin-bottom: 12px; font-size: 1.1rem;">Dynamic Hinting</strong>
              <span style="font-size: 15px; color:var(--text-secondary,#64748b); line-height: 1.6;">The component automatically injects context-aware placeholders (e.g. XXX-XXX-XXXX) if no custom label is provided.</span>
            </div>
            <div>
              <strong style="color:var(--text-primary,#1e293b); display: block; margin-bottom: 12px; font-size: 1.1rem;">Self-Healing Separators</strong>
              <span style="font-size: 15px; color:var(--text-secondary,#64748b); line-height: 1.6;">Intelligent separator injection ("-", "/", "$") happens in real-time without disrupting the user's cursor position.</span>
            </div>
            <div>
              <strong style="color:var(--text-primary,#1e293b); display: block; margin-bottom: 12px; font-size: 1.1rem;">Financial Precision</strong>
              <span style="font-size: 15px; color:var(--text-secondary,#64748b); line-height: 1.6;">Currency masking utilizes the browser's native <code>Intl</code> API for bulletproof localization and grouping.</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function showCurrencyDemo() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <h3>💵 Premium Currency Type</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">The <code>type="currency"</code> property automatically handles prefix symbols and financial masking.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>US Dollar (Default)</h4>
            <ui-input type="currency" label="Unit Price" value="4500"></ui-input>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Euro (EUR)</h4>
            <ui-input type="currency" currency="EUR" label="EU Subtotal" variant="outlined" value="12550"></ui-input>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>British Pound (GBP)</h4>
            <ui-input type="currency" currency="GBP" label="London Branch" variant="outline" value="380.50"></ui-input>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#eef2f6); border-radius: 12px; background:var(--bg-primary,white);">
            <h4>Japanese Yen (JPY)</h4>
            <ui-input type="currency" currency="JPY" label="Tokyo Branch" variant="filled" value="1500000"></ui-input>
          </div>
        </div>
      </div>
    `;
  }

  function showMasterTierFeatures() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block master-tier-block" style="background: var(--bg-secondary, #f1f5f9); padding: 32px; border-radius: 24px;">
        <h2 style="font-size: 2.2rem; margin-bottom: 8px; background: linear-gradient(135deg, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🌟 Master Tier Showcase</h2>
        <p style="opacity: 0.7; font-size: 1.1rem; margin-bottom: 40px;">Experience the next generation of cinematic input controls with advanced functional modules.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
           <!-- OTP & Security -->
           <div class="master-card" style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);">
              <h4 style="margin-top:0; color:var(--accent-purple,#8b5cf6);">🔐 Security Modules</h4>
              <p style="font-size: 14px; opacity: 0.7; margin-bottom: 24px;">Segmented verification fields with elite focus transitions.</p>
              <ui-input type="otp" otp-length="6" label="Verification Code" helper-text="Check your email for the 6-digit code"></ui-input>
              <div style="margin-top: 24px;">
                <ui-input type="pin" otp-length="4" label="Security PIN" helper-text="Enter your 4-digit PIN"></ui-input>
              </div>
           </div>

           <!-- Voice & Status -->
           <div class="master-card" style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);">
              <h4 style="margin-top:0; color: #10b981;">🎙️ Smart Context</h4>
              <p style="font-size: 14px; opacity: 0.7; margin-bottom: 24px;">Integrated AI dictation and real-time connectivity status.</p>
              <ui-input 
                id="voiceMessengerInput"
                label="Voice Messenger" 
                voice-enabled="true" 
                placeholder="Click the mic to speak..."
              ></ui-input>
              <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 8px; margin-bottom: 0;">
                🎙️ Click the mic → icon switches to <b>mic-off</b> while listening. Click again to stop.
              </p>
              <div style="margin-top: 24px;">
                <ui-input 
                  label="Dynamic State" 
                  status-indicator="typing" 
                  placeholder="Someone is typing..."
                ></ui-input>
              </div>
           </div>

           <!-- Atmospheric Shaders -->
           <div class="master-card" style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);">
              <h4 style="margin-top:0; color:var(--accent-pink,#ec4899);">🌈 Atmospheric Shaders</h4>
              <p style="font-size: 14px; opacity: 0.7; margin-bottom: 24px;">Advanced CSS shaders for elite design systems.</p>
              <ui-input 
                label="Gradient Horizon" 
                gradient-border="true" 
                variant="outlined"
                placeholder="Animated focus boundary"
              ></ui-input>
              <div style="margin-top: 24px;">
                <ui-input 
                  label="Deep Sheen" 
                  backdrop-sheen="true" 
                  variant="glass"
                  placeholder="Interactive depth field"
                ></ui-input>
              </div>
           </div>

           <!-- Feedback & Velocity -->
           <div class="master-card" style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05);">
              <h4 style="margin-top:0; color:var(--accent-yellow,#f59e0b);">⚡ Velocity Feedback</h4>
              <p style="font-size: 14px; opacity: 0.7; margin-bottom: 24px;">Low-friction progress indicators and unsaved change detection.</p>
              <ui-input 
                label="Content Velocity" 
                show-progress-circle="true" 
                max-length="50"
                value="Tracking character density..."
                helper-text="Watch the SVG ring expand"
              ></ui-input>
              <div style="margin-top: 24px;">
                <ui-input 
                  label="Dirty Tracking" 
                  dirty-tracking="true" 
                  default-value="Original State"
                  value="Modified state"
                  helper-text="Amber dot indicates unsaved changes"
                ></ui-input>
              </div>
           </div>

           <!-- AI Integration (Elite) -->
           <div class="master-card" style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); grid-column: 1 / -1;">
              <h4 style="margin-top:0; color: #10b981;">🧠 AI Integration (Ghost Text)</h4>
              <p style="font-size: 14px; opacity: 0.7; margin-bottom: 24px;">Experience 'God-tier' predictive typing with cinematic ghost text overlays.</p>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 48px;">
                 <ui-input 
                   label="AI Smart Search" 
                   value="how to " 
                   ghost-text="how to build elite stencil components" 
                   prefix-icon="sparkles"
                   variant="glass"
                   helper-text="Ghost text shows AI completion"
                 ></ui-input>
                 <ui-input 
                   label="Auto-complete" 
                   value="praveen@stenc" 
                   ghost-text="praveen@stencil-elite.ai" 
                   prefix-icon="mail"
                   helper-text="Tab to accept (visual only in demo)"
                 ></ui-input>
              </div>
           </div>
        </div>
      </div>
    `;
  }

  function showInputPairDemo() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block animate-in">
        <h3>👥 Paired Inputs (Range/Group)</h3>
        <p style="margin-bottom: 24px; opacity: 0.8;">Seamlessly connect multiple inputs for range selection or multi-part data entry.</p>
        
        <div style="display: flex; flex-direction: column; gap: 40px;">
          <div class="demo-card-inner" style="padding: 24px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); max-width: 600px;">
            <h4 style="margin-top:0;">Price Filter (Connected)</h4>
            <ui-input-pair 
              type="currency" 
              label-left="Minimum" 
              label-right="Maximum" 
              placeholder-left="0.00" 
              placeholder-right="No limit"
              gap="0"
              size="md"
            ></ui-input-pair>
          </div>

          <div class="demo-card-inner" style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); max-width: 600px;">
            <h4 style="margin-top:0;">Profile Info (With Gap)</h4>
            <ui-input-pair 
              label-left="First Name" 
              label-right="Last Name" 
              placeholder-left="John" 
              placeholder-right="Doe"
              gap="12px"
              size="md"
            ></ui-input-pair>
          </div>
          
          <div class="demo-card-inner" style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); max-width: 600px;">
             <h4 style="margin-top:0;">Shared Type (Number Range)</h4>
             <ui-input-pair 
               type="number" 
               label-left="From" 
               label-right="To" 
               gap="0" 
               variant="outline"
               size="md"
             ></ui-input-pair>
          </div>
        </div>
      </div>
    `;
  }

  function showColoredDecorators() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2.2rem; background: linear-gradient(135deg, #10b981, #059669); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">🎨 Chromatic Block Decorators</h2>
          <p style="opacity: 0.7; font-size: 1.1rem; margin-bottom: 0;">Professional 'Boxed' decorators with semantic coloring for high-impact context.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
          <!-- Security Case -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color: #10b981; margin-bottom: 20px;">🔒 Security & Verification</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <ui-input label="SECURE DOMAIN" prefix-text="https://" prefix-color="success" placeholder="example.com"></ui-input>
              <ui-input label="ACCESS TOKEN" prefix-icon="shield-check" prefix-color="primary" placeholder="Enter secure token..."></ui-input>
            </div>
          </div>

          <!-- Action Case -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color: #10b981; margin-bottom: 20px;">🚀 Contextual Actions</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <ui-input label="GLOBAL SEARCH" suffix-icon="search" suffix-color="primary" suffix-clickable="true" placeholder="Search entire cloud..."></ui-input>
              <ui-input label="SYSTEM CLEAR" suffix-text="RESET" suffix-color="danger" suffix-clickable="true" placeholder="Warning: Irreversible action"></ui-input>
            </div>
          </div>

          <!-- Utility Case -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color:var(--text-secondary,#64748b); margin-bottom: 20px;">🛠️ Engineering Utility</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <ui-input label="SUBDOMAIN" suffix-text=".dream.io" suffix-color="secondary" placeholder="myspace"></ui-input>
              <ui-input label="CURRENCY" prefix-text="USD" prefix-color="info" type="number" placeholder="0.00"></ui-input>
            </div>
          </div>

          <!-- Status Case -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color:var(--accent-yellow,#f59e0b); margin-bottom: 20px;">⚠️ Notification Cues</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <ui-input label="CRITICAL FIELD" suffix-icon="alert-triangle" suffix-color="danger" placeholder="Required for compliance"></ui-input>
              <ui-input label="HINTED FIELD" prefix-icon="info" prefix-color="warning" placeholder="Check tooltip first"></ui-input>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function showColorVariants() {
    const container = document.getElementById('inputDemoContainer');
    const colors = [
      { id: 'primary', label: 'Primary (Blue)', icon: 'zap' },
      { id: 'success', label: 'Success (Green)', icon: 'zap' },
      { id: 'danger', label: 'Danger (Red)', icon: 'alert-circle' },
      { id: 'warning', label: 'Warning (Amber)', icon: 'alert-triangle' },
      { id: 'info', label: 'Info (Sky)', icon: 'info' },
      { id: 'error', label: 'Error (Status)', icon: 'x-circle' },
      { id: '#8b5cf6', label: 'Custom Hex (#8B5CF6)', icon: 'sparkles' },
      { id: 'secondary', label: 'Secondary (Slate)', icon: 'box' },
    ];

    container.innerHTML = `
      <div class="demo-block">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2.2rem; background: linear-gradient(135deg, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">🌈 Semantic Color Palette</h2>
          <p style="opacity: 0.7; font-size: 1.1rem; margin-bottom: 0;">Professional color contexts for semantic data entry.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
          ${colors
            .map(
              color => `
            <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px;">
                 <div style="width: 10px; height: 10px; background: var(--ui-input-focus); border-radius: 50%; opacity: 0.8; box-shadow: 0 0 10px var(--ui-input-focus);"></div>
                 <h4 style="margin: 0; color:var(--text-primary,#1e293b);">${color.label}</h4>
              </div>
              
              <div style="display: flex; flex-direction: column; gap: 20px;">
                <ui-input color="${color.id}" variant="outlined" label="Outlined ${color.id}" prefix-icon="${color.icon}" placeholder="Focus to see focus ring color"></ui-input>
                <ui-input color="${color.id}" variant="outline"  label="Soft ${color.id}" value="Soft background variant" prefix-icon="${color.icon}"></ui-input>
              </div>
            </div>
          `,
            )
            .join('')}
        </div>
      </div>
    `;
  }

  const colors = ['primary', 'success', 'danger', 'warning', 'info', 'secondary'];
  const sizes = [
    { id: 'xxxs', label: 'XXX Small (24px)', icon: 'zap' },
    { id: 'xxs', label: 'XX Small (28px)', icon: 'bolt' },
    { id: 'xs', label: 'Extra Small (32px)', icon: 'target' },
    { id: 'sm', label: 'Small (36px)', icon: 'zap' },
    { id: 'md', label: 'Medium (42px)', icon: 'box' },
    { id: 'lg', label: 'Large (48px)', icon: 'layout' },
    { id: 'xl', label: 'Extra Large (56px)', icon: 'maximize-2' },
    { id: 'xxl', label: 'XX Large (64px)', icon: 'star' },
    { id: 'xxxl', label: 'XXX Large (80px)', icon: 'crown' },
  ];

  function showInputSizes() {
    const container = document.getElementById('inputDemoContainer');

    container.innerHTML = `
      <div class="demo-block">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2.2rem; background: linear-gradient(135deg, #475569, #1e293b); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">📐 Geometric & Chromatic Spectrum</h2>
          <p style="opacity: 0.7; font-size: 1.1rem; margin-bottom: 0;">Experience the precise geometric management across all theme variants.</p>
        </div>

        <div style="margin-bottom: 48px;">
          <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; border-left: 4px solid #f59e0b; padding-left: 16px;">
             <ui-icon library="lucide" name="sliders" style="opacity: 0.6; height: 18px;"></ui-icon>
             <h4 style="margin: 0; color:var(--text-primary,#1e293b); font-size: 1.1rem;">Custom Granular Widths</h4>
          </div>
          <div style="display: flex; gap: 24px; background: rgba(248, 250, 252, 0.5); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0); flex-wrap: wrap;">
            <div>
               <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">Tiny (Width: 60px)</span>
               <ui-input type="number" size="md" width="60px" placeholder="Age"></ui-input>
            </div>
            <div>
               <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">Small (Width: 100px)</span>
               <ui-input size="md" width="100px" placeholder="CVV"></ui-input>
            </div>
            <div>
               <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">Medium (Width: 250px)</span>
               <ui-input width="250px" placeholder="First Name" size="md"></ui-input>
            </div>
            <div style="flex-grow: 1;">
               <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">Full Width (flex-grow: 1)</span>
               <ui-input full-width="true" placeholder="Street Address" size="md"></ui-input>
            </div>
          </div>
        </div>
        
        <div style="display: flex; flex-direction: column; gap: 48px;">
          ${sizes
            .map(
              size => `
            <div>
              <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 20px; border-left: 4px solid #10b981; padding-left: 16px;">
                 <ui-icon library="lucide" name="${size.icon}" style="opacity: 0.6; height: 18px;"></ui-icon>
                 <h4 style="margin: 0; color:var(--text-primary,#1e293b); font-size: 1.1rem;">${size.label}</h4>
              </div>
              
              <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px; background: rgba(248, 250, 252, 0.5); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0);">
                ${colors
                  .map(
                    color => `
                  <div>
                    <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">${color}</span>
                    <ui-input size="${size.id}" color="${color}" placeholder="${color} state" prefix-icon="feather"></ui-input>
                  </div>
                `,
                  )
                  .join('')}
              </div>
            </div>
          `,
            )
            .join('')}
        </div>

        <div style="margin-top: 48px; background:var(--accent-yellow-soft,#fffbeb); border: 1px solid #fde68a; border-radius: 16px; padding: 24px;">
           <h4 style="color:var(--accent-yellow,#92400e); display: flex; align-items: center; gap: 8px; margin-top: 0;">
             <ui-icon library="lucide" name="info" style="height: 16px;"></ui-icon>
             Managed Height Logic
           </h4>
           <p style="font-size: 14px; color:var(--accent-yellow,#b45309); margin-bottom: 0;">
             Each <code>size</code> variant explicitly manages the <code>min-height</code> of the input container (32px, 38px, 42px, 48px, 54px) to ensure horizontal alignment regardless of whether prefix icons or suffix adornments are used.
           </p>
        </div>
      </div>
    `;
  }

  function showEnterpriseInputs() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block animate-in">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2.2rem; color:var(--text-primary,#1e293b); font-weight: 800; margin-bottom: 8px;">Basic Input Types</h2>
          <p style="font-size: 1.1rem; opacity: 0.7; margin-bottom: 0;">Standard input types with various configurations</p>
        </div>
        
        <div style="background:var(--accent-green-soft,#f0fdf4); border-radius: 16px; padding: 32px; border: 1px solid #dcfce7; box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <div style="display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px 48px;">
            <ui-input label="USERNAME" placeholder="Enter your username" full-width="true" size="md"></ui-input>
            <ui-input label="EMAIL ADDRESS" placeholder="user@example.com" type="email" full-width="true" size="md"></ui-input>
            <ui-input label="PASSWORD" placeholder="Enter password" type="password" full-width="true" show-password-toggle="true" size="md"></ui-input>
            
            <ui-input label="AGE" placeholder="0" type="number" full-width="true" size="md"></ui-input>
            <ui-input label="SEARCH" placeholder="Search..." type="search" full-width="true" size="md"></ui-input>
            <ui-input label="BIRTH DATE" type="date" full-width="true" size="md"></ui-input>
          </div>
        </div>
      </div>
    `;
  }

  function showCustomBranding() {
    const container = document.getElementById('inputDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2.2rem; background: linear-gradient(135deg, #f43f5e, #8b5cf6); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">🎨 Custom & Brand Colors</h2>
          <p style="opacity: 0.7; font-size: 1.1rem; margin-bottom: 0;">Theme your inputs with any custom Hex color. The component automatically calculates complementary shades for focus rings and soft variants.</p>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
          <div style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color:var(--accent-pink,#ec4899); margin-bottom: 20px;">Pink Branding (#EC4899)</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <ui-input color="#ec4899" label="Brand Identity" prefix-icon="heart" variant="outlined"></ui-input>
              <ui-input color="#ec4899" label="Subscription" prefix-icon="star" variant="outline" value="Premium Plan"></ui-input>
            </div>
          </div>

          <div style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color:var(--accent-purple,#8b5cf6); margin-bottom: 20px;">Purple Branding (#8B5CF6)</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <ui-input color="#8b5cf6" label="Creative Studio" prefix-icon="image" variant="outlined"></ui-input>
              <ui-input color="#8b5cf6" label="Artist Tag" prefix-icon="user" variant="outline" value="@designer"></ui-input>
            </div>
          </div>

          <div style="background: #0f172a; padding: 28px; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.2);">
            <h4 style="margin-top: 0; color: #38bdf8; margin-bottom: 20px;">Dark Mode Custom (#38BDF8)</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
              <ui-input color="#38bdf8" class="dark" label="Cyberpunk Shell" prefix-icon="terminal" variant="outlined"></ui-input>
              <ui-input color="#38bdf8" class="dark" label="System Logs" prefix-icon="cpu" variant="outline" value="Boot processing..."></ui-input>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  function showInputMultilineDemo() {
    const container = document.getElementById('inputDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2.2rem; background: linear-gradient(135deg, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">📝 TextArea & Multiline</h2>
          <p style="opacity: 0.7; font-size: 1.1rem; margin-bottom: 0;">Enterprise-grade textareas with auto-resize and boundary management.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
          <!-- Standard TextArea -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color:var(--text-primary,#1e293b); margin-bottom: 20px;">Manual Resize (Both Axis)</h4>
            <ui-input 
              multiline="true" 
            resize="both"
              rows="4" 
              label="Biography" 
              placeholder="Drag the bottom right corner to resize..." 
              helper-text="Width and height are manually adjustable"
              full-width="true"
            ></ui-input>
          </div>

          <!-- Auto-Resize TextArea -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color:var(--accent-purple,#8b5cf6); margin-bottom: 20px;">Dynamic Auto-Resize</h4>
            <ui-input 
              multiline="true" 
              auto-resize="true" 
              max-rows="6" 
              label="Live Feedback" 
              placeholder="Keep typing to see me grow..." 
              helper-text="Grows up to 6 rows then scrolls"
              color="#8b5cf6"
              full-width="true"
            ></ui-input>
          </div>

          <!-- Branded Multiline -->
          <div style="background:var(--bg-secondary,#f8fafc); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0);">
            <h4 style="margin-top: 0; color: #0d9488; margin-bottom: 20px;">Branded & Constrained</h4>
            <ui-input 
              multiline="true" 
              rows="3" 
              label="Restricted Input" 
              placeholder="Max 200 characters..." 
              max-length="200"
              show-counter="true"
              color="#0d9488"
              variant="outline"
              full-width="true"
            ></ui-input>
          </div>
        </div>
      </div>
    `;
  }

  function showZenithFeatures() {
    const container = document.getElementById('inputDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2.22rem; background: linear-gradient(135deg, #7c3aed, #db2777); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">🌌 Zenith Tier Master Features</h2>
          <p style="opacity: 0.7; font-size: 1.1rem; margin-bottom: 0;">Complex layout mastery with visual separation, density control, and rich suggestions.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 32px;">
          <!-- Density Showcase -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color:var(--text-primary,#1e293b); margin-bottom: 20px;">📦 Visual Density & Dividers</h4>
            <div style="display: flex; flex-direction: column; gap: 20px;">
               <ui-input density="standard" label="Standard (Default)" prefix-icon="zap" show-dividers="true"></ui-input>
               <ui-input density="cozy" label="Cozy (Relaxed)" prefix-icon="box" show-dividers="true" color="#10b981"></ui-input>
               <ui-input density="compact" label="Compact (Dense)" prefix-icon="cpu" show-dividers="true" color="#10b981"></ui-input>
            </div>
          </div>

          <!-- Rich Suggestions -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 12px rgba(0,0,0,0.03);">
            <h4 style="margin-top: 0; color:var(--accent-purple,#7c3aed); margin-bottom: 20px;">🔍 Rich Autocomplete</h4>
            <ui-input 
              label="Search Users" 
              placeholder="Type '@' or name..." 
              id="zenithAutocomplete"
              prefix-icon="user"
            ></ui-input>
            <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-top: 12px;">Rich metadata suggestions with avatars/icons and subtitles.</p>
          </div>

          <!-- Input Stitching/Grouping -->
          <div style="background:var(--bg-secondary,#f8fafc); padding: 24px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0);">
            <h4 style="margin-top: 0; color:var(--accent-pink,#db2777); margin-bottom: 20px;">🧩 Group Stitching (Pseudo-Group)</h4>
            <div style="display: flex; align-items: flex-end;">
               <ui-input label="Protocol" value="https://" class="group-stuck-right" style="width: 100px; flex-shrink: 0;"></ui-input>
               <ui-input label="Domain Name" placeholder="example.com" class="group-stuck-middle" style="flex: 1;"></ui-input>
               <ui-input label="Extension" value=".io" class="group-stuck-left" style="width: 100px; flex-shrink: 0;"></ui-input>
            </div>
            <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 16px;">Combined multiple inputs into a single cohesive visual unit.</p>
          </div>
        </div>
      </div>
    `;

    // Hook up rich suggestions
    const richInp = document.getElementById('zenithAutocomplete');
    if (richInp) {
      richInp.autocompleteSuggestions = [
        { text: 'Alex Johnson', subtitle: 'Lead Designer', icon: 'palette' },
        { text: 'Sarah Smith', subtitle: 'System Architect', icon: 'cpu' },
        { text: 'Robert Dow', subtitle: 'Project Manager', icon: 'briefcase' },
        { text: 'Emma Wilson', subtitle: 'QA Engineer', icon: 'shield-check' },
      ];
    }
  }

  // ── Addon Click Demo ────────────────────────────────────────────────────────
  function showAddonClickDemo() {
    const container = document.getElementById('inputDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block animate-in">
        <div style="text-align: center; margin-bottom: 40px;">
          <h2 style="font-size: 2.2rem; background: linear-gradient(135deg, #f43f5e, #f97316); -webkit-background-clip: text; -webkit-text-fill-color: transparent; margin-bottom: 8px;">
            🖱️ Prefix &amp; Suffix Click Events
          </h2>
          <p style="opacity: 0.7; font-size: 1.1rem; margin-bottom: 0;">Interactive addon blocks that emit <code>prefixClick</code> / <code>suffixClick</code> events. Hover to see the pointer cursor, click to trigger actions.</p>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(360px, 1fr)); gap: 32px;">

          <!-- Search Launch -->
          <div style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <h4 style="margin-top: 0; color:var(--accent-indigo,#6366f1); display:flex; align-items:center; gap:8px;">
              <ui-icon library="lucide" name="search" style="height:18px;"></ui-icon>
              Clickable Suffix — Search Trigger
            </h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Click the search icon button on the right to launch search. Event log updates below.</p>
            <ui-input
              id="clickSuffixSearch"
              label="Global Search"
              placeholder="Type something..."
              suffix-icon="search"
              suffix-color="primary"
              suffix-clickable="true"
              full-width="true"
            ></ui-input>
            <div id="searchClickLog" style="margin-top: 16px; min-height: 40px; padding: 12px 16px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); font-size: 13px; color: #475569; font-family: monospace;">
              <span style="opacity:0.5;">awaiting suffixClick event…</span>
            </div>
          </div>

          <!-- Copy to Clipboard -->
          <div style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <h4 style="margin-top: 0; color: #10b981; display:flex; align-items:center; gap:8px;">
              <ui-icon library="lucide" name="clipboard" style="height:18px;"></ui-icon>
              Clickable Suffix — Copy to Clipboard
            </h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Click the copy icon to copy the input value. The icon will turn green momentarily on success.</p>
            <ui-input
              id="clickSuffixCopy"
              label="API Key"
              value="sk-prod-Xf9kL32mNpQv7Rc8"
              suffix-icon="copy"
              suffix-color="secondary"
              suffix-clickable="true"
              full-width="true"
            ></ui-input>
            <div id="copyClickLog" style="margin-top: 16px; min-height: 40px; padding: 12px 16px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); font-size: 13px; color: #475569; font-family: monospace;">
              <span style="opacity:0.5;">awaiting suffixClick event…</span>
            </div>
          </div>

          <!-- QR Scan Launch -->
          <div style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <h4 style="margin-top: 0; color:var(--accent-yellow,#f59e0b); display:flex; align-items:center; gap:8px;">
              <ui-icon library="lucide" name="qr-code" style="height:18px;"></ui-icon>
              Clickable Prefix — QR Scanner
            </h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Click the QR icon on the left to simulate opening a QR code scanner. Emits <code>prefixClick</code>.</p>
            <ui-input
              id="clickPrefixQR"
              label="Voucher Code"
              placeholder="Scan or type code…"
              prefix-icon="qr-code"
              prefix-color="warning"
              prefix-clickable="true"
              full-width="true"
            ></ui-input>
            <div id="qrClickLog" style="margin-top: 16px; min-height: 40px; padding: 12px 16px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); font-size: 13px; color: #475569; font-family: monospace;">
              <span style="opacity:0.5;">awaiting prefixClick event…</span>
            </div>
          </div>

          <!-- Dual Addon -->
          <div style="background:var(--bg-primary,white); padding: 28px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 16px rgba(0,0,0,0.04);">
            <h4 style="margin-top: 0; color:var(--accent-red,#ef4444); display:flex; align-items:center; gap:8px;">
              <ui-icon library="lucide" name="zap" style="height:18px;"></ui-icon>
              Both Prefix &amp; Suffix Clickable
            </h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Both sides are independently clickable. Prefix opens country picker, suffix resets the field.</p>
            <ui-input
              id="clickBothInput"
              label="Phone Number"
              value="+91 98765 43210"
              prefix-icon="phone"
              prefix-color="info"
              prefix-clickable="true"
              suffix-icon="x-circle"
              suffix-color="danger"
              suffix-clickable="true"
              full-width="true"
            ></ui-input>
            <div id="dualClickLog" style="margin-top: 16px; min-height: 40px; padding: 12px 16px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); font-size: 13px; color: #475569; font-family: monospace;">
              <span style="opacity:0.5;">awaiting events…</span>
            </div>
          </div>

        </div>

        <!-- Event Legend -->
        <div style="margin-top: 40px; padding: 24px; background: var(--bg-secondary, #f1f5f9); border-radius: 16px; border:1px solid var(--border-default,#e2e8f0);">
          <h4 style="margin: 0 0 16px; color:var(--text-primary,#1e293b); display:flex; align-items:center; gap:8px;">
            <ui-icon library="lucide" name="code" style="height:16px;"></ui-icon>
            Event API Reference
          </h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 24px;">
            <div style="background: #1e293b; border-radius: 12px; padding: 20px; color: #e2e8f0; font-family: monospace; font-size: 13px; line-height: 1.7;">
              <div style="color:var(--text-secondary,#64748b); margin-bottom: 8px;">// HTML attribute usage</div>
              <div><span style="color:#f472b6;">prefix-clickable</span>=<span style="color:#86efac;">"true"</span></div>
              <div><span style="color:#f472b6;">suffix-clickable</span>=<span style="color:#86efac;">"true"</span></div>
              <br>
              <div style="color:var(--text-secondary,#64748b); margin-bottom: 8px;">// Event listener</div>
              <div>el.<span style="color:#60a5fa;">addEventListener</span>(<span style="color:#86efac;">"prefixClick"</span>, fn)</div>
              <div>el.<span style="color:#60a5fa;">addEventListener</span>(<span style="color:#86efac;">"suffixClick"</span>, fn)</div>
            </div>
            <div style="background: #1e293b; border-radius: 12px; padding: 20px; color: #e2e8f0; font-family: monospace; font-size: 13px; line-height: 1.7;">
              <div style="color:var(--text-secondary,#64748b); margin-bottom: 8px;">// Angular binding</div>
              <div>(<span style="color:#f472b6;">prefixClick</span>)=<span style="color:#86efac;">"onPrefix($event)"</span></div>
              <div>(<span style="color:#f472b6;">suffixClick</span>)=<span style="color:#86efac;">"onSuffix($event)"</span></div>
              <br>
              <div style="color:var(--text-secondary,#64748b); margin-bottom: 8px;">// Hover cursor</div>
              <div>Applied via CSS: <span style="color:#f472b6;">cursor: pointer</span></div>
              <div>Class: <span style="color:#86efac;">.prefix-icon--clickable</span></div>
            </div>
          </div>
        </div>
      </div>
    `;

    // ── Wire up events ──────────────────────────────────────────────────────
    function logEvent(logId, msg, color = '#6366f1') {
      const log = document.getElementById(logId);
      if (!log) return;
      const ts = new Date().toLocaleTimeString();
      log.innerHTML = `<span style="color:${color}; font-weight:700;">✓ [${ts}]</span> ${msg}`;
    }

    // 1. Search suffix
    const searchEl = document.getElementById('clickSuffixSearch');
    if (searchEl) {
      searchEl.addEventListener('suffixClick', () => {
        const val = searchEl.value || '(empty)';
        logEvent('searchClickLog', `suffixClick fired — launching search for: <b>&quot;${val}&quot;</b>`, '#6366f1');
      });
    }

    // 2. Copy to clipboard suffix
    const copyEl = document.getElementById('clickSuffixCopy');
    if (copyEl) {
      copyEl.addEventListener('suffixClick', async () => {
        const val = copyEl.value || '';
        try {
          await navigator.clipboard.writeText(val);
          logEvent('copyClickLog', `suffixClick fired — copied to clipboard: <b>&quot;${val}&quot;</b>`, '#10b981');
          // Momentarily change icon
          copyEl.suffixIcon = 'check';
          setTimeout(() => {
            copyEl.suffixIcon = 'copy';
          }, 1500);
        } catch {
          logEvent('copyClickLog', 'suffixClick fired — clipboard access denied', '#ef4444');
        }
      });
    }

    // 3. QR prefix
    const qrEl = document.getElementById('clickPrefixQR');
    if (qrEl) {
      qrEl.addEventListener('prefixClick', () => {
        logEvent('qrClickLog', 'prefixClick fired — opening QR scanner (simulated)…', '#f59e0b');
        // Simulate scanner returning a code after 1.5s
        setTimeout(() => {
          qrEl.value = 'VOUCHER-XK9-2026';
          logEvent('qrClickLog', 'prefixClick — scanner returned: <b>VOUCHER-XK9-2026</b> ✅', '#10b981');
        }, 1500);
      });
    }

    // 4. Dual clickable — prefix = country picker, suffix = clear
    const dualEl = document.getElementById('clickBothInput');
    if (dualEl) {
      dualEl.addEventListener('prefixClick', () => {
        logEvent('dualClickLog', 'prefixClick fired — open country/dial-code picker (simulated)', '#0ea5e9');
      });
      dualEl.addEventListener('suffixClick', () => {
        dualEl.value = '';
        logEvent('dualClickLog', 'suffixClick fired — field cleared ✕', '#ef4444');
      });
    }
  }

  const updateActiveBtn = id => {
    Object.keys(demoMap).forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.selected = btnId === id;
    });
  };

  const demoMap = {
    btnInputPlayground: showInteractiveInput,
    btnInputVariants: showInputVariants,
    btnInputTextArea: showInputMultilineDemo,
    btnInputIcons: showInputIcons,
    btnInputValidation: showInputValidation,
    btnInputRange: showInputRange,
    btnInputColorPicker: showColorPicker,
    btnInputMasking: showInputMasking,
    btnInputFileUpload: showFileUpload,
    btnInputCurrencies: showCurrencyDemo,
    btnInputMasterTier: showMasterTierFeatures,
    btnInputPair: showInputPairDemo,
    btnInputSizes: showInputSizes,
    btnInputColors: showColorVariants,
    btnInputWidths: showInputWidthsDemo,
    btnInputCustom: showCustomBranding,
    btnInputBlocks: showColoredDecorators,
    btnInputAddonClicks: showAddonClickDemo,
    btnInputZenith: showZenithFeatures,
    btnInputEnterprise: showEnterpriseInputs,
  };

  setTimeout(() => {
    Object.entries(demoMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          updateActiveBtn(id);
          func();
        });
      }
    });

    // Default view
    updateActiveBtn('btnInputEnterprise');
    showEnterpriseInputs();
  }, 100);
}
