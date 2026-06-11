// Context Menu Data - Menu configurations for demos
// This file contains all the menu item data used in context menu demos

export const basicMenuItems = [
  { id: 'cut', label: 'Cut', icon: 'scissors' },
  { id: 'copy', label: 'Copy', icon: 'copy' },
  { id: 'paste', label: 'Paste', icon: 'clipboard' },
  { id: 'sep1', separator: true },
  {
    id: 'more',
    label: 'More Options',
    icon: 'more-horizontal',
    children: [
      { id: 'select-all', label: 'Select All', icon: 'check-square' },
      { id: 'sep2', separator: true },
      {
        id: 'format',
        label: 'Format',
        icon: 'palette',
        children: [
          { id: 'bold', label: 'Bold', icon: 'bold' },
          { id: 'italic', label: 'Italic', icon: 'italic' },
          { id: 'underline', label: 'Underline', icon: 'underline' },
          { id: 'sep3', separator: true },
          {
            id: 'color',
            label: 'Text Color',
            icon: 'droplet',
            children: [
              { id: 'red', label: 'Red', icon: 'circle' },
              { id: 'green', label: 'Green', icon: 'circle' },
              { id: 'blue', label: 'Blue', icon: 'circle' }
            ]
          }
        ]
      },
      {
        id: 'share',
        label: 'Share',
        icon: 'share-2',
        children: [
          { id: 'email', label: 'Email', icon: 'mail' },
          { id: 'link', label: 'Copy Link', icon: 'link' }
        ]
      }
    ]
  },
  { id: 'sep4', separator: true },
  { id: 'delete', label: 'Delete', icon: 'trash-2' }
];

export const nestedMenuItems = [
  {
    id: 'new',
    label: 'New',
    icon: 'plus',
    children: [
      { id: 'file', label: 'File', icon: 'file' },
      { id: 'folder', label: 'Folder', icon: 'folder' },
      { id: 'sep1', separator: true },
      {
        id: 'more',
        label: 'More Options',
        icon: 'more-horizontal',
        children: [
          { id: 'text', label: 'Text Document', icon: 'file-text' },
          { id: 'image', label: 'Image', icon: 'image' },
          { id: 'video', label: 'Video', icon: 'video' }
        ]
      }
    ]
  },
  {
    id: 'open',
    label: 'Open With',
    icon: 'folder-open',
    children: [
      { id: 'notepad', label: 'Notepad', icon: 'file-text' },
      { id: 'vscode', label: 'VS Code', icon: 'code' },
      { id: 'browser', label: 'Browser', icon: 'globe' }
    ]
  },
  { id: 'sep2', separator: true },
  {
    id: 'share',
    label: 'Share',
    icon: 'share-2',
    children: [
      { id: 'email', label: 'Email', icon: 'mail' },
      { id: 'link', label: 'Copy Link', icon: 'link' },
      {
        id: 'social',
        label: 'Social Media',
        icon: 'smartphone',
        children: [
          { id: 'twitter', label: 'Twitter', icon: 'twitter' },
          { id: 'facebook', label: 'Facebook', icon: 'facebook' }
        ]
      }
    ]
  }
];

export const iconMenuItems = [
  {
    id: 'format',
    label: 'Format',
    icon: 'palette',
    children: [
      { id: 'bold', label: 'Bold', icon: 'bold' },
      { id: 'italic', label: 'Italic', icon: 'italic' },
      { id: 'underline', label: 'Underline', icon: 'underline' }
    ]
  },
  {
    id: 'align',
    label: 'Alignment',
    icon: 'align-justify',
    children: [
      { id: 'left', label: 'Left', icon: 'align-left' },
      { id: 'center', label: 'Center', icon: 'align-center' },
      { id: 'right', label: 'Right', icon: 'align-right' },
      { id: 'justify', label: 'Justify', icon: 'align-justify' }
    ]
  },
  { id: 'sep1', separator: true },
  {
    id: 'insert',
    label: 'Insert',
    icon: 'plus-circle',
    children: [
      { id: 'image', label: 'Image', icon: 'image' },
      { id: 'table', label: 'Table', icon: 'table' },
      { id: 'link', label: 'Link', icon: 'link' },
      { id: 'emoji', label: 'Emoji', icon: 'smile' }
    ]
  }
];

export const fourLevelMenuItems = [
  {
    id: 'level-1',
    label: 'Level 1',
    icon: 'layers',
    children: [
      {
        id: 'level-2',
        label: 'Level 2',
        icon: 'layers',
        children: [
          {
            id: 'level-3',
            label: 'Level 3',
            icon: 'layers',
            children: [
              { id: 'level-4-a', label: 'Level 4 - A', icon: 'type' },
              { id: 'level-4-b', label: 'Level 4 - B', icon: 'type' },
              { id: 'level-4-c', label: 'Level 4 - C', icon: 'type' }
            ]
          }
        ]
      }
    ]
  },
  { id: 'sep1', separator: true },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'tool',
    children: [
      {
        id: 'format',
        label: 'Format',
        icon: 'palette',
        children: [
          {
            id: 'colors',
            label: 'Colors',
            icon: 'droplet',
            children: [
              { id: 'red', label: 'Red', icon: 'circle' },
              { id: 'green', label: 'Green', icon: 'circle' },
              { id: 'blue', label: 'Blue', icon: 'circle' }
            ]
          }
        ]
      },
      {
        id: 'export',
        label: 'Export',
        icon: 'download',
        children: [
          { id: 'pdf', label: 'Export as PDF', icon: 'file-text' },
          { id: 'html', label: 'Export as HTML', icon: 'globe' }
        ]
      }
    ]
  },
  { id: 'sep2', separator: true },
  { id: 'help', label: 'Help', icon: 'help-circle' }
];

export const editorMenuItems = [
  { id: 'undo', label: 'Undo', icon: 'undo' },
  { id: 'redo', label: 'Redo', icon: 'redo' },
  { id: 'sep1', separator: true },
  { id: 'cut', label: 'Cut', icon: 'scissors' },
  { id: 'copy', label: 'Copy', icon: 'copy' },
  { id: 'paste', label: 'Paste', icon: 'clipboard' },
  { id: 'sep2', separator: true },
  {
    id: 'text',
    label: 'Text Style',
    icon: 'type',
    children: [
      { id: 'bold', label: 'Bold', icon: 'bold' },
      { id: 'italic', label: 'Italic', icon: 'italic' },
      { id: 'underline', label: 'Underline', icon: 'underline' },
      { id: 'strike', label: 'Strikethrough', icon: 'strikethrough' },
      { id: 'sep3', separator: true },
      {
        id: 'font',
        label: 'Font Family',
        icon: 'type',
        children: [
          { id: 'arial', label: 'Arial' },
          { id: 'times', label: 'Times New Roman' },
          { id: 'courier', label: 'Courier New' }
        ]
      },
      {
        id: 'size',
        label: 'Font Size',
        icon: 'maximize',
        children: [
          { id: 'small', label: 'Small' },
          { id: 'md', label: 'md' },
          { id: 'large', label: 'Large' }
        ]
      }
    ]
  },
  {
    id: 'paragraph',
    label: 'Paragraph',
    icon: 'align-justify',
    children: [
      {
        id: 'align',
        label: 'Alignment',
        icon: 'align-justify',
        children: [
          { id: 'left', label: 'Left', icon: 'align-left' },
          { id: 'center', label: 'Center', icon: 'align-center' },
          { id: 'right', label: 'Right', icon: 'align-right' }
        ]
      },
      {
        id: 'spacing',
        label: 'Line Spacing',
        icon: 'arrow-up-down',
        children: [
          { id: '1', label: 'Single' },
          { id: '1.5', label: '1.5 Lines' },
          { id: '2', label: 'Double' }
        ]
      }
    ]
  }
];

export const fileMenuItems = [
  { id: 'open', label: 'Open', icon: 'folder-open' },
  {
    id: 'open-with',
    label: 'Open With',
    icon: 'settings',
    children: [
      { id: 'notepad', label: 'Notepad', icon: 'file-text' },
      { id: 'vscode', label: 'VS Code', icon: 'code' },
      { id: 'browser', label: 'Web Browser', icon: 'globe' },
      { id: 'sep1', separator: true },
      { id: 'choose', label: 'Choose Program...', icon: 'more-horizontal' }
    ]
  },
  { id: 'sep2', separator: true },
  { id: 'cut', label: 'Cut', icon: 'scissors' },
  { id: 'copy', label: 'Copy', icon: 'copy' },
  { id: 'paste', label: 'Paste', icon: 'clipboard' },
  { id: 'sep3', separator: true },
  {
    id: 'share',
    label: 'Share',
    icon: 'share-2',
    children: [
      { id: 'email', label: 'Send to Email', icon: 'mail' },
      { id: 'compress', label: 'Compress & Share', icon: 'package' },
      { id: 'cloud', label: 'Upload to Cloud', icon: 'cloud' }
    ]
  },
  {
    id: 'export',
    label: 'Export As',
    icon: 'save',
    children: [
      { id: 'pdf', label: 'PDF Document', icon: 'file-text' },
      { id: 'csv', label: 'CSV File', icon: 'bar-chart-2' },
      { id: 'json', label: 'JSON Data', icon: 'file-json' },
      { id: 'xml', label: 'XML File', icon: 'database' }
    ]
  },
  { id: 'sep4', separator: true },
  { id: 'rename', label: 'Rename', icon: 'edit-2' },
  { id: 'delete', label: 'Delete', icon: 'trash-2' },
  { id: 'sep5', separator: true },
  { id: 'properties', label: 'Properties', icon: 'settings' }
];

export const actionMenuItems = [
  {
    id: 'quick',
    label: 'Quick Actions',
    icon: 'zap',
    children: [
      { id: 'save', label: 'Save', icon: 'save' },
      { id: 'refresh', label: 'Refresh', icon: 'refresh-cw' },
      { id: 'print', label: 'Print', icon: 'printer' }
    ]
  },
  {
    id: 'edit',
    label: 'Edit',
    icon: 'edit',
    children: [
      { id: 'undo', label: 'Undo', icon: 'undo' },
      { id: 'redo', label: 'Redo', icon: 'redo' },
      { id: 'sep1', separator: true },
      { id: 'cut', label: 'Cut', icon: 'scissors' },
      { id: 'copy', label: 'Copy', icon: 'copy' },
      { id: 'paste', label: 'Paste', icon: 'clipboard' }
    ]
  },
  {
    id: 'tools',
    label: 'Tools',
    icon: 'tool',
    children: [
      {
        id: 'validate',
        label: 'Validate',
        icon: 'check-circle',
        children: [
          { id: 'html', label: 'HTML' },
          { id: 'css', label: 'CSS' },
          { id: 'js', label: 'JavaScript' }
        ]
      },
      {
        id: 'optimize',
        label: 'Optimize',
        icon: 'sliders',
        children: [
          { id: 'minify', label: 'Minify' },
          { id: 'compress', label: 'Compress' }
        ]
      }
    ]
  },
  { id: 'sep2', separator: true },
  { id: 'help', label: 'Help', icon: 'help-circle' }
];

export const homeContextMenuItems = [
  { id: 'cut', label: 'Cut', icon: 'scissors' },
  { id: 'copy', label: 'Copy', icon: 'copy' },
  { id: 'paste', label: 'Paste', icon: 'clipboard' },
  { id: 'sep1', separator: true },
  { id: 'delete', label: 'Delete', icon: 'trash-2' }
];

export const interactiveDefaultItems = [
  {"id": "cut", "label": "Cut", "icon": "scissors"},
  {"id": "copy", "label": "Copy", "icon": "copy"},
  {"id": "paste", "label": "Paste", "icon": "clipboard"},
  {"id": "sep1", "separator": true},
  {
    "id": "more",
    "label": "More Options",
    "icon": "more-horizontal",
    "children": [
      {"id": "select-all", "label": "Select All", "icon": "check-square"},
      {"id": "sep2", "separator": true},
      {
        "id": "format",
        "label": "Format",
        "icon": "palette",
        "children": [
          {"id": "bold", "label": "Bold", "icon": "bold"},
          {"id": "italic", "label": "Italic", "icon": "italic"},
          {"id": "underline", "label": "Underline", "icon": "underline"}
        ]
      }
    ]
  },
  {"id": "sep3", "separator": true},
  {"id": "delete", "label": "Delete", "icon": "trash-2"}
];

export const disabledItemsMenu = [
  { id: 'cut', label: 'Cut', icon: 'scissors' },
  { id: 'copy', label: 'Copy', icon: 'copy' },
  { id: 'paste', label: 'Paste', icon: 'clipboard', disabled: true },
  { id: 'sep1', separator: true },
  {
    id: 'more',
    label: 'More Options',
    icon: 'more-horizontal',
    children: [
      { id: 'select-all', label: 'Select All', icon: 'check-square' },
      { id: 'sep2', separator: true },
      { id: 'disabled-item', label: 'Disabled Item', icon: 'ban', disabled: true },
      {
        id: 'format',
        label: 'Format',
        icon: 'palette',
        children: [
          { id: 'bold', label: 'Bold', icon: 'bold' },
          { id: 'italic', label: 'Italic', icon: 'italic', disabled: true },
          { id: 'underline', label: 'Underline', icon: 'underline' }
        ]
      }
    ]
  },
  { id: 'sep3', separator: true },
  { id: 'delete', label: 'Delete', icon: 'trash-2', disabled: true }
];
