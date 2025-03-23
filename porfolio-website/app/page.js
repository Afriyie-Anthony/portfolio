'use client';

import Navbar from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import Footer from './components/Footer';
import Image from 'next/image';
import Link from 'next/link';

export default function Home() {
  return (
    <main>
      <Navbar />
      
      {/* Hero Section */}
      <HeroSlider />

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                About Affulexis Enterprise
              </h2>
              <p className="text-gray-600 mb-6">
                We are a leading construction company in Ghana, specializing in road construction,
                industrial projects, and residential developments. With years of experience and a
                commitment to excellence, we deliver high-quality results that exceed expectations.
              </p>
              <Link href="/about" className="btn-primary">
                Learn More
              </Link>
            </div>
            <div className="relative h-[400px]">
              <Image
                src="/images/const_img4.jpg"
                alt="About Us"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Road Construction',
                description: 'Building and maintaining quality roads and highways across Ghana.',
                icon: '🚧'
              },
              {
                title: 'Industrial Projects',
                description: 'Specialized construction services for industrial facilities and warehouses.',
                icon: '🏭'
              },
              {
                title: 'Residential Development',
                description: 'Creating comfortable and modern living spaces for communities.',
                icon: '🏠'
              }
            ].map((service, index) => (
              <div key={index} className="card">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[5, 6, 7].map((num) => (
              <div key={num} className="relative h-[300px] group overflow-hidden rounded-lg">
                <Image
                  src={`/images/const_img${num}.jpg`}
                  alt={`Project ${num}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <Link href="/gallery" className="text-white text-lg font-semibold">
                    View Project
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/gallery" className="btn-primary">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Get in Touch
              </h2>
              <p className="text-gray-600 mb-8">
                Ready to start your construction project? Contact us today for a free consultation.
              </p>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                    Message
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-primary focus:ring-primary"
                  />
                </div>
                <button type="submit" className="btn-primary w-full">
                  Send Message
                </button>
              </form>
            </div>
            <div className="relative h-[500px]">
              <Image
                src="/images/const_img8.jpg"
                alt="Contact Us"
                fill
                className="object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 