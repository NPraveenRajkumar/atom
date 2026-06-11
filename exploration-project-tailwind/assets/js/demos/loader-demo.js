// Loader Component Demo
export function initLoaderDemo() {
  const section = document.getElementById('loader');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Advanced loading indicator with multiple animation styles, overlay modes, and extensive configuration.</p>
    
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showInteractiveLoader()" variant="outline">🎮 Playground</ui-button>
      <ui-button onclick="showLoaderTypes()" variant="outline">Types</ui-button>
      <ui-button onclick="showLoaderSizes()" variant="outline">Sizes</ui-button>
      <ui-button onclick="showLoaderColors()" variant="outline">Colors</ui-button>
      <ui-button onclick="showRainingLetters()" variant="outline">🌧 Raining Letters</ui-button>
      <ui-button onclick="showPremiumFeatures()" variant="outline">✨ Elite Perks</ui-button>
    </div>

    <div id="loaderDemoContainer" style="margin-top: 20px;"></div>
  `;

  window.showLoaderTypes = function () {
    const container = document.getElementById('loaderDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Animation Types</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 24px;">Explore our library of 34 high-fidelity, high-performance animation patterns.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px; text-align: center; padding: 20px;">
          ${[
            'spinner',
            'dots',
            'bar',
            'pulse',
            'ring',
            'bounce',
            'grid',
            'wave',
            'dual-ring',
            'heartbeat',
            'clock',
            'raining-letters',
            'ripple',
            'infinite',
            'wifi',
            'rainbow',
            'square-shuffle',
            'dna-helix',
            'atom-sphere',
            'staircase',
            'radar',
            'liquid-drop',
            'neon-path',
            'neuro-pulse',
            'vortex-ring',
            'cube-fold',
            'breathing',
            'glitch-text',
            'plc-module',
            'm580-signal',
            'circuit-board',
            'callout-rotate',
            'infinite-roller',
            'image',
          ]
            .map(
              type => `
              <div style="padding: 25px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white); transition: transform 0.2s, box-shadow 0.2s; cursor: default;" onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 10px 15px -3px rgba(0,0,0,0.1)';" onmouseout="this.style.transform='translateY(0)';this.style.boxShadow='none';">
                <ui-loader type="${type}" color="success" size="xl"></ui-loader>
                <p style="margin-top: 15px; font-size: 11px; font-weight: 800; text-transform: uppercase; color:var(--text-primary,#1e293b); letter-spacing: 0.05em;">${type.replace('-', ' ')}</p>
              </div>
            `,
            )
            .join('')}
        </div>
      </div>
    `;
  };

  window.showLoaderSizes = function () {
    const container = document.getElementById('loaderDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Size Variants</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 24px;">From micro-indicators (3XS) to massive full-screen attention grabbers (Jumbo).</p>
        <div style="display: flex; gap: 30px; align-items: center; justify-content: center; flex-wrap: wrap; padding: 40px; background:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
          ${['3xs', 'xs', 'small', 'md', 'large', 'xl', '3xl', 'jumbo']
            .map(
              size => `
              <div style="text-align: center;">
                <ui-loader size="${size}" color="success" type="spinner"></ui-loader>
                <p style="margin-top: 10px; font-size: 10px; font-weight: bold; opacity: 0.6; text-transform: uppercase;">${size}</p>
              </div>
            `,
            )
            .join('')}
        </div>
      </div>
    `;
  };

  window.showLoaderColors = function () {
    const container = document.getElementById('loaderDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Color Palette Showcase</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 24px;">Built-in variants and any custom HEX / Gradients.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; padding: 20px;">
          ${['primary', 'secondary', 'success', 'danger', 'info', '#ff00ff', 'linear-gradient(90deg, #4facfe 0%, #00f2fe 100%)']
            .map(
              color => `
              <div style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0); display: flex; flex-direction: column; align-items: center; gap: 12px;">
                <div style="display: flex; gap: 16px;">
                  <ui-loader color="${color}" size="md" type="${color.includes('gradient') ? 'dots' : 'spinner'}"></ui-loader>
                  <ui-loader color="${color}" size="md" type="${color.includes('gradient') ? 'bar' : 'dots'}"></ui-loader>
                </div>
                <p style="font-family: monospace; font-size: 11px; color:var(--text-secondary,#64748b); margin: 0;">${color}</p>
              </div>
            `,
            )
            .join('')}
        </div>
      </div>
    `;
  };

  window.showPremiumFeatures = function () {
    const container = document.getElementById('loaderDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <!-- Status Messages Rotation -->
        <div class="demo-block" style="padding: 30px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white);">
          <h4 style="margin: 0 0 10px 0; color:var(--accent-purple,#8b5cf6);">🗣️ Intelligent Message Rotation</h4>
          <p style="font-size: 14px; color:var(--text-secondary,#64748b); margin-bottom: 24px;">Enhance perceived performance by rotating through status updates. Perfect for long processes.</p>
          
          <div style="display: flex; justify-content: center; min-height: 150px;">
            <ui-loader 
              id="messageLoader"
              type="pulse" 
              color="success" 
              label="System Booting" 
              description="Please wait..."
            ></ui-loader>
          </div>
        </div>

        <!-- Predictive Progress -->
        <div class="demo-block" style="padding: 30px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white);">
          <h4 style="margin: 0 0 10px 0; color:var(--accent-purple,#8b5cf6);">🔋 Weighted Predictive Progress</h4>
          <p style="font-size: 14px; color:var(--text-secondary,#64748b); margin-bottom: 24px;">The progress bar automatically "crawls" at realistic, non-linear speeds towards 95%, keeping users engaged.</p>
          
          <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
            <ui-loader 
              type="bar" 
              predictive="true" 
              label="fetching heavy data..." 
              thickness="6" 
              width="300px"
              color="#10b981"
            ></ui-loader>
            <ui-button onclick="this.previousElementSibling.status='success'" style="padding: 6px 12px; font-size: 12px; cursor: pointer;">Complete Process</ui-button>
          </div>
        </div>

        <!-- Linear Strip & Haptics -->
        <div class="demo-block" style="padding: 30px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white);">
          <h4 style="margin: 0 0 10px 0; color:var(--accent-purple,#8b5cf6);">📐 Linear Strip Variant</h4>
          <p style="font-size: 14px; color:var(--text-secondary,#64748b); margin-bottom: 24px;">Minimalist top-bar progress, similar to YouTube or GitHub navigation.</p>
          
          <div style="position: relative; height: 100px; border: 1px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center;">
            <p style="font-size: 12px; color:var(--text-secondary,#64748b);">(See the thin success line at the top of this box)</p>
            <ui-loader 
              variant="linear-strip" 
              status="loading"
              predictive="true"
              style="position: absolute; top: 0; left: 0; width: 100%;"
            ></ui-loader>
          </div>
        </div>
      </div>
    `;

    // Inject messages via property setting
    setTimeout(() => {
      const loader = document.getElementById('messageLoader');
      if (loader) {
        loader.messages = [
          'Connecting to secure server...',
          'Verifying encrypted credentials...',
          'Allocating cloud resources...',
          'Optimizing database clusters...',
          'Almost there, finalizing setup...',
        ];
        loader.messageInterval = 2500;
        loader.ariaLive = 'polite';
      }
    }, 100);
  };

  window.showInteractiveLoader = function () {
    const container = document.getElementById('loaderDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Universal Loader Playground</h3>
        <p style="margin-bottom: 20px; font-size: 14px; color: var(--text-secondary, #666);">Configure every single property of the <code>ui-loader</code> component in real-time.</p>
        
        <div class="playground-layout" style="display: grid; grid-template-columns: 350px 1fr; gap: 30px;">
          <!-- Controls Panel -->
          <div class="controls-panel" style="padding: 20px; border-radius: 12px; max-height: 80vh; overflow-y: auto;">
            
            <section style="margin-bottom: 24px;">
              <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; color: var(--text-secondary, #64748b); letter-spacing: 0.05em;">Core Settings</h4>
              <div style="display: grid; gap: 12px;">
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Animation Type</label>
                  <ui-dropdown id="pType" >
                    <option value="spinner">Spinner</option><option value="dots">Dots</option><option value="bar">Bar</option>
                    <option value="pulse">Pulse</option><option value="ring">Ring</option><option value="bounce">Bounce</option>
                    <option value="grid">Grid</option><option value="wave">Wave</option><option value="dual-ring">Dual Ring</option>
                    <option value="heartbeat">Heartbeat</option><option value="clock">Clock</option><option value="raining-letters">Raining Letters</option>
                    <option value="ripple">Ripple</option><option value="infinite">Infinite</option><option value="wifi">Wifi</option>
                    <option value="rainbow">Rainbow</option><option value="square-shuffle">Square Shuffle</option>
                    <option value="dna-helix">DNA Helix</option><option value="atom-sphere">Atom Sphere</option>
                    <option value="staircase">Staircase</option><option value="radar">Radar</option>
                    <option value="liquid-drop">Liquid Drop</option><option value="neon-path">Neon Path</option>
                    <option value="neuro-pulse">Neuro Pulse</option><option value="vortex-ring">Vortex Ring</option>
                    <option value="cube-fold">Cube Fold</option><option value="breathing">Breathing</option>
                    <option value="glitch-text">Glitch Text</option><option value="plc-module">Industrial: PLC</option>
                    <option value="m580-signal">Industrial: M580</option>
                    <option value="circuit-board">Industrial: Circuit</option>
                    <option value="image">Custom Image</option>
                  </ui-dropdown>
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Size Preset</label>
                  <ui-dropdown id="pSize" >
                    <option value="3xs">3XS</option>
                    <option value="2xs">2XS</option>
                    <option value="xs">XS</option>
                    <option value="small">Small</option>
                    <option value="md" selected>md</option>
                    <option value="large">Large</option>
                    <option value="xl">XL</option>
                    <option value="2xl">2xl</option>
                    <option value="3xl">3xl</option>
                    <option value="jumbo">Jumbo</option>
                  </ui-dropdown>
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Color / Gradient</label>
                  <ui-input type="text" id="pColor" value="primary" placeholder="primary, hex, or gradient" >
                </div>
              </div>
            </section>

            <section style="margin-bottom: 24px;">
              <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; color: var(--text-secondary, #64748b); letter-spacing: 0.05em;">Content & Text</h4>
              <div style="display: grid; gap: 12px;">
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Main Label</label>
                  <ui-input type="text" id="pLabel" value="Loading..." >
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Description</label>
                  <ui-input type="text" id="pDesc" value="" placeholder="Optional sub-text" >
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Position</label>
                  <ui-dropdown id="pPos" onchange="updateAll()" >
                    <option value="bottom">Bottom</option><option value="top">Top</option><option value="left">Left</option><option value="right">Right</option>
                  </ui-dropdown>
                </div>
              </div>
            </section>

            <section style="margin-bottom: 24px;">
              <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; color: var(--text-secondary, #64748b); letter-spacing: 0.05em;">Behavior</h4>
              <div style="display: grid; gap: 12px;">
                <div style="display: flex; gap: 10px; align-items: center;">
                  <ui-checkbox id="pVisible" checked label="Visible"></ui-checkbox>
                  <ui-checkbox id="pOverlay" label="Overlay"></ui-checkbox>
                  <ui-checkbox id="pBlur" label="Enable Blur"></ui-checkbox>
                  <ui-checkbox id="pTrapFocus" label="Trap Focus"></ui-checkbox>
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Progress Value (0-100)</label>
                  <ui-input type="number" id="pValue" min="0" max="100" placeholder="Determinate state" >
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Thickness (px)</label>
                  <ui-input type="number" id="pThick" value="3" >
                </div>
              </div>
            </section>

            <section style="margin-bottom: 24px;">
              <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; color: var(--text-secondary, #64748b); letter-spacing: 0.05em;">Premium & Advanced</h4>
              <div style="display: grid; gap: 12px;">
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Variant Style</label>
                  <ui-dropdown id="pVariant" >
                    <option value="standard">Standard</option><option value="glass">Glass</option><option value="neon">Neon</option><option value="minimal">Minimal</option><option value="linear-strip">Linear Strip (Top)</option>
                  </ui-dropdown>
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">ARIA Live</label>
                  <ui-dropdown id="pAriaLive" >
                    <option value="polite" selected>Polite</option>
                    <option value="assertive">Assertive</option>
                    <option value="off">Off</option>
                  </ui-dropdown>
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Overlay Background</label>
                  <ui-input type="text" id="pOverlayBg" value="" placeholder="Custom color or gradient" >
                </div>
                <div>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Status Image URL</label>
                  <ui-input type="text" id="pImage" value="/build/assets/images/logo.png" >
                </div>
                <div id="rainOptionsWrap" style="display:none;">
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Rain Text (characters pool)</label>
                  <ui-input type="text" id="pRainText" value="" placeholder="Default: A-Z 0-9" style="margin-bottom: 8px;"></ui-input>
                  <label style="display: block; font-size: 12px; font-weight: 600; margin-bottom: 4px;">Rain Columns</label>
                  <ui-input type="number" id="pRainColumns" value="5" min="1" max="20" ></ui-input>
                </div>
              </div>
            </section>
          </div>

          <!-- Preview & Code -->
          <div class="display-panel" style="display: flex; flex-direction: column; gap: 20px;">
            <div id="pReviewContainer" class="playground-preview" style="flex: 1; min-height: 400px; position: relative; overflow: hidden;">
               <div id="pOutput"></div>
            </div>
            <div style="background: #1e293b; color: #f8fafc; padding: 20px; border-radius: 12px; font-family: monospace; font-size: 13px; white-space: pre-wrap; word-break: break-all;" id="pCode"></div>
          </div>
        </div>
      </div>
    `;

    window.updateAll = function () {
      const type = document.getElementById('pType').value;
      const size = document.getElementById('pSize').value;
      const color = document.getElementById('pColor').value;
      const label = document.getElementById('pLabel').value;
      const desc = document.getElementById('pDesc').value;
      const pos = document.getElementById('pPos').value;
      const visible = document.getElementById('pVisible').checked;
      const overlay = document.getElementById('pOverlay').checked;
      const blur = document.getElementById('pBlur').checked;
      const value = document.getElementById('pValue').value;
      const thick = document.getElementById('pThick').value;
      const variant = document.getElementById('pVariant').value;
      const ariaLive = document.getElementById('pAriaLive').value;
      const trapFocus = document.getElementById('pTrapFocus').checked;
      const overBg = document.getElementById('pOverlayBg').value;
      const image = document.getElementById('pImage').value;
      const rainText = document.getElementById('pRainText')?.value || '';
      const rainColumns = document.getElementById('pRainColumns')?.value || '5';

      // Show/hide rain options
      const rainWrap = document.getElementById('rainOptionsWrap');
      if (rainWrap) rainWrap.style.display = type === 'raining-letters' ? 'block' : 'none';

      const output = document.getElementById('pOutput');
      const codeOutput = document.getElementById('pCode');

      let props = `type="${type}" size="${size}" color="${color}" visible="${visible}"`;
      if (label) props += ` label="${label}" label-position="${pos}"`;
      if (desc) props += ` description="${desc}"`;
      if (overlay) props += ` overlay="true"`;
      if (blur) props += ` enable-blur="true"`;
      if (value !== '') props += ` value="${value}"`;
      if (thick) props += ` thickness="${thick}"`;
      if (variant !== 'standard') props += ` variant="${variant}"`;
      if (ariaLive !== 'polite') props += ` aria-live="${ariaLive}"`;
      if (trapFocus) props += ` trap-focus="true"`;
      if (overBg) props += ` overlay-background="${overBg}"`;
      if (type === 'image') props += ` image="${image}"`;
      if (type === 'raining-letters') {
        if (rainText) props += ` rain-text="${rainText}"`;
        if (rainColumns !== '5') props += ` rain-columns="${rainColumns}"`;
      }

      const finalHtml = `<ui-loader ${props}></ui-loader>`;
      output.innerHTML = finalHtml;
      codeOutput.textContent = finalHtml;
    };

    // Use event delegation for custom Stencil events
    const controls = document.querySelector('.controls-panel');
    if (controls) {
      controls.addEventListener('valueChange', () => window.updateAll());
      controls.addEventListener('inputChange', () => window.updateAll());
      controls.addEventListener('checkboxChange', () => window.updateAll());
    }

    // Fallback for native events if any
    const inputs = document.querySelectorAll('.controls-panel input');
    inputs.forEach(input => {
      input.addEventListener('input', () => window.updateAll());
      input.addEventListener('change', () => window.updateAll());
    });

    updateAll();
  };

  // Initial View
  setTimeout(() => showInteractiveLoader(), 100);

  window.showRainingLetters = function () {
    const container = document.getElementById('loaderDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🌧 Raining Letters</h3>
        <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 24px;">Use <code>rain-text</code> to define which characters rain and <code>rain-columns</code> to control column count.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; text-align: center; padding: 20px;">
          <div style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white);">
            <ui-loader type="raining-letters" size="xl" color="success"></ui-loader>
            <p style="margin-top: 12px; font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">Default (A–Z 0–9)</p>
            <code style="font-size: 10px; color:var(--text-secondary,#64748b);">type="raining-letters"</code>
          </div>
          <div style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white);">
            <ui-loader type="raining-letters" size="xl" color="#10b981" rain-text="01"></ui-loader>
            <p style="margin-top: 12px; font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">Binary Matrix</p>
            <code style="font-size: 10px; color:var(--text-secondary,#64748b);">rain-text="01"</code>
          </div>
          <div style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white);">
            <ui-loader type="raining-letters" size="xl" color="#8b5cf6" rain-text="★♦♣♠♥" rain-columns="5"></ui-loader>
            <p style="margin-top: 12px; font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">Symbols</p>
            <code style="font-size: 10px; color:var(--text-secondary,#64748b);">rain-text="★♦♣♠♥"</code>
          </div>
          <div style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white);">
            <ui-loader type="raining-letters" size="xl" color="#ef4444" rain-text="Loading" rain-columns="7"></ui-loader>
            <p style="margin-top: 12px; font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">Custom word, 7 cols</p>
            <code style="font-size: 10px; color:var(--text-secondary,#64748b);">rain-text="Loading" rain-columns="7"</code>
          </div>
          <div style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 12px; background:var(--bg-primary,white);">
            <ui-loader type="raining-letters" size="xl" color="#f59e0b" rain-text="ABCDEF" rain-columns="3"></ui-loader>
            <p style="margin-top: 12px; font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">3 columns</p>
            <code style="font-size: 10px; color:var(--text-secondary,#64748b);">rain-columns="3"</code>
          </div>
        </div>
      </div>
    `;
  };
}
