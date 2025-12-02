import LiveNewsFeed from "@/components/LiveNewsFeed";
import BitcoinPriceWidget from "@/components/BitcoinPriceWidget";
import Link from "next/link";

export const metadata = {
  title: "Bitcoin News | Satoshi's Path",
  description: "Latest Bitcoin news, developments, and market insights from trusted sources.",
};

export default function NewsPage() {
  const newsCategories = [
    {
      title: "General News",
      icon: "📰",
      sources: [
        {
          name: "Bitcoin Magazine",
          url: "https://bitcoinmagazine.com",
          description: "Leading Bitcoin media outlet since 2012",
          emoji: "🎯"
        },
        {
          name: "CoinDesk Bitcoin",
          url: "https://www.coindesk.com/tag/bitcoin/",
          description: "Daily Bitcoin news and analysis",
          emoji: "📊"
        },
        {
          name: "The Block",
          url: "https://www.theblock.co/data/crypto-markets/prices",
          description: "Research and data-driven news",
          emoji: "📈"
        },
        {
          name: "Decrypt",
          url: "https://decrypt.co/bitcoin",
          description: "Accessible Bitcoin journalism",
          emoji: "🔓"
        }
      ]
    },
    {
      title: "Technical News",
      icon: "⚙️",
      sources: [
        {
          name: "Bitcoin Optech",
          url: "https://bitcoinops.org",
          description: "Technical Bitcoin development newsletter",
          emoji: "🔧"
        },
        {
          name: "Blockstream Blog",
          url: "https://blog.blockstream.com",
          description: "Bitcoin infrastructure updates",
          emoji: "⚡"
        },
        {
          name: "Jameson Lopp",
          url: "https://blog.lopp.net",
          description: "Security expert insights",
          emoji: "🔒"
        },
        {
          name: "Bitcoin Core",
          url: "https://bitcoincore.org/en/blog/",
          description: "Official Bitcoin development updates",
          emoji: "💻"
        }
      ]
    },
    {
      title: "Educational Content",
      icon: "📚",
      sources: [
        {
          name: "River Financial Learn",
          url: "https://river.com/learn/",
          description: "Comprehensive Bitcoin education",
          emoji: "🎓"
        },
        {
          name: "Swan Bitcoin Blog",
          url: "https://www.swanbitcoin.com/blog/",
          description: "Long-form Bitcoin analysis",
          emoji: "🦢"
        },
        {
          name: "Unchained Blog",
          url: "https://unchained.com/blog/",
          description: "Bitcoin custody and security insights",
          emoji: "🔗"
        },
        {
          name: "Casa Blog",
          url: "https://blog.casa.io",
          description: "Self-custody education",
          emoji: "🏠"
        }
      ]
    },
    {
      title: "Social & Community",
      icon: "💬",
      sources: [
        {
          name: "Stacker News",
          url: "https://stacker.news",
          description: "Bitcoin discussion board with Lightning tips",
          emoji: "⚡"
        },
        {
          name: "r/Bitcoin",
          url: "https://reddit.com/r/bitcoin",
          description: "Largest Bitcoin Reddit community",
          emoji: "🤖"
        },
        {
          name: "Bitcoin Twitter",
          url: "https://twitter.com/search?q=%23Bitcoin&f=live",
          description: "Real-time Bitcoin discussions",
          emoji: "🐦"
        },
        {
          name: "BitcoinTalk",
          url: "https://bitcointalk.org",
          description: "Original Bitcoin forum since 2009",
          emoji: "🗣️"
        }
      ]
    }
  ];

  const newsStats = [
    { number: "24/7", label: "Coverage", emoji: "⏰" },
    { number: "100+", label: "Sources", emoji: "📡" },
    { number: "Real-time", label: "Updates", emoji: "🔴" },
    { number: "Global", label: "Network", emoji: "🌍" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">📰</span>
            STAY INFORMED
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bitcoin Auto News
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Stay up to date with the latest Bitcoin developments, market insights, and technical updates
            from trusted sources around the world.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {newsStats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <div className="text-2xl font-bold text-bitcoin-orange mb-1">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Live Feed */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🔴</span>
              <h2 className="text-3xl font-bold text-gray-900">Live News Feed</h2>
            </div>
            <LiveNewsFeed />
          </div>
        </div>

        {/* Market Data */}
        <div className="mb-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-6">Market Overview</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <BitcoinPriceWidget />
              <div className="bg-linear-to-br from-orange-50 to-yellow-50 rounded-xl p-6 border-2 border-bitcoin-orange/20">
                <h3 className="text-lg font-bold text-gray-900 mb-2">📊 Market Resources</h3>
                <p className="text-gray-700 mb-4 text-sm">Track Bitcoin's performance with professional tools</p>
                <div className="space-y-2">
                  <a 
                    href="https://coinmarketcap.com/currencies/bitcoin/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-bitcoin-orange hover:underline font-semibold"
                  >
                    → CoinMarketCap
                  </a>
                  <a 
                    href="https://www.coingecko.com/en/coins/bitcoin" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-bitcoin-orange hover:underline font-semibold"
                  >
                    → CoinGecko
                  </a>
                  <a 
                    href="https://www.tradingview.com/symbols/BTCUSD/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="block text-sm text-bitcoin-orange hover:underline font-semibold"
                  >
                    → TradingView Charts
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* News Categories */}
        {newsCategories.map((category, idx) => (
          <div key={idx} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {category.sources.map((source, i) => (
                <a
                  key={i}
                  href={source.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 block"
                >
                  <div className="text-4xl mb-3 text-center">{source.emoji}</div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{source.name}</h3>
                  <p className="text-sm text-gray-600">{source.description}</p>
                </a>
              ))}
            </div>
          </div>
        ))}

        {/* Podcasts & Video */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🎙️</span>
            <h2 className="text-3xl font-bold text-gray-900">Audio & Video</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                name: "What Bitcoin Did",
                host: "Peter McCormack",
                description: "Interviews with Bitcoin industry leaders",
                emoji: "🎧",
                link: "https://whatbitcoindid.com"
              },
              {
                name: "The Bitcoin Standard Podcast",
                host: "Saifedean Ammous",
                description: "Bitcoin economics and philosophy",
                emoji: "📻",
                link: "https://saifedean.com/podcast"
              },
              {
                name: "Bitcoin Magazine on YouTube",
                host: "Bitcoin Magazine",
                description: "Videos, interviews, and conference coverage",
                emoji: "📺",
                link: "https://youtube.com/@BitcoinMagazine"
              },
              {
                name: "Tales from the Crypt",
                host: "Marty Bent",
                description: "Bitcoin-focused interviews",
                emoji: "🎤",
                link: "https://tftc.io/podcast/"
              },
              {
                name: "Stephan Livera Podcast",
                host: "Stephan Livera",
                description: "Austrian economics and Bitcoin",
                emoji: "🎙️",
                link: "https://stephanlivera.com"
              },
              {
                name: "Simply Bitcoin",
                host: "Nico & Matt",
                description: "Daily Bitcoin news and analysis",
                emoji: "▶️",
                link: "https://www.youtube.com/@SimplyBitcoin"
              }
            ].map((podcast, i) => (
              <a
                key={i}
                href={podcast.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all"
              >
                <div className="text-4xl mb-3 text-center">{podcast.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{podcast.name}</h3>
                <p className="text-xs text-gray-600 mb-2">Host: {podcast.host}</p>
                <p className="text-sm text-gray-700">{podcast.description}</p>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-linear-to-r from-bitcoin-orange to-orange-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Knowledge is power in the Bitcoin space. Stay informed with the latest developments
            and make better decisions on your Bitcoin journey.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/personal-strategy"
              className="bg-white text-bitcoin-orange px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Build Your Strategy
            </Link>
            <Link
              href="/community"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Join Community
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}