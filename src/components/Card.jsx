import React from "react";

function Card({
  icon: Icon,
  title,
  description,
  badge,
  ctaText,
  onClick,
  variant = "default",
  className = "",
}) {
  // Enhanced "Big Website" Variants
  const variants = {
    // Standard professional look
    default:
      "bg-white border border-[#E5D6EB] hover:border-[#3E103F]/40 shadow-sm hover:shadow-2xl transition-all duration-500",

    // The "Institutional" look - Deep Plum Background
    royal:
      "bg-[#3E103F] border border-[#5D2E60] text-white shadow-xl hover:bg-[#4E1650] transition-all duration-500",

    // The "Glass" look - for use over background images
    glass:
      "bg-white/10 backdrop-blur-md border border-white/20 text-white hover:bg-white/20 transition-all duration-500",

    // Soft Lavender background for secondary info
    soft:
      "bg-[#F8F4F9] border border-[#E5D6EB] hover:bg-white hover:shadow-xl transition-all duration-500",

    minimal:
      "bg-transparent border-b-2 border-[#E5D6EB] hover:border-[#3E103F] rounded-none transition-all duration-500",
  };

  const titleColor = {
    default: "text-[#1A1A1A] font-bold text-xl",
    royal: "text-[#D4AF37] font-black text-xl tracking-tight", // Gold Title
    glass: "text-white font-bold text-xl",
    soft: "text-[#3E103F] font-bold text-xl",
    minimal: "text-[#1A1A1A] font-bold text-lg",
  };

  const descColor = {
    default: "text-gray-600 font-medium",
    royal: "text-[#E2D1F9] opacity-90",
    glass: "text-purple-100",
    soft: "text-gray-700",
    minimal: "text-gray-500",
  };

  const iconStyle = {
    default: "bg-[#F3E8F7] text-[#3E103F]",
    royal: "bg-[#D4AF37] text-[#3E103F]", // Gold Icon background
    glass: "bg-white/20 text-white",
    soft: "bg-white text-[#3E103F] shadow-sm",
    minimal: "bg-transparent text-[#3E103F]",
  };

  const badgeStyle = {
    default: "bg-[#3E103F] text-white",
    royal: "bg-[#D4AF37] text-[#3E103F] font-black",
    glass: "bg-white text-[#3E103F]",
    soft: "bg-[#E5D6EB] text-[#3E103F]",
    minimal: "bg-gray-100 text-gray-600",
  };

  const ctaStyle = {
    default: "text-[#3E103F] hover:tracking-widest transition-all",
    royal: "text-[#D4AF37] hover:text-white transition-all",
    glass: "text-white hover:underline",
    soft: "text-[#3E103F] font-bold",
    minimal: "text-[#3E103F] border-b border-[#3E103F] w-fit",
  };

  return (
    <div
      onClick={onClick}
      className={`group relative p-8 rounded-[2rem] cursor-pointer ${variants[variant]} ${className}`}
    >
      {/* BADGE - Positioned with more "Air" */}
      {badge && (
        <span
          className={`absolute -top-3 left-8 text-[11px] uppercase tracking-widest font-black px-4 py-1.5 rounded-full shadow-md ${badgeStyle[variant]}`}
        >
          {badge}
        </span>
      )}

      {/* ICON - Larger and more prominent */}
      {Icon && (
        <div
          className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 ${iconStyle[variant]} group-hover:rotate-6 transition-transform duration-500`}
        >
          <Icon className="w-7 h-7" />
        </div>
      )}

      {/* TITLE */}
      <h3 className={`mb-3 ${titleColor[variant]}`}>
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p className={`text-base leading-relaxed mb-6 ${descColor[variant]}`}>
        {description}
      </p>

      {/* CTA */}
      {ctaText && (
        <div
          className={`text-sm font-black flex items-center gap-2 uppercase tracking-tighter ${ctaStyle[variant]}`}
        >
          {ctaText}
          <span className="transition-transform group-hover:translate-x-2">
            →
          </span>
        </div>
      )}

      {/* PREMIUM GLOW EFFECT - Updated for Royal Plum */}
      <div className="absolute inset-0 rounded-[2rem] opacity-0 group-hover:opacity-10 transition duration-700 pointer-events-none bg-gradient-to-tr from-[#D4AF37] via-transparent to-[#3E103F]" />
    </div>
  );
}

export default Card;