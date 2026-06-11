// Playground demo for ui-dock-host

function renderDockHostPlayground() {
  const container = document.getElementById('dockhost-playground');
  if (!container) return;
  container.innerHTML = `
    <ui-dock-host dock="left" width="320px" height="100vh" id="dock-left">
      <span slot="header">Left Dock</span>
      <div>
        <h3>Docked Left</h3>
        <p>This panel is docked to the left edge. You can float and drag it.</p>
        <ui-button label="Float" variant="outline" color="primary" size="md"click="window.floatDock('dock-left')"></ui-button>
        <ui-button label="Test Action" variant="outline" color="success" size="md"click="alert('Left Dock Action!')"></ui-button>
      </div>
    </ui-dock-host>
    <ui-dock-host dock="right" width="320px" height="100vh" id="dock-right">
      <span slot="header">Right Dock</span>
      <div>
        <h3>Docked Right</h3>
        <p>This panel is docked to the right edge.</p>
        <ui-button label="Float" variant="outline" color="primary" size="md"click="window.floatDock('dock-right')"></ui-button>
      </div>
    </ui-dock-host>
    <ui-dock-host dock="top" width="100vw" height="120px" id="dock-top">
      <span slot="header">Top Dock</span>
      <div>
        <h3>Docked Top</h3>
        <p>This panel is docked to the top edge.</p>
        <ui-button label="Float" variant="outline" color="primary" size="md"click="window.floatDock('dock-top')"></ui-button>
      </div>
    </ui-dock-host>
    <ui-dock-host dock="bottom" width="100vw" height="180px" id="dock-bottom">
      <span slot="header">Bottom Dock</span>
      <div>
        <h3>Docked Bottom</h3>
        <p>This panel is docked to the bottom edge.</p>
        <ui-button label="Float" variant="outline" color="primary" size="md"click="window.floatDock('dock-bottom')"></ui-button>
      </div>
    </ui-dock-host>
    <ui-dock-host dock="float" width="340px" height="220px" id="dock-float">
      <span slot="header">Floating Dock</span>
      <div>
        <h3>Floating Panel</h3>
        <p>This panel starts floating and can be dragged anywhere.</p>
        <ui-button label="Float Action" variant="outline" color="success" size="md"click="alert('Floating Dock Action!')"></ui-button>
      </div>
    </ui-dock-host>
  `;
}

window.floatDock = function (id) {
  const dock = document.getElementById(id);
  if (dock) {
    dock.dock = 'float';
    dock.floating = true;
  }
};

document.addEventListener('DOMContentLoaded', renderDockHostPlayground);
