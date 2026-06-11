export function initOverviewDemo() {
  const section = document.getElementById('overview');
  if (!section) return;
  section.innerHTML = `
    <div style="padding: 40px; text-align: center;">
      <ui-icon name="layout-dashboard" size="xl" library="lucide" style="margin-bottom: 20px; color: var(--color-primary);"></ui-icon>
      <h2>Showcase Overview</h2>
      <p>Welcome to the premium component showcase. This area provides a high-level view of our library's capabilities.</p>
    </div>
  `;
}
