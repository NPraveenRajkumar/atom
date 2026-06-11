// Masonry Layout Demo — Premium Edition with Rich Photo Gallery
export function initMasonryDemo() {
  const section = document.getElementById('masonry');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top:0;color:var(--text-secondary);margin-bottom:20px;">
      A premium masonry photo gallery with filtering, search, lightbox, and batch selection.
    </p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button id="btnMasonryPlayground" variant="outline" selected="true">🎮 Interactive Playground</ui-button>
      <ui-button id="btnMasonryBasic" variant="outline">🖼️ Gallery</ui-button>
      <ui-button id="btnMasonryFiltered" variant="outline">🔍 Filtered</ui-button>
      <ui-button id="btnMasonrySelectable" variant="outline">✅ Selection</ui-button>
      <ui-button id="btnMasonrySkeleton" variant="outline">💀 Skeleton</ui-button>
      <ui-button id="btnMasonryProductGrid" variant="outline">📦 Product Grid</ui-button>
      <ui-button id="btnMasonryNewsFeed" variant="outline">📰 News Feed</ui-button>
    </div>

    <div id="masonryDemoContainer" style="margin-top: 20px;"></div>
  `;

  // Rich photo data using high-quality Unsplash images
  const PHOTOS = [
    { id: 1,  title: 'Alpine Sunrise',        category: 'nature',     tags: ['mountains','dawn'],   likes: 2847, views: '14.2k', image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=600&q=80', aspectRatio: '4/3' },
    { id: 2,  title: 'Neon Cityscape',        category: 'urban',      tags: ['night','city'],       likes: 1923, views: '9.8k',  image: 'https://images.unsplash.com/photo-1477959858617-67f85cf4f1df?w=600&q=80', aspectRatio: '3/4' },
    { id: 3,  title: 'Red Fox at Dusk',       category: 'animals',    tags: ['wildlife','fox'],     likes: 3512, views: '22.1k', image: 'https://images.unsplash.com/photo-1474511320723-9a56873867b5?w=600&q=80', aspectRatio: '4/3' },
    { id: 4,  title: 'Ocean Cliff Walk',      category: 'travel',     tags: ['coast','cliffs'],     likes: 4201, views: '31.0k', image: 'https://images.unsplash.com/photo-1505118380757-91f5f5632de0?w=600&q=80', aspectRatio: '3/4' },
    { id: 5,  title: 'Cherry Blossoms',       category: 'nature',     tags: ['flowers','spring'],   likes: 5674, views: '41.5k', image: 'https://images.unsplash.com/photo-1522383225653-d6cfde98c56d?w=600&q=80', aspectRatio: '4/3' },
    { id: 6,  title: 'Tokyo Alley',           category: 'urban',      tags: ['japan','street'],     likes: 2103, views: '17.4k', image: 'https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=600&q=80', aspectRatio: '3/4' },
    { id: 7,  title: 'Eagle in Flight',       category: 'animals',    tags: ['bird','sky'],         likes: 1876, views: '12.9k', image: 'https://images.unsplash.com/photo-1611689102192-1f6e0e52df0a?w=600&q=80', aspectRatio: '4/3' },
    { id: 8,  title: 'Santorini Sunset',      category: 'travel',     tags: ['greece','sunset'],    likes: 6102, views: '48.3k', image: 'https://images.unsplash.com/photo-1533105079780-92b9be482077?w=600&q=80', aspectRatio: '4/3' },
    { id: 9,  title: 'Ancient Redwoods',      category: 'nature',     tags: ['forest','trees'],     likes: 3890, views: '28.7k', image: 'https://images.unsplash.com/photo-1448375240586-882707db888b?w=600&q=80', aspectRatio: '3/4' },
    { id: 10, title: 'Brooklyn Bridge',       category: 'urban',      tags: ['nyc','bridge'],       likes: 4478, views: '35.2k', image: 'https://images.unsplash.com/photo-1548438294-1ad5d5f4f063?w=600&q=80', aspectRatio: '4/3' },
    { id: 11, title: 'Polar Bear Swim',       category: 'animals',    tags: ['arctic','polar'],     likes: 2654, views: '19.1k', image: 'https://images.unsplash.com/photo-1589656966895-2f33e7653819?w=600&q=80', aspectRatio: '3/4' },
    { id: 12, title: 'Amalfi Coast Drive',    category: 'travel',     tags: ['italy','coast'],      likes: 5233, views: '40.8k', image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=600&q=80', aspectRatio: '4/3' },
  ];

  const FILTER_OPTIONS = [
    { key: 'all',     label: '🌟 All',     color: '#6366f1' },
    { key: 'nature',  label: '🌲 Nature',  color: '#10b981' },
    { key: 'urban',   label: '🏙️ Urban',  color: '#3b82f6' },
    { key: 'animals', label: '🦊 Animals', color: '#f59e0b' },
    { key: 'travel',  label: '✈️ Travel',  color: '#ec4899' },
  ];

  const CATEGORY_COLORS = {
    nature:  { bg: '#d1fae5', text: '#065f46', status: 'success' },
    urban:   { bg: '#dbeafe', text: '#1e40af', status: 'info' },
    animals: { bg: '#fef3c7', text: '#92400e', status: 'warning' },
    travel:  { bg: '#fce7f3', text: '#9d174d', status: 'danger' },
  };

  // Store on window so inline onclick can access
  window._masonryPhotos = PHOTOS;
  window._masonryCatColors = CATEGORY_COLORS;

  function updateActiveBtn(id) {
    ['btnMasonryPlayground','btnMasonryBasic','btnMasonryFiltered','btnMasonrySelectable','btnMasonrySkeleton','btnMasonryProductGrid','btnMasonryNewsFeed'].forEach(b => {
      const el = document.getElementById(b);
      if (el) el.selected = b === id;
    });
  }

  // ── Render a masonry card (pure HTML, no Stencil masonry component) ──────────
  function renderCard(photo, opts = {}) {
    const { selectable = false, checked = false, idx = 0, showLightbox = true } = opts;
    const cat = CATEGORY_COLORS[photo.category] || { bg: '#f3f4f6', text: '#374151', status: 'default' };
    const checkHtml = selectable ? `
      <div class="ms-checkbox" onclick="event.stopPropagation(); window._masonryToggle(${idx})"
        style="position:absolute;top:10px;left:10px;z-index:3;
          width:24px;height:24px;border-radius:6px;
          background:${checked ? '#6366f1' : 'rgba(255,255,255,0.9)'};
          border:2px solid ${checked ? '#6366f1' : 'rgba(255,255,255,0.7)'};
          display:flex;align-items:center;justify-content:center;
          cursor:pointer;transition:all 0.2s;box-shadow:0 2px 8px rgba(0,0,0,0.2);">
        ${checked ? '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>' : ''}
      </div>` : '';

    const lbBtn = showLightbox ? `
      <button onclick="event.stopPropagation(); window._masonryLightbox(${photo.id})"
        style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.15);
          border:1px solid rgba(255,255,255,0.3);color:white;cursor:pointer;backdrop-filter:blur(4px);
          display:flex;align-items:center;justify-content:center;transition:all 0.2s;"
        onmouseover="this.style.background='rgba(255,255,255,0.25)'"
        onmouseout="this.style.background='rgba(255,255,255,0.15)'">
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M8 3H5a2 2 0 0 0-2 2v3m18 0V5a2 2 0 0 0-2-2h-3m0 18h3a2 2 0 0 0 2-2v-3M3 16v3a2 2 0 0 0 2 2h3"/></svg>
      </button>` : '';

    return `
      <div class="ms-card" data-id="${photo.id}" data-idx="${idx}"
        style="border-radius:12px;overflow:hidden;background:var(--bg-primary,#fff);
          box-shadow:0 2px 12px rgba(0,0,0,0.08);break-inside:avoid;
          margin-bottom:16px;cursor:pointer;transition:transform 0.25s,box-shadow 0.25s;position:relative;
          ${checked ? 'outline:3px solid #6366f1;' : ''}"
        onmouseover="this.style.transform='translateY(-4px)';this.style.boxShadow='0 12px 32px rgba(0,0,0,0.18)'"
        onmouseout="this.style.transform='';this.style.boxShadow='0 2px 12px rgba(0,0,0,0.08)'">

        ${checkHtml}

        <div class="ms-img-wrap" style="position:relative;overflow:hidden;">
          <img src="${photo.image}" alt="${photo.title}" loading="lazy"
            style="width:100%;height:auto;display:block;object-fit:cover;aspect-ratio:${photo.aspectRatio};
              transition:transform 0.4s;"
            onmouseover="this.style.transform='scale(1.04)'"
            onmouseout="this.style.transform=''"
            onerror="this.style.display='none';this.nextElementSibling.style.display='flex'"/>
          <div style="display:none;width:100%;aspect-ratio:${photo.aspectRatio};
            background:linear-gradient(135deg,var(--bg-secondary,#f1f5f9),var(--bg-tertiary,#e2e8f0));
            align-items:center;justify-content:center;flex-direction:column;gap:8px;color:var(--text-muted,#94a3b8);">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><rect x="3" y="3" width="18" height="18" rx="2"/><circle cx="8.5" cy="8.5" r="1.5"/><path d="m21 15-5-5L5 21"/></svg>
            <span style="font-size:12px;">Image unavailable</span>
          </div>

          <!-- Hover overlay -->
          <div class="ms-overlay" style="position:absolute;inset:0;background:linear-gradient(to top,rgba(0,0,0,0.6) 0%,transparent 50%);
            opacity:0;transition:opacity 0.3s;display:flex;align-items:flex-end;padding:12px;gap:8px;"
            onmouseover="this.style.opacity='1'" onmouseout="this.style.opacity='0'">
            ${lbBtn}
            <button onclick="event.stopPropagation()"
              style="width:36px;height:36px;border-radius:8px;background:rgba(255,255,255,0.15);
                border:1px solid rgba(255,255,255,0.3);color:white;cursor:pointer;backdrop-filter:blur(4px);
                display:flex;align-items:center;justify-content:center;transition:all 0.2s;"
              onmouseover="this.style.background='rgba(239,68,68,0.4)'"
              onmouseout="this.style.background='rgba(255,255,255,0.15)'">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
            </button>
          </div>
        </div>

        <div style="padding:12px 14px 14px;">
          <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:6px;">
            <h4 style="margin:0;font-size:13px;font-weight:700;color:var(--text-primary,#111827);line-height:1.3;">${photo.title}</h4>
            <ui-tag size="sm" color="${cat.status}" variant="filled" label="${photo.category.toUpperCase()}" style="margin-left:6px;flex-shrink:0;"></ui-tag>
          </div>
          <div style="display:flex;gap:6px;flex-wrap:wrap;margin-bottom:8px;">
            ${photo.tags.map(t => `<ui-tag size="sm" color="secondary" variant="outlined" label="#${t}"></ui-tag>`).join('')}
          </div>
          <div style="display:flex;gap:12px;align-items:center;color:var(--text-muted,#9ca3af);font-size:11px;">
            <span style="display:flex;align-items:center;gap:4px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="currentColor"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>
              ${photo.likes.toLocaleString()}
            </span>
            <span style="display:flex;align-items:center;gap:4px;">
              <svg width="11" height="11" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>
              ${photo.views}
            </span>
          </div>
        </div>
      </div>`;
  }

  // ── Render a masonry grid of cards ──────────────────────────────────────────
  function renderMasonryGrid(photos, cols, opts = {}) {
    if (!photos.length) return `<div style="text-align:center;padding:60px;color:var(--text-muted,#9ca3af);">No photos found</div>`;
    const columns = Array.from({ length: cols }, () => []);
    photos.forEach((p, i) => columns[i % cols].push({ photo: p, idx: i }));
    return `<div style="display:flex;gap:16px;align-items:flex-start;">
      ${columns.map(col => `
        <div style="flex:1;min-width:0;">
          ${col.map(({ photo, idx }) => renderCard(photo, { ...opts, idx })).join('')}
        </div>`).join('')}
    </div>`;
  }

  // ── Lightbox ─────────────────────────────────────────────────────────────────
  window._masonryLightbox = function(id) {
    const photos = window._masonryPhotos;
    let current = photos.findIndex(p => p.id === id);
    if (current < 0) return;

    function show(idx) {
      const p = photos[idx];
      const overlay = document.getElementById('ms-lightbox');
      if (!overlay) return;
      overlay.querySelector('.ms-lb-img').src = p.image.replace('w=600', 'w=1200');
      overlay.querySelector('.ms-lb-title').textContent = p.title;
      overlay.querySelector('.ms-lb-cat').textContent = p.category;
      overlay.querySelector('.ms-lb-counter').textContent = `${idx + 1} / ${photos.length}`;
      current = idx;
    }

    // Inject lightbox if not present
    if (!document.getElementById('ms-lightbox')) {
      const lb = document.createElement('div');
      lb.id = 'ms-lightbox';
      lb.style.cssText = 'position:fixed;inset:0;background:rgba(0,0,0,0.92);z-index:99999;display:flex;align-items:center;justify-content:center;animation:fadeIn 0.2s ease;';
      lb.innerHTML = `
        <button onclick="document.getElementById('ms-lightbox').remove()" style="position:absolute;top:20px;right:20px;width:44px;height:44px;border-radius:50%;background:rgba(255,255,255,0.12);border:none;color:white;font-size:20px;cursor:pointer;display:flex;align-items:center;justify-content:center;">✕</button>
        <button onclick="window._masonryLbNav(-1)" style="position:absolute;left:20px;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.12);border:none;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;">‹</button>
        <div style="max-width:80vw;max-height:88vh;display:flex;flex-direction:column;align-items:center;gap:16px;">
          <img class="ms-lb-img" src="" alt="" style="max-width:100%;max-height:75vh;border-radius:12px;object-fit:contain;box-shadow:0 20px 60px rgba(0,0,0,0.5);">
          <div style="text-align:center;color:white;">
            <div class="ms-lb-title" style="font-size:18px;font-weight:700;margin-bottom:4px;"></div>
            <div class="ms-lb-cat" style="font-size:12px;opacity:0.6;text-transform:uppercase;letter-spacing:0.1em;"></div>
          </div>
        </div>
        <button onclick="window._masonryLbNav(1)" style="position:absolute;right:20px;width:48px;height:48px;border-radius:50%;background:rgba(255,255,255,0.12);border:none;color:white;font-size:24px;cursor:pointer;display:flex;align-items:center;justify-content:center;">›</button>
        <div class="ms-lb-counter" style="position:absolute;bottom:20px;color:rgba(255,255,255,0.5);font-size:13px;"></div>`;
      document.body.appendChild(lb);
    }
    window._masonryLbNav = (dir) => {
      const p = window._masonryPhotos;
      show((current + dir + p.length) % p.length);
    };
    show(current);
  };

  // ── PLAYGROUND ────────────────────────────────────────────────────────────────
  function showPlayground() {
    updateActiveBtn('btnMasonryPlayground');
    const c = document.getElementById('masonryDemoContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary);border-radius:16px;padding:28px;border:1px solid var(--border-default);">
        <h3 style="margin-top:0;display:flex;align-items:center;gap:10px;">
          <span style="font-size:22px;">🎮</span> Interactive Masonry Playground
        </h3>
        <p style="color:var(--text-secondary);margin-bottom:24px;">Adjust columns, gap and category filter to preview the masonry layout live.</p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(160px,1fr));gap:16px;padding:20px;background:var(--bg-secondary);border-radius:12px;border:1px solid var(--border-default);margin-bottom:24px;">
          <ui-dropdown id="pgCols" label="Columns" value="3" options='[{"label":"1","value":"1"},{"label":"2","value":"2"},{"label":"3","value":"3"},{"label":"4","value":"4"}]'></ui-dropdown>
          <ui-dropdown id="pgCat" label="Category" value="all" options='[{"label":"All","value":"all"},{"label":"Nature","value":"nature"},{"label":"Urban","value":"urban"},{"label":"Animals","value":"animals"},{"label":"Travel","value":"travel"}]'></ui-dropdown>
          <ui-dropdown id="pgSort" label="Sort By" value="none" options='[{"label":"Default","value":"none"},{"label":"Most Liked","value":"likes"},{"label":"Most Viewed","value":"views"},{"label":"A–Z","value":"alpha"}]'></ui-dropdown>
        </div>

        <div id="pgGrid"></div>
      </div>`;

    function refresh() {
      const cols = parseInt(document.getElementById('pgCols')?.value || '3');
      const cat  = document.getElementById('pgCat')?.value || 'all';
      const sort = document.getElementById('pgSort')?.value || 'none';
      let photos = [...PHOTOS];
      if (cat !== 'all') photos = photos.filter(p => p.category === cat);
      if (sort === 'likes') photos.sort((a, b) => b.likes - a.likes);
      if (sort === 'views') photos.sort((a, b) => parseFloat(b.views) - parseFloat(a.views));
      if (sort === 'alpha') photos.sort((a, b) => a.title.localeCompare(b.title));
      const grid = document.getElementById('pgGrid');
      if (grid) grid.innerHTML = renderMasonryGrid(photos, cols, { showLightbox: true });
    }

    setTimeout(() => {
      ['pgCols','pgCat','pgSort'].forEach(id => {
        document.getElementById(id)?.addEventListener('dropdownChange', refresh);
      });
      refresh();
    }, 150);
  }

  // ── BASIC GALLERY ──────────────────────────────────────────────────────────
  function showBasic() {
    updateActiveBtn('btnMasonryBasic');
    const c = document.getElementById('masonryDemoContainer');
    if (!c) return;
    c.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary);border-radius:16px;padding:28px;border:1px solid var(--border-default);">
        <h3 style="margin-top:0;display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">🖼️</span> Fluid Masonry Gallery</h3>
        <p style="color:var(--text-secondary);margin-bottom:24px;">Natural waterfall layout with hover overlays and one-click lightbox.</p>
        ${renderMasonryGrid(PHOTOS, 3, { showLightbox: true })}
      </div>`;
  }

  // ── FILTERED ───────────────────────────────────────────────────────────────
  function showFiltered() {
    updateActiveBtn('btnMasonryFiltered');
    const c = document.getElementById('masonryDemoContainer');
    if (!c) return;

    let activeFilter = 'all';
    let searchText = '';

    c.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary);border-radius:16px;padding:28px;border:1px solid var(--border-default);">
        <h3 style="margin-top:0;display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">🔍</span> Categorized & Searchable</h3>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Filter by category or search across photo titles and tags.</p>

        <div style="display:flex;gap:12px;align-items:center;flex-wrap:wrap;margin-bottom:20px;">
          <div style="display:flex;gap:8px;flex-wrap:wrap;" id="filterBtns">
            ${FILTER_OPTIONS.map(f => `
              <button id="fb_${f.key}" onclick="window._masonryFilter('${f.key}')"
                style="padding:6px 16px;border-radius:20px;border:2px solid ${f.color};cursor:pointer;font-size:13px;font-weight:600;
                  background:${f.key === 'all' ? f.color : 'transparent'};color:${f.key === 'all' ? 'white' : f.color};
                  transition:all 0.2s;">
                ${f.label}
              </button>`).join('')}
          </div>
          <div style="flex:1;min-width:200px;max-width:280px;">
            <input id="masonrySearch" type="text" placeholder="🔍 Search photos…"
              oninput="window._masonrySearch(this.value)"
              style="width:100%;padding:8px 14px;border:1.5px solid var(--border-default,#e5e7eb);border-radius:20px;font-size:13px;
                background:var(--bg-secondary);color:var(--text-primary);outline:none;box-sizing:border-box;
                transition:border-color 0.2s;"
              onfocus="this.style.borderColor='#6366f1'" onblur="this.style.borderColor='var(--border-default,#e5e7eb)'">
          </div>
        </div>

        <div id="filteredCount" style="font-size:12px;color:var(--text-muted);margin-bottom:16px;">${PHOTOS.length} photos</div>
        <div id="filteredGrid">${renderMasonryGrid(PHOTOS, 3, { showLightbox: true })}</div>
      </div>`;

    function applyFilter() {
      let photos = [...PHOTOS];
      if (activeFilter !== 'all') photos = photos.filter(p => p.category === activeFilter);
      if (searchText) {
        const q = searchText.toLowerCase();
        photos = photos.filter(p => p.title.toLowerCase().includes(q) || p.tags.some(t => t.includes(q)) || p.category.includes(q));
      }
      const grid = document.getElementById('filteredGrid');
      const count = document.getElementById('filteredCount');
      if (grid) grid.innerHTML = renderMasonryGrid(photos, 3, { showLightbox: true });
      if (count) count.textContent = `${photos.length} photo${photos.length !== 1 ? 's' : ''}`;
    }

    window._masonryFilter = function(key) {
      activeFilter = key;
      FILTER_OPTIONS.forEach(f => {
        const btn = document.getElementById('fb_' + f.key);
        if (!btn) return;
        btn.style.background = key === f.key ? f.color : 'transparent';
        btn.style.color = key === f.key ? 'white' : f.color;
      });
      applyFilter();
    };
    window._masonrySearch = function(val) {
      searchText = val;
      applyFilter();
    };
  }

  // ── SELECTABLE ─────────────────────────────────────────────────────────────
  function showSelectable() {
    updateActiveBtn('btnMasonrySelectable');
    const c = document.getElementById('masonryDemoContainer');
    if (!c) return;

    window._masonrySelected = new Set();

    function renderAll() {
      const grid = document.getElementById('selectableGrid');
      const badge = document.getElementById('selBadge');
      if (!grid) return;
      grid.innerHTML = renderMasonryGrid(PHOTOS, 3, { selectable: true, showLightbox: false });
      // Re-apply checked state
      window._masonrySelected.forEach(idx => {
        const card = grid.querySelector(`[data-idx="${idx}"]`);
        if (card) {
          card.style.outline = '3px solid #6366f1';
          const cb = card.querySelector('.ms-checkbox');
          if (cb) {
            cb.style.background = '#6366f1';
            cb.style.borderColor = '#6366f1';
            cb.innerHTML = '<svg width="12" height="12" viewBox="0 0 12 12" fill="none"><path d="M2 6l3 3 5-5" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>';
          }
        }
      });
      if (badge) {
        const n = window._masonrySelected.size;
        badge.textContent = `${n} photo${n !== 1 ? 's' : ''} selected`;
        badge.style.background = n > 0 ? '#6366f1' : 'var(--bg-secondary)';
        badge.style.color = n > 0 ? 'white' : 'var(--text-muted)';
      }
      const batchBar = document.getElementById('batchBar');
      if (batchBar) batchBar.style.display = window._masonrySelected.size > 0 ? 'flex' : 'none';
    }

    window._masonryToggle = function(idx) {
      if (window._masonrySelected.has(idx)) {
        window._masonrySelected.delete(idx);
      } else {
        window._masonrySelected.add(idx);
      }
      renderAll();
    };

    c.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary);border-radius:16px;padding:28px;border:1px solid var(--border-default);">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;flex-wrap:wrap;gap:12px;">
          <div>
            <h3 style="margin:0 0 6px;display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">✅</span> Selection & Batch Actions</h3>
            <p style="color:var(--text-secondary);margin:0;">Click the checkbox on hover to select photos. Use Ctrl+A to select all.</p>
          </div>
          <div id="selBadge" style="padding:6px 16px;border-radius:20px;font-size:13px;font-weight:600;
            background:var(--bg-secondary);color:var(--text-muted);border:1px solid var(--border-default);
            white-space:nowrap;transition:all 0.3s;">0 photos selected</div>
        </div>

        <div id="batchBar" style="display:none;gap:10px;align-items:center;padding:12px 16px;
          background:linear-gradient(135deg,#6366f1,#8b5cf6);border-radius:10px;margin-bottom:20px;">
          <span style="color:white;font-size:13px;font-weight:600;flex:1;" id="batchLabel"></span>
          <button onclick="window._masonrySelected=new Set();window._masonryRenderAll()" style="padding:6px 14px;border-radius:6px;background:rgba(255,255,255,0.2);border:none;color:white;cursor:pointer;font-size:12px;font-weight:600;">Deselect All</button>
          <button onclick="var n=window._masonrySelected.size;window._masonrySelected=new Set(Array.from({length:window._masonryPhotos.length},(_,i)=>i));window._masonryRenderAll()" style="padding:6px 14px;border-radius:6px;background:rgba(255,255,255,0.2);border:none;color:white;cursor:pointer;font-size:12px;font-weight:600;">Select All</button>
          <button onclick="alert('Downloading '+window._masonrySelected.size+' photos!')" style="padding:6px 14px;border-radius:6px;background:white;border:none;color:#6366f1;cursor:pointer;font-size:12px;font-weight:700;">⬇ Download</button>
          <button onclick="if(confirm('Delete '+window._masonrySelected.size+' photos?')){window._masonrySelected=new Set();window._masonryRenderAll()}" style="padding:6px 14px;border-radius:6px;background:rgba(239,68,68,0.85);border:none;color:white;cursor:pointer;font-size:12px;font-weight:700;">🗑 Delete</button>
        </div>

        <div id="selectableGrid"></div>
      </div>`;

    window._masonryRenderAll = renderAll;
    renderAll();
  }

  // ── SKELETON LOADING ───────────────────────────────────────────────────────
  function showSkeleton() {
    updateActiveBtn('btnMasonrySkeleton');
    const c = document.getElementById('masonryDemoContainer');
    if (!c) return;

    const skeletonItems = Array.from({ length: 9 }, (_, i) => ({
      id: i + 1,
      title: `Item ${i + 1}`,
      description: 'Loading...',
      image: `https://picsum.photos/400/${[220,300,260,350,200,280,320,240,290][i % 9]}?random=${i}`,
      category: ['nature','architecture','food','technology'][i % 4],
    }));

    c.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary);border-radius:16px;padding:28px;border:1px solid var(--border-default);">
        <div style="display:flex;justify-content:space-between;align-items:flex-start;margin-bottom:20px;flex-wrap:wrap;gap:12px;">
          <div>
            <h3 style="margin:0 0 6px;display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">💀</span> Skeleton Loading State</h3>
            <p style="color:var(--text-secondary);margin:0;">Realistic animated placeholder tiles shown while content is being fetched. Toggle between loading and loaded states.</p>
          </div>
          <ui-button id="btnToggleSkeleton" variant="outline" color="warning">Toggle Loading</ui-button>
        </div>

        <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;">
          <div>
            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-secondary,#64748b);margin:0 0 12px;">Loading State (<code>loading-state="true"</code>)</p>
            <ui-masonry id="masonrySkeletonOn" layout-type="masonry" columns="2" gap="14" loading-state="true"></ui-masonry>
          </div>
          <div>
            <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-secondary,#64748b);margin:0 0 12px;">Loaded State (normal)</p>
            <ui-masonry id="masonrySkeletonOff" layout-type="masonry" columns="2" gap="14"></ui-masonry>
          </div>
        </div>

        <div style="margin-top:32px;">
          <p style="font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:0.08em;color:var(--text-secondary,#64748b);margin:0 0 12px;">Full-width togglable (<code>loading-state</code> controlled via JS)</p>
          <ui-masonry id="masonrySkeletonLive" layout-type="masonry" columns="3" gap="16" loading-state="true"></ui-masonry>
        </div>
      </div>`;

    setTimeout(() => {
      const off = document.getElementById('masonrySkeletonOff');
      const live = document.getElementById('masonrySkeletonLive');
      if (off) off.items = skeletonItems;
      if (live) live.items = skeletonItems;

      document.getElementById('btnToggleSkeleton')?.addEventListener('click', () => {
        const el = document.getElementById('masonrySkeletonLive');
        if (el) {
          el.loadingState = !el.loadingState;
          document.getElementById('btnToggleSkeleton').label = el.loadingState ? 'Show Loaded' : 'Show Loading';
        }
      });
    }, 150);
  }

  // ── PRODUCT GRID ───────────────────────────────────────────────────────────
  function showProductGrid() {
    updateActiveBtn('btnMasonryProductGrid');
    const c = document.getElementById('masonryDemoContainer');
    if (!c) return;

    const categories = ['electronics','fashion','home','sports'];
    const productNames = [
      'Wireless Headphones','Leather Jacket','Smart Lamp','Running Shoes',
      'Mechanical Keyboard','Silk Blouse','Yoga Mat','Trail Sneakers',
      'Gaming Mouse','Puffer Vest','Desk Organiser','Cycling Gloves',
      'USB-C Hub','Denim Jeans','Throw Pillow','Water Bottle',
      'Webcam HD','Trench Coat','Candle Set','Gym Shorts',
    ];
    const prices = [49.99,129.00,39.99,89.00,79.99,59.00,34.99,109.00,44.99,99.00,
                    24.99,29.00,54.99,69.99,19.99,22.00,89.99,149.00,18.00,39.00];
    const productItems = productNames.map((name, i) => ({
      id: i + 1,
      title: name,
      description: `$${prices[i].toFixed(2)} · ★ ${(3.8 + (i % 5) * 0.1).toFixed(1)} (${80 + i * 7} reviews)`,
      image: `https://picsum.photos/400/300?random=${i + 100}`,
      category: categories[i % 4],
      height: 300,
    }));

    const filterOpts = categories.map(k => ({ key: k, label: k.charAt(0).toUpperCase() + k.slice(1) }));

    c.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary);border-radius:16px;padding:28px;border:1px solid var(--border-default);">
        <h3 style="margin-top:0;display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">📦</span> Product Grid (<code>layout-type="grid"</code>)</h3>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Equal-height grid layout ideal for product listings. Category filter and multi-select batch actions included.</p>
        <ui-masonry id="masonryProductGrid"
          layout-type="grid"
          columns="4"
          gap="20"
          show-filters="true"
          selectable="true"
          multi-select="true"
          show-batch-actions="true"
          lightbox="true">
        </ui-masonry>
      </div>`;

    setTimeout(() => {
      const el = document.getElementById('masonryProductGrid');
      if (!el) return;
      el.filterOptions = filterOpts;
      el.items = productItems;
    }, 150);
  }

  // ── NEWS FEED ──────────────────────────────────────────────────────────────
  function showNewsFeed() {
    updateActiveBtn('btnMasonryNewsFeed');
    const c = document.getElementById('masonryDemoContainer');
    if (!c) return;

    const topics = ['technology','design','business','science'];
    const headlines = [
      'The Future of AI in Everyday Products',
      'How Brutalist Design Is Making a Comeback',
      'Remote Work Trends Reshaping Office Real Estate',
      'New Study Links Sleep Quality to Cognitive Performance',
      'Open-Source Models Challenge Proprietary AI Giants',
      'Typography Trends to Watch This Year',
      'Startup Valuations Stabilise After Two Turbulent Years',
      'Quantum Computing Moves Closer to Commercial Viability',
      'CSS Grid vs Flexbox: The 2026 Perspective',
      'Building Design Systems That Scale Across Teams',
      'Venture Capital Pivots Toward Climate-Tech',
      'Researchers Discover Novel Protein-Folding Pathway',
      'Edge Computing and the Death of the Monolithic Cloud',
      'The Return of Skeuomorphism in Mobile UI',
      'ESG Reporting Becomes Mandatory for Mid-Cap Firms',
      'CRISPR Applications Expand Beyond Genetic Disease',
      'Web Assembly Reaches Performance Parity With Native Code',
      'Spatial Design Principles for XR Interfaces',
    ];
    const authors = ['Alex Morgan','Sam Chen','Jordan Lee','Taylor Kim','Riley Park','Casey Wu'];
    const dates = ['May 28','May 27','May 26','May 25','May 24','May 23'];

    const newsItems = headlines.map((h, i) => ({
      id: i + 1,
      title: h,
      description: `By ${authors[i % 6]} · ${dates[i % 6]} — ${[
        'An in-depth look at emerging patterns that are transforming how we interact with technology.',
        'Industry experts weigh in on the forces shaping the next decade of innovation.',
        'A comprehensive analysis of recent developments and what they mean for practitioners.',
      ][i % 3]}`,
      image: `https://picsum.photos/600/${[200,260,220,300,240,280][i % 6]}?random=${i + 200}`,
      category: topics[i % 4],
    }));

    const filterOpts = topics.map(k => ({ key: k, label: k.charAt(0).toUpperCase() + k.slice(1) }));

    c.innerHTML = `
      <div class="demo-block" style="background:var(--bg-primary);border-radius:16px;padding:28px;border:1px solid var(--border-default);">
        <h3 style="margin-top:0;display:flex;align-items:center;gap:10px;"><span style="font-size:22px;">📰</span> News Feed (<code>layout-type="columns"</code>)</h3>
        <p style="color:var(--text-secondary);margin-bottom:20px;">Column-based layout for articles and blog posts. Items fill columns top-to-bottom for a natural reading flow.</p>
        <ui-masonry id="masonryNewsFeed"
          layout-type="columns"
          columns="3"
          gap="24"
          show-filters="true"
          lazy-load="true">
        </ui-masonry>
      </div>`;

    setTimeout(() => {
      const el = document.getElementById('masonryNewsFeed');
      if (!el) return;
      el.filterOptions = filterOpts;
      el.items = newsItems;
    }, 150);
  }

  // Wire up nav buttons
  setTimeout(() => {
    document.getElementById('btnMasonryPlayground')?.addEventListener('click', showPlayground);
    document.getElementById('btnMasonryBasic')?.addEventListener('click', showBasic);
    document.getElementById('btnMasonryFiltered')?.addEventListener('click', showFiltered);
    document.getElementById('btnMasonrySelectable')?.addEventListener('click', showSelectable);
    document.getElementById('btnMasonrySkeleton')?.addEventListener('click', showSkeleton);
    document.getElementById('btnMasonryProductGrid')?.addEventListener('click', showProductGrid);
    document.getElementById('btnMasonryNewsFeed')?.addEventListener('click', showNewsFeed);
    showPlayground();
  }, 100);
}
