import CartCheckoutInfo from './CartCheckoutInfo';
import CartCheckoutPrice from './CartCheckoutPrice';

export default function CartCheckout() {
  return (
    <aside className='flex flex-col  bg-gradient-to-b from-zinc-50 via-zinc-50/90 to-zinc-50/50 h-full font-primary flex-grow border-2 border-stone-800'>
      <h3 className='uppercase font-bold p-4 border-b border-stone-800'>
        Checkout
      </h3>
      <CartCheckoutInfo />
      <CartCheckoutPrice />
    </aside>
  );
}
