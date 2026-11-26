// ✏️ Edit this file to update anything on your portfolio.
// All page content comes from here — no need to touch the components.

export const profile = {
  name: "Mohit Kumar Bathla",
  shortName: "Mohit Bathla",
  title: "Principal Engineer, Data & AI",
  company: "Red Hat (an IBM company)",
  location: "Bengaluru, India",
  tagline: "Forward Deployed Engineer in training",
  headline:
    "I turn messy business workflows into reliable AI systems that actually ship.",
  summary:
    "Principal Engineer and engineering lead with 10+ years building cloud-native platforms, APIs, analytics and AI-enabled products. I work across Python, distributed systems, Kubernetes and AWS/Azure, with a deep focus on LLM evaluation, RAG pipelines, agentic AI and AI governance.",
  email: "mohitbathla042@gmail.com",
  linkedin: "https://www.linkedin.com/in/mohit-bathla-124b64110",
  github: "https://github.com/bathlamohit",
  resume: "/Mohit_Bathla_Resume.pdf",
};

export const stats = [
  { value: "10+", label: "Years engineering" },
  { value: "9", label: "Engineers led" },
  { value: "35%", label: "Tech debt reduced" },
  { value: "20%", label: "Faster feature cycles" },
];

export const fdeJourney = {
  intro:
    "Forward Deployed Engineering sits where I've always worked best: in front of the customer, close to the problem, and accountable for the outcome. I'm now formalising that path.",
  points: [
    {
      title: "FDE Academy — 8-month program",
      text: "Training in customer discovery, problem framing, rapid prototyping and production delivery of AI systems. Certificate awarded by IITM Pravartak.",
    },
    {
      title: "Client-facing delivery",
      text: "Worked directly with clients at The Math Company, translating ambiguous business needs into technical requirements and shipped software.",
    },
    {
      title: "Applied AI in production",
      text: "Hands-on with RAG, agent frameworks (LangChain, LangGraph), vector databases, evals and MLOps — and building an LLM verification platform of my own.",
    },
  ],
};

export const experience = [
  {
    role: "Principal Engineer, Data & AI",
    company: "Red Hat (an IBM company)",
    period: "May 2026 – Present",
    points: [
      "Defined the architectural strategy for the Party Service, aligning data, platform and AI teams on data-quality, observability and schema-governance patterns.",
      "Integrated Google Address Validation into Party Service create/update workflows to improve data quality and schema validation.",
      "Champion AI governance and LLM evaluation practice, mentoring engineers on RAG pipelines, prompt engineering and responsible AI adoption.",
    ],
  },
  {
    role: "Lead Product Engineer | Engineering Lead",
    company: "The Math Company",
    period: "Feb 2023 – Apr 2026",
    points: [
      "Led a team of 9 engineers building the NucliOS low-code platform — application builder, dashboards and reporting.",
      "Cut technical debt by 35% in 6 months through architectural refactoring, reducing feature cycle time by 20%.",
      "Designed and built a full-stack application on FastAPI, React, Kubernetes (Azure), PostgreSQL and Redis.",
    ],
  },
  {
    role: "Senior Software Engineer",
    company: "Rakuten India",
    period: "Nov 2021 – Feb 2023",
    points: [
      "Built scalable backend services in Python (Django, Flask) for high-volume production systems.",
      "Delivered analytics dashboards and reporting tools with interactive visualisations.",
    ],
  },
  {
    role: "Software Engineer 2",
    company: "Epsilon",
    period: "Dec 2019 – Nov 2021",
    points: [
      "Engineered reactive forms and critical interfaces for GEO group creation, improving internal workflows.",
      "Introduced Jest test automation to raise coverage and reduce regressions.",
    ],
  },
  {
    role: "MEAN Stack Developer",
    company: "TEKsystems",
    period: "Mar 2019 – Nov 2019",
    points: [],
  },
  {
    role: "Software Engineer",
    company: "Mobile Programming LLC",
    period: "Dec 2017 – Feb 2019",
    points: [],
  },
];

export const projects = [
  {
    name: "Veritas AI",
    tag: "Founder · Applied AI product",
    description:
      "An LLM response-verification and AI governance platform. Checks model answers against knowledge bases, documents, SQL, code and summaries using deterministic metrics (TF-IDF, token-level F1, ROUGE-L, embedding similarity) instead of LLM-as-judge, plus policy checks for contradiction, completeness and auditability.",
    highlights: [
      "5-dimension evaluation engine: hallucination, grounding, bias/safety, confidence, completeness",
      "Governance layer with model registry, risk assessment and EU AI Act classifier",
      "Bias & fairness engine with zero LLM calls",
    ],
    stack: ["FastAPI", "PostgreSQL", "Pinecone", "Redis", "React", "Vite"],
    link: "",
  },
  {
    name: "Project Sankalp",
    tag: "FDE Academy · Agentic AI pilot",
    description:
      "A pharma supply-chain teaching case from the FDE Academy tech track. Built with a teammate: a LangGraph agentic pilot that models a real client engagement end to end — discovery, problem framing, prototype and handover.",
    highlights: [
      "Multi-step agent workflow built with LangGraph",
      "Scoped from a customer-discovery brief, FDE style",
    ],
    stack: ["Python", "LangGraph", "LLMs"],
    link: "",
  },
  {
    name: "NucliOS & client analytics",
    tag: "The Math Company · Client delivery",
    description:
      "Low-code platform and client-facing analytics solutions for enterprise customers (client names withheld). Led a 9-engineer team across the application builder, dashboards and reporting, and worked directly with client stakeholders.",
    highlights: [
      "35% less technical debt, 20% faster feature delivery",
      "Full-stack on Kubernetes (Azure) with FastAPI and React",
    ],
    stack: ["FastAPI", "React", "Kubernetes", "Azure", "PostgreSQL", "Redis"],
    link: "",
  },
];

export const skills = [
  {
    group: "AI & Machine Learning",
    items: ["RAG", "Agentic AI", "LangChain", "LangGraph", "LLM evaluation", "Embeddings", "Prompt engineering", "AI governance", "Feature engineering", "Model evaluation"],
  },
  {
    group: "FDE & Solution Delivery",
    items: ["Customer discovery", "Problem framing", "Solution architecture", "Rapid prototyping", "Stakeholder communication", "Business-process mapping"],
  },
  {
    group: "Backend & APIs",
    items: ["Python", "FastAPI", "Django", "Flask", "Node.js", "REST", "Microservices", "PostgreSQL", "Redis"],
  },
  {
    group: "Cloud & Platform",
    items: ["AWS", "Azure", "Kubernetes (EKS/AKS)", "Docker", "CI/CD", "Observability", "Sumo Logic"],
  },
  {
    group: "Frontend",
    items: ["React", "Vite", "JavaScript", "Jest", "Vitest"],
  },
  {
    group: "Leadership",
    items: ["Platform architecture", "Technical strategy", "Mentoring", "Root-cause analysis", "Team of 9"],
  },
];

export const credentials = [
  { title: "Forward Deployed Engineer Program", org: "FDE Academy · IITM Pravartak", year: "In progress" },
  { title: "Generative AI with Large Language Models", org: "Certification", year: "" },
  { title: "The Complete Agentic AI Engineering Course", org: "Certification", year: "2025" },
  { title: "Bachelor of Technology", org: "Invertis University", year: "2015" },
];
