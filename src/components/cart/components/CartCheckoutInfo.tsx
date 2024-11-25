import CheckoutProductList from './CheckoutProductList';

export default function CartCheckoutInfo() {
  return (
    <article className='p-2 m-4 gap-3 flex flex-col border border-stone-800  '>
      <h4 className='font-semibold'>Your Products</h4>
      <CheckoutProductList />
    </article>
  );
}
