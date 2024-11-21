import LessIcon from '../icons/less-icon.tsx';
import MoreIcon from '../icons/more-icon.tsx';
import QuantityButton from './QuantityButton';

export default function CartQuantity() {
  return (
    <div className='flex gap-4 justify-center items-center'>
      <QuantityButton>
        <LessIcon />
      </QuantityButton>
      <strong>1</strong>
      <QuantityButton>
        <MoreIcon />
      </QuantityButton>
    </div>
  );
}
