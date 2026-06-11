const DEMO_COMMANDS = [
  { id: 'new-file', label: 'New File', description: 'Create a new file', icon: '📄', shortcut: '⌘N', group: 'File' },
  { id: 'open-file', label: 'Open File', description: 'Open an existing file', icon: '📂', shortcut: '⌘O', group: 'File' },
  { id: 'save', label: 'Save', description: 'Save the current file', icon: '💾', shortcut: '⌘S', group: 'File' },
  { id: 'save-as', label: 'Save As…', description: 'Save with a new name', icon: '💾', shortcut: '⌘⇧S', group: 'File' },
  { id: 'close', label: 'Close Tab', description: 'Close the current tab', icon: '✕', shortcut: '⌘W', group: 'File' },
  { id: 'find', label: 'Find', description: 'Search in current file', icon: '🔍', shortcut: '⌘F', group: 'Edit' },
  { id: 'replace', label: 'Find & Replace', description: 'Search and replace text', icon: '🔄', shortcut: '⌘H', group: 'Edit' },
  { id: 'undo', label: 'Undo', description: 'Undo last action', icon: '↩', shortcut: '⌘Z', group: 'Edit' },
  { id: 'redo', label: 'Redo', description: 'Redo last action', icon: '↪', shortcut: '⌘⇧Z', group: 'Edit' },
  { id: 'format', label: 'Format Document', description: 'Auto-format the file', icon: '✨', shortcut: '⌥⌘F', group: 'Edit' },
  { id: 'theme-dark', label: 'Dark Theme', description: 'Switch to dark color scheme', icon: '🌙', group: 'View' },
  { id: 'theme-light', label: 'Light Theme', description: 'Switch to light color scheme', icon: '☀️', group: 'View' },
  { id: 'toggle-sidebar', label: 'Toggle Sidebar', description: 'Show or hide sidebar', icon: '⬛', shortcut: '⌘B', group: 'View' },
  { id: 'split-editor', label: 'Split Editor', description: 'Open side by side', icon: '⊞', group: 'View' },
  { id: 'git-commit', label: 'Git Commit', description: 'Commit staged changes', icon: '✔', shortcut: '⌘⏎', group: 'Git' },
  { id: 'git-push', label: 'Git Push', description: 'Push commits to remote', icon: '⬆', group: 'Git' },
  { id: 'git-pull', label: 'Git Pull', description: 'Pull from remote', icon: '⬇', group: 'Git' },
];

export function initCommandPaletteDemo() {
  const section = document.getElementById('command-palette');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Fuzzy-search powered control center. Press <kbd style="background:var(--bg-secondary,#f1f5f9);border:1px solid var(--border-default,#e2e8f0);border-radius:4px;padding:1px 6px;font-size:12px;font-weight:700;">⌘K</kbd> or click Open to activate.</p>
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button data-demo="showcase" variant="outline">Showcase</ui-button>
      <ui-button data-demo="groups" variant="outline">Groups &amp; Shortcuts</ui-button>
      <ui-button data-demo="config" variant="outline">Configuration</ui-button>
      <ui-button data-demo="activitylog" variant="outline">Activity Log</ui-button>
    </div>
    <div id="cpContainer" style="margin-top: 20px;"></div>
  `;

  const container = section.querySelector('#cpContainer');
  const commandsJson = JSON.stringify(DEMO_COMMANDS);
  const escapedCommands = commandsJson.replace(/'/g, '&#39;');

  const showShowcase = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Command Palette</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">A global search-driven command launcher. Supports fuzzy matching, keyboard navigation, grouped commands, shortcuts display, and recent command history.</p>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Try It</h4>
        <div style="display:flex;justify-content:center;padding:32px 0;">
          <ui-button id="cp-showcase-open" variant="solid" color="primary" size="large">Open Command Palette</ui-button>
        </div>

        <ui-command-palette id="cp-showcase-palette" commands='${escapedCommands}' shortcut="k" show-recent="true" max-visible="8"></ui-command-palette>

        <h4 style="margin:24px 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Features</h4>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(200px,1fr));gap:12px;">
          ${['🔍 Fuzzy search algorithm', '⌨️ Full keyboard navigation', '📁 Command group headers', '⚡ Shortcut badges', '🕐 Recent command history', '🔲 Focus trap &amp; ARIA'].map(f => `
            <div style="padding:10px 14px;background:var(--bg-secondary,#f8fafc);border-radius:8px;font-size:13px;color:var(--text-secondary,#64748b);">${f}</div>
          `).join('')}
        </div>
      </div>
    `;
    const btn = container.querySelector('#cp-showcase-open');
    const palette = container.querySelector('#cp-showcase-palette');
    if (btn && palette) btn.addEventListener('click', () => palette.show());
  };

  const showGroups = () => {
    const fileCommands = JSON.stringify(DEMO_COMMANDS.filter(c => c.group === 'File'));
    const editCommands = JSON.stringify(DEMO_COMMANDS.filter(c => c.group === 'Edit'));
    const gitCommands = JSON.stringify(DEMO_COMMANDS.filter(c => c.group === 'Git'));

    container.innerHTML = `
      <div class="demo-block">
        <h3>Groups &amp; Shortcuts</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Commands are organized into named groups. Each command can carry a <code>shortcut</code> string that is displayed alongside its label in the list.</p>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">File Commands</h4>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px;">
          <ui-button id="cp-file-open" variant="outline" size="small">Open File Palette</ui-button>
          <ui-command-palette id="cp-file-palette" commands='${fileCommands.replace(/'/g, '&#39;')}'></ui-command-palette>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Edit Commands</h4>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:24px;">
          <ui-button id="cp-edit-open" variant="outline" size="small">Open Edit Palette</ui-button>
          <ui-command-palette id="cp-edit-palette" commands='${editCommands.replace(/'/g, '&#39;')}'></ui-command-palette>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Git Commands</h4>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <ui-button id="cp-git-open" variant="outline" size="small">Open Git Palette</ui-button>
          <ui-command-palette id="cp-git-palette" commands='${gitCommands.replace(/'/g, '&#39;')}'></ui-command-palette>
        </div>
      </div>
    `;
    const pairs = [
      ['#cp-file-open', '#cp-file-palette'],
      ['#cp-edit-open', '#cp-edit-palette'],
      ['#cp-git-open', '#cp-git-palette'],
    ];
    pairs.forEach(([btnSel, palSel]) => {
      const btn = container.querySelector(btnSel);
      const pal = container.querySelector(palSel);
      if (btn && pal) btn.addEventListener('click', () => pal.show());
    });
  };

  const showConfig = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Configuration</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Tune the palette behavior with <code>placeholder</code>, <code>max-visible</code>, <code>show-recent</code>, and <code>shortcut</code> props.</p>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Custom Placeholder</h4>
        <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:28px;">
          <ui-button id="cp-ph-open" variant="outline" size="small">Open</ui-button>
          <span style="font-size:12px;color:var(--text-secondary,#64748b);">placeholder="Search actions…"</span>
          <ui-command-palette id="cp-ph-palette" commands='${escapedCommands}' placeholder="Search actions…"></ui-command-palette>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Limited Visible Items</h4>
        <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;margin-bottom:28px;">
          <ui-button id="cp-mv-open" variant="outline" size="small">Open</ui-button>
          <span style="font-size:12px;color:var(--text-secondary,#64748b);">max-visible="3"</span>
          <ui-command-palette id="cp-mv-palette" commands='${escapedCommands}' max-visible="3"></ui-command-palette>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">No Recent History</h4>
        <div style="display:flex;gap:12px;flex-wrap:wrap;align-items:center;">
          <ui-button id="cp-nr-open" variant="outline" size="small">Open</ui-button>
          <span style="font-size:12px;color:var(--text-secondary,#64748b);">show-recent="false"</span>
          <ui-command-palette id="cp-nr-palette" commands='${escapedCommands}' show-recent="false"></ui-command-palette>
        </div>
      </div>
    `;
    const pairs = [
      ['#cp-ph-open', '#cp-ph-palette'],
      ['#cp-mv-open', '#cp-mv-palette'],
      ['#cp-nr-open', '#cp-nr-palette'],
    ];
    pairs.forEach(([btnSel, palSel]) => {
      const btn = container.querySelector(btnSel);
      const pal = container.querySelector(palSel);
      if (btn && pal) btn.addEventListener('click', () => pal.show());
    });
  };

  const showActivityLog = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Activity Log</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Listen to the <code>commandSelect</code> event to react when a command is chosen. Each selection is logged below in real time.</p>

        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:20px;align-items:center;">
          <ui-button id="cp-log-open" variant="solid" color="primary" size="small">Open Palette</ui-button>
          <ui-button id="cp-log-clear" variant="outline" size="small">Clear Log</ui-button>
        </div>

        <ui-command-palette id="cp-log-palette" commands='${escapedCommands}' show-recent="true"></ui-command-palette>

        <div id="cp-log" style="padding:16px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e2e8f0);min-height:160px;max-height:280px;overflow-y:auto;font-size:13px;">
          <div id="cp-log-empty" style="color:var(--text-secondary,#64748b);font-style:italic;">No commands selected yet…</div>
        </div>
      </div>
    `;
    const openBtn = container.querySelector('#cp-log-open');
    const clearBtn = container.querySelector('#cp-log-clear');
    const palette = container.querySelector('#cp-log-palette');
    const log = container.querySelector('#cp-log');

    if (openBtn && palette) openBtn.addEventListener('click', () => palette.show());
    if (clearBtn && log) {
      clearBtn.addEventListener('click', () => {
        log.innerHTML = '<div id="cp-log-empty" style="color:var(--text-secondary,#64748b);font-style:italic;">No commands selected yet…</div>';
      });
    }
    if (palette && log) {
      palette.addEventListener('commandSelect', e => {
        const cmd = e.detail;
        const emptyMsg = log.querySelector('#cp-log-empty');
        if (emptyMsg) emptyMsg.remove();
        const entry = document.createElement('div');
        entry.style.cssText = 'padding:8px 12px;margin-bottom:8px;background:var(--bg-primary,#fff);border-radius:8px;border-left:3px solid var(--primary-color,#6366f1);display:flex;align-items:center;gap:10px;';
        entry.innerHTML = `
          <span style="font-size:16px;">${cmd.icon || '▶'}</span>
          <span style="font-weight:600;color:var(--text-primary,#111827);flex:1;">${cmd.label}</span>
          ${cmd.group ? `<span style="color:var(--text-secondary,#64748b);font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 8px;border-radius:4px;">${cmd.group}</span>` : ''}
          ${cmd.shortcut ? `<kbd style="font-size:11px;background:var(--bg-secondary,#f1f5f9);border:1px solid var(--border-default,#e2e8f0);border-radius:4px;padding:1px 6px;">${cmd.shortcut}</kbd>` : ''}
        `;
        log.prepend(entry);
      });
    }
  };

  const demoMap = {
    showcase: showShowcase,
    groups: showGroups,
    config: showConfig,
    activitylog: showActivityLog,
  };

  const nav = section.querySelector('.demo-controls');
  if (nav) {
    nav.querySelectorAll('ui-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const demo = btn.getAttribute('data-demo');
        if (demoMap[demo]) demoMap[demo]();
        nav.querySelectorAll('ui-button').forEach(b => {
          b.variant = b.getAttribute('data-demo') === demo ? 'solid' : 'outline';
          b.color = b.getAttribute('data-demo') === demo ? 'primary' : 'none';
        });
      });
    });
  }

  setTimeout(() => {
    showShowcase();
    nav?.querySelectorAll('ui-button').forEach(b => {
      b.variant = b.getAttribute('data-demo') === 'showcase' ? 'solid' : 'outline';
      b.color = b.getAttribute('data-demo') === 'showcase' ? 'primary' : 'none';
    });
  }, 50);
}
