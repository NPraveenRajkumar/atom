// Dialog Demo
export function initDialogDemo() {
  const section = document.getElementById('dialog');
  if (!section) return;

  section.innerHTML = `
    
    <p>Modal dialogs with customizable headers, content, and footers.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button label="Basic"  onclick="showBasicDialog()" variant="outline"></ui-button>
      <ui-button label="Sizes"  onclick="showDialogSizes()" variant="outline"></ui-button>
      <ui-button label="Types"  onclick="showDialogTypes()" variant="outline"></ui-button>
      <ui-button label="Form Dialog"  onclick="showFormDialog()" variant="outline"></ui-button>
      <ui-button label="🎮 Interactive Playground"  onclick="showInteractiveDialog()" variant="outline"></ui-button>
    </div>

    <div id="dialogDemoContainer" style="margin-top: 20px;"></div>
  `;

  setTimeout(() => {
    const dialogContainer = document.getElementById('dialogDemoContainer');
    if (!dialogContainer) return;

    // Dialog helper functions
    window.openDialog = id => {
      const dialog = document.getElementById(id);
      if (dialog) dialog.show();
    };

    window.closeDialog = id => {
      const dialog = document.getElementById(id);
      if (dialog) dialog.hide();
    };

    window.showBasicDialog = function () {
      dialogContainer.innerHTML = `
        <div class="demo-block">
          <h3>Basic Dialog</h3>
          <ui-button label="Open Basic Dialog" variant="outline" color="success" onclick="openDialog('basicDialog')"></ui-button>

          <ui-dialog-box id="basicDialog">
            <h3 slot="header">Welcome</h3>
            <div>
              <p>This is a basic dialog with header, content, and footer sections.</p>
              <p>You can customize each section as needed.</p>
            </div>
            <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
              <ui-button label="Close" variant="outline" color="secondary" onclick="closeDialog('basicDialog')"></ui-button>
              <ui-button label="Confirm" variant="outline" color="success" onclick="alert('Action confirmed!'); closeDialog('basicDialog');"></ui-button>
            </div>
          </ui-dialog-box>
          
          <div style="margin-top: 16px; padding: 12px; background-color: #f0f9ff; border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              💡 Dialogs can contain any content and are fully customizable.
            </p>
          </div>
          
          <div id="eventLog" style="margin-top: 16px; padding: 12px; background-color: #f3f4f6; border-radius: 6px; border: 1px solid #d1d5db;">
            <h4 style="margin: 0 0 8px; font-size: 14px; color: #374151;">Event Log:</h4>
            <div id="eventLogContent" style="font-family: monospace; font-size: 12px; color: #6b7280; max-height: 100px; overflow-y: auto;">
              <div style="color: #9ca3af;">Waiting for events...</div>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        const dialog = document.getElementById('basicDialog');
        if (dialog) {
          dialog.addEventListener('dialogClosed', () => {
            logEvent('dialogClosed: Dialog was closed');
          });
          dialog.addEventListener('dialogMaximized', e => {
            logEvent(`dialogMaximized: maximized=${e.detail.maximized}`);
          });
          dialog.addEventListener('dialogMinimized', e => {
            logEvent(`dialogMinimized: minimized=${e.detail.minimized}`);
          });
        }
      }, 100);
    };

    window.logEvent = function (message) {
      const logContent = document.getElementById('eventLogContent');
      if (logContent) {
        const timestamp = new Date().toLocaleTimeString();
        const entry = document.createElement('div');
        entry.style.color = '#059669';
        entry.textContent = `[${timestamp}] ${message}`;

        // Clear "waiting" message if present
        if (logContent.querySelector('[style*="color: #9ca3af"]')) {
          logContent.innerHTML = '';
        }

        logContent.insertBefore(entry, logContent.firstChild);

        // Limit to 5 entries
        while (logContent.children.length > 5) {
          logContent.removeChild(logContent.lastChild);
        }
      }
    };

    window.showDialogSizes = function () {
      dialogContainer.innerHTML = `
        <div class="demo-block">
          <h3>Dialog Sizes</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <ui-button label="Small Dialog" variant="outline" color="success" onclick="openDialog('smallDialog')"></ui-button>
            <ui-button label="md Dialog" variant="outline" color="success" onclick="openDialog('mdDialog')"></ui-button>
            <ui-button label="Large Dialog" variant="outline" color="warning" onclick="openDialog('largeDialog')"></ui-button>
            <ui-button label="Full Width Dialog" variant="outline" color="danger" onclick="openDialog('fullDialog')"></ui-button>
          </div>

          <ui-dialog-box id="smallDialog" size="md">
            <ui-dialog-header>
              <h3>Small Dialog</h3>
            </ui-dialog-header>
            <div>
              <p>This is a small dialog, perfect for quick confirmations.</p>
            </div>
            <div slot="footer">
              <ui-button label="Close" variant="outline" color="secondary" onclick="closeDialog('smallDialog')"></ui-button>
            </div>
          </ui-dialog-box>

          <ui-dialog-box id="mdDialog" size="md">
            <ui-dialog-header>
              <h3>md Dialog</h3>
            </ui-dialog-header>
            <div>
              <p>This is a md-sized dialog, the default size for most use cases.</p>
            </div>
            <div slot="footer">
              <ui-button label="Close" variant="outline" color="secondary" onclick="closeDialog('mdDialog')"></ui-button>
            </div>
          </ui-dialog-box>

          <ui-dialog-box id="largeDialog" size="lg">
            <ui-dialog-header>
              <h3>Large Dialog</h3>
            </ui-dialog-header>
            <div>
              <p>This is a large dialog, suitable for forms or detailed content.</p>
              <p>It provides more space for complex interactions.</p>
            </div>
            <div slot="footer">
              <ui-button label="Close" variant="outline" color="secondary" onclick="closeDialog('largeDialog')"></ui-button>
            </div>
          </ui-dialog-box>

          <ui-dialog-box id="fullDialog" size="full">
            <ui-dialog-header>
              <h3>Full Width Dialog</h3>
            </ui-dialog-header>
            <div>
              <p>This dialog takes the full width of the screen.</p>
            </div>
            <div slot="footer">
              <ui-button label="Close" variant="outline" color="secondary" onclick="closeDialog('fullDialog')"></ui-button>
            </div>
          </ui-dialog-box>
        </div>
      `;
    };

    window.showDialogTypes = function () {
      dialogContainer.innerHTML = `
        <div class="demo-block">
          <h3>Dialog Types</h3>
          <div style="display: flex; gap: 12px; flex-wrap: wrap;">
            <ui-button label="Info Dialog" variant="outline" color="success" onclick="openDialog('infoDialog')"></ui-button>
            <ui-button label="Success Dialog" variant="outline" color="success" onclick="openDialog('successDialog')"></ui-button>
            <ui-button label="Warning Dialog" variant="outline" color="warning" onclick="openDialog('warningDialog')"></ui-button>
            <ui-button label="Error Dialog" variant="outline" color="danger" onclick="openDialog('errorDialog')"></ui-button>
          </div>

          <ui-dialog-box id="infoDialog" type="info">
            <ui-dialog-header>
              <h3>ℹ️ Information</h3>
            </ui-dialog-header>
            <div>
              <p>This is an informational message.</p>
            </div>
            <div slot="footer">
              <ui-button label="Got it" variant="outline" color="success" onclick="closeDialog('infoDialog')"></ui-button>
            </div>
          </ui-dialog-box>

          <ui-dialog-box id="successDialog" type="success">
            <ui-dialog-header>
              <h3>✓ Success</h3>
            </ui-dialog-header>
            <div>
              <p>Operation completed successfully!</p>
            </div>
            <div slot="footer">
              <ui-button label="OK" variant="outline" color="success" onclick="closeDialog('successDialog')"></ui-button>
            </div>
          </ui-dialog-box>

          <ui-dialog-box id="warningDialog" type="warning">
            <ui-dialog-header>
              <h3>⚠️ Warning</h3>
            </ui-dialog-header>
            <div>
              <p>Please review before continuing.</p>
            </div>
            <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
              <ui-button label="Cancel" variant="outline" color="secondary" onclick="closeDialog('warningDialog')"></ui-button>
              <ui-button label="Continue" variant="outline" color="warning" onclick="closeDialog('warningDialog')"></ui-button>
            </div>
          </ui-dialog-box>

          <ui-dialog-box id="errorDialog" type="error">
            <ui-dialog-header>
              <h3>✕ Error</h3>
            </ui-dialog-header>
            <div>
              <p>An error occurred. Please try again.</p>
            </div>
            <div slot="footer">
              <ui-button label="Close" variant="outline" color="danger" onclick="closeDialog('errorDialog')"></ui-button>
            </div>
          </ui-dialog-box>
        </div>
      `;
    };

    window.showFormDialog = function () {
      dialogContainer.innerHTML = `
        <div class="demo-block">
          <h3>Form Dialog</h3>
          <ui-button label="Open Form Dialog" variant="outline" color="success" onclick="openDialog('formDialog')"></ui-button>

          <ui-dialog-box id="formDialog" size="md">
            <ui-dialog-header>
              <h3>User Information</h3>
            </ui-dialog-header>
            <div>
              <form id="userForm" style="display: flex; flex-direction: column; gap: 16px;">
                <ui-input name="name" label="Name" placeholder="Enter your name" required></ui-input>
                <ui-input name="email" type="email" label="Email" placeholder="Enter your email" required></ui-input>
                <ui-input name="message" label="Message" placeholder="Enter your message" multiline="true" rows="4"></ui-input>
              </form>
            </div>
            <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
              <ui-button label="Cancel" variant="outline" color="secondary" onclick="closeDialog('formDialog')"></ui-button>
              <ui-button label="Submit" variant="outline" color="success" onclick="handleFormSubmit(); closeDialog('formDialog');"></ui-button>
            </div>
          </ui-dialog-box>
        </div>
      `;
    };

    window.handleFormSubmit = function () {
      const form = document.getElementById('userForm');
      if (form) {
        const formData = new FormData(form);
        const data = Object.fromEntries(formData);
        alert(`Form submitted:\n${JSON.stringify(data, null, 2)}`);
      }
    };

    window.showInteractiveDialog = function () {
      dialogContainer.innerHTML = `
        <div class="demo-block">
          <h3>🎮 Interactive Playground</h3>
          <p style="color: #6b7280; margin-bottom: 16px;">Customize the dialog properties and see changes in real-time!</p>
          
          <div style="background-color:var(--bg-primary,white); padding: 20px; border-radius: 8px; margin-bottom: 20px; border:1px solid var(--border-default,#e5e7eb);">
            <h4 style="margin: 0 0 16px;">Settings</h4>
            <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(200px, 1fr)); gap: 16px;">
              <ui-dropdown id="dialogSize" label="Size" value="md" onValueChange="window.updatePlayground()">
                <option value="sm">Small</option>
                <option value="md">md</option>
                <option value="lg">Large</option>
                <option value="full">Full Width</option>
              </ui-dropdown>
              
              <ui-dropdown id="dialogType" label="Type" onValueChange="window.updatePlayground()">
                <option value="">Default</option>
                <option value="info">Info</option>
                <option value="success">Success</option>
                <option value="warning">Warning</option>
                <option value="error">Error</option>
              </ui-dropdown>
              
              <ui-input id="dialogHeaderText" label="Header Text" value="Interactive Dialog" onInputChange="window.updatePlayground()"></ui-input>
              <ui-input id="dialogContentText" label="Content Text" value="Customize this dialog using the controls above." onInputChange="window.updatePlayground()"></ui-input>
              
              <ui-checkbox id="dialogModal" label="Modal (blocks background)" checked onCheckboxChange="window.updatePlayground()"></ui-checkbox>
              <ui-checkbox id="dialogClosable" label="Closable" checked onCheckboxChange="window.updatePlayground()"></ui-checkbox>
              <ui-checkbox id="dialogShowHeader" label="Show Header" checked onCheckboxChange="window.updatePlayground()"></ui-checkbox>
              <ui-checkbox id="dialogShowFooter" label="Show Footer" checked onCheckboxChange="window.updatePlayground()"></ui-checkbox>
            </div>
            
            <div style="margin-top: 16px;">
              <ui-button label="Open Dialog" variant="outline" color="success" onclick="openDialog('interactiveDialog')"></ui-button>
            </div>
          </div>
          
          <div id="interactiveDialogContainer"></div>
          
          <div id="interactiveEventLog" style="margin-top: 16px; padding: 12px; background-color: #f3f4f6; border-radius: 6px; border: 1px solid #d1d5db;">
            <h4 style="margin: 0 0 8px; font-size: 14px; color: #374151;">Event Log:</h4>
            <div id="interactiveEventLogContent" style="font-family: monospace; font-size: 12px; color: #6b7280; max-height: 100px; overflow-y: auto;">
              <div style="color: #9ca3af;">Waiting for events...</div>
            </div>
          </div>
        </div>
      `;

      setTimeout(() => {
        updateInteractiveDialog();
      }, 50);
    };

    window.updatePlayground = function() {
        window.updateInteractiveDialog();
    };

    window.logInteractiveEvent = function (message) {
      const logContent = document.getElementById('interactiveEventLogContent');
      if (logContent) {
        const timestamp = new Date().toLocaleTimeString();
        const entry = document.createElement('div');
        entry.style.color = '#059669';
        entry.textContent = `[${timestamp}] ${message}`;

        // Clear "waiting" message if present
        if (logContent.querySelector('[style*="color: #9ca3af"]')) {
          logContent.innerHTML = '';
        }

        logContent.insertBefore(entry, logContent.firstChild);

        // Limit to 5 entries
        while (logContent.children.length > 5) {
          logContent.removeChild(logContent.lastChild);
        }
      }
    };

    window.updateInteractiveDialog = function () {
      const size = document.getElementById('dialogSize')?.value || 'md';
      const type = document.getElementById('dialogType')?.value || '';
      const headerText = document.getElementById('dialogHeaderText')?.value || 'Dialog';
      const contentText = document.getElementById('dialogContentText')?.value || 'Content';
      const modal = document.getElementById('dialogModal')?.checked !== false;
      const closable = document.getElementById('dialogClosable')?.checked !== false;
      const showHeader = document.getElementById('dialogShowHeader')?.checked !== false;
      const showFooter = document.getElementById('dialogShowFooter')?.checked !== false;

      const container = document.getElementById('interactiveDialogContainer');
      if (container) {
        container.innerHTML = `
          <ui-dialog-box id="interactiveDialog" 
            size="${size}" 
            ${type ? `type="${type}"` : ''}
            ${modal ? 'modal="true"' : ''}
            ${closable ? 'closable="true"' : 'closable="false"'}>
            ${
              showHeader
                ? `
              <ui-dialog-header>
                <h3>${headerText}</h3>
              </ui-dialog-header>
            `
                : ''
            }
            <div>
              <p>${contentText}</p>
              <p style="color: #6b7280; font-size: 14px; margin-top: 12px;">Size: <strong>${size}</strong> | Type: <strong>${type || 'default'}</strong></p>
            </div>
            ${
              showFooter
                ? `
              <div slot="footer" style="display: flex; gap: 8px; justify-content: flex-end;">
                <ui-button label="Close" variant="outline" color="secondary" onclick="closeDialog('interactiveDialog')"></ui-button>
                <ui-button label="Confirm" variant="outline" color="success" onclick="alert('Action confirmed!')"></ui-button>
              </div>
            `
                : ''
            }
          </ui-dialog-box>
        `;

        setTimeout(() => {
          const dialog = document.getElementById('interactiveDialog');
          if (dialog) {
            dialog.addEventListener('dialogClosed', () => {
              logInteractiveEvent('dialogClosed: Dialog was closed');
            });
            dialog.addEventListener('dialogMaximized', e => {
              logInteractiveEvent(`dialogMaximized: maximized=${e.detail.maximized}`);
            });
            dialog.addEventListener('dialogMinimized', e => {
              logInteractiveEvent(`dialogMinimized: minimized=${e.detail.minimized}`);
            });
          }
        }, 100);
      }
    };

    showBasicDialog();
  }, 100);
}
