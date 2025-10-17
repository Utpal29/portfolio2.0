export const portfolioContent = {
  hero: {
    name: 'Utpal Manishchandra Prajapati',
    title: 'Software Engineer • Data/Analytics',
    elevatorPitchVariants: {
      energetic:
        'I turn ambiguous ideas into shipped features fast. From backend logic and data workflows to clean, responsive UIs, I care about clarity, performance, and measurable impact.',
      balanced:
        'Software engineer with hands-on experience across Java/Spring Boot, React/TypeScript, and analytics. I build maintainable services and UIs backed by data and tests.',
      formal:
        'Software engineer specializing in backend services (Java/Spring Boot), front-end interfaces (React/Next.js), and data analytics. Experienced in Agile delivery, automated testing, and stakeholder communication.'
    },
    elevatorPitchDefault: 'energetic',
    keywords: ['Java', 'Spring Boot', 'React', 'TypeScript', 'Supabase', 'PostgreSQL', 'Python', 'ETL', 'Analytics', 'REST APIs'],
    snapshotStats: [
      { label: 'Experience', value: '6 months full-time @ Bank of America' },
      { label: 'Recognition', value: 'Global Recognition Award (Bank of America)' },
      { label: 'Patents', value: '4 (filed)' },
      { label: 'Research', value: '1 IEEE paper (PDGC 2022)' },
      { label: 'Projects', value: '10+ shipped across web & data' }
    ],
    availability: {
      openTo: ['Full-time', 'Contract/Freelance'],
      location: 'GTA/Toronto • Open to relocate globally • Remote OK',
      start: 'Immediate'
    }
  },
  skills: {
    Backend: ['Java (Spring Boot, REST APIs)', 'Node.js (Express)', 'Python (FastAPI basics)', 'Auth (JWT, OAuth)', 'SQL: PostgreSQL (Supabase), MySQL'],
    Frontend: ['React', 'Next.js', 'TypeScript/JavaScript', 'Tailwind CSS', 'shadcn/ui', 'State: React Query, Context', 'Charts: Recharts'],
    'Data & Analytics': ['Python (Pandas, NumPy, scikit-learn basics)', 'ETL design, data cleaning', 'SQL', 'Visualization (Recharts, Matplotlib, Tableau)'],
    'DevOps & Tooling': ['Git/GitHub, trunk-based flow', 'Vercel', 'Netlify', 'CI basics', 'Docker (basics)']
  },
  experience: [
    {
      company: 'Bank of America',
      role: 'Software Engineer (Full-time)',
      location: 'Hyderabad, India',
      dates: 'Jul 2023 – Dec 2023',
      highlights: [
        'Engineered and optimized Spring Boot REST APIs backed by MySQL for loan workflows; improved backend efficiency by ~15%.',
        'Delivered 5+ production features and 50+ JUnit tests, boosting coverage ~30% and reducing regressions.',
        'Diagnosed and resolved 20+ high-priority bugs; collaborated across Agile teams (Jira/Git) to hit sprint goals.',
        'Recognition: Global Recognition Award for delivery & collaboration.'
      ],
      tech: ['Java', 'Spring Boot', 'REST', 'JUnit', 'SQL', 'Git', 'Agile']
    },
    {
      company: 'Seneca Hackathons',
      role: 'Event Operations Intern (Team Lead)',
      location: 'Toronto, Canada',
      dates: 'Jan 2025 – Mar 2025',
      highlights: [
        'Coordinated 50+ teams and mentors with Kanban dashboards; centralized updates and deadlines.',
        'Tracked submissions and unblockers; improved on-time completion by ~20% through daily standups and nudges.',
        'Streamlined communications to reduce duplicate mentor queries by ~35% with templated updates.'
      ],
      tech: ['Google Workspace', 'Sheets/Analytics', 'Kanban', 'Ops']
    }
  ],
  projects: [
    {
      name: 'Coinly — Personal Finance Tracker',
      summary:
        'Modern web app to record transactions, categorize expenses, and view clean dashboards. Built for everyday speed and clarity with secure auth and responsive UI.',
      impact: ['Real-time entries with Supabase; responsive dashboard with charts', 'Auth + RBAC via Supabase; deployed on Vercel for fast previews'],
      links: {
        github: 'https://github.com/Utpal29/coinly',
        live: 'https://coinly-three.vercel.app/',
        image: 'public/coinly.png'
      },
      stack: ['React', 'Vite', 'Tailwind CSS', 'Supabase (Postgres + Auth)', 'Recharts', 'Vercel'],
      features: ['Dashboard overview, insights & calendar view', 'CRUD transactions with categories & notes', 'Export CSV; mobile-first layout']
    },
    {
      name: 'AllMart — eCommerce Web App',
      summary:
        'Simple, fast storefront for essential items with intuitive browsing, product pages, and frictionless checkout flow.',
      impact: ['Search, product detail pages, cart, and streamlined ordering', 'Clean component model for reusability and faster iteration'],
      links: {
        github: 'https://github.com/Utpal29/AllMart',
        live: '',
        image: 'public/allmart.png'
      },
      stack: ['React', 'Node.js'],
      features: ['Product search & filtering', 'Cart & order flow with validation', 'Extensible API layer for inventory & orders']
    },
    {
      name: 'Phishing Website Detection (ML)',
      summary:
        'Comparative study of classical ML and deep models for phishing-site detection, evaluating accuracy, RMSE, and compute time.',
      impact: ['Benchmarked NB, DT, RF vs. ANN/CNN (with & without GA)', 'Focused on practical trade-offs: speed vs. accuracy'],
      links: {
        github: 'https://github.com/Utpal29/Phishing-Website-Detection',
        live: '',
        image: 'public/Phishing-Website-Detection.jpg'
      },
      stack: ['Python', 'scikit-learn', 'ANN/CNN (Keras/PyTorch)'],
      features: ['Feature extraction from URLs/content', 'Train/validation pipelines; metric tracking', 'Result tables & plots for model comparison']
    },
    {
      name: 'Queue Management using Computer Vision',
      summary:
        'Vision system that detects people, assigns tag numbers, and enforces first-come, first-served ordering for queues.',
      impact: ['Reduced manual queue friction; transparent ordering'],
      links: {
        github: 'https://github.com/Utpal29/Queue-Management/tree/main',
        live: '',
        image: 'public/Queue-Management.jpg'
      },
      stack: ['Python', 'OpenCV', 'Object detection/tracking'],
      features: ['Person detection & ID assignment', 'Basic tracking across frames', 'Configurable queue thresholds']
    },
    {
      name: 'Analysis & Visualization of Criminal Activity in Urban Illinois',
      summary:
        'ETL + exploratory analysis on Chicago Crime dataset (2001–present) with patterns over time/location and a baseline predictive model.',
      impact: ['Processed 7M+ records; interactive visuals for hotspots & time windows', 'Decision Tree baseline for arrest likelihood'],
      links: {
        github: '',
        live: '',
        image: 'public/crime-analytics.jpeg'
      },
      stack: ['Python', 'Pandas', 'Tableau', 'scikit-learn (Decision Tree)'],
      features: ['Cleaning, feature engineering (time/district)', 'Dashboards for stakeholders', 'Model performance reporting']
    }
  ],
  publicationsIp: {
    narrative:
      'I focus on practical software and data problems—efficiency, reliability, and clear interfaces. I’ve contributed four filed patents across healthcare, autonomy, wireless signal processing, and supply chain risk, plus one IEEE publication on hybrid optimization for sentiment classification.',
    itemsDetailed: {
      patents: [
        { title: 'HEALTHCARE SYSTEM FOR CANCER CARE AND METHOD', applicationNumber: '202241031893', filingDate: '2022-06-03' },
        { title: 'AUTONOMOUS VEHICLE SYSTEM FOR DATA SELECTION ON BOARD', applicationNumber: '202241047484', filingDate: '2022-08-20' },
        { title: 'WIRELESS SIGNAL NOISE REDUCTION METHOD AND SYSTEM', applicationNumber: '202241047466', filingDate: '2022-08-20' },
        { title: 'SUPPLY CHAIN MANAGEMENT RISK PREDICTION', applicationNumber: '202241050428', filingDate: '2022-09-03' }
      ],
      research: [
        {
          title: 'Role of Hybrid Optimization in Improving Performance of Sentiment Classification System',
          authors: 'A. Shukla, V. Juneja, S. Singh, U. Prajapati, A. Gupta, D. Dhabliya',
          venue: 'IEEE PDGC 2022 (Seventh International Conference on Parallel, Distributed and Grid Computing)',
          location: 'Solan, Himachal Pradesh, India',
          pages: 'pp. 541–546',
          year: 2022,
          doi: '10.1109/PDGC56933.2022.10053333',
          link: 'https://ieeexplore.ieee.org/document/10053333'
        }
      ]
    }
  },
  about: {
    short:
      'I like shipping useful things—clean Spring Boot APIs, small sharp UIs, and data that tells the truth. I work in short feedback loops, write tests early, and track impact with simple metrics.',
    long:
      'I’m a software engineer who enjoys the craft: designing readable code, leaving the campsite cleaner than I found it, and proving value with small measurable wins. I’ve shipped Java/Spring Boot services, React front-ends, and Python analytics pipelines, and I’m comfortable owning a task from a vague ticket to a reliable release. When not coding, I tinker with finance tools and dashboards. I’m open to full-time roles and short, focused contracts where I can unblock teams and deliver quickly.'
  },
  contact: {
    email: 'utpalpraja@gmail.com',
    github: 'https://github.com/Utpal29',
    linkedin: 'https://www.linkedin.com/in/utpal-prajapati-191a391a8/',
    ctaText: 'Available for full-time and contract work. Let’s talk.'
  },
  design: {
    theme: 'Dark only',
    colors: {
      bg: '#0B0F14',
      surface: '#0F141A',
      muted: '#1A212B',
      text: '#E6EDF3',
      textDim: '#A9B4C0',
      primary: '#7CDEFA',
      primaryHover: '#5BC8E8',
      secondary: '#F2C94C',
      danger: '#FF6B6B',
      success: '#69DB7C',
      border: '#22303C'
    },
    typography: {
      headings: 'Inter, ui-sans-serif, system-ui',
      body: 'Inter, ui-sans-serif, system-ui',
      code: 'JetBrains Mono, ui-monospace, SFMono-Regular',
      rhythm: '1.6'
    }
  }
};
