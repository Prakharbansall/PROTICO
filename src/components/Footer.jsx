import { Link } from "react-router-dom";
import {
  Hexagon,
  Mail,
  MapPin,
  ArrowUpRight,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";

function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "The Company", path: "/company" },
    { name: "Solutions", path: "/solutions" },
    { name: "Perspectives", path: "/perspectives" },
    { name: "Reach Us", path: "/reach-us" },
  ];

  return (
    <footer className="relative bg-surface-950 text-surface-200 border-t border-white/10 overflow-hidden">

      {/* Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-400/10 blur-3xl" />

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-14">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* BRAND */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-3 mb-5 group">

              <div className="relative">
                <Hexagon className="w-10 h-10 text-brand-400 fill-brand-700/20 group-hover:rotate-6 transition" />
                <span className="absolute inset-0 flex items-center justify-center text-brand-200 font-bold text-xs">
                  P
                </span>
              </div>

              <div>
                <h2 className="font-bold text-xl text-white tracking-wide">
                  PROTICO
                </h2>
                <p className="text-[10px] uppercase tracking-[0.2em] text-surface-400">
                  Technology
                </p>
              </div>
            </Link>

            <p className="text-sm text-surface-300 leading-relaxed max-w-sm mb-6">
              We build practical digital systems that reduce manual work,
              improve decisions, and make operations predictable.
            </p>

            {/* CONTACT */}
            <div className="space-y-3 text-sm text-surface-300 mb-6">

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-brand-400 mt-1" />
                <span>Vaishali, Ghaziabad, India</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-4 h-4 text-brand-400" />
                <a
                  href="mailto:contact@proticotechnology.com"
                  className="hover:text-brand-300 transition"
                >
                  contact@proticotechnology.com
                </a>
              </div>
            </div>

            {/* SOCIAL */}
            <div className="flex gap-3">
              {[Linkedin, Twitter, Github].map((Icon, i) => (
                <a
                  key={i}
                  href="#"
                  className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center hover:bg-brand-400 hover:text-white transition-all"
                >
                  <Icon className="w-4 h-4" />
                </a>
              ))}
            </div>
          </div>

          {/* LINKS */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Explore
            </h4>

            <ul className="space-y-3 text-sm">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="flex items-center gap-2 text-surface-300 hover:text-brand-300 transition group"
                  >
                    {link.name}
                    <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* CTA INSTEAD OF NEWSLETTER */}
          <div>
            <h4 className="text-white font-semibold mb-5 text-lg">
              Get in touch
            </h4>

            <p className="text-sm text-surface-400 mb-5">
              Have a workflow problem or idea? Let’s talk.
            </p>

            <Link
              to="/reach-us"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 text-white font-semibold hover:scale-[1.05] active:scale-[0.98] transition-all shadow-lg"
            >
              Contact us
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <p className="text-xs text-surface-500 mt-4">
              We usually respond within 24 hours.
            </p>
          </div>
        </div>

        {/* BOTTOM */}
        <div className="mt-12 pt-6 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-surface-500">

          <p>© {currentYear} Protico Technology Pvt. Ltd.</p>

          <div className="flex gap-5">
            <Link to="/legal" className="hover:text-brand-300 transition">
              Privacy
            </Link>
            <Link to="/legal" className="hover:text-brand-300 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;