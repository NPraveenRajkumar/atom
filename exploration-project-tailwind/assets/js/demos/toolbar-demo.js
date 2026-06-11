// Toolbar Component Demo
export function initToolbarDemo() {
  const section = document.getElementById('toolbar');
  if (!section) return;

  section.innerHTML = `
    <div style="padding: 32px; max-width: 1100px;">
      <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 28px;">
        Enterprise-grade toolbar component with config-driven rendering, overflow management, slots, theming, and full accessibility.
      </p>

      <!-- Tab bar -->
      <div id="toolbarTabs" class="demo-grid-wrapper" style="margin-bottom: 28px;">
        ${['Overview', 'Variants', 'Zones', 'Overflow', 'Vertical', 'Slots', 'Interactive']
          .map(
            (t, i) => `<ui-button class="toolbar-demo-tab" label="${t}" variant="outline"  onclick="showToolbarTab('${t.toLowerCase()}')" style="border-radius:20px;"></ui-button>`,
          )
          .join('')}
      </div>

      <div id="toolbarDemoContent"></div>
    </div>
  `;

  // Tab switching
  window.showToolbarTab = function (tab) {
    document.querySelectorAll('.toolbar-demo-tab').forEach(b => {
      const isActive = b.label.toLowerCase() === tab;
      b.variant = isActive ? 'filled' : 'soft';
      b.color = isActive ? 'primary' : 'secondary';
    });
    const fns = {
      overview: renderOverview,
      variants: renderVariants,
      zones: renderZones,
      overflow: renderOverflow,
      vertical: renderVertical,
      slots: renderSlots,
      interactive: renderInteractive,
    };
    const fn = fns[tab] || renderOverview;
    fn();
  };

  // ─── Helpers ─────────────────────────────────────────────────────────────

  function block(title, desc, html) {
    return `
      <div class="demo-block" style="margin-bottom:28px;">
        <h3 style="margin-top:0;font-size:16px;font-weight:700;margin-bottom:6px;">${title}</h3>
        ${desc ? `<p style="font-size:13px;color:#6b7280;margin-bottom:20px;">${desc}</p>` : ''}
        ${html}
      </div>`;
  }

  function wrap(html) {
    return `<div style="padding:16px;background:var(--bg-secondary,#f8fafc);border-radius:10px;border:1px solid var(--border-default,#e2e8f0);">${html}</div>`;
  }

  function serialize(obj) {
    return JSON.stringify(obj).replace(/"/g, '&quot;');
  }

  // ─── Overview ─────────────────────────────────────────────────────────────

  function renderOverview() {
    const basicItems = [
      { id: 'new', type: 'button', label: 'New', icon: 'plus', variant: 'primary', priority: 10 },
      { id: 'open', type: 'button', label: 'Open', icon: 'folder-open', variant: 'ghost', priority: 9 },
      { id: 'save', type: 'button', label: 'Save', icon: 'save', variant: 'ghost', priority: 8 },
      { id: 'sep1', type: 'separator' },
      { id: 'cut', type: 'button', label: 'Cut', icon: 'scissors', variant: 'ghost', iconOnly: true, tooltip: 'Cut', priority: 7 },
      { id: 'copy', type: 'button', label: 'Copy', icon: 'copy', variant: 'ghost', iconOnly: true, tooltip: 'Copy', priority: 7 },
      { id: 'paste', type: 'button', label: 'Paste', icon: 'clipboard', variant: 'ghost', iconOnly: true, tooltip: 'Paste', priority: 7 },
      { id: 'sep2', type: 'separator' },
      { id: 'spc', type: 'spacer' },
      { id: 'search', type: 'search', placeholder: 'Search files…', priority: 5, minWidth: '160px' },
      { id: 'sep3', type: 'separator' },
      { id: 'avt', type: 'avatar', src: '/build/assets/images/logo.png', name: 'Alice', status: 'online', size: '28px' },
    ];

    document.getElementById('toolbarDemoContent').innerHTML = `
      ${block(
        'Basic Toolbar',
        'Flat <code>items</code> array with buttons, separators, spacer, search, and avatar.',
        wrap(`<ui-toolbar
          items="${serialize(basicItems)}"
          bordered elevation="1"
          rounded
        ></ui-toolbar>`),
      )}

      ${block(
        'Toggle Switches (ui-switch)',
        'The <code>toggle</code> and <code>switch</code> types both render a native <code>&lt;ui-switch&gt;</code> component. Control label position with <code>labelPosition</code>.',
        wrap(`<ui-toolbar bordered rounded
          items="${serialize([
            { id: 'wrap', type: 'toggle', label: 'Word Wrap', checked: true, labelPosition: 'right' },
            { id: 'sep1', type: 'separator' },
            { id: 'preview', type: 'switch', label: 'Live Preview', labelPosition: 'right' },
            { id: 'sep2', type: 'separator' },
            { id: 'lint', type: 'switch', label: 'Lint', checked: true, labelPosition: 'left' },
            { id: 'sep3', type: 'separator' },
            { id: 'spc', type: 'spacer' },
            { id: 'format', type: 'button', icon: 'wand-2', label: 'Format', variant: 'ghost' },
          ])}"
        ></ui-toolbar>`),
      )}

      ${block(
        'Toggle Group (ui-toggle-group)',
        'The <code>toggle-group</code> type renders a <code>&lt;ui-toggle-group&gt;</code>. Use <code>selectionMode</code> for single or multi-select. Combine with other item types freely.',
        wrap(`<ui-toolbar bordered rounded
          items="${serialize([
            { id: 'bold', type: 'button', icon: 'bold', variant: 'ghost', iconOnly: true, toggleable: true, tooltip: 'Bold' },
            { id: 'ital', type: 'button', icon: 'italic', variant: 'ghost', iconOnly: true, toggleable: true, tooltip: 'Italic' },
            { id: 'undr', type: 'button', icon: 'underline', variant: 'ghost', iconOnly: true, toggleable: true, tooltip: 'Underline' },
            { id: 'sep1', type: 'separator' },
            {
              id: 'align',
              type: 'toggle-group',
              value: 'left',
              selectionMode: 'single',
              options: [
                { value: 'left', label: 'Left', icon: 'align-left' },
                { value: 'center', label: 'Center', icon: 'align-center' },
                { value: 'right', label: 'Right', icon: 'align-right' },
                { value: 'justify', label: 'Justify', icon: 'align-justify' },
              ],
            },
            { id: 'sep2', type: 'separator' },
            {
              id: 'style',
              type: 'toggle-group',
              value: 'normal',
              selectionMode: 'single',
              variant: 'outline',
              options: [
                { value: 'normal', label: 'Normal' },
                { value: 'heading', label: 'Heading' },
                { value: 'code', label: 'Code' },
              ],
            },
          ])}"
        ></ui-toolbar>`),
      )}

      ${block(
        'Toggle Group — Multi-select',
        'Set <code>selectionMode="multiple"</code> to allow multiple active values simultaneously.',
        wrap(`<ui-toolbar bordered rounded
          items="${serialize([
            {
              id: 'views',
              type: 'toggle-group',
              value: 'grid',
              selectionMode: 'multiple',
              options: [
                { value: 'grid', label: 'Grid', icon: 'layout-grid' },
                { value: 'list', label: 'List', icon: 'list' },
                { value: 'detail', label: 'Detail', icon: 'layout-list' },
              ],
            },
            { id: 'sep1', type: 'separator' },
            {
              id: 'filter',
              type: 'toggle-group',
              selectionMode: 'multiple',
              color: 'primary',
              shape: 'pill',
              options: [
                { value: 'images', label: 'Images' },
                { value: 'videos', label: 'Videos' },
                { value: 'docs', label: 'Docs' },
                { value: 'audio', label: 'Audio' },
              ],
            },
          ])}"
        ></ui-toolbar>`),
      )}

      ${block(
        'With Dropdown + Badge',
        'Dropdown selector and notification badge.',
        wrap(`<ui-toolbar bordered rounded
          items="${serialize([
            { id: 'back', type: 'button', icon: 'arrow-left', variant: 'ghost', iconOnly: true },
            { id: 'fwd', type: 'button', icon: 'arrow-right', variant: 'ghost', iconOnly: true },
            { id: 'reload', type: 'button', icon: 'refresh-cw', variant: 'ghost', iconOnly: true },
            { id: 'sep1', type: 'separator' },
            {
              id: 'view',
              type: 'dropdown',
              label: 'View',
              placeholder: 'View mode',
              options: [
                { value: 'grid', label: 'Grid View' },
                { value: 'list', label: 'List View' },
                { value: 'detail', label: 'Detail View' },
              ],
              value: 'grid',
            },
            { id: 'spc', type: 'spacer' },
            { id: 'notif', type: 'button', icon: 'bell', variant: 'ghost', iconOnly: true, badge: 3, badgeColor: 'danger', tooltip: 'Notifications' },
            { id: 'avt', type: 'avatar', src: '/build/assets/images/logo.png', name: 'Bob', size: '28px', clickable: true },
          ])}"
        ></ui-toolbar>`),
      )}

      ${block(
        'Rich Text Editor Toolbar',
        'Simulates a document editor toolbar — alignment uses <code>toggle-group</code>, formatting uses <code>ui-button</code> toggles.',
        wrap(`<ui-toolbar bordered rounded
          items="${serialize([
            { id: 'undo', type: 'button', icon: 'undo-2', variant: 'ghost', iconOnly: true, tooltip: 'Undo' },
            { id: 'redo', type: 'button', icon: 'redo-2', variant: 'ghost', iconOnly: true, tooltip: 'Redo' },
            { id: 's1', type: 'separator' },
            {
              id: 'font',
              type: 'dropdown',
              placeholder: 'Font',
              options: [
                { value: 'inter', label: 'Inter' },
                { value: 'roboto', label: 'Roboto' },
                { value: 'mono', label: 'Monospace' },
              ],
              value: 'inter',
            },
            {
              id: 'size',
              type: 'dropdown',
              placeholder: 'Size',
              options: [
                { value: '12', label: '12px' },
                { value: '14', label: '14px' },
                { value: '16', label: '16px' },
                { value: '18', label: '18px' },
              ],
              value: '14',
            },
            { id: 's2', type: 'separator' },
            { id: 'bold', type: 'button', icon: 'bold', variant: 'ghost', iconOnly: true, toggleable: true, active: true, tooltip: 'Bold' },
            { id: 'ital', type: 'button', icon: 'italic', variant: 'ghost', iconOnly: true, toggleable: true, tooltip: 'Italic' },
            { id: 'undr', type: 'button', icon: 'underline', variant: 'ghost', iconOnly: true, toggleable: true, tooltip: 'Underline' },
            { id: 's3', type: 'separator' },
            {
              id: 'align',
              type: 'toggle-group',
              value: 'left',
              selectionMode: 'single',
              options: [
                { value: 'left', icon: 'align-left', label: 'Left' },
                { value: 'center', icon: 'align-center', label: 'Center' },
                { value: 'right', icon: 'align-right', label: 'Right' },
                { value: 'justify', icon: 'align-justify', label: 'Justify' },
              ],
            },
            { id: 'spc', type: 'spacer' },
            { id: 'share', type: 'button', icon: 'share-2', label: 'Share', variant: 'primary', priority: 10 },
          ])}"
        ></ui-toolbar>`),
      )}
    `;

    wireEvents();
  }

  // ─── Variants ─────────────────────────────────────────────────────────────

  function renderVariants() {
    const basicItems = [
      { id: 'new', type: 'button', icon: 'plus', label: 'New', variant: 'primary', priority: 10 },
      { id: 'save', type: 'button', icon: 'save', label: 'Save', variant: 'ghost' },
      { id: 'sep', type: 'separator' },
      { id: 'del', type: 'button', icon: 'trash-2', label: 'Delete', variant: 'danger' },
      { id: 'spc', type: 'spacer' },
      { id: 'avt', type: 'avatar', src: '/build/assets/images/logo.png', size: '28px' },
    ];

    const variants = [
      { name: 'default', bg: '#f8fafc', label: 'Default' },
      { name: 'secondary', bg: '#f8fafc', label: 'Secondary' },
      { name: 'outlined', bg: '#f8fafc', label: 'Outlined' },
      { name: 'minimal', bg: '#f8fafc', label: 'Minimal' },
      { name: 'elevated', bg: '#f8fafc', label: 'Elevated' },
      { name: 'primary', bg: '#1e3a6b', label: 'Primary' },
      { name: 'dark', bg: '#0f172a', label: 'Dark' },
      { name: 'glass', bg: 'linear-gradient(135deg,#6366f1,#8b5cf6)', label: 'Glass' },
    ];

    document.getElementById('toolbarDemoContent').innerHTML = variants
      .map(
        v => `
      ${block(
        v.label + ' variant',
        null,
        `
        <div style="padding:20px;border-radius:10px;background:${v.bg};">
          <ui-toolbar variant="${v.name}" rounded bordered elevation="2"
            items="${serialize(basicItems)}">
          </ui-toolbar>
        </div>
      `,
      )}
    `,
      )
      .join('');

    wireEvents();
  }

  // ─── Zones ────────────────────────────────────────────────────────────────

  function renderZones() {
    const schema = {
      left: [
        { id: 'logo', type: 'text', content: '⚡ AppUI', bold: true },
        { id: 'sep1', type: 'separator' },
        { id: 'home', type: 'button', icon: 'home', variant: 'ghost', iconOnly: true, tooltip: 'Home' },
        { id: 'docs', type: 'button', label: 'Docs', icon: 'book-open', variant: 'ghost' },
      ],
      center: [{ id: 'search', type: 'search', placeholder: 'Search everything…', minWidth: '260px' }],
      right: [
        { id: 'notif', type: 'button', icon: 'bell', variant: 'ghost', iconOnly: true, badge: 2, badgeColor: 'danger' },
        { id: 'mode', type: 'button', icon: 'moon', variant: 'ghost', iconOnly: true, toggleable: true, tooltip: 'Dark mode' },
        { id: 'sep2', type: 'separator' },
        { id: 'avt', type: 'avatar', src: '/build/assets/images/logo.png', name: 'Clara', size: '28px', clickable: true },
      ],
    };

    const schema2 = {
      left: [
        { id: 'back', type: 'button', icon: 'arrow-left', variant: 'ghost', iconOnly: true },
        { id: 'fwd', type: 'button', icon: 'arrow-right', variant: 'ghost', iconOnly: true },
        { id: 'sep', type: 'separator' },
        { id: 'bold', type: 'button', icon: 'bold', variant: 'ghost', iconOnly: true, toggleable: true },
        { id: 'ital', type: 'button', icon: 'italic', variant: 'ghost', iconOnly: true, toggleable: true },
        { id: 'undr', type: 'button', icon: 'underline', variant: 'ghost', iconOnly: true, toggleable: true },
      ],
      right: [
        {
          id: 'zoom',
          type: 'dropdown',
          placeholder: '100%',
          options: [
            { value: '75', label: '75%' },
            { value: '100', label: '100%' },
            { value: '125', label: '125%' },
          ],
          value: '100',
        },
        { id: 'share', type: 'button', icon: 'share-2', label: 'Share', variant: 'primary' },
      ],
    };

    document.getElementById('toolbarDemoContent').innerHTML = `
      ${block(
        'Schema-driven Zones (left / center / right)',
        'Use the <code>schema</code> prop to define three layout zones. The center zone stretches to fill available space.',
        wrap(`<ui-toolbar schema="${serialize(schema)}" bordered rounded zone-dividers></ui-toolbar>`),
      )}
      ${block(
        'Left + Right zones only',
        'When no center is defined, the right zone is pushed to the far right via <code>margin-left:auto</code> on the zone.',
        wrap(`<ui-toolbar schema="${serialize(schema2)}" bordered rounded></ui-toolbar>`),
      )}
    `;

    wireEvents();
  }

  // ─── Overflow ─────────────────────────────────────────────────────────────

  function renderOverflow() {
    const items = [
      { id: 'new', type: 'button', label: 'New', icon: 'plus', variant: 'primary', priority: 10 },
      { id: 'open', type: 'button', label: 'Open', icon: 'folder-open', variant: 'ghost', priority: 9 },
      { id: 'save', type: 'button', label: 'Save', icon: 'save', variant: 'ghost', priority: 8 },
      { id: 'save-as', type: 'button', label: 'Save As', icon: 'save', variant: 'ghost', priority: 7 },
      { id: 'print', type: 'button', label: 'Print', icon: 'printer', variant: 'ghost', priority: 6 },
      { id: 'export', type: 'button', label: 'Export', icon: 'download', variant: 'ghost', priority: 5 },
      { id: 'share', type: 'button', label: 'Share', icon: 'share-2', variant: 'ghost', priority: 4 },
      { id: 'collab', type: 'button', label: 'Collabs', icon: 'users', variant: 'ghost', priority: 3 },
      { id: 'history', type: 'button', label: 'History', icon: 'clock', variant: 'ghost', priority: 2 },
      { id: 'settings', type: 'button', label: 'Settings', icon: 'settings', variant: 'ghost', priority: 1, pinToOverflow: true },
    ];

    document.getElementById('toolbarDemoContent').innerHTML = `
      ${block(
        'Overflow — Dropdown Strategy',
        'Resize the window or drag the handle to see items collapse into the "More" button. Higher <code>priority</code> items stay visible longest. <code>pinToOverflow</code> items always appear in the overflow menu no matter what.',
        `<div style="resize:horizontal;overflow:auto;min-width:200px;max-width:100%;padding:16px;background:var(--bg-secondary,#f8fafc);border:1px dashed #cbd5e1;border-radius:10px;">
          <ui-toolbar
            items="${serialize(items)}"
            overflow-strategy="dropdown"
            bordered rounded elevation="1"
            overflow-label="More"
            overflow-icon="more-horizontal"
            style="width:100%;"
          ></ui-toolbar>
          <p style="font-size:12px;color:#9ca3af;margin:8px 0 0;">↔ Drag the right edge to resize</p>
         </div>`,
      )}

      ${block(
        'Priority Queue',
        'Items with higher priority survive overflow. Try shrinking the container — <code>New</code> (priority 10) will be last to disappear.',
        wrap(`<ui-toolbar
            items="${serialize(items.map((it, i) => ({ ...it, label: it.label + ' (p${it.priority??0})' })))}"
            bordered rounded
          ></ui-toolbar>`),
      )}
    `;

    wireEvents();
  }

  // ─── Vertical ─────────────────────────────────────────────────────────────

  function renderVertical() {
    const items = [
      { id: 'cursor', type: 'button', icon: 'mouse-pointer-2', variant: 'ghost', iconOnly: true, tooltip: 'Select', toggleable: true, active: true },
      { id: 'pencil', type: 'button', icon: 'pencil', variant: 'ghost', iconOnly: true, tooltip: 'Draw', toggleable: true },
      { id: 'eraser', type: 'button', icon: 'eraser', variant: 'ghost', iconOnly: true, tooltip: 'Erase', toggleable: true },
      { id: 'shape', type: 'button', icon: 'shapes', variant: 'ghost', iconOnly: true, tooltip: 'Shapes', toggleable: true },
      { id: 'sep', type: 'separator' },
      { id: 'fill', type: 'button', icon: 'droplets', variant: 'ghost', iconOnly: true, tooltip: 'Fill' },
      { id: 'text', type: 'button', icon: 'type', variant: 'ghost', iconOnly: true, tooltip: 'Text' },
      { id: 'img', type: 'button', icon: 'image', variant: 'ghost', iconOnly: true, tooltip: 'Image' },
      { id: 'spc', type: 'spacer' },
      { id: 'zoom-in', type: 'button', icon: 'zoom-in', variant: 'ghost', iconOnly: true, tooltip: 'Zoom In' },
      { id: 'zoom-out', type: 'button', icon: 'zoom-out', variant: 'ghost', iconOnly: true, tooltip: 'Zoom Out' },
    ];

    document.getElementById('toolbarDemoContent').innerHTML = `
      ${block(
        'Vertical Toolbar',
        'Set <code>orientation="vertical"</code>. Icons are centred; separator becomes a horizontal rule.',
        `<div style="display:flex;gap:24px;align-items:flex-start;padding:20px;background:var(--bg-secondary,#f8fafc);border-radius:10px;border:1px solid var(--border-default,#e2e8f0);">
          <ui-toolbar orientation="vertical" bordered rounded elevation="1" gap="2px" padding="8px 4px"
            items="${serialize(items)}" style="height:360px;">
          </ui-toolbar>
          <div style="flex:1;background:#fff;border-radius:8px;border:1px solid var(--border-default,#e2e8f0);min-height:360px;display:flex;align-items:center;justify-content:center;color:#9ca3af;font-size:13px;">Canvas area</div>
        </div>`,
      )}

      ${block(
        'Vertical Dark Variant',
        null,
        `<div style="display:flex;gap:24px;align-items:flex-start;padding:20px;background:#0f172a;border-radius:10px;">
          <ui-toolbar orientation="vertical" variant="dark" rounded elevation="1" gap="2px" padding="8px 4px"
            items="${serialize(items)}" style="height:360px;">
          </ui-toolbar>
          <div style="flex:1;background:#1e293b;border-radius:8px;min-height:360px;display:flex;align-items:center;justify-content:center;color:#475569;font-size:13px;">Canvas area</div>
        </div>`,
      )}
    `;

    wireEvents();
  }

  // ─── Slots ────────────────────────────────────────────────────────────────

  function renderSlots() {
    document.getElementById('toolbarDemoContent').innerHTML = `
      ${block(
        'Slot-based composition',
        'Use named slots <code>left</code>, <code>center</code>, <code>right</code>, <code>before</code>, <code>after</code>, or the default slot to inject any custom HTML / components.',
        wrap(`<ui-toolbar bordered rounded>
          <div slot="left" style="display:flex;align-items:center;gap:12px;padding:0 4px;">
            <span style="font-weight:700;font-size:15px;color:var(--accent-blue,#2563eb);letter-spacing:-0.01em;">⚡ Studio</span>
          </div>
          <div slot="center" style="display:flex;align-items:center;gap:6px;">
            <ui-input id="slotSearch" placeholder="Search resources…" style="width:240px;"></ui-input>
          </div>
          <div slot="right" style="display:flex;align-items:center;gap:8px;">
            <ui-button icon="bell" icon-only variant="ghost" size="md" tooltip="Notifications"></ui-button>
            <ui-button icon="settings" icon-only variant="ghost" size="md" tooltip="Settings"></ui-button>
            <ui-avatar src="/build/assets/images/logo.png" size="32px" shape="circle" status="online" style="margin-left:4px;"></ui-avatar>
          </div>
        </ui-toolbar>`),
      )}

      ${block(
        'Default slot passthrough',
        "Any child without a slot attribute lands inside the toolbar body, positioned by the toolbar's flex layout.",
        wrap(`<ui-toolbar bordered rounded alignment="space-between" padding="8px 12px">
          <ui-button icon="home" label="Dashboard" variant="ghost" size="md"></ui-button>
          <ui-button icon="inbox" label="Inbox" variant="ghost" size="md" badge="5" badge-color="primary"></ui-button>
          <ui-button icon="file-text" label="Assets" variant="ghost" size="md"></ui-button>
          <ui-button icon="users" label="Collaboration" variant="ghost" size="md"></ui-button>
          <ui-button icon="settings" icon-only variant="ghost" size="md"></ui-button>
        </ui-toolbar>`),
      )}
    `;

    setTimeout(() => {
      document.getElementById('slotSearch')?.addEventListener('inputChange', e => {
        console.log('[Toolbar Slot] Search Input:', e.detail);
      });
    }, 100);
    wireEvents();
  }

  // ─── Interactive ──────────────────────────────────────────────────────────

  function renderInteractive() {
    const pg = [
      { id: 'new', type: 'button', label: 'New', icon: 'plus', variant: 'primary' },
      { id: 'open', type: 'button', label: 'Open', icon: 'folder', variant: 'ghost' },
      { id: 'save', type: 'button', label: 'Save', icon: 'save', variant: 'ghost' },
      { id: 'sep1', type: 'separator' },
      { id: 'bold', type: 'button', icon: 'bold', variant: 'ghost', iconOnly: true, toggleable: true },
      { id: 'ital', type: 'button', icon: 'italic', variant: 'ghost', iconOnly: true, toggleable: true },
      { id: 'sep2', type: 'separator' },
      {
        id: 'align',
        type: 'toggle-group',
        value: 'left',
        selectionMode: 'single',
        options: [
          { value: 'left', icon: 'align-left', label: 'Left' },
          { value: 'center', icon: 'align-center', label: 'Center' },
          { value: 'right', icon: 'align-right', label: 'Right' },
        ],
      },
      { id: 'sep3', type: 'separator' },
      {
        id: 'color',
        type: 'dropdown',
        placeholder: 'Theme',
        options: [
          { value: 'blue', label: 'Blue' },
          { value: 'green', label: 'Green' },
          { value: 'purple', label: 'Purple' },
        ],
      },
      { id: 'wrap', type: 'toggle', label: 'Wrap', checked: false },
      { id: 'spc', type: 'spacer' },
      { id: 'search', type: 'search', placeholder: 'Search…' },
      { id: 'notif', type: 'button', icon: 'bell', variant: 'ghost', iconOnly: true, badge: 3, badgeColor: 'danger' },
    ];

    document.getElementById('toolbarDemoContent').innerHTML = `
      <div class="demo-block">
        <h3>Interactive Playground</h3>
        <p style="color:var(--text-secondary,#64748b); margin-bottom: 24px;">Configure the toolbar system in real-time and monitor system events.</p>

        <div style="display: flex; flex-direction: column; gap: 24px; background:var(--bg-secondary,#f8fafc); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0); margin-bottom: 32px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <ui-dropdown id="pg-variant" label="Visual Variant" value="default"
              data='[{"label": "Default", "value": "default"}, {"label": "Secondary", "value": "secondary"}, {"label": "Minimal", "value": "minimal"}, {"label": "Glass", "value": "glass"}, {"label": "Elevated", "value": "elevated"}, {"label": "Outlined", "value": "outlined"}, {"label": "Primary", "value": "primary"}, {"label": "Dark", "value": "dark"}]'
            ></ui-dropdown>
            
            <ui-dropdown id="pg-size" label="Component Size" value="md"
              data='[{"label": "Small (SM)", "value": "sm"}, {"label": "Medium (MD)", "value": "md"}, {"label": "Large (LG)", "value": "lg"}, {"label": "Extra Large (XL)", "value": "xl"}]'
            ></ui-dropdown>

            <ui-dropdown id="pg-align" label="Content Alignment" value="start"
              data='[{"label": "Start", "value": "start"}, {"label": "Center", "value": "center"}, {"label": "End", "value": "end"}, {"label": "Space Between", "value": "space-between"}, {"label": "Space Around", "value": "space-around"}, {"label": "Space Evenly", "value": "space-evenly"}]'
            ></ui-dropdown>
          </div>

          <div style="display: flex; gap: 20px; flex-wrap: wrap; padding: 16px; background:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
            <ui-checkbox id="pg-rounded" checked label="Rounded Corners"></ui-checkbox>
            <ui-checkbox id="pg-bordered" checked label="Show Border"></ui-checkbox>
            <ui-checkbox id="pg-disabled" label="Disabled State"></ui-checkbox>
            <ui-checkbox id="pg-loading" label="Loading Overlay"></ui-checkbox>
          </div>
        </div>

        <div id="pg-toolbar-wrap" style="padding:32px; background:var(--bg-primary,white); border:1px solid var(--border-default,#e2e8f0); border-radius:16px; margin-bottom: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
          <ui-toolbar id="pg-toolbar"
            bordered rounded elevation="1"
            items="${serialize(pg)}"
          ></ui-toolbar>
        </div>

        <div>
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 12px;">
            <span style="font-size: 13px; font-weight: 700; color: #475569; text-transform: uppercase; letter-spacing: 0.05em;">Toolbar Event Stream</span>
            <ui-button id="clearPgLog" label="Clear Logs" variant="outline" color="secondary" size="xxs"></ui-button>
          </div>
          <div id="pg-log" style="height: 160px; overflow-y: auto; background: #0f172a; color: #38bdf8; border-radius: 12px; padding: 16px; font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, monospace; font-size: 13px; border: 1px solid #1e293b; line-height: 1.6;">
             <div style="color:var(--text-secondary,#64748b); border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 8px;">Waiting for interaction...</div>
          </div>
        </div>
      </div>
    `;

    // Wire playground controls
    setTimeout(() => {
      const toolbar = document.getElementById('pg-toolbar');
      if (!toolbar) return;

      const log = document.getElementById('pg-log');
      const addLog = msg => {
        if (log.firstChild && log.firstChild.textContent.startsWith('Waiting')) log.innerHTML = '';
        const line = document.createElement('div');
        line.style.marginBottom = '2px';
        line.textContent = `> [${new Date().toLocaleTimeString()}] ${msg}`;
        log.prepend(line);
      };

      document.getElementById('clearPgLog')?.addEventListener('click', () => {
        log.innerHTML = '<div style="color:var(--text-secondary,#64748b); border-bottom: 1px solid #1e293b; padding-bottom: 8px; margin-bottom: 8px;">Waiting for interaction...</div>';
      });

      toolbar.addEventListener('toolbarItemClick', e => addLog(`click: ${e.detail.item.id}`));
      toolbar.addEventListener('toolbarItemChange', e => addLog(`change: ${e.detail.item.id} = ${JSON.stringify(e.detail.value)}`));
      toolbar.addEventListener('toolbarOverflowChange', e => addLog(`overflow: [${e.detail.overflowIds.join(', ')}]`));

      const update = () => {
        toolbar.variant = document.getElementById('pg-variant').value;
        toolbar.size = document.getElementById('pg-size').value;
        toolbar.rounded = document.getElementById('pg-rounded').checked;
        toolbar.bordered = document.getElementById('pg-bordered').checked;
        toolbar.disabled = document.getElementById('pg-disabled').checked;
        toolbar.loading = document.getElementById('pg-loading').checked;
        toolbar.alignment = document.getElementById('pg-align').value;
      };

      ['pg-variant', 'pg-size', 'pg-align'].forEach(id => document.getElementById(id)?.addEventListener('dropdownChange', update));
      ['pg-rounded', 'pg-bordered', 'pg-disabled', 'pg-loading'].forEach(id => document.getElementById(id)?.addEventListener('checkboxChange', update));
    }, 100);

    wireEvents();
  }

  // ─── Wire global events ───────────────────────────────────────────────────

  function wireEvents() {
    document.querySelectorAll('ui-toolbar:not([data-wired])').forEach(tb => {
      tb.setAttribute('data-wired', '1');
      tb.addEventListener('toolbarItemClick', e => {
        console.log('[ui-toolbar] click:', e.detail.item.id);
      });
    });
  }

  // Start with Overview tab
  renderOverview();
}
