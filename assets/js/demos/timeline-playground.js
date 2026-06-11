// Timeline Playground Demo
export function initTimelinePlayground() {
  const section = document.getElementById('timeline-playground');
  if (!section) return;
  section.innerHTML = `
    <div style="display: flex; align-items: flex-start; gap: 30px; margin-bottom: 20px;">
      <div style="flex: 1; min-width: 300px;">
        <h2 style="margin: 0 0 10px 0;">🕒 Timeline Playground</h2>
        <ui-input 
          id="timelineEventsInput" 
          label="Timeline Events (JSON)" 
          multiline="true" 
          rows="10" 
          variant="outline"
          placeholder='[{"time": "09:00", "title": "Start"}]'
        ></ui-input>
        <div style="margin-top: 16px;">
          <ui-button id="updateTimelineBtn" label="Update Timeline" color="success" variant="outline"></ui-button>
        </div>
      </div>
      <div style="flex: 2; min-width: 400px; background-color: #f9fafb; padding: 24px; border-radius: 12px; border:1px solid var(--border-default,#e5e7eb); box-shadow: inset 0 2px 4px 0 rgb(0 0 0 / 0.05);">
        <h4 style="margin-top: 0; color: #374151;">Preview Case</h4>
        <div style="margin-top: 20px;">
          <ui-timeline id="timelinePlaygroundComponent"></ui-timeline>
        </div>
      </div>
    </div>
  `;

  // Default events
  const defaultEvents = [
    { time: '09:00', title: 'Start', description: 'Project kickoff', icon: 'zap' },
    { time: '10:30', title: 'Design', description: 'Design review meeting', icon: 'color-palette' },
    { time: '12:00', title: 'Lunch', description: 'Team lunch break', icon: 'restaurant' },
    { time: '14:00', title: 'Development', description: 'Coding session', icon: 'code-working' },
    { time: '16:00', title: 'Testing', description: 'QA and bug fixing', icon: 'bug' },
    { time: '17:30', title: 'Wrap-up', description: 'End of day summary', icon: 'checkmark-done' }
  ];

  const inp = document.getElementById('timelineEventsInput');
  if (inp) {
    inp.value = JSON.stringify(defaultEvents, null, 2);
  }

  function updateTimeline() {
    const timeline = document.getElementById('timelinePlaygroundComponent');
    if (!timeline || !inp) return;
    try {
      const events = JSON.parse(inp.value);
      timeline.events = events;
    } catch (e) {
      console.error('Invalid JSON:', e.message);
    }
  }

  document.getElementById('updateTimelineBtn').addEventListener('click', updateTimeline);
  document.getElementById('timelineEventsInput').addEventListener('inputChange', updateTimeline);
  updateTimeline();
}
