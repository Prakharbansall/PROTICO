import { Mail, Phone, MapPin, Send } from 'lucide-react'
import Hero from '../components/Hero'
import Section from '../components/Section'

function ReachUs() {
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
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-sm space-y-6">

            <div className="flex items-start gap-4">
              <MapPin className="w-6 h-6 text-primary-600 mt-1" />
              <div>
                <p className="font-semibold text-white">Office</p>
                <p className="text-slate-300 text-sm">
                  Office No 130, Vaishali,<br />
                  Ghaziabad, Uttar Pradesh
                </p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Phone className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-white">Phone</p>
                <p className="text-slate-300 text-sm">+91 99999 99999</p>
              </div>
            </div>

            <div className="flex items-center gap-4">
              <Mail className="w-6 h-6 text-primary-600" />
              <div>
                <p className="font-semibold text-white">Email</p>
                <p className="text-slate-300 text-sm">
                  contact@proticotechnology.com
                </p>
              </div>
            </div>

          </div>

          {/* Form */}
          <div className="p-8 rounded-2xl bg-slate-800 border border-slate-700 shadow-sm">
            <form className="space-y-4">

              <input
                type="text"
                placeholder="Full Name"
                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />

              <input
                type="email"
                placeholder="Email"
                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              />

              <textarea
                rows="4"
                placeholder="Your message..."
                className="w-full border border-gray-200 rounded-xl px-4 py-2 focus:outline-none focus:ring-2 focus:ring-primary-500"
              ></textarea>

              <button
                type="button"
                className="w-full flex items-center justify-center gap-2 bg-primary-600 text-white py-2.5 rounded-xl hover:bg-primary-700 transition"
              >
                <Send className="w-4 h-4" />
                Send Message
              </button>

            </form>
          </div>

        </div>
      </Section>
    </>
  )
}

export default ReachUs