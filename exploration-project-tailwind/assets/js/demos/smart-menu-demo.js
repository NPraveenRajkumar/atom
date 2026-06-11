// Smart Menu Demo Functions
export function initSmartMenuDemo() {
  const section = document.getElementById('smart-menu');
  if (!section) return;

  section.innerHTML = `
    
    <p>Advanced context menu with smart positioning and submenu support.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showBasicSmartMenu()"  variant="outline">Basic Menu</ui-button>
      <ui-button onclick="showNestedSmartMenu()"  variant="outline">Nested Submenus</ui-button>
      <ui-button onclick="showFileOperationsMenu()"  variant="outline">File Operations</ui-button>
      <ui-button onclick="showInteractiveSmartMenu()"  variant="outline">?? Interactive Playground</ui-button>
    </div>

    <div id="smartMenuDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    // Smart Menu Demo Functions
    window.showBasicSmartMenu = function () {
      const container = document.getElementById('smartMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto;">
          <h4>Basic Smart Menu</h4>
          <p style="color: #6b7280; font-size: 13px;">Right-click on the area below to open the smart menu</p>
          <div id="basicSmartTarget" style="min-height: 200px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
            <div style="text-align: center;">
              <div style="margin-bottom: 10px;">
                <ui-icon name="mouse-pointer-2" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
              </div>
              <div style="color: #6b7280; font-size: 14px;">Right-click here to open menu</div>
            </div>
          </div>
          <div id="smartMenuLog" style="margin-top: 20px; padding: 12px; background: #f0f9ff; border-radius: 6px; font-size: 13px;">
            <strong>Event Log:</strong>
            <div style="margin-top: 8px; color: #6b7280;">Right-click to trigger menu...</div>
          </div>
        </div>
        <ui-smart-context-menu id="basicSmartMenu" icon-library="lucide"></ui-smart-context-menu>
      `;
      setTimeout(() => {
        const menu = document.getElementById('basicSmartMenu');
        console.log('Basic smart menu element:', menu);
        if (menu) {
          function logAction(action) {
            const log = document.querySelector('#smartMenuLog div');
            if (log) {
              log.innerHTML = `<div style="color:var(--accent-blue,#1e40af);"><strong>${action}</strong> clicked at ${new Date().toLocaleTimeString()}</div>`;
            }
          }

          // Add event listener for menu item clicks
          menu.addEventListener('menuItemClick', e => {
            console.log('Smart menu item clicked:', e.detail);
            if (e.detail && e.detail.label) {
              logAction(e.detail.label);
            }
          });

          const basicItems = [
            { label: 'Copy', icon: 'clipboard', action: () => logAction('Copy') },
            { label: 'Paste', icon: 'clipboard-paste', action: () => logAction('Paste') },
            { label: 'divider', divider: true },
            { label: 'Delete', icon: 'trash-2', action: () => logAction('Delete') },
          ];

          menu.items = basicItems;
          menu.setAttribute('target', '#basicSmartTarget');
          console.log('Smart menu items set:', menu.items);
        }
      }, 100);
    };

    window.showNestedSmartMenu = function () {
      const container = document.getElementById('smartMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto;">
          <h4>Nested Smart Menu</h4>
          <p style="color: #6b7280; font-size: 13px;">Multi-level menu with submenus</p>
          <div id="nestedSmartTarget" style="min-height: 200px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
            <div style="text-align: center;">
               <div style="margin-bottom: 10px;">
                <ui-icon name="folder-tree" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
              </div>
              <div style="color: #6b7280; font-size: 14px;">Right-click for file operations</div>
            </div>
          </div>
        </div>
        <ui-smart-context-menu id="nestedSmartMenu" icon-library="lucide"></ui-smart-context-menu>
      `;
      setTimeout(() => {
        const menu = document.getElementById('nestedSmartMenu');
        if (menu) {
          const nestedItems = [
            {
              label: 'Level 1 - Main',
              icon: 'folder',
              submenu: [
                {
                  label: 'Level 2 - A',
                  icon: 'file',
                  submenu: [
                    {
                      label: 'Level 3 - A',
                      icon: 'file-text',
                      submenu: [
                        {
                          label: 'Level 4 - A',
                          icon: 'file-plus',
                          submenu: [
                            {
                              label: 'Level 5 - Option 1',
                              icon: 'check-circle',
                              action: () => console.log('Level 5 - Option 1'),
                            },
                            {
                              label: 'Level 5 - Option 2',
                              icon: 'check-circle',
                              action: () => console.log('Level 5 - Option 2'),
                            },
                          ],
                        },
                        {
                          label: 'Level 4 - B',
                          icon: 'file-minus',
                          action: () => console.log('Level 4 - B'),
                        },
                      ],
                    },
                    {
                      label: 'Level 3 - B',
                      icon: 'file-text',
                      action: () => console.log('Level 3 - B'),
                    },
                  ],
                },
                {
                  label: 'Level 2 - B',
                  icon: 'file',
                  action: () => console.log('Level 2 - B'),
                },
              ],
            },
            {
              label: 'Top Option',
              icon: 'arrow-up-circle',
              action: () => console.log('Top Option'),
            },
            {
              label: 'Level 1 - Extra',
              icon: 'star',
              submenu: [
                {
                  label: 'Level 2 - C',
                  icon: 'file',
                  submenu: [
                    {
                      label: 'Level 3 - C',
                      icon: 'file-text',
                      action: () => console.log('Level 3 - C'),
                    },
                  ],
                },
              ],
            },
            { label: 'divider', divider: true },
            { label: 'Delete', icon: 'trash-2', action: () => console.log('Delete') },
          ];

          menu.items = nestedItems;
          menu.setAttribute('target', '#nestedSmartTarget');
        }
      }, 100);
    };

    window.showFileOperationsMenu = function () {
      const container = document.getElementById('smartMenuDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div style="max-width: 600px; margin: 0 auto;">
          <h4>File Operations Menu</h4>
          <p style="color: #6b7280; font-size: 13px;">Complete file management operations</p>
          <div id="fileSmartTarget" style="min-height: 200px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f9fafb); cursor: context-menu; margin: 20px 0;">
            <div style="text-align: center;">
              <div style="margin-bottom: 10px;">
                <ui-icon name="folder-open" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
              </div>
              <div style="color: #6b7280; font-size: 14px; font-weight: 600;">Project Files</div>
              <div style="color: #9ca3af; font-size: 12px; margin-top: 4px;">Right-click for file operations</div>
            </div>
          </div>
        </div>
        <ui-smart-context-menu id="fileSmartMenu" icon-library="lucide"></ui-smart-context-menu>
      `;
      setTimeout(() => {
        const menu = document.getElementById('fileSmartMenu');
        if (menu) {
          const fileItems = [
            {
              label: 'New',
              icon: 'plus',
              submenu: [
                { label: 'File', icon: 'file', action: () => console.log('New file') },
                { label: 'Folder', icon: 'folder', action: () => console.log('New folder') },
                { label: 'divider', divider: true },
                { label: 'Project', icon: 'building', action: () => console.log('New project') },
              ],
            },
            { label: 'Open', icon: 'folder-open', action: () => console.log('Open') },
            { label: 'Save', icon: 'save', action: () => console.log('Save') },
            { label: 'divider', divider: true },
            {
              label: 'Share',
              icon: 'share-2',
              submenu: [
                { label: 'Email', icon: 'mail', action: () => console.log('Share via email') },
                { label: 'Link', icon: 'link', action: () => console.log('Share link') },
                { label: 'Cloud', icon: 'cloud', action: () => console.log('Share to cloud') },
              ],
            },
            { label: 'Delete', icon: 'trash-2', action: () => console.log('Delete') },
          ];

          menu.items = fileItems;
          menu.setAttribute('target', '#fileSmartTarget');
        }
      }, 100);
    };

    // Initialize with basic menu
    showBasicSmartMenu();
  }, 100);
}

// Interactive Playground Functions
window.showInteractiveSmartMenu = function () {
  const container = document.getElementById('smartMenuDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div style="background-color:var(--bg-primary,white); border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
      <div style="display: flex; gap: 30px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 250px;">
          <h3 style="margin-top: 0;">?? Interactive Playground</h3>
          <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
            <div>
              <label style="display: block; margin-bottom: 5px; font-weight: 500;">Menu Items (JSON):</label>
              <textarea id="smartMenuItems" onchange="updateInteractiveSmartMenu()"
                style="width: 100%; padding: 8px; border: 1px solid #d1d5db; border-radius: 4px; font-family: monospace; font-size: 12px; min-height: 300px;"></textarea>
            </div>
            <div style="display:flex; gap:8px; flex-wrap:wrap;">
              <ui-button id="addSmartNewButton" style="background:#10b981; color:white; border:none; padding:6px 10px; border-radius:6px; font-size:12px; cursor:pointer;">? Add 'New' Button</ui-button>
              <ui-button id="resetSmartItems" style="background:#6b7280; color:white; border:none; padding:6px 10px; border-radius:6px; font-size:12px; cursor:pointer;">Reset</ui-button>
            </div>

            <div style="padding: 10px; background: #f0f9ff; border-radius: 4px; font-size: 12px;">
              <strong>?? Tip:</strong> Right-click the preview area to open the menu
            </div>
          </div>
        </div>

        <div style="flex: 1; min-width: 300px; background-color: #f9fafb; padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
          <h4 style="margin-top: 0;">Preview:</h4>
          <div id="interactiveSmartMenuTarget" style="margin-top: 20px; min-height: 300px; border: 2px dashed #cbd5e1; border-radius: 8px; display: flex; align-items: center; justify-content: center; background:var(--bg-primary,white); cursor: context-menu;">
            <div style="text-align: center;">
               <div style="margin-bottom: 10px;">
                <ui-icon name="mouse-pointer-2" library="lucide" size="48px" style="color:var(--text-secondary,#64748b);"></ui-icon>
              </div>
              <div style="color: #6b7280; font-size: 14px;">Right-click here</div>
            </div>
          </div>
          <div id="smartMenuOutput" style="margin-top: 20px; padding: 10px; background-color:var(--bg-primary,white); border-radius: 4px; font-family: monospace; font-size: 12px; display: none;"></div>
        </div>
      </div>
    </div>
    <ui-smart-context-menu id="interactiveSmartMenuComponent" icon-library="lucide"></ui-smart-context-menu>
  `;

  // Set initial textarea value
  const textarea = document.getElementById('smartMenuItems');
  if (textarea) {
    const defaultItems = [
      { label: 'Copy', icon: 'clipboard', action: () => console.log('Copy') },
      { label: 'Paste', icon: 'clipboard-paste', action: () => console.log('Paste') },
      { label: 'divider', divider: true },
      { label: 'Delete', icon: 'trash-2', action: () => console.log('Delete') },
    ];
    textarea.value = JSON.stringify(defaultItems, null, 2);
  }

  updateInteractiveSmartMenu();

  // Wire playground buttons
  const addBtn = document.getElementById('addSmartNewButton');
  const resetBtn = document.getElementById('resetSmartItems');
  if (addBtn && textarea) {
    addBtn.onclick = () => {
      try {
        const data = JSON.parse(textarea.value);
        const hasNew = Array.isArray(data) && data.some(it => it && it.label === 'New');
        if (!hasNew) {
          data.unshift({
            label: 'New',
            icon: 'plus',
            submenu: [
              { label: 'File', icon: 'file', action: () => console.log('New file') },
              { label: 'Folder', icon: 'folder', action: () => console.log('New folder') },
            ],
          });
          textarea.value = JSON.stringify(data, null, 2);
          window.updateInteractiveSmartMenu();
        }
      } catch {}
    };
  }
  if (resetBtn && textarea) {
    resetBtn.onclick = () => {
      const defaultItems = [
        { label: 'Copy', icon: 'clipboard', action: () => console.log('Copy') },
        { label: 'Paste', icon: 'clipboard-paste', action: () => console.log('Paste') },
        { label: 'divider', divider: true },
        { label: 'Delete', icon: 'trash-2', action: () => console.log('Delete') },
      ];
      textarea.value = JSON.stringify(defaultItems, null, 2);
      window.updateInteractiveSmartMenu();
    };
  }
};

window.updateInteractiveSmartMenu = function () {
  const itemsText = document.getElementById('smartMenuItems').value;
  const menu = document.getElementById('interactiveSmartMenuComponent');
  const outputDiv = document.getElementById('smartMenuOutput');

  if (!menu) return;

  try {
    const items = JSON.parse(itemsText);
    menu.items = items;
    menu.setAttribute('target', '#interactiveSmartMenuTarget');

    // Remove old listener and add new one
    const newMenu = menu.cloneNode(true);
    menu.parentNode.replaceChild(newMenu, menu);

    setTimeout(() => {
      const updatedMenu = document.getElementById('interactiveSmartMenuComponent');
      if (updatedMenu) {
        updatedMenu.items = items;
        updatedMenu.setAttribute('target', '#interactiveSmartMenuTarget');

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
