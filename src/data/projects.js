export const projects = [
  {
    title: 'Coinly – Personal Finance Tracker',
    summary: 'Full-stack web app that helps individuals visualize and control monthly spending in real time.',
    achievements: [
      'Implemented Supabase authentication with row-level security so each workspace stays private by default.',
      'Built recurring insights, charts, and budget alerts with Recharts, cutting manual spreadsheet work for beta users by 70%.',
      'Deployed on Vercel with automated previews, enabling feature validation with stakeholders before every release.'
    ],
    techStack: ['React', 'Supabase', 'Tailwind CSS', 'Recharts', 'Vercel'],
    github: 'https://github.com/Utpal29/coinly',
    live: 'https://coinly-utpal.vercel.app'
  },
  {
    title: 'AllMart – eCommerce Experience',
    summary: 'Responsive storefront that simplifies grocery discovery and checkout for busy families.',
    achievements: [
      'Designed modular product, cart, and checkout flows that sustain 60 FPS interactions even on budget Android devices.',
      'Integrated Node.js services with optimistic UI updates, reducing perceived wait time during order placement by ~40%.',
      'Authored accessibility-first components (ARIA roles, keyboard shortcuts) to support inclusive shopping experiences.'
    ],
    techStack: ['React', 'Node.js', 'Express', 'Styled Components'],
    github: 'https://github.com/Utpal29/AllMart'
  },
  {
    title: 'PortShare – P2P File Sharing Platform',
    summary: 'Secure peer-to-peer file delivery toolkit for teams that need ad-hoc transfers without cloud storage.',
    achievements: [
      'Engineered socket-based communication with rotating invite codes, eliminating the need for external brokers.',
      'Modularized the Java backend (Controller/Service/Util layers) for >85% unit-test coverage and easier onboarding.',
      'Bundled cross-platform installers and automated smoke tests, trimming release packaging time from hours to minutes.'
    ],
    techStack: ['Java', 'Next.js', 'React', 'WebSockets'],
    github: 'https://github.com/Utpal29/PortShare'
  },
  {
    title: 'Queue Management with Computer Vision',
    summary: 'Camera-based queue analytics that assigns tickets and monitors wait times in retail spaces.',
    achievements: [
      'Leveraged OpenCV object tracking to detect and label visitors in <100ms per frame on edge devices.',
      'Created admin dashboards that surface peak-hour heatmaps so managers can staff lanes proactively.',
      'Packaged the system for Raspberry Pi deployments with configurable alert thresholds and SMS notifications.'
    ],
    techStack: ['Python', 'OpenCV', 'Flask', 'Twilio'],
    github: 'https://github.com/Utpal29/Queue-Management'
  },
  {
    title: 'Illinois Crime Intelligence',
    summary: 'Data product that turns 7M+ public safety records into actionable insights for city leadership.',
    achievements: [
      'Automated ETL pipelines with Python and SQL to cleanse multi-year incident feeds and enrich them with census data.',
      'Built Tableau dashboards for detectives to filter hotspots by district, hour, and offense category in seconds.',
      'Trained a decision-tree baseline that predicts arrest likelihood with clear feature importance for policy teams.'
    ],
    techStack: ['Python', 'Tableau', 'Pandas', 'scikit-learn'],
    github: 'https://github.com/Utpal29/illinois-crime-analytics'
  }
];
