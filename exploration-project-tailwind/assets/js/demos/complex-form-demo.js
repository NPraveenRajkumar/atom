export function initComplexFormDemo() {
  const section = document.getElementById('complex-form');
  if (!section) return;
  section.innerHTML = `
    <div style="padding: 40px; max-width: 900px; margin: 0 auto;">
      <h2 style="margin-bottom: 8px;">Complex Data Entry Form</h2>
      <p style="color:var(--text-secondary,#64748b); margin-bottom: 32px;">This demo showcases a multi-section form using various input components natively inlined.</p>
      
      <div style="display: grid; gap: 32px; background:var(--bg-primary,white); padding: 40px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1);">
        
        <section>
          <h4 style="margin-bottom: 20px; color:var(--text-primary,#1e293b); border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Project Details</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <ui-input label="Project Name" placeholder="My Enterprise App"></ui-input>
            <ui-input label="Repository URL" value="https://github.com/org/repo"></ui-input>
            <ui-input label="Description" multiline="true" style="grid-column: span 2;"></ui-input>
          </div>
        </section>

        <section>
          <h4 style="margin-bottom: 20px; color:var(--text-primary,#1e293b); border-bottom: 2px solid #f1f5f9; padding-bottom: 8px;">Configuration</h4>
          <div style="display: flex; flex-direction: column; gap: 20px;">
            <div style="display: flex; justify-content: space-between; align-items: center;">
              <span>Enable Advanced Telemetry</span>
              <ui-switch checked="true"></ui-switch>
            </div>
            <div>
              <label style="display: block; margin-bottom: 8px; font-weight: 600;">Environment Type</label>
              <ui-button-toggle-group value="prod" size="md">
                <ui-button-toggle value="dev" label="Development"></ui-button-toggle>
                <ui-button-toggle value="staging" label="Staging"></ui-button-toggle>
                <ui-button-toggle value="prod" label="Production"></ui-button-toggle>
              </ui-button-toggle-group>
            </div>
          </div>
        </section>

        <div style="display: flex; gap: 12px; justify-content: flex-end; padding-top: 20px;">
          <ui-button label="Discard" variant="ghost"></ui-button>
          <ui-button label="Save Project" variant="primary"></ui-button>
        </div>
      </div>
    </div>
  `;
}
