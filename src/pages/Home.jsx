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
      title: "Product Development",
      desc: "We turn ideas into fast, scalable digital products ready for real users.",
      badge: "BUILD"
    },
    {
      icon: BarChart3,
      title: "Data Intelligence",
      desc: "Actionable insights that drive smarter decisions and faster growth.",
      badge: "DATA"
    },
    {
      icon: Shield,
      title: "Security & Stability",
      desc: "Strong foundations that keep your platform reliable and secure.",
      badge: "SECURE"
    },
    {
      icon: Globe,
      title: "Platform Engineering",
      desc: "Systems designed to scale seamlessly as your product grows.",
      badge: "SCALE"
    },
    {
      icon: Users,
      title: "User Experience",
      desc: "Interfaces that are simple, intuitive, and built for engagement.",
      badge: "UX"
    },
    {
      icon: TrendingUp,
      title: "Growth Enablement",
      desc: "Technology aligned with your business growth and traction goals.",
      badge: "GROWTH"
    }
  ];

  const stats = [
    { value: "20+", label: "Active builds" },
    { value: "48h", label: "Iteration cycles" },
    { value: "100%", label: "Transparency" },
    { value: "5+", label: "Founder partnerships" },
  ];

  const deliveryFeatures = [
    {
      title: "Ship Fast",
      desc: "We focus on speed without compromising product quality.",
    },
    {
      title: "Stay Aligned",
      desc: "Clear communication at every step of the journey.",
    },
    {
      title: "Think Long-Term",
      desc: "Every line of code is built for future scale.",
    },
    {
      title: "Execution First",
      desc: "Less talk, more building. We prioritize results.",
    },
  ];

  const heroFeatures = [
    {
      icon: "🚀",
      title: "From Idea to Product",
      desc: "We bring concepts to life quickly.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "⚡",
      title: "Fast Execution",
      desc: "Speed is our default mode.",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "📈",
      title: "Built to Scale",
      desc: "Growth-ready architecture from day one.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "🤝",
      title: "Founder Mindset",
      desc: "We think like partners, not vendors.",
      bg: "bg-[#9B4DCA]/20",
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">

      {/* HERO */}
      <Hero
        badge="Product Engineering Team"
        subtitle="Build • Launch • Scale"
        title="We Build Products That People Actually Use"
        description="We collaborate with ambitious founders to design, build, and launch digital products that solve real problems and scale with confidence."
        features={heroFeatures}
        primaryCta={{ label: "Start Your Project", to: "/services" }}
        secondaryCta={{ label: "Talk to Us", to: "/contact" }}
      />

      {/* ABOUT */}
      <Section subtitle="Who We Are" title="A Team Focused on Execution">
        <div className="max-w-3xl text-center mx-auto space-y-4">
          <p className="text-gray-700">
            We are a lean, product-focused team that moves fast and builds with clarity.
            Our goal is simple- help you turn ideas into working products without unnecessary delays.
          </p>
          <p className="text-gray-600">
            No fluff, no overengineering. Just practical execution that delivers results.
          </p>
        </div>
      </Section>

      {/* WHY US */}
      <Section subtitle="Why Us" title="Built for Speed & Clarity">
        <div className="grid lg:grid-cols-2 gap-12 items-center">

          <div className="space-y-6">
            <h3 className="text-3xl font-black text-[#3E103F]">
              We focus on what actually moves your product forward.
            </h3>

            <p className="text-gray-700">
              Everything we do is centered around speed, usability, and long-term scalability.
            </p>

            <ul className="space-y-3 text-gray-600">
              <li>✔ Fast and focused execution</li>
              <li>✔ Clean and scalable systems</li>
              <li>✔ Clear communication</li>
              <li>✔ Product-first thinking</li>
              <li>✔ Data-driven improvements</li>
            </ul>

            <Link
              to="/about"
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
      <Section subtitle="What We Do" title="Core Capabilities">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <Card
              key={i}
              to="/services"
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

      {/* PROCESS */}
      <Section subtitle="Process" title="How We Work">
        <div className="grid md:grid-cols-4 gap-6">
          {deliveryFeatures.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <h3 className="font-semibold text-[#3E103F] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* WORKFLOW */}
      <Section subtitle="Workflow" title="Execution Flow">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            { num: "01", title: "Understand", desc: "We deeply understand your idea and goals." },
            { num: "02", title: "Build", desc: "We design and develop with speed and precision." },
            { num: "03", title: "Launch & Iterate", desc: "We deploy, measure, and continuously improve." }
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
      <Section subtitle="Principles" title="What We Stand For">
        <div className="grid md:grid-cols-3 gap-8 text-center">

          <div>
            <Zap className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">Speed</h4>
            <p className="text-gray-600 text-sm">Execution over perfection.</p>
          </div>

          <div>
            <Code className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">Quality</h4>
            <p className="text-gray-600 text-sm">Clean, scalable systems.</p>
          </div>

          <div>
            <Shield className="mx-auto text-[#D4AF37]" size={32} />
            <h4 className="font-bold mt-4 text-[#3E103F]">Trust</h4>
            <p className="text-gray-600 text-sm">Transparent collaboration.</p>
          </div>

        </div>
      </Section>

      {/* CTA */}
      <div className="bg-[#D4AF37] py-20 text-center">
        <h2 className="text-4xl font-black text-[#3E103F] mb-4">
          Let’s Build Something Meaningful
        </h2>

        <p className="text-[#3E103F]/80 mb-8">
          Turn your idea into a real, working product.
        </p>

        <Link
          to="/contact"
          className="bg-[#3E103F] text-white px-10 py-4 rounded-full font-bold inline-flex items-center gap-2"
        >
          Get Started <ArrowRight />
        </Link>
      </div>

    </div>
  );
}

export default Home;