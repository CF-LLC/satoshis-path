import FeeEstimator from '@/components/FeeEstimator';

export const metadata = {
  title: 'Bitcoin Fee Estimator | Satoshi\'s Path',
  description: 'Get real-time Bitcoin transaction fee estimates for different priority levels. Calculate fees based on current mempool conditions.',
};

export default function FeeEstimatorPage() {
  return (
    <div className="bg-white">
      {/* Header */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold text-black mb-6">
              Bitcoin <span className="bg-linear-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">Fee Estimator</span>
            </h1>
            <p className="text-xl text-gray-600">
              Get real-time Bitcoin transaction fee recommendations based on current network conditions. 
              Choose the right fee for your transaction priority.
            </p>
          </div>
        </div>
      </section>

      {/* Fee Estimator */}
      <section className="section-padding">
        <div className="max-w-5xl mx-auto container-padding">
          <FeeEstimator />
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-subtle-pattern">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Understanding Bitcoin Transaction Fees</h2>
            <div className="prose text-gray-600 max-w-none">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">How Fees Work:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li>Fees are paid to miners for including your transaction in a block</li>
                    <li>Higher fees incentivize miners to prioritize your transaction</li>
                    <li>Fees are calculated as satoshis per byte (sat/byte)</li>
                    <li>Larger transactions (more inputs/outputs) cost more</li>
                    <li>Network congestion increases required fees</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">Fee Priority Levels:</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-red-500 rounded"></div>
                      <span><strong>High:</strong> Next block (~10 minutes)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-yellow-500 rounded"></div>
                      <span><strong>Medium:</strong> Within 30 minutes</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <div className="w-3 h-3 bg-green-500 rounded"></div>
                      <span><strong>Low:</strong> Within 1 hour (economical)</span>
                    </div>
                  </div>
                </div>
                
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-3">Fee Optimization Tips:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>Use SegWit:</strong> Addresses starting with bc1 have lower fees</li>
                    <li><strong>Batch Transactions:</strong> Combine multiple payments to save fees</li>
                    <li><strong>Choose Good Timing:</strong> Fees are often lower on weekends</li>
                    <li><strong>Lightning Network:</strong> For small amounts, use Lightning for instant, cheap payments</li>
                    <li><strong>UTXO Management:</strong> Consolidate small UTXOs during low-fee periods</li>
                  </ul>

                  <h3 className="text-lg font-semibold text-gray-900 mb-3 mt-6">When to Use Each Priority:</h3>
                  <ul className="list-disc list-inside space-y-2 text-sm">
                    <li><strong>High Priority:</strong> Urgent payments, exchange deposits</li>
                    <li><strong>Medium Priority:</strong> Regular payments, moderate urgency</li>
                    <li><strong>Low Priority:</strong> Savings transfers, non-urgent payments</li>
                  </ul>
                </div>
              </div>
              
              <div className="bg-bitcoin-orange/10 border border-bitcoin-orange/20 rounded-xl p-4 mt-6">
                <p className="text-sm">
                  <strong>Note:</strong> Fee estimates are based on current network conditions and may change rapidly. 
                  During high network congestion, even "high priority" transactions may take longer than expected. 
                  Always check current conditions before sending important transactions.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}