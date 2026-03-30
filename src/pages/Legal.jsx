import Hero from "../components/Hero";
import Section from "../components/Section";
import { Shield, Lock, Eye, AlertCircle, FileText, Database } from "lucide-react";

function Legal() {

  const heroFeatures = [
    {
      icon: "🔒",
      title: "Data Protection",
      desc: "Your data is encrypted and protected at every level.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "📜",
      title: "Clear Policies",
      desc: "Simple, transparent, and easy-to-understand terms.",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "🛡️",
      title: "Security First",
      desc: "Built with modern security standards.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "👁️",
      title: "Full Transparency",
      desc: "No hidden tracking or misuse of data.",
      bg: "bg-[#9B4DCA]/20",
    },
  ];

  return (
    <div className="bg-[#FAF9FB] min-h-screen">

      {/* HERO */}
      <Hero
        badge="Legal"
        subtitle="Privacy • Security • Trust"
        title="Built on Trust & Transparency"
        description="We believe trust is the foundation of every startup. Here's how we protect your data and respect your privacy."
        features={heroFeatures}
        primaryCta={{ label: "Explore Services", to: "/solutions" }}
        secondaryCta={{ label: "Contact Us", to: "/reach-us" }}
      />

      {/* INTRO */}
      <Section subtitle="Overview" title="Simple. Clear. Honest.">
        <div className="max-w-4xl mx-auto text-center space-y-4">
          <p className="text-xl font-medium text-gray-700">
            We don’t believe in complicated legal language.
          </p>
          <p className="text-gray-600">
            Our policies are written to be understood - not hidden.
          </p>
        </div>
      </Section>

      {/* CORE CARDS */}
      <Section subtitle="Core Principles" title="What We Guarantee">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: "Privacy First", desc: "Your data stays yours." },
            { icon: Lock, title: "Secure Systems", desc: "Protected infrastructure." },
            { icon: Eye, title: "Transparency", desc: "No hidden actions." },
            { icon: Database, title: "Minimal Data", desc: "Only what's needed." },
          ].map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border text-center">
              <item.icon className="mx-auto mb-3 text-[#3E103F]" />
              <h3 className="font-bold text-[#3E103F]">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TERMS */}
      <Section subtitle="Terms" title="Terms of Service">
        <div className="max-w-4xl mx-auto space-y-6">

          <div className="bg-white p-8 rounded-2xl border">
            <h4 className="text-xl font-bold text-[#3E103F] mb-4 flex items-center gap-2">
              <FileText size={18}/> What You Get
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>✓ Access to all agreed services</li>
              <li>✓ Continuous support & updates</li>
              <li>✓ Secure infrastructure</li>
              <li>✓ Data ownership & access</li>
            </ul>
          </div>

          <div className="bg-white p-8 rounded-2xl border">
            <h4 className="text-xl font-bold text-[#3E103F] mb-4">
              Your Responsibilities
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li>• Use services responsibly</li>
              <li>• Respect system integrity</li>
              <li>• Clear communication</li>
              <li>• Timely payments</li>
            </ul>
          </div>

        </div>
      </Section>

      {/* PRIVACY */}
      <Section subtitle="Privacy" title="How We Handle Data">
        <div className="max-w-4xl mx-auto space-y-6">

          <div>
            <h4 className="text-xl font-bold text-[#3E103F] mb-2">Data Collection</h4>
            <p className="text-gray-600">
              We only collect essential information required to provide our services.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#3E103F] mb-2">Usage</h4>
            <p className="text-gray-600">
              Data is used to improve services, provide support, and enhance experience.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-bold text-[#3E103F] mb-2">No Selling</h4>
            <p className="text-gray-600">
              We never sell or share your data with third parties.
            </p>
          </div>

        </div>
      </Section>

      {/* SECURITY */}
      <Section subtitle="Security" title="Protection Systems">
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">

          <div className="bg-white p-6 rounded-2xl border">
            <h4 className="font-bold text-[#3E103F] mb-2">Technical</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>✓ SSL encryption</li>
              <li>✓ Secure servers</li>
              <li>✓ Regular backups</li>
            </ul>
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h4 className="font-bold text-[#3E103F] mb-2">Operational</h4>
            <ul className="text-gray-600 text-sm space-y-1">
              <li>✓ Limited access</li>
              <li>✓ Internal security checks</li>
              <li>✓ Monitoring systems</li>
            </ul>
          </div>

        </div>
      </Section>

      {/* COOKIES */}
      <Section subtitle="Tracking" title="No Unnecessary Tracking">
        <div className="max-w-3xl mx-auto bg-white p-6 rounded-2xl border">
          <div className="flex gap-3">
            <AlertCircle className="text-[#D4AF37]" />
            <p className="text-gray-700">
              We use only basic analytics. No creepy tracking. No ads. No selling data.
            </p>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-[#3E103F] mb-4">
          Questions About Privacy?
        </h2>

        <p className="text-gray-600 mb-6">
          We’re always open to explain everything clearly.
        </p>

        <a
          href="mailto:reply@protitech.in"
          className="bg-[#3E103F] text-white px-8 py-3 rounded-full font-semibold"
        >
          Contact Legal Team
        </a>
      </div>

    </div>
  );
}

export default Legal;