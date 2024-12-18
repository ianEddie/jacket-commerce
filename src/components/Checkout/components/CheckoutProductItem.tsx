import type { Product } from '@components/products/types';
import Price from '@ui/Price';

interface Props {
  product: Product;
}

export default function CheckoutProductItem({ product }: Props) {
  const { name, price } = product;
  return (
    <li className='w-full flex justify-between'>
      <span className='lg:text-sm text-[12px] font-medium'>{name}</span>
      <Price value={price} />
    </li>
  );
}
