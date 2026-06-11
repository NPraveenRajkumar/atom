// ============================================================
// List Component Demo
// Showcases ui-list + ui-list-item + ui-list-group features
// ============================================================

function updateListActiveBtn(demoName) {
  const section = document.getElementById('list');
  if (!section) return;
  section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
    btn.selected = btn.getAttribute('data-demo') === demoName;
  });
}

export function initListDemo() {
  const section = document.getElementById('list');
  if (!section) return;

  section.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px;">
      <h2 style="margin:0;">📋 List Component</h2>
         </div>
    <p style="color:#6b7280; margin-bottom:24px;">
      Flexible, feature-rich list component. Supports slotted items, programmatic items, groups, search, drag-and-drop, pagination, virtual scroll and much more.
    </p>

    <div class="demo-controls" style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px;">
      <ui-button onclick="window.showListBasic()" data-demo="basic" variant="outline">📄 Basic</ui-button>
      <ui-button onclick="window.showListVariants()" data-demo="variants" variant="outline">🎨 Variants</ui-button>
      <ui-button onclick="window.showListIcons()" data-demo="icons" variant="outline">🏷️ Icons & Badges</ui-button>
      <ui-button onclick="window.showListCollapsible()" data-demo="collapsible" variant="outline">📂 Collapsible</ui-button>
      <ui-button onclick="window.showListSearch()" data-demo="search" variant="outline">🔍 Search</ui-button>
      <ui-button onclick="window.showListGrouped()" data-demo="grouped" variant="outline">📁 Grouped</ui-button>
      <ui-button onclick="window.showListDraggable()" data-demo="draggable" variant="outline">↕️ Draggable</ui-button>
      <ui-button onclick="window.showListPaginated()" data-demo="paginated" variant="outline">📑 Paginated</ui-button>
      <ui-button onclick="window.showListInteractions()" data-demo="interactions" variant="outline">✨ Interactions</ui-button>
      <ui-button onclick="window.showListMasterpiece()" data-demo="masterpiece" variant="outline">💎 Masterpiece</ui-button>
      <ui-button onclick="window.showListGrid()" data-demo="grid" variant="outline">🔲 Grid</ui-button>
      <ui-button onclick="window.showListTree()" data-demo="tree" variant="outline">🌲 Tree</ui-button>
      <ui-button onclick="window.showListVirtual()" data-demo="virtual" variant="outline">⚡ Virtual</ui-button>
      <ui-button onclick="window.showListLarge()" data-demo="large" variant="outline">📦 100+ Items</ui-button>
      <ui-button onclick="window.showListApex()" data-demo="apex" variant="outline">🚀 Apex Masterclass</ui-button>
    </div>

    <div id="listDemoContainer" style="margin-top:8px;"></div>
  `;

  setTimeout(() => window.showListBasic(), 100);
}

// ─────────────────────────────────────────────
// 1. Basic List
// ─────────────────────────────────────────────
window.showListBasic = function () {
  updateListActiveBtn('basic');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">

      <!-- Simple slotted -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;color:#374151;">Simple List</h3>
        <ui-list id="basicList1">
          <ui-list-item label="Home"         icon="fas fa-home"    value="home"></ui-list-item>
          <ui-list-item label="Profile"      icon="fas fa-user"    value="profile"></ui-list-item>
          <ui-list-item label="Settings"     icon="fas fa-cog"     value="settings"></ui-list-item>
          <ui-list-item label="Notifications"icon="fas fa-bell"    value="notif"></ui-list-item>
          <ui-list-item label="Logout"       icon="fas fa-sign-out-alt" value="logout"></ui-list-item>
        </ui-list>
      </div>

      <!-- With dividers -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;color:#374151;">With Dividers</h3>
        <ui-list dividers>
          <ui-list-item label="Inbox"         icon="fas fa-inbox"  value="inbox"  counter="12"></ui-list-item>
          <ui-list-item label="Sent"          icon="fas fa-paper-plane" value="sent"></ui-list-item>
          <ui-list-item label="Drafts"        icon="fas fa-file-alt" value="drafts" counter="3"></ui-list-item>
          <ui-list-item label="Spam"          icon="fas fa-ban"    value="spam"   badge="New" badge-color="danger"></ui-list-item>
          <ui-list-item label="Trash"         icon="fas fa-trash"  value="trash"  disabled></ui-list-item>
        </ui-list>
      </div>

      <!-- Multi-select -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;color:#374151;">Multi-Select</h3>
        <ui-list multi-select id="multiSelectList">
          <ui-list-item label="JavaScript" icon="fab fa-js"     value="js"></ui-list-item>
          <ui-list-item label="TypeScript" icon="fab fa-js-square" value="ts"></ui-list-item>
          <ui-list-item label="React"      icon="fab fa-react"  value="react"></ui-list-item>
          <ui-list-item label="Vue"        icon="fab fa-vuejs"  value="vue"></ui-list-item>
          <ui-list-item label="Angular"    icon="fab fa-angular" value="angular"></ui-list-item>
        </ui-list>
        <div id="multiSelectOutput" style="margin-top:12px;padding:8px;background:#f3f4f6;border-radius:6px;font-size:13px;color:#374151;">Selected: none</div>
      </div>

      <!-- Dense / compact -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;color:#374151;">Dense Mode</h3>
        <ui-list dense dividers>
          <ui-list-item label="Option A" value="a"></ui-list-item>
          <ui-list-item label="Option B" value="b"></ui-list-item>
          <ui-list-item label="Option C" value="c"></ui-list-item>
          <ui-list-item label="Option D" value="d"></ui-list-item>
          <ui-list-item label="Option E" value="e"></ui-list-item>
          <ui-list-item label="Option F" value="f"></ui-list-item>
          <ui-list-item label="Option G" value="g"></ui-list-item>
        </ui-list>
      </div>

      <!-- Numbered -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;color:#374151;">Numbered List</h3>
        <ui-list numbered id="numberedList" dividers>
          <ui-list-item label="Buy groceries"   value="t1"></ui-list-item>
          <ui-list-item label="Call dentist"     value="t2"></ui-list-item>
          <ui-list-item label="Submit report"    value="t3"></ui-list-item>
          <ui-list-item label="Team standup"     value="t4"></ui-list-item>
          <ui-list-item label="Review PRs"       value="t5"></ui-list-item>
        </ui-list>
      </div>

      <!-- Size variants -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;color:#374151;">Sizes</h3>
        <p style="font-size:12px;color:#9ca3af;margin-bottom:8px;">Small</p>
        <ui-list size="md">
          <ui-list-item label="Small item A" value="sa" size="md"></ui-list-item>
          <ui-list-item label="Small item B" value="sb" size="md"></ui-list-item>
        </ui-list>
        <p style="font-size:12px;color:#9ca3af;margin:12px 0 8px;">Large</p>
        <ui-list size="large">
          <ui-list-item label="Large item A" value="la" size="large" icon="fas fa-star"></ui-list-item>
          <ui-list-item label="Large item B" value="lb" size="large" icon="fas fa-heart"></ui-list-item>
        </ui-list>
      </div>
    </div>
  `;

  // Multi-select event
  setTimeout(() => {
    const ml = document.getElementById('multiSelectList');
    if (ml) {
      ml.addEventListener('listChange', e => {
        const out = document.getElementById('multiSelectOutput');
        if (out) out.textContent = 'Selected: ' + (e.detail.values.join(', ') || 'none');
      });
    }
  }, 200);
};

// ─────────────────────────────────────────────
// 2. Variants
// ─────────────────────────────────────────────
window.showListVariants = function () {
  updateListActiveBtn('variants');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(250px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">variant="text" (default)</h3>
        <ui-list variant="text">
          <ui-list-item label="Text Item 1" value="1" variant="text" color="primary"></ui-list-item>
          <ui-list-item label="Text Item 2" value="2" variant="text" color="primary"></ui-list-item>
          <ui-list-item label="Text Item 3" value="3" variant="text" color="primary"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">variant="filled"</h3>
        <ui-list variant="filled">
          <ui-list-item label="Filled Item 1" value="1" variant="filled" color="primary"></ui-list-item>
          <ui-list-item label="Filled Item 2" value="2" variant="filled" color="success"></ui-list-item>
          <ui-list-item label="Filled Item 3" value="3" variant="filled" color="danger"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">variant="outlined"</h3>
        <ui-list variant="outlined" rounded>
          <ui-list-item label="Outlined Item 1" value="1" variant="outlined" color="primary"></ui-list-item>
          <ui-list-item label="Outlined Item 2" value="2" variant="outlined" color="warning"></ui-list-item>
          <ui-list-item label="Outlined Item 3" value="3" variant="outlined" color="info"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">variant="outline"</h3>
        <ui-list variant="outline">
          <ui-list-item label="Soft Primary"   value="1" variant="outline" color="primary"></ui-list-item>
          <ui-list-item label="Soft Success"   value="2" variant="outline" color="success"></ui-list-item>
          <ui-list-item label="Soft Warning"   value="3" variant="outline" color="warning"></ui-list-item>
          <ui-list-item label="Soft Danger"    value="4" variant="outline" color="danger"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Elevated + Rounded</h3>
        <ui-list elevated rounded>
          <ui-list-item label="Cloud Storage" icon="fas fa-cloud" value="cloud" sublabel="12.4 GB used"></ui-list-item>
          <ui-list-item label="Backup"         icon="fas fa-database" value="backup" sublabel="Last: 2h ago"></ui-list-item>
          <ui-list-item label="Sync"           icon="fas fa-sync"  value="sync" sublabel="Up to date"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Flush (no padding)</h3>
        <ui-list flush dividers>
          <ui-list-item label="Flush Item 1" value="1" icon="fas fa-circle"></ui-list-item>
          <ui-list-item label="Flush Item 2" value="2" icon="fas fa-circle"></ui-list-item>
          <ui-list-item label="Flush Item 3" value="3" icon="fas fa-circle"></ui-list-item>
        </ui-list>
      </div>
    </div>
  `;
};

// ─────────────────────────────────────────────
// 3. Icons, Badges, Sub-labels, Counters, Pills, Tags
// ─────────────────────────────────────────────
window.showListIcons = function () {
  updateListActiveBtn('icons');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Icons + Badges + Counters</h3>
        <ui-list dividers>
          <ui-list-item label="Inbox"      icon="fas fa-inbox"  value="inbox"   badge="12" badge-color="primary"  counter="12" counter-color="info"></ui-list-item>
          <ui-list-item label="Promotions" icon="fas fa-tag"    value="promo"   badge="New" badge-color="success"></ui-list-item>
          <ui-list-item label="Updates"    icon="fas fa-refresh" value="updates" counter="3" counter-color="warning"></ui-list-item>
          <ui-list-item label="Forums"     icon="fas fa-comments" value="forums"></ui-list-item>
          <ui-list-item label="Spam"       icon="fas fa-ban"    value="spam"    badge="99+" badge-color="danger" counter="99" counter-color="secondary"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Sub-labels (Multiline)</h3>
        <ui-list dividers>
          <ui-list-item
            label="John Smith"
            sublabel="Last seen 2 mins ago"
            icon="fas fa-user-circle"
            value="john"
            multiline>
          </ui-list-item>
          <ui-list-item
            label="Sarah Connor"
            sublabel="Available"
            icon="fas fa-user-circle"
            value="sarah"
            multiline>
          </ui-list-item>
          <ui-list-item
            label="Bruce Wayne"
            sublabel="In a meeting"
            icon="fas fa-user-secret"
            value="bruce"
            multiline>
          </ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Pills per Item</h3>
        <ui-list dividers>
          <ui-list-item
            label="Fix authentication bug"
            value="t1"
            icon="fas fa-bug"
            pills='[{"label":"P1","color":"danger"},{"label":"Bug","color":"warning"},{"label":"Backend","color":"info"}]'>
          </ui-list-item>
          <ui-list-item
            label="Design new dashboard"
            value="t2"
            icon="fas fa-paint-brush"
            pills='[{"label":"Design","color":"primary"},{"label":"UI/UX","color":"secondary"}]'>
          </ui-list-item>
          <ui-list-item
            label="Write unit tests"
            value="t3"
            icon="fas fa-vial"
            pills='[{"label":"Testing","color":"success"},{"label":"P2","color":"info"}]'>
          </ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Tags per Item</h3>
        <ui-list dividers>
          <ui-list-item
            label="React"
            value="react"
            icon="fab fa-react"
            tags='["Frontend","JavaScript","Popular"]'>
          </ui-list-item>
          <ui-list-item
            label="Node.js"
            value="node"
            icon="fab fa-node-js"
            tags='["Backend","JavaScript","Runtime"]'>
          </ui-list-item>
          <ui-list-item
            label="Python"
            value="python"
            icon="fab fa-python"
            tags='["ML","Backend","Scripting"]'>
          </ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Action Icons</h3>
        <ui-list dividers>
          <ui-list-item label="Edit Profile"    icon="fas fa-user"     value="edit"   action-icon="fas fa-pencil-alt"></ui-list-item>
          <ui-list-item label="Download"        icon="fas fa-file"     value="dl"     action-icon="fas fa-download"></ui-list-item>
          <ui-list-item label="Share"           icon="fas fa-link"     value="share"  action-icon="fas fa-share-alt"></ui-list-item>
          <ui-list-item label="Delete"          icon="fas fa-trash"    value="del"    action-icon="fas fa-times" color="danger"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Checkbox Selection</h3>
        <ui-list dividers id="checkboxList">
          <ui-list-item label="Send email notification"  value="email"   show-checkbox></ui-list-item>
          <ui-list-item label="Enable 2FA"               value="2fa"     show-checkbox checked></ui-list-item>
          <ui-list-item label="Auto-save drafts"          value="save"    show-checkbox></ui-list-item>
          <ui-list-item label="Dark mode"                value="dark"    show-checkbox checked></ui-list-item>
        </ui-list>
      </div>
    </div>
  `;
};

// ─────────────────────────────────────────────
// 4. Collapsible Items
// ─────────────────────────────────────────────
window.showListCollapsible = function () {
  updateListActiveBtn('collapsible');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Collapsible Tree</h3>
        <ui-list dividers>
          <ui-list-item label="Documents" icon="fas fa-folder" value="docs" collapsible expanded>
            <ui-list-item slot="children" label="Resume.pdf"    icon="fas fa-file-pdf"  value="resume" level="1"></ui-list-item>
            <ui-list-item slot="children" label="Cover.docx"    icon="fas fa-file-word" value="cover"  level="1"></ui-list-item>
            <ui-list-item slot="children" label="Portfolio"     icon="fas fa-folder"    value="port"   level="1" collapsible>
              <ui-list-item slot="children" label="project1.zip" icon="fas fa-file-archive" value="p1" level="2"></ui-list-item>
              <ui-list-item slot="children" label="project2.zip" icon="fas fa-file-archive" value="p2" level="2"></ui-list-item>
            </ui-list-item>
          </ui-list-item>
          <ui-list-item label="Pictures"  icon="fas fa-images" value="pics" collapsible>
            <ui-list-item slot="children" label="Vacation 2024" icon="fas fa-camera" value="vac" level="1"></ui-list-item>
            <ui-list-item slot="children" label="Family"        icon="fas fa-camera" value="fam" level="1"></ui-list-item>
          </ui-list-item>
          <ui-list-item label="Downloads" icon="fas fa-download" value="dl" collapsible>
            <ui-list-item slot="children" label="Installers" icon="fas fa-folder" value="inst" level="1"></ui-list-item>
          </ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Accordion-style Nav</h3>
        <ui-list dividers rounded>
          <ui-list-item label="Dashboard"  icon="fas fa-th-large" value="dash"></ui-list-item>
          <ui-list-item label="Analytics"  icon="fas fa-chart-line" value="analytics" collapsible>
            <ui-list-item slot="children" label="Traffic"     value="traffic"  level="1"></ui-list-item>
            <ui-list-item slot="children" label="Conversions" value="conv"     level="1"></ui-list-item>
            <ui-list-item slot="children" label="Reports"     value="reports"  level="1"></ui-list-item>
          </ui-list-item>
          <ui-list-item label="Users"      icon="fas fa-users"    value="users" collapsible>
            <ui-list-item slot="children" label="All Users"   value="all"    level="1"></ui-list-item>
            <ui-list-item slot="children" label="Admins"      value="admins" level="1"></ui-list-item>
            <ui-list-item slot="children" label="Guests"      value="guests" level="1"></ui-list-item>
          </ui-list-item>
          <ui-list-item label="Settings"   icon="fas fa-cog"      value="settings"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Context Menu Items</h3>
        <ui-list dividers>
          <ui-list-item label="Right-click me!" icon="fas fa-file-alt" value="file1" context-menu context-menu-trigger="rightClick">
            <ui-list-item slot="context-menu" label="Open"     icon="fas fa-folder-open" value="open"></ui-list-item>
            <ui-list-item slot="context-menu" label="Copy"     icon="fas fa-copy"        value="copy"></ui-list-item>
            <ui-list-item slot="context-menu" label="Rename"   icon="fas fa-edit"        value="rename"></ui-list-item>
            <ui-list-item slot="context-menu" label="Delete"   icon="fas fa-trash"       value="delete" color="danger"></ui-list-item>
          </ui-list-item>
          <ui-list-item label="Click ▶ for menu" icon="fas fa-file-code" value="file2" context-menu context-menu-trigger="click">
            <ui-list-item slot="context-menu" label="Edit"    icon="fas fa-edit"   value="edit"></ui-list-item>
            <ui-list-item slot="context-menu" label="Preview" icon="fas fa-eye"    value="prev"></ui-list-item>
            <ui-list-item slot="context-menu" label="Export"  icon="fas fa-upload" value="exp"></ui-list-item>
          </ui-list-item>
        </ui-list>
      </div>
    </div>
  `;
};

// ─────────────────────────────────────────────
// 5. Search
// ─────────────────────────────────────────────
window.showListSearch = function () {
  updateListActiveBtn('search');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  const fruits = [
    { id: '1', label: '🍎 Apple', value: 'apple' },
    { id: '2', label: '🍋 Lemon', value: 'lemon' },
    { id: '3', label: '🍓 Strawberry', value: 'strawberry' },
    { id: '4', label: '🫐 Blueberry', value: 'blueberry' },
    { id: '5', label: '🍇 Grape', value: 'grape' },
    { id: '6', label: '🍊 Orange', value: 'orange' },
    { id: '7', label: '🍑 Peach', value: 'peach' },
    { id: '8', label: '🍉 Watermelon', value: 'watermelon' },
    { id: '9', label: '🥭 Mango', value: 'mango' },
    { id: '10', label: '🍍 Pineapple', value: 'pineapple' },
    { id: '11', label: '🍒 Cherry', value: 'cherry' },
    { id: '12', label: '🥝 Kiwi', value: 'kiwi' },
  ];

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">🔍 Searchable List (programmatic items)</h3>
        <ui-list searchable search-placeholder="Search fruits..." id="searchList" max-height="350px"></ui-list>
        <div id="searchOutput" style="margin-top:12px;font-size:13px;color:#6b7280;">Selected: none</div>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Search + Multi-Select</h3>
        <ui-list searchable multi-select search-placeholder="Type to filter..." id="searchMultiList" max-height="350px" dividers></ui-list>
        <div id="searchMultiOutput" style="margin-top:12px;font-size:13px;color:#6b7280;">Selected: none</div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const sl = document.getElementById('searchList');
    const ml = document.getElementById('searchMultiList');
    if (sl) {
      sl.items = fruits;
      sl.addEventListener('listItemSelect', e => {
        document.getElementById('searchOutput').textContent = 'Selected: ' + e.detail.value;
      });
    }
    if (ml) {
      ml.items = fruits;
      ml.addEventListener('listChange', e => {
        document.getElementById('searchMultiOutput').textContent = 'Selected: ' + (e.detail.values.join(', ') || 'none');
      });
    }
  }, 200);
};

// ─────────────────────────────────────────────
// 6. Grouped
// ─────────────────────────────────────────────
window.showListGrouped = function () {
  updateListActiveBtn('grouped');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Grouped with Subheaders</h3>
        <ui-list id="groupedList1" max-height="450px" dividers></ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Collapsible Groups</h3>
        <ui-list id="groupedList2" max-height="450px"></ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Group + Search</h3>
        <ui-list id="groupedList3" searchable max-height="400px" dividers></ui-list>
      </div>
    </div>
  `;

  setTimeout(() => {
    const teamItems = [
      { id: '1', label: 'Alice Johnson', value: 'alice', group: 'Engineering', icon: 'fas fa-user-circle', sublabel: 'Senior Dev' },
      { id: '2', label: 'Bob Smith', value: 'bob', group: 'Engineering', icon: 'fas fa-user-circle', sublabel: 'Junior Dev' },
      { id: '3', label: 'Carol White', value: 'carol', group: 'Design', icon: 'fas fa-user-circle', sublabel: 'UX Lead' },
      { id: '4', label: 'Dave Lee', value: 'dave', group: 'Design', icon: 'fas fa-user-circle', sublabel: 'Visual Designer' },
      { id: '5', label: 'Eve Martin', value: 'eve', group: 'Marketing', icon: 'fas fa-user-circle', sublabel: 'Growth Lead' },
      { id: '6', label: 'Frank Brown', value: 'frank', group: 'Marketing', icon: 'fas fa-user-circle', sublabel: 'Content Writer' },
      { id: '7', label: 'Grace Kim', value: 'grace', group: 'Engineering', icon: 'fas fa-user-circle', sublabel: 'QA Engineer' },
    ];

    ['groupedList1', 'groupedList2', 'groupedList3'].forEach(id => {
      const el = document.getElementById(id);
      if (el) {
        el.items = teamItems;
        el.grouped = true;
        el.groupBy = 'group';
      }
    });
  }, 200);
};

// ─────────────────────────────────────────────
// 7. Drag-and-Drop Reorder
// ─────────────────────────────────────────────
window.showListDraggable = function () {
  updateListActiveBtn('draggable');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">↕️ Drag to Reorder</h3>
        <p style="font-size:13px;color:#9ca3af;margin-bottom:12px;">Drag the ≡ handle to reorder</p>
        <ui-list id="draggableList" dividers max-height="360px"></ui-list>
        <div id="reorderOutput" style="margin-top:12px;padding:8px;background:#f3f4f6;border-radius:6px;font-size:12px;color:#374151;">Reorder events will show here</div>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">↕️ Task Priority List</h3>
        <p style="font-size:13px;color:#9ca3af;margin-bottom:12px;">Drag to re-prioritize tasks</p>
        <ui-list id="taskList" dividers max-height="360px"></ui-list>
      </div>
    </div>
  `;

  setTimeout(() => {
    const dl = document.getElementById('draggableList');
    if (dl) {
      dl.isDraggable = true;
      dl.items = [
        { id: '1', label: 'Step 1: Initialize project', value: 's1' },
        { id: '2', label: 'Step 2: Install dependencies', value: 's2' },
        { id: '3', label: 'Step 3: Configure environment', value: 's3' },
        { id: '4', label: 'Step 4: Write components', value: 's4' },
        { id: '5', label: 'Step 5: Add tests', value: 's5' },
        { id: '6', label: 'Step 6: Build & deploy', value: 's6' },
      ];
      dl.addEventListener('itemsReorder', e => {
        const out = document.getElementById('reorderOutput');
        if (out) out.textContent = 'Order: ' + e.detail.items.map(i => i.label.split(':')[0]).join(' → ');
      });
    }

    const tl = document.getElementById('taskList');
    if (tl) {
      tl.isDraggable = true;
      tl.numbered = true;
      tl.items = [
        { id: '1', label: 'Fix critical login bug', value: 't1' },
        { id: '2', label: 'Update user dashboard', value: 't2' },
        { id: '3', label: 'Write API docs', value: 't3' },
        { id: '4', label: 'Code review PRs', value: 't4' },
        { id: '5', label: 'Sprint planning meeting', value: 't5' },
      ];
    }
  }, 200);
};

// ─────────────────────────────────────────────
// 8. Paginated
// ─────────────────────────────────────────────
window.showListPaginated = function () {
  updateListActiveBtn('paginated');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">📑 Paginated (5 per page)</h3>
        <ui-list id="paginatedList5" paginated items-per-page="5" dividers></ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">📑 Search + Paginated</h3>
        <ui-list id="paginatedSearchList" paginated searchable items-per-page="4" dividers></ui-list>
      </div>
    </div>
  `;

  setTimeout(() => {
    const countries = Array.from({ length: 30 }, (_, i) => ({
      id: String(i + 1),
      label: [
        'Argentina',
        'Australia',
        'Brazil',
        'Canada',
        'China',
        'Denmark',
        'Egypt',
        'France',
        'Germany',
        'Greece',
        'Hungary',
        'India',
        'Indonesia',
        'Italy',
        'Japan',
        'Kenya',
        'Mexico',
        'Netherlands',
        'Nigeria',
        'Norway',
        'Pakistan',
        'Peru',
        'Philippines',
        'Poland',
        'Portugal',
        'Russia',
        'Spain',
        'Sweden',
        'Thailand',
        'Turkey',
      ][i],
      value: `country-${i + 1}`,
    }));

    const pl = document.getElementById('paginatedList5');
    if (pl) pl.items = countries;

    const sl = document.getElementById('paginatedSearchList');
    if (sl) sl.items = countries;
  }, 200);
};

// ─────────────────────────────────────────────
// 9. Virtual Scroll
// ─────────────────────────────────────────────
window.showListVirtual = function () {
  updateListActiveBtn('virtual');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">⚡ Virtual Scroll (10,000 items)</h3>
        <p style="font-size:13px;color:#9ca3af;margin-bottom:12px;">Only visible rows are rendered in the DOM</p>
        <ui-list id="virtualList" virtual item-height="48" max-height="400px"></ui-list>
        <div id="virtualOutput" style="margin-top:8px;font-size:12px;color:#6b7280;">Selected: none</div>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">⚡ Virtual + Search</h3>
        <ui-list id="virtualSearchList" virtual searchable item-height="48" max-height="400px" search-placeholder="Search 5000 users..."></ui-list>
      </div>
    </div>
  `;

  setTimeout(() => {
    const vl = document.getElementById('virtualList');
    if (vl) {
      vl.items = Array.from({ length: 10000 }, (_, i) => ({
        id: String(i),
        label: `Item #${i + 1} — Row content here`,
        value: `v${i}`,
      }));
      vl.addEventListener('listItemSelect', e => {
        document.getElementById('virtualOutput').textContent = 'Selected: ' + e.detail.value;
      });
    }

    const vsl = document.getElementById('virtualSearchList');
    if (vsl) {
      vsl.items = Array.from({ length: 5000 }, (_, i) => ({
        id: String(i),
        label: `User ${i + 1} — user${i + 1}@example.com`,
        value: `user-${i}`,
      }));
    }
  }, 200);
};

// ─────────────────────────────────────────────
// 9. Interactions & Custom Colors
// ─────────────────────────────────────────────
window.showListInteractions = function () {
  updateListActiveBtn('interactions');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:24px;">
      
      <!-- Custom Hover & Selection -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Selection & Hover Colors</h3>
        <p style="font-size:12px;color:#9ca3af;margin-bottom:12px;">Items change color on hover or when selected</p>
        <ui-list dividers>
          <ui-list-item 
            label="Hover Primary" 
            sublabel="Soft green highlight"
            hover-color="primary"
            selection-color="primary"
          ></ui-list-item>
          <ui-list-item 
            label="Select Success" 
            sublabel="Rich green on select"
            selection-color="success"
            selected
          ></ui-list-item>
          <ui-list-item 
            label="Danger Zone" 
            sublabel="Red hover and selection"
            hover-color="danger"
            selection-color="danger"
          ></ui-list-item>
        </ui-list>
      </div>

      <!-- Right-side Avatars -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Right-side Media</h3>
        <p style="font-size:12px;color:#9ca3af;margin-bottom:12px;">Avatars and images on the right</p>
        <ui-list dividers>
          <ui-list-item 
            label="Chat Message" 
            sublabel="Sent from London Office"
            user-avatar="./build/assets/images/logo.png"
            avatar-position="right"
          ></ui-list-item>
          <ui-list-item 
            label="Product Status" 
            sublabel="Stock updated 5m ago"
            image="./build/assets/images/nature_lake_2.png"
            avatar-position="right"
            counter="ACTIVE"
          ></ui-list-item>
          <ui-list-item 
            label="System Alert" 
            sublabel="CPU usage is high"
            icon="fas fa-exclamation-triangle"
            avatar-position="right"
            color="warning"
          ></ui-list-item>
        </ui-list>
      </div>

      <!-- Combined Pro features -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Advanced Interaction</h3>
        <ui-list items-per-page="3">
          <ui-list-item 
            label="Alex Smith" 
            sublabel="Full Stack Engineer"
            user-avatar="./build/assets/images/logo.png"
            avatar-position="right"
            hover-color="info"
            selection-color="info"
            badge="Owner"
            badge-color="primary"
          ></ui-list-item>
          <ui-list-item 
            label="Project Delta" 
            sublabel="Milestone 4 reached"
            avatar-position="right"
            image="./build/assets/images/nature_ocean_4.png"
            selection-color="warning"
            action-icon="fas fa-external-link-alt"
          ></ui-list-item>
        </ui-list>
      </div>
      <!-- Advanced Status & Actions -->
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">Pro Features (Lock & Menu)</h3>
        <p style="font-size:12px;color:#9ca3af;margin-bottom:12px;">Locked items and 3-dot action menus</p>
        <ui-list dividers>
          <ui-list-item 
            label="System Configuration" 
            sublabel="Standard settings (read-only)"
            icon="fas fa-cog"
            locked
          ></ui-list-item>
          <ui-list-item 
            label="Cloud Deployment" 
            sublabel="AWS Environment — Production"
            icon="fas fa-cloud"
            show-menu
            context-menu
          >
            <ui-list-item slot="context-menu" label="Restart" icon="fas fa-sync" value="restart"></ui-list-item>
            <ui-list-item slot="context-menu" label="Scale" icon="fas fa-rocket" value="scale"></ui-list-item>
            <ui-list-item slot="context-menu" label="Terminate" icon="fas fa-power-off" value="term" color="danger"></ui-list-item>
          </ui-list-item>
          <ui-list-item 
            label="User Accounts" 
            sublabel="Manage 24 active members"
            icon="fas fa-users"
            show-menu
            context-menu
          >
             <ui-list-item slot="context-menu" label="View Profile" icon="fas fa-user" value="profile"></ui-list-item>
             <ui-list-item slot="context-menu" label="Suspend" icon="fas fa-user-slash" value="suspend" color="warning"></ui-list-item>
          </ui-list-item>
        </ui-list>
      </div>
    </div>
  `;
};

// ─────────────────────────────────────────────
// 10. The God-Tier Masterpiece
// ─────────────────────────────────────────────
window.showListMasterpiece = function () {
  updateListActiveBtn('masterpiece');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  const initialItems = [
    {
      label: 'Edge Node 01',
      sublabel: 'Uptime: 14 days, 4 hours',
      userAvatar: './build/assets/images/logo.png',
      status: 'online',
      group: 'Computing',
      progress: 92,
      showStar: true,
      starred: true,
      expandable: true,
      priorityPulse: true,
      presence: [
        { id: 1, color: 'blue' },
        { id: 2, color: 'purple' },
      ],
      sparkline: [20, 45, 10, 80, 50, 90, 60, 100],
      auraMode: true,
      presenceCursors: [{ name: 'Sarah (CEO)', color: 'purple', x: 450, y: 20 }],
      avatarGroup: [{ src: './build/assets/images/logo.png' }, { src: './build/assets/images/logo.png' }, { src: './build/assets/images/logo.png' }],
      metadata: { ip: '10.0.0.12', version: '2.4.1-LTS', cluster: 'Main-North' },
      leftActions: [
        { icon: 'fas fa-phone', color: 'success', action: 'call' },
        { icon: 'fas fa-envelope', color: 'primary', action: 'email' },
      ],
      rightActions: [
        { icon: 'fas fa-trash', color: 'danger', action: 'delete' },
        { icon: 'fas fa-archive', color: 'warning', action: 'archive' },
      ],
      collaborators: [{ src: './build/assets/images/logo.png' }, { src: './build/assets/images/logo.png' }],
      avatarGroupPosition: 'right',
    },
    {
      label: 'Worker Pool #04',
      sublabel: 'CPU at 42%',
      icon: 'fas fa-server',
      group: 'Computing',
      progress: 42,
      expandable: true,
      rightActions: [{ icon: 'fas fa-stop-circle', color: 'danger', action: 'stop' }],
      metadata: { ip: '192.168.1.1', version: '1.2.0-STABLE', uptime: '99.99%', load: '1.4' },
      presenceCursors: [{ name: 'Devin (Ops)', color: 'green', x: 280, y: 12 }],
      auraMode: true,
      sparkline: [30, 40, 35, 50, 42, 48],
    },
    {
      label: 'Database Replica',
      sublabel: 'Replication Lag: 14ms',
      icon: 'fas fa-database',
      group: 'Storage',
      progress: 98,
      status: 'busy',
      expandable: true,
      showStar: true,
      avatarGroup: [{ src: './build/assets/images/logo.png' }, { src: './build/assets/images/logo.png' }, { src: './build/assets/images/logo.png' }],
      avatarGroupPosition: 'content',
    },
    { label: 'Cloud Buffer', sublabel: 'Idle', icon: 'fas fa-cloud', group: 'Storage', status: 'away' },
    {
      label: 'Legacy Kernel (v2.4)',
      sublabel: 'Read-Only System / Restricted',
      icon: 'fas fa-lock',
      group: 'Security',
      locked: true,
      priorityPulse: true,
      status: 'offline',
      auraMode: true,
      showGhostLayer: true,
      metadata: { id: 'SYS-001', access: 'Root', secure: 'Yes' },
      presenceCursors: [{ name: 'Forensic Team', color: 'blue', x: 100, y: 15 }],
    },
  ];

  const filterChips = [
    { label: 'All Clusters', count: 12, active: true },
    { label: 'Active', count: 8 },
    { label: 'Critical', count: 1 },
    { label: 'Offline', count: 3 },
  ];

  c.innerHTML = `
    <div style="max-width:800px;margin:auto;">
      <div style="background:var(--bg-primary,white);border-radius:16px;box-shadow:0 10px 40px rgba(0,0,0,0.1);overflow:hidden;">
        <div style="padding:24px;background:linear-gradient(135deg, #1e293b, #334155);color:white;">
          <h2 style="margin:0;font-size:20px;">💎 Ultra-Apex Cluster Control</h2>
          <p style="margin:4px 0 0;font-size:13px;opacity:0.8;">Monitoring active global edge nodes</p>
        </div>
        
        <ui-list 
          id="masterpieceList"
          grouped
          group-by="group"
          sticky-headers
          multi-select
          show-bulk-header
          infinite
          syncing
          show-group-footer
          group-footer-label="Nodes"
          floating-fab
          density="comfortable"
          show-minimap
          command-k
          ekg-active
          group-mini-dashboard
          aura-mode
          view-tabs='[{"label":"Inventory","filter":""}, {"label":"Active Nodes","filter":"online"}, {"label":"Critical","filter":"danger"}]'
        ></ui-list>
      </div>
      
      <div style="margin-top:20px;padding:16px;background:rgba(0,0,0,0.05);border-radius:12px;font-family:monospace;font-size:12px;" id="masterpieceLogger">
        > Ultra-Apex System Initialized. Try "J/K" keys for rapid navigation.
      </div>
    </div>
  `;

  const list = document.getElementById('masterpieceList');
  const logger = document.getElementById('masterpieceLogger');

  list.items = initialItems;
  list.filterChips = filterChips;
  list.bulkActions = [
    { icon: 'fas fa-play', label: 'Start All', action: 'start' },
    { icon: 'fas fa-stop', label: 'Stop All', action: 'stop' },
    { icon: 'fas fa-trash', label: 'Purge', action: 'delete' },
  ];

  list.addEventListener('loadMore', () => {
    if (list.items.length > 50) return;
    const newItems = [
      { label: 'Instance #' + (list.items.length + 1), sublabel: 'Initializing...', icon: 'fas fa-server', group: 'Network' },
      { label: 'Node #' + (list.items.length + 2), sublabel: 'Provisioning...', icon: 'fas fa-cube', group: 'System' },
    ];
    setTimeout(() => {
      list.items = [...list.items, ...newItems];
      logger.innerText = `> Loaded 2 more units. Total: ${list.items.length}`;
    }, 800);
  });

  list.addEventListener('bulkAction', e => {
    logger.innerText = `> Bulk Action: ${e.detail.action.toUpperCase()} on items: ${e.detail.values.join(', ')}`;
    if (e.detail.action === 'delete') {
      list.items = list.items.filter(item => !e.detail.values.includes(item.label));
    }
  });
};

// ─────────────────────────────────────────────
// 11. Responsive Grid Mode
// ─────────────────────────────────────────────
window.showListGrid = function () {
  updateListActiveBtn('grid');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  const projects = [
    {
      label: 'Project Alpha',
      sublabel: 'Development Stage',
      image: './build/assets/images/slide1.png',
      collaborators: [{ src: './build/assets/images/logo.png' }, { src: './build/assets/images/logo.png' }],
    },
    {
      label: 'Project Beta',
      sublabel: 'Productivity Suite',
      image: './build/assets/images/slide2.png',
      collaborators: [{ src: './build/assets/images/logo.png' }, { src: './build/assets/images/logo.png' }],
    },
    {
      label: 'Project Gamma',
      sublabel: 'Mobile Expansion',
      image: './build/assets/images/slide3.png',
      collaborators: [{ src: './build/assets/images/logo.png' }],
    },
    {
      label: 'Project Delta',
      sublabel: 'Legacy Maintenance',
      image: './build/assets/images/nature_desert_3.png',
      collaborators: [{ src: './build/assets/images/logo.png' }],
    },
    {
      label: 'Project Epsilon',
      sublabel: 'Internal Audit',
      image: './build/assets/images/nature_forest_1.png',
      collaborators: [{ src: './build/assets/images/logo.png' }],
    },
    {
      label: 'Project Zeta',
      sublabel: 'AI Integration',
      image: './build/assets/images/nature_lake_2.png',
      collaborators: [{ src: './build/assets/images/logo.png' }],
    },
  ];

  c.innerHTML = `
    <div style="padding:24px;">
      <h2 style="margin-bottom:24px;text-align:center;">Project Portfolio Grid</h2>
      <ui-list grid id="gridList" grid-cols="3"></ui-list>
    </div>
  `;

  document.getElementById('gridList').items = projects;
};

// ─────────────────────────────────────────────
// 12. Tree View with Branch Lines
// ─────────────────────────────────────────────
window.showListTree = function () {
  updateListActiveBtn('tree');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="padding:40px;max-width:600px;margin:auto;">
      <div style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 10px 25px rgba(0,0,0,0.1);">
        <h3 style="margin-top:0;">Source Explorer</h3>
        <ui-list>
          <ui-list-item label="src" icon="fas fa-folder-open" collapsible expanded>
             <ui-list-item slot="children" label="assets" icon="fas fa-folder" collapsible level="1" tree-lines>
                <ui-list-item slot="children" label="styles" icon="fas fa-folder" collapsible level="2" tree-lines>
                   <ui-list-item slot="children" label="main.scss" icon="fab fa-sass" level="3" tree-lines color="info"></ui-list-item>
                   <ui-list-item slot="children" label="theme.scss" icon="fab fa-sass" level="3" tree-lines color="info"></ui-list-item>
                </ui-list-item>
             </ui-list-item>
             <ui-list-item slot="children" label="components" icon="fas fa-folder" collapsible level="1" tree-lines>
                <ui-list-item slot="children" label="list.tsx" icon="fas fa-code" level="2" tree-lines color="success"></ui-list-item>
                <ui-list-item slot="children" label="icon.tsx" icon="fas fa-image" level="2" tree-lines color="warning"></ui-list-item>
             </ui-list-item>
             <ui-list-item slot="children" label="package.json" icon="fas fa-file-invoice" level="1" tree-lines></ui-list-item>
          </ui-list-item>
        </ui-list>
      </div>
    </div>
  `;
};

// ─────────────────────────────────────────────
// 13. Large List (100+ items)
// ─────────────────────────────────────────────
window.showListLarge = function () {
  updateListActiveBtn('large');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  const count = 150;
  const items = Array.from({ length: count }, (_, i) => ({
    id: String(i + 1),
    label: `Performance Test Item #${i + 1}`,
    sublabel: `Testing scroll and rendering with 100+ items (Index: ${i})`,
    icon: i % 2 === 0 ? 'fas fa-server' : 'fas fa-database',
    value: `item-${i + 1}`,
    counter: i % 10 === 0 ? 'NEW' : null,
    color: i % 5 === 0 ? 'primary' : 'default',
  }));

  c.innerHTML = `
    <div style="max-width:800px; margin:0 auto;">
      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 4px 20px rgba(0,0,0,0.1);">
        <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:16px;">
          <h3 style="margin:0;font-size:18px;color:var(--text-primary,#1e293b);">📦 Large Dataset (${count} items)</h3>
          <span style="background:var(--bg-tertiary,#f1f5f9); padding:4px 10px; border-radius:20px; font-size:12px; font-weight:600; color:#475569;">Non-Virtual</span>
        </div>
        <p style="font-size:14px; color:var(--text-secondary,#64748b); margin-bottom:20px;">
          This list renders all 150 items directly in the DOM. This is useful for testing scrolling smoothness, keyboard navigation latency, and initial data binding performance.
        </p>
        <ui-list id="largeList" max-height="600px" dividers searchable search-placeholder="Filter 150 items..."></ui-list>
        <div id="largeListOutput" style="margin-top:16px; padding:12px; background:var(--bg-secondary,#f8fafc); border:1px solid var(--border-default,#e2e8f0); border-radius:8px; font-size:13px; color:var(--text-primary,#1e293b);">
          Selected: <span style="font-weight:600; color:var(--accent-blue,#2563eb);">none</span>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const el = document.getElementById('largeList');
    if (el) {
      el.items = items;
      el.addEventListener('listItemSelect', e => {
        const out = document.getElementById('largeListOutput');
        if (out) out.innerHTML = `Selected: <span style="font-weight:600; color:var(--accent-blue,#2563eb);">${e.detail.value}</span>`;
      });
    }
  }, 200);
};

// ─────────────────────────────────────────────
// 11. Advanced — Loading, Empty, Links, Horizontal
// ─────────────────────────────────────────────
window.showListAdvanced = function () {
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">⏳ Loading State</h3>
        <ui-list loading loading-text="Fetching items..." id="loadingList"></ui-list>
        <ui-button onclick="window.toggleListLoading()" style="margin-top:12px;padding:8px 16px;background:#10b981;color:white;border:none;border-radius:6px;cursor:pointer;font-size:13px;">
          Toggle Loading
        </ui-button>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">📭 Empty State</h3>
        <ui-list id="emptyList" empty-text="No results found. Try a different search." show-empty></ui-list>
        <ui-button onclick="window.loadEmptyList()" style="margin-top:12px;padding:8px 16px;background:#10b981;color:white;border:none;border-radius:6px;cursor:pointer;font-size:13px;">
          Load Items
        </ui-button>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">🔗 Link Items</h3>
        <ui-list dividers>
          <ui-list-item label="GitHub"    icon="fab fa-github"     value="gh"     href="https://github.com" target="_blank"></ui-list-item>
          <ui-list-item label="LinkedIn"  icon="fab fa-linkedin"   value="li"     href="https://linkedin.com" target="_blank"></ui-list-item>
          <ui-list-item label="Twitter"   icon="fab fa-twitter"    value="tw"     href="https://twitter.com" target="_blank"></ui-list-item>
          <ui-list-item label="YouTube"   icon="fab fa-youtube"    value="yt"     href="https://youtube.com" target="_blank"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">↔️ Horizontal List</h3>
        <ui-list horizontal>
          <ui-list-item label="Home"     icon="fas fa-home"    value="h"></ui-list-item>
          <ui-list-item label="Search"   icon="fas fa-search"  value="s"></ui-list-item>
          <ui-list-item label="Library"  icon="fas fa-book"    value="l"></ui-list-item>
          <ui-list-item label="Profile"  icon="fas fa-user"    value="p"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">🎛️ Playground</h3>
        <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:12px;">
          <ui-checkbox id="pgDividers" label="Dividers" oncheckboxchange="updateListPlayground()"></ui-checkbox>
          <ui-checkbox id="pgDense" label="Dense" oncheckboxchange="updateListPlayground()"></ui-checkbox>
          <ui-checkbox id="pgRounded" label="Rounded" oncheckboxchange="updateListPlayground()"></ui-checkbox>
          <ui-checkbox id="pgElevated" label="Elevated" oncheckboxchange="updateListPlayground()"></ui-checkbox>
          <ui-checkbox id="pgNumbered" label="Numbered" oncheckboxchange="updateListPlayground()"></ui-checkbox>
          <label style="font-size:13px;display:flex;align-items:center;gap:6px;">
            Variant:
            <ui-dropdown id="pgVariant" onchange="updateListPlayground()" style="padding:4px 8px;border-radius:4px;border:1px solid #d1d5db;">
              <option>text</option><option>filled</option><option>outlined</option><option>soft</option>
            </ui-dropdown>
          </label>
        </div>
        <ui-list id="playgroundList" dividers>
          <ui-list-item label="Item Alpha"   icon="fas fa-circle" value="a"></ui-list-item>
          <ui-list-item label="Item Beta"    icon="fas fa-circle" value="b"></ui-list-item>
          <ui-list-item label="Item Gamma"   icon="fas fa-circle" value="c"></ui-list-item>
          <ui-list-item label="Item Delta"   icon="fas fa-circle" value="d"></ui-list-item>
        </ui-list>
      </div>

      <div class="demo-block" style="background:var(--bg-primary,white);border-radius:12px;padding:24px;box-shadow:0 2px 12px rgba(0,0,0,0.08);">
        <h3 style="margin-top:0;font-size:15px;">📋 Events Log</h3>
        <ui-list id="eventList" dividers multi-select>
          <ui-list-item label="Click me!" icon="fas fa-hand-pointer" value="v1"></ui-list-item>
          <ui-list-item label="And me!"   icon="fas fa-hand-pointer" value="v2"></ui-list-item>
          <ui-list-item label="Also me!"  icon="fas fa-hand-pointer" value="v3"></ui-list-item>
        </ui-list>
        <div id="eventLog" style="margin-top:12px;background:#1e293b;border-radius:8px;padding:12px;height:120px;overflow-y:auto;font-family:monospace;font-size:11px;color:var(--text-secondary,#64748b);"></div>
      </div>
    </div>
  `;

  // Loading state toggle
  window.toggleListLoading = () => {
    const ll = document.getElementById('loadingList');
    if (ll) ll.loading = !ll.loading;
  };

  // Empty state demo
  window.loadEmptyList = () => {
    const el = document.getElementById('emptyList');
    if (el) {
      el.items = [
        { id: '1', label: 'Loaded Item A', value: 'a' },
        { id: '2', label: 'Loaded Item B', value: 'b' },
        { id: '3', label: 'Loaded Item C', value: 'c' },
      ];
    }
  };

  // Playground update
  window.updateListPlayground = () => {
    const pl = document.getElementById('playgroundList');
    if (!pl) return;
    pl.dividers = document.getElementById('pgDividers').checked;
    pl.dense = document.getElementById('pgDense').checked;
    pl.rounded = document.getElementById('pgRounded').checked;
    pl.elevated = document.getElementById('pgElevated').checked;
    pl.numbered = document.getElementById('pgNumbered').checked;
    pl.variant = document.getElementById('pgVariant').value;
    // update items' variant too
    pl.querySelectorAll('ui-list-item').forEach(item => {
      item.variant = pl.variant;
    });
  };

  // Events log
  setTimeout(() => {
    const el = document.getElementById('eventList');
    const log = document.getElementById('eventLog');
    if (el && log) {
      const addLog = msg => {
        const line = document.createElement('div');
        line.textContent = `[${new Date().toLocaleTimeString()}] ${msg}`;
        log.insertBefore(line, log.firstChild);
        if (log.children.length > 20) log.removeChild(log.lastChild);
      };
      el.addEventListener('listItemSelect', e => addLog(`listItemSelect → value="${e.detail.value}"`));
      el.addEventListener('listChange', e => addLog(`listChange → values=[${e.detail.values.join(',')}]`));
    }
  }, 200);
};

// ─────────────────────────────────────────────
// 10. Apex List Masterclass
// ─────────────────────────────────────────────
window.showListApex = function () {
  updateListActiveBtn('apex');
  const c = document.getElementById('listDemoContainer');
  if (!c) return;

  const apexCardStyle = [
    'background:var(--bg-primary,#ffffff)',
    'color:var(--text-primary,#1e293b)',
    'border:1px solid var(--border-default,#e2e8f0)',
    'border-radius:16px',
    'padding:24px',
    'box-shadow:0 10px 25px rgba(15,23,42,0.08)'
  ].join(';');

  const apexHeadingStyle = [
    'margin:0 0 16px',
    'font-size:16px',
    'color:var(--text-primary,#1e293b)',
    'display:flex',
    'align-items:center',
    'gap:8px'
  ].join(';');

  c.innerHTML = `
    <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:24px;">

      <!-- 1. User Directory (Avatars + Tags) -->
      <div class="demo-block" style="${apexCardStyle}">
        <h3 style="${apexHeadingStyle}">
          <span style="font-size:20px;">👥</span> Smart User Directory
        </h3>
        <ui-list dividers>
          <ui-list-item 
            label="Marcus Rodriguez" 
            sublabel="Principal Engineer — London"
            user-avatar="./build/assets/images/logo.png"
            badge="Admin"
            badge-color="primary"
            tags='[{"label":"AI","color":"indigo","variant":"soft"},{"label":"React","color":"info","variant":"soft"}]'
            multiline
          ></ui-list-item>
          <ui-list-item 
            label="Sasha Silver" 
            sublabel="Product Designer — Berlin"
            user-avatar="./build/assets/images/logo.png"
            badge="Pro"
            badge-color="success"
            tags='[{"label":"Figma","color":"warning","variant":"soft"},{"label":"UX","color":"danger","variant":"soft"}]'
            multiline
          ></ui-list-item>
          <ui-list-item 
            label="Priya Sharma" 
            sublabel="Growth Lead — Mumbai"
            user-avatar="./build/assets/images/logo.png"
            tags='[{"label":"Marketing","color":"success","variant":"soft"}]'
            multiline
          ></ui-list-item>
          <ui-list-item 
            label="Alex Chen" 
            sublabel="DevOps Engineer — Remote"
            user-avatar="./build/assets/images/logo.png"
            badge="External"
            badge-color="secondary"
            multiline
          ></ui-list-item>
        </ui-list>
      </div>

      <!-- 2. Product Catalog (Images + Counters) -->
      <div class="demo-block" style="${apexCardStyle}">
        <h3 style="${apexHeadingStyle}">
          <span style="font-size:20px;">🛒</span> Store Inventory
        </h3>
        <ui-list dividers variant="outline">
          <ui-list-item 
            label="Premium Headphones" 
            sublabel="Noise Cancelling — Bluetooth 5.0"
            image="./build/assets/images/nature_ocean_4.png"
            counter="$299"
            badge="Sale"
            badge-color="danger"
            multiline
          ></ui-list-item>
          <ui-list-item 
            label="Smart Watch G2" 
            sublabel="Oxygen Sensor — OLED"
            image="./build/assets/images/slide1.png"
            counter="$349"
            multiline
          ></ui-list-item>
          <ui-list-item 
            label="Mechanical Keyboard" 
            sublabel="Cherry MX Blue — RGB"
            image="./build/assets/images/slide2.png"
            counter="$189"
            badge="-15%"
            badge-color="success"
            multiline
          ></ui-list-item>
        </ui-list>
      </div>

      <div id="apexDemoContainer2" class="demo-block" style="grid-column: 1 / -1; display:grid; grid-template-columns:repeat(auto-fit,minmax(400px,1fr)); gap:24px;"></div>
    </div>
  `;

  const c2 = document.getElementById('apexDemoContainer2');
  if (!c2) return;

  c2.innerHTML = `
    <!-- 3. Skeleton Loading Flow -->
    <div style="${apexCardStyle};position:relative;">
      <h3 style="${apexHeadingStyle}">
        <span style="font-size:20px;">🪄</span> Loading Experience (Skeletons)
      </h3>
      <ui-list id="skeletonDemoList" dividers></ui-list>
      <ui-button 
        onclick="globalThis.toggleApexSkeleton()"
        variant="outline"
        style="margin-top:20px;width:100%;"
        label="🪄 Toggle Skeleton State"
      ></ui-button>
    </div>

    <!-- 4. Real-time Discovery (Highlighting) -->
    <div style="${apexCardStyle}">
      <h3 style="${apexHeadingStyle}">
        <span style="font-size:20px;">🔦</span> Live Discovery (Search Highlighting)
      </h3>
      <ui-list 
        id="highlightDemoList" 
        searchable 
        search-query="node"
        search-placeholder="Try searching for 'javascript' or 'python'..." 
        density="cozy"
        view-tabs='[{"label":"Inventory","filter":""}, {"label":"Active Nodes","filter":"online"}, {"label":"Critical","filter":"danger"}]'
        max-height="600px"
        dividers
      ></ui-list>
    </div>
  `;

  // Populate Skeleton Demo
  const skList = document.getElementById('skeletonDemoList');
  if (skList) {
    skList.skeleton = true; // Start as skeleton
    skList.items = [
      { label: 'Loading User...', sublabel: 'Fetching metadata...', avatar: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' },
      { label: 'Loading User...', sublabel: 'Fetching metadata...', avatar: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' },
      { label: 'Loading User...', sublabel: 'Fetching metadata...', avatar: 'data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7' },
    ];
  }

  // Populate Highlight Demo
  const hList = document.getElementById('highlightDemoList');
  if (hList) {
    hList.items = [
      {
        label: 'JavaScript Frameworks',
        sublabel: 'React, Vue, Angular, Node.js',
        icon: 'fab fa-js',
        showGhostLayer: true,
        metadata: { ip: '10.30.1.21', version: 'DISC-2.8.4', id: 'DISC-JS-001', scope: 'frontend-cluster' }
      },
      {
        label: 'Node.js Runtime',
        sublabel: 'Built on Chrome V8 engine',
        icon: 'fab fa-node-js',
        showGhostLayer: true,
        metadata: { ip: '10.30.1.22', version: 'DISC-2.8.5', id: 'DISC-NODE-014', scope: 'runtime-core' }
      },
      {
        label: 'Python Scripting',
        sublabel: 'Data analysis and backend',
        icon: 'fab fa-python',
        showGhostLayer: true,
        metadata: { ip: '10.30.1.23', version: 'DISC-1.9.7', id: 'DISC-PY-032', scope: 'analytics-lab' }
      },
      {
        label: 'React Native',
        sublabel: 'Mobile apps with JS',
        icon: 'fab fa-react',
        showGhostLayer: true,
        metadata: { ip: '10.30.1.24', version: 'DISC-3.1.0', id: 'DISC-RN-007', scope: 'mobile-edge' }
      },
      {
        label: 'TypeScript',
        sublabel: 'Typed JavaScript variant',
        icon: 'fab fa-js-square',
        showGhostLayer: true,
        metadata: { ip: '10.30.1.25', version: 'DISC-5.6.0', id: 'DISC-TS-019', scope: 'typed-core' }
      },
    ];
  }

  window.toggleApexSkeleton = () => {
    const el = document.getElementById('skeletonDemoList');
    if (el) {
      el.skeleton = !el.skeleton;
      // When not skeleton, load actual data
      if (!el.skeleton) {
        el.items = [
          {
            label: 'Thomas Anderson',
            sublabel: 'The One — Core Systems',
            userAvatar: './build/assets/images/logo.png',
            tags: '["Hero","Matrix"]',
            showGhostLayer: true,
            metadata: { ip: '172.16.10.11', version: 'LIVE-4.2.1', id: 'SKEL-TH-001', role: 'system-core' }
          },
          {
            label: 'Trinity Moss',
            sublabel: 'Tactical Lead',
            userAvatar: './build/assets/images/logo.png',
            tags: '["Pilot","Combat"]',
            showGhostLayer: true,
            metadata: { ip: '172.16.10.12', version: 'LIVE-4.2.2', id: 'SKEL-TR-002', role: 'ops-lead' }
          },
          {
            label: 'Morpheus Dream',
            sublabel: 'Captain — Nebuchadnezzar',
            userAvatar: './build/assets/images/logo.png',
            tags: '["Leader","Captain"]',
            showGhostLayer: true,
            metadata: { ip: '172.16.10.13', version: 'LIVE-4.2.3', id: 'SKEL-MO-003', role: 'fleet-command' }
          },
        ];
      } else {
        el.items = [
          { label: 'Loading User...', sublabel: 'Fetching metadata...', avatar: '' },
          { label: 'Loading User...', sublabel: 'Fetching metadata...', avatar: '' },
          { label: 'Loading User...', sublabel: 'Fetching metadata...', avatar: '' },
        ];
      }
    }
  };
};
