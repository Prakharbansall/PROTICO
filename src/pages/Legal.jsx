import Hero from "../components/Hero";
import Section from "../components/Section";
import { Shield, Lock, Eye, AlertCircle } from "lucide-react";

function Legal() {
  return (
    <div className="bg-[#FAF9FB] min-h-screen">
      
      {/* HERO */}
      <div className="relative overflow-hidden bg-[#3E103F]">
        <img 
          src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?auto=format&fit=crop&q=80&w=2000" 
          alt="Legal" 
          className="absolute inset-0 w-full h-full object-cover opacity-20"
          primaryCta={{ label: "Start a Project", to: "/solutions" }}
        />
        <div className="relative z-10">
          <Hero
            badge="Legal & Privacy"
            title="Your Data is Safe With Us"
            description="We take privacy seriously. Here's what you need to know about how we handle your information."
            secondaryCta={{ label: "Contact Us", to: "/reach-us" }}
          />
        </div>
      </div>

      {/* INTRO - Make it Human */}
      <Section subtitle="Legal Stuff" title="We Keep It Simple">
        <div className="max-w-4xl mx-auto space-y-6">
          <p className="text-xl text-gray-700 leading-relaxed font-medium">
            Legal agreements don't have to be scary. Here's ours in plain English.
          </p>
          <p className="text-gray-600 leading-relaxed">
            When you work with us or use our services, we want you to understand exactly what's happening 
            with your data and information. No hidden terms. No surprises. Just honest communication.
          </p>
        </div>
      </Section>

      {/* PILLARS */}
      <Section variant="soft" subtitle="Three Core Commitments" title="How We Protect You">
        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: Shield,
              title: "Your Data is Private",
              desc: "We don't sell your data. We don't share it without permission. Period."
            },
            {
              icon: Lock,
              title: "Security First",
              desc: "Enterprise-grade encryption. Regular security audits. We take protection seriously."
            },
            {
              icon: Eye,
              title: "Full Transparency",
              desc: "You always know what data we're collecting and why. No secrets."
            }
          ].map((item, i) => (
            <div key={i} className="p-10 rounded-2xl bg-white border border-[#E5D6EB] hover:border-[#3E103F] transition-all text-center">
              <div className="w-16 h-16 rounded-full bg-[#F3E8F7] flex items-center justify-center mx-auto mb-6">
                <item.icon className="w-8 h-8 text-[#3E103F]" />
              </div>
              <h3 className="text-2xl font-black text-[#3E103F] mb-4">{item.title}</h3>
              <p className="text-gray-600 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* TERMS OF SERVICE */}
      <Section subtitle="Agreement" title="Terms of Service">
        <div className="max-w-4xl mx-auto space-y-8">
          
          <div className="p-8 rounded-2xl border border-[#E5D6EB] bg-white">
            <h4 className="text-2xl font-black text-[#3E103F] mb-4">What You Get</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span>
                <span>Access to our services and software as described in our agreements</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span>
                <span>Professional support during business hours</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span>
                <span>Regular updates and security patches</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">✓</span>
                <span>Access to your data whenever you need it</span>
              </li>
            </ul>
          </div>

          <div className="p-8 rounded-2xl border border-[#E5D6EB] bg-white">
            <h4 className="text-2xl font-black text-[#3E103F] mb-4">What We Ask From You</h4>
            <ul className="space-y-3 text-gray-700">
              <li className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Use our services legally and responsibly</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Don't try to hack or abuse our systems</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Pay invoices on time (this is important to us)</span>
              </li>
              <li className="flex gap-3">
                <span className="text-[#D4AF37] font-bold">•</span>
                <span>Tell us if you see a security issue</span>
              </li>
            </ul>
          </div>
        </div>
      </Section>

      {/* PRIVACY POLICY */}
      <Section variant="soft" subtitle="Your Information" title="Privacy Policy">
        <div className="max-w-4xl mx-auto space-y-6">
          <div>
            <h4 className="text-2xl font-black text-[#3E103F] mb-4">What Data Do We Collect?</h4>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>When you contact us:</strong> Your name, email, phone number, and message.
              </p>
              <p>
                <strong>When you use our services:</strong> Information about how you use them 
                (logins, features used, etc.). This helps us improve.
              </p>
              <p>
                <strong>Payment info:</strong> We use secure payment processors. We never store full credit card numbers.
              </p>
            </div>
          </div>

          <div className="border-t border-[#E5D6EB] pt-6">
            <h4 className="text-2xl font-black text-[#3E103F] mb-4">How Do We Use It?</h4>
            <div className="space-y-3 text-gray-700">
              <p>✓ To provide you with our services</p>
              <p>✓ To improve our products (we're always learning)</p>
              <p>✓ To keep you updated (only if you opt in)</p>
              <p>✓ To prevent fraud and security issues</p>
              <p>✗ We do NOT sell your data to third parties</p>
            </div>
          </div>

          <div className="border-t border-[#E5D6EB] pt-6">
            <h4 className="text-2xl font-black text-[#3E103F] mb-4">Your Rights</h4>
            <div className="space-y-3 text-gray-700">
              <p>
                <strong>Access:</strong> You can ask us what data we have about you.
              </p>
              <p>
                <strong>Delete:</strong> You can request we delete your data (subject to legal requirements).
              </p>
              <p>
                <strong>Export:</strong> You can get a copy of your data anytime.
              </p>
              <p>
                <strong>Opt-out:</strong> Unsubscribe from marketing emails anytime.
              </p>
            </div>
          </div>
        </div>
      </Section>

      {/* SECURITY */}
      <Section subtitle="Protection" title="How We Keep Your Data Safe">
        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          <div className="p-8 rounded-2xl bg-white border border-[#E5D6EB]">
            <h4 className="text-xl font-black text-[#3E103F] mb-4">Technical Security</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ SSL encryption for all data in transit</li>
              <li>✓ AES-256 encryption at rest</li>
              <li>✓ Regular security audits</li>
              <li>✓ Automated backups</li>
              <li>✓ Firewalls and intrusion detection</li>
            </ul>
          </div>
          <div className="p-8 rounded-2xl bg-white border border-[#E5D6EB]">
            <h4 className="text-xl font-black text-[#3E103F] mb-4">Operational Security</h4>
            <ul className="space-y-2 text-gray-700 text-sm">
              <li>✓ Limited employee access to data</li>
              <li>✓ Strong password policies</li>
              <li>✓ Security training for all staff</li>
              <li>✓ Incident response plan</li>
              <li>✓ Regular penetration testing</li>
            </ul>
          </div>
        </div>
      </Section>

      {/* COOKIES & TRACKING */}
      <Section subtitle="Transparency" title="Cookies & Analytics">
        <div className="max-w-4xl mx-auto space-y-6">
          <div className="p-8 rounded-2xl border-2 border-[#D4AF37]/30 bg-white">
            <div className="flex gap-4 items-start">
              <AlertCircle className="w-6 h-6 text-[#D4AF37] shrink-0 mt-1" />
              <div>
                <h4 className="font-black text-[#3E103F] mb-2">No Creepy Tracking</h4>
                <p className="text-gray-700">
                  We use basic analytics to understand how people use our site. 
                  No tracking pixels. No third-party cookies. No selling to ad networks.
                </p>
              </div>
            </div>
          </div>

          <p className="text-gray-600">
            We use industry-standard analytics tools that respect your privacy. 
            You can always opt out of analytics in your browser settings.
          </p>
        </div>
      </Section>

      {/* CONTACT */}
      <Section subtitle="Questions?" title="Reach Our Legal Team">
        <div className="max-w-4xl mx-auto relative rounded-[3rem] overflow-hidden shadow-2xl">
          <img 
            src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=1200" 
            alt="Contact" 
            className="absolute inset-0 w-full h-full object-cover opacity-30"
          />
          <div className="relative bg-[#3E103F]/80 p-16 text-center text-white backdrop-blur-sm">
            <h3 className="text-3xl font-black mb-4">Have Questions About Privacy?</h3>
            <p className="max-w-2xl mx-auto mb-8 text-[#E2D1F9] text-lg">
              We're happy to explain anything. Email us anytime and we'll get back to you within 24 hours.
            </p>
            <a
              href="mailto:contact@proticotechnology.com"
              className="inline-block bg-[#D4AF37] hover:bg-white text-[#3E103F] px-10 py-4 rounded-full font-black text-lg transition-all transform hover:scale-105 shadow-lg"
            >
              contact@proticotechnology.com
            </a>
          </div>
        </div>
      </Section>

      {/* FOOTER NOTE */}
      <div className="bg-white border-t border-[#E5D6EB] py-12">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <p className="text-gray-600 text-sm">
            Last updated: March 2026 • We update our policies as needed to keep you protected.
          </p>
          <p className="text-gray-500 text-xs mt-4">
            By using Protico's services, you agree to our Terms of Service and Privacy Policy. 
            If you don't agree, please let us know.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Legal;