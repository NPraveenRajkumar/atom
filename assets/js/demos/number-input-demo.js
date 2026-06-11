export function initNumberInputDemo() {
  const section = document.getElementById('number-input');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Precision numeric input with stepper controls, prefix/suffix affixes, scroll-wheel support, and full validation.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button data-demo="playground" variant="outline" status-color="primary">🎮 Playground</ui-button>
      <ui-button data-demo="basic" variant="outline">Basic &amp; Sizes</ui-button>
      <ui-button data-demo="steppers" variant="outline">Stepper Layouts</ui-button>
      <ui-button data-demo="affixes" variant="outline">Affixes &amp; Precision</ui-button>
      <ui-button data-demo="states" variant="outline">States</ui-button>
    </div>

    <div id="numberInputContainer" style="margin-top: 20px;"></div>
  `;

  const container = section.querySelector('#numberInputContainer');

  const showBasic = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Basic Usage</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Standard numeric inputs with label, initial value, step, and helper text.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:32px;">
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Age Selector</h4>
            <ui-number-input label="Age" value="25" min="0" max="120" helper-text="Valid range: 0–120"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Step of 5</h4>
            <ui-number-input label="Quantity" value="10" step="5" min="0" helper-text="Increments of 5"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Scroll Wheel</h4>
            <ui-number-input label="Priority" value="3" min="1" max="10" helper-text="Focus and scroll the mouse wheel"></ui-number-input>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <h3>Sizes</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Three available sizes: <code>sm</code>, <code>md</code> (default), and <code>lg</code>.</p>
        <div style="display:flex;flex-direction:column;gap:20px;max-width:380px;">
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Small</h4>
            <ui-number-input label="Small (sm)" size="sm" value="10"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Medium</h4>
            <ui-number-input label="Medium (md)" size="md" value="10"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Large</h4>
            <ui-number-input label="Large (lg)" size="lg" value="10"></ui-number-input>
          </div>
        </div>
      </div>
    `;
  };

  const showSteppers = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Stepper Layouts</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Control increment/decrement button placement via <code>stepper-layout</code>.</p>
        <div style="display:flex;flex-direction:column;gap:28px;max-width:420px;">
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Sides (Default)</h4>
            <p style="margin:0 0 12px;font-size:13px;color:var(--text-secondary,#64748b);">Minus on the left, plus on the right.</p>
            <ui-number-input label="Sides Layout" value="10" stepper-layout="sides"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Right Stacked</h4>
            <p style="margin:0 0 12px;font-size:13px;color:var(--text-secondary,#64748b);">Both buttons stacked vertically on the right.</p>
            <ui-number-input label="Right Layout" value="10" stepper-layout="right"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Hidden</h4>
            <p style="margin:0 0 12px;font-size:13px;color:var(--text-secondary,#64748b);">No buttons — use keyboard arrows or scroll wheel.</p>
            <ui-number-input label="No Steppers" value="10" stepper-layout="none" helper-text="Use keyboard or scroll wheel"></ui-number-input>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <h3>Plain Variant</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">The <code>variant="plain"</code> strips borders and steppers for dense UIs like paginators and inline counters.</p>
        <div style="display:flex;flex-direction:column;gap:16px;max-width:380px;">
          <ui-number-input label="Default Style" value="42"></ui-number-input>
          <ui-number-input label="Plain Style" value="42" variant="plain" helper-text="Compact, borderless — ideal for paginators"></ui-number-input>
        </div>
      </div>
    `;
  };

  const showAffixes = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Prefix &amp; Suffix Text</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Add contextual units or currency symbols via <code>prefix-text</code> and <code>suffix-text</code>.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:32px;">
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Currency (USD)</h4>
            <ui-number-input label="Price" value="99.99" precision="2" step="0.01" prefix-text="$"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Weight</h4>
            <ui-number-input label="Body Weight" value="75" suffix-text="kg" step="0.5"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Percentage</h4>
            <ui-number-input label="Completion" value="65" suffix-text="%" min="0" max="100"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Temperature</h4>
            <ui-number-input label="Temperature" value="22" suffix-text="°C" step="0.5" precision="1"></ui-number-input>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <h3>Precision Control</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Lock decimal places via <code>precision</code>. Set <code>-1</code> (default) to allow free-form decimals.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(260px,1fr));gap:32px;">
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">2 Decimal Places</h4>
            <ui-number-input label="Exchange Rate" value="1.2345" precision="2" step="0.01" prefix-text="€"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Integer Only</h4>
            <ui-number-input label="Page Count" value="12" precision="0"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Full Width</h4>
            <ui-number-input label="Annual Budget" value="50000" full-width="true" prefix-text="$" step="500" helper-text="Scroll the mouse wheel while focused"></ui-number-input>
          </div>
        </div>
      </div>
    `;
  };

  const showStates = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Interaction States</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Disabled, readonly, and error states for complete form validation coverage.</p>
        <div style="display:flex;flex-direction:column;gap:24px;max-width:420px;">
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Normal</h4>
            <ui-number-input label="Active Field" value="42" helper-text="Fully interactive"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Disabled</h4>
            <ui-number-input label="Disabled Field" value="10" disabled="true" helper-text="Cannot be edited"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Readonly</h4>
            <ui-number-input label="Readonly Field" value="99" readonly="true" helper-text="Value is locked but selectable"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Error State</h4>
            <ui-number-input label="Invalid Entry" value="-5" error-text="Value cannot be negative"></ui-number-input>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Min/Max Bounds</h4>
            <ui-number-input label="Rating (1–10)" value="7" min="1" max="10" helper-text="Clamped to range 1–10"></ui-number-input>
          </div>
        </div>
      </div>
    `;
  };

  const showPlayground = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Interactive Playground</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:28px;">Adjust any prop in real time and watch the component update live.</p>
        <div style="display:flex;gap:40px;flex-wrap:wrap;align-items:flex-start;">
          <div style="flex:1;min-width:280px;display:flex;flex-direction:column;gap:20px;">
            <div style="padding:32px;background:var(--bg-secondary,#f8fafc);border-radius:20px;border:1px solid var(--border-default,#e2e8f0);display:flex;flex-direction:column;align-items:flex-start;gap:20px;">
              <ui-number-input id="pgNumInput" label="Live Preview" value="42" min="0" max="100" step="1"></ui-number-input>
              <div style="padding:12px 18px;background:var(--bg-primary,#fff);border-radius:10px;border:1px solid var(--border-default,#e2e8f0);font-size:13px;width:100%;box-sizing:border-box;">
                <span style="color:var(--text-secondary,#64748b);">Emitted value: </span>
                <strong id="pgNumValue" style="color:var(--color-primary,#6366f1);font-size:16px;font-family:monospace;">42</strong>
              </div>
            </div>
          </div>
          <div style="flex:1;min-width:280px;display:flex;flex-direction:column;gap:16px;">
            <div style="display:grid;grid-template-columns:1fr 1fr;gap:16px;">
              <div>
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Stepper Layout</p>
                <ui-dropdown id="pgNumLayout" value="sides" options='[{"label":"Sides","value":"sides"},{"label":"Right","value":"right"},{"label":"None","value":"none"}]'></ui-dropdown>
              </div>
              <div>
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Size</p>
                <ui-dropdown id="pgNumSize" value="md" options='[{"label":"Small (sm)","value":"sm"},{"label":"Medium (md)","value":"md"},{"label":"Large (lg)","value":"lg"}]'></ui-dropdown>
              </div>
              <div>
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Variant</p>
                <ui-dropdown id="pgNumVariant" value="default" options='[{"label":"Default","value":"default"},{"label":"Plain","value":"plain"}]'></ui-dropdown>
              </div>
              <div>
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Step</p>
                <ui-number-input id="pgNumStep" value="1" min="0.01" step="1" stepper-layout="right" size="sm"></ui-number-input>
              </div>
              <div>
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Prefix Text</p>
                <ui-input id="pgNumPrefix" placeholder="e.g. $" size="sm"></ui-input>
              </div>
              <div>
                <p style="margin:0 0 6px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Suffix Text</p>
                <ui-input id="pgNumSuffix" placeholder="e.g. kg" size="sm"></ui-input>
              </div>
            </div>
            <div style="display:flex;flex-wrap:wrap;gap:12px;padding:16px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e2e8f0);">
              <ui-checkbox id="pgNumDisabled" label="Disabled" size="sm"></ui-checkbox>
              <ui-checkbox id="pgNumReadonly" label="Readonly" size="sm"></ui-checkbox>
              <ui-checkbox id="pgNumFullWidth" label="Full Width" size="sm"></ui-checkbox>
            </div>
          </div>
        </div>
      </div>
    `;

    const input = container.querySelector('#pgNumInput');
    const valueDisplay = container.querySelector('#pgNumValue');
    if (input && valueDisplay) {
      input.addEventListener('numberChange', e => { valueDisplay.textContent = e.detail ?? input.value; });
    }

    const sync = () => {
      if (!input) return;
      const layout = container.querySelector('#pgNumLayout');
      const size = container.querySelector('#pgNumSize');
      const variant = container.querySelector('#pgNumVariant');
      const step = container.querySelector('#pgNumStep');
      const prefix = container.querySelector('#pgNumPrefix');
      const suffix = container.querySelector('#pgNumSuffix');
      const disabled = container.querySelector('#pgNumDisabled');
      const readonly = container.querySelector('#pgNumReadonly');
      const fullWidth = container.querySelector('#pgNumFullWidth');
      if (layout?.value) input.setAttribute('stepper-layout', layout.value);
      if (size?.value) input.setAttribute('size', size.value);
      if (variant?.value) input.setAttribute('variant', variant.value);
      if (step?.value != null) input.setAttribute('step', step.value);
      input.setAttribute('prefix-text', prefix?.value || '');
      input.setAttribute('suffix-text', suffix?.value || '');
      input.disabled = disabled?.checked ?? false;
      input.readonly = readonly?.checked ?? false;
      input.fullWidth = fullWidth?.checked ?? false;
    };

    container.querySelector('#pgNumLayout')?.addEventListener('valueChange', sync);
    container.querySelector('#pgNumSize')?.addEventListener('valueChange', sync);
    container.querySelector('#pgNumVariant')?.addEventListener('valueChange', sync);
    container.querySelector('#pgNumStep')?.addEventListener('numberChange', sync);
    container.querySelector('#pgNumPrefix')?.addEventListener('inputChange', sync);
    container.querySelector('#pgNumSuffix')?.addEventListener('inputChange', sync);
    container.querySelector('#pgNumDisabled')?.addEventListener('checkboxChange', sync);
    container.querySelector('#pgNumReadonly')?.addEventListener('checkboxChange', sync);
    container.querySelector('#pgNumFullWidth')?.addEventListener('checkboxChange', sync);
  };

  const demoMap = {
    playground: showPlayground,
    basic: showBasic,
    steppers: showSteppers,
    affixes: showAffixes,
    states: showStates,
  };

  const nav = section.querySelector('.demo-controls');
  if (nav) {
    nav.querySelectorAll('ui-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const demo = btn.getAttribute('data-demo');
        if (demoMap[demo]) demoMap[demo]();
        nav.querySelectorAll('ui-button').forEach(b => {
          b.variant = b.getAttribute('data-demo') === demo ? 'solid' : 'outline';
          b.color = b.getAttribute('data-demo') === demo ? 'primary' : 'none';
        });
      });
    });
  }

  setTimeout(() => {
    showPlayground();
    nav?.querySelectorAll('ui-button').forEach(b => {
      b.variant = b.getAttribute('data-demo') === 'playground' ? 'solid' : 'outline';
      b.color = b.getAttribute('data-demo') === 'playground' ? 'primary' : 'none';
    });
  }, 50);
}

