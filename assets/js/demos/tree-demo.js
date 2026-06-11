/* eslint-disable no-undef */
function updateTreeActiveBtn(demoName) {
  const section = document.getElementById('tree');
  if (!section) return;
  section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
    btn.selected = btn.getAttribute('data-demo') === demoName;
  });
}

export function initTreeDemo() {
  const section = document.getElementById('tree');
  if (!section) return;

  section.innerHTML = `
    <div style="display:flex; align-items:center; justify-content:space-between; margin-bottom:20px;">
      <h2 style="margin:0;">🌳 Unified Tree Component</h2>
   
    </div>
    <p style="color:var(--text-secondary, #6b7280); margin-bottom:24px;">
      Enterprise-grade hierarchical data component. Features high-end curved connectors, L-shape logic, real-time search, drag-and-drop, and professional "Modern Green" aesthetic.
    </p>

    <div class="demo-controls" style="display:flex; gap:10px; flex-wrap:wrap; margin-bottom:24px;">
      <ui-button onclick="window.showTreeBasic()" data-demo="basic" variant="outline" label="Basic" icon="leaf" library="lucide"></ui-button>
      <ui-button onclick="window.showTreeModernGreen()" data-demo="moderngeen" variant="outline" label="Modern Green" icon="beaker" library="lucide"></ui-button>
      <ui-button onclick="window.showTreeCheckboxes()" data-demo="checkboxes" variant="outline" label="Checkboxes" icon="check-square" library="lucide" ></ui-button>
      <ui-button onclick="window.showTreeDND()" data-demo="dnd" variant="outline" label="Drag & Drop" icon="move" library="lucide"></ui-button>

      <ui-button onclick="window.showTreeAesthetics()" data-demo="aesthetics" variant="outline" label="Aesthetics" icon="palette" library="lucide" ></ui-button>
      <ui-button onclick="window.showTreeStress()" data-demo="stress" variant="outline" label="Stress Test" icon="flame" library="lucide"></ui-button>
      <ui-button onclick="window.showTreeGitGraph()" data-demo="gitgraph" variant="outline" label="Git Graph" icon="git-branch" library="lucide" ></ui-button>
      <ui-button onclick="window.showTreeIcons()" data-demo="icons" variant="outline" label="Custom Icons" icon="plus" library="lucide"></ui-button>
      <ui-button onclick="window.showTreePlayground()" data-demo="playground" variant="outline" label="Playground" icon="gamepad-2" library="lucide" ></ui-button>
    </div>

    <div id="treeDemoContainer" style="margin-top:8px; display:grid; grid-template-columns: 1fr; gap:32px;"></div>
  `;

  setTimeout(() => window.showTreeBasic(), 100);
}

// Demo Data From Server
const TREE_DATA = [
  {
    id: '1',
    label: 'Root Folder',
    expanded: true,
    children: [
      {
        id: '1-1',
        label: 'Documents',
        expanded: false,
        children: [
          { id: '1-1-1', label: 'Resume.pdf', icon: 'file-pdf', color: 'danger' },
          { id: '1-1-2', label: 'CoverLetter.doc', icon: 'file-word', color: 'primary' },
        ],
      },
      {
        id: '1-2',
        label: 'Pictures',
        children: [
          { id: '1-2-1', label: 'Vacation.jpg', icon: 'image', color: 'success' },
          { id: '1-2-2', label: 'Family.png', icon: 'image', color: 'secondary' },
        ],
      },
      { id: '1-3', label: 'Music', icon: 'music', color: 'info' },
    ],
  },
];

const COMPONENT_DATA = [
  {
    id: '1',
    label: 'My Project',
    icon: 'folder',
    color: 'primary',
    expanded: true,
    children: [
      {
        id: '1-1',
        label: 'src',
        icon: 'folder',
        color: 'info',
        connectorColor: '#10b981',
        expanded: true,
        children: [
          { id: '1-1-1', label: 'index.ts', icon: 'file-code', color: 'warning' },
          { id: '1-1-2', label: 'styles.css', icon: 'file-code-o', color: 'info' },
          { id: '1-1-3', label: 'App.tsx', icon: 'code', color: 'primary' },
        ],
      },
      {
        id: '1-2',
        label: 'public',
        icon: 'folder-open',
        color: 'success',
        connectorColor: '#f59e0b',
        children: [
          { id: '1-2-1', label: 'index.html', icon: 'html5', color: 'danger' },
          { id: '1-2-2', label: 'favicon.ico', icon: 'image', color: 'secondary' },
        ],
      },
      { id: '1-3', label: 'package.json', icon: 'file-text', color: 'danger' },
      { id: '1-4', label: 'README.md', icon: 'file-text-o', color: 'secondary' },
    ],
  },
];

const ELITE_DATA = [
  {
    id: 'src',
    label: 'src',
    icon: 'folder',
    expanded: true,
    actions: [
      { id: 'add', icon: 'plus', tooltip: 'New File' },
      { id: 'refresh', icon: 'rotate-cw', tooltip: 'Reload' },
    ],
    children: [
      {
        id: 'components',
        label: 'components',
        icon: 'folder',
        expanded: true,
        children: [
          {
            id: 'tree-tsx',
            label: 'tree.tsx',
            icon: 'file-code',
            color: 'primary',
            actions: [{ id: 'delete', icon: 'trash-2', color: '#ef4444' }],
          },
          { id: 'tree-scss', label: 'tree.scss', icon: 'file-type-scss', color: 'info' },
        ],
      },
      {
        id: 'utils',
        label: 'utils.ts',
        icon: 'file-code',
        loading: true,
      },
    ],
  },
  {
    id: 'package',
    label: 'package.json',
    icon: 'file-json',
    badge: 'v1.0.0',
    actions: [{ id: 'external', icon: 'external-link' }],
  },
  {
    id: 'license',
    label: 'LICENSE',
    icon: 'file-text',
    locked: true,
  },
];

const MODERN_GREEN_DATA = [
  {
    id: 'root',
    label: 'Zenith Project (Ground)',
    icon: 'target',
    connectorColor: '#10b981',
    expanded: true,
    children: [
      {
        id: 'src',
        label: 'src',
        icon: 'folder',
        connectorColor: '#10b981',
        expanded: true,
        children: [
          { id: 'tree', label: 'tree.tsx', icon: 'cpu', color: 'success', badge: 'v2.1' },
          { id: 'styles', label: 'styles.scss', icon: 'droplet' },
          {
            id: 'assets',
            label: 'assets',
            icon: 'archive',
            children: [
              { id: 'logo', label: 'logo.svg', icon: 'image' },
              { id: 'bg', label: 'background.png', icon: 'image' },
            ],
          },
        ],
      },
      {
        id: 'config',
        label: 'Configuration',
        icon: 'settings',
        children: [
          { id: 'env', label: '.env', icon: 'lock' },
          { id: 'pkg', label: 'package.json', icon: 'package' },
        ],
      },
      { id: 'dist', label: 'Distribution', icon: 'send', color: 'info' },
    ],
  },
];

const ORG_CHART_DATA = [
  {
    id: '1',
    label: 'Board of Directors',
    icon: 'users',
    badge: 'Top Level',
    color: 'primary',
    expanded: true,
    children: [
      {
        id: '1-1',
        label: 'Chief Executive Officer',
        icon: 'user',
        badge: 'CEO',
        color: 'info',
        expanded: true,
        children: [
          {
            id: '1-1-1',
            label: 'Chief Technology Officer',
            icon: 'cpu',
            badge: 'Tech',
            color: 'success',
            expanded: true,
            children: [
              {
                id: '1-1-1-1',
                label: 'VP of Engineering',
                icon: 'users',
                badge: 'Management',
                color: 'warning',
                expanded: true,
                children: [
                  { id: '1-1-1-1-1', label: 'Engineering Manager', icon: 'shield', color: 'danger' },
                  { id: '1-1-1-1-2', label: 'Platform Architect', icon: 'code', color: 'info' },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
];

const GIT_GRAPH_DATA = [
  {
    id: 'g1',
    label: 'initial commit',
    icon: 'git-commit',
    badge: 'main',
    color: 'primary',
    expanded: true,
    children: [
      {
        id: 'g2',
        label: 'feat: add core tree logic',
        icon: 'git-commit',
        expanded: true,
        children: [
          {
            id: 'g3',
            label: 'chore: update stencil config',
            icon: 'git-commit',
            expanded: true,
            children: [
              {
                id: 'g4',
                label: 'feature/animation: add spring motions',
                icon: 'git-branch',
                badge: 'feature/anim',
                color: 'info',
                expanded: true,
                children: [
                  { id: 'g5', label: 'refactor: simplify render path', icon: 'git-commit' },
                  { id: 'g6', label: 'fix: edge case in dnd', icon: 'git-commit' },
                ],
              },
              { id: 'g7', label: 'docs: update readme', icon: 'git-commit', badge: 'v1.2.0', color: 'success' },
              { id: 'g8', label: 'fix: accessibility a11y', icon: 'git-commit', children: [{ id: 'g9', label: 'add aria-labels', icon: 'git-commit' }] },
            ],
          },
        ],
      },
    ],
  },
];

// Stress Test Generators
function generateLargeTree(count = 120) {
  const tree = [];
  let nodeId = 1;
  const techTopics = ['Frontend', 'Backend', 'DevOps', 'Security', 'Database', 'Mobile', 'AI/ML', 'Cloud'];
  const subtopics = [
    'React',
    'Vue',
    'Angular',
    'Svelte',
    'Next.js',
    'Remix',
    'Nuxt',
    'SvelteKit',
    'Node',
    'Python',
    'Go',
    'Rust',
    'Java',
    'C#',
    'PHP',
    'Ruby',
    'Docker',
    'Kubernetes',
    'CI/CD',
    'Terraform',
    'Ansible',
    'Helm',
    'Auth',
    'OAuth',
    'JWT',
    'RBAC',
    'LDAP',
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Redis',
    'Cassandra',
    'React Native',
    'Flutter',
    'Swift',
    'Kotlin',
    'TensorFlow',
    'PyTorch',
    'Scikit-learn',
    'MLflow',
    'AWS',
    'Azure',
    'GCP',
    'Cloudflare',
  ];
  let topicIdx = 0;
  while (nodeId <= count && topicIdx < techTopics.length) {
    const topic = techTopics[topicIdx++];
    const start = (topicIdx - 1) * Math.ceil(subtopics.length / techTopics.length);
    const end = Math.min(start + Math.ceil(subtopics.length / techTopics.length), subtopics.length);
    const children = subtopics.slice(start, end).map((s, i) => ({
      id: `large-${nodeId++}-${i}`,
      label: s,
      icon: 'file',
    }));
    tree.push({ id: `large-${nodeId++}`, label: topic, icon: 'folder', children });
  }
  return tree;
}

function generateStressTestData() {
  let total = 0;
  function createNodes(depth, maxDepth) {
    if (depth > maxDepth) return [];
    const count = depth < 3 ? 3 : depth < 6 ? 2 : 1;
    const nodes = [];
    for (let i = 0; i < count; i++) {
      total++;
      const id = `stress-${depth}-${i}-${total}`;
      nodes.push({
        id,
        label: `Level ${depth} Node ${i + 1}`,
        icon: depth < maxDepth ? 'folder' : 'file',
        expanded: depth < 3,
        children: createNodes(depth + 1, maxDepth),
      });
    }
    return nodes;
  }
  const { data } = { data: createNodes(1, 10) };
  return { data, total };
}

window.showTreeBasic = function () {
  updateTreeActiveBtn('basic');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:24px;">
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0;">Default Vertical</h4>
        <ui-tree id="basic-tree" size="md"></ui-tree>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0;">Icons and Colors</h4>
        <ui-tree id="icon-tree" variant="bordered" size="md"></ui-tree>
      </div>
    </div>
  `;
  setTimeout(() => {
    document.getElementById('basic-tree').nodes = TREE_DATA;
    document.getElementById('icon-tree').nodes = COMPONENT_DATA;
  }, 50);
};

window.showTreeModernGreen = function () {
  updateTreeActiveBtn('moderngeen');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:40px; border-radius:16px; box-shadow:0 25px 50px -12px rgba(0, 0, 0, 0.5);">
      <div style="margin-bottom:20px; border-bottom:1px solid var(--border-subtle, rgba(0,0,0,0.1)); padding-bottom:15px;">
        <h3 style="color:#10b981; margin:0; font-size:1.5rem; display:flex; align-items:center; gap:10px;">
          <span style="display:inline-block; width:12px; height:12px; background:#10b981; border-radius:50%; box-shadow:0 0 10px #10b981;"></span>
          Scientific Engineering Mode
        </h3>
        <p style="color:var(--text-secondary,#64748b); font-size:14px; margin:5px 0 0 22px;">High-precision navigation with real-time hierarchical search filtering.</p>
      </div>
      <ui-tree id="modern-green-tree" variant="modern-green" theme="dark" show-search="true" connector-shape="square"></ui-tree>
    </div>
  `;
  setTimeout(() => {
    const tree = document.getElementById('modern-green-tree');
    if (tree) tree.nodes = MODERN_GREEN_DATA;
  }, 50);
};

window.showTreeCheckboxes = function () {
  updateTreeActiveBtn('checkboxes');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
      <h4 style="margin-top:0;">Multiselect with Checkboxes</h4>
      <p style="color:var(--text-secondary, #6b7280); font-size:14px; margin-bottom:16px;">Cascading selection logic: parent checks all children, children partially check parents.</p>
      <ui-tree id="checkbox-tree" checkboxes="true" selectable="true" multi-select="true"></ui-tree>
      <div id="selection-log" style="margin-top:20px; padding:12px; background:var(--bg-secondary,#f8fafc); border-radius:6px; font-family:monospace; font-size:12px;">Selection: []</div>
    </div>
  `;
  setTimeout(() => {
    const tree = document.getElementById('checkbox-tree');
    tree.nodes = COMPONENT_DATA;
    tree.addEventListener('nodeCheck', e => {
      document.getElementById('selection-log').innerText = `Checked: ${JSON.stringify(e.detail.node.label)}`;
    });
  }, 50);
};

window.showTreeDND = function () {
  updateTreeActiveBtn('dnd');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
       <h4 style="margin-top:0;">Native Drag and Drop</h4>
       <p style="color:var(--text-secondary, #6b7280); font-size:14px; margin-bottom:16px;">Drag nodes to reorder within the same level or move between folders.</p>
       <ui-tree id="drag-tree" enable-drag="true"></ui-tree>
       <div id="drag-log" style="margin-top:20px; padding:12px; background:var(--accent-orange-soft,#fff7ed); border-left:4px solid #f97316; border-radius:4px; font-size:13px; color:var(--accent-orange,#c2410c);">Ready to drag...</div>
    </div>
  `;
  setTimeout(() => {
    const tree = document.getElementById('drag-tree');
    tree.nodes = TREE_DATA;
    tree.addEventListener('nodeDragStart', e => {
      document.getElementById('drag-log').innerText = `Dragging: ${e.detail.label}`;
    });
    tree.addEventListener('nodeDragEnd', e => {
      document.getElementById('drag-log').innerText = `Dropped onto: ${e.detail.target.label}`;
    });
  }, 50);
};



window.showTreeAesthetics = function () {
  updateTreeActiveBtn('aesthetics');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(350px, 1fr)); gap:24px;">
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; border:1px solid var(--border-subtle, #f1f5f9);">
        <h4 style="margin-top:0;">🌌 Zenith Deep Space</h4>
        <p style="font-size:12px; color:var(--text-secondary,#64748b); margin-top:-10px;">Glassmorphism with illuminated structural paths.</p>
        <ui-tree id="glass-tree" variant="glass" show-glow="true" selectable="true" connector-opacity="0.2"></ui-tree>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05); border:1px solid var(--border-subtle,#f1f5f9);">
        <h4 style="margin-top:0; color:#10b981;">🌿 Bio-Logical Branching</h4>
        <p style="font-size:12px; color:var(--text-secondary,#64748b); margin-top:-10px;">Depth-weighted connectors that thin as hierarchy grows.</p>
        <ui-tree id="glow-tree" show-glow="true" selectable="true" variant="bordered" connector-color="#10b981" connector-width="2.5"></ui-tree>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; border:1px solid var(--border-subtle, #f1f5f9);">
        <h4 style="margin-top:0; color:var(--accent-yellow,#f59e0b);">⚡ Plasma Trail</h4>
        <p style="font-size:12px; color:var(--text-secondary,#64748b); margin-top:-10px;">High-contrast neon path highlighting on selection.</p>
        <ui-tree id="minimal-tree" variant="minimal" show-glow="true" selectable="true" connector-color="#f59e0b"></ui-tree>
      </div>
    </div>
  `;
  setTimeout(() => {
    document.getElementById('glass-tree').nodes = COMPONENT_DATA;
    document.getElementById('glow-tree').nodes = MODERN_GREEN_DATA;
    document.getElementById('minimal-tree').nodes = TREE_DATA;
  }, 50);
};

window.showTreeStress = function () {
  updateTreeActiveBtn('stress');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;

  const { data, total } = generateStressTestData();
  const largeData = generateLargeTree(150);

  container.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0; color:var(--accent-red,#ef4444);">🔥 Deep Hierarchy (10 Levels)</h4>
        <p style="color:var(--text-secondary,#64748b); font-size:12px; margin-bottom:16px;">Recursive generation with depth-based branching. Total nodes: <strong>${total}</strong></p>
        <div style="height:400px; border:1px solid var(--border-subtle,#f1f5f9); border-radius:8px; overflow:hidden;">
          <ui-tree id="stress-tree-deep" variant="directory" show-lines="true" animated="true" virtual-scroll="true" virtual-scroll-height="400"></ui-tree>
        </div>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0; color:#10b981;">🚀 Virtual Scroll (150+ Nodes)</h4>
        <p style="color:var(--text-secondary,#64748b); font-size:12px; margin-bottom:16px;">Testing large flat-level performance with virtualized rendering.</p>
        <div style="height:400px; border:1px solid var(--border-subtle,#f1f5f9); border-radius:8px; overflow:hidden;">
          <ui-tree id="stress-tree-large" variant="bordered" searchable="true" virtual-scroll="true" virtual-scroll-height="400"></ui-tree>
        </div>
      </div>
    </div>
  `;

  setTimeout(() => {
    document.getElementById('stress-tree-deep').nodes = data;
    document.getElementById('stress-tree-large').nodes = largeData;
  }, 50);
};

window.showTreeGitGraph = function () {
  updateTreeActiveBtn('gitgraph');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div style="display:grid; grid-template-columns: 1fr 1fr; gap:24px;">
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0;">Git Graph Variant (Light)</h4>
        <p style="color:var(--text-secondary,#64748b); font-size:12px; margin-bottom:16px;">Simplified commit history view with dot-based nodes and vertical lanes.</p>
        <ui-tree id="git-tree-light" variant="git-graph" selectable="true" show-icons="false" animated="true"></ui-tree>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05); border:1px solid var(--border-subtle, #f1f5f9);">
        <h4 style="margin-top:0; color:#10b981;">Git Graph Variant (Dark)</h4>
        <p style="color:var(--text-secondary,#64748b); font-size:12px; margin-bottom:16px;">Professional developer-centric commit log aesthetic.</p>
        <ui-tree id="git-tree-dark" variant="git-graph" selectable="true" show-icons="false" animated="true"></ui-tree>
      </div>
    </div>
  `;
  setTimeout(() => {
    document.getElementById('git-tree-light').nodes = GIT_GRAPH_DATA;
    document.getElementById('git-tree-dark').nodes = GIT_GRAPH_DATA;
  }, 50);
};

window.showTreeIcons = function () {
  updateTreeActiveBtn('icons');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;
  container.innerHTML = `
    <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr)); gap:24px;">
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0;">Plus / Minus Icons</h4>
        <ui-tree id="tree-plus-minus" expand-icon-type="plus-minus"></ui-tree>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0;">Caret Style</h4>
        <ui-tree id="tree-caret" expand-icon-type="caret"></ui-tree>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0;">Arrow Style</h4>
        <ui-tree id="tree-arrow" expand-icon-type="arrow"></ui-tree>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0;">Custom Icons (Folder)</h4>
        <ui-tree id="tree-custom-icons" expand-icon-type="custom" expanded-icon="folder-open" collapsed-icon="folder"></ui-tree>
      </div>
      <div class="demo-card" style="background:var(--bg-secondary, #fff); padding:24px; border-radius:12px; box-shadow:0 10px 25px rgba(0,0,0,0.05);">
        <h4 style="margin-top:0;">Colored & Larger Icons</h4>
        <ui-tree id="tree-colored-icons" expand-icon-type="plus-minus" expand-icon-size="16px" expand-icon-color="#ef4444"></ui-tree>
      </div>
    </div>
  `;
  setTimeout(() => {
    const trees = ['tree-plus-minus', 'tree-caret', 'tree-arrow', 'tree-custom-icons', 'tree-colored-icons'];
    trees.forEach(id => {
      document.getElementById(id).nodes = TREE_DATA;
    });
  }, 50);
};

window.showTreePlayground = function () {
  updateTreeActiveBtn('playground');
  const container = document.getElementById('treeDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3 style="margin-top:0; display:flex; align-items:center; gap:12px;">
        🎮 Interactive Zenith Playground
        <span style="font-size:12px; font-weight:normal; background: var(--bg-secondary, #f1f5f9); padding:4px 10px; border-radius:20px; color: var(--text-secondary, #64748b);">v2.0 Elite Architecture</span>
      </h3>
      
      <div style="display:grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap:20px; background: var(--bg-secondary); padding:24px; border-radius:12px; margin-bottom:24px; border:1px solid var(--border-default);">
        <div class="control">
          <label style="display:block; font-size:12px; font-weight:700; color: var(--text-secondary); margin-bottom:8px;">DATA SET</label>
          <ui-dropdown id="dataset-select" value="standard" options='[{"label":"Standard","value":"standard"},{"label":"Elite (IDE / Explorer)","value":"elite"},{"label":"Modern Green","value":"green"}]'></ui-dropdown>
        </div>
        <div class="control">
          <label style="display:block; font-size:12px; font-weight:700; color: var(--text-secondary); margin-bottom:8px;">CONN SHAPE</label>
          <ui-dropdown id="shape-select" value="rounded" options='[{"label":"Zen-Curve (Smooth)","value":"rounded"},{"label":"L-Shape (Technical)","value":"square"}]'></ui-dropdown>
        </div>
        <div class="control">
          <label style="display:block; font-size:12px; font-weight:700; color: var(--text-secondary); margin-bottom:8px;">CONN WIDTH</label>
          <ui-range-slider id="width-slider" min="0.5" max="4" step="0.1" value="1.8"></ui-range-slider>
          <div style="display:flex; justify-content:space-between; font-size:10px; color: var(--text-secondary); margin-top:4px;"><span>Thin</span><span>Thick</span></div>
        </div>
        <div class="control">
          <label style="display:block; font-size:12px; font-weight:700; color: var(--text-secondary); margin-bottom:8px;">VARIANT / THEME</label>
          <div style="display:flex; gap:8px;">
             <ui-dropdown id="variant-select" value="default" options='[{"label":"Default","value":"default"},{"label":"Bordered","value":"bordered"},{"label":"Glass","value":"glass"},{"label":"Modern Green","value":"modern-green"}]' style="flex:1;"></ui-dropdown>
             <ui-dropdown id="theme-select" value="light" options='[{"label":"Light","value":"light"},{"label":"Dark","value":"dark"}]' style="flex:0.6;"></ui-dropdown>
          </div>
        </div>
        <div class="control">
          <label style="display:block; font-size:12px; font-weight:700; color: var(--text-secondary); margin-bottom:8px;">INTERACTIVE</label>
          <div style="display:grid; grid-template-columns: 1fr 1fr; gap:8px; font-size:13px;">
            <ui-checkbox id="lines-check" label="Lines" checked="true"></ui-checkbox>
            <ui-checkbox id="glow-check" label="Glow"></ui-checkbox>
            <ui-checkbox id="select-check" label="Select" checked="true"></ui-checkbox>
            <ui-checkbox id="check-check" label="Check"></ui-checkbox>
          </div>
        </div>
        <div class="control">
          <label style="display:block; font-size:12px; font-weight:700; color: var(--text-secondary); margin-bottom:8px;">LINE COLOR</label>
          <ui-color-picker id="color-picker" value="#10b981"></ui-color-picker>
        </div>
      </div>

      <div class="playground-preview" style="min-height:300px; padding:20px;">
        <ui-tree id="playground-tree" size="md"></ui-tree>
      </div>

      <div style="margin-top:24px; padding:16px; background:#1e293b; border-radius:8px; color:var(--text-secondary,#64748b); font-family:monospace; font-size:12px;">
        <div style="color:#f8fafc; margin-bottom:8px; font-weight:bold;">📋 EVENT LOG</div>
        <div id="pg-event-log" style="max-height:100px; overflow-y:auto;">System ready...</div>
      </div>
    </div>
  `;

  window.updatePlaygroundTree = (prop, val) => {
    const tree = document.getElementById('playground-tree');
    tree[prop] = val;
    window.logPlaygroundEvent('Prop Change', { [prop]: val });
  };

  window.changeTreeDataSet = val => {
    const tree = document.getElementById('playground-tree');
    if (val === 'elite') tree.nodes = ELITE_DATA;
    else if (val === 'green') tree.nodes = MODERN_GREEN_DATA;
    else tree.nodes = COMPONENT_DATA;
    window.logPlaygroundEvent('Data Change', { set: val });
  };

  window.logPlaygroundEvent = (name, detail) => {
    const log = document.getElementById('pg-event-log');
    if (!log) return;
    const entry = document.createElement('div');
    entry.style.marginBottom = '4px';
    entry.innerText = `> [${new Date().toLocaleTimeString()}] ${name}: ${JSON.stringify(detail)}`;
    log.prepend(entry);
  };

  setTimeout(() => {
    const tree = document.getElementById('playground-tree');
    if (tree) {
      tree.nodes = COMPONENT_DATA;
      ['nodeClick', 'nodeExpand', 'nodeSelect', 'nodeCheck', 'treeChange'].forEach(ev => {
        tree.addEventListener(ev, e => window.logPlaygroundEvent(ev, e.detail));
      });
    }

    // Connect playground controls
    document.getElementById('dataset-select').addEventListener('dropdownChange', e => window.changeTreeDataSet(e.detail.value));
    document.getElementById('shape-select').addEventListener('dropdownChange', e => window.updatePlaygroundTree('connectorShape', e.detail.value));
    document.getElementById('width-slider').addEventListener('sliderChange', e => window.updatePlaygroundTree('connectorWidth', e.detail.value));
    document.getElementById('variant-select').addEventListener('dropdownChange', e => window.updatePlaygroundTree('variant', e.detail.value));
    document.getElementById('theme-select').addEventListener('dropdownChange', e => window.updatePlaygroundTree('theme', e.detail.value));
    document.getElementById('lines-check').addEventListener('checkboxChange', e => window.updatePlaygroundTree('showLines', e.detail.checked));
    document.getElementById('glow-check').addEventListener('checkboxChange', e => window.updatePlaygroundTree('showGlow', e.detail.checked));
    document.getElementById('select-check').addEventListener('checkboxChange', e => window.updatePlaygroundTree('selectable', e.detail.checked));
    document.getElementById('check-check').addEventListener('checkboxChange', e => window.updatePlaygroundTree('checkboxes', e.detail.checked));
    document.getElementById('color-picker').addEventListener('colorChange', e => window.updatePlaygroundTree('connectorColor', e.detail.value));
  }, 100);
};
