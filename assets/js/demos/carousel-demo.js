export function initCarouselDemo() {
  const section = document.getElementById('carousel');
  if (!section) return;

  const assetPath = '/build/assets/images/';

  section.innerHTML = `
    <div class="demo-header" style="margin-bottom: 32px;">
      <p style="margin-top: 0; opacity: 0.7; font-size: 14px;">Master-tier responsive carousel system featuring advanced 3D transitions, continuous seamless ticker engines, Ken-Burns panning, stories-style segmented progress indicators, and absolute accessibility alignment.</p>
    </div>
    
    <div id="carouselNav" class="demo-controls" style="margin: 20px 0; display: flex; gap: 12px; flex-wrap: wrap;">
      <ui-button label="🎮 Playground" onclick="showCarouselPlayground()"></ui-button>
      <ui-button label="✨ Elite Specimens" onclick="showCarouselEliteSpecimens()"></ui-button>
      <ui-button label="🎬 3D Transitions" onclick="showCarouselTransitions()"></ui-button>
      <ui-button label="📈 Industrial Ticker" onclick="showCarouselContinuousTicker()"></ui-button>
      <ui-button label="📱 Mobile Stories" onclick="showCarouselMobileStories()"></ui-button>
      <ui-button label="⚡ Features & A11y" onclick="showCarouselControlsAndA11y()"></ui-button>
    </div>

    <div id="carouselDemoContainer" style="margin-top: 20px;"></div>

    <style>
      :root {
        --bg-glass-card: rgba(255, 255, 255, 0.55);
        --border-glass-card: rgba(255, 255, 255, 0.25);
        --text-glass-card: #1f2937;
      }
      html.dark {
        --bg-glass-card: rgba(18, 18, 18, 0.65);
        --border-glass-card: rgba(255, 255, 255, 0.08);
        --text-glass-card: #f3f4f6;
      }
      .specimen-glass-card {
        background: var(--bg-glass-card);
        border: 1px solid var(--border-glass-card);
        color: var(--text-glass-card);
        backdrop-filter: blur(24px);
        -webkit-backdrop-filter: blur(24px);
      }
      .phone-wrap {
        width: 320px;
        height: 580px;
        border: 14px solid #1a1a1a;
        border-radius: 48px;
        overflow: hidden;
        position: relative;
        box-shadow: 0 30px 70px rgba(0,0,0,0.6);
        background: black;
      }
      
      @keyframes pulse {
        0%, 100% { opacity: 0.6; transform: scale(1); }
        50% { opacity: 1; transform: scale(1.15); }
      }
    </style>
  `;

  const updateActiveBtn = (funcName) => {
    const nav = document.getElementById('carouselNav');
    if (!nav) return;
    nav.querySelectorAll('ui-button').forEach(btn => {
      const onclick = btn.getAttribute('onclick') || '';
      btn.selected = onclick.includes(funcName);
    });
  };

  const slideData = [
    { bg: 'linear-gradient(135deg, #4f46e5 0%, #7c3aed 100%)', icon: '🚀', title: 'Apex Performance', desc: 'Accelerated 3D hardware transition layers' },
    { bg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', icon: '✨', title: 'Adaptive Theming', desc: 'Seamlessly adapts to your active palette' },
    { bg: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', icon: '🛡️', title: 'A11y Compliant', desc: 'Built-in keyboard, screen reader, and RTL support' },
    { bg: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)', icon: '⚡', title: 'Physics Engine', desc: 'Elastic spring swipe and drag dynamics' },
    { bg: 'linear-gradient(135deg, #ec4899 0%, #db2777 100%)', icon: '🎨', title: 'Endless Playbook', desc: 'Cube, coverflow, stack, wheel, flip, and more' },
    { bg: 'linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)', icon: '🌌', title: 'Ken-Burns Cinematic', desc: 'Atmospheric zooming and panning effects' },
  ];

  const pgSlidesHTML = slideData.map((s) => `
    <div style="height:100%; display:flex; flex-direction:column; align-items:center; justify-content:center; background:${s.bg}; color:white; padding:40px; text-align:center; position:relative; overflow:hidden;">
      <div style="position:absolute; inset:0; opacity:0.1; background:radial-gradient(circle, white 10%, transparent 60%);"></div>
      <div style="font-size:3.5rem; margin-bottom:16px; filter:drop-shadow(0 8px 16px rgba(0,0,0,0.25));">${s.icon}</div>
      <h3 style="font-size:1.75rem; font-weight:800; margin:0 0 10px; text-shadow:0 2px 4px rgba(0,0,0,0.3);">${s.title}</h3>
      <p style="font-size:1rem; opacity:0.9; margin:0; max-width:280px; text-shadow:0 1px 2px rgba(0,0,0,0.25);">${s.desc}</p>
    </div>
  `).join('');

  window.showCarouselPlayground = function () {
    updateActiveBtn('showCarouselPlayground');
    const container = document.getElementById('carouselDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-fade-in" style="background:var(--bg-primary); border:1px solid var(--border-default); border-radius:24px; padding:32px; box-shadow:var(--shadow-lg);">
        <h3 class="specimen-title" style="margin-bottom:8px; font-weight:800; font-size:1.5rem; color:var(--text-primary); display:flex; align-items:center; gap:10px;">
          <span>🎮 Carousel Studio Playground</span>
        </h3>
        <p style="font-size:13px; color:var(--text-secondary); margin-bottom:24px; max-width:600px;">
          Configure all reactive properties of the carousel. The Stencil runtime dynamically updates attributes and re-renders transition pipelines on the fly.
        </p>

        <div style="display:grid; grid-template-columns:320px 1fr; gap:32px;">
          <!-- Controls Panel -->
          <div class="playground-settings" style="background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:18px; padding:24px; display:flex; flex-direction:column; gap:20px; max-height:720px; overflow-y:auto;">
            
            <div>
              <div style="font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-primary); margin-bottom:12px; display:flex; align-items:center; gap:6px;">
                <span>📐 Structure & Feed</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:12px;">
                <ui-dropdown id="pgSlidesToShow" label="Slides to Show" value="1" size="md" options='[{"label":"1 Slide","value":"1"},{"label":"2 Slides","value":"2"},{"label":"3 Slides","value":"3"},{"label":"4 Slides","value":"4"}]'></ui-dropdown>
                <ui-dropdown id="pgSlidesToScroll" label="Slides to Scroll" value="1" size="md" options='[{"label":"Scroll 1","value":"1"},{"label":"Scroll 2","value":"2"},{"label":"Scroll 3","value":"3"}]'></ui-dropdown>
                <ui-dropdown id="pgOrientation" label="Orientation" value="horizontal" size="md" options='[{"label":"Horizontal","value":"horizontal"},{"label":"Vertical","value":"vertical"}]'></ui-dropdown>
              </div>
            </div>

            <div>
              <div style="font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-primary); margin-bottom:12px; display:flex; align-items:center; gap:6px;">
                <span>🎬 Motion & Transitions</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:12px;">
                <ui-dropdown id="pgEffect" label="Transition Effect" value="slide" size="md" options='[
                  {"label":"Standard Slide","value":"slide"},
                  {"label":"Cinematic Fade","value":"fade"},
                  {"label":"3D Cube","value":"cube"},
                  {"label":"3D Flip","value":"flip"},
                  {"label":"3D Coverflow","value":"coverflow"},
                  {"label":"Depth Stack","value":"depth"},
                  {"label":"Ken-Burns Zoom","value":"ken-burns"},
                  {"label":"Vertical Wheel","value":"wheel"},
                  {"label":"Vertical Stack","value":"stack"}
                ]'></ui-dropdown>
                <ui-input id="pgDuration" label="Duration (ms)" value="500" size="md"></ui-input>
                <ui-input id="pgInterval" label="Autoplay Interval (ms)" value="3000" size="md"></ui-input>
              </div>
            </div>

            <div>
              <div style="font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-primary); margin-bottom:12px; display:flex; align-items:center; gap:6px;">
                <span>📊 Indicators & Navigation</span>
              </div>
              <div style="display:flex; flex-direction:column; gap:12px;">
                <ui-dropdown id="pgIndicatorsType" label="Indicators Type" value="dots" size="md" options='[{"label":"Dots Indicator","value":"dots"},{"label":"Stories Segments","value":"segments"},{"label":"Pie Timer","value":"pie"}]'></ui-dropdown>
                <ui-dropdown id="pgArrowsPosition" label="Arrows Position" value="sides" size="md" options='[{"label":"Sides (Center)","value":"sides"},{"label":"Top Right Group","value":"top-right"}]'></ui-dropdown>
              </div>
            </div>

            <div>
              <div style="font-size:11px; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; color:var(--color-primary); margin-bottom:12px;">
                <span>⚡ Behavior Flags</span>
              </div>
              <div style="display:grid; grid-template-columns:1fr; gap:10px;">
                <ui-checkbox id="pgAutoplay" label="Auto-play loop" checked size="md"></ui-checkbox>
                <ui-checkbox id="pgInfinite" label="Infinite scroll" checked size="md"></ui-checkbox>
                <ui-checkbox id="pgArrows" label="Show Arrows" checked size="md"></ui-checkbox>
                <ui-checkbox id="pgIndicators" label="Show Indicators" checked size="md"></ui-checkbox>
                <ui-checkbox id="pgSwipe" label="Touch Swiping" checked size="md"></ui-checkbox>
                <ui-checkbox id="pgDraggable" label="Mouse Draggable" checked size="md"></ui-checkbox>
                <ui-checkbox id="pgCenterMode" label="Center Focus (Peek)" size="md"></ui-checkbox>
                <ui-checkbox id="pgVariableWidth" label="Variable Width" size="md"></ui-checkbox>
                <ui-checkbox id="pgProgress" label="Autoplay Progress Bar" size="md"></ui-checkbox>
                <ui-checkbox id="pgCounter" label="Show Slide Counter" size="md"></ui-checkbox>
              </div>
            </div>

          </div>

          <!-- Preview & Code Output -->
          <div style="display:flex; flex-direction:column; gap:24px;">
            <div style="border:1px solid var(--border-default); border-radius:18px; overflow:hidden; background:var(--bg-secondary); padding:24px; display:flex; flex-direction:column; justify-content:center; min-height:420px; position:relative;">
              <div style="position:absolute; top:12px; left:20px; font-size:11px; font-weight:800; text-transform:uppercase; color:var(--text-secondary); letter-spacing:0.05em;">Live Preview Screen</div>
              
              <div id="pgCarouselWrapper" style="width:100%;">
                <ui-carousel id="pgCarousel" autoplay="true" autoplay-interval="3000" indicators="true" arrows="true" infinite="true" height="340px">
                  ${pgSlidesHTML}
                </ui-carousel>
              </div>
            </div>

            <div>
              <ui-code-preview id="carouselCodePreview" label="Implementation Code" expanded="false"></ui-code-preview>
            </div>
          </div>
        </div>

      </div>
    `;

    setTimeout(() => {
      const dropdowns = ['pgSlidesToShow', 'pgSlidesToScroll', 'pgOrientation', 'pgEffect', 'pgIndicatorsType', 'pgArrowsPosition'];
      const inputs = ['pgDuration', 'pgInterval'];
      const checkboxes = ['pgAutoplay', 'pgInfinite', 'pgArrows', 'pgIndicators', 'pgSwipe', 'pgDraggable', 'pgCenterMode', 'pgVariableWidth', 'pgProgress', 'pgCounter'];

      dropdowns.forEach(id => document.getElementById(id)?.addEventListener('dropdownChange', () => updateCarouselPlayground()));
      inputs.forEach(id => document.getElementById(id)?.addEventListener('inputChange', () => updateCarouselPlayground()));
      checkboxes.forEach(id => document.getElementById(id)?.addEventListener('checkboxChange', () => updateCarouselPlayground()));

      updateCarouselPlayground();
    }, 100);
  };

  window.updateCarouselPlayground = function () {
    const getVal = id => document.getElementById(id)?.value || '';
    const getChecked = id => document.getElementById(id)?.checked || false;

    const slidesToShow = getVal('pgSlidesToShow');
    const slidesToScroll = getVal('pgSlidesToScroll');
    const orientation = getVal('pgOrientation');
    const effect = getVal('pgEffect');
    const duration = getVal('pgDuration');
    const interval = getVal('pgInterval');
    const indicatorsType = getVal('pgIndicatorsType');
    const arrowsPosition = getVal('pgArrowsPosition');

    const autoplay = getChecked('pgAutoplay');
    const infinite = getChecked('pgInfinite');
    const arrows = getChecked('pgArrows');
    const indicators = getChecked('pgIndicators');
    const swipe = getChecked('pgSwipe');
    const draggable = getChecked('pgDraggable');
    const centerMode = getChecked('pgCenterMode');
    const variableWidth = getChecked('pgVariableWidth');
    const progress = getChecked('pgProgress');
    const counter = getChecked('pgCounter');

    const carousel = document.getElementById('pgCarousel');
    if (carousel) {
      carousel.setAttribute('slides-to-show', slidesToShow);
      carousel.setAttribute('slides-to-scroll', slidesToScroll);
      carousel.setAttribute('vertical', orientation === 'vertical');
      carousel.setAttribute('effect', effect);
      carousel.setAttribute('animation-duration', duration);
      carousel.setAttribute('autoplay-interval', interval);
      carousel.setAttribute('indicators-type', indicatorsType);
      carousel.setAttribute('arrows-position', arrowsPosition);

      // Boolean settings
      carousel.autoplay = autoplay;
      carousel.infinite = infinite;
      carousel.arrows = arrows;
      carousel.indicators = indicators;
      carousel.swipe = swipe;
      carousel.enableDrag = draggable;
      carousel.centerMode = centerMode;
      carousel.variableWidth = variableWidth;
      carousel.showProgress = progress;
      carousel.showCounter = counter;

      // Handle custom padding for center peeking
      if (centerMode) {
        carousel.setAttribute('center-padding', '60px');
      } else {
        carousel.removeAttribute('center-padding');
      }

      carousel.refresh();
    }

    // Code Preview Generator
    const codePreview = document.getElementById('carouselCodePreview');
    if (codePreview) {
      let code = `<ui-carousel\n`;
      code += `  height="360px"\n`;
      if (slidesToShow !== '1') code += `  slides-to-show="${slidesToShow}"\n`;
      if (slidesToScroll !== '1') code += `  slides-to-scroll="${slidesToScroll}"\n`;
      if (orientation === 'vertical') code += `  vertical="true"\n`;
      if (effect !== 'slide') code += `  effect="${effect}"\n`;
      if (duration !== '500') code += `  animation-duration="${duration}"\n`;
      if (autoplay) {
        code += `  autoplay="true"\n`;
        if (interval !== '3000') code += `  autoplay-interval="${interval}"\n`;
      }
      if (indicatorsType !== 'dots') code += `  indicators-type="${indicatorsType}"\n`;
      if (arrowsPosition !== 'sides') code += `  arrows-position="${arrowsPosition}"\n`;
      if (!infinite) code += `  infinite="false"\n`;
      if (!arrows) code += `  arrows="false"\n`;
      if (!indicators) code += `  indicators="false"\n`;
      if (!swipe) code += `  swipe="false"\n`;
      if (!draggable) code += `  enable-drag="false"\n`;
      if (centerMode) code += `  center-mode="true"\n  center-padding="60px"\n`;
      if (variableWidth) code += `  variable-width="true"\n`;
      if (progress) code += `  show-progress="true"\n`;
      if (counter) code += `  show-counter="true"\n`;
      
      code += `>\n`;
      code += `  <div><img src="slide1.jpg" /></div>\n`;
      code += `  <div><img src="slide2.jpg" /></div>\n`;
      code += `  <div><img src="slide3.jpg" /></div>\n`;
      code += `</ui-carousel>`;

      codePreview.setAttribute('html-code', code);
    }
  };

  window.showCarouselEliteSpecimens = function () {
    updateActiveBtn('showCarouselEliteSpecimens');
    const container = document.getElementById('carouselDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-slide-up" style="display:flex; flex-direction:column; gap:40px;">
        
        <div>
          <h3 class="specimen-title" style="margin-bottom:8px; font-weight:800; font-size:1.5rem; color:var(--text-primary);">✨ Elite Material Specimens</h3>
          <p style="font-size:13px; color:var(--text-secondary); max-width:600px;">
            A collection of premium material design substrates and high-end visual patterns optimized for enterprise layouts.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(400px, 1fr)); gap:32px;">
          <!-- Specimen 1: Premium Glassmorphic Parallax -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px;">
            <h4 style="margin:0; font-size:14px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:8px;">
              <span style="color:#d946ef;">💎</span> Glassmorphic Overlay
            </h4>
            <ui-carousel autoplay="true" infinite="true" height="340px" indicators="true" arrows="true" parallax="true" animate-content="true" style="border-radius:16px; overflow:hidden; border:1px solid var(--border-default);">
              ${[1, 2, 3].map(i => `
                <div style="height:100%; position:relative; overflow:hidden; display:flex; align-items:center; justify-content:center;">
                  <div style="position:absolute; inset:0; background:linear-gradient(135deg, #1e1b4b 0%, #311042 100%); z-index:1;"></div>
                  <img src="${assetPath}nature_forest_1.png" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:2; opacity:0.6;" onerror="this.style.display='none';" />
                  
                  <div class="specimen-glass-card" style="position:relative; z-index:10; width:80%; max-width:340px; padding:32px; border-radius:20px; box-shadow:0 20px 50px rgba(0,0,0,0.3); text-align:center;">
                    <div style="background:var(--color-primary); color:white; font-size:10px; font-weight:800; text-transform:uppercase; letter-spacing:0.1em; padding:4px 12px; border-radius:20px; width:fit-content; margin:0 auto 16px;">Glass Variant</div>
                    <h3 style="font-size:1.5rem; font-weight:800; margin:0 0 10px; color:var(--text-glass-card);">Frosted Glass #${i}</h3>
                    <p style="font-size:13px; opacity:0.8; margin:0; line-height:1.5; color:var(--text-glass-card);">Backdrop-filter refraction substrate adapting perfectly to theme variables.</p>
                  </div>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

          <!-- Specimen 2: Cinematic Ken-Burns Panning -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px;">
            <h4 style="margin:0; font-size:14px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:8px;">
              <span style="color:#06b6d4;">🎬</span> Ken-Burns Cinematic Panning
            </h4>
            <ui-carousel effect="ken-burns" autoplay="true" infinite="true" height="340px" indicators="true" arrows="false" style="border-radius:16px; overflow:hidden; border:1px solid var(--border-default);">
              ${['nature_desert_3.png', 'nature_ocean_4.png', 'nature_lake_2.png'].map((img, idx) => `
                <div style="height:100%; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:flex-end; padding:40px; color:white;">
                  <div style="position:absolute; inset:0; background:linear-gradient(135deg, #124e8c 0%, #0c335e 100%); z-index:1;"></div>
                  <img src="${assetPath}${img}" style="position:absolute; inset:0; width:100%; height:100%; object-fit:cover; z-index:2;" onerror="this.style.display='none';" />
                  <div style="position:absolute; inset:0; background:linear-gradient(to top, rgba(0,0,0,0.85), transparent 70%); z-index:3;"></div>
                  
                  <div style="position:relative; z-index:10;">
                    <div style="font-size:11px; font-weight:800; background:#f59e0b; color:black; padding:3px 10px; border-radius:10px; width:fit-content; margin-bottom:8px;">CINEMATIC VIEW</div>
                    <h3 style="font-size:1.6rem; font-weight:800; margin:0 0 6px;">Exotic Landscape #${idx + 1}</h3>
                    <p style="font-size:13px; opacity:0.8; margin:0; max-width:320px;">Ken-Burns smooth scaling and panning transition layer is applied.</p>
                  </div>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

        </div>

      </div>
    `;
  };

  window.showCarouselTransitions = function () {
    updateActiveBtn('showCarouselTransitions');
    const container = document.getElementById('carouselDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-slide-up" style="display:flex; flex-direction:column; gap:40px;">
        
        <div>
          <h3 class="specimen-title" style="margin-bottom:8px; font-weight:800; font-size:1.5rem; color:var(--text-primary);">🎬 High-Performance 3D Transitions</h3>
          <p style="font-size:13px; color:var(--text-secondary); max-width:600px;">
            Leveraging GPU-accelerated CSS 3D transform matrices to deliver incredibly smooth flips, wheel spins, and perspective folds.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(360px, 1fr)); gap:32px;">
          
          <!-- Effect 1: 3D Coverflow -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px; overflow:hidden;">
            <h4 style="margin:0; font-size:13px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em; display:flex; justify-content:space-between;">
              <span>⚡ 3D Coverflow</span>
              <span style="color:var(--color-primary); font-size:11px;">effect="coverflow" center-mode="true"</span>
            </h4>
            <ui-carousel effect="coverflow" height="280px" autoplay="true" slides-to-show="3" center-mode="true" arrows="false" style="border-radius:16px;">
              ${[1,2,3,4,5].map(i => `
                <div style="height:100%; padding:0 8px;">
                  <div style="height:100%; border-radius:16px; display:flex; flex-direction:column; justify-content:center; align-items:center; background:linear-gradient(135deg, #a855f7 0%, #6b21a8 100%); color:white; font-size:2rem; font-weight:800; box-shadow:var(--shadow-md);">
                    <span>💎 Card ${i}</span>
                  </div>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

          <!-- Effect 2: 3D Cube -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px; overflow:hidden;">
            <h4 style="margin:0; font-size:13px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em; display:flex; justify-content:space-between;">
              <span>🧊 3D Cube Rotation</span>
              <span style="color:var(--color-primary); font-size:11px;">effect="cube"</span>
            </h4>
            <ui-carousel effect="cube" height="280px" indicators="true" arrows="true" style="border-radius:16px; overflow:visible;">
              ${[
                { bg: 'linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%)', label: 'Front Face' },
                { bg: 'linear-gradient(135deg, #10b981 0%, #047857 100%)', label: 'Right Face' },
                { bg: 'linear-gradient(135deg, #f59e0b 0%, #b45309 100%)', label: 'Back Face' },
                { bg: 'linear-gradient(135deg, #ef4444 0%, #b91c1c 100%)', label: 'Left Face' }
              ].map(face => `
                <div style="height:100%; background:${face.bg}; color:white; display:flex; flex-direction:column; align-items:center; justify-content:center; border-radius:16px; box-shadow:var(--shadow-lg);">
                  <div style="font-size:3rem; margin-bottom:8px;">📦</div>
                  <h3 style="font-size:1.5rem; font-weight:800; margin:0;">${face.label}</h3>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

          <!-- Effect 3: 3D Flip -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px; overflow:hidden;">
            <h4 style="margin:0; font-size:13px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em; display:flex; justify-content:space-between;">
              <span>🎴 3D Perspective Flip</span>
              <span style="color:var(--color-primary); font-size:11px;">effect="flip"</span>
            </h4>
            <ui-carousel effect="flip" height="280px" indicators="true" arrows="true" style="border-radius:16px; overflow:visible;">
              ${[
                { bg: 'linear-gradient(135deg, #ec4899 0%, #be185d 100%)', title: 'Interactive Slide A' },
                { bg: 'linear-gradient(135deg, #8b5cf6 0%, #5b21b6 100%)', title: 'Interactive Slide B' },
                { bg: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', title: 'Interactive Slide C' }
              ].map(slide => `
                <div style="height:100%; background:${slide.bg}; color:white; display:flex; flex-direction:column; align-items:center; justify-content:center; border-radius:16px; box-shadow:var(--shadow-lg);">
                  <div style="font-size:3rem; margin-bottom:8px;">🚀</div>
                  <h3 style="font-size:1.5rem; font-weight:800; margin:0;">${slide.title}</h3>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

          <!-- Effect 4: Vertical Wheel -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px; overflow:hidden;">
            <h4 style="margin:0; font-size:13px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em; display:flex; justify-content:space-between;">
              <span>☸️ 3D Vertical Wheel</span>
              <span style="color:var(--color-primary); font-size:11px;">effect="wheel" vertical="true"</span>
            </h4>
            <ui-carousel effect="wheel" vertical="true" height="280px" autoplay="true" arrows="false" indicators="true" style="border-radius:16px;">
              ${[1, 2, 3, 4].map(i => `
                <div style="height:100%; border-radius:16px; display:flex; flex-direction:column; justify-content:center; align-items:center; background:linear-gradient(135deg, #14b8a6 0%, #0f766e 100%); color:white; font-size:1.8rem; font-weight:800; box-shadow:var(--shadow-md);">
                  <span>🎡 Rotor Card ${i}</span>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

        </div>

      </div>
    `;
  };

  window.showCarouselContinuousTicker = function () {
    updateActiveBtn('showCarouselContinuousTicker');
    const container = document.getElementById('carouselDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-slide-up" style="display:flex; flex-direction:column; gap:40px;">
        
        <div>
          <h3 class="specimen-title" style="margin-bottom:8px; font-weight:800; font-size:1.5rem; color:var(--text-primary);">📈 Industrial Ticker & Banners</h3>
          <p style="font-size:13px; color:var(--text-secondary); max-width:600px;">
            Continuous, pixel-perfect scrolling ticker lanes that animate continuously at customizable speeds. Ideal for telemetry monitors, announcement streams, or brand partnerships.
          </p>
        </div>

        <div style="display:flex; flex-direction:column; gap:32px;">
          
          <!-- Continuous Telemetry Ticker -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h4 style="margin:0; font-size:13px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em; display:flex; align-items:center; gap:8px;">
                <span style="color:#10b981; display:inline-block; width:8px; height:8px; border-radius:50%; background:#10b981; animation:pulse 1.5s infinite;"></span>
                Live Telemetry Node Ticker
              </h4>
              <span style="background:var(--color-primary-subtle, rgba(99,102,241,0.15)); color:var(--color-primary); font-size:10px; font-weight:800; padding:4px 10px; border-radius:10px;">ticker-speed="1.2"</span>
            </div>
            <ui-carousel ticker="true" ticker-speed="1.2" height="110px" arrows="false" indicators="false" slides-to-show="4" infinite="true" style="border-radius:12px;">
              ${Array.from({ length: 8 }, (_, i) => `
                <div style="padding:8px; height:100%;">
                  <div style="background:var(--bg-primary); border:1px solid var(--border-default); border-radius:12px; padding:16px; display:flex; align-items:center; gap:12px; height:100%; box-shadow:var(--shadow-sm);">
                    <div style="width:10px; height:10px; border-radius:50%; background:#10b981;"></div>
                    <div>
                      <div style="font-size:13px; font-weight:800; color:var(--text-primary);">NODE_${i + 1}</div>
                      <div style="font-size:11px; color:var(--text-secondary);">PING: ${10 + Math.floor(Math.random() * 20)}ms</div>
                    </div>
                  </div>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

          <!-- Industrial Announcement Banner -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px;">
            <div style="display:flex; justify-content:space-between; align-items:center;">
              <h4 style="margin:0; font-size:13px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em;">
                📣 Industrial Warning Banner
              </h4>
              <span style="background:rgba(239,68,68,0.15); color:#ef4444; font-size:10px; font-weight:800; padding:4px 10px; border-radius:10px;">ticker-speed="2.5"</span>
            </div>
            <ui-carousel ticker="true" ticker-speed="2.5" height="80px" arrows="false" indicators="false" infinite="true" style="border-radius:12px;">
              <div style="padding:10px; height:100%;">
                <div style="height:100%; background:linear-gradient(to right, #7f1d1d, #ef4444); color:white; display:flex; align-items:center; justify-content:center; border-radius:8px; font-weight:800; font-size:1.15rem; letter-spacing:0.05em; padding:0 30px;">
                  ⚠️ DANGER: UNCOMPRESSIBLE FEED PIPELINE OVERLOAD OVER 98% CAPACITY - SHIELD ACTIVE
                </div>
              </div>
              <div style="padding:10px; height:100%;">
                <div style="height:100%; background:linear-gradient(to right, #ef4444, #b91c1c); color:white; display:flex; align-items:center; justify-content:center; border-radius:8px; font-weight:800; font-size:1.15rem; letter-spacing:0.05em; padding:0 30px;">
                  ⚡ SYSTEM WARNING: INTEGRATED KINEMATIC MOTORS RUNNING TEMPERATURE EXCEEDS SAFE MARGINS
                </div>
              </div>
            </ui-carousel>
          </div>

        </div>

      </div>
    `;
  };

  window.showCarouselMobileStories = function () {
    updateActiveBtn('showCarouselMobileStories');
    const container = document.getElementById('carouselDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-slide-up" style="display:flex; flex-direction:column; align-items:center; gap:32px;">
        
        <div style="text-align:center;">
          <h3 class="specimen-title" style="margin-bottom:8px; font-weight:800; font-size:1.5rem; color:var(--text-primary);">📱 Mobile Story Segment Progress</h3>
          <p style="font-size:13px; color:var(--text-secondary); max-width:600px; margin:0 auto;">
            Configuring stories-style progress segment bars with autoplay tick intervals. Perfect for quick news digests, onboarding tutorials, or reels.
          </p>
        </div>

        <!-- Phone Shell Mockup -->
        <div style="background:var(--bg-secondary); padding:40px; border-radius:40px; border:1px solid var(--border-default); box-shadow:var(--shadow-lg); display:flex; justify-content:center; width:100%; max-width:440px;">
          <div class="phone-wrap">
            
            <ui-carousel indicators="true" indicators-type="segments" autoplay="true" height="100%" effect="fade" infinite="true" autoplay-interval="4000" arrows="false" show-progress="true">
              ${[
                { bg: 'linear-gradient(to top, #0f172a, #1e293b)', text: 'Unlock Unlimited Potential', step: '01' },
                { bg: 'linear-gradient(to top, #1e1b4b, #311042)', text: 'Ultra Lightweight Layouts', step: '02' },
                { bg: 'linear-gradient(to top, #022c22, #064e3b)', text: 'Pixel Perfect Mechanics', step: '03' },
                { bg: 'linear-gradient(to top, #3c0764, #12005e)', text: 'Elite Developer Experience', step: '04' }
              ].map(slide => `
                <div style="height:100%; position:relative; overflow:hidden; display:flex; flex-direction:column; justify-content:flex-end; padding:40px; color:white; background:${slide.bg};">
                  <div style="position:absolute; top:-20%; left:-20%; width:100%; height:60%; background:radial-gradient(circle, rgba(255,255,255,0.08) 0%, transparent 60%); pointer-events:none;"></div>
                  
                  <div style="position:relative; z-index:10;">
                    <div style="font-size:3rem; font-weight:900; color:rgba(255,255,255,0.15); margin-bottom:12px; letter-spacing:-2px;">STEP ${slide.step}</div>
                    <h3 style="font-weight:800; font-size:1.6rem; letter-spacing:-0.5px; margin:0 0 12px; line-height:1.2; color:white;">${slide.text}</h3>
                    <p style="opacity:0.75; font-size:13px; margin:0 0 24px; line-height:1.5;">Witness the cinematic crossfade and stories segmented progress engine.</p>
                    
                    <ui-button label="NEXT TUTORIAL →" size="md" color="primary" variant="solid" style="width:100%;" onclick="this.closest('ui-carousel').next()"></ui-button>
                  </div>
                </div>
              `).join('')}
            </ui-carousel>

          </div>
        </div>

      </div>
    `;
  };

  window.showCarouselControlsAndA11y = function () {
    updateActiveBtn('showCarouselControlsAndA11y');
    const container = document.getElementById('carouselDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-slide-up" style="display:flex; flex-direction:column; gap:40px;">
        
        <div>
          <h3 class="specimen-title" style="margin-bottom:8px; font-weight:800; font-size:1.5rem; color:var(--text-primary);">⚡ Advanced Controls & Accessibility</h3>
          <p style="font-size:13px; color:var(--text-secondary); max-width:600px;">
            Enterprise features including peeking center-mode, precise slide counters, mouse dragging, wheel scrolling, and synced carousels.
          </p>
        </div>

        <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(400px, 1fr)); gap:32px;">
          
          <!-- Card 1: Center Mode Peeking + Drag -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px;">
            <h4 style="margin:0; font-size:14px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em;">
              🖱️ Center Mode Peeking & Dragging
            </h4>
            <p style="font-size:12px; color:var(--text-secondary); margin:0;">
              <code>center-mode</code> allows adjacent slides to partially peek in. Combined with <code>enable-drag</code>, users can swipe cards smoothly.
            </p>
            <ui-carousel center-mode="true" center-padding="60px" height="240px" indicators="true" arrows="true" style="border-radius:16px;">
              ${[1, 2, 3, 4].map(i => `
                <div style="height:100%; padding:0 8px;">
                  <div style="height:100%; border-radius:12px; display:flex; flex-direction:column; justify-content:center; align-items:center; background:linear-gradient(135deg, #fb7185 0%, #e11d48 100%); color:white; font-size:1.6rem; font-weight:800; box-shadow:var(--shadow-sm);">
                    <span>📇 Slide ${i}</span>
                  </div>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

          <!-- Card 2: Interactive Counter & Progress Indicators -->
          <div style="padding:24px; background:var(--bg-secondary); border:1px solid var(--border-default); border-radius:24px; display:flex; flex-direction:column; gap:16px;">
            <h4 style="margin:0; font-size:14px; font-weight:800; color:var(--text-primary); text-transform:uppercase; letter-spacing:0.05em;">
              📊 Slide Counter & Autoplay Progress
            </h4>
            <p style="font-size:12px; color:var(--text-secondary); margin:0;">
              Enable <code>show-counter</code> to render progress counts (e.g. 1 / 4) and <code>show-progress</code> for top-aligned timer bars.
            </p>
            <ui-carousel show-counter="true" show-progress="true" autoplay="true" autoplay-interval="4000" height="240px" indicators="true" arrows="true" style="border-radius:16px;">
              ${['#0284c7', '#059669', '#d97706', '#dc2626'].map((bg, idx) => `
                <div style="height:100%; background:${bg}; color:white; display:flex; flex-direction:column; align-items:center; justify-content:center; border-radius:16px;">
                  <h3 style="font-size:1.5rem; font-weight:800; margin:0;">Visual Page #${idx + 1}</h3>
                  <p style="font-size:12px; opacity:0.8; margin-top:4px;">Watch the top-aligned linear loader fill up.</p>
                </div>
              `).join('')}
            </ui-carousel>
          </div>

        </div>

      </div>
    `;
  };

  // Render playground by default
  setTimeout(() => window.showCarouselPlayground(), 50);
}
