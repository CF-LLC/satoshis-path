'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gradient-to-br from-black to-gray-900 text-white mt-auto">
      <div className="max-w-7xl mx-auto container-padding py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand Section */}
          <div className="col-span-1 lg:col-span-2">
            <div className="flex items-center space-x-2 mb-4 group">
              <div className="bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white p-2 rounded-xl font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:shadow-bitcoin-orange/25 transition-all duration-300">
                ₿
              </div>
              <span className="text-xl font-semibold group-hover:text-bitcoin-orange transition-colors duration-300">Satoshi's Path</span>
            </div>
            <p className="text-gray-400 mb-4 max-w-md">
              Your guide to stacking Bitcoin. Learn the best methods, tools, and strategies 
              to accumulate Bitcoin over time. Not financial advice.
            </p>
            <div className="flex space-x-4">
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-bitcoin-orange transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-bitcoin-orange/25 p-2 rounded-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z"/>
                </svg>
              </a>
              <a
                href="https://github.com/CF-LLC/satoshis-path"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-bitcoin-orange transition-all duration-300 transform hover:scale-110 hover:shadow-lg hover:shadow-bitcoin-orange/25 p-2 rounded-xl"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </a>
            </div>
            
            {/* Bitcoin Tip Section */}
            <div className="mt-6 p-4 bg-gradient-to-r from-bitcoin-orange/10 to-orange-500/10 rounded-xl border border-bitcoin-orange/20">
              <h4 className="text-bitcoin-orange font-semibold mb-3 flex items-center">
                <span className="mr-2">⚡</span>
                Like the content? Tip in sats!
              </h4>
              <div className="space-y-3">
                {/* Lightning Address */}
                <div>
                  <p className="text-xs text-gray-400 mb-1">Lightning Address:</p>
                  <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                    <code className="text-xs text-bitcoin-orange flex-1 font-mono">
                      spock@speed.app
                    </code>
                    <button
                      onClick={() => navigator.clipboard.writeText('spock@speed.app')}
                      className="ml-2 text-gray-400 hover:text-bitcoin-orange transition-colors text-xs"
                      title="Copy Lightning Address"
                    >
                      📋
                    </button>
                  </div>
                </div>
                
                {/* Bitcoin Address */}
                <div>
                  <p className="text-xs text-gray-400 mb-1">Bitcoin Address:</p>
                  <div className="flex items-center bg-gray-800 rounded-lg px-3 py-2">
                    <code className="text-xs text-bitcoin-orange flex-1 font-mono break-all">
                      bc1q4wnvs69sgyk6sta825ycuz7phm05mq4ax306z9
                    </code>
                    <button
                      onClick={() => navigator.clipboard.writeText('bc1q4wnvs69sgyk6sta825ycuz7phm05mq4ax306z9')}
                      className="ml-2 text-gray-400 hover:text-bitcoin-orange transition-colors text-xs"
                      title="Copy Bitcoin Address"
                    >
                      📋
                    </button>
                  </div>
                </div>
                
                <p className="text-xs text-gray-500 italic">
                  Every sat helps maintain and improve this resource! 🧡
                </p>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bitcoin-orange">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/tools" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Bitcoin Tools & Strategies
                </Link>
              </li>
              <li>
                <Link href="/earn" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  Earn Bitcoin
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/paths/personal-strategy" className="text-gray-400 hover:text-bitcoin-orange transition-colors">
                  My Personal Strategy
                </Link>
              </li>
            </ul>
          </div>

          {/* Bitcoin Resources */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bitcoin-orange">Bitcoin Hub</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/rabbit-hole"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  🕳️ Down the Rabbit Hole
                </Link>
              </li>
              <li>
                <Link
                  href="/wallet-analyzer"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  🔍 Analyze Wallet Activity
                </Link>
              </li>
              <li>
                <Link
                  href="/buy-bitcoin"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  💰 Buy Bitcoin
                </Link>
              </li>
              <li>
                <Link
                  href="/decentralized-wallet"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  🏦 Decentralized Wallet
                </Link>
              </li>
              <li>
                <Link
                  href="/videos"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  📺 Popular Videos
                </Link>
              </li>
            </ul>
          </div>

          {/* Community & Support */}
          <div>
            <h3 className="text-lg font-semibold mb-4 text-bitcoin-orange">Community</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/news"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  📰 Auto News
                </Link>
              </li>
              <li>
                <a
                  href="https://bitcoin.org/en/notable-users"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  🏆 Famous Endorsements
                </a>
              </li>
              <li>
                <a
                  href="https://store.bitcoin.org/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  🛍️ Bitcoin Merch
                </a>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  🐛 Report Problem
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-gray-400 hover:text-bitcoin-orange transition-colors flex items-center gap-2"
                >
                  💡 Request Feature
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* External Resources */}
        <div className="border-t border-gray-800 mt-8 pt-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
            <div>
              <h4 className="text-bitcoin-orange font-semibold mb-3">Educational Resources</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://bitcoin.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    Bitcoin.org
                  </a>
                </li>
                <li>
                  <a
                    href="https://bitcoinmagazine.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    Bitcoin Magazine
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.lopp.net/bitcoin-information.html"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    Jameson Lopp's Resources
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-bitcoin-orange font-semibold mb-3">Network Tools</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://mempool.space"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    Mempool Explorer
                  </a>
                </li>
                <li>
                  <a
                    href="https://blockstream.info"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    Blockstream Explorer
                  </a>
                </li>
                <li>
                  <a
                    href="https://bitcoin.clarkmoody.com/dashboard/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    Clark Moody Dashboard
                  </a>
                </li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-bitcoin-orange font-semibold mb-3">Market Data</h4>
              <ul className="space-y-2">
                <li>
                  <a
                    href="https://coinmarketcap.com/currencies/bitcoin/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    CoinMarketCap
                  </a>
                </li>
                <li>
                  <a
                    href="https://www.coingecko.com/en/coins/bitcoin"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    CoinGecko
                  </a>
                </li>
                <li>
                  <a
                    href="https://charts.bitcoin.com/btc"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-bitcoin-orange transition-colors text-sm"
                  >
                    Bitcoin Charts
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 text-center">
          <p className="text-gray-400">
            © {new Date().getFullYear()} Satoshi's Path. Not financial advice. 
            Always do your own research.
          </p>
        </div>
      </div>
    </footer>
  );
}