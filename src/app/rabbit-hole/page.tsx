import Link from "next/link";

export const metadata = {
  title: "Down the Rabbit Hole | Satoshi's Path",
  description: "Dive deep into Bitcoin knowledge with curated educational resources, books, podcasts, and essential reading for serious Bitcoiners.",
};

export default function RabbitHolePage() {
  const categories = [
    {
      title: "Essential Reading",
      icon: "📚",
      resources: [
        {
          name: "The Bitcoin Standard",
          author: "Saifedean Ammous",
          description: "The definitive book on Bitcoin's economic and monetary theory",
          type: "Book",
          link: "https://saifedean.com/thebitcoinstandard/"
        },
        {
          name: "Bitcoin Whitepaper",
          author: "Satoshi Nakamoto",
          description: "The original 9-page document that started it all",
          type: "Paper",
          link: "https://bitcoin.org/bitcoin.pdf"
        },
        {
          name: "Mastering Bitcoin",
          author: "Andreas Antonopoulos",
          description: "Technical deep dive into Bitcoin's inner workings",
          type: "Book",
          link: "https://www.oreilly.com/library/view/mastering-bitcoin/9781491902639/"
        },
        {
          name: "The Bullish Case for Bitcoin",
          author: "Vijay Boyapati",
          description: "Comprehensive investment thesis for Bitcoin",
          type: "Article",
          link: "https://vijayboyapati.medium.com/the-bullish-case-for-bitcoin-6ecc8bdecc1"
        }
      ]
    },
    {
      title: "Podcasts & Audio",
      icon: "🎧",
      resources: [
        {
          name: "What Bitcoin Did",
          author: "Peter McCormack",
          description: "Interviews with Bitcoin's most important voices",
          type: "Podcast",
          link: "https://www.whatbitcoindid.com/"
        },
        {
          name: "The Bitcoin Standard Podcast",
          author: "Saifedean Ammous",
          description: "Economics and monetary theory from a Bitcoin perspective",
          type: "Podcast",
          link: "https://saifedean.com/podcast/"
        },
        {
          name: "Bitcoin Audible",
          author: "Guy Swann",
          description: "Audio readings of the best Bitcoin content",
          type: "Podcast",
          link: "https://bitcoinaudible.com/"
        }
      ]
    },
    {
      title: "Technical Resources",
      icon: "⚙️",
      resources: [
        {
          name: "Bitcoin Core",
          author: "Bitcoin Developers",
          description: "The reference implementation of Bitcoin",
          type: "Software",
          link: "https://bitcoincore.org/"
        },
        {
          name: "Bitcoin Stack Exchange",
          author: "Community",
          description: "Q&A for Bitcoin developers and enthusiasts",
          type: "Forum",
          link: "https://bitcoin.stackexchange.com/"
        },
        {
          name: "Bitcoin Optech",
          author: "Bitcoin Optech",
          description: "Technical newsletter for Bitcoin businesses",
          type: "Newsletter",
          link: "https://bitcoinops.org/"
        }
      ]
    },
    {
      title: "Philosophy & Economics",
      icon: "🤔",
      resources: [
        {
          name: "Austrian Economics",
          author: "Mises Institute",
          description: "Economic school that heavily influences Bitcoin thinking",
          type: "Educational",
          link: "https://mises.org/"
        },
        {
          name: "Gradually, Then Suddenly",
          author: "Parker Lewis",
          description: "Blog series on Bitcoin and monetary economics",
          type: "Blog",
          link: "https://nakamotoinstitute.org/mempool/series/gradually-then-suddenly/"
        },
        {
          name: "Bitcoin Magazine",
          author: "Various Authors",
          description: "The oldest and most established Bitcoin publication",
          type: "Magazine",
          link: "https://bitcoinmagazine.com/"
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
            <span className="text-2xl">🕳️</span>
            EDUCATIONAL JOURNEY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Down the Rabbit Hole
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
            Curated educational resources to deepen your understanding of Bitcoin. From economics to technology, 
            these resources will help you understand why Bitcoin matters and how it works.
          </p>
        </div>

        {/* Resource Categories */}
        <div className="space-y-12">
          {categories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl">{category.icon}</span>
                <h2 className="text-2xl font-bold text-gray-900">{category.title}</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.resources.map((resource, resourceIndex) => (
                  <div key={resourceIndex} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300 hover:border-orange-300">
                    <div className="flex items-start justify-between mb-3">
                      <h3 className="text-lg font-semibold text-gray-900">{resource.name}</h3>
                      <span className="bg-orange-100 text-orange-800 px-2 py-1 rounded-full text-xs font-medium">
                        {resource.type}
                      </span>
                    </div>
                    <p className="text-gray-600 text-sm mb-2">by {resource.author}</p>
                    <p className="text-gray-700 mb-4">{resource.description}</p>
                    <a
                      href={resource.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold transition-colors"
                    >
                      Access Resource
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Learning Path */}
        <div className="mt-12 bg-linear-to-r from-orange-500 to-bitcoin-orange rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Recommended Learning Path</h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                1
              </div>
              <h3 className="font-semibold mb-2">Start Here</h3>
              <p className="text-orange-100 text-sm">Read the Bitcoin Whitepaper and The Bitcoin Standard</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                2
              </div>
              <h3 className="font-semibold mb-2">Listen & Learn</h3>
              <p className="text-orange-100 text-sm">Subscribe to Bitcoin podcasts for regular insights</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                3
              </div>
              <h3 className="font-semibold mb-2">Go Technical</h3>
              <p className="text-orange-100 text-sm">Dive into technical resources and run a node</p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 bg-white text-orange-600 rounded-full flex items-center justify-center mx-auto mb-3 font-bold text-lg">
                4
              </div>
              <h3 className="font-semibold mb-2">Stay Updated</h3>
              <p className="text-orange-100 text-sm">Follow Bitcoin news and continue learning</p>
            </div>
          </div>
        </div>

        {/* Call to Action */}
        <div className="text-center mt-12">
          <div className="bg-white rounded-2xl shadow-lg p-8">
            <h2 className="text-2xl font-bold text-gray-900 mb-4">Ready to Put Knowledge into Action?</h2>
            <p className="text-gray-600 mb-6 max-w-2xl mx-auto">
              Now that you're learning about Bitcoin, start building your stack with proven methods and tools.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/personal-strategy"
                className="bg-linear-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
              >
                View My Strategy
              </Link>
              <Link
                href="/tools"
                className="border-2 border-orange-500 text-orange-600 px-6 py-3 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1"
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