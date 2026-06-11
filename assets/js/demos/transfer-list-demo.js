export function initTransferListDemo() {
  const section = document.getElementById('transfer-list');
  if (!section) return;

  const sourceItems = [
    { key: 1, label: 'Task 1', description: 'Development task', icon: 'code' },
    { key: 2, label: 'Task 2', description: 'Design update', icon: 'pen-tool' },
    { key: 3, label: 'Meeting', description: 'Weekly sync', icon: 'calendar' },
    { key: 4, label: 'Bug Fix', description: 'Urgent', icon: 'alert-circle' },
    { key: 5, label: 'Review', description: 'Code review', icon: 'check-circle' },
    { key: 6, label: 'Deployment', description: 'Prod release', icon: 'server' },
    { key: 7, label: 'Testing', description: 'E2E tests', icon: 'test-tube' },
    { key: 8, label: 'Docs', description: 'Update readme', icon: 'file-text' },
  ];

  const treeItems = [
    { key: 'p1', label: 'Parent 1' },
    {
      key: 'p2',
      label: 'Parent 2',
      children: [
        { key: 'c1', label: 'Child 1' },
        { key: 'c2', label: 'Child 2' },
      ],
    },
    {
      key: 'p3',
      label: 'Parent 3',
      children: [
        { key: 'c3', label: 'Child 3' },
        { key: 'c4', label: 'Child 4' },
      ],
    },
  ];

  const tableColumns = [
    { title: 'Name', dataIndex: 'label' },
    { title: 'Type', dataIndex: 'description' },
  ];

  section.innerHTML = `
    <p>Efficiently move and reorder items between lists with advanced modes and premium features.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="window.showGodTierDemo()"  label="🌌 God Tier"  variant="outline"></ui-button>
      <ui-button onclick="showTransferPlayground()"  label="🎮 Playground" variant="outline"></ui-button>
      <ui-button onclick="showDragDemo()"  label="Drag & Drop" variant="outline"></ui-button>
      <ui-button onclick="showTreeDemo()"  label="Tree Mode" variant="outline"></ui-button>
      <ui-button onclick="showTableDemo()"  label="Table Mode" variant="outline"></ui-button>
      <ui-button onclick="showPaginationDemo()"  label="Pagination" variant="outline"></ui-button>
      <ui-button onclick="showOneWayDemo()"  label="One-Way" variant="outline"></ui-button>
      <ui-button onclick="showReorderDemo()"  label="Reorder & Max" variant="outline"></ui-button>
      <ui-button onclick="showStatesDemo()"  label="Disabled Items" variant="outline"></ui-button>
      <ui-button onclick="showSkeletonDemo()"  label="Skeleton Loading" class="premium-btn" variant="outline"></ui-button>
      <ui-button onclick="showCustomRenderDemo()"  label="Custom Render" class="premium-btn" variant="outline"></ui-button>
      <ui-button onclick="showCustomFilterDemo()"  label="Custom Filter" class="premium-btn" variant="outline"></ui-button>
    </div>

    <style>
        .demo-btn {
            padding: 8px 16px;
            background-color: #f3f4f6;
            color: #374151;
            border: 1px solid #d1d5db;
            border-radius: 6px;
            cursor: pointer;
            transition: all 0.2s;
            font-weight: 500;
        }
        .demo-btn:hover {
            background-color: #e5e7eb;
            border-color: #9ca3af;
        }
        .playground-btn {
            background-color:var(--accent-purple,#8b5cf6);
            color: white;
            border-color:var(--accent-purple,#7c3aed);
        }
        .playground-btn:hover {
            background-color:var(--accent-purple,#7c3aed);
        }
        .premium-btn {
            background-color: #ecfdf5;
            color:var(--accent-green,#047857);
            border-color: #a7f3d0;
        }
        .premium-btn:hover {
            background-color: var(--accent-green-soft,#d1fae5);
            border-color: #34d399;
        }
        .playground-settings {
            padding: 20px;
            border-radius: 8px;
            margin-bottom: 20px;
        }
        .settings-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 15px;
        }
        .setting-item {
            display: flex;
            flex-direction: column;
            gap: 5px;
        }
        .setting-item label {
            font-size: 13px;
            font-weight: 600;
            color: var(--text-secondary, #374151);
        }
        .setting-item select, .setting-item input[type="text"], .setting-item input[type="number"] {
            padding: 6px 10px;
            border: 1px solid var(--border-default, #d1d5db);
            border-radius: 4px;
            font-size: 14px;
            background-color: var(--bg-primary, white);
            color: var(--text-primary, black);
        }
        .setting-row {
            display: flex;
            align-items: center;
            gap: 10px;
            font-size: 14px;
            cursor: pointer;
        }
    </style>

    <div id="transferDemoContainer" style="margin-top: 20px;"></div>
  `;

  window.showTransferPlayground = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <p style="color: var(--text-secondary, #6b7280); margin-bottom: 20px;">Toggle props and see the Transfer List in action.</p>
        
        <div class="playground-settings" style="background: var(--bg-secondary); border: 1px solid var(--border-default);">
          <div class="settings-grid">
            <div class="setting-item">
              <label style="color: var(--text-primary);">Mode</label>
              <ui-dropdown id="pg-mode" value="list" options='[{"label":"List","value":"list"},{"label":"Tree","value":"tree"},{"label":"Table","value":"table"}]'></ui-dropdown>
            </div>
            <div class="setting-item">
              <label style="color: var(--text-primary);">Search Placeholder</label>
              <ui-input id="pg-searchPlaceholder" value="Search items..."></ui-input>
            </div>
            <div class="setting-item">
              <label style="color: var(--text-primary);">Max Selected Items</label>
              <ui-number-input id="pg-max" value="10" min="1"></ui-number-input>
            </div>
            <div class="setting-item">
               <label style="color: var(--text-primary);">List Height</label>
               <ui-input id="pg-height" value="300px"></ui-input>
            </div>
          </div>
          
          <div style="display: flex; flex-wrap: wrap; gap: 20px; margin-top: 20px; padding-top: 15px; border-top: 1px solid var(--border-default);">
            <ui-checkbox id="pg-searchable" label="Searchable" checked="true"></ui-checkbox>
            <ui-checkbox id="pg-enableDrag" label="Enable Drag" checked="true"></ui-checkbox>
            <ui-checkbox id="pg-sortable" label="Sortable"></ui-checkbox>
            <ui-checkbox id="pg-allowReorder" label="Allow Reorder" checked="true"></ui-checkbox>
            <ui-checkbox id="pg-oneWay" label="One Way"></ui-checkbox>
            <ui-checkbox id="pg-pagination" label="Pagination"></ui-checkbox>
            <ui-checkbox id="pg-loading" label="Loading"></ui-checkbox>
          </div>
        </div>

        <div id="playgroundPreview" class="playground-preview" style="padding: 20px;">
          <ui-transfer-list id="playground-component" icon-library="lucide"></ui-transfer-list>
        </div>
        
        <div id="pg-events" style="margin-top: 20px; padding: 15px; background: var(--bg-secondary, #f8fafc); border-radius: 6px; font-family: monospace; font-size: 12px; max-height: 150px; overflow: auto; border: 1px solid var(--border-default, #e2e8f0); color: var(--text-primary);">
          <div style="color: var(--text-secondary, #64748b); margin-bottom: 5px;">Events Log:</div>
          <div id="pg-log-content"></div>
        </div>

        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button onclick="copyTransferCode()" id="copyTransferBtn" variant="outline" color="secondary" label="Copy" size="md"yle="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); color: white;"></ui-button>
          <code id="transferCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
            &lt;ui-transfer-list ...&gt;&lt;/ui-transfer-list&gt;
          </code>
        </div>
      </div>
    `;

    window.copyTransferCode = () => {
      const code = document.getElementById('transferCodeBlock').innerText;
      const btn = document.getElementById('copyTransferBtn');

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

    window.updateTransferCode = () => {
      const el = document.getElementById('playground-component');
      const codeBlock = document.getElementById('transferCodeBlock');
      if (!el || !codeBlock) return;

      let props = '';
      if (el.mode && el.mode !== 'list') props += ` mode="${el.mode}"`;
      if (el.searchable) props += ` searchable`;
      if (el.enableDrag) props += ` enable-drag`;
      if (el.sortable) props += ` sortable`;
      if (el.allowReorder) props += ` allow-reorder`;
      if (el.oneWay) props += ` one-way`;
      if (el.pagination) props += ` pagination`;
      if (el.loading) props += ` loading`;
      if (el.searchPlaceholder && el.searchPlaceholder !== 'Search...') props += ` search-placeholder="${el.searchPlaceholder}"`;
      if (el.max && el.max !== 999) props += ` max="${el.max}"`;
      if (el.height && el.height !== '300px') props += ` height="${el.height}"`;

      let scriptStr = '';
      if (el.mode === 'tree' || el.mode === 'table') {
        scriptStr += `\n  // Data Setup for ${el.mode} mode\n  transferList.sourceItems = items;`;
        if (el.mode === 'table') scriptStr += `\n  transferList.columns = columns;`;
      } else {
        scriptStr += `\n  // Items setup\n  transferList.sourceItems = items;`;
      }

      codeBlock.innerText = `<ui-transfer-list icon-library="lucide"${props}></ui-transfer-list>\n<script>${scriptStr}\n</script>`;
    };

    window.updatePlayground = () => {
      const el = document.getElementById('playground-component');
      if (!el) return;

      const mode = document.getElementById('pg-mode').value;
      const searchable = document.getElementById('pg-searchable').checked;
      const enableDrag = document.getElementById('pg-enableDrag').checked;
      const sortable = document.getElementById('pg-sortable').checked;
      const allowReorder = document.getElementById('pg-allowReorder').checked;
      const oneWay = document.getElementById('pg-oneWay').checked;
      const pagination = document.getElementById('pg-pagination').checked;
      const loading = document.getElementById('pg-loading').checked;
      const searchPlaceholder = document.getElementById('pg-searchPlaceholder').value;
      const max = parseInt(document.getElementById('pg-max').value) || 999;
      const height = document.getElementById('pg-height').value || '300px';

      // Set Props
      el.mode = mode;
      el.searchable = searchable;
      el.enableDrag = enableDrag;
      el.sortable = sortable;
      el.allowReorder = allowReorder;
      el.oneWay = oneWay;
      el.pagination = pagination;
      el.loading = loading;
      el.searchPlaceholder = searchPlaceholder;
      el.max = max;
      el.height = height;

      // Update Sample Data based on mode
      if (mode === 'tree') {
        el.sourceItems = treeItems;
        el.targetItems = [];
      } else if (mode === 'table') {
        el.columns = tableColumns;
        el.sourceItems = sourceItems;
        el.targetItems = [];
      } else {
        el.sourceItems = pagination
          ? Array.from({ length: 30 }, (_, i) => ({
            key: i,
            label: `Item ${i + 1}`,
            description: `Pageable item ${i + 1}`,
          }))
          : sourceItems;
        el.targetItems = [];
      }
      window.updateTransferCode();
    };

    const setupListeners = () => {
      const modeDrop = document.getElementById('pg-mode');
      const searchInput = document.getElementById('pg-searchPlaceholder');
      const maxInput = document.getElementById('pg-max');
      const heightInput = document.getElementById('pg-height');

      const searchableCheck = document.getElementById('pg-searchable');
      const drugCheck = document.getElementById('pg-enableDrag');
      const sortCheck = document.getElementById('pg-sortable');
      const reorderCheck = document.getElementById('pg-allowReorder');
      const onewayCheck = document.getElementById('pg-oneWay');
      const paginationCheck = document.getElementById('pg-pagination');
      const loadingCheck = document.getElementById('pg-loading');

      if (modeDrop) modeDrop.addEventListener('dropdownChange', updatePlayground);
      if (searchInput) searchInput.addEventListener('inputChange', updatePlayground);
      if (maxInput) maxInput.addEventListener('inputChange', updatePlayground);
      if (heightInput) heightInput.addEventListener('inputChange', updatePlayground);

      if (searchableCheck) searchableCheck.addEventListener('checkboxChange', updatePlayground);
      if (drugCheck) drugCheck.addEventListener('checkboxChange', updatePlayground);
      if (sortCheck) sortCheck.addEventListener('checkboxChange', updatePlayground);
      if (reorderCheck) reorderCheck.addEventListener('checkboxChange', updatePlayground);
      if (onewayCheck) onewayCheck.addEventListener('checkboxChange', updatePlayground);
      if (paginationCheck) paginationCheck.addEventListener('checkboxChange', updatePlayground);
      if (loadingCheck) loadingCheck.addEventListener('checkboxChange', updatePlayground);
    };

    setTimeout(setupListeners, 100);

    const el = document.getElementById('playground-component');
    if (el) {
      el.addEventListener('transferChange', e => {
        const log = document.getElementById('pg-log-content');
        if (log) {
          const div = document.createElement('div');
          div.textContent = `[TransferChange] Selected: ${e.detail.target.length}`;
          log.prepend(div);
        }
      });
      updatePlayground();
    }
  };

  window.showReorderDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Reordering & Constraints</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Manual reordering in target list and max selection limit (Max: 3).</p>
        <ui-transfer-list 
          allow-reorder="true"
          max="3"
          source-items='${JSON.stringify(sourceItems)}'
          titles='["Backlog", "Top Priority"]'
          icon-library="lucide"
        ></ui-transfer-list>
      </div>
    `;
  };

  window.showStatesDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    const itemsWithDisabled = [...sourceItems.slice(0, 3), { key: 100, label: 'Disabled Item', description: 'Cannot be moved', disabled: true }, ...sourceItems.slice(3)];
    container.innerHTML = `
      <div class="demo-block">
        <h3>Component States</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Individual disabled items and fully disabled component.</p>
        
        <div style="margin-bottom: 30px;">
          <h4>Individual Disabled Items</h4>
          <ui-transfer-list id="disabled-items-list" icon-library="lucide"></ui-transfer-list>
        </div>

        <div>
          <h4>Fully Disabled Component</h4>
          <ui-transfer-list disabled="true" id="full-disabled-list" icon-library="lucide"></ui-transfer-list>
        </div>
      </div>
    `;
    const el1 = document.getElementById('disabled-items-list');
    if (el1) el1.sourceItems = itemsWithDisabled;
    const el2 = document.getElementById('full-disabled-list');
    if (el2) el2.sourceItems = sourceItems;
  };

  window.showDragDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Drag & Drop Support</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Drag items between lists.</p>
        <ui-transfer-list enable-drag="true" id="drag-demo-list" icon-library="lucide"></ui-transfer-list>
      </div>
    `;
    const el = document.getElementById('drag-demo-list');
    if (el) el.sourceItems = sourceItems;
  };

  window.showTreeDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Tree View Mode</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Display hierarchical data. <strong>Cascading selection is enabled.</strong></p>
        <ui-transfer-list mode="tree" enable-drag="true" id="tree-demo-list" icon-library="lucide"></ui-transfer-list>
      </div>
    `;
    const el = document.getElementById('tree-demo-list');
    if (el) el.sourceItems = treeItems;
  };

  window.showTableDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Table View Mode</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Display data in columns.</p>
        <ui-transfer-list mode="table" height="400px" id="table-demo-list" icon-library="lucide"></ui-transfer-list>
      </div>
    `;
    const el = document.getElementById('table-demo-list');
    if (el) {
      el.columns = tableColumns;
      el.sourceItems = sourceItems;
    }
  };

  window.showPaginationDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    const manyItems = Array.from({ length: 50 }, (_, i) => ({
      key: i,
      label: `Item ${i + 1}`,
      description: `Description for item ${i + 1}`,
    }));

    container.innerHTML = `
      <div class="demo-block">
        <h3>Pagination & Performance</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Pagination logic for large datasets (50 items).</p>
        <ui-transfer-list pagination="true" page-size="5" id="pagination-demo-list" icon-library="lucide"></ui-transfer-list>
      </div>
    `;
    const el = document.getElementById('pagination-demo-list');
    if (el) el.sourceItems = manyItems;
  };

  window.showOneWayDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>One-Way Mode</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Copy items instead of moving them. 'Source' remains constant.</p>
        <ui-transfer-list one-way="true" id="oneway-demo-list" icon-library="lucide"></ui-transfer-list>
      </div>
    `;
    const el = document.getElementById('oneway-demo-list');
    if (el) el.sourceItems = sourceItems;
  };

  window.showSkeletonDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
        <div class="demo-block">
          <h3>Skeleton Loading State</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Set 'loading="true"' to show shimmer effect.</p>
          <ui-transfer-list loading="true"></ui-transfer-list>
        </div>
      `;
  };

  window.showCustomRenderDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
        <div class="demo-block">
          <h3>Custom Item Rendering</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Using 'itemRenderer' prop to display icons and custom formatting.</p>
          <ui-transfer-list id="customRenderList" icon-library="lucide"></ui-transfer-list>
        </div>
      `;

    const el = document.getElementById('customRenderList');
    if (el) {
      el.sourceItems = sourceItems;
      el.itemRenderer = item => {
        return `
          <div style="display: flex; align-items: center; width: 100%;">
            <span style="font-size: 20px; margin-right: 8px;">${item.icon || 'file'}</span>
            <div style="display: flex; flex-direction: column;">
              <span style="font-weight: bold; color:var(--text-primary,#111827);">${item.label}</span>
              <span style="font-size: 11px; color: #6b7280; font-style: italic;">${item.description} (Key: ${item.key})</span>
            </div>
          </div>
        `;
      };
    }
  };

  window.showCustomFilterDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Custom Search Filter</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Search is case-sensitive and ONLY matches 'description' (try searching for 'weekly').</p>
        <ui-transfer-list id="customFilterList" icon-library="lucide"></ui-transfer-list>
      </div>
    `;

    const el = document.getElementById('customFilterList');
    if (el) {
      el.sourceItems = sourceItems;
      el.filterOption = (inputValue, item) => {
        return item.description && item.description.includes(inputValue);
      };
    }
  };

  window.showGodTierDemo = () => {
    const container = document.getElementById('transferDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>🌌 God Tier: Vertical, Resizable, & Sorted</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Combining Vertical Layout, Panel Resizing, Sorting, and Context Menus. Right-click any item!</p>
        
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px;">
             <h4>Vertical Layout</h4>
             <ui-transfer-list 
               id="god-vertical"
               layout="vertical"
               height="200px"
               sortable="true"
               group-by="category"
               icon-library="lucide"
             ></ui-transfer-list>
          </div>
          <div style="flex: 1; min-width: 300px;">
             <h4>Resizable & Sorted</h4>
             <ui-transfer-list 
               id="god-resizable"
               resizable="true"
               sortable="true"
               allow-reorder="true"
               group-by="category"
               icon-library="lucide"
             ></ui-transfer-list>
          </div>
        </div>
      </div>
    `;

    const el1 = document.getElementById('god-vertical');
    if (el1) el1.sourceItems = sourceItems;

    const el2 = document.getElementById('god-resizable');
    if (el2) el2.sourceItems = sourceItems;
  };

  // Default view
  showTransferPlayground();
}
