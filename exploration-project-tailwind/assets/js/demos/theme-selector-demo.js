// Theme Selector Demo Functions
export function initThemeSelectorDemo() {
  const section = document.getElementById('theme-selector');
  if (!section) return;

  section.innerHTML = `
    
    <p>Switch between light and dark themes to customize the appearance of your application.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 12px; flex-wrap: wrap;">
      <ui-button id="btnThemeOptions" label="Theme Options" variant="outline"></ui-button>
      <ui-button id="btnThemePreview" label="Theme Preview" variant="outline"></ui-button>
      <ui-button id="btnThemeCustomization" label="Customization" variant="outline"></ui-button>
      <ui-button id="btnInteractiveTheme" label="🎮 Interactive Playground" variant="outline"></ui-button>
    </div>

    <div id="themeDemoContainer" style="margin-top: 20px;"></div>
  `;

  document.getElementById('btnThemeOptions').addEventListener('click', () => window.showThemeOptions());
  document.getElementById('btnThemePreview').addEventListener('click', () => window.showThemePreview());
  document.getElementById('btnThemeCustomization').addEventListener('click', () => window.showThemeCustomization());
  document.getElementById('btnInteractiveTheme').addEventListener('click', () => window.showInteractiveTheme());

  setTimeout(() => {
    const themeContainer = document.getElementById('themeDemoContainer');
    if (!themeContainer) return;

    window.showThemeOptions = function () {
      const currentTheme = document.documentElement.className || 'light';

      themeContainer.innerHTML = `
        <div class="demo-block">
          <h3>Available Themes</h3>
          <p style="color: #6b7280; margin-bottom: 20px;">Select a theme to apply it globally to the application.</p>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
            <!-- Light Theme Card -->
            <div onclick="applyTheme('light')" 
              style="padding: 24px; border-radius: 16px; border: 2px solid ${currentTheme === 'light' ? '#10b981' : '#e5e7eb'}; 
              background: linear-gradient(135deg, #ffffff 0%, #f9fafb 100%); cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: ${currentTheme === 'light' ? '0 10px 25px -5px rgba(16, 185, 129, 0.2)' : '0 4px 6px -1px rgba(0,0,0,0.1)'};"
              onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.1)';"
              onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='${currentTheme === 'light' ? '0 10px 25px -5px rgba(16, 185, 129, 0.2)' : '0 4px 6px -1px rgba(0,0,0,0.1)'}';">
              
              <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
                <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #60a5fa 0%, #10b981 100%); display: flex; align-items: center; justify-content: center; font-size: 24px;">
                  ☀️
                </div>
                <div>
                  <h4 style="margin: 0; font-size: 20px; color: #1f2937; font-weight: 600;">Light Theme</h4>
                  <p style="margin: 4px 0 0; font-size: 13px; color: #6b7280;">Default clean interface</p>
                </div>
              </div>
              
              <p style="color: #6b7280; font-size: 15px; line-height: 1.5; margin: 0 0 16px;">Optimal for daytime use with high readability and a fresh, professional look.</p>
              
              <div style="display: flex; gap: 10px; margin-top: 16px;">
                <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--bg-primary,#ffffff); border:1px solid var(--border-default,#e5e7eb);"></div>
                <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--bg-secondary,#f9fafb); border:1px solid var(--border-default,#e5e7eb);"></div>
                <div style="width: 32px; height: 32px; border-radius: 8px; background: #10b981;"></div>
                <div style="width: 32px; height: 32px; border-radius: 8px; background: #1f2937;"></div>
              </div>
              
              ${currentTheme === 'light' ? '<div style="margin-top: 16px; padding: 10px; background: #ecfdf5; border-radius: 10px; text-align: center; font-size: 13px; color:var(--accent-green,#059669); font-weight: 600;">✓ Currently Active</div>' : ''}
            </div>

            <!-- Dark Theme Card -->
            <div onclick="applyTheme('dark')" 
              style="padding: 24px; border-radius: 16px; border: 2px solid ${currentTheme === 'dark' ? '#10b981' : '#374151'}; 
              background: linear-gradient(135deg, #1f2937 0%, #111827 100%); cursor: pointer; transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
              box-shadow: ${currentTheme === 'dark' ? '0 10px 25px -5px rgba(16, 185, 129, 0.3)' : '0 4px 6px -1px rgba(0,0,0,0.3)'};"
              onmouseover="this.style.transform='translateY(-6px)'; this.style.boxShadow='0 20px 25px -5px rgba(0,0,0,0.4)';"
              onmouseout="this.style.transform='translateY(0)'; this.style.boxShadow='${currentTheme === 'dark' ? '0 10px 25px -5px rgba(16, 185, 129, 0.3)' : '0 4px 6px -1px rgba(0,0,0,0.3)'}';">
              
              <div style="display: flex; align-items: center; gap: 16px; margin-bottom: 16px;">
                <div style="width: 48px; height: 48px; border-radius: 12px; background: linear-gradient(135deg, #6366f1 0%, #4f46e5 100%); display: flex; align-items: center; justify-content: center; font-size: 24px;">
                  🌙
                </div>
                <div>
                  <h4 style="margin: 0; font-size: 20px; color: #f9fafb; font-weight: 600;">Dark Theme</h4>
                  <p style="margin: 4px 0 0; font-size: 13px; color: #9ca3af;">Premium night mode</p>
                </div>
              </div>
              
              <p style="color: #9ca3af; font-size: 15px; line-height: 1.5; margin: 0 0 16px;">Reduced eye strain with deep contrast, perfect for low-light environments.</p>
              
              <div style="display: flex; gap: 10px; margin-top: 16px;">
                <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--bg-secondary,#f8fafc); border: 1px solid #374151;"></div>
                <div style="width: 32px; height: 32px; border-radius: 8px; background: #1f2937; border: 1px solid #374151;"></div>
                <div style="width: 32px; height: 32px; border-radius: 8px; background: #10b981;"></div>
                <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--accent-indigo,#6366f1);"></div>
              </div>
              
              ${currentTheme === 'dark' ? '<div style="margin-top: 16px; padding: 10px; background: rgba(16, 185, 129, 0.15); border-radius: 10px; text-align: center; font-size: 13px; color: #10b981; font-weight: 600;">✓ Currently Active</div>' : ''}
            </div>
          </div>
          
          <div style="margin-top: 32px; padding: 20px; background-color: #f0f9ff; border-radius: 12px; border: 1px solid #bfdbfe; display: flex; align-items: flex-start; gap: 16px;">
            <div style="font-size: 24px;">💡</div>
            <div>
              <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 15px; font-weight: 500;">Tip</p>
              <p style="margin: 4px 0 0; color:var(--accent-blue,#1e40af); font-size: 14px; opacity: 0.8;">Your theme preference is saved automatically and will persist across browser sessions.</p>
            </div>
          </div>
        </div>
      `;
    };

    window.showThemePreview = function () {
      const currentTheme = document.documentElement.className || 'light';

      themeContainer.innerHTML = `
        <div class="demo-block">
          <h3>Theme Preview</h3>
          <p style="color: #6b7280; margin-bottom: 24px;">Preview how components look in different themes before applying.</p>
          
          <div style="display: flex; gap: 12px; margin-bottom: 24px;">
            <ui-button id="btnPreviewLight" label="☀️ Light Preview" color="${currentTheme === 'light' ? 'success' : 'neutral'}" variant="outline"></ui-button>
            <ui-button id="btnPreviewDark" label="🌙 Dark Preview" color="${currentTheme === 'dark' ? 'success' : 'neutral'}" variant="outline"></ui-button>
          </div>
          
          <div id="themePreviewContent" style="padding: 40px; border-radius: 20px; background-color: #f9fafb; border: 2px solid #e5e7eb; transition: all 0.4s ease;">
            <h4 style="margin: 0 0 24px; color: #1f2937; font-size: 20px;">Component Examples</h4>
            
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 20px;">
              <ui-badge label="Success" variant="filled" color="success"></ui-badge>
              <ui-badge label="Primary" variant="filled" color="primary"></ui-badge>
              <ui-badge label="Warning" variant="outlined" color="warning"></ui-badge>
              <ui-badge label="Danger" variant="outlined" color="danger"></ui-badge>
            </div>
            
            <div style="margin-top: 32px; display: flex; gap: 12px; flex-wrap: wrap;">
              <ui-chip label="Technology" icon="💻" removable="true" color="primary"></ui-chip>
              <ui-chip label="Design" icon="🎨" removable="true" color="success"></ui-chip>
              <ui-chip label="Innovation" icon="💡" removable="true" color="warning"></ui-chip>
            </div>
            
            <div style="margin-top: 32px;">
              <ui-card>
                <h5 slot="header" style="margin: 0; font-size: 18px;">Automated Discovery</h5>
                <p style="margin: 0; color: #6b7280; line-height: 1.6;">This is how a card component looks in the chosen theme. Notice how shadows and borders adapt.</p>
                <div slot="footer" style="display: flex; gap: 12px;">
                  <ui-button label="Action" color="success" size="md"ui-button>
                  <ui-button label="Cancel" color="neutral" variant="outlined" size="md"ui-button>
                </div>
              </ui-card>
            </div>
          </div>
        </div>
      `;

      document.getElementById('btnPreviewLight').addEventListener('click', () => window.previewTheme('light'));
      document.getElementById('btnPreviewDark').addEventListener('click', () => window.previewTheme('dark'));
    };

    window.showThemeCustomization = function () {
      themeContainer.innerHTML = `
        <div class="demo-block">
          <h3>Theme Customization</h3>
          <p style="color: #6b7280; margin-bottom: 24px;">Fine-tune your visual experience with these personalization settings.</p>
          
          <div style="background-color:var(--bg-primary,white); padding: 32px; border-radius: 16px; border:1px solid var(--border-default,#e5e7eb); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05);">
            <h4 style="margin: 0 0 24px; color: #1f2937; font-weight: 600; font-size: 18px;">Accessibility & Preferences</h4>
            
            <div style="display: flex; flex-direction: column; gap: 20px;">
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #f9fafb; border-radius: 12px; border:1px solid var(--border-subtle,#f1f5f9);">
                <div>
                  <h5 style="margin: 0 0 4px; color: #1f2937; font-size: 16px;">Auto Theme Switching</h5>
                  <p style="margin: 0; font-size: 14px; color:var(--text-secondary,#64748b);">Sync appearance with your system settings</p>
                </div>
                <ui-checkbox id="autoTheme" label=""></ui-checkbox>
              </div>
              
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #f9fafb; border-radius: 12px; border:1px solid var(--border-subtle,#f1f5f9);">
                <div>
                  <h5 style="margin: 0 0 4px; color: #1f2937; font-size: 16px;">High Contrast Mode</h5>
                  <p style="margin: 0; font-size: 14px; color:var(--text-secondary,#64748b);">Enhanced visibility for text and UI elements</p>
                </div>
                <ui-checkbox id="highContrast" label=""></ui-checkbox>
              </div>
              
              <div style="display: flex; justify-content: space-between; align-items: center; padding: 20px; background-color: #f9fafb; border-radius: 12px; border:1px solid var(--border-subtle,#f1f5f9);">
                <div>
                  <h5 style="margin: 0 0 4px; color: #1f2937; font-size: 16px;">Reduced Motion</h5>
                  <p style="margin: 0; font-size: 14px; color:var(--text-secondary,#64748b);">Minimize unnecessary animations</p>
                </div>
                <ui-checkbox id="reducedMotion" label=""></ui-checkbox>
              </div>
            </div>
            
            <div style="margin-top: 32px; padding: 20px; background-color: #fff9eb; border-radius: 12px; border: 1px solid #fef3c7; display: flex; gap: 16px;">
              <div style="font-size: 24px;">⚙️</div>
              <p style="margin: 0; color:var(--accent-yellow,#92400e); font-size: 14px; line-height: 1.5;">
                <strong>Configuration Note:</strong> These toggles demonstrate how accessibility features can be integrated into your theme system.
              </p>
            </div>
          </div>
        </div>
      `;

      // Set initial values
      setTimeout(() => {
        const auto = document.getElementById('autoTheme');
        const contrast = document.getElementById('highContrast');
        const motion = document.getElementById('reducedMotion');

        if (auto) auto.checked = localStorage.getItem('autoTheme') === 'true';
        if (contrast) contrast.checked = document.documentElement.classList.contains('high-contrast');
        if (motion) motion.checked = document.documentElement.classList.contains('reduced-motion');

        auto?.addEventListener('checkboxChange', e => toggleAutoTheme(e.detail.checked));
        contrast?.addEventListener('checkboxChange', e => toggleHighContrast(e.detail.checked));
        motion?.addEventListener('checkboxChange', e => toggleReducedMotion(e.detail.checked));
      }, 0);
    };

    window.applyTheme = function (theme) {
      if (typeof setTheme === 'function') {
        setTheme(theme);
        showThemeOptions();
      } else {
        document.documentElement.className = theme;
        localStorage.setItem('theme', theme);
        showThemeOptions();
      }
    };

    window.previewTheme = function (theme) {
      const previewContent = document.getElementById('themePreviewContent');
      if (previewContent) {
        if (theme === 'dark') {
          previewContent.style.backgroundColor = '#111827';
          previewContent.style.borderColor = '#374151';
          previewContent.querySelector('h4').style.color = '#f9fafb';
          previewContent.querySelectorAll('p').forEach(p => (p.style.color = '#9ca3af'));
        } else {
          previewContent.style.backgroundColor = '#f9fafb';
          previewContent.style.borderColor = '#e5e7eb';
          previewContent.querySelector('h4').style.color = '#1f2937';
          previewContent.querySelectorAll('p').forEach(p => (p.style.color = '#6b7280'));
        }
      }
    };

    window.toggleAutoTheme = function (enabled) {
      console.log('Auto theme switching:', enabled);
      localStorage.setItem('autoTheme', enabled);
    };

    window.toggleHighContrast = function (enabled) {
      console.log('High contrast mode:', enabled);
      if (enabled) {
        document.documentElement.classList.add('high-contrast');
      } else {
        document.documentElement.classList.remove('high-contrast');
      }
    };

    window.toggleReducedMotion = function (enabled) {
      console.log('Reduced motion:', enabled);
      if (enabled) {
        document.documentElement.classList.add('reduced-motion');
      } else {
        document.documentElement.classList.remove('reduced-motion');
      }
    };

    showThemeOptions();
  }, 100);
}

// Interactive Playground Functions
window.showInteractiveTheme = function () {
  const themeContainer = document.getElementById('themeDemoContainer');
  if (!themeContainer) return;

  const currentTheme = document.documentElement.className || 'light';

  themeContainer.innerHTML = `
    <div style="background-color:var(--bg-primary,white); border-radius: 16px; padding: 32px; box-shadow: 0 10px 25px -5px rgba(0, 0, 0, 0.05); border:1px solid var(--border-default,#e5e7eb);">
      <div style="display: flex; gap: 40px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 300px;">
          <h3 style="margin-top: 0; font-size: 20px; font-weight: 700;">🎮 Interactive Playground</h3>
          <div style="display: flex; flex-direction: column; gap: 24px; margin-top: 24px;">
            <ui-dropdown 
              id="themeSelect" 
              label="Current Theme" 
              value="${currentTheme}" 
              data='[{"label": "☀️ Light", "value": "light"}, {"label": "🌙 Dark", "value": "dark"}]'
            ></ui-dropdown>
            
            <div style="padding: 24px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
              <h5 style="margin: 0 0 16px; font-size: 14px; text-transform: uppercase; letter-spacing: 0.05em; color:var(--text-secondary,#64748b);">Test Components</h5>
              
              <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 12px; font-size: 13px; font-weight: 600; color: #334155;">Status Badges</label>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <ui-badge label="Primary" variant="filled" color="primary" size="md"ui-badge>
                  <ui-badge label="Success" variant="filled" color="success" size="md"ui-badge>
                </div>
              </div>
              
              <div style="margin-bottom: 20px;">
                <label style="display: block; margin-bottom: 12px; font-size: 13px; font-weight: 600; color: #334155;">Interactive Chips</label>
                <div style="display: flex; gap: 10px; flex-wrap: wrap;">
                  <ui-chip label="Technology" icon="💻" color="primary"></ui-chip>
                  <ui-chip label="Design" icon="🎨" color="success"></ui-chip>
                </div>
              </div>
              
              <div>
                <label style="display: block; margin-bottom: 12px; font-size: 13px; font-weight: 600; color: #334155;">Action Button</label>
                <ui-button label="Sample Button" color="success" size="md"riant="outline"></ui-button>
              </div>
            </div>
            
            <div>
              <label style="display: block; margin-bottom: 16px; font-size: 14px; font-weight: 700; color: #334155;">Visual Settings</label>
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <ui-checkbox id="themeAutoSwitch" label="Auto Theme (System)"></ui-checkbox>
                <ui-checkbox id="themeHighContrast" label="High Contrast Mode"></ui-checkbox>
                <ui-checkbox id="themeReducedMotion" label="Reduced Motion"></ui-checkbox>
              </div>
            </div>
            
            <div style="padding: 16px; background:var(--accent-blue-soft,#eff6ff); border-radius: 10px; font-size: 14px; border-left: 4px solid #3b82f6;">
              <span style="color:var(--accent-blue,#1e40af);">Switch themes to see colors, shadows, and contrast update instantly.</span>
            </div>
          </div>
        </div>
        
        <div style="flex: 1.5; min-width: 400px; background-color:var(--text-primary,#1e293b); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0);">
          <h4 style="margin-top: 0; color: #475569; font-size: 16px; font-weight: 600;">Live Preview</h4>
          <div id="interactiveThemePreview" style="margin-top: 20px; padding: 32px; border-radius: 12px; background:var(--bg-primary,white); border:1px solid var(--border-default,#e2e8f0); transition: all 0.5s cubic-bezier(0.4, 0, 0.2, 1); box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
            <h3 style="margin: 0 0 16px; color:var(--text-primary,#1e293b); font-size: 24px; font-weight: 700;">Premium Interface</h3>
            <p style="margin: 0 0 24px; color:var(--text-secondary,#64748b); line-height: 1.6; font-size: 16px;">This preview demonstrates the dynamic adaptation of styles. Custom properties and token-based coloring ensure a seamless transition between themes.</p>
            
            <div style="margin-top: 24px; padding: 24px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border:1px solid var(--border-subtle,#f1f5f9); box-shadow: inset 0 2px 4px 0 rgba(0, 0, 0, 0.05);">
              <h4 style="margin: 0 0 12px; color: #334155; font-size: 18px; font-weight: 600;">Content Container</h4>
              <p style="margin: 0; font-size: 15px; color:var(--text-secondary,#64748b); line-height: 1.5;">Card backgrounds and border colors are calculated based on the active theme mode to maintain accessibility ratios.</p>
            </div>
            
            <div style="margin-top: 24px; display: flex; gap: 12px; flex-wrap: wrap;">
              <ui-badge label="Primary" color="primary"></ui-badge>
              <ui-badge label="Success" color="success"></ui-badge>
              <ui-badge label="Warning" color="warning"></ui-badge>
              <ui-badge label="Danger" color="danger"></ui-badge>
            </div>
          </div>
          <div id="themeOutput" style="margin-top: 24px; padding: 16px; background-color:var(--text-primary,#1e293b); color:var(--text-secondary,#64748b); border-radius: 8px; font-family: 'Fira Code', monospace; font-size: 12px; border: 1px solid #334155;">
            $ theme: <span style="color: #60a5fa;">"${currentTheme}"</span>;
          </div>
        </div>
      </div>
    </div>
  `;

  // Initialize listeners
  setTimeout(() => {
    const dropdown = document.getElementById('themeSelect');
    const auto = document.getElementById('themeAutoSwitch');
    const contrast = document.getElementById('themeHighContrast');
    const motion = document.getElementById('themeReducedMotion');

    dropdown?.addEventListener('dropdownChange', e => updateInteractiveTheme(e.detail.value));
    auto?.addEventListener('checkboxChange', e => updateThemeAutoSwitch(e.detail.checked));
    contrast?.addEventListener('checkboxChange', e => updateThemeHighContrast(e.detail.checked));
    motion?.addEventListener('checkboxChange', e => updateThemeReducedMotion(e.detail.checked));

    // Sync state
    if (auto) auto.checked = localStorage.getItem('autoTheme') === 'true';
    if (contrast) contrast.checked = document.documentElement.classList.contains('high-contrast');
    if (motion) motion.checked = document.documentElement.classList.contains('reduced-motion');
  }, 0);
};

window.updateInteractiveTheme = function (val) {
  const theme = val || document.getElementById('themeSelect').value;
  const outputDiv = document.getElementById('themeOutput');
  const preview = document.getElementById('interactiveThemePreview');

  // Apply theme
  if (typeof setTheme === 'function') {
    setTheme(theme);
  } else {
    document.documentElement.className = theme;
    localStorage.setItem('theme', theme);
  }

  // Update preview
  if (preview) {
    if (theme === 'dark') {
      preview.style.backgroundColor = '#0f172a';
      preview.style.borderColor = '#1e293b';
      preview.style.color = '#f8fafc';
      preview.style.boxShadow = '0 20px 25px -5px rgba(0, 0, 0, 0.4)';
      preview.querySelector('h3').style.color = '#f8fafc';
      preview.querySelectorAll('p').forEach(p => (p.style.color = '#94a3b8'));
      preview.querySelector('h4').style.color = '#e2e8f0';
      const card = preview.querySelector('div[style*="background: #f8fafc"]');
      if (card) {
        card.style.backgroundColor = '#1e293b';
        card.style.borderColor = '#334155';
      }
    } else {
      preview.style.backgroundColor = 'white';
      preview.style.borderColor = '#e2e8f0';
      preview.style.color = '#1e293b';
      preview.style.boxShadow = '0 4px 6px -1px rgba(0,0,0,0.1)';
      preview.querySelector('h3').style.color = '#1e293b';
      preview.querySelectorAll('p').forEach(p => (p.style.color = '#64748b'));
      preview.querySelector('h4').style.color = '#334155';
      const card = preview.querySelector('div[style*="background"]');
      if (card && card.querySelector('h4')) {
        card.style.backgroundColor = '#f8fafc';
        card.style.borderColor = '#f1f5f9';
      }
    }
  }

  if (outputDiv) {
    outputDiv.innerHTML = `$ theme: <span style="color: #60a5fa;">"${theme}"</span>; <span style="color: #4ade80;">// applied successfully</span>`;
  }
};

window.updateThemeAutoSwitch = function (enabled) {
  const outputDiv = document.getElementById('themeOutput');
  localStorage.setItem('autoTheme', enabled);

  if (outputDiv) {
    outputDiv.innerHTML = `$ auto_theme: <span style="color: #60a5fa;">${enabled}</span>;`;
  }

  if (enabled) {
    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    const systemTheme = prefersDark ? 'dark' : 'light';
    const dropdown = document.getElementById('themeSelect');
    if (dropdown) dropdown.value = systemTheme;
    updateInteractiveTheme(systemTheme);
  }
};

window.updateThemeHighContrast = function (enabled) {
  const outputDiv = document.getElementById('themeOutput');
  if (enabled) {
    document.documentElement.classList.add('high-contrast');
  } else {
    document.documentElement.classList.remove('high-contrast');
  }
  if (outputDiv) {
    outputDiv.innerHTML = `$ high_contrast: <span style="color: #60a5fa;">${enabled}</span>;`;
  }
};

window.updateThemeReducedMotion = function (enabled) {
  const outputDiv = document.getElementById('themeOutput');
  if (enabled) {
    document.documentElement.classList.add('reduced-motion');
  } else {
    document.documentElement.classList.remove('reduced-motion');
  }
  if (outputDiv) {
    outputDiv.innerHTML = `$ reduced_motion: <span style="color: #60a5fa;">${enabled}</span>;`;
  }
};
