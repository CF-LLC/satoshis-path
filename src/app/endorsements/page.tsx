import Link from "next/link";

export const metadata = {
  title: "Famous Bitcoin Endorsements | Satoshi's Path",
  description: "Discover influential figures and institutions who support Bitcoin. From tech innovators to financial experts.",
};

export default function EndorsementsPage() {
  const categories = [
    {
      title: "Tech Visionaries",
      icon: "💻",
      people: [
        {
          name: "Michael Saylor",
          title: "Executive Chairman, MicroStrategy",
          quote: "Bitcoin is a swarm of cyber hornets serving the goddess of wisdom, feeding on the fire of truth.",
          impact: "Led MicroStrategy to acquire over 150,000 BTC",
          image: "👨‍💼"
        },
        {
          name: "Jack Dorsey",
          title: "Founder, Block (formerly Square) & Twitter",
          quote: "Bitcoin changes absolutely everything.",
          impact: "Integrated Bitcoin into Square and Cash App",
          image: "👨‍💻"
        },
        {
          name: "Elon Musk",
          title: "CEO, Tesla & SpaceX",
          quote: "Bitcoin is brilliant. I think Bitcoin is on the verge of getting broad acceptance.",
          impact: "Tesla holds Bitcoin on balance sheet",
          image: "🚀"
        }
      ]
    },
    {
      title: "Financial Experts",
      icon: "💰",
      people: [
        {
          name: "Cathie Wood",
          title: "CEO, ARK Invest",
          quote: "Bitcoin could reach $1 million per coin.",
          impact: "Major institutional Bitcoin advocate",
          image: "📊"
        },
        {
          name: "Paul Tudor Jones",
          title: "Billionaire Hedge Fund Manager",
          quote: "Bitcoin reminds me of gold when I first got in the business in 1976.",
          impact: "Allocated portion of portfolio to Bitcoin",
          image: "💼"
        },
        {
          name: "Ray Dalio",
          title: "Founder, Bridgewater Associates",
          quote: "Bitcoin is one hell of an invention.",
          impact: "Changed stance to Bitcoin advocate",
          image: "📈"
        }
      ]
    },
    {
      title: "Political Figures",
      icon: "🏛️",
      people: [
        {
          name: "Nayib Bukele",
          title: "President of El Salvador",
          quote: "The Bitcoin experiment in El Salvador is going great.",
          impact: "Made Bitcoin legal tender in El Salvador",
          image: "🇸🇻"
        },
        {
          name: "Cynthia Lummis",
          title: "US Senator, Wyoming",
          quote: "Bitcoin is a great store of value.",
          impact: "Leading Bitcoin advocate in US Senate",
          image: "⚖️"
        },
        {
          name: "Francis Suarez",
          title: "Mayor of Miami",
          quote: "Miami wants to be the Bitcoin capital of the world.",
          impact: "Making Miami a Bitcoin hub",
          image: "🌴"
        }
      ]
    },
    {
      title: "Institutions & Corporations",
      icon: "🏢",
      companies: [
        {
          name: "MicroStrategy",
          status: "Holds 150,000+ BTC",
          commitment: "Bitcoin treasury strategy"
        },
        {
          name: "Tesla",
          status: "Bitcoin on balance sheet",
          commitment: "Accepts Bitcoin payments"
        },
        {
          name: "Block (Square)",
          status: "Bitcoin development",
          commitment: "Building Bitcoin infrastructure"
        },
        {
          name: "Fidelity",
          status: "Bitcoin custody services",
          commitment: "Institutional Bitcoin solutions"
        },
        {
          name: "BlackRock",
          status: "Bitcoin ETF",
          commitment: "Largest Bitcoin ETF provider"
        },
        {
          name: "El Salvador",
          status: "Legal tender",
          commitment: "First Bitcoin nation"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">🏆</span>
            BITCOIN BELIEVERS
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Famous Bitcoin Endorsements
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Influential figures and institutions who recognize Bitcoin's transformative potential.
            From tech innovators to financial giants, see who's betting on Bitcoin.
          </p>
        </div>

        {/* People Categories */}
        {categories.slice(0, 3).map((category, idx) => (
          <div key={idx} className="mb-12">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-4xl">{category.icon}</span>
              <h2 className="text-3xl font-bold text-gray-900">{category.title}</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {category.people?.map((person, i) => (
                <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                  <div className="text-center mb-4">
                    <div className="text-6xl mb-3">{person.image}</div>
                    <h3 className="text-xl font-bold text-gray-900">{person.name}</h3>
                    <p className="text-sm text-gray-600">{person.title}</p>
                  </div>
                  <div className="border-t border-gray-200 pt-4">
                    <p className="text-gray-700 italic mb-4 text-sm">"{person.quote}"</p>
                    <div className="bg-orange-50 rounded-lg p-3">
                      <p className="text-xs font-semibold text-bitcoin-orange">Impact:</p>
                      <p className="text-sm text-gray-700">{person.impact}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}

        {/* Institutions */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">🏢</span>
            <h2 className="text-3xl font-bold text-gray-900">Institutions & Corporations</h2>
          </div>
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {categories[3].companies?.map((company, i) => (
                <div key={i} className="border border-gray-200 rounded-xl p-6 hover:border-bitcoin-orange transition-all">
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{company.name}</h3>
                  <p className="text-sm text-bitcoin-orange font-semibold mb-1">{company.status}</p>
                  <p className="text-sm text-gray-600">{company.commitment}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">By The Numbers</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { number: "40+", label: "Public Companies", desc: "Holding Bitcoin" },
              { number: "$100B+", label: "Institutional Holdings", desc: "In Bitcoin" },
              { number: "2", label: "Countries", desc: "Bitcoin Legal Tender" },
              { number: "1000+", label: "Major Endorsements", desc: "Since 2009" }
            ].map((stat, i) => (
              <div key={i} className="text-center">
                <div className="text-3xl font-bold text-bitcoin-orange mb-1">{stat.number}</div>
                <div className="font-semibold text-gray-900">{stat.label}</div>
                <div className="text-sm text-gray-600">{stat.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-linear-to-r from-bitcoin-orange to-orange-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Join The Movement</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            These influential figures see what you're discovering: Bitcoin is the future of money.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/personal-strategy"
              className="bg-white text-bitcoin-orange px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              href="/buy-bitcoin"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Buy Bitcoin
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
