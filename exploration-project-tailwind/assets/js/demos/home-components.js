// Component Library Home Demo Data and Functions

export const componentData = [
  {
    id: 'card',
    icon: '🃏',
    title: 'Card',
    description: 'Versatile container component with multiple variants',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-card',
      props: { width: '100%', variant: 'default' },
      slots: {
        header: '<h4 style="margin: 0; font-size: 14px;">Card Demo</h4>',
        content: '<p style="margin: 0; color: #6b7280; font-size: 12px;">Versatile container</p>',
      },
      controls: [
        { label: 'Default', action: 'updateCardDemo', params: ['default'], class: 'btn-success' },
        { label: 'Elevated', action: 'updateCardDemo', params: ['elevated'], class: 'btn-warning' },
        { label: 'Outlined', action: 'updateCardDemo', params: ['outlined'], class: 'btn-danger' },
      ],
    },
  },
  {
    id: 'chip',
    icon: '🏷️',
    title: 'Chip',
    description: 'Compact elements for tags, filters, and selections',
    featured: false,
    demo: {
      type: 'components',
      components: [
        { component: 'ui-chip', props: { label: 'JavaScript', icon: '🟨', color: 'warning' } },
        { component: 'ui-chip', props: { label: 'React', icon: '⚛️', color: 'info' } },
        { component: 'ui-chip', props: { label: 'TypeScript', icon: '🔷', color: 'primary' } },
      ],
    },
  },
  {
    id: 'badge',
    icon: '🔔',
    title: 'Badge',
    description: 'Small status indicators and notification counters',
    featured: false,
    demo: {
      type: 'components',
      components: [
          component: 'ui-badge',
          props: { value: '5', color: 'danger' },
          children: '<ui-button label="Messages" color="success" size="xs"></ui-button>',
        },
        { component: 'ui-badge', props: { dot: 'true', color: 'success' }, children: '<ui-avatar content="JD" size="36px"></ui-avatar>' },
      ],
    },
  },
  {
    id: 'tag',
    icon: '🏷',
    title: 'Tag',
    description: 'Label components with different styles and variants',
    featured: false,
    demo: {
      type: 'components',
      components: [
        { component: 'ui-tag', props: { label: 'New', color: 'success', variant: 'filled' } },
        { component: 'ui-tag', props: { label: 'Popular', color: 'warning', variant: 'outlined' } },
        { component: 'ui-tag', props: { label: 'Trending', color: 'info', variant: 'light' } },
      ],
    },
  },
  {
    id: 'rating',
    icon: '⭐',
    title: 'Rating',
    description: 'Star and emoji-based rating components',
    featured: false,
    demo: {
      type: 'components',
      components: [
        { component: 'ui-rating', props: { type: 'star', value: '4', size: 'sm' } },
        { component: 'ui-rating', props: { type: 'smiley', value: '3', size: 'sm' } },
      ],
    },
  },
  {
    id: 'avatar',
    icon: '👤',
    title: 'Avatar',
    description: 'User profile pictures and initials',
    featured: false,
    demo: {
      type: 'components',
      components: [
        { component: 'ui-avatar', props: { 'content': 'AB', 'size': '36px', 'bg-color': '#10b981' } },
        { component: 'ui-avatar', props: { 'content': 'CD', 'size': '40px', 'bg-color': '#10b981' } },
        { component: 'ui-avatar', props: { 'content': 'EF', 'size': '44px', 'bg-color': '#f59e0b' } },
      ],
    },
  },
  {
    id: 'avatar-group',
    icon: '👥',
    title: 'Avatar Group',
    description: 'Multiple avatars displayed as a group',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-avatar-group',
      props: { id: 'homeAvatarGroup', size: '36px' },
    },
  },
  {
    id: 'divider',
    icon: '➖',
    title: 'Divider',
    description: 'Visual separators with optional text',
    featured: false,
    demo: {
      type: 'custom',
      html: `
        <p style="margin: 0 0 8px; color: #1f2937; font-size: 12px;">Content Above</p>
        <ui-divider text="OR"></ui-divider>
        <p style="margin: 8px 0 0; color: #1f2937; font-size: 12px;">Content Below</p>
      `,
      controls: [
        { label: 'Solid', action: 'updateDividerDemo', params: ['solid'], class: 'btn-success' },
        { label: 'Dashed', action: 'updateDividerDemo', params: ['dashed'], class: 'btn-warning' },
        { label: 'Double', action: 'updateDividerDemo', params: ['double-solid'], class: 'btn-danger' },
      ],
    },
  },
  {
    id: 'accordion',
    icon: '📑',
    title: 'Accordion',
    description: 'Collapsible content panels',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-accordion',
      props: { id: 'homeAccordionDemo' },
    },
  },
  {
    id: 'tabs',
    icon: '📑',
    title: 'Tabs',
    description: 'Tabbed navigation interface',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-tabs',
      props: { id: 'homeTabsDemo' },
    },
  },
  {
    id: 'panel',
    icon: '📋',
    title: 'Panel',
    description: 'Collapsible content containers',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-panel',
      props: { header: 'Panel Title', toggleable: 'true', collapsed: 'false' },
      slots: {
        default: '<p style="margin: 0; padding: 12px; color: #6b7280; font-size: 12px;">Collapsible content panel</p>',
      },
    },
  },
  {
    id: 'stepper',
    icon: '📍',
    title: 'Stepper',
    description: 'Step indicators for multi-step processes',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-stepper',
      props: { id: 'homeStepperDemo', size: 'sm', orientation: 'horizontal' },
    },
  },
  {
    id: 'snackbar',
    icon: '🍞',
    title: 'Snackbar',
    description: 'Toast notifications and messages',
    featured: false,
    demo: {
      type: 'button',
      text: 'Show Notification',
      action: 'showHomeSnackbar',
      class: 'btn-success',
    },
  },

  {
    id: 'meter-group',
    icon: '📊',
    title: 'Meter',
    description: 'Progress indicators and data visualization',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-meter-group',
      props: { 'id': 'homeMeterGroup', 'show-legend': 'false' },
    },
  },
  {
    id: 'speed-dial',
    icon: '⚡',
    title: 'Speed Dial',
    description: 'Floating action buttons with expandable actions',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-speed-dial',
      props: { id: 'homeSpeedDial' },
    },
  },
  {
    id: 'speedometer',
    icon: '🎯',
    title: 'Speedometer',
    description: 'Animated gauge for displaying metrics and progress',
    featured: true,
    demo: {
      type: 'component',
      component: 'ui-speedometer',
      props: { 'value': '72', 'max-value': '100', 'unit': '%', 'label': 'Progress', 'size': '180' },
    },
  },
  {
    id: 'scroll-top',
    icon: '⬆️',
    title: 'Scroll Top',
    description: 'Back-to-top navigation button',
    featured: false,
    demo: {
      type: 'custom',
      html: `
        <div id="homeScrollDemo" style="position: relative; height: 100px; overflow-y: auto; border:1px solid var(--border-default,#e5e7eb);">
          <p style="font-size: 11px; margin: 4px 0;">Scroll down to see button...</p>
          <p style="font-size: 11px; margin: 4px 0;">Line 1</p><p style="font-size: 11px; margin: 4px 0;">Line 2</p><p style="font-size: 11px; margin: 4px 0;">Line 3</p>
          <p style="font-size: 11px; margin: 4px 0;">Line 4</p><p style="font-size: 11px; margin: 4px 0;">Line 5</p><p style="font-size: 11px; margin: 4px 0;">Line 6</p>
          <p style="font-size: 11px; margin: 4px 0;">Line 7</p><p style="font-size: 11px; margin: 4px 0;">Line 8</p><p style="font-size: 11px; margin: 4px 0;">Line 9</p>
        </div>
      `,
    },
  },
  {
    id: 'skeleton',
    icon: '💀',
    title: 'Skeleton Loader',
    description: 'Loading placeholders with animation',
    featured: true,
    demo: {
      type: 'custom',
      html: `
        <skeleton-loader width="100%" height="20px" border-radius="4px"></skeleton-loader>
        <skeleton-loader width="80%" height="20px" border-radius="4px" style="margin-top: 12px;"></skeleton-loader>
        <skeleton-loader width="60%" height="20px" border-radius="4px" style="margin-top: 12px;"></skeleton-loader>
      `,
    },
  },
  {
    id: 'dialog',
    icon: '💬',
    title: 'Dialog Box',
    description: 'Modal dialogs with customizable content',
    featured: true,
    demo: {
      type: 'button',
      text: 'Open Dialog',
      action: 'showHomeDialog',
      class: 'btn-primary',
    },
  },
  {
    id: 'cascading-menu',
    icon: '📑',
    title: 'Cascading Menu',
    description: 'Hierarchical menus with nested submenus',
    featured: true,
    demo: {
      type: 'button',
      text: 'Open Cascading Menu',
      action: 'showHomeCascadingMenu',
      class: 'btn-primary',
    },
  },
  {
    id: 'smart-menu',
    icon: '🧠',
    title: 'Smart Menu',
    description: 'Context menu with submenus and smart positioning',
    featured: false,
    demo: {
      type: 'custom',
      html: `
        <div id="smartMenuDemoArea" style="background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); border: 2px dashed rgba(100, 255, 218, 0.3); border-radius: 8px; padding: 30px; min-height: 120px; display: flex; align-items: center; justify-content: center; cursor: context-menu;">
          <p style="color: rgba(255, 255, 255, 0.7); font-size: 12px; text-align: center;">Right-click to open smart menu</p>
        </div>
      `,
    },
  },
  {
    id: 'picklist',
    icon: '📋',
    title: 'Picklist',
    description: 'Dual-list selector with move controls',
    featured: true,
    demo: {
      type: 'component',
      component: 'ui-picklist',
      props: { id: 'homePicklistDemo' },
    },
  },
  {
    id: 'cascade-select',
    icon: '🔽',
    title: 'Cascade Select',
    description: 'Hierarchical dropdown with nested options',
    featured: true,
    demo: {
      type: 'component',
      component: 'ui-cascade-select',
      props: { id: 'homeCascadeDemo', placeholder: 'Select location' },
    },
  },
  {
    id: 'advanced-data-table',
    icon: '📊',
    title: 'Advanced Data Table',
    description: 'Feature-rich table with sorting, filtering, resizing, and grouping',
    featured: true,
    demo: {
      type: 'custom',
      html: '<p style="margin: 0; color: #6b7280;">Interactive table with advanced features</p>',
    },
  },
  {
    id: 'breadcrumb',
    icon: '🍞',
    title: 'Breadcrumb',
    description: 'Navigation breadcrumb component',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-breadcrumb',
      props: { id: 'homeBreadcrumb' },
    },
  },
  {
    id: 'horizontal-nav',
    icon: '↔️',
    title: 'Horizontal Nav',
    description: 'Horizontal navigation menu',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-horizontal-nav',
      props: { id: 'homeHorizontalNav', variant: 'pills' },
    },
  },
  {
    id: 'knob',
    icon: '🎛️',
    title: 'Knob',
    description: 'Circular control for value selection',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-knob',
      props: { 'value': '65', 'show-value': 'true', 'show-label': 'true', 'label': 'Volume', 'size': '100' },
    },
  },
  {
    id: 'range-slider',
    icon: '🎚️',
    title: 'Range Slider',
    description: 'Dual-handle range input control',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-range-slider',
      props: { value: '30-70', min: '0', max: '100' },
    },
  },
  {
    id: 'popover',
    icon: '💭',
    title: 'Popover',
    description: 'Floating content containers',
    featured: false,
    demo: {
      type: 'button',
      text: 'Hover Me',
      action: null,
      class: 'btn-primary',
      attrs: { id: 'homePopoverBtn' },
    },
  },
  {
    id: 'timeline',
    icon: '⏱️',
    title: 'Timeline',
    description: 'Chronological event display',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-timeline',
      props: { id: 'homeTimeline' },
    },
  },
  {
    id: 'pagination',
    icon: '📄',
    title: 'Pagination',
    description: 'Page navigation controls',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-pagination',
      props: { 'total-items': '100', 'page-size': '10', 'current-page': '1' },
    },
  },
  {
    id: 'transfer-list',
    icon: '⇄',
    title: 'Transfer List',
    description: 'Dual-list item transfer component',
    featured: false,
    demo: {
      type: 'custom',
      html: '<p style="margin: 0; color: #6b7280; font-size: 13px;">Dual-list item transfer</p>',
    },
  },
  {
    id: 'tree-list',
    icon: '🌳',
    title: 'Tree List',
    description: 'Hierarchical tree view component',
    featured: false,
    demo: {
      type: 'custom',
      html: '<p style="margin: 0; color: #6b7280; font-size: 13px;">Hierarchical tree view</p>',
    },
  },
  {
    id: 'chart',
    icon: '📈',
    title: 'Chart',
    // Removed: Interactive charts with Chart.js integration
    featured: true,
    demo: {
      type: 'custom',
      html: `
        <div style="padding: 8px;">
          <ui-chart id="homeChartDemo" chart-type="line" style="height: 150px;"></ui-chart>
        </div>
      `,
    },
  },
  {
    id: 'context-menu',
    icon: '📋',
    title: 'Context Menu',
    description: 'Right-click contextual menus',
    featured: false,
    demo: {
      type: 'custom',
      html: `
        <div style="background: #f3f4f6; border: 1px dashed #d1d5db; border-radius: 4px; padding: 20px; text-align: center; cursor: context-menu;">
          <p style="margin: 0; color: #6b7280; font-size: 12px;">Right-click here</p>
        </div>
      `,
    },
  },
  {
    id: 'dock',
    icon: '🚢',
    title: 'Dock',
    description: 'Dockable toolbar with action buttons',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-dock',
      props: { id: 'homeDock', position: 'bottom' },
    },
  },
  {
    id: 'dropdown',
    icon: '📋',
    title: 'Dropdown',
    description: 'Multi-select and cascading dropdown',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-dropdown',
      props: {
        id: 'homeDropdown',
        placeholder: 'Select option',
        options: JSON.stringify([
          { value: 'opt1', label: 'Option 1', icon: '⭐' },
          { value: 'opt2', label: 'Option 2', icon: '🎯' },
          { value: 'opt3', label: 'Option 3', icon: '🚀' },
        ]),
      },
    },
  },
  {
    id: 'nav-bar',
    icon: '🧭',
    title: 'Nav Bar',
    description: 'Top navigation bar component',
    featured: false,
    demo: {
      type: 'custom',
      html: '<p style="margin: 0; color: #6b7280; font-size: 13px;">Top navigation bar</p>',
    },
  },
  {
    id: 'aside-panel',
    icon: '📱',
    title: 'Aside Panel',
    description: 'Side panel for additional content',
    featured: false,
    demo: {
      type: 'button',
      text: 'Open Panel',
      action: 'showHomeAsidePanel',
      class: 'btn-primary',
    },
  },
  {
    id: 'anchor',
    icon: '⚓',
    title: 'Anchor',
    description: 'Page navigation anchors',
    featured: false,
    demo: {
      type: 'component',
      component: 'ui-anchor',
      props: { id: 'homeAnchor' },
    },
  },
  {
    id: 'input',
    icon: '⌨',
    title: 'Input',
    description: 'Modern text field with validation, icons, and prefixes',
    featured: true,
    demo: {
      type: 'component',
      component: 'ui-input',
      props: { placeholder: 'Type here...', variant: 'outlined', color: 'primary' },
    },
  },
  {
    id: 'checkbox',
    icon: '✅',
    title: 'Checkbox',
    description: 'Bouncy, animated checkbox with multiple visual variants',
    featured: true,
    demo: {
      type: 'components',
      components: [
        { component: 'ui-checkbox', props: { label: 'Animated', checked: 'true', color: 'primary' } },
        { component: 'ui-checkbox', props: { label: 'Round', checked: 'true', color: 'success', variant: 'round-color' } },
      ],
    },
  },
  {
    id: 'radio',
    icon: '🔘',
    title: 'Radio',
    description: 'Mutually exclusive selection with group management',
    featured: true,
    demo: {
      type: 'component',
      component: 'ui-radio-group',
      props: { id: 'homeRadioGroup', layout: 'horizontal', value: 'opt1' },
      slots: {
        default: `
          <ui-radio label="Option 1" value="opt1"></ui-radio>
          <ui-radio label="Option 2" value="opt2" style="margin-left: 12px;"></ui-radio>
        `,
      },
    },
  },
  {
    id: 'theme-selector',
    icon: '🎨',
    title: 'Theme Selector',
    description: 'Switch between light and dark themes',
    featured: false,
    demo: {
      type: 'custom',
      html: `
        <div style="display: flex; gap: 8px; align-items: center;">
          <ui-button label="Light" size="xs" variant="outline" onclick="document.body.setAttribute('theme', 'light')"></ui-button>
          <ui-button label="Dark" size="xs" variant="outline" onclick="document.body.setAttribute('theme', 'dark')"></ui-button>
        </div>
      `,
    },
  },
];

// Generate HTML for component cards
export function generateHomeSection() {
  const homeContainer = document.getElementById('home');
  if (!homeContainer) return;

  const grid = document.createElement('div');
  grid.className = 'home-grid';

  componentData.forEach(component => {
    const card = document.createElement('div');
    card.className = `component-card ${component.featured ? 'featured' : ''}`;

    const header = document.createElement('div');
    header.className = `component-header ${component.featured ? 'featured' : ''}`;

    const icon = document.createElement('span');
    icon.className = 'component-icon';
    icon.textContent = component.icon;

    const title = document.createElement('h3');
    title.className = `component-title ${component.featured ? 'featured' : ''}`;
    title.textContent = component.title;

    const viewBtn = document.createElement('ui-button');
    viewBtn.setAttribute('label', 'View \u2192');
    viewBtn.setAttribute('variant', 'ghost');
    viewBtn.setAttribute('size', 'xs');
    viewBtn.onclick = () => window.showSection(component.id);

    header.appendChild(icon);
    header.appendChild(title);
    header.appendChild(viewBtn);

    const description = document.createElement('p');
    description.className = `component-description ${component.featured ? 'featured' : ''}`;
    description.textContent = component.description;

    const preview = document.createElement('div');
    preview.className = `demo-preview ${component.featured ? 'featured' : ''}`;

    // Generate demo content based on type
    switch (component.demo.type) {
      case 'component':
        const comp = document.createElement(component.demo.component);
        Object.entries(component.demo.props || {}).forEach(([key, value]) => {
          comp.setAttribute(key, value);
        });
        if (component.demo.slots) {
          Object.entries(component.demo.slots).forEach(([slotName, content]) => {
            const slot = document.createElement('div');
            slot.setAttribute('slot', slotName);
            slot.innerHTML = content;
            comp.appendChild(slot);
          });
        }
        preview.appendChild(comp);
        break;

      case 'components':
        component.demo.components.forEach(compData => {
          const comp = document.createElement(compData.component);
          Object.entries(compData.props || {}).forEach(([key, value]) => {
            comp.setAttribute(key, value);
          });
          if (compData.children) {
            comp.innerHTML = compData.children;
          }
          preview.appendChild(comp);
        });
        break;

      case 'button':
        const btn = document.createElement('ui-button');
        btn.setAttribute('label', component.demo.text);
        
        const btnClass = component.demo.class || 'btn-primary';
        if (btnClass.includes('success')) btn.setAttribute('color', 'success');
        else if (btnClass.includes('warning')) btn.setAttribute('color', 'warning');
        else if (btnClass.includes('danger')) btn.setAttribute('color', 'error');
        else btn.setAttribute('color', 'primary');
        
        btn.setAttribute('variant', btnClass.includes('outline') ? 'outline' : 'solid');
        btn.setAttribute('size', 'small');

        if (component.demo.action) {
          btn.onclick = () => window[component.demo.action]();
        }
        if (component.demo.attrs) {
          Object.entries(component.demo.attrs).forEach(([key, value]) => {
            btn.setAttribute(key, value);
          });
        }
        preview.appendChild(btn);
        break;

      case 'custom':
        preview.innerHTML = component.demo.html;
        break;
    }

    // Add controls if they exist
    if (component.demo.controls) {
      const controls = document.createElement('div');
      controls.className = 'flex gap-2 mt-4';
      component.demo.controls.forEach(control => {
        const ctrlBtn = document.createElement('ui-button');
        ctrlBtn.setAttribute('label', control.label);
        
        const ctrlClass = control.class;
        if (ctrlClass.includes('success')) ctrlBtn.setAttribute('color', 'success');
        else if (ctrlClass.includes('warning')) ctrlBtn.setAttribute('color', 'warning');
        else if (ctrlClass.includes('danger')) ctrlBtn.setAttribute('color', 'error');
        else ctrlBtn.setAttribute('color', 'primary');
        
        ctrlBtn.setAttribute('variant', ctrlClass.includes('outline') ? 'outline' : 'solid');
        ctrlBtn.setAttribute('size', 'xs');

        ctrlBtn.onclick = () => window[control.action](...control.params);
        controls.appendChild(ctrlBtn);
      });
      preview.appendChild(controls);
    }

    card.appendChild(header);
    if (component.featured) {
      card.appendChild(description);
    }
    card.appendChild(preview);

    grid.appendChild(card);
  });

  // Replace the existing content
  const existingGrid = homeContainer.querySelector('.home-grid');
  if (existingGrid) {
    existingGrid.replaceWith(grid);
  } else {
    homeContainer.appendChild(grid);
  }
}
