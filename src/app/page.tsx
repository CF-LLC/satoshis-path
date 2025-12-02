'use client';

import { useState, useEffect } from 'react';
import Link from "next/link";

interface BitcoinData {
  current_price: number;
  market_cap: number;
  price_change_percentage_24h: number;
  total_volume: number;
}

export default function Home() {
  const [bitcoinData, setBitcoinData] = useState<BitcoinData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBitcoinData = async () => {
      try {
        const response = await fetch(
          'https://api.coingecko.com/api/v3/coins/bitcoin?localization=false&tickers=false&market_data=true&community_data=false&developer_data=false&sparkline=false'
        );
        const data = await response.json();
        setBitcoinData({
          current_price: data.market_data.current_price.usd,
          market_cap: data.market_data.market_cap.usd,
          price_change_percentage_24h: data.market_data.price_change_percentage_24h,
          total_volume: data.market_data.total_volume.usd
        });
      } catch (error) {
        console.error('Error fetching Bitcoin data:', error);
        // Fallback data
        setBitcoinData({
          current_price: 67500,
          market_cap: 1335000000000,
          price_change_percentage_24h: 2.5,
          total_volume: 25000000000
        });
      } finally {
        setLoading(false);
      }
    };

    fetchBitcoinData();
    const interval = setInterval(fetchBitcoinData, 30000); // Update every 30 seconds

    return () => clearInterval(interval);
  }, []);

  const formatPrice = (price: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(price);
  };

  const formatMarketCap = (marketCap: number) => {
    const trillion = marketCap / 1000000000000;
    return `$${trillion.toFixed(2)}T`;
  };

  const formatVolume = (volume: number) => {
    const billion = volume / 1000000000;
    return `$${billion.toFixed(1)}B`;
  };

  // Featured stacking methods from our real tools and paths
  const featuredMethods = [
    {
      title: "Dollar-Cost Averaging",
      description: "Automatically invest a fixed amount regularly to reduce timing risk and build your Bitcoin stack steadily.",
      category: "beginner",
      difficulty: "Beginner",
      timeCommitment: "5 min setup",
      link: "/tools/dca-calculator"
    },
    {
      title: "Bitcoin Earning Cards",
      description: "Earn Bitcoin rewards on everyday purchases with specialized credit cards and cashback programs.",
      category: "intermediate", 
      difficulty: "Intermediate",
      timeCommitment: "Daily use",
      link: "/earn"
    },
    {
      title: "Personal Stack Strategy",
      description: "Follow my comprehensive step-by-step approach combining multiple methods for optimal Bitcoin accumulation.",
      category: "advanced",
      difficulty: "All Levels",
      timeCommitment: "Ongoing",
      link: "/personal-strategy"
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-hero-pattern section-padding">
        <div className="max-w-7xl mx-auto container-padding">
          <div className="text-center max-w-4xl mx-auto">
            <div className="mb-8">
              <div className="inline-flex items-center justify-center w-20 h-20 bg-bitcoin-orange text-white rounded-full text-4xl font-bold mb-6">
                ₿
              </div>
            </div>
            
            {/* Real-time Bitcoin Price */}
            {!loading && bitcoinData && (
              <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 max-w-2xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-bitcoin-orange">
                      {formatPrice(bitcoinData.current_price)}
                    </div>
                    <div className="text-sm text-gray-600">Current Price</div>
                  </div>
                  <div>
                    <div className={`text-xl md:text-2xl font-bold ${
                      bitcoinData.price_change_percentage_24h >= 0 ? 'text-green-600' : 'text-red-600'
                    }`}>
                      {bitcoinData.price_change_percentage_24h >= 0 ? '+' : ''}
                      {bitcoinData.price_change_percentage_24h.toFixed(2)}%
                    </div>
                    <div className="text-sm text-gray-600">24h Change</div>
                  </div>
                  <div>
                    <div className="text-xl md:text-2xl font-bold text-gray-700">
                      {formatMarketCap(bitcoinData.market_cap)}
                    </div>
                    <div className="text-sm text-gray-600">Market Cap</div>
                  </div>
                </div>
              </div>
            )}
            
            {loading && (
              <div className="mb-8 p-6 bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-200/50 max-w-2xl mx-auto">
                <div className="animate-pulse">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-center">
                    <div>
                      <div className="h-8 bg-linear-to-r from-orange-200 to-yellow-200 rounded mb-2 animate-shimmer"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                    <div>
                      <div className="h-8 bg-linear-to-r from-orange-200 to-yellow-200 rounded mb-2 animate-shimmer"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                    <div>
                      <div className="h-8 bg-linear-to-r from-orange-200 to-yellow-200 rounded mb-2 animate-shimmer"></div>
                      <div className="h-4 bg-gray-200 rounded"></div>
                    </div>
                  </div>
                </div>
              </div>
            )}
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-black mb-6 leading-tight">
              Walk the Path. Stack{" "}
              <span className="bg-linear-to-r from-orange-600 to-bitcoin-orange bg-clip-text text-transparent">Bitcoin Smarter.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-600 leading-relaxed mb-8 max-w-2xl mx-auto">
              Learn proven methods to earn and save Bitcoin safely. From dollar-cost averaging 
              to earning sats through rewards, discover the smartest ways to build your Bitcoin stack.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/personal-strategy"
                className="bg-linear-to-r from-orange-500 to-bitcoin-orange text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transform hover:-translate-y-1 hover:scale-105"
              >
                My Strategy
              </Link>
              <Link
                href="/tools"
                className="border-2 border-gray-300 text-gray-700 px-8 py-4 rounded-xl text-lg font-semibold hover:border-bitcoin-orange hover:text-bitcoin-orange hover:shadow-lg hover:shadow-bitcoin-orange/10 transition-all duration-300 transform hover:-translate-y-1"
              >
                View Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Stacking Methods */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Featured Stacking Methods
            </h2>
            <p className="text-xl text-gray-600">
              Start with these proven approaches to building your Bitcoin stack
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {featuredMethods.map((method, index) => {
              // Map method categories to icons
              const getMethodIcon = (category: string) => {
                switch(category) {
                  case 'beginner': return '🟢';
                  case 'intermediate': return '🟡';
                  case 'advanced': return '🔴';
                  default: return '₿';
                }
              };

              return (
                <div
                  key={index}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/10 transition-all duration-300 border border-gray-200/50 transform hover:-translate-y-2 hover:scale-105 group"
                >
                  <div className="text-bitcoin-orange text-3xl mb-4 group-hover:animate-bounce transition-all duration-300">
                    {getMethodIcon(method.category)}
                  </div>
                  <h3 className="text-xl font-bold mb-3 text-gray-900 group-hover:text-bitcoin-orange transition-colors duration-300">
                    {method.title}
                  </h3>
                  <p className="text-gray-600 mb-4 group-hover:text-gray-700 transition-colors duration-300">
                    {method.description}
                  </p>
                  <div className="mb-4">
                    <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-bitcoin-orange/10 text-bitcoin-orange">
                      {method.difficulty} • {method.timeCommitment}
                    </span>
                  </div>
                  <Link
                    href={method.link}
                    className="text-bitcoin-orange font-semibold hover:text-orange-600 transition-colors duration-300 flex items-center gap-2 group-hover:gap-3 group-hover:underline"
                  >
                    {method.link.includes('/tools/') ? 'Use Tool' : 'Learn More'}
                    <span className="transform group-hover:translate-x-1 transition-transform duration-300">→</span>
                  </Link>
                </div>
              );
            })}
          </div>
          
          <div className="text-center mt-12">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/personal-strategy"
                className="bg-linear-to-r from-orange-500 to-bitcoin-orange text-white px-8 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transform hover:-translate-y-1 hover:scale-105 inline-block"
              >
                My Strategy
              </Link>
              <Link
                href="/tools"
                className="border-2 border-bitcoin-orange text-bitcoin-orange px-8 py-3 rounded-xl font-semibold hover:bg-bitcoin-orange hover:text-white transition-colors duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transform hover:-translate-y-1 hover:scale-105 inline-block"
              >
                Use Bitcoin Tools
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Statistics Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
              Why Stack Bitcoin?
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-bitcoin-orange mb-2">21M</div>
              <div className="text-lg font-semibold text-black mb-2">Max Supply</div>
              <p className="text-gray-600">
                Bitcoin has a fixed supply cap, making it a scarce digital asset
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-bitcoin-orange mb-2">14+</div>
              <div className="text-lg font-semibold text-black mb-2">Years</div>
              <p className="text-gray-600">
                Bitcoin has operated continuously since 2009 without downtime
              </p>
            </div>
            
            <div className="text-center">
              <div className="text-4xl font-bold text-bitcoin-orange mb-2">24/7</div>
              <div className="text-lg font-semibold text-black mb-2">Trading</div>
              <p className="text-gray-600">
                Bitcoin markets never close, giving you flexibility to stack anytime
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-black">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Start Your Bitcoin Journey?
          </h2>
          <p className="text-xl text-gray-300 mb-8">
            Join thousands of people who are already stacking sats and building their Bitcoin stack.
          </p>
          <Link
            href="/personal-strategy"
            className="bg-linear-to-r from-orange-500 to-bitcoin-orange text-white px-8 py-4 rounded-xl text-lg font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transform hover:-translate-y-1 hover:scale-105 inline-block"
          >
            View My Strategy
          </Link>
          <p className="text-sm text-gray-400 mt-4">
            Not financial advice. Always do your own research.
          </p>
        </div>
      </section>
    </div>
  );
}
