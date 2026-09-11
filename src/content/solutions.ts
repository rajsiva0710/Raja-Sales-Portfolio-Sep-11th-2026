import { SolutionCategory } from "../types";

export const SOLUTION_GROUPS: SolutionCategory[] = [
  {
    id: "saas-products",
    number: "01",
    title: "SaaS & Product Solutions",
    subtitle: "Predictable, workflow-critical subscription platforms",
    description:
      "Commercializing modern SaaS platforms and specialized industry applications by aligning product capabilities with core operational and compliance workflows.",
    examples: [
      "TC+ LIMS (Laboratory Information Management)",
      "Compliance Platforms & Audit Workflows",
      "B2B SaaS Products & Vertical Systems",
      "Product Engineering & Roadmapping",
      "Digital Product Lifecycle Management",
    ],
    focus: "Subscription ARR, User Adoption & Customer Retention",
  },
  {
    id: "ai-automation",
    number: "02",
    title: "AI & Intelligent Automation",
    subtitle: "Pragmatic enterprise AI solving concrete operational friction",
    description:
      "Translating complex Generative AI, machine learning, and automation capabilities into measurable business cases for enterprise and growth-stage clients.",
    examples: [
      "Generative AI & LLM Applications",
      "Document Intelligence & OCR Workflows",
      "RAG-based Knowledge Retrieval Systems",
      "Computer Vision & Quality Automation",
      "AI-Assisted Operational Workflows",
      "Intelligent Process Automation",
    ],
    focus: "Labor Efficiency, Accuracy & Knowledge Accessibility",
  },
  {
    id: "custom-software",
    number: "03",
    title: "Custom Software & Digital Platforms",
    subtitle: "Tailored digital architectures for scale and differentiation",
    description:
      "Structuring full-lifecycle digital engagements from technical scoping to commercial contracts for enterprise-grade web, mobile, and workflow applications.",
    examples: [
      "Custom Enterprise Web Applications",
      "Native & Cross-Platform Mobile Apps",
      "ERP & CRM System Integrations",
      "Automated Business Workflows",
      "Multi-Sided Digital Marketplaces",
      "Enterprise Portals & Commerce Platforms",
    ],
    focus: "Time-to-Market, Systems Integration & Scalability",
  },
  {
    id: "enterprise-services",
    number: "04",
    title: "Enterprise Technology & IT Services",
    subtitle: "Mission-critical platforms and dedicated engineering capacity",
    description:
      "Structuring long-term technical partnerships, enterprise software rollouts, and specialized IT staffing models for North American and global enterprises.",
    examples: [
      "Guidewire Core Insurance Platforms",
      "ETRM (Energy Trading & Risk Management)",
      "Enterprise Technology Staff Augmentation",
      "Dedicated Distributed Engineering Teams",
      "Strategic Technology Partnerships",
      "Technical Sourcing & SLA Management",
    ],
    focus: "Milestone Delivery, Risk Mitigation & High-Impact Capacity",
  },
];

export const CORE_COMPETENCIES = [
  "Strategic Account Management",
  "Consultative Selling",
  "Solution Consulting",
  "GTM Strategy",
  "Target Account Selling",
  "Discovery & Qualification",
  "Technical Scoping",
  "BRD / RFP Development",
  "Value-Based Selling",
  "Commercial Negotiation",
  "Stakeholder Alignment",
  "Customer Lifecycle Management",
  "Upselling & Expansion",
  "Revenue Growth",
];

export const TECHNOLOGY_DOMAINS = [
  "SaaS Platforms",
  "Custom Software",
  "AI Solutions",
  "Generative AI",
  "Document Intelligence",
  "Computer Vision",
  "Mobile Applications",
  "Web Applications",
  "Product Engineering",
  "IT Staff Augmentation",
  "Enterprise Technology",
];

export const TOOL_STACK = {
  crm: ["Salesforce", "HubSpot", "Zoho"],
  intelligence: ["Apollo.io", "LinkedIn Sales Navigator"],
  delivery: ["Jira", "Asana", "Trello", "ClickUp"],
};

export const COMMERCIAL_LIFECYCLE = [
  { step: "Market", desc: "ICP & TAM definition" },
  { step: "Prospect", desc: "Multi-channel outreach" },
  { step: "Discovery", desc: "Business problem mapping" },
  { step: "Solution", desc: "Technical & architecture scoping" },
  { step: "Business Case", desc: "ROI & commercial justification" },
  { step: "Negotiation", desc: "Stakeholder & contract alignment" },
  { step: "Closure", desc: "Formal agreement execution" },
  { step: "Delivery Alignment", desc: "Seamless engineering handoff" },
  { step: "Expansion", desc: "Upsell, cross-sell & retention" },
];
