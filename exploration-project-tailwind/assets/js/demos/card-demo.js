// Card Demo Functions
export function initCardDemo() {
  const section = document.getElementById('card');
  if (!section) return;

  // Listen for and pretty-print all card component custom events in the console
  const cardEvents = [
    'cardClose',
    'cardFlip',
    'cardToggle',
    'expandToggle',
    'cardClick',
    'cardSelect',
    'menuItemClick',
    'menuActionClick'
  ];
  cardEvents.forEach(eventName => {
    section.addEventListener(eventName, (event) => {
      console.log(
        `%c[ui-card Event] %cEmitted: %c"${eventName}"`,
        'color:var(--accent-blue,#3b82f6); font-weight: bold;',
        'color: #4b5563;',
        'color: #10b981; font-weight: bold;',
        {
          event: eventName,
          payload: event.detail,
          target: event.target,
          timestamp: new Date().toLocaleTimeString()
        }
      );
    });
  });

  section.innerHTML = `
    <div class="demo-header" style="margin-bottom: 32px;">
      <h2 style="margin: 0 0 8px; font-size: 24px; color:var(--text-primary,#111827);">Unified Card Component</h2>
      <p style="margin: 0; opacity: 0.7; font-size: 15px; color: #4b5563;">A feature-rich, highly customizable card component that combines the best of both libraries.</p>
    </div>

    <div class="demo-nav-pills" style="margin: 24px 0; display: flex; gap: 8px; flex-wrap: wrap;">
      <ui-button onclick="showInteractivePlayground()" variant="outline" id="pill-playground">🎮 Playground</ui-button>
      <ui-button onclick="showBasicVariants()" variant="outline" id="pill-variants">🎨 Basic Variants</ui-button>
      <ui-button onclick="showLayoutsPatterns()" variant="outline" id="pill-layouts">📐 Layouts & Patterns</ui-button>
      <ui-button onclick="showEliteVisuals()" variant="outline" id="pill-elite">💎 Elite Visuals</ui-button>
      <ui-button onclick="showPremiumVisuals()" variant="outline" id="pill-premium">✨ Premium Visuals</ui-button>
      <ui-button onclick="showInteractions()" variant="outline" id="pill-interactions">⚡ Interactions</ui-button>
      <ui-button onclick="showMenuActions()" variant="outline" id="pill-actions">⋮ Menus & Actions</ui-button>
      <ui-button onclick="showLoadingStates()" variant="outline" id="pill-loading">⌛ Loading States</ui-button>
      <ui-button onclick="showAutoScrollCards()" variant="outline" id="pill-autoscroll">📜 Auto Scroll</ui-button>
    </div>

    <style>
      .nav-pill {
        padding: 8px 16px;
        background: #f3f4f6;
        border:1px solid var(--border-default,#e5e7eb);
        border-radius: 9999px;
        color: #4b5563;
        font-size: 14px;
        font-weight: 500;
        cursor: pointer;
        transition: all 0.2s ease;
      }
      .nav-pill:hover { background: #e5e7eb; color:var(--text-primary,#111827); }
      .nav-pill.active { background: #10b981; border-color: #10b981; color: white; }
      .demo-grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; margin-top: 16px; margin-bottom: 32px; }
      .section-title { margin: 32px 0 16px; padding-bottom: 8px; border-bottom: 1px solid #e5e7eb; color:var(--text-primary,#111827); }
    </style>

    <div id="cardDemoContainer"></div>
  `;

  const updateActivePill = id => {
    document.querySelectorAll('.demo-nav-pills ui-button').forEach(p => {
      p.variant = 'outline';
      p.color = 'default';
    });
    const el = document.getElementById(id);
    if (el) {
      el.variant = 'solid';
      el.color = 'success';
    }
  };

  // --- 1. Basic Variants ---
  window.showBasicVariants = () => {
    updateActivePill('pill-variants');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <h3 class="section-title" style="margin-top: 0;">Color Variants</h3>
      <div class="demo-grid">
        <ui-card variant="default" card-title="Default" extra="Status: Idle"></ui-card>
        <ui-card variant="primary" card-title="Primary" extra="Status: Active"></ui-card>
        <ui-card variant="success" card-title="Success" extra="Status: Complete"></ui-card>
        <ui-card variant="info" card-title="Info" extra="Status: Info"></ui-card>
        <ui-card variant="warning" card-title="Warning" extra="Status: Alert"></ui-card>
        <ui-card variant="danger" card-title="Danger" extra="Status: Error"></ui-card>
      </div>
      
      <h3 class="section-title">Status Cards (New Variant)</h3>
      <p style="color:var(--text-secondary,#64748b); font-size: 14px; margin-top: -8px; margin-bottom: 16px;">
        Status cards tint the card background and border dynamically based on the <code>color</code> prop.
      </p>
      <div class="demo-grid">
        <ui-card variant="status" color="primary" card-title="Primary Status" description="Status card with a primary themed border and soft primary background tint."></ui-card>
        <ui-card variant="status" color="success" card-title="Success Status" description="Status card with a success themed border and soft success background tint."></ui-card>
        <ui-card variant="status" color="info" card-title="Info Status" description="Status card with an info themed border and soft info background tint."></ui-card>
        <ui-card variant="status" color="warning" card-title="Warning Status" description="Status card with a warning themed border and soft warning background tint."></ui-card>
        <ui-card variant="status" color="danger" card-title="Danger Status" description="Status card with a danger themed border and soft danger background tint."></ui-card>
      </div>
      
      <h3 class="section-title">Visual Styles</h3>
      <div class="demo-grid">
        <ui-card variant="elevated" card-title="Elevated" description="Standard elevated style with deep shadow."></ui-card>
        <ui-card variant="outlined" card-title="Outlined" description="Clean outlined style with minimal shadow."></ui-card>
        <ui-card variant="filled" card-title="Filled" description="Solid background color without borders."></ui-card>
        <ui-card importance="emphasized" card-title="Emphasized (Premium)" description="Premium dark gradient background for high priority content."></ui-card>
      </div>
    `;
  };

  // --- 2. Layouts & Patterns ---
  window.showLayoutsPatterns = () => {
    updateActivePill('pill-layouts');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <h3 class="section-title" style="margin-top: 0;">Orientation Layouts</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(400px, 1fr)); gap: 24px; margin-bottom: 32px;">
         <ui-card layout="vertical" card-title="Vertical Layout" cover="/build/assets/images/nature_forest_1.png" description="The classic vertical card structure."></ui-card>
         <ui-card layout="horizontal" card-title="Horizontal Layout" cover="/build/assets/images/nature_lake_2.png" description="Perfect for list items and detailed previews."></ui-card>
      </div>

      <h3 class="section-title">Design Patterns</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px; margin-bottom: 32px;">
         <ui-card pattern="product" card-title="Wireless Headphones" cover="/build/assets/images/nature_desert_3.png" tag="Best Seller" button-text="Add to Cart">
           <div slot="content">
             <p style="font-size: 24px; font-weight: bold; margin: 8px 0;">$199.00</p>
             <p style="color: var(--text-secondary, #6b7280);">High-fidelity sound with noise cancellation.</p>
           </div>
         </ui-card>

         <ui-card pattern="shortcut" card-title="Security Settings" avatar-icon="fas fa-shield-alt" description="Manage your password, 2FA, and connected devices."></ui-card>
         
         <ui-card pattern="shortcut" card-title="User Profile" avatar="/build/assets/images/logo.png" description="Update your personal information and profile picture."></ui-card>
      </div>

      <h3 class="section-title">Card Types (Nesting)</h3>
      <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(320px, 1fr)); gap: 24px;">
         <ui-card card-title="Outer Card" description="Standard container card.">
            <div style="margin-top: 16px;">
               <ui-card type="inner" card-title="Nested Inner Card" description="Subtly grey background to distinguish from its parent."></ui-card>
            </div>
         </ui-card>
      </div>
    `;
  };

  // --- 3. Elite Visuals ---
  window.showEliteVisuals = () => {
    updateActivePill('pill-elite');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <h3 class="section-title" style="margin-top: 0;">Physical Interaction Engine</h3>
      <p style="color:var(--text-secondary,#64748b); font-size: 14px; margin-top: -8px; margin-bottom: 16px;">
        The component now supports 3D Tilt and Magnetic Attraction for high-end web experiences.
      </p>
      <div class="demo-grid">
        <ui-card tilt="true" variant="primary" importance="emphasized" card-title="3D Tilt Mode" description="Hover over this card to see it tilt in 3D space based on your mouse position."></ui-card>
        <ui-card magnetic="true" variant="success" card-title="Magnetic Attraction" description="This card follows your mouse cursor with a subtle organic movement."></ui-card>
        <ui-card tilt="true" magnetic="true" glass="true" card-title="Total Physicality" ribbon="Elite" cover="/build/assets/images/nature_lake_2.png" description="Combining 3D tilt, magnetic attraction, and glassmorphism."></ui-card>
      </div>
    `;
  };

  // --- 4. Premium Visuals ---
  window.showPremiumVisuals = () => {
    updateActivePill('pill-premium');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <h3 class="section-title" style="margin-top: 0;">Glassmorphism & Ribbons</h3>
      <div class="demo-grid">
        <ui-card glass="true" card-title="Glass Design" ribbon="Premium" ribbon-color="#8b5cf6" cover="/build/assets/images/nature_ocean_4.png" description="Elegant translucent backdrop effect."></ui-card>
        <ui-card variant="primary" card-title="Left Ribbon" ribbon="New" ribbon-position="top-left" ribbon-color="#10b981" description="Ribbons can be placed on the left side too."></ui-card>
        <ui-card variant="elevated" card-title="Custom Radius" border-radius="32px" border="2px dashed #10b981" description="Fully customizable borders and radius."></ui-card>
      </div>

      <h3 class="section-title">Headers & Content</h3>
      <div class="demo-grid">
        <ui-card avatar="/build/assets/images/logo.png" card-title="Jane Cooper" extra="Active" description="Card with image avatar in header."></ui-card>
        <ui-card avatar-icon="fas fa-rocket" card-title="Mission Alpha" extra="T-Minus 10s" description="Card with icon avatar in header."></ui-card>
        <ui-card card-title="Full Features" tag="V1.0" actions="Details, Docs, GitHub" button-text="Launch" description="Combining tags, quick actions, and buttons."></ui-card>
      </div>
    `;
  };

  // --- 5. Interactions ---
  window.showInteractions = () => {
    updateActivePill('pill-interactions');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <h3 class="section-title" style="margin-top: 0;">Flip Interaction</h3>
      <div class="demo-grid">
        <ui-card flippable="true" height="280px" card-title="Click to Flip" description="Discover what is on the other side.">
          <div slot="back" style="background: linear-gradient(135deg, #3b82f6 0%, #1d4ed8 100%); color: white; height: 100%; padding: 24px; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
            <h3 style="margin: 0 0 8px; font-size: 20px; font-weight: 700; color: white;">Secret Content!</h3>
            <p style="margin: 0; opacity: 0.9; font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.9);">This is the back side of a flippable card, fully customizable using slots.</p>
          </div>
        </ui-card>
        
        <ui-card flippable="true" flip-trigger="hover" height="280px" card-title="Hover to Flip" description="Simply hover to see the back.">
          <div slot="back" style="background: linear-gradient(135deg, #10b981 0%, #047857 100%); color: white; height: 100%; padding: 24px; border-radius: 8px; display: flex; flex-direction: column; justify-content: center; box-sizing: border-box;">
            <h3 style="margin: 0 0 8px; font-size: 20px; font-weight: 700; color: white;">Instant Preview</h3>
            <p style="margin: 0; opacity: 0.9; font-size: 14px; line-height: 1.5; color: rgba(255,255,255,0.9);">Perfect for quick-reveal information, triggered on hover.</p>
          </div>
        </ui-card>
      </div>

      <h3 class="section-title">Stateful Cards</h3>
      <div class="demo-grid">
        <ui-card collapsible="true" card-title="Collapsible Card" description="Toggle the body visibility using the header arrow."></ui-card>
        <ui-card closable="true" card-title="Closable Card" description="Perfect for notifications or dismissible content."></ui-card>
        <ui-card selectable="true" card-title="Selectable Mode" description="Click to select this card. Supports shared selection groups."></ui-card>
      </div>
      
      <h3 class="section-title">Navigation</h3>
      <div class="demo-grid">
        <ui-card clickable="true" href="https://google.com" target="_blank" card-title="External Link Card" description="The entire card acts as a link to an external site."></ui-card>
        <ui-card hoverable="true" card-title="Hover Effect" description="Subtle Lift and Shadow increase on hover."></ui-card>
      </div>
    `;
  };

  // --- 6. Menus & Actions ---
  window.showMenuActions = () => {
    updateActivePill('pill-actions');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    const menuItems = JSON.stringify([
      { id: 'edit', label: 'Edit', icon: 'pencil' },
      { id: 'duplicate', label: 'Duplicate', icon: 'copy' },
      { id: 'sep1', separator: true },
      { id: 'delete', label: 'Delete', icon: 'trash-2', disabled: true },
    ]);

    container.innerHTML = `
      <h3 class="section-title" style="margin-top: 0;">Contextual Menus</h3>
      <div class="demo-grid">
        <ui-card show-menu="true" menu-items='${menuItems}' card-title="JSON Defined Menu" icon-library="lucide" description="Define menu items via complex JSON objects."></ui-card>
        <ui-card menu-actions="Share, Export, Report" card-title="Action String Menu" description="Quickly define menu actions via a simple comma-separated string."></ui-card>
      </div>

      <h3 class="section-title">Footer Actions</h3>
      <div class="demo-grid">
        <ui-card button-text="Primary Action" actions="Secondary, Tertiary" card-title="Footer Showcase" description="Mix standard primary buttons with quick link actions."></ui-card>
      </div>
    `;
  };

  // --- 7. Loading States ---
  window.showLoadingStates = () => {
    updateActivePill('pill-loading');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <h3 class="section-title" style="margin-top: 0;">Skeleton Loading</h3>
      <div style="margin-bottom: 20px;">
        <ui-button onclick="document.querySelectorAll('ui-card').forEach(c => c.loading = !c.loading)" variant="outline" color="primary">Toggle Loading All</ui-button>
      </div>
      <div class="demo-grid">
        <ui-card loading="true" card-title="Skeleton 1"></ui-card>
        <ui-card loading="true" variant="primary" card-title="Skeleton 2"></ui-card>
        <ui-card loading="true" layout="horizontal" card-title="Horizontal Skeleton"></ui-card>
      </div>
    `;
  };

  // --- 7. Interactive Playground ---
  window.showInteractivePlayground = () => {
    updateActivePill('pill-playground');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="playground-layout" style="display: grid; grid-template-columns: 350px 1fr; gap: 32px; align-items: start;">
        <div class="controls-panel" style="border-radius: 12px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
           <h4 style="margin: 0 0 20px; font-size: 18px;">Configuration</h4>
           
           <div style="display: flex; flex-direction: column; gap: 16px;">
             <label><span>Variant:</span>
               <ui-dropdown id="pg-variant" value="default" size="md" onValueChange="window.updatePlayground()">
                 <option value="default">Default</option>
                 <option value="elevated">Elevated</option>
                 <option value="outlined">Outlined</option>
                 <option value="filled">Filled</option>
                 <option value="primary">Primary</option>
                 <option value="success">Success</option>
               </ui-dropdown>
             </label>
 
             <label><span>Layout:</span>
               <ui-dropdown id="pg-layout" value="vertical" size="md" onValueChange="window.updatePlayground()">
                 <option value="vertical">Vertical</option>
                 <option value="horizontal">Horizontal</option>
               </ui-dropdown>
             </label>
 
             <label><span>Pattern:</span>
               <ui-dropdown id="pg-pattern" value="default" size="md" onValueChange="window.updatePlayground()">
                 <option value="default">Default</option>
                 <option value="product">Product</option>
                 <option value="shortcut">Shortcut</option>
               </ui-dropdown>
             </label>
 
             <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 8px;">
               <label style="font-size: 13px;"><ui-checkbox id="pg-glass" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Glass</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-hover" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Hoverable</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-flip" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Flippable</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-coll" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Collapsible</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-sele" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Selectable</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-clos" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Closable</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-tilt" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Tilt (3D)</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-magn" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Magnetic</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-menu" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Menu</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-load" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Loading</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-auto" onCheckboxChange="window.updatePlayground()"></ui-checkbox> Auto Scroll</label>
               <label style="font-size: 13px;"><ui-checkbox id="pg-border" checked onCheckboxChange="window.updatePlayground()"></ui-checkbox> Bordered</label>
             </div>
 
             <label><span>Type:</span>
               <ui-dropdown id="pg-type" value="default" size="md" onValueChange="window.updatePlayground()">
                 <option value="default">Default</option>
                 <option value="inner">Inner</option>
               </ui-dropdown>
             </label>
 
             <label><span>Importance:</span>
               <ui-dropdown id="pg-importance" value="standard" size="md" onValueChange="window.updatePlayground()">
                 <option value="standard">Standard</option>
                 <option value="emphasized">Emphasized</option>
               </ui-dropdown>
             </label>
 
             <label><span>Ribbon Text:</span>
               <ui-input id="pg-ribbon" placeholder="e.g. New" size="md" onInputChange="window.updatePlayground()"></ui-input>
             </label>
 
             <label><span>Card Title:</span>
               <ui-input id="pg-title" value="Playground Card" size="md" onInputChange="window.updatePlayground()"></ui-input>
             </label>
           </div>
        </div>
 
        <div class="result-panel" style="display: flex; flex-direction: column; align-items: center; gap: 32px; width: 100%;">
           <div id="pg-container" class="playground-preview" style="width: 100%; box-sizing: border-box;"></div>
           
           <div style="width: 100%; background: #1f2937; border-radius: 8px; padding: 20px; color: #f9fafb; font-family: monospace; font-size: 13px; overflow-x: auto;">
             <code id="pg-code"></code>
           </div>
        </div>
      </div>   </div>
      </div>
    `;

    window.updatePlayground = () => {
      const variant = document.getElementById('pg-variant').value;
      const layout = document.getElementById('pg-layout').value;
      const pattern = document.getElementById('pg-pattern').value;
      const glass = document.getElementById('pg-glass').checked;
      const hover = document.getElementById('pg-hover').checked;
      const flip = document.getElementById('pg-flip').checked;
      const coll = document.getElementById('pg-coll').checked;
      const sele = document.getElementById('pg-sele').checked;
      const clos = document.getElementById('pg-clos').checked;
      const menu = document.getElementById('pg-menu').checked;
      const load = document.getElementById('pg-load').checked;
      const auto = document.getElementById('pg-auto').checked;
      const tilt = document.getElementById('pg-tilt').checked;
      const magn = document.getElementById('pg-magn').checked;
      const ribbon = document.getElementById('pg-ribbon').value;
      const title = document.getElementById('pg-title').value;
      const type = document.getElementById('pg-type').value;
      const importance = document.getElementById('pg-importance').value;
      const bordered = document.getElementById('pg-border').checked;

      const cardHtml = `
<ui-card
  variant="${variant}"
  layout="${layout}"
  pattern="${pattern}"
  card-title="${title}"
  ${glass ? 'glass="true"' : ''}
  ${hover ? 'hoverable="true"' : ''}
  ${flip ? 'flippable="true"' : ''}
  ${coll ? 'collapsible="true"' : ''}
  ${sele ? 'selectable="true"' : ''}
  ${clos ? 'closable="true"' : ''}
  ${tilt ? 'tilt="true"' : ''}
  ${magn ? 'magnetic="true"' : ''}
  ${menu ? 'show-menu="true" menu-actions="Edit, Share, Delete"' : ''}
  ${load ? 'loading="true"' : ''}
  ${auto ? 'auto-scroll="true"' : ''}
  ${!bordered ? 'bordered="false"' : ''}
  ${ribbon ? 'ribbon="' + ribbon + '"' : ''}
  ${type !== 'default' ? 'type="' + type + '"' : ''}
  ${importance !== 'standard' ? 'importance="' + importance + '"' : ''}
  ${layout === 'horizontal' || pattern === 'product' ? 'cover="/build/assets/images/nature_forest_1.png"' : ''}
>
  <div slot="content">
    <p>Flexible content area supporting any HTML or components.</p>
  </div>
  ${flip ? '<div slot="back"><p>Back side content</p></div>' : ''}
</ui-card>`;

      const pgContainer = document.getElementById('pg-container');
      const pgCode = document.getElementById('pg-code');
      if (pgContainer) pgContainer.innerHTML = cardHtml;
      if (pgCode) pgCode.innerText = cardHtml.trim().replace(/ {4}/g, '  ');
    };

    window.updatePlayground();
  };

  /**
   * Show Auto Scroll Cards Demo with long list
   */
  window.showAutoScrollCards = () => {
    updateActivePill('pill-autoscroll');
    const container = document.getElementById('cardDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-grid" style="grid-template-columns: 1fr;">
        <h3 class="section-title">📜 Auto Scroll Showcase</h3>
        <p style="color: #6b7280; font-size: 14px; margin-bottom: 24px;">
           When cards are inside a long scrollable list, enabling <b>autoScroll</b> ensures 
           that expanding a card at the bottom of the viewport pulls it into view.
        </p>

        <div style="max-width: 600px; margin: 0 auto; display: flex; flex-direction: column; gap: 16px;">
           ${[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
             .map(
               i => `
              <ui-card 
                card-title="List Card #${i}" 
                collapsible="true" 
                auto-scroll="true" 
                collapsed="true"
                variant="elevated"
                description="Try expanding me if I'm at the bottom of your screen!"
              >
                <div slot="content">
                  <div style="height: 150px; background: var(--bg-secondary, #f3f4f6); border-radius: 8px; display: flex; align-items: center; justify-content: center; border: 2px dashed var(--border-default, #e5e7eb); color: var(--text-muted, #9ca3af);">
                    <span>Detailed content for card ${i}</span>
                  </div>
                </div>
              </ui-card>
            `,
             )
             .join('')}
        </div>
      </div>
    `;
  };

  // Initialize with playground
  setTimeout(() => {
    if (window.showInteractivePlayground) {
      window.showInteractivePlayground();
    }
  }, 100);
}
