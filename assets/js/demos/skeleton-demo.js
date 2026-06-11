window.showSkeletonPerformance = function () {
  import('./skeleton-performance-demo.js').then(mod => mod.initSkeletonPerformanceDemo());
};
window.showSkeletonAriaLive = function () {
  const container = document.getElementById('skeletonDemoContainer');
  if (!container) return;
  let loading = true;
  container.innerHTML = `
      <h4>ARIA Live Region Demo</h4>
      <div id="ariaLiveRegion" aria-live="polite" style="min-height: 32px;">
        <ui-skeleton aria-label="Loading user data" aria-live="polite" width="200px" height="24px"></ui-skeleton>
      </div>
      <ui-button id="toggleAriaLiveBtn" >Toggle Content</ui-button>
      <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-top: 8px;">This demonstrates a live region that swaps skeleton for real content. Use a screen reader to hear announcements.</p>
    `;
  document.getElementById('toggleAriaLiveBtn').onclick = function () {
    loading = !loading;
    document.getElementById('ariaLiveRegion').innerHTML = loading
      ? '<ui-skeleton aria-label="Loading user data" aria-live="polite" width="200px" height="24px"></ui-skeleton>'
      : '<span style="color: #16a34a;">User data loaded! 🎉</span>';
  };
};
// Skeleton Demo Functions
export function initSkeletonDemo() {
  const section = document.getElementById('skeleton');
  if (!section) return;

  section.innerHTML = `
    <p>Loading placeholders with various shapes, animations, and accessibility features.</p>
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showInteractiveSkeleton()" variant="outline">🎮 Interactive Playground</ui-button>
      <ui-button onclick="showBasicSkeleton()" variant="outline">Basic</ui-button>
      <ui-button onclick="showSkeletonShapes()" variant="outline">Shapes</ui-button>
      <ui-button onclick="showSkeletonSizes()" variant="outline">Sizes</ui-button>
      <ui-button onclick="showSkeletonAnimations()" variant="outline">Animations</ui-button>
      <ui-button onclick="showSkeletonLayouts()" variant="outline">Layouts</ui-button>
      <ui-button onclick="showSkeletonAccessibility()" variant="outline">Accessibility</ui-button>
      <ui-button onclick="showSkeletonProgress()" variant="outline">Progress</ui-button>
      <ui-button onclick="showSkeletonDarkRtl()" variant="outline">Dark/RTL/Slot</ui-button>
      <ui-button onclick="showSkeletonAriaLive()" ;" variant="outline">ARIA Live Demo</ui-button>
      <ui-button onclick="showSkeletonPremium()" variant="outline">✨ Premium (New)</ui-button>
      <ui-button onclick="showSkeletonPerformance()" variant="outline">Performance</ui-button>
    </div>
    <div id="skeletonDemoContainer" style="margin-top: 20px; padding: 20px; background-color: var(--bg-primary, #f9fafb); border-radius: 8px; border: 1px solid var(--border-default, #e5e7eb);"></div>
  `;
  window.showSkeletonAccessibility = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <h4>Accessibility & ARIA</h4>
      <ui-skeleton aria-label="Loading content" aria-live="polite" animated="true" width="200px" height="24px"></ui-skeleton>
      <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-top: 8px;">This skeleton uses <code>aria-label</code> and <code>aria-live</code> for screen readers. Try using a screen reader to verify announcements.</p>
      <ui-skeleton aria-label="Loading profile" role="status" animated="true" width="120px" height="120px" shape="circle"></ui-skeleton>
      <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-top: 8px;">Role can be set to <code>status</code> or <code>progressbar</code> for accessibility.</p>
    `;
  };

  window.showSkeletonProgress = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    let progress = 0;
    container.innerHTML = `
      <h4>Determinate Progress Skeleton</h4>
      <ui-skeleton id="progressSkeleton" progress="0" width="300px" height="24px" animated="true"></ui-skeleton>
      <p id="progressLabel" style="margin-top: 8px;">Progress: 0%</p>
      <ui-button id="incProgressBtn" >Increase Progress</ui-button>
    `;
    document.getElementById('incProgressBtn').onclick = function () {
      progress = Math.min(100, progress + 10);
      document.getElementById('progressSkeleton').setAttribute('progress', progress);
      document.getElementById('progressLabel').innerText = `Progress: ${progress}%`;
    };
  };

  window.showSkeletonDarkRtl = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <h4>Dark Mode, RTL, and Custom Slot</h4>
      <div style="background: #18181b; padding: 24px; border-radius: 8px; color: #fff;">
        <ui-skeleton dark="dark" width="200px" height="24px" animated="true"></ui-skeleton>
        <span style="font-size: 13px; color: #a3e635;">Dark mode skeleton</span>
      </div>
      <div style="margin-top: 16px; direction: rtl;">
        <ui-skeleton rtl="true" width="200px" height="24px" animated="true"></ui-skeleton>
        <span style="font-size: 13px; color:var(--accent-cyan,#0ea5e9);">RTL shimmer direction</span>
      </div>
      <div style="margin-top: 16px;">
        <ui-skeleton width="200px" height="24px" animated="true">
          <span slot="custom" style="color: #f43f5e; font-size: 14px;">Custom slot content (icon, SVG, etc.)</span>
        </ui-skeleton>
        <span style="font-size: 13px; color: #f43f5e;">Custom slot demo</span>
      </div>
    `;
  };
  // Listen for skeleton show/hide events in the interactive demo
  window.addEventListener('skeletonShow', () => {
    const container = document.getElementById('skeletonDemoContainer');
    if (container) {
      container.insertAdjacentHTML('beforeend', '<div style="color: #10b981; font-size: 13px;">[Event] skeletonShow fired</div>');
    }
  });
  window.addEventListener('skeletonHide', () => {
    const container = document.getElementById('skeletonDemoContainer');
    if (container) {
      container.insertAdjacentHTML('beforeend', '<div style="color:var(--accent-red,#ef4444); font-size: 13px;">[Event] skeletonHide fired</div>');
    }
  });

  window.showSkeletonPremium = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 40px;">
        <div class="demo-block">
          <h4>Multi-Line Text (Paragraph Mode)</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 12px;">Using <code>rows="3"</code> and <code>last-row-width="60%"</code>. Intermediate rows automatically jitter for a natural feel.</p>
          <ui-skeleton shape="text" rows="3" last-row-width="60%" animated="true"></ui-skeleton>
        </div>

        <div class="demo-block">
          <h4>Pill Shapes (Tags/Badges)</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 12px;">The <code>pill</code> shape is optimized for chip and tag loading states.</p>
          <div style="display: flex; gap: 8px;">
            <ui-skeleton shape="pill" width="60px" size="md"></ui-skeleton>
            <ui-skeleton shape="pill" width="80px" size="md"></ui-skeleton>
            <ui-skeleton shape="pill" width="50px" size="md"></ui-skeleton>
          </div>
        </div>

        <div class="demo-block">
          <h4>Table Row Template</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 12px;">A complex compound skeleton for data grids using <code>template="table-row"</code>.</p>
          <div style="background:var(--bg-primary,white); border-radius: 8px; border:1px solid var(--border-default,#e5e7eb); padding: 0 16px;">
            <ui-skeleton template="table-row" animated="true"></ui-skeleton>
            <div style="border-top: 1px solid #f3f4f6;"></div>
            <ui-skeleton template="table-row" animated="true"></ui-skeleton>
            <div style="border-top: 1px solid #f3f4f6;"></div>
            <ui-skeleton template="table-row" animated="true"></ui-skeleton>
          </div>
        </div>
      </div>
    `;
  };

  // Define functions immediately so they are available
  window.showBasicSkeleton = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    const t0 = performance.now();
    container.innerHTML = `
      <div id="timer-basic" style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 8px;"></div>
      <div style="display: flex; flex-direction: column; gap: 12px;">
        <ui-skeleton width="100%" height="20px"></ui-skeleton>
        <ui-skeleton width="80%" height="20px"></ui-skeleton>
        <ui-skeleton width="60%" height="20px"></ui-skeleton>
      </div>
    `;
    const t1 = performance.now();
    document.getElementById('timer-basic').textContent = `Render time: ${(t1 - t0).toFixed(1)} ms`;
  };

  window.showSkeletonShapes = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    const t0 = performance.now();
    container.innerHTML = `
      <div id="timer-shapes" style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 8px;"></div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(140px, 1fr)); gap: 30px;">
        <div style="text-align: center;">
          <ui-skeleton shape="rectangle" width="120px" height="80px"></ui-skeleton>
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">Rectangle</p>
        </div>
        <div style="text-align: center;">
          <ui-skeleton shape="circle" width="80px" height="80px"></ui-skeleton>
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">Circle</p>
        </div>
        <div style="text-align: center;">
          <ui-skeleton shape="square" width="80px" height="80px"></ui-skeleton>
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">Square</p>
        </div>
        <div style="text-align: center;">
          <ui-skeleton shape="oval" width="120px" height="80px"></ui-skeleton>
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">Oval</p>
        </div>
        <div style="text-align: center;">
          <ui-skeleton shape="rounded-square" width="80px" height="80px" border-radius="12px"></ui-skeleton>
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">Rounded Square</p>
        </div>
        <div style="text-align: center;">
          <ui-skeleton shape="rounded-rectangle" width="120px" height="80px" border-radius="12px"></ui-skeleton>
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">Rounded Rectangle</p>
        </div>

        <div style="text-align: center;">
          <ui-skeleton shape="image" width="120px" height="80px"></ui-skeleton>
          <p style="margin-top: 8px; font-size: 14px; color: #6b7280;">Image</p>
        </div>
      </div>
    `;
    const t1 = performance.now();
    document.getElementById('timer-shapes').textContent = `Render time: ${(t1 - t0).toFixed(1)} ms`;
  };

  window.showSkeletonSizes = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    const t0 = performance.now();
    container.innerHTML = `
      <div id="timer-sizes" style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 8px;"></div>
      <div style="display: flex; flex-direction: column; gap: 20px;">
        <div>
          <h4>Small</h4>
          <ui-skeleton size="md" width="200px"></ui-skeleton>
        </div>
        <div>
          <h4>md</h4>
          <ui-skeleton size="md" width="200px"></ui-skeleton>
        </div>
        <div>
          <h4>Large</h4>
          <ui-skeleton size="lg" width="200px"></ui-skeleton>
        </div>
      </div>
    `;
    const t1 = performance.now();
    document.getElementById('timer-sizes').textContent = `Render time: ${(t1 - t0).toFixed(1)} ms`;
  };

  window.showSkeletonAnimations = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    const t0 = performance.now();
    container.innerHTML = `
      <div id="timer-animations" style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 12px;"></div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid var(--border-default, #e5e7eb);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary);">Pulse (Breathing)</h4>
          <ui-skeleton animation-type="pulse" width="100%" height="40px" border-radius="6px"></ui-skeleton>
        </div>
        
        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid var(--border-default, #e5e7eb);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary);">Wave (Diagonal Shimmer)</h4>
          <ui-skeleton animation-type="wave" width="100%" height="40px" border-radius="6px"></ui-skeleton>
        </div>

        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid var(--border-default, #e5e7eb);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary);">Shimmer</h4>
          <ui-skeleton animation-type="shimmer" width="100%" height="40px" border-radius="6px"></ui-skeleton>
        </div>

        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid var(--border-default, #e5e7eb);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary);">Sheen</h4>
          <ui-skeleton animation-type="sheen" width="100%" height="40px" border-radius="6px"></ui-skeleton>
        </div>

        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid var(--border-default, #e5e7eb);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary);">Glow</h4>
          <ui-skeleton animation-type="glow" width="100%" height="40px" border-radius="6px" color="primary"></ui-skeleton>
        </div>

        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid var(--border-default, #e5e7eb);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary);">Flicker</h4>
          <ui-skeleton animation-type="flicker" width="100%" height="40px" border-radius="6px"></ui-skeleton>
        </div>

        <!-- NEW PREMIUM ANIMATIONS -->
        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid #bfdbfe; box-shadow: 0 4px 12px rgba(59,130,246,0.08);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
            <span>Neon Sweep</span> 
            <span style="font-size:9px; background:#eff6ff; color:#2563eb; padding:2px 6px; border-radius:10px; border: 1px solid #bfdbfe;">PREMIUM</span>
          </h4>
          <ui-skeleton animation-type="neon-sweep" width="100%" height="40px" border-radius="6px" color="primary"></ui-skeleton>
        </div>

        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid #bfdbfe; box-shadow: 0 4px 12px rgba(59,130,246,0.08);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
            <span>Liquify</span> 
            <span style="font-size:9px; background:#eff6ff; color:#2563eb; padding:2px 6px; border-radius:10px; border: 1px solid #bfdbfe;">PREMIUM</span>
          </h4>
          <ui-skeleton animation-type="liquify" width="100%" height="40px" border-radius="6px"></ui-skeleton>
        </div>

        <div style="background: var(--bg-primary, white); padding: 16px; border-radius: 8px; border: 1px solid #c084fc; box-shadow: 0 4px 12px rgba(168,85,247,0.08);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary); display: flex; align-items: center; gap: 6px;">
            <span>Aurora</span> 
            <span style="font-size:9px; background:#faf5ff; color:#7c3aed; padding:2px 6px; border-radius:10px; border: 1px solid #e9d5ff;">PREMIUM</span>
          </h4>
          <ui-skeleton animation-type="aurora" width="100%" height="40px" border-radius="6px"></ui-skeleton>
        </div>
      </div>
    `;
    const t1 = performance.now();
    document.getElementById('timer-animations').textContent = `Render time: ${(t1 - t0).toFixed(1)} ms`;
  };

  window.showSkeletonLayouts = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;
    const t0 = performance.now();
    container.innerHTML = `
      <div id="timer-layouts" style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 8px;"></div>
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">

        <!-- Card Skeleton -->
        <div style="background-color:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-default,#e5e7eb); overflow:hidden; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
          <ui-skeleton shape="rectangle" width="100%" height="180px" border-radius="0"></ui-skeleton>
          <div style="padding: 16px; display:flex; flex-direction:column; gap:10px;">
            <ui-skeleton width="65%" height="20px" border-radius="6px"></ui-skeleton>
            <ui-skeleton width="100%" height="14px" border-radius="4px"></ui-skeleton>
            <ui-skeleton width="85%" height="14px" border-radius="4px"></ui-skeleton>
            <div style="display:flex; gap:8px; margin-top:4px;">
              <ui-skeleton width="80px" height="32px" border-radius="8px"></ui-skeleton>
              <ui-skeleton width="80px" height="32px" border-radius="8px"></ui-skeleton>
            </div>
          </div>
        </div>

        <!-- Profile Skeleton -->
        <div style="background-color:var(--bg-primary,white); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e5e7eb); display:flex; flex-direction:column; gap:16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
          <div style="display: flex; align-items:center; gap: 14px;">
            <ui-skeleton shape="circle" width="56px" height="56px"></ui-skeleton>
            <div style="flex: 1; display:flex; flex-direction:column; gap:8px;">
              <ui-skeleton width="140px" height="18px" border-radius="6px"></ui-skeleton>
              <ui-skeleton width="100px" height="13px" border-radius="4px"></ui-skeleton>
            </div>
          </div>
          <div style="display:flex; flex-direction:column; gap:8px;">
            <ui-skeleton width="100%" height="13px" border-radius="4px"></ui-skeleton>
            <ui-skeleton width="92%" height="13px" border-radius="4px"></ui-skeleton>
            <ui-skeleton width="75%" height="13px" border-radius="4px"></ui-skeleton>
          </div>
          <div style="display:flex; gap:8px;">
            <ui-skeleton width="70px" height="28px" border-radius="20px"></ui-skeleton>
            <ui-skeleton width="70px" height="28px" border-radius="20px"></ui-skeleton>
            <ui-skeleton width="70px" height="28px" border-radius="20px"></ui-skeleton>
          </div>
        </div>

        <!-- List Skeleton -->
        <div style="background-color:var(--bg-primary,white); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e5e7eb); display:flex; flex-direction:column; gap:16px; box-shadow: 0 2px 8px rgba(0,0,0,0.06);">
          <ui-skeleton width="120px" height="18px" border-radius="6px"></ui-skeleton>
          ${[1,2,3].map(() => `
          <div style="display: flex; align-items:center; gap: 12px;">
            <ui-skeleton shape="circle" width="40px" height="40px"></ui-skeleton>
            <div style="flex: 1; display:flex; flex-direction:column; gap:7px;">
              <ui-skeleton width="75%" height="14px" border-radius="4px"></ui-skeleton>
              <ui-skeleton width="55%" height="11px" border-radius="4px"></ui-skeleton>
            </div>
            <ui-skeleton width="48px" height="24px" border-radius="12px"></ui-skeleton>
          </div>`).join('')}
        </div>

      </div>
    `;
    const t1 = performance.now();
    document.getElementById('timer-layouts').textContent = `Render time: ${(t1 - t0).toFixed(1)} ms`;
  };

  window.showInteractiveSkeleton = function () {
    const container = document.getElementById('skeletonDemoContainer');
    if (!container) return;

    container.style.backgroundColor = 'var(--bg-primary)';
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Customize the skeleton loader properties and see changes in real-time!</p>
        
        <div style="background-color: var(--bg-secondary, #f9fafb); padding: 20px; border-radius: 8px; margin-bottom: 20px; border: 1px solid var(--border-default, #e5e7eb);">
          <h4 style="margin: 0 0 16px;">Settings</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Shape:</span>
              <ui-dropdown id="skeletonShape" oninput="updateInteractiveSkeleton()" >
                <option value="rectangle" selected>Rectangle</option>
                <option value="circle">Circle</option>
                <option value="square">Square</option>
                <option value="oval">Oval</option>
                <option value="rounded-square">Rounded Square</option>
                <option value="rounded-rectangle">Rounded Rectangle</option>
                <option value="text">Text (Rows)</option>
                <option value="pill">Pill</option>
                <option value="image">Image</option>
              </ui-dropdown>
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Template:</span>
              <ui-dropdown id="skeletonTemplate" oninput="updateInteractiveSkeleton()" >
                <option value="none" selected>None</option>
                <option value="profile">Profile</option>
                <option value="card">Card</option>
                <option value="list-item">List Item</option>
                <option value="media-object">Media Object</option>
                <option value="feed-item">Feed Item</option>
                <option value="table-row">Table Row</option>
              </ui-dropdown>
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Size:</span>
              <ui-dropdown id="skeletonSize" oninput="updateInteractiveSkeleton()" >
                <option value="sm">Small</option>
                <option value="md" selected>md</option>
                <option value="lg">Large</option>
              </ui-dropdown>
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Width:</span>
              <ui-input type="text" id="skeletonWidth" value="200px" oninput="updateInteractiveSkeleton()"
                >
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Height:</span>
              <ui-input type="text" id="skeletonHeight" value="100px" oninput="updateInteractiveSkeleton()"
                >
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Border Radius:</span>
              <ui-input type="text" id="skeletonBorderRadius" value="8px" oninput="updateInteractiveSkeleton()"
                >
            </label>
            
            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Animation Type:</span>
              <ui-dropdown id="skeletonAnimationType" oninput="updateInteractiveSkeleton()" >
                <option value="pulse" selected>Pulse</option>
                <option value="wave">Wave</option>
                <option value="shimmer">Shimmer</option>
                <option value="sheen">Sheen</option>
                <option value="glow">Glow</option>
                <option value="flicker">Flicker</option>
                <option value="neon-sweep">Neon Sweep (Premium)</option>
                <option value="liquify">Liquify (Premium)</option>
                <option value="aurora">Aurora (Premium)</option>
              </ui-dropdown>
            </label>

            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Rows (Text):</span>
              <ui-input type="number" id="skeletonRows" value="1" min="1" max="10" oninput="updateInteractiveSkeleton()"
                >
            </label>

            <label style="display: flex; flex-direction: column; gap: 4px;">
              <span>Last Row Width:</span>
              <ui-input type="text" id="skeletonLastRowWidth" value="80%" oninput="updateInteractiveSkeleton()"
                >
            </label>
            
            <ui-checkbox id="skeletonAnimated" checked label="Animated" oncheckboxchange="updateInteractiveSkeleton()"></ui-checkbox>
          </div>
          
          <div style="margin-top: 12px; padding: 12px; background-color:var(--accent-blue-soft,#eff6ff); border-radius: 6px; border: 1px solid #bfdbfe;">
            <p style="margin: 0; font-size: 13px; color:var(--accent-blue,#1e40af);">
              💡 <strong>Tip:</strong> Changes apply instantly as you type or select options!
            </p>
          </div>
        </div>
        
        <div style="display: flex; justify-content: center; align-items: center; padding: 40px; background-color: var(--bg-primary, #ffffff); border-radius: 8px; border: 1px solid var(--border-default, #e5e7eb);">
          <div id="interactiveSkeletonContainer"></div>
        </div>
        
        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button onclick="copySkeletonCode()" id="copySkeletonBtn" >Copy</ui-button>
          <code id="skeletonCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
            <ui-skeleton ...></ui-skeleton>
          </code>
        </div>
      </div>
    `;

    setTimeout(() => {
      updateInteractiveSkeleton();
    }, 50);
  };

  window.updateInteractiveSkeleton = function () {
    const shape = document.getElementById('skeletonShape')?.value || 'rectangle';
    const size = document.getElementById('skeletonSize')?.value || 'md';
    const width = document.getElementById('skeletonWidth')?.value || '200px';
    const height = document.getElementById('skeletonHeight')?.value || '100px';
    const borderRadius = document.getElementById('skeletonBorderRadius')?.value || '8px';
    const animationType = document.getElementById('skeletonAnimationType')?.value || 'pulse';
    const template = document.getElementById('skeletonTemplate')?.value || 'none';
    const rows = document.getElementById('skeletonRows')?.value || '1';
    const lastRowWidth = document.getElementById('skeletonLastRowWidth')?.value || '80%';
    const animated = document.getElementById('skeletonAnimated')?.checked !== false;

    const skeletonContainer = document.getElementById('interactiveSkeletonContainer');
    if (skeletonContainer) {
      skeletonContainer.innerHTML = `
        <ui-skeleton 
          shape="${shape}"
          size="${size}"
          width="${width}"
          height="${height}"
          template="${template}"
          rows="${rows}"
          last-row-width="${lastRowWidth}"
          border-radius="${borderRadius}"
          animation-type="${animationType}"
          ${animated ? 'animated="true"' : 'animated="false"'}>
        </ui-skeleton>
      `;

      // Generate code block
      const codeBlock = document.getElementById('skeletonCodeBlock');
      if (codeBlock) {
        let props = '';
        if (shape !== 'rectangle') props += ` shape="${shape}"`;
        if (size !== 'md') props += ` size="${size}"`;
        if (width !== '200px') props += ` width="${width}"`;
        if (height !== '100px') props += ` height="${height}"`;
        if (borderRadius !== '8px') props += ` border-radius="${borderRadius}"`;
        if (animationType !== 'pulse') props += ` animation-type="${animationType}"`;
        if (!animated) props += ' animated="false"';

        codeBlock.innerText = `<ui-skeleton${props}></ui-skeleton>`;
      }
    }
  };

  window.copySkeletonCode = () => {
    const code = document.getElementById('skeletonCodeBlock').innerText;
    const btn = document.getElementById('copySkeletonBtn');
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

  // Initialize with interactive demo
  setTimeout(() => {
    window.showInteractiveSkeleton();
  }, 100);
}
