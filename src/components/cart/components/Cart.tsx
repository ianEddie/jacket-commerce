import CartCheckout from '../../Checkout/components/Checkout';
import { useActions } from '../hooks/useActions';
import CartProducts from './CartProducts';
import EmptyCart from './EmptyCart';

export default function Cart() {
  const { cartValue } = useActions();
  const emptyCart = cartValue < 1;
  return (
    <main className='h-screen lg:p-10 p-5 gap-10 flex lg:flex-row flex-col justify-center items-center'>
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
