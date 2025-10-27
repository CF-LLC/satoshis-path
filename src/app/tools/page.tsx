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
              href="/paths"
              className="bg-white text-bitcoin-orange px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 inline-block shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105"
            >
              Start Stacking Bitcoin
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}