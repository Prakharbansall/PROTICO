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
      "bg-slate-800 border border-slate-700 hover:border-primary-400 hover:shadow-xl hover:shadow-primary-600/40",

    glass:
      "backdrop-blur-xl bg-slate-800/80 border border-slate-600 hover:bg-slate-700/80 shadow-lg",

    gradient:
      "bg-gradient-to-br from-primary-500 via-primary-600 to-indigo-700 border border-primary-600/60 hover:shadow-xl hover:shadow-primary-600/40",
  };

  return (
    <div
      className={`relative p-8 rounded-2xl transition-all duration-500 hover:-translate-y-2 group cursor-pointer ${variants[variant]} ${className}`}
      onClick={onClick}
    >
      {/* Badge */}
      {badge && (
        <span className="absolute top-4 right-4 text-xs font-medium bg-primary-100 text-primary-700 px-3 py-1 rounded-full">
          {badge}
        </span>
      )}

      {/* Icon */}
      {Icon && (
        <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 group-hover:rotate-3 transition-all duration-300">
          <Icon className="w-7 h-7 text-white" />
        </div>
      )}

      {/* Title */}
      <h3 className="font-display font-semibold text-xl text-white mb-3 group-hover:text-primary-300 transition-colors">
        {title}
      </h3>

      {/* Description */}
      <p className="text-slate-300 leading-relaxed mb-5">
        {description}
      </p>

      {/* CTA */}
      {ctaText && (
        <button className="text-sm font-medium text-primary-600 flex items-center gap-1 group-hover:gap-2 transition-all">
          {ctaText}
          <span className="transition-transform group-hover:translate-x-1">
            →
          </span>
        </button>
      )}

      {/* Glow Effect */}
      <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition duration-500 bg-gradient-to-br from-primary-100/20 to-transparent pointer-events-none"></div>
    </div>
  );
}

export default Card;