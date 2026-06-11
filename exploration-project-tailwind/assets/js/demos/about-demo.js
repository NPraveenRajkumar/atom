// About Demo / Info Page
export function initAboutDemo() {
  const section = document.getElementById('about');
  if (!section) return;

  section.innerHTML = `
    <div style="background-color:var(--bg-primary,white); border-radius: 12px; padding: 40px; box-shadow: 0 4px 20px rgba(0, 0, 0, 0.05); max-width: 900px; margin: 0 auto;">
      <div style="text-align: center; margin-bottom: 40px;">
        <h1 style="font-size: 2.5rem; color:var(--text-primary,#1e293b); margin-bottom: 10px;">Modern UI Kit</h1>
        <p style="font-size: 1.1rem; color:var(--text-secondary,#64748b);">A comprehensive library of high-performance Stencil.js components.</p>
        <div style="display: flex; justify-content: center; gap: 15px; margin-top: 20px;">
          <ui-pill label="v2.4.0" color="info" variant="outline"></ui-pill>
          <ui-pill label="Production Ready" color="success" variant="outline"></ui-pill>
          <ui-pill label="Open Source" color="danger" variant="outline"></ui-pill>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 30px; margin-bottom: 50px;">
        <div style="padding: 20px; border:1px solid var(--border-default,#e2e8f0); border-radius: 8px;">
           <div style="font-size: 24px; margin-bottom: 10px;">⚡</div>
           <h3 style="margin-bottom: 8px;">High Performance</h3>
           <p style="color:var(--text-secondary,#64748b); font-size: 14px; line-height: 1.6;">Built with Stencil.js for near-native performance and tiny bundle sizes.</p>
        </div>
        <div style="padding: 20px; border:1px solid var(--border-default,#e2e8f0); border-radius: 8px;">
           <div style="font-size: 24px; margin-bottom: 10px;">🎨</div>
           <h3 style="margin-bottom: 8px;">Themeable</h3>
           <p style="color:var(--text-secondary,#64748b); font-size: 14px; line-height: 1.6;">Full CSS Variable support for deep customization and dark mode out of the box.</p>
        </div>
        <div style="padding: 20px; border:1px solid var(--border-default,#e2e8f0); border-radius: 8px;">
           <div style="font-size: 24px; margin-bottom: 10px;">🧩</div>
           <h3 style="margin-bottom: 8px;">Framework Agnostic</h3>
           <p style="color:var(--text-secondary,#64748b); font-size: 14px; line-height: 1.6;">Works with React, Vue, Angular, or plain HTML/JS without overhead.</p>
        </div>
      </div>

      <div style="background-color:var(--bg-secondary,#f8fafc); border-radius: 8px; padding: 30px; border-left: 4px solid #10b981;">
        <h4 style="margin-bottom: 15px;">Quick Start Guide</h4>
        <div style="background: #1e293b; color: #e2e8f0; padding: 15px; border-radius: 6px; font-family: monospace; font-size: 13px; margin-bottom: 20px;">
          npm install @company/ui-kit<br><br>
          import { defineCustomElements } from '@company/ui-kit/loader';<br>
          defineCustomElements();
        </div>
        <ui-button id="exploreBtn" label="Start Exploring Components" color="success" variant="outline"></ui-button>
      </div>

      <footer style="margin-top: 50px; text-align: center; border-top:1px solid var(--border-default,#e2e8f0); padding-top: 20px;">
        <p style="color:var(--text-secondary,#64748b); font-size: 12px;">© 2024 Modern UI Systems. All rights reserved.</p>
      </footer>
    </div>
  `;

  setTimeout(() => {
    document.getElementById('exploreBtn')?.addEventListener('click', () => {
      if (typeof window.showSection === 'function') {
        window.showSection('home');
      }
    });
  }, 50);
}
}
