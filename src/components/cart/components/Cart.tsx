import CartCheckout from '../../Checkout/components/Checkout';
import { useActions } from '../hooks/useActions';
import CartProducts from './CartProducts';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const { cartValue } = useActions();
  const emptyCart = cartValue < 1;
  return (
    <main className='h-[100dvh] lg:p-10 p-5 lg:gap-10 gap-5 flex lg:flex-row flex-col justify-center items-center'>
      {emptyCart ? (
        <EmptyCart />
      ) : (
        <>
          <CartProducts />
          <CartCheckout />
        </>
      )}
    </main>
  );
}
