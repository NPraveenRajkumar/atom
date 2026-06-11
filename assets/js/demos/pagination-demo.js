// Pagination Demo Functions
export function initPaginationDemo() {
  const section = document.getElementById('pagination');
  if (!section) return;

  section.innerHTML = `
    
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showBasicPagination()" variant="outline">Basic</ui-button>
      <ui-button onclick="showCompactPagination()" variant="outline">Compact</ui-button>
      <ui-button onclick="showDetailedPagination()" variant="outline">Detailed</ui-button>
      <ui-button onclick="showMinimalPagination()" variant="outline">Minimal</ui-button>
      <ui-button onclick="showDropdownPagination()" variant="outline">Dropdown</ui-button>
      <ui-button onclick="showInputPagination()" variant="outline">Input</ui-button>
      <ui-button onclick="showIndicatorPagination()" variant="outline">Indicator</ui-button>
      <ui-button onclick="showPaginationThemes()" variant="outline">🎨 Themes</ui-button>
      <ui-button onclick="showPaginationShapes()" variant="outline">⭕ Shapes</ui-button>
      <ui-button onclick="showResponsivePagination()" variant="outline">📱 Responsive</ui-button>
      <ui-button onclick="showKeyboardNav()" variant="outline">⌨️ Keyboard</ui-button>
      <ui-button onclick="showQuickJumpDemo()" variant="outline">⚡ Quick Jump</ui-button>
      <ui-button onclick="showProgressDemo()" variant="outline">📊 Progress</ui-button>
      <ui-button onclick="showStickyDemo()" variant="outline">📌 Sticky</ui-button>
      <ui-button onclick="showSmartFeaturesDemo()" variant="outline">🧠 Smart</ui-button>
      <ui-button onclick="showPaginationVariants()" variant="outline">✨ Variants</ui-button>
      <ui-button onclick="showActionBarDemo()" variant="outline">⚡ Action Bar</ui-button>
      <ui-button onclick="showInteractivePagination()" variant="outline">🎮 Playground</ui-button>
    </div>

    <div id="paginationDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    window.showBasicPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Basic Pagination</h3>
          <div style="display: flex; justify-content: center;">
            <ui-pagination id="basicPagination" total-items="100" items-per-page="10" current-page="1"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    window.showCompactPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Compact Style</h3>
          <div style="display: flex; justify-content: center;">
            <ui-pagination type="compact" total-items="50" items-per-page="5" current-page="3"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    // Detailed Pagination Demo
    window.showDetailedPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Detailed Pagination</h3>
          <p style="color: #6b7280; margin-bottom: 16px;">Full-featured pagination with page size selector, total count, and jump to page</p>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">With Page Size Selector & Total</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="detailed" total-items="200" items-per-page="20" show-page-size="true" show-total="true" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">With Jump To Page</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="detailed" total-items="500" items-per-page="25" show-jump-to="true" show-total="true" current-page="5"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">All Features Combined</h4>
          <div style="display: flex; justify-content: center;">
            <ui-pagination type="detailed" total-items="1000" items-per-page="50" show-page-size="true" show-total="true" show-jump-to="true" current-page="10"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    // Minimal Pagination Demo
    window.showMinimalPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Minimal Pagination</h3>
          <p style="color: #6b7280; margin-bottom: 16px;">Compact input-based navigation with prev/next buttons</p>
          
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="minimal" total-items="100" items-per-page="10" current-page="5"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Different Sizes</h4>
          <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">Small</p>
              <ui-pagination type="minimal" size="md" total-items="80" items-per-page="10" current-page="3"></ui-pagination>
            </div>
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">md</p>
              <ui-pagination type="minimal" size="md" total-items="80" items-per-page="10" current-page="3"></ui-pagination>
            </div>
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">Large</p>
              <ui-pagination type="minimal" size="lg" total-items="80" items-per-page="10" current-page="3"></ui-pagination>
            </div>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    // Indicator Pagination Demo
    window.showIndicatorPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Indicator Pagination</h3>
          <p style="color: #6b7280; margin-bottom: 16px;">Dot-based navigation perfect for carousels and slideshows</p>
          
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="indicator" total-items="50" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Without Navigation Buttons</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="indicator" total-items="50" items-per-page="10" show-prev-next="false" current-page="2"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">With Theme Colors</h4>
          <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <ui-pagination type="indicator" theme="primary" total-items="60" items-per-page="10" current-page="2"></ui-pagination>
            <ui-pagination type="indicator" theme="success" total-items="60" items-per-page="10" current-page="3"></ui-pagination>
            <ui-pagination type="indicator" theme="danger" total-items="60" items-per-page="10" current-page="4"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    window.showAdvancedPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>With Page Size Selector & Total Count</h3>
          <div style="display: flex; justify-content: center;">
            <ui-pagination total-items="200" items-per-page="20" show-page-size="true" show-total="true"></ui-pagination>
          </div>
        </div>
        <div class="demo-block">
          <h3>With Jump To Page</h3>
          <div style="display: flex; justify-content: center;">
            <ui-pagination total-items="500" items-per-page="25" show-jump-to="true" show-total="true"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    window.showDropdownPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Dropdown Pagination</h3>
          <p style="color: #6b7280; margin-bottom: 16px;">Select page from dropdown menu with Previous/Next navigation</p>
          
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="dropdown" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">Compact Dropdown (Minimal)</h4>
          <p style="color: #6b7280; margin-bottom: 8px; font-size: 14px;">Only dropdown selector, no navigation buttons</p>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="dropdown" compact="true" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">With Total Count</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="dropdown" total-items="250" items-per-page="25" show-total="true" current-page="5"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">Icon-Only Dropdown</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="dropdown" icon-only="true" total-items="150" items-per-page="15" current-page="2"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">With Items Per Page (Modern Bar)</h4>
          <p style="color: #6b7280; margin-bottom: 8px; font-size: 14px;">Unified action bar with page selector and items-per-page dropdown</p>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="dropdown" total-items="500" items-per-page="50" show-page-size="true" show-total="true" current-page="2"></ui-pagination>
          </div>

          <h4 style="margin-top: 24px;">Different Sizes</h4>
          <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">Small</p>
              <ui-pagination type="dropdown" size="md" total-items="80" items-per-page="10" current-page="3"></ui-pagination>
            </div>
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">md</p>
              <ui-pagination type="dropdown" size="md" total-items="80" items-per-page="10" current-page="3"></ui-pagination>
            </div>
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">Large</p>
              <ui-pagination type="dropdown" size="lg" total-items="80" items-per-page="10" current-page="3"></ui-pagination>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 12px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 6px;">
            <p style="margin: 0; color: var(--accent-green,#166534); font-size: 14px;">
              💡 Dropdown pagination is ideal when you need quick access to any page. Use <strong>compact</strong> mode for minimal space usage.
            </p>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    window.showInputPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Input Pagination</h3>
          <p style="color: #6b7280; margin-bottom: 16px;">Type page number directly or use navigation buttons</p>
          
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="input" total-items="100" items-per-page="10" current-page="5"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">Compact Input (Minimal)</h4>
          <p style="color: #6b7280; margin-bottom: 8px; font-size: 14px;">Only input field and Go button, with validation</p>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="input" compact="true" total-items="100" items-per-page="10" current-page="5"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">With Total Count</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="input" total-items="500" items-per-page="20" show-total="true" current-page="10"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">Icon-Only Input</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="input" icon-only="true" total-items="200" items-per-page="25" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">Unified Action Bar (Input)</h4>
          <p style="color: #6b7280; margin-bottom: 8px; font-size: 14px;">Premium layout with page input and items-per-page selector</p>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination type="input" total-items="1000" items-per-page="100" show-page-size="true" show-total="true" current-page="5"></ui-pagination>
          </div>

          <h4 style="margin-top: 24px;">Different Sizes</h4>
          <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">Small</p>
              <ui-pagination type="input" size="md" total-items="120" items-per-page="10" current-page="4"></ui-pagination>
            </div>
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">md</p>
              <ui-pagination type="input" size="md" total-items="120" items-per-page="10" current-page="4"></ui-pagination>
            </div>
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">Large</p>
              <ui-pagination type="input" size="lg" total-items="120" items-per-page="10" current-page="4"></ui-pagination>
            </div>
          </div>
          
          <div style="margin-top: 20px; padding: 12px; background-color:var(--accent-blue-soft,#eff6ff); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              💡 Input pagination validates your entry - try entering invalid values (text, negative numbers, or numbers beyond range) to see error messages. Press Enter or click Go to navigate.
            </p>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    window.showPaginationSizes = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Different Sizes</h3>
          <div style="display: flex; flex-direction: column; gap: 16px; align-items: center;">
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">Small</p>
              <ui-pagination size="md" total-items="50" items-per-page="10"></ui-pagination>
            </div>
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">md</p>
              <ui-pagination size="md" total-items="50" items-per-page="10"></ui-pagination>
            </div>
            <div>
              <p style="text-align: center; margin-bottom: 8px; color: #6b7280;">Large</p>
              <ui-pagination size="lg" total-items="50" items-per-page="10"></ui-pagination>
            </div>
          </div>
        </div>
        <div class="demo-block">
          <h3>Outlined Variant</h3>
          <div style="display: flex; justify-content: center;">
            <ui-pagination variant="outlined" total-items="80" items-per-page="10" current-page="2"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    window.showIconPagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>Icon-Only Pagination</h3>
          <p style="color: #6b7280; margin-bottom: 16px;">Navigation buttons with icons only (no text labels)</p>
          <div style="display: flex; justify-content: center; margin-bottom: 20px;">
            <ui-pagination icon-only="true" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">With Dropdown Page Size Selector</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 20px;">
            <ui-pagination icon-only="true" total-items="150" items-per-page="15" show-page-size="true" current-page="2"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px;">With Page Input Jump</h4>
          <div style="display: flex; justify-content: center;">
            <ui-pagination icon-only="true" total-items="200" items-per-page="20" show-jump-to="true" show-total="true" current-page="5"></ui-pagination>
          </div>
          
          <div style="margin-top: 20px; padding: 12px; background-color: #f0f9ff; border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              💡 Icon-only mode is perfect for compact layouts where space is limited.
            </p>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    window.showInteractivePagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="demo-block">
          <h3>🎮 Interactive Playground</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Customize the pagination properties and see changes in real-time!</p>
          
          <div style="background-color:var(--bg-primary,white); padding: 24px; border-radius: 12px; margin-bottom: 24px; border:1px solid var(--border-default,#e5e7eb); box-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1);">
            <h4 style="margin: 0 0 20px; color:var(--text-primary,#111827); font-size: 1.1rem; border-bottom: 1px solid #f3f4f6; padding-bottom: 12px;">Settings</h4>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
              <!-- Numeric Inputs -->
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <ui-input id="paginationTotalItems" label="Total Items" type="number" value="100" min="1" variant="outline"></ui-input>
                <ui-input id="paginationItemsPerPage" label="Items Per Page" type="number" value="10" min="1" variant="outline"></ui-input>
                <ui-input id="paginationMaxVisible" label="Max Visible Pages" type="number" value="5" min="1" max="10" variant="outline"></ui-input>
              </div>

              <!-- Selects -->
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <ui-dropdown id="paginationType" label="Type" variant="outline" value="basic" options='[
                  {"label": "Basic", "value": "basic"},
                  {"label": "Compact", "value": "compact"},
                  {"label": "Detailed", "value": "detailed"},
                  {"label": "Minimal", "value": "minimal"},
                  {"label": "Indicator", "value": "indicator"},
                  {"label": "Dropdown", "value": "dropdown"},
                  {"label": "Input", "value": "input"}
                ]'></ui-dropdown>
                
                <ui-dropdown id="paginationSize" label="Size" variant="outline" value="md" options='[
                  {"label": "Small (sm)", "value": "sm"},
                  {"label": "Medium (md)", "value": "md"},
                  {"label": "Large (lg)", "value": "lg"}
                ]'></ui-dropdown>
                
                <ui-dropdown id="paginationVariant" label="Variant" variant="outline" value="default" options='[
                  {"label": "Default", "value": "default"},
                  {"label": "Outlined", "value": "outlined"},
                  {"label": "Filled", "value": "filled"},
                  {"label": "Floating", "value": "floating"},
                  {"label": "Glass", "value": "glass"},
                  {"label": "Soft", "value": "soft"},
                  {"label": "Modern", "value": "modern"},
                  {"label": "Minimalist", "value": "minimalist"},
                  {"label": "Premium", "value": "premium"},
                  {"label": "Underline", "value": "underline"}
                ]'></ui-dropdown>

                <ui-dropdown id="paginationTheme" label="Theme" variant="outline" value="default" options='[
                  {"label": "Default", "value": "default"},
                  {"label": "Primary", "value": "primary"},
                  {"label": "Success", "value": "success"},
                  {"label": "Danger", "value": "danger"},
                  {"label": "Warning", "value": "warning"},
                  {"label": "Info", "value": "info"}
                ]'></ui-dropdown>

                <ui-dropdown id="paginationShape" label="Shape" variant="outline" value="default" options='[
                  {"label": "Default", "value": "default"},
                  {"label": "Rounded", "value": "rounded"},
                  {"label": "Pill", "value": "pill"},
                  {"label": "Circle", "value": "circle"}
                ]'></ui-dropdown>
              </div>
              
              <!-- Checkboxes -->
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; align-content: start;">
                <ui-checkbox id="paginationKeyboardNav" label="Keyboard Nav" checked></ui-checkbox>
                <ui-checkbox id="paginationResponsive" label="Responsive" checked></ui-checkbox>
                <ui-checkbox id="paginationRTL" label="RTL Mode"></ui-checkbox>
                <ui-checkbox id="paginationShowFirstLast" label="Show First/Last" checked></ui-checkbox>
                <ui-checkbox id="paginationShowPageSize" label="Show Page Size"></ui-checkbox>
                <ui-checkbox id="paginationShowTotal" label="Show Total"></ui-checkbox>
                <ui-checkbox id="paginationShowJumpTo" label="Show Jump To"></ui-checkbox>
                <ui-checkbox id="paginationIconOnly" label="Icon Only"></ui-checkbox>
              </div>
            </div>
            
            <div id="interactivePaginationContainer" style="margin: 40px 0; padding: 40px; background: #fafafa; border-radius: 12px; border: 1px dashed #e2e8f0; display: flex; justify-content: center; align-items: center; min-height: 120px;">
               <!-- Pagination will be injected here -->
            </div>

            <div style="margin-top: 24px;">
               <h4 style="margin: 0 0 12px; color: #374151;">Component Code:</h4>
               <div style="flex: 1; min-width: 300px; background: var(--bg-secondary, #f8fafc); padding: 20px; border-radius: 12px; position: relative; border: 1px solid var(--border-default); box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);">
                  <ui-button label="Copy Code" id="copyPaginationBtn" variant="outline" color="secondary" size="md"click="copyPaginationCode()" style="position: absolute; top: 12px; right: 12px;"></ui-button>
                  <code id="paginationCodeBlock" style="color: var(--text-primary, #1e293b); font-family: 'Fira Code', monospace; font-size: 13px; display: block; overflow-x: auto; white-space: pre-wrap; line-height: 1.5;">
                    &lt;ui-pagination ...&gt;&lt;/ui-pagination&gt;
                  </code>
               </div>
            </div>
          </div>
        </div>
      `;

      // Wire up events
      if (!window.paginationWired) {
        window.paginationWired = true;
        const inputs = ['paginationTotalItems', 'paginationItemsPerPage', 'paginationMaxVisible'];
        const dropdowns = ['paginationType', 'paginationSize', 'paginationVariant', 'paginationTheme', 'paginationShape'];
        const checkboxes = [
          'paginationKeyboardNav',
          'paginationResponsive',
          'paginationRTL',
          'paginationShowFirstLast',
          'paginationShowPageSize',
          'paginationShowTotal',
          'paginationShowJumpTo',
          'paginationIconOnly',
        ];

        setTimeout(() => {
          inputs.forEach(id => document.getElementById(id)?.addEventListener('inputChange', () => updateInteractivePagination()));
          dropdowns.forEach(id => document.getElementById(id)?.addEventListener('dropdownChange', () => updateInteractivePagination()));
          checkboxes.forEach(id => document.getElementById(id)?.addEventListener('checkboxChange', () => updateInteractivePagination()));
          updateInteractivePagination();
        }, 100);
      } else {
        setTimeout(() => updateInteractivePagination(), 100);
      }
    };

    window.updateInteractivePagination = function () {
      const totalItems = parseInt(document.getElementById('paginationTotalItems')?.value) || 100;
      const itemsPerPage = parseInt(document.getElementById('paginationItemsPerPage')?.value) || 10;
      const maxVisible = parseInt(document.getElementById('paginationMaxVisible')?.value) || 5;
      const type = document.getElementById('paginationType')?.value || 'basic';
      const size = document.getElementById('paginationSize')?.value || 'md';
      const variant = document.getElementById('paginationVariant')?.value || 'default';
      const theme = document.getElementById('paginationTheme')?.value || 'default';
      const shape = document.getElementById('paginationShape')?.value || 'default';
      const keyboardNav = document.getElementById('paginationKeyboardNav')?.checked !== false;
      const responsiveMode = document.getElementById('paginationResponsive')?.checked !== false;
      const rtl = document.getElementById('paginationRTL')?.checked || false;
      const showFirstLast = document.getElementById('paginationShowFirstLast')?.checked !== false;
      const showPageSize = document.getElementById('paginationShowPageSize')?.checked || false;
      const showTotal = document.getElementById('paginationShowTotal')?.checked || false;
      const showJumpTo = document.getElementById('paginationShowJumpTo')?.checked || false;
      const iconOnly = document.getElementById('paginationIconOnly')?.checked || false;

      const paginationContainer = document.getElementById('interactivePaginationContainer');
      if (paginationContainer) {
        paginationContainer.innerHTML = `
          <ui-pagination 
            id="interactivePagination"
            total-items="${totalItems}"
            items-per-page="${itemsPerPage}"
            max-visible-pages="${maxVisible}"
            type="${type}"
            size="${size}"
            variant="${variant}"
            theme="${theme}"
            shape="${shape}"
            keyboard-nav="${keyboardNav}"
            responsive-mode="${responsiveMode}"
            rtl="${rtl}"
            ${showFirstLast ? 'show-first-last="true"' : 'show-first-last="false"'}
            ${showPageSize ? 'show-page-size="true"' : ''}
            ${showTotal ? 'show-total="true"' : ''}
            ${showJumpTo ? 'show-jump-to="true"' : ''}
            ${iconOnly ? 'icon-only="true"' : ''}
            current-page="1">
          </ui-pagination>
        `;

        setTimeout(() => {
          const pagination = document.getElementById('interactivePagination');
          if (pagination) {
            pagination.addEventListener('pageChange', event => {
              console.log('Page changed:', event.detail);
            });
          }
        }, 100);

        // Generate code block
        const codeBlock = document.getElementById('paginationCodeBlock');
        if (codeBlock) {
          let code = `<ui-pagination`;
          if (totalItems !== 100) code += `\n  total-items="${totalItems}"`;
          if (itemsPerPage !== 10) code += `\n  items-per-page="${itemsPerPage}"`;
          if (maxVisible !== 5) code += `\n  max-visible-pages="${maxVisible}"`;
          if (type !== 'basic') code += `\n  type="${type}"`;
          if (size !== 'md') code += `\n  size="${size}"`;
          if (variant !== 'default') code += `\n  variant="${variant}"`;
          if (theme !== 'default') code += `\n  theme="${theme}"`;
          if (shape !== 'default') code += `\n  shape="${shape}"`;
          if (!keyboardNav) code += `\n  keyboard-nav="false"`;
          if (!responsiveMode) code += `\n  responsive-mode="false"`;
          if (rtl) code += `\n  rtl="true"`;
          if (showFirstLast) code += `\n  show-first-last="true"`;
          if (showPageSize) code += `\n  show-page-size="true"`;
          if (showTotal) code += `\n  show-total="true"`;
          if (showJumpTo) code += `\n  show-jump-to="true"`;
          if (iconOnly) code += `\n  icon-only="true"`;
          code += `\n  current-page="1"`;
          code += `>\n</ui-pagination>`;
          codeBlock.innerText = code;
        }
      }
    };

    window.copyPaginationCode = function () {
      const codeBlock = document.getElementById('paginationCodeBlock');
      const copyBtn = document.getElementById('copyPaginationBtn');
      if (!codeBlock || !copyBtn) return;

      const code = codeBlock.innerText;
      navigator.clipboard.writeText(code).then(() => {
        const originalText = copyBtn.innerText;
        copyBtn.innerText = 'Copied!';
        copyBtn.style.backgroundColor = '#10b981';
        setTimeout(() => {
          copyBtn.innerText = originalText;
          copyBtn.style.backgroundColor = 'rgba(255,255,255,0.1)';
        }, 2000);
      });
    };

    // Themes Demo
    window.showPaginationThemes = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>🎨 Color Themes</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Choose from 6 color themes to match your design</p>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Primary Theme</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Success Theme</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination theme="success" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Danger Theme</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination theme="danger" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Warning Theme</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination theme="warning" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Info Theme</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination theme="info" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    // Shapes Demo
    window.showPaginationShapes = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>⭕ Button Shapes</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Different button shape styles</p>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Default Shape</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination shape="default" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Rounded Shape</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination shape="rounded" theme="success" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Pill Shape</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination shape="pill" theme="warning" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>

          <h4 style="margin-top: 24px; margin-bottom: 12px;">Circle Shape</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination shape="circle" theme="danger" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    // Keyboard Navigation Demo
    window.showKeyboardNav = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>⌨️ Keyboard Navigation</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Navigate using keyboard shortcuts</p>
          
          <div style="background-color:var(--accent-blue-soft,#eff6ff); padding: 20px; border-radius: 8px; margin-bottom: 24px;">
            <h4 style="margin-top: 0;">Keyboard Shortcuts:</h4>
            <ul style="margin: 0; padding-left: 20px;">
              <li><kbd style="background:var(--bg-primary,white); padding: 2px 6px; border: 1px solid #d1d5db; border-radius: 3px;">←</kbd> Arrow Left - Previous page</li>
              <li><kbd style="background:var(--bg-primary,white); padding: 2px 6px; border: 1px solid #d1d5db; border-radius: 3px;">→</kbd> Arrow Right - Next page</li>
              <li><kbd style="background:var(--bg-primary,white); padding: 2px 6px; border: 1px solid #d1d5db; border-radius: 3px;">Home</kbd> - First page</li>
              <li><kbd style="background:var(--bg-primary,white); padding: 2px 6px; border: 1px solid #d1d5db; border-radius: 3px;">End</kbd> - Last page</li>
            </ul>
          </div>
          
          <p style="color: #10b981; font-weight: 500; margin-bottom: 12px;">Try it! Click on the pagination below and use keyboard shortcuts:</p>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination keyboard-nav="true" theme="primary" total-items="100" items-per-page="10" current-page="5"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Keyboard Navigation Disabled</h4>
          <div style="display: flex; justify-content: center;">
            <ui-pagination keyboard-nav="false" total-items="100" items-per-page="10" current-page="5"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    // Responsive Demo
    window.showResponsivePagination = function () {
      const container = document.getElementById('paginationDemoContainer');
      if (!container) return;
      container.innerHTML = `
        <div class="demo-block">
          <h3>📱 Responsive Pagination</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Auto-adapts to mobile screens</p>
          
          <div style="background-color: var(--accent-yellow-soft,#fef3c7); padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 0; color:var(--accent-yellow,#92400e);">
              💡 <strong>Tip:</strong> Resize your browser window to see the pagination automatically switch to compact mode on mobile!
            </p>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Responsive Mode (Auto-adapts)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination responsive-mode="true" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Fixed Mode (No auto-adapt)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination responsive-mode="false" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Custom Mobile Breakpoint (1024px)</h4>
          <div style="display: flex; justify-content: center;">
            <ui-pagination responsive-mode="true" mobile-breakpoint="1024" theme="success" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
        </div>
      `;
      setupPaginationEvents();
    };

    function setupPaginationEvents() {
      setTimeout(() => {
        const paginations = document.querySelectorAll('ui-pagination');
        paginations.forEach(pagination => {
          pagination.addEventListener('pageChange', event => {
            console.log('Page changed:', event.detail);
          });
        });
      }, 100);
    }

    showBasicPagination();
  }, 100);
}

// Shapes Demo
window.showPaginationShapes = function () {
  const container = document.getElementById('paginationDemoContainer');
  if (!container) return;
  container.innerHTML = `
        <div class="demo-block">
          <h3> Button Shapes</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Different button shape styles - notice the border radius!</p>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Default Shape (4px radius)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination shape="default" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Rounded Shape (12px radius)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination shape="rounded" theme="success" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Pill Shape (24px radius + padding)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination shape="pill" theme="warning" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>

          <h4 style="margin-top: 24px; margin-bottom: 12px;">Circle Shape (50% radius — equal width &amp; height)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination shape="circle" theme="danger" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
        </div>
      `;
  setupPaginationEvents();
};

// Responsive Demo
window.showResponsivePagination = function () {
  const container = document.getElementById('paginationDemoContainer');
  if (!container) return;
  container.innerHTML = `
        <div class="demo-block">
          <h3> Responsive Pagination</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Auto-adapts to mobile screens</p>
          
          <div style="background-color: var(--accent-yellow-soft,#fef3c7); padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 0; color:var(--accent-yellow,#92400e);">
               <strong>Tip:</strong> Resize your browser window below 768px to see automatic compact mode!
            </p>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Responsive Mode Enabled</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination responsive-mode="true" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
        </div>
      `;
  setupPaginationEvents();
};

// Quick Jump Demo
window.showQuickJumpDemo = function () {
  const container = document.getElementById('paginationDemoContainer');
  if (!container) return;
  container.innerHTML = `
        <div class="demo-block">
          <h3> Quick Jump Buttons</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Jump multiple pages at once with +5/-5 buttons</p>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Quick Jump Enabled (Step: 5)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination quick-jump="true" quick-jump-step="5" total-items="500" items-per-page="10" current-page="15"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Custom Step Size (Step: 10)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination quick-jump="true" quick-jump-step="10" total-items="1000" items-per-page="10" current-page="25"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">With Theme</h4>
          <div style="display: flex; justify-content: center;">
            <ui-pagination quick-jump="true" quick-jump-step="5" theme="primary" total-items="300" items-per-page="10" current-page="12"></ui-pagination>
          </div>
        </div>
      `;
  setupPaginationEvents();
};

// Progress Indicator Demo
window.showProgressDemo = function () {
  const container = document.getElementById('paginationDemoContainer');
  if (!container) return;
  container.innerHTML = `
        <div class="demo-block">
          <h3> Progress Indicator</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Visual progress bar showing pagination progress</p>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">With Progress Bar</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination show-progress="true" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Progress with Different Themes</h4>
          <div style="display: flex; flex-direction: column; gap: 20px; align-items: center;">
            <ui-pagination show-progress="true" theme="primary" total-items="100" items-per-page="10" current-page="5"></ui-pagination>
            <ui-pagination show-progress="true" theme="success" total-items="100" items-per-page="10" current-page="7"></ui-pagination>
            <ui-pagination show-progress="true" theme="danger" total-items="100" items-per-page="10" current-page="9"></ui-pagination>
          </div>
        </div>
      `;
  setupPaginationEvents();
};

// Sticky Pagination Demo
window.showStickyDemo = function () {
  const container = document.getElementById('paginationDemoContainer');
  if (!container) return;
  container.innerHTML = `
        <div class="demo-block">
          <h3> Sticky Positioning</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Pagination stays fixed while scrolling</p>
          
          <div style="background-color: var(--accent-yellow-soft,#fef3c7); padding: 16px; border-radius: 8px; margin-bottom: 24px;">
            <p style="margin: 0; color:var(--accent-yellow,#92400e);">
               <strong>Note:</strong> Sticky positioning works best in scrollable containers. Try scrolling to see the effect!
            </p>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Sticky Bottom (Default)</h4>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination sticky="true" sticky-position="bottom" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Sticky Top</h4>
          <div style="display: flex; justify-content: center;">
            <ui-pagination sticky="true" sticky-position="top" total-items="100" items-per-page="10" current-page="5"></ui-pagination>
          </div>
        </div>
      `;
  setupPaginationEvents();
};

// Smart Features Demo
window.showSmartFeaturesDemo = function () {
  const container = document.getElementById('paginationDemoContainer');
  if (!container) return;
  container.innerHTML = `
        <div class="demo-block">
          <h3> Smart Features</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Auto-hide, Smart Compact, URL Sync, and LocalStorage</p>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Auto-Hide (Single Page)</h4>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Pagination hides when there's only 1 page</p>
          <div style="display: flex; justify-content: center; margin-bottom: 24px; min-height: 60px; background:var(--bg-secondary,#f9fafb); border-radius: 8px; align-items: center;">
            <ui-pagination auto-hide="true" total-items="5" items-per-page="10" current-page="1"></ui-pagination>
            <p style="color: #9ca3af; font-style: italic;"> Pagination is hidden (only 1 page)</p>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">Smart Compact Mode</h4>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Auto-switches to compact when pages exceed threshold (20)</p>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination smart-compact="true" smart-compact-threshold="20" total-items="500" items-per-page="10" current-page="15"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">URL Sync</h4>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Current page syncs with browser URL (check URL bar!)</p>
          <div style="display: flex; justify-content: center; margin-bottom: 24px;">
            <ui-pagination url-sync="true" url-param="page" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
          </div>
          
          <h4 style="margin-top: 24px; margin-bottom: 12px;">LocalStorage Persistence</h4>
          <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Page persists across page reloads</p>
          <div style="display: flex; justify-content: center;">
            <ui-pagination persist-page="true" storage-key="demo-page" total-items="100" items-per-page="10" current-page="1"></ui-pagination>
          </div>
        </div>
      `;
  setupPaginationEvents();
};

// Variants Demo
window.showPaginationVariants = function () {
  const container = document.getElementById('paginationDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-block">
      <h3>✨ Visual Variants</h3>
      <p style="color: #6b7280; margin-bottom: 20px;">All available visual styles for the pagination component</p>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Default</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 24px;">
        <ui-pagination variant="default" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Outlined</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 24px;">
        <ui-pagination variant="outlined" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Filled</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 24px;">
        <ui-pagination variant="filled" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Soft</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 24px;">
        <ui-pagination variant="outline" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Minimalist</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 24px;">
        <ui-pagination variant="minimalist" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Underline</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 24px;">
        <ui-pagination variant="underline" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Floating</h4>
      <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Elevated card-like appearance with shadow</p>
      <div style="display: flex; justify-content: center; margin-bottom: 24px; padding: 24px; background:var(--bg-tertiary,#f1f5f9); border-radius: 12px;">
        <ui-pagination variant="floating" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Glass</h4>
      <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Frosted-glass effect — best on coloured backgrounds</p>
      <div style="display: flex; justify-content: center; margin-bottom: 24px; padding: 24px; background: linear-gradient(135deg, #6366f1, #06b6d4); border-radius: 12px;">
        <ui-pagination variant="glass" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Modern</h4>
      <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Clean dark-elevated style with subtle shadow</p>
      <div style="display: flex; justify-content: center; margin-bottom: 24px; padding: 24px; background: var(--bg-tertiary, #f1f5f9); border-radius: 12px; border: 1px solid var(--border-default);">
        <ui-pagination variant="modern" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Premium</h4>
      <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">High-contrast premium look with deep shadow</p>
      <div style="display: flex; justify-content: center; margin-bottom: 24px; padding: 24px; background: var(--bg-tertiary, #f1f5f9); border-radius: 12px; border: 1px solid var(--border-default);">
        <ui-pagination variant="premium" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <h4 style="margin-top: 24px; margin-bottom: 12px;">Segmented</h4>
      <p style="color: #6b7280; font-size: 14px; margin-bottom: 12px;">Joined button group with shared border</p>
      <div style="display: flex; justify-content: center; margin-bottom: 24px;">
        <ui-pagination segmented="true" theme="primary" total-items="100" items-per-page="10" current-page="3"></ui-pagination>
      </div>

      <div style="margin-top: 20px; padding: 12px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 6px;">
        <p style="margin: 0; color: var(--accent-green,#166534); font-size: 14px;">
          💡 <strong>Tip:</strong> Glass, Modern, and Premium variants look best on dark or coloured backgrounds.
          Use <code>theme</code> to change the active-page colour across all variants.
        </p>
      </div>
    </div>
  `;
  setupPaginationEvents();
};

// Action Bar Demo
window.showActionBarDemo = function () {
  const container = document.getElementById('paginationDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-block">
      <h3>⚡ Modern Action Bars</h3>
      <p style="color: #6b7280; margin-bottom: 24px;">Premium pill-shaped containers that group totals, page selection, and page size into a single unified component.</p>
      
      <h4 style="margin-bottom: 16px;">Premium Action Bar (Dropdown)</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 40px; padding: 24px; background: var(--bg-tertiary, #f1f5f9); border-radius: 16px; border: 1px solid var(--border-default);">
        <ui-pagination 
          type="dropdown" 
          variant="premium" 
          theme="primary" 
          total-items="1000" 
          items-per-page="100" 
          show-page-size="true" 
          show-total="true" 
          current-page="5">
        </ui-pagination>
      </div>
      
      <h4 style="margin-bottom: 16px;">Modern Action Bar (Input)</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 40px; padding: 24px; background:var(--bg-secondary,#f8fafc); border-radius: 16px; border:1px solid var(--border-default,#e2e8f0);">
        <ui-pagination 
          type="input" 
          variant="modern" 
          theme="primary" 
          total-items="500" 
          items-per-page="50" 
          show-page-size="true" 
          show-total="true" 
          current-page="3">
        </ui-pagination>
      </div>

      <h4 style="margin-bottom: 16px;">Glass Action Bar (Floating)</h4>
      <div style="display: flex; justify-content: center; margin-bottom: 40px; padding: 48px; background: linear-gradient(135deg, #1e3c72 0%, #2a5298 100%); border-radius: 16px;">
        <ui-pagination 
          type="dropdown" 
          variant="glass" 
          total-items="250" 
          items-per-page="25" 
          show-page-size="true" 
          show-total="true" 
          current-page="4">
        </ui-pagination>
      </div>
      
      <div style="margin-top: 20px; padding: 16px; background-color: #f0f9ff; border-radius: 12px; border: 1px solid #d0e7ff;">
        <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px; line-height: 1.6;">
          <strong>Design Note:</strong> These "Action Bar" styles are automatically applied when using <code>type="dropdown"</code> or <code>type="input"</code> combined with modern variants like <code>premium</code>, <code>modern</code>, or <code>glass</code>. The items-per-page dropdown is now fully integrated into these pill designs for a clean, professional workspace.
        </p>
      </div>
    </div>
  `;
  setupPaginationEvents();
};
