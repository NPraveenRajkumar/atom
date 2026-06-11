// Demo loader for ui-nav-bar navigation items
export function initNavBarDemo() {
  const navBar = document.getElementById('mainNav');
  if (!navBar) return;
  navBar.items = [
    { key: 'dashboard', icon: '🏠', label: 'Dashboard', active: true },
    { key: 'projects', icon: '📁', label: 'Projects', children: [
      { key: 'active', label: 'Active', icon: '✅' },
      { key: 'archived', label: 'Archived', icon: '🗄️' },
      { key: 'more', label: 'More', icon: '➕', children: [
        { key: 'deep1', label: 'Deep 1', icon: '🔎' },
        { key: 'deep2', label: 'Deep 2', icon: '🔬' }
      ]}
    ]},
    { key: 'settings', icon: '⚙️', label: 'Settings', badge: 2 },
    { key: 'help', icon: '❓', label: 'Help', disabled: true }
  ];
}
// Auto-init on DOMContentLoaded
window.addEventListener('DOMContentLoaded', initNavBarDemo);
