export function initSmartStepperDemo() {
  const container = document.getElementById('smart-stepper');
  if (!container) return;

  container.innerHTML = `
    <div class="demo-block">
      <h3>Smart Stepper (Enhanced)</h3>
      <p>Supports icons, descriptions, and disabled states.</p>
      
      <ui-smart-stepper id="mySmartStepper" size="md">
        <smart-step label="Account" description="Login details" icon="1">
           <div style="padding: 20px;">
             <h4>Step 1: Account Setup</h4>
             <p>Enter your username and password.</p>
             <ui-button onclick="document.getElementById('mySmartStepper').next()" style="padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 4px; cursor: pointer;">Next Step</ui-button>
           </div>
        </smart-step>
        
        <smart-step label="Profile" description="Personal info" icon="👤">
           <div style="padding: 20px;">
             <h4>Step 2: Profile Information</h4>
             <p>Tell us more about yourself.</p>
             <div style="margin-top: 10px;">
                <ui-button onclick="document.getElementById('mySmartStepper').prev()" style="padding: 8px 16px; background: #9ca3af; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 8px;">Back</ui-button>
                <ui-button onclick="document.getElementById('mySmartStepper').next()" style="padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 4px; cursor: pointer;">Next Step</ui-button>
             </div>
           </div>
        </smart-step>
        
        <smart-step label="Review" description="Verify data" icon="✓">
           <div style="padding: 20px;">
             <h4>Step 3: Final Review</h4>
             <p>Please review all your information before submitting.</p>
             <div style="margin-top: 10px;">
                <ui-button onclick="document.getElementById('mySmartStepper').prev()" style="padding: 8px 16px; background: #9ca3af; color: white; border: none; border-radius: 4px; cursor: pointer; margin-right: 8px;">Back</ui-button>
                <ui-button onclick="document.getElementById('mySmartStepper').goTo(0)" style="padding: 8px 16px; background: #10b981; color: white; border: none; border-radius: 4px; cursor: pointer;">Finish & Reset</ui-button>
             </div>
           </div>
        </smart-step>

        <smart-step label="Disabled" description="Future step" icon="🔒" disabled="true">
           <div style="padding: 20px;">
             <h4>Disabled Step</h4>
             <p>You cannot access this step normally.</p>
           </div>
        </smart-step>
      </ui-smart-stepper>
    </div>
  `;
}
