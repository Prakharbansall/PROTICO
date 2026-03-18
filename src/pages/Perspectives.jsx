import Hero from '../components/Hero'
import Section from '../components/Section'
import { Terminal, PieChart, Globe } from 'lucide-react'

function Perspectives() {
  const principles = [
    {
      icon: Terminal,
      title: 'Build for People',
      description:
        'We design tools with real users in mind. Simplicity and usability are always prioritized.'
    },
    {
      icon:  PieChart,
      title: 'Measure What Matters',
      description:
        'We focus on outcomes, not outputs-ensuring every solution delivers real business value.'
    },
    {
      icon: Globe,
      title: 'Think in Systems',
      description:
        'Technology should fit seamlessly into your workflows, teams, and data ecosystem.'
    }
  ]

  return (
    <>
      <Hero
        badge="Our Perspective"
        title="A Better Way to Build Technology"
        description="We believe great technology is simple, reliable, and built with purpose-not complexity."
      />

      {/* Principles */}
      <Section
        subtitle="Core Thinking"
        title="How We Approach Technology"
        description="Our perspective is shaped by practical experience and a focus on clarity."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:shadow-lg transition-all"
            >
              <div className="w-12 h-12 rounded-xl bg-primary-600 flex items-center justify-center text-white mb-4">
                <item.icon className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">
                {item.title}
              </h3>
              <p className="text-slate-300">{item.description}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* Content */}
      <Section
        className="bg-slate-900"
        subtitle="Our View"
        title="Why This Matters"
      >
        <div className="max-w-4xl mx-auto space-y-6 text-slate-200 text-lg leading-relaxed">
          <p>
            Technology today is often overcomplicated. Businesses are forced to
            adapt to tools instead of tools adapting to them.
          </p>

          <p>
            We believe the opposite should be true. Technology should feel
            intuitive, support decision-making, and reduce friction-not create it.
          </p>

          <p>
            Our perspective is simple: build systems that people actually want to
            use, and that continue to deliver value over time.
          </p>
        </div>
      </Section>

      {/* Goals */}
      <Section
        subtitle="Our Goal"
        title="What Success Looks Like"
      >
        <div className="grid md:grid-cols-3 gap-6">

          <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <h3 className="font-semibold text-lg mb-2">Reliable Systems</h3>
            <p className="text-slate-300">
              Technology that works consistently without constant intervention.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <h3 className="font-semibold text-lg mb-2">Clear Workflows</h3>
            <p className="text-slate-300">
              Systems that simplify how teams operate and collaborate.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-slate-800 border border-slate-700">
            <h3 className="font-semibold text-lg mb-2">Long-Term Value</h3>
            <p className="text-slate-300">
              Solutions designed to grow with your business, not limit it.
            </p>
          </div>

        </div>
      </Section>
    </>
  )
}

export default Perspectives