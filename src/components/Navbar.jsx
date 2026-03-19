import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Hexagon } from 'lucide-react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const location = useLocation()

  const navLinks = [
    { name: 'Overview', path: '/' },
    { name: 'About', path: '/company' },
    { name: 'Services', path: '/solutions' },
    { name: 'Insights', path: '/perspectives' },
    { name: 'Contact', path: '/reach-us' },
  ]

  const isActive = (path) => location.pathname === path

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-surface-900/95 backdrop-blur-xl border-b border-surface-700 text-surface-100 shadow-xl">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          <Link to="/" className="flex items-center gap-3 group">
            <div className="relative">
              <Hexagon className="w-10 h-10 text-brand-400 fill-brand-700/30 transition-transform group-hover:scale-110" />
              <span className="absolute inset-0 flex items-center justify-center text-brand-200 font-bold text-xs">
                P
              </span>
            </div>
            <div className="flex flex-col leading-tight">
              <span className="font-display font-bold text-lg text-white">PROTICO</span>
              <span className="text-[10px] uppercase tracking-[0.2em] text-surface-400">Technology</span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 ${
                  isActive(link.path)
                    ? 'bg-brand-500/20 text-brand-200'
                    : 'text-surface-200 hover:text-white hover:bg-surface-700/80'
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 rounded-lg text-surface-200 hover:bg-surface-700 transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      <div className={`md:hidden transition-all duration-300 ease-in-out ${isOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0 overflow-hidden'}`}>
        <div className="px-4 py-4 bg-surface-900 border-t border-surface-700 space-y-1">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-4 py-3 rounded-lg text-base font-medium transition-colors ${
                isActive(link.path)
                  ? 'bg-brand-500/20 text-brand-200'
                  : 'text-surface-200 hover:text-white hover:bg-surface-700/70'
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