import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Hexagon } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Company', path: '/company' },
    { name: 'Solutions', path: '/solutions' },
    { name: 'Perspectives', path: '/perspectives' },
    { name: 'Reach Us', path: '/reach-us' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/95 backdrop-blur-lg border-b border-slate-700 text-slate-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Hexagon className="w-10 h-10 text-primary-600 fill-primary-100 transition-transform group-hover:scale-110" />
              <span className="absolute inset-0 flex items-center justify-center text-primary-700 font-bold text-sm">
                P
              </span>
            </div>

            <div className="flex flex-col">
              <span className="font-display font-bold text-xl text-white leading-tight">
                PROTICO
              </span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-slate-400 font-medium">
                Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                  isActive(link.path)
                    ? 'text-white bg-primary-600/20'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-slate-200 hover:bg-slate-800 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? (
              <X className="w-6 h-6" />
            ) : (
              <Menu className="w-6 h-6" />
            )}
          </button>

        </div>
      </div>

      {/* Mobile Navigation */}
      <div
        className={`md:hidden transition-all duration-300 ease-in-out ${
          isOpen
            ? 'max-h-96 opacity-100'
            : 'max-h-0 opacity-0 overflow-hidden'
        }`}
      >
        <div className="px-4 py-4 bg-slate-900 border-t border-slate-700 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-primary-700 bg-primary-50'
                  : 'text-slate-300 hover:text-primary-600 hover:bg-slate-900'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </div>
      </div>

    </nav>
  )
}

export default Navbar