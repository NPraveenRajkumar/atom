/**
 * Switch & Toggle Group Component Demo Script
 * Handles interactive demos for ui-switch and ui-toggle-group
 */

export function initSwitchDemo() {
  const section = document.getElementById('switch');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header" style="margin-bottom: 32px;">
      <p style="margin-top: 0; opacity: 0.7; font-size: 14px;">Master-tier switch system with liquid spring animations, atmospheric tracking glows, and premium material archetypes.</p>
    </div>
    
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 12px; flex-wrap: wrap;">
      <ui-button onclick="showInteractiveSwitch()" variant="outline">🎮 Playground</ui-button>
      <ui-button onclick="showEliteSwitchSpecimens()" variant="outline">✨ Elite Specimens</ui-button>
      <ui-button onclick="showSwitchVariants()" variant="outline">🎨 Variants</ui-button>
      <ui-button onclick="showNewSwitchStyles()" variant="outline">🆕 New Styles</ui-button>
      <ui-button onclick="showSwitchShapes()" variant="outline">📐 Shapes</ui-button>
      <ui-button onclick="showSwitchStates()" variant="outline">🚥 Lifecycle & Enterprise</ui-button>
      <ui-button onclick="showIconImageDemos()" variant="outline">🖼️ Icons</ui-button>
      <ui-button onclick="showPhysicsGallery()" variant="outline">🧬 Physics</ui-button>
      <ui-button onclick="showToggleGroup()" variant="outline">📦 Groups</ui-button>
      <ui-button onclick="showSwitchSizes()" variant="outline">📏 Sizes</ui-button>
    </div>

    <div id="switchDemoContainer" style="margin-top: 20px;"></div>
  `;

  // --- High-Fidelity Interaction Handlers ---
  window.handleAsyncSwitch = event => {
    const sw = event.target;
    console.log('Async switch triggered:', event.detail.checked);
    // Simulate network latency (2 seconds)
    setTimeout(() => {
      sw.checked = event.detail.checked;
      sw.stopAsyncLoading();
    }, 2000);
  };

  window.handleVetoSwitch = event => {
    const sw = event.target;
    console.log('Veto switch rejection triggered');
    sw.shake();
    // Internal state remains 'checked' because it was never toggled (async mode)
  };

  window.showInteractiveSwitch = function () {
    const container = document.getElementById('switchDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title">🎮 Interactive Playground</h3>
        <div class="playground-settings" style="padding: 24px; border-radius: 16px; margin-bottom: 24px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
            <div class="form-group">
               <ui-input label="Label Text" id="playSwitchLabel" value="Unified Switch" variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Checked Icon (Lucide)" id="playSwitchCheckedIcon" value="check" variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Unchecked Icon (Lucide)" id="playSwitchUncheckedIcon" value="x" variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Checked Image (URL)" id="playSwitchCheckedImg" value="" placeholder="https://..." variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Unchecked Image (URL)" id="playSwitchUncheckedImg" value="" placeholder="https://..." variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Description" id="playSwitchDesc" value="Authorize system override" variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Track Width (e.g. 100px)" id="playSwitchWidth" value="" placeholder="Default" variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Checked Text" id="playSwitchCheckedText" value="ON" variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Unchecked Text" id="playSwitchUncheckedText" value="OFF" variant="outlined" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-dropdown id="playSwitchSize" label="Size" value="md" size="md" options='[{"label":"XXX Small","value":"xxxs"},{"label":"XX Small","value":"xxs"},{"label":"Extra Small","value":"xs"},{"label":"Small","value":"small"},{"label":"md","value":"md"},{"label":"Large","value":"large"},{"label":"Extra Large","value":"xl"},{"label":"Extra Extra Large","value":"xxl"},{"label":"XXX Large","value":"xxxl"}]'></ui-dropdown>
            </div>
            <div class="form-group">
               <ui-dropdown id="playSwitchColor" label="Color Theme" value="primary" size="md" options='[{"label":"Primary (Blue)","value":"primary"},{"label":"Success (Green)","value":"success"},{"label":"Danger (Red)","value":"danger"},{"label":"Warning (Gold)","value":"warning"},{"label":"Info (Sky)","value":"info"},{"label":"Secondary (Slate)","value":"secondary"}]'></ui-dropdown>
            </div>
            <div class="form-group">
               <ui-dropdown id="playSwitchVariant" label="Material Archetype" value="solid" size="md" options='[{"label":"Solid (Default)","value":"solid"},{"label":"Glassmorphism","value":"glass"},{"label":"Raised Relief","value":"raised"},{"label":"Outlined","value":"outlined"},{"label":"Flat (Border Only)","value":"flat"},{"label":"Dot Indicator","value":"dot"},{"label":"Metallic Steel","value":"metallic"},{"label":"Slider Rail","value":"slider"},{"label":"Pill-Flat (Minimal)","value":"pill-flat"},{"label":"Soft (Pastel)","value":"soft"},{"label":"Bicolor (Green\/Red Split)","value":"bicolor"},{"label":"Power (Circular Ring)","value":"power"},{"label":"Status (Active\/Inactive)","value":"status"},{"label":"Labeled (Full-Track Label)","value":"labeled"}]'></ui-dropdown>
            </div>
            <div class="form-group">
               <ui-dropdown id="playSwitchDescPos" label="Description Position" value="bottom" size="md" options='[{"label":"Bottom","value":"bottom"},{"label":"Side (Dense)","value":"side"}]'></ui-dropdown>
            </div>
            <div class="form-group">
               <ui-dropdown id="playSwitchLibrary" label="Icon Library" value="lucide" size="md" options='[{"label":"Lucide (Modern)","value":"lucide"},{"label":"Google Material","value":"google"},{"label":"IonIcons","value":"ionicons"},{"label":"Font Awesome","value":"font-awesome"},{"label":"Bootstrap","value":"bootstrap"}]'></ui-dropdown>
            </div>

            <div class="form-group" style="grid-column: span 1;">
               <ui-dropdown id="playSwitchPhysics" label="Animation Personality" value="liquid" size="md" options='[{"label":"Liquid (Default)","value":"liquid"},{"label":"Stiff (Rapid)","value":"stiff"},{"label":"Bouncy (Elastic)","value":"bouncy"},{"label":"Linear (Industrial)","value":"linear"}]'></ui-dropdown>
            </div>
            <div class="form-group" style="display: flex; gap: 16px; align-items: flex-end; padding-bottom: 8px; grid-column: span 1;">
               <ui-checkbox id="playSwitchGlow" label="🕯️ Glow" checked size="md"></ui-checkbox>
               <ui-checkbox id="playSwitchHaptic" label="🧠 Haptic" checked size="md"></ui-checkbox>
               <ui-checkbox id="playSwitchGradient" label="🎨 Gradient" size="md"></ui-checkbox>
               <ui-checkbox id="playSwitchLoading" label="Loading" size="md"></ui-checkbox>
               <ui-checkbox id="playSwitchRTL" label="RTL Support" size="md"></ui-checkbox>
               <ui-checkbox id="playSwitchIndeterminate" label="Indeterminate" size="md"></ui-checkbox>
               <ui-checkbox id="playSwitchShowText" label="Show Track Text" size="md"></ui-checkbox>
            </div>
          </div>
        </div>

        <div class="playground-preview" style="min-height: 200px; position: relative; overflow: hidden;">
          <ui-switch id="playgroundSwitch" label="Unified Switch" checked description="Authorize system override" size="md"></ui-switch>
        </div>

        <div style="margin-top: 24px;">
          <ui-code-preview id="switchCodePreview" label="Implementation Code" expanded="false"></ui-code-preview>
        </div>
      </div>
    `;
    setTimeout(() => initializeSwitchBehaviors(), 50);
  };

  window.showEliteSwitchSpecimens = function () {
    const container = document.getElementById('switchDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">✨ Elite Material Specimens</h3>
        <p class="specimen-description">High-fidelity switch archetypes for premium state management.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
           <div style="padding: 32px; background: var(--bg-tertiary, #f1f5f9); border-radius: 20px; color: var(--text-primary); border: 1px solid var(--border-default);">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Glassmorphism</h4>
              <ui-switch 
                label="Orbital Transmission" 
                description="Sub-pixel refractive track substrate"
                variant="glass" 
                color="info" 
                glow 
                checked
                size="md">
              </ui-switch>
              <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary, rgba(0,0,0,0.04)); border-radius: 8px; font-size: 12px;">
                 Atmospheric glow effects transition smoothly between states.
              </div>
           </div>

           <div style="padding: 32px; background: var(--bg-secondary, #f8fafc); border-radius: 20px; border:1px solid var(--border-default,#e2e8f0);">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Raised Relief</h4>
              <ui-switch 
                label="Thermal Regulation" 
                description="Haptic feedback on activation"
                variant="raised" 
                color="danger" 
                haptic 
                checked
                size="md">
              </ui-switch>
              <div style="margin-top: 16px; padding: 12px; background: var(--bg-primary, white); border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; font-size: 12px;">
                 Tactile sensation reinforced by liquid spring physics.
              </div>
           </div>

           <div style="padding: 32px; background: var(--bg-primary, white); border:1px solid var(--border-subtle,#f1f5f9); border-radius: 20px;">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Side-Aligned Metadata</h4>
              <div style="display: flex; flex-direction: column; gap: 20px;">
                <ui-switch label="Network" description="v2.4 stable" description-position="side" checked color="success" glow haptic size="md"></ui-switch>
                <ui-switch label="Encryption" description="AES-256 active" description-position="side" checked color="primary" glow haptic size="md"></ui-switch>
                <ui-switch label="Firewall" description="Cluster shield" description-position="side" color="danger" haptic size="md"></ui-switch>
              </div>
           </div>

           <div style="padding: 32px; background:var(--accent-yellow-soft,#fffbeb); border: 1px solid #fde68a; border-radius: 20px; grid-column: span 2;">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Icon & Image Substrates</h4>
              <div style="display: flex; gap: 40px; flex-wrap: wrap; align-items: center;">
                 <div style="text-align: center;">
                    <p style="font-size: 11px; margin-bottom: 12px; opacity: 0.5;">Localization (UK/US)</p>
                    <ui-switch 
                      size="large" 
                      checked 
                      checked-image="/build/assets/images/slide2.png" 
                      unchecked-image="/build/assets/images/slide3.png">
                    </ui-switch>
                 </div>
                 <div style="text-align: center;">
                    <p style="font-size: 11px; margin-bottom: 12px; opacity: 0.5;">Material Theme (Light/Dark)</p>
                    <ui-switch 
                      size="xl" 
                      checked 
                      variant="glass"
                      icon-on="sun"
                      icon-off="moon"
                      color="warning"
                      glow>
                    </ui-switch>
                 </div>
                 <div style="text-align: center;">
                    <p style="font-size: 11px; margin-bottom: 12px; opacity: 0.5;">Tactical Comms (Audio)</p>
                    <ui-switch 
                      size="xxl" 
                      checked 
                      variant="raised"
                      icon-on="volume-high"
                      icon-off="volume-mute"
                      color="primary"
                      glow>
                    </ui-switch>
                  </div>
                  <div style="text-align: center;">
                    <p style="font-size: 11px; margin-bottom: 12px; opacity: 0.5;">Status Indicators (Full Text)</p>
                    <ui-switch 
                      size="large" 
                      width="150px"
                      checked 
                      show-track-text="true"
                      checked-text="AUTHORIZED"
                      unchecked-text="RESTRICTED"
                      color="success"
                      glow>
                    </ui-switch>
                  </div>

                  <div style="text-align: center;">
                    <p style="font-size: 11px; margin-bottom: 12px; opacity: 0.5;">Hybrid Synthesis (Icon + Text)</p>
                    <ui-switch 
                      size="xl" 
                      checked 
                      show-track-text="true"
                      checked-text="LIVE"
                      unchecked-text="OFF"
                      icon-on="pulse"
                      icon-off="infinite"
                      color="danger"
                      glow>
                    </ui-switch>
                  </div>
               </div>
            </div>
         </div>
      </div>
    `;
  };

  window.showSwitchVariants = function () {
    const container = document.getElementById('switchDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🎨 All Variants &amp; Material Archetypes</h3>
        <p class="specimen-description">14 distinct visual archetypes — from solid fills to industrial metallic knobs, circular power buttons to labeled sliders. Each variant is fully themeable and supports all semantic colors.</p>

        <div style="display: flex; flex-direction: column; gap: 48px;">

          <!-- ORIGINAL 4 -->
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 11px; font-weight: 800; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.08em;">Core Archetypes</h4>
            <p style="margin: 0 0 20px 0; font-size: 12px; color: var(--text-secondary,#64748b);">Foundation variants built on depth, glass, and relief.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Solid</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="solid" label="Off State" color="primary" size="md"></ui-switch>
                  <ui-switch variant="solid" label="On State" color="primary" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Full-fill track with color transition. The standard default archetype.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-tertiary, #f1f5f9); border-radius: 16px; border: 1px solid var(--border-default); color: var(--text-primary)">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary, #64748b); margin: 0 0 16px;">Glass</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="glass" label="Off State" color="info" size="md"></ui-switch>
                  <ui-switch variant="glass" label="On State" color="info" checked glow size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color: var(--text-secondary, #64748b); margin: 12px 0 0; line-height: 1.5;">Frosted backdrop blur with refractive track substrate.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-secondary, #f8fafc); border-radius: 16px; border: 1px solid var(--border-default,#e2e8f0);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Raised</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="raised" label="Off State" color="success" size="md"></ui-switch>
                  <ui-switch variant="raised" label="On State" color="success" checked glow size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Neumorphic inset shadow with tactile 3D relief depth.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-default,#e2e8f0);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Outlined</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="outlined" label="Off State" color="danger" size="md"></ui-switch>
                  <ui-switch variant="outlined" label="On State" color="danger" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Transparent fill with colored border and thumb accent.</p>
              </div>

            </div>
          </div>

          <!-- NEW 6 VARIANTS -->
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 11px; font-weight: 800; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.08em;">New Extended Archetypes</h4>
            <p style="margin: 0 0 20px 0; font-size: 12px; color: var(--text-secondary,#64748b);">Six new structural archetypes for advanced design systems.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Flat</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="flat" label="Off State" color="primary" size="md"></ui-switch>
                  <ui-switch variant="flat" label="On State" color="primary" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Border-only ring — zero fill in OFF, solid accent in ON.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 20px;">Dot</p>
                <div style="display: flex; flex-direction: column; gap: 12px; padding-top: 4px;">
                  <ui-switch variant="dot" label="Off State" color="success" size="md"></ui-switch>
                  <ui-switch variant="dot" label="On State" color="success" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Glowing dot indicator above the track telegraphs state.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-secondary, #f8fafc); border-radius: 16px; border: 1px solid var(--border-default,#e2e8f0);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Metallic</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="metallic" label="Off State" size="md"></ui-switch>
                  <ui-switch variant="metallic" label="On State" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Brushed steel radial-gradient knob on dark inset track.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Slider</p>
                <div style="display: flex; flex-direction: column; gap: 16px;">
                  <ui-switch variant="slider" label="Off State" color="warning" size="md"></ui-switch>
                  <ui-switch variant="slider" label="On State" color="warning" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Thin 4px rail with floating knob — range-slider aesthetic.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Pill-Flat</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="pill-flat" label="Off State" color="danger" size="md"></ui-switch>
                  <ui-switch variant="pill-flat" label="On State" color="danger" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Zero-elevation minimal pill — no shadows, no depth.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Soft</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="soft" label="Off State" color="info" size="md"></ui-switch>
                  <ui-switch variant="soft" label="On State" color="info" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Pastel tinted 12% fill in OFF; solid accent fill in ON.</p>
              </div>

            </div>
          </div>

          <!-- SEMANTIC VARIANTS -->
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 11px; font-weight: 800; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.08em;">Semantic State Archetypes</h4>
            <p style="margin: 0 0 20px 0; font-size: 12px; color: var(--text-secondary,#64748b);">Variants optimized for communicating binary state at a glance — bicolor signals, power rings, and labeled tracks.</p>
            <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(260px, 1fr)); gap: 20px;">

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Bicolor</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="bicolor" label="Off (thumb left)" size="md"></ui-switch>
                  <ui-switch variant="bicolor" label="On (thumb right)" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Permanent green/red split gradient — ✓ left, ✕ right. Thumb slides to reveal either state.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-secondary, #f8fafc); border-radius: 16px; border: 1px solid var(--border-default,#e2e8f0);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Power</p>
                <div style="display: flex; gap: 24px; align-items: center;">
                  <div style="text-align:center;"><ui-switch variant="power" color="primary" size="md"></ui-switch><p style="font-size:9px;margin:6px 0 0;opacity:0.5;font-weight:700;">OFF</p></div>
                  <div style="text-align:center;"><ui-switch variant="power" color="primary" checked size="md"></ui-switch><p style="font-size:9px;margin:6px 0 0;opacity:0.5;font-weight:700;">ON</p></div>
                  <div style="text-align:center;"><ui-switch variant="power" color="success" checked size="xl"></ui-switch><p style="font-size:9px;margin:6px 0 0;opacity:0.5;font-weight:700;">XL</p></div>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Circular neumorphic ring — grey border in OFF, colored border + glow in ON.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Status</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="status" show-track-text unchecked-text="ACTIVE" label="Unchecked" size="md"></ui-switch>
                  <ui-switch variant="status" show-track-text checked-text="INACTIVE" label="Checked" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Wide pill — green/grey half-track split with text label. Use <code>show-track-text</code> props.</p>
              </div>

              <div style="padding: 24px; background: var(--bg-primary, white); border-radius: 16px; border: 1px solid var(--border-subtle,#f1f5f9);">
                <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary,#64748b); margin: 0 0 16px;">Labeled</p>
                <div style="display: flex; flex-direction: column; gap: 12px;">
                  <ui-switch variant="labeled" show-track-text unchecked-text="Inactive" label="Off — grey track + ⊘" color="primary" size="md"></ui-switch>
                  <ui-switch variant="labeled" show-track-text checked-text="Active" label="On — colored track + ✓" color="primary" checked size="md"></ui-switch>
                </div>
                <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin: 12px 0 0; line-height: 1.5;">Full track switches blue/grey. White thumb shows ✓ when ON, ⊘ when OFF. Supports all colors.</p>
              </div>

            </div>
          </div>

          <!-- SEMANTIC COLOR MATRIX -->
          <div>
            <h4 style="margin: 0 0 8px 0; font-size: 11px; font-weight: 800; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.08em;">Semantic Color Matrix</h4>
            <p style="margin: 0 0 20px 0; font-size: 12px; color: var(--text-secondary,#64748b);">All 6 semantic colors applied across the primary variants.</p>
            <div style="overflow-x: auto; padding-bottom: 8px;">
              <table style="width: 100%; border-collapse: separate; border-spacing: 16px;">
                <thead>
                  <tr>
                    <th style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary,#64748b); text-align: left; padding: 0 0 4px; letter-spacing: 0.08em; white-space: nowrap;">Variant</th>
                    <th style="font-size: 10px; font-weight: 700; color: #3b82f6; text-align: center; padding: 0 0 4px;">Primary</th>
                    <th style="font-size: 10px; font-weight: 700; color: #10b981; text-align: center; padding: 0 0 4px;">Success</th>
                    <th style="font-size: 10px; font-weight: 700; color: #ef4444; text-align: center; padding: 0 0 4px;">Danger</th>
                    <th style="font-size: 10px; font-weight: 700; color: #f59e0b; text-align: center; padding: 0 0 4px;">Warning</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary,#64748b); white-space: nowrap;">Solid</td>
                    <td style="text-align: center;"><ui-switch variant="solid" color="primary" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="solid" color="success" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="solid" color="danger" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="solid" color="warning" checked size="sm"></ui-switch></td>
                  </tr>
                  <tr>
                    <td style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary,#64748b);">Flat</td>
                    <td style="text-align: center;"><ui-switch variant="flat" color="primary" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="flat" color="success" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="flat" color="danger" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="flat" color="warning" checked size="sm"></ui-switch></td>
                  </tr>
                  <tr>
                    <td style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary,#64748b); padding-top: 20px;">Dot</td>
                    <td style="text-align: center; padding-top: 20px;"><ui-switch variant="dot" color="primary" checked size="sm"></ui-switch></td>
                    <td style="text-align: center; padding-top: 20px;"><ui-switch variant="dot" color="success" checked size="sm"></ui-switch></td>
                    <td style="text-align: center; padding-top: 20px;"><ui-switch variant="dot" color="danger" checked size="sm"></ui-switch></td>
                    <td style="text-align: center; padding-top: 20px;"><ui-switch variant="dot" color="warning" checked size="sm"></ui-switch></td>
                  </tr>
                  <tr>
                    <td style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary,#64748b);">Slider</td>
                    <td style="text-align: center;"><ui-switch variant="slider" color="primary" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="slider" color="success" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="slider" color="danger" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="slider" color="warning" checked size="sm"></ui-switch></td>
                  </tr>
                  <tr>
                    <td style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary,#64748b);">Pill-Flat</td>
                    <td style="text-align: center;"><ui-switch variant="pill-flat" color="primary" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="pill-flat" color="success" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="pill-flat" color="danger" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="pill-flat" color="warning" checked size="sm"></ui-switch></td>
                  </tr>
                  <tr>
                    <td style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary,#64748b);">Soft</td>
                    <td style="text-align: center;"><ui-switch variant="soft" color="primary" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="soft" color="success" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="soft" color="danger" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="soft" color="warning" checked size="sm"></ui-switch></td>
                  </tr>
                  <tr>
                    <td style="font-size: 10px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary,#64748b);">Labeled</td>
                    <td style="text-align: center;"><ui-switch variant="labeled" color="primary" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="labeled" color="success" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="labeled" color="danger" checked size="sm"></ui-switch></td>
                    <td style="text-align: center;"><ui-switch variant="labeled" color="warning" checked size="sm"></ui-switch></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          <!-- FULL SIDE-BY-SIDE STRIP -->
          <div style="padding: 32px; background: var(--bg-secondary, #f8fafc); border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0);">
            <h4 style="margin: 0 0 8px 0; font-size: 11px; font-weight: 800; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.08em;">All 14 Variants — Checked State</h4>
            <p style="margin: 0 0 24px 0; font-size: 12px; color: var(--text-secondary,#64748b);">Quick visual reference comparing all archetypes at a glance.</p>
            <div style="display: flex; flex-wrap: wrap; gap: 28px; align-items: flex-end;">
              <div style="text-align: center;"><ui-switch variant="solid" color="primary" checked size="md" glow></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Solid</p></div>
              <div style="text-align: center;"><ui-switch variant="glass" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Glass</p></div>
              <div style="text-align: center;"><ui-switch variant="raised" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Raised</p></div>
              <div style="text-align: center;"><ui-switch variant="outlined" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Outlined</p></div>
              <div style="text-align: center;"><ui-switch variant="flat" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Flat</p></div>
              <div style="text-align: center; padding-top: 20px;"><ui-switch variant="dot" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Dot</p></div>
              <div style="text-align: center;"><ui-switch variant="metallic" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Metallic</p></div>
              <div style="text-align: center;"><ui-switch variant="slider" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Slider</p></div>
              <div style="text-align: center;"><ui-switch variant="pill-flat" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Pill-Flat</p></div>
              <div style="text-align: center;"><ui-switch variant="soft" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Soft</p></div>
              <div style="text-align: center;"><ui-switch variant="bicolor" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Bicolor</p></div>
              <div style="text-align: center;"><ui-switch variant="power" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Power</p></div>
              <div style="text-align: center;"><ui-switch variant="status" show-track-text unchecked-text="ON" size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Status</p></div>
              <div style="text-align: center;"><ui-switch variant="labeled" show-track-text checked-text="Active" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 10px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase; letter-spacing: 0.06em;">Labeled</p></div>
            </div>
          </div>

        </div>
      </div>
    `;
  };

  window.showSwitchShapes = function () {
    const container = document.getElementById('switchDemoContainer');
    container.innerHTML = `
       <div class="demo-block reveal-slide-up">
         <h3 class="specimen-title">📐 Geometry & Corner Archetypes</h3>
         <p class="specimen-description">Structural variants for different UI surfaces and container systems.</p>
         
         <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 32px;">
            <div style="padding: 32px; background: var(--bg-primary, white); border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9); display: flex; flex-direction: column; align-items: center; gap: 20px;">
               <p style="font-size: 11px; color:var(--text-secondary,#64748b); font-weight: 800; text-transform: uppercase;">Shape: Pill (Flagship)</p>
               <ui-switch shape="pill" size="xl" checked color="primary" glow></ui-switch>
               <p style="font-size: 12px; opacity: 0.6; text-align: center;">Curvature-continuous pill shape for standard navigation.</p>
            </div>
            <div style="padding: 32px; background: var(--bg-primary, white); border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9); display: flex; flex-direction: column; align-items: center; gap: 20px;">
               <p style="font-size: 11px; color:var(--text-secondary,#64748b); font-weight: 800; text-transform: uppercase;">Shape: Rounded (Soft)</p>
               <ui-switch shape="rounded" size="xl" checked color="success" glow></ui-switch>
               <p style="font-size: 12px; opacity: 0.6; text-align: center;">Subtle 6px corner radius for dashboard tiles.</p>
            </div>
            <div style="padding: 32px; background: var(--bg-primary, white); border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9); display: flex; flex-direction: column; align-items: center; gap: 20px;">
               <p style="font-size: 11px; color:var(--text-secondary,#64748b); font-weight: 800; text-transform: uppercase;">Shape: Square (Industrial)</p>
               <ui-switch shape="square" size="xl" checked color="info" glow></ui-switch>
               <p style="font-size: 12px; opacity: 0.6; text-align: center;">Zero-radius architecture for professional grid systems.</p>
            </div>
         </div>
       </div>
     `;
  };

  window.showNewSwitchStyles = function () {
    const container = document.getElementById('switchDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🆕 New Visual Styles</h3>
        <p class="specimen-description">Six new CSS-driven archetypes expanding the switch design language — from ultra-minimal to industrial metallic.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(290px, 1fr)); gap: 28px;">

          <!-- FLAT -->
          <div style="padding: 28px; background: var(--bg-primary, white); border-radius: 20px; border: 1px solid var(--border-subtle, #f1f5f9);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Flat — Border Only</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-switch variant="flat" label="Primary Off" color="primary" size="md"></ui-switch>
              <ui-switch variant="flat" label="Primary On" color="primary" checked size="md"></ui-switch>
              <ui-switch variant="flat" label="Success On" color="success" checked size="md"></ui-switch>
              <ui-switch variant="flat" label="Danger On" color="danger" checked size="md"></ui-switch>
            </div>
          </div>

          <!-- DOT -->
          <div style="padding: 28px; background: var(--bg-primary, white); border-radius: 20px; border: 1px solid var(--border-subtle, #f1f5f9);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Dot — Status Indicator</p>
            <div style="display: flex; flex-direction: column; gap: 16px; padding-top: 4px;">
              <ui-switch variant="dot" label="Primary Off" color="primary" size="md"></ui-switch>
              <ui-switch variant="dot" label="Primary On" color="primary" checked size="md"></ui-switch>
              <ui-switch variant="dot" label="Success On" color="success" checked size="md"></ui-switch>
              <ui-switch variant="dot" label="Danger Off" color="danger" size="md"></ui-switch>
            </div>
          </div>

          <!-- METALLIC -->
          <div style="padding: 28px; background: var(--bg-secondary, #f8fafc); border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Metallic — Brushed Steel Knob</p>
            <div style="display: flex; flex-direction: column; gap: 20px;">
              <ui-switch variant="metallic" label="Industrial Off" size="md"></ui-switch>
              <ui-switch variant="metallic" label="Industrial On" checked size="md"></ui-switch>
              <ui-switch variant="metallic" label="Large Knob On" checked size="xl"></ui-switch>
            </div>
          </div>

          <!-- SLIDER -->
          <div style="padding: 28px; background: var(--bg-primary, white); border-radius: 20px; border: 1px solid var(--border-subtle, #f1f5f9);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Slider — Thin Rail + Knob</p>
            <div style="display: flex; flex-direction: column; gap: 20px; padding: 4px 0;">
              <ui-switch variant="slider" label="Primary Off" color="primary" size="md"></ui-switch>
              <ui-switch variant="slider" label="Primary On" color="primary" checked size="md"></ui-switch>
              <ui-switch variant="slider" label="Success On" color="success" checked size="lg"></ui-switch>
              <ui-switch variant="slider" label="Danger Off" color="danger" size="lg"></ui-switch>
            </div>
          </div>

          <!-- PILL-FLAT -->
          <div style="padding: 28px; background: var(--bg-primary, white); border-radius: 20px; border: 1px solid var(--border-subtle, #f1f5f9);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Pill-Flat — Zero-Elevation Minimal</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-switch variant="pill-flat" label="Primary Off" color="primary" size="md"></ui-switch>
              <ui-switch variant="pill-flat" label="Primary On" color="primary" checked size="md"></ui-switch>
              <ui-switch variant="pill-flat" label="Success On" color="success" checked size="md"></ui-switch>
              <ui-switch variant="pill-flat" label="Danger On" color="danger" checked size="md"></ui-switch>
            </div>
          </div>

          <!-- SOFT -->
          <div style="padding: 28px; background: var(--bg-primary, white); border-radius: 20px; border: 1px solid var(--border-subtle, #f1f5f9);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Soft — Pastel Tinted Fill</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-switch variant="soft" label="Primary Off" color="primary" size="md"></ui-switch>
              <ui-switch variant="soft" label="Primary On" color="primary" checked size="md"></ui-switch>
              <ui-switch variant="soft" label="Success On" color="success" checked size="md"></ui-switch>
              <ui-switch variant="soft" label="Danger On" color="danger" checked size="md"></ui-switch>
            </div>
          </div>

          <!-- BICOLOR -->
          <div style="padding: 28px; background: var(--bg-primary, white); border-radius: 20px; border: 1px solid var(--border-subtle, #f1f5f9);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Bicolor — Green/Red Split Track</p>
            <p style="font-size: 11px; color: var(--text-secondary,#64748b); margin: 0 0 16px 0; line-height: 1.5;">Track always shows ✓ on the left (green) and ✕ on the right (red). The thumb slides to reveal either state.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-switch variant="bicolor" label="Unchecked (thumb left)" size="md"></ui-switch>
              <ui-switch variant="bicolor" label="Checked (thumb right)" checked size="md"></ui-switch>
              <ui-switch variant="bicolor" label="Large" checked size="xl"></ui-switch>
            </div>
          </div>

          <!-- POWER -->
          <div style="padding: 28px; background: var(--bg-secondary, #f8fafc); border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Power — Circular Ring Button</p>
            <p style="font-size: 11px; color: var(--text-secondary,#64748b); margin: 0 0 16px 0; line-height: 1.5;">Track becomes a circle with an inset border that changes color. OFF shows grey ring, ON shows colored ring with glow.</p>
            <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: center;">
              <div style="text-align: center;"><ui-switch variant="power" color="primary" size="md"></ui-switch><p style="font-size: 10px; margin: 8px 0 0; opacity: 0.5; font-weight: 700;">MD OFF</p></div>
              <div style="text-align: center;"><ui-switch variant="power" color="primary" checked size="md"></ui-switch><p style="font-size: 10px; margin: 8px 0 0; opacity: 0.5; font-weight: 700;">MD ON</p></div>
              <div style="text-align: center;"><ui-switch variant="power" color="success" checked size="xl"></ui-switch><p style="font-size: 10px; margin: 8px 0 0; opacity: 0.5; font-weight: 700;">XL ON</p></div>
              <div style="text-align: center;"><ui-switch variant="power" color="danger" checked size="xxl"></ui-switch><p style="font-size: 10px; margin: 8px 0 0; opacity: 0.5; font-weight: 700;">XXL ON</p></div>
            </div>
          </div>

          <!-- STATUS -->
          <div style="padding: 28px; background: var(--bg-primary, white); border-radius: 20px; border: 1px solid var(--border-subtle, #f1f5f9);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Status — Active/Inactive Label Track</p>
            <p style="font-size: 11px; color: var(--text-secondary,#64748b); margin: 0 0 16px 0; line-height: 1.5;">Wide pill where the left/right halves show colored labels. Use <code>show-track-text</code> + <code>checked-text</code>/<code>unchecked-text</code> props for custom labels.</p>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-switch variant="status" show-track-text checked-text="ACTIVE" unchecked-text="ACTIVE" label="Unchecked = Inactive" size="md"></ui-switch>
              <ui-switch variant="status" show-track-text checked-text="INACTIVE" unchecked-text="INACTIVE" label="Checked = Inactive" checked size="md"></ui-switch>
              <ui-switch variant="status" show-track-text checked-text="ENABLED" unchecked-text="ENABLED" label="Large" size="lg"></ui-switch>
            </div>
          </div>

          <!-- LABELED -->
          <div style="padding: 28px; background: var(--bg-primary, white); border-radius: 20px; border: 1px solid var(--border-subtle, #f1f5f9);">
            <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 20px 0; letter-spacing: 0.08em;">Labeled — Full-Track Color + Icon Thumb</p>
            <p style="font-size: 11px; color: var(--text-secondary,#64748b); margin: 0 0 16px 0; line-height: 1.5;">Entire track switches between color (active) and grey (inactive). White thumb shows <strong>✓</strong> when ON, <strong>⊘</strong> when OFF. Add <code>show-track-text</code> with <code>checked-text</code>/<code>unchecked-text</code> for labels.</p>
            <div style="display: flex; flex-direction: column; gap: 20px;">
              <ui-switch variant="labeled" show-track-text checked-text="Active" unchecked-text="Inactive" label="Inactive state" color="primary" size="md"></ui-switch>
              <ui-switch variant="labeled" show-track-text checked-text="Active" unchecked-text="Inactive" label="Active state" color="primary" checked size="md"></ui-switch>
              <ui-switch variant="labeled" show-track-text checked-text="Enabled" unchecked-text="Disabled" label="Success color" color="success" checked size="md"></ui-switch>
              <ui-switch variant="labeled" show-track-text checked-text="Online" unchecked-text="Offline" label="Danger color" color="danger" size="md"></ui-switch>
              <div style="display: flex; flex-wrap: wrap; gap: 16px; align-items: center; padding-top: 4px;">
                <ui-switch variant="labeled" show-track-text checked-text="Active" unchecked-text="Inactive" color="primary" checked size="sm"></ui-switch>
                <ui-switch variant="labeled" show-track-text checked-text="Active" unchecked-text="Inactive" color="primary" checked size="md"></ui-switch>
                <ui-switch variant="labeled" show-track-text checked-text="Active" unchecked-text="Inactive" color="primary" checked size="lg"></ui-switch>
                <ui-switch variant="labeled" show-track-text checked-text="Active" unchecked-text="Inactive" color="primary" checked size="xl"></ui-switch>
              </div>
            </div>
          </div>

        </div>

        <!-- Side-by-side all variants comparison -->
        <div style="margin-top: 36px; padding: 36px; background: var(--bg-secondary, #f8fafc); border-radius: 24px; border: 1px solid var(--border-default, #e2e8f0);">
          <p style="font-size: 11px; font-weight: 800; text-transform: uppercase; color: var(--text-secondary, #64748b); margin: 0 0 24px 0; letter-spacing: 0.08em;">All 13 Variants — Checked / Primary</p>
          <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: flex-end;">
            <div style="text-align: center;"><ui-switch variant="solid" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">SOLID</p></div>
            <div style="text-align: center;"><ui-switch variant="glass" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">GLASS</p></div>
            <div style="text-align: center;"><ui-switch variant="raised" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">RAISED</p></div>
            <div style="text-align: center;"><ui-switch variant="outlined" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">OUTLINED</p></div>
            <div style="text-align: center;"><ui-switch variant="flat" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">FLAT</p></div>
            <div style="text-align: center; padding-top: 18px;"><ui-switch variant="dot" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">DOT</p></div>
            <div style="text-align: center;"><ui-switch variant="metallic" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">METALLIC</p></div>
            <div style="text-align: center;"><ui-switch variant="slider" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">SLIDER</p></div>
            <div style="text-align: center;"><ui-switch variant="pill-flat" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">PILL-FLAT</p></div>
            <div style="text-align: center;"><ui-switch variant="soft" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">SOFT</p></div>
            <div style="text-align: center;"><ui-switch variant="bicolor" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">BICOLOR</p></div>
            <div style="text-align: center;"><ui-switch variant="power" color="primary" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">POWER</p></div>
            <div style="text-align: center;"><ui-switch variant="status" show-track-text unchecked-text="ACTIVE" size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">STATUS</p></div>
            <div style="text-align: center;"><ui-switch variant="labeled" show-track-text checked-text="Active" unchecked-text="Inactive" checked size="md"></ui-switch><p style="font-size: 9px; margin: 8px 0 0; opacity: 0.5; font-weight: 800; text-transform: uppercase;">LABELED</p></div>
          </div>
        </div>
      </div>
    `;
  };


  window.showSwitchStates = function () {
    const container = document.getElementById('switchDemoContainer');
    container.innerHTML = `
        <h3 class="specimen-title">🚥 Enterprise Lifecycle & Localization</h3>
        <p class="specimen-description">High-fidelity handling of complex operational states and global mirror support.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
            <div style="background: var(--bg-primary, white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
               <h4 style="margin: 0 0 20px 0; font-size: 12px; color:var(--accent-indigo,#6366f1); text-transform: uppercase; font-weight: 800;">Hardware Accelerated RTL</h4>
               <div style="display: flex; flex-direction: column; gap: 20px;">
                  <ui-switch label="تبديل النظام" rtl="true" color="primary" checked></ui-switch>
                  <ui-switch label="حالة الشبكة" rtl="true" color="success"></ui-switch>
                  <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 10px;">Sub-pixel mirrored layout for Global/ME region deployments.</p>
               </div>
            </div>

            <div style="background: var(--bg-primary, white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
               <h4 style="margin: 0 0 20px 0; font-size: 12px; color: #10b981; text-transform: uppercase; font-weight: 800;">Async Scanning (Shimmer)</h4>
               <div style="display: flex; flex-direction: column; gap: 20px;">
                  <ui-switch label="Resolving Promises" loading="true" checked></ui-switch>
                  <ui-switch label="Establishing Link" loading="true" color="info"></ui-switch>
                  <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 10px;">Digital scanning grid visualizes the "Pending" state during async cycles.</p>
               </div>
            </div>

            <div style="background: var(--bg-primary, white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
               <h4 style="margin: 0 0 20px 0; font-size: 12px; color:var(--accent-yellow,#f59e0b); text-transform: uppercase; font-weight: 800;">Mixed Selection Support</h4>
               <div style="display: flex; flex-direction: column; gap: 20px;">
                  <ui-switch label="Mixed Sub-states" indeterminate="true" color="warning"></ui-switch>
                  <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 10px;">Visual archetype for "Partial Selection" in hierarchical dashboard systems.</p>
               </div>
            </div>

            <div style="background: var(--bg-primary, white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
               <h4 style="margin: 0 0 20px 0; font-size: 12px; color:var(--text-secondary,#64748b); text-transform: uppercase; font-weight: 800;">Operational Restrictions</h4>
               <div style="display: flex; flex-direction: column; gap: 16px;">
                  <ui-switch label="Read-Only Mode" checked readonly color="success"></ui-switch>
                  <ui-switch label="Disabled Matrix" disabled checked></ui-switch>
                  <ui-switch label="Required (Asterisk)" required></ui-switch>
               </div>
            </div>

            <div style="background: var(--bg-primary, white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
               <h4 style="margin: 0 0 20px 0; font-size: 12px; color:var(--accent-red,#ef4444); text-transform: uppercase; font-weight: 800;">Validation Substrate</h4>
               <div style="display: flex; flex-direction: column; gap: 16px;">
                  <ui-switch label="Security Violation" invalid error-message="Token validation failed" checked color="danger"></ui-switch>
                  <ui-switch label="Operational Hint" helper-text="Secondary auth required" color="info"></ui-switch>
               </div>
            </div>

            <div style="background: var(--bg-secondary,#f8fafc); padding: 32px; border-radius: 24px; display: flex; flex-direction: column; gap: 32px; border: 1px solid var(--border-default,#e2e8f0);">
               <h4 style="margin: 0; font-size: 12px; color: var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 1px; font-weight: 800;">Apex Life-cycle & Veto</h4>
               <div style="display: flex; flex-direction: column; gap: 24px;">
                  <div style="background: var(--bg-primary,white); padding: 20px; border-radius: 16px; border: 1px solid var(--border-default,#e2e8f0);">
                     <ui-switch 
                        label="Async Promise Flow" 
                        async="true" 
                        onSwitchChange="handleAsyncSwitch(event)" 
                        color="success" 
                        glow>
                     </ui-switch>
                     <p style="font-size: 10px; color: var(--text-secondary,#94a3b8); margin-top: 10px;">Enters 'Pending' state until server-side ACK (2s latency simulated).</p>
                  </div>
                  <div style="background: var(--bg-primary,white); padding: 20px; border-radius: 16px; border: 1px solid var(--border-default,#e2e8f0);">
                     <ui-switch 
                        label="Security Veto (Shake)" 
                        async="true" 
                        checked="true"
                        onSwitchChange="handleVetoSwitch(event)" 
                        color="danger" 
                        glow 
                        haptic="true">
                     </ui-switch>
                     <p style="font-size: 10px; color: var(--text-secondary,#94a3b8); margin-top: 10px;">Rejects toggle with visual shake and tactical vibration pattern.</p>
                  </div>
               </div>
            </div>

            <div style="background: var(--bg-primary, white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
               <h4 style="margin: 0 0 20px 0; font-size: 12px; color:var(--accent-indigo,#6366f1); text-transform: uppercase; font-weight: 800;">Interaction Tier (A11y)</h4>
               <div style="display: flex; flex-direction: column; gap: 20px;">
                  <ui-switch label="Focus Mastery" description="Tab here for color-synced ring"></ui-switch>
                  <ui-switch label="Tactile Press" description="Hold for scale-down effect" color="warning"></ui-switch>
                  <ui-switch label="Surface Lift" description="Hover for illumination" color="info"></ui-switch>
               </div>
            </div>
         </div>
     `;
  };

  window.showIconImageDemos = function () {
    const container = document.getElementById('switchDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🖼️ High-Fidelity Substrates</h3>
        <p class="specimen-description">Expressive state-based feedback using premium vector glyphs and raster mapping.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 40px; background: linear-gradient(135deg, rgba(var(--primary-rgb), 0.05) 0%, rgba(var(--info-rgb), 0.05) 100%); padding: 60px; border-radius: 32px; position: relative; overflow: hidden;">
           <!-- Decorative glow -->
           <div style="position: absolute; top: -100px; right: -100px; width: 300px; height: 300px; background: radial-gradient(circle, rgba(var(--primary-rgb), 0.1) 0%, transparent 70%); filter: blur(50px);"></div>
           
           <!-- Icon Examples -->
           <div class="demo-specimen" style="background: var(--bg-primary, #ffffff); backdrop-filter: blur(20px); padding: 32px; border-radius: 24px; border: 1px solid var(--border-default, rgba(0,0,0,0.08)); display: flex; flex-direction: column; gap: 32px; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08);">
              <div style="display: flex; justify-content: space-between; align-items: center;">
                 <h4 style="margin: 0; font-size: 13px; color:var(--accent-indigo,#6366f1); text-transform: uppercase; letter-spacing: 1px; font-weight: 800;">Dynamic Symbol Systems</h4>
                 <div style="padding: 4px 10px; background: rgba(99, 102, 241, 0.1); border-radius: 8px; color:var(--accent-indigo,#6366f1); font-size: 10px; font-weight: 700;">VECTOR GLYPHS</div>
              </div>
              <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin: -16px 0 0 0; line-height: 1.5;">Expressive symbols to enhance cognitive state recognition and accessibility.</p>
              
              <div style="display: flex; flex-direction: column; gap: 24px;">
                  <div style="background: var(--bg-primary, white); padding: 20px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9); position: relative;">
                    <ui-switch label="Audio Matrix" checked icon-on="volume-high" icon-off="volume-mute" size="large" glow color="primary"></ui-switch>
                    <div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); font-size: 10px; opacity: 0.3; font-weight: 700;">70% GAIN</div>
                 </div>
                 <div style="background: var(--bg-primary, white); padding: 20px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9); position: relative;">
                    <ui-switch label="Emergency Protocol" icon-on="nuclear" icon-off="lock-open" size="large" glow color="danger"></ui-switch>
                    <div style="position: absolute; right: 20px; top: 50%; transform: translateY(-50%); font-size: 10px; opacity: 0.3; font-weight: 700;">STANDBY</div>
                 </div>
                 <div style="background: var(--bg-primary, white); padding: 20px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
                    <ui-switch label="Wide Status Matrix" width="160px" checked show-track-text="true" checked-text="OPERATIONAL" unchecked-text="STANDBY" icon-on="pulse" icon-off="infinite" size="large" glow color="success"></ui-switch>
                 </div>
              </div>
           </div>

           <!-- Image Examples -->
           <div class="demo-specimen" style="background: var(--bg-primary, #ffffff); backdrop-filter: blur(20px); padding: 32px; border-radius: 24px; border: 1px solid var(--border-default, rgba(0,0,0,0.08)); display: flex; flex-direction: column; gap: 32px; box-shadow: 0 10px 30px -10px rgba(0,0,0,0.08);">
              <h4 style="margin: 0; font-size: 13px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 1px; font-weight: 800;">Raster Texture Mapping</h4>
              <div style="display: flex; flex-direction: column; gap: 24px;">
                 <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 16px; border:1px solid var(--border-subtle,#f1f5f9);">
                    <ui-switch 
                      label="Regional Cluster" 
                      checked 
                      size="xl" 
                      checked-image="/build/assets/images/nature_desert_3.png" 
                      unchecked-image="/build/assets/images/nature_forest_1.png"
                    ></ui-switch>
                 </div>
                 <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 16px; border:1px solid var(--border-subtle,#f1f5f9);">
                    <ui-switch 
                      label="Identity Matrix" 
                      size="xl" 
                      checked-image="/build/assets/images/logo.png" 
                      unchecked-image="/build/assets/images/logo.png"
                    ></ui-switch>
                 </div>
              </div>
           </div>

           <!-- Multi-State Fusion -->
           <div class="demo-specimen" style="background: var(--bg-tertiary, #f1f5f9); padding: 32px; border-radius: 24px; color: var(--text-primary); display: flex; flex-direction: column; gap: 32px; box-shadow: 0 20px 40px -10px rgba(0,0,0,0.1); grid-column: span 1;">
              <h4 style="margin: 0; font-size: 13px; color: var(--text-secondary); text-transform: uppercase; letter-spacing: 1px; font-weight: 800;">Atmospheric Fusion</h4>
              <div style="display: flex; align-items: center; justify-content: center; padding: 20px; background: var(--bg-secondary, rgba(0,0,0,0.04)); border-radius: 16px; border: 1px solid var(--border-default);">
                 <ui-switch 
                   label="Orbital Mode" 
                   checked 
                   size="xxl" 
                   variant="glass" 
                   icon-on="sun" 
                   icon-off="moon" 
                   color="warning" 
                   glow
                 ></ui-switch>
              </div>
              <p style="font-size: 12px; opacity: 0.6; line-height: 1.6; text-align: center;">Advanced chromatic sampling dynamically illuminates the track substrate based on the active icon archetype.</p>
           </div>
        </div>
      </div>
    `;
  };

  window.showSwitchSizes = function () {
    const container = document.getElementById('switchDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up" style="display: flex; flex-direction: column; gap: 40px;">

        <!-- Panel 1: Scale Ladder -->
        <div>
          <h3 class="specimen-title">📏 Scale Ladder</h3>
          <p class="specimen-description">All 9 sizes compared across four visual states.</p>
          <div style="background: var(--bg-primary,white); border: 1px solid var(--border-default,#e2e8f0); border-radius: 16px; overflow: hidden;">
            <div style="display: grid; grid-template-columns: 120px 1fr 1fr 1fr 1fr; background: var(--bg-secondary,#f8fafc); padding: 12px 20px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-secondary,#64748b); border-bottom: 1px solid var(--border-default,#e2e8f0);">
              <span>Size</span><span>Off</span><span>On</span><span>Glow</span><span>Raised</span>
            </div>
            ${[
        ['xxxs', 'XXX Small'], ['xxs', 'XX Small'], ['xs', 'X Small'], ['sm', 'Small'],
        ['md', 'Medium'], ['lg', 'Large'], ['xl', 'X Large'], ['xxl', 'XX Large'], ['xxxl', 'XXX Large']
      ].map(([s, label], i) => `
            <div style="display: grid; grid-template-columns: 120px 1fr 1fr 1fr 1fr; align-items: center; padding: 16px 20px; border-bottom: 1px solid var(--border-subtle,#f1f5f9); background: ${i % 2 === 1 ? 'var(--bg-secondary,#f8fafc)' : 'transparent'};">
              <span style="font-size: 11px; font-weight: 700; color: var(--text-secondary,#64748b); font-family: monospace;">${s}</span>
              <div><ui-switch size="${s}"></ui-switch></div>
              <div><ui-switch size="${s}" checked color="primary"></ui-switch></div>
              <div><ui-switch size="${s}" checked color="success" glow></ui-switch></div>
              <div><ui-switch size="${s}" checked variant="raised" color="info"></ui-switch></div>
            </div>`).join('')}
          </div>
        </div>

        <!-- Panel 2: Visual Comparison Row -->
        <div>
          <h3 class="specimen-title">🔭 Visual Comparison</h3>
          <p class="specimen-description">All 9 sizes side-by-side to feel the scale progression.</p>
          <div style="background: var(--bg-secondary,#f8fafc); border: 1px solid var(--border-default,#e2e8f0); border-radius: 16px; padding: 32px 24px; display: flex; align-items: flex-end; gap: 24px; flex-wrap: wrap;">
            ${[
        ['xxxs', 'xxxs'], ['xxs', 'xxs'], ['xs', 'xs'], ['sm', 'sm'], ['md', 'md'],
        ['lg', 'lg'], ['xl', 'xl'], ['xxl', 'xxl'], ['xxxl', 'xxxl']
      ].map(([s]) => `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <ui-switch size="${s}" checked color="primary" glow></ui-switch>
              <span style="font-size: 10px; font-weight: 700; color: var(--text-secondary,#64748b); font-family: monospace;">${s}</span>
            </div>`).join('')}
          </div>
        </div>

        <!-- Panel 3: Sizes × Variants Matrix -->
        <div>
          <h3 class="specimen-title">🧩 Sizes × Variants</h3>
          <p class="specimen-description">Core sizes against all four visual variants.</p>
          <div style="background: var(--bg-primary,white); border: 1px solid var(--border-default,#e2e8f0); border-radius: 16px; overflow: hidden;">
            <div style="display: grid; grid-template-columns: 80px repeat(4, 1fr); background: var(--bg-secondary,#f8fafc); padding: 12px 20px; font-size: 10px; font-weight: 700; text-transform: uppercase; letter-spacing: 0.08em; color: var(--text-secondary,#64748b); border-bottom: 1px solid var(--border-default,#e2e8f0);">
              <span>Size</span><span>Solid</span><span>Glass</span><span>Raised</span><span>Outlined</span>
            </div>
            ${[['xs', 'X Small'], ['sm', 'Small'], ['md', 'Medium'], ['lg', 'Large'], ['xl', 'X Large'], ['xxl', 'XX Large']].map(([s,], i) => `
            <div style="display: grid; grid-template-columns: 80px repeat(4, 1fr); align-items: center; padding: 16px 20px; border-bottom: 1px solid var(--border-subtle,#f1f5f9); background: ${i % 2 === 1 ? 'var(--bg-secondary,#f8fafc)' : 'transparent'};">
              <span style="font-size: 11px; font-weight: 700; color: var(--text-secondary,#64748b); font-family: monospace;">${s}</span>
              <div><ui-switch size="${s}" variant="solid"    checked color="primary"></ui-switch></div>
              <div class="dark" style="padding: 8px; border-radius: 8px; background: #1e293b; display:inline-block;"><ui-switch size="${s}" variant="glass"    checked color="info"   ></ui-switch></div>
              <div><ui-switch size="${s}" variant="raised"   checked color="success"></ui-switch></div>
              <div><ui-switch size="${s}" variant="outlined" checked color="warning"></ui-switch></div>
            </div>`).join('')}
          </div>
        </div>

        <!-- Panel 4: Icon Thumb at All Sizes -->
        <div>
          <h3 class="specimen-title">🎨 Icon Thumb at Every Size</h3>
          <p class="specimen-description">Check/X icons scale proportionally with the thumb.</p>
          <div style="background: var(--bg-secondary,#f8fafc); border: 1px solid var(--border-default,#e2e8f0); border-radius: 16px; padding: 32px 24px; display: flex; align-items: flex-end; gap: 28px; flex-wrap: wrap;">
            ${[
        ['xs', 'xs'], ['sm', 'sm'], ['md', 'md'], ['lg', 'lg'], ['xl', 'xl'], ['xxl', 'xxl'], ['xxxl', 'xxxl']
      ].map(([s]) => `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <ui-switch size="${s}" checked icon-on="checkmark" icon-off="close" color="success" glow></ui-switch>
              <span style="font-size: 10px; font-weight: 700; color: var(--text-secondary,#64748b); font-family: monospace;">${s}</span>
            </div>`).join('')}
          </div>
        </div>

      </div>
    `;
  };

  window.showPhysicsGallery = function () {
    const container = document.getElementById('switchDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🧬 Precision Mechanical Engines</h3>
        <p class="specimen-description">High-fidelity kinematic archetypes for tactical state management.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px; background: var(--bg-secondary, #f8fafc); padding: 60px; border-radius: 40px; position: relative; overflow: hidden;">
           <!-- Scanning grid effect -->
           <div style="position: absolute; inset: 0; background-image: radial-gradient(rgba(var(--primary-rgb), 0.1) 1px, transparent 1px); background-size: 32px 32px; opacity: 0.5;"></div>
           
           <div class="demo-specimen" style="background: var(--bg-primary, #ffffff); backdrop-filter: blur(12px); padding: 32px; border-radius: 24px; border: 1px solid var(--border-default); color: var(--text-primary); transition: all 0.3s;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h4 style="margin: 0; font-size: 12px; color: #10b981; text-transform: uppercase; letter-spacing: 1px; font-weight: 800;">Kinetic Engine: Liquid</h4>
                <ui-icon name="water" library="ionicons" size="18px"></ui-icon>
              </div>
              <div style="background: var(--bg-secondary, rgba(0,0,0,0.03)); padding: 24px; border-radius: 16px; border: 1px solid var(--border-subtle); margin-bottom: 20px;">
                <ui-switch label="Fluid Interaction" physics="liquid" checked glow color="info" size="large" icon-on="sparkles" icon-off="zap"></ui-switch>
              </div>
              <p style="font-size: 11px; opacity: 0.5; line-height: 1.6;">Optimal viscosity. 400ms balanced response time suitable for standard utility toggles.</p>
           </div>

           <div class="demo-specimen" style="background: var(--bg-primary, #ffffff); backdrop-filter: blur(12px); padding: 32px; border-radius: 24px;  border: 1px solid var(--border-default); color: var(--text-primary); transition: all 0.3s;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h4 style="margin: 0; font-size: 12px; color: #f43f5e; text-transform: uppercase; letter-spacing: 1px; font-weight: 800;">Kinetic Engine: Stiff</h4>
                <ui-icon name="flash" library="ionicons" size="18px"></ui-icon>
              </div>
              <div style="background: var(--bg-secondary, rgba(0,0,0,0.03)); padding: 24px; border-radius: 16px; border: 1px solid var(--border-subtle); margin-bottom: 20px;">
                <ui-switch label="Rapid Engagement" physics="stiff" checked glow color="danger" size="large" icon-on="lock-closed" icon-off="lock-open"></ui-switch>
              </div>
              <p style="font-size: 11px; opacity: 0.5; line-height: 1.6;">High-tension spring. 200ms instantaneous response for pro-tools and rapid state changes.</p>
           </div>

           <div class="demo-specimen" style="background: var(--bg-primary, #ffffff); backdrop-filter: blur(12px); padding: 32px; border-radius: 24px; border: 1px solid var(--border-default); color: var(--text-primary); transition: all 0.3s;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h4 style="margin: 0; font-size: 12px; color:var(--accent-yellow,#f59e0b); text-transform: uppercase; letter-spacing: 1px; font-weight: 800;">Kinetic Engine: Bouncy</h4>
                <ui-icon name="notifications" library="ionicons" size="18px"></ui-icon>
              </div>
              <div style="background: var(--bg-secondary, rgba(0,0,0,0.03)); padding: 24px; border-radius: 16px; border: 1px solid var(--border-subtle); margin-bottom: 20px;">
                <ui-switch label="Elastic Feedback" physics="bouncy" checked glow color="warning" size="large" icon-on="notifications" icon-off="notifications-off"></ui-switch>
              </div>
              <p style="font-size: 11px; opacity: 0.5; line-height: 1.6;">Undamped physics. 500ms overshoot with settling oscillation for playful interactions.</p>
           </div>

           <div class="demo-specimen" style="background: var(--bg-primary, #ffffff); backdrop-filter: blur(12px); padding: 32px; border-radius: 24px; border: 1px solid var(--border-default); color: var(--text-primary); transition: all 0.3s;">
              <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
                <h4 style="margin: 0; font-size: 12px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 1px; font-weight: 800;">Kinetic Engine: Linear</h4>
                <ui-icon name="settings" library="ionicons" size="18px"></ui-icon>
              </div>
              <div style="background: var(--bg-secondary, rgba(0,0,0,0.03)); padding: 24px; border-radius: 16px; border: 1px solid var(--border-subtle); margin-bottom: 20px;">
                <ui-switch label="Mechanical Steady" physics="linear" checked color="secondary" glow size="large" icon-on="checkmark" icon-off="close"></ui-switch>
              </div>
              <p style="font-size: 11px; opacity: 0.5; line-height: 1.6;">Zero-acceleration. Industrial constant-velocity movement for strictly mechanical feeling.</p>
           </div>
        </div>
      </div>
    `;
  };

  window.showToggleGroup = function () {
    const container = document.getElementById('switchDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title">📦 Collective Toggle Groups</h3>
        <p class="specimen-description">High-performance orchestration of multiple switch states with semantic grouping and advanced layout engines.</p>
        
        <div style="display: flex; flex-direction: column; gap: 50px;">
          
          <!-- Layout Orchestration -->
          <div style="background: var(--bg-primary, white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9); box-shadow: 0 4px 20px rgba(0,0,0,0.02);">
            <h4 style="margin: 0 0 24px 0; font-size: 13px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 1px;">Layout Orchestration</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 40px;">
              <div>
                <p style="font-size: 11px; margin-bottom: 12px; color:var(--text-secondary,#64748b); font-weight: 600;">HORIZONTAL (DEFAULT)</p>
                <ui-toggle-group 
                  value="prod"
                  variant="primary"
                  options='[
                    {"label": "Production", "value": "prod"},
                    {"label": "Staging", "value": "stage"},
                    {"label": "Development", "value": "dev", "disabled": true}
                  ]'
                ></ui-toggle-group>
              </div>

              <!-- Segmented Morphing Substrate (Apex Tier) -->
              <div>
                <p style="font-size: 11px; margin-bottom: 12px; color:var(--accent-indigo,#6366f1); font-weight: 800;">SEGMENTED KINETIC SYSTEM</p>
                <ui-toggle-group 
                  value="weekly"
                  variant="segmented"
                  color="primary"
                  options='[
                    {"label": "DAILY", "value": "daily"},
                    {"label": "WEEKLY", "value": "weekly"},
                    {"label": "MONTHLY", "value": "monthly"}
                  ]'
                ></ui-toggle-group>
                <p style="font-size: 10px; opacity: 0.5; margin-top: 10px;">Sliding background indicator with morphological kinematic transition.</p>
              </div>

              <div>
                <p style="font-size: 11px; margin-bottom: 12px; color:var(--text-secondary,#64748b); font-weight: 600;">VERTICAL (PERMISSION MATRIX)</p>
                <ui-toggle-group 
                  layout="vertical"
                  selection-mode="multiple"
                  variant="info"
                  value='["read"]'
                  options='[
                    {"label": "Read Access", "value": "read"},
                    {"label": "Write Access", "value": "write"},
                    {"label": "Admin Privileges", "value": "admin"}
                  ]'
                ></ui-toggle-group>
              </div>
              <div style="grid-column: span 1;">
                <p style="font-size: 11px; margin-bottom: 12px; color:var(--text-secondary,#64748b); font-weight: 600;">GRID (3 COLUMNS)</p>
                <ui-toggle-group 
                  layout="grid"
                  columns="3"
                  selection-mode="multiple"
                  variant="success"
                  options='[
                    {"label": "Alpha", "value": "a"},
                    {"label": "Beta", "value": "b"},
                    {"label": "Gamma", "value": "g"},
                    {"label": "Delta", "value": "d"},
                    {"label": "Epsilon", "value": "e"},
                    {"label": "Zeta", "value": "z"}
                  ]'
                ></ui-toggle-group>
              </div>
            </div>
          </div>

          <!-- Interactive Features -->
          <div style="background: var(--bg-secondary, #f8fafc); padding: 32px; border-radius: 20px; border:1px solid var(--border-default,#e2e8f0);">
            <h4 style="margin: 0 0 24px 0; font-size: 13px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 1px;">Advanced Capabilities</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap: 40px;">
              <div style="background: var(--bg-primary, white); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0);">
                <p style="font-size: 11px; margin-bottom: 16px; color:var(--text-secondary,#64748b); font-weight: 600;">SEARCHABLE & MULTI-SELECT</p>
                <ui-toggle-group 
                  label="Fleet Management"
                  searchable="true"
                  show-select-all="true"
                  selection-mode="multiple"
                  color="primary"
                  variant="outline"
                  options='[
                    {"label": "Starship Alpha", "value": "alpha"},
                    {"label": "Starship Beta", "value": "beta"},
                    {"label": "Cruiser Gamma", "value": "gamma"},
                    {"label": "Fighter Delta", "value": "delta"},
                    {"label": "Fighter Epsilon", "value": "epsilon"}
                  ]'
                ></ui-toggle-group>
              </div>
              <div style="background: var(--bg-primary, white); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0);">
                <p style="font-size: 11px; margin-bottom: 16px; color:var(--text-secondary,#64748b); font-weight: 600;">COLLAPSIBLE & DRAGGABLE</p>
                <ui-toggle-group 
                  label="System Modules"
                  collapsible="true"
                  is-draggable="true"
                  color="secondary"
                  variant="glass"
                  options='[
                    {"label": "Core Engine", "value": "core"},
                    {"label": "Shield Gen", "value": "shield"},
                    {"label": "Life Support", "// turbo": "life"},
                    {"label": "Telemetry", "value": "tel"}
                  ]'
                ></ui-toggle-group>
              </div>
            </div>
          </div>

          <!-- Semantic States -->
          <div style="background: var(--bg-primary, white); padding: 32px; border-radius: 20px; border:1px solid var(--border-subtle,#f1f5f9);">
            <h4 style="margin: 0 0 24px 0; font-size: 13px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 1px;">Visual Archetypes</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
              <div>
                <p style="font-size: 11px; margin-bottom: 12px; color:var(--text-secondary,#64748b); font-weight: 600;">SHAPE: PILL (FLAGSHIP)</p>
                <ui-toggle-group 
                  shape="pill"
                  color="primary"
                  variant="outline"
                  options='[
                    {"label": "Alpha", "value": "a"},
                    {"label": "Beta", "value": "b"}
                  ]'
                ></ui-toggle-group>
              </div>
              <div>
                <p style="font-size: 11px; margin-bottom: 12px; color:var(--text-secondary,#64748b); font-weight: 600;">SHAPE: ROUNDED (SOFT)</p>
                <ui-toggle-group 
                  shape="rounded"
                  color="success"
                  variant="raised"
                  options='[
                    {"label": "Standard", "value": "s"},
                    {"label": "Custom", "value": "c"}
                  ]'
                ></ui-toggle-group>
              </div>
              <div>
                <p style="font-size: 11px; margin-bottom: 12px; color:var(--text-secondary,#64748b); font-weight: 600;">SHAPE: SQUARE (INDUSTRIAL)</p>
                <ui-toggle-group 
                  shape="square"
                  color="info"
                  variant="outlined"
                  options='[
                    {"label": "Linear", "value": "l"},
                    {"label": "Modular", "value": "m"}
                  ]'
                ></ui-toggle-group>
              </div>
              <div>
                <p style="font-size: 11px; margin-bottom: 12px; color:var(--text-secondary,#64748b); font-weight: 600;">SKELETON LOADING</p>
                <ui-toggle-group 
                  show-skeleton="true"
                  skeleton-count="2"
                ></ui-toggle-group>
              </div>
            </div>
          </div>

        </div>
      </div>
    `;
  };

  showInteractiveSwitch();
}

function initializeSwitchBehaviors() {
  const playgroundSwitch = document.getElementById('playgroundSwitch');
  if (!playgroundSwitch) return;

  const inputs = [
    'playSwitchLabel',
    'playSwitchCheckedIcon',
    'playSwitchUncheckedIcon',
    'playSwitchCheckedImg',
    'playSwitchUncheckedImg',
    'playSwitchDesc',
    'playSwitchWidth',
    'playSwitchCheckedText',
    'playSwitchUncheckedText',
  ];
  const dropdowns = ['playSwitchSize', 'playSwitchColor', 'playSwitchVariant', 'playSwitchDescPos', 'playSwitchLibrary', 'playSwitchPhysics'];
  const checkboxes = ['playSwitchGlow', 'playSwitchHaptic', 'playSwitchGradient', 'playSwitchLoading', 'playSwitchRTL', 'playSwitchIndeterminate', 'playSwitchShowText'];

  inputs.forEach(id => {
    document.getElementById(id)?.addEventListener('inputChange', () => window.updatePlaygroundSwitch());
  });
  dropdowns.forEach(id => {
    document.getElementById(id)?.addEventListener('dropdownChange', () => window.updatePlaygroundSwitch());
  });
  checkboxes.forEach(id => {
    document.getElementById(id)?.addEventListener('checkboxChange', () => window.updatePlaygroundSwitch());
  });

  window.updatePlaygroundSwitch = function () {
    const label = document.getElementById('playSwitchLabel').value;
    const checkedIcon = document.getElementById('playSwitchCheckedIcon').value;
    const uncheckedIcon = document.getElementById('playSwitchUncheckedIcon').value;
    const checkedImg = document.getElementById('playSwitchCheckedImg').value;
    const uncheckedImg = document.getElementById('playSwitchUncheckedImg').value;
    const desc = document.getElementById('playSwitchDesc').value;
    const size = document.getElementById('playSwitchSize').value;
    const color = document.getElementById('playSwitchColor').value;
    const variant = document.getElementById('playSwitchVariant').value;
    const descPos = document.getElementById('playSwitchDescPos').value;
    const glow = document.getElementById('playSwitchGlow').checked;
    const haptic = document.getElementById('playSwitchHaptic').checked;
    const gradient = document.getElementById('playSwitchGradient').checked;
    const loading = document.getElementById('playSwitchLoading').checked;
    const rtl = document.getElementById('playSwitchRTL').checked;
    const indeterminate = document.getElementById('playSwitchIndeterminate').checked;

    const library = document.getElementById('playSwitchLibrary').value;
    const physics = document.getElementById('playSwitchPhysics').value;

    playgroundSwitch.label = label;
    playgroundSwitch.iconOn = checkedIcon;
    playgroundSwitch.iconOff = uncheckedIcon;
    playgroundSwitch.iconLibrary = library;
    playgroundSwitch.physics = physics;
    playgroundSwitch.checkedImage = checkedImg;
    playgroundSwitch.uncheckedImage = uncheckedImg;
    playgroundSwitch.description = desc;
    playgroundSwitch.size = size;
    playgroundSwitch.color = color;
    playgroundSwitch.variant = variant;
    playgroundSwitch.descriptionPosition = descPos;
    playgroundSwitch.glow = glow;
    playgroundSwitch.haptic = haptic;
    playgroundSwitch.gradient = gradient;
    playgroundSwitch.loading = loading;
    playgroundSwitch.rtl = rtl;
    playgroundSwitch.indeterminate = indeterminate;
    playgroundSwitch.showTrackText = document.getElementById('playSwitchShowText').checked;
    playgroundSwitch.checkedText = document.getElementById('playSwitchCheckedText').value;
    playgroundSwitch.uncheckedText = document.getElementById('playSwitchUncheckedText').value;
    playgroundSwitch.width = document.getElementById('playSwitchWidth').value;

    window.updateSwitchCode();
  };

  window.updateSwitchCode = () => {
    const sw = playgroundSwitch;
    const codePreview = document.getElementById('switchCodePreview');
    if (!sw || !codePreview) return;

    let code = `<ui-switch\n  label="${sw.label}"\n  description="${sw.description}"\n  size="${sw.size}"\n  color="${sw.color}"\n  variant="${sw.variant}"`;
    if (sw.iconOn && sw.iconOn !== 'check') code += `\n  icon-on="${sw.iconOn}"`;
    if (sw.iconOff && sw.iconOff !== 'x') code += `\n  icon-off="${sw.iconOff}"`;
    if (sw.iconLibrary !== 'lucide') code += `\n  icon-library="${sw.iconLibrary}"`;
    if (sw.physics !== 'liquid') code += `\n  physics="${sw.physics}"`;
    if (sw.checkedImage) code += `\n  checked-image="${sw.checkedImage}"`;
    if (sw.uncheckedImage) code += `\n  unchecked-image="${sw.uncheckedImage}"`;
    if (sw.descriptionPosition !== 'bottom') code += `\n  description-position="${sw.descriptionPosition}"`;
    if (sw.glow) code += `\n  glow`;
    if (sw.haptic) code += `\n  haptic`;
    if (sw.gradient) code += `\n  gradient`;
    if (sw.loading) code += `\n  loading`;
    if (sw.showTrackText) code += `\n  show-track-text`;
    if (sw.checkedText && sw.checkedText !== 'ON') code += `\n  checked-text="${sw.checkedText}"`;
    if (sw.uncheckedText && sw.uncheckedText !== 'OFF') code += `\n  unchecked-text="${sw.uncheckedText}"`;
    if (sw.width) code += `\n  width="${sw.width}"`;
    code += `\n></ui-switch>`;

    codePreview.setAttribute('html-code', code);
  };

  playgroundSwitch.addEventListener('switchChange', () => window.updateSwitchCode());
  window.updateSwitchCode();
}
