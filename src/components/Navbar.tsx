import React, { useState, useEffect } from "react";
import { Menu, X, ArrowUpRight, FileText, Sun, Moon } from "lucide-react";
import { PROFILE } from "../content/profile";
import { useTheme } from "../context/ThemeContext";

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { label: "About", href: "#about" },
    { label: "Experience", href: "#experience" },
    { label: "Solutions", href: "#solutions" },
    { label: "How I Work", href: "#framework" },
    { label: "Engagements", href: "#engagements" },
    { label: "Insights", href: "#insights" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <header
      id="main-navigation-header"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-[#F5F2ED]/95 dark:bg-[#121212]/95 backdrop-blur-md border-b border-black/10 dark:border-white/10 shadow-xs"
          : "bg-[#F5F2ED]/80 dark:bg-[#121212]/80 backdrop-blur-xs border-b border-black/5 dark:border-white/5"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-18 sm:h-20 flex items-center justify-between gap-2 sm:gap-3 lg:gap-4 xl:gap-8">
        {/* Left: RS Logo / Monogram & Name */}
        <a
          href="#"
          id="nav-brand-logo"
          className="flex items-center gap-2.5 sm:gap-3 shrink-0 group focus:outline-none focus-visible:ring-1 focus-visible:ring-[#8B7D6B] p-1"
          aria-label="Rajakumar Sivasubramanian - Home"
        >
          <div className="w-9 h-9 rounded-full bg-[#1A1A1A] dark:bg-[#2A2A2A] text-[#F5F2ED] border border-black/20 dark:border-white/20 flex items-center justify-center font-editorial font-bold text-sm tracking-wider group-hover:bg-[#8B7D6B] transition-all duration-300 ease-in-out shrink-0">
            {PROFILE.monogram}
          </div>
          <div className="flex flex-col">
            <span className="font-serif font-bold text-sm sm:text-base text-[#1A1A1A] dark:text-[#F5F2ED] tracking-tight leading-tight whitespace-nowrap">
              Rajakumar S.
            </span>
            <span className="text-[10px] uppercase tracking-[0.2em] text-[#8B7D6B] font-bold whitespace-nowrap">
              Senior Account Manager
            </span>
          </div>
        </a>

        {/* Center: Desktop Navigation Links */}
        <nav
          id="desktop-nav-menu"
          className="hidden lg:flex items-center justify-center gap-2 lg:gap-3 xl:gap-5 2xl:gap-6 text-[10px] xl:text-[11px] uppercase tracking-wider xl:tracking-widest font-bold text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 whitespace-nowrap h-9"
          aria-label="Main Navigation"
        >
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              id={`nav-link-${link.label.toLowerCase().replace(/\s+/g, "-")}`}
              className="h-9 px-2 xl:px-2.5 inline-flex items-center hover:text-[#1A1A1A] dark:hover:text-[#F5F2ED] border-b-2 border-transparent hover:border-black dark:hover:border-white transition-all duration-300 ease-in-out leading-none"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Right: Action Buttons Row + Theme Toggle */}
        <div className="hidden sm:flex items-center gap-2 xl:gap-3 shrink-0">
          {/* Light/Dark Theme Toggle Button with small blink indicator */}
          <button
            type="button"
            onClick={toggleTheme}
            id="theme-toggle-btn"
            className="relative h-9 w-9 inline-flex items-center justify-center text-[#1A1A1A] dark:text-[#F5F2ED] bg-transparent border border-black/25 dark:border-white/25 hover:border-[#8B7D6B] dark:hover:border-[#8B7D6B] hover:bg-black/5 dark:hover:bg-white/10 transition-all duration-300 ease-in-out cursor-pointer focus:outline-none"
            aria-label={`Switch to ${theme === "light" ? "dark" : "light"} theme`}
            title={`Current: ${theme === "light" ? "Light" : "Dark"} Mode (Click to switch)`}
          >
            {/* Small subtle blink status beacon */}
            <span className="absolute -top-1 -right-1 flex h-2 w-2">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                theme === "light" ? "bg-amber-400" : "bg-indigo-400"
              }`} />
              <span className={`relative inline-flex rounded-full h-2 w-2 ${
                theme === "light" ? "bg-amber-500" : "bg-indigo-500"
              }`} />
            </span>

            {theme === "light" ? (
              <Moon className="w-4 h-4 text-[#1A1A1A]" />
            ) : (
              <Sun className="w-4 h-4 text-[#F5F2ED]" />
            )}
          </button>

          <a
            href={PROFILE.canonicalResumeUrl}
            target="_blank"
            rel="noopener noreferrer"
            id="nav-resume-cta-btn"
            className="h-9 px-3 xl:px-4 inline-flex items-center justify-center gap-1.5 text-[10px] xl:text-[11px] uppercase tracking-wider xl:tracking-widest font-bold text-[#1A1A1A] dark:text-[#F5F2ED] bg-transparent border border-black/30 dark:border-white/30 hover:border-[#8B7D6B] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] dark:hover:bg-[#F5F2ED] dark:hover:text-[#1A1A1A] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out whitespace-nowrap focus:outline-none"
          >
            <FileText className="w-3.5 h-3.5 text-[#8B7D6B] shrink-0" />
            <span>Download Resume</span>
            <ArrowUpRight className="w-3.5 h-3.5 opacity-60 shrink-0" />
          </a>
          <a
            href="#contact"
            id="nav-contact-cta-btn"
            className="h-9 px-3.5 xl:px-4.5 inline-flex items-center justify-center text-[10px] xl:text-[11px] uppercase tracking-wider xl:tracking-widest font-bold text-[#F5F2ED] bg-[#1A1A1A] dark:bg-[#F5F2ED] dark:text-[#1A1A1A] border border-[#1A1A1A] dark:border-[#F5F2ED] hover:bg-[#8B7D6B] hover:border-[#8B7D6B] dark:hover:bg-[#8B7D6B] dark:hover:text-[#F5F2ED] dark:hover:border-[#8B7D6B] hover:-translate-y-0.5 hover:shadow-xs transition-all duration-300 ease-in-out whitespace-nowrap focus:outline-none"
          >
            Let's Talk
          </a>
        </div>

        {/* Mobile: Hamburger & Theme Toggle on mobile bar */}
        <div className="flex sm:hidden items-center gap-1.5">
          <button
            type="button"
            onClick={toggleTheme}
            id="mobile-nav-theme-btn"
            className="relative p-2 text-[#1A1A1A] dark:text-[#F5F2ED] hover:bg-black/5 dark:hover:bg-white/10 rounded focus:outline-none transition-colors"
            aria-label="Toggle theme"
          >
            <span className="absolute top-1 right-1 flex h-1.5 w-1.5">
              <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                theme === "light" ? "bg-amber-400" : "bg-indigo-400"
              }`} />
              <span className={`relative inline-flex rounded-full h-1.5 w-1.5 ${
                theme === "light" ? "bg-amber-500" : "bg-indigo-500"
              }`} />
            </span>
            {theme === "light" ? <Moon className="w-5 h-5" /> : <Sun className="w-5 h-5" />}
          </button>
          <button
            type="button"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            id="mobile-menu-toggle-btn"
            className="p-2 text-[#1A1A1A] dark:text-[#F5F2ED] hover:bg-black/5 dark:hover:bg-white/10 rounded focus:outline-none transition-all duration-300 ease-in-out"
            aria-expanded={mobileMenuOpen}
            aria-label="Toggle navigation menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Drawer */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-drawer"
          className="lg:hidden bg-[#F5F2ED] dark:bg-[#1A1A1A] border-b border-black/10 dark:border-white/10 px-6 pt-4 pb-6 space-y-4 shadow-md"
        >
          <div className="flex flex-col space-y-2">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-2 py-2 text-xs uppercase tracking-widest font-bold text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80 hover:text-[#1A1A1A] dark:hover:text-white border-b border-black/5 dark:border-white/5"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Theme switch row in drawer */}
          <div className="flex items-center justify-between py-2 border-b border-black/10 dark:border-white/10">
            <span className="text-[11px] uppercase tracking-wider font-bold text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80">
              Appearance
            </span>
            <button
              type="button"
              onClick={toggleTheme}
              className="inline-flex items-center gap-2 px-3 py-1.5 text-xs font-bold uppercase tracking-wider border border-black/20 dark:border-white/20 text-[#1A1A1A] dark:text-[#F5F2ED] hover:border-[#8B7D6B]"
            >
              <span className="relative flex h-2 w-2">
                <span className={`animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 ${
                  theme === "light" ? "bg-amber-400" : "bg-indigo-400"
                }`} />
                <span className={`relative inline-flex rounded-full h-2 w-2 ${
                  theme === "light" ? "bg-amber-500" : "bg-indigo-500"
                }`} />
              </span>
              {theme === "light" ? (
                <>
                  <Moon className="w-3.5 h-3.5" />
                  <span>Dark Mode</span>
                </>
              ) : (
                <>
                  <Sun className="w-3.5 h-3.5" />
                  <span>Light Mode</span>
                </>
              )}
            </button>
          </div>

          <div className="pt-2 flex flex-col gap-3">
            <a
              href={PROFILE.canonicalResumeUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2 w-full py-3 px-4 text-[11px] uppercase tracking-widest font-bold text-[#1A1A1A] dark:text-[#F5F2ED] border border-black/30 dark:border-white/30 hover:bg-[#1A1A1A] hover:text-[#F5F2ED] dark:hover:bg-white dark:hover:text-[#1A1A1A] transition-colors"
            >
              <FileText className="w-4 h-4 text-[#8B7D6B]" />
              <span>Download Resume</span>
              <ArrowUpRight className="w-4 h-4 opacity-60" />
            </a>
            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="flex items-center justify-center w-full py-3 px-4 text-[11px] uppercase tracking-widest font-bold text-[#F5F2ED] bg-[#1A1A1A] dark:bg-[#F5F2ED] dark:text-[#1A1A1A] hover:bg-[#8B7D6B] dark:hover:bg-[#8B7D6B] dark:hover:text-white transition-colors"
            >
              Let's Talk
            </a>
          </div>
        </div>
      )}
    </header>
  );
};

