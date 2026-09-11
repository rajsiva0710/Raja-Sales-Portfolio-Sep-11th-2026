import { SalesPhase, SalesMethodology } from "../types";

export const SALES_METHODOLOGIES: SalesMethodology[] = [
  {
    code: "TAS",
    name: "Target Account Selling",
    application: "Account targeting, ICP prioritization, and competitive positioning within strategic accounts.",
  },
  {
    code: "Solution Selling",
    name: "Problem-Led Selling",
    application: "Deep consultative discovery, diagnosing friction points, and mapping bespoke technology architectures.",
  },
  {
    code: "MEDDPICC",
    name: "Enterprise Qualification",
    application: "Rigorous qualification across Metrics, Economic Buyer, Decision Criteria, Process, Pain, and Champions.",
  },
];

export const SIX_PHASES: SalesPhase[] = [
  {
    phase: "PHASE 01",
    title: "ICP & Account Intelligence",
    description: "Identify the right markets, accounts, stakeholders and business triggers before initiating contact.",
    keyActivities: [
      "Total addressable market segmentation",
      "Account tiering by technology stack and growth signals",
      "Multi-threaded stakeholder mapping (Economic Buyers, Technical Evaluators, Champions)",
      "Industry trigger identification (regulatory shifts, backlog, legacy debt)",
    ],
  },
  {
    phase: "PHASE 02",
    title: "Multi-Channel Prospecting",
    description: "Build targeted outreach across email, LinkedIn, sales intelligence and relationship channels.",
    keyActivities: [
      "Value-first, research-backed messaging tailored to buyer personas",
      "Sales Navigator & Apollo data enrichment for precise targeting",
      "Multi-touch sequences combining email, social touches, and network introductions",
      "Continuous message iteration based on engagement resonance",
    ],
  },
  {
    phase: "PHASE 03",
    title: "Discovery & Qualification",
    description: "Understand business problems, decision criteria, stakeholders, urgency, commercial impact and buying process.",
    keyActivities: [
      "Executive discovery uncovering root operational friction",
      "Quantifying business impact and cost of inaction",
      "Evaluating budget authority, decision timeline, and procurement hurdles",
      "Establishing early alignment with internal Champions",
    ],
  },
  {
    phase: "PHASE 04",
    title: "Solution Architecture",
    description: "Translate business requirements into viable, high-impact technology solutions.",
    keyActivities: [
      "Collaborative BRD (Business Requirement Document) authoring",
      "Technical scoping and engineering feasibility workshops",
      "Proof of Concept (POC) roadmap definition and success metrics",
      "Solution presentation connecting features directly to business ROI",
    ],
  },
  {
    phase: "PHASE 05",
    title: "Commercial Negotiation & Closure",
    description: "Build business cases, demonstrate value, manage procurement/security/legal stakeholders, negotiate commercials and drive consensus toward contract execution.",
    keyActivities: [
      "Comprehensive ROI model and business case demonstration",
      "Active navigation of legal, security, and procurement reviews",
      "Mutual action plan (MAP) tracking for predictable closure",
      "Contract terms, milestone structuring, and formal agreement signing",
    ],
  },
  {
    phase: "PHASE 06",
    title: "Expansion & Account Growth",
    description: "Support handoff, relationship management, renewal, upselling, cross-selling and strategic account development.",
    keyActivities: [
      "Structured delivery kickoff and post-sale alignment with delivery leaders",
      "Ongoing executive sponsor check-ins and quarterly business reviews (QBRs)",
      "Identifying adjacent department needs for platform expansion",
      "Securing renewals, expanding seat licenses, and driving additional services",
    ],
  },
];

export const LEADERSHIP_NOTE =
  "Where applicable, Rajakumar has translated structured sales practices into actionable guidance and enablement for junior business development and account teams — standardizing discovery hygiene, qualification criteria, and deal velocity.";
