import React, { useState, useEffect, useRef } from "react";
import { X, ExternalLink, QrCode, Smartphone, Check } from "lucide-react";
import { QRCodeSVG } from "qrcode.react";
import { PROFILE } from "../content/profile";

// Official WhatsApp Brand SVG Icon
const WhatsAppOriginalIcon: React.FC<{ className?: string }> = ({
  className = "w-5 h-5",
}) => (
  <svg
    viewBox="0 0 24 24"
    fill="currentColor"
    className={className}
    aria-hidden="true"
  >
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.05 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.82 11.82 0 00-3.48-8.413Z" />
  </svg>
);

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [copied, setCopied] = useState(false);
  const widgetRef = useRef<HTMLDivElement>(null);

  // Clean phone number: remove non-digits
  const cleanPhone = PROFILE.phone.replace(/[^0-9]/g, "");
  const defaultMessage = "Hi Rajakumar, I visited your executive portfolio and would like to connect.";
  
  // WhatsApp URLs
  const mobileWhatsAppUrl = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(defaultMessage)}`;
  const webWhatsAppUrl = `https://web.whatsapp.com/send?phone=${cleanPhone}&text=${encodeURIComponent(defaultMessage)}`;

  // Detect mobile device
  useEffect(() => {
    const checkMobile = () => {
      const userAgent = navigator.userAgent || navigator.vendor || (window as unknown as { opera?: string }).opera || "";
      const isMobileUA = /android|webos|iphone|ipad|ipod|blackberry|iemobile|opera mini/i.test(userAgent);
      const isSmallScreen = window.innerWidth <= 768;
      setIsMobile(isMobileUA || isSmallScreen);
    };

    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  // Close card when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (widgetRef.current && !widgetRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, [isOpen]);

  const handleWidgetClick = () => {
    if (isMobile) {
      // Mobile: Open WhatsApp app directly
      window.open(mobileWhatsAppUrl, "_blank", "noopener,noreferrer");
    } else {
      // Web / Desktop: Toggle QR code modal
      setIsOpen((prev) => !prev);
    }
  };

  const copyPhoneNumber = () => {
    navigator.clipboard.writeText(PROFILE.phone);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div
      ref={widgetRef}
      id="whatsapp-widget-container"
      className="fixed bottom-5 right-5 sm:bottom-6 sm:right-6 z-50 flex flex-col items-end print:hidden"
    >
      {/* Desktop QR Code Card Popover */}
      {isOpen && !isMobile && (
        <div
          id="whatsapp-qr-modal"
          role="dialog"
          aria-label="WhatsApp QR Code"
          className="mb-4 w-[320px] sm:w-[350px] bg-[#F5F2ED] dark:bg-[#1A1816] border border-black/20 dark:border-white/20 shadow-2xl p-5 sm:p-6 text-[#1A1A1A] dark:text-[#F5F2ED] transition-all duration-300 animate-in fade-in slide-in-from-bottom-4"
        >
          {/* Header */}
          <div className="flex items-start justify-between gap-3 pb-3 border-b border-black/10 dark:border-white/10 mb-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-sm shrink-0">
                <WhatsAppOriginalIcon className="w-5 h-5 text-white" />
              </div>
              <div>
                <h4 className="font-serif text-base font-bold leading-tight">
                  Chat on WhatsApp
                </h4>
                <p className="text-[11px] text-[#1A1A1A]/70 dark:text-[#F5F2ED]/70 flex items-center gap-1.5 mt-0.5">
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-80" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-[#25D366]" />
                  </span>
                  <span>Rajakumar • Dubai (GST) • Active</span>
                </p>
              </div>
            </div>
            
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-1.5 text-[#1A1A1A]/50 dark:text-[#F5F2ED]/50 hover:text-[#1A1A1A] dark:hover:text-[#F5F2ED] transition-colors cursor-pointer"
              aria-label="Close QR dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          {/* QR Code Canvas */}
          <div className="bg-white p-4 rounded-xs border border-black/15 shadow-inner flex flex-col items-center justify-center mb-4">
            <QRCodeSVG
              value={mobileWhatsAppUrl}
              size={180}
              level="M"
              includeMargin={false}
              bgColor="#FFFFFF"
              fgColor="#1A1A1A"
            />
            <div className="mt-2.5 flex items-center gap-1.5 text-[10px] text-gray-500 uppercase tracking-wider font-semibold">
              <QrCode className="w-3.5 h-3.5 text-[#25D366]" />
              <span>Scan with phone camera</span>
            </div>
          </div>

          {/* Instructions */}
          <p className="text-xs text-center text-[#1A1A1A]/80 dark:text-[#F5F2ED]/80 leading-relaxed mb-4">
            Open your smartphone camera or WhatsApp to scan this QR code and start a direct conversation.
          </p>

          {/* Actions: WhatsApp Web & Copy Number */}
          <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
            <a
              href={webWhatsAppUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full flex items-center justify-center gap-2 py-2.5 px-4 bg-[#25D366] hover:bg-[#20ba59] text-white text-xs font-bold uppercase tracking-wider transition-all duration-200 shadow-xs cursor-pointer"
            >
              <ExternalLink className="w-3.5 h-3.5" />
              <span>Open WhatsApp Web</span>
            </a>

            <button
              type="button"
              onClick={copyPhoneNumber}
              className="w-full flex items-center justify-center gap-2 py-2 px-4 bg-[#EAE7E2] dark:bg-[#252220] hover:bg-black/10 dark:hover:bg-white/10 border border-black/15 dark:border-white/15 text-[11px] font-mono text-[#1A1A1A] dark:text-[#F5F2ED] transition-colors cursor-pointer"
            >
              {copied ? (
                <>
                  <Check className="w-3.5 h-3.5 text-[#25D366]" />
                  <span>Copied: {PROFILE.phone}</span>
                </>
              ) : (
                <>
                  <span>Copy Number: {PROFILE.phone}</span>
                </>
              )}
            </button>
          </div>
        </div>
      )}

      {/* Primary Floating Action Button: ONLY WhatsApp Icon with Small Blink Indicator */}
      <button
        type="button"
        id="whatsapp-floating-btn"
        onClick={handleWidgetClick}
        aria-label={isMobile ? "Open WhatsApp chat directly" : "Scan WhatsApp QR code to chat"}
        title="Chat on WhatsApp"
        className="group relative w-13 h-13 sm:w-14 sm:h-14 flex items-center justify-center bg-[#25D366] hover:bg-[#20ba59] text-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 active:scale-95 transition-all duration-300 ease-in-out cursor-pointer focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 dark:border dark:border-white/20"
      >
        {/* Small Blink Indicator for WhatsApp */}
        <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5" title="WhatsApp Active Online">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-85" />
          <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-[#25D366] border-2 border-white dark:border-[#1A1816] shadow-xs" />
        </span>

        {/* WhatsApp Original Icon Only */}
        <WhatsAppOriginalIcon className="w-7 h-7 sm:w-8 sm:h-8 text-white" />
      </button>
    </div>
  );
};
