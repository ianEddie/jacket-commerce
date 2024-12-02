import type { Products } from '../types';
import { images } from './jacket-images';

export const PRODUCTS: Products = [
  {
    id: '01',
    name: 'Black Jacket',
    slug: 'black-jacket',
    description: 'description',
    image: images.blackJacket,
    imageFront: images.blackJacketFront,
    imageBack: images.blackJacketBack,
    price: 100,
    quantity: 0,
    origin: 'Japan',
    colors: [
      { name: 'Black', hex: '#181818' },
      { name: 'Slate', hex: '#CBD5E1' },
      { name: 'Red', hex: '#D70918' }
    ],
    size: '2XL'
  },
  {
    id: '02',
    name: 'Blue Jacket',
    slug: 'blue-jacket',
    description: 'description',
    image: images.blueJacket,
    imageFront: images.blueJacketFront,
    imageBack: images.blueJacketBack,
    price: 130,
    quantity: 0,
    origin: 'England',
    colors: [
      { name: 'Blue', hex: '#003ABD' },
      { name: 'Amber', hex: '#FCA702' },
      { name: 'Red', hex: '#D70918' }
    ],
    size: 'XL'
  },
  {
    id: '03',
    name: 'Purple Jacket',
    slug: 'purple-jacket',
    description: 'description',
    image: images.purpleJacket,
    imageFront: images.purpleJacketFront,
    imageBack: images.purpleJacketBack,
    price: 120,
    quantity: 0,
    origin: 'Denmark',
    colors: [
      { name: 'purple', hex: '#65499c' },
      { name: 'red', hex: '#bf000a' },
      { name: 'Cyan', hex: '#faae2a' }
    ],
    size: '3XL'
  },
  {
    id: '04',
    name: 'Gray Jacket',
    slug: 'gray-jacket',
    description: 'description',
    image: images.grayJacket,
    imageFront: images.grayJacketFront,
    imageBack: images.grayJacketBack,
    price: 120,
    quantity: 0,
    origin: 'USA',
    colors: [
      { name: 'Gray', hex: '#1B3644' },
      { name: 'Orange', hex: '#FA4902' },
      { name: 'Cyan', hex: '#0A9BDA' }
    ],
    size: 'XL'
  },
  {
    id: '05',
    name: 'BlueGray Jacket',
    slug: 'bluegray-jacket',
    description: 'description',
    image: images.bluegrayJacket,
    imageFront: images.bluegrayJacketFront,
    imageBack: images.bluegrayJacketBack,
    price: 120,
    quantity: 0,
    origin: 'USA',
    colors: [
      { name: 'Blue', hex: '#182953' },
      { name: 'Red', hex: '#df0027' },
      { name: 'Black', hex: '#181818' }
    ],
    size: '2XL'
  },
  {
    id: '06',
    name: 'Stone Jacket',
    slug: 'stone-jacket',
    description: 'description',
    image: images.stoneJacket,
    imageFront: images.stoneJacketFront,
    imageBack: images.stoneJacketBack,
    price: 120,
    quantity: 0,
    origin: 'Canada',
    colors: [
      { name: 'Gray', hex: '#181818' },
      { name: 'Amber', hex: '#d18a1f' },
      { name: 'Blue', hex: '#272f5c' }
    ],
    size: '4XL'
  },
  {
    id: '07',
    name: 'StoneCold Jacket',
    slug: 'stonecold-jacket',
    description: 'description',
    image: images.stonecoldJacket,
    imageFront: images.stonecoldJacketFront,
    imageBack: images.stonecoldJacketBack,
    price: 90,
    quantity: 0,
    origin: 'NYC',
    colors: [
      { name: 'Blue', hex: '#203578' },
      { name: 'Red', hex: '#df0027' },
      { name: 'Yellow', hex: '#FACC15' }
    ],
    size: '2XL'
  },
  {
    id: '08',
    name: 'Red Jacket',
    slug: 'red-jacket',
    description: 'description',
    image: images.redJacket,
    imageFront: images.redJacketFront,
    imageBack: images.redJacketBack,
    price: 90,
    quantity: 0,
    origin: 'Spain',
    colors: [
      { name: 'Red', hex: '#601417' },
      { name: 'Violet', hex: '#77145F' },
      { name: 'Yellow', hex: '#FACC15' }
    ],
    size: '3XL'
  }
];
