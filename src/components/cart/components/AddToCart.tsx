import type { Product } from '@components/products/types';
import { useCartStore } from '../store/cart-store';
import { useActions } from '../hooks/useActions';

interface Props {
  product: Product;
}

export default function AddToCart({ product }: Props) {
  const { handleAddToCart, hasProductInCart } = useActions();
  const isProductInCart = hasProductInCart(product);
  return (
    <a href='/cart'>
      {isProductInCart ? (
        <span className='px-2 py-1 bg-green-800 text-zinc-50 font-medium uppercase text-sm border-2 transition-all duration-300 hover:scale-105 border-stone-800 hover:bg-yellow-300 hover:text-zinc-950'>
          View in cart
        </span>
      ) : (
        <button
          onClick={() => handleAddToCart(product)}
          className='px-2 py-1 bg-yellow-300 font-medium uppercase text-sm border-2 transition-all duration-300 hover:scale-105 border-stone-800 hover:bg-green-800 hover:text-zinc-50'
        >
          Add to cart
        </button>
      )}
    </a>
  );
}
