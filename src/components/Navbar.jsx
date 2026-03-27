import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Shield, ChevronRight } from "lucide-react";
import logo from "../asset/logo.png";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navLinks = [
    { name: "Global Home", path: "/" },
    { name: "Architecture", path: "/solutions" },
    { name: "Perspectives", path: "/perspectives" },
    { name: "About", path: "/Company" },
  ];

  const isActive = (path) => location.pathname === path;
  const fontStyle = { fontFamily: "'Inter', sans-serif" };

  return (
    <nav
      style={fontStyle}
      className={`fixed top-0 left-0 right-0 z-[100] transition-all duration200 ${
        scrolled
          ? "bg-[#3E103F]/95 backdrop-blur-2xl py-3 shadow-[0_20px_50px_rgba(0,0,0,0.3)] border-b border-white/5"
          : "bg-transparent py-7"
      }`}
    >
      <div className="max-w-7xl mx-auto px-3">
        <div className="flex items-center justify-between ">
          {/* BRAND LOGO */}
          <Link to="/" className="group flex items-center ">
            <img src={logo} className="h-20 w-30" />
            <span className="text-yellow-400 font-semibold tracking-wide">
              &nbsp;&nbsp;PROTICO TECHNOLOGY
            </span>
          </Link>

          {/* DESKTOP NAVIGATION */}
          <div className="hidden md:flex items-center gap-12">
            <div className="flex items-center gap-10">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`relative text-[10px] font-black uppercase tracking-[0.2em] transition-all duration-300 hover:text-[#D4AF37] group ${
                    isActive(link.path) ? "text-[#D4AF37]" : "text-white/80"
                  }`}
                >
                  {link.name}
                  <span
                    className={`absolute -bottom-1 left-0 h-[2px] bg-[#D4AF37] transition-all duration-500 ${
                      isActive(link.path) ? "w-full" : "w-0 group-hover:w-full"
                    }`}
                  />
                </Link>
              ))}
            </div>

            <Link
              to="/reach-us"
              className={`flex items-center gap-3 px-8 py-3 rounded-full text-[11px] font-black uppercase tracking-widest transition-all duration-500 hover:-translate-y-1 shadow-xl bg-[#D4AF37] text-[#3E103F] hover:bg-white`}
            >
              Contact Hub
              <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          {/* MOBILE TOGGLE - Fixed Color Visibility */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-3 rounded-xl transition-all z-[110] text-white hover:bg-white/10"
          >
            {isOpen ? <X className="w-7 h-7" /> : <Menu className="w-7 h-7" />}
          </button>
        </div>
      </div>

      {/* MOBILE DRAWER - Fixed Background & Visibility */}
      <div
        className={`fixed inset-0 bg-[#3E103F] z-[105] transition-all duration-700 ease-in-out md:hidden ${
          isOpen
            ? "opacity-100 translate-y-0"
            : "opacity-0 -translate-y-full pointer-events-none"
        }`}
      >
        <div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]" />

        <div className="flex flex-col h-full pt-40 px-12 space-y-10 relative z-10">
          {navLinks.map((link, i) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`text-4xl font-black uppercase tracking-tighter transition-all duration-500 transform ${
                isOpen
                  ? "translate-x-0 opacity-100"
                  : "-translate-x-10 opacity-0"
              } ${isActive(link.path) ? "text-[#D4AF37]" : "text-white"}`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-12 border-t border-white/10">
            <Link
              to="/reach-us"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-between w-full p-6 bg-[#D4AF37] text-[#3E103F] font-black uppercase tracking-widest rounded-2xl shadow-2xl"
            >
              Initiate Contact
              <ChevronRight />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
