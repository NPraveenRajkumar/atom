// Stepper Component Demo
export function initStepperDemo() {
  const section = document.getElementById('stepper');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Flexible step navigation with multiple styles, orientations, and progress modes.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 8px; flex-wrap: wrap;">
      <ui-button label="🎮 Playground"  onclick="showInteractiveStepper()" style="--ui-button-bg: var(--accent-purple,#8b5cf6); --ui-button-text-color: white;" variant="outline"></ui-button>
      <ui-button label="✨ Premium Styles"  style="--ui-button-border-color:var(--accent-pink,#db2777); --ui-button-text-color:var(--accent-pink,#db2777);" onclick="showPremiumThemesStepper()" variant="outline"></ui-button>
      <ui-button label="📑 Form Flow"  style="--ui-button-border-color: #0d9488; --ui-button-text-color: #0d9488;" onclick="showContentNavigationStepper()" variant="outline"></ui-button>
      <ui-button label="⚡ 25-Step Stress Test"  style="--ui-button-border-color:var(--accent-blue,#2563eb); --ui-button-text-color:var(--accent-blue,#2563eb);" onclick="showDemo25Stepper()" variant="outline"></ui-button>
      <ui-button label="🏷️ Label Sides"  onclick="showLabelPositionStepper()" variant="outline"></ui-button>
      <ui-button label="📜 Compact Scroll"  onclick="showCompactScrollableStepper()" variant="outline"></ui-button>
      
      <div style="width: 100%; height: 1px; background: #e2e8f0; margin: 10px 0;"></div>
      
      <ui-button label="Basic" variant="outline" size="xs" onclick="showBasicStepper()"></ui-button>
      <ui-button label="Dot Mode" variant="outline" size="xs" onclick="showDotStepper()"></ui-button>
      <ui-button label="Nav Style" variant="outline" size="xs" onclick="showNavigationStepper()"></ui-button>
      <ui-button label="Panel Mode" variant="outline" size="xs" onclick="showPanelStepper()"></ui-button>
      <ui-button label="Inline" variant="outline" size="xs" onclick="showInlineStepper()"></ui-button>
      <ui-button label="Vertical" variant="outline" size="xs" onclick="showVerticalStepper()"></ui-button>
      <ui-button label="Snack (Snake)" variant="outline" size="xs" onclick="showSnackStepper()"></ui-button>
      
      <div style="width: 100%; height: 1px; background: #e2e8f0; margin: 5px 0; opacity: 0.5;"></div>
      
      <ui-button label="Percent" variant="outline" size="xs" onclick="showPercentStepper()"></ui-button>
      <ui-button label="Nested" variant="outline" size="xs" onclick="showNestedStepper()"></ui-button>
      <ui-button label="Custom Icons" variant="outline" size="xs" onclick="showCustomIconStepper()"></ui-button>
      <ui-button label="Error States" variant="outline" size="xs" onclick="showErrorStepper()"></ui-button>
      <ui-button label="All States" variant="outline" size="xs" onclick="showExtraStatesStepper()"></ui-button>
      <ui-button label="Step Forms" variant="outline" size="xs" onclick="showStepContentStepper()"></ui-button>
    </div>

    <style>
        .demo-controls .demo-btn { padding: 10px 18px; border-radius: 8px; border:1px solid var(--border-default,#e2e8f0); background:var(--bg-primary,white); cursor: pointer; transition: all 0.2s; font-size: 13px; font-weight: 500; display: flex; align-items: center; gap: 6px; }
        .demo-btn.sm { padding: 6px 12px; font-size: 12px; border-radius: 6px; }
        .demo-btn.primary { background: #1677ff; color: white; border: none; }
        .demo-btn:hover { border-color: #1677ff; color: #1677ff; background: #f0f7ff; }
        .demo-btn.primary:hover { background: #4096ff; color: white; box-shadow: 0 4px 10px rgba(22, 119, 255, 0.2); }
        .demo-select { width: 100%; padding: 8px 12px; border: 1px solid #d1d5db; border-radius: 8px; background:var(--bg-primary,white); font-size: 14px; }
    </style>

    <div id="stepperDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    window.showInteractiveStepper();
  }, 100);

  // Demo functions
  window.showBasicStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Basic Stepper</h4>
        <ui-stepper id="basicStepper" active-step="1" icon-library="lucide"></ui-stepper>
        <div style="margin-top: 24px; padding: 20px; background:var(--bg-secondary,#f9fafb); border-radius: 8px; text-align: center;">
            <p id="basicStepContent">Current Step: Profile Details</p>
            <div style="display: flex; gap: 10px; justify-content: center; margin-top: 10px;">
                <ui-button label="Previous" variant="outline" onclick="handleStep('basicStepper', 'prev')"></ui-button>
                <ui-button label="Next Step" color="primary" onclick="handleStep('basicStepper', 'next')"></ui-button>
            </div>
        </div>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('basicStepper');
      stepper.steps = [
        { id: '1', label: 'Login', description: 'Account access' },
        { id: '2', label: 'Profile', description: 'Personal info' },
        { id: '3', label: 'Verification', description: 'Identity check' },
        { id: '4', label: 'Finalize', description: 'Complete setup' },
      ];
    }, 100);
  };

  window.showDotStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Progress Dot Mode</h4>
        <ui-stepper id="dotStepper" active-step="0" progress-dot="true" label-placement="vertical" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('dotStepper');
      stepper.steps = [
        { id: '1', label: 'Started', description: 'Project initialization' },
        { id: '2', label: 'Design', description: 'UI/UX phase' },
        { id: '3', label: 'Development', description: 'Coding' },
        { id: '4', label: 'Review', description: 'QA testing' },
        { id: '5', label: 'Finished', description: 'Deployment' },
      ];
    }, 100);
  };

  window.showNavigationStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Navigation Style Stepper</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Ideal for page headers or multi-step form navigation</p>
        <ui-stepper id="navStepper" active-step="0" variant="navigation" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('navStepper');
      stepper.steps = [
        { id: '1', label: 'Step 1: Info' },
        { id: '2', label: 'Step 2: Config' },
        { id: '3', label: 'Step 3: Review' },
      ];
    }, 100);
  };

  window.showPanelStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.1);">
        <h4>Panel Style Steps</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Each step is a distinct card-like panel</p>
        <ui-stepper id="panelStepper" active-step="1" variant="panel" show-descriptions="true" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('panelStepper');
      stepper.steps = [
        { id: '1', label: 'Setup', description: 'Basic settings', status: 'completed' },
        { id: '2', label: 'Integration', description: 'API Key connection', status: 'active' },
        { id: '3', label: 'Launch', description: 'Deployment', status: 'pending' },
      ];
    }, 100);
  };

  window.showInlineStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Inline Stepper</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Compact inline variant for restricted spaces</p>
        <ui-stepper id="inlineStepper" active-step="1" variant="inline" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('inlineStepper');
      stepper.steps = [
        { id: '1', label: 'Home' },
        { id: '2', label: 'Category' },
        { id: '3', label: 'Product' },
      ];
    }, 100);
  };

  window.showPercentStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Stepper with Progress Percent</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Show fine-grained progress on the active step icon</p>
        <ui-stepper id="percentStepper" active-step="1" icon-library="lucide"></ui-stepper>
        <div style="margin-top: 20px; display: flex; align-items: center; gap: 10px;">
          <ui-input type="number" min="0" max="100" value="75" label="Adjust Percent" id="percentRangeInput" style="width: 150px;"></ui-input>
          <span id="percentVal">75%</span>
        </div>
      </div>
    `;
    window.updatePercent = val => {
      const stepper = document.getElementById('percentStepper');
      document.getElementById('percentVal').textContent = val + '%';
      const steps = [...stepper.steps];
      steps[1].percent = parseInt(val);
      stepper.steps = steps;
    };
    document.getElementById('percentRangeInput')?.addEventListener('inputChange', (e) => updatePercent(e.target.value));

    setTimeout(() => {
      const stepper = document.getElementById('percentStepper');
      const steps = [
        { id: '1', label: 'Uploaded', status: 'completed' },
        { id: '2', label: 'Processing', status: 'active', percent: 75, icon: 'refresh' },
        { id: '3', label: 'Finished', status: 'pending', icon: 'check' },
      ];
      stepper.steps = steps;
    }, 100);
  };

  window.showNestedStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 800px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Nested Steps (Vertical)</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Define hierarchical sub-tasks within main steps</p>
        <ui-stepper id="nestedStepper" orientation="vertical" active-step="1" show-descriptions="true" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('nestedStepper');
      stepper.steps = [
        { id: '1', label: 'Design Phase', status: 'completed' },
        {
          id: '2',
          label: 'Implementation',
          status: 'active',
          description: 'Building the core modules',
          children: [
            { id: '2-1', label: 'Setup Environment', status: 'completed' },
            { id: '2-2', label: 'Develop UI', status: 'active' },
            { id: '2-3', label: 'Connect Backend', status: 'pending' },
          ],
        },
        { id: '3', label: 'Launch', status: 'pending' },
      ];
    }, 100);
  };

  window.showCustomIconStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Custom Icons (Emoji, Images, SVG)</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Use custom icons, images, or inline SVG in step markers</p>
        <ui-stepper id="customIconStepper" active-step="1" show-descriptions="true" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('customIconStepper');
      const checkSvg = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/></svg>';
      const userSvg =
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/></svg>';
      const settingsSvg =
        '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58c.18-.14.23-.41.12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54c-.04-.24-.24-.41-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94s.02.64.07.94l-2.03 1.58c-.18.14-.23.41-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58zM12 15.6c-1.98 0-3.6-1.62-3.6-3.6s1.62-3.6 3.6-3.6 3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6z"/></svg>';

      stepper.steps = [
        { id: '1', label: 'User Info', description: 'Profile setup', icon: 'user', status: 'completed' },
        { id: '2', label: 'Verification', description: 'Email confirmed', svgIcon: checkSvg, status: 'active' },
        { id: '3', label: 'Settings', description: 'Preferences', icon: 'settings', status: 'pending' },
      ];
    }, 100);
  };

  window.showVerticalStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 600px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Vertical Stepper</h4>
        <ui-stepper id="verticalStepper" orientation="vertical" active-step="1" show-descriptions="true" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('verticalStepper');
      stepper.steps = [
        { id: '1', label: 'Package Picked', description: 'Courier has collected the item' },
        { id: '2', label: 'In Transit', description: 'Traveling to sorting center' },
        { id: '3', label: 'Out for Delivery', description: 'Expected today between 2-4 PM' },
        { id: '4', label: 'Delivered', description: 'Signed by recipient' },
      ];
    }, 100);
  };

  window.showErrorStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Error States</h4>
        <ui-stepper id="errorStepper" active-step="1" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('errorStepper');
      stepper.steps = [
        { id: '1', label: 'Draft', status: 'completed' },
        { id: '2', label: 'Review', status: 'failed', description: 'Critical feedback found' },
        { id: '3', label: 'Publish', status: 'pending' },
      ];
    }, 100);
  };

  window.showExtraStatesStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Extra Statuses</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Support for Info, Warning, Waiting, and Disabled states</p>
        <ui-stepper id="extraStatesStepper" active-step="2" show-descriptions="true" icon-library="lucide"></ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('extraStatesStepper');
      stepper.steps = [
        { id: '1', label: 'Verified', status: 'completed', description: 'Done' },
        { id: '2', label: 'Processing', status: 'waiting', description: 'Please wait...' },
        { id: '3', label: 'Review', status: 'info', description: 'Read only' },
        { id: '4', label: 'Warning', status: 'warning', description: 'Check details' },
        { id: '5', label: 'Blocked', status: 'disabled', description: 'Not available' },
      ];
    }, 100);
  };

  window.showStepContentStepper = function () {
    const container = document.getElementById('stepperDemoContainer');
    if (!container) return;
    container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Step Form Content</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Inject custom form content directly into steps using slots</p>
        
        <div style="margin-bottom: 20px; width: 200px;">
          <ui-dropdown id="stepperOrientationSelect" label="Orientation" options='[{"label": "Horizontal", "value": "horizontal"}, {"label": "Vertical", "value": "vertical"}]' value="vertical"></ui-dropdown>
        </div>

        <ui-stepper id="contentStepper" orientation="vertical" active-step="0" icon-library="lucide">
            <div slot="content-1" style="padding: 16px; background:var(--bg-secondary,#f9fafb); border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
                <h5 style="margin-top: 0;">Personal Details</h5>
                <ui-input placeholder="Full Name" style="width: 100%; margin-bottom: 10px;"></ui-input>
                <ui-input type="email" placeholder="Email Address" style="width: 100%; margin-bottom: 10px;"></ui-input>
                <ui-button label="Save & Next" color="primary" onclick="handleStep('contentStepper', 'next')"></ui-button>
            </div>
            
            <div slot="content-2" style="padding: 16px; background:var(--bg-secondary,#f9fafb); border-radius: 8px; border:1px solid var(--border-default,#e5e7eb);">
                 <h5 style="margin-top: 0;">Account Setup</h5>
                <ui-checkbox label="Subscribe to newsletter" style="margin-bottom: 8px;"></ui-checkbox>
                <ui-checkbox label="Enable notifications" checked style="margin-bottom: 8px;"></ui-checkbox>
                <div style="margin-top: 10px; display: flex; gap: 10px;">
                    <ui-button label="Back" variant="outline" onclick="handleStep('contentStepper', 'prev')"></ui-button>
                    <ui-button label="Finish" color="primary" onclick="handleStep('contentStepper', 'next')"></ui-button>
                </div>
            </div>

            <div slot="content-3" style="padding: 16px; background: #f6ffed; border-radius: 8px; border: 1px solid #b7eb8f; color: #389e0d;">
                <h5 style="margin: 0;">🎉 All Done!</h5>
                <p>Your information has been submitted successfully.</p>
                <ui-button label="Edit" variant="outline" onclick="handleStep('contentStepper', 'prev')"></ui-button>
            </div>
        </ui-stepper>
      </div>
    `;
    setTimeout(() => {
      const stepper = document.getElementById('contentStepper');
      stepper.steps = [
        { id: '1', label: 'Step 1: Details', status: 'active' },
        { id: '2', label: 'Step 2: Options', status: 'pending' },
        { id: '3', label: 'Step 3: Complete', status: 'pending' },
      ];
    }, 100);
  };

  window.handleStep = function (id, action) {
    const stepper = document.getElementById(id);
    if (action === 'next') stepper.next();
    else stepper.prev();
  };
}

window.showSnackStepper = function () {
  const container = document.getElementById('stepperDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div style="max-width: 900px; padding: 20px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h4>Snake Layout (Snack Variant)</h4>
        <p style="color: #6b7280; font-size: 13px; margin-bottom: 20px;">Use the 'snack' variant along with horizontal orientation to display a multi-line wrapping progress layout with a global progress bar.</p>
        <ui-stepper id="snackStepper" active-step="6" variant="snack" orientation="horizontal" show-progress="true" steps-per-page="5" icon-library="lucide"></ui-stepper>
        <div style="margin-top: 24px; display: flex; gap: 10px;">
          <ui-button label="Previous" variant="outline" onclick="handleStep('snackStepper', 'prev')"></ui-button>
          <ui-button label="Next" color="primary" onclick="handleStep('snackStepper', 'next')"></ui-button>
        </div>
      </div>
    `;
  setTimeout(() => {
    const stepper = document.getElementById('snackStepper');
    const steps = [];
    for (let i = 0; i < 20; i++) {
      steps.push({ id: `s${i + 1}`, label: `Step ${i + 1}`, description: 'Details here' });
    }
    stepper.steps = steps;
  }, 100);
};

window.showLabelPositionStepper = function () {
  const container = document.getElementById('stepperDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div style="max-width: 1100px; padding: 30px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0;">🏷️ Label Positions</h3>
        <p style="color:var(--text-secondary,#64748b); font-size: 14px; margin-bottom: 30px;">Labels can be positioned relative to the icon: Right (default), Bottom, Left, or Top.</p>
        
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 40px;">
           <div>
              <h5 style="margin-bottom: 20px;">1. Default (Right)</h5>
              <div style="padding: 20px; border:1px solid var(--border-subtle,#f1f5f9); border-radius: 8px;">
                <ui-stepper id="labelRight" label-position="right"></ui-stepper>
              </div>
           </div>
           <div>
              <h5 style="margin-bottom: 20px;">2. Bottom (Vertical Layout)</h5>
              <div style="padding: 20px; border:1px solid var(--border-subtle,#f1f5f9); border-radius: 8px;">
                <ui-stepper id="labelBottom" label-position="bottom"></ui-stepper>
              </div>
           </div>
           <div>
              <h5 style="margin-bottom: 20px;">3. Left Position</h5>
              <div style="padding: 20px; border:1px solid var(--border-subtle,#f1f5f9); border-radius: 8px;">
                <ui-stepper id="labelLeft" label-position="left"></ui-stepper>
              </div>
           </div>
           <div>
              <h5 style="margin-bottom: 20px;">4. Top Position</h5>
              <div style="padding: 20px; border:1px solid var(--border-subtle,#f1f5f9); border-radius: 8px;">
                <ui-stepper id="labelTop" label-position="top"></ui-stepper>
              </div>
           </div>
        </div>
      </div>
    `;
  setTimeout(() => {
    const steps = [
      { id: '1', label: 'User Info', status: 'completed' },
      { id: '2', label: 'Payment', status: 'active' },
      { id: '3', label: 'Confirm', status: 'pending' },
    ];
    document.getElementById('labelRight').steps = steps;
    document.getElementById('labelBottom').steps = steps;
    document.getElementById('labelLeft').steps = steps;
    document.getElementById('labelTop').steps = steps;
  }, 100);
};

window.showContentNavigationStepper = function () {
  const container = document.getElementById('stepperDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div style="max-width: 900px; padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0;">📑 Content Area & Navigation</h3>
        <p style="color:var(--text-secondary,#64748b); font-size: 14px; margin-bottom: 24px;">Multi-step form with complex nested content and custom navigation buttons.</p>
        
        <ui-stepper id="navFlowStepper" orientation="horizontal" active-step="0" show-descriptions="true">
            <div slot="content-1" style="padding: 24px; background: #fafafa; border-radius: 8px; border: 1px dashed #e2e8f0; margin-top: 16px;">
                <h4 style="margin-top: 0;">Step 1: Account Type</h4>
                <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 16px; margin: 20px 0;">
                    <div style="padding: 16px; border: 2px solid #10b981; border-radius: 8px; background:var(--accent-blue-soft,#eff6ff); cursor: pointer;">
                        <h5 style="margin: 0;">Personal</h5>
                        <p style="font-size: 12px; color:var(--text-secondary,#64748b);">Free for individuals</p>
                    </div>
                    <div style="padding: 16px; border:1px solid var(--border-default,#e2e8f0); border-radius: 8px; cursor: pointer;">
                        <h5 style="margin: 0;">Business</h5>
                        <p style="font-size: 12px; color:var(--text-secondary,#64748b);">$25/mo for teams</p>
                    </div>
                </div>
                <div style="display: flex; justify-content: flex-end; gap: 10px;">
                    <ui-button label="Configure Profile →" color="primary" onclick="document.getElementById('navFlowStepper').next()"></ui-button>
                </div>
            </div>
            
            <div slot="content-2" style="padding: 24px; background: #fafafa; border-radius: 8px; border: 1px dashed #e2e8f0; margin-top: 16px;">
                <h4 style="margin-top: 0;">Step 2: Profile Settings</h4>
                <div style="margin: 20px 0;">
                    <ui-input label="Username" value="john_doe" style="width: 100%; margin-bottom: 16px;"></ui-input>
                    <ui-input multiline label="Bio" style="width: 100%; height: 60px;">I love building things with Stencil!</ui-input>
                </div>
                <div style="display: flex; justify-content: flex-end; gap: 10px;">
                    <ui-button label="← Back" variant="outline" onclick="document.getElementById('navFlowStepper').prev()"></ui-button>
                    <ui-button label="Review & Finish →" color="primary" onclick="document.getElementById('navFlowStepper').next()"></ui-button>
                </div>
            </div>

            <div slot="content-3" style="padding: 40px; text-align: center; background:var(--accent-pink-soft,#fdf2f8); border-radius: 8px; border: 1px solid #fbcfe8; margin-top: 16px;">
                <div style="font-size: 48px; margin-bottom: 16px;">🎉</div>
                <h3>Ready to Launch!</h3>
                <p style="color:var(--accent-pink,#be185d);">Your profile is all set up. Click finish to create your account.</p>
                <div style="display: flex; justify-content: center; gap: 10px; margin-top: 30px;">
                    <ui-button label="Edit Profile" variant="outline" onclick="document.getElementById('navFlowStepper').prev()"></ui-button>
                    <ui-button label="Finish Setup" color="danger" style="--ui-button-bg: var(--accent-pink,#db2777);" onclick="alert('Account Created!')"></ui-button>
                </div>
            </div>
        </ui-stepper>
      </div>
    `;
  setTimeout(() => {
    const stepper = document.getElementById('navFlowStepper');
    stepper.steps = [
      { id: '1', label: 'Select Plan', description: 'Choose your tier' },
      { id: '2', label: 'Settings', description: 'Configure profile' },
      { id: '3', label: 'Finish', description: 'Complete setup' },
    ];
  }, 100);
};

window.showCompactScrollableStepper = function () {
  const container = document.getElementById('stepperDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div style="max-width: 900px; padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0;">📜 Compact + Scrollable (20 Steps)</h3>
        <p style="color:var(--text-secondary,#64748b); font-size: 14px; margin-bottom: 24px;">Perfect for many steps in tight spaces. Use horizontal scroll with compact markers.</p>
        
        <div style="margin-bottom: 20px; display: flex; align-items: flex-end; gap: 20px;">
            <div style="width: 100px;">
                <ui-input type="number" id="scrollStepNum" label="Active index" value="0" min="0" max="19"></ui-input>
            </div>
            <ui-button label="Prev" variant="outline" onclick="document.getElementById('scrollStepper').prev()"></ui-button>
            <ui-button label="Next" color="primary" onclick="document.getElementById('scrollStepper').next()"></ui-button>
        </div>

        <div style="padding: 20px; background:var(--bg-secondary,#f8fafc); border-radius: 12px; overflow: hidden; border:1px solid var(--border-default,#e2e8f0);">
            <ui-stepper id="scrollStepper" active-step="0" compact="true" scrollable="true" orientation="horizontal"></ui-stepper>
        </div>
      </div>
    `;
  setTimeout(() => {
    const steps = [];
    for (let i = 0; i < 20; i++) {
      steps.push({ id: (i + 1).toString(), label: `Checkpoint ${i + 1}` });
    }
    document.getElementById('scrollStepper').steps = steps;
  }, 100);
};

window.showPremiumThemesStepper = function () {
  const container = document.getElementById('stepperDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div style="max-width: 900px; padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0;">✨ Premium Themes & Variants</h3>
        <p style="color:var(--text-secondary,#64748b); font-size: 14px; margin-bottom: 30px;">Mix and match variants, shapes, and colors for a premium look.</p>
        
        <div style="display: flex; flex-direction: column; gap: 40px;">
            <div>
                <h5 style="margin-bottom: 12px; color: #52c41a;">🟢 Square-Active Shape (Requested Highlight)</h5>
                <p style="font-size: 13px; color:var(--text-secondary,#64748b); margin-bottom: 16px;">Only the active step has a premium square border, matching the customized highlight requirements.</p>
                <ui-stepper id="theme1" active-step="0" step-shape="square-active" label-position="bottom" icon-library="lucide"></ui-stepper>
            </div>
            
            <div>
                <h5 style="margin-bottom: 12px; color: #0d9488;">🔸 Outlined Variant with Horizontal Labels</h5>
                <ui-stepper id="theme2" active-step="1" variant="outlined" color-scheme="success" icon-library="lucide"></ui-stepper>
            </div>
            
            <div>
                <h5 style="margin-bottom: 12px; color:var(--accent-red,#b91c1c);">🔺 Minimal Error State with Progress Dot</h5>
                <ui-stepper id="theme3" active-step="2" progress-dot="true" variant="minimal" color-scheme="danger"></ui-stepper>
            </div>

            <div>
                 <h5 style="margin-bottom: 12px; color:var(--text-primary,#1e293b);">⬛ Solid Dark Filled Variant</h5>
                 <div style="background: #1e293b; padding: 30px; border-radius: 12px;">
                    <ui-stepper id="theme4" active-step="1" variant="filled" icon-library="lucide"></ui-stepper>
                 </div>
            </div>
        </div>
      </div>
    `;
  setTimeout(() => {
    const defaultSteps = [
      { id: '1', label: 'Account', description: 'Create account', icon: 'info' },
      { id: '2', label: 'Profile', description: 'Add details', icon: 'clock' },
      { id: '3', label: 'Verify', description: 'Confirm email', icon: 'clock' },
      { id: '4', label: 'Done', description: 'All set', icon: 'clock' },
    ];

    document.getElementById('theme1').steps = defaultSteps;
    document.getElementById('theme2').steps = defaultSteps;
    document.getElementById('theme3').steps = [
      { label: 'Step 1', status: 'completed' },
      { label: 'Step 2', status: 'completed' },
      { label: 'Step 3', status: 'failed', description: 'Failed at step 3' },
      { label: 'Step 4', status: 'pending' },
    ];
    document.getElementById('theme4').steps = defaultSteps;
  }, 100);
};

window.showDemo25Stepper = function () {
  const container = document.getElementById('stepperDemoContainer');
  if (!container) return;
  container.innerHTML = `
      <div style="max-width: 1000px; padding: 24px; background:var(--bg-primary,white); border-radius: 12px; box-shadow: 0 4px 6px -1px rgba(0,0,0,0.1);">
        <h3 style="margin-top: 0;">🎮 25-Step Stress Test Demo</h3>
        <p style="color:var(--text-secondary,#64748b); font-size: 14px; margin-bottom: 24px;">Testing the component with many steps using snack variant and scrollable layouts.</p>
        
        <div style="display: flex; gap: 10px; margin-bottom: 30px;">
            <ui-button label="Previous Step" variant="outline" onclick="handle25Step('prev')"></ui-button>
            <ui-button label="Next Step" color="primary" onclick="handle25Step('next')"></ui-button>
        </div>

        <div style="margin-bottom: 24px;">
            <p style="font-weight: 600; margin-bottom: 15px;">1. Snack Snake Layout (Page size 8):</p>
            <ui-stepper id="stressSnack" active-step="0" variant="snack" orientation="horizontal" show-progress="true" steps-per-page="8" icon-library="lucide"></ui-stepper>
        </div>

        <div style="margin-top: 40px;">
            <p style="font-weight: 600; margin-bottom: 15px;">2. Premium Square-Active Style (Scrollable):</p>
            <div style="padding: 20px; background: #fafafa; border-radius: 8px; border:1px solid var(--border-default,#e2e8f0);">
                <ui-stepper id="stressNormal" active-step="0" scrollable="true" step-shape="square-active" icon-library="lucide"></ui-stepper>
            </div>
        </div>
      </div>
    `;

  window.handle25Step = action => {
    const s1 = document.getElementById('stressSnack');
    const s2 = document.getElementById('stressNormal');
    if (action === 'next') {
      s1.next();
      s2.next();
    } else {
      s1.prev();
      s2.prev();
    }
  };

  setTimeout(() => {
    const steps = [];
    for (let i = 0; i < 25; i++) {
      steps.push({
        id: `x${i + 1}`,
        label: i === 0 ? 'Account' : i === 1 ? 'Profile' : i === 2 ? 'Verify' : i === 24 ? 'Done' : `Step ${i + 1}`,
        description: `Info for step ${i + 1}`,
      });
    }
    document.getElementById('stressSnack').steps = steps;
    document.getElementById('stressNormal').steps = steps;
  }, 100);
};

window.showInteractiveStepper = function () {
  const container = document.getElementById('stepperDemoContainer');
  if (!container) return;

  container.innerHTML = `
    <div style="background-color:var(--bg-primary,white); border-radius: 8px; padding: 20px; box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);">
      <div style="display: flex; gap: 30px; flex-wrap: wrap;">
        <div style="flex: 1; min-width: 280px;">
          <h3 style="margin-top: 0;">🎮 Interactive Playground</h3>
          <div style="display: flex; flex-direction: column; gap: 15px; margin-top: 20px;">
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <ui-dropdown id="stepOrientation" label="Orientation" options='[{"label": "Horizontal", "value": "horizontal"}, {"label": "Vertical", "value": "vertical"}]' value="horizontal"></ui-dropdown>
                <ui-dropdown id="stepVariant" label="Variant" options='[{"label": "Default", "value": "default"}, {"label": "Navigation", "value": "navigation"}, {"label": "Panel", "value": "panel"}, {"label": "Inline", "value": "inline"}, {"label": "Outlined", "value": "outlined"}, {"label": "Filled", "value": "filled"}, {"label": "Minimal", "value": "minimal"}, {"label": "Snack", "value": "snack"}]' value="default"></ui-dropdown>
            </div>
            
            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <ui-dropdown id="stepColorScheme" label="Color Scheme" options='[{"label": "Primary", "value": "primary"}, {"label": "Success", "value": "success"}, {"label": "Warning", "value": "warning"}, {"label": "Danger", "value": "danger"}]' value="primary"></ui-dropdown>
                <ui-dropdown id="stepSize" label="Size" options='[{"label": "Small", "value": "sm"}, {"label": "Medium", "value": "md"}, {"label": "Large", "value": "lg"}]' value="md"></ui-dropdown>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <ui-dropdown id="stepFlow" label="Flow" options='[{"label": "Linear", "value": "linear"}, {"label": "Non-Linear", "value": "non-linear"}]' value="linear"></ui-dropdown>
                <ui-input type="number" id="stepPercent" label="Active %" value="75" min="0" max="100"></ui-input>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 10px;">
                <ui-dropdown id="stepLabelPosition" label="Label Position" options='[{"label": "Right", "value": "right"}, {"label": "Left", "value": "left"}, {"label": "Top", "value": "top"}, {"label": "Bottom", "value": "bottom"}]' value="right"></ui-dropdown>
                <ui-dropdown id="stepShapeChoice" label="Step Shape" options='[{"label": "Circle", "value": "circle"}, {"label": "Square (All)", "value": "square"}, {"label": "Square (Active Only)", "value": "square-active"}]' value="circle"></ui-dropdown>
            </div>

            <div style="display: grid; grid-template-columns: 1fr 1fr 1fr 1fr; gap: 15px;">
                <ui-checkbox id="stepProgressDot" label="Dot"></ui-checkbox>
                <ui-checkbox id="stepShowDescriptions" label="Desc" checked></ui-checkbox>
                <ui-checkbox id="stepAllowStepClick" label="Clickable" checked></ui-checkbox>
                <ui-checkbox id="stepShowProgress" label="Progress"></ui-checkbox>
            </div>

            <div style="margin-top: 10px; display: flex; gap: 10px;">
              <ui-button label="Previous" variant="outline" onclick="handleStep('interactiveStepper', 'prev')"></ui-button>
              <ui-button label="Next" color="primary" onclick="handleStep('interactiveStepper', 'next')"></ui-button>
            </div>
          </div>
        </div>
        <div style="flex: 2; min-width: 400px; background-color: #f9fafb; padding: 40px; border-radius: 12px; border:1px solid var(--border-default,#e5e7eb); display: flex; align-items: center; justify-content: center;">
          <ui-stepper id="interactiveStepper" style="width: 100%;" icon-library="lucide"></ui-stepper>
        </div>
      </div>
      </div>
      
      <div style="margin-top: 20px; background: #1e293b; padding: 16px; border-radius: 8px; position: relative;">
        <ui-button id="copyStepperBtn" label="Copy" variant="outline" size="xxxs" onclick="copyStepperCode()" style="position: absolute; top: 10px; right: 10px; background: rgba(255,255,255,0.1); --ui-button-text-color: white; border: none;"></ui-button>
        <code id="stepperCodeBlock" style="color: #e2e8f0; font-family: monospace; font-size: 13px; display: block; overflow-x: auto; padding-right: 50px; white-space: pre-wrap;">
          &lt;ui-stepper ... icon-library="lucide"&gt;&lt;/ui-stepper&gt;
        </code>
      </div>
    </div>
  `;

  setTimeout(() => {
    updateInteractiveStepper();
  }, 100);
};

window.updateInteractiveStepper = function () {
  // Add real-time listeners for first run
  if (!window.stepperWired) {
    window.stepperWired = true;
    const dropdowns = ['stepOrientation', 'stepVariant', 'stepColorScheme', 'stepSize', 'stepFlow', 'stepLabelPosition', 'stepShapeChoice', 'stepperOrientationSelect'];
    const inputs = ['stepPercent', 'scrollStepNum'];
    const checkboxes = ['stepProgressDot', 'stepShowDescriptions', 'stepAllowStepClick', 'stepShowProgress'];

    dropdowns.forEach(id => document.getElementById(id)?.addEventListener('dropdownChange', (e) => {
      if (id === 'stepperOrientationSelect') document.getElementById('contentStepper').setAttribute('orientation', e.detail.value);
      else updateInteractiveStepper();
    }));
    inputs.forEach(id => document.getElementById(id)?.addEventListener('inputChange', (e) => {
        if (id === 'scrollStepNum') document.getElementById('scrollStepper').setAttribute('active-step', e.detail.value);
        else updateInteractiveStepper();
    }));
    checkboxes.forEach(id => document.getElementById(id)?.addEventListener('checkboxChange', () => updateInteractiveStepper()));
  }

  const orientation = document.getElementById('stepOrientation').value;
  const variant = document.getElementById('stepVariant').value;
  const percent = parseInt(document.getElementById('stepPercent').value);
  const size = document.getElementById('stepSize').value;
  const flow = document.getElementById('stepFlow').value;
  const colorScheme = document.getElementById('stepColorScheme').value;
  const labelPosition = document.getElementById('stepLabelPosition').value;
  const stepShape = document.getElementById('stepShapeChoice').value;
  const progressDot = document.getElementById('stepProgressDot').checked;
  const showDescriptions = document.getElementById('stepShowDescriptions').checked;
  const allowStepClick = document.getElementById('stepAllowStepClick').checked;
  const showProgress = document.getElementById('stepShowProgress').checked;

  const stepper = document.getElementById('interactiveStepper');
  if (stepper) {
    stepper.setAttribute('orientation', orientation);
    stepper.setAttribute('variant', variant);
    stepper.setAttribute('size', size);
    stepper.setAttribute('flow', flow);
    stepper.setAttribute('color-scheme', colorScheme);
    stepper.setAttribute('label-position', labelPosition);
    stepper.setAttribute('step-shape', stepShape);
    stepper.setAttribute('progress-dot', progressDot);
    stepper.setAttribute('show-descriptions', showDescriptions);
    stepper.setAttribute('allow-step-click', allowStepClick);
    stepper.setAttribute('show-progress', showProgress);

    stepper.steps = [
      { id: '1', label: 'Account', description: 'Create account', status: 'completed', icon: 'user' },
      { id: '2', label: 'Profile', description: 'Add details', status: 'active', percent: percent, icon: 'info' },
      { id: '3', label: 'Verify', description: 'Confirm email', status: 'pending', icon: 'mail' },
      { id: '4', label: 'Done', description: 'All set', status: 'pending', icon: 'check' },
    ];

    if (window.updateStepperCode) {
      window.updateStepperCode();
    }
  }
};

window.copyStepperCode = () => {
  const code = document.getElementById('stepperCodeBlock').innerText;
  const btn = document.getElementById('copyStepperBtn');

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

window.updateStepperCode = () => {
  const el = document.getElementById('interactiveStepper');
  const codeBlock = document.getElementById('stepperCodeBlock');
  if (!el || !codeBlock) return;

  let props = '';
  if (el.getAttribute('orientation') && el.getAttribute('orientation') !== 'horizontal') props += ` orientation="${el.getAttribute('orientation')}"`;
  if (el.getAttribute('variant') && el.getAttribute('variant') !== 'default') props += ` variant="${el.getAttribute('variant')}"`;
  if (el.getAttribute('size') && el.getAttribute('size') !== 'md') props += ` size="${el.getAttribute('size')}"`;
  if (el.getAttribute('color-scheme') && el.getAttribute('color-scheme') !== 'primary') props += ` color-scheme="${el.getAttribute('color-scheme')}"`;
  if (el.getAttribute('flow') && el.getAttribute('flow') !== 'linear') props += ` flow="${el.getAttribute('flow')}"`;
  if (el.getAttribute('label-position') && el.getAttribute('label-position') !== 'right') props += ` label-position="${el.getAttribute('label-position')}"`;
  if (el.getAttribute('step-shape') && el.getAttribute('step-shape') !== 'circle') props += ` step-shape="${el.getAttribute('step-shape')}"`;
  if (el.getAttribute('progress-dot') === 'true') props += ` progress-dot="true"`;
  if (el.getAttribute('show-descriptions') === 'false') props += ` show-descriptions="false"`;
  if (el.getAttribute('allow-step-click') === 'false') props += ` allow-step-click="false"`;
  if (el.getAttribute('show-progress') === 'true') props += ` show-progress="true"`;

  // Steps logic
  const stepsStr = `\n  // Steps data\n  stepper.steps = [\n    { id: '1', label: 'Finished', status: 'completed' },\n    { id: '2', label: 'In Progress', status: 'active', percent: ${el.getAttribute('percent') || 75} },\n    { id: '3', label: 'Waiting', status: 'pending', children: [...] },\n    { id: '4', label: 'Waiting', status: 'pending' }\n  ];`;

  codeBlock.innerText = `<ui-stepper${props} icon-library="lucide"></ui-stepper>\n<script>\n  const stepper = document.querySelector('ui-stepper');${stepsStr}\n</script>`;
};
