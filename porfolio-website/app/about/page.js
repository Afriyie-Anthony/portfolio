'use client';

import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import Image from 'next/image';

export default function About() {
  return (
    <main>
      <Navbar />
      
      {/* About Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/images/const_img4.jpg"
          alt="About Us Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              About Affulexis Enterprise
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Building Ghana's future through excellence in construction and infrastructure development.
            </p>
          </div>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Affulexis Enterprise is a privately owned Ghanaian company based at Sunyam bono region.
                </p>
                <p>
                  Affulexis Enterprise with various professional personnel if focus on delivering unique service on any given project both cominercial and industrial. Benefit derived from working with Affulexis Enterprise includes diligent coordination of work between the company's professionals and the customer in question for timely and sansfactory completion of project giving client's value for their money.
                </p>
                <p>
                  Our company's focus on operation time delivery services and the application of project management techniques to ensure the procurement of materials, equipment and management team to handle any project start to finish on a timely manner.
                </p>
                <p>
                  With our modern methodologies and state of the art machinery equipment and skilled technical, we are able to deliver services to domestic small business, large corporations and industrial projects firms across the length and breadth of the country.
                </p>
              </div>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <Image
                src="/images/const_img4.jpg"
                alt="Our Story"
                fill
                className="object-cover"
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
                The deliver the highest quality construction services at fair and market competitive prices using modern methodologies to excite any scale of work.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-lg">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To maintain the higher levels of professionalism, strategy, honesty and fairness in our relationships with our clients supplies subcontractors and customers.
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