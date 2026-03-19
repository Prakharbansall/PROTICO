import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import {
  ArrowRight,
  Puzzle,
  Scale,
  Database,
  Lock,
  Layers,
  Workflow,
  BarChart3
} from 'lucide-react'

function Solutions() {

  const problems = [
    {
      icon: Puzzle,
      title: 'Disconnected data',
      text: 'Teams work in silos → decisions are incomplete.'
    },
    {
      icon: Scale,
      title: 'Manual workflows',
      text: 'Repeated tasks slow teams and increase errors.'
    },
    {
      icon: Database,
      title: 'Unclear metrics',
      text: 'Reports take too long → no real-time visibility.'
    },
    {
      icon: Lock,
      title: 'System complexity',
      text: 'Access, updates, and control become difficult.'
    }
  ]

  const solutions = [
    {
      icon: Layers,
      title: 'System integration',
      description: 'Unify tools into one connected workflow.'
    },
    {
      icon: Workflow,
      title: 'Workflow automation',
      description: 'Reduce manual work and speed execution.'
    },
    {
      icon: BarChart3,
      title: 'Operational visibility',
      description: 'Dashboards focused on action, not noise.'
    },
    {
      icon: Lock,
      title: 'Practical security',
      description: 'Secure systems without blocking teams.'
    }
  ]

  const process = [
    {
      step: '01',
      title: 'Understand',
      description: 'Map real workflows and bottlenecks.'
    },
    {
      step: '02',
      title: 'Build',
      description: 'Deliver a working solution quickly.'
    },
    {
      step: '03',
      title: 'Improve',
      description: 'Refine continuously with your team.'
    }
  ]

  return (
    <>
      {/* HERO */}
      <Hero
        badge="Solutions"
        title="Fix operational bottlenecks with practical systems"
        description="We replace manual coordination, scattered tools, and unclear metrics with simple, connected workflows."
        primaryCta={{ label: 'Talk to us', to: '/reach-us' }}
        backgroundImage="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
      />

      {/* PROBLEMS */}
      <Section
        subtitle="Problems"
        title="What slows teams down"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {problems.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-1 transition-all"
            >
              {/* Glow */}
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-red-400/10 blur-2xl transition" />

              <div className="relative">
                <div className="mb-4 w-12 h-12 rounded-xl bg-red-400/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-red-400" />
                </div>

                <h3 className="text-white font-semibold mb-2">
                  {item.title}
                </h3>

                <p className="text-surface-300 text-sm">
                  {item.text}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* SOLUTIONS */}
      <Section
        subtitle="Solutions"
        title="How we improve your operations"
        className="bg-surface-900"
      >
        <div className="grid md:grid-cols-2 gap-6">
          {solutions.map((item, i) => (
            <div
              key={i}
              className="group relative p-6 rounded-3xl bg-white/5 border border-white/10 backdrop-blur-xl hover:-translate-y-1 hover:scale-[1.02] transition-all"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 bg-brand-400/10 blur-2xl transition" />

              <div className="relative">
                <div className="mb-4 w-12 h-12 rounded-xl bg-brand-400/20 flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-brand-400" />
                </div>

                <h3 className="text-white font-semibold mb-2">
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
      <Section
        subtitle="Process"
        title="Simple execution"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {process.map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-surface-900 border border-surface-700 hover:border-brand-400 hover:scale-[1.03] transition"
            >
              <div className="text-brand-400 font-bold mb-2">
                {item.step}
              </div>

              <h3 className="text-white font-semibold mb-2">
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
          Ready to simplify your operations?
        </h2>

        <p className="text-surface-300 max-w-xl mx-auto mb-8">
          If your team is stuck with manual work or disconnected tools, we’ll help you fix it.
        </p>

        <Link
          to="/reach-us"
          className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-brand-400 to-brand-600 text-white font-semibold shadow-lg hover:scale-[1.05] active:scale-[0.98] transition-all"
        >
          Book a short call
        </Link>
      </Section>
    </>
  )
}

export default Solutions