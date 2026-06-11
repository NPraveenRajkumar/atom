import{t as e}from"./index-BVNhjBM1.js";import{a as t,c as n,i as r,o as i,t as a}from"./ComponentPlayground-CLu9mEKx.js";var o=e(),s=[{name:`checked`,type:`boolean`,label:`Checked`,defaultValue:!1,description:`Whether the checkbox is checked`},{name:`indeterminate`,type:`boolean`,label:`Indeterminate`,defaultValue:!1,description:`Mixed state (e.g. for "select all")`},{name:`disabled`,type:`boolean`,label:`Disabled`,defaultValue:!1,description:`Prevents interaction`},{name:`readonly`,type:`boolean`,label:`Read Only`,defaultValue:!1,description:`Visible but not editable`},{name:`required`,type:`boolean`,label:`Required`,defaultValue:!1,description:`Shows a required indicator (*)`},{name:`invalid`,type:`boolean`,label:`Invalid`,defaultValue:!1,description:`Shows error state + errorMessage`},{name:`label`,type:`string`,label:`Label`,defaultValue:`Accept Terms`,description:`Checkbox label text`},{name:`description`,type:`string`,label:`Description`,defaultValue:``,description:`Secondary description text below the label`},{name:`description-position`,type:`select`,label:`Description Position`,defaultValue:`below`,options:[`below`,`above`,`left`,`right`],description:`Where the description appears`},{name:`helper-text`,type:`string`,label:`Helper Text`,defaultValue:``,description:`Helper text below the checkbox`},{name:`error-message`,type:`string`,label:`Error Message`,defaultValue:`This field is required`,description:`Error shown when invalid=true`},{name:`tooltip`,type:`string`,label:`Tooltip`,defaultValue:``,description:`Tooltip text on hover`},{name:`size`,type:`select`,label:`Size`,defaultValue:`md`,options:[`xs`,`sm`,`md`,`lg`,`xl`],description:`Checkbox size`},{name:`color`,type:`select`,label:`Color`,defaultValue:`primary`,options:[`primary`,`success`,`warning`,`danger`,`info`],description:`Accent color when checked`},{name:`variant`,type:`select`,label:`Variant`,defaultValue:`default`,options:[`default`,`filled`,`outlined`,`minimal`],description:`Visual variant`},{name:`label-position`,type:`select`,label:`Label Position`,defaultValue:`right`,options:[`left`,`right`,`top`,`bottom`],description:`Label placement relative to checkbox`},{name:`custom-check-icon`,type:`string`,label:`Custom Check Icon`,defaultValue:``,description:`Lucide icon name to use instead of the default checkmark`},{name:`custom-indeterminate-icon`,type:`string`,label:`Custom Indeterminate Icon`,defaultValue:``,description:`Lucide icon for the indeterminate state`},{name:`enable-animation`,type:`boolean`,label:`Enable Animation`,defaultValue:!0,description:`Enables check animation`},{name:`ripple-effect`,type:`boolean`,label:`Ripple Effect`,defaultValue:!0,description:`Ripple on click`},{name:`glow`,type:`boolean`,label:`Glow Effect`,defaultValue:!1,description:`Glowing ring when checked`},{name:`confetti`,type:`boolean`,label:`Confetti`,defaultValue:!1,description:`Triggers confetti particles on check`},{name:`reveal`,type:`select`,label:`Reveal Animation`,defaultValue:`none`,options:[`none`,`fade-in`,`slide-up`,`zoom`],description:`Entrance animation`},{name:`label-clickable`,type:`boolean`,label:`Label Clickable`,defaultValue:!0,description:`Clicking the label toggles the checkbox`},{name:`is-button`,type:`boolean`,label:`Button Style`,defaultValue:!1,description:`Renders as a clickable button card`},{name:`skeleton`,type:`boolean`,label:`Skeleton`,defaultValue:!1,description:`Loading skeleton state`},{name:`rtl`,type:`boolean`,label:`RTL`,defaultValue:!1,description:`Right-to-left layout`}],c=e=>{let t=[`label="${e.label}"`,`color="${e.color}"`,`size="${e.size}"`];return e.checked&&t.push(`checked`),e.indeterminate&&t.push(`indeterminate`),e.disabled&&t.push(`disabled`),e.readonly&&t.push(`readonly`),e.required&&t.push(`required`),e.invalid&&t.push(`invalid`),e.description&&t.push(`description="${e.description}"`),e[`description-position`]!==`below`&&t.push(`description-position="${e[`description-position`]}"`),e[`helper-text`]&&t.push(`helper-text="${e[`helper-text`]}"`),e.invalid&&e[`error-message`]&&t.push(`error-message="${e[`error-message`]}"`),e.tooltip&&t.push(`tooltip="${e.tooltip}"`),e.variant!==`default`&&t.push(`variant="${e.variant}"`),e[`label-position`]!==`right`&&t.push(`label-position="${e[`label-position`]}"`),e[`custom-check-icon`]&&t.push(`custom-check-icon="${e[`custom-check-icon`]}"`),e[`custom-indeterminate-icon`]&&t.push(`custom-indeterminate-icon="${e[`custom-indeterminate-icon`]}"`),e[`enable-animation`]||t.push(`enable-animation="false"`),e[`ripple-effect`]||t.push(`ripple-effect="false"`),e.glow&&t.push(`glow`),e.confetti&&t.push(`confetti`),e.reveal!==`none`&&t.push(`reveal="${e.reveal}"`),e[`label-clickable`]||t.push(`label-clickable="false"`),e[`is-button`]&&t.push(`is-button`),e.skeleton&&t.push(`skeleton`),e.rtl&&t.push(`rtl`),`<ui-checkbox\n  ${t.join(`
  `)}\n></ui-checkbox>`},l=e=>(0,o.jsx)(`ui-checkbox`,{label:e.label,checked:e.checked||void 0,indeterminate:e.indeterminate||void 0,disabled:e.disabled||void 0,readonly:e.readonly||void 0,required:e.required||void 0,invalid:e.invalid||void 0,description:e.description||void 0,"description-position":e[`description-position`],"helper-text":e[`helper-text`]||void 0,"error-message":e[`error-message`]||void 0,tooltip:e.tooltip||void 0,size:e.size,color:e.color,variant:e.variant,"label-position":e[`label-position`],"custom-check-icon":e[`custom-check-icon`]||void 0,"custom-indeterminate-icon":e[`custom-indeterminate-icon`]||void 0,"enable-animation":e[`enable-animation`]||void 0,"ripple-effect":e[`ripple-effect`]||void 0,glow:e.glow||void 0,confetti:e.confetti||void 0,reveal:e.reveal===`none`?void 0:e.reveal,"label-clickable":e[`label-clickable`]||void 0,"is-button":e[`is-button`]||void 0,skeleton:e.skeleton||void 0,rtl:e.rtl||void 0},JSON.stringify(e)),u=[{title:`Overview`,content:`
      <p>The <code>ui-checkbox</code> component is a fully accessible, animated checkbox with support for labels, helper text, validation, indeterminate state, and premium effects.</p>
      <h3>Events</h3>
      <ul>
        <li><code>checkboxChange</code> — Fires with <code>detail: { checked, value, indeterminate }</code></li>
        <li><code>checkboxFocus</code> — Fires when the checkbox gains focus</li>
        <li><code>checkboxBlur</code> — Fires when the checkbox loses focus</li>
      </ul>
      <h3>Form Integration</h3>
      <p>The component is <code>formAssociated</code> and works natively inside HTML forms. It resets automatically on form reset.</p>
    `},{title:`Premium Effects`,content:`
      <h3>Confetti</h3>
      <p>Enable <code>confetti</code> to trigger a burst of colored particles when the checkbox is checked. Great for gamified UIs.</p>
      <h3>Glow</h3>
      <p>Enable <code>glow</code> to show a glowing ring around the checkbox while it is checked.</p>
      <h3>Ripple</h3>
      <p>The ripple effect (enabled by default) adds a material-style ripple animation on each interaction.</p>
    `}],d=[{title:`Basic Checkbox Group`,description:`Standard option list`,code:`<ui-checkbox label="Option A" checked color="success"></ui-checkbox>
<ui-checkbox label="Option B" color="success"></ui-checkbox>
<ui-checkbox label="Option C" disabled color="success"></ui-checkbox>`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,o.jsx)(`ui-checkbox`,{label:`Option A`,checked:!0,color:`success`}),(0,o.jsx)(`ui-checkbox`,{label:`Option B`,color:`success`}),(0,o.jsx)(`ui-checkbox`,{label:`Option C`,disabled:!0,color:`success`})]})},{title:`Indeterminate State`,description:`"Select All" parent pattern`,code:`<ui-checkbox label="Select All" indeterminate color="primary"></ui-checkbox>
<ui-checkbox label="Item 1" checked color="primary"></ui-checkbox>
<ui-checkbox label="Item 2" color="primary"></ui-checkbox>`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,o.jsx)(`ui-checkbox`,{label:`Select All`,indeterminate:!0,color:`primary`}),(0,o.jsx)(`ui-checkbox`,{label:`Item 1`,checked:!0,color:`primary`}),(0,o.jsx)(`ui-checkbox`,{label:`Item 2`,color:`primary`})]})},{title:`With Descriptions & Helper Text`,description:`Rich content checkboxes`,code:`<ui-checkbox label="Enable Notifications" description="We will send you weekly updates" helper-text="Can be changed in account settings" color="success" checked></ui-checkbox>`,render:()=>(0,o.jsx)(`ui-checkbox`,{label:`Enable Notifications`,description:`We will send you weekly updates`,"helper-text":`Can be changed in account settings`,color:`success`,checked:!0})},{title:`Custom Check Icons`,description:`Using Lucide icons instead of the default checkmark`,code:`<ui-checkbox label="Starred" custom-check-icon="star" checked color="warning"></ui-checkbox>
<ui-checkbox label="Verified" custom-check-icon="shield-check" checked color="success"></ui-checkbox>
<ui-checkbox label="Pinned" custom-check-icon="pin" checked color="primary"></ui-checkbox>`,render:()=>(0,o.jsxs)(`div`,{style:{display:`flex`,flexDirection:`column`,gap:`0.75rem`},children:[(0,o.jsx)(`ui-checkbox`,{label:`Starred`,"custom-check-icon":`star`,checked:!0,color:`warning`}),(0,o.jsx)(`ui-checkbox`,{label:`Verified`,"custom-check-icon":`shield-check`,checked:!0,color:`success`}),(0,o.jsx)(`ui-checkbox`,{label:`Pinned`,"custom-check-icon":`pin`,checked:!0,color:`primary`})]})},{title:`All Label Positions`,description:`Label on all four sides of the checkbox`,code:`<ui-checkbox label="Right (default)" label-position="right" checked color="primary"></ui-checkbox>
<ui-checkbox label="Left" label-position="left" checked color="primary"></ui-checkbox>
<ui-checkbox label="Top" label-position="top" checked color="primary"></ui-checkbox>
<ui-checkbox label="Bottom" label-position="bottom" checked color="primary"></ui-checkbox>`,render:()=>(0,o.jsx)(`div`,{style:{display:`flex`,gap:`2rem`,flexWrap:`wrap`,justifyContent:`center`},children:[`right`,`left`,`top`,`bottom`].map(e=>(0,o.jsx)(`ui-checkbox`,{label:e.charAt(0).toUpperCase()+e.slice(1),"label-position":e,checked:!0,color:`primary`},e))})},{title:`Validation State`,description:`Error state with a custom error message`,code:`<ui-checkbox label="I agree to the terms" invalid error-message="You must accept the terms to continue" color="primary"></ui-checkbox>`,render:()=>(0,o.jsx)(`ui-checkbox`,{label:`I agree to the terms`,invalid:!0,"error-message":`You must accept the terms to continue`,color:`primary`})},{title:`Glow + Confetti`,description:`Premium effects — try checking this box!`,code:`<ui-checkbox label="Check me for confetti! 🎉" glow confetti color="success"></ui-checkbox>`,render:()=>(0,o.jsx)(`ui-checkbox`,{label:`Check me for confetti! 🎉`,glow:!0,confetti:!0,color:`success`})}],f=[{title:`Basic Checkboxes`,description:`Standard checkboxes with labels, sizes, and colors`,html:`
      <div class="demo-block">
        <h3>Colors &amp; Sizes</h3>
        <div style="display:flex;flex-wrap:wrap;gap:24px;">
          <div style="display:flex;flex-direction:column;gap:12px;">
            <h4>Colors</h4>
            <ui-checkbox label="Primary" checked color="primary"></ui-checkbox>
            <ui-checkbox label="Success" checked color="success"></ui-checkbox>
            <ui-checkbox label="Warning" checked color="warning"></ui-checkbox>
            <ui-checkbox label="Danger" checked color="danger"></ui-checkbox>
            <ui-checkbox label="Info" checked color="info"></ui-checkbox>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <h4>Sizes</h4>
            <ui-checkbox label="Extra Small (xs)" checked size="xs" color="primary"></ui-checkbox>
            <ui-checkbox label="Small (sm)" checked size="sm" color="primary"></ui-checkbox>
            <ui-checkbox label="Medium (md)" checked size="md" color="primary"></ui-checkbox>
            <ui-checkbox label="Large (lg)" checked size="lg" color="primary"></ui-checkbox>
            <ui-checkbox label="Extra Large (xl)" checked size="xl" color="primary"></ui-checkbox>
          </div>
          <div style="display:flex;flex-direction:column;gap:12px;">
            <h4>States</h4>
            <ui-checkbox label="Checked" checked color="success"></ui-checkbox>
            <ui-checkbox label="Unchecked" color="primary"></ui-checkbox>
            <ui-checkbox label="Indeterminate" indeterminate color="primary"></ui-checkbox>
            <ui-checkbox label="Disabled (checked)" checked disabled color="primary"></ui-checkbox>
            <ui-checkbox label="Disabled (unchecked)" disabled color="primary"></ui-checkbox>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <h3>Label Positions</h3>
        <div style="display:flex;gap:2rem;flex-wrap:wrap;align-items:flex-start;">
          <ui-checkbox label="Right (default)" label-position="right" checked color="primary"></ui-checkbox>
          <ui-checkbox label="Left" label-position="left" checked color="primary"></ui-checkbox>
          <ui-checkbox label="Top" label-position="top" checked color="primary"></ui-checkbox>
          <ui-checkbox label="Bottom" label-position="bottom" checked color="primary"></ui-checkbox>
        </div>
      </div>
    `},{title:`Rich Descriptions &amp; Validation`,description:`Checkboxes with descriptions, helper text, and error messages`,html:`
      <div class="demo-block">
        <h3>With Description &amp; Helper Text</h3>
        <div style="display:flex;flex-direction:column;gap:16px;max-width:480px;">
          <ui-checkbox label="Enable Notifications" description="We'll send you weekly product updates" helper-text="Can be changed in account settings" color="success" checked></ui-checkbox>
          <ui-checkbox label="Two-Factor Authentication" description="Secure your account with OTP verification" helper-text="Required for enterprise access" color="primary"></ui-checkbox>
        </div>
      </div>
      <div class="demo-block">
        <h3>Validation &amp; Error State</h3>
        <div style="display:flex;flex-direction:column;gap:16px;max-width:480px;">
          <ui-checkbox label="Required Field" required color="primary"></ui-checkbox>
          <ui-checkbox label="I agree to Terms" invalid error-message="You must accept the terms to continue" color="primary"></ui-checkbox>
          <ui-checkbox label="Read-Only Checked" readonly checked color="primary"></ui-checkbox>
        </div>
      </div>
    `},{title:`Custom Icons`,description:`Custom Lucide icons instead of the default checkmark`,html:`
      <div class="demo-block">
        <h3>Custom Check Icons</h3>
        <div style="display:flex;flex-direction:column;gap:12px;max-width:320px;">
          <ui-checkbox label="Starred" custom-check-icon="star" checked color="warning"></ui-checkbox>
          <ui-checkbox label="Verified" custom-check-icon="shield-check" checked color="success"></ui-checkbox>
          <ui-checkbox label="Pinned" custom-check-icon="pin" checked color="primary"></ui-checkbox>
          <ui-checkbox label="Bookmarked" custom-check-icon="bookmark" checked color="info"></ui-checkbox>
          <ui-checkbox label="Heart" custom-check-icon="heart" checked color="danger"></ui-checkbox>
          <ui-checkbox label="Lightning" custom-check-icon="zap" checked color="warning"></ui-checkbox>
        </div>
      </div>
    `},{title:`Premium Effects`,description:`Glow, ripple, confetti — interactive checkbox effects`,html:`
      <div class="demo-block">
        <h3>Glow Effect</h3>
        <div style="display:flex;flex-direction:column;gap:12px;max-width:320px;">
          <ui-checkbox label="Glow Primary" glow checked color="primary"></ui-checkbox>
          <ui-checkbox label="Glow Success" glow checked color="success"></ui-checkbox>
          <ui-checkbox label="Glow Warning" glow checked color="warning"></ui-checkbox>
        </div>
      </div>
      <div class="demo-block">
        <h3>Confetti Burst 🎉</h3>
        <p>Click the checkbox below to trigger the confetti burst!</p>
        <ui-checkbox label="Achievement Unlocked" description="Integrated particle physics engine" confetti haptic color="success"></ui-checkbox>
      </div>
      <div class="demo-block">
        <h3>Button-Style Variant</h3>
        <div style="display:flex;gap:12px;flex-wrap:wrap;">
          <ui-checkbox label="Analytics" variant="button" color="primary"></ui-checkbox>
          <ui-checkbox label="Security" variant="button" color="warning"></ui-checkbox>
          <ui-checkbox label="Caching" variant="button" color="success"></ui-checkbox>
          <ui-checkbox label="Logs" variant="button" color="info"></ui-checkbox>
          <ui-checkbox label="Backup" variant="button" checked color="primary"></ui-checkbox>
        </div>
      </div>
    `},{title:`Form Integration`,description:`Native form association with FormData extraction`,html:`
      <div class="demo-block">
        <h3>Native Form Integration</h3>
        <div style="max-width:480px;padding:24px;background:rgba(255,255,255,0.03);border:1px solid rgba(255,255,255,0.08);border-radius:16px;">
          <form id="demoCheckboxForm" style="display:flex;flex-direction:column;gap:16px;">
            <ui-checkbox name="tos" value="accepted" label="Accept Terms of Service" required checked haptic></ui-checkbox>
            <ui-checkbox name="newsletter" value="yes" label="Subscribe to newsletter" color="primary"></ui-checkbox>
            <ui-checkbox name="analytics" value="yes" label="Allow analytics tracking" color="warning"></ui-checkbox>
            <div style="display:flex;gap:12px;margin-top:8px;">
              <ui-button type="submit" label="Submit" variant="primary"></ui-button>
              <ui-button type="reset" label="Reset" variant="ghost"></ui-button>
            </div>
          </form>
        </div>
      </div>
    `}];function p(){return(0,o.jsx)(a,{componentName:`Checkbox`,tagName:`ui-checkbox`,description:`A fully accessible, animated checkbox with 27 props covering validation, custom icons, animations, confetti effects, and rich label layouts.`,props:s,renderPreview:l,buildCode:c,docs:u,examples:d,demoSections:f,events:r(`ui-checkbox`),methods:t(`ui-checkbox`),slots:n(`ui-checkbox`),parts:i(`ui-checkbox`)})}export{p as default};