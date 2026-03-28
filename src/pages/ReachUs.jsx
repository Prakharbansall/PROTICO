import { useState } from "react";
import { Mail, MapPin, Send, CheckCircle2 } from "lucide-react";
import Hero from "../components/Hero";
import Section from "../components/Section";

function ReachUs() {
  const [sent, setSent] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="bg-[#FAF9FB] min-h-screen">

      {/* HERO */}
      <Hero
        badge="Contact"
        subtitle="Let's talk"
        title="Tell Us What You're Working On"
        description="No pressure. Just share your idea and we’ll get back to you."
      />

      {/* CONTACT */}
      <Section title="Get in Touch">
        <div className="grid md:grid-cols-2 gap-8">

          {/* LEFT */}
          <div className="space-y-6">

            <div className="flex items-start gap-3">
              <MapPin className="text-[#3E103F]" />
              <p className="text-gray-600 text-sm">
                Vaishali, Ghaziabad<br />
                Uttar Pradesh, India
              </p>
            </div>

            <div className="flex items-start gap-3">
              <Mail className="text-[#3E103F]" />
              <a
                href="mailto:Get@resoneraaipvtltd.in"
                className="text-gray-600 text-sm"
              >
                Get@resoneraaipvtltd.in
              </a>
            </div>

            <p className="text-gray-500 text-sm">
              We usually reply within a day.
            </p>

          </div>

          {/* RIGHT FORM */}
          <form onSubmit={handleSubmit} className="space-y-4 bg-white p-6 rounded-2xl border">

            <input
              required
              type="text"
              placeholder="Your Name"
              className="w-full px-4 py-3 rounded-lg border outline-none"
            />

            <input
              required
              type="email"
              placeholder="Email"
              className="w-full px-4 py-3 rounded-lg border outline-none"
            />

            <textarea
              required
              rows="4"
              placeholder="Tell us about your idea..."
              className="w-full px-4 py-3 rounded-lg border outline-none"
            />

            <button
              type="submit"
              className="w-full bg-[#3E103F] text-white py-3 rounded-full font-semibold flex items-center justify-center gap-2"
            >
              {sent ? (
                <>
                  <CheckCircle2 size={18} /> Sent
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

      {/* SIMPLE CTA */}
      <div className="py-16 text-center">
        <h2 className="text-xl font-semibold text-[#3E103F] mb-3">
          Prefer email?
        </h2>
        <a
          href="mailto:Get@resoneraaipvtltd.in"
          className="text-[#3E103F] underline"
        >
          Get@resoneraaipvtltd.in
        </a>
      </div>

    </div>
  );
}

export default ReachUs;