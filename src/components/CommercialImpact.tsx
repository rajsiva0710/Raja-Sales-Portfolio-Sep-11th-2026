import React from "react";
import { Globe, TrendingUp, Briefcase, Award, ShieldCheck } from "lucide-react";
import { COMMERCIAL_METRICS, REGIONAL_FOOTPRINT } from "../content/metrics";
import { ScrollReveal } from "./ScrollReveal";

export const CommercialImpact: React.FC = () => {
  return (
    <section
      id="commercial-impact"
      className="py-16 sm:py-24 bg-[#EAE7E2] dark:bg-[#161514] border-b border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
              <span>Commercial Impact</span>
            </div>
            <h2
              id="impact-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
            >
              Measurable Commercial & Revenue Outcomes
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
              Selected indicators from international B2B technology sales, account growth and solution-led engagements.
            </p>
          </div>
        </ScrollReveal>

        {/* Primary Metrics Bento Grid */}
        <div
          id="metrics-grid"
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 sm:gap-6 mb-16"
        >
          {COMMERCIAL_METRICS.map((metric, idx) => (
            <ScrollReveal key={metric.id} delay={idx * 0.07}>
              <div
                id={`metric-card-${metric.id}`}
                className={`p-6 bg-[#F5F2ED] dark:bg-[#1E1C1A] border border-black/15 dark:border-white/15 flex flex-col justify-between h-full hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out cursor-default ${
                  idx === 0 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div>
                  <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B7D6B] block mb-4">
                    Indicator 0{idx + 1}
                  </span>
                  <div className="font-serif text-3xl sm:text-4xl font-normal text-[#1A1A1A] dark:text-[#F5F2ED] tracking-tight mb-2">
                    {metric.value}
                  </div>
                  <h3 className="text-xs uppercase tracking-wider font-bold text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80 leading-snug mb-2">
                    {metric.label}
                  </h3>
                </div>
                {metric.description && (
                  <div className="pt-3 border-t border-black/10 dark:border-white/10 mt-3">
                    <p className="text-xs text-[#1A1A1A]/60 dark:text-[#F5F2ED]/60 leading-relaxed">
                      {metric.description}
                    </p>
                  </div>
                )}
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Regional Footprint Bento */}
        <ScrollReveal delay={0.2}>
          <div
            id="regional-footprint-container"
            className="bg-[#F5F2ED] dark:bg-[#1E1C1A] border border-black/15 dark:border-white/15 p-6 sm:p-8 lg:p-10 hover:border-[#8B7D6B]/50 hover:shadow-md transition-all duration-300 ease-in-out"
          >
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8 pb-6 border-b border-black/10 dark:border-white/10">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-[#1A1A1A] dark:bg-[#8B7D6B] text-[#F5F2ED] border border-black/20 dark:border-white/10 flex items-center justify-center">
                  <Globe className="w-4 h-4 text-[#8B7D6B] dark:text-[#F5F2ED]" />
                </div>
                <div>
                  <h3 className="font-serif text-xl font-normal text-[#1A1A1A] dark:text-[#F5F2ED]">
                    International Commercial Footprint
                  </h3>
                  <p className="text-xs text-[#1A1A1A]/60 dark:text-[#F5F2ED]/60">
                    Cross-border enterprise sales execution across three core geographies
                  </p>
                </div>
              </div>
              <div className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80 bg-[#EAE7E2] dark:bg-[#252220] px-3.5 py-1.5 border border-black/10 dark:border-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#8B7D6B]" />
                <span>Multi-Region Governance</span>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {REGIONAL_FOOTPRINT.map((region) => (
                <div
                  key={region.id}
                  id={`region-card-${region.id}`}
                  className="bg-[#EAE7E2]/50 dark:bg-[#252220] p-6 border border-black/10 dark:border-white/10 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/25 hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out"
                >
                  <div className="flex items-center justify-between mb-3">
                    <h4 className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">
                      {region.region}
                    </h4>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B7D6B] bg-[#EAE7E2] dark:bg-[#1E1C1A] px-2.5 py-0.5 border border-black/10 dark:border-white/10">
                      {region.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
                    {region.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};
