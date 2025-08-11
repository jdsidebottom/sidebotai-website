import React, { useEffect } from 'react'

const PrivacyPolicy = () => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <p className="mb-4">
                  We may collect personal information that you voluntarily provide, such as your name, email address, phone number, and company information. 
                  We may also collect technical information automatically when you use our services, including IP addresses, browser type, device identifiers, 
                  and usage data. We use cookies and similar technologies to enhance your browsing experience and analyze site traffic.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  We use the information we collect to provide, operate, and improve our services; personalize your experience; communicate with you; 
                  process transactions; send updates and promotional materials (with your consent where required by law); and comply with legal obligations.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">AI Data Usage</h2>
                <p className="mb-4">
                  Some of our services involve the use of artificial intelligence (AI) systems to process data you provide. 
                  This may include analyzing text, generating content, or automating workflows. When your data is processed by AI models:
                </p>
                <ul className="list-disc pl-6 mb-4">
                  <li>We only use your data for the specific purpose of delivering the requested service or feature.</li>
                  <li>Your data may be temporarily transmitted to third-party AI providers (such as OpenAI, Anthropic, or similar) solely for processing.</li>
                  <li>We do not use your data to train third-party AI models unless explicitly disclosed and agreed upon.</li>
                  <li>Where possible, we anonymize or minimize personal data before AI processing.</li>
                </ul>
                <p className="mb-4">
                  You are responsible for ensuring that any data you provide for AI processing does not contain confidential or sensitive personal information, 
                  unless you have obtained the necessary consent or legal right to share it.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
                <p className="mb-4">
                  We do not sell or rent your personal information. We may share your data with trusted third-party service providers who assist us in operating our business, 
                  such as payment processors, hosting providers, analytics services, and AI technology providers. We may also disclose information if required by law or to protect our legal rights, 
                  safety, or property, or that of others.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                <p className="mb-4">
                  We implement reasonable administrative, technical, and physical safeguards to protect your personal data from unauthorized access, alteration, 
                  disclosure, or destruction. However, no method of transmission over the Internet or electronic storage is completely secure, 
                  and we cannot guarantee absolute security.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">User Rights</h2>
                <p className="mb-4">
                  You have the right to request access to the personal information we hold about you, request corrections to inaccurate information, request deletion 
                  of your data, and request a copy of your data in a portable format, subject to applicable law. To exercise these rights, please contact us using the information below.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
                <p className="mb-4">
                  We use cookies, web beacons, and similar technologies to collect information about your interactions with our website and services. 
                  This helps us improve performance, personalize content, and analyze trends. You may disable cookies through your browser settings, 
                  but some features of our site may not function properly without them.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
                <p className="mb-4">
                  Our services are not directed to children under the age of 13 (or the minimum age of digital consent in your jurisdiction), 
                  and we do not knowingly collect personal information from them. If we become aware that we have collected personal data from a child, 
                  we will delete it promptly.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
                <p className="mb-4">
                  We may update this Privacy Policy from time to time. When we make material changes, we will notify you by updating the “Last Updated” date 
                  at the bottom of this page and, if appropriate, by sending you an email or posting a notice on our website. 
                  Your continued use of our services after any changes indicates your acceptance of the updated policy.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Contact Information</h2>
                <p className="mb-4">
                  If you have any questions about this Privacy Policy, please contact us at:
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
                  Last updated: August 10, 2025
                </p>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
