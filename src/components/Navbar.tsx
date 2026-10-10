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
            <div className="bg-linear-to-r from-orange-500 to-bitcoin-orange text-white p-2 rounded-xl font-bold text-xl shadow-lg group-hover:shadow-xl group-hover:shadow-bitcoin-orange/25 transition-all duration-300 transform group-hover:scale-110">
              ₿
            </div>
            <span className="text-xl font-semibold text-black group-hover:text-bitcoin-orange transition-colors duration-300">
              Satoshi's Path
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6">
            <Link
              href="/"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-colors"
            >
              Home
            </Link>
            <Link
              href="/checklist/"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-colors"
            >
              Checklist
            </Link>
            <Link
              href="/tools/"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-colors"
            >
              Tools
            </Link>
            <Link
              href="/tracker/"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-colors"
            >
              Tracker
            </Link>
            <Link
              href="/about/"
              className="text-gray-700 hover:text-bitcoin-orange font-medium transition-colors"
            >
              About
            </Link>
            <Link
              href="/#checklist"
              className="bg-bitcoin-orange text-white px-4 py-2 rounded-xl font-medium hover:bg-orange-600 transition-colors shadow-md"
            >
              Free checklist
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-bitcoin-orange focus:outline-none focus:text-bitcoin-orange transition-colors"
              aria-label="Toggle menu"
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
                href="/checklist/"
                className="block text-gray-700 hover:text-bitcoin-orange font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Checklist
              </Link>
              <Link
                href="/tools/"
                className="block text-gray-700 hover:text-bitcoin-orange font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tools
              </Link>
              <Link
                href="/tracker/"
                className="block text-gray-700 hover:text-bitcoin-orange font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Tracker
              </Link>
              <Link
                href="/about/"
                className="block text-gray-700 hover:text-bitcoin-orange font-medium py-2 transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/#checklist"
                className="block bg-bitcoin-orange text-white px-4 py-2 rounded-xl font-medium hover:bg-orange-600 transition-colors mt-3 text-center"
                onClick={() => setIsMenuOpen(false)}
              >
                Free checklist
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
