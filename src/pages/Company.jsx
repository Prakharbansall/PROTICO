import Hero from '../components/Hero'
import Section from '../components/Section'
import { Link } from 'react-router-dom'
import {
  Target,
  Compass,
  Users,
  Calendar,
  MapPin
} from 'lucide-react'

function Company() {

  const values = [
    {
      icon: Compass,
      title: 'Clarity Over Complexity',
      description:
        'We simplify tools and workflows so your team spends less time checking status and more time taking action.',
    },
    {
      icon: Target,
      title: 'Practical Outcomes',
      description:
        'Measured by time saved, not features built.',
    },
    {
      icon: Users,
      title: 'Trusted Relationships',
      description:
        'Transparent communication and real commitments.',
    },
  ]

  const companies = [
    {
      name: 'Manufacturing firm',
      impact: 'Reduced coordination delays by 30%'
    },
    {
      name: 'Services team',
      impact: 'Lowered admin work by 20%'
    },
    {
      name: 'Distributor',
      impact: 'Cut reconciliation effort by 50%'
    }
  ]

  return (
    <>
      {/* HERO */}
      <Hero
        badge="About Protico"
        title="We build systems teams actually use"
        description="Simple, reliable tools that improve daily operations - not just dashboards."
        primaryCta={{ label: 'Talk with us', to: '/reach-us' }}
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1600&q=80"
      />

      {/* WHO WE ARE */}
      <Section
        subtitle="Who we are"
        title="Focused on solving real operational problems"
      >
        <div className="grid md:grid-cols-2 gap-10 items-center">

          {/* TEXT */}
          <div className="space-y-5">
            <p className="text-surface-300 leading-relaxed">
              Most business software fails because it’s too complex or disconnected from how teams actually work.
            </p>

            <p className="text-surface-300 leading-relaxed">
              We design systems that fit into daily workflows - so teams adopt them naturally.
            </p>

            <div className="flex gap-4 pt-4">
              <div className="px-4 py-2 rounded-xl bg-brand-400/10 border border-brand-400/20 text-brand-300 text-sm">
                Fast execution
              </div>
              <div className="px-4 py-2 rounded-xl bg-brand-400/10 border border-brand-400/20 text-brand-300 text-sm">
                Practical results
              </div>
            </div>
          </div>

          {/* IMAGE */}
          <div className="relative rounded-3xl overflow-hidden border border-white/10 group">
            <img
              src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
              className="w-full h-[420px] object-cover group-hover:scale-105 transition duration-500"
              alt="Team working"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
          </div>

        </div>
      </Section>

      {/* VALUES */}
      <Section
        className="bg-surface-900"
        subtitle="Values"
        title="How we think and build"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {values.map((value, i) => (
            <div
              key={i}
              className="group relative rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-1 hover:scale-[1.02] transition-all"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-brand-400/10 blur-2xl transition" />

              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-brand-400/20 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-brand-400" />
                </div>

                <h3 className="text-white font-semibold mb-2">
                  {value.title}
                </h3>

                <p className="text-surface-300 text-sm">
                  {value.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* RESULTS */}
      <Section
        subtitle="Results"
        title="What we’ve improved"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {companies.map((c, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 border border-surface-700 bg-surface-800 hover:border-brand-400 hover:scale-[1.03] transition"
            >
              <p className="text-xs text-brand-400 mb-2 uppercase tracking-wider">
                {c.name}
              </p>

              <h3 className="text-white text-xl font-semibold leading-snug">
                {c.impact}
              </h3>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative text-center overflow-hidden">

        {/* Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-400/20 blur-3xl pointer-events-none" />

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to simplify your operations?
        </h2>

        <p className="text-surface-300 max-w-xl mx-auto mb-8">
          If your team is stuck with manual work or disconnected tools, we’ll help you fix it.
        </p>

        <Link
          to="/reach-us"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 text-white font-semibold shadow-lg hover:scale-[1.05] active:scale-[0.98] transition-all"
        >
          Talk with us
        </Link>
      </Section>

      {/* INFO CARDS */}
      <Section className="bg-surface-900">
        <div className="grid sm:grid-cols-2 gap-6">

          <div className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-3">
              <Calendar className="text-brand-400" />
              <h3 className="text-white font-semibold">Founded</h3>
            </div>
            <p className="text-surface-300">March 2026</p>
          </div>

          <div className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl">
            <div className="flex items-center gap-3 mb-3">
              <MapPin className="text-brand-400" />
              <h3 className="text-white font-semibold">Office</h3>
            </div>
            <p className="text-surface-300">
              Vaishali, Ghaziabad, India
            </p>
          </div>

        </div>
      </Section>
    </>
  )
}

export default Company