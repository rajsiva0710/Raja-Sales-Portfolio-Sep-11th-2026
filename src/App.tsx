import React from "react";
import { ThemeProvider } from "./context/ThemeContext";
import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { CommercialImpact } from "./components/CommercialImpact";
import { About } from "./components/About";
import { SolutionsGrid } from "./components/SolutionsGrid";
import { ExperienceTimeline } from "./components/ExperienceTimeline";
import { SalesFramework } from "./components/SalesFramework";
import { SalesAssets } from "./components/SalesAssets";
import { SelectedEngagements } from "./components/SelectedEngagements";
import { InsightsSection } from "./components/InsightsSection";
import { TestimonialsSection } from "./components/TestimonialsSection";
import { ContactSection } from "./components/ContactSection";
import { Footer } from "./components/Footer";
import { WhatsAppWidget } from "./components/WhatsAppWidget";

export default function App() {
  return (
    <ThemeProvider>
      <div className="min-h-screen bg-[#F5F2ED] dark:bg-[#121212] text-[#1A1A1A] dark:text-[#F5F2ED] font-sans antialiased flex flex-col selection:bg-[#8B7D6B]/25 selection:text-[#1A1A1A] dark:selection:text-[#F5F2ED] transition-colors duration-300">
        {/* 01 Navigation */}
        <Navbar />

        <main className="flex-grow">
          {/* 02 Hero Section */}
          <Hero />

          {/* 03 Commercial Impact */}
          <CommercialImpact />

          {/* 04 About / How I Create Commercial Value */}
          <About />

          {/* 05 Solutions & Technology Domains (What I Sell) */}
          <SolutionsGrid />

          {/* 06 Professional Experience */}
          <ExperienceTimeline />

          {/* 07 How I Work / GTM Framework */}
          <SalesFramework />

          {/* 08 Strategic Sales Assets */}
          <SalesAssets />

          {/* 09 Selected Engagements (5 Case Studies) */}
          <SelectedEngagements />

          {/* 10 Sales & Growth Insights */}
          <InsightsSection />

          {/* 11 Testimonials */}
          <TestimonialsSection />

          {/* 12 Contact Section */}
          <ContactSection />
        </main>

        {/* 13 Footer */}
        <Footer />

        {/* 14 Floating WhatsApp Widget */}
        <WhatsAppWidget />
      </div>
    </ThemeProvider>
  );
}

