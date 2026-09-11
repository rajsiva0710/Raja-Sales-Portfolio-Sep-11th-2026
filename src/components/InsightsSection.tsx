import React, { useState } from "react";
import { BookOpen, ArrowRight, X, Quote } from "lucide-react";
import { INSIGHT_ARTICLES } from "../content/insights";
import { InsightArticle } from "../types";
import { ScrollReveal } from "./ScrollReveal";

export const InsightsSection: React.FC = () => {
  const [selectedArticle, setSelectedArticle] = useState<InsightArticle | null>(null);

  return (
    <section
      id="insights"
      className="py-16 sm:py-24 bg-[#F5F2ED] dark:bg-[#121212] border-b border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
              <span>Executive Thought Leadership</span>
            </div>
            <h2
              id="insights-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
            >
              Sales & Growth Insights
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
              Thoughts on translating complex technology capabilities into measurable business outcomes and lasting enterprise partnerships.
            </p>
          </div>
        </ScrollReveal>

        {/* 3 Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {INSIGHT_ARTICLES.map((article, idx) => (
            <ScrollReveal key={article.id} delay={idx * 0.1}>
              <div
                id={`insight-card-${article.id}`}
                className="bg-[#EAE7E2] dark:bg-[#1C1A17] p-7 sm:p-8 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:-translate-y-1 hover:shadow-xl transition-all duration-300 ease-in-out flex flex-col justify-between group h-full"
              >
                <div>
                  <span className="font-serif text-base text-[#8B7D6B] italic block mb-3">
                    Insight {article.number}
                  </span>

                  <h3 className="font-serif text-xl font-bold text-[#1A1A1A] dark:text-[#F5F2ED] leading-snug mb-3 group-hover:text-[#8B7D6B] transition-colors duration-300">
                    {article.title}
                  </h3>

                  <p className="text-sm text-[#1A1A1A]/75 dark:text-[#F5F2ED]/75 leading-relaxed mb-6">
                    {article.summary}
                  </p>
                </div>

                <div className="pt-6 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                  <button
                    type="button"
                    onClick={() => setSelectedArticle(article)}
                    id={`read-insight-btn-${article.id}`}
                    className="inline-flex items-center gap-2 text-[10px] uppercase tracking-widest font-bold text-[#1A1A1A] dark:text-[#F5F2ED] hover:text-[#8B7D6B] focus:outline-none transition-colors duration-300 cursor-pointer"
                  >
                    <span>Read Article</span>
                    <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform duration-300" />
                  </button>
                </div>
              </div>
            </ScrollReveal>
          ))}
        </div>

      </div>

      {/* Full Article Reading Modal */}
      {selectedArticle && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs transition-opacity duration-300"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-article-title"
        >
          <div className="bg-[#F5F2ED] dark:bg-[#1C1A17] max-w-2xl w-full max-h-[90vh] overflow-y-auto p-6 sm:p-10 border border-black/20 dark:border-white/20 shadow-2xl relative">
            
            {/* Close Button */}
            <button
              type="button"
              onClick={() => setSelectedArticle(null)}
              className="absolute top-6 right-6 p-2 text-[#1A1A1A]/50 dark:text-[#F5F2ED]/50 hover:text-[#1A1A1A] dark:hover:text-[#F5F2ED] transition-colors duration-300 cursor-pointer"
              aria-label="Close article modal"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Modal Content */}
            <div className="space-y-6">
              <div>
                <span className="text-[10px] uppercase tracking-[0.25em] font-bold text-[#8B7D6B] block mb-2">
                  Insight {selectedArticle.number} &bull; Executive Perspective
                </span>
                <h3
                  id="modal-article-title"
                  className="font-serif text-2xl sm:text-3xl text-[#1A1A1A] dark:text-[#F5F2ED] font-bold leading-snug"
                >
                  {selectedArticle.title}
                </h3>
                <p className="text-sm sm:text-base font-serif italic text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 mt-2">
                  {selectedArticle.subtitle}
                </p>
              </div>

              {/* Core Takeaway Callout */}
              <div className="p-5 bg-[#EAE7E2] dark:bg-[#252220] border border-black/10 dark:border-white/10 flex items-start gap-3">
                <Quote className="w-5 h-5 text-[#8B7D6B] shrink-0 mt-0.5" />
                <p className="text-xs sm:text-sm font-serif italic text-[#1A1A1A] dark:text-[#F5F2ED] leading-relaxed">
                  "{selectedArticle.keyTakeaway}"
                </p>
              </div>

              {/* Full Article Body Paragraphs */}
              <div className="space-y-4 text-[#1A1A1A]/85 dark:text-[#F5F2ED]/85 text-sm sm:text-base leading-relaxed pt-2 border-t border-black/10 dark:border-white/10">
                {selectedArticle.content.map((p, idx) => (
                  <p key={idx}>{p}</p>
                ))}
              </div>

              {/* Modal Footer */}
              <div className="pt-6 border-t border-black/10 dark:border-white/10 flex justify-end">
                <button
                  type="button"
                  onClick={() => setSelectedArticle(null)}
                  className="px-6 py-3 border border-black/30 dark:border-white/30 text-[11px] uppercase tracking-widest font-bold text-[#1A1A1A] dark:text-[#F5F2ED] hover:bg-[#1A1A1A] dark:hover:bg-[#F5F2ED] hover:text-[#F5F2ED] dark:hover:text-[#1A1A1A] hover:border-[#8B7D6B] transition-all duration-300 cursor-pointer"
                >
                  Close Insight
                </button>
              </div>
            </div>

          </div>
        </div>
      )}
    </section>
  );
};
