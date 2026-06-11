export function initSplitButtonDemo() {
  const section = document.getElementById('split-button');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top:0; opacity:0.7; font-size:14px; margin-bottom:24px;">
      A primary action button with an attached dropdown caret for secondary actions. Ideal for commands where one action is primary and alternatives are contextual.
    </p>

    <div class="demo-controls" style="margin:20px 0; display:flex; gap:10px; flex-wrap:wrap;">
      <ui-button id="btnSplitVariants" label="Variants"  size="md"riant="outline"></ui-button>
      <ui-button id="btnSplitColors" label="Colors"  size="md"riant="outline"></ui-button>
      <ui-button id="btnSplitSizes" label="Sizes"  size="md"riant="outline"></ui-button>
      <ui-button id="btnSplitStates" label="States"  size="md"riant="outline"></ui-button>
      <ui-button id="btnSplitIcons" label="With Icons"  size="md"riant="outline"></ui-button>
      <ui-button id="btnSplitCustomOptions" label="Custom Options"  size="md"riant="outline"></ui-button>
    </div>

    <style>
      .demo-btn { padding:8px 16px; background:#f3f4f6; color:#374151; border:1px solid #d1d5db; border-radius:6px; cursor:pointer; font-weight:500; transition:all .2s; }
      .demo-btn:hover { background:#e5e7eb; }
      .demo-block { background:var(--bg-primary,white); padding:24px; border-radius:12px; border:1px solid var(--border-default,#e5e7eb); margin-bottom:24px; }
      .demo-block h3 { margin-top:0; margin-bottom:8px; font-size:18px; }
      .demo-block p  { color:#6b7280; font-size:14px; margin-bottom:20px; }
      .demo-row { display:flex; gap:16px; flex-wrap:wrap; align-items:flex-start; }
      .event-log { min-height:48px; background:#0f172a; color:#a3e635; font:12px/1.6 monospace; border-radius:8px; padding:10px 14px; margin-top:12px; white-space:pre-wrap; }
    </style>

    <div id="splitBtnContainer" style="margin-top:20px;"></div>
    <div class="event-log" id="split-btn-event-log">// Events will appear here…</div>
  `;

  const log = msg => {
    const el = document.getElementById('split-btn-event-log');
    if (el) {
      const ts = new Date().toLocaleTimeString();
      el.textContent = `[${ts}]  ${msg}\n` + el.textContent.slice(0, 600);
    }
  };

  const wire = el => {
    el.addEventListener('mainClick', () => log(`mainClick  label="${el.label}"`));
    el.addEventListener('optionClick', e => log(`optionClick  value="${e.detail}"`));
  };

  const SAVE_OPTIONS = JSON.stringify([
    { value: 'save-draft', label: 'Save as Draft', icon: 'file-text', iconLibrary: 'lucide' },
    { value: 'export-pdf', label: 'Export as PDF', icon: 'file-down', iconLibrary: 'lucide' },
    { value: 'duplicate', label: 'Duplicate', icon: 'copy', iconLibrary: 'lucide' },
    { value: 'delete', label: 'Delete', icon: 'trash-2', iconLibrary: 'lucide', variant: 'danger' },
  ]);

  window.showSplitVariants = () => {
    document.getElementById('splitBtnContainer').innerHTML = `
      <div class="demo-block">
        <h3>Variants</h3>
        <p>solid · outline · ghost · glass · soft</p>
        <div class="demo-row">
          ${['solid', 'outline', 'ghost', 'glass', 'soft']
            .map(
              v => `
            <ui-split-button id="spl-v-${v}" label="${v.charAt(0).toUpperCase() + v.slice(1)}" icon="save" icon-library="lucide" variant="${v}" color="primary" options='${SAVE_OPTIONS}'></ui-split-button>
          `,
            )
            .join('')}
        </div>
      </div>`;
    ['solid', 'outline', 'ghost', 'glass', 'soft'].forEach(v => wire(document.getElementById(`spl-v-${v}`)));
  };

  window.showSplitColors = () => {
    document.getElementById('splitBtnContainer').innerHTML = `
      <div class="demo-block">
        <h3>Colors</h3>
        <p>primary · secondary · success · danger · warning · info · dark · light</p>
        <div class="demo-row">
          ${['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light']
            .map(
              c => `
            <ui-split-button id="spl-c-${c}" label="${c.charAt(0).toUpperCase() + c.slice(1)}" icon="zap" icon-library="lucide" variant="outline" color="${c}" options='${SAVE_OPTIONS}'></ui-split-button>
          `,
            )
            .join('')}
        </div>
      </div>`;
    ['primary', 'secondary', 'success', 'danger', 'warning', 'info', 'dark', 'light'].forEach(c => wire(document.getElementById(`spl-c-${c}`)));
  };

  window.showSplitSizes = () => {
    document.getElementById('splitBtnContainer').innerHTML = `
      <div class="demo-block">
        <h3>Sizes</h3>
        <p>xs · sm · md · lg · xl</p>
        <div class="demo-row" style="align-items:center;">
          ${['xs', 'sm', 'md', 'lg', 'xl']
            .map(
              s => `
            <ui-split-button id="spl-s-${s}" label="${s.toUpperCase()}" icon="save" icon-library="lucide" variant="outline" color="primary" size="${s}" options='${SAVE_OPTIONS}'></ui-split-button>
          `,
            )
            .join('')}
        </div>
      </div>`;
    ['xs', 'sm', 'md', 'lg', 'xl'].forEach(s => wire(document.getElementById(`spl-s-${s}`)));
  };

  window.showSplitStates = () => {
    document.getElementById('splitBtnContainer').innerHTML = `
      <div class="demo-block">
        <h3>States</h3>
        <p>Normal · Disabled · Loading</p>
        <div class="demo-row">
          <ui-split-button id="spl-st-normal"   label="Normal"   icon="save" icon-library="lucide" variant="outline" color="primary" options='${SAVE_OPTIONS}'></ui-split-button>
          <ui-split-button id="spl-st-disabled" label="Disabled" icon="save" icon-library="lucide" variant="outline" color="primary" disabled options='${SAVE_OPTIONS}'></ui-split-button>
          <ui-split-button id="spl-st-loading"  label="Loading"  icon="save" icon-library="lucide" variant="outline" color="primary" loading options='${SAVE_OPTIONS}'></ui-split-button>
        </div>
      </div>`;
    ['normal', 'disabled', 'loading'].forEach(s => wire(document.getElementById(`spl-st-${s}`)));
  };

  window.showSplitIcons = () => {
    const pairs = [
      { label: 'Deploy', icon: 'rocket', color: 'primary' },
      { label: 'Publish', icon: 'globe', color: 'success' },
      { label: 'Archive', icon: 'archive', color: 'warning' },
      { label: 'Delete', icon: 'trash-2', color: 'danger' },
    ];
    document.getElementById('splitBtnContainer').innerHTML = `
      <div class="demo-block">
        <h3>With Icons</h3>
        <p>Icon in the primary action button; option list also supports per-item icons.</p>
        <div class="demo-row">
          ${pairs
            .map(
              (p, i) => `
            <ui-split-button id="spl-i-${i}" label="${p.label}" icon="${p.icon}" icon-library="lucide" variant="outline" color="${p.color}" options='${SAVE_OPTIONS}'></ui-split-button>
          `,
            )
            .join('')}
        </div>
      </div>`;
    pairs.forEach((_, i) => wire(document.getElementById(`spl-i-${i}`)));
  };

  window.showSplitCustomOptions = () => {
    const opts = JSON.stringify([
      { value: 'new-branch', label: 'Create Branch', icon: 'git-branch', iconLibrary: 'lucide' },
      { value: 'new-pr', label: 'Open Pull Request', icon: 'git-pull-request', iconLibrary: 'lucide' },
      { value: 'sync', label: 'Sync Fork', icon: 'refresh-cw', iconLibrary: 'lucide' },
      { value: 'tag', label: 'Create Tag', icon: 'tag', iconLibrary: 'lucide' },
      { value: 'stash', label: 'Stash Changes', icon: 'layers', iconLibrary: 'lucide' },
    ]);
    document.getElementById('splitBtnContainer').innerHTML = `
      <div class="demo-block">
        <h3>Custom Option Set — Git Actions</h3>
        <p>Options support icons, icon libraries, and per-option style variants.</p>
        <div class="demo-row">
          <ui-split-button id="spl-git" label="Commit" icon="git-commit-horizontal" icon-library="lucide" variant="outline" color="primary" size="md" options='${opts}'></ui-split-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Keyboard Navigation</h3>
        <p>Open the dropdown with the caret, then use ↑ ↓ to navigate and Enter to select. Escape closes.</p>
        <div class="demo-row">
          <ui-split-button id="spl-kb" label="Save" icon="save" icon-library="lucide" variant="outline" color="primary" size="md" options='${SAVE_OPTIONS}'></ui-split-button>
        </div>
      </div>`;
    wire(document.getElementById('spl-git'));
    wire(document.getElementById('spl-kb'));
  };

  // Wire up nav
  const navMap = {
    btnSplitVariants: showSplitVariants,
    btnSplitColors: showSplitColors,
    btnSplitSizes: showSplitSizes,
    btnSplitStates: showSplitStates,
    btnSplitIcons: showSplitIcons,
    btnSplitCustomOptions: showSplitCustomOptions,
  };

  Object.entries(navMap).forEach(([id, func]) => {
    const btn = document.getElementById(id);
    if (!btn) return;
    btn.addEventListener('click', () => {
      Object.keys(navMap).forEach(k => {
        const b = document.getElementById(k);
        if (b) {
          b.variant = k === id ? 'filled' : 'soft';
          b.color = k === id ? 'primary' : 'secondary';
        }
      });
      func();
    });
  });

  // Default view
  showSplitVariants();
  document.getElementById('btnSplitVariants').variant = 'filled';
  document.getElementById('btnSplitVariants').color = 'primary';
}
