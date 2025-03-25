'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Gallery() {
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedImage, setSelectedImage] = useState(null);
  const [galleryImages, setGalleryImages] = useState([]);
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [displayedImages, setDisplayedImages] = useState([]);
  const [showLoadMore, setShowLoadMore] = useState(false);

  useEffect(() => {
    const loadImages = async () => {
      try {
        const response = await fetch('/api/gallery');
        const data = await response.json();
        setGalleryImages(data.images);
        setCategories(data.categories);
      } catch (error) {
        console.error('Error loading gallery images:', error);
      } finally {
        setIsLoading(false);
      }
    };

    loadImages();
  }, []);

  useEffect(() => {
    const filteredImages = selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter(image => image.category === selectedCategory);

    // Set initial displayed images based on screen size
    const initialCount = window.innerWidth < 768 ? 3 : 6;
    setDisplayedImages(filteredImages.slice(0, initialCount));
    setShowLoadMore(filteredImages.length > initialCount);
  }, [selectedCategory, galleryImages]);

  const handleLoadMore = () => {
    const currentCount = displayedImages.length;
    const filteredImages = selectedCategory === 'all'
      ? galleryImages
      : galleryImages.filter(image => image.category === selectedCategory);
    
    const nextCount = window.innerWidth < 768 ? currentCount + 3 : currentCount + 6;
    setDisplayedImages(filteredImages.slice(0, nextCount));
    setShowLoadMore(nextCount < filteredImages.length);
  };

  return (
    <main>
      <Navbar />

      {/* Gallery Hero Section */}
      <section className="relative h-[50vh]">
        <Image
          src="/images/const_img3.jpg"
          alt="Our Project Gallery Hero"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black bg-opacity-50" />
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-5xl md:text-7xl font-bold mb-4">
              Our Project Gallery
            </h1>
            <p className="text-xl md:text-2xl max-w-3xl mx-auto">
              Explore our portfolio of successful construction projects across Ghana
            </p>
          </div>
        </div>
      </section>

      {/* Gallery Filters */}
      <section className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap justify-center gap-4">
            {['all', ...categories].map((category) => (
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
          {isLoading ? (
            <div className="text-center py-12">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-primary mx-auto"></div>
            </div>
          ) : (
            <>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {displayedImages.map((image, index) => (
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
                    <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center flex-col">
                      <span className="text-white text-lg font-semibold">
                        {image.title}
                      </span>
                      <span className="text-white text-sm mt-2">
                        View Project
                      </span>
                    </div>
                  </div>
                ))}
              </div>
              
              {showLoadMore && (
                <div className="text-center mt-12">
                  <button
                    onClick={handleLoadMore}
                    className="px-8 py-3 bg-primary text-white rounded-full hover:bg-primary/90 transition-colors"
                  >
                    Load More
                  </button>
                </div>
              )}
            </>
          )}
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