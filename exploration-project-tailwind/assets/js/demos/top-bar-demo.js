// Top Bar Demo
export function initTopBarDemo() {
  const section = document.getElementById('top-bar');
  if (!section) return;

  section.innerHTML = `
    
    <p>Sticky top navigation bar with company branding, action icons, and user profile menu.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button onclick="showTopBarPlayground()"  label="🎮 Playground" style="background-color:var(--accent-purple,#8b5cf6);" variant="outline"></ui-button>
      <ui-button onclick="showBasicTopBar()"  label="Basic" style="background-color: #10b981;" variant="outline"></ui-button>
      <ui-button onclick="showTopBarWithActions()"  label="With Actions" style="background-color: #10b981;" variant="outline"></ui-button>
      <ui-button onclick="showTopBarThemes()"  label="Themes" style="background-color:var(--accent-yellow,#f59e0b);" variant="outline"></ui-button>
    </div>

    <div id="topBarDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    window.showBasicTopBar = function () {
      const container = document.getElementById('topBarDemoContainer');
      if (!container) return;

      const userMenuItems = [
        { id: 'profile', label: 'My Profile', icon: '👤' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
        { id: 'divider1', divider: true },
        { id: 'logout', label: 'Logout', icon: '🚪' },
      ];

      container.innerHTML = `
        <div class="demo-block">
          <h3>Basic Top Bar</h3>
          <p>A sticky top bar with company branding and user profile menu.</p>
          
          <div style="position: relative; background:var(--bg-secondary,#f9fafb); border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <ui-top-bar id="basicTopBar" 
              company-name="Acme Corp" 
              company-logo="🏢"
              user-name="John Doe"
              user-avatar="👤">
              <div style="font-size: 14px; color: #6b7280;">Dashboard</div>
            </ui-top-bar>
            
            <div style="padding: 40px 24px; min-height: 200px;">
              <h4 style="margin: 0 0 12px;">Page Content</h4>
              <p style="color: #6b7280; margin: 0;">Hover over the user profile icon to see the menu dropdown.</p>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        const topBar = document.getElementById('basicTopBar');
        if (topBar) {
          topBar.userMenuItems = userMenuItems;
        }
      }, 100);
    };

    window.showTopBarWithActions = function () {
      const container = document.getElementById('topBarDemoContainer');
      if (!container) return;

      const actions = [
        { id: 'search', icon: '🔍', label: 'Search' },
        { id: 'notifications', icon: '🔔', label: 'Notifications', badge: '3' },
        { id: 'messages', icon: '💬', label: 'Messages', badge: '12' },
        { id: 'help', icon: '❓', label: 'Help' },
      ];

      const userMenuItems = [
        { id: 'profile', label: 'My Profile', icon: '👤' },
        { id: 'account', label: 'Account Settings', icon: '⚙️' },
        { id: 'billing', label: 'Billing', icon: '💳' },
        { id: 'divider1', divider: true },
        { id: 'help', label: 'Help & Support', icon: '❓' },
        { id: 'divider2', divider: true },
        { id: 'logout', label: 'Logout', icon: '🚪' },
      ];

      container.innerHTML = `
        <div class="demo-block">
          <h3>Top Bar with Action Icons</h3>
          <p>Includes action buttons with badges and a comprehensive user menu.</p>
          
          <div style="position: relative; background:var(--bg-secondary,#f9fafb); border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
            <ui-top-bar id="actionsTopBar" 
              company-name="TechFlow" 
              company-logo="⚡"
              user-name="Sarah Johnson"
              user-avatar="👩‍💼">
              <ui-input type="text" placeholder="Search..." style="width: 300px; max-width: 100%;"></ui-input>
            </ui-top-bar>
            
            <div style="padding: 40px 24px; min-height: 200px;">
              <h4 style="margin: 0 0 12px;">Application Dashboard</h4>
              <p style="color: #6b7280; margin: 0 0 16px;">Click on notification or message icons to see badges. Hover over user profile for menu.</p>
              <div id="actionLog" style="background:var(--bg-primary,white); padding: 12px; border-radius: 6px; border:1px solid var(--border-default,#e5e7eb); font-family: monospace; font-size: 12px; color: #6b7280; min-height: 60px;">
                <div style="color: #9ca3af;">Click on action icons or menu items...</div>
              </div>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        const topBar = document.getElementById('actionsTopBar');
        if (topBar) {
          const actionsWithHandlers = actions.map(action => ({
            ...action,
            onClick: () => {
              logAction('Clicked: ' + action.label);
            },
          }));

          const menuItemsWithHandlers = userMenuItems.map(item => ({
            ...item,
            onClick: item.divider
              ? undefined
              : () => {
                  logAction('Selected: ' + item.label);
                },
          }));

          topBar.actions = actionsWithHandlers;
          topBar.userMenuItems = menuItemsWithHandlers;
        }
      }, 100);
    };

    window.logAction = function (message) {
      const log = document.getElementById('actionLog');
      if (log) {
        const timestamp = new Date().toLocaleTimeString();
        const entry = document.createElement('div');
        entry.style.color = '#059669';
        entry.style.marginBottom = '4px';
        entry.textContent = '[' + timestamp + '] ' + message;

        if (log.querySelector('[style*="color: #9ca3af"]')) {
          log.innerHTML = '';
        }

        log.insertBefore(entry, log.firstChild);

        while (log.children.length > 5) {
          log.removeChild(log.lastChild);
        }
      }
    };

    window.showTopBarThemes = function () {
      const container = document.getElementById('topBarDemoContainer');
      if (!container) return;

      const actions = [
        { id: 'notifications', icon: '🔔', label: 'Notifications', badge: '5' },
        { id: 'settings', icon: '⚙️', label: 'Settings' },
      ];

      const userMenuItems = [
        { id: 'profile', label: 'Profile', icon: '👤' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
        { id: 'divider', divider: true },
        { id: 'logout', label: 'Logout', icon: '🚪' },
      ];

      container.innerHTML = `
        <div class="demo-block">
          <h3>Top Bar Themes</h3>
          <p>Different color themes for various use cases.</p>
          
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div>
              <h4 style="margin: 0 0 12px;">Light Theme (Default)</h4>
              <div style="border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden;">
                <ui-top-bar id="lightTopBar" 
                  company-name="Light Theme" 
                  company-logo="☀️"
                  user-name="User">
                  <span style="font-size: 14px; color: #6b7280;">Dashboard</span>
                </ui-top-bar>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 12px;">Dark Theme</h4>
              <div style="border: 2px solid #374151; border-radius: 8px; overflow: hidden;">
                <ui-top-bar id="darkTopBar" 
                  company-name="Dark Theme" 
                  company-logo="🌙"
                  user-name="User"
                  background-color="#1f2937"
                  text-color="#f9fafb">
                  <span style="font-size: 14px; color: #d1d5db;">Dashboard</span>
                </ui-top-bar>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 12px;">Brand Theme</h4>
              <div style="border: 2px solid #10b981; border-radius: 8px; overflow: hidden;">
                <ui-top-bar id="brandTopBar" 
                  company-name="Brand Theme" 
                  company-logo="🎨"
                  user-name="User"
                  background-color="#10b981"
                  text-color="#ffffff">
                  <span style="font-size: 14px; color: #e0f2fe;">Dashboard</span>
                </ui-top-bar>
              </div>
            </div>

            <div>
              <h4 style="margin: 0 0 12px;">Gradient Theme</h4>
              <div style="border: 2px solid #8b5cf6; border-radius: 8px; overflow: hidden;">
                <ui-top-bar id="gradientTopBar" 
                  company-name="Gradient Theme" 
                  company-logo="🌈"
                  user-name="User"
                  background-color="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
                  text-color="#ffffff"
                  style="background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);">
                  <span style="font-size: 14px; color: #f3e8ff;">Dashboard</span>
                </ui-top-bar>
              </div>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        ['lightTopBar', 'darkTopBar', 'brandTopBar', 'gradientTopBar'].forEach(id => {
          const topBar = document.getElementById(id);
          if (topBar) {
            topBar.actions = actions;
            topBar.userMenuItems = userMenuItems;
          }
        });
      }, 100);
    };

    window.showTopBarPlayground = function () {
      const container = document.getElementById('topBarDemoContainer');
      if (!container) return;

      container.innerHTML = `
        <div class="demo-block">
          <h3>🎮 Interactive Playground</h3>
          <p>Customize the top bar properties in real-time.</p>
          
          <div style="display: grid; grid-template-columns: 350px 1fr; gap: 24px; margin-top: 20px;">
            <div style="background: var(--bg-secondary); padding: 20px; border-radius: 8px; border: 1px solid var(--border-default); height: fit-content;">
              <h4 style="margin: 0 0 16px; color: var(--text-primary);">Settings</h4>
              
              <div style="display: flex; flex-direction: column; gap: 12px;">
                <label style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 13px; font-weight: 500; color: var(--text-secondary);">Company Name:</span>
                  <ui-input id="playCompanyName" value="My Company"></ui-input>
                </label>
                
                <label style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 13px; font-weight: 500; color: var(--text-secondary);">Company Logo (Emoji):</span>
                  <ui-input id="playCompanyLogo" value="🏢"></ui-input>
                </label>
                
                <label style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 13px; font-weight: 500; color: var(--text-secondary);">User Name:</span>
                  <ui-input id="playUserName" value="John Smith"></ui-input>
                </label>
                
                <label style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 13px; font-weight: 500; color: var(--text-secondary);">User Avatar (Emoji):</span>
                  <ui-input id="playUserAvatar" value="👤"></ui-input>
                </label>
                
                <label style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 13px; font-weight: 500; color: var(--text-secondary);">Background Color:</span>
                  <ui-color-picker id="playBgColor" value="#ffffff"></ui-color-picker>
                </label>
                
                <label style="display: flex; flex-direction: column; gap: 4px;">
                  <span style="font-size: 13px; font-weight: 500; color: var(--text-secondary);">Text Color:</span>
                  <ui-color-picker id="playTextColor" value="#111827"></ui-color-picker>
                </label>
                
                <ui-checkbox id="playShowShadow" label="Show Shadow" checked="true"></ui-checkbox>
              </div>
            </div>
            
            <div>
              <h4 style="margin: 0 0 12px;">Preview:</h4>
              <div style="border: 2px solid #e5e7eb; border-radius: 8px; overflow: hidden; min-height: 300px;">
                <div id="playgroundTopBarContainer"></div>
                <div style="padding: 24px;">
                  <h4 style="margin: 0 0 12px;">Page Content</h4>
                  <p style="color: #6b7280; margin: 0 0 16px;">This is sample page content below the top bar.</p>
                  <p style="color: #6b7280; margin: 0;">Try hovering over the user profile to see the menu dropdown.</p>
                </div>
              </div>
              
              <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
                <ui-button onclick="copyTopBarCode()" id="copyTopBarBtn" variant="outline" color="secondary" label="Copy" size="md"yle="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); color: white;"></ui-button>
                <code id="topBarCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
                  &lt;ui-top-bar ...&gt;&lt;/ui-top-bar&gt;
                </code>
              </div>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        updatePlaygroundTopBar();

        // Setup listeners
        const companyNameInput = document.getElementById('playCompanyName');
        const companyLogoInput = document.getElementById('playCompanyLogo');
        const userNameInput = document.getElementById('playUserName');
        const userAvatarInput = document.getElementById('playUserAvatar');
        const bgColorPicker = document.getElementById('playBgColor');
        const textColorPicker = document.getElementById('playTextColor');
        const showShadowCheck = document.getElementById('playShowShadow');

        if (companyNameInput) companyNameInput.addEventListener('inputChange', updatePlaygroundTopBar);
        if (companyLogoInput) companyLogoInput.addEventListener('inputChange', updatePlaygroundTopBar);
        if (userNameInput) userNameInput.addEventListener('inputChange', updatePlaygroundTopBar);
        if (userAvatarInput) userAvatarInput.addEventListener('inputChange', updatePlaygroundTopBar);
        if (bgColorPicker) bgColorPicker.addEventListener('colorChange', updatePlaygroundTopBar);
        if (textColorPicker) textColorPicker.addEventListener('colorChange', updatePlaygroundTopBar);
        if (showShadowCheck) showShadowCheck.addEventListener('checkboxChange', updatePlaygroundTopBar);
      }, 100);
    };

    window.updatePlaygroundTopBar = function () {
      const companyName = document.getElementById('playCompanyName')?.value || 'Company';
      const companyLogo = document.getElementById('playCompanyLogo')?.value || '🏢';
      const userName = document.getElementById('playUserName')?.value || 'User';
      const userAvatar = document.getElementById('playUserAvatar')?.value || '👤';
      const bgColor = document.getElementById('playBgColor')?.value || '#ffffff';
      const textColor = document.getElementById('playTextColor')?.value || '#111827';
      const showShadow = document.getElementById('playShowShadow')?.checked !== false;

      const container = document.getElementById('playgroundTopBarContainer');
      if (!container) return;

      const actions = [
        { id: 'search', icon: '🔍', label: 'Search' },
        { id: 'notifications', icon: '🔔', label: 'Notifications', badge: '3' },
        { id: 'help', icon: '❓', label: 'Help' },
      ];

      const userMenuItems = [
        { id: 'profile', label: 'My Profile', icon: '👤' },
        { id: 'settings', label: 'Settings', icon: '⚙️' },
        { id: 'preferences', label: 'Preferences', icon: '🎨' },
        { id: 'divider1', divider: true },
        { id: 'help', label: 'Help Center', icon: '❓' },
        { id: 'divider2', divider: true },
        { id: 'logout', label: 'Logout', icon: '🚪' },
      ];

      container.innerHTML = '';

      const topBar = document.createElement('ui-top-bar');
      topBar.setAttribute('company-name', companyName);
      topBar.setAttribute('company-logo', companyLogo);
      topBar.setAttribute('user-name', userName);
      topBar.setAttribute('user-avatar', userAvatar);
      topBar.setAttribute('background-color', bgColor);
      topBar.setAttribute('text-color', textColor);
      topBar.setAttribute('show-shadow', showShadow.toString());

      topBar.actions = actions;
      topBar.userMenuItems = userMenuItems;

      container.appendChild(topBar);

      container.appendChild(topBar);

      // Update Code Block
      const codeBlock = document.getElementById('topBarCodeBlock');
      if (codeBlock) {
        let props = '';
        if (companyName && companyName !== 'Company') props += ` company-name="${companyName}"`;
        if (companyLogo && companyLogo !== '🏢') props += ` company-logo="${companyLogo}"`;
        if (userName && userName !== 'User') props += ` user-name="${userName}"`;
        if (userAvatar && userAvatar !== '👤') props += ` user-avatar="${userAvatar}"`;
        if (bgColor && bgColor !== '#ffffff') props += ` background-color="${bgColor}"`;
        if (textColor && textColor !== '#111827') props += ` text-color="${textColor}"`;
        if (!showShadow) props += ` show-shadow="false"`;

        codeBlock.innerText = `<ui-top-bar${props}>\n  <!-- Content/Slots -->\n</ui-top-bar>\n<script>\n  const topBar = document.querySelector('ui-top-bar');\n  topBar.actions = [...];\n  topBar.userMenuItems = [...];\n</script>`;
      }
    };

    window.copyTopBarCode = () => {
      const code = document.getElementById('topBarCodeBlock').innerText;
      const btn = document.getElementById('copyTopBarBtn');

      navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.innerText;
        btn.innerText = 'Copied!';
        btn.style.background = '#10b981';

        setTimeout(() => {
          btn.innerText = originalText;
          btn.style.background = 'rgba(255,255,255,0.1)';
        }, 2000);
      });
    };

    showTopBarPlayground();
  }, 100);
}
