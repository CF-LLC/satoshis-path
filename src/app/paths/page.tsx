import { getReferralUrl } from "@/utils/referrals";
import Link from "next/link";

export const metadata = {
  title: "Bitcoin Stacking Paths | Satoshi's Path",
  description: "Discover the best platforms and methods to stack Bitcoin - from earning rewards to automated investing. Start your Bitcoin journey today.",
};

// Bitcoin stacking methods/platforms
const stackingMethods = [
  {
    id: "personal-strategy",
    name: "My Personal Stack Strategy",
    description: "A comprehensive, step-by-step approach combining multiple methods for optimal Bitcoin accumulation. Learn my proven strategy.",
    category: "strategy",
    referralKey: "personal",
    buttonText: "View My Strategy",
    isPersonal: true
  },
  {
    id: "fold",
    name: "Fold Card",
    description: "Earn Bitcoin rewards on every purchase with the Fold debit card. Get up to 1% back in Bitcoin when you shop at your favorite stores.",
    category: "earn",
    referralKey: "fold",
    buttonText: "Join Fold"
  },
  {
    id: "strike",
    name: "Strike",
    description: "Buy Bitcoin instantly with zero fees. Lightning-fast purchases and the ability to earn Bitcoin through direct deposit and spending.",
    category: "buy",
    referralKey: "strike", 
    buttonText: "Start with Strike"
  },
  {
    id: "swan",
    name: "Swan Bitcoin",
    description: "Automate your Bitcoin savings with dollar-cost averaging. Set up recurring purchases and build your Bitcoin stack consistently over time.",
    category: "dca",
    referralKey: "swan",
    buttonText: "Start Stacking"
  },
  {
    id: "fountain",
    name: "Fountain",
    description: "Earn Bitcoin by listening to podcasts. Get rewarded in sats for discovering new content and engaging with your favorite shows.",
    category: "earn",
    referralKey: "fountain",
    buttonText: "Join Fountain"
  },
  {
    id: "bitrefill", 
    name: "Bitrefill",
    description: "Buy gift cards with Bitcoin and earn rewards. Shop at thousands of stores while stacking sats through their loyalty program.",
    category: "spend",
    referralKey: "bitrefill",
    buttonText: "Start Shopping"
  }
];

export default function PathsPage() {

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bitcoin Stacking <span className="bg-gradient-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">Paths</span>
            </h1>
            <p className="text-xl text-gray-600">
              Start earning and saving Bitcoin with these proven platforms and methods. 
              Each path offers unique ways to build your Bitcoin stack over time.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transition-all duration-300 transform hover:scale-105">
              All Methods
            </button>
            <button className="px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Earn
            </button>
            <button className="px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Buy
            </button>
            <button className="px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              DCA
            </button>
          </div>
        </div>
      </section>

      {/* Stacking Methods Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stackingMethods.map((method) => (
              <div
                key={method.id}
                className="bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 hover:border-bitcoin-orange rounded-xl p-6 hover:shadow-2xl hover:shadow-bitcoin-orange/20 transition-all duration-300 group transform hover:-translate-y-2 hover:scale-105"
              >
                {/* Category Badge & Bitcoin Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    method.category === 'earn' 
                      ? 'bg-green-100 text-green-800'
                      : method.category === 'buy'
                      ? 'bg-blue-100 text-blue-800'
                      : method.category === 'dca'
                      ? 'bg-purple-100 text-purple-800'
                      : method.category === 'strategy'
                      ? 'bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {method.category === 'strategy' ? 'PERSONAL' : method.category.toUpperCase()}
                  </span>
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white rounded-full flex items-center justify-center text-sm font-bold group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-bitcoin-orange/50 transition-all duration-300">
                    ₿
                  </div>
                </div>

                {/* Method Name */}
                <h2 className="text-xl font-bold text-black mb-3 group-hover:text-bitcoin-orange transition-colors">
                  {method.name}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {method.description}
                </p>

                {/* CTA Button */}
                {method.isPersonal ? (
                  <Link
                    href="/paths/personal-strategy"
                    className="w-full bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 text-center block shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/50 transform hover:-translate-y-1 hover:scale-105"
                  >
                    {method.buttonText}
                  </Link>
                ) : (
                  <a
                    href={getReferralUrl(method.referralKey)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 text-center block shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/50 transform hover:-translate-y-1 hover:scale-105"
                  >
                    {method.buttonText}
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="section-padding bg-subtle-pattern">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold text-black mb-4">
            Ready to Start Stacking?
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Choose the method that fits your lifestyle and start building your Bitcoin stack today. 
            Remember, consistency is key to successful Bitcoin accumulation.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/tools"
              className="bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transform hover:-translate-y-1 hover:scale-105"
            >
              Explore Tools
            </a>
            <a
              href="/about"
              className="border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-xl font-semibold hover:border-bitcoin-orange hover:text-bitcoin-orange hover:shadow-lg hover:shadow-bitcoin-orange/10 transition-all duration-300 transform hover:-translate-y-1"
            >
              Learn More
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}