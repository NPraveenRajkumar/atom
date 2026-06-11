/**
 * Layout Loader Utility
 * Provides helper functions for managing complex Zenith layouts.
 */

export async function loadLayoutConfigs(url = '/assets/layout-configs.json') {
  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
    return await response.json();
  } catch (error) {
    console.error('Failed to load layout configurations:', error);
    return null;
  }
}

export async function applyLayoutConfig(workspaceId, config) {
  const workspace = document.getElementById(workspaceId);
  if (!workspace) {
    console.error(`Workspace with ID "${workspaceId}" not found`);
    return false;
  }

  try {
    // 1. Clear existing layout if requested
    if (config.clearExisting) {
      if (typeof workspace.clearAllRegions === 'function') {
        await workspace.clearAllRegions();
      }
    }

    // 2. Clear localStorage if saveState is disabled or specific key provided
    if (config.saveState === false || config.clearStorage) {
      const stateKey = workspace.getAttribute('state-key') || config.stateKey;
      if (stateKey) {
        localStorage.removeItem(stateKey);
      }
    }

    // 3. Set global config properties if they exist
    if (config.direction) {
      workspace.setAttribute('direction', config.direction);
    }

    // 4. Apply regions and panels sequentially to ensure stability
    if (config.regions && Array.isArray(config.regions)) {
      // Set regions property directly to clear/reset structure
      workspace.regions = config.regions.map(r => ({
        id: r.id,
        title: r.title,
        size: r.size,
        minSize: r.minSize,
        maxSize: r.maxSize,
        collapsible: r.collapsible,
        type: r.type || 'default'
      }));

      // Small delay to let the component process region changes
      await new Promise(resolve => setTimeout(resolve, 50));

      // Add panels to their respective regions
      for (const region of config.regions) {
        if (region.panels && Array.isArray(region.panels)) {
          for (const panel of region.panels) {
            await workspace.addPanel({
              regionId: region.id,
              ...panel,
              content: typeof panel.content === 'object' ? panel.content.html : panel.content
            });
          }
        }
      }
    }

    return true;
  } catch (error) {
    console.error('Error applying layout configuration:', error);
    return false;
  }
}
