// Demo Loader - Dynamically loads component demos
const demoModules = {
  'accordion': () => import('/app-ui/build/assets/js/demos/accordion-demo.js'),
  'nav-bar': () => import('/app-ui/build/assets/js/demos/nav-bar-demo.js'),
  'aside-panel': () => import('/app-ui/build/assets/js/demos/aside-panel-demo.js'),
  'tabs': () => import('/app-ui/build/assets/js/demos/tabs-demo.js'),
  'dialog': () => import('/app-ui/build/assets/js/demos/dialog-demo.js?v=20'),
  'drag-drop': () => import('/app-ui/build/assets/js/demos/drag-drop-demo.js'),
  'fab': () => import('/app-ui/build/assets/js/demos/fab-demo.js'),
  'snackbar': () => import('/app-ui/build/assets/js/demos/snackbar-demo.js'),
  'divider': () => import('/app-ui/build/assets/js/demos/divider-demo.js'),
  'Divider': () => import('/app-ui/build/assets/js/demos/divider-demo.js'),
  'stepper': () => import('/app-ui/build/assets/js/demos/stepper-demo.js'),
  'dock-host': () => import('/app-ui/build/assets/js/demos/dock-host-init.js'),

  'card': () => import('/app-ui/build/assets/js/demos/card-demo.js'),
  'carousel': () => import('/app-ui/build/assets/js/demos/carousel-demo.js'),
  'callout-banner': () => import('/app-ui/build/assets/js/demos/callout-banner-demo.js'),

  'panel': () => import('/app-ui/build/assets/js/demos/panel-demo.js'),
  'avatar': () => import('/app-ui/build/assets/js/demos/avatar-demo.js'),
  'avatar-group': () => import('/app-ui/build/assets/js/demos/avatar-demo.js'),
  'chip': () => import('/app-ui/build/assets/js/demos/chip-demo.js'),
  'badge': () => import('/app-ui/build/assets/js/demos/badge-demo.js'),
  'tag': () => import('/app-ui/build/assets/js/demos/tag-demo.js'),
  'pill': () => import('/app-ui/build/assets/js/demos/pill-demo.js'),
  'meter-group': () => import('/app-ui/build/assets/js/demos/meter-group-demo.js'),
  'scroll-top': () => import('/app-ui/build/assets/js/demos/scroll-top-demo.js'),
  'rating': () => import('/app-ui/build/assets/js/demos/rating-demo.js'),
  'speed-dial': () => import('/app-ui/build/assets/js/demos/speed-dial-demo.js'),
  'context-menu': () => import('/app-ui/build/assets/js/demos/context-menu-demo.js'),
  'smart-menu': () => import('/app-ui/build/assets/js/demos/smart-menu-demo.js'),
  'smart-stepper': () => import('/app-ui/build/assets/js/demos/smart-stepper-demo.js'),
  'advanced-data-table': () => import('/app-ui/build/assets/js/demos/advanced-data-table-demo.js'),
  'cascade-select': () => import('/app-ui/build/assets/js/demos/cascade-select-demo.js'),
  'range-slider': () => import('/app-ui/build/assets/js/demos/range-slider-demo.js'),
  'transfer-list': () => import('/app-ui/build/assets/js/demos/transfer-list-demo.js?v=2'),
  'tree': () => import('/app-ui/build/assets/js/demos/tree-demo.js'),
  'tree-list': () => import('/app-ui/build/assets/js/demos/tree-demo.js'),
  'pagination': () => import('/app-ui/build/assets/js/demos/pagination-demo.js'),
  'skeleton': () => import('/app-ui/build/assets/js/demos/skeleton-demo.js'),
  'timeline': () => import('/app-ui/build/assets/js/demos/timeline-demo.js'),
  'top-bar': () => import('/app-ui/build/assets/js/demos/top-bar-demo.js'),
  'progress': () => import('/app-ui/build/assets/js/demos/progress-demo.js'),
  'dock': () => import('/app-ui/build/assets/js/demos/dock-demo.js'),
  'dropdown': () => import('/app-ui/build/assets/js/demos/dropdown-demo.js'),
  'smart-location-dropdown': () => import('/app-ui/build/assets/js/demos/smart-location-dropdown-demo.js'),
  'popover': () => import('/app-ui/build/assets/js/demos/popover-demo.js'),
  'speedometer': () => import('/app-ui/build/assets/js/demos/speedometer-demo.js'),
  'anchor': () => import('/app-ui/build/assets/js/demos/anchor-demo.js'),
  'theme-selector': () => import('/app-ui/build/assets/js/demos/theme-selector-demo.js'),
  'breadcrumb': () => import('/app-ui/build/assets/js/demos/breadcrumb-demo.js'),
  'horizontal-nav': () => import('/app-ui/build/assets/js/demos/horizontal-nav-demo.js'),
  'knob': () => import('/app-ui/build/assets/js/demos/knob-demo.js'),
  'chart': () => import('/app-ui/build/assets/js/demos/chart-demo.js'),
  'layout-manager': () => import('/app-ui/build/assets/js/demos/layout-manager-demo.js'),
  'workspace-manager': () => import('/app-ui/build/assets/js/demos/workspace-manager-demo.js'),
  'button': () => import('/app-ui/build/assets/js/demos/button-demo.js'),
  'switch': () => import('/app-ui/build/assets/js/demos/switch-demo.js?v=30'),
  'bar-chart': () => import('/app-ui/build/assets/js/demos/bar-chart-demo.js'),
  'pattern-input': () => import('/app-ui/build/assets/js/demos/pattern-input-demo.js'),
  'number-input': () => import('/app-ui/build/assets/js/demos/number-input-demo.js'),
  'color-picker': () => import('/app-ui/build/assets/js/demos/color-picker-demo.js'),
  'file-upload': () => import('/app-ui/build/assets/js/demos/file-upload-demo.js'),
  'command-palette': () => import('/app-ui/build/assets/js/demos/command-palette-demo.js'),
  'timer': () => import('/app-ui/build/assets/js/demos/timer-demo.js'),
  'stack': () => import('/app-ui/build/assets/js/demos/stack-demo.js'),
  'about': () => import('/app-ui/build/assets/js/demos/about-demo.js'),
  'empty-state': () => import('/app-ui/build/assets/js/demos/empty-state-demo.js?v=3'),
  'loader': () => import('/app-ui/build/assets/js/demos/loader-demo.js'),
  'my-profile': () => import('/app-ui/build/assets/js/demos/my-profile-demo.js'),
  'icon': () => import('/app-ui/build/assets/js/demos/icon-demo.js'),
  'code-preview': () => import('/app-ui/build/assets/js/demos/code-preview-demo.js'),
  'input': () => import('/app-ui/build/assets/js/demos/input-demo.js'),
  'checkbox': () => import('/app-ui/build/assets/js/demos/checkbox-demo.js'),
  'radio': () => import('/app-ui/build/assets/js/demos/radio-demo.js'),
  'animate-on-scroll': () => import('/app-ui/build/assets/js/demos/animate-on-scroll-demo.js'),
  'list': () => import('/app-ui/build/assets/js/demos/list-demo.js'),
  'button-toggle': () => import('/app-ui/build/assets/js/demos/button-toggle-demo.js?v=1'),
  'tooltip': () => import('/app-ui/build/assets/js/demos/tooltip-demo.js'),
  'toggle-group': () => import('/app-ui/build/assets/js/demos/switch-demo.js?v=30'),
  'button-group': () => import('/app-ui/build/assets/js/demos/button-demo.js'),
  'home': () => import('/app-ui/build/assets/js/demos/home-demo.js'),
  'toolbar': () => import('/app-ui/build/assets/js/demos/toolbar-demo.js'),
  'dashboard': () => import('/app-ui/build/assets/js/demos/dashboard-demo.js'),
  'documentation': () => import('/app-ui/build/assets/js/demos/documentation-demo.js'),
  'overview': () => import('/app-ui/build/assets/js/demos/overview-demo.js'),
  'complex-form': () => import('/app-ui/build/assets/js/demos/complex-form-demo.js'),
  'dropdown-subtitle': () => import('/app-ui/build/assets/js/demos/dropdown-subtitle-demo.js'),
  'masonry': () => import('/app-ui/build/assets/js/demos/masonry-demo.js'),
  'label': () => import('/app-ui/build/assets/js/demos/label-demo.js'),
};

const loadedDemos = new Set();

export async function loadDemo(sectionId) {
  // Ensure sectionId is a string and handle potential Symbol issues
  let safeSectionId;
  try {
    safeSectionId = String(sectionId);
  } catch (e) {
    console.error('loadDemo: Critical error converting sectionId to string', e);
    return false;
  }

  // Skip if already loaded
  if (loadedDemos.has(safeSectionId)) {
    return true;
  }

  const loader = demoModules[safeSectionId];
  if (!loader) {
    console.warn('No demo loader found for category/id:', safeSectionId);
    return false;
  }

  try {
    const module = await loader();
    const funcName = `init${kebabToPascal(safeSectionId)}Demo`;
    const initFunction = module[funcName];

    if (initFunction) {
      initFunction();
      loadedDemos.add(safeSectionId);
      return true;
    } else {
      console.error('Init function', funcName, 'not found in the loaded module for:', safeSectionId);
      return false;
    }
  } catch (error) {
    console.error('Failed to load demo section:', safeSectionId, error);
    return false;
  }
}

// Helper to convert kebab-case to PascalCase
function kebabToPascal(str) {
  return str
    .split('-')
    .map(word => word.charAt(0).toUpperCase() + word.slice(1))
    .join('');
}

// Preload critical demos
export async function preloadCriticalDemos() {
  const critical = ['accordion', 'nav-bar', 'dialog'];
  await Promise.all(critical.map(id => loadDemo(id)));
}
