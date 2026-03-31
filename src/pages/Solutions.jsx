import { Link } from "react-router-dom";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";

import {
  Cpu,
  BarChart3,
  Lock,
  ArrowRight,
  Database,
  ShieldCheck,
  Rocket,
  TrendingUp,
  Users,
  Globe
} from "lucide-react";

function Solutions() {

  const services = [
    {
      icon: Cpu,
      title: "Web Applications",
      desc: "Fast, scalable applications built for real-world usage.",
      badge: "CORE"
    },
    {
      icon: Globe,
      title: "SaaS Platforms",
      desc: "Launch your product with a strong, scalable foundation.",
      badge: "SAAS"
    },
    {
      icon: BarChart3,
      title: "Analytics & Data",
      desc: "Understand users and make better decisions with data.",
      badge: "DATA"
    },
    {
      icon: Users,
      title: "User Experience",
      desc: "Clean, intuitive interfaces that users actually enjoy.",
      badge: "UX"
    },
    {
      icon: Lock,
      title: "Security & Infra",
      desc: "Secure deployment and reliable infrastructure setup.",
      badge: "SECURE"
    },
    {
      icon: TrendingUp,
      title: "Growth Systems",
      desc: "Build systems that support long-term startup growth.",
      badge: "GROWTH"
    },
  ];

  const process = [
    {
      step: "01",
      title: "Understand",
      desc: "We deeply understand your idea and goals.",
    },
    {
      step: "02",
      title: "Plan",
      desc: "Clear roadmap focused on real impact.",
    },
    {
      step: "03",
      title: "Build",
      desc: "Fast development with clean architecture.",
    },
    {
      step: "04",
      title: "Launch",
      desc: "Deploy quickly and start learning.",
    },
    {
      step: "05",
      title: "Scale",
      desc: "Improve and grow based on real data.",
    },
  ];

  const caseStudies = [
    {
      title: "Startup SaaS Platform",
      desc: "Built a scalable SaaS product with user onboarding and analytics.",
      icon: Rocket,
    },
    {
      title: "Real-time Dashboard",
      desc: "Created a live analytics dashboard for business insights.",
      icon: BarChart3,
    },
    {
      title: "Secure Deployment",
      desc: "Implemented secure infrastructure with monitoring and access control.",
      icon: ShieldCheck,
    },
    {
      title: "Growth System Setup",
      desc: "Designed systems to track and improve user acquisition.",
      icon: TrendingUp,
    },
  ];

  const heroFeatures = [
    {
      icon: "🚀",
      title: "Startup-focused",
      desc: "Built for speed and real-world execution.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "⚡",
      title: "Fast delivery",
      desc: "We move quickly without compromising quality.",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "📈",
      title: "Scalable systems",
      desc: "Everything is built to grow with you.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "🛡️",
      title: "Secure by default",
      desc: "Security is built in from day one.",
      bg: "bg-[#9B4DCA]/20",
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">

      {/* HERO */}
      <Hero
        badge="Solutions"
        subtitle="Build • Launch • Scale"
        title="Solutions Designed for Startups"
        description="We help founders build products that actually work - fast, scalable, and ready to grow."
        features={heroFeatures}
        primaryCta={{ label: "Start Your Project", to: "/contact" }}
        secondaryCta={{ label: "Talk to Us", to: "/contact" }}
      />

      {/* SERVICES */}
      <Section subtitle="Services" title="What We Build">
        <div className="grid md:grid-cols-3 gap-6">
          {services.map((item, i) => (
            <Card
              key={i}
              to="/contact"
              icon={item.icon}
              title={item.title}
              description={item.desc}
              badge={item.badge}
              ctaText="Explore"
            />
          ))}
        </div>
      </Section>

      {/* CASE STUDIES */}
      <Section subtitle="Work" title="What We’ve Built">
        <div className="grid md:grid-cols-4 gap-6">
          {caseStudies.map((item, i) => (
            <Card
              key={i}
              to="/contact"
              icon={item.icon}
              title={item.title}
              description={item.desc}
              variant="soft"
              ctaText="View"
            />
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section subtitle="Process" title="How We Work">
        <div className="grid md:grid-cols-5 gap-6">
          {process.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border text-center">
              <p className="text-[#D4AF37] font-bold">{item.step}</p>
              <h4 className="font-semibold text-[#3E103F]">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <div className="bg-[#3E103F] text-white py-20 text-center">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Your Startup?
        </h2>

        <p className="mb-8 text-[#E2D1F9]">
          Let’s turn your idea into a working product.
        </p>

        <Link
          to="/contact"
          className="bg-[#D4AF37] text-[#3E103F] px-10 py-4 rounded-full font-bold inline-flex items-center gap-2"
        >
          Get Started <ArrowRight />
        </Link>
      </div>

    </div>
  );
}

export default Solutions;