import LiveNewsFeed from "@/components/LiveNewsFeed";
import BitcoinPriceWidget from "@/components/BitcoinPriceWidget";

export const metadata = {
  title: "Bitcoin News | Satoshi's Path",
  description: "Latest Bitcoin news, developments, and market insights from trusted sources.",
};

export default function NewsPage() {
  const newsSources = [
    {
      name: "Bitcoin Magazine",
      url: "https://bitcoinmagazine.com",
      category: "General"
    },
    {
      name: "CoinDesk Bitcoin",
      url: "https://www.coindesk.com/tag/bitcoin/",
      category: "General"
    },
    {
      name: "Bitcoin Optech",
      url: "https://bitcoinops.org",
      category: "Technical"
    },
    {
      name: "Blockstream Blog",
      url: "https://blog.blockstream.com",
      category: "Technical"
    },
    {
      name: "River Financial",
      url: "https://river.com/learn/",
      category: "Education"
    },
    {
      name: "Swan Bitcoin",
      url: "https://www.swanbitcoin.com/blog/",
      category: "Education"
    },
    {
      name: "Jameson Lopp",
      url: "https://blog.lopp.net",
      category: "Technical"
    },
    {
      name: "Block News",
      url: "https://block.xyz/news",
      category: "Development"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <section className="bg-bitcoin-orange text-white py-16">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Bitcoin News
          </h1>
          <p className="text-xl opacity-90">
            Latest Bitcoin developments and market insights
          </p>
        </div>
      </section>

      {/* Live News Feed */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <LiveNewsFeed />
        </div>
      </section>

      {/* Price Widget */}
      <section className="py-8 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <BitcoinPriceWidget />
            <div className="bg-white rounded-lg p-6 border border-gray-200">
              <h3 className="text-lg font-semibold mb-2">Market Data</h3>
              <p className="text-gray-600 mb-4">Real-time Bitcoin market information</p>
              <a 
                href="https://coinmarketcap.com/currencies/bitcoin/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-bitcoin-orange hover:underline"
              >
                View on CoinMarketCap →
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* News Sources */}
      <section className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-8">Trusted Sources</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {newsSources.map((source, index) => (
              <a
                key={index}
                href={source.url}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white border border-gray-200 rounded-lg p-6 hover:border-bitcoin-orange hover:shadow-lg transition-all duration-200"
              >
                <h3 className="font-semibold text-gray-900 mb-2">{source.name}</h3>
                <span className="text-sm text-gray-500 bg-gray-100 px-2 py-1 rounded">
                  {source.category}
                </span>
              </a>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}