// Pattern Input Demo
export function initPatternInputDemo() {
  const section = document.getElementById('pattern-input');
  if (!section) return;

  section.innerHTML = `
    
    <p>Advanced input with auto-formatting, masking, and validation patterns.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showInteractivePattern()" variant="outline">🎮 Playground</ui-button>
      <ui-button onclick="showRichFeatures()" variant="outline">✨ Rich Features</ui-button>
      <ui-button onclick="showContactPatterns()" variant="outline">Contact & IDs</ui-button>
      <ui-button onclick="showDatePatterns()" variant="outline">Date & Time</ui-button>
      <ui-button onclick="showTechPatterns()" variant="outline">Tech & Network</ui-button>
      <ui-button onclick="showBusinessPatterns()" variant="outline">Finance & SKU</ui-button>
      <ui-button onclick="showValidationErrors()" variant="outline">Validation</ui-button>
    </div>

    <div id="patternDemoContainer" style="margin-top: 20px;"></div>
    <div id="patternEventLog" style="margin-top: 20px; padding: 12px; background:var(--bg-secondary,#f9fafb); border-radius: 6px; font-family: monospace; font-size: 12px; max-height: 150px; overflow-y: auto;"></div>
  `;

  const container = document.getElementById('patternDemoContainer');
  const eventLog = document.getElementById('patternEventLog');

  function logEvent(message) {
    if (!eventLog) return;
    const timestamp = new Date().toLocaleTimeString();
    eventLog.innerHTML += `[${timestamp}] ${message}\n`;
    eventLog.scrollTop = eventLog.scrollHeight;
  }

  window.showInteractivePattern = function () {
    container.innerHTML = `
      <div style="background-color:var(--bg-primary,white); border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
        <h3>🎮 Interactive Playground</h3>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 15px; margin-bottom: 20px;">
          <div>
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Pattern (# for digits):</label>
            <ui-input type="text" id="patString" value="(###) ###-####" onchange="updateInteractivePattern()" 
            >
          </div>
          <div>
            <label style="display: block; margin-bottom: 5px; font-weight: 500;">Input Type:</label>
            <ui-dropdown id="patType" onchange="updateInteractivePattern()" >
              <option value="numeric">Numeric</option>
              <option value="alpha">Alpha</option>
              <option value="alphanumeric">Alphanumeric</option>
              <option value="text">Text (Any)</option>
            </ui-dropdown>
          </div>
          <div style="display: flex; flex-direction: column; gap: 4px; padding-top: 10px;">
            <ui-checkbox id="patAutoFormat" checked label="Auto Format" onCheckboxChange="updateInteractivePattern()"></ui-checkbox>
            <ui-checkbox id="patShowCounter" label="Show Counter" onCheckboxChange="updateInteractivePattern()"></ui-checkbox>
          </div>
        </div>

        <div style="padding: 40px; background-color:var(--bg-secondary,#f8fafc); border-radius: 8px; border: 1px dashed #cbd5e1; display: flex; flex-direction: column; align-items: center;">
          <div style="width: 100%; max-width: 350px;">
            <ui-pattern-input id="interactivePattern" label="Custom Pattern Input" placeholder="Type here..."></ui-pattern-input>
          </div>
        </div>

        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button onclick="copyPatternInputCode()" id="copyPatternInputBtn" >Copy</ui-button>
          <code id="patternInputCodeBlock" >
            &lt;ui-pattern-input ...&gt;&lt;/ui-pattern-input&gt;
          </code>
        </div>
      </div>
    `;

    window.copyPatternInputCode = () => {
      const code = document.getElementById('patternInputCodeBlock').innerText;
      const btn = document.getElementById('copyPatternInputBtn');

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

    window.updatePatternInputCode = () => {
      const el = document.getElementById('interactivePattern');
      const codeBlock = document.getElementById('patternInputCodeBlock');
      if (!el || !codeBlock) return;

      let props = '';
      if (el.label) props += ` label="${el.label}"`;
      if (el.placeholder) props += ` placeholder="${el.placeholder}"`;
      if (el.pattern) props += ` pattern="${el.pattern}"`;
      if (el.inputType && el.inputType !== 'numeric') props += ` input-type="${el.inputType}"`;
      if (el.autoFormat) props += ` auto-format`;
      if (el.showCounter) props += ` show-counter`;

      codeBlock.innerText = `<ui-pattern-input${props}></ui-pattern-input>`;
    };

    updateInteractivePattern();
  };

  window.updateInteractivePattern = function () {
    const el = document.getElementById('interactivePattern');
    if (!el) return;

    el.pattern = document.getElementById('patString').value;
    el.inputType = document.getElementById('patType').value;
    el.autoFormat = document.getElementById('patAutoFormat').checked;
    el.showCounter = document.getElementById('patShowCounter').checked;

    el.addEventListener('patternInputChange', e => {
      logEvent(`Value: ${e.detail.formatted} (Raw: ${e.detail.value})`);
    });
    window.updatePatternInputCode();
  };

  window.showRichFeatures = function () {
    container.innerHTML = `
      <div class="demo-block">
        <h3>✨ Rich Features & Slots</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Use slots and clearable props for highly functional inputs.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          
          <div class="demo-item">
            <h4 style="margin-bottom: 10px; font-size: 14px;">Clearable with Prefix Icon</h4>
            <ui-pattern-input 
              label="Search SKU" 
              pattern="AAA-####" 
              placeholder="SKU-1234"
              clearable="true"
            >
              <ui-icon slot="prefix" name="search" library="lucide" size="14px" style="margin-inline: 8px; color:var(--text-secondary,#64748b);"></ui-icon>
            </ui-pattern-input>
          </div>

          <div class="demo-item">
            <h4 style="margin-bottom: 10px; font-size: 14px;">Suffix with Dynamic Unit</h4>
            <ui-pattern-input 
              label="Amount" 
              pattern="####.##" 
              placeholder="00.00"
            >
              <span slot="suffix" style="padding-inline: 12px; font-weight: 600; font-size: 12px; color:var(--text-secondary,#64748b); background:var(--bg-tertiary,#f1f5f9); height: 100%; display: flex; align-items: center; border-inline-start: 1px solid #e2e8f0;">USD</span>
            </ui-pattern-input>
          </div>

          <div class="demo-item">
            <h4 style="margin-bottom: 10px; font-size: 14px;">Interactive Action Suffix</h4>
            <ui-pattern-input 
              label="Discount Code" 
              pattern="AAAAA-####" 
              placeholder="SAVE-2024"
            >
              <ui-button slot="suffix"  onmouseover="this.style.background='#2563eb'" onmouseout="this.style.background='#10b981'">APPLY</ui-button>
            </ui-pattern-input>
          </div>

        </div>
      </div>
    `;
  };

  
  window.showContactPatterns = function () {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Contact & Identity</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Patterns for phone numbers and government IDs.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <ui-pattern-input label="US Phone" pattern="(###) ###-####" input-type="numeric" placeholder="(555) 123-4567"
            validation-regex="^\\(\\d{3}\\) \\d{3}-\\d{4}$"
            error-message="Enter a complete 10-digit US phone number"></ui-pattern-input>
          <ui-pattern-input label="Intl Phone (Format A)" pattern="+## ### ### ####" input-type="numeric" placeholder="+44 123 456 7890"
            validation-regex="^\\+\\d{2} \\d{3} \\d{3} \\d{4}$"
            error-message="Enter a valid international phone number"></ui-pattern-input>
          <ui-pattern-input label="Social Security (SSN)" pattern="###-##-####" input-type="numeric" placeholder="000-00-0000"
            validation-regex="^(?!000|666|9\\d{2})\\d{3}-(?!00)\\d{2}-(?!0000)\\d{4}$"
            error-message="Enter a valid SSN (###-##-####)"></ui-pattern-input>
          <ui-pattern-input label="Canadian Postal Code" pattern="A#A #A#" input-type="alphanumeric" placeholder="K1A 0B1"
            validation-regex="^[A-Za-z]\\d[A-Za-z] \\d[A-Za-z]\\d$"
            error-message="Enter a valid postal code (e.g. K1A 0B1)"></ui-pattern-input>
          <ui-pattern-input label="Driver License (Example)" pattern="A-####-####-##" input-type="alphanumeric" placeholder="X-1234-5678-90"
            validation-regex="^[A-Za-z]-\\d{4}-\\d{4}-\\d{2}$"
            error-message="Format must be X-####-####-##"></ui-pattern-input>
          <ui-pattern-input label="Passport ID" pattern="AAAAAAAAA" input-type="alphanumeric" placeholder="A12345678"
            validation-regex="^[A-Za-z][0-9]{8}$"
            error-message="Must be 1 letter followed by 8 digits"></ui-pattern-input>
        </div>
      </div>
    `;
  };

  window.showDatePatterns = function () {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Date & Time Formats</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Auto-formatting for temporal data input.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <ui-pattern-input label="Date (MM/DD/YYYY)" pattern="##/##/####" input-type="numeric" placeholder="12/31/2024"
            validation-regex="^(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01])/\\d{4}$"
            error-message="Enter a valid date (MM/DD/YYYY)"></ui-pattern-input>
          <ui-pattern-input label="Date (DD-MM-YYYY)" pattern="##-##-####" input-type="numeric" placeholder="31-12-2024"
            validation-regex="^(0[1-9]|[12]\\d|3[01])-(0[1-9]|1[0-2])-\\d{4}$"
            error-message="Enter a valid date (DD-MM-YYYY)"></ui-pattern-input>
          <ui-pattern-input label="Date (YYYY/MM/DD)" pattern="####/##/##" input-type="numeric" placeholder="2024/12/31"
            validation-regex="^\\d{4}/(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01])$"
            error-message="Enter a valid date (YYYY/MM/DD)"></ui-pattern-input>
          <ui-pattern-input label="Time (12h)" pattern="##:##" input-type="numeric" placeholder="12:30"
            validation-regex="^(0[1-9]|1[0-2]):[0-5]\\d$"
            error-message="Enter a valid 12-hour time (01:00–12:59)"></ui-pattern-input>
          <ui-pattern-input label="Time (24h with seconds)" pattern="##:##:##" input-type="numeric" placeholder="14:30:59"
            validation-regex="^([01]\\d|2[0-3]):[0-5]\\d:[0-5]\\d$"
            error-message="Enter a valid time (HH:MM:SS, 00:00:00–23:59:59)"></ui-pattern-input>
          <ui-pattern-input label="Month/Year" pattern="##/####" input-type="numeric" placeholder="12/2025"
            validation-regex="^(0[1-9]|1[0-2])/\\d{4}$"
            error-message="Enter a valid month/year (MM/YYYY)"></ui-pattern-input>
        </div>
      </div>
    `;
  };

  window.showTechPatterns = function () {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Technology & Network</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Patterns for IP addresses, MACs, and color keys.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <ui-pattern-input label="IPv4 Address" pattern="###.###.###.###" input-type="numeric" placeholder="192.168.001.001"
            validation-regex="^(25[0-5]|2[0-4]\\d|[01]\\d\\d)\\.(25[0-5]|2[0-4]\\d|[01]\\d\\d)\\.(25[0-5]|2[0-4]\\d|[01]\\d\\d)\\.(25[0-5]|2[0-4]\\d|[01]\\d\\d)$"
            error-message="Each octet must be 000–255" helper-text="e.g. 192.168.001.001"></ui-pattern-input>
          <ui-pattern-input label="MAC Address" pattern="AA:AA:AA:AA:AA:AA" input-type="alphanumeric" placeholder="00:1A:2B:3C:4D:5E"
            validation-regex="^[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}$"
            error-message="Enter a valid MAC address"></ui-pattern-input>
          <ui-pattern-input label="Hex Color" pattern="#AAAAAA" allowed-chars="^[0-9A-Fa-f]*$" input-type="custom" placeholder="#10b981"
            validation-regex="^#[0-9A-Fa-f]{6}$"
            error-message="Enter a valid 6-digit hex color"></ui-pattern-input>
          <ui-pattern-input label="UUID / GUID" pattern="AAAAAAAA-AAAA-AAAA-AAAA-AAAAAAAAAAAA" input-type="alphanumeric" placeholder="550e8400-e29b-41d4-a716-446655440000"
            validation-regex="^[0-9A-Fa-f]{8}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{4}-[0-9A-Fa-f]{12}$"
            error-message="Enter a valid UUID"></ui-pattern-input>
          <ui-pattern-input label="License Key" pattern="AAAA-AAAA-AAAA-AAAA" input-type="alphanumeric" placeholder="ABCD-EFGH-1234-5678"
            validation-regex="^[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}-[A-Za-z0-9]{4}$"
            error-message="License key must be XXXX-XXXX-XXXX-XXXX"></ui-pattern-input>
          <ui-pattern-input label="Port Number" pattern="#####" input-type="numeric" placeholder="8080"
            validation-regex="^([0-9]{1,4}|[0-5][0-9]{4}|6[0-4][0-9]{3}|65[0-4][0-9]{2}|655[0-2][0-9]|6553[0-5])$"
            error-message="Port must be 0–65535" helper-text="Valid range: 0–65535"></ui-pattern-input>
        </div>
      </div>
    `;
  };

  window.showBusinessPatterns = function () {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Finance, Business & SKU</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Standard business formats and product codes.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          <ui-pattern-input label="Credit Card" pattern="#### #### #### ####" input-type="numeric" placeholder="4532 1234 5678 9123"
            validation-regex="^\\d{4} \\d{4} \\d{4} \\d{4}$"
            error-message="Enter a complete 16-digit card number"></ui-pattern-input>
          <ui-pattern-input label="CVV / CVC" pattern="###" input-type="numeric" placeholder="123"
            validation-regex="^\\d{3}$"
            error-message="CVV must be exactly 3 digits"></ui-pattern-input>
          <ui-pattern-input label="Bank Routing (US)" pattern="####-####-#" input-type="numeric" placeholder="1234-5678-9"
            validation-regex="^\\d{4}-\\d{4}-\\d$"
            error-message="Enter a valid routing number (####-####-#)"></ui-pattern-input>
          <ui-pattern-input label="Short IBAN (Example)" pattern="AA## #### #### #### ####" input-type="alphanumeric" placeholder="DE89 3704 0044 0532 0130 00"
            validation-regex="^[A-Za-z]{2}\\d{2} \\d{4} \\d{4} \\d{4} \\d{4}$"
            error-message="Format must be CC## #### #### #### ####"></ui-pattern-input>
          <ui-pattern-input label="Product SKU" pattern="AAA-####-AA" input-type="alphanumeric" placeholder="PRD-2024-XL"
            validation-regex="^[A-Za-z]{3}-\\d{4}-[A-Za-z]{2}$"
            error-message="Format must be AAA-####-AA (e.g. PRD-2024-XL)"></ui-pattern-input>
          <ui-pattern-input label="Order ID" pattern="#-######-###" input-type="numeric" placeholder="1-453920-888"
            validation-regex="^\\d-\\d{6}-\\d{3}$"
            error-message="Format must be #-######-###"></ui-pattern-input>
        </div>
      </div>
    `;
  };

  window.showValidationErrors = function () {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Validation States</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">
          Use <code>error-message</code>, <code>success-message</code>, <code>required</code>, and
          <code>validation-regex</code> to drive validation feedback.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;margin-bottom:32px;">

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Static Error</h4>
            <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">Set <code>error-message</code> directly to force an error state.</p>
            <ui-pattern-input
              label="Credit Card"
              pattern="#### #### #### ####"
              input-type="numeric"
              error-message="Card number must be 16 digits"
              placeholder="4532 1234 5678 9123"
            ></ui-pattern-input>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Static Success</h4>
            <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">Set <code>success-message</code> to show a confirmed valid state.</p>
            <ui-pattern-input
              label="Phone Number"
              pattern="(###) ###-####"
              input-type="numeric"
              success-message="Phone number verified"
              placeholder="(555) 123-4567"
            ></ui-pattern-input>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Required + Helper Text</h4>
            <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">Shows asterisk and helper below the field. Error triggers on blur when empty.</p>
            <ui-pattern-input
              label="SSN"
              pattern="###-##-####"
              input-type="numeric"
              required="true"
              helper-text="Your Social Security Number"
              placeholder="000-00-0000"
            ></ui-pattern-input>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Regex Validation — Live</h4>
            <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">Validates on blur. Must be exactly 10 digits (complete US phone).</p>
            <ui-pattern-input
              id="pi-regex-phone"
              label="US Phone (must be complete)"
              pattern="(###) ###-####"
              input-type="numeric"
              validation-regex="^\\(\\d{3}\\) \\d{3}-\\d{4}$"
              error-message="Please enter a complete 10-digit phone number"
              success-message="Looks good!"
              placeholder="(555) 123-4567"
            ></ui-pattern-input>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Regex Validation — Date</h4>
            <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">Must match MM/DD/YYYY with basic month/day range check.</p>
            <ui-pattern-input
              id="pi-regex-date"
              label="Date of Birth"
              pattern="##/##/####"
              input-type="numeric"
              validation-regex="^(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01])/\\d{4}$"
              error-message="Enter a valid date in MM/DD/YYYY format"
              success-message="Valid date"
              placeholder="12/31/1990"
            ></ui-pattern-input>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Disabled</h4>
            <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">Disabled inputs ignore all interaction and show reduced opacity.</p>
            <ui-pattern-input
              label="Account Number"
              pattern="####-####-####"
              input-type="numeric"
              value="1234-5678-9012"
              disabled="true"
              helper-text="Read-only — set by your account"
            ></ui-pattern-input>
          </div>

        </div>

        <!-- Live form validation scenario -->
        <div style="padding:24px;background:var(--bg-secondary,#f8fafc);border-radius:14px;border:1px solid var(--border-default,#e5e7eb);">
          <h4 style="margin:0 0 4px;font-size:14px;font-weight:700;color:var(--text-primary,#111827);">Form Validation Flow</h4>
          <p style="margin:0 0 20px;font-size:13px;color:var(--text-secondary,#64748b);">Click <strong>Submit</strong> to trigger validation on all fields at once. Errors clear as you correct each field.</p>
          <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:16px;">
            <ui-pattern-input id="pf-phone"  label="Phone *"       pattern="(###) ###-####" input-type="numeric" required="true" placeholder="(555) 123-4567" validation-regex="^\\(\\d{3}\\) \\d{3}-\\d{4}$" error-message="Complete phone required"></ui-pattern-input>
            <ui-pattern-input id="pf-dob"    label="Date of Birth *" pattern="##/##/####"  input-type="numeric" required="true" placeholder="MM/DD/YYYY"    validation-regex="^(0[1-9]|1[0-2])/(0[1-9]|[12]\\d|3[01])/\\d{4}$" error-message="Enter a valid date"></ui-pattern-input>
            <ui-pattern-input id="pf-card"   label="Card Number *"  pattern="#### #### #### ####" input-type="numeric" required="true" placeholder="4532 1234 5678 9123" validation-regex="^\\d{4} \\d{4} \\d{4} \\d{4}$" error-message="16-digit card number required"></ui-pattern-input>
            <ui-pattern-input id="pf-zip"    label="ZIP Code *"     pattern="#####"         input-type="numeric" required="true" placeholder="90210"         validation-regex="^\\d{5}$" error-message="5-digit ZIP required"></ui-pattern-input>
          </div>
          <div style="display:flex;align-items:center;gap:12px;margin-top:20px;">
            <ui-button id="pi-form-submit" variant="primary" label="Submit"></ui-button>
            <ui-button id="pi-form-reset"  variant="ghost"   label="Reset"></ui-button>
            <span id="pi-form-status" style="font-size:13px;font-weight:600;"></span>
          </div>
        </div>

        <!-- Event log -->
        <div style="margin-top:24px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:8px;">
            <h4 style="margin:0;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Validation Events</h4>
            <ui-button id="pi-val-clear-log" size="xs" variant="ghost" label="Clear"></ui-button>
          </div>
          <div id="pi-val-log" style="padding:12px 16px;background:var(--bg-primary,#fff);border-radius:10px;border:1px solid var(--border-default,#e2e8f0);font-family:monospace;font-size:12px;height:140px;overflow-y:auto;">
            <span style="color:var(--text-secondary,#64748b);font-style:italic;">Interact with the fields above to see events...</span>
          </div>
        </div>
      </div>
    `;

    const valLog = container.querySelector('#pi-val-log');
    const addValLog = (msg, color) => {
      const empty = valLog.querySelector('span[style*="italic"]');
      if (empty) empty.remove();
      const d = document.createElement('div');
      d.style.cssText = 'padding:3px 0;border-bottom:1px solid var(--border-subtle,rgba(0,0,0,0.04));';
      d.innerHTML = `<span style="color:${color};font-weight:700;">[${new Date().toLocaleTimeString()}]</span> ${msg}`;
      valLog.prepend(d);
    };

    container.querySelector('#pi-val-clear-log')?.addEventListener('click', () => {
      valLog.innerHTML = '<span style="color:var(--text-secondary,#64748b);font-style:italic;">Interact with the fields above to see events...</span>';
    });

    // Attach validation event listeners to live-regex fields
    ['pi-regex-phone', 'pi-regex-date'].forEach(id => {
      const el = container.querySelector('#' + id);
      if (!el) return;
      el.addEventListener('patternInputValidate', e => {
        const { isValid, value } = e.detail;
        addValLog(`#${id}: isValid=${isValid}, value="${value}"`, isValid ? '#10b981' : '#ef4444');
      });
    });

    // Form submit / reset
    const formFields = ['pf-phone', 'pf-dob', 'pf-card', 'pf-zip'];
    const statusEl = container.querySelector('#pi-form-status');

    container.querySelector('#pi-form-submit')?.addEventListener('click', () => {
      let allValid = true;
      formFields.forEach(id => {
        const el = container.querySelector('#' + id);
        if (!el) return;
        const raw = (el.value || '').replace(/\D/g, '');
        const regexAttr = el.getAttribute('validation-regex');
        const formatted = el.value || '';
        const passes = regexAttr ? new RegExp(regexAttr).test(formatted) : raw.length > 0;
        if (!passes) {
          allValid = false;
          // Trigger error by dispatching blur — or set errorMessage directly
          el.errorMessage = el.getAttribute('error-message');
        } else {
          el.errorMessage = '';
          el.successMessage = 'Looks good!';
        }
      });
      statusEl.style.color = allValid ? '#10b981' : '#ef4444';
      statusEl.textContent  = allValid ? '\u2713 All fields valid — ready to submit' : 'Please fix the errors above';
      addValLog(`Form submit: ${allValid ? 'VALID' : 'INVALID'}`, allValid ? '#10b981' : '#ef4444');
    });

    container.querySelector('#pi-form-reset')?.addEventListener('click', () => {
      formFields.forEach(id => {
        const el = container.querySelector('#' + id);
        if (!el) return;
        el.value = '';
        el.errorMessage = '';
        el.successMessage = '';
      });
      statusEl.textContent = '';
      addValLog('Form reset', '#94a3b8');
    });
  };

  // Default view
  setTimeout(() => {
    showInteractivePattern();
  }, 100);
}
