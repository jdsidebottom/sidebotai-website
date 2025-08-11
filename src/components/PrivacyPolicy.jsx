import React from 'react'

const PrivacyPolicy = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-900 via-blue-900 to-purple-900">
      <div className="container mx-auto px-6 py-12">
        <div className="max-w-4xl mx-auto bg-white/5 backdrop-blur-sm rounded-lg p-8">
          <h1 className="text-4xl font-bold text-white mb-8">Privacy Policy</h1>
          
          <div className="prose prose-invert max-w-none">
            <div className="space-y-6 text-white/80">
              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information We Collect</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Describe what types of personal information you collect from users, 
                  such as contact information, usage data, cookies, etc.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">How We Use Your Information</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain how you use the collected information, such as to provide 
                  services, improve user experience, communicate with users, etc.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Information Sharing</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Describe when and with whom you share user information, including 
                  third-party service providers, legal requirements, etc.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Data Security</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain the security measures you take to protect user data and 
                  any limitations of these measures.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">User Rights</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Describe user rights regarding their personal data, such as access, 
                  correction, deletion, and data portability rights.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Cookies and Tracking</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain your use of cookies, analytics tools, and other tracking 
                  technologies.]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Children's Privacy</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Include information about how you handle data from users under 13 
                  (or applicable age in your jurisdiction).]
                </p>
              </section>

              <section>
                <h2 className="text-2xl font-semibold text-white mb-4">Changes to This Policy</h2>
                <p className="mb-4">
                  [PLACEHOLDER: Explain how you will notify users of changes to the privacy policy.]
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
                  Last updated: [PLACEHOLDER: Insert date when privacy policy was last updated]
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
