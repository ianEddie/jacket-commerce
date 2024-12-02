import NumberFlow from '@number-flow/react';

interface Props {
  value: number;
}

export default function Price({ value }: Props) {
  return (
    <div className='flex gap-1 items-center'>
      <NumberFlow
        value={value}
        className='text-[14px] font-semibold '
      />
      <span className='text-[12px] font-medium text-green-700'>US$</span>
    </div>
  );
}
