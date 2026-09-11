import React, { useState } from "react";
import { FolderGit2, ChevronDown, ChevronUp, CheckCircle2, ArrowRight, ShieldCheck, Tag } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SELECTED_ENGAGEMENTS } from "../content/caseStudies";
import { ScrollReveal } from "./ScrollReveal";

export const SelectedEngagements: React.FC = () => {
  // Allow expanding/collapsing individual case studies via click or automatic hover
  const [pinnedIds, setPinnedIds] = useState<string[]>([]);
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const togglePin = (id: string) => {
    if (pinnedIds.includes(id)) {
      setPinnedIds(pinnedIds.filter((item) => item !== id));
    } else {
      setPinnedIds([...pinnedIds, id]);
    }
  };

  const expandAll = () => {
    if (pinnedIds.length === SELECTED_ENGAGEMENTS.length) {
      setPinnedIds([]);
    } else {
      setPinnedIds(SELECTED_ENGAGEMENTS.map((c) => c.id));
    }
  };

  return (
    <section
      id="engagements"
      className="py-16 sm:py-24 bg-[#EAE7E2] dark:bg-[#161514] border-b border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                <span>Evidence-Led Case Studies</span>
              </div>
              <h2
                id="engagements-title"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
              >
                Selected Engagements
              </h2>
              <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
                Examples of how business problems were translated into technology solutions, stakeholder consensus, and verified commercial outcomes. Hover over any card to expand details automatically.
              </p>
            </div>

            <button
              type="button"
              onClick={expandAll}
              id="toggle-all-engagements-btn"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-[#1A1A1A] dark:text-[#F5F2ED] bg-transparent hover:bg-[#1A1A1A] hover:text-[#F5F2ED] dark:hover:bg-white dark:hover:text-[#1A1A1A] hover:border-[#8B7D6B] hover:-translate-y-0.5 hover:shadow-sm px-5 py-3 border border-black/30 dark:border-white/30 transition-all duration-300 ease-in-out w-fit shrink-0 cursor-pointer"
            >
              <span>{pinnedIds.length === SELECTED_ENGAGEMENTS.length ? "Collapse All" : "Expand All"}</span>
              {pinnedIds.length === SELECTED_ENGAGEMENTS.length ? (
                <ChevronUp className="w-3.5 h-3.5" />
              ) : (
                <ChevronDown className="w-3.5 h-3.5" />
              )}
            </button>
          </div>
        </ScrollReveal>

        {/* Case Studies List */}
        <div className="space-y-6">
          {SELECTED_ENGAGEMENTS.map((study, idx) => {
            const isExpanded = pinnedIds.includes(study.id) || hoveredId === study.id;

            return (
              <ScrollReveal key={study.id} delay={idx * 0.1}>
                <div
                  id={`case-study-${study.id}`}
                  onMouseEnter={() => setHoveredId(study.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  className={`bg-[#F5F2ED] dark:bg-[#1E1C1A] border ${
                    isExpanded
                      ? "border-[#8B7D6B] ring-1 ring-[#8B7D6B]/40 shadow-xl"
                      : "border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:shadow-lg"
                  } overflow-hidden transition-all duration-300 ease-in-out`}
                >
                  {/* Header Strip */}
                  <div
                    onClick={() => togglePin(study.id)}
                    className="p-6 sm:p-8 cursor-pointer flex flex-col lg:flex-row lg:items-center justify-between gap-6 hover:bg-[#EAE7E2]/50 dark:hover:bg-[#252220]/50 transition-colors duration-200 select-none"
                    role="button"
                    tabIndex={0}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        togglePin(study.id);
                      }
                    }}
                    aria-expanded={isExpanded}
                  >
                    <div className="space-y-2">
                      <div className="flex items-center gap-3 flex-wrap">
                        <span className="font-serif text-sm font-semibold text-[#8B7D6B] italic">
                          Case 0{study.number}
                        </span>
                        <span className="text-[10px] uppercase tracking-wider font-bold text-[#1A1A1A] dark:text-[#F5F2ED] bg-[#EAE7E2] dark:bg-[#2A2826] px-2.5 py-0.5 border border-black/10 dark:border-white/10">
                          {study.industry}
                        </span>
                        {study.verifiedMetricHighlight && (
                          <span className="text-[10px] uppercase tracking-wider font-bold text-[#8B7D6B] bg-[#EAE7E2] dark:bg-[#2A2826] border border-black/15 dark:border-white/15 px-2.5 py-0.5">
                            {study.verifiedMetricHighlight}
                          </span>
                        )}
                        <span className="text-[9px] uppercase tracking-wider text-[#8B7D6B] italic hidden sm:inline-block print:hidden">
                          {isExpanded ? "(Hovering/Open - click to pin)" : "(Hover to view full story)"}
                        </span>
                      </div>
                      <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F5F2ED] tracking-tight">
                        {study.title}
                      </h3>
                    </div>

                    {/* Tags and Action */}
                    <div className="flex items-center gap-4 shrink-0">
                      <div className="hidden sm:flex flex-wrap gap-1.5 max-w-xs justify-end">
                        {study.tags.slice(0, 3).map((tag, i) => (
                          <span
                            key={i}
                            className="text-[10px] uppercase tracking-wider font-medium text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 bg-[#EAE7E2] dark:bg-[#2A2826] px-2.5 py-1 border border-black/10 dark:border-white/10"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                      <div className="w-8 h-8 rounded-full border border-black/20 dark:border-white/20 bg-[#F5F2ED] dark:bg-[#2A2826] flex items-center justify-center text-[#1A1A1A] dark:text-[#F5F2ED] group-hover:border-[#8B7D6B] transition-colors">
                        {isExpanded ? (
                          <ChevronUp className="w-4 h-4 text-[#8B7D6B]" />
                        ) : (
                          <ChevronDown className="w-4 h-4" />
                        )}
                      </div>
                    </div>
                  </div>

                  {/* Expanded Detailed 5-Step Structure via AnimatePresence */}
                  <AnimatePresence>
                    {isExpanded && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.35, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-8 sm:px-8 sm:pb-10 pt-2 border-t border-black/10 dark:border-white/10">
                          
                          {/* The Strict 5-Step Narrative Architecture */}
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            
                            {/* Step 01: Challenge */}
                            <div className="bg-[#EAE7E2] dark:bg-[#252220] p-5 sm:p-6 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8B7D6B]">
                                  01 &bull; Challenge
                                </span>
                              </div>
                              <p className="text-sm text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85 leading-relaxed">
                                {study.challenge}
                              </p>
                            </div>

                            {/* Step 02: Commercial Approach */}
                            <div className="bg-[#EAE7E2] dark:bg-[#252220] p-5 sm:p-6 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8B7D6B]">
                                  02 &bull; Commercial Approach
                                </span>
                              </div>
                              <p className="text-sm text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85 leading-relaxed">
                                {study.commercialApproach}
                              </p>
                            </div>

                            {/* Step 03: Solution */}
                            <div className="bg-[#EAE7E2] dark:bg-[#252220] p-5 sm:p-6 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8B7D6B]">
                                  03 &bull; Solution Architecture
                                </span>
                              </div>
                              <p className="text-sm text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85 leading-relaxed">
                                {study.solution}
                              </p>
                            </div>

                            {/* Step 04: Decision / Closing Approach */}
                            <div className="bg-[#EAE7E2] dark:bg-[#252220] p-5 sm:p-6 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B]/50 hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out">
                              <div className="flex items-center gap-2 mb-2">
                                <span className="text-[9px] uppercase tracking-[0.2em] font-bold text-[#8B7D6B]">
                                  04 &bull; Closing & Consensus
                                </span>
                              </div>
                              <p className="text-sm text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85 leading-relaxed">
                                {study.closingApproach}
                              </p>
                            </div>

                          </div>

                          {/* Step 05: Outcome Full-Width Block */}
                          <div className="bg-[#EAE7E2] dark:bg-[#252220] p-6 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B]/50 transition-all duration-300 ease-in-out mt-6">
                            <div className="flex items-center gap-2 mb-3">
                              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B7D6B]">
                                05 &bull; Commercial & Operational Outcomes
                              </span>
                            </div>
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 mt-3">
                              {study.outcome.map((res, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2.5 p-3 bg-[#F5F2ED] dark:bg-[#1E1C1A] border border-black/10 dark:border-white/10 hover:border-[#8B7D6B]/50 hover:-translate-y-0.5 hover:shadow-xs text-xs font-medium text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85 transition-all duration-300 ease-in-out"
                                >
                                  <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B] shrink-0 mt-1.5" />
                                  <span className="leading-snug">{res}</span>
                                </div>
                              ))}
                            </div>
                          </div>

                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>

                  {/* Clean Print Layout: Always visible when printed/exported to PDF */}
                  <div className="hidden print:block px-6 pb-6 pt-3 border-t border-gray-300">
                    <div className="grid grid-cols-2 gap-3 mb-3 text-xs">
                      <div className="p-3 border border-gray-200 break-inside-avoid bg-white">
                        <span className="text-[9px] uppercase tracking-wider font-bold text-[#5C5042] block mb-1">
                          Challenge & Context
                        </span>
                        <p className="text-gray-800 leading-relaxed">{study.challenge}</p>
                      </div>
                      <div className="p-3 border border-gray-200 break-inside-avoid bg-white">
                        <span className="text-[9px] uppercase tracking-wider font-bold text-[#5C5042] block mb-1">
                          Commercial & Solution Approach
                        </span>
                        <p className="text-gray-800 leading-relaxed mb-1">{study.commercialApproach}</p>
                        <p className="text-gray-700 italic text-[11px]">{study.solution}</p>
                      </div>
                    </div>
                    <div className="p-3 border border-gray-200 break-inside-avoid bg-white">
                      <span className="text-[9px] uppercase tracking-wider font-bold text-[#5C5042] block mb-1">
                        Verified Commercial Outcomes & Metrics
                      </span>
                      <div className="grid grid-cols-2 gap-2 text-[11px] text-gray-800">
                        {study.outcome.map((res, i) => (
                          <div key={i} className="flex items-start gap-1.5">
                            <span className="text-[#5C5042] font-bold">&bull;</span>
                            <span>{res}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

      </div>
    </section>
  );
};

