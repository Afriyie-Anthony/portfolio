'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function Services() {
  const services = [
    {
      title: 'Project Management & Planning',
      description: 'We provide comprehensive project management services that ensure your construction projects are delivered on time, within budget, and to the highest quality standards. Our expertise covers the entire project lifecycle from planning to completion.',
      image: '/images/Commercial/6_unitClassroom_EstiSunkwa.jpg',
      features: [
        'Project planning and scheduling',
        'Progress monitoring and reporting',
        'Procurement schedule management',
        'Site safety systems implementation',
        'Quality control and assurance',
        'Change order control',
        'Timeline and budget management'
      ]
    },
    {
      title: 'Commercial Management & Contract Administration',
      description: 'Our commercial management services ensure optimal financial control and contract compliance throughout your project. We handle both pre and post-contract administration with expertise in budget control and financial reporting.',
      image: '/images/Commercial/AkrokeriMeth_1.jpg',
      features: [
        'Commercial management & budget control',
        'Pre and post-contract administration',
        'Financial reporting and reconciliation',
        'Final accounts preparation',
        'Claim management',
        'Value engineering',
        'Sub-contract administration'
      ]
    },
    {
      title: 'Site Systems & Quality Assurance',
      description: 'We implement robust site systems and quality assurance protocols to ensure the highest standards of construction excellence. Our comprehensive approach covers everything from supply chain management to quality control systems.',
      image: '/images/Commercial/PatakromClassroom_1.jpg',
      features: [
        'Site systems implementation',
        'Quality assurance protocols',
        'Supply chain management',
        'Reconciliation systems',
        'Quality control monitoring',
        'Site safety management',
        'Performance optimization'
      ]
    }
  ];

  return (
    <main>
      <Navbar />
      
      {/* Services Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/images/Commercial/6_unitClassroom_EstiSunkwa.jpg"
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
              Professional Construction Management Services
            </p>
          </div>
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
                description: 'We believe in employing the correct people and training them to be better at their jobs, ensuring the highest quality service delivery.',
                icon: '👥'
              },
              {
                title: 'Comprehensive Management',
                description: 'From project planning to final accounts, we provide end-to-end construction management services that guarantee project success.',
                icon: '✨'
              },
              {
                title: 'Quality Focus',
                description: 'Our commitment to quality assurance and continuous improvement ensures superior project outcomes.',
                icon: '🏆'
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