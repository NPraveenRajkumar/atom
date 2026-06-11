// Home Demo Initialization
export function initHomeDemo() {
  // Initialize accordion demo
  setTimeout(() => {
    const homeAccordion = document.getElementById('homeAccordionDemo');
    if (homeAccordion) {
      homeAccordion.items = JSON.stringify([
        {
          id: 'design',
          title: '🎨 Design System',
          content: 'A comprehensive set of design tokens and components for building consistent UIs.',
          icon: '🎨',
        },
        {
          id: 'performance',
          title: '⚡ Performance',
          content: 'Optimized for speed with lazy loading, tree shaking, and efficient rendering.',
          icon: '⚡',
        },
      ]);
      homeAccordion.defaultOpen = JSON.stringify(['design']);
    }
  }, 100);

  // Initialize Onboarding Accordion (Card List)
  setTimeout(() => {
    const onboardingAcc = document.getElementById('homeOnboardingAccordion');
    if (onboardingAcc) {
      onboardingAcc.items = JSON.stringify([
        {
          id: 'guide1',
          title: 'Getting Started',
          subtitle: 'Design philosophy and core concepts',
          content: 'Learn how to integrate our Stencil-based components into your workflow. We support React, Angular, Vue, and Vanilla JS out of the box.',
          icon: 'rocket',
          iconLibrary: 'lucide',
        },
        {
          id: 'guide2',
          title: 'Installation',
          subtitle: 'Step-by-step setup and dependencies',
          content: 'Install via NPM or use our CDN for quick prototyping. This component library is highly optimized for bundles with dead-code elimination.',
          icon: 'download',
          iconLibrary: 'lucide',
        },
        {
          id: 'guide3',
          title: 'Usage Guide',
          subtitle: 'Principles for implementing components',
          content: 'Our API is consistent and intuitive. Every component follows standard accessibility rules (ARIA) and supports RTS/LTR.',
          icon: 'terminal',
          iconLibrary: 'lucide',
        },
      ]);
      onboardingAcc.defaultOpen = JSON.stringify(['guide1']);
    }
  }, 100);

  // Initialize meter group demo
  setTimeout(() => {
    const homeMeter = document.getElementById('homeMeterGroup');
    if (homeMeter) {
      homeMeter.values = [
        { label: 'Used', value: 65, color: '#ef4444' },
        { label: 'Free', value: 35, color: '#10b981' },
      ];
    }
  }, 100);

  // Initialize scroll top demo
  setTimeout(() => {
    const homeScrollBox = document.getElementById('homeScrollDemo');
    if (homeScrollBox && !homeScrollBox.querySelector('ui-scroll-top')) {
      const btn = document.createElement('ui-scroll-top');
      btn.setAttribute('threshold', '50');
      btn.setAttribute('size', 'sm');
      btn.setAttribute('target', '#homeScrollDemo');
      homeScrollBox.appendChild(btn);
    }
  }, 200);

  // Initialize tabs demo
  setTimeout(() => {
    const tabsDemo = document.getElementById('homeTabsDemo');
    if (tabsDemo) {
      tabsDemo.items = [
        { id: 'tab1', title: 'Overview', icon: '📄', content: '<div style="padding: 20px;"><p>Overview content goes here</p></div>', closeable: false },
        { id: 'tab2', title: 'Details', icon: '📋', content: '<div style="padding: 20px;"><p>Details content goes here</p></div>', closeable: true },
        { id: 'tab3', title: 'Settings', icon: '⚙️', content: '<div style="padding: 20px;"><p>Settings content goes here</p></div>', closeable: true },
      ];
      tabsDemo.defaultActive = 'tab1';
    }
  }, 150);

  // Initialize stepper demo
  setTimeout(() => {
    const stepperDemo = document.getElementById('homeStepperDemo');
    if (stepperDemo) {
      stepperDemo.steps = [
        { id: 'step1', label: 'Start', status: 'completed' },
        { id: 'step2', label: 'Process', status: 'active' },
        { id: 'step3', label: 'Review', status: 'waiting' },
        { id: 'step4', label: 'Finish', status: 'waiting' },
      ];
      stepperDemo.activeStep = 1;
    }
  }, 150);

  // Initialize speed dial demo
  setTimeout(() => {
    const speedDial = document.getElementById('homeSpeedDial');
    if (speedDial) {
      speedDial.items = [
        { icon: '➕', label: 'Add', action: 'add' },
        { icon: '✏️', label: 'Edit', action: 'edit' },
        { icon: '🗑️', label: 'Delete', action: 'delete' },
      ];
    }
  }, 150);

  // Initialize picklist demo
  setTimeout(() => {
    const picklist = document.getElementById('homePicklistDemo');
    if (picklist) {
      picklist.sourceItems = [
        { id: 1, label: 'Item 1' },
        { id: 2, label: 'Item 2' },
        { id: 3, label: 'Item 3' },
      ];
      picklist.targetItems = [];
    }
  }, 150);

  // Initialize cascade select demo
  setTimeout(() => {
    const cascade = document.getElementById('homeCascadeDemo');
    if (cascade) {
      cascade.options = [
        {
          label: 'USA',
          value: 'usa',
          children: [
            { label: 'New York', value: 'ny' },
            { label: 'California', value: 'ca' },
          ],
        },
        {
          label: 'Canada',
          value: 'canada',
          children: [
            { label: 'Toronto', value: 'toronto' },
            { label: 'Vancouver', value: 'vancouver' },
          ],
        },
      ];
    }
  }, 150);

  // Make demo functions available globally
  window.updateCardDemo = function (type) {
    const container = document.getElementById('homeCardContainer');
    if (!container) return;

    switch (type) {
      case 'default':
        container.innerHTML = `
          <ui-card width="100%" variant="default" style="max-width: 250px;">
            <div slot="header"><h4 style="margin: 0; font-size: 14px;">Default Card</h4></div>
            <div slot="content"><p style="margin: 0; color: #6b7280; font-size: 12px;">Versatile container</p></div>
          </ui-card>`;
        break;
      case 'elevated':
        container.innerHTML = `
          <ui-card width="100%" variant="elevated" style="max-width: 250px;">
            <div slot="header"><h4 style="margin: 0; font-size: 14px;">Elevated Card</h4></div>
            <div slot="content"><p style="margin: 0; color: #6b7280; font-size: 12px;">Enhanced shadow</p></div>
          </ui-card>`;
        break;
      case 'outlined':
        container.innerHTML = `
          <ui-card width="100%" variant="outlined" style="max-width: 250px;">
            <div slot="header"><h4 style="margin: 0; font-size: 14px;">Outlined Card</h4></div>
            <div slot="content"><p style="margin: 0; color: #6b7280; font-size: 12px;">Border only style</p></div>
          </ui-card>`;
        break;
    }
  };

  window.showHomeSnackbar = function () {
    let snackbar = document.getElementById('homeShowcaseSnackbar');
    if (!snackbar) {
      snackbar = document.createElement('ui-snackbar');
      snackbar.id = 'homeShowcaseSnackbar';
      snackbar.setAttribute('card-stack', 'true');
      snackbar.setAttribute('position', 'bottom-right');
      snackbar.setAttribute('max-visible', '5');
      document.body.appendChild(snackbar);
    }

    const types = ['success', 'info', 'warning', 'error'];
    const messages = [
      'Successfully synchronized with cloud storage.',
      'New system update is available for download.',
      'Memory usage is higher than usual.',
      'Connection lost: attempting to reconnect...',
    ];

    const randomIndex = Math.floor(Math.random() * types.length);

    snackbar.addSnackbar({
      message: messages[randomIndex],
      type: types[randomIndex],
      duration: 4000,
    });
  };

  window.showHomeDialog = function () {
    const dialog = document.createElement('ui-dialog-box');
    dialog.setAttribute('width', '400px');
    dialog.setAttribute('show-close', 'true');
    dialog.innerHTML = `
      <h3 slot="header" style="margin: 0;">Demo Dialog</h3>
      <div slot="body">
        <p style="margin: 0;">This is a demo dialog box. Click outside or the X button to close.</p>
      </div>
      <div slot="footer" style="display: flex; justify-content: flex-end;">
        <ui-button label="Close" variant="outline" color="success" onclick="this.closest('ui-dialog-box').hide()"></ui-button>
      </div>
    `;
    document.body.appendChild(dialog);
    dialog.show();
    dialog.addEventListener('dialogClosed', () => dialog.remove());
  };

  window.showHomeCascadingMenu = function () {
    // Create a temporary cascading menu for the home demo
    const existing = document.getElementById('homeCascadingMenu');
    if (existing) existing.remove();

    const menu = document.createElement('ui-cascading-menu');
    menu.id = 'homeCascadingMenu';
    menu.menuTitle = 'Quick Actions';
    menu.items = [
      {
        id: 'file',
        label: 'File',
        children: [
          { id: 'new', label: 'New Document' },
          { id: 'open', label: 'Open' },
          { id: 'save', label: 'Save' },
        ],
      },
      {
        id: 'edit',
        label: 'Edit',
        children: [
          { id: 'copy', label: 'Copy' },
          { id: 'paste', label: 'Paste' },
          { id: 'undo', label: 'Undo' },
        ],
      },
      {
        id: 'view',
        label: 'View',
        children: [
          { id: 'zoom-in', label: 'Zoom In' },
          { id: 'zoom-out', label: 'Zoom Out' },
        ],
      },
    ];

    document.body.appendChild(menu);

    // Position near the button that was clicked
    setTimeout(() => {
      const button = document.querySelector('ui-button[onclick="showHomeCascadingMenu()"]');
      if (button) {
        const rect = button.getBoundingClientRect();
        menu.open(rect.left, rect.bottom + 5);
      } else {
        menu.open(100, 200);
      }
    }, 10);
  };

  window.updateDividerDemo = function (variant) {
    const container = document.getElementById('homeDividerContainer');
    if (!container) return;

    const variants = {
      'solid': { text: 'OR', label: 'Solid variant' },
      'dashed': { text: 'OR', label: 'Dashed variant' },
      'double-solid': { text: 'OR', label: 'Double lines' },
    };

    const config = variants[variant] || variants['solid'];

    container.innerHTML = `
      <p style="margin: 0 0 8px; color: #1f2937; font-size: 12px;">Content Above</p>
      <Divider variant="${variant}" text="${config.text}"></Divider>
      <p style="margin: 8px 0 0; color: #1f2937; font-size: 12px;">Content Below</p>
      <small style="display: block; margin-top: 6px; color: #9ca3af; font-style: italic; font-size: 10px;">${config.label}</small>
    `;
  };

  // Initialize breadcrumb demo
  setTimeout(() => {
    const breadcrumb = document.getElementById('homeBreadcrumb');
    if (breadcrumb) {
      breadcrumb.items = [
        { label: 'Home', icon: '🏠', href: '#' },
        { label: 'Library', href: '#' },
        { label: 'Components', active: true },
      ];
    }
  }, 150);

  // Initialize horizontal nav demo
  setTimeout(() => {
    const nav = document.getElementById('homeHorizontalNav');
    if (nav) {
      nav.items = [
        { id: 'home', label: 'Home', icon: '🏠', active: true },
        { id: 'products', label: 'Products', icon: '📦', badge: '5' },
        { id: 'about', label: 'About', icon: 'ℹ️' },
      ];
    }
  }, 150);

  // Initialize timeline demo
  setTimeout(() => {
    const timeline = document.getElementById('homeTimeline');
    if (timeline) {
      timeline.items = [
        { id: '1', label: 'Created', description: 'Project started', icon: '✨', status: 'completed' },
        { id: '2', label: 'In Progress', description: 'Development phase', icon: '🔨', status: 'active' },
        { id: '3', label: 'Review', description: 'Coming soon', icon: '👁️', status: 'pending' },
      ];
    }
  }, 150);

  // Initialize popover demo
  setTimeout(() => {
    const popoverBtn = document.getElementById('homePopoverBtn');
    if (popoverBtn && !popoverBtn.parentElement?.tagName?.toLowerCase().includes('popover')) {
      const popover = document.createElement('ui-popover');
      popover.setAttribute('trigger', 'hover');
      popover.setAttribute('placement', 'top');
      popover.setAttribute('content', '<div style="padding: 4px; font-size: 12px;">This is a popover!</div>');
      popover.setAttribute('show-arrow', 'true');

      popoverBtn.parentNode.insertBefore(popover, popoverBtn);
      popover.appendChild(popoverBtn);
    }
  }, 200);

  // Initialize chart demo
  setTimeout(() => {
    const chartDemo = document.getElementById('homeChartDemo');
    if (chartDemo) {
      chartDemo.data = {
        labels: ['Jan', 'Feb', 'Mar', 'Apr'],
        datasets: [{ label: 'Sales', data: [12, 19, 8, 15] }],
      };
      chartDemo.colors = ['#10b981'];
      chartDemo.options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
          legend: { display: false },
          tooltip: { enabled: true },
        },
      };
    }
  }, 200);

  // Initialize avatar group demo
  setTimeout(() => {
    const avatarGroup = document.getElementById('homeAvatarGroup');
    if (avatarGroup) {
      avatarGroup.avatars = [
        { content: 'JD', bgColor: '#10b981' },
        { content: 'AB', bgColor: '#10b981' },
        { content: 'CD', bgColor: '#f59e0b' },
        { content: '+3', bgColor: '#6b7280' },
      ];
    }
  }, 150);

  // Initialize dock demo
  setTimeout(() => {
    const dock = document.getElementById('homeDock');
    if (dock) {
      dock.items = [
        { icon: '🏠', label: 'Home', action: 'home' },
        { icon: '📁', label: 'Files', action: 'files' },
        { icon: '⚙️', label: 'Settings', action: 'settings' },
      ];
    }
  }, 150);

  // Initialize anchor demo
  setTimeout(() => {
    const anchor = document.getElementById('homeAnchor');
    if (anchor) {
      anchor.items = [
        { id: 'section1', label: 'Section 1' },
        { id: 'section2', label: 'Section 2' },
        { id: 'section3', label: 'Section 3' },
      ];
    }
  }, 150);

  // Aside panel demo
  window.showHomeAsidePanel = function () {
    const existing = document.getElementById('homeAsidePanel');
    if (existing) {
      existing.remove();
      return;
    }

    const panel = document.createElement('ui-aside-panel');
    panel.id = 'homeAsidePanel';
    panel.setAttribute('direction', 'right');
    panel.setAttribute('size', '300px');
    panel.innerHTML = `
      <div slot="header">
        <h3 style="margin: 0;">Aside Panel</h3>
      </div>
      <div slot="content">
        <p style="margin: 0;">This is an aside panel for additional content.</p>
      </div>
    `;
    document.body.appendChild(panel);
    panel.show();

    panel.addEventListener('asideClosed', () => {
      setTimeout(() => panel.remove(), 300);
    });
  };
}
