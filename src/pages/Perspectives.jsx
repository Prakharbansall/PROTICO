import Hero from '../components/Hero'
import Section from '../components/Section'
import Card from '../components/Card'
import {
  Terminal,
  Lightbulb,
  Globe,
  ClipboardList,
  Users,
  ShieldCheck,
  Zap,
  BarChart
} from 'lucide-react'
import { Link } from 'react-router-dom'

function Perspectives() {

  const principles = [
    {
      icon: ShieldCheck,
      title: 'Structural Integrity',
      description: 'We prioritize professional-grade architecture that ensures long-term system stability.',
    },
    {
      icon: Zap,
      title: 'Operational Efficiency',
      description: 'Eliminating digital friction through streamlined, high-impact functional design.',
    },
    {
      icon: BarChart,
      title: 'Data-Driven Synthesis',
      description: 'Leveraging analytics to bridge the gap between complex data and user utility.',
    },
  ]

  return (
    <div className="bg-[#FAF9FB]">
      {/* HERO - Rebranded as an Editorial Portal */}
      <Hero
        badge="Institutional Thinking"
        subtitle="The Protico Methodology"
        title={<span>Systems <span className="text-[#D4AF37]">&</span> Logic</span>}
        description="Exploring the intersection of advanced digital architecture, professional ethics, and operational excellence."
        bgImage="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=2000"
      />

      {/* 1. PRINCIPLES - Using Royal Plum Cards */}
      <Section
        subtitle="Foundations"
        title="Our Governing Principles"
        description="The core ideological framework that dictates every professional solution we engineer."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {principles.map((item, i) => (
            <Card
              key={i}
              variant="default"
              icon={item.icon}
              title={item.title}
              description={item.description}
              className="border-t-4 border-[#3E103F]"
            />
          ))}
        </div>
      </Section>

      {/* 2. THE EDITORIAL PERSPECTIVE - Big Image & Deep Text */}
      <Section variant="soft" subtitle="The Vision" title="Architecture Over Complexity">
        <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1">
            <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
               <img 
                src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&q=80&w=1200" 
                alt="Digital Analysis" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-[#3E103F]/20" />
            </div>
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-black text-[#3E103F] tracking-tighter">Beyond the Surface.</h3>
            <p className="text-lg text-gray-700 leading-relaxed font-medium">
              We believe that professional software is an asset, not a project. By focusing on 
              <strong> Institutional Longevity</strong>, we ensure that every system we design 
              adheres to global standards of security and performance.
            </p>
            <p className="text-gray-600">
              Our perspectives are informed by rigorous research and a commitment to removing the 
              unnecessary noise found in modern digital tools.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. THE FRAMEWORK - Step by Step Professional Roadmap */}
      <Section
        variant="dark"
        subtitle="The Roadmap"
        title="Our Strategic Workflow"
        description="A systematic approach to engineering high-authority digital solutions."
      >
        <div className="grid md:grid-cols-3 gap-10">
          {[
            {
              icon: ClipboardList,
              step: 'PHASE 01',
              title: 'Requirement Synthesis',
              desc: 'Detailed analysis of organizational pain points and structural needs.',
            },
            {
              icon: Globe,
              step: 'PHASE 02',
              title: 'System Deployment',
              desc: 'Architecting high-performance prototypes tailored for professional use.',
            },
            {
              icon: Users,
              step: 'PHASE 03',
              title: 'Iterative Optimization',
              desc: 'Continuous refinement through institutional feedback and data vetting.',
            },
          ].map((item, i) => (
            <div
              key={i}
              className="relative p-10 rounded-[2.5rem] bg-white/5 border border-white/10 backdrop-blur-sm group hover:bg-white/10 transition-all duration-500"
            >
              <div className="mb-6 text-[#D4AF37] text-sm font-black tracking-[0.3em]">
                {item.step}
              </div>
              <div className="mb-6 w-14 h-14 rounded-2xl bg-[#D4AF37] flex items-center justify-center text-[#3E103F]">
                <item.icon className="w-7 h-7" />
              </div>
              <h3 className="text-white text-2xl font-black mb-4 tracking-tighter">
                {item.title}
              </h3>
              <p className="text-[#E2D1F9]/80 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>
      </Section>

      {/* 4. FINAL CALL TO ACTION - Royal Plum Aesthetic */}
      <div className="relative py-24 bg-white">
        <div className="max-w-4xl mx-auto text-center px-8 relative z-10">
          <h2 className="text-4xl md:text-6xl font-black text-[#3E103F] mb-6 tracking-tighter">
            Engage with Excellence.
          </h2>
          <p className="text-xl text-gray-600 mb-10 font-medium max-w-2xl mx-auto">
            If our methodology aligns with your organizational vision, we invite you to 
            initiate a formal discussion with our team.
          </p>
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 px-12 py-5 rounded-full bg-[#3E103F] text-white font-black text-lg uppercase tracking-widest hover:bg-[#D4AF37] hover:text-[#3E103F] transition-all shadow-2xl shadow-[#3E103F]/20"
          >
            Initiate Contact
            <Zap className="w-5 h-5 fill-current" />
          </Link>
        </div>
        {/* Subtle Background Decorative Graphic */}
        <div className="absolute bottom-0 right-0 opacity-[0.08] pointer-events-none">
           <h1 className="text-[20rem] font-black -mb-20 -mr-20">PROTICO&nbsp;</h1>
        </div>
      </div>
    </div>
  )
}

export default Perspectives