import { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  CheckCircle2,
  Phone,
  Calendar,
  Rocket
} from "lucide-react";
import Hero from "../components/Hero";
import Section from "../components/Section";

function ReachUs() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  const connectOptions = [
    {
      icon: Mail,
      title: "Email Us",
      desc: "Share your idea anytime.",
      detail: "reply@protitech.in",
    },
    {
      icon: Calendar,
      title: "Schedule Call",
      desc: "Book a meeting at your convenience.",
      detail: "Available Mon–Fri",
    },
  ];

  const heroFeatures = [
    {
      icon: "⚡",
      title: "Fast Response",
      desc: "We reply within 24 hours.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "🚀",
      title: "Startup Friendly",
      desc: "We understand early-stage needs.",
      bg: "bg-[#9B4DCA]/20",
    },
    {
      icon: "💬",
      title: "Clear Communication",
      desc: "No confusion, no jargon.",
      bg: "bg-[#D4AF37]/20",
    },
    {
      icon: "📈",
      title: "Action Focused",
      desc: "We help you move forward fast.",
      bg: "bg-[#9B4DCA]/20",
    },
  ];

  return (
    <div className="bg-[#FAF9FB] min-h-screen">

      {/* HERO */}
      <Hero
        badge="Contact"
        subtitle="Let’s Build Together"
        title="Have an Idea? Let’s Talk."
        description="Tell us what you're building and we’ll help you turn it into a real product."
        features={heroFeatures}
      />

      {/* CONTACT SECTION */}
      <Section subtitle="Start Here" title="Tell Us About Your Project">
        <div className="grid md:grid-cols-2 gap-10">

          {/* LEFT INFO */}
          <div className="space-y-6">

            <div>
              <h3 className="text-xl font-bold text-[#3E103F] mb-2">
                Why reach out?
              </h3>
              <p className="text-gray-600">
                Whether you have an idea, MVP, or scaling product - we can help you move forward.
              </p>
            </div>

            <div className="space-y-4 text-sm text-gray-600">

              <div className="flex gap-3">
                <MapPin className="text-[#3E103F]" />
                <span>India • Remote-first team</span>
              </div>

              <div className="flex gap-3">
                <Mail className="text-[#3E103F]" />
                <span>reply@protitech.in</span>
              </div>

            </div>

            <div className="bg-[#F3E8F7] p-5 rounded-xl">
              <p className="text-sm text-gray-700">
                ⚡ We usually respond within 24 hours.
              </p>
            </div>

          </div>

          {/* FORM */}
          <form
            onSubmit={handleSubmit}
            className="bg-white p-8 rounded-2xl border shadow-sm space-y-4"
          >

            <h3 className="text-lg font-bold text-[#3E103F]">
              Start Your Project
            </h3>

            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 border rounded-lg outline-none"
            />

            <input
              required
              type="email"
              placeholder="Email Address"
              className="w-full px-4 py-3 border rounded-lg outline-none"
            />

            <input
              type="text"
              placeholder="Project Type (Optional)"
              className="w-full px-4 py-3 border rounded-lg outline-none"
            />

            <textarea
              required
              rows="4"
              placeholder="Describe your idea..."
              className="w-full px-4 py-3 border rounded-lg outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#3E103F] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Message Sent
                </>
              ) : (
                <>
                  <Send size={18} /> Send Message
                </>
              )}
            </button>

          </form>

        </div>
      </Section>

      {/* CONNECT OPTIONS */}
      <Section subtitle="Options" title="Other Ways to Connect">
        <div className="grid md:grid-cols-2 gap-12">
          {connectOptions.map((item, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border text-center">
              <item.icon className="mx-auto mb-3 text-[#3E103F]" />
              <h3 className="font-bold text-[#3E103F]">{item.title}</h3>
              <p className="text-gray-600 text-sm mb-2">{item.desc}</p>
              <p className="text-sm font-semibold text-[#3E103F]">
                {item.detail}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA */}
      <div className="py-16 text-center">
        <Rocket className="mx-auto mb-4 text-[#3E103F]" size={32} />

        <h2 className="text-3xl font-bold text-[#3E103F] mb-3">
          Let’s Build Something Big
        </h2>

        <p className="text-gray-600 mb-6">
          Your idea deserves execution. Let’s start today.
        </p>

        <a
          href="mailto:reply@protitech.in"
          className="bg-[#3E103F] text-white px-8 py-3 rounded-full font-semibold"
        >
          Email Us
        </a>
      </div>

    </div>
  );
}

export default ReachUs;