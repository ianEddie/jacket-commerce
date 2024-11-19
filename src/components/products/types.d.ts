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
  image: string;
  imageFront: string;
  imageBack: string;
  quantity: number;
  price: number;
  origin: string;
  colors: Color[];
}

export type Products = Product[];
