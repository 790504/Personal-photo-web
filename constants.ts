
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
    url: 'https://i.ibb.co/60xBwr3r/mengna.jpg', 
    title: 'Mona Lisa',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '85mm', aperture: 'f/4', shutter: '1/500s', iso: '64' }
  },
  {
    id: 'f2',
    url: 'https://i.ibb.co/5xY8mFVz/manila.jpg',
    title: 'Death in Manila',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '105mm', aperture: 'f/4', shutter: '1/60s', iso: '100' }
  },
  {
    id: 'f3',
    url: 'https://i.ibb.co/S41zgQm3/shuilian.jpg',
    title: 'Les Nymphéas',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '105mm', aperture: 'f/4', shutter: '1/60s', iso: '100' }
  },
  {
    id: 'f4',
    url: 'https://i.ibb.co/R4VcPf5T/aosai.jpg',
    title: 'Orsay',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '24-70mm', aperture: 'f/4', shutter: '1/125s', iso: '200' }
  },
  {
    id: 'f5',
    url: 'https://i.ibb.co/hx2FQ0jR/lufugong.jpg',
    title: 'Louvre',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '24-70mm', aperture: 'f/4', shutter: '1/125s', iso: '200' }
  },
  {
    id: 'f6',
    url: 'https://i.ibb.co/BHLmnMsY/lufugong2.jpg',
    title: 'Louvre Pyramid',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '24-70mm', aperture: 'f/4', shutter: '1/125s', iso: '200' }
  },
  {
    id: 'f7',
    url: 'https://i.ibb.co/HDRPw3dz/lufugong3.jpg',
    title: 'Louvre Gallery',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '16-35mm', aperture: 'f/5.6', shutter: '1/160s', iso: '400' }
  },
  {
    id: 'f8',
    url: 'https://i.ibb.co/M57T98LK/kaixuanmen1.jpg',
    title: 'Arc de Triomphe',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '24-70mm', aperture: 'f/8', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'f9',
    url: 'https://i.ibb.co/CpTzCrGN/aifeier1.jpg',
    title: 'Eiffel Tower',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '70-200mm', aperture: 'f/2.8', shutter: '1/800s', iso: '100' }
  },
  {
    id: 'f10',
    url: 'https://i.ibb.co/JRScJVZb/Institut-de-France.jpg',
    title: 'Institut de France',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A74', lens: '50mm', aperture: 'f/1.8', shutter: '1/1000s', iso: '100' }
  }
];