import HODLCalculator from '@/components/HODLCalculator';

export const metadata = {
  title: 'Bitcoin HODL Calculator | Satoshi\'s Path',
  description: 'Calculate Bitcoin returns from any historical date. See how much your investment would be worth if you had HODLed Bitcoin.',
};

export default function HODLCalculatorPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bitcoin <span className="bg-linear-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">HODL Calculator</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover what your Bitcoin investment would be worth if you had HODLed from any date. 
              See historical returns and annualized performance.
            </p>
          </div>
        </div>
      </section>

      {/* HODL Calculator */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <HODLCalculator />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-subtle-pattern">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What Does HODL Mean?</h2>
            <div className="prose text-gray-600 max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <p className="mb-4">
                    HODL is a cryptocurrency slang term that originated from a misspelling of "hold." 
                    It has since become a popular investment strategy meaning "Hold On for Dear Life."
                  </p>
                  
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">HODL Strategy Benefits:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Reduces stress from daily price fluctuations</li>
                    <li>Avoids timing the market poorly</li>
                    <li>Takes advantage of Bitcoin's long-term growth</li>
                    <li>Simple strategy requiring minimal maintenance</li>
                    <li>Historically profitable for patient investors</li>
                  </ul>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Understanding the Results:</h3>
                  <ul className="space-y-2 text-sm">
                    <li><strong>Total Return:</strong> Your profit or loss in dollar terms</li>
                    <li><strong>Percentage Return:</strong> Your return as a percentage of initial investment</li>
                    <li><strong>Annualized Return:</strong> Your average yearly return rate</li>
                    <li><strong>Days HODLed:</strong> How long you've held your Bitcoin</li>
                  </ul>
                  
                  <div className="bg-green-50 border border-green-200 rounded-xl p-4 mt-4">
                    <h4 className="font-semibold text-green-800 mb-2">💡 HODL Tips:</h4>
                    <ul className="text-sm text-green-700 space-y-1">
                      <li>• Set it and forget it - don't check prices daily</li>
                      <li>• Only invest what you can afford to lose</li>
                      <li>• Consider DCA for regular investments</li>
                      <li>• Store Bitcoin securely in a hardware wallet</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="bg-bitcoin-orange/10 border border-bitcoin-orange/20 rounded-xl p-4 mt-6">
                <p className="text-sm">
                  <strong>Disclaimer:</strong> This calculator uses simulated historical data and is for 
                  educational purposes only. Past performance does not guarantee future results. 
                  Cryptocurrency investments are subject to market risk and volatility.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}