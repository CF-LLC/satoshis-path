'use client';

import { useState, useEffect } from 'react';

interface CalculationResult {
  totalInvested: number;
  bitcoinAccumulated: number;
  currentValue: number;
  profitLoss: number;
  profitLossPercentage: number;
  averageBuyPrice: number;
  currentPrice: number;
}

interface BitcoinPrice {
  date: string;
  price: number;
}

const DCACalculator = () => {
  const [amount, setAmount] = useState(100);
  const [frequency, setFrequency] = useState('weekly');
  const [startDate, setStartDate] = useState('2023-01-01');
  const [result, setResult] = useState<CalculationResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [currentPrice, setCurrentPrice] = useState<number | null>(null);

  // Fetch current Bitcoin price
  useEffect(() => {
    const fetchCurrentPrice = async () => {
      try {
        const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
        const data = await response.json();
        setCurrentPrice(data.bitcoin.usd);
      } catch (err) {
        console.error('Failed to fetch current price:', err);
      }
    };

    fetchCurrentPrice();
    // Update price every 5 minutes
    const interval = setInterval(fetchCurrentPrice, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Simulate historical Bitcoin prices (in a real app, you'd fetch from CoinGecko API)
  const getHistoricalPrices = async (startDate: string, frequency: string): Promise<BitcoinPrice[]> => {
    // For demo purposes, we'll simulate prices
    // In production, you'd use: https://api.coingecko.com/api/v3/coins/bitcoin/market_chart/range
    const start = new Date(startDate);
    const end = new Date();
    const prices: BitcoinPrice[] = [];
    
    const daysBetweenPurchases = frequency === 'daily' ? 1 : frequency === 'weekly' ? 7 : 30;
    
    // Simulate some realistic Bitcoin price progression
    let basePrice = 20000; // Starting base price
    const currentDate = new Date(start);
    
    while (currentDate <= end) {
      // Add some realistic volatility
      const volatility = (Math.random() - 0.5) * 0.1; // ±5% random change
      const trend = Math.sin((currentDate.getTime() - start.getTime()) / (1000 * 60 * 60 * 24 * 365) * Math.PI) * 0.3; // Yearly trend
      basePrice = basePrice * (1 + volatility + trend * 0.01);
      
      prices.push({
        date: currentDate.toISOString().split('T')[0],
        price: Math.max(basePrice, 15000) // Don't go below $15k
      });
      
      currentDate.setDate(currentDate.getDate() + daysBetweenPurchases);
    }
    
    return prices;
  };

  const calculateDCA = async () => {
    setLoading(true);
    setError(null);
    
    try {
      const historicalPrices = await getHistoricalPrices(startDate, frequency);
      
      if (historicalPrices.length === 0) {
        throw new Error('No price data available for the selected date range');
      }
      
      let totalInvested = 0;
      let bitcoinAccumulated = 0;
      
      historicalPrices.forEach(priceData => {
        totalInvested += amount;
        bitcoinAccumulated += amount / priceData.price;
      });
      
      const averageBuyPrice = totalInvested / bitcoinAccumulated;
      const currentBitcoinPrice = currentPrice || historicalPrices[historicalPrices.length - 1].price;
      const currentValue = bitcoinAccumulated * currentBitcoinPrice;
      const profitLoss = currentValue - totalInvested;
      const profitLossPercentage = (profitLoss / totalInvested) * 100;
      
      setResult({
        totalInvested,
        bitcoinAccumulated,
        currentValue,
        profitLoss,
        profitLossPercentage,
        averageBuyPrice,
        currentPrice: currentBitcoinPrice
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  };

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(value);
  };

  const formatBitcoin = (value: number) => {
    return value.toFixed(8) + ' BTC';
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">DCA Calculator</h2>
        <p className="text-gray-600">
          Calculate how your dollar-cost averaging strategy would have performed with real Bitcoin data.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-6">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Investment Amount
          </label>
          <div className="relative">
            <span className="absolute left-3 top-3 text-gray-500">$</span>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(Number(e.target.value))}
              className="w-full pl-8 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent"
              min="1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Frequency
          </label>
          <select
            value={frequency}
            onChange={(e) => setFrequency(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent"
          >
            <option value="daily">Daily</option>
            <option value="weekly">Weekly</option>
            <option value="monthly">Monthly</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            Start Date
          </label>
          <input
            type="date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent"
            max={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <button
        onClick={calculateDCA}
        disabled={loading}
        className="w-full bg-linear-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? 'Calculating...' : 'Calculate DCA Performance'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Investment Summary</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Total Invested:</span>
                <span className="font-medium">{formatCurrency(result.totalInvested)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Bitcoin Accumulated:</span>
                <span className="font-medium">{formatBitcoin(result.bitcoinAccumulated)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Average Buy Price:</span>
                <span className="font-medium">{formatCurrency(result.averageBuyPrice)}</span>
              </div>
            </div>
          </div>

          <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
            <h3 className="text-lg font-semibold text-gray-900 mb-3">Current Performance</h3>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span className="text-gray-600">Current BTC Price:</span>
                <span className="font-medium">{formatCurrency(result.currentPrice)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Portfolio Value:</span>
                <span className="font-medium">{formatCurrency(result.currentValue)}</span>
              </div>
              <div className="flex justify-between">
                <span className="text-gray-600">Profit/Loss:</span>
                <span className={`font-medium ${result.profitLoss >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                  {formatCurrency(result.profitLoss)} ({result.profitLossPercentage.toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>
        </div>
      )}

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>
          * This calculator uses simulated historical data for demonstration. 
          Past performance does not guarantee future results.
        </p>
      </div>
    </div>
  );
};

export default DCACalculator;