import React from "react";
import { ArrowDown, ArrowUpRight, Calendar, FileText, MapPin } from "lucide-react";
import { motion } from "motion/react";
import { PROFILE } from "../content/profile";

export const Hero: React.FC = () => {
  return (
    <section
      id="hero-section"
      className="relative pt-28 sm:pt-36 lg:pt-40 pb-16 sm:pb-24 overflow-hidden border-b border-black/10 dark:border-white/10 bg-[#F5F2ED] dark:bg-[#121212] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-12 items-center">
          
          {/* Left Column: Editorial Positioning & Content (7 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-7 flex flex-col items-start text-left"
          >
            {/* Executive Print Header (Only visible when printed/exported to PDF) */}
            <div
              id="print-resume-header"
              className="hidden print:block w-full mb-4 pb-4 border-b border-gray-400"
            >
              <h1 className="text-2xl font-serif font-bold tracking-tight text-black mb-1">
                {PROFILE.name}
              </h1>
              <p className="text-xs font-semibold uppercase tracking-widest text-[#5C5042] mb-2">
                {PROFILE.title} &bull; Enterprise Technology Sales & Strategic GTM
              </p>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-[11px] text-gray-800 font-medium">
                <span>{PROFILE.location}</span>
                <span>&bull;</span>
                <span>Phone: {PROFILE.phone}</span>
                <span>&bull;</span>
                <span>Email: {PROFILE.email}</span>
                <span>&bull;</span>
                <span>LinkedIn: linkedin.com/in/rajsiva</span>
              </div>
            </div>

            {/* Hero Eyebrow in Editorial Bronze */}
            <div
              id="hero-eyebrow"
              className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-6 print:hidden"
            >
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
              <span>{PROFILE.eyebrow}</span>
            </div>

            {/* Primary Headline */}
            <h1
              id="hero-primary-headline"
              className="font-serif text-4xl sm:text-5xl xl:text-6xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight leading-[1.08] mb-6"
            >
              {PROFILE.heroHeadline}
            </h1>

            {/* Supporting Copy */}
            <p
              id="hero-supporting-copy"
              className="text-lg sm:text-xl text-[#1A1A1A]/90 dark:text-[#F5F2ED]/90 font-normal leading-relaxed mb-4 max-w-2xl"
            >
              {PROFILE.heroSupportingCopy}
            </p>

            {/* Secondary Narrative */}
            <p
              id="hero-secondary-narrative"
              className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 font-normal leading-relaxed mb-8 max-w-2xl"
            >
              {PROFILE.heroSecondaryNarrative}
            </p>

            {/* CTAs: Editorial Action Buttons */}
            <div
              id="hero-actions-container"
              className="flex flex-wrap items-center gap-4 w-full sm:w-auto"
            >
              {/* Primary CTA */}
              <a
                href="#engagements"
                id="hero-primary-cta"
                className="inline-flex items-center justify-center gap-2 px-7 py-4 text-[11px] uppercase tracking-widest font-bold text-[#F5F2ED] bg-[#1A1A1A] dark:text-[#1A1A1A] dark:bg-[#F5F2ED] border border-[#1A1A1A] dark:border-[#F5F2ED] hover:bg-[#8B7D6B] dark:hover:bg-[#8B7D6B] dark:hover:text-[#F5F2ED] hover:border-[#8B7D6B] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out shadow-xs cursor-pointer"
              >
                <span>View Selected Engagements</span>
                <ArrowDown className="w-3.5 h-3.5 opacity-80" />
              </a>

              {/* Secondary CTA */}
              <a
                href={PROFILE.canonicalResumeUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-secondary-cta"
                className="inline-flex items-center justify-center gap-2 px-6 py-4 text-[11px] uppercase tracking-widest font-bold text-[#1A1A1A] dark:text-[#F5F2ED] bg-transparent border border-black/30 dark:border-white/30 hover:border-[#8B7D6B] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] dark:hover:bg-[#F5F2ED] dark:hover:text-[#1A1A1A] hover:-translate-y-1 hover:shadow-md transition-all duration-300 ease-in-out cursor-pointer"
              >
                <FileText className="w-3.5 h-3.5 text-[#8B7D6B]" />
                <span>Download Resume</span>
                <ArrowUpRight className="w-3.5 h-3.5 opacity-60" />
              </a>

              {/* Tertiary CTA */}
              <a
                href={PROFILE.calendlyUrl}
                target="_blank"
                rel="noopener noreferrer"
                id="hero-tertiary-cta"
                className="inline-flex items-center justify-center gap-2 px-5 py-4 text-[11px] uppercase tracking-widest font-bold text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 hover:text-[#1A1A1A] dark:hover:text-[#F5F2ED] hover:-translate-y-0.5 border-b border-black/20 dark:border-white/20 hover:border-black dark:hover:border-white transition-all duration-300 ease-in-out cursor-pointer"
              >
                <Calendar className="w-3.5 h-3.5 text-[#8B7D6B]" />
                <span>Schedule a Meeting</span>
              </a>
            </div>

            {/* Credibility Highlights Micro-Strip */}
            <div className="mt-12 pt-6 border-t border-black/10 dark:border-white/10 w-full grid grid-cols-2 sm:grid-cols-3 gap-4 text-xs text-[#1A1A1A]/75 dark:text-[#F5F2ED]/75">
              <div className="flex items-center gap-2 font-medium hover:text-[#1A1A1A] dark:hover:text-[#F5F2ED] transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                <span>Consultative Selling</span>
              </div>
              <div className="flex items-center gap-2 font-medium hover:text-[#1A1A1A] dark:hover:text-[#F5F2ED] transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                <span>Solution Architecture</span>
              </div>
              <div className="flex items-center gap-2 font-medium hover:text-[#1A1A1A] dark:hover:text-[#F5F2ED] transition-colors duration-300">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                <span>Strategic Accounts</span>
              </div>
            </div>

          </motion.div>

          {/* Right Column: Professional Profile Image & Context Badge (5 Cols) */}
          <motion.div
            initial={{ opacity: 0, y: 32 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.15, ease: [0.21, 0.47, 0.32, 0.98] }}
            className="lg:col-span-5 flex justify-center lg:justify-end"
          >
            <div
              id="hero-image-container"
              className="relative w-full max-w-md sm:max-w-lg lg:max-w-none group"
            >
              {/* Stable Aspect Container with Editorial Frame & Floating Hover */}
              <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE7E2] dark:bg-[#1E1C1A] border border-black/15 dark:border-white/15 shadow-sm hover:border-[#8B7D6B] hover:shadow-xl hover:-translate-y-1 transition-all duration-300 ease-in-out">
                <img
                  src={PROFILE.profileImageUrl}
                  alt="Rajakumar Sivasubramanian - Senior Account Manager"
                  style={{ objectPosition: "50% 0%" }}
                  className="w-full h-full object-cover object-top transition-all duration-500"
                  width="600"
                  height="750"
                  loading="eager"
                  referrerPolicy="no-referrer"
                />
                
                {/* Floating Location Badge */}
                <div className="absolute bottom-4 left-4 right-4 bg-[#F5F2ED]/95 dark:bg-[#1E1C1A]/95 backdrop-blur-md p-3.5 border border-black/10 dark:border-white/10 flex items-center justify-between text-[#1A1A1A] dark:text-[#F5F2ED] transition-all duration-300 ease-in-out">
                  <div className="flex items-center gap-2.5">
                    <div className="w-8 h-8 rounded-full bg-[#EAE7E2] dark:bg-[#252220] border border-black/10 dark:border-white/10 text-[#1A1A1A] dark:text-[#F5F2ED] flex items-center justify-center">
                      <MapPin className="w-3.5 h-3.5 text-[#8B7D6B]" />
                    </div>
                    <div>
                      <p className="text-[9px] font-bold uppercase tracking-[0.2em] text-[#8B7D6B]">Location</p>
                      <p className="text-xs font-serif font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">{PROFILE.location}</p>
                    </div>
                  </div>
                  <div className="text-right">
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-1 bg-[#EAE7E2] dark:bg-[#252220] border border-black/10 dark:border-white/10 text-[#1A1A1A] dark:text-[#F5F2ED] text-[10px] uppercase tracking-wider font-semibold">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                      Strategic Roles
                    </span>
                  </div>
                </div>

              </div>

              {/* Decorative Editorial Border Frame */}
              <div
                className="absolute -inset-2 border border-black/10 dark:border-white/10 -z-10 pointer-events-none hidden sm:block group-hover:border-[#8B7D6B]/40 transition-colors duration-300 ease-in-out"
                aria-hidden="true"
              />
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};
