import React from "react";

function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className = "",
  containerClass = "",
  variant = "default", // default, soft, dark, or image
  align = "center",    // center or left
}) {
  
  // High-end Section Color Palettes
  const variants = {
    default: "bg-white text-[#1A1A1A]",
    soft: "bg-[#F8F4F9] text-[#1A1A1A] border-y border-[#E5D6EB]",
    dark: "bg-[#3E103F] text-white",
    gold: "bg-[#D4AF37] text-[#3E103F]",
  };

  const subtitleColors = {
    default: "text-[#3E103F]",
    soft: "text-[#3E103F]",
    dark: "text-[#D4AF37]",
    gold: "text-white",
  };

  const descColors = {
    default: "text-gray-600",
    soft: "text-gray-700",
    dark: "text-[#E2D1F9]/80",
    gold: "text-[#3E103F]/80",
  };

  const alignmentClass = align === "left" ? "text-left mx-0" : "text-center mx-auto";

  return (
    <section 
      id={id} 
      className={`relative py-24 lg:py-32 overflow-hidden transition-colors duration-500 ${variants[variant]} ${className}`}
    >
      {/* Subtle Background Decoration for "Big" feel */}
      {variant === "dark" && (
        <div className="absolute top-0 right-0 w-1/3 h-full bg-white/5 skew-x-[-20deg] translate-x-1/2 pointer-events-none" />
      )}

      <div className={`max-w-7xl mx-auto px-8 relative z-10 ${containerClass}`}>

        {(title || subtitle || description) && (
          <div className={`max-w-3xl mb-16 lg:mb-20 ${alignmentClass}`}>

            {/* SUBTITLE - Now with a decorative line for 'Institutional' feel */}
            {subtitle && (
              <div className={`flex items-center gap-3 mb-4 ${align === "center" ? "justify-center" : "justify-start"}`}>
                
                <p className={`text-xs font-black uppercase tracking-[0.4em] ${subtitleColors[variant]}`}>
                  {subtitle}
                </p>
              </div>
            )}

            {/* TITLE - Bold and tracking-tighter */}
            {title && (
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 tracking-tighter">
                {title}
              </h2>
            )}

            {/* DESCRIPTION - Better line-height for readability */}
            {description && (
              <p className={`text-lg lg:text-xl leading-relaxed ${descColors[variant]}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* CONTENT AREA */}
        <div className="w-full">
          {children}
        </div>
      </div>
    </section>
  );
}

export default Section;