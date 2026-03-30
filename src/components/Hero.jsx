import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { ArrowRight, Sparkles } from "lucide-react";

function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  features = [],
}) {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // default fallback (agar props na aaye)
  const defaultFeatures = [
    {
      icon: "✨",
      title: "Thoughtful Work",
      desc: "We focus on clarity over complexity",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "🚀",
      title: "Still Improving",
      desc: "We iterate and improve every day",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "🎯",
      title: "User Focused",
      desc: "We build based on real feedback",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "📈",
      title: "Progress Over Perfection",
      desc: "We focus on moving forward instead of waiting for perfect",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "🔍",
      title: "Attention to Detail",
      desc: "We care about the small things that improve the experience",
      bg: "bg-[#D4AF37]/20",
    },
  ];

  const heroFeatures = features.length ? features : defaultFeatures;

  return (
    <section className="relative bg-gradient-to-b from-[#1A0B2E] via-[#2D1B4E] to-[#3E103F] text-white pt-32 pb-32 overflow-hidden">
      
      {/* Background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#D4AF37]/20 rounded-full blur-3xl opacity-40 animate-pulse" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#9B4DCA]/20 rounded-full blur-3xl opacity-30 animate-pulse" />
      </div>

      <div className="relative max-w-7xl mx-auto px-6 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          
          {/* LEFT */}
          <div
            className={`transition-all duration-1000 ${
              isVisible ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* Badge */}
            {badge && (
              <div className="mb-6 inline-block">
                <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#D4AF37]/10 border border-[#D4AF37]/30 text-xs uppercase text-[#D4AF37] font-semibold">
                  <Sparkles size={12} />
                  {badge}
                </span>
              </div>
            )}

            {/* Title */}
            {title && (
              <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-6 bg-gradient-to-r from-white via-white to-[#D4AF37] bg-clip-text text-transparent">
                {title}
              </h1>
            )}

            {/* Subtitle */}
            {subtitle && (
              <p className="text-lg text-[#D4AF37] font-semibold mb-4">
                {subtitle}
              </p>
            )}

            {/* Description */}
            {description && (
              <p className="text-gray-300 text-lg leading-relaxed mb-8 max-w-lg">
                {description}
              </p>
            )}

            {/* Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 mb-8">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="group inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-[#3E103F] bg-gradient-to-r from-[#D4AF37] to-[#F4D03F]"
                >
                  {primaryCta.label}
                  <ArrowRight className="group-hover:translate-x-2 transition" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold border-2 border-white/20 text-white hover:bg-white/10 transition"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>

            {/* Trust line */}
            <p className="text-sm text-white/40">
              💬 No pressure • Just a simple conversation
            </p>
          </div>

          {/* RIGHT (cards) */}
          <div className="relative h-96 lg:h-full min-h-96">
            <div className="relative h-full rounded-2xl overflow-hidden">
              
              <div className="absolute inset-0 bg-gradient-to-r from-[#D4AF37] via-[#9B4DCA] to-[#D4AF37] p-1 rounded-2xl">
                <div className="absolute inset-1 bg-[#1A0B2E]/90 rounded-xl" />
              </div>

              <div className="relative z-10 h-full p-8 flex flex-col justify-between">
                
               <div className="space-y-5">
  {heroFeatures.map((item, index) => (
    <div
      key={index}
      className={`flex items-start gap-4 p-4 rounded-lg hover:bg-white/5 transition-all duration-700 ${
        isVisible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-6"
      }`}
      style={{
        transitionDelay: `${index * 150}ms`, // 🔥 stagger effect
      }}
    >
      <div
        className={`w-12 h-12 ${item.bg} rounded-lg flex items-center justify-center`}
      >
        {item.icon}
      </div>

      <div>
        <h3 className="font-bold text-white">
          {item.title}
        </h3>
        <p className="text-sm text-gray-400">
          {item.desc}
        </p>
      </div>
    </div>
  ))}
</div>
                  

                <div className="pt-6 border-t border-white/10">
                  <p className="text-xs text-white/50">
                    Building trust, one project at a time.
                  </p>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Hero;