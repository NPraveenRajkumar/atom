// Component Demo Functions
export function initMultiLevelContextMenuDemo() {
  const section = document.getElementById('multi-level-context-menu');
  if (!section) return;

  section.innerHTML = `
    
    <p>Cascading context menu with nested submenus.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showBasicMultiLevelMenu()" variant="outline">Basic</ui-button>
      <ui-button onclick="showFourLevelMultiMenu()" variant="outline">4-Level Submenu</ui-button>
      <ui-button onclick="showDeepNestedMenu()" variant="outline">Deep Nested (5+)</ui-button>
      <ui-button onclick="showInteractiveMultiLevelMenu()" variant="outline">🎮 Interactive Playground</ui-button>
    </div>

    <div id="multiLevelMenuDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    // Multi-Level Context Menu Demo Functions
    window.showBasicMultiLevelMenu = function () {
      const container = document.getElementById('multiLevelMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 600px; margin: 0 auto;">
        <h4>Basic Multi-Level Menu</h4>
        <p style="color: #6b7280; font-size: 13px;">Simple cascading menu with multiple levels</p>
        <div id="basicMultiTarget" style="min-height: 200px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
          <div style="text-align: center;">
            <div style="margin-bottom: 10px;">
              <ui-icon name="target" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
            </div>
            <div style="color: #6b7280; font-size: 14px;">Right-click for basic menu</div>
          </div>
        </div>
      </div>
      <ui-context-menu id="basicMultiMenu" target="#basicMultiTarget" icon-library="lucide"></ui-context-menu>
    `;
      setTimeout(() => {
        const menu = document.getElementById('basicMultiMenu');
        if (menu) {
          menu.addEventListener('menuItemClick', e => {
            console.log('Basic multi-level menu clicked:', e.detail);
          });

          menu.items = [
            {
              id: 'file',
              label: 'File',
              icon: 'folder',
              children: [
                { id: 'new', label: 'New', icon: 'plus' },
                { id: 'open', label: 'Open', icon: 'folder-open' },
                { id: 'save', label: 'Save', icon: 'save' },
              ],
            },
            {
              id: 'edit',
              label: 'Edit',
              icon: 'edit-3',
              children: [
                { id: 'undo', label: 'Undo', icon: 'undo-2' },
                { id: 'redo', label: 'Redo', icon: 'redo-2' },
                { id: 'sep1', separator: true },
                { id: 'cut', label: 'Cut', icon: 'scissors' },
                { id: 'copy', label: 'Copy', icon: 'clipboard' },
                { id: 'paste', label: 'Paste', icon: 'file' },
              ],
            },
            { id: 'sep2', separator: true },
            { id: 'help', label: 'Help', icon: 'help-circle' },
          ];
        }
      }, 100);
    };

    window.showFourLevelMultiMenu = function () {
      const container = document.getElementById('multiLevelMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 700px; margin: 0 auto;">
        <h4>4-Level Submenu</h4>
        <p style="color: #6b7280; font-size: 13px;">Cascading menu demonstrating 4 levels of nesting</p>
        <div id="fourLevelMultiTarget" style="min-height: 220px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
          <div style="text-align: center;">
            <div style="margin-bottom: 10px;">
              <ui-icon name="compass" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
            </div>
            <div style="color: #6b7280; font-size: 14px;">Right-click to explore 4 nested levels</div>
          </div>
        </div>
      </div>
      <ui-context-menu id="fourLevelMultiMenu" target="#fourLevelMultiTarget" icon-library="lucide"></ui-context-menu>
    `;
      setTimeout(() => {
        const menu = document.getElementById('fourLevelMultiMenu');
        if (menu) {
          menu.addEventListener('menuItemClick', e => {
            console.log('4-Level multi-level menu clicked:', e.detail);
          });

          menu.items = [
            {
              id: 'level-1',
              label: 'Level 1',
              icon: 'list-ordered',
              children: [
                {
                  id: 'level-2',
                  label: 'Level 2',
                  icon: 'list-ordered',
                  children: [
                    {
                      id: 'level-3',
                      label: 'Level 3',
                      icon: 'list-ordered',
                      children: [
                        { id: 'level-4-a', label: 'Level 4 - A', icon: 'type' },
                        { id: 'level-4-b', label: 'Level 4 - B', icon: 'bold' },
                        { id: 'level-4-c', label: 'Level 4 - C', icon: 'case-sensitive' },
                      ],
                    },
                  ],
                },
              ],
            },
            { id: 'sep1', separator: true },
            {
              id: 'tools',
              label: 'Tools',
              icon: 'briefcase',
              children: [
                {
                  id: 'format',
                  label: 'Format',
                  icon: 'palette',
                  children: [
                    {
                      id: 'colors',
                      label: 'Colors',
                      icon: 'palette',
                      children: [
                        { id: 'red', label: 'Red', icon: 'circle' },
                        { id: 'green', label: 'Green', icon: 'circle' },
                        { id: 'blue', label: 'Blue', icon: 'circle' },
                      ],
                    },
                  ],
                },
                {
                  id: 'export',
                  label: 'Export',
                  icon: 'upload',
                  children: [
                    { id: 'pdf', label: 'Export as PDF', icon: 'file-text' },
                    { id: 'html', label: 'Export as HTML', icon: 'globe' },
                  ],
                },
              ],
            },
            { id: 'sep2', separator: true },
            { id: 'help', label: 'Help', icon: 'help-circle' },
          ];
        }
      }, 100);
    };

    window.showDeepNestedMenu = function () {
      const container = document.getElementById('multiLevelMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 700px; margin: 0 auto;">
        <h4>Deep Nested Menu (5 Levels)</h4>
        <p style="color: #6b7280; font-size: 13px;">Demonstrates unlimited nesting capability with 5+ levels</p>
        <div id="deepNestedTarget" style="min-height: 200px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
          <div style="text-align: center;">
            <div style="margin-bottom: 10px;">
              <ui-icon name="network" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
            </div>
            <div style="color: #6b7280; font-size: 14px;">Right-click for deep nested menu</div>
            <div style="color: #9ca3af; font-size: 12px; margin-top: 4px;">Explore 5 levels deep!</div>
          </div>
        </div>
      </div>
      <ui-context-menu id="deepNestedMenu" target="#deepNestedTarget" icon-library="lucide"></ui-context-menu>
    `;
      setTimeout(() => {
        const menu = document.getElementById('deepNestedMenu');
        if (menu) {
          menu.addEventListener('menuItemClick', e => {
            console.log('Deep nested menu clicked:', e.detail);
          });

          menu.items = [
            {
              id: 'level1',
              label: 'Level 1 - Start',
              icon: 'play-circle',
              children: [
                {
                  id: 'level2',
                  label: 'Level 2 - Continue',
                  icon: 'arrow-right-circle',
                  children: [
                    {
                      id: 'level3',
                      label: 'Level 3 - Halfway',
                      icon: 'minus-circle',
                      children: [
                        {
                          id: 'level4',
                          label: 'Level 4 - Almost There',
                          icon: 'arrow-up-circle',
                          children: [
                            { id: 'level5-a', label: 'Level 5 - Option A', icon: 'target' },
                            { id: 'level5-b', label: 'Level 5 - Option B', icon: 'tent' },
                            { id: 'level5-c', label: 'Level 5 - Option C', icon: 'palette' },
                          ],
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            {
              id: 'another-branch',
              label: 'Another Branch',
              icon: 'sprout',
              children: [
                {
                  id: 'sub1',
                  label: 'Sub Level 1',
                  icon: 'folder-open',
                  children: [
                    {
                      id: 'sub2',
                      label: 'Sub Level 2',
                      icon: 'folder',
                      children: [
                        { id: 'end1', label: 'End Point 1', icon: 'flag' },
                        { id: 'end2', label: 'End Point 2', icon: 'medal' },
                      ],
                    },
                  ],
                },
              ],
            },
          ];
        }
      }, 100);
    };

    window.showAdvancedMenu = function () {
      const container = document.getElementById('multiLevelMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 700px; margin: 0 auto;">
        <h4>Advanced Options Menu</h4>
        <p style="color: #6b7280; font-size: 13px;">Complex menu structure with diverse options</p>
        <div id="advancedTarget" style="min-height: 200px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
          <div style="text-align: center;">
            <div style="margin-bottom: 10px;">
              <ui-icon name="settings" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
            </div>
            <div style="color: #6b7280; font-size: 14px;">Right-click for advanced options</div>
          </div>
        </div>
      </div>
      <ui-context-menu id="advancedMenu" target="#advancedTarget" icon-library="lucide"></ui-context-menu>
    `;
      setTimeout(() => {
        const menu = document.getElementById('advancedMenu');
        if (menu) {
          menu.addEventListener('menuItemClick', e => {
            console.log('Advanced menu clicked:', e.detail);
          });

          menu.items = [
            {
              id: 'view',
              label: 'View',
              icon: 'eye',
              children: [
                {
                  id: 'layout',
                  label: 'Layout',
                  icon: 'ruler',
                  children: [
                    { id: 'grid', label: 'Grid View', icon: 'grid' },
                    { id: 'list', label: 'List View', icon: 'list' },
                    { id: 'columns', label: 'Column View', icon: 'columns' },
                  ],
                },
                {
                  id: 'zoom',
                  label: 'Zoom',
                  icon: 'search',
                  children: [
                    { id: 'zoom-in', label: 'Zoom In (Ctrl+)', icon: 'zoom-in' },
                    { id: 'zoom-out', label: 'Zoom Out (Ctrl-)', icon: 'zoom-out' },
                    { id: 'zoom-reset', label: 'Reset Zoom', icon: 'refresh-ccw' },
                  ],
                },
                { id: 'sep1', separator: true },
                { id: 'fullscreen', label: 'Full Screen', icon: 'maximize' },
              ],
            },
            {
              id: 'tools',
              label: 'Tools',
              icon: 'wrench',
              children: [
                {
                  id: 'code',
                  label: 'Code Tools',
                  icon: 'terminal',
                  children: [
                    {
                      id: 'format',
                      label: 'Format',
                      icon: 'palette',
                      children: [
                        { id: 'beautify', label: 'Beautify Code', icon: 'sparkles' },
                        { id: 'minify', label: 'Minify Code', icon: 'package' },
                      ],
                    },
                    {
                      id: 'validate',
                      label: 'Validate',
                      icon: 'check',
                      children: [
                        { id: 'html', label: 'HTML Validator' },
                        { id: 'css', label: 'CSS Validator' },
                        { id: 'js', label: 'JS Linter' },
                      ],
                    },
                  ],
                },
                {
                  id: 'convert',
                  label: 'Convert',
                  icon: 'refresh-cw',
                  children: [
                    { id: 'json-yaml', label: 'JSON to YAML', icon: 'file' },
                    { id: 'yaml-json', label: 'YAML to JSON', icon: 'file-edit' },
                    { id: 'csv-json', label: 'CSV to JSON', icon: 'bar-chart' },
                  ],
                },
              ],
            },
            { id: 'sep2', separator: true },
            { id: 'settings', label: 'Settings', icon: 'settings' },
            { id: 'about', label: 'About', icon: 'info' },
          ];
        }
      }, 100);
    };

    window.showApplicationMenu = function () {
      const container = document.getElementById('multiLevelMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 700px; margin: 0 auto;">
        <h4>Application Menu</h4>
        <p style="color: #6b7280; font-size: 13px;">Full application menu with file, edit, view, and help</p>
        <div id="appTarget" style="min-height: 200px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
          <div style="text-align: center;">
            <div style="margin-bottom: 10px;">
              <ui-icon name="monitor" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
            </div>
            <div style="color: #6b7280; font-size: 14px;">Right-click for application menu</div>
          </div>
        </div>
      </div>
      <ui-context-menu id="appMenu" target="#appTarget" icon-library="lucide"></ui-context-menu>
    `;
      setTimeout(() => {
        const menu = document.getElementById('appMenu');
        if (menu) {
          menu.addEventListener('menuItemClick', e => {
            console.log('Application menu clicked:', e.detail);
          });

          menu.items = [
            {
              id: 'file',
              label: 'File',
              icon: 'folder',
              children: [
                { id: 'new', label: 'New', icon: 'plus' },
                {
                  id: 'open',
                  label: 'Open',
                  icon: 'folder-open',
                  children: [
                    { id: 'open-file', label: 'Open File...', icon: 'file' },
                    { id: 'open-folder', label: 'Open Folder...', icon: 'folder' },
                    { id: 'sep1', separator: true },
                    {
                      id: 'recent',
                      label: 'Recent Files',
                      icon: 'clock',
                      children: [
                        { id: 'file1', label: 'document.txt', icon: 'file-text' },
                        { id: 'file2', label: 'project.json', icon: 'clipboard' },
                        { id: 'file3', label: 'notes.md', icon: 'book' },
                      ],
                    },
                  ],
                },
                { id: 'sep2', separator: true },
                { id: 'save', label: 'Save', icon: 'save' },
                { id: 'save-as', label: 'Save As...', icon: 'save' },
                { id: 'sep3', separator: true },
                { id: 'close', label: 'Close', icon: 'x' },
                { id: 'exit', label: 'Exit', icon: 'log-out' },
              ],
            },
            {
              id: 'edit',
              label: 'Edit',
              icon: 'edit-3',
              children: [
                { id: 'undo', label: 'Undo', icon: 'undo-2' },
                { id: 'redo', label: 'Redo', icon: 'redo-2' },
                { id: 'sep4', separator: true },
                { id: 'cut', label: 'Cut', icon: 'scissors' },
                { id: 'copy', label: 'Copy', icon: 'clipboard' },
                { id: 'paste', label: 'Paste', icon: 'file' },
                { id: 'sep5', separator: true },
                {
                  id: 'find',
                  label: 'Find & Replace',
                  icon: 'search',
                  children: [
                    { id: 'find', label: 'Find...', icon: 'search' },
                    { id: 'replace', label: 'Replace...', icon: 'refresh-ccw' },
                    { id: 'find-in-files', label: 'Find in Files...', icon: 'folder-open' },
                  ],
                },
              ],
            },
            {
              id: 'view',
              label: 'View',
              icon: 'eye',
              children: [
                { id: 'sidebar', label: 'Toggle Sidebar', icon: 'bar-chart' },
                { id: 'status', label: 'Toggle Status Bar', icon: 'ruler' },
                { id: 'sep6', separator: true },
                {
                  id: 'appearance',
                  label: 'Appearance',
                  icon: 'palette',
                  children: [
                    {
                      id: 'theme',
                      label: 'Theme',
                      icon: 'moon',
                      children: [
                        { id: 'light', label: 'Light Theme', icon: 'sun' },
                        { id: 'dark', label: 'Dark Theme', icon: 'moon' },
                        { id: 'auto', label: 'Auto (System)', icon: 'refresh-cw' },
                      ],
                    },
                    { id: 'font-size', label: 'Increase Font Size', icon: 'zoom-in' },
                  ],
                },
              ],
            },
            { id: 'sep7', separator: true },
            { id: 'help', label: 'Help', icon: 'help-circle' },
          ];
        }
      }, 100);
    };

    window.showDeveloperMenu = function () {
      const container = document.getElementById('multiLevelMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 700px; margin: 0 auto;">
        <h4>Developer Tools Menu</h4>
        <p style="color: #6b7280; font-size: 13px;">Developer-focused menu with debugging and tools</p>
        <div id="devTarget" style="min-height: 200px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
          <div style="text-align: center;">
            <div style="margin-bottom: 10px;">
              <ui-icon name="terminal" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
            </div>
            <div style="color: #6b7280; font-size: 14px;">Right-click for developer menu</div>
          </div>
        </div>
      </div>
      <ui-context-menu id="devMenu" target="#devTarget" icon-library="lucide"></ui-context-menu>
    `;
      setTimeout(() => {
        const menu = document.getElementById('devMenu');
        if (menu) {
          menu.addEventListener('menuItemClick', e => {
            console.log('Developer menu clicked:', e.detail);
          });

          menu.items = [
            {
              id: 'inspect',
              label: 'Inspect',
              icon: 'search',
              children: [
                { id: 'element', label: 'Inspect Element', icon: 'target' },
                { id: 'console', label: 'Console', icon: 'terminal' },
                { id: 'network', label: 'Network', icon: 'globe' },
                { id: 'performance', label: 'Performance', icon: 'zap' },
              ],
            },
            {
              id: 'debug',
              label: 'Debug',
              icon: 'bug',
              children: [
                { id: 'start', label: 'Start Debugging', icon: 'play' },
                { id: 'stop', label: 'Stop Debugging', icon: 'square' },
                { id: 'sep1', separator: true },
                {
                  id: 'breakpoints',
                  label: 'Breakpoints',
                  icon: 'circle',
                  children: [
                    { id: 'add-bp', label: 'Add Breakpoint', icon: 'plus' },
                    { id: 'remove-bp', label: 'Remove All Breakpoints', icon: 'trash-2' },
                    { id: 'toggle-bp', label: 'Toggle Breakpoint', icon: 'refresh-ccw' },
                  ],
                },
              ],
            },
            {
              id: 'build',
              label: 'Build',
              icon: 'construction',
              children: [
                { id: 'compile', label: 'Compile', icon: 'settings' },
                { id: 'build-prod', label: 'Build for Production', icon: 'package' },
                {
                  id: 'optimize',
                  label: 'Optimize',
                  icon: 'sparkles',
                  children: [
                    { id: 'minify', label: 'Minify', icon: 'trending-down' },
                    { id: 'treeshake', label: 'Tree Shake', icon: 'tree-deciduous' },
                    { id: 'compress', label: 'Compress Assets', icon: 'minimize-2' },
                  ],
                },
              ],
            },
            {
              id: 'git',
              label: 'Git',
              icon: 'git-branch',
              children: [
                { id: 'commit', label: 'Commit', icon: 'save' },
                { id: 'push', label: 'Push', icon: 'arrow-up' },
                { id: 'pull', label: 'Pull', icon: 'arrow-down' },
                { id: 'sep2', separator: true },
                {
                  id: 'branch',
                  label: 'Branch',
                  icon: 'git-branch',
                  children: [
                    { id: 'new-branch', label: 'New Branch', icon: 'plus' },
                    { id: 'switch', label: 'Switch Branch', icon: 'refresh-ccw' },
                    { id: 'merge', label: 'Merge Branch', icon: 'git-merge' },
                  ],
                },
              ],
            },
            { id: 'sep3', separator: true },
            { id: 'settings', label: 'Developer Settings', icon: 'settings' },
          ];
        }
      }, 100);
    };

    window.showSmartPositionMenu = function () {
      const container = document.getElementById('multiLevelMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
      <div style="max-width: 800px; margin: 0 auto;">
        <h4>Smart Positioning & Persistent Expansion</h4>
        <p style="color: #6b7280; font-size: 13px;">Menu with persistent expansion (click arrows to toggle), close buttons, badges, and keyboard navigation</p>
        <div style="margin: 15px 0; padding: 12px; background: #f0f9ff; border-radius: 6px; border: 1px solid #bae6fd;">
          <strong style="color: #1e3a8a;">💡 Features:</strong>
          <ul style="margin: 8px 0 0 0; padding-left: 20px; color:var(--accent-blue,#1e40af); font-size: 13px;">
            <li>Click menu items with arrows to toggle submenus</li>
            <li>Submenus stay open until you click the × close button</li>
            <li>Use keyboard: ← → ↑ ↓ Enter Space Esc Home End</li>
            <li>Notice badges, shortcuts, and icons</li>
            <li>Try right-clicking in different corners</li>
          </ul>
        </div>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 15px; margin: 20px 0;">
          <div id="topLeftTarget" style="min-height: 150px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--accent-yellow-soft,#fef3c7); cursor: context-menu;">
            <div style="text-align: center;">
              <div style="margin-bottom: 10px;">
                <ui-icon name="arrow-up-left" library="lucide" size="32px"></ui-icon>
              </div>
              <div style="color:var(--accent-yellow,#92400e); font-size: 12px; font-weight: 600;">Top-Left Corner</div>
            </div>
          </div>
          <div id="topRightTarget" style="min-height: 150px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--accent-blue-soft,#dbeafe); cursor: context-menu;">
            <div style="text-align: center;">
              <div style="margin-bottom: 10px;">
                <ui-icon name="arrow-up-right" library="lucide" size="32px"></ui-icon>
              </div>
              <div style="color:var(--accent-blue,#1e40af); font-size: 12px; font-weight: 600;">Top-Right Corner</div>
            </div>
          </div>
          <div id="bottomLeftTarget" style="min-height: 150px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--accent-green-soft,#dcfce7); cursor: context-menu;">
            <div style="text-align: center;">
             <div style="margin-bottom: 10px;">
                <ui-icon name="arrow-down-left" library="lucide" size="32px"></ui-icon>
              </div>
              <div style="color: var(--accent-green,#166534); font-size: 12px; font-weight: 600;">Bottom-Left Corner</div>
            </div>
          </div>
          <div id="bottomRightTarget" style="min-height: 150px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--accent-pink-soft,#fce7f3); cursor: context-menu;">
            <div style="text-align: center;">
              <div style="margin-bottom: 10px;">
                <ui-icon name="arrow-down-right" library="lucide" size="32px"></ui-icon>
              </div>
              <div style="color: #9f1239; font-size: 12px; font-weight: 600;">Bottom-Right Corner</div>
            </div>
          </div>
        </div>
      </div>
      <ui-context-menu 
        id="smartMenu" 
        target="#topLeftTarget, #topRightTarget, #bottomLeftTarget, #bottomRightTarget"
        persistent="true"
        show-close-button="true"
        menu-title="Enhanced Menu"
        keyboard-nav="true"
        icon-library="lucide">
      </ui-context-menu>
    `;
      setTimeout(() => {
        const menu = document.getElementById('smartMenu');
        if (menu) {
          menu.addEventListener('menuItemClick', e => {
            console.log('Smart menu clicked:', e.detail.label);
            alert(`You clicked: ${e.detail.label}`);
          });

          menu.addEventListener('menuOpen', e => {
            console.log('Menu opened at:', e.detail);
          });

          menu.addEventListener('menuClose', () => {
            console.log('Menu closed');
          });

          menu.items = [
            {
              id: 'file',
              label: 'File',
              icon: 'folder',
              children: [
                { id: 'new', label: 'New File', icon: 'file', shortcut: 'Ctrl+N' },
                { id: 'open', label: 'Open', icon: 'folder-open', shortcut: 'Ctrl+O' },
                { id: 'save', label: 'Save', icon: 'save', shortcut: 'Ctrl+S' },
                { id: 'sep1', separator: true },
                {
                  id: 'recent',
                  label: 'Recent Files',
                  icon: 'clock',
                  badge: '5',
                  children: [
                    { id: 'file1', label: 'project.json', icon: 'clipboard' },
                    { id: 'file2', label: 'readme.md', icon: 'file-edit' },
                    { id: 'file3', label: 'config.ts', icon: 'settings' },
                    { id: 'sep2', separator: true },
                    { id: 'clear', label: 'Clear History', icon: 'trash-2' },
                  ],
                },
                {
                  id: 'export',
                  label: 'Export',
                  icon: 'upload',
                  children: [
                    { id: 'pdf', label: 'Export as PDF', icon: 'file-text' },
                    { id: 'html', label: 'Export as HTML', icon: 'globe' },
                    { id: 'markdown', label: 'Export as Markdown', icon: 'file-edit' },
                  ],
                },
              ],
            },
            {
              id: 'edit',
              label: 'Edit',
              icon: 'edit-3',
              children: [
                { id: 'undo', label: 'Undo', icon: 'undo-2', shortcut: 'Ctrl+Z' },
                { id: 'redo', label: 'Redo', icon: 'redo-2', shortcut: 'Ctrl+Y' },
                { id: 'sep3', separator: true },
                { id: 'cut', label: 'Cut', icon: 'scissors', shortcut: 'Ctrl+X' },
                { id: 'copy', label: 'Copy', icon: 'clipboard', shortcut: 'Ctrl+C' },
                { id: 'paste', label: 'Paste', icon: 'file', shortcut: 'Ctrl+V' },
                { id: 'sep4', separator: true },
                {
                  id: 'find',
                  label: 'Find & Replace',
                  icon: 'search',
                  children: [
                    { id: 'find-text', label: 'Find', icon: 'search', shortcut: 'Ctrl+F' },
                    { id: 'replace', label: 'Replace', icon: 'refresh-ccw', shortcut: 'Ctrl+H' },
                    { id: 'find-all', label: 'Find in Files', icon: 'folder-open', shortcut: 'Ctrl+Shift+F' },
                  ],
                },
              ],
            },
            {
              id: 'view',
              label: 'View',
              icon: 'eye',
              badge: '3',
              children: [
                { id: 'fullscreen', label: 'Full Screen', icon: 'maximize', shortcut: 'F11' },
                { id: 'zoom-in', label: 'Zoom In', icon: 'zoom-in', shortcut: 'Ctrl++' },
                { id: 'zoom-out', label: 'Zoom Out', icon: 'zoom-out', shortcut: 'Ctrl+-' },
                { id: 'sep5', separator: true },
                {
                  id: 'panels',
                  label: 'Panels',
                  icon: 'layout',
                  children: [
                    { id: 'sidebar', label: 'Toggle Sidebar', icon: 'sidebar' },
                    { id: 'terminal', label: 'Terminal', icon: 'terminal', badge: 'new' },
                    { id: 'output', label: 'Output Panel', icon: 'bar-chart' },
                  ],
                },
              ],
            },
            { id: 'sep6', separator: true },
            { id: 'disabled', label: 'Disabled Item', icon: 'ban', disabled: true },
            { id: 'help', label: 'Help & Support', icon: 'help-circle', shortcut: 'F1' },
          ];
        }
      }, 100);
    };

    // Initialize home multi-level menu
    window.initHomeMultiLevelMenu = function () {
      const menu = document.getElementById('homeMultiLevelMenu');
      if (!menu) return;

      setTimeout(() => {
        menu.items = [
          {
            id: 'file',
            label: 'File',
            icon: 'folder',
            children: [
              { id: 'new', label: 'New', icon: 'plus' },
              { id: 'open', label: 'Open', icon: 'folder-open' },
              { id: 'save', label: 'Save', icon: 'save' },
            ],
          },
          {
            id: 'edit',
            label: 'Edit',
            icon: 'edit-3',
            children: [
              { id: 'undo', label: 'Undo', icon: 'undo-2' },
              { id: 'redo', label: 'Redo', icon: 'redo-2' },
            ],
          },
        ];
      }, 200);
    };

    showBasicMultiLevelMenu();
  }, 100);
}

// Interactive Playground Functions
window.showInteractiveMultiLevelMenu = function () {
  const container = document.getElementById('multiLevelMenuDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div style="background-color:var(--bg-primary,white); border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
      <div style="display: flex; gap: 30px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 250px;">
          <h3 style="margin-top: 0;">🎮 Interactive Playground</h3>
          <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
            <ui-checkbox id="multiLevelPersistent" label="Persistent Expansion" oncheckboxchange="updateInteractiveMultiLevelMenu()"></ui-checkbox>
            
            <ui-checkbox id="multiLevelShowClose" label="Show Close Button" oncheckboxchange="updateInteractiveMultiLevelMenu()"></ui-checkbox>
            
            <ui-checkbox id="multiLevelKeyboardNav" checked label="Keyboard Navigation" oncheckboxchange="updateInteractiveMultiLevelMenu()"></ui-checkbox>
            
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: 500;">Menu Title:</label>
              <ui-input type="text" id="multiLevelMenuTitle" value="" placeholder="Optional title" onchange="updateInteractiveMultiLevelMenu()"
                style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px;">
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: 500;">Menu Items (JSON):</label>
              <textarea id="multiLevelMenuItems" onchange="updateInteractiveMultiLevelMenu()" 
                style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; font-family: monospace; font-size: 12px; min-height: 300px;">[
  {
    "id": "file",
    "label": "File",
    "icon": "folder",
    "children": [
      {"id": "new", "label": "New", "icon": "plus"},
      {"id": "open", "label": "Open", "icon": "folder-open"},
      {"id": "save", "label": "Save", "icon": "save"}
    ]
  },
  {
    "id": "edit",
    "label": "Edit",
    "icon": "edit-3",
    "children": [
      {"id": "undo", "label": "Undo", "icon": "undo-2"},
      {"id": "redo", "label": "Redo", "icon": "redo-2"},
      {"id": "sep1", "separator": true},
      {"id": "cut", "label": "Cut", "icon": "scissors"},
      {"id": "copy", "label": "Copy", "icon": "clipboard"}
    ]
  },
  {"id": "sep2", "separator": true},
  {"id": "help", "label": "Help", "icon": "help-circle"}
]</textarea>
            </div>
            
            <div style="padding: 10px; background: #f0f9ff; border-radius: 4px; font-size: 12px;">
              <strong>💡 Tip:</strong> Right-click the preview area to open the menu
            </div>
          </div>
        </div>
        
        <div style="flex: 1; min-width: 300px; background-color: #f9fafb; padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
          <h4 style="margin-top: 0;">Preview:</h4>
          <div id="interactiveMultiLevelMenuTarget" style="margin-top: 20px; min-height: 300px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-primary,white); cursor: context-menu;">
            <div style="text-align: center;">
              <div style="margin-bottom: 10px;">
                <ui-icon name="mouse-pointer-2" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
              </div>
              <div style="color: #6b7280; font-size: 14px;">Right-click here</div>
            </div>
          </div>
          <div id="multiLevelMenuOutput" style="margin-top: 20px; padding: 10px; background-color:var(--bg-primary,white); border-radius: 4px; font-family: monospace; font-size: 12px; display: none;"></div>
        </div>
      </div>
    </div>
    <ui-context-menu id="interactiveMultiLevelMenuComponent" target="#interactiveMultiLevelMenuTarget" icon-library="lucide"></ui-context-menu>
  `;

  updateInteractiveMultiLevelMenu();
};

window.updateInteractiveMultiLevelMenu = function () {
  const persistent = document.getElementById('multiLevelPersistent').checked;
  const showClose = document.getElementById('multiLevelShowClose').checked;
  const keyboardNav = document.getElementById('multiLevelKeyboardNav').checked;
  const menuTitle = document.getElementById('multiLevelMenuTitle').value;
  const itemsText = document.getElementById('multiLevelMenuItems').value;

  const menu = document.getElementById('interactiveMultiLevelMenuComponent');
  const outputDiv = document.getElementById('multiLevelMenuOutput');

  if (!menu) return;

  try {
    const items = JSON.parse(itemsText);

    menu.setAttribute('persistent', persistent.toString());
    menu.setAttribute('show-close-button', showClose.toString());
    menu.setAttribute('keyboard-nav', keyboardNav.toString());
    if (menuTitle) {
      menu.setAttribute('menu-title', menuTitle);
    } else {
      menu.removeAttribute('menu-title');
    }
    menu.items = items;

    // Remove old listener and add new one
    const newMenu = menu.cloneNode(true);
    menu.parentNode.replaceChild(newMenu, menu);

    setTimeout(() => {
      const updatedMenu = document.getElementById('interactiveMultiLevelMenuComponent');
      if (updatedMenu) {
        updatedMenu.setAttribute('persistent', persistent.toString());
        updatedMenu.setAttribute('show-close-button', showClose.toString());
        updatedMenu.setAttribute('keyboard-nav', keyboardNav.toString());
        if (menuTitle) {
          updatedMenu.setAttribute('menu-title', menuTitle);
        }
        updatedMenu.items = items;

        updatedMenu.addEventListener('menuItemClick', event => {
          if (outputDiv) {
            outputDiv.style.display = 'block';
            outputDiv.textContent = `Menu item clicked: ${JSON.stringify(event.detail)}`;
          }
        });
      }
    }, 50);

    if (outputDiv) {
      outputDiv.style.display = 'none';
    }
  } catch (error) {
    if (outputDiv) {
      outputDiv.style.display = 'block';
      outputDiv.style.color = '#ef4444';
      outputDiv.textContent = `Invalid JSON: ${error.message}`;
    }
  }
};
