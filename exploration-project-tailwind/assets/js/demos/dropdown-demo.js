// Dropdown Component Demo
export function initDropdownDemo() {
  const section = document.getElementById('dropdown');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Versatile and accessible select component supporting single-select, multi-select, cascading options, search, and more.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button id="btnDropPlay"  icon="play" label="Playground" variant="outline"></ui-button>
      <ui-button id="btnDropEnt"  icon="award" label="Enterprise Elite" variant="outline"></ui-button>
      <ui-button id="btnDropSingle"  label="Single Select" variant="outline"></ui-button>
      <ui-button id="btnDropMulti"  label="Multi Select" variant="outline"></ui-button>
      <ui-button id="btnDropCascade"  icon="tree-pine" label="Cascading" variant="outline"></ui-button>
      <ui-button id="btnDropSearch"  icon="search" label="Searchable" variant="outline"></ui-button>
      <ui-button id="btnDropAppear"  label="Appearances" variant="outline"></ui-button>
      <ui-button id="btnDropSizes"  label="Sizes" variant="outline"></ui-button>
      <ui-button id="btnDropRich"  label="Rich Items" variant="outline"></ui-button>
      <ui-button id="btnDropApex"  icon="crown" label="Apex Rich" variant="outline"></ui-button>
      <ui-button id="btnDropComp"  label="Composition" variant="outline"></ui-button>
      <ui-button id="btnDropEvents"  label="Events" variant="outline"></ui-button>
      <ui-button id="btnDropMarker"  label="Marker Styling" variant="outline"></ui-button>
    </div>

    <div id="dropdownDemoContainer" style="margin-top: 20px;"></div>
  `;

  const updateActiveBtn = id => {
    [
      'btnDropPlay',
      'btnDropEnt',
      'btnDropSingle',
      'btnDropMulti',
      'btnDropCascade',
      'btnDropSearch',
      'btnDropAppear',
      'btnDropSizes',
      'btnDropRich',
      'btnDropApex',
      'btnDropComp',
      'btnDropEvents',
      'btnDropMarker',
    ].forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.selected = btnId === id;
    });
  };

  setTimeout(() => {
    const demoMap = {
      btnDropPlay: () => window.showDropdownPlayground(),
      btnDropEnt: () => window.showEnterpriseDropdowns(),
      btnDropSingle: () => window.showSingleSelect(),
      btnDropMulti: () => window.showMultiSelect(),
      btnDropCascade: () => window.showCascadingDropdown(),
      btnDropSearch: () => window.showSearchableDropdown(),
      btnDropAppear: () => window.showDropdownAppearances(),
      btnDropSizes: () => window.showDropdownSizes(),
      btnDropRich: () => window.showRichItemDropdown(),
      btnDropApex: () => window.showApexRichDropdown(),
      btnDropComp: () => window.showDropdownComposition(),
      btnDropEvents: () => window.showDropdownEvents(),
      btnDropMarker: () => window.showMarkerStyling(),
    };

    Object.entries(demoMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          updateActiveBtn(id);
          func();
        });
      }
    });

    updateActiveBtn('btnDropEnt');
    window.showEnterpriseDropdowns();
  }, 100);
}

window.showSingleSelect = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">Single Select Dropdown</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Standard dropdown with single selection and optional icons.</p>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Countries</h4>
          <ui-dropdown id="countriesDropdown" placeholder="Select a country"></ui-dropdown>
          <div id="countryOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #f0f9ff); border-radius: 8px; font-size: 13px; color:var(--accent-blue,#1e40af); border: 1px solid #bae6fd; min-height: 40px; display: flex; align-items: center;">
            No selection
          </div>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Programming Languages</h4>
          <ui-dropdown id="languagesDropdown" placeholder="Select a language"></ui-dropdown>
          <div id="languageOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #f0fdf4); border-radius: 8px; font-size: 13px; color: var(--accent-green,#166534); border: 1px solid #bbf7d0; min-height: 40px; display: flex; align-items: center;">
            No selection
          </div>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">With Icons</h4>
          <ui-dropdown id="iconsDropdown" placeholder="Select an option" icon-library="lucide"></ui-dropdown>
          <div id="iconOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #fffbeb); border-radius: 8px; font-size: 13px; color:var(--accent-yellow,#92400e); border: 1px solid #fef3c7; min-height: 40px; display: flex; align-items: center;">
            No selection
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const countriesDropdown = document.getElementById('countriesDropdown');
    if (countriesDropdown) {
      countriesDropdown.options = [
        { value: 'us', label: 'United States', description: 'North America' },
        { value: 'uk', label: 'United Kingdom', description: 'Europe' },
        { value: 'ca', label: 'Canada', description: 'North America' },
        { value: 'au', label: 'Australia', description: 'Oceania' },
        { value: 'de', label: 'Germany', description: 'Europe' },
        { value: 'fr', label: 'France', description: 'Europe' },
        { value: 'jp', label: 'Japan', description: 'Asia' },
        { value: 'in', label: 'India', description: 'Asia' },
      ];

      countriesDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('countryOutput');
        if (output) {
          output.innerHTML = `Selected: <strong>${e.detail.selectedOptions[0]?.label || 'None'}</strong>`;
        }
      });
    }

    const languagesDropdown = document.getElementById('languagesDropdown');
    if (languagesDropdown) {
      languagesDropdown.options = [
        { value: 1, label: 'JavaScript' },
        { value: 2, label: 'TypeScript' },
        { value: 3, label: 'Python' },
        { value: 4, label: 'Java' },
        { value: 5, label: 'C++' },
        { value: 6, label: 'Go' },
        { value: 7, label: 'Rust' },
        { value: 8, label: 'PHP' },
      ];

      languagesDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('languageOutput');
        if (output) {
          output.innerHTML = `Selected: <strong>${e.detail.selectedOptions[0]?.label || 'None'}</strong>`;
        }
      });
    }

    const iconsDropdown = document.getElementById('iconsDropdown');
    if (iconsDropdown) {
      iconsDropdown.options = [
        { value: 'home', label: 'Home', icon: 'home' },
        { value: 'user', label: 'User', icon: 'user' },
        { value: 'settings', label: 'Settings', icon: 'settings' },
        { value: 'email', label: 'Email', icon: 'mail' },
        { value: 'phone', label: 'Phone', icon: 'smartphone' },
        { value: 'heart', label: 'Favorites', icon: 'heart' },
      ];

      iconsDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('iconOutput');
        if (output && e.detail.selectedOptions[0]) {
          output.innerHTML = `Selected: ${e.detail.selectedOptions[0].icon} <strong>${e.detail.selectedOptions[0].label}</strong>`;
        }
      });
    }
  }, 100);
};

window.showMultiSelect = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">Multi-Select Dropdown</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Select multiple options with checkboxes and clearable selections.</p>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Skills</h4>
          <ui-dropdown id="skillsDropdown" multi-select show-select-all placeholder="Select your skills"></ui-dropdown>
          <div id="skillsOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #f0f9ff); border-radius: 8px; font-size: 13px; color:var(--accent-blue,#1e40af); border: 1px solid #bae6fd; min-height: 40px;">
            No skills selected
          </div>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Project Status (With Icons)</h4>
          <ui-dropdown id="fruitsDropdown" multi-select show-select-all placeholder="Select status" icon-library="lucide"></ui-dropdown>
          <div id="fruitsOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #f0fdf4); border-radius: 8px; font-size: 13px; color: var(--accent-green,#166534); border: 1px solid #bbf7d0; min-height: 40px;">
            No status selected
          </div>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Technologies</h4>
          <ui-dropdown id="techDropdown" multi-select show-select-all placeholder="Select technologies"></ui-dropdown>
          <div id="techOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #fffbeb); border-radius: 8px; font-size: 13px; color:var(--accent-yellow,#92400e); border: 1px solid #fef3c7; min-height: 40px;">
            No technologies selected
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const skillsDropdown = document.getElementById('skillsDropdown');
    if (skillsDropdown) {
      skillsDropdown.options = [
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'js', label: 'JavaScript' },
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue.js' },
        { value: 'angular', label: 'Angular' },
        { value: 'node', label: 'Node.js' },
        { value: 'python', label: 'Python' },
      ];

      skillsDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('skillsOutput');
        if (output) {
          const selected = e.detail.selectedOptions.map(o => o.label).join(', ');
          output.innerHTML = selected ? `Selected: <strong>${selected}</strong>` : 'No skills selected';
        }
      });
    }

    const fruitsDropdown = document.getElementById('fruitsDropdown');
    if (fruitsDropdown) {
      fruitsDropdown.options = [
        { value: 'active', label: 'Active', icon: 'check-circle' },
        { value: 'pending', label: 'Pending', icon: 'clock' },
        { value: 'review', label: 'Review', icon: 'eye' },
        { value: 'done', label: 'Completed', icon: 'check-square' },
        { value: 'archived', label: 'Archived', icon: 'archive' },
        { value: 'deleted', label: 'Deleted', icon: 'trash-2' },
      ];

      fruitsDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('fruitsOutput');
        if (output) {
          const selected = e.detail.selectedOptions.map(o => `${o.label}`).join(', ');
          output.innerHTML = selected ? `Selected: <strong>${selected}</strong>` : 'No status selected';
        }
      });
    }

    const techDropdown = document.getElementById('techDropdown');
    if (techDropdown) {
      techDropdown.options = [
        { value: 'docker', label: 'Docker' },
        { value: 'k8s', label: 'Kubernetes' },
        { value: 'aws', label: 'AWS' },
        { value: 'azure', label: 'Azure' },
        { value: 'gcp', label: 'Google Cloud' },
        { value: 'jenkins', label: 'Jenkins' },
        { value: 'git', label: 'Git' },
      ];

      techDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('techOutput');
        if (output) {
          const selected = e.detail.selectedOptions.map(o => o.label).join(', ');
          output.innerHTML = selected ? `Selected: <strong>${selected}</strong>` : 'No technologies selected';
        }
      });
    }
  }, 100);
};

window.showCascadingDropdown = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">🌳 Cascading Dropdown</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Navigate through nested options with expandable nodes and hierarchical selection.</p>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 16px;">
            <h4 style="margin: 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase;">File System (Expanded)</h4>
            <ui-button id="btnScanTree" variant="outline" color="neutral" label="Scan Tree" size="md"ui-button>
          </div>
          <ui-dropdown id="fileSystemDropdown" cascading expand-all multi-select full-width="true" placeholder="Browse files" icon-library="lucide"></ui-dropdown>
          <div id="fileSystemOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #f0f9ff); border-radius: 8px; font-size: 13px; color:var(--accent-blue,#1e40af); border: 1px solid #bae6fd; min-height: 40px;">
            No files selected
          </div>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase;">Organization</h4>
          <ui-dropdown id="orgDropdown" cascading multi-select full-width="true" placeholder="Select departments"></ui-dropdown>
          <div id="orgOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #f0fdf4); border-radius: 8px; font-size: 13px; color: var(--accent-green,#166534); border: 1px solid #bbf7d0; min-height: 40px;">
            No departments selected
          </div>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase;">Product Catalog</h4>
          <ui-dropdown id="categoryDropdown" cascading full-width="true" placeholder="Select category"></ui-dropdown>
          <div id="categoryOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #fffbeb); border-radius: 8px; font-size: 13px; color:var(--accent-yellow,#92400e); border: 1px solid #fef3c7; min-height: 40px;">
            No category selected
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const fileSystemDropdown = document.getElementById('fileSystemDropdown');
    if (fileSystemDropdown) {
      fileSystemDropdown.options = [
        {
          value: 'root',
          label: 'Root',
          icon: 'hard-drive',
          children: [
            {
              value: 'documents',
              label: 'Documents',
              icon: 'folder',
              children: [
                { value: 'doc1', label: 'Report.pdf', icon: 'file-text' },
                { value: 'doc2', label: 'Presentation.pptx', icon: 'monitor' },
              ],
            },
            {
              value: 'images',
              label: 'Images',
              icon: 'folder',
              children: [
                { value: 'img1', label: 'Photo1.jpg', icon: 'image' },
                { value: 'img2', label: 'Photo2.png', icon: 'image' },
              ],
            },
            {
              value: 'videos',
              label: 'Videos',
              icon: 'folder',
              children: [{ value: 'vid1', label: 'Movie.mp4', icon: 'film' }],
            },
          ],
        },
      ];

      fileSystemDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('fileSystemOutput');
        if (output) {
          const selected = e.detail.selectedOptions.map(o => o.label).join(', ');
          output.innerHTML = selected ? `Selected: <strong>${selected}</strong>` : 'No files selected';
        }
      });
    }

    const orgDropdown = document.getElementById('orgDropdown');
    if (orgDropdown) {
      orgDropdown.options = [
        {
          value: 'eng',
          label: 'Engineering',
          children: [
            { value: 'frontend', label: 'Frontend Team' },
            { value: 'backend', label: 'Backend Team' },
            { value: 'devops', label: 'DevOps Team' },
          ],
        },
        {
          value: 'sales',
          label: 'Sales',
          children: [
            { value: 'inside', label: 'Inside Sales' },
            { value: 'field', label: 'Field Sales' },
          ],
        },
        {
          value: 'marketing',
          label: 'Marketing',
          children: [
            { value: 'digital', label: 'Digital Marketing' },
            { value: 'content', label: 'Content Marketing' },
          ],
        },
      ];

      orgDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('orgOutput');
        if (output) {
          const selected = e.detail.selectedOptions.map(o => o.label).join(', ');
          output.innerHTML = selected ? `Selected: <strong>${selected}</strong>` : 'No departments selected';
        }
      });
    }

    const categoryDropdown = document.getElementById('categoryDropdown');
    if (categoryDropdown) {
      categoryDropdown.options = [
        {
          value: 'electronics',
          label: '⚡ Electronics',
          children: [
            {
              value: 'computers',
              label: '💻 Computers',
              children: [
                { value: 'laptops', label: 'Laptops' },
                { value: 'desktops', label: 'Desktops' },
              ],
            },
            {
              value: 'phones',
              label: '📱 Phones',
              children: [
                { value: 'smartphones', label: 'Smartphones' },
                { value: 'feature', label: 'Feature Phones' },
              ],
            },
          ],
        },
        {
          value: 'clothing',
          label: '👕 Clothing',
          children: [
            { value: 'mens', label: "Men's Wear" },
            { value: 'womens', label: "Women's Wear" },
          ],
        },
      ];

      categoryDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('categoryOutput');
        if (output) {
          const selected = e.detail.selectedOptions[0]?.label || 'None';
          output.innerHTML = `Selected: <strong>${selected}</strong>`;
        }
      });
    }

    document.getElementById('btnScanTree')?.addEventListener('click', () => {
      console.log('Scanning tree...');
      // Logic for scan tree if any
    });
  }, 100);
};

window.showSearchableDropdown = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">🔍 Searchable Dropdown</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Efficiently filter large lists with real-time text search.</p>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Countries (Searchable)</h4>
          <ui-dropdown id="searchCountriesDropdown" searchable placeholder="Search countries..."></ui-dropdown>
          <div id="searchCountryOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #f0f9ff); border-radius: 8px; font-size: 13px; color:var(--accent-blue,#1e40af); border: 1px solid #bae6fd; min-height: 40px;">
            No selection
          </div>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Multi-Select with Search</h4>
          <ui-dropdown id="searchMultiDropdown" searchable multi-select show-select-all placeholder="Search and select..."></ui-dropdown>
          <div id="searchMultiOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #f0fdf4); border-radius: 8px; font-size: 13px; color: var(--accent-green,#166534); border: 1px solid #bbf7d0; min-height: 40px;">
            No items selected
          </div>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Cascading with Search</h4>
          <ui-dropdown id="searchCascadeDropdown" searchable cascading multi-select placeholder="Search hierarchy..."></ui-dropdown>
          <div id="searchCascadeOutput" style="margin-top: 16px; padding: 12px; background: var(--bg-tertiary, #fffbeb); border-radius: 8px; font-size: 13px; color:var(--accent-yellow,#92400e); border: 1px solid #fef3c7; min-height: 40px;">
            No items selected
          </div>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const searchCountriesDropdown = document.getElementById('searchCountriesDropdown');
    if (searchCountriesDropdown) {
      searchCountriesDropdown.options = [
        { value: 'us', label: 'United States' },
        { value: 'uk', label: 'United Kingdom' },
        { value: 'ca', label: 'Canada' },
        { value: 'au', label: 'Australia' },
        { value: 'de', label: 'Germany' },
        { value: 'fr', label: 'France' },
        { value: 'jp', label: 'Japan' },
        { value: 'in', label: 'India' },
        { value: 'cn', label: 'China' },
        { value: 'br', label: 'Brazil' },
        { value: 'mx', label: 'Mexico' },
        { value: 'es', label: 'Spain' },
        { value: 'it', label: 'Italy' },
        { value: 'kr', label: 'South Korea' },
      ];

      searchCountriesDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('searchCountryOutput');
        if (output) {
          output.innerHTML = `Selected: <strong>${e.detail.selectedOptions[0]?.label || 'None'}</strong>`;
        }
      });
    }

    const searchMultiDropdown = document.getElementById('searchMultiDropdown');
    if (searchMultiDropdown) {
      searchMultiDropdown.options = [
        { value: 'html', label: 'HTML' },
        { value: 'css', label: 'CSS' },
        { value: 'js', label: 'JavaScript' },
        { value: 'react', label: 'React' },
        { value: 'vue', label: 'Vue.js' },
        { value: 'angular', label: 'Angular' },
        { value: 'node', label: 'Node.js' },
        { value: 'python', label: 'Python' },
        { value: 'java', label: 'Java' },
        { value: 'csharp', label: 'C#' },
        { value: 'php', label: 'PHP' },
        { value: 'ruby', label: 'Ruby' },
      ];

      searchMultiDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('searchMultiOutput');
        if (output) {
          const selected = e.detail.selectedOptions.map(o => o.label).join(', ');
          output.innerHTML = selected ? `Selected: <strong>${selected}</strong>` : 'No items selected';
        }
      });
    }

    const searchCascadeDropdown = document.getElementById('searchCascadeDropdown');
    if (searchCascadeDropdown) {
      searchCascadeDropdown.options = [
        {
          value: 'frontend',
          label: 'Frontend',
          children: [
            { value: 'react', label: 'React' },
            { value: 'vue', label: 'Vue' },
            { value: 'angular', label: 'Angular' },
          ],
        },
        {
          value: 'backend',
          label: 'Backend',
          children: [
            { value: 'node', label: 'Node.js' },
            { value: 'python', label: 'Python' },
            { value: 'java', label: 'Java' },
          ],
        },
        {
          value: 'database',
          label: 'Database',
          children: [
            { value: 'mysql', label: 'MySQL' },
            { value: 'postgres', label: 'PostgreSQL' },
            { value: 'mongo', label: 'MongoDB' },
          ],
        },
      ];

      searchCascadeDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('searchCascadeOutput');
        if (output) {
          const selected = e.detail.selectedOptions.map(o => o.label).join(', ');
          output.innerHTML = selected ? `Selected: <strong>${selected}</strong>` : 'No items selected';
        }
      });
    }
  }, 100);
};

window.showDropdownSizes = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <div style="margin-bottom: 24px;">
        <h3 style="margin: 0;">📐 Size Variants</h3>
        <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Choose from small, md (default), or large variants to fit your layout.</p>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 20px;">
        ${['xxxs', 'xxs', 'xs', 'sm', 'md', 'lg', 'xl', 'xxl', 'xxxl']
          .map(
            s => `
          <div style="display: flex; align-items: center; gap: 16px; background: var(--bg-primary, white); padding: 16px; border-radius: 12px; border:1px solid var(--border-default,#e5e7eb);">
            <span style="width: 80px; font-size: 11px; font-weight: 800; color:var(--text-secondary,#64748b); text-transform: uppercase;">${s}</span>
            <ui-dropdown class="demo-size-dropdown" size="${s}" placeholder="Select ${s}..." style="flex: 1;"></ui-dropdown>
          </div>
        `,
          )
          .join('')}
      </div>
    </div>
  `;

  setTimeout(() => {
    const options = [
      { value: '1', label: 'Option 1' },
      { value: '2', label: 'Option 2' },
      { value: '3', label: 'Option 3' },
    ];

    ['smallDropdown', 'mdDropdown', 'largeDropdown', 'disabledDropdown'].forEach(id => {
      const dropdown = document.getElementById(id);
      if (dropdown) {
        dropdown.options = options;
      }
    });

    document.querySelectorAll('.demo-size-dropdown').forEach(dropdown => {
      dropdown.options = options;
    });
  }, 100);
};

window.showDropdownPlayground = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>🎮 Interactive Playground</h3>
      <p>Customize dropdown behavior and appearance.</p>
      
      <div style="display: grid; grid-template-columns: 300px 1fr; gap: 30px; margin-top: 30px;">
        <div style="background: var(--bg-secondary, #f9fafb); padding: 20px; border-radius: 8px; height: fit-content;">
          <h4 style="margin-top: 0;">Configuration</h4>
          
          <div style="margin-bottom: 20px;">
            <ui-dropdown id="playMode" label="Mode" value="single" options='[
              {"label": "Single Select", "value": "single"},
              {"label": "Multi Select", "value": "multi"},
              {"label": "Cascading", "value": "cascade"}
            ]' variant="outline" size="md"></ui-dropdown>
          </div>

          <div style="display: flex; flex-direction: column; gap: 12px; margin-bottom: 20px;">
            <ui-checkbox id="playSearchable" label="Searchable" size="md"></ui-checkbox>
            <ui-checkbox id="playClearable" label="Clearable" checked size="md"></ui-checkbox>
            <ui-checkbox id="playDisabled" label="Disabled" size="md"></ui-checkbox>
            <ui-checkbox id="playChipView" label="Chip View (Multi)" size="md"></ui-checkbox>
            <ui-checkbox id="playLoading" label="Loading State" size="md"></ui-checkbox>
            <ui-checkbox id="playInvalid" label="Invalid State" size="md"></ui-checkbox>
          </div>

          <div style="margin-bottom: 20px;">
            <ui-dropdown id="playSize" label="Size" value="md" options='[
              {"label": "XXXS", "value": "xxxs"},
              {"label": "XXS", "value": "xxs"},
              {"label": "XS", "value": "xs"},
              {"label": "Small", "value": "sm"},
              {"label": "Medium", "value": "md"},
              {"label": "Large", "value": "lg"},
              {"label": "XL", "value": "xl"},
              {"label": "XXL", "value": "xxl"},
              {"label": "XXXL", "value": "xxxl"}
            ]' variant="outline" size="md"></ui-dropdown>
          </div>

          <div style="margin-bottom: 20px;">
            <ui-input type="number" id="playMaxHeight" label="Max Height" value="300" variant="outline" size="md"></ui-input>
          </div>

          <div style="margin-bottom: 24px;">
            <ui-dropdown id="playVariant" label="Variant" value="default" options='[
              {"label": "Default", "value": "default"},
              {"label": "Glass", "value": "glass"},
              {"label": "Detailed (Apex)", "value": "detailed"},
              {"label": "Toggle (Compact)", "value": "toggle"}
            ]' variant="outline" size="md"ui-dropdown>
          </div>
        </div>

        <div>
          <h4>Preview</h4>
          <ui-dropdown id="playgroundDropdown" placeholder="Configure and test dropdown" icon-library="lucide"></ui-dropdown>
          
          <div id="playgroundOutput" style="margin-top: 20px; padding: 15px; background: var(--bg-tertiary, #eff6ff); border-radius: 6px;">
            <h5 style="margin: 0 0 10px 0; color:var(--accent-blue,#1e40af);">Output</h5>
            <div id="playgroundValue" style="font-size: 14px; color: #374151;">No selection</div>
          </div>

          <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
            <ui-button id="copyDropdownBtn" variant="ghost" color="neutral" label="Copy" size="md" style="position: absolute; top: 10px; right: 10px;"></ui-button>
            <code id="dropdownCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
              &lt;ui-dropdown ...&gt;&lt;/ui-dropdown&gt;
            </code>
          </div>
        </div>
      </div>
    </div>
  `;

  const copyDropdownCode = () => {
    const code = document.getElementById('dropdownCodeBlock').innerText;
    const btn = document.getElementById('copyDropdownBtn');

    navigator.clipboard.writeText(code).then(() => {
      const originalLabel = btn.label;
      btn.label = 'Copied!';
      btn.color = 'success';

      setTimeout(() => {
        btn.label = originalLabel;
        btn.color = 'neutral';
      }, 2000);
    });
  };

  const updateDropdownCode = () => {
    const dropdown = document.getElementById('playgroundDropdown');
    const codeBlock = document.getElementById('dropdownCodeBlock');
    if (!dropdown || !codeBlock) return;

    let props = '';
    if (dropdown.placeholder) props += ` placeholder="${dropdown.placeholder}"`;
    if (dropdown.multiSelect) props += ` multi-select`;
    if (dropdown.cascading) props += ` cascading`;
    if (dropdown.searchable) props += ` searchable`;
    if (!dropdown.clearable) props += ` clearable="false"`;
    if (dropdown.disabled) props += ` disabled`;
    if (dropdown.size && dropdown.size !== 'md') props += ` size="${dropdown.size}"`;
    if (dropdown.maxHeight && dropdown.maxHeight !== 300) props += ` max-height="${dropdown.maxHeight}"`;

    let optionsStr = '';
    try {
      const opts = typeof dropdown.options === 'string' ? JSON.parse(dropdown.options) : dropdown.options;
      const displayOpts = JSON.stringify(opts, null, 2);
      optionsStr = `\n  const options = ${displayOpts};\n  dropdown.options = options;`;
    } catch (e) {
      optionsStr = '\n  // Options set via JavaScript';
    }

    codeBlock.innerText = `<ui-dropdown icon-library="lucide"${props}></ui-dropdown>\n<script>${optionsStr}\n</script>`;
  };

  const updatePlaygroundDropdown = () => {
    const playMode = document.getElementById('playMode');
    if (!playMode) return;

    const mode = playMode.value;
    const searchable = document.getElementById('playSearchable').checked;
    const clearable = document.getElementById('playClearable').checked;
    const disabled = document.getElementById('playDisabled').checked;
    const size = document.getElementById('playSize').value;
    const variant = document.getElementById('playVariant').value;
    const chipView = document.getElementById('playChipView').checked;
    const loading = document.getElementById('playLoading').checked;
    const invalid = document.getElementById('playInvalid').checked;
    const maxHeightInput = document.getElementById('playMaxHeight');
    const maxHeight = maxHeightInput ? parseInt(maxHeightInput.value) : 300;

    const dropdown = document.getElementById('playgroundDropdown');
    if (!dropdown) return;

    // Set attributes
    dropdown.multiSelect = mode === 'multi';
    dropdown.showSelectAll = mode === 'multi';
    dropdown.chipView = chipView;
    dropdown.variant = variant;
    dropdown.loading = loading;
    dropdown.invalid = invalid;
    dropdown.errorMessage = invalid ? 'Error: Selection required' : '';
    dropdown.cascading = mode === 'cascade';
    dropdown.searchable = searchable;
    dropdown.clearable = clearable;
    dropdown.disabled = disabled;
    dropdown.size = size;
    dropdown.maxHeight = maxHeight;
    dropdown.value = '';

    // Set options based on mode
    if (mode === 'cascade') {
      dropdown.options = [
        {
          value: 'usa',
          label: '🇺🇸 USA',
          children: [
            { value: 'ny', label: 'New York' },
            { value: 'la', label: 'Los Angeles' },
            { value: 'chicago', label: 'Chicago' },
          ],
        },
        {
          value: 'uk',
          label: '🇬🇧 UK',
          children: [
            { value: 'london', label: 'London' },
            { value: 'manchester', label: 'Manchester' },
          ],
        },
      ];
    } else {
      dropdown.options = [
        { value: 'opt1', label: 'Option 1', icon: 'star' },
        { value: 'opt2', label: 'Option 2', icon: 'target' },
        { value: 'opt3', label: 'Option 3', icon: 'rocket' },
        { value: 'opt4', label: 'Option 4', icon: 'gem' },
        { value: 'opt5', label: 'Option 5', icon: 'flame' },
      ];
    }

    updateDropdownCode();
  };

  setTimeout(() => {
    document.getElementById('copyDropdownBtn')?.addEventListener('click', copyDropdownCode);

    ['playMode', 'playSize', 'playVariant'].forEach(id => {
      document.getElementById(id)?.addEventListener('valueChange', updatePlaygroundDropdown);
    });

    document.getElementById('playMaxHeight')?.addEventListener('inputChange', updatePlaygroundDropdown);

    ['playSearchable', 'playClearable', 'playDisabled', 'playChipView', 'playLoading', 'playInvalid'].forEach(id => {
      document.getElementById(id)?.addEventListener('checkboxChange', updatePlaygroundDropdown);
    });

    const playgroundDropdown = document.getElementById('playgroundDropdown');
    if (playgroundDropdown) {
      playgroundDropdown.addEventListener('valueChange', e => {
        const output = document.getElementById('playgroundValue');
        if (output) {
          const selected = e.detail.selectedOptions.map(o => o.label).join(', ');
          output.innerHTML = selected ? `<strong>Selected:</strong> ${selected}<br><strong>Value:</strong> ${e.detail.value}` : 'No selection';
        }
        updateDropdownCode();
      });
    }

    updatePlaygroundDropdown();
  }, 100);
};

window.showDropdownAppearances = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">Dropdown Appearances</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Toggle between standard dropdown and button-style variants.</p>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Default Appearance</h4>
          <ui-dropdown id="defaultAppDropdown" appearance="dropdown" placeholder="Standard Dropdown"></ui-dropdown>
          <p style="margin-top: 12px; font-size: 12px; color: var(--text-muted, #9ca3af);">Has a traditional dropdown arrow and border.</p>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Button Appearance</h4>
          <ui-dropdown id="buttonAppDropdown" appearance="button" placeholder="Action Menu"></ui-dropdown>
          <p style="margin-top: 12px; font-size: 12px; color: var(--text-muted, #9ca3af);">No arrow by default, looks like a standard action button.</p>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase; letter-spacing: 0.05em;">Toggle Variant (Compact)</h4>
          <div style="display: flex; align-items: center; gap: 20px;">
            <ui-dropdown id="toggleVarDropdown" variant="toggle" placeholder="Select" icon-library="lucide"></ui-dropdown>
            <span style="font-size: 12px; color:var(--text-secondary,#64748b); background: var(--bg-tertiary, #f1f5f9); padding: 4px 8px; border-radius: 4px;">In-line Toggle</span>
          </div>
          <p style="margin-top: 12px; font-size: 12px; color: var(--text-muted, #9ca3af);">Padding-less variant for dense toolbars and minimal UI blocks.</p>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const options = [
      { value: 'view', label: 'View Details', icon: '👁️' },
      { value: 'edit', label: 'Edit record', icon: '✏️' },
      { value: 'delete', label: 'Delete permanently', icon: '🗑️' },
    ];

    ['defaultAppDropdown', 'buttonAppDropdown', 'customArrowDropdown', 'toggleVarDropdown'].forEach(id => {
      const dropdown = document.getElementById(id);
      if (dropdown) {
        if (id === 'toggleVarDropdown') {
          dropdown.options = [
            { value: '1', label: 'Option 1', icon: 'zap' },
            { value: '2', label: 'Option 2', icon: 'star' },
          ];
        } else {
          dropdown.options = options;
        }
      }
    });
  }, 100);
};

window.showDropdownEvents = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">📡 Event Monitoring</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Track value changes and lifecycle events in real-time.</p>
        </div>
        <ui-button id="btnClearLog" variant="outline" color="neutral" label="Clear Log" size="md"ui-button>
      </div>
      
      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px;">
        <div>
          <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05); margin-bottom: 20px;">
            <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase;">Standard Events</h4>
            <ui-dropdown id="eventDropdown" placeholder="Interact with me" clearable="true"></ui-dropdown>
          </div>
          
          <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
            <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase;">Multi-select Events</h4>
            <ui-dropdown id="eventMultiDropdown" multi-select show-select-all placeholder="Select multiple"></ui-dropdown>
          </div>
        </div>

        <div style="background: #1e293b; color: #e2e8f0; padding: 20px; border-radius: 12px; font-family: 'JetBrains Mono', 'Fira Code', monospace; font-size: 12px; height: 400px; display: flex; flex-direction: column;">
          <div style="display: flex; justify-content: space-between; align-items: center; border-bottom: 1px solid rgba(255,255,255,0.1); padding-bottom: 10px; margin-bottom: 10px;">
            <span style="color:var(--text-secondary,#64748b); font-weight: 600;">EVENT_LOG</span>
            <span style="color: #4ade80;">READY</span>
          </div>
          <div id="eventLogContainer" style="overflow-y: auto; flex: 1; display: flex; flex-direction: column-reverse; gap: 8px;">
            <div style="color:var(--text-secondary,#64748b);">> Waiting for interaction...</div>
          </div>
        </div>
      </div>
    </div>
  `;

  window.clearEventLog = () => {
    document.getElementById('eventLogContainer').innerHTML = '<div style="color:var(--text-secondary,#64748b);">> Log cleared.</div>';
  };

  const addLog = (type, detail) => {
    const log = document.getElementById('eventLogContainer');
    if (!log) return;
    const entry = document.createElement('div');
    const time = new Date().toLocaleTimeString();
    entry.innerHTML = `<span style="color:var(--text-secondary,#64748b);">[${time}]</span> <span style="color: #10b981;">${type}</span>: ${JSON.stringify(detail)}`;
    log.prepend(entry);
  };

  setTimeout(() => {
    const options = [
      { value: 'a', label: 'Option Alpha', icon: '🅰️' },
      { value: 'b', label: 'Option Beta', icon: '🅱️' },
      { value: 'g', label: 'Option Gamma', icon: 'Γ' },
    ];

    ['eventDropdown', 'eventMultiDropdown'].forEach(id => {
      const el = document.getElementById(id);
      if (!el) return;
      el.options = options;
      el.addEventListener('valueChange', e => addLog('valueChange', e.detail));
      el.addEventListener('dropdownOpen', () => addLog('dropdownOpen', { state: 'open' }));
      el.addEventListener('dropdownClose', () => addLog('dropdownClose', { state: 'closed' }));
    });

    document.getElementById('btnClearLog')?.addEventListener('click', () => {
      document.getElementById('eventLogContainer').innerHTML = '<div style="color:var(--text-secondary,#64748b);">> Log cleared.</div>';
    });
  }, 100);
};
window.showRichItemDropdown = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">💎 Rich Dropdown Items</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Enhance items with subtitles, descriptions, right-side tags, and secondary icons.</p>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 30px;">
        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase;">Subtitles & Tags</h4>
          <ui-dropdown id="richTagsDropdown" placeholder="Select project status"></ui-dropdown>
          <p style="margin-top: 12px; font-size: 12px; color: var(--text-muted, #9ca3af);">Items with <code>subtitle</code> and <code>rightTag</code>.</p>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase;">Tick Mark Indicators</h4>
          <ui-dropdown id="tickMarkDropdown" placeholder="Select an option" value="v1"></ui-dropdown>
          <p style="margin-top: 12px; font-size: 12px; color: var(--text-muted, #9ca3af);">Automatic <code>checkmark</code> indicator for the selected item.</p>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 16px 0; font-size: 14px; color: var(--text-muted, #6b7280); text-transform: uppercase;">Complex Composition</h4>
          <ui-dropdown id="complexRichDropdown" placeholder="Settings menu" icon-library="lucide"></ui-dropdown>
          <p style="margin-top: 12px; font-size: 12px; color: var(--text-muted, #9ca3af);">Combining icons, labels, subtitles, and tags.</p>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const richTagsDropdown = document.getElementById('richTagsDropdown');
    if (richTagsDropdown) {
      richTagsDropdown.options = [
        { value: 'p1', label: 'Website Redesign', subtitle: 'Digital Team', rightTag: 'High Priority', rightTagColor: 'danger' },
        { value: 'p2', label: 'Mobile App API', subtitle: 'Backend Team', rightTag: 'In Progress', rightTagColor: 'warning' },
        { value: 'p3', label: 'Cloud Infrastructure', subtitle: 'DevOps', rightTag: 'Stable', rightTagColor: 'success' },
        { value: 'p4', label: 'Internal Dashboard', subtitle: 'Internal Tools', rightTag: 'Planning', rightTagColor: 'info' },
      ];
    }

    const tickMarkDropdown = document.getElementById('tickMarkDropdown');
    if (tickMarkDropdown) {
      tickMarkDropdown.options = [
        { value: 'v1', label: 'Dark Mode', subtitle: 'Save battery on OLED screens' },
        { value: 'v2', label: 'Light Mode', subtitle: 'Best for bright environments' },
        { value: 'v3', label: 'System Default', subtitle: 'Follow OS settings' },
      ];
    }

    const complexRichDropdown = document.getElementById('complexRichDropdown');
    if (complexRichDropdown) {
      complexRichDropdown.options = [
        { value: 'v1', label: 'System Update', subtitle: 'Version 2.4.0', icon: 'refresh-cw', rightTag: 'Available', rightTagColor: 'success' },
        { value: 'v2', label: 'Security Patch', subtitle: 'Critical fix', icon: 'shield-check', rightTag: 'Required', rightTagColor: 'danger' },
        { value: 'v3', label: 'New Feature', subtitle: 'Beta testing', icon: 'zap', rightTag: 'Coming Soon', rightTagColor: 'info' },
      ];
    }
  }, 100);
};

window.showEnterpriseDropdowns = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block reveal-slide-up">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">🏢 Enterprise Master Gallery</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">High-fidelity substrates for complex data entry and atmospheric interfaces.</p>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 32px;">
        <!-- Multi-Select Chips -->
        <div style="background: var(--bg-primary, #ffffff); padding: 28px; border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0); box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary, var(--text-primary, #1e293b)); font-weight: 700;">Sensory Chip Substrate</h4>
          <p style="font-size: 13px; color: var(--text-muted, #64748b); margin-bottom: 20px;">Selected items rendered as removable tactical chips.</p>
          <ui-dropdown id="entChipDropdown" multi-select show-select-all chip-view placeholder="Select team members" full-width="true"></ui-dropdown>
        </div>

        <!-- Glassmorphism -->
        <div style="background: linear-gradient(135deg, #0f172a 0%, var(--text-primary, #1e293b) 100%); padding: 28px; border-radius: 20px; box-shadow: 0 10px 30px rgba(0,0,0,0.2);">
          <h4 style="margin: 0 0 8px 0; color: white; font-weight: 700;">Atmospheric Glass Variant</h4>
          <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 20px;">Cinema-grade backdrop filter with 180% saturation.</p>
          <ui-dropdown id="entGlassDropdown" variant="glass" placeholder="Select global region" full-width="true" icon-library="lucide"></ui-dropdown>
        </div>

        <!-- Smart Groups & Select All -->
        <div style="background: var(--bg-primary, #ffffff); padding: 28px; border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0); box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary, var(--text-primary, #1e293b)); font-weight: 700;">Bulk Lifecycle Control</h4>
          <p style="font-size: 13px; color: var(--text-muted, #64748b); margin-bottom: 20px;">Categorized hierarchical headers with bulk "Select All" and "Clear All" logic.</p>
          <ui-dropdown id="entGroupDropdown" multi-select show-select-all="true" placeholder="Manage system permissions" full-width="true"></ui-dropdown>
        </div>

        <!-- Skeleton & States -->
        <div style="background: var(--bg-primary, #ffffff); padding: 28px; border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0); box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary, var(--text-primary, #1e293b)); font-weight: 700;">Loading States & Shimmers</h4>
          <p style="font-size: 13px; color: var(--text-muted, #64748b); margin-bottom: 20px;">From shimmering skeletons to active async spinners.</p>
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <ui-dropdown id="entSkeletonDropdown" skeleton full-width="true"></ui-dropdown>
            <ui-dropdown id="entLoadingDropdown" loading placeholder="Syncing with cloud..." full-width="true"></ui-dropdown>
          </div>
        </div>

        <!-- No Data Slot Mastery -->
        <div style="background: var(--bg-primary, #ffffff); padding: 28px; border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0); box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary, var(--text-primary, #1e293b)); font-weight: 700;">Zero-Data Slot Mastery</h4>
          <p style="font-size: 13px; color: var(--text-muted, #64748b); margin-bottom: 20px;">Custom atmospheric slots for empty hierarchical states.</p>
          <ui-dropdown id="entEmptyDropdown" full-width="true" placeholder="No resources available">
            <div slot="empty-state" style="padding: 20px; text-align: center;">
              <div style="font-size: 24px; margin-bottom: 8px;">📭</div>
              <div style="font-weight: 600; color: var(--text-primary, var(--text-primary, #1e293b));">Vault is Empty</div>
              <div style="font-size: 11px; color:var(--text-secondary,#64748b);">Initialize the system to see resources.</div>
            </div>
          </ui-dropdown>
        </div>

        <!-- Separators & Custom Color -->
        <div style="background: var(--bg-primary, #ffffff); padding: 28px; border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0); box-shadow: 0 4px 20px rgba(0,0,0,0.03);">
          <h4 style="margin: 0 0 8px 0; color: var(--text-primary, var(--text-primary, #1e293b)); font-weight: 700;">Visual Signatures</h4>
          <p style="font-size: 13px; color: var(--text-muted, #64748b); margin-bottom: 20px;">Geometric separators and custom chromatic typography.</p>
          <ui-dropdown id="entVisualsDropdown" text-color="#2563eb" full-width="true" placeholder="Custom visual style"></ui-dropdown>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    // Chip Dropdown
    const chipDr = document.getElementById('entChipDropdown');
    if (chipDr) {
      chipDr.options = [
        { value: 'jd', label: 'John Doe', description: 'Lead Architect', icon: 'person' },
        { value: 'as', label: 'Alice Smith', description: 'UX Designer', icon: 'color-palette' },
        { value: 'rj', label: 'Robert Johnson', description: 'DevOps', icon: 'server' },
        { value: 'em', label: 'Emma Wilson', description: 'Frontend', icon: 'code-working' },
      ];
      chipDr.value = 'jd,as';
    }

    // Glass Dropdown
    const glassDr = document.getElementById('entGlassDropdown');
    if (glassDr) {
      glassDr.options = [
        { value: 'na', label: 'North America', icon: 'globe' },
        { value: 'eu', label: 'Europe', icon: 'map' },
        { value: 'as', label: 'Asia Pacific', icon: 'compass' },
      ];
    }

    // Invalid/Loading
    const invalidDr = document.getElementById('entInvalidDropdown');
    if (invalidDr) {
      invalidDr.options = [
        { value: 'p1', label: 'Priority Level 1' },
        { value: 'p2', label: 'Priority Level 2' },
      ];
    }

    // Groups Dropdown
    const groupDr = document.getElementById('entGroupDropdown');
    if (groupDr) {
      groupDr.options = [
        { value: 'view_u', label: 'View Users', group: 'User Management' },
        { value: 'edit_u', label: 'Edit Users', group: 'User Management' },
        { value: 'view_r', label: 'View Roles', group: 'Role Management' },
        { value: 'edit_r', label: 'Edit Roles', group: 'Role Management' },
        { value: 'view_s', label: 'View Settings', group: 'System' },
      ];
    }

    // Visuals Dropdown
    const visualDr = document.getElementById('entVisualsDropdown');
    if (visualDr) {
      visualDr.options = [
        { value: 'u1', label: 'Admin Panel', icon: 'settings' },
        { value: 'u2', label: 'User Dashboard', icon: 'apps' },
        { isSeparator: true },
        { value: 'u3', label: 'Logout', icon: 'log-out', rightTag: 'End Session', rightTagColor: 'danger' },
      ];
    }
  }, 100);
};

window.showDropdownComposition = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block reveal-slide-up">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">🧩 Component Composition</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Combining diverse substrates into cohesive functional blocks.</p>
        </div>
      </div>
      
      <div style="background: var(--bg-primary, #ffffff); padding: 32px; border-radius: 20px; border: 1px solid var(--border-default, #e2e8f0);">
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
          <div>
            <h4 style="margin: 0 0 16px 0;">Recursive Hierarchy</h4>
            <ui-dropdown id="compCascade" cascading expand-all full-width="true" placeholder="Explore file system"></ui-dropdown>
          </div>
          <div>
            <h4 style="margin: 0 0 16px 0;">Rich Metadata Selection</h4>
            <ui-dropdown id="compMulti" multi-select show-select-all chip-view full-width="true" placeholder="Assign stakeholders" icon-library="lucide"></ui-dropdown>
          </div>
        </div>
        
        <div style="margin-top: 40px; padding-top: 30px; border-top: 1px dashed var(--border-default, #e2e8f0);">
          <h4 style="margin: 0 0 16px 0;">Advanced Slot Interjection</h4>
          <ui-dropdown id="compEmpty" full-width="true" placeholder="No connected devices">
            <div slot="empty-state" style="padding: 30px; border-radius: 12px; background: var(--bg-secondary, #f8fafc); border: 2px dashed #cbd5e1; text-align: center;">
              <ui-icon name="cloud-offline" library="lucide" size="32px" color="#94a3b8" style="margin-bottom: 12px;"></ui-icon>
              <div style="font-weight: 600; color: #475569;">System Offline</div>
              <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin: 4px 0 0 0;">Check your gateway connection to synchronize resources.</p>
            </div>
          </ui-dropdown>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const compCascade = document.getElementById('compCascade');
    if (compCascade) {
      compCascade.options = [
        {
          value: 'src',
          label: 'src',
          children: [
            {
              value: 'comp',
              label: 'components',
              children: [
                { value: 'dr', label: 'dropdown.tsx' },
                { value: 'bt', label: 'button.tsx' },
              ],
            },
            { value: 'utils', label: 'utils.ts' },
          ],
        },
        { value: 'pkg', label: 'package.json' },
      ];
    }

    const compMulti = document.getElementById('compMulti');
    if (compMulti) {
      compMulti.options = [
        { value: 'pm', label: 'Project Manager', description: 'Internal', icon: 'user' },
        { value: 'cl', label: 'Client Partner', description: 'External', icon: 'globe' },
        { value: 'st', label: 'Stakeholder', description: 'Executive', icon: 'shield' },
      ];
    }
  }, 100);
};

window.showApexRichDropdown = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block reveal-slide-up">
      <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
        <div>
          <h3 style="margin: 0;">👑 Apex Rich Metadata Substrate</h3>
          <p style="color: var(--text-muted, #6b7280); font-size: 14px; margin: 4px 0 0 0;">Experience the ultimate dropdown variant with complex hierarchy, multi-line metadata, and tactical tags.</p>
        </div>
      </div>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 32px;">
        <!-- Single Select Detailed -->
        <div style="background: var(--bg-primary, #ffffff); padding: 28px; border-radius: 24px; border: 1px solid var(--border-default, #e2e8f0); box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
          <h4 style="margin: 0 0 16px 0; color: var(--text-primary, #1e293b); font-size: 16px; font-weight: 700;">Location Hub (Single)</h4>
          <ui-dropdown id="apexSingleDropdown" variant="detailed" placeholder="Choose office location" search-placeholder="Search country, state, city, postal code..." searchable="true" full-width="true" icon-library="lucide"></ui-dropdown>
          <div id="apexSingleOutput" style="margin-top: 20px; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 12px; font-size: 13px; border: 1px solid var(--border-default, #e2e8f0);">
            Waiting for selection...
          </div>
        </div>

        <!-- Multi Select Detailed -->
        <div style="background: var(--bg-primary, #ffffff); padding: 28px; border-radius: 24px; border: 1px solid var(--border-default, #e2e8f0); box-shadow: 0 10px 30px rgba(0,0,0,0.04);">
          <h4 style="margin: 0 0 16px 0; color: var(--text-primary, #1e293b); font-size: 16px; font-weight: 700;">Resource Manager (Multi)</h4>
          <ui-dropdown id="apexMultiDropdown" variant="detailed" multi-select="true" show-select-all chip-view="true" placeholder="Assign resources..." searchable="true" full-width="true" icon-library="lucide"></ui-dropdown>
          <div id="apexMultiOutput" style="margin-top: 20px; padding: 16px; background: var(--bg-secondary, #f8fafc); border-radius: 12px; font-size: 13px; border: 1px solid var(--border-default, #e2e8f0);">
            No resources assigned
          </div>
        </div>
      </div>
    </div>

    <style>
      @keyframes pulse {
        0% { transform: scale(1); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0.4); }
        70% { transform: scale(1.05); box-shadow: 0 0 0 10px rgba(244, 63, 94, 0); }
        100% { transform: scale(1); box-shadow: 0 0 0 0 rgba(244, 63, 94, 0); }
      }
    </style>
  `;

  setTimeout(() => {
    const single = document.getElementById('apexSingleDropdown');
    if (single) {
      single.options = [
        { value: 'us', label: 'United States', subtitle: 'US', rightTag: 'COUNTRY', rightIcon: 'star' },
        { value: 'ca', label: 'United States / California', subtitle: 'CA', rightTag: 'STATE', rightIcon: 'star' },
        { value: 'sfo', label: 'United States / California / San Francisco', subtitle: 'SFO', rightTag: 'CITY', rightIcon: 'star' },
        { value: 'lax', label: 'United States / California / Los Angeles', subtitle: 'LAX', rightTag: 'CITY', rightIcon: 'star' },
        { value: 'sd', label: 'United States / California / San Diego', subtitle: 'SAN', rightTag: 'CITY', rightIcon: 'star' },
      ];
      single.addEventListener('valueChange', e => {
        const out = document.getElementById('apexSingleOutput');
        if (out) out.innerHTML = `<strong>Selected:</strong> ${e.detail.selectedOptions[0]?.label || 'None'}`;
      });
    }

    const multi = document.getElementById('apexMultiDropdown');
    if (multi) {
      multi.options = [
        { value: 'u1', label: 'Cloud Gateway Alpha', subtitle: 'ID: 8829-1', icon: 'server', rightTag: 'ACTIVE', rightTagColor: 'success', rightIcon: 'activity' },
        { value: 'u2', label: 'Data Store Prime', subtitle: 'ID: 9931-2', icon: 'database', rightTag: 'LOCKED', rightTagColor: 'danger', rightIcon: 'lock' },
        { value: 'u3', label: 'Neural Mesh', subtitle: 'ID: 4420-X', icon: 'cpu', rightTag: 'SYNCING', rightTagColor: 'warning', rightIcon: 'refresh-cw' },
        { value: 'u4', label: 'Edge Node 04', subtitle: 'ID: 1102-B', icon: 'wifi', rightTag: 'STABLE', rightTagColor: 'info', rightIcon: 'check' },
      ];
      multi.addEventListener('valueChange', e => {
        const out = document.getElementById('apexMultiOutput');
        if (out) {
          const names = e.detail.selectedOptions.map(o => o.label).join(', ');
          out.innerHTML = names ? `<strong>Assigned:</strong> ${names}` : 'No resources assigned';
        }
      });
    }
  }, 100);
};

window.showMarkerStyling = function () {
  const container = document.getElementById('dropdownDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>🎨 Marker Customization</h3>
      <p style="color: #6b7280; margin-bottom: 24px;">Control how selected items are visually indicated using markers or just color shades.</p>
      
      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: var(--text-primary, var(--text-primary, #1e293b));">Icon-less Selection</h4>
          <p style="color: var(--text-muted, #6b7280); font-size: 13px; margin-bottom: 16px;">Selection indicated only by color shade (<code>show-selected-marker="false"</code>).</p>
          <ui-dropdown id="noMarkerDropdown" show-selected-marker="false" placeholder="Select a city"></ui-dropdown>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: var(--text-primary, var(--text-primary, #1e293b));">Custom Marker Icon</h4>
          <p style="color: var(--text-muted, #6b7280); font-size: 13px; margin-bottom: 16px;">Using a custom circle icon instead of the default tick.</p>
          <ui-dropdown id="customMarkerDropdown" selected-marker-icon="circle" icon-library="lucide" placeholder="Select Priority"></ui-dropdown>
        </div>

        <div style="background: var(--bg-primary, #ffffff); padding: 24px; border-radius: 12px; border: 1px solid var(--border-default, #e5e7eb); box-shadow: 0 1px 3px rgba(0,0,0,0.05);">
          <h4 style="margin: 0 0 8px 0; font-size: 14px; color: var(--text-primary, var(--text-primary, #1e293b));">Star Indicator</h4>
          <p style="color: var(--text-muted, #6b7280); font-size: 13px; margin-bottom: 16px;">Premium look with a star selection marker.</p>
          <ui-dropdown id="starMarkerDropdown" selected-marker-icon="star" icon-library="lucide" placeholder="Highlight item"></ui-dropdown>
        </div>
      </div>
      
      <div style="margin-top: 30px; padding: 16px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 12px; border: 1px solid #bbf7d0;">
        <p style="margin: 0; color: var(--accent-green,#166534); font-size: 14px; line-height: 1.6;">
          💡 <strong>Validation Tip:</strong> Hiding the marker is ideal for compact layouts like <strong>Pagination Action Bars</strong> where space is limited and color shading provides enough context.
        </p>
      </div>
    </div>
  `;

  setTimeout(() => {
    const cities = [
      { value: 'london', label: 'London' },
      { value: 'paris', label: 'Paris' },
      { value: 'tokyo', label: 'Tokyo' },
      { value: 'newyork', label: 'New York' },
    ];
    document.getElementById('noMarkerDropdown').options = cities;

    const priorities = [
      { value: 'low', label: 'Low Priority' },
      { value: 'med', label: 'Medium Priority' },
      { value: 'high', label: 'High Priority' },
    ];
    document.getElementById('customMarkerDropdown').options = priorities;

    const ratings = [
      { value: '1', label: 'Featured Item' },
      { value: '2', label: 'Recent Item' },
      { value: '3', label: 'Archived Item' },
    ];
    document.getElementById('starMarkerDropdown').options = ratings;
  }, 100);
};
