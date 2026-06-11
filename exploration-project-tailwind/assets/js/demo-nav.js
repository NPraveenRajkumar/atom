// Navigation and Section Management
import { loadDemo } from './demo-loader.js?v=2';

let currentSectionIndex = 0;
const sections = [];

function initNavigation() {
  const flattenItems = items => {
    items.forEach(item => {
      if (item.id && item.id !== 'components' && item.id !== 'settings') {
        sections.push(item.id);
      }
      if (item.children) {
        flattenItems(item.children);
      }
    });
  };

  if (window.demoNavigationItemsTop || window.demoBottomItems) {
    flattenItems(window.demoNavigationItemsTop || []);
    flattenItems(window.demoCategories || []);
    flattenItems(window.demoNavigationItemsSecondary || []);
    flattenItems(window.demoBottomItems || []);
    flattenItems(window.demoBottomItemsSecondary || []);
  } else {
    const buttons = document.querySelectorAll('.nav-btn');
    buttons.forEach((btn, index) => {
      const sectionId = btn.getAttribute('data-section');
      if (sectionId) {
        sections.push(sectionId);
      }
    });
  }
}

// Keyboard navigation
document.addEventListener('keydown', e => {
  if (e.key === 'ArrowRight') {
    navigateNext();
  } else if (e.key === 'ArrowLeft') {
    navigatePrev();
  }
});

async function showSection(sectionId) {
  // Scroll to top immediately before doing anything else
  window.scrollTo({ top: 0, behavior: 'auto' });

  const allSections = document.querySelectorAll('.demo-section');
  const allButtons = document.querySelectorAll('.nav-btn');

  // Hide all sections
  allSections.forEach(section => {
    section.classList.remove('section-active');
    section.style.display = 'none';
  });

  // Remove active state from all buttons
  allButtons.forEach(btn => btn.classList.remove('active'));

  // Load demo if needed (lazy loading)
  await loadDemo(sectionId);

  // Show target section
  const targetSection = document.getElementById(sectionId);
  if (targetSection) {
    targetSection.classList.add('section-active');
    targetSection.style.display = 'block';
  }

  // Handle Overflow & Padding for Dashboard/Overview/Home
  const sectionContainer = document.querySelector('.section-container');
  // Also target main-content if that's where the padding is
  const mainContent = document.querySelector('.main-content');

  const isFullPage = sectionId === 'overview' || sectionId === 'dashboard' || sectionId === 'home';

  if (sectionContainer) {
    if (isFullPage) {
      // Home should be scrollable, others (iframes) should be hidden
      sectionContainer.style.overflow = sectionId === 'home' ? 'auto' : 'hidden';
      if (mainContent) mainContent.classList.add('no-padding');
      sectionContainer.classList.add('no-padding');
    } else {
      sectionContainer.style.overflow = ''; // Reset to CSS default
      sectionContainer.style.overflowY = 'auto';
      if (mainContent) mainContent.classList.remove('no-padding');
      sectionContainer.classList.remove('no-padding');
    }
  }

  // Update Docs Button
  const docsBtn = document.getElementById('viewDocsBtn');
  const homeBtn = document.getElementById('home-link-btn');

  if (docsBtn) {
    if (sectionId === 'home' || sectionId === 'settings' || sectionId === 'documentation') {
      docsBtn.style.display = 'none';
    } else {
      docsBtn.style.display = 'flex';
      // Use the root-relative path to ensure it works from anywhere
      docsBtn.href = `/docs/index.html?page=${sectionId}`;
    }
  }

  if (homeBtn) {
    if (sectionId === 'home') {
      homeBtn.style.display = 'none';
    } else {
      homeBtn.style.display = 'flex';
    }
  }

  // Activate button and update Title
  const targetButton = document.querySelector(`[data-section="${sectionId}"]`);
  const pageTitle = document.getElementById('pageTitle');
  const backBtn = document.getElementById('backToHomeBtn');

  // Show Back button in header if not on home
  if (backBtn) {
    if (sectionId !== 'home') {
      console.log('Showing back button for section:', sectionId);
      backBtn.style.setProperty('display', 'flex', 'important');
    } else {
      backBtn.style.setProperty('display', 'none', 'important');
    }
  }

  // Update Page Title
  if (pageTitle) {
    if (sectionId === 'home') {
      pageTitle.innerText = 'Component Library';
    } else if (targetButton) {
      const label = targetButton.getAttribute('label') || targetButton.innerText || sectionId;
      pageTitle.innerText = label;
    } else {
      // Fallback: title-case the sectionId
      const fallbackLabel = sectionId
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');
      pageTitle.innerText = fallbackLabel;
    }
  }

  if (targetButton) {
    targetButton.classList.add('active');
    // Scroll button into view if it's outside viewport
    targetButton.scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'nearest' });
  }

  currentSectionIndex = sections.indexOf(sectionId);

  // Update Navigation Component
  const mainNav = document.getElementById('mainNav');
  if (mainNav && (mainNav.tagName === 'UI-NAVIGATION' || mainNav.tagName === 'UI-NAVIGATION-BAR')) {
    mainNav.activeId = sectionId;
  }

  // Ensure we stay at top after content loads
  requestAnimationFrame(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  });
}

async function openDocumentation(componentId) {
  // Use provided componentId or fallback to current section
  let targetId = componentId;
  if (!targetId) {
    if (currentSectionIndex >= 0 && currentSectionIndex < sections.length) {
      targetId = sections[currentSectionIndex];
    }
  }

  // If we still don't have a valid ID (e.g. on home), default to card or stay
  if (!targetId || targetId === 'home') {
    targetId = 'card';
  }

  // Iframe documentation viewer removed. Redirect or placeholder logic could go here.
  // For now, we just stay on the documentation section which shows a placeholder.

  await showSection('documentation');
}

async function navigateNext() {
  if (currentSectionIndex < sections.length - 1) {
    currentSectionIndex++;
    await showSection(sections[currentSectionIndex]);
  }
}

async function navigatePrev() {
  if (currentSectionIndex > 0) {
    currentSectionIndex--;
    await showSection(sections[currentSectionIndex]);
  }
}

// Theme Management
function setTheme(theme) {
  const html = document.documentElement;
  html.className = theme;
  html.setAttribute('data-theme', theme); // Explicit for CSS selectors
  localStorage.setItem('theme', theme);

  // Sync the theme switcher control if it exists
  const switcher = document.getElementById('theme-switcher-control');
  if (switcher) {
    switcher.value = theme;
  }
}

function initTheme() {
  const savedTheme = localStorage.getItem('theme') || 'light';

  // Handle the modern theme switcher control
  const switcher = document.getElementById('theme-switcher-control');
  if (switcher) {
    switcher.addEventListener('buttonToggleGroupChange', (e) => {
      setTheme(e.detail.value);
    });
  }

  // Fallback for legacy themeSwitcher container or manual theme selectors
  const containers = [
    document.getElementById('themeSwitcher'),
    document.getElementById('theme-switcher-control')
  ];
  
  containers.forEach(container => {
    if (container) {
      container.querySelectorAll('ui-button-toggle').forEach(btn => {
        btn.addEventListener('buttonToggleChange', () => {
          const theme = btn.dataset.theme || btn.value;
          btn.selected = true;
          setTheme(theme);
        });
      });
    }
  });

  setTheme(savedTheme);
}

// Initialize on load
document.addEventListener('DOMContentLoaded', () => {
  initNavigation();
  initTheme();

  // Check for hash in URL and navigate to section
  const handleHashChange = () => {
    const hash = window.location.hash.slice(1) || 'home';
    console.log('Hash changed to:', hash);
    setTimeout(() => {
      showSection(hash);
    }, 100);
  };

  // Listen for hash changes
  window.addEventListener('hashchange', handleHashChange);

  // Check initial hash
  handleHashChange();
});

// Export for module imports
// Ensure global access
window.showSection = showSection;
window.setTheme = setTheme;
window.openDocumentation = openDocumentation;

export { showSection, setTheme, openDocumentation };
