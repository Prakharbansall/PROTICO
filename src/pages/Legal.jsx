import Hero from '../components/Hero'
import Section from '../components/Section'

function Legal() {
  return (
    <>
      <Hero
        badge="Policies"
        title="Site Terms & Privacy"
        description="This page describes the legal terms and privacy expectations for using our site."
      />

      <Section
        subtitle="Terms"
        title="Terms of Use"
        description="By using this site, you agree to the following terms."
      >
        <div className="max-w-4xl mx-auto space-y-4 text-surface-200">
          <p className="leading-relaxed">
            Protico Technology is an early-stage company. The content on this site is for informational purposes only and does not constitute an offer, contract, or professional advice.
          </p>
          <p className="leading-relaxed">
            We reserve the right to update or modify these terms at any time. Continued use of this site after changes are posted constitutes your acceptance of those changes.
          </p>
          <p className="leading-relaxed">
            All trademarks and proprietary marks are the property of their respective owners.
          </p>
        </div>
      </Section>

      <Section
        className="bg-surface-900"
        subtitle="Privacy"
        title="Privacy Policy"
        description="How we treat your information."
      >
        <div className="max-w-4xl mx-auto space-y-4 text-surface-200">
          <p className="leading-relaxed">
            We only collect what is necessary to respond to inquiries (such as email and message content in contact forms). We do not sell or share personal information with third parties for marketing purposes.
          </p>
          <p className="leading-relaxed">
            We may use non-identifiable analytics to understand general usage patterns on this site. This helps us improve page experience and content structure.
          </p>
          <p className="leading-relaxed">
            For questions about data handling, please contact us at contact@proticotechnology.com.
          </p>
        </div>
      </Section>

      <Section
        subtitle="Contact"
        title="Need Clarification?"
        description="Reach out if you have questions about legal terms or private information."
      >
        <div className="rounded-2xl p-8 bg-surface-800 border border-surface-700 shadow-sm">
          <p className="text-surface-300 leading-relaxed mb-4">
            Email us at{' '}
            <a
              href="mailto:contact@proticotechnology.com"
              className="text-brand-500 hover:text-brand-800"
            >
              contact@proticotechnology.com
            </a>{' '}
            and we will respond with clarification.
          </p>
          <p className="text-sm text-surface-400">
            This legal content is provided for informational purposes only and is not a substitute for legal advice.
          </p>
        </div>
      </Section>
    </>
  )
}

export default Legal