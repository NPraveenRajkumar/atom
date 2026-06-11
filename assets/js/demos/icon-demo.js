export function initIconDemo() {
  const section = document.getElementById('icon');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header">
      <h1>Icon Component</h1>
      <p>A versatile icon wrapper supporting 8+ major libraries, SVG paths, URLs, and emojis.</p>
    </div>

    <div class="demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap: 24px; margin-top: 24px;">
      <!-- 1. QuartzDS (Se Icons) -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: #0f172a; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">ENTERPRISE</div>
        <h3>QuartzDS (Se)</h3>
        <p>Enterprise-grade icons from the core library.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="se" name="house" size="2rem" color="#6366f1"></ui-icon>
          <ui-icon library="se" name="gear" size="2rem" color="#94a3b8"></ui-icon>
          <ui-icon library="se" name="user" size="2rem" color="#10b981"></ui-icon>
          <ui-icon library="se" name="bell" size="2rem" color="#f59e0b"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="se" name="house"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 2. FontAwesome 6 -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: #10b981; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">POPULAR</div>
        <h3>FontAwesome 6</h3>
        <p>The world's most popular icon set.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="fontawesome" name="fa-solid fa-star" size="2rem" color="#fbbf24"></ui-icon>
          <ui-icon library="fontawesome" name="fa-brands fa-github" size="2rem" color="#333"></ui-icon>
          <ui-icon library="fontawesome" name="fa-solid fa-heart" size="2rem" color="#ef4444"></ui-icon>
          <ui-icon library="fontawesome" name="fa-solid fa-rocket" size="2rem" color="#6366f1"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="fontawesome" name="fa-star"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 3. Icons8 (Line Awesome) -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: #10b981; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">MODERN</div>
        <h3>Icons8 (Line Awesome)</h3>
        <p>Beautiful line-style replacements for FA.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="icons8" name="las la-home" size="2.5rem" color="#6366f1"></ui-icon>
          <ui-icon library="icons8" name="lar la-envelope" size="2.5rem" color="#10b981"></ui-icon>
          <ui-icon library="icons8" name="lab la-react" size="2.5rem" color="#61dafb"></ui-icon>
          <ui-icon library="icons8" name="las la-cog" size="2.5rem" color="#94a3b8"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="icons8" name="home"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 4. Lucide Icons -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: var(--accent-indigo,#6366f1); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">CLEAN</div>
        <h3>Lucide</h3>
        <p>Beautiful & consistent icons (Feather fork).</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="lucide" name="flower" size="2rem" color="#10b981"></ui-icon>
          <ui-icon library="lucide" name="activity" size="2rem" color="#f43f5e"></ui-icon>
          <ui-icon library="lucide" name="shopping-cart" size="2rem" color="#6366f1"></ui-icon>
          <ui-icon library="lucide" name="terminal" size="2rem" color="#334155"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="lucide" name="flower"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 5. Iconoir -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: #f43f5e; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">MINIMAL</div>
        <h3>Iconoir</h3>
        <p>High-quality minimalist icon library.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="iconoir" name="home" size="2.2rem" color="#6366f1"></ui-icon>
          <ui-icon library="iconoir" name="user" size="2.2rem" color="#ec4899"></ui-icon>
          <ui-icon library="iconoir" name="settings" size="2.2rem" color="#94a3b8"></ui-icon>
          <ui-icon library="iconoir" name="bell" size="2.2rem" color="#f59e0b"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="iconoir" name="home"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 6. Ionicons -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: #4e8ef7; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">IONIC</div>
        <h3>Ionicons</h3>
        <p>Open source icons from the Ionic team.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="ionicons" name="heart" size="2rem" color="#ef4444"></ui-icon>
          <ui-icon library="ionicons" name="logo-ionic" size="2rem" color="#4e8ef7"></ui-icon>
          <ui-icon library="ionicons" name="cloud-upload" size="2rem" color="#10b981"></ui-icon>
          <ui-icon library="ionicons" name="help-circle" size="2rem" color="#94a3b8"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="ionicons" name="heart"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 7. Bootstrap Icons -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: #7952b3; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">BI</div>
        <h3>Bootstrap Icons</h3>
        <p>Official icons for the Bootstrap framework.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="bootstrap" name="bootstrap-fill" size="2rem" color="#7952b3"></ui-icon>
          <ui-icon library="bootstrap" name="check-circle-fill" size="2rem" color="#198754"></ui-icon>
          <ui-icon library="bootstrap" name="info-circle-fill" size="2rem" color="#0dcaf0"></ui-icon>
          <ui-icon library="bootstrap" name="exclamation-triangle-fill" size="2rem" color="#ffc107"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="bootstrap" name="bootstrap"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 8. Google Material Symbols -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: #4285f4; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">GOOGLE</div>
        <h3>Google Material Symbols</h3>
        <p>Variable font-based icons from Google.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="google" name="home" size="2.5rem" color="#4285f4"></ui-icon>
          <ui-icon library="google" name="search" size="2.5rem" color="#34a853"></ui-icon>
          <ui-icon library="google" name="settings" size="2.5rem" color="#fbbc05"></ui-icon>
          <ui-icon library="google" name="favorite" size="2.5rem" color="#ea4335"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="google" name="home"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 9. Remix Icon -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: var(--accent-indigo,#6366f1); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">REMIX</div>
        <h3>Remix Icon</h3>
        <p>Beautiful, neutral-style open-source icons.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="remixicon" name="ri-home-line" size="2.5rem" color="#6366f1"></ui-icon>
          <ui-icon library="remixicon" name="ri-user-line" size="2.5rem" color="#ec4899"></ui-icon>
          <ui-icon library="remixicon" name="ri-settings-3-line" size="2.5rem" color="#94a3b8"></ui-icon>
          <ui-icon library="remixicon" name="ri-heart-fill" size="2.5rem" color="#ef4444"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="remixicon" name="ri-home-line"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 8. SVG Paths -->
      <div class="demo-card">
        <h3>SVG Paths</h3>
        <p>Render custom icons using SVG path data directly.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon name="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" size="2rem" color="#6366f1"></ui-icon>
          <ui-icon name="M12 2v20m10-10H2" size="2rem" color="#10b981"></ui-icon>
          <ui-icon name="M5 13l4 4L19 7" size="2rem" color="#ef4444"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon name="M12 2L..."&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- 9. Image/URL Icons -->
      <div class="demo-card">
        <h3>URL & Brands</h3>
        <p>Load external SVGs or brand logos.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon name="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/react.svg" size="2rem" color="#61dafb"></ui-icon>
          <ui-icon name="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/vuejs.svg" size="2rem" color="#42b883"></ui-icon>
          <ui-icon name="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/chrome.svg" size="2rem"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon name="https://..."&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- FontAwesome Gallery -->
      <div class="demo-card" style="grid-column: 1 / -1; background: linear-gradient(to bottom right, #ffffff, #f8fafc);">
        <div style="display: flex; justify-content: space-between; align-items: flex-start; margin-bottom: 24px;">
          <div>
            <h3>FontAwesome Gallery</h3>
            <p>A comprehensive set of icons categorized by style. Use the <code>library="fontawesome"</code> prop.</p>
          </div>
          <a href="https://fontawesome.com/icons" target="_blank" style="color:var(--accent-indigo,#6366f1); font-size: 12px; font-weight: 600; text-decoration: none; border: 1px solid rgba(99, 102, 241, 0.2); padding: 4px 12px; border-radius: 6px;">Browse All Icons →</a>
        </div>
        
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 32px;">
          <!-- Solid -->
          <div>
            <h4 style="font-size: 12px; text-transform: uppercase; color:var(--text-secondary,#64748b); letter-spacing: 0.05em; margin-bottom: 16px;">Solid Icons</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
              <div class="icon-box" title="fa-house"><ui-icon library="fontawesome" name="fa-solid fa-house" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-user"><ui-icon library="fontawesome" name="fa-solid fa-user" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-check"><ui-icon library="fontawesome" name="fa-solid fa-check" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-magnifying-glass"><ui-icon library="fontawesome" name="fa-solid fa-magnifying-glass" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-envelope"><ui-icon library="fontawesome" name="fa-solid fa-envelope" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-gear"><ui-icon library="fontawesome" name="fa-solid fa-gear" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-bell"><ui-icon library="fontawesome" name="fa-solid fa-bell" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-location-dot"><ui-icon library="fontawesome" name="fa-solid fa-location-dot" size="20px"></ui-icon></div>
            </div>
          </div>

          <!-- Regular / Outline -->
          <div>
            <h4 style="font-size: 12px; text-transform: uppercase; color:var(--text-secondary,#64748b); letter-spacing: 0.05em; margin-bottom: 16px;">Regular (Outline)</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
              <div class="icon-box" title="fa-face-smile"><ui-icon library="fontawesome" name="fa-regular fa-face-smile" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-circle-check"><ui-icon library="fontawesome" name="fa-regular fa-circle-check" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-comment"><ui-icon library="fontawesome" name="fa-regular fa-comment" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-copy"><ui-icon library="fontawesome" name="fa-regular fa-copy" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-file-lines"><ui-icon library="fontawesome" name="fa-regular fa-file-lines" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-image"><ui-icon library="fontawesome" name="fa-regular fa-image" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-lightbulb"><ui-icon library="fontawesome" name="fa-regular fa-lightbulb" size="20px"></ui-icon></div>
              <div class="icon-box" title="fa-paper-plane"><ui-icon library="fontawesome" name="fa-regular fa-paper-plane" size="20px"></ui-icon></div>
            </div>
          </div>

          <!-- Brands -->
          <div>
            <h4 style="font-size: 12px; text-transform: uppercase; color:var(--text-secondary,#64748b); letter-spacing: 0.05em; margin-bottom: 16px;">Brand Icons</h4>
            <div style="display: grid; grid-template-columns: repeat(4, 1fr); gap: 12px;">
              <div class="icon-box" style="color: #1877f2;"><ui-icon library="fontawesome" name="fa-brands fa-facebook" size="20px"></ui-icon></div>
              <div class="icon-box" style="color: #4cd964;"><ui-icon library="fontawesome" name="fa-brands fa-whatsapp" size="20px"></ui-icon></div>
              <div class="icon-box" style="color: #1da1f2;"><ui-icon library="fontawesome" name="fa-brands fa-twitter" size="20px"></ui-icon></div>
              <div class="icon-box" style="color: #ff0000;"><ui-icon library="fontawesome" name="fa-brands fa-youtube" size="20px"></ui-icon></div>
              <div class="icon-box" style="color: #0077b5;"><ui-icon library="fontawesome" name="fa-brands fa-linkedin" size="20px"></ui-icon></div>
              <div class="icon-box" style="color: #333;"><ui-icon library="fontawesome" name="fa-brands fa-github" size="20px"></ui-icon></div>
              <div class="icon-box" style="color: #61dafb;"><ui-icon library="fontawesome" name="fa-brands fa-react" size="20px"></ui-icon></div>
              <div class="icon-box" style="color: #ff3e00;"><ui-icon library="fontawesome" name="fa-brands fa-html5" size="20px"></ui-icon></div>
            </div>
          </div>
        </div>
      </div>

      <!-- SVG Path Icons -->
      <div class="demo-card">
        <h3>SVG Paths</h3>
        <p>Directly render custom vector paths.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon name="M12 2L2 7l10 5l10-5l-10-5zM2 17l10 5l10-5M2 12l10 5l10-5" size="2rem" color="#6366f1"></ui-icon>
          <ui-icon name="M12 2v20m10-10H2" size="2rem" color="#10b981"></ui-icon>
          <ui-icon name="M5 13l4 4L19 7" size="2rem" color="#ef4444"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon name="M12 2..."&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- Image/URL Icons -->
      <div class="demo-card">
        <h3>URL & Brands</h3>
        <p>Load external SVGs or brand logos.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon name="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/react.svg" size="2rem" color="#61dafb"></ui-icon>
          <ui-icon name="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/vuejs.svg" size="2rem" color="#42b883"></ui-icon>
          <ui-icon name="https://raw.githubusercontent.com/FortAwesome/Font-Awesome/6.x/svgs/brands/chrome.svg" size="2rem"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon name="https://..."&gt;&lt;/ui-icon&gt;</code></pre>
      </div>


      <!-- Emoji -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: #f97316; color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">EMOJI</div>
        <h3>Emoji</h3>
        <p>Render any Unicode emoji natively with full color and platform support.</p>
        <div style="display: flex; gap: 16px; align-items: center; margin-top: 16px;">
          <ui-icon library="emoji" name="🚀" size="2.5rem"></ui-icon>
          <ui-icon library="emoji" name="🔥" size="2.5rem"></ui-icon>
          <ui-icon library="emoji" name="🎉" size="2.5rem"></ui-icon>
          <ui-icon library="emoji" name="💡" size="2.5rem"></ui-icon>
          <ui-icon library="emoji" name="⭐" size="2.5rem"></ui-icon>
          <ui-icon library="emoji" name="🎨" size="2.5rem"></ui-icon>
        </div>
        <pre class="demo-code"><code>&lt;ui-icon library="emoji" name="🚀"&gt;&lt;/ui-icon&gt;</code></pre>
      </div>

      <!-- Playground -->
      <div class="demo-card" style="grid-column: 1 / -1;">
        <h3>Interactive Playground</h3>
        <div style="display: flex; gap: 40px; flex-wrap: wrap;">
          <div style="flex: 1; min-width: 300px; display: flex; flex-direction: column; gap: 16px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
              <div>
                <label style="display: block; font-weight: 600; margin-bottom: 4px;">Library</label>
                <ui-dropdown id="playgroundLibrary" class="demo-input">
                  <option value="default">Default (SVG/URL/Text)</option>
                  <option value="se">QuartzDS (Se)</option>
                  <option value="fontawesome">FontAwesome</option>
                  <option value="icons8">Icons8 (Line Awesome)</option>
                  <option value="iconoir">Iconoir</option>
                  <option value="ionicons">Ionicons</option>
                  <option value="lucide">Lucide</option>
                  <option value="bootstrap">Bootstrap Icons</option>
                  <option value="google">Google Material Symbols</option>
                  <option value="remixicon">Remix Icon</option>
                  <option value="emoji">Emoji</option>
                </ui-dropdown>
              </div>
              <div>
                <label style="display: block; font-weight: 600; margin-bottom: 4px;">Size</label>
                <ui-input type="text" id="playgroundSize" class="demo-input" value="4rem">
              </div>
            </div>
            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 4px;">Icon Name / Content</label>
              <ui-input type="text" id="playgroundName" class="demo-input" value="🚀">
              <small style="color:var(--text-secondary,#64748b); margin-top: 4px; display: block;">e.g., 'house' (se), 'fa-star' (fa), '🚀' (emoji), or an SVG path</small>
            </div>
            <div>
              <label style="display: block; font-weight: 600; margin-bottom: 4px;">Color</label>
              <ui-input type="color" id="playgroundColor" class="demo-input" value="#6366f1" style="height: 42px; padding: 2px;">
            </div>
          </div>
          <div style="flex: 1; min-width: 300px; display: flex; flex-direction: column; align-items: center; justify-content: center; background:var(--bg-secondary,#f8fafc); border-radius: 12px; border: 2px dashed #e2e8f0; padding: 40px;">
            <div id="playgroundPreview">
              <ui-icon name="🚀" size="4rem" color="#6366f1"></ui-icon>
            </div>
            <pre id="playgroundCode" style="margin-top: 24px; width: 100%; background: #1e293b; color: #f8fafc; padding: 12px; border-radius: 8px; font-size: 13px; white-space: pre-wrap;"><code>&lt;ui-icon name="🚀" size="4rem" color="#6366f1"&gt;&lt;/ui-icon&gt;</code></pre>
          </div>
        </div>
      </div>
    </div>

    <style>
      .demo-header { margin-bottom: 32px; }
      .demo-header h2 { font-size: 1.8rem; font-weight: 800; color:var(--text-primary,#1e293b); }
      .demo-header p { color:var(--text-secondary,#64748b); font-size: 1.1rem; }
      .demo-card { background:var(--bg-primary,white); border:1px solid var(--border-default,#e2e8f0); border-radius: 16px; padding: 24px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.05); }
      .demo-card h3 { margin: 0 0 8px 0; color:var(--text-primary,#1e293b); font-size: 1.1rem; font-weight: 700; }
      .demo-card p { margin: 0 0 16px 0; color:var(--text-secondary,#64748b); font-size: 0.9rem; }
      .demo-code { background:var(--bg-tertiary,#f1f5f9); padding: 12px; border-radius: 8px; font-size: 12px; margin-top: 16px; overflow-x: auto; font-family: 'JetBrains Mono', monospace; }
      .demo-input { width: 100%; padding: 10px; border: 1px solid #cbd5e1; border-radius: 8px; font-size: 14px; background:var(--bg-primary,white); }
      .icon-box { display: flex; align-items: center; justify-content: center; background:var(--bg-primary,white); border:1px solid var(--border-subtle,#f1f5f9); border-radius: 8px; padding: 12px; transition: all 0.2s; box-shadow: 0 1px 2px rgba(0,0,0,0.05); }
      .icon-box:hover { transform: translateY(-2px); box-shadow: 0 4px 6px rgba(0,0,0,0.1); border-color:var(--accent-indigo,#6366f1); cursor: pointer; }
    </style>
  `;

  // Attach event listeners for playground
  const libraryInput = document.getElementById('playgroundLibrary');
  const nameInput = document.getElementById('playgroundName');
  const sizeInput = document.getElementById('playgroundSize');
  const colorInput = document.getElementById('playgroundColor');
  const preview = document.getElementById('playgroundPreview');
  const code = document.getElementById('playgroundCode');

  function updatePreview() {
    const lib = libraryInput.value;
    const name = nameInput.value;
    const size = sizeInput.value;
    const color = colorInput.value;

    // Emoji renders with its native OS colour palette — don't inject a colour override
    const isEmoji = lib === 'emoji';
    const isDefault = lib === 'default';

    // Toggle colour row visibility
    const colorRow = colorInput.closest('div');
    if (colorRow) {
      colorRow.style.opacity = isEmoji ? '0.35' : '1';
      colorRow.style.pointerEvents = isEmoji ? 'none' : '';
      colorRow.title = isEmoji ? 'Color has no effect on emoji — native OS palette is used' : '';
    }

    let iconHtml;
    if (isEmoji) {
      iconHtml = `<ui-icon library="emoji" name="${name.replace(/"/g, '&quot;')}" size="${size}"></ui-icon>`;
    } else if (isDefault) {
      iconHtml = `<ui-icon name="${name.replace(/"/g, '&quot;')}" size="${size}" color="${color}"></ui-icon>`;
    } else {
      iconHtml = `<ui-icon library="${lib}" name="${name.replace(/"/g, '&quot;')}" size="${size}" color="${color}"></ui-icon>`;
    }

    preview.innerHTML = iconHtml;
    code.innerText = iconHtml;
  }

  libraryInput?.addEventListener('change', () => {
    // Provide sane defaults when switching libraries
    if (libraryInput.value === 'se') nameInput.value = 'house';
    else if (libraryInput.value === 'fontawesome') nameInput.value = 'fa-solid fa-star';
    else if (libraryInput.value === 'icons8') nameInput.value = 'las la-home';
    else if (libraryInput.value === 'iconoir') nameInput.value = 'home';
    else if (libraryInput.value === 'ionicons') nameInput.value = 'heart';
    else if (libraryInput.value === 'lucide') nameInput.value = 'flower';
    else if (libraryInput.value === 'bootstrap') nameInput.value = 'bootstrap-fill';
    else if (libraryInput.value === 'google') nameInput.value = 'home';
    else if (libraryInput.value === 'remixicon') nameInput.value = 'ri-home-line';
    else if (libraryInput.value === 'emoji') nameInput.value = '🚀';
    else if (libraryInput.value === 'default') nameInput.value = '🚀';
    updatePreview();
  });

  nameInput?.addEventListener('input', updatePreview);
  sizeInput?.addEventListener('input', updatePreview);
  colorInput?.addEventListener('input', updatePreview);
}
