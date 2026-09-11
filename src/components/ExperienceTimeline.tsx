import React from "react";
import { Briefcase, Calendar, CheckCircle2, ArrowUpRight, FileText } from "lucide-react";
import { EXPERIENCE_DATA } from "../content/experience";
import { PROFILE } from "../content/profile";
import { ScrollReveal } from "./ScrollReveal";

export const ExperienceTimeline: React.FC = () => {
  return (
    <section
      id="experience"
      className="py-16 sm:py-24 bg-[#F5F2ED] dark:bg-[#121212] border-b border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12 sm:mb-16">
            <div className="max-w-2xl">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                <span>Track Record</span>
              </div>
              <h2
                id="experience-title"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
              >
                Professional Experience
              </h2>
              <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
                A decade of international commercial tenure across enterprise SaaS, bespoke technology development, and strategic account growth.
              </p>
            </div>

            <a
              href={PROFILE.canonicalResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest font-bold text-[#1A1A1A] dark:text-[#F5F2ED] bg-transparent hover:bg-[#1A1A1A] dark:hover:bg-[#F5F2ED] hover:text-[#F5F2ED] dark:hover:text-[#1A1A1A] hover:border-[#8B7D6B] hover:-translate-y-1 hover:shadow-md px-5 py-3 border border-black/30 dark:border-white/30 transition-all duration-300 ease-in-out w-fit shrink-0 cursor-pointer"
            >
              <FileText className="w-3.5 h-3.5 text-[#8B7D6B]" />
              <span>Complete Career CV</span>
              <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
            </a>
          </div>
        </ScrollReveal>

        {/* Structured Editorial Timeline */}
        <div className="relative border-l border-black/15 dark:border-white/15 pl-6 sm:pl-10 space-y-12 ml-2 sm:ml-4">
          {EXPERIENCE_DATA.map((role, idx) => (
            <ScrollReveal key={role.id} delay={idx * 0.1}>
              <div
                id={`experience-item-${role.id}`}
                className="relative group"
              >
                {/* Timeline Marker */}
                <div
                  className={`absolute -left-[31px] sm:-left-[47px] top-1.5 w-3.5 h-3.5 rounded-full transition-all duration-300 ${
                    role.isCurrent
                      ? "bg-[#8B7D6B] ring-4 ring-[#8B7D6B]/20"
                      : "border border-black/30 dark:border-white/30 bg-[#F5F2ED] dark:bg-[#121212] group-hover:bg-[#8B7D6B] group-hover:border-[#8B7D6B]"
                  }`}
                />

                {/* Role Content Card */}
                <div className="p-6 sm:p-8 bg-[#EAE7E2] dark:bg-[#1C1A17] border border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-lg transition-all duration-300 ease-in-out">
                  
                  {/* Header Row: Company, Role Title, Date Badge */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                    <div>
                      <div className="flex items-center gap-3 flex-wrap">
                        <h3 className="font-serif text-xl sm:text-2xl font-bold text-[#1A1A1A] dark:text-[#F5F2ED] tracking-tight">
                          {role.company}
                        </h3>
                        {role.isCurrent && (
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 bg-[#F5F2ED] dark:bg-[#252220] border border-black/15 dark:border-white/15 text-[#1A1A1A] dark:text-[#F5F2ED] text-[10px] uppercase tracking-wider font-semibold">
                            <span className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                            Current Engagement
                          </span>
                        )}
                      </div>
                      <p className="font-serif text-sm sm:text-base italic text-[#8B7D6B] mt-1">
                        {role.title}
                      </p>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[10px] uppercase tracking-wider font-bold text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 bg-[#F5F2ED] dark:bg-[#252220] px-3 py-1.5 border border-black/10 dark:border-white/10 shrink-0 w-fit">
                      <Calendar className="w-3.5 h-3.5 text-[#8B7D6B]" />
                      <span>{role.period}</span>
                    </div>
                  </div>

                  {/* Role Summary */}
                  <p className="text-sm sm:text-base text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80 leading-relaxed mb-6">
                    {role.summary}
                  </p>

                  {/* Key Impact Outcomes */}
                  <div className="pt-4 border-t border-black/10 dark:border-white/10">
                    <p className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B7D6B] mb-3">
                      Selected Commercial Outcomes:
                    </p>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-2.5">
                      {role.keyImpact.map((impact, i) => (
                        <div
                          key={i}
                          className="flex items-center gap-2 p-2.5 bg-[#F5F2ED] dark:bg-[#252220] border border-black/10 dark:border-white/10 hover:border-[#8B7D6B] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out text-xs font-medium text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85"
                        >
                          <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B] shrink-0" />
                          <span className="leading-snug">{impact}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>
    </section>
  );
};
