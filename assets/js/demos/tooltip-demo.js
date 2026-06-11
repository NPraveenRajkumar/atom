export const initTooltipDemo = () => {
  const section = document.getElementById('tooltip');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-section-header">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
        <ui-icon name="message-square" library="lucide" size="24px" style="color: #10b981;"></ui-icon>
        <h2 style="margin: 0;">Tooltip Component</h2>
      </div>
      <p style="color:var(--text-secondary,#64748b); font-size: 15px; margin-bottom: 30px;">
        High-performance, accessible contextual overlays with advanced portaling, mouse tracking, and elite aesthetics.
      </p>
    </div>

    <div class="demo-nav-pills" id="tooltipNavPills" style="margin: 20px 0; display: flex; gap: 8px; flex-wrap: wrap; background: var(--bg-secondary); padding: 8px; border-radius: 12px; border: 1px solid var(--border-default); width: fit-content;">
      <ui-button onclick="scrollToDemo('basic')" selected="true" label="Basic Triggers"></ui-button>
      <ui-button onclick="scrollToDemo('positions')" label="Positions" ></ui-button>
      <ui-button onclick="scrollToDemo('themes')" label="Themes & Glass" ></ui-button>
      <ui-button onclick="scrollToDemo('colors')" label="Custom Colors" ></ui-button>
      <ui-button onclick="scrollToDemo('advanced')" label="Advanced Logic" ></ui-button>
      <ui-button onclick="scrollToDemo('autoshift')" label="Auto Shift/Flip" ></ui-button>
      <ui-button onclick="scrollToDemo('rich')" label="Rich & Slotted" ></ui-button>
      <ui-button onclick="scrollToDemo('cases')" label="Use Cases" ></ui-button>
      <ui-button onclick="scrollToDemo('patterns')" label="Elite Patterns" ></ui-button>
      <ui-button onclick="scrollToDemo('playground')" color="warning" label="🎮 Playground"  ></ui-button>
    </div>

    <div id="tooltip-demo-scroll-container">
      
      <!-- Section: Basic -->
      <section id="demo-basic" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="zap" library="lucide" size="18px"></ui-icon> Basic Triggers</div>
        <p>Hover, click, or focus to trigger tooltips. Customizable interaction models for every device.</p>
        <div class="demo-grid-3">
          <div class="demo-item">
            <ui-tooltip content="Standard hover tooltip" position="top" animation="fade">
              <ui-button slot="target" variant="primary"><ui-icon name="mouse-pointer" library="lucide" style="margin-right:8px"></ui-icon> Hover Me</ui-button>
            </ui-tooltip>
            <span>Default (Hover)</span>
          </div>
          <div class="demo-item">
            <ui-tooltip content="Click to toggle, includes close button" trigger="click" closable="true" sticky="true" position="top">
              <ui-button slot="target" variant="secondary">Click Toggle</ui-button>
            </ui-tooltip>
            <span>Click Trigger</span>
          </div>
          <div class="demo-item">
            <ui-tooltip content="Shows when input is focused" trigger="focus" variant="info">
              <ui-input slot="target" type="text" placeholder="Focus me..." style="width: 140px;"></ui-input>
            </ui-tooltip>
            <span>Focus Trigger</span>
          </div>
        </div>
      </section>

      <!-- Section: Positions -->
      <section id="demo-positions" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="move" library="lucide" size="18px"></ui-icon> Anchor Positions</div>
        <p>9 directional points + smart <code>auto</code> positioning with flip & shift logic.</p>
        <div style="display: flex; justify-content: center; padding: 40px 20px;">
          <div style="display: grid; grid-template-columns: repeat(3, 120px); gap: 20px; justify-items: center;">
            <ui-tooltip content="Top-Left" position="top-left"><ui-button slot="target" variant="outline" size="md">Top-Left</ui-button></ui-tooltip>
            <ui-tooltip content="Top Center" position="top"><ui-button slot="target" variant="outline" size="md">Top Center</ui-button></ui-tooltip>
            <ui-tooltip content="Top-Right" position="top-right"><ui-button slot="target" variant="outline" size="md">Top-Right</ui-button></ui-tooltip>
            
            <ui-tooltip content="Left Center" position="left"><ui-button slot="target" variant="outline" size="md">Left Center</ui-button></ui-tooltip>
            <ui-tooltip content="Auto Position (Flipped)" position="auto" variant="error"><ui-button slot="target" variant="danger" size="md">Auto</ui-button></ui-tooltip>
            <ui-tooltip content="Right Center" position="right"><ui-button slot="target" variant="outline" size="md">Right Center</ui-button></ui-tooltip>
            
            <ui-tooltip content="Bottom-Left" position="bottom-left"><ui-button slot="target" variant="outline" size="md">Bottom-Left</ui-button></ui-tooltip>
            <ui-tooltip content="Bottom Center" position="bottom"><ui-button slot="target" variant="outline" size="md">Bottom Center</ui-button></ui-tooltip>
            <ui-tooltip content="Bottom-Right" position="bottom-right"><ui-button slot="target" variant="outline" size="md">Bottom-Right</ui-button></ui-tooltip>
          </div>
        </div>
      </section>

      <!-- Section: Themes -->
      <section id="demo-themes" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="palette" library="lucide" size="18px"></ui-icon> Variants & Glassmorphism</div>
        <p>Semantic themes and modern visual effects for elite-tier interfaces.</p>
        <div class="demo-flex-wrap">
          <ui-tooltip content="Dark theme (Default)" variant="dark"><ui-button slot="target" size="md" variant="outline">Dark</ui-button></ui-tooltip>
          <ui-tooltip content="Light theme" variant="light"><ui-button slot="target" size="md" variant="outline">Light</ui-button></ui-tooltip>
          <ui-tooltip content="Primary theme" variant="primary"><ui-button slot="target" size="md" variant="primary">Primary</ui-button></ui-tooltip>
          <ui-tooltip content="Info theme" variant="info"><ui-button slot="target" size="md" variant="info">Info</ui-button></ui-tooltip>
          <ui-tooltip content="Success theme" variant="success"><ui-button slot="target" size="md" variant="success">Success</ui-button></ui-tooltip>
          <ui-tooltip content="Warning theme" variant="warning"><ui-button slot="target" size="md" variant="warning">Warning</ui-button></ui-tooltip>
          <ui-tooltip content="Error theme" variant="error"><ui-button slot="target" size="md" variant="danger">Error</ui-button></ui-tooltip>
        </div>

        <div class="demo-grid-3" style="margin-top: 32px;">
          <div class="demo-item-glass">
            <ui-tooltip content="Modern glassmorphism effect" variant="glass" transition-duration="400">
              <ui-button slot="target" variant="ghost" style="border: 1px solid rgba(255,255,255,0.3); color: white;">Glassmorphism</ui-button>
            </ui-tooltip>
          </div>
          <div class="demo-item">
             <ui-tooltip content="Shadow depth elevation 5" elevation="5" variant="light">
              <ui-button slot="target" variant="outline" style="background:white">Elevation 5</ui-button>
            </ui-tooltip>
            <span>Elevation (0-5)</span>
          </div>
          <div class="demo-item">
            <ui-tooltip content="Glowing pulse effect" show-glow="true" variant="primary">
              <ui-button slot="target" variant="primary">Glowing Pulse</ui-button>
            </ui-tooltip>
            <span>Premium Glow</span>
          </div>
        </div>
      </section>

      <!-- Section: Custom Colors & Transitions -->
      <section id="demo-colors" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="palette" library="lucide" size="18px"></ui-icon> Custom Colors & Transitions</div>
        <p>Complete control over background, text colors, and smooth animation definitions.</p>
        <div class="demo-grid-3">
          <div class="demo-item">
            <ui-tooltip content="Vibrant pink background" custom-color="#ec4899" text-color="#ffffff">
              <ui-button slot="target" style="background:var(--accent-pink,#ec4899); color:white; border:none">Vibrant Pink</ui-button>
            </ui-tooltip>
            <span>Custom BG Color</span>
          </div>
          <div class="demo-item">
            <ui-tooltip content="Custom text color override" custom-color="#f1f5f9" text-color="#6366f1">
              <ui-button slot="target" variant="outline" style="color:var(--accent-indigo,#6366f1)">Indigo Text</ui-button>
            </ui-tooltip>
            <span>Custom Text Color</span>
          </div>
          <div class="demo-item">
            <ui-tooltip content="Transition duration (800ms) with Ease-In-Out" transition-duration="800" transition-timing="ease-in-out" variant="dark">
              <ui-button slot="target" variant="secondary">Smooth Animation</ui-button>
            </ui-tooltip>
            <span>Transitions</span>
          </div>
        </div>

        <div class="demo-grid-4" style="margin-top: 32px;">
           <ui-tooltip content="Linear timing (300ms)" transition-timing="linear" transition-duration="300" variant="error">
             <ui-button slot="target" variant="danger" size="md">Linear Timing</ui-button>
           </ui-tooltip>
           <ui-tooltip content="Ease-in timing" transition-timing="ease-in" variant="success">
             <ui-button slot="target" variant="success" size="md">Ease-In</ui-button>
           </ui-tooltip>
           <ui-tooltip content="Scale animation (500ms)" animation="scale" transition-duration="500" variant="primary">
             <ui-button slot="target" variant="primary" size="md">Scale Timing</ui-button>
           </ui-tooltip>
           <ui-tooltip content="Bounce effect" animation="bounce" variant="warning">
             <ui-button slot="target" variant="warning" size="md">Bounce Effect</ui-button>
           </ui-tooltip>
        </div>
      </section>

      <!-- Section: Advanced Logic -->
      <section id="demo-advanced" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="zap" library="lucide" size="18px"></ui-icon> Mouse Tracking & Dynamic Positioning</div>
        <p>Advanced interactions including cursor following, open at mouse position, and proximity tracking.</p>
        
        <div class="demo-grid-2">
           <div class="demo-box" style="background: var(--bg-secondary); padding:40px; border-radius:16px; border:2px dashed var(--border-default); text-align:center;">
              <ui-tooltip content="Tracks mouse movement dynamically!" trackMouse="true" variant="primary">
                <div slot="target" style="height: 120px; display: flex; flex-direction: column; align-items: center; justify-content: center; cursor: crosshair; color: var(--text-secondary); font-weight:700;">
                  <ui-icon name="move" library="lucide" size="32px" style="margin-bottom:12px"></ui-icon>
                  <span>Dynamic Mouse Tracking</span>
                </div>
              </ui-tooltip>
            </div>
            
            <div class="demo-box" style="background: var(--bg-secondary); padding:30px; border-radius:16px; border:1px solid var(--border-default);">
              <div style="display: flex; flex-direction: column; gap: 16px;">
                 <ui-tooltip content="Opens at exact click position" trigger="click" open-at-mouse-position="true" variant="info">
                   <ui-button slot="target" variant="info" style="width: 100%;">Open at Click Position</ui-button>
                 </ui-tooltip>
                 
                 <ui-tooltip content="High-frequency track (8ms)" track-mouse="true" track-interval="8" variant="success">
                   <ui-button slot="target" variant="success" style="width: 100%;">Fast Track (8ms)</ui-button>
                 </ui-tooltip>
                 
                 <ui-tooltip content="Follows cursor smoothly" follow-cursor="true" variant="error">
                   <ui-button slot="target" variant="danger" style="width: 100%;">Smooth Follow Cursor</ui-button>
                 </ui-tooltip>

                 <div style="display:grid; grid-template-columns: 1fr 1fr; gap:12px">
                    <ui-tooltip content="Wait for 1.2 seconds..." show-delay="1200" variant="dark">
                       <ui-button slot="target" variant="outline" size="md">Slow Delay (1.2s)</ui-button>
                    </ui-tooltip>
                    <ui-tooltip content="Hidden after 2 seconds..." hide-delay="2000" variant="dark">
                       <ui-button slot="target" variant="outline" size="md">Hide Delay (2s)</ui-button>
                    </ui-tooltip>
                 </div>
              </div>
            </div>
         </div>
      </section>

      <!-- Section: Auto-Shift & Auto-Flip -->
      <section id="demo-autoshift" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="maximize" library="lucide" size="18px"></ui-icon> Auto-Shift & Auto-Flip</div>
        <p>Intelligent positioning system that adapts to viewport constraints and handles portal rendering fixes.</p>
        
        <div style="padding: 40px; background: var(--bg-secondary); border-radius: 20px; position: relative; height: 350px; border:1px solid var(--border-default)">
           <!-- Corners -->
           <div style="position: absolute; top: 20px; left: 20px;">
              <ui-tooltip content="Auto-shifts horizontally to stay in view" position="top-left" auto-shift="true" variant="primary">
                 <ui-button slot="target" size="md">Top Left Corner</ui-button>
              </ui-tooltip>
           </div>
           
           <div style="position: absolute; top: 20px; right: 20px;">
              <ui-tooltip content="Automatically flips to bottom if no space" position="top-right" auto-flip="true" variant="info">
                 <ui-button slot="target" size="md" variant="info">Top Right Corner</ui-button>
              </ui-tooltip>
           </div>
           
           <div style="position: absolute; bottom: 20px; left: 20px;">
              <ui-tooltip content="Shifts and flips as needed dynamically" position="bottom-left" auto-shift="true" auto-flip="true" variant="success">
                 <ui-button slot="target" size="md" variant="success">Bottom Left</ui-button>
              </ui-tooltip>
           </div>
           
           <div style="position: absolute; bottom: 20px; right: 20px;">
              <ui-tooltip content="Smart positioning with viewport bounds" position="bottom-right" auto-shift="true" auto-flip="true" variant="warning">
                 <ui-button slot="target" size="md" variant="warning">Bottom Right</ui-button>
              </ui-tooltip>
           </div>
           
           <!-- Portal Fix Demonstration -->
           <div style="position: absolute; top: 50%; left: 50%; transform: translate(-50%, -50%); padding: 30px; border: 2px dashed var(--border-default); border-radius: 16px; background: var(--bg-primary); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15);">
              <ui-tooltip content="Correctly positioned via document body portal!" position="top" auto-shift="true" auto-flip="true" variant="error" show-glow="true" portal="true">
                 <ui-button slot="target" variant="danger">Portal Fix Demonstration</ui-button>
              </ui-tooltip>
              <div style="margin-top:12px; font-size:11px; color: var(--text-muted); font-weight:700">TRANSFORMED CONTAINER</div>
           </div>
        </div>
      </section>

      <!-- Section: Rich Content -->
      <section id="demo-rich" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="plus-square" library="lucide" size="18px"></ui-icon> Custom Content & Slot Support</div>
        <p>Go beyond simple text strings. Inject complex HTML, rich media, and nested components using standard slots.</p>
        
        <div class="demo-grid-3">
           <!-- Alex Horizon -->
           <div class="demo-item" style="border: 1px solid var(--border-default); padding: 24px; border-radius: 16px; background: var(--bg-secondary);">
             <ui-tooltip interactive="true" variant="light" max-width="320" show-header="true" show-footer="true" elevation="3">
               <ui-button slot="target" variant="primary">👤 User Profile Slot</ui-button>
               <div slot="header">Identity Management</div>
               <div style="display: flex; gap: 14px; align-items: center;">
                 <ui-avatar src="/build/assets/images/logo.png" shape="circle" size="md"></ui-avatar>
                 <div style="text-align:left">
                   <div style="font-weight: 800; color: var(--text-primary); font-size:15px; margin-bottom:2px">Alex Horizon</div>
                   <div style="display:inline-block; padding:2px 6px; background: var(--bg-primary); border-radius:4px; font-size:10px; color: var(--text-secondary); font-weight:700">SENIOR ARCHITECT</div>
                 </div>
               </div>
               <div style="margin-top: 14px; font-size: 13px; color: var(--text-secondary); text-align:left; line-height:1.5">
                 Managing <b>Elite Tier</b> infrastructure across 12 availability zones.
               </div>
               <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end; width: 100%;">
                 <ui-button size="xxsmall" variant="ghost">Ignore</ui-button>
                 <ui-button size="xxsmall" variant="primary">View Profile</ui-button>
               </div>
             </ui-tooltip>
             <span>Complex Profile</span>
           </div>

           <!-- Special Offer -->
           <div class="demo-item" style="border: 1px solid var(--border-default); padding: 24px; border-radius: 16px; background: var(--bg-secondary);">
              <ui-tooltip variant="dark" interactive="true" show-glow="true" max-width="240">
                 <ui-button slot="target" variant="warning">
                    <ui-icon name="award" library="lucide" style="margin-right:8px"></ui-icon> Special Offer
                 </ui-button>
                 <div style="text-align:center;">
                    <div style="font-size: 24px; margin-bottom: 8px;">🔥</div>
                    <div style="font-weight:800; color:#fbbf24; font-size:16px; margin-bottom:4px">EXCLUSIVE DEAL</div>
                    <p style="font-size:12px; color: var(--text-muted); margin-bottom:12px">Unlock the full API suite with <b>50% OFF</b> for the first 3 months.</p>
                    <ui-button size="xsmall" variant="warning" style="width:100%">Claim Upgrade</ui-button>
                 </div>
              </ui-tooltip>
              <span>Promotional UI</span>
           </div>

           <!-- Multi-Step List -->
           <div class="demo-item" style="border: 1px solid var(--border-default); padding: 24px; border-radius: 16px; background: var(--bg-secondary);">
              <ui-tooltip variant="light" interactive="true" max-width="260">
                 <ui-button slot="target" variant="outline">
                    <ui-icon name="list-checks" library="lucide" style="margin-right:8px"></ui-icon> Project Roadmap
                 </ui-button>
                 <div style="text-align:left">
                    <strong style="display:block; margin-bottom:10px; color: var(--text-primary); border-bottom:1px solid var(--border-default); padding-bottom:6px">Current Milestone</strong>
                    <ul style="margin:0; padding:0; list-style:none; display:flex; flex-direction:column; gap:8px">
                       <li style="display:flex; align-items:center; gap:8px; font-size:12px; color: var(--text-secondary)">
                          <ui-icon name="check-circle" library="lucide" size="14px" style="color:#10b981"></ui-icon> Core Component Logic
                       </li>
                       <li style="display:flex; align-items:center; gap:8px; font-size:12px; color:#10b981">
                          <ui-icon name="refresh-cw" library="lucide" size="14px" style="color:#10b981"></ui-icon> Accessibility Audit
                       </li>
                       <li style="display:flex; align-items:center; gap:8px; font-size:12px; color: var(--text-muted)">
                          <ui-icon name="circle" library="lucide" size="14px"></ui-icon> Production Deployment
                       </li>
                    </ul>
                 </div>
              </ui-tooltip>
              <span>Sub-Tasks List</span>
           </div>
        </div>
      </section>

      <!-- Section: Use Cases -->
      <section id="demo-cases" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="check-square" library="lucide" size="18px"></ui-icon> Practical Use Cases</div>
        <p>Real-world integration patterns for everyday UI challenges.</p>
        <div style="background: var(--bg-secondary); padding: 24px; border-radius: 16px; border: 1px solid var(--border-default);">
           <div style="display: flex; flex-direction: column; gap: 16px;">
             <!-- Glossary -->
             <div style="display: flex; align-items: center; gap: 8px; color: var(--text-primary); font-size:14px">
               Understanding 
               <ui-tooltip content="A statistical measure of the dispersion of returns for a given security." variant="dark" max-width="220">
                 <span style="border-bottom: 2px dotted #6366f1; cursor: help; font-weight:700" slot="target">Market Volatility</span>
               </ui-tooltip>
               is essential for risk management.
             </div>

             <!-- Badge with Info -->
             <div style="display: flex; align-items: center; gap: 12px;">
               <span style="font-weight:700; font-size:14px">Account Status:</span>
               <ui-tooltip content="Premium features active until Jan 2026" variant="success" position="right">
                 <div slot="target" style="padding:4px 10px; background:#10b981; color:white; border-radius:999px; font-size:11px; font-weight:800; cursor:help">ELITE PLAN</div>
               </ui-tooltip>
             </div>

             <!-- Copy to Clipboard -->
             <div style="display: flex; align-items: center; gap: 12px;">
                <span style="font-weight:700; font-size:14px">Access Token:</span>
                <ui-tooltip content="Click to copy to clipboard" variant="dark" trigger="click">
                  <code slot="target" style="background: #1e293b; color: #a5f3fc; padding: 6px 10px; border-radius: 6px; cursor: pointer; font-size:12px">npm install @antigravity/ui</code>
                </ui-tooltip>
              </div>
            </div>
         </div>
      </section>

      <!-- Section: Elite Patterns -->
      <section id="demo-patterns" class="demo-card-elite">
        <div class="card-header-icon"><ui-icon name="layers" library="lucide" size="18px"></ui-icon> Elite Interaction Patterns</div>
        <p>Advanced states and constraints for specialized application requirements.</p>
        
        <div class="demo-grid-3">
           <div class="demo-item">
              <ui-tooltip content="Fetching live data..." loading="true" variant="primary">
                 <ui-button slot="target" variant="outline">Loading State</ui-button>
              </ui-tooltip>
              <span>Async Loading</span>
           </div>
           <div class="demo-item">
              <ui-tooltip content="This feature is locked" disabled="true">
                 <ui-button slot="target" variant="ghost" disabled>Disabled Tooltip</ui-button>
              </ui-tooltip>
              <span>Disabled State</span>
           </div>
           <div class="demo-item">
              <div id="boundaryContainer" style="width:100%; height:80px; background: var(--bg-secondary); border:1px solid var(--border-default); border-radius:8px; display:flex; align-items:center; justify-content:center; overflow:hidden">
                 <ui-tooltip content="I am constrained to this box!" boundary="#boundaryContainer" position="top">
                    <ui-button slot="target" size="xsmall" variant="secondary">Boundary Control</ui-button>
                 </ui-tooltip>
              </div>
              <span>Contained Bounds</span>
           </div>
        </div>

        <div style="margin-top:40px; background: var(--bg-secondary); padding:32px; border-radius:20px; border:1px solid var(--border-default);">
           <div style="display:flex; align-items:center; justify-content:space-between">
              <div style="text-align:left">
                 <h4 style="margin:0; font-weight:800; color: var(--text-primary)">Manual Life-cycle Control</h4>
                 <p style="margin:4px 0 0; font-size:13px; color: var(--text-secondary)">Programmatically toggle visibility regardless of mouse state.</p>
              </div>
              <div style="display:flex; gap:12px">
                 <ui-tooltip id="manualTooltip" content="Mastered by user logic" trigger="manual" variant="error">
                    <ui-button slot="target" variant="danger" outline>Manual State Target</ui-button>
                 </ui-tooltip>
                 <ui-button id="manualToggleBtn" variant="primary" onclick="toggleManualTooltip()">Show Tooltip</ui-button>
              </div>
           </div>
        </div>   </div>
      </section>

      <!-- Section: Playground -->
      <section id="demo-playground" class="demo-card-elite" style="background: var(--bg-secondary); color: var(--text-primary);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
           <h3 style="color: var(--text-primary); margin: 0;">🎮 Elite Interactive Playground</h3>
           <ui-button onclick="copyTooltipCode()" variant="outline" color="success" label="Copy Implementation"></ui-button>
        </div>
        
        <div style="display: grid; grid-template-columns: 1fr 340px; gap: 32px;">
           <!-- Area 1: Trigger -->
           <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; background: var(--bg-primary); border: 2px dashed var(--border-default); border-radius: 16px; padding: 60px;">
              <ui-tooltip 
                 id="pgTooltip"
                 content="Configurable Playground Tooltip" 
                 position="top" 
                 variant="primary" 
                 animation="scale"
                 show-glow="true">
                 <ui-button id="pgBtn" slot="target" variant="primary" size="large">Test Custom Result</ui-button>
              </ui-tooltip>
              
              <div style="margin-top: 48px; width: 100%;">
                 <div style="color: var(--text-secondary,#64748b); font-size: 11px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px;">Implementation Code:</div>
                 <div id="pgCodeBlock" style="background: var(--bg-code,#020617); padding: 20px; border-radius: 12px; font-family: 'Fira Code', monospace; font-size: 13px; color: #22d3ee; border: 1px solid var(--border-default); overflow-x: auto; white-space: pre;">
                 </div>
              </div>
           </div>

           <!-- Area 2: Settings -->
           <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 16px; font-size: 12px;">
              <div class="pg-field" style="grid-column: span 2;">
                 <label>Content Text</label>
                 <ui-input id="pgContent" value="Elite contextual overlay active."></ui-input>
              </div>

              <div class="pg-field">
                 <label>Position</label>
                 <ui-dropdown id="pgPos" value="top">
                    <option value="top">Top</option>
                    <option value="bottom">Bottom</option>
                    <option value="left">Left</option>
                    <option value="right">Right</option>
                    <option value="auto">Auto Logic</option>
                 </ui-dropdown>
              </div>
              <div class="pg-field">
                 <label>Theme</label>
                 <ui-dropdown id="pgVariant" value="primary">
                    <option value="dark">Dark</option>
                    <option value="light">Light</option>
                    <option value="primary">Primary</option>
                    <option value="glass">Glass</option>
                    <option value="success">Success</option>
                    <option value="error">Error</option>
                 </ui-dropdown>
              </div>
              <div class="pg-field">
                 <label>Animation</label>
                 <ui-dropdown id="pgAnim" value="scale">
                    <option value="fade">Fade</option>
                    <option value="slide">Slide</option>
                    <option value="scale">Scale</option>
                    <option value="bounce">Bounce</option>
                 </ui-dropdown>
              </div>
              <div class="pg-field">
                 <label>Shape</label>
                 <ui-dropdown id="pgShape" value="rounded">
                    <option value="rounded">Rounded</option>
                    <option value="square">Square</option>
                    <option value="pill">Pill</option>
                 </ui-dropdown>
              </div>

              <div class="pg-field">
                 <label>Elevation (0-5)</label>
                 <ui-number-input id="pgElevation" value="0" min="0" max="5"></ui-number-input>
              </div>
              <div class="pg-field">
                 <label>Offset (px)</label>
                 <ui-number-input id="pgOffset" value="8" min="0" max="40"></ui-number-input>
              </div>
              <div class="pg-field">
                 <label>Show Delay (ms)</label>
                 <ui-number-input id="pgShowDelay" value="0" min="0" max="2000" step="100"></ui-number-input>
              </div>
              <div class="pg-field">
                 <label>Hide Delay (ms)</label>
                 <ui-number-input id="pgHideDelay" value="0" min="0" max="2000" step="100"></ui-number-input>
              </div>
              <div class="pg-field">
                 <label>Arrow Size (px)</label>
                 <ui-number-input id="pgArrowSize" value="8" min="0" max="20" step="2"></ui-number-input>
              </div>

              <div class="pg-field" style="grid-column: span 2;">
                  <label>Override Theme (Custom Colors)</label>
                  <div style="display:flex; flex-direction:column; gap:12px;">
                    <ui-checkbox id="pgUseColor" label="Enable Custom Styling"></ui-checkbox>
                    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:16px;">
                        <div style="display:flex; align-items:center; gap:8px; background:var(--bg-primary); padding:6px 10px; border-radius:8px; border:1px solid var(--border-default)">
                           <span style="font-size:10px; color:var(--text-secondary,#64748b); width:20px">BG</span>
                           <ui-color-picker id="pgColor" value="#6366f1" style="--picker-width: 24px; --picker-height: 24px;"></ui-color-picker>
                           <ui-input id="pgColorHex" value="#6366f1" style="width:70px; --input-background: transparent; --input-border: none; color:var(--text-primary); font-family:monospace; font-size:11px;"></ui-input>
                        </div>
                        <div style="display:flex; align-items:center; gap:8px; background:var(--bg-primary); padding:6px 10px; border-radius:8px; border:1px solid var(--border-default)">
                           <span style="font-size:10px; color:var(--text-secondary,#64748b); width:24px">TXT</span>
                           <ui-color-picker id="pgTextColor" value="#ffffff" style="--picker-width: 24px; --picker-height: 24px;"></ui-color-picker>
                           <ui-input id="pgTextColorHex" value="#ffffff" style="width:70px; --input-background: transparent; --input-border: none; color:var(--text-primary); font-family:monospace; font-size:11px;"></ui-input>
                        </div>
                    </div>
                  </div>
               </div>

              <div class="pg-options-card" style="grid-column: span 2; background: var(--bg-primary); padding: 12px; border-radius: 8px; margin-top: 8px; border: 1px solid var(--border-default);">
                 <div class="pg-check-grid" style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                    <ui-checkbox id="pgGlow" checked="true" label="Pulsing Glow"></ui-checkbox>
                    <ui-checkbox id="pgArrow" checked="true" label="Show Arrow"></ui-checkbox>
                    <ui-checkbox id="pgFollow" label="Follow Mouse"></ui-checkbox>
                    <ui-checkbox id="pgShift" checked="true" label="Auto Shift"></ui-checkbox>
                 </div>
              </div>
           </div>
        </div>
      </section>

    </div>

    <style>
      #tooltip-demo-scroll-container { display: flex; flex-direction: column; gap: 48px; margin-top: 24px; min-height: 400px; }
      #tooltip-demo-scroll-container section { display: none; }
      #tooltip-demo-scroll-container section.active-section { display: block; animation: sectionFadeIn 0.4s ease-out; }
      
      @keyframes sectionFadeIn {
        from { opacity: 0; transform: translateY(10px); }
        to { opacity: 1; transform: translateY(0); }
      }
      
      .demo-section-header { margin-bottom: 32px; border-bottom: 1px solid var(--border-default); padding-bottom: 24px; }
      .demo-section-header h2 { font-size: 28px; font-weight: 800; color: var(--text-primary); margin: 0; }
      .demo-section-header p { color: var(--text-secondary); font-size: 15px; margin: 8px 0 0; }
  
      .pill-btn { padding: 8px 18px; background: var(--bg-secondary); border: 1px solid var(--border-default); border-radius: 24px; font-size: 13px; font-weight: 700; color: var(--text-primary); cursor: pointer; transition: all 0.2s cubic-bezier(0.4, 0, 0.2, 1); }
      .pill-btn:hover { border-color: #10b981; color: #10b981; transform: translateY(-2px); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1); }
      .pill-btn.primary { background: #10b981; color: white; border: none; }
      .pill-btn.secondary { background: var(--bg-primary); color: var(--text-primary); }
      .pill-btn.info { background: #10b981; color: white; border: none; }
      .pill-btn.success { background: #10b981; color: white; border: none; }
      .pill-btn.warning { background: var(--accent-yellow,#f59e0b); color: white; border: none; }
      .pill-btn.error { background: var(--accent-red,#ef4444); color: white; border: none; }

      
      .demo-card-elite { background: var(--bg-secondary); padding: 40px; border-radius: 24px; border: 1px solid var(--border-default); box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1), 0 4px 6px -2px rgba(0,0,0,0.05); color: var(--text-primary); }
      .demo-card-elite h3 { margin: 0 0 12px; font-size: 22px; font-weight: 800; color: var(--text-emphasized); }
      .demo-card-elite p { margin: 0 0 40px; font-size: 15px; color: var(--text-secondary); line-height: 1.6; }
      
      .card-header-icon { display: flex; align-items: center; gap: 10px; font-size: 11px; font-weight: 800; color: #10b981; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 8px; }

      .demo-grid-3 { display: grid; grid-template-columns: repeat(3, 1fr); gap: 32px; text-align: center; }
      .demo-grid-2 { display: grid; grid-template-columns: repeat(2, 1fr); gap: 32px; }
      .demo-grid-4 { display: grid; grid-template-columns: repeat(4, 1fr); gap: 16px; }
      
      .demo-flex-wrap { display: flex; flex-wrap: wrap; gap: 16px; justify-content: center; background: var(--bg-primary); padding: 24px; border-radius: 16px; border: 1px dashed var(--border-default); }
      
      .demo-item { display: flex; flex-direction: column; align-items: center; gap: 14px; }
      .demo-item span { font-size: 11px; color:var(--text-secondary,#64748b); font-weight: 700; text-transform: uppercase; letter-spacing: 0.05em; }
      
      .demo-item-glass { background: linear-gradient(135deg, #6366f1 0%, #ec4899 100%); padding: 48px; border-radius: 20px; display: flex; justify-content: center; box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1); }
      
      .pg-field label { display: block; margin-bottom: 6px; font-weight: 800; color:var(--text-secondary,#64748b); text-transform: uppercase; font-size: 10px; letter-spacing: 0.05em; }
      .pg-field select, .pg-field input:not([type="checkbox"]) { width: 100%; background: var(--bg-primary); border: 1px solid var(--border-default); color: var(--text-primary); padding: 10px; border-radius: 8px; font-size: 13px; outline:none; transition: border-color 0.2s; }
      .pg-field select:focus, .pg-field input:focus { border-color: #06b6d4; }
      
      .pg-check-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 12px; }
      .pg-check-grid label { display: flex; align-items: center; gap: 8px; cursor: pointer; color: var(--text-primary); font-weight: 600; }
      
      .pg-copy-btn { background: #10b981; border: none; color: white; padding: 8px 16px; border-radius: 8px; font-size: 12px; font-weight: 700; cursor: pointer; transition: all 0.2s; }
      .pg-copy-btn:hover { background: var(--accent-green,#059669); transform: translateY(-1px); }
    </style>
  `;

  // Define helpers on window for global access
  window.scrollToDemo = id => {
    const container = document.getElementById('tooltip-demo-scroll-container');
    if (!container) return;

    const sections = container.querySelectorAll('section');
    sections.forEach(s => {
      if (s.id === `demo-${id}`) {
        s.classList.add('active-section');
        s.style.display = 'block';
      } else {
        s.classList.remove('active-section');
        s.style.display = 'none';
      }
    });

    window.updateBtnTooltip(id);
  };

  window.updateBtnTooltip = id => {
    const nav = document.getElementById('tooltipNavPills');
    if (!nav) return;

    nav.querySelectorAll('ui-button').forEach(btn => {
      const onclickText = btn.getAttribute('onclick') || '';
      btn.selected = onclickText.includes(`'${id}'`);
    });
  };

  window.toggleManualTooltip = () => {
    const tt = document.getElementById('manualTooltip');
    const btn = document.getElementById('manualToggleBtn');
    if (!tt) return;
    tt.visible = !tt.visible;
    btn.textContent = tt.visible ? 'Hide Tooltip' : 'Show Tooltip';
  };

  window.syncColorInput = (pickerId, textId) => {
    const val = document.getElementById(pickerId).value;
    document.getElementById(textId).value = val;
    document.getElementById('pgUseColor').checked = true;
    window.updatePg();
  };

  window.syncColorText = (textId, pickerId) => {
    const val = document.getElementById(textId).value;
    if (/^#[0-9A-Fa-f]{3,6}$/.test(val)) {
      document.getElementById(pickerId).value = val;
      document.getElementById('pgUseColor').checked = true;
      window.updatePg();
    }
  };

  window.updatePg = () => {
    const tt = document.getElementById('pgTooltip');
    if (!tt) return;

    const useColor = document.getElementById('pgUseColor').checked;
    const customColorValue = useColor ? document.getElementById('pgColor').value : '';
    const textColorValue = useColor ? document.getElementById('pgTextColor').value : '';

    const props = {
      content: document.getElementById('pgContent').value,
      position: document.getElementById('pgPos').value,
      variant: document.getElementById('pgVariant').value,
      animation: document.getElementById('pgAnim').value,
      shape: document.getElementById('pgShape').value,
      elevation: parseInt(document.getElementById('pgElevation').value),
      offset: parseInt(document.getElementById('pgOffset').value),
      showDelay: parseInt(document.getElementById('pgShowDelay').value),
      hideDelay: parseInt(document.getElementById('pgHideDelay').value),
      arrowSize: parseInt(document.getElementById('pgArrowSize').value),
      showGlow: document.getElementById('pgGlow').checked,
      arrow: document.getElementById('pgArrow').checked,
      followCursor: document.getElementById('pgFollow').checked,
      autoShift: document.getElementById('pgShift').checked,
      customColor: customColorValue,
      textColor: textColorValue,
    };

    // Apply props
    Object.keys(props).forEach(key => (tt[key] = props[key]));

    // Build code block
    let code = '<ui-tooltip \n';
    code += '  content="' + props.content + '"\n';
    code += '  position="' + props.position + '"\n';
    code += '  variant="' + props.variant + '"\n';
    code += '  animation="' + props.animation + '"\n';
    code += '  shape="' + props.shape + '"\n';
    code += '  elevation="' + props.elevation + '"\n';
    code += '  offset="' + props.offset + '"\n';
    code += '  show-delay="' + props.showDelay + '"\n';
    code += '  hide-delay="' + props.hideDelay + '"\n';
    code += '  arrow-size="' + props.arrowSize + '"\n';
    code += '  show-glow="' + props.showGlow + '"\n';
    code += '  arrow="' + props.arrow + '"\n';
    code += '  follow-cursor="' + props.followCursor + '"\n';
    code += '  auto-shift="' + props.autoShift + '"';
    if (props.customColor) {
      code += '\n  custom-color="' + props.customColor + '"';
    }
    if (props.textColor) {
      code += '\n  text-color="' + props.textColor + '"';
    }
    code += '\n>\n  <ui-button slot="target">My Button</ui-button>\n</ui-tooltip>';

    document.getElementById('pgCodeBlock').textContent = code;
  };

  window.copyTooltipCode = () => {
    const code = document.getElementById('pgCodeBlock').textContent;
    navigator.clipboard.writeText(code);
    if (window.globalSnackbar) {
      window.globalSnackbar.add({ message: 'Implementation code copied!', type: 'success' });
    }
  };

  // Initial render
  setTimeout(() => {
    window.scrollToDemo('basic');
    window.updatePg();

    // Setup listeners
    const pgContent = document.getElementById('pgContent');
    const pgPos = document.getElementById('pgPos');
    const pgVariant = document.getElementById('pgVariant');
    const pgAnim = document.getElementById('pgAnim');
    const pgShape = document.getElementById('pgShape');
    const pgElevation = document.getElementById('pgElevation');
    const pgOffset = document.getElementById('pgOffset');
    const pgShowDelay = document.getElementById('pgShowDelay');
    const pgHideDelay = document.getElementById('pgHideDelay');
    const pgArrowSize = document.getElementById('pgArrowSize');
    const pgUseColor = document.getElementById('pgUseColor');
    const pgColor = document.getElementById('pgColor');
    const pgColorHex = document.getElementById('pgColorHex');
    const pgTextColor = document.getElementById('pgTextColor');
    const pgTextColorHex = document.getElementById('pgTextColorHex');
    const pgGlow = document.getElementById('pgGlow');
    const pgArrow = document.getElementById('pgArrow');
    const pgFollow = document.getElementById('pgFollow');
    const pgShift = document.getElementById('pgShift');

    if (pgContent) pgContent.addEventListener('inputChange', updatePg);
    if (pgPos) pgPos.addEventListener('valueChange', updatePg);
    if (pgVariant) pgVariant.addEventListener('valueChange', updatePg);
    if (pgAnim) pgAnim.addEventListener('valueChange', updatePg);
    if (pgShape) pgShape.addEventListener('valueChange', updatePg);
    if (pgElevation) pgElevation.addEventListener('numberInputChange', updatePg);
    if (pgOffset) pgOffset.addEventListener('numberInputChange', updatePg);
    if (pgShowDelay) pgShowDelay.addEventListener('numberInputChange', updatePg);
    if (pgHideDelay) pgHideDelay.addEventListener('numberInputChange', updatePg);
    if (pgArrowSize) pgArrowSize.addEventListener('numberInputChange', updatePg);
    if (pgUseColor) pgUseColor.addEventListener('checkboxChange', updatePg);
    if (pgColor) pgColor.addEventListener('colorChange', () => syncColorInput('pgColor', 'pgColorHex'));
    if (pgColorHex) pgColorHex.addEventListener('inputChange', () => syncColorText('pgColorHex', 'pgColor'));
    if (pgTextColor) pgTextColor.addEventListener('colorChange', () => syncColorInput('pgTextColor', 'pgTextColorHex'));
    if (pgTextColorHex) pgTextColorHex.addEventListener('inputChange', () => syncColorText('pgTextColorHex', 'pgTextColor'));
    if (pgGlow) pgGlow.addEventListener('checkboxChange', updatePg);
    if (pgArrow) pgArrow.addEventListener('checkboxChange', updatePg);
    if (pgFollow) pgFollow.addEventListener('checkboxChange', updatePg);
    if (pgShift) pgShift.addEventListener('checkboxChange', updatePg);
  }, 200);
};

window.initTooltipDemo = initTooltipDemo;
