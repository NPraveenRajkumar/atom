// Nav-bar component initialization
setTimeout(() => {
  const mainNav = document.getElementById('mainNav');
  if (!mainNav) {
    console.error('Nav-bar element not found');
    return;
  }

  console.log('Initializing nav-bar...');
  mainNav.collapsed = true;
  mainNav.appTitle = 'My App';
  mainNav.showSearch = true;
  mainNav.searchPlaceholder = 'Search navigation...';
  mainNav.maxVisibleItems = 5;

  const topItemsData = [
    {
      id: 'dashboard',
      label: 'Dashboard',
      sectionHeader: 'Main',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="7" height="7"></rect><rect x="14" y="3" width="7" height="7"></rect><rect x="14" y="14" width="7" height="7"></rect><rect x="3" y="14" width="7" height="7"></rect></svg>',
      href: '#dashboard',
      active: true,
    },
    {
      id: 'products',
      label: 'Products',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20 7h-9"></path><path d="M14 17H5"></path><circle cx="17" cy="17" r="3"></circle><circle cx="7" cy="7" r="3"></circle></svg>',
      badge: '12',
      subitems: [
        { id: 'all-products', label: 'All Products', href: '#products', active: false },
        { id: 'categories', label: 'Categories', href: '#categories' },
        { id: 'new-product', label: 'Add New', href: '#new' },
      ],
    },
    {
      id: 'orders',
      label: 'Orders',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 2v4"></path><path d="M15 2v4"></path><rect x="3" y="4" width="18" height="18" rx="2"></rect><path d="M3 10h18"></path></svg>',
      badge: '3',
      href: '#orders',
    },
    {
      id: 'customers',
      label: 'Customers',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>',
      subitems: [
        { id: 'all-customers', label: 'All Customers', href: '#customers' },
        { id: 'vip-customers', label: 'VIP Customers', href: '#vip' },
        { id: 'new-customer', label: 'Add Customer', href: '#new-customer' },
      ],
    },
    {
      id: 'analytics',
      label: 'Analytics',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline></svg>',
      href: '#analytics',
    },
    {
      id: 'reports',
      label: 'Reports',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>',
      href: '#reports',
    },
    {
      id: 'inventory',
      label: 'Inventory',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" y1="22.08" x2="12" y2="12"></line></svg>',
      badge: '5',
      href: '#inventory',
    },
    {
      id: 'shipping',
      label: 'Shipping',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="1" y="3" width="15" height="13"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>',
      href: '#shipping',
    },
    {
      id: 'invoices',
      label: 'Invoices',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" y1="13" x2="8" y2="13"></line><line x1="16" y1="17" x2="8" y2="17"></line><line x1="10" y1="9" x2="8" y2="9"></line></svg>',
      badge: '2',
      href: '#invoices',
    },
  ];

  const bottomItemsData = [
    {
      id: 'help',
      label: 'Help & Support',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><line x1="12" y1="17" x2="12.01" y2="17"></line></svg>',
      href: '#help',
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="3"></circle><path d="M12 1v6m0 6v6M5.64 5.64l4.24 4.24m4.24 4.24l4.24 4.24M1 12h6m6 0h6M5.64 18.36l4.24-4.24m4.24-4.24l4.24-4.24"></path></svg>',
      subitems: [
        { id: 'profile', label: 'Profile', href: '#profile' },
        { id: 'preferences', label: 'Preferences', href: '#preferences' },
        { id: 'logout', label: 'Logout', href: '#logout' },
      ],
    },
  ];

  mainNav.topItems = topItemsData;
  mainNav.bottomItems = bottomItemsData;
  console.log('Nav-bar initialized with', topItemsData.length, 'top items and', bottomItemsData.length, 'bottom items');

  mainNav.addEventListener('navItemClicked', e => {
    console.log('Nav item clicked:', e.detail);
  });

  mainNav.addEventListener('navToggled', e => {
    console.log('Nav toggled. Collapsed:', e.detail.collapsed);
  });

  console.log('Nav-bar initialization complete');
}, 200);
