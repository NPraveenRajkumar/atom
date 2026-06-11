// Tabs Demo
export function initTabsDemo() {
  const section = document.getElementById('tabs');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-controls-wrapper">
      <div class="demo-grid-wrapper">
        <ui-button id="btnTabsPlayground" label="🎮 Playground" variant="outline"></ui-button>
        <ui-button id="btnTabsBasic" label="Basic" variant="outline"></ui-button>
        <ui-button id="btnTabsSizes" label="Sizes" variant="outline"></ui-button>
        <ui-button id="btnTabsSelector" label="Selector" variant="outline"></ui-button>
        <ui-button id="btnTabsCloseable" label="Closeable" variant="outline"></ui-button>
        <ui-button id="btnTabsCloseAll" label="Close All" variant="outline"></ui-button>
        <ui-button id="btnTabsPopup" label="Tab List Popup" variant="outline"></ui-button>
        <ui-button id="btnTabsSlots" label="Slots" variant="outline"></ui-button>
        <ui-button id="btnTabsVertical" label="Vertical" variant="outline"></ui-button>
        <ui-button id="btnTabsVertical40" label="40 Vertical" variant="outline"></ui-button>
        <ui-button id="btnTabsMany" label="40 Horizontal" variant="outline"></ui-button>
        <ui-button id="btnTabsPremium" label="✨ Premium" variant="outline"></ui-button>
        <ui-button id="btnTabsLongTitle" label="Truncation" variant="outline"></ui-button>
        <ui-button id="btnTabsActions" label="Menu Actions" variant="outline"></ui-button>
        <ui-button id="btnTabsBadges" label="Badges" variant="outline"></ui-button>
      </div>
    </div>

    <div id="tabsDemoContainer" style="margin-top: 20px; min-height: 400px;"></div>
  `;

  setTimeout(() => {
    const btnMap = {
      btnTabsPlayground: window.showInteractiveTabs,
      btnTabsBasic: window.showBasicTabs,
      btnTabsSizes: window.showTabSizes,
      btnTabsSelector: window.showSelectorStyles,
      btnTabsCloseable: window.showCloseableTabs,
      btnTabsCloseAll: window.showCloseAllTabs,
      btnTabsPopup: window.showTabListDemo,
      btnTabsSlots: window.showSlotTabs,
      btnTabsVertical: window.showVerticalTabs,
      btnTabsVertical40: window.showVertical40Tabs,
      btnTabsMany: window.showManyTabs,
      btnTabsPremium: window.showPremiumTabs,
      btnTabsLongTitle: window.showLongTitleTabs,
      btnTabsActions: window.showActionsTabs,
      btnTabsBadges: window.showBadgeTabs,
    };

    const updateActiveBtn = id => {
      Object.keys(btnMap).forEach(btnId => {
        const btn = document.getElementById(btnId);
        if (btn) btn.selected = btnId === id;
      });
    };

    Object.entries(btnMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          updateActiveBtn(id);
          func?.();
        });
      }
    });

    // Default view
    updateActiveBtn('btnTabsBasic');
    window.showBasicTabs();
  }, 100);

  window.showBadgeTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Badges & Counters</h3>
        <p>Tabs can display badges for notifications, counts, or status.</p>
        <ui-tabs id="badgeTabs" icon-library="lucide"></ui-tabs>
      </div>
    `;

    setTimeout(() => {
      const tabs = document.getElementById('badgeTabs');
      if (tabs) {
        tabs.items = [
          {
            id: 'inscript',
            title: 'Inbox',
            icon: 'inbox',
            content: '<div style="padding: 20px;">Inbox Content</div>',
            badge: 12,
            badgeVariant: 'primary', // Blue
          },
          {
            id: 'alerts',
            title: 'Alerts',
            icon: 'alert-triangle',
            content: '<div style="padding: 20px;">System Alerts</div>',
            badge: 3,
            badgeVariant: 'default', // Red (Default)
          },
          {
            id: 'updates',
            title: 'Updates',
            icon: 'refresh-cw',
            content: '<div style="padding: 20px;">System Updates</div>',
            badge: 5,
            badgeVariant: 'success', // Green
          },
          {
            id: 'drafts',
            title: 'Drafts',
            icon: 'file-edit',
            content: '<div style="padding: 20px;">Drafts Folder</div>',
            badge: 8,
            badgeVariant: 'neutral', // Gray
          },
        ];
      }
    }, 50);
  };

  window.showActionsTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Tabs with Actions Menu</h3>
        <p>Click the 3-dot menu (⋯) on the tabs to reveal action options.</p>
        <div id="actionToast" style="display: none; padding: 12px; background: #333; color: white; border-radius: 6px; position: fixed; bottom: 20px; right: 20px; z-index: 1000; animation: slideUp 0.3s ease;">Action triggered</div>
        <ui-tabs id="actionsTabs" icon-library="lucide"></ui-tabs>
      </div>
    `;

    // Simple toast helper
    const showToast = msg => {
      const toast = document.getElementById('actionToast');
      if (toast) {
        toast.textContent = msg;
        toast.style.display = 'block';
        setTimeout(() => (toast.style.display = 'none'), 2000);
      }
    };

    setTimeout(() => {
      const tabs = document.getElementById('actionsTabs');
      if (tabs) {
        tabs.items = [
          {
            id: 'project',
            title: 'Project A',
            icon: 'folder',
            content: '<div style="padding: 20px;">Project A Dashboard</div>',
            actions: true, // Enable menu
          },
          {
            id: 'team',
            title: 'Team Settings',
            icon: 'users',
            content: '<div style="padding: 20px;">Team Configuration</div>',
            actions: true,
            closable: true, // Can combo close + actions
          },
          {
            id: 'analytics',
            title: 'Analytics',
            icon: 'bar-chart-2',
            content: '<div style="padding: 20px;">Analytics View</div>',
            actions: true,
          },
        ];

        // Listen for events
        tabs.addEventListener('tabEdit', e => showToast(`✏️ Edit action triggered for: ${e.detail}`));
        tabs.addEventListener('tabDelete', e => showToast(`🗑️ Delete action triggered for: ${e.detail}`));
        tabs.addEventListener('tabOpenPanel', e => showToast(`📄 Open Panel action triggered for: ${e.detail}`));
      }
    }, 50);
  };

  window.showPremiumTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>✨ Premium Features</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Customize variant, size, indicator style, and active color live.</p>

        <div style="margin-bottom: 20px; display: flex; gap: 16px; align-items: flex-end; flex-wrap: wrap;">
          <ui-dropdown id="variantSelect" label="Variant" variant="outline" value="line" options='[
              {"label": "Line (Default)", "value": "line"},
              {"label": "Card (Classic)", "value": "card"},
              {"label": "Pill (Modern)", "value": "pill"},
              {"label": "Subtle (Minimal)", "value": "subtle"},
              {"label": "Glass (Premium)", "value": "glass"},
              {"label": "Slanted (Geometric)", "value": "slanted"},
              {"label": "Minimal (Dark)", "value": "minimal"},
              {"label": "Elastic (Sliding)", "value": "elastic"},
              {"label": "Sidebar (Iconic)", "value": "sidebar"}
          ]' onDropdownChange="updatePremiumDemo()"></ui-dropdown>

          <ui-dropdown id="sizeSelect" label="Size" variant="outline" value="md" options='[
              {"label": "XS (Extra Small)", "value": "xs"},
              {"label": "SM (Small)", "value": "sm"},
              {"label": "MD (Default)", "value": "md"},
              {"label": "LG (Large)", "value": "lg"},
              {"label": "XL (Extra Large)", "value": "xl"}
          ]' onDropdownChange="updatePremiumDemo()"></ui-dropdown>

          <ui-dropdown id="indicatorStyleSelect" label="Indicator Style" variant="outline" value="line" options='[
              {"label": "Line (Default)", "value": "line"},
              {"label": "Capsule (Pill Bar)", "value": "capsule"},
              {"label": "Dot (Circle)", "value": "dot"},
              {"label": "Glow (Blur)", "value": "glow"},
              {"label": "Bold (Thick)", "value": "bold"},
              {"label": "None (Hidden)", "value": "none"}
          ]' onDropdownChange="updatePremiumDemo()"></ui-dropdown>

          <ui-dropdown id="indicatorFillSelect" label="Indicator Fill" variant="outline" value="solid" options='[
              {"label": "Solid (matches color)", "value": "solid"},
              {"label": "Pink → Violet", "value": "linear-gradient(90deg,#ec4899,#8b5cf6)"},
              {"label": "Blue → Cyan", "value": "linear-gradient(90deg,#3b82f6,#06b6d4)"},
              {"label": "Green → Teal", "value": "linear-gradient(90deg,#10b981,#14b8a6)"},
              {"label": "Amber → Orange", "value": "linear-gradient(90deg,#f59e0b,#f97316)"},
              {"label": "Red → Pink", "value": "linear-gradient(90deg,#ef4444,#ec4899)"},
              {"label": "Rainbow", "value": "linear-gradient(90deg,#ef4444,#f59e0b,#10b981,#3b82f6,#8b5cf6)"}
          ]' onDropdownChange="updatePremiumDemo()"></ui-dropdown>

          <ui-dropdown id="indicatorPosSelect" label="Indicator Position" variant="outline" value="bottom" options='[
              {"label": "Bottom (Default)", "value": "bottom"},
              {"label": "Top", "value": "top"}
          ]' onDropdownChange="updatePremiumDemo()"></ui-dropdown>

          <!-- Color swatches -->
          <div style="display:flex; flex-direction:column; gap:4px;">
            <label style="font-size:12px; font-weight:600; color:var(--text-secondary,#64748b); text-transform:uppercase; letter-spacing:0.04em;">Active Color</label>
            <div id="colorSwatches" style="display:flex; gap:6px; align-items:center;">
              <button class="tab-color-swatch" data-color="#ec4899" title="Pink"   style="background:var(--accent-pink,#ec4899);" onclick="setTabActiveColor('#ec4899')"></button>
              <button class="tab-color-swatch" data-color="#8b5cf6" title="Violet" style="background:var(--accent-purple,#8b5cf6);" onclick="setTabActiveColor('#8b5cf6')"></button>
              <button class="tab-color-swatch" data-color="#3b82f6" title="Blue"   style="background:var(--accent-blue,#3b82f6);" onclick="setTabActiveColor('#3b82f6')"></button>
              <button class="tab-color-swatch" data-color="#10b981" title="Green"  style="background:#10b981;" onclick="setTabActiveColor('#10b981')"></button>
              <button class="tab-color-swatch" data-color="#f59e0b" title="Amber"  style="background:var(--accent-yellow,#f59e0b);" onclick="setTabActiveColor('#f59e0b')"></button>
              <button class="tab-color-swatch" data-color="#ef4444" title="Red"    style="background:var(--accent-red,#ef4444);" onclick="setTabActiveColor('#ef4444')"></button>
              <button class="tab-color-swatch" data-color="#06b6d4" title="Cyan"   style="background:#06b6d4;" onclick="setTabActiveColor('#06b6d4')"></button>
              <!-- Free-form color input -->
              <input type="color" id="tabColorPicker" value="#ec4899" title="Custom color"
                style="width:30px;height:30px;border:2px solid #e2e8f0;border-radius:6px;cursor:pointer;padding:2px;"
                oninput="setTabActiveColor(this.value)">
            </div>
          </div>
        </div>

        <style>
          .tab-color-swatch {
            width: 28px; height: 28px; border-radius: 6px; border: 2px solid transparent;
            cursor: pointer; transition: all 0.15s ease; flex-shrink: 0;
          }
          .tab-color-swatch:hover, .tab-color-swatch.active {
            border-color:var(--text-primary,#0f172a); transform: scale(1.15);
          }
        </style>

        <div id="premiumPreview" style="padding: 40px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border: 1px dashed #cbd5e1; transition: background 0.3s ease;">
          <ui-tabs id="premiumTabs" variant="line" size="md" indicator-style="line" selection-animation="slide" icon-library="lucide"></ui-tabs>
        </div>
      </div>
    `;

    window.setTabActiveColor = color => {
      const tabs = document.getElementById('premiumTabs');
      if (tabs) tabs.setAttribute('active-color', color);
      // Update swatch active state
      document.querySelectorAll('.tab-color-swatch').forEach(s => {
        s.classList.toggle('active', s.dataset.color === color);
      });
      const picker = document.getElementById('tabColorPicker');
      if (picker && color.startsWith('#') && color.length === 7) picker.value = color;
    };

    window.updatePremiumDemo = () => {
      const variant = document.getElementById('variantSelect')?.value;
      const size = document.getElementById('sizeSelect')?.value;
      const indStyle = document.getElementById('indicatorStyleSelect')?.value;
      const indPos = document.getElementById('indicatorPosSelect')?.value;
      const indFill = document.getElementById('indicatorFillSelect')?.value;
      const tabs = document.getElementById('premiumTabs');
      const preview = document.getElementById('premiumPreview');

      if (tabs) {
        tabs.setAttribute('variant', variant);
        tabs.setAttribute('size', size);
        tabs.setAttribute('indicator-style', indStyle);
        tabs.setAttribute('indicator-position', indPos);

        // Solid means rely on activeColor, gradient overrides the indicator fill
        if (indFill && indFill !== 'solid') {
          tabs.setAttribute('indicator-gradient', indFill);
        } else {
          tabs.removeAttribute('indicator-gradient');
        }

        if (variant === 'glass') {
          preview.style.background = 'linear-gradient(135deg, #4f46e5, #ec4899)';
          preview.style.padding = '60px';
        } else if (variant === 'minimal') {
          preview.style.background = '#1e293b';
          preview.style.padding = '40px';
        } else {
          preview.style.background = '#f8fafc';
          preview.style.padding = '40px';
        }
      }
    };

    setTimeout(() => {
      const tabs = document.getElementById('premiumTabs');
      if (tabs) {
        tabs.items = [
          { id: 'music', title: 'Music', icon: 'music', content: '<div style="padding:24px"><h2>Library</h2><p>Your curated playlists and albums.</p></div>' },
          { id: 'podcasts', title: 'Podcasts', icon: 'mic', content: '<div style="padding:24px"><h2>Episodes</h2><p>Catch up on the latest discussions.</p></div>' },
          { id: 'live', title: 'Live', icon: 'circle', content: '<div style="padding:24px"><h2>Live Stream</h2><p>Currently broadcasting worldwide.</p></div>', badge: 3 },
          { id: 'radio', title: 'Radio', icon: 'radio', content: '<div style="padding:24px"><h2>Radio</h2><p>24/7 curated stations.</p></div>' },
        ];
        // Set initial pink swatch active
        document.querySelectorAll('.tab-color-swatch')[0]?.classList.add('active');
      }
    }, 50);
  };

  // Define global functions for the demo
  window.showTabSizes = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    const sampleItems = [
      { id: 'overview', title: 'Overview', icon: 'layout-dashboard', content: '<div style="padding:20px"><h4>Overview</h4><p>Summary of all key metrics.</p></div>' },
      { id: 'analytics', title: 'Analytics', icon: 'bar-chart-2', content: '<div style="padding:20px"><h4>Analytics</h4><p>Detailed data breakdown.</p></div>' },
      { id: 'settings', title: 'Settings', icon: 'settings', content: '<div style="padding:20px"><h4>Settings</h4><p>Configure preferences.</p></div>' },
    ];

    const sizes = [
      { value: 'xs', label: 'XS — Extra Small', note: 'Tight toolbars, dense UIs' },
      { value: 'sm', label: 'SM — Small', note: 'Compact panels & sidebars' },
      { value: 'md', label: 'MD — Default', note: 'Standard usage' },
      { value: 'lg', label: 'LG — Large', note: 'Prominent navigation' },
      { value: 'xl', label: 'XL — Extra Large', note: 'Hero / landing-page tabs' },
    ];

    container.innerHTML = `
      <div class="demo-block">
        <h3>Tab Sizes</h3>
        <p style="color:#6b7280; margin-bottom:24px;">Five sizes let you fit tabs into any layout density — from tight toolbars to hero navigation.</p>
        <div id="tabSizesContainer" style="display:flex; flex-direction:column; gap:32px;"></div>
      </div>
    `;

    const root = document.getElementById('tabSizesContainer');

    sizes.forEach(({ value, label, note }) => {
      const wrap = document.createElement('div');
      wrap.innerHTML = `
        <h4 style="margin:0 0 4px; font-size:14px; color:#475569;">${label}</h4>
        <p style="margin:0 0 10px; font-size:12px; color:var(--text-secondary,#64748b);">${note}</p>
      `;
      const tabEl = document.createElement('ui-tabs');
      tabEl.setAttribute('size', value);
      tabEl.setAttribute('variant', 'line');
      tabEl.setAttribute('icon-library', 'lucide');
      wrap.appendChild(tabEl);
      root.appendChild(wrap);

      setTimeout(() => {
        tabEl.items = sampleItems;
      }, 50);
    });
  };

  window.showBasicTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Basic Tabs (Horizontal)</h3>
        <ui-tabs id="basicTabs" icon-library="lucide"></ui-tabs>
      </div>
    `;

    setTimeout(() => {
      const basicTabs = document.getElementById('basicTabs');
      if (basicTabs) {
        basicTabs.items = [
          {
            id: 'overview',
            title: 'Overview',
            icon: 'file-text',
            content: '<div style="padding: 20px;"><h4>Welcome to the Overview</h4><p>This tab contains general information about the component library.</p></div>',
            closable: false,
          },
          {
            id: 'features',
            title: 'Features',
            icon: 'zap',
            content: '<div style="padding: 20px;"><h4>Key Features</h4><ul><li>Web Components</li><li>TypeScript</li><li>Framework Agnostic</li><li>Shadow DOM</li></ul></div>',
            closable: false,
          },
          {
            id: 'documentation',
            title: 'Docs',
            icon: 'book',
            content: '<div style="padding: 20px;"><h4>Documentation</h4><p>Complete API documentation and usage examples.</p></div>',
            closable: false,
          },
        ];
        basicTabs.defaultActive = 'overview';
      }
    }, 50);
  };

  window.showCloseableTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Tabs with Closeable Tabs</h3>
        <ui-tabs id="closeableTabs" icon-library="lucide"></ui-tabs>
      </div>
    `;

    setTimeout(() => {
      const closeableTabs = document.getElementById('closeableTabs');
      if (closeableTabs) {
        closeableTabs.items = [
          {
            id: 'home',
            title: 'Home',
            icon: 'home',
            content: '<div style="padding: 20px;"><p>Home tab - this one cannot be closed.</p></div>',
            closable: false,
          },
          {
            id: 'settings',
            title: 'Settings',
            icon: 'settings',
            content: '<div style="padding: 20px;"><p>Settings tab - you can close this one!</p></div>',
            closable: true,
          },
          {
            id: 'profile',
            title: 'Profile',
            icon: 'user',
            content: '<div style="padding: 20px;"><p>Profile tab - also closeable!</p></div>',
            closable: true,
          },
        ];
      }
    }, 50);
  };

  window.showSlotTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Tabs with Slot Content</h3>
        <p>This example demonstrates projecting content using slots instead of string content.</p>
        <ui-tabs id="slotTabs" icon-library="lucide">
            <div slot="tab1" style="padding: 20px; background:var(--accent-green-soft,#f0fdf4); border: 1px dashed #4ade80; border-radius: 8px;">
                <h4 style="margin-top: 0; color: var(--accent-green,#166534);">Content via Slot 1</h4>
                <p>This content is projected from the light DOM into the shadow DOM using a named slot.</p>
                <ui-button label="Interactive Button" variant="outline" color="success" size="md"ui-button>
            </div>
            <div slot="tab2" style="padding: 20px; background:var(--accent-blue-soft,#eff6ff); border: 1px dashed #60a5fa; border-radius: 8px;">
                <h4 style="margin-top: 0; color:var(--accent-blue,#1e40af);">Content via Slot 2</h4>
                <p>Slots allow you to keep your content in the main document structure.</p>
            </div>
        </ui-tabs>
      </div>
    `;

    setTimeout(() => {
      const tabs = document.getElementById('slotTabs');
      if (tabs) {
        tabs.items = [
          {
            id: 'tab1',
            title: 'Slot Tab 1',
            icon: 'box',
            useSlot: true,
          },
          {
            id: 'tab2',
            title: 'Slot Tab 2',
            icon: 'layers',
            useSlot: true,
          },
        ];
      }
    }, 50);
  };

  window.showTabListDemo = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Tab List Popup</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">A popup list of all open tabs appears automatically when <code>show-close-all</code> or <code>show-tab-list</code> is set. It shows a header with the open-tab count, the active tab highlighted with a checkmark, and lets you jump to any tab directly.</p>

        <div style="display: flex; flex-direction: column; gap: 40px;">

          <!-- show-close-all auto-includes the popup list -->
          <div>
            <h4 style="margin: 0 0 6px; font-size: 14px; color:var(--text-secondary,#64748b);">Auto popup via <code>show-close-all</code></h4>
            <p style="margin: 0 0 14px; font-size: 13px; color:var(--text-secondary,#64748b);">When <code>show-close-all</code> is true the list button appears automatically — no extra prop needed.</p>
            <div id="tabListCloseAllContainer"></div>
          </div>

          <!-- show-tab-list without close-all -->
          <div>
            <h4 style="margin: 0 0 6px; font-size: 14px; color:var(--text-secondary,#64748b);">Standalone <code>show-tab-list</code></h4>
            <p style="margin: 0 0 14px; font-size: 13px; color:var(--text-secondary,#64748b);">Use <code>show-tab-list</code> on its own to add the popup without the close-all button.</p>
            <div id="tabListOnlyContainer"></div>
          </div>

          <!-- Both props together -->
          <div>
            <h4 style="margin: 0 0 6px; font-size: 14px; color:var(--text-secondary,#64748b);">Both props together</h4>
            <p style="margin: 0 0 14px; font-size: 13px; color:var(--text-secondary,#64748b);">Tab list popup + close-all button side by side, with badges visible in the list.</p>
            <div id="tabListBothContainer"></div>
          </div>

        </div>
      </div>
    `;

    // Helper to create a ui-tabs element with items
    function makeTabsEl(id, attrs, items) {
      const el = document.createElement('ui-tabs');
      el.id = id;
      el.setAttribute('icon-library', 'lucide');
      for (const [k, v] of Object.entries(attrs)) el.setAttribute(k, v);
      document.getElementById(id + 'Container').appendChild(el);
      setTimeout(() => {
        el.items = items;
      }, 50);
    }

    const editorTabs = [
      { id: 'index', title: 'index.html', icon: 'file-code', content: '<div style="padding:20px"><h4>index.html</h4><p>Entry point of the application.</p></div>', closable: true },
      { id: 'app', title: 'app.ts', icon: 'file-code-2', content: '<div style="padding:20px"><h4>app.ts</h4><p>Root application module.</p></div>', closable: true },
      { id: 'styles', title: 'styles.scss', icon: 'paintbrush', content: '<div style="padding:20px"><h4>styles.scss</h4><p>Global stylesheet.</p></div>', closable: true },
      { id: 'router', title: 'router.ts', icon: 'route', content: '<div style="padding:20px"><h4>router.ts</h4><p>Client-side routing configuration.</p></div>', closable: true },
      { id: 'store', title: 'store.ts', icon: 'database', content: '<div style="padding:20px"><h4>store.ts</h4><p>Global state management.</p></div>', closable: true },
    ];

    const badgeTabs = [
      { id: 'inbox', title: 'Inbox', icon: 'inbox', badge: 12, content: '<div style="padding:20px"><h4>Inbox</h4><p>12 unread messages.</p></div>', closable: true },
      { id: 'drafts', title: 'Drafts', icon: 'file-edit', badge: 3, content: '<div style="padding:20px"><h4>Drafts</h4><p>3 draft messages.</p></div>', closable: true },
      { id: 'sent', title: 'Sent', icon: 'send', content: '<div style="padding:20px"><h4>Sent</h4><p>All sent messages.</p></div>', closable: true },
      { id: 'archive', title: 'Archive', icon: 'archive', content: '<div style="padding:20px"><h4>Archive</h4><p>Archived messages.</p></div>', closable: true },
      { id: 'spam', title: 'Spam', icon: 'alert-triangle', badge: 1, content: '<div style="padding:20px"><h4>Spam</h4><p>1 spam message detected.</p></div>', closable: true },
    ];

    setTimeout(() => {
      makeTabsEl('tabListCloseAll', { 'show-close-all': 'true' }, editorTabs);
      makeTabsEl('tabListOnly', { 'show-tab-list': 'true' }, editorTabs);
      makeTabsEl('tabListBoth', { 'show-tab-list': 'true', 'show-close-all': 'true' }, badgeTabs);
    }, 50);
  };

  window.showCloseAllTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Tabs with Close All Button</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Click the X button on the right to destroy the entire tabs component</p>
        <div id="closeAllTabsContainer"></div>
        <div id="closeAllMessage" style="margin-top: 20px; padding: 16px; background-color: #f3f4f6; border-radius: 8px; display: none;">
          <p style="color:var(--accent-green,#059669); font-weight: 600;">✓ Tabs component has been destroyed!</p>
          <ui-button label="Recreate Tabs" color="success" onclick="showCloseAllTabs()"></ui-button>
        </div>
      </div>
    `;

    setTimeout(() => {
      const tabsContainer = document.getElementById('closeAllTabsContainer');
      if (tabsContainer) {
        const tabsElement = document.createElement('ui-tabs');
        tabsElement.id = 'closeAllTabs';
        tabsElement.setAttribute('show-close-all', 'true');
        tabsElement.setAttribute('icon-library', 'lucide');
        tabsContainer.appendChild(tabsElement);

        setTimeout(() => {
          const closeAllTabs = document.getElementById('closeAllTabs');
          if (closeAllTabs) {
            closeAllTabs.items = [
              {
                id: 'tab1',
                title: 'Dashboard',
                icon: 'bar-chart-2',
                content: '<div style="padding: 20px;"><h4>Dashboard</h4><p>View your analytics and statistics here.</p></div>',
                closable: true,
              },
              {
                id: 'tab2',
                title: 'Reports',
                icon: 'trending-up',
                content: '<div style="padding: 20px;"><h4>Reports</h4><p>Generate and view reports.</p></div>',
                closable: true,
              },
              {
                id: 'tab3',
                title: 'Messages',
                icon: 'message-circle',
                badge: 5,
                content: '<div style="padding: 20px;"><h4>Messages</h4><p>You have 5 unread messages.</p></div>',
                closable: true,
              },
              {
                id: 'tab4',
                title: 'Settings',
                icon: 'settings',
                content: '<div style="padding: 20px;"><h4>Settings</h4><p>Configure your preferences.</p></div>',
                closable: true,
              },
            ];

            closeAllTabs.addEventListener('closeAll', () => {
              const message = document.getElementById('closeAllMessage');
              if (message) {
                message.style.display = 'block';
              }
            });
          }
        }, 50);
      }
    }, 50);
  };

  window.showVerticalTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Vertical Tabs with Scroll Navigation</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Vertical tabs with scroll navigation for many items. Use arrow buttons to scroll.</p>
        <div style="height: 350px; border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; overflow: hidden;">
          <ui-tabs id="verticalTabs" orientation="vertical" scroll-mode="manual" show-tab-list="true" variant="pill" icon-library="lucide"></ui-tabs>
        </div>
      </div>
    `;

    setTimeout(() => {
      const verticalTabs = document.getElementById('verticalTabs');
      if (verticalTabs) {
        // Create 12 tabs to show scroll
        const items = [
          {
            id: 'dashboard',
            title: 'Dashboard',
            icon: 'bar-chart-2',
            content: '<div style="padding: 20px;"><h4>Dashboard</h4><p>Overview of your analytics and metrics.</p></div>',
          },
          { id: 'analytics', title: 'Analytics', icon: 'trending-up', content: '<div style="padding: 20px;"><h4>Analytics</h4><p>Detailed charts and reports.</p></div>' },
          { id: 'reports', title: 'Reports', icon: 'clipboard-list', content: '<div style="padding: 20px;"><h4>Reports</h4><p>Generate and export reports.</p></div>' },
          { id: 'users', title: 'Users', icon: 'users', content: '<div style="padding: 20px;"><h4>Users</h4><p>Manage team members and permissions.</p></div>' },
          { id: 'settings', title: 'Settings', icon: 'settings', content: '<div style="padding: 20px;"><h4>Settings</h4><p>Configure your preferences.</p></div>' },
          { id: 'security', title: 'Security', icon: 'lock', content: '<div style="padding: 20px;"><h4>Security</h4><p>Password and two-factor authentication.</p></div>' },
          { id: 'billing', title: 'Billing', icon: 'credit-card', content: '<div style="padding: 20px;"><h4>Billing</h4><p>Subscription and payment details.</p></div>' },
          { id: 'integrations', title: 'Integrations', icon: 'link', content: '<div style="padding: 20px;"><h4>Integrations</h4><p>Connect with third-party apps.</p></div>' },
          {
            id: 'notifications',
            title: 'Notifications',
            icon: 'bell',
            content: '<div style="padding: 20px;"><h4>Notifications</h4><p>Email and push notification settings.</p></div>',
          },
          { id: 'help', title: 'Help & Support', icon: 'message-circle', content: '<div style="padding: 20px;"><h4>Help & Support</h4><p>FAQs and contact support.</p></div>' },
          { id: 'logs', title: 'Activity Logs', icon: 'file-text', content: '<div style="padding: 20px;"><h4>Activity Logs</h4><p>View all system activity.</p></div>' },
          { id: 'api', title: 'API Keys', icon: 'key', content: '<div style="padding: 20px;"><h4>API Keys</h4><p>Manage your API credentials.</p></div>' },
        ];
        verticalTabs.items = items;
      }
    }, 50);
  };

  window.showManyTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Stress Test: 40 Tabs (No Overlap) + Tab List</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">
            Demonstrating robust overflow handling. Navigation buttons + Tab List feature for easy access.
        </p>

        <div style="margin-bottom: 16px; display: flex; gap: 12px;">
            <ui-button label="Split (Default)" variant="outline" color="secondary" size="md"click="updateScrollPlacement('split')"></ui-button>
            <ui-button label="Start (Both Left)" variant="outline" color="secondary" size="md"click="updateScrollPlacement('start')"></ui-button>
            <ui-button label="End (Both Right)" variant="outline" color="secondary" size="md"click="updateScrollPlacement('end')"></ui-button>
        </div>

        <ui-tabs id="manyTabs" scroll-mode="manual" scroll-button-placement="split" show-tab-list="true" show-close-all="true" icon-library="lucide"></ui-tabs>
      </div>
    `;

    window.updateScrollPlacement = placement => {
      const el = document.getElementById('manyTabs');
      if (el) el.setAttribute('scroll-button-placement', placement);
    };

    setTimeout(() => {
      const manyTabs = document.getElementById('manyTabs');
      if (manyTabs) {
        const tabsData = Array.from({ length: 40 }).map((_, idx) => ({
          id: `tab${idx + 1}`,
          title: `Tab ${idx + 1}`,
          content: `<div style="padding: 20px;"><h4>Content for Tab ${idx + 1}</h4><p>This is tab number ${idx + 1} out of 40.</p></div>`,
          closable: true,
        }));
        manyTabs.items = tabsData;
      }
    }, 50);
  };

  window.showInteractiveTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        
        <div style="background-color: #f9fafb; padding: 20px; border-radius: 8px; margin-bottom: 20px;">
          <h4 style="margin: 0 0 16px;">Settings</h4>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
            <ui-dropdown id="tabsOrientation" label="Orientation" variant="outline" value="horizontal" options='[
                {"label": "Horizontal", "value": "horizontal"},
                {"label": "Vertical", "value": "vertical"}
            ]'></ui-dropdown>
            <ui-dropdown id="tabsVariant" label="Variant" variant="outline" value="line" options='[
                {"label": "Line", "value": "line"},
                {"label": "Card", "value": "card"},
                {"label": "Pill", "value": "pill"},
                {"label": "Subtle", "value": "subtle"},
                {"label": "Glass", "value": "glass"},
                {"label": "Slanted", "value": "slanted"},
                {"label": "Minimal", "value": "minimal"},
                {"label": "Elastic", "value": "elastic"},
                {"label": "Sidebar", "value": "sidebar"}
            ]'></ui-dropdown>
            <ui-dropdown id="tabsSize" label="Size" variant="outline" value="md" options='[
                {"label": "XS (Extra Small)", "value": "xs"},
                {"label": "SM (Small)", "value": "sm"},
                {"label": "MD (Default)", "value": "md"},
                {"label": "LG (Large)", "value": "lg"},
                {"label": "XL (Extra Large)", "value": "xl"}
            ]'></ui-dropdown>
            <ui-dropdown id="tabsCount" label="Number of Tabs" variant="outline" value="3" options='[
                {"label": "3 Tabs", "value": "3"},
                {"label": "5 Tabs", "value": "5"},
                {"label": "10 Tabs", "value": "10"}
            ]'></ui-dropdown>
            <div style="display: flex; flex-direction: column; gap: 8px; justify-content: center;">
                <ui-checkbox id="tabsShowIcons" label="Show Icons" checked></ui-checkbox>
                <ui-checkbox id="tabsShowList" label="Show List Button"></ui-checkbox>
                <ui-checkbox id="tabsShowCloseAll" label="Show Close All"></ui-checkbox>
            </div>
          </div>
        </div>
        
        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button label="Copy" id="copyTabsBtn" variant="outline" color="secondary" size="md"click="copyTabsCode()" style="position: absolute; top: 10px; right: 10px;"></ui-button>
          <code id="tabsCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
            &lt;ui-tabs ...&gt;&lt;/ui-tabs&gt;
          </code>
        </div>
        
        <ui-tabs id="interactiveTabs" scroll-mode="manual" icon-library="lucide"></ui-tabs>
      </div>
    `;

    window.copyTabsCode = () => {
      const code = document.getElementById('tabsCodeBlock').innerText;
      const btn = document.getElementById('copyTabsBtn');

      navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.label;
        btn.label = 'Copied!';
        btn.style.setProperty('--ui-button-bg', '#10b981');

        setTimeout(() => {
          btn.label = originalText;
          btn.style.setProperty('--ui-button-bg', '');
        }, 2000);
      });
    };

    window.updateTabsCode = () => {
      const el = document.getElementById('interactiveTabs');
      const codeBlock = document.getElementById('tabsCodeBlock');
      if (!el || !codeBlock) return;

      let props = '';
      if (el.getAttribute('orientation') && el.getAttribute('orientation') !== 'horizontal') props += ` orientation="${el.getAttribute('orientation')}"`;
      if (el.getAttribute('variant') && el.getAttribute('variant') !== 'line') props += ` variant="${el.getAttribute('variant')}"`;
      if (el.getAttribute('size') && el.getAttribute('size') !== 'md') props += ` size="${el.getAttribute('size')}"`;
      if (el.getAttribute('show-tab-list') === 'true') props += ` show-tab-list="true"`;
      if (el.getAttribute('show-close-all') === 'true') props += ` show-close-all="true"`;

      let itemsStr = '';
      try {
        const items = typeof el.items === 'string' ? JSON.parse(el.items) : el.items;
        // Simplified items for display to keep it readable, showing just structure of first item + comment
        const sampleItem = items[0];
        const displayItems = JSON.stringify([sampleItem, '...'], null, 2);
        itemsStr = `\n  // Items array \n  tabs.items = ${displayItems};`.replace(/"\.\.\."/, '... (more items)');
      } catch (e) {
        itemsStr = '\n  // Items set via JavaScript';
      }

      codeBlock.innerText = `<ui-tabs${props}></ui-tabs>\n<script>${itemsStr}\n</script>`;
    };

    setTimeout(() => {
      const dropdowns = ['tabsOrientation', 'tabsVariant', 'tabsSize', 'tabsCount'];
      const checkboxes = ['tabsShowIcons', 'tabsShowList', 'tabsShowCloseAll'];

      dropdowns.forEach(id => {
        document.getElementById(id)?.addEventListener('dropdownChange', () => window.updateInteractiveTabs());
      });

      checkboxes.forEach(id => {
        document.getElementById(id)?.addEventListener('checkboxChange', () => window.updateInteractiveTabs());
      });

      updateInteractiveTabs();
    }, 100);
  };

  window.updateInteractiveTabs = function () {
    const orientation = document.getElementById('tabsOrientation').value;
    const variant = document.getElementById('tabsVariant').value;
    const size = document.getElementById('tabsSize').value;
    const count = parseInt(document.getElementById('tabsCount').value);
    const showIcons = document.getElementById('tabsShowIcons').checked;
    const showList = document.getElementById('tabsShowList').checked;
    const showCloseAll = document.getElementById('tabsShowCloseAll').checked;

    const baseIcons = ['home', 'user', 'settings', 'message-circle', 'bell', 'music', 'camera', 'folder', 'calendar', 'file-text'];
    const tabsData = Array.from({ length: count }).map((_, idx) => {
      const id = `tab${idx + 1}`;
      return {
        id,
        title: `Tab ${idx + 1}`,
        icon: showIcons ? baseIcons[idx % baseIcons.length] : undefined,
        content: `<div style="padding: 20px;"><h4>Tab ${idx + 1}</h4><p>Content for tab ${idx + 1}. Variant: <strong>${variant}</strong></p></div>`,
        closable: true,
      };
    });

    const interactiveTabs = document.getElementById('interactiveTabs');
    if (interactiveTabs) {
      interactiveTabs.setAttribute('orientation', orientation);
      interactiveTabs.setAttribute('variant', variant);
      interactiveTabs.setAttribute('size', size);

      if (showList) interactiveTabs.setAttribute('show-tab-list', 'true');
      else interactiveTabs.removeAttribute('show-tab-list');

      if (showCloseAll) interactiveTabs.setAttribute('show-close-all', 'true');
      else interactiveTabs.removeAttribute('show-close-all');

      interactiveTabs.items = tabsData;
      window.updateTabsCode();
    }
  };

  window.showLongTitleTabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>Truncation Test</h3>
        <p>The second tab has a very long title to verify ellipsis behavior at 270px.</p>
        <ui-tabs id="longTabs" icon-library="lucide"></ui-tabs>
      </div>
    `;

    setTimeout(() => {
      const longTabs = document.getElementById('longTabs');
      if (longTabs) {
        longTabs.items = [
          {
            id: 'short',
            title: 'Short Title',
            icon: 'check-circle',
            content: '<div style="padding: 20px;">Normal tab title</div>',
          },
          {
            id: 'long',
            title: 'This is a significantly long tab title that should definitely ellipsis because it exceeds the maximum width constraints of the component',
            icon: 'ruler',
            content: '<div style="padding: 20px;">This tab title is intentionally very long to test CSS truncation.</div>',
            closable: true,
          },
          {
            id: 'normal',
            title: 'Normal One',
            content: '<div style="padding: 20px;">Another normal tab</div>',
          },
        ];
        longTabs.defaultActive = 'long';
      }
    }, 50);
  };

  // 40 Vertical Tabs Demo
  window.showVertical40Tabs = function () {
    const container = document.getElementById('tabsDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>40 Vertical Tabs with Scroll Navigation</h3>
        <p style="color: #6b7280; margin-bottom: 16px;">Stress test: 40 vertical tabs with scroll navigation. Use the scroll buttons (▲/▼) to navigate through tabs.</p>
        <div style="height: 450px; border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; overflow: hidden;">
          <ui-tabs id="vertical40Tabs" orientation="vertical" scroll-mode="manual" variant="subtle" style="height: 100%;" icon-library="lucide"></ui-tabs>
        </div>
      </div>
    `;

    setTimeout(() => {
      const tabs = document.getElementById('vertical40Tabs');
      if (tabs) {
        const icons = [
          'bar-chart-2',
          'trending-up',
          'clipboard-list',
          'users',
          'settings',
          'lock',
          'credit-card',
          'link',
          'bell',
          'message-circle',
          'file-text',
          'key',
          'folder',
          'folder-open',
          'layers',
          'pin',
          'tag',
          'paperclip',
          'search',
          'wifi',
        ];
        const categories = [
          'Dashboard',
          'Analytics',
          'Reports',
          'Users',
          'Settings',
          'Security',
          'Billing',
          'Integrations',
          'Notifications',
          'Messages',
          'Activity',
          'API Keys',
          'Files',
          'Folders',
          'Archive',
          'Bookmarks',
          'Tags',
          'Attachments',
          'Search',
          'Network',
          'Backup',
          'Restore',
          'Export',
          'Import',
          'Sync',
          'Cache',
          'Logs',
          'Events',
          'Webhooks',
          'Plugins',
          'Themes',
          'Layouts',
          'Widgets',
          'Forms',
          'Tables',
          'Charts',
          'Maps',
          'Media',
          'Storage',
          'Database',
        ];

        const items = [];
        for (let i = 0; i < 40; i++) {
          items.push({
            id: `tab-${i + 1}`,
            title: categories[i] || `Tab ${i + 1}`,
            icon: icons[i % icons.length],
            content: `<div style="padding: 24px;"><h4>${categories[i] || 'Tab ' + (i + 1)}</h4><p>Content for ${categories[i] || 'Tab ' + (i + 1)}. This demonstrates vertical tab navigation with many items.</p></div>`,
          });
        }
        tabs.items = items;
      }
    }, 50);
  };

  // Initialize
  setTimeout(() => {
    updateActiveBtn('btnTabsBasic');
    window.showBasicTabs();
  }, 100);
}
