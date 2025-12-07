export const portfolioContent = {
  hero: {
    name: 'Utpal Prajapati',
    title: 'Software Engineer • Data/Analytics',
    elevatorPitchVariants: {
      energetic:
        'I turn ambiguous ideas into shipped features fast. From Spring Boot APIs and reliable data workflows to clean, responsive UIs, I care about clarity, performance, and measurable impact.',
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
    Frontend: ['React', 'Next.js', 'TypeScript/JavaScript', 'Tailwind CSS, shadcn/ui', 'State: React Query, Context', 'Charts: Recharts'],
    'Data & Analytics': ['Python (Pandas, NumPy, scikit-learn basics)', 'ETL design, data cleaning', 'SQL (CTEs, window functions)', 'Visualization (Recharts, Matplotlib, Tableau)'],
    'DevOps & Tooling': ['Git/GitHub, trunk-based flow', 'Vercel', 'Netlify', 'CI basics (GitHub Actions)', 'Docker (basics)'],
    Methods: ['Agile Scrum/Kanban', 'Test-first habits (JUnit)', 'Requirements → metrics-driven delivery']
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
      company: 'Seneca Food Hackathon 2025',
      role: 'Event Operations Intern (Team Lead)',
      location: 'Toronto, Canada',
      dates: 'Jan 2025 – Mar 2025',
      highlights: [
        'Led coordination and progress tracking for 1000+ participants using Kanban dashboards and shared analytics sheets.',
        'Streamlined communications across 50+ teams and mentors, enhancing collaboration and timely submissions.',
        'Strengthened leadership and Agile coordination skills in a high-pressure event environment.'
      ],
      tech: ['Google Workspace', 'Sheets/Analytics', 'Kanban', 'Ops']
    }
  ],
  education: [
    {
      school: 'Seneca Polytechnic',
      degree: 'Post-Graduate Certificate, Project Management – Information Technology',
      location: 'Toronto, Canada',
      dates: '2024 – 2025',
      details: ['GPA: 3.8/4.0']
    },
    {
      school: 'Seneca Polytechnic',
      degree: 'Post-Graduate Certificate, Business Analytics',
      location: 'Toronto, Canada',
      dates: '2023 – 2024',
      details: ['GPA: 4.0/4.0']
    },
    {
      school: 'Vellore Institute of Technology',
      degree: 'B.Tech in Computer Science and Engineering',
      location: 'Vellore, India',
      dates: '2019 – 2023',
      details: ['GPA: 8/10']
    }
  ],
  projects: [
    {
      name: 'TraceLock — Browser Privacy Inspector',
      summary:
        'Manifest V3 Chrome/Edge extension that reveals hidden network activity, highlights tracker domains, and shows a per-site privacy risk score.',
      impact: [
        'Real-time view of network requests with tracker classification',
        'Local-only privacy analysis with no external APIs or storage'
      ],
      links: {
        github: 'https://github.com/Utpal29/tracelock',
        live: '',
        image: 'public/tracelock.png'
      },
      stack: ['JavaScript', 'HTML/CSS', 'Chrome Extensions (MV3)'],
      features: [
        'Network timeline with filters and tracker badges',
        'Permission probes for geolocation, camera, mic, notifications',
        'Risk scoring and lightweight history stored in chrome.storage.local'
      ]
    },
    {
      name: 'RealHire AI — Resume Match & Optimizer',
      summary:
        'AI-powered tool that analyzes a resume against a job description and generates a match score, missing skills, and ATS-friendly rewritten resumes.',
      impact: [
        'Instant resume–JD comparison with actionable suggestions',
        'Local history and polished UI for quick revisions'
      ],
      links: {
        github: 'https://github.com/Utpal29/RealHire',
        live: 'https://real-hire.vercel.app/',
        image: 'public/realhire.png'
      },
      stack: ['Next.js 16', 'TypeScript', 'Groq SDK', 'pdfjs-dist', 'mammoth', 'Vercel'],
      features: [
        'PDF/DOCX parsing with automatic text extraction',
        'LLM-backed scoring and resume rewriting',
        'One-click copy Markdown output + saved history'
      ]
    },
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
        github: 'https://github.com/Utpal29/crime-analysis-visualization',
        live: '',
        image: 'public/crime-analytics.jpeg'
      },
      stack: ['Python', 'Pandas', 'Tableau', 'scikit-learn (Decision Tree)'],
      features: ['Cleaning, feature engineering (time/district)', 'Dashboards for stakeholders', 'Model performance reporting']
    },
    {
      name: 'AudioGrab — Instagram Reel → MP3',
      summary:
        'Full-stack downloader that lets users paste any public Instagram Reel link and instantly grab the MP3 through a polished glassmorphism UI.',
      impact: [
        'Next.js proxy streams ffmpeg output directly to the browser for instant downloads',
        'FastAPI service wraps Instaloader + ffmpeg with resilient cleanup and Render-friendly packaging'
      ],
      links: {
        github: 'https://github.com/Utpal29/AudioGrab',
        live: 'https://audio-grab.vercel.app/',
        image: 'public/audiograb.png'
      },
      stack: ['Next.js 13 (TypeScript)', 'React', 'FastAPI', 'Instaloader', 'ffmpeg', 'Render', 'Vercel'],
      features: [
        'Responsive landing experience with gradient accents, status messaging, and spinner states',
        'Secure proxy (/api/grab) that streams MP3s without touching Instagram APIs directly',
        'Temporary download workspace with background cleanup to keep hosting costs low',
        'Render blueprint + custom build script to bundle static ffmpeg on deploy'
      ]
    },
    {
      name: 'Malicious Traffic Detector — Network Intrusion Detection System',
      summary:
        'Machine learning–based intrusion detection system built on the NSL-KDD dataset to classify network traffic as normal or malicious. Compared eight algorithms to determine the most effective approach for identifying DoS, Probe, R2L, and U2R attacks, with Random Forest emerging as the most reliable model.',
      impact: [
        'Implemented end-to-end ML workflow: data preprocessing, feature encoding, scaling, and evaluation',
        'Benchmarked eight models including Random Forest, MLP, SVM, AdaBoost, and XGBoost',
        'Achieved 99% accuracy, precision, and recall with Random Forest and MLP classifiers',
        'Enhanced IDS understanding by comparing algorithmic calibration and ROC-AUC performance'
      ],
      links: {
        github: 'https://github.com/Utpal29/malicious-traffic-detector',
        live: '',
        image: 'public/malicious-traffic-detector.png'
      },
      stack: ['Python', 'scikit-learn', 'pandas', 'matplotlib', 'seaborn', 'XGBoost'],
      features: [
        'Preprocessing pipeline using LabelEncoder and StandardScaler for 41 network attributes',
        'Visualization of attack type distribution and correlation with target labels',
        'Evaluation metrics: accuracy, precision, recall, F1-score, and ROC-AUC',
        'Comparison of ensemble, neural, and classical ML models for intrusion detection',
        'Final report demonstrating Random Forest as the top-performing classifier'
      ]
    },
    {
      name: 'ChurnIntel — Customer Churn Analytics & Retention Simulator',
      summary:
        'End-to-end churn analytics project on the Telco dataset that combines EDA, machine learning, SHAP explainability, segmentation, and Tableau dashboards to identify at-risk customers and test retention strategies.',
      impact: [
        'Predicted churn risk for thousands of customers and quantified revenue at risk using churn probability × monthly charges',
        'Enabled data-driven retention planning through interactive Tableau dashboards and a what-if strategy simulator'
      ],
      links: {
        github: 'https://github.com/Utpal29/churnintel',
        live: '',
        image: 'public/churnintel.png'
      },
      stack: ['Python', 'pandas', 'scikit-learn', 'SHAP', 'Jupyter', 'Tableau'],
      features: [
        'Data cleaning and feature engineering pipeline for the Telco Customer Churn dataset',
        'Random Forest churn model with SHAP-based feature importance to explain key drivers of churn',
        'Customer segmentation using clustering to group high-risk, price-sensitive, and loyal users',
        'Tableau dashboard suite: Churn Overview, Segments & Risk, and Retention Strategy Simulator with adjustable strategies and adoption rates'
      ]
    }
  ],
  publicationsIp: {
    narrative:
      'I focus on practical software and data problems—efficiency, reliability, and clear interfaces. I’ve contributed four filed patents across healthcare, autonomy, wireless signal processing, and supply chain risk, plus one IEEE publication on hybrid optimization for sentiment classification.',
    itemsDetailed: {
      patents: [
        { title: 'An Artificial Intelligence Based Integrated IoT & Machine Learning Healthcare System for Cancer Care and Method Thereof', applicationNumber: '202241031893', filingDate: '2022-06-03' },
        { title: 'A Machine Learning Based Intelligent Model for an Autonomous Vehicle System for Data Selection On Board', applicationNumber: '202241047484', filingDate: '2022-08-20' },
        { title: 'An Intelligent Wireless Signal Noise Reduction Method and System Based on Machine Learning', applicationNumber: '202241047466', filingDate: '2022-08-20' },
        { title: 'Method and System for Supply Chain Management Risk Prediction Based on Convolution Neural Network', applicationNumber: '202241050428', filingDate: '2022-09-03' }
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
