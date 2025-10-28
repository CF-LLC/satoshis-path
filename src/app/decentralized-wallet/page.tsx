import Link from "next/link";

export const metadata = {
  title: "Decentralized Wallets | Satoshi's Path",
  description: "Learn about self-custody Bitcoin wallets. Compare hardware wallets, mobile wallets, and desktop solutions for securing your Bitcoin.",
};

export default function DecentralizedWalletPage() {
  type WalletExample = {
    name: string;
    price: string;
    features: string[];
    pros: string[];
    cons: string[];
    buyLink?: string;
  };

  const walletTypes = [
    {
      type: "Hardware Wallets",
      icon: "🔒",
      description: "Physical devices that store your private keys offline",
      security: "Highest",
      convenience: "Medium",
      cost: "$50-200",
      bestFor: "Large amounts, long-term storage",
      examples: [
        {
          name: "Ledger Nano S Plus",
          price: "$79",
          features: ["1,100+ coins", "Bluetooth", "Ledger Live app"],
          pros: ["Affordable", "Trusted brand", "Large coin support"],
          cons: ["Small screen", "Limited apps"],
          buyLink: "https://shop.ledger.com/?r=cooper"
        },
        {
          name: "Trezor Model T",
          price: "$219",
          features: ["Touchscreen", "1,600+ coins", "Password manager"],
          pros: ["Open source", "Large screen", "Advanced features"],
          cons: ["More expensive", "Learning curve"],
          buyLink: "https://trezor.io/r/cooper"
        },
        {
          name: "Coldcard Mk4",
          price: "$147",
          features: ["Bitcoin only", "Air-gapped", "Secure element"],
          pros: ["Bitcoin focused", "Maximum security", "Open source"],
          cons: ["Bitcoin only", "Advanced users"],
          buyLink: "https://coldcard.com/"
        },
        {
          name: "Tangem Wallet",
          price: "$49",
          features: ["Card design", "NFC tap-to-sign", "Multi-crypto"],
          pros: ["Ultra portable", "Easy to use", "Affordable"],
          cons: ["Newer brand", "Mobile-dependent"],
          buyLink: "https://tangem.com/invite/E6LBFB"
        }
      ]
    },
    {
      type: "Mobile Wallets",
      icon: "📱",
      description: "Smartphone apps for everyday Bitcoin transactions",
      security: "Medium",
      convenience: "High",
      cost: "Free",
      bestFor: "Daily transactions, small amounts",
      examples: [
        {
          name: "Blue Wallet",
          price: "Free",
          features: ["Lightning Network", "Watch-only", "Multisig"],
          pros: ["Feature rich", "Lightning support", "Open source"],
          cons: ["Complex for beginners", "Hot wallet risks"],
          buyLink: "https://bluewallet.io/"
        },
        {
          name: "Phoenix Wallet",
          price: "Free",
          features: ["Lightning focused", "Non-custodial", "Simple UX"],
          pros: ["Easy Lightning", "Great UX", "Automatic channels"],
          cons: ["Lightning only", "Channel management fees"],
          buyLink: "https://phoenix.acinq.co/"
        },
        {
          name: "Muun Wallet",
          price: "Free",
          features: ["On-chain + Lightning", "Simple", "Submarine swaps"],
          pros: ["Unified experience", "Very simple", "Good for beginners"],
          cons: ["Higher fees", "Less control"],
          buyLink: "https://muun.com/"
        }
      ]
    },
    {
      type: "Desktop Wallets",
      icon: "💻",
      description: "Computer software for managing Bitcoin with more features",
      security: "Medium-High",
      convenience: "Medium",
      cost: "Free",
      bestFor: "Power users, advanced features",
      examples: [
        {
          name: "Electrum",
          price: "Free",
          features: ["SPV client", "Hardware wallet support", "Advanced features"],
          pros: ["Lightweight", "Powerful", "Long history"],
          cons: ["Complex UI", "Not beginner friendly"],
          buyLink: "https://electrum.org/"
        },
        {
          name: "Sparrow Wallet",
          price: "Free",
          features: ["Privacy focused", "Hardware wallet support", "PSBT"],
          pros: ["Privacy features", "Modern UI", "Advanced tools"],
          cons: ["Desktop only", "Learning curve"],
          buyLink: "https://sparrowwallet.com/"
        },
        {
          name: "Bitcoin Core",
          price: "Free",
          features: ["Full node", "Complete validation", "Reference client"],
          pros: ["Maximum security", "Full validation", "Support network"],
          cons: ["Large download", "Technical knowledge required"],
          buyLink: "https://bitcoin.org/en/download"
        }
      ]
    }
  ];

  const securityTips = [
    {
      title: "Seed Phrase Security",
      icon: "📝",
      tips: [
        "Write seed phrase on paper, never store digitally",
        "Make multiple copies and store in different locations",
        "Consider metal backup for fire/water protection",
        "Never share your seed phrase with anyone"
      ]
    },
    {
      title: "Wallet Setup",
      icon: "⚙️",
      tips: [
        "Always buy hardware wallets from official sources",
        "Verify device authenticity before use",
        "Initialize wallet yourself, never use pre-configured devices",
        "Test recovery process with small amounts first"
      ]
    },
    {
      title: "Operational Security",
      icon: "🛡️",
      tips: [
        "Use strong, unique passwords and PINs",
        "Keep firmware updated on hardware wallets",
        "Be cautious of phishing attempts and fake apps",
        "Consider using a dedicated computer for Bitcoin activities"
      ]
    }
  ];

  const walletComparison = [
    { feature: "Security Level", hardware: "Highest", mobile: "Medium", desktop: "Medium-High" },
    { feature: "Convenience", hardware: "Medium", mobile: "High", desktop: "Medium" },
    { feature: "Cost", hardware: "$50-200", mobile: "Free", desktop: "Free" },
    { feature: "Best For", hardware: "Storage", mobile: "Payments", desktop: "Management" },
    { feature: "Internet Required", hardware: "Setup only", mobile: "Yes", desktop: "Yes" },
    { feature: "Backup Complexity", hardware: "Medium", mobile: "Easy", desktop: "Medium" }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">🏦</span>
            SELF-CUSTODY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Decentralized Bitcoin Wallets
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Take control of your Bitcoin with self-custody wallets. Learn about different wallet types, 
            security practices, and find the perfect solution for your needs.
          </p>
        </div>

        {/* Why Self-Custody */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Why Choose Self-Custody?</h2>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🔑</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">True Ownership</h3>
              <p className="text-gray-600">Control your private keys and truly own your Bitcoin. No third party can freeze or confiscate your funds.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🛡️</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Enhanced Security</h3>
              <p className="text-gray-600">Eliminate counterparty risk. Your Bitcoin is only as secure as your personal security practices.</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">🌐</span>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Censorship Resistance</h3>
              <p className="text-gray-600">Access your Bitcoin anywhere, anytime. No accounts to be closed or transactions to be blocked.</p>
            </div>
          </div>
        </div>

        {/* Wallet Types */}
        <div className="space-y-12 mb-12">
          {walletTypes.map((walletType, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{walletType.icon}</span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">{walletType.type}</h2>
                  <p className="text-gray-600">{walletType.description}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-4 bg-gray-50 rounded-xl">
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-500">Security</span>
                  <p className="font-semibold text-gray-900">{walletType.security}</p>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-500">Convenience</span>
                  <p className="font-semibold text-gray-900">{walletType.convenience}</p>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-500">Cost</span>
                  <p className="font-semibold text-gray-900">{walletType.cost}</p>
                </div>
                <div className="text-center">
                  <span className="text-sm font-medium text-gray-500">Best For</span>
                  <p className="font-semibold text-gray-900">{walletType.bestFor}</p>
                </div>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {walletType.examples.map((wallet, walletIndex) => (
                  <div key={walletIndex} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <div className="flex justify-between items-start mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{wallet.name}</h3>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-sm font-medium">
                        {wallet.price}
                      </span>
                    </div>
                    
                    <div className="space-y-3">
                      <div>
                        <h4 className="text-sm font-medium text-gray-700 mb-1">Features</h4>
                        <div className="flex flex-wrap gap-1">
                          {wallet.features.map((feature, i) => (
                            <span key={i} className="bg-gray-100 text-gray-700 px-2 py-1 rounded text-xs">
                              {feature}
                            </span>
                          ))}
                        </div>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-3 text-xs">
                        <div>
                          <h5 className="font-medium text-green-700 mb-1">Pros</h5>
                          <ul className="text-gray-600 space-y-1">
                            {wallet.pros.map((pro, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-green-500 mt-0.5">✓</span>
                                <span>{pro}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                        <div>
                          <h5 className="font-medium text-red-700 mb-1">Cons</h5>
                          <ul className="text-gray-600 space-y-1">
                            {wallet.cons.map((con, i) => (
                              <li key={i} className="flex items-start gap-1">
                                <span className="text-red-500 mt-0.5">✗</span>
                                <span>{con}</span>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </div>
                      
                      {wallet.buyLink && (
                        <div className="mt-4">
                          <a
                            href={wallet.buyLink}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="w-full bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-4 py-2 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl text-center block text-sm"
                          >
                            Buy {wallet.name}
                          </a>
                        </div>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Comparison Table */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-8 text-center">Wallet Type Comparison</h2>
          
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-gray-200">
                  <th className="text-left py-3 px-4 font-semibold text-gray-900">Feature</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Hardware</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Mobile</th>
                  <th className="text-center py-3 px-4 font-semibold text-gray-900">Desktop</th>
                </tr>
              </thead>
              <tbody>
                {walletComparison.map((row, index) => (
                  <tr key={index} className="border-b border-gray-100">
                    <td className="py-4 px-4 font-medium text-gray-900">{row.feature}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.hardware}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.mobile}</td>
                    <td className="py-4 px-4 text-center text-gray-600">{row.desktop}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Security Best Practices */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {securityTips.map((section, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-2xl">{section.icon}</span>
                <h3 className="text-lg font-bold text-gray-900">{section.title}</h3>
              </div>
              <ul className="space-y-2">
                {section.tips.map((tip, tipIndex) => (
                  <li key={tipIndex} className="flex items-start gap-2 text-gray-600">
                    <span className="text-orange-500 mt-1">•</span>
                    <span className="text-sm">{tip}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-2xl p-8 text-white">
          <div className="text-center">
            <h2 className="text-2xl font-bold mb-4">Ready to Take Control of Your Bitcoin?</h2>
            <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
              Start with a small amount and practice using self-custody wallets. As you become comfortable, 
              gradually move more of your Bitcoin to your own control.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/buy-bitcoin"
                className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 text-center"
              >
                Buy Bitcoin First
              </Link>
              <Link
                href="/tools"
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-semibold hover:bg-white hover:text-orange-600 transition-all duration-300 text-center"
              >
                Use Bitcoin Tools
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}