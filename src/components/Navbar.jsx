import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
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
    { name: "Home", path: "/" },
    { name: "Services", path: "/solutions" },
    { name: "Insights", path: "/perspectives" },
    { name: "About", path: "/company" }
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav
      className={`fixed w-full z-50 transition-all ${
        scrolled
          ? "bg-[#3E103F]/95 backdrop-blur-xl py-3 shadow-xl"
          : "bg-transparent py-6"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2">
          <img src={logo} alt="Protico logo" className="h-12" />
          <span className="text-white font-bold tracking-wide">
            PROTICO TECHNOLOGY
          </span>
        </Link>

        {/* DESKTOP */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-semibold transition ${
                isActive(link.path)
                  ? "text-[#D4AF37]"
                  : "text-white/80 hover:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/reach-us"
            className="bg-[#D4AF37] text-[#3E103F] px-6 py-2 rounded-full font-bold flex items-center gap-2"
          >
            Get Started <ChevronRight size={16} />
          </Link>
        </div>

        {/* MOBILE */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-white"
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* MOBILE MENU */}
      {isOpen && (
        <div className="bg-[#3E103F] md:hidden p-6 space-y-6 text-center">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className="block text-white text-lg"
            >
              {link.name}
            </Link>
          ))}

          <Link
            to="/reach-us"
            onClick={() => setIsOpen(false)}
            className="block bg-[#D4AF37] text-[#3E103F] py-3 rounded-full font-bold"
          >
            Start Project
          </Link>
        </div>
      )}
    </nav>
  );
}

export default Navbar;