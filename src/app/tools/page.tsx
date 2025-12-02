'use client';

import Link from 'next/link';
import { useState } from 'react';

// TypeScript interfaces
interface BitcoinTool {
  id: string;
  name: string;
  description: string;
  url: string;
  icon: string;
  category: string;
  isInternal: boolean;
  tags?: string[];
  featured?: boolean;
  bonus?: string;
  code?: string;
  difficulty?: 'Easy' | 'Medium' | 'Advanced';
}

// Enhanced tool categories with better organization
const toolCategories = {
  calculators: {
    name: "Calculators & Analytics",
    icon: "📊",
    color: "blue",
    description: "Calculate Bitcoin performance, fees, and conversions"
  },
  tracking: {
    name: "Price & Market Data",
    icon: "📈", 
    color: "green",
    description: "Real-time prices, charts, and market analysis"
  },
  blockchain: {
    name: "Blockchain Tools",
    icon: "🔍",
    color: "purple", 
    description: "Explore transactions, blocks, and addresses"
  },
  wallets: {
    name: "Wallet & Security",
    icon: "🔐",
    color: "orange",
    description: "Wallet tools, security, and hardware guides"
  },
  education: {
    name: "Learn & Explore",
    icon: "📚",
    color: "indigo",
    description: "Educational resources and guides"
  },
  earning: {
    name: "Earn & Opportunities",
    icon: "💰",
    color: "emerald",
    description: "Legitimate ways to earn your first Bitcoin"
  }
};

// Bitcoin tools array
const bitcoinTools: BitcoinTool[] = [
  // Calculators & Analytics
  {
    id: "dca-calculator",
    name: "DCA Calculator",
    description: "Calculate Bitcoin dollar-cost averaging performance with real historical data. Compare different investment strategies and timeframes.",
    url: "/tools/dca-calculator",
    icon: "📊",
    category: "calculators",
    isInternal: true,
    tags: ["DCA", "Historical", "Performance"],
    featured: true
  },
  {
    id: "hodl-calculator", 
    name: "HODL Calculator",
    description: "Calculate Bitcoin returns if you had HODLed from any historical date. See what your investment would be worth today.",
    url: "/tools/hodl-calculator",
    icon: "💎",
    category: "calculators", 
    isInternal: true,
    tags: ["HODL", "Returns", "Historical"]
  },
  {
    id: "bitcoin-converter",
    name: "Bitcoin Unit Converter", 
    description: "Convert between BTC, satoshis, mBTC, and fiat currencies with real-time exchange rates and precise calculations.",
    url: "/tools/unit-converter",
    icon: "🔄",
    category: "calculators",
    isInternal: true,
    tags: ["Conversion", "Units", "Fiat"]
  },
  {
    id: "bitcoin-fees",
    name: "Fee Estimator",
    description: "Get real-time Bitcoin transaction fee recommendations based on current mempool data and priority levels.",
    url: "/tools/fee-estimator", 
    icon: "⚡",
    category: "calculators",
    isInternal: true,
    tags: ["Fees", "Mempool", "Transactions"]
  },

  // Price & Market Data
  {
    id: "price-tracker",
    name: "Live Price Tracker",
    description: "Real-time Bitcoin price tracking with market data, 24-hour changes, and interactive charts.",
    url: "/tools/price-tracker",
    icon: "📈",
    category: "tracking",
    isInternal: true,
    tags: ["Price", "Live", "Charts"],
    featured: true
  },
  {
    id: "bitcoin-news",
    name: "Live Bitcoin News",
    description: "Real-time Bitcoin news feed with auto-updates, market analysis, and community discussions.",
    url: "/news",
    icon: "📰",
    category: "tracking", 
    isInternal: true,
    tags: ["News", "Live", "Market"]
  },

  // Blockchain Tools
  {
    id: "wallet-analyzer",
    name: "Wallet Analyzer",
    description: "Analyze any Bitcoin wallet address with real blockchain data. View transaction history, balance, and activity patterns.",
    url: "/wallet-analyzer",
    icon: "🔍",
    category: "blockchain",
    isInternal: true,
    tags: ["Analysis", "Blockchain", "Addresses"],
    featured: true
  },
  {
    id: "blockstream-explorer",
    name: "Blockstream Explorer",
    description: "Professional Bitcoin block explorer with detailed transaction data, mempool visualization, and Lightning Network info.",
    url: "https://blockstream.info/",
    icon: "🔗",
    category: "blockchain",
    isInternal: false,
    tags: ["Explorer", "Professional", "Lightning"]
  },
  {
    id: "mempool-space",
    name: "Mempool.space",
    description: "Beautiful Bitcoin mempool visualizer with real-time fee estimates, transaction tracking, and network statistics.",
    url: "https://mempool.space/",
    icon: "🌊",
    category: "blockchain", 
    isInternal: false,
    tags: ["Mempool", "Visualization", "Fees"]
  },

  // Wallet & Security
  {
    id: "hardware-wallets",
    name: "Hardware Wallet Guide",
    description: "Compare the best hardware wallets for Bitcoin storage. Reviews, setup guides, and security best practices.",
    url: "/decentralized-wallet",
    icon: "🔐",
    category: "wallets",
    isInternal: true,
    tags: ["Hardware", "Security", "Storage"],
    featured: true
  },

  // Education
  {
    id: "bitcoin-whitepaper",
    name: "Bitcoin Whitepaper",
    description: "Read Satoshi Nakamoto's original Bitcoin whitepaper - the foundational document that started the revolution.",
    url: "https://bitcoin.org/bitcoin.pdf",
    icon: "📜",
    category: "education",
    isInternal: false,
    tags: ["Whitepaper", "Satoshi", "Foundational"]
  },
  {
    id: "rabbit-hole",
    name: "Bitcoin Rabbit Hole",
    description: "Dive deep into Bitcoin with curated educational content, advanced concepts, and comprehensive learning paths.",
    url: "/rabbit-hole",
    icon: "🐰",
    category: "education",
    isInternal: true,
    tags: ["Learning", "Advanced", "Deep Dive"]
  },
  {
    id: "node-runner",
    name: "Run a Bitcoin Node",
    description: "Complete guide to running your own Bitcoin node. Step-by-step tutorials for sovereignty and network support.",
    url: "https://node.guide/",
    icon: "🖥️",
    category: "education",
    isInternal: false,
    tags: ["Node", "Sovereignty", "Network"]
  },
  {
    id: "popular-videos",
    name: "Popular Bitcoin Videos",
    description: "Curated collection of the most important Bitcoin videos, documentaries, and educational content.",
    url: "/videos",
    icon: "📺",
    category: "education",
    isInternal: true,
    tags: ["Videos", "Documentary", "Popular"]
  },
  {
    id: "buy-bitcoin-guide",
    name: "Buy Bitcoin Guide",
    description: "Complete guide on how to buy Bitcoin safely. Compare exchanges, methods, and best practices for beginners.",
    url: "/buy-bitcoin",
    icon: "💰",
    category: "education",
    isInternal: true,
    tags: ["Buying", "Exchanges", "Guide"],
    featured: true
  },

  // Earning & Opportunities
  {
    id: "zbd-gaming",
    name: "ZBD Gaming",
    description: "Level up your gaming and earn Bitcoin. Get $2 instantly when you verify your identity. Play games while stacking sats.",
    url: "https://zbd.link/hcHi/invite?af_sub1=25DPZ4&deep_link_value=fwb_two_for_two",
    icon: "🎮",
    category: "earning",
    isInternal: false,
    tags: ["Gaming", "$2 Bonus", "Instant"],
    bonus: "$2 Bitcoin",
    difficulty: "Easy"
  },
  {
    id: "yotta-banking",
    name: "Yotta Banking", 
    description: "Banking app with crypto rewards and prize games. Get $2 credits with referral code COOPER. Save and earn simultaneously.",
    url: "https://join.withyotta.com/COOPER",
    icon: "🏦",
    category: "earning",
    isInternal: false,
    tags: ["Banking", "$2 Credits", "Prizes"],
    bonus: "$2 Credits",
    code: "COOPER",
    difficulty: "Easy"
  },
  {
    id: "sats-faucet",
    name: "Sats Faucet",
    description: "Reliable Bitcoin faucet with hourly claims. Perfect for learning about Bitcoin transactions and getting your first satoshis.",
    url: "https://satsfaucet.com/register?r=Spock", 
    icon: "🚰",
    category: "earning",
    isInternal: false,
    tags: ["Faucet", "Hourly", "Learning"],
    code: "Spock",
    difficulty: "Easy"
  },
  {
    id: "cloud-mine",
    name: "Cloud Mine Crypto",
    description: "Earn crypto by tracking your sleep! Passive earning while you rest with 10% referral bonus. Health meets wealth building.",
    url: "https://cloudminecrypto.com/?invite_code=V4ex9jyLXBDJG52v",
    icon: "😴",
    category: "earning",
    isInternal: false,
    tags: ["Sleep Tracking", "Passive", "10% Bonus"],
    code: "V4ex9jyLXBDJG52v",
    difficulty: "Easy"
  },
  {
    id: "ember-mining",
    name: "Ember Fund Mining",
    description: "Mobile Bitcoin mining simulation. Earn crypto while using your phone with background operation and referral rewards.",
    url: "https://emberfund.onelink.me/ljTI/jgwznb5o?mining_referrer_id=MNG8PVI6T00",
    icon: "⛏️",
    category: "earning",
    isInternal: false,
    tags: ["Mobile Mining", "Background", "Simulation"],
    code: "MNG8PVI6T00",
    difficulty: "Medium"
  },
  {
    id: "kalshi-predictions",
    name: "Kalshi Predictions",
    description: "Prediction market platform where you can earn by forecasting real-world events. $10 signup bonus for accurate predictions.",
    url: "https://kalshi.com/sign-up/?referral=c29a8806-fb0a-4672-98ad-a11e6ff97a96&m=true",
    icon: "🔮",
    category: "earning",
    isInternal: false,
    tags: ["Predictions", "$10 Bonus", "Markets"],
    bonus: "$10 Bonus",
    difficulty: "Advanced"
  }
];

export default function ToolsPage() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  // Enhanced filter function with better search capabilities
  const filteredTools = bitcoinTools.filter(tool => {
    const matchesCategory = activeCategory === 'all' || tool.category === activeCategory;
    
    if (searchQuery.trim() === '') {
      return matchesCategory;
    }
    
    const searchLower = searchQuery.toLowerCase();
    const matchesSearch = 
      tool.name.toLowerCase().includes(searchLower) ||
      tool.description.toLowerCase().includes(searchLower) ||
      tool.tags?.some(tag => tag.toLowerCase().includes(searchLower)) ||
      tool.bonus?.toLowerCase().includes(searchLower) ||
      tool.code?.toLowerCase().includes(searchLower) ||
      tool.difficulty?.toLowerCase().includes(searchLower) ||
      toolCategories[tool.category as keyof typeof toolCategories]?.name.toLowerCase().includes(searchLower);
    
    return matchesCategory && matchesSearch;
  });

  // Clear search when category changes
  const handleCategoryChange = (category: string) => {
    setActiveCategory(category);
    setSearchQuery(''); // Clear search to show all tools in the new category
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="bg-linear-to-r from-bitcoin-orange to-orange-600 text-white py-20">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center">
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm text-white px-6 py-3 rounded-full text-sm font-semibold mb-6">
              <span className="text-2xl">🛠️</span>
              BITCOIN TOOLS HUB
            </div>
            <h1 className="text-5xl md:text-6xl font-bold mb-6">
              Essential Bitcoin <span className="text-yellow-200">Tools</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed max-w-4xl mx-auto">
              Comprehensive collection of Bitcoin calculators, analyzers, and essential tools. 
              Everything you need for your Bitcoin journey in one place.
            </p>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-2xl mx-auto">
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🔧</div>
                <div className="text-sm font-medium">Professional Tools</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">📊</div>
                <div className="text-sm font-medium">Live Data</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">🔐</div>
                <div className="text-sm font-medium">Secure & Private</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-lg p-3 text-center">
                <div className="text-2xl mb-1">⚡</div>
                <div className="text-sm font-medium">Lightning Fast</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Tools Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4">
          {/* Enhanced Search and Filter */}
          <div className="mb-12">
            {/* Search Bar */}
            <div className="mb-6">
              <div className="relative max-w-2xl mx-auto">
                <input
                  type="text"
                  placeholder="Search tools by name, category, features, or bonus codes..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full px-6 py-4 pl-14 text-lg border-2 border-gray-200 rounded-2xl focus:ring-2 focus:ring-bitcoin-orange focus:border-bitcoin-orange shadow-lg transition-all duration-300"
                />
                <div className="absolute left-5 top-1/2 transform -translate-y-1/2 text-gray-400 text-xl">
                  🔍
                </div>
                {searchQuery && (
                  <button
                    onClick={() => setSearchQuery('')}
                    className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600 text-xl"
                  >
                    ✕
                  </button>
                )}
              </div>
              {searchQuery && (
                <div className="text-center mt-3 text-gray-600">
                  Found {filteredTools.length} tool{filteredTools.length !== 1 ? 's' : ''} matching "{searchQuery}"
                </div>
              )}
            </div>
            
            {/* Category Filter */}
            <div className="flex flex-wrap gap-2 sm:gap-3 justify-center">
              <button
                onClick={() => handleCategoryChange('all')}
                className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 border-2 text-xs sm:text-base whitespace-nowrap ${
                  activeCategory === 'all'
                    ? 'bg-bitcoin-orange text-white border-bitcoin-orange shadow-lg scale-105'
                    : 'bg-white text-gray-700 border-gray-200 hover:border-bitcoin-orange hover:bg-bitcoin-orange/5 hover:scale-105'
                }`}
              >
                🛠️ All Tools ({bitcoinTools.length})
              </button>
              {Object.entries(toolCategories).map(([key, category]) => {
                const categoryCount = bitcoinTools.filter(tool => tool.category === key).length;
                return (
                  <button
                    key={key}
                    onClick={() => handleCategoryChange(key)}
                    className={`px-4 sm:px-6 py-2 sm:py-3 rounded-xl font-semibold transition-all duration-300 border-2 text-xs sm:text-base whitespace-nowrap ${
                      activeCategory === key
                        ? 'bg-bitcoin-orange text-white border-bitcoin-orange shadow-lg scale-105'
                        : 'bg-white text-gray-700 border-gray-200 hover:border-bitcoin-orange hover:bg-bitcoin-orange/5 hover:scale-105'
                    }`}
                  >
                    {category.icon} {category.name} ({categoryCount})
                  </button>
                );
              })}
            </div>
          </div>

          {/* Tools Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTools.map((tool) => (
              <div
                key={tool.id}
                className="group bg-white rounded-2xl border-2 border-gray-200 hover:border-bitcoin-orange hover:shadow-xl hover:-translate-y-2 transition-all duration-300"
              >
                <div className="p-6">
                  {/* Header */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="flex items-center gap-2">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        tool.category === 'calculators' ? 'bg-blue-100 text-blue-800' :
                        tool.category === 'tracking' ? 'bg-green-100 text-green-800' :
                        tool.category === 'blockchain' ? 'bg-purple-100 text-purple-800' :
                        tool.category === 'wallets' ? 'bg-orange-100 text-orange-800' :
                        tool.category === 'education' ? 'bg-indigo-100 text-indigo-800' :
                        'bg-emerald-100 text-emerald-800'
                      }`}>
                        {toolCategories[tool.category as keyof typeof toolCategories]?.name}
                      </span>
                      {tool.featured && (
                        <span className="px-2 py-1 bg-yellow-100 text-yellow-800 text-xs font-medium rounded-full">
                          ⭐ Featured
                        </span>
                      )}
                    </div>
                    <div className="text-2xl">{tool.icon}</div>
                  </div>

                  {/* Content */}
                  <h3 className="font-bold text-gray-900 mb-2 text-lg">{tool.name}</h3>
                  <p className="text-gray-600 text-sm mb-4 leading-relaxed">{tool.description}</p>

                  {/* Tags */}
                  {tool.tags && (
                    <div className="flex flex-wrap gap-1 mb-4">
                      {tool.tags.slice(0, 3).map((tag, index) => (
                        <span key={index} className="px-2 py-1 bg-gray-100 text-gray-700 text-xs rounded-full">
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  {/* Bonus/Code Info */}
                  {(tool.bonus || tool.code) && (
                    <div className="space-y-1 mb-4 p-3 bg-green-50 rounded-lg border border-green-200">
                      {tool.bonus && (
                        <div className="text-sm font-medium text-green-700">
                          🎁 {tool.bonus}
                        </div>
                      )}
                      {tool.code && (
                        <div className="text-sm text-green-600">
                          CODE: <code className="bg-green-100 px-1 rounded text-xs font-mono">{tool.code}</code>
                        </div>
                      )}
                    </div>
                  )}

                  {/* Action Button */}
                  {tool.isInternal ? (
                    <Link
                      href={tool.url}
                      className="block w-full text-center bg-linear-to-r from-bitcoin-orange to-orange-600 hover:from-orange-600 hover:to-bitcoin-orange text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      Use Tool →
                    </Link>
                  ) : (
                    <a
                      href={tool.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="block w-full text-center bg-linear-to-r from-bitcoin-orange to-orange-600 hover:from-orange-600 hover:to-bitcoin-orange text-white font-semibold py-3 px-4 rounded-xl transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                    >
                      Visit Tool ↗
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* Enhanced No Results */}
          {filteredTools.length === 0 && (
            <div className="text-center py-16 bg-white rounded-2xl border-2 border-gray-100">
              <div className="text-6xl mb-6">🔍</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">
                {searchQuery ? `No tools found for "${searchQuery}"` : 'No tools in this category'}
              </h3>
              <div className="space-y-3 max-w-md mx-auto">
                <p className="text-gray-600">Try searching for:</p>
                <div className="flex flex-wrap gap-2 justify-center">
                  {['calculator', 'price', 'wallet', 'faucet', 'earning', 'news'].map(suggestion => (
                    <button
                      key={suggestion}
                      onClick={() => setSearchQuery(suggestion)}
                      className="px-3 py-1 bg-gray-100 hover:bg-bitcoin-orange hover:text-white text-gray-700 rounded-full text-sm transition-colors duration-200"
                    >
                      {suggestion}
                    </button>
                  ))}
                </div>
                <button
                  onClick={() => {
                    setSearchQuery('');
                    setActiveCategory('all');
                  }}
                  className="inline-block mt-4 px-6 py-2 bg-bitcoin-orange text-white rounded-xl hover:bg-orange-600 transition-colors duration-200"
                >
                  Show All Tools
                </button>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Personal Strategy CTA */}
      <section className="py-16 bg-linear-to-br from-bitcoin-orange/10 to-orange-200/20">
        <div className="max-w-4xl mx-auto px-4">
          <div className="bg-linear-to-r from-bitcoin-orange to-orange-600 rounded-3xl p-8 text-white text-center shadow-2xl">
            <div className="text-5xl mb-4">🎯</div>
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to Start Your Bitcoin Journey?
            </h2>
            <p className="text-xl mb-8 opacity-90 leading-relaxed">
              Get my complete step-by-step Bitcoin accumulation strategy. Learn exactly how I stack sats, 
              which tools I use daily, and access all my referral links for maximum benefits.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-2xl mb-2">📊</div>
                <div className="font-semibold">Calculate & Track</div>
                <div className="text-sm opacity-80">DCA performance & goals</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-2xl mb-2">🎯</div>
                <div className="font-semibold">Earn & Stack</div>
                <div className="text-sm opacity-80">Multiple income streams</div>
              </div>
              <div className="bg-white/20 backdrop-blur-sm rounded-xl p-4 border border-white/30">
                <div className="text-2xl mb-2">📚</div>
                <div className="font-semibold">Learn & Grow</div>
                <div className="text-sm opacity-80">Continuous education</div>
              </div>
            </div>

            <Link
              href="/personal-strategy"
              className="inline-flex items-center gap-3 bg-white/20 backdrop-blur-sm border border-white/30 hover:border-white/50 px-8 py-4 rounded-2xl font-semibold text-lg transition-all duration-300 hover:bg-white/30 hover:shadow-xl hover:-translate-y-1"
            >
              View My Complete Strategy
              <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}