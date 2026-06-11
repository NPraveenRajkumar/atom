// Performance benchmark for skeleton-loader with large lists
export function initSkeletonPerformanceDemo() {
  const section = document.getElementById('skeleton');
  if (!section) return;
  section.innerHTML = `
    <h4>Performance Benchmark: 500 Skeletons</h4>
    <ui-button id="startPerfTest" style="padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 6px; cursor: pointer;">Start Benchmark</ui-button>
    <div id="perfSkeletonContainer" style="margin-top: 20px;"></div>
    <div id="perfResult" style="margin-top: 12px; color:var(--text-secondary,#64748b);"></div>
  `;
  document.getElementById('startPerfTest').onclick = function () {
    const container = document.getElementById('perfSkeletonContainer');
    const result = document.getElementById('perfResult');
    container.innerHTML = '';
    const t0 = performance.now();
    for (let i = 0; i < 500; i++) {
      const el = document.createElement('skeleton-loader');
      el.setAttribute('width', '100%');
      el.setAttribute('height', '16px');
      el.setAttribute('style', 'margin-bottom:4px');
      container.appendChild(el);
    }
    const t1 = performance.now();
    result.textContent = `Rendered 500 skeletons in ${(t1 - t0).toFixed(1)} ms.`;
  };
}
