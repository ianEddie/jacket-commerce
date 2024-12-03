import CartSingleProduct from './CartSingleProduct';
import { useCartStore } from '../store/cart-store';
import type { Product } from '@components/products/types';

export default function CartProducts() {
  const { cart } = useCartStore((state) => state);

  return (
    <section className='lg:h-full h-[40%] lg:w-[70%] w-full flex flex-col font-primary border-2 border-stone-800 bg-gradient-to-b from-zinc-50 via-zinc-50/80 to-zinc-50/40'>
      <article className='px-2 py-2 flex justify-between items-center border-b-2 border-stone-800'>
        <h2 className='uppercase font-bold pl-2 lg:text-base text-sm'>
          Your Products
        </h2>
        <a
          href='/#products'
          className='bg-yellow-200 lg:text-base text-[12px] px-2 py-px font-medium border border-stone-800 hover:bg-yellow-300 transition-all duration-300'
        >
          Continue Shopping
        </a>
      </article>
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
