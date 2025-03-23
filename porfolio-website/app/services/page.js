'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Road Construction',
      description: 'We specialize in building and maintaining quality roads and highways across Ghana. Our expertise includes asphalt paving, concrete roads, and road rehabilitation.',
      image: '/images/const_img2.jpg',
      features: [
        'Highway construction',
        'Road rehabilitation',
        'Bridge construction',
        'Drainage systems'
      ]
    },
    {
      title: 'Industrial Projects',
      description: 'Our industrial construction services cater to manufacturing facilities, warehouses, and industrial complexes. We ensure robust and efficient structures for your business needs.',
      image: '/images/const_img3.jpg',
      features: [
        'Factory construction',
        'Warehouse development',
        'Industrial facilities',
        'Loading docks'
      ]
    },
    {
      title: 'Residential Development',
      description: 'We create comfortable and modern living spaces for communities, from single-family homes to multi-unit residential complexes.',
      image: '/images/const_img4.jpg',
      features: [
        'Housing developments',
        'Apartment complexes',
        'Custom homes',
        'Renovations'
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Services Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Services
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Comprehensive construction solutions for all your infrastructure needs
          </p>
        </div>
      </section>

      {/* Services List */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="space-y-20">
            {services.map((service, index) => (
              <div key={index} className={`grid grid-cols-1 md:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? 'md:flex-row-reverse' : ''
              }`}>
                <div className="relative h-[400px]">
                  <Image
                    src={service.image}
                    alt={service.title}
                    fill
                    className="object-cover rounded-lg"
                  />
                </div>
                <div>
                  <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                    {service.title}
                  </h2>
                  <p className="text-gray-600 mb-8">
                    {service.description}
                  </p>
                  <ul className="space-y-3">
                    {service.features.map((feature, featureIndex) => (
                      <li key={featureIndex} className="flex items-center text-gray-600">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <button className="mt-8 btn-primary">
                    Learn More
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Why Choose Us
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Expert Team',
                description: 'Our experienced professionals bring years of expertise to every project.',
                icon: '👥'
              },
              {
                title: 'Quality Assurance',
                description: 'We maintain the highest standards of quality in all our work.',
                icon: '✨'
              },
              {
                title: 'Timely Delivery',
                description: 'We complete projects on schedule while maintaining quality standards.',
                icon: '⏰'
              }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center">
                <div className="text-4xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 