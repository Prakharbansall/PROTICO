import React from "react";
import { Link } from "react-router-dom";
import { ArrowRight, ShieldCheck } from "lucide-react";

function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  children,
  bgImage = "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
}) {
  // Common style for that 'Heavy' Enterprise Font
  const fontStyle = { fontFamily: "'Inter', sans-serif" };

  return (
    <section 
      style={fontStyle}
      className="relative pt-32 pb-24 overflow-hidden min-h-[90vh] flex items-center bg-[#3E103F]"
    >
      
      {/* 1. ATMOSPHERIC BACKGROUND */}
      <div className="absolute inset-0 z-0">
        <img 
          src={bgImage} 
          alt="Infrastructure" 
          className="w-full h-full object-cover opacity-10 scale-110"
        />
        {/* Layered Gradients for Depth */}
        <div className="absolute inset-0 bg-gradient-to-tr from-[#3E103F] via-[#3E103F]/95 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#3E103F]/50 to-[#3E103F]" />
        
        {/* Gold Glow Effects */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#D4AF37]/5 blur-[150px] rounded-full" />
        <div className="absolute -bottom-48 -left-48 w-[600px] h-[600px] bg-[#D4AF37]/10 blur-[150px] rounded-full" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-8 w-full">
        <div className="flex flex-col lg:flex-row items-center gap-20">
          
          {/* CONTENT SIDE */}
          <div className="flex-[1.4] text-center lg:text-left">
            
            {/* BADGE - Clean & Minimal */}
            {badge && (
              <div className="inline-flex items-center gap-2 mb-10 px-5 py-2 rounded-full bg-white/5 border border-white/10 backdrop-blur-xl transition-all hover:bg-white/10">
                <ShieldCheck className="w-3.5 h-3.5 text-[#D4AF37]" />
                <span className="text-[11px] font-black uppercase tracking-[0.4em] text-white/90">
                  {badge}
                </span>
              </div>
            )}

            {/* SUBTITLE - The 'Royal' Line */}
            {subtitle && (
              <p className="text-[#D4AF37] font-extrabold text-xs mb-5 uppercase tracking-[0.5em] leading-none">
                {subtitle}
              </p>
            )}

            {/* MAIN TITLE - This is where the aesthetic lives */}
            <h1 className="text-5xl sm:text-7xl lg:text-8xl font-black text-white leading-[0.9] mb-10 tracking-[-0.05em]">
              {title}
            </h1>

            {/* DESCRIPTION - Clean line-height */}
            {description && (
              <p className="text-[#E2D1F9]/70 text-lg md:text-xl max-w-xl mb-12 leading-relaxed font-light lg:mx-0 mx-auto">
                {description}
              </p>
            )}

            {/* CTA GROUP */}
            <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-6">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="group inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full bg-[#D4AF37] text-[#3E103F] font-black text-sm uppercase tracking-widest hover:bg-white transition-all shadow-[0_20px_50px_rgba(212,175,55,0.2)] hover:-translate-y-1"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="inline-flex items-center justify-center gap-3 px-12 py-5 rounded-full border border-white/20 text-white font-bold text-sm uppercase tracking-widest hover:bg-white/5 hover:border-white transition-all"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          </div>

          {/* VISUAL SIDE - The 'Glass' Card */}
          <div className="flex-1 w-full flex justify-center lg:justify-end">
            {children ? (
              <div className="relative group p-4 rounded-[4rem] bg-gradient-to-tr from-white/10 to-transparent border border-white/10 backdrop-blur-md shadow-2xl transition-transform duration-700 hover:scale-[1.02]">
                <div className="rounded-[3rem] overflow-hidden shadow-inner">
                  {children}
                </div>
                {/* Decorative Elements */}
                <div className="absolute -top-6 -right-6 w-24 h-24 bg-[#D4AF37]/20 blur-3xl rounded-full" />
              </div>
            ) : (
              /* High-End Institutional Graphic */
              <div className="relative w-full max-w-md aspect-square flex items-center justify-center">
                <div className="absolute inset-0 border border-white/5 rounded-full animate-[spin_30s_linear_infinite]" />
                <div className="absolute inset-12 border border-[#D4AF37]/10 rounded-full animate-[spin_20s_linear_infinite_reverse]" />
                <div className="absolute inset-24 border border-white/10 rounded-full" />
                <div className="text-white/[0.03] font-black text-9xl tracking-tighter pointer-events-none select-none">
                  Protico
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* REFINED BOTTOM TRANSITION */}
      <div className="absolute bottom-0 left-0 w-full h-10 bg-gradient-to-t from-[#FAF9FB] via-[#FAF9FB]/40 to-transparent z-10" />
    </section>
  );
}

export default Hero;