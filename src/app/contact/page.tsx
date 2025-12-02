'use client';

export default function ContactPage() {
  const contactOptions = [
    {
      type: 'problem',
      title: '🐛 Report a Problem',
      description: 'Found a bug or issue with the site? Let me know and I\'ll fix it ASAP.',
      mailto: 'mailto:satoshispath@gmail.com?subject=Problem Report - Satoshi\'s Path&body=Hi, I found an issue with your site:%0D%0A%0D%0APage URL: %0D%0ADescription of the problem: %0D%0A%0D%0AThank you!',
      bgColor: 'from-red-100 to-red-50',
      textColor: 'text-red-800',
      buttonColor: 'from-red-500 to-red-600'
    },
    {
      type: 'feature',
      title: '💡 Request a Feature',
      description: 'Have an idea for a new tool or improvement? I\'d love to hear about it!',
      mailto: 'mailto:satoshispath@gmail.com?subject=Feature Request - Satoshi\'s Path&body=Hi, I have a feature request for your site:%0D%0A%0D%0AFeature idea: %0D%0AWhy it would be helpful: %0D%0A%0D%0AThank you!',
      bgColor: 'from-blue-100 to-blue-50',
      textColor: 'text-blue-800',
      buttonColor: 'from-blue-500 to-blue-600'
    },
    {
      type: 'feedback',
      title: '⭐ General Feedback',
      description: 'Share your thoughts, suggestions, or just say hello!',
      mailto: 'mailto:satoshispath@gmail.com?subject=Feedback - Satoshi\'s Path&body=Hi,%0D%0A%0D%0AI wanted to share some feedback about your site:%0D%0A%0D%0A%0D%0AThank you!',
      bgColor: 'from-green-100 to-green-50',
      textColor: 'text-green-800',
      buttonColor: 'from-green-500 to-green-600'
    },
    {
      type: 'collaboration',
      title: '🤝 Collaboration',
      description: 'Want to collaborate or discuss Bitcoin projects? Let\'s connect!',
      mailto: 'mailto:satoshispath@gmail.com?subject=Collaboration Inquiry - Satoshi\'s Path&body=Hi,%0D%0A%0D%0AI\'d like to discuss a potential collaboration:%0D%0A%0D%0AProject idea: %0D%0AHow we could work together: %0D%0A%0D%0AThank you!',
      bgColor: 'from-purple-100 to-purple-50',
      textColor: 'text-purple-800',
      buttonColor: 'from-purple-500 to-purple-600'
    }
  ];

  const copyToClipboard = async (text: string) => {
    try {
      await navigator.clipboard.writeText(text);
    } catch (err) {
      console.error('Failed to copy text: ', err);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">📞</span>
            GET IN TOUCH
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Contact Me
          </h1>
          <p className="text-xl text-gray-600 mb-8">
            Choose how you'd like to reach out. Each option opens your email client with a pre-filled template.
          </p>
          
          {/* Direct Email Info */}
          <div className="bg-white rounded-2xl shadow-lg p-6 mb-8 max-w-2xl mx-auto">
            <h2 className="text-lg font-semibold text-gray-900 mb-2">📧 Direct Email</h2>
            <div className="flex items-center justify-center gap-2 mb-2">
              <code className="text-bitcoin-orange bg-gray-100 px-3 py-1 rounded">satoshispath@gmail.com</code>
              <button
                onClick={() => copyToClipboard('satoshispath@gmail.com')}
                className="text-gray-400 hover:text-bitcoin-orange transition-colors"
                title="Copy email address"
              >
                📋
              </button>
            </div>
            <p className="text-sm text-gray-600">
              You can also email me directly at this address for any inquiries!
            </p>
          </div>
        </div>

        {/* Contact Options Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactOptions.map((option) => (
            <div
              key={option.type}
              className={`bg-linear-to-br ${option.bgColor} rounded-2xl p-6 border border-gray-200 hover:shadow-lg transition-all duration-300`}
            >
              <h3 className={`text-xl font-bold ${option.textColor} mb-3`}>
                {option.title}
              </h3>
              <p className="text-gray-700 mb-6 leading-relaxed">
                {option.description}
              </p>
              <a
                href={option.mailto}
                className={`inline-flex items-center gap-2 bg-linear-to-r ${option.buttonColor} text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-1`}
              >
                Send Email
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            </div>
          ))}
        </div>

        {/* Additional Info */}
        <div className="mt-12 text-center">
          <div className="bg-white rounded-2xl shadow-lg p-6">
            <h3 className="text-lg font-semibold text-gray-900 mb-4">💬 Response Time</h3>
            <p className="text-gray-600 mb-4">
              I typically respond within 24-48 hours. For urgent issues, please mention "URGENT" in your subject line.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-semibold text-gray-900">🐛 Bug Reports</div>
                <div className="text-gray-600">Within 24 hours</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-semibold text-gray-900">💡 Feature Requests</div>
                <div className="text-gray-600">Within 48 hours</div>
              </div>
              <div className="bg-gray-50 rounded-lg p-3">
                <div className="font-semibold text-gray-900">🤝 Collaborations</div>
                <div className="text-gray-600">Within 1 week</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}