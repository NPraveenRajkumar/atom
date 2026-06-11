export function initDocumentationDemo() {
  const section = document.getElementById('documentation');
  if (!section) return;

  section.innerHTML = `
    <div style="padding:40px 32px; max-width:860px; margin:0 auto; font-family:inherit;">

      <!-- Header -->
      <div style="margin-bottom:40px;">
        <div style="display:flex; align-items:center; gap:12px; margin-bottom:8px;">
          <span style="font-size:2rem;">🚀</span>
          <h1 style="font-size:2rem; font-weight:800; margin:0; color:var(--text-primary,#0f172a);">Installation</h1>
          <span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:999px; background:var(--accent-green-soft,#dcfce7); color:var(--accent-green,#15803d); border:1px solid #bbf7d0;">v0.0.1 — latest</span>
        </div>
        <p style="font-size:15px; color:var(--text-secondary,#64748b); margin:0; line-height:1.7;">
          App UI is a <strong>Stencil.js</strong> web-component library — framework-agnostic, tree-shakable, and zero runtime dependencies.
        </p>
      </div>

      <!-- Prerequisites -->
      <div style="margin-bottom:36px;">
        <h2 style="font-size:1.1rem; font-weight:700; margin:0 0 14px; color:var(--text-primary,#0f172a); display:flex; align-items:center; gap:8px;">
          <span style="width:20px; height:20px; border-radius:4px; background:var(--accent-yellow,#f59e0b); display:inline-flex; align-items:center; justify-content:center; font-size:11px;">⚡</span>
          Prerequisites
        </h2>
        <div style="display:grid; grid-template-columns:repeat(auto-fill,minmax(200px,1fr)); gap:12px;">
          ${[
            { icon: '🟢', name: 'Node.js', version: '≥ 18.0', note: 'LTS recommended', ok: true },
            { icon: '📦', name: 'npm', version: '≥ 9.0', note: 'or yarn ≥ 1.22', ok: true },
            { icon: '🌐', name: 'Browser', version: 'Evergreen', note: 'Chrome, Firefox, Edge, Safari', ok: true },
            { icon: '🔷', name: 'TypeScript', version: '≥ 5.0', note: 'optional but recommended', ok: false },
          ].map(p => `
            <div style="padding:14px 16px; border-radius:10px; background:var(--bg-surface,#f8fafc); border:1px solid var(--border,#e2e8f0); display:flex; gap:12px; align-items:flex-start;">
              <span style="font-size:1.4rem; line-height:1;">${p.icon}</span>
              <div>
                <p style="margin:0; font-size:13px; font-weight:700; color:var(--text-primary,#0f172a);">${p.name}</p>
                <p style="margin:2px 0 0; font-size:12px; color:var(--text-secondary,#64748b);">${p.version}</p>
                <p style="margin:2px 0 0; font-size:11px; color:${p.ok ? '#16a34a' : '#94a3b8'};">${p.note}</p>
              </div>
            </div>
          `).join('')}
        </div>
      </div>

      <!-- Install commands -->
      <div style="margin-bottom:36px;">
        <h2 style="font-size:1.1rem; font-weight:700; margin:0 0 14px; color:var(--text-primary,#0f172a); display:flex; align-items:center; gap:8px;">
          <span style="width:20px; height:20px; border-radius:4px; background:var(--accent-blue,#3b82f6); display:inline-flex; align-items:center; justify-content:center; font-size:11px; color:#fff;">📥</span>
          Install
        </h2>
        ${[
          { label: 'npm', color: '#dc2626', cmd: 'npm install atomicuilibrary' },
          { label: 'yarn', color: '#2563eb', cmd: 'yarn add atomicuilibrary' },
          { label: 'pnpm', color: '#f59e0b', cmd: 'pnpm add atomicuilibrary' },
        ].map(t => `
          <div style="margin-bottom:10px;">
            <div style="display:flex; align-items:center; gap:8px; margin-bottom:6px;">
              <span style="font-size:11px; font-weight:700; padding:2px 8px; border-radius:4px; background:${t.color}22; color:${t.color};">${t.label}</span>
            </div>
            <div style="position:relative; background:#0f172a; border-radius:8px; padding:14px 48px 14px 18px; border:1px solid #1e293b; display:flex; align-items:center; gap:8px; font-family:'Courier New',monospace; font-size:13px;">
              <span style="color:#4ade80;">$</span>
              <span style="color:#e2e8f0;">${t.cmd}</span>
              <button onclick="navigator.clipboard.writeText('${t.cmd}')" title="Copy" style="position:absolute; right:10px; top:50%; transform:translateY(-50%); background:transparent; border:none; cursor:pointer; opacity:0.5; font-size:14px; padding:4px;">📋</button>
            </div>
          </div>
        `).join('')}
      </div>

      <!-- Framework Setup -->
      <div style="margin-bottom:36px;">
        <h2 style="font-size:1.1rem; font-weight:700; margin:0 0 14px; color:var(--text-primary,#0f172a); display:flex; align-items:center; gap:8px;">
          <span style="width:20px; height:20px; border-radius:4px; background:var(--accent-purple,#8b5cf6); display:inline-flex; align-items:center; justify-content:center; font-size:11px; color:#fff;">🔌</span>
          Framework Setup
        </h2>
        <!-- Tabs -->
        <div id="doc-fw-tabs" style="display:flex; gap:4px; margin-bottom:0; border-bottom:2px solid #e2e8f0; padding-bottom:0;">
          ${['Vanilla JS','React','Angular','Vue'].map((fw,i) => `
            <button data-fw="${fw}" onclick="docShowFw(this)" style="padding:7px 16px; font-size:12px; font-weight:600; border:none; background:transparent; cursor:pointer; border-bottom:2px solid ${i===0?'#3b82f6':'transparent'}; margin-bottom:-2px; color:${i===0?'#2563eb':'#64748b'}; transition:all .2s;">${fw}</button>
          `).join('')}
        </div>
        <div id="doc-fw-content" style="background:#0f172a; border-radius:0 0 10px 10px; padding:20px 22px; font-family:'Courier New',monospace; font-size:12px; line-height:2; color:#e2e8f0; border:1px solid #1e293b; border-top:none;">
          <div id="doc-fw-Vanilla JS">
            <span style="color:var(--text-secondary,#64748b);">// 1. Import styles</span><br>
            <span style="color:#86efac;">import</span> <span style="color:#fbbf24;">'atomicuilibrary/dist/atomicuilibrary/atomicuilibrary.css'</span>;<br><br>
            <span style="color:var(--text-secondary,#64748b);">// 2. Register web components</span><br>
            <span style="color:#86efac;">import</span> { <span style="color:#7dd3fc;">defineCustomElements</span> } <span style="color:#86efac;">from</span> <span style="color:#fbbf24;">'atomicuilibrary/loader'</span>;<br>
            <span style="color:#7dd3fc;">defineCustomElements</span>();<br><br>
            <span style="color:var(--text-secondary,#64748b);">// 3. Use in HTML</span><br>
            <span style="color:#f87171;">&lt;ui-button</span> <span style="color:#86efac;">variant</span>=<span style="color:#fbbf24;">"primary"</span><span style="color:#f87171;">&gt;</span>Click me<span style="color:#f87171;">&lt;/ui-button&gt;</span>
          </div>
          <div id="doc-fw-React" style="display:none;">
            <span style="color:var(--text-secondary,#64748b);">// main.tsx</span><br>
            <span style="color:#86efac;">import</span> <span style="color:#fbbf24;">'atomicuilibrary/dist/atomicuilibrary/atomicuilibrary.css'</span>;<br>
            <span style="color:#86efac;">import</span> { <span style="color:#7dd3fc;">applyPolyfills</span>, <span style="color:#7dd3fc;">defineCustomElements</span> } <span style="color:#86efac;">from</span> <span style="color:#fbbf24;">'atomicuilibrary/loader'</span>;<br>
            <span style="color:#7dd3fc;">applyPolyfills</span>().<span style="color:#7dd3fc;">then</span>(() => <span style="color:#7dd3fc;">defineCustomElements</span>());<br><br>
            <span style="color:var(--text-secondary,#64748b);">// Component.tsx — declare module for JSX</span><br>
            <span style="color:#86efac;">declare</span> <span style="color:#7dd3fc;">namespace</span> JSX {<br>
            &nbsp;&nbsp;<span style="color:#86efac;">interface</span> <span style="color:#7dd3fc;">IntrinsicElements</span> { [elem: <span style="color:#fbbf24;">string</span>]: any }<br>
            }<br><br>
            <span style="color:#86efac;">export default function</span> <span style="color:#7dd3fc;">App</span>() {<br>
            &nbsp;&nbsp;<span style="color:#86efac;">return</span> &lt;<span style="color:#f87171;">ui-button</span> <span style="color:#86efac;">variant</span>=<span style="color:#fbbf24;">"primary"</span>&gt;Click me&lt;/<span style="color:#f87171;">ui-button</span>&gt;;<br>
            }
          </div>
          <div id="doc-fw-Angular" style="display:none;">
            <span style="color:var(--text-secondary,#64748b);">// app.module.ts</span><br>
            <span style="color:#86efac;">import</span> { <span style="color:#7dd3fc;">NgModule</span>, <span style="color:#7dd3fc;">CUSTOM_ELEMENTS_SCHEMA</span> } <span style="color:#86efac;">from</span> <span style="color:#fbbf24;">'@angular/core'</span>;<br>
            <span style="color:#86efac;">import</span> { <span style="color:#7dd3fc;">defineCustomElements</span> } <span style="color:#86efac;">from</span> <span style="color:#fbbf24;">'atomicuilibrary/loader'</span>;<br>
            <span style="color:#7dd3fc;">defineCustomElements</span>();<br><br>
            <span style="color:#7dd3fc;">@NgModule</span>({<br>
            &nbsp;&nbsp;schemas: [<span style="color:#7dd3fc;">CUSTOM_ELEMENTS_SCHEMA</span>],<br>
            &nbsp;&nbsp;<span style="color:var(--text-secondary,#64748b);">// ...</span><br>
            })<br>
            <span style="color:#86efac;">export class</span> <span style="color:#7dd3fc;">AppModule</span> {}
          </div>
          <div id="doc-fw-Vue" style="display:none;">
            <span style="color:var(--text-secondary,#64748b);">// main.ts</span><br>
            <span style="color:#86efac;">import</span> <span style="color:#fbbf24;">'atomicuilibrary/dist/atomicuilibrary/atomicuilibrary.css'</span>;<br>
            <span style="color:#86efac;">import</span> { <span style="color:#7dd3fc;">defineCustomElements</span> } <span style="color:#86efac;">from</span> <span style="color:#fbbf24;">'atomicuilibrary/loader'</span>;<br>
            <span style="color:#7dd3fc;">defineCustomElements</span>();<br><br>
            <span style="color:var(--text-secondary,#64748b);">// vite.config.ts — suppress web component warnings</span><br>
            <span style="color:#86efac;">export default</span> <span style="color:#7dd3fc;">defineConfig</span>({<br>
            &nbsp;&nbsp;plugins: [<span style="color:#7dd3fc;">vue</span>({<br>
            &nbsp;&nbsp;&nbsp;&nbsp;template: { compilerOptions: { isCustomElement: t => t.startsWith(<span style="color:#fbbf24;">'ui-'</span>) } }<br>
            &nbsp;&nbsp;})]<br>
            });
          </div>
        </div>
      </div>

      <!-- Supported versions table -->
      <div style="margin-bottom:36px;">
        <h2 style="font-size:1.1rem; font-weight:700; margin:0 0 14px; color:var(--text-primary,#0f172a); display:flex; align-items:center; gap:8px;">
          <span style="width:20px; height:20px; border-radius:4px; background:#22c55e; display:inline-flex; align-items:center; justify-content:center; font-size:11px; color:#fff;">✓</span>
          Supported Versions
        </h2>
        <div style="overflow-x:auto; border-radius:10px; border:1px solid var(--border-default,#e2e8f0);">
          <table style="width:100%; border-collapse:collapse; font-size:13px;">
            <thead>
              <tr style="background:var(--bg-tertiary,#f1f5f9);">
                <th style="text-align:left; padding:10px 16px; font-weight:700; color:#475569; border-bottom:1px solid var(--border-default,#e2e8f0);">Version</th>
                <th style="text-align:left; padding:10px 16px; font-weight:700; color:#475569; border-bottom:1px solid var(--border-default,#e2e8f0);">Release</th>
                <th style="text-align:left; padding:10px 16px; font-weight:700; color:#475569; border-bottom:1px solid var(--border-default,#e2e8f0);">Status</th>
                <th style="text-align:left; padding:10px 16px; font-weight:700; color:#475569; border-bottom:1px solid var(--border-default,#e2e8f0);">Node</th>
                <th style="text-align:left; padding:10px 16px; font-weight:700; color:#475569; border-bottom:1px solid var(--border-default,#e2e8f0);">Stencil</th>
                <th style="text-align:left; padding:10px 16px; font-weight:700; color:#475569; border-bottom:1px solid var(--border-default,#e2e8f0);">Changelog</th>
              </tr>
            </thead>
            <tbody>
              ${[
                { ver:'0.0.1', date:'May 2025',  status:'active',        node:'≥ 18', stencil:'4.x', link:'#' },
                { ver:'0.0.1-beta', date:'Mar 2025', status:'maintenance', node:'≥ 16', stencil:'4.x', link:'#' },
                { ver:'0.0.1-alpha', date:'Jan 2025', status:'eol',       node:'≥ 16', stencil:'3.x', link:'#' },
              ].map((r,i) => {
                const statusMap = {
                  active:      { label:'✅ Active',       bg:'#f0fdf4', color:'#15803d', border:'#bbf7d0' },
                  maintenance: { label:'🔧 Maintenance',  bg:'#fffbeb', color:'#b45309', border:'#fde68a' },
                  eol:         { label:'🔴 End of Life',  bg:'#fff1f2', color:'#b91c1c', border:'#fecaca' },
                };
                const s = statusMap[r.status];
                return `
                  <tr style="background:${i%2===1?'#f8fafc':'white'}; border-bottom:1px solid #f1f5f9;">
                    <td style="padding:10px 16px; font-weight:700; color:var(--text-primary,#0f172a); font-family:'Courier New',monospace;">${r.ver}</td>
                    <td style="padding:10px 16px; color:var(--text-secondary,#64748b);">${r.date}</td>
                    <td style="padding:10px 16px;">
                      <span style="font-size:11px; font-weight:700; padding:3px 10px; border-radius:999px; background:${s.bg}; color:${s.color}; border:1px solid ${s.border};">${s.label}</span>
                    </td>
                    <td style="padding:10px 16px; color:var(--text-secondary,#64748b); font-family:monospace;">${r.node}</td>
                    <td style="padding:10px 16px; color:var(--text-secondary,#64748b); font-family:monospace;">${r.stencil}</td>
                    <td style="padding:10px 16px;">
                      <a href="${r.link}" style="font-size:12px; color:var(--accent-blue,#3b82f6); text-decoration:none; font-weight:600;">View →</a>
                    </td>
                  </tr>`;
              }).join('')}
            </tbody>
          </table>
        </div>
      </div>

      <!-- Older versions -->
      <div style="margin-bottom:36px;">
        <h2 style="font-size:1.1rem; font-weight:700; margin:0 0 14px; color:var(--text-primary,#0f172a); display:flex; align-items:center; gap:8px;">
          <span style="width:20px; height:20px; border-radius:4px; background:#64748b; display:inline-flex; align-items:center; justify-content:center; font-size:11px; color:#fff;">📂</span>
          Older Versions
        </h2>
        <div style="padding:16px 20px; background:var(--bg-secondary,#f8fafc); border-radius:10px; border:1px solid var(--border-default,#e2e8f0); display:flex; flex-direction:column; gap:10px;">
          <p style="margin:0; font-size:13px; color:var(--text-secondary,#64748b); line-height:1.6;">
            Older releases are still available on npm and GitHub. We recommend upgrading to the latest version for security patches and new features.
          </p>
          <div style="display:flex; flex-wrap:wrap; gap:10px; margin-top:4px;">
            <a href="https://www.npmjs.com/package/atomicuilibrary?activeTab=versions" target="_blank"
               style="display:inline-flex; align-items:center; gap:6px; padding:7px 14px; font-size:12px; font-weight:600; border-radius:8px; background:#fff; border:1px solid var(--border-default,#e2e8f0); color:var(--text-primary,#0f172a); text-decoration:none; box-shadow:0 1px 3px rgba(0,0,0,0.06);">
              📦 All versions on npm
            </a>
            <a href="https://github.com/kmn/atomicUILibrary/releases" target="_blank"
               style="display:inline-flex; align-items:center; gap:6px; padding:7px 14px; font-size:12px; font-weight:600; border-radius:8px; background:#fff; border:1px solid var(--border-default,#e2e8f0); color:var(--text-primary,#0f172a); text-decoration:none; box-shadow:0 1px 3px rgba(0,0,0,0.06);">
              🏷️ GitHub Releases
            </a>
            <a href="https://github.com/kmn/atomicUILibrary/blob/main/CHANGELOG.md" target="_blank"
               style="display:inline-flex; align-items:center; gap:6px; padding:7px 14px; font-size:12px; font-weight:600; border-radius:8px; background:#fff; border:1px solid var(--border-default,#e2e8f0); color:var(--text-primary,#0f172a); text-decoration:none; box-shadow:0 1px 3px rgba(0,0,0,0.06);">
              📝 Changelog
            </a>
          </div>
          <div style="margin-top:6px; padding:12px 16px; background:var(--accent-yellow-soft,#fffbeb); border-radius:8px; border:1px solid #fde68a; font-size:12px; color:var(--accent-yellow,#92400e); display:flex; gap:8px;">
            <span>⚠️</span>
            <span>Versions <strong>0.0.1-alpha</strong> and below have reached <strong>End of Life</strong> and no longer receive security updates. Please migrate to v0.0.1.</span>
          </div>
        </div>
      </div>

      <!-- CDN -->
      <div style="margin-bottom:36px;">
        <h2 style="font-size:1.1rem; font-weight:700; margin:0 0 14px; color:var(--text-primary,#0f172a); display:flex; align-items:center; gap:8px;">
          <span style="width:20px; height:20px; border-radius:4px; background:#06b6d4; display:inline-flex; align-items:center; justify-content:center; font-size:11px; color:#fff;">🌐</span>
          CDN (Quick Prototype)
        </h2>
        <div style="background:#0f172a; border-radius:10px; padding:18px 22px; font-family:'Courier New',monospace; font-size:12px; line-height:1.9; color:#e2e8f0; overflow-x:auto; border:1px solid #1e293b;">
          <span style="color:var(--text-secondary,#64748b);">&lt;!-- Styles --&gt;</span><br>
          <span style="color:#f87171;">&lt;link</span> <span style="color:#86efac;">rel</span>=<span style="color:#fbbf24;">"stylesheet"</span> <span style="color:#86efac;">href</span>=<span style="color:#fbbf24;">"https://unpkg.com/atomicuilibrary/dist/atomicuilibrary/atomicuilibrary.css"</span><span style="color:#f87171;">/&gt;</span><br><br>
          <span style="color:var(--text-secondary,#64748b);">&lt;!-- ES Module --&gt;</span><br>
          <span style="color:#f87171;">&lt;script</span> <span style="color:#86efac;">type</span>=<span style="color:#fbbf24;">"module"</span><br>
          &nbsp;&nbsp;<span style="color:#86efac;">src</span>=<span style="color:#fbbf24;">"https://unpkg.com/atomicuilibrary/dist/atomicuilibrary/atomicuilibrary.esm.js"</span><span style="color:#f87171;">&gt;&lt;/script&gt;</span>
        </div>
      </div>

    </div>
  `;

  // Framework tab switcher
  window.docShowFw = function(btn) {
    const fw = btn.getAttribute('data-fw');
    document.querySelectorAll('#doc-fw-content > div').forEach(p => p.style.display = 'none');
    document.getElementById('doc-fw-' + fw).style.display = '';
    document.querySelectorAll('#doc-fw-tabs button').forEach(b => {
      const on = b.getAttribute('data-fw') === fw;
      b.style.borderBottomColor = on ? '#3b82f6' : 'transparent';
      b.style.color = on ? '#2563eb' : '#64748b';
    });
  };
}
