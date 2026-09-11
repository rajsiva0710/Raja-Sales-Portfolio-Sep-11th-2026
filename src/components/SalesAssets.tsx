import React, { useState } from "react";
import { FileCode, FileSpreadsheet, Compass, BarChart3, Map, TrendingUp, Lock, CheckCircle, ArrowRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { STRATEGIC_ASSETS, ASSET_CONFIDENTIALITY_NOTE } from "../content/assets";
import { ScrollReveal } from "./ScrollReveal";

const ASSET_EXTRAS: Record<string, string[]> = {
  brd: [
    "Current vs. Future State Architecture",
    "Functional & Non-Functional Specifications",
    "Acceptance Criteria & Boundary Constraints",
  ],
  proposals: [
    "Executive Business Case & Value Framing",
    "Value-Based Tiered Commercial Models",
    "Milestone-Linked Delivery Governance",
  ],
  poc: [
    "Time-Boxed 30-Day Evaluation Charter",
    "Pre-Agreed Success Metrics (KPIs)",
    "Production Transition Cutover Plan",
  ],
  roi: [
    "Cost of Inaction (COI) Sensitivity Model",
    "Direct & Indirect Labor Efficiency Gains",
    "NPV & Payback Period Projections",
  ],
  journey: [
    "Executive Sponsor QBR Cadence",
    "User Enablement & Adoption Roadmap",
    "Health Score Early-Warning Triggers",
  ],
  expansion: [
    "Enterprise Whitespace & BU Heatmap",
    "Land-and-Expand ARR Milestones",
    "C-Suite Relationship Grid",
  ],
};

export const SalesAssets: React.FC = () => {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  const getIcon = (id: string) => {
    switch (id) {
      case "brd":
        return <FileCode className="w-4 h-4 text-[#8B7D6B]" />;
      case "proposals":
        return <FileSpreadsheet className="w-4 h-4 text-[#8B7D6B]" />;
      case "poc":
        return <Compass className="w-4 h-4 text-[#8B7D6B]" />;
      case "roi":
        return <BarChart3 className="w-4 h-4 text-[#8B7D6B]" />;
      case "journey":
        return <Map className="w-4 h-4 text-[#8B7D6B]" />;
      case "expansion":
        return <TrendingUp className="w-4 h-4 text-[#8B7D6B]" />;
      default:
        return <FileCode className="w-4 h-4 text-[#8B7D6B]" />;
    }
  };

  return (
    <section
      id="sales-assets"
      className="py-16 sm:py-24 bg-[#F5F2ED] dark:bg-[#121212] border-b border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
              <span>Commercial Enablement</span>
            </div>
            <h2
              id="assets-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
            >
              Strategic Sales Assets
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
              Commercial assets used to turn complex technology discussions into structured buying decisions and predictable delivery outcomes. Hover over any asset to reveal deliverable architecture and strategic usage.
            </p>
          </div>
        </ScrollReveal>

        {/* Document-Inspired Cards Grid with Automatic Hover Expand/Close */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12 items-start">
          {STRATEGIC_ASSETS.map((asset, idx) => {
            const isHovered = hoveredId === asset.id;
            const extras = ASSET_EXTRAS[asset.id] || [];

            return (
              <ScrollReveal key={asset.id} delay={idx * 0.08}>
                <div
                  id={`asset-card-${asset.id}`}
                  onMouseEnter={() => setHoveredId(asset.id)}
                  onMouseLeave={() => setHoveredId(null)}
                  onClick={() => setHoveredId(isHovered ? null : asset.id)}
                  className={`bg-[#EAE7E2] dark:bg-[#1C1A17] p-6 sm:p-7 border ${
                    isHovered
                      ? "border-[#8B7D6B] ring-1 ring-[#8B7D6B]/40 shadow-xl -translate-y-1"
                      : "border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:shadow-lg"
                  } transition-all duration-300 ease-in-out flex flex-col justify-between cursor-pointer`}
                >
                  <div>
                    {/* Card Top: Icon & Document Type Badge */}
                    <div className="flex items-center justify-between gap-3 mb-5">
                      <div className="w-9 h-9 bg-[#F5F2ED] dark:bg-[#282522] border border-black/10 dark:border-white/10 flex items-center justify-center shadow-xs">
                        {getIcon(asset.id)}
                      </div>
                      <span className="text-[9px] font-bold text-[#8B7D6B] uppercase tracking-widest bg-[#F5F2ED] dark:bg-[#282522] px-2.5 py-1 border border-black/10 dark:border-white/10">
                        {asset.documentType}
                      </span>
                    </div>

                    <h3 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F5F2ED] mb-2 leading-snug">
                      {asset.name}
                    </h3>
                    <p className="text-xs sm:text-sm text-[#1A1A1A]/75 dark:text-[#F5F2ED]/75 leading-relaxed mb-4">
                      {asset.description}
                    </p>
                  </div>

                  {/* Strategic Commercial Role */}
                  <div className="pt-4 border-t border-black/10 dark:border-white/10">
                    <div className="flex items-center justify-between mb-1">
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8B7D6B]">
                        Strategic Commercial Role:
                      </p>
                      <span className="text-[9px] uppercase tracking-wider text-[#8B7D6B] italic">
                        {isHovered ? "Expanded" : "Hover to expand"}
                      </span>
                    </div>
                    <p className="text-xs text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85 font-medium leading-normal">
                      {asset.usage}
                    </p>

                    {/* Smooth Automatic Expand on Hover */}
                    <AnimatePresence>
                      {isHovered && (
                        <motion.div
                          initial={{ opacity: 0, height: 0 }}
                          animate={{ opacity: 1, height: "auto" }}
                          exit={{ opacity: 0, height: 0 }}
                          transition={{ duration: 0.3, ease: "easeInOut" }}
                          className="overflow-hidden"
                        >
                          <div className="mt-4 pt-3 border-t border-black/10 dark:border-white/10 space-y-2">
                            <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70">
                              Core Artifact Deliverables:
                            </p>
                            <div className="space-y-1.5">
                              {extras.map((item, i) => (
                                <div
                                  key={i}
                                  className="flex items-start gap-2 text-[11px] text-[#1A1A1A]/90 dark:text-[#F5F2ED]/90"
                                >
                                  <CheckCircle className="w-3.5 h-3.5 text-[#8B7D6B] shrink-0 mt-0.5" />
                                  <span className="leading-tight">{item}</span>
                                </div>
                              ))}
                            </div>
                            <div className="pt-2">
                              <a
                                href="#contact"
                                className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#8B7D6B] hover:text-[#1A1A1A] dark:hover:text-[#F5F2ED] transition-colors"
                              >
                                <span>Request artifact walkthrough</span>
                                <ArrowRight className="w-3 h-3" />
                              </a>
                            </div>
                          </div>
                        </motion.div>
                      )}
                    </AnimatePresence>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>

        {/* Confidentiality Note Banner */}
        <ScrollReveal delay={0.2}>
          <div className="p-5 bg-[#EAE7E2] dark:bg-[#1C1A17] border border-black/15 dark:border-white/15 hover:border-[#8B7D6B]/40 hover:shadow-sm transition-all duration-300 ease-in-out flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80">
            <div className="flex items-center gap-3">
              <div className="w-7 h-7 bg-[#F5F2ED] dark:bg-[#282522] border border-black/10 dark:border-white/10 text-[#8B7D6B] flex items-center justify-center shrink-0">
                <Lock className="w-3.5 h-3.5" />
              </div>
              <span className="font-medium text-[#1A1A1A] dark:text-[#F5F2ED]">
                {ASSET_CONFIDENTIALITY_NOTE}
              </span>
            </div>
            <a
              href="#contact"
              className="text-xs font-serif italic text-[#1A1A1A] dark:text-[#F5F2ED] hover:text-[#8B7D6B] dark:hover:text-[#8B7D6B] underline underline-offset-4 shrink-0 font-medium transition-colors duration-300"
            >
              Request discussion & artifacts &rarr;
            </a>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

