import Hero from "../components/Hero";
import Section from "../components/Section";
import { Link } from "react-router-dom";
import { 
  Compass, 
  Target, 
  Users, 
  MapPin, 
  Lightbulb, 
  Layers, 
  ShieldCheck, 
  Globe, 
  Briefcase 
} from "lucide-react";

function Company() {

  const values = [
    {
      icon: ShieldCheck,
      title: "Operational Excellence",
      description: "Delivering architectural precision in every digital framework we deploy.",
    },
    {
      icon: Target,
      title: "Strategic Focus",
      description: "Prioritizing high-impact solutions that solve core organizational challenges.",
    },
    {
      icon: Globe,
      title: "Global Standards",
      description: "Adhering to international benchmarks in security, usability, and performance.",
    },
  ];

  const focusAreas = [
    {
      icon: Layers,
      title: "Enterprise Web Systems",
      desc: "Engineering complex, scalable web architectures for high-traffic environments.",
    },
    {
      icon: Briefcase,
      title: "IT Consultancy",
      desc: "Providing expert guidance on digital transformation and system integration.",
    },
  ];

  return (
    <div className="bg-[#FAF9FB]">
      {/* HERO - Rebranded as an Corporate Profile */}
      
        <img 
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=2000" 
          alt="Modern Corporate Building" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10">
          <Hero
            badge="Corporate Profile"
            title="Protico Technology"
            subtitle="Private Limited"
            description="A premier IT services organization dedicated to engineering sophisticated digital tools and enterprise-grade web applications."
          />
        </div>
     

      {/* MISSION - The 'Big' Statement */}
      <Section
        subtitle="Institutional Mission"
        title="Redefining Digital Utility"
      >
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1">
            <img 
              src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80&w=800" 
              alt="Professional Team" 
              className="rounded-[2rem] shadow-2xl border-b-8 border-[#3E103F]"
            />
          </div>
          <div className="flex-1 space-y-6">
            <h3 className="text-3xl font-bold text-[#3E103F]">Complexity Simplified.</h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              Protico Technology Private Limited operates at the intersection of innovation and practicality. 
              While the industry moves toward unnecessary complexity, our mandate is the delivery of 
              streamlined, powerful, and accessible digital ecosystems.
            </p>
            <p className="text-gray-600">
              Our methodology is grounded in rigorous testing and a deep understanding of end-user 
              behavior, ensuring that our infrastructure serves a clear and professional purpose.
            </p>
          </div>
        </div>
      </Section>

      {/* CAPABILITIES - Replaced 'Focus Areas' */}
      <div className="bg-white border-y border-[#E5D6EB]">
        <Section
          subtitle="Core Competencies"
          title="Service Verticals"
        >
          <div className="grid md:grid-cols-2 gap-8">
            {focusAreas.map((item, i) => (
              <div
                key={i}
                className="group p-10 rounded-3xl bg-[#F8F4F9] border border-transparent hover:border-[#3E103F] transition-all duration-300"
              >
                <item.icon className="w-10 h-10 text-[#3E103F] mb-4 group-hover:scale-110 transition-transform" />
                <h3 className="text-2xl font-bold text-[#1A1A1A] mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </Section>
      </div>

      {/* VALUES - Professional Icons and Cards */}
      <Section
        subtitle="Foundations"
        title="The Protico Philosophy"
      >
        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, i) => (
            <div key={i} className="text-center p-8">
              <div className="mb-6 inline-flex w-20 h-20 rounded-full bg-[#3E103F] items-center justify-center shadow-lg">
                <item.icon className="w-10 h-10 text-[#D4AF37]" />
              </div>
              <h3 className="text-xl font-black text-[#3E103F] mb-4 uppercase tracking-wider">{item.title}</h3>
              <p className="text-gray-600 italic">"{item.description}"</p>
            </div>
          ))}
        </div>
      </Section>

      {/* REBRANDED TIMELINE - 'Infrastructure Growth' */}
      <div className="relative py-24 bg-[#3E103F] text-white">
        <img 
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=1500" 
          alt="Network" 
          className="absolute inset-0 w-full h-full object-cover opacity-10"
        />
        <div className="relative z-10 max-w-4xl mx-auto px-6">
          <div className="text-center mb-16">
             <h2 className="text-4xl font-bold">Operational Roadmap</h2>
             <p className="text-[#E2D1F9] mt-4">Maintaining steady growth through architectural integrity.</p>
          </div>
          <div className="space-y-12">
            {[
              { step: "PHASE 01", title: "Research & Development", body: "Identifying key market inefficiencies and engineering core prototypes." },
              { step: "PHASE 02", title: "System Deployment", body: "Launching integrated web solutions for corporate testing and feedback." },
              { step: "PHASE 03", title: "Global Scaling", body: "Optimizing infrastructure for enterprise-level adoption." }
            ].map((item, i) => (
              <div key={i} className="flex gap-8 items-start border-l-2 border-[#D4AF37] pl-8">
                <span className="text-[#D4AF37] font-black tracking-widest text-sm">{item.step}</span>
                <div>
                  <h4 className="text-xl font-bold mb-2">{item.title}</h4>
                  <p className="text-[#E2D1F9]">{item.body}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* LOCATION - Professional Card */}
      <Section>
        <div className="max-w-4xl mx-auto bg-white rounded-[3rem] p-12 shadow-xl flex flex-col md:flex-row items-center gap-10 border border-[#E5D6EB]">
          <div className="bg-[#F3E8F7] p-10 rounded-[2rem]">
            <MapPin className="w-16 h-16 text-[#3E103F]" />
          </div>
          <div className="text-left">
            <h3 className="text-3xl font-bold text-[#3E103F] mb-2">Regional Headquarters</h3>
            <p className="text-xl text-gray-700">Vaishali, Ghaziabad</p>
            <p className="text-gray-500 uppercase tracking-widest">Uttar Pradesh, India</p>
          </div>
        </div>
      </Section>

      {/* FINAL CTA - Royal Plum Finish */}
      <div className="bg-[#FAF9FB] pb-24 text-center">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-4xl font-black text-[#3E103F] mb-6">Partner with Excellence</h2>
          <p className="text-gray-600 mb-10 text-lg">
            For institutional inquiries, collaborative research, or professional service requests, 
            our administrative team is at your disposal.
          </p>
          <Link
            to="/reach-us"
            className="inline-block bg-[#3E103F] text-white px-12 py-5 rounded-full font-black text-xl hover:bg-[#D4AF37] hover:text-[#3E103F] transition-all shadow-2xl"
          >
            Contact Administration
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Company;