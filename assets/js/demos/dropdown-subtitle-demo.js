export function initDropdownSubtitleDemo() {
  const section = document.getElementById('dropdown-subtitle');
  if (!section) return;
  section.innerHTML = `
    <div style="padding: 40px; text-align: center;">
      <h2 style="margin-bottom: 12px;">Dropdown with Subtitles</h2>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 32px;">Advanced dropdown items with descriptive subtitles and icons.</p>
      
      <div style="max-width: 300px; margin: 0 auto; text-align: left;">
        <ui-dropdown label="System Actions" icon="settings" icon-library="lucide" width="100%">
          <ui-dropdown-item label="Full Backup" subtitle="Last run 2 hours ago" icon="database" icon-library="lucide"></ui-dropdown-item>
          <ui-dropdown-item label="Verify Logs" subtitle="Check for critical errors" icon="file-text" icon-library="lucide"></ui-dropdown-item>
          <ui-dropdown-item label="Optimize Index" subtitle="Performance maintenance" icon="zap" icon-library="lucide"></ui-dropdown-item>
        </ui-dropdown>
      </div>
    </div>
  `;
}
