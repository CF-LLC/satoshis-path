'use client';

import React, { useState, useEffect } from 'react';

interface PriceData {
  price: number;
  change24h: number;
  lastUpdated: Date;
}

export default function BitcoinPriceWidget() {
  const [priceData, setPriceData] = useState<PriceData | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string>('');

  const fetchBitcoinPrice = async () => {
    setLoading(true);
    try {
      // Try multiple API endpoints for better reliability
      const endpoints = [
        'https://api.coinbase.com/v2/exchange-rates?currency=BTC',
        'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd&include_24hr_change=true'
      ];

      let success = false;
      
      // Try Coinbase API first (more reliable for client-side)
      try {
        const response = await fetch(endpoints[0], {
          method: 'GET',
          headers: {
            'Accept': 'application/json',
          },
        });

        if (response.ok) {
          const data = await response.json();
          if (data.data && data.data.rates && data.data.rates.USD) {
            setPriceData({
              price: parseFloat(data.data.rates.USD),
              change24h: 0, // Coinbase doesn't provide 24h change in this endpoint
              lastUpdated: new Date()
            });
            setError('');
            success = true;
          }
        }
      } catch (coinbaseErr) {
        console.log('Coinbase API failed, trying CoinGecko...', coinbaseErr);
      }

      // Fallback to CoinGecko if Coinbase fails
      if (!success) {
        try {
          const response = await fetch(endpoints[1], {
            method: 'GET',
            headers: {
              'Accept': 'application/json',
            },
          });

          if (response.ok) {
            const data = await response.json();
            if (data.bitcoin) {
              setPriceData({
                price: data.bitcoin.usd,
                change24h: data.bitcoin.usd_24h_change || 0,
                lastUpdated: new Date()
              });
              setError('');
              success = true;
            }
          }
        } catch (coingeckoErr) {
          console.log('CoinGecko API also failed:', coingeckoErr);
        }
      }

      if (!success) {
        throw new Error('All price APIs failed');
      }
    } catch (err) {
      console.error('Error fetching Bitcoin price:', err);
      setError('Price data temporarily unavailable');
      // Don't reset priceData to null, keep last known good data
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchBitcoinPrice();
    
    // Update price every 30 seconds
    const interval = setInterval(fetchBitcoinPrice, 30 * 1000);
    
    return () => clearInterval(interval);
  }, []);

  if (loading) {
    return (
      <div className="bg-white rounded-lg p-4 border border-gray-200 text-center animate-pulse">
        <div className="text-2xl mb-2">₿</div>
        <div className="h-4 bg-gray-300 rounded w-24 mx-auto mb-2"></div>
        <div className="h-3 bg-gray-300 rounded w-16 mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="bg-white rounded-lg p-4 border border-gray-200 text-center">
      <div className="text-2xl mb-2">₿</div>
      <div className="font-semibold text-gray-900">Bitcoin Price</div>
      
      {error && !priceData && (
        <div className="text-red-500 text-sm mt-2">{error}</div>
      )}
      
      {priceData ? (
        <>
          <div className="text-lg font-bold text-gray-900 mt-1">
            ${priceData.price.toLocaleString('en-US', { maximumFractionDigits: 0 })}
          </div>
          {priceData.change24h !== 0 && (
            <div className={`text-sm mt-1 ${priceData.change24h >= 0 ? 'text-green-600' : 'text-red-600'}`}>
              {priceData.change24h >= 0 ? '+' : ''}{priceData.change24h.toFixed(2)}% (24h)
            </div>
          )}
          <div className="text-xs text-gray-500 mt-2">
            Updated: {priceData.lastUpdated.toLocaleTimeString()}
          </div>
          {error && (
            <div className="text-orange-500 text-xs mt-1">
              {error} (showing last known price)
            </div>
          )}
        </>
      ) : !loading && (
        <div className="text-gray-500 text-sm mt-2">
          <div>Price data unavailable</div>
          <div className="text-xs mt-1">
            <a href="https://www.coingecko.com/en/coins/bitcoin" target="_blank" rel="noopener noreferrer" 
               className="text-orange-600 hover:underline">
              View Live Price on CoinGecko →
            </a>
          </div>
          <div className="text-xs mt-1">
            <a href="https://www.coinbase.com/price/bitcoin" target="_blank" rel="noopener noreferrer" 
               className="text-blue-600 hover:underline">
              View on Coinbase →
            </a>
          </div>
        </div>
      )}
    </div>
  );
}