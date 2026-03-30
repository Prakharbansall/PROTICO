import Hero from "../components/Hero";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { Heart, Zap, Code, Target, Lightbulb, Rocket, Users } from "lucide-react";

function Company() {

  const values = [
    {
      icon: Heart,
      title: "We Care",
      description: "We treat every project like our own startup."
    },
    {
      icon: Zap,
      title: "Speed Matters",
      description: "Fast execution is our biggest advantage."
    },
    {
      icon: Code,
      title: "Clean Systems",
      description: "Simple, scalable, and maintainable code."
    },
  ];

  const points = [
    {
      icon: Target,
      title: "Early Stage Focus",
      desc: "We work best with startups that are building from scratch."
    },
    {
      icon: Rocket,
      title: "Execution First",
      desc: "Ideas are nothing without execution - we help you ship fast."
    },
    {
      icon: Users,
      title: "Founder Mindset",
      desc: "We think like partners, not just developers."
    },
  ];

  const milestones = [
    {
      title: "Idea to MVP",
      desc: "Helping founders turn concepts into working products.",
    },
    {
      title: "First Users",
      desc: "Building products that people can actually use.",
    },
    {
      title: "Continuous Growth",
      desc: "Improving and scaling with real feedback.",
    },
  ];

  const heroFeatures = [
    {
      icon: "🚀",
      title: "Startup mindset",
      desc: "We think like founders.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "⚡",
      title: "Fast execution",
      desc: "Speed is our strength.",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "📈",
      title: "Real growth",
      desc: "We focus on actual results.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "🤝",
      title: "True partnership",
      desc: "We grow with you.",
      bg: "bg-[#9B4DCA]/20",
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">
      
      {/* HERO */}
      <Hero
        badge="About Us"
        subtitle="Startup • Execution • Growth"
        title="We Build Startups - Not Just Projects"
        description="We are a small team focused on helping founders build real products with speed and clarity."
        features={heroFeatures}
        primaryCta={{ label: "Start Your Project", to: "/solutions" }}
        secondaryCta={{ label: "Contact Us", to: "/reach-us" }}
      />

      {/* STORY */}
      <Section subtitle="Our Story" title="Why We Started" align="left">
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="rounded-2xl shadow-lg"
          />

          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#3E103F]">
              We started with one goal - simplify building products.
            </p>

            <p className="text-gray-600">
              Too many solutions were overcomplicated or slow. We wanted to change that.
            </p>

            <p className="text-gray-600">
              Today, we help startups move faster, launch quicker, and grow smarter.
            </p>
          </div>

        </div>
      </Section>

      {/* VALUES */}
      <Section subtitle="Values" title="What We Believe In">
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border">
              <item.icon className="w-6 h-6 text-[#3E103F] mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MILESTONES */}
      <Section subtitle="Journey" title="What We’ve Done">
        <div className="grid md:grid-cols-3 gap-6">
          {milestones.map((item, i) => (
            <div key={i} className="p-8 rounded-2xl bg-[#F8F4F9] border">
              <h3 className="font-bold text-[#3E103F] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CURRENT */}
      <Section subtitle="Today" title="Where We Are">
        <div className="grid md:grid-cols-3 gap-6">
          {points.map((item, i) => (
            <div key={i} className="p-6 rounded-2xl bg-white border">
              <item.icon className="w-6 h-6 text-[#3E103F] mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* LOCATION */}
      <Section>
        <div className="max-w-3xl mx-auto text-center">
          <Lightbulb className="mx-auto mb-4 text-[#3E103F]" size={40} />
          <h3 className="text-2xl font-bold mb-2 text-[#3E103F]">
            Remote-first Team
          </h3>
          <p className="text-gray-600">
            Working with startups across different locations.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-[#3E103F] mb-4">
          Let’s Build Something Great
        </h2>

        <p className="text-gray-600 mb-6">
          You bring the idea, we’ll help you build and grow it.
        </p>

        <Link
          to="/reach-us"
          className="bg-[#3E103F] text-white px-8 py-3 rounded-full font-semibold"
        >
          Get Started
        </Link>
      </div>

    </div>
  );
}

export default Company;