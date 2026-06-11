export function initBadgeDemo() {
  const section = document.getElementById('badge');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Overlay notifications and status indicators with 10+ powerful features.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button id="btnPlayground"  label="🎮 Interactive Playground" data-demo="playground" variant="outline"></ui-button>
      <ui-button id="btnIcons"  label="🎨 Icons" data-demo="icons" variant="outline"></ui-button>
      <ui-button id="btnGradients"  label="🌈 Gradients" data-demo="gradients" variant="outline"></ui-button>
      <ui-button id="btnInteractive"  label="👆 Interactive" data-demo="interactive" variant="outline"></ui-button>
      <ui-button id="btnCloseable"  label="✕ Closeable" data-demo="closeable" variant="outline"></ui-button>
      <ui-button id="btnVariants"  label="🎭 Variants" data-demo="variants" variant="outline"></ui-button>
      <ui-button id="btnShapes"  label="⬛ Shapes" data-demo="shapes" variant="outline"></ui-button>
      <ui-button id="btnAnimations"  label="✨ Animations" data-demo="animations" variant="outline"></ui-button>
      <ui-button id="btnGlow"  label="💫 Glow" data-demo="glow" variant="outline"></ui-button>
      <ui-button id="btnAvatars"  label="👤 On Avatars" data-demo="avatars" variant="outline"></ui-button>
      <ui-button id="btnOnIcons"  label="🔔 On Icons" data-demo="onIcons" variant="outline"></ui-button>
      <ui-button id="btnSlots"  label="🧩 Custom Slots" data-demo="slots" variant="outline"></ui-button>
    </div>

    <div id="badgeDemoContainer" style="margin-top: 20px;"></div>
  `;

  const container = section.querySelector('#badgeDemoContainer');

  const updateActiveBtn = demoName => {
    section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
      btn.selected = btn.getAttribute('data-demo') === demoName;
    });
  };

  // --- Demo Update Logic ---

  const updateBadgeCode = () => {
    const badge = section.querySelector('#playgroundBadge');
    const codeBlock = section.querySelector('#badgeCodeBlock');
    if (!badge || !codeBlock) return;

    let props = '';
    if (badge.value) props += ` value="${badge.value}"`;
    if (badge.icon) {
      props += ` icon="${badge.icon}"`;
      if (badge.iconLibrary && badge.iconLibrary !== 'default') {
        props += ` icon-library="${badge.iconLibrary}"`;
      }
    }
    if (badge.color && badge.color !== 'danger') props += ` color="${badge.color}"`;
    if (badge.variant && badge.variant !== 'standard') props += ` variant="${badge.variant}"`;
    if (badge.size && badge.size !== 'md') props += ` size="${badge.size}"`;
    if (badge.gradient) props += ` gradient="${badge.gradient}"`;
    if (badge.animation && badge.animation !== 'none') props += ` animation="${badge.animation}"`;
    if (badge.dot) props += ` dot`;
    if (badge.interactive) props += ` interactive`;
    if (badge.closeable) props += ` closeable`;
    if (badge.glow) props += ` glow`;

    codeBlock.innerText = `<ui-badge${props}>\n  <ui-button label="Notifications"></ui-button>\n</ui-badge>`;
  };

  const updatePlaygroundBadge = () => {
    const badge = section.querySelector('#playgroundBadge');
    if (!badge) return;

    const value = section.querySelector('#badgeValue').value;
    const icon = section.querySelector('#badgeIcon').value;
    const library = section.querySelector('#badgeIconLibrary').value;
    const color = section.querySelector('#badgeColor').value;
    const variant = section.querySelector('#badgeVariant').value;
    const size = section.querySelector('#badgeSize').value;
    const gradient = section.querySelector('#badgeGradient').value;
    const animation = section.querySelector('#badgeAnimation').value;
    const isDot = section.querySelector('#badgeDot').checked;
    const isInteractive = section.querySelector('#badgeInteractive').checked;
    const isCloseable = section.querySelector('#badgeCloseable').checked;
    const hasGlow = section.querySelector('#badgeGlow').checked;

    badge.value = value;
    badge.color = color;
    badge.variant = variant;
    badge.size = size;
    badge.animation = animation;
    badge.dot = isDot;
    badge.interactive = isInteractive;
    badge.closeable = isCloseable;
    badge.glow = hasGlow;

    if (icon) {
      badge.icon = icon;
      badge.iconLibrary = library;
    } else {
      badge.icon = undefined;
      badge.iconLibrary = 'default';
    }

    badge.gradient = gradient || undefined;

    updateBadgeCode();
  };

  const copyBadgeCode = btn => {
    const codeEl = section.querySelector('#badgeCodeBlock');
    if (!codeEl) return;
    const code = codeEl.innerText;

    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        const originalLabel = btn.label;
        btn.label = 'Copied!';
        btn.color = 'success';

        setTimeout(() => {
          btn.label = originalLabel;
          btn.color = 'secondary';
        }, 2000);
      });
    }
  };

  // --- Demo Sections ---

  const showBadgePlayground = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <p style="opacity: 0.7; margin-bottom: 24px;">Try all badge features in real-time!</p>
        
        <div class="playground-settings" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px; margin-bottom: 24px;">
          <label><span>Value:</span>
            <ui-input id="badgeValue" value="5" style="width: 100%;"></ui-input>
          </label>
          <label><span>Icon Name:</span>
            <ui-input id="badgeIcon" placeholder="bell" style="width: 100%;"></ui-input>
          </label>
          <label><span>Library:</span>
            <ui-dropdown id="badgeIconLibrary" value="lucide" options='[
              {"label": "Lucide", "value": "lucide"},
              {"label": "FontAwesome", "value": "fontawesome"},
              {"label": "Icons8", "value": "icons8"},
              {"label": "Iconoir", "value": "iconoir"},
              {"label": "Ionicons", "value": "ionicons"},
              {"label": "Bootstrap", "value": "bootstrap"},
              {"label": "SE Icons", "value": "se"},
              {"label": "Default", "value": "default"}
            ]' style="width: 100%;"></ui-dropdown>
          </label>
          <label><span>Color:</span>
            <ui-dropdown id="badgeColor" value="danger" options='[
              {"label": "Primary", "value": "primary"},
              {"label": "Secondary", "value": "secondary"},
              {"label": "Success", "value": "success"},
              {"label": "Danger", "value": "danger"},
              {"label": "Warning", "value": "warning"},
              {"label": "Info", "value": "info"}
            ]' style="width: 100%;"></ui-dropdown>
          </label>
          <label><span>Variant:</span>
            <ui-dropdown id="badgeVariant" value="standard" options='[
              {"label": "Standard", "value": "standard"},
              {"label": "Outlined", "value": "outlined"},
              {"label": "Bordered", "value": "bordered"},
              {"label": "Soft", "value": "soft"}
            ]' style="width: 100%;"></ui-dropdown>
          </label>
          <label><span>Size:</span>
            <ui-dropdown id="badgeSize" value="md" options='[
              {"label": "Small", "value": "sm"},
              {"label": "Medium", "value": "md"},
              {"label": "Large", "value": "lg"}
            ]' style="width: 100%;"></ui-dropdown>
          </label>
          <label><span>Gradient:</span>
            <ui-dropdown id="badgeGradient" value="" options='[
              {"label": "None", "value": ""},
              {"label": "Blue-Purple", "value": "blue-purple"},
              {"label": "Green-Teal", "value": "green-teal"},
              {"label": "Orange-Red", "value": "orange-red"},
              {"label": "Pink-Purple", "value": "pink-purple"}
            ]' style="width: 100%;"></ui-dropdown>
          </label>
          <label><span>Animation:</span>
            <ui-dropdown id="badgeAnimation" value="none" options='[
              {"label": "None", "value": "none"},
              {"label": "Pulse", "value": "pulse"},
              {"label": "Bounce", "value": "bounce"},
              {"label": "Shake", "value": "shake"}
            ]' style="width: 100%;"></ui-dropdown>
          </label>
          <ui-checkbox id="badgeDot" label="Dot Mode"></ui-checkbox>
          <ui-checkbox id="badgeInteractive" label="Interactive"></ui-checkbox>
          <ui-checkbox id="badgeCloseable" label="Closeable"></ui-checkbox>
          <ui-checkbox id="badgeGlow" label="Glow Effect"></ui-checkbox>
        </div>
        
        <div class="playground-preview" style="padding: 40px;">
          <ui-badge id="playgroundBadge" value="5" color="danger">
            <ui-button label="Notifications"></ui-button>
          </ui-badge>
        </div>
        
        <div id="badgeEventLog" style="margin-top: 16px; padding: 12px; background: var(--bg-secondary, #f3f4f6); border-radius: 6px; font-size: 13px; max-height: 150px; overflow-y: auto; color: var(--text-primary); border: 1px solid var(--border-default, #e2e8f0);"></div>
        
        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button id="copyBadgeBtn" label="Copy" size="md" variant="ghost" style="position: absolute; top: 10px; right: 10px; color: white;"></ui-button>
          <code id="badgeCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px;">
            &lt;ui-badge value="5"&gt;...&lt;/ui-badge&gt;
          </code>
        </div>
      </div>
    `;

    const inputs = container.querySelectorAll('ui-input');
    const dropdowns = container.querySelectorAll('ui-dropdown');
    const checkboxes = container.querySelectorAll('ui-checkbox');
    const eventLog = container.querySelector('#badgeEventLog');
    const playgroundBadge = container.querySelector('#playgroundBadge');

    inputs.forEach(input => input.addEventListener('inputChange', updatePlaygroundBadge));
    dropdowns.forEach(dropdown => dropdown.addEventListener('valueChange', updatePlaygroundBadge));
    checkboxes.forEach(checkbox => checkbox.addEventListener('checkboxChange', updatePlaygroundBadge));

    container.querySelector('#copyBadgeBtn')?.addEventListener('click', e => copyBadgeCode(e.target));

    playgroundBadge?.addEventListener('badgeClick', () => {
      const entry = document.createElement('div');
      entry.innerHTML = `<strong>${new Date().toLocaleTimeString()}</strong>: Badge clicked!`;
      eventLog.prepend(entry);
    });

    playgroundBadge?.addEventListener('badgeClose', () => {
      const entry = document.createElement('div');
      entry.innerHTML = `<strong>${new Date().toLocaleTimeString()}</strong>: Badge closed!`;
      eventLog.prepend(entry);
    });

    updatePlaygroundBadge();
  };

  const showBadgeIcons = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎨 Badge with Icons</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Add icons to badges for better visual communication.</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap;">
          <ui-badge value="5" icon="bell" icon-library="lucide" color="danger">
            <ui-button label="Notifications"></ui-button>
          </ui-badge>
          
          <ui-badge value="New" icon="star" icon-library="lucide" color="warning" icon-position="right">
            <ui-button label="Features"></ui-button>
          </ui-badge>
          
          <ui-badge value="3" icon="message-square" icon-library="lucide" color="primary">
            <ui-button label="Messages"></ui-button>
          </ui-badge>
          
          <ui-badge value="!" icon="alert-triangle" icon-library="lucide" color="warning">
            <ui-button label="Alerts"></ui-button>
          </ui-badge>
          
          <ui-badge value="PRO" icon="crown" icon-library="lucide" gradient="blue-purple">
            <ui-button label="Premium"></ui-button>
          </ui-badge>
        </div>
      </div>
    `;
  };

  const showBadgeGradients = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🌈 Gradient Badges</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">10 beautiful gradient presets for modern UIs.</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap;">
          <ui-badge value="Pro" gradient="blue-purple">
            <ui-button label="Account"></ui-button>
          </ui-badge>
          
          <ui-badge value="5" gradient="green-teal">
            <ui-button label="Tasks"></ui-button>
          </ui-badge>
          
          <ui-badge value="Hot" gradient="orange-red">
            <ui-button label="Deals"></ui-button>
          </ui-badge>
          
          <ui-badge value="New" gradient="pink-purple">
            <ui-button label="Updates"></ui-button>
          </ui-badge>
          
          <ui-badge value="99+" gradient="blue-green">
            <ui-button label="Inbox"></ui-button>
          </ui-badge>
        </div>
      </div>
    `;
  };

  const showBadgeInteractive = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>👆 Interactive Badges</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Make badges clickable with hover effects.</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap;">
          <ui-badge value="5" interactive="true" color="primary" id="interactiveBadge1">
            <ui-button label="Click Badge"></ui-button>
          </ui-badge>
          
          <ui-badge value="New" interactive="true" gradient="pink-purple" id="interactiveBadge2">
            <ui-button label="Interactive"></ui-button>
          </ui-badge>
        </div>
         <div id="clickLog" style="margin-top: 16px; padding: 12px; background: var(--bg-secondary, #f3f4f6); border-radius: 6px; font-size: 13px; color: var(--text-primary); border: 1px solid var(--border-default, #cbd5e1);"></div>
      </div>
    `;

    const badge1 = container.querySelector('#interactiveBadge1');
    const badge2 = container.querySelector('#interactiveBadge2');
    const log = container.querySelector('#clickLog');

    badge1?.addEventListener('badgeClick', () => {
      log.innerHTML = '<strong>Badge 1 clicked!</strong> Try clicking the other badge.';
    });
    badge2?.addEventListener('badgeClick', () => {
      log.innerHTML = '<strong>Badge 2 clicked!</strong> Interactive badges emit click events.';
    });
  };

  const showBadgeCloseable = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>✕ Closeable Badges</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Add close buttons to dismissible badges.</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap;">
          <ui-badge value="5" closeable="true" color="danger">
            <ui-button label="Notifications"></ui-button>
          </ui-badge>
          
          <ui-badge value="New" closeable="true" gradient="blue-purple">
            <ui-button label="Updates"></ui-button>
          </ui-badge>
          
          <ui-badge value="5" closeable="true" variant="outlined" color="warning">
            <ui-button label="Alerts"></ui-button>
          </ui-badge>
        </div>
        <p style="margin-top: 16px; font-size: 13px; opacity: 0.7;">Click the ✕ button to close badges</p>
      </div>
    `;
  };

  const showBadgeVariants = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🎭 Badge Variants</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">4 style variants for different use cases.</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap;">
          <ui-badge value="5" variant="standard" color="primary">
            <ui-button label="Standard"></ui-button>
          </ui-badge>
          
          <ui-badge value="5" variant="outlined" color="success">
            <ui-button label="Outlined"></ui-button>
          </ui-badge>
          
          <ui-badge value="5" variant="bordered" color="warning">
            <ui-button label="Bordered"></ui-button>
          </ui-badge>
          
          <ui-badge value="5" variant="soft" color="danger">
            <ui-button label="Soft"></ui-button>
          </ui-badge>
        </div>
      </div>
    `;
  };

  const showBadgeAnimations = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>✨ Badge Animations</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">3 animation types for attention-grabbing badges.</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap;">
          <ui-badge value="99+" animation="pulse" color="danger">
            <ui-button label="Pulse"></ui-button>
          </ui-badge>
          
          <ui-badge value="New" animation="bounce" color="success">
            <ui-button label="Bounce"></ui-button>
          </ui-badge>
          
          <ui-badge value="!" animation="shake" color="warning">
            <ui-button label="Shake"></ui-button>
          </ui-badge>
          
          <ui-badge dot="true" animation="pulse" color="primary">
            <ui-button label="Dot Pulse"></ui-button>
          </ui-badge>
        </div>
      </div>
    `;
  };

  const showBadgeGlow = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>💫 Glow Effects</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Add pulsing glow for premium look.</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap; background: var(--bg-tertiary, #f8fafc); padding: 40px; border-radius: 12px; border: 1px solid var(--border-subtle, #e2e8f0);">
          <ui-badge value="VIP" glow="true" color="warning">
            <ui-button label="Premium"></ui-button>
          </ui-badge>
          
          <ui-badge value="Live" glow="true" color="danger">
            <ui-button label="Streaming"></ui-button>
          </ui-badge>
          
          <ui-badge value="New" glow="true" gradient="pink-purple">
            <ui-button label="Feature"></ui-button>
          </ui-badge>
        </div>
      </div>
    `;
  };

  const showBadgeShapes = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>⬛ Badge Shapes</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Circle and square shapes for different use cases.</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap;">
          <ui-badge value="5" shape="circle" color="danger">
            <ui-button label="Circle"></ui-button>
          </ui-badge>
          
          <ui-badge value="9" shape="square" color="primary">
            <ui-button label="Square"></ui-button>
          </ui-badge>
          
          <ui-badge value="3" shape="circle" variant="outlined" color="success">
            <ui-button label="Soft Circle"></ui-button>
          </ui-badge>
          
          <ui-badge value="7" shape="square" gradient="blue-purple">
            <ui-button label="Gradient Square"></ui-button>
          </ui-badge>
          
          <ui-badge value="!" shape="circle" animation="pulse" color="warning">
            <ui-button label="Pulse Circle"></ui-button>
          </ui-badge>
        </div>
      </div>
    `;
  };

  const showBadgeAvatars = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>👤 Badges on Circular Objects</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Perfect positioning on avatars and circular elements. Test closeable functionality!</p>
        <div class="playground-preview" style="gap: 40px; flex-wrap: wrap; align-items: center;">
          <ui-badge value="5" color="danger" closeable="true">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #667eea 0%, #764ba2 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 24px;">JD</div>
          </ui-badge>
          
          <ui-badge value="99+" color="primary" position="top-left" closeable="true">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #f093fb 0%, #f5576c 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 24px;">AS</div>
          </ui-badge>
          
          <ui-badge value="3" color="success" position="bottom-right" shape="circle" closeable="true">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #4facfe 0%, #00f2fe 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 24px;">BW</div>
          </ui-badge>
          
          <ui-badge dot="true" color="success" position="bottom-right" animation="pulse">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #43e97b 0%, #38f9d7 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 24px;">AB</div>
          </ui-badge>
          
          <ui-badge value="!" color="warning" shape="square" closeable="true">
            <div style="width: 64px; height: 64px; border-radius: 50%; background: linear-gradient(135deg, #fa709a 0%, #fee140 100%); display: flex; align-items: center; justify-content: center; color: white; font-weight: 600; font-size: 24px;">MK</div>
          </ui-badge>
      </div>
      <p style="margin-top: 16px; font-size: 13px; opacity: 0.7;">Click the ✕ button to test closeable functionality on avatars</p>
    </div>
  `;
  };

  const showBadgeOnIcons = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🔔 Badge on Library Icons</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Position badges over icons from Lucide, FontAwesome, etc. Use <code>position</code> prop to shift the overlay.</p>
        <div class="playground-preview" style="gap: 50px; flex-wrap: wrap; background:var(--bg-secondary,#f8fafc); padding: 40px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
          
          <div style="text-align: center;">
            <p style="font-size: 11px; font-weight: 600; margin-bottom: 15px; color:var(--text-secondary,#64748b);">LUCIDE - TOP RIGHT</p>
            <ui-badge value="5" color="danger" position="top-right">
              <ui-icon library="lucide" name="bell" size="32px" color="#1e293b"></ui-icon>
            </ui-badge>
          </div>
          
          <div style="text-align: center;">
            <p style="font-size: 11px; font-weight: 600; margin-bottom: 15px; color:var(--text-secondary,#64748b);">HOT - TOP LEFT</p>
            <ui-badge value="New" color="success" position="top-left">
              <ui-icon library="lucide" name="zap" size="32px" color="#10b981"></ui-icon>
            </ui-badge>
          </div>
          
          <div style="text-align: center;">
            <p style="font-size: 11px; font-weight: 600; margin-bottom: 15px; color:var(--text-secondary,#64748b);">DOT - BOTTOM RIGHT</p>
            <ui-badge dot="true" color="success" position="bottom-right" animation="pulse">
              <ui-icon library="lucide" name="message-square" size="32px" color="#334155"></ui-icon>
            </ui-badge>
          </div>
          
          <div style="text-align: center;">
            <p style="font-size: 11px; font-weight: 600; margin-bottom: 15px; color:var(--text-secondary,#64748b);">GLOW - BOTTOM LEFT</p>
            <ui-badge value="!" glow="true" color="warning" position="bottom-left">
              <ui-icon library="lucide" name="shield-alert" size="32px" color="#dc2626"></ui-icon>
            </ui-badge>
          </div>

          <div style="text-align: center;">
            <p style="font-size: 11px; font-weight: 600; margin-bottom: 15px; color:var(--text-secondary,#64748b);">INTERACTIVE SCALE</p>
            <ui-badge value="99" interactive="true" color="primary" shape="circle">
              <ui-icon library="lucide" name="mail" size="32px" color="#2563eb"></ui-icon>
            </ui-badge>
          </div>
        </div>
      </div>
    `;
  };

  const showBadgeSlots = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>🧩 Custom Badge Content (Slots)</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Use the <code>badge-content</code> named slot for completely custom badge labels, including multiple icons or special formatting.</p>
        <div class="playground-preview" style="gap: 50px; flex-wrap: wrap; background:var(--bg-secondary,#f8fafc); padding: 40px; border-radius: 12px; border:1px solid var(--border-default,#e2e8f0);">
          
          <div style="text-align: center;">
            <p style="font-size: 11px; font-weight: 600; margin-bottom: 15px; color:var(--text-secondary,#64748b);">COMBO ICON + TEXT</p>
            <ui-badge color="primary" size="lg">
              <ui-button label="Project"></ui-button>
              <div slot="badge-content" style="display: flex; align-items: center; gap: 4px;">
                <ui-icon library="lucide" name="check" size="12px"></ui-icon>
                <span>Done</span>
              </div>
            </ui-badge>
          </div>
          
          <div style="text-align: center;">
            <p style="font-size: 11px; font-weight: 600; margin-bottom: 15px; color:var(--text-secondary,#64748b);">STATUS DOT + TIME</p>
            <ui-badge color="secondary" variant="outlined" size="lg">
              <ui-button label="Recent"></ui-button>
              <div slot="badge-content" style="display: flex; align-items: center; gap: 6px;">
                <span style="width: 8px; height: 8px; border-radius: 50%; background: #10b981;"></span>
                <span>2m ago</span>
              </div>
            </ui-badge>
          </div>
          
          <div style="text-align: center;">
            <p style="font-size: 11px; font-weight: 600; margin-bottom: 15px; color:var(--text-secondary,#64748b);">CUSTOM HTML (CHIP STYLE)</p>
            <ui-badge closeable="true" color="danger" size="lg">
              <ui-button label="Updates"></ui-button>
              <strong slot="badge-content" style="padding: 0 4px;">U</strong>
            </ui-badge>
          </div>

        </div>

        <div style="margin-top: 24px; background: #1e293b; padding: 20px; border-radius: 8px;">
          <h4 style="color: white; margin-bottom: 12px; font-size: 14px;">Code Example:</h4>
          <code style="color: #6ee7b7; font-family: monospace; font-size: 13px; display: block; white-space: pre-wrap;">
&lt;ui-badge color="primary"&gt;
  &lt;ui-button label="Project"&gt;&lt;/ui-button&gt;
  &lt;div slot="badge-content" style="display: flex; align-items: center; gap: 4px;"&gt;
    &lt;ui-icon library="lucide" name="check"&gt;&lt;/ui-icon&gt;
    &lt;span&gt;Done&lt;/span&gt;
  &lt;/div&gt;
&lt;/ui-badge&gt;
          </code>
        </div>
      </div>
    `;
  };

  const demoMap = {
    playground: showBadgePlayground,
    icons: showBadgeIcons,
    gradients: showBadgeGradients,
    interactive: showBadgeInteractive,
    closeable: showBadgeCloseable,
    variants: showBadgeVariants,
    shapes: showBadgeShapes,
    animations: showBadgeAnimations,
    glow: showBadgeGlow,
    avatars: showBadgeAvatars,
    onIcons: showBadgeOnIcons,
    slots: showBadgeSlots,
  };

  // --- Initialization ---

  section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
    btn.addEventListener('click', () => {
      const demo = btn.getAttribute('data-demo');
      if (demoMap[demo]) {
        updateActiveBtn(demo);
        demoMap[demo]();
      }
    });
  });

  // Default View
  updateActiveBtn('playground');
  showBadgePlayground();
}
