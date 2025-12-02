'use client';

import { useState, useEffect } from 'react';

interface ExchangeRates {
  usd: number;
  eur: number;
  gbp: number;
  jpy: number;
  cad: number;
  aud: number;
}

const UnitConverter = () => {
  const [inputValue, setInputValue] = useState('1');
  const [inputUnit, setInputUnit] = useState('btc');
  const [exchangeRates, setExchangeRates] = useState<ExchangeRates | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Bitcoin units
  const bitcoinUnits = {
    btc: { name: 'Bitcoin', symbol: 'BTC', satoshis: 100000000 },
    mbtc: { name: 'Millibitcoin', symbol: 'mBTC', satoshis: 100000 },
    ubtc: { name: 'Microbitcoin', symbol: 'μBTC', satoshis: 100 },
    satoshi: { name: 'Satoshi', symbol: 'sats', satoshis: 1 },
  };

  // Fiat currencies
  const fiatCurrencies = {
    usd: { name: 'US Dollar', symbol: '$' },
    eur: { name: 'Euro', symbol: '€' },
    gbp: { name: 'British Pound', symbol: '£' },
    jpy: { name: 'Japanese Yen', symbol: '¥' },
    cad: { name: 'Canadian Dollar', symbol: 'C$' },
    aud: { name: 'Australian Dollar', symbol: 'A$' },
  };

  // Fetch current exchange rates
  useEffect(() => {
    const fetchExchangeRates = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/simple/price?ids=bitcoin&vs_currencies=usd,eur,gbp,jpy,cad,aud'
        );
        
        if (!response.ok) {
          throw new Error('Failed to fetch exchange rates');
        }
        
        const data = await response.json();
        setExchangeRates(data.bitcoin);
        setError(null);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'Failed to fetch exchange rates');
      } finally {
        setLoading(false);
      }
    };

    fetchExchangeRates();
    
    // Update rates every 5 minutes
    const interval = setInterval(fetchExchangeRates, 5 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);

  // Convert input to satoshis
  const toSatoshis = (value: number, unit: string): number => {
    if (unit in bitcoinUnits) {
      return value * bitcoinUnits[unit as keyof typeof bitcoinUnits].satoshis;
    } else if (unit in fiatCurrencies && exchangeRates) {
      const btcAmount = value / exchangeRates[unit as keyof ExchangeRates];
      return btcAmount * bitcoinUnits.btc.satoshis;
    }
    return 0;
  };

  // Convert satoshis to target unit
  const fromSatoshis = (satoshis: number, unit: string): number => {
    if (unit in bitcoinUnits) {
      return satoshis / bitcoinUnits[unit as keyof typeof bitcoinUnits].satoshis;
    } else if (unit in fiatCurrencies && exchangeRates) {
      const btcAmount = satoshis / bitcoinUnits.btc.satoshis;
      return btcAmount * exchangeRates[unit as keyof ExchangeRates];
    }
    return 0;
  };

  const getConversions = () => {
    const numericValue = parseFloat(inputValue) || 0;
    const totalSatoshis = toSatoshis(numericValue, inputUnit);
    
    const conversions: Array<{ unit: string; value: number; name: string; symbol: string; type: 'bitcoin' | 'fiat' }> = [];
    
    // Bitcoin units
    Object.entries(bitcoinUnits).forEach(([unit, info]) => {
      if (unit !== inputUnit) {
        conversions.push({
          unit,
          value: fromSatoshis(totalSatoshis, unit),
          name: info.name,
          symbol: info.symbol,
          type: 'bitcoin'
        });
      }
    });
    
    // Fiat currencies
    if (exchangeRates) {
      Object.entries(fiatCurrencies).forEach(([unit, info]) => {
        if (unit !== inputUnit) {
          conversions.push({
            unit,
            value: fromSatoshis(totalSatoshis, unit),
            name: info.name,
            symbol: info.symbol,
            type: 'fiat'
          });
        }
      });
    }
    
    return conversions;
  };

  const formatValue = (value: number, unit: string, type: 'bitcoin' | 'fiat') => {
    if (type === 'bitcoin') {
      if (unit === 'satoshi') {
        return Math.round(value).toLocaleString();
      }
      return value.toFixed(8).replace(/\.?0+$/, '');
    } else {
      return value.toLocaleString('en-US', {
        minimumFractionDigits: 2,
        maximumFractionDigits: 2,
      });
    }
  };

  if (loading) {
    return (
      <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
        <div className="animate-pulse">
          <div className="h-8 bg-gray-200 rounded mb-6"></div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="h-32 bg-gray-200 rounded"></div>
            <div className="h-32 bg-gray-200 rounded"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/80 backdrop-blur-sm rounded-xl shadow-lg border border-gray-200/50 p-6">
      <div className="mb-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-2">Bitcoin Unit Converter</h2>
        <p className="text-gray-600">
          Convert between Bitcoin units and fiat currencies with real-time exchange rates.
        </p>
      </div>

      {error && (
        <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-xl text-red-700">
          <p className="font-semibold">Error loading exchange rates</p>
          <p className="text-sm">{error}</p>
        </div>
      )}

      {/* Input Section */}
      <div className="mb-8">
        <label className="block text-sm font-medium text-gray-700 mb-3">
          Convert From:
        </label>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <input
              type="number"
              value={inputValue}
              onChange={(e) => setInputValue(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent text-lg"
              placeholder="Enter amount"
              step="any"
            />
          </div>
          <div>
            <select
              value={inputUnit}
              onChange={(e) => setInputUnit(e.target.value)}
              className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-bitcoin-orange focus:border-transparent text-lg"
            >
              <optgroup label="Bitcoin Units">
                {Object.entries(bitcoinUnits).map(([unit, info]) => (
                  <option key={unit} value={unit}>
                    {info.name} ({info.symbol})
                  </option>
                ))}
              </optgroup>
              <optgroup label="Fiat Currencies">
                {Object.entries(fiatCurrencies).map(([unit, info]) => (
                  <option key={unit} value={unit}>
                    {info.name} ({info.symbol})
                  </option>
                ))}
              </optgroup>
            </select>
          </div>
        </div>
      </div>

      {/* Conversions */}
      <div className="space-y-4">
        <h3 className="text-lg font-semibold text-gray-900 mb-4">Conversions:</h3>
        
        {/* Bitcoin Units */}
        <div>
          <h4 className="text-md font-medium text-gray-700 mb-3">Bitcoin Units</h4>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {getConversions()
              .filter(conv => conv.type === 'bitcoin')
              .map((conversion) => (
                <div
                  key={conversion.unit}
                  className="bg-linear-to-r from-bitcoin-orange/5 to-orange-500/5 border border-bitcoin-orange/20 rounded-xl p-4"
                >
                  <div className="flex justify-between items-center">
                    <div>
                      <div className="text-sm text-gray-600">{conversion.name}</div>
                      <div className="text-lg font-bold text-gray-900">
                        {formatValue(conversion.value, conversion.unit, conversion.type)} {conversion.symbol}
                      </div>
                    </div>
                    <div className="w-8 h-8 bg-bitcoin-orange text-white rounded-full flex items-center justify-center text-sm font-bold">
                      ₿
                    </div>
                  </div>
                </div>
              ))}
          </div>
        </div>

        {/* Fiat Currencies */}
        {exchangeRates && (
          <div>
            <h4 className="text-md font-medium text-gray-700 mb-3">Fiat Currencies</h4>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
              {getConversions()
                .filter(conv => conv.type === 'fiat')
                .map((conversion) => (
                  <div
                    key={conversion.unit}
                    className="bg-gray-50/80 backdrop-blur-sm border border-gray-200/50 rounded-xl p-4"
                  >
                    <div className="text-sm text-gray-600">{conversion.name}</div>
                    <div className="text-lg font-bold text-gray-900">
                      {conversion.symbol}{formatValue(conversion.value, conversion.unit, conversion.type)}
                    </div>
                  </div>
                ))}
            </div>
          </div>
        )}
      </div>

      <div className="mt-6 text-xs text-gray-500 text-center">
        <p>
          Exchange rates updated every 5 minutes • Data provided by CoinGecko API
        </p>
      </div>
    </div>
  );
};

export default UnitConverter;