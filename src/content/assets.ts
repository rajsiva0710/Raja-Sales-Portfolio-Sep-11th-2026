import { StrategicAsset } from "../types";

export const STRATEGIC_ASSETS: StrategicAsset[] = [
  {
    id: "brd",
    name: "Business Requirement Documents (BRD)",
    documentType: "Requirements & Architecture",
    description: "Detailed operational requirements, current-state vs future-state mapping, and technical integration requirements built during discovery.",
    usage: "Bridges executive business goals with engineering deliverability, ensuring accurate scoping.",
  },
  {
    id: "proposals",
    name: "Commercial Solution Proposals",
    documentType: "Commercial Strategy",
    description: "Executive proposals framing business challenge, proposed technical architecture, phased delivery milestones, and commercial terms.",
    usage: "Positions value rather than commodity hours, securing leadership and procurement buy-in.",
  },
  {
    id: "poc",
    name: "POC Roadmaps & Evaluation Charters",
    documentType: "Validation Framework",
    description: "Time-boxed pilot agreements with pre-agreed success criteria, technical test cases, and transition-to-production criteria.",
    usage: "De-risks enterprise technology adoption and shortens proof-of-concept timelines.",
  },
  {
    id: "roi",
    name: "ROI & Business Case Financial Models",
    documentType: "Financial Justification",
    description: "Quantified payback calculations, cost of inaction models, labor efficiency metrics, and payback period forecasts.",
    usage: "Provides CFOs and Economic Buyers with the concrete numbers needed to justify capital allocation.",
  },
  {
    id: "journey",
    name: "Customer Lifecycle & Journey Maps",
    documentType: "Adoption Strategy",
    description: "End-to-end user onboarding workflows, change management milestones, and milestone celebration cadences.",
    usage: "Ensures post-sale user adoption, accelerating time-to-value for newly deployed platforms.",
  },
  {
    id: "expansion",
    name: "Strategic Account Expansion Maps",
    documentType: "Account Governance",
    description: "Multi-year account growth blueprints mapping sister business units, cross-sell opportunities, and additional license tiers.",
    usage: "Transforms single transactional wins into multi-year recurring revenue relationships.",
  },
];

export const ASSET_CONFIDENTIALITY_NOTE =
  "Detailed asset samples and case artifacts can be shared selectively during professional discussions.";
