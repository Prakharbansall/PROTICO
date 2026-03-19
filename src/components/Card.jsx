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
  const variants = {
    default:
      "bg-surface-900 border border-surface-700 hover:border-brand-400 hover:shadow-soft",
    glass:
      "backdrop-blur-xl bg-surface-900/65 border border-surface-600 hover:bg-surface-800/70 shadow-soft",
    gradient:
      "bg-gradient-to-br from-brand-500 via-secondary-500 to-accent-500 border border-brand-300/40 hover:shadow-glow",
  };

  return (
    <div
      className={`relative p-6 rounded-2xl transition-all duration-300 hover:-translate-y-1 group cursor-pointer ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {badge && (
        <span className="absolute top-4 right-4 text-[10px] font-semibold tracking-wide bg-brand-500/20 text-brand-100 px-2.5 py-1 rounded-full">
          {badge}
        </span>
      )}

      {Icon && (
        <div className="w-12 h-12 rounded-xl bg-brand-500/20 text-brand-200 flex items-center justify-center mb-4">
          <Icon className="w-5 h-5" />
        </div>
      )}

      <h3 className="font-display font-semibold text-xl text-white mb-2">{title}</h3>
      <p className="text-surface-300 text-sm leading-relaxed mb-4">{description}</p>

      {ctaText && (
        <button className="text-sm font-semibold text-brand-300 hover:text-brand-200 flex items-center gap-1 transition-all">
          {ctaText}
          <span className="transition-transform group-hover:translate-x-1">→</span>
        </button>
      )}
    </div>
  )
}

export default Card;