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
  BarChart3,
  Globe,
  Users,
  TrendingUp
} from "lucide-react";

function Home() {

  const services = [
    {
      icon: Rocket,
      title: "Web Applications",
      desc: "We build scalable, high-performance web apps designed for real users and real growth.",
      badge: "CORE"
    },
    {
      icon: BarChart3,
      title: "Data & Analytics",
      desc: "Transform raw data into meaningful insights that help you take smarter decisions.",
      badge: "INSIGHTS"
    },
    {
      icon: Shield,
      title: "Digital Security",
      desc: "Security-first mindset to keep your product and users safe from day one.",
      badge: "SECURE"
    },
    {
      icon: Globe,
      title: "SaaS Platforms",
      desc: "We design and develop SaaS products ready to scale globally.",
      badge: "SAAS"
    },
    {
      icon: Users,
      title: "User Experience",
      desc: "Clean, modern UI/UX that people actually enjoy using.",
      badge: "UX"
    },
    {
      icon: TrendingUp,
      title: "Growth Systems",
      desc: "Build systems that support your startup growth and user acquisition.",
      badge: "GROWTH"
    }
  ];

  const stats = [
    { value: "20+", label: "Projects in progress" },
    { value: "48h", label: "Fast delivery cycles" },
    { value: "100%", label: "Client transparency" },
    { value: "5+", label: "Startup collaborations" },
  ];

  const deliveryFeatures = [
    {
      title: "Rapid Iteration",
      desc: "We launch fast, learn quickly, and improve continuously.",
    },
    {
      title: "Clear Communication",
      desc: "You always know what's happening and what's next.",
    },
    {
      title: "Scalable Code",
      desc: "Built with future growth in mind from day one.",
    },
    {
      title: "Startup Focused",
      desc: "Everything we build is aligned with startup needs.",
    },
  ];

  const heroFeatures = [
    {
      icon: "🚀",
      title: "Launch Fast",
      desc: "From idea to product in minimum time.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "⚡",
      title: "Speed + Quality",
      desc: "Fast delivery without compromising quality.",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "📈",
      title: "Grow Smart",
      desc: "We help you scale step by step.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "🤝",
      title: "Real Partnership",
      desc: "We grow with your startup.",
      bg: "bg-[#9B4DCA]/20",
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">

      {/* HERO */}
      <Hero
        badge="Startup Focused Team"
        subtitle="Build • Launch • Scale"
        title="We Build Startups That Actually Work"
        description="We partner with founders to shape ideas into product-ready MVPs, launch fast, and keep iterating based on real user feedback."
        features={heroFeatures}
        primaryCta={{ label: "Start Your Project", to: "/solutions" }}
        secondaryCta={{ label: "Contact Team", to: "/reach-us" }}
      />

      {/* ABOUT */}
      <Section subtitle="About Us" title="A Startup Building for Startups">
        <div className="max-w-3xl text-center mx-auto space-y-4">
          <p className="text-gray-700">
            We are a lean digital team built like a startup: fast, practical, and relentlessly focused on outcomes.
            We help founders move from concept to customer-ready product without the usual delays.
          </p>
          <p className="text-gray-600">
            Our mission is simple: create startup-ready products that launch quickly, grow sustainably, and deliver real value.
          </p>
        </div>
      </Section>

      {/* WHY US */}
      <Section subtitle="Why Choose Us" title="Built for Founders">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h3 className="text-3xl font-black text-[#3E103F]">
              We keep things simple, fast, and effective.
            </h3>

            <p className="text-gray-700">
              No unnecessary complexity. We focus only on what matters for your product success.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Startup mindset</li>
              <li>✔ Fast execution</li>
              <li>✔ Scalable architecture</li>
              <li>✔ Founder-first collaboration</li>
              <li>✔ Data-informed decisions</li>
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
      <Section subtitle="Services" title="What We Offer">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <Card
              key={i}
              to="/solutions"
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

      {/* DELIVERY */}
      <Section subtitle="Process" title="How We Deliver">
        <div className="grid md:grid-cols-4 gap-6">
          {deliveryFeatures.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <h3 className="font-semibold text-[#3E103F] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      <Section subtitle="Startup DNA" title="What Makes Our Work Startup-ready">
        <div className="grid md:grid-cols-4 gap-6">
          {[
            {
              title: "MVP-first",
              desc: "We launch early and learn from real users.",
            },
            {
              title: "Growth-focused",
              desc: "Every feature is designed to help your business move forward.",
            },
            {
              title: "Lean execution",
              desc: "We keep things effective, not bloated.",
            },
            {
              title: "Flexible roadmaps",
              desc: "We adjust quickly as priorities change.",
            },
          ].map((item, i) => (
            <div key={i} className="bg-white p-8 rounded-3xl border border-[#E5D6EB] shadow-sm">
              <h3 className="font-semibold text-[#3E103F] mb-3">{item.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS STEPS */}
      <Section subtitle="Workflow" title="Our Working Process">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Research", desc: "Understanding your idea deeply." },
            { num: "02", title: "Development", desc: "Building clean and scalable systems." },
            { num: "03", title: "Launch & Grow", desc: "Deploy and improve continuously." }
          ].map((step, i) => (
            <div key={i} className="bg-white p-8 rounded-2xl border">
              <div className="text-4xl font-black text-[#D4AF37] mb-4">{step.num}</div>
              <h3 className="font-bold text-xl text-[#3E103F] mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TRUST */}
      <Section subtitle="Principles" title="What Makes Us Different">
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <Zap className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">Fast Execution</h4>
            <p className="text-gray-600 text-sm">Speed matters in startups.</p>
          </div>

          <div>
            <Code className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">Clean Code</h4>
            <p className="text-gray-600 text-sm">Maintainable & scalable.</p>
          </div>

          <div>
            <Shield className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">Full Transparency</h4>
            <p className="text-gray-600 text-sm">No hidden surprises.</p>
          </div>

        </div>
      </Section>

      {/* CTA */}
      <div className="bg-[#D4AF37] py-20 text-center">
        <h2 className="text-4xl font-black text-[#3E103F] mb-4">
          Ready to Build Something Big?
        </h2>

        <p className="text-[#3E103F]/80 mb-8">
          Let’s turn your idea into a real product.
        </p>

        <Link
          to="/reach-us"
          className="bg-[#3E103F] text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-2"
        >
          Get Started <ArrowRight />
        </Link>
      </div>

    </div>
  );
}

export default Home;