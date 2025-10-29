import Link from "next/link";
import referrals from "../../../data/referrals.json";

export const metadata = {
  title: "Buy Bitcoin | Satoshi's Path",
  description: "Compare the best platforms to buy Bitcoin safely. Find trusted exchanges, payment methods, and get started with your first Bitcoin purchase.",
};

export default function BuyBitcoinPage() {
  const exchanges = [
    {
      name: "Coinbase",
      rating: 4.5,
      pros: ["Beginner-friendly", "Insured deposits", "Easy bank transfers"],
      cons: ["Higher fees", "Limited privacy"],
      fees: "1.49% - 3.99%",
      paymentMethods: ["Bank Transfer", "Debit Card", "Credit Card"],
      countries: "100+ countries",
      logo: "🟦",
      referralLink: referrals.exchanges.coinbase
    },
    {
      name: "Kraken",
      rating: 4.7,
      pros: ["Low fees", "Advanced trading", "Strong security"],
      cons: ["More complex UI", "Slower customer support"],
      fees: "0.16% - 0.26%",
      paymentMethods: ["Bank Transfer", "Wire Transfer"],
      countries: "70+ countries",
      logo: "🟣",
      referralLink: typeof referrals.exchanges.kraken === 'string' ? referrals.exchanges.kraken : referrals.exchanges.kraken.url
    },
    {
      name: "Gemini",
      rating: 4.3,
      pros: ["Regulated", "Free withdrawals", "Security focused"],
      cons: ["Limited altcoins", "Higher spreads"],
      fees: "0.35% - 1.00%",
      paymentMethods: ["Bank Transfer", "Wire Transfer", "Debit Card"],
      countries: "30+ countries",
      logo: "🟢",
      referralLink: "https://gemini.com/share/cooper"
    },
    {
      name: "Strike",
      rating: 4.6,
      pros: ["Lightning Network", "Low fees", "Fast transfers"],
      cons: ["Limited regions", "Bitcoin only"],
      fees: "0.3% - 1.5%",
      paymentMethods: ["Bank Transfer", "Debit Card"],
      countries: "US, El Salvador, Argentina",
      logo: "⚡",
      referralLink: referrals.exchanges.strike
    },
    {
      name: "Swan Bitcoin",
      rating: 4.4,
      pros: ["DCA focused", "Educational", "Bitcoin only"],
      cons: ["No trading", "US only"],
      fees: "0.99% - 1.25%",
      paymentMethods: ["Bank Transfer"],
      countries: "US only",
      logo: "🦢",
      referralLink: referrals.exchanges.swan
    },
    {
      name: "River Financial",
      rating: 4.2,
      pros: ["Bitcoin only", "Low fees", "Security focused"],
      cons: ["US only", "No mobile app"],
      fees: "0.75% - 1.25%",
      paymentMethods: ["Bank Transfer", "Wire Transfer"],
      countries: "US only",
      logo: "🌊",
      referralLink: referrals.exchanges.river
    }
  ];

  const steps = [
    {
      number: 1,
      title: "Choose Your Platform",
      description: "Select an exchange based on your location, experience level, and preferences",
      icon: "🏪"
    },
    {
      number: 2,
      title: "Complete Verification",
      description: "Provide ID and complete KYC (Know Your Customer) verification for security",
      icon: "🆔"
    },
    {
      number: 3,
      title: "Add Payment Method",
      description: "Link your bank account, debit card, or preferred payment method",
      icon: "💳"
    },
    {
      number: 4,
      title: "Make Your Purchase",
      description: "Buy Bitcoin with your preferred amount and payment method",
      icon: "₿"
    },
    {
      number: 5,
      title: "Secure Your Bitcoin",
      description: "Transfer to your personal wallet for full control and security",
      icon: "🔒"
    }
  ];

  const paymentComparison = [
    {
      method: "Bank Transfer (ACH)",
      speed: "3-5 days",
      fees: "Low (0.5-1.5%)",
      limits: "High",
      pros: ["Lowest fees", "High limits"],
      cons: ["Slower settlement"]
    },
    {
      method: "Debit Card",
      speed: "Instant",
      fees: "Medium (1.5-3%)",
      limits: "Medium",
      pros: ["Instant purchase", "Convenient"],
      cons: ["Higher fees"]
    },
    {
      method: "Credit Card",
      speed: "Instant",
      fees: "High (3-4%)",
      limits: "Low",
      pros: ["Instant purchase"],
      cons: ["Highest fees", "Cash advance fees"]
    },
    {
      method: "Wire Transfer",
      speed: "Same day",
      fees: "Medium ($10-25)",
      limits: "Very High",
      pros: ["High limits", "Fast"],
      cons: ["Fixed fees", "Bank hours"]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">💰</span>
            TRUSTED PLATFORMS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Buy Bitcoin Safely
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Compare trusted Bitcoin exchanges and find the best platform for your needs. 
            Start your Bitcoin journey with reliable, secure, and user-friendly services.
          </p>
        </div>

        {/* How to Buy Steps */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">How to Buy Bitcoin</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-2xl">{step.icon}</span>
                </div>
                <div className="w-8 h-8 bg-orange-100 text-orange-800 rounded-full flex items-center justify-center mx-auto mb-3 font-bold">
                  {step.number}
                </div>
                <h3 className="font-semibold text-gray-900 mb-2">{step.title}</h3>
                <p className="text-gray-600 text-sm">{step.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Exchange Comparison */}
        <div className="mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">Compare Bitcoin Exchanges</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {exchanges.map((exchange, index) => (
              <div key={index} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="flex items-center gap-3 mb-4">
                  <span className="text-3xl">{exchange.logo}</span>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">{exchange.name}</h3>
                    <div className="flex items-center gap-1">
                      {[...Array(5)].map((_, i) => (
                        <span key={i} className={`text-sm ${i < Math.floor(exchange.rating) ? 'text-yellow-400' : 'text-gray-300'}`}>
                          ⭐
                        </span>
                      ))}
                      <span className="text-sm text-gray-600 ml-1">{exchange.rating}</span>
                    </div>
                  </div>
                </div>
                
                <div className="space-y-3 mb-6">
                  <div>
                    <span className="text-sm font-medium text-gray-500">Trading Fees</span>
                    <p className="text-orange-600 font-semibold">{exchange.fees}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Availability</span>
                    <p className="text-gray-700">{exchange.countries}</p>
                  </div>
                  <div>
                    <span className="text-sm font-medium text-gray-500">Payment Methods</span>
                    <div className="flex flex-wrap gap-1 mt-1">
                      {exchange.paymentMethods.map((method, i) => (
                        <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                          {method}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
                
                <div className="space-y-2 mb-4">
                  <div>
                    <h4 className="text-sm font-medium text-green-700 mb-1">Pros</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {exchange.pros.map((pro, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <span className="text-green-500">✓</span> {pro}
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-sm font-medium text-red-700 mb-1">Cons</h4>
                    <ul className="text-xs text-gray-600 space-y-1">
                      {exchange.cons.map((con, i) => (
                        <li key={i} className="flex items-center gap-1">
                          <span className="text-red-500">✗</span> {con}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
                
                <a
                  href={exchange.referralLink}
                  className="w-full bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-4 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl text-center block"
                >
                  Get Started
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Payment Methods Comparison */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8">Payment Methods Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Payment Method</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Speed</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Fees</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Limits</th>
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Best For</th>
                </tr>
              </thead>
              <tbody>
                {paymentComparison.map((payment, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">{payment.method}</td>
                    <td className="py-4 px-4 text-gray-600">{payment.speed}</td>
                    <td className="py-4 px-4 text-gray-600">{payment.fees}</td>
                    <td className="py-4 px-4 text-gray-600">{payment.limits}</td>
                    <td className="py-4 px-4">
                      <div className="flex flex-wrap gap-1">
                        {payment.pros.map((pro, i) => (
                          <span key={i} className="bg-green-100 text-green-800 px-2 py-1 rounded text-xs">
                            {pro}
                          </span>
                        ))}
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Tips */}
        <div className="bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-2xl p-8 text-white mb-12">
          <h2 className="text-2xl font-bold mb-6">Security Best Practices</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span>🔒</span> When Buying
              </h3>
              <ul className="space-y-2 text-orange-100">
                <li>• Use only reputable, regulated exchanges</li>
                <li>• Enable two-factor authentication (2FA)</li>
                <li>• Use strong, unique passwords</li>
                <li>• Verify website URLs before entering credentials</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-3 flex items-center gap-2">
                <span>🏦</span> After Buying
              </h3>
              <ul className="space-y-2 text-orange-100">
                <li>• Transfer Bitcoin to your personal wallet</li>
                <li>• Backup your seed phrase securely</li>
                <li>• Never share private keys or seed phrases</li>
                <li>• Consider hardware wallets for large amounts</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Start Your Bitcoin Journey?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Now that you know how to buy Bitcoin safely, explore our tools and strategies to maximize your Bitcoin accumulation.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/tools/dca-calculator"
                className="bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                Calculate DCA Strategy
              </Link>
              <Link
                href="/personal-strategy"
                className="border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Strategy
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}