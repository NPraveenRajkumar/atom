// Aside Panel Demo
export function initAsidePanelDemo() {
  const section = document.getElementById('aside-panel');
  if (!section) return;

  const industrialActions = [
    { label: 'Export Telemetry', icon: 'download', shortcut: 'Ctrl+E' },
    { label: 'Clear Diagnostic Logs', icon: 'trash-2', variant: 'danger' },
    { type: 'separator' },
    {
      label: 'System Configuration',
      icon: 'settings',
      children: [
        { label: 'Audio Haptics', type: 'checkbox', checked: true },
        { label: 'Voice Controls', type: 'checkbox', checked: true },
        { label: '3D Parallax', type: 'checkbox', checked: true },
      ],
    },
    { label: 'Force Re-sync', icon: 'refresh-cw' },
  ];

  section.innerHTML = `
    <p>Slide-in panels from any direction with overlay, resize, and customizable content.</p>

     <div class="demo-controls-wrapper" style="background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 12px 16px; border-radius: 10px; margin: 12px 0; display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 16px;">
       <div>
         <h4 style="margin: 0 0 8px; font-size: 10px; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.1em;">🚀 Orchestration</h4>
         <div style="display: flex; gap: 6px; flex-wrap: wrap;">
           <ui-button id="btnZenith"  label="Zenith" size="md"riant="outline"></ui-button>
           <ui-button id="btnNoOverlay"  label="No Overlay" size="md"riant="outline"></ui-button>
           <ui-button id="btnVerticalStack"  label="Vertical Stacks" size="md"riant="outline"></ui-button>
           <ui-button id="btnMasterAside"  label="🎮 Master" size="md"riant="outline"></ui-button>
         </div>
       </div>
 
       <div>
         <h4 style="margin: 0 0 8px; font-size: 10px; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.1em;">✨ Visuals</h4>
         <div style="display: flex; gap: 6px; flex-wrap: wrap;">
           <ui-button id="btnPremium" variant="outline" color="danger" label="Premium" size="md"ui-button>
           <ui-button id="btnFeedback" variant="outline" color="success" label="Feedback" size="md"ui-button>
           <ui-button id="btnDocumentation" variant="outline" color="info" label="Documentation" size="md"ui-button>
           <ui-button id="btnTransparent" variant="outline" color="secondary" label="Transparent" size="md"ui-button>
           <ui-button id="btnRtlMode" variant="outline" color="warning" label="RTL Mode" size="md"ui-button>
         </div>
       </div>
 
       <div>
         <h4 style="margin: 0 0 8px; font-size: 10px; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.1em;">🎬 Animation Mastery</h4>
         <div style="display: grid; grid-template-columns: 1fr; gap: 6px;">
           <div style="display: flex; gap: 4px;">
             <ui-button id="btnAnimSlide" variant="outline" color="success" label="Slide In-Out" size="md" style="flex:1"></ui-button>
             <ui-button id="btnAnimFade" variant="outline" color="secondary" label="Fade" size="md" style="flex:1"></ui-button>
             <ui-button id="btnAnimScale" variant="outline" color="secondary" label="Scale" size="md" style="flex:1"></ui-button>
           </div>
           <div style="display: flex; gap: 4px;">
             <ui-button id="btnSpeed01" variant="outline" color="secondary" label="⚡ 0.1s" size="md" style="flex:1"></ui-button>
             <ui-button id="btnSpeed1" variant="outline" color="success" label="🎯 1s" size="md" style="flex:1"></ui-button>
             <ui-button id="btnSpeed2" variant="outline" color="secondary" label="🎬 2s" size="md" style="flex:1"></ui-button>
           </div>
         </div>
       </div>
 
       <div>
         <h4 style="margin: 0 0 8px; font-size: 10px; text-transform: uppercase; color: var(--text-secondary); letter-spacing: 0.1em;">📐 Core</h4>
         <div style="display: flex; gap: 6px; flex-wrap: wrap;">
           <ui-button id="btnSlots" variant="outline" color="secondary" label="Slots" size="md"ui-button>
           <ui-button id="btnAxes" variant="outline" color="secondary" label="Axes" size="md"ui-button>
           <ui-button id="btnResize" variant="outline" color="secondary" label="Resize" size="md"ui-button>
         </div>
       </div>
    </div>

    <div id="asidePanelDemoContainer" style="margin-top: 20px;"></div>
  `;

  // --- REFACTORING: LOCAL FUNCTIONS ---

  function showZenithAsideDemo() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3 style="display: flex; align-items: center; gap: 8px;">👑 Sovereign Zenith Edition</h3>
        <p style="opacity: 0.7; margin-bottom: 24px;">The apex of technical workspace orchestration. Hands-free voice control and 3D depth tilt.</p>
        
        <div class="demo-mastery-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 32px;">
          <div style="background:var(--bg-secondary,#f8fafc); border:1px solid var(--border-default,#e2e8f0); padding: 24px; border-radius: 16px;">
            <h4 style="margin-top:0;">🤖 Industrial Control</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <ui-button id="btnTogglePrimary" variant="outline" color="success" label="⚡ Toggle Primary Panel"></ui-button>
              <ui-button id="btnToggleMini" variant="outline" color="primary" label="🤏 Toggle Mini State"></ui-button>
              <ui-button id="btnInitVoice" variant="outline" color="success" label="🎙️ Audio Commands: ENABLE" style="font-family: monospace;"></ui-button>
            </div>
          </div>
          <div style="background:var(--bg-secondary,#f8fafc); border:1px solid var(--border-default,#e2e8f0); padding: 24px; border-radius: 16px;">
            <h4 style="margin-top:0;">✨ High-Fidelity Themes</h4>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
              <ui-button id="themeDefault" variant="outline" color="secondary" label="Default"></ui-button>
              <ui-button id="themeGlass" variant="outline" color="secondary" label="Glass"></ui-button>
              <ui-button id="themeRadiant" variant="outline" color="secondary" label="Radiant"></ui-button>
              <ui-button id="themeZenith" variant="outline" color="secondary" label="Zenith"></ui-button>
            </div>
          </div>
        </div>

        <ui-aside-panel id="sovereignAside" direction="right" size="500px" resizable="true" haptic="true" theme="zenith" enable-parallax="true" show-actions="true" action-items='${JSON.stringify(industrialActions)}'>
          <div slot="header">
             <h3 style="margin:0;">Technical Workspace</h3>
             <p style="margin:4px 0 0; opacity:0.6; font-size:13px;">Real-time Telemetry & Asset Control</p>
          </div>
          <div slot="content">
             <div style="background: #000; color: #00ff00; padding: 15px; border-radius: 8px; font-family: monospace; font-size: 12px; border-left: 3px solid #00ff00;">
                > INITIALIZING NODES... [OK]<br>
                > HANDSHAKE COMPLETED AT NODE_42<br>
                > STREAMING TELEMETRY (98.2kbps)
             </div>
             <p style="margin-top:20px; font-size:14px;">Try the <b>Voice Commands</b>:<br> "Open Panel", "Collapse Panel", "Expand Side", "Close Side".</p>
             <div style="margin-top:20px; padding:15px; border:1px solid var(--border-default,#e2e8f0); border-radius:10px;">
                <h4 style="margin:0 0 10px; font-size:12px; text-transform:uppercase;">3D Depth Sensor</h4>
                <p style="margin:0; font-size:12px; color:var(--text-secondary,#64748b);">The content tilts in 3D space based on your mouse coordinates.</p>
             </div>
          </div>
          <div slot="footer">
             <ui-button id="btnApplyDiagnostics" variant="outline" color="success" label="APPLY DIAGNOSTICS" style="width:100%"></ui-button>
          </div>
        </ui-aside-panel>
      </div>
    `;

    const toggleMainAside = () => document.getElementById('sovereignAside')?.toggle();
    const toggleMiniAside = () => {
      const a = document.getElementById('sovereignAside');
      if (a) a.mini = !a.mini;
    };
    const setAsideTheme = t => {
      const a = document.getElementById('sovereignAside');
      if (a) {
        a.theme = t;
        a.show();
      }
    };
    const initVoiceAside = () => {
      const a = document.getElementById('sovereignAside');
      if (a) {
        a.enableVoiceControl = true;
        a.initVoice();
        alert('Voice Control Initialized. Try "Show Side" or "Collapse Side".');
      }
    };

    setTimeout(() => {
      document.getElementById('btnTogglePrimary')?.addEventListener('click', toggleMainAside);
      document.getElementById('btnToggleMini')?.addEventListener('click', toggleMiniAside);
      document.getElementById('btnInitVoice')?.addEventListener('click', initVoiceAside);

      document.getElementById('themeDefault')?.addEventListener('click', () => setAsideTheme('default'));
      document.getElementById('themeGlass')?.addEventListener('click', () => setAsideTheme('glass'));
      document.getElementById('themeRadiant')?.addEventListener('click', () => setAsideTheme('radiant'));
      document.getElementById('themeZenith')?.addEventListener('click', () => setAsideTheme('zenith'));

      document.getElementById('btnApplyDiagnostics')?.addEventListener('click', () => {
        document.getElementById('sovereignAside')?.hide();
      });
    }, 50);
  }

  function showPremiumAsideDemo() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="demo-block">
          <h3>💎 Premium Features Showcase</h3>
          <p style="color: #6b7280; margin-bottom: 24px;">Explore elite-tier features like Glassmorphism, Persistence, and Loading states.</p>

          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
            <!-- Glassmorphism -->
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 24px; border-radius: 12px; color: var(--text-primary);">
              <h4 style="margin: 0 0 12px; color: var(--text-primary);">Glassmorphism</h4>
              <p style="font-size: 14px; opacity: 0.9; margin-bottom: 20px;">Ultra-modern visual style with real-time backdrop filtering.</p>
              <ui-button id="btnOpenGlass" variant="outline" color="primary" label="Open Glass Panel" style="width: 100%"></ui-button>
            </div>

            <!-- State Persistence -->
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 24px; border-radius: 12px;">
              <h4 style="margin: 0 0 12px; color: var(--text-primary);">State Persistence</h4>
              <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 20px;">Remembers its open state and size even after a page refresh.</p>
              <ui-button id="btnOpenPersistent" variant="outline" color="success" label="Open Persistent Panel" style="width: 100%"></ui-button>
            </div>

            <!-- Loading States -->
            <div style="background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 24px; border-radius: 12px;">
              <h4 style="margin: 0 0 12px; color: var(--text-primary);">Loading Indicators</h4>
              <p style="font-size: 14px; color: var(--text-secondary); margin-bottom: 20px;">Built-in loading overlay for async data operations.</p>
              <ui-button id="btnOpenLoading" variant="outline" color="primary" label="Open Loading Panel" style="width: 100%"></ui-button>
            </div>
          </div>

          <ui-aside-panel id="glassPanel" variant="glass" backdrop-blur="8px" direction="right" size="450px">
            <div slot="header" style="color: inherit;">
              <h3 style="margin: 0;">✨ Premium Glass</h3>
            </div>
            <div slot="content">
              <div style="background: rgba(255, 255, 255, 0.1); border: 1px solid rgba(255, 255, 255, 0.2); padding: 20px; border-radius: 12px; margin-bottom: 20px;">
                <h4 style="margin: 0 0 10px;">Modern Aesthetics</h4>
                <p style="margin: 0; font-size: 14px; opacity: 0.8;">The glass variant uses CSS <code>backdrop-filter</code> and semi-transparent backgrounds to create a depth effect.</p>
              </div>
              <p>Perfect for high-end dashboards and creative applications where visual hierarchy needs to be maintained without completely blocking the background context.</p>
            </div>
          </ui-aside-panel>

          <ui-aside-panel id="persistentPanel" persist-key="demo-panel" resizable="true" direction="right" size="400px">
            <div slot="header">
              <h3 style="margin: 0;">💾 Persistent Panel</h3>
            </div>
            <div slot="content">
              <p>Try resizing this panel or closing it, then refresh the page. It will remember its exact state!</p>
              <div style="background:var(--bg-tertiary,#f1f5f9); padding: 15px; border-radius: 8px; margin-top: 20px;">
                <p style="margin: 0; font-size: 13px; color: #475569;">Uses <code>localStorage</code> linked to the <code>persist-key</code> property.</p>
              </div>
            </div>
          </ui-aside-panel>

          <ui-aside-panel id="loadingPanel" loading="true" direction="right" size="400px">
            <div slot="header">
              <h3 style="margin: 0;">⏳ Loading Data...</h3>
            </div>
            <div slot="content">
              <p>Content is currently being fetched.</p>
            </div>
            <div slot="footer">
              <ui-button id="btnStopLoading" variant="outline" color="success" label="Stop Loading" style="width: 100%"></ui-button>
            </div>
          </ui-aside-panel>
        </div>
      `;

    const openGlassPanel = () => document.getElementById('glassPanel')?.show();
    const openPersistentPanel = () => document.getElementById('persistentPanel')?.show();
    const openLoadingPanel = () => {
      const p = document.getElementById('loadingPanel');
      if (p) {
        p.loading = true;
        p.show();
      }
    };
    const stopAsideLoading = () => {
      const p = document.getElementById('loadingPanel');
      if (p) p.loading = false;
    };

    setTimeout(() => {
      document.getElementById('btnOpenGlass')?.addEventListener('click', openGlassPanel);
      document.getElementById('btnOpenPersistent')?.addEventListener('click', openPersistentPanel);
      document.getElementById('btnOpenLoading')?.addEventListener('click', openLoadingPanel);
      document.getElementById('btnStopLoading')?.addEventListener('click', stopAsideLoading);
    }, 50);
  }

  function showFloatingAsideDemo() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3 style="display: flex; align-items: center; gap: 8px;">🛸 Non-Full Layouts (Floating)</h3>
        <p style="opacity: 0.7; margin-bottom: 24px;">Floating panels that don't span the full height or width. Perfect for feedback widgets or quick toolbars.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-bottom: 32px;">
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 24px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            <h4 style="margin-top:0; color: var(--text-primary);">💬 Feedback Widget</h4>
            <p style="font-size:13px; color: var(--text-secondary);">Bottom-aligned floating panel matching industrial survey layouts.</p>
            <ui-button id="btnOpenFeedback" variant="outline" color="success" label="Open Feedback Panel" style="width: 100%"></ui-button>
          </div>
          <div style="background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 24px; border-radius: 16px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            <h4 style="margin-top:0; color: var(--text-primary);">🎯 Centered Flyout</h4>
            <p style="font-size:13px; color: var(--text-secondary);">Vertically centered panel on the screen edge.</p>
            <ui-button id="btnOpenCentered" variant="outline" color="success" label="Open Centered Flyout" style="width: 100%"></ui-button>
          </div>
        </div>

        <ui-aside-panel 
          id="feedbackPanel" 
          direction="right" 
          variant="floating" 
          floating-align="end" 
          floating-offset="30px"
          size="450px" 
          secondary-size="650px"
        >
          <div slot="header">
             <div style="display: flex; align-items: center; gap: 10px;">
                <img src="https://www.se.com/favicon.ico" style="width: 24px; height: 24px;">
                <h3 style="margin:0;">Schneider Electric Feedback</h3>
             </div>
          </div>
          <div slot="content">
             <p style="font-weight: bold; margin-bottom: 12px;">How satisfied are you today? *</p>
             <div style="display: flex; justify-content: space-between; gap: 4px; margin-bottom: 24px;">
                ${[0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(n => `<ui-button variant="outline" color="secondary" label="${n}" size="md"yle="flex: 1"></ui-button>`).join('')}
             </div>
             
             <div style="display: grid; gap: 16px; margin-bottom: 24px;">
                 <ui-input multiline="true" rows="3" label="Could you please describe your recent experience with us?" placeholder="Your thoughts..."></ui-input>
                 <ui-input multiline="true" rows="3" label="What suggestions would you recommend?" placeholder="Enhancements..."></ui-input>
             </div>
           
           <div style="display: flex; gap: 10px;">
              <ui-button id="btnCloseFeedback" variant="outline" color="secondary" label="Close" style="flex: 1"></ui-button>
              <ui-button id="btnSubmitFeedback" variant="outline" color="success" label="Submit" style="flex: 1"></ui-button>
           </div>
           
           <p style="text-align: center; font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 24px;">Powered by <b>Medallia</b></p>
        </div>
      </ui-aside-panel>

      <ui-aside-panel 
        id="centerFloatPanel" 
        direction="right" 
        variant="floating" 
        floating-align="center" 
        floating-offset="20px"
        size="350px" 
        secondary-size="400px"
        backdrop-blur="4px"
      >
        <div slot="header">
           <div style="display: flex; align-items: center; gap: 8px;">
              <ui-icon name="target" library="lucide" size="18px"></ui-icon>
              <h3 style="margin:0;">Centered Flyout</h3>
           </div>
        </div>
        <div slot="content">
           <p style="color:var(--text-secondary,#64748b); font-size: 14px; line-height: 1.6;">This panel is vertically centered on the screen edge using <code>floating-align="center"</code>.</p>
           <div style="margin-top: 20px; padding: 16px; background:var(--bg-tertiary,#f1f5f9); border-radius: 12px; font-size: 13px;">
              Perfect for quick tool selections or contextual utilities.
           </div>
        </div>
      </ui-aside-panel>
    </div>
  `;

    setTimeout(() => {
      document.getElementById('btnOpenFeedback')?.addEventListener('click', () => document.getElementById('feedbackPanel')?.show());
      document.getElementById('btnCloseFeedback')?.addEventListener('click', () => document.getElementById('feedbackPanel')?.hide());
      document.getElementById('btnSubmitFeedback')?.addEventListener('click', () => {
        alert('Feedback Submitted!');
        document.getElementById('feedbackPanel')?.hide();
      });
      document.getElementById('btnOpenCentered')?.addEventListener('click', () => document.getElementById('centerFloatPanel')?.show());
    }, 50);
  }

  function showSymmetricalFloatingDemo() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
    <div class="demo-block">
      <h3 style="display: flex; align-items: center; gap: 8px;">🛸 Symmetrical Flyouts Mastery</h3>
      <p style="opacity: 0.7; margin-bottom: 24px;">A showcase of floating panels sliding from every axis. Each is centered along its respective edge with ultra-smooth transitions.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 12px; margin-bottom: 40px; background: var(--bg-secondary); padding: 20px; border-radius: 12px; border: 1px dashed var(--border-default);">
         <ui-button id="btnFlyLeft" variant="outline" color="success" label="⬅️ Fly Left" style="height: 60px;"></ui-button>
         <ui-button id="btnFlyRight" variant="outline" color="primary" label="➡️ Fly Right" style="height: 60px;"></ui-button>
         <ui-button id="btnFlyTop" variant="outline" color="warning" label="⬆️ Fly Top" style="height: 60px;"></ui-button>
         <ui-button id="btnFlyBottom" variant="outline" color="danger" label="⬇️ Fly Bottom" style="height: 60px;"></ui-button>
      </div>
      
      <div style="background: var(--bg-primary, #fff); padding: 30px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0); text-align: center;">
         <p style="color:var(--text-secondary,#64748b); font-size: 14px;">Click the buttons above to trigger the respective directional flyouts.<br>They are configured with <code>variant="floating"</code> and <code>floating-align="center"</code>.</p>
      </div>

      <ui-aside-panel id="flyLeft" direction="left" variant="floating" floating-align="center" size="320px" secondary-size="450px" transition-duration="0.5s">
         <div slot="header" style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 8px; height: 24px; background: #10b981; border-radius: 99px;"></div>
            <h3 style="margin:0;">Left Centered</h3>
         </div>
         <div slot="content">
            <p style="color:var(--text-secondary,#64748b);">A floating utility panel sliding smoothly from the left edge. The 0.5s transition ensures a premium feel.</p>
         </div>
      </ui-aside-panel>

      <ui-aside-panel id="flyRight" direction="right" variant="floating" floating-align="center" size="320px" secondary-size="450px" transition-duration="0.5s">
         <div slot="header" style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 8px; height: 24px; background: var(--accent-purple,#8b5cf6); border-radius: 99px;"></div>
            <h3 style="margin:0;">Right Centered</h3>
         </div>
         <div slot="content">
            <p style="color:var(--text-secondary,#64748b);">The symmetrical counterpart for the right side of the workspace.</p>
         </div>
      </ui-aside-panel>

      <ui-aside-panel id="flyTop" direction="top" variant="floating" floating-align="center" size="160px" secondary-size="600px" transition-duration="0.6s">
         <div slot="header" style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 24px; height: 8px; background: var(--accent-yellow,#f59e0b); border-radius: 99px;"></div>
            <h3 style="margin:0;">Top Banner</h3>
         </div>
         <div slot="content">
            <p style="color:var(--text-secondary,#64748b); margin: 0;">A horizontal floating notification bar sliding from the top edge. Perfect for priority broadcasts.</p>
         </div>
      </ui-aside-panel>

      <ui-aside-panel id="flyBottom" direction="bottom" variant="floating" floating-align="center" size="160px" secondary-size="600px" transition-duration="0.6s">
         <div slot="header" style="display: flex; align-items: center; gap: 10px;">
            <div style="width: 24px; height: 8px; background: var(--accent-red,#ef4444); border-radius: 999px;"></div>
            <h3 style="margin:0;">Bottom Toolbar</h3>
         </div>
         <div slot="content">
            <p style="color:var(--text-secondary,#64748b); margin: 0;">Floating contextual controls appearing from the bottom. Great for secondary actions or player controls.</p>
         </div>
      </ui-aside-panel>
    </div>
  `;

    setTimeout(() => {
      document.getElementById('btnFlyLeft')?.addEventListener('click', () => document.getElementById('flyLeft')?.show());
      document.getElementById('btnFlyRight')?.addEventListener('click', () => document.getElementById('flyRight')?.show());
      document.getElementById('btnFlyTop')?.addEventListener('click', () => document.getElementById('flyTop')?.show());
      document.getElementById('btnFlyBottom')?.addEventListener('click', () => document.getElementById('flyBottom')?.show());
    }, 50);
  }

  function launchVerticalStack() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>📚 Multilayer Stack Orchestration</h3>
        <p>Using <code>stack-offset</code> to layer multiple concurrent panels.</p>
        <div style="display: flex; gap: 10px;">
          <ui-button id="btnStack1" variant="outline" color="success" label="Layer 1"></ui-button>
          <ui-button id="btnStack2" variant="outline" color="primary" label="Layer 2 (Offset)"></ui-button>
        </div>

        <ui-aside-panel id="stack1" direction="right" size="400px" theme="radiant">
           <div slot="header"><h3>Level 1</h3></div>
           <div slot="content"><p>Primary diagnostic layer.</p></div>
        </ui-aside-panel>

        <ui-aside-panel id="stack2" direction="right" size="350px" stack-offset="40" theme="glass">
           <div slot="header"><h3>Level 2</h3></div>
           <div slot="content"><p>Secondary contextual layer with 40px offset.</p></div>
        </ui-aside-panel>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnStack1')?.addEventListener('click', () => document.getElementById('stack1')?.show());
      document.getElementById('btnStack2')?.addEventListener('click', () => document.getElementById('stack2')?.show());
    }, 100);
  }

  function showRichAsideDemo() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>📄 Technical Documentation Reader</h3>
        <ui-button id="btnOpenManual" variant="outline" color="success" label="OPEN MANUAL" size="large"></ui-button>

        <ui-aside-panel id="docAside" direction="right" size="600px" resizable="true">
           <div slot="header">
              <h2 style="margin:0;">Sovereign User Manual</h2>
              <code style="font-size: 10px; opacity: 0.5;">v1.0.4-industrial</code>
           </div>
           <div slot="content">
              <h3>1. Overview</h3>
              <p>The Sovereign Aside Panel is a high-fidelity workspace component designed for technical orchestration.</p>
              
              <div style="background:var(--bg-tertiary,#f1f5f9); padding: 15px; border-radius: 8px; border-left: 4px solid #10b981; margin: 20px 0;">
                <h4 style="margin:0 0 5px; color: #1e3a8a;">Pro Tip</h4>
                <p style="margin:0; font-size: 13px;">Use the Alt + Arrows shortcut to resize the panel while it is open.</p>
              </div>

              <h3>2. Attributes</h3>
              <table style="width: 100%; border-collapse: collapse; font-size: 13px;">
                <tr style="background:var(--bg-secondary,#f8fafc); border-bottom:1px solid var(--border-default,#e2e8f0);"><th style="padding:10px; text-align:left;">Prop</th><th style="padding:10px; text-align:left;">Description</th></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding:10px;"><code>direction</code></td><td style="padding:10px;">Edge of origin</td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding:10px;"><code>variant</code></td><td style="padding:10px;">Thematic engine</td></tr>
                <tr style="border-bottom: 1px solid #f1f5f9;"><td style="padding:10px;"><code>resizable</code></td><td style="padding:10px;">Enable UX scaling</td></tr>
              </table>
           </div>
        </ui-aside-panel>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnOpenManual')?.addEventListener('click', () => document.getElementById('docAside')?.show());
    }, 100);
  }

  function showRtlAsideDemo() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block" dir="rtl">
        <h3>🌍 (RTL) מצב מימין לשמאל</h3>
        <p>Globalized interface support for Right-to-Left languages.</p>
        <ui-button id="btnOpenRtl" variant="outline" color="warning" label="פתח פנל (Open RTL)" size="large"></ui-button>

        <ui-aside-panel id="rtlAside" rtl="true" direction="right" size="400px">
           <div slot="header"><h3>שורת כותרת</h3></div>
           <div slot="content">
              <p>תוכן הפאנל מוצג מימין לשמאל באופן אוטומטי.</p>
              <ul style="padding-right: 20px;">
                <li>פריט ראשון</li>
                <li>פריט שני</li>
              </ul>
           </div>
        </ui-aside-panel>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnOpenRtl')?.addEventListener('click', () => document.getElementById('rtlAside')?.show());
    }, 100);
  }

  function showAnimationAsideDemo(type) {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>🎭 Kinetic Engine: ${type.toUpperCase()}</h3>
        <ui-button id="btnTestKinetics" variant="outline" color="secondary" label="TEST KINETICS" size="large"></ui-button>

        <ui-aside-panel id="animAside" direction="right" size="400px" animation-type="${type}" theme="radiant">
           <div slot="header"><h3>Motion Engine</h3></div>
           <div slot="content">
              <p>Current kinetics: <b>${type}</b></p>
              <p style="font-size: 13px; color:var(--text-secondary,#64748b);">The transition engine scales the opacity and transform based on this mode.</p>
           </div>
        </ui-aside-panel>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnTestKinetics')?.addEventListener('click', () => document.getElementById('animAside')?.show());
    }, 100);
  }

  function showSpeedAsideDemo(speed) {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>⚡ Speed/Duration: ${speed}</h3>
        <ui-button id="btnTestSpeed" variant="outline" color="success" label="TEST DURATION: ${speed}" size="large"></ui-button>

        <ui-aside-panel id="speedAside" direction="right" size="400px" transition-duration="${speed}" theme="radiant">
           <div slot="header"><h3>Transition Timing</h3></div>
           <div slot="content">
              <p>Current timing: <b>${speed}</b></p>
              <p style="font-size: 13px; color:var(--text-secondary,#64748b);">Adjust the industrial speed of the Kinetic engine.</p>
           </div>
        </ui-aside-panel>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnTestSpeed')?.addEventListener('click', () => document.getElementById('speedAside')?.show());
    }, 100);
  }

  function showModelessAsideDemo() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3 style="display: flex; align-items: center; gap: 8px;">🚀 Non-Blocking Utility (Modeless)</h3>
        <p style="opacity: 0.7; margin-bottom: 24px;">Configured with <code>show-overlay="false"</code>. The background page remains interactive while the panel is open.</p>
        
        <ui-button id="btnOpenModeless" variant="outline" color="primary" label="🚀 OPEN MODELESS DRAWER" size="large"></ui-button>

        <ui-aside-panel 
          id="modelessAside" 
          direction="right" 
          show-overlay="false"
          size="400px" 
          animation-type="slide-in-out"
          theme="radiant"
        >
          <div slot="header">
             <h3 style="margin:0;">Persistent Utility</h3>
          </div>
          <div slot="content">
             <p>This panel doesn't block the main page. You can still:</p>
             <ul style="padding-left: 20px; color: #475569;">
                <li>Scroll the background page</li>
                <li>Click other demo buttons</li>
                <li>Interact with forms</li>
             </ul>
             <p style="margin-top: 24px;">This is perfect for tool palettes or properties inspectors.</p>
             <ui-button id="btnDismissModeless" variant="outline" color="secondary" label="DISMISS" style="width: 100%"></ui-button>
          </div>
        </ui-aside-panel>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnOpenModeless')?.addEventListener('click', () => document.getElementById('modelessAside')?.show());
      document.getElementById('btnDismissModeless')?.addEventListener('click', () => document.getElementById('modelessAside')?.hide());
      document.getElementById('modelessAside')?.show();
    }, 100);
  }

  function showRawAsideDemo() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3 style="display: flex; align-items: center; gap: 8px;">🧊 Zero-Frame Mode (Transparent)</h3>
        <p style="opacity: 0.7; margin-bottom: 24px;">Configured with <code>variant="none"</code>. Only your slotted content is rendered, with no industrial frame, background, or shadows.</p>
        
        <ui-button id="btnOpenRaw" variant="outline" color="success" label="✨ SUMMON RAW CONTENT" size="large"></ui-button>

        <ui-aside-panel 
          id="rawAside" 
          direction="right" 
          variant="none"
          size="500px" 
          animation-type="scale"
        >
          <div slot="content">
             <div style="background: linear-gradient(135deg, #059669 0%, #047857 100%); color: white; padding: 40px; border-radius: 24px; box-shadow: 0 40px 80px rgba(0,0,0,0.4); text-align: center; border: 1px solid rgba(255,255,255,0.2);">
                <div style="font-size: 40px; margin-bottom: 10px;">🛡️</div>
                <h2 style="margin:0 0 10px; font-weight: 800; letter-spacing: -0.02em;">Sovereign Protocol Activated</h2>
                <p style="opacity: 0.9; margin-bottom: 30px; line-height: 1.6;">This interface has no native background. You are seeing a custom-styled div delivered through the raw Aside vessel.</p>
                <ui-button id="btnConfirmRaw" variant="outline" color="secondary" label="CONFIRM DEPLOYMENT" style="width: 100%"></ui-button>
             </div>
          </div>
        </ui-aside-panel>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('btnConfirmRaw')?.addEventListener('click', () => document.getElementById('rawAside')?.hide());
      document.getElementById('btnOpenRaw')?.addEventListener('click', () => document.getElementById('rawAside')?.show());
      document.getElementById('rawAside')?.show();
    }, 100);
  }

  function showBasicAsidePanel() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="demo-block">
          <h3>Aside Panel with Slots</h3>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 20px;">
            <ui-button id="openRightPanel" variant="outline" color="success" label="Open Right Panel"></ui-button>
            <ui-button id="openLeftPanel" variant="outline" color="success" label="Open Left Panel"></ui-button>
          </div>

          <ui-aside-panel id="rightPanel" direction="right" size="400px">
            <div slot="header">
              <h3 style="margin: 0 0 8px; font-size: 20px; color: var(--text-primary);">Right Panel</h3>
              <p style="margin: 0; color: var(--text-secondary); font-size: 14px;">Panel with header, content, and footer slots</p>
            </div>
            
            <div slot="content">
              <p style="color: var(--text-secondary); margin-bottom: 16px;">This panel demonstrates the slot-based structure:</p>
              <div style="padding: 12px; background-color: var(--color-primary-subtle, #dbeafe); border-radius: 6px; margin-bottom: 12px;">
                <p style="margin: 0; color: var(--color-primary, #1e40af); font-size: 14px;"><strong>Header Slot:</strong> For titles and descriptions</p>
              </div>
              <div style="padding: 12px; background-color: var(--color-success-subtle, #f0fdf4); border-radius: 6px; margin-bottom: 12px;">
                <p style="margin: 0; color: var(--color-success, #166534); font-size: 14px;"><strong>Content Slot:</strong> For main panel content</p>
              </div>
              <div style="padding: 12px; background-color: var(--color-warning-subtle, #fef3c7); border-radius: 6px;">
                <p style="margin: 0; color: var(--color-warning, #92400e); font-size: 14px;"><strong>Footer Slot:</strong> For actions and buttons</p>
              </div>
            </div>
            
            <div slot="footer">
              <div style="display: flex; gap: 8px; justify-content: flex-end;">
                <ui-button variant="outline" color="secondary" label="Cancel"></ui-button>
                <ui-button variant="outline" color="success" label="Save Changes"></ui-button>
              </div>
            </div>
          </ui-aside-panel>

          <ui-aside-panel id="leftPanel" direction="left" size="350px">
            <div slot="header">
              <h3 style="margin: 0; font-size: 18px; color: var(--text-primary);">Navigation Menu</h3>
            </div>
            <div slot="content">
              <ul style="margin: 0; padding: 0; list-style: none;">
                <li style="padding: 12px; border-bottom: 1px solid var(--border-subtle, #e5e7eb); cursor: pointer;">🏠 Dashboard</li>
                <li style="padding: 12px; border-bottom: 1px solid var(--border-subtle, #e5e7eb); cursor: pointer;">📊 Analytics</li>
                <li style="padding: 12px; border-bottom: 1px solid var(--border-subtle, #e5e7eb); cursor: pointer;">⚙️ Settings</li>
              </ul>
            </div>
          </ui-aside-panel>
        </div>
      `;

    setupAsidePanelEvents();
  }

  function showDirectionalPanels() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="demo-block">
          <h3>Panels from All Directions</h3>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 10px; margin-bottom: 20px;">
            <ui-button id="openTopPanel" variant="outline" color="success" label="⬆️ Top"></ui-button>
            <ui-button id="openRightPanel2" variant="outline" color="success" label="➡️ Right"></ui-button>
            <ui-button id="openBottomPanel" variant="outline" color="warning" label="⬇️ Bottom"></ui-button>
            <ui-button id="openLeftPanel2" variant="outline" color="danger" label="⬅️ Left"></ui-button>
          </div>

          <ui-aside-panel id="topPanel" direction="top" size="250px">
            <div style="padding: 20px;">
              <h3 style="margin: 0 0 12px; color: var(--text-primary);">Top Panel</h3>
              <p style="color: var(--text-secondary); margin: 0;">Useful for notifications, banners, or temporary messages.</p>
            </div>
          </ui-aside-panel>

          <ui-aside-panel id="rightPanel2" direction="right" size="320px">
            <div style="padding: 20px;">
              <h3 style="margin: 0 0 12px; color: var(--text-primary);">Right Panel</h3>
              <p style="color: var(--text-secondary); margin: 0;">Common for settings, filters, or additional details.</p>
            </div>
          </ui-aside-panel>

          <ui-aside-panel id="bottomPanel" direction="bottom" size="200px">
            <div style="padding: 20px;">
              <h3 style="margin: 0 0 12px; color: var(--text-primary);">Bottom Panel</h3>
              <p style="color: var(--text-secondary); margin: 0;">Great for cookie notices, chat widgets, or player controls.</p>
            </div>
          </ui-aside-panel>

          <ui-aside-panel id="leftPanel2" direction="left" size="300px">
            <div style="padding: 20px;">
              <h3 style="margin: 0 0 12px; color: var(--text-primary);">Left Panel</h3>
              <p style="color: var(--text-secondary); margin: 0;">Perfect for navigation menus or tool palettes.</p>
            </div>
          </ui-aside-panel>
        </div>
      `;

    setupAsidePanelEvents();
  }

  function showResizablePanels() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="demo-block">
          <h3>Resizable Panels Mastery</h3>
          <p style="opacity: 0.7; margin-bottom: 24px;">Interact with handles on all four axes. Width-based resizing for Left/Right and Height-based for Top/Bottom.</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 12px; margin-bottom: 20px;">
            <ui-button id="openResizableRight" variant="outline" color="success" label="➡️ Right"></ui-button>
            <ui-button id="openResizableLeft" variant="outline" color="success" label="⬅️ Left"></ui-button>
            <ui-button id="openResizableTop" variant="outline" color="warning" label="⬆️ Top"></ui-button>
            <ui-button id="openResizableBottom" variant="outline" color="danger" label="⬇️ Bottom"></ui-button>
          </div>

          <ui-aside-panel id="resRight" direction="right" size="400px" resizable="true" min-size="250" max-size="600">
            <div slot="header"><h3>Resizable Right</h3></div>
            <div slot="content"><p>Drag the <b>left</b> edge handle to adjust width.</p></div>
          </ui-aside-panel>

          <ui-aside-panel id="resLeft" direction="left" size="400px" resizable="true" min-size="250" max-size="600">
            <div slot="header"><h3>Resizable Left</h3></div>
            <div slot="content"><p>Drag the <b>right</b> edge handle to adjust width.</p></div>
          </ui-aside-panel>

          <ui-aside-panel id="resTop" direction="top" size="300px" resizable="true" min-size="150" max-size="500">
            <div slot="header"><h3>Resizable Top</h3></div>
            <div slot="content"><p>Drag the <b>bottom</b> edge handle to adjust height.</p></div>
          </ui-aside-panel>

          <ui-aside-panel id="resBottom" direction="bottom" size="300px" resizable="true" min-size="150" max-size="500">
            <div slot="header"><h3>Resizable Bottom</h3></div>
            <div slot="content"><p>Drag the <b>top</b> edge handle to adjust height.</p></div>
          </ui-aside-panel>
        </div>
      `;

    document.getElementById('openResizableRight')?.addEventListener('click', () => document.getElementById('resRight').show());
    document.getElementById('openResizableLeft')?.addEventListener('click', () => document.getElementById('resLeft').show());
    document.getElementById('openResizableTop')?.addEventListener('click', () => document.getElementById('resTop').show());
    document.getElementById('openResizableBottom')?.addEventListener('click', () => document.getElementById('resBottom').show());
  }

  function updateInteractiveAsidePanel() {
    const panel = document.getElementById('interactivePanel');
    if (!panel) return;

    // Layout
    panel.direction = document.getElementById('asideDirection').value;
    panel.size = document.getElementById('asideSize').value;
    panel.miniSize = document.getElementById('asideMiniSize').value;
    panel.mini = document.getElementById('asideMini').checked;
    panel.maximized = document.getElementById('asideMaximized').checked;

    // Visuals
    panel.theme = document.getElementById('asideTheme').value;
    panel.backdropBlur = document.getElementById('asideBlur').value;
    panel.resizeHandleColor = document.getElementById('asideResizerColor').value;
    panel.showResizeIndicator = document.getElementById('asideShowIndicator').checked;
    panel.loading = document.getElementById('asideLoading').checked;
    panel.backgroundColor = document.getElementById('asideBgColor').value;

    // Sovereign
    panel.haptic = document.getElementById('asideHaptic').checked;
    panel.enableParallax = document.getElementById('asideParallax').checked;
    panel.enableVoiceControl = document.getElementById('asideVoice').checked;
    panel.showActions = document.getElementById('asideShowActions').checked;
    panel.toggleShortcut = document.getElementById('asideShortcut').value;
    panel.stackOffset = parseInt(document.getElementById('asideStackOffset').value);
    document.getElementById('stackVal').textContent = panel.stackOffset + 'px';

    // Safety & Workflow
    panel.pinned = document.getElementById('asidePinned').checked;
    panel.resizable = document.getElementById('asideResizable').checked;
    panel.autoMini = document.getElementById('asideAutoMini').checked;
    panel.closeOnEscape = document.getElementById('asideEsc').checked;
    panel.closeOnOverlayClick = document.getElementById('asideOverlay').checked;
    panel.showOverlay = document.getElementById('asideShowOverlay').checked;
    panel.rtl = document.getElementById('asideRtl').checked;
    panel.transitionDuration = document.getElementById('asideDuration').value + 's';
    panel.animationType = document.getElementById('asideAnimation').value;
    document.getElementById('durVal').textContent = panel.transitionDuration;
    panel.progress = parseInt(document.getElementById('asideProgress').value);
    document.getElementById('progVal').textContent = panel.progress === -1 ? 'OFF' : panel.progress + '%';

    // Metadata
    panel.badge = document.getElementById('asideBadge').value;
    panel.syncGroup = document.getElementById('asideSync').value;
    panel.persistKey = document.getElementById('asidePersist').value;
    panel.minSize = parseInt(document.getElementById('asideMin').value);
    panel.maxSize = parseInt(document.getElementById('asideMax').value);

    if (panel.showActions) {
      panel.actionItems = industrialActions;
    }
  }

  function showInteractiveAsidePanel() {
    const container = document.getElementById('asidePanelDemoContainer');
    if (!container) return;

    container.innerHTML = `
        <div class="demo-block master-playground" style="background:var(--bg-primary,white); border-radius: 20px; box-shadow: 0 10px 40px rgba(0,0,0,0.05); overflow: hidden; border:1px solid var(--border-default,#e2e8f0);">
          <div style="background: var(--bg-secondary, #f8fafc); padding: 24px; color: var(--text-primary); border-bottom: 1px solid var(--border-default);">
            <h3 style="margin:0; display: flex; align-items: center; gap: 10px;">🎮 Grand Maestro Control Center</h3>
            <p style="margin: 8px 0 0; opacity: 0.7; font-size: 14px;">Orchestrate every Sovereign-tier parameter in real-time.</p>
          </div>
          
          <div style="padding: 24px;">
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; margin-bottom: 32px;">
              <!-- Section 1: Spatial Layout -->
              <div class="control-card">
                <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; color:var(--text-secondary,#64748b); border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">📐 Spatial Layout</h4>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                   <ui-dropdown label="Direction" id="asideDirection" value="right" options='[{"label":"Right","value":"right"},{"label":"Left","value":"left"},{"label":"Top","value":"top"},{"label":"Bottom","value":"bottom"}]'></ui-dropdown>
                   <ui-input label="Base Size" id="asideSize" value="400px"></ui-input>
                   <ui-input label="Mini Size" id="asideMiniSize" value="64px"></ui-input>
                   <div style="display: flex; gap: 15px;">
                      <ui-checkbox label="MINI 🤏" id="asideMini"></ui-checkbox>
                      <ui-checkbox label="MAXIMIZED 🔲" id="asideMaximized"></ui-checkbox>
                   </div>
                </div>
              </div>

              <!-- Section 2: Visual High-Fidelity -->
              <div class="control-card">
                <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; color:var(--text-secondary,#64748b); border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">✨ Visual Fidelity</h4>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                   <ui-dropdown label="Theme Engine" id="asideTheme" value="default" options='[{"label":"Default","value":"default"},{"label":"Glass","value":"glass"},{"label":"Radiant","value":"radiant"},{"label":"Zenith","value":"zenith"},{"label":"None (Transparent)","value":"none"}]'></ui-dropdown>
                   <ui-input label="Backdrop Blur" id="asideBlur" value="0" placeholder="e.g., 8px"></ui-input>
                    <div style="display: flex; align-items: center; justify-content: space-between;">
                      <span style="font-size: 13px;">Resizer Color:</span>
                      <ui-input type="color" id="asideResizerColor" value="#10b981" style="width: 60px;"></ui-input>
                    </div>
                   <div style="display: flex; align-items: center; justify-content: space-between;">
                      <span style="font-size: 13px;">Background Color:</span>
                      <ui-color-picker id="asideBgColor" value="#ffffff"></ui-color-picker>
                   </div>
                   <div style="display: flex; gap: 15px;">
                      <ui-checkbox label="Indicator 🚥" id="asideShowIndicator" checked></ui-checkbox>
                      <ui-checkbox label="Shimmer ⏳" id="asideLoading"></ui-checkbox>
                   </div>
                </div>
              </div>

              <!-- Section 3: Industrial & Sovereign -->
              <div class="control-card">
                <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; color:var(--text-secondary,#64748b); border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">👑 Sovereign Controls</h4>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                      <ui-checkbox label="Haptics 🔊" id="asideHaptic"></ui-checkbox>
                      <ui-checkbox label="3D Tilt 🧊" id="asideParallax"></ui-checkbox>
                      <ui-checkbox label="Voice 🎙️" id="asideVoice"></ui-checkbox>
                      <ui-checkbox label="Actions ⋮" id="asideShowActions"></ui-checkbox>
                   </div>
                   <ui-input label="Ctrl Shortcut" id="asideShortcut" placeholder="B" maxlength="1"></ui-input>
                   <div style="display: flex; flex-direction: column; gap: 4px;">
                     <label style="font-size: 12px;">Stack Offset: <span id="stackVal">0px</span></label>
                     <ui-range-slider id="asideStackOffset" min="0" max="100" value="0"></ui-range-slider>
                   </div>
                </div>
              </div>

              <!-- Section 4: Safety & Workflow -->
              <div class="control-card">
                <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; color:var(--text-secondary,#64748b); border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">🛡️ Safety & Workflow</h4>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                   <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                      <ui-checkbox label="Locked 🔒" id="asidePinned"></ui-checkbox>
                      <ui-checkbox label="Resizable ↔️" id="asideResizable" checked></ui-checkbox>
                      <ui-checkbox label="Auto-Mini 📱" id="asideAutoMini" checked></ui-checkbox>
                      <ui-checkbox label="Escape 🛑" id="asideEsc" checked></ui-checkbox>
                   </div>
                   <ui-checkbox label="Overlay Click" id="asideOverlay" checked></ui-checkbox>
                   <ui-checkbox label="Show Overlay" id="asideShowOverlay"></ui-checkbox>
                   <ui-checkbox label="RTL Mode" id="asideRtl"></ui-checkbox>
                   <ui-dropdown label="Animation Type" id="asideAnimation" value="slide-in-out" options='[{"label":"Slide In-Out","value":"slide-in-out"},{"label":"Fade","value":"fade"},{"label":"Scale","value":"scale"}]'></ui-dropdown>
                   
                   <div style="display: flex; flex-direction: column; gap: 4px;">
                     <label style="font-size: 12px;">Speed (Duration): <span id="durVal">1s</span></label>
                     <ui-range-slider id="asideDuration" min="0.1" max="2" step="0.1" value="1"></ui-range-slider>
                   </div>
                   <div style="display: flex; flex-direction: column; gap: 4px;">
                     <label style="font-size: 12px;">Diagnostic Progress: <span id="progVal">OFF</span></label>
                     <ui-range-slider id="asideProgress" min="-1" max="100" value="-1"></ui-range-slider>
                   </div>
                </div>
              </div>

              <!-- Section 5: Metadata & Limits -->
              <div class="control-card">
                <h4 style="margin: 0 0 16px; font-size: 13px; text-transform: uppercase; color:var(--text-secondary,#64748b); border-bottom: 1px solid #f1f5f9; padding-bottom: 8px;">📊 Constraints & Meta</h4>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                   <ui-input label="Status Badge" id="asideBadge" placeholder="LIVE"></ui-input>
                   <ui-input label="Sync Group" id="asideSync" placeholder="diag-stream"></ui-input>
                   <ui-input label="Persist Key" id="asidePersist" placeholder="aside-sandbox"></ui-input>
                   <ui-input type="number" label="Min Size (px)" id="asideMin" value="200"></ui-input>
                   <ui-input type="number" label="Max Size (px)" id="asideMax" value="1200"></ui-input>
                </div>
              </div>
            </div>
            
            <div style="display: flex; gap: 16px;">
              <ui-button id="openInteractivePanel" variant="outline" color="success" label="🚀 SUMMON CONFIGURED ENGINE" size="large" style="flex: 2;"></ui-button>
              <ui-button id="dismissInteractivePanel" variant="outline" color="secondary" label="DISMISS" size="large" style="flex: 1; border:1px solid var(--border-default,#e2e8f0);"></ui-button>
            </div>
          </div>

          <ui-aside-panel id="interactivePanel" direction="right" size="400px" resizable="true">
            <div slot="header">
               <h3 style="margin:0;">Dynamic Orchestration</h3>
               <p style="margin:4px 0 0; opacity:0.6; font-size:12px;">Manipulating Sovereign technical properties.</p>
            </div>
            <div slot="content">
               <p>This panel is linked to the <b>Grand Maestro Control Center</b>. Adjust the parameters above to see real-time updates to layout, aesthetics, and industrial behaviors.</p>
               <div style="height: 1000px; background: linear-gradient(180deg, #f8fafc 0%, #ffffff 100%); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e2e8f0);">
                  <h4>Diagnostic Scroll Region</h4>
                  <p>Test backdrop filters, sticky content, and parallax behavior here.</p>
               </div>
            </div>
            <div slot="footer">
               <div style="display: flex; gap: 10px;">
                  <ui-button id="cancelInteractive" variant="outline" color="secondary" label="CANCEL" style="flex: 1;"></ui-button>
                  <ui-button id="applyInteractive" variant="outline" color="success" label="APPLY" style="flex: 1;"></ui-button>
               </div>
            </div>
          </ui-aside-panel>
        </div>
      `;

    setTimeout(() => {
      updateInteractiveAsidePanel();
      setupAsidePanelEvents();

      document.getElementById('openInteractivePanel')?.addEventListener('click', () => document.getElementById('interactivePanel').show());
      document.getElementById('dismissInteractivePanel')?.addEventListener('click', () => document.getElementById('interactivePanel').hide());
      document.getElementById('cancelInteractive')?.addEventListener('click', () => document.getElementById('interactivePanel').hide());
      document.getElementById('applyInteractive')?.addEventListener('click', () => document.getElementById('interactivePanel').hide());

      // Attaching listeners to playground controls
      const ctrls = [
        { id: 'asideDirection', event: 'dropdownChange' },
        { id: 'asideSize', event: 'inputChange' },
        { id: 'asideMiniSize', event: 'inputChange' },
        { id: 'asideMini', event: 'checkboxChange' },
        { id: 'asideMaximized', event: 'checkboxChange' },
        { id: 'asideTheme', event: 'dropdownChange' },
        { id: 'asideBlur', event: 'inputChange' },
        { id: 'asideResizerColor', event: 'inputChange' },
        { id: 'asideShowIndicator', event: 'checkboxChange' },
        { id: 'asideLoading', event: 'checkboxChange' },
        { id: 'asideHaptic', event: 'checkboxChange' },
        { id: 'asideParallax', event: 'checkboxChange' },
        { id: 'asideVoice', event: 'checkboxChange' },
        { id: 'asideShowActions', event: 'checkboxChange' },
        { id: 'asideShortcut', event: 'inputChange' },
        { id: 'asideStackOffset', event: 'sliderChange' },
        { id: 'asidePinned', event: 'checkboxChange' },
        { id: 'asideResizable', event: 'checkboxChange' },
        { id: 'asideAutoMini', event: 'checkboxChange' },
        { id: 'asideEsc', event: 'checkboxChange' },
        { id: 'asideOverlay', event: 'checkboxChange' },
        { id: 'asideShowOverlay', event: 'checkboxChange' },
        { id: 'asideRtl', event: 'checkboxChange' },
        { id: 'asideAnimation', event: 'dropdownChange' },
        { id: 'asideDuration', event: 'sliderChange' },
        { id: 'asideProgress', event: 'sliderChange' },
        { id: 'asideBadge', event: 'inputChange' },
        { id: 'asideSync', event: 'inputChange' },
        { id: 'asidePersist', event: 'inputChange' },
        { id: 'asideMin', event: 'inputChange' },
        { id: 'asideMax', event: 'inputChange' },
        { id: 'asideBgColor', event: 'colorChange' },
      ];

      ctrls.forEach(ctrl => {
        const el = document.getElementById(ctrl.id);
        if (el) el.addEventListener(ctrl.event, updateInteractiveAsidePanel);
      });
    }, 50);
  }

  function setupAsidePanelEvents() {
    const interactivePanel = document.getElementById('interactivePanel');
    if (interactivePanel) {
      interactivePanel.addEventListener('asideActionClick', () => {
        alert('Elite Industrial Actions Initiated: Opening diagnostic submenu...');
      });
    }

    setTimeout(() => {
      document.getElementById('btnStack1')?.addEventListener('click', () => document.getElementById('stack1')?.show());
      document.getElementById('btnStack2')?.addEventListener('click', () => document.getElementById('stack2')?.show());
      document.getElementById('btnOpenManual')?.addEventListener('click', () => document.getElementById('docAside')?.show());
      document.getElementById('btnOpenRtl')?.addEventListener('click', () => document.getElementById('rtlAside')?.show());
      document.getElementById('btnTestKinetics')?.addEventListener('click', () => document.getElementById('animAside')?.show());

      const ids = ['openRightPanel', 'openLeftPanel', 'openTopPanel', 'openRightPanel2', 'openBottomPanel', 'openLeftPanel2', 'openResizablePanel', 'openInteractivePanel'];
      ids.forEach(id => {
        const targetId = id.replace('open', '').charAt(0).toLowerCase() + id.replace('open', '').slice(1);
        document.getElementById(id)?.addEventListener('click', () => {
          const panel = document.getElementById(targetId);
          if (panel) panel.show();
        });
      });
    }, 100);
  }

  // --- WIRING: NAVIGATION ---

  setTimeout(() => {
    const demoMap = {
      btnZenith: () => showZenithAsideDemo(),
      btnNoOverlay: () => showModelessAsideDemo(),
      btnVerticalStack: () => launchVerticalStack(),
      btnMasterAside: () => showInteractiveAsidePanel(),
      btnPremium: () => showPremiumAsideDemo(),
      btnFeedback: () => showFloatingAsideDemo(),
      btnDocumentation: () => showRichAsideDemo(),
      btnTransparent: () => showRawAsideDemo(),
      btnRtlMode: () => showRtlAsideDemo(),
      btnSlots: () => showBasicAsidePanel(),
      btnAxes: () => showDirectionalPanels(),
      btnResize: () => showResizablePanels(),
    };

    const animationDemos = {
      btnAnimSlide: 'slide-in-out',
      btnAnimFade: 'fade',
      btnAnimScale: 'scale',
    };

    const speedDemos = {
      btnSpeed01: '0.1s',
      btnSpeed1: '1s',
      btnSpeed2: '2s',
    };

    Object.entries(demoMap).forEach(([id, fn]) => {
      document.getElementById(id)?.addEventListener('click', fn);
    });

    Object.entries(animationDemos).forEach(([id, type]) => {
      document.getElementById(id)?.addEventListener('click', () => showAnimationAsideDemo(type));
    });

    Object.entries(speedDemos).forEach(([id, speed]) => {
      document.getElementById(id)?.addEventListener('click', () => showSpeedAsideDemo(speed));
    });

    showBasicAsidePanel();
  }, 100);
}
