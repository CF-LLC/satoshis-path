'use client';

import { useState } from 'react';
import Link from "next/link";

export default function WalletAnalyzerPage() {
  const [address, setAddress] = useState('');
  const [loading, setLoading] = useState(false);
  const [walletData, setWalletData] = useState<any>(null);
  const [error, setError] = useState('');

  // Real Bitcoin wallets for demonstration (verified addresses)
  const famousWallets = [
    {
      name: "Satoshi's Genesis Block",
      address: "1A1zP1eP5QGefi2DMPTfTL5SLmv7DivfNa",
      description: "The very first Bitcoin address, containing the genesis block reward (unspendable)",
      balance: "50.00000000 BTC",
      note: "Genesis block reward - historically significant but unspendable"
    },
    {
      name: "Bitcoin Pizza Transaction",
      address: "1XPTgDRhN8RFnzniWCddobD9iKZatrvH4",
      description: "Related to the famous 10,000 BTC pizza purchase in 2010",
      balance: "Verify Live",
      note: "Historic transaction - first real-world Bitcoin purchase"
    },
    {
      name: "Early Mining Address",
      address: "12c6DSiU4Rq3P4ZxziKxzrL5LmMBrzjrJX",
      description: "Well-known early Bitcoin address from 2009-2010 era",
      balance: "Verify Live", 
      note: "Early Bitcoin mining address - check current balance"
    },
    {
      name: "Hal Finney Address",
      address: "1Q2TWHE3GMdB6BZKafqwxXtWAWgFt5Jvm3",
      description: "Address associated with Hal Finney, first Bitcoin transaction recipient",
      balance: "Verify Live",
      note: "Historic significance - first person to receive Bitcoin from Satoshi"
    }
  ];

  const analyzeWallet = async () => {
    if (!address) {
      setError('Please enter a Bitcoin address');
      return;
    }

    // Enhanced Bitcoin address validation
    const isValidLegacy = /^[13][a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address);
    const isValidSegwit = /^bc1[a-z0-9]{39,59}$/.test(address);
    const isValidP2SH = /^3[a-km-zA-HJ-NP-Z1-9]{25,34}$/.test(address);
    
    if (!isValidLegacy && !isValidSegwit && !isValidP2SH) {
      setError('Please enter a valid Bitcoin address (Legacy, P2SH, or Bech32 format)');
      return;
    }

    setLoading(true);
    setError('');

    try {
      // Try multiple Bitcoin APIs for real data
      let walletInfo: any = null;
      
      // Try BlockCypher API first (free tier available)
      try {
        const blockcypherResponse = await fetch(`https://api.blockcypher.com/v1/btc/main/addrs/${address}?limit=50`);
        if (blockcypherResponse.ok) {
          const data = await blockcypherResponse.json();
          walletInfo = {
            address: address,
            balance: data.balance / 100000000, // Convert satoshis to BTC
            transactions: data.n_tx || 0,
            totalReceived: data.total_received / 100000000,
            totalSent: data.total_sent / 100000000,
            firstSeen: data.txrefs && data.txrefs.length > 0 ? data.txrefs[data.txrefs.length - 1].confirmed?.split('T')[0] : 'Unknown',
            lastSeen: data.txrefs && data.txrefs.length > 0 ? data.txrefs[0].confirmed?.split('T')[0] : 'Unknown',
            type: address.startsWith('bc1') ? 'Bech32 (Native SegWit)' : 
                  address.startsWith('3') ? 'P2SH (Script Hash)' : 'P2PKH (Legacy)',
            unconfirmedBalance: data.unconfirmed_balance / 100000000,
            addressAge: 0
          };
        }
      } catch (blockCypherError) {
        console.log('BlockCypher API failed, trying fallback...');
      }

      // Fallback to Blockstream API if BlockCypher fails
      if (!walletInfo) {
        try {
          const [addressInfo, addressTxs] = await Promise.all([
            fetch(`https://blockstream.info/api/address/${address}`),
            fetch(`https://blockstream.info/api/address/${address}/txs`)
          ]);
          
          if (addressInfo.ok && addressTxs.ok) {
            const addrData = await addressInfo.json();
            const txData = await addressTxs.json();
            
            walletInfo = {
              address: address,
              balance: (addrData.chain_stats.funded_txo_sum - addrData.chain_stats.spent_txo_sum) / 100000000,
              transactions: addrData.chain_stats.tx_count,
              totalReceived: addrData.chain_stats.funded_txo_sum / 100000000,
              totalSent: addrData.chain_stats.spent_txo_sum / 100000000,
              firstSeen: txData.length > 0 ? new Date(txData[txData.length - 1].status.block_time * 1000).toISOString().split('T')[0] : 'Unknown',
              lastSeen: txData.length > 0 ? new Date(txData[0].status.block_time * 1000).toISOString().split('T')[0] : 'Unknown',
              type: address.startsWith('bc1') ? 'Bech32 (Native SegWit)' : 
                    address.startsWith('3') ? 'P2SH (Script Hash)' : 'P2PKH (Legacy)',
              unconfirmedBalance: (addrData.mempool_stats.funded_txo_sum - addrData.mempool_stats.spent_txo_sum) / 100000000,
              addressAge: 0
            };
          }
        } catch (blockstreamError) {
          console.log('Blockstream API also failed');
        }
      }

      // If both APIs fail, show error
      if (!walletInfo) {
        throw new Error('Unable to fetch wallet data from blockchain APIs');
      }

      // Calculate address age if we have first seen date
      if (walletInfo.firstSeen !== 'Unknown') {
        const firstDate = new Date(walletInfo.firstSeen);
        const today = new Date();
        walletInfo.addressAge = Math.floor((today.getTime() - firstDate.getTime()) / (1000 * 60 * 60 * 24));
      }
      
      setWalletData(walletInfo);
    } catch (err) {
      console.error('Error fetching wallet data:', err);
      setError('Unable to fetch real-time wallet data. The Bitcoin network may be experiencing issues or the address may not exist.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
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
              className="w-full bg-linear-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Fetching Live Data from Blockchain...' : 'Analyze Wallet (Live Data)'}
            </button>
          </div>
        </div>

        {/* Results */}
        {walletData && (
          <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-xl font-bold text-gray-900">Live Blockchain Analysis</h3>
              <div className="flex items-center text-green-600 text-sm">
                <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse mr-2"></div>
                Real-time data
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <label className="text-sm font-medium text-gray-500">Address Age</label>
                  <p className="text-gray-900">{walletData.addressAge} days</p>
                </div>
              </div>
              
              <div className="space-y-4">
                <div>
                  <label className="text-sm font-medium text-gray-500">Confirmed Balance</label>
                  <p className="text-2xl font-bold text-orange-600">{walletData.balance.toFixed(8)} BTC</p>
                  <p className="text-sm text-gray-500">${(walletData.balance * 67000).toLocaleString('en-US', { maximumFractionDigits: 2 })} USD*</p>
                </div>
                {walletData.unconfirmedBalance > 0 && (
                  <div>
                    <label className="text-sm font-medium text-gray-500">Unconfirmed Balance</label>
                    <p className="text-lg font-semibold text-yellow-600">{walletData.unconfirmedBalance.toFixed(8)} BTC</p>
                  </div>
                )}
                <div>
                  <label className="text-sm font-medium text-gray-500">Total Received</label>
                  <p className="text-lg font-semibold text-green-600">{walletData.totalReceived.toFixed(8)} BTC</p>
                </div>
                <div>
                  <label className="text-sm font-medium text-gray-500">Total Sent</label>
                  <p className="text-lg font-semibold text-red-600">{walletData.totalSent.toFixed(8)} BTC</p>
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
            
            <div className="mt-6 p-4 bg-green-50 rounded-xl">
              <p className="text-green-800 text-sm">
                <strong>Live Data:</strong> This information is fetched directly from the Bitcoin blockchain using real-time APIs. 
                *USD values are estimated using approximate Bitcoin price. Data refreshes each time you analyze an address.
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
                <div className="flex flex-col lg:flex-row lg:items-center justify-between">
                  <div className="flex-1">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{wallet.name}</h3>
                    <p className="text-gray-600 mb-2">{wallet.description}</p>
                    <p className="text-sm font-mono text-gray-500 break-all mb-2">{wallet.address}</p>
                    <p className="text-xs text-gray-400 italic">{wallet.note}</p>
                  </div>
                  <div className="mt-4 lg:mt-0 lg:ml-6 text-right">
                    <p className="text-xl font-bold text-orange-600 mb-1">{wallet.balance}</p>
                    {wallet.balance !== "Verify Live" && (
                      <p className="text-sm text-gray-500 mb-3">
                        ≈ ${(parseFloat(wallet.balance.replace(/[^\d.]/g, '')) * 67000).toLocaleString('en-US', { maximumFractionDigits: 0 })} USD*
                      </p>
                    )}
                    {wallet.balance === "Verify Live" && (
                      <p className="text-sm text-blue-600 mb-3 italic">
                        Click to see live balance
                      </p>
                    )}
                    <button
                      onClick={() => setAddress(wallet.address)}
                      className="bg-orange-100 text-orange-700 hover:bg-orange-200 px-4 py-2 rounded-lg font-semibold text-sm transition-colors"
                    >
                      {wallet.balance === "Verify Live" ? "Check Live Balance" : "Analyze This Wallet"}
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Disclaimer */}
        <div className="bg-linear-to-r from-orange-500 to-bitcoin-orange rounded-2xl p-8 text-white">
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