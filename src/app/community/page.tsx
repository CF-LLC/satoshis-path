import Link from "next/link";

export const metadata = {
  title: "Bitcoin Community | Satoshi's Path",
  description: "Connect with fellow Bitcoiners. Find meetups, conferences, forums, and communities worldwide.",
};

type Platform = {
  name: string;
  description: string;
  members: string;
  link: string;
  emoji: string;
  focus: string;
};

type Event = {
  name: string;
  location: string;
  frequency: string;
  size: string;
  emoji: string;
  description: string;
  website: string;
};

type Info = {
  emoji: string;
  title: string;
  description: string;
  platforms: string[];
};

type Resource = {
  name: string;
  type: string;
  description: string;
  emoji: string;
  link: string;
};

type DevPlatform = {
  name: string;
  description: string;
  link: string;
  emoji: string;
};

export default function CommunityPage() {
  const communities: Array<{
    title: string;
    icon: string;
    platforms?: Platform[];
    events?: Event[];
    info?: Info[];
    resources?: Resource[];
  }> = [
    {
      title: "Online Communities",
      icon: "💬",
      platforms: [
        {
          name: "Bitcoin Talk",
          description: "The original Bitcoin forum since 2009",
          members: "2M+",
          link: "https://bitcointalk.org",
          emoji: "🗣️",
          focus: "Technical discussions, announcements"
        },
        {
          name: "r/Bitcoin",
          description: "Bitcoin's largest Reddit community",
          members: "5M+",
          link: "https://reddit.com/r/bitcoin",
          emoji: "🤖",
          focus: "News, memes, discussions"
        },
        {
          name: "Bitcoin Twitter",
          description: "Bitcoin's most active social platform",
          members: "Millions",
          link: "https://twitter.com/search?q=%23Bitcoin",
          emoji: "🐦",
          focus: "Real-time updates, thought leaders"
        },
        {
          name: "Stacker News",
          description: "Bitcoin-focused discussion board",
          members: "50K+",
          link: "https://stacker.news",
          emoji: "⚡",
          focus: "Lightning Network, earn sats"
        },
        {
          name: "Bitcoin Magazine",
          description: "Leading Bitcoin media outlet",
          members: "1M+",
          link: "https://bitcoinmagazine.com",
          emoji: "📰",
          focus: "News, analysis, education"
        },
        {
          name: "Telegram Groups",
          description: "Various Bitcoin discussion groups",
          members: "100K+",
          link: "https://t.me/bitcoin",
          emoji: "📱",
          focus: "Real-time chat, global community"
        }
      ]
    },
    {
      title: "Conferences & Events",
      icon: "🎤",
      events: [
        {
          name: "Bitcoin Conference",
          location: "Nashville, USA",
          frequency: "Annual",
          size: "25,000+ attendees",
          emoji: "🎸",
          description: "Largest Bitcoin event worldwide",
          website: "https://b.tc/conference"
        },
        {
          name: "BTC Prague",
          location: "Prague, Czech Republic",
          frequency: "Annual",
          size: "10,000+ attendees",
          emoji: "🏰",
          description: "Europe's premier Bitcoin conference",
          website: "https://btcprague.com"
        },
        {
          name: "Baltic Honeybadger",
          location: "Riga, Latvia",
          frequency: "Annual",
          size: "1,000+ attendees",
          emoji: "🦡",
          description: "Technical Bitcoin conference",
          website: "https://baltichoneybadger.com"
        },
        {
          name: "Adopting Bitcoin",
          location: "El Salvador",
          frequency: "Annual",
          size: "1,500+ attendees",
          emoji: "🇸🇻",
          description: "Bitcoin adoption focused",
          website: "https://adoptingbitcoin.org"
        },
        {
          name: "Bitcoin Amsterdam",
          location: "Amsterdam, Netherlands",
          frequency: "Annual",
          size: "8,000+ attendees",
          emoji: "🇳🇱",
          description: "European Bitcoin gathering",
          website: "https://b.tc/conference/amsterdam"
        },
        {
          name: "Africa Bitcoin Conference",
          location: "Various locations",
          frequency: "Annual",
          size: "5,000+ attendees",
          emoji: "🌍",
          description: "African Bitcoin adoption",
          website: "https://afrobitcoin.org"
        }
      ]
    },
    {
      title: "Local Meetups",
      icon: "🤝",
      info: [
        {
          emoji: "📍",
          title: "Find Local Meetups",
          description: "Connect with Bitcoiners in your city",
          platforms: ["Meetup.com", "Bitcoin Meetups Map", "Local Facebook groups"]
        },
        {
          emoji: "🗓️",
          title: "Regular Events",
          description: "Most cities host monthly Bitcoin meetups",
          platforms: ["Check local Bitcoin groups", "Twitter local hashtags", "Community calendars"]
        },
        {
          emoji: "☕",
          title: "Bitcoin & Coffee",
          description: "Casual meetups at coffee shops",
          platforms: ["Search 'Bitcoin meetup [your city]'", "Join local Telegram groups"]
        }
      ]
    },
    {
      title: "Educational Resources",
      icon: "📚",
      resources: [
        {
          name: "Bitcoin.org",
          type: "Website",
          description: "Official Bitcoin documentation and resources",
          emoji: "🌐",
          link: "https://bitcoin.org"
        },
        {
          name: "Learn Me A Bitcoin",
          type: "Tutorial",
          description: "Technical Bitcoin education made simple",
          emoji: "📖",
          link: "https://learnmeabitcoin.com"
        },
        {
          name: "Bitcoin Optech",
          type: "Newsletter",
          description: "Technical Bitcoin development updates",
          emoji: "⚙️",
          link: "https://bitcoinops.org"
        },
        {
          name: "What Bitcoin Did",
          type: "Podcast",
          description: "Peter McCormack's Bitcoin podcast",
          emoji: "🎙️",
          link: "https://whatbitcoindid.com"
        },
        {
          name: "The Bitcoin Standard Podcast",
          type: "Podcast",
          description: "Saifedean Ammous discusses Bitcoin economics",
          emoji: "🎧",
          link: "https://saifedean.com/podcast"
        },
        {
          name: "Bitcoin Magazine YouTube",
          type: "Video",
          description: "Bitcoin news, interviews, and education",
          emoji: "📺",
          link: "https://youtube.com/@BitcoinMagazine"
        }
      ]
    },
  ];

  const developerCommunities: { title: string; icon: string; platforms: DevPlatform[] } = {
    title: "Developer Communities",
    icon: "👨‍💻",
    platforms: [
        {
          name: "Bitcoin Core",
          description: "Contribute to Bitcoin's reference implementation",
          link: "https://bitcoincore.org",
          emoji: "⚡"
        },
        {
          name: "Bitcoin Dev Mailing List",
          description: "Technical development discussions",
          link: "https://lists.linuxfoundation.org/mailman/listinfo/bitcoin-dev",
          emoji: "📧"
        },
        {
          name: "Lightning Network Developers",
          description: "Build on the Lightning Network",
          link: "https://lightning.network",
          emoji: "⚡"
        },
        {
          name: "Bitcoin Stack Exchange",
          description: "Q&A for Bitcoin developers",
          link: "https://bitcoin.stackexchange.com",
          emoji: "💡"
        }
      ]
  };

  const quickStats = [
    { number: "100M+", label: "Global Users", emoji: "🌍" },
    { number: "500+", label: "Meetup Groups", emoji: "🤝" },
    { number: "50+", label: "Annual Conferences", emoji: "🎤" },
    { number: "1000+", label: "Active Developers", emoji: "👨‍💻" }
  ];

  return (
    <div className="min-h-screen bg-linear-to-br from-orange-50 to-yellow-50">
      <div className="max-w-7xl mx-auto px-4 py-12">
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-linear-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">🤝</span>
            JOIN THE MOVEMENT
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Bitcoin Community
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Connect with millions of Bitcoiners worldwide. From online forums to in-person conferences,
            find your tribe and learn together.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
          {quickStats.map((stat, i) => (
            <div key={i} className="bg-white rounded-2xl shadow-lg p-6 text-center hover:shadow-xl transition-all">
              <div className="text-4xl mb-2">{stat.emoji}</div>
              <div className="text-3xl font-bold text-bitcoin-orange mb-1">{stat.number}</div>
              <div className="text-sm font-semibold text-gray-700">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Online Communities */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{communities[0].icon}</span>
            <h2 className="text-3xl font-bold text-gray-900">{communities[0].title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities[0].platforms?.map((platform, i) => (
              <a
                key={i}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all duration-300 block"
              >
                <div className="text-4xl mb-3">{platform.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{platform.name}</h3>
                <div className="text-sm text-bitcoin-orange font-semibold mb-2">{platform.members} members</div>
                <p className="text-sm text-gray-700 mb-3">{platform.description}</p>
                <div className="text-xs text-gray-600 bg-gray-50 px-3 py-2 rounded-lg">
                  <strong>Focus:</strong> {platform.focus}
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Conferences */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{communities[1].icon}</span>
            <h2 className="text-3xl font-bold text-gray-900">{communities[1].title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities[1].events?.map((event, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all">
                <div className="text-5xl mb-3 text-center">{event.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-1">{event.name}</h3>
                <p className="text-sm text-gray-600 mb-1">📍 {event.location}</p>
                <p className="text-sm text-gray-600 mb-1">📅 {event.frequency}</p>
                <p className="text-sm text-bitcoin-orange font-semibold mb-3">👥 {event.size}</p>
                <p className="text-sm text-gray-700 mb-4">{event.description}</p>
                {event.website && (
                  <a
                    href={event.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block w-full bg-bitcoin-orange text-white text-center py-2 rounded-xl font-semibold hover:bg-orange-600 transition-all text-sm"
                  >
                    Visit Website
                  </a>
                )}
              </div>
            ))}
          </div>
        </div>

        {/* Local Meetups */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{communities[2].icon}</span>
            <h2 className="text-3xl font-bold text-gray-900">{communities[2].title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {communities[2].info?.map((item, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-lg p-6">
                <div className="text-5xl mb-3 text-center">{item.emoji}</div>
                <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">{item.title}</h3>
                <p className="text-sm text-gray-700 mb-4 text-center">{item.description}</p>
                <div className="space-y-2">
                  {item.platforms.map((platform, j) => (
                    <div key={j} className="text-xs bg-gray-50 px-3 py-2 rounded-lg text-gray-700">
                      • {platform}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Educational Resources */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{communities[3].icon}</span>
            <h2 className="text-3xl font-bold text-gray-900">{communities[3].title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {communities[3].resources?.map((resource, i) => (
              <a
                key={i}
                href={resource.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all block"
              >
                <div className="flex items-start gap-3">
                  <div className="text-3xl">{resource.emoji}</div>
                  <div className="grow">
                    <div className="inline-block bg-orange-100 text-bitcoin-orange text-xs font-semibold px-2 py-1 rounded mb-2">
                      {resource.type}
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-1">{resource.name}</h3>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* Developer Communities */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-6">
            <span className="text-4xl">{developerCommunities.icon}</span>
            <h2 className="text-3xl font-bold text-gray-900">{developerCommunities.title}</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {developerCommunities.platforms.map((platform, i) => (
              <a
                key={i}
                href={platform.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white rounded-2xl shadow-lg p-6 hover:shadow-xl transition-all flex items-start gap-4"
              >
                <div className="text-4xl">{platform.emoji}</div>
                <div className="grow">
                  <h3 className="text-lg font-bold text-gray-900 mb-1">{platform.name}</h3>
                  <p className="text-sm text-gray-600">{platform.description}</p>
                </div>
              </a>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center bg-linear-to-r from-bitcoin-orange to-orange-600 rounded-2xl p-8 text-white">
          <h2 className="text-2xl font-bold mb-4">Ready to Join the Community?</h2>
          <p className="mb-6 max-w-2xl mx-auto">
            Whether you're a beginner or a Bitcoin veteran, there's a community waiting for you.
            Start learning, connecting, and building today.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/personal-strategy"
              className="bg-white text-bitcoin-orange px-8 py-3 rounded-xl font-semibold hover:bg-gray-100 transition-all duration-300 shadow-lg"
            >
              Start Your Journey
            </Link>
            <Link
              href="/tools"
              className="bg-white/20 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 border border-white/30"
            >
              Explore Tools
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
