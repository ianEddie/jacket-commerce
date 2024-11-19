import type { Product } from '@components/products/types';

export interface CartProduct extends Product {
  quantity: number;
}
export type CartState = CartProduct[];
