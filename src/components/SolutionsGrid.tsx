import React from "react";
import { Layers, ArrowRight, Check } from "lucide-react";
import { SOLUTION_GROUPS } from "../content/solutions";
import { ScrollReveal } from "./ScrollReveal";

export const SolutionsGrid: React.FC = () => {
  return (
    <section
      id="solutions"
      className="py-16 sm:py-24 bg-[#EAE7E2] dark:bg-[#161514] border-b border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
              <span>Commercial Offerings</span>
            </div>
            <h2
              id="solutions-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
            >
              What I Sell
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
              A structured four-part technology architecture spanning high-growth SaaS, applied enterprise AI, custom platforms, and mission-critical engineering services.
            </p>
          </div>
        </ScrollReveal>

        {/* Four Strong Editorial Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {SOLUTION_GROUPS.map((group, idx) => (
            <ScrollReveal key={group.id} delay={idx * 0.1}>
              <div
                id={`solution-group-${group.id}`}
                className="bg-[#F5F2ED] dark:bg-[#1E1C1A] p-8 sm:p-10 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-between h-full"
              >
                <div>
                  {/* Header Row */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <span className="font-serif text-lg text-[#8B7D6B] italic">
                      Category {group.number}
                    </span>
                    <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B7D6B] bg-[#EAE7E2] dark:bg-[#252220] px-3 py-1 border border-black/10 dark:border-white/10">
                      {group.focus}
                    </span>
                  </div>

                  <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F5F2ED] tracking-tight mb-2">
                    {group.title}
                  </h3>
                  <p className="text-xs font-serif italic text-[#1A1A1A]/65 dark:text-[#F5F2ED]/65 mb-4">
                    {group.subtitle}
                  </p>

                  <p className="text-sm sm:text-base text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80 leading-relaxed mb-6">
                    {group.description}
                  </p>

                  {/* Selected Examples List */}
                  <div className="pt-6 border-t border-black/10 dark:border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B7D6B] mb-3">
                      Representative Scopes & Solutions:
                    </p>
                    <ul className="space-y-2.5">
                      {group.examples.map((example, i) => (
                        <li
                          key={i}
                          className="flex items-center gap-2.5 text-xs sm:text-sm text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B] shrink-0" />
                          <span>{example}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 dark:text-[#F5F2ED]/60">
                  <span>Enterprise & Mid-Market Scoping</span>
                  <span className="font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">Discovery → SLA Alignment</span>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
