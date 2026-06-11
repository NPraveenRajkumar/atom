// Component Demo Functions
export function initRatingDemo() {
  const section = document.getElementById('rating');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header" style="margin-bottom: 32px;">
      <p style="margin-top: 0; opacity: 0.7; font-size: 14px;">Master-tier rating system with precision fractional selection, atmospheric interaction glows, and premium material archetypes.</p>
    </div>
    
    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 12px; flex-wrap: wrap;">
      <ui-button onclick="showInteractiveRating()" class="demo-btn secondary" variant="outline">🎮 Playground</ui-button>
      <ui-button onclick="showEliteRatingSpecimens()" class="demo-btn primary" variant="outline">✨ Elite Specimens</ui-button>
      <ui-button onclick="showStarRating()" class="demo-btn info" variant="outline">⭐ Star Engine</ui-button>
      <ui-button onclick="showSmileyRating()" class="demo-btn success" variant="outline">😊 Expressive</ui-button>
      <ui-button onclick="showThumbRating()" class="demo-btn warning" variant="outline">👍 Sentiment</ui-button>
      <ui-button onclick="showRatingColors()" class="demo-btn secondary" variant="outline">🎨 Colors</ui-button>
      <ui-button onclick="showRatingSizes()" class="demo-btn secondary" variant="outline">📏 Sizes</ui-button>
    </div>

    <div id="ratingDemoContainer" style="margin-top: 20px;"></div>
  `;

  // Start with specimens for cinematic impact
  setTimeout(() => window.showEliteRatingSpecimens(), 50);

  window.showInteractiveRating = function () {
    const container = document.getElementById('ratingDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block reveal-fade-in">
        <h3 class="specimen-title">🎮 Interactive Playground</h3>
        <div class="playground-settings" style="padding: 24px; border-radius: 16px; margin-bottom: 24px;">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(220px, 1fr)); gap: 20px;">
            <div class="form-group">
               <label>Rating Type</label>
               <ui-dropdown id="ratingType" onchange="updateInteractiveRating()" class="demo-select">
                 <option value="star" selected>Star Substrate</option>
                 <option value="smiley">Smiley Set</option>
                 <option value="thumb">Sentiment (Thumbs)</option>
               </ui-dropdown>
            </div>
            <div class="form-group">
               <label>Value</label>
               <ui-input type="number" id="ratingValue" value="3.5" min="0" max="5" step="0.5" oninput="updateInteractiveRating()" class="demo-input">
            </div>
            <div class="form-group">
               <label>Precision Size</label>
               <ui-dropdown id="ratingSize" onchange="updateInteractiveRating()" class="demo-select">
                 <option value="xxs">XXS (Sub-atomic)</option>
                 <option value="xs">XS (Atomic)</option>
                 <option value="sm">Small</option>
                 <option value="md" selected>md</option>
                 <option value="lg">Large</option>
                 <option value="xl">XL (Epic)</option>
                 <option value="xxl">XXL (Titan)</option>
                 <option value="xxxl">XXXL (Colossal)</option>
               </ui-dropdown>
            </div>
            <div class="form-group">
               <label>Material Variant</label>
               <ui-dropdown id="ratingVariant" onchange="updateInteractiveRating()" class="demo-select">
                 <option value="default" selected>Default</option>
                 <option value="glass">Glassmorphism</option>
                 <option value="raised">Raised Relief</option>
               </ui-dropdown>
            </div>
            <div class="form-group">
               <label>Color Palette</label>
               <ui-dropdown id="ratingColor" onchange="updateInteractiveRating()" class="demo-select">
                 <option value="warning" selected>Warning (Gold)</option>
                 <option value="primary">Primary (Blue)</option>
                 <option value="success">Success (Emerald)</option>
                 <option value="danger">Danger (Rose)</option>
                 <option value="info">Info (Sky)</option>
                 <option value="secondary">Secondary (Slate)</option>
               </ui-dropdown>
            </div>
            <div class="form-group">
               <label>Custom Icon (Lucide)</label>
               <ui-input type="text" id="ratingIcon" value="star" placeholder="heart, shield, star" oninput="updateInteractiveRating()" class="demo-input">
            </div>
            <div class="form-group">
               <label>Custom Image (URL)</label>
               <ui-input type="text" id="ratingImage" value="" placeholder="https://..." oninput="updateInteractiveRating()" class="demo-input">
            </div>
            <div class="form-group">
               <label>Heatmap (Color Map JSON)</label>
               <ui-input type="text" id="ratingColorMap" value="" placeholder='["danger", "success"]' oninput="updateInteractiveRating()" class="demo-input">
            </div>
            <div class="form-group">
               <label>Helper Text</label>
               <ui-input type="text" id="ratingHelper" value="Select a grade" oninput="updateInteractiveRating()" class="demo-input">
            </div>
            <div class="form-group">
               <label>Error Message</label>
               <ui-input type="text" id="ratingError" value="This field is required" oninput="updateInteractiveRating()" class="demo-input">
            </div>
            <div class="form-group" style="display: flex; gap: 16px; align-items: flex-end; padding-bottom: 8px;">
               <ui-checkbox id="ratingInvalid" label="⚠️ Invalid" oncheckboxchange="updateInteractiveRating()"></ui-checkbox>
               <ui-checkbox id="ratingShowReviews" label="👥 Show Reviews" oncheckboxchange="updateInteractiveRating()"></ui-checkbox>
            </div>
            <div class="form-group">
               <label>Total Reviews</label>
               <ui-input type="number" id="ratingTotalReviews" value="1250" oninput="updateInteractiveRating()" class="demo-input">
            </div>
            <div class="form-group">
               <label>Tactical Description</label>
               <ui-input type="text" id="ratingDesc" value="How satisfied are you with this module?" oninput="updateInteractiveRating()" class="demo-input">
            </div>
            <div class="form-group">
               <label>Description Position</label>
               <ui-dropdown id="ratingDescPos" onchange="updateInteractiveRating()" class="demo-select">
                 <option value="bottom" selected>Bottom</option>
                 <option value="side">Side (Dense)</option>
               </ui-dropdown>
            </div>

            <div class="form-group" style="display: flex; gap: 16px; align-items: flex-end; padding-bottom: 8px; grid-column: span 2;">
               <ui-checkbox id="ratingGlow" checked label="🕯️ Glow" oncheckboxchange="updateInteractiveRating()"></ui-checkbox>
               <ui-checkbox id="ratingVictory" checked label="🏆 Victory Pulse" oncheckboxchange="updateInteractiveRating()"></ui-checkbox>
               <ui-checkbox id="ratingHalf" checked label="½ Half Stars" oncheckboxchange="updateInteractiveRating()"></ui-checkbox>
               <ui-checkbox id="ratingHaptic" checked label="🧠 Haptic" oncheckboxchange="updateInteractiveRating()"></ui-checkbox>
            </div>
          </div>
        </div>

        <div class="playground-preview" style="padding: 60px; min-height: 200px; position: relative; overflow: hidden;">
          <ui-rating id="playgroundRating" value="3.5" allow-half glow victory-glow></ui-rating>
        </div>

        <div style="margin-top: 24px;">
          <ui-code-preview id="ratingCodePreview" label="Implementation Code" expanded="false"></ui-code-preview>
        </div>
      </div>
    `;
    setTimeout(() => initializeRatingBehaviors(), 50);
  };

  window.showEliteRatingSpecimens = function() {
    const container = document.getElementById('ratingDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up" style="background:var(--bg-secondary,#f8fafc); padding: 40px; border-radius: 32px; border:1px solid var(--border-default,#e2e8f0);">
        <div style="display: flex; align-items: center; gap: 12px; margin-bottom: 8px;">
           <span style="font-size: 2rem;">⭐</span>
           <h2 style="font-size: 2.25rem; font-weight: 800; color:var(--text-primary,#1e293b); margin: 0;">Rating & Feedback</h2>
        </div>
        <p style="color:var(--text-secondary,#64748b); font-size: 1.1rem; margin-bottom: 40px; max-width: 800px;">
           Versatile feedback components supporting stars, smilies, and thumbs. Includes support for half-ratings and custom labels.
        </p>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(400px, 1fr)); gap: 24px; margin-bottom: 24px;">
           <!-- Star System -->
           <div style="background:var(--bg-primary,white); border-radius: 20px; padding: 24px; border:1px solid var(--border-default,#e2e8f0); display: flex; flex-direction: column; gap: 32px;">
              <div>
                 <h4 style="color:var(--text-primary,#1e293b); font-weight: 700; margin-bottom: 16px;">Star System</h4>
                 <div style="margin-bottom: 24px;">
                    <p style="color: #10b981; font-weight: 700; font-size: 13px; margin-bottom: 12px; text-transform: uppercase;">Standard Rating</p>
                    <ui-rating value="3" color="warning" size="md"></ui-rating>
                 </div>
                 <div style="margin-bottom: 24px;">
                    <p style="color: #10b981; font-weight: 700; font-size: 13px; margin-bottom: 12px; text-transform: uppercase;">Half-Star Support</p>
                    <ui-rating value="3.5" allow-half color="success" size="md"></ui-rating>
                 </div>
                 <div>
                    <p style="color: #10b981; font-weight: 700; font-size: 13px; margin-bottom: 12px; text-transform: uppercase;">Read-only Display</p>
                    <div style="display: flex; align-items: center; gap: 16px;">
                       <ui-rating value="4.2" readonly allow-half color="warning" size="md"></ui-rating>
                       <span style="color: #10b981; font-size: 13px; font-weight: 600; opacity: 0.6;">4.2 / 5</span>
                    </div>
                 </div>
              </div>
           </div>

           <!-- Alternate Feedback -->
           <div style="background:var(--bg-primary,white); border-radius: 20px; padding: 24px; border:1px solid var(--border-default,#e2e8f0); display: flex; flex-direction: column; gap: 32px;">
              <div>
                 <h4 style="color:var(--text-primary,#1e293b); font-weight: 700; margin-bottom: 16px;">Alternate Feedback Types</h4>
                 <div style="margin-bottom: 24px;">
                    <p style="color: #10b981; font-weight: 700; font-size: 13px; margin-bottom: 12px; text-transform: uppercase;">How satisfied are you?</p>
                    <ui-rating 
                      type="smiley" 
                      value="5" 
                      size="lg" 
                      show-summary 
                      labels='["Terrible", "Bad", "OK", "Good", "Excellent"]'
                    ></ui-rating>
                 </div>
                 <div style="border-top: 1px solid #f1f5f9; padding-top: 24px;">
                    <p style="color:var(--accent-indigo,#6366f1); font-weight: 700; font-size: 13px; margin-bottom: 12px; text-transform: uppercase;">Legacy Emoji Vibe (from DreamUI)</p>
                    <ui-rating 
                      type="smiley" 
                      use-emoji
                      value="4" 
                      size="lg" 
                      labels='["Terrible", "Bad", "OK", "Good", "Excellent"]'
                    ></ui-rating>
                 </div>
                 <div style="border-top: 1px solid #f1f5f9; padding-top: 24px;">
                    <p style="color: #10b981; font-weight: 700; font-size: 13px; margin-bottom: 12px; text-transform: uppercase;">Helpful?</p>
                    <ui-rating type="thumb" value="1" size="lg" color="secondary"></ui-rating>
                 </div>
              </div>
           </div>
        </div>

        <!-- Footnote comparison -->
        <div style="background:var(--bg-primary,white); border-radius: 20px; padding: 32px; border:1px solid var(--border-default,#e2e8f0); display: flex; justify-content: space-between; align-items: flex-end; flex-wrap: wrap; gap: 24px;">
           <div style="display: flex; gap: 60px; align-items: flex-end;">
              <div style="text-align: center;">
                 <ui-rating value="3" color="warning" size="md" style="margin-bottom: 8px;"></ui-rating>
                 <p style="color:var(--text-primary,#1e293b); font-size: 14px; font-weight: 600;">Small</p>
              </div>
              <div style="text-align: center;">
                 <ui-rating value="4" color="warning" size="md" style="margin-bottom: 8px;"></ui-rating>
                 <p style="color:var(--text-primary,#1e293b); font-size: 14px; font-weight: 600;">md</p>
              </div>
              <div style="text-align: center;">
                 <ui-rating value="5" color="warning" size="lg" style="margin-bottom: 8px;"></ui-rating>
                 <p style="color:var(--text-primary,#1e293b); font-size: 14px; font-weight: 600;">Large</p>
              </div>
           </div>
           <div style="text-align: right;">
              <p style="color:var(--text-primary,#1e293b); font-weight: 700; font-size: 13px; margin-bottom: 12px;">Required Field <span style="color:var(--accent-red,#ef4444);">*</span></p>
              <ui-rating value="0" invalid error-message="Please provide a rating" size="md"></ui-rating>
           </div>
        </div>
      </div>
    `;
  }

  window.showStarRating = function() {
    const container = document.getElementById('ratingDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">⭐ Precision Star Engine</h3>
        <p class="specimen-description">Sub-pixel clipping for accurate fractional selection.</p>
        <div style="display: flex; flex-direction: column; gap: 24px; padding: 32px; background:var(--bg-primary,white); border-radius: 16px; border:1px solid var(--border-subtle,#f1f5f9);">
           <ui-rating value="1" color="warning" show-value labels='["Terrible", "Bad", "Average", "Good", "Excellent"]'></ui-rating>
           <ui-rating value="2.5" allow-half color="warning" show-value labels='["Terrible", "Bad", "Average", "Good", "Excellent"]'></ui-rating>
           <ui-rating value="4" color="warning" show-value labels='["Terrible", "Bad", "Average", "Good", "Excellent"]'></ui-rating>
           <ui-rating value="5" color="warning" victory-glow glow show-value labels='["Terrible", "Bad", "Average", "Good", "Excellent"]'></ui-rating>
        </div>
      </div>
    `;
  }

  window.showSmileyRating = function() {
    const container = document.getElementById('ratingDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">😊 Expressive Smiley Sets</h3>
        <p class="specimen-description">Lucide vector smileys with magnetic hover states.</p>
        <div style="padding: 32px; background:var(--bg-primary,white); border-radius: 16px; border:1px solid var(--border-subtle,#f1f5f9);">
           <ui-rating type="smiley" size="lg" color="primary" value="3" show-value labels='["Awful", "Poor", "Neutral", "Great", "Elite"]'></ui-rating>
        </div>
      </div>
    `;
  }

  window.showThumbRating = function() {
    const container = document.getElementById('ratingDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">👍 Sentinel Sentiment</h3>
        <div style="padding: 32px; background:var(--bg-primary,white); border-radius: 16px; border:1px solid var(--border-subtle,#f1f5f9); display: flex; gap: 32px;">
           <ui-rating type="thumb" size="lg" color="success" value="1" haptic></ui-rating>
           <ui-rating type="thumb" size="lg" color="danger" value="-1" haptic></ui-rating>
        </div>
      </div>
    `;
  }

  window.showRatingColors = function() {
    const container = document.getElementById('ratingDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">🎨 Semantic Color Scale</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fill, minmax(200px, 1fr)); gap: 32px;">
           <ui-rating color="primary" value="4" glow></ui-rating>
           <ui-rating color="warning" value="4" glow></ui-rating>
           <ui-rating color="success" value="4" glow></ui-rating>
           <ui-rating color="danger" value="4" glow></ui-rating>
        </div>
      </div>
    `;
  }

  window.showRatingSizes = function() {
    const container = document.getElementById('ratingDemoContainer');
    container.innerHTML = `
      <div class="demo-block reveal-slide-up">
        <h3 class="specimen-title">📏 High-Fidelity Scaling</h3>
        <div style="display: flex; flex-direction: column; gap: 32px; align-items: flex-start;">
           <ui-rating size="md" value="3.5" allow-half></ui-rating>
           <ui-rating size="md" value="3.5" allow-half></ui-rating>
           <ui-rating size="lg" value="3.5" allow-half></ui-rating>
        </div>
      </div>
    `;
  }

  showInteractiveRating();
}

function initializeRatingBehaviors() {
  const playgroundRating = document.getElementById('playgroundRating');
  if (!playgroundRating) return;

  window.updateInteractiveRating = function () {
    const type = document.getElementById('ratingType').value;
    const value = parseFloat(document.getElementById('ratingValue').value);
    const size = document.getElementById('ratingSize').value;
    const variant = document.getElementById('ratingVariant').value;
    const color = document.getElementById('ratingColor').value;
    const icon = document.getElementById('ratingIcon').value;
    const image = document.getElementById('ratingImage').value;
    const colorMap = document.getElementById('ratingColorMap').value;
    const helperText = document.getElementById('ratingHelper').value;
    const errorMsg = document.getElementById('ratingError').value;
    const invalid = document.getElementById('ratingInvalid').checked;
    const showReviews = document.getElementById('ratingShowReviews').checked;
    const totalReviews = parseInt(document.getElementById('ratingTotalReviews').value);
    const desc = document.getElementById('ratingDesc').value || '';
    const descPos = document.getElementById('ratingDescPos').value;
    const glow = document.getElementById('ratingGlow').checked;
    const victory = document.getElementById('ratingVictory').checked;
    const half = document.getElementById('ratingHalf').checked;
    const haptic = document.getElementById('ratingHaptic').checked;

    playgroundRating.type = type;
    playgroundRating.value = value;
    playgroundRating.size = size;
    playgroundRating.variant = variant;
    playgroundRating.color = color;
    playgroundRating.iconName = icon;
    playgroundRating.image = image;
    playgroundRating.colorMap = colorMap;
    playgroundRating.helperText = helperText;
    playgroundRating.errorMessage = errorMsg;
    playgroundRating.invalid = invalid;
    playgroundRating.showReviews = showReviews;
    playgroundRating.totalReviews = totalReviews;
    playgroundRating.description = desc;
    playgroundRating.descriptionPosition = descPos;
    playgroundRating.glow = glow;
    playgroundRating.victoryGlow = victory;
    playgroundRating.allowHalf = half;
    playgroundRating.haptic = haptic;

    window.updateRatingCode();
  };

  window.updateRatingCode = () => {
    const r = playgroundRating;
    const codePreview = document.getElementById('ratingCodePreview');
    if (!r || !codePreview) return;

    let code = `<ui-rating\n  type="${r.type}"\n  value="${r.value}"\n  size="${r.size}"\n  variant="${r.variant}"\n  color="${r.color}"`;
    if (r.invalid) code += `\n  invalid\n  error-message="${r.errorMessage}"`;
    if (r.helperText) code += `\n  helper-text="${r.helperText}"`;
    if (r.colorMap) code += `\n  color-map='${r.colorMap}'`;
    if (r.image) code += `\n  image="${r.image}"`;
    if (r.description) code += `\n  description="${r.description}"`;
    if (r.descriptionPosition !== 'bottom') code += `\n  description-position="${r.descriptionPosition}"`;
    if (r.iconName !== 'star') code += `\n  icon-name="${r.iconName}"`;
    if (r.allowHalf) code += `\n  allow-half`;
    if (r.glow) code += `\n  glow`;
    if (r.victoryGlow) code += `\n  victory-glow`;
    if (r.haptic) code += `\n  haptic`;
    code += `\n></ui-rating>`;

    codePreview.setAttribute('html-code', code);
  };

  playgroundRating.addEventListener('ratingChange', (e) => {
    document.getElementById('ratingValue').value = e.detail;
    window.updateRatingCode();
  });
  
  window.updateRatingCode();
}
