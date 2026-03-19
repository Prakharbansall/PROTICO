import { Link } from "react-router-dom";
import {
  Hexagon,
  Mail,
  MapPin,
  ArrowUpRight,
} from "lucide-react";
import { useState } from "react";



function Footer() {

  const currentYear = new Date().getFullYear();

const [joined, setJoined] = useState(false);

const handleJoin = () => {
  setJoined(true);

  setTimeout(() => {
    setJoined(false);
  }, 2000); 
};

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
          </div> {/* ✅ FIXED: closed lg:col-span-2 */}

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

            <div className="flex items-center bg-gray-800 rounded-lg overflow-hidden border border-gray-700 max-w-xs">
              <input
                type="email"
                placeholder="Your email"
                className="bg-transparent px-3 py-2 text-xs text-white outline-none w-full placeholder-gray-500"
              />

<button
  onClick={handleJoin}
  className="bg-primary-600 px-3 py-2 text-xs font-medium hover:bg-primary-700 transition"
>
  {joined ? "Joined" : "Join"}
</button>
            </div>

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
