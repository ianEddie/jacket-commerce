import { create, type StateCreator } from 'zustand';
import { persist } from 'zustand/middleware';
import type { Product, productId } from '@components/products/types';

interface CartStore {
  cart: Product[];
  addToCart: (product: Product) => void;
  removeFromCart: (id: productId) => void;
  clearCart: () => void;
}
const storeApi: StateCreator<CartStore> = (set) => ({
  cart: [],
  // ADD TO CART
  addToCart: (product: Product) => {
    set((state) => ({
      cart: [...state.cart, { ...product, quantity: 1 }]
    }));
  },
  // REMOVE FROM CART
  removeFromCart: (id: productId) => {
    set((state) => ({
      cart: state.cart.filter((product) => product.id != id)
    }));
  },
  // CLEAR CART
  clearCart: () => {
    set({ cart: [] });
  }
});

export const useCartStore = create<CartStore>()(
  persist(storeApi, {
    name: 'cart-store'
  })
);
