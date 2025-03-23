'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/" className="text-2xl font-bold text-primary">
              Affulexis Enterprise
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <Link href="/" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Home
              </Link>
              <Link href="/about" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                About Us
              </Link>
              <Link href="/services" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Services
              </Link>
              <Link href="/gallery" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Gallery
              </Link>
              <Link href="/contact" className="text-gray-800 hover:text-primary px-3 py-2 rounded-md text-sm font-medium transition-colors">
                Contact
              </Link>
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-800 hover:text-primary focus:outline-none"
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          <Link href="/" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Home
          </Link>
          <Link href="/about" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            About Us
          </Link>
          <Link href="/services" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Services
          </Link>
          <Link href="/gallery" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Gallery
          </Link>
          <Link href="/contact" className="text-gray-800 hover:text-primary block px-3 py-2 rounded-md text-base font-medium">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
} 