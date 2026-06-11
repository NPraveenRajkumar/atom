export function initLabelDemo() {
  const section = document.getElementById('label');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Enterprise-grade, fully accessible form label component with 30+ features including variants, states, icons, tooltips, and copy-to-clipboard.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button id="btnLabelPlayground"   label="🎮 Playground"    data-demo="playground"  variant="outline"></ui-button>
      <ui-button id="btnLabelBasic"        label="🏷️ Basic"          data-demo="basic"       variant="outline"></ui-button>
      <ui-button id="btnLabelSizes"        label="📐 Sizes"          data-demo="sizes"       variant="outline"></ui-button>
      <ui-button id="btnLabelWeights"      label="⚖️ Weights"        data-demo="weights"     variant="outline"></ui-button>
      <ui-button id="btnLabelVariants"     label="🎨 Variants"       data-demo="variants"    variant="outline"></ui-button>
      <ui-button id="btnLabelStates"       label="🔘 Form States"    data-demo="states"      variant="outline"></ui-button>
      <ui-button id="btnLabelValidation"   label="✅ Validation"      data-demo="validation"  variant="outline"></ui-button>
      <ui-button id="btnLabelIcons"        label="🖼️ Icons"          data-demo="icons"       variant="outline"></ui-button>
      <ui-button id="btnLabelTooltip"      label="💬 Tooltip"        data-demo="tooltip"     variant="outline"></ui-button>
      <ui-button id="btnLabelInteractive"  label="👆 Interactive"    data-demo="interactive" variant="outline"></ui-button>
      <ui-button id="btnLabelLayout"       label="📐 Layout"         data-demo="layout"      variant="outline"></ui-button>
      <ui-button id="btnLabelTypography"   label="✍️ Typography"     data-demo="typography"  variant="outline"></ui-button>
    </div>

    <div id="labelDemoContainer" style="margin-top: 20px;"></div>
  `;

  const container = section.querySelector('#labelDemoContainer');

  const updateActiveBtn = demoName => {
    section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
      btn.selected = btn.getAttribute('data-demo') === demoName;
    });
  };

  // ─── Demo renderers ────────────────────────────────────────────────────────

  function showPlayground() {
    updateActiveBtn('playground');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 24px;">Interactive Playground</h3>
        <div style="display: grid; grid-template-columns: 320px 1fr; gap: 32px; align-items: start;">
          <!-- Controls -->
          <div style="background: var(--bg-secondary, #f8fafc); border: 1px solid var(--border-default, #e2e8f0); border-radius: 12px; padding: 20px; display: flex; flex-direction: column; gap: 14px;">
            <div>
              <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px; opacity: 0.7;">Label Text</label>
              <input id="pgLabelText" type="text" value="Email address" style="width: 100%; padding: 6px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 13px; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px; opacity: 0.7;">Size</label>
              <select id="pgLabelSize" style="width: 100%; padding: 6px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 13px;">
                <option value="xxs">xxs</option>
                <option value="xs">xs</option>
                <option value="sm">sm</option>
                <option value="md" selected>md (default)</option>
                <option value="lg">lg</option>
                <option value="xl">xl</option>
                <option value="xxl">xxl</option>
                <option value="xxxl">xxxl</option>
                <option value="jumbo">jumbo</option>
              </select>
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px; opacity: 0.7;">Weight</label>
              <select id="pgLabelWeight" style="width: 100%; padding: 6px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 13px;">
                <option value="light">light</option>
                <option value="normal">normal</option>
                <option value="medium" selected>medium (default)</option>
                <option value="semibold">semibold</option>
                <option value="bold">bold</option>
              </select>
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px; opacity: 0.7;">Variant</label>
              <select id="pgLabelVariant" style="width: 100%; padding: 6px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 13px;">
                <option value="default" selected>default</option>
                <option value="muted">muted</option>
                <option value="primary">primary</option>
                <option value="secondary">secondary</option>
                <option value="success">success</option>
                <option value="warning">warning</option>
                <option value="danger">danger</option>
                <option value="info">info</option>
              </select>
            </div>
            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 12px; font-weight: 600; opacity: 0.7;">Options</label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                <input type="checkbox" id="pgRequired" /> Required
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                <input type="checkbox" id="pgOptional" /> Optional
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                <input type="checkbox" id="pgDisabled" /> Disabled
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                <input type="checkbox" id="pgLoading" /> Loading
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                <input type="checkbox" id="pgCopyable" /> Copyable
              </label>
              <label style="display: flex; align-items: center; gap: 8px; font-size: 13px; cursor: pointer;">
                <input type="checkbox" id="pgClickable" /> Clickable
              </label>
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px; opacity: 0.7;">Helper Text</label>
              <input id="pgHelperText" type="text" placeholder="optional helper text" style="width: 100%; padding: 6px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 13px; box-sizing: border-box;" />
            </div>
            <div>
              <label style="font-size: 12px; font-weight: 600; display: block; margin-bottom: 4px; opacity: 0.7;">Start Icon (HTML/emoji)</label>
              <input id="pgStartIcon" type="text" placeholder="e.g. ✉️ or SVG string" style="width: 100%; padding: 6px 10px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 13px; box-sizing: border-box;" />
            </div>
          </div>

          <!-- Preview -->
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div style="background: var(--bg-primary, #fff); border: 1px solid var(--border-default, #e2e8f0); border-radius: 12px; padding: 32px; min-height: 120px; display: flex; align-items: center; justify-content: center;">
              <ui-label id="pgLabelPreview" label="Email address" size="md" weight="medium" variant="default"></ui-label>
            </div>
            <div>
              <div style="font-size: 11px; font-weight: 600; opacity: 0.5; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 8px;">Code</div>
              <pre id="pgLabelCode" style="background: #0f172a; color: #e2e8f0; padding: 16px; border-radius: 8px; font-size: 13px; overflow-x: auto; margin: 0; white-space: pre-wrap;"></pre>
            </div>
          </div>
        </div>
      </div>
    `;

    const preview = section.querySelector('#pgLabelPreview');
    const code = section.querySelector('#pgLabelCode');

    function updatePreview() {
      const text    = section.querySelector('#pgLabelText').value || 'Label';
      const size    = section.querySelector('#pgLabelSize').value;
      const weight  = section.querySelector('#pgLabelWeight').value;
      const variant = section.querySelector('#pgLabelVariant').value;
      const req     = section.querySelector('#pgRequired').checked;
      const opt     = section.querySelector('#pgOptional').checked;
      const dis     = section.querySelector('#pgDisabled').checked;
      const load    = section.querySelector('#pgLoading').checked;
      const copy    = section.querySelector('#pgCopyable').checked;
      const click   = section.querySelector('#pgClickable').checked;
      const helper  = section.querySelector('#pgHelperText').value;
      const startIc = section.querySelector('#pgStartIcon').value;

      preview.setAttribute('label', text);
      preview.setAttribute('size', size);
      preview.setAttribute('weight', weight);
      preview.setAttribute('variant', variant);
      preview.toggleAttribute('required', req);
      preview.toggleAttribute('optional', opt && !req);
      preview.toggleAttribute('disabled', dis);
      preview.toggleAttribute('loading', load);
      preview.toggleAttribute('copyable', copy);
      preview.toggleAttribute('clickable', click);
      if (helper) preview.setAttribute('helper-text', helper); else preview.removeAttribute('helper-text');
      if (startIc) preview.setAttribute('start-icon', startIc); else preview.removeAttribute('start-icon');

      let attrs = ` label="${text}"`;
      if (size !== 'md') attrs += ` size="${size}"`;
      if (weight !== 'medium') attrs += ` weight="${weight}"`;
      if (variant !== 'default') attrs += ` variant="${variant}"`;
      if (req) attrs += ' required';
      if (opt && !req) attrs += ' optional';
      if (dis) attrs += ' disabled';
      if (load) attrs += ' loading';
      if (copy) attrs += ' copyable';
      if (click) attrs += ' clickable';
      if (helper) attrs += ` helper-text="${helper}"`;
      if (startIc) attrs += ` start-icon="${startIc}"`;
      code.textContent = `<ui-label${attrs}></ui-label>`;
    }

    ['input', 'change'].forEach(ev => {
      ['pgLabelText','pgLabelSize','pgLabelWeight','pgLabelVariant','pgHelperText','pgStartIcon'].forEach(id => {
        section.querySelector('#' + id)?.addEventListener(ev, updatePreview);
      });
    });
    ['pgRequired','pgOptional','pgDisabled','pgLoading','pgCopyable','pgClickable'].forEach(id => {
      section.querySelector('#' + id)?.addEventListener('change', updatePreview);
    });

    updatePreview();
  }

  function showBasic() {
    updateActiveBtn('basic');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Basic Labels</h3>
        <div style="display: flex; flex-direction: column; gap: 24px;">

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Default</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start;">
              <ui-label label="First name"></ui-label>
              <ui-label label="Email address"></ui-label>
              <ui-label label="Phone number"></ui-label>
              <ui-label label="Date of birth"></ui-label>
            </div>
            <pre class="demo-code"><code>&lt;ui-label label="First name"&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">With Input Association</h4>
            <div style="display: flex; flex-direction: column; gap: 12px; max-width: 360px;">
              <div>
                <ui-label label="Username" html-for="demo-input-user" required></ui-label>
                <input id="demo-input-user" type="text" placeholder="johndoe" style="display: block; width: 100%; margin-top: 6px; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; box-sizing: border-box;" />
              </div>
              <div>
                <ui-label label="Password" html-for="demo-input-pwd" required helper-text="Must be at least 8 characters"></ui-label>
                <input id="demo-input-pwd" type="password" placeholder="••••••••" style="display: block; width: 100%; margin-top: 6px; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 6px; font-size: 14px; box-sizing: border-box;" />
              </div>
            </div>
            <pre class="demo-code"><code>&lt;ui-label label="Username" html-for="my-input" required&gt;&lt;/ui-label&gt;
&lt;input id="my-input" type="text" /&gt;</code></pre>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Slot Content</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 24px; align-items: flex-start;">
              <ui-label>Rich <strong>content</strong> label</ui-label>
              <ui-label>Label with <span style="color:var(--accent-indigo,#6366f1)">colored</span> text</ui-label>
              <ui-label>Label with <code style="background:var(--bg-tertiary,#f1f5f9);padding:0 4px;border-radius:3px;font-size:0.85em;">code</code></ui-label>
            </div>
            <pre class="demo-code"><code>&lt;ui-label&gt;Rich &lt;strong&gt;content&lt;/strong&gt; label&lt;/ui-label&gt;</code></pre>
          </div>

        </div>
      </div>
    `;
  }

  function showSizes() {
    updateActiveBtn('sizes');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Size Scale</h3>
        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${['xxs','xs','sm','md','lg','xl','xxl','xxxl','jumbo'].map(s => `
            <div style="display: flex; align-items: baseline; gap: 24px; padding: 12px 16px; border-radius: 8px; background: var(--bg-secondary, #f8fafc);">
              <span style="font-size: 11px; font-weight: 600; opacity: 0.5; min-width: 32px; text-transform: uppercase;">${s}</span>
              <ui-label label="Form field label" size="${s}"></ui-label>
              <ui-label label="Required field" size="${s}" required></ui-label>
            </div>
          `).join('')}
        </div>
        <pre class="demo-code" style="margin-top: 20px;"><code>&lt;ui-label label="Field label" size="xxs"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" size="xs"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" size="sm"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" size="md"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" size="lg"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" size="xl"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" size="xxl"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" size="xxxl"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" size="jumbo"&gt;&lt;/ui-label&gt;</code></pre>
      </div>
    `;
  }

  function showWeights() {
    updateActiveBtn('weights');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Font Weights</h3>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          ${[['light','300'],['normal','400'],['medium','500 (default)'],['semibold','600'],['bold','700']].map(([w, label]) => `
            <div style="display: flex; align-items: center; gap: 24px; padding: 12px 16px; border-radius: 8px; background: var(--bg-secondary, #f8fafc);">
              <span style="font-size: 11px; font-weight: 600; opacity: 0.5; min-width: 80px; text-transform: uppercase;">${w}</span>
              <ui-label label="Field label" weight="${w}" size="lg"></ui-label>
              <span style="font-size: 11px; opacity: 0.40; margin-left: auto;">font-weight: ${label}</span>
            </div>
          `).join('')}
        </div>
        <pre class="demo-code" style="margin-top: 20px;"><code>&lt;ui-label label="Field label" weight="light"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Field label" weight="bold"&gt;&lt;/ui-label&gt;</code></pre>
      </div>
    `;
  }

  function showVariants() {
    updateActiveBtn('variants');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Color Variants</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(220px, 1fr)); gap: 16px;">
          ${['default','muted','primary','secondary','success','warning','danger','info'].map(v => `
            <div style="padding: 16px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0); background: var(--bg-primary,#fff); display: flex; flex-direction: column; gap: 8px;">
              <span style="font-size: 10px; font-weight: 700; text-transform: uppercase; opacity: 0.5; letter-spacing: 0.08em;">${v}</span>
              <ui-label label="Form field label" variant="${v}" size="md" weight="semibold"></ui-label>
              <ui-label label="Required field" variant="${v}" required></ui-label>
            </div>
          `).join('')}
        </div>
        <pre class="demo-code" style="margin-top: 20px;"><code>&lt;ui-label label="Field label" variant="primary"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Warning label" variant="warning"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Danger label" variant="danger"&gt;&lt;/ui-label&gt;</code></pre>
      </div>
    `;
  }

  function showStates() {
    updateActiveBtn('states');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Form States</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(min(100%, 280px), 1fr)); gap: 20px;">

          <div style="min-width: 0; padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.5; text-transform: uppercase; margin-bottom: 12px;">Required</div>
            <ui-label label="Email address" required></ui-label>
            <pre class="demo-code" style="margin-top: 12px; max-width: 100%; overflow-x: auto; white-space: pre-wrap; overflow-wrap: anywhere;"><code>&lt;ui-label label="Email" required&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div style="min-width: 0; padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.5; text-transform: uppercase; margin-bottom: 12px;">Optional</div>
            <ui-label label="Middle name" optional></ui-label>
            <pre class="demo-code" style="margin-top: 12px; max-width: 100%; overflow-x: auto; white-space: pre-wrap; overflow-wrap: anywhere;"><code>&lt;ui-label label="Middle name" optional&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div style="min-width: 0; padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.5; text-transform: uppercase; margin-bottom: 12px;">Disabled</div>
            <ui-label label="Locked field" disabled></ui-label>
            <pre class="demo-code" style="margin-top: 12px; max-width: 100%; overflow-x: auto; white-space: pre-wrap; overflow-wrap: anywhere;"><code>&lt;ui-label label="Locked field" disabled&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div style="min-width: 0; padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.5; text-transform: uppercase; margin-bottom: 12px;">Read-only</div>
            <ui-label label="Read-only label" readonly></ui-label>
            <pre class="demo-code" style="margin-top: 12px; max-width: 100%; overflow-x: auto; white-space: pre-wrap; overflow-wrap: anywhere;"><code>&lt;ui-label label="Read-only label" readonly&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div style="min-width: 0; padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.5; text-transform: uppercase; margin-bottom: 12px;">Invalid / Error</div>
            <ui-label label="Email address" invalid required error-text="Please enter a valid email"></ui-label>
            <pre class="demo-code" style="margin-top: 12px; max-width: 100%; overflow-x: auto; white-space: pre-wrap; overflow-wrap: anywhere;"><code>&lt;ui-label label="Email" invalid
  error-text="Invalid email"&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div style="min-width: 0; padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.5; text-transform: uppercase; margin-bottom: 12px;">Loading Skeleton</div>
            <ui-label label="Loading label" loading></ui-label>
            <pre class="demo-code" style="margin-top: 12px; max-width: 100%; overflow-x: auto; white-space: pre-wrap; overflow-wrap: anywhere;"><code>&lt;ui-label label="Loading label" loading&gt;&lt;/ui-label&gt;</code></pre>
          </div>

        </div>
      </div>
    `;
  }

  function showValidation() {
    updateActiveBtn('validation');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Validation Messages</h3>
        <div style="display: flex; flex-direction: column; gap: 20px; max-width: 500px;">

          <div style="padding: 20px; border-radius: 10px; border: 1px solid #ef4444; background: #fff5f5;">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.6; text-transform: uppercase; margin-bottom: 12px; color:var(--accent-red,#ef4444);">Error State</div>
            <ui-label label="Email address" required invalid error-text="Please enter a valid email address" size="md"></ui-label>
          </div>

          <div style="padding: 20px; border-radius: 10px; border: 1px solid #10b981; background: #f0fdf9;">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.6; text-transform: uppercase; margin-bottom: 12px; color: #10b981;">Success State</div>
            <ui-label label="Email address" required success-text="Email is valid and available!" size="md"></ui-label>
          </div>

          <div style="padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.6; text-transform: uppercase; margin-bottom: 12px;">Helper Text</div>
            <ui-label label="Password" required helper-text="Must be at least 8 characters with one uppercase and one number" size="md"></ui-label>
          </div>

          <div style="padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <div style="font-size: 11px; font-weight: 700; opacity: 0.6; text-transform: uppercase; margin-bottom: 12px;">Hint Slot</div>
            <ui-label label="API Key" required>
              <span slot="hint">Get your key from the <a href="#" style="color:var(--accent-indigo,#6366f1);">developer portal</a></span>
            </ui-label>
          </div>

        </div>
        <pre class="demo-code" style="margin-top: 20px;"><code>&lt;!-- Error message --&gt;
&lt;ui-label label="Email" invalid error-text="Invalid email"&gt;&lt;/ui-label&gt;

&lt;!-- Success message --&gt;
&lt;ui-label label="Email" success-text="Email verified!"&gt;&lt;/ui-label&gt;

&lt;!-- Helper text --&gt;
&lt;ui-label label="Password" helper-text="Min 8 chars"&gt;&lt;/ui-label&gt;

&lt;!-- Hint slot --&gt;
&lt;ui-label label="API Key"&gt;
  &lt;span slot="hint"&gt;Get from &lt;a href="/portal"&gt;portal&lt;/a&gt;&lt;/span&gt;
&lt;/ui-label&gt;</code></pre>
      </div>
    `;
  }

  function showIcons() {
    updateActiveBtn('icons');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Icons</h3>
        <div style="display: flex; flex-direction: column; gap: 24px;">

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Start Icon</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;">
              <ui-label label="Email" start-icon="✉️"></ui-label>
              <ui-label label="Phone" start-icon="📞"></ui-label>
              <ui-label label="Password" start-icon="🔒" required></ui-label>
              <ui-label label="Location" start-icon="📍" variant="info"></ui-label>
              <ui-label label="Date" start-icon="📅" optional></ui-label>
            </div>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">End Icon</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;">
              <ui-label label="Verified field" end-icon="✅"></ui-label>
              <ui-label label="Required" end-icon="⚠️" required></ui-label>
              <ui-label label="External link" end-icon="🔗" clickable></ui-label>
            </div>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Both Icons</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;">
              <ui-label label="Credit card" start-icon="💳" end-icon="🔒"></ui-label>
              <ui-label label="Pro feature" start-icon="⭐" end-icon="→" variant="primary" weight="semibold"></ui-label>
            </div>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Slot: start / end</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 20px; align-items: flex-start;">
              <ui-label label="Custom slot icon">
                <span slot="start" style="display:inline-flex;width:16px;height:16px;background:var(--accent-indigo,#6366f1);border-radius:50%;"></span>
              </ui-label>
              <ui-label label="Badge in end slot">
                <span slot="end" style="font-size:10px;font-weight:700;background:var(--accent-red,#ef4444);color:#fff;border-radius:4px;padding:1px 5px;">HOT</span>
              </ui-label>
            </div>
          </div>

        </div>
        <pre class="demo-code" style="margin-top: 20px;"><code>&lt;ui-label label="Email" start-icon="✉️"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Done" end-icon="✅"&gt;&lt;/ui-label&gt;
&lt;ui-label label="Card" start-icon="💳" end-icon="🔒"&gt;&lt;/ui-label&gt;</code></pre>
      </div>
    `;
  }

  function showTooltip() {
    updateActiveBtn('tooltip');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Tooltips</h3>
        <div style="display: flex; flex-direction: column; gap: 32px; padding: 24px;">

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 20px;">Text Tooltip (click ⓘ to open)</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 32px; align-items: flex-start; padding: 24px 0;">
              <ui-label label="IBAN number" tooltip="International Bank Account Number — a standard format used globally to identify bank accounts." required></ui-label>
              <ui-label label="Tax ID" tooltip="Your unique tax identification number issued by your country's revenue authority." optional></ui-label>
              <ui-label label="VAT rate" tooltip="Value Added Tax rate applicable in your jurisdiction." variant="info"></ui-label>
            </div>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 20px;">Tooltip Positions</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 48px; align-items: flex-start; padding: 40px 0;">
              <ui-label label="Tooltip top"    tooltip="Appears on top"    tooltip-position="top"    required></ui-label>
              <ui-label label="Tooltip bottom" tooltip="Appears below"     tooltip-position="bottom" required></ui-label>
              <ui-label label="Tooltip left"   tooltip="Appears to the left"   tooltip-position="left"   required></ui-label>
              <ui-label label="Tooltip right"  tooltip="Appears to the right"  tooltip-position="right"  required></ui-label>
            </div>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 20px;">Rich Tooltip (slot)</h4>
            <div style="padding: 24px 0;">
              <ui-label label="Advanced setting" required>
                <div slot="tooltip" style="font-size: 12px; line-height: 1.6;">
                  <strong>Advanced configuration</strong><br>
                  This setting controls the behavior of the advanced module. Consult the
                  <a href="#" style="color:#a5b4fc;">documentation</a> for details.
                </div>
              </ui-label>
            </div>
          </div>

        </div>
        <pre class="demo-code"><code>&lt;!-- Text tooltip --&gt;
&lt;ui-label label="IBAN" tooltip="International Bank Account Number"&gt;&lt;/ui-label&gt;

&lt;!-- Positioned tooltip --&gt;
&lt;ui-label label="Field" tooltip="Info" tooltip-position="bottom"&gt;&lt;/ui-label&gt;

&lt;!-- Rich tooltip slot --&gt;
&lt;ui-label label="Setting"&gt;
  &lt;div slot="tooltip"&gt;&lt;strong&gt;Title&lt;/strong&gt;&lt;br&gt;Details here.&lt;/div&gt;
&lt;/ui-label&gt;</code></pre>
      </div>
    `;
  }

  function showInteractive() {
    updateActiveBtn('interactive');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Interactive Features</h3>
        <div style="display: flex; flex-direction: column; gap: 28px;">

          <div style="padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Clickable</h4>
            <p style="font-size: 13px; opacity: 0.7; margin: 0 0 12px;">Label fires <code>labelClick</code> event when clicked.</p>
            <ui-label id="clickableLabel" label="Click me to select all" clickable variant="primary" weight="semibold"></ui-label>
            <div id="clickLog" style="margin-top: 12px; font-size: 12px; color: #10b981; min-height: 18px;"></div>
            <pre class="demo-code" style="margin-top: 12px;"><code>&lt;ui-label label="Click me" clickable variant="primary"&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div style="padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Copy to Clipboard (hover to reveal)</h4>
            <p style="font-size: 13px; opacity: 0.7; margin: 0 0 12px;">Hover over the label to reveal the copy icon.</p>
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
              <ui-label id="copyLabel1" label="API_KEY_12345_ABCDE" copyable></ui-label>
              <ui-label id="copyLabel2" label="user@example.com" copyable variant="primary"></ui-label>
              <ui-label id="copyLabel3" label="0x1A2B3C4D5E6F" copyable weight="semibold" start-icon="📋"></ui-label>
            </div>
            <div id="copyLog" style="margin-top: 12px; font-size: 12px; color: #10b981; min-height: 18px;"></div>
            <pre class="demo-code" style="margin-top: 12px;"><code>&lt;ui-label label="API_KEY_12345" copyable&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div style="padding: 20px; border-radius: 10px; border: 1px solid var(--border-default,#e2e8f0);">
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Selectable Text</h4>
            <p style="font-size: 13px; opacity: 0.7; margin: 0 0 12px;">Allows text selection (disabled by default on labels).</p>
            <ui-label label="You can select this label text" selectable size="lg"></ui-label>
            <pre class="demo-code" style="margin-top: 12px;"><code>&lt;ui-label label="Selectable text" selectable&gt;&lt;/ui-label&gt;</code></pre>
          </div>

        </div>
      </div>
    `;

    setTimeout(() => {
      const clickable = document.getElementById('clickableLabel');
      const clickLog = document.getElementById('clickLog');
      if (clickable && clickLog) {
        clickable.addEventListener('labelClick', e => {
          clickLog.textContent = `✓ labelClick fired! Text: "${e.detail?.text}"`;
          setTimeout(() => { clickLog.textContent = ''; }, 3000);
        });
      }

      ['copyLabel1','copyLabel2','copyLabel3'].forEach(id => {
        const el = document.getElementById(id);
        const copyLog = document.getElementById('copyLog');
        if (el && copyLog) {
          el.addEventListener('labelCopy', e => {
            copyLog.textContent = `✓ Copied to clipboard: "${e.detail?.text}"`;
            setTimeout(() => { copyLog.textContent = ''; }, 3000);
          });
        }
      });
    }, 100);
  }

  function showLayout() {
    updateActiveBtn('layout');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Layout Options</h3>
        <div style="display: flex; flex-direction: column; gap: 24px;">

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Alignment</h4>
            <div style="display: flex; flex-direction: column; gap: 10px;">
              <div style="border: 1px solid var(--border-default,#e2e8f0); border-radius: 8px; padding: 12px; background: var(--bg-secondary,#f8fafc);">
                <ui-label label="Align start (default)" align="start" block></ui-label>
              </div>
              <div style="border: 1px solid var(--border-default,#e2e8f0); border-radius: 8px; padding: 12px; background: var(--bg-secondary,#f8fafc);">
                <ui-label label="Align center" align="center" block></ui-label>
              </div>
              <div style="border: 1px solid var(--border-default,#e2e8f0); border-radius: 8px; padding: 12px; background: var(--bg-secondary,#f8fafc);">
                <ui-label label="Align end" align="end" block></ui-label>
              </div>
              <div style="border: 1px solid var(--border-default,#e2e8f0); border-radius: 8px; padding: 12px; background: var(--bg-secondary,#f8fafc);">
                <ui-label label="Align between" align="between" block end-icon="ⓘ"></ui-label>
              </div>
            </div>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Inline vs Block</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 12px; align-items: center; padding: 16px; border: 1px solid var(--border-default,#e2e8f0); border-radius: 8px;">
              <ui-label label="Inline label" inline></ui-label>
              <span style="opacity: 0.4;">|</span>
              <ui-label label="Another inline" inline variant="primary"></ui-label>
              <span style="opacity: 0.4;">|</span>
              <ui-label label="Also inline" inline></ui-label>
            </div>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">RTL Direction</h4>
            <div style="direction: rtl; padding: 16px; border: 1px solid var(--border-default,#e2e8f0); border-radius: 8px; background: var(--bg-secondary,#f8fafc);">
              <ui-label label="اسم المستخدم" required dir="rtl" start-icon="👤"></ui-label>
              <br/><br/>
              <ui-label label="البريد الإلكتروني" optional dir="rtl" start-icon="✉️"></ui-label>
            </div>
            <pre class="demo-code" style="margin-top: 12px;"><code>&lt;ui-label label="اسم المستخدم" dir="rtl" required&gt;&lt;/ui-label&gt;</code></pre>
          </div>

        </div>
      </div>
    `;
  }

  function showTypography() {
    updateActiveBtn('typography');
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="margin-bottom: 20px;">Typography</h3>
        <div style="display: flex; flex-direction: column; gap: 24px;">

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Text Transform</h4>
            <div style="display: flex; flex-wrap: wrap; gap: 20px;">
              <ui-label label="none (default)" transform="none" size="lg"></ui-label>
              <ui-label label="UPPERCASE transform" transform="uppercase" size="lg"></ui-label>
              <ui-label label="Lowercase Transform" transform="lowercase" size="lg"></ui-label>
              <ui-label label="capitalize every word" transform="capitalize" size="lg"></ui-label>
            </div>
            <pre class="demo-code" style="margin-top: 12px;"><code>&lt;ui-label label="uppercase label" transform="uppercase"&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Truncation</h4>
            <div style="max-width: 300px; display: flex; flex-direction: column; gap: 12px;">
              <div style="border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; opacity: 0.5; margin-bottom: 6px;">Single-line truncate</div>
                <ui-label label="This is a very long label text that will be truncated with an ellipsis when it overflows" truncate></ui-label>
              </div>
              <div style="border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; padding: 12px;">
                <div style="font-size: 11px; opacity: 0.5; margin-bottom: 6px;">Multi-line clamp (2 lines)</div>
                <ui-label label="This is a very long label text that demonstrates multi-line clamping at exactly two lines before showing ellipsis." multiline line-clamp="2"></ui-label>
              </div>
            </div>
            <pre class="demo-code" style="margin-top: 12px;"><code>&lt;!-- Truncate --&gt;
&lt;ui-label label="Very long label..." truncate&gt;&lt;/ui-label&gt;

&lt;!-- Line clamp --&gt;
&lt;ui-label label="Multi line label..." multiline line-clamp="2"&gt;&lt;/ui-label&gt;</code></pre>
          </div>

          <div>
            <h4 style="font-size: 13px; opacity: 0.6; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 16px;">Custom Spacing</h4>
            <div style="display: flex; flex-direction: column; gap: 16px; max-width: 400px;">
              <ui-label label="Custom margin" required margin="0 0 16px" helper-text="This label has a bottom margin of 16px"></ui-label>
              <ui-label label="Custom gap (12px)" required helper-text="Larger gap between label and hint text" gap="12px"></ui-label>
            </div>
            <pre class="demo-code" style="margin-top: 12px;"><code>&lt;ui-label label="Spaced" margin="0 0 16px" gap="12px"&gt;&lt;/ui-label&gt;</code></pre>
          </div>

        </div>
      </div>
    `;
  }

  // ─── Button wiring ─────────────────────────────────────────────────────────
  const demoMap = {
    playground:  showPlayground,
    basic:       showBasic,
    sizes:       showSizes,
    weights:     showWeights,
    variants:    showVariants,
    states:      showStates,
    validation:  showValidation,
    icons:       showIcons,
    tooltip:     showTooltip,
    interactive: showInteractive,
    layout:      showLayout,
    typography:  showTypography,
  };

  setTimeout(() => {
    section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const demo = btn.getAttribute('data-demo');
        if (demoMap[demo]) demoMap[demo]();
      });
    });
    showPlayground();
  }, 100);
}
