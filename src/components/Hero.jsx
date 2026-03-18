import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles } from 'lucide-react'

function Hero({
  badge,
  title,
  subtitle,
  description,
  primaryCta,
  secondaryCta,
  children
}) {
  return (
    <section className="relative pt-20 pb-12 lg:pt-24 lg:pb-16 overflow-hidden min-h-[70vh] flex items-center">

      {/* Background */}
      <div className="absolute inset-0 gradient-bg" />
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-200/20 to-transparent rounded-full blur-3xl -translate-y-1/3 translate-x-1/3" />
      <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-gradient-to-tr from-accent-200/20 to-transparent rounded-full blur-3xl translate-y-1/3 -translate-x-1/3" />

      {/* Grid */}
<div className="absolute inset-0 bg-[linear-gradient(to_right,#8886_1px,transparent_1px),linear-gradient(to_bottom,#8886_1px,transparent_1px)] bg-[size:16px_26px] opacity-40" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">

          {/* Badge */}
          {badge && (
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-primary-100/70 border border-primary-200/50 text-primary-700 text-xs font-medium mb-5">
              <Sparkles className="w-3.5 h-3.5" />
              {badge}
            </div>
          )}

          {/* Subtitle */}
          {subtitle && (
            <p className="text-primary-600 font-medium text-base mb-2">
              {subtitle}
            </p>
          )}

          {/* Title */}
          <h1 className="font-display font-bold text-3xl sm:text-4xl lg:text-5xl text-white mb-4 leading-tight">
            {title}
          </h1>

          {/* Description */}
          {description && (
            <p className="text-base text-slate-300 mb-6 max-w-xl mx-auto leading-relaxed">
              {description}
            </p>
          )}

          {/* CTA */}
          {(primaryCta || secondaryCta) && (
            <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
              
              {primaryCta && (
                <Link
                  to={primaryCta.to}
                  className="btn-primary flex items-center gap-2 group"
                >
                  {primaryCta.label}
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </Link>
              )}

              {secondaryCta && (
                <Link
                  to={secondaryCta.to}
                  className="btn-secondary"
                >
                  {secondaryCta.label}
                </Link>
              )}
            </div>
          )}

          {/* Children */}
          {children && <div className="mt-6">{children}</div>}

        </div>
      </div>
    </section>
  )
}

export default Hero