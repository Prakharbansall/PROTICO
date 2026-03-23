import { Link } from 'react-router-dom'
import Hero from '../components/Hero'
import Section from '../components/Section'
import Card from '../components/Card'
import {
  Puzzle,
  Lightbulb,
  Layers,
  Workflow,
  BarChart3,
  ShieldCheck,
  Globe,
  Database,
  Cpu,
  ArrowRight
} from 'lucide-react'

function Solutions() {

  const infrastructure = [
    {
      icon: Database,
      title: 'Architectural Analysis',
      text: 'Identifying structural inefficiencies within legacy digital workflows and systems.'
    },
    {
      icon: ShieldCheck,
      title: 'Vulnerability Testing',
      text: 'Rigorous vetting of system protocols to ensure enterprise-grade security standards.'
    }
  ]

  const verticals = [
    {
      icon: Layers,
      title: 'Enterprise Web Systems',
      description: 'Engineering robust, high-performance web applications with optimized user interfaces.'
    },
    {
      icon: Workflow,
      title: 'Process Automation',
      description: 'Deploying algorithmic solutions to eliminate repetitive operational overhead.'
    },
    {
      icon: BarChart3,
      title: 'Analytical Dashboards',
      description: 'Synthesizing complex data streams into high-clarity professional visualizations.'
    }
  ]

  return (
    <div className="bg-[#FAF9FB]">
      {/* HERO - Rebranded as an Infrastructure Overview */}
      <Hero
        badge="Systems & Solutions"
        subtitle="Operational Excellence"
        title={<span>Digital <span className="text-[#D4AF37]">Infrastructure</span></span>}
        description="Engineering professional-grade digital assets designed for scalability, reliability, and institutional utility."
        bgImage="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=2000"
      />

      {/* 1. CURRENT SYSTEMS - Side by Side Aesthetic */}
      <Section
        subtitle="Infrastructure"
        title="Core Development Focus"
        description="Our current engineering efforts are dedicated to building resilient systems that solve complex organizational challenges."
      >
        <div className="grid md:grid-cols-2 gap-8">
          {infrastructure.map((item, i) => (
            <Card 
              key={i}
              icon={item.icon}
              title={item.title}
              description={item.text}
              variant="soft"
              className="border-l-4 border-[#3E103F]"
            />
          ))}
        </div>
      </Section>

      {/* 2. VERTICALS - The Royal Plum Grid */}
      <Section
        variant="dark"
        subtitle="Verticals"
        title="Service Specializations"
        description="High-authority digital frameworks tailored for enterprise-level performance."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {verticals.map((item, i) => (
            <Card
              key={i}
              variant="royal"
              icon={item.icon}
              title={item.title}
              description={item.description}
              ctaText="System Overview"
            />
          ))}
        </div>
      </Section>

      {/* 3. CASE STUDY PREVIEW - Adding 'Big Website' Size */}
      <Section subtitle="Case Studies" title="Institutional Impact">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-12 items-center">
          <div className="flex-1 w-full">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl group">
               <img 
                src="https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=1200" 
                alt="System Interface" 
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E103F] via-transparent to-transparent opacity-60" />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <div className="inline-block px-4 py-1 rounded-full bg-[#F3E8F7] text-[#3E103F] text-xs font-black tracking-widest uppercase">
              Operational Case 01
            </div>
            <h3 className="text-4xl font-black text-[#3E103F] tracking-tighter">Workflow Optimization Synthesis</h3>
            <p className="text-lg text-gray-600 leading-relaxed font-medium">
              A comprehensive analysis and restructuring of digital touchpoints, resulting in a 40% 
              increase in system throughput and reduced data latency.
            </p>
            <Link to="/reach-us" className="inline-flex items-center gap-2 text-[#3E103F] font-black group">
              Request Full Documentation <ArrowRight className="w-4 h-4 group-hover:translate-x-2 transition-transform" />
            </Link>
          </div>
        </div>
      </Section>

      {/* 4. STRATEGIC PIPELINE - Dark Methodology */}
      <Section
        variant="soft"
        subtitle="Strategy"
        title="Deployment Pipeline"
        className="border-t border-[#E5D6EB]"
      >
        <div className="grid md:grid-cols-3 gap-10">
          {[
            { step: '01', title: 'Synthesis', desc: 'Aggregating requirements into a technical framework.' },
            { step: '02', title: 'Architecture', desc: 'Engineering the core digital backbone and security layers.' },
            { step: '03', title: 'Optimization', desc: 'Refining system performance based on institutional metrics.' },
          ].map((item, i) => (
            <div key={i} className="relative group">
              <div className="text-6xl font-black text-[#3E103F]/5 absolute -top-10 -left-4 select-none">
                {item.step}
              </div>
              <div className="relative z-10">
                <h3 className="text-[#1A1A1A] text-xl font-black mb-3 tracking-tighter uppercase">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* FINAL CTA - Royal Plum Footer Block */}
      <div className="bg-[#3E103F] py-24 text-center">
        <div className="max-w-4xl mx-auto px-8">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-6 tracking-tighter">
            Ready to Partner with <span className="text-[#D4AF37]">Precision?</span>
          </h2>
          <p className="text-[#E2D1F9]/70 text-xl mb-10 font-medium max-w-2xl mx-auto">
            Our administrative team is available for formal discussions regarding 
            your institutional infrastructure requirements.
          </p>
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#D4AF37] text-[#3E103F] font-black text-lg hover:bg-white transition-all shadow-2xl"
          >
            Initiate Contact
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Solutions