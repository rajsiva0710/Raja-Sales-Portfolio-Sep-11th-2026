export interface MetricItem {
  id: string;
  value: string;
  label: string;
  description?: string;
  context?: string;
}

export interface RegionFootprint {
  id: string;
  region: string;
  subtitle: string;
  description: string;
}

export interface ExperienceRole {
  id: string;
  company: string;
  productLine?: string;
  title: string;
  period: string;
  summary: string;
  keyImpact: string[];
  isCurrent?: boolean;
}

export interface SolutionCategory {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  examples: string[];
  focus: string;
}

export interface SalesPhase {
  phase: string;
  title: string;
  description: string;
  keyActivities: string[];
}

export interface SalesMethodology {
  code: string;
  name: string;
  application: string;
}

export interface StrategicAsset {
  id: string;
  name: string;
  description: string;
  usage: string;
  documentType: string;
}

export interface CaseStudy {
  id: string;
  number: string;
  title: string;
  industry: string;
  tags: string[];
  challenge: string;
  commercialApproach: string;
  solution: string;
  closingApproach: string;
  outcome: string[];
  verifiedMetricHighlight?: string;
}

export interface InsightArticle {
  id: string;
  number: string;
  title: string;
  subtitle: string;
  summary: string;
  content: string[];
  keyTakeaway: string;
}

export interface Testimonial {
  id: string;
  quote: string;
  author: string;
  title: string;
  context?: string;
}
