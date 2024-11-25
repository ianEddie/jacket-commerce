import blackJacket from '../assets/black-jacket.webp';
import blackJacketFront from '../assets/black-jacket-front.webp';
import blackJacketBack from '../assets/black-jacket-back.webp';
import redJacket from '../assets/red-jacket.webp';
import redJacketFront from '../assets/red-jacket-front.webp';
import redJacketBack from '../assets/red-jacket-back.webp';
import blueJacket from '../assets/blue-jacket.webp';
import blueJacketFront from '../assets/blue-jacket-front.webp';
import blueJacketBack from '../assets/blue-jacket-back.webp';
import grayJacket from '../assets/gray-jacket.webp';
import grayJacketFront from '../assets/gray-jacket-front.webp';
import grayJacketBack from '../assets/gray-jacket-back.webp';
import type { Products } from '../types';

export const PRODUCTS: Products = [
  {
    id: '01',
    name: 'Black Jacket',
    slug: 'black-jacket',
    description: 'description',
    image: blackJacket,
    imageFront: blackJacketFront,
    imageBack: blackJacketBack,
    price: 100,
    quantity: 0,
    origin: 'Japan',
    colors: [
      { name: 'Black', hex: '#181818' },
      { name: 'Slate', hex: '#CBD5E1' },
      { name: 'Red', hex: '#D70918' }
    ]
  },
  {
    id: '02',
    name: 'Blue Jacket',
    slug: 'blue-jacket',
    description: 'description',
    image: blueJacket,
    imageFront: blueJacketFront,
    imageBack: blueJacketBack,
    price: 130,
    quantity: 0,
    origin: 'England',
    colors: [
      { name: 'Blue', hex: '#003ABD' },
      { name: 'Amber', hex: '#FCA702' },
      { name: 'Red', hex: '#D70918' }
    ]
  },
  {
    id: '03',
    name: 'Red Jacket',
    slug: 'red-jacket',
    description: 'description',
    image: redJacket,
    imageFront: redJacketFront,
    imageBack: redJacketBack,
    price: 90,
    quantity: 0,
    origin: 'Spain',
    colors: [
      { name: 'Red', hex: '#601417' },
      { name: 'Violet', hex: '#77145F' },
      { name: 'Yellow', hex: '#FACC15' }
    ]
  },
  {
    id: '04',
    name: 'Gray Jacket',
    slug: 'gray-jacket',
    description: 'description',
    image: grayJacket,
    imageFront: grayJacketFront,
    imageBack: grayJacketBack,
    price: 120,
    quantity: 0,
    origin: 'USA',
    colors: [
      { name: 'Gray', hex: '#1B3644' },
      { name: 'Orange', hex: '#FA4902' },
      { name: 'Cyan', hex: '#0A9BDA' }
    ]
  }
];
