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
    <a href='/cart' className='bg-red-500'>
      {isProductInCart ? (
        <button className='w-28 h-7 flex justify-center items-center bg-green-800 text-zinc-50 font-medium uppercase text-sm border-2 transition-all duration-300 hover:scale-105 border-stone-800 hover:bg-yellow-300 hover:text-zinc-950'>
          View in cart
        </button>
      ) : (
        <button
          onClick={() => handleAddToCart(product)}
          className='w-28 h-7 flex justify-center items-center bg-yellow-300 font-medium uppercase text-sm border-2 transition-all duration-300 hover:scale-105 border-stone-800 hover:bg-green-800 hover:text-zinc-50'
        >
          Add to cart
        </button>
      )}
    </a>
  );
}
