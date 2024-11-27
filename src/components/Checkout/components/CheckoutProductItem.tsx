import type { Product } from '@components/products/types';

interface Props {
  product: Product;
}

export default function CheckoutProductItem({ product }: Props) {
  const { name, price } = product;
  return (
    <li className='w-full grid grid-cols-2'>
      <span className='text-sm'>{name}</span>
      <span className='flex justify-end items-end gap-px font-medium'>
        <small className='text-green-600'>$</small>
        <small>{price}</small>
      </span>
    </li>
  );
}
