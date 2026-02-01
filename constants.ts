
import { Photo } from './types';

/**
 * ==================================================================================
 *  如何替换为你自己的照片 (HOW TO USE YOUR OWN PHOTOS)
 * ==================================================================================
 * 
 * 1. 在项目根目录下创建一个名为 'public' 的文件夹 (如果还没有的话)。
 *    Create a folder named 'public' in your project root.
 * 
 * 2. 在 'public' 文件夹内创建一个名为 'images' 的文件夹。
 *    Create a folder named 'images' inside 'public'.
 * 
 * 3. 将你的照片文件 (例如: my-photo.jpg) 复制到 'public/images/' 文件夹中。
 *    Copy your photo files into 'public/images/'.
 * 
 * 4. 修改下方的 PHOTOS 数组，将 'url' 替换为 '/images/文件名.jpg'。
 *    Update the 'url' field below to '/images/your-filename.jpg'.
 * 
 *    例子 (Example):
 *    url: '/images/tibet-mountains.jpg',
 * 
 * ==================================================================================
 */

export const PHOTOS: Photo[] = [
  {
    id: 'f1',
    // 替换这里: url: 'C:/Users/Public/images/mengna.jpg',
    url: 'C:\Users\Administrator\OneDrive\Desktop\ma-zhunming---visual-artist\public\images\mengna.jpg', 
    title: 'Mona Lisa',
    location: 'Paris, France',
    category: 'domestic',
    period: '2025',
    exif: { camera: 'Leica M11-P', lens: '85mm APO', aperture: 'f/5.6', shutter: '1/500s', iso: '64' }
  },
  {
    id: 'f2',
    url: 'https://picsum.photos/id/28/1200/1600',
    title: 'Silent Forest',
    location: 'Kyoto, Japan',
    category: 'international',
    period: '2025',
    exif: { camera: 'Hasselblad X2D', lens: '38mm', aperture: 'f/4', shutter: '1/60s', iso: '100' }
  },
  {
    id: 'd1',
    url: 'https://picsum.photos/id/1015/1200/1600',
    title: 'River Valley',
    location: 'Guilin, China',
    category: 'domestic',
    period: '2024',
    exif: { camera: 'Leica M11', lens: '35mm Summilux', aperture: 'f/2.8', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'i1',
    url: 'https://picsum.photos/id/1036/1200/1600',
    title: 'Nordic Winter',
    location: 'Tromsø, Norway',
    category: 'international',
    period: '2024',
    exif: { camera: 'Hasselblad X2D', lens: '55mm', aperture: 'f/4.0', shutter: '1/1000s', iso: '100' }
  },
  {
    id: 'd4',
    url: 'https://picsum.photos/id/106/1200/1600',
    title: 'Evening Lights',
    location: 'Shanghai, China',
    category: 'domestic',
    period: '2024',
    exif: { camera: 'Leica Q2', lens: '28mm Fixed', aperture: 'f/1.7', shutter: '1/125s', iso: '1600' }
  },
  {
    id: 'i3',
    url: 'https://picsum.photos/id/129/1200/1600',
    title: 'Parisian Mood',
    location: 'Paris, France',
    category: 'international',
    period: '2024',
    exif: { camera: 'Leica M10-R', lens: '50mm Noctilux', aperture: 'f/0.95', shutter: '1/4000s', iso: '100' }
  },
  {
    id: 'd2',
    url: 'https://picsum.photos/id/1039/1200/1600',
    title: 'Highland Waterfall',
    location: 'Sichuan, China',
    category: 'domestic',
    period: '2023',
    exif: { camera: 'Sony A7R V', lens: '24-70mm GM', aperture: 'f/8.0', shutter: '1/60s', iso: '200' }
  },
  {
    id: 'i2',
    url: 'https://picsum.photos/id/103/1200/1600',
    title: 'Street Life',
    location: 'Tokyo, Japan',
    category: 'international',
    period: '2023',
    exif: { camera: 'Ricoh GR III', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/125s', iso: '800' }
  },
  {
    id: 'd5',
    url: 'https://picsum.photos/id/217/1200/1600',
    title: 'The Solitary',
    location: 'Inner Mongolia',
    category: 'domestic',
    period: '2023',
    exif: { camera: 'Canon R5', lens: '85mm f/1.2', aperture: 'f/1.2', shutter: '1/2000s', iso: '50' }
  },
  {
    id: 'i6',
    url: 'https://picsum.photos/id/215/1200/1600',
    title: 'Alpine Lake',
    location: 'Swiss Alps',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT-5', lens: '23mm', aperture: 'f/8', shutter: '1/500s', iso: '160' }
  },
   {
    id: 'd3',
    url: 'https://picsum.photos/id/1043/1200/1600',
    title: 'Ancient Structure',
    location: 'Xi\'an, China',
    category: 'domestic',
    period: '2023',
    exif: { camera: 'Fujifilm GFX 100', lens: '45mm', aperture: 'f/4.0', shutter: '1/500s', iso: '400' }
  }
];
