import { PlaceHolderImages } from './placeholder-images';

const prices = [29.99, 149.99, 89.5, 24.0, 18.99, 35.0];

export const products = PlaceHolderImages.map((p, i) => ({
  id: p.id,
  name: p.description,
  price: prices[i] || 49.99,
  description: `This is a detailed description for ${p.description}. It is crafted with the finest materials and designed for both style and function. Whether you are looking for a gift or a treat for yourself, this product is an excellent choice that combines quality and elegance.`,
  image: p.imageUrl,
  imageHint: p.imageHint,
}));
