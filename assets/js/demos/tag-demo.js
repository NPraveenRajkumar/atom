export function initTagDemo() {
  const section = document.getElementById('tag');
  if (!section) return;

  section.innerHTML = `
    
    <p>Flexible tags for labels, categories, and status indicators.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 12px; flex-wrap: wrap;">
      <ui-button label="Variants" data-demo="variants" onclick="showTagVariants()" variant="outline"></ui-button>
      <ui-button label="Interactive" data-demo="interactive" onclick="showCheckableTags()" variant="outline"></ui-button>
      <ui-button label="Media & Icons" data-demo="media" onclick="showMediaTags()" variant="outline"></ui-button>
      <ui-button label="Removable" data-demo="removable" onclick="showRemovableTags()" variant="outline"></ui-button>
      <ui-button label="Badges" data-demo="badges" onclick="showTagBadges()" variant="outline"></ui-button>
      <ui-button label="Premium Features" data-demo="premium" onclick="showPremiumTags()" variant="outline"></ui-button>
      <ui-button label="Advanced (Chip/Pill Mode)" data-demo="advanced" onclick="showTagAdvancedFeatures()" variant="outline"></ui-button>
      <ui-button label="Design Guide (32px)" data-demo="design" onclick="showDesignGuide()" variant="outline"></ui-button>
      <ui-button label="Shape Showcase" data-demo="shapes" onclick="showShapeShowcase()" variant="outline"></ui-button>
      <ui-button label="Ticket Shapes" data-demo="ticket" onclick="showTicketDemo()" variant="outline"></ui-button>
      <ui-button label="Auto Coloring" data-demo="autocolor" onclick="showAutoColorTags()" variant="outline"></ui-button>
      <ui-button label="Tag Groups" data-demo="groups" onclick="showTagGroups()" variant="outline"></ui-button>
      <ui-button label="Selection (Premium)" data-demo="selection" onclick="showSelectionGroups()" variant="outline"></ui-button>
      <ui-button label="Interactive (Premium)" data-demo="premiumgroups" onclick="showPremiumGroups()" variant="outline"></ui-button>
      <ui-button label="Input Validation" data-demo="validation" onclick="showTagsInputValidation()" variant="outline"></ui-button>
      <ui-button label="Rich Gradients" data-demo="gradients" onclick="showRichGradients()" variant="outline"></ui-button>
      <ui-button label="Playground" data-demo="playground" onclick="showTagPlayground()" variant="outline"></ui-button>
    </div>

    <div id="tagDemoContainer" style="margin-top: 20px;"></div>
  `;

  const updateTagActiveBtn = demoName => {
    section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
      btn.selected = btn.getAttribute('data-demo') === demoName;
    });
  };

  window.showTagVariants = () => {
    updateTagActiveBtn('variants');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Premium Variants</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <ui-tag label="Default"></ui-tag>
          <ui-tag label="Success" color="success" variant="light"></ui-tag>
          <ui-tag label="Error" color="danger" variant="outlined"></ui-tag>
          <ui-tag label="Active" color="primary" variant="filled" rounded="true"></ui-tag>
          <ui-tag label="New" variant="dot" color="primary"></ui-tag>
        </div>
      </div>
    `;
  };

  window.showCheckableTags = () => {
    updateTagActiveBtn('interactive');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Interactive Tags</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <ui-tag label="Selectable 1" checkable="true" color="primary"></ui-tag>
          <ui-tag label="Selectable 2" checkable="true" color="success"></ui-tag>
          <ui-tag label="Pre-checked" checkable="true" checked="true"></ui-tag>
        </div>
      </div>
    `;
  };

  window.showMediaTags = () => {
    updateTagActiveBtn('media');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Icons & Symbols (Start)</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Use the <code>icon</code> prop to add an emoji or symbol at the beginning.</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 30px;">
          <ui-tag label="Premium" icon="⭐" icon-library="emoji"  color="warning" variant="light"></ui-tag>
          <ui-tag label="Locked" icon="🔒" icon-library="emoji" color="secondary" variant="outlined"></ui-tag>
          <ui-tag label="Verified" icon="✅" icon-library="emoji"  color="success" variant="light" rounded="true"></ui-tag>
          <ui-tag label="Danger" icon="⚠" icon-library="emoji"  color="danger" variant="filled"></ui-tag>
        </div>

        <h3>Images & Avatars (Start)</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Use <code>image</code> for logos and <code>user-avatar</code> for circular profile shots.</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 30px;">
          <ui-tag label="Antigravity" image="/build/assets/images/logo.png" color="primary" variant="light"></ui-tag>
          <ui-tag label="John Doe" user-avatar="/build/assets/images/logo.png" variant="light" rounded="true"></ui-tag>
          <ui-tag label="Alice Smith" user-avatar="/build/assets/images/logo.png" color="info" variant="outlined" rounded="true"></ui-tag>
        </div>

        <h3>Position Switching</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">You can also move icons to the end using <code>icon-pos="end"</code>.</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <ui-tag label="Next Page" icon="→" icon-pos="end" color="primary"></ui-tag>
          <ui-tag label="Download" icon="⬇" icon-pos="end" variant="outlined"></ui-tag>
        </div>
      </div>
    `;
  };

  window.showRemovableTags = () => {
    updateTagActiveBtn('removable');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Removable Tags</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Tags can be closed with an optional exit animation.</p>
        
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 30px;">
          <ui-tag label="Dismissible" removable="true" color="primary"></ui-tag>
          <ui-tag label="Success" removable="true" color="success" variant="light"></ui-tag>
          <ui-tag label="Error" removable="true" color="danger" variant="outlined"></ui-tag>
          <ui-tag label="Warning" removable="true" color="warning" rounded="true"></ui-tag>
        </div>

        <h3>Exit Animations</h3>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          <div>
            <span style="font-size: 12px; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">Scale (Default)</span>
            <ui-tag label="Scale Out" removable="true" animation="scale"></ui-tag>
          </div>
          <div>
            <span style="font-size: 12px; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">Fade</span>
            <ui-tag label="Fade Out" removable="true" animation="fade"></ui-tag>
          </div>
          <div>
            <span style="font-size: 12px; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">Slide</span>
            <ui-tag label="Slide Out" removable="true" animation="slide"></ui-tag>
          </div>
          <div>
            <span style="font-size: 12px; color:var(--text-secondary,#64748b); display: block; margin-bottom: 8px;">Rotate</span>
            <ui-tag label="Rotate Out" removable="true" animation="rotate"></ui-tag>
          </div>
        </div>
        
        <div style="margin-top: 30px; padding: 15px; background:var(--bg-secondary,#f8fafc); border-radius: 8px; border:1px solid var(--border-default,#e2e8f0);">
          <p style="margin: 0; font-size: 13px; color:var(--text-secondary,#64748b);">
            💡 <strong>Pro Tip:</strong> Listen to the <code>tagRemove</code> event to perform cleanup or sync with your backend.
          </p>
        </div>
      </div>
    `;
  };

  window.showTagBadges = () => {
    updateTagActiveBtn('badges');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Badges & Notification Dots</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 30px;">
          <ui-tag label="Messages" badge="5" badge-color="primary"></ui-tag>
          <ui-tag label="Alerts" badge="99+" badge-color="danger"></ui-tag>
          <ui-tag label="Updates" badge="New" badge-color="success"></ui-tag>
          <ui-tag label="Offline" variant="dot" color="danger" badge="!" badge-color="warning"></ui-tag>
        </div>

        <h3>Counters & Metadata</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 30px;">
          <ui-tag label="Comments" counter="24" color="secondary" variant="light"></ui-tag>
          <ui-tag label="Likes" counter="1.2k" color="primary" variant="outlined"></ui-tag>
          <ui-tag label="Shared" counter="8" color="success" variant="light"></ui-tag>
        </div>

        <h3>Both Badge & Counter</h3>
        <p style="color: #6b7280; margin-bottom: 20px;">Tags can display both an overlay badge (e.g. Danger/Red, Success/Green) and an inline counter (default gray) with distinct, different colors.</p>
        <div style="display: flex; gap: 12px; flex-wrap: wrap;">
          <ui-tag label="Inbox Messages" badge="5" badge-color="danger" counter="12" color="primary" variant="light"></ui-tag>
          <ui-tag label="System Health" badge="Critical" badge-color="warning" counter="99.9%" color="success" variant="outlined"></ui-tag>
        </div>
      </div>
    `;
  };

  window.showTagAdvancedFeatures = () => {
    updateTagActiveBtn('advanced');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="color: #f97316;">🚀 Advanced Chip & Pill Features</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Native support for features previously only available in Chip and Pill components.</p>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Orientations (High-Density Layouts)</h4>
          <div style="display: flex; gap: 20px; align-items: flex-start; flex-wrap: wrap;">
            <ui-tag label="Horizontal Default" color="primary"></ui-tag>
            <ui-tag label="Vertical Style" orientation="vertical" icon="info" color="success" variant="light"></ui-tag>
            <ui-tag label="Upright Text" orientation="vertical-text" color="info" variant="bordered"></ui-tag>
            <ui-tag label="Rotated Sideways" orientation="vertical-rotated" color="danger" variant="outline"></ui-tag>
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Comprehensive Shape Comparison</h4>
          <div style="display: flex; gap: 16px; align-items: center; flex-wrap: wrap; background:var(--bg-tertiary,#f1f5f9); padding: 20px; border-radius: 12px;">
            <div style="text-align: center;"><ui-tag label="Pill" shape="pill" color="primary"></ui-tag><div style="font-size: 10px; margin-top: 4px; color:var(--text-secondary,#64748b);">PILL</div></div>
            <div style="text-align: center;"><ui-tag label="Rounded" shape="rounded" color="primary"></ui-tag><div style="font-size: 10px; margin-top: 4px; color:var(--text-secondary,#64748b);">ROUNDED</div></div>
            <div style="text-align: center;"><ui-tag label="Square" shape="square" color="primary"></ui-tag><div style="font-size: 10px; margin-top: 4px; color:var(--text-secondary,#64748b);">SQUARE</div></div>
            <div style="text-align: center;"><ui-tag label="Circle" shape="circle" icon="star" color="primary"></ui-tag><div style="font-size: 10px; margin-top: 4px; color:var(--text-secondary,#64748b);">CIRCLE</div></div>
            <div style="text-align: center;"><ui-tag label="Ribbon" shape="ribbon" color="primary"></ui-tag><div style="font-size: 10px; margin-top: 4px; color:var(--text-secondary,#64748b);">RIBBON</div></div>
            <div style="text-align: center;"><ui-tag label="Ticket" shape="ticket" color="primary"></ui-tag><div style="font-size: 10px; margin-top: 4px; color:var(--text-secondary,#64748b);">TICKET</div></div>
          </div>
        </div>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Custom Overrides & States</h4>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <ui-tag label="Custom Hex" custom-color="#6366f1" custom-text-color="#ffffff"></ui-tag>
            <ui-tag label="Disabled State" disabled="true" color="primary" removable="true"></ui-tag>
            <ui-tag label="Custom Tooltip" tooltip="This is a custom hover message!" color="success" show-tooltip="true"></ui-tag>
            <ui-tag label="Soft Primary" variant="outline" color="primary"></ui-tag>
            <ui-tag label="Bordered Danger" variant="bordered" color="danger"></ui-tag>
          </div>
        </div>
      </div>
    `;
  };

  window.showDesignGuide = () => {
    updateTagActiveBtn('design');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="color: #334155;">📐 Design Guide Specifications (32px Baseline)</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Precision metrics from the official design spec: 32px height, 12px padding, and 8px gutter.</p>

        <div style="display: flex; flex-direction: column; gap: 24px;">
          <!-- Rectangular variants -->
          <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
            <div style="display: flex; flex-direction: column; gap: 8px;">
               <span style="font-size: 10px; color: #f43f5e; font-weight: 700;">32px HEIGHT (MD)</span>
               <ui-tag label="Tag label" variant="outlined" shape="rounded"></ui-tag>
            </div>
            <ui-tag label="Tag label" shape="rounded" icon="checkmark-circle" icon-library="ionicons" color="success" variant="light"></ui-tag>
            <ui-tag label="Tag label" shape="rounded" removable="true"></ui-tag>
            <ui-tag label="Tag label" shape="rounded" user-avatar="/build/assets/images/logo.png" removable="true" variant="outlined"></ui-tag>
          </div>

          <!-- Pill Variants -->
          <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
            <ui-tag label="Tag label" shape="pill" variant="outlined" color="primary"></ui-tag>
            <ui-tag label="Tag label" shape="pill" icon="checkmark-circle" color="success" variant="filled"></ui-tag>
            <ui-tag label="Tag label" shape="pill" removable="true" color="secondary" variant="light"></ui-tag>
            <ui-tag label="Tag label" shape="pill" user-avatar="/build/assets/images/logo.png" removable="true" variant="outlined"></ui-tag>
          </div>

          <!-- Calculation Notes -->
          <div style="background: #e2e8f0; padding: 16px; border-radius: 8px; border-left: 4px solid #334155;">
             <p style="color:var(--text-primary,#0f172a); font-size: 13px; margin:0;">
                📊 <strong>Gutter Calculation:</strong> Label end margin is negated to create 8px space: <code style="background: #fff; padding: 2px 4px; border-radius: 4px;">Gap(8px) - EndPadding(12px) = -4px offset</code>
             </p>
          </div>
        </div>
      </div>
    `;
  };

  window.showShapeShowcase = () => {
    updateTagActiveBtn('shapes');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="color:var(--accent-green,#059669);">🎨 Comprehensive Shape Showcase</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Explore our unique geometries for specialized UI patterns.</p>

        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 30px;">
          <!-- Ribbon Column -->
          <div style="background: #fdf2f2; padding: 20px; border-radius: 12px; border: 1px solid #fee2e2;">
            <h4 style="color: #991b1b; margin-top: 0; display: flex; align-items: center; gap: 8px;">🔖 Status Ribbons</h4>
            <p style="font-size: 13px; color: #7f1d1d; margin-bottom: 20px;">Perfect for bookmarks, "New" labels, and high-impact sale items.</p>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
              <ui-tag label="NEW ARRIVAL" shape="ribbon" color="danger" variant="filled" size="md"></ui-tag>
              <ui-tag label="FEATURED" shape="ribbon" color="primary" variant="filled" size="md"></ui-tag>
              <ui-tag label="HOT DEAL" shape="ribbon" color="warning" variant="light" size="md"></ui-tag>
              <ui-tag label="VERIFIED" shape="ribbon" color="success" variant="outlined" size="md"></ui-tag>
            </div>
          </div>

          <!-- Ticket Column -->
          <div style="background:var(--accent-indigo-soft,#eef2ff); padding: 20px; border-radius: 12px; border: 1px solid #e0e7ff;">
            <h4 style="color: #3730a3; margin-top: 0; display: flex; align-items: center; gap: 8px;">🎟️ Ecommerce Tickets</h4>
            <p style="font-size: 13px; color: #3730a3; margin-bottom: 20px;">E-commerce price-tag aesthetics for product categories and downloads.</p>
            <div style="display: flex; flex-direction: column; gap: 12px; align-items: flex-start;">
              <ui-tag label="downloads" shape="ticket" color="primary" size="md"></ui-tag>
              <ui-tag label="premium content" shape="ticket" color="secondary" size="md"></ui-tag>
              <ui-tag label="psd-templates" shape="ticket" color="info" variant="light" size="md"></ui-tag>
              <ui-tag label="freebies" shape="ticket" color="success" border="true" size="md"></ui-tag>
            </div>
          </div>

          <!-- Pill & Minimal Column -->
          <div style="background:var(--accent-green-soft,#f0fdf4); padding: 20px; border-radius: 12px; border: 1px solid #dcfce7;">
            <h4 style="color: var(--accent-green,#166534); margin-top: 0; display: flex; align-items: center; gap: 8px;">💊 Modern & Minimal</h4>
            <p style="font-size: 13px; color: var(--accent-green,#166534); margin-bottom: 20px;">Highly accessible, clean shapes for tagging systems and status info.</p>
            <div style="display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
              <ui-tag label="Classic Pill" shape="pill" color="success" size="md"></ui-tag>
              <ui-tag shape="circle" icon="heart" iconLibrary="lucide" color="danger" size="md"></ui-tag>
              <ui-tag label="Square Sharp" shape="square" color="primary" size="md"></ui-tag>
              <ui-tag label="Legacy Rounded" shape="rounded" color="secondary" size="md"></ui-tag>
            </div>
          </div>
        </div>

        <div style="margin-top: 30px; padding: 15px; background:var(--accent-yellow-soft,#fffbeb); border: 1px solid #fde68a; border-radius: 8px;">
          <p style="margin: 0; font-size: 13px; color:var(--accent-yellow,#92400e);">
             💡 <strong>Context Matters:</strong> Use <strong>Ribbons</strong> for attention-grabbing edge banners, <strong>Tickets</strong> for e-commerce categorization, and <strong>Pills</strong> for standard status labels.
          </p>
        </div>
      </div>
    `;
  };

  window.showTicketDemo = () => {
    updateTagActiveBtn('ticket');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="color: #3f51b5;">🎟️ Interactive Ticket Shapes</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Traditional price-tag style with a V-notch and hole punch indicator.</p>

        <div style="display: flex; flex-direction: column; gap: 20px;">
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
             <ui-tag label="downloads" shape="ticket" color="primary"></ui-tag>
             <ui-tag label="freebies" shape="ticket" color="primary"></ui-tag>
             <ui-tag label="premium" shape="ticket" color="primary"></ui-tag>
          </div>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
             <ui-tag label="resources" shape="ticket" color="primary"></ui-tag>
             <ui-tag label="psd templates" shape="ticket" color="primary"></ui-tag>
             <ui-tag label="html" shape="ticket" color="primary"></ui-tag>
          </div>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
             <ui-tag label="css" shape="ticket" color="primary"></ui-tag>
             <ui-tag label="jquery" shape="ticket" color="primary"></ui-tag>
             <ui-tag label="php" shape="ticket" color="primary"></ui-tag>
             <ui-tag label="wordpress" shape="ticket" color="primary"></ui-tag>
          </div>

          <div style="margin-top: 20px; color:var(--text-secondary,#64748b); font-size: 13px;">
             💡 <strong>Note:</strong> These tags use lowercase text and a subtle 3D drop shadow to match the classic blog tag aesthetics.
          </div>
        </div>
      </div>
    `;
  };

  window.showAutoColorTags = () => {
    updateTagActiveBtn('autocolor');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Hash-based Auto Coloring</h3>
        <p style="color: #6b7280; margin-bottom: 12px;">Colors are automatically generated based on the text label.</p>
        <div style="display: flex; gap: 8px; flex-wrap: wrap;">
          <ui-tag label="Javascript" auto-color="true"></ui-tag>
          <ui-tag label="Typescript" auto-color="true"></ui-tag>
          <ui-tag label="Stencil" auto-color="true"></ui-tag>
          <ui-tag label="React" auto-color="true"></ui-tag>
          <ui-tag label="Vue" auto-color="true"></ui-tag>
          <ui-tag label="Angular" auto-color="true"></ui-tag>
        </div>
      </div>
    `;
  };

  window.showPremiumTags = () => {
    updateTagActiveBtn('premium');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Loading & Activity</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
          <ui-tag label="Processing" loading="true" color="primary"></ui-tag>
          <ui-tag loading="true" rounded="true"></ui-tag>
          <ui-tag label="Live" pulse="true" color="danger" variant="dot"></ui-tag>
        </div>

        <h3>Skeleton Placeholders</h3>
        <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 24px;">
          <ui-tag skeleton="true"></ui-tag>
          <ui-tag skeleton="true" shape="pill" style="width: 80px;"></ui-tag>
          <ui-tag skeleton="true" shape="ticket" style="width: 100px;"></ui-tag>
          <ui-tag skeleton="true" shape="circle"></ui-tag>
        </div>

        <h3>Apex Tier Geometries</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; margin-bottom: 24px;">
          <ui-tag label="Save $10" shape="coupon" color="success" variant="bordered"></ui-tag>
          <ui-tag label="VIP PROMO" shape="coupon" color="warning" variant="filled"></ui-tag>
          <ui-tag label="Syncing..." icon="sync" icon-spin="true" color="primary"></ui-tag>
          <ui-tag label="Rotating Star" icon="star" icon-spin="true" color="warning" variant="light"></ui-tag>
        </div>

        <div style="background:var(--bg-tertiary,#f1f5f9); padding: 24px; border-radius: 12px; margin: 32px 0;">
          <h2 style="margin-top: 0; color:var(--text-primary,#1e293b); border-bottom: 2px solid #e2e8f0; padding-bottom: 12px;">Tag Group Masterclass</h2>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px;">
            <!-- Group 1: Inline Smart Editor (The Star Attraction) -->
            <div style="grid-column: 1 / -1; background:var(--bg-primary,white); padding: 20px; border-radius: 10px; border: 1.5px solid #e2e8f0;">
              <h4 style="margin-top: 0; margin-bottom: 8px;">Smart Inline Editor (Gmail Style)</h4>
              <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">Type to search, Enter to create, <b>Backspace</b> once to highlight, twice to delete.</p>
              <ui-tag-group searchable="true" creatable="true" color="primary" variant="light" shape="pill" placeholder="Add category...">
                <ui-tag label="React"></ui-tag>
                <ui-tag label="Sass"></ui-tag>
                <ui-tag label="Vite"></ui-tag>
              </ui-tag-group>
            </div>

            <!-- Group 2: Team / Avatar Stack -->
            <div>
              <h4 style="margin-bottom: 12px;">Project Team (Avatar Stack)</h4>
              <ui-tag-group overlap="true" spacing="-10px">
                <ui-tag user-avatar="/build/assets/images/logo.png" label="Alex"></ui-tag>
                <ui-tag user-avatar="/build/assets/images/logo.png" label="Jordan"></ui-tag>
                <ui-tag user-avatar="/build/assets/images/logo.png" label="Taylor"></ui-tag>
                <ui-tag user-avatar="/build/assets/images/logo.png" label="Morgan"></ui-tag>
                <ui-tag user-avatar="/build/assets/images/logo.png" label="Casey"></ui-tag>
              </ui-tag-group>
              <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 8px;">Interactive stack with automatic white collision borders.</p>
            </div>

            <!-- Group 3: Read-Only Display -->
            <div>
              <h4 style="margin-bottom: 12px;">Final Status (Read-Only)</h4>
              <ui-tag-group read-only="true" variant="dot">
                <ui-tag label="Completed" color="success"></ui-tag>
                <ui-tag label="Locked" color="secondary"></ui-tag>
                <ui-tag label="Frozen" color="info"></ui-tag>
              </ui-tag-group>
              <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 8px;">All interactive inputs are hidden in Read-Only mode.</p>
            </div>

            <!-- Group 4: Bulk Loading (Skeleton) -->
            <div>
              <h4 style="margin-bottom: 12px;">Data Fetching (Bulk Skeleton)</h4>
              <ui-tag-group skeleton="true" size="md" spacing="4px">
                <ui-tag style="width: 60px;"></ui-tag>
                <ui-tag style="width: 80px;"></ui-tag>
                <ui-tag style="width: 40px;"></ui-tag>
                <ui-tag style="width: 70px;"></ui-tag>
              </ui-tag-group>
            </div>
          </div>
        </div>

        <h3>Elevation & Clickable</h3>
        <div style="display: flex; gap: 12px; flex-wrap: wrap; padding: 10px;">
          <ui-tag label="Level 1" elevation="1" clickable="true"></ui-tag>
          <ui-tag label="Level 2" elevation="2" clickable="true" color="primary"></ui-tag>
          <ui-tag label="Level 3" elevation="3" clickable="true" color="success"></ui-tag>
        </div>
      </div>
    `;
  };

  window.showTagGroups = () => {
    updateTagActiveBtn('groups');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Standard Tag Groups</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Manage collections of tags with bulk styling and layout control.</p>
        
        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">User Assignments (Overlapping)</h4>
          <ui-tag-group overlap="true" spacing="-12px">
            <ui-tag label="Alice" rounded="true" color="primary" image="/build/assets/images/logo.png"></ui-tag>
            <ui-tag label="Bob" rounded="true" color="success" image="/build/assets/images/logo.png"></ui-tag>
            <ui-tag label="Charlie" rounded="true" color="warning" image="/build/assets/images/logo.png"></ui-tag>
            <ui-tag label="Diana" rounded="true" color="danger" image="/build/assets/images/logo.png"></ui-tag>
          </ui-tag-group>
        </div>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Bulk Styling (Primary Outlined)</h4>
          <ui-tag-group color="primary" variant="outlined" rounded="true">
            <ui-tag label="Frontend"></ui-tag>
            <ui-tag label="Backend"></ui-tag>
            <ui-tag label="DevOps"></ui-tag>
          </ui-tag-group>
        </div>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Interactive Playground</h4>
          <div style="background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
            <div id="tagGroupPlayground" style="margin-bottom: 20px;">
              <ui-tag-group id="interactiveTagGroup">
                <ui-tag label="Label 1"></ui-tag>
                <ui-tag label="Label 2"></ui-tag>
                <ui-tag label="Label 3"></ui-tag>
                <ui-tag label="Label 4"></ui-tag>
                <ui-tag label="Label 5"></ui-tag>
              </ui-tag-group>
            </div>
            
            <div id="tagGroupPlaygroundControls" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 15px; align-items: flex-end;">
              <ui-input id="maxTagsInput" type="number" label="Max Tags" value="0"></ui-input>
              <ui-dropdown id="groupColorDropdown" label="Color" variant="outline" options='[
                  {"label": "Default", "value": "default"},
                  {"label": "Primary", "value": "primary"},
                  {"label": "Success", "value": "success"},
                  {"label": "Danger", "value": "danger"}
              ]'></ui-dropdown>
              <ui-dropdown id="groupVariantDropdown" label="Variant" variant="outline" options='[
                  {"label": "Filled", "value": "filled"},
                  {"label": "Outlined", "value": "outlined"},
                  {"label": "Light", "value": "light"}
              ]'></ui-dropdown>
              <div style="display: flex; flex-direction: column; gap: 4px;">
                <ui-checkbox id="groupOverlapCheck" label="Overlap"></ui-checkbox>
                <ui-checkbox id="groupRoundedCheck" label="Rounded"></ui-checkbox>
              </div>
            </div>
          </div>
        </div>
      </div>
    `;

    setTimeout(() => {
      const group = document.getElementById('interactiveTagGroup');
      if (!group) return;

      document.getElementById('maxTagsInput')?.addEventListener('inputChange', e => {
        group.max = e.target.value;
      });
      document.getElementById('groupColorDropdown')?.addEventListener('dropdownChange', e => {
        group.color = e.target.value;
      });
      document.getElementById('groupVariantDropdown')?.addEventListener('dropdownChange', e => {
        group.variant = e.target.value;
      });
      document.getElementById('groupOverlapCheck')?.addEventListener('checkboxChange', e => {
        group.overlap = e.target.checked;
      });
      document.getElementById('groupRoundedCheck')?.addEventListener('checkboxChange', e => {
        group.rounded = e.target.checked;
      });
    }, 100);
  };

  window.showSelectionGroups = () => {
    updateTagActiveBtn('selection');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="color: #f43f5e;">⚡ Premium Selection Management</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Manage multiple tags as a selection group (Filter Chips).</p>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Single Selection</h4>
          <ui-tag-group selection-mode="single" color="primary" variant="outlined" rounded="true">
            <ui-tag label="Low"></ui-tag>
            <ui-tag label="md"></ui-tag>
            <ui-tag label="High"></ui-tag>
          </ui-tag-group>
        </div>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Multiple Selection</h4>
          <ui-tag-group selection-mode="multiple" color="info" variant="light">
            <ui-tag label="React"></ui-tag>
            <ui-tag label="Vue"></ui-tag>
            <ui-tag label="Angular"></ui-tag>
            <ui-tag label="Stencil"></ui-tag>
          </ui-tag-group>
        </div>
      </div>
    `;
  };

  window.showPremiumGroups = () => {
    updateTagActiveBtn('premiumgroups');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="color:var(--accent-purple,#7c3aed);">🧪 Premium Interactive Features</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Advanced features for search-heavy or dynamic tagging UI.</p>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Searchable & Creatable Group</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 16px;">Search existing tags or press the "+" button to add new ones. Press Enter to confirm.</p>
          <ui-tag-group searchable="true" creatable="true" removable="true" color="secondary" variant="light">
            <ui-tag label="Engineering"></ui-tag>
            <ui-tag label="Design"></ui-tag>
            <ui-tag label="Product"></ui-tag>
            <ui-tag label="Marketing"></ui-tag>
          </ui-tag-group>
        </div>

        <div style="margin-bottom: 40px;">
          <h4 style="margin-bottom: 12px; color:var(--text-secondary,#64748b); font-size: 14px;">Collapsible Overflow</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 16px;">Showing only 2 items initially. Click "View all" to expand.</p>
          <ui-tag-group max="2" collapsible="true" color="primary" variant="outlined">
            <ui-tag label="Item 1"></ui-tag>
            <ui-tag label="Item 2"></ui-tag>
            <ui-tag label="Item 3"></ui-tag>
            <ui-tag label="Item 4"></ui-tag>
            <ui-tag label="Item 5"></ui-tag>
          </ui-tag-group>
        </div>
      </div>
    `;
  };

  window.showTagsInputValidation = () => {
    updateTagActiveBtn('validation');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Tags Input Feature Validation</h3>
        <p style="color: #6b7280; mb-4">Validate the missing "Tags Input" features identified in analysis.</p>

        <div style="background:var(--bg-primary,white); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
          <h4 style="margin-top:0">Current Implementation (Creatable Group)</h4>
          <ui-tag-group creatable="true" removable="true" color="primary" variant="light">
            <ui-tag label="Existing"></ui-tag>
          </ui-tag-group>

          <div style="margin-top: 20px; padding: 15px; background: #fff1f2; border: 1px solid #fecdd3; border-radius: 6px;">
            <h5 style="margin:0 0 8px 0; color: #be123c;">Missing Features Test Plan:</h5>
            <ul style="margin:0; padding-left: 20px; color: #9f1239; font-size: 13px;">
              <li><strong>Try Pasting:</strong> Paste "react, vue, angular" inside the input. <br/><em>Expected:</em> Should create 3 tags. <em>Actual:</em> Creates one long tag.</li>
              <li style="margin-top:8px"><strong>Try Backspace:</strong> Focus input (empty) and hit Backspace. <br/><em>Expected:</em> Delete last tag. <em>Actual:</em> Nothing happens.</li>
              <li style="margin-top:8px"><strong>Try Duplicates:</strong> Add "Existing" again. <br/><em>Expected:</em> Prevent duplicate or warn. <em>Actual:</em> Adds duplicate.</li>
            </ul>
          </div>
        </div>
      </div>
    `;
  };

  window.showRichGradients = () => {
    updateTagActiveBtn('gradients');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3 style="background: linear-gradient(90deg, #f43f5e, #fb923c); -webkit-background-clip: text; -webkit-text-fill-color: transparent;">🌈 Ultra-Rich Gradient Tags</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Support for arbitrary CSS gradient strings for high-end aesthetic branding.</p>

        <div style="display: flex; gap: 16px; flex-wrap: wrap;">
          <ui-tag label="Sunset Glow" gradient="linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)" size="lg" shape="pill"></ui-tag>
          <ui-tag label="Deep Sea" gradient="linear-gradient(to right, #0ea5e9, #2563eb)" size="lg" shape="rounded"></ui-tag>
          <ui-tag label="Neon Forest" gradient="linear-gradient(45deg, #22c55e, #10b981)" size="lg" elevation="2"></ui-tag>
          <ui-tag label="Cosmic Radial" gradient="radial-gradient(circle at center, #8b5cf6, #d946ef)" size="lg" shape="pill"></ui-tag>
        </div>

        <div style="margin-top: 30px; background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
          <h4 style="margin-top: 0; color:var(--text-primary,#1e293b);">Code Snippet</h4>
          <code style="display: block; background: #1e293b; color: #e2e8f0; padding: 12px; border-radius: 6px; font-size: 13px;">
            &lt;ui-tag label="Sunset" gradient="linear-gradient(135deg, #f43f5e 0%, #fb923c 100%)" /&gt;
          </code>
        </div>
      </div>
    `;
  };

  window.showTagPlayground = () => {
    updateTagActiveBtn('playground');
    const container = document.getElementById('tagDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Interactive Tag Playground</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Configure props to see how the tag component behaves.</p>

        <div style="display: flex; gap: 40px; flex-wrap: wrap;">
          <!-- Preview Section -->
          <div style="flex: 1; min-width: 300px; display: flex; align-items: center; justify-content: center; background:var(--bg-secondary,#f8fafc); border: 1px dashed #cbd5e1; border-radius: 12px; padding: 40px;">
            <ui-tag id="demoTag" label="Playground Tag" color="primary"></ui-tag>
          </div>

          <!-- Controls Section -->
          <div style="flex: 0 0 300px; padding: 24px; background:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
            <h4 style="margin-top: 0; margin-bottom: 20px; color:var(--text-primary,#0f172a);">Configuration</h4>
            
            <div style="display: flex; flex-direction: column; gap: 16px;">
              <ui-input id="playTagLabel" label="Label" value="Playground Tag"></ui-input>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <ui-dropdown id="playTagColor" label="Color" variant="outline" value="primary" options='[
                      {"label": "Default", "value": "default"},
                      {"label": "Primary", "value": "primary"},
                      {"label": "Secondary", "value": "secondary"},
                      {"label": "Success", "value": "success"},
                      {"label": "Danger", "value": "danger"},
                      {"label": "Warning", "value": "warning"},
                      {"label": "Info", "value": "info"}
                  ]'></ui-dropdown>
                  
                  <ui-dropdown id="playTagSize" label="Size" variant="outline" value="md" options='[
                      {"label": "Small", "value": "sm"},
                      {"label": "Medium", "value": "md"},
                      {"label": "Large", "value": "lg"}
                  ]'></ui-dropdown>
              </div>

              <ui-dropdown id="playTagVariant" label="Variant" variant="outline" value="filled" options='[
                  {"label": "Filled", "value": "filled"},
                  {"label": "Outlined", "value": "outlined"},
                  {"label": "Light", "value": "light"},
                  {"label": "Dot", "value": "dot"}
              ]'></ui-dropdown>

              <ui-dropdown id="playTagElevation" label="Elevation" variant="outline" value="0" options='[
                  {"label": "None", "value": "0"},
                  {"label": "Level 1", "value": "1"},
                  {"label": "Level 2", "value": "2"},
                  {"label": "Level 3", "value": "3"}
              ]'></ui-dropdown>

              <div style="padding-top: 10px; border-top: 1px solid #f1f5f9; display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                  <ui-checkbox id="playTagRounded" label="Rounded"></ui-checkbox>
                  <ui-checkbox id="playTagRemovable" label="Removable"></ui-checkbox>
                  <ui-checkbox id="playTagLoading" label="Loading"></ui-checkbox>
                  <ui-checkbox id="playTagDisabled" label="Disabled"></ui-checkbox>
                  <ui-checkbox id="playTagPulse" label="Pulse"></ui-checkbox>
                  <ui-checkbox id="playTagSkeleton" label="Skeleton"></ui-checkbox>
                  <ui-checkbox id="playTagIconSpin" label="Icon Spin"></ui-checkbox>
              </div>

              <ui-dropdown id="playTagOrientation" label="Orientation" variant="outline" value="horizontal" options='[
                  {"label": "Horizontal", "value": "horizontal"},
                  {"label": "Vertical", "value": "vertical"},
                  {"label": "Vertical Text", "value": "vertical-text"},
                  {"label": "Vertical Rotated", "value": "vertical-rotated"}
              ]'></ui-dropdown>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <ui-dropdown id="playTagShape" label="Shape" variant="outline" value="rounded" options='[
                      {"label": "Rounded", "value": "rounded"},
                      {"label": "Pill", "value": "pill"},
                      {"label": "Square", "value": "square"},
                      {"label": "Circle", "value": "circle"},
                      {"label": "Ribbon", "value": "ribbon"},
                      {"label": "Ticket", "value": "ticket"},
                      {"label": "Coupon", "value": "coupon"}
                  ]'></ui-dropdown>
                  
                  <ui-dropdown id="playTagIconLibrary" label="Icon Library" variant="outline" value="default" options='[
                      {"label": "Default", "value": "default"},
                      {"label": "Ionicons", "value": "ionicons"},
                      {"label": "Lucide", "value": "lucide"},
                      {"label": "FontAwesome", "value": "fontawesome"},
                      {"label": "Bootstrap", "value": "bootstrap"}
                  ]'></ui-dropdown>
              </div>

              <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <ui-input id="playTagIcon" label="Icon Glyph" placeholder="e.g. star"></ui-input>
                  <ui-dropdown id="playTagIconPos" label="Icon Position" variant="outline" value="start" options='[
                      {"label": "Start", "value": "start"},
                      {"label": "End", "value": "end"}
                  ]'></ui-dropdown>
              </div>
            </div>

            </div>
          </div>
        </div>
        
        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button label="Copy" id="copyTagBtn" variant="outline" color="secondary" size="md"click="copyTagCode()" style="position: absolute; top: 10px; right: 10px;"></ui-button>
          <code id="tagCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px;">
            &lt;ui-tag label="Playground Tag" color="primary" variant="filled"&gt;&lt;/ui-tag&gt;
          </code>
        </div>
      </div>
    `;

    // Initialize code block and event listeners
    updateTagCode();

    setTimeout(() => {
      const inputs = ['playTagLabel', 'playTagIcon'];
      const dropdowns = ['playTagColor', 'playTagSize', 'playTagVariant', 'playTagElevation', 'playTagOrientation', 'playTagShape', 'playTagIconLibrary', 'playTagIconPos'];
      const checkboxes = ['playTagRounded', 'playTagRemovable', 'playTagLoading', 'playTagDisabled', 'playTagPulse', 'playTagSkeleton', 'playTagIconSpin'];

      inputs.forEach(id => {
        document.getElementById(id)?.addEventListener('inputChange', e => {
          const prop = id.replace('playTag', '').toLowerCase();
          updateTagDemo(prop === 'label' ? 'label' : 'icon', e.target.value);
        });
      });

      dropdowns.forEach(id => {
        document.getElementById(id)?.addEventListener('dropdownChange', e => {
          let prop = id.replace('playTag', '');
          prop = prop.charAt(0).toLowerCase() + prop.slice(1);
          updateTagDemo(prop, e.target.value);
        });
      });

      checkboxes.forEach(id => {
        document.getElementById(id)?.addEventListener('checkboxChange', e => {
          let prop = id.replace('playTag', '');
          prop = prop.charAt(0).toLowerCase() + prop.slice(1);
          updateTagDemo(prop, e.target.checked);
        });
      });
    }, 100);
  };

  window.copyTagCode = () => {
    const code = document.getElementById('tagCodeBlock').innerText;
    const btn = document.getElementById('copyTagBtn');

    navigator.clipboard.writeText(code).then(() => {
      const originalText = btn.label;
      btn.label = 'Copied!';
      btn.style.setProperty('--ui-button-bg', '#10b981');

      setTimeout(() => {
        btn.label = originalText;
        btn.style.setProperty('--ui-button-bg', '');
      }, 2000);
    });
  };

  window.updateTagDemo = (prop, value) => {
    const el = document.getElementById('demoTag');
    if (el) {
      el[prop] = value;
    }
    updateTagCode();
  };

  function updateTagCode() {
    const el = document.getElementById('demoTag');
    const codeBlock = document.getElementById('tagCodeBlock');
    if (!el || !codeBlock) return;

    let props = '';
    if (el.label) props += ` label="${el.label}"`;
    if (el.color && el.color !== 'default') props += ` color="${el.color}"`;
    if (el.size && el.size !== 'md') props += ` size="${el.size}"`;
    if (el.variant && el.variant !== 'filled') props += ` variant="${el.variant}"`;
    if (el.orientation && el.orientation !== 'horizontal') props += ` orientation="${el.orientation}"`;
    if (el.shape && el.shape !== 'rounded') props += ` shape="${el.shape}"`;
    if (el.elevation > 0) props += ` elevation="${el.elevation}"`;
    if (el.disabled) props += ` disabled`;
    if (el.removable) props += ` removable`;
    if (el.loading) props += ` loading`;
    if (el.pulse) props += ` pulse`;
    if (el.customColor) props += ` custom-color="${el.customColor}"`;
    if (el.customTextColor) props += ` custom-text-color="${el.customTextColor}"`;
    if (el.tooltip) props += ` tooltip="${el.tooltip}"`;
    if (el.icon) props += ` icon="${el.icon}"`;
    if (el.iconPosition && el.iconPosition !== 'start') props += ` icon-position="${el.iconPosition}"`;

    codeBlock.textContent = `<ui-tag${props}></ui-tag>`;
  }

  // Default view
  showTagVariants();
}
