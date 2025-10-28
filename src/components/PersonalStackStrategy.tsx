'use client';

import React, { useState } from 'react';
import Link from 'next/link';

interface StrategyStep {
  id: number;
  title: string;
  description: string;
  details: string;
  tips: string[];
  timeframe: string;
  difficulty: 'Beginner' | 'Intermediate' | 'Advanced';
  priority: 'High' | 'Medium' | 'Low';
  tools?: string[];
  referralLinks?: Array<{
    name: string;
    url: string;
    description: string;
    bonus?: string;
  }>;
}

const strategySteps: StrategyStep[] = [
  {
    id: 1,
    title: "Financial Foundation Setup",
    description: "Establish your financial base before investing in Bitcoin",
    details: "Before buying any Bitcoin, ensure you have a solid financial foundation. This means having an emergency fund covering 3-6 months of expenses, paying off high-interest debt, and having a stable income source. Bitcoin is volatile and should only be purchased with money you can afford to lose or hold for the long term.",
    tips: [
      "Build emergency fund first (3-6 months expenses)",
      "Pay off credit card debt and high-interest loans (especially >7% APR)",
      "Ensure stable income and budget tracking system",
      "Consider basic health insurance coverage",
      "Only invest what you can afford to lose or hold for 4+ years"
    ],
    timeframe: "1-6 months",
    difficulty: "Beginner",
    priority: "High"
  },
  {
    id: 2,
    title: "Education & Security Setup",
    description: "Learn Bitcoin fundamentals and set up secure storage",
    details: "Understanding Bitcoin is crucial before investing significant amounts. Set up proper security practices including hardware wallets and backup procedures. This knowledge will protect you from scams and help you make informed decisions.",
    tips: [
      "Read 'The Bitcoin Standard' by Saifedean Ammous",
      "Purchase a hardware wallet for cold storage",
      "Learn about seed phrases and backup procedures (metal backups)",
      "Understand Bitcoin basics: mining, nodes, transactions",
      "Practice with small amounts first ($50-100)",
      "Never share your seed phrase with anyone"
    ],
    timeframe: "2-4 weeks",
    difficulty: "Beginner",
    priority: "High",
    tools: ["Hardware Wallet", "Bitcoin Books", "Educational Resources"],
    referralLinks: [
      {
        name: "Ledger Hardware Wallet",
        url: "https://shop.ledger.com/?r=cooper",
        description: "Secure hardware wallet for Bitcoin storage",
        bonus: "Official Ledger partner"
      },
      {
        name: "Trezor Hardware Wallet", 
        url: "https://trezor.io/r/cooper",
        description: "Open-source hardware wallet",
        bonus: "Open source security"
      },
      {
        name: "Tangem Wallet Cards",
        url: "https://tangem.com/invite/E6LBFB",
        description: "Card-style hardware wallet",
        bonus: "Discount with referral"
      }
    ]
  },
  {
    id: 3,
    title: "Start Small with Strike",
    description: "Begin your Bitcoin journey with zero-fee purchases",
    details: "Strike offers the best entry point for new Bitcoin buyers with zero purchase fees and lightning-fast transactions. Start with small amounts ($25-50) to get comfortable with the process before scaling up your investments.",
    tips: [
      "Download Strike app and complete verification",
      "Start with small purchases ($25-50) to learn the process",
      "Use ACH bank transfers for lowest fees",
      "Set up direct deposit to earn Bitcoin on paycheck",
      "Practice sending Bitcoin to your hardware wallet",
      "Take advantage of zero-fee Bitcoin purchases"
    ],
    timeframe: "1 week",
    difficulty: "Beginner", 
    priority: "High",
    tools: ["Strike App", "Bank Account"],
    referralLinks: [
      {
        name: "Strike Bitcoin App",
        url: "https://invite.strike.me/cooper",
        description: "Zero-fee Bitcoin purchases and Lightning payments",
        bonus: "Best fees for beginners"
      }
    ]
  },
  {
    id: 4,
    title: "Automate with Swan Bitcoin DCA",
    description: "Set up automatic dollar-cost averaging for consistent accumulation",
    details: "Dollar-cost averaging (DCA) is the most effective strategy for building Bitcoin wealth over time. Swan Bitcoin offers automated recurring purchases that remove emotion from your investing and ensure you're consistently accumulating Bitcoin regardless of price movements.",
    tips: [
      "Start with weekly or bi-weekly purchases",
      "Begin with an amount you're comfortable with ($50-200/week)",
      "Connect your bank account for automatic transfers",
      "Don't try to time the market - consistency beats timing",
      "Increase your DCA amount as your income grows",
      "Set up automatic withdrawals to your hardware wallet"
    ],
    timeframe: "Ongoing (set once)",
    difficulty: "Beginner",
    priority: "High", 
    tools: ["Swan Bitcoin", "Bank Account", "Hardware Wallet"],
    referralLinks: [
      {
        name: "Swan Bitcoin DCA",
        url: "https://www.swanbitcoin.com/cooper",
        description: "Automated Bitcoin dollar-cost averaging",
        bonus: "Premium DCA platform"
      }
    ]
  },
  {
    id: 5,
    title: "Earn Bitcoin on Purchases",
    description: "Get Bitcoin rewards on everyday spending with earning apps",
    details: "While you're building your DCA strategy, maximize your Bitcoin accumulation by earning sats on everyday activities. These methods won't make you rich but can add meaningful amounts over time, especially when Bitcoin appreciates.",
    tips: [
      "Use Fold card for Bitcoin rewards on purchases",
      "Listen to podcasts with Fountain for Bitcoin rewards",
      "Play games with ZBD during downtime",
      "Track sleep with CloudMine for passive earning",
      "Never change spending habits just for rewards",
      "Treat earning apps as fun bonuses, not investment strategies"
    ],
    timeframe: "Ongoing",
    difficulty: "Beginner",
    priority: "Medium",
    tools: ["Fold Card", "Fountain App", "ZBD Gaming"],
    referralLinks: [
      {
        name: "ZBD Gaming App",
        url: "https://zbd.link/hcHi/invite?af_sub1=25DPZ4&deep_link_value=fwb_two_for_two",
        description: "Earn Bitcoin playing mobile games",
        bonus: "$2 Bitcoin signup bonus"
      },
      {
        name: "CloudMine Sleep Tracker",
        url: "https://cloudminecrypto.com/?invite_code=V4ex9jyLXBDJG52v",
        description: "Earn crypto tracking your sleep",
        bonus: "10% bonus with referral"
      }
    ]
  },
  {
    id: 6,
    title: "Advanced Strategies & Scaling",
    description: "Optimize your strategy as your Bitcoin knowledge and stack grows",
    details: "As you become more comfortable with Bitcoin and your stack grows, consider advanced strategies like running a node, participating in Lightning Network, or exploring additional earning opportunities. Always prioritize security and education over complex strategies.",
    tips: [
      "Consider running a Bitcoin node for network participation",
      "Explore Lightning Network for fast, cheap transactions", 
      "Look into Bitcoin-backed loans (be very careful)",
      "Consider tax-loss harvesting strategies",
      "Explore international exchanges for lower fees",
      "Never risk more than you can afford to lose"
    ],
    timeframe: "6+ months after starting",
    difficulty: "Advanced",
    priority: "Low",
    tools: ["Bitcoin Node", "Lightning Wallet", "Advanced Exchanges"],
    referralLinks: [
      {
        name: "Kalshi Prediction Markets",
        url: "https://kalshi.com/sign-up/?referral=c29a8806-fb0a-4672-98ad-a11e6ff97a96&m=true",
        description: "Prediction markets for additional income",
        bonus: "$10 signup bonus each"
      }
    ]
  }
];

export default function PersonalStackStrategy() {
  const [activeStep, setActiveStep] = useState<number | null>(null);

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'Beginner': return 'bg-green-100 text-green-800 border-green-200';
      case 'Intermediate': return 'bg-yellow-100 text-yellow-800 border-yellow-200';
      case 'Advanced': return 'bg-red-100 text-red-800 border-red-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case 'High': return 'bg-red-500';
      case 'Medium': return 'bg-yellow-500';
      case 'Low': return 'bg-green-500';
      default: return 'bg-gray-500';
    }
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-bitcoin-orange via-orange-500 to-yellow-500 section-padding text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <div className="text-6xl mb-6">🎯</div>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            My Personal Bitcoin Stack Strategy
          </h1>
          <p className="text-xl mb-8 opacity-90 leading-relaxed max-w-3xl mx-auto">
            This is the exact step-by-step approach I use to accumulate Bitcoin efficiently and safely. 
            Includes all my referral links and detailed explanations of each method I personally use and recommend.
          </p>
          <div className="bg-white/20 backdrop-blur-sm rounded-2xl p-6 border border-white/30 max-w-2xl mx-auto">
            <h2 className="text-2xl font-bold mb-4">💡 Strategy Overview</h2>
            <p className="opacity-90">
              A comprehensive approach combining automated investing, earning opportunities, 
              and advanced security practices for optimal Bitcoin accumulation.
            </p>
          </div>
        </div>
      </section>

      {/* Strategy Steps */}
      <section className="section-padding bg-gray-50">
        <div className="max-w-4xl mx-auto container-padding">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold mb-4 text-gray-900">
              Step-by-Step Implementation Guide
            </h2>
            <p className="text-xl text-gray-600">
              Follow these steps in order for the most effective Bitcoin accumulation strategy
            </p>
          </div>

          <div className="space-y-6">
            {strategySteps.map((step, index) => (
              <div
                key={step.id}
                className="bg-white rounded-xl shadow-lg border border-gray-200 overflow-hidden transition-all duration-300 hover:shadow-xl"
              >
                {/* Step Header */}
                <div 
                  className="p-6 cursor-pointer"
                  onClick={() => setActiveStep(activeStep === step.id ? null : step.id)}
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <div className="flex-shrink-0">
                        <div className="w-12 h-12 bg-bitcoin-orange text-white rounded-full flex items-center justify-center font-bold text-lg">
                          {step.id}
                        </div>
                      </div>
                      <div className="flex-grow">
                        <h3 className="text-xl font-semibold text-gray-900 mb-2">
                          {step.title}
                        </h3>
                        <p className="text-gray-600">
                          {step.description}
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-3">
                      {/* Priority Indicator */}
                      <div className={`w-3 h-3 rounded-full ${getPriorityColor(step.priority)}`} title={`${step.priority} Priority`}></div>
                      
                      {/* Difficulty Badge */}
                      <span className={`px-3 py-1 rounded-full text-sm font-medium border ${getDifficultyColor(step.difficulty)}`}>
                        {step.difficulty}
                      </span>
                      
                      {/* Expand Icon */}
                      <div className={`transform transition-transform duration-200 ${activeStep === step.id ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Details */}
                {activeStep === step.id && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="mt-6 space-y-6">
                      {/* Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">📋 Details</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {step.details}
                        </p>
                      </div>

                      {/* Tips */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-3">💡 Action Steps</h4>
                        <ul className="space-y-2">
                          {step.tips.map((tip, tipIndex) => (
                            <li key={tipIndex} className="flex items-start">
                              <span className="text-bitcoin-orange mr-2 mt-1">•</span>
                              <span className="text-gray-700">{tip}</span>
                            </li>
                          ))}
                        </ul>
                      </div>

                      {/* Referral Links */}
                      {step.referralLinks && step.referralLinks.length > 0 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">🔗 My Recommended Platforms</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {step.referralLinks.map((link, linkIndex) => (
                              <a
                                key={linkIndex}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="p-4 border border-gray-200 rounded-lg hover:border-bitcoin-orange hover:shadow-md transition-all duration-200 group"
                              >
                                <div className="flex items-center justify-between mb-2">
                                  <h5 className="font-semibold text-gray-900 group-hover:text-bitcoin-orange">
                                    {link.name}
                                  </h5>
                                  <svg className="w-4 h-4 text-gray-400 group-hover:text-bitcoin-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                  </svg>
                                </div>
                                <p className="text-sm text-gray-600 mb-2">
                                  {link.description}
                                </p>
                                {link.bonus && (
                                  <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                    {link.bonus}
                                  </span>
                                )}
                              </a>
                            ))}
                          </div>
                        </div>
                      )}

                      {/* Meta Info */}
                      <div className="flex flex-wrap gap-4 pt-4 border-t border-gray-100">
                        <div className="flex items-center">
                          <span className="text-sm font-medium text-gray-500 mr-2">⏱️ Timeframe:</span>
                          <span className="text-sm text-gray-700">{step.timeframe}</span>
                        </div>
                        {step.tools && (
                          <div className="flex items-center">
                            <span className="text-sm font-medium text-gray-500 mr-2">🛠️ Tools:</span>
                            <span className="text-sm text-gray-700">{step.tools.join(', ')}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-r from-bitcoin-orange to-orange-600 text-white">
        <div className="max-w-4xl mx-auto container-padding text-center">
          <h2 className="text-3xl font-bold mb-6">
            Ready to Start Your Bitcoin Journey?
          </h2>
          <p className="text-xl mb-8 opacity-90">
            Remember: This strategy works best when implemented gradually and consistently. 
            Start with step 1 and work your way through at your own pace.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <Link
              href="/tools"
              className="bg-white text-bitcoin-orange px-6 py-4 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              Explore Tools →
            </Link>
            <Link
              href="/earn"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Earning Apps →
            </Link>
            <Link
              href="/buy-bitcoin"
              className="bg-white/20 backdrop-blur-sm text-white px-6 py-4 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Buy Bitcoin →
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}