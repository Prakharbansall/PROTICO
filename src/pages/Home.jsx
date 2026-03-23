import React from "react";
import Hero from "../components/Hero";
import Section from "../components/Section";
import Card from "../components/Card";
import { Link } from "react-router-dom";
import { 
  ArrowRight, 
  ShieldCheck, 
  Cpu, 
  Globe, 
  Layers, 
  Database
} from "lucide-react";

function Home() {
  const capabilities = [
    {
      icon: Layers,
      title: "Enterprise Architecture",
      desc: "Engineering high-performance digital ecosystems for global infrastructure.",
      badge: "CORE"
    },
    {
      icon: Database,
      title: "Data Intelligence",
      desc: "Synthesizing complex data streams into actionable organizational insights.",
      badge: "NEW"
    },
    {
      icon: Cpu,
      title: "System Automation",
      desc: "Optimizing operational workflows through advanced algorithmic integration.",
      badge: "TECH"
    }
  ];

  return (
    <div className="bg-[#FAF9FB]">
      {/* 1. HERO - The High-Authority Entrance */}
      <Hero
        badge="Institutional Framework"
        subtitle="Global IT Solutions • Enterprise Excellence"
        title={<span>PROTICO<span className="text-[#D4AF37]"></span></span>}
        description="Protico Technology Private Limited delivers sophisticated digital architecture and professional system integration. We bridge the gap between complex technology and organizational utility."
        primaryCta={{ label: "View Infrastructure", to: "/solutions" }}
        secondaryCta={{ label: "Inquiry Hub", to: "/reach-us" }}
      />

      {/* 2. CORE PHILOSOPHY - Precision Layout */}
      <Section subtitle="Institutional Mission" title="The Standard of Engineering" align="left">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="flex-1 space-y-6">
            <p className="text-2xl font-black text-[#3E103F] tracking-tighter">
              Precision. Reliability. Professionalism.
            </p>
            <p className="text-gray-600 leading-relaxed text-lg font-medium">
              Unlike small-scale projects, Protico Technology focuses on <strong>Institutional longevity</strong>. 
              Our systems are built to scale, ensuring that digital tools serve as a robust backbone 
              for professional operations across the NCR region and beyond.
            </p>
            <div className="pt-4">
              <Link to="/company" className="group inline-flex items-center gap-3 text-[#3E103F] font-black border-b-2 border-[#D4AF37] pb-1 hover:gap-5 transition-all">
                Learn About Our Standards <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          <div className="flex-1 relative">
            <div className="relative group overflow-hidden rounded-[3rem] shadow-2xl">
              <img 
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1000" 
                alt="Office Infrastructure" 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-[#3E103F]/10 group-hover:bg-transparent transition-colors" />
            </div>
            {/* Decorative Gold Element */}
            <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-[#D4AF37] rounded-full z-[-1] opacity-50 blur-2xl" />
          </div>
        </div>
      </Section>

      {/* 3. CAPABILITIES GRID - Using the Royal Variant */}
      <Section 
        variant="dark" 
        subtitle="Competencies" 
        title="Professional Service Verticals"
        description="Delivering specialized technical expertise across three primary digital domains."
      >
        <div className="grid md:grid-cols-3 gap-8">
          {capabilities.map((item, i) => (
            <Card
              key={i}
              variant="royal" // Matches the Royal Plum/Gold theme
              icon={item.icon}
              title={item.title}
              description={item.desc}
              badge={item.badge}
              ctaText="Explore Vertical"
            />
          ))}
        </div>
      </Section>

      {/* 4. KNOWLEDGE HUB - Adding "Weight" to the brand */}
      <Section subtitle="Perspectives" title="Industry Intelligence">
        <div className="grid md:grid-cols-2 gap-10">
          {[
            { 
              img: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=800", 
              title: "Security Protocols 2026",
              category: "CYBER-INTEGRITY"
            },
            { 
              img: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=800", 
              title: "Cloud Architecture Synthesis",
              category: "INFRASTRUCTURE"
            }
          ].map((post, i) => (
            <div key={i} className="group relative h-[450px] overflow-hidden rounded-[3rem] cursor-pointer shadow-xl">
              <img 
                src={post.img} 
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" 
                alt="post" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#3E103F] via-[#3E103F]/40 to-transparent opacity-90" />
              <div className="absolute bottom-12 left-12 right-12">
                <p className="text-[#D4AF37] font-black text-xs tracking-[0.3em] mb-4 uppercase">{post.category}</p>
                <h4 className="text-white text-3xl font-black tracking-tighter leading-tight group-hover:text-[#D4AF37] transition-colors">
                  {post.title}
                </h4>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* 5. FINAL INSTITUTIONAL STATEMENT - High Contrast Gold */}
      <div className="bg-[#D4AF37] py-24 text-center relative overflow-hidden">
        {/* Subtle Decorative Circle */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/10 rounded-full -mr-32 -mt-32" />
        
        <div className="max-w-4xl mx-auto px-8 relative z-10">
          <div className="inline-flex p-5 rounded-3xl bg-[#3E103F] shadow-2xl mb-8">
            <ShieldCheck className="w-12 h-12 text-[#D4AF37]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black text-[#3E103F] mb-8 tracking-tighter">
            Partner with Institutional Reliability.
          </h2>
          <p className="text-[#3E103F]/80 text-xl md:text-2xl mb-12 font-bold leading-relaxed max-w-2xl mx-auto">
            Initiate contact with our administrative team for inquiries regarding system architecture and digital transformation.
          </p>
          <Link
            to="/reach-us"
            className="inline-flex items-center gap-3 bg-[#3E103F] text-white px-14 py-6 rounded-full font-black text-xl hover:shadow-[0_20px_50px_rgba(62,16,63,0.4)] transition-all hover:-translate-y-2 uppercase tracking-widest"
          >
            Initiate Contact Hub
            <ArrowRight className="w-6 h-6" />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Home;