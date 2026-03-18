import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Card from '../components/Card'
import {
  ArrowRight,
  Layers,
  Shield,
  Zap,
  Database,
  Cloud,
  GitBranch,
  Lightbulb,
  Target,
  Rocket
} from 'lucide-react'

function Home() {
  const buildingItems = [
    {
      icon: Layers,
      title: 'Integrated Systems Architecture',
      description:
        'We are designing frameworks that will connect disparate business systems into cohesive, manageable platforms.'
    },
    {
      icon: Cloud,
      title: 'Cloud-Native Solutions',
      description:
        'Our approach will embrace modern cloud infrastructure, enabling scalable and resilient applications.'
    },
    {
      icon: Shield,
      title: 'Security-First Development',
      description:
        'Every solution we build will incorporate security considerations from the ground up, not as an afterthought.'
    }
  ]

  const challenges = [
    {
      icon: Database,
      title: 'Data Fragmentation',
      description:
        'Businesses struggle with information scattered across multiple systems, making insights difficult to extract.'
    },
    {
      icon: GitBranch,
      title: 'Integration Complexity',
      description:
        'Connecting legacy systems with modern tools creates technical debt and operational friction.'
    },
    {
      icon: Zap,
      title: 'Scaling Constraints',
      description:
        'Growth is often limited by infrastructure that cannot adapt to changing demands.'
    }
  ]

  const products = [
    {
      name: 'Protico Connect',
      icon: Layers,
      description:
        'An integration platform being developed to unify business applications through intelligent APIs and automated workflows.',
      status: 'In Development'
    },
    {
      name: 'Protico Insight',
      icon: Lightbulb,
      description:
        'A business intelligence layer that will transform raw data into actionable insights through intuitive dashboards.',
      status: 'In Development'
    },
    {
      name: 'Protico Shield',
      icon: Shield,
      description:
        'A security monitoring framework designed to provide visibility into system health and potential vulnerabilities.',
      status: 'In Development'
    }
  ]

  return (
    <>
      {/* Hero */}
      <Hero
        badge="Building the Future of IT"
        title={
          <>
            Technology should{' '}
            <span className="gradient-text">simplify</span>, not complicate
          </>
        }
        description="Too many businesses are held back by fragmented systems, complex integrations, and technology that creates more problems than it solves. We are building solutions designed to change that."
        primaryCta={{ label: 'Start the Conversation', to: '/reach-us' }}
        secondaryCta={{ label: 'Our Approach', to: '/solutions' }}
      />

      {/* What We Are Building */}
      <Section
        subtitle="Our Focus"
        title="What We Are Building"
        description="We are creating IT solutions that will address real business challenges-thoughtfully designed, carefully implemented."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {buildingItems.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
              variant="gradient"
            />
          ))}
        </div>
      </Section>

      {/* Challenges */}
      <Section
        className="bg-slate-900"
        subtitle="The Challenge"
        title="Why This Work Matters"
        description="The technology landscape presents genuine obstacles that businesses face every day."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {challenges.map((item, index) => (
            <Card
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* Products */}
      <Section
        subtitle="What's Coming"
        title="Products In Development"
        description="We are actively building tools that will help businesses operate more effectively."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <div
              key={index}
              className="relative p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary-200 hover:shadow-xl hover:shadow-primary-100/30 transition-all duration-300 group"
            >
              <div className="absolute top-6 right-6">
                <span className="px-3 py-1 text-xs font-medium bg-amber-100 text-amber-700 rounded-full">
                  {product.status}
                </span>
              </div>

              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20 group-hover:scale-110 transition-transform">
                <product.icon className="w-7 h-7 text-white" />
              </div>

              <h3 className="font-display font-semibold text-xl text-white mb-3">
                {product.name}
              </h3>

              <p className="text-slate-300 leading-relaxed">
                {product.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Perspective */}
      <Section dark subtitle="Our Perspective" title="Building with Purpose">
        <div className="max-w-4xl mx-auto">
          <div className="glass-card bg-slate-800/5 border-white/10 p-10 rounded-3xl">
            <blockquote className="text-xl lg:text-2xl text-gray-300 leading-relaxed mb-8 text-center">
              "Technology evolves rapidly, but the fundamental need remains constant:
              businesses need systems that work together, not against each other.
              We believe the next generation of IT solutions will be defined not by
              how many features they offer, but by how seamlessly they integrate
              into the fabric of daily operations."
            </blockquote>

            <div className="flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary-400 to-accent-400 flex items-center justify-center">
                <Target className="w-6 h-6 text-white" />
              </div>
              <div>
                <p className="font-semibold text-white">The Protico Vision</p>
                <p className="text-sm text-gray-400">
                  Guiding our development approach
                </p>
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* CTA */}
      <Section className="bg-gradient-to-br from-primary-600 via-primary-700 to-primary-800">
        <div className="text-center">
          <Rocket className="w-16 h-16 text-primary-200 mx-auto mb-6" />

          <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-4">
            Let's Build Something Meaningful
          </h2>

          <p className="text-xl text-primary-100 mb-10 max-w-2xl mx-auto">
            We're at the beginning of our journey and eager to connect with businesses
            facing real technology challenges.
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

export default Home