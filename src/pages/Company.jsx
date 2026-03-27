import Hero from "../components/Hero";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { Heart, Zap, Code, Target, Lightbulb } from "lucide-react";

function Company() {

  const values = [
    {
      icon: Heart,
      title: "We Care",
      description: "We take your work seriously and try to build things that actually help.",
    },
    {
      icon: Zap,
      title: "Keep It Simple",
      description: "No over-engineering. Just clean and practical solutions.",
    },
    {
      icon: Code,
      title: "Clean Code",
      description: "Maintainable code that makes sense even later.",
    },
  ];

  const points = [
    {
      icon: Target,
      title: "Still Growing",
      desc: "We’re learning, improving, and getting better with every project."
    },
    {
      icon: Zap,
      title: "Fast & Focused",
      desc: "We move quickly but keep things clear and manageable."
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">
      
      {/* HERO */}
      <Hero
        badge="About"
        subtitle="Small team • Big focus"
        title="We’re Building, Learning, and Improving"
        description="We’re a small team trying to build useful digital products. No big claims - just honest work and steady progress."
        primaryCta={{ label: "Start a Conversation", to: "/solutions" }}
        secondaryCta={{ label: "Contact Us", to: "/reach-us" }}
      />

      {/* STORY */}
      <Section
        subtitle="Our Story"
        title="Why We Started"
        align="left"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">
          
          <img 
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="rounded-2xl shadow-lg"
          />

          <div className="space-y-4">
            <p className="text-lg font-semibold text-[#3E103F]">
              We started because things felt unnecessarily complicated.
            </p>

            <p className="text-gray-600">
              Many tools and services were either too complex or didn’t solve real problems.
              We wanted to build something simpler and more practical.
            </p>

            <p className="text-gray-600">
              Right now, we’re still early - experimenting, learning, and improving with every project.
            </p>
          </div>

        </div>
      </Section>

      {/* VALUES */}
      <Section
        subtitle="Values"
        title="What We Follow"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border"
            >
              <item.icon className="w-6 h-6 text-[#3E103F] mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WHY US */}
      <Section
        subtitle="About Us"
        title="Where We Are Right Now"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {points.map((item, i) => (
            <div
              key={i}
              className="p-6 rounded-2xl bg-white border"
            >
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
            Based in India
          </h3>
          <p className="text-gray-600">
            Remote-first. Working with people from anywhere.
          </p>
        </div>
      </Section>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3E103F] mb-4">
          Let’s Work Together
        </h2>

        <p className="text-gray-600 mb-6">
          If you have something in mind, we can start small and build from there.
        </p>

        <Link
          to="/reach-us"
          className="bg-[#3E103F] text-white px-6 py-3 rounded-full font-semibold"
        >
          Get In Touch
        </Link>
      </div>

    </div>
  );
}

export default Company;