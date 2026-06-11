// Divider Component Demo - Enhanced with All New Features
export function initDividerDemo() {
  const section = document.getElementById('divider');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Enhanced divider with 30+ features: animations, patterns, interactive capabilities, and more!</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 8px; flex-wrap: wrap;">
       <ui-button id="btnApex" label="✨ Apex Suite" size="md" variant="outline"></ui-button>
       <ui-button id="btnApex4" label="🌌 Apex 4.0" size="md" variant="outline"></ui-button>
       <ui-button id="btnPlay" label="🎮 Playground" size="md" variant="outline"></ui-button>
       <ui-button id="btnBasic" label="📐 Basic" size="md" variant="outline"></ui-button>
       <ui-button id="btnSlots" label="🎯 Slots" size="md" variant="outline"></ui-button>
       <ui-button id="btnAnim" label="✨ Animations" size="md" variant="outline"></ui-button>
       <ui-button id="btnPatt" label="🎨 Patterns" size="md" variant="outline"></ui-button>
       <ui-button id="btnInter" label="👆 Interactive" size="md" variant="outline"></ui-button>
       <ui-button id="btnEff" label="💫 Effects" size="md" variant="outline"></ui-button>
       <ui-button id="btnSpac" label="📏 Spacing" size="md" variant="outline"></ui-button>
       <ui-button id="btnBdge" label="🔢 Badges" size="md" variant="outline"></ui-button>
       <ui-button id="btnShap" label="🔺 Shapes" size="md" variant="outline"></ui-button>
       <ui-button id="btnVert" label="I Vertical" size="md" variant="outline"></ui-button>
       <ui-button id="btnResp" label="📱 Responsive" size="md" variant="outline"></ui-button>
    </div>

    <div id="dividerDemoContainer" style="margin-top: 20px;"></div>
  `;

  const navMap = {
    btnApex: showDividerLegendary,
    btnApex4: showDividerApex4,
    btnPlay: showDividerPlayground,
    btnBasic: showDividerBasic,
    btnSlots: showDividerSlots,
    btnAnim: showDividerAnimations,
    btnPatt: showDividerPatterns,
    btnInter: showDividerInteractive,
    btnEff: showDividerEffects,
    btnSpac: showDividerSpacing,
    btnBdge: showDividerBadges,
    btnShap: showDividerShapesLines,
    btnVert: showDividerVertical,
    btnResp: showDividerResponsive,
  };

  const updateActiveDemoButton = selectedId => {
    Object.keys(navMap).forEach(id => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.selected = id === selectedId;
      }
    });
  };

  setTimeout(() => {
    Object.entries(navMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          if (func) {
            func();
            updateActiveDemoButton(id);
          }
        });
      }
    });

    updateActiveDemoButton('btnApex');
    showDividerLegendary();
  }, 100);

  // Legendary Suite (Apex Features)
  function showDividerLegendary() {
    //  updateBtn('✨ Apex Suite');
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 30px;">Legendary Apex Suite</h3>
        <div style="background: var(--bg-secondary, #0f172a); border: 1px solid var(--border-default, #334155); padding: 60px 40px; border-radius: 24px; color: var(--text-primary, #ffffff);">
           <h4 style="margin-bottom: 24px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Aura Dynamic Flow</h4>
           <ui-divider text="SYSTEM STATUS: OPTIMIZED" aura="true" color="#10b981" thickness="2px"></ui-divider>
           <div style="height: 120px;"></div>
           
           <h4 style="margin-bottom: 24px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Kinetic Spectrum (Rainbow)</h4>
           <ui-divider text="DYNAMIC BROADCAST" kinetic="true" thickness="3px"></ui-divider>
           <div style="height: 120px;"></div>

           <h4 style="margin-bottom: 24px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Mechanical Motion (Animated Icons)</h4>
           <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
              <ui-divider text="SPINNING SYSTEM" icon="⚙️" icon-animation="spin"></ui-divider>
              <ui-divider text="FLIPPING COIN" icon="💰" icon-animation="flip"></ui-divider>
           </div>
           <div style="height: 120px;"></div>

           <h4 style="margin-bottom: 24px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Hierarchical Subtitles</h4>
           <ui-divider text="NETWORK GRID 07" subtitle="Verified Quantum Encryption Protocol" color="primary"></ui-divider>
           <div style="height: 120px;"></div>
           <h4 style="margin-bottom: 24px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">Crystal Mode (Glassmorphism)</h4>
           <div style="position: relative; height: 220px; border-radius: 16px; overflow: hidden; background: url('/build/assets/images/nature_desert_3.png') center/cover;">
              <div style="position: absolute; inset: 0; background: rgba(15, 23, 42, 0.4); backdrop-filter: saturate(180%) blur(5px);"></div>
              <div style="position: absolute; width: 100%; top: 50%; transform: translateY(-50%);">
                 <ui-divider text="DEEP SPACE CLUSTER" glass="true" color="white" aura="true"></ui-divider>
              </div>
           </div>
           <div style="height: 120px;"></div>
           <h4 style="margin-bottom: 24px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">The "Apex" Fusion</h4>
           <ui-divider text="MASTER SECURITY" subtitle="Level 7 Access Cleared" aura="true" glass="true" color="#ef4444" badge="CRITICAL" thickness="3px"></ui-divider>
        </div>
      </div>
    `;
  }

  // Apex 4.0 Lab (Galactic Tier)
  function showDividerApex4() {
    // updateBtn('🌌 Apex 4.0');
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 30px;">🌌 Apex 4.0: Galactic Interaction Suite</h3>
        
        <div style="background: var(--bg-secondary, #0f172a); border: 1px solid var(--border-default, #334155); padding: 60px 40px; border-radius: 24px; color: var(--text-primary, #ffffff); display: flex; flex-direction: column; gap: 80px;">
           
           <div style="text-align: center;">
              <h4 style="margin-bottom: 24px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">1. Cinematic Reveal (Scroll-Triggered)</h4>
              <p style="font-size: 13px; opacity: 0.5; margin-bottom: 30px;">This divider traces itself onto the page as it enters your view</p>
              <ui-divider reveal="true" text="SCANNING SYSTEM..." color="#38bdf8" thickness="3px" aura="true" id="revealDivider"></ui-divider>
              <ui-button id="btnRetriggerReveal" label="Re-trigger Reveal" variant="outline" color="info" size="md"yle="margin-top: 20px;"></ui-button>
           </div>

           <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 60px;">
              <div>
                 <h4 style="margin-bottom: 40px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">2. Physical Draggable (Scrubber)</h4>
                 <div style="padding: 40px; background: var(--bg-tertiary, rgba(255, 255, 255, 0.02)); border: 1px solid var(--border-default, rgba(255, 255, 255, 0.05)); border-radius: 24px;">
                    <p style="font-size: 12px; margin-bottom: 20px; opacity: 0.7;">SCRUBBER VALUE: <span id="scrubVal" style="color: #60a5fa; font-weight: 800;">50%</span></p>
                    <ui-divider 
                      draggable="true" 
                      percent="50" 
                      color="#60a5fa" 
                      thickness="4px" 
                      heatmap="true"
                      id="scrubDivider"
                    ></ui-divider>
                    <p style="font-size: 11px; margin-top: 16px; opacity: 0.4;">Click and drag the line to update value</p>
                 </div>
              </div>
              <div>
                 <h4 style="margin-bottom: 40px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase;">3. Organic Morph Engine</h4>
                 <div style="padding: 40px; background: linear-gradient(to right, rgba(236,72,153,0.1), transparent); border-radius: 24px;">
                    <ui-divider organic="true" text="LIQUID TRACK" color="#ec4899" thickness="4px" aura="true"></ui-divider>
                    <p style="font-size: 11px; margin-top: 24px; opacity: 0.5;">Hover over the track to see fluid morphing</p>
                 </div>
              </div>
           </div>

           <div style="background: linear-gradient(135deg, var(--bg-primary, #1e293b), var(--bg-secondary, #0f172a)); padding: 50px; border-radius: 24px; border: 1px solid rgba(139, 92, 246, 0.3); box-shadow: 0 25px 50px -12px rgba(0,0,0,0.5);">
              <h4 style="margin-bottom: 30px; opacity: 0.8; font-size: 12px; font-weight: 800; color:var(--accent-purple,#8b5cf6); text-align: center;">THE APEX 4.0 "GALACTIC" FUSION</h4>
              <ui-divider 
                text="SYSTEM IMMORTAL" 
                subtitle="Apex 4.0 Integration Protocol"
                id="fusionDivider"
                steps="8" 
                current-step="5" 
                heatmap="true" 
                percent="62" 
                ripple="true" 
                parallax="true"
                glass="true"
                aura="true"
                kinetic="true"
                reveal="true"
                organic="true"
                draggable="true"
                stream="true"
                holographic="true"
                thickness="5px"
                icon="🌌"
                icon-animation="spin"
              ></ui-divider>
              <div id="fusionStatus" style="margin-top: 24px; text-align: center; color:var(--accent-purple,#8b5cf6); font-size: 12px; font-family: monospace;">FUSION PERCENT: 62% | CURRENT STEP: 5</div>
           </div>

           <div style="padding: 40px; background: rgba(0,0,0,0.2); border-radius: 24px; border: 1px dashed rgba(255,255,255,0.1);">
              <h4 style="margin-bottom: 24px; opacity: 0.6; font-size: 11px; letter-spacing: 0.15em; text-transform: uppercase; text-align: center;">🚀 APEX 5.0 (IMMORTAL) PILOT FEATURES</h4>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
                 <div style="text-align: center;">
                    <p style="font-size: 11px; opacity: 0.5; margin-bottom: 16px;">Teleportation Engine (Internal Nav)</p>
                    <ui-divider teleport-to="#divider" text="RETURN TO TOP" color="success" thickness="2px" clickable="true" ripple="true"></ui-divider>
                 </div>
                 <div style="text-align: center;">
                    <p style="font-size: 11px; opacity: 0.5; margin-bottom: 16px;">Pulse-Stream Telemetry (Live Flicker)</p>
                    <ui-divider stream="true" text="LIVE CLUSTER DATA" color="warning" thickness="3px" aura="true"></ui-divider>
                 </div>
              </div>
              <div style="margin-top: 40px; text-align: center;">
                  <p style="font-size: 11px; opacity: 0.5; margin-bottom: 16px;">Sovereign Audio Haptic Sensors</p>
                  <ui-divider enable-haptics="true" text="INTERACT FOR SENSORY CUES" color="primary" thickness="2px" ripple="true" draggable="true" steps="10" id="hapticDivider"></ui-divider>
                  <div id="hapticLog" style="margin-top: 10px; font-size: 10px; color: #10b981; font-family: monospace;">HAPTIC ENGINE: STANDBY</div>
              </div>
           </div>
        </div>
      </div>
    `;

    // Event Listeners for Haptics
    const hapticDivider = document.getElementById('hapticDivider');
    if (hapticDivider) {
      hapticDivider.addEventListener('dividerHaptic', e => {
        document.getElementById('hapticLog').innerText = 'HAPTIC ENGINE: TRIGGERED (' + e.detail.type.toUpperCase() + ')';
        setTimeout(() => {
          document.getElementById('hapticLog').innerText = 'HAPTIC ENGINE: STANDBY';
        }, 1000);
      });
    }

    // Event Listeners for Draggable
    const scrubDivider = document.getElementById('scrubDivider');
    if (scrubDivider) {
      scrubDivider.addEventListener('dividerChange', e => {
        document.getElementById('scrubVal').innerText = e.detail.percent + '%';
        scrubDivider.setAttribute('percent', e.detail.percent);
      });
    }

    const fusionDivider = document.getElementById('fusionDivider');
    if (fusionDivider) {
      fusionDivider.addEventListener('dividerChange', e => {
        document.getElementById('fusionStatus').innerText = 'FUSION PERCENT: ' + e.detail.percent + '% | CURRENT STEP: ' + e.detail.step;
        fusionDivider.setAttribute('percent', e.detail.percent);
        fusionDivider.setAttribute('current-step', e.detail.step);
      });
    }

    setTimeout(() => {
      const btn = document.getElementById('btnRetriggerReveal');
      if (btn) {
        btn.addEventListener('click', () => {
          const d = document.getElementById('revealDivider');
          if (d) {
            d.isRevealed = false;
            setTimeout(() => d.triggerReveal(), 100);
          }
        });
      }
    }, 50);
  }

  // function updateBtn(label) {
  //   const ids = Object.keys(navMap);
  //   ids.forEach(id => {
  //     const btn = document.getElementById(id);
  //     if (btn) {
  //       btn.setAttribute('variant', btn.getAttribute('label') === label ? 'solid' : 'soft');
  //       if (btn.getAttribute('label') === label) {
  //         btn.setAttribute('color', 'primary');
  //       } else {
  //         btn.setAttribute('color', 'secondary');
  //       }
  //     }
  //   });
  // }

  // Interactive Playground
  function showDividerPlayground() {
    // updateBtn('🎮 Playground');
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Try all divider features in real-time!</p>
        
        <div class="playground-settings" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
          <ui-input label="Text" id="divText" value="Section Title" full-width="true"></ui-input>
          <ui-input label="Subtitle" id="divSubtitle" value="" full-width="true"></ui-input>
          <ui-input label="Icon" id="divIcon" placeholder="⭐" full-width="true"></ui-input>
          
          <ui-dropdown label="Orientation" id="divOrientation" value="horizontal" options='[{"label":"Horizontal","value":"horizontal"},{"label":"Vertical","value":"vertical"}]'></ui-dropdown>
          <ui-dropdown label="Color" id="divColor" value="" options='[{"label":"Default","value":""},{"label":"Primary","value":"primary"},{"label":"Success","value":"success"},{"label":"Danger","value":"danger"},{"label":"Warning","value":"warning"},{"label":"Info","value":"info"}]'></ui-dropdown>
          <ui-dropdown label="Variant" id="divVariant" value="solid" options='[{"label":"Solid","value":"solid"},{"label":"Dashed","value":"dashed"},{"label":"Dotted","value":"dotted"},{"label":"Gradient","value":"gradient"},{"label":"Double Solid","value":"double-solid"}]'></ui-dropdown>
          <ui-dropdown label="Spacing" id="divSpacing" value="none" options='[{"label":"Default","value":"none"},{"label":"Compact","value":"compact"},{"label":"Comfortable","value":"comfortable"},{"label":"Spacious","value":"spacious"}]'></ui-dropdown>
          
          <div style="grid-column: 1 / -1; border-top: 1px solid #e5e7eb; padding-top: 16px; margin-top: 8px;">
            <strong style="display: block; margin-bottom: 12px;">Premium & Layout</strong>
          </div>

          <ui-dropdown label="Vertical Align" id="divVerticalAlign" value="center" options='[{"label":"Center","value":"center"},{"label":"Top","value":"top"},{"label":"Bottom","value":"bottom"}]'></ui-dropdown>
          <ui-dropdown label="Inset" id="divInset" value="none" options='[{"label":"None","value":"none"},{"label":"Start","value":"start"},{"label":"End","value":"end"},{"label":"Both","value":"both"}]'></ui-dropdown>
          <ui-dropdown label="Line Cap" id="divLinecap" value="butt" options='[{"label":"Butt","value":"butt"},{"label":"Round","value":"round"},{"label":"Square","value":"square"}]'></ui-dropdown>
          <ui-dropdown label="Shape" id="divShape" value="none" options='[{"label":"None","value":"none"},{"label":"Wave","value":"wave"},{"label":"Curve","value":"curve"},{"label":"Triangle","value":"triangle"},{"label":"Tilt","value":"tilt"},{"label":"Zigzag","value":"zigzag"}]'></ui-dropdown>
          <ui-dropdown label="Icon Animation" id="divIconAnim" value="none" options='[{"label":"None","value":"none"},{"label":"Spin","value":"spin"},{"label":"Pulse","value":"pulse"},{"label":"Flip","value":"flip"}]'></ui-dropdown>
          
          <ui-input type="number" label="Steps" id="divSteps" value="0" min="0"></ui-input>
          <ui-input type="number" label="Current Step" id="divCurrStep" value="0" min="0"></ui-input>
          
          <div style="display: flex; flex-direction: column; gap: 4px;">
            <label style="font-size: 13px; font-weight: 600;">Percent (Heatmap): <span id="divPercentVal">50%</span></label>
            <ui-range-slider id="divPercent" value="50" min="0" max="100" style="width: 100%;"></ui-range-slider>
          </div>
          
          <ui-input label="Thickness" id="divThickness" placeholder="2px"></ui-input>
          <ui-input type="number" label="Opacity" id="divOpacity" value="1" step="0.1" min="0" max="1"></ui-input>

          <div style="display: flex; flex-wrap: wrap; gap: 15px; grid-column: 1 / -1; margin-top: 10px;">
            <ui-checkbox label="Aura Glow" id="divAura"></ui-checkbox>
            <ui-checkbox label="Glass Mode" id="divGlass"></ui-checkbox>
            <ui-checkbox label="Kinetic Flow" id="divKinetic"></ui-checkbox>
            <ui-checkbox label="Shadow" id="divShadow"></ui-checkbox>
            <ui-checkbox label="Glow" id="divGlow"></ui-checkbox>
            <ui-checkbox label="Loading" id="divLoading"></ui-checkbox>
            <ui-checkbox label="Clickable" id="divClickable"></ui-checkbox>
            <ui-checkbox label="Upright" id="divUpright"></ui-checkbox>
            <ui-checkbox label="Heatmap" id="divHeatmap"></ui-checkbox>
            <ui-checkbox label="Ripple" id="divRipple"></ui-checkbox>
            <ui-checkbox label="Parallax" id="divParallax"></ui-checkbox>
          </div>
        </div>
        
        <div class="playground-preview" style="padding: 40px; min-height: 150px; display: flex; align-items: center; justify-content: center;">
          <div id="dividerPreview" style="width: 100%;"></div>
        </div>
        
        <div id="dividerEventLog" style="margin-top: 16px; padding: 12px; background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-default, #e2e8f0); border-radius: 6px; font-family: monospace; font-size: 12px; max-height: 100px; overflow-y: auto; color: var(--text-primary);">
          <div style="color:var(--text-secondary,#64748b); margin-bottom: 4px;">Events Log:</div>
          <div id="pg-log-content"></div>
        </div>
        
        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button id="copyDividerBtn" label="Copy" variant="glass" color="primary" size="md"yle="position: absolute; top: 10px; right: 10px;"></ui-button>
          <code id="dividerCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
            <ui-divider ...></ui-divider>
          </code>
        </div>
      </div>
    `;

    setTimeout(() => {
      const ctrls = [
        { id: 'divText', event: 'inputChange' },
        { id: 'divSubtitle', event: 'inputChange' },
        { id: 'divIcon', event: 'inputChange' },
        { id: 'divOrientation', event: 'dropdownChange' },
        { id: 'divColor', event: 'dropdownChange' },
        { id: 'divVariant', event: 'dropdownChange' },
        { id: 'divSpacing', event: 'dropdownChange' },
        { id: 'divVerticalAlign', event: 'dropdownChange' },
        { id: 'divInset', event: 'dropdownChange' },
        { id: 'divLinecap', event: 'dropdownChange' },
        { id: 'divShape', event: 'dropdownChange' },
        { id: 'divIconAnim', event: 'dropdownChange' },
        { id: 'divSteps', event: 'inputChange' },
        { id: 'divCurrStep', event: 'inputChange' },
        { id: 'divThickness', event: 'inputChange' },
        { id: 'divOpacity', event: 'inputChange' },
        { id: 'divAura', event: 'checkboxChange' },
        { id: 'divGlass', event: 'checkboxChange' },
        { id: 'divKinetic', event: 'checkboxChange' },
        { id: 'divShadow', event: 'checkboxChange' },
        { id: 'divGlow', event: 'checkboxChange' },
        { id: 'divLoading', event: 'checkboxChange' },
        { id: 'divClickable', event: 'checkboxChange' },
        { id: 'divUpright', event: 'checkboxChange' },
        { id: 'divHeatmap', event: 'checkboxChange' },
        { id: 'divRipple', event: 'checkboxChange' },
        { id: 'divParallax', event: 'checkboxChange' },
      ];

      ctrls.forEach(ctrl => {
        const el = document.getElementById(ctrl.id);
        if (el) el.addEventListener(ctrl.event, () => updateDividerPlayground());
      });

      const range = document.getElementById('divPercent');
      if (range) {
        range.addEventListener('sliderChange', e => {
          // e.detail is the value for single sliders
          const val = typeof e.detail === 'object' ? e.detail.end : e.detail;
          document.getElementById('divPercentVal').innerText = val + '%';
          updateDividerPlayground();
        });
      }

      const copyBtn = document.getElementById('copyDividerBtn');
      if (copyBtn) copyBtn.addEventListener('click', () => copyDividerCode());

      updateDividerPlayground();
    }, 100);
    updateDividerPlayground();
  }

  function updateDividerPlayground() {
    const preview = document.getElementById('dividerPreview');
    if (!preview) return;

    const props = {
      text: document.getElementById('divText').value,
      subtitle: document.getElementById('divSubtitle').value,
      icon: document.getElementById('divIcon').value,
      orientation: document.getElementById('divOrientation').value,
      color: document.getElementById('divColor').value,
      variant: document.getElementById('divVariant').value,
      spacing: document.getElementById('divSpacing').value,
      verticalAlign: document.getElementById('divVerticalAlign').value,
      inset: document.getElementById('divInset').value,
      linecap: document.getElementById('divLinecap').value,
      shape: document.getElementById('divShape').value,
      thickness: document.getElementById('divThickness').value,
      opacity: document.getElementById('divOpacity').value,
      steps: parseInt(document.getElementById('divSteps').value) || 0,
      currentStep: parseInt(document.getElementById('divCurrStep').value) || 0,
      percent: parseInt(document.getElementById('divPercent').value) || 0,
      aura: document.getElementById('divAura').checked,
      glass: document.getElementById('divGlass').checked,
      kinetic: document.getElementById('divKinetic').checked,
      heatmap: document.getElementById('divHeatmap').checked,
      ripple: document.getElementById('divRipple').checked,
      parallax: document.getElementById('divParallax').checked,
      shadow: document.getElementById('divShadow').checked,
      glow: document.getElementById('divGlow').checked,
      loading: document.getElementById('divLoading').checked,
      clickable: document.getElementById('divClickable').checked,
      upright: document.getElementById('divUpright').checked,
    };

    const containerStyle = props.orientation === 'vertical' ? 'height: 150px;' : 'width: 100%;';

    preview.innerHTML = `<ui-divider id="playgroundComponent" style="${containerStyle}"></ui-divider>`;
    const el = document.getElementById('playgroundComponent');

    Object.assign(el, props);

    el.addEventListener('dividerClick', () => {
      const log = document.getElementById('pg-log-content');
      if (log) {
        const div = document.createElement('div');
        div.textContent = `[dividerClick] ${new Date().toLocaleTimeString()}`;
        log.prepend(div);
      }
    });

    // Generate code block
    const codeBlock = document.getElementById('dividerCodeBlock');
    if (codeBlock) {
      let code = '<ui-divider';
      if (props.text) code += `\n  text="${props.text}"`;
      if (props.subtitle) code += `\n  subtitle="${props.subtitle}"`;
      if (props.icon) code += `\n  icon="${props.icon}"`;
      if (props.orientation !== 'horizontal') code += `\n  orientation="${props.orientation}"`;
      if (props.color) code += `\n  color="${props.color}"`;
      if (props.variant !== 'solid') code += `\n  variant="${props.variant}"`;
      if (props.spacing !== 'none') code += `\n  spacing="${props.spacing}"`;
      if (props.verticalAlign !== 'center') code += `\n  vertical-align="${props.verticalAlign}"`;
      if (props.inset !== 'none') code += `\n  inset="${props.inset}"`;
      if (props.linecap !== 'butt') code += `\n  linecap="${props.linecap}"`;
      if (props.shape !== 'none') code += `\n  shape="${props.shape}"`;
      if (props.thickness) code += `\n  thickness="${props.thickness}"`;
      if (props.steps > 0) code += `\n  steps="${props.steps}"\n  current-step="${props.currentStep}"`;
      if (props.heatmap) code += `\n  heatmap="true"\n  percent="${props.percent}"`;
      if (props.iconAnimation !== 'none') code += `\n  icon-animation="${props.iconAnimation}"`;
      if (props.opacity !== '1') code += `\n  opacity="${props.opacity}"`;
      if (props.aura) code += '\n  aura="true"';
      if (props.glass) code += '\n  glass="true"';
      if (props.kinetic) code += '\n  kinetic="true"';
      if (props.heatmap) code += '\n  heatmap="true"';
      if (props.ripple) code += '\n  ripple="true"';
      if (props.parallax) code += '\n  parallax="true"';
      if (props.shadow) code += '\n  shadow="true"';
      if (props.glow) code += '\n  glow="true"';
      if (props.loading) code += '\n  loading="true"';
      if (props.clickable) code += '\n  clickable="true"';
      if (props.upright) code += '\n  upright="true"';
      code += '\n></ui-divider>';
      codeBlock.innerText = code;
    }
  }

  function copyDividerCode() {
    const code = document.getElementById('dividerCodeBlock').innerText;
    const btn = document.getElementById('copyDividerBtn');
    navigator.clipboard.writeText(code).then(() => {
      const originalText = btn.innerText;
      btn.innerText = 'Copied!';
      btn.style.background = '#10b981';
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = 'rgba(255,255,255,0.1)';
      }, 2000);
    });
  }

  function showDividerResponsive() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>📱 Responsive Divider</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Component automatically switches orientation based on screen size (breakpoints: sm, md, lg).</p>
        
        <div style="display: flex; flex-direction: column; gap: 30px;">
          <div>
            <h4 style="margin-bottom: 12px;">Responsive (md)</h4>
            <p style="font-size: 13px; color: #6b7280; margin-bottom: 12px;">Horizontal on desktop, switches to Vertical on tablet/mobile.</p>
            <div style="display: flex; align-items: center; border:1px solid var(--border-default,#e5e7eb); padding: 20px; border-radius: 8px; min-height: 60px;">
              <span>Left Content</span>
              <ui-divider responsive="md" text="OR" color="primary"></ui-divider>
              <span>Right Content</span>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom: 12px;">Responsive (sm)</h4>
            <p style="font-size: 13px; color: #6b7280; margin-bottom: 12px;">Only switches on very small screens.</p>
            <div style="display: flex; align-items: center; border:1px solid var(--border-default,#e5e7eb); padding: 20px; border-radius: 8px; min-height: 60px;">
              <span>Feature A</span>
              <ui-divider responsive="sm" icon="⚡" color="success"></ui-divider>
              <span>Feature B</span>
            </div>
          </div>
        </div>
      </div>
    `;
  }

  // Basic Dividers Demo
  function showDividerBasic() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>📐 Basic Dividers</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Simple dividers without text - perfect for separating content.</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Default Divider</h4>
        <p>Content above</p>
        <ui-divider></ui-divider>
        <p>Content below</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Different Variants</h4>
        <ui-divider variant="outline"></ui-divider>
        <ui-divider variant="dashed"></ui-divider>
        <ui-divider variant="dotted"></ui-divider>
        <ui-divider variant="gradient"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Different Sizes</h4>
        <ui-divider size="md"></ui-divider>
        <ui-divider size="md"></ui-divider>
        <ui-divider size="lg"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">With Colors</h4>
        <ui-divider color="primary"></ui-divider>
        <ui-divider color="success"></ui-divider>
        <ui-divider color="danger"></ui-divider>
        <ui-divider color="warning"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">With Text</h4>
        <ui-divider text="Section 1"></ui-divider>
        <p>Some content here</p>
        <ui-divider text="Section 2"></ui-divider>
        <p>More content here</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Text Alignment</h4>
        <ui-divider text="Left Aligned" text-align="left"></ui-divider>
        <ui-divider text="Center Aligned" text-align="center"></ui-divider>
        <ui-divider text="Right Aligned" text-align="right"></ui-divider>
      </div>
    `;
  }

  // Slots Demo
  function showDividerSlots() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎯 Divider Slots</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Use slots to add custom content to dividers.</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Start Slot (Icon/Badge)</h4>
        <ui-divider text="New Messages">
          <span slot="start" style="font-size: 20px;">📧</span>
        </ui-divider>
        
        <ui-divider text="Notifications">
          <span slot="start" style="font-size: 20px;">🔔</span>
        </ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">End Slot (Badge/Button)</h4>
        <ui-divider text="Pending Tasks">
          <ui-badge slot="end" value="5" color="danger"></ui-badge>
        </ui-divider>
        
        <ui-divider text="Updates Available">
          <ui-badge slot="end" value="12" color="primary"></ui-badge>
        </ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Default Slot (Center Content)</h4>
        <ui-divider>
          <ui-chip label="Featured Section" color="primary"></ui-chip>
        </ui-divider>
        
        <ui-divider>
          <div style="display: flex; align-items: center; gap: 8px; padding: 4px 12px; background: #f3f4f6; border-radius: 6px;">
            <span>⭐</span>
            <span style="font-weight: 600;">Premium Content</span>
            <span>⭐</span>
          </div>
        </ui-divider>
      </div>
    `;
  }

  // Animations Demo
  function showDividerAnimations() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>✨ Divider Animations</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Smooth entrance animations for better UX.</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Fade Animation</h4>
        <ui-divider text="Fade In" animation="fade" color="primary"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Slide Animation</h4>
        <ui-divider text="Slide In" animation="slide" color="success"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Expand Animation</h4>
        <ui-divider text="Expand" animation="expand" color="warning"></ui-divider>
      </div>
    `;
  }

  // Patterns Demo
  function showDividerPatterns() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎨 Divider Patterns</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Creative pattern styles for visual interest.</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Dots Pattern</h4>
        <ui-divider text="Dotted Pattern" pattern="dots" color="primary"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Stripes Pattern</h4>
        <ui-divider text="Striped Pattern" pattern="stripes" color="success"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Wavy Pattern</h4>
        <ui-divider text="Wavy Pattern" pattern="wavy" color="info"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Zigzag Pattern</h4>
        <ui-divider text="Zigzag Pattern" pattern="zigzag" color="warning"></ui-divider>
      </div>
    `;
  }

  // Interactive Demo
  function showDividerInteractive() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>👆 Interactive Dividers</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Clickable dividers with events. Try clicking them!</p>
        
        <ui-divider id="interactive1" text="Click Me!" clickable="true" color="primary"></ui-divider>
        <ui-divider id="interactive2" text="Expandable Section" icon="▼" clickable="true" color="success"></ui-divider>
        <ui-divider id="interactive3" text="Toggle Content" clickable="true" variant="dashed" color="warning"></ui-divider>
        
        <div id="interactiveLog" style="margin-top: 16px; padding: 12px; background: #f3f4f6; border-radius: 6px; font-size: 13px;"></div>
      </div>
    `;

    setTimeout(() => {
      const log = document.getElementById('interactiveLog');
      ['interactive1', 'interactive2', 'interactive3'].forEach(id => {
        const divider = document.getElementById(id);
        divider?.addEventListener('dividerClick', () => {
          log.innerHTML = `<strong>${id} clicked!</strong> Interactive dividers emit click events.`;
        });
      });
    }, 100);
  }

  // Effects Demo
  function showDividerEffects() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>💫 Visual Effects</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Shadow, glow, and opacity effects.</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Shadow Effect</h4>
        <ui-divider text="With Shadow" shadow="true" color="primary"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Glow Effect</h4>
        <ui-divider text="Glowing Divider" glow="true" color="success"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Opacity Control</h4>
        <ui-divider text="50% Opacity" opacity="0.5" color="warning"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Combined Effects</h4>
        <ui-divider text="Shadow + Glow" shadow="true" glow="true" color="danger"></ui-divider>
      </div>
    `;
  }

  // Spacing Demo
  function showDividerSpacing() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>📏 Spacing & Layout</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Spacing presets and inset options.</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Spacing Presets</h4>
        <div style="background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px;">
          <p>Content before compact divider</p>
          <ui-divider text="Compact" spacing="compact" color="primary"></ui-divider>
          <p>Content after compact divider</p>
          
          <ui-divider text="Comfortable" spacing="comfortable" color="success"></ui-divider>
          <p>Content with comfortable spacing</p>
          
          <ui-divider text="Spacious" spacing="spacious" color="warning"></ui-divider>
          <p>Content with spacious spacing</p>
        </div>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Inset Dividers</h4>
        <ui-divider text="Inset Start" inset="start" color="info"></ui-divider>
        <ui-divider text="Inset End" inset="end" color="danger"></ui-divider>
        <ui-divider text="Inset Both" inset="both" color="primary"></ui-divider>
      </div>
    `;
  }

  // Shapes & Lines Demo
  function showDividerShapesLines() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🔺 Shapes & Advanced Lines</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Use SVG shapes for section breaks and advanced line controls.</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Shape Dividers</h4>
        <div style="background: #f3f4f6; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
            <p><strong>Wave Shape</strong></p>
            <ui-divider shape="wave" color="primary"></ui-divider>
            
            <p><strong>Triangle Shape</strong></p>
            <ui-divider shape="triangle" color="success"></ui-divider>
            
            <p><strong>Tilt Shape</strong></p>
            <ui-divider shape="tilt" color="warning"></ui-divider>

            <p><strong>Curve Shape</strong></p>
            <ui-divider shape="curve" color="danger"></ui-divider>

            <p><strong>Zigzag Shape</strong></p>
            <ui-divider shape="zigzag" color="info"></ui-divider>
        </div>

        <h4 style="margin-top: 24px; margin-bottom: 12px;">Line Visibility</h4>
        <ui-divider text="Left Text (Start Line Only)" text-align="left" lines="start" color="primary"></ui-divider>
        <ui-divider text="Right Text (End Line Only)" text-align="right" lines="end" color="success"></ui-divider>
        <ui-divider text="Text Only (No Lines)" lines="none" color="secondary"></ui-divider>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Round Line Caps</h4>
        <ui-divider text="Rounded Edges" linecap="round" size="lg" color="primary"></ui-divider>
        <ui-divider text="Dashed & Rounded" variant="dashed" linecap="round" size="md" color="success"></ui-divider>
      </div>
    `;
  }

  // Badges Demo
  function showDividerBadges() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🔢 Dividers with Badges</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Add counters and badges to dividers.</p>
        
        <ui-divider text="New Messages" badge="5" color="primary"></ui-divider>
        <ui-divider text="Pending Tasks" badge="12" color="warning"></ui-divider>
        <ui-divider text="Notifications" badge="99+" color="danger"></ui-divider>
        <ui-divider text="Updates Available" icon="🔔" badge="3" color="info"></ui-divider>
      </div>
    `;
  }

  // Vertical Divider Demo
  function showDividerVertical() {
    const container = document.getElementById('dividerDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>I Vertical Dividers</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Vertical dividers for separating content in flex containers.</p>
        
        <h4 style="margin-top: 24px; margin-bottom: 12px;">Basic Vertical Divider</h4>
        <div style="display: flex; align-items: center; height: 50px; border:1px solid var(--border-default,#e5e7eb); padding: 0 16px; border-radius: 6px;">
          <span>Item 1</span>
          <ui-divider orientation="vertical"></ui-divider>
          <span>Item 2</span>
          <ui-divider orientation="vertical"></ui-divider>
          <span>Item 3</span>
        </div>

        <h4 style="margin-top: 24px; margin-bottom: 12px;">Vertical with Text</h4>
        <div style="display: flex; align-items: center; height: 100px; border:1px solid var(--border-default,#e5e7eb); padding: 0 16px; border-radius: 6px;">
          <div style="flex: 1; text-align: center;">Left Content</div>
          <ui-divider orientation="vertical" text="OR" color="primary"></ui-divider>
          <div style="flex: 1; text-align: center;">Right Content</div>
        </div>

        <h4 style="margin-top: 24px; margin-bottom: 12px;">Vertical with Custom Height</h4>
        <div style="display: flex; align-items: center; border:1px solid var(--border-default,#e5e7eb); padding: 16px; border-radius: 6px;">
          <span>Auto Height (Parent)</span>
          <ui-divider orientation="vertical" style="height: 40px; margin: 0 16px;"></ui-divider>
          <span>Explicit Prop Height</span>
          <ui-divider orientation="vertical" height="60px" color="success"></ui-divider>
        </div>

        <h4 style="margin-top: 24px; margin-bottom: 12px;">Typographic Modes</h4>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px; align-items: start; min-height: 200px;">
           <div style="text-align: center;">
              <p style="font-size: 11px; opacity: 0.6;">ROTATED (DEFAULT)</p>
              <div style="height: 150px; display: flex; justify-content: center;">
                 <ui-divider orientation="vertical" text="ROTATED" color="primary"></ui-divider>
              </div>
           </div>
           <div style="text-align: center;">
              <p style="font-size: 11px; opacity: 0.6;">UPRIGHT (STACKED)</p>
              <div style="height: 150px; display: flex; justify-content: center;">
                 <ui-divider orientation="vertical" text="UPRIGHT" upright="true" color="success"></ui-divider>
              </div>
           </div>
        </div>
      </div>
    `;
  }

  // Default view
  showDividerLegendary();
}
