import CheckoutProductList from './CheckoutProductList';

export default function CartCheckoutInfo() {
  return (
    <article className='lg:h-auto h-[40%] p-2 lg:m-4 m-2 lg:gap-3 gap-2 flex flex-col border border-stone-800 '>
      <h4 className='font-semibold lg:text-base text-sm'>Your Products</h4>
      <CheckoutProductList />
    </article>
  );
}
