// Dock Component Demo Functions
export function initDockDemo() {
  const section = document.getElementById('dock');
  if (!section) return;

  section.innerHTML = `
    
    <p>macOS-style dock with magnification effect and smooth animations.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button id="btnDockPlayground"  label="🎮 Interactive Playground" style="--btn-bg: var(--accent-purple,#8b5cf6);" variant="outline"></ui-button>
      <ui-button id="btnDockBasic"  label="Basic" variant="outline"></ui-button>
      <ui-button id="btnDockPositions"  label="Positions" variant="outline"></ui-button>
      <ui-button id="btnDockSizes"  label="Sizes" variant="outline"></ui-button>
      <ui-button id="btnDockBadges"  label="With Badges" variant="outline"></ui-button>
      <ui-button id="btnDockPremium"  label="✨ OS Experience" style="--btn-bg: var(--accent-pink,#ec4899);" variant="outline"></ui-button>
    </div>

    <div id="dockDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    document.getElementById('btnDockPlayground')?.addEventListener('click', () => window.showInteractiveDock());
    document.getElementById('btnDockBasic')?.addEventListener('click', () => window.showBasicDock());
    document.getElementById('btnDockPositions')?.addEventListener('click', () => window.showDockPositions());
    document.getElementById('btnDockSizes')?.addEventListener('click', () => window.showDockSizes());
    document.getElementById('btnDockBadges')?.addEventListener('click', () => window.showDockWithBadges());
    document.getElementById('btnDockPremium')?.addEventListener('click', () => window.showPremiumDock());

    window.showInteractiveDock();
  }, 100);

  window.showBasicDock = function () {
    const container = document.getElementById('dockDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h4>Bottom Dock (Default)</h4>
        <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">Hover over icons to see magnification effect</p>
        <div style="display: flex; justify-content: center; padding: 40px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 8px;">
          <ui-dock id="basicDock" icon-library="lucide"></ui-dock>
        </div>
      </div>
    `;

    setTimeout(() => {
      const dock = document.getElementById('basicDock');
      if (dock) {
        dock.items = JSON.stringify([
          { id: 'finder', label: 'Finder', icon: 'smile' },
          { id: 'mail', label: 'Mail', icon: 'mail' },
          { id: 'browser', label: 'Browser', icon: 'globe' },
          { id: 'music', label: 'Music', icon: 'music' },
          { id: 'photos', label: 'Photos', icon: 'image' },
          { id: 'settings', label: 'Settings', icon: 'settings' },
        ]);
        dock.addEventListener('dockItemClick', e => {
          console.log('Dock item clicked:', e.detail);
        });
      }
    }, 100);
  };

  window.showDockPositions = function () {
    const container = document.getElementById('dockDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h4>Bottom Position</h4>
        <div style="display: flex; justify-content: center; padding: 40px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 8px;">
          <ui-dock id="dockPosBottom" position="bottom" icon-library="lucide"></ui-dock>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <h4>Top Position</h4>
        <div style="display: flex; justify-content: center; padding: 40px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 8px;">
          <ui-dock id="dockPosTop" position="top" icon-library="lucide"></ui-dock>
        </div>
      </div>

      <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
        <div>
          <h4>Left Position</h4>
          <div style="display: flex; justify-content: center; padding: 40px; background-color: #f3f4f6; border-radius: 8px;">
            <ui-dock id="dockPosLeft" position="left" icon-library="lucide"></ui-dock>
          </div>
        </div>

        <div>
          <h4>Right Position</h4>
          <div style="display: flex; justify-content: center; padding: 40px; background-color: #f3f4f6; border-radius: 8px;">
            <ui-dock id="dockPosRight" position="right" icon-library="lucide"></ui-dock>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const itemsList = JSON.stringify([
        { id: '1', label: 'Home', icon: 'home' },
        { id: '2', label: 'Search', icon: 'search' },
        { id: '3', label: 'Heart', icon: 'heart' },
        { id: '4', label: 'Star', icon: 'star' },
        { id: '5', label: 'Settings', icon: 'settings' },
      ]);
      ['dockPosBottom', 'dockPosTop', 'dockPosLeft', 'dockPosRight'].forEach(id => {
        const d = document.getElementById(id);
        if (d) d.items = itemsList;
      });
    }, 100);
  };

  window.showDockSizes = function () {
    const container = document.getElementById('dockDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h4>Small Size</h4>
        <div style="display: flex; justify-content: center; padding: 40px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 8px;">
          <ui-dock id="dockSizeSm" size="sm" icon-library="lucide"></ui-dock>
        </div>
      </div>

      <div style="margin-bottom: 30px;">
        <h4>md Size (Default)</h4>
        <div style="display: flex; justify-content: center; padding: 40px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 8px;">
          <ui-dock id="dockSizeMd" size="md" icon-library="lucide"></ui-dock>
        </div>
      </div>

      <div>
        <h4>Large Size</h4>
        <div style="display: flex; justify-content: center; padding: 40px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 8px;">
          <ui-dock id="dockSizeLg" size="lg" icon-library="lucide"></ui-dock>
        </div>
      </div>
    `;

    setTimeout(() => {
      const itemsList = JSON.stringify([
        { id: '1', label: 'File', icon: 'file-text' },
        { id: '2', label: 'Folder', icon: 'folder' },
        { id: '3', label: 'Image', icon: 'image' },
        { id: '4', label: 'Video', icon: 'clapperboard' },
      ]);
      ['dockSizeSm', 'dockSizeMd', 'dockSizeLg'].forEach(id => {
        const d = document.getElementById(id);
        if (d) d.items = itemsList;
      });
    }, 100);
  };

  window.showDockWithBadges = function () {
    const container = document.getElementById('dockDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h4>Dock with Badge Indicators</h4>
        <p style="color: #6b7280; font-size: 14px; margin-bottom: 16px;">Icons can display notification badges</p>
        <div style="display: flex; justify-content: center; padding: 40px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 8px;">
          <ui-dock id="dockWithBadges" icon-library="lucide"></ui-dock>
        </div>
      </div>
    `;

    setTimeout(() => {
      const d = document.getElementById('dockWithBadges');
      if (d) {
        d.items = JSON.stringify([
          { id: 'mail', label: 'Mail', icon: 'mail', badge: 12 },
          { id: 'messages', label: 'Messages', icon: 'message-square', badge: 5 },
          { id: 'notifications', label: 'Notifications', icon: 'bell', badge: 99 },
          { id: 'calendar', label: 'Calendar', icon: 'calendar' },
          { id: 'tasks', label: 'Tasks', icon: 'check-square', badge: 3 },
        ]);
      }
    }, 100);
  };

  window.showPremiumDock = function () {
    const container = document.getElementById('dockDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div style="margin-bottom: 30px;">
        <h3>✨ OS Experience</h3>
        <p style="color: #6b7280; font-size: 14px; margin-bottom: 24px;">
          Demonstrating Active Indicators, Separators, and Bounce Animations.
        </p>
        
        <div style="
          display: flex; 
          flex-direction: column;
          justify-content: flex-end; 
          align-items: center; 
          height: 300px; 
          background: linear-gradient(to bottom, #38bdf8, #0ea5e9); 
          border-radius: 12px;
          position: relative;
          overflow: hidden;
          padding-bottom: 20px;
        ">
          <!-- Background Wallpaper Effect -->
          <div style="position: absolute; top: 20px; left: 20px; color: rgba(255,255,255,0.8); font-family: monospace;">
             10:42 AM<br>Tuesday 11 Jan
          </div>

          <!-- The Dock -->
          <ui-dock 
            id="premiumDock" 
            position="bottom" 
            size="md" 
            magnify="true" 
            blur-effect="true"
            icon-library="lucide">
          </ui-dock>
        </div>
        
        <div style="margin-top: 20px; display: flex; gap: 10px; justify-content: center;">
             <ui-button id="btnToggleBounce" variant="outline" color="secondary" label="Stop Animation"></ui-button>
        </div>
      </div>
    `;

    setTimeout(() => {
      const d = document.getElementById('premiumDock');
      if (d) {
        d.items = JSON.stringify([
          { id: 'finder', label: 'Finder', icon: 'smile', active: true },
          { id: 'launchpad', label: 'Launchpad', icon: 'rocket' },
          { id: 'browser', label: 'Safari', icon: 'compass', active: true },
          { id: 'mail', label: 'Mail', icon: 'mail', badge: 3, bounce: true },
          { id: 'maps', label: 'Maps', icon: 'map' },
          { id: 'separator1', separator: true },
          { id: 'music', label: 'Music', icon: 'music', active: true },
          { id: 'podcasts', label: 'Podcasts', icon: 'mic' },
          { id: 'tv', label: 'TV', icon: 'tv' },
          { id: 'separator2', separator: true },
          { id: 'settings', label: 'System Settings', icon: 'settings' },
          { id: 'trash', label: 'Trash', icon: 'trash-2' },
        ]);
      }
    }, 100);

    window.toggleBounce = function () {
      alert("In a real React/Angular app, you'd update the 'items' prop to remove 'bounce: true'.");
    };
  };

  window.showInteractiveDock = function () {
    const container = document.getElementById('dockDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <h3>🎮 Interactive Dock Playground</h3>
      <p style="color: #6b7280; margin-bottom: 20px;">Customize the dock in real-time</p>

      <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 30px; padding: 20px; background-color:var(--bg-primary,white); border-radius: 8px;">
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Position:</label>
          <ui-dropdown id="dockPosition" value="bottom" options='[
            {"label": "Bottom", "value": "bottom"},
            {"label": "Top", "value": "top"},
            {"label": "Left", "value": "left"},
            {"label": "Right", "value": "right"}
          ]'></ui-dropdown>
        </div>

        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Size:</label>
          <ui-dropdown id="dockSize" value="md" options='[
            {"label": "Small", "value": "sm"},
            {"label": "Medium", "value": "md"},
            {"label": "Large", "value": "lg"}
          ]'></ui-dropdown>
        </div>

        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Magnify:</label>
          <ui-dropdown id="dockMagnify" value="true" options='[
            {"label": "Yes", "value": "true"},
            {"label": "No", "value": "false"}
          ]'></ui-dropdown>
        </div>

        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Blur Effect:</label>
          <ui-dropdown id="dockBlur" value="true" options='[
            {"label": "Yes", "value": "true"},
            {"label": "No", "value": "false"}
          ]'></ui-dropdown>
        </div>

        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Show Labels:</label>
          <ui-dropdown id="dockShowLabels" value="true" options='[
            {"label": "Yes", "value": "true"},
            {"label": "No", "value": "false"}
          ]'></ui-dropdown>
        </div>

        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Item Count:</label>
          <ui-dropdown id="dockItemCount" value="7" options='[
            {"label": "3 Items", "value": "3"},
            {"label": "5 Items", "value": "5"},
            {"label": "7 Items", "value": "7"},
            {"label": "10 Items", "value": "10"}
          ]'></ui-dropdown>
        </div>

        <!-- Premium Toggles -->
        <div>
          <label style="display: block; margin-bottom: 8px; font-weight: 600;">Premium Features:</label>
          <div style="display: flex; gap: 10px; flex-wrap: wrap;">
             <ui-checkbox id="dockShowActive" label="Active Dot" checked></ui-checkbox>
             <ui-checkbox id="dockShowBounce" label="Bounce"></ui-checkbox>
             <ui-checkbox id="dockShowSeparator" label="Separator"></ui-checkbox>
          </div>
        </div>
      </div>

      <div id="dockPlaygroundPreview" style="display: flex; justify-content: center; align-items: center; min-height: 200px; padding: 60px; background-color: var(--bg-secondary, #f3f4f6); border-radius: 8px;"></div>

      <div id="dockClickLog" style="margin-top: 20px; padding: 16px; background-color:var(--bg-primary,white); border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
        <h4 style="margin: 0 0 12px;">Click Events Log:</h4>
        <div id="dockLogContent" style="color: #6b7280; font-size: 14px; font-family: monospace;">Click on dock items to see events...</div>
      </div>
      
      <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
        <ui-button id="btnCopyDockCode" variant="ghost" color="secondary" label="Copy" size="md" style="position: absolute; top: 10px; right: 10px; --btn-bg: rgba(255,255,255,0.1); --btn-text: white;"></ui-button>
        <code id="dockCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
          <ui-dock ...></ui-dock>
        </code>
      </div>
    `;

    window.updateDockPlayground = function () {
      const preview = document.getElementById('dockPlaygroundPreview');
      const position = document.getElementById('dockPosition').value;
      const size = document.getElementById('dockSize').value;
      const magnify = document.getElementById('dockMagnify').value;
      const blur = document.getElementById('dockBlur').value;
      const showLabels = document.getElementById('dockShowLabels').value;
      const itemCount = parseInt(document.getElementById('dockItemCount').value);

      const showActive = document.getElementById('dockShowActive').checked;
      const showBounce = document.getElementById('dockShowBounce').checked;
      const showSeparator = document.getElementById('dockShowSeparator').checked;

      const allItems = [
        { id: 'home', label: 'Home', icon: 'home', active: showActive },
        { id: 'search', label: 'Search', icon: 'search' },
        { id: 'mail', label: 'Mail', icon: 'mail', badge: 3, bounce: showBounce },
        { id: 'separator1', separator: true },
        { id: 'messages', label: 'Messages', icon: 'message-square', badge: 5 },
        { id: 'calendar', label: 'Calendar', icon: 'calendar' },
        { id: 'music', label: 'Music', icon: 'music', active: showActive },
        { id: 'photos', label: 'Photos', icon: 'camera' },
        { id: 'videos', label: 'Videos', icon: 'clapperboard' },
        { id: 'documents', label: 'Documents', icon: 'file-text' },
        { id: 'settings', label: 'Settings', icon: 'settings' },
      ];

      // Filter logic: Remove separator if not checked
      let displayItems = allItems.slice(0, 11); // Take enough to potentially include separator
      if (!showSeparator) {
        displayItems = displayItems.filter(i => !i.separator);
      }
      displayItems = displayItems.slice(0, itemCount);

      const items = JSON.stringify(displayItems);

      preview.innerHTML = `
        <ui-dock 
          id="playgroundDock"
          items='${items}'
          position="${position}"
          size="${size}"
          magnify="${magnify}"
          blur-effect="${blur}"
          show-labels="${showLabels}"
          icon-library="lucide">
        </ui-dock>
      `;

      setTimeout(() => {
        const dock = document.getElementById('playgroundDock');
        if (dock) {
          dock.addEventListener('dockItemClick', e => {
            const logContent = document.getElementById('dockLogContent');
            const timestamp = new Date().toLocaleTimeString();
            const newLog = `[${timestamp}] Clicked: ${e.detail.item.label} (ID: ${e.detail.itemId})`;
            logContent.innerHTML = newLog + '<br>' + logContent.innerHTML;
          });
        }
      }, 100);

      // Generate code block
      const codeBlock = document.getElementById('dockCodeBlock');
      if (codeBlock) {
        let code = '<ui-dock';
        if (position !== 'bottom') code += `\n  position="${position}"`;
        if (size !== 'md') code += `\n  size="${size}"`;
        if (magnify !== 'true') code += `\n  magnify="${magnify}"`;
        if (blur !== 'true') code += `\n  blur-effect="${blur}"`;
        code += `\n  show-labels="${showLabels}"`;
        code += `\n  items='${items}'`;
        code += `\n  icon-library="lucide"`;
        code += '\n></ui-dock>';
        codeBlock.innerText = code;
      }
    };

    window.copyDockCode = () => {
      const code = document.getElementById('dockCodeBlock').innerText;
      const btn = document.getElementById('btnCopyDockCode');
      navigator.clipboard.writeText(code).then(() => {
        const originalText = btn.label;
        btn.label = 'Copied!';
        setTimeout(() => {
          btn.label = originalText;
        }, 2000);
      });
    };
    setTimeout(() => {
      ['dockPosition', 'dockSize', 'dockMagnify', 'dockBlur', 'dockShowLabels', 'dockItemCount'].forEach(id => {
        document.getElementById(id)?.addEventListener('dropdownChange', () => window.updateDockPlayground());
      });
      ['dockShowActive', 'dockShowBounce', 'dockShowSeparator'].forEach(id => {
        document.getElementById(id)?.addEventListener('checkboxChange', () => window.updateDockPlayground());
      });
      document.getElementById('btnCopyDockCode')?.addEventListener('click', () => window.copyDockCode());
    }, 100);
    updateDockPlayground();
  };
}
