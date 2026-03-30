import Hero from "../components/Hero";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import {
  Code,
  Zap,
  Users,
  ArrowRight,
  HelpCircle,
  TrendingUp,
  Target,
  Rocket,
} from "lucide-react";

function Perspectives() {

  const principles = [
    {
      icon: Code,
      title: "Clean Systems",
      desc: "Simple, scalable, and easy to maintain."
    },
    {
      icon: Zap,
      title: "Speed First",
      desc: "Execution speed matters more than perfection."
    },
    {
      icon: Users,
      title: "User Focus",
      desc: "We build for real users, not assumptions."
    },
    {
      icon: Target,
      title: "Clarity",
      desc: "Clear goals lead to better products."
    }
  ];

  const mistakes = [
    {
      title: "Overbuilding Early",
      desc: "Start small. Scale later."
    },
    {
      title: "No Clear Direction",
      desc: "Without clarity, progress slows down."
    },
    {
      title: "Ignoring Users",
      desc: "Feedback is everything in early stages."
    },
    {
      title: "Slow Execution",
      desc: "Speed is your biggest advantage."
    },
  ];

  const articles = [
    {
      title: "Why Speed Wins in Startups",
      desc: "Fast execution beats perfect planning every time."
    },
    {
      title: "Build Only What Matters",
      desc: "Focus on core features that solve real problems."
    },
    {
      title: "From Idea to MVP",
      desc: "How to go from concept to product quickly."
    },
    {
      title: "Scaling the Right Way",
      desc: "Grow step by step, not all at once."
    },
  ];

  const faq = [
    {
      question: "How do we decide what to build first?",
      answer: "We focus on the smallest version that delivers real value."
    },
    {
      question: "Do you work with early ideas?",
      answer: "Yes - we help shape raw ideas into working products."
    },
    {
      question: "How fast can we launch?",
      answer: "Depends on scope, but we aim for the fastest possible MVP."
    },
  ];

  const heroFeatures = [
    {
      icon: "🚀",
      title: "Execution mindset",
      desc: "We believe in building, not just planning.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "⚡",
      title: "Speed advantage",
      desc: "Fast teams win in startups.",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "📈",
      title: "Growth thinking",
      desc: "Everything is built to scale.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "🧠",
      title: "Smart simplicity",
      desc: "Simple solutions > complex systems.",
      bg: "bg-[#9B4DCA]/20",
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">

      {/* HERO */}
      <Hero
        badge="Startup Thinking"
        subtitle="Execution • Speed • Growth"
        title="How We Think About Building Startups"
        description="These are the principles and lessons that guide how we build, launch, and scale products."
        features={heroFeatures}
        primaryCta={{ label: "Start a Project", to: "/solutions" }}
        secondaryCta={{ label: "Contact Us", to: "/reach-us" }}
      />

      {/* PRINCIPLES */}
      <Section subtitle="Principles" title="What Drives Our Work">
        <div className="grid md:grid-cols-4 gap-6">
          {principles.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <item.icon className="mb-3 text-[#3E103F]" />
              <h3 className="font-bold text-[#3E103F]">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* INSIGHTS */}
      <Section subtitle="Insights" title="Startup Learnings">
        <div className="grid md:grid-cols-4 gap-6">
          {articles.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border hover:shadow-md transition">
              <h3 className="font-semibold text-[#3E103F] mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* APPROACH */}
      <Section subtitle="Approach" title="How We Build Products" align="left">
        <div className="max-w-3xl space-y-4">
          <p className="text-gray-700">
            Startups don’t need complexity. They need clarity, speed, and execution.
          </p>
          <p className="text-gray-600">
            We focus on building simple, working products that solve real problems.
          </p>
          <p className="text-gray-600">
            Then we improve, iterate, and scale - step by step.
          </p>
        </div>
      </Section>

      {/* FAQ */}
      <Section subtitle="FAQ" title="Common Questions" align="left">
        <div className="space-y-6 max-w-4xl mx-auto">
          {faq.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <div className="flex items-center gap-2 mb-2 text-[#3E103F]">
                <HelpCircle size={18} />
                <h4 className="font-semibold">{item.question}</h4>
              </div>
              <p className="text-gray-600 text-sm">{item.answer}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* MISTAKES */}
      <Section subtitle="Learnings" title="Common Startup Mistakes">
        <div className="grid md:grid-cols-2 gap-6">
          {mistakes.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <h4 className="font-bold text-[#3E103F]">{item.title}</h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-3xl font-bold text-[#3E103F] mb-4">
          Ready to Build Something?
        </h2>

        <p className="text-gray-600 mb-6">
          Let’s turn your idea into a working product.
        </p>

        <Link
          to="/reach-us"
          className="bg-[#3E103F] text-white px-8 py-3 rounded-full font-semibold inline-flex items-center gap-2"
        >
          Get Started <ArrowRight size={16} />
        </Link>
      </div>

    </div>
  );
}

export default Perspectives;