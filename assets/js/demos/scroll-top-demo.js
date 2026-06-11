// Component Demo Functions
export function initScrollTopDemo() {
  const section = document.getElementById('scroll-top');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header">
      <h2>Scroll Top</h2>
      <p>A smart, customizable back-to-top button with progress tracking and auto-hide capabilities.</p>
    </div>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showScrollTopStandard()"  variant="outline">Standard</ui-button>
      <ui-button onclick="showScrollTopFeatures()"  variant="outline">Advanced Features</ui-button>
      <ui-button onclick="showSTInContainer()"  variant="outline">In-Container</ui-button>
    </div>

    <div id="scrollTopDemoContainer" class="demo-container"></div>

    <style>
      .demo-btn { padding: 8px 16px; border: none; border-radius: 6px; cursor: pointer; font-weight: 600; transition: all 0.2s; }
      .demo-btn.primary { background: #10b981; color: white; }
      .demo-btn.secondary { background: #f3f4f6; color: #374151; }
      .demo-btn.secondary:hover { background: #e5e7eb; }
      .demo-container { margin-top: 24px; }
      .demo-card { background:var(--bg-primary,white); border:1px solid var(--border-default,#e5e7eb); border-radius: 12px; padding: 24px; box-shadow: 0 1px 3px rgba(0,0,0,0.1); }
      .scroll-box { position: relative; height: 350px; overflow-y: auto; border:1px solid var(--border-default,#e5e7eb); border-radius: 8px; padding: 20px; background:var(--bg-secondary,#f9fafb); }
      <section id="features-section" style="padding: 100px 0; border-bottom: 1px solid #eee;">
        <h2 id="features">✨ Dynamic Features</h2>
        <p>Explore the premium features of out Apex Tier components.</p>
      </section>

      <section id="performance-section" style="padding: 100px 0; border-bottom: 1px solid #eee;">
        <h2 id="performance" data-ui-anchor-title="🚀 Rocket Performance">Performance</h2>
        <p>Optimized for highly interactive enterprise applications.</p>
      </section>

      <section id="customization-section" style="padding: 100px 0; border-bottom: 1px solid #eee;">
        <h2 id="styling">🎨 Advanced Styling</h2>
        <p>Glassmorphism, CSS Variables, and Smooth Shadows.</p>
      </section>
      .grid-3 { display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 20px; }
    </style>
  `;

  // Standard Demo
  window.showScrollTopStandard = function () {
    const container = document.getElementById('scrollTopDemoContainer');
    container.innerHTML = `
      <div class="grid-3">
        <div class="demo-card">
          <h4>Default (Bottom Right)</h4>
          <div id="boxStd1" class="scroll-box">
            ${Array.from({ length: 40 }, (_, i) => `<p>Line ${i + 1}</p>`).join('')}
          </div>
        </div>
        <div class="demo-card">
          <h4>Bottom Center</h4>
          <div id="boxStd2" class="scroll-box">
            ${Array.from({ length: 40 }, (_, i) => `<p>Line ${i + 1}</p>`).join('')}
          </div>
        </div>
        <div class="demo-card">
          <h4>Bottom Left</h4>
          <div id="boxStd3" class="scroll-box">
            ${Array.from({ length: 40 }, (_, i) => `<p>Line ${i + 1}</p>`).join('')}
          </div>
        </div>
      </div>
    `;
    setTimeout(() => {
      const b1 = document.createElement('ui-scroll-top');
      b1.threshold = 50;
      b1.target = '#boxStd1';
      b1.iconLibrary = 'lucide';
      b1.icon = 'arrow-up';
      document.getElementById('boxStd1').appendChild(b1);
      const b2 = document.createElement('ui-scroll-top');
      b2.threshold = 50;
      b2.target = '#boxStd2';
      b2.position = 'bottom-center';
      b2.iconLibrary = 'lucide';
      b2.icon = 'arrow-up';
      document.getElementById('boxStd2').appendChild(b2);
      const b3 = document.createElement('ui-scroll-top');
      b3.threshold = 50;
      b3.target = '#boxStd3';
      b3.position = 'bottom-left';
      b3.iconLibrary = 'lucide';
      b3.icon = 'arrow-up';
      document.getElementById('boxStd3').appendChild(b3);
    }, 100);
  };

  // Advanced Features Demo
  window.showScrollTopFeatures = function () {
    const container = document.getElementById('scrollTopDemoContainer');
    container.innerHTML = `
        <div class="demo-card">
          <h4>Glassy & Both Mode</h4>
          <p class="small text-muted">A modern glassmorphism look that adapts to scroll direction.</p>
          <div id="boxFeat1" class="scroll-box">
             ${Array.from({ length: 150 }, (_, i) => `<p>Content Line ${i + 1}</p>`).join('')}
          </div>
        </div>
        <div class="demo-card">
          <h4>Progress with Value</h4>
          <p class="small text-muted">Shows the exact percentage inside the ring.</p>
          <div id="boxFeat2" class="scroll-box">
            ${Array.from({ length: 100 }, (_, i) => `<p>Scroll down ${i + 1}%</p>`).join('')}
          </div>
        </div>
        <div class="demo-card">
          <h4>Custom Labels</h4>
          <p class="small text-muted">Combined icon and text.</p>
          <div id="boxFeat3" class="scroll-box">
            ${Array.from({ length: 100 }, (_, i) => `<p>Line ${i + 1}</p>`).join('')}
          </div>
        </div>
      </div>
    `;
    setTimeout(() => {
      const b1 = document.createElement('ui-scroll-top');
      b1.threshold = 50;
      b1.mode = 'both';
      b1.glassy = true;
      b1.target = '#boxFeat1';
      b1.iconLibrary = 'lucide';
      b1.icon = 'arrow-up';
      document.getElementById('boxFeat1').appendChild(b1);
      const b2 = document.createElement('ui-scroll-top');
      b2.threshold = 50;
      b2.showProgress = true;
      b2.showProgressValue = true;
      b2.target = '#boxFeat2';
      b2.iconLibrary = 'lucide';
      b2.icon = 'arrow-up';
      document.getElementById('boxFeat2').appendChild(b2);
      const b3 = document.createElement('ui-scroll-top');
      b3.threshold = 50;
      b3.label = 'Go Up';
      b3.color = 'dark';
      b3.target = '#boxFeat3';
      b3.iconLibrary = 'lucide';
      b3.icon = 'arrow-up';
      document.getElementById('boxFeat3').appendChild(b3);
    }, 100);
  };

  // Interactive Playground
  window.showInteractiveScrollTop = function () {
    const container = document.getElementById('scrollTopDemoContainer');
    container.innerHTML = `
      <div class="demo-card">
        <div style="display: flex; gap: 32px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px;">
            <h3>Playground</h3>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 20px;">
              <div>
                <label>Position</label>
                <ui-dropdown id="stPos" onchange="updateST()" class="st-input">
                  <option value="bottom-right">Bottom Right</option>
                  <option value="bottom-left">Bottom Left</option>
                  <option value="bottom-center">Bottom Center</option>
                  <option value="top-left">Top Left</option>
                  <option value="top-right">Top Right</option>
                  <option value="top-center">Top Center</option>
                  <option value="center-left">Center Left</option>
                  <option value="center-right">Center Right</option>
                  <option value="center">Center</option>
                </ui-dropdown>
              </div>
              <div>
                <label>Mode</label>
                <ui-dropdown id="stMode" onchange="updateST()" class="st-input">
                  <option value="top">To Top</option>
                  <option value="bottom">To Bottom</option>
                  <option value="both">Both (Smart)</option>
                </ui-dropdown>
              </div>
              <div class="control-group">
                <label>Size</label>
                <div class="radio-group" id="stSizeGroup">
                  <label><ui-input type="radio" name="stSize" value="sm" onchange="updateST()"> SM</label>
                  <label><ui-input type="radio" name="stSize" value="md" checked onchange="updateST()"> MD</label>
                  <label><ui-input type="radio" name="stSize" value="lg" onchange="updateST()"> LG</label>
                </div>
              </div>
              <div class="control-group">
                <label>Variant</label>
                <ui-dropdown id="stVariant" onchange="updateST()" class="st-input">
                  <option value="solid" selected>Solid</option>
                  <option value="outline">Outline</option>
                  <option value="ghost">Ghost</option>
                </ui-dropdown>
              </div>
              <div class="control-group">
                <label>Color</label>
                <ui-dropdown id="stColor" onchange="updateST()" class="st-input">
                  <option value="primary" selected>Primary</option>
                  <option value="secondary">Secondary</option>
                  <option value="success">Success</option>
                  <option value="info">Info</option>
                  <option value="warning">Warning</option>
                  <option value="danger">Danger</option>
                  <option value="dark">Dark</option>
                </ui-dropdown>
              </div>
              <div>
                <label>Shape</label>
                <ui-dropdown id="stShape" onchange="updateST()" class="st-input">
                  <option value="rounded" selected>Rounded</option>
                  <option value="square">Square</option>
                  <option value="sharp">Sharp</option>
                  <option value="oval">Oval</option>
                  <option value="chip">Chip</option>
                  <option value="circle">Circle</option>
                </ui-dropdown>
              </div>
              <div>
                <label>Animation</label>
                <ui-dropdown id="stAnim" onchange="updateST()" class="st-input">
                  <option value="scale">Scale</option>
                  <option value="fade">Fade</option>
                  <option value="slide">Slide</option>
                </ui-dropdown>
              </div>
              <div>
                <label>Options</label>
                <div style="display: flex; flex-direction: column; gap: 8px;">
                  <ui-checkbox id="stProg" label="Progress Tracking" oncheckboxchange="updateST()"></ui-checkbox>
                  <ui-checkbox id="stProgVal" label="Show % Value" oncheckboxchange="updateST()"></ui-checkbox>
                  <ui-checkbox id="stGlass" label="Glassy Effect" oncheckboxchange="updateST()"></ui-checkbox>
                  <ui-checkbox id="stMag" checked label="Magnetic Effect (Apex)" oncheckboxchange="updateST()"></ui-checkbox>
                  <ui-checkbox id="stDrag" label="Draggable Support (Apex)" oncheckboxchange="updateST()"></ui-checkbox>
                  <ui-checkbox id="stJump" checked label="Quick Jump Menu (Apex)" oncheckboxchange="updateST()"></ui-checkbox>
                  <ui-checkbox id="stHide" label="Auto Hide" oncheckboxchange="updateST()"></ui-checkbox>
                </div>
              </div>
              <div style="grid-column: span 2;">
                <label>Label</label>
                <ui-input type="text" id="stLabel" placeholder="Optional text label" oninput="updateST()" class="st-input">
              </div>
            </div>
          </div>
          
          <div style="flex: 1.5; min-width: 350px;">
            <div id="stPreviewContainer" class="scroll-box" style="height: 450px;">
              <h4 style="position: sticky; top: 0; background:var(--bg-secondary,#f9fafb); margin: 0; padding: 10px 0; z-index: 5;">Preview Area (Scroll Down)</h4>
              ${Array.from({ length: 80 }, (_, i) => `<p>Content line ${i + 1} - Notice the behavior as you scroll.</p>`).join('')}
            </div>
            <pre id="stCode" style="background: #1e293b; color: #f8fafc; padding: 16px; border-radius: 8px; font-size: 13px; margin-top: 16px; overflow-x: auto;"></pre>
          </div>
        </div>
      </div>
      <style>
        .st-input { width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 6px; margin-top: 4px; }
        .check-container { display: flex; align-items: center; gap: 8px; font-size: 14px; cursor: pointer; }
        .scroll-top-bottom-center { left: 50%; bottom: 24px; transform: translateX(-50%); }
        .scroll-top-top-center { top: 24px; left: 50%; transform: translateX(-50%); }
        .scroll-top-center-left { top: 50%; left: 24px; transform: translateY(-50%); }
        .scroll-top-center-right { top: 50%; right: 24px; transform: translateY(-50%); }
        .scroll-top-center { top: 50%; left: 50%; transform: translate(-50%, -50%); }
        .radio-group { display: flex; gap: 10px; margin-top: 4px; }
        label { font-size: 13px; font-weight: 600; color: #4b5563; }
      </style>
    `;

    window.showSTInContainer = function () {
      const container = document.getElementById('scrollTopDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="text-align: center; padding: 20px;">
        <h4>In-Container Navigation</h4>
        <p style="color: #6b7280; margin-bottom: 20px;">Button stays relative to this box, not the screen</p>
        <div id="scrollBoxDemo" style="position: relative; height: 300px; overflow-y: auto; border: 2px dashed #ccc; border-radius: 12px; background:var(--bg-primary,white); margin: 0 auto; max-width: 500px;">
           <div style="height: 1500px; padding: 20px; background: linear-gradient(to bottom, #fff, #f3f4f6);">
              <p>Scroll down inside this box...</p>
              <h1 id="box-top">Box Top</h1>
              <div style="margin-top: 600px;">
                 <h2 id="box-middle" data-ui-anchor-title="📍 Middle Point">Middle Point</h2>
              </div>
           </div>
           <ui-scroll-top 
             target="#scrollBoxDemo" 
             strategy="absolute" 
             position="bottom-right" 
             color="success" 
             show-progress="true"
             quick-jump="true"
             icon-library="lucide"
           ></ui-scroll-top>
        </div>
      </div>
    `;
    };

    window.updateST = function () {
      const container = document.getElementById('stPreviewContainer');
      const old = container.querySelector('ui-scroll-top');
      if (old) old.remove();

      const el = document.createElement('ui-scroll-top');
      el.position = document.getElementById('stPos').value;
      el.color = document.getElementById('stColor').value;
      el.variant = document.getElementById('stVariant').value;
      el.size = Array.from(document.getElementsByName('stSize')).find(r => r.checked).value;
      el.shape = document.getElementById('stShape').value;
      el.animation = document.getElementById('stAnim').value;
      el.showProgress = document.getElementById('stProg').checked;
      el.autoHide = document.getElementById('stHide').checked;
      el.label = document.getElementById('stLabel').value;
      el.threshold = 50;
      el.target = '#stPreviewContainer';
      el.mode = document.getElementById('stMode').value;
      el.showProgressValue = document.getElementById('stProgVal').checked;
      el.glassy = document.getElementById('stGlass').checked;
      el.magnetic = document.getElementById('stMag').checked;
      el.quickJump = document.getElementById('stJump').checked;
      el.isDraggable = document.getElementById('stDrag').checked;
      el.iconLibrary = 'lucide';
      el.icon = 'arrow-up';
      container.appendChild(el);

      // Generate code snippet
      let code = `<ui-scroll-top\n  target="#container"`;
      if (el.position !== 'bottom-right') code += `\n  position="${el.position}"`;
      if (el.color !== 'primary') code += `\n  color="${el.color}"`;
      if (el.shape !== 'circle') code += `\n  shape="${el.shape}"`;
      if (el.size !== 'md') code += `\n  size="${el.size}"`;
      if (el.animation !== 'scale') code += `\n  animation="${el.animation}"`;
      if (el.mode !== 'top') code += `\n  mode="${el.mode}"`;
      if (el.variant !== 'solid') code += `\n  variant="${el.variant}"`;
      if (el.size !== 'md') code += `\n  size="${el.size}"`;
      if (el.showProgress) code += `\n  show-progress="true"`;
      if (el.showProgressValue) code += `\n  show-progress-value="true"`;
      if (el.glassy) code += `\n  glassy="true"`;
      if (el.magnetic) code += `\n  magnetic="true"`;
      if (el.isDraggable) code += `\n  is-draggable="true"\n  persistence-id="demo-scroll-top"`;
      if (el.quickJump) code += `\n  quick-jump="true"`;
      if (el.autoHide) code += `\n  auto-hide="true"`;
      if (el.label) code += `\n  label="${el.label}"`;
      code += `\n  icon-library="lucide"\n  icon="arrow-up"`;
      code += `\n></ui-scroll-top>`;
      document.getElementById('stCode').textContent = code;
    };

    updateST();
  };

  showScrollTopStandard();
}
