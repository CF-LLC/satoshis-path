'use client';

import { useState, useEffect } from 'react';

interface BitcoinData {
  price: number;
  price_change_24h: number;
  price_change_percentage_24h: number;
  market_cap: number;
  market_cap_rank: number;
  total_volume: number;
  high_24h: number;
  low_24h: number;
  ath: number;
  ath_date: string;
  atl: number;
  atl_date: string;
  last_updated: string;
}

interface MarketData {
  total_market_cap: { usd: number };
  total_volume: { usd: number };
  market_cap_percentage: { btc: number };
}

const PriceTracker = () => {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null);
  const [marketData, setMarketData] = useState<MarketData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const fetchBitcoinData = async () => {
    try {
      const [priceResponse, globalResponse] = await Promise.all([
        fetch('https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'),
        fetch('https://api.coingecko.com/api/v3/global')
      ]);

      if (!priceResponse.ok || !globalResponse.ok) {
        throw new Error('Failed to fetch data');
      }

      const priceData = await priceResponse.json();
      const globalData = await globalResponse.json();

      const bitcoin: BitcoinData = {
        price: priceData.market_data.current_price.usd,
        price_change_24h: priceData.market_data.price_change_24h,
        price_change_percentage_24h: priceData.market_data.price_change_percentage_24h,
        market_cap: priceData.market_data.market_cap.usd,
        market_cap_rank: priceData.market_cap_rank,
        total_volume: priceData.market_data.total_volume.usd,
        high_24h: priceData.market_data.high_24h.usd,
        low_24h: priceData.market_data.low_24h.usd,
        ath: priceData.market_data.ath.usd,
        ath_date: priceData.market_data.ath_date.usd,
        atl: priceData.market_data.atl.usd,
        atl_date: priceData.market_data.atl_date.usd,
        last_updated: priceData.last_updated
      };

      setBitcoinData(bitcoin);
      setMarketData(globalData.data);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to fetch data');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBitcoinData();
    
    // Update every 30 seconds
    const interval = setInterval(fetchBitcoinData, 30000);
    
    return () => clearInterval(interval);
  }, []);

  const formatCurrency = (value: number, minimumFractionDigits = 2) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits,
      maximumFractionDigits: minimumFractionDigits,
    }).format(value);
  };

  const formatNumber = (value: number) => {
    return new Intl.NumberFormat('en-US').format(value);
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-4"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[...Array(6)].map((_, i) => (
              <div key={i} className="h-24 bg-gray-200 rounded"></div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  if (error || !bitcoinData) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
        <div className="text-center">
          <div className="text-red-500 mb-4">
            <svg className="w-12 h-12 mx-auto" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
            </svg>
          </div>
          <h3 className="text-lg font-semibold text-gray-900 mb-2">Failed to Load Data</h3>
          <p className="text-gray-600 mb-4">{error || 'Unable to fetch Bitcoin price data'}</p>
          <button
            onClick={fetchBitcoinData}
            className="bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-4 py-2 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300"
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
      <div className="flex justify-between items-center mb-6">
        <div>
          <h2 className="text-2xl font-bold text-gray-900 mb-2">Bitcoin Price Tracker</h2>
          <p className="text-gray-600">Real-time Bitcoin market data</p>
        </div>
        <div className="text-right">
          <div className="text-sm text-gray-500">Last updated</div>
          <div className="text-sm font-medium">
            {lastUpdated?.toLocaleTimeString()}
          </div>
        </div>
      </div>

      {/* Main Price Display */}
      <div className="bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-xl p-6 text-white mb-6">
        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                <span className="text-xl font-bold">₿</span>
              </div>
              <div>
                <h3 className="text-lg font-semibold">Bitcoin</h3>
                <p className="text-sm opacity-90">BTC</p>
              </div>
            </div>
            <div className="text-3xl font-bold mb-1">
              {formatCurrency(bitcoinData.price)}
            </div>
            <div className={`flex items-center gap-2 ${bitcoinData.price_change_percentage_24h >= 0 ? 'text-green-200' : 'text-red-200'}`}>
              <span className="text-lg">
                {bitcoinData.price_change_percentage_24h >= 0 ? '↗' : '↘'}
              </span>
              <span className="font-semibold">
                {formatCurrency(Math.abs(bitcoinData.price_change_24h))} 
                ({Math.abs(bitcoinData.price_change_percentage_24h).toFixed(2)}%)
              </span>
            </div>
          </div>
          <div className="text-right">
            <div className="text-sm opacity-90">Rank #{bitcoinData.market_cap_rank}</div>
          </div>
        </div>
      </div>

      {/* Market Stats Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
        <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
          <div className="text-sm text-gray-600 mb-1">Market Cap</div>
          <div className="text-xl font-bold text-gray-900">
            {formatCurrency(bitcoinData.market_cap, 0)}
          </div>
          {marketData && (
            <div className="text-sm text-gray-500">
              {marketData.market_cap_percentage.btc.toFixed(1)}% of crypto market
            </div>
          )}
        </div>

        <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
          <div className="text-sm text-gray-600 mb-1">24h Volume</div>
          <div className="text-xl font-bold text-gray-900">
            {formatCurrency(bitcoinData.total_volume, 0)}
          </div>
        </div>

        <div className="bg-gray-50/80 backdrop-blur-sm rounded-xl p-4 border border-gray-200/50">
          <div className="text-sm text-gray-600 mb-1">24h Range</div>
          <div className="text-lg font-bold text-gray-900">
            {formatCurrency(bitcoinData.low_24h)}
          </div>
          <div className="text-sm text-gray-500">
            to {formatCurrency(bitcoinData.high_24h)}
          </div>
        </div>
      </div>

      {/* Historical Highs/Lows */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="bg-green-50/80 backdrop-blur-sm rounded-xl p-4 border border-green-200/50">
          <div className="text-sm text-green-600 mb-1">All-Time High</div>
          <div className="text-xl font-bold text-green-700">
            {formatCurrency(bitcoinData.ath)}
          </div>
          <div className="text-sm text-green-600">
            {formatDate(bitcoinData.ath_date)}
          </div>
        </div>

        <div className="bg-red-50/80 backdrop-blur-sm rounded-xl p-4 border border-red-200/50">
          <div className="text-sm text-red-600 mb-1">All-Time Low</div>
          <div className="text-xl font-bold text-red-700">
            {formatCurrency(bitcoinData.atl)}
          </div>
          <div className="text-sm text-red-600">
            {formatDate(bitcoinData.atl_date)}
          </div>
        </div>
      </div>

      <div className="mt-4 text-xs text-gray-500 text-center">
        <p>Data provided by CoinGecko API • Updates every 30 seconds</p>
      </div>
    </div>
  );
};

export default PriceTracker;