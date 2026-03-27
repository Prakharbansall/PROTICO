import React from "react";

function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className = "",
  containerClass = "",
  variant = "default",
  align = "center",
}) {

  const variants = {
    default: "bg-white text-[#1A1A1A]",
    soft: "bg-[#F8F4F9] text-[#1A1A1A]",
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
    dark: "text-white/70",
    gold: "text-[#3E103F]/80",
  };

  const alignment = align === "left" ? "text-left" : "text-center";
  const alignCenter = align === "center" ? "mx-auto" : "";

  return (
    <section
      id={id}
      className={`py-14 md:py-16 ${variants[variant]} ${className}`}
    >
      <div className={`max-w-6xl mx-auto px-6 ${containerClass}`}>

        {(title || subtitle || description) && (
          <div className={`max-w-2xl mb-10 ${alignment} ${alignCenter}`}>

            {/* SUBTITLE */}
            {subtitle && (
              <p className={`text-xs uppercase tracking-wider mb-2 font-semibold ${subtitleColors[variant]}`}>
                {subtitle}
              </p>
            )}

            {/* TITLE */}
            {title && (
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 leading-tight">
                {title}
              </h2>
            )}

            {/* DESCRIPTION */}
            {description && (
              <p className={`text-sm md:text-base leading-relaxed ${descColors[variant]}`}>
                {description}
              </p>
            )}
          </div>
        )}

        {/* CONTENT */}
        <div className="w-full">
          {children}
        </div>

      </div>
    </section>
  );
}

export default Section;