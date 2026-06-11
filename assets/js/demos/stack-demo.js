export function initStackDemo() {
  const container = document.getElementById('stack');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-container">
      <div class="demo-header">
        <h1>Stack Component</h1>
        <p>A primitive layout component for stacking items horizontally or vertically with optional overflow and overlap.</p>
      </div>

      <div class="demo-controls" style="margin-bottom: 32px; display: flex; gap: 12px; flex-wrap: wrap;">
        <ui-button id="btnStackPlayground" label="Playground" variant="outline"></ui-button>
        <ui-button id="btnStackValidation" label="Validation (Missing Features)" variant="outline"></ui-button>
      </div>

      <div id="stackDemoContainer"></div>
    </div>
  `;

  document.getElementById('btnStackPlayground').addEventListener('click', () => window.showStackPlayground());
  document.getElementById('btnStackValidation').addEventListener('click', () => window.showStackValidation());

  window.showStackPlayground();
}

window.showStackPlayground = function () {
  const container = document.getElementById('stackDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>Interactive Playground</h3>
      <div style="display: grid; grid-template-columns: 320px 1fr; gap: 32px;">
        <div class="control-panel" style="padding: 24px; background:var(--bg-secondary,#f9fafb); border-radius: 12px; border:1px solid var(--border-default,#e5e7eb); box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05); display: flex; flex-direction: column; gap: 20px;">
          <ui-dropdown 
            id="stackDirection" 
            label="Direction" 
            value="horizontal" 
            data='[{"label": "Horizontal", "value": "horizontal"}, {"label": "Vertical", "value": "vertical"}]'
          ></ui-dropdown>
          
          <ui-dropdown 
            id="stackWrap" 
            label="Wrap" 
            value="nowrap" 
            data='[{"label": "No Wrap", "value": "nowrap"}, {"label": "Wrap", "value": "wrap"}, {"label": "Wrap Reverse", "value": "wrap-reverse"}]'
          ></ui-dropdown>

          <ui-checkbox id="stackShowDividers" label="Show Dividers"></ui-checkbox>

          <ui-dropdown 
            id="stackDividerType" 
            label="Divider Type" 
            value="solid" 
            data='[{"label": "Solid", "value": "solid"}, {"label": "Dashed", "value": "dashed"}, {"label": "Dotted", "value": "dotted"}]'
          ></ui-dropdown>

          <ui-input id="stackSpacing" label="Spacing" value="8px" placeholder="e.g. 12px or -10px"></ui-input>

          <ui-dropdown 
            id="stackAlign" 
            label="Align" 
            value="center" 
            data='[{"label": "Start", "value": "start"}, {"label": "Center", "value": "center"}, {"label": "End", "value": "end"}, {"label": "Stretch", "value": "stretch"}]'
          ></ui-dropdown>

          <ui-dropdown 
            id="stackJustify" 
            label="Justify" 
            value="start" 
            data='[{"label": "Start", "value": "start"}, {"label": "Center", "value": "center"}, {"label": "End", "value": "end"}, {"label": "Space Between", "value": "space-between"}]'
          ></ui-dropdown>

          <ui-input id="stackMax" label="Max Items (0 = all)" type="number" value="0" min="0"></ui-input>

          <ui-checkbox id="stackOverlap" label="Enable Overlap"></ui-checkbox>
          
          <div style="margin-top: 8px;">
            <ui-button id="btnAddStackItem" label="Add Item" color="success" variant="outline" style="width: 100%;"></ui-button>
          </div>
        </div>

        <div id="stackContainerWrapper" style="padding: 48px; background:var(--bg-primary,white); border-radius: 16px; border: 1px dashed #cbd5e1; min-height: 400px; display: flex; align-items: center; justify-content: center; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <ui-stack id="stackPlayground" direction="horizontal" spacing="8px" align="center" justify="start">
            <div style="width: 48px; height: 48px; background: #10b981; color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">1</div>
            <div style="width: 48px; height: 48px; background: #10b981; color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">2</div>
            <div style="width: 48px; height: 48px; background: var(--accent-yellow,#f59e0b); color: white; border-radius: 8px; display: flex; align-items: center; justify-content: center; font-weight: 700; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">3</div>
          </ui-stack>
        </div>
      </div>
    </div>
  `;

  // Initialize listeners
  setTimeout(() => {
    const controls = [
      'stackDirection', 'stackWrap', 'stackDividerType', 'stackAlign', 'stackJustify'
    ];
    controls.forEach(id => {
      document.getElementById(id)?.addEventListener('dropdownChange', () => window.updateStackPlayground());
    });

    document.getElementById('stackShowDividers')?.addEventListener('checkboxChange', () => window.updateStackPlayground());
    document.getElementById('stackOverlap')?.addEventListener('checkboxChange', () => window.updateStackPlayground());
    document.getElementById('stackSpacing')?.addEventListener('inputChange', () => window.updateStackPlayground());
    document.getElementById('stackMax')?.addEventListener('inputChange', () => window.updateStackPlayground());
    document.getElementById('btnAddStackItem')?.addEventListener('click', () => window.addStackItem());
  }, 0);
};

window.updateStackPlayground = function () {
  const stack = document.getElementById('stackPlayground');
  if (!stack) return;

  stack.direction = document.getElementById('stackDirection').value;
  stack.wrap = document.getElementById('stackWrap').value;
  stack.showDividers = document.getElementById('stackShowDividers').checked;
  stack.dividerType = document.getElementById('stackDividerType').value;
  stack.spacing = document.getElementById('stackSpacing').value;
  stack.align = document.getElementById('stackAlign').value;
  stack.justify = document.getElementById('stackJustify').value;
  stack.max = parseInt(document.getElementById('stackMax').value || 0);
  stack.overlap = document.getElementById('stackOverlap').checked;
};

let itemCount = 3;
window.addStackItem = function () {
  const stack = document.getElementById('stackPlayground');
  if (!stack) return;

  itemCount++;
  const newItem = document.createElement('div');
  const colors = ['#10b981', '#3b82f6', '#f59e0b', '#ef4444', '#8b5cf6', '#ec4899', '#06b6d4'];
  const color = colors[itemCount % colors.length];

  newItem.style.width = '48px';
  newItem.style.height = '48px';
  newItem.style.background = color;
  newItem.style.color = 'white';
  newItem.style.borderRadius = '8px';
  newItem.style.display = 'flex';
  newItem.style.alignItems = 'center';
  newItem.style.justifyContent = 'center';
  newItem.style.fontWeight = '700';
  newItem.style.boxShadow = '0 4px 6px -1px rgba(0, 0, 0, 0.1)';
  newItem.textContent = itemCount;

  stack.appendChild(newItem);
};

window.showStackValidation = function () {
  const container = document.getElementById('stackDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>Feature Showcase (Resolved Gaps)</h3>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 32px;">Validating enhanced logic for wrapping, dividers, and interactive overflow.</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(380px, 1fr)); gap: 32px;">
        <!-- Case 1: Wrap Support -->
        <div style="padding: 24px; border: 1px solid #dcfce7; border-radius: 16px; background-color:var(--accent-green-soft,#f0fdf4); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <h5 style="margin: 0 0 12px; color: var(--accent-green,#166534); font-size: 18px;">Wrapping Support</h5>
          <p style="font-size: 14px; color:var(--accent-green,#15803d); margin-bottom: 20px; line-height: 1.5;">
            Content now flows naturally across multiple lines when it exceeds the parent container's width.
          </p>
          <div style="width: 240px; border: 2px dashed #22c55e; overflow: hidden; padding: 12px; border-radius: 12px; background:var(--bg-primary,white);">
            <ui-stack spacing="10px" wrap="wrap">
              <div style="width: 60px; height: 35px; background: #10b981; border-radius: 6px;"></div>
              <div style="width: 60px; height: 35px; background: #10b981; border-radius: 6px;"></div>
              <div style="width: 60px; height: 35px; background: var(--accent-yellow,#f59e0b); border-radius: 6px;"></div>
              <div style="width: 60px; height: 35px; background: var(--accent-red,#ef4444); border-radius: 6px;"></div>
              <div style="width: 60px; height: 35px; background: var(--accent-purple,#8b5cf6); border-radius: 6px;"></div>
            </ui-stack>
          </div>
        </div>

        <!-- Case 2: Interactive Overflow -->
        <div style="padding: 24px; border: 1px solid #e0f2fe; border-radius: 16px; background-color: #f0f9ff; box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <h5 style="margin: 0 0 12px; color: #075985; font-size: 18px;">Intelligent Overflow</h5>
          <p style="font-size: 14px; color: #0369a1; margin-bottom: 20px; line-height: 1.5;">
            The <code>max</code> property limits visible items and displays a clickable counter for the remainder.
          </p>
          <div style="background:var(--bg-primary,white); padding: 16px; border-radius: 12px;">
            <ui-stack max="2" spacing="12px">
              <div style="width: 44px; height: 44px; background: #10b981; border-radius: 8px;"></div>
              <div style="width: 44px; height: 44px; background: #10b981; border-radius: 8px;"></div>
              <div style="width: 44px; height: 44px; background: var(--accent-yellow,#f59e0b); border-radius: 8px;"></div>
              <div style="width: 44px; height: 44px; background: var(--accent-red,#ef4444); border-radius: 8px;"></div>
              <div style="width: 44px; height: 44px; background: var(--accent-purple,#8b5cf6); border-radius: 8px;"></div>
            </ui-stack>
          </div>
          <p style="font-size: 11px; color: #0284c7; margin-top: 12px; font-weight: 600;">(Try clicking the +3 badge)</p>
        </div>

        <!-- Case 3: Divider Support -->
        <div style="padding: 24px; border: 1px solid #fef3c7; border-radius: 16px; background-color:var(--accent-yellow-soft,#fffbeb); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <h5 style="margin: 0 0 12px; color:var(--accent-yellow,#92400e); font-size: 18px;">Built-in Dividers</h5>
          <p style="font-size: 14px; color:var(--accent-yellow,#b45309); margin-bottom: 20px; line-height: 1.5;">
            Clean separators are automatically injected between items, respecting direction and alignment.
          </p>
          <div style="background:var(--bg-primary,white); padding: 20px; border-radius: 12px;">
            <ui-stack spacing="20px" align="center" show-dividers="true" divider-type="solid">
              <span style="font-weight: 600; color:var(--text-primary,#1e293b);">Settings</span>
              <span style="font-weight: 600; color:var(--text-primary,#1e293b);">Security</span>
              <span style="font-weight: 600; color:var(--text-primary,#1e293b);">Logout</span>
            </ui-stack>
          </div>
        </div>

        <!-- Case 4: Overlap Elevation -->
        <div style="padding: 24px; border: 1px solid #f5f3ff; border-radius: 16px; background-color:var(--accent-purple-soft,#f5f3ff); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.05);">
          <h5 style="margin: 0 0 12px; color: #5b21b6; font-size: 18px;">Overlap Depth</h5>
          <p style="font-size: 14px; color:var(--accent-purple,#6d28d9); margin-bottom: 20px; line-height: 1.5;">
            Stacked items use negative spacing and elevation tokens to create complex depth effects.
          </p>
          <ui-stack overlap spacing="-18px">
            <div style="width: 54px; height: 54px; background: #10b981; border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>
            <div style="width: 54px; height: 54px; background: var(--accent-blue,#3b82f6); border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>
            <div style="width: 54px; height: 54px; background: var(--accent-yellow,#f59e0b); border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>
            <div style="width: 54px; height: 54px; background: var(--accent-red,#ef4444); border-radius: 50%; border: 4px solid white; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);"></div>
          </ui-stack>
        </div>
      </div>
    </div>
  `;
};
