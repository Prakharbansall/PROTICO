function Section({
  id,
  title,
  subtitle,
  description,
  children,
  className = '',
  containerClass = '',
  dark = false
}) {
  return (
    <section
      id={id}
      className={`py-20 lg:py-28 ${
        dark ? 'bg-slate-900 text-white' : 'bg-slate-950 text-slate-100'
      } ${className}`}
    >
      <div className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ${containerClass}`}>

        {(title || subtitle || description) && (
          <div className="max-w-3xl mx-auto text-center mb-16">

            {subtitle && (
              <p
                className={`text-sm font-semibold uppercase tracking-wider mb-3 ${
                  dark ? 'text-primary-400' : 'text-primary-300'
                }`}
              >
                {subtitle}
              </p>
            )}

            {title && (
              <h2
                className={`font-display font-bold text-3xl sm:text-4xl mb-4 ${
                  dark ? 'text-white' : 'text-white'
                }`}
              >
                {title}
              </h2>
            )}

            {description && (
              <p
                className={`text-lg ${
                  dark ? 'text-gray-400' : 'text-gray-300'
                }`}
              >
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