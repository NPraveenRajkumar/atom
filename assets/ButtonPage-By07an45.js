import{t as e}from"./index-BVNhjBM1.js";import{a as t,c as n,i as r,o as i,s as a,t as o}from"./ComponentPlayground-CLu9mEKx.js";var s=e(),c=[{name:`label`,type:`string`,label:`Label`,defaultValue:`Click Me`,description:`Button label text`},{name:`subtitle`,type:`string`,label:`Subtitle`,defaultValue:``,description:`Secondary text below/above the label`},{name:`description-position`,type:`select`,label:`Subtitle Position`,defaultValue:`below`,options:[`above`,`below`,`left`,`right`],description:`Position of the subtitle text`},{name:`variant`,type:`select`,label:`Variant`,defaultValue:`primary`,options:[`primary`,`secondary`,`outline`,`ghost`,`danger`,`success`,`warning`,`link`,`none`],description:`Visual style of the button`},{name:`color`,type:`select`,label:`Color Override`,defaultValue:`none`,options:[`none`,`primary`,`success`,`warning`,`danger`,`info`],description:`Color override on top of variant`},{name:`size`,type:`select`,label:`Size`,defaultValue:`md`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`],description:`Button size`},{name:`shape`,type:`select`,label:`Shape`,defaultValue:`rounded`,options:[`rounded`,`pill`,`circle`,`square`],description:`Corner shape style`},{name:`align`,type:`select`,label:`Align`,defaultValue:`center`,options:[`start`,`center`,`end`],description:`Content alignment within the button`},{name:`justify`,type:`select`,label:`Justify`,defaultValue:`center`,options:[`start`,`center`,`end`,`between`,`around`],description:`Content justification`},{name:`icon`,type:`string`,label:`Icon`,defaultValue:``,description:`Lucide icon name`},{name:`icon-position`,type:`select`,label:`Icon Position`,defaultValue:`left`,options:[`left`,`right`,`top`,`bottom`],description:`Icon position relative to the label`},{name:`icon-only`,type:`boolean`,label:`Icon Only`,defaultValue:!1,description:`Show only the icon (no label)`},{name:`disabled`,type:`boolean`,label:`Disabled`,defaultValue:!1,description:`Disables the button`},{name:`loading`,type:`boolean`,label:`Loading`,defaultValue:!1,description:`Shows a loading spinner`},{name:`loading-position`,type:`select`,label:`Loading Position`,defaultValue:`left`,options:[`left`,`right`,`center`,`icon`],description:`Where the loading spinner appears`},{name:`selected`,type:`boolean`,label:`Selected`,defaultValue:!1,description:`Selected state (toggle groups)`},{name:`full-width`,type:`boolean`,label:`Full Width`,defaultValue:!1,description:`Expands button to 100% width`},{name:`grow`,type:`boolean`,label:`Grow`,defaultValue:!1,description:`Grows to fill available flex space`},{name:`width`,type:`string`,label:`Width`,defaultValue:``,description:`Custom width (e.g. 200px, 100%)`},{name:`badge`,type:`string`,label:`Badge`,defaultValue:``,description:`Badge value (text or number)`},{name:`badge-color`,type:`select`,label:`Badge Color`,defaultValue:`danger`,options:[`danger`,`primary`,`success`,`warning`,`info`],description:`Badge accent color`},{name:`badge-position`,type:`select`,label:`Badge Position`,defaultValue:`top-right`,options:[`top-right`,`top-left`,`bottom-right`,`bottom-left`,`inline-left`,`inline-right`],description:`Badge placement`},{name:`href`,type:`string`,label:`Link URL`,defaultValue:``,description:`Renders the button as an anchor <a> tag`},{name:`no-ripple`,type:`boolean`,label:`No Ripple`,defaultValue:!1,description:`Disables the ripple click effect`},{name:`elevation`,type:`number`,label:`Elevation (0-5)`,defaultValue:0,description:`Shadow elevation level`},{name:`reveal`,type:`select`,label:`Reveal Animation`,defaultValue:`none`,options:[`none`,`fade-in`,`slide-up`,`zoom`],description:`Entrance animation`},{name:`progress`,type:`number`,label:`Progress Fill %`,defaultValue:0,description:`Fills button background to this percentage`},{name:`copy-value`,type:`string`,label:`Copy Value`,defaultValue:``,description:`Text to copy to clipboard on click`},{name:`rtl`,type:`boolean`,label:`RTL`,defaultValue:!1,description:`Right-to-left layout`}],l=e=>{let t=[`variant="${e.variant}"`,`size="${e.size}"`];return e.color!==`none`&&t.push(`color="${e.color}"`),e.shape!==`rounded`&&t.push(`shape="${e.shape}"`),e.align!==`center`&&t.push(`align="${e.align}"`),e.justify!==`center`&&t.push(`justify="${e.justify}"`),e.icon&&t.push(`icon="${e.icon}"`),e[`icon-position`]!==`left`&&t.push(`icon-position="${e[`icon-position`]}"`),e[`icon-only`]&&t.push(`icon-only`),e.disabled&&t.push(`disabled`),e.loading&&t.push(`loading`),e[`loading-position`]!==`left`&&t.push(`loading-position="${e[`loading-position`]}"`),e.selected&&t.push(`selected`),e[`full-width`]&&t.push(`full-width`),e.grow&&t.push(`grow`),e.width&&t.push(`width="${e.width}"`),e.badge&&t.push(`badge="${e.badge}"`),e.badge&&e[`badge-color`]!==`danger`&&t.push(`badge-color="${e[`badge-color`]}"`),e.badge&&e[`badge-position`]!==`top-right`&&t.push(`badge-position="${e[`badge-position`]}"`),e.href&&t.push(`href="${e.href}"`),e[`no-ripple`]&&t.push(`no-ripple`),e.elevation&&t.push(`elevation="${e.elevation}"`),e.reveal!==`none`&&t.push(`reveal="${e.reveal}"`),e.progress&&t.push(`progress="${e.progress}"`),e[`copy-value`]&&t.push(`copy-value="${e[`copy-value`]}"`),e.rtl&&t.push(`rtl`),e.subtitle&&t.push(`subtitle="${e.subtitle}"`),e[`description-position`]!==`below`&&t.push(`description-position="${e[`description-position`]}"`),`<ui-button ${t.join(`
  `)}>\n  ${e.label}\n</ui-button>`},u=e=>(0,s.jsx)(`ui-button`,{variant:e.variant,size:e.size,color:e.color===`none`?void 0:e.color,shape:e.shape,align:e.align,justify:e.justify,icon:e.icon||void 0,"icon-position":e[`icon-position`],"icon-only":e[`icon-only`]||void 0,disabled:e.disabled||void 0,loading:e.loading||void 0,"loading-position":e[`loading-position`],selected:e.selected||void 0,"full-width":e[`full-width`]||void 0,grow:e.grow||void 0,width:e.width||void 0,badge:e.badge||void 0,"badge-color":e[`badge-color`],"badge-position":e[`badge-position`],href:e.href||void 0,"no-ripple":e[`no-ripple`]||void 0,elevation:e.elevation||void 0,reveal:e.reveal===`none`?void 0:e.reveal,progress:e.progress||void 0,"copy-value":e[`copy-value`]||void 0,rtl:e.rtl||void 0,subtitle:e.subtitle||void 0,"description-position":e[`description-position`],children:e.label},JSON.stringify(e)),d=[{title:`Overview`,content:`
      <p>The <code>ui-button</code> component is the foundational interactive element of Ather UI. It supports multiple visual variants, sizes, states, icon slots, badge overlays, link rendering, and animations.</p>
      <h3>Rendering as a Link</h3>
      <p>When the <code>href</code> prop is set, the button renders as an <code>&lt;a&gt;</code> tag with <code>role="button"</code>. Use <code>target</code> and <code>rel</code> props for link behavior.</p>
      <h3>Form Integration</h3>
      <p>The component is <code>formAssociated</code>. Set <code>type="submit"</code> or <code>type="reset"</code> to integrate with native HTML forms.</p>
      <h3>Copy to Clipboard</h3>
      <p>Set <code>copy-value</code> to any string — the button will copy it on click and display a ✓ confirmation briefly.</p>
      <h3>Events</h3>
      <ul>
        <li><code>buttonClick</code> — Fired on click (not fired when disabled/loading)</li>
      </ul>
    `},{title:`Shape Options`,content:`
      <p>The <code>shape</code> prop controls corner rounding:</p>
      <ul>
        <li><code>rounded</code> — Default soft rounded corners</li>
        <li><code>pill</code> — Fully rounded ends (capsule shape)</li>
        <li><code>circle</code> — Perfect circle (best with icon-only)</li>
        <li><code>square</code> — No border radius</li>
      </ul>
    `}],f=[{title:`All Variants`,description:`All available button variants side by side`,code:`<ui-button variant="primary">Primary</ui-button>
<ui-button variant="secondary">Secondary</ui-button>
<ui-button variant="outline">Outline</ui-button>
<ui-button variant="ghost">Ghost</ui-button>
<ui-button variant="danger">Danger</ui-button>
<ui-button variant="success">Success</ui-button>
<ui-button variant="warning">Warning</ui-button>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:`0.75rem`,flexWrap:`wrap`,justifyContent:`center`},children:[`primary`,`secondary`,`outline`,`ghost`,`danger`,`success`,`warning`].map(e=>(0,s.jsx)(`ui-button`,{variant:e,children:e.charAt(0).toUpperCase()+e.slice(1)},e))})},{title:`Sizes`,description:`All button sizes from xs to xxl`,code:`<ui-button size="xs">XS</ui-button>
<ui-button size="sm">SM</ui-button>
<ui-button size="md">MD</ui-button>
<ui-button size="lg">LG</ui-button>
<ui-button size="xl">XL</ui-button>
<ui-button size="xxl">XXL</ui-button>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,gap:`0.75rem`,flexWrap:`wrap`,justifyContent:`center`},children:[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`].map(e=>(0,s.jsx)(`ui-button`,{size:e,children:e.toUpperCase()},e))})},{title:`Icon Positions`,description:`Icons in all four positions relative to the label`,code:`<ui-button icon="arrow-left" icon-position="left">Left</ui-button>
<ui-button icon="arrow-right" icon-position="right">Right</ui-button>
<ui-button icon="arrow-up" icon-position="top">Top</ui-button>
<ui-button icon="arrow-down" icon-position="bottom">Bottom</ui-button>`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,justifyContent:`center`,alignItems:`center`},children:[(0,s.jsx)(`ui-button`,{icon:`arrow-left`,"icon-position":`left`,children:`Left`}),(0,s.jsx)(`ui-button`,{icon:`arrow-right`,"icon-position":`right`,children:`Right`}),(0,s.jsx)(`ui-button`,{icon:`arrow-up`,"icon-position":`top`,variant:`outline`,children:`Top`}),(0,s.jsx)(`ui-button`,{icon:`arrow-down`,"icon-position":`bottom`,variant:`outline`,children:`Bottom`})]})},{title:`Icon Only — Shapes`,description:`Icon-only buttons in different shapes`,code:`<ui-button icon="heart" icon-only shape="circle"></ui-button>
<ui-button icon="star" icon-only shape="rounded"></ui-button>
<ui-button icon="bookmark" icon-only shape="square" variant="outline"></ui-button>
<ui-button icon="share-2" icon-only shape="pill" variant="ghost"></ui-button>`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,justifyContent:`center`,alignItems:`center`},children:[(0,s.jsx)(`ui-button`,{icon:`heart`,"icon-only":!0,shape:`circle`}),(0,s.jsx)(`ui-button`,{icon:`star`,"icon-only":!0,shape:`rounded`}),(0,s.jsx)(`ui-button`,{icon:`bookmark`,"icon-only":!0,shape:`square`,variant:`outline`}),(0,s.jsx)(`ui-button`,{icon:`share-2`,"icon-only":!0,shape:`pill`,variant:`ghost`})]})},{title:`Badge Overlays`,description:`Buttons with notification badges`,code:`<ui-button icon="bell" icon-only badge="5" badge-position="top-right"></ui-button>
<ui-button icon="mail" icon-only badge="12" badge-color="primary" badge-position="top-right"></ui-button>
<ui-button variant="outline" badge="New" badge-color="success" badge-position="inline-right">Updates</ui-button>`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,justifyContent:`center`,alignItems:`center`},children:[(0,s.jsx)(`ui-button`,{icon:`bell`,"icon-only":!0,badge:`5`,"badge-position":`top-right`}),(0,s.jsx)(`ui-button`,{icon:`mail`,"icon-only":!0,badge:`12`,"badge-color":`primary`,"badge-position":`top-right`}),(0,s.jsx)(`ui-button`,{variant:`outline`,badge:`New`,"badge-color":`success`,"badge-position":`inline-right`,children:`Updates`})]})},{title:`States`,description:`Loading, disabled, and selected states`,code:`<ui-button loading>Saving...</ui-button>
<ui-button loading loading-position="right" variant="outline">Processing</ui-button>
<ui-button disabled>Disabled</ui-button>
<ui-button selected variant="outline" icon="check">Selected</ui-button>`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`1rem`,flexWrap:`wrap`,justifyContent:`center`},children:[(0,s.jsx)(`ui-button`,{loading:!0,children:`Saving...`}),(0,s.jsx)(`ui-button`,{loading:!0,"loading-position":`right`,variant:`outline`,children:`Processing`}),(0,s.jsx)(`ui-button`,{disabled:!0,children:`Disabled`}),(0,s.jsx)(`ui-button`,{selected:!0,variant:`outline`,icon:`check`,children:`Selected`})]})},{title:`Progress Fill`,description:`Button with a background progress fill bar`,code:`<ui-button progress="75" variant="outline" style="width:200px">Uploading 75%</ui-button>`,render:()=>(0,s.jsx)(`ui-button`,{progress:`75`,variant:`outline`,style:{width:`200px`},children:`Uploading 75%`})},{title:`Copy to Clipboard`,description:`Click to copy a value to the clipboard`,code:`<ui-button icon="copy" copy-value="npm install atomicuilibrary">Copy Install Command</ui-button>`,render:()=>(0,s.jsx)(`ui-button`,{icon:`copy`,"copy-value":`npm install atomicuilibrary`,children:`Copy Install Command`})}],p=[{title:`Variants`,description:`All visual variants including gradient families`,html:`
      <div class="demo-block">
        <h3>Standard Variants</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin:16px 0;">
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
        <h4>🌈 Gradient Variants</h4>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:8px;">
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
        <h3>Link & Width Configuration</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
          <ui-button label="Real Anchor Link" href="https://example.com" target="_blank" variant="outline" icon="link" icon-library="lucide"></ui-button>
          <ui-button label="No Ripple" no-ripple variant="secondary"></ui-button>
        </div>
        <div style="display:flex;flex-direction:column;gap:12px;">
          <ui-button label="Full Width Button" full-width variant="primary"></ui-button>
          <div style="display:flex;gap:12px;flex-wrap:wrap;">
            <ui-button label="Width: 200px" width="200px" variant="outline"></ui-button>
            <ui-button label="Width: 50%" width="50%" variant="info"></ui-button>
            <ui-button label="Min-Width: 150px" min-width="150px" variant="secondary"></ui-button>
          </div>
        </div>
      </div>
    `},{title:`Sizes & Shapes`,description:`All sizes with label-only, icon+label, badge, and icon-only combinations`,html:`
      <div class="demo-block">
        <h3>Sizes &amp; Height Consistency</h3>
        <div style="display:flex;flex-direction:column;gap:20px;">
          ${[`xs`,`sm`,`md`,`lg`,`xl`,`xxl`].map(e=>`
            <div style="display:flex;align-items:center;gap:16px;flex-wrap:wrap;">
              <span style="min-width:80px;font-size:13px;font-weight:600;opacity:0.6;">${e}:</span>
              <ui-button size="${e}" variant="primary" label="Simple"></ui-button>
              <ui-button size="${e}" variant="primary" icon="zap" icon-library="lucide" label="With Icon"></ui-button>
              <ui-button size="${e}" variant="primary" icon="bell" icon-library="lucide" label="Badge" badge="8"></ui-button>
              <ui-button size="${e}" variant="primary" icon="zap" icon-library="lucide" icon-only shape="circle"></ui-button>
            </div>
          `).join(``)}
        </div>
      </div>
      <div class="demo-block">
        <h3>Shapes</h3>
        <div class="demo-grid-wrapper">
          <ui-button variant="secondary" shape="square" label="Square"></ui-button>
          <ui-button variant="secondary" shape="rounded" label="Rounded"></ui-button>
          <ui-button variant="secondary" shape="pill" label="Pill Shape"></ui-button>
          <ui-button variant="primary" shape="circle" icon="plus" icon-library="lucide"></ui-button>
        </div>
      </div>
    `},{title:`Icons & Layouts`,description:`Icon positions, icon-only shapes, libraries, and badge placements`,html:`
      <div class="demo-block">
        <h3>Icon Positions</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <ui-button label="Left Icon" icon="arrow-left" icon-library="lucide" icon-position="left" variant="outline"></ui-button>
          <ui-button label="Right Icon" icon="arrow-right" icon-library="lucide" icon-position="right" variant="outline"></ui-button>
          <ui-button label="Top Icon" icon="arrow-up" icon-library="lucide" icon-position="top" variant="outline"></ui-button>
          <ui-button label="Bottom Icon" icon="arrow-down" icon-library="lucide" icon-position="bottom" variant="outline"></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Icon Only — Shape Masterclass</h3>
        <div style="display:flex;gap:20px;align-items:center;flex-wrap:wrap;">
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <ui-button icon="settings" icon-library="lucide" icon-only variant="primary" size="lg" shape="circle"></ui-button>
            <span style="font-size:11px;opacity:0.5;">CIRCLE</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <ui-button icon="bell" icon-library="lucide" icon-only variant="success" size="lg"></ui-button>
            <span style="font-size:11px;opacity:0.5;">DEFAULT (ROUNDED)</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <ui-button icon="share-2" icon-library="lucide" icon-only variant="warning" size="lg" shape="square"></ui-button>
            <span style="font-size:11px;opacity:0.5;">SQUARE</span>
          </div>
          <div style="display:flex;flex-direction:column;align-items:center;gap:8px;">
            <ui-button icon="mail" icon-library="lucide" icon-only variant="danger" size="lg" pill></ui-button>
            <span style="font-size:11px;opacity:0.5;">PILL</span>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <h3>Badge Masterclass</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fill,minmax(280px,1fr));gap:24px;">
          <div style="display:flex;flex-direction:column;gap:12px;">
            <h4>Shapes &amp; Corners</h4>
            <div style="display:flex;gap:20px;flex-wrap:wrap;">
              <ui-button icon="bell" icon-library="lucide" icon-only badge="9+" variant="primary"></ui-button>
              <ui-button icon="mail" icon-library="lucide" icon-only badge="3" variant="success" shape="circle"></ui-button>
              <ui-button icon="message-square" icon-library="lucide" icon-only badge="New" variant="info" pill></ui-button>
            </div>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <h4>Positions (TR, TL, BR, BL)</h4>
            <div style="display:flex;gap:20px;flex-wrap:wrap;">
              <ui-button icon="bell" icon-library="lucide" icon-only badge="TR" badge-position="top-right" variant="secondary"></ui-button>
              <ui-button icon="bell" icon-library="lucide" icon-only badge="TL" badge-position="top-left" variant="secondary"></ui-button>
              <ui-button icon="bell" icon-library="lucide" icon-only badge="BR" badge-position="bottom-right" variant="secondary"></ui-button>
              <ui-button icon="bell" icon-library="lucide" icon-only badge="BL" badge-position="bottom-left" variant="secondary"></ui-button>
            </div>
          </div>
        </div>
      </div>
    `},{title:`Avatar Buttons`,description:`Buttons with circular profile images and status indicators`,html:`
      <div class="demo-block">
        <h3>User Profile Buttons</h3>
        <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
          <ui-button label="Praveen" avatar-src="https://i.pravatar.cc/100?u=praveen" avatar-status="online" variant="outline" shape="pill"></ui-button>
          <ui-button label="Sarah Chen" avatar-src="https://i.pravatar.cc/100?u=sarah" avatar-status="busy" variant="outline" shape="rounded"></ui-button>
          <ui-button label="System Admin" avatar-src="https://i.pravatar.cc/100?u=admin" avatar-status="offline" variant="dark" shape="pill"></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Avatar Only (Quick Select)</h3>
        <div style="display:flex;gap:16px;flex-wrap:wrap;align-items:center;">
          <ui-button avatar-src="https://i.pravatar.cc/100?u=1" avatar-status="online" variant="ghost"></ui-button>
          <ui-button avatar-src="https://i.pravatar.cc/100?u=2" avatar-status="away" variant="ghost"></ui-button>
          <ui-button avatar-src="https://i.pravatar.cc/100?u=3" avatar-status="busy" variant="ghost"></ui-button>
          <ui-button avatar-src="https://i.pravatar.cc/100?u=4" avatar-status="online" variant="ghost"></ui-button>
          <ui-button variant="outline" shape="circle" icon="plus" icon-library="lucide"></ui-button>
        </div>
      </div>
    `},{title:`States`,description:`Loading, disabled, selected, and inline counter states`,html:`
      <div class="demo-block">
        <h3>Loading States</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <ui-button label="Loading Left" loading loading-position="left" variant="primary"></ui-button>
          <ui-button label="Loading Right" loading loading-position="right" variant="success"></ui-button>
          <ui-button label="Outline Loading" loading variant="outline" shape="pill"></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Disabled States</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <ui-button label="Primary" disabled variant="primary"></ui-button>
          <ui-button label="Success" disabled variant="success"></ui-button>
          <ui-button label="Danger" disabled variant="danger"></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Selected / Active</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <ui-button label="Selected" selected variant="outline" icon="check" icon-library="lucide"></ui-button>
          <ui-button label="Not Selected" variant="outline"></ui-button>
          <ui-button label="Selected Primary" selected variant="primary"></ui-button>
        </div>
      </div>
    `},{title:`Rich Layouts — Subtitle & Description`,description:`Buttons with subtitle/description placed in 4 positions`,html:`
      <div class="demo-block">
        <h3>Rich Typography &amp; Metadata</h3>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">
          <div class="demo-card-inner">
            <h4>POSITION: BELOW (DEFAULT)</h4>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <ui-button label="Network Status" description="Connected to Enterprise-WiFi" icon="wifi" icon-library="lucide" variant="outline" full-width></ui-button>
              <ui-button label="Save Changes" subtitle="Updating 12 parameters..." icon="save" icon-library="lucide" variant="success" full-width></ui-button>
            </div>
          </div>
          <div class="demo-card-inner">
            <h4>POSITION: ABOVE</h4>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <ui-button description="SYSTEM CRITICAL" label="Shutdown Server" description-position="above" icon="power" icon-library="lucide" variant="danger" full-width></ui-button>
              <ui-button description="BETA FEATURE" label="Explore Labs" description-position="above" variant="outline" color="primary" full-width></ui-button>
            </div>
          </div>
          <div class="demo-card-inner">
            <h4>POSITION: LEFT</h4>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <ui-button description="5.2GB" label="Download Data" description-position="left" icon="download" icon-library="lucide" variant="outline" full-width></ui-button>
              <ui-button description="v2.4.0" label="Deploy Model" description-position="left" icon="zap" icon-library="lucide" variant="outline" color="success" full-width></ui-button>
            </div>
          </div>
          <div class="demo-card-inner">
            <h4>POSITION: RIGHT</h4>
            <div style="display:flex;flex-direction:column;gap:12px;">
              <ui-button description="Locked" label="Admin Panel" description-position="right" icon="lock" icon-library="lucide" variant="outline" color="warning" full-width></ui-button>
              <ui-button description="2 min ago" label="Last Updated" description-position="right" icon="clock" icon-library="lucide" variant="ghost" full-width></ui-button>
            </div>
          </div>
        </div>
      </div>
    `},{title:`Gradient Buttons`,description:`All 8 gradient variants — solid, with icons, pill, and icon-only`,html:`
      <div class="demo-block">
        <h3>🌈 Solid Gradients</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
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
      <div class="demo-block">
        <h3>With Icons &amp; Pill Shape</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;margin-bottom:16px;">
          <ui-button variant="gradient" label="Dashboard" icon="layout-dashboard" icon-library="lucide"></ui-button>
          <ui-button variant="gradient-blue" label="Analytics" icon="bar-chart-2" icon-library="lucide"></ui-button>
          <ui-button variant="gradient-purple" label="Premium" icon="star" icon-library="lucide"></ui-button>
          <ui-button variant="gradient-candy" label="Like" icon="heart" icon-library="lucide"></ui-button>
          <ui-button variant="gradient-gold" label="Award" icon="award" icon-library="lucide"></ui-button>
        </div>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <ui-button variant="gradient" label="Green Pill" pill></ui-button>
          <ui-button variant="gradient-blue" label="Blue Pill" pill></ui-button>
          <ui-button variant="gradient-purple" label="Purple Pill" pill></ui-button>
          <ui-button variant="gradient-sunset" label="Sunset Pill" pill></ui-button>
        </div>
      </div>
      <div class="demo-block">
        <h3>Icon Only Gradients</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <ui-button variant="gradient" icon="zap" icon-library="lucide" icon-only pill></ui-button>
          <ui-button variant="gradient-blue" icon="star" icon-library="lucide" icon-only pill></ui-button>
          <ui-button variant="gradient-purple" icon="heart" icon-library="lucide" icon-only pill></ui-button>
          <ui-button variant="gradient-orange" icon="flame" icon-library="lucide" icon-only pill></ui-button>
          <ui-button variant="gradient-ocean" icon="waves" icon-library="lucide" icon-only pill></ui-button>
          <ui-button variant="gradient-candy" icon="candy" icon-library="lucide" icon-only pill></ui-button>
          <ui-button variant="gradient-gold" icon="award" icon-library="lucide" icon-only pill></ui-button>
        </div>
      </div>
    `},{title:`Selection Groups`,description:`Button toggle groups with rich multi-select, avatar, and staggered reveal`,html:`
      <div class="demo-block">
        <h3>Avatar Status Select</h3>
        <ui-button-toggle-group value="online" color="info">
          <ui-button value="online" label="Online" avatar-src="https://i.pravatar.cc/150?u=1" avatar-status="online" icon="user-check" icon-library="lucide"></ui-button>
          <ui-button value="away" label="Away" avatar-src="https://i.pravatar.cc/150?u=2" avatar-status="away" icon="clock" icon-library="lucide"></ui-button>
          <ui-button value="busy" label="Do Not Disturb" avatar-src="https://i.pravatar.cc/150?u=3" avatar-status="busy" icon="minus-circle" icon-library="lucide"></ui-button>
        </ui-button-toggle-group>
      </div>
      <div class="demo-block">
        <h3>Rich Multi-Select (Vertical)</h3>
        <ui-button-toggle-group multi-select value='["opt1"]' orientation="vertical" color="primary" style="max-width:450px;">
          <ui-button value="opt1" label="Standard License" description="Personal projects only" description-position="right" variant="outline"></ui-button>
          <ui-button value="opt2" label="Commercial Pro" description="Corporate &amp; Production use" description-position="right" variant="outline"></ui-button>
          <ui-button value="opt3" label="Enterprise Elite" description="Unlimited scale &amp; 24/7 support" description-position="right" variant="outline"></ui-button>
        </ui-button-toggle-group>
      </div>
      <div class="demo-block">
        <h3>Connected Segmented Control</h3>
        <ui-button-group fill connected gap="0">
          <ui-button variant="outline" label="Daily"></ui-button>
          <ui-button variant="primary" label="Weekly"></ui-button>
          <ui-button variant="outline" label="Monthly"></ui-button>
        </ui-button-group>
      </div>
    `}];function m(){let e=a(`ui-button`);return(0,s.jsx)(o,{componentName:`Button`,tagName:`ui-button`,description:`The foundational interactive element. Supports pristine, compile-time props and high-fidelity live demos directly from the Stencil package.`,props:e.length>0?e.map(e=>{let t=c.find(t=>t.name===e.name);return t?{...e,defaultValue:t.defaultValue===void 0?e.defaultValue:t.defaultValue,options:t.options||e.options,type:t.type||e.type}:e}):c,renderPreview:u,buildCode:l,docs:d,examples:f,demoSections:p,events:r(`ui-button`),methods:t(`ui-button`),slots:n(`ui-button`),parts:i(`ui-button`)})}export{m as default};