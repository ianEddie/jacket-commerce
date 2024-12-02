import CartCheckoutInfo from './CheckoutInfo';
import CartCheckoutPrice from './CheckoutPrice';

export default function CartCheckout() {
  return (
    <aside className='lg:h-full h-auto lg:w-auto w-full flex flex-col bg-gradient-to-b from-zinc-50 via-zinc-50/90 to-zinc-50/50 font-primary lg:flex-grow border-2 border-stone-800'>
      <h3 className='uppercase font-bold p-4 border-b border-stone-800'>
        Checkout
      </h3>
      <CartCheckoutInfo />
      <CartCheckoutPrice />
    </aside>
  );
}
