import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import {
  ArrowRight,
  Layers,
  Shield,
  Zap,
  Database,
  Cloud,
  Lightbulb,
  Target,
  Rocket
} from 'lucide-react'

function Home() {

  const outcomes = [
    {
      icon: Layers,
      title: '40% faster operations',
      description: 'Teams save hours daily with connected workflows.',
    },
    {
      icon: Database,
      title: 'Clear decision data',
      description: 'All insights in one place → faster decisions.',
    },
    {
      icon: Shield,
      title: 'Low-risk releases',
      description: 'Ship in small safe increments with confidence.',
    },
  ]

  const practiceAreas = [
    {
      icon: Cloud,
      title: 'Systems Integration',
      description: 'Unify tools into one workflow.',
    },
    {
      icon: Zap,
      title: 'Automation',
      description: 'Remove repetitive manual work.',
    },
    {
      icon: Lightbulb,
      title: 'Reporting',
      description: 'Dashboards teams actually use.',
    },
  ]

  return (
    <>
      {/* HERO */}
      <Hero
        badge="Operational software"
        title="Build systems your team actually uses"
        subtitle="Practical systems for growing businesses"
        description="We design workflows, integrations, and dashboards that fit your real operations."
        primaryCta={{ label: 'Book a call', to: '/reach-us' }}
        secondaryCta={{ label: 'View services', to: '/solutions' }}
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      />

      {/* PRACTICE AREAS */}
      <Section
        subtitle="What we do"
        title="Technology that improves daily work"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {practiceAreas.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-1 hover:scale-[1.02] transition-all"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-brand-400/10 blur-2xl transition" />

              <div className="relative">
                <div className="mb-4 w-12 h-12 rounded-xl bg-brand-400/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-400" />
                </div>

                <h3 className="text-white text-lg font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-surface-300 text-sm">
                  {item.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* PROCESS */}
      <Section subtitle="Process" title="Simple execution, real results">
        <div className="grid md:grid-cols-3 gap-6">
          {[
            {
              title: 'Discover',
              body: 'Understand workflows and identify real problems.',
              icon: Rocket,
            },
            {
              title: 'Build',
              body: 'Deliver usable solutions in small increments.',
              icon: Target,
            },
            {
              title: 'Optimize',
              body: 'Improve continuously as your team grows.',
              icon: Zap,
            },
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-surface-900 border border-surface-700 hover:border-brand-400 hover:scale-[1.03] transition-all"
            >
              <div className="mb-4 w-12 h-12 rounded-xl bg-brand-400/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-brand-400" />
              </div>

              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-surface-300 text-sm">
                {item.body}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* OUTCOMES */}
      <Section
        subtitle="Outcomes"
        title="Measured improvements"
        className="bg-surface-900"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {outcomes.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-1 transition"
            >
              <div className="mb-4 w-12 h-12 rounded-xl bg-brand-400/20 flex items-center justify-center">
                <item.icon className="w-6 h-6 text-brand-400" />
              </div>

              <h3 className="text-white text-xl font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-surface-300 text-sm">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* CTA */}
      <Section className="relative text-center overflow-hidden">

        {/* Glow */}
        <div className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-brand-400/20 blur-3xl pointer-events-none" />

        <h2 className="text-3xl md:text-4xl font-semibold text-white mb-4">
          Ready to improve your operations?
        </h2>

        <p className="text-surface-300 max-w-xl mx-auto mb-8">
          Let’s design a system tailored to your team - simple, fast, effective.
        </p>

        <Link
          to="/reach-us"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 text-white font-semibold shadow-lg hover:scale-[1.05] active:scale-[0.98] transition-all"
        >
          Schedule a call
          <ArrowRight className="w-4 h-4" />
        </Link>
      </Section>
    </>
  )
}

export default Home