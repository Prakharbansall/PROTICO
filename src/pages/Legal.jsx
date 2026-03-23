import Hero from "../components/Hero";
import Section from "../components/Section";

function Legal() {
  return (
    <div className="bg-[#FAF9FB] min-h-screen">
      {/* HERO with Background Image */}
      <div className="relative overflow-hidden bg-[#3E103F]">
        {/* Abstract Background Image Overlay */}
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
          alt="Library background" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
        />
        <div className="relative z-10">
          <Hero
            badge="Institutional Governance"
            title="Terms & Data Integrity"
            description="Our professional framework for content distribution, privacy protection, and user safety."
          />
        </div>
      </div>

      {/* 1. INTRO with Side Image (The 'Big Site' Layout) */}
      <Section subtitle="Foundations" title="Our Editorial Standards">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-12">
          <div className="flex-1 space-y-4 text-lg text-gray-700">
            <p className="font-semibold text-[#3E103F]">
              Operating with transparency and academic rigor.
            </p>
            <p>
              ProTico Technology is more than a blog; it is a repository of verified insights. 
              Our commitment to high-standard information ensures that every reader interacts with content 
              that is ethically sourced and legally protected.
            </p>
          </div>
          <div className="flex-1 w-full">
            <img 
              src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?auto=format&fit=crop&q=80&w=800" 
              alt="Professional legal document" 
              className="rounded-2xl shadow-2xl border-b-8 border-[#3E103F]"
            />
          </div>
        </div>
      </Section>

      {/* 2. TERMS - Two Column Grid */}
      <Section
        subtitle="Policy"
        title="Intellectual Property"
        className="bg-white"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="p-8 bg-[#F8F4F9] rounded-xl border-t-4 border-[#3E103F]">
            <h4 className="text-[#3E103F] font-bold text-xl mb-3">Content Rights</h4>
            <p className="text-gray-600">
              All materials, including articles, code snippets, and research data, are protected 
              under international copyright laws. Unauthorized scraping or commercial use is strictly monitored.
            </p>
          </div>
          <div className="p-8 bg-[#F8F4F9] rounded-xl border-t-4 border-[#3E103F]">
            <h4 className="text-[#3E103F] font-bold text-xl mb-3">User Responsibility</h4>
            <p className="text-gray-600">
              Readers are expected to use our resources for educational and professional growth. 
              Any attempt to disrupt our digital architecture will result in permanent access revocation.
            </p>
          </div>
        </div>
      </Section>

      {/* 3. PRIVACY - Full Width Image Background Section */}
      <div className="relative py-24 my-12">
        <img 
          src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&fit=crop&q=80&w=1500" 
          alt="Secure server" 
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#3E103F]/90"></div> {/* Plum Overlay */}
        <div className="relative z-10 max-w-4xl mx-auto text-center px-6">
          <h2 className="text-white text-4xl font-bold mb-6">Global Privacy Standards</h2>
          <p className="text-[#E2D1F9] text-xl mb-8">
            We employ enterprise-grade encryption to ensure that your interaction with our 
            knowledge base remains private and secure.
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {['Encrypted', 'Anonymous', 'Safe', 'Verified'].map((item) => (
              <div key={item} className="bg-white/10 backdrop-blur-md p-4 rounded-lg text-white font-bold border border-white/20">
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* 4. CONTACT - The 'Big Closing' */}
      <Section subtitle="Communication" title="Reach Our Administration">
        <div className="max-w-5xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Modern office" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative bg-[#3E103F]/80 p-16 text-center text-white backdrop-blur-sm">
            <h3 className="text-3xl font-bold mb-4">Have a Governance Question?</h3>
            <p className="max-w-2xl mx-auto mb-8 text-[#E2D1F9]">
              Our legal and editorial teams are here to clarify any concerns regarding 
              our digital footprint or your data rights.
            </p>
            <a
              href="mailto:contact@proticotechnology.com"
              className="inline-block bg-[#D4AF37] hover:bg-[#F1C40F] text-[#3E103F] px-10 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              contact@proticotechnology.com
            </a>
          </div>
        </div>
      </Section>
    </div>
  );
}

export default Legal;