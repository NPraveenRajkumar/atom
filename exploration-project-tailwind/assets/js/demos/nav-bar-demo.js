// Navigation Bar Demo
export function initNavBarDemo() {
  const section = document.getElementById('nav-bar');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">A sophisticated sidebar/topbar navigation component with nested items, search, and badges.</p>
    
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showDemo('default')" variant="outline">🎮 Playground</ui-button>
      <ui-button onclick="showDemo('collapsed')" variant="outline">Collapsed</ui-button>
      <ui-button onclick="showDemo('search')" variant="outline">With Search</ui-button>
      <ui-button onclick="showDemo('complex')" variant="outline">Complex Hierarchy</ui-button>
      <ui-button onclick="showDemo('overflow')" variant="outline">Limited Icons (Overflow)</ui-button>
    </div>
    
    <div id="navBarContainer" class="playground-preview" style="height: 600px; padding: 0; align-items: stretch; justify-content: flex-start; overflow: hidden;">
       <nav-bar id="demoNavBar" app-title="App Store" logo-url="/build/assets/images/logo.png" icon-library="lucide"></nav-bar>
       <div style="flex: 1; display: flex; flex-direction: column; min-width: 0;">
          <div style="height: 80px; border-bottom: 1px solid rgba(128,128,128,0.1); display: flex; align-items: center; padding: 0 32px; background: rgba(128,128,128,0.03);">
             <h3 style="margin: 0; font-size: 18px; font-weight: 600;">Dashboard</h3>
             <div style="margin-left: auto; display: flex; gap: 12px; align-items: center;">
                <div style="width: 32px; height: 32px; background: rgba(128,128,128,0.2); border-radius: 8px;"></div>
                <div style="width: 32px; height: 32px; background: var(--nav-accent, #10b981); border-radius: 50%; opacity: 0.8;"></div>
             </div>
          </div>
          <div style="flex: 1; padding: 40px; overflow-y: auto;">
             <h4 style="margin-top: 0; font-size: 24px; margin-bottom: 12px;">Welcome back, User!</h4>
             <p style="opacity: 0.7; max-width: 600px; line-height: 1.6;">This interactive preview demonstrates the <code>nav-bar</code> component in a realistic application shell. Use the toggle to test collapse behavior, or try different hierarchy modes above.</p>
             <div style="margin-top: 32px; display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 24px;">
               <div style="height: 160px; background: rgba(128,128,128,0.05); border-radius: 16px; border: 1px dashed rgba(128,128,128,0.2); display: flex; align-items: center; justify-content: center; color: rgba(128,128,128,0.4);">Widget 1</div>
               <div style="height: 160px; background: rgba(128,128,128,0.05); border-radius: 16px; border: 1px dashed rgba(128,128,128,0.2); display: flex; align-items: center; justify-content: center; color: rgba(128,128,128,0.4);">Widget 2</div>
             </div>
          </div>
       </div>
    </div>
    
    <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
      <ui-button onclick="copyNavBarCode()" id="copyNavBarBtn" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); color: white; border: none; padding: 4px 10px; border-radius: 4px; font-size: 11px; cursor: pointer; transition: all 0.2s;">Copy</ui-button>
      <code id="navBarCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
        &lt;nav-bar ...&gt;&lt;/nav-bar&gt;
      </code>
    </div>
  `;

  const topItems = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      sectionHeader: 'General',
      icon: 'home',
      active: true,
    },
    {
      id: 'store-section',
      label: 'Products',
      sectionHeader: 'Business',
      icon: 'shopping-bag',
      children: [
        { id: 'all-products', label: 'Inventory' },
        { id: 'new-product', label: 'Add Item' },
      ],
    },
    { id: 'orders', label: 'Orders', icon: 'shopping-cart', badge: '24' },
    {
      id: 'reports',
      label: 'Analytics',
      sectionHeader: 'Insights',
      icon: 'bar-chart-2',
    },
  ];

  const bottomItems = [
    {
      id: 'user-profile',
      label: 'Praveen K',
      sectionHeader: 'User',
      icon: 'user',
    },
    {
      id: 'settings',
      label: 'Settings',
      sectionHeader: 'Settings & About',
      icon: 'settings',
    },
    {
      id: 'about',
      label: 'About',
      icon: 'info',
    },
  ];

  const nav = document.getElementById('demoNavBar');
  if (nav) {
    nav.topItems = topItems;
    nav.bottomItems = bottomItems;
    nav.collapsed = false;
    setTimeout(() => window.updateNavBarCode(), 100);
  }

  window.copyNavBarCode = () => {
    const code = document.getElementById('navBarCodeBlock').innerText;
    const btn = document.getElementById('copyNavBarBtn');

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

  window.updateNavBarCode = () => {
    const nav = document.getElementById('demoNavBar');
    const codeBlock = document.getElementById('navBarCodeBlock');
    if (!nav || !codeBlock) return;

    let props = '';
    if (nav.appTitle) props += ` app-title="${nav.appTitle}"`;
    if (nav.logoUrl) props += ` logo-url="${nav.logoUrl}"`;
    if (nav.collapsed) props += ` collapsed`;
    if (nav.showSearch) props += ` show-search`;
    if (nav.maxVisibleItems > 0) props += ` max-visible-items="${nav.maxVisibleItems}"`;

    let scriptStr = '';
    // Only showing structure of items for brevity
    scriptStr += `\n  // Items Setup\n  navBar.topItems = topItems;\n  navBar.bottomItems = bottomItems;`;

    codeBlock.innerText = `<nav-bar icon-library="lucide"${props}></nav-bar>\n<script>${scriptStr}\n</script>`;
  };

  window.showDemo = type => {
    const nav = document.getElementById('demoNavBar');
    if (!nav) return;

    // Reset to defaults
    nav.collapsed = false;
    nav.showSearch = false;
    nav.maxVisibleItems = 0;
    nav.topItems = topItems;
    nav.bottomItems = bottomItems;

    switch (type) {
      case 'collapsed':
        nav.collapsed = true;
        break;
      case 'search':
        nav.showSearch = true;
        break;
      case 'overflow':
        nav.maxVisibleItems = 3;
        break;
      case 'complex':
        nav.topItems = [
          { id: 'dash', label: 'Dashboard', icon: 'layout' },
          {
            id: 'mgmt',
            label: 'Management',
            icon: 'shield',
            children: [
              { id: 'usr', label: 'Users' },
              { id: 'grp', label: 'Groups', sectionHeader: 'Permissions' },
              {
                id: 'rol',
                label: 'Roles',
                children: [
                  { id: 'adm', label: 'Admin' },
                  { id: 'mrr', label: 'Viewer' },
                ],
              },
            ],
          },
          { id: 'anl', label: 'Analytics', icon: 'bar-chart' },
        ];
        break;
      default:
        // Default case already handled by resets above
        break;
    }

    window.updateNavBarCode();
  };
}
