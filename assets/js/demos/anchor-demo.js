// Enhanced Anchor Component Demo
export function initAnchorDemo() {
  const section = document.getElementById('anchor');
  if (!section) return;

  section.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 20px;">
      <h2 style="margin: 0;">⚓ Anchor Component</h2>
      <div style="display: flex; gap: 10px;">
        <ui-button id="openPlaygroundBtn" variant="outline" color="primary" label="🎮 Open Playground" size="md"ui-button>
             </div>
    </div>
    <p>Smooth scrolling navigation links with active indicator. Perfect for documentation pages and long content.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button id="verticalModeBtn"  label="📍 Vertical Mode" variant="outline"></ui-button>
      <ui-button id="horizontalModeBtn"  label="↔️ Horizontal Mode" variant="outline"></ui-button>
      <ui-button id="docsModeBtn"  label="📚 Documentation" variant="outline"></ui-button>
      <ui-button id="comparisonModeBtn"  label="🔄 Side by Side" variant="outline"></ui-button>
      <ui-button id="advancedModeBtn"  label="⚡ Advanced" variant="outline"></ui-button>
      <ui-button id="playgroundModeBtn"  label="🎮 Playground" variant="outline"></ui-button>
    </div>

    <div id="anchorDemoContainer" style="margin-top: 20px;"></div>
  `;

  // Demo Map
  const demoMap = {
    verticalModeBtn: () => showVerticalAnchor(),
    horizontalModeBtn: () => showHorizontalAnchor(),
    docsModeBtn: () => showDocumentationAnchor(),
    comparisonModeBtn: () => showComparisonDemo(),
    advancedModeBtn: () => showAdvancedFeatures(),
    playgroundModeBtn: () => showAnchorPlayground(),
    openPlaygroundBtn: () => window.open('/index-anchor-playground.html', '_blank'),
  
  };

  setTimeout(() => {
    Object.entries(demoMap).forEach(([id, func]) => {
      document.getElementById(id)?.addEventListener('click', func);
    });

    showVerticalAnchor();
  }, 100);

  const anchorDemoContainer = document.getElementById('anchorDemoContainer');

  // Vertical Anchor Demo
  const showVerticalAnchor = function () {
    if (!anchorDemoContainer) return;

    anchorDemoContainer.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">📍</span>
          Vertical Anchor Navigation
        </h3>
        <p style="color: #6b7280;">Classic vertical navigation with active indicator line - perfect for sidebar navigation.</p>
        
        <div style="display: grid; grid-template-columns: 220px 1fr; gap: 40px; margin-top: 30px; min-height: 600px;">
          <div style="position: sticky; top: 20px; height: fit-content; background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
            <h4 style="margin: 0 0 15px 0; color: #374151; font-size: 13px; text-transform: uppercase; letter-spacing: 0.5px;">Navigation</h4>
            <ui-anchor id="verticalAnchor" scroll-container=".section-container"></ui-anchor>
          </div>

          <div>
            <div id="v-intro" style="padding: 35px; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; border-radius: 12px; margin-bottom: 30px; min-height: 350px; box-shadow: 0 4px 12px rgba(102, 126, 234, 0.3);">
              <h3 style="color: white; margin-top: 0; font-size: 28px;">🚀 Introduction</h3>
              <p style="font-size: 16px; line-height: 1.8;">Welcome to the Anchor component. This component provides smooth scrolling navigation with automatic active state tracking.</p>
              <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 15px; margin-top: 25px;">
                <div style="background: rgba(255,255,255,0.2); padding: 18px; border-radius: 8px; backdrop-filter: blur(10px);">
                  <div style="font-size: 28px; margin-bottom: 8px;">🎯</div>
                  <strong>Auto Tracking</strong>
                  <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Automatic scroll position detection</p>
                </div>
                <div style="background: rgba(255,255,255,0.2); padding: 18px; border-radius: 8px; backdrop-filter: blur(10px);">
                  <div style="font-size: 28px; margin-bottom: 8px;">⚡</div>
                  <strong>Performance</strong>
                  <p style="margin: 5px 0 0; font-size: 14px; opacity: 0.9;">Optimized scroll handling</p>
                </div>
              </div>
            </div>

            <div id="v-features" style="padding: 35px; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); color: white; border-radius: 12px; margin-bottom: 30px; min-height: 350px; box-shadow: 0 4px 12px rgba(240, 147, 251, 0.3);">
              <h3 style="color: white; margin-top: 0; font-size: 28px;">✨ Key Features</h3>
              <p style="font-size: 16px; line-height: 1.8;">Packed with powerful features for modern web applications:</p>
              <ul style="font-size: 15px; line-height: 2; margin-top: 20px;">
                <li><strong>Automatic Active State:</strong> Detects which section is in view</li>
                <li><strong>Smooth Scrolling:</strong> Native smooth scroll behavior</li>
                <li><strong>Visual Indicator:</strong> Animated line showing active section</li>
                <li><strong>Dual Orientation:</strong> Vertical and horizontal layouts</li>
              </ul>
            </div>

            <div id="v-usage" style="padding: 35px; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); color: #1a202c; border-radius: 12px; margin-bottom: 30px; min-height: 350px; box-shadow: 0 4px 12px rgba(79, 172, 254, 0.3);">
              <h3 style="margin-top: 0; font-size: 28px;">💻 Basic Usage</h3>
              <p style="font-size: 16px; line-height: 1.8;">Get started with the anchor component in seconds:</p>
              
              <div style="background:var(--bg-primary,white); padding: 20px; border-radius: 8px; margin-top: 20px; box-shadow: 0 2px 8px rgba(0,0,0,0.1);">
                <pre style="background: #1a202c; color: #fbbf24; padding: 18px; border-radius: 6px; overflow-x: auto;"><code>&lt;ui-anchor
  links='[{"id":"1","label":"Section 1","target":"v-intro"}]'
  orientation="vertical"
  scroll-container=".section-container"
&gt;&lt;/ui-anchor&gt;</code></pre>
              </div>
            </div>

            <div id="v-api" style="padding: 35px; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); color: #1a202c; border-radius: 12px; margin-bottom: 30px; min-height: 350px; box-shadow: 0 4px 12px rgba(67, 233, 123, 0.3);">
              <h3 style="margin-top: 0; font-size: 28px;">🔧 API Reference</h3>
              <p style="font-size: 16px; line-height: 1.8;">The updated component supports new features like <code>affix</code>, <code>type="dot"</code>, and <code>show-progress="true"</code>.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const anchor = document.getElementById('verticalAnchor');
      if (anchor) {
        anchor.links = JSON.stringify([
          { id: 'link1', label: '🚀 Introduction', target: 'v-intro' },
          { id: 'link2', label: '✨ Key Features', target: 'v-features' },
          { id: 'link3', label: '💻 Basic Usage', target: 'v-usage' },
          { id: 'link4', label: '🔧 API Reference', target: 'v-api' },
        ]);
        anchor.orientation = 'vertical';
        anchor.scrollOffset = 100;
        anchor.showIndicator = true;
      }
    }, 200);
  };

  // Horizontal Anchor Demo
  const showHorizontalAnchor = function () {
    if (!anchorDemoContainer) return;

    anchorDemoContainer.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">↔️</span>
          Horizontal Anchor Navigation
        </h3>
        <p style="color: #6b7280;">Tab-style navigation that sticks to the top - ideal for content sections and landing pages.</p>
        
        <div style="margin-top: 30px;">
          <div style="position: sticky; top: 0; background:var(--bg-primary,white); z-index: 10; padding: 20px; border-bottom: 2px solid #e5e7eb; margin-bottom: 30px; margin-left: -30px; margin-right: -30px; padding-left: 30px; padding-right: 30px; box-shadow: 0 4px 6px rgba(0,0,0,0.05);">
            <ui-anchor id="horizontalAnchor" orientation="horizontal" scroll-container=".section-container"></ui-anchor>
          </div>

          <div>
            <div id="h-overview" style="padding: 40px; background: linear-gradient(135deg, #ffecd2 0%, #fcb69f 100%); border-radius: 12px; margin-bottom: 30px; min-height: 600px; box-shadow: 0 4px 12px rgba(252, 182, 159, 0.3);">
              <h3 style="margin-top: 0; font-size: 28px; color: #1a202c;">📊 Overview</h3>
              <p style="font-size: 17px; line-height: 1.8; color: #374151;">The horizontal orientation creates a tab-like navigation experience, perfect for modern web applications and landing pages.</p>
            </div>

            <div id="h-implementation" style="padding: 40px; background: linear-gradient(135deg, #a8edea 0%, #fed6e3 100%); border-radius: 12px; margin-bottom: 30px; min-height: 600px; box-shadow: 0 4px 12px rgba(168, 237, 234, 0.3);">
              <h3 style="margin-top: 0; font-size: 28px; color: #1a202c;">💻 Implementation Guide</h3>
              <p style="font-size: 17px; line-height: 1.8; color: #374151;">Simple integration with any content structure.</p>
            </div>

            <div id="h-customization" style="padding: 40px; background: linear-gradient(135deg, #ff9a9e 0%, #fecfef 100%); border-radius: 12px; margin-bottom: 30px; min-height: 600px; box-shadow: 0 4px 12px rgba(255, 154, 158, 0.3);">
              <h3 style="margin-top: 0; font-size: 28px; color: #1a202c;">🎨 Customization Options</h3>
              <p style="font-size: 17px; line-height: 1.8; color: #374151;">Tailor the appearance and behavior to match your design system.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const anchor = document.getElementById('horizontalAnchor');
      if (anchor) {
        anchor.links = JSON.stringify([
          { id: 'h-link1', label: '📊 Overview', target: 'h-overview' },
          { id: 'h-link2', label: '💻 Implementation', target: 'h-implementation' },
          { id: 'h-link3', label: '🎨 Customization', target: 'h-customization' },
        ]);
        anchor.orientation = 'horizontal';
        anchor.scrollOffset = 100;
        anchor.showIndicator = true;
      }
    }, 200);
  };

  // Documentation Style Demo
  const showDocumentationAnchor = function () {
    if (!anchorDemoContainer) return;

    anchorDemoContainer.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">📚</span>
          Documentation Style Navigation
        </h3>
        <p style="color: #6b7280;">Professional documentation layout with sidebar navigation - perfect for technical docs and guides.</p>
        
        <div style="display: grid; grid-template-columns: 270px 1fr; gap: 35px; margin-top: 30px; background:var(--bg-secondary,#f9fafb); padding: 30px; border-radius: 12px;">
          <div style="position: sticky; top: 20px; height: fit-content; background:var(--bg-primary,white); padding: 25px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <ui-anchor id="docsAnchor" scroll-container=".section-container"></ui-anchor>
          </div>

          <div style="background:var(--bg-primary,white); padding: 45px; border-radius: 10px; box-shadow: 0 2px 8px rgba(0,0,0,0.08);">
            <div id="doc-getting-started" style="margin-bottom: 60px; min-height: 400px;">
              <h2 style="color: #1f2937; border-bottom: 3px solid #10b981; padding-bottom: 12px; margin-top: 0; font-size: 32px;">Getting Started</h2>
              <p>Built with performance and accessibility in mind.</p>
            </div>

            <div id="doc-props" style="margin-bottom: 60px; min-height: 400px;">
              <h2 style="color: #1f2937; border-bottom: 3px solid #10b981; padding-bottom: 12px; font-size: 32px;">Properties</h2>
              <p>Configure the anchor component using these comprehensive properties.</p>
            </div>

            <div id="doc-events" style="margin-bottom: 60px; min-height: 400px;">
              <h2 style="color: #1f2937; border-bottom: 3px solid #f59e0b; padding-bottom: 12px; font-size: 32px;">Events</h2>
              <p>Listen to events for custom integrations.</p>
            </div>

            <div id="doc-examples" style="margin-bottom: 60px; min-height: 400px;">
              <h2 style="color: #1f2937; border-bottom: 3px solid #8b5cf6; padding-bottom: 12px; font-size: 32px;">Examples</h2>
              <p>Explore practical implementation examples.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const anchor = document.getElementById('docsAnchor');
      if (anchor) {
        anchor.links = JSON.stringify([
          { id: 'doc1', label: 'Getting Started', target: 'doc-getting-started' },
          { id: 'doc2', label: 'Properties', target: 'doc-props' },
          { id: 'doc3', label: 'Events', target: 'doc-events' },
          { id: 'doc4', label: 'Examples', target: 'doc-examples' },
        ]);
        anchor.orientation = 'vertical';
        anchor.scrollOffset = 100;
        anchor.showIndicator = true;
      }
    }, 200);
  };

  // Side by Side Comparison
  const showComparisonDemo = function () {
    if (!anchorDemoContainer) return;

    anchorDemoContainer.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">🔄</span>
          Side by Side Comparison
        </h3>
        <p style="color: #6b7280;">Compare vertical and horizontal orientations.</p>
        
        <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 30px; margin-top: 30px;">
          <div style="background:var(--bg-secondary,#f9fafb); padding: 25px; border-radius: 10px; border: 2px solid #e5e7eb;">
            <ui-anchor id="comparisonVertical" scroll-container=".section-container"></ui-anchor>
            <div id="comp-v-1" style="margin-top: 20px; height: 300px; background: #667eea; border-radius: 8px;"></div>
            <div id="comp-v-2" style="margin-top: 20px; height: 300px; background: #f093fb; border-radius: 8px;"></div>
          </div>
          <div style="background:var(--bg-secondary,#f9fafb); padding: 25px; border-radius: 10px; border: 2px solid #e5e7eb;">
            <ui-anchor id="comparisonHorizontal" orientation="horizontal" scroll-container=".section-container"></ui-anchor>
            <div id="comp-h-1" style="margin-top: 20px; height: 300px; background: #ffecd2; border-radius: 8px;"></div>
            <div id="comp-h-2" style="margin-top: 20px; height: 300px; background: #a8edea; border-radius: 8px;"></div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const vAnchor = document.getElementById('comparisonVertical');
      if (vAnchor) {
        vAnchor.links = JSON.stringify([
          { id: 'cv1', label: 'Section 1', target: 'comp-v-1' },
          { id: 'cv2', label: 'Section 2', target: 'comp-v-2' },
        ]);
      }
      const hAnchor = document.getElementById('comparisonHorizontal');
      if (hAnchor) {
        hAnchor.links = JSON.stringify([
          { id: 'ch1', label: 'Section 1', target: 'comp-h-1' },
          { id: 'ch2', label: 'Section 2', target: 'comp-h-2' },
        ]);
      }
    }, 200);
  };

  // Advanced Features Demo
  const showAdvancedFeatures = function () {
    if (!anchorDemoContainer) return;

    anchorDemoContainer.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">⚡</span>
          Advanced Features & Use Cases
        </h3>
        
        <div style="display: grid; grid-template-columns: 250px 1fr; gap: 35px; margin-top: 30px;">
          <div style="position: sticky; top: 20px; height: fit-content;">
             <div style="margin-bottom: 20px;">
               <h4 style="font-size: 11px; color:var(--text-secondary,#64748b); margin-bottom: 5px; text-transform: uppercase;">Standard Line</h4>
               <ui-anchor id="advancedAnchor" scroll-container=".section-container"></ui-anchor>
             </div>
             <div>
               <h4 style="font-size: 11px; color:var(--text-secondary,#64748b); margin-bottom: 5px; text-transform: uppercase;">Premium Dots</h4>
               <ui-anchor id="dotAnchor" type="dot" show-progress="true" scroll-container=".section-container"></ui-anchor>
             </div>
          </div>

          <div>
            <div id="adv-autogen" style="background:var(--bg-primary,white); border:1px solid var(--border-default,#e5e7eb); padding: 35px; border-radius: 12px; margin-bottom: 30px;">
              <h3 style="margin: 0 0 15px 0; font-size: 24px; color: #f43f5e;">✨ Auto-generation</h3>
              <div id="auto-gen-target" style="padding: 20px; background:var(--bg-secondary,#f9fafb); border-radius: 8px;">
                <h1 id="gen-title">1. Automated Heading</h1>
                <p>Detected via <code>auto-gen-container</code>.</p>
                <h1 id="gen-other">2. Another Heading</h1>
              </div>
            </div>

            <div id="adv-affix" style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); color: white; padding: 35px; border-radius: 12px; margin-bottom: 30px; min-height: 400px;">
              <h3 style="margin: 0 0 15px 0; font-size: 24px;">🔗 Affix (Sticky)</h3>
              <p>The anchor will stay in view during scroll.</p>
            </div>

            <div id="adv-progress" style="background: linear-gradient(135deg, #10b981 0%, #10b981 100%); color: white; padding: 35px; border-radius: 12px; min-height: 400px;">
              <h3 style="margin: 0 0 15px 0; font-size: 24px;">📉 Progress Tracking</h3>
              <p>Visual progress of scroll position.</p>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const anchorLine = document.getElementById('advancedAnchor');
      if (anchorLine) {
        anchorLine.links = JSON.stringify([
          { id: 'a1', label: 'Auto-gen', target: 'adv-autogen' },
          { id: 'a2', label: 'Affix Mode', target: 'adv-affix' },
          { id: 'a3', label: 'Progress', target: 'adv-progress' },
        ]);
      }

      const anchorDot = document.getElementById('dotAnchor');
      if (anchorDot) {
        anchorDot.links = JSON.stringify([
          { id: 'd1', label: 'Auto-gen', target: 'adv-autogen' },
          { id: 'd2', label: 'Affix Mode', target: 'adv-affix' },
          { id: 'd3', label: 'Progress', target: 'adv-progress' },
        ]);
        anchorDot.type = 'dot';
        anchorDot.showProgress = true;
      }
    }, 200);
  };

  // Interactive Playground
  const showAnchorPlayground = function () {
    if (!anchorDemoContainer) return;

    anchorDemoContainer.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary,white); border-radius: 12px; padding: 30px; box-shadow: 0 4px 16px rgba(0, 0, 0, 0.1);">
        <h3 style="margin-top: 0; display: flex; align-items: center; gap: 10px;">
          <span style="font-size: 24px;">🎮</span>
          Interactive Playground
        </h3>
        
        <div style="display: grid; grid-template-columns: 280px 1fr; gap: 30px; margin-top: 25px;">
          <div style="background:var(--bg-secondary,#f9fafb); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb); height: fit-content;">
            <h4 style="margin: 0 0 15px 0;">Settings</h4>
            
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div>
                <label style="display:block; font-size:12px; margin-bottom:4px; font-weight:500;">Orientation</label>
                <ui-dropdown id="playOrientation" value="vertical" options='[
                  {"label": "Vertical", "value": "vertical"},
                  {"label": "Horizontal", "value": "horizontal"}
                ]'></ui-dropdown>
              </div>
              
              <div>
                <label style="display:block; font-size:12px; margin-bottom:4px; font-weight:500;">Type</label>
                <ui-dropdown id="playType" value="line" options='[
                  {"label": "Line (Default)", "value": "line"},
                  {"label": "Dot", "value": "dot"}
                ]'></ui-dropdown>
              </div>

              <ui-checkbox id="playShowIndicator" label="Show Indicator" checked="true"></ui-checkbox>
              <ui-checkbox id="playShowProgress" label="Show Progress"></ui-checkbox>
              <ui-checkbox id="playShowNumbers" label="Show Numbers"></ui-checkbox>
              <ui-checkbox id="playCollapsible" label="Collapsible"></ui-checkbox>
            </div>
            
            <div style="margin-top: 24px;">
              <div style="background: #1e293b; padding: 12px; border-radius: 6px; position: relative;">
                 <ui-button id="copyAnchorBtn" variant="ghost" color="neutral" label="Copy" size="md"yle="position: absolute; top: 6px; right: 6px;"></ui-button>
                 <code id="anchorCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 11px; display: block; overflow-x: auto; white-space: pre-wrap;"></code>
              </div>
            </div>
          </div>

          <div>
            <h4 style="margin: 0 0 10px;">Preview</h4>
            <div style="border:1px solid var(--border-default,#e5e7eb); border-radius: 8px; height: 500px; overflow: hidden; display: flex;">
               <!-- Preview Layout depends on orientation -->
               <div id="playgroundPreviewArea" style="width: 100%; height: 100%; overflow: auto; scroll-behavior: smooth; position: relative;">
                  <div style="padding: 20px;">
                      <div id="play-anchor-container" style="position: sticky; top: 0; z-index: 10; padding: 10px; background:var(--bg-primary,white); margin-bottom: 20px;"></div>
                      
                      <div id="play-s1" style="height: 400px; background:var(--accent-red-soft,#fee2e2); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                         <h3>Section 1</h3>
                         <p>Scroll content...</p>
                      </div>
                      <div id="play-s2" style="height: 400px; background:var(--accent-yellow-soft,#fef3c7); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                         <h3>Section 2</h3>
                         <p>Scroll content...</p>
                      </div>
                      <div id="play-s3" style="height: 400px; background:var(--accent-green-soft,#d1fae5); border-radius: 8px; padding: 20px; margin-bottom: 20px;">
                         <h3>Section 3</h3>
                         <p>Scroll content...</p>
                      </div>
                  </div>
               </div>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      document.getElementById('copyAnchorBtn')?.addEventListener('click', () => copyAnchorCode());

      const ctrls = anchorDemoContainer.querySelectorAll('ui-checkbox, ui-dropdown');
      ctrls.forEach(ctrl => {
        const eventName = ctrl.tagName === 'UI-CHECKBOX' ? 'checkboxChange' : 'dropdownChange';
        ctrl.addEventListener(eventName, () => updatePlaygroundAnchor());
      });
      updatePlaygroundAnchor();
    }, 100);
  };

  const copyAnchorCode = () => {
    const codeBlock = document.getElementById('anchorCodeBlock');
    if (!codeBlock) return;
    const code = codeBlock.innerText;
    const btn = document.getElementById('copyAnchorBtn');
    if (!btn) return;

    navigator.clipboard.writeText(code).then(() => {
      const originalLabel = btn.label;
      btn.label = 'Copied!';
      setTimeout(() => (btn.label = originalLabel), 2000);
    });
  };

  const updatePlaygroundAnchor = () => {
    const val = id => {
      const el = document.getElementById(id);
      if (!el) return null;
      return el.tagName === 'UI-CHECKBOX' ? el.checked : el.value;
    };

    const orientation = val('playOrientation');
    const type = val('playType');
    const showIndicator = val('playShowIndicator');
    const showProgress = val('playShowProgress');
    const showNumbers = val('playShowNumbers');
    const collapsible = val('playCollapsible');

    const container = document.getElementById('play-anchor-container');
    const previewArea = document.getElementById('playgroundPreviewArea');
    if (!container || !previewArea) return;

    // Reset container style for horizontal logic
    container.innerHTML = '';

    // Create Anchor
    const anchor = document.createElement('ui-anchor');
    anchor.id = 'interactiveAnchor';
    anchor.setAttribute('orientation', orientation);
    if (type !== 'line') anchor.setAttribute('type', type);
    if (showIndicator) anchor.setAttribute('show-indicator', 'true');
    if (showProgress) anchor.setAttribute('show-progress', 'true');
    if (showNumbers) anchor.setAttribute('show-numbers', 'true');
    if (collapsible) anchor.setAttribute('collapsible', 'true');
    anchor.scrollContainer = '#playgroundPreviewArea';

    container.appendChild(anchor);

    setTimeout(() => {
      const el = document.getElementById('interactiveAnchor');
      if (el) {
        el.items = JSON.stringify([
          {
            id: 'p1',
            label: 'Section 1',
            target: 'play-s1',
            children: [
              { id: 'p1-1', label: 'Subsection A', target: 'play-s1' },
              { id: 'p1-2', label: 'Subsection B', target: 'play-s1' },
            ],
          },
          { id: 'p2', label: 'Section 2', target: 'play-s2' },
          { id: 'p3', label: 'Section 3', target: 'play-s3' },
        ]);
      }
    }, 50);

    // Update Code Block
    const codeBlock = document.getElementById('anchorCodeBlock');
    if (codeBlock) {
      let props = '';
      if (orientation !== 'vertical') props += ` orientation="${orientation}"`;
      if (type !== 'line') props += ` type="${type}"`;
      if (showIndicator) props += ` show-indicator`;
      if (showProgress) props += ` show-progress`;
      if (showNumbers) props += ` show-numbers`;
      if (collapsible) props += ` collapsible`;

      codeBlock.innerText = `<ui-anchor${props}\n  items='[{"id":"p1","label":"Section 1","target":"play-s1"},...]'\n  scroll-container="#content-area"\n></ui-anchor>`;
    }
  };
}
