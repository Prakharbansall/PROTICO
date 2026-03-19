function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className = '',
  containerClass = '',
  backgroundImage,
  overlay = 'bg-surface-900/65',
}) {
  return (
    <section
      id={id}
      className={`relative py-16 lg:py-24 ${className}`}
      style={
        backgroundImage
          ? {
              backgroundImage: `linear-gradient(rgba(8, 14, 31, 0.92), rgba(7, 10, 28, 0.92)), url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
            }
          : {}
      }
    >
      {backgroundImage && (
        <div className={`absolute inset-0 ${overlay} pointer-events-none`} />
      )}

      <div className={`relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}>
        {(title || subtitle || description) && (
          <div className="max-w-3xl mx-auto text-center mb-14">
            {subtitle && (
              <p className="text-sm font-semibold uppercase tracking-[0.22em] mb-3 text-brand-300">
                {subtitle}
              </p>
            )}

            {title && (
              <h2 className="font-display font-bold text-3xl sm:text-4xl md:text-5xl mb-4 text-white">
                {title}
              </h2>
            )}

            {description && (
              <p className="text-base sm:text-lg leading-relaxed text-surface-300">
                {description}
              </p>
            )}
          </div>
        )}

        {children}
      </div>
    </section>
  )
}

export default Section