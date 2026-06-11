import { initTimelinePlayground } from '/build/assets/js/demos/timeline-playground.js';
import { initChipDemo } from '/build/assets/js/demos/chip-demo.js';
import { initTagDemo } from '/build/assets/js/demos/tag-demo.js';
import { initSpeedometerDemo } from '/build/assets/js/demos/speedometer-demo.js';
import { initStepperDemo } from '/build/assets/js/demos/stepper-demo.js';
import { initBarChartDemo } from '/build/assets/js/demos/bar-chart-demo.js';
import { initSmartMenuDemo } from '/build/assets/js/demos/smart-menu-demo.js';
import { initSmartStepperDemo } from '/build/assets/js/demos/smart-stepper-demo.js';

import { initContextMenuDemo } from '/build/assets/js/demos/context-menu-demo.js';
import { initPatternInputDemo } from '/build/assets/js/demos/pattern-input-demo.js';
import { initSwitchDemo } from '/build/assets/js/demos/switch-demo.js';
import { initButtonDemo } from '/build/assets/js/demos/button-demo.js';
import { initPillDemo } from '/build/assets/js/demos/pill-demo.js';

// Hook into global showSection and initialize demos when sections are shown
window.addEventListener('DOMContentLoaded', () => {
  const originalShowSection = window.showSection;
  window.showSection = function (sectionId) {
    // Preserve original behavior if present
    if (typeof originalShowSection === 'function') {
      originalShowSection(sectionId);
    } else {
      // Fallback section activation
      document.querySelectorAll('.demo-section').forEach(el => el.classList.remove('section-active'));
      const target = document.getElementById(sectionId);
      if (target) target.classList.add('section-active');
    }

    // Initialize specific demos
    switch (sectionId) {
      case 'dock-host':
        import('/build/assets/js/demos/dock-host-init.js').then(m => m.initDockHostDemo());
        break;
      case 'nav-bar':
        try { import('/build/assets/js/demos/nav-bar-demo.js').then(m => m.initNavBarDemo()); } catch (e) { console.warn('initNavBarDemo failed', e); }
        break;
      case 'chip':
        try { initChipDemo(); } catch (e) { console.warn('initChipDemo failed', e); }
        break;
      case 'pill':
        try { initPillDemo(); } catch (e) { console.warn('initPillDemo failed', e); }
        break;
      case 'tag':
        try { initTagDemo(); } catch (e) { console.warn('initTagDemo failed', e); }
        break;
      case 'speedometer':
        try { initSpeedometerDemo(); } catch (e) { console.warn('initSpeedometerDemo failed', e); }
        break;
      case 'stepper':
        try { initStepperDemo(); } catch (e) { console.warn('initStepperDemo failed', e); }
        break;
      case 'bar-chart':
        try { initBarChartDemo(); } catch (e) { console.warn('initBarChartDemo failed', e); }
        break;
      case 'smart-menu':
        try { initSmartMenuDemo(); } catch (e) { console.warn('initSmartMenuDemo failed', e); }
        break;
      case 'smart-stepper':
        try { initSmartStepperDemo(); } catch (e) { console.warn('initSmartStepperDemo failed', e); }
        break;
      case 'cascade-select':
      case 'pattern-input':
        try { initPatternInputDemo(); } catch (e) { console.warn('initPatternInputDemo failed', e); }
        break;
      case 'switch':
        try { initSwitchDemo(); } catch (e) { console.warn('initSwitchDemo failed', e); }
        break;
      case 'button':
        try { initButtonDemo(); } catch (e) { console.warn('initButtonDemo failed', e); }
        break;
        try { initCascadingMenuDemo(); } catch (e) { console.warn('initCascadingMenuDemo failed', e); }
        break;
      case 'context-menu':
        try { initContextMenuDemo(); } catch (e) { console.warn('initContextMenuDemo failed', e); }
        break;
      case 'timeline':
        try { initTimelinePlayground(); } catch (e) { console.warn('initTimelinePlayground failed', e); }
        break;
      default:
        break;
    }
  };

  // Initialize active section on load if necessary
  const active = document.querySelector('.demo-section.section-active');
  if (active) {
    if (active.id === 'chip') initChipDemo();
    if (active.id === 'pill') initPillDemo();
    if (active.id === 'tag') initTagDemo();
    if (active.id === 'speedometer') initSpeedometerDemo();
    if (active.id === 'stepper') initStepperDemo();
    if (active.id === 'bar-chart') initBarChartDemo();
    if (active.id === 'smart-menu') initSmartMenuDemo();
    if (active.id === 'smart-stepper') initSmartStepperDemo();
    if (active.id === 'cascade-select') initCascadingMenuDemo();
    if (active.id === 'pattern-input') initPatternInputDemo();
    if (active.id === 'switch') initSwitchDemo();
    if (active.id === 'button') initButtonDemo();
    if (active.id === 'context-menu') initContextMenuDemo();
    if (active.id === 'timeline') initTimelinePlayground();
    if (active.id === 'dock-host') import('/build/assets/js/demos/dock-host-init.js').then(m => m.initDockHostDemo());
  }
});
