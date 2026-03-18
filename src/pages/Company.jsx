import Hero from '../components/Hero'
import Section from '../components/Section'
import { Building, Target, Compass, Users, Calendar, MapPin } from 'lucide-react'

function Company() {
  const values = [
    {
      icon: Compass,
      title: 'Clarity Over Complexity',
      description:
        'We believe the best solutions are those that simplify rather than complicate. Every feature we design will earn its place.',
    },
    {
      icon: Target,
      title: 'Purpose-Driven Development',
      description:
        'We will build only what genuinely helps businesses operate better-no features for the sake of features.',
    },
    {
      icon: Users,
      title: 'Honest Partnership',
      description:
        'We will be transparent about what we can deliver and when, building relationships on trust rather than promises.',
    },
  ]

  return (
    <>
      <Hero
        title="Building technology that respects your time"
        description="In an industry often driven by buzzwords and overcomplicated solutions, we're starting a company focused on clarity, simplicity, and genuine value."
      />

      {/* Opening Statement */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="prose prose-lg prose-gray mx-auto">
            <p className="text-xl text-slate-300 leading-relaxed mb-8">
              The IT services landscape is crowded with vendors promising transformation
              through complexity. Businesses are sold comprehensive platforms when they
              need focused solutions. They receive feature-laden systems when they need
              tools that simply work.
            </p>
            <p className="text-xl text-slate-300 leading-relaxed">
              Protico Technology was founded on a different premise: that technology
              should respect the intelligence of the people using it, and that simpler
              solutions-thoughtfully designed-often outperform complicated ones.
            </p>
          </div>
        </div>
      </Section>

      {/* The Name */}
      <Section className="bg-slate-900">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wider text-primary-600 mb-3">
                Behind the Name
              </p>
              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">
                What "Protico" Means
              </h2>
              <p className="text-lg text-slate-300 leading-relaxed mb-6">
                The name Protico draws inspiration from "portico"-an architectural
                element that serves as an entrance, a transitional space between
                the outside world and the interior of a building.
              </p>
              <p className="text-lg text-slate-300 leading-relaxed">
                We see our role similarly: serving as a bridge between complex
                technology challenges and elegant, accessible solutions. The "Pro"
                prefix reflects our commitment to professional-grade work and
                proactive problem-solving.
              </p>
            </div>

            <div className="relative">
              <div className="aspect-square rounded-3xl bg-gradient-to-br from-primary-100 via-primary-50 to-accent-50 flex items-center justify-center">
                <Building className="w-32 h-32 text-primary-300" />
              </div>
            </div>
          </div>
        </div>
      </Section>

      {/* Why We Started */}
      <Section
        subtitle="Our Origin"
        title="Why We Started"
        description="Every company begins with an observation about what could be done better."
      >
        <div className="max-w-4xl mx-auto">
          <div className="p-10 rounded-3xl bg-gradient-to-br from-primary-50 to-accent-50 border border-primary-100">
            <p className="text-lg text-slate-200 leading-relaxed mb-6">
              We observed businesses struggling with technology that was supposed to
              help them. Systems that didn't talk to each other. Tools that required
              extensive training just to accomplish basic tasks. Vendors more
              interested in selling the next upgrade than ensuring the current
              solution actually worked.
            </p>
            <p className="text-lg text-slate-200 leading-relaxed">
              Protico Technology exists to offer an alternative-thoughtfully designed
              solutions built by people who understand that your technology should
              serve your business, not the other way around.
            </p>
          </div>
        </div>
      </Section>

      {/* Values */}
      <Section
        className="bg-slate-900"
        subtitle="Our Principles"
        title="What Guides Our Work"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="p-8 rounded-2xl bg-slate-800 border border-slate-700 hover:border-primary-200 hover:shadow-lg transition-all duration-300"
            >
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-primary-500 to-primary-600 flex items-center justify-center mb-6 shadow-lg shadow-primary-500/20">
                <value.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="font-display font-semibold text-xl text-white mb-3">
                {value.title}
              </h3>
              <p className="text-slate-300 leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* Company Details */}
      <Section>
        <div className="max-w-4xl mx-auto">
          <div className="grid sm:grid-cols-2 gap-8">

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  Incorporated
                </h3>
              </div>
              <p className="text-slate-300">March 2026</p>
            </div>

            <div className="p-8 rounded-2xl bg-slate-900 border border-slate-700">
              <div className="flex items-center gap-4 mb-4">
                <div className="w-12 h-12 rounded-xl bg-primary-100 flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-primary-600" />
                </div>
                <h3 className="font-display font-semibold text-lg text-white">
                  Registered Office
                </h3>
              </div>
              <p className="text-slate-300">
                Office No 130, 1st Floor, Cloud 9 Sec-1 Vaishali,<br />
                I.E. Sahibabad, Ghaziabad,<br />
                Uttar Pradesh, India - 201010
              </p>
            </div>

          </div>
        </div>
      </Section>
    </>
  )
}

export default Company