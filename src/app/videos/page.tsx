import Link from "next/link";

export const metadata = {
  title: "Popular Bitcoin Videos | Satoshi's Path",
  description: "Curated collection of the most popular and educational Bitcoin videos, documentaries, and presentations.",
};

export default function VideosPage() {
  const videoCategories = [
    {
      title: "Bitcoin Basics",
      videos: [
        {
          title: "What is Bitcoin?",
          creator: "Andreas Antonopoulos",
          duration: "26 min",
          description: "Comprehensive introduction to Bitcoin fundamentals",
          url: "https://www.youtube.com/watch?v=l1si5ZWLgy0"
        },
        {
          title: "Bitcoin Explained",
          creator: "3Blue1Brown",
          duration: "26 min",
          description: "Mathematical explanation of how Bitcoin works",
          url: "https://www.youtube.com/watch?v=bBC-nXj3Ng4"
        }
      ]
    },
    {
      title: "Documentaries",
      videos: [
        {
          title: "The Bitcoin Standard Documentary",
          creator: "Saifedean Ammous",
          duration: "90 min",
          description: "Deep dive into Bitcoin's monetary economics",
          url: "#"
        },
        {
          title: "Magic Money: The Bitcoin Revolution",
          creator: "Tim Delmastro",
          duration: "55 min",
          description: "Bitcoin's journey from concept to global phenomenon",
          url: "#"
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50">
      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-100 to-yellow-100 text-orange-800 px-4 py-2 rounded-full text-sm font-semibold mb-4">
            <span className="text-2xl">📺</span>
            VIDEO LIBRARY
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Popular Bitcoin Videos
          </h1>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Learn from the best Bitcoin educators through carefully curated videos, documentaries, and presentations.
          </p>
        </div>

        <div className="space-y-8">
          {videoCategories.map((category, index) => (
            <div key={index} className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">{category.title}</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {category.videos.map((video, videoIndex) => (
                  <div key={videoIndex} className="border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-all duration-300">
                    <h3 className="text-lg font-semibold text-gray-900 mb-2">{video.title}</h3>
                    <p className="text-gray-600 text-sm mb-2">by {video.creator} • {video.duration}</p>
                    <p className="text-gray-700 mb-4">{video.description}</p>
                    <a
                      href={video.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 text-orange-600 hover:text-orange-700 font-semibold"
                    >
                      Watch Video
                      <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h1m4 0h1m6-6V7a2 2 0 00-2-2H4a2 2 0 00-2 2v10a2 2 0 002 2h14a2 2 0 002-2v-3M5 5l14 14" />
                      </svg>
                    </a>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}