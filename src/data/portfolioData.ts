import { ProjectItem, ExperienceItem, AchievementItem, MetricItem, SkillCategory } from '../types/portfolio';

export const PERSONAL_INFO = {
  name: "Arpan Kumar Mallik",
  eyebrow: "ARPAN KUMAR MALLIK",
  role: "AI Engineer × Data Analyst × Product Builder",
  headline: "Building intelligent systems that turn data into decisions.",
  bio: "CS graduate from KIIT and SWE Trainee at Capgemini. I engineer autonomous multi-agent architectures, scalable machine learning pipelines on AWS, and data-driven products that deliver measurable business impact.",
  location: "Kolkata, West Bengal, India",
  email: "arpanmallik173@gmail.com",
  phone: "+91 6289571773",
  avatar: "./profile.jpg",
  socials: {
    linkedin: "https://linkedin.com/in/arpanmallik9645",
    github: "https://github.com/legitscarf",
  },
  university: "KIIT University (B.Tech CSE)",
  cgpa: "8.33 / 10",
  currentRole: "Software Engineer Trainee at Capgemini",
  status: "Available for High-Impact Roles"
};

export const HOW_I_THINK_STEPS = [
  {
    step: "01",
    title: "Understand the Problem & Business Constraint",
    desc: "Every technical solution begins with identifying the real bottleneck. I apply MECE problem decomposition to isolate what truly moves the needle before writing a line of code."
  },
  {
    step: "02",
    title: "Find Signal in Raw Data",
    desc: "Real-world data is noisy and imperfect. I conduct deep exploratory analysis, rigorous statistical profiling, and feature engineering to uncover predictive signal."
  },
  {
    step: "03",
    title: "Architect Autonomous Multi-Agent Systems",
    desc: "Moving beyond single prompt wrappers. I construct specialized agent networks (Scout, Analyst, Critic, Executor) with strict evaluation loops, deterministic tools, and MCP protocols."
  },
  {
    step: "04",
    title: "Validate & Stress-Test Empirically",
    desc: "A model or pipeline is useless without verifiable guarantees. I stress-test architectures against edge cases, latency budgets, data drift, and human-in-the-loop validation."
  },
  {
    step: "05",
    title: "Deploy as Production-Grade Products",
    desc: "Containerized with Docker, automated via CI/CD, orchestrated in cloud environments (AWS/FastAPI), and wrapped in sleek, accessible interfaces that end-users love."
  }
];

export const KEY_METRICS: MetricItem[] = [
  {
    value: "8.33",
    label: "CGPA · KIIT",
    subtext: "Computer Science & Engineering"
  },
  {
    value: "98.68%",
    label: "Model Accuracy",
    subtext: "Fraud Detection & Classification"
  },
  {
    value: "70%",
    label: "Effort Reduction",
    subtext: "Automated NLP Feedback Workflows"
  },
  {
    value: "+35%",
    label: "Data Prep Speedup",
    subtext: "Standardized Decision Pipelines"
  },
  {
    value: "98%",
    label: "LSTM Accuracy",
    subtext: "Sentiment Analysis Model"
  },
  {
    value: "8+",
    label: "Projects Shipped",
    subtext: "Production ML, AI & Analytics"
  }
];

export const PROJECTS: ProjectItem[] = [
  {
    id: "automl",
    num: "01",
    title: "AutoML",
    category: "Autonomous Agentic AI",
    headline: "Agentic Model Training & Optimization Platform",
    description: "Architected a three-agent system on FastAPI integrated via custom Model Context Protocol (MCP) servers and n8n orchestration. Automates data profiling, statistical preprocessing, and generates production-ready Scikit-Learn training pipelines with a real-time execution dashboard.",
    driveVideoId: "11J9LFPcJzzHUwzVqeW-wCaBmodXkK8BS",
    driveViewUrl: "https://drive.google.com/file/d/11J9LFPcJzzHUwzVqeW-wCaBmodXkK8BS/view?usp=drive_link",
    metrics: [
      { label: "End-to-End Pipeline", value: "< 3m" },
      { label: "MCP Architecture", value: "3 Agents" },
      { label: "Runtime Sandbox", value: "FastAPI" }
    ],
    tags: ["FastAPI", "MCP", "n8n", "OpenAI", "Docker", "Next.js", "Scikit-Learn"],
    links: {
      drive: "https://drive.google.com/file/d/11J9LFPcJzzHUwzVqeW-wCaBmodXkK8BS/view?usp=drive_link",
      github: "https://github.com/legitscarf"
    },
    featured: true
  },
  {
    id: "leadfox",
    num: "02",
    title: "LeadFox",
    category: "Multi-Agent Automation",
    headline: "Autonomous Recruiter Outreach & Intelligence Engine",
    description: "Built a 3-agent CrewAI orchestration layered atop n8n backend workflows exposed as MCP servers. Automates prospect research, verified email discovery, and personalized cold outreach drafting end-to-end with human-in-the-loop approval gates.",
    driveVideoId: "1O1ZJMb27GJ9k9sPTGOuu9hOhHbBJcl9l",
    driveViewUrl: "https://drive.google.com/file/d/1O1ZJMb27GJ9k9sPTGOuu9hOhHbBJcl9l/view?usp=drive_link",
    metrics: [
      { label: "Per Prospect Workflow", value: "< 10m" },
      { label: "CrewAI Pipeline", value: "3 Agents" },
      { label: "Human Verification", value: "100%" }
    ],
    tags: ["CrewAI", "n8n", "MCP", "Hunter.io", "Firecrawl", "Streamlit", "Python"],
    links: {
      drive: "https://drive.google.com/file/d/1O1ZJMb27GJ9k9sPTGOuu9hOhHbBJcl9l/view?usp=drive_link",
      github: "https://github.com/legitscarf"
    },
    featured: true
  },
  {
    id: "omega",
    num: "03",
    title: "Omega",
    category: "Decision Intelligence & Analytics",
    headline: "Automated Enterprise Decision-Intelligence Platform",
    description: "Architected a decision-intelligence engine utilizing containerized data processing pipelines. Applied classical statistical regression to model future revenue trajectories directly from raw enterprise data, accelerating baseline data preparation speed by 35%.",
    driveVideoId: "13-fJPfu7vcwgN61EXbKCAaimNfgKmBC2",
    driveViewUrl: "https://drive.google.com/file/d/13-fJPfu7vcwgN61EXbKCAaimNfgKmBC2/view?usp=drive_link",
    metrics: [
      { label: "Data Prep Speedup", value: "+35%" },
      { label: "Revenue Modeling", value: "ML Regr." },
      { label: "Deployment", value: "Docker" }
    ],
    tags: ["Python", "OpenAI", "SQL", "Docker", "Streamlit", "Statistical Modeling"],
    links: {
      drive: "https://drive.google.com/file/d/13-fJPfu7vcwgN61EXbKCAaimNfgKmBC2/view?usp=drive_link",
      github: "https://github.com/legitscarf"
    },
    featured: true
  },
  {
    id: "autojob",
    num: "04",
    title: "AutoJob",
    category: "Autonomous Agent Architecture",
    headline: "Autonomous Multi-Role Job Application Engine (Under Development)",
    description: "Currently engineering an autonomous 3-agent daemon (Scout, Tailor, Executor) designed to monitor recruitment boards, synthesize custom ATS-optimized resumes (target ATS score > 94%), and dispatch applications without manual human intervention.",
    statusBadge: "Under Development",
    metrics: [
      { label: "Target Automation", value: "100%" },
      { label: "Target Per Role", value: "< 2m" },
      { label: "Status", value: "In Build" }
    ],
    tags: ["Agentic AI", "Python", "LLMs", "ATS Optimization", "Web Automation", "In Progress"],
    links: {
      github: "https://github.com/legitscarf"
    }
  },
  {
    id: "optitrade",
    num: "05",
    title: "OptiTrade",
    category: "Fintech & Algorithmic Intelligence",
    headline: "AI-Powered Options Trading & Risk Management Architecture",
    description: "Engineered an intelligent options trading workflow combining quantitative statistical indicators, volatility surface modeling, and multi-agent risk evaluation before trade execution.",
    metrics: [
      { label: "Risk Protocols", value: "Automated" },
      { label: "Latency", value: "Sub-Second" },
      { label: "Execution", value: "Modular" }
    ],
    tags: ["Python", "Financial Modeling", "Time Series", "Quantitative Analysis", "Docker"],
    links: {
      github: "https://github.com/legitscarf"
    }
  },
  {
    id: "fraud-detection",
    num: "06",
    title: "Fraudulent Job Prediction",
    category: "Applied Machine Learning",
    headline: "High-Precision Fraud Detection Classifier",
    description: "Built an end-to-end NLP and classification pipeline to detect fraudulent listings with 98.68% accuracy using advanced text vectorization and gradient boosted decision trees.",
    metrics: [
      { label: "Model Accuracy", value: "98.68%" },
      { label: "Pipeline", value: "NLP + XGBoost" },
      { label: "Feature Matrix", value: "50+ Signals" }
    ],
    tags: ["Scikit-learn", "XGBoost", "NLP", "Pandas", "Feature Engineering"],
    links: {
      github: "https://github.com/legitscarf"
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    id: "capgemini",
    role: "Software Engineer Trainee",
    company: "Capgemini",
    period: "Dec 2025 – Present",
    location: "Bhubaneswar, India",
    isCurrent: true,
    bullets: [
      "Engineered and governed CI/CD pipelines using Jenkins, GitHub, and Maven ensuring reliable, automated release cycles.",
      "Deployed containerized services with Docker across AWS EC2, RDS, and S3 for scalable production workloads.",
      "Designed interactive Power BI dashboards from structured datasets to surface operational KPI trends to stakeholders."
    ],
    skills: ["Jenkins", "Docker", "AWS (EC2/S3/RDS)", "CI/CD", "Power BI", "Maven"]
  },
  {
    id: "cmb-greens",
    role: "GenAI Developer Intern",
    company: "CMB Greens LLP",
    period: "Jun 2025 – Jul 2025",
    location: "Remote",
    bullets: [
      "Built RAG-based LLM inference pipelines to automate enterprise document workflows and knowledge retrieval end-to-end.",
      "Applied prompt engineering and pipeline fine-tuning, reducing LLM API costs by 15% while boosting output consistency.",
      "Shipped client-facing prototypes via Streamlit and Gradio for real-time stakeholder testing and feedback."
    ],
    skills: ["RAG Pipelines", "LLMs", "Prompt Engineering", "Streamlit", "Gradio", "Python"]
  },
  {
    id: "mckinsey",
    role: "Forward Fellow — Future Leadership Program",
    company: "McKinsey & Company",
    period: "Apr 2025 – Jun 2025",
    location: "Virtual",
    bullets: [
      "Applied MECE, 80/20 rule, and priority matrix frameworks to decompose complex, ambiguous business challenges systematically.",
      "Collaborated on an analytics-driven traffic optimization case study using structured management consulting methodologies."
    ],
    skills: ["MECE Framework", "Consulting", "Strategic Analytics", "Structured Problem Solving"]
  },
  {
    id: "zidio",
    role: "Data Science & Analytics Intern",
    company: "Zidio Development",
    period: "Jul 2024 – Oct 2024",
    location: "Remote",
    bullets: [
      "Engineered an LSTM neural network model with 98% accuracy to automate sentiment classification on customer feedback at scale.",
      "Reduced manual tagging effort by 70% through Python-driven NLP processing pipelines.",
      "Delivered actionable customer intelligence from 10,000+ feedback records directly influencing retention and CX strategies."
    ],
    skills: ["LSTM", "NLP", "Python", "Sentiment Analysis", "Customer Analytics"]
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "Agentic AI & GenAI Systems",
    icon: "Bot",
    accent: "indigo",
    skills: [
      "Multi-Agent Systems",
      "CrewAI",
      "LangGraph",
      "OpenAI Agents SDK",
      "MCP (Model Context Protocol)",
      "RAG Architectures",
      "Prompt Engineering",
      "Hugging Face",
      "LangChain",
      "Quantization"
    ]
  },
  {
    title: "Machine Learning & Deep Learning",
    icon: "Brain",
    accent: "teal",
    skills: [
      "TensorFlow",
      "Keras",
      "Scikit-learn",
      "XGBoost",
      "LSTM / RNNs",
      "CNNs & Computer Vision",
      "Time Series Forecasting",
      "NLP",
      "Statistical Regression",
      "Gradio"
    ]
  },
  {
    title: "Cloud Infrastructure & DevOps",
    icon: "Cloud",
    accent: "gold",
    skills: [
      "AWS EC2 & S3",
      "AWS SageMaker",
      "AWS RDS",
      "Docker Containerization",
      "Jenkins CI/CD",
      "Maven",
      "GCP BigQuery",
      "Shell Scripting",
      "Linux Administration"
    ]
  },
  {
    title: "Data Analytics & Business Intelligence",
    icon: "BarChart3",
    accent: "violet",
    skills: [
      "SQL (Advanced)",
      "Power BI",
      "Tableau",
      "Exploratory Data Analysis (EDA)",
      "A/B Testing",
      "Hypothesis Testing",
      "Cohort Analysis",
      "Advanced Excel",
      "Predictive Analytics"
    ]
  },
  {
    title: "Engineering & Programming Languages",
    icon: "Code2",
    accent: "rose",
    skills: [
      "Python",
      "TypeScript",
      "React",
      "SQL",
      "FastAPI",
      "C++",
      "C",
      "Streamlit",
      "Git & GitHub",
      "Next.js"
    ]
  }
];

export const ACHIEVEMENTS: AchievementItem[] = [
  {
    id: "google-analytics",
    title: "Google Data Analytics Professional Certificate",
    issuer: "Google",
    description: "Professional credential covering enterprise data cleaning, statistical visualization, and real-world analytical modeling.",
    icon: "Award",
    tag: "Professional Certification"
  },
  {
    id: "oci-genai",
    title: "Oracle Cloud Infrastructure 2025 — GenAI Professional",
    issuer: "Oracle",
    description: "Certified in enterprise GenAI stack — LLM deployment, RAG architectures, and cloud AI infrastructure.",
    icon: "Cloud",
    tag: "Cloud Credential"
  },
  {
    id: "coding-ninjas",
    title: "4× Achievers Badge",
    issuer: "Coding Ninjas",
    description: "Four consecutive badges for algorithmic problem-solving and competitive programming proficiency.",
    icon: "Zap",
    tag: "Algorithms"
  },
  {
    id: "ncc-cadet",
    title: "NCC 'A' Certificate · Corps Leader",
    issuer: "National Cadet Corps",
    description: "Led a troop of 30+ NCC cadets in annual drills and state events; decorated for discipline and command leadership.",
    icon: "Shield",
    tag: "Leadership"
  },
  {
    id: "bain-brainwars",
    title: "BRAINWARS Finalist Challenge",
    issuer: "Bain & Company",
    description: "Solved high-stakes corporate business cases using rigorous MECE frameworks in Bain's premier analytical contest.",
    icon: "Compass",
    tag: "Case Competition"
  },
  {
    id: "kraya-kuber",
    title: "Finance & Equity Analyst",
    issuer: "Kraya & Kuber Investment Society",
    description: "Evaluated equity reports, built DCF valuation models, and automated financial data extraction for portfolio strategy.",
    icon: "TrendingUp",
    tag: "Finance & Markets"
  }
];
