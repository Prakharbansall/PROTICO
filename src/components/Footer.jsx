import { Link } from "react-router-dom";
import { useState } from "react";
import {
  Mail,
  MapPin,
  Linkedin,
  Instagram,
  ShieldCheck,
  Globe,
  ExternalLink
} from "lucide-react";
import logo from "../asset/logo.png";

function Footer() {
  const [subscribeEmail, setSubscribeEmail] = useState("");
  const [subscribeStatus, setSubscribeStatus] = useState("");
  const currentYear = new Date().getFullYear();

  const navigationLinks = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/solutions" },
    { name: "Insights", path: "/perspectives" },
    { name: "About", path: "/company" },
    { name: "Contact", path: "/reach-us" },
  ];

  const legalLinks = [
    { name: "Terms of Service", path: "/legal" }
  ];

  const handleSubscribe = (event) => {
    event.preventDefault();
    const emailValue = subscribeEmail.trim();
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!emailRegex.test(emailValue)) {
      setSubscribeStatus("Please enter a valid email address.");
      return;
    }

    setSubscribeStatus("Thank you for subscribing!");
    setSubscribeEmail("");
  };

  return (
    <footer className="bg-[#3E103F] text-white border-t border-[#5D2E60] mt-20 relative overflow-hidden">
      {/* Subtle Background Accent */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#D4AF37]/5 rounded-full blur-3xl -mr-20 -mt-20"></div>

      <div className="max-w-7xl mx-auto px-8 py-20 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16">
          
          {/* 1. BRAND IDENTITY */}
         

<h2 className="text-xl font-black tracking-tighter text-[#D4AF37]">
  <a 
    href="https://protitech.in/" 
    target="_blank" 
    rel="noopener noreferrer"
    className="flex flex-col items-center text-center gap-2"
  >
    <img 
      src={logo} 
      className="h-24 w-30 object-contain" 
      alt="logo" 
    />

    <div>
      PROTICO
      <span className="block text-white/50 text-xl">
        TECHNOLOGY PRIVATE LIMITED
      </span>
    </div>
  </a>
</h2>

          {/* 2. NAVIGATION PLATFORM */}
          <div>
            <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.2em] mb-8">
              Sitemap
            </h4>
            <ul className="space-y-4 text-sm">
              {navigationLinks.map((link) => (
                <li key={link.path}>
                  <Link
                    to={link.path}
                    className="text-[#E2D1F9] hover:text-white hover:translate-x-1 transition-all inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* 3. LEGAL & GOVERNANCE */}
          <div>
            <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.2em] mb-8">
              Governance
            </h4>
            <ul className="space-y-4 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    to={link.path}
                    className="text-[#E2D1F9] hover:text-white flex items-center gap-2"
                  >
                    <ShieldCheck className="w-3 h-3 text-[#D4AF37]" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="mt-10">
              <h5 className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.2em] mb-4">
                Subscribe
              </h5>
              <form onSubmit={handleSubscribe} className="space-y-3">
                <label className="sr-only" htmlFor="footer-subscribe-email">
                  Email address
                </label>
                <input
                  id="footer-subscribe-email"
                  type="email"
                  value={subscribeEmail}
                  onChange={(e) => setSubscribeEmail(e.target.value)}
                  placeholder="Your email"
                  className="w-full px-4 py-3 rounded-full border border-white/20 text-[#1A1A1A] focus:outline-none focus:ring-2 focus:ring-[#D4AF37]/50"
                />
                <button
                  type="submit"
                  className="w-full rounded-full bg-[#D4AF37] px-6 py-3 text-[#3E103F] font-semibold transition hover:bg-[#F4D03F]"
                >
                  Subscribe
                </button>
                {subscribeStatus && (
                  <p className={`text-sm ${subscribeStatus.startsWith("Thank") ? "text-green-300" : "text-red-300"}`}>
                    {subscribeStatus}
                  </p>
                )}
              </form>
            </div>
          </div>

          {/* 4. HEADQUARTERS */}
          <div>
            <h4 className="text-[#D4AF37] text-xs font-black uppercase tracking-[0.2em] mb-8">
              Regional HQ
            </h4>
            <div className="space-y-6 text-sm text-[#E2D1F9]">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <address className="not-italic leading-relaxed">
                  Office No 130 Ist Floor, Cloud 9 Sec-1 Vaishali, I.e.sahibabad, Ghaziabad, Ghaziabad, Uttar Pradesh, India, 201010.Vaishali<br />
                </address>
              </div>

              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 text-[#D4AF37] shrink-0" />
                <a href="mailto:reply@protitech.in" className="hover:text-white underline decoration-[#D4AF37]">
                  reply@protitech.in
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* BOTTOM STRIP */}
        <div className="border-t border-white/10 mt-20 pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-xs text-[#E2D1F9]/60 font-medium">
            © PROTICO TECHNOLOGY PRIVATE LIMITED.
          </div>
          
          <div className="flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#E2D1F9]/60">
            <span className="flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Systems Operational
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;