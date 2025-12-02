'use client';

import { useState, useEffect } from 'react';

interface FeeEstimate {
  priority: 'high' | 'medium' | 'low';
  label: string;
  description: string;
  satoshisPerByte: number;
  estimatedBlocks: number;
  estimatedTime: string;
  color: string;
}

interface MempoolInfo {
  count: number;
  vsize: number;
  total_fee: number;
  fee_histogram: number[][];
}

const FeeEstimator = () => {
  const [feeEstimates, setFeeEstimates] = useState<FeeEstimate[]>([]);
  const [mempoolInfo, setMempoolInfo] = useState<MempoolInfo | null>(null);
  const [transactionSize, setTransactionSize] = useState(250); // Average transaction size in bytes
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchFeeData = async () => {
    try {
      // Using mempool.space API for real fee data
      const [feeResponse, mempoolResponse] = await Promise.all([
        fetch('https://mempool.space/api/v1/fees/recommended'),
        fetch('https://mempool.space/api/mempool')
      ]);

      if (!feeResponse.ok || !mempoolResponse.ok) {
        throw new Error('Failed to fetch fee data');
      }

      const feeData = await feeResponse.json();
      const mempoolData = await mempoolResponse.json();

      // Create fee estimates with real data
      const estimates: FeeEstimate[] = [
        {
          priority: 'high',
          label: 'High Priority',
          description: 'Next block (fastest)',
          satoshisPerByte: feeData.fastestFee,
          estimatedBlocks: 1,
          estimatedTime: '~10 mins',
          color: 'from-red-500 to-red-600'
        },
        {
          priority: 'medium',
          label: 'Medium Priority',
          description: 'Within 30 minutes',
          satoshisPerByte: feeData.halfHourFee,
          estimatedBlocks: 3,
          estimatedTime: '~30 mins',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          priority: 'low',
          label: 'Low Priority',
          description: 'Within 1 hour (economical)',
          satoshisPerByte: feeData.hourFee,
          estimatedBlocks: 6,
          estimatedTime: '~1 hour',
          color: 'from-green-500 to-green-600'
        }
      ];

      setFeeEstimates(estimates);
      setMempoolInfo(mempoolData);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch fee data');
      
      // Fallback to simulated data
      const fallbackEstimates: FeeEstimate[] = [
        {
          priority: 'high',
          label: 'High Priority',
          description: 'Next block (fastest)',
          satoshisPerByte: 50,
          estimatedBlocks: 1,
          estimatedTime: '~10 mins',
          color: 'from-red-500 to-red-600'
        },
        {
          priority: 'medium',
          label: 'Medium Priority',
          description: 'Within 30 minutes',
          satoshisPerByte: 25,
          estimatedBlocks: 3,
          estimatedTime: '~30 mins',
          color: 'from-yellow-500 to-orange-500'
        },
        {
          priority: 'low',
          label: 'Low Priority',
          description: 'Within 1 hour (economical)',
          satoshisPerByte: 15,
          estimatedBlocks: 6,
          estimatedTime: '~1 hour',
          color: 'from-green-500 to-green-600'
        }
      ];
      
      setFeeEstimates(fallbackEstimates);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchFeeData();
    
    // Update every 60 seconds
    const interval = setInterval(fetchFeeData, 60000);
    
    return () => clearInterval(interval);
  }, []);

  const calculateFee = (satoshisPerByte: number, sizeInBytes: number) => {
    return satoshisPerByte * sizeInBytes;
  };

  const formatSatoshis = (satoshis: number) => {
    return satoshis.toLocaleString() + ' sats';
  };

  const formatBTC = (satoshis: number) => {
    return (satoshis / 100000000).toFixed(8) + ' BTC';
  };

  const formatUSD = (satoshis: number, btcPrice = 45000) => {
    const btc = satoshis / 100000000;
    const usd = btc * btcPrice;
    return '$' + usd.toFixed(2);
  };

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[...Array(3)].map((_, i) => (
              <div key={i} className="h-32 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bitcoin Fee Estimator</h2>
          <p className="text-gray-600">Real-time Bitcoin transaction fee recommendations</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Last updated</div>
          <div className="text-sm font-medium">
            {lastUpdated?.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-yellow-50 border border-yellow-200 rounded-xl text-yellow-700">
          <p className="font-semibold">Using fallback data</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Transaction Size Input */}
      <div className="mb-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Transaction Size (bytes)
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="number"
              value={transactionSize}
              onChange={(e) => setTransactionSize(Number(e.target.value))}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent"
              min="100"
              max="4000"
            />
          </div>
          <div className="text-sm text-gray-600 flex items-center">
            <div>
              <div>Typical sizes:</div>
              <div>• Simple transaction: ~250 bytes</div>
              <div>• Multi-input/output: ~400-600 bytes</div>
            </div>
          </div>
        </div>
      </div>

      {/* Fee Estimates */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        {feeEstimates.map((estimate) => {
          const totalFee = calculateFee(estimate.satoshisPerByte, transactionSize);
          
          return (
            <div
              key={estimate.priority}
              className="bg-white border-2 border-gray-200 hover:border-bitcoin-orange rounded-xl p-4 transition-all duration-300 hover:shadow-lg group"
            >
              <div className={`bg-linear-to-r ${estimate.color} text-white rounded-lg p-3 mb-4`}>
                <div className="text-lg font-bold">{estimate.label}</div>
                <div className="text-sm opacity-90">{estimate.description}</div>
              </div>

              <div className="space-y-3">
                <div>
                  <div className="text-sm text-gray-600">Fee Rate</div>
                  <div className="text-lg font-bold text-gray-900">
                    {estimate.satoshisPerByte} sat/byte
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600">Total Fee</div>
                  <div className="text-lg font-bold text-gray-900">
                    {formatSatoshis(totalFee)}
                  </div>
                  <div className="text-sm text-gray-500">
                    {formatBTC(totalFee)} • {formatUSD(totalFee)}
                  </div>
                </div>

                <div>
                  <div className="text-sm text-gray-600">Estimated Time</div>
                  <div className="text-md font-semibold text-gray-900">
                    {estimate.estimatedTime}
                  </div>
                  <div className="text-xs text-gray-500">
                    ~{estimate.estimatedBlocks} blocks
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>

      {/* Mempool Information */}
      {mempoolInfo && (
        <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50 mb-4">
          <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Mempool Status</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm">
            <div>
              <div className="text-gray-600">Pending Transactions</div>
              <div className="text-xl font-bold text-gray-900">
                {mempoolInfo.count.toLocaleString()}
              </div>
            </div>
            <div>
              <div className="text-gray-600">Mempool Size</div>
              <div className="text-xl font-bold text-gray-900">
                {(mempoolInfo.vsize / 1000000).toFixed(1)} MB
              </div>
            </div>
            <div>
              <div className="text-gray-600">Total Fees</div>
              <div className="text-xl font-bold text-gray-900">
                {formatBTC(mempoolInfo.total_fee)}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Fee Explanation */}
      <div className="bg-blue-50/80 backdrop-blur-sm rounded-xl p-4 border border-blue-200/50">
        <h3 className="text-lg font-semibold text-blue-900 mb-2">💡 Fee Tips</h3>
        <div className="text-sm text-blue-800 space-y-1">
          <p>• Higher fees = faster confirmation, but you'll pay more</p>
          <p>• During busy periods, even "low priority" fees might take longer</p>
          <p>• Consider using Lightning Network for small, instant payments</p>
          <p>• Batch multiple payments together to reduce per-transaction fees</p>
          <p>• Use SegWit addresses to reduce transaction size and fees</p>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>
          Fee data provided by mempool.space API • Updates every minute
        </p>
      </div>
    </div>
  );
};

export default FeeEstimator;