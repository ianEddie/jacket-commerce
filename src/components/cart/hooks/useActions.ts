import type { Product, productId } from '@components/products/types';
import { useCartStore } from '../store/cart-store';

export function useActions() {
  const {
    addToCart,
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useCartStore();
  // ADD PRODUCT TO CART
  const handleAddToCart = (product: Product) => {
    addToCart(product);
  };
  // REMOVE PRODUCT FROM CART
  const handleRemove = (id: productId) => {
    removeFromCart(id);
  };
  // INCREMENT PRODUCT QUANTITY
  const handleIncrement = (id: productId) => {
    increaseQuantity(id);
  };
  // DECREMENT PRODUCT QUANTITY
  const handleDecrement = (id: productId) => {
    decreaseQuantity(id);
  };
  // CHECK IF THE PRODUCT IS IN CART
  const hasProductInCart = (product: Product) => {
    return cart.some((item) => item.id === product.id);
  };
  // GET SUB TOTAL PRICE OF PRODUCT
  const getSubTotalPrice = (price: number, quantity: number) => {
    return price * quantity;
  };
  // GET SUB TOTAL PRICE OF CART
  const getCartSubTotalPrice = () => {
    return cart.reduce(
      (total, product) => total + product.price * product.quantity,
      0
    );
  };
  // GET A RANDOM NUMBER TO SHIPPING VALUE
  const getShippingValue = () => {
    return Math.floor(Math.random() * (30 - 10 + 1)) + 10;
  };

  // RETURN THE ACTIONS
  return {
    handleAddToCart,
    handleRemove,
    hasProductInCart,
    handleIncrement,
    handleDecrement,
    getSubTotalPrice,
    getCartSubTotalPrice,
    getShippingValue
  };
}
