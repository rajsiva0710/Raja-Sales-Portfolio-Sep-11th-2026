import React from "react";
import { ArrowUpRight } from "lucide-react";
import { PROFILE } from "../content/profile";

export const Footer: React.FC = () => {
  return (
    <footer
      id="main-footer"
      className="bg-[#1A1A1A] dark:bg-[#0D0D0D] border-t border-black/20 dark:border-white/10 py-12 sm:py-16 text-[#F5F2ED] transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-8 pb-10 border-b border-white/10">
          
          {/* Left: Brand Monogram & Title */}
          <div className="space-y-2">
            <div className="flex items-center gap-3">
              <div className="w-9 h-9 border border-[#8B7D6B]/40 bg-black/40 text-[#F5F2ED] flex items-center justify-center font-serif font-bold text-sm tracking-widest">
                {PROFILE.monogram}
              </div>
              <span className="font-serif text-xl font-bold text-[#F5F2ED] tracking-tight">
                {PROFILE.name}
              </span>
            </div>
            <p className="text-xs sm:text-sm text-[#F5F2ED]/60 font-serif italic max-w-xl">
              Senior Account Manager &bull; SaaS &bull; Technology Solutions &bull; Custom Software &bull; AI Solutions
            </p>
          </div>

          {/* Right: Clean Canonical Links */}
          <div className="flex flex-wrap items-center gap-6 text-[11px] font-bold uppercase tracking-[0.2em] text-[#F5F2ED]/80">
            <a
              href={PROFILE.linkedInUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8B7D6B] inline-flex items-center gap-1 transition-colors duration-300"
            >
              <span>LinkedIn</span>
              <ArrowUpRight className="w-3 h-3 text-[#8B7D6B]" />
            </a>

            <a
              href={`mailto:${PROFILE.email}`}
              className="hover:text-[#8B7D6B] inline-flex items-center gap-1 transition-colors duration-300"
            >
              <span>Email</span>
            </a>

            <a
              href={PROFILE.canonicalResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8B7D6B] inline-flex items-center gap-1 transition-colors duration-300"
            >
              <span>Resume</span>
              <ArrowUpRight className="w-3 h-3 text-[#8B7D6B]" />
            </a>

            <a
              href={PROFILE.calendlyUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#8B7D6B] inline-flex items-center gap-1 transition-colors duration-300"
            >
              <span>Calendly</span>
              <ArrowUpRight className="w-3 h-3 text-[#8B7D6B]" />
            </a>
          </div>

        </div>

        {/* Bottom Bar: Copyright & Professional Disclaimer */}
        <div className="pt-8 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-[11px] text-[#F5F2ED]/40">
          <p>
            &copy; {new Date().getFullYear()} {PROFILE.name}. All rights reserved.
          </p>
          <p className="font-serif italic">
            Executive Portfolio &bull; Dubai, UAE &bull; International B2B Technology
          </p>
        </div>
      </div>
    </footer>
  );
};
