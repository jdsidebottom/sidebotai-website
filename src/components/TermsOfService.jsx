import React from 'react'

const TermsOfService = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain that by using your services, users agree to these terms. 
                  Include information about who can use your services (age restrictions, etc.).]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Description of Services</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Describe the services you provide, including custom development, 
                  AI solutions, consulting, and prototyping services.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Outline what users are responsible for when using your services, 
                  including providing accurate information, complying with laws, etc.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Prohibited Uses</h2>
                <p className="mb-4">
                  [PLACEHOLDER: List activities that are not allowed when using your services, 
                  such as illegal activities, harassment, spam, etc.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain ownership of intellectual property, including your content, 
                  user-generated content, and work products from consulting services.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Include information about pricing, payment methods, refunds, 
                  and billing for your consulting and development services.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain that services may not always be available and you may 
                  modify or discontinue services at any time.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Include disclaimers about your liability for damages, losses, 
                  or issues that may arise from using your services.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Indemnification</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain that users agree to indemnify you against claims 
                  arising from their use of your services.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Describe how either party can terminate the service relationship 
                  and what happens upon termination.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Specify which state/country laws govern these terms and where 
                  disputes will be resolved. Since you're in Arizona, likely Arizona law.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain how you will notify users of changes to these terms 
                  and when changes become effective.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about these Terms of Service, please contact us at:
                </p>
                <div className="bg-white/10 p-4 rounded-lg">
                  <p><strong>Sidebot AI Labs, LLC</strong></p>
                  <p>Email: info@sidebot.ai</p>
                  <p>Phone: (844) 743-3268</p>
                  <p>Address: 3101 N. Central Ave, Ste 183 #6247, Phoenix, Arizona 85012</p>
                </div>
              </section>

              <section className="mt-8 pt-6 border-t border-white/20">
                <p className="text-sm text-white/60">
                  Last updated: [PLACEHOLDER: Insert date when terms of service were last updated]
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
