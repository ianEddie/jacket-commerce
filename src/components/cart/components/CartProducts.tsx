import CartSingleProduct from './CartSingleProduct';
import { useCartStore } from '../store/cart-store';
import type { Product } from '@components/products/types';

export default function CartProducts() {
  const { cart } = useCartStore((state) => state);

  return (
    <section className='flex flex-col font-primary h-full w-[70%] border-2 border-stone-800 bg-gradient-to-b from-zinc-50 via-zinc-50/80 to-zinc-50/40'>
      <h2 className='px-4 py-2 border-b-2 border-stone-800 uppercase font-bold'>
        your products
      </h2>
      <div className='flex flex-col gap-4 overflow-auto p-4'>
        {cart.map((product: Product) => (
          <CartSingleProduct
            key={product.id}
            {...product}
          />
        ))}
      </div>
    </section>
  );
}
