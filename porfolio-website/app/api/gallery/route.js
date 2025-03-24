import { NextResponse } from 'next/server';
import { getGalleryImages, getUniqueCategories } from '../../utils/galleryUtils';

export async function GET() {
  try {
    const images = getGalleryImages();
    const categories = getUniqueCategories(images);

    return NextResponse.json({
      images,
      categories
    });
  } catch (error) {
    console.error('Error loading gallery images:', error);
    return NextResponse.json(
      { error: 'Failed to load gallery images' },
      { status: 500 }
    );
  }
} 