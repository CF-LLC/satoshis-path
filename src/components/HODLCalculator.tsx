'use client';

import { useState } from 'react';

interface HODLResult {
  initialInvestment: number;
  bitcoinAmount: number;
  currentValue: number;
  profitLoss: number;
  profitLossPercentage: number;
  annualizedReturn: number;
  daysSinceInvestment: number;
  historicalPrice: number;
  currentPrice: number;
}

const HODLCalculator = () => {
  const [amount, setAmount] = useState(1000);
  const [hodlDate, setHodlDate] = useState('2022-01-01');
  const [result, setResult] = useState<HODLResult | null>(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Simulate historical Bitcoin price data (in production, use CoinGecko API)
  const getHistoricalPrice = async (date: string): Promise<number> => {
    // In production, you'd use:
    // https://api.coingecko.com/api/v3/coins/bitcoin/history?date=DD-MM-YYYY
    
    // For demo purposes, simulate realistic historical prices
    const targetDate = new Date(date);
    const daysSince2020 = Math.floor((targetDate.getTime() - new Date('2020-01-01').getTime()) / (1000 * 60 * 60 * 24));
    
    // Simulate Bitcoin price progression with some realistic patterns
    let basePrice = 7000; // Starting price around 2020
    
    // Add yearly growth trend
    const yearlyGrowth = Math.pow(1.5, daysSince2020 / 365); // ~50% annual growth on average
    basePrice *= yearlyGrowth;
    
    // Add some volatility based on date patterns
    const volatilityFactor = 1 + (Math.sin(daysSince2020 / 30) * 0.3); // Monthly cycles
    basePrice *= volatilityFactor;
    
    // Clamp to reasonable bounds
    basePrice = Math.max(3000, Math.min(basePrice, 100000));
    
    return basePrice;
  };

  const getCurrentPrice = async (): Promise<number> => {
    try {
      const response = await fetch('https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd');
      const data = await response.json();
      return data.bitcoin.usd;
    } catch (err) {
      // Fallback to simulated current price
      return 45000;
    }
  };

  const calculateHODL = async () => {
    setLoading(true);
    setError(null);

    try {
      const selectedDate = new Date(hodlDate);
      const today = new Date();
      
      if (selectedDate >= today) {
        throw new Error('HODL date must be in the past');
      }

      const daysDiff = Math.floor((today.getTime() - selectedDate.getTime()) / (1000 * 60 * 60 * 24));
      
      if (daysDiff < 1) {
        throw new Error('Please select a date at least 1 day ago');
      }

      const [historicalPrice, currentPrice] = await Promise.all([
        getHistoricalPrice(hodlDate),
        getCurrentPrice()
      ]);

      const bitcoinAmount = amount / historicalPrice;
      const currentValue = bitcoinAmount * currentPrice;
      const profitLoss = currentValue - amount;
      const profitLossPercentage = (profitLoss / amount) * 100;
      
      // Calculate annualized return
      const yearsDiff = daysDiff / 365.25;
      const annualizedReturn = (Math.pow(currentValue / amount, 1 / yearsDiff) - 1) * 100;

      setResult({
        initialInvestment: amount,
        bitcoinAmount,
        currentValue,
        profitLoss,
        profitLossPercentage,
        annualizedReturn,
        daysSinceInvestment: daysDiff,
        historicalPrice,
        currentPrice
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

  const formatDate = (date: string) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">HODL Calculator</h2>
        <p className="text-gray-600">
          Calculate what your Bitcoin investment would be worth if you had HODLed from any date.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
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
              step="1"
            />
          </div>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">
            HODL Start Date
          </label>
          <input
            type="date"
            value={hodlDate}
            onChange={(e) => setHodlDate(e.target.value)}
            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent"
            max={new Date().toISOString().split('T')[0]}
          />
        </div>
      </div>

      <button
        onClick={calculateHODL}
        disabled={loading}
        className="w-full bg-linear-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transform hover:-translate-y-1 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
      >
        {loading ? 'Calculating...' : 'Calculate HODL Returns'}
      </button>

      {error && (
        <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          {error}
        </div>
      )}

      {result && (
        <div className="mt-6 space-y-6">
          {/* Investment Summary */}
          <div className="bg-linear-to-r from-orange-500 to-bitcoin-orange rounded-xl p-6 text-white">
            <h3 className="text-xl font-bold mb-4">HODL Results</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
              <div>
                <div className="opacity-90">Initial Investment</div>
                <div className="text-2xl font-bold">{formatCurrency(result.initialInvestment)}</div>
              </div>
              <div>
                <div className="opacity-90">Current Value</div>
                <div className="text-2xl font-bold">{formatCurrency(result.currentValue)}</div>
              </div>
            </div>
            <div className="mt-4 pt-4 border-t border-white/20">
              <div className="flex justify-between items-center">
                <span className="opacity-90">Total Return:</span>
                <span className="text-xl font-bold">
                  {formatCurrency(result.profitLoss)} ({result.profitLossPercentage.toFixed(2)}%)
                </span>
              </div>
            </div>
          </div>

          {/* Detailed Breakdown */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Investment Details</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">HODL Start Date:</span>
                  <span className="font-medium">{formatDate(hodlDate)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Days HODLed:</span>
                  <span className="font-medium">{result.daysSinceInvestment.toLocaleString()}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Bitcoin Purchased:</span>
                  <span className="font-medium">{formatBitcoin(result.bitcoinAmount)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Annualized Return:</span>
                  <span className={`font-medium ${result.annualizedReturn >= 0 ? 'text-green-600' : 'text-red-600'}`}>
                    {result.annualizedReturn.toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
              <h4 className="text-lg font-semibold text-gray-900 mb-3">Price Information</h4>
              <div className="space-y-2 text-sm">
                <div className="flex justify-between">
                  <span className="text-gray-600">Purchase Price:</span>
                  <span className="font-medium">{formatCurrency(result.historicalPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Current Price:</span>
                  <span className="font-medium">{formatCurrency(result.currentPrice)}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Price Change:</span>
                  <span className={`font-medium ${result.currentPrice >= result.historicalPrice ? 'text-green-600' : 'text-red-600'}`}>
                    {(((result.currentPrice - result.historicalPrice) / result.historicalPrice) * 100).toFixed(2)}%
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Visualization */}
          <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
            <h4 className="text-lg font-semibold text-gray-900 mb-3">HODL Performance</h4>
            <div className="relative">
              <div className="flex justify-between text-sm text-gray-600 mb-2">
                <span>Initial Investment</span>
                <span>Current Value</span>
              </div>
              <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                <div 
                  className={`h-full transition-all duration-1000 ${
                    result.profitLoss >= 0 
                      ? 'bg-linear-to-r from-green-400 to-green-500' 
                      : 'bg-linear-to-r from-red-400 to-red-500'
                  }`}
                  style={{ 
                    width: `${Math.min(100, (result.currentValue / result.initialInvestment) * 100)}%` 
                  }}
                ></div>
              </div>
              <div className="flex justify-between text-xs text-gray-500 mt-1">
                <span>{formatCurrency(result.initialInvestment)}</span>
                <span>{formatCurrency(result.currentValue)}</span>
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

export default HODLCalculator;