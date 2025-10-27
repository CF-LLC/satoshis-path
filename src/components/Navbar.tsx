'use client';

import Link from 'next/link';
import { useState } from 'react';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="bg-white/80 backdrop-blur-md shadow-lg border-b border-gray-200/50 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto container-padding">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white p-2 rounded-xl font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:shadow-bitcoin-orange/25 transition-all duration-300 transform group-hover:scale-110">
              ₿
            </div>
            <span className="text-xl font-semibold text-black group-hover:text-bitcoin-orange transition-colors duration-300">
              Satoshi's Path
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            <Link
              href="/"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bitcoin-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              Home
            </Link>
            <Link
              href="/paths"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bitcoin-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              Stacking Paths
            </Link>
            <Link
              href="/tools"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bitcoin-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              Tools
            </Link>
            <Link
              href="/about"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-all duration-300 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-bitcoin-orange after:transition-all after:duration-300 hover:after:w-full"
            >
              About
            </Link>
            <Link
              href="/paths"
              className="bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-4 py-2 rounded-xl font-medium hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 transform hover:-translate-y-1 hover:scale-105"
            >
              Start Stacking
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-bitcoin-orange focus:outline-none focus:text-bitcoin-orange transition-colors"
            >
              <svg
                className="h-6 w-6"
                fill="none"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {isMenuOpen ? (
                  <path d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 border-t border-gray-200">
              <Link
                href="/"
                className="block text-gray-700 hover:text-bitcoin-orange font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/paths"
                className="block text-gray-700 hover:text-bitcoin-orange font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Stacking Paths
              </Link>
              <Link
                href="/tools"
                className="block text-gray-700 hover:text-bitcoin-orange font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/about"
                className="block text-gray-700 hover:text-bitcoin-orange font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/paths"
                className="block bg-gradient-to-r from-orange-500 to-bitcoin-orange text-white px-4 py-2 rounded-xl font-medium hover:from-orange-600 hover:to-orange-500 transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-bitcoin-orange/25 mt-4"
                onClick={() => setIsMenuOpen(false)}
              >
                Start Stacking
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}