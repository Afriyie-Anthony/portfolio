'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBars, faTimes } from '@fortawesome/free-solid-svg-icons';
import Image from 'next/image';

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { href: '/', text: 'Home' },
    { href: '/about', text: 'About Us' },
    { href: '/services', text: 'Services' },
    { href: '/gallery', text: 'Gallery' },
    { href: '/contact', text: 'Contact' },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const getLinkClassName = (href) => {
    const isActive = pathname === href;
    const baseClasses = 'px-3 py-2 rounded-md text-md font-medium transition-colors duration-300';
    const activeClass = 'text-primary';
    const inactiveClass = isScrolled 
      ? 'text-gray-800 hover:text-primary' 
      : 'text-white hover:text-primary';
    
    return `${baseClasses} ${isActive ? activeClass : inactiveClass}`;
  };

  const getMobileLinkClassName = (href) => {
    const isActive = pathname === href;
    const baseClasses = 'block px-3 py-2 rounded-md text-base font-medium';
    const activeClass = 'text-primary bg-gray-100';
    const inactiveClass = 'text-gray-800 hover:text-primary';

    return `${baseClasses} ${isActive ? activeClass : inactiveClass}`;
  };

  return (
    <nav className={`fixed w-full z-50 transition-all duration-300 ${
      isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <Link href="/">
             <Image src="/logo.png" alt="Logo" width={100} height={40} />  
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} className={getLinkClassName(link.href)}>
                  {link.text}
                </Link>
              ))}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className={`inline-flex items-center justify-center p-2 rounded-md focus:outline-none transition-colors duration-300 ${
                isScrolled 
                  ? 'text-gray-800 hover:text-primary' 
                  : 'text-white hover:text-primary'
              }`}
            >
              <FontAwesomeIcon icon={isMobileMenuOpen ? faTimes : faBars} className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div className={`md:hidden ${isMobileMenuOpen ? 'block' : 'hidden'}`}>
        <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3 bg-white shadow-lg">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className={getMobileLinkClassName(link.href)} onClick={() => setIsMobileMenuOpen(false)}>
              {link.text}
            </Link>
          ))}
        </div>
      </div>
    </nav>
  );
} 