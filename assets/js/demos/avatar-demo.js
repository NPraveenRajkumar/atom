export function initAvatarDemo(targetId = 'avatar') {
  const section = document.getElementById(targetId);
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header" style="margin-bottom: 32px;">
      <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
        <ui-pill color="danger" variant="outline" label="ZENITH TIER" size="md"ui-pill>
        <ui-pill color="secondary" variant="outline" label="V4.0" size="md"ui-pill>
      </div>
      <h2>Avatar & Social Suite</h2>
      <p style="color:var(--text-secondary,#64748b); font-size: 1.1rem; max-width: 800px;">The industry's most advanced avatar component. Support for 4 custom shapes, status management, social story rings, 3D interactions, and enterprise-grade group stacking.</p>
    </div>

    <div id="avatarNavPills_${targetId}" class="demo-nav-pills" style="margin: 24px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button label="🎮 Playground" data-demo="playground" selected="true"></ui-button>
      <ui-button label="✨ Visual Styles" data-demo="styles"></ui-button>
      <ui-button label="🟢 Presence & Status" data-demo="presence"></ui-button>
      <ui-button label="📸 Social & Effects" data-demo="social"></ui-button>
      <ui-button label="👥 Managed Groups" data-demo="groups"></ui-button>
      <ui-button label="🧪 Reference Coverage" data-demo="reference"></ui-button>
    </div>

    <div id="avatarDemoContainer_${targetId}" class="avatar-demo-content-area" style="min-height: 500px; padding: 40px; background:var(--bg-primary,white); border-radius: 20px; border:1px solid var(--border-default,#e2e8f0); box-shadow: 0 10px 40px rgba(0,0,0,0.03);"></div>
  `;

  const containerId = `avatarDemoContainer_${targetId}`;
  const container = section.querySelector(`#${containerId}`);

  const updateActiveBtn = name => {
    const nav = section.querySelector(`#avatarNavPills_${targetId}`);
    if (!nav) return;
    nav.querySelectorAll('ui-button').forEach(btn => {
      btn.selected = btn.dataset.demo === name;
    });
  };

  // --- Demo Sections ---

  const showVisualStyles = () => {
    updateActiveBtn('styles');
    container.innerHTML = `
      <div class="demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px;">
        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Geometric Shapes</h4>
          <div style="display: flex; gap: 24px; align-items: center;">
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" shape="circle" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">CIRCLE</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" shape="squircle" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">SQUIRCLE</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" shape="hexagon" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">HEXAGON</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" shape="square" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">SQUARE</p></div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Sizing Scale</h4>
          <div style="display: flex; gap: 16px; align-items: flex-end;">
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="xs"></ui-avatar><p style="font-size: 9px;">XS</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="s"></ui-avatar><p style="font-size: 9px;">S</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="m"></ui-avatar><p style="font-size: 9px;">M</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="l"></ui-avatar><p style="font-size: 9px;">L</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="xl"></ui-avatar><p style="font-size: 9px;">XL</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="120"></ui-avatar><p style="font-size: 9px;">120px</p></div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Source Types</h4>
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 20px;">
            <div style="display: flex; align-items: center; gap: 12px; background:var(--bg-secondary,#f8fafc); padding: 12px; border-radius: 12px;">
              <ui-avatar src="/build/assets/images/logo.png" size="m"></ui-avatar>
              <div><strong style="font-size: 13px;">Image</strong><p style="font-size: 11px; margin: 0; opacity: 0.7;">Remote URL</p></div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; background:var(--bg-secondary,#f8fafc); padding: 12px; border-radius: 12px;">
              <ui-avatar name="Steve Rogers" size="m" auto-color="true"></ui-avatar>
              <div><strong style="font-size: 13px;">Initials</strong><p style="font-size: 11px; margin: 0; opacity: 0.7;">Auto-Generated</p></div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; background:var(--bg-secondary,#f8fafc); padding: 12px; border-radius: 12px;">
              <ui-avatar icon="bell" icon-library="lucide" bg-color="#10b981" size="m"></ui-avatar>
              <div><strong style="font-size: 13px;">Icon</strong><p style="font-size: 11px; margin: 0; opacity: 0.7;">Lucide Library</p></div>
            </div>
            <div style="display: flex; align-items: center; gap: 12px; background:var(--bg-secondary,#f8fafc); padding: 12px; border-radius: 12px;">
              <ui-avatar name="Broken Link" src="https://invalid-url.com" size="m"></ui-avatar>
              <div><strong style="font-size: 13px;">Fallback</strong><p style="font-size: 11px; margin: 0; opacity: 0.7;">Auto-Recovery</p></div>
            </div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">System States</h4>
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="text-align: center;"><ui-avatar loading="true" size="l"></ui-avatar><p style="font-size: 10px; margin-top: 8px;">LOADING</p></div>
            <div style="text-align: center;"><ui-avatar skeleton="true" size="l"></ui-avatar><p style="font-size: 10px; margin-top: 8px;">SKELETON</p></div>
            <div style="text-align: center;"><ui-avatar editable="true" src="/build/assets/images/logo.png" size="l"></ui-avatar><p style="font-size: 10px; margin-top: 8px;">UPLOADABLE</p></div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Auto-Scale Font Size</h4>
          <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">For letter-type avatars, use <code>gap</code> to set the minimum padding — the font will auto-shrink to fit longer text.</p>
          <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;"><ui-avatar content="U" gap="4" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">1 letter</p></div>
            <div style="text-align: center;"><ui-avatar content="AB" gap="4" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">2 letters</p></div>
            <div style="text-align: center;"><ui-avatar content="USER" gap="4" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">4 letters</p></div>
            <div style="text-align: center;"><ui-avatar content="UserName" gap="4" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Long name</p></div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Auto Color from Name</h4>
          <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">Set <code>auto-color="true"</code> to deterministically generate a background color from the <code>name</code> prop.</p>
          <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;"><ui-avatar name="Alice Anderson" auto-color="true" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Alice A.</p></div>
            <div style="text-align: center;"><ui-avatar name="Bob Baker" auto-color="true" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Bob B.</p></div>
            <div style="text-align: center;"><ui-avatar name="Charlie Clark" auto-color="true" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Charlie C.</p></div>
            <div style="text-align: center;"><ui-avatar name="Diana Davis" auto-color="true" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Diana D.</p></div>
            <div style="text-align: center;"><ui-avatar name="Steve Rogers" auto-color="true" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Steve R.</p></div>
            <div style="text-align: center;"><ui-avatar name="Tony Stark" auto-color="true" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Tony S.</p></div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Custom Colors</h4>
          <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">Use <code>bg-color</code> to set the background and <code>color</code> for text/icon foreground. Works for icon, initial, and content types.</p>
          <div style="display: flex; gap: 20px; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;"><ui-avatar icon="user" icon-library="fontawesome" bg-color="#f56a00" color="#fff" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">#f56a00</p></div>
            <div style="text-align: center;"><ui-avatar content="U" bg-color="#87d068" color="#fff" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">#87d068</p></div>
            <div style="text-align: center;"><ui-avatar content="USER" bg-color="#1890ff" color="#fff" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">#1890ff</p></div>
            <div style="text-align: center;"><ui-avatar icon="crown" icon-library="fontawesome" bg-color="#722ed1" color="#fff" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">#722ed1</p></div>
            <div style="text-align: center;"><ui-avatar content="G" bg-color="#eb2f96" color="#fff" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">#eb2f96</p></div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Animations</h4>
          <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">Use the <code>animation</code> prop to apply a looping visual effect. Choose from <code>pulse</code>, <code>ring</code>, or <code>glow</code>.</p>
          <div style="display: flex; gap: 40px; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;"><ui-avatar name="Pulse" animation="pulse" size="l" bg-color="#6366f1"></ui-avatar><p style="font-size: 11px; margin-top: 10px; font-weight: 600;">pulse</p></div>
            <div style="text-align: center;"><ui-avatar name="Ring" animation="ring" size="l" bg-color="#10b981"></ui-avatar><p style="font-size: 11px; margin-top: 10px; font-weight: 600;">ring</p></div>
            <div style="text-align: center;"><ui-avatar name="Glow" animation="glow" size="l" bg-color="#f59e0b"></ui-avatar><p style="font-size: 11px; margin-top: 10px; font-weight: 600;">glow</p></div>
          </div>
        </div>
      </div>
    `;
  };

  const showStatusAndPresence = () => {
    updateActiveBtn('presence');
    container.innerHTML = `
      <div class="demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px;">
        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Semantic Presence Indicators</h4>
          <div style="display: flex; gap: 24px; align-items: center;">
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" tooltip-text="Online"></ui-avatar>
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="away" tooltip-text="Away"></ui-avatar>
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="busy" tooltip-text="Busy (In Call)"></ui-avatar>
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="dnd" tooltip-text="Do Not Disturb"></ui-avatar>
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="offline" tooltip-text="Offline"></ui-avatar>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Presence Motion (Attention-Grabbing)</h4>
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="text-align: center;">
                 <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" status-pulse="true"></ui-avatar>
                 <p style="font-size: 10px; margin-top: 8px;">STATUS PULSE</p>
            </div>
            <div style="text-align: center;">
                 <ui-avatar src="/build/assets/images/logo.png" size="l" active-speaker="true"></ui-avatar>
                 <p style="font-size: 10px; margin-top: 8px;">ACTIVE SPEAKER RING</p>
            </div>
            <div style="text-align: center;">
                 <ui-avatar src="/build/assets/images/logo.png" size="l" animation="pulse"></ui-avatar>
                 <p style="font-size: 10px; margin-top: 8px;">AVATAR PULSE</p>
            </div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Positioning Logic</h4>
          <div style="display: flex; gap: 24px;">
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" status-position="top-right"></ui-avatar>
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" status-position="top-left"></ui-avatar>
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" status-position="bottom-left"></ui-avatar>
            <ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" status-position="bottom-right"></ui-avatar>
          </div>
          <p style="font-size: 11px; opacity: 0.6; margin-top: 12px;">TR, TL, BL, BR Anchor points for status indicators</p>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Indicator Size Control</h4>
          <div style="display: flex; gap: 24px; align-items: flex-end; flex-wrap: wrap;">
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" indicator-size="8"></ui-avatar><p style="font-size: 10px; margin-top: 8px;">8px</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" indicator-size="12"></ui-avatar><p style="font-size: 10px; margin-top: 8px;">12px</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="online" indicator-size="16"></ui-avatar><p style="font-size: 10px; margin-top: 8px;">16px</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" size="l" show-status="true" status="busy" indicator-size="1rem"></ui-avatar><p style="font-size: 10px; margin-top: 8px;">1rem</p></div>
          </div>
          <p style="font-size: 11px; opacity: 0.6; margin-top: 12px;">Use <code>indicator-size</code> with either pixel values or CSS units.</p>
        </div>
      </div>
    `;
  };

  const showSocialFeatures = () => {
    updateActiveBtn('social');
    container.innerHTML = `
      <div class="demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 40px;">
        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Instagram Style "Stories"</h4>
          <div style="display: flex; gap: 32px; align-items: center;">
            <div style="text-align: center;">
                 <ui-avatar src="/build/assets/images/logo.png" size="xl" story="true"></ui-avatar>
                 <p style="font-size: 9px; margin-top: 8px; color:var(--accent-pink,#ec4899); font-weight: bold;">NEW STORY</p>
            </div>
            <div style="text-align: center;">
                 <ui-avatar src="/build/assets/images/logo.png" size="xl" story="true" story-seen="true"></ui-avatar>
                 <p style="font-size: 9px; margin-top: 8px; opacity: 0.5;">SEEN STORY</p>
            </div>
            <div style="text-align: center;">
                 <ui-avatar src="/build/assets/images/logo.png" size="xl" story="true" segments="6"></ui-avatar>
                 <p style="font-size: 9px; margin-top: 8px; color: #10b981; font-weight: bold;">6 SEGMENTS</p>
            </div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Premium Effects Suite</h4>
          <div style="display: flex; gap: 32px; align-items: center; flex-wrap: wrap;">
             <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <ui-avatar src="/build/assets/images/logo.png" size="m" verified="true"></ui-avatar>
                    <span style="font-size: 12px; font-weight: 500;">VERIFIED BADGE</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <ui-avatar src="/build/assets/images/logo.png" size="m" reflection="true"></ui-avatar>
                    <span style="font-size: 12px; font-weight: 500;">PREMIUM REFLECTION</span>
                </div>
             </div>
             <div style="display: flex; flex-direction: column; gap: 20px;">
                <div style="display: flex; align-items: center; gap: 12px;">
                    <ui-avatar src="/build/assets/images/logo.png" size="m" glass="true" variant="glass"></ui-avatar>
                    <span style="font-size: 12px; font-weight: 500;">GLASSMORPHISM</span>
                </div>
                <div style="display: flex; align-items: center; gap: 12px;">
                    <ui-avatar src="/build/assets/images/logo.png" size="m" three-d="true"></ui-avatar>
                    <span style="font-size: 12px; font-weight: 500;">3D HOVER FIELD</span>
                </div>
             </div>
          </div>
        </div>

        <div class="demo-card" style="grid-column: span 1; background: var(--bg-tertiary, #f1f5f9); border: 1px solid var(--border-default); color: var(--text-primary);">
          <h4 style="margin-bottom: 24px; color: var(--text-primary); border-bottom: 1px solid var(--border-default); padding-bottom: 12px;">Premium Gradient &amp; Ring Highlights</h4>
          <div style="display: flex; gap: 32px; align-items: center;">
            <ui-avatar gradient="true" gradient-colors="#f43f5e, #fb923c" shape="squircle" size="xl" content="★"></ui-avatar>
            <ui-avatar animation="glow" ring-color="#10b981" src="/build/assets/images/logo.png" size="xl"></ui-avatar>
            <ui-avatar animation="ring" ring-color="#ec4899" src="/build/assets/images/logo.png" size="xl"></ui-avatar>
          </div>
          <p style="font-size: 11px; opacity: 0.6; margin-top: 16px;">Vibrant gradients and glowing rings for premium interfaces</p>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Gradient Backgrounds</h4>
          <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">Use <code>gradient="true"</code> alone for a default rainbow gradient, or set <code>gradient-colors</code> for a custom linear gradient.</p>
          <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;"><ui-avatar content="GR" gradient="true" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Default</p></div>
            <div style="text-align: center;"><ui-avatar content="CG" gradient="true" gradient-colors="#ff0080,#7928ca" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Purple Burst</p></div>
            <div style="text-align: center;"><ui-avatar content="BG" gradient="true" gradient-colors="#00d2ff,#3a47d5" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Ocean Blue</p></div>
            <div style="text-align: center;"><ui-avatar content="★" gradient="true" gradient-colors="#f43f5e,#fb923c" shape="squircle" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Sunset</p></div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Ring Color</h4>
          <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">Use <code>ring-color</code> to add a coloured ring border around any avatar. Works alongside <code>animation="glow"</code> or <code>"ring"</code>.</p>
          <div style="display: flex; gap: 24px; align-items: center; flex-wrap: wrap;">
            <div style="text-align: center;"><ui-avatar name="Blue Ring" ring-color="#3b82f6" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Blue</p></div>
            <div style="text-align: center;"><ui-avatar name="Red Ring" ring-color="#ef4444" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Red</p></div>
            <div style="text-align: center;"><ui-avatar name="Green Ring" ring-color="#10b981" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Green</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" ring-color="#ec4899" animation="glow" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Glow + Ring</p></div>
            <div style="text-align: center;"><ui-avatar src="/build/assets/images/logo.png" ring-color="#f59e0b" animation="ring" size="l"></ui-avatar><p style="font-size: 11px; margin-top: 8px;">Anim Ring</p></div>
          </div>
        </div>

        <div class="demo-card" style="grid-column: 1 / -1; background: linear-gradient(135deg, #f0f4ff 0%, #f9f0ff 100%); border: 1px solid rgba(102,126,234,0.2);">
          <h4 style="margin-bottom: 8px; color: #4338ca;">⭐ Phase 7: Premium Showcase</h4>
          <p style="font-size: 12px; color: #4b5563; margin-bottom: 24px;">High-end UX enhancements: skeleton shimmer, glassmorphism, 3D parallax hover, and multi-segment story rings.</p>
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px;">
            <div style="background:white; padding:24px; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.04); text-align:center;">
              <h5 style="color:#6366f1; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 16px;">Skeleton Shimmer</h5>
              <div style="display:flex; gap:16px; justify-content:center;">
                <ui-avatar skeleton="true" size="l"></ui-avatar>
                <ui-avatar skeleton="true" shape="square" size="l"></ui-avatar>
              </div>
              <p style="font-size:10px; color:#6366f1; font-weight:700; margin:12px 0 0; text-transform:uppercase; letter-spacing:0.05em;">Shimmer Active</p>
            </div>
            <div style="background: url('https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=400&q=80') center/cover; padding:24px; border-radius:16px; text-align:center; position:relative; overflow:hidden;">
              <div style="position:absolute;inset:0;background:rgba(0,0,0,0.15);"></div>
              <h5 style="color:white; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 16px; position:relative; z-index:1; text-shadow:0 1px 4px rgba(0,0,0,0.4);">Glassmorphism</h5>
              <div style="display:flex; gap:12px; justify-content:center; position:relative; z-index:1;">
                <ui-avatar glass="true" size="l" content="G"></ui-avatar>
                <ui-avatar glass="true" shape="square" size="l" content="G"></ui-avatar>
              </div>
              <p style="font-size:10px; color:white; font-weight:700; margin:12px 0 0; text-transform:uppercase; letter-spacing:0.05em; text-shadow:0 1px 4px rgba(0,0,0,0.5); position:relative; z-index:1;">Frosted Glass</p>
            </div>
            <div style="background:white; padding:24px; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.04); text-align:center;">
              <h5 style="color:#ec4899; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 16px;">3D &amp; Reflection</h5>
              <div style="display:flex; gap:16px; justify-content:center;">
                <ui-avatar size="l" bg-color="#0f172a" color="#fff" reflection="true" clickable="true" content="JD"></ui-avatar>
                <ui-avatar size="l" src="https://api.dicebear.com/7.x/miniavs/svg?seed=VIP" reflection="true" clickable="true"></ui-avatar>
              </div>
              <p style="font-size:10px; color:#ec4899; font-weight:700; margin:12px 0 0; text-transform:uppercase; letter-spacing:0.05em;">Hover for 3D</p>
            </div>
            <div style="background:white; padding:24px; border-radius:16px; box-shadow:0 4px 12px rgba(0,0,0,0.04); text-align:center;">
              <h5 style="color:#f59e0b; font-size:11px; text-transform:uppercase; letter-spacing:0.1em; margin:0 0 16px;">Segmented Stories</h5>
              <div style="display:flex; gap:16px; justify-content:center;">
                <ui-avatar size="l" story="true" segments="4" src="https://api.dicebear.com/7.x/miniavs/svg?seed=S1"></ui-avatar>
                <ui-avatar size="l" story="true" segments="8" src="https://api.dicebear.com/7.x/miniavs/svg?seed=S2"></ui-avatar>
              </div>
              <p style="font-size:10px; color:#f59e0b; font-weight:700; margin:12px 0 0; text-transform:uppercase; letter-spacing:0.05em;">4 &amp; 8 Segments</p>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  const showAvatarGroups = () => {
    updateActiveBtn('groups');
    container.innerHTML = `
      <div class="demo-grid" style="display: grid; grid-template-columns: 1fr; gap: 40px;">
        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Managed Stacking (Hover Shift)</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 24px;">Automatically stacks children with 3D shifting effect on hover. Excess avatars are grouped into a roster (+X).</p>
          
          <div style="display: flex; flex-direction: column; gap: 40px;">
             <div>
                <p style="font-size: 11px; font-weight: 600; color:var(--text-secondary,#64748b); margin-bottom: 12px;">SIZE: XL | MAX: 4</p>
                <ui-avatar group="true" size="xl" max-visible="4" animated="true">
                  <ui-avatar name="Alice Miller" src="/build/assets/images/logo.png"></ui-avatar>
                  <ui-avatar name="Bob Smith" src="/build/assets/images/logo.png" status="online" show-status="true"></ui-avatar>
                  <ui-avatar name="Charlie Brown" src="/build/assets/images/logo.png"></ui-avatar>
                  <ui-avatar name="David Grey" src="/build/assets/images/logo.png"></ui-avatar>
                  <ui-avatar name="Eve Wilson" src="/build/assets/images/logo.png"></ui-avatar>
                  <ui-avatar name="Frank Castle" src="/build/assets/images/logo.png"></ui-avatar>
                </ui-avatar>
             </div>

             <div>
                <p style="font-size: 11px; font-weight: 600; color:var(--text-secondary,#64748b); margin-bottom: 12px;">SHAPE: SQUIRCLE | BORDERED</p>
                <ui-avatar group="true" size="l" shape="squircle" group-border-color="#10b981" group-border-width="3">
                  <ui-avatar name="User A"></ui-avatar>
                  <ui-avatar name="User B" auto-color="true"></ui-avatar>
                  <ui-avatar name="User C"></ui-avatar>
                  <ui-avatar name="User D" auto-color="true"></ui-avatar>
                  <ui-avatar name="User E"></ui-avatar>
                </ui-avatar>
             </div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Responsive Grid Layout</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 24px;">For displaying a large number of participants in a compact space.</p>
          <ui-avatar group="true" layout="grid" spacing="8" size="m" shape="squircle">
            <ui-avatar name="Participant 1" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 2" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 3" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 4" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 5" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 6" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 7" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 8" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 9" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 10" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 11" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
            <ui-avatar name="Participant 12" auto-color="true" src="/build/assets/images/logo.png"></ui-avatar>
          </ui-avatar>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Animated Group — Smooth Hover Shift</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 24px;">Add <code>animated="true"</code> and <code>overlap</code> to the group for the Phase 8 hover-shift effect — hover an avatar to see siblings smoothly shift away.</p>
          <ui-avatar group="true" animated="true" overlap="-12" size="l">
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=1" tooltip-text="Alice"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=2" tooltip-text="Bob"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=3" tooltip-text="Charlie"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=4" tooltip-text="Diana"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=5" tooltip-text="Ethan"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=6" tooltip-text="Fiona"></ui-avatar>
          </ui-avatar>
          <p style="font-size: 11px; color:var(--text-secondary,#64748b); margin-top: 12px;">Usage: <code>&lt;ui-avatar group="true" animated="true" overlap="-12"&gt;</code></p>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Size Comparison</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 24px;">Groups scale uniformly across the standard size scale — <code>s</code>, <code>m</code>, and <code>l</code> shown side-by-side.</p>
          <div style="display: flex; gap: 48px; align-items: center; flex-wrap: wrap;">
            <div>
              <p style="font-size: 11px; font-weight: 600; color:var(--text-secondary,#64748b); margin: 0 0 12px; text-transform: uppercase;">Small (s)</p>
              <ui-avatar group="true" size="s">
                <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=10" tooltip-text="User A"></ui-avatar>
                <ui-avatar icon="user" icon-library="fontawesome" bg-color="#f56a00" tooltip-text="User B"></ui-avatar>
                <ui-avatar content="A" bg-color="#87d068" tooltip-text="User C"></ui-avatar>
              </ui-avatar>
            </div>
            <div>
              <p style="font-size: 11px; font-weight: 600; color:var(--text-secondary,#64748b); margin: 0 0 12px; text-transform: uppercase;">Medium (m)</p>
              <ui-avatar group="true" size="m">
                <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=11" tooltip-text="User A"></ui-avatar>
                <ui-avatar icon="user" icon-library="fontawesome" bg-color="#f56a00" tooltip-text="User B"></ui-avatar>
                <ui-avatar content="A" bg-color="#87d068" tooltip-text="User C"></ui-avatar>
              </ui-avatar>
            </div>
            <div>
              <p style="font-size: 11px; font-weight: 600; color:var(--text-secondary,#64748b); margin: 0 0 12px; text-transform: uppercase;">Large (l)</p>
              <ui-avatar group="true" size="l">
                <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=12" tooltip-text="User A"></ui-avatar>
                <ui-avatar icon="user" icon-library="fontawesome" bg-color="#f56a00" tooltip-text="User B"></ui-avatar>
                <ui-avatar content="A" bg-color="#87d068" tooltip-text="User C"></ui-avatar>
              </ui-avatar>
            </div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Text Avatars — Shape Variants &amp; Overflow Popover</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 24px;">Initial-based avatars in groups. Set <code>max-visible</code> to cap the count and <code>enable-popover</code> for the overflow roster popup.</p>
          <div style="display: flex; flex-direction: column; gap: 24px;">
            <div>
              <p style="font-size: 11px; font-weight: 600; color:var(--text-secondary,#64748b); margin: 0 0 12px; text-transform: uppercase;">Circle (default) — max-visible=4</p>
              <ui-avatar group="true" max-visible="4" enable-popover="true" size="m">
                <ui-avatar content="A" bg-color="#1890ff" tooltip-text="Alice Johnson"></ui-avatar>
                <ui-avatar content="B" bg-color="#52c41a" tooltip-text="Bob Smith"></ui-avatar>
                <ui-avatar content="C" bg-color="#faad14" tooltip-text="Charlie Brown"></ui-avatar>
                <ui-avatar content="D" bg-color="#f5222d" tooltip-text="Diana Prince"></ui-avatar>
                <ui-avatar content="E" bg-color="#722ed1" tooltip-text="Emily Davis"></ui-avatar>
                <ui-avatar content="F" bg-color="#eb2f96" tooltip-text="Frank Miller"></ui-avatar>
              </ui-avatar>
            </div>
            <div>
              <p style="font-size: 11px; font-weight: 600; color:var(--text-secondary,#64748b); margin: 0 0 12px; text-transform: uppercase;">Square shape — max-visible=4</p>
              <ui-avatar group="true" max-visible="4" shape="square" size="m">
                <ui-avatar content="A" bg-color="#1890ff" tooltip-text="Alice Johnson"></ui-avatar>
                <ui-avatar content="B" bg-color="#52c41a" tooltip-text="Bob Smith"></ui-avatar>
                <ui-avatar content="C" bg-color="#faad14" tooltip-text="Charlie Brown"></ui-avatar>
                <ui-avatar content="D" bg-color="#f5222d" tooltip-text="Diana Prince"></ui-avatar>
                <ui-avatar content="E" bg-color="#722ed1" tooltip-text="Emily Davis"></ui-avatar>
                <ui-avatar content="F" bg-color="#eb2f96" tooltip-text="Frank Miller"></ui-avatar>
              </ui-avatar>
            </div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 24px; color:var(--text-primary,#1e293b); border-bottom: 1px solid #f1f5f9; padding-bottom: 12px;">Group with Mixed Status</h4>
          <p style="color:var(--text-secondary,#64748b); font-size: 13px; margin-bottom: 24px;">Status indicators are preserved per-avatar inside groups — showing each member's individual presence state.</p>
          <ui-avatar group="true" max-visible="5" size="l">
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=30" show-status="true" status="online" tooltip-text="Sarah — Online"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=31" show-status="true" status="away" tooltip-text="Mike — Away"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=32" show-status="true" status="busy" tooltip-text="Alex — Busy"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=33" show-status="true" status="offline" tooltip-text="Emma — Offline"></ui-avatar>
            <ui-avatar content="+3" bg-color="#1890ff" show-status="true" status="dnd" tooltip-text="+3 others (DND)"></ui-avatar>
          </ui-avatar>
        </div>
      </div>
    `;
  };

  const showReferenceCoverage = () => {
    updateActiveBtn('reference');
    const responsiveAvatarId = `responsiveAvatar_${targetId}`;
    const clickAvatarId = `clickableAvatar_${targetId}`;
    const clickMsgId = `clickMessage_${targetId}`;

    container.innerHTML = `
      <div class="demo-grid" style="display:grid; grid-template-columns: repeat(auto-fit, minmax(420px, 1fr)); gap: 28px;">
        <div class="demo-card">
          <h4 style="margin-bottom: 14px;">Badge Overlay Positions</h4>
          <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
            <ui-avatar name="Jane Doe" badge="3" badge-position="top-right" badge-color="#ef4444" size="l"></ui-avatar>
            <ui-avatar name="John Smith" badge="99+" badge-position="bottom-right" badge-color="#10b981" size="l"></ui-avatar>
            <ui-avatar name="Alice Brown" badge="NEW" badge-position="top-left" badge-color="#f59e0b" size="l"></ui-avatar>
            <ui-avatar name="Bob Wilson" badge="!" badge-position="bottom-left" badge-color="#0ea5e9" size="l"></ui-avatar>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 14px;">Image Fit Modes</h4>
          <div style="display:flex; gap:16px; flex-wrap:wrap; align-items:center;">
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=8" fit="cover" size="l"></ui-avatar><p style="font-size:11px;margin-top:6px;">cover</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=8" fit="contain" size="l"></ui-avatar><p style="font-size:11px;margin-top:6px;">contain</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=8" fit="fill" size="l"></ui-avatar><p style="font-size:11px;margin-top:6px;">fill</p></div>
            <div style="text-align:center;"><ui-avatar src="https://i.pravatar.cc/150?img=8" fit="scale-down" size="l"></ui-avatar><p style="font-size:11px;margin-top:6px;">scale-down</p></div>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 14px;">Custom Borders + Tooltip</h4>
          <div style="display:flex; gap:16px; align-items:center; flex-wrap:wrap;">
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=14" border="2px solid #1890ff" tooltip-text="Premium User" size="l"></ui-avatar>
            <ui-avatar icon="user" icon-library="fontawesome" bg-color="#87d068" border="3px dashed #f56a00" tooltip-text="Active Member" size="l"></ui-avatar>
            <ui-avatar content="VIP" bg-color="#722ed1" color="#fff" border="2px solid #eb2f96" tooltip-text="VIP Member" size="l"></ui-avatar>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 14px;">Lazy Loading + Clickable Event</h4>
          <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap;">
            <div style="text-align:center;">
              <ui-avatar src="https://i.pravatar.cc/150?img=20" lazy="true" size="l"></ui-avatar>
              <p style="font-size:11px;margin-top:6px;">lazy=true</p>
            </div>
            <div style="text-align:center;">
              <ui-avatar id="${clickAvatarId}" name="Click Me" clickable="true" size="xl" animation="pulse"></ui-avatar>
              <p style="font-size:11px;margin-top:6px;">clickable</p>
            </div>
          </div>
          <div id="${clickMsgId}" style="margin-top:8px; font-size:12px; color:var(--text-secondary,#64748b);">Click the avatar to trigger interaction.</div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 14px;">Responsive Size</h4>
          <p style="font-size:12px; color:var(--text-secondary,#64748b); margin-bottom:12px;">Resize viewport: avatar adapts per breakpoint map.</p>
          <div style="display:flex; align-items:center; gap:16px;">
            <ui-avatar id="${responsiveAvatarId}" icon="user" icon-library="fontawesome" size="m"></ui-avatar>
            <code style="font-size:11px;">{ xs:24, sm:32, md:40, lg:48, xl:64 }</code>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 14px;">Icon Matrix</h4>
          <div style="display:flex; gap:12px; flex-wrap:wrap; align-items:center;">
            <ui-avatar icon="user" icon-library="fontawesome" bg-color="#1890ff"></ui-avatar>
            <ui-avatar icon="robot" icon-library="fontawesome" bg-color="#722ed1"></ui-avatar>
            <ui-avatar icon="crown" icon-library="fontawesome" bg-color="#f56a00"></ui-avatar>
            <ui-avatar icon="star" icon-library="fontawesome" bg-color="#faad14"></ui-avatar>
            <ui-avatar icon="heart" icon-library="fontawesome" bg-color="#eb2f96"></ui-avatar>
            <ui-avatar icon="github" icon-library="fontawesome" bg-color="#000"></ui-avatar>
          </div>
        </div>

        <div class="demo-card">
          <h4 style="margin-bottom: 14px;">Tooltips &amp; Group Popover</h4>
          <p style="font-size: 12px; color:var(--text-secondary,#64748b); margin-bottom: 12px;">Hover over individual avatars to see <code>tooltip-text</code>. Hover over the <strong>+N</strong> overflow counter to see a popover listing all hidden members via <code>enable-popover</code>.</p>
          <div style="display:flex; gap:20px; align-items:center; flex-wrap:wrap; margin-bottom:20px;">
            <ui-avatar content="AJ" bg-color="#1890ff" tooltip-text="Alice Johnson — Product Manager" size="l"></ui-avatar>
            <ui-avatar icon="code" icon-library="lucide" bg-color="#52c41a" tooltip-text="Bob Smith — Senior Developer" size="l"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=20" tooltip-text="Charlie Brown — UX Designer" size="l"></ui-avatar>
          </div>
          <p style="font-size: 11px; font-weight:600; color:var(--text-secondary,#64748b); margin-bottom:10px; text-transform:uppercase;">Group with overflow popover (max=3)</p>
          <ui-avatar group="true" max-visible="3" enable-popover="true" size="l">
            <ui-avatar content="AJ" bg-color="#1890ff" tooltip-text="Alice Johnson"></ui-avatar>
            <ui-avatar content="BS" bg-color="#52c41a" tooltip-text="Bob Smith"></ui-avatar>
            <ui-avatar content="CB" bg-color="#faad14" tooltip-text="Charlie Brown"></ui-avatar>
            <ui-avatar content="DP" bg-color="#f5222d" tooltip-text="Diana Prince"></ui-avatar>
            <ui-avatar content="ED" bg-color="#722ed1" tooltip-text="Emily Davis"></ui-avatar>
            <ui-avatar content="FM" bg-color="#eb2f96" tooltip-text="Frank Miller"></ui-avatar>
          </ui-avatar>
          <p style="font-size: 11px; font-weight:600; color:var(--text-secondary,#64748b); margin-top:16px; margin-bottom:10px; text-transform:uppercase;">Image group with popover (max=4)</p>
          <ui-avatar group="true" max-visible="4" enable-popover="true" size="l">
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=21" tooltip-text="Alex Turner — CEO"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=22" tooltip-text="Sarah Connor — CTO"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=23" tooltip-text="Mike Ross — CFO"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=24" tooltip-text="Rachel Green — CMO"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=25" tooltip-text="Tom Hardy — VP Engineering"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=26" tooltip-text="Emma Watson — VP Design"></ui-avatar>
            <ui-avatar src="https://api.dicebear.com/7.x/miniavs/svg?seed=27" tooltip-text="Chris Evans — VP Sales"></ui-avatar>
          </ui-avatar>
        </div>
      </div>
    `;

    const responsiveAvatar = section.querySelector(`#${responsiveAvatarId}`);
    if (responsiveAvatar) {
      responsiveAvatar.responsiveSize = { xs: 24, sm: 32, md: 40, lg: 48, xl: 64 };
    }

    const clickableAvatar = section.querySelector(`#${clickAvatarId}`);
    const clickMsg = section.querySelector(`#${clickMsgId}`);
    if (clickableAvatar && clickMsg) {
      clickableAvatar.addEventListener('avatarClick', () => {
        clickMsg.textContent = `Avatar clicked at ${new Date().toLocaleTimeString()}`;
      });
    }
  };

  const updateAvatarPlayground = () => {
    const val = section.querySelector('#playValue').value;
    const shape = section.querySelector('#playShape').value;
    const size = section.querySelector('#playSize').value;
    const library = section.querySelector('#playLibrary').value;
    const status = section.querySelector('#playStatus').value;
    const statusPos = section.querySelector('#playStatusPos').value;
    const indicatorSize = section.querySelector('#playIndicatorSize').value;
    const anim = section.querySelector('#playAnim').value;

    const showStatus = section.querySelector('#playShowStatus')?.checked || section.querySelector('#playShowStatus')?.getAttribute('checked') === 'true';
    const pulse = section.querySelector('#playPulse')?.checked || section.querySelector('#playPulse')?.getAttribute('checked') === 'true';
    const speaker = section.querySelector('#playSpeaker')?.checked || section.querySelector('#playSpeaker')?.getAttribute('checked') === 'true';
    const story = section.querySelector('#playStory')?.checked || section.querySelector('#playStory')?.getAttribute('checked') === 'true';
    const verified = section.querySelector('#playVerified')?.checked || section.querySelector('#playVerified')?.getAttribute('checked') === 'true';
    const glass = section.querySelector('#playGlass')?.checked || section.querySelector('#playGlass')?.getAttribute('checked') === 'true';
    const threeD = section.querySelector('#play3D')?.checked || section.querySelector('#play3D')?.getAttribute('checked') === 'true';
    const reflection = section.querySelector('#playReflection')?.checked || section.querySelector('#playReflection')?.getAttribute('checked') === 'true';

    const props = [];
    if (val.includes('://') || val.startsWith('/') || val.startsWith('data:')) {
      props.push(`src="${val}"`);
    } else if (val.length > 0 && val.length <= 3) {
      props.push(`content="${val}"`);
    } else if (val.length > 0) {
      props.push(`icon="${val}"`);
      if (library !== 'default') props.push(`icon-library="${library}"`);
    }

    props.push(`shape="${shape}"`);
    props.push(`size="${size}"`);

    const statusCheckbox = section.querySelector('#playShowStatus');
    if (status && statusCheckbox && !statusCheckbox.checked) {
      statusCheckbox.checked = true;
    }

    if (showStatus || statusCheckbox?.checked) props.push(`show-status`);
    if (status) props.push(`status="${status}"`);
    if ((showStatus || status) && statusPos !== 'bottom-right') props.push(`status-position="${statusPos}"`);
    if (indicatorSize) props.push(`indicator-size="${indicatorSize}"`);
    if (pulse) props.push(`status-pulse`);

    if (anim !== 'none') props.push(`animation="${anim}"`);
    if (speaker) props.push(`active-speaker`);
    if (story) props.push(`story`);
    if (verified) props.push(`verified`);
    if (glass) props.push(`glass`);
    if (threeD) props.push(`three-d`);
    if (reflection) props.push(`reflection`);

    const output = section.querySelector('#playOutput');
    const code = section.querySelector('#playCode');

    const html = `<ui-avatar ${props.join(' ')}></ui-avatar>`;
    if (output) output.innerHTML = html;
    if (code) code.innerText = `<ui-avatar\n  ${props.join('\n  ')}\n></ui-avatar>`;
  };

  const copyAvatarPlaygroundCode = btn => {
    const codeEl = section.querySelector('#playCode');
    if (!codeEl) return;

    const code = codeEl.innerText;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(code).then(() => {
        const originalLabel = btn.label;
        btn.label = 'COPIED!';
        btn.color = 'success';
        setTimeout(() => {
          btn.label = originalLabel;
          btn.color = 'secondary';
        }, 2000);
      });
    }
  };

  const showInteractiveAvatar = () => {
    updateActiveBtn('playground');
    container.innerHTML = `
      <div style="display: grid; grid-template-columns: 350px 1fr; gap: 40px;">
        <!-- Controls -->
        <div style="background:var(--bg-secondary,#f8fafc); padding: 24px; border-radius: 16px; border:1px solid var(--border-default,#e2e8f0); display: flex; flex-direction: column; gap: 20px;">
          <h5 style="margin: 0; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; color:var(--text-secondary,#64748b);">Visual Configuration</h5>
          
          <ui-input id="playValue" label="Source Value" value="/build/assets/images/logo.png" placeholder="URL, Initials or Icon name"></ui-input>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <ui-dropdown id="playShape" label="Shape" value="circle">
              <optgroup label="Geometric Shapes">
                <option value="circle">Circle</option>
                <option value="squircle">Squircle</option>
                <option value="hexagon">Hexagon</option>
                <option value="square">Square</option>
              </optgroup>
            </ui-dropdown>
            <ui-dropdown id="playSize" label="Size" value="m">
              <optgroup label="Sizing Scale">
                <option value="xs">XS (24px)</option>
                <option value="s">S (32px)</option>
                <option value="m">M (40px)</option>
                <option value="l">L (48px)</option>
                <option value="xl">XL (64px)</option>
                <option value="120">120px</option>
              </optgroup>
            </ui-dropdown>
          </div>
          
          <ui-dropdown id="playLibrary" label="Icon Library" value="lucide">
            <option value="default">Default</option>
            <option value="lucide">Lucide</option>
            <option value="fontawesome">FontAwesome</option>
            <option value="icons8">Icons8</option>
            <option value="iconoir">Iconoir</option>
            <option value="ionicons">Ionicons</option>
            <option value="bootstrap">Bootstrap</option>
            <option value="se">SE Icons</option>
          </ui-dropdown>

          <h5 style="margin: 20px 0 0; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; color:var(--text-secondary,#64748b);">Presence & Status</h5>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
            <ui-dropdown id="playStatus" label="Status" value="">
              <option value="">None</option>
              <option value="online">Online</option>
              <option value="away">Away</option>
              <option value="busy">Busy</option>
              <option value="dnd">DND</option>
            </ui-dropdown>
            <ui-dropdown id="playStatusPos" label="Position" value="bottom-right">
              <option value="bottom-right">Bottom-Right</option>
              <option value="bottom-left">Bottom-Left</option>
              <option value="top-right">Top-Right</option>
              <option value="top-left">Top-Left</option>
            </ui-dropdown>
          </div>

          <ui-dropdown id="playIndicatorSize" label="Indicator Size" value="">
            <option value="">Default</option>
            <option value="8">8px</option>
            <option value="10">10px</option>
            <option value="14">14px</option>
            <option value="18">18px</option>
            <option value="1rem">1rem</option>
          </ui-dropdown>

          <ui-dropdown id="playAnim" label="Animation" value="none">
            <option value="none">None</option>
            <option value="pulse">Pulse</option>
            <option value="ring">Ring</option>
            <option value="glow">Glow</option>
          </ui-dropdown>

          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px;">
             <ui-checkbox id="playShowStatus" label="Show Status"></ui-checkbox>
             <ui-checkbox id="playPulse" label="Status Pulse"></ui-checkbox>
             <ui-checkbox id="playSpeaker" label="Active Speaker"></ui-checkbox>
             <ui-checkbox id="playStory" label="Story Ring"></ui-checkbox>
          </div>

          <h5 style="margin: 20px 0 0; font-weight: 800; text-transform: uppercase; font-size: 11px; letter-spacing: 0.1em; color:var(--text-secondary,#64748b);">Advanced Effects</h5>
          
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
             <ui-checkbox id="playVerified" label="Verified"></ui-checkbox>
             <ui-checkbox id="playGlass" label="Glassmorphism"></ui-checkbox>
             <ui-checkbox id="play3D" label="3D Interaction"></ui-checkbox>
             <ui-checkbox id="playReflection" label="Reflection"></ui-checkbox>
          </div>
        </div>

        <!-- Preview -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
           <div style="flex: 1; min-height: 300px; background:var(--bg-tertiary,#f1f5f9); border-radius: 16px; display: flex; align-items: center; justify-content: center; position: relative; overflow: hidden;">
              <!-- Background pattern -->
              <div style="position: absolute; inset: 0; opacity: 0.05; background-image: radial-gradient(#000 1px, transparent 1px); background-size: 20px 20px;"></div>
              
              <div id="playOutput" style="transform: scale(2.5);">
                 <ui-avatar src="/build/assets/images/logo.png" size="m"></ui-avatar>
              </div>
           </div>

           <div style="background: #1e293b; padding: 24px; border-radius: 16px; color: #e2e8f0; font-family: 'JetBrains Mono', monospace; font-size: 13px; position: relative;">
              <ui-button id="copyCodeBtn" variant="outline" color="secondary" label="COPY CODE" size="md"yle="position: absolute; top: 12px; right: 12px;"></ui-button>
              <pre id="playCode" style="margin: 0; overflow-x: auto;">&lt;ui-avatar ...&gt;&lt;/ui-avatar&gt;</pre>
           </div>
        </div>
      </div>

      <style>
        .control-label { display: flex; flex-direction: column; gap: 6px; font-size: 12px; font-weight: 600; color: #475569; }
        .control-input, .control-select { padding: 8px 12px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 13px; color:var(--text-primary,#1e293b); transition: border-color 0.2s; }
        .control-input:focus, .control-select:focus { border-color: #10b981; outline: none; box-shadow: 0 0 0 3px rgba(59, 130, 246, 0.1); }
        .demo-card { padding: 24px; background:var(--bg-primary,white); border:1px solid var(--border-subtle,#f1f5f9); border-radius: 16px; transition: transform 0.3s ease; }
        .demo-card:hover { transform: translateY(-4px); border-color:var(--border-default,#e2e8f0); box-shadow: 0 10px 30px rgba(0,0,0,0.02); }
      </style>
    `;

    const playgroundControls = [
      { id: 'playValue', event: 'inputChange' },
      { id: 'playShape', event: 'valueChange' },
      { id: 'playSize', event: 'valueChange' },
      { id: 'playLibrary', event: 'valueChange' },
      { id: 'playStatus', event: 'valueChange' },
      { id: 'playStatusPos', event: 'valueChange' },
      { id: 'playIndicatorSize', event: 'valueChange' },
      { id: 'playAnim', event: 'valueChange' },
      { id: 'playShowStatus', event: 'checkboxChange' },
      { id: 'playPulse', event: 'checkboxChange' },
      { id: 'playSpeaker', event: 'checkboxChange' },
      { id: 'playStory', event: 'checkboxChange' },
      { id: 'playVerified', event: 'checkboxChange' },
      { id: 'playGlass', event: 'checkboxChange' },
      { id: 'play3D', event: 'checkboxChange' },
      { id: 'playReflection', event: 'checkboxChange' },
    ];

    playgroundControls.forEach(control => {
      const el = container.querySelector(`#${control.id}`);
      if (el) {
        el.addEventListener(control.event, updateAvatarPlayground);
      }
    });

    const copyBtn = container.querySelector('#copyCodeBtn');
    if (copyBtn) {
      copyBtn.addEventListener('click', () => copyAvatarPlaygroundCode(copyBtn));
    }

    setTimeout(updateAvatarPlayground, 20);
  };

  const demoMap = {
    playground: showInteractiveAvatar,
    styles: showVisualStyles,
    presence: showStatusAndPresence,
    social: showSocialFeatures,
    groups: showAvatarGroups,
    reference: showReferenceCoverage,
  };

  // --- Initialization ---

  const nav = section.querySelector(`#avatarNavPills_${targetId}`);
  if (nav) {
    nav.querySelectorAll('ui-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const demo = btn.dataset.demo;
        if (demoMap[demo]) demoMap[demo]();
      });
    });
  }

  // Default View
  showInteractiveAvatar();
}

export function initAvatarGroupDemo() {
  initAvatarDemo('avatar-group');
}
