export function initDashboardDemo() {
  const section = document.getElementById('dashboard');
  if (!section) return;
  section.innerHTML = `<ui-library></ui-library>`;
}
