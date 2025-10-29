'use client';

import React, { useState } from 'react';
import Link from 'next/link';

// Import referral data
const referrals = require('../../data/referrals.json');

// Utility function to get referral URL
const getReferralUrl = (key: string): string => {
  const keys = key.split('.');
  let result: any = referrals;
  
  for (const k of keys) {
    if (result && typeof result === 'object' && k in result) {
      result = result[k];
    } else {
      return '#';
    }
  }
  
  if (typeof result === 'object' && result.url) {
    return result.url;
  } else if (typeof result === 'string') {
    return result;
  }
  
  return '#';
};

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
  categories?: Array<{
    title: string;
    subtitle: string;
    items: Array<{
      name: string;
      url: string;
      description: string;
      bonus: string;
      code?: string;
      features: string[];
    }>;
  }>;
}

const strategySteps: StrategyStep[] = [
  {
    id: 1,
    title: "Education & Wallet Setup",
    description: "Learn Bitcoin fundamentals and set up secure storage solutions",
    details: "Before investing significant amounts in Bitcoin, it's crucial to understand what you're buying and how to store it securely. This step focuses on education and setting up both hot wallets for daily use and cold storage for long-term holdings.",
    tips: [
      "Watch educational videos to understand Bitcoin basics",
      "Stay updated with Bitcoin news and developments", 
      "Set up a Lightning wallet for small transactions and rewards",
      "Get a hardware wallet for cold storage of larger amounts",
      "Practice with small amounts first ($10-50)",
      "Never share your seed phrases with anyone"
    ],
    timeframe: "2-4 weeks",
    difficulty: "Beginner",
    priority: "High",
    tools: ["Educational Videos", "Bitcoin News", "Hot Wallets", "Hardware Wallets"],
    referralLinks: [
      {
        name: "Speed Wallet",
        url: "https://links.speed.app/referral?referral_code=83D6TV",
        description: "Seamless Bitcoin wallet and payment experience. Get ₿0.000005 cashback on your first transaction!",
        bonus: "₿0.000005 cashback"
      },
      {
        name: "ZBD Wallet",
        url: "https://zbd.link/hcHi/invite?af_sub1=25DPZ4&deep_link_value=fwb_two_for_two",
        description: "Gaming wallet with Bitcoin rewards. Perfect for earning sats while having fun!",
        bonus: "$2 Bitcoin"
      },
      {
        name: "Tangem Hardware Wallet",
        url: "https://tangem.com/invite/E6LBFB",
        description: "Card-style hardware wallet for cold storage. Essential for securing larger Bitcoin holdings.",
        bonus: "Secure cold storage"
      }
    ]
  },
  {
    id: 2,
    title: "Earning Apps & Rewards",
    description: "Start earning your first Bitcoin through apps and rewards programs",
    details: "Once you have your wallets set up, begin earning small amounts of Bitcoin through various apps and platforms. This is a great way to get your first sats without spending money while learning how Bitcoin transactions work.",
    tips: [
      "Start with gaming apps like ZBD for instant $2 Bitcoin bonus",
      "Use earning apps that pay in Bitcoin for activities you already do",
      "Try Bitcoin faucets for small amounts while learning",
      "Explore cloud mining apps for passive earnings",
      "Join prediction markets and gaming platforms",
      "Always withdraw earnings to your personal wallet"
    ],
    timeframe: "1-2 weeks to setup",
    difficulty: "Beginner", 
    priority: "High",
    tools: ["Gaming Apps", "Faucets", "Cloud Mining", "Rewards Programs"],
    categories: [
      {
        title: "🎮 Gaming & Apps",
        subtitle: "Earn Bitcoin while having fun with mobile games and apps",
        items: [
          {
            name: "ZBD Gaming",
            url: "https://zbd.link/hcHi/invite?af_sub1=25DPZ4&deep_link_value=fwb_two_for_two",
            description: "Level up your gaming and earn Bitcoin. Get $2 instantly when you verify your identity.",
            bonus: "$2 Bitcoin",
            features: ["Gaming rewards", "Instant Bitcoin", "No deposit required"]
          },
          {
            name: "Yotta Banking",
            url: "https://join.withyotta.com/COOPER",
            description: "Banking app with crypto rewards and games. Get $2 credits to start.",
            bonus: "$2 credits",
            code: "COOPER",
            features: ["Banking app", "Crypto rewards", "Prize games"]
          },
          {
            name: "Smiles Bitcoin",
            url: "https://smilesbitcoin.com",
            description: "Earn Bitcoin through various activities and challenges.",
            bonus: "Activity rewards",
            features: ["Multiple earning methods", "Regular challenges", "Community rewards"]
          }
        ]
      },
      {
        title: "🚰 Bitcoin Faucets",
        subtitle: "Free Bitcoin dispensers - small amounts but completely free",
        items: [
          {
            name: "Sats Faucet",
            url: "https://satsfaucet.com/register?r=Spock",
            description: "One of the most reliable Bitcoin faucets with regular payouts.",
            bonus: "Free sats",
            code: "Spock",
            features: ["Hourly claims", "No minimum", "Direct to wallet"]
          },
          {
            name: "FreeBitco.in",
            url: "https://freebitco.in/?r=55409682",
            description: "Classic Bitcoin faucet with lottery and interest features.",
            bonus: "Free rolls",
            code: "55409682",
            features: ["Hourly roll", "Lottery tickets", "Interest earnings"]
          }
        ]
      },
      {
        title: "⛏️ Cloud Mining",
        subtitle: "Mine Bitcoin without hardware - mobile-friendly options",
        items: [
          {
            name: "Cloud Mine Crypto",
            url: "https://cloudminecrypto.com/ref/V4ex9jyLXBDJG52v",
            description: "Earn crypto by tracking your sleep! Get 10% bonus with referral.",
            bonus: "10% bonus",
            code: "V4ex9jyLXBDJG52v",
            features: ["Sleep tracking", "Passive earning", "Health + wealth"]
          },
          {
            name: "Ember Fund Mining",
            url: "https://emberfund.onelink.me/ljTI/jgwznb5o?mining_referrer_id=MNG8PVI6T00",
            description: "Bitcoin mining app - earn crypto while using your phone.",
            bonus: "Mining rewards",
            code: "MNG8PVI6T00",
            features: ["Mobile mining", "Background operation", "Daily rewards"]
          },
          {
            name: "BH Mining",
            url: "https://bhmining.com",
            description: "Cloud mining platform with various mining contracts.",
            bonus: "Contract rewards",
            features: ["Multiple contracts", "Dashboard tracking", "Regular payouts"]
          },
          {
            name: "GoMining",
            url: "https://gomining.com/ref/xR7_c",
            description: "Professional cloud mining service with transparent operations.",
            bonus: "Mining profits",
            code: "xR7_c",
            features: ["Professional service", "Real mining", "Transparent rates"]
          }
        ]
      },
      {
        title: "📊 Other Opportunities",
        subtitle: "Additional ways to earn Bitcoin and crypto",
        items: [
          {
            name: "Kalshi Predictions",
            url: "https://kalshi.com/sign-up",
            description: "Prediction market platform. Both earn $10 when you sign up.",
            bonus: "$10",
            features: ["Prediction markets", "Real money", "News-based betting"]
          },
          {
            name: "Stake Gaming",
            url: "https://stake.com/?c=4mbxyNdf",
            description: "Gaming platform with crypto integration.",
            bonus: "Gaming rewards",
            code: "4mbxyNdf",
            features: ["Casino games", "Crypto betting", "Live dealers"]
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Buying Bitcoin Regularly",
    description: "Build your Bitcoin stack through consistent small purchases",
    details: "The best way to build wealth in Bitcoin is through regular, small purchases regardless of price - this is called Dollar Cost Averaging (DCA). Start small with amounts you can afford and gradually increase as you become more comfortable.",
    tips: [
      "Start with just $10-25 per week - consistency matters more than amount",
      "Set up automatic recurring purchases if possible",
      "Buy on the same day each week/month regardless of price",
      "Don't try to time the market - just keep buying regularly",
      "Increase your purchase amount as your income grows",
      "Transfer purchases to your hardware wallet when you reach $1,000+"
    ],
    timeframe: "Ongoing - weekly/monthly",
    difficulty: "Beginner",
    priority: "High",
    tools: ["DCA Calculator", "Bitcoin Exchanges", "Price Tracking"],
    referralLinks: [
      {
        name: "Strike",
        url: "https://invite.strike.me/cooper",
        description: "Buy Bitcoin instantly with zero fees. Perfect for DCA with Lightning integration.",
        bonus: "Zero fees"
      },
      {
        name: "Swan Bitcoin",
        url: "https://www.swanbitcoin.com/cooper",
        description: "Automate your Bitcoin savings with recurring purchases. Set it and forget it DCA.",
        bonus: "Automated DCA"
      },
      {
        name: "River Financial",
        url: "https://river.com/signup?r=cooper",
        description: "Bitcoin-only exchange with excellent security and low fees for regular purchases.",
        bonus: "Bitcoin-only focus"
      },
      {
        name: "Coinbase",
        url: "https://coinbase.com/join/cooper_stack",
        description: "Beginner-friendly exchange with DCA options and educational content.",
        bonus: "Easy for beginners"
      }
    ]
  },
  {
    id: 4,
    title: "Finding Your Bitcoin Community",
    description: "Connect with other Bitcoiners and continue your education",
    details: "Bitcoin is more than just an investment - it's a community and a movement. Finding the right Bitcoin community will accelerate your learning, keep you motivated, and help you stay up-to-date with developments in the space.",
    tips: [
      "Follow Bitcoin educators and influencers on social media",
      "Join local Bitcoin meetups in your area",
      "Listen to Bitcoin podcasts during commutes",
      "Attend Bitcoin conferences when possible",
      "Share your Bitcoin journey and help others learn"
    ],
    timeframe: "Ongoing",
    difficulty: "Beginner",
    priority: "Medium",
    tools: ["Social Media", "Podcasts", "Meetups", "Conferences"],
    referralLinks: [
      {
        name: "Orange Pill App",
        url: "https://signup.orangepillapp.com/opa/spock",
        description: "Connect with local Bitcoiners and find Bitcoin-friendly businesses in your area.",
        bonus: "Bitcoin social network"
      },
      {
        name: "What Bitcoin Did Podcast",
        url: "https://www.whatbitcoindid.com/",
        description: "Popular Bitcoin podcast covering news, education, and interviews.",
        bonus: "Educational content"
      },
      {
        name: "Bitcoin Conference",
        url: "https://b.tc/conference/",
        description: "The largest Bitcoin conference with speakers, networking, and education.",
        bonus: "Annual event"
      }
    ]
  },
  {
    id: 5,
    title: "HODL & Long-Term Strategy",
    description: "Secure your Bitcoin for the long term and develop diamond hands",
    details: "The final and most important step: learning to HODL (Hold On for Dear Life). Bitcoin is a long-term investment that requires patience and strong conviction. This section covers securing your Bitcoin for the long haul and developing the mindset needed for generational wealth building.",
    tips: [
      "Transfer significant amounts (>$1,000) to cold storage immediately",
      "Set up multi-signature wallets for larger holdings ($10,000+)",
      "Create secure backup plans for your seed phrases (metal storage)",
      "Don't panic sell during market downturns - zoom out and think years ahead",
      "Consider your Bitcoin a savings account, not a trading account",
      "Plan to hold for at least 4+ years through full market cycles"
    ],
    timeframe: "4+ years",
    difficulty: "Beginner",
    priority: "High",
    tools: ["Hardware Wallets", "Metal Seed Storage", "Multi-sig", "HODL Calculator"],
    referralLinks: [
      {
        name: "Tangem Hardware Wallet",
        url: "https://tangem.com/invite/E6LBFB",
        description: "Secure cold storage for long-term HODLing. Card-style hardware wallet.",
        bonus: "Ultimate security"
      },
      {
        name: "Coinkite Coldcard",
        url: "https://coinkite.com",
        description: "Air-gapped Bitcoin-only hardware wallet for serious HODLers.",
        bonus: "Bitcoin-only security"
      },
      {
        name: "Casa Multi-Sig",
        url: "https://keys.casa",
        description: "Multi-signature wallet solution for larger Bitcoin holdings.",
        bonus: "Enterprise security"
      },
      {
        name: "HODL Calculator",
        url: "/tools/hodl-calculator",
        description: "Calculate your potential returns from long-term HODLing.",
        bonus: "Plan your future"
      }
    ]
  }
];

export default function PersonalStackStrategy() {
  const [activeSteps, setActiveSteps] = useState<number[]>([]);
  const [activeEarningTab, setActiveEarningTab] = useState<number>(0);

  const toggleStep = (stepId: number) => {
    setActiveSteps(prevActiveSteps => {
      if (prevActiveSteps.includes(stepId)) {
        // Remove stepId if it's already active (close it)
        return prevActiveSteps.filter(id => id !== stepId);
      } else {
        // Add stepId if it's not active (open it)
        return [...prevActiveSteps, stepId];
      }
    });
  };

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
                  onClick={() => {
                    toggleStep(step.id);
                    setActiveEarningTab(0); // Reset to first tab when toggling any step
                  }}
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
                      <div className={`transform transition-transform duration-200 ${activeSteps.includes(step.id) ? 'rotate-180' : ''}`}>
                        <svg className="w-6 h-6 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Step Details */}
                {activeSteps.includes(step.id) && (
                  <div className="px-6 pb-6 border-t border-gray-100">
                    <div className="mt-6 space-y-6">
                      {/* Details */}
                      <div>
                        <h4 className="font-semibold text-gray-900 mb-2">📋 Details</h4>
                        <p className="text-gray-700 leading-relaxed">
                          {step.details}
                        </p>
                      </div>

                      {/* Educational Resources for Step 1 */}
                      {step.id === 1 && (
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-3">📚 Educational Resources</h4>
                          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
                            <Link
                              href="/videos"
                              className="group bg-blue-50 border border-blue-200 rounded-xl p-4 hover:bg-blue-100 transition-colors duration-200"
                            >
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-blue-500 text-white rounded-lg flex items-center justify-center mr-3">
                                  🎥
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 group-hover:text-blue-600">
                                    Popular Bitcoin Videos
                                  </h5>
                                  <p className="text-sm text-gray-600">Educational content to get started</p>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/news"
                              className="group bg-green-50 border border-green-200 rounded-xl p-4 hover:bg-green-100 transition-colors duration-200"
                            >
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-green-500 text-white rounded-lg flex items-center justify-center mr-3">
                                  📰
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 group-hover:text-green-600">
                                    Bitcoin News & Updates
                                  </h5>
                                  <p className="text-sm text-gray-600">Stay informed with latest developments</p>
                                </div>
                              </div>
                            </Link>
                            <Link
                              href="/rabbit-hole"
                              className="group bg-orange-50 border border-orange-200 rounded-xl p-4 hover:bg-orange-100 transition-colors duration-200"
                            >
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-orange-500 text-white rounded-lg flex items-center justify-center mr-3">
                                  🐰
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 group-hover:text-orange-600">
                                    Down the Rabbit Hole
                                  </h5>
                                  <p className="text-sm text-gray-600">Deep dive into Bitcoin fundamentals</p>
                                </div>
                              </div>
                            </Link>
                            <a
                              href="https://www.lopp.net/bitcoin-information.html"
                              target="_blank"
                              rel="noopener noreferrer"
                              className="group bg-purple-50 border border-purple-200 rounded-xl p-4 hover:bg-purple-100 transition-colors duration-200"
                            >
                              <div className="flex items-center">
                                <div className="w-10 h-10 bg-purple-500 text-white rounded-lg flex items-center justify-center mr-3">
                                  📖
                                </div>
                                <div>
                                  <h5 className="font-semibold text-gray-900 group-hover:text-purple-600">
                                    Bitcoin Resources ↗
                                  </h5>
                                  <p className="text-sm text-gray-600">Comprehensive Bitcoin information</p>
                                </div>
                              </div>
                            </a>
                          </div>

                          <div className="bg-yellow-50 border border-yellow-200 rounded-xl p-4 mb-6">
                            <h5 className="font-semibold text-gray-900 mb-2">🔒 Cold Storage Importance</h5>
                            <p className="text-gray-700 text-sm mb-3">
                              For amounts over $1,000, hardware wallets (cold storage) are essential. They keep your Bitcoin offline and protected from hackers. 
                              The Tangem wallet is my preferred choice - it's easy to use, secure, and looks like a credit card.
                            </p>
                            <p className="text-gray-600 text-xs italic">
                              "Not your keys, not your coins" - Always control your private keys!
                            </p>
                          </div>
                        </div>
                      )}

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

                      {/* Categories (New Format) - Tabbed Interface */}
                      {step.categories && step.categories.length > 0 && (
                        <div>
                          {/* Tab Navigation */}
                          <div className="border-b border-gray-200 mb-6">
                            <nav className="flex space-x-8 overflow-x-auto">
                              {step.categories.map((category, categoryIndex) => (
                                <button
                                  key={categoryIndex}
                                  onClick={() => setActiveEarningTab(categoryIndex)}
                                  className={`whitespace-nowrap py-3 px-1 border-b-2 font-medium text-sm transition-colors ${
                                    activeEarningTab === categoryIndex
                                      ? 'border-bitcoin-orange text-bitcoin-orange'
                                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                                  }`}
                                >
                                  {category.title}
                                </button>
                              ))}
                            </nav>
                          </div>

                          {/* Tab Content */}
                          {step.categories[activeEarningTab] && (
                            <div>
                              <div className="mb-4">
                                <h4 className="text-lg font-semibold text-gray-900 mb-2">
                                  {step.categories[activeEarningTab].title}
                                </h4>
                                <p className="text-sm text-gray-600">
                                  {step.categories[activeEarningTab].subtitle}
                                </p>
                              </div>
                              
                              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {step.categories[activeEarningTab].items.map((item, itemIndex) => (
                                  <a
                                    key={itemIndex}
                                    href={item.url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="p-4 border border-gray-200 rounded-lg hover:border-bitcoin-orange hover:shadow-md transition-all duration-200 group"
                                  >
                                    <div className="flex items-center justify-between mb-2">
                                      <h5 className="font-semibold text-gray-900 group-hover:text-bitcoin-orange">
                                        {item.name}
                                      </h5>
                                      <div className="flex items-center gap-2">
                                        {item.code && (
                                          <span className="text-xs bg-purple-100 text-purple-800 px-2 py-1 rounded">
                                            CODE: {item.code}
                                          </span>
                                        )}
                                        <svg className="w-4 h-4 text-gray-400 group-hover:text-bitcoin-orange" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                        </svg>
                                      </div>
                                    </div>
                                    <p className="text-sm text-gray-600 mb-3">
                                      {item.description}
                                    </p>
                                    <div className="flex items-center gap-2 mb-3">
                                      <span className="inline-block px-2 py-1 bg-green-100 text-green-800 text-xs font-medium rounded">
                                        🎁 {item.bonus}
                                      </span>
                                    </div>
                                    <div className="space-y-1">
                                      {item.features.map((feature, featureIndex) => (
                                        <div key={featureIndex} className="flex items-center text-xs text-gray-600">
                                          <span className="text-green-500 mr-2">✓</span>
                                          {feature}
                                        </div>
                                      ))}
                                    </div>
                                    <div className="mt-3">
                                      <span className="text-bitcoin-orange text-sm font-medium">
                                        Start Earning ↗
                                      </span>
                                    </div>
                                  </a>
                                ))}
                              </div>
                            </div>
                          )}
                        </div>
                      )}

                      {/* Referral Links */}
                      {step.referralLinks && step.referralLinks.length > 0 && !step.categories && (
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
              className="bg-white text-orange-600 px-6 py-4 rounded-xl font-semibold hover:bg-orange-50 hover:text-orange-700 transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
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