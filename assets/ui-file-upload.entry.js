import { r as registerInstance, c as createEvent, h, H as Host } from './index-DUsoYu9r.js';

const fileUploadCss = () => `.sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}.a11y-sr-only{position:absolute !important;width:1px !important;height:1px !important;padding:0 !important;margin:-1px !important;overflow:hidden !important;clip:rect(0, 0, 0, 0) !important;white-space:nowrap !important;border-width:0 !important}:host{display:block;font-family:inherit}:host(.is-sideload){background:white;border-radius:24px;overflow:hidden;box-shadow:0 10px 40px rgba(0, 0, 0, 0.12);border:1px solid #e5e7eb}.fu-label{display:block;font-size:13px;font-weight:600;color:var(--text-secondary, #374151);margin-bottom:6px}.fu-sideload-header{padding:32px 32px 16px 32px}.fu-header-title-row{display:flex;align-items:center;gap:16px;margin-bottom:24px}.fu-header-title-row h2{margin:0;font-size:28px;font-weight:500;color:#111827;flex:1}.fu-close-dialog{background:#ef4444 !important;color:white !important;border-radius:8px !important;width:36px;height:36px}.fu-sideload-zone{border:2px dashed #e5e7eb;border-radius:12px;padding:16px;display:flex;align-items:center;justify-content:center;gap:12px;cursor:pointer;background:#fdfdfd;transition:all 0.2s}.fu-sideload-zone:hover,.fu-sideload-zone.is-dragging{border-color:#10b981;background:#f0fdf4}.fu-sideload-zone span{font-size:15px;color:#4b5563}.fu-browse-pill{background:#10b981;color:white;padding:2px 12px;border-radius:20px;font-weight:600;margin-left:4px}.fu-zone{border:2px dashed var(--border-strong, #d1d5db);border-radius:14px;padding:40px 24px;text-align:center;cursor:pointer;background:var(--bg-primary, #fafafa);transition:border-color 0.2s, background 0.2s}.fu-zone:hover:not(.fu-disabled){border-color:var(--color-primary, #10b981);background:var(--bg-primary, #eff6ff)}.fu-zone.fu-dragging{border-color:var(--color-primary, #10b981);background:var(--bg-primary, #eff6ff);box-shadow:inset 0 0 0 3px rgba(var(--color-primary-rgb, 59, 130, 246), 0.2)}.fu-zone.fu-disabled{opacity:0.5;cursor:not-allowed}.fu-zone-icon{font-size:40px;margin-bottom:10px}.fu-file-list{display:flex;flex-direction:column;gap:12px;padding:16px 32px;max-height:400px;overflow-y:auto}.fu-file-list.is-sideload-list{padding:0 32px 32px 32px}.fu-file-item{display:flex;align-items:center;gap:16px;padding:14px 20px;border:1px solid #e5e7eb;border-radius:14px;background:white;transition:transform 0.2s}.fu-file-item.is-error{background:#fff1f2;border-color:#fecaca}.fu-sideload-item-icon{flex-shrink:0}.fu-file-info{flex:1;min-width:0}.fu-file-name{display:block;font-size:15px;font-weight:600;color:#1f2937;white-space:nowrap;overflow:hidden;text-overflow:ellipsis}.fu-file-meta{font-size:13px;color:#6b7280;margin-top:2px}.fu-item-error-msg{color:#ef4444;font-weight:700;background:rgba(239, 68, 68, 0.08);padding:1px 6px;border-radius:4px}.fu-remove{color:#9ca3af !important}.fu-remove:hover{color:#ef4444 !important}.fu-sideload-footer{padding:24px 32px;background:#f9fafb;border-top:1px solid #e5e7eb;display:flex;align-items:center;justify-content:space-between}.fu-footer-actions-right{display:flex;gap:12px}.fu-trigger-row{display:flex;align-items:center;gap:16px}.fu-actions{display:flex;gap:8px}.fu-progress-bar{height:6px;background:#e5e7eb;border-radius:3px;margin-top:10px;overflow:hidden}.fu-progress-fill{height:100%;background:#10b981;transition:width 0.3s ease}.fu-input-hidden{display:none}`;

const FileUpload = class {
    constructor(hostRef) {
        registerInstance(this, hostRef);
        this.fileSelect = createEvent(this, "fileSelect");
        this.fileRemove = createEvent(this, "fileRemove");
        this.fileReject = createEvent(this, "fileReject");
        this.uploadProgress = createEvent(this, "uploadProgress");
        this.uploadSuccess = createEvent(this, "uploadSuccess");
        this.allUploadsComplete = createEvent(this, "allUploadsComplete");
    }
    disconnectedCallback() {
        Object.values(this.uploadIntervals).forEach(interval => clearInterval(interval));
        this.uploadIntervals = {};
    }
    /** Label */
    label = '';
    /** Helper text */
    helperText = '';
    /** Accept attribute (e.g. 'image/*,.pdf') */
    accept = '';
    /** Allow multiple files */
    multiple = false;
    /** Max file size in bytes */
    maxSize = 10 * 1024 * 1024; // 10MB
    /** Min file size in bytes */
    minSize = 0;
    /** Max number of files */
    maxFiles = 5;
    /** Show file previews */
    showPreview = true;
    /** Disabled */
    disabled = false;
    /** Variant: 'dropzone' | 'button' | 'compact' | 'sideload' */
    variant = 'dropzone';
    /** Icon emoji or text */
    uploadIcon = '📁';
    /** RTL support */
    rtl = false;
    /** Capture attribute for mobile camera */
    capture = false;
    /** Enable basic filename validation */
    validateFileName = true;
    /** Custom regex pattern filenames must satisfy */
    fileNamePattern = '';
    /** Show manual validate button */
    showValidateButton = false;
    /** Show manual upload button */
    showUploadButton = false;
    /** Automatically trigger upload when files are selected */
    autoUpload = true;
    /** Automatically emit completion event and hide list when all files succeed */
    autoCloseOnSuccess = false;
    /** Integrated header title (for sideload variant) */
    headerTitle = '';
    isDragging = false;
    files = [];
    errors = [];
    /** Overall component state: 'idle' | 'validating' | 'uploading' | 'success' | 'error' */
    componentStatus = 'idle';
    uploadIntervals = {};
    fileSelect;
    fileRemove;
    fileReject;
    uploadProgress;
    uploadSuccess;
    allUploadsComplete;
    inputRef;
    /**
     * Public API: Remove all files that have errors or are rejected
     */
    async removeInvalidFiles() {
        this.files = this.files.filter(f => f.status !== 'error');
        this.errors = [];
        this.fileSelect.emit(this.files);
    }
    /**
     * Public API: Programmatically trigger validation of all pending files
     */
    async validate() {
        this.componentStatus = 'validating';
        let allValid = true;
        const updatedFiles = this.files.map(f => {
            if (f.status !== 'pending' && f.status !== 'validating')
                return f;
            const errors = this.validateFile(f.file);
            if (errors.length > 0) {
                allValid = false;
                return { ...f, status: 'error' };
            }
            return { ...f, status: 'pending' }; // Stay pending until upload
        });
        this.files = [...updatedFiles];
        // Simulate short validation delay
        await new Promise(resolve => setTimeout(resolve, 600));
        this.componentStatus = allValid ? 'idle' : 'error';
        return allValid;
    }
    /**
     * Public API: Programmatically trigger upload of all valid files
     */
    async upload() {
        if (this.componentStatus === 'uploading')
            return;
        this.componentStatus = 'uploading';
        const pendingFiles = this.files.filter(f => f.status === 'pending' || f.status === 'error');
        if (pendingFiles.length === 0) {
            this.componentStatus = 'idle';
            return;
        }
        pendingFiles.forEach(f => {
            this.startSimulation(f.name);
        });
    }
    /**
     * Public API: Clear all files and reset state
     */
    async clear() {
        Object.values(this.uploadIntervals).forEach(interval => clearInterval(interval));
        this.uploadIntervals = {};
        this.files = [];
        this.errors = [];
        this.componentStatus = 'idle';
    }
    formatSize(bytes) {
        if (bytes < 1024)
            return `${bytes} B`;
        if (bytes < 1024 * 1024)
            return `${(bytes / 1024).toFixed(1)} KB`;
        return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
    }
    getAcceptTokens() {
        return this.accept
            .split(',')
            .map(token => token.trim())
            .filter(Boolean);
    }
    matchesAcceptRule(file) {
        const tokens = this.getAcceptTokens();
        if (tokens.length === 0)
            return true;
        const fileType = (file.type || '').toLowerCase();
        const fileName = file.name.toLowerCase();
        return tokens.some(token => {
            const normalizedToken = token.toLowerCase();
            if (normalizedToken.startsWith('.')) {
                return fileName.endsWith(normalizedToken);
            }
            if (normalizedToken.endsWith('/*')) {
                return fileType.startsWith(normalizedToken.slice(0, -1));
            }
            return fileType === normalizedToken;
        });
    }
    getFileNameValidationError(fileName) {
        if (!this.validateFileName)
            return null;
        if (!fileName.trim()) {
            return {
                fileName,
                message: 'A selected file is missing a valid name',
                rule: 'invalid-name',
            };
        }
        if (/[<>:"/\\|?*\u0000-\u001F]/.test(fileName)) {
            return {
                fileName,
                message: `${fileName} contains invalid filename characters`,
                rule: 'invalid-name',
            };
        }
        if (/[. ]$/.test(fileName)) {
            return {
                fileName,
                message: `${fileName} cannot end with a space or period`,
                rule: 'invalid-name',
            };
        }
        const baseName = fileName.replace(/\.[^/.]+$/, '');
        if (/^(con|prn|aux|nul|com[1-9]|lpt[1-9])$/i.test(baseName)) {
            return {
                fileName,
                message: `${fileName} uses a reserved filename`,
                rule: 'reserved-name',
            };
        }
        if (this.fileNamePattern) {
            try {
                const pattern = new RegExp(this.fileNamePattern);
                if (!pattern.test(fileName)) {
                    return {
                        fileName,
                        message: `${fileName} does not match the required filename pattern`,
                        rule: 'file-name-pattern',
                    };
                }
            }
            catch (_error) {
                // Ignore invalid custom patterns rather than blocking uploads unexpectedly.
            }
        }
        return null;
    }
    validateFile(file) {
        const validationErrors = [];
        const fileNameError = this.getFileNameValidationError(file.name);
        if (fileNameError) {
            validationErrors.push(fileNameError);
        }
        if (this.minSize > 0 && file.size < this.minSize) {
            validationErrors.push({
                fileName: file.name,
                message: `${file.name} is smaller than the minimum size (${this.formatSize(this.minSize)})`,
                rule: 'min-size',
            });
        }
        if (file.size > this.maxSize) {
            validationErrors.push({
                fileName: file.name,
                message: `${file.name} exceeds max size (${this.formatSize(this.maxSize)})`,
                rule: 'max-size',
            });
        }
        if (!this.matchesAcceptRule(file)) {
            validationErrors.push({
                fileName: file.name,
                message: `${file.name} is not an accepted file type`,
                rule: 'accept',
            });
        }
        return validationErrors;
    }
    processFiles(fileList) {
        const validationErrors = [];
        const newFiles = [];
        const remaining = this.maxFiles - this.files.length;
        if (remaining <= 0) {
            validationErrors.push({
                fileName: '',
                message: `You can upload up to ${this.maxFiles} files`,
                rule: 'max-files',
            });
        }
        if (fileList.length > remaining && remaining > 0) {
            validationErrors.push({
                fileName: '',
                message: `Only ${remaining} more file${remaining === 1 ? '' : 's'} can be added`,
                rule: 'max-files',
            });
        }
        Array.from(fileList).slice(0, remaining).forEach(file => {
            // Duplicate detection
            const isDuplicate = this.files.some(f => f.name === file.name && f.size === file.size);
            const uf = {
                name: file.name,
                size: file.size,
                type: file.type,
                file,
                status: 'pending',
                progress: 0
            };
            if (isDuplicate) {
                uf.status = 'error';
                uf.errorMessage = `Duplicate detected: "${file.name}"`;
                validationErrors.push({ fileName: file.name, message: uf.errorMessage, rule: 'duplicate-file' });
            }
            if (file.size === 0) {
                uf.status = 'error';
                uf.errorMessage = 'File is empty (0 bytes)';
                validationErrors.push({ fileName: file.name, message: uf.errorMessage, rule: 'empty-file' });
            }
            const fileErrors = this.validateFile(file);
            if (fileErrors.length > 0 && uf.status !== 'error') {
                uf.status = 'error';
                uf.errorMessage = fileErrors[0].message;
                validationErrors.push(...fileErrors);
            }
            const reader = new FileReader();
            reader.onload = (e) => {
                uf.dataUrl = e.target?.result;
                this.files = [...this.files];
            };
            if (file.type.startsWith('image/'))
                reader.readAsDataURL(file);
            newFiles.push(uf);
        });
        this.errors = validationErrors.map(error => error.message);
        this.files = [...this.files, ...newFiles];
        if (this.autoUpload) {
            newFiles.filter(f => f.status === 'pending').forEach(f => this.startSimulation(f.name));
        }
        if (validationErrors.length > 0) {
            this.fileReject.emit(validationErrors);
        }
        this.fileSelect.emit(this.files);
    }
    handleDrop = (e) => {
        e.preventDefault();
        this.isDragging = false;
        if (this.disabled || !e.dataTransfer?.files)
            return;
        this.processFiles(e.dataTransfer.files);
    };
    handlePaste = (e) => {
        if (this.disabled || !e.clipboardData?.files.length)
            return;
        this.processFiles(e.clipboardData.files);
    };
    startSimulation(fileName) {
        // Clear existing interval if any
        if (this.uploadIntervals[fileName]) {
            clearInterval(this.uploadIntervals[fileName]);
        }
        const fileIdx = this.files.findIndex(f => f.name === fileName);
        if (fileIdx === -1)
            return;
        this.files[fileIdx].status = 'uploading';
        this.files = [...this.files];
        this.uploadIntervals[fileName] = setInterval(() => {
            const idx = this.files.findIndex(f => f.name === fileName);
            if (idx === -1) {
                clearInterval(this.uploadIntervals[fileName]);
                return;
            }
            const current = this.files[idx].progress || 0;
            if (current >= 100) {
                clearInterval(this.uploadIntervals[fileName]);
                delete this.uploadIntervals[fileName];
                this.files[idx].status = 'success';
                this.files[idx].progress = 100;
                this.files = [...this.files];
                this.uploadSuccess.emit(this.files[idx]);
                this.checkAllComplete();
            }
            else {
                const nextProgress = Math.min(100, current + Math.random() * 15 + 5);
                this.files[idx].progress = nextProgress;
                this.files = [...this.files];
                this.uploadProgress.emit({ fileName, progress: nextProgress });
            }
        }, 400);
    }
    checkAllComplete() {
        const allDone = this.files.every(f => f.status === 'success' || f.status === 'error');
        if (allDone && this.files.length > 0) {
            this.allUploadsComplete.emit(this.files);
            this.componentStatus = 'success';
            if (this.autoCloseOnSuccess) {
                setTimeout(() => {
                    this.clear();
                }, 1500);
            }
        }
    }
    handleFileInput = (e) => {
        const input = e.target;
        if (input.files)
            this.processFiles(input.files);
        input.value = '';
    };
    removeFile = (idx) => {
        const removed = this.files[idx];
        if (this.uploadIntervals[removed.name]) {
            clearInterval(this.uploadIntervals[removed.name]);
            delete this.uploadIntervals[removed.name];
        }
        this.files = this.files.filter((_, i) => i !== idx);
        this.fileRemove.emit(removed.name);
        this.fileSelect.emit(this.files);
    };
    getIcon(type) {
        if (type.startsWith('image/'))
            return '🖼️';
        if (type === 'application/pdf')
            return '📄';
        if (type.includes('word'))
            return '📝';
        if (type.includes('sheet') || type.includes('excel'))
            return '📊';
        if (type.includes('zip') || type.includes('rar'))
            return '🗜️';
        return '📎';
    }
    render() {
        const canAdd = !this.disabled && this.files.length < this.maxFiles;
        const hasFiles = this.files.length > 0;
        const isUploading = this.componentStatus === 'uploading';
        const isValidating = this.componentStatus === 'validating';
        const validFilesCount = this.files.filter(f => f.status !== 'error').length;
        const hasErrors = this.files.some(f => f.status === 'error');
        return (h(Host, { key: 'e023a6d860e04cbad81a073a3d921b4670644ea1', dir: this.rtl ? 'rtl' : 'ltr', onPaste: this.handlePaste, class: { 'is-sideload': this.variant === 'sideload' } }, this.variant === 'sideload' && (h("div", { key: 'f0a9154a2d0fd3574b659674cf76f3a12f058d57', class: "fu-sideload-header" }, h("div", { key: '83d0168bac94abaa64b8e97026c97fd8d2423ae3', class: "fu-header-title-row" }, h("ui-icon", { key: '8387010b6ef439d6de023eb97eb18fc38d9aa06d', name: "upload-cloud", library: "lucide", size: "24px", color: "var(--color-primary, #10b981)" }), h("h2", { key: 'a31a8e98afedd667a99090de154ee41565e7d6ca' }, this.headerTitle || 'Sideload Firmware'), h("ui-button", { key: 'b6253491fe52f40256bc7160c5d7f127f56618f3', variant: "ghost", size: "md", iconOnly: true, icon: "x", iconLibrary: "lucide", class: "fu-close-dialog" })), h("div", { key: 'b1628a83b975aaf63a78fb4827eda5b723d7559e', class: { 'fu-sideload-zone': true, 'is-dragging': this.isDragging }, onDragOver: (e) => { e.preventDefault(); this.isDragging = true; }, onDragLeave: () => (this.isDragging = false), onDrop: this.handleDrop, onClick: () => canAdd && this.inputRef?.click() }, h("ui-icon", { key: '438322e56615a49d5b59ce048a53baa70a378bbd', name: "upload", library: "lucide", size: "20px", color: "var(--color-primary, #10b981)" }), h("span", { key: '55635c6bdee2d0f6cdb76f6c631e43af00119c29' }, "Drop more files or ", h("strong", { key: '38a4347b3acc9f226d8807513a13e896cc3988ab', class: "fu-browse-pill" }, "Browse"))))), this.label && this.variant !== 'sideload' && h("label", { key: '8d7e1ab4892d62a638a0ac2a7ed3de49ea4db3a7', class: "fu-label" }, this.label), this.variant === 'dropzone' && (h("div", { key: 'e3db150b83ca3874088a4f0ab4ff721d1eb8599a', class: { 'fu-zone': true, 'fu-dragging': this.isDragging, 'fu-disabled': this.disabled }, onDragOver: (e) => { e.preventDefault(); this.isDragging = true; }, onDragLeave: () => (this.isDragging = false), onDrop: this.handleDrop, onClick: () => canAdd && this.inputRef?.click() }, h("div", { key: 'c067ae850850024015757974c5e881b1fc52cdd0', class: "fu-zone-icon" }, this.uploadIcon), h("div", { key: 'a438cded36e799c246e29bd636bc79c833246d2e', class: "fu-zone-title" }, "Drag & drop files here"), h("div", { key: '952dd6afce21218fa9a3b9c1f7cb1a2854ab9f21', class: "fu-zone-sub" }, "or ", h("span", { key: '5946db023c7713f63ff402082de612cfe27d79e1', class: "fu-zone-browse" }, "browse files")), h("div", { key: '0b63680de4b4c3d99a985747efd1bdf2733b8c1a', class: "fu-zone-limit" }, this.accept && h("span", { key: '5c75daa15408bec904c57ee6f7e4af4ba09f56b7' }, "Accepts: ", this.accept), h("span", { key: '34488fd0e8064650fcbc50672d9f4b40b56c3252' }, "Max ", this.formatSize(this.maxSize), " \u00B7 Up to ", this.maxFiles, " files")))), (this.variant === 'button' || this.variant === 'compact') && (h("div", { key: '805a97dbff1ac3911e20d25d9feb5dc0e0254d90', class: "fu-trigger-row" }, this.variant === 'button' && (h("ui-button", { key: '54b3624ef218f5c5c8d62a4c5dc88fe24ddc9a27', variant: "primary", onClick: () => canAdd && this.inputRef?.click(), disabled: this.disabled || isUploading, label: this.label || 'Select Files', icon: this.uploadIcon })), this.variant === 'compact' && (h("div", { key: '3ebbfb44da248d985e86f48759772545de916d5d', class: { 'fu-compact': true, 'fu-disabled': this.disabled }, onClick: () => canAdd && this.inputRef?.click() }, h("span", { key: '39e88c85f57b10cec99d7c677689cd0402b8b5b0', class: "fu-compact-icon" }, this.uploadIcon), h("span", { key: '41e011e8f46008ef0e803fcfe7bbecc55e7ddd98', class: "fu-compact-text" }, this.label || 'Choose file'), h("span", { key: '5f2c96e19c6ab3d715ffbd9d33fd49c507cda31b', class: "fu-compact-count" }, this.files.length, " / ", this.maxFiles))), (this.showValidateButton || this.showUploadButton) && (h("div", { key: '494128b8db00f33ab9d602b78c2c17c9374ddf0a', class: "fu-actions" }, this.showValidateButton && (h("ui-button", { key: '470be75a0b9a69b8557f749c615f60848b045f7f', variant: "outline", size: "md", loading: isValidating, disabled: isUploading || this.disabled || !hasFiles, onClick: () => this.validate(), label: "Validate" })), this.showUploadButton && (h("ui-button", { key: '14cea3a0039fe06e5a6eff5baf4ce1ffcee724ad', variant: "primary", size: "md", loading: isUploading, disabled: isValidating || this.disabled || !hasFiles, onClick: () => this.upload(), label: "Upload All", icon: "upload", iconLibrary: "lucide" })))))), this.variant === 'dropzone' && (this.showValidateButton || this.showUploadButton) && (h("div", { key: 'aba1a4dc3bfffe9b2613719ce2ae876e10bd9aca', class: "fu-dropzone-actions" }, h("span", { key: 'f6bddf09dfb74057ee74aff7e82a38a999973e9c', class: "fu-status-text" }, hasFiles ? `${this.files.length} file(s) selected` : 'No files selected'), h("div", { key: 'e050caeb8ba45b9d2d0adeddf659b5a53abddf89', class: "fu-button-group" }, this.showValidateButton && (h("ui-button", { key: '95b6ea727bbe7cad4a3ba6f10e1b3777393b4ca4', variant: "ghost", size: "md", loading: isValidating, disabled: isUploading || !hasFiles, onClick: () => this.validate(), label: "Validate Files" })), this.showUploadButton && (h("ui-button", { key: '3d92daaa1f7d0bb85e1bf016fb53aa0f771c4510', variant: "primary", size: "md", loading: isUploading, disabled: isValidating || !hasFiles, onClick: () => this.upload(), label: "Start Upload" }))))), h("input", { key: '33eaf23068f5a8042b7e44ef8564f22860693395', ref: el => (this.inputRef = el), type: "file", class: "fu-input-hidden", accept: this.accept, multiple: this.multiple, capture: this.capture === true ? 'environment' : (this.capture || undefined), onChange: this.handleFileInput }), this.errors.length > 0 && this.variant !== 'sideload' && (h("div", { key: '7c206fe6b3cd098262a1061e9abf88909c443fb2', class: "fu-errors" }, this.errors.map(e => h("div", { class: "fu-error" }, "\u26A0 ", e)))), this.showPreview && hasFiles && (h("div", { key: '36884700bc547826dfbfa32556a59e56ea0c9ff1', class: { 'fu-file-list': true, 'is-sideload-list': this.variant === 'sideload' } }, this.variant !== 'sideload' && h("div", { key: '634011f23cba7105437851f7e969e98ee1e46c09', class: "fu-list-header" }, "QUEUED FILES"), this.files.map((f, idx) => {
            const progress = f.progress || 0;
            const status = f.status;
            const statusLabels = {
                pending: 'Ready',
                validating: 'Validating...',
                uploading: 'Uploading...',
                success: 'Complete',
                error: 'Failed'
            };
            const itemIcon = status === 'error' ? 'alert-triangle' : (status === 'success' ? 'check-circle' : 'info');
            const iconColor = status === 'error' ? '#f59e0b' : (status === 'success' ? '#10b981' : '#3b82f6');
            return (h("div", { class: { 'fu-file-item': true, [`is-${status}`]: true }, key: f.name + idx }, this.variant === 'sideload'
                ? h("ui-icon", { class: "fu-sideload-item-icon", name: itemIcon, library: "lucide", size: "24px", color: iconColor })
                : (f.type.startsWith('image/') && f.dataUrl
                    ? h("img", { class: "fu-thumb", src: f.dataUrl, alt: f.name })
                    : h("span", { class: "fu-file-icon" }, this.getIcon(f.type))), h("div", { class: "fu-file-info" }, h("div", { class: "fu-file-name-row" }, h("span", { class: "fu-file-name" }, f.name), h("span", { class: "fu-file-status" }, this.variant !== 'sideload' && h("span", { class: "fu-status-label" }, statusLabels[status]), status === 'success' && h("ui-icon", { name: "check", library: "lucide", size: "14px", color: "#10b981" }), status === 'error' && this.variant !== 'sideload' && h("ui-icon", { name: "alert-circle", library: "lucide", size: "14px", color: "#ef4444" }), status === 'uploading' && h("span", { class: "fu-file-percent" }, Math.round(progress), "%"))), h("div", { class: "fu-file-meta" }, h("span", { class: "fu-file-size" }, this.formatSize(f.size)), f.errorMessage && h("span", { class: "fu-item-error-msg" }, " \u00B7 ", f.errorMessage)), (status === 'uploading' || status === 'success') && (h("div", { class: "fu-progress-bar" }, h("div", { class: "fu-progress-fill", style: { width: `${progress}%` } })))), h("ui-button", { variant: "ghost", size: "xxs", iconOnly: true, class: "fu-remove", onClick: (e) => { e.stopPropagation(); this.removeFile(idx); }, ariaLabel: "Remove", icon: "x-circle", iconLibrary: "lucide", iconSize: "18px", disabled: isUploading && status === 'uploading' })));
        }))), this.variant === 'sideload' && (h("div", { key: 'ef71906dbefd987da6f7cf54dacb41528d8e7d4b', class: "fu-sideload-footer" }, h("div", { key: 'e5ce897412814293206de68572bce9fe93478fff', class: "fu-footer-actions-left" }, hasErrors && (h("ui-button", { key: '40c336eb57ba23767800511d7f8a5525c3bb3a0f', variant: "ghost", size: "md", label: "Clean Queue", onClick: () => this.removeInvalidFiles(), icon: "trash-2", iconLibrary: "lucide" }))), h("div", { key: '31c7983a14455d24158aa3c7bb69b490f995968e', class: "fu-footer-actions-right" }, h("ui-button", { key: 'd9723f7193044a178473437cad30d2074d41b6b4', variant: "outline", label: "Cancel", onClick: () => this.clear() }), h("ui-button", { key: '532aae5a83893629ee5d8186904286393183f5e7', variant: "primary", label: `Upload ${validFilesCount} files`, disabled: validFilesCount === 0 || isUploading, loading: isUploading, onClick: () => this.upload(), icon: "upload", iconLibrary: "lucide" })))), this.helperText && this.variant !== 'sideload' && h("div", { key: '6bd4941a135fbf542f3d9ca275847660424695d9', class: "fu-helper" }, this.helperText)));
    }
};
FileUpload.style = fileUploadCss();

export { FileUpload as ui_file_upload };
