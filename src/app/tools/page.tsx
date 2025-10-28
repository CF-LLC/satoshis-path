import Link from 'next/link';

export const metadata = {
  title: "Bitcoin Tools & Utilities | Satoshi's Path",
  description: "Essential Bitcoin tools and utilities including DCA calculators, block explorers, Lightning wallets, and more to enhance your Bitcoin journey.",
};

// Bitcoin tools and utilities
const bitcoinTools = [
  // Our functional tools (internal)
  {
    id: "dca-calculator",
    name: "DCA Calculator",
    description: "Calculate your Bitcoin DCA performance over any time period with real historical data",
    url: "/tools/dca-calculator",
    icon: "📊",
    category: "calculator",
    isInternal: true
  },
  {
    id: "price-tracker",
    name: "Bitcoin Price Tracker",
    description: "Real-time Bitcoin price tracking with market data and 24-hour changes",
    url: "/tools/price-tracker",
    icon: "📈",
    category: "dashboard",
    isInternal: true
  },
  {
    id: "bitcoin-converter",
    name: "Bitcoin Unit Converter",
    description: "Convert between BTC, satoshis, mBTC, and fiat currencies with real exchange rates",
    url: "/tools/unit-converter",
    icon: "�",
    category: "utility",
    isInternal: true
  },
  {
    id: "hodl-calculator",
    name: "HODL Calculator",
    description: "Calculate Bitcoin returns if you had HODLed from any historical date",
    url: "/tools/hodl-calculator",
    icon: "💎",
    category: "calculator",
    isInternal: true
  },
  {
    id: "bitcoin-fees",
    name: "Bitcoin Fee Estimator",
    description: "Get real-time Bitcoin transaction fee recommendations based on mempool data",
    url: "/tools/fee-estimator",
    icon: "�",
    category: "utility",
    isInternal: true
  },
  
  // External tools
  {
    id: "blockstream-explorer",
    name: "Blockstream Explorer",
    description: "Explore Bitcoin blocks, transactions, and addresses with detailed information",
    url: "https://blockstream.info/",
    icon: "�",
    category: "explorer",
    isInternal: false
  },
  {
    id: "mempool-space",
    name: "Mempool.space",
    description: "Real-time Bitcoin network statistics and mempool visualizer",
    url: "https://mempool.space/",
    icon: "�",
    category: "explorer",
    isInternal: false
  },
  {
    id: "lightning-network-explorer",
    name: "Lightning Network Explorer",
    description: "Explore Lightning Network channels, nodes, and network capacity",
    url: "https://1ml.com/",
    icon: "🌐",
    category: "explorer",
    isInternal: false
  },
  {
    id: "lightning-wallets",
    name: "Lightning Wallets",
    description: "Discover the best Lightning Network wallets for instant Bitcoin payments",
    url: "https://lightningnetworkstores.com/wallets",
    icon: "⚡",
    category: "wallet",
    isInternal: false
  },
  {
    id: "bitcoin-whitepaper",
    name: "Bitcoin Whitepaper",
    description: "Read Satoshi Nakamoto's original Bitcoin whitepaper",
    url: "https://bitcoin.org/bitcoin.pdf",
    icon: "�",
    category: "education",
    isInternal: false
  },
  {
    id: "node-runner",
    name: "Node Runner Guide",
    description: "Learn how to run your own Bitcoin node with step-by-step guides",
    url: "https://node.guide/",
    icon: "�️",
    category: "education",
    isInternal: false
  }
];

// Bitcoin earning apps and opportunities
const earningApps = [
  {
    id: "zbd",
    name: "ZBD Gaming",
    description: "Level up your gaming and earn Bitcoin. Get $2 instantly when you verify your identity.",
    url: "https://zbd.link/hcHi/invite?af_sub1=25DPZ4&deep_link_value=fwb_two_for_two",
    icon: "🎮",
    bonus: "$2 Bitcoin",
    category: "gaming"
  },
  {
    id: "yotta", 
    name: "Yotta Banking",
    description: "Banking app with crypto rewards and games. Get $2 credits with code COOPER.",
    url: "https://join.withyotta.com/COOPER",
    icon: "🏦",
    bonus: "$2 Credits",
    code: "COOPER",
    category: "banking"
  },
  {
    id: "ember-fund",
    name: "Ember Fund Mining",
    description: "Bitcoin mining app - earn crypto while using your phone.",
    url: "https://emberfund.onelink.me/ljTI/jgwznb5o?mining_referrer_id=MNG8PVI6T00",
    icon: "⛏️",
    code: "MNG8PVI6T00",
    category: "mining"
  },
  {
    id: "sats-faucet",
    name: "Sats Faucet",
    description: "Free Bitcoin faucet - earn small amounts of Bitcoin regularly.",
    url: "https://satsfaucet.com/register?r=Spock",
    icon: "🚰",
    code: "Spock",
    category: "faucet"
  },
  {
    id: "cloud-mine",
    name: "Cloud Mine Crypto",
    description: "Earn crypto by tracking your sleep! 10% bonus with referral code.",
    url: "https://cloudminecrypto.com/?invite_code=V4ex9jyLXBDJG52v",
    icon: "😴",
    code: "V4ex9jyLXBDJG52v",
    category: "lifestyle"
  },
  {
    id: "kalshi",
    name: "Kalshi Predictions",
    description: "Prediction market platform. Both earn $10 when you sign up.",
    url: "https://kalshi.com/sign-up/?referral=c29a8806-fb0a-4672-98ad-a11e6ff97a96&m=true",
    icon: "🔮",
    bonus: "$10 Each",
    category: "trading"
  }
];

// Bitcoin stacking strategies and platforms
const stackingStrategies = [
  {
    id: "personal-strategy",
    name: "🎯 My Personal Stack Strategy",
    description: "A comprehensive, step-by-step approach combining multiple methods for optimal Bitcoin accumulation. Learn my proven strategy with real referral links.",
    category: "strategy",
    url: "/paths/personal-strategy",
    featured: true,
    buttonText: "View Complete Strategy"
  },
  {
    id: "strike",
    name: "Strike",
    description: "Buy Bitcoin instantly with zero fees. Lightning-fast purchases and the ability to earn Bitcoin through direct deposit.",
    category: "buy",
    url: "https://invite.strike.me/cooper",
    icon: "⚡",
    buttonText: "Start with Strike"
  },
  {
    id: "swan",
    name: "Swan Bitcoin", 
    description: "Automate your Bitcoin savings with dollar-cost averaging. Set up recurring purchases consistently over time.",
    category: "dca",
    url: "https://www.swanbitcoin.com/cooper",
    icon: "🦢",
    buttonText: "Start Stacking"
  },
  {
    id: "fold",
    name: "Fold Card",
    description: "Earn Bitcoin rewards on every purchase with the Fold debit card. Get up to 1% back in Bitcoin when you shop.",
    category: "earn",
    url: "#", // Add actual referral when available
    icon: "💳",
    buttonText: "Join Fold"
  },
  {
    id: "fountain",
    name: "Fountain",
    description: "Earn Bitcoin by listening to podcasts. Get rewarded in sats for discovering new content and engaging with shows.",
    category: "earn",
    url: "#", // Add actual referral when available
    icon: "🎧",
    buttonText: "Join Fountain"
  },
  {
    id: "bitrefill",
    name: "Bitrefill",
    description: "Buy gift cards with Bitcoin and earn rewards. Shop at thousands of stores while stacking sats through loyalty program.",
    category: "spend",
    url: "#", // Add actual referral when available
    icon: "🎁",
    buttonText: "Start Shopping"
  }
];

export default function ToolsPage() {

  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bitcoin <span className="bg-gradient-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">Tools</span>
            </h1>
            <p className="text-xl text-gray-600">
              Essential Bitcoin utilities, calculators, and resources to enhance your 
              Bitcoin journey and deepen your understanding.
            </p>
          </div>
        </div>
      </section>

      {/* Filter Pills */}
      <section className="py-8 bg-white/80 backdrop-blur-sm border-b border-gray-200/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="flex flex-wrap gap-4 justify-center">
            <button className="px-4 py-2 bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white rounded-full font-medium shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transition-all duration-300 transform hover:scale-105">
              All Tools
            </button>
            <button className="px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Calculators
            </button>
            <button className="px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Explorers
            </button>
            <button className="px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Wallets
            </button>
            <button className="px-4 py-2 bg-gray-100/80 backdrop-blur-sm text-gray-700 rounded-full font-medium hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange hover:shadow-lg transition-all duration-300 transform hover:scale-105">
              Education
            </button>
          </div>
        </div>
      </section>

      {/* Tools Grid */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {bitcoinTools.map((tool) => (
              <div
                key={tool.id}
                className="bg-white/80 backdrop-blur-sm border-2 border-gray-200/50 hover:border-bitcoin-orange rounded-xl p-6 hover:shadow-2xl hover:shadow-bitcoin-orange/20 transition-all duration-300 group transform hover:-translate-y-2 hover:scale-105"
              >
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex gap-2">
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      tool.category === 'calculator' 
                        ? 'bg-blue-100 text-blue-800'
                        : tool.category === 'wallet'
                        ? 'bg-green-100 text-green-800'
                        : tool.category === 'explorer'
                        ? 'bg-purple-100 text-purple-800'
                        : tool.category === 'dashboard'
                        ? 'bg-orange-100 text-orange-800'
                        : tool.category === 'education'
                        ? 'bg-indigo-100 text-indigo-800'
                        : 'bg-gray-100 text-gray-800'
                    }`}>
                      {tool.category.toUpperCase()}
                    </span>
                    {tool.isInternal && (
                      <span className="px-2 py-1 rounded-full text-xs font-medium bg-bitcoin-orange/20 text-bitcoin-orange">
                        BUILT-IN
                      </span>
                    )}
                  </div>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {tool.icon}
                  </div>
                </div>

                {/* Tool Name */}
                <h2 className="text-xl font-bold text-black mb-3 group-hover:text-bitcoin-orange transition-colors">
                  {tool.name}
                </h2>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {tool.description}
                </p>

                {/* CTA Button */}
                {tool.isInternal ? (
                  <Link
                    href={tool.url}
                    className="w-full bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 text-center block shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/50 transform hover:-translate-y-1 hover:scale-105"
                  >
                    Use Tool
                  </Link>
                ) : (
                  <a
                    href={tool.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gray-600 hover:bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold transition-all duration-300 text-center block shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    Visit Site ↗
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Earn Bitcoin Section */}
      <section className="section-padding bg-gradient-to-br from-green-50 to-blue-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-green-600 to-blue-600 bg-clip-text text-transparent">
              🎯 Earn Bitcoin
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Legitimate ways to earn small amounts of Bitcoin through apps, games, and services. 
              Perfect for getting your first satoshis or earning while you learn!
            </p>
          </div>

          {/* Earning Apps Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {earningApps.map((app) => (
              <div
                key={app.id}
                className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-green-400 rounded-xl p-6 hover:shadow-2xl hover:shadow-green-400/20 transition-all duration-300 group transform hover:-translate-y-2 hover:scale-105"
              >
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    app.category === 'gaming' 
                      ? 'bg-purple-100 text-purple-800'
                      : app.category === 'banking'
                      ? 'bg-blue-100 text-blue-800'
                      : app.category === 'mining'
                      ? 'bg-orange-100 text-orange-800'
                      : app.category === 'faucet'
                      ? 'bg-green-100 text-green-800'
                      : app.category === 'lifestyle'
                      ? 'bg-pink-100 text-pink-800'
                      : 'bg-yellow-100 text-yellow-800'
                  }`}>
                    {app.category.toUpperCase()}
                  </span>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {app.icon}
                  </div>
                </div>

                {/* App Name */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-green-600 transition-colors">
                  {app.name}
                </h3>

                {/* Bonus/Code Display */}
                {(app.bonus || app.code) && (
                  <div className="mb-3 flex flex-wrap gap-2">
                    {app.bonus && (
                      <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                        🎁 {app.bonus}
                      </span>
                    )}
                    {app.code && (
                      <span className="bg-gray-800 text-white px-3 py-1 rounded-lg text-sm font-mono">
                        CODE: {app.code}
                      </span>
                    )}
                  </div>
                )}

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {app.description}
                </p>

                {/* CTA Button */}
                <a
                  href={app.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full bg-gradient-to-r from-green-500 to-blue-500 text-white px-6 py-3 rounded-xl font-semibold hover:from-green-600 hover:to-blue-600 transition-all duration-300 text-center block shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                >
                  Start Earning ↗
                </a>
              </div>
            ))}
          </div>

          {/* Disclaimer */}
          <div className="mt-12 p-6 bg-yellow-50 border-l-4 border-yellow-400 rounded-r-xl">
            <div className="flex items-start">
              <div className="text-yellow-400 text-xl mr-3">⚠️</div>
              <div>
                <h4 className="font-semibold text-yellow-800 mb-2">Important Disclaimer</h4>
                <p className="text-yellow-700 text-sm leading-relaxed">
                  These apps offer small amounts of Bitcoin for activities like gaming, surveys, or referrals. 
                  While legitimate, earnings are typically modest. Always research apps thoroughly, never invest more than you can afford to lose, 
                  and remember that nothing replaces proper Bitcoin education and dollar-cost averaging for building meaningful wealth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stacking Strategies Section */}
      <section className="section-padding bg-gradient-to-br from-bitcoin-orange/5 to-orange-100/50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4 bg-gradient-to-r from-bitcoin-orange to-orange-600 bg-clip-text text-transparent">
              🎯 Bitcoin Stacking Strategies
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Proven platforms and methods to stack Bitcoin. Start with my personal strategy, 
              then explore additional platforms to maximize your Bitcoin accumulation.
            </p>
          </div>

          {/* Featured Personal Strategy */}
          <div className="mb-12">
            <div className="bg-gradient-to-r from-bitcoin-orange to-orange-600 rounded-2xl p-8 text-white shadow-2xl transform hover:scale-105 transition-all duration-300">
              <div className="text-center mb-6">
                <div className="text-5xl mb-4">🎯</div>
                <h3 className="text-3xl font-bold mb-4">My Personal Stack Strategy</h3>
                <p className="text-xl opacity-90 max-w-2xl mx-auto">
                  The exact step-by-step approach I use to stack Bitcoin efficiently. 
                  Includes all my referral links and detailed explanations of each method.
                </p>
              </div>
              <div className="text-center">
                <Link
                  href="/paths/personal-strategy"
                  className="inline-block bg-white text-bitcoin-orange px-8 py-4 rounded-xl font-bold text-lg hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  View Complete Strategy →
                </Link>
              </div>
            </div>
          </div>

          {/* Other Stacking Methods Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {stackingStrategies.filter(strategy => !strategy.featured).map((strategy) => (
              <div
                key={strategy.id}
                className="bg-white/90 backdrop-blur-sm border-2 border-gray-200/50 hover:border-bitcoin-orange rounded-xl p-6 hover:shadow-2xl hover:shadow-bitcoin-orange/20 transition-all duration-300 group transform hover:-translate-y-2 hover:scale-105"
              >
                {/* Category Badge & Icon */}
                <div className="flex items-center justify-between mb-4">
                  <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                    strategy.category === 'earn' 
                      ? 'bg-green-100 text-green-800'
                      : strategy.category === 'buy'
                      ? 'bg-blue-100 text-blue-800'
                      : strategy.category === 'dca'
                      ? 'bg-purple-100 text-purple-800'
                      : strategy.category === 'spend'
                      ? 'bg-orange-100 text-orange-800'
                      : 'bg-gray-100 text-gray-800'
                  }`}>
                    {strategy.category.toUpperCase()}
                  </span>
                  {strategy.icon && (
                    <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                      {strategy.icon}
                    </div>
                  )}
                </div>

                {/* Strategy Name */}
                <h3 className="text-xl font-bold text-black mb-3 group-hover:text-bitcoin-orange transition-colors">
                  {strategy.name}
                </h3>

                {/* Description */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  {strategy.description}
                </p>

                {/* CTA Button */}
                {strategy.url.startsWith('/') ? (
                  <Link
                    href={strategy.url}
                    className="w-full bg-gradient-to-r from-bitcoin-orange to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-center block shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    {strategy.buttonText}
                  </Link>
                ) : (
                  <a
                    href={strategy.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-full bg-gradient-to-r from-bitcoin-orange to-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-700 transition-all duration-300 text-center block shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
                  >
                    {strategy.buttonText} ↗
                  </a>
                )}
              </div>
            ))}
          </div>

          {/* Strategy Note */}
          <div className="mt-12 p-6 bg-bitcoin-orange/10 border-l-4 border-bitcoin-orange rounded-r-xl">
            <div className="flex items-start">
              <div className="text-bitcoin-orange text-xl mr-3">💡</div>
              <div>
                <h4 className="font-semibold text-bitcoin-orange mb-2">Stacking Strategy Tip</h4>
                <p className="text-gray-700 text-sm leading-relaxed">
                  The most effective approach combines multiple methods: start with my personal strategy as your foundation, 
                  then layer in additional platforms based on your lifestyle and risk tolerance. 
                  Dollar-cost averaging remains the most important principle for long-term wealth building.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="section-padding bg-subtle-pattern">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-gradient-to-r from-orange-600 to-bitcoin-orange rounded-3xl p-8 text-white text-center shadow-2xl">
            <h2 className="text-3xl font-bold mb-4">
              Start Your Bitcoin Journey
            </h2>
            <p className="text-xl mb-6 opacity-90">
              These tools will help you understand Bitcoin better, track your progress, 
              and make informed decisions on your journey to financial sovereignty.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-semibold">Calculate</div>
                <div className="text-sm opacity-80">DCA performance</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl mb-2">🔍</div>
                <div className="font-semibold">Explore</div>
                <div className="text-sm opacity-80">Blockchain data</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30 hover:bg-white/30 transition-all duration-300 transform hover:scale-105">
                <div className="text-2xl mb-2">📚</div>
                <div className="font-semibold">Learn</div>
                <div className="text-sm opacity-80">Bitcoin fundamentals</div>
              </div>
            </div>
            <a
              href="/personal-strategy"
              className="bg-white text-bitcoin-orange px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              View My Strategy
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}