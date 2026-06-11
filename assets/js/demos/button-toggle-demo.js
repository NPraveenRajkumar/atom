export function initButtonToggleDemo() {
  const section = document.getElementById('button-toggle');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Versatile toggle button group for selection between related options.</p>
    
    <div id="toggleNavPills" class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button data-demo="playground" variant="outline" status-color="primary">🎮 Playground</ui-button>
      <ui-button data-demo="comparison" variant="outline">Style Comparison</ui-button>
      <ui-button data-demo="gallery" variant="outline">Color Gallery</ui-button>
      <ui-button data-demo="horizontal" variant="outline">Horizontal</ui-button>
      <ui-button data-demo="vertical" variant="outline">Vertical (Fixed)</ui-button>
      <ui-button data-demo="shapes" variant="outline">Shapes</ui-button>
      <ui-button data-demo="iconOnly" variant="outline">Icon Only (Non-Label)</ui-button>
      <ui-button data-demo="description" variant="outline">With Description</ui-button>
      <ui-button data-demo="widthFit" variant="outline">Width Fit</ui-button>
      <ui-button data-demo="multi" variant="outline">Multi Select</ui-button>
      <ui-button data-demo="dropdown" variant="outline">Dropdown Mode</ui-button>
      <ui-button data-demo="colors" variant="outline">Colors</ui-button>
      <ui-button data-demo="states" variant="outline">States</ui-button>
      <ui-button data-demo="gradients" variant="outline">✨ Gradients</ui-button>
      <ui-button data-demo="premium" variant="outline">Premium</ui-button>
      <ui-button data-demo="elite" variant="outline">Elite Features</ui-button>
      <ui-button data-demo="form" variant="outline">Form Integration</ui-button>
      <ui-button data-demo="searchLoad" variant="outline">🔍 Search & Loading</ui-button>
    </div>



    <div id="buttonToggleContainer" style="margin-top: 20px;"></div>
  `;

  const container = section.querySelector('#buttonToggleContainer');

  const showToggleComparison = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Floating vs Flush Styles</h3>
        <p>You can now toggle between two high-fidelity styles using CSS variables.</p>
        
        <div style="display: grid; grid-template-columns: 1fr; gap: 40px; margin-top: 30px;">
          
          <!-- Flush Style (Matches Image 1) -->
          <div style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-subtle,#f1f5f9);">
             <h5 style="color:var(--text-secondary,#64748b); margin-top: 0; font-weight: 700; font-size: 12px; text-transform: uppercase;">1. Perfectly Flush (Segmented)</h5>
             <ui-button-toggle-group 
                value="dev" 
                style="--group-padding: 0px; --indicator-radius: 0px; --button-group-color: #22c55e; --button-group-bg: #ecfdf5;"
             >
                <ui-button-toggle value="dev" label="Development" icon="code-2" icon-library="lucide"></ui-button-toggle>
                <ui-button-toggle value="prod" label="Production" icon="ship" icon-library="lucide"></ui-button-toggle>
                <ui-button-toggle value="maint" label="Maintenance" icon="wrench" icon-library="lucide"></ui-button-toggle>
             </ui-button-toggle-group>
          </div>

          <!-- Floating Pill (Matches Image 2) -->
          <div style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; border:1px solid var(--border-subtle,#f1f5f9);">
             <h5 style="color:var(--text-secondary,#64748b); margin-top: 0; font-weight: 700; font-size: 12px; text-transform: uppercase;">2. Floating Pill (Premium)</h5>
             <ui-button-toggle-group 
                value="grid" 
                style="--group-padding: 6px; --indicator-radius: 10px; --button-group-color: #00ca99; --button-group-bg: #f1f5f9; --indicator-shadow: 0 4px 12px rgba(0,0,0,0.12);"
             >
                <ui-button-toggle value="list" label="List" icon="list" icon-library="lucide"></ui-button-toggle>
                <ui-button-toggle value="grid" label="Grid" icon="grid-3x3" icon-library="lucide"></ui-button-toggle>
                <ui-button-toggle value="table" label="Table" icon="table" icon-library="lucide"></ui-button-toggle>
             </ui-button-toggle-group>
          </div>

        </div>
      </div>
    `;
  };

  const showToggleGallery = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Floating Pill Gallery</h3>
        <p>Showcasing the premium "floating pill" selection style across different status colors.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 30px; margin-top: 30px;">
          <!-- Primary -->
          <div style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border:1px solid var(--border-subtle,#f1f5f9);">
             <h5 style="color: #22c55e; margin-top: 0; font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Primary</h5>
             <ui-button-toggle-group value="2" color="primary" style="--button-group-bg: #f8fafc;">
                <ui-button-toggle value="1" label="Option 1"></ui-button-toggle>
                <ui-button-toggle value="2" label="Option 2"></ui-button-toggle>
                <ui-button-toggle value="3" label="Option 3"></ui-button-toggle>
             </ui-button-toggle-group>
          </div>

          <!-- Secondary -->
          <div style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border:1px solid var(--border-subtle,#f1f5f9);">
             <h5 style="color:var(--text-secondary,#64748b); margin-top: 0; font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Secondary</h5>
             <ui-button-toggle-group value="2" color="secondary" style="--button-group-bg: #f8fafc;">
                <ui-button-toggle value="1" label="Option 1"></ui-button-toggle>
                <ui-button-toggle value="2" label="Option 2"></ui-button-toggle>
                <ui-button-toggle value="3" label="Option 3"></ui-button-toggle>
             </ui-button-toggle-group>
          </div>

          <!-- Success -->
          <div style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border:1px solid var(--border-subtle,#f1f5f9);">
             <h5 style="color: #22c55e; margin-top: 0; font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Success</h5>
             <ui-button-toggle-group value="2" color="success" style="--button-group-bg: #f8fafc;">
                <ui-button-toggle value="1" label="Option 1"></ui-button-toggle>
                <ui-button-toggle value="2" label="Option 2"></ui-button-toggle>
                <ui-button-toggle value="3" label="Option 3"></ui-button-toggle>
             </ui-button-toggle-group>
          </div>

          <!-- Danger -->
          <div style="padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 20px rgba(0,0,0,0.04); border:1px solid var(--border-subtle,#f1f5f9);">
             <h5 style="color:var(--accent-red,#ef4444); margin-top: 0; font-weight: 800; font-size: 11px; letter-spacing: 0.1em; text-transform: uppercase;">Danger</h5>
             <ui-button-toggle-group value="2" color="danger" style="--button-group-bg: #f8fafc;">
                <ui-button-toggle value="1" label="Option 1"></ui-button-toggle>
                <ui-button-toggle value="2" label="Option 2"></ui-button-toggle>
                <ui-button-toggle value="3" label="Option 3"></ui-button-toggle>
             </ui-button-toggle-group>
          </div>
        </div>
      </div>
    `;
  };

  const showToggleSegmented = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Enterprise Segmented Selection</h3>
        <p>A modern, high-fidelity view mode selector with smooth glide transitions and high contrast states.</p>
        
        <div style="margin-top: 30px;">
          <ui-button-toggle-group 
            label="Select View Mode" 
            helper-text="Choose how you want to view content"
            value="list" 
            color="success" 
            required
            style="--button-group-bg: #f1f5f9; --button-group-color: #10b981; --label-color: #334155;"
          >
            <ui-button-toggle value="list" label="List View" icon="list" icon-library="lucide"></ui-button-toggle>
            <ui-button-toggle value="grid" label="Grid View" icon="grid" icon-library="lucide"></ui-button-toggle>
            <ui-button-toggle value="compact" label="Compact" icon="expand" icon-library="lucide"></ui-button-toggle>
            <ui-button-toggle value="cards" label="Cards View" icon="contact-2" icon-library="lucide"></ui-button-toggle>
          </ui-button-toggle-group>
        </div>
        
        <div style="margin-top: 60px; padding: 20px; background:var(--bg-tertiary,#f1f5f9); border-radius: 8px; font-size: 13px; color: #475569;">
          <strong>Tip:</strong> This layout uses <code>color="success"</code> and <code>icon-library="lucide"</code> to match the requested design system specifications.
        </div>
      </div>
    `;
  };

  const showToggleHorizontal = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Standard Horizontal Group</h3>
        <p>Commonly used for simple selection like alignment or view modes.</p>
        <div style="display: flex; flex-direction: column; gap: 40px;">
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Icon Position: Left (Default)</h4>
            <ui-button-toggle-group value="m1">
              <ui-button-toggle value="m1" label="One" icon="fas fa-home" library="fontawesome"></ui-button-toggle>
              <ui-button-toggle value="m2" label="Two" icon="fas fa-search" library="fontawesome"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Icon Position: Right</h4>
            <ui-button-toggle-group value="m1" color="secondary" icon-position="right">
              <ui-button value="m1" label="Next" icon="fas fa-arrow-right" icon-position="right"></ui-button>
              <ui-button value="m2" label="Skip" icon="fas fa-forward" icon-position="right"></ui-button>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Icon Position: Top</h4>
            <ui-button-toggle-group value="m1" color="info" shape="pill" icon-position="top">
              <ui-button-toggle value="m1" label="Upload" icon="fas fa-upload" library="fontawesome" icon-position="top"></ui-button-toggle>
              <ui-button-toggle value="m2" label="Download" icon="fas fa-download" library="fontawesome" icon-position="top"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Icon Position: Bottom</h4>
            <ui-button-toggle-group value="m1" color="info" shape="pill" icon-position="bottom">
              <ui-button-toggle value="m1" label="Upload" icon="fas fa-upload" library="fontawesome" icon-position="bottom"></ui-button-toggle>
              <ui-button-toggle value="m2" label="Download" icon="fas fa-download" library="fontawesome" icon-position="bottom"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
        </div>
      </div>
    `;
  };

  const showToggleVertical = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Vertical Group (Fixed)</h3>
        <p>Buttons now have uniform length and clean alignment even with varying label sizes.</p>
        <div style="max-width: 300px;">
          <ui-button-toggle-group orientation="vertical" value="pro" color="success">
            <ui-button-toggle value="free" label="Free Plan" icon="fas fa-leaf" library="fontawesome" icon-position="left"></ui-button-toggle>
            <ui-button-toggle value="pro" label="Professional" icon="fas fa-star" library="fontawesome" icon-position="left"></ui-button-toggle>
            <ui-button-toggle value="biz" label="Enterprise" icon="fas fa-building" library="fontawesome" icon-position="left"></ui-button-toggle>
          </ui-button-toggle-group>
        </div>
      </div>
    `;
  };

  const showToggleShapes = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Shapes & Corner Radii</h3>
        <p>Vary the shape of the button group for different UI contexts.</p>
        <div style="display: flex; flex-direction: column; gap: 30px;">
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Round (Default)</h4>
            <ui-button-toggle-group shape="rounded" value="1" color="primary">
              <ui-button-toggle value="1" label="Selection 1"></ui-button-toggle>
              <ui-button-toggle value="2" label="Selection 2"></ui-button-toggle>
              <ui-button-toggle value="3" label="Selection 3"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Pill (Full Round)</h4>
            <ui-button-toggle-group shape="pill" value="1" color="secondary">
              <ui-button-toggle value="1" label="Apple"></ui-button-toggle>
              <ui-button-toggle value="2" label="Banana"></ui-button-toggle>
              <ui-button-toggle value="3" label="Cherry"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Square</h4>
            <ui-button-toggle-group shape="square" value="1" color="info">
              <ui-button-toggle value="1" label="Low"></ui-button-toggle>
              <ui-button-toggle value="2" label="md"></ui-button-toggle>
              <ui-button-toggle value="3" label="High"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Chip Style</h4>
            <ui-button-toggle-group shape="chip" value="1" color="success">
              <ui-button-toggle value="1" label="Active"></ui-button-toggle>
              <ui-button-toggle value="2" label="Pending"></ui-button-toggle>
              <ui-button-toggle value="3" label="Closed"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
        </div>
      </div>
    `;
  };

  const showToggleIconOnly = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Icon Only Mode</h3>
        <p>Use the <code>icon-only</code> boolean on the group to hide all labels, or on individual toggles for mixed rows.</p>
        <div style="display: flex; flex-direction: column; gap: 36px;">

          <div>
            <h4 style="margin-bottom:4px; font-size:14px; color:var(--text-secondary,#64748b);">Group-level: <code>icon-only</code> on the group</h4>
            <p style="margin:0 0 12px; font-size:13px; color:var(--text-secondary,#64748b);">All toggles suppress labels. Ideal for compact toolbars.</p>
            <ui-button-toggle-group icon-only value="bold" icon-library="lucide" color="primary">
              <ui-button-toggle value="bold" label="Bold" icon="bold" tooltip="Bold"></ui-button-toggle>
              <ui-button-toggle value="italic" label="Italic" icon="italic" tooltip="Italic"></ui-button-toggle>
              <ui-button-toggle value="underline" label="Underline" icon="underline" tooltip="Underline"></ui-button-toggle>
              <ui-button-toggle value="align" label="Align" icon="align-left" tooltip="Align Left"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

          <div>
            <h4 style="margin-bottom:4px; font-size:14px; color:var(--text-secondary,#64748b);">Font Awesome Icons</h4>
            <p style="margin:0 0 12px; font-size:13px; color:var(--text-secondary,#64748b);">Use <code>fas fa-*</code> icon class names without setting <code>icon-library</code> (defaults to Font Awesome).</p>
            <ui-button-toggle-group icon-only value="bold" color="info">
              <ui-button-toggle value="bold" label="Bold" icon="fas fa-bold" library="fontawesome" tooltip="Bold"></ui-button-toggle>
              <ui-button-toggle value="italic" label="Italic" icon="fas fa-italic" library="fontawesome" tooltip="Italic"></ui-button-toggle>
              <ui-button-toggle value="underline" label="Underline" icon="fas fa-underline" library="fontawesome" tooltip="Underline"></ui-button-toggle>
              <ui-button-toggle value="strikethrough" label="Strikethrough" icon="fas fa-strikethrough" library="fontawesome" tooltip="Strikethrough"></ui-button-toggle>
              <ui-button-toggle value="align-left" label="Align Left" icon="fas fa-align-left" library="fontawesome" tooltip="Align Left"></ui-button-toggle>
              <ui-button-toggle value="align-center" label="Align Center" icon="fas fa-align-center" library="fontawesome" tooltip="Align Center"></ui-button-toggle>
              <ui-button-toggle value="align-right" label="Align Right" icon="fas fa-align-right" library="fontawesome" tooltip="Align Right"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

          <div>
            <h4 style="margin-bottom:4px; font-size:14px; color:var(--text-secondary,#64748b);">Lucide Icons — Glass variant</h4>
            <p style="margin:0 0 12px; font-size:13px; color:var(--text-secondary,#64748b);">Group-level <code>icon-only</code> with <code>icon-library="lucide"</code>.</p>
            <ui-button-toggle-group icon-only icon-library="lucide" variant="glass" value="edit" color="secondary">
              <ui-button-toggle value="edit" label="Edit" icon="edit-3" tooltip="Edit Content"></ui-button-toggle>
              <ui-button-toggle value="trash" label="Delete" icon="trash-2" tooltip="Delete Item"></ui-button-toggle>
              <ui-button-toggle value="save" label="Save" icon="save" tooltip="Save Changes"></ui-button-toggle>
              <ui-button-toggle value="share" label="Share" icon="share-2" tooltip="Share Link"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

          <div>
            <h4 style="margin-bottom:4px; font-size:14px; color:var(--text-secondary,#64748b);">Per-item: <code>icon-only</code> on individual toggles</h4>
            <p style="margin:0 0 12px; font-size:13px; color:var(--text-secondary,#64748b);">Mix icon-only and labelled toggles in the same group. Useful for action + label layouts.</p>
            <ui-button-toggle-group value="grid" color="info" icon-library="lucide">
              <ui-button-toggle value="grid" label="Grid" icon="layout-grid" icon-only></ui-button-toggle>
              <ui-button-toggle value="list" label="List" icon="list" icon-only></ui-button-toggle>
              <ui-button-toggle value="kanban" label="Kanban Board" icon="columns" tooltip="Kanban"></ui-button-toggle>
              <ui-button-toggle value="calendar" label="Calendar" icon="calendar-days" tooltip="Calendar"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

          <div>
            <h4 style="margin-bottom:4px; font-size:14px; color:var(--text-secondary,#64748b);">Pill shape · Vertical · Group-level icon-only</h4>
            <p style="margin:0 0 12px; font-size:13px; color:var(--text-secondary,#64748b);">Works with any orientation and shape.</p>
            <ui-button-toggle-group icon-only icon-library="lucide" orientation="vertical" shape="pill" value="sun" color="warning" style="max-width:64px;">
              <ui-button-toggle value="sun" label="Light" icon="sun" tooltip="Light mode"></ui-button-toggle>
              <ui-button-toggle value="moon" label="Dark" icon="moon" tooltip="Dark mode"></ui-button-toggle>
              <ui-button-toggle value="monitor" label="System" icon="monitor" tooltip="System default"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

        </div>
      </div>
    `;
  };

  const showToggleDescription = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Description Text Layouts</h3>
        <p>Control where secondary text appears relative to the label.</p>
        <div style="display: flex; flex-direction: column; gap: 40px;">
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Default (Bottom Alignment)</h4>
            <ui-button-toggle-group color="primary" value="v1">
               <ui-button-toggle value="v1" label="Standard" description="Text appears below label"></ui-button-toggle>
               <ui-button-toggle value="v2" label="Compact" description="Sub-text metadata"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Side-by-Side (High-Density)</h4>
            <ui-button-toggle-group color="secondary" value="v1" orientation="vertical" style="max-width:400px;">
               <ui-button-toggle value="v1" label="Network Alpha" description="5GHz • Active" description-position="side" icon="wifi" icon-library="lucide"></ui-button-toggle>
               <ui-button-toggle value="v2" label="Secure Vault" description="256-bit • Locked" description-position="side" icon="shield" icon-library="lucide"></ui-button-toggle>
               <ui-button-toggle value="v3" label="Cloud Drive" description="1.2TB • Syncing" description-position="side" icon="cloud" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">With Premium Icons on Both Sides</h4>
            <ui-button-toggle-group color="primary" value="pro" shape="rounded">
              <ui-button-toggle 
                value="free" 
                label="Basic Plan" 
                description="Community support" 
                icon-left="fas fa-user" 
                icon-right="fas fa-check" 
                library="fontawesome"
              ></ui-button-toggle>
              <ui-button-toggle 
                value="pro" 
                label="Pro Plan" 
                description="Priority 24/7 support" 
                icon-left="fas fa-star" 
                icon-right="fas fa-rocket" 
                library="fontawesome"
              ></ui-button-toggle>
              <ui-button-toggle 
                value="biz" 
                label="Enterprise" 
                description="Dedicated manager" 
                icon-left="fas fa-building" 
                icon-right="fas fa-shield-alt" 
                library="fontawesome"
              ></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Lucide Version (Max-Fit)</h4>
            <ui-button-toggle-group icon-library="lucide" color="info" value="v1" shape="chip" width="max-content">
              <ui-button-toggle 
                value="v1" 
                label="Version 1.0" 
                description="Stable release" 
                icon-left="package" 
                icon-right="check-circle" 
              ></ui-button-toggle>
              <ui-button-toggle 
                value="v2" 
                label="Version 2.0" 
                description="Beta features" 
                icon-left="zap" 
                icon-right="alert-circle" 
              ></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
        </div>
      </div>
    `;
  };

  const showToggleWidthFit = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Width Management</h3>
        <p>Control the width behavior of the group from "max-fit" to full width expansion.</p>
        <div style="display: flex; flex-direction: column; gap: 30px;">
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Max-Fit (Tight Content)</h4>
            <ui-button-toggle-group width="max-content" value="1" color="primary">
              <ui-button-toggle value="1" label="Small"></ui-button-toggle>
              <ui-button-toggle value="2" label="md"></ui-button-toggle>
              <ui-button-toggle value="3" label="Large"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Fit-Content (With more text)</h4>
            <ui-button-toggle-group width="fit-content" value="1" color="secondary">
              <ui-button-toggle value="1" label="Option with longer text label"></ui-button-toggle>
              <ui-button-toggle value="2" label="Short"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Full Width (Grows to fill container)</h4>
            <div style="border: 1px dashed #ccc; padding: 10px; width: 100%;">
              <ui-button-toggle-group full-width value="1" color="success">
                <ui-button-toggle value="1" label="Stretched 1"></ui-button-toggle>
                <ui-button-toggle value="2" label="Stretched 2"></ui-button-toggle>
                <ui-button-toggle value="3" label="Stretched 3"></ui-button-toggle>
              </ui-button-toggle-group>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  const showToggleMulti = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Multi Select Mode</h3>
        <p>Allow users to select multiple options simultaneously.</p>
        <ui-button-toggle-group multi-select value='["bold", "italic"]' color="info">
          <ui-button-toggle value="bold" label="Bold" icon="fas fa-bold" library="fontawesome"></ui-button-toggle>
          <ui-button-toggle value="italic" label="Italic" icon="fas fa-italic" library="fontawesome"></ui-button-toggle>
          <ui-button-toggle value="underline" label="Underline" icon="fas fa-underline" library="fontawesome"></ui-button-toggle>
          <ui-button-toggle value="strikethrough" label="Strike" icon="fas fa-strikethrough" library="fontawesome"></ui-button-toggle>
        </ui-button-toggle-group>
      </div>
    `;
  };

  const showToggleDropdown = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Dropdown Mode</h3>
        <p>Save space by transforming the group into a dropdown menu.</p>
        <div style="display: flex; gap: 20px; flex-wrap: wrap;">
          <ui-button-toggle-group mode="dropdown" button-action-label="Export As" color="primary" variant="surface">
            <ui-button-toggle value="pdf" label="Portable Document (PDF)" icon="fas fa-file-pdf" library="fontawesome"></ui-button-toggle>
            <ui-button-toggle value="excel" label="Excel Sheet (XLSX)" icon="fas fa-file-excel" library="fontawesome"></ui-button-toggle>
            <ui-button-toggle value="csv" label="Comma Separated (CSV)" icon="fas fa-file-csv" library="fontawesome"></ui-button-toggle>
          </ui-button-toggle-group>

          <ui-button-toggle-group mode="dropdown" button-action-label="Theme" color="secondary" variant="outline">
            <ui-button-toggle value="light" label="Light Mode" icon="fas fa-sun" library="fontawesome"></ui-button-toggle>
            <ui-button-toggle value="dark" label="Dark Night" icon="fas fa-moon" library="fontawesome"></ui-button-toggle>
            <ui-button-toggle value="auto" label="System Default" icon="fas fa-desktop" library="fontawesome"></ui-button-toggle>
          </ui-button-toggle-group>
        </div>

        <h4 style="margin: 32px 0 12px; font-size:14px; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em;">Padding-less Dropdown Variant</h4>
        <p style="font-size: 13px; color: #6b7280; margin-bottom: 20px;">The <code>variant="dropdown"</code> removes all internal padding for high-density layouts or inline integrations.</p>
        <div style="background:var(--bg-secondary,#f8fafc); padding: 20px; border-radius: 8px; border:1px solid var(--border-default,#e2e8f0);">
          <ui-button-toggle-group color="primary" variant="dropdown" value="v1">
            <ui-button-toggle value="v1" label="Export Data" icon="download" icon-library="lucide"></ui-button-toggle>
            <ui-button-toggle value="v2" label="Share Link" icon="share-2" icon-library="lucide"></ui-button-toggle>
            <ui-button-toggle value="v3" label="Archive" icon="archive" icon-library="lucide"></ui-button-toggle>
          </ui-button-toggle-group>
        </div>
      </div>
    `;
  };

  const showToggleColors = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Colors & Variants</h3>
        <div style="display: flex; flex-direction: column; gap: 24px;">
          <ui-button-toggle-group value="1" color="primary">
            <ui-button-toggle value="1" label="Primary"></ui-button-toggle>
            <ui-button-toggle value="2" label="Toggle"></ui-button-toggle>
          </ui-button-toggle-group>
          <ui-button-toggle-group value="1" color="success">
            <ui-button-toggle value="1" label="Success"></ui-button-toggle>
            <ui-button-toggle value="2" label="Toggle"></ui-button-toggle>
          </ui-button-toggle-group>
          <ui-button-toggle-group value="1" color="danger">
            <ui-button-toggle value="1" label="Danger"></ui-button-toggle>
            <ui-button-toggle value="2" label="Toggle"></ui-button-toggle>
          </ui-button-toggle-group>
          <ui-button-toggle-group value="1" color="warning">
            <ui-button-toggle value="1" label="Warning"></ui-button-toggle>
            <ui-button-toggle value="2" label="Toggle"></ui-button-toggle>
          </ui-button-toggle-group>
          <ui-button-toggle-group value="1" color="info">
            <ui-button-toggle value="1" label="Info"></ui-button-toggle>
            <ui-button-toggle value="2" label="Toggle"></ui-button-toggle>
          </ui-button-toggle-group>
        </div>
      </div>
    `;
  };

  const showToggleStates = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>States</h3>
        <p>Disabled components and individual options.</p>
        <div style="display: flex; flex-direction: column; gap: 24px;">
           <div>
             <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Fully Disabled</h4>
             <ui-button-toggle-group disabled value="opt1">
               <ui-button-toggle value="opt1" label="Option 1"></ui-button-toggle>
               <ui-button-toggle value="opt2" label="Option 2"></ui-button-toggle>
             </ui-button-toggle-group>
           </div>
           <div>
             <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Individual Option Disabled</h4>
             <ui-button-toggle-group value="opt1">
               <ui-button-toggle value="opt1" label="Working"></ui-button-toggle>
               <ui-button-toggle value="opt2" label="Maintenance" disabled></ui-button-toggle>
               <ui-button-toggle value="opt3" label="Available"></ui-button-toggle>
             </ui-button-toggle-group>
           </div>
        </div>
      </div>
    `;
  };

  const showToggleGradients = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>✨ High-Fidelity Gradients</h3>
        <p>Apply vibrant linear gradients to the active state of your toggle groups.</p>
        <div style="display: flex; flex-direction: column; gap: 40px;">
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Ocean Depth (Blue-Indigo)</h4>
            <ui-button-toggle-group color='{"from": "#3b82f6", "to": "#6366f1"}' value="opt1" shape="pill">
               <ui-button-toggle value="opt1" label="Development" icon="code" icon-library="lucide"></ui-button-toggle>
               <ui-button-toggle value="opt2" label="Production" icon="ship" icon-library="lucide"></ui-button-toggle>
               <ui-button-toggle value="opt3" label="Maintenance" icon="tool" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Arctic Aurora (Teal-Cyan)</h4>
            <ui-button-toggle-group color='{"from": "#0d9488", "to": "#0891b2"}' value="opt1" variant="outline">
               <ui-button-toggle value="opt1" label="Sustainable" icon="leaf" icon-library="lucide"></ui-button-toggle>
               <ui-button-toggle value="opt2" label="Efficient" icon="zap" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Cosmic Neon (Indigo-Pink)</h4>
            <ui-button-toggle-group color='{"from": "#4f46e5", "to": "#db2777"}' value="opt1" shape="rounded">
               <ui-button-toggle value="opt1" label="Launch" icon="rocket" icon-library="lucide"></ui-button-toggle>
               <ui-button-toggle value="opt2" label="Orbit" icon="orbit" icon-library="lucide"></ui-button-toggle>
               <ui-button-toggle value="opt3" label="Landing" icon="target" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
        </div>
      </div>
    `;
  };

  const showTogglePremium = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Premium Features (Lucide Icons)</h3>
        <p>Using child &lt;ui-button-toggle&gt; tags with Lucide icons (synced automatically).</p>
        <div style="display: flex; flex-direction: column; gap: 30px;">
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">User Status Selector</h4>
            <ui-button-toggle-group value="online" color="info" icon-library="lucide">
              <ui-button-toggle value="online" label="Online" avatar-src="/build/assets/images/logo.png" status="online" icon="user-check"></ui-button-toggle>
              <ui-button-toggle value="away" label="Away" avatar-src="/build/assets/images/logo.png" status="away" icon="clock"></ui-button-toggle>
              <ui-button-toggle value="busy" label="Do Not Disturb" avatar-src="/build/assets/images/logo.png" status="busy" icon="minus-circle"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Dropdown Mode (Child Tags)</h4>
            <ui-button-toggle-group mode="dropdown" button-action-label="Sync Action" color="primary" icon-library="lucide">
              <ui-button-toggle value="sync" label="Sync Now" icon="refresh-cw"></ui-button-toggle>
              <ui-button-toggle value="cloud" label="Cloud Save" icon="cloud"></ui-button-toggle>
              <ui-button-toggle value="offline" label="Go Offline" icon="wifi-off"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
        </div>
      </div>
    `;
  };

  const showToggleElite = () => {
    container.innerHTML = `
      <div class="demo-block" style="border-color: var(--border-default); border-width: 2px;">
        <h3 style="color: var(--text-primary); display: flex; align-items: center; gap: 10px;">
          <ui-icon name="award" library="lucide" size="24px" style="color: #fbbf24;"></ui-icon>
          God Mode: Elite Toggle Interaction
        </h3>
        <p style="color:var(--text-secondary,#64748b);">High-fidelity physical interactions synced from the flagship button engine.</p>
        
        <div style="display: flex; flex-direction: column; gap: 40px; margin-top: 30px;">
          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color: var(--label-color); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">3D Magnetic Track & Pulsing</h4>
            <ui-button-toggle-group value="m1">
              <ui-button-toggle value="m1" label="Magnetic One" magnetic tilt pulse icon="zap" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="m2" label="Magnetic Two" magnetic tilt pulse icon="activity" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="m3" label="Magnetic Three" magnetic tilt pulse icon="shield" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color: var(--label-color); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">Rainbow Glow & Animated Gradients</h4>
            <ui-button-toggle-group value="r1" variant="outline" color="primary">
              <ui-button-toggle value="r1" label="Prismatic" rainbow animate-gradient icon="sun" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="r2" label="Spectrum" rainbow animate-gradient icon="moon" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="r3" label="Nebula" rainbow animate-gradient icon="cloud-rain" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color: var(--label-color); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">Shatter & Audio (Untoggle Effects)</h4>
            <p style="color:var(--text-secondary,#64748b); font-size: 12px; margin-bottom: 12px;">Deselecting these buttons triggers a procedural shatter and distinct audio.</p>
            <ui-button-toggle-group value="s1" multi-select>
              <ui-button-toggle value="s1" label="Glass Break" shatter audio="success" haptic icon="layers" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="s2" label="Metal Clink" shatter audio="click" haptic icon="database" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="s3" label="Energy Pop" shatter audio="error" haptic icon="cpu" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>

          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color: var(--label-color); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">Side Descriptions & High-Precision Icon-Only</h4>
            <div style="display: flex; flex-direction: column; gap: 20px;">
              <ui-button-toggle-group value="side1" orientation="vertical" color="primary">
                <ui-button-toggle 
                  value="side1" 
                  label="Network 1" 
                  description="5GHz - Available" 
                  description-position="side" 
                  icon="wifi" 
                  icon-library="lucide"
                ></ui-button-toggle>
                <ui-button-toggle 
                  value="side2" 
                  label="Network 2" 
                  description="2.4GHz - Secure" 
                  description-position="side" 
                  icon="shield" 
                  icon-library="lucide"
                ></ui-button-toggle>
              </ui-button-toggle-group>
              
              <div style="display: flex; gap: 10px;">
                <ui-button-toggle value="sq1" icon="camera" icon-library="lucide" shape="rounded" color="primary"></ui-button-toggle>
                <ui-button-toggle value="sq2" icon="video" icon-library="lucide" shape="rounded" color="secondary"></ui-button-toggle>
                <ui-button-toggle value="sq3" icon="mic" icon-library="lucide" shape="rounded" color="success"></ui-button-toggle>
              </div>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color: var(--label-color); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">Icon-Only Geometry: Circle vs Square</h4>
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
               <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
                  <ui-button-toggle icon="mic" icon-library="lucide" shape="circle" color="primary" value="c1"></ui-button-toggle>
                  <span style="color:var(--text-secondary,#64748b); font-size: 10px;">shape="circle"</span>
               </div>
               <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
                  <ui-button-toggle icon="video" icon-library="lucide" shape="square" color="secondary" value="s1"></ui-button-toggle>
                  <span style="color:var(--text-secondary,#64748b); font-size: 10px;">shape="square"</span>
               </div>
               <div style="display: flex; flex-direction: column; gap: 10px; align-items: center;">
                  <ui-button-toggle icon="camera" icon-library="lucide" shape="rounded" color="success" value="r1"></ui-button-toggle>
                  <span style="color:var(--text-secondary,#64748b); font-size: 10px;">shape="rounded"</span>
               </div>
            </div>
          </div>

          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color: var(--label-color); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">Winner Selection (Victory Mode)</h4>
            <div style="display: flex; gap: 20px;">
               <ui-button-toggle-group value="none">
                  <ui-button-toggle value="v1" label="Standard Choice" icon="circle" icon-library="lucide"></ui-button-toggle>
                  <ui-button-toggle value="v2" label="Winning Secret" icon="trophy" icon-library="lucide" color="success" confetti success-morph="600" audio="success" haptic></ui-button-toggle>
               </ui-button-toggle-group>
            </div>
            <p style="color:var(--text-secondary,#64748b); font-size: 11px; margin-top: 10px;">Select 'Winning Secret' to trigger the procedural confetti and success morph pulse.</p>
          </div>

          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color: var(--label-color); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">Staggered Entrance Reveal</h4>
            <div style="display: flex; gap: 20px; flex-wrap: wrap;">
               <ui-button-toggle-group value="r1" reveal="slide-up" reveal-delay="500" reveal-stagger="100" color="primary">
                  <ui-button-toggle value="r1" label="One" icon="star" icon-library="lucide"></ui-button-toggle>
                  <ui-button-toggle value="r2" label="Two" icon="zap" icon-library="lucide"></ui-button-toggle>
                  <ui-button-toggle value="r3" label="Three" icon="shield" icon-library="lucide"></ui-button-toggle>
               </ui-button-toggle-group>

               <ui-button-toggle-group value="z1" reveal="zoom" reveal-delay="800" reveal-stagger="150" color="secondary" shape="pill" variant="glass">
                  <ui-button-toggle value="z1" label="Alpha" icon="layers" icon-library="lucide"></ui-button-toggle>
                  <ui-button-toggle value="z2" label="Beta" icon="layout" icon-library="lucide"></ui-button-toggle>
               </ui-button-toggle-group>
            </div>
            <p style="color:var(--text-secondary,#64748b); font-size: 11px; margin-top: 10px;">The group entrance is orchestrated automatically via indexed delays.</p>
          </div>

          <div>
            <h4 style="margin-bottom:12px; font-size:14px; color: var(--label-color); text-transform: uppercase; letter-spacing: 0.05em; opacity: 0.8;">Follow-Glow (Flashlight)</h4>
            <ui-button-toggle-group value="f1" orientation="vertical" style="max-width:300px;">
              <ui-button-toggle value="f1" label="Flashlight A" follow-glow icon="lightbulb" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="f2" label="Flashlight B" follow-glow icon="star" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
          </div>
        </div>
      </div>
    `;
  };

  const showToggleForm = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Native Form Integration</h3>
        <p>The toggle group now functions as a first-class citizen in native HTML forms using ElementInternals.</p>
        
        <form id="toggleForm">
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div>
              <h4 style="margin-bottom:12px; font-size:14px; color:var(--text-secondary,#64748b);">Select View Mode (Required)</h4>
              <ui-button-toggle-group name="selection_mode" value="grid" color="primary" required>
                <ui-button-toggle value="list" label="List View" icon="list" icon-library="lucide"></ui-button-toggle>
                <ui-button-toggle value="grid" label="Grid View" icon="grid" icon-library="lucide"></ui-button-toggle>
                <ui-button-toggle value="gallery" label="Gallery View" icon="image" icon-library="lucide"></ui-button-toggle>
              </ui-button-toggle-group>
            </div>
 
            <div style="display: flex; gap: 12px;">
              <ui-button id="btnSubmitForm" type="submit" variant="primary" label="Submit Form"></ui-button>
              <ui-button id="btnResetForm" type="reset" variant="outline" label="Reset Form"></ui-button>
            </div>

            <div style="margin-top: 12px; padding: 12px; background:var(--bg-tertiary,#f1f5f9); border-radius: 8px;">
              <strong>Form Result (FormData):</strong> <span id="formOutput">grid</span>
            </div>
          </div>
        </form>
      </div>

      <div class="demo-block">
        <h3>Multi-Select Form Handling</h3>
        <p>In multi-select mode, values are joined by commas for standard form compatibility.</p>
        
        <form id="multiToggleForm">
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <ui-button-toggle-group name="features" multi-select color="success" value='["auth", "db"]'>
              <ui-button-toggle value="auth" label="Authentication" icon="lock" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="db" label="Database" icon="database" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="api" label="REST API" icon="server" icon-library="lucide"></ui-button-toggle>
              <ui-button-toggle value="ui" label="User Interface" icon="layout" icon-library="lucide"></ui-button-toggle>
            </ui-button-toggle-group>
 
            <ui-button id="btnCheckFeatures" type="submit" variant="success" label="Check Features"></ui-button>

            <div style="margin-top: 12px; padding: 12px; background:var(--accent-green-soft,#f0fdf4); border-radius: 8px; border: 1px solid #bbf7d0;">
              <strong>Selected Features:</strong> <span id="multiFormOutput">auth,db</span>
            </div>
          </div>
        </form>
      </div>
    `;

    section.querySelector('#toggleForm')?.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(e.target);
      const output = section.querySelector('#formOutput');
      if (output) output.innerText = data.get('selection_mode') || 'No selection';
    });

    section.querySelector('#multiToggleForm')?.addEventListener('submit', e => {
      e.preventDefault();
      const data = new FormData(e.target);
      const output = section.querySelector('#multiFormOutput');
      if (output) output.innerText = data.get('features') || 'None';
    });
  };

  const showTogglePlayground = () => {
    container.innerHTML = `
      <style>
        .setting-card {
          background: var(--bg-secondary, #f8fafc);
          border-radius: 16px;
          padding: 20px;
          border: 1px solid var(--border-subtle, rgba(0,0,0,0.06));
          transition: transform 0.2s, box-shadow 0.2s;
        }
        .setting-card:hover {
          transform: translateY(-2px);
          box-shadow: 0 8px 25px rgba(0,0,0,0.08);
          border-color: var(--color-primary-subtle, rgba(139,92,246,0.3));
        }
        .playground-sidebar-scroll::-webkit-scrollbar { width: 4px; }
        .playground-sidebar-scroll::-webkit-scrollbar-track { background: transparent; }
        .playground-sidebar-scroll::-webkit-scrollbar-thumb { background: var(--border-default, #cbd5e1); border-radius: 4px; }
      </style>
      <div class="playground-wrapper" style="display: flex; height: 750px; background: var(--bg-primary, #fff); border-radius: 24px; overflow: hidden; box-shadow: 0 25px 50px -12px rgba(0,0,0,0.15); border: 1px solid var(--border-subtle, rgba(0,0,0,0.05));">
        <!-- Left Sidebar: Component Workbench -->
        <div class="playground-sidebar" style="width: 380px; flex-shrink: 0; border-right: 1px solid var(--border-subtle, rgba(0,0,0,0.05)); background: var(--bg-primary, #fff); display: flex; flex-direction: column;">
          <div style="padding: 28px; border-bottom: 1px solid var(--border-subtle, rgba(0,0,0,0.05)); flex-shrink: 0;">
            <h3 style="margin: 0; font-size: 1.2rem; color: var(--text-primary, #1e293b); display: flex; align-items: center; gap: 12px; font-weight: 800; letter-spacing: -0.02em;">
              <ui-icon name="tool" library="lucide" color="primary"></ui-icon>
              Component Workbench
            </h3>
          </div>
          
          <div class="playground-sidebar-scroll" style="flex: 1; overflow-y: auto; padding: 28px; display: flex; flex-direction: column; gap: 28px;">
            <!-- Group Card: Aesthetics -->
            <div class="setting-card">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--bg-tertiary,#f1f5f9); display: flex; align-items: center; justify-content: center;"><ui-icon name="palette" size="16px" color="primary"></ui-icon></div>
                <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary); font-weight: 700;">Aesthetics & Theme</h4>
              </div>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <ui-dropdown id="tgVariant" label="Visual Variant" value="default" options='[
                  {"label": "Standard (Default)", "value": "default"}, {"label": "Elevated Surface", "value": "surface"},
                  {"label": "Modern Outline", "value": "outline"}, {"label": "Frosted Glass", "value": "glass"},
                  {"label": "Direct Dropdown", "value": "dropdown"}
                ]' size="md"riant="outlined"></ui-dropdown>
                <ui-dropdown id="tgColor" label="Accent Core" value="primary" options='[
                  {"label": "Electric Violet", "value": "primary"}, {"label": "Slate Secondary", "value": "secondary"},
                  {"label": "Neon Success", "value": "success"}, {"label": "Deep Danger", "value": "danger"},
                  {"label": "Royal Info", "value": "info"}, {"label": "Solar Warning", "value": "warning"}
                ]' size="md"riant="outlined"></ui-dropdown>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <ui-dropdown id="tgShape" label="Shape Engine" value="rounded" options='[
                    {"label": "Rounded", "value": "rounded"}, {"label": "Square", "value": "square"},
                    {"label": "Pill (Full)", "value": "pill"}, {"label": "Circle Hub", "value": "circle"},
                    {"label": "Chip Aesthetic", "value": "chip"}
                  ]' size="md"riant="outlined"></ui-dropdown>
                  <ui-dropdown id="tgOrientation" label="Axis" value="horizontal" options='[
                    {"label": "Horizontal", "value": "horizontal"}, {"label": "Vertical", "value": "vertical"}
                  ]' size="md"riant="outlined"></ui-dropdown>
                </div>
              </div>
            </div>

            <!-- Group Card: Layout & Logic -->
            <div class="setting-card">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--accent-purple-soft,#f5f3ff); display: flex; align-items: center; justify-content: center;"><ui-icon name="layout" size="16px" color="primary"></ui-icon></div>
                <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color:var(--text-secondary); font-weight: 700;">Layout & Logic</h4>
              </div>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <ui-dropdown id="tgWidth" label="Width Logic" value="initial" options='[
                  {"label": "Initial (Auto)", "value": "initial"}, {"label": "Max-Content", "value": "max-content"},
                  {"label": "Fit-Content", "value": "fit-content"}, {"label": "100% Parent", "value": "100%"}
                ]' size="md"riant="outlined"></ui-dropdown>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
                  <ui-checkbox id="tgMulti" label="Multi Selection"></ui-checkbox>
                  <ui-checkbox id="tgIconOnly" label="Icon Focus"></ui-checkbox>
                  <ui-checkbox id="tgFullWidth" label="Sovereign Width"></ui-checkbox>
                  <ui-checkbox id="tgDisabled" label="Deactivated"></ui-checkbox>
                </div>
              </div>
            </div>

            <!-- Group Card: Content Synthesis -->
            <div class="setting-card">
              <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 20px;">
                <div style="width: 32px; height: 32px; border-radius: 8px; background:var(--accent-orange-soft,#fff7ed); display: flex; align-items: center; justify-content: center;"><ui-icon name="type" size="16px" color="warning"></ui-icon></div>
                <h4 style="margin: 0; font-size: 13px; text-transform: uppercase; letter-spacing: 0.1em; color: var(--text-secondary, #9a3412); font-weight: 700;">Content Synthesis</h4>
              </div>
              <div style="display: flex; flex-direction: column; gap: 16px;">
                <ui-input id="tgLabel1" label="Slot 1 Text" value="Development" size="md"riant="outlined"></ui-input>
                <ui-input id="tgLabel2" label="Slot 2 Text" value="Production" size="md"riant="outlined"></ui-input>
                <ui-dropdown id="tgReveal" label="Entrance Shader" value="none" options='[
                  {"label": "None", "value": "none"}, {"label": "Slide Up", "value": "slide-up"},
                  {"label": "Fade In", "value": "fade-in"}, {"label": "Zoom Master", "value": "zoom"}
                ]' size="md"riant="outlined"></ui-dropdown>
              </div>
            </div>
          </div>
        </div>

        <!-- Main Preview Area -->
        <div class="playground-main" style="flex: 1; display: flex; flex-direction: column; background:var(--bg-secondary,#f8fafc);">
          <div style="padding: 20px 32px; border-bottom: 1px solid var(--border-subtle, rgba(0,0,0,0.05)); display: flex; justify-content: space-between; align-items: center; background: var(--bg-primary, #fff);">
            <div style="display: flex; gap: 12px; align-items: center;">
              <span style="font-size: 11px; text-transform: uppercase; letter-spacing: 0.1em; color:var(--text-secondary,#64748b); font-weight: 700;">Visual Synthesis Lab</span>
            </div>
            <div style="display: flex; gap: 8px;">
               <ui-button size="xs" variant="ghost" label="Reset Lab" icon="rotate-ccw"></ui-button>
            </div>
          </div>

          <div style="flex: 1; display: flex; align-items: center; justify-content: center; padding: 60px; position: relative;">
            <div id="tgInteractiveContainer" style="transform: scale(1.1); transition: transform 0.3s cubic-bezier(0.4, 0, 0.2, 1);"></div>
          </div>

          <!-- Code Artifact -->
          <div style="padding: 32px; background: var(--bg-primary, #fff); border-top: 1px solid var(--border-subtle, rgba(0,0,0,0.05));">
             <ui-code-preview id="tgCodeDisplay" language="html"></ui-code-preview>
          </div>
        </div>
      </div>
    `;

    const ctrls = container.querySelectorAll('ui-dropdown, ui-checkbox, ui-input');
    ctrls.forEach(ctrl => {
      const eventName = ctrl.tagName === 'UI-DROPDOWN' ? 'valueChange' : ctrl.tagName === 'UI-CHECKBOX' ? 'checkboxChange' : 'inputChange';
      ctrl.addEventListener(eventName, () => updateInteractiveToggle());
    });

    updateInteractiveToggle();
  };

  const updateInteractiveToggle = () => {
    const color = document.getElementById('tgColor').value;
    const shape = document.getElementById('tgShape').value;
    const orientation = document.getElementById('tgOrientation').value;
    const variant = document.getElementById('tgVariant').value;
    const width = document.getElementById('tgWidth').value;
    const multi = document.getElementById('tgMulti').checked;
    const iconOnly = document.getElementById('tgIconOnly').checked;
    const fullWidth = document.getElementById('tgFullWidth').checked;
    const disabled = document.getElementById('tgDisabled').checked;
    const reveal = document.getElementById('tgReveal').value;
    const l1 = document.getElementById('tgLabel1').value;
    const l2 = document.getElementById('tgLabel2').value;

    const groupContainer = document.getElementById('tgInteractiveContainer');
    if (!groupContainer) return;

    const html = `
<ui-button-toggle-group 
  color="${color}" 
  shape="${shape}" 
  orientation="${orientation}"
  variant="${variant}"
  width="${width}"
  ${multi ? 'multi-select' : ''}
  ${iconOnly ? 'icon-only' : ''}
  ${fullWidth ? 'full-width' : ''}
  ${disabled ? 'disabled' : ''}
  ${reveal !== 'none' ? `reveal="${reveal}"` : ''}
  value="opt1"
  icon-library="lucide"
>
  <ui-button-toggle value="opt1" label="${l1}" icon="code-2"></ui-button-toggle>
  <ui-button-toggle value="opt2" label="${l2}" icon="ship"></ui-button-toggle>
  <ui-button-toggle value="opt3" label="Maintenance" icon="wrench"></ui-button-toggle>
</ui-button-toggle-group>`;

    groupContainer.innerHTML = html;

    const codeDisp = document.getElementById('tgCodeDisplay');
    if (codeDisp) {
      codeDisp.htmlCode = html.trim();
    }
  };

  const showToggleSearchLoad = () => {
    const container = section.querySelector('#buttonToggleContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="display: flex; flex-direction: column; gap: 40px;">

        <div class="demo-block">
          <h3 class="specimen-title">🔍 Searchable Multi-Select</h3>
          <p class="specimen-description">Enable <code>search-enabled</code> to let users filter options in real time. Works with both single and multi-select modes.</p>
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div>
              <p style="font-size: 11px; font-weight: 700; color: var(--text-secondary,#64748b); margin: 0 0 10px; text-transform: uppercase;">Single select with search</p>
              <ui-button-toggle-group
                search-enabled
                value="react"
                options='[{"label":"React","value":"react","icon":"logo-react"},{"label":"Vue","value":"vue","icon":"logo-vue"},{"label":"Angular","value":"angular","icon":"logo-angular"},{"label":"Svelte","value":"svelte","icon":"bandage"},{"label":"Solid","value":"solid","icon":"cube"},{"label":"Astro","value":"astro","icon":"planet"}]'
              ></ui-button-toggle-group>
            </div>
            <div>
              <p style="font-size: 11px; font-weight: 700; color: var(--text-secondary,#64748b); margin: 0 0 10px; text-transform: uppercase;">Multi-select with search</p>
              <ui-button-toggle-group
                search-enabled
                multi-select
                value='["react","vue"]'
                options='[{"label":"React","value":"react"},{"label":"Vue","value":"vue"},{"label":"Angular","value":"angular"},{"label":"Svelte","value":"svelte"},{"label":"Solid","value":"solid"},{"label":"Next.js","value":"next"},{"label":"Nuxt","value":"nuxt"},{"label":"Remix","value":"remix"}]'
              ></ui-button-toggle-group>
            </div>
          </div>
        </div>

        <div class="demo-block">
          <h3 class="specimen-title">⏳ Loading State</h3>
          <p class="specimen-description">Set <code>loading="true"</code> to show a loading skeleton while options are being fetched asynchronously.</p>
          <div style="display: flex; flex-direction: column; gap: 16px;">
            <div>
              <p style="font-size: 11px; font-weight: 700; color: var(--text-secondary,#64748b); margin: 0 0 10px; text-transform: uppercase;">Loading (skeleton)</p>
              <ui-button-toggle-group
                loading
                options='[{"label":"Option A","value":"a"},{"label":"Option B","value":"b"},{"label":"Option C","value":"c"}]'
              ></ui-button-toggle-group>
            </div>
            <div>
              <p style="font-size: 11px; font-weight: 700; color: var(--text-secondary,#64748b); margin: 0 0 10px; text-transform: uppercase;">Loaded (normal)</p>
              <ui-button-toggle-group
                value="b"
                options='[{"label":"Option A","value":"a"},{"label":"Option B","value":"b"},{"label":"Option C","value":"c"}]'
              ></ui-button-toggle-group>
            </div>
          </div>
        </div>

        <div class="demo-block">
          <h3 class="specimen-title">📤 Export / Import</h3>
          <p class="specimen-description">Multi-select groups can export selections as CSV/JSON and import them back.</p>
          <ui-button-toggle-group
            multi-select
            export-enabled
            import-enabled
            value='["mon","wed"]'
            options='[{"label":"Mon","value":"mon"},{"label":"Tue","value":"tue"},{"label":"Wed","value":"wed"},{"label":"Thu","value":"thu"},{"label":"Fri","value":"fri"},{"label":"Sat","value":"sat"},{"label":"Sun","value":"sun"}]'
          ></ui-button-toggle-group>
        </div>

      </div>
    `;
  };

  const demoMap = {
    playground: showTogglePlayground,
    comparison: showToggleComparison,
    gallery: showToggleGallery,
    horizontal: showToggleHorizontal,
    vertical: showToggleVertical,
    shapes: showToggleShapes,
    iconOnly: showToggleIconOnly,
    description: showToggleDescription,
    widthFit: showToggleWidthFit,
    multi: showToggleMulti,
    dropdown: showToggleDropdown,
    colors: showToggleColors,
    states: showToggleStates,
    gradients: showToggleGradients,
    premium: showTogglePremium,
    elite: showToggleElite,
    form: showToggleForm,
    searchLoad: showToggleSearchLoad,
  };

  const nav = section.querySelector('#toggleNavPills');
  if (nav) {
    nav.querySelectorAll('ui-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const demo = btn.getAttribute('data-demo');
        if (demoMap[demo]) {
          demoMap[demo]();
        }

        nav.querySelectorAll('ui-button').forEach(b => {
          const isMatch = b.getAttribute('data-demo') === demo;
          b.variant = isMatch ? 'solid' : 'outline';
          b.color = isMatch ? 'primary' : 'none';
        });
      });
    });
  }

  setTimeout(() => {
    showTogglePlayground();
    // Highlight playground button
    nav.querySelectorAll('ui-button').forEach(b => {
      const isMatch = b.getAttribute('data-demo') === 'playground';
      b.variant = isMatch ? 'solid' : 'outline';
      b.color = isMatch ? 'primary' : 'none';
    });
  }, 50);
}
