import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import {
  ArrowRight,
  Puzzle,
  Scale,
  Database,
  AlertTriangle,
  Layers,
  Workflow,
  BarChart3,
  Lock
} from 'lucide-react'

function Solutions() {
  const challenges = [
    {
      icon: Puzzle,
      title: 'Fragmented Systems',
      problem:
        'Different departments using disconnected tools create information silos and manual workarounds.',
      approach:
        'We are designing integration frameworks that will create seamless connections between existing systems, allowing data to flow naturally across your organization.'
    },
    {
      icon: Scale,
      title: 'Compliance Complexity',
      problem:
        'Regulatory requirements change frequently, and maintaining compliance across systems demands constant attention.',
      approach:
        'Our solutions will include built-in compliance monitoring capabilities, designed to help businesses stay ahead of regulatory requirements rather than reacting to them.'
    },
    {
      icon: Database,
      title: 'Data Accessibility',
      problem:
        'Critical business data trapped in legacy systems or scattered across platforms makes informed decision-making difficult.',
      approach:
        'We are building tools that will surface relevant information where and when it is needed, transforming raw data into accessible insights.'
    },
    {
      icon: AlertTriangle,
      title: 'Security Concerns',
      problem:
        'As systems multiply, so do potential vulnerabilities-and the complexity of monitoring them all.',
      approach:
        'Security will be woven into every solution from the start, with visibility tools designed to help identify and address concerns proactively.'
    }
  ]

  const solutionAreas = [
    {
      icon: Layers,
      title: 'System Integration',
      description:
        'Connecting your existing tools and platforms into a cohesive ecosystem that works together rather than in isolation.'
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description:
        'Identifying repetitive workflows and building intelligent automation that will free your team to focus on higher-value work.'
    },
    {
      icon: BarChart3,
      title: 'Business Intelligence',
      description:
        'Creating dashboards and reporting tools that will make your data accessible and actionable for decision-makers.'
    },
    {
      icon: Lock,
      title: 'Security Architecture',
      description:
        'Designing security frameworks that will protect your systems while maintaining the usability your team needs.'
    }
  ]

  return (
    <>
      <Hero
        badge="Our Approach"
        title="Solving real problems, not creating new ones"
        description="We're focused on understanding the challenges businesses actually face-and building solutions designed specifically to address them."
      />

      {/* Challenges */}
      <Section
        subtitle="Understanding Challenges"
        title="The Problems We're Addressing"
        description="Before building solutions, we study the obstacles that genuinely hold businesses back."
      >
        <div className="space-y-8">
          {challenges.map((item, index) => (
            <div
              key={index}
              className="grid lg:grid-cols-2 gap-8 p-8 rounded-3xl bg-slate-900 hover:bg-slate-800 hover:shadow-xl hover:shadow-gray-200/50 border border-transparent hover:border-slate-700 transition-all duration-300"
            >
              <div>
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 rounded-xl bg-red-100 flex items-center justify-center">
                    <item.icon className="w-6 h-6 text-red-600" />
                  </div>
                  <h3 className="font-display font-semibold text-xl text-white">
                    {item.title}
                  </h3>
                </div>

                <p className="text-slate-300 leading-relaxed">
                  <span className="font-medium text-slate-200">
                    The Challenge:{' '}
                  </span>
                  {item.problem}
                </p>
              </div>

              <div className="lg:border-l lg:border-gray-200 lg:pl-8">
                <p className="text-slate-300 leading-relaxed">
                  <span className="font-medium text-primary-700">
                    Our Approach:{' '}
                  </span>
                  {item.approach}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* Solution Areas */}
      <Section
        className="bg-gradient-to-br from-gray-900 via-gray-900 to-primary-950"
        subtitle="Focus Areas"
        title="Where We're Concentrating Our Efforts"
        description="We are developing expertise in areas where we believe we can make the most meaningful impact."
        dark
      >
        <div className="grid md:grid-cols-2 gap-8">
          {solutionAreas.map((area, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-800/5 border border-white/10 hover:bg-slate-800/10 hover:border-white/20 transition-all duration-300 group"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-accent-500 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <area.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-display font-semibold text-xl text-white mb-3">
                {area.title}
              </h3>

              <p className="text-gray-400 leading-relaxed">
                {area.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Process */}
      <Section
        subtitle="How We Work"
        title="A Process Built on Understanding"
        description="We believe good solutions start with genuine understanding of the problem."
      >
        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-primary-200 via-primary-400 to-primary-200 hidden md:block" />

            <div className="space-y-12">
              {[
                {
                  step: '01',
                  title: 'Listen First',
                  description:
                    'We will begin every engagement by understanding your specific challenges, workflows, and goals-not by pitching pre-packaged solutions.'
                },
                {
                  step: '02',
                  title: 'Design Thoughtfully',
                  description:
                    'Based on what we learn, we will design solutions tailored to your actual needs.'
                },
                {
                  step: '03',
                  title: 'Build Incrementally',
                  description:
                    'We will focus on delivering value in manageable phases with room for feedback.'
                },
                {
                  step: '04',
                  title: 'Support Genuinely',
                  description:
                    'We remain invested in ensuring solutions continue to serve your evolving needs.'
                }
              ].map((item, index) => (
                <div key={index} className="relative flex gap-8 items-start">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center shadow-lg">
                    <span className="font-display font-bold text-white">
                      {item.step}
                    </span>
                  </div>

                  <div className="pt-2">
                    <h3 className="font-display font-semibold text-xl text-white mb-2">
                      {item.title}
                    </h3>
                    <p className="text-slate-300 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-primary-700">
        <div className="text-center">
          <h2 className="font-display font-bold text-3xl text-white mb-4">
            Have a Challenge Worth Solving?
          </h2>
          <p className="text-xl text-primary-100 mb-8 max-w-2xl mx-auto">
            We're eager to learn about the technology problems your business faces.
          </p>

          <Link
            to="/reach-us"
            className="inline-flex items-center gap-2 px-8 py-4 bg-slate-800 text-primary-700 font-semibold rounded-xl hover:bg-primary-50 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-0.5 group"
          >
            Start the Conversation
            <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
          </Link>
        </div>
      </Section>
    </>
  )
}

export default Solutions