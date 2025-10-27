import DCACalculator from '@/components/DCACalculator';

export const metadata = {
  title: 'Bitcoin DCA Calculator | Satoshi\'s Path',
  description: 'Calculate your Bitcoin dollar-cost averaging performance with real historical data. See how much Bitcoin you would have accumulated and your current profit/loss.',
};

export default function DCACalculatorPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bitcoin <span className="bg-gradient-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">DCA Calculator</span>
            </h1>
            <p className="text-xl text-gray-600">
              Discover how dollar-cost averaging into Bitcoin would have performed over any time period. 
              See your potential returns with real historical data.
            </p>
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section className="section-padding">
        <div className="max-w-4xl mx-auto container-padding">
          <DCACalculator />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-subtle-pattern">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">What is Dollar-Cost Averaging?</h2>
            <div className="prose text-gray-600 max-w-none">
              <p className="mb-4">
                Dollar-cost averaging (DCA) is an investment strategy where you invest a fixed amount of money 
                at regular intervals, regardless of the asset's price. This approach helps reduce the impact 
                of volatility on your overall investment.
              </p>
              
              <h3 className="text-xl font-semibold text-gray-900 mb-3">Benefits of DCA for Bitcoin:</h3>
              <ul className="list-disc list-inside space-y-2 mb-4">
                <li>Reduces the risk of making poor timing decisions</li>
                <li>Takes advantage of Bitcoin's volatility by buying more when prices are low</li>
                <li>Builds discipline and consistency in your investment approach</li>
                <li>Doesn't require large upfront capital</li>
                <li>Helps smooth out short-term price fluctuations</li>
              </ul>

              <div className="bg-bitcoin-orange/10 border border-bitcoin-orange/20 rounded-xl p-4">
                <p className="text-sm">
                  <strong>Disclaimer:</strong> This calculator uses simulated data for demonstration purposes. 
                  Past performance does not guarantee future results. Always do your own research and consider 
                  your financial situation before investing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}