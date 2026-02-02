
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
  // --- 2025: PARIS ---
  {
    id: 'p25-1',
    url: '/images/mengna.jpg', 
    title: 'Mona Lisa',
    location: 'Louvre, Paris',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '55mm', aperture: 'f/2.8', shutter: '1/100s', iso: '800' }
  },
  {
    id: 'p25-2',
    url: '/images/manila.jpg',
    title: 'Death in Manila',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '35mm', aperture: 'f/1.4', shutter: '1/60s', iso: '400' }
  },
  {
    id: 'p25-3',
    url: '/images/shuilian.jpg',
    title: 'Les Nymphéas',
    location: 'Orangerie, Paris',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24mm', aperture: 'f/4', shutter: '1/80s', iso: '200' }
  },
  {
    id: 'p25-4',
    url: '/images/aosai.jpg',
    title: 'Musée d\'Orsay',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/125s', iso: '100' }
  },
  {
    id: 'p25-5',
    url: '/images/aosai2.jpg',
    title: 'The Clock',
    location: 'Musée d\'Orsay',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '50mm', aperture: 'f/2.8', shutter: '1/200s', iso: '400' }
  },
  {
    id: 'p25-6',
    url: '/images/lufugong.jpg',
    title: 'Louvre Courtyard',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '16-35mm', aperture: 'f/8', shutter: '1/60s', iso: '100' }
  },
  {
    id: 'p25-7',
    url: '/images/lufugong2.jpg',
    title: 'The Pyramid',
    location: 'Louvre, Paris',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24mm', aperture: 'f/4', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'p25-8',
    url: '/images/lufugong3.jpg',
    title: 'Louvre Interior',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '35mm', aperture: 'f/2.0', shutter: '1/100s', iso: '800' }
  },
  {
    id: 'p25-9',
    url: '/images/shenglinvshen.jpg',
    title: 'Winged Victory',
    location: 'Louvre, Paris',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '85mm', aperture: 'f/2.8', shutter: '1/160s', iso: '640' }
  },
  {
    id: 'p25-10',
    url: '/images/shneglibaitang.jpg',
    title: 'Sainte-Chapelle',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '16mm', aperture: 'f/4', shutter: '1/60s', iso: '1250' }
  },
  {
    id: 'p25-11',
    url: '/images/kaixuanmen1.jpg',
    title: 'Arc de Triomphe',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '50mm', aperture: 'f/8', shutter: '1/500s', iso: '100' }
  },
  {
    id: 'p25-12',
    url: '/images/kaixuanmen2.jpg',
    title: 'Triumph',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '70mm', aperture: 'f/5.6', shutter: '1/320s', iso: '100' }
  },
  {
    id: 'p25-13',
    url: '/images/aifeier1.jpg',
    title: 'Iron Lady',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/2.8', shutter: '1/50s', iso: '1600' }
  },
  {
    id: 'p25-14',
    url: '/images/aifeier2.jpg',
    title: 'Midnight Paris',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '35mm', aperture: 'f/1.8', shutter: '1/40s', iso: '3200' }
  },
  {
    id: 'p25-15',
    url: '/images/aifeier3.jpg',
    title: 'Eiffel View',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '50mm', aperture: 'f/4', shutter: '1/1000s', iso: '100' }
  },
  {
    id: 'p25-16',
    url: '/images/Institut%20de%20France.jpg',
    title: 'Institut de France',
    location: 'Paris, France',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '70-200mm', aperture: 'f/4', shutter: '1/500s', iso: '200' }
  },

  // --- 2024: ICELAND & AURORA ---
  {
    id: 'p24-1',
    url: '/images/Iceland1.jpg',
    title: 'Black Beach',
    location: 'Vik, Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '16-35mm', aperture: 'f/8', shutter: '1/200s', iso: '200' }
  },
  {
    id: 'p24-2',
    url: '/images/Iceland2.jpg',
    title: 'Skógafoss',
    location: 'Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '24-70mm', aperture: 'f/11', shutter: '1/4s', iso: '100' }
  },
  {
    id: 'p24-3',
    url: '/images/Iceland3.jpg',
    title: 'Cliffs',
    location: 'Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '24mm', aperture: 'f/5.6', shutter: '1/100s', iso: '400' }
  },
  {
    id: 'p24-4',
    url: '/images/Iceland4.jpg',
    title: 'Highlands',
    location: 'Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '70-200mm', aperture: 'f/4', shutter: '1/500s', iso: '200' }
  },
  {
    id: 'p24-5',
    url: '/images/Iceland5.jpg',
    title: 'Canyon',
    location: 'Fjaðrárgljúfur, Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '16-35mm', aperture: 'f/8', shutter: '1/60s', iso: '400' }
  },
  {
    id: 'p24-6',
    url: '/images/Iceland6.jpg',
    title: 'Glacier',
    location: 'Vatnajökull, Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '70-200mm', aperture: 'f/8', shutter: '1/1000s', iso: '100' }
  },
  {
    id: 'p24-7',
    url: '/images/Iceland7.jpg',
    title: 'Green Valley',
    location: 'Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/125s', iso: '200' }
  },
  {
    id: 'p24-8',
    url: '/images/Hallgr%C3%ADmskirkja%20Iceland.jpg',
    title: 'Hallgrímskirkja',
    location: 'Reykjavík, Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '24-70mm', aperture: 'f/8', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'p24-9',
    url: '/images/Kirkjufell%20Iceland.jpg',
    title: 'Kirkjufell',
    location: 'Grundarfjörður, Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '16-35mm', aperture: 'f/11', shutter: '1/2s', iso: '50' }
  },
  {
    id: 'p24-10',
    url: '/images/the%20Hellnar%20Red%20House%20Iceland.jpg',
    title: 'Hellnar Church',
    location: 'Snæfellsnes, Iceland',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '50mm', aperture: 'f/2.8', shutter: '1/800s', iso: '100' }
  },
  {
    id: 'p24-11',
    url: '/images/jiguang1.jpg',
    title: 'Aurora Borealis I',
    location: 'Nordic Region',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '14mm', aperture: 'f/1.8', shutter: '4s', iso: '3200' }
  },
  {
    id: 'p24-12',
    url: '/images/jiguang2.jpg',
    title: 'Aurora Borealis II',
    location: 'Nordic Region',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '14mm', aperture: 'f/1.8', shutter: '5s', iso: '3200' }
  },
  {
    id: 'p24-13',
    url: '/images/jiguang3.jpg',
    title: 'Aurora Village',
    location: 'Nordic Region',
    category: 'international',
    period: '2024',
    exif: { camera: 'SONY A7R5', lens: '20mm', aperture: 'f/1.8', shutter: '3.2s', iso: '2500' }
  },

  // --- 2023: SWITZERLAND / NORWAY / SWEDEN ---
  {
    id: 'p23-1',
    url: '/images/Bern,%20Switzerland.jpg',
    title: 'Old City',
    location: 'Bern, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '23mm', aperture: 'f/5.6', shutter: '1/200s', iso: '160' }
  },
  {
    id: 'p23-2',
    url: '/images/Interlaken%20Switzerland.jpg',
    title: 'Interlaken Paraglide',
    location: 'Interlaken, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '18-55mm', aperture: 'f/8', shutter: '1/500s', iso: '200' }
  },
  {
    id: 'p23-3',
    url: '/images/Lucerne,%20Switzerland.jpg',
    title: 'Lion Monument',
    location: 'Lucerne, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '35mm', aperture: 'f/2', shutter: '1/125s', iso: '400' }
  },
  {
    id: 'p23-4',
    url: '/images/Matterhorn1.jpg',
    title: 'Matterhorn Peak',
    location: 'Zermatt, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '50-140mm', aperture: 'f/8', shutter: '1/1000s', iso: '200' }
  },
  {
    id: 'p23-5',
    url: '/images/Matterhorn2.jpg',
    title: 'Zermatt Village',
    location: 'Zermatt, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '23mm', aperture: 'f/5.6', shutter: '1/250s', iso: '160' }
  },
  {
    id: 'p23-6',
    url: '/images/Grindelwald1%20Switzerland.jpg',
    title: 'Grindelwald Valley',
    location: 'Grindelwald, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '16mm', aperture: 'f/8', shutter: '1/60s', iso: '100' }
  },
  {
    id: 'p23-7',
    url: '/images/Grindelwald2%20Switzerland.jpg',
    title: 'Alpine Night',
    location: 'Grindelwald, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '23mm', aperture: 'f/1.4', shutter: '1/30s', iso: '1600' }
  },
  {
    id: 'p23-8',
    url: '/images/Spiez,%20Switzerland.jpg',
    title: 'Lake Thun',
    location: 'Spiez, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '35mm', aperture: 'f/4', shutter: '1/500s', iso: '160' }
  },
  {
    id: 'p23-9',
    url: '/images/Spiez,%20Switzerland2.jpg',
    title: 'Castle View',
    location: 'Spiez, Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '23mm', aperture: 'f/5.6', shutter: '1/125s', iso: '200' }
  },
  {
    id: 'p23-10',
    url: '/images/Forest%20Switzerland.jpg',
    title: 'Mist Forest',
    location: 'Switzerland',
    category: 'international',
    period: '2023',
    exif: { camera: 'Fujifilm XT5', lens: '50mm', aperture: 'f/2.8', shutter: '1/100s', iso: '400' }
  },
  {
    id: 'p23-11',
    url: '/images/Fjellheisen1%20Norway.jpg',
    title: 'Tromsø View',
    location: 'Tromsø, Norway',
    category: 'international',
    period: '2023',
    exif: { camera: 'Sony A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '8s', iso: '100' }
  },
  {
    id: 'p23-12',
    url: '/images/Fjellheisen2%20Norway.jpg',
    title: 'Arctic Blue',
    location: 'Tromsø, Norway',
    category: 'international',
    period: '2023',
    exif: { camera: 'Sony A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/60s', iso: '800' }
  },
  {
    id: 'p23-13',
    url: '/images/Fjellheisen3%20Norway.jpg',
    title: 'Fjord Light',
    location: 'Norway',
    category: 'international',
    period: '2023',
    exif: { camera: 'Sony A7M4', lens: '70-200mm', aperture: 'f/8', shutter: '1/200s', iso: '100' }
  },
  {
    id: 'p23-14',
    url: '/images/Stockholm,%20Sweden1.jpg',
    title: 'Subway Art I',
    location: 'Stockholm, Sweden',
    category: 'international',
    period: '2023',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/60s', iso: '500' }
  },
  {
    id: 'p23-15',
    url: '/images/Stockholm,%20Sweden2.jpg',
    title: 'Subway Art II',
    location: 'Stockholm, Sweden',
    category: 'international',
    period: '2023',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/50s', iso: '640' }
  }
];