export function initColorPickerDemo() {
  const section = document.getElementById('color-picker');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Enterprise-grade color selection with alpha support, multi-format inputs, swatch palettes, and live preview.</p>
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button data-demo="basic" variant="outline">Basic</ui-button>
      <ui-button data-demo="formats" variant="outline">Formats</ui-button>
      <ui-button data-demo="formatPicker" variant="outline">🎨 Format Picker</ui-button>
      <ui-button data-demo="inline" variant="outline">Inline Preview</ui-button>
      <ui-button data-demo="swatches" variant="outline">Swatches</ui-button>
      <ui-button data-demo="states" variant="outline">States &amp; Sizes</ui-button>
      <ui-button data-demo="compact" variant="outline">Compact Trigger</ui-button>
    </div>
    <div id="colorPickerContainer" style="margin-top: 20px;"></div>
  `;

  const container = section.querySelector('#colorPickerContainer');

  const showBasic = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Basic Color Picker</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Standard color picker with swatch palette, hex input, and recent colors. Drop-in ready for any form.</p>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Default Pickers</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:32px;">
          <ui-color-picker label="Primary Color" value="#10b981"></ui-color-picker>
          <ui-color-picker label="Accent Color" value="#8b5cf6"></ui-color-picker>
          <ui-color-picker label="Warning Color" value="#f59e0b"></ui-color-picker>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">With Eye Dropper &amp; Color Name</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:32px;">
          <ui-color-picker label="Eye Dropper" value="#3b82f6" show-eye-dropper="true"></ui-color-picker>
          <ui-color-picker label="Named Colors" value="#ef4444" show-color-name="true"></ui-color-picker>
          <ui-color-picker label="Recent Colors" value="#06b6d4" show-recent="true"></ui-color-picker>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Alpha Channel</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;">
          <ui-color-picker label="With Alpha" value="#ef444480" show-alpha="true" format="rgba"></ui-color-picker>
          <ui-color-picker label="HSLA Format" value="#8b5cf6" show-alpha="true" format="hsla"></ui-color-picker>
        </div>
      </div>
    `;
  };

  const showFormats = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Color Formats</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Toggle individual format channels. The <code>variant="input"</code> mode shows all enabled channels simultaneously in an integrated panel.</p>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Selective Channels</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:32px;">
          <ui-color-picker label="HEX Only" value="#10b981" show-rgb="false" show-hsl="false"></ui-color-picker>
          <ui-color-picker label="RGB + Hex" value="#3b82f6" show-hsl="false"></ui-color-picker>
          <ui-color-picker label="HSL Full" value="#8b5cf6" show-hex="false" show-rgb="false" show-hsl="true"></ui-color-picker>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Multi-Channel Input Variant</h4>
        <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;">
          <ui-color-picker
            label="All Channels"
            variant="input"
            inline="true"
            show-hex="true"
            show-rgb="true"
            show-rgba="true"
            show-hsl="true"
            show-hsla="true"
            show-alpha="true"
            value="#10b981"
          ></ui-color-picker>
          <div style="flex:1;min-width:240px;padding:20px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e5e7eb);">
            <h4 style="margin:0 0 10px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Format Details</h4>
            <ul style="font-size:13px;color:var(--text-secondary,#64748b);padding-left:18px;margin:0;line-height:1.8;">
              <li>Per-channel validation with real-time feedback</li>
              <li>Hashless HEX input for cleaner interaction</li>
              <li>Direct attribute binding for all color spaces</li>
              <li>Gradient support via <code>show-gradient</code></li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };

  const showFormatPicker = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Format Picker</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;"
          >Use the <code>formats</code> prop to specify exactly which color formats the user can see and edit.
           Accepts a comma-separated string — any combination of
           <code>hex</code>, <code>rgb</code>, <code>rgba</code>, <code>hsl</code>, <code>hsla</code>.</p>

        <!-- 1. One card per individual format -->
        <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Single-Format Pickers</h4>
        <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:flex-start;margin-bottom:36px;">

          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">HEX</span>
            <ui-color-picker value="#10b981" formats="hex" show-swatches="false" show-recent="false" show-color-name="false"></ui-color-picker>
          </div>

          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">RGB</span>
            <ui-color-picker value="#3b82f6" formats="rgb" show-swatches="false" show-recent="false" show-color-name="false"></ui-color-picker>
          </div>

          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">RGBA</span>
            <ui-color-picker value="#8b5cf6" formats="rgba" show-alpha="true" show-swatches="false" show-recent="false" show-color-name="false"></ui-color-picker>
          </div>

          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">HSL</span>
            <ui-color-picker value="#f59e0b" formats="hsl" show-swatches="false" show-recent="false" show-color-name="false"></ui-color-picker>
          </div>

          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">HSLA</span>
            <ui-color-picker value="#ef4444" formats="hsla" show-alpha="true" show-swatches="false" show-recent="false" show-color-name="false"></ui-color-picker>
          </div>
        </div>

        <!-- 2. Multi-format combos -->
        <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Multi-Format Combos</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:36px;">

          <div style="display:flex;flex-direction:column;gap:8px;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">HEX + RGB</span>
            <ui-color-picker value="#06b6d4" formats="hex,rgb" show-swatches="false" show-recent="false"></ui-color-picker>
          </div>

          <div style="display:flex;flex-direction:column;gap:8px;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">HEX + HSL</span>
            <ui-color-picker value="#22c55e" formats="hex,hsl" show-swatches="false" show-recent="false"></ui-color-picker>
          </div>

          <div style="display:flex;flex-direction:column;gap:8px;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">All 5 Formats</span>
            <ui-color-picker value="#6366f1" formats="hex,rgb,rgba,hsl,hsla" show-alpha="true" show-swatches="true"></ui-color-picker>
          </div>
        </div>

        <!-- 3. Interactive format chooser -->
        <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Interactive Format Chooser</h4>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:16px;">Toggle which formats appear in the picker below.</p>
        <div style="display:flex;gap:10px;flex-wrap:wrap;margin-bottom:20px;" id="formatToggles">
          <button data-fmt="hex"  class="fmt-btn fmt-active" style="padding:6px 14px;border-radius:8px;border:2px solid #10b981;background:#10b98120;color:#065f46;font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;">HEX</button>
          <button data-fmt="rgb"  class="fmt-btn"            style="padding:6px 14px;border-radius:8px;border:2px solid #e2e8f0;background:transparent;color:var(--text-secondary,#64748b);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;">RGB</button>
          <button data-fmt="rgba" class="fmt-btn"            style="padding:6px 14px;border-radius:8px;border:2px solid #e2e8f0;background:transparent;color:var(--text-secondary,#64748b);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;">RGBA</button>
          <button data-fmt="hsl"  class="fmt-btn"            style="padding:6px 14px;border-radius:8px;border:2px solid #e2e8f0;background:transparent;color:var(--text-secondary,#64748b);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;">HSL</button>
          <button data-fmt="hsla" class="fmt-btn"            style="padding:6px 14px;border-radius:8px;border:2px solid #e2e8f0;background:transparent;color:var(--text-secondary,#64748b);font-size:12px;font-weight:700;cursor:pointer;transition:all .15s;">HSLA</button>
        </div>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;">
          <ui-color-picker id="cpFormatChooser" value="#3b82f6" formats="hex" show-alpha="true" show-swatches="true"></ui-color-picker>
          <div style="min-width:200px;padding:16px 20px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e5e7eb);font-size:13px;">
            <div style="font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;font-size:11px;margin-bottom:10px;">Active formats</div>
            <code id="cpActiveFormats" style="display:block;padding:8px 12px;background:var(--bg-tertiary,#f1f5f9);border-radius:8px;font-size:13px;color:var(--text-primary,#1e293b);word-break:break-all;">hex</code>
            <div style="margin-top:16px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;font-size:11px;margin-bottom:8px;">Usage</div>
            <code id="cpUsageSnippet" style="display:block;padding:8px 12px;background:var(--bg-tertiary,#f1f5f9);border-radius:8px;font-size:12px;color:var(--text-primary,#1e293b);word-break:break-all;">formats="hex"</code>
          </div>
        </div>
      </div>
    `;

    // Wire up the toggle buttons
    const active = new Set(['hex']);
    const picker  = container.querySelector('#cpFormatChooser');
    const display = container.querySelector('#cpActiveFormats');
    const snippet = container.querySelector('#cpUsageSnippet');

    const updatePicker = () => {
      const fmts = [...active].join(',') || 'hex';
      if (picker) picker.setAttribute('formats', fmts);
      if (display) display.textContent = fmts;
      if (snippet) snippet.textContent = `formats="${fmts}"`;
    };

    container.querySelectorAll('.fmt-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const fmt = btn.getAttribute('data-fmt');
        if (active.has(fmt)) {
          if (active.size === 1) return; // keep at least one format
          active.delete(fmt);
          btn.style.border = '2px solid #e2e8f0';
          btn.style.background = 'transparent';
          btn.style.color = 'var(--text-secondary,#64748b)';
        } else {
          active.add(fmt);
          btn.style.border = '2px solid #10b981';
          btn.style.background = '#10b98120';
          btn.style.color = '#065f46';
        }
        updatePicker();
      });
    });
  };

  const showInline = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Inline Preview Engine</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Use <code>inline="true"</code> to embed the picker directly in the page. The live preview below updates as you pick a color.</p>

        <div style="display:flex;gap:32px;flex-wrap:wrap;align-items:flex-start;">
          <ui-color-picker id="cp-inline" inline="true" value="#10b981" show-alpha="true" show-swatches="true" show-recent="true"></ui-color-picker>

          <div style="min-width:220px;padding:24px;background:var(--bg-secondary,#f8fafc);border-radius:16px;border:1px solid var(--border-default,#e5e7eb);display:flex;flex-direction:column;gap:16px;align-items:center;">
            <div id="cp-preview-box" style="width:100%;height:100px;border-radius:12px;background:#10b981;box-shadow:0 8px 24px #10b98140;transition:background 0.2s,box-shadow 0.2s;"></div>
            <div style="font-family:monospace;font-size:15px;font-weight:700;color:var(--text-primary,#111827);" id="cp-preview-hex">#10B981</div>
            <div id="cp-preview-swatch" style="width:100%;display:flex;gap:6px;flex-wrap:wrap;justify-content:center;"></div>
            <div id="cp-preview-text" style="width:100%;padding:10px;border-radius:8px;background:#10b981;color:white;font-weight:800;text-align:center;font-size:13px;transition:background 0.2s;">SAMPLE TEXT</div>
          </div>
        </div>
      </div>
    `;
    const inlinePicker = container.querySelector('#cp-inline');
    const previewBox = container.querySelector('#cp-preview-box');
    const previewHex = container.querySelector('#cp-preview-hex');
    const previewText = container.querySelector('#cp-preview-text');

    if (inlinePicker) {
      inlinePicker.addEventListener('colorChange', e => {
        const color = e.detail;
        if (previewBox) {
          previewBox.style.background = color;
          previewBox.style.boxShadow = `0 8px 24px ${color}40`;
        }
        if (previewHex) previewHex.textContent = color.toUpperCase();
        if (previewText) previewText.style.background = color;
      });
    }
  };

  const showSwatches = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Custom Swatch Palettes</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Pass a <code>swatches</code> attribute with a JSON array of hex colors to define brand palettes. Set <code>show-swatches="false"</code> to hide the default swatches.</p>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Brand Palette</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:32px;">
          <ui-color-picker
            label="Brand Colors"
            value="#6366f1"
            swatches='["#6366f1","#8b5cf6","#a855f7","#ec4899","#f43f5e","#f97316","#eab308","#22c55e","#10b981","#06b6d4","#3b82f6","#1d4ed8"]'
          ></ui-color-picker>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Neutral Palette</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:32px;">
          <ui-color-picker
            label="Grayscale"
            value="#475569"
            swatches='["#f8fafc","#f1f5f9","#e2e8f0","#cbd5e1","#94a3b8","#64748b","#475569","#334155","#1e293b","#0f172a","#020617"]'
          ></ui-color-picker>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">No Swatches</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;">
          <ui-color-picker label="Swatches Hidden" value="#06b6d4" show-swatches="false"></ui-color-picker>
        </div>
      </div>
    `;
  };

  const showStates = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>States &amp; Sizes</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">The color picker supports <code>disabled</code> state and multiple <code>size</code> variants.</p>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Disabled State</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:32px;">
          <ui-color-picker label="Disabled" value="#64748b" disabled="true"></ui-color-picker>
          <ui-color-picker label="Disabled with Alpha" value="#3b82f680" disabled="true" show-alpha="true" format="rgba"></ui-color-picker>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Sizes</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;margin-bottom:32px;">
          <div>
            <div style="font-size:11px;text-transform:uppercase;color:var(--text-secondary,#64748b);font-weight:600;margin-bottom:8px;">Small</div>
            <ui-color-picker label="Small" value="#10b981" size="sm"></ui-color-picker>
          </div>
          <div>
            <div style="font-size:11px;text-transform:uppercase;color:var(--text-secondary,#64748b);font-weight:600;margin-bottom:8px;">Medium (Default)</div>
            <ui-color-picker label="Medium" value="#8b5cf6" size="md"></ui-color-picker>
          </div>
          <div>
            <div style="font-size:11px;text-transform:uppercase;color:var(--text-secondary,#64748b);font-weight:600;margin-bottom:8px;">Large</div>
            <ui-color-picker label="Large" value="#f59e0b" size="lg"></ui-color-picker>
          </div>
        </div>

        <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Required &amp; Named</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;">
          <ui-color-picker label="Required Field" value="#ef4444" required="true" name="brand-color"></ui-color-picker>
        </div>
      </div>
    `;
  };

  const showCompact = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Compact Trigger</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Add <code>compact</code> to render a swatch-only button — no hex label, no arrow. Perfect for toolbars, property panels, and table cells where space is tight.</p>

        <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Sizes</h4>
        <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:center;margin-bottom:32px;">
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">sm</span>
            <ui-color-picker value="#10b981" compact size="sm"></ui-color-picker>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">md</span>
            <ui-color-picker value="#6366f1" compact size="md"></ui-color-picker>
          </div>
          <div style="display:flex;flex-direction:column;gap:8px;align-items:center;">
            <span style="font-size:11px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">lg</span>
            <ui-color-picker value="#f59e0b" compact size="lg"></ui-color-picker>
          </div>
        </div>

        <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Toolbar Use-case</h4>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:16px;">Compact pickers sit naturally beside other toolbar controls without expanding the row height.</p>
        <div style="display:inline-flex;align-items:center;gap:6px;padding:8px 12px;border:1px solid var(--border-default,#e5e7eb);border-radius:10px;background:var(--bg-primary,#fff);margin-bottom:32px;">
          <ui-button variant="ghost" size="sm" icon-only icon="bold" icon-library="lucide"></ui-button>
          <ui-button variant="ghost" size="sm" icon-only icon="italic" icon-library="lucide"></ui-button>
          <ui-button variant="ghost" size="sm" icon-only icon="underline" icon-library="lucide"></ui-button>
          <div style="width:1px;height:18px;background:var(--border-default,#e5e7eb);margin:0 2px;"></div>
          <div style="display:flex;flex-direction:column;gap:2px;align-items:center;">
            <span style="font-size:9px;color:var(--text-muted,#9ca3af);line-height:1;">Text</span>
            <ui-color-picker id="cpToolbarText" value="#111827" compact size="sm"></ui-color-picker>
          </div>
          <div style="display:flex;flex-direction:column;gap:2px;align-items:center;">
            <span style="font-size:9px;color:var(--text-muted,#9ca3af);line-height:1;">Fill</span>
            <ui-color-picker id="cpToolbarFill" value="#fef9c3" compact size="sm"></ui-color-picker>
          </div>
        </div>

        <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Disabled State</h4>
        <div style="display:flex;gap:20px;flex-wrap:wrap;align-items:center;margin-bottom:32px;">
          <ui-color-picker value="#64748b" compact disabled></ui-color-picker>
          <ui-color-picker value="#64748b" compact disabled size="lg"></ui-color-picker>
        </div>

        <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Live Output</h4>
        <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:flex-start;">
          <ui-color-picker id="cpCompactLive" value="#3b82f6" compact show-alpha="true"></ui-color-picker>
          <div style="padding:16px 20px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e5e7eb);font-size:13px;min-width:180px;">
            <div style="font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;font-size:11px;margin-bottom:10px;">Selected value</div>
            <div style="display:flex;align-items:center;gap:10px;">
              <div id="cpCompactSwatch" style="width:28px;height:28px;border-radius:6px;background:#3b82f6;border:1px solid rgba(0,0,0,.1);flex-shrink:0;"></div>
              <code id="cpCompactValue" style="font-size:14px;font-weight:700;color:var(--text-primary,#1e293b);">#3b82f6</code>
            </div>
          </div>
        </div>
      </div>
    `;

    const livePicker = container.querySelector('#cpCompactLive');
    const liveSwatch = container.querySelector('#cpCompactSwatch');
    const liveValue  = container.querySelector('#cpCompactValue');
    if (livePicker) {
      livePicker.addEventListener('colorChange', e => {
        const c = e.detail;
        if (liveSwatch) liveSwatch.style.background = c;
        if (liveValue)  liveValue.textContent = c;
      });
    }
  };

  const demoMap = {
    basic: showBasic,
    formats: showFormats,
    formatPicker: showFormatPicker,
    inline: showInline,
    swatches: showSwatches,
    states: showStates,
    compact: showCompact,
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
    showBasic();
    nav?.querySelectorAll('ui-button').forEach(b => {
      b.variant = b.getAttribute('data-demo') === 'basic' ? 'solid' : 'outline';
      b.color = b.getAttribute('data-demo') === 'basic' ? 'primary' : 'none';
    });
  }, 50);
}
