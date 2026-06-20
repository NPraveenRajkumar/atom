import{t as e}from"./index-CwBDMu0x.js";import{a as t,c as n,i as r,o as i,t as a}from"./ComponentPlayground-BphCj7hb.js";var o=e(),s=[{name:`name`,type:`string`,label:`Name`,defaultValue:`Jane Doe`,description:`Generates initials from this name`},{name:`content`,type:`string`,label:`Content (text)`,defaultValue:``,description:`Override auto-initials with custom text`},{name:`src`,type:`string`,label:`Image URL`,defaultValue:``,description:`URL to the avatar image`},{name:`alt`,type:`string`,label:`Alt Text`,defaultValue:``,description:`Accessible alt for the image`},{name:`size`,type:`select`,label:`Size`,defaultValue:`md`,options:[`xs`,`sm`,`md`,`lg`,`xl`,`40`,`80`,`120`],description:`Size (named or custom number in px)`},{name:`shape`,type:`select`,label:`Shape`,defaultValue:`circle`,options:[`circle`,`square`,`rounded`,`hexagon`,`squircle`],description:`Avatar shape`},{name:`variant`,type:`select`,label:`Variant`,defaultValue:`default`,options:[`default`,`outlined`,`ghost`,`glass`],description:`Style variant`},{name:`fit`,type:`select`,label:`Image Fit`,defaultValue:`cover`,options:[`cover`,`contain`,`fill`,`none`],description:`CSS object-fit for the image`},{name:`bg-color`,type:`color`,label:`BG Color`,defaultValue:`#52c41a`,description:`Background color when no image`},{name:`color`,type:`color`,label:`Text Color`,defaultValue:`#ffffff`,description:`Text/icon color`},{name:`auto-color`,type:`boolean`,label:`Auto Color`,defaultValue:!1,description:`Auto-generate background from the name`},{name:`gradient`,type:`boolean`,label:`Gradient BG`,defaultValue:!1,description:`Use a gradient background`},{name:`gradient-colors`,type:`string`,label:`Gradient Colors`,defaultValue:``,description:`Comma-separated hex colors (e.g. #667eea,#764ba2)`},{name:`status`,type:`select`,label:`Status`,defaultValue:``,options:[``,`online`,`offline`,`away`,`busy`,`dnd`],description:`Presence status`},{name:`show-status`,type:`boolean`,label:`Show Status`,defaultValue:!1,description:`Displays the status indicator dot`},{name:`status-position`,type:`select`,label:`Status Position`,defaultValue:`bottom-right`,options:[`top-right`,`top-left`,`bottom-right`,`bottom-left`],description:`Status dot position`},{name:`status-pulse`,type:`boolean`,label:`Status Pulse`,defaultValue:!1,description:`Pulsing animation on the status dot`},{name:`badge`,type:`string`,label:`Badge`,defaultValue:``,description:`Badge overlay content`},{name:`badge-position`,type:`select`,label:`Badge Position`,defaultValue:`top-right`,options:[`top-right`,`top-left`,`bottom-right`,`bottom-left`],description:`Badge position`},{name:`badge-color`,type:`color`,label:`Badge Color`,defaultValue:`#ff4d4f`,description:`Badge background color`},{name:`verified`,type:`boolean`,label:`Verified`,defaultValue:!1,description:`Shows a verified checkmark badge`},{name:`clickable`,type:`boolean`,label:`Clickable`,defaultValue:!1,description:`Makes the avatar interactive`},{name:`href`,type:`string`,label:`Link URL`,defaultValue:``,description:`Renders avatar as an anchor link`},{name:`tooltip-text`,type:`string`,label:`Tooltip`,defaultValue:``,description:`Hover tooltip text`},{name:`animation`,type:`select`,label:`Animation`,defaultValue:`none`,options:[`none`,`pulse`,`bounce`,`ring`,`glow`],description:`Visual animation effect`},{name:`ring-color`,type:`color`,label:`Ring Color`,defaultValue:`#3bf673`,description:`Color for ring/glow animation`},{name:`glass`,type:`boolean`,label:`Glass Effect`,defaultValue:!1,description:`Glassmorphism overlay`},{name:`reflection`,type:`boolean`,label:`Reflection`,defaultValue:!1,description:`Premium light reflection overlay`},{name:`three-d`,type:`boolean`,label:`3D Hover Effect`,defaultValue:!1,description:`Perspective 3D tilt on hover`},{name:`story`,type:`boolean`,label:`Story Ring`,defaultValue:!1,description:`Instagram-style story ring`},{name:`story-seen`,type:`boolean`,label:`Story Seen`,defaultValue:!1,description:`Gray ring for seen stories`},{name:`loading`,type:`boolean`,label:`Loading`,defaultValue:!1,description:`Loading spinner overlay`},{name:`skeleton`,type:`boolean`,label:`Skeleton`,defaultValue:!1,description:`Shimmer skeleton loading state`}],c=e=>{let t=[`name="${e.name}"`];return e.src&&t.push(`src="${e.src}"`),e.content&&t.push(`content="${e.content}"`),e.size!==`md`&&t.push(`size="${e.size}"`),e.shape!==`circle`&&t.push(`shape="${e.shape}"`),e.variant!==`default`&&t.push(`variant="${e.variant}"`),e[`bg-color`]!==`#52c41a`&&t.push(`bg-color="${e[`bg-color`]}"`),e[`auto-color`]&&t.push(`auto-color`),e.gradient&&t.push(`gradient`),e[`gradient-colors`]&&t.push(`gradient-colors="${e[`gradient-colors`]}"`),e.status&&t.push(`status="${e.status}"`),e[`show-status`]&&t.push(`show-status`),e[`status-pulse`]&&t.push(`status-pulse`),e.badge&&t.push(`badge="${e.badge}"`),e.verified&&t.push(`verified`),e.animation!==`none`&&t.push(`animation="${e.animation}"`),e.glass&&t.push(`glass`),e.reflection&&t.push(`reflection`),e[`three-d`]&&t.push(`three-d`),e.story&&t.push(`story`),e[`story-seen`]&&t.push(`story-seen`),e.loading&&t.push(`loading`),e.skeleton&&t.push(`skeleton`),`<ui-avatar\n  ${t.join(`
  `)}\n></ui-avatar>`},l=e=>(0,o.jsx)(`ui-avatar`,{name:e.name,src:e.src||void 0,content:e.content||void 0,size:e.size,shape:e.shape,variant:e.variant,fit:e.fit,"bg-color":e[`bg-color`],color:e.color,"auto-color":e[`auto-color`]||void 0,gradient:e.gradient||void 0,"gradient-colors":e[`gradient-colors`]||void 0,status:e.status||void 0,"show-status":e[`show-status`]||void 0,"status-position":e[`status-position`],"status-pulse":e[`status-pulse`]||void 0,badge:e.badge||void 0,"badge-position":e[`badge-position`],"badge-color":e[`badge-color`],verified:e.verified||void 0,clickable:e.clickable||void 0,href:e.href||void 0,"tooltip-text":e[`tooltip-text`]||void 0,animation:e.animation===`none`?void 0:e.animation,"ring-color":e[`ring-color`],glass:e.glass||void 0,reflection:e.reflection||void 0,"three-d":e[`three-d`]||void 0,story:e.story||void 0,"story-seen":e[`story-seen`]||void 0,loading:e.loading||void 0,skeleton:e.skeleton||void 0},JSON.stringify(e)),u=[{title:`Overview`,content:`
      <p>The <code>ui-avatar</code> component is a full-featured user avatar with 33 props. It supports images, initials, icons, status indicators, story rings, group mode, and many premium visual effects.</p>
      <h3>Fallback Hierarchy</h3>
      <ul>
        <li>Image (<code>src</code>) is shown first</li>
        <li>If the image fails to load, initials are generated from <code>name</code></li>
        <li>Custom <code>content</code> overrides auto-initials</li>
        <li>If nothing matches, a fallback icon is shown</li>
      </ul>
      <h3>Group Mode</h3>
      <p>Set <code>group</code> to true and pass an array to <code>avatars</code> to render a stacked avatar group with overflow count and popover.</p>
      <h3>Events</h3>
      <ul>
        <li><code>avatarClick</code> — Emitted when clicked (requires <code>clickable</code>)</li>
        <li><code>avatarUpload</code> — Emitted when file is uploaded (requires <code>editable</code>)</li>
        <li><code>avatarError</code> — Emitted when image fails to load</li>
      </ul>
    `}],d=[{title:`Status Indicators`,description:`Avatars with presence indicators`,code:`<ui-avatar name="Alice Chen" status="online" show-status size="lg"></ui-avatar>
<ui-avatar name="Bob Smith" status="away" show-status size="lg"></ui-avatar>
<ui-avatar name="Carol J" status="busy" show-status size="lg"></ui-avatar>
<ui-avatar name="Dave W" status="offline" show-status size="lg"></ui-avatar>`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`1.5rem`,justifyContent:`center`},children:[[`Alice Chen`,`online`],[`Bob Smith`,`away`],[`Carol J`,`busy`],[`Dave W`,`offline`]].map(([e,t])=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,o.jsx)(`ui-avatar`,{name:e,status:t,"show-status":!0,size:`lg`}),(0,o.jsx)(`span`,{style:{fontSize:`0.7rem`,color:`rgba(255,255,255,0.4)`},children:t})]},e))})},{title:`All Shapes`,description:`Circle, square, rounded, hexagon, squircle`,code:`<ui-avatar name="Alex" size="xl" shape="circle"></ui-avatar>
<ui-avatar name="Alex" size="xl" shape="rounded"></ui-avatar>
<ui-avatar name="Alex" size="xl" shape="square"></ui-avatar>
<ui-avatar name="Alex" size="xl" shape="hexagon"></ui-avatar>
<ui-avatar name="Alex" size="xl" shape="squircle"></ui-avatar>`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`1.5rem`,justifyContent:`center`,alignItems:`center`},children:[`circle`,`rounded`,`square`,`hexagon`,`squircle`].map(e=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,o.jsx)(`ui-avatar`,{name:`Alex`,size:`xl`,shape:e}),(0,o.jsx)(`span`,{style:{fontSize:`0.7rem`,color:`rgba(255,255,255,0.4)`},children:e})]},e))})},{title:`Premium Effects`,description:`Glass, reflection, 3D, and gradient`,code:`<ui-avatar name="Ana" size="xl" glass gradient gradient-colors="#667eea,#764ba2"></ui-avatar>
<ui-avatar name="Ben" size="xl" reflection gradient gradient-colors="#f093fb,#f5576c"></ui-avatar>
<ui-avatar name="Cat" size="xl" three-d animation="ring"></ui-avatar>`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`2rem`,justifyContent:`center`},children:[(0,o.jsx)(`ui-avatar`,{name:`Ana`,size:`xl`,glass:!0,gradient:!0,"gradient-colors":`#667eea,#764ba2`}),(0,o.jsx)(`ui-avatar`,{name:`Ben`,size:`xl`,reflection:!0,gradient:!0,"gradient-colors":`#f093fb,#f5576c`}),(0,o.jsx)(`ui-avatar`,{name:`Cat`,size:`xl`,"three-d":!0,animation:`ring`})]})},{title:`Story Ring`,description:`Instagram-style story rings`,code:`<ui-avatar name="Lily" size="xl" story></ui-avatar>
<ui-avatar name="Mark" size="xl" story story-seen></ui-avatar>`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`2rem`,justifyContent:`center`},children:[(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,o.jsx)(`ui-avatar`,{name:`Lily`,size:`xl`,story:!0}),(0,o.jsx)(`span`,{style:{fontSize:`0.7rem`,color:`rgba(255,255,255,0.4)`},children:`Unseen`})]}),(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,alignItems:`center`,gap:`0.5rem`},children:[(0,o.jsx)(`ui-avatar`,{name:`Mark`,size:`xl`,story:!0,"story-seen":!0}),(0,o.jsx)(`span`,{style:{fontSize:`0.7rem`,color:`rgba(255,255,255,0.4)`},children:`Seen`})]})]})},{title:`Auto Color from Name`,description:`Automatically generates a distinct color for each name`,code:`<ui-avatar name="Alice Brown" auto-color size="lg"></ui-avatar>
<ui-avatar name="Charlie Davis" auto-color size="lg"></ui-avatar>
<ui-avatar name="Eve Martinez" auto-color size="lg"></ui-avatar>`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`1.5rem`,justifyContent:`center`},children:[`Alice Brown`,`Charlie Davis`,`Eve Martinez`,`Frank White`,`Grace Lee`].map(e=>(0,o.jsx)(`ui-avatar`,{name:e,"auto-color":!0,size:`lg`},e))})},{title:`Verified + Badge`,description:`Avatar with verified tick and notification badge`,code:`<ui-avatar name="Kate Admin" size="xl" verified badge="3" show-status status="online"></ui-avatar>`,render:()=>(0,o.jsx)(`ui-avatar`,{name:`Kate Admin`,size:`xl`,verified:!0,badge:`3`,"show-status":!0,status:`online`})}],f=[{title:`Visual Styles`,description:`Shapes, sizes, image sources, and system states`,html:`
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:32px;">
        <div class="demo-card">
          <h4>Geometric Shapes</h4>
          <div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=1" shape="circle" size="l"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">CIRCLE</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=2" shape="squircle" size="l"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">SQUIRCLE</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=3" shape="hexagon" size="l"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">HEXAGON</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=4" shape="square" size="l"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">SQUARE</p></div>
          </div>
        </div>
        <div class="demo-card">
          <h4>Sizing Scale</h4>
          <div style="display:flex;gap:16px;align-items:flex-end;flex-wrap:wrap;">
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=5" size="xs"></ui-avatar><p style="font-size:9px;">XS</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=5" size="s"></ui-avatar><p style="font-size:9px;">S</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=5" size="m"></ui-avatar><p style="font-size:9px;">M</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=5" size="l"></ui-avatar><p style="font-size:9px;">L</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=5" size="xl"></ui-avatar><p style="font-size:9px;">XL</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=5" size="120"></ui-avatar><p style="font-size:9px;">120px</p></div>
          </div>
        </div>
        <div class="demo-card">
          <h4>Source Types</h4>
          <div style="display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div style="display:flex;align-items:center;gap:10px;"><ui-avatar src="https://i.pravatar.cc/150?img=6" size="m"></ui-avatar><div><strong style="font-size:12px;">Image</strong><p style="font-size:10px;margin:0;opacity:0.5;">Remote URL</p></div></div>
            <div style="display:flex;align-items:center;gap:10px;"><ui-avatar name="Steve Rogers" size="m" auto-color="true"></ui-avatar><div><strong style="font-size:12px;">Initials</strong><p style="font-size:10px;margin:0;opacity:0.5;">Auto-Generated</p></div></div>
            <div style="display:flex;align-items:center;gap:10px;"><ui-avatar icon="bell" icon-library="lucide" bg-color="#10b981" size="m"></ui-avatar><div><strong style="font-size:12px;">Icon</strong><p style="font-size:10px;margin:0;opacity:0.5;">Lucide Library</p></div></div>
            <div style="display:flex;align-items:center;gap:10px;"><ui-avatar loading="true" size="m"></ui-avatar><div><strong style="font-size:12px;">Loading</strong><p style="font-size:10px;margin:0;opacity:0.5;">Spinner state</p></div></div>
          </div>
        </div>
      </div>
    `},{title:`Presence &amp; Status`,description:`Online/away/busy status indicators with pulse and position control`,html:`
      <div class="demo-card">
        <h4>Semantic Presence Indicators</h4>
        <div style="display:flex;gap:24px;align-items:center;flex-wrap:wrap;">
          <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=11" size="l" show-status="true" status="online" tooltip-text="Online"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">ONLINE</p></div>
          <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=12" size="l" show-status="true" status="away" tooltip-text="Away"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">AWAY</p></div>
          <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=13" size="l" show-status="true" status="busy" tooltip-text="Busy"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">BUSY</p></div>
          <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=14" size="l" show-status="true" status="dnd"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">DND</p></div>
          <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=15" size="l" show-status="true" status="offline"></ui-avatar><p style="font-size:10px;margin-top:6px;opacity:0.5;">OFFLINE</p></div>
        </div>
      </div>
      <div class="demo-card" style="margin-top:24px;">
        <h4>Positioning Logic (TR / TL / BL / BR)</h4>
        <div style="display:flex;gap:24px;">
          <ui-avatar src="https://i.pravatar.cc/150?img=20" size="l" show-status="true" status="online" status-position="top-right"></ui-avatar>
          <ui-avatar src="https://i.pravatar.cc/150?img=20" size="l" show-status="true" status="online" status-position="top-left"></ui-avatar>
          <ui-avatar src="https://i.pravatar.cc/150?img=20" size="l" show-status="true" status="online" status-position="bottom-left"></ui-avatar>
          <ui-avatar src="https://i.pravatar.cc/150?img=20" size="l" show-status="true" status="online" status-position="bottom-right"></ui-avatar>
        </div>
      </div>
    `},{title:`Social &amp; Premium Effects`,description:`Story rings, verified badges, glass, reflection, 3D, and gradients`,html:`
      <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(360px,1fr));gap:32px;">
        <div class="demo-card">
          <h4>Instagram Story Rings</h4>
          <div style="display:flex;gap:32px;align-items:center;flex-wrap:wrap;">
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=21" size="xl" story="true"></ui-avatar><p style="font-size:10px;margin-top:8px;opacity:0.5;">NEW STORY</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=22" size="xl" story="true" story-seen="true"></ui-avatar><p style="font-size:10px;margin-top:8px;opacity:0.5;">SEEN</p></div>
          </div>
        </div>
        <div class="demo-card">
          <h4>Premium Effects Suite</h4>
          <div style="display:flex;gap:24px;flex-wrap:wrap;align-items:center;">
            <div style="display:flex;align-items:center;gap:10px;"><ui-avatar src="https://i.pravatar.cc/150?img=24" size="m" verified="true"></ui-avatar><span style="font-size:11px;opacity:0.7;">VERIFIED</span></div>
            <div style="display:flex;align-items:center;gap:10px;"><ui-avatar src="https://i.pravatar.cc/150?img=25" size="m" reflection="true"></ui-avatar><span style="font-size:11px;opacity:0.7;">REFLECTION</span></div>
            <div style="display:flex;align-items:center;gap:10px;"><ui-avatar src="https://i.pravatar.cc/150?img=26" size="m" glass="true"></ui-avatar><span style="font-size:11px;opacity:0.7;">GLASS</span></div>
            <div style="display:flex;align-items:center;gap:10px;"><ui-avatar src="https://i.pravatar.cc/150?img=27" size="m" three-d="true"></ui-avatar><span style="font-size:11px;opacity:0.7;">3D HOVER</span></div>
          </div>
        </div>
        <div class="demo-card" style="background:#0f172a;border:none;">
          <h4 style="color:rgba(255,255,255,0.9);">Dark Theme Animations</h4>
          <div style="display:flex;gap:32px;align-items:center;">
            <ui-avatar gradient="true" gradient-colors="#f43f5e,#fb923c" shape="squircle" size="xl" content="★"></ui-avatar>
            <ui-avatar animation="glow" ring-color="#10b981" src="https://i.pravatar.cc/150?img=30" size="xl"></ui-avatar>
            <ui-avatar animation="ring" ring-color="#ec4899" src="https://i.pravatar.cc/150?img=31" size="xl"></ui-avatar>
          </div>
        </div>
      </div>
    `},{title:`Avatar Groups`,description:`Managed stacking with overflow count and responsive grid`,html:`
      <div class="demo-card">
        <h4>Managed Stacking (Hover to shift)</h4>
        <p style="opacity:0.5;font-size:13px;margin-bottom:16px;">Excess avatars collapse into a +N overflow counter.</p>
        <ui-avatar group="true" size="xl" max-visible="4" animated="true">
          <ui-avatar name="Alice Miller" src="https://i.pravatar.cc/150?img=31"></ui-avatar>
          <ui-avatar name="Bob Smith" src="https://i.pravatar.cc/150?img=32" status="online" show-status="true"></ui-avatar>
          <ui-avatar name="Charlie Brown" src="https://i.pravatar.cc/150?img=33"></ui-avatar>
          <ui-avatar name="David Grey" src="https://i.pravatar.cc/150?img=34"></ui-avatar>
          <ui-avatar name="Eve Wilson" src="https://i.pravatar.cc/150?img=35"></ui-avatar>
          <ui-avatar name="Frank Castle" src="https://i.pravatar.cc/150?img=36"></ui-avatar>
        </ui-avatar>
      </div>
      <div class="demo-card" style="margin-top:24px;">
        <h4>Squircle Bordered Group</h4>
        <ui-avatar group="true" size="l" shape="squircle" group-border-color="#10b981" group-border-width="3">
          <ui-avatar name="User A"></ui-avatar>
          <ui-avatar name="User B" auto-color="true"></ui-avatar>
          <ui-avatar name="User C"></ui-avatar>
          <ui-avatar name="User D" auto-color="true"></ui-avatar>
          <ui-avatar name="User E"></ui-avatar>
        </ui-avatar>
      </div>
    `}];function p(){return(0,o.jsx)(a,{componentName:`Avatar`,tagName:`ui-avatar`,description:`A full-featured user avatar with 33 props: images, initials, status indicators, badges, story rings, animations, glass/3D effects, and group mode.`,props:s,renderPreview:l,buildCode:c,docs:u,examples:d,demoSections:f,events:r(`ui-avatar`),methods:t(`ui-avatar`),slots:n(`ui-avatar`),parts:i(`ui-avatar`)})}export{p as default};