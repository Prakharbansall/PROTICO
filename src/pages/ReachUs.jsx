import { useState } from 'react'
import {
  Mail,
  Phone,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  User,
  Building2,
  MessageSquare
} from 'lucide-react'

import Hero from '../components/Hero'
import Section from '../components/Section'

function ReachUs() {
  const [sent, setSent] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    setTimeout(() => {
      setLoading(false)
      setSent(true)
    }, 1200)
  }

  return (
    <>
      {/* HERO */}
      <Hero
        badge="Let’s connect"
        title="Tell us your challenge. We’ll suggest a real solution."
        description="No fluff. Just one practical improvement your team can implement in the next 30 days."
        backgroundImage="https://images.unsplash.com/photo-1551434678-e076c223a692"
      />

      {/* CONTACT */}
      <Section
        subtitle="Contact"
        title="Start a conversation"
        description="We typically respond within one business day."
      >
        <div className="grid lg:grid-cols-2 gap-10">

          {/* LEFT */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-6 overflow-hidden">

            <div className="absolute -top-24 -left-24 w-72 h-72 bg-brand-400/20 blur-3xl rounded-full" />

            <h3 className="text-white text-lg font-semibold mb-6">
              Contact details
            </h3>

            <div className="space-y-6 text-sm text-surface-300">

              {[{
                icon: Phone,
                text: "+91 99999 99999"
              },{
                icon: Mail,
                text: "contact@proticotechnology.com"
              },{
                icon: MapPin,
                text: "Vaishali, Ghaziabad, India"
              }].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <div className="p-2 rounded-lg bg-brand-400/10">
                    <item.icon className="w-5 h-5 text-brand-400" />
                  </div>
                  <span>{item.text}</span>
                </div>
              ))}

            </div>

            <div className="mt-6 p-4 rounded-xl bg-brand-400/10 border border-brand-400/20 text-xs text-brand-300">
              We solve real workflow problems -  not generic solutions.
            </div>
          </div>

          {/* FORM */}
          <div className="relative rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl p-8 overflow-hidden">

            <div className="absolute -top-24 -right-24 w-72 h-72 bg-brand-400/20 blur-3xl rounded-full" />

            <h3 className="text-2xl font-semibold text-white mb-2">
              Book a free consultation
            </h3>
            <p className="text-surface-400 text-sm mb-6">
              Takes less than 2 minutes
            </p>

            <form onSubmit={handleSubmit} className="space-y-6">

              {/* INPUT COMPONENT */}
              {[
                { icon: User, placeholder: "Full Name", type: "text" },
                { icon: Mail, placeholder: "Work Email", type: "email" },
                { icon: Building2, placeholder: "Company / Team", type: "text" }
              ].map((field, i) => (
                <div key={i} className="relative group">
                  <input
                    required
                    type={field.type}
                    placeholder=" "
                    className="peer w-full pl-10 pr-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-white focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 outline-none transition"
                  />
                  <label className="absolute left-10 top-3 text-surface-400 text-sm transition-all peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-400 bg-surface-900 px-1">
                    {field.placeholder}
                  </label>
                  <field.icon className="absolute left-3 top-3 text-surface-400 group-focus-within:text-brand-400" size={18} />
                </div>
              ))}

              {/* TEXTAREA */}
              <div className="relative group">
                <textarea
                  required
                  rows="4"
                  placeholder=" "
                  className="peer w-full pl-10 pr-4 py-3 rounded-xl bg-surface-900 border border-surface-700 text-white focus:border-brand-400 focus:ring-2 focus:ring-brand-400/30 outline-none transition resize-none"
                />
                <label className="absolute left-10 top-3 text-surface-400 text-sm transition-all peer-placeholder-shown:top-3 peer-focus:-top-2 peer-focus:text-xs peer-focus:text-brand-400 bg-surface-900 px-1">
                  Describe your challenge
                </label>
                <MessageSquare className="absolute left-3 top-3 text-surface-400 group-focus-within:text-brand-400" size={18} />
              </div>

              {/* BUTTON */}
              <button
                type="submit"
                disabled={loading}
                className="relative w-full flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 px-4 py-3 text-white font-semibold shadow-lg hover:scale-[1.03] active:scale-[0.97] transition-all"
              >
                <span className="absolute inset-0 rounded-xl bg-white/10 opacity-0 hover:opacity-100 transition" />

                {loading ? (
                  <Loader2 className="animate-spin w-4 h-4" />
                ) : (
                  <Send className="w-4 h-4" />
                )}

                {loading ? "Sending..." : "Get Recommendation"}
              </button>
            </form>

            {/* SUCCESS */}
            {sent && (
              <div className="mt-6 flex items-center gap-2 text-sm text-emerald-300 bg-emerald-500/10 border border-emerald-500/30 px-4 py-3 rounded-xl animate-fadeIn">
                <CheckCircle2 className="w-5 h-5" />
                Request submitted. We’ll contact you within 24 hours.
              </div>
            )}

            <p className="mt-4 text-xs text-surface-500 text-center">
              🔒 Your data is secure. No spam.
            </p>
          </div>
        </div>
      </Section>

      {/* STEPS */}
      <Section
        subtitle="Process"
        title="What happens next"
        className="bg-surface-900"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {[
            "We understand your workflow",
            "We suggest one improvement",
            "You decide next steps"
          ].map((step, i) => (
            <div
              key={i}
              className="group p-6 rounded-3xl border border-surface-700 bg-surface-800 hover:border-brand-400 hover:-translate-y-1 hover:scale-[1.02] transition-all"
            >
              <p className="text-brand-400 text-xs mb-2">Step {i + 1}</p>
              <h3 className="text-white font-medium">{step}</h3>
            </div>
          ))}
        </div>
      </Section>
    </>
  )
}

export default ReachUs