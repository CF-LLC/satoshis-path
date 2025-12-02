import PriceTracker from '@/components/PriceTracker';

export const metadata = {
  title: 'Bitcoin Price Tracker | Satoshi\'s Path',
  description: 'Real-time Bitcoin price tracking with market data, 24-hour changes, market cap, volume, and historical highs and lows.',
};

export default function PriceTrackerPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bitcoin <span className="bg-linear-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">Price Tracker</span>
            </h1>
            <p className="text-xl text-gray-600">
              Stay up-to-date with real-time Bitcoin price data, market statistics, 
              and historical performance metrics.
            </p>
          </div>
        </div>
      </section>

      {/* Price Tracker */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <PriceTracker />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-subtle-pattern">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Bitcoin Price Data</h2>
            <div className="prose text-gray-600 max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Key Metrics Explained:</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Market Cap:</strong> Total value of all Bitcoin in circulation</li>
                    <li><strong>24h Volume:</strong> Total Bitcoin traded in the last 24 hours</li>
                    <li><strong>24h Range:</strong> Highest and lowest prices in the last day</li>
                    <li><strong>Market Dominance:</strong> Bitcoin's share of total crypto market cap</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Price Analysis Tips:</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Volatility:</strong> Bitcoin prices can change rapidly</li>
                    <li><strong>Long-term View:</strong> Focus on long-term trends, not daily moves</li>
                    <li><strong>Market Cycles:</strong> Bitcoin has historically moved in 4-year cycles</li>
                    <li><strong>External Factors:</strong> News and regulations can impact price</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-bitcoin-orange/10 border border-bitcoin-orange/20 rounded-xl p-4 mt-6">
                <p className="text-sm">
                  <strong>Disclaimer:</strong> This data is for informational purposes only and should not be 
                  considered investment advice. Cryptocurrency investments are subject to market risk and 
                  price volatility. Always do your own research.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}