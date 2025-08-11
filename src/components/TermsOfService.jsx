import React, { useEffect } from 'react'

const TermsOfService = () => {
  useEffect(() => {
    // Scroll to top with a slight delay to ensure the component is rendered
    // and account for the fixed header
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: 'smooth' })
    }, 100)
  }, [])

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6 pt-32 pb-12">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Terms of Service</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Acceptance of Terms</h2>
                <p className="mb-4">
                  By accessing or using the services provided by Sidebot AI Labs, LLC (“we,” “our,” or “us”), you agree to be bound by these Terms of Service and our Privacy Policy. 
                  If you do not agree to these terms, you may not use our services. You must be at least 18 years of age, or the legal age of majority in your jurisdiction, to use our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Description of Services</h2>
                <p className="mb-4">
                  We provide custom software development, AI-powered solutions, consulting, and prototyping services. 
                  Services may include, but are not limited to, design, coding, deployment, optimization, and integration of AI-based applications, as well as business consulting related to technology and automation.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">User Responsibilities</h2>
                <p className="mb-4">
                  You agree to provide accurate, current, and complete information when using our services. 
                  You are responsible for your own actions and for complying with all applicable local, state, national, and international laws and regulations.
                  You are responsible for ensuring you have the necessary rights to any data or materials you provide to us.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Prohibited Uses</h2>
                <p className="mb-4">
                  You may not use our services for any unlawful, abusive, or fraudulent purpose, including but not limited to:
                  engaging in illegal activities, transmitting harmful code, harassing others, sending unsolicited spam, or infringing on intellectual property rights. 
                  We reserve the right to suspend or terminate accounts that violate these rules.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Intellectual Property</h2>
                <p className="mb-4">
                  All content, trademarks, designs, code, and other intellectual property created by us remain our property unless otherwise agreed in writing.
                  Any deliverables created under a contract will be subject to the ownership terms specified in that agreement. 
                  You retain rights to your own content, but grant us a license to use it as needed to perform our services.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Payment Terms</h2>
                <p className="mb-4">
                  All fees for our services will be outlined in a separate agreement or invoice. 
                  Payments must be made in accordance with the payment schedule provided. 
                  We accept payments via credit card, ACH, or other approved methods. 
                  Unless otherwise stated, all payments are non-refundable once work has commenced, except as required by law.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Service Availability</h2>
                <p className="mb-4">
                  We strive to provide continuous and reliable service, but we do not guarantee uninterrupted availability. 
                  We may modify, suspend, or discontinue any aspect of the service at any time without prior notice.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Limitation of Liability</h2>
                <p className="mb-4">
                  To the maximum extent permitted by law, Sidebot AI Labs, LLC is not liable for any indirect, incidental, 
                  special, or consequential damages arising out of or related to your use of our services. 
                  Our total liability for any claim will not exceed the amount you paid for the service in question.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Indemnification</h2>
                <p className="mb-4">
                  You agree to indemnify, defend, and hold harmless Sidebot AI Labs, LLC and its affiliates, employees, and contractors 
                  from any claims, damages, liabilities, and expenses arising from your use of our services or violation of these Terms.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Termination</h2>
                <p className="mb-4">
                  Either party may terminate the service relationship at any time, with or without cause, upon written notice. 
                  Upon termination, all outstanding fees become immediately due, and your right to use our services will cease.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Governing Law</h2>
                <p className="mb-4">
                  These Terms of Service are governed by and construed in accordance with the laws of the State of Arizona, 
                  without regard to its conflict of laws principles. Any disputes shall be resolved in the state or federal courts located in Maricopa County, Arizona.
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to Terms</h2>
                <p className="mb-4">
                  We may update these Terms of Service from time to time. 
                  If we make material changes, we will notify you by posting the updated terms on our website and updating the “Last Updated” date. 
                  Continued use of our services after such changes constitutes your acceptance of the new terms.
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

export default TermsOfService
