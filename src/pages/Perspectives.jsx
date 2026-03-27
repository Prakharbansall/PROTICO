import Hero from "../components/Hero";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { Code, Zap, Users, Lightbulb, ArrowRight } from "lucide-react";

function Perspectives() {

  const principles = [
    {
      icon: Code,
      title: "Write Clean Code",
      desc: "Code should be easy to understand and maintain later.",
    },
    {
      icon: Zap,
      title: "Keep It Fast",
      desc: "We try to build fast, but not at the cost of quality.",
    },
    {
      icon: Users,
      title: "Think About Users",
      desc: "Real people use products - we build for them.",
    },
  ];

  const mistakes = [
    {
      title: "Overcomplicating Things",
      desc: "Start simple. You can always improve later.",
    },
    {
      title: "Skipping Planning",
      desc: "A little thinking early saves a lot of time later.",
    },
    {
      title: "Ignoring Performance",
      desc: "Slow products lose users quickly.",
    },
    {
      title: "No Feedback Loop",
      desc: "Build → test → improve. Repeat.",
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">

      {/* HERO */}
      <Hero
        badge="Our Thinking"
        subtitle="How We Work"
        title="Simple Ideas That Guide Our Work"
        description="We’re still learning, but these are the things we try to follow while building products."
        secondaryCta={{ label: "Contact Us", to: "/reach-us" }}
      />

      {/* PRINCIPLES */}
      <Section
        subtitle="Principles"
        title="What We Try to Follow"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <item.icon className="w-6 h-6 text-[#3E103F] mb-3" />
              <h3 className="font-semibold mb-2">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* APPROACH */}
      <Section
        subtitle="Approach"
        title="How We Think About Building"
        align="left"
      >
        <div className="max-w-3xl space-y-4">
          <p className="text-gray-700">
            Good software should feel simple. It should not require long explanations.
          </p>
          <p className="text-gray-600">
            Behind that simplicity is careful thinking, clean structure, and continuous improvement.
          </p>
          <p className="text-gray-600">
            We’re still figuring things out, but we try to move in the right direction.
          </p>
        </div>
      </Section>

      {/* MISTAKES */}
      <Section
        subtitle="Learnings"
        title="Common Mistakes We Notice"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {mistakes.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border">
              <h4 className="font-semibold text-[#3E103F] mb-2">
                {item.title}
              </h4>
              <p className="text-gray-600 text-sm">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <div className="py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-[#3E103F] mb-4">
          Let’s Build Something
        </h2>

        <p className="text-gray-600 mb-6">
          If you're working on something, we can help you move forward.
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

export default Perspectives;