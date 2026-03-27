import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Zap,
  Code,
  Shield,
  Rocket,
  BarChart3
} from "lucide-react";

function Home() {

  const services = [
    {
      icon: Rocket,
      title: "Web Applications",
      desc: "We build simple, scalable apps focused on real usage.",
      badge: "CORE"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      desc: "Early insights to help you make better decisions.",
      badge: "INSIGHTS"
    },
    {
      icon: Shield,
      title: "Digital Security",
      desc: "Basic security practices from day one.",
      badge: "SECURE"
    }
  ];

  return (
    <div className="bg-[#FAF9FB]">

      {/* HERO */}
      <Hero
        badge="Early Stage Team"
        subtitle="Building • Learning • Improving"
        title="We’re Building Digital Products - One Step at a Time"
        description="We’re a small team focused on creating simple, working solutions. Still growing, still learning - but serious about what we build."
        primaryCta={{ label: "Start a Conversation", to: "/solutions" }}
        secondaryCta={{ label: "Contact Us", to: "/reach-us" }}
      />

      {/* EARLY STAGE NOTE */}
      <Section subtitle="About Us" title="Where We Are Right Now">
        <div className="max-w-3xl text-center mx-auto space-y-4">
          <p className="text-gray-700">
            We're in the early stages. No big claims, no inflated numbers.
            Just focused on building useful products and improving every day.
          </p>
          <p className="text-gray-600">
            If you're looking for a long-term tech partner who grows with you,
            that's where we fit in.
          </p>
        </div>
      </Section>

      {/* WHY US */}
      <Section subtitle="Why Us" title="How We Approach Things">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h3 className="text-3xl font-black text-[#3E103F]">
              We focus on clarity over complexity.
            </h3>

            <p className="text-gray-700">
              We don’t over-engineer. We don’t over-promise.
              We build what’s needed - clean, simple, and scalable.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Clear and honest communication</li>
              <li>✔ Practical solutions, not hype</li>
              <li>✔ Built to improve over time</li>
            </ul>

            <Link
              to="/company"
              className="inline-flex items-center gap-2 font-bold text-[#3E103F] border-b-2 border-[#D4AF37]"
            >
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1552664730-d307ca884978"
            className="rounded-[2rem] shadow-xl"
          />
        </div>
      </Section>

      {/* SERVICES */}
      <Section subtitle="Services" title="What We're Working On">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <Card
              key={i}
              variant="royal"
              icon={item.icon}
              title={item.title}
              description={item.desc}
              badge={item.badge}
              ctaText="Explore"
            />
          ))}
        </div>
      </Section>

      {/* WHAT WE'RE BUILDING (NEW SECTION) */}
      <Section subtitle="Focus" title="What We Care About">
        <div className="grid md:grid-cols-3 gap-6 text-center">

          <div className="bg-white p-6 rounded-2xl border">
            <h4 className="font-bold text-[#3E103F] mb-2">Usability</h4>
            <p className="text-gray-600 text-sm">
              Products should be easy to use without explanation.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h4 className="font-bold text-[#3E103F] mb-2">Performance</h4>
            <p className="text-gray-600 text-sm">
              Fast, responsive, and optimized from the start.
            </p>
          </div>

          <div className="bg-white p-6 rounded-2xl border">
            <h4 className="font-bold text-[#3E103F] mb-2">Scalability</h4>
            <p className="text-gray-600 text-sm">
              Built so it can grow when you grow.
            </p>
          </div>

        </div>
      </Section>

      {/* PROCESS */}
      <Section subtitle="Process" title="How We Work">
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              num: "01",
              title: "Understand",
              desc: "We listen first before building anything."
            },
            {
              num: "02",
              title: "Build",
              desc: "We keep things simple and functional."
            },
            {
              num: "03",
              title: "Improve",
              desc: "We refine based on real feedback."
            }
          ].map((step, i) => (
            <div
              key={i}
              className="bg-white p-8 rounded-2xl border hover:shadow-lg transition"
            >
              <div className="text-4xl font-black text-[#D4AF37] mb-4">
                {step.num}
              </div>

              <h3 className="font-bold text-xl text-[#3E103F] mb-2">
                {step.title}
              </h3>

              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}

        </div>
      </Section>

      {/* TRUST */}
      <Section subtitle="Principles" title="What You Can Expect">
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <Zap className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">No Overpromising</h4>
            <p className="text-gray-600 text-sm">We say only what we can deliver.</p>
          </div>

          <div>
            <Code className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">Clean Work</h4>
            <p className="text-gray-600 text-sm">Code that actually makes sense.</p>
          </div>

          <div>
            <Shield className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">Transparency</h4>
            <p className="text-gray-600 text-sm">No hidden process or confusion.</p>
          </div>

        </div>
      </Section>

      {/* CTA */}
      <div className="bg-[#D4AF37] py-20 text-center">
        <h2 className="text-4xl font-black text-[#3E103F] mb-4">
          Let’s Start Small
        </h2>

        <p className="text-[#3E103F]/80 mb-8">
          A simple conversation is enough to begin.
        </p>

        <Link
          to="/reach-us"
          className="bg-[#3E103F] text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-2"
        >
          Contact Us <ArrowRight />
        </Link>
      </div>

    </div>
  );
}

export default Home;