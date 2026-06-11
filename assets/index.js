export { f as format } from './utils-Ck6jDuhz.js';

/**
 * theme-switcher.ts
 *
 * Framework-agnostic theme switcher for the app-ui library.
 * Works in Angular, React, Vue, Svelte, or plain HTML/JS.
 *
 * Usage (any framework):
 *   import { ThemeSwitcher } from '@app-ui/theme-switcher';
 *   ThemeSwitcher.set('violet');
 *   ThemeSwitcher.get();         // → 'violet'
 *   ThemeSwitcher.toggle();      // → cycles to next theme
 *   ThemeSwitcher.init();        // → restores last saved theme on page load
 *   ThemeSwitcher.onChange(cb);  // → subscribe to changes
 */
const THEMES = ['light', 'dark', 'green', 'pink', 'yellow', 'violet', 'blue'];
const STORAGE_KEY = 'app-ui-theme';
const DATA_ATTR = 'data-theme';
const DEFAULT_THEME = 'light';
const LEGACY_BODY_CLASSES = [...THEMES.map(theme => `theme-${theme}`), 'dark-theme', 'theme-blue', 'theme-ui'];
const listeners = new Set();
function notify(theme) {
    listeners.forEach(cb => cb(theme));
}
function isValidTheme(value) {
    return THEMES.includes(value);
}
function applyThemeToDocument(theme) {
    if (typeof document === 'undefined') {
        return;
    }
    const html = document.documentElement;
    const body = document.body;
    html.setAttribute(DATA_ATTR, theme);
    html.classList.remove(...THEMES);
    html.classList.add(theme);
    if (body) {
        body.classList.remove(...LEGACY_BODY_CLASSES);
        body.classList.add(`theme-${theme}`);
        if (theme === 'dark') {
            body.classList.add('dark-theme');
        }
    }
}
function resolveThemeFromDocument() {
    if (typeof document === 'undefined') {
        return DEFAULT_THEME;
    }
    const html = document.documentElement;
    const body = document.body;
    const attrTheme = html.getAttribute(DATA_ATTR);
    if (isValidTheme(attrTheme)) {
        return attrTheme;
    }
    for (const theme of THEMES) {
        if (html.classList.contains(theme) || body?.classList.contains(`theme-${theme}`)) {
            return theme;
        }
    }
    if (body?.classList.contains('dark-theme')) {
        return 'dark';
    }
    return DEFAULT_THEME;
}
function emitThemeChange(theme) {
    if (typeof window === 'undefined') {
        return;
    }
    window.dispatchEvent(new CustomEvent('app-ui-theme-change', {
        detail: { theme },
    }));
}
const ThemeSwitcher = {
    /**
     * Apply a theme immediately and persist it to localStorage.
     */
    set(theme) {
        if (!isValidTheme(theme)) {
            console.warn(`[ThemeSwitcher] Unknown theme: "${theme}". Valid themes: ${THEMES.join(', ')}`);
            return;
        }
        applyThemeToDocument(theme);
        try {
            localStorage.setItem(STORAGE_KEY, theme);
        }
        catch {
            /* localStorage unavailable (SSR / private mode) – ignore */
        }
        emitThemeChange(theme);
        notify(theme);
    },
    /**
     * Return the currently active theme name.
     */
    get() {
        return resolveThemeFromDocument();
    },
    /**
     * Restore the last saved theme from localStorage (call on app start).
     * Falls back to the system colour-scheme preference if no saved theme exists.
     */
    init() {
        let saved = null;
        try {
            saved = localStorage.getItem(STORAGE_KEY);
        }
        catch {
            /* ignore */
        }
        if (isValidTheme(saved)) {
            this.set(saved);
            return saved;
        }
        // Respect the OS dark-mode preference as default
        const prefersDark = typeof window !== 'undefined' &&
            window.matchMedia('(prefers-color-scheme: dark)').matches;
        const fallback = prefersDark ? 'dark' : DEFAULT_THEME;
        this.set(fallback);
        return fallback;
    },
    /**
     * Cycle to the next theme in the list and return the new theme name.
     * Optionally restrict cycling to a subset of themes.
     */
    toggle(subset = THEMES) {
        const themes = Array.from(new Set(subset.filter(isValidTheme)));
        const cycleThemes = themes.length > 0 ? themes : THEMES;
        const current = this.get();
        const idx = cycleThemes.indexOf(current);
        const next = idx >= 0 ? cycleThemes[(idx + 1) % cycleThemes.length] : cycleThemes[0];
        this.set(next);
        return next;
    },
    /**
     * Subscribe to theme changes. Returns an unsubscribe function.
     */
    onChange(listener) {
        listeners.add(listener);
        return () => listeners.delete(listener);
    },
    /**
     * Expose the full list of available theme names.
     */
    list() {
        return [...THEMES];
    },
};

/**
 * @fileoverview entry point for your component library
 *
 * This is the entry point for your component library. Use this file to export utilities,
 * constants or data structure that accompany your components.
 *
 * DO NOT use this file to export your components. Instead, use the recommended approaches
 * to consume components of this package as outlined in the `README.md`.
 */
const LEGACY_THEME_BUTTON_IDS = {
    light: 'theme-light-btn',
    dark: 'theme-dark-btn',
    green: 'theme-green-btn',
    pink: 'theme-pink-btn',
    yellow: 'theme-yellow-btn',
    violet: 'theme-violet-btn',
    blue: 'theme-blue-btn',
};
let themeSubscriptionBound = false;
let themeControlsInitialized = false;
function updateLegacyThemeButtons(theme) {
    if (typeof document === 'undefined') {
        return;
    }
    Object.entries(LEGACY_THEME_BUTTON_IDS).forEach(([themeName, id]) => {
        const button = document.getElementById(id);
        if (!button) {
            return;
        }
        const isActive = themeName === theme;
        button.style.opacity = isActive ? '1' : '0.5';
        button.style.background = isActive ? 'rgba(59, 130, 246, 0.15)' : 'transparent';
        button.style.color = isActive ? '#10b981' : 'inherit';
        button.setAttribute('aria-pressed', isActive ? 'true' : 'false');
    });
}
function updateThemeSwitchControls(theme) {
    if (typeof document === 'undefined') {
        return;
    }
    const toggleGroup = document.getElementById('theme-switcher-control');
    if (toggleGroup) {
        toggleGroup.value = theme;
    }
    const genericToggleButton = document.getElementById('theme-toggle');
    if (genericToggleButton) {
        genericToggleButton.setAttribute('aria-label', `Toggle theme. Current theme: ${theme}`);
    }
    updateLegacyThemeButtons(theme);
}
function bindThemeControls() {
    if (typeof document === 'undefined' || themeControlsInitialized) {
        return;
    }
    themeControlsInitialized = true;
    const initializeControls = () => {
        const toggleGroup = document.getElementById('theme-switcher-control');
        if (toggleGroup && toggleGroup.dataset.themeBound !== 'true') {
            toggleGroup.dataset.themeBound = 'true';
            toggleGroup.addEventListener('buttonToggleGroupChange', (event) => {
                const detail = event.detail;
                const nextTheme = Array.isArray(detail?.value) ? detail.value[0] : detail?.value;
                if (nextTheme && THEMES.includes(nextTheme)) {
                    ThemeSwitcher.set(nextTheme);
                }
            });
        }
        const themeToggleButton = document.getElementById('theme-toggle');
        if (themeToggleButton && themeToggleButton.getAttribute('data-theme-bound') !== 'true') {
            themeToggleButton.setAttribute('data-theme-bound', 'true');
            themeToggleButton.addEventListener('click', () => {
                ThemeSwitcher.toggle(['light', 'dark']);
            });
        }
        Object.entries(LEGACY_THEME_BUTTON_IDS).forEach(([themeName, id]) => {
            const button = document.getElementById(id);
            if (button && button.getAttribute('data-theme-bound') !== 'true') {
                button.setAttribute('data-theme-bound', 'true');
                button.addEventListener('click', () => ThemeSwitcher.set(themeName));
            }
        });
        updateThemeSwitchControls(ThemeSwitcher.get());
    };
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initializeControls, { once: true });
    }
    else {
        initializeControls();
    }
}
function initializeThemeSystem() {
    if (typeof window !== 'undefined') {
        window.ThemeSwitcher = ThemeSwitcher;
        window.setTheme = (theme) => ThemeSwitcher.set(theme);
        window.toggleTheme = (subset) => ThemeSwitcher.toggle(subset);
        window.getTheme = () => ThemeSwitcher.get();
    }
    ThemeSwitcher.init();
    bindThemeControls();
    if (!themeSubscriptionBound) {
        ThemeSwitcher.onChange(updateThemeSwitchControls);
        themeSubscriptionBound = true;
    }
}
initializeThemeSystem();

export { THEMES, ThemeSwitcher };
