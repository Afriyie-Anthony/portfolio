import fs from 'fs';
import path from 'path';

export function getGalleryImages() {
  const imagesDirectory = path.join(process.cwd(), 'images');
  const files = fs.readdirSync(imagesDirectory);
  
  return files
    .filter(file => file.match(/\.(jpg|jpeg|png|gif)$/i))
    .map(file => {
      // Extract category from filename (assuming format: category_image.jpg)
      const category = file.split('_')[0];
      return {
        src: `/images/${file}`,
        category: category || 'uncategorized',
        filename: file
      };
    });
}

export function getUniqueCategories(images) {
  return [...new Set(images.map(img => img.category))];
} 