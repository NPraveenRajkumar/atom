import{t as e}from"./index-BVNhjBM1.js";import{a as t,c as n,i as r,n as i,o as a,t as o}from"./ComponentPlayground-CLu9mEKx.js";var s=e(),c=[{name:`type`,type:`select`,label:`Animation Type`,defaultValue:`spinner`,options:`spinner.dots.bar.pulse.ring.bounce.grid.wave.dual-ring.heartbeat.clock.raining-letters.ripple.infinite.wifi.rainbow.square-shuffle.dna-helix.atom-sphere.staircase.radar.liquid-drop.neon-path.neuro-pulse.vortex-ring.cube-fold.breathing.glitch-text.plc-module.m580-signal.circuit-board.callout-rotate.infinite-roller.image`.split(`.`),description:`The animation style to render`},{name:`size`,type:`select`,label:`Size`,defaultValue:`md`,options:[`3xs`,`xs`,`small`,`md`,`large`,`xl`,`3xl`,`jumbo`],description:`Size preset for the loader`},{name:`color`,type:`string`,label:`Color / Gradient`,defaultValue:`primary`,description:`Token (primary, success…), HEX (#ff0000), or CSS gradient`},{name:`variant`,type:`select`,label:`Variant`,defaultValue:`standard`,options:[`standard`,`glass`,`neon`,`minimal`,`linear-strip`],description:`Visual style variant of the loader container`},{name:`visible`,type:`boolean`,label:`Visible`,defaultValue:!0,description:`Show or hide the loader`},{name:`label`,type:`string`,label:`Label`,defaultValue:``,description:`Text shown below (or around) the animation`},{name:`description`,type:`string`,label:`Description`,defaultValue:``,description:`Optional sub-text beneath the label`},{name:`label-position`,type:`select`,label:`Label Position`,defaultValue:`bottom`,options:[`bottom`,`top`,`left`,`right`],description:`Where the label is rendered relative to the animation`},{name:`overlay`,type:`boolean`,label:`Overlay`,defaultValue:!1,description:`Renders a full-screen overlay behind the loader`},{name:`enable-blur`,type:`boolean`,label:`Enable Blur`,defaultValue:!1,description:`Applies a backdrop blur when overlay is active`},{name:`trap-focus`,type:`boolean`,label:`Trap Focus`,defaultValue:!1,description:`Traps keyboard focus inside the overlay (accessibility)`},{name:`value`,type:`number`,label:`Progress Value (0-100)`,defaultValue:0,description:`Determinate progress percentage (0 = indeterminate)`},{name:`thickness`,type:`number`,label:`Thickness (px)`,defaultValue:3,description:`Stroke/bar thickness in pixels`},{name:`width`,type:`string`,label:`Width`,defaultValue:``,description:`CSS width for bar/linear-strip types (e.g. 300px)`},{name:`predictive`,type:`boolean`,label:`Predictive Progress`,defaultValue:!1,description:`Auto-crawls progress towards 95% for bar/linear types`},{name:`aria-live`,type:`select`,label:`ARIA Live`,defaultValue:`polite`,options:[`polite`,`assertive`,`off`],description:`ARIA live region verbosity`},{name:`overlay-background`,type:`string`,label:`Overlay Background`,defaultValue:``,description:`Custom CSS color or gradient for the overlay backdrop`},{name:`image`,type:`string`,label:`Image URL`,defaultValue:`https://cdn-icons-png.flaticon.com/512/9333/9333991.png`,description:`Image URL when type="image"`},{name:`rain-text`,type:`string`,label:`Rain Text`,defaultValue:``,description:`Character pool for raining-letters type (default: A–Z 0–9)`},{name:`rain-columns`,type:`number`,label:`Rain Columns`,defaultValue:5,description:`Number of falling columns for raining-letters type`}],l=e=>{let t=[`type="${e.type}"`,`size="${e.size}"`,`color="${e.color}"`,`visible="${e.visible??!0}"`];return e.variant&&e.variant!==`standard`&&t.push(`variant="${e.variant}"`),e.label&&(t.push(`label="${e.label}"`),e[`label-position`]&&e[`label-position`]!==`bottom`&&t.push(`label-position="${e[`label-position`]}"`)),e.description&&t.push(`description="${e.description}"`),e.overlay&&t.push(`overlay="true"`),e[`enable-blur`]&&t.push(`enable-blur="true"`),e[`trap-focus`]&&t.push(`trap-focus="true"`),e.value&&t.push(`value="${e.value}"`),e.thickness&&e.thickness!==3&&t.push(`thickness="${e.thickness}"`),e.width&&t.push(`width="${e.width}"`),e.predictive&&t.push(`predictive="true"`),e[`aria-live`]&&e[`aria-live`]!==`polite`&&t.push(`aria-live="${e[`aria-live`]}"`),e[`overlay-background`]&&t.push(`overlay-background="${e[`overlay-background`]}"`),e.type===`image`&&e.image&&t.push(`image="${e.image}"`),e.type===`raining-letters`&&(e[`rain-text`]&&t.push(`rain-text="${e[`rain-text`]}"`),e[`rain-columns`]&&e[`rain-columns`]!==5&&t.push(`rain-columns="${e[`rain-columns`]}"`)),`<ui-loader\n  ${t.join(`
  `)}\n></ui-loader>`},u=e=>(0,s.jsx)(`div`,{style:{display:`flex`,alignItems:`center`,justifyContent:`center`,minHeight:`160px`},children:(0,s.jsx)(`ui-loader`,{type:e.type,size:e.size,color:e.color,visible:e.visible===!1?`false`:void 0,variant:e.variant===`standard`?void 0:e.variant,label:e.label||void 0,description:e.description||void 0,"label-position":e[`label-position`]===`bottom`?void 0:e[`label-position`],overlay:e.overlay?`true`:void 0,"enable-blur":e[`enable-blur`]?`true`:void 0,"trap-focus":e[`trap-focus`]?`true`:void 0,value:e.value?String(e.value):void 0,thickness:e.thickness===3?void 0:String(e.thickness),width:e.width||void 0,predictive:e.predictive?`true`:void 0,"aria-live":e[`aria-live`]===`polite`?void 0:e[`aria-live`],"overlay-background":e[`overlay-background`]||void 0,image:e.type===`image`&&e.image?e.image:void 0,"rain-text":e.type===`raining-letters`&&e[`rain-text`]?e[`rain-text`]:void 0,"rain-columns":e.type===`raining-letters`&&e[`rain-columns`]!==5?String(e[`rain-columns`]):void 0},JSON.stringify(e))}),d=[{title:`Overview`,content:`
      <p>The <code>ui-loader</code> component provides 34 high-fidelity loading animations for every use-case — from micro inline indicators to full-screen overlays. It supports determinate progress, predictive crawl behaviour, message rotation, and accessibility out-of-the-box.</p>

      <h3>Key Features</h3>
      <ul>
        <li><strong>34 animation types</strong> — spinner, dots, bar, heartbeat, DNA helix, neon-path, and more</li>
        <li><strong>8 size presets</strong> — from <code>3xs</code> (8px) to <code>jumbo</code> (full-screen)</li>
        <li><strong>Full color control</strong> — named tokens, HEX, and CSS gradients</li>
        <li><strong>Overlay mode</strong> — blocks interaction with optional backdrop blur</li>
        <li><strong>Predictive progress</strong> — auto-crawls the bar to 95% for unknown durations</li>
        <li><strong>Message rotation</strong> — set an array of messages via <code>.messages</code> property to keep users informed</li>
        <li><strong>Accessible</strong> — built-in ARIA live region support</li>
      </ul>

      <h3>Animation Types</h3>
      <p>Set the <code>type</code> attribute to any of the following values:</p>
      <ul>
        <li><code>spinner</code>, <code>dots</code>, <code>bar</code>, <code>pulse</code>, <code>ring</code>, <code>bounce</code>, <code>grid</code>, <code>wave</code></li>
        <li><code>dual-ring</code>, <code>heartbeat</code>, <code>clock</code>, <code>ripple</code>, <code>infinite</code>, <code>wifi</code>, <code>rainbow</code></li>
        <li><code>square-shuffle</code>, <code>dna-helix</code>, <code>atom-sphere</code>, <code>staircase</code>, <code>radar</code>, <code>liquid-drop</code></li>
        <li><code>neon-path</code>, <code>neuro-pulse</code>, <code>vortex-ring</code>, <code>cube-fold</code>, <code>breathing</code>, <code>glitch-text</code></li>
        <li><code>plc-module</code>, <code>m580-signal</code>, <code>circuit-board</code>, <code>callout-rotate</code>, <code>infinite-roller</code>, <code>raining-letters</code>, <code>image</code></li>
      </ul>

      <h3>Variant Styles</h3>
      <ul>
        <li><code>standard</code> — Default transparent background</li>
        <li><code>glass</code> — Frosted-glass card effect</li>
        <li><code>neon</code> — Glowing neon container</li>
        <li><code>minimal</code> — Animation only, no container</li>
        <li><code>linear-strip</code> — Thin top-bar progress (like YouTube/GitHub)</li>
      </ul>

      <h3>Overlay & Page Loading</h3>
      <p>Add <code>overlay="true"</code> to block the page. Combine with <code>enable-blur="true"</code> for a polished backdrop:</p>
      <pre><code>&lt;ui-loader type="spinner" overlay="true" enable-blur="true" label="Saving..."&gt;&lt;/ui-loader&gt;</code></pre>

      <h3>Message Rotation</h3>
      <p>Set the <code>.messages</code> property (JS array) and optional <code>.messageInterval</code> (ms) to cycle through status updates:</p>
      <pre><code>const loader = document.querySelector('ui-loader');
loader.messages = ['Connecting...', 'Verifying...', 'Almost there...'];
loader.messageInterval = 2500;</code></pre>

      <h3>Determinate Progress</h3>
      <p>Set the <code>value</code> attribute (0–100) to show a specific percentage. Works best with <code>type="bar"</code>:</p>
      <pre><code>&lt;ui-loader type="bar" value="72" label="Uploading files..."&gt;&lt;/ui-loader&gt;</code></pre>

      <h3>Accessibility</h3>
      <p>The component contains an ARIA live region by default. Control announcement verbosity with the <code>aria-live</code> attribute (<code>polite</code>, <code>assertive</code>, or <code>off</code>). Use <code>trap-focus="true"</code> with overlay loaders to prevent keyboard escape.</p>
    `},{title:`Props Reference`,content:`
      <table style="width:100%; border-collapse: collapse; font-size: 13px;">
        <thead>
          <tr style="border-bottom: 2px solid #e2e8f0;">
            <th style="text-align:left; padding: 8px 12px;">Prop</th>
            <th style="text-align:left; padding: 8px 12px;">Type</th>
            <th style="text-align:left; padding: 8px 12px;">Default</th>
            <th style="text-align:left; padding: 8px 12px;">Description</th>
          </tr>
        </thead>
        <tbody>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>type</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;"><code>spinner</code></td><td style="padding:8px 12px;">Animation style (34 options)</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>size</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;"><code>md</code></td><td style="padding:8px 12px;">Size preset: 3xs · xs · small · md · large · xl · 3xl · jumbo</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>color</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;"><code>primary</code></td><td style="padding:8px 12px;">Token, HEX, or CSS gradient</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>variant</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;"><code>standard</code></td><td style="padding:8px 12px;">standard · glass · neon · minimal · linear-strip</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>label</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;">—</td><td style="padding:8px 12px;">Primary text shown with the animation</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>description</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;">—</td><td style="padding:8px 12px;">Secondary sub-text beneath label</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>label-position</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;"><code>bottom</code></td><td style="padding:8px 12px;">top · bottom · left · right</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>overlay</code></td><td style="padding:8px 12px;">boolean</td><td style="padding:8px 12px;"><code>false</code></td><td style="padding:8px 12px;">Full-screen overlay backdrop</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>enable-blur</code></td><td style="padding:8px 12px;">boolean</td><td style="padding:8px 12px;"><code>false</code></td><td style="padding:8px 12px;">Backdrop blur when overlay is active</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>trap-focus</code></td><td style="padding:8px 12px;">boolean</td><td style="padding:8px 12px;"><code>false</code></td><td style="padding:8px 12px;">Traps keyboard focus inside overlay</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>value</code></td><td style="padding:8px 12px;">number</td><td style="padding:8px 12px;">—</td><td style="padding:8px 12px;">0–100 for determinate progress state</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>predictive</code></td><td style="padding:8px 12px;">boolean</td><td style="padding:8px 12px;"><code>false</code></td><td style="padding:8px 12px;">Auto-crawls bar to 95% for unknown durations</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>thickness</code></td><td style="padding:8px 12px;">number</td><td style="padding:8px 12px;"><code>3</code></td><td style="padding:8px 12px;">Stroke thickness in pixels</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>visible</code></td><td style="padding:8px 12px;">boolean</td><td style="padding:8px 12px;"><code>true</code></td><td style="padding:8px 12px;">Show or hide the loader</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>overlay-background</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;">—</td><td style="padding:8px 12px;">Custom CSS color/gradient for overlay backdrop</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>aria-live</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;"><code>polite</code></td><td style="padding:8px 12px;">ARIA live region: polite · assertive · off</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>rain-text</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;">A-Z 0-9</td><td style="padding:8px 12px;">Character pool for raining-letters type</td></tr>
          <tr style="border-bottom:1px solid #f1f5f9;"><td style="padding:8px 12px;"><code>rain-columns</code></td><td style="padding:8px 12px;">number</td><td style="padding:8px 12px;"><code>5</code></td><td style="padding:8px 12px;">Number of columns for raining-letters type</td></tr>
          <tr><td style="padding:8px 12px;"><code>image</code></td><td style="padding:8px 12px;">string</td><td style="padding:8px 12px;">—</td><td style="padding:8px 12px;">Image URL when type="image"</td></tr>
        </tbody>
      </table>
    `}],f=[{title:`Common Types`,description:`The most frequently used animation types side by side`,code:`<ui-loader type="spinner" color="primary" size="xl"></ui-loader>
<ui-loader type="dots"    color="success" size="xl"></ui-loader>
<ui-loader type="bar"     color="warning" size="xl"></ui-loader>
<ui-loader type="pulse"   color="danger"  size="xl"></ui-loader>
<ui-loader type="ring"    color="info"    size="xl"></ui-loader>
<ui-loader type="bounce"  color="primary" size="xl"></ui-loader>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:`2.5rem`,flexWrap:`wrap`,justifyContent:`center`,alignItems:`center`,padding:`2rem`},children:[`spinner`,`dots`,`bar`,`pulse`,`ring`,`bounce`].map((e,t)=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.75rem`},children:[(0,s.jsx)(`ui-loader`,{type:e,color:[`primary`,`success`,`warning`,`danger`,`info`,`primary`][t],size:`xl`}),(0,s.jsx)(`code`,{style:{fontSize:`11px`,color:`#64748b`},children:e})]},e))})},{title:`All Size Presets`,description:`From 3xs micro-indicators to jumbo full-screen loaders`,code:`<ui-loader type="spinner" size="3xs" color="primary"></ui-loader>
<ui-loader type="spinner" size="xs"  color="primary"></ui-loader>
<ui-loader type="spinner" size="small" color="primary"></ui-loader>
<ui-loader type="spinner" size="md"  color="primary"></ui-loader>
<ui-loader type="spinner" size="large" color="primary"></ui-loader>
<ui-loader type="spinner" size="xl"  color="primary"></ui-loader>
<ui-loader type="spinner" size="3xl" color="primary"></ui-loader>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:`2rem`,flexWrap:`wrap`,alignItems:`center`,justifyContent:`center`,padding:`1.5rem`},children:[`3xs`,`xs`,`small`,`md`,`large`,`xl`,`3xl`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,s.jsx)(`ui-loader`,{type:`spinner`,size:e,color:`primary`}),(0,s.jsx)(`code`,{style:{fontSize:`10px`,color:`#64748b`,fontWeight:700},children:e.toUpperCase()})]},e))})},{title:`Color Variants`,description:`All named color tokens — HEX and gradients also accepted`,code:`<ui-loader type="spinner" size="xl" color="primary"></ui-loader>
<ui-loader type="spinner" size="xl" color="success"></ui-loader>
<ui-loader type="spinner" size="xl" color="warning"></ui-loader>
<ui-loader type="spinner" size="xl" color="danger"></ui-loader>
<ui-loader type="spinner" size="xl" color="info"></ui-loader>
<ui-loader type="dots"    size="xl" color="#ff00ff"></ui-loader>
<ui-loader type="dots"    size="xl" color="linear-gradient(90deg,#4facfe,#00f2fe)"></ui-loader>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:`2rem`,flexWrap:`wrap`,justifyContent:`center`,alignItems:`center`,padding:`1.5rem`},children:[{type:`spinner`,color:`primary`,label:`primary`},{type:`spinner`,color:`success`,label:`success`},{type:`spinner`,color:`warning`,label:`warning`},{type:`spinner`,color:`danger`,label:`danger`},{type:`spinner`,color:`info`,label:`info`},{type:`dots`,color:`#ff00ff`,label:`#ff00ff`},{type:`dots`,color:`linear-gradient(90deg,#4facfe,#00f2fe)`,label:`gradient`}].map(({type:e,color:t,label:n})=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,s.jsx)(`ui-loader`,{type:e,size:`xl`,color:t}),(0,s.jsx)(`code`,{style:{fontSize:`10px`,color:`#64748b`},children:n})]},n))})},{title:`With Label & Description`,description:`Labels can be positioned on any side of the animation`,code:`<ui-loader type="spinner" color="primary" size="xl"
  label="Loading dashboard"
  description="Fetching your data...">
</ui-loader>

<ui-loader type="dots" color="success" size="xl"
  label="Saving changes"
  label-position="right">
</ui-loader>`,render:()=>(0,s.jsxs)(`div`,{style:{display:`flex`,gap:`3rem`,flexWrap:`wrap`,justifyContent:`center`,alignItems:`center`,padding:`2rem`},children:[(0,s.jsx)(`ui-loader`,{type:`spinner`,color:`primary`,size:`xl`,label:`Loading dashboard`,description:`Fetching your data...`}),(0,s.jsx)(`ui-loader`,{type:`dots`,color:`success`,size:`xl`,label:`Saving changes`,"label-position":`right`}),(0,s.jsx)(`ui-loader`,{type:`pulse`,color:`warning`,size:`xl`,label:`Please wait`,"label-position":`top`})]})},{title:`Variant Styles`,description:`glass, neon, and minimal visual container variants`,code:`<ui-loader type="spinner" size="xl" color="primary" variant="glass"   label="Glass"></ui-loader>
<ui-loader type="spinner" size="xl" color="primary" variant="neon"    label="Neon"></ui-loader>
<ui-loader type="spinner" size="xl" color="primary" variant="minimal" label="Minimal"></ui-loader>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:`3rem`,flexWrap:`wrap`,justifyContent:`center`,alignItems:`center`,padding:`2rem`,background:`#0f172a`,borderRadius:`12px`},children:[`glass`,`neon`,`minimal`].map(e=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,s.jsx)(`ui-loader`,{type:`spinner`,size:`xl`,color:`primary`,variant:e}),(0,s.jsx)(`code`,{style:{fontSize:`11px`,color:`#94a3b8`},children:e})]},e))})},{title:`Predictive Progress Bar`,description:`Auto-crawls to 95% — ideal when you cannot know the exact duration`,code:`<ui-loader
  type="bar"
  predictive="true"
  label="Uploading files..."
  thickness="6"
  color="#10b981"
  style="width: 300px;"
></ui-loader>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,justifyContent:`center`,padding:`2rem`},children:(0,s.jsx)(`ui-loader`,{type:`bar`,predictive:`true`,label:`Uploading files...`,thickness:`6`,color:`#10b981`,style:{width:`300px`}})})},{title:`Linear Strip (Top-bar)`,description:`YouTube/GitHub-style page navigation indicator`,code:`<div style="position: relative; height: 80px; border: 1px dashed #cbd5e1; border-radius: 8px;">
  <ui-loader variant="linear-strip" status="loading" predictive="true"
    style="position: absolute; top: 0; left: 0; width: 100%;">
  </ui-loader>
</div>`,render:()=>(0,s.jsxs)(`div`,{style:{position:`relative`,height:`80px`,border:`1px dashed #cbd5e1`,borderRadius:`8px`,display:`flex`,alignItems:`center`,justifyContent:`center`,overflow:`hidden`,width:`100%`},children:[(0,s.jsx)(`span`,{style:{fontSize:`12px`,color:`#94a3b8`},children:`Page content area`}),(0,s.jsx)(`ui-loader`,{variant:`linear-strip`,status:`loading`,predictive:`true`,style:{position:`absolute`,top:0,left:0,width:`100%`}})]})},{title:`Industrial / Specialized Types`,description:`PLC module, M580 signal, circuit board — for industrial dashboards`,code:`<ui-loader type="plc-module"    size="xl" color="primary"></ui-loader>
<ui-loader type="m580-signal"   size="xl" color="success"></ui-loader>
<ui-loader type="circuit-board" size="xl" color="info"></ui-loader>
<ui-loader type="dna-helix"     size="xl" color="warning"></ui-loader>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:`2.5rem`,flexWrap:`wrap`,justifyContent:`center`,alignItems:`center`,padding:`2rem`,background:`#0f172a`,borderRadius:`12px`},children:[{type:`plc-module`,color:`primary`},{type:`m580-signal`,color:`success`},{type:`circuit-board`,color:`info`},{type:`dna-helix`,color:`warning`}].map(({type:e,color:t})=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,s.jsx)(`ui-loader`,{type:e,size:`xl`,color:t}),(0,s.jsx)(`code`,{style:{fontSize:`10px`,color:`#94a3b8`},children:e})]},e))})},{title:`Raining Letters`,description:`Matrix-style animation — customise the character pool and column count`,code:`<ui-loader type="raining-letters" size="xl" color="primary"></ui-loader>
<ui-loader type="raining-letters" size="xl" color="#10b981" rain-text="01"></ui-loader>
<ui-loader type="raining-letters" size="xl" color="#8b5cf6" rain-text="★♦♣♠♥" rain-columns="5"></ui-loader>`,render:()=>(0,s.jsx)(`div`,{style:{display:`flex`,gap:`2rem`,flexWrap:`wrap`,justifyContent:`center`,alignItems:`center`,padding:`2rem`,background:`#0f172a`,borderRadius:`12px`},children:[{color:`primary`,rainText:void 0,label:`Default (A–Z 0–9)`},{color:`#10b981`,rainText:`01`,label:`Binary Matrix`},{color:`#8b5cf6`,rainText:`★♦♣♠♥`,label:`Symbols`}].map(({color:e,rainText:t,label:n})=>(0,s.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.75rem`},children:[(0,s.jsx)(`ui-loader`,{type:`raining-letters`,size:`xl`,color:e,"rain-text":t}),(0,s.jsx)(`code`,{style:{fontSize:`10px`,color:`#94a3b8`},children:n})]},n))})}];function p(){return(0,s.jsx)(o,{componentName:`Loader`,tagName:`ui-loader`,description:`34 high-fidelity loading animations — from inline spinners to full-screen overlays with message rotation and predictive progress.`,props:c,renderPreview:u,buildCode:l,docs:d,examples:f,demoSections:i(`loader`),events:r(`ui-loader`),methods:t(`ui-loader`),slots:n(`ui-loader`),parts:a(`ui-loader`)})}export{p as default};