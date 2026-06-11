// Button Component Demo - Injects HTML and wires interactive examples
export function initButtonDemo() {
  const section = document.getElementById('button') || document.getElementById('button-toggle');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Comprehensive button component with multiple variants, sizes, states, and features.</p>
    
    <div class="demo-controls-wrapper">
      <div class="demo-grid-wrapper">
        <ui-button id="btnPlayground" icon="play" label="Playground" variant="outline"></ui-button>
        <ui-button id="btnForms" icon="file-text" label="Forms" variant="outline"></ui-button>
        <ui-button id="btnVariants" icon="layers" label="Variants" variant="outline"></ui-button>
        <ui-button id="btnSizes" icon="pencil-ruler" label="Sizes & Shapes" variant="outline"></ui-button>
        <ui-button id="btnIcons" icon="component" label="Icons & Layouts" variant="outline"></ui-button>
        <ui-button id="btnImageButtons" icon="image" label="Image Buttons" variant="outline"></ui-button>
        <ui-button id="btnAvatarButtons" icon="user" label="Avatar Buttons" variant="outline"></ui-button>
        <ui-button id="btnStates" icon="info" label="States" variant="outline"></ui-button>
        <ui-button id="btnPremium" icon="sparkles" label="Premium" variant="outline"></ui-button>
        <ui-button id="btnGradients" icon="component" label="Gradients" variant="outline"></ui-button>
        <ui-button id="btnGodMode" icon="zap" label="God Mode" variant="outline"></ui-button>
        <ui-button id="btnRichLayout" icon="layout" label="Rich Layouts" variant="outline"></ui-button>
        <ui-button id="btnToggleGroups" icon="group" label="Selection Groups" variant="outline"></ui-button>
      </div>
    </div>

    <div id="buttonDemoContainer" style="margin-top: 32px; padding: 24px; background: var(--bg-primary); border-radius: 24px; border: 1px solid var(--border-default); box-shadow: 0 10px 25px -5px rgba(0,0,0,0.15);"></div>
  `;

  const updateActiveBtn = id => {
    Object.keys(demoMap).forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.selected = btnId === id;
    });
  };

  // Map of buttons to functions
  const demoMap = {
    btnPlayground: () => showInteractiveButton(),
    btnForms: () => showFormButtons(),
    btnVariants: () => showBasicButtons(),
    btnSizes: () => showButtonSizes(),
    btnIcons: () => showButtonIcons(),
    btnImageButtons: () => showImageButtons(),
    btnAvatarButtons: () => showAvatarButtons(),
    btnStates: () => showButtonStates(),
    btnPremium: () => showPremiumButtons(),
    btnGradients: () => showGradientButtons(),
    btnGodMode: () => showGodModeButtons(),
    btnRichLayout: () => showRichLayoutButtons(),
    btnToggleGroups: () => showButtonToggleGroups(),
  };

  const wireDemoButton = (btn, id, func) => {
    let lastHandledAt = 0;
    const runDemo = () => {
      const now = Date.now();
      if (now - lastHandledAt < 50) return;
      lastHandledAt = now;
      updateActiveBtn(id);
      func();
    };

    btn.onclick = null;
    btn.addEventListener('click', runDemo);
    btn.addEventListener('buttonClick', runDemo);
  };

  setTimeout(() => {
    Object.entries(demoMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        wireDemoButton(btn, id, func);
      }
    });

    updateActiveBtn('btnPlayground');
    showInteractiveButton();
  }, 100);
}

// ── Demo Functions ──────────────────────────────────────────────────────────

function showFormButtons() {
  const container = document.getElementById('buttonDemoContainer');
  if (!container) return;

  container.innerHTML = `
      <div class="demo-block">
        <h3>Form Actions & Native Integration</h3>
        <p style="color: var(--text-secondary); margin-bottom: 24px;">Buttons can act as native form submitters, resets, or triggers for custom validation logic. They also support image and avatar modes for profile interactions.</p>
        
        <div style="background: var(--bg-secondary); padding: 32px; border-radius: 20px; box-shadow: 0 4px 12px rgba(0,0,0,0.15); border: 1px solid var(--border-default); max-width: 500px; margin: 0 auto;">
          <form id="demoForm" style="display: flex; flex-direction: column; gap: 20px;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
               <label style="font-size: 13px; font-weight: 600; color: var(--text-primary);">Profile Picture</label>
               <div style="display: flex; align-items: center; gap: 16px;">
                  <ui-button type="avatar" avatar-src="/build/assets/images/logo.png" avatar-alt="User" size="xl" status="online"></ui-button>
                  <ui-button variant="soft" size="md" icon="camera" label="Change Photo"></ui-button>
               </div>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 13px; font-weight: 600; color: var(--text-primary);">Username</label>
              <ui-input placeholder="Enter username" value="antigravity_user" variant="filled"></ui-input>
            </div>

            <div style="display: flex; flex-direction: column; gap: 8px;">
              <label style="font-size: 13px; font-weight: 600; color: var(--text-primary);">Bio</label>
              <ui-input type="textarea" placeholder="Tell us about yourself..." variant="filled"></ui-input>
            </div>

            <div style="display: flex; justify-content: flex-end; gap: 12px; margin-top: 12px; padding-top: 20px; border-top: 1px solid var(--border-default);">
              <ui-button type="reset" variant="ghost" label="Reset"></ui-button>
              <ui-button type="submit" variant="primary" label="Save Changes" icon="check" icon-library="lucide"></ui-button>
            </div>
          </form>
        </div>
      </div>

      <div class="demo-block" style="margin-top: 40px;">
        <h3>Specialized Form Buttons</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(240px, 1fr)); gap: 20px;">
           <div style="background: var(--bg-secondary); padding: 16px; border-radius: 12px; border: 1px dashed var(--border-default); display: flex; flex-direction: column; gap: 10px; align-items: center;">
              <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Image Button</span>
              <ui-button type="image" img-src="/build/assets/images/nature_forest_1.png" img-alt="Banner" style="width: 200px; height: 100px;"></ui-button>
           </div>
           
           <div style="background: var(--bg-secondary); padding: 16px; border-radius: 12px; border: 1px dashed var(--border-default); display: flex; flex-direction: column; gap: 10px; align-items: center;">
              <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">File Upload Trigger</span>
              <ui-button variant="outline" icon="upload-cloud" label="Upload Document" dashed></ui-button>
           </div>

           <div style="background: var(--bg-secondary); padding: 16px; border-radius: 12px; border: 1px dashed var(--border-default); display: flex; flex-direction: column; gap: 10px; align-items: center;">
              <span style="font-size: 11px; font-weight: 700; color: var(--text-muted); text-transform: uppercase;">Destructive Action</span>
              <ui-button variant="soft" color="danger" icon="trash-2" label="Delete Account"></ui-button>
           </div>
        </div>
      </div>
    `;

  setTimeout(() => {
    const form = document.getElementById('demoForm');
    if (form) {
      form.addEventListener('submit', e => {
        e.preventDefault();
        alert('Form Submitted Successfully!');
      });
      form.addEventListener('reset', () => {
        console.log('Form Reset');
      });
    }
  }, 100);
}

function showButtonSizes() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;

  const sizes = [
    { id: 'xxxs', label: 'xxxs (20px)', variant: 'primary', icon: 'zap' },
    { id: 'xxs', label: 'xxs (24px)', variant: 'secondary', icon: 'star' },
    { id: 'xs', label: 'xs (28px)', variant: 'success', icon: 'check' },
    { id: 'small', label: 'small (32px)', variant: 'info', icon: 'info' },
    { id: 'md', label: 'md (40px)', variant: 'primary', icon: 'play' },
    { id: 'large', label: 'large (48px)', variant: 'warning', icon: 'alert-triangle' },
    { id: 'xl', label: 'xl (56px)', variant: 'danger', icon: 'trash-2' },
    { id: 'xxl', label: 'xxl (64px)', variant: 'info', icon: 'cloud' },
    { id: 'xxxl', label: 'xxxl (80px)', variant: 'dark', icon: 'grid' },
  ];

  container.innerHTML = `
      <div class="demo-block">
        <h3>Sizes & Height Consistency</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Button height remains identical across different content combinations (label only, icon+label, and badge).</p>
        
        <div style="display: flex; flex-direction: column; gap: 20px;">
          ${sizes
            .map(
              s => `
            <div style="display: flex; align-items: center; gap: 16px; flex-wrap: wrap;">
              <span style="min-width: 100px; font-size: 13px; font-weight: 600; color:#4b5563;">${s.label}:</span>
              
              <ui-button size="${s.id}" variant="${s.variant}" label="Simple"></ui-button>
              
              <ui-button size="${s.id}" variant="${s.variant}" icon="${s.icon}" icon-library="lucide" label="With Icon"></ui-button>
              
              <ui-button size="${s.id}" variant="${s.variant}" icon="${s.icon}" icon-library="lucide" label="With Badge" badge="8" badge-color="danger"></ui-button>

              <ui-button size="${s.id}" variant="${s.variant}" label="With Counter" counter="5" counter-color="info"></ui-button>
              
              <ui-button size="${s.id}" variant="${s.variant}" icon="${s.icon}" icon-library="lucide" icon-only shape="circle"></ui-button>

            </div>
          `,
            )
            .join('')}
        </div>
      </div>

      <div class="demo-block">
        <h3>Shapes & Specialized Styles</h3>
        <div class="demo-grid-wrapper">
          <ui-button variant="secondary" shape="square" label="Square"></ui-button>
          <ui-button variant="secondary" shape="rounded" label="Rounded Corner"></ui-button>
          <ui-button variant="secondary" shape="pill" label="Pill Shape"></ui-button>
          <ui-button variant="secondary" shape="chip" label="Chip Style"></ui-button>
          <ui-button variant="primary" shape="circle" icon="plus" icon-library="lucide"></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Premium Effects</h3>
        <div class="demo-grid-wrapper">
          <ui-button variant="glass" label="Premium Glass" icon="sparkles" icon-library="lucide"></ui-button>
          <ui-button variant="raised" label="Raised Button" icon="layers" icon-library="lucide"></ui-button>
          <ui-button variant="dark" label="Dark Theme" icon="moon" icon-library="lucide" shape="pill"></ui-button>
        </div>
      </div>
    `;
}

function showButtonIcons() {
  const container = document.getElementById('buttonDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div class="demo-block">
        <h3>Icon Positions</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Icons can be placed at any side of the label using the <code>icon-position</code> prop.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-button label="Left Icon" icon="arrow-left" icon-library="lucide" icon-position="left" variant="outline" size="md"></ui-button>
          <ui-button label="Right Icon" icon="arrow-right" icon-library="lucide" icon-position="right" variant="outline" size="md"></ui-button>
          <ui-button label="Top Icon" icon="arrow-up" icon-library="lucide" icon-position="top" variant="outline" size="md"></ui-button>
          <ui-button label="Bottom Icon" icon="arrow-down" icon-library="lucide" icon-position="bottom" variant="outline" size="md"></ui-button>
        </div>
      </div>

      <div class="demo-block" style="margin-top: 24px;">
        <h3>Icon Only Shape Masterclass</h3>
        <p style="color: var(--text-secondary); margin-bottom: 12px;">The <code>icon-only</code> prop now defaults to a <strong>Rounded Square</strong> (8px) for consistent branding. Use the <code>shape="circle"</code> or <code>circle</code> prop to achieve the classic circular look.</p>
        <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap; background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 20px; border-radius: 12px;">
          
          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <ui-button icon="settings" icon-library="lucide" icon-only variant="primary" size="lg" shape="circle"></ui-button>
            <span style="font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">SHAPE="CIRCLE"</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <ui-button icon="bell" icon-library="lucide" icon-only variant="success" size="lg"></ui-button>
            <span style="font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">DEFAULT (ROUNDED)</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <ui-button icon="share-2" icon-library="lucide" icon-only variant="warning" size="lg" shape="square"></ui-button>
            <span style="font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">SQUARE (SHARP)</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <ui-button icon="mail" icon-library="lucide" icon-only variant="danger" size="lg" pill></ui-button>
            <span style="font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">PILL EXTENDED</span>
          </div>

          <div style="display: flex; flex-direction: column; align-items: center; gap: 8px;">
            <ui-button icon="plus" icon-library="lucide" variant="primary" shape="circle" size="lg" elevation="3" glow></ui-button>
            <span style="font-size: 11px; font-weight: 700; color:var(--text-secondary,#64748b);">FAB MODE</span>
          </div>

        </div>
      </div>

      <div class="demo-block" style="margin-top: 24px;">
        <h3>Icon Libraries Support</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Built-in support for popular icon font libraries and modern SVG-based systems.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 16px;">
          
          <!-- FontAwesome & Bootstrap -->
          <div style="background: var(--bg-secondary); padding: 16px; border-radius: 12px; border: 1px solid var(--border-default);">
            <h4 style="margin: 0 0 12px 0;">Classic Font Libraries</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px;">
              <ui-button label="FontAwesome" icon="fa-solid fa-flag" icon-library="fontawesome" variant="primary" size="md"></ui-button>
              <ui-button label="Bootstrap" icon="bi-lightning-fill" icon-library="bootstrap" variant="warning" size="md"></ui-button>
            </div>
            <div style="display: flex; gap: 10px;">
              <ui-button icon="fa-brands fa-github" icon-library="fontawesome" variant="outline" icon-only rounded></ui-button>
              <ui-button icon="bi-twitter-x" icon-library="bootstrap" variant="outline" icon-only rounded></ui-button>
            </div>
          </div>

          <!-- Lucide & Ionicons -->
          <div style="background: var(--bg-secondary); padding: 16px; border-radius: 12px; border: 1px solid var(--border-default);">
            <h4 style="margin: 0 0 12px 0;">Modern SVG Libraries</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px;">
              <ui-button label="Lucide" icon="zap" icon-library="lucide" variant="info" size="md"></ui-button>
              <ui-button label="Ionicons" icon="logo-ionic" icon-library="ionicons" variant="secondary" size="md"></ui-button>
            </div>
            <div style="display: flex; gap: 10px;">
              <ui-button icon="moon" icon-library="lucide" variant="ghost" icon-only rounded></ui-button>
              <ui-button icon="sunny" icon-library="ionicons" variant="ghost" icon-only rounded></ui-button>
            </div>
          </div>

          <!-- Iconoir & LineAwesome -->
          <div style="background: var(--bg-secondary); padding: 16px; border-radius: 12px; border: 1px solid var(--border-default);">
            <h4 style="margin: 0 0 12px 0;">Designer Libraries</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px;">
              <ui-button label="Iconoir" icon="iconoir-bright-star" icon-library="iconoir" variant="success" size="md"></ui-button>
              <ui-button label="LineAwesome" icon="las la-car" icon-library="icons8" variant="danger" size="md"></ui-button>
            </div>
            <div style="display: flex; gap: 10px;">
              <ui-button icon="iconoir-fingerprint" icon-library="iconoir" variant="outline" icon-only pill></ui-button>
              <ui-button icon="las la-carrot" icon-library="icons8" variant="outline" icon-only pill></ui-button>
            </div>
          </div>

          <!-- Custom: URL, SVG, Emoji -->
          <div style="background: var(--bg-secondary); padding: 16px; border-radius: 12px; border: 1px solid var(--border-default);">
            <h4 style="margin: 0 0 12px 0;">Custom Assets</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 12px;">
              <ui-button label="URL Image" icon="https://raw.githubusercontent.com/lucide-icons/lucide/main/icons/heart.svg" variant="outline" size="md"></ui-button>
              <ui-button label="Emoji" icon="🚀" variant="outline" size="md"></ui-button>
            </div>
            <div style="display: flex; gap: 10px;">
              <ui-button label="SVG Path" variant="outline" size="md" icon="M12 2L2 7l10 5l10-5zM2 17l10 5l10-5M2 12l10 5l10-5"></ui-button>
              <ui-button label="QuartzDS" icon="house" icon-library="se" variant="outline" size="md"></ui-button>
            </div>
          </div>

        </div>
      </div>

      <div class="demo-block" style="margin-top: 24px;">
         <h3>Badge Masterclass</h3>
         <p style="color: var(--text-secondary); margin-bottom: 24px;">Badges now correctly overflow the button corners. Demonstrate different shapes, positions, and color variants.</p>
         
         <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(300px, 1fr)); gap: 24px; background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 24px; border-radius: 16px;">
            
            <!-- Shapes & Badges -->
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <h4 style="margin: 0; font-size: 13px; color:var(--text-secondary,#64748b);">SHAPES & CORNERS</h4>
               <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                  <ui-button icon="bell" icon-library="lucide" icon-only badge="9+" variant="primary"></ui-button>
                  <ui-button icon="mail" icon-library="lucide" icon-only badge="3" variant="success" shape="circle"></ui-button>
                  <ui-button icon="message-square" icon-library="lucide" icon-only badge="New" variant="info" pill></ui-button>
               </div>
            </div>

            <!-- Variants & Colors -->
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <h4 style="margin: 0; font-size: 13px; color:var(--text-secondary,#64748b);">BADGE VARIANTS</h4>
               <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                  <ui-button label="Alert" badge="!" variant="outline" badge-color="warning"></ui-button>
                  <ui-button label="Done" badge="✓" variant="outline" badge-color="success"></ui-button>
                  <ui-button label="Premium" badge="Gold" variant="outline" badge-custom-color="#8b5cf6" badge-custom-text-color="#ffffff"></ui-button>
               </div>
            </div>

            <!-- Positions -->
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <h4 style="margin: 0; font-size: 13px; color:var(--text-secondary,#64748b);">POSITIONS</h4>
               <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                  <ui-button icon="bell" icon-library="lucide" icon-only badge="TR" badge-position="top-right" variant="secondary"></ui-button>
                  <ui-button icon="bell" icon-library="lucide" icon-only badge="TL" badge-position="top-left" variant="secondary"></ui-button>
                  <ui-button icon="bell" icon-library="lucide" icon-only badge="BR" badge-position="bottom-right" variant="secondary"></ui-button>
                  <ui-button icon="bell" icon-library="lucide" icon-only badge="BL" badge-position="bottom-left" variant="secondary"></ui-button>
               </div>
            </div>

            <!-- Inline Counters (Inside Button on Right Side) -->
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <h4 style="margin: 0; font-size: 13px; color:var(--text-secondary,#64748b);">INLINE COUNTERS</h4>
               <div style="display: flex; gap: 12px; flex-wrap: wrap;">
                  <ui-button label="Inbox" counter="12" variant="outline" counter-color="primary"></ui-button>
                  <ui-button label="Alerts" counter="!" variant="outline" counter-color="danger"></ui-button>
                  <ui-button label="Done" counter="✓" variant="outline" counter-color="success"></ui-button>
                  <ui-button label="Custom" counter="Premium" variant="outline" counter-custom-color="#8b5cf6" counter-custom-text-color="#ffffff"></ui-button>
               </div>
            </div>

            <!-- Both Overlay Badge and Inline Counter together with different colors -->
            <div style="display: flex; flex-direction: column; gap: 12px;">
               <h4 style="margin: 0; font-size: 13px; color:var(--text-secondary,#64748b);">BOTH BADGE (OVERLAY) & COUNTER (INLINE)</h4>
               <div style="display: flex; gap: 20px; flex-wrap: wrap;">
                  <ui-button label="Inbox" badge="9+" badge-color="danger" counter="12" variant="outline" counter-color="primary"></ui-button>
                  <ui-button label="Notifications" badge="New" badge-color="success" counter="5" variant="outline" counter-color="info"></ui-button>
                  <ui-button label="Custom Styles" badge="PRO" badge-custom-color="#8b5cf6" badge-custom-text-color="#ffffff" counter="Hot" variant="outline" counter-color="warning"></ui-button>
               </div>
            </div>

         </div>
      </div>

      <div class="demo-block" style="margin-top: 24px;">
         <h3>Interactive Counter</h3>
         <p style="color: var(--text-secondary); margin-bottom: 24px;">Click the button below to see the counter increment dynamically. This demonstrates real-time badge updates.</p>
         <div style="display: flex; gap: 20px; align-items: center; background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 24px; border-radius: 16px;">
            <ui-button id="counterBtn" icon="shopping-cart" icon-library="lucide" label="Add to Cart" badge="0" variant="primary"></ui-button>
            <ui-button id="resetCounterBtn" label="Reset Counter" variant="ghost" size="sm" color="danger"></ui-button>
         </div>
      </div>
    `;

  setTimeout(() => {
    const counterBtn = document.getElementById('counterBtn');
    const resetBtn = document.getElementById('resetCounterBtn');
    if (counterBtn) {
      let count = 0;
      counterBtn.addEventListener('buttonClick', () => {
        count++;
        counterBtn.badge = count;
      });
      if (resetBtn) {
        resetBtn.addEventListener('buttonClick', () => {
          count = 0;
          counterBtn.badge = 0;
        });
      }
    }
  }, 100);
}

function showPremiumButtons() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div class="demo-block">
        <h3>✨ Premium Features Dashboard</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Advanced interaction and styling patterns for professional-grade applications.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px;">
          
          <!-- Soft Variants -->
          <div class="demo-card-inner" style="padding: 20px; background: var(--bg-secondary); border:1px solid var(--border-default); border-radius: 12px;">
            <h4 style="margin: 0 0 16px 0;">☁️ Soft Variants</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <ui-button label="Primary" variant="outline" color="primary"></ui-button>
              <ui-button label="Success" variant="outline" color="success"></ui-button>
              <ui-button label="Danger" variant="outline" color="danger"></ui-button>
              <ui-button label="Info" variant="outline" color="info"></ui-button>
            </div>
          </div>

          <!-- Gradients -->
          <div class="demo-card-inner" style="padding: 20px; background: var(--bg-secondary); border:1px solid var(--border-default); border-radius: 12px;">
            <h4 style="margin: 0 0 16px 0;">🌈 Gradient Variants</h4>
            <div style="display: flex; gap: 10px; flex-wrap: wrap;">
              <ui-button label="Brand" variant="gradient"></ui-button>
              <ui-button label="Ocean" variant="gradient-ocean"></ui-button>
              <ui-button label="Sunset" variant="gradient-sunset"></ui-button>
              <ui-button label="Candy" variant="gradient-candy"></ui-button>
              <ui-button label="Gold" variant="gradient-gold"></ui-button>
              <ui-button label="Blue" variant="gradient-blue"></ui-button>
              <ui-button label="Purple" variant="gradient-purple"></ui-button>
              <ui-button label="Orange" variant="gradient-orange"></ui-button>
            </div>
          </div>

          <!-- Shortcuts & Copy -->
          <div class="demo-card-inner" style="padding: 20px; background: var(--bg-secondary); border:1px solid var(--border-default); border-radius: 12px;">
            <h4 style="margin: 0 0 16px 0;">📋 Utilities</h4>
            <div style="display: grid; gap: 12px;">
              <ui-button label="Copy API ID" icon="copy" icon-library="lucide" copy-value="ID_45920-X" variant="outline" full-width></ui-button>
              <ui-button label="Quick Search" icon="search" icon-library="lucide" shortcut="/" variant="outline" full-width></ui-button>
              <ui-button label="Save All" icon="save" icon-library="lucide" shortcut="ctrl+s" variant="primary" full-width></ui-button>
            </div>
          </div>

          <!-- States -->
          <div class="demo-card-inner" style="padding: 20px; background: var(--bg-primary); border: 1px solid var(--border-default); border-radius: 12px;">
            <h4 style="margin: 0 0 16px 0;">🦾 Advanced States</h4>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
              <ui-button label="Skeleton" skeleton variant="primary" width="120px"></ui-button>
              <ui-button label="Export" has-dropdown variant="outline"></ui-button>
              <ui-button label="Active Mode" active variant="success" icon="check" icon-library="lucide"></ui-button>
            </div>
          </div>

        </div>

        <div class="demo-block" style="margin-top: 32px; background: var(--bg-secondary); border: 1px solid var(--border-default); padding: 24px; border-radius: 16px;">
          <h3>📱 Responsive Labels</h3>
          <p style="margin-bottom: 20px; opacity: 0.8;">Resize your browser below 640px. The label "Edit Profile" will automatically hide and the button will collapse to its icon.</p>
          <ui-button label="Edit Profile" icon="user" icon-library="lucide" hide-label-on-mobile variant="primary" size="lg" shape="pill"></ui-button>
        </div>
      </div>
    `;
}

function showGodModeButtons() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div class="demo-block">
        <h3>⚡ God Mode: The Future of Interactions</h3>
        <p style="color: #6b7280; margin-bottom: 32px;">The absolute peak of UI engineering. A multi-sensory, hyper-safe experience.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 32px;">
          
          <!-- Safety & Critical Flows -->
          <div class="demo-card-inner" style="padding: 24px; background: var(--bg-secondary); border:1px solid var(--border-default); border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <h4 style="margin: 0 0 20px 0; color:var(--accent-red,#ef4444);">🛡️ High-Stakes Safety</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-button label="Purge Memory" variant="danger" hold-time="2000" shake audio="error" haptic full-width></ui-button>
              <ui-button label="Delete Cloud" variant="outline" color="danger" confirm-bubble confirm-label="Permanent Delete?" audio="error" full-width></ui-button>
              <ui-button label="Resend OTP" timer="15" shake variant="outline" color="primary" full-width></ui-button>
            </div>
          </div>

          <!-- Hyper-Premium Aesthetics -->
          <div class="demo-card-inner" style="padding: 24px; background: var(--bg-secondary); border:1px solid var(--border-default); border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <h4 style="margin: 0 0 20px 0; color:var(--accent-purple,#8b5cf6);">🕹️ Hyper-Aesthetics</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-button label="VIP Rainbow Glow" variant="dark" glow rainbow glossy audio="click" full-width></ui-button>
              <ui-button label="Liquid Wave Progress" variant="primary" progress="45" liquid audio="click" full-width></ui-button>
              <ui-button label="Success Morph" variant="success" success-morph="2000" haptic full-width></ui-button>
            </div>
          </div>

          <!-- Smart Branding & Toggling -->
          <div class="demo-card-inner" style="padding: 24px; background: var(--bg-secondary); border:1px solid var(--border-default); border-radius: 16px; box-shadow: 0 4px 20px rgba(0,0,0,0.05);">
            <h4 style="margin: 0 0 20px 0; color:var(--accent-yellow,#f59e0b);">🏗️ Orchestrated Motion</h4>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="display: flex; gap: 10px;">
                 <ui-button label="1" variant="outline" reveal="slide-up" reveal-delay="0"></ui-button>
                 <ui-button label="2" variant="outline" reveal="slide-up" reveal-delay="150"></ui-button>
                 <ui-button label="3" variant="outline" reveal="slide-up" reveal-delay="300"></ui-button>
              </div>
              <ui-button label="Task in Progress" loading progress="65" variant="outline" color="primary" full-width></ui-button>
              <ui-button label="Purge Memory" shatter variant="danger" audio="error" full-width></ui-button>
            </div>
          </div>

        </div>

        <div class="demo-block" style="margin-top: 40px; padding: 48px; background: #000; border-radius: 24px; text-align: center; color: #fff; overflow: hidden; position: relative;">
           <h2 style="margin-bottom: 24px; font-weight: 800; font-size: 32px; letter-spacing: -0.5px;">🧬 The Final End-Game Component</h2>
           <p style="margin-bottom: 40px; opacity: 0.6; font-size: 18px;">Shatter + Follow Glow + Spin + Slider + Rainbow + 3D Tilt</p>
           
           <div style="display: flex; justify-content: center; gap: 40px;">
              <ui-button 
                label="The Unstoppable Action" 
                mode="slider"
                size="xxl" 
                shape="pill" 
                gradient-style="blaze"
                animate-gradient
                pulse follow-glow
                tilt 
                magnetic 
                glow 
                haptic 
                celebrate 
              ></ui-button>
           </div>
        </div>
      </div>
    `;
}

function showInteractiveButton() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="playground-wrapper" style="display: flex; height: 800px; background: var(--bg-secondary); border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); border: 1px solid var(--border-default);">
      <!-- Left Sidebar: Component Workbench -->
      <div class="playground-sidebar" style="width: 400px; flex-shrink: 0; border-right: 1px solid var(--border-default); background: var(--bg-secondary); display: flex; flex-direction: column;">
        <div style="padding: 28px; border-bottom: 1px solid var(--border-default); flex-shrink: 0;">
          <h3 style="margin: 0; font-size: 1.2rem; background: linear-gradient(to right, var(--text-primary), var(--text-secondary)); -webkit-background-clip: text; -webkit-text-fill-color: transparent; display: flex; align-items: center; gap: 12px; font-weight: 800; letter-spacing: -0.02em;">
            <ui-icon name="tool" library="lucide" color="primary"></ui-icon>
            Component Workbench
          </h3>
        </div>
        
        <div class="playground-sidebar-scroll" style="flex: 1; overflow-y: auto; padding: 28px; display: flex; flex-direction: column; gap: 28px;">
          <!-- Section: Aesthetics -->
          <div class="setting-card">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--bg-primary); display: flex; align-items: center; justify-content: center;"><ui-icon name="palette" size="16px" color="primary"></ui-icon></div>
              <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); font-weight: 700;">Aesthetics & Branding</h4>
            </div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-input id="btnLabel" label="Visual Label" value="Click Me!" size="md" variant="outlined"></ui-input>
              <ui-dropdown id="btnVariant" label="Style Variant" value="primary" options='[
                {"label": "Primary", "value": "primary"}, {"label": "Secondary", "value": "secondary"},
                {"label": "Success", "value": "success"}, {"label": "Danger", "value": "danger"},
                {"label": "Warning", "value": "warning"}, {"label": "Info", "value": "info"},
                {"label": "Outline", "value": "outline"}, {"label": "Ghost", "value": "ghost"},
                {"label": "Glass", "value": "glass"}, {"label": "Raised", "value": "raised"},
                {"label": "Dark", "value": "dark"}, {"label": "Gradient (Brand)", "value": "gradient"}
              ]' size="md" variant="outlined"></ui-dropdown>
      
                <ui-dropdown id="btnSize" label="Scale" value="md" options='[
                  {"label": "XS", "value": "xs"}, {"label": "Small", "value": "sm"},
                  {"label": "Medium", "value": "md"}, {"label": "Large", "value": "lg"},
                  {"label": "X-Large", "value": "xl"}, {"label": "2X-Large", "value": "xxl"}
                ]' size="md" variant="outlined"></ui-dropdown>
                <ui-dropdown id="btnShape" label="Corner Engine" value="rounded" options='[
                  {"label": "Rounded", "value": "rounded"}, {"label": "Square", "value": "square"},
                  {"label": "Pill", "value": "pill"}, {"label": "Chip", "value": "chip"},
                  {"label": "Circle", "value": "circle"}
                ]' size="md" variant="outlined"></ui-dropdown>
            
            </div>
          </div>

          <!-- Section: Icons -->
          <div class="setting-card">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--bg-primary); display: flex; align-items: center; justify-content: center;"><ui-icon name="image" size="16px" color="danger"></ui-icon></div>
              <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); font-weight: 700;">Icons & Adornments</h4>
            </div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <ui-input id="btnIcon" label="Glyph Name" value="star" size="md" variant="outlined"></ui-input>
                <ui-dropdown id="btnIconLibrary" label="Library" value="lucide" options='[
                  {"label": "Lucide", "value": "lucide"}, {"label": "FontAwesome", "value": "fontawesome"},
                  {"label": "Bootstrap", "value": "bootstrap"}, {"label": "Ionicons", "value": "ionicons"},
                  {"label": "SE (Quartz)", "value": "se"}
                ]' size="md" variant="outlined"></ui-dropdown>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <ui-dropdown id="btnIconPosition" label="Position" value="left" options='[
                  {"label": "Left", "value": "left"}, {"label": "Right", "value": "right"},
                  {"label": "Top", "value": "top"}, {"label": "Bottom", "value": "bottom"}
                ]' size="md" variant="outlined"></ui-dropdown>
                <ui-input id="btnBadge" label="Overlay Badge" value="" size="md" variant="outlined" placeholder="e.g. 9+"></ui-input>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <ui-dropdown id="btnBadgeColor" label="Badge Color" value="danger" options='[
                  {"label": "Primary", "value": "primary"},
                  {"label": "Secondary", "value": "secondary"},
                  {"label": "Success", "value": "success"},
                  {"label": "Danger", "value": "danger"},
                  {"label": "Warning", "value": "warning"},
                  {"label": "Info", "value": "info"}
                ]' size="md" variant="outlined"></ui-dropdown>
                <ui-input id="btnCounter" label="Inline Counter" value="" size="md" variant="outlined" placeholder="e.g. 5"></ui-input>
              </div>
              <div style="display: grid; grid-template-columns: 1fr; gap: 12px;">
                <ui-dropdown id="btnCounterColor" label="Counter Color" value="" options='[
                  {"label": "Default", "value": ""},
                  {"label": "Primary", "value": "primary"},
                  {"label": "Secondary", "value": "secondary"},
                  {"label": "Success", "value": "success"},
                  {"label": "Danger", "value": "danger"},
                  {"label": "Warning", "value": "warning"},
                  {"label": "Info", "value": "info"}
                ]' size="md" variant="outlined"></ui-dropdown>
              </div>
              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <ui-input id="btnCounterCustomColor" label="Custom Bg" value="" size="md" variant="outlined" placeholder="e.g. #8b5cf6"></ui-input>
                <ui-input id="btnCounterCustomTextColor" label="Custom Text" value="" size="md" variant="outlined" placeholder="e.g. #ffffff"></ui-input>
              </div>
            </div>
          </div>

          <!-- Section: Advanced Behaviors -->
          <div class="setting-card">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--bg-primary); display: flex; align-items: center; justify-content: center;"><ui-icon name="zap" size="16px" color="info"></ui-icon></div>
              <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); font-weight: 700;">Operational States</h4>
            </div>
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
              <ui-checkbox id="btnLoading" label="Loading Mode" size="md"></ui-checkbox>
              <ui-checkbox id="btnDisabled" label="Deactivated" size="md"></ui-checkbox>
              <ui-checkbox id="btnIconOnly" label="Icon Focus" size="md"></ui-checkbox>
              <ui-checkbox id="btnFullWidth" label="Full Stretch" size="md"></ui-checkbox>
              <ui-checkbox id="btnSkeleton" label="Ghost Skeleton" size="md"></ui-checkbox>
              <ui-checkbox id="btnActive" label="Forced Active" size="md"></ui-checkbox>
            </div>
          </div>

          <!-- Section: God Mode -->
          <div class="setting-card" style="border-left: 4px solid var(--color-primary, #8b5cf6);">
            <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
              <div style="width: 32px; height: 32px; border-radius: 8px; background: var(--bg-primary); display: flex; align-items: center; justify-content: center;"><ui-icon name="sparkles" size="16px" color="primary"></ui-icon></div>
              <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); font-weight: 700;">Zenith Features</h4>
            </div>
            <div style="display: flex; flex-direction: column; gap: 16px;">
               <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                <ui-number-input id="btnHoldTime" label="Hold (ms)" value="0" step="500" size="md" variant="outlined"></ui-number-input>
                <ui-number-input id="btnTimer" label="Timer (s)" value="0" size="md" variant="outlined"></ui-number-input>
              </div>
              <ui-input id="btnConfirmLabel" label="Safe Confirmation" placeholder="e.g. Are you sure?" size="md" variant="outlined"></ui-input>
              <ui-dropdown id="btnReveal" label="Entrance Reveal" value="none" options='[
                {"label": "None", "value": "none"}, {"label": "Slide Up", "value": "slide-up"},
                {"label": "Fade In", "value": "fade-in"}, {"label": "Zoom Master", "value": "zoom"}
              ]' size="md" variant="outlined"></ui-dropdown>
            </div>
          </div>
        </div>
      </div>

      <!-- Main Preview Area -->
      <div class="playground-main" style="flex: 1; display: flex; flex-direction: column; background: var(--bg-primary);">
        <div style="padding: 20px 32px; border-bottom: 1px solid var(--border-default); display: flex; justify-content: space-between; align-items: center; background: var(--bg-secondary);">
          <div style="display: flex; gap: 12px; align-items: center;">
            <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-muted); font-weight: 700;">Synthesis Visualizer</span>
          </div>
        </div>

        <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 60px; position: relative;">
          <div id="btnInteractiveContainer" style="transform: scale(1.2); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);"></div>
        </div>

        <!-- Code Artifact -->
        <div style="padding: 32px; background: var(--bg-secondary); border-top: 1px solid var(--border-default);">
           <ui-code-preview id="buttonCodePreview" label="Snippet" language="html"></ui-code-preview>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const ctrls = container.querySelectorAll('ui-input, ui-dropdown, ui-checkbox, ui-number-input');
    ctrls.forEach(ctrl => {
      let eventName;
      if (ctrl.tagName === 'UI-CHECKBOX') {
        eventName = 'checkboxChange';
      } else if (ctrl.tagName === 'UI-DROPDOWN') {
        eventName = 'valueChange';
      } else if (ctrl.tagName === 'UI-NUMBER-INPUT') {
        eventName = 'numberChange';
      } else {
        eventName = 'inputChange';
      }
      ctrl.addEventListener(eventName, () => {
        updateInteractiveButton();
      });
    });
    updateInteractiveButton();
  }, 100);
}

function updateInteractiveButton() {
  const container = document.getElementById('btnInteractiveContainer');
  const codeDisp = document.getElementById('buttonCodePreview');
  if (!container) return;

  const label = document.getElementById('btnLabel')?.value || 'Click Me!';
  const variant = document.getElementById('btnVariant')?.value || 'primary';
  const size = document.getElementById('btnSize')?.value || 'md';
  const shape = document.getElementById('btnShape')?.value || 'rounded';
  const icon = document.getElementById('btnIcon')?.value || '';
  const iconLib = document.getElementById('btnIconLibrary')?.value || 'lucide';
  const iconPos = document.getElementById('btnIconPosition')?.value || 'left';
  const badge = document.getElementById('btnBadge')?.value || '';
  const badgeColor = document.getElementById('btnBadgeColor')?.value || '';
  const counter = document.getElementById('btnCounter')?.value || '';
  const counterColor = document.getElementById('btnCounterColor')?.value || '';
  const counterCustomColor = document.getElementById('btnCounterCustomColor')?.value || '';
  const counterCustomTextColor = document.getElementById('btnCounterCustomTextColor')?.value || '';

  const loading = document.getElementById('btnLoading')?.checked;
  const disabled = document.getElementById('btnDisabled')?.checked;
  const iconOnly = document.getElementById('btnIconOnly')?.checked;
  const fullWidth = document.getElementById('btnFullWidth')?.checked;
  const skeleton = document.getElementById('btnSkeleton')?.checked;
  const active = document.getElementById('btnActive')?.checked;

  const holdTime = document.getElementById('btnHoldTime')?.value || 0;
  const timer = document.getElementById('btnTimer')?.value || 0;
  const confirmLabel = document.getElementById('btnConfirmLabel')?.value || '';
  const reveal = document.getElementById('btnReveal')?.value || 'none';

  let props = ` label="${label}" variant="${variant}" size="${size}" shape="${shape}"`;
  if (icon) props += ` icon="${icon}"`;
  if (iconLib !== 'lucide') props += ` icon-library="${iconLib}"`;
  if (iconPos !== 'left') props += ` icon-position="${iconPos}"`;
  if (badge) props += ` badge="${badge}"`;
  if (badgeColor && badgeColor !== 'danger') props += ` badge-color="${badgeColor}"`;
  if (counter) props += ` counter="${counter}"`;
  if (counterColor) props += ` counter-color="${counterColor}"`;
  if (counterCustomColor) props += ` counter-custom-color="${counterCustomColor}"`;
  if (counterCustomTextColor) props += ` counter-custom-text-color="${counterCustomTextColor}"`;
  if (loading) props += ' loading';
  if (disabled) props += ' disabled';
  if (iconOnly) props += ' icon-only';
  if (fullWidth) props += ' full-width';
  if (skeleton) props += ' skeleton';
  if (active) props += ' active';
  if (holdTime > 0) props += ` hold-time="${holdTime}"`;
  if (timer > 0) props += ` timer="${timer}"`;
  if (confirmLabel) props += ` confirm-bubble confirm-label="${confirmLabel}"`;
  if (reveal !== 'none') props += ` reveal="${reveal}"`;

  const html = `<ui-button${props}></ui-button>`;
  container.innerHTML = html;
  if (codeDisp) codeDisp.htmlCode = html;
}

function showGradientButtons() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div class="demo-block">
        <h3>🌈 Gradient Buttons</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Premium gradient variants with smooth hover effects and glow shadows. Use the <code>variant</code> prop with any gradient name.</p>

        <div style="display: flex; flex-direction: column; gap: 28px;">

          <!-- Row 1: Basic gradient buttons -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">Solid Gradients</h4>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
              <ui-button variant="gradient" label="Brand Green"></ui-button>
              <ui-button variant="gradient-blue" label="Blue Purple"></ui-button>
              <ui-button variant="gradient-purple" label="Purple Pink"></ui-button>
              <ui-button variant="gradient-orange" label="Orange Red"></ui-button>
              <ui-button variant="gradient-ocean" label="Ocean"></ui-button>
              <ui-button variant="gradient-sunset" label="Sunset"></ui-button>
              <ui-button variant="gradient-candy" label="Candy"></ui-button>
              <ui-button variant="gradient-gold" label="Gold"></ui-button>
            </div>
          </div>

          <!-- Row 2: With icons -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">With Icons</h4>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
              <ui-button variant="gradient" label="Dashboard" icon="layout-dashboard" icon-library="lucide"></ui-button>
              <ui-button variant="gradient-blue" label="Analytics" icon="bar-chart-2" icon-library="lucide"></ui-button>
              <ui-button variant="gradient-purple" label="Premium" icon="star" icon-library="lucide"></ui-button>
              <ui-button variant="gradient-orange" label="Alert" icon="zap" icon-library="lucide"></ui-button>
              <ui-button variant="gradient-ocean" label="Explore" icon="compass" icon-library="lucide"></ui-button>
              <ui-button variant="gradient-candy" label="Like" icon="heart" icon-library="lucide"></ui-button>
              <ui-button variant="gradient-gold" label="Award" icon="award" icon-library="lucide"></ui-button>
            </div>
          </div>

          <!-- Row 3: Pill shape -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">Pill Shape</h4>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
              <ui-button variant="gradient" label="Green Pill" pill></ui-button>
              <ui-button variant="gradient-blue" label="Blue Pill" pill></ui-button>
              <ui-button variant="gradient-purple" label="Purple Pill" pill></ui-button>
              <ui-button variant="gradient-sunset" label="Sunset Pill" pill></ui-button>
            </div>
          </div>

          <!-- Row 4: Icon only -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">Icon Only</h4>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
              <ui-button variant="gradient" icon="zap" icon-library="lucide" icon-only pill></ui-button>
              <ui-button variant="gradient-blue" icon="star" icon-library="lucide" icon-only pill></ui-button>
              <ui-button variant="gradient-purple" icon="heart" icon-library="lucide" icon-only pill></ui-button>
              <ui-button variant="gradient-orange" icon="flame" icon-library="lucide" icon-only pill></ui-button>
              <ui-button variant="gradient-ocean" icon="waves" icon-library="lucide" icon-only pill></ui-button>
              <ui-button variant="gradient-candy" icon="candy" icon-library="lucide" icon-only pill></ui-button>
              <ui-button variant="gradient-gold" icon="award" icon-library="lucide" icon-only pill></ui-button>
            </div>
          </div>

          <!-- Row 5: Sizes -->
          <div>
            <h4 style="margin: 0 0 12px 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.08em; color: #9ca3af;">Sizes</h4>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
              <ui-button variant="gradient-blue" label="Small" size="md"></ui-button>
              <ui-button variant="gradient-blue" label="md" size="md"></ui-button>
              <ui-button variant="gradient-blue" label="Large" size="large"></ui-button>
              <ui-button variant="gradient-blue" label="XL" size="xl"></ui-button>
                </div>
          </div>

        </div>
      </div>
       <div class="demo-block">
        <h3>Button with Subtitle</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">You can add a subtitle below the main button label using the <code>subtitle</code> prop.</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: flex-start;">
      <ui-button label="Main Action" subtitle="This is a subtitle"  variant="primary"></ui-button>
          <ui-button label="Main Action" subtitle="This is a subtitle" icon="zap" icon-library="lucide" variant="primary"></ui-button>
          <ui-button label="Save" subtitle="Saves your changes" icon="save" icon-library="lucide" variant="success"></ui-button>
          <ui-button label="Delete" subtitle="Cannot be undone" icon="trash-2" icon-library="lucide" variant="danger"></ui-button>
          
        </div>
      </div>
    `;
}

function showBasicButtons() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;

  container.innerHTML = `
      <div class="demo-block">
        <h3>Variants</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
          <ui-button label="Primary" variant="primary"></ui-button>
          <ui-button label="Secondary" variant="secondary"></ui-button>
          <ui-button label="Success" variant="success"></ui-button>
          <ui-button label="Danger" variant="danger"></ui-button>
          <ui-button label="Warning" variant="warning"></ui-button>
          <ui-button label="Info" variant="info"></ui-button>
          <ui-button label="Outline" variant="outline"></ui-button>
          <ui-button label="Ghost" variant="ghost"></ui-button>
          <ui-button label="Glass" variant="glass"></ui-button>
          <ui-button label="Raised" variant="raised"></ui-button>
          <ui-button label="Dark" variant="dark"></ui-button>
        </div>
        <h4 style="margin: 20px 0 12px; font-size: 13px; text-transform: uppercase; letter-spacing: 0.06em; color: #9ca3af;">🌈 Gradient Variants</h4>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 8px;">
          <ui-button label="Brand" variant="gradient"></ui-button>
          <ui-button label="Blue Purple" variant="gradient-blue"></ui-button>
          <ui-button label="Purple Pink" variant="gradient-purple"></ui-button>
          <ui-button label="Orange Red" variant="gradient-orange"></ui-button>
          <ui-button label="Ocean" variant="gradient-ocean"></ui-button>
          <ui-button label="Sunset" variant="gradient-sunset"></ui-button>
          <ui-button label="Candy" variant="gradient-candy"></ui-button>
          <ui-button label="Gold" variant="gradient-gold"></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Link Style</h3>
        <ui-button label="Link Button" variant="ghost" style="text-decoration: underline; color: #10b981;"></ui-button>
        <ui-button label="Real Anchor Link" href="https://example.com" target="_blank" variant="outline" icon="link" icon-library="lucide"></ui-button>
        <ui-button label="No Ripple" no-ripple variant="secondary"></ui-button>
      </div>
      <div class="demo-block">
        <h3>Width Configuration</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Buttons can be set to <code>full-width</code> or custom <code>width</code> / <code>min-width</code> values.</p>
        <div style="display: flex; flex-direction: column; gap: 16px;">
          <ui-button label="Full Width Button" full-width variant="primary"></ui-button>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
             <ui-button label="Width: 200px" width="200px" variant="outline"></ui-button>
             <ui-button label="Width: 50%" width="50%" variant="info"></ui-button>
             <ui-button label="Max-Fit" width="max-content" variant="primary"></ui-button>
             <ui-button label="Min-Width: 150px" min-width="150px" variant="secondary"></ui-button>
          </div>
        </div>
      </div>
    `;
}

globalThis.showBasicButtons = showBasicButtons;

function showImageButtons() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;

  container.innerHTML = `
      <div class="demo-block">
        <h3>Image Buttons</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Buttons can use images alongside labels for rich visual interaction.</p>
        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <ui-button type="image" img-src="https://picsum.photos/id/237/64/64" img-alt="Puppy" label="Adopt Me" variant="primary"></ui-button>
          <ui-button type="image" img-src="https://picsum.photos/id/1025/64/64" img-alt="Pug" label="Pug Life" variant="outline"></ui-button>
          <ui-button type="image" img-src="https://picsum.photos/id/200/64/64" img-alt="Cow" label="Moo!" variant="success" shape="rounded"></ui-button>
          <ui-button type="image" img-src="https://picsum.photos/id/100/64/64" img-alt="Beach" label="Vacation" variant="info" shape="pill"></ui-button>
        </div>
        <div style="margin-top: 12px; background: #1e2937; color: #e2e8f0; padding: 16px; border-radius: 10px; font-size: 13px; overflow-x: auto;">
          <code>&lt;ui-button type="image" img-src="..." label="Adopt Me" variant="primary"&gt;&lt;/ui-button&gt;</code>
        </div>
      </div>
    `;
}

function showAvatarButtons() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;

  container.innerHTML = `
      <div class="demo-block">
        <h3>Avatar Buttons</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Buttons with circular profile images and real-time status indicators.</p>
        
        <div style="display: flex; flex-direction: column; gap: 32px;">
          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">User Profile Button</h4>
            <div style="display: flex; gap: 16px; flex-wrap: wrap; align-items: center;">
              <ui-button label="Praveen" avatar-src="/build/assets/images/logo.png" avatar-status="online" variant="outline" shape="pill"></ui-button>
              <ui-button label="Sarah Chen" avatar-src="/build/assets/images/logo.png" avatar-status="busy" variant="outline" shape="rounded"></ui-button>
              <ui-button label="System Admin" avatar-src="/build/assets/images/logo.png" avatar-status="offline" variant="dark" shape="pill"></ui-button>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Various Sizes (Profile Card Concept)</h4>
            <div style="display: flex; gap: 20px; flex-wrap: wrap; align-items: flex-end;">
              <ui-button size="md" label="Small" avatar-src="/build/assets/images/logo.png" avatar-status="away" variant="outline"></ui-button>
              <ui-button size="md" label="md" avatar-src="/build/assets/images/logo.png" avatar-status="online" variant="outline"></ui-button>
              <ui-button size="lg" label="Large" avatar-src="/build/assets/images/logo.png" avatar-status="busy" variant="outline"></ui-button>
              <ui-button size="xl" label="X-Large" avatar-src="/build/assets/images/logo.png" avatar-status="online" variant="outline"></ui-button>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Avatar Only (Quick Select)</h4>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
              <ui-button avatar-src="/build/assets/images/logo.png" avatar-status="online" variant="ghost" title="User 1"></ui-button>
              <ui-button avatar-src="/build/assets/images/logo.png" avatar-status="away" variant="ghost" title="User 2"></ui-button>
              <ui-button avatar-src="/build/assets/images/logo.png" avatar-status="busy" variant="ghost" title="User 3"></ui-button>
              <ui-button avatar-src="/build/assets/images/logo.png" avatar-status="online" variant="ghost" title="User 4"></ui-button>
              <ui-button variant="outline" shape="circle" icon="plus" icon-library="lucide" title="Add User"></ui-button>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Explicitly Circle Shorthand</h4>
            <div style="display: flex; gap: 16px; flex-wrap: wrap;">
               <ui-button avatar-src="/build/assets/images/logo.png" circle variant="primary"></ui-button>
               <ui-button avatar-src="/build/assets/images/logo.png" avatar-status="online" circle variant="secondary"></ui-button>
               <ui-button avatar-src="/build/assets/images/logo.png" label="Circle with Label" circle variant="outline"></ui-button>
            </div>
          </div>
        </div>
      </div>
    `;
}

function showButtonStates() {
  const container = document.getElementById('buttonDemoContainer');
  if (!container) return;

  container.innerHTML = `
      <div class="demo-block">
        <h3>Loading States</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Spinners can be placed on either side of the label.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
          <ui-button label="Loading Left" loading loading-position="left" variant="primary"></ui-button>
          <ui-button label="Loading Right" loading loading-position="right" variant="success"></ui-button>
          <ui-button label="Outline Loading" loading variant="outline" shape="pill"></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Inline Counters</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Use <code>counter</code> for quantities within the button, distinct from status badges.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-button label="Messages" counter="5" variant="primary"></ui-button>
          <ui-button label="Tasks" counter="12" counter-color="success" counter-variant="outline" variant="outline"></ui-button>
          <ui-button label="Alerts" counter="!" counter-color="warning" variant="glass"></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Disabled States</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin: 16px 0;">
          <ui-button label="Primary" disabled variant="primary"></ui-button>
          <ui-button label="Success" disabled variant="success"></ui-button>
          <ui-button label="Danger" disabled variant="danger"></ui-button>
        </div>
      </div>
    `;
}

function showRichLayoutButtons() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;

  container.innerHTML = `
      <div class="demo-block">
        <h3>Rich Typography & Metadata</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">The <code>ui-button</code> now natively supports <code>description</code> (or <code>subtitle</code>) with flexible placement.</p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
          
          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 16px;">
            <h4 style="margin-bottom: 16px; font-size: 14px; color:var(--text-secondary,#64748b);">POSITION: BELOW (DEFAULT)</h4>
            <div style="display: flex; flex-direction: column; gap:12px;">
              <ui-button label="Network Status" description="Connected to Enterprise-WiFi" icon="wifi" icon-library="lucide" variant="outline" full-width></ui-button>
              <ui-button label="Save Changes" subtitle="Updating 12 parameters..." icon="save" icon-library="lucide" variant="success" full-width></ui-button>
            </div>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 16px;">
            <h4 style="margin-bottom: 16px; font-size: 14px; color:var(--text-secondary,#64748b);">POSITION: ABOVE</h4>
            <div style="display: flex; flex-direction: column; gap:12px;">
              <ui-button description="SYSTEM CRITICAL" label="Shutdown Server" description-position="above" icon="power" icon-library="lucide" variant="danger" full-width></ui-button>
              <ui-button description="BETA FEATURE" label="Explore Labs" description-position="above" variant="outline" color="primary" full-width></ui-button>
            </div>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 16px;">
            <h4 style="margin-bottom: 16px; font-size: 14px; color:var(--text-secondary,#64748b);">POSITION: LEFT (SIDE-BY-SIDE)</h4>
            <div style="display: flex; flex-direction: column; gap:12px;">
              <ui-button description="5.2GB" label="Download Data" description-position="left" icon="download" icon-library="lucide" variant="outline" full-width></ui-button>
              <ui-button description="v2.4.0" label="Deploy Model" description-position="left" icon="zap" icon-library="lucide" variant="outline" color="success" full-width></ui-button>
            </div>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 16px;">
            <h4 style="margin-bottom: 16px; font-size: 14px; color:var(--text-secondary,#64748b);">POSITION: RIGHT (METADATA)</h4>
            <div style="display: flex; flex-direction: column; gap:12px;">
              <ui-button description="Locked" label="Admin Panel" description-position="right" icon="lock" icon-library="lucide" variant="outline" color="warning" full-width></ui-button>
              <ui-button description="2 min ago" label="Last Updated" description-position="right" icon="clock" icon-library="lucide" variant="ghost" full-width></ui-button>
            </div>
          </div>

          <div class="demo-card-inner" style="padding: 24px; border:1px solid var(--border-default,#e2e8f0); border-radius: 16px; grid-column: span 2;">
            <h4 style="margin-bottom: 16px; font-size: 14px; color:var(--text-secondary,#64748b);">PERFECTLY CENTERED (DEFAULT)</h4>
            <div style="display: flex; flex-direction: column; gap:12px;">
              <ui-button label="System Maintenance" subtitle="Scheduled for 2:00 AM UTC" icon="settings" variant="glass" full-width></ui-button>
              <ui-button label="Cloud Sync" description="All files are up to date" icon="cloud-check" color="success" shape="pill" full-width></ui-button>
            </div>
          </div>

        </div>
      </div>

      <div class="demo-block" style="margin-top: 32px;">
        <h3>Premium Contextual Buttons</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Combine avatars, status indicators, and descriptions for advanced profile actions.</p>
        <div style="display: flex; gap: 24px; flex-wrap: wrap;">
           <ui-button 
             label="Praveen Kumar" 
             description="Product Engineer • Seattle" 
             avatar-src="/build/assets/images/logo.png" 
             avatar-status="online" 
             variant="outline" 
             shape="rounded"
             style="padding: 12px 20px; height: auto;"
           ></ui-button>

           <ui-button 
             label="Security Guard" 
             description="Access Control Active" 
             icon="shield-check" 
             icon-library="lucide"
             variant="outline" 
             color="success"
             shape="pill"
             style="padding: 10px 18px; height: auto;"
           ></ui-button>
        </div>
      </div>
    `;
}

function showButtonToggleGroups() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;

  container.innerHTML = `
      <div class="demo-block">
        <h3>Selection Groups (The New Engine)</h3>
        <p style="color: #6b7280; margin-bottom: 32px;">The <code>ui-button-toggle-group</code> now orchestrates standard <code>ui-button</code> atoms for high-fidelity selection interfaces.</p>
        
        <div style="display: flex; flex-direction: column; gap: 48px;">
          
          <!-- Staggered Entrance Reveal -->
          <div>
            <h4 style="margin-bottom:16px; font-size:14px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">Staggered Entrance Reveal</h4>
            <div style="display: flex; gap: 24px; flex-wrap: wrap;">
               <ui-button-toggle-group value="r1" reveal="slide-up" reveal-delay="300" reveal-stagger="100">
                  <ui-button value="r1" label="Development" icon="code" icon-library="lucide"></ui-button>
                  <ui-button value="r2" label="Production" icon="ship" icon-library="lucide"></ui-button>
                  <ui-button value="r3" label="Maintenance" icon="tool" icon-library="lucide"></ui-button>
               </ui-button-toggle-group>

               <ui-button-toggle-group value="z1" reveal="zoom" reveal-delay="600" reveal-stagger="150" color="secondary" shape="pill" variant="glass">
                  <ui-button value="z1" label="Alpha" icon="layers" icon-library="lucide"></ui-button>
                  <ui-button value="z2" label="Beta" icon="layout" icon-library="lucide"></ui-button>
               </ui-button-toggle-group>
            </div>
          </div>

          <!-- Gradient Groups -->
          <div>
            <h4 style="margin-bottom:16px; font-size:14px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">✨ High-Fidelity Gradients</h4>
            <div style="display: flex; flex-direction: column; gap: 24px;">
               <ui-button-toggle-group color='{"from": "#6366f1", "to": "#ec4899"}' value="opt1" shape="rounded">
                  <ui-button value="opt1" label="Launch" icon="rocket" icon-library="lucide"></ui-button>
                  <ui-button value="opt2" label="Orbit" icon="orbit" icon-library="lucide"></ui-button>
                  <ui-button value="opt3" label="Landing" icon="target" icon-library="lucide"></ui-button>
               </ui-button-toggle-group>
               
               <ui-button-toggle-group color='{"from": "#10b981", "to": "#3b82f6"}' value="opt1" shape="pill" variant="outline">
                  <ui-button value="opt1" label="Eco Plan" icon="leaf" icon-library="lucide"></ui-button>
                  <ui-button value="opt2" label="Swift Flow" icon="zap" icon-library="lucide"></ui-button>
               </ui-button-toggle-group>
            </div>
          </div>

          <!-- Avatar Groups -->
          <div>
            <h4 style="margin-bottom:16px; font-size:14px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">Premium Avatar Status Select</h4>
            <ui-button-toggle-group value="online" color="info">
              <ui-button value="online" label="Online" avatar-src="/build/assets/images/logo.png" avatar-status="online" icon="user-check" icon-library="lucide"></ui-button>
              <ui-button value="away" label="Away" avatar-src="/build/assets/images/logo.png" avatar-status="away" icon="clock" icon-library="lucide"></ui-button>
              <ui-button value="busy" label="Do Not Disturb" avatar-src="/build/assets/images/logo.png" avatar-status="busy" icon="minus-circle" icon-library="lucide"></ui-button>
            </ui-button-toggle-group>
          </div>

          <!-- Multi-Select Description Side -->
          <div>
            <h4 style="margin-bottom:16px; font-size:14px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">Rich Multi-Select (Side Descriptions)</h4>
            <ui-button-toggle-group multi-select value='["opt1"]' orientation="vertical" color="primary" style="max-width: 450px;">
              <ui-button value="opt1" label="Standard License" description="Personal projects only" description-position="right" variant="outline"></ui-button>
              <ui-button value="opt2" label="Commercial Pro" description="Corporate & Production use" description-position="right" variant="outline"></ui-button>
              <ui-button value="opt3" label="Enterprise Elite" description="Unlimited scale & 24/7 support" description-position="right" variant="outline"></ui-button>
            </ui-button-toggle-group>
          </div>

        </div>
      </div>
    `;
}

function showButtonGroupAuto() {
  const container = document.querySelector('.section-active #buttonDemoContainer') || document.getElementById('buttonDemoContainer');
  if (!container) return;

  container.innerHTML = `
      <div class="demo-block">
        <h3>Automatic Width Management</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Using <code>ui-button-group</code> with the <code>fill</code> prop automatically manages button widths based on count.</p>
        
        <div style="display: flex; flex-direction: column; gap: 40px;">
          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Single Button (100% Width)</h4>
            <ui-button-group fill>
              <ui-button variant="primary" label="Confirm Purchase"></ui-button>
            </ui-button-group>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Two Buttons (50% each)</h4>
            <ui-button-group fill gap="12px">
              <ui-button variant="outline" label="Cancel"></ui-button>
              <ui-button variant="primary" label="Submit"></ui-button>
            </ui-button-group>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Three Buttons (33.3% each)</h4>
            <ui-button-group fill gap="12px">
              <ui-button variant="ghost" label="Later"></ui-button>
              <ui-button variant="outline" label="Skip"></ui-button>
              <ui-button variant="success" label="Finish"></ui-button>
            </ui-button-group>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Individual "Grow" Property</h4>
            <p style="color: #6b7280; margin-bottom: 12px; font-size: 13px;">Applying <code>grow</code> to buttons inside a standard flex container allows them to occupy maximum possible space.</p>
            <div style="display: flex; gap: 12px;">
              <ui-button grow variant="primary" label="I expand (50%)"></ui-button>
              <ui-button grow variant="secondary" label="I expand (50%)"></ui-button>
            </div>
            <div style="display: flex; gap: 12px; margin-top: 12px;">
              <ui-button variant="outline" label="Static"></ui-button>
              <ui-button grow variant="primary" label="I take the rest of the space"></ui-button>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Connected Button Group (Standard Look)</h4>
            <p style="color: #6b7280; margin-bottom: 12px; font-size: 13px;">Set <code>gap="0"</code> and <code>connected</code> for segmented control style.</p>
            <ui-button-group fill connected gap="0">
              <ui-button variant="outline" label="Daily"></ui-button>
              <ui-button variant="primary" label="Weekly"></ui-button>
              <ui-button variant="outline" label="Monthly"></ui-button>
            </ui-button-group>
          </div>

          <div>
            <h4 style="margin-bottom: 12px; font-size: 14px; opacity: 0.8;">Vertical Toggle Group (Consistent Length)</h4>
            <p style="color: #6b7280; margin-bottom: 12px; font-size: 13px;">Buttons in vertical mode now automatically have uniform width regardless of label content.</p>
            <div style="max-width: 280px; background: var(--bg-secondary); padding: 20px; border-radius: 12px; border: 1px solid var(--border-default);">
               <ui-button-toggle-group label="Select View Mode" orientation="vertical" required value="grid" color="success">
                 <ui-button-toggle value="list" label="List View" icon="fas fa-list"></ui-button-toggle>
                 <ui-button-toggle value="grid" label="Grid View" icon="fas fa-th-large"></ui-button-toggle>
                 <ui-button-toggle value="compact" label="Compact" icon="fas fa-compress"></ui-button-toggle>
                 <ui-button-toggle value="cards" label="Cards View" icon="fas fa-id-card"></ui-button-toggle>
               </ui-button-toggle-group>
            </div>
          </div>
        </div>
      </div>
    `;
}

// (Removed duplicate Subtitle button and mapping logic)

export function initButtonGroupDemo() {
  const section = document.getElementById('button-group');
  if (!section) return;

  section.innerHTML = `
    <div style="display: flex; align-items: center; justify-content: space-between; margin-bottom: 24px;">
      <h2>Button Group</h2>
      <div style="display: flex; gap: 8px;">
         <span style="padding: 4px 8px; background: #e0f2fe; color: #075985; border-radius: 4px; font-size: 11px; font-weight: 600;">NEW</span>
      </div>
    </div>
    <div id="buttonDemoContainer"></div>
  `;

  // Use the same container but ensure we only show group stuff if needed
  // For now, let's just reuse showButtonGroupAuto but ensure it targets the right container
  showButtonGroupAuto();
}
