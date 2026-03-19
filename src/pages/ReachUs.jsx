import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import Hero from "../components/Hero";
import Section from "../components/Section";

function ReachUs() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [sent, setSent] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) return;

    setSent(true);

    // reset form
    setFormData({
      name: "",
      email: "",
      message: "",
    });

    setTimeout(() => setSent(false), 2000);
  };

  return (
    <>
      <Hero
        badge="Let’s Talk"
        title="Tell Us About Your Project"
        description="We’re building early-stage solutions and would love to understand your requirements."
      />

      <Section
        subtitle="Contact"
        title="Reach Out"
        description="Send us a message and we’ll get back to you."
      >
        <div className="grid lg:grid-cols-2 gap-10">

          {/* Contact Info */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg space-y-6">

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary-500 mt-1" />
              <div>
                <p className="font-semibold text-white">Office</p>
                <p className="text-slate-400 text-sm leading-relaxed">
                  Office No 130, Vaishali,<br />
                  Ghaziabad, Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary-500" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-slate-400 text-sm">+91 99999 99999</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary-500" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-slate-400 text-sm">
                  contact@proticotechnology.com
                </p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="p-8 rounded-2xl bg-slate-900 border border-slate-800 shadow-lg">
            <form onSubmit={handleSubmit} className="space-y-4">

              {/* Name */}
              <input
                type="text"
                name="name"
                placeholder="Full Name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-slate-500"
              />

              {/* Email */}
              <input
                type="email"
                name="email"
                placeholder="Email Address"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-slate-500"
              />

              {/* Message */}
              <textarea
                name="message"
                rows="4"
                placeholder="Your message..."
                value={formData.message}
                onChange={handleChange}
                required
                className="w-full bg-slate-800 border border-slate-700 text-white rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500 placeholder-slate-500"
              ></textarea>

              {/* Button */}
              <button
                type="submit"
                disabled={sent}
                className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-xl font-medium transition ${
                  sent
                    ? "bg-green-600 cursor-not-allowed"
                    : "bg-primary-600 hover:bg-primary-700"
                }`}
              >
                <Send className="w-4 h-4" />
                {sent ? "Message Sent Successfully" : "Send Message"}
              </button>

              {/* Success text */}
              {sent && (
                <p className="text-green-400 text-xs text-center">
                  Thanks! We’ll get back to you soon.
                </p>
              )}

            </form>
          </div>

        </div>
      </Section>
    </>
  );
}

export default ReachUs;
