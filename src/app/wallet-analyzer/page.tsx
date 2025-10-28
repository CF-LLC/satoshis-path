'use client';

import { useState } from 'react';
import Link from "next/link";

export default function WalletAnalyzerPage() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [walletData, setWalletData] = useState<any>(null);
  const [error, setError] = useState('');

  // Famous Bitcoin wallets for demonstration
  const famousWallets = [
    {
      name: "Satoshi's Genesis Block",
      address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      description: "The very first Bitcoin address, containing the genesis block reward",
      balance: "50 BTC"
    },
    {
      name: "Silk Road FBI Wallet",
      address: "1F1tAaz5x1HUXrCNLbtMDqcw6o5GNn4xqX",
      description: "FBI seized wallet from Silk Road operations",
      balance: "69,370 BTC"
    },
    {
      name: "Mt. Gox Cold Storage",
      address: "1FeexV6bAHb8ybZjqQMjJrcCrHGW9sb6uF",
      description: "Former Mt. Gox exchange cold storage wallet",
      balance: "79,956 BTC"
    }
  ];

  const analyzeWallet = async () => {
    if (!address) {
      setError('Please enter a Bitcoin address');
      return;
    }

    // Basic Bitcoin address validation
    if (!address.match(/^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/) && !address.match(/^bc1[a-z0-9]{39,59}$/)) {
      setError('Please enter a valid Bitcoin address');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // In a real implementation, you would call a Bitcoin API here
      // For demo purposes, we'll simulate the data
      await new Promise(resolve => setTimeout(resolve, 2000));
      
      setWalletData({
        address: address,
        balance: Math.random() * 10,
        transactions: Math.floor(Math.random() * 1000),
        firstSeen: '2018-03-15',
        lastSeen: '2024-10-20',
        type: address.startsWith('bc1') ? 'Bech32 (SegWit)' : address.startsWith('3') ? 'P2SH' : 'P2PKH'
      });
    } catch (err) {
      setError('Failed to analyze wallet. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">🔍</span>
            BLOCKCHAIN ANALYSIS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bitcoin Wallet Analyzer
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto mb-8">
            Analyze any Bitcoin wallet address to view transaction history, balance, and activity patterns. 
            Perfect for researching wallet behavior and understanding Bitcoin flows.
          </p>
        </div>

        {/* Wallet Input */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Analyze a Bitcoin Address</h2>
          
          <div className="space-y-4">
            <div>
              <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                Bitcoin Address
              </label>
              <input
                type="text"
                id="address"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
                placeholder="Enter Bitcoin address (e.g., 1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa)"
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent"
              />
            </div>
            
            {error && (
              <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-xl">
                {error}
              </div>
            )}
            
            <button
              onClick={analyzeWallet}
              disabled={loading}
              className="w-full bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Analyzing...' : 'Analyze Wallet'}
            </button>
          </div>
        </div>

        {/* Results */}
        {walletData && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Wallet Analysis Results</h3>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Address</label>
                  <p className="text-gray-900 font-mono text-sm break-all">{walletData.address}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Address Type</label>
                  <p className="text-gray-900">{walletData.type}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Current Balance</label>
                  <p className="text-2xl font-bold text-orange-600">{walletData.balance.toFixed(8)} BTC</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Total Transactions</label>
                  <p className="text-xl font-semibold text-gray-900">{walletData.transactions.toLocaleString()}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">First Seen</label>
                  <p className="text-gray-900">{walletData.firstSeen}</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Last Activity</label>
                  <p className="text-gray-900">{walletData.lastSeen}</p>
                </div>
              </div>
            </div>
            
            <div className="mt-6 p-4 bg-orange-50 rounded-xl">
              <p className="text-orange-800 text-sm">
                <strong>Note:</strong> This is a demonstration tool. In a production environment, 
                this would connect to real blockchain data APIs for accurate analysis.
              </p>
            </div>
          </div>
        )}

        {/* Famous Wallets */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Famous Bitcoin Wallets</h2>
          <p className="text-gray-600 mb-6">
            Explore some of the most well-known Bitcoin addresses in history.
          </p>
          
          <div className="space-y-4">
            {famousWallets.map((wallet, index) => (
              <div key={index} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                <div className="flex flex-col md:flex-row md:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{wallet.name}</h3>
                    <p className="text-gray-600 mb-2">{wallet.description}</p>
                    <p className="text-sm font-mono text-gray-500 break-all">{wallet.address}</p>
                  </div>
                  <div className="mt-4 md:mt-0 md:ml-6 text-right">
                    <p className="text-xl font-bold text-orange-600">{wallet.balance}</p>
                    <button
                      onClick={() => setAddress(wallet.address)}
                      className="mt-2 text-orange-600 hover:text-orange-700 font-semibold text-sm"
                    >
                      Analyze This Wallet
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Privacy Notice</h2>
          <p className="text-orange-100 mb-4">
            Bitcoin transactions are public by design, but analyzing wallets should be done responsibly. 
            This tool is for educational purposes and understanding blockchain transparency.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/tools"
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 text-center"
            >
              Explore More Tools
            </Link>
            <Link
              href="/rabbit-hole"
              className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 text-center"
            >
              Learn More About Bitcoin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}