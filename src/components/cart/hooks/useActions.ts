import type { Product, productId } from '@components/products/types';
import { useCartStore } from '../store/cart-store';

export function useActions() {
  const { addToCart, cart, removeFromCart } = useCartStore();
  // ADD PRODUCT TO CART
  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };
  // REMOVE PRODUCT FROM CART
  const handleRemove = (id: productId) => {
    removeFromCart(id);
  };
  // CHECK IF THE PRODUCT IS IN CART
  const hasProductInCart = (product: Product) => {
    return cart.some((item) => item.id === product.id);
  };

  return { handleAddToCart, handleRemove, hasProductInCart };
}
