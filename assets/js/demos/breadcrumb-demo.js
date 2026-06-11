export function initBreadcrumbDemo() {
  const section = document.getElementById('breadcrumb');
  if (!section) return;

  section.innerHTML = `
    <p>Navigation path indicators to show user location in hierarchy.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button id="btnPlayground"  label="🎮 Playground" data-demo="playground" variant="outline"></ui-button>
      <ui-button id="btnSlots"  label="🧩 Slots Mode" data-demo="slots" variant="outline"></ui-button>
      <ui-button id="btnSEO"  label="🔍 SEO & Meta" data-demo="seo" variant="outline"></ui-button>
      <ui-button id="btnBasic"  label="Basic" data-demo="basic" variant="outline"></ui-button>
      <ui-button id="btnIcon"  label="With Icons" data-demo="icon" variant="outline"></ui-button>
      <ui-button id="btnSep"  label="Separators" data-demo="sep" variant="outline"></ui-button>
      <ui-button id="btnColl"  label="Collapsible" data-demo="coll" variant="outline"></ui-button>
      <ui-button id="btnPrem"  label="💎 Premium" data-demo="prem" variant="outline"></ui-button>
    </div>

    <div id="breadcrumbDemoContainer" style="margin-top: 20px;"></div>
  `;

  const container = section.querySelector('#breadcrumbDemoContainer');

  // --- Demo Update Logic ---

  const updateBreadcrumbCode = (separator, size, variant, maxItems, showHome, itemsText) => {
    const codeBlock = section.querySelector('#breadcrumbCodeBlock');
    if (!codeBlock) return;

    let props = '';
    if (separator && separator !== '/') props += ` separator="${separator}"`;
    if (size && size !== 'md') props += ` size="${size}"`;
    if (variant && variant !== 'default') props += ` variant="${variant}"`;
    if (maxItems > 0) props += ` max-items="${maxItems}"`;
    if (showHome) props += ` show-home`;

    codeBlock.innerText = `<ui-breadcrumb${props} icon-library="lucide"></ui-breadcrumb>\n<script>\n  const breadcrumb = document.querySelector('ui-breadcrumb');\n  breadcrumb.items = ${itemsText};\n</script>`;
  };

  const updateInteractiveBreadcrumb = () => {
    const separator = section.querySelector('#breadcrumbSeparator')?.value || '/';
    const size = section.querySelector('#breadcrumbSize')?.value || 'md';
    const variant = section.querySelector('#breadcrumbVariant')?.value || 'default';
    const maxItems = parseInt(section.querySelector('#breadcrumbMaxItems')?.value || '0', 10);
    const showHome = section.querySelector('#breadcrumbShowHome')?.checked || false;
    const itemsText = section.querySelector('#breadcrumbItems')?.value;

    const previewContainer = section.querySelector('#interactiveBreadcrumbContainer');
    if (!previewContainer) return;

    previewContainer.innerHTML = '';

    if (variant === 'glass') {
      previewContainer.parentElement.style.background = 'url("/build/assets/images/nature_desert_3.png") center/cover';
    } else {
      previewContainer.parentElement.style.background = '';
    }

    try {
      const items = JSON.parse(itemsText);
      const breadcrumb = document.createElement('ui-breadcrumb');
      breadcrumb.setAttribute('icon-library', 'lucide');
      breadcrumb.setAttribute('separator', separator);
      breadcrumb.setAttribute('size', size);
      breadcrumb.setAttribute('variant', variant);
      breadcrumb.setAttribute('max-items', maxItems.toString());
      if (showHome) breadcrumb.setAttribute('show-home', 'true');
      breadcrumb.items = items;
      previewContainer.appendChild(breadcrumb);
      updateBreadcrumbCode(separator, size, variant, maxItems, showHome, itemsText);
    } catch (error) {
      previewContainer.innerHTML = `<p style="color:var(--accent-red,#ef4444);">Invalid JSON: ${error.message}</p>`;
    }
  };

  const copyBreadcrumbCode = btn => {
    const codeEl = section.querySelector('#breadcrumbCodeBlock');
    if (!codeEl) return;
    const code = codeEl.innerText;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        const originalLabel = btn.label;
        btn.label = 'Copied!';
        btn.color = 'success';

        setTimeout(() => {
          btn.label = originalLabel;
          btn.color = 'secondary';
        }, 2000);
      });
    }
  };

  // --- Demo Sections ---

  const showInteractiveBreadcrumb = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <div class="playground-settings" style="padding: 20px; margin-bottom: 20px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 16px; margin-bottom: 20px;">
            <ui-input id="breadcrumbSeparator" label="Separator" value="/"></ui-input>
            <ui-input id="breadcrumbMaxItems" label="Max Items" type="number" value="3" min="0"></ui-input>
            <ui-dropdown id="breadcrumbSize" label="Size" value="md" options='[
              {"label": "Small", "value": "sm"},
              {"label": "md", "value": "md"},
              {"label": "Large", "value": "lg"}
            ]'></ui-dropdown>
            <ui-dropdown id="breadcrumbVariant" label="Variant" value="default" options='[
              {"label": "Default", "value": "default"},
              {"label": "Pills", "value": "pills"},
              {"label": "Glass", "value": "glass"}
            ]'></ui-dropdown>
            <ui-checkbox id="breadcrumbShowHome" label="Show Home" checked="true" style="margin-top: 20px;"></ui-checkbox>
          </div>
          <ui-input id="breadcrumbItems" label="Items (JSON)" multiline="true" style="font-family: monospace;" value='[
  {"label": "Home", "icon": "home", "href": "#"},
  {"label": "Products", "href": "#", "badge": "99+", "badgeVariant": "danger"},
  {"label": "Electronics", "href": "#"},
  {"label": "Devices", "href": "#"},
  {"label": "Laptops", "href": "#"},
  {"label": "Gaming", "active": true}
]'></ui-input>
        </div>
        <div class="playground-preview" style="padding: 40px; min-height: 100px; display: flex; flex-direction: column; align-items: center; justify-content: center;">
          <div id="interactiveBreadcrumbContainer" style="width: 100%;"></div>
        </div>
        
        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button id="copyBreadcrumbBtn" label="Copy" size="md"riant="ghost" style="position: absolute; top: 10px; right: 10px; color: white;"></ui-button>
          <code id="breadcrumbCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
            &lt;ui-breadcrumb ...&gt;&lt;/ui-breadcrumb&gt;
          </code>
        </div>
      </div>
    `;

    section.querySelector('#breadcrumbSeparator')?.addEventListener('inputChange', updateInteractiveBreadcrumb);
    section.querySelector('#breadcrumbMaxItems')?.addEventListener('inputChange', updateInteractiveBreadcrumb);
    section.querySelector('#breadcrumbItems')?.addEventListener('inputChange', updateInteractiveBreadcrumb);
    section.querySelector('#breadcrumbSize')?.addEventListener('dropdownChange', updateInteractiveBreadcrumb);
    section.querySelector('#breadcrumbVariant')?.addEventListener('dropdownChange', updateInteractiveBreadcrumb);
    section.querySelector('#breadcrumbShowHome')?.addEventListener('checkboxChange', updateInteractiveBreadcrumb);

    section.querySelector('#copyBreadcrumbBtn')?.addEventListener('click', e => copyBreadcrumbCode(e.target));

    updateInteractiveBreadcrumb();
  };

  const showBasicBreadcrumb = () => {
    const items = [
      { label: 'Home', href: '#' },
      { label: 'Library', href: '#' },
      { label: 'Data', active: true },
    ];

    container.innerHTML = `
      <div class="demo-block">
        <h3>Basic Breadcrumb</h3>
        <ui-breadcrumb id="basicBreadcrumb" icon-library="lucide"></ui-breadcrumb>
      </div>
    `;

    setTimeout(() => {
      const breadcrumb = section.querySelector('#basicBreadcrumb');
      if (breadcrumb) breadcrumb.items = items;
    }, 50);
  };

  const showCollapsedBreadcrumb = () => {
    const items = [
      { label: 'Level 1', href: '#' },
      { label: 'Level 2', href: '#' },
      { label: 'Level 3', href: '#' },
      { label: 'Level 4', href: '#' },
      { label: 'Level 5', active: true },
    ];

    container.innerHTML = `
      <div class="demo-block">
        <h3>Collapsible Breadcrumb (maxItems="3")</h3>
        <p>Shows first, ellipsis, and last items when limit is exceeded.</p>
        <ui-breadcrumb id="collapsedBreadcrumb" max-items="3" icon-library="lucide"></ui-breadcrumb>
      </div>
    `;

    setTimeout(() => {
      const breadcrumb = section.querySelector('#collapsedBreadcrumb');
      if (breadcrumb) breadcrumb.items = items;
    }, 50);
  };

  const showIconBreadcrumb = () => {
    const items = [
      { label: 'Home', icon: 'home', href: '#' },
      { label: 'Documents', icon: 'folder', href: '#' },
      { label: 'Projects', icon: 'bar-chart-2', href: '#' },
      { label: 'Report.pdf', icon: 'file-text', active: true },
    ];

    container.innerHTML = `
      <div class="demo-block">
        <h3>Breadcrumb with Icons</h3>
        <ui-breadcrumb id="iconBreadcrumb" icon-library="lucide"></ui-breadcrumb>
      </div>
    `;

    setTimeout(() => {
      const breadcrumb = section.querySelector('#iconBreadcrumb');
      if (breadcrumb) breadcrumb.items = items;
    }, 50);
  };

  const showSeparatorBreadcrumb = () => {
    const items = [
      { label: 'Home', href: '#' },
      { label: 'Library', href: '#' },
      { label: 'Data', active: true },
    ];

    container.innerHTML = `
      <div class="demo-block">
        <h3>Custom Separators</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <div>
            <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px;">Arrow Separator</p>
            <ui-breadcrumb id="arrowBreadcrumb" separator="→" icon-library="lucide"></ui-breadcrumb>
          </div>
          <div>
            <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px;">Chevron Separator</p>
            <ui-breadcrumb id="chevronBreadcrumb" separator="›" icon-library="lucide"></ui-breadcrumb>
          </div>
          <div>
            <p style="margin: 0 0 8px; color: #6b7280; font-size: 13px;">Dot Separator</p>
            <ui-breadcrumb id="dotBreadcrumb" separator="•" icon-library="lucide"></ui-breadcrumb>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      ['arrowBreadcrumb', 'chevronBreadcrumb', 'dotBreadcrumb'].forEach(id => {
        const breadcrumb = section.querySelector(`#${id}`);
        if (breadcrumb) breadcrumb.items = items;
      });
    }, 50);
  };

  const showPremiumBreadcrumb = () => {
    const items = [
      { label: 'Home', icon: 'home', href: '#' },
      { label: 'Library', icon: 'folder', href: '#', badge: '12', badgeVariant: 'primary' },
      { label: 'Advanced', icon: 'settings', href: '#', badge: 'NEW', badgeVariant: 'success' },
      { label: 'Settings', active: true },
    ];

    container.innerHTML = `
      <div class="demo-block">
        <h3>💎 Premium Features</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Glassmorphism, Pill variants, and Badge support.</p>
        
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <div>
            <h4 style="margin-bottom: 12px;">Pill Variant</h4>
            <ui-breadcrumb id="pillBreadcrumb" variant="pills" icon-library="lucide"></ui-breadcrumb>
          </div>

          <div style="padding: 40px; background: url('/build/assets/images/nature_desert_3.png') center/cover; border-radius: 12px;">
            <h4 style="margin-bottom: 12px; color: white; text-shadow: 0 1px 2px rgba(0,0,0,0.5);">Glassmorphism Variant</h4>
            <ui-breadcrumb id="glassBreadcrumb" variant="glass" separator="›" icon-library="lucide"></ui-breadcrumb>
          </div>

          <div>
            <h4 style="margin-bottom: 12px;">Badges & Icons</h4>
            <ui-breadcrumb id="badgeBreadcrumb" show-home home-icon="home" icon-library="lucide" home-icon-library="lucide"></ui-breadcrumb>
          </div>
        </div>
      </div>
    `;
    setTimeout(() => {
      ['pillBreadcrumb', 'glassBreadcrumb', 'badgeBreadcrumb'].forEach(id => {
        const breadcrumb = section.querySelector(`#${id}`);
        if (breadcrumb) breadcrumb.items = items;
      });
    }, 50);
  };

  const showSlotsBreadcrumb = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🧩 Declarative Slot Mode</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Traditional declarative pattern using <code>&lt;ui-breadcrumb-item&gt;</code> tags instead of JSON arrays.</p>
        
        <ui-breadcrumb icon-library="lucide">
          <ui-breadcrumb-item href="/" icon="home">Home</ui-breadcrumb-item>
          <ui-breadcrumb-item href="/docs" icon="book">Documentation</ui-breadcrumb-item>
          <ui-breadcrumb-item href="/docs/components" icon="box">Components</ui-breadcrumb-item>
          <ui-breadcrumb-item active="true" badge="4.0" badge-variant="success">Breadcrumb</ui-breadcrumb-item>
        </ui-breadcrumb>

        <h4 style="margin-top: 32px; margin-bottom: 12px;">Mixed with Separator Slot</h4>
        <ui-breadcrumb icon-library="lucide">
          <ui-icon slot="separator" name="chevron-right" library="lucide" size="14px" color="#94a3b8"></ui-icon>
          <ui-breadcrumb-item href="/" icon="home">Home</ui-breadcrumb-item>
          <ui-breadcrumb-item href="/gallery" icon="image">Gallery</ui-breadcrumb-item>
          <ui-breadcrumb-item active="true">Project Alpha</ui-breadcrumb-item>
        </ui-breadcrumb>
      </div>
    `;
  };

  const showSEOBreadcrumb = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🔍 SEO & Structured Data</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Automatically generates <code>ld+json</code> BreadcrumbList schema for search engine visibility.</p>
        
        <div style="background: #1e293b; padding: 20px; border-radius: 12px; margin-bottom: 24px; color: #cbd5e1; font-family: monospace; font-size: 13px;">
          &lt;ui-breadcrumb structured-data="true" base-url="https://zenith.ui"&gt;...&lt;/ui-breadcrumb&gt;
        </div>

        <ui-breadcrumb id="seoBreadcrumb" structured-data="true" base-url="https://zenith.ui" icon-library="lucide"></ui-breadcrumb>
        
        <div style="margin-top: 24px; padding: 16px; background:var(--accent-green-soft,#f0fdf4); border: 1px solid #bbf7d0; border-radius: 8px; font-size: 13px; color: var(--accent-green,#166534);">
           ✅ Check the "Elements" panel in DevTools to see the <code>&lt;script type="application/ld+json"&gt;</code> block injected into the shadow root.
        </div>
      </div>
    `;

    setTimeout(() => {
      const breadcrumb = section.querySelector('#seoBreadcrumb');
      if (breadcrumb) {
        breadcrumb.items = [
          { label: 'E-Commerce', href: '/shop' },
          { label: 'Electronics', href: '/shop/electronics' },
          { label: 'Smartphones', active: true },
        ];
      }
    }, 50);
  };

  const demoMap = {
    playground: showInteractiveBreadcrumb,
    slots: showSlotsBreadcrumb,
    seo: showSEOBreadcrumb,
    basic: showBasicBreadcrumb,
    icon: showIconBreadcrumb,
    sep: showSeparatorBreadcrumb,
    coll: showCollapsedBreadcrumb,
    prem: showPremiumBreadcrumb,
  };

  // --- Initialization ---

  section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const demo = btn.getAttribute('data-demo');
      if (demoMap[demo]) demoMap[demo]();
    });
  });

  // Default View
  showInteractiveBreadcrumb();
}
