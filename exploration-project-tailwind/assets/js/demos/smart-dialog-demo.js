// Smart Dialog Demo
export function initSmartDialogDemo() {
  const section = document.getElementById('smart-dialog');
  if (!section) return;
  if (section.dataset.initialized) return;
  section.dataset.initialized = 'true';

  section.innerHTML = `
    <div style="padding: 24px;">
      <h2 style="font-size:1.5rem; font-weight:700; margin-bottom:6px;">Smart Dialog</h2>
      <p style="color:var(--text-secondary,#94a3b8); margin-bottom:24px;">
        Minimizable, draggable, resizable dialogs with Gmail-style tray support.
      </p>

      <!-- ── Control Groups ───────────────────────────────────────────────── -->
      <div style="display:flex; flex-wrap:wrap; gap:10px; margin-bottom:32px;">

        <!-- Basic -->
        <ui-button class="sd-btn" onclick="SD.basic()" style="--c:#10b981">📄 Basic</ui-button>
        <ui-button class="sd-btn" onclick="SD.minimize()" style="--c:var(--accent-purple,#8b5cf6)">📌 Minimizable</ui-button>
        <ui-button class="sd-btn" onclick="SD.multiMinimize()" style="--c:var(--accent-purple,#7c3aed)">⬇️ Multi-Minimize Tray</ui-button>
        <ui-button class="sd-btn" onclick="SD.draggable()" style="--c:#10b981">🖱️ Draggable</ui-button>
        <ui-button class="sd-btn" onclick="SD.resizable()" style="--c:var(--accent-cyan,#0ea5e9)">↔️ Draggable + Resizable</ui-button>
        <ui-button class="sd-btn" onclick="SD.maximizable()" style="--c:var(--accent-yellow,#f59e0b)">🖥️ Maximizable</ui-button>
        <ui-button class="sd-btn" onclick="SD.sizes()" style="--c:var(--accent-red,#ef4444)">📐 Sizes</ui-button>

        <!-- Variants / Status -->
        <ui-button class="sd-btn" onclick="SD.variants()" style="--c:var(--accent-indigo,#6366f1)">🎨 Variants</ui-button>
        <ui-button class="sd-btn" onclick="SD.statusDialogs()" style="--c:var(--accent-red,#dc2626)">🚦 Status</ui-button>
        <ui-button class="sd-btn" onclick="SD.glassVariant()" style="--c:var(--accent-cyan,#0891b2)">🪟 Glass</ui-button>
        <ui-button class="sd-btn" onclick="SD.positions()" style="--c:#84cc16">📍 Positions</ui-button>
        <ui-button class="sd-btn" onclick="SD.animations()" style="--c:#f97316">✨ Animations</ui-button>

        <!-- Backdrop -->
        <ui-button class="sd-btn" onclick="SD.backdropBlur()" style="--c:#475569">🔵 Blur Backdrop</ui-button>
        <ui-button class="sd-btn" onclick="SD.backdropNone()" style="--c:#374151">🚫 No Backdrop</ui-button>

        <!-- Footer Actions -->
        <ui-button class="sd-btn" onclick="SD.withFooter()" style="--c:var(--accent-green,#059669)">✅ With Footer</ui-button>
        <ui-button class="sd-btn" onclick="SD.confirmDialog()" style="--c:var(--accent-yellow,#b45309)">⚠️ Confirm</ui-button>
        <ui-button class="sd-btn" onclick="SD.autoClose()" style="--c:#e11d48">⏱️ Auto-Close</ui-button>

        <!-- Advanced -->
        <ui-button class="sd-btn" onclick="SD.formDialog()" style="--c:var(--accent-indigo,#4f46e5)">📝 Form Dialog</ui-button>
        <ui-button class="sd-btn" onclick="SD.remember()" style="--c:#0f766e">💾 Remember Position</ui-button>
        <ui-button class="sd-btn" onclick="SD.nested()" style="--c:#9333ea">🪆 Nested Dialogs</ui-button>
        <ui-button class="sd-btn" onclick="SD.scrollable()" style="--c:#0284c7">📜 Scrollable Content</ui-button>
        <ui-button class="sd-btn" onclick="SD.icon()" style="--c:#ca8a04">🖼️ With Icon</ui-button>
        <ui-button class="sd-btn" onclick="SD.customSize()" style="--c:var(--accent-pink,#be185d)">📏 Custom Size</ui-button>
        <ui-button class="sd-btn" onclick="SD.kitchen()" style="--c:linear-gradient(135deg,#7c3aed,#db2777)">🍽️ Kitchen Sink</ui-button>
      </div>

      <style>
        .sd-btn {
          padding: 8px 16px;
          background: var(--c, #10b981);
          color: white;
          border: none;
          border-radius: 8px;
          cursor: pointer;
          font-weight: 600;
          font-size: 13px;
          transition: opacity .15s;
        }
        .sd-btn:hover { opacity: .85; }
        .sd-result {
          margin-top: 16px;
          padding: 12px 16px;
          background: rgba(59,130,246,.08);
          border: 1px solid rgba(59,130,246,.2);
          border-radius: 8px;
          font-size: 13px;
          color: var(--text-primary, #f1f5f9);
          min-height: 40px;
        }
      </style>

      <!-- Event log -->
      <div class="sd-result" id="sdEventLog">Events will appear here…</div>
    </div>
  `;

  // ── Helpers ──────────────────────────────────────────────────────────────

  let _uid = 0;
  const uid = () => `sd-demo-${++_uid}`;

  function log(msg) {
    const el = document.getElementById('sdEventLog');
    if (el) el.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
  }

  /**
   * Create a ui-smart-dialog element with the given attrs, append it to body,
   * open it, and clean it up when it closes.
   */
  function open(attrs = {}, slotHTML = '') {
    const id = attrs.id || uid();
    // Remove existing instance with the same id
    document.getElementById(id)?.remove();

    const el = document.createElement('ui-smart-dialog');
    el.id = id;

    Object.entries(attrs).forEach(([k, v]) => {
      if (v === false) return; // don't set boolean-false attrs
      if (v === true) el.setAttribute(k, '');
      else el.setAttribute(k, String(v));
    });

    if (slotHTML) el.innerHTML = slotHTML;

    // Attach shared event listeners
    el.addEventListener('sdOpen', () => log(`sdOpen  → #${id}`));
    el.addEventListener('sdClose', () => {
      log(`sdClose → #${id}`);
      el.remove();
    });
    el.addEventListener('sdMinimize', () => log(`sdMinimize → #${id}`));
    el.addEventListener('sdRestore', () => log(`sdRestore  → #${id}`));
    el.addEventListener('sdMaximize', e => log(`sdMaximize → #${id} maximized=${e.detail?.maximized}`));
    el.addEventListener('sdOk', () => log(`sdOk     → #${id}`));
    el.addEventListener('sdCancel', () => log(`sdCancel → #${id}`));

    // Set open attribute BEFORE appending so Stencil reads it during upgrade,
    // then append. This avoids the race where el.show() is called before the
    // Stencil component methods are fully initialised.
    el.setAttribute('open', '');
    document.body.appendChild(el);
    return el;
  }

  // ── Demos ─────────────────────────────────────────────────────────────────

  const SD = {
    basic() {
      open(
        {
          'dialog-title': 'Basic Dialog',
          'subtitle': 'This is a simple dialog with default settings',
          'show-minimize': false,
        },
        `<p style="padding:8px 0">Hello! This is a basic <strong>ui-smart-dialog</strong>. Press Escape or click outside to close.</p>`,
      );
    },

    minimize() {
      open(
        {
          'dialog-title': 'Minimizable Dialog',
          'subtitle': 'Click the — button to send to tray',
          'show-minimize': true,
          'show-maximize': true,
        },
        `<p style="padding:8px 0">Click the minimize (—) button to collapse this dialog to the bottom tray. Click the tray tab to restore.</p>`,
      );
    },

    multiMinimize() {
      ['Project Alpha', 'Project Beta', 'Project Gamma'].forEach((name, i) => {
        setTimeout(() => {
          const d = open(
            {
              'dialog-title': name,
              'show-minimize': true,
              'show-maximize': true,
              'position': 'center',
            },
            `<p style="padding:8px 0">This is <strong>${name}</strong>. Minimize all three to see Gmail-style tray stacking.</p>`,
          );
          // Auto-minimize after a brief delay so user can see them open
          if (i < 3) setTimeout(() => d.minimize(), 800 + i * 300);
        }, i * 400);
      });
      log('Opening 3 dialogs — they will auto-minimize to show tray stacking.');
    },

    draggable() {
      open(
        {
          'dialog-title': 'Draggable Dialog',
          'subtitle': 'Drag me around the screen',
          'draggable': true,
          'show-minimize': true,
        },
        `<p style="padding:8px 0">Grab the header and drag this dialog to any position on the screen.</p>`,
      );
    },

    resizable() {
      open(
        {
          'dialog-title': 'Draggable + Resizable',
          'subtitle': 'Drag to move, resize handle bottom-right',
          'draggable': true,
          'resizable': true,
          'show-minimize': true,
          'show-maximize': true,
          'size': 'sm',
        },
        `<p style="padding:8px 0">You can drag the dialog and resize it from the bottom-right corner.</p>`,
      );
    },

    maximizable() {
      open(
        {
          'dialog-title': 'Maximizable Dialog',
          'subtitle': 'Expand to full screen',
          'show-minimize': true,
          'show-maximize': true,
          'draggable': true,
        },
        `<p style="padding:8px 0">Click the maximize icon in the header to fill the screen. Click again to restore.</p>`,
      );
    },

    sizes() {
      ['xs', 'sm', 'md', 'lg', 'xl'].forEach((s, i) => {
        setTimeout(() => {
          open(
            {
              'dialog-title': `Size: ${s.toUpperCase()}`,
              'size': s,
              'show-minimize': true,
            },
            `<p style="padding:8px 0">This dialog uses <code>size="${s}"</code>.</p>`,
          );
        }, i * 180);
      });
    },

    variants() {
      ['default', 'glass', 'filled', 'minimal'].forEach((v, i) => {
        setTimeout(() => {
          open(
            {
              'dialog-title': `Variant: ${v}`,
              'variant': v,
              'show-minimize': true,
              'size': 'sm',
            },
            `<p style="padding:8px 0">This is the <strong>${v}</strong> variant.</p>`,
          );
        }, i * 200);
      });
    },

    statusDialogs() {
      const statuses = [
        { status: 'info', title: 'Information', msg: 'Here is some information for you.' },
        { status: 'success', title: 'Success!', msg: 'Your changes have been saved.' },
        { status: 'warning', title: 'Warning', msg: 'This action cannot be undone easily.' },
        { status: 'error', title: 'Error', msg: 'Something went wrong. Please try again.' },
      ];
      statuses.forEach(({ status, title, msg }, i) => {
        setTimeout(() => {
          open(
            {
              'dialog-title': title,
              status,
              'show-minimize': false,
              'size': 'xs',
              'ok-text': 'OK',
            },
            `<p style="padding:8px 0">${msg}</p>`,
          );
        }, i * 220);
      });
    },

    glassVariant() {
      open(
        {
          'dialog-title': 'Glass Dialog',
          'subtitle': 'Frosted blur effect',
          'variant': 'glass',
          'show-minimize': true,
          'show-maximize': true,
          'draggable': true,
        },
        `<p style="padding:8px 0">This dialog uses the glass variant with a frosted blur background.</p>`,
      );
    },

    positions() {
      const positions = ['top-left', 'top', 'top-right', 'center', 'bottom-left', 'bottom', 'bottom-right'];
      positions.forEach((pos, i) => {
        setTimeout(() => {
          open(
            {
              'dialog-title': pos,
              'position': pos,
              'size': 'xs',
              'show-minimize': true,
              'backdrop': 'none',
            },
            `<small style="display:block;padding:4px 0">position="${pos}"</small>`,
          );
        }, i * 100);
      });
    },

    animations() {
      const anims = ['scale', 'fade', 'slide-up', 'slide-down', 'flip'];
      let i = 0;
      function next() {
        if (i >= anims.length) return;
        const a = anims[i++];
        const d = open(
          {
            'dialog-title': `Animation: ${a}`,
            'animation': a,
            'size': 'xs',
            'ok-text': 'Next',
            'cancel-text': 'Done',
          },
          `<p style="padding:8px 0">Opened with <code>animation="${a}"</code>.</p>`,
        );
        d.addEventListener('sdOk', () => {
          d.hide();
          next();
        });
        d.addEventListener('sdCancel', () => d.hide());
      }
      next();
    },

    backdropBlur() {
      open(
        {
          'dialog-title': 'Blur Backdrop',
          'backdrop': 'blur',
          'show-minimize': true,
        },
        `<p style="padding:8px 0">The backdrop is blurred behind this dialog.</p>`,
      );
    },

    backdropNone() {
      open(
        {
          'dialog-title': 'No Backdrop',
          'backdrop': 'none',
          'show-minimize': true,
          'draggable': true,
          'size': 'sm',
          'position': 'top-right',
        },
        `<p style="padding:8px 0">No backdrop — the page is fully interactive behind this dialog.</p>`,
      );
    },

    withFooter() {
      open(
        {
          'dialog-title': 'Dialog with Footer',
          'subtitle': 'OK / Cancel buttons',
          'ok-text': 'Save',
          'cancel-text': 'Cancel',
          'show-minimize': true,
        },
        `<p style="padding:8px 0">Click <strong>Save</strong> to confirm or <strong>Cancel</strong> to dismiss.</p>`,
      );
    },

    confirmDialog() {
      const d = open(
        {
          'dialog-title': 'Delete Item?',
          'subtitle': 'This action cannot be undone',
          'status': 'warning',
          'size': 'xs',
          'ok-text': 'Delete',
          'cancel-text': 'Keep',
          'close-on-backdrop': false,
          'close-on-esc': false,
          'show-close': false,
          'show-minimize': false,
        },
        `<p style="padding:8px 0">Are you sure you want to permanently delete <strong>my-document.pdf</strong>?</p>`,
      );
      d.addEventListener('sdOk', () => {
        log('Confirmed: item deleted.');
        d.hide();
      });
    },

    autoClose() {
      [3000, 5000, 8000].forEach((ms, i) => {
        setTimeout(() => {
          open(
            {
              'dialog-title': `Auto-closes in ${ms / 1000}s`,
              'auto-close': ms,
              'size': 'xs',
              'show-minimize': false,
              'backdrop': 'none',
              'position': i === 0 ? 'top-right' : i === 1 ? 'top' : 'top-left',
            },
            `<small style="display:block;padding:4px 0">Closes automatically after ${ms / 1000} seconds.</small>`,
          );
        }, i * 200);
      });
    },

    formDialog() {
      const id = uid();
      const d = open(
        {
          id,
          'dialog-title': 'New Contact',
          'subtitle': 'Fill in the details below',
          'ok-text': 'Save Contact',
          'cancel-text': 'Cancel',
          'show-minimize': true,
          'size': 'sm',
        },
        `
        <div style="display:flex; flex-direction:column; gap:12px; padding:4px 0;">
          <ui-input label="Full Name" placeholder="John Doe" name="name"></ui-input>
          <ui-input label="Email" type="email" placeholder="john@example.com" name="email"></ui-input>
          <ui-input label="Phone" type="tel" placeholder="+1 555 000 0000" name="phone"></ui-input>
          <ui-dropdown label="Role" placeholder="Select role" name="role"
            options='[{"label":"Developer"},{"label":"Designer"},{"label":"Manager"}]'>
          </ui-dropdown>
        </div>
      `,
      );
      d.addEventListener('sdOk', () => {
        log('Form submitted successfully.');
        d.hide();
      });
    },

    remember() {
      const d = open(
        {
          'id': 'sd-remember-demo',
          'dialog-title': 'Remember Me',
          'subtitle': 'Position is saved to localStorage',
          'draggable': true,
          'resizable': true,
          'remember': true,
          'show-minimize': true,
          'show-maximize': true,
          'size': 'sm',
        },
        `<p style="padding:8px 0">Drag or resize this dialog, then close it. Reopen it — it will restore its last position and size.</p>`,
      );
    },

    nested() {
      const outer = open(
        {
          'dialog-title': 'Outer Dialog',
          'show-minimize': true,
          'ok-text': 'Open Inner',
          'cancel-text': 'Close',
        },
        `<p style="padding:8px 0">Click "Open Inner" to stack a second dialog on top.</p>`,
      );
      outer.addEventListener('sdOk', () => {
        const inner = open(
          {
            'dialog-title': 'Inner Dialog',
            'size': 'sm',
            'variant': 'glass',
            'ok-text': 'OK',
          },
          `<p style="padding:8px 0">This is a nested dialog on top of the outer one.</p>`,
        );
        inner.addEventListener('sdOk', () => inner.hide());
      });
    },

    scrollable() {
      const items = Array.from(
        { length: 40 },
        (_, i) => `<div style="padding:10px; border-bottom:1px solid rgba(255,255,255,.06);">Item ${i + 1} — Lorem ipsum dolor sit amet.</div>`,
      ).join('');
      open(
        {
          'dialog-title': 'Scrollable Content',
          'subtitle': '40 items inside',
          'show-minimize': true,
          'show-maximize': true,
          'size': 'sm',
        },
        `<div>${items}</div>`,
      );
    },

    icon() {
      open(
        {
          'dialog-title': 'With Icon',
          'subtitle': 'Dialog has a header icon',
          'icon': 'message-square',
          'show-minimize': true,
          'ok-text': 'Got it',
        },
        `<p style="padding:8px 0">This dialog displays a Lucide icon next to the title in the header.</p>`,
      );
    },

    customSize() {
      open(
        {
          'dialog-title': 'Custom 700 × 300',
          'size': 'custom',
          'width': '700px',
          'height': '300px',
          'show-minimize': true,
          'draggable': true,
        },
        `<p style="padding:8px 0">This dialog uses <code>size="custom"</code> with <code>width="700px"</code> and <code>height="300px"</code>.</p>`,
      );
    },

    kitchen() {
      open(
        {
          'dialog-title': 'Kitchen Sink',
          'subtitle': 'Every feature enabled',
          'icon': 'zap',
          'variant': 'glass',
          'animation': 'slide-up',
          'draggable': true,
          'resizable': true,
          'show-minimize': true,
          'show-maximize': true,
          'backdrop': 'blur',
          'ok-text': 'Save',
          'cancel-text': 'Discard',
          'size': 'md',
          'remember': true,
          'id': 'sd-kitchen-sink',
        },
        `
        <div style="display:flex; flex-direction:column; gap:12px; padding:4px 0;">
          <p>All major features active: glass variant, blur backdrop, drag/resize, minimize, maximize, remember, animated entry.</p>
          <ui-input label="Notes" placeholder="Type something…"></ui-input>
        </div>
      `,
      );
    },
  };

  // Expose on window for onclick handlers
  window.SD = SD;
}
