import UnitConverter from '@/components/UnitConverter';

export const metadata = {
  title: 'Bitcoin Unit Converter | Satoshi\'s Path',
  description: 'Convert between Bitcoin units (BTC, mBTC, μBTC, satoshis) and fiat currencies with real-time exchange rates.',
};

export default function UnitConverterPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bitcoin <span className="bg-linear-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">Unit Converter</span>
            </h1>
            <p className="text-xl text-gray-600">
              Easily convert between Bitcoin units and fiat currencies with real-time exchange rates. 
              Perfect for understanding Bitcoin denominations.
            </p>
          </div>
        </div>
      </section>

      {/* Unit Converter */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto container-padding">
          <UnitConverter />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-subtle-pattern">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Bitcoin Units</h2>
            <div className="prose text-gray-600 max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Bitcoin Unit Breakdown:</h3>
                  <div className="space-y-3 text-sm">
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="font-semibold">1 Bitcoin (BTC)</div>
                      <div className="text-gray-500">= 100,000,000 satoshis</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="font-semibold">1 Millibitcoin (mBTC)</div>
                      <div className="text-gray-500">= 100,000 satoshis</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="font-semibold">1 Microbitcoin (μBTC)</div>
                      <div className="text-gray-500">= 100 satoshis</div>
                    </div>
                    <div className="border border-gray-200 rounded-lg p-3">
                      <div className="font-semibold">1 Satoshi (sat)</div>
                      <div className="text-gray-500">= smallest Bitcoin unit</div>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Why Different Units?</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Satoshis:</strong> Named after Bitcoin's creator, perfect for small transactions</li>
                    <li><strong>mBTC:</strong> Useful when Bitcoin prices are high, easier to work with</li>
                    <li><strong>μBTC:</strong> Good middle ground for medium-sized transactions</li>
                    <li><strong>BTC:</strong> The standard unit, best for large amounts</li>
                  </ul>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Common Use Cases:</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Lightning Network:</strong> Often uses satoshis for micro-payments</li>
                    <li><strong>DCA Investing:</strong> mBTC makes fractional purchases clearer</li>
                    <li><strong>Price Comparisons:</strong> Converting to fiat helps with understanding</li>
                    <li><strong>Technical Work:</strong> Satoshis are used in Bitcoin protocol</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-bitcoin-orange/10 border border-bitcoin-orange/20 rounded-xl p-4 mt-6">
                <p className="text-sm">
                  <strong>Note:</strong> Exchange rates are updated every 5 minutes and may vary between 
                  different exchanges. This tool is for reference purposes and should not be used for 
                  precise trading decisions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}