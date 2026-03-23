import { useState } from 'react'
import {
  Mail,
  MapPin,
  Send,
  Loader2,
  CheckCircle2,
  User,
  MessageSquare,
  Globe,
  Briefcase,
  ShieldCheck,
  ArrowRight,
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
    }, 1500)
  }

  return (
    <div className="bg-[#FAF9FB] min-h-screen">
      {/* HERO - Rebranded as an Inquiry Center */}
      <Hero
        badge="Inquiry Center"
        subtitle="Connect with our administration"
        title={<span>Initiate <span className="text-[#D4AF37]">Dialogue.</span></span>}
        description="For formal inquiries regarding our digital architecture, professional services, or collaborative research, please utilize our secure communication portal."
        bgImage="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=2000"
      />

      {/* CONTACT SECTION */}
      <Section
        subtitle="Communication Hub"
        title="Formal Correspondence"
      >
        <div className="grid lg:grid-cols-5 gap-12 items-start">

          {/* LEFT: Institutional Details (2/5 columns) */}
          <div className="lg:col-span-2 space-y-8">
            <div className="rounded-[2.5rem] bg-[#3E103F] p-10 text-white shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-[#D4AF37]/10 rounded-full -mr-16 -mt-16" />
              
              <h3 className="text-2xl font-black mb-8 tracking-tighter text-[#D4AF37]">
                Global Headquarters
              </h3>

              <div className="space-y-8">
                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-white/10 text-[#D4AF37]">
                    <MapPin className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-none mb-1">NCR Region</p>
                    <p className="text-[#E2D1F9]/70 text-sm">Vaishali, Ghaziabad, UP, India</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-white/10 text-[#D4AF37]">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-none mb-1">Administration</p>
                    <p className="text-[#E2D1F9]/70 text-sm">contact@proticotechnology.com</p>
                  </div>
                </div>

                <div className="flex items-start gap-5">
                  <div className="p-3 rounded-2xl bg-white/10 text-[#D4AF37]">
                    <Globe className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-bold text-lg leading-none mb-1">Operating Hours</p>
                    <p className="text-[#E2D1F9]/70 text-sm">Monday — Friday, 09:00 - 18:00 IST</p>
                  </div>
                </div>
              </div>

              <div className="mt-12 pt-8 border-t border-white/10">
                <p className="text-xs uppercase tracking-[0.3em] font-black text-[#D4AF37]">
                  Protico Technology Pvt. Ltd.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT: Professional Form (3/5 columns) */}
          <div className="lg:col-span-3 rounded-[3rem] border border-[#E5D6EB] bg-white p-10 shadow-xl">
            <div className="mb-10">
              <h3 className="text-3xl font-black text-[#3E103F] tracking-tighter mb-3">
                Secure Inquiry Portal
              </h3>
              <p className="text-gray-500 font-medium italic">
                All submissions are encrypted and processed by our administrative team.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest font-black text-[#3E103F] mb-2 block">Full Name</label>
                  <div className="relative">
                    <input
                      required
                      type="text"
                      placeholder="e.g. John Doe"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F8F4F9] border border-transparent focus:border-[#3E103F] focus:bg-white outline-none transition-all font-medium"
                    />
                    <User className="absolute left-4 top-4 text-[#3E103F]/40" size={20} />
                  </div>
                </div>

                <div className="relative">
                  <label className="text-[10px] uppercase tracking-widest font-black text-[#3E103F] mb-2 block">Corporate Email</label>
                  <div className="relative">
                    <input
                      required
                      type="email"
                      placeholder="name@organization.com"
                      className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F8F4F9] border border-transparent focus:border-[#3E103F] focus:bg-white outline-none transition-all font-medium"
                    />
                    <Mail className="absolute left-4 top-4 text-[#3E103F]/40" size={20} />
                  </div>
                </div>
              </div>

              <div className="relative">
                <label className="text-[10px] uppercase tracking-widest font-black text-[#3E103F] mb-2 block">Inquiry Details</label>
                <div className="relative">
                  <textarea
                    required
                    rows="5"
                    placeholder="Provide a detailed overview of your request..."
                    className="w-full pl-12 pr-4 py-4 rounded-2xl bg-[#F8F4F9] border border-transparent focus:border-[#3E103F] focus:bg-white outline-none resize-none transition-all font-medium"
                  />
                  <MessageSquare className="absolute left-4 top-4 text-[#3E103F]/40" size={20} />
                </div>
              </div>

              <button
                type="submit"
                disabled={loading || sent}
                className="w-full flex items-center justify-center gap-3 rounded-full bg-[#3E103F] px-8 py-5 text-white font-black uppercase tracking-[0.2em] text-sm hover:bg-[#D4AF37] hover:text-[#3E103F] transition-all transform hover:-translate-y-1 shadow-2xl disabled:bg-gray-200 disabled:text-gray-400"
              >
                {loading ? (
                  <Loader2 className="animate-spin w-5 h-5" />
                ) : sent ? (
                  <CheckCircle2 className="w-5 h-5" />
                ) : (
                  <Send className="w-5 h-5" />
                )}
                {loading ? "Processing..." : sent ? "Inquiry Transmitted" : "Transmit Inquiry"}
              </button>
            </form>

            {sent && (
              <div className="mt-8 animate-in fade-in slide-in-from-top-4 duration-500">
                <div className="flex items-center gap-4 text-sm font-bold text-[#3E103F] bg-[#D4AF37]/20 p-6 rounded-3xl border border-[#D4AF37]/30">
                  <ShieldCheck className="w-8 h-8 text-[#3E103F]" />
                  <p>Your correspondence has been logged into our system. An administrative officer will review and respond within 24–48 hours.</p>
                </div>
              </div>
            )}
          </div>
        </div>
      </Section>

      {/* PROTOCOL STEPS */}
      <Section
        subtitle="Protocol"
        title="Institutional Response Flow"
        variant="dark"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { title: "Verification", desc: "Our automated system logs and vets the inquiry for institutional relevance.", icon: ShieldCheck },
            { title: "Strategic Review", desc: "The request is routed to the appropriate vertical for expert evaluation.", icon: Briefcase },
            { title: "Dialogue Initiation", desc: "A formal response is issued with proposed next steps or documentation.", icon: Globe }
          ].map((step, i) => (
            <div
              key={i}
              className="p-10 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all text-center"
            >
              <div className="w-16 h-16 rounded-2xl bg-[#D4AF37] flex items-center justify-center mx-auto mb-6 text-[#3E103F]">
                <step.icon className="w-8 h-8" />
              </div>
              <p className="text-[#D4AF37] font-black text-xs mb-3 tracking-[0.3em]">PHASE 0{i + 1}</p>
              <h3 className="text-white text-xl font-bold mb-4">{step.title}</h3>
              <p className="text-[#E2D1F9]/70 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </Section>
    </div>
  )
}

export default ReachUs