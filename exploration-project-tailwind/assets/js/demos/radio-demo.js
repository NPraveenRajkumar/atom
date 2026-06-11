// Radio Component Demo
export function initRadioDemo() {
  const section = document.getElementById('radio');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header" style="margin-bottom: 32px;">
      <p style="margin-top: 0; opacity: 0.7; font-size: 14px;">Master-tier radio system with liquid spring dot animations, atmospheric theme-aware glows, and premium glassmorphism effects.</p>
    </div>
    
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 12px; flex-wrap: wrap;">
      <ui-button label="🎮 Playground"  onclick="showInteractiveRadio()" variant="outline"></ui-button>
      <ui-button label="✨ Elite Specimens"  onclick="showEliteRadioSpecimens()" variant="outline"></ui-button>
      <ui-button label="🏆 Supreme Tier"  style="--ui-button-bg: linear-gradient(135deg, #8b5cf6, #ec4899); border: none;" onclick="showRadioSupreme()" variant="outline"></ui-button>
      <ui-button label="🎯 Branded Icons"  onclick="showRadioBranding()" variant="outline"></ui-button>
      <ui-button label="🎨 Colors"  onclick="showRadioColors()" variant="outline"></ui-button>
      <ui-button label="📏 Sizes"  onclick="showRadioSizes()" variant="outline"></ui-button>
      <ui-button label="🎬 Staggered Reveal"  onclick="showRadioRevealAnimations()" variant="outline"></ui-button>
      <ui-button label="📖 Contextual Layouts"  onclick="showRadioContextual()" variant="outline"></ui-button>
      <ui-button label="States"  onclick="showRadioStates()" variant="outline"></ui-button>
      <ui-button label="🃏 Variants" onclick="showRadioVariants()" variant="outline"></ui-button>
    </div>

    <div id="radioDemoContainer" style="margin-top: 20px;"></div>
  `;

  window.showInteractiveRadio = function () {
    const container = document.getElementById('radioDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title">🎮 Interactive Playground</h3>
        <div class="playground-settings" style="padding: 24px; border-radius: 16px; margin-bottom: 24px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
            <div class="form-group">
               <ui-input label="Label Text" id="radLabel" value="Tactical Priority" variant="outline" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-input label="Description" id="radDesc" value="Assign high-bandwidth processing" variant="outline" size="md"></ui-input>
            </div>
            <div class="form-group">
               <ui-dropdown label="Size" id="radSize" variant="outline" size="md" options='[
                 {"label": "XXX Small", "value": "xxxs"},
                 {"label": "XX Small", "value": "xxs"},
                 {"label": "Extra Small", "value": "xs"},
                 {"label": "Small", "value": "small"},
                 {"label": "Medium", "value": "md"},
                 {"label": "Large", "value": "large"},
                 {"label": "Extra Large", "value": "xl"},
                 {"label": "XX Large", "value": "xxl"},
                 {"label": "XXX Large", "value": "xxxl"}
               ]' value="md"></ui-dropdown>
            </div>
            <div class="form-group">
               <ui-dropdown label="Variant" id="radVariant" variant="outline" size="md" options='[
                 {"label": "Default", "value": "default"},
                 {"label": "Glassmorphism", "value": "glass"},
                 {"label": "Raised Relief", "value": "raised"},
                 {"label": "Circular (Rounded)", "value": "rounded"},
                 {"label": "Button-Style", "value": "button"},
                 {"label": "Chip-Style", "value": "chip"}
               ]' value="default"></ui-dropdown>
            </div>
             <div class="form-group">
               <ui-dropdown label="Color" id="radColor" variant="outline" size="md" options='[
                 {"label": "Primary (Emerald)", "value": "primary"},
                 {"label": "Success (Green)", "value": "success"},
                 {"label": "Danger (Crimson)", "value": "danger"},
                 {"label": "Warning (Amber)", "value": "warning"},
                 {"label": "Info (Cyan)", "value": "info"}
               ]' value="primary"></ui-dropdown>
            </div>

            <div class="form-group">
               <ui-input label="Custom Icon (Name)" id="radIcon" value="" placeholder="e.g., zap, crosshair" variant="outline" size="md"></ui-input>
            </div>

             <div class="form-group">
               <ui-input label="Custom Image (URL)" id="radImage" value="" placeholder="e.g., /assets/logo.png" variant="outline" size="md"></ui-input>
            </div>

             <div class="form-group" style="display: flex; gap: 16px; align-items: flex-end; padding-bottom: 8px;">
                <ui-checkbox id="radGlow" label="🕯️ Glow" checked></ui-checkbox>
                <ui-checkbox id="radHaptic" label="🧠 Haptic" checked></ui-checkbox>
                <ui-checkbox id="radRtl" label="🌍 RTL"></ui-checkbox>
             </div>
          </div>
        </div>

        <div class="playground-preview" style="padding: 60px; min-height: 200px; position: relative; overflow: hidden;">
          <div id="radInteractivePreview"></div>
        </div>

        <div style="margin-top: 24px;">
          <ui-code-preview id="radioCodePreview" label="Implementation Code" expanded="false"></ui-code-preview>
        </div>
      </div>
    `;
    setTimeout(() => {
      const allControls = ['radLabel', 'radDesc', 'radSize', 'radVariant', 'radColor', 'radIcon', 'radImage', 'radGlow', 'radHaptic', 'radRtl'];
      allControls.forEach(id => {
        const el = document.getElementById(id);
        if (el) {
          el.addEventListener('inputChange', () => updateInteractiveRadio());
          el.addEventListener('dropdownChange', () => updateInteractiveRadio());
          el.addEventListener('checkboxChange', () => updateInteractiveRadio());
        }
      });
      updateInteractiveRadio();
    }, 100);
  };

  window.updateInteractiveRadio = function () {
    const label = document.getElementById('radLabel').value;
    const desc = document.getElementById('radDesc').value;
    const size = document.getElementById('radSize').value;
    const color = document.getElementById('radColor').value;
    const variant = document.getElementById('radVariant').value;
    const glow = document.getElementById('radGlow').checked;
    const haptic = document.getElementById('radHaptic').checked;
    const icon = document.getElementById('radIcon').value;
    const image = document.getElementById('radImage').value;
    const rtl = document.getElementById('radRtl').checked;

    const preview = document.getElementById('radInteractivePreview');
    if (!preview) return;

    preview.innerHTML = `
      <ui-radio 
        label="${label}" 
        description="${desc}"
        size="${size}" 
        color="${color}" 
        variant="${variant}"
        custom-icon="${icon}"
        custom-image="${image}"
        ${glow ? 'glow' : ''}
        ${haptic ? 'haptic' : ''}
        ${rtl ? 'rtl' : ''}
      ></ui-radio>
    `;

    const codePreview = document.getElementById('radioCodePreview');
    if (codePreview) {
      let code = `<ui-radio\n  label="${label}"\n  description="${desc}"\n  size="${size}"\n  color="${color}"\n  variant="${variant}"`;
      if (icon) code += `\n  custom-icon="${icon}"`;
      if (image) code += `\n  custom-image="${image}"`;
      if (glow) code += `\n  glow`;
      if (haptic) code += `\n  haptic`;
      if (rtl) code += `\n  rtl`;
      code += `\n></ui-radio>`;
      codePreview.setAttribute('html-code', code);
    }
  };

  window.showRadioSupreme = function () {
    const container = document.getElementById('radioDemoContainer');
    const options = [
      { label: 'Americas Hub', value: 'us', description: 'East-coast edge node cluster' },
      { label: 'Europe Central', value: 'eu', description: 'Frankfurt high-bandwidth tier' },
      { label: 'Asia Pacific', value: 'ap', description: 'Tokyo ultra-low latency gateway' },
      { label: 'Oceania South', value: 'au', description: 'Sydney failover partition' },
      { label: 'Middle East', value: 'me', description: 'Dubai sovereign cloud node' },
      { label: 'Africa North', value: 'af', description: 'Cairo regional accelerator' },
    ];

    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title" style="background: linear-gradient(to right, #8b5cf6, #ec4899); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🏆 Supreme Navigation Archetypes</h3>
        <p class="specimen-description">High-end filtering for rapid selection in dense data environments.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px;">
           <div style="padding: 32px; background: var(--bg-primary, white); border:1px solid var(--border-subtle,#f1f5f9); border-radius: 24px;">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Searchable Radio Cluster</h4>
              <ui-radio-group 
                id="supremeRadioGroup"
                label="Global Deployment Region" 
                searchable 
                search-placeholder="Filter regions..."
                reveal="slide-up">
              </ui-radio-group>
           </div>

           <div>
              <h4 style="margin: 0 0 20px 0; font-size: 13px; opacity: 0.5;">Implementation (Supreme API)</h4>
<ui-code-preview label="Group Configuration" html-code='<ui-radio-group 
  label="Region Selection" 
  searchable 
  search-placeholder="Find region...">
</ui-radio-group>'></ui-code-preview>
           </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const group = document.getElementById('supremeRadioGroup');
      if (group) group.options = options;
    }, 100);
  };

  window.showRadioBranding = function () {
    const container = document.getElementById('radioDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🎯 Advanced Selector Branding</h3>
        <p class="specimen-description">Context-aware iconography for specialized decision matrices.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
           <div style="padding: 24px; background: rgba(var(--primary-rgb, 139, 92, 246), 0.03); border-radius: 16px;">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Targeted Selection (Icons)</h4>
              <ui-radio-group value="target" size="md">
                 <ui-radio label="Critical Focus" custom-icon="crosshair" color="danger" value="target" checked glow size="md"></ui-radio>
                 <ui-radio label="Energy Optimization" custom-icon="zap" color="warning" value="power" haptic size="md"></ui-radio>
                 <ui-radio label="Security Perimeter" custom-icon="shield-check" color="success" value="sec" size="md"></ui-radio>
              </ui-radio-group>
           </div>

           <div style="padding: 24px; background: rgba(var(--primary-rgb, 139, 92, 246), 0.03); border-radius: 16px;">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Visual Identity (Images)</h4>
              <ui-radio-group value="user" size="md">
                 <ui-radio label="Profile Authenticated" custom-image="/build/assets/images/logo.png" color="info" value="user" checked haptic size="md"></ui-radio>
                 <ui-radio label="Global Node" custom-image="/build/assets/images/logo.png" color="primary" value="global" size="md"></ui-radio>
              </ui-radio-group>
           </div>
        </div>
      </div>
    `;
  };

  window.showRadioColors = function () {
    const container = document.getElementById('radioDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🎨 Tactical Color Palette</h3>
        <p class="specimen-description">Context-aware semantic coloring for intuitive status feedback.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 24px;">
           <ui-radio label="Primary" color="primary" checked glow size="md"></ui-radio>
           <ui-radio label="Secondary" color="secondary" checked glow size="md"></ui-radio>
           <ui-radio label="Success" color="success" checked glow size="md"></ui-radio>
           <ui-radio label="Danger" color="danger" checked glow size="md"></ui-radio>
           <ui-radio label="Warning" color="warning" checked glow size="md"></ui-radio>
           <ui-radio label="Info" color="info" checked glow size="md"></ui-radio>
        </div>
      </div>
    `;
  };

  window.showRadioSizes = function () {
    const container = document.getElementById('radioDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">📏 High-Fidelity Scaling</h3>
        <p class="specimen-description">Optimized pixel-perfect geometry from micro-interactions to XL displays.</p>
        
        <div style="display: flex; flex-direction: column; gap: 32px;">
           <div style="display: flex; align-items: center; gap: 24px; flex-wrap: wrap;">
              <ui-radio label="XXXS" size="xxxs" checked></ui-radio>
              <ui-radio label="XXS" size="xxs" checked></ui-radio>
              <ui-radio label="XS" size="xs" checked></ui-radio>
              <ui-radio label="Small" size="small" checked></ui-radio>
              <ui-radio label="md" size="md" checked></ui-radio>
              <ui-radio label="Large" size="large" checked></ui-radio>
           </div>
           
           <div style="display: flex; align-items: flex-end; gap: 32px; flex-wrap: wrap; padding-top: 20px; border-top: 1px dashed #e2e8f0;">
              <ui-radio label="Extra Large" size="xl" checked description="Optimized for touch interfaces"></ui-radio>
              <ui-radio label="XXL" size="xxl" checked description="Hero section scales"></ui-radio>
              <ui-radio label="XXXL" size="xxxl" checked description="Maximum accessibility focus"></ui-radio>
           </div>
        </div>
      </div>
    `;
  };

  window.showEliteRadioSpecimens = function () {
    const container = document.getElementById('radioDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">✨ Elite Material Specimens</h3>
        <p class="specimen-description">High-fidelity radio archetypes for exclusive state management.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 32px;">
           <div style="padding: 32px; background: var(--bg-tertiary, #f1f5f9); border-radius: 20px; color: var(--text-primary); border: 1px solid var(--border-default);">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Glassmorphism</h4>
              <ui-radio 
                label="Frosted Sphere" 
                description="Sub-pixel refractive inner dot"
                variant="glass" 
                color="info" 
                glow 
                checked>
              </ui-radio>
              <div style="margin-top: 16px; padding: 12px; background: var(--bg-secondary, rgba(0,0,0,0.04)); border-radius: 8px; font-size: 12px;">
                 Atmospheric glow effects transition smoothly between states.
              </div>
           </div>

           <div style="padding: 32px; background: var(--bg-secondary, #f8fafc); border-radius: 20px; border:1px solid var(--border-default,#e2e8f0);">
              <h4 style="margin: 0 0 20px 0; font-size: 14px; opacity: 0.6; text-transform: uppercase;">Raised Relief</h4>
              <ui-radio 
                label="Physical Toggle" 
                description="Multi-layered skeletal geometry"
                variant="raised" 
                color="primary" 
                glow 
                checked>
              </ui-radio>
              <div style="margin-top: 16px; padding: 12px; background: var(--bg-primary, white); border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; font-size: 12px;">
                 Tactile sensation reinforced by liquid spring physics.
              </div>
           </div>
        </div>
      </div>
    `;
  };

  window.showRadioRevealAnimations = function () {
    const container = document.getElementById('radioDemoContainer');
    container.innerHTML = `
      <div class="demo-block">
        <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 24px;">
           <h3 class="specimen-title" style="margin: 0;">🎬 Staggered Reveal Orchestration</h3>
           <ui-button label="Replay Animation" variant="outline" color="secondary" size="md"click="showRadioRevealAnimations()"></ui-button>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 32px;">
           <div>
              <h4 style="font-size: 13px; opacity: 0.5; margin-bottom: 16px;">Slide-Up Stagger</h4>
              <ui-radio-group 
                orientation="vertical" 
                reveal="slide-up" 
                reveal-stagger="80" 
                label="Deployment Tier">
                <ui-radio value="1" label="Standard Tier" description="Standard processing priority"></ui-radio>
                <ui-radio value="2" label="Premium Tier" description="Accelerated dedicated compute"></ui-radio>
                <ui-radio value="3" label="Elite Tier" description="Ultra-low latency edge nodes" checked></ui-radio>
              </ui-radio-group>
           </div>

           <div>
              <h4 style="font-size: 13px; opacity: 0.5; margin-bottom: 16px;">Zoom-In Stagger (Grid)</h4>
              <ui-radio-group 
                layout="grid" 
                columns="2"
                reveal="zoom" 
                reveal-stagger="50" 
                label="Core Region">
                <ui-radio value="us" variant="bordered" label="North America"></ui-radio>
                <ui-radio value="eu" variant="bordered" label="Europe"></ui-radio>
                <ui-radio value="ap" variant="bordered" label="Asia Pacific" checked></ui-radio>
                <ui-radio value="sa" variant="bordered" label="South America"></ui-radio>
              </ui-radio-group>
           </div>
        </div>
      </div>
    `;
  };

  window.showRadioContextual = function () {
    const container = document.getElementById('radioDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title">📖 Advanced Contextual Layouts</h3>
        
        <div style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 20px;">
           <div style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 16px; background: var(--bg-primary, #fff);">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Side-Metadata (Dense Mode)</h4>
              <ui-radio-group value="stable">
                 <ui-radio label="Stable Release" description="• v1.0.4" description-position="side" color="success" checked haptic value="stable"></ui-radio>
                 <ui-radio label="Beta Branch" description="• v1.1.0-beta" description-position="side" color="warning" haptic value="beta"></ui-radio>
                 <ui-radio label="Canary" description="• v1.2.0-canary" description-position="side" color="danger" haptic value="canary"></ui-radio>
              </ui-radio-group>
           </div>

           <div style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 16px; background: var(--bg-primary, #fff);">
              <h4 style="margin: 0 0 16px 0; font-size: 13px; opacity: 0.5;">Premium Cards</h4>
              <ui-radio-group value="card1">
                 <ui-radio value="card1" label="Hardware Isolation" description="Dedicated silicon-level security boundary" variant="card" color="primary"></ui-radio>
                 <ui-radio value="card2" label="Network Partitioning" description="Virtual private network with zero-trust policies" variant="card" color="info"></ui-radio>
              </ui-radio-group>
           </div>
        </div>
      </div>
    `;
  };

  window.showRadioStates = function () {
    const container = document.getElementById('radioDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">Standard Interactive States</h3>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap; padding: 20px; background: var(--bg-secondary, #f8fafc); border-radius: 12px;">
          <ui-radio label="Default" size="md"></ui-radio>
          <ui-radio label="Checked" checked size="md"></ui-radio>
          <ui-radio label="Disabled" disabled size="md"></ui-radio>
          <ui-radio label="Disabled Checked" disabled checked size="md"></ui-radio>
          <ui-radio label="Invalid State" invalid checked size="md"></ui-radio>
          <ui-radio label="Skeleton" skeleton size="md"></ui-radio>
        </div>

        <h4 style="margin: 24px 0 16px 0; font-size: 13px; opacity: 0.5;">Localization (RTL Mirroring)</h4>
        <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap; padding: 20px; background: #fff1f2; border-radius: 12px;" dir="rtl">
          <ui-radio label="تفعيل الوضع التكتيكي" rtl checked description="دعم كامل للغات من اليمين إلى اليسار" color="danger" glow></ui-radio>
          <ui-radio label="خيار ثانوي" rtl description="تنسيق مرآة تلقائي" color="primary"></ui-radio>
        </div>
      </div>
    `;
  };

  window.showRadioVariants = function () {
    const container = document.getElementById('radioDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 40px;">

        <div class="demo-block">
          <h3 class="specimen-title">🃏 All Variants Side-by-Side</h3>
          <p class="specimen-description">Every built-in <code>variant</code> shown in default and checked states.</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 24px;">
            ${['default','bordered','underlined','card','glass','raised'].map(v => `
            <div style="padding: 20px; background: ${v === 'glass' ? '#1e293b' : 'var(--bg-secondary,#f8fafc)'}; border-radius: 12px; border: 1px solid var(--border-default,#e2e8f0);" ${v === 'glass' ? 'class="dark"' : ''}>
              <p style="font-size: 10px; font-weight: 800; text-transform: uppercase; letter-spacing: 0.08em; color: ${v === 'glass' ? 'rgba(255,255,255,0.4)' : 'var(--text-secondary,#64748b)'}; margin: 0 0 12px;">${v}</p>
              <div style="display: flex; flex-direction: column; gap: 10px;">
                <ui-radio label="Unchecked" variant="${v}" color="primary"></ui-radio>
                <ui-radio label="Checked" variant="${v}" color="primary" checked></ui-radio>
              </div>
            </div>`).join('')}
          </div>
        </div>

        <div class="demo-block">
          <h3 class="specimen-title">🔘 Button Mode (<code>is-button</code>)</h3>
          <p class="specimen-description">Renders radios as a segmented button group — ideal for settings panels and toolbars.</p>
          <div style="display: flex; flex-direction: column; gap: 20px; padding: 24px; background: var(--bg-secondary,#f8fafc); border-radius: 12px;">
            <div>
              <p style="font-size: 11px; font-weight: 700; color: var(--text-secondary,#64748b); margin: 0 0 10px;">Horizontal button group</p>
              <div style="display: flex; gap: 0;">
                <ui-radio name="view" value="grid" label="Grid" is-button checked></ui-radio>
                <ui-radio name="view" value="list" label="List" is-button></ui-radio>
                <ui-radio name="view" value="card" label="Card" is-button></ui-radio>
              </div>
            </div>
            <div>
              <p style="font-size: 11px; font-weight: 700; color: var(--text-secondary,#64748b); margin: 0 0 10px;">With icons</p>
              <div style="display: flex; gap: 0;">
                <ui-radio name="theme" value="light" label="Light" is-button icon="sun" checked color="warning"></ui-radio>
                <ui-radio name="theme" value="dark" label="Dark" is-button icon="moon" color="warning"></ui-radio>
                <ui-radio name="theme" value="auto" label="Auto" is-button icon="contrast" color="warning"></ui-radio>
              </div>
            </div>
          </div>
        </div>

        <div class="demo-block">
          <h3 class="specimen-title">🏷️ Label Positions</h3>
          <p class="specimen-description">The <code>label-position</code> prop controls where the label appears relative to the radio dot.</p>
          <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 24px; padding: 24px; background: var(--bg-secondary,#f8fafc); border-radius: 12px;">
            ${['right','left','top','bottom'].map(pos => `
            <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
              <span style="font-size: 10px; font-weight: 700; color: var(--text-secondary,#64748b); font-family: monospace;">${pos}</span>
              <ui-radio label="Option" label-position="${pos}" checked color="primary"></ui-radio>
            </div>`).join('')}
          </div>
        </div>

      </div>
    `;
  };

  setTimeout(() => window.showInteractiveRadio(), 50);
}
