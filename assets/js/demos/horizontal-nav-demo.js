// Horizontal Nav Demo
export function initHorizontalNavDemo() {
  const section = document.getElementById('horizontal-nav');
  if (!section) return;

  section.innerHTML = `
    
    <p>Horizontal navigation bars with various styles and alignments.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showInteractiveHorizontalNav()" variant="outline">🎮 Playground</ui-button>
      <ui-button onclick="showBasicHorizontalNav()" variant="outline">Basic</ui-button>
      <ui-button onclick="showVariantHorizontalNav()" variant="outline">Variants</ui-button>
      <ui-button onclick="showIconHorizontalNav()" variant="outline">With Icons</ui-button>
      <ui-button onclick="showListDisplayHorizontalNav()" variant="outline">List Display</ui-button>
    </div>

    <div id="horizontalNavDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    window.showBasicHorizontalNav = function () {
      const container = document.getElementById('horizontalNavDemoContainer');
      if (!container) return;

      const items = [
        { id: 'home', label: 'Home', active: true },
        { id: 'products', label: 'Products' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
      ];

      container.innerHTML = `
        <div class="demo-block">
          <h3>Basic Horizontal Navigation</h3>
          <ui-horizontal-nav id="basicNav"></ui-horizontal-nav>
        </div>
      `;

      setTimeout(() => {
        const nav = document.getElementById('basicNav');
        if (nav) nav.items = items;
      }, 50);
    };

    window.showVariantHorizontalNav = function () {
      const container = document.getElementById('horizontalNavDemoContainer');
      if (!container) return;

      const items = [
        { id: 'home', label: 'Home', active: true },
        { id: 'products', label: 'Products' },
        { id: 'about', label: 'About' },
        { id: 'contact', label: 'Contact' },
      ];

      container.innerHTML = `
        <div class="demo-block">
          <h3>Navigation Variants</h3>
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div>
              <h4 style="margin: 0 0 12px;">Default</h4>
              <ui-horizontal-nav id="defaultNav" variant="default"></ui-horizontal-nav>
            </div>
            <div>
              <h4 style="margin: 0 0 12px;">Pills</h4>
              <ui-horizontal-nav id="pillsNav" variant="pills"></ui-horizontal-nav>
            </div>
            <div>
              <h4 style="margin: 0 0 12px;">Underline</h4>
              <ui-horizontal-nav id="underlineNav" variant="underline"></ui-horizontal-nav>
            </div>
            <div>
              <h4 style="margin: 0 0 12px;">Segmented</h4>
              <ui-horizontal-nav id="segmentedNav" variant="segmented"></ui-horizontal-nav>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        ['defaultNav', 'pillsNav', 'underlineNav', 'segmentedNav'].forEach(id => {
          const nav = document.getElementById(id);
          if (nav) nav.items = items;
        });
      }, 50);
    };

    window.showIconHorizontalNav = function () {
      const container = document.getElementById('horizontalNavDemoContainer');
      if (!container) return;

      const items = [
        { id: 'home', label: 'Home', icon: '🏠', active: true },
        { id: 'products', label: 'Products', icon: '📦', badge: '5' },
        { id: 'notifications', label: 'Notifications', icon: '🔔', badge: '12' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
      ];

      container.innerHTML = `
        <div class="demo-block">
          <h3>Navigation with Icons and Badges</h3>
          <ui-horizontal-nav id="iconNav" variant="pills"></ui-horizontal-nav>
        </div>
      `;

      setTimeout(() => {
        const nav = document.getElementById('iconNav');
        if (nav) nav.items = items;
      }, 50);
    };

    window.showListDisplayHorizontalNav = function () {
      const container = document.getElementById('horizontalNavDemoContainer');
      if (!container) return;

      const items = [
        { id: 'dashboard', label: 'Dashboard', icon: '📊', active: true },
        { id: 'projects', label: 'Projects', icon: '📁', badge: '8' },
        { id: 'tasks', label: 'Tasks', icon: '✓', badge: '23' },
        { id: 'team', label: 'Team', icon: '👥' },
        { id: 'reports', label: 'Reports', icon: '📈' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
      ];

      container.innerHTML = `
        <div class="demo-block">
          <h3>List Display Format</h3>
          <p>Display navigation items as a vertical list, perfect for sidebars or menu panels.</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 20px;">
            <div style="background:var(--bg-secondary,#f9fafb); padding: 16px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
              <h4 style="margin: 0 0 12px;">Default List</h4>
              <ui-horizontal-nav id="listNav1" display-as="list"></ui-horizontal-nav>
            </div>
            <div style="background:var(--bg-secondary,#f9fafb); padding: 16px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
              <h4 style="margin: 0 0 12px;">Pills List</h4>
              <ui-horizontal-nav id="listNav2" display-as="list" variant="pills"></ui-horizontal-nav>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        ['listNav1', 'listNav2'].forEach(id => {
          const nav = document.getElementById(id);
          if (nav) nav.items = items;
        });
      }, 50);
    };

    window.showInteractiveHorizontalNav = function () {
      const container = document.getElementById('horizontalNavDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div style="background-color:var(--bg-primary,white); border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
          <h3>🎮 Interactive Playground</h3>
          <div style="display: flex; gap: 30px; flex-wrap: wrap; margin-top: 20px;">
            <div style="flex: 1; min-width: 300px;">
              <div style="display: flex; flex-direction: column; gap: 15px;">
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Variant:</label>
                  <ui-dropdown id="navVariant" onchange="updateInteractiveNav()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                    <option value="default">Default</option>
                    <option value="pills" selected>Pills</option>
                    <option value="underline">Underline</option>
                    <option value="segmented">Segmented</option>
                  </ui-dropdown>
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Size:</label>
                  <ui-dropdown id="navSize" onchange="updateInteractiveNav()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                    <option value="sm">Small</option>
                    <option value="md" selected>md</option>
                    <option value="lg">Large</option>
                  </ui-dropdown>
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Alignment:</label>
                  <ui-dropdown id="navAlign" onchange="updateInteractiveNav()" style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; cursor: pointer;">
                    <option value="start" selected>Start</option>
                    <option value="center">Center</option>
                    <option value="end">End</option>
                    <option value="space-between">Space Between</option>
                  </ui-dropdown>
                </div>
                
                <div>
                  <label style="display: block; margin-bottom: 5px; font-weight: 500;">Items (JSON):</label>
                  <textarea id="navItems" onchange="updateInteractiveNav()" 
                    style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; font-family: monospace; font-size: 12px; min-height: 150px;">[
  {"id": "home", "label": "Home", "icon": "🏠", "active": true},
  {"id": "products", "label": "Products", "icon": "📦", "badge": "5"},
  {"id": "about", "label": "About", "icon": "ℹ️"},
  {"id": "contact", "label": "Contact", "icon": "📧"}
]</textarea>
                </div>
              </div>
            </div>
            
            <div style="flex: 1; min-width: 300px; background-color: #f9fafb; padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb); display: flex; flex-direction: column;">
              <h4 style="margin-top: 0;">Preview:</h4>
              <div id="interactiveNavContainer" style="flex: 1;"></div>
              
               <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
                <ui-button onclick="copyHorizontalNavCode()" id="copyHorizontalNavBtn" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); color: white; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer; transition: all 0.2s;">Copy</ui-button>
                <code id="horizontalNavCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
                  &lt;ui-horizontal-nav ...&gt;&lt;/ui-horizontal-nav&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      `;

      updateInteractiveNav();
    };

    window.updateInteractiveNav = function () {
      const variant = document.getElementById('navVariant')?.value || 'pills';
      const size = document.getElementById('navSize')?.value || 'md';
      const align = document.getElementById('navAlign')?.value || 'start';
      const displayAs = document.getElementById('navDisplayAs')?.value || 'buttons';
      const itemsText = document.getElementById('navItems')?.value;

      const container = document.getElementById('interactiveNavContainer');
      if (!container) return;

      container.innerHTML = '';

      try {
        const items = JSON.parse(itemsText);
        const nav = document.createElement('ui-horizontal-nav');
        nav.setAttribute('variant', variant);
        nav.setAttribute('size', size);
        nav.setAttribute('align', align);
        nav.setAttribute('display-as', displayAs);
        nav.items = items;
        container.appendChild(nav);

        // Update Code Block
        const codeBlock = document.getElementById('horizontalNavCodeBlock');
        if (codeBlock) {
          let props = '';
          if (variant && variant !== 'default') props += ` variant="${variant}"`;
          if (size && size !== 'md') props += ` size="${size}"`;
          if (align && align !== 'start') props += ` align="${align}"`;
          if (displayAs && displayAs !== 'buttons') props += ` display-as="${displayAs}"`;

          codeBlock.innerText = `<ui-horizontal-nav${props}></ui-horizontal-nav>\n<script>\n  const nav = document.querySelector('ui-horizontal-nav');\n  nav.items = ${itemsText};\n</script>`;
        }
      } catch (error) {
        container.innerHTML = `<p style="color:var(--accent-red,#ef4444);">Invalid JSON: ${error.message}</p>`;
      }
    };

    window.copyHorizontalNavCode = () => {
      const code = document.getElementById('horizontalNavCodeBlock').innerText;
      const btn = document.getElementById('copyHorizontalNavBtn');

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

    showInteractiveHorizontalNav();
  }, 100);
}
