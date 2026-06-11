/**
 * My Profile Demo
 * Creates a beautiful, premium profile page using existing components.
 */
export function initMyProfileDemo() {
    const section = document.getElementById('my-profile');
    if (!section) return;

    section.innerHTML = `
    <div class="profile-container" style="max-width: 1000px; margin: 0 auto; padding-bottom: 60px;">
      
      <!-- Hero Header Section -->
      <div class="profile-hero" style="
        position: relative;
        height: 280px;
        background: linear-gradient(135deg, #10b981 0%, #8b5cf6 50%, #ec4899 100%);
        border-radius: 24px;
        margin-bottom: 80px;
        box-shadow: 0 20px 40px rgba(0,0,0,0.1);
        overflow: visible;
      ">
        <!-- Abstract Background Shapes -->
        <div style="position: absolute; top: -20px; right: 40px; width: 150px; height: 150px; background: rgba(255,255,255,0.1); border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;"></div>
        <div style="position: absolute; bottom: 20px; left: 10%; width: 100px; height: 100px; background: rgba(255,255,255,0.05); border-radius: 50%;"></div>

        <!-- Float Profile Card -->
        <div style="
          position: absolute;
          bottom: -60px;
          left: 40px;
          display: flex;
          align-items: flex-end;
          gap: 24px;
          z-index: 10;
        ">
          <div style="
            position: relative;
            padding: 6px;
            background:var(--bg-primary,white);
            border-radius: 32px;
            box-shadow: 0 10px 25px rgba(0,0,0,0.1);
          ">
            <ui-avatar 
              src="/build/assets/images/nature_forest_1.png" 
              size="xl" 
              style="--avatar-size: 140px; border-radius: 26px;"
            ></ui-avatar>
            <div style="
              position: absolute; 
              bottom: 12px; 
              right: 12px; 
              width: 18px; 
              height: 18px; 
              background: #22c55e; 
              border: 3px solid white; 
              border-radius: 50%;
            "></div>
          </div>
          
          <div style="padding-bottom: 20px;">
            <h1 style="font-size: 2.2rem; font-weight: 800; color: white; margin: 0; text-shadow: 0 4px 12px rgba(0,0,0,0.2); margin-bottom: 4px;">John Doe</h1>
            <p style="font-size: 1.1rem; color: rgba(255,255,255,0.9); margin: 0; font-weight: 500;">Senior UI/UX Architect</p>
          </div>
        </div>

        <!-- Action Buttons -->
        <div style="position: absolute; bottom: 24px; right: 40px; display: flex; gap: 12px;">
          <ui-button label="Message" variant="outline" style="--button-border-color: rgba(255,255,255,0.4); --button-text-color: white; backdrop-filter: blur(8px); background: rgba(255,255,255,0.1);"></ui-button>
          <ui-button label="Edit Profile" variant="primary" style="background:var(--bg-primary,white); color: #10b981; border: none;"></ui-button>
        </div>
      </div>

      <!-- Main Profile Grid -->
      <div style="display: grid; grid-template-columns: 1fr 2fr; gap: 32px;">
        
        <!-- Sidebar Columns -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          
          <!-- About Section -->
          <ui-card style="--card-padding: 24px;">
            <h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.1rem; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 12px;">About</h3>
            <p style="color:var(--text-secondary,#64748b); font-size: 0.95rem; line-height: 1.6; margin-bottom: 20px;">
              Passionate about building scalable design systems and beautiful user interfaces. Obsessed with typography, motion, and accessibility.
            </p>
            
            <div style="display: flex; flex-direction: column; gap: 12px;">
              <div style="display: flex; align-items: center; gap: 12px; color: #475569; font-size: 0.9rem;">
                <span style="font-size: 1.2rem;">📍</span> San Francisco, CA
              </div>
              <div style="display: flex; align-items: center; gap: 12px; color: #475569; font-size: 0.9rem;">
                <span style="font-size: 1.2rem;">🔗</span> <a href="#" style="color: #10b981; text-decoration: none;">johndoe.design</a>
              </div>
              <div style="display: flex; align-items: center; gap: 12px; color: #475569; font-size: 0.9rem;">
                <span style="font-size: 1.2rem;">📅</span> Joined March 2021
              </div>
            </div>
          </ui-card>

          <!-- Stats Grid -->
          <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px;">
            <ui-card style="--card-padding: 16px; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 800; color:var(--text-primary,#0f172a);">1.2k</div>
              <div style="font-size: 0.75rem; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px;">Followers</div>
            </ui-card>
            <ui-card style="--card-padding: 16px; text-align: center;">
              <div style="font-size: 1.5rem; font-weight: 800; color:var(--text-primary,#0f172a);">48</div>
              <div style="font-size: 0.75rem; color:var(--text-secondary,#64748b); text-transform: uppercase; letter-spacing: 0.05em; margin-top: 4px;">Projects</div>
            </ui-card>
          </div>

          <!-- Skills Section -->
          <ui-card style="--card-padding: 24px;">
            <h3 style="margin-top: 0; margin-bottom: 16px; font-size: 1.1rem; border-bottom: 1px solid rgba(0,0,0,0.05); padding-bottom: 12px;">Skills</h3>
            <div style="display: flex; flex-wrap: wrap; gap: 8px;">
              <ui-chip label="Design Systems" style="--chip-bg: var(--accent-blue-soft,#eff6ff); --chip-text: #10b981;"></ui-chip>
              <ui-chip label="React" style="--chip-bg: var(--accent-purple-soft,#f5f3ff); --chip-text: var(--accent-purple,#8b5cf6);"></ui-chip>
              <ui-chip label="Stencil.js" style="--chip-bg: var(--accent-pink-soft,#fdf2f8); --chip-text: var(--accent-pink,#ec4899);"></ui-chip>
              <ui-chip label="TypeScript" style="--chip-bg: #ecfdf5; --chip-text: #10b981;"></ui-chip>
              <ui-chip label="Figma" style="--chip-bg: var(--accent-orange-soft,#fff7ed); --chip-text: var(--accent-yellow,#f59e0b);"></ui-chip>
              <ui-chip label="Interaction Design" style="--chip-bg: #f0f9ff; --chip-text: var(--accent-cyan,#0ea5e9);"></ui-chip>
            </div>
          </ui-card>
        </div>

        <!-- Content Column -->
        <div style="display: flex; flex-direction: column; gap: 24px;">
          

          <!-- Activity Tabs -->
          <ui-tabs id="profileTabs" icon-library="lucide">
            <!-- Activity List Content (Projected via Slot) -->
            <div slot="activity-content" style="display: flex; flex-direction: column; gap: 16px;">
              <ui-card style="--card-padding: 20px;">
                <div style="display: flex; gap: 16px;">
                  <ui-avatar label="JD" style="background: #10b981; color: white;"></ui-avatar>
                  <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <div style="font-weight: 600;">Updated the Component Library Documentation</div>
                      <span style="font-size: 0.8rem; color:var(--text-secondary,#64748b);">2 hours ago</span>
                    </div>
                    <p style="font-size: 0.9rem; color:var(--text-secondary,#64748b); line-height: 1.5; margin: 0;">
                      Finished adding the new stack component documentation and examples.
                    </p>
                  </div>
                </div>
              </ui-card>

              <ui-card style="--card-padding: 20px;">
                <div style="display: flex; gap: 16px;">
                  <ui-avatar label="JD" style="background: var(--accent-purple,#8b5cf6); color: white;"></ui-avatar>
                  <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <div style="font-weight: 600;">Published a new blog post</div>
                      <span style="font-size: 0.8rem; color:var(--text-secondary,#64748b);">Yesterday</span>
                    </div>
                    <p style="font-size: 0.9rem; color:var(--text-secondary,#64748b); line-height: 1.5; margin: 0;">
                      "Mastering Web Components with Stencil.js" is now live on md!
                    </p>
                    <div style="margin-top: 12px; padding: 12px; background:var(--bg-secondary,#f8fafc); border-radius: 8px; border:1px solid var(--border-default,#e2e8f0); display: flex; align-items: center; gap: 12px;">
                      <div style="font-size: 1.5rem;">📝</div>
                      <div>
                        <div style="font-weight: 500; font-size: 0.85rem;">Stencil Roadmap 2024</div>
                        <div style="font-size: 0.75rem; color:var(--text-secondary,#64748b);">md.com/design-tips</div>
                      </div>
                    </div>
                  </div>
                </div>
              </ui-card>

              <ui-card style="--card-padding: 20px;">
                <div style="display: flex; gap: 16px;">
                  <ui-avatar label="JD" style="background: var(--accent-pink,#ec4899); color: white;"></ui-avatar>
                  <div style="flex: 1;">
                    <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 8px;">
                      <div style="font-weight: 600;">Collaborated on "UI Kit Alpha"</div>
                      <span style="font-size: 0.8rem; color:var(--text-secondary,#64748b);">3 days ago</span>
                    </div>
                    <div style="display: flex; align-items: center; gap: 8px; margin-bottom: 12px;">
                       <ui-avatar size="md" src="/build/assets/images/nature_lake_2.png" style="--avatar-size: 24px;"></ui-avatar>
                       <ui-avatar size="md" src="/build/assets/images/nature_ocean_4.png" style="--avatar-size: 24px;"></ui-avatar>
                       <span style="font-size: 0.8rem; color:var(--text-secondary,#64748b);">+4 other contributors</span>
                    </div>
                  </div>
                </div>
              </ui-card>
            </div>
            
            <!-- Portfolio Content (Projected via Slot) -->
            <div slot="portfolio-content" style="padding: 20px; text-align: center; color:var(--text-secondary,#64748b);">
                <p>Portfolio items would be displayed here.</p>
            </div>
          </ui-tabs>

        </div>

      </div>

    </div>
  `;

  // Initialize tabs via JS
  setTimeout(() => {
    const tabs = document.getElementById('profileTabs');
    if (tabs) {
      tabs.items = [
        {
          id: 'activity',
          title: 'Recent Activity',
          icon: 'activity', // Lucide icon
          useSlot: true,
          slot: 'activity-content'
        },
        {
          id: 'portfolio',
          title: 'Portfolio',
          icon: 'briefcase', // Lucide icon
          useSlot: true,
          slot: 'portfolio-content'
        },
        {
          id: 'followers',
          title: 'Followers',
          icon: 'users', // Lucide icon
          badge: '1.2k',
          content: '<div style="padding: 20px; text-align: center; color:var(--text-secondary,#64748b);">Followers list would be here.</div>'
        }
      ];
    }
  }, 50);

        </div>

      </div>

    </div>
  `;
}
