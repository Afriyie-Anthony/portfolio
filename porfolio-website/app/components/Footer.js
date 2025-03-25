'use client';

import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-2xl font-bold text-primary mb-4">Affulexis Enterprise</h3>
            <p className="text-gray-400 mb-4">
              Building excellence through quality construction services since 2021.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <Link href="/" className="text-gray-400 hover:text-primary transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/about" className="text-gray-400 hover:text-primary transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/services" className="text-gray-400 hover:text-primary transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link href="/gallery" className="text-gray-400 hover:text-primary transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-gray-400 hover:text-primary transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-white mb-4">Contact Us</h3>
            <div className="space-y-2">
              <p className="text-gray-300">
                H/N. 151/4, Sunyani Newtown
              </p>
              <p className="text-gray-300">
                Box 1320, Sunyani
              </p>
              <div className="space-y-1">
                <p className="text-gray-300">
                  <a href="tel:+233240139683" className="hover:text-primary">
                    +233 24 013 9683
                  </a>
                </p>
                <p className="text-gray-300">
                  <a href="tel:+233546248694" className="hover:text-primary">
                    +233 54 624 8694
                  </a>
                </p>
                <p className="text-gray-300">
                  <a href="tel:+233203858047" className="hover:text-primary">
                    +233 20 385 8047
                  </a>
                </p>
              </div>
              <p className="text-gray-300">
                <a href="mailto:affulexis1971@gmail.com" className="hover:text-primary">
                  affulexis1971@gmail.com
                </a>
              </p>
            </div>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
          <p>&copy; {new Date().getFullYear()} Affulexis Enterprise. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
} 