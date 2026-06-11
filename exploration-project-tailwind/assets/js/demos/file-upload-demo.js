export function initFileUploadDemo() {
  const section = document.getElementById('file-upload');
  if (!section) return;

  section.innerHTML = `
    <p style="margin-top: 0; opacity: 0.7; font-size: 14px; margin-bottom: 24px;">Enterprise-grade file uploader with multiple trigger variants, validation, preview, and upload orchestration.</p>

    <div class="demo-controls" style="margin: 20px 0; display: flex; gap: 10px; flex-wrap: wrap;">
      <ui-button data-demo="dropzone"      variant="outline" status-color="primary">Dropzone</ui-button>
      <ui-button data-demo="variants"      variant="outline">Variants</ui-button>
      <ui-button data-demo="upload-mode"   variant="outline">Auto vs Manual</ui-button>
      <ui-button data-demo="sideload"      variant="outline">Sideload</ui-button>
      <ui-button data-demo="validation"    variant="outline">Validation</ui-button>
      <ui-button data-demo="orchestration" variant="outline">Orchestration</ui-button>
      <ui-button data-demo="events"        variant="outline">Events</ui-button>
      <ui-button data-demo="folder"         variant="outline">Folder Upload</ui-button>
      <ui-button data-demo="file-types"      variant="outline">File Types</ui-button>
    </div>

    <div id="fileUploadContainer" style="margin-top: 20px;"></div>
  `;

  const container = section.querySelector('#fileUploadContainer');

  /* ── Dropzone ─────────────────────────────────────────────────────── */
  const showDropzone = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Standard Dropzone</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">The default <code>variant="dropzone"</code> renders a full drag-and-drop target area.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(340px,1fr));gap:32px;">
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Single File</h4>
            <ui-file-upload label="Upload Document" accept=".pdf,.doc,.docx" helper-text="PDF or Word, max 10 MB"></ui-file-upload>
          </div>
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Multiple Files</h4>
            <ui-file-upload label="Gallery Assets" accept="image/*" multiple="true" max-files="4" upload-icon="image" helper-text="Up to 4 images"></ui-file-upload>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <h3>Custom Upload Icon</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Pass any Lucide icon name to <code>upload-icon</code> to replace the default cloud icon.</p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:24px;">
          <ui-file-upload label="Import Spreadsheet" accept=".csv,.xlsx" upload-icon="file-spreadsheet" helper-text="CSV or Excel files"></ui-file-upload>
          <ui-file-upload label="Upload Audio"        accept="audio/*"      upload-icon="music"           helper-text="MP3, WAV, FLAC"></ui-file-upload>
          <ui-file-upload label="Source Code"         accept=".js,.ts,.py"  upload-icon="file-code"       helper-text="Script files only"></ui-file-upload>
        </div>
      </div>
    `;
  };

  /* ── Variants ─────────────────────────────────────────────────────── */
  const showVariants = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Trigger Variants</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">Five trigger styles: <code>dropzone</code>, <code>button</code>, <code>compact</code>, <code>inline</code>, and <code>sideload</code>.</p>
        <div style="display:flex;flex-direction:column;gap:32px;">

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Button Variant</h4>
            <p style="margin:0 0 16px;font-size:13px;color:var(--text-secondary,#64748b);">A standard filled action button — ideal in forms and toolbars.</p>
            <ui-file-upload variant="button" label="Attach File" upload-icon="paperclip" multiple="true"></ui-file-upload>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">
              Inline Variant
              <span style="background:rgba(16,185,129,0.1);color:#047857;padding:2px 8px;border-radius:20px;font-size:11px;font-weight:700;border:1px solid rgba(16,185,129,0.25);margin-left:6px;">New</span>
            </h4>
            <p style="margin:0 0 16px;font-size:13px;color:var(--text-secondary,#64748b);">A minimal icon + text button — perfect for comment boxes, email composers, or any dense layout where a full button is too heavy.</p>
            <div style="display:flex;flex-wrap:wrap;align-items:center;gap:16px;padding:20px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e5e7eb);">
              <ui-file-upload variant="inline" label="Attach files"  multiple="true"         max-files="5"></ui-file-upload>
              <ui-file-upload variant="inline" label="Upload image"  accept="image/*"        upload-icon="image"></ui-file-upload>
              <ui-file-upload variant="inline" label="Add document"  accept=".pdf,.docx"     upload-icon="file-text"></ui-file-upload>
              <ui-file-upload variant="inline" label="Import CSV"    accept=".csv,.xlsx"     upload-icon="file-spreadsheet" auto-upload="false"></ui-file-upload>
            </div>
            <p style="margin:12px 0 0;font-size:12px;color:var(--text-muted,#9ca3af);">The green badge shows queued count — click it to open the queue dialog.</p>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Inline — comment box context</h4>
            <div style="padding:20px;background:var(--bg-primary,#fff);border-radius:12px;border:1px solid var(--border-default,#e5e7eb);max-width:540px;">
              <textarea style="width:100%;box-sizing:border-box;min-height:80px;padding:10px 12px;border-radius:8px;border:1px solid var(--border-default,#e5e7eb);font-family:inherit;font-size:14px;resize:vertical;background:var(--bg-primary,#fff);color:var(--text-primary,#111827);" placeholder="Write a comment..."></textarea>
              <div style="display:flex;align-items:center;justify-content:space-between;margin-top:10px;">
                <ui-file-upload variant="inline" label="Attach" upload-icon="paperclip" multiple="true" max-files="3" auto-upload="false"></ui-file-upload>
                <ui-button variant="primary" size="sm" label="Send"></ui-button>
              </div>
            </div>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Compact Variant</h4>
            <p style="margin:0 0 16px;font-size:13px;color:var(--text-secondary,#64748b);">Low-footprint trigger for dense table rows or settings panels.</p>
            <ui-file-upload variant="compact" label="Quick add" multiple="true"></ui-file-upload>
          </div>

        </div>
      </div>
    `;
  };

  /* ── Auto vs Manual ───────────────────────────────────────────────── */
  const showUploadMode = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Auto Upload <code>auto-upload="true"</code> (default)</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:16px;">
          Files begin uploading <strong>immediately</strong> after selection — no extra click required.
          The queue dialog opens automatically and shows live progress.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px;">
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Dropzone — Auto</h4>
            <ui-file-upload
              label="Auto-upload Dropzone"
              multiple="true"
              max-files="5"
              helper-text="Files upload automatically on select"
            ></ui-file-upload>
          </div>
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Button — Auto</h4>
            <ui-file-upload
              variant="button"
              label="Attach &amp; Upload"
              multiple="true"
              helper-text="Click, pick files, watch them upload"
            ></ui-file-upload>
          </div>
        </div>
      </div>

      <div class="demo-block" style="margin-top:32px;">
        <h3>Manual Upload <code>auto-upload="false"</code></h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:16px;">
          Files queue as <strong>Ready</strong> after selection. An <strong>Upload N files</strong> button
          appears in the queue dialog footer — upload only starts when the user clicks it.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px;">
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Dropzone — Manual</h4>
            <ui-file-upload
              label="Review then Upload"
              multiple="true"
              max-files="5"
              auto-upload="false"
              helper-text="Select, review in dialog, then click Upload"
            ></ui-file-upload>
          </div>
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Button — Manual + Validate</h4>
            <ui-file-upload
              variant="button"
              label="Select Files"
              multiple="true"
              accept=".pdf,.docx,.xlsx,.csv"
              auto-upload="false"
              show-validate-button="true"
              helper-text="Validate first, then upload manually"
            ></ui-file-upload>
          </div>
        </div>

        <div style="margin-top:32px;padding:16px 20px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e5e7eb);">
          <h4 style="margin:0 0 12px;font-size:13px;font-weight:700;color:var(--text-primary,#111827);">Prop reference</h4>
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <thead>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);">
                <th style="text-align:left;padding:6px 12px;color:var(--text-secondary,#6b7280);font-weight:600;">Prop</th>
                <th style="text-align:left;padding:6px 12px;color:var(--text-secondary,#6b7280);font-weight:600;">Default</th>
                <th style="text-align:left;padding:6px 12px;color:var(--text-secondary,#6b7280);font-weight:600;">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);">
                <td style="padding:8px 12px;"><code>auto-upload</code></td>
                <td style="padding:8px 12px;"><code>true</code></td>
                <td style="padding:8px 12px;color:var(--text-secondary,#6b7280);">When <code>true</code>, upload begins immediately. When <code>false</code>, files queue as Ready until the user clicks Upload.</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);">
                <td style="padding:8px 12px;"><code>show-upload-button</code></td>
                <td style="padding:8px 12px;"><code>false</code></td>
                <td style="padding:8px 12px;color:var(--text-secondary,#6b7280);">Force-show the Upload button even when <code>auto-upload="true"</code> — useful for re-upload failed flows.</td>
              </tr>
              <tr>
                <td style="padding:8px 12px;"><code>show-validate-button</code></td>
                <td style="padding:8px 12px;"><code>false</code></td>
                <td style="padding:8px 12px;color:var(--text-secondary,#6b7280);">Adds a Validate button so users can verify files before committing to upload.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  };

  /* ── Sideload ─────────────────────────────────────────────────────── */
  const showSideload = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Sideload Variant</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">
          <code>variant="sideload"</code> renders as an inline panel — no modal dialog — designed for
          firmware and binary file uploads with duplicate detection and in-place error actions.
        </p>
        <div style="display:flex;flex-direction:column;gap:32px;">
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Firmware Sideload</h4>
            <div style="background:var(--bg-secondary,#f3f4f6);padding:40px;border-radius:24px;border:1px solid var(--border-default,#e5e7eb);">
              <ui-file-upload variant="sideload" header-title="Sideload Firmware" accept=".ldx,.dat,.sedp" multiple="true" auto-upload="false"></ui-file-upload>
            </div>
          </div>
          <div>
            <h4 style="margin:0 0 12px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Document Sideload — Manual Validate + Upload</h4>
            <div style="background:var(--bg-secondary,#f3f4f6);padding:40px;border-radius:24px;border:1px solid var(--border-default,#e5e7eb);">
              <ui-file-upload variant="sideload" header-title="Upload Reports" accept=".pdf,.docx,.xlsx" multiple="true" auto-upload="false" show-validate-button="true"></ui-file-upload>
            </div>
          </div>
        </div>
      </div>
    `;
  };

  /* ── Validation ───────────────────────────────────────────────────── */
  const showValidation = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>File Validation</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">
          Built-in constraints via <code>accept</code>, <code>max-size</code>, <code>min-size</code>, and <code>max-files</code>.
          Rejected files show an error badge and the queue shows a dismissible error list.
        </p>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(300px,1fr));gap:24px;">
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Max 2 Files</h4>
            <ui-file-upload label="Cover Images" accept="image/jpeg,image/png" multiple="true" max-files="2" helper-text="JPEG or PNG, up to 2 files"></ui-file-upload>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Max Size 2 MB</h4>
            <ui-file-upload label="Small Attachments" max-size="2097152" helper-text="Files must be under 2 MB"></ui-file-upload>
          </div>
          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">Disabled</h4>
            <ui-file-upload label="Locked Zone" disabled="true" helper-text="Upload disabled by admin"></ui-file-upload>
          </div>
        </div>
      </div>
      <div class="demo-block">
        <h3>Validate then Upload</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">
          Enable <code>show-validate-button</code> + <code>auto-upload="false"</code> for a multi-step
          workflow — validate first, then commit. Removing a rejected file immediately clears its error.
        </p>
        <ui-file-upload
          label="Security Documents"
          accept=".pdf,.doc,.docx"
          multiple="true"
          auto-upload="false"
          show-validate-button="true"
          show-upload-button="true"
          helper-text="Validate first, then upload"
        ></ui-file-upload>
      </div>
    `;
  };

  /* ── Orchestration ────────────────────────────────────────────────── */
  const showOrchestration = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Programmatic Control</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">
          Call <code>.upload()</code>, <code>.validate()</code>, and <code>.clear()</code> from JavaScript
          to drive the uploader from outside — useful for form submissions and wizard flows.
        </p>
        <div style="display:grid;grid-template-columns:1fr auto;gap:24px;align-items:start;">
          <ui-file-upload
            id="fu-orch"
            label="Controlled Uploader"
            multiple="true"
            max-files="4"
            accept=".pdf,.docx,.csv"
            auto-upload="false"
            helper-text="Use the buttons on the right to drive this uploader"
          ></ui-file-upload>
          <div style="display:flex;flex-direction:column;gap:10px;padding-top:32px;">
            <ui-button id="fu-orch-validate" variant="outline" icon="shield-check" icon-library="lucide" label="Validate"></ui-button>
            <ui-button id="fu-orch-upload"   variant="primary" icon="upload-cloud" icon-library="lucide" label="Upload"></ui-button>
            <ui-button id="fu-orch-clear"    variant="ghost"   icon="trash-2"      icon-library="lucide" label="Clear"></ui-button>
          </div>
        </div>
        <div id="fu-orch-feedback" style="margin-top:12px;font-size:12px;color:var(--color-primary,#10b981);font-weight:600;min-height:18px;"></div>
      </div>
    `;

    const uploader  = container.querySelector('#fu-orch');
    const feedback  = container.querySelector('#fu-orch-feedback');
    const flash = msg => { feedback.textContent = msg; setTimeout(() => { feedback.textContent = ''; }, 2500); };

    container.querySelector('#fu-orch-validate')?.addEventListener('click', () => { uploader?.validate(); flash('Validation run.'); });
    container.querySelector('#fu-orch-upload')  ?.addEventListener('click', () => { uploader?.upload();   flash('Upload triggered.'); });
    container.querySelector('#fu-orch-clear')   ?.addEventListener('click', () => { uploader?.clear();    flash('Queue cleared.'); });
  };

  /* ── Events ───────────────────────────────────────────────────────── */
  const showEvents = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Event Stream</h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">
          Listen to lifecycle events: <code>fileSelect</code>, <code>uploadSuccess</code>,
          <code>fileRemove</code>, and <code>allUploadsComplete</code>.
        </p>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:32px;align-items:start;">
          <ui-file-upload id="fu-events" label="Trigger Events" multiple="true" auto-upload="true"></ui-file-upload>
          <div>
            <div style="display:flex;align-items:center;justify-content:space-between;margin-bottom:12px;">
              <h4 style="margin:0;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:0.05em;">System Log</h4>
              <ui-button id="fu-clear-log" size="xs" variant="ghost" label="Clear" icon="trash-2" icon-library="lucide"></ui-button>
            </div>
            <div id="fu-log" style="padding:16px;background:var(--bg-secondary,#f8fafc);border-radius:12px;font-family:monospace;font-size:12px;height:240px;overflow-y:auto;border:1px solid var(--border-default,#e2e8f0);">
              <div style="color:var(--text-secondary,#64748b);font-style:italic;">Awaiting events...</div>
            </div>
          </div>
        </div>
      </div>
    `;

    const evtUploader = container.querySelector('#fu-events');
    const log = container.querySelector('#fu-log');
    const clearBtn = container.querySelector('#fu-clear-log');

    const addLog = (msg, type = 'info') => {
      const colors = { info: '#94a3b8', success: '#10b981', error: '#f43f5e', complete: '#8b5cf6' };
      const entry = document.createElement('div');
      entry.style.cssText = 'padding:4px 0;border-bottom:1px solid var(--border-subtle,rgba(0,0,0,0.04));';
      entry.innerHTML = `<span style="color:${colors[type]};font-weight:700;">[${type.toUpperCase()}]</span> ${msg}`;
      const emptyMsg = log.querySelector('div[style*="italic"]');
      if (emptyMsg) emptyMsg.remove();
      log.prepend(entry);
    };

    if (evtUploader && log) {
      evtUploader.addEventListener('fileSelect',        e => addLog(`Selected ${e.detail?.length ?? 1} file(s)`, 'info'));
      evtUploader.addEventListener('uploadSuccess',     e => addLog(`Uploaded: ${e.detail?.name ?? 'file'}`, 'success'));
      evtUploader.addEventListener('fileRemove',        e => addLog(`Removed: ${e.detail ?? 'file'}`, 'error'));
      evtUploader.addEventListener('allUploadsComplete',  () => addLog('All uploads complete!', 'complete'));
    }

    clearBtn?.addEventListener('click', () => {
      if (log) log.innerHTML = '<div style="color:var(--text-secondary,#64748b);font-style:italic;">Awaiting events...</div>';
    });
  };

  /* ── Folder Upload ──────────────────────────────────────────────────── */
  const showFolderUpload = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Folder Upload <span style="background:rgba(16,185,129,0.1);color:#047857;padding:2px 10px;border-radius:20px;font-size:12px;font-weight:700;border:1px solid rgba(16,185,129,0.25);margin-left:8px;">directory</span></h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">
          Set <code>directory="true"</code> to open a <strong>folder picker</strong> instead of a file picker.
          The browser recursively collects every file inside — all your existing
          <code>accept</code>, <code>max-size</code>, and <code>max-files</code> rules still apply.
        </p>

        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(320px,1fr));gap:28px;">

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Any Files in Folder</h4>
            <p style="margin:0 0 14px;font-size:13px;color:var(--text-secondary,#64748b);">No type filter — uploads everything inside the chosen folder.</p>
            <ui-file-upload
              directory="true"
              label="Upload Folder"
              helper-text="Click or drop a folder here"
              max-files="50"
              auto-upload="false"
            ></ui-file-upload>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Images Only</h4>
            <p style="margin:0 0 14px;font-size:13px;color:var(--text-secondary,#64748b);">Combines <code>directory</code> + <code>accept="image/*"</code> — non-image files in the folder are rejected.</p>
            <ui-file-upload
              directory="true"
              accept="image/*"
              upload-icon="image"
              label="Upload Image Folder"
              helper-text="Only images will be accepted"
              max-files="100"
              auto-upload="false"
            ></ui-file-upload>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Button Variant</h4>
            <p style="margin:0 0 14px;font-size:13px;color:var(--text-secondary,#64748b);">Any trigger variant works — <code>directory</code> is independent of <code>variant</code>.</p>
            <ui-file-upload
              variant="button"
              directory="true"
              upload-icon="folder-open"
              label="Select Project Folder"
              max-files="200"
              auto-upload="false"
              show-validate-button="true"
              helper-text="Review files before uploading"
            ></ui-file-upload>
          </div>

          <div>
            <h4 style="margin:0 0 8px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Inline Variant</h4>
            <p style="margin:0 0 14px;font-size:13px;color:var(--text-secondary,#64748b);">Compact trigger for toolbars — badge shows how many files were found in the folder.</p>
            <ui-file-upload
              variant="inline"
              directory="true"
              upload-icon="folder"
              label="Attach folder"
              max-files="100"
              auto-upload="false"
            ></ui-file-upload>
          </div>

        </div>

        <!-- Prop reference -->
        <div style="margin-top:32px;padding:16px 20px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e5e7eb);">
          <h4 style="margin:0 0 12px;font-size:13px;font-weight:700;color:var(--text-primary,#111827);">How it works</h4>
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <thead>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);">
                <th style="text-align:left;padding:6px 12px;color:var(--text-secondary,#6b7280);font-weight:600;">Prop</th>
                <th style="text-align:left;padding:6px 12px;color:var(--text-secondary,#6b7280);font-weight:600;">Default</th>
                <th style="text-align:left;padding:6px 12px;color:var(--text-secondary,#6b7280);font-weight:600;">Description</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);">
                <td style="padding:8px 12px;"><code>directory</code></td>
                <td style="padding:8px 12px;"><code>false</code></td>
                <td style="padding:8px 12px;color:var(--text-secondary,#6b7280);">Opens a folder picker. Sets <code>webkitdirectory</code> on the hidden input. Implicitly enables <code>multiple</code>.</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);">
                <td style="padding:8px 12px;"><code>accept</code></td>
                <td style="padding:8px 12px;"><em>all</em></td>
                <td style="padding:8px 12px;color:var(--text-secondary,#6b7280);">Works as normal — files inside the folder that don't match are rejected with an error.</td>
              </tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);">
                <td style="padding:8px 12px;"><code>max-files</code></td>
                <td style="padding:8px 12px;"><code>5</code></td>
                <td style="padding:8px 12px;color:var(--text-secondary,#6b7280);">Consider raising this when targeting whole folders — a typical project folder has many more than 5 files.</td>
              </tr>
              <tr>
                <td style="padding:8px 12px;">Browser support</td>
                <td style="padding:8px 12px;">All modern</td>
                <td style="padding:8px 12px;color:var(--text-secondary,#6b7280);">Chrome, Edge, Firefox 50+, Safari 11.1+. Falls back to normal file picker in unsupported browsers.</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    `;
  };

  /* ── File Types ─────────────────────────────────────────────────────── */
  const showFileTypes = () => {
    container.innerHTML = `
      <div class="demo-block">
        <h3>Custom File Types via <code>accept</code></h3>
        <p style="font-size:13px;color:var(--text-secondary,#64748b);margin-bottom:24px;">
          The <code>accept</code> prop is passed directly to the native file picker — the OS dialog
          will only show matching files. Three syntax forms are supported and can be mixed.
        </p>

        <!-- Syntax reference -->
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(220px,1fr));gap:12px;margin-bottom:32px;">
          <div style="padding:14px 16px;background:rgba(59,130,246,0.06);border:1px solid rgba(59,130,246,0.18);border-radius:10px;">
            <div style="font-size:11px;font-weight:800;color:#2563eb;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Extension</div>
            <code style="font-size:13px;color:var(--text-primary,#111827);">.pdf, .docx, .xlsx</code>
            <p style="margin:6px 0 0;font-size:12px;color:var(--text-secondary,#64748b);">Exact file extension — most reliable across all OS.</p>
          </div>
          <div style="padding:14px 16px;background:rgba(16,185,129,0.06);border:1px solid rgba(16,185,129,0.18);border-radius:10px;">
            <div style="font-size:11px;font-weight:800;color:#047857;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">MIME Wildcard</div>
            <code style="font-size:13px;color:var(--text-primary,#111827);">image/*, video/*, audio/*</code>
            <p style="margin:6px 0 0;font-size:12px;color:var(--text-secondary,#64748b);">All subtypes of a MIME category.</p>
          </div>
          <div style="padding:14px 16px;background:rgba(139,92,246,0.06);border:1px solid rgba(139,92,246,0.18);border-radius:10px;">
            <div style="font-size:11px;font-weight:800;color:#6d28d9;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Exact MIME</div>
            <code style="font-size:13px;color:var(--text-primary,#111827);">image/png, application/pdf</code>
            <p style="margin:6px 0 0;font-size:12px;color:var(--text-secondary,#64748b);">Specific MIME type only.</p>
          </div>
          <div style="padding:14px 16px;background:rgba(245,158,11,0.06);border:1px solid rgba(245,158,11,0.18);border-radius:10px;">
            <div style="font-size:11px;font-weight:800;color:#b45309;text-transform:uppercase;letter-spacing:.06em;margin-bottom:6px;">Mixed</div>
            <code style="font-size:13px;color:var(--text-primary,#111827);">image/*,.pdf,.docx</code>
            <p style="margin:6px 0 0;font-size:12px;color:var(--text-secondary,#64748b);">Comma-separate any combination of the above.</p>
          </div>
        </div>

        <!-- Live examples -->
        <h4 style="margin:0 0 16px;font-size:12px;font-weight:700;color:var(--text-secondary,#64748b);text-transform:uppercase;letter-spacing:.05em;">Live Examples — each opens its own filtered picker</h4>
        <div style="display:grid;grid-template-columns:repeat(auto-fit,minmax(280px,1fr));gap:20px;">

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">Images only</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">image/*</code>
            </div>
            <ui-file-upload accept="image/*" upload-icon="image" multiple="true" label="Upload Images" helper-text="JPG, PNG, GIF, WEBP, SVG…"></ui-file-upload>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">PDF only</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">application/pdf</code>
            </div>
            <ui-file-upload accept="application/pdf" upload-icon="file-text" label="Upload PDF" helper-text="Strict PDF — other documents rejected"></ui-file-upload>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">Office documents</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">.pdf,.doc,.docx,.pptx,.xlsx</code>
            </div>
            <ui-file-upload accept=".pdf,.doc,.docx,.pptx,.xlsx" upload-icon="file" multiple="true" max-files="10" label="Upload Documents" helper-text="PDF, Word, PowerPoint, Excel"></ui-file-upload>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">Video</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">video/*</code>
            </div>
            <ui-file-upload accept="video/*" upload-icon="video" max-size="524288000" label="Upload Video" helper-text="MP4, MOV, AVI, WEBM… max 500 MB"></ui-file-upload>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">Audio</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">audio/*</code>
            </div>
            <ui-file-upload accept="audio/*" upload-icon="music" multiple="true" label="Upload Audio" helper-text="MP3, WAV, FLAC, AAC…"></ui-file-upload>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">Spreadsheets</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">.csv,.xls,.xlsx,.ods</code>
            </div>
            <ui-file-upload accept=".csv,.xls,.xlsx,.ods" upload-icon="file-spreadsheet" multiple="true" label="Upload Spreadsheet" helper-text="CSV, Excel, OpenDocument"></ui-file-upload>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">Archives</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">.zip,.tar,.gz,.7z,.rar</code>
            </div>
            <ui-file-upload accept=".zip,.tar,.gz,.7z,.rar" upload-icon="archive" max-size="104857600" label="Upload Archive" helper-text="ZIP, TAR, GZ, 7Z, RAR — max 100 MB"></ui-file-upload>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">Mixed: images or PDF</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">image/*,.pdf</code>
            </div>
            <ui-file-upload accept="image/*,.pdf" upload-icon="file-image" multiple="true" max-files="8" label="Upload Media or PDF" helper-text="Any image format or PDF"></ui-file-upload>
          </div>

          <div>
            <div style="display:flex;align-items:center;gap:8px;margin-bottom:10px;">
              <span style="font-size:12px;font-weight:700;color:var(--text-primary,#111827);">No restriction</span>
              <code style="font-size:11px;background:var(--bg-secondary,#f1f5f9);padding:2px 7px;border-radius:5px;color:#6d28d9;">(omit accept)</code>
            </div>
            <ui-file-upload multiple="true" max-files="10" label="Any File" helper-text="All file types accepted"></ui-file-upload>
          </div>

        </div>

        <!-- Common accept values reference -->
        <div style="margin-top:32px;padding:16px 20px;background:var(--bg-secondary,#f8fafc);border-radius:12px;border:1px solid var(--border-default,#e5e7eb);">
          <h4 style="margin:0 0 12px;font-size:13px;font-weight:700;color:var(--text-primary,#111827);">Common <code>accept</code> values</h4>
          <table style="width:100%;border-collapse:collapse;font-size:12px;">
            <thead>
              <tr style="border-bottom:2px solid var(--border-default,#e5e7eb);">
                <th style="text-align:left;padding:6px 12px;color:var(--text-secondary,#6b7280);font-weight:600;">Use case</th>
                <th style="text-align:left;padding:6px 12px;color:var(--text-secondary,#6b7280);font-weight:600;">accept value</th>
              </tr>
            </thead>
            <tbody>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">Any image</td><td style="padding:7px 12px;"><code>image/*</code></td></tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">JPEG &amp; PNG only</td><td style="padding:7px 12px;"><code>image/jpeg,image/png</code></td></tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">PDF</td><td style="padding:7px 12px;"><code>application/pdf</code> or <code>.pdf</code></td></tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">Word documents</td><td style="padding:7px 12px;"><code>.doc,.docx</code></td></tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">Excel / CSV</td><td style="padding:7px 12px;"><code>.csv,.xls,.xlsx</code></td></tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">Any video</td><td style="padding:7px 12px;"><code>video/*</code></td></tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">Any audio</td><td style="padding:7px 12px;"><code>audio/*</code></td></tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">JSON / XML</td><td style="padding:7px 12px;"><code>.json,.xml</code></td></tr>
              <tr style="border-bottom:1px solid var(--border-default,#e5e7eb);"><td style="padding:7px 12px;">Source code</td><td style="padding:7px 12px;"><code>.js,.ts,.py,.java,.cpp</code></td></tr>
              <tr><td style="padding:7px 12px;">Any file</td><td style="padding:7px 12px;"><em>omit the prop</em></td></tr>
            </tbody>
          </table>
          <p style="margin:12px 0 0;font-size:12px;color:var(--text-muted,#9ca3af);">The <code>accept</code> filter runs both in the OS picker <em>and</em> as client-side validation after drop, so files dragged outside the picker are still rejected.</p>
        </div>
      </div>
    `;
  };

  /* ── Router ───────────────────────────────────────────────────────── */
  const demoMap = {
    dropzone:      showDropzone,
    variants:      showVariants,
    'upload-mode': showUploadMode,
    sideload:      showSideload,
    validation:    showValidation,
    orchestration: showOrchestration,
    events:        showEvents,
    folder:        showFolderUpload,
    'file-types':  showFileTypes,
  };

  const nav = section.querySelector('.demo-controls');
  if (nav) {
    nav.querySelectorAll('ui-button').forEach(btn => {
      btn.addEventListener('click', () => {
        const demo = btn.getAttribute('data-demo');
        if (demoMap[demo]) demoMap[demo]();
        nav.querySelectorAll('ui-button').forEach(b => {
          b.variant = b.getAttribute('data-demo') === demo ? 'solid' : 'outline';
          b.color   = b.getAttribute('data-demo') === demo ? 'primary' : 'none';
        });
      });
    });
  }

  setTimeout(() => {
    showDropzone();
    nav?.querySelectorAll('ui-button').forEach(b => {
      b.variant = b.getAttribute('data-demo') === 'dropzone' ? 'solid' : 'outline';
      b.color   = b.getAttribute('data-demo') === 'dropzone' ? 'primary' : 'none';
    });
  }, 50);
}
