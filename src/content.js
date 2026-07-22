// ============================================================================
//  SITE CONTENT  —  edit everything here. Layout/design lives in the components.
// ----------------------------------------------------------------------------
//  All content below is drawn from Saafir's real résumés (Security + Network,
//  2026) and existing project history. `status` on work items:
//    'live'    → has a public link (button shows and works)
//    'work'    → real professional work, no public code link ("Production" tag)
//    'private' → personal build, no public link ("Personal" tag)
// ============================================================================

export const profile = {
  name: 'Saafir Hale',
  initials: 'SH',
  roles: [
    'Cybersecurity Analyst',
    'Infrastructure & Network Engineer',
    'SecOps & Incident Response',
    'Automation Engineer',
  ],
  headline: 'I defend, build, and automate enterprise networks.',
  intro:
    'Junior SecOps analyst and infrastructure engineer at Symphona, supporting 300+ client organizations. I run incident response, led a 30-site 802.1X / EAP-TLS deployment, and automate operations with Python and PowerShell — with a data-analytics background underneath it all.',
  location: 'Atlanta, GA',
  // Neutral, employer-safe. To signal an active search, swap to e.g.
  // 'Open to security & infrastructure roles'.
  availability: 'Based in Atlanta, GA',
}

// The `whoami` terminal card in the hero.
export const terminal = {
  prompt: 'saafir@symphona:~$',
  command: 'whoami --full',
  lines: [
    { k: 'role', v: 'Jr. SecOps Analyst & Infrastructure Engineer' },
    { k: 'focus', v: 'incident response · NAC · automation' },
    { k: 'stack', v: 'SentinelOne · Wazuh · Meraki · Azure · Python' },
    { k: 'scale', v: '300+ client orgs · 30 network sites' },
    { k: 'location', v: 'Atlanta, GA' },
    { k: 'status', v: 'building & defending' },
  ],
}

export const about = {
  paragraphs: [
    'I work at the seam of security and infrastructure. Day to day I resolve high-impact incidents — business email compromise, account takeovers, malware, phishing — across 300+ client organizations, and I keep the networks those clients run on healthy and access-controlled.',
    'I like building the thing that fixes the problem for good. That means Python and PowerShell automation for migrations, reporting, and forensics — and network engineering work like a 30-site 802.1X / EAP-TLS rollout with certificate-based access control.',
    'Underneath is a data-analytics habit: I want the logs, the baselines, and the evidence, not just the alert. Outside of work I build full-stack apps, run some quant / trading research, and make music. The range is the point — I like understanding a system end to end.',
  ],
  skillGroups: [
    {
      label: 'Security Operations',
      accent: 'red',
      skills: ['Incident Response', 'Threat Detection & Triage', 'SIEM / EDR / XDR', 'SentinelOne', 'Wazuh', 'OpenCTI', 'Microsoft Defender', 'Mimecast'],
    },
    {
      label: 'Networking & Infrastructure',
      accent: 'orange',
      skills: ['802.1X / RADIUS / EAP-TLS', 'Network Access Control', 'Cisco Meraki', 'Firewalls / VPN', 'VLANs · DNS · DHCP', 'Intune / Autopilot'],
    },
    {
      label: 'Identity & Cloud',
      accent: 'denim',
      skills: ['Microsoft Entra / Azure AD', 'Azure (RADIUS/NPS, ADCS)', 'Microsoft 365 Security', 'Conditional Access', 'SSO', 'Google Workspace'],
    },
    {
      label: 'Automation & Data',
      accent: 'denim',
      skills: ['PowerShell', 'Python', 'SQL', 'R', 'Data Analysis', 'Tableau', 'Reporting Pipelines'],
    },
  ],
}

// ---------------------------------------------------------------------------
//  EXPERIENCE — timeline. Roles group under one company.
// ---------------------------------------------------------------------------
export const experience = [
  {
    company: 'Symphona',
    location: 'Smyrna, GA',
    period: 'Aug 2024 – Present',
    roles: [
      {
        title: 'Junior SecOps Analyst & Infrastructure Engineer',
        period: 'Nov 2024 – Present',
        points: [
          'Resolve 200+ security incidents — business email compromise, account takeovers, malware, phishing/vishing, browser hijacking — across 300+ client organizations, averaging 1–3 minutes to full mitigation with SentinelOne, Wazuh, OpenCTI, and Microsoft Entra.',
          'Led a 30-site 802.1X / EAP-TLS deployment with RADIUS/NPS hosted in Microsoft Azure, enabling centralized, certificate-based network access control.',
          'Administer 30 Cisco Meraki network environments — firewalls, switches, and access points — and standardized zero-touch Windows provisioning with Intune and Autopilot.',
          'Built Python & PowerShell automation for an ITGlue → Hudu migration of 300+ organizations and tens of thousands of assets — 95% first-pass success, with a reconciliation script recovering the rest.',
          'CloudRadial SME for 50+ VIP clients; recognized subject-matter expert for Hudu and NinjaOne.',
        ],
      },
      {
        title: 'IT Support Analyst — Intern',
        period: 'Aug 2024 – Nov 2024',
        points: [
          'Completed a stalled Auvik → CloudRadial network-data migration for 50+ companies within one week.',
          'Automated SentinelOne, BackupRadar, BrightGauge patch-compliance, and Cisco OpenDNS reporting for all VIP clients, cutting manual reporting effort ~17.5%.',
          'Integrated Google Workspace SSO and authored 750+ knowledge-base articles across Microsoft, Google, and iManage platforms.',
        ],
      },
    ],
  },
]

// Filter tabs across the top of the Work section, in display order.
export const workCategories = [
  { id: 'all', label: 'All' },
  { id: 'security', label: 'Security & Infra' },
  { id: 'software', label: 'Software & Apps' },
  { id: 'quant', label: 'Quant & Trading' },
  { id: 'data', label: 'Data & Analytics' },
  { id: 'creative', label: 'Creative' },
]

export const work = [
  // ------------------------------------------------------ SECURITY & INFRA
  {
    category: 'security',
    title: 'Enterprise 802.1X / EAP-TLS Deployment',
    blurb:
      'Designed and rolled out certificate-based WPA2-Enterprise Wi-Fi across 30 sites: ADCS certificate autoenrollment via GPO, NPS/RADIUS policy on Azure-hosted domain controllers, and CRL/CDP reachability validation across split-VPN topologies.',
    tags: ['802.1X', 'EAP-TLS', 'Azure', 'RADIUS/NPS'],
    status: 'work',
  },
  {
    category: 'security',
    title: 'SecOps Incident Response',
    blurb:
      'Front-line response to 200+ incidents across 300+ client orgs — BEC, account takeovers, malware, and phishing — with 1–3 minute average mitigation using SentinelOne, Wazuh, OpenCTI, and Microsoft Entra.',
    tags: ['SentinelOne', 'Wazuh', 'OpenCTI', 'EDR/XDR'],
    status: 'work',
  },
  {
    category: 'security',
    title: 'Email Forensics Indexer',
    blurb:
      'A PowerShell tool that indexes and parses .eml archives — MIME body extraction, keyword search, and progress tracking — for rapid investigation of phishing and BEC artifacts, with Excel-compatible output for reporting.',
    tags: ['PowerShell', 'Forensics', 'Automation'],
    status: 'work',
  },
  {
    category: 'security',
    title: 'ITGlue → Hudu Migration Automation',
    blurb:
      'Python & PowerShell automation migrating 300+ client organizations and tens of thousands of assets between documentation platforms — 95% first-pass success, with a reconciliation script that recovered the remainder.',
    tags: ['Python', 'PowerShell', 'Data Migration'],
    status: 'work',
  },
  {
    category: 'security',
    title: 'Cisco Meraki Fleet Administration',
    blurb:
      'Day-to-day administration of 30 Cisco Meraki environments — SD-WAN, switching, and wireless — plus zero-touch Windows provisioning across client sites with Microsoft Intune and Autopilot.',
    tags: ['Cisco Meraki', 'SD-WAN', 'Intune'],
    status: 'work',
  },

  // -------------------------------------------------------------- SOFTWARE
  {
    category: 'software',
    title: 'Side Bets',
    blurb:
      'Social prediction-market app — friends stake virtual money on real-world outcomes through a parimutuel betting engine. React Native (Expo) + Supabase.',
    tags: ['Expo', 'Supabase', 'React Native'],
    status: 'private',
  },
  {
    category: 'software',
    title: 'Speakeasy',
    blurb:
      'Invite-only mutual-aid network for bartenders — tiered membership and a virtual support pool. React + Vite prototype.',
    tags: ['React', 'Product Design'],
    status: 'private',
  },
  {
    category: 'software',
    title: 'RewindMeta',
    blurb:
      'Content-provenance engine with multiple operating modes for detecting and documenting media alterations.',
    tags: ['Provenance', 'React'],
    status: 'private',
  },
  {
    category: 'software',
    title: 'Redline Rivals',
    blurb:
      'Top-Drives-style motorcycle card-racing game — a full vertical slice built in React + Vite, structured to ship to mobile via Expo.',
    tags: ['React', 'Game', 'Expo'],
    status: 'private',
  },

  // ----------------------------------------------------------------- QUANT
  {
    category: 'quant',
    title: 'Quantitative Trading Research',
    blurb:
      'Built backtesting infrastructure and evaluated systematic strategies across crypto and options — funding-carry, volatility, and momentum systems — with a focus on honest out-of-sample testing.',
    tags: ['Python', 'Backtesting', 'ccxt'],
    status: 'private',
  },

  // ------------------------------------------------------------------ DATA
  {
    category: 'data',
    title: '2017 NHL Game Predictor',
    blurb: 'Grid-search decision tree that predicts NHL game outcomes from 2017 season data.',
    tags: ['Python', 'scikit-learn', 'ML'],
    status: 'live',
    link: 'https://github.com/SaafirHale/2017_NHL_Game_Prediction/blob/main/NHL_Game_Predictor.ipynb',
    linkLabel: 'View on GitHub',
  },
  {
    category: 'data',
    title: 'Nashville Housing — Data Cleaning',
    blurb: 'Cleaning and normalizing a Nashville housing dataset entirely in SQL.',
    tags: ['SQL', 'Data Cleaning'],
    status: 'live',
    link: 'https://github.com/SaafirHale/Nashville_Housing_Data_Cleaning/blob/main/Data%20Cleaning%20Nashville%20Housing%20Data.sql',
    linkLabel: 'View on GitHub',
  },
  {
    category: 'data',
    title: 'Neymar vs. Mbappé',
    blurb:
      'Comparing Expected Goals (xG) and goals scored for Neymar and Mbappé across the 2020–21 and 2021–22 seasons.',
    tags: ['Python', 'xG', 'Football'],
    status: 'live',
    link: 'https://github.com/SaafirHale/Neymar_Mbappe_Comparison/blob/main/Neymar_and_Mbappe_Comparison.ipynb',
    linkLabel: 'View on GitHub',
  },
  {
    category: 'data',
    title: 'Cyclistic Bikeshare',
    blurb:
      'Google Data Analytics capstone — cleaned, analyzed, and visualized bikeshare usage in R to profile casual vs. member riders.',
    tags: ['R', 'Capstone', 'Tableau'],
    status: 'live',
    link: 'https://github.com/SaafirHale/Cyclistic_Bikeshare_Google_Capstone/blob/main/Cyclistic%20Bike%20Analysis.R',
    linkLabel: 'View on GitHub',
  },
  {
    category: 'data',
    title: 'Bellabeat Fitness Tracker',
    blurb:
      'Google Data Analytics capstone — analyzed fitness-tracker data in R to surface usage trends and product opportunities.',
    tags: ['R', 'Capstone'],
    status: 'live',
    link: 'https://github.com/SaafirHale/Bellabeat_Fitness_Tracker_Google_Capstone/blob/main/BellaBeat%20Health%20Data%20Exploration.R',
    linkLabel: 'View on GitHub',
  },

  // -------------------------------------------------------------- CREATIVE
  {
    category: 'creative',
    title: 'St. Lashun — Artist Site',
    blurb:
      'Design and build of an artist website for the 2026 single "Run You Up." React + Vite one-pager.',
    tags: ['React', 'Design', 'Music'],
    status: 'private', // add the live URL here and set status:'live' once deployed
  },
]

// ---------------------------------------------------------------------------
//  CERTIFICATIONS & EDUCATION
// ---------------------------------------------------------------------------
export const certGroups = [
  {
    label: 'Security & Networking',
    items: [
      { name: 'CompTIA A+', href: null },
      { name: 'CompTIA Network+ (in progress)', href: null },
    ],
  },
  {
    label: 'Education',
    items: [
      { name: 'B.S. Cybersecurity & Information Assurance — WGU (Anticipated 2027)', href: null },
    ],
  },
  {
    label: 'Analytics',
    items: [
      {
        name: 'Google Data Analytics Professional Certificate',
        href: 'https://www.coursera.org/account/accomplishments/professional-cert/UVWYH45V74RD',
      },
      {
        name: 'Sports Performance Analytics — University of Michigan',
        href: 'https://www.coursera.org/account/accomplishments/specialization/JAJ4JACN6FG9',
      },
    ],
  },
  {
    label: 'Kaggle',
    items: [
      { name: 'Python', href: 'https://www.kaggle.com/learn/certification/saafirhale/python' },
      { name: 'Pandas', href: 'https://www.kaggle.com/learn/certification/saafirhale/pandas' },
      { name: 'Intro to SQL', href: 'https://www.kaggle.com/learn/certification/saafirhale/intro-to-sql' },
      { name: 'Advanced SQL', href: 'https://www.kaggle.com/learn/certification/saafirhale/advanced-sql' },
      { name: 'Data Cleaning', href: 'https://www.kaggle.com/learn/certification/saafirhale/data-cleaning' },
      { name: 'Data Visualization', href: 'https://www.kaggle.com/learn/certification/saafirhale/data-visualization' },
      { name: 'Intro to Machine Learning', href: 'https://www.kaggle.com/learn/certification/saafirhale/intro-to-machine-learning' },
      { name: 'Intermediate Machine Learning', href: 'https://www.kaggle.com/learn/certification/saafirhale/intermediate-machine-learning' },
    ],
  },
  {
    label: 'ServiceNow',
    items: [
      { name: 'ServiceNow Developer Course', href: 'https://www.udemy.com/certificate/UC-3LBX7E6T/' },
      { name: 'ServiceNow System Administrator', href: 'https://www.udemy.com/certificate/UC-VY5FQPCA/' },
    ],
  },
]

export const contact = {
  blurb:
    "Looking for a security analyst or infrastructure / network engineer? Want to talk SecOps, networking, or a build? Reach out.",
  email: 'saafirhale@gmail.com',
  // Primary résumé used by the nav + hero buttons:
  resume: 'assets/resume-security.pdf',
  // Both role-targeted résumés, shown in the Contact section:
  resumes: [
    { label: 'Résumé — Security', href: 'assets/resume-security.pdf' },
    { label: 'Résumé — Network', href: 'assets/resume-network.pdf' },
  ],
  socials: [
    { label: 'GitHub', href: 'https://github.com/SaafirHale', icon: 'github' },
    { label: 'LinkedIn', href: 'https://www.linkedin.com/in/saafir-hale/', icon: 'linkedin' },
    { label: 'Tableau', href: 'https://public.tableau.com/app/profile/saafir.hale', icon: 'tableau' },
  ],
}
