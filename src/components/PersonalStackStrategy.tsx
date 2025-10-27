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
}

const strategySteps: StrategyStep[] = [
  {
    id: 1,
    title: "Financial Foundation Setup",
    description: "Establish your financial base before investing in Bitcoin",
    details: "Before buying any Bitcoin, ensure you have a solid financial foundation. This means having an emergency fund covering 3-6 months of expenses, paying off high-interest debt, and having a stable income source.",
    tips: [
      "Build emergency fund first (3-6 months expenses)",
      "Pay off credit card debt and high-interest loans",
      "Ensure stable income and budget tracking",
      "Consider basic health insurance coverage"
    ],
    timeframe: "1-6 months",
    difficulty: "Beginner",
    priority: "High"
  },
  {
    id: 2,
    title: "Education & Security Setup",
    description: "Learn Bitcoin fundamentals and set up secure storage",
    details: "Understanding Bitcoin is crucial before investing significant amounts. Set up proper security practices including hardware wallets and backup procedures.",
    tips: [
      "Read 'The Bitcoin Standard' by Saifedean Ammous",
      "Purchase a hardware wallet (Ledger or Trezor)",
      "Learn about seed phrases and backup procedures",
      "Understand Bitcoin basics: mining, nodes, transactions"
    ],
    timeframe: "2-4 weeks",
    difficulty: "Beginner",
    priority: "High",
    tools: ["Hardware Wallet", "Bitcoin Books", "Educational Resources"]
  },
  {
    id: 3,
    title: "Initial Bitcoin Purchase",
    description: "Make your first Bitcoin purchase using a reputable exchange",
    details: "Start with a small amount to get familiar with the process. Use dollar-cost averaging to reduce timing risk and build your position gradually.",
    tips: [
      "Start with amount you can afford to lose",
      "Use reputable exchanges (Coinbase, Kraken, Gemini)",
      "Enable 2FA and strong passwords",
      "Begin with weekly or bi-weekly purchases"
    ],
    timeframe: "1 week",
    difficulty: "Beginner",
    priority: "High",
    tools: ["Coinbase", "Kraken", "Gemini"]
  },
  {
    id: 4,
    title: "Set Up Dollar-Cost Averaging",
    description: "Automate regular Bitcoin purchases to build your stack consistently",
    details: "Dollar-cost averaging (DCA) is the most effective strategy for most people. Set up automatic purchases based on your budget and stick to the plan regardless of price movements.",
    tips: [
      "Allocate 5-10% of income to Bitcoin initially",
      "Set up automatic weekly or bi-weekly purchases",
      "Use DCA tools like Swan Bitcoin or Strike",
      "Don't try to time the market"
    ],
    timeframe: "Ongoing",
    difficulty: "Beginner",
    priority: "High",
    tools: ["Swan Bitcoin", "Strike", "River"]
  },
  {
    id: 5,
    title: "Earn Bitcoin Through Work",
    description: "Find ways to earn Bitcoin directly instead of just buying",
    details: "Earning Bitcoin directly can accelerate your accumulation while reducing the need to convert fiat currency. Look for opportunities in your existing work or new income streams.",
    tips: [
      "Ask employer about Bitcoin salary conversion",
      "Freelance work paid in Bitcoin",
      "Use Bitcoin-earning credit cards",
      "Participate in Bitcoin-focused businesses"
    ],
    timeframe: "1-3 months to set up",
    difficulty: "Intermediate",
    priority: "Medium",
    tools: ["Fold Card", "Bitcoin Salary Platforms", "Freelance Platforms"]
  },
  {
    id: 6,
    title: "Self-Custody Transition",
    description: "Move your Bitcoin to your own wallet for true ownership",
    details: "Once you have accumulated a meaningful amount, move it to your hardware wallet. This gives you true ownership and control over your Bitcoin.",
    tips: [
      "Start moving to hardware wallet when you have 0.01+ BTC",
      "Test small amounts first",
      "Keep multiple backups of seed phrase",
      "Consider multisig for larger amounts"
    ],
    timeframe: "When balance reaches threshold",
    difficulty: "Intermediate",
    priority: "High",
    tools: ["Ledger", "Trezor", "Coldcard"]
  },
  {
    id: 7,
    title: "Advanced Security Measures",
    description: "Implement additional security for larger Bitcoin holdings",
    details: "As your Bitcoin holdings grow, implement more sophisticated security measures including multisig wallets, geographic distribution of backups, and operational security practices.",
    tips: [
      "Set up multisig wallet for large amounts",
      "Distribute seed phrase backups geographically",
      "Use passphrase protection",
      "Consider inheritance planning"
    ],
    timeframe: "When holdings become significant",
    difficulty: "Advanced",
    priority: "Medium",
    tools: ["Casa", "Unchained Capital", "Steel Seed Storage"]
  },
  {
    id: 8,
    title: "Mining & Node Operation",
    description: "Contribute to the Bitcoin network while earning rewards",
    details: "Running a Bitcoin node supports the network, while mining can provide additional Bitcoin acquisition. Consider your electricity costs and technical capabilities.",
    tips: [
      "Start with running a full node",
      "Consider home mining with efficient miners",
      "Join mining pools if solo mining isn't viable",
      "Factor in electricity costs and noise"
    ],
    timeframe: "After accumulating base position",
    difficulty: "Advanced",
    priority: "Low",
    tools: ["Bitcoin Core", "Antminer", "Mining Pools"]
  },
  {
    id: 9,
    title: "Lightning Network Participation",
    description: "Use Lightning Network for instant, low-fee transactions",
    details: "The Lightning Network enables instant Bitcoin transactions with minimal fees. Learn to use it for daily transactions and potentially earn routing fees.",
    tips: [
      "Set up Lightning wallet (Phoenix, Muun)",
      "Start with small amounts for testing",
      "Learn about channel management",
      "Consider running Lightning node"
    ],
    timeframe: "After comfortable with base layer",
    difficulty: "Intermediate",
    priority: "Low",
    tools: ["Phoenix Wallet", "Muun", "Lightning Node Software"]
  },
  {
    id: 10,
    title: "Continuous Learning & Optimization",
    description: "Stay informed and continuously improve your strategy",
    details: "Bitcoin and the ecosystem are constantly evolving. Stay educated about new developments, tools, and strategies to optimize your approach.",
    tips: [
      "Follow Bitcoin podcasts and newsletters",
      "Attend Bitcoin conferences and meetups",
      "Regularly review and adjust strategy",
      "Share knowledge with others"
    ],
    timeframe: "Ongoing",
    difficulty: "Beginner",
    priority: "Medium",
    tools: ["Bitcoin Podcasts", "Bitcoin Twitter", "Local Meetups"]
  }
];

const getDifficultyColor = (difficulty: string) => {
  switch (difficulty) {
    case 'Beginner':
      return 'bg-green-100 text-green-800';
    case 'Intermediate':
      return 'bg-yellow-100 text-yellow-800';
    case 'Advanced':
      return 'bg-red-100 text-red-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case 'High':
      return 'bg-orange-100 text-orange-800';
    case 'Medium':
      return 'bg-blue-100 text-blue-800';
    case 'Low':
      return 'bg-gray-100 text-gray-800';
    default:
      return 'bg-gray-100 text-gray-800';
  }
};

export default function PersonalStackStrategy() {
  const [expandedStep, setExpandedStep] = useState<number | null>(null);
  const [filter, setFilter] = useState<'all' | 'Beginner' | 'Intermediate' | 'Advanced'>('all');

  const filteredSteps = strategySteps.filter(step => 
    filter === 'all' || step.difficulty === filter
  );

  const toggleExpanded = (stepId: number) => {
    setExpandedStep(expandedStep === stepId ? null : stepId);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
          <span className="w-2 h-2 bg-orange-500 rounded-full"></span>
          PERSONAL STRATEGY
        </div>
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          My Bitcoin Stack Strategy
        </h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          A comprehensive, step-by-step approach I've developed over years of Bitcoin accumulation. 
          This strategy combines multiple methods for optimal Bitcoin acquisition while managing risk.
        </p>
        
        {/* Strategy Overview */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-4">Strategy Overview</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">1</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Foundation First</h3>
              <p className="text-gray-600 text-sm">Build financial stability before investing</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">2</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Gradual Accumulation</h3>
              <p className="text-gray-600 text-sm">Dollar-cost average with earned Bitcoin</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-full flex items-center justify-center mx-auto mb-3">
                <span className="text-white font-bold text-xl">3</span>
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Security & Growth</h3>
              <p className="text-gray-600 text-sm">Self-custody with advanced strategies</p>
            </div>
          </div>
        </div>
      </div>

      {/* Filter Buttons */}
      <div className="flex flex-wrap gap-2 justify-center mb-8">
        {['all', 'Beginner', 'Intermediate', 'Advanced'].map((level) => (
          <button
            key={level}
            onClick={() => setFilter(level as any)}
            className={`px-4 py-2 rounded-full text-sm font-semibold transition-all duration-300 ${
              filter === level
                ? 'bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white shadow-lg'
                : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
            }`}
          >
            {level === 'all' ? 'All Steps' : level}
          </button>
        ))}
      </div>

      {/* Strategy Steps */}
      <div className="space-y-6">
        {filteredSteps.map((step) => (
          <div
            key={step.id}
            className="bg-white rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 overflow-hidden"
          >
            <div
              className="p-6 cursor-pointer"
              onClick={() => toggleExpanded(step.id)}
            >
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-4 flex-1">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-xl flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-bold text-lg">{step.id}</span>
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center gap-3 mb-2">
                      <h3 className="text-xl font-bold text-gray-900">{step.title}</h3>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getDifficultyColor(step.difficulty)}`}>
                        {step.difficulty}
                      </span>
                      <span className={`px-2 py-1 rounded-full text-xs font-semibold ${getPriorityColor(step.priority)}`}>
                        {step.priority} Priority
                      </span>
                    </div>
                    <p className="text-gray-600 mb-2">{step.description}</p>
                    <div className="flex items-center gap-4 text-sm text-gray-500">
                      <span>⏱️ {step.timeframe}</span>
                      {step.tools && (
                        <span>🛠️ {step.tools.length} tools</span>
                      )}
                    </div>
                  </div>
                </div>
                <div className="ml-4">
                  <div className={`w-6 h-6 rounded-full border-2 border-orange-300 flex items-center justify-center transition-transform duration-300 ${
                    expandedStep === step.id ? 'rotate-180' : ''
                  }`}>
                    <svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </div>
              </div>
            </div>

            {/* Expanded Content */}
            {expandedStep === step.id && (
              <div className="px-6 pb-6 border-t border-gray-100">
                <div className="pt-6">
                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Detailed Instructions</h4>
                    <p className="text-gray-700 leading-relaxed">{step.details}</p>
                  </div>

                  <div className="mb-6">
                    <h4 className="font-semibold text-gray-900 mb-3">Action Items</h4>
                    <ul className="space-y-2">
                      {step.tips.map((tip, index) => (
                        <li key={index} className="flex items-start gap-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-gray-700">{tip}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {step.tools && (
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-3">Recommended Tools</h4>
                      <div className="flex flex-wrap gap-2">
                        {step.tools.map((tool, index) => (
                          <span
                            key={index}
                            className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium"
                          >
                            {tool}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-12 text-center">
        <div className="bg-gradient-to-r from-orange-500 to-bitcoin-orange rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Start Your Bitcoin Journey?</h2>
          <p className="text-orange-100 mb-6 max-w-2xl mx-auto">
            This strategy has helped me build a substantial Bitcoin position over time. 
            Remember: start small, stay consistent, and never invest more than you can afford to lose.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/tools"
              className="bg-white text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-50 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
            >
              Use Bitcoin Tools
            </Link>
            <Link
              href="/paths"
              className="bg-orange-600 text-white px-6 py-3 rounded-xl font-semibold hover:bg-orange-700 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 border-2 border-orange-400"
            >
              View All Stacking Methods
            </Link>
          </div>
        </div>
      </div>

      {/* Disclaimer */}
      <div className="mt-8 text-center">
        <p className="text-sm text-gray-500 max-w-2xl mx-auto">
          <strong>Disclaimer:</strong> This is not financial advice. Bitcoin is a volatile asset. 
          Only invest what you can afford to lose and do your own research before making any investment decisions.
        </p>
      </div>
    </div>
  );
}