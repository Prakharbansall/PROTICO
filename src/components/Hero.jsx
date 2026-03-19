import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  children,
  backgroundImage,
}) {
  return (
    <section
      className="relative pt-24 pb-20 overflow-hidden min-h-[80vh] flex items-center"
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(7, 12, 28, 0.88), rgba(8, 14, 34, 0.6)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center center',
            }
          : {}
      }
    >
      <div className="absolute inset-0 bg-surface-900/80 hero-overlay" />
      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 z-10">
        <div className="max-w-3xl mx-auto text-center">
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-brand-300/30 bg-brand-300/20 text-brand-100 text-xs font-semibold mb-4">
              <Sparkles className="w-3.5 h-3.5" />
              {badge}
            </div>
          )}

          {subtitle && (
            <p className="text-brand-200 font-semibold text-sm uppercase tracking-[0.18em] mb-3">
              {subtitle}
            </p>
          )}

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl md:text-5xl lg:text-6xl text-white mb-5 leading-tight tracking-tight">
            {title}
          </h1>

          {description && (
            <p className="text-surface-200 text-base sm:text-lg leading-relaxed mb-8">
              {description}
            </p>
          )}

          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-brand-500 text-white font-semibold shadow-lg shadow-brand-500/30 hover:bg-brand-400 transition"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              )}
              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-full border border-brand-300/50 text-brand-100 hover:bg-surface-700 transition"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {children && <div className="mt-6">{children}</div>}
        </div>
      </div>
    </section>
  )
}

export default Hero