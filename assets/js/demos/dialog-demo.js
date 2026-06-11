// Dialog Demo
export function initDialogDemo() {
  const section = document.getElementById('dialog');
  if (!section) return;

  section.innerHTML = `
    <p>Modal dialogs with customizable headers, content, and footers.</p>

    <div class="demo-controls-wrapper">
      <div class="demo-grid-wrapper">
        <ui-button id="btnInteractiveDialog"  label="🎮 Playground" size="md" variant="outline"></ui-button>
        <ui-button id="btnBasicDialog"  label="Basic" size="md" variant="outline"></ui-button>
        <ui-button id="btnSlotDialog"  label="Custom Slots" size="md" variant="outline"></ui-button>
        <ui-button id="btnDialogSizes"  label="Sizes" size="md" variant="outline"></ui-button>
        <ui-button id="btnDialogPositions"  label="Positions" size="md" variant="outline"></ui-button>
        <ui-button id="btnDialogScroll"  label="Scrolling" size="md" variant="outline"></ui-button>
        <ui-button id="btnAdvancedDialogs"  label="Advanced" size="md" variant="outline"></ui-button>
        <ui-button id="btnFormDialog"  label="Form Dialog" size="md" variant="outline"></ui-button>
        <ui-button id="btnNestedDialogs"  label="Nested" size="md" variant="outline"></ui-button>
        <ui-button id="btnPremiumFeatures"  label="💎 Premium" size="md" variant="outline"></ui-button>
        <ui-button id="btnApexShowcase"  label="🌌 Apex Tier" size="md" variant="outline"></ui-button>
        <ui-button id="btnGodTierDialog"  label="🎭 God Tier" size="md" variant="outline"></ui-button>
        <ui-button id="btnSovereignTier"  label="⚡ Sovereign" size="md" variant="outline"></ui-button>
        <ui-button id="btnCustomHeaderShowcase"  label="💎 Branded Header" size="md" variant="outline"></ui-button>
        <ui-button id="btnMockupDesign"  label="📐 Mockup" size="md" variant="outline"></ui-button>
        <ui-button id="btnTermsDialog"  label="⚖️ Terms" size="md" variant="outline"></ui-button>
        <ui-button id="btnEliteFeatures"  label="🏆 Elite" size="md" variant="outline"></ui-button>
        <ui-button id="btnSecurityLifecycleFeatures"  label="🔐 Security" size="md" variant="outline"></ui-button>
        <ui-button id="btnWindowFeatures"  label="🪟 Windows" size="md" variant="outline"></ui-button>
        <ui-button id="btnDrawerShowcase"  label="📐 Drawers" size="md" variant="outline"></ui-button>
        <ui-button id="btnFullscreenDemo"  label="🖥️ Fullscreen" size="md" variant="outline"></ui-button>
        <ui-button id="btnPromiseDemo"  label="🤝 Promise API" size="md" variant="outline"></ui-button>
        <ui-button id="btnSlotsAndPartsDemo"  label="💎 Slots/Parts" size="md" variant="outline"></ui-button>
        <ui-button id="btnMessageBoxDemo"  label="💬 MessageBox" size="md" variant="outline"></ui-button>
        <ui-button id="btnConfirmDemo"  label="🗑️ Confirm" size="md" variant="outline"></ui-button>
        <ui-button id="btnPromptDemo"  label="✍️ Prompt" size="md" variant="outline"></ui-button>
        <ui-button id="btnMenuShowroom"  label="⋮ Menu" size="md" variant="outline"></ui-button>
        <ui-button id="btnTraySystemDemo"  label="🗂 Tray" size="md" variant="outline"></ui-button>
        <ui-button id="btnGlassStatusShowroom"  label="✨ Glass" size="md" variant="outline"></ui-button>
        <ui-button id="btnEnterpriseLogicShowcase"  label="🧠 Logic" size="md" variant="outline"></ui-button>
        <ui-button id="btnParentChildDialogDemo"  label="⛓️ Parent/Child" size="md" variant="outline"></ui-button>
        <ui-button id="btnAuthSessionDemo"  label="🔐 Auth" size="md" variant="outline"></ui-button>
      </div>
    </div>

    <div id="dialogDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    const btnMap = {
      btnInteractiveDialog: () => window.showInteractiveDialog?.(),
      btnBasicDialog: () => window.showBasicDialog?.(),
      btnSlotDialog: () => window.showSlotDialog?.(),
      btnDialogSizes: () => window.showDialogSizes?.(),
      btnDialogPositions: () => window.showDialogPositions?.(),
      btnDialogScroll: () => window.showDialogScroll?.(),
      btnAdvancedDialogs: () => window.showAdvancedDialogs?.(),
      btnFormDialog: () => window.showFormDialog?.(),
      btnNestedDialogs: () => window.showNestedDialogs?.(),
      btnPremiumFeatures: () => window.showPremiumFeatures?.(),
      btnApexShowcase: () => window.showApexShowcase?.(),
      btnGodTierDialog: () => window.showGodTier?.(),
      btnSovereignTier: () => window.showSovereignTier?.(),
      btnCustomHeaderShowcase: () => window.showCustomHeaderShowcase?.(),
      btnMockupDesign: () => window.showMockupDesign?.(),
      btnTermsDialog: () => window.showTermsDialog?.(),
      btnEliteFeatures: () => window.showEliteFeatures?.(),
      btnSecurityLifecycleFeatures: () => window.showSecurityLifecycleFeatures?.(),
      btnWindowFeatures: () => window.showWindowFeatures?.(),
      btnDrawerShowcase: () => window.showDrawerShowcase?.(),
      btnFullscreenDemo: () => window.showFullscreenDemo?.(),
      btnPromiseDemo: () => window.showPromiseDemo?.(),
      btnSlotsAndPartsDemo: () => window.showSlotsAndPartsDemo?.(),
      btnMessageBoxDemo: () => window.showMessageBoxDemo?.(),
      btnConfirmDemo: () => window.showConfirmDemo?.(),
      btnPromptDemo: () => window.showPromptDemo?.(),
      btnMenuShowroom: () => window.showMenuShowroom?.(),
      btnTraySystemDemo: () => window.showTraySystemDemo?.(),
      btnGlassStatusShowroom: () => window.showGlassStatusShowroom?.(),
      btnEnterpriseLogicShowcase: () => window.showEnterpriseLogicShowcase?.(),
      btnParentChildDialogDemo: () => window.showParentChildDialogDemo?.(),
      btnAuthSessionDemo: () => window.showAuthSessionDemo?.(),
    };

    const updateActiveBtn = id => {
      Object.keys(btnMap).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) btn.selected = btnId === id;
      });
    };

    Object.entries(btnMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          updateActiveBtn(id);
          func?.();
        });
      }
    });

    // Set default
    updateActiveBtn('btnInteractiveDialog');
    window.showInteractiveDialog();
  }, 100);

  // Define global functions for the demo
  window.openDialog = id => {
    const d = document.getElementById(id);
    if (d) d.show();
  };
  window.closeDialog = id => {
    const d = document.getElementById(id);
    if (d) d.hide();
  };

  window.logEvent = function (message) {
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

  window.showBasicDialog = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Basic Dialog (Showcasing All Major Props)</h3>
        <p style="margin-bottom: 12px; font-size: 14px; color: #6b7280;">
          This demo instance has been upgraded to activate all significant layout, interaction, and styling properties natively supported by the UI Dialog Box.
        </p>
        <ui-button id="btnOpenBasicDialog" size="md" variant="outline" color="primary" label="Open Basic Dialog"></ui-button>
        
        <ui-dialog-box 
          id="basicDialog" 
          icon-library="lucide"
          dialog-title="Advanced Zenith Dialog"
          subtitle="Showcasing Enterprise Dialog Capabilities"
          icon="shield"
          size="lg"
          width="600px"
          show-maximize="true"
          show-minimize="true"
          show-close="true"
          show-menu="true"
          show-header="true"
          show-footer="true"
          variant="default"
          status="success"
          backdrop="blur"
          scroll-area="paper"
          resizable="true"
          global-blur="true"
          glass="true"
          ok-text="Acknowledge"
          cancel-text="Dismiss"
          animation="zoom"
          swipe-to-close="true"
        >
          <div style="padding: 16px;">
            <p style="margin-bottom: 10px; line-height: 1.6;">This is the "Basic Dialog" instance, which has been configured to demonstrate the full power of the Zenith API properties:</p>
            <ul style="padding-left: 20px; margin-bottom: 16px; line-height: 1.8;">
              <li><strong>Glass & Blur:</strong> Notice the frosted glass effect and global background blur.</li>
              <li><strong>Window Controls:</strong> Full support for Minimize, Maximize, and Close.</li>
              <li><strong>Resizability:</strong> Drag the bottom-right corner to resize this dialog dynamically.</li>
              <li><strong>Headers & Status:</strong> Integrated icons, subtitles, and specialized status bars.</li>
              <li><strong>Responsive Actions:</strong> Built-in OK and Cancel handlers mapping directly to Zenith's button engine.</li>
            </ul>
          </div>
        </ui-dialog-box>

        <div id="eventLog" style="margin-top: 24px; padding: 12px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 6px; border: 1px solid var(--border-default, #d1d5db);">
          <h4 style="margin: 0 0 8px; font-size: 14px; color: var(--text-primary, #374151);">Event Log:</h4>
          <div id="eventLogContent" style="font-family: monospace; font-size: 12px; color: var(--text-secondary, #6b7280); max-height: 100px; overflow-y: auto;">
            <div style="color: #9ca3af;">Waiting for events...</div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnOpenBasicDialog')?.addEventListener('click', () => window.openDialog('basicDialog'));

      const dialog = document.getElementById('basicDialog');
      const logContent = document.getElementById('eventLogContent');

      function logEvent(name, detail) {
        if (!logContent) return;
        const entry = document.createElement('div');
        entry.style.marginBottom = '4px';
        entry.innerHTML = `<strong style="color: var(--color-primary, #10b981)">[${new Date().toLocaleTimeString()}]</strong> ${name}: ${JSON.stringify(detail || {})}`;
        logContent.prepend(entry);
      }

      if (dialog) {
        dialog.addEventListener('dialogOpen', () => logEvent('dialogOpen'));
        dialog.addEventListener('dialogClose', e => logEvent('dialogClose', e.detail));
        dialog.addEventListener('dialogMaximize', () => logEvent('dialogMaximize'));
        dialog.addEventListener('dialogMinimize', () => logEvent('dialogMinimize'));
        dialog.addEventListener('dialogRestore', () => logEvent('dialogRestore'));
        dialog.addEventListener('dialogResize', e => logEvent('dialogResize', { width: e.detail.width, height: e.detail.height }));

        // Listen for internal button events if emitted
        dialog.addEventListener('ok', () => logEvent('dialogOkAction', { action: 'acknowledged' }));
        dialog.addEventListener('cancel', () => logEvent('dialogCancelAction', { action: 'dismissed' }));
      }
    }, 100);
  };

  window.showSlotDialog = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
         <div class="demo-block">
            <h3>Fully Customizable Slots</h3>
            <ui-button id="btnOpenCustomSlotsDialog" size="md" variant="outline" color="success" label="Open Custom Slots Dialog"></ui-button>
            
            <ui-dialog-box id="dSlots" width="500px" icon-library="lucide" ok-text="Save" cancel-text="Cancel">
                <div slot="header" style="display:flex; align-items:center; gap:8px;">
                     <ui-icon name="palette" library="lucide" size="24px" style="color: #10b981;"></ui-icon>
                     <div>
                        <h3 style="margin:0; color:#10b981; font-size:18px;">Custom Header</h3>
                        <span style="font-size:12px; color:#666;">With subtitle</span>
                     </div>
                </div>
                <ui-button id="btnCustomHeaderAction" slot="header-actions" title="Star" variant="ghost" color="secondary" size="md">
                    <ui-icon name="star" library="lucide" size="16px"></ui-icon>
                </ui-button>
                <div style="padding:16px; background:var(--accent-green-soft,#f0fdf4); border:1px dashed #10b981; border-radius:6px; margin-top:8px;">
                    <h4 style="margin-top:0;">Slot Content Area</h4>
                    <p>This content is injected via the <b>default slot</b>. It is fully customizable.</p>
                </div>
            </ui-dialog-box>
         </div>
       `;
    setTimeout(() => {
      document.getElementById('btnOpenCustomSlotsDialog')?.addEventListener('click', () => window.openDialog('dSlots'));
      document.getElementById('btnCustomHeaderAction')?.addEventListener('click', () => alert('Custom Header Action!'));
    }, 100);
  };

  window.showDialogSizes = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Predefined Dialog Sizes</h3>
        <p>Predefined sizes ensure consistency (xs, sm, md, lg, xl) and responsiveness (max-width 90%).</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 20px;">
        <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 30px;">
           <ui-button id="btnOpenXS" size="xs" variant="outline" color="secondary" label="XS" style="--btn-bg: #6b7280;"></ui-button>
           <ui-button id="btnOpenSM" size="sm" variant="outline" color="success" label="SM"></ui-button>
           <ui-button id="btnOpenMD" size="md" variant="outline" color="success" label="MD"></ui-button>
           <ui-button id="btnOpenLG" size="lg" variant="outline" color="success" label="LG"></ui-button>
           <ui-button id="btnOpenXL" size="xl" variant="outline" color="success" label="XL"></ui-button>
           <ui-button id="btnOpenFill" size="md" variant="outline" color="success" label="Full Screen"></ui-button>
        </div>

        <ui-dialog-box id="sXS" size="xs" dialog-title="Size XS (320px)" ok-text="Accept" cancel-text="Dismiss" icon-library="lucide"><div>Content</div></ui-dialog-box>
        <ui-dialog-box id="sSM" size="sm" dialog-title="Size SM (480px)" ok-text="Accept" cancel-text="Dismiss" icon-library="lucide"><div>Content</div></ui-dialog-box>
        <ui-dialog-box id="sMD" size="md" dialog-title="Size MD (768px)" ok-text="Accept" cancel-text="Dismiss" icon-library="lucide"><div>Content</div></ui-dialog-box>
        <ui-dialog-box id="sLG" size="lg" dialog-title="Size LG (1024px)" ok-text="Accept" cancel-text="Dismiss" icon-library="lucide"><div>Content</div></ui-dialog-box>
        <ui-dialog-box id="sXL" size="xl" dialog-title="Size XL (1280px)" ok-text="Accept" cancel-text="Dismiss" icon-library="lucide"><div>Content</div></ui-dialog-box>
        <ui-dialog-box id="sFill" size="fill" dialog-title="Size Full (100%)" ok-text="Accept" cancel-text="Dismiss" icon-library="lucide"><div>Content</div></ui-dialog-box>
      </div>
    `;
    setTimeout(() => {
      const sizeMap = {
        btnOpenXS: 'sXS',
        btnOpenSM: 'sSM',
        btnOpenMD: 'sMD',
        btnOpenLG: 'sLG',
        btnOpenXL: 'sXL',
        btnOpenFill: 'sFill',
      };
      Object.entries(sizeMap).forEach(([btnId, dialogId]) => {
        document.getElementById(btnId)?.addEventListener('click', () => window.openDialog(dialogId));
      });
    }, 100);
  };

  window.showDialogVariants = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Dialog Variants & Status</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-button id="btnOpenVPrimary" size="md" variant="outline" color="primary" label="Primary"></ui-button>
          <ui-button id="btnOpenVSecondary" size="md" variant="outline" color="secondary" label="Secondary"></ui-button>
          <ui-button id="btnOpenVInfo" size="md" variant="outline" color="info" label="Info"></ui-button>
          <ui-button id="btnOpenVSuccess" size="md" variant="outline" color="success" label="Success"></ui-button>
          <ui-button id="btnOpenVWarning" size="md" variant="outline" color="warning" label="Warning"></ui-button>
          <ui-button id="btnOpenVError" size="md" variant="outline" color="danger" label="Error"></ui-button>
        </div>
        <ui-dialog-box id="vPrimary" variant="filled" status="primary" dialog-title="Primary" ok-text="OK" cancel-text="Close" icon-library="lucide"><div><p>Primary content</p></div></ui-dialog-box>
        <ui-dialog-box id="vSecondary" variant="filled" status="secondary" dialog-title="Secondary" ok-text="OK" cancel-text="Close" icon-library="lucide"><div><p>Secondary content</p></div></ui-dialog-box>
        <ui-dialog-box id="vInfo" variant="filled" status="info" dialog-title="Info" ok-text="OK" cancel-text="Close" icon-library="lucide"><div><p>Info content</p></div></ui-dialog-box>
        <ui-dialog-box id="vSuccess" variant="filled" status="success" dialog-title="Success" ok-text="OK" cancel-text="Close" icon-library="lucide"><div><p>Success content</p></div></ui-dialog-box>
        <ui-dialog-box id="vWarning" variant="filled" status="warning" dialog-title="Warning" ok-text="OK" cancel-text="Close" icon-library="lucide"><div><p>Warning content</p></div></ui-dialog-box>
        <ui-dialog-box id="vError" variant="filled" status="error" dialog-title="Error" ok-text="OK" cancel-text="Close" icon-library="lucide"><div><p>Error content</p></div></ui-dialog-box>
      </div>
    `;
    setTimeout(() => {
      const varMap = {
        btnOpenVPrimary: 'vPrimary',
        btnOpenVSecondary: 'vSecondary',
        btnOpenVInfo: 'vInfo',
        btnOpenVSuccess: 'vSuccess',
        btnOpenVWarning: 'vWarning',
        btnOpenVError: 'vError',
      };
      Object.entries(varMap).forEach(([btnId, dialogId]) => {
        document.getElementById(btnId)?.addEventListener('click', () => window.openDialog(dialogId));
      });
    }, 100);
  };

  window.showDialogTypes = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Dialog Types</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-button id="btnOpenTInfo" size="md" variant="outline" color="success" label="Info"></ui-button>
        </div>
        <ui-dialog-box id="tInfo" dialog-title="Information" ok-text="Acknowledge" cancel-text="Dismiss" icon="info" icon-library="lucide"><div><p>Info message content</p></div></ui-dialog-box>
      </div>
    `;
    setTimeout(() => {
      document.getElementById('btnOpenTInfo')?.addEventListener('click', () => window.openDialog('tInfo'));
    }, 100);
  };

  window.showFormDialog = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Complex Form Dialog</h3>
        <p style="color:var(--text-secondary,#64748b); margin-bottom: 16px;">This demo showcases a multi-control form integrated directly into the dialog, demonstrating native component interoperability.</p>
        <ui-button id="btnOpenForm" size="md" variant="outline" color="success" label="Launch Complex Form"></ui-button>
        
        <ui-dialog-box id="formDialog" width="750px" icon-library="lucide" icon="edit-3" dialog-title="Comprehensive User Registration" subtitle="Configure profile, access settings, preferences, and custom theme layouts" ok-text="Save Configuration" cancel-text="Discard Changes" scroll-area="paper" glass="true">
          <div style="padding: 24px; display: flex; flex-direction: column; gap: 28px;">
            
            <!-- Section 1: Personal Credentials -->
            <div>
              <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); font-weight: 700;">1. Personal Credentials</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                <ui-input label="First Name" placeholder="Enter first name" value="John" size="md"></ui-input>
                <ui-input label="Last Name" placeholder="Enter last name" value="Doe" size="md"></ui-input>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <ui-input label="Email Address" type="email" placeholder="john.doe@example.com" value="john.doe@enterprise.com" size="md"></ui-input>
                <ui-input label="Password" type="password" placeholder="••••••••••••" value="securepassword123" size="md"></ui-input>
              </div>
            </div>

            <!-- Section 2: Contact & Demographics -->
            <div>
              <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); font-weight: 700;">2. Contact & Regional Details</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-bottom: 16px;">
                <ui-pattern-input label="Intl. Contact Number" pattern="(###) ###-####" placeholder="(555) 123-4567" size="md"></ui-pattern-input>
                <ui-dropdown id="formRegionDropdown" label="Preferred Region" placeholder="Select a region..." size="md"></ui-dropdown>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
                <ui-number-input label="Daily API Request Limit" value="2500" min="100" max="50000" step="100" size="md" helper-text="Steps of 100 requests"></ui-number-input>
                <div style="display: flex; flex-direction: column;">
                  <label style="display: block; font-weight: 600; font-size: 12px; margin-bottom: 4px; color: var(--text-standard);">Session Timeout</label>
                  <div style="display: flex; align-items: center; justify-content: center; height: 100%; min-height: 48px;">
                    <ui-knob value="15" min="5" max="120" step="5" size="80" stroke-width="6" show-value="true" enable-wheel="true" value-suffix="m"></ui-knob>
                  </div>
                </div>
              </div>
            </div>

            <!-- Section 3: Security & Isolation -->
            <div>
              <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); font-weight: 700;">3. Security & Access Settings</h4>
              <div style="display: grid; grid-template-columns: 1.2fr 1fr; gap: 24px; margin-bottom: 16px;">
                <div>
                  <label style="display: block; font-weight: 700; font-size: 12px; margin-bottom: 8px; color: var(--text-standard);">Deployment Strategy</label>
                  <ui-radio-group value="cloud" size="md">
                    <ui-radio value="cloud" label="Cloud Infrastructure" description="Auto-scaled managed servers" checked glow size="md"></ui-radio>
                    <ui-radio value="on-premise" label="On-Premise Server" description="Private air-gapped hardware" size="md"></ui-radio>
                  </ui-radio-group>
                </div>
                <div>
                  <ui-otp-input label="Verification Code (2FA)" length="4" value="8402" size="md" helper-text="Quick account authentication pin"></ui-otp-input>
                </div>
              </div>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <ui-checkbox label="Enable hardware security key MFA bypass" checked="true" size="md"></ui-checkbox>
                <ui-checkbox label="Subscribe to global security vulnerability alerts" size="md"></ui-checkbox>
              </div>
            </div>

            <!-- Section 4: Preferences & Style -->
            <div>
              <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b); font-weight: 700;">4. Customization & Theme</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; margin-bottom: 16px;">
                <div>
                  <label style="display: block; font-weight: 600; font-size: 12px; margin-bottom: 8px; color: var(--text-standard);">Theme Interface</label>
                  <ui-button-toggle-group value="system" size="md" variant="outline">
                    <ui-button-toggle value="light" label="Light"></ui-button-toggle>
                    <ui-button-toggle value="dark" label="Dark"></ui-button-toggle>
                    <ui-button-toggle value="system" label="System"></ui-button-toggle>
                  </ui-button-toggle-group>
                </div>
                <ui-color-picker label="Custom Profile Accent" value="#10b981" size="md" show-swatches="true"></ui-color-picker>
              </div>
              
              <div style="margin-bottom: 16px;">
                <label style="display: block; font-weight: 600; font-size: 12px; margin-bottom: 8px; color: var(--text-standard);">Platform Experience Level</label>
                <ui-range-slider value="80" min="0" max="100" step="5" size="md"></ui-range-slider>
              </div>

              <div style="margin-bottom: 16px;">
                <label style="display: block; font-weight: 600; font-size: 12px; margin-bottom: 8px; color: var(--text-standard);">Profile Photo Upload</label>
                <ui-file-upload variant="compact" label="Upload Avatar" accept="image/*" size="md" max-files="1"></ui-file-upload>
              </div>

              <div style="display: flex; justify-content: space-between; align-items: center; padding: 12px 0; border-top: 1px solid var(--border-default, #e5e7eb);">
                <div>
                  <div style="font-weight: 600; font-size: 13px;">Receive System Communications</div>
                  <div style="font-size: 11px; color:var(--text-secondary,#64748b);">Weekly technical roundups and feature releases</div>
                </div>
                <ui-switch checked="true" size="md"></ui-switch>
              </div>
            </div>

            <!-- Section 5: Satisfaction -->
            <div style="background: rgba(16, 185, 129, 0.04); padding: 16px; border-radius: 12px; border: 1px solid rgba(16, 185, 129, 0.15); display: flex; align-items: center; justify-content: space-between;">
              <label style="font-weight: 600; font-size: 13px; color: #111827; margin: 0;">How satisfied are you with this framework?</label>
              <ui-rating value="5" max="5" size="lg"></ui-rating>
            </div>
          </div>
        </ui-dialog-box>
      </div>
    `;
    setTimeout(() => {
      document.getElementById('btnOpenForm')?.addEventListener('click', () => window.openDialog('formDialog'));
      
      const formRegionDropdown = document.getElementById('formRegionDropdown');
      if (formRegionDropdown) {
        formRegionDropdown.options = [
          { value: 'us', label: 'North America (Hub)', description: 'East-coast server cluster' },
          { value: 'eu', label: 'Europe (Central)', description: 'Frankfurt tier' },
          { value: 'ap', label: 'Asia Pacific (East)', description: 'Tokyo gateway' },
          { value: 'au', label: 'Oceania (South)', description: 'Sydney failover partition' }
        ];
      }
    }, 100);
  };

  window.showDialogPositions = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
         <div class="demo-block">
            <h3>Dialog Positions</h3>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
               <ui-button id="btnPosCenter" size="md" variant="outline" color="danger" label="Center"></ui-button>
               <ui-button id="btnPosTop" size="md" variant="outline" color="primary" label="Top"></ui-button>
               <ui-button id="btnPosBottom" size="md" variant="outline" color="success" label="Bottom"></ui-button>
               <ui-button id="btnPosRight" size="md" variant="outline" color="warning" label="Right"></ui-button>
               <ui-button id="btnPosTR" size="md" variant="outline" color="secondary" label="Top Right" style="--btn-bg: orange;"></ui-button>
            </div>
            
            <ui-dialog-box id="dPosCenter" position="center" dialog-title="Center" ok-text="Confirm" cancel-text="Exit" width="400px" icon-library="lucide"><div>Content</div></ui-dialog-box>
            <ui-dialog-box id="dPosTop" position="top" dialog-title="Top" ok-text="Confirm" cancel-text="Exit" width="400px" icon-library="lucide"><div>Content</div></ui-dialog-box>
            <ui-dialog-box id="dPosBottom" position="bottom" dialog-title="Bottom" ok-text="Confirm" cancel-text="Exit" width="400px" icon-library="lucide"><div>Content</div></ui-dialog-box>
            <ui-dialog-box id="dPosRight" position="right" dialog-title="Right Side" ok-text="Confirm" cancel-text="Exit" width="400px" height="100vh" style="--ui-dialog-border-radius:0;" icon-library="lucide"><div>Side Panel Style</div></ui-dialog-box>
            <ui-dialog-box id="dPosTR" position="top-right" dialog-title="Top Right" ok-text="Confirm" cancel-text="Exit" width="400px" icon-library="lucide"><div>Content</div></ui-dialog-box>
         </div>
       `;
    setTimeout(() => {
      const posMap = {
        btnPosCenter: 'dPosCenter',
        btnPosTop: 'dPosTop',
        btnPosBottom: 'dPosBottom',
        btnPosRight: 'dPosRight',
        btnPosTR: 'dPosTR',
      };
      Object.entries(posMap).forEach(([btnId, dialogId]) => {
        document.getElementById(btnId)?.addEventListener('click', () => window.openDialog(dialogId));
      });
    }, 100);
  };

  window.showDialogScroll = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    const longContent = Array(25)
      .fill(
        '<p style="color:var(--text-secondary,#64748b); font-size: 14px;">This is a paragraph of scrollable content used to demonstrate boundary management within the Zenith Dialog system. Enterprise layouts often require fixed headers and footers while the central content area remains scrollable.</p>',
      )
      .join('');
    container.innerHTML = `
         <div class="demo-block">
            <h3>📜 Scrolling Behaviors</h3>
            <p style="margin-bottom: 20px; color: #6b7280;">Choose how the dialog handles overflow: either the entire panel scrolls (Body) or only the content area (Paper).</p>
            <div style="display:flex; gap:12px; flex-wrap:wrap;">
                <ui-button id="btnOpenScrollPaper" size="md" variant="outline" color="success" label="Open Scroll Paper"></ui-button>
                <ui-button id="btnOpenScrollBody" size="md" variant="outline" color="success" label="Open Scroll Body"></ui-button>
            </div>
            
            <ui-dialog-box id="dScrollPaper" scroll-area="paper" dialog-title="Terms & Conditions" subtitle="Scroll Behavior: Paper" width="600px" icon="file-text" icon-library="lucide" ok-text="Agree & Continue" cancel-text="Decline">
                <div style="padding: 24px;">
                   <h4 style="margin-top:0">1. Acceptance of Terms</h4>
                   ${longContent}
                </div>
            </ui-dialog-box>
            
            <ui-dialog-box id="dScrollBody" scroll-area="body" dialog-title="Privacy Policy" subtitle="Scroll Behavior: Body" width="600px" icon="shield" icon-library="lucide" ok-text="Acknowledge" cancel-text="Close">
                <div style="padding: 24px;">
                   <h4 style="margin-top:0">1. Data Sovereignty</h4>
                   ${longContent}
                </div>
            </ui-dialog-box>
         </div>
       `;
    setTimeout(() => {
      document.getElementById('btnOpenScrollPaper')?.addEventListener('click', () => window.openDialog('dScrollPaper'));
      document.getElementById('btnOpenScrollBody')?.addEventListener('click', () => window.openDialog('dScrollBody'));
    }, 100);
  };

  window.showAdvancedDialogs = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
         <div class="demo-block">
            <h3>Advanced Behaviors</h3>
            <div style="display:flex; gap:10px; flex-wrap:wrap;">
                <ui-button id="btnOpenStatic" size="md" variant="outline" color="warning" label="Static Backdrop"></ui-button>
                <ui-button id="btnOpenDraggable" size="md" variant="outline" color="secondary" label="Draggable" style="--btn-bg: var(--accent-purple,#8b5cf6);"></ui-button>
                <ui-button id="btnOpenResizable" size="md" variant="outline" color="secondary" label="Resizable" style="--btn-bg: var(--accent-pink,#ec4899);"></ui-button>
                <ui-button id="btnOpenCombo" size="md" variant="outline" color="secondary" label="Drag & Resize" style="--btn-bg: #111827;"></ui-button>
            </div>
            
            <ui-dialog-box id="dStatic" backdrop="static" dialog-title="Static Backdrop (Shake on click)" ok-text="Understood" icon-library="lucide">
                <div><p>Try clicking outside. I won't close, but I will shake to notify you!</p><p>Use Close button or Escape key.</p></div>
            </ui-dialog-box>
            
            <ui-dialog-box id="dDraggable" draggable="true" dialog-title="Draggable Dialog" ok-text="Got it" cancel-text="Close" icon-library="lucide">
                <div><p>Grab the header to move me around.</p><p><i>(Now constrained to viewport!)</i></p></div>
            </ui-dialog-box>
            
            <ui-dialog-box id="dResizable" resizable="true" dialog-title="Resizable Dialog" ok-text="Done" cancel-text="Cancel" icon-library="lucide">
                <div><p>Grab the bottom-right corner to resize me.</p></div>
            </ui-dialog-box>
            
             <ui-dialog-box id="dCombo" draggable="true" resizable="true" dialog-title="Power User" ok-text="Save Layout" cancel-text="Reset" icon-library="lucide">
                <div><p>I can be moved and resized.</p></div>
            </ui-dialog-box>
         </div>
       `;
    setTimeout(() => {
      const advMap = {
        btnOpenStatic: 'dStatic',
        btnOpenDraggable: 'dDraggable',
        btnOpenResizable: 'dResizable',
        btnOpenCombo: 'dCombo',
      };
      Object.entries(advMap).forEach(([btnId, dialogId]) => {
        document.getElementById(btnId)?.addEventListener('click', () => window.openDialog(dialogId));
      });
    }, 100);
  };

  window.showPremiumFeatures = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>💎 Premium Capabilities</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Experience the high-fidelity features designed for professional applications.</p>
        
        <!-- Feature 1: Async Workflow -->
        <div style="background:var(--accent-blue-soft,#eff6ff); border: 1px solid #bfdbfe; border-radius: 8px; padding: 16px; margin-bottom: 16px;">
           <h4 style="margin-top:0; color:var(--accent-blue,#1e40af);">🔄 Async Validation & Loading</h4>
           <p style="font-size: 14px; color: #10b981;">Simulates a server request with button loading states and data persistence.</p>
           <ui-button id="btnOpenAsync" size="md" variant="outline" color="primary" label="Test Async Workflow" size="md" variant="outline"></ui-button>
        </div>

        <!-- Feature 2: Transitions -->
        <div style="background: var(--accent-pink-soft, #fdf4ff); border: 1px solid var(--accent-pink-border, #f0abfc); border-radius: 8px; padding: 16px; margin-bottom: 16px;">
           <h4 style="margin-top:0; color: var(--accent-pink, #86198f);">✨ Animation Gallery</h4>
           <p style="font-size: 14px; color: var(--accent-pink, #c026d3);">Smooth entry and exit transitions for different contexts.</p>
           <div style="display: flex; gap: 10px; flex-wrap: wrap;">
             <ui-button id="btnOpenAnimScale" size="md" variant="outline" color="secondary" label="Scale (Default)" style="--btn-bg: var(--bg-primary, white); --btn-border: var(--accent-pink, #e879f9); --btn-text: var(--accent-pink, #a21caf);"></ui-button>
             <ui-button id="btnOpenAnimFade" size="md" variant="outline" color="secondary" label="Fade" style="--btn-bg: var(--bg-primary, white); --btn-border: var(--accent-pink, #e879f9); --btn-text: var(--accent-pink, #a21caf);"></ui-button>
             <ui-button id="btnOpenAnimSlideR" size="md" variant="outline" color="secondary" label="Slide Right (Drawer)" style="--btn-bg: var(--bg-primary, white); --btn-border: var(--accent-pink, #e879f9); --btn-text: var(--accent-pink, #a21caf);"></ui-button>
             <ui-button id="btnOpenAnimSlideB" size="md" variant="outline" color="secondary" label="Slide Bottom (Sheet)" style="--btn-bg: var(--bg-primary, white); --btn-border: var(--accent-pink, #e879f9); --btn-text: var(--accent-pink, #a21caf);"></ui-button>
           </div>
        </div>

        <!-- Feature 3: Window Management -->
        <div style="background:var(--accent-green-soft,#f0fdf4); border: 1px solid #86efac; border-radius: 8px; padding: 16px;">
           <h4 style="margin-top:0; color:var(--accent-green,#15803d);">🪟 Persistent Window Widget</h4>
           <p style="font-size: 14px; color: #16a34a;">Draggable, Resizable, Non-Modal, and Persistent state (Keep Mounted).</p>
           <ui-button id="btnOpenWidget" size="md" variant="outline" color="success" label="Open Main Widget" size="md" variant="outline"></ui-button>
           <ui-button id="btnSpawnWidget" size="md" variant="outline" color="success" label="Spawn New Note (+)" size="md" variant="outline" style="margin-left: 10px; --btn-bg: var(--accent-green,#15803d);"></ui-button>
        </div>

        <!-- Dialogs -->
        
        <!-- Async Dialog -->
        <ui-dialog-box id="dAsync" dialog-title="Edit Profile" ok-text="Save Changes" cancel-text="Cancel" keep-mounted="true" width="500px" icon-library="lucide">
           <div style="display: flex; flex-direction: column; gap: 12px;">
              <div>
                 <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: #374151;">Full Name</label>
                 <ui-input id="profName" value="John Doe"></ui-input>
              </div>
              <div>
                 <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px; color: #374151;">Email</label>
                 <ui-input type="email" id="profEmail" value="john@company.com"></ui-input>
              </div>
              <div style="font-size: 13px; color: #6b7280; background:var(--bg-secondary,#f9fafb); padding: 8px; border-radius: 4px; display: flex; align-items: center; gap: 8px;">
                 <ui-icon name="info" library="lucide" size="14px"></ui-icon>
                 <span><b>Try this:</b> modify values, click Save to see loading, then open again. Values persist!</span>
              </div>
           </div>
        </ui-dialog-box>

        <!-- Animation Dialogs -->
        <ui-dialog-box id="dAnimScale" animation="scale" dialog-title="Scale Animation" ok-text="Close" width="400px" icon-library="lucide">
           <div>Standard modern dialog entrance.</div>
        </ui-dialog-box>

        <ui-dialog-box id="dAnimFade" animation="fade" dialog-title="Fade Animation" ok-text="Close" width="400px" icon-library="lucide">
           <div>Subtle fade-in effect.</div>
        </ui-dialog-box>

        <ui-dialog-box id="dAnimSlideR" animation="slide-right" position="right" height="100vh" style="--ui-dialog-border-radius:0;" dialog-title="Side Drawer" ok-text="Close Drawer" icon-library="lucide">
           <div style="padding-bottom: 20px;">
              <p>Ideal for menus, filters, or details panels.</p>
              <p>Moves in from the side.</p>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="dAnimSlideB" animation="slide-bottom" position="bottom" dialog-title="Bottom Sheet" ok-text="Agree & Close" cancel-text="Dismiss" width="100%" style="--ui-dialog-border-radius: 16px 16px 0 0;" icon-library="lucide">
           <div style="text-align: center; padding: 20px;">
              <p>Great for mobile actions or share sheets.</p>
           </div>
        </ui-dialog-box>

        <!-- Widget Dialog (Persistent Notepad) -->
        <ui-dialog-box id="dWidget" 
          dialog-title="📝 Sticky Notes" 
          backdrop="none" 
          draggable="true" 
          resizable="true" 
          keep-mounted="true" 
          width="300px" 
          height="300px"
          icon-library="lucide"
          style="--ui-dialog-border-radius: 8px; box-shadow: 0 10px 40px rgba(0,0,0,0.2);">
           <div style="height: 100%; display: flex; flex-direction: column;">
              <ui-input variant="plain" multiline="true" placeholder="Type your notes here... I won't lose them if you close me!" 
                style="flex: 1; width: 100%; height: 100%; padding: 4px; font-family: sans-serif;"></ui-input>
           </div>
        </ui-dialog-box>

      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnOpenAsync')?.addEventListener('click', () => window.openDialog('dAsync'));
      document.getElementById('btnOpenAnimScale')?.addEventListener('click', () => window.openDialog('dAnimScale'));
      document.getElementById('btnOpenAnimFade')?.addEventListener('click', () => window.openDialog('dAnimFade'));
      document.getElementById('btnOpenAnimSlideR')?.addEventListener('click', () => window.openDialog('dAnimSlideR'));
      document.getElementById('btnOpenAnimSlideB')?.addEventListener('click', () => window.openDialog('dAnimSlideB'));
      document.getElementById('btnOpenWidget')?.addEventListener('click', () => window.openDialog('dWidget'));
      document.getElementById('btnSpawnWidget')?.addEventListener('click', () => window.spawnWidget());

      const dAsync = document.getElementById('dAsync');

      if (dAsync) {
        dAsync.addEventListener('ok', () => {
          const name = document.getElementById('profName').value;
          // Set Loading
          dAsync.okLoading = true;

          // Simulate API call
          setTimeout(() => {
            dAsync.okLoading = false;
            alert(`Saved profile for ${name}!`);
            dAsync.hide();
          }, 1500);
        });
      }
    }, 100);
  };

  // Dynamic Widget Spawner
  window.spawnWidget = async function () {
    const id = 'note-' + Date.now();
    const dialog = document.createElement('ui-dialog-box');
    dialog.id = id;
    dialog.setAttribute('dialog-title', `Note ${Math.floor(Math.random() * 100)}`);
    dialog.setAttribute('backdrop', 'none');
    dialog.setAttribute('draggable', 'true');
    dialog.setAttribute('resizable', 'true');
    dialog.setAttribute('keep-mounted', 'true');
    dialog.setAttribute('show-menu', 'true'); // Enable menu button

    // Native Menu Items (New Feature)
    const menuItems = [
      { label: 'Color: Yellow', icon: 'square', id: 'yellow' },
      { label: 'Color: Blue', icon: 'square', id: 'blue' },
      { label: 'Color: Red', icon: 'square', id: 'red' },
      { type: 'separator' },
      { label: 'Close Note', icon: 'x', variant: 'danger', id: 'close' },
    ];
    dialog.setAttribute('menu-items', JSON.stringify(menuItems));

    dialog.setAttribute('width', '250px');
    dialog.setAttribute('height', '200px');
    dialog.style.setProperty('--ui-dialog-border-radius', '8px');
    dialog.style.boxShadow = '0 10px 40px rgba(0,0,0,0.2)';

    // Random position initial
    const top = 100 + Math.random() * 200;
    const left = 100 + Math.random() * 400;
    dialog.style.top = `${top}px`;
    dialog.style.left = `${left}px`;
    dialog.style.position = 'fixed';
    dialog.style.margin = '0'; // override default centering

    dialog.innerHTML = `
           <div style="height: 100%; display: flex; flex-direction: column;">
              <ui-input variant="plain" multiline="true" placeholder="New note..." 
                style="flex: 1; width: 100%; height: 100%; padding: 4px; font-family: sans-serif; --ui-input-bg: var(--accent-yellow-soft,#fffbeb);"></ui-input>
           </div>
        `;

    // Action Handler
    dialog.addEventListener('menuAction', e => {
      const action = e.detail?.id; // Action comes from action detail
      const input = dialog.querySelector('ui-input');
      if (input) {
        if (action === 'yellow') input.style.setProperty('--ui-input-bg', '#fffbeb');
        if (action === 'blue') input.style.setProperty('--ui-input-bg', '#eff6ff');
        if (action === 'red') input.style.setProperty('--ui-input-bg', '#fef2f2');
      }
    });

    // Basic menu event might still fire, but we use menuAction for built-in items

    document.body.appendChild(dialog);
    if (typeof dialog.show !== 'function') {
      await customElements.whenDefined('ui-dialog-box');
    }
    dialog.show();
  };

  // --- Parent/Child Dialog Size Demo ---
  window.showParentChildDialogDemo = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Parent/Child Dialog Size Demo</h3>
        <p>Open a parent dialog and launch a child dialog with a user-defined size.</p>
        <ui-button id="openParentDialogBtn" size="md" variant="outline" color="success" label="Open Parent Dialog" size="md" variant="outline"></ui-button>
      </div>
    `;
    setTimeout(() => {
      const btn = document.getElementById('openParentDialogBtn');
      if (btn) {
        btn.onclick = () => {
          // Create Parent Dialog
          const parentDialog = document.createElement('ui-dialog-box');
          parentDialog.setAttribute('dialog-title', 'Parent Dialog');
          parentDialog.setAttribute('width', '650px');
          parentDialog.setAttribute('size', 'custom');
          parentDialog.setAttribute('icon-library', 'lucide');
          parentDialog.setAttribute('status', 'info');
          parentDialog.innerHTML = `
            <div style="padding: 16px;">
              <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                <span>Child Dialog Width:</span>
                <ui-input id="childWidthInput" value="400px" style="width: 100px;"></ui-input>
              </label>
              <label style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                <span>Child Dialog Height:</span>
                <ui-input id="childHeightInput" value="300px" style="width: 100px;"></ui-input>
              </label>
              <ui-button id="openChildDialogBtn" size="md" variant="outline" color="primary" label="Open Child Dialog" size="md" variant="outline" style="--btn-bg: var(--accent-indigo,#6366f1);"></ui-button>
            </div>
          `;
          document.body.appendChild(parentDialog);
          setTimeout(() => {
            parentDialog.show();
            const openChildBtn = parentDialog.querySelector('#openChildDialogBtn');
            if (openChildBtn) {
              openChildBtn.onclick = () => {
                const width = parentDialog.querySelector('#childWidthInput').value || '400px';
                const height = parentDialog.querySelector('#childHeightInput').value || '300px';

                // Create Child Dialog with specific nested properties
                const childDialog = document.createElement('ui-dialog-box');
                childDialog.id = 'demo-child-dialog';
                childDialog.setAttribute('dialog-title', 'Child Dialog');
                childDialog.setAttribute('width', width);
                childDialog.setAttribute('height', height);
                childDialog.setAttribute('size', 'custom');
                childDialog.setAttribute('icon-library', 'lucide');
                childDialog.setAttribute('icon', 'layers');
                childDialog.setAttribute('status', 'success');
                childDialog.setAttribute('is-nested', 'true'); // Visually differentiates nested dialogs
                childDialog.setAttribute('z-index', '20000'); // Ensure it sits above parent
                childDialog.setAttribute('animation', 'scale');

                childDialog.innerHTML = `
                  <div style="padding: 20px; font-family: sans-serif; background:var(--accent-green-soft,#f0fdf4); height: 100%; border-radius: 0 0 8px 8px;">
                    <p style="margin: 0 0 16px; color: var(--accent-green,#166534); font-weight: 500;">This is the child dialog, running inside the parent's context.</p>
                    <div style="background:var(--bg-primary,white); padding: 12px; border-radius: 6px; border: 1px solid #bbf7d0;">
                       <div style="font-size: 13px; color: #6b7280; margin-bottom: 4px;">Configured Dimensions:</div>
                       <div style="font-family: monospace; font-weight: bold; color:var(--accent-green,#059669);">Width: ${width}</div>
                       <div style="font-family: monospace; font-weight: bold; color:var(--accent-green,#059669);">Height: ${height}</div>
                    </div>
                    <p style="font-size: 12px; color: #666; margin-top: 20px;">
                      Typically, nested dialogs should be smaller than their parents to maintain visual hierarchy.
                    </p>
                  </div>
                `;
                document.body.appendChild(childDialog);
                setTimeout(() => childDialog.show(), 50);

                childDialog.addEventListener('dialogClosed', () => {
                  document.body.removeChild(childDialog);
                });
              };
            }
          }, 50);
        };
      }
    }, 50);
  };

  window.showAuthSessionDemo = function () {
    const dialog = document.createElement('ui-dialog-box');
    dialog.setAttribute('type', 'session');
    dialog.setAttribute('dialog-title', 'Session Security');
    dialog.setAttribute('icon-library', 'lucide');
    dialog.setAttribute('icon', 'shield-check');
    dialog.setAttribute('status', 'info');
    dialog.setAttribute('session-timeout', '10'); // Short for demo
    dialog.setAttribute('ok-text', 'Stay Logged In');
    dialog.setAttribute('cancel-text', 'Logout Now');

    dialog.innerHTML = `
      <div style="padding: 10px 0;">
        <p>Your session is about to expire due to inactivity. For your security, we will automatically log you out once the timer reaches zero.</p>
        <div style="background:var(--accent-yellow-soft,#fffbeb); border: 1px solid #fde68a; padding: 12px; border-radius: 6px; display: flex; align-items: flex-start; gap: 10px;">
           <span style="font-size: 20px;">⚠️</span>
           <div>
              <div style="font-weight: 600; color:var(--accent-yellow,#92400e);">Unsaved data may be lost</div>
              <div style="font-size: 13px; color:var(--accent-yellow,#b45309);">Please click 'Stay Logged In' to extend your session validity.</div>
           </div>
        </div>
      </div>
    `;

    document.body.appendChild(dialog);
    setTimeout(() => dialog.show(), 50);

    dialog.addEventListener('dialogClosed', () => {
      document.body.removeChild(dialog);
    });
  };

  // Keep the original nested dialog demo
  window.showNestedDialogs = function () {
    const openLevel = level => {
      const d = document.createElement('ui-dialog-box');
      d.setAttribute('dialog-title', `Level ${level} Dialog`);
      d.setAttribute('width', '350px');
      d.setAttribute('icon-library', 'lucide');
      d.setAttribute('status', level % 2 === 0 ? 'info' : 'default'); // Alternate styles

      // NEW: Enable high-fidelity nesting visuals for Level 2+
      if (level > 1) {
        d.setAttribute('is-nested', 'true');
      }

      d.innerHTML = `
            <div style="padding: 10px;">
                <p><strong>Stack Level: ${level}</strong></p>
                <p>This dialog should appear above Level ${level - 1}.</p>
                <div style="display: flex; gap: 10px; margin-top: 15px;">
                    <ui-button class="btn-next-level" size="md" variant="outline" color="secondary" label="Open Level ${level + 1} ➕" style="flex: 1; --btn-bg: var(--accent-pink,#ec4899);"></ui-button>
                    <ui-button class="btn-close-dialog" size="md" variant="outline" color="secondary" label="Close" style="--btn-bg: #6b7280;"></ui-button>
                </div>
            </div>
        `;
      document.body.appendChild(d);

      setTimeout(() => {
        d.show();
        const btnNext = d.querySelector('.btn-next-level');
        if (btnNext) {
          btnNext.onclick = () => openLevel(level + 1);
        }
        const btnClose = d.querySelector('.btn-close-dialog');
        if (btnClose) {
          btnClose.onclick = () => d.hide();
        }
      }, 50);
    };

    openLevel(1);
  };

  window.showInteractiveDialog = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 20px; padding: 28px; border:1px solid var(--border-default,#e2e8f0);">
        <h3 style="margin-bottom: 24px; font-weight: 800; letter-spacing: -0.02em; color:var(--text-primary,#1e293b);">🎮 Custom Dialog Builder</h3>
        
        <div style="background:var(--bg-secondary,#f8fafc); border:1px solid var(--border-default,#e2e8f0); border-radius: 20px; padding: 28px; box-shadow: 0 10px 30px rgba(0,0,0,0.4); margin-bottom: 30px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 24px; align-items: flex-end;">
            
            <!-- Basic Controls -->
            <div class="control-group">
              <label style="display: flex; flex-direction: column; gap: 8px;">
                <span style="font-size: 11px; font-weight: 800; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.1em;">Window Size</span>
                <ui-dropdown id="iDSize" value="sm" full-width="true" options='[
                  {"label": "Custom", "value": "custom"},
                  {"label": "XXXS (160px)", "value": "xxxs"},
                  {"label": "XXS (240px)", "value": "xxs"},
                  {"label": "XS (320px)", "value": "xs"},
                  {"label": "SM (480px)", "value": "sm"},
                  {"label": "MD (768px)", "value": "md"},
                  {"label": "LG (1024px)", "value": "lg"},
                  {"label": "XL (1280px)", "value": "xl"},
                  {"label": "XXL (1440px)", "value": "xxl"},
                  {"label": "XXXL (1600px)", "value": "xxxl"},
                  {"label": "Fill (90%)", "value": "fill"}
                ]'></ui-dropdown>
              </label>
            </div>

            <div class="control-group">
              <label style="display: flex; flex-direction: column; gap: 8px;">
                <span style="font-size: 11px; font-weight: 800; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.1em;">Aesthetic Variant</span>
                <ui-dropdown id="iDVariant" value="soft" full-width="true" options='[
                   {"label": "Soft (Modern)", "value": "soft"},
                   {"label": "Outline (Clean)", "value": "outline"},
                   {"label": "Filled (Bold)", "value": "filled"},
                   {"label": "Glass (Premium)", "value": "glass"}
                ]'></ui-dropdown>
              </label>
            </div>

            <div class="control-group">
              <label style="display: flex; flex-direction: column; gap: 8px;">
                <span style="font-size: 11px; font-weight: 800; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.1em;">Semantic Status</span>
                <ui-dropdown id="iDStatus" value="default" full-width="true" options='[
                  {"label": "Default", "value": "default"},
                  {"label": "Info Blue", "value": "info"},
                  {"label": "Success Green", "value": "success"},
                  {"label": "Warning Yellow", "value": "warning"},
                  {"label": "Danger Red", "value": "error"}
                ]'></ui-dropdown>
              </label>
            </div>

            <div class="control-group">
              <label style="display: flex; flex-direction: column; gap: 8px;">
                <span style="font-size: 11px; font-weight: 800; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.1em;">Background Accent</span>
                <ui-color-picker id="iDBgColor" value="#ffffff"></ui-color-picker>
              </label>
            </div>

            <!-- Settings Toggles -->
            <div class="control-group" style="grid-column: 1 / -1; display: flex; flex-direction:row; flex-wrap: wrap; gap: 20px; padding: 20px; background:var(--bg-tertiary,#f1f5f9); border-radius: 12px; margin-top: 10px; border:1px solid var(--border-subtle,#f1f5f9);">
              <ui-checkbox id="iDDraggable" label="Draggable" checked></ui-checkbox>
              <ui-checkbox id="iDResizable" label="Resizable"></ui-checkbox>
              <ui-checkbox id="iDShowHeader" label="Header" checked></ui-checkbox>
              <ui-checkbox id="iDShowFooter" label="Footer" checked></ui-checkbox>
              <ui-checkbox id="iDShowMin" label="Minimize" checked></ui-checkbox>
              <ui-checkbox id="iDShowMax" label="Maximize" checked></ui-checkbox>
              <ui-checkbox id="iDShowClose" label="Close" checked></ui-checkbox>
            </div>

            <!-- Action Button -->
            <div class="control-group" style="grid-column: 1 / -1;">
              <ui-button id="btnOpenInteractive" variant="primary" color="success" label="Launch Masterpiece Dialog" icon="sparkles" icon-library="lucide" full-width="true" size="lg"></ui-button>
            </div>
          </div>
        </div>

        <div id="interactiveDialogContainer"></div>
        
        <div style="margin-top: 20px; background: #0f172a; padding: 20px; border-radius: 12px; position: relative; box-shadow: 0 10px 25px rgba(0,0,0,0.2);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="color:var(--text-secondary,#64748b); font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.15em;">Generated Implementation</span>
            <ui-button id="btnCopyDialogCode" variant="outline" color="primary" label="Copy Code" size="md" style="--btn-text: #38bdf8;"></ui-button>
          </div>
          <code id="dialogCodeBlock" style="color:var(--text-secondary,#64748b); font-family: 'JetBrains Mono', monospace; font-size: 12px; display: block; overflow-x: auto; white-space: pre-wrap; line-height: 1.6;"></code>
        </div>

        <div id="eventLog" style="margin-top: 20px; padding: 16px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
          <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
            <div style="width: 8px; height: 8px; border-radius: 50%; background: #22c55e;"></div>
            <h4 style="margin: 0; font-size: 12px; font-weight: 800; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">Live Event Stream</h4>
          </div>
          <div id="eventLogContent" style="font-family: 'JetBrains Mono', monospace; font-size: 11px; color:var(--text-secondary,#64748b); max-height: 120px; overflow-y: auto;">
            <div style="opacity: 0.5;">Awaiting interactions...</div>
          </div>
        </div>
      </div>
    `;

    // Rebind event listeners
    setTimeout(() => {
      document.getElementById('btnOpenInteractive')?.addEventListener('click', () => window.openDialog('interactiveDialog'));
      document.getElementById('btnCopyDialogCode')?.addEventListener('click', () => window.copyDialogCode());

      // Auto-update code block when inputs change
      const inputs = ['iDSize', 'iDVariant', 'iDStatus', 'iDBgColor', 'iDDraggable', 'iDResizable', 'iDShowHeader', 'iDShowFooter', 'iDShowMin', 'iDShowMax', 'iDShowClose'];
      inputs.forEach(id => {
        document.getElementById(id)?.addEventListener('dropdownChange', () => window.updateInteractiveDialog());
        document.getElementById(id)?.addEventListener('checkboxChange', () => window.updateInteractiveDialog());
        document.getElementById(id)?.addEventListener('colorChange', () => window.updateInteractiveDialog());
      });
    }, 100);

    updateInteractiveDialog();
  };

  window.updateInteractiveDialog = function () {
    const size = document.getElementById('iDSize')?.value || 'custom';
    const variant = document.getElementById('iDVariant')?.value || 'outlined';
    const status = document.getElementById('iDStatus')?.value || 'default';
    const backdrop = document.getElementById('iDBackdrop')?.value || 'default';
    const position = document.getElementById('iDPosition')?.value || 'center';
    const okText = document.getElementById('iDOkText')?.value;
    const cancelText = document.getElementById('iDCancelText')?.value;
    const bgColor = document.getElementById('iDBgColor')?.value || '#ffffff';

    const draggable = document.getElementById('iDDraggable')?.checked || false;
    const resizable = document.getElementById('iDResizable')?.checked || false;
    const showHeader = document.getElementById('iDShowHeader')?.checked;
    const showFooter = document.getElementById('iDShowFooter')?.checked;
    const showMenu = document.getElementById('iDShowMenu')?.checked || false;
    const showMin = document.getElementById('iDShowMin')?.checked;
    const showMax = document.getElementById('iDShowMax')?.checked;
    const showClose = document.getElementById('iDShowClose')?.checked;

    const container = document.getElementById('interactiveDialogContainer');
    if (container) {
      // Re-create the element to apply changes properly
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }

      const dialog = document.createElement('ui-dialog-box');
      dialog.id = 'interactiveDialog';
      if (size !== 'custom') dialog.setAttribute('size', size);
      dialog.setAttribute('variant', variant);
      dialog.setAttribute('status', status);
      dialog.setAttribute('backdrop', backdrop);
      dialog.setAttribute('position', position);
      if (okText) dialog.setAttribute('ok-text', okText);
      if (cancelText) dialog.setAttribute('cancel-text', cancelText);
      if (bgColor !== '#ffffff') dialog.setAttribute('background-color', bgColor);

      if (draggable) dialog.setAttribute('draggable', '');
      if (resizable) dialog.setAttribute('resizable', '');
      if (showHeader === false) dialog.setAttribute('show-header', 'false'); // defaults true
      if (showFooter === false) dialog.setAttribute('show-footer', 'false');
      if (showMenu) {
        dialog.setAttribute('show-menu', 'true');
        // Provide example menu items so the button works
        const menuItems = [
          { label: 'Action 1', id: 'act1', icon: 'zap' },
          { label: 'Action 2', id: 'act2', icon: 'flag' },
          { type: 'separator' },
          { label: 'Close', id: 'close', icon: 'x', variant: 'danger' },
        ];
        dialog.setAttribute('menu-items', JSON.stringify(menuItems));
      }
      if (showMin === false) dialog.setAttribute('show-minimize', 'false');
      if (showMax === false) dialog.setAttribute('show-maximize', 'false');
      if (showClose === false) dialog.setAttribute('show-close', 'false');
      dialog.setAttribute('dialog-title', `Dialog`);

      // Content
      const content = document.createElement('div');
      content.innerHTML = `<p>Interact with controls above.</p><p>Size: ${size}</p>`;
      dialog.appendChild(content);

      // Always provide a default close button if none specified to avoid trapped dialog
      if (!okText && !cancelText) {
        dialog.setAttribute('ok-text', 'Close');
      }

      container.appendChild(dialog);

      // Events attachment
      const iDSize = document.getElementById('iDSize');
      const iDVariant = document.getElementById('iDVariant');
      const iDStatus = document.getElementById('iDStatus');
      const iDBackdrop = document.getElementById('iDBackdrop');
      const iDPosition = document.getElementById('iDPosition');
      const iDOkText = document.getElementById('iDOkText');
      const iDCancelText = document.getElementById('iDCancelText');

      const checkboxes = ['iDDraggable', 'iDResizable', 'iDShowHeader', 'iDShowFooter', 'iDShowMenu', 'iDShowMin', 'iDShowMax', 'iDShowClose'];

      if (iDSize) iDSize.addEventListener('dropdownChange', updateInteractiveDialog);
      if (iDVariant) iDVariant.addEventListener('dropdownChange', updateInteractiveDialog);
      if (iDStatus) iDStatus.addEventListener('dropdownChange', updateInteractiveDialog);
      if (iDBackdrop) iDBackdrop.addEventListener('dropdownChange', updateInteractiveDialog);
      if (iDPosition) iDPosition.addEventListener('dropdownChange', updateInteractiveDialog);
      if (iDOkText) iDOkText.addEventListener('inputChange', updateInteractiveDialog);
      if (iDCancelText) iDCancelText.addEventListener('inputChange', updateInteractiveDialog);
      if (document.getElementById('iDBgColor')) document.getElementById('iDBgColor').addEventListener('colorChange', updateInteractiveDialog);

      checkboxes.forEach(id => {
        const el = document.getElementById(id);
        if (el) el.addEventListener('checkboxChange', updateInteractiveDialog);
      });

      dialog.setAttribute('icon-library', 'lucide');

      // Events
      dialog.addEventListener('menu', () => window.logEvent('Menu button clicked'));
      dialog.addEventListener('ok', () => window.logEvent('OK Clicked'));
      dialog.addEventListener('cancel', () => window.logEvent('Cancel Clicked'));
      dialog.addEventListener('dialogClosed', () => window.logEvent('Dialog Closed'));
      dialog.addEventListener('dialogMaximized', e => window.logEvent(`Maximized: ${e.detail.maximized}`));
      dialog.addEventListener('dialogMinimized', e => window.logEvent(`Minimized: ${e.detail.minimized}`));

      // Generate code block
      const codeBlock = document.getElementById('dialogCodeBlock');
      if (codeBlock) {
        let props = '';
        if (size !== 'custom') props += ` size="${size}"`;
        if (variant !== 'outlined') props += ` variant="${variant}"`;
        if (status !== 'default') props += ` status="${status}"`;
        if (backdrop !== 'default') props += ` backdrop="${backdrop}"`;
        if (position !== 'center') props += ` position="${position}"`;
        if (okText) props += ` ok-text="${okText}"`;
        else if (!cancelText) props += ` ok-text="Close"`;
        if (cancelText) props += ` cancel-text="${cancelText}"`;
        if (bgColor !== '#ffffff') props += ` background-color="${bgColor}"`;
        if (draggable) props += ' draggable';
        if (resizable) props += ' resizable';
        if (showHeader === false) props += ' show-header="false"';
        if (showFooter === false) props += ' show-footer="false"';
        if (showMenu) props += ' show-menu="true"';
        if (showMin === false) props += ' show-minimize="false"';
        if (showMax === false) props += ' show-maximize="false"';
        if (showClose === false) props += ' show-close="false"';

        codeBlock.innerText = `<ui-dialog-box${props} dialog-title="Dialog Title" icon-library="lucide">
  <div>Dialog content goes here</div>
</ui-dialog-box>`;
      }
    }
  };

  window.copyDialogCode = () => {
    const code = document.getElementById('dialogCodeBlock').innerText;
    const btn = document.getElementById('copyDialogBtn');
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

  window.showApexShowcase = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🌌 Apex Tier: Application Framework</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Transforming the dialog into a full-featured application frame with Toolbars, Side-Navs, and Edge Snapping.</p>
        
        <div style="display: flex; gap: 15px; flex-wrap: wrap;">
           <ui-button id="btnLaunchApexApp" size="md" variant="outline" color="primary" label="🚀 Launch Master/Detail App" style="--btn-bg: linear-gradient(to right, #10b981, #8b5cf6);"></ui-button>
           <ui-button id="btnLaunchSnapping" size="md" variant="outline" color="secondary" label="🧲 Test Edge Snapping" style="--btn-bg: #111827;"></ui-button>
        </div>

        <!-- Apex Master/Detail Dialog -->
        <ui-dialog-box id="dApexFull" 
          dialog-title="Cloud Console v2.0" 
          layout="side-nav" 
          show-toolbar="true" 
          show-status-bar="true" 
          size="lg"
          draggable="true"
          resizable="true"
          ok-text="Save Assets"
          cancel-text="Dismiss"
          icon-library="lucide">
          
          <div slot="side-nav" style="padding: 16px; display: flex; flex-direction: column; gap: 8px;">
            <div style="padding: 10px; background: rgba(0,0,0,0.05); border-radius: 6px; font-weight: 600; font-size: 13px;">📁 Projects</div>
            <div style="padding: 10px; border-radius: 6px; font-size: 13px; color: #666; cursor: pointer;">🌐 Domains</div>
            <div style="padding: 10px; border-radius: 6px; font-size: 13px; color: #666; cursor: pointer;">🔐 Security</div>
            <div style="padding: 10px; border-radius: 6px; font-size: 13px; color: #666; cursor: pointer;">⚙️ Settings</div>
          </div>

          <div slot="toolbar" style="display: flex; align-items: center; gap: 8px; width: 100%;">
             <ui-button size="md" variant="outline" color="secondary">
                <ui-icon name="plus" library="lucide" size="14px" slot="prefix"></ui-icon> New Resource
             </ui-button>
             <ui-button size="md" variant="outline" color="secondary" label="Refresh"></ui-button>
             <div style="flex: 1;"></div>
             <ui-input placeholder="Search resources..." style="width: 200px;"></ui-input>
          </div>

          <div style="padding: 24px;">
             <h2>Main Content Area</h2>
             <p>This dialog uses <code>layout="side-nav"</code> which automatically renders the sidebar slot.</p>
             <div style="border: 1px dashed #ccc; padding: 40px; text-align: center; border-radius: 12px; margin-top: 20px; color: #999;">
                Dashboard Charts / Data Grid would go here.
             </div>
             
             <ui-button id="btnForceConfirm" size="md" variant="outline" color="danger" label="Force Sub-Overlay Confirmation" style="margin-top: 20px;"></ui-button>
          </div>

          <div slot="status-bar" style="display: flex; align-items: center; gap: 15px; width: 100%;">
             <span>Ready</span>
             <span style="display: flex; align-items: center; gap: 4px;"><ui-icon name="database" library="lucide" size="12px"></ui-icon> connected: us-east-1</span>
             <div style="flex: 1;"></div>
             <span>Last sync: 2s ago</span>
          </div>

        </ui-dialog-box>

        <!-- Snapping Demo -->
        <ui-dialog-box id="dSnapping" 
          dialog-title="Window Manager" 
          draggable="true" 
          snap-to-edges="true"
          width="400px" 
          icon-library="lucide">
          <div style="padding: 20px;">
             <h3>Try Edge Snapping! 🧲</h3>
             <p>Drag this dialog to the <b>Top, Left, or Right</b> edges of your screen.</p>
             <div style="background:var(--accent-yellow-soft,#fffbeb); border: 1px solid #fde68a; padding: 12px; border-radius: 8px; font-size: 13px; color:var(--accent-yellow,#92400e);">
                A blue highlight bar will appear to show where the window will snap.
             </div>
          </div>
        </ui-dialog-box>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnLaunchApexApp')?.addEventListener('click', () => window.openDialog('dApexFull'));
      document.getElementById('btnLaunchSnapping')?.addEventListener('click', () => window.openDialog('dSnapping'));
      document.getElementById('btnForceConfirm')?.addEventListener('click', () => window.confirmApexAction());
    }, 100);

    window.confirmApexAction = () => {
      const d = document.getElementById('dApexFull');
      if (d) {
        d.showConfirmation('Unsaved Changes', 'You have unsaved configuration changes. Are you sure you want to discard them and refresh the project?', () => {
          alert('Action confirmed in sub-overlay!');
        });
      }
    };
  };

  window.showGodTier = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎭 God Tier: Ultimate Window Experience</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Experience the absolute pinnacle of UI with Physical Shadows, Global Blurring, and Integrated Wizard Steppers.</p>
        
        <div style="display: flex; gap: 15px; flex-wrap: wrap;">
           <ui-button id="btnLaunchWizard" size="md" variant="outline" color="primary" label="🧛 Launch Setup Wizard" style="--btn-bg: linear-gradient(to right, #7c3aed, #db2777);"></ui-button>
           <ui-button id="btnLaunchGlobalBlur" size="md" variant="outline" color="secondary" label="☁️ Global Backdrop Blur" style="--btn-bg: #111827;"></ui-button>
        </div>

        <!-- Wizard Dialog -->
        <ui-dialog-box id="dWizard" 
          dialog-title="Project Setup Wizard" 
          steps='["Configuration", "Permissions", "Resources", "Review"]'
          current-step="1"
          draggable="true"
          resizable="true"
          ok-text="Next Step"
          cancel-text="Exit Wizard"
          icon-library="lucide">
          
          <div id="wizardStepContent" style="padding: 30px; min-height: 150px;">
             <h4>Step 1: Basic Configuration</h4>
             <p>Select your deployment region and base language settings below.</p>
             <ui-dropdown style="width: 100%; margin-top: 10px;" options='[
                {"label": "US-East (Virginia)", "value": "US-East (Virginia)"},
                {"label": "EU-West (Ireland)", "value": "EU-West (Ireland)"},
                {"label": "AP-South (Mumbai)", "value": "AP-South (Mumbai)"}
             ]' value="US-East (Virginia)"></ui-dropdown>
          </div>
        </ui-dialog-box>

        <!-- Global Blur Dialog -->
        <ui-dialog-box id="dGlobalBlur" 
          dialog-title="Total Focus Mode" 
          global-blur="true"
          ok-text="Complete Task"
          cancel-text="Exit Focus Mode"
          width="450px" 
          icon-library="lucide">
          <div style="padding: 30px; text-align: center;">
             <ui-icon name="eye-off" library="lucide" size="48px" style="color:var(--accent-purple,#7c3aed); margin-bottom: 20px;"></ui-icon>
             <h3>Immersion at 100%</h3>
             <p>Notice how everything else on the screen is <b>blurred and grayed out</b>. This ensures zero distractions until the task is complete.</p>
          </div>
        </ui-dialog-box>
      </div>
    `;

    // Wizard Logic
    setTimeout(() => {
      document.getElementById('btnLaunchWizard')?.addEventListener('click', () => window.openDialog('dWizard'));
      document.getElementById('btnLaunchGlobalBlur')?.addEventListener('click', () => window.openDialog('dGlobalBlur'));

      const d = document.getElementById('dWizard');
      if (d) {
        d.addEventListener('ok', e => {
          e.preventDefault();
          const current = Math.min(d.currentStep + 1, 4);
          d.currentStep = current;
          d.okText = current === 4 ? 'Finish Setup' : 'Next Step';

          const contents = [
            '<h4>Step 1: Configuration</h4><p>Set up your environment variables here.</p>',
            '<h4>Step 2: Security</h4><p>Assign IAM roles and user permissions.</p>',
            '<h4>Step 3: Resources</h4><p>Select instance sizes and storage quotas.</p>',
            '<h4>Step 4: Final Review</h4><p>Click Finish to deploy your changes.</p>',
          ];
          const stepContent = document.getElementById('wizardStepContent');
          if (stepContent) stepContent.innerHTML = contents[current - 1];
        });
      }
    }, 100);
  };

  window.showSovereignTier = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>⚡ Sovereign Tier: Operating System Simulation</h3>
        <p style="color: var(--text-secondary, #6b7280); margin-bottom: 20px;">The absolute zenith of component engineering. Truly multi-window orchestration with dock, detached pop-outs, and intelligent guards.</p>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 30px;">
           <ui-button id="btnSpawnTerminal" size="md" variant="outline" color="secondary" label="📟 Spawn Terminal" style="--btn-bg: var(--bg-secondary, #111827);"></ui-button>
           <ui-button id="btnSpawnEditor" size="md" variant="outline" color="success" label="📝 Spawn Editor (Dirty)"></ui-button>
           <ui-button id="btnSpawnMonitor" size="md" variant="outline" color="success" label="📈 Spawn Monitor (Skeleton)"></ui-button>
        </div>

        <div style="background: var(--bg-secondary, rgba(255,255,255,0.03)); padding: 20px; border-radius: 12px; border: 1px solid var(--border-default, rgba(255,255,255,0.08)); backdrop-filter: blur(8px);">
           <h4 style="margin-top: 0; color: var(--text-primary, #ffffff);">Window Orchestration</h4>
           <div style="display: flex; gap: 10px;">
              <ui-button id="btnCascadeWindows" size="md" variant="outline" color="secondary" label="Cascade Windows" style="--btn-bg: transparent;"></ui-button>
              <ui-button id="btnTileWindows" size="md" variant="outline" color="secondary" label="Tile Windows" style="--btn-bg: transparent;"></ui-button>
           </div>
           <p style="font-size: 12px; color: var(--text-muted, #94a3b8); margin-top: 10px;">Try spawning multiple windows then tiling them!</p>
        </div>

        <p style="margin-top: 20px; font-size: 14px; font-style: italic; color: var(--text-secondary, #64748b);">
           <b>Key Features:</b><br>
           - Minimize to Dock (bottom taskbar)<br>
           - Pop-out to real Browser Window<br>
           - Auto-guard Confirmation for "Dirty" editors<br>
           - Skeleton Loading mode
        </p>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnSpawnTerminal')?.addEventListener('click', () => window.spawnSovWindow('Terminal'));
      document.getElementById('btnSpawnEditor')?.addEventListener('click', () => window.spawnSovWindow('Editor'));
      document.getElementById('btnSpawnMonitor')?.addEventListener('click', () => window.spawnSovWindow('Monitor'));
      document.getElementById('btnCascadeWindows')?.addEventListener('click', () => {
        const wins = Array.from(document.querySelectorAll('ui-dialog-box')).filter(w => w.open && !w.minimized);
        wins.forEach((win, i) => {
          const panel = win.shadowRoot?.querySelector('.ui-dialog-box');
          if (panel) {
            panel.style.left = `${50 + (i * 30)}px`;
            panel.style.top = `${50 + (i * 30)}px`;
            panel.style.margin = '0';
            panel.style.position = 'fixed';
          }
        });
      });
      document.getElementById('btnTileWindows')?.addEventListener('click', () => {
        const wins = Array.from(document.querySelectorAll('ui-dialog-box')).filter(w => w.open && !w.minimized);
        if (wins.length === 0) return;
        
        const cols = Math.ceil(Math.sqrt(wins.length));
        const rows = Math.ceil(wins.length / cols);
        const winW = window.innerWidth / cols;
        const winH = window.innerHeight / rows;

        wins.forEach((win, i) => {
          const r = Math.floor(i / cols);
          const c = i % cols;
          const panel = win.shadowRoot?.querySelector('.ui-dialog-box');
          if (panel) {
            panel.style.left = `${c * winW}px`;
            panel.style.top = `${r * winH}px`;
            panel.style.width = `${winW}px`;
            panel.style.height = `${winH}px`;
            panel.style.margin = '0';
            panel.style.position = 'fixed';
          }
        });
      });
    }, 100);

    window.spawnSovWindow = async type => {
      const id = 'sov-' + type.toLowerCase() + '-' + Math.round(Math.random() * 1000);
      const d = document.createElement('ui-dialog-box');
      d.id = id;
      d.setAttribute('dialog-title', type + ' - ' + id.substring(id.length - 4));
      d.setAttribute('draggable', 'true');
      d.setAttribute('resizable', 'true');
      d.setAttribute('backdrop', 'none');
      d.setAttribute('dock-label', type);
      d.setAttribute('allow-pop-out', 'true');
      d.setAttribute('icon-library', 'lucide');
      d.setAttribute('width', '400px');
      d.setAttribute('height', '300px');
      d.setAttribute('ok-text', 'Apply Changes');
      d.setAttribute('cancel-text', 'Exit Window');

      // Starting position randomness
      d.style.position = 'fixed';
      d.style.left = 150 + Math.random() * 200 + 'px';
      d.style.top = 150 + Math.random() * 200 + 'px';
      d.style.margin = '0';

      if (type === 'Editor') {
        d.setAttribute('dirty', 'true');
        d.innerHTML =
          '<div style="padding: 20px;"><h3>Unsaved Work</h3><p>Try closing me directly. The sovereign guard will stop you!</p><ui-input multiline="true" rows="4" value="Typing some data..." style="width:100%;"></ui-input><ui-button class="btn-close-editor" label="Close" style="margin-top:12px;"></ui-button></div>';
        const editorCloseBtn = d.querySelector('.btn-close-editor');
        if (editorCloseBtn) {
          editorCloseBtn.addEventListener('click', () => d.hide());
        }
      } else if (type === 'Monitor') {
        d.setAttribute('loading', 'true');
        d.innerHTML =
          '<div style="padding: 24px;"><h3>Live Data Stream</h3><div style="margin-top:20px; height:20px; width:80%;">Pulse</div><div style="margin-top:10px; height:100px; width:100%;">Chart Chart Chart Chart Chart</div></div>';
        setTimeout(() => (d.loading = false), 3000);
      } else {
        d.innerHTML = '<div style="padding: 20px; background: #000; color: #0f0; height: 100%; font-family: monospace;">user@dreamui:~$ _</div>';
      }

      document.body.appendChild(d);
      if (typeof d.show !== 'function') {
        await customElements.whenDefined('ui-dialog-box');
      }
      d.show();
    };
  };

  window.testDialogResult = async function () {
    const id = 'dResultPrompt';
    let d = document.getElementById(id);
    if (!d) {
      d = document.createElement('ui-dialog-box');
      d.id = id;
      d.setAttribute('dialog-title', 'Choose Your Upgrade');
      d.setAttribute('ok-text', 'Accept Upgrade');
      d.setAttribute('cancel-text', 'Decline');
      d.setAttribute('size', 'sm');
      d.setAttribute('icon-library', 'lucide');
      document.body.appendChild(d);
    }

    // Always re-render inner content to ensure select is present
    d.innerHTML = `
      <div style="padding: 20px;">
        <h4>System Reward</h4>
        <p>Select a reward to continue your journey.</p>
        <ui-dropdown id="rewardSelect" name="rewardSelect" style="width: 100%; margin-top: 10px;" options='[
          {"label": "💎 +5000 Experience", "value": "XP"},
          {"label": "💰 +1000 Gold", "value": "GOLD"},
          {"label": "🧪 Mystic Elixir", "value": "ELIXIR"}
        ]' value="XP"></ui-dropdown>
      </div>
    `;

    try {
      if (typeof d.showWithResult !== 'function') {
        await customElements.whenDefined('ui-dialog-box');
      }
      const result = await d.showWithResult();
      if (!result.canceled && result.data) {
        alert('🎉 Selection Success: ' + JSON.stringify(result.data));
      } else if (result.canceled) {
        console.log('Dialog was canceled by user.');
      } else {
        alert('ℹ️ No selection made (Form was empty)');
      }
    } catch (err) {
      console.log('Dialog error:', err);
    }
  };

  window.showCustomHeaderShowcase = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎨 Ultra-Custom Header Architecture</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Take full control of the frame. Inject images, remove OS controls, or replace the entire header via slots.</p>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 30px;">
           <ui-button onclick="openDialog('dBranded')" size="md" variant="outline" color="secondary" label="🖼️ Branded with Image" style="--btn-bg: #111827;"></ui-button>
           <ui-button onclick="openDialog('dStealth')" size="md" variant="outline" color="primary" label="🕵️ Stealth (No Controls)" style="--btn-bg: var(--accent-indigo,#6366f1);"></ui-button>
           <ui-button onclick="openDialog('dFullHeader')" size="md" variant="outline" color="secondary" label="🧩 Full Slot Replacement" style="--btn-bg: var(--accent-pink,#ec4899);"></ui-button>
        </div>

        <!-- Branded -->
        <ui-dialog-box id="dBranded" dialog-title="Dream Workspace" header-image="https://primefaces.org/cdn/primereact/images/logo.png" width="400px" ok-text="Explore" cancel-text="Dismiss" icon-library="lucide" resizable="true">
           <div style="padding: 24px;">
              <p>Header image automatically injected before the title. Resizing is enabled via the bottom-right corner.</p>
           </div>
        </ui-dialog-box>

        <!-- Stealth -->
        <ui-dialog-box id="dStealth" dialog-title="Kiosk Mode" show-close="false" show-minimize="false" show-maximize="false" width="400px" ok-text="Finish" cancel-text="Exit" icon-library="lucide">
           <div style="padding: 24px;">
              <p>Buttons removed for "Kiosk" or "Mandatory Action" modes.</p>
           </div>
        </ui-dialog-box>

        <!-- Full Header Replacement -->
        <ui-dialog-box id="dFullHeader" width="500px" ok-text="Save" cancel-text="Close">
           <div slot="header" style="background: linear-gradient(90deg, #ec4899, #8b5cf6); padding: 15px 20px; color: white; display: flex; justify-content: space-between; align-items:center;">
              <div style="font-weight: bold; font-size: 1.2rem;">✨ MAGICAL HEADER SLOT</div>
              <ui-button onclick="closeDialog('dFullHeader')" variant="ghost" color="secondary" label="×" style="--btn-text: white; font-size: 20px;"></ui-button>
           </div>
           <div style="padding: 40px; text-align: center;">
              <h3>Framework Hijacked!</h3>
              <p>The entire standard header has been replaced by a custom pink-purple gradient div via the <b>header slot</b>.</p>
           </div>
        </ui-dialog-box>

      </div>
    `;
  };

  window.showMockupDesign = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>📐 Pixel-Perfect Mockup Matcher</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Every pixel matters. This demo follows the 24px outer / 20px inner spacing rules, blue primary buttons, and left-aligned Reset actions.</p>
        
        <div style="display: flex; gap: 12px; margin-bottom: 30px;">
           <ui-button onclick="openDialog('dMockup')" size="md" variant="outline" color="secondary" label="🚀 Launch Mockup Modal" style="--btn-bg: #111827;"></ui-button>
        </div>

        <ui-dialog-box 
          id="dMockup" 
          dialog-title="Title modal" 
          width="500px" 
          ok-text="Save" 
          cancel-text="Cancel" 
          reset-text="Reset" 
          show-menu="true"
          icon-library="lucide"
        >
           <ul slot="menu-list" style="list-style: none; padding: 0; margin: 0;">
              <li style="padding: 8px 12px; cursor: pointer; border-radius: 4px;" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='transparent'">Action 1</li>
              <li style="padding: 8px 12px; cursor: pointer; border-radius: 4px;" onmouseover="this.style.background='#f3f4f6'" onmouseout="this.style.background='transparent'">Action 2</li>
           </ul>
           <div slot="header-icon">
              <div style="width: 24px; height: 24px; border: 2px solid #10b981; border-radius: 50%;"></div>
           </div>
           <div>
              A dialog is a type of modal window that appears in front of app content to provide critical information, or ask for a decision.
           </div>
        </ui-dialog-box>

      </div>
    `;
  };

  window.showTermsDialog = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>⚖️ Terms and Agreement Mode</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">The <code>type="terms"</code> preset automatically configures the title, Accept/Decline labels, and enforces a scrollable 'paper' layout.</p>
        
        <ui-button onclick="openDialog('dTerms')" size="md" variant="outline" color="success" label="View License Agreement" style="--btn-bg: var(--accent-green,#059669);"></ui-button>

        <ui-dialog-box id="dTerms" type="terms" icon-library="lucide">
           <div slot="header-icon">
              <ui-icon name="scroll" library="lucide" size="24px" style="color:var(--accent-green,#059669);"></ui-icon>
           </div>
           <div style="line-height: 1.6; color: #374151;">
              <h3>1. Terms of Use</h3>
              <p>By accessing this application, you are agreeing to be bound by these terms of service, all applicable laws and regulations, and agree that you are responsible for compliance with any applicable local laws.</p>
              
              <h3>2. Use License</h3>
              <p>Permission is granted to temporarily download one copy of the materials (information or software) on DreamUI's website for personal, non-commercial transitory viewing only.</p>
              
              <h3>3. Disclaimer</h3>
              <p>The materials on DreamUI's website are provided on an 'as is' basis. DreamUI makes no warranties, expressed or implied, and hereby disclaims and negates all other warranties including, without limitation, implied warranties or conditions of merchantability, fitness for a particular purpose, or non-infringement of intellectual property or other violation of rights.</p>

              <h3>4. Limitations</h3>
              <p>In no event shall DreamUI or its suppliers be liable for any damages (including, without limitation, damages for loss of data or profit, or due to business interruption) arising out of the use or inability to use the materials on DreamUI's website.</p>

              <h3>5. Governing Law</h3>
              <p>These terms and conditions are governed by and construed in accordance with the laws of the jurisdiction and you irrevocably submit to the exclusive jurisdiction of the courts in that State or location.</p>
              
              <div style="margin-top: 20px; padding: 12px; background:var(--accent-green-soft,#f0fdf4); border-radius: 8px; border: 1px solid #bbf7d0;">
                 <ui-checkbox id="agreeCheckbox" label="I have read and agree to the terms listed above."></ui-checkbox>
              </div>
           </div>
        </ui-dialog-box>
      </div>
    `;
 
    
    setTimeout(() => {
      const d = document.getElementById('dTerms');
      const agree = document.getElementById('agreeCheckbox');
      if (d && agree) {
        if (typeof d.setOkDisabled === 'function') {
          d.setOkDisabled(true);
        } else {
          d.okDisabled = true;
        }
        agree.addEventListener('checkboxChange', e => {
          if (typeof d.setOkDisabled === 'function') {
            d.setOkDisabled(!e.detail.checked);
          } else {
            d.okDisabled = !e.detail.checked;
          }
        });
        d.addEventListener('ok', () => alert('Terms Accepted!'));
      }
    }, 100);
  };

  window.showEliteFeatures = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🏆 "Elite" Intelligence Features</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Features that differentiate standard modals from professional windowing systems.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="padding: 24px; background:var(--bg-secondary,#f9fafb); border-radius: 12px; border:1px solid var(--border-default,#e5e7eb);">
             <ui-icon name="pin" library="lucide" size="32px" style="color: #10b981; margin-bottom: 12px;"></ui-icon>
             <h4>Persistent Layout</h4>
             <p style="font-size: 14px; color: #6b7280; margin-bottom: 16px;">Moves and resizes are remembered across page reloads using <code>remember="true"</code>.</p>
             <ui-button onclick="openDialog('dPersistent')" size="md" variant="outline" color="success" label="Open Sticky Window" style="width: 100%;"></ui-button>
          </div>

          <div style="padding: 24px; background:var(--bg-secondary,#f9fafb); border-radius: 12px; border:1px solid var(--border-default,#e5e7eb);">
             <ui-icon name="smartphone" library="lucide" size="32px" style="color:var(--accent-purple,#8b5cf6); margin-bottom: 12px;"></ui-icon>
             <h4>Touch Gestures</h4>
             <p style="font-size: 14px; color: #6b7280; margin-bottom: 16px;">Enables <code>swipe-to-close</code> on mobile. Try swiping left or right to dismiss on touch devices.</p>
             <ui-button onclick="openDialog('dSwipe')" size="md" variant="outline" color="secondary" label="Open Gesture Window" style="width: 100%; --btn-bg: var(--accent-purple,#8b5cf6);"></ui-button>
          </div>
        </div>

        <ui-dialog-box id="dPersistent" dialog-title="I Remember You" ok-text="Save Position" cancel-text="Close" remember="true" resizable="true" is-draggable="true" icon-library="lucide">
           <div style="padding: 24px; text-align: center;">
              <p>Move me to the corner, resize me, or maximize me. Then <b>refresh the page</b>.</p>
              <div style="margin-top: 10px; font-weight: bold; color:var(--accent-green,#059669);">✨ Your layout will be restored automatically.</div>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="dSwipe" dialog-title="Swipe Support" ok-text="Dismiss" cancel-text="Cancel" swipe-to-close="true" width="400px" icon-library="lucide">
           <div style="padding: 24px;">
              <p>Common on modern mobile apps. If you are on a touch device or using Chrome DevTools mobile mode, swipe me left or right to close.</p>
              <div style="height: 100px; margin-top: 20px; border: 2px dashed #ddd; display: flex; align-items: center; justify-content: center; color: #9ca3af;">
                 <<< Swipe Area >>>
              </div>
           </div>
        </ui-dialog-box>
      </div>
    `;
  };
  window.showSecurityLifecycleFeatures = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🔐 Security & Lifecycle Operations</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Mission-critical features for sensitive applications and advanced UX feedback.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
          <div style="padding: 24px; background: #fff1f2; border-radius: 12px; border: 1px solid #fecaca;">
             <ui-icon name="shield-check" library="lucide" size="32px" style="color: #e11d48; margin-bottom: 12px;"></ui-icon>
             <h4>Sensitive Action Confirmation</h4>
             <p style="font-size: 14px; color: #6b7280; margin-bottom: 16px;">Using <code>sensitive="true"</code> requires a secondary verification overlay before the OK event fires.</p>
             <ui-button onclick="openDialog('dSnsitive')" size="md" variant="outline" color="danger" label="Execute Restricted Action" style="width: 100%; --btn-bg: #e11d48;"></ui-button>
          </div>

          <div style="padding: 24px; background: #f0f9ff; border-radius: 12px; border: 1px solid #bae6fd;">
             <ui-icon name="loader" library="lucide" size="32px" style="color: #0284c7; margin-bottom: 12px;"></ui-icon>
             <h4>Live Progress & Lifecycle</h4>
             <p style="font-size: 14px; color: #6b7280; margin-bottom: 16px;">Integrated <code>progress</code> bar for long-running tasks and <code>timeout</code> for session handling.</p>
             <ui-button onclick="openDialog('dLifecycle'); startProgressDemo();" size="md" variant="outline" color="primary" label="Start Process Modal" style="width: 100%; --btn-bg: #0284c7;"></ui-button>
          </div>
        </div>

        <ui-dialog-box id="dSnsitive" dialog-title="Restrict Access" sensitive="true" ok-text="Delete Core Data" cancel-text="Cancel" status="error" icon-library="lucide">
           <div style="padding: 24px;">
              <p>Critical actions require a safety net. This dialog will prompt you again when you click Delete.</p>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="dLifecycle" dialog-title="Installing Updates" progress="0" ok-text="Done" cancel-text="Abort" ok-disabled="true" icon-library="lucide">
           <div style="padding: 24px; text-align: center;">
              <div id="progressStatus" style="font-weight: 500; font-size: 1.1rem; margin-bottom: 10px;">Initializing...</div>
              <p>This modal tracks real-time progress and auto-enables the finish button.</p>
           </div>
        </ui-dialog-box>
      </div>
    `;

    // Add event listeners for audit logs
    setTimeout(() => {
      const d = document.getElementById('dSnsitive');
      if (d) d.addEventListener('auditLog', e => console.log('🛡️ Audit Log:', e.detail));
    }, 100);
  };

  window.startProgressDemo = function () {
    const d = document.getElementById('dLifecycle');
    const status = document.getElementById('progressStatus');
    let p = 0;
    d.show();

    const interval = setInterval(() => {
      p += Math.floor(Math.random() * 15);
      if (p > 100) p = 100;
      d.progress = p;
      if (status) status.innerText = `Downloading Files... ${p}%`;

      if (p === 100) {
        clearInterval(interval);
        if (status) status.innerHTML = '✨ <span style="color:var(--accent-green,#059669);">Update Complete!</span>';
        d.okDisabled = false;
      }
    }, 600);
  };

  window.showDialogHeaderMastery = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>💎 Header Mastery Showcase</h3>
        <p style="color:var(--text-secondary,#64748b); margin-bottom: 24px;">The <code>ui-dialog-header</code> is fully extensible. Use slots for branding, multi-action toolbars, and status-driven visuals.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px;">
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); display: flex; flex-direction: column; gap: 16px;">
            <h4 style="margin: 0;">🏷️ Branded Slot Header</h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b);">Override the entire header content with a custom slot for deep branding.</p>
            <ui-button onclick="openDialog('dBrandedHeader')" size="md" variant="outline" color="success" label="Open Branded Dialog" style="margin-top:auto;"></ui-button>
          </div>
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); display: flex; flex-direction: column; gap: 16px;">
            <h4 style="margin: 0;">🛠️ Multi-Action Toolbar</h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b);">Inject additional action buttons into the header via <code>slot="header-actions"</code>.</p>
            <ui-button onclick="openDialog('dMultiAction')" size="md" variant="outline" color="secondary" label="Open Multi-Action Dialog" style="margin-top:auto; --btn-bg: var(--accent-purple,#8b5cf6);"></ui-button>
          </div>
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); display: flex; flex-direction: column; gap: 16px;">
            <h4 style="margin: 0;">🎨 Status Elevation</h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b);">Headers that react to the <code>status</code> prop for high-urgency notifications.</p>
            <div style="display: flex; gap: 8px;">
               <ui-button onclick="openDialog('dStatusSuccess')" size="md" variant="outline" color="success" label="Success"style="flex:1;"></ui-button>
               <ui-button onclick="openDialog('dStatusError')" size="md" variant="outline" color="danger" label="Error"style="flex:1;"></ui-button>
            </div>
          </div>
        </div>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 24px; margin-top: 24px;">
          <!-- Case 4: Avatar Header -->
          <div style="background:var(--bg-primary,white); padding: 24px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); display: flex; flex-direction: column; gap: 16px;">
            <h4 style="margin: 0;">👤 Profile/Avatar Headers</h4>
            <p style="font-size: 13px; color:var(--text-secondary,#64748b);">Direct support for user avatars and custom icons without manual slots.</p>
            <ui-button onclick="openDialog('dAvatarHeader')" size="md" variant="outline" color="success" label="Open Profile Dialog" style="margin-top:auto;"></ui-button>
          </div>
        </div>

        <ui-dialog-box id="dBrandedHeader" width="550px" ok-text="Accept" cancel-text="Dismiss">
          <div slot="header" style="display: flex; align-items: center; gap: 12px; width: 100%;">
             <div style="background: linear-gradient(135deg, #10b981, #10b981); width: 36px; height: 36px; border-radius: 8px; display: flex; align-items: center; justify-content: center; color: white; font-weight: bold; font-size: 18px;">D</div>
             <div style="flex: 1;">
                <h3 style="margin: 0; font-size: 16px; font-weight: 700;">Design System v3</h3>
                <span style="font-size: 11px; color:var(--text-secondary,#64748b); font-weight: 500;">DREAMUI_CONSOLE_PRO_692</span>
             </div>
             <div style="padding: 4px 8px; background:var(--accent-green-soft,#dcfce7); color: var(--accent-green,#166534); border-radius: 12px; font-size: 10px; font-weight: bold; text-transform: uppercase;">Verified</div>
          </div>
          <div style="padding: 20px;"><p>This header is completely custom using <code>slot="header"</code>.</p></div>
        </ui-dialog-box>

        <ui-dialog-box id="dAvatarHeader" dialog-title="John Doe" subtitle="Lead Systems Architect" avatar="/build/assets/images/logo.png" ok-text="View Profile" cancel-text="Close">
           <div style="padding: 20px;">
              <p>This dialog uses the new <code>avatar</code> prop on the header. It handles sizing, border-radius, and alignment automatically.</p>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="dMultiAction" dialog-title="Project Settings" icon="settings" icon-library="lucide" ok-text="Save Changes" cancel-text="Discard">
           <div slot="header-actions" style="display: flex; gap: 4px;">
               <ui-button onclick="alert('Starred!')" title="Starred!" variant="ghost" color="secondary" size="md" variant="outline"
                  <ui-icon name="star" library="lucide" size="16px"></ui-icon>
               </ui-button>
               <ui-button onclick="alert('Shared!')" title="Shared!" variant="ghost" color="secondary" size="md" variant="outline"
                  <ui-icon name="share-2" library="lucide" size="16px"></ui-icon>
               </ui-button>
            </div>
           <div style="padding: 20px;"><p>Additional actions injected via <code>slot="header-actions"</code>.</p></div>
        </ui-dialog-box>

        <ui-dialog-box id="dStatusSuccess" status="success" dialog-title="Transaction Complete" ok-text="Understood">
           <div style="padding: 24px; text-align: center;"><h3>Payment Success!</h3></div>
        </ui-dialog-box>

        <ui-dialog-box id="dStatusError" status="error" dialog-title="Security Alert" ok-text="Acknowledge">
           <div style="padding: 24px;"><h4>Connection Refused</h4></div>
        </ui-dialog-box>
      </div>
    `;
  };

  // Initialize with playground
  setTimeout(() => {
    if (window.showInteractiveDialog) showInteractiveDialog();
  }, 100);

  window.showWindowFeatures = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block" style="display:flex;flex-direction:column;gap:40px;">

        <!-- ① Smooth Drag (no jump on click) -->
        <div>
          <h3 style="margin:0 0 6px;">🖱 Smooth Drag — No Jump on Click</h3>
          <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">
            Draggable dialogs now anchor position on first move (>5 px threshold), so clicking the header
            no longer snaps the dialog to the cursor.
          </p>
            <ui-button onclick="openDialog('wfDragDialog')" size="md" variant="outline" color="primary" label="Open Draggable Dialog" style="--btn-bg: var(--accent-cyan,#0ea5e9);"></ui-button>
          <ui-dialog-box id="wfDragDialog" is-draggable="true" snap-to-edges="true" show-minimize="true" show-maximize="true" 
          ok-text="Accept" cancel-text="Dismiss"
          icon-library="lucide" dialog-title="Desktop Experience">
            <div style="padding:12px 0; font-size:14px; color:#475569;">
              <p><b>✨ Windows Snap:</b> Try dragging me to the very top, left, or right edge of the screen to snap and maximize.</p>
              <p><b>✨ Integrated Tray:</b> When I am minimized, I move to the new global tray at the bottom center of the screen. Try clicking my tab there to open a <b>Peek Panel</b>!</p>
            </div>
          </ui-dialog-box>
        </div>

        <!-- ② Nested z-index auto-stacking -->
        <div>
          <h3 style="margin:0 0 6px;">🗂 Auto Z-Index Stacking</h3>
          <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">
            Every newly opened dialog automatically rises above all existing open dialogs — no manual
            z-index required.
          </p>
          <ui-button onclick="openDialog('wfParentDialog')" size="md" variant="outline" color="primary" label="Open Parent Dialog" style="--btn-bg: var(--accent-indigo,#6366f1);"></ui-button>
          <ui-dialog-box id="wfParentDialog" is-draggable="true" ok-text="Understood" cancel-text="Close" icon-library="lucide" dialog-title="Parent Dialog">
            <div style="padding:8px 0;font-size:14px;color:#475569;">
              I am the parent. Click the button below to open a child dialog on top of me.
              <br><br>
              <ui-button onclick="openDialog('wfChildDialog')" size="md" variant="outline" color="secondary" label="Open Child Dialog (should be on top)" style="--btn-bg: var(--accent-purple,#8b5cf6);"></ui-button>
            </div>
          </ui-dialog-box>
          <ui-dialog-box id="wfChildDialog" is-draggable="true" ok-text="Accept" cancel-text="Close" icon-library="lucide" dialog-title="Child Dialog (auto z-index)">
            <div style="padding:8px 0;font-size:14px;color:#475569;">
              I automatically opened above the parent — no extra z-index config.
            </div>
          </ui-dialog-box>
        </div>

        <!-- NEW: Programmatic Control Demo -->
        <div>
          <h3 style="margin:0 0 6px;">⚡ Programmatic API Control</h3>
          <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">
            Trigger window states directly from your app logic using <code>.minimize()</code> and <code>.maximize()</code>.
          </p>
          <div style="display:flex; gap:10px;">
            <ui-button onclick="openDialog('wfApiDialog')" size="md" variant="outline" color="secondary" label="1. Open Dialog" style="--btn-bg: #111827;"></ui-button>
            <ui-button onclick="document.getElementById('wfApiDialog').minimize()" size="md" variant="outline" color="secondary" label="2. Call .minimize()" style="--btn-bg: var(--accent-purple,#6d28d9);"></ui-button>
             <ui-button onclick="document.getElementById('wfApiDialog').maximize()" size="md" variant="outline" color="secondary" label="3. Call .maximize()" style="--btn-bg: var(--accent-indigo,#4338ca);"></ui-button>
          </div>
          <ui-dialog-box id="wfApiDialog" is-draggable="true" ok-text="OK" cancel-text="Dismiss" icon-library="lucide" dialog-title="API Controlled Window" show-minimize="true">
            <div style="padding:20px; text-align:center;">
              <p style="font-size:15px; font-weight:600; color:var(--text-primary,#1e293b);">I am controlled by external code!</p>
              <p style="font-size:13px; color:var(--text-secondary,#64748b);">The buttons outside this dialog are calling my internal methods directly.</p>
            </div>
          </ui-dialog-box>
        </div>

        <!-- ③ Return value auto-form-collection -->
        <div>
          <h3 style="margin:0 0 6px;">📋 Return Value — Auto Form Collection</h3>
          <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">
            <code>showWithResult()</code> auto-collects all named inputs (including selects).
          </p>
          <ui-button id="wfReturnBtn" onclick="wfOpenReturnDialog()" size="md" variant="outline" color="success" label="Open Form Dialog"></ui-button>
          <div id="wfReturnOutput" style="margin-top:10px;font-size:13px;color:#475569;"></div>
          <ui-dialog-box id="wfReturnDialog" ok-text="Save Output" cancel-text="Cancel" icon-library="lucide">
            <span slot="header">User Profile</span>
            <div style="padding:16px;">
              <form id="wfForm" style="display:grid;gap:12px;">
                <ui-input name="username" label="Name" value="Praveen" placeholder="Your name"></ui-input>
                <ui-dropdown id="wfReturnRole" name="role" label="System Role" options='[
                  {"label": "Developer", "value": "dev"},
                  {"label": "Designer", "value": "design"},
                  {"label": "Manager", "value": "mgr"}
                ]' value="dev" style="width: 100%;"></ui-dropdown>
              </form>
            </div>
          </ui-dialog-box>
        </div>

        <!-- ④ Action Menu (menuItems + menuIcon + menuTitle) -->
        <div>
          <h3 style="margin:0 0 6px;">⚙ Action Menu — menuItems + menuIcon + menuTitle</h3>
          <p style="font-size:13px;color:var(--text-secondary,#64748b);margin:0 0 12px;">
            Set <code>menu-items</code> JSON on a dialog to auto-show a header menu button.
            Customise the icon with <code>menu-icon</code> and tooltip with <code>menu-title</code>.
          </p>
          <div style="display:flex;gap:10px;flex-wrap:wrap;">
            <ui-button onclick="openDialog('wfMenuDialog1')" size="md" variant="outline" color="secondary" label="Default Menu (⋯)" style="--btn-bg: var(--accent-yellow,#f59e0b);"></ui-button>
            <ui-button onclick="openDialog('wfMenuDialog2')" size="md" variant="outline" color="secondary" label="Settings Menu (⚙)" style="--btn-bg: var(--accent-red,#ef4444);"></ui-button>
            <ui-button onclick="openDialog('wfMenuDialog3')" size="md" variant="outline" color="secondary" label="Filter Menu (sliders)" style="--btn-bg: var(--accent-purple,#8b5cf6);"></ui-button>
          </div>
 
          <!-- Default more-horizontal icon -->
          <ui-dialog-box id="wfMenuDialog1" icon-library="lucide" dialog-title="Default Action Menu" ok-text="Accept" cancel-text="Close"
            menu-items='[{"label":"Rename","icon":"pencil"},{"label":"Duplicate","icon":"copy"},{"divider":true},{"label":"Delete","icon":"trash-2","danger":true}]'>
            <div style="padding:8px 0;font-size:14px;color:#475569;">
              The header shows a <strong>⋯</strong> button (default <code>menu-icon="more-horizontal"</code>)
              when <code>menu-items</code> is set. Try clicking it.
            </div>
          </ui-dialog-box>
 
          <!-- Settings / gear icon -->
          <ui-dialog-box id="wfMenuDialog2" icon-library="lucide" dialog-title="Settings Menu" ok-text="Save" cancel-text="Close"
            menu-icon="settings" menu-title="Settings"
            menu-items='[{"label":"Profile","icon":"user"},{"label":"Notifications","icon":"bell"},{"label":"Security","icon":"shield"},{"divider":true},{"label":"Logout","icon":"log-out","danger":true}]'>
            <div style="padding:8px 0;font-size:14px;color:#475569;">
              <code>menu-icon="settings"</code> replaces the default icon with a gear icon.
              <code>menu-title="Settings"</code> sets the tooltip.
            </div>
          </ui-dialog-box>
 
          <!-- Sliders / filter icon -->
          <ui-dialog-box id="wfMenuDialog3" icon-library="lucide" dialog-title="Filter Menu" ok-text="Apply Filters" cancel-text="Close"
            menu-icon="sliders-horizontal" menu-title="Filters"
            menu-items='[{"label":"Sort A → Z","icon":"arrow-up-az"},{"label":"Sort Z → A","icon":"arrow-down-az"},{"divider":true},{"label":"Date Range","icon":"calendar"},{"label":"Clear Filters","icon":"x-circle","danger":true}]'>
            <div style="padding:8px 0;font-size:14px;color:#475569;">
              <code>menu-icon="sliders-horizontal"</code> and
              <code>menu-title="Filters"</code> for a data-table style filter menu.
            </div>
          </ui-dialog-box>
        </div>
      </div>
    `;

    // Taskbar logic is now handled globally in initDialogDemo()

    // Wire up return-value demo
    window.wfOpenReturnDialog = function () {
      const dlg = document.getElementById('wfReturnDialog');
      if (dlg)
        dlg.showWithResult().then(result => {
          const out = document.getElementById('wfReturnOutput');
          if (out) {
            if (!result.canceled && result.data) {
              out.innerHTML = '<pre style="background:var(--bg-tertiary,#f1f5f9);padding:12px;border-radius:8px;font-size:12px;">' + JSON.stringify(result.data, null, 2) + '</pre>';
            } else {
              out.textContent = result.canceled ? '(dialog cancelled)' : '(no data returned — form empty)';
            }
          }
        });
    };

    window.wfConfirmReturn = function () {
      const dlg = document.getElementById('wfReturnDialog');
      if (dlg && dlg.submit) dlg.submit(); // submit resolves the promise with the form data
    };
  };

  window.showDrawerShowcase = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>📐 Enterprise Drawer System</h3>
        <p style="margin-bottom: 20px; color: #6b7280;">Drawers are ideal for navigation, detail panels, and quick settings. They slide from the viewport edges.</p>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-button onclick="openDialog('drawerLeft')" size="md" variant="outline" color="primary" label="Left Drawer" style="--btn-bg: var(--accent-indigo,#4f46e5);"></ui-button>
          <ui-button onclick="openDialog('drawerRight')" size="md" variant="outline" color="primary" label="Right Drawer" style="--btn-bg: var(--accent-indigo,#4f46e5);"></ui-button>
          <ui-button onclick="openDialog('drawerTop')" size="md" variant="outline" color="primary" label="Top Drawer" style="--btn-bg: var(--accent-indigo,#4f46e5);"></ui-button>
          <ui-button onclick="openDialog('drawerBottom')" size="md" variant="outline" color="primary" label="Bottom Drawer" style="--btn-bg: var(--accent-indigo,#4f46e5);"></ui-button>
        </div>

        <ui-dialog-box id="drawerLeft" type="drawer" position="left" ok-text="Accept" cancel-text="Close" dialog-title="Navigation" subtitle="Main Menu" icon="menu" icon-library="lucide">
           <div style="padding: 16px;">
              <p>This is a <b>Left Drawer</b>.</p>
              <p>Ideal for primary navigation in mobile or dashboards.</p>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="drawerRight" type="drawer" position="right" ok-text="Save" cancel-text="Dismiss" dialog-title="Properties" subtitle="Element Inspector" icon="info" icon-library="lucide">
           <div style="padding: 16px;">
              <p>This is a <b>Right Drawer</b>.</p>
              <p>Commonly used for inspecting items in a table or list.</p>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="drawerTop" type="drawer" position="top" ok-text="Search" cancel-text="Close" dialog-title="Global Search" subtitle="Search across all resources" icon="search" icon-library="lucide">
           <div style="padding: 24px; text-align: center;">
              <ui-input placeholder="Search components..." style="width: 100%; max-width: 600px;"></ui-input>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="drawerBottom" type="drawer" position="bottom" ok-text="Execute" cancel-text="Close" dialog-title="System Actions" subtitle="Select an action to continue" icon="zap" icon-library="lucide">
           <div style="padding: 24px; display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px;">
              <ui-button label="🚀 Deploy" size="md" variant="outline" color="secondary" style="height: 80px; --btn-bg: #f3f4f6; --btn-text: #1e293b; border:1px solid var(--border-default,#e5e7eb);"></ui-button>
              <ui-button label="🧪 Test" size="md" variant="outline" color="secondary" style="height: 80px; --btn-bg: #f3f4f6; --btn-text: #1e293b; border:1px solid var(--border-default,#e5e7eb);"></ui-button>
              <ui-button label="🗑️ Delete" size="md" variant="outline" color="danger" style="height: 80px; --btn-bg: var(--accent-red-soft,#fef2f2); border: 1px solid #fee2e2;"></ui-button>
           </div>
        </ui-dialog-box>
      </div>
    `;
  };

  window.showFullscreenDemo = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🖥️ Fullscreen Interaction</h3>
        <p style="margin-bottom: 20px; color: #6b7280;">The fullscreen type occupies the entire viewport, providing an immersive experience for complex editors or wizards.</p>
        
        <ui-button onclick="openDialog('fullDialog')" size="md" variant="outline" color="secondary" label="🖥️ Open Immersive Editor" style="--btn-bg: #111827; border-radius: 12px;"></ui-button>

        <ui-dialog-box id="fullDialog" type="fullscreen" dialog-title="Zenith Cloud IDE" icon="code" icon-library="lucide" ok-text="Build & Deploy" cancel-text="Discard Changes">
           <div style="height: 100%; display: flex; flex-direction: column; background: #000;">
              <!-- Real Code Editor Integration -->
              <div style="flex: 1; min-height: 0;">
                <ui-code-editor 
                  language="typescript" 
                  value='export class CloudService {\n  private workers = 12;\n\n  async provision() {\n    console.log("Provisioning resources...");\n    return await fetch("/api/v1/cloud");\n  }\n}'
                  style="height: 100%;"
                ></ui-code-editor>
              </div>

              <!-- Real Terminal Integration -->
              <div style="height: 200px; border-top: 2px solid #333;">
                <ui-terminal 
                  title="Cloud Shell" 
                  prompt="zenith-cloud:~$" 
                  history='["npm install", "npm run build"]'
                ></ui-terminal>
              </div>
           </div>
        </ui-dialog-box>
      </div>
    `;
  };

  window.showDensityDemo = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>⚖️ Visual Density Comparison</h3>
        <p style="margin-bottom: 20px; color: #6b7280;">Three density levels to match different UI contexts and user preferences.</p>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-button onclick="openDialog('densCompact')" size="md" variant="outline" color="success" label="Compact Mode" style="--btn-bg: #10b981;"></ui-button>
          <ui-button onclick="openDialog('densCozy')" size="md" variant="outline" color="success" label="Cozy (Primary)" style="--btn-bg: #10b981;"></ui-button>
          <ui-button onclick="openDialog('densComfortable')" size="md" variant="outline" color="success" label="Comfortable Mode" style="--btn-bg: #10b981;"></ui-button>
        </div>

        <ui-dialog-box id="densCompact" density="compact" dialog-title="Compact Dialog" icon="server" icon-library="lucide" ok-text="Done">
           <div style="font-size: 13px;">Compact mode reduces paddings and font sizes for data-dense applications.</div>
        </ui-dialog-box>

        <ui-dialog-box id="densCozy" density="cozy" dialog-title="Cozy Dialog" icon="layout" icon-library="lucide" ok-text="Done">
           <div>Cozy mode is the default, balanced for standard interaction.</div>
        </ui-dialog-box>

        <ui-dialog-box id="densComfortable" density="comfortable" dialog-title="Comfortable Dialog" icon="coffee" icon-library="lucide" ok-text="Done">
           <div style="font-size: 18px;">Comfortable mode provides generous white space and larger fonts for readability.</div>
        </ui-dialog-box>
      </div>
    `;
  };

  window.showPromiseDemo = async function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>🤝 Promise-based API (Modern DX)</h3>
        <p style="margin-bottom: 20px; color: #6b7280;">Use <code>await dialog.openDialog()</code> to write clean, linear code for complex user flows.</p>
        
        <ui-button id="promiseFlowBtn" onclick="startWizardSequence()" size="md" variant="outline" color="secondary" label="🚀 Launch Project Wizard" style="--btn-bg: var(--accent-yellow,#f59e0b); border-radius: 12px;"></ui-button>
        <div id="promiseStatus" style="margin-top: 16px; font-weight: 600; color: #10b981;">Status: Idle</div>

        <ui-dialog-box id="wizardDialog" width="500px" icon-library="lucide" cancel-text="Cancel">
           <div id="wizardContent" style="padding: 16px;"></div>
        </ui-dialog-box>
      </div>
    `;

    window.startWizardSequence = async () => {
      const startBtn = document.getElementById('promiseFlowBtn');
      if (startBtn.disabled) return;
      startBtn.disabled = true;

      const dlg = document.getElementById('wizardDialog');
      const content = document.getElementById('wizardContent');
      const statusLine = document.getElementById('promiseStatus');

      const setStepUI = (num, title, body, showNext = true, nextLabel = 'Continue') => {
        dlg.dialogTitle = `Wizard Step ${num}: ${title}`;
        dlg.steps = 4;
        dlg.currentStep = num;
        content.innerHTML = body;
        dlg.okText = showNext ? nextLabel : '';
      };

      statusLine.textContent = 'Status: Wizard Running...';
      dlg.show();

      // Step 1
      setStepUI(1, 'Configuration', "<h4>Welcome to the Setup Wizard</h4><p>We'll guide you through the initial configuration. Click Continue to proceed.</p>");
      await new Promise(r => dlg.addEventListener('ok', e => {
        e.preventDefault();
        r();
      }, { once: true }));

      // Step 2 (Loading Step)
      setStepUI(
        2,
        'Processing',
        "<div style='text-align:center; padding:20px;'><h4 id='procMsg'>Applying Settings...</h4><div style='margin-top:15px; color:#10b981;'>Please wait while we sync with the cloud.</div></div>",
        false,
      );
      dlg.loading = true;
      await new Promise(r => setTimeout(r, 2000));
      dlg.loading = false;

      // Step 3
      setStepUI(3, 'Security', '<h4>Step 3: Security Policy</h4><p>Scanning firewall rules and generating encryption keys for the new cluster.</p>');
      await new Promise(r => dlg.addEventListener('ok', e => {
        e.preventDefault();
        r();
      }, { once: true }));

      // Step 4
      setStepUI(4, 'Completion', '<h4>✨ Success!</h4><p>All settings have been applied successfully. You can now close this wizard.</p>', true, 'Finish');
      await new Promise(r => dlg.addEventListener('ok', r, { once: true }));

      dlg.hide();
      statusLine.textContent = 'Status: Setup Completed!';
      startBtn.disabled = false;
    };
  };

  window.showSlotsAndPartsDemo = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>💎 Enterprise Slots & Parts Mastery</h3>
        <p style="margin-bottom: 20px; color: #6b7280;">Granular control over specific sections using <b>Slots</b> for content and <b>CSS Parts</b> for styling.</p>
        
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-button onclick="openDialog('dSlotsAdvanced')" size="md" variant="outline" color="secondary" label="Deep Slotting" style="--btn-bg: var(--accent-pink,#ec4899);"></ui-button>
          <ui-button onclick="openDialog('dPartsStyling')" size="md" variant="outline" color="secondary" label="Part-based Styling" style="--btn-bg: #111827;"></ui-button>
        </div>

        <ui-dialog-box id="dSlotsAdvanced" icon-library="lucide" width="500px" ok-text="Primary Action" cancel-text="Secondary">
           <div slot="title" style="color:var(--accent-pink,#ec4899); font-weight: 800; display: flex; align-items: center; gap: 8px;">
              <ui-icon name="heart" size="20px"></ui-icon> Custom Title Slot
           </div>
           <div slot="subtitle" style="color:var(--accent-indigo,#6366f1); font-style: italic;">
              This subtitle is injected via slot="subtitle"
           </div>
           <div slot="body" style="padding: 20px; background:var(--accent-pink-soft,#fdf2f8); border-radius: 12px; border: 1px dashed #ec4899;">
              <p>This entire body area is controlled by <b>slot="body"</b>.</p>
              <ui-button label="Nested Button"></ui-button>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="dPartsStyling" dialog-title="CSS Parts Customization" icon="palette" icon-library="lucide" ok-text="Apply Style" class="custom-parts-demo">
           <div>
              <p>This dialog is styled entirely from the outside using <code>::part()</code> selectors.</p>
              <p>No internal styles were modified to achieve this "Cyberpunk" theme.</p>
           </div>
        </ui-dialog-box>

        <style>
           #dPartsStyling::part(backdrop) { background-color: rgba(139, 92, 246, 0.3); backdrop-filter: blur(10px) hue-rotate(90deg); }
           #dPartsStyling::part(panel) { background: #0f172a; border: 2px solid #00fff2; box-shadow: 0 0 20px #00fff2; }
           #dPartsStyling::part(header) { background: linear-gradient(90deg, #1e293b, #0f172a); border-bottom: 1px solid #00fff2; color: #00fff2; }
           #dPartsStyling::part(body) { color: #e2e8f0; }
           #dPartsStyling::part(footer) { background: #1e293b; border-top: 1px solid #00fff2; }
           #dPartsStyling::part(ok-btn) { background: #00fff2; color:var(--text-primary,#0f172a); font-weight: 900; text-transform: uppercase; border-radius: 0; clip-path: polygon(10% 0, 100% 0, 90% 100%, 0 100%); }
        </style>
      </div>
    `;
  };

  window.showMessageBoxDemo = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block" style="padding: 24px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
        <h3 style="margin-top: 0; color:var(--text-primary,#1e293b);">💬 Enterprise MessageBox</h3>
        <p style="color:var(--text-secondary,#64748b); font-size: 14px; line-height: 1.6;">
          Simplified modal layout optimized for system notifications and informational alerts. Centers the content and provides high-visibility headers.
        </p>
        <ui-button onclick="openDialog('msgBoxDialog')" size="md" variant="outline" color="secondary" label="Open MessageBox" style="margin-top: 12px; --btn-bg: #5b21b6;"></ui-button>
      </div>
      <ui-dialog-box id="msgBoxDialog" type="messagebox" status="success" dialog-title="Cloud Sync Complete" subtitle="Project: Zenith Core v4.0" ok-text="Understood" icon-library="lucide" icon="cloud-check">
        <div style="padding: 24px; text-align: center;">
           <div style="font-size: 48px; margin-bottom: 16px;">✅</div>
           <p style="margin: 0; font-weight: 600; font-size: 18px;">Deployment Successful</p>
           <p style="color:var(--text-secondary,#64748b); margin-top: 8px;">All assets have been optimized and synchronized with the production cluster in <b>us-east-1</b>.</p>
        </div>
      </ui-dialog-box>
    `;
  };

  window.showConfirmDemo = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block" style="padding: 24px; background:var(--accent-red-soft,#fef2f2); border-radius: 12px; border: 1px solid #fee2e2;">
        <h3 style="margin-top: 0; color: #991b1b;">🗑️ High-Stakes Confirmation</h3>
        <p style="color:var(--accent-red,#b91c1c); font-size: 14px; line-height: 1.6;">
          Specialized "confirm" type for destructive actions. Features custom confirmation text that must be acknowledged before proceeding.
        </p>
        <ui-button onclick="openDialog('confirmDangerDialog')" size="md" variant="outline" color="danger" label="Delete Production Database" style="margin-top: 12px; --btn-bg: var(--accent-red,#dc2626);"></ui-button>
      </div>
      <ui-dialog-box id="confirmDangerDialog" 
          type="confirm" 
          status="error" 
          dialog-title="Critical Action Required" 
          icon="trash-2" 
          icon-library="lucide" 
          width="450px" 
          ok-text="Destroy Database Permanently" 
          cancel-text="Abort Action" 
          confirmation-text="I understand that this action will result in permanent loss of all analytic historical data.">
        <div style="padding: 24px;">
           <p style="margin: 0;">You are attempting to delete the <b>Zenith_Sales_2024</b> database. This will affect 45 related services and cannot be reversed.</p>
        </div>
      </ui-dialog-box>
    `;
  };

  window.showPromptDemo = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block" style="padding: 20px; background: #f3f4f6; border-radius: 12px; border: 1px dashed #d1d5db;">
        <h3 style="margin-top: 0;">✍️ Alert Input (Prompt)</h3>
        <p style="color: #6b7280; font-size: 14px;">Built-in input field for collecting user input with full async result support.</p>
        <ui-button id="promptBtn" size="md" variant="outline" color="secondary" label="Launch Prompt" style="--btn-bg: var(--accent-cyan,#0891b2);"></ui-button>
        <div id="promptResult" style="margin-top: 16px; min-height: 40px; padding: 12px; background:var(--bg-primary,white); border-radius: 6px; border:1px solid var(--border-default,#e5e7eb); display: flex; align-items: center;">
           <span style="color: #9ca3af; font-style: italic;">Results will appear here...</span>
        </div>
      </div>
      <ui-dialog-box id="promptDialog" type="prompt" status="default" dialog-title="Create New Project" subtitle="Enterprise Project Wizard" prompt-label="Project Identifier" prompt-placeholder="Enter unique project name" prompt-initial-value="Zenith-Alpha-2026" ok-text="Initialize Project" cancel-text="Discard" icon="plus-circle"></ui-dialog-box>
    `;

    const dialog = container.querySelector('#promptDialog');
    const btn = container.querySelector('#promptBtn');
    const resultDisplay = container.querySelector('#promptResult');

    if (btn && dialog) {
      btn.onclick = async () => {
        resultDisplay.innerHTML = '<span style="color: #10b981;">Waiting for input...</span>';
        const result = await dialog.showWithResult();
        if (result.canceled) {
          resultDisplay.innerHTML = '<span style="color:var(--accent-red,#ef4444); font-weight: bold;">✕ Creation Canceled</span>';
        } else {
          resultDisplay.innerHTML = `<div style="display: flex; flex-direction: column;"><span style="color: #10b981; font-weight: bold;">✓ Project Initialized Successfully</span><span style="font-size: 12px; color: #6b7280;">Returned Value: ${result.data}</span></div>`;
        }
      };
    }
  };

  window.showMenuShowroom = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block" style="padding: 24px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); margin-bottom: 20px;">
        <h3 style="margin-top: 0; color:var(--text-primary,#1e293b);">⋮ Enterprise Action Menu</h3>
        <p style="color:var(--text-secondary,#64748b); font-size: 14px; line-height: 1.6;">
          Elevate headers with context-aware actions. Customize the trigger icon and tooltip title for branded experiences.
        </p>
        <div style="display: flex; gap: 12px; margin-top: 16px;">
          <ui-button onclick="openDialog('menuShowroom1')" size="md" variant="outline" color="primary" label="Standard Menu" style="--btn-bg: var(--accent-indigo,#4f46e5);"></ui-button>
          <ui-button onclick="openDialog('menuShowroomCustom')" size="md" variant="outline" color="secondary" label="Custom Icon & Title" style="--btn-bg: #0f172a;"></ui-button>
        </div>
      </div>

      <ui-dialog-box id="menuShowroom1" 
          dialog-title="System Logs" 
          icon-library="lucide" 
          icon="activity"
          menu-items='[{"id":"refresh", "label":"Refresh Data", "icon":"refresh-cw"}, {"id":"export", "label":"Export CSV", "icon":"download"}, {"type":"separator"}, {"id":"clear", "label":"Clear History", "icon":"trash-2", "variant":"danger"}]'>
        <div style="padding: 20px;">
          <p>Click the standard <b>⋮</b> button in the header to see available actions.</p>
        </div>
      </ui-dialog-box>

      <ui-dialog-box id="menuShowroomCustom" 
          dialog-title="Project Settings" 
          icon-library="lucide" 
          icon="settings"
          menu-icon="sliders-horizontal"
          menu-title="Configuration Settings"
          menu-items='[{"id":"general", "label":"General Settings", "icon":"user"}, {"id":"billing", "label":"Billing Info", "icon":"credit-card"}]'>
        <div style="padding: 20px;">
          <p>This dialog uses a custom menu icon (<b>Sliders</b>) and a custom tooltip title (<b>Configuration Settings</b>).</p>
        </div>
      </ui-dialog-box>
    `;

    // Listen for menu actions
    [container.querySelector('#menuShowroom1'), container.querySelector('#menuShowroomCustom')].forEach(d => {
      if (d) {
        d.addEventListener('menuAction', ev => {
          alert(`Executing action: ${ev.detail.id || ev.detail.item?.id}`);
        });
      }
    });
  };

  window.showTraySystemDemo = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🗂 Global Tray & Peek System</h3>
        <p style="margin-bottom: 20px; color: #6b7280;">Modern enterprise application taskbar. Minimized windows move to a centered dock with scrollable tabs and status indicators.</p>
        
        <div style="display: flex; gap: 15px; flex-wrap: wrap; margin-bottom: 30px;">
           <ui-button onclick="spawnTrayDialog('Terminal', 'terminal', 'info')" size="md" variant="outline" color="secondary" label="🖥️ Open Terminal" style="--btn-bg: #1e293b;"></ui-button>
           <ui-button onclick="spawnTrayDialog('Messages', 'message-square', 'success')" size="md" variant="outline" color="success" label="💬 Open Chat" style="--btn-bg: var(--accent-green,#059669);"></ui-button>
           <ui-button onclick="spawnTrayDialog('Errors', 'alert-circle', 'error')" size="md" variant="outline" color="danger" label="🚨 Open Alerts" style="--btn-bg: var(--accent-red,#dc2626);"></ui-button>
           <ui-button onclick="spawnManyTrayDialogs(8)" size="md" variant="outline" color="primary" label="🌀 Spawn 8+ Windows" style="--btn-bg: var(--accent-indigo,#4f46e5);"></ui-button>
        </div>

        <div style="background: rgba(59, 130, 246, 0.05); border: 2px dashed #10b981; border-radius: 16px; padding: 40px; text-align: center;">
           <div style="font-size: 24px; margin-bottom: 12px;">👇</div>
           <p style="font-weight: 700; color: #1e3a8a; margin: 0;">MINIMIZE THE WINDOWS ABOVE</p>
           <p style="color: #10b981; font-size: 14px;">They will cluster into the global tray at the bottom center of the screen.</p>
           <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-top: 20px;"><b>Pro Tip:</b> Use the "≡ All Tabs" menu in the tray to manage many windows at once!</p>
        </div>
      </div>
    `;

    window.spawnTrayDialog = (title, icon, status) => {
      const id = 'tray-' + Math.random().toString(36).substr(2, 9);
      const d = document.createElement('ui-dialog-box');
      d.id = id;
      d.dialogTitle = title;
      d.dockLabel = title; // Custom label for tray
      d.icon = icon;
      d.status = status;
      d.showMinimize = true;
      d.showMaximize = true;
      d.draggable = true;
      d.width = '350px';
      d.okText = 'Acknowledge';
      d.cancelText = 'Ignore';
      d.iconLibrary = 'lucide';
      d.innerHTML = `
          <div style="padding: 20px;">
             <h4>${title} Window</h4>
             <p>This window is integrated with the global Tray registry.</p>
             <p>Status: <b style="color: var(--ui-status-color, #1e293b)">${status.toUpperCase()}</b></p>
             <div style="margin-top:20px; padding:12px; background:var(--bg-tertiary,#f1f5f9); border-radius:8px; font-family:monospace; font-size:12px;">
                const d = document.createElement('ui-dialog-box');<br>
                d.dockLabel = '${title}';<br>
                d.minimized = true;
             </div>
          </div>
        `;
      document.body.appendChild(d);
      setTimeout(() => d.show(), 50);
    };

    window.spawnManyTrayDialogs = count => {
      const icons = ['search', 'settings', 'user', 'bell', 'heart', 'star', 'cpu', 'database'];
      for (let i = 0; i < count; i++) {
        setTimeout(() => {
          const icon = icons[i % icons.length];
          const d = document.createElement('ui-dialog-box');
          d.dialogTitle = `Process #${i + 1}`;
          d.dockLabel = `Proc-${i + 1}`;
          d.icon = icon;
          d.showMinimize = true;
          d.draggable = true;
          d.iconLibrary = 'lucide';
          d.width = '250px';
          // Start minimized to show tray behavior immediately
          d.minimized = true;
          document.body.appendChild(d);
          d.show();
        }, i * 200);
      }
    };
  };

  window.showGlassStatusShowroom = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>✨ Glass & Status Showroom</h3>
        <p style="margin-bottom: 30px; color:var(--text-secondary,#64748b);">Showcasing ultra-modern visual variants and status-aware styling.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
           <!-- Glass Info -->
           <div style="background: rgba(59, 130, 246, 0.1); border: 1px solid rgba(59, 130, 246, 0.2); padding: 24px; border-radius: 16px;">
              <h4 style="margin-top:0; color:var(--accent-blue,#2563eb);">💎 Glass Variant</h4>
              <p style="font-size: 13px; color:var(--accent-blue,#1e40af);">Frosted glass effect with high-fidelity blur. Works best over colorful backgrounds.</p>
              <ui-button onclick="openDialog('showroomGlass')" size="md" variant="outline" color="primary" label="Open Glass" style="--btn-bg: var(--accent-blue,#2563eb);"></ui-button>
           </div>
           
           <!-- Minimal Primary -->
           <div style="background: rgba(244, 114, 182, 0.1); border: 1px solid rgba(244, 114, 182, 0.2); padding: 24px; border-radius: 16px;">
              <h4 style="margin-top:0; color:var(--accent-pink,#db2777);">📏 Minimal Variant</h4>
              <p style="font-size: 13px; color: #9d174d;">Clean, floating look without a background color on the header. Modern and lightweight.</p>
              <ui-button onclick="openDialog('showroomMinimal')" size="md" variant="outline" color="secondary" label="Open Minimal" style="--btn-bg: var(--accent-pink,#db2777);"></ui-button>
           </div>

           <!-- Ghost Success -->
           <div style="background: rgba(16, 185, 129, 0.1); border: 1px solid rgba(16, 185, 129, 0.2); padding: 24px; border-radius: 16px;">
              <h4 style="margin-top:0; color:var(--accent-green,#059669);">👻 Ghost Variant</h4>
              <p style="font-size: 13px; color:var(--accent-green,#065f46);">Fully transparent surface with border emphasis. Minimalist design.</p>
              <ui-button onclick="openDialog('showroomGhost')" size="md" variant="outline" color="success" label="Open Ghost" style="--btn-bg: var(--accent-green,#059669);"></ui-button>
           </div>

           <!-- Status Tints -->
           <div style="background: rgba(245, 158, 11, 0.1); border: 1px solid rgba(245, 158, 11, 0.2); padding: 24px; border-radius: 16px;">
              <h4 style="margin-top:0; color:var(--accent-yellow,#d97706);">🎨 Status Tints</h4>
              <p style="font-size: 13px; color:var(--accent-yellow,#92400e);">Automatic top-border and icon tinting based on status (info, success, warning, error).</p>
              <div style="display:flex; gap:8px;">
                 <ui-button onclick="document.getElementById('showroomStatus').status='error'; openDialog('showroomStatus')" size="md" variant="outline" color="danger" label="Error"></ui-button>
                 <ui-button onclick="document.getElementById('showroomStatus').status='warning'; openDialog('showroomStatus')" size="md" variant="outline" color="warning" label="Warning" style="--btn-bg: var(--accent-yellow,#d97706);"></ui-button>
                 <ui-button onclick="document.getElementById('showroomStatus').status='success'; openDialog('showroomStatus')" size="md" variant="outline" color="success" label="Success"></ui-button>
              </div>
           </div>
        </div>

        <!-- Dialogs -->
        <ui-dialog-box id="showroomGlass" variant="glass" status="info" dialog-title="Glass System" subtitle="Aero Blur Enabled" icon="sparkles" icon-library="lucide" width="500px">
           <div style="padding: 40px; text-align: center;">
              <h3>Ultra High Fidelity</h3>
              <p>This dialog uses advanced CSS back-drop filters for a professional, glassmorphism look.</p>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="showroomMinimal" variant="minimal" status="success" dialog-title="Modern Minimal" subtitle="Clean aesthetics" icon="feather" icon-library="lucide" width="450px" ok-text="Clear">
           <div style="padding: 24px;">
              <p>Minimal variant removes header backgrounds to emphasize the content and typography.</p>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="showroomGhost" variant="ghost" status="default" dialog-title="Ghost Interface" icon="ghost" icon-library="lucide" width="400px">
           <div style="padding: 24px; color: white;">
              <p>Ghost variant is fully transparent. Use it for overlay widgets or simplified alerts.</p>
           </div>
        </ui-dialog-box>

        <ui-dialog-box id="showroomStatus" variant="default" status="error" dialog-title="Dynamic Status" icon="shield-alert" icon-library="lucide" width="400px" ok-text="Acknowledge">
           <div style="padding: 24px;">
              <p>Status tints apply to the top indicator bar and header icons automatically.</p>
           </div>
        </ui-dialog-box>
      </div>
    `;
  };

  window.showEnterpriseLogicShowcase = function () {
    const container = document.getElementById('dialogDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🧠 Advanced Enterprise Logic</h3>
        <p style="margin-bottom: 24px; color:var(--text-secondary,#64748b);">Showcasing recursive nesting, time-sensitive alerts, and layout persistence.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
           <!-- Recursive Nesting -->
           <div style="background:var(--bg-primary,white); border:1px solid var(--border-default,#e2e8f0); padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
              <h4 style="margin: 0 0 10px 0; color:var(--accent-purple,#7c3aed);">🌳 Triple Nesting</h4>
              <p style="font-size: 13px; color: #6b7280; line-height: 1.5; margin-bottom: 20px;">
                Demonstrates automatic backdrop dimming, focus trapping, and recursive z-index management across three levels of depth.
              </p>
              <ui-button onclick="openDialog('entNestedP')" size="md" variant="outline" color="primary" label="Launch Nested Tree" style="width: 100%; --btn-bg: var(--accent-purple,#7c3aed);"></ui-button>
           </div>

           <!-- Auto-Closing Alert -->
           <div style="background:var(--bg-primary,white); border:1px solid var(--border-default,#e2e8f0); padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
              <h4 style="margin: 0 0 10px 0; color:var(--accent-yellow,#f59e0b);">⏱️ Auto-Expiring Alert</h4>
              <p style="font-size: 13px; color: #6b7280; line-height: 1.5; margin-bottom: 20px;">
                Programmatic lifecycle control with a synchronized countdown timer and progress bar for time-sensitive notifications.
              </p>
              <ui-button onclick="runEntAutoClose()" size="md" variant="outline" color="warning" label="Start Timer Demo" style="width: 100%; --btn-bg: var(--accent-yellow,#f59e0b);"></ui-button>
           </div>

           <!-- Workspace Persistence -->
           <div style="background:var(--bg-primary,white); border:1px solid var(--border-default,#e2e8f0); padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
              <h4 style="margin: 0 0 10px 0; color: #10b981;">💾 Layout Persistence</h4>
              <p style="font-size: 13px; color: #6b7280; line-height: 1.5; margin-bottom: 20px;">
                Remembers window position and size across page reloads using localStorage. Drag/resize then refresh the browser.
              </p>
              <ui-button onclick="openDialog('entRemember')" size="md" variant="outline" color="success" label="Open Persistent Window" style="width: 100%; --btn-bg: #10b981;"></ui-button>
           </div>

           <!-- Custom Sizing -->
           <div style="background:var(--bg-primary,white); border:1px solid var(--border-default,#e2e8f0); padding: 24px; border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
              <h4 style="margin: 0 0 10px 0; color: #10b981;">📐 Custom Dimension</h4>
              <p style="font-size: 13px; color: #6b7280; line-height: 1.5; margin-bottom: 20px;">
                Bypass semantic sizing (sm, md, lg) and define pixel-perfect footprints.
              </p>
              <div style="display: flex; gap: 8px; margin-bottom: 12px;">
                 <ui-input id="ent-custom-w" placeholder="Width (e.g. 800px)" style="flex:1;"></ui-input>
                 <ui-input id="ent-custom-h" placeholder="Height (e.g. 300px)" style="flex:1;"></ui-input>
              </div>
              <ui-button onclick="runEntCustomSize()" size="md" variant="outline" color="success" label="Launch Custom Size" style="width: 100%; --btn-bg: #10b981;"></ui-button>
           </div>
        </div>

        <!-- Dialog Definitions -->
        <ui-dialog-box id="entCustomDim" dialog-title="Custom Precision" ok-text="Clear" cancel-text="Dismiss" icon="ruler" icon-library="lucide"></ui-dialog-box>
        <ui-dialog-box id="entNestedP" dialog-title="Parent Layer [Level 1]" ok-text="Accept All" cancel-text="Dismiss Tree" icon="cpu" icon-library="lucide" width="550px">
           <div style="padding: 24px;">
              <h4 style="margin-top:0">System Root</h4>
              <p>Stacked z-index management and recursive backdrop scaling are handled natively.</p>
              <ui-button onclick="openDialog('entNestedC1')" size="md" variant="outline" color="primary" label="Open Level 2" style="--btn-bg: var(--accent-purple,#7c3aed);"></ui-button>
           </div>
           
           <ui-dialog-box id="entNestedC1" dialog-title="Module Layer [Level 2]" ok-text="Save Module" cancel-text="Close" icon="package" icon-library="lucide" width="450px" portal="false">
              <div style="padding: 24px;">
                 <h4 style="margin-top:0">Intermediate Node</h4>
                 <p>Focus is trapped within this window until dismissed.</p>
                 <ui-button onclick="openDialog('entNestedC2')" size="md" variant="outline" color="primary" label="Open Level 3" style="--btn-bg: var(--accent-purple,#7c3aed);"></ui-button>
              </div>

              <ui-dialog-box id="entNestedC2" dialog-title="Detail Layer [Level 3]" ok-text="Finish" cancel-text="Close" icon="search" icon-library="lucide" width="350px" portal="false">
                 <div style="padding: 24px;">
                    <h4 style="margin-top:0">Detail View</h4>
                    <p>The deepest level of the current demonstration stack.</p>
                 </div>
              </ui-dialog-box>
           </ui-dialog-box>
        </ui-dialog-box>

        <ui-dialog-box id="entRemember" ok-text="Save Workspace" cancel-text="Close" remember="true" draggable="true" dialog-title="Workspace Restore" subtitle="State Persistence Demo" icon="hard-drive" icon-library="lucide" width="400px">
           <div style="padding: 24px;">
              <div style="background:var(--accent-blue-soft,#eff6ff); border: 1px solid #bfdbfe; color:var(--accent-blue,#1e40af); padding: 16px; border-radius: 8px; font-size: 14px;">
                <strong>Instruction:</strong> Position this window anywhere and resize it. Refresh the page to see it reappear exactly here.
              </div>
           </div>
        </ui-dialog-box>
      </div>
    `;

    // Script for Auto Close in demo
    window.runEntAutoClose = function () {
      const d = document.createElement('ui-dialog-box');
      d.dialogTitle = 'Security Sync Active';
      d.status = 'warning';
      d.icon = 'clock';
      d.iconLibrary = 'lucide';
      d.width = '400px';
      d.okText = 'Acknowledge';
      d.cancelText = 'Abort';
      d.innerHTML =
        ' \
          <div style="padding: 24px; text-align: center"> \
            <h2 style="margin: 0">Auto-Finalizing</h2> \
            <p>Session sync will complete and close in <span id="ent-timer-val">3</span>s...</p> \
            <div style="height: 4px; background: #e2e8f0; width: 100%; margin-top: 15px; border-radius: 2px; overflow: hidden"> \
                <div id="ent-timer-progress" style="height: 100%; background: var(--accent-yellow,#f59e0b); width: 100%; transition: width 3s linear"></div> \
            </div> \
          </div> \
        ';
      document.body.appendChild(d);
      d.show();

      let count = 3;
      const interval = setInterval(() => {
        count--;
        const label = document.getElementById('ent-timer-val');
        if (label) label.textContent = count;
        if (count <= 0) {
          clearInterval(interval);
          d.hide();
          setTimeout(() => document.body.removeChild(d), 1000);
        }
      }, 1000);

      setTimeout(() => {
        const prog = document.getElementById('ent-timer-progress');
        if (prog) prog.style.width = '0%';
      }, 50);
    };

    window.runEntCustomSize = function () {
      const w = document.getElementById('ent-custom-w').value || '800px';
      const h = document.getElementById('ent-custom-h').value || '350px';
      const modal = document.getElementById('entCustomDim');
      if (modal) {
        modal.size = 'custom';
        modal.width = w;
        modal.height = h;
        modal.setAttribute('width', w);
        modal.setAttribute('height', h);
        modal.subtitle = `Custom Geometry: ${w} x ${h}`;
        modal.show();
      }
    };
  };
}
