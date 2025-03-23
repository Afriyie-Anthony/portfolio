'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <main>
      <Navbar />
      
      {/* About Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            About Affulexis Enterprise
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Building Ghana's future through excellence in construction and infrastructure development.
          </p>
        </div>
      </section>

      {/* Company Story */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 mb-6">
                Founded in 2021, Affulexis Enterprise has grown from a small construction company to a leading force in Ghana's construction industry. Our journey is marked by a commitment to quality, innovation, and sustainable development.
              </p>
              <p className="text-gray-600 mb-6">
                We believe in building not just structures, but lasting relationships with our clients and communities. Our team of experienced professionals brings together decades of expertise in various construction disciplines.
              </p>
              <div className="grid grid-cols-2 gap-4 mt-8">
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">100+</div>
                  <div className="text-gray-600">Projects Completed</div>
                </div>
                <div className="text-center">
                  <div className="text-4xl font-bold text-primary mb-2">50+</div>
                  <div className="text-gray-600">Team Members</div>
                </div>
              </div>
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

      {/* Mission & Vision */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To deliver exceptional construction services that exceed client expectations while contributing to Ghana's infrastructure development through sustainable and innovative solutions.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To be the leading construction company in Ghana, recognized for our commitment to quality, safety, and sustainable development practices.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-12">
            Our Core Values
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Excellence',
                description: 'We strive for excellence in every project, ensuring the highest quality standards in our work.',
                icon: '⭐'
              },
              {
                title: 'Integrity',
                description: 'We maintain the highest level of integrity in all our business dealings and relationships.',
                icon: '🤝'
              },
              {
                title: 'Innovation',
                description: 'We embrace new technologies and methods to deliver better results for our clients.',
                icon: '💡'
              }
            ].map((value, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl mb-4">{value.icon}</div>
                <h3 className="text-xl font-semibold mb-2">{value.title}</h3>
                <p className="text-gray-600">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
} 