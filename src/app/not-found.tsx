import Link from "next/link";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-yellow-50 flex items-center justify-center">
      <div className="max-w-md mx-auto text-center px-4">
        <div className="mb-8">
          <div className="inline-flex items-center justify-center w-24 h-24 bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white rounded-full text-4xl font-bold mb-6 animate-bounce">
            ₿
          </div>
        </div>
        
        <h1 className="text-6xl font-bold text-gray-900 mb-4">404</h1>
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Page Not Found</h2>
        <p className="text-lg text-gray-600 mb-8">
          Looks like this page took a wrong turn down the rabbit hole. 
          Let's get you back on the path to stacking Bitcoin.
        </p>
        
        <div className="space-y-4">
          <Link
            href="/"
            className="w-full bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-6 py-3 rounded-xl font-semibold hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1 hover:scale-105 inline-block"
          >
            Go Home
          </Link>
          
          <div className="flex flex-col sm:flex-row gap-2">
            <Link
              href="/personal-strategy"
              className="flex-1 border-2 border-orange-500 text-orange-600 px-4 py-2 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-center"
            >
              My Strategy
            </Link>
            <Link
              href="/tools"
              className="flex-1 border-2 border-orange-500 text-orange-600 px-4 py-2 rounded-xl font-semibold hover:bg-orange-500 hover:text-white transition-all duration-300 text-center"
            >
              Bitcoin Tools
            </Link>
          </div>
        </div>
        
        <div className="mt-8 text-sm text-gray-500">
          Lost? Try our <Link href="/rabbit-hole" className="text-orange-600 hover:underline">educational resources</Link> to learn more about Bitcoin.
        </div>
      </div>
    </div>
  );
}