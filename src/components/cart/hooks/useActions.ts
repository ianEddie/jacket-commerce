import type { Product, productId } from '@components/products/types';
import { useCartStore } from '../store/cart-store';
import { useEffect, useState } from 'react';

export function useActions() {
  const {
    addToCart,
    cart,
    removeFromCart,
    increaseQuantity,
    decreaseQuantity
  } = useCartStore();
  // STATE FOR CREATE A RANDOM VALUE TO SHIPPING
  const [shippingValue, setShippingValue] = useState<number>(0);
  // RENDERING ONLY ONE TIME DE VALUE
  useEffect(() => {
    const value = Math.floor(Math.random() * (30 - 10 + 1)) + 10;
    setShippingValue(value);
  }, []);
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
  // GET TOTAL PRICE OF CART INCLUDING SHIPPING VALUE
  const getCartTotalPrice = () => {
    const subTotal = getCartSubTotalPrice();
    const totalPrice = subTotal + shippingValue;
    return {
      subTotal,
      shippingValue,
      totalPrice
    };
  };
  // GET CART LEGTH
  const cartValue = cart.length;
  // RETURN THE ACTIONS
  return {
    handleAddToCart,
    handleRemove,
    hasProductInCart,
    handleIncrement,
    handleDecrement,
    getSubTotalPrice,
    getCartSubTotalPrice,
    getCartTotalPrice,
    cartValue,
    cart
  };
}
