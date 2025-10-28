import Link from "next/link";

export const metadata = {
  title: "Bitcoin News | Satoshi's Path",
  description: "Stay updated with the latest Bitcoin news, developments, and market insights from trusted sources.",
};

export default function NewsPage() {
  const newsSources = [
    {
      name: "Bitcoin Magazine",
      description: "The original and most respected Bitcoin publication",
      url: "https://bitcoinmagazine.com",
      rss: "https://bitcoinmagazine.com/feed",
      category: "General",
      icon: "📰"
    },
    {
      name: "CoinDesk Bitcoin",
      description: "Comprehensive Bitcoin coverage and market analysis",
      url: "https://www.coindesk.com/tag/bitcoin/",
      rss: "https://www.coindesk.com/arc/outboundfeeds/rss/",
      category: "General",
      icon: "📊"
    },
    {
      name: "Bitcoin Optech",
      description: "Technical newsletter for Bitcoin businesses and developers",
      url: "https://bitcoinops.org",
      rss: "https://bitcoinops.org/en/feed.xml",
      category: "Technical",
      icon: "⚙️"
    },
    {
      name: "Block News",
      description: "Bitcoin development and ecosystem news from Block (formerly Square)",
      url: "https://block.xyz/news",
      category: "Development",
      icon: "🔗"
    },
    {
      name: "Blockstream Blog",
      description: "Technical insights and Bitcoin infrastructure updates",
      url: "https://blog.blockstream.com",
      category: "Technical",
      icon: "🛠️"
    },
    {
      name: "River Financial Blog",
      description: "Educational Bitcoin content and market analysis",
      url: "https://river.com/learn/",
      category: "Education",
      icon: "🎓"
    },
    {
      name: "Swan Bitcoin Blog",
      description: "Bitcoin education, market insights, and DCA strategies",
      url: "https://www.swanbitcoin.com/blog/",
      category: "Education",
      icon: "🦢"
    },
    {
      name: "Jameson Lopp",
      description: "Technical Bitcoin content and security insights",
      url: "https://blog.lopp.net",
      category: "Technical",
      icon: "🔐"
    }
  ];

  const bitcoinPodcasts = [
    {
      name: "The Bitcoin Standard Podcast",
      description: "Economic and monetary insights with Saifedean Ammous",
      url: "https://saifedean.com/podcast/",
      icon: "🎧"
    },
    {
      name: "What Bitcoin Did",
      description: "Interviews with Bitcoin industry leaders",
      url: "https://www.whatbitcoindid.com/podcast",
      icon: "🎙️"
    },
    {
      name: "Stephan Livera Podcast",
      description: "Technical Bitcoin discussions and education",
      url: "https://stephanlivera.com/",
      icon: "📻"
    },
    {
      name: "Tales from the Crypt",
      description: "Bitcoin culture and technical discussions",
      url: "https://talesfromthecrypt.libsyn.com/",
      icon: "🏴‍☠️"
    }
  ];

  const categories = ["All", "General", "Technical", "Development", "Education"];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-bitcoin-orange to-orange-600 text-white section-padding">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="text-5xl mb-6">📰</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Bitcoin News & Insights
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            Stay informed with the latest Bitcoin developments, market insights, 
            and ecosystem updates from the most trusted sources in the Bitcoin space.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">🔍 Curated Sources</h2>
            <p className="opacity-90">
              Handpicked news sources, blogs, and podcasts from Bitcoin experts, 
              developers, and thought leaders you can trust.
            </p>
          </div>
        </div>
      </section>

      {/* News Sources */}
      <section className="section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              📚 News Sources & Blogs
            </h2>
            <p className="text-xl text-gray-600">
              The most reliable and insightful Bitcoin publications
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap gap-3 justify-center mb-12">
            {categories.map((category) => (
              <button
                key={category}
                className="px-4 py-2 bg-white border border-gray-300 rounded-full font-medium hover:border-bitcoin-orange hover:bg-bitcoin-orange/10 hover:text-bitcoin-orange transition-all duration-300"
              >
                {category}
              </button>
            ))}
          </div>

          {/* News Sources Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-bitcoin-orange hover:shadow-2xl hover:shadow-bitcoin-orange/20 transition-all duration-300 group transform hover:-translate-y-2"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm font-medium">
                    {source.category}
                  </span>
                  <div className="text-3xl group-hover:scale-110 transition-transform duration-300">
                    {source.icon}
                  </div>
                </div>
                
                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-bitcoin-orange transition-colors">
                  {source.name}
                </h3>
                
                <p className="text-gray-600 mb-4 leading-relaxed">
                  {source.description}
                </p>

                <div className="flex items-center justify-between">
                  <span className="text-bitcoin-orange font-semibold group-hover:underline">
                    Visit Site →
                  </span>
                  {source.rss && (
                    <span className="text-xs text-gray-500 bg-gray-100 px-2 py-1 rounded">
                      RSS Available
                    </span>
                  )}
                </div>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Bitcoin Podcasts */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              🎧 Bitcoin Podcasts
            </h2>
            <p className="text-xl text-gray-600">
              Listen to Bitcoin experts and thought leaders
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {bitcoinPodcasts.map((podcast, index) => (
              <a
                key={index}
                href={podcast.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-xl p-6 shadow-lg border border-gray-200 hover:border-bitcoin-orange hover:shadow-xl transition-all duration-300 group text-center"
              >
                <div className="text-4xl mb-4 group-hover:scale-110 transition-transform duration-300">
                  {podcast.icon}
                </div>
                
                <h3 className="text-lg font-bold text-gray-900 mb-3 group-hover:text-bitcoin-orange transition-colors">
                  {podcast.name}
                </h3>
                
                <p className="text-gray-600 text-sm leading-relaxed">
                  {podcast.description}
                </p>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Real-time News Disclaimer */}
      <section className="section-padding bg-gradient-to-r from-blue-600 to-purple-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-6">
            📡 Live News Coming Soon
          </h2>
          <p className="text-xl mb-8 opacity-90">
            We're working on implementing real-time Bitcoin news aggregation and RSS feed integration. 
            For now, bookmark these trusted sources for the latest Bitcoin updates.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-3xl mb-4">🤖</div>
              <h3 className="text-xl font-bold mb-2">Automated Aggregation</h3>
              <p className="text-sm opacity-80">RSS feed parsing and content aggregation</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-3xl mb-4">⚡</div>
              <h3 className="text-xl font-bold mb-2">Real-time Updates</h3>
              <p className="text-sm opacity-80">Live news feeds and breaking updates</p>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-xl p-6 border border-white/30">
              <div className="text-3xl mb-4">🎯</div>
              <h3 className="text-xl font-bold mb-2">Curated Content</h3>
              <p className="text-sm opacity-80">AI-filtered relevant Bitcoin news</p>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-6 text-gray-900">
            Stay Updated with Bitcoin
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            Knowledge is power in the Bitcoin space. Stay informed and make better decisions.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/tools"
              className="bg-bitcoin-orange text-white px-6 py-4 rounded-xl font-semibold hover:bg-orange-600 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Bitcoin Tools →
            </Link>
            <Link
              href="/earn"
              className="bg-gray-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-gray-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Earn Bitcoin →
            </Link>
            <Link
              href="/paths/personal-strategy"
              className="bg-green-600 text-white px-6 py-4 rounded-xl font-semibold hover:bg-green-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              My Strategy →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}