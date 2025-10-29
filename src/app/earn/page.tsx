import Link from "next/link";

export const metadata = {
  title: "Earn Bitcoin | Satoshi's Path",
  description: "Discover legitimate ways to earn your first Bitcoin through faucets, apps, games, and services. Start earning satoshis today!",
};

// Import referral data
const referrals = require('../../../data/referrals.json');

export default function EarnBitcoinPage() {
  type EarningItem = {
    name: string;
    description: string;
    url: string;
    features: string[];
    bonus?: string;
    code?: string;
  };

  type EarningCategory = {
    title: string;
    description: string;
    color: string;
    items: EarningItem[];
  };

  const earningCategories: EarningCategory[] = [
    {
      title: "🎮 Gaming & Apps",
      description: "Earn Bitcoin while having fun with mobile games and apps",
      color: "from-purple-500 to-pink-500",
      items: [
        {
          name: "ZBD Gaming",
          description: "Level up your gaming and earn Bitcoin. Get $2 instantly when you verify your identity.",
          url: referrals.earning_apps.zbd.url,
          bonus: referrals.earning_apps.zbd.bonus,
          features: ["Gaming rewards", "Instant Bitcoin", "No deposit required"]
        },
        {
          name: "Yotta Banking",
          description: "Banking app with crypto rewards and games. Get $2 credits to start.",
          url: referrals.earning_apps.yotta.url,
          bonus: referrals.earning_apps.yotta.bonus,
          code: referrals.earning_apps.yotta.code,
          features: ["Banking app", "Crypto rewards", "Prize games"]
        },
        {
          name: "Smiles Bitcoin",
          description: "Earn Bitcoin through various activities and challenges.",
          url: referrals.earning_apps.smiles_bitcoin.url,
          features: ["Multiple earning methods", "Regular challenges", "Community rewards"]
        }
      ]
    },
    {
      title: "🚰 Bitcoin Faucets",
      description: "Free Bitcoin dispensers - small amounts but completely free",
      color: "from-blue-500 to-cyan-500", 
      items: [
        {
          name: "Sats Faucet",
          description: "One of the most reliable Bitcoin faucets with regular payouts.",
          url: referrals.faucets.sats_faucet.url,
          code: referrals.faucets.sats_faucet.code,
          features: ["Hourly claims", "No minimum", "Direct to wallet"]
        },
        {
          name: "FreeBitco.in",
          description: "Classic Bitcoin faucet with lottery and interest features.",
          url: referrals.faucets.freebitcoin.url,
          code: referrals.faucets.freebitcoin.code,
          features: ["Hourly roll", "Lottery tickets", "Interest earnings"]
        }
      ]
    },
    {
      title: "⛏️ Cloud Mining",
      description: "Mine Bitcoin without hardware - mobile-friendly options",
      color: "from-orange-500 to-red-500",
      items: [
        {
          name: "Cloud Mine Crypto",
          description: "Earn crypto by tracking your sleep! Get 10% bonus with referral.",
          url: referrals.mining.cloud_mine_crypto.url,
          code: referrals.mining.cloud_mine_crypto.code,
          features: ["Sleep tracking", "Passive earning", "Health + wealth"]
        },
        {
          name: "Ember Fund Mining",
          description: "Bitcoin mining app - earn crypto while using your phone.",
          url: referrals.earning_apps.ember_fund.url,
          code: referrals.earning_apps.ember_fund.code,
          features: ["Mobile mining", "Background operation", "Daily rewards"]
        },
        {
          name: "BH Mining",
          description: "Cloud mining platform with various mining contracts.",
          url: referrals.mining.bh_mining.url,
          features: ["Multiple contracts", "Dashboard tracking", "Regular payouts"]
        },
        {
          name: "GoMining",
          description: "Professional cloud mining service with transparent operations.",
          url: referrals.mining.gomining.url,
          code: referrals.mining.gomining.code,
          features: ["Professional service", "Real mining", "Transparent rates"]
        }
      ]
    },
    {
      title: "📊 Other Opportunities",
      description: "Additional ways to earn Bitcoin and crypto",
      color: "from-green-500 to-teal-500",
      items: [
        {
          name: "Kalshi Predictions",
          description: "Prediction market platform. Both earn $10 when you sign up.",
          url: referrals.other.kalshi.url,
          bonus: referrals.other.kalshi.bonus,
          features: ["Prediction markets", "Real money", "News-based betting"]
        },
        {
          name: "Stake Gaming",
          description: "Gaming platform with crypto integration.",
          url: referrals.other.stake.url,
          code: referrals.other.stake.code,
          features: ["Casino games", "Crypto betting", "Live dealers"]
        }
      ]
    }
  ];

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bitcoin-orange via-orange-500 to-yellow-500 section-padding text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h1 className="text-5xl font-bold mb-6">
            🎯 Earn Your First Bitcoin
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed">
            Start earning Bitcoin today through legitimate apps, games, faucets, and services. 
            Perfect for beginners looking to get their first satoshis without investing money upfront.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30">
            <div className="text-4xl mb-4">⚡</div>
            <h2 className="text-2xl font-bold mb-2">Start Earning Today</h2>
            <p className="opacity-90">
              No experience required • Small amounts add up • Learn while you earn
            </p>
          </div>
        </div>
      </section>

      {/* Earning Categories */}
      {earningCategories.map((category, index) => (
        <section key={index} className={`section-padding ${index % 2 === 0 ? 'bg-gray-50' : 'bg-white'}`}>
          <div className="max-w-7xl mx-auto container-padding">
            <div className="text-center mb-12">
              <h2 className={`text-4xl font-bold mb-4 text-gray-900`}>
                {category.title}
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                {category.description}
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {category.items.map((item, itemIndex) => (
                <div
                  key={itemIndex}
                  className="bg-white border-2 border-gray-200 hover:border-bitcoin-orange rounded-xl p-6 hover:shadow-2xl hover:shadow-bitcoin-orange/20 transition-all duration-300 group transform hover:-translate-y-2"
                >
                  {/* Header */}
                  <div className="mb-4">
                    <h3 className="text-xl font-bold text-black mb-2 group-hover:text-bitcoin-orange transition-colors">
                      {item.name}
                    </h3>
                    
                    {/* Bonus/Code Display */}
                    <div className="flex flex-wrap gap-2 mb-3">
                      {item.bonus && (
                        <span className="bg-green-500 text-white px-3 py-1 rounded-lg text-sm font-semibold">
                          🎁 {item.bonus}
                        </span>
                      )}
                      {item.code && (
                        <span className="bg-gray-800 text-white px-2 py-1 rounded text-xs font-mono">
                          CODE: {item.code}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-gray-600 mb-4 leading-relaxed">
                    {item.description}
                  </p>

                  {/* Features */}
                  <div className="mb-6">
                    <ul className="space-y-1">
                      {item.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="text-sm text-gray-700 flex items-center">
                          <span className="text-green-500 mr-2">✓</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* CTA Button */}
                  <a
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`w-full bg-gradient-to-r ${category.color} text-white px-6 py-3 rounded-xl font-semibold hover:opacity-90 transition-all duration-300 text-center block shadow-lg hover:shadow-xl transform hover:scale-105`}
                  >
                    Start Earning ↗
                  </a>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* Important Information */}
      <section className="section-padding bg-gray-900 text-white">
        <div className="max-w-4xl mx-auto container-padding">
          <h2 className="text-3xl font-bold mb-8 text-center">
            📚 Important Information
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Safety Tips */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-yellow-400">
                🛡️ Safety Tips
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  Never share your private keys or seed phrases
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  Start with small amounts to test platforms
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  Research each platform before investing time
                </li>
                <li className="flex items-start">
                  <span className="text-yellow-400 mr-2 mt-1">•</span>
                  Use dedicated email for earning apps
                </li>
              </ul>
            </div>

            {/* Realistic Expectations */}
            <div className="bg-gray-800 rounded-xl p-6">
              <h3 className="text-xl font-bold mb-4 text-blue-400">
                💡 Realistic Expectations
              </h3>
              <ul className="space-y-3 text-gray-300">
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  Earnings are typically small amounts
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  These are learning opportunities, not investments
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  Nothing replaces proper DCA investing
                </li>
                <li className="flex items-start">
                  <span className="text-blue-400 mr-2 mt-1">•</span>
                  Focus on Bitcoin education alongside earning
                </li>
              </ul>
            </div>
          </div>

          {/* Next Steps */}
          <div className="mt-12 text-center">
            <h3 className="text-2xl font-bold mb-6">Ready to Level Up?</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Link
                href="/buy-bitcoin"
                className="bg-bitcoin-orange hover:bg-orange-600 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 block shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Buy Bitcoin Properly →
              </Link>
              <Link
                href="/decentralized-wallet"
                className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 block shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                Secure Your Bitcoin →
              </Link>
              <Link
                href="/personal-strategy"
                className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-4 rounded-xl font-semibold transition-all duration-300 block shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                View My Strategy →
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}