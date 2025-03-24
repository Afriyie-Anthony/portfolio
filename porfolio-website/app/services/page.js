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
      
      {/* Services Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/images/const_img2.jpg"
          alt="Our Services Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Our Services
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Comprehensive construction solutions for all your infrastructure needs
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              {
                title: 'General Building',
                description: 'Comprehensive building solutions for residential, commercial, and industrial structures. We handle everything from foundation to finishing, ensuring quality and durability in every project.',
                icon: '🏗️'
              },
              {
                title: 'Construction Works and Road Construction',
                description: 'Expert road construction and infrastructure development services. From highways to local roads, we deliver durable and well-engineered transportation solutions.',
                icon: '🛣️'
              },
              {
                title: 'General Merchants',
                description: 'One-stop shop for all your construction and building material needs. We supply high-quality materials, tools, and equipment for various construction projects.',
                icon: '🏪'
              },
              {
                title: 'Farms Input',
                description: 'Providing essential agricultural inputs and supplies to support farming operations. We offer quality farm equipment, seeds, fertilizers, and other agricultural necessities.',
                icon: '🌾'
              },
              {
                title: 'Export and Import General Goods',
                description: 'Facilitating international trade with our comprehensive import and export services. We handle logistics, customs clearance, and ensure smooth cross-border transactions.',
                icon: '🌍'
              }
            ].map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
                <div className="text-4xl mb-4">{service.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                <p className="text-gray-600">{service.description}</p>
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