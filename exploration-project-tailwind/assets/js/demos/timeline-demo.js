export function initTimelineDemo() {
  const section = document.getElementById('timeline');
  if (!section) return;

  const events = [
    { label: 'Project Kickoff', timestamp: '2023-01-01', description: 'Initial meeting with stakeholders', status: 'success' },
    { label: 'Design Phase', timestamp: '2023-02-15', description: 'Working on UI/UX mockups', status: 'success' },
    { label: 'Development Start', timestamp: '2023-03-20', description: 'Setting up repository', icon: '🚀', status: 'active' },
    { label: 'Beta Launch', timestamp: '2023-06-10', description: 'Internal testing', status: 'pending' },
  ];

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Displays a sequence of events in vertical or horizontal orientation.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button label="🎮 Interactive Playground" data-demo="playground" onclick="showInteractiveTimeline()" style="--ui-button-bg: var(--accent-purple,#8b5cf6); --ui-button-text-color: white;" variant="outline"></ui-button>
      <ui-button label="Vertical Layouts" data-demo="vertical" onclick="showVerticalTimeline()" variant="outline"></ui-button>
      <ui-button label="Horizontal Layouts" data-demo="horizontal" onclick="showHorizontalTimeline()" variant="outline"></ui-button>
      <ui-button label="Overflow & Scroll" data-demo="overflow" onclick="showOverflowTimeline()" variant="outline"></ui-button>
      <ui-button label="Multi-line Grid" data-demo="multiline" style="--ui-button-bg: var(--accent-pink,#ec4899); --ui-button-text-color: white;" onclick="showMultilineTimeline()" variant="outline"></ui-button>
      <ui-button label="Panels & Markers" data-demo="panels" style="--ui-button-bg: var(--accent-indigo,#6366f1); --ui-button-text-color: white;" onclick="showAdvancedTimeline()" variant="outline"></ui-button>
      <ui-button label="Filtering (Premium)" data-demo="filtering" style="--ui-button-bg: #f43f5e; --ui-button-text-color: white;" onclick="showFilteringTimeline()" variant="outline"></ui-button>
    </div>

    <div id="timelineDemoContainer" style="margin-top: 20px;"></div>
  `;

  const updateTimelineActiveBtn = demoName => {
    section.querySelectorAll('.demo-controls ui-button').forEach(btn => {
      btn.selected = btn.getAttribute('data-demo') === demoName;
    });
  };

  // Place showAdvancedTimeline here before others to minimize context shift issues
  window.showAdvancedTimeline = () => {
    updateTimelineActiveBtn('panels');
    const container = document.getElementById('timelineDemoContainer');
    if (!container) return;

    const panelEvents = [
      { label: 'Step 1', description: 'This uses the Panel variant.', timestamp: '10:00 AM', status: 'success' },
      { label: 'Step 2', description: 'Card-like styling.', timestamp: '11:00 AM', status: 'active' },
      { label: 'Step 3', description: 'With shadow hover effects.', timestamp: '12:00 PM', status: 'pending' },
    ];

    // Mix of markers
    const markerEvents = [
      // Auto-numbering will use index, so 1, 2, 3
      { label: 'First Step', description: 'This shows number 1 in the dot.', status: 'success' },
      // Custom image (using placeholder)
      { label: 'Profile Update', description: 'Shows user avatar.', image: '/build/assets/images/logo.png', status: 'active' },
      { label: 'Third Step', description: 'Resumes numbering (3).', status: 'pending' },
      { label: 'Rocket Launch', description: 'Explicit icon marker.', icon: '🚀', status: 'wait' },
    ];

    container.innerHTML = `
      <div class="demo-block">
        <h3>Panel Variant</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Use <code>variant="panel"</code> for card-like styling.</p>
        <div class="playground-preview" style="padding: 20px;">
          <ui-timeline align="alternate" variant="panel" events='${JSON.stringify(panelEvents)}'></ui-timeline>
        </div>
      </div>

      <div class="demo-block">
        <h3>Markers: Numbers, Images & Icons</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">
          Use <code>marker="number"</code> for auto-numbering. 
          Provide <code>image</code> for avatars or <code>icon</code> for custom symbols.
        </p>
        <div class="playground-preview" style="padding: 20px;">
          <ui-timeline align="left" marker="number" events='${JSON.stringify(markerEvents)}'></ui-timeline>
        </div>
      </div>
    `;
  };

  window.showInteractiveTimeline = () => {
    updateTimelineActiveBtn('playground');
    const container = document.getElementById('timelineDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>🎮 Interactive Playground</h3>
        <div class="playground-settings">
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 20px; margin-bottom: 20px;">
              <ui-dropdown id="timelineMode" label="Mode" options='[{"label": "Vertical", "value": "vertical"}, {"label": "Horizontal", "value": "horizontal"}]' value="vertical"></ui-dropdown>
              <ui-dropdown id="timelineAlign" label="Alignment" options='[{"label": "Left", "value": "left"}, {"label": "Right", "value": "right"}, {"label": "Center / Balanced", "value": "center"}, {"label": "Alternate", "value": "alternate"}, {"label": "Top (H)", "value": "top"}, {"label": "Bottom (H)", "value": "bottom"}]' value="left"></ui-dropdown>
              <ui-dropdown id="timelineMultiline" label="Multiline (H)" options='[{"label": "False", "value": "false"}, {"label": "True", "value": "true"}]' value="false"></ui-dropdown>
              <ui-dropdown id="timelineWrap" label="Wrap / Snake" options='[{"label": "False", "value": "false"}, {"label": "True", "value": "true"}]' value="false"></ui-dropdown>
              <ui-dropdown id="timelineVariant" label="Variant" options='[{"label": "Default", "value": "default"}, {"label": "Panel", "value": "panel"}, {"label": "Outlined", "value": "outlined"}, {"label": "Filled", "value": "filled"}, {"label": "Minimal", "value": "minimal"}, {"label": "Dots Only", "value": "dots-only"}]' value="default"></ui-dropdown>
              <ui-dropdown id="timelineMarker" label="Marker" options='[{"label": "Dot", "value": "dot"}, {"label": "Number", "value": "number"}, {"label": "Icon", "value": "icon"}]' value="dot"></ui-dropdown>
              <ui-dropdown id="timelineClickable" label="Clickable" options='[{"label": "False", "value": "false"}, {"label": "True", "value": "true"}]' value="false"></ui-dropdown>
              <ui-dropdown id="timelineReverse" label="Reverse" options='[{"label": "False", "value": "false"}, {"label": "True", "value": "true"}]' value="false"></ui-dropdown>
              <ui-dropdown id="timelinePending" label="Pending" options='[{"label": "False", "value": "false"}, {"label": "True", "value": "true"}]' value="false"></ui-dropdown>
              <ui-dropdown id="timelineSearchable" label="Searchable" options='[{"label": "False", "value": "false"}, {"label": "True", "value": "true"}]' value="false"></ui-dropdown>
          </div>
        </div>
        
        <div id="playgroundPreview" class="playground-preview" style="min-height: 400px; display: flex; align-items: start; justify-content: center; overflow: auto;">
          <!-- Timeline will be injected here -->
        </div>

        <div id="timelineEventLog" style="margin-top: 10px; padding: 10px; background: #1e293b; color: #38bdf8; border-radius: 6px; font-family: monospace; font-size: 12px; display: none;">
          // Event Log: Click an item to see details
        </div>

        <div style="margin-top: 20px;">
          <ui-input multiline id="timelineData" label="Event Data (JSON)" style="height: 200px; font-family: monospace;"></ui-input>
        </div>
        
        <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
          <ui-button id="copyTimelineBtn" label="Copy" variant="outline" size="xxxs" onclick="copyTimelineCode()" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); --ui-button-text-color: white; border: none;"></ui-button>
          <code id="timelineCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
            <ui-timeline ...></ui-timeline>
          </code>
        </div>
      </div>
    `;
    document.getElementById('timelineData').value = JSON.stringify(events, null, 2);
    updateInteractiveTimeline();
  };

  window.showMultilineTimeline = () => {
    updateTimelineActiveBtn('multiline');
    const container = document.getElementById('timelineDemoContainer');
    if (!container) return;

    // Generate many events
    const manyEvents = Array.from({ length: 20 }, (_, i) => ({
      label: `Step ${i + 1}`,
      timestamp: `2024-01-${String(i + 1).padStart(2, '0')}`,
      description: `Description for step ${i + 1}`,
      status: i % 5 === 0 ? 'active' : 'default',
    }));

    container.innerHTML = `
      <div class="demo-block">
        <h3>Horizontal Multi-line Grid</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">
          When <code>multiline="true"</code> is set on horizontal mode, items wrap to new lines, creating a responsive grid view.
        </p>
        <div class="playground-preview" style="padding: 20px;">
          <ui-timeline mode="horizontal" multiline="true" events='${JSON.stringify(manyEvents)}'></ui-timeline>
        </div>
      </div>
    `;
  };

  window.showOverflowTimeline = () => {
    updateTimelineActiveBtn('overflow');
    const container = document.getElementById('timelineDemoContainer');
    if (!container) return;

    // Generate many events
    const longEvents = Array.from({ length: 12 }, (_, i) => ({
      label: `Event Step ${i + 1}`,
      timestamp: `2024-0${(i % 9) + 1}-15`,
      description: `This is a detailed description for step ${i + 1} to ensure the content takes up some space.`,
      status: i % 4 === 0 ? 'active' : i % 3 === 0 ? 'success' : 'default',
      icon: i === 5 ? '🚩' : undefined,
    }));

    container.innerHTML = `
      <div class="demo-block">
        <h3>Vertical Scroll (Constrained Height)</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Timeline inside a fixed-height container with <code>overflow-y: auto</code>.</p>
        <div class="playground-preview" style="height: 400px; overflow-y: auto; padding: 20px; justify-content: flex-start;">
          <ui-timeline align="left" events='${JSON.stringify(longEvents)}' style="width: 100%;"></ui-timeline>
        </div>
      </div>

      <div class="demo-block">
        <h3>Horizontal Scroll (Constrained Width)</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Timeline inside a container with <code>overflow-x: auto</code>.</p>
        <div class="playground-preview" style="width: 100%; overflow-x: auto; padding: 20px; justify-content: flex-start;">
           <ui-timeline mode="horizontal" align="alternate" events='${JSON.stringify(longEvents)}' style="min-width: 800px;"></ui-timeline>
        </div>
      </div>
    `;
  };

  window.updateInteractiveTimeline = () => {
    // Add real-time listeners for first run
    if (!window.timelineWired) {
      window.timelineWired = true;
      const dropdowns = ['timelineMode', 'timelineAlign', 'timelineMultiline', 'timelineWrap', 'timelineVariant', 'timelineMarker', 'timelineClickable', 'timelineReverse', 'timelinePending', 'timelineSearchable'];
      dropdowns.forEach(id => document.getElementById(id)?.addEventListener('dropdownChange', () => updateInteractiveTimeline()));
      document.getElementById('timelineData')?.addEventListener('inputChange', () => updateInteractiveTimeline());
    }

    const mode = document.getElementById('timelineMode').value;

    const align = document.getElementById('timelineAlign').value;
    const multilineElement = document.getElementById('timelineMultiline');
    const isMultiline = multilineElement ? multilineElement.value === 'true' : false;
    const wrapElement = document.getElementById('timelineWrap');
    const isWrap = wrapElement ? wrapElement.value === 'true' : false;
    const clickable = document.getElementById('timelineClickable').value === 'true';
    const reverse = document.getElementById('timelineReverse').value === 'true';
    const pending = document.getElementById('timelinePending').value === 'true';
    const searchable = document.getElementById('timelineSearchable').value === 'true';

    const dataStr = document.getElementById('timelineData').value;
    const preview = document.getElementById('playgroundPreview');
    const log = document.getElementById('timelineEventLog');

    if (clickable) {
      log.style.display = 'block';
    } else {
      log.style.display = 'none';
    }

    let parsedEvents = [];
    try {
      parsedEvents = JSON.parse(dataStr);
    } catch (e) {
      // Invalid JSON, ignore
      return;
    }

    // Adjust container style for horizontal mode
    if (mode === 'horizontal') {
      preview.style.display = 'block'; // Block display for scrolling
      preview.style.alignItems = 'normal';
    } else {
      preview.style.display = 'flex';
      preview.style.alignItems = 'start';
    }

    preview.innerHTML = `
      <ui-timeline 
        id="interactiveTimelineEl"
        mode="${mode}" 
        align="${align}" 
        multiline="${isMultiline}"
        wrap="${isWrap}"
        clickable="${clickable}"
        reverse="${reverse}"
        pending="${pending}"
        searchable="${searchable}"
        style="width: 100%;"
        events='${JSON.stringify(parsedEvents)}'
      ></ui-timeline>
    `;

    const timelineEl = document.getElementById('interactiveTimelineEl');
    if (timelineEl) {
      timelineEl.addEventListener('itemClick', ev => {
        log.innerText = `[Event] itemClick: ${JSON.stringify(ev.detail)}`;
        console.log('Timeline Click:', ev.detail);
      });
    }

    // Update code block
    const codeBlock = document.getElementById('timelineCodeBlock');
    if (codeBlock) {
      const variant = document.getElementById('timelineVariant').value;
      const marker = document.getElementById('timelineMarker').value;

      let props = '';
      if (mode !== 'vertical') props += ` mode="${mode}"`;
      if (align !== 'left') props += ` align="${align}"`;
      if (isMultiline) props += ' multiline="true"';
      if (isWrap) props += ' wrap="true"';
      if (variant !== 'default') props += ` variant="${variant}"`;
      if (marker !== 'dot') props += ` marker="${marker}"`;
      if (clickable) props += ' clickable="true"';
      if (reverse) props += ' reverse="true"';
      if (pending) props += ' pending="true"';
      if (searchable) props += ' searchable="true"';

      const eventsStr = JSON.stringify(parsedEvents, null, 2);
      codeBlock.innerText = `<ui-timeline${props} events='${eventsStr}'></ui-timeline>`;
    }
  };

  window.copyTimelineCode = () => {
    const code = document.getElementById('timelineCodeBlock').innerText;
    const btn = document.getElementById('copyTimelineBtn');
    navigator.clipboard.writeText(code).then(() => {
      const originalText = btn.innerText;
      btn.innerText = 'Copied!';
      btn.style.background = '#10b981';
      setTimeout(() => {
        btn.innerText = originalText;
        btn.style.background = 'rgba(255,255,255,0.1)';
      }, 2000);
    });
  };

  window.showFilteringTimeline = () => {
    updateTimelineActiveBtn('filtering');
    const container = document.getElementById('timelineDemoContainer');
    if (!container) return;

    const manyEvents = Array.from({ length: 15 }, (_, i) => ({
      label: i % 3 === 0 ? `Meeting with ${['Alice', 'Bob', 'Charlie'][i % 3]}` : `Task ${i + 1}`,
      description: `Automated description for entry ${i + 1}.`,
      timestamp: `2024-01-${String(i + 1).padStart(2, '0')}`,
      status: i === 0 ? 'active' : 'default',
    }));

    container.innerHTML = `
      <div class="demo-block">
        <h3 style="color: #f43f5e;">⚡ Premium Filtering & Actions</h3>
        <p style="color: var(--text-secondary, #6b7280); margin-bottom: 24px;">Integrated search and interactive items for large data sets.</p>

        <ui-timeline 
          searchable="true" 
          clickable="true" 
          events='${JSON.stringify(manyEvents)}'
          style="width: 100%;"
        ></ui-timeline>
      </div>
    `;
  };

  window.showVerticalTimeline = () => {
    updateTimelineActiveBtn('vertical');
    const container = document.getElementById('timelineDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block">
        <h3>Vertical: Left (Standard)</h3>
        <p style="color: var(--text-secondary, #6b7280); margin-bottom: 20px;">Default alignment with content on the right.</p>
        <ui-timeline align="left" events='${JSON.stringify(events)}'></ui-timeline>
      </div>

      <div class="demo-block">
        <h3>Vertical: Right</h3>
        <p style="color: var(--text-secondary, #6b7280); margin-bottom: 20px;">flipped alignment with content on the left.</p>
        <ui-timeline align="right" events='${JSON.stringify(events)}'></ui-timeline>
      </div>

      <div class="demo-block">
        <h3>Vertical: Alternating</h3>
        <p style="color: var(--text-secondary, #6b7280); margin-bottom: 20px;">Events alternate sides for a balanced tree view.</p>
        <ui-timeline align="alternate" events='${JSON.stringify(events)}'></ui-timeline>
      </div>
    `;
  };

  window.showHorizontalTimeline = () => {
    updateTimelineActiveBtn('horizontal');
    const container = document.getElementById('timelineDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div class="demo-block" style="overflow-x: auto;">
        <h3>Horizontal: Bottom (Standard)</h3>
        <p style="color: var(--text-secondary, #6b7280); margin-bottom: 20px;"><strong>Block Below:</strong> Data appears below the timeline.</p>
        <div style="min-width: 600px;">
          <ui-timeline mode="horizontal" align="bottom" events='${JSON.stringify(events)}'></ui-timeline>
        </div>
      </div>

      <div class="demo-block" style="overflow-x: auto;">
        <h3>Horizontal: Top</h3>
        <p style="color: var(--text-secondary, #6b7280); margin-bottom: 20px;"><strong>Block Above:</strong> Data appears above the timeline.</p>
        <div style="min-width: 600px;">
          <ui-timeline mode="horizontal" align="top" events='${JSON.stringify(events)}'></ui-timeline>
        </div>
      </div>
        
      <div class="demo-block" style="overflow-x: auto;">
        <h3>Horizontal: Alternate (Butterfly)</h3>
        <p style="opacity: 0.7; margin-bottom: 20px;">Content and Time alternate sides for a balanced look.</p>
        <div class="playground-preview" style="height: 250px; min-width: 600px;">
          <ui-timeline mode="horizontal" align="alternate" events='${JSON.stringify(events)}' style="width: 100%;"></ui-timeline>
        </div>
      </div>
    `;
  };

  // Default view: Show Horizontal to verify changes immediately
  showHorizontalTimeline();
}
