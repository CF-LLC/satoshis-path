import Link from "next/link";

export const metadata = {
  title: "About | Satoshi's Path",
  description: "Learn about Satoshi's Path mission to help people stack Bitcoin through education, tools, and trusted referral links.",
};

export default function AboutPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="py-16 bg-gradient-to-b from-gray-50 to-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
            About <span className="text-bitcoin-orange">Satoshi's Path</span>
          </h1>
          <p className="text-xl text-gray-600">
            Your trusted guide to stacking Bitcoin safely and effectively
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-bitcoin-orange text-white rounded-full text-2xl font-bold mb-6">
              ₿
            </div>
            <h2 className="text-3xl font-bold text-black mb-6">Our Mission</h2>
            <p className="text-lg text-gray-600 mb-8">
              We believe Bitcoin represents a fundamental shift towards financial sovereignty and freedom. 
              Our mission is to educate and empower people to accumulate Bitcoin through proven, sustainable methods.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <div className="text-center">
              <div className="bg-bitcoin-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bitcoin-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Education First</h3>
              <p className="text-gray-600">
                We provide clear, unbiased information about different Bitcoin stacking methods and their trade-offs.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-bitcoin-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bitcoin-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Trusted Partners</h3>
              <p className="text-gray-600">
                We only recommend platforms and services we trust and would use ourselves for stacking Bitcoin.
              </p>
            </div>

            <div className="text-center">
              <div className="bg-bitcoin-orange/10 w-12 h-12 rounded-lg flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-bitcoin-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-black mb-2">Practical Tools</h3>
              <p className="text-gray-600">
                We build and curate tools that help you make informed decisions about your Bitcoin stacking strategy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Bitcoin Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Why We Focus on Bitcoin
          </h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p className="mb-6">
              While there are thousands of cryptocurrencies, we focus exclusively on Bitcoin for several key reasons:
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Proven Track Record</h3>
                <p>
                  Bitcoin has operated continuously for over 14 years without downtime, 
                  proving its resilience and reliability as a decentralized network.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Fixed Supply</h3>
                <p>
                  With a maximum supply of 21 million coins, Bitcoin is the first truly 
                  scarce digital asset, making it an excellent store of value.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Network Effects</h3>
                <p>
                  Bitcoin has the largest network of users, developers, and infrastructure, 
                  creating powerful network effects that strengthen over time.
                </p>
              </div>
              <div className="bg-white p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-black mb-3">Institutional Adoption</h3>
                <p>
                  Major corporations and financial institutions are adding Bitcoin to their 
                  balance sheets, validating its role as digital gold.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Transparency Section */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-black text-center mb-12">
            Our Commitment to Transparency
          </h2>
          <div className="bg-gray-50 rounded-lg p-8">
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Referral Disclosure</h3>
                <p className="text-gray-600">
                  This site contains referral links that may provide us with a commission when you 
                  sign up for services. These referrals help support the site and allow us to provide 
                  free educational content. We only recommend services we trust and believe provide value.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Not Financial Advice</h3>
                <p className="text-gray-600">
                  The information provided on this site is for educational purposes only and should not 
                  be considered financial advice. Always do your own research and consult with qualified 
                  professionals before making investment decisions.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-black mb-2">Open Source</h3>
                <p className="text-gray-600">
                  This website is open source and available on GitHub. We believe in transparency and 
                  welcome contributions from the Bitcoin community to improve our educational resources.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Getting Started CTA */}
      <section className="py-16 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Ready to Start Your Bitcoin Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Explore our stacking methods and find the approach that works best for you.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/personal-strategy"
              className="bg-bitcoin-orange text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-orange-600 transition-colors"
            >
              View My Strategy
            </Link>
            <Link
              href="/tools"
              className="border-2 border-white text-white px-8 py-4 rounded-lg text-lg font-semibold hover:bg-white hover:text-black transition-colors"
            >
              Check Out Tools
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-2xl font-bold text-black mb-6">Get in Touch</h2>
          <p className="text-gray-600 mb-8">
            Have questions, suggestions, or want to contribute? We'd love to hear from you.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="https://twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-bitcoin-orange transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
              </svg>
            </a>
            <a
              href="https://github.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-400 hover:text-bitcoin-orange transition-colors"
            >
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}