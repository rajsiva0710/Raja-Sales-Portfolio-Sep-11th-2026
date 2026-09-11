import React, { useState, useEffect, useRef } from "react";
import { Workflow, CheckCircle2, Users, ArrowRight, ShieldCheck, Play, Pause, RotateCcw, ChevronLeft, ChevronRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import { SALES_METHODOLOGIES, SIX_PHASES, LEADERSHIP_NOTE } from "../content/framework";
import { ScrollReveal } from "./ScrollReveal";

const PHASE_DURATION_MS = 4000;

export const SalesFramework: React.FC = () => {
  const [activePhaseIndex, setActivePhaseIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isHovered, setIsHovered] = useState(false);
  const [progress, setProgress] = useState(0);

  // Automated phase progression: automatically highlights Phase 01 -> Phase 02 -> Phase 03 -> Phase 04 -> Phase 05 -> Phase 06
  useEffect(() => {
    if (!isAutoPlaying || isHovered) {
      return;
    }

    const intervalTime = 40; // 25fps smooth progress update
    const step = (intervalTime / PHASE_DURATION_MS) * 100;

    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          setActivePhaseIndex((current) => (current + 1) % SIX_PHASES.length);
          return 0;
        }
        return prev + step;
      });
    }, intervalTime);

    return () => clearInterval(timer);
  }, [isAutoPlaying, isHovered, activePhaseIndex]);

  const handleTabClick = (idx: number) => {
    setActivePhaseIndex(idx);
    setProgress(0);
  };

  const handlePrev = () => {
    setActivePhaseIndex((prev) => (prev - 1 + SIX_PHASES.length) % SIX_PHASES.length);
    setProgress(0);
  };

  const handleNext = () => {
    setActivePhaseIndex((prev) => (prev + 1) % SIX_PHASES.length);
    setProgress(0);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
    setProgress(0);
  };

  const restartFromPhaseOne = () => {
    setActivePhaseIndex(0);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  return (
    <section
      id="framework"
      className="py-16 sm:py-24 bg-[#1A1A1A] dark:bg-[#0F0E0D] text-[#F5F2ED] border-b border-black/20 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
              <span>Sales & GTM Methodology</span>
            </div>
            <h2
              id="framework-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#F5F2ED] font-normal tracking-tight mb-4"
            >
              How I Work
            </h2>
            <p className="text-base sm:text-lg text-[#F5F2ED]/70 leading-relaxed">
              From target account intelligence to commercial closure and account growth — combining structured enterprise sales rigor with technical feasibility.
            </p>
          </div>
        </ScrollReveal>

        {/* Methodology Foundation Banner */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          {SALES_METHODOLOGIES.map((m, idx) => (
            <ScrollReveal key={m.code} delay={idx * 0.1}>
              <div
                className="p-6 bg-[#222222] dark:bg-[#181716] border border-[#F5F2ED]/10 dark:border-white/10 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out h-full flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-mono uppercase tracking-widest font-bold text-[#8B7D6B] bg-[#1A1A1A] dark:bg-[#222] px-2.5 py-1 border border-white/10">
                      {m.code}
                    </span>
                    <span className="text-[10px] text-[#F5F2ED]/40 font-bold uppercase tracking-widest">Framework</span>
                  </div>
                  <h3 className="font-serif text-base font-bold text-[#F5F2ED] mb-2">
                    {m.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#F5F2ED]/70 leading-relaxed">
                    {m.application}
                  </p>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

        {/* Six-Phase Structured Model with Automated Progression */}
        <ScrollReveal delay={0.15}>
          <div
            id="sales-framework-interactive-box"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="bg-[#222222] dark:bg-[#181716] border border-[#F5F2ED]/15 dark:border-white/10 p-6 sm:p-8 lg:p-10 mb-12 hover:border-[#8B7D6B]/40 hover:shadow-lg transition-all duration-300 ease-in-out print:hidden"
          >
            
            {/* Header with Auto-Play Controls & Phase Highlight Banner */}
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 mb-6 pb-6 border-b border-white/10">
              <div>
                <div className="flex items-center gap-2.5 mb-1.5">
                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F2ED]">
                    The 6-Phase Commercial Operating Model
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-[#F5F2ED]/70 flex items-center gap-2 flex-wrap">
                  <span>Systematic progression:</span>
                  <span className="inline-flex items-center gap-1 font-mono text-[11px] text-[#8B7D6B] font-bold bg-[#1A1A1A] dark:bg-[#121110] px-2 py-0.5 border border-white/10">
                    Phase 01 ➔ Phase 02 ➔ Phase 03 ➔ Phase 04 ➔ Phase 05 ➔ Phase 06
                  </span>
                </p>
              </div>

              {/* Automation Status & Controls */}
              <div className="flex items-center gap-2 sm:gap-3 flex-wrap">
                {/* Previous / Next Steppers */}
                <div className="flex items-center border border-white/15 bg-[#1A1A1A] dark:bg-[#252322]">
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-1.5 text-[#F5F2ED]/80 hover:text-[#F5F2ED] hover:bg-white/10 transition-colors cursor-pointer"
                    aria-label="Previous phase"
                    title="Previous phase"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-1.5 text-[#F5F2ED]/80 hover:text-[#F5F2ED] hover:bg-white/10 transition-colors cursor-pointer border-l border-white/15"
                    aria-label="Next phase"
                    title="Next phase"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>

                {/* Restart */}
                <button
                  type="button"
                  onClick={restartFromPhaseOne}
                  className="p-1.5 text-[#F5F2ED]/80 hover:text-[#F5F2ED] bg-[#1A1A1A] dark:bg-[#252322] border border-white/15 hover:border-[#8B7D6B] transition-colors cursor-pointer"
                  title="Restart from Phase 01"
                  aria-label="Restart from Phase 01"
                >
                  <RotateCcw className="w-4 h-4 text-[#8B7D6B]" />
                </button>

                {/* Auto Play / Pause Toggle */}
                <button
                  type="button"
                  onClick={toggleAutoPlay}
                  className="inline-flex items-center gap-2 text-[10px] uppercase tracking-wider font-bold text-[#F5F2ED]/90 bg-[#1A1A1A] dark:bg-[#252322] px-3.5 py-1.5 border border-white/15 hover:border-[#8B7D6B] hover:text-[#F5F2ED] transition-all duration-300 cursor-pointer"
                  title={isAutoPlaying ? "Pause automatic phase cycling" : "Start automatic phase cycling"}
                >
                  {isAutoPlaying && !isHovered ? (
                    <>
                      <Pause className="w-3 h-3 text-[#8B7D6B]" />
                      <span>Auto-Highlighting</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-3 h-3 text-[#8B7D6B]" />
                      <span>Resume Auto</span>
                    </>
                  )}
                </button>

                {/* Current Active Badge */}
                <span className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-widest font-bold text-[#8B7D6B] bg-[#1A1A1A] dark:bg-[#252322] px-3 py-1.5 border border-white/10">
                  <span className="w-2 h-2 rounded-full bg-[#8B7D6B] animate-pulse" />
                  <span>Phase 0{activePhaseIndex + 1} Active</span>
                </span>
              </div>
            </div>

            {/* Sequential Phase Breadcrumb Rail */}
            <div className="hidden md:flex items-center justify-between mb-6 px-1 text-[11px] font-mono text-[#F5F2ED]/50">
              {SIX_PHASES.map((p, idx) => {
                const isActive = activePhaseIndex === idx;
                const isPast = idx < activePhaseIndex;
                return (
                  <React.Fragment key={`crumb-${p.phase}`}>
                    <button
                      type="button"
                      onClick={() => handleTabClick(idx)}
                      className={`flex items-center gap-1.5 py-1 px-2 transition-all duration-200 cursor-pointer ${
                        isActive
                          ? "text-[#8B7D6B] font-bold scale-105"
                          : isPast
                          ? "text-[#F5F2ED]/80"
                          : "text-[#F5F2ED]/40 hover:text-[#F5F2ED]/70"
                      }`}
                    >
                      <span
                        className={`w-4 h-4 rounded-full flex items-center justify-center text-[9px] font-bold ${
                          isActive
                            ? "bg-[#8B7D6B] text-white ring-2 ring-[#8B7D6B]/40"
                            : isPast
                            ? "bg-white/20 text-white"
                            : "bg-white/10 text-white/50"
                        }`}
                      >
                        {idx + 1}
                      </span>
                      <span>{p.phase}</span>
                    </button>
                    {idx < SIX_PHASES.length - 1 && (
                      <span className={`text-xs ${idx < activePhaseIndex ? "text-[#8B7D6B]" : "text-white/20"}`}>
                        ➔
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </div>

            {/* Phase Selector Tabs with Animated Active Highlighting */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5 mb-8">
              {SIX_PHASES.map((phase, idx) => {
                const isActive = activePhaseIndex === idx;

                return (
                  <button
                    key={phase.phase}
                    type="button"
                    onClick={() => handleTabClick(idx)}
                    id={`phase-tab-${idx + 1}`}
                    className={`relative text-left p-3.5 border transition-all duration-300 ease-in-out cursor-pointer overflow-hidden group ${
                      isActive
                        ? "bg-[#F5F2ED] dark:bg-[#2A2624] text-[#1A1A1A] dark:text-[#F5F2ED] border-[#8B7D6B] ring-2 ring-[#8B7D6B] shadow-xl shadow-[#8B7D6B]/20 -translate-y-1 z-10"
                        : "bg-[#1A1A1A] dark:bg-[#121110] text-[#F5F2ED]/70 border-white/10 hover:border-[#8B7D6B]/50 hover:text-[#F5F2ED] hover:-translate-y-0.5"
                    }`}
                  >
                    {/* Live Glowing Active Pill */}
                    {isActive && (
                      <span className="absolute top-2 right-2 inline-flex items-center gap-1 text-[8px] font-bold uppercase tracking-wider text-[#8B7D6B] bg-[#8B7D6B]/15 px-1.5 py-0.5 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B] animate-ping" />
                        Active
                      </span>
                    )}

                    <span
                      className={`text-[10px] font-bold block uppercase tracking-wider mb-1 ${
                        isActive ? "text-[#8B7D6B]" : "text-[#8B7D6B]/80 group-hover:text-[#8B7D6B]"
                      }`}
                    >
                      {phase.phase}
                    </span>
                    <span className="text-xs font-bold line-clamp-2 leading-tight">
                      {phase.title}
                    </span>

                    {/* Progress Bar filling along the bottom of the active tab */}
                    {isActive && isAutoPlaying && !isHovered && (
                      <div
                        className="absolute bottom-0 left-0 h-1.5 bg-[#8B7D6B] transition-all duration-75"
                        style={{ width: `${progress}%` }}
                      />
                    )}
                  </button>
                );
              })}
            </div>

            {/* Active Phase Deep Dive with Smooth AnimatePresence Transitions */}
            <div className="min-h-[280px]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activePhaseIndex}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  id={`active-phase-detail-${activePhaseIndex + 1}`}
                  className="bg-[#1A1A1A] dark:bg-[#121110] p-6 sm:p-8 border-2 border-[#8B7D6B]/50 dark:border-[#8B7D6B]/60 shadow-lg transition-all duration-300 ease-in-out"
                >
                  {(() => {
                    const current = SIX_PHASES[activePhaseIndex];
                    return (
                      <>
                        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4 pb-4 border-b border-white/10">
                          <div>
                            <div className="flex items-center gap-2">
                              <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B7D6B]">
                                {current.phase} of 06
                              </span>
                              <span className="text-[9px] uppercase tracking-wider px-2 py-0.5 bg-[#8B7D6B]/20 text-[#8B7D6B] border border-[#8B7D6B]/40 font-bold">
                                Live Highlight
                              </span>
                            </div>
                            <h4 className="font-serif text-xl sm:text-2xl font-normal text-[#F5F2ED] mt-1.5 italic">
                              {current.title}
                            </h4>
                          </div>
                          
                          <div className="flex items-center gap-2 text-[10px] uppercase tracking-wider text-[#F5F2ED]/70 bg-[#222222] dark:bg-[#1C1A19] px-3.5 py-1.5 border border-white/10 w-fit">
                            <span>Auto-Cycle: Phase 0{activePhaseIndex + 1} / 06</span>
                          </div>
                        </div>

                        <p className="text-[#F5F2ED]/85 text-sm sm:text-base leading-relaxed mb-6">
                          {current.description}
                        </p>

                        <div>
                          <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B7D6B] mb-3">
                            Disciplined Execution Activities:
                          </p>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                            {current.keyActivities.map((act, i) => (
                              <div
                                key={i}
                                className="flex items-start gap-2.5 p-3 bg-[#222222] dark:bg-[#1C1A19] border border-white/10 hover:border-[#8B7D6B]/50 text-xs text-[#F5F2ED]/90 transition-all duration-300 ease-in-out"
                              >
                                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B] shrink-0 mt-1.5" />
                                <span>{act}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </>
                    );
                  })()}
                </motion.div>
              </AnimatePresence>
            </div>

          </div>
        </ScrollReveal>

        {/* Dedicated Print View: Complete 6-Phase Operating Model for PDF Export */}
        <div className="hidden print:block mb-8">
          <div className="mb-4 pb-2 border-b border-gray-300">
            <h3 className="font-serif text-base font-bold text-black">
              The 6-Phase Commercial Operating Model
            </h3>
            <p className="text-[11px] text-gray-600">
              Systematic progression: Phase 01 ➔ Phase 02 ➔ Phase 03 ➔ Phase 04 ➔ Phase 05 ➔ Phase 06
            </p>
          </div>
          <div className="grid grid-cols-2 gap-3 text-xs">
            {SIX_PHASES.map((p) => (
              <div key={p.phase} className="p-3 border border-gray-300 break-inside-avoid bg-white">
                <div className="flex items-center justify-between mb-1">
                  <span className="text-[10px] uppercase tracking-wider font-bold text-[#5C5042]">
                    {p.phase}
                  </span>
                </div>
                <h4 className="font-serif font-bold text-sm text-black mb-1">{p.title}</h4>
                <p className="text-gray-700 leading-relaxed mb-2 text-[11px]">{p.description}</p>
                <div className="text-[11px] text-gray-800 border-t border-gray-200 pt-1.5">
                  <p className="font-semibold text-black mb-1">Disciplined Execution:</p>
                  <ul className="space-y-1 text-gray-700">
                    {p.keyActivities.map((act, i) => (
                      <li key={i} className="flex items-start gap-1">
                        <span className="text-[#5C5042] font-bold">&bull;</span>
                        <span>{act}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Sales Leadership & Enablement Note */}
        <ScrollReveal delay={0.2}>
          <div className="p-6 bg-[#222222] dark:bg-[#181716] border border-white/15 flex items-start gap-4 hover:border-[#8B7D6B]/50 hover:shadow-md transition-all duration-300 ease-in-out">
            <div className="w-9 h-9 rounded-full bg-[#1A1A1A] dark:bg-[#252322] border border-white/20 text-[#8B7D6B] flex items-center justify-center shrink-0 mt-0.5">
              <Users className="w-4 h-4" />
            </div>
            <div>
              <h4 className="font-serif text-base font-bold text-[#F5F2ED] mb-1">
                Sales Enablement & Team Guidance
              </h4>
              <p className="text-xs sm:text-sm text-[#F5F2ED]/70 leading-relaxed">
                {LEADERSHIP_NOTE}
              </p>
            </div>
          </div>
        </ScrollReveal>

      </div>
    </section>
  );
};

