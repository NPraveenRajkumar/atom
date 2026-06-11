// Advanced Data Table Demo Functions
export function initAdvancedDataTableDemo() {
  const section = document.getElementById('advanced-data-table');
  if (!section) return;

  section.innerHTML = `
    <p>Feature-rich data table with sorting, filtering, resizing, grouping, and more.</p>

    <div class="demo-controls-wrapper">
      <div class="demo-grid-wrapper">
        <ui-button id="btnMasterTier"  label="✨ Master Tier" variant="outline"></ui-button>
        <ui-button id="btnInteractiveTable"  label="🎮 Playground" variant="outline"></ui-button>
        <ui-button id="btnBasicTable"  label="Basic" variant="outline"></ui-button>
        <ui-button id="btnSkeletonLoading"  label="Skeleton Loading" variant="outline"></ui-button>
        <ui-button id="btnColumnGrouping"  label="Column Grouping" variant="outline"></ui-button>
        <ui-button id="btnRowGrouping"  label="Row Grouping" variant="outline"></ui-button>
        <ui-button id="btnInputTypes"  label="Input Types" variant="outline"></ui-button>
        <ui-button id="btnTableWithSelection"  label="Selection" variant="outline"></ui-button>
        <ui-button id="btnRowActions"  label="Row Actions" variant="outline"></ui-button>
        <ui-button id="btnEditableTable"  label="Editable Mode" variant="outline"></ui-button>
        <ui-button id="btnColumnPinning"  label="📌 Column Pinning" variant="outline"></ui-button>
        <ui-button id="btnRowPinning"  label="📍 Row Pinning" variant="outline"></ui-button>
        <ui-button id="btnRowReordering"  label="↕️ Row Reorder" variant="outline"></ui-button>
        <ui-button id="btnMultiFilter"  label="🔍 Multi-Filter" variant="outline"></ui-button>
        <ui-button id="btnSearchMultiFilterPanel"  label="🔎 Search + Multi-Filter Panel" variant="outline"></ui-button>
        <ui-button id="btnEditEvents"  label="📡 Edit Events" variant="outline"></ui-button>
        <ui-button id="btnAdvancedPanels"  label="🎛️ Panels" variant="outline"></ui-button>
        <ui-button id="btnAdvancedFilterPanel"  label="🔍 Advanced Filters" variant="outline"></ui-button>
        <ui-button id="btnTreeData"  label="🌲 Tree Data" variant="outline"></ui-button>
        <ui-button id="btnSparklines"  label="📈 Sparklines" variant="outline"></ui-button>
        <ui-button id="btnLazyLoading"  label="⏳ Lazy Load" variant="outline"></ui-button>
        <ui-button id="btnPDFExport"  label="📄 PDF Export" variant="outline"></ui-button>
        <ui-button id="btnContextMobile"  label="📱 Mobile & Menu" variant="outline"></ui-button>
        <ui-button id="btnUndoRedo"  label="↩️ Undo/Redo" variant="outline"></ui-button>
        <ui-button id="btnRangeSelection"  label="🟦 Range Select & Copy" variant="outline"></ui-button>
        <ui-button id="btnConditionalFormatting"  label="🎨 Conditional Format" variant="outline"></ui-button>
        <ui-button id="btnAggregation"  label="∑ Aggregation" variant="outline"></ui-button>
        <ui-button id="btnValidationPrint"  label="✔️ Validation & Print" variant="outline"></ui-button>
        <ui-button id="btnPrintPage"  label="🖨️ Print Page" variant="outline"></ui-button>
      </div>
    </div>

    <div id="tableDemoContainer" style="margin-top: 20px;"></div>
  `;

  // Map of buttons to functions
  const demoMap = {
    btnMasterTier: showMasterTier,
    btnInteractiveTable: showInteractiveTable,
    btnBasicTable: showBasicTable,
    btnSkeletonLoading: showSkeletonLoading,
    btnColumnGrouping: showColumnGrouping,
    btnRowGrouping: showRowGrouping,
    btnInputTypes: showInputTypes,
    btnTableWithSelection: showTableWithSelection,
    btnRowActions: showRowActions,
    btnEditableTable: showEditableTable,
    btnColumnPinning: showColumnPinning,
    btnRowPinning: showRowPinning,
    btnRowReordering: showRowReordering,
    btnMultiFilter: showMultiFilter,
    btnSearchMultiFilterPanel: showSearchMultiFilterPanel,
    btnEditEvents: showEditEvents,
    btnAdvancedPanels: showAdvancedPanels,
    btnAdvancedFilterPanel: showAdvancedFilterPanel,
    btnTreeData: showTreeData,
    btnSparklines: showSparklines,
    btnLazyLoading: showLazyLoading,
    btnPDFExport: showPDFExport,
    btnContextMobile: showContextMobile,
    btnUndoRedo: showUndoRedo,
    btnRangeSelection: showRangeSelection,
    btnConditionalFormatting: showConditionalFormatting,
    btnAggregation: showAggregation,
    btnValidationPrint: showValidationPrintDemo,
    btnPrintPage: () => window.print(),
  };

  const updateActiveBtn = id => {
    Object.keys(demoMap).forEach(btnId => {
      const btn = document.getElementById(btnId);
      if (btn) btn.selected = btnId === id;
    });
  };

  setTimeout(() => {
    Object.entries(demoMap).forEach(([id, func]) => {
      const btn = document.getElementById(id);
      if (btn) {
        btn.addEventListener('click', () => {
          updateActiveBtn(id);
          func?.();
        });
      }
    });

    // Default view
    updateActiveBtn('btnInteractiveTable');
    showInteractiveTable();
  }, 100);

  const tableContainer = document.getElementById('tableDemoContainer');
  if (!tableContainer) return;

  const sampleData = [
    {
      id: 1,
      name: 'John Doe',
      email: 'john@example.com',
      website: 'https://johndoe.com',
      phone: '+1-555-0123',
      department: 'Engineering',
      role: 'Senior Developer',
      salary: 95000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2022-01-15',
      location: 'New York',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'React, Node.js',
      experience: '8 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 2,
      name: 'Jane Smith',
      email: 'jane@example.com',
      website: 'https://janesmith.io',
      phone: '+1-555-0124',
      department: 'Marketing',
      role: 'Marketing Manager',
      salary: 85000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: false,
      startDate: '2021-06-10',
      location: 'Los Angeles',
      manager: 'Mike Ross',
      project: 'Alpha',
      skillset: 'SEO, Analytics',
      experience: '6 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 3,
      name: 'Bob Johnson',
      email: 'bob@example.com',
      website: 'https://bobjohnson.dev',
      phone: '+1-555-0125',
      department: 'Engineering',
      role: 'Team Lead',
      salary: 105000,
      status: 'Active',
      rating: 3,
      active: false,
      verified: true,
      startDate: '2020-03-22',
      location: 'San Francisco',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'Python, AWS',
      experience: '10 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 4,
      name: 'Alice Williams',
      email: 'alice@example.com',
      website: 'https://alice.dev',
      phone: '+1-555-0126',
      department: 'Sales',
      role: 'Sales Representative',
      salary: 70000,
      status: 'On Leave',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-09-05',
      location: 'Chicago',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'CRM, Negotiation',
      experience: '4 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 5,
      name: 'Charlie Brown',
      email: 'charlie@example.com',
      website: 'https://charlieb.com',
      phone: '+1-555-0127',
      department: 'Engineering',
      role: 'Junior Developer',
      salary: 65000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: false,
      startDate: '2023-02-14',
      location: 'Austin',
      manager: 'Sarah Connor',
      project: 'Gamma',
      skillset: 'JavaScript, CSS',
      experience: '2 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 6,
      name: 'Diana Prince',
      email: 'diana@example.com',
      website: 'https://diana.io',
      phone: '+1-555-0128',
      department: 'HR',
      role: 'HR Manager',
      salary: 80000,
      status: 'Inactive',
      rating: 4,
      active: false,
      verified: true,
      startDate: '2019-11-20',
      location: 'Boston',
      manager: 'Bruce Wayne',
      project: 'Delta',
      skillset: 'Recruitment, Policy',
      experience: '7 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 7,
      name: 'Ethan Hunt',
      email: 'ethan@example.com',
      website: 'https://ethanhunt.com',
      phone: '+1-555-0129',
      department: 'Marketing',
      role: 'Content Strategist',
      salary: 72000,
      status: 'Active',
      rating: 3,
      active: true,
      verified: true,
      startDate: '2022-07-08',
      location: 'Seattle',
      manager: 'Mike Ross',
      project: 'Alpha',
      skillset: 'Content, Copywriting',
      experience: '5 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 8,
      name: 'Fiona Apple',
      email: 'fiona@example.com',
      website: 'https://fiona.dev',
      phone: '+1-555-0130',
      department: 'Sales',
      role: 'Account Executive',
      salary: 78000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: false,
      startDate: '2021-12-01',
      location: 'Miami',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'B2B Sales, Closing',
      experience: '6 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 9,
      name: 'George Lucas',
      email: 'george@example.com',
      website: 'https://george.com',
      phone: '+1-555-0131',
      department: 'Engineering',
      role: 'Senior Developer',
      salary: 98000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2021-01-20',
      location: 'Portland',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'Java, Spring',
      experience: '9 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 10,
      name: 'Hannah Montana',
      email: 'hannah@example.com',
      website: 'https://hannah.io',
      phone: '+1-555-0132',
      department: 'Design',
      role: 'UX Designer',
      salary: 82000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2022-03-15',
      location: 'Denver',
      manager: 'Clark Kent',
      project: 'Omega',
      skillset: 'Figma, User Research',
      experience: '5 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 11,
      name: 'Ian McKellen',
      email: 'ian@example.com',
      website: 'https://ian.dev',
      phone: '+1-555-0133',
      department: 'Engineering',
      role: 'DevOps Engineer',
      salary: 92000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2020-08-10',
      location: 'Phoenix',
      manager: 'Sarah Connor',
      project: 'Gamma',
      skillset: 'Docker, Kubernetes',
      experience: '7 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 12,
      name: 'Julia Roberts',
      email: 'julia@example.com',
      website: 'https://julia.com',
      phone: '+1-555-0134',
      department: 'Marketing',
      role: 'Social Media Manager',
      salary: 68000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: false,
      startDate: '2022-11-05',
      location: 'Nashville',
      manager: 'Mike Ross',
      project: 'Alpha',
      skillset: 'Social Media, Ads',
      experience: '4 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 13,
      name: 'Kevin Hart',
      email: 'kevin@example.com',
      website: 'https://kevin.io',
      phone: '+1-555-0135',
      department: 'Sales',
      role: 'Sales Manager',
      salary: 88000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2019-05-12',
      location: 'Dallas',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'Leadership, Strategy',
      experience: '10 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 14,
      name: 'Laura Croft',
      email: 'laura@example.com',
      website: 'https://laura.dev',
      phone: '+1-555-0136',
      department: 'Engineering',
      role: 'QA Engineer',
      salary: 75000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-07-18',
      location: 'Atlanta',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'Testing, Automation',
      experience: '5 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 15,
      name: 'Michael Scott',
      email: 'michael@example.com',
      website: 'https://michael.com',
      phone: '+1-555-0137',
      department: 'Sales',
      role: 'Regional Manager',
      salary: 95000,
      status: 'Active',
      rating: 3,
      active: true,
      verified: true,
      startDate: '2018-02-01',
      location: 'Scranton',
      manager: 'David Wallace',
      project: 'Beta',
      skillset: 'Management, Sales',
      experience: '12 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 16,
      name: 'Nancy Drew',
      email: 'nancy@example.com',
      website: 'https://nancy.io',
      phone: '+1-555-0138',
      department: 'HR',
      role: 'Recruiter',
      salary: 65000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: false,
      startDate: '2023-01-10',
      location: 'Minneapolis',
      manager: 'Bruce Wayne',
      project: 'Delta',
      skillset: 'Sourcing, Interviews',
      experience: '3 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 17,
      name: 'Oscar Martinez',
      email: 'oscar@example.com',
      website: 'https://oscar.dev',
      phone: '+1-555-0139',
      department: 'Finance',
      role: 'Accountant',
      salary: 72000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2020-06-22',
      location: 'Philadelphia',
      manager: 'Angela Martin',
      project: 'Sigma',
      skillset: 'Accounting, Excel',
      experience: '8 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 18,
      name: 'Pam Beesly',
      email: 'pam@example.com',
      website: 'https://pam.com',
      phone: '+1-555-0140',
      department: 'Design',
      role: 'Graphic Designer',
      salary: 70000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-04-15',
      location: 'Scranton',
      manager: 'Clark Kent',
      project: 'Omega',
      skillset: 'Photoshop, Illustrator',
      experience: '6 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 19,
      name: 'Quentin Tarantino',
      email: 'quentin@example.com',
      website: 'https://quentin.io',
      phone: '+1-555-0141',
      department: 'Engineering',
      role: 'Full Stack Developer',
      salary: 94000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2020-09-08',
      location: 'San Diego',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'MERN, GraphQL',
      experience: '7 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 20,
      name: 'Rachel Green',
      email: 'rachel@example.com',
      website: 'https://rachel.dev',
      phone: '+1-555-0142',
      department: 'Marketing',
      role: 'Brand Manager',
      salary: 79000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: false,
      startDate: '2022-02-20',
      location: 'New York',
      manager: 'Mike Ross',
      project: 'Alpha',
      skillset: 'Branding, Strategy',
      experience: '5 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 21,
      name: 'Steve Rogers',
      email: 'steve@example.com',
      website: 'https://steve.com',
      phone: '+1-555-0143',
      department: 'Engineering',
      role: 'Security Engineer',
      salary: 102000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2019-12-01',
      location: 'Washington DC',
      manager: 'Sarah Connor',
      project: 'Gamma',
      skillset: 'Security, Pentesting',
      experience: '9 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 22,
      name: 'Tony Stark',
      email: 'tony@example.com',
      website: 'https://tony.io',
      phone: '+1-555-0144',
      department: 'Engineering',
      role: 'Tech Lead',
      salary: 115000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2018-05-15',
      location: 'Malibu',
      manager: 'Pepper Potts',
      project: 'Phoenix',
      skillset: 'AI, ML, IoT',
      experience: '15 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 23,
      name: 'Uma Thurman',
      email: 'uma@example.com',
      website: 'https://uma.dev',
      phone: '+1-555-0145',
      department: 'Sales',
      role: 'Enterprise Sales',
      salary: 86000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-10-12',
      location: 'Las Vegas',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'Enterprise, Contracts',
      experience: '7 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 24,
      name: 'Victor Hugo',
      email: 'victor@example.com',
      website: 'https://victor.com',
      phone: '+1-555-0146',
      department: 'Design',
      role: 'UI Designer',
      salary: 76000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: false,
      startDate: '2022-08-25',
      location: 'Portland',
      manager: 'Clark Kent',
      project: 'Omega',
      skillset: 'UI Design, Prototyping',
      experience: '4 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 25,
      name: 'Wanda Vision',
      email: 'wanda@example.com',
      website: 'https://wanda.io',
      phone: '+1-555-0147',
      department: 'Engineering',
      role: 'Mobile Developer',
      salary: 89000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2020-11-30',
      location: 'Westview',
      manager: 'Sarah Connor',
      project: 'Gamma',
      skillset: 'React Native, Swift',
      experience: '6 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 26,
      name: 'Xavier Charles',
      email: 'xavier@example.com',
      website: 'https://xavier.dev',
      phone: '+1-555-0148',
      department: 'HR',
      role: 'Training Manager',
      salary: 73000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-05-20',
      location: 'Salem',
      manager: 'Bruce Wayne',
      project: 'Delta',
      skillset: 'Training, L&D',
      experience: '5 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 27,
      name: 'Yvonne Strahovski',
      email: 'yvonne@example.com',
      website: 'https://yvonne.com',
      phone: '+1-555-0149',
      department: 'Marketing',
      role: 'Email Marketing',
      salary: 64000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: false,
      startDate: '2023-03-08',
      location: 'Tampa',
      manager: 'Mike Ross',
      project: 'Alpha',
      skillset: 'Mailchimp, Automation',
      experience: '3 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 28,
      name: 'Zachary Levi',
      email: 'zachary@example.com',
      website: 'https://zachary.io',
      phone: '+1-555-0150',
      department: 'Engineering',
      role: 'Backend Developer',
      salary: 91000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2020-07-14',
      location: 'Baltimore',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'Node.js, MongoDB',
      experience: '7 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 29,
      name: 'Amy Adams',
      email: 'amy@example.com',
      website: 'https://amy.dev',
      phone: '+1-555-0151',
      department: 'Sales',
      role: 'Sales Operations',
      salary: 71000,
      status: 'On Leave',
      rating: 4,
      active: false,
      verified: true,
      startDate: '2022-04-18',
      location: 'Detroit',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'Salesforce, Analytics',
      experience: '4 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 30,
      name: 'Ben Affleck',
      email: 'ben@example.com',
      website: 'https://ben.com',
      phone: '+1-555-0152',
      department: 'Finance',
      role: 'Financial Analyst',
      salary: 77000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-09-22',
      location: 'Boston',
      manager: 'Angela Martin',
      project: 'Sigma',
      skillset: 'Finance, Modeling',
      experience: '6 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 31,
      name: 'Cate Blanchett',
      email: 'cate@example.com',
      website: 'https://cate.io',
      phone: '+1-555-0153',
      department: 'Design',
      role: 'Creative Director',
      salary: 96000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2019-08-05',
      location: 'Los Angeles',
      manager: 'Clark Kent',
      project: 'Omega',
      skillset: 'Creative Strategy, Art',
      experience: '11 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 32,
      name: 'Daniel Craig',
      email: 'daniel@example.com',
      website: 'https://daniel.dev',
      phone: '+1-555-0154',
      department: 'Engineering',
      role: 'Cloud Architect',
      salary: 108000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2019-03-12',
      location: 'London',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'AWS, Azure, GCP',
      experience: '12 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 33,
      name: 'Emma Stone',
      email: 'emma@example.com',
      website: 'https://emma.com',
      phone: '+1-555-0155',
      department: 'Marketing',
      role: 'PR Manager',
      salary: 81000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-11-18',
      location: 'New York',
      manager: 'Mike Ross',
      project: 'Alpha',
      skillset: 'PR, Media Relations',
      experience: '6 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 34,
      name: 'Frank Sinatra',
      email: 'frank@example.com',
      website: 'https://frank.io',
      phone: '+1-555-0156',
      department: 'Sales',
      role: 'Channel Sales',
      salary: 74000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: false,
      startDate: '2022-06-10',
      location: 'Las Vegas',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'Partnerships, B2B',
      experience: '5 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 35,
      name: 'Grace Kelly',
      email: 'grace@example.com',
      website: 'https://grace.dev',
      phone: '+1-555-0157',
      department: 'HR',
      role: 'HR Specialist',
      salary: 67000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2022-12-01',
      location: 'Monaco',
      manager: 'Bruce Wayne',
      project: 'Delta',
      skillset: 'HR Operations, Benefits',
      experience: '4 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 36,
      name: 'Henry Cavill',
      email: 'henry@example.com',
      website: 'https://henry.com',
      phone: '+1-555-0158',
      department: 'Engineering',
      role: 'Data Engineer',
      salary: 97000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2020-10-08',
      location: 'London',
      manager: 'Sarah Connor',
      project: 'Gamma',
      skillset: 'ETL, Spark, SQL',
      experience: '8 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 37,
      name: 'Isla Fisher',
      email: 'isla@example.com',
      website: 'https://isla.io',
      phone: '+1-555-0159',
      department: 'Design',
      role: 'Product Designer',
      salary: 84000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2021-02-14',
      location: 'Sydney',
      manager: 'Clark Kent',
      project: 'Omega',
      skillset: 'Product Design, UX',
      experience: '7 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 38,
      name: 'Jake Gyllenhaal',
      email: 'jake@example.com',
      website: 'https://jake.dev',
      phone: '+1-555-0160',
      department: 'Engineering',
      role: 'Frontend Developer',
      salary: 87000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-08-20',
      location: 'San Francisco',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'Vue.js, TypeScript',
      experience: '6 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 39,
      name: 'Kate Winslet',
      email: 'kate@example.com',
      website: 'https://kate.com',
      phone: '+1-555-0161',
      department: 'Marketing',
      role: 'Marketing Analyst',
      salary: 69000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: false,
      startDate: '2022-09-15',
      location: 'London',
      manager: 'Mike Ross',
      project: 'Alpha',
      skillset: 'Analytics, Reporting',
      experience: '5 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 40,
      name: 'Leo DiCaprio',
      email: 'leo@example.com',
      website: 'https://leo.io',
      phone: '+1-555-0162',
      department: 'Sales',
      role: 'Business Development',
      salary: 83000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2020-12-10',
      location: 'Hollywood',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'BD, Partnerships',
      experience: '8 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 41,
      name: 'Morgan Freeman',
      email: 'morgan@example.com',
      website: 'https://morgan.dev',
      phone: '+1-555-0163',
      department: 'Engineering',
      role: 'Solutions Architect',
      salary: 112000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2018-07-01',
      location: 'Memphis',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'Architecture, Design',
      experience: '14 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 42,
      name: 'Natalie Portman',
      email: 'natalie@example.com',
      website: 'https://natalie.com',
      phone: '+1-555-0164',
      department: 'Design',
      role: 'Design Lead',
      salary: 93000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2020-04-22',
      location: 'Jerusalem',
      manager: 'Clark Kent',
      project: 'Omega',
      skillset: 'Leadership, Design',
      experience: '9 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 43,
      name: 'Owen Wilson',
      email: 'owen@example.com',
      website: 'https://owen.io',
      phone: '+1-555-0165',
      department: 'Sales',
      role: 'Inside Sales Rep',
      salary: 66000,
      status: 'Active',
      rating: 3,
      active: true,
      verified: false,
      startDate: '2023-04-05',
      location: 'Dallas',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'Cold Calling, Demos',
      experience: '2 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 44,
      name: 'Penelope Cruz',
      email: 'penelope@example.com',
      website: 'https://penelope.dev',
      phone: '+1-555-0166',
      department: 'Marketing',
      role: 'Event Manager',
      salary: 75000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2021-12-20',
      location: 'Madrid',
      manager: 'Mike Ross',
      project: 'Alpha',
      skillset: 'Events, Coordination',
      experience: '6 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 45,
      name: 'Quinn Fabray',
      email: 'quinn@example.com',
      website: 'https://quinn.com',
      phone: '+1-555-0167',
      department: 'HR',
      role: 'Benefits Coordinator',
      salary: 63000,
      status: 'Active',
      rating: 4,
      active: true,
      verified: true,
      startDate: '2022-10-12',
      location: 'Columbus',
      manager: 'Bruce Wayne',
      project: 'Delta',
      skillset: 'Benefits, Payroll',
      experience: '3 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 46,
      name: 'Ryan Gosling',
      email: 'ryan@example.com',
      website: 'https://ryan.io',
      phone: '+1-555-0168',
      department: 'Engineering',
      role: 'ML Engineer',
      salary: 104000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2019-09-18',
      location: 'Toronto',
      manager: 'Sarah Connor',
      project: 'Gamma',
      skillset: 'ML, TensorFlow, PyTorch',
      experience: '10 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 47,
      name: 'Scarlett Johansson',
      email: 'scarlett@example.com',
      website: 'https://scarlett.dev',
      phone: '+1-555-0169',
      department: 'Design',
      role: 'Interaction Designer',
      salary: 80000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2021-06-25',
      location: 'New York',
      manager: 'Clark Kent',
      project: 'Omega',
      skillset: 'Interaction, Motion',
      experience: '7 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 48,
      name: 'Tom Hanks',
      email: 'tom@example.com',
      website: 'https://tom.com',
      phone: '+1-555-0170',
      department: 'Sales',
      role: 'Key Account Manager',
      salary: 90000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2019-11-08',
      location: 'Oakland',
      manager: 'Tom Hardy',
      project: 'Beta',
      skillset: 'Account Management',
      experience: '11 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 49,
      name: 'Viola Davis',
      email: 'viola@example.com',
      website: 'https://viola.io',
      phone: '+1-555-0171',
      department: 'Finance',
      role: 'Controller',
      salary: 99000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2018-10-15',
      location: 'Providence',
      manager: 'Angela Martin',
      project: 'Sigma',
      skillset: 'Finance, Compliance',
      experience: '13 years',
      avatar: '/build/assets/images/logo.png',
    },
    {
      id: 50,
      name: 'Will Smith',
      email: 'will@example.com',
      website: 'https://will.dev',
      phone: '+1-555-0172',
      department: 'Engineering',
      role: 'Site Reliability Engineer',
      salary: 101000,
      status: 'Active',
      rating: 5,
      active: true,
      verified: true,
      startDate: '2019-06-30',
      location: 'Philadelphia',
      manager: 'Sarah Connor',
      project: 'Phoenix',
      skillset: 'SRE, Monitoring',
      experience: '9 years',
      avatar: '/build/assets/images/logo.png',
    },
  ];

  const columns = [
    { id: 'id', field: 'id', label: 'ID', sortable: true, width: '60px' },
    { id: 'name', field: 'name', label: 'Name', sortable: true, width: '150px' },
    { id: 'email', field: 'email', label: 'Email', sortable: true, width: '200px' },
    { id: 'phone', field: 'phone', label: 'Phone', sortable: true, width: '130px' },
    { id: 'department', field: 'department', label: 'Department', sortable: true, filterable: true, width: '120px' },
    { id: 'role', field: 'role', label: 'Role', sortable: true, width: '180px' },
    {
      id: 'salary',
      field: 'salary',
      label: 'Salary',
      sortable: true,
      width: '110px',
      format: function (value) {
        return '$' + value.toLocaleString();
      },
    },
    { id: 'status', field: 'status', label: 'Status', sortable: true, filterable: true, width: '100px' },
    { id: 'location', field: 'location', label: 'Location', sortable: true, width: '150px' },
    { id: 'manager', field: 'manager', label: 'Manager', sortable: true, width: '140px' },
    { id: 'project', field: 'project', label: 'Project', sortable: true, filterable: true, width: '120px' },
    { id: 'skillset', field: 'skillset', label: 'Skills', sortable: false, width: '180px' },
    { id: 'experience', field: 'experience', label: 'Experience', sortable: true, width: '120px' },
    { id: 'startDate', field: 'startDate', label: 'Start Date', sortable: true, width: '120px' },
    {
      id: 'verified',
      field: 'verified',
      label: 'Verified',
      sortable: true,
      width: '90px',
      format: function (value) {
        return value ? '✓' : '✗';
      },
    },
  ];

  function showMasterTier() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>✨ Master-Tier: Enterprise Material Archetypes</h3>
          <p style="color: #6b7280; margin-bottom: 24px;">High-fidelity substrates for cinematic data density.</p>
          
          <div style="display: grid; grid-template-columns: 1fr; gap: 40px;">
            <div>
              <h4 style="margin-bottom: 12px; color:var(--text-primary,#0f172a); display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; background: var(--accent-blue,#2563eb); border-radius: 50%;"></span>
                Glassmorphism Substrate
              </h4>
              <div style="padding: 40px; background: linear-gradient(135deg, #6366f1 0%, #a855f7 100%); border-radius: 12px;">
                <ui-advanced-data-table id="glassTable" variant="glass" theme="dark"></ui-advanced-data-table>
              </div>
            </div>

            <div>
              <h4 style="margin-bottom: 12px; color:var(--text-primary,#0f172a); display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; background: #10b981; border-radius: 50%;"></span>
                Raised Relief (Light Theme)
              </h4>
              <ui-advanced-data-table id="raisedTable" variant="raised" color="success"></ui-advanced-data-table>
            </div>

            <div>
              <h4 style="margin-bottom: 12px; color:var(--text-primary,#0f172a); display: flex; align-items: center; gap: 8px;">
                <span style="width: 8px; height: 8px; background: var(--accent-red,#ef4444); border-radius: 50%;"></span>
                Diagnostic Atmospheric Glow (Danger)
              </h4>
              <ui-advanced-data-table id="dangerTable" color="danger"></ui-advanced-data-table>
            </div>
          </div>
        </div>
      `;

    setTimeout(() => {
      const miniData = sampleData.slice(0, 5);
      const miniCols = [
        { id: 'name', field: 'name', label: 'Identity' },
        { id: 'department', field: 'department', label: 'Sector' },
        { id: 'salary', field: 'salary', label: 'Capital', format: v => '$' + v.toLocaleString() },
        { id: 'status', field: 'status', label: 'Condition' },
        { id: 'rating', field: 'rating', label: 'Evaluation', type: 'rating' },
      ];

      ['glassTable', 'raisedTable', 'dangerTable'].forEach(id => {
        const table = document.getElementById(id);
        if (table) {
          table.data = miniData;
          table.columns = miniCols;
          table.pagination = false;
        }
      });
    }, 100);
  }

  function showBasicTable() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Basic Data Table - 50 Records with Scrolling</h3>
          <div style="overflow: auto; max-height: 600px; border:1px solid var(--border-default,#e5e7eb); border-radius: 8px;">
            <ui-advanced-data-table id="basicTable"></ui-advanced-data-table>
          </div>
          
          <div style="margin-top: 16px; padding: 12px; background-color: #f0f9ff; border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              💡 Table with 50 records and 15 columns. Scroll horizontally and vertically to view all data. Click column headers to sort.
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('basicTable');
      if (table) {
        table.data = sampleData;
        table.columns = columns;
        table.sortable = true;
        table.filterable = true;
        table.searchable = true;
      }
    }, 100);
  }

  function showTableWithSelection() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Table with Row Selection</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Select single or multiple rows with checkboxes</p>
          <ui-advanced-data-table id="selectTable"></ui-advanced-data-table>
          
          <div id="selectionInfo" style="margin-top: 16px; padding: 12px; background-color: var(--accent-green-soft,#dcfce7); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-green,#065f46); font-size: 14px;">
              Selected rows: <strong>0</strong>
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('selectTable');
      if (table) {
        table.data = sampleData.slice(0, 5);
        table.columns = columns.slice(0, 5);
        table.sortable = true;
        table.selectable = true;
        table.pagination = false;

        table.addEventListener('rowSelect', e => {
          const infoDiv = document.getElementById('selectionInfo');
          if (infoDiv) {
            infoDiv.innerHTML = `
                <p style="margin: 0; color:var(--accent-green,#065f46); font-size: 14px;">
                  Selected rows: <strong>${e.detail.selectedRows.length}</strong>
                </p>
              `;
          }
        });

        table.addEventListener('rowDeselect', e => {
          const infoDiv = document.getElementById('selectionInfo');
          if (infoDiv) {
            infoDiv.innerHTML = `
                <p style="margin: 0; color:var(--accent-green,#065f46); font-size: 14px;">
                  Selected rows: <strong>${e.detail.selectedRows.length}</strong>
                </p>
              `;
          }
        });
      }
    }, 100);
  }

  function showRowActions() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Row Actions Menu</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">3-dot menu for each row with edit/delete actions</p>
          <ui-advanced-data-table id="actionsTable"></ui-advanced-data-table>
          
          <div id="actionLog" style="margin-top: 16px; padding: 12px; background-color: var(--accent-yellow-soft,#fef3c7); border-radius: 6px;">
            <h4 style="margin: 0 0 8px 0; color:var(--accent-yellow,#92400e); font-size: 14px;">Action Log:</h4>
            <div id="logContent" style="color: #78350f; font-size: 14px; font-family: monospace;">
              <p style="margin: 0;">Click the 3-dot menu on any row to perform actions...</p>
            </div>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('actionsTable');
      if (table) {
        table.data = sampleData.slice(0, 6);
        table.columns = [
          { id: 'name', field: 'name', label: 'Name', sortable: true },
          { id: 'email', field: 'email', label: 'Email', sortable: true },
          { id: 'department', field: 'department', label: 'Department', sortable: true },
          { id: 'role', field: 'role', label: 'Role', sortable: true },
          { id: 'status', field: 'status', label: 'Status', sortable: true },
        ];
        table.sortable = true;
        table.showActions = true;
        table.pagination = false;

        const logContent = document.getElementById('logContent');
        const addLog = function (message, color) {
          if (logContent) {
            const timestamp = new Date().toLocaleTimeString();
            const logEntry = document.createElement('p');
            logEntry.style.margin = '4px 0';
            logEntry.style.color = color || '#78350f';
            logEntry.textContent = '[' + timestamp + '] ' + message;
            logContent.appendChild(logEntry);

            // Keep only last 5 logs
            while (logContent.children.length > 5) {
              logContent.removeChild(logContent.firstChild);
            }
          }
        };

        table.addEventListener('rowEdit', function (e) {
          addLog('Edit action for: ' + e.detail.row.name + ' (ID: ' + e.detail.row.id + ')', '#1d4ed8');
        });

        table.addEventListener('rowDelete', function (e) {
          addLog('Delete action for: ' + e.detail.row.name + ' (ID: ' + e.detail.row.id + ')', '#dc2626');
        });

        table.addEventListener('rowAction', function (e) {
          addLog('Custom action "' + e.detail.action + '" for: ' + e.detail.row.name, '#7c3aed');
        });
      }
    }, 100);
  }

  function showEditableTable() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Editable Table Mode</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">All cells are editable with appropriate input types based on data type</p>
          
          <ui-advanced-data-table id="editableTable"></ui-advanced-data-table>
          
          <div id="editLog" style="margin-top: 16px; padding: 12px; background-color: #ecfdf5; border-radius: 6px;">
            <h4 style="margin: 0 0 8px 0; color:var(--accent-green,#065f46); font-size: 14px;">Edit Log:</h4>
            <div id="editLogContent" style="color:var(--accent-green,#047857); font-size: 13px; font-family: monospace; max-height: 200px; overflow-y: auto;">
              <p style="margin: 0;">Edit any cell to see changes logged here...</p>
            </div>
          </div>

          <div style="margin-top: 16px; padding: 12px; background-color:var(--accent-blue-soft,#eff6ff); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              💡 <strong>Features:</strong> Each column type renders appropriate input (text, number, date, email, checkbox, switch, rating, select, etc.)
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('editableTable');
      if (table) {
        const editableData = [
          {
            id: 1,
            name: 'John Doe',
            email: 'john@example.com',
            age: 28,
            website: 'https://johndoe.com',
            phone: '+1-555-0123',
            salary: 95000,
            startDate: '2022-01-15',
            rating: 4,
            active: true,
            verified: true,
          },
          {
            id: 2,
            name: 'Jane Smith',
            email: 'jane@example.com',
            age: 32,
            website: 'https://janesmith.io',
            phone: '+1-555-0124',
            salary: 85000,
            startDate: '2021-06-10',
            rating: 5,
            active: true,
            verified: false,
          },
          {
            id: 3,
            name: 'Bob Johnson',
            email: 'bob@example.com',
            age: 45,
            website: 'https://bobjohnson.dev',
            phone: '+1-555-0125',
            salary: 105000,
            startDate: '2020-03-22',
            rating: 3,
            active: false,
            verified: true,
          },
          {
            id: 4,
            name: 'Alice Williams',
            email: 'alice@example.com',
            age: 29,
            website: 'https://alice.dev',
            phone: '+1-555-0126',
            salary: 70000,
            startDate: '2021-09-05',
            rating: 4,
            active: true,
            verified: true,
          },
        ];

        const editableColumns = [
          { id: 'name', field: 'name', label: 'Name', type: 'text', editable: true },
          { id: 'email', field: 'email', label: 'Email', type: 'email', editable: true },
          { id: 'age', field: 'age', label: 'Age', type: 'number', editable: true },
          { id: 'website', field: 'website', label: 'Website', type: 'url', editable: true },
          { id: 'phone', field: 'phone', label: 'Phone', type: 'tel', editable: true },
          { id: 'salary', field: 'salary', label: 'Salary', type: 'number', editable: true },
          { id: 'startDate', field: 'startDate', label: 'Start Date', type: 'date', editable: true },
          { id: 'rating', field: 'rating', label: 'Rating', type: 'rating', maxRating: 5, editable: true },
          { id: 'active', field: 'active', label: 'Active', type: 'switch', editable: true },
          { id: 'verified', field: 'verified', label: 'Verified', type: 'checkbox', editable: true },
        ];

        table.data = editableData;
        table.columns = editableColumns;
        table.editable = true;
        table.sortable = true;
        table.pagination = false;

        const editLogContent = document.getElementById('editLogContent');
        editLogContent.innerHTML = '';

        table.addEventListener('cellEdit', function (e) {
          const timestamp = new Date().toLocaleTimeString();
          const logEntry = document.createElement('p');
          logEntry.style.margin = '4px 0';
          logEntry.style.padding = '6px 8px';
          logEntry.style.background = '#fff';
          logEntry.style.borderRadius = '4px';
          logEntry.style.borderLeft = '3px solid #10b981';
          logEntry.textContent = '[' + timestamp + '] Row ' + e.detail.rowId + ' - ' + e.detail.field + ': ' + JSON.stringify(e.detail.value);
          editLogContent.appendChild(logEntry);

          if (editLogContent.children.length > 10) {
            editLogContent.removeChild(editLogContent.firstChild);
          }

          editLogContent.scrollTop = editLogContent.scrollHeight;
        });
      }
    }, 100);
  }

  function showSkeletonLoading() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Skeleton Loading State</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Animated skeleton screens while data loads</p>
          
          <div style="display: flex; gap: 12px; margin-bottom: 16px;">
            <ui-button id="btnLoadSkel" variant="outline" color="success" label="Load with Skeleton" style="--btn-bg: #10b981;"></ui-button>
            <ui-button id="btnLoadSpinner" variant="outline" color="success" label="Load with Spinner" style="--btn-bg: #10b981;"></ui-button>
          </div>
          
          <div id="skeletonDemo"></div>
          
          <div style="margin-top: 16px; padding: 12px; background-color: #f0f9ff; border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              ✨ Skeleton loading provides better perceived performance by showing content placeholders.
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const bSkel = document.getElementById('btnLoadSkel');
      const bSpin = document.getElementById('btnLoadSpinner');
      if (bSkel) bSkel.addEventListener('click', () => loadWithSkeleton());
      if (bSpin) bSpin.addEventListener('click', () => loadWithSpinner());
      loadWithSkeleton();
    }, 100);

    function loadWithSkeleton() {
      const container = document.getElementById('skeletonDemo');
      if (container) {
        container.innerHTML = '<ui-advanced-data-table id="skeletonTable" loading="true" show-skeleton="true" skeleton-rows="5"></ui-advanced-data-table>';

        setTimeout(() => {
          const table = document.getElementById('skeletonTable');
          if (table) {
            table.columns = columns.slice(0, 5);

            setTimeout(() => {
              table.data = sampleData.slice(0, 5);
              table.loading = false;
              table.pagination = false;
            }, 2000);
          }
        }, 100);
      }
    }

    function loadWithSpinner() {
      const container = document.getElementById('skeletonDemo');
      if (container) {
        container.innerHTML = '<ui-advanced-data-table id="spinnerTable" loading="true" show-skeleton="false"></ui-advanced-data-table>';

        setTimeout(() => {
          const table = document.getElementById('spinnerTable');
          if (table) {
            table.columns = columns.slice(0, 5);

            setTimeout(() => {
              table.data = sampleData.slice(0, 5);
              table.loading = false;
              table.pagination = false;
            }, 2000);
          }
        }, 100);
      }
    }
  }

  function showColumnGrouping() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Column Grouping (Multi-Level Headers)</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Group related columns under common parent headers</p>
          <ui-advanced-data-table id="columnGroupTable"></ui-advanced-data-table>
          
          <div style="margin-top: 16px; padding: 12px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 6px;">
            <p style="margin: 0; color: var(--accent-green,#166534); font-size: 14px;">
              ✓ Column grouping organizes related data with hierarchical headers for better visual structure.
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('columnGroupTable');
      if (table) {
        table.columns = [
          { id: 'id', field: 'id', label: 'ID', width: '70px' },
          {
            id: 'personal',
            label: 'Personal Information',
            children: [
              { id: 'name', field: 'name', label: 'Name', sortable: true },
              { id: 'email', field: 'email', label: 'Email', type: 'email' },
              { id: 'phone', field: 'phone', label: 'Phone', type: 'tel' },
            ],
          },
          {
            id: 'employment',
            label: 'Employment Details',
            children: [
              { id: 'department', field: 'department', label: 'Department', sortable: true },
              { id: 'role', field: 'role', label: 'Role' },
              {
                id: 'salary',
                field: 'salary',
                label: 'Salary',
                format: function (v) {
                  return '$' + v.toLocaleString();
                },
              },
            ],
          },
          {
            id: 'status_info',
            label: 'Status',
            children: [
              { id: 'status', field: 'status', label: 'Employment Status' },
              { id: 'active', field: 'active', label: 'Active', type: 'switch', align: 'center' },
            ],
          },
        ];
        table.data = sampleData.slice(0, 5);
        table.columnGrouping = true;
        table.pagination = false;
      }
    }, 100);
  }

  function showRowGrouping() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Row Grouping</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Group rows by column values with expand/collapse functionality</p>
          
          <div style="display: flex; gap: 8px; flex-wrap: wrap; margin-bottom: 16px;">
            <ui-button id="btnGrpDept" variant="outline" color="secondary" label="Group by Department" size="md"ui-button>
            <ui-button id="btnGrpStatus" variant="outline" color="secondary" label="Group by Status" size="md"ui-button>
            <ui-button id="btnGrpClear" variant="outline" color="secondary" label="Clear Grouping" size="md"ui-button>
          </div>
          
          <ui-advanced-data-table id="rowGroupTable"></ui-advanced-data-table>
          
          <div style="margin-top: 16px; padding: 12px; background-color: var(--accent-yellow-soft,#fef3c7); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-yellow,#92400e); font-size: 14px;">
              💡 Click on group headers to expand/collapse groups. Each group shows item count.
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('rowGroupTable');
      if (table) {
        table.columns = [
          { id: 'name', field: 'name', label: 'Name', sortable: true },
          { id: 'email', field: 'email', label: 'Email', type: 'email' },
          { id: 'department', field: 'department', label: 'Department', sortable: true, groupable: true },
          { id: 'status', field: 'status', label: 'Status', groupable: true },
          {
            id: 'salary',
            field: 'salary',
            label: 'Salary',
            format: function (v) {
              return '$' + v.toLocaleString();
            },
          },
        ];
        table.data = sampleData;
        table.pagination = false;
        groupByDepartment();

        const bDept = document.getElementById('btnGrpDept');
        const bStatus = document.getElementById('btnGrpStatus');
        const bClear = document.getElementById('btnGrpClear');
        if (bDept) bDept.addEventListener('click', () => groupByDepartment());
        if (bStatus) bStatus.addEventListener('click', () => groupByStatus());
        if (bClear) bClear.addEventListener('click', () => clearGrouping());
      }
    }, 100);

    function groupByDepartment() {
      const table = document.getElementById('rowGroupTable');
      if (table) {
        table.groupBy = 'department';
        table.expandGroupsByDefault = true;
        table.showGroupCount = true;
      }
    }

    function groupByStatus() {
      const table = document.getElementById('rowGroupTable');
      if (table) {
        table.groupBy = 'status';
        table.expandGroupsByDefault = true;
        table.showGroupCount = true;
      }
    }

    function clearGrouping() {
      const table = document.getElementById('rowGroupTable');
      if (table) {
        table.groupBy = '';
      }
    }
  }

  function showInputTypes() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Multiple Cell Input Types</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Rich input types with editable cells - double-click to edit</p>
          <ui-advanced-data-table id="inputTypesTable" editable="true"></ui-advanced-data-table>
          
          <div style="margin-top: 16px; padding: 12px; background-color:var(--accent-blue-soft,#eff6ff); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              🎨 Double-click cells to edit. Available types:
            </p>
            <ul style="margin: 8px 0 0 20px; color:var(--accent-blue,#1e40af); font-size: 13px; line-height: 1.8;">
              <li><strong>Text, Number, Email, URL, Tel:</strong> Standard inputs</li>
              <li><strong>Date, Time, DateTime:</strong> Date/time pickers</li>
              <li><strong>Checkbox, Switch:</strong> Toggle controls</li>
              <li><strong>Rating:</strong> Star rating (click stars)</li>
              <li><strong>Select:</strong> Dropdown selection</li>
              <li><strong>Image:</strong> Display images</li>
            </ul>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('inputTypesTable');
      if (table) {
        table.columns = [
          {
            id: 'avatar',
            field: 'avatar',
            label: 'Avatar',
            type: 'image',
            align: 'center',
            width: '80px',
            imageStyle: { width: '40px', height: '40px', borderRadius: '50%' },
          },
          { id: 'name', field: 'name', label: 'Name (Text)', type: 'text', editable: true },
          { id: 'email', field: 'email', label: 'Email', type: 'email', editable: true },
          { id: 'phone', field: 'phone', label: 'Phone', type: 'tel', editable: true },
          { id: 'website', field: 'website', label: 'Website', type: 'url', editable: true },
          { id: 'rating', field: 'rating', label: 'Rating', type: 'rating', editable: true, maxRating: 5, align: 'center' },
          { id: 'active', field: 'active', label: 'Active', type: 'switch', editable: true, align: 'center' },
          { id: 'verified', field: 'verified', label: 'Verified', type: 'checkbox', editable: true, align: 'center' },
          { id: 'startDate', field: 'startDate', label: 'Start Date', type: 'date', editable: true },
          {
            id: 'status',
            field: 'status',
            label: 'Status',
            type: 'select',
            editable: true,
            selectOptions: [
              { label: 'Active', value: 'Active' },
              { label: 'On Leave', value: 'On Leave' },
              { label: 'Inactive', value: 'Inactive' },
            ],
          },
        ];
        table.data = sampleData.slice(0, 5);
        table.pagination = false;
      }
    }, 100);
  }

  function showInteractiveTable() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>🎮 Interactive Playground</h3>
          
          <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(180px, 1fr)); gap: 12px; margin-bottom: 16px;">
            <ui-button id="btnLoadComb" variant="outline" color="warning" label="🚀 Load Demo" size="md"ui-button>
            <ui-button id="btnToggleSkel" variant="outline" color="info" label="Toggle Skeleton" size="md"ui-button>
            <ui-button id="btnToggleGrp" variant="outline" color="primary" label="Toggle Grouping" size="md"ui-button>
            <ui-button id="btnToggleSel" variant="outline" color="success" label="Toggle Selection" size="md"ui-button>
            <ui-button id="btnToggleAct" variant="outline" color="info" label="Toggle Actions" size="md"ui-button>
            <ui-button id="btnToggleEdi" variant="outline" color="warning" label="Toggle Editable" size="md"ui-button>
            <ui-button id="btnToggleTree" variant="outline" color="success" label="🌲 Toggle Tree" size="md"ui-button>
          </div>
          
          <div id="playgroundStatus" style="padding: 12px; background-color: #e0e7ff; border-radius: 6px; margin-bottom: 16px; font-size: 14px; color: #3730a3;">
            <strong>Current Settings:</strong> <span id="statusText">Loading...</span>
          </div>
          
          <ui-advanced-data-table 
            id="combinedTable" 
            selectable="true" 
            show-skeleton="true"
            skeleton-rows="6"></ui-advanced-data-table>
          
          <div style="margin-top: 16px; padding: 12px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 6px;">
            <p style="margin: 0; color: var(--accent-green,#166534); font-size: 14px;">
              🎯 <strong>Interactive Features:</strong> Skeleton Loading, Column Grouping, Row Grouping, Selection, Row Actions, Editable Mode, Sorting, Filtering, Pagination
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const bLoad = document.getElementById('btnLoadComb');
      const bSkel = document.getElementById('btnToggleSkel');
      const bGrp = document.getElementById('btnToggleGrp');
      const bSel = document.getElementById('btnToggleSel');
      const bAct = document.getElementById('btnToggleAct');
      const bEdi = document.getElementById('btnToggleEdi');
      const bTree = document.getElementById('btnToggleTree');

      if (bLoad) bLoad.addEventListener('click', () => loadCombinedDemo());
      if (bSkel) bSkel.addEventListener('click', () => toggleSkeleton());
      if (bGrp) bGrp.addEventListener('click', () => toggleGrouping());
      if (bSel) bSel.addEventListener('click', () => toggleSelection());
      if (bAct) bAct.addEventListener('click', () => toggleActions());
      if (bEdi) bEdi.addEventListener('click', () => toggleEditable());
      if (bTree) bTree.addEventListener('click', () => toggleTreeMode());

      loadCombinedDemo();
    }, 100);

    function loadCombinedDemo() {
      const table = document.getElementById('combinedTable');
      if (table) {
        table.loading = true;
        updatePlaygroundStatus();

        setTimeout(() => {
          table.columns = [
            { id: 'id', field: 'id', label: 'ID', width: '70px', sortable: true },
            {
              id: 'personal',
              label: 'Personal Info',
              children: [
                {
                  id: 'avatar',
                  field: 'avatar',
                  label: 'Avatar',
                  type: 'image',
                  align: 'center',
                  width: '80px',
                  imageStyle: { width: '40px', height: '40px', borderRadius: '50%' },
                },
                { id: 'name', field: 'name', label: 'Name', sortable: true, editable: true },
                { id: 'email', field: 'email', label: 'Email', type: 'email', editable: true },
              ],
            },
            {
              id: 'work',
              label: 'Work Details',
              children: [
                { id: 'department', field: 'department', label: 'Department', sortable: true, groupable: true },
                { id: 'role', field: 'role', label: 'Role' },
                {
                  id: 'salary',
                  field: 'salary',
                  label: 'Salary',
                  format: function (v) {
                    return '$' + v.toLocaleString();
                  },
                },
              ],
            },
            {
              id: 'status_group',
              label: 'Status & Performance',
              children: [
                { id: 'status', field: 'status', label: 'Status', groupable: true },
                { id: 'rating', field: 'rating', label: 'Rating', type: 'rating', editable: true, maxRating: 5, align: 'center' },
                { id: 'active', field: 'active', label: 'Active', type: 'switch', editable: true, align: 'center' },
              ],
            },
          ];
          table.data = sampleData;
          table.loading = false;
          table.columnGrouping = true;
          table.sortable = true;
          table.filterable = true;
          table.searchable = true;
          table.pagination = true;
          table.pageSize = 5;
          table.editable = false;
          table.groupBy = '';
          table.showActions = false;
          updatePlaygroundStatus();
        }, 2000);
      }
    }

    function updatePlaygroundStatus() {
      const table = document.getElementById('combinedTable');
      const statusText = document.getElementById('statusText');
      if (!table || !statusText) return;

      const features = [];
      if (table.loading) features.push('Loading');
      if (table.selectable) features.push('Selection');
      if (table.editable) features.push('Editable');
      if (table.groupBy) features.push('Grouped by ' + table.groupBy);
      if (table.showActions) features.push('Row Actions');
      if (table.columnGrouping) features.push('Column Groups');
      if (table.sortable) features.push('Sortable');
      if (table.filterable) features.push('Filterable');
      if (table.pagination) features.push('Pagination');
      if (table.treeData) features.push('Tree Data');

      statusText.textContent = features.length > 0 ? features.join(', ') : 'None';
    }

    function toggleSkeleton() {
      const table = document.getElementById('combinedTable');
      if (table) {
        table.loading = !table.loading;
        updatePlaygroundStatus();
      }
    }

    function toggleGrouping() {
      const table = document.getElementById('combinedTable');
      if (table) {
        if (table.groupBy) {
          table.groupBy = '';
        } else {
          table.groupBy = 'department';
          table.expandGroupsByDefault = true;
          table.showGroupCount = true;
        }
        updatePlaygroundStatus();
      }
    }

    function toggleSelection() {
      const table = document.getElementById('combinedTable');
      if (table) {
        table.selectable = !table.selectable;
        updatePlaygroundStatus();
      }
    }

    function toggleActions() {
      const table = document.getElementById('combinedTable');
      if (table) {
        table.showActions = !table.showActions;
        updatePlaygroundStatus();
      }
    }

    function toggleEditable() {
      const table = document.getElementById('combinedTable');
      if (table) {
        table.editable = !table.editable;
        updatePlaygroundStatus();
      }
    }

    function toggleTreeMode() {
      const table = document.getElementById('combinedTable');
      if (table) {
        table.treeData = !table.treeData;

        if (table.treeData) {
          // Switch to tree data structure
          table.data = [
            {
              id: 'd1',
              name: 'Engineering',
              role: 'Department',
              status: 'Active',
              children: [
                { id: 1, name: 'John Doe', role: 'Senior Developer', status: 'Active' },
                { id: 2, name: 'Jane Smith', role: 'Junior Developer', status: 'Active' },
              ],
            },
            {
              id: 'd2',
              name: 'Marketing',
              role: 'Department',
              status: 'Active',
              children: [{ id: 4, name: 'Alice Williams', role: 'Sales Rep', status: 'On Leave' }],
            },
          ];
          // Simplified columns for tree view
          table.columns = [
            { id: 'name', field: 'name', label: 'Name', sortable: true, width: '250px' },
            { id: 'role', field: 'role', label: 'Role', sortable: true },
            { id: 'status', field: 'status', label: 'Status', sortable: true },
          ];
          table.pagination = false;
        } else {
          // Revert to sample flat data
          table.data = sampleData;
          table.columns = columns; // Reset to full columns
          table.pagination = true;
        }
        updatePlaygroundStatus();
      }
    }
  }

  // NEW ADVANCED FEATURES DEMOS

  function showColumnPinning() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>📌 Column Pinning</h3>
          <p style="color: #6b7280; margin-bottom: 16px;">Pin important columns to keep them visible while scrolling horizontally. Pinned columns stay fixed on the left or right side of the table.</p>
          
          <div style="margin-bottom: 16px; padding: 16px; background-color: var(--accent-yellow-soft,#fef3c7); border-radius: 6px; border-left: 4px solid #f59e0b;">
            <p style="margin: 0 0 8px 0; color: #78350f; font-size: 14px; font-weight: 600;">
              📖 How to use:
            </p>
            <ol style="margin: 0; padding-left: 20px; color: #78350f; font-size: 13px; line-height: 1.8;">
              <li>Click any <strong>blue/purple button</strong> below to pin a column to the left or right</li>
              <li>Scroll the table horizontally to see pinned columns stay in place</li>
              <li>Click <strong>gray buttons</strong> to unpin columns</li>
            </ol>
          </div>

          <div style="margin-bottom: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
            <ui-button id="btnPinNameL" variant="outline" color="success" label="📌 Pin Name (Left)" size="md"ui-button>
            <ui-button id="btnPinEmailL" variant="outline" color="primary" label="📌 Pin Email (Left)" size="md"ui-button>
            <ui-button id="btnPinSalaryR" variant="outline" color="secondary" label="📌 Pin Salary (Right)" size="md"ui-button>
            <ui-button id="btnPinDeptR" variant="outline" color="warning" label="📌 Pin Dept (Right)" size="md"ui-button>
            <ui-button id="btnUnpinName" variant="outline" color="secondary" label="❌ Unpin Name" size="md"ui-button>
            <ui-button id="btnUnpinEmail" variant="outline" color="secondary" label="❌ Unpin Email" size="md"ui-button>
            <ui-button id="btnUnpinSalary" variant="outline" color="secondary" label="❌ Unpin Salary" size="md"ui-button>
            <ui-button id="btnUnpinDept" variant="outline" color="secondary" label="❌ Unpin Dept" size="md"ui-button>
          </div>
          <ui-advanced-data-table id="pinningTable" column-pinning="true"></ui-advanced-data-table>
          <div id="pinningInfo" style="margin-top: 16px; padding: 12px; background-color:var(--accent-blue-soft,#eff6ff); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              💡 <strong>Currently Pinned:</strong> <span id="pinnedColumnsText" style="font-weight: 600;">None</span>
            </p>
            <p style="margin: 8px 0 0 0; color:var(--accent-blue,#1e40af); font-size: 12px;">
              Try scrolling the table horizontally after pinning columns to see them stay fixed!
            </p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('pinningTable');
      if (table) {
        // Add more columns
        table.columns = [
          { id: 'id', field: 'id', label: 'ID', sortable: true, width: '80px' },
          { id: 'name', field: 'name', label: 'Name', sortable: true },
          { id: 'email', field: 'email', label: 'Email', sortable: true },
          { id: 'department', field: 'department', label: 'Department', sortable: true, filterable: true },
          { id: 'role', field: 'role', label: 'Role', sortable: true },
          {
            id: 'salary',
            field: 'salary',
            label: 'Salary',
            sortable: true,
            format: function (value) {
              return '$' + value.toLocaleString();
            },
          },
          { id: 'status', field: 'status', label: 'Status', sortable: true, filterable: true },
          { id: 'rating', field: 'rating', label: 'Rating', sortable: true },
          { id: 'active', field: 'active', label: 'Active', sortable: true },
          { id: 'verified', field: 'verified', label: 'Verified', sortable: true },
          { id: 'startDate', field: 'startDate', label: 'Start Date', sortable: true },
          { id: 'avatar', field: 'avatar', label: 'Avatar', sortable: false },
        ];
        // Add more rows
        const moreRows = [];
        for (let i = 9; i <= 30; i++) {
          moreRows.push({
            id: i,
            name: 'User ' + i,
            email: 'user' + i + '@example.com',
            department: ['Engineering', 'Marketing', 'Sales', 'HR'][i % 4],
            role: ['Developer', 'Manager', 'Lead', 'Executive'][i % 4],
            salary: 50000 + i * 1000,
            status: ['Active', 'Inactive', 'On Leave'][i % 3],
            rating: (i % 5) + 1,
            active: i % 2 === 0,
            verified: i % 3 === 0,
            startDate: '2022-01-' + ((i % 28) + 1).toString().padStart(2, '0'),
            avatar: '/build/assets/images/logo.png' + (i % 70),
          });
        }
        table.data = sampleData.concat(moreRows);
        table.sortable = true;
        table.pagination = true;
        table.pageSize = 10;
        table.filterable = true;
        table.searchable = true;

        const updatePinnedStatus = () => {
          const pinnedText = document.getElementById('pinnedColumnsText');
          if (pinnedText) {
            const pinned = [];
            if (table.pinnedColumns?.left?.length) pinned.push(`Left: ${table.pinnedColumns.left.join(', ')}`);
            if (table.pinnedColumns?.right?.length) pinned.push(`Right: ${table.pinnedColumns.right.join(', ')}`);
            pinnedText.textContent = pinned.length > 0 ? pinned.join(' | ') : 'None';
          }
        };

        table.addEventListener('columnPin', updatePinnedStatus);

        const pinBtns = {
          btnPinNameL: ['name', 'left'],
          btnPinEmailL: ['email', 'left'],
          btnPinSalaryR: ['salary', 'right'],
          btnPinDeptR: ['department', 'right'],
          btnUnpinName: ['name', 'none'],
          btnUnpinEmail: ['email', 'none'],
          btnUnpinSalary: ['salary', 'none'],
          btnUnpinDept: ['department', 'none'],
        };

        Object.entries(pinBtns).forEach(([id, [col, pos]]) => {
          const btn = document.getElementById(id);
          if (btn) btn.addEventListener('click', () => pinColumn(col, pos));
        });

        updatePinnedStatus();
      }
      const pinColumn = function (columnId, position) {
        const table = document.getElementById('pinningTable');
        if (table && typeof table.handleColumnPin === 'function') {
          table.handleColumnPin(columnId, position);
        }
      };
    }, 100);
  }

  function showRowPinning() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>📍 Row Pinning</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Pin important rows to top or bottom</p>
          
          <div style="margin-bottom: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
            <ui-button id="btnPinRow1Top" variant="outline" color="success" label="📍 Pin Row 1 Top" size="md"ui-button>
            <ui-button id="btnPinRow8Bot" variant="outline" color="warning" label="📍 Pin Row 8 Bottom" size="md"ui-button>
            <ui-button id="btnUnpinRow1" variant="outline" color="secondary" label="❌ Unpin Row 1" size="md"ui-button>
            <ui-button id="btnUnpinRow8" variant="outline" color="secondary" label="❌ Unpin Row 8" size="md"ui-button>
          </div>

          <ui-advanced-data-table id="rowPinningTable" row-pinning="true"></ui-advanced-data-table>
          
          <div id="rowPinningInfo" style="margin-top: 16px; padding: 12px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-green,#065f46); font-size: 14px;">
              💡 Pinned rows: <strong id="pinnedRowsText">None</strong>
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('rowPinningTable');
      if (table) {
        table.data = sampleData;
        table.columns = columns.slice(0, 6);

        table.addEventListener('rowPin', e => {
          const { rowId, position } = e.detail;
          const pinnedText = document.getElementById('pinnedRowsText');
          if (pinnedText) {
            const pinned = [];
            if (table.pinnedRows?.top?.length) pinned.push(`Top: ${table.pinnedRows.top.join(', ')}`);
            if (table.pinnedRows?.bottom?.length) pinned.push(`Bottom: ${table.pinnedRows.bottom.join(', ')}`);
            pinnedText.textContent = pinned.length > 0 ? pinned.join(' | ') : 'None';
          }
          console.log('Row pinned:', rowId, position);
        });
      }

      const pinMap = {
        btnPinRow1Top: [1, 'top'],
        btnPinRow8Bot: [8, 'bottom'],
        btnUnpinRow1: [1, 'none'],
        btnUnpinRow8: [8, 'none'],
      };

      Object.entries(pinMap).forEach(([id, [rowId, pos]]) => {
        const btn = document.getElementById(id);
        if (btn) btn.addEventListener('click', () => pinRow(rowId, pos));
      });

      const pinRow = function (rowId, position) {
        const table = document.getElementById('rowPinningTable');
        if (table && typeof table.handleRowPin === 'function') {
          table.handleRowPin(rowId, position);
        }
      };
    }, 100);
  }

  function showRowReordering() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>↕️ Row Reordering</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Drag and drop rows to reorder them</p>

          <ui-advanced-data-table id="reorderTable" row-reorder="true"></ui-advanced-data-table>
          
          <div id="reorderInfo" style="margin-top: 16px; padding: 12px; background-color: var(--accent-yellow-soft,#fef3c7); border-radius: 6px;">
            <p style="margin: 0; color: #78350f; font-size: 14px;">
              💡 <strong>Drag the drag handle (⋮⋮)</strong> on each row to reorder. Last reorder: <strong id="lastReorderText">None</strong>
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('reorderTable');
      if (table) {
        table.data = [...sampleData];
        table.columns = columns.slice(0, 5);

        table.addEventListener('rowReorderEvent', e => {
          const { fromIndex, toIndex } = e.detail;
          const lastReorderText = document.getElementById('lastReorderText');
          if (lastReorderText) {
            lastReorderText.textContent = `Row ${fromIndex + 1} → Row ${toIndex + 1}`;
          }
          console.log('Row reordered:', e.detail);
        });
      }
    }, 100);
  }

  function showMultiFilter() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>🔍 Multi-Column Filtering</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Apply multiple filters to different columns</p>
          
          <div style="margin-bottom: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
            <ui-button id="btnFiltEng" variant="outline" color="success" label="+ Engineering Filter" size="md"ui-button>
            <ui-button id="btnFiltSal" variant="outline" color="secondary" label="+ Salary > 80K" size="md"ui-button>
            <ui-button id="btnFiltAct" variant="outline" color="success" label="+ Active Status" size="md"ui-button>
            <ui-button id="btnFiltClr" variant="outline" color="danger" label="🗑️ Clear All" size="md"ui-button>
          </div>

          <ui-advanced-data-table id="filterTable" multi-filter="true"></ui-advanced-data-table>
          
          <div id="filterInfo" style="margin-top: 16px; padding: 12px; background-color: var(--accent-blue-soft,#dbeafe); border-radius: 6px;">
            <p style="margin: 0; color: #1e3a8a; font-size: 14px;">
              💡 Active filters: <strong id="activeFiltersText">None</strong>
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('filterTable');
      if (table) {
        table.data = sampleData;
        table.columns = columns;
        table.sortable = true;

        function updateFilterInfo() {
          const activeFiltersText = document.getElementById('activeFiltersText');
          if (activeFiltersText && table.activeFilters) {
            const filters = [];
            table.activeFilters.forEach((value, key) => {
              if (value.length > 0) {
                filters.push(`${key}: ${value.length} filter(s)`);
              }
            });
            activeFiltersText.textContent = filters.length > 0 ? filters.join(', ') : 'None';
          }
        }

        const btnMap = {
          btnFiltEng: () => table.addFilter('department', 'equals', 'Engineering'),
          btnFiltSal: () => table.addFilter('salary', 'greaterThan', 80000),
          btnFiltAct: () => table.addFilter('status', 'equals', 'Active'),
          btnFiltClr: () => table.clearAllFilters(),
        };

        Object.entries(btnMap).forEach(([id, fn]) => {
          const btn = document.getElementById(id);
          if (btn)
            btn.addEventListener('click', () => {
              fn();
              updateFilterInfo();
            });
        });
      }
    }, 100);
  }

  function showEditEvents() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>📡 Edit Lifecycle Events</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Track cell and row edit events in real-time</p>

          <ui-advanced-data-table id="eventsTable" editable="true"></ui-advanced-data-table>
          
          <div style="margin-top: 16px;">
            <h4 style="margin-bottom: 8px;">Event Log:</h4>
            <div id="eventLog" style="padding: 12px; background-color: #f9fafb; border:1px solid var(--border-default,#e5e7eb); border-radius: 6px; max-height: 300px; overflow-y: auto; font-family: monospace; font-size: 12px;">
              <div style="color: #6b7280;">Waiting for events...</div>
            </div>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('eventsTable');
      const eventLog = document.getElementById('eventLog');

      if (table) {
        table.data = sampleData.slice(0, 5);
        const editableColumns = columns.slice(0, 6).map(col => ({
          ...col,
          editable: true,
          inputType: col.field === 'salary' ? 'number' : col.field === 'email' ? 'email' : 'text',
        }));
        table.columns = editableColumns;

        function logEvent(eventName, detail, color) {
          if (eventLog) {
            const timestamp = new Date().toLocaleTimeString();
            const entry = document.createElement('div');
            entry.style.marginBottom = '4px';
            entry.style.color = color;
            entry.innerHTML = `<strong>[${timestamp}]</strong> <span style="color: ${color};">${eventName}</span>: ${JSON.stringify(detail, null, 2)}`;
            eventLog.insertBefore(entry, eventLog.firstChild);
          }
        }

        table.addEventListener('cellEditStart', e => {
          logEvent('cellEditStart', e.detail, '#10b981');
          console.log('Cell edit started:', e.detail);
        });

        table.addEventListener('cellEditStop', e => {
          logEvent('cellEditStop', e.detail, '#10b981');
          console.log('Cell edit stopped:', e.detail);
        });

        table.addEventListener('rowEditStart', e => {
          logEvent('rowEditStart', { rowId: e.detail.row.id, name: e.detail.row.name }, '#8b5cf6');
          console.log('Row edit started:', e.detail);
        });

        table.addEventListener('rowEditStop', e => {
          logEvent('rowEditStop', { rowId: e.detail.row.id, name: e.detail.row.name }, '#f59e0b');
          console.log('Row edit stopped:', e.detail);
        });
      }
    }, 100);
  }

  function showAdvancedPanels() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>🎛️ Filter & Column Panels</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Advanced UI panels for filtering and column management</p>
          
          <div style="margin-bottom: 16px; display: flex; gap: 8px; flex-wrap: wrap;">
            <ui-button id="btnTogFilt" variant="outline" color="success" label="🔍 Toggle Filter Panel" size="md"ui-button>
            <ui-button id="btnTogCol" variant="outline" color="secondary" label="📋 Toggle Column Panel" size="md"ui-button>
          </div>

          <ui-advanced-data-table id="panelsTable" show-filter-panel="false" show-column-panel="false"></ui-advanced-data-table>
          
          <div style="margin-top: 16px; padding: 12px; background-color: var(--accent-yellow-soft,#fef3c7); border-radius: 6px;">
            <p style="margin: 0; color: #78350f; font-size: 14px;">
              💡 Status: <strong id="panelStatus">Both panels hidden</strong>
            </p>
            <p style="margin: 8px 0 0 0; color: #78350f; font-size: 12px;">
              Note: Panel UI components are available via props. Full visual implementation coming soon!
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('panelsTable');
      if (table) {
        table.data = sampleData;
        table.columns = columns;
        table.sortable = true;
        table.filterable = true;

        function updatePanelStatus() {
          const status = document.getElementById('panelStatus');
          if (status) {
            const filterPanel = table.showFilterPanel ? 'Filter Panel ON' : 'Filter Panel OFF';
            const columnPanel = table.showColumnPanel ? 'Column Panel ON' : 'Column Panel OFF';
            status.textContent = `${filterPanel}, ${columnPanel}`;
          }
        }

        const bFilt = document.getElementById('btnTogFilt');
        const bCol = document.getElementById('btnTogCol');
        if (bFilt)
          bFilt.addEventListener('click', () => {
            table.showFilterPanel = !table.showFilterPanel;
            updatePanelStatus();
          });
        if (bCol)
          bCol.addEventListener('click', () => {
            table.showColumnPanel = !table.showColumnPanel;
            updatePanelStatus();
          });

        updatePanelStatus();
      }
    }, 100);
  }

  function showSearchMultiFilterPanel() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>🔎 Search & Multi-Filter Panel</h3>
          <div style="margin-bottom: 16px; display: flex; gap: 12px; flex-wrap: wrap; align-items: center;">
            <ui-input id="searchInput" placeholder="Search..." style="width: 220px;"></ui-input>
            <ui-button id="btnTogFiltDemo" variant="outline" color="primary" label="🔍 Toggle Filter Panel" size="md"ui-button>
          </div>
          <ui-advanced-data-table id="searchFilterTable" multi-filter="true" show-filter-panel="false" searchable="true"></ui-advanced-data-table>
          <div id="searchFilterInfo" style="margin-top: 16px; padding: 12px; background-color: var(--accent-blue-soft,#dbeafe); border-radius: 6px;">
            <p style="margin: 0; color: #1e3a8a; font-size: 14px;">Active filters: <strong id="activeSearchFiltersText">None</strong></p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('searchFilterTable');
      const searchInput = document.getElementById('searchInput');
      const btnTog = document.getElementById('btnTogFiltDemo');
      if (table) {
        table.data = sampleData;
        table.columns = columns;
        table.sortable = true;
        table.filterable = true;
        table.searchable = true;
        function updateSearchFilterInfo() {
          const activeFiltersText = document.getElementById('activeSearchFiltersText');
          if (activeFiltersText && table.activeFilters) {
            const filters = [];
            table.activeFilters.forEach((value, key) => {
              if (value.length > 0) {
                filters.push(`${key}: ${value.length} filter(s)`);
              }
            });
            activeFiltersText.textContent = filters.length > 0 ? filters.join(', ') : 'None';
          }
        }
        table.addEventListener('filterChange', updateSearchFilterInfo);
        if (searchInput) {
          searchInput.addEventListener('inputChange', function (e) {
            table.search = e.detail.value;
          });
        }
        if (btnTog) btnTog.addEventListener('click', () => (table.showFilterPanel = !table.showFilterPanel));
      }
    }, 100);
  }

  function showAdvancedFilterPanel() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>🔍 Advanced Filter Panel</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Build complex filters with multiple operators and conditions</p>
          
          <div style="margin-bottom: 16px; padding: 12px; background-color:var(--accent-blue-soft,#eff6ff); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-blue,#1e40af); font-size: 14px;">
              💡 <strong>Try this:</strong> Click the "🔍 Filters" button in the toolbar to open the advanced filter panel. 
              Select a column, choose an operator, enter a value, and click "+ Add" to create filters.
            </p>
          </div>

          <ui-advanced-data-table id="filterPanelTable" show-filter-panel="false"></ui-advanced-data-table>
          
          <div style="margin-top: 16px; padding: 12px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 6px;">
            <h4 style="margin: 0 0 8px 0; color: var(--accent-green,#166534); font-size: 14px;">Available Operators:</h4>
            <ul style="margin: 0; padding-left: 20px; color: var(--accent-green,#166534); font-size: 13px; line-height: 1.8;">
              <li><strong>Text fields:</strong> Equals, Not Equals, Contains, Not Contains, Starts With, Ends With</li>
              <li><strong>Number/Date fields:</strong> Equals, Not Equals, Greater Than, Less Than, Between</li>
              <li><strong>Filter chips:</strong> Click the × button to remove individual filters, or use "Clear All"</li>
            </ul>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('filterPanelTable');
      if (table) {
        table.data = sampleData;
        table.columns = columns;
        table.sortable = true;
        table.filterable = true;
        table.searchable = true;
        table.pagination = true;
        table.pageSize = 10;

        // Automatically open the filter panel for demo
        setTimeout(() => {
          table.showFilterPanel = true;
        }, 500);
      }
    }, 100);
  }

  function showTreeData() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>🌲 Tree Data (Hierarchical)</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Display hierarchical data with expandable rows.</p>
          
          <ui-advanced-data-table id="treeTable" tree-data="true"></ui-advanced-data-table>
          
          <div style="margin-top: 16px; padding: 12px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 6px;">
            <p style="margin: 0; color: var(--accent-green,#166534); font-size: 14px;">
              💡 Rows with children display an expand/collapse icon. Indentation shows depth level.
            </p>
          </div>
        </div>
      `;

    setTimeout(() => {
      const table = document.getElementById('treeTable');
      if (table) {
        const treeData = [
          {
            id: 'd1',
            name: 'Engineering',
            role: 'Department',
            status: 'Active',
            children: [
              {
                id: 't1',
                name: 'Frontend Team',
                role: 'Team',
                status: 'Active',
                children: [
                  { id: 1, name: 'John Doe', role: 'Senior Developer', status: 'Active', email: 'john@example.com' },
                  { id: 2, name: 'Jane Smith', role: 'Junior Developer', status: 'Active', email: 'jane@example.com' },
                  { id: 38, name: 'Jake Gyllenhaal', role: 'Frontend Developer', status: 'Active', email: 'jake@example.com' },
                ],
              },
              {
                id: 't2',
                name: 'Backend Team',
                role: 'Team',
                status: 'Active',
                children: [
                  { id: 3, name: 'Bob Johnson', role: 'Team Lead', status: 'Active', email: 'bob@example.com' },
                  { id: 28, name: 'Zachary Levi', role: 'Backend Developer', status: 'Active', email: 'zachary@example.com' },
                ],
              },
              {
                id: 't3',
                name: 'QA Team',
                role: 'Team',
                status: 'Active',
                children: [{ id: 14, name: 'Laura Croft', role: 'QA Engineer', status: 'Active', email: 'laura@example.com' }],
              },
            ],
          },
          {
            id: 'd2',
            name: 'Marketing',
            role: 'Department',
            status: 'Active',
            children: [
              { id: 4, name: 'Alice Williams', role: 'Sales Rep', status: 'On Leave', email: 'alice@example.com' },
              { id: 7, name: 'Ethan Hunt', role: 'Content Strategist', status: 'Active', email: 'ethan@example.com' },
            ],
          },
          {
            id: 'd3',
            name: 'Design',
            role: 'Department',
            status: 'Active',
            children: [
              { id: 10, name: 'Hannah Montana', role: 'UX Designer', status: 'Active', email: 'hannah@example.com' },
              { id: 37, name: 'Isla Fisher', role: 'Product Designer', status: 'Active', email: 'isla@example.com' },
            ],
          },
        ];

        table.columns = [
          { id: 'name', field: 'name', label: 'Name', sortable: true, width: '250px' },
          { id: 'role', field: 'role', label: 'Role', sortable: true },
          { id: 'status', field: 'status', label: 'Status', sortable: true },
          { id: 'email', field: 'email', label: 'Email', sortable: true },
        ];
        table.data = treeData;
        table.pagination = false;
      }
    }, 100);
  }

  // PHASE 2 DEMO FUNCTIONS

  function showSparklines() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Sparklines & Data Visualization</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Micro-charts embedded in cells to show trends</p>
          <ui-advanced-data-table id="sparklineTable"></ui-advanced-data-table>
          <div style="margin-top: 16px; padding: 12px; background-color: #f3e8ff; border-radius: 6px;">
            <p style="margin: 0; color: #6b21a8; font-size: 14px;">
              📈 The "Trend" column renders sparklines from an array of numbers.
            </p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('sparklineTable');
      if (table) {
        const sparkData = sampleData.map(d => ({
          ...d,
          trend: Array.from({ length: 12 }, () => Math.floor(Math.random() * 50) + 20),
        }));
        table.columns = [
          ...columns.slice(0, 4),
          { id: 'trend', field: 'trend', label: 'Trend (Last 12mo)', type: 'number', width: '150px' },
          { id: 'salary', field: 'salary', label: 'Salary', sortable: true, format: v => '$' + v.toLocaleString() },
        ];
        table.data = sparkData;
        table.enableSparklines = true;
        table.sortable = true;
      }
    }, 100);
  }

  function showLazyLoading() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Lazy Loading & Virtual Scroll</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Infinite scroll simulation with data fetching</p>
          <ui-advanced-data-table id="lazyTable" style="height: 500px;"></ui-advanced-data-table>
          <div style="margin-top: 16px; padding: 12px; background-color: #ffe4e6; border-radius: 6px;">
            <p style="margin: 0; color: #9f1239; font-size: 14px;">
              ⏳ Scroll down to load more data automatically.
            </p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('lazyTable');
      if (table) {
        table.columns = columns;
        // Initial small dataset
        table.data = sampleData.slice(0, 10);
        table.lazyLoad = true;
        table.virtualScroll = true;
        table.pagination = false;
      }
    }, 100);
  }

  function showPDFExport() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>PDF Export & Print Optimization</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Export data to formatted PDF documents</p>
          <ui-advanced-data-table id="pdfTable"></ui-advanced-data-table>
          <div style="margin-top: 16px; padding: 12px; background-color:var(--accent-red-soft,#fef2f2); border-radius: 6px;">
            <p style="margin: 0; color: #991b1b; font-size: 14px;">
              📄 Click "Export" -> "PDF" in the toolbar/footer (if implemented) or use the button below.
            </p>
             <ui-button id="btnExportPDF" variant="outline" color="danger" label="Trigger Export PDF" size="md"yle="margin-top: 8px;"></ui-button>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('pdfTable');
      if (table) {
        table.data = sampleData.slice(0, 15);
        table.columns = columns.slice(0, 6);
        table.pdfExport = true;
        table.exportable = true;
        table.printOptimized = true;

        const btn = document.getElementById('btnExportPDF');
        if (btn) btn.addEventListener('click', () => table.exportToPDF());
      }
    }, 100);
  }

  function showContextMobile() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Context Menu & Mobile View</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Right-click for options | Resize window for Card View</p>
          <ui-advanced-data-table id="contextTable"></ui-advanced-data-table>
          <div style="margin-top: 16px; padding: 12px; background-color: #ccfbf1; border-radius: 6px;">
            <p style="margin: 0; color: #0f766e; font-size: 14px;">
              🖱️ <strong>Context Menu:</strong> Right-click on any row.<br>
              📱 <strong>Mobile:</strong> Resize browser width < 768px to see Cards.
            </p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('contextTable');
      if (table) {
        table.data = sampleData.slice(0, 8);
        table.columns = columns.slice(0, 6);
        table.contextMenu = true;
        table.mobileCardView = true;
        table.selectable = true;
      }
    }, 100);
  }

  function showUndoRedo() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Undo / Redo</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">History tracking for Sort, Filter, Search, Selection</p>
          <ui-advanced-data-table id="undoTable"></ui-advanced-data-table>
          <div style="margin-top: 16px; padding: 12px; background-color: var(--accent-yellow-soft,#fef3c7); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-yellow,#92400e); font-size: 14px;">
              ⌨️ <strong>Shortcuts:</strong> Ctrl+Z (Undo), Ctrl+Y (Redo).<br>
              Try sorting, filtering, or selecting rows, then undo.
            </p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('undoTable');
      if (table) {
        table.data = sampleData.slice(0, 10);
        table.columns = columns;
        table.undoRedo = true;
        table.sortable = true;
        table.filterable = true;
        table.searchable = true;
        table.selectable = true;
      }
    }, 100);
  }

  function showRangeSelection() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Range Selection & Clipboard</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Excel-like range selection and copy-paste support</p>
          <ui-advanced-data-table id="rangeTable"></ui-advanced-data-table>
          <div style="margin-top: 16px; padding: 12px; background-color: #e0e7ff; border-radius: 6px;">
            <p style="margin: 0; color: #3730a3; font-size: 14px;">
              🟦 <strong>How to use:</strong><br>
              1. Click a cell to select it.<br>
              2. Hold <strong>Shift</strong> and click another cell to select a range.<br>
              3. Press <strong>Ctrl+C</strong> to copy selected data to clipboard.<br>
              4. Paste (Ctrl+V) into Excel or Notepad to verify.
            </p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('rangeTable');
      if (table) {
        table.data = sampleData.slice(0, 15);
        table.columns = columns.slice(0, 8);
        table.rangeSelection = true;
        table.copyPaste = true;
        table.selectable = false; // Disable row selection to focus on cell range
      }
    }, 100);
  }

  function showConditionalFormatting() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>Conditional Formatting</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Dynamic cell styling based on data values</p>
          <ui-advanced-data-table id="formatTable"></ui-advanced-data-table>
          <div style="margin-top: 16px; padding: 12px; background-color: #ffe4e6; border-radius: 6px;">
            <p style="margin: 0; color: #be123c; font-size: 14px;">
              🎨 <strong>Rules Applied:</strong><br>
              - <strong>Salary > $100k:</strong> Green background<br>
              - <strong>Rating < 3:</strong> Red text<br>
              - <strong>Status "Active":</strong> Blue badge style
            </p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('formatTable');
      if (table) {
        table.data = sampleData.slice(0, 15);
        table.columns = columns.slice(0, 8);
        table.conditionalFormatting = true;
        table.formattingRules = {
          salary: [
            { operator: '>', value: 100000, style: { backgroundColor: '#dcfce7', color: '#166534', fontWeight: 'bold' } },
            { operator: '<', value: 70000, style: { color: '#dc2626' } },
          ],
          rating: [{ operator: '>=', value: 5, style: { color: '#ca8a04', fontWeight: 'bold' } }],
          status: [
            { operator: '=', value: 'Active', style: { color: '#2563eb', backgroundColor: '#dbeafe', padding: '2px 6px', borderRadius: '4px' } },
            { operator: '=', value: 'Inactive', style: { color: '#9ca3af', fontStyle: 'italic' } },
          ],
        };
      }
    }, 100);
  }

  function showAggregation() {
    tableContainer.innerHTML = `
        <div class="demo-block">
          <h3>📊 Sales Report Aggregation</h3>
          <p style="color: #6b7280; margin-bottom: 12px;">Real-world example: Summarizing quarterly sales performance.</p>
          <ui-advanced-data-table id="aggTable"></ui-advanced-data-table>
          <div style="margin-top: 16px; padding: 12px; background-color:var(--accent-green-soft,#f0fdf4); border-radius: 6px;">
            <p style="margin: 0; color:var(--accent-green,#15803d); font-size: 14px;">
              <strong>Key Metrics Calculated:</strong><br>
              💰 <strong>Total Revenue:</strong> Sum of all sales.<br>
              📦 <strong>Total Units:</strong> Sum of quantity sold.<br>
              📈 <strong>Avg Margin:</strong> Average profit margin.<br>
              🗓️ <strong>Period:</strong> Earliest to Latest Date.
            </p>
          </div>
        </div>
      `;
    setTimeout(() => {
      const table = document.getElementById('aggTable');
      if (table) {
        // Dedicated Sales Dataset for meaningful aggregation
        const salesData = [
          { id: 101, region: 'North', product: 'MacBook Pro', category: 'Electronics', date: '2024-01-15', quantity: 5, revenue: 12500, margin: 25 },
          { id: 102, region: 'South', product: 'iPhone 15', category: 'Mobile', date: '2024-01-18', quantity: 12, revenue: 14400, margin: 35 },
          { id: 103, region: 'East', product: 'Ergo Chair', category: 'Furniture', date: '2024-01-20', quantity: 8, revenue: 4800, margin: 45 },
          { id: 104, region: 'West', product: 'Monitor 4K', category: 'Electronics', date: '2024-02-05', quantity: 15, revenue: 7500, margin: 18 },
          { id: 105, region: 'North', product: 'iPad Air', category: 'Mobile', date: '2024-02-10', quantity: 20, revenue: 12000, margin: 30 },
          { id: 106, region: 'South', product: 'Desk Lamp', category: 'Furniture', date: '2024-02-15', quantity: 30, revenue: 1500, margin: 55 },
          { id: 107, region: 'East', product: 'AirPods', category: 'Audio', date: '2024-03-01', quantity: 25, revenue: 6250, margin: 40 },
          { id: 108, region: 'West', product: 'Keyboard', category: 'Accessories', date: '2024-03-12', quantity: 10, revenue: 1500, margin: 60 },
          { id: 109, region: 'North', product: 'Mouse', category: 'Accessories', date: '2024-03-15', quantity: 40, revenue: 2000, margin: 65 },
          { id: 110, region: 'South', product: 'Server Rack', category: 'Enterprise', date: '2024-03-20', quantity: 2, revenue: 15000, margin: 20 },
        ];

        table.data = salesData;

        table.columns = [
          { id: 'date', field: 'date', label: 'Date', sortable: true, width: '120px', aggregation: ['min', 'max'] },
          { id: 'region', field: 'region', label: 'Region', sortable: true, width: '100px' },
          { id: 'product', field: 'product', label: 'Product', sortable: true, width: '150px', aggregation: ['count'] },
          { id: 'category', field: 'category', label: 'Category', sortable: true, width: '130px' },
          { id: 'quantity', field: 'quantity', label: 'Units Sold', sortable: true, width: '120px', aggregation: ['sum'], format: v => v + ' pcs' },
          { id: 'revenue', field: 'revenue', label: 'Revenue', sortable: true, width: '140px', aggregation: ['sum', 'max'], format: v => '$' + v.toLocaleString() },
          { id: 'margin', field: 'margin', label: 'Margin (%)', sortable: true, width: '120px', aggregation: ['avg'], format: v => v + '%' },
        ];

        table.columnAggregation = true;
        table.pagination = false;
      }
    }, 100);
  }

  function showValidationPrintDemo() {
    const container = document.getElementById('tableDemoContainer');
    if (!container) return;

    container.innerHTML = `
      <div class="demo-block">
        <h3>✔️ Professional Grade: Validation & Programmatic Printing</h3>
        <p style="color: #6b7280; margin-bottom: 24px;">Features: Custom cell validators and a programmatic .print() method for reporting.</p>
        
        <div style="display: flex; gap: 12px; margin-bottom: 16px;">
          <ui-button id="btnExecutePrint" variant="outline" color="secondary" label="🖨️ Execute .print() Method" style="--btn-bg: #111827; --btn-text: white; font-weight: 600;"></ui-button>
        </div>

        <ui-advanced-data-table id="validationTable" 
          editable="true" 
          inline-validation="true"
          advanced-validation="true"
          column-aggregation="true">
        </ui-advanced-data-table>
        
        <div style="margin-top: 16px; padding: 12px; background-color: var(--accent-pink-soft,#fdf2f8); border-radius: 6px;">
          <p style="margin: 0; color: #9d174d; font-size: 14px;">
            💡 <strong>Testing Validation:</strong> Try editing the <strong>Email</strong> field and deleting its content or entering an invalid email. Try entering a <strong>Salary</strong> below 50,000.
          </p>
        </div>
      </div>
    `;

    const printCurrentTable = function () {
      const table = document.getElementById('validationTable');
      if (table) table.print();
    };

    setTimeout(() => {
      const table = document.getElementById('validationTable');
      if (table) {
        table.columns = [
          { id: 'name', field: 'name', label: 'Employee Name', sortable: true },
          {
            id: 'email',
            field: 'email',
            label: 'Email (Required)',
            type: 'email',
            editable: true,
            validator: value => {
              if (!value) return 'Email is mandatory for payroll';
              if (!value.includes('@')) return 'Please enter a valid corporate email';
              return true;
            },
          },
          {
            id: 'salary',
            field: 'salary',
            label: 'Salary (Min $50k)',
            type: 'number',
            editable: true,
            aggregation: ['avg', 'sum'],
            format: v => '$' + v.toLocaleString(),
            validator: value => {
              if (Number(value) < 50000) return 'Salary must be at least $50,000';
              return true;
            },
          },
          { id: 'department', field: 'department', label: 'Sector', groupable: true },
        ];

        const pBtn = document.getElementById('btnExecutePrint');
        if (pBtn) pBtn.addEventListener('click', () => printCurrentTable());

        table.data = [
          { id: 1, name: 'Alex Rivera', email: 'alex@company.com', salary: 120000, department: 'Engineering' },
          { id: 2, name: 'Beatriz Solis', email: 'beatriz@company.com', salary: 95000, department: 'Design' },
          { id: 3, name: 'Cassian Andor', email: 'cassian@rebel.org', salary: 45000, department: 'Infiltration' },
        ];
      }
    }, 100);
  }
}
