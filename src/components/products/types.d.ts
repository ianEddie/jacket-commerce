import type { ImageMetadata } from 'astro';

export type productId = string;

export type Color = {
  name: string;
  hex: string;
};

export interface Product {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: ImageMetadata | any;
  imageFront: ImageMetadata | any;
  imageBack: ImageMetadata | any;
  price: number;
  quantity: number;
  origin: string;
  colors: Color[];
}

export type Products = Product[];
