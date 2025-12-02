import Link from "next/link";

export const metadata = {
  title: "Bitcoin Merch Store | Satoshi's Path",
  description: "Show your Bitcoin pride with merch, hardware wallets, books, and gifts for passionate Bitcoiners.",
};

type HardwareWallet = {
  name: string;
  price: string;
  description: string;
  features: string[];
  link: string;
  emoji: string;
};

type Book = {
  name: string;
  author: string;
  description: string;
  emoji: string;
  type: string;
};

type Apparel = {
  name: string;
  description: string;
  price: string;
  emoji: string;
  stores: string[];
};

type HomeOffice = {
  name: string;
  description: string;
  price: string;
  emoji: string;
};

export default function MerchPage() {
  const categories: Array<{
    title: string;
    icon: string;
    description: string;
    products: HardwareWallet[] | Book[] | Apparel[] | HomeOffice[];
  }> = [
    {
      title: "Hardware Wallets",
      icon: "🔐",
      description: "Secure your Bitcoin with the best hardware wallets",
      products: [
        {
          name: "Ledger Nano X",
          price: "$149",
          description: "Bluetooth-enabled, supports 5,500+ assets",
          features: ["Bluetooth", "Mobile app", "100 apps"],
          link: "https://shop.ledger.com",
          emoji: "📱"
        },
        {
          name: "Trezor Model T",
          price: "$219",
          description: "Touchscreen, open-source security",
          features: ["Touchscreen", "Open source", "Shamir backup"],
          link: "https://trezor.io",
          emoji: "🖥️"
        },
        {
          name: "Coldcard Mk4",
          price: "$147",
          description: "Bitcoin-only, air-gapped security",
          features: ["Bitcoin-only", "Air-gapped", "Duress PIN"],
          link: "https://coldcard.com",
          emoji: "❄️"
        },
        {
          name: "BitBox02",
          price: "$149",
          description: "Swiss-made, minimalist design",
          features: ["Swiss quality", "Minimal design", "SD backup"],
          link: "https://shiftcrypto.ch",
          emoji: "🇨🇭"
        }
      ]
    },
    {
      title: "Bitcoin Books",
      icon: "📚",
      description: "Essential reading for every Bitcoiner",
      products: [
        {
          name: "The Bitcoin Standard",
          author: "Saifedean Ammous",
          description: "The economic case for Bitcoin",
          emoji: "📖",
          type: "Economics"
        },
        {
          name: "Mastering Bitcoin",
          author: "Andreas M. Antonopoulos",
          description: "Technical deep dive into Bitcoin",
          emoji: "🔧",
          type: "Technical"
        },
        {
          name: "The Blocksize War",
          author: "Jonathan Bier",
          description: "Bitcoin's governance battles",
          emoji: "⚔️",
          type: "History"
        },
        {
          name: "Bitcoin Billionaires",
          author: "Ben Mezrich",
          description: "Winklevoss twins' Bitcoin journey",
          emoji: "💰",
          type: "Biography"
        },
        {
          name: "Inventing Bitcoin",
          author: "Yan Pritzker",
          description: "Simple Bitcoin explanation",
          emoji: "💡",
          type: "Beginner"
        },
        {
          name: "Layered Money",
          author: "Nik Bhatia",
          description: "Money and Bitcoin throughout history",
          emoji: "🏛️",
          type: "Economics"
        }
      ]
    },
    {
      title: "Apparel & Accessories",
      icon: "👕",
      description: "Wear your Bitcoin pride",
      products: [
        {
          name: "Bitcoin T-Shirts",
          description: "Classic Bitcoin logo tees and creative designs",
          price: "$25-45",
          emoji: "👕",
          stores: ["bitcoinshirt.co", "blockstore.com"]
        },
        {
          name: "Hardware Wallet Cases",
          description: "Protect your hardware wallet in style",
          price: "$15-30",
          emoji: "💼",
          stores: ["hodlr.swiss", "cryptosteel.com"]
        },
        {
          name: "Bitcoin Hats",
          description: "Caps, beanies, and bucket hats",
          price: "$20-35",
          emoji: "🧢",
          stores: ["satoshistore.com", "bitcoinhatguy.com"]
        },
        {
          name: "Socks & Accessories",
          description: "Bitcoin socks, pins, stickers",
          price: "$10-25",
          emoji: "🧦",
          stores: ["bitcoingear.shop", "21supplies.com"]
        }
      ]
    },
    {
      title: "Home & Office",
      icon: "🏠",
      description: "Bitcoin decor and gifts",
      products: [
        {
          name: "Bitcoin Art Prints",
          description: "Canvas prints, posters, wall art",
          price: "$30-200",
          emoji: "🖼️"
        },
        {
          name: "Bitcoin Coffee Mugs",
          description: "HODL mugs and crypto-themed drinkware",
          price: "$15-30",
          emoji: "☕"
        },
        {
          name: "Seed Storage",
          description: "Metal seed phrase storage solutions",
          price: "$50-150",
          emoji: "🔩"
        },
        {
          name: "Bitcoin Clocks",
          description: "Block height clocks and Bitcoin timepieces",
          price: "$40-100",
          emoji: "⏰"
        }
      ]
    }
  ];

  const featuredStores = [
    { name: "Bitcoin Merch Co", url: "https://bitcoinmerchco.com", description: "Largest Bitcoin merchandise retailer" },
    { name: "Blockstore", url: "https://blockstore.com", description: "Premium Bitcoin apparel" },
    { name: "21 Supplies", url: "https://21supplies.com", description: "Curated Bitcoin goods" },
    { name: "Satoshi Store", url: "https://satoshistore.com", description: "Community favorite" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">🛍️</span>
            BITCOIN MARKETPLACE
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bitcoin Merch & Essentials
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            From hardware wallets to Bitcoin swag, find everything you need to secure your sats
            and show your Bitcoin pride.
          </p>
        </div>

        {/* Hardware Wallets - Featured */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{categories[0].icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{categories[0].title}</h2>
              <p className="text-gray-600">{categories[0].description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(categories[0].products as HardwareWallet[]).map((product, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-5xl mb-3 text-center">{product.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{product.name}</h3>
                <div className="text-2xl font-bold text-bitcoin-orange mb-2">{product.price}</div>
                <p className="text-sm text-gray-600 mb-4">{product.description}</p>
                <div className="space-y-1 mb-4">
                  {product.features.map((feature: string, j: number) => (
                    <div key={j} className="flex items-center gap-2 text-sm text-gray-700">
                      <span className="text-bitcoin-orange">✓</span>
                      {feature}
                    </div>
                  ))}
                </div>
                <a
                  href={product.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block w-full bg-bitcoin-orange text-white text-center py-2 rounded-xl font-semibold hover:bg-orange-600 transition-all"
                >
                  View Wallet
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Books */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{categories[1].icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{categories[1].title}</h2>
              <p className="text-gray-600">{categories[1].description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {(categories[1].products as Book[]).map((book, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300">
                <div className="text-4xl mb-3">{book.emoji}</div>
                <div className="inline-block bg-orange-100 text-bitcoin-orange text-xs font-semibold px-2 py-1 rounded mb-2">
                  {book.type}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{book.name}</h3>
                <p className="text-sm text-gray-600 mb-2">by {book.author}</p>
                <p className="text-sm text-gray-700">{book.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Apparel */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{categories[2].icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{categories[2].title}</h2>
              <p className="text-gray-600">{categories[2].description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {(categories[2].products as Apparel[]).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="flex items-start gap-4">
                  <div className="text-5xl">{item.emoji}</div>
                  <div className="grow">
                    <h3 className="text-xl font-bold text-gray-900 mb-1">{item.name}</h3>
                    <p className="text-bitcoin-orange font-semibold mb-2">{item.price}</p>
                    <p className="text-sm text-gray-700 mb-3">{item.description}</p>
                    {item.stores && (
                      <div className="flex flex-wrap gap-2">
                        {item.stores.map((store: string, j: number) => (
                          <span key={j} className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full">
                            {store}
                          </span>
                        ))}
                      </div>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Home & Office */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{categories[3].icon}</span>
            <div>
              <h2 className="text-3xl font-bold text-gray-900">{categories[3].title}</h2>
              <p className="text-gray-600">{categories[3].description}</p>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {(categories[3].products as HomeOffice[]).map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
                <div className="text-5xl mb-3">{item.emoji}</div>
                <h3 className="text-lg font-bold text-gray-900 mb-1">{item.name}</h3>
                <p className="text-sm text-bitcoin-orange font-semibold mb-2">{item.price}</p>
                <p className="text-sm text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Featured Stores */}
        <div className="bg-white rounded-2xl shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Featured Bitcoin Stores</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {featuredStores.map((store, i) => (
              <div key={i} className="text-center">
                <a
                  href={store.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block p-4 rounded-xl border-2 border-gray-200 hover:border-bitcoin-orange transition-all"
                >
                  <h3 className="font-bold text-gray-900 mb-1">{store.name}</h3>
                  <p className="text-sm text-gray-600">{store.description}</p>
                </a>
              </div>
            ))}
          </div>
        </div>

        {/* Why Hardware Wallets */}
        <div className="bg-linear-to-r from-bitcoin-orange to-orange-600 rounded-2xl p-8 text-white mb-8">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl font-bold mb-4">🔒 Not Your Keys, Not Your Coins</h2>
            <p className="mb-6">
              Hardware wallets are essential for securing your Bitcoin. They keep your private keys offline,
              protected from hackers and malware. If you're serious about Bitcoin, you need a hardware wallet.
            </p>
            <Link
              href="/personal-strategy"
              className="inline-block bg-white text-bitcoin-orange px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all shadow-lg"
            >
              Learn Bitcoin Security
            </Link>
          </div>
        </div>

        {/* Disclaimer */}
        <div className="text-center text-sm text-gray-600 max-w-2xl mx-auto">
          <p>
            <strong>Note:</strong> Product prices and availability may vary. Always purchase hardware wallets
            directly from official manufacturers to ensure authenticity and security. Some links may be affiliate
            links supporting Satoshi's Path.
          </p>
        </div>
      </div>
    </div>
  );
}
