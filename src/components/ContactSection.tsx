import React, { useState, useRef, useEffect } from "react";
import { Mail, Phone, MapPin, Linkedin, Calendar, FileText, Send, CheckCircle2, AlertCircle, ArrowUpRight, Copy, Check } from "lucide-react";
import { PROFILE } from "../content/profile";
import { ScrollReveal } from "./ScrollReveal";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");
  const [copiedEmail, setCopiedEmail] = useState(false);
  const copyTimeoutRef = useRef<number | null>(null);

  useEffect(() => {
    return () => {
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
    };
  }, []);

  const handleCopyEmail = async () => {
    try {
      if (navigator?.clipboard?.writeText) {
        await navigator.clipboard.writeText(PROFILE.email);
      } else {
        const textArea = document.createElement("textarea");
        textArea.value = PROFILE.email;
        textArea.style.position = "fixed";
        textArea.style.opacity = "0";
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand("copy");
        document.body.removeChild(textArea);
      }
      setCopiedEmail(true);
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedEmail(false);
      }, 2500);
    } catch {
      // Fallback
      setCopiedEmail(true);
      if (copyTimeoutRef.current) {
        window.clearTimeout(copyTimeoutRef.current);
      }
      copyTimeoutRef.current = window.setTimeout(() => {
        setCopiedEmail(false);
      }, 2500);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("submitting");
    setErrorMessage("");

    try {
      const response = await fetch(PROFILE.formspreeEndpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", company: "", message: "" });
      } else {
        const data = await response.json();
        setStatus("error");
        setErrorMessage(data?.error || "Unable to send message. Please try again or email directly.");
      }
    } catch {
      setStatus("error");
      setErrorMessage("Network error occurred. Please email directly at " + PROFILE.email);
    }
  };

  return (
    <section
      id="contact"
      className="py-16 sm:py-24 bg-[#F5F2ED] dark:bg-[#121212] border-b border-black/10 dark:border-white/10 transition-colors duration-300"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <ScrollReveal>
          <div className="max-w-3xl mb-12 sm:mb-16">
            <div className="inline-flex items-center gap-2 text-[11px] uppercase tracking-[0.35em] font-bold text-[#8B7D6B] mb-4">
              <div className="w-1.5 h-1.5 rounded-full bg-[#8B7D6B]" />
              <span>Connect Directly</span>
            </div>
            <h2
              id="contact-title"
              className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#1A1A1A] dark:text-[#F5F2ED] font-normal tracking-tight mb-4"
            >
              Let's Talk
            </h2>
            <p className="text-base sm:text-lg text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 leading-relaxed">
              Let's discuss technology partnerships, GTM execution, strategic accounts and sustainable revenue growth.
            </p>
          </div>
        </ScrollReveal>

        {/* Two-Column Grid: Form (7 cols) + Direct Channels (5 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* Form Column (7 Cols) */}
          <div className="lg:col-span-7">
            <ScrollReveal delay={0.1}>
              <div className="bg-[#EAE7E2] dark:bg-[#1C1A17] p-6 sm:p-10 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:shadow-xl transition-all duration-300 ease-in-out h-full">
                <h3 className="font-serif text-2xl font-bold text-[#1A1A1A] dark:text-[#F5F2ED] mb-2">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 mb-6">
                  Inquire about strategic leadership, enterprise accounts, or advisory engagements.
                </p>

                {status === "success" ? (
                  <div
                    id="contact-success-box"
                    className="p-6 bg-[#F5F2ED] dark:bg-[#252220] border border-black/20 dark:border-white/20 text-[#1A1A1A] dark:text-[#F5F2ED] space-y-2"
                  >
                    <div className="flex items-center gap-2.5 font-bold text-base font-serif">
                      <CheckCircle2 className="w-5 h-5 text-[#8B7D6B] shrink-0" />
                      <span>Message Transmitted Successfully</span>
                    </div>
                    <p className="text-sm text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80">
                      Thank you for reaching out. Rajakumar will review your note and respond promptly.
                    </p>
                    <button
                      type="button"
                      onClick={() => setStatus("idle")}
                      className="mt-3 text-[11px] font-bold uppercase tracking-wider text-[#1A1A1A] dark:text-[#F5F2ED] underline underline-offset-4 hover:text-[#8B7D6B] transition-colors duration-300 cursor-pointer"
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    {status === "error" && (
                      <div
                        id="contact-error-box"
                        className="p-4 bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-800 dark:text-red-300 text-xs flex items-center gap-2"
                      >
                        <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
                        <span>{errorMessage}</span>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label
                          htmlFor="contact-name-input"
                          className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#F5F2ED] mb-1.5"
                        >
                          Name <span className="text-[#8B7D6B]">*</span>
                        </label>
                        <input
                          type="text"
                          id="contact-name-input"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleChange}
                          placeholder="Your full name"
                          className="w-full px-4 py-3 bg-[#F5F2ED] dark:bg-[#121212] border border-black/20 dark:border-white/20 text-sm text-[#1A1A1A] dark:text-[#F5F2ED] placeholder:text-[#1A1A1A]/40 dark:placeholder:text-[#F5F2ED]/40 focus:outline-none focus:border-[#8B7D6B] focus:ring-1 focus:ring-[#8B7D6B]/20 transition-all duration-300"
                        />
                      </div>

                      <div>
                        <label
                          htmlFor="contact-email-input"
                          className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#F5F2ED] mb-1.5"
                        >
                          Work Email <span className="text-[#8B7D6B]">*</span>
                        </label>
                        <input
                          type="email"
                          id="contact-email-input"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleChange}
                          placeholder="you@company.com"
                          className="w-full px-4 py-3 bg-[#F5F2ED] dark:bg-[#121212] border border-black/20 dark:border-white/20 text-sm text-[#1A1A1A] dark:text-[#F5F2ED] placeholder:text-[#1A1A1A]/40 dark:placeholder:text-[#F5F2ED]/40 focus:outline-none focus:border-[#8B7D6B] focus:ring-1 focus:ring-[#8B7D6B]/20 transition-all duration-300"
                        />
                      </div>
                    </div>

                    <div>
                      <label
                        htmlFor="contact-company-input"
                        className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#F5F2ED] mb-1.5"
                      >
                        Company / Organization
                      </label>
                      <input
                        type="text"
                        id="contact-company-input"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Organization name"
                        className="w-full px-4 py-3 bg-[#F5F2ED] dark:bg-[#121212] border border-black/20 dark:border-white/20 text-sm text-[#1A1A1A] dark:text-[#F5F2ED] placeholder:text-[#1A1A1A]/40 dark:placeholder:text-[#F5F2ED]/40 focus:outline-none focus:border-[#8B7D6B] focus:ring-1 focus:ring-[#8B7D6B]/20 transition-all duration-300"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="contact-message-input"
                        className="block text-[11px] font-bold uppercase tracking-widest text-[#1A1A1A] dark:text-[#F5F2ED] mb-1.5"
                      >
                        Message <span className="text-[#8B7D6B]">*</span>
                      </label>
                      <textarea
                        id="contact-message-input"
                        name="message"
                        rows={4}
                        required
                        value={formData.message}
                        onChange={handleChange}
                        placeholder="Describe your technology goals, team needs, or partnership interests..."
                        className="w-full px-4 py-3 bg-[#F5F2ED] dark:bg-[#121212] border border-black/20 dark:border-white/20 text-sm text-[#1A1A1A] dark:text-[#F5F2ED] placeholder:text-[#1A1A1A]/40 dark:placeholder:text-[#F5F2ED]/40 focus:outline-none focus:border-[#8B7D6B] focus:ring-1 focus:ring-[#8B7D6B]/20 transition-all duration-300 resize-y"
                      />
                    </div>

                    <button
                      type="submit"
                      id="contact-submit-btn"
                      disabled={status === "submitting"}
                      className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-[11px] font-bold uppercase tracking-widest text-[#F5F2ED] dark:text-[#1A1A1A] bg-[#1A1A1A] dark:bg-[#F5F2ED] hover:bg-[#8B7D6B] dark:hover:bg-[#8B7D6B] dark:hover:text-[#F5F2ED] hover:-translate-y-0.5 hover:shadow-md disabled:bg-[#1A1A1A]/40 transition-all duration-300 ease-in-out cursor-pointer"
                    >
                      <Send className="w-3.5 h-3.5" />
                      <span>{status === "submitting" ? "Transmitting..." : "Start a Conversation"}</span>
                    </button>
                  </form>
                )}
              </div>
            </ScrollReveal>
          </div>

          {/* Direct Details & Scheduling Column (5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Contact Details Card */}
            <ScrollReveal delay={0.15}>
              <div className="bg-[#EAE7E2] dark:bg-[#1C1A17] p-6 sm:p-8 border border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:shadow-xl transition-all duration-300 ease-in-out">
                <h4 className="font-serif text-lg font-bold text-[#1A1A1A] dark:text-[#F5F2ED] mb-6">
                  Direct Channels & Coordinates
                </h4>

                <div className="space-y-4 text-sm">
                  
                  {/* Location */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#F5F2ED] dark:bg-[#252220] text-[#8B7D6B] flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#8B7D6B] uppercase tracking-wider block">
                        Location
                      </span>
                      <span className="font-semibold text-[#1A1A1A] dark:text-[#F5F2ED]">
                        {PROFILE.location}
                      </span>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#F5F2ED] dark:bg-[#252220] text-[#8B7D6B] flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10 mt-0.5">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#8B7D6B] uppercase tracking-wider block">
                        Email
                      </span>
                      <div className="mt-0.5 flex items-center gap-2">
                        <a
                          href={`mailto:${PROFILE.email}`}
                          id="contact-email-address-link"
                          className="font-semibold text-[#1A1A1A] dark:text-[#F5F2ED] hover:text-[#8B7D6B] underline underline-offset-4 transition-colors duration-300 break-all"
                        >
                          {PROFILE.email}
                        </a>
                        <button
                          type="button"
                          onClick={handleCopyEmail}
                          id="copy-email-icon-btn"
                          className="p-1 text-[#8B7D6B]/70 hover:text-[#8B7D6B] hover:bg-black/5 dark:hover:bg-white/10 rounded transition-colors duration-200 cursor-pointer focus:outline-none print:hidden"
                          aria-label="Copy email address"
                          title={copiedEmail ? "Copied to clipboard!" : "Copy email address"}
                        >
                          {copiedEmail ? (
                            <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                          ) : (
                            <Copy className="w-3.5 h-3.5" />
                          )}
                        </button>
                      </div>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#F5F2ED] dark:bg-[#252220] text-[#8B7D6B] flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#8B7D6B] uppercase tracking-wider block">
                        Phone
                      </span>
                      <a
                        href={`tel:${PROFILE.phone}`}
                        className="font-semibold text-[#1A1A1A] dark:text-[#F5F2ED] hover:text-[#8B7D6B] transition-colors duration-300"
                      >
                        {PROFILE.phone}
                      </a>
                    </div>
                  </div>

                  {/* LinkedIn */}
                  <div className="flex items-start gap-3">
                    <div className="w-9 h-9 bg-[#F5F2ED] dark:bg-[#252220] text-[#8B7D6B] flex items-center justify-center shrink-0 border border-black/10 dark:border-white/10">
                      <Linkedin className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-[10px] font-bold text-[#8B7D6B] uppercase tracking-wider block">
                        LinkedIn
                      </span>
                      <a
                        href={PROFILE.linkedInUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="font-semibold text-[#1A1A1A] dark:text-[#F5F2ED] hover:text-[#8B7D6B] inline-flex items-center gap-1 underline underline-offset-4 transition-colors duration-300"
                      >
                        <span>linkedin.com/in/rajsiva</span>
                        <ArrowUpRight className="w-3 h-3 text-[#8B7D6B]" />
                      </a>
                    </div>
                  </div>

                </div>
              </div>
            </ScrollReveal>

            {/* Quick Actions Bento Box */}
            <ScrollReveal delay={0.2}>
              <div className="p-6 sm:p-8 bg-[#EAE7E2] dark:bg-[#1C1A17] border border-black/15 dark:border-white/15 hover:border-[#8B7D6B] hover:ring-1 hover:ring-[#8B7D6B]/30 hover:shadow-xl transition-all duration-300 ease-in-out space-y-4">
                <h4 className="text-[11px] font-bold text-[#8B7D6B] uppercase tracking-[0.25em]">
                  Direct Scheduling & Profile
                </h4>

                {/* Calendly Button */}
                <a
                  href={PROFILE.calendlyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-calendly-btn"
                  className="flex items-center justify-between w-full p-4 bg-[#F5F2ED] dark:bg-[#252220] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] dark:hover:bg-[#F5F2ED] dark:hover:text-[#1A1A1A] hover:-translate-y-1 hover:shadow-md hover:border-[#8B7D6B] border border-black/15 dark:border-white/15 transition-all duration-300 ease-in-out text-[#1A1A1A] dark:text-[#F5F2ED] group"
                >
                  <div className="flex items-center gap-3">
                    <Calendar className="w-4 h-4 text-[#8B7D6B] group-hover:text-[#F5F2ED] dark:group-hover:text-[#1A1A1A] transition-colors" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Schedule a Meeting via Calendly
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8B7D6B] group-hover:text-[#F5F2ED] dark:group-hover:text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

                {/* Canonical Resume Button */}
                <a
                  href={PROFILE.canonicalResumeUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  id="contact-resume-btn"
                  className="flex items-center justify-between w-full p-4 bg-[#F5F2ED] dark:bg-[#252220] hover:bg-[#1A1A1A] hover:text-[#F5F2ED] dark:hover:bg-[#F5F2ED] dark:hover:text-[#1A1A1A] hover:-translate-y-1 hover:shadow-md hover:border-[#8B7D6B] border border-black/15 dark:border-white/15 transition-all duration-300 ease-in-out text-[#1A1A1A] dark:text-[#F5F2ED] group"
                >
                  <div className="flex items-center gap-3">
                    <FileText className="w-4 h-4 text-[#8B7D6B] group-hover:text-[#F5F2ED] dark:group-hover:text-[#1A1A1A] transition-colors" />
                    <span className="text-xs font-semibold uppercase tracking-wider">
                      Download Official Resume
                    </span>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-[#8B7D6B] group-hover:text-[#F5F2ED] dark:group-hover:text-[#1A1A1A] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </a>

              </div>
            </ScrollReveal>

          </div>

        </div>

      </div>
    </section>
  );
};
