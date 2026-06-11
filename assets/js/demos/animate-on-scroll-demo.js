export function initAnimateOnScrollDemo() {
  const section = document.getElementById('animate-on-scroll');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-header">
      <h1>Animate On Scroll</h1>
      <p>A powerful component that triggers animations when elements enter the viewport or based on scroll progress. Supports staggered children and parallax scrubbing.</p>
    </div>

    <div class="demo-grid" style="display: grid; grid-template-columns: repeat(auto-fit, minmax(320px, 1fr)); gap: 24px; margin-top: 24px;">
      
      <!-- 1. Basic Entrances -->
      <div class="demo-card">
        <h3>Entrance Animations</h3>
        <p>Trigger beautiful entrance effects as they scroll into view.</p>
        <div style="display: flex; flex-direction: column; gap: 20px; margin-top: 24px;">
          <ui-animate-on-scroll enter-class="fade-in" duration="800">
            <div class="demo-box" style="background: #10b981;">Fade In</div>
          </ui-animate-on-scroll>
          
          <ui-animate-on-scroll enter-class="slide-in-up" duration="800">
            <div class="demo-box" style="background: #10b981;">Slide In Up</div>
          </ui-animate-on-scroll>
          
          <ui-animate-on-scroll enter-class="blur-reveal" blur-amount="20px" duration="1200">
            <div class="demo-box" style="background: var(--accent-purple,#8b5cf6);">Blur Reveal</div>
          </ui-animate-on-scroll>
        </div>
        <pre class="demo-code"><code>&lt;ui-animate-on-scroll enter-class="blur-reveal"&gt;...&lt;/ui-animate-on-scroll&gt;</code></pre>
      </div>

      <!-- 2. Professional Flips -->
      <div class="demo-card">
        <h3>3D Flips</h3>
        <p>Utilize the perspective engine for high-end 3D transitions.</p>
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin-top: 24px;">
          <ui-animate-on-scroll enter-class="flip-in-x" perspective="800px">
            <div class="demo-box" style="background: var(--accent-yellow,#f59e0b); height: 80px;">Flip X</div>
          </ui-animate-on-scroll>
          <ui-animate-on-scroll enter-class="flip-in-y" perspective="800px">
            <div class="demo-box" style="background: var(--accent-red,#ef4444); height: 80px;">Flip Y</div>
          </ui-animate-on-scroll>
          <ui-animate-on-scroll enter-class="roll-in">
            <div class="demo-box" style="background: var(--accent-pink,#ec4899); height: 80px;">Roll In</div>
          </ui-animate-on-scroll>
          <ui-animate-on-scroll enter-class="zoom-in-up">
            <div class="demo-box" style="background: #06b6d4; height: 80px;">Zoom In Up</div>
          </ui-animate-on-scroll>
        </div>
        <pre class="demo-code"><code>&lt;ui-animate-on-scroll enter-class="flip-in-y" perspective="800px"&gt;...&lt;/ui-animate-on-scroll&gt;</code></pre>
      </div>

      <!-- 3. Attention Seekers -->
      <div class="demo-card">
        <h3>Attention Seekers</h3>
        <p>Perfect for Call-to-Action buttons or highlighting important updates.</p>
        <div style="display: flex; flex-wrap: wrap; gap: 12px; margin-top: 24px;">
          <ui-animate-on-scroll enter-class="pulse" once="false">
             <ui-button color="primary" variant="outline" label="Pulse" style="padding: 12px 20px;"></ui-button>
          </ui-animate-on-scroll>
          <ui-animate-on-scroll enter-class="tada" once="false">
             <ui-button color="success" variant="outline" label="Tada!" style="padding: 12px 20px;"></ui-button>
          </ui-animate-on-scroll>
          <ui-animate-on-scroll enter-class="rubber-band" once="false">
             <ui-button color="warning" variant="outline" label="Rubber Band" style="padding: 12px 20px;"></ui-button>
          </ui-animate-on-scroll>
          <ui-animate-on-scroll enter-class="jello" once="false">
             <ui-button color="danger" variant="outline" label="Jello" style="padding: 12px 20px;"></ui-button>
          </ui-animate-on-scroll>
        </div>
        <pre class="demo-code"><code>&lt;ui-animate-on-scroll enter-class="tada" once="false"&gt;...&lt;/ui-animate-on-scroll&gt;</code></pre>
      </div>

      <!-- 4. Staggered Children -->
      <div class="demo-card" style="grid-column: 1 / -1;">
        <h3>Staggered Sequences</h3>
        <p>Automatically create a cascade effect for lists or grids of items.</p>
        <ui-animate-on-scroll enter-class="slide-in-up" stagger="150" duration="600">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(150px, 1fr)); gap: 16px; margin-top: 24px;">
            <div class="demo-item">Item One</div>
            <div class="demo-item">Item Two</div>
            <div class="demo-item">Item Three</div>
            <div class="demo-item">Item Four</div>
            <div class="demo-item">Item Five</div>
            <div class="demo-item">Item Six</div>
          </div>
        </ui-animate-on-scroll>
        <pre class="demo-code"><code>&lt;ui-animate-on-scroll stagger="150" enter-class="slide-in-up"&gt;...&lt;/ui-animate-on-scroll&gt;</code></pre>
      </div>

      <!-- 5. Back Effects (Premium) -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: var(--accent-indigo,#6366f1); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">PREMIUM</div>
        <h3>Back Entrance Effects</h3>
        <p>High-end entrance animations with a slight overshoot for a physical feel.</p>
        <div style="display: flex; flex-direction: column; gap: 16px; margin-top: 24px;">
          <ui-animate-on-scroll enter-class="back-in-up">
            <div class="demo-box" style="background: linear-gradient(to right, #6366f1, #a855f7); border-radius: 12px;">Back In Up</div>
          </ui-animate-on-scroll>
          <ui-animate-on-scroll enter-class="back-in-left">
            <div class="demo-box" style="background: linear-gradient(to right, #10b981, #06b6d4); border-radius: 12px;">Back In Left</div>
          </ui-animate-on-scroll>
        </div>
        <pre class="demo-code"><code>&lt;ui-animate-on-scroll enter-class="back-in-up"&gt;...&lt;/ui-animate-on-scroll&gt;</code></pre>
      </div>

      <!-- 6. Parallax Scrubbing -->
      <div class="demo-card">
        <div class="badge" style="float: right; background: var(--accent-pink,#ec4899); color: white; padding: 2px 8px; border-radius: 4px; font-size: 10px; font-weight: 700;">SCROLL SYNC</div>
        <h3>Parallax Scrubbing</h3>
        <p>Animation progress is mapped directly to your scroll position. Now features smooth LERP interpolation.</p>
        <div style="background:var(--bg-secondary,#f8fafc); border-radius: 12px; padding: 40px; margin-top: 24px; text-align: center; overflow: hidden;">
          <ui-animate-on-scroll scrub="true" enter-class="rotate-in" duration="1000">
            <div style="font-size: 80px;">⚙️</div>
          </ui-animate-on-scroll>
          <p style="margin-top: 16px; font-weight: 600; color:var(--text-secondary,#64748b);">(Scroll the page to rotate me smoothly)</p>
        </div>
        <pre class="demo-code"><code>&lt;ui-animate-on-scroll scrub="true"&gt;...&lt;/ui-animate-on-scroll&gt;</code></pre>
      </div>

      <!-- 7. Advanced Controls -->
      <div class="demo-card" style="grid-column: 1 / -1;">
        <h3>Advanced Controls</h3>
        <p>Fine-tune your animations with precision props.</p>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px; margin-top: 24px;">
          <div class="demo-card-inner">
            <h4>Custom Distance</h4>
            <ui-animate-on-scroll enter-class="slide-in-up" distance="200px" duration="1500" mirror="true">
              <div class="demo-box" style="background: #10b981;">200px Slide Up</div>
            </ui-animate-on-scroll>
          </div>
          
          <div class="demo-card-inner">
            <h4>Mirror Reset</h4>
            <ui-animate-on-scroll enter-class="zoom-in" mirror="true" duration="800">
              <div class="demo-box" style="background: var(--accent-yellow,#f59e0b);">Resets on Scroll Up</div>
            </ui-animate-on-scroll>
          </div>

          <div class="demo-card-inner">
            <h4>Transform Origin</h4>
            <ui-animate-on-scroll enter-class="flip-in-x" transform-origin="top" duration="1000">
              <div class="demo-box" style="background: var(--accent-red,#ef4444);">Top Hinged Flip</div>
            </ui-animate-on-scroll>
          </div>
        </div>
        <pre class="demo-code"><code>&lt;ui-animate-on-scroll distance="200px" mirror="true" transform-origin="top"&gt;</code></pre>
      </div>

    </div>

    <style>
      .demo-box {
        padding: 30px;
        color: white;
        text-align: center;
        font-weight: 700;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.1);
      }
      .demo-item {
        background:var(--bg-primary,white);
        border:1px solid var(--border-default,#e2e8f0);
        padding: 24px;
        border-radius: 12px;
        text-align: center;
        font-weight: 600;
        color: #475569;
        box-shadow: 0 2px 4px rgba(0,0,0,0.02);
      }
    </style>
  `;
}
