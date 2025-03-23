'use client';

import { useState } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

const galleryImages = [
  { src: '/images/const_img1.jpg', category: 'commercial' },
  { src: '/images/const_img2.jpg', category: 'residential' },
  { src: '/images/const_img3.jpg', category: 'industrial' },
  { src: '/images/const_img4.jpg', category: 'commercial' },
  { src: '/images/const_img5.jpg', category: 'residential' },
  { src: '/images/const_img6.jpg', category: 'industrial' },
  { src: '/images/const_img7.jpg', category: 'commercial' },
  { src: '/images/const_img8.jpg', category: 'residential' },
  { src: '/images/const_img9.jpg', category: 'industrial' },
  { src: '/images/const_img10.jpg', category: 'commercial' },
  { src: '/images/const_img11.jpg', category: 'residential' },
  { src: '/images/const_img12.jpg', category: 'industrial' },
  { src: '/images/const_img13.jpg', category: 'commercial' },
  { src: '/images/const_img14.jpg', category: 'residential' },
  { src: '/images/const_img15.jpg', category: 'industrial' },
  { src: '/images/const_img16.jpg', category: 'commercial' },
  { src: '/images/const_img17.jpg', category: 'residential' },
  { src: '/images/const_img18.jpg', category: 'industrial' },
  { src: '/images/const_img19.jpg', category: 'commercial' },
  { src: '/images/const_img20.jpg', category: 'residential' },
  { src: '/images/const_img21.jpg', category: 'industrial' },
  { src: '/images/const_img22.jpg', category: 'commercial' },
  { src: '/images/const_img23.jpg', category: 'residential' },
  { src: '/images/const_img24.jpg', category: 'industrial' },
  { src: '/images/const_img25.jpg', category: 'commercial' },
];

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);

  const filteredImages = selectedCategory === 'all'
    ? galleryImages
    : galleryImages.filter(image => image.category === selectedCategory);

  return (
    <main>
      <Navbar />

      {/* Gallery Header */}
      <section className="pt-32 pb-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-4">
            Our Project Gallery
          </h1>
          <p className="text-xl text-center text-gray-600 max-w-3xl mx-auto">
            Explore our portfolio of successful construction projects across Ghana.
            From commercial developments to residential communities, we deliver excellence in every project.
          </p>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', 'commercial', 'residential', 'industrial'].map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors ${
                  selectedCategory === category
                    ? 'bg-primary text-white'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                }`}
              >
                {category.charAt(0).toUpperCase() + category.slice(1)}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image, index) => (
              <div
                key={index}
                className="relative h-[300px] group overflow-hidden rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(image)}
              >
                <Image
                  src={image.src}
                  alt={`Project ${index + 1}`}
                  fill
                  className="object-cover transition-transform duration-300 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="text-white text-lg font-semibold">
                    View Project
                  </span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-75 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div className="relative max-w-5xl w-full">
            <button
              className="absolute top-4 right-4 text-white text-2xl hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              ×
            </button>
            <div className="relative h-[80vh]">
              <Image
                src={selectedImage.src}
                alt="Selected Project"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      )}

      <Footer />
    </main>
  );
} 