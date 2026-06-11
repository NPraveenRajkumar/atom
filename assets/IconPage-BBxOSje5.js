import{t as e}from"./index-BVNhjBM1.js";import{a as t,c as n,i as r,o as i,t as a}from"./ComponentPlayground-CLu9mEKx.js";var o=e(),s=[{name:`name`,type:`string`,label:`Icon Name`,defaultValue:`star`,description:`Lucide icon name`},{name:`size`,type:`number`,label:`Size (px)`,defaultValue:24,description:`Icon size in pixels`},{name:`color`,type:`color`,label:`Color`,defaultValue:`#34d399`,description:`Icon color`},{name:`library`,type:`select`,label:`Library`,defaultValue:`lucide`,options:[`lucide`,`fontawesome`,`bootstrap`,`remixicon`,`google`,`emoji`],description:`Icon library to use`},{name:`spin`,type:`boolean`,label:`Spin`,defaultValue:!1,description:`Animates the icon in a spinning loop`},{name:`label`,type:`string`,label:`ARIA Label`,defaultValue:``,description:`Accessible label (adds role="img")`}],c=e=>{let t=[`name="${e.name}"`,`size="${e.size}"`,`color="${e.color}"`];return e.library!==`lucide`&&t.push(`library="${e.library}"`),e.spin&&t.push(`spin`),e.label&&t.push(`label="${e.label}"`),`<ui-icon ${t.join(` `)}></ui-icon>`},l=e=>(0,o.jsx)(`ui-icon`,{name:e.name,size:String(e.size),color:e.color,library:e.library,spin:e.spin||void 0,label:e.label||void 0},JSON.stringify(e)),u=[{title:`Overview`,content:`
      <p>The <code>ui-icon</code> component is a universal icon renderer supporting multiple popular icon libraries out of the box.</p>
      <h3>Supported Libraries</h3>
      <ul>
        <li><code>lucide</code> — Lucide Icons (default, 1000+ icons)</li>
        <li><code>fontawesome</code> — Font Awesome 6 (2000+ icons)</li>
        <li><code>bootstrap</code> — Bootstrap Icons</li>
        <li><code>remixicon</code> — Remix Icons</li>
        <li><code>google</code> — Google Material Symbols</li>
        <li><code>emoji</code> — Renders any emoji character</li>
      </ul>
      <h3>Auto-Detection</h3>
      <p>When <code>library</code> is not set (or set to <code>default</code>), the component auto-detects the library based on the icon name prefix (e.g., <code>bi-</code> → Bootstrap, <code>ri-</code> → Remix).</p>
    `}],d=[{title:`Icon Gallery`,description:`Lucide icons at various sizes`,code:`<ui-icon name="house" size="32"></ui-icon>
<ui-icon name="settings" size="32"></ui-icon>
<ui-icon name="user" size="32"></ui-icon>
<ui-icon name="bell" size="32"></ui-icon>
<ui-icon name="heart" size="32"></ui-icon>
<ui-icon name="star" size="32"></ui-icon>`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`1.5rem`,flexWrap:`wrap`,justifyContent:`center`},children:[`house`,`settings`,`user`,`bell`,`heart`,`star`,`search`,`mail`,`calendar`,`chart-bar`].map(e=>(0,o.jsx)(`ui-icon`,{name:e,size:`32`},e))})},{title:`Colored Icons`,description:`Using the color prop for accent colors`,code:`<ui-icon name="check-circle" size="40" color="#34d399"></ui-icon>
<ui-icon name="alert-circle" size="40" color="#fbbf24"></ui-icon>
<ui-icon name="x-circle" size="40" color="#f87171"></ui-icon>
<ui-icon name="info" size="40" color="#60a5fa"></ui-icon>`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`1.5rem`,justifyContent:`center`},children:[(0,o.jsx)(`ui-icon`,{name:`check-circle`,size:`40`,color:`#34d399`}),(0,o.jsx)(`ui-icon`,{name:`alert-circle`,size:`40`,color:`#fbbf24`}),(0,o.jsx)(`ui-icon`,{name:`x-circle`,size:`40`,color:`#f87171`}),(0,o.jsx)(`ui-icon`,{name:`info`,size:`40`,color:`#60a5fa`})]})},{title:`Spinning Icons`,description:`Loading spinner using the spin prop`,code:`<ui-icon name="loader" size="32" spin color="#34d399"></ui-icon>
<ui-icon name="refresh-cw" size="32" spin color="#60a5fa"></ui-icon>`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,gap:`2rem`,justifyContent:`center`},children:[(0,o.jsx)(`ui-icon`,{name:`loader`,size:`32`,spin:!0,color:`#34d399`}),(0,o.jsx)(`ui-icon`,{name:`refresh-cw`,size:`32`,spin:!0,color:`#60a5fa`})]})},{title:`Emoji Icons`,description:`Use emoji as icons with the emoji library`,code:`<ui-icon name="🚀" library="emoji" size="40"></ui-icon>
<ui-icon name="🎨" library="emoji" size="40"></ui-icon>
<ui-icon name="⚡" library="emoji" size="40"></ui-icon>`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`1.5rem`,justifyContent:`center`},children:[`🚀`,`🎨`,`⚡`,`🎯`,`💎`,`🔥`].map(e=>(0,o.jsx)(`ui-icon`,{name:e,library:`emoji`,size:`40`},e))})}];function f(){return(0,o.jsx)(a,{componentName:`Icon`,tagName:`ui-icon`,description:`Universal icon renderer supporting Lucide, Font Awesome, Bootstrap, Remix, Google Material, and emoji libraries.`,props:s,renderPreview:l,buildCode:c,docs:u,examples:d,events:r(`ui-icon`),methods:t(`ui-icon`),slots:n(`ui-icon`),parts:i(`ui-icon`)})}export{f as default};