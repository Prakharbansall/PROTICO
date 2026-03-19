import Hero from '../components/Hero'
import Section from '../components/Section'
import {
  Terminal,
  PieChart,
  Globe,
  CheckCircle2,
  ClipboardList,
  Users,
  Rocket
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Perspectives() {

  const principles = [
    {
      icon: Terminal,
      title: 'Build for people',
      description: 'Design around real daily tasks - not theoretical workflows.'
    },
    {
      icon: PieChart,
      title: 'Measure decisions',
      description: 'Improve systems based on how teams actually decide.'
    },
    {
      icon: Globe,
      title: 'Connect systems',
      description: 'Integrate tools into one smooth workflow.'
    }
  ]

  return (
    <>
      {/* HERO */}
      <Hero
        badge="What guides us"
        title="A practical perspective on business technology"
        description="We focus on small improvements that make teams faster and reduce friction."
        primaryCta={{ label: 'Talk with us', to: '/reach-us' }}
        backgroundImage="https://images.unsplash.com/photo-1498050108023-c5249f4df085"
      />

      {/* PRINCIPLES */}
      <Section
        subtitle="Why we do this"
        title="Technology should support how teams actually work"
        className="bg-surface-900"
      >
        <div className="grid md:grid-cols-3 gap-6">
          {principles.map((item, i) => (
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

      {/* CASE STUDIES */}
      <Section
        subtitle="Real outcomes"
        title="What teams actually experience"
      >
        <div className="grid lg:grid-cols-2 gap-6">

          {/* CARD 1 */}
          <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition">

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d"
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                alt="Dashboard"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl text-white font-semibold mb-2">
                Operations dashboard
              </h3>

              <p className="text-surface-300 mb-4">
                Replaced 5 reports and saved 12+ hours weekly.
              </p>

              <ul className="space-y-2 text-sm text-surface-300">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1" />
                  Automated status updates
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1" />
                  One-click summaries
                </li>
              </ul>
            </div>
          </div>

          {/* CARD 2 */}
          <div className="group rounded-3xl overflow-hidden border border-white/10 bg-white/5 backdrop-blur-xl hover:scale-[1.02] transition">

            <div className="overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4"
                className="h-64 w-full object-cover group-hover:scale-105 transition duration-500"
                alt="Workflow"
              />
            </div>

            <div className="p-6">
              <h3 className="text-xl text-white font-semibold mb-2">
                Finance workflow
              </h3>

              <p className="text-surface-300 mb-4">
                Reduced closing time from 8 days → 4 days.
              </p>

              <ul className="space-y-2 text-sm text-surface-300">
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1" />
                  Task-based approvals
                </li>
                <li className="flex gap-2">
                  <CheckCircle2 className="w-4 h-4 text-brand-400 mt-1" />
                  Built-in audit logs
                </li>
              </ul>
            </div>
          </div>

        </div>
      </Section>

      {/* PROCESS */}
      <Section
        subtitle="How we work"
        title="Simple, structured, effective"
        className="bg-surface-900"
      >
        <div className="grid md:grid-cols-3 gap-6">

          {[
            {
              icon: ClipboardList,
              step: 'Plan',
              title: 'Understand real problems',
              desc: 'Map workflows and bottlenecks with your team.'
            },
            {
              icon: Rocket,
              step: 'Build',
              title: 'Deliver fast',
              desc: 'Ship usable solutions quickly and iterate.'
            },
            {
              icon: Users,
              step: 'Improve',
              title: 'Optimize continuously',
              desc: 'Refine systems as your operations evolve.'
            }
          ].map((item, i) => (
            <div
              key={i}
              className="rounded-3xl p-6 bg-surface-800 border border-surface-700 hover:border-brand-400 hover:scale-[1.03] transition"
            >
              <div className="mb-3 flex items-center gap-2 text-brand-400 text-sm uppercase tracking-wider">
                <item.icon className="w-5 h-5" />
                {item.step}
              </div>

              <h3 className="text-white text-lg font-semibold mb-2">
                {item.title}
              </h3>

              <p className="text-surface-300 text-sm">
                {item.desc}
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
          Talk with us
        </Link>
      </Section>
      
    </>
  )
}

export default Perspectives 