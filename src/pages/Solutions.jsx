import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import { Cpu, BarChart3, Lock, ArrowRight } from "lucide-react";

function Solutions() {

  const services = [
    {
      icon: Cpu,
      title: "Web Applications",
      desc: "Simple, scalable apps built for real users.",
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      desc: "Basic dashboards and insights to help decisions.",
    },
    {
      icon: Lock,
      title: "Security & Setup",
      desc: "Secure deployment and basic infrastructure setup.",
    },
  ];

  const process = [
    {
      step: "01",
      title: "Understand",
      desc: "We first understand what you actually need.",
    },
    {
      step: "02",
      title: "Plan",
      desc: "Simple plan with clear steps.",
    },
    {
      step: "03",
      title: "Build",
      desc: "We build and keep improving.",
    },
    {
      step: "04",
      title: "Support",
      desc: "Fix, improve, and grow over time.",
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">

      {/* HERO */}
      <Hero
        badge="Services"
        subtitle="What We Do"
        title="Simple Solutions That Work"
        description="We help build small to mid-size products. No over-promises, just practical work."
        secondaryCta={{ label: "Contact Us", to: "/reach-us" }}
      />

      {/* SERVICES */}
      <Section
        subtitle="Services"
        title="What We Can Help With"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <item.icon className="w-6 h-6 text-[#3E103F] mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section
        subtitle="Process"
        title="How We Work"
      >
        <div className="grid md:grid-cols-4 gap-6">
          {process.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border text-center">
              <p className="text-[#D4AF37] font-bold mb-2">{item.step}</p>
              <h4 className="font-semibold mb-2">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3E103F] mb-4">
          Let’s Start Small
        </h2>

        <p className="text-gray-600 mb-6">
          Tell us what you're working on and we’ll see how we can help.
        </p>

        <Link
          to="/reach-us"
          className="bg-[#3E103F] text-white px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2"
        >
          Contact Us <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}

export default Solutions;