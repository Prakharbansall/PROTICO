import { Link } from "react-router-dom";
import {
  Hexagon,
  Mail,
  MapPin,
  ArrowUpRight,
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
    <footer className="bg-gray-950 text-gray-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

          {/* Brand */}
          <div className="lg:col-span-2">
            <Link to="/" className="flex items-center gap-2 mb-5">
              <div className="relative">
                <Hexagon className="w-9 h-9 text-primary-400 fill-primary-900/40" />
                <span className="absolute inset-0 flex items-center justify-center text-primary-300 font-bold text-xs">
                  P
                </span>
              </div>

              <div>
                <h2 className="font-display font-bold text-xl text-white leading-tight">
                  PROTICO
                </h2>
                <p className="text-[9px] uppercase tracking-[0.2em] text-slate-400">
                  Technology
                </p>
              </div>
            </Link>

            <p className="text-gray-400 text-xs leading-relaxed max-w-sm mb-5">
              We design scalable digital systems that help businesses move faster,
              operate smarter, and grow with confidence.
            </p>

            <div className="space-y-2 mb-4">
              <div className="flex items-start gap-2 text-xs">
                <MapPin className="w-4 h-4 text-primary-400 mt-0.5" />
                <span>
                  Office No 130, Cloud 9 Sec-1 Vaishali,
                  <br />
                  Ghaziabad, UP - 201010
                </span>
              </div>

              <div className="flex items-center gap-2 text-xs">
                <Mail className="w-4 h-4 text-primary-400" />
                <a
                  href="mailto:contact@proticotechnology.com"
                  className="hover:text-primary-400 transition"
                >
                  contact@proticotechnology.com
                </a>
              </div>
            </div>
           
          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-base">
              Explore
            </h4>

            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-xs text-gray-400 hover:text-primary-400 flex items-center gap-1 group transition"
                  >
                    {link.name}
                    <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-display font-semibold text-white mb-4 text-base">
              Stay Updated
            </h4>

            <p className="text-xs text-gray-400 mb-3">
              Get insights delivered to your inbox.
            </p>

            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden border border-gray-700 max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-3 py-2 text-xs text-white outline-none w-full placeholder-gray-500"
              />
              <button className="bg-primary-600 px-3 py-2 text-xs font-medium hover:bg-primary-700 transition">
                Join
              </button>
            </div>

            <p className="text-[10px] text-slate-300 mt-2">
              No spam. Only insights.
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 pt-5 border-t border-gray-800 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xs text-slate-400">
            © {currentYear} Protico Technology Pvt. Ltd.
          </p>

          <div className="flex gap-4 text-[10px] text-slate-300">
            <Link to="/legal" className="hover:text-primary-400 transition">
              Privacy
            </Link>
            <Link to="/legal" className="hover:text-primary-400 transition">
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
