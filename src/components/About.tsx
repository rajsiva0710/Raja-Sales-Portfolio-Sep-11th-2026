import React from "react";
import { Check, ArrowRight, Layers, Cpu, Wrench, Shield, Target, Award } from "lucide-react";
import { CORE_COMPETENCIES, TECHNOLOGY_DOMAINS, TOOL_STACK, COMMERCIAL_LIFECYCLE } from "../content/solutions";
import { ScrollReveal } from "./ScrollReveal";

export const About: React.FC = () => {
  return (
    <section
      id="about"
      className="py-16 sm:py-24 bg-[#F5F2ED] dark:bg-[#121212] border-b border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
              <span>Value Architecture</span>
            </div>
            <h2
              id="about-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
            >
              How I Create Commercial Value
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
              My commercial strength sits at the intersection of business development, solution consulting, deep technology comprehension, and disciplined account governance.
            </p>
          </div>
        </ScrollReveal>

        {/* The Intersection Matrix / Value Proposition Bento */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Main Narrative Card (7 cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-7">
            <div className="bg-[#EAE7E2] dark:bg-[#1C1A17] p-8 sm:p-10 border border-black/15 dark:border-white/15 flex flex-col justify-between h-full hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
              <div>
                <h3 className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] dark:text-[#F5F2ED] mb-5 leading-snug">
                  Moving complex technology from ambiguity to commercial certainty.
                </h3>
                <p className="text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85 text-base leading-relaxed mb-4">
                  Enterprise technology buyers rarely have difficulty locating software vendors. Their real challenge lies in articulating internal bottlenecks, aligning fragmented executive stakeholders, and de-risking operational change.
                </p>
                <p className="text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 text-base leading-relaxed mb-6">
                  I operate across the entire commercial lifecycle — diagnosing operational friction with business leaders, translating requirements into viable technical architectures alongside engineering teams, and driving consensus through rigorous business cases.
                </p>
              </div>

              {/* Core Pillars */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-6 border-t border-black/10 dark:border-white/10">
                <div className="p-4 bg-[#F5F2ED] dark:bg-[#252220] border border-black/10 dark:border-white/10 hover:border-[#8B7D6B] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8B7D6B] mb-1">01 Discovery</p>
                  <p className="text-xs font-serif font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">Problem-Led Diagnosis</p>
                </div>
                <div className="p-4 bg-[#F5F2ED] dark:bg-[#252220] border border-black/10 dark:border-white/10 hover:border-[#8B7D6B] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8B7D6B] mb-1">02 Architecture</p>
                  <p className="text-xs font-serif font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">Technical Scoping</p>
                </div>
                <div className="p-4 bg-[#F5F2ED] dark:bg-[#252220] border border-black/10 dark:border-white/10 hover:border-[#8B7D6B] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out">
                  <p className="text-[9px] font-bold uppercase tracking-[0.25em] text-[#8B7D6B] mb-1">03 Revenue</p>
                  <p className="text-xs font-serif font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">Lifecycle Expansion</p>
                </div>
              </div>
            </div>
          </ScrollReveal>

          {/* Strategic Competence Matrix - The Intersection of Six Disciplines (5 cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-5">
            <div className="bg-[#EAE7E2] dark:bg-[#1C1A17] p-8 sm:p-10 border border-black/15 dark:border-white/15 flex flex-col justify-between h-full hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] text-[#8B7D6B] font-bold mb-4 inline-block">
                  Strategic Competence Matrix
                </span>
                <h4 className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F5F2ED] mb-4">
                  The Intersection of Six Disciplines
                </h4>
                <p className="text-xs text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 mb-6">
                  A balanced capability set ensuring technology sales cycles do not break between pitch and delivery.
                </p>

                {/* Six Discipline Cards Appearing Individually on Scroll Down */}
                <div className="space-y-2.5">
                  {[
                    { label: "Business Development", desc: "Target account prospecting & pipeline velocity" },
                    { label: "Solution Consulting", desc: "BRD scoping, POC charters & architecture mapping" },
                    { label: "Technology Understanding", desc: "AI, SaaS, APIs, cloud platforms & custom code" },
                    { label: "Commercial Negotiation", desc: "Value-based pricing, legal, security & procurement" },
                    { label: "Strategic Account Management", desc: "Stakeholder retention, QBRs & executive sponsorship" },
                    { label: "Revenue Growth", desc: "Predictable expansion, upsell & ARR protection" },
                  ].map((item, idx) => (
                    <ScrollReveal key={item.label} delay={idx * 0.08} direction="up">
                      <div
                        id={`competence-card-${idx + 1}`}
                        className="flex items-start gap-3 p-3 bg-[#F5F2ED]/80 dark:bg-[#252220] border border-black/5 dark:border-white/10 hover:border-[#8B7D6B] dark:hover:border-[#8B7D6B] hover:bg-[#F5F2ED] dark:hover:bg-[#2A2724] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out"
                      >
                        <div className="w-5 h-5 rounded-full bg-[#1A1A1A] dark:bg-[#8B7D6B] text-[#F5F2ED] flex items-center justify-center text-[10px] font-bold shrink-0 mt-0.5">
                          {idx + 1}
                        </div>
                        <div>
                          <span className="text-xs font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F5F2ED] block leading-tight">
                            {item.label}
                          </span>
                          <span className="text-xs text-[#1A1A1A]/65 dark:text-[#F5F2ED]/65">
                            {item.desc}
                          </span>
                        </div>
                      </div>
                    </ScrollReveal>
                  ))}
                </div>
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Complete Commercial Lifecycle Progression */}
        <ScrollReveal delay={0.15}>
          <div className="bg-[#EAE7E2] dark:bg-[#1C1A17] border border-black/15 dark:border-white/15 p-6 sm:p-8 lg:p-10 mb-16 hover:border-[#8B7D6B]/50 hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
              <div>
                <h3 className="font-serif text-xl font-normal text-[#1A1A1A] dark:text-[#F5F2ED]">
                  End-to-End Commercial Lifecycle Execution
                </h3>
                <p className="text-xs text-[#1A1A1A]/60 dark:text-[#F5F2ED]/60">
                  A structured, disciplined flow from target market analysis to multi-year account expansion
                </p>
              </div>
              <span className="text-[10px] uppercase tracking-widest font-bold text-[#8B7D6B] bg-[#F5F2ED] dark:bg-[#252220] px-3.5 py-1.5 border border-black/10 dark:border-white/10 w-fit">
                Non-Linear Stakeholder Governance
              </span>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-9 gap-3">
              {COMMERCIAL_LIFECYCLE.map((step, idx) => (
                <div
                  key={step.step}
                  className="p-3.5 bg-[#F5F2ED] dark:bg-[#252220] border border-black/10 dark:border-white/10 hover:border-[#8B7D6B] hover:-translate-y-1 hover:shadow-xs transition-all duration-300 ease-in-out flex flex-col justify-between"
                >
                  <div>
                    <span className="text-[9px] font-bold text-[#8B7D6B] block mb-1">
                      0{idx + 1}
                    </span>
                    <p className="text-xs font-serif font-bold text-[#1A1A1A] dark:text-[#F5F2ED] leading-snug mb-1">
                      {step.step}
                    </p>
                  </div>
                  <p className="text-[11px] text-[#1A1A1A]/65 dark:text-[#F5F2ED]/65 leading-tight">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

        {/* Core Competencies & Technology Domains */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-12">
          
          {/* Core Competencies (6 Cols) */}
          <ScrollReveal delay={0.1} className="lg:col-span-6">
            <div className="bg-[#EAE7E2] dark:bg-[#1C1A17] p-6 sm:p-8 border border-black/15 dark:border-white/15 h-full hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-2.5 mb-6">
                <Layers className="w-5 h-5 text-[#8B7D6B]" />
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">
                  Core Sales & Commercial Competencies
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {CORE_COMPETENCIES.map((comp) => (
                  <span
                    key={comp}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F2ED] dark:bg-[#252220] border border-black/10 dark:border-white/10 text-xs font-semibold text-[#1A1A1A] dark:text-[#F5F2ED] hover:border-[#8B7D6B] hover:shadow-xs transition-all duration-300 ease-in-out"
                  >
                    <Check className="w-3.5 h-3.5 text-[#8B7D6B]" />
                    <span>{comp}</span>
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

          {/* Technology Domains (6 Cols) */}
          <ScrollReveal delay={0.2} className="lg:col-span-6">
            <div className="bg-[#EAE7E2] dark:bg-[#1C1A17] p-6 sm:p-8 border border-black/15 dark:border-white/15 h-full hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out">
              <div className="flex items-center gap-2.5 mb-6">
                <Cpu className="w-5 h-5 text-[#8B7D6B]" />
                <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">
                  Technology Domains Scoped & Sold
                </h3>
              </div>
              <div className="flex flex-wrap gap-2">
                {TECHNOLOGY_DOMAINS.map((domain) => (
                  <span
                    key={domain}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 bg-[#F5F2ED] dark:bg-[#252220] border border-black/10 dark:border-white/10 text-xs font-medium text-[#1A1A1A] dark:text-[#F5F2ED] hover:border-[#8B7D6B] hover:shadow-xs transition-all duration-300 ease-in-out"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                    <span>{domain}</span>
                  </span>
                ))}
              </div>
            </div>
          </ScrollReveal>

        </div>

        {/* Tool Stack (Visually Secondary) */}
        <ScrollReveal delay={0.15}>
          <div className="bg-[#EAE7E2] dark:bg-[#1C1A17] p-6 border border-black/15 dark:border-white/15 text-xs text-[#1A1A1A]/75 dark:text-[#F5F2ED]/75 flex flex-col sm:flex-row sm:items-center justify-between gap-4 hover:border-[#8B7D6B]/40 hover:shadow-sm transition-all duration-300 ease-in-out">
            <div className="flex items-center gap-2 font-semibold text-[#1A1A1A] dark:text-[#F5F2ED] shrink-0">
              <Wrench className="w-4 h-4 text-[#8B7D6B]" />
              <span className="text-[11px] uppercase tracking-wider font-bold">Systems & Tools Managed:</span>
            </div>
            <div className="flex flex-wrap items-center gap-x-6 gap-y-2 text-xs">
              <div>
                <span className="font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">CRM:</span>{" "}
                {TOOL_STACK.crm.join(", ")}
              </div>
              <div className="hidden sm:block text-black/20 dark:text-white/20">|</div>
              <div>
                <span className="font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">Sales Intelligence:</span>{" "}
                {TOOL_STACK.intelligence.join(", ")}
              </div>
              <div className="hidden sm:block text-black/20 dark:text-white/20">|</div>
              <div>
                <span className="font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">Delivery:</span>{" "}
                {TOOL_STACK.delivery.join(", ")}
              </div>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

