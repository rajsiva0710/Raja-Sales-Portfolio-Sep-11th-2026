import React, { useState } from "react";
import { MessageSquare, Pause, Play, Quote } from "lucide-react";
import { TESTIMONIALS_DATA } from "../content/testimonials";
import { ScrollReveal } from "./ScrollReveal";

export const TestimonialsSection: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(true);

  // Quadruple items to create a seamless infinite marquee loop
  const marqueeItems = [
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
    ...TESTIMONIALS_DATA,
  ];

  return (
    <section
      id="testimonials"
      className="py-16 sm:py-24 bg-[#EAE7E2] dark:bg-[#161514] border-b border-black/10 dark:border-white/10 overflow-hidden transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12 sm:mb-16">
        {/* Section Header */}
        <ScrollReveal>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-3xl">
              <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
                <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
                <span>Colleague & Client Endorsements</span>
              </div>
              <h2
                id="testimonials-title"
                className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
              >
                What Clients & Colleagues Say
              </h2>
              <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
                Perspectives from executive leaders and clients on consultative partnership, solution delivery, and commercial integrity. Hover over any card to pause the slider.
              </p>
            </div>

            {/* Marquee Controls */}
            <div className="flex items-center gap-3 shrink-0 print:hidden">
              <button
                type="button"
                onClick={() => setIsPlaying(!isPlaying)}
                className="inline-flex items-center gap-2 text-[11px] uppercase tracking-wider font-bold text-[#1A1A1A] dark:text-[#F5F2ED] px-4 py-2 bg-transparent border border-black/20 dark:border-white/20 hover:border-[#8B7D6B] hover:bg-black/5 dark:hover:bg-white/5 transition-all duration-300 ease-in-out cursor-pointer"
                aria-label={isPlaying ? "Pause marquee slider" : "Play marquee slider"}
              >
                {isPlaying ? (
                  <>
                    <Pause className="w-3.5 h-3.5 text-[#8B7D6B]" />
                    <span>Pause Scroll</span>
                  </>
                ) : (
                  <>
                    <Play className="w-3.5 h-3.5 text-[#8B7D6B]" />
                    <span>Resume Scroll</span>
                  </>
                )}
              </button>
            </div>
          </div>
        </ScrollReveal>
      </div>

      {/* Full-width Smooth Marquee Slider Container (Hidden during print) */}
      <div className="relative w-full overflow-hidden print:hidden">
        {/* Left & Right Editorial Gradient Fades */}
        <div className="pointer-events-none absolute left-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-r from-[#EAE7E2] dark:from-[#161514] to-transparent z-10" />
        <div className="pointer-events-none absolute right-0 top-0 bottom-0 w-16 sm:w-32 bg-gradient-to-l from-[#EAE7E2] dark:from-[#161514] to-transparent z-10" />

        {/* Marquee Track */}
        <div
          className={`animate-marquee gap-6 sm:gap-8 px-4 py-4 ${
            !isPlaying ? "pause-animation" : ""
          }`}
          style={{ animationDuration: "40s" }}
        >
          {marqueeItems.map((item, idx) => (
            <div
              key={`${item.id}-${idx}`}
              className="w-[340px] sm:w-[440px] lg:w-[480px] shrink-0 p-7 sm:p-9 bg-[#F5F2ED] dark:bg-[#1E1C1A] border border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/40 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-between select-none"
            >
              <div>
                <Quote className="w-7 h-7 text-[#8B7D6B]/40 dark:text-[#8B7D6B]/50 mb-4" />
                <blockquote className="font-serif text-base sm:text-lg text-[#1A1A1A] dark:text-[#F5F2ED] font-normal italic leading-relaxed mb-6">
                  "{item.quote}"
                </blockquote>
              </div>

              <div className="pt-5 border-t border-black/10 dark:border-white/10">
                <div className="font-serif text-base font-bold text-[#1A1A1A] dark:text-[#F5F2ED]">
                  {item.author}
                </div>
                <div className="text-xs text-[#8B7D6B] font-serif italic mt-0.5">
                  {item.title}
                </div>
                {item.context && (
                  <div className="text-[10px] uppercase tracking-wider text-[#1A1A1A]/60 dark:text-[#F5F2ED]/60 mt-1">
                    {item.context}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Static Clean Grid for Print / PDF Export */}
      <div className="hidden print:grid grid-cols-2 gap-3 max-w-7xl mx-auto px-4">
        {TESTIMONIALS_DATA.map((item) => (
          <div key={item.id} className="p-3.5 border border-gray-300 break-inside-avoid bg-white">
            <blockquote className="font-serif text-xs italic text-gray-800 leading-relaxed mb-2.5">
              "{item.quote}"
            </blockquote>
            <div className="pt-2 border-t border-gray-200 text-xs">
              <p className="font-serif font-bold text-black">{item.author}</p>
              <p className="text-[11px] text-[#5C5042] font-medium">{item.title}</p>
              {item.context && <p className="text-[10px] text-gray-500 uppercase mt-0.5">{item.context}</p>}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

