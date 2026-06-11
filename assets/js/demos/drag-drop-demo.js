const dragDropTasks = [
  { id: 'task-1', label: 'Discovery workshop', description: 'Align the exec team on goals' },
  { id: 'task-2', label: 'Design sprint', description: 'Prototype the new module', detail: 'Due Friday' },
  { id: 'task-3', label: 'Review feedback', description: 'Gather insights from QA' },
  { id: 'task-4', label: 'Launch checklist', description: 'Prep release notes and docs' },
];

const dragDropBoardItems = [
  { id: 'lane-1', label: 'Engineering sync', description: 'Stand-ups and blockers' },
  { id: 'lane-2', label: 'Product review', description: 'Demo to stakeholders' },
  { id: 'lane-3', label: 'Design QA', detail: '2 tickets' },
  { id: 'lane-4', label: 'Marketing prep', detail: 'Campaign assets' },
];

const cloneItems = (items) => items.map((item) => ({ ...item }));

const shuffleArray = (items) => {
  const shuffled = cloneItems(items);
  for (let i = shuffled.length - 1; i > 0; i -= 1) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }
  return shuffled;
};

let verticalListElem = null;
let horizontalBoardElem = null;
let logArea = null;

const logEntry = (message) => {
  if (!logArea) return;
  const entry = document.createElement('div');
  entry.style.marginBottom = '6px';
  entry.style.fontSize = '12px';
  entry.style.color = '#1f2937';
  entry.innerHTML = `<strong style="color: #0b5fff; font-size: 11px;">${new Date().toLocaleTimeString()}</strong>: ${message}`;
  logArea.prepend(entry);
};

const handleDragEvent = (label, detail) => {
  logEntry(`${label} order: ${detail.order.join(' → ')}`);
};

window.resetDragDropDemo = () => {
  if (verticalListElem) {
    verticalListElem.items = cloneItems(dragDropTasks);
  }
  if (horizontalBoardElem) {
    horizontalBoardElem.items = cloneItems(dragDropBoardItems);
  }
  logEntry('Reset both layouts to their base order');
};

window.shuffleDragDropDemo = () => {
  if (verticalListElem) {
    const current = Array.isArray(verticalListElem.items) ? verticalListElem.items : dragDropTasks;
    verticalListElem.items = shuffleArray(current);
  }
  if (horizontalBoardElem) {
    const current = Array.isArray(horizontalBoardElem.items) ? horizontalBoardElem.items : dragDropBoardItems;
    horizontalBoardElem.items = shuffleArray(current);
  }
  logEntry('Shuffled both layouts');
};

window.toggleDragDropInteractivity = () => {
  if (!verticalListElem) return;
  verticalListElem.draggableEnabled = !verticalListElem.draggableEnabled;
  logEntry(`Vertical list dragging ${verticalListElem.draggableEnabled ? 'enabled' : 'disabled'}`);
};

window.toggleDragDropBoardOrientation = () => {
  if (!horizontalBoardElem) return;
  horizontalBoardElem.orientation = horizontalBoardElem.orientation === 'horizontal' ? 'vertical' : 'horizontal';
  logEntry(`Board orientation switched to ${horizontalBoardElem.orientation}`);
};

export function initDragDropDemo() {
  const section = document.getElementById('drag-drop');
  if (!section) return;

  section.innerHTML = `
    <div class="demo-block" style="padding: 24px; margin-bottom: 24px;">
      <h2 style="margin: 0 0 8px;">Drag & Drop Planner</h2>
      <p style="color: #6b7280; margin-top: 0; margin-bottom: 16px; font-size: 13px;">
        Reorder tasks, shuffle priorities, and even flip between vertical and horizontal layouts without leaving the demo.
      </p>
      <div style="display: flex; flex-wrap: wrap; gap: 10px;">
        <ui-button label="Reset Items" variant="outline" color="success" onclick="resetDragDropDemo()"></ui-button>
        <ui-button label="Shuffle Order" variant="outline" color="secondary" onclick="shuffleDragDropDemo()"></ui-button>
        <ui-button label="Toggle Drag" variant="outline" color="secondary" onclick="toggleDragDropInteractivity()"></ui-button>
        <ui-button label="Flip Board" variant="outline" color="secondary" onclick="toggleDragDropBoardOrientation()"></ui-button>
      </div>
    </div>

    <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(280px, 1fr)); gap: 24px;">
      <div class="demo-block" style="padding: 24px;">
        <h3 style="margin-top: 0;">Vertical backlog</h3>
        <p style="color: #6b7280; font-size: 12px; margin-bottom: 8px;">Drag items to prioritize the sprint backlog.</p>
        <ui-drag-drop id="dragDropList" gap="0.75rem"></ui-drag-drop>
      </div>
      <div class="demo-block" style="padding: 24px;">
        <h3 style="margin-top: 0;">Horizontal board</h3>
        <p style="color: #6b7280; font-size: 12px; margin-bottom: 8px;">Horizontal orientation tracks high-level lanes.</p>
        <ui-drag-drop id="dragDropBoard" orientation="horizontal" gap="0.75rem"></ui-drag-drop>
      </div>
    </div>

    <div class="demo-block" style="padding: 24px; background:var(--bg-secondary,#f8fafc); border:1px solid var(--border-default,#e5e7eb);">
      <h3 style="margin-top: 0;">Activity log</h3>
      <div id="dragDropLog" style="max-height: 180px; overflow-y: auto;"></div>
    </div>
  `;

  setTimeout(() => {
    verticalListElem = section.querySelector('#dragDropList');
    horizontalBoardElem = section.querySelector('#dragDropBoard');
    logArea = section.querySelector('#dragDropLog');

    if (verticalListElem) {
      verticalListElem.items = cloneItems(dragDropTasks);
      verticalListElem.addEventListener('uiDragDropChange', (event) => handleDragEvent('Vertical list', event.detail));
    }

    if (horizontalBoardElem) {
      horizontalBoardElem.items = cloneItems(dragDropBoardItems);
      horizontalBoardElem.addEventListener('uiDragDropChange', (event) => handleDragEvent('Board', event.detail));
    }

    logEntry('Drag & drop demo is ready');
  }, 50);
}
