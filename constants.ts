
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
  // --- 2025: GLOBAL (Abu Dhabi, Europe) ---
  {
    id: 'abudhabi-1',
    url: '/images/Abu%20Dhabi1.jpg',
    title: 'Sheikh Zayed Mosque',
    location: 'Abu Dhabi, UAE',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '16-35mm', aperture: 'f/8', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'abudhabi-2',
    url: '/images/Abu%20Dhabi2.jpg',
    title: 'White Domes',
    location: 'Abu Dhabi, UAE',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/500s', iso: '100' }
  },
  {
    id: 'abudhabi-3',
    url: '/images/Abu%20Dhabi3.jpg',
    title: 'Islamic Architecture',
    location: 'Abu Dhabi, UAE',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '50mm', aperture: 'f/4', shutter: '1/1000s', iso: '100' }
  },
  {
    id: 'abudhabi-4',
    url: '/images/Abu%20Dhabi4.jpg',
    title: 'Reflections',
    location: 'Abu Dhabi, UAE',
    category: 'international',
    period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24mm', aperture: 'f/8', shutter: '1/125s', iso: '200' }
  },
  // France
  {
    id: 'fr-1', url: '/images/aifeier1.jpg', title: 'Iron Lady', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/2.8', shutter: '1/50s', iso: '1600' }
  },
  {
    id: 'fr-2', url: '/images/aifeier2.jpg', title: 'Midnight Paris', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '35mm', aperture: 'f/1.8', shutter: '1/40s', iso: '3200' }
  },
  {
    id: 'fr-3', url: '/images/aifeier3.jpg', title: 'Eiffel View', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '50mm', aperture: 'f/4', shutter: '1/1000s', iso: '100' }
  },
  {
    id: 'fr-4', url: '/images/aosai.jpg', title: 'Musée d\'Orsay', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/125s', iso: '100' }
  },
  {
    id: 'fr-5', url: '/images/aosai2.jpg', title: 'The Clock', location: 'Musée d\'Orsay', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '50mm', aperture: 'f/2.8', shutter: '1/200s', iso: '400' }
  },
  {
    id: 'fr-6', url: '/images/Institut%20de%20France.jpg', title: 'Institut de France', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '70-200mm', aperture: 'f/4', shutter: '1/500s', iso: '200' }
  },
  {
    id: 'fr-7', url: '/images/kaixuanmen1.jpg', title: 'Arc de Triomphe', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '50mm', aperture: 'f/8', shutter: '1/500s', iso: '100' }
  },
  {
    id: 'fr-8', url: '/images/kaixuanmen2.jpg', title: 'Triumph', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '70mm', aperture: 'f/5.6', shutter: '1/320s', iso: '100' }
  },
  {
    id: 'fr-9', url: '/images/lufugong.jpg', title: 'Louvre Courtyard', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '16-35mm', aperture: 'f/8', shutter: '1/60s', iso: '100' }
  },
  {
    id: 'fr-10', url: '/images/lufugong2.jpg', title: 'The Pyramid', location: 'Louvre, Paris', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24mm', aperture: 'f/4', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'fr-11', url: '/images/lufugong3.jpg', title: 'Louvre Interior', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '35mm', aperture: 'f/2.0', shutter: '1/100s', iso: '800' }
  },
  {
    id: 'fr-12', url: '/images/manila.jpg', title: 'Death in Manila', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '35mm', aperture: 'f/1.4', shutter: '1/60s', iso: '400' }
  },
  {
    id: 'fr-13', url: '/images/mengna.jpg', title: 'Mona Lisa', location: 'Louvre, Paris', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '55mm', aperture: 'f/2.8', shutter: '1/100s', iso: '800' }
  },
  {
    id: 'fr-14', url: '/images/shenglinvshen.jpg', title: 'Winged Victory', location: 'Louvre, Paris', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '85mm', aperture: 'f/2.8', shutter: '1/160s', iso: '640' }
  },
  {
    id: 'fr-15', url: '/images/shneglibaitang.jpg', title: 'Sainte-Chapelle', location: 'Paris, France', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '16mm', aperture: 'f/4', shutter: '1/60s', iso: '1250' }
  },
  {
    id: 'fr-16', url: '/images/shuilian.jpg', title: 'Les Nymphéas', location: 'Orangerie, Paris', category: 'international', period: '2025',
    exif: { camera: 'SONY A7M4', lens: '24mm', aperture: 'f/4', shutter: '1/80s', iso: '200' }
  },
  // Switzerland / Norway / Sweden
  {
    id: 'sw-1', url: '/images/Bern%2C%20Switzerland.jpg', title: 'Old City', location: 'Bern, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '23mm', aperture: 'f/5.6', shutter: '1/200s', iso: '160' }
  },
  {
    id: 'no-1', url: '/images/Fjellheisen1%20Norway.jpg', title: 'Tromsø View', location: 'Tromsø, Norway', category: 'international', period: '2025',
    exif: { camera: 'Sony A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '8s', iso: '100' }
  },
  {
    id: 'no-2', url: '/images/Fjellheisen2%20Norway.jpg', title: 'Arctic Blue', location: 'Tromsø, Norway', category: 'international', period: '2025',
    exif: { camera: 'Sony A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/60s', iso: '800' }
  },
  {
    id: 'no-3', url: '/images/Fjellheisen3%20Norway.jpg', title: 'Fjord Light', location: 'Norway', category: 'international', period: '2025',
    exif: { camera: 'Sony A7M4', lens: '70-200mm', aperture: 'f/8', shutter: '1/200s', iso: '100' }
  },
  {
    id: 'sw-2', url: '/images/Forest%20Switzerland.jpg', title: 'Mist Forest', location: 'Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '50mm', aperture: 'f/2.8', shutter: '1/100s', iso: '400' }
  },
  {
    id: 'sw-3', url: '/images/Grindelwald1%20Switzerland.jpg', title: 'Grindelwald Valley', location: 'Grindelwald, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '16mm', aperture: 'f/8', shutter: '1/60s', iso: '100' }
  },
  {
    id: 'sw-4', url: '/images/Grindelwald2%20Switzerland.jpg', title: 'Alpine Night', location: 'Grindelwald, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '23mm', aperture: 'f/1.4', shutter: '1/30s', iso: '1600' }
  },
  {
    id: 'sw-5', url: '/images/Interlaken%20Switzerland.jpg', title: 'Interlaken Paraglide', location: 'Interlaken, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '18-55mm', aperture: 'f/8', shutter: '1/500s', iso: '200' }
  },
  {
    id: 'sw-6', url: '/images/Lucerne%2C%20Switzerland.jpg', title: 'Lion Monument', location: 'Lucerne, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '35mm', aperture: 'f/2', shutter: '1/125s', iso: '400' }
  },
  {
    id: 'sw-7', url: '/images/Matterhorn1.jpg', title: 'Matterhorn Peak', location: 'Zermatt, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '50-140mm', aperture: 'f/8', shutter: '1/1000s', iso: '200' }
  },
  {
    id: 'sw-8', url: '/images/Matterhorn2.jpg', title: 'Zermatt Village', location: 'Zermatt, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '23mm', aperture: 'f/5.6', shutter: '1/250s', iso: '160' }
  },
  {
    id: 'sw-9', url: '/images/Spiez%2C%20Switzerland.jpg', title: 'Lake Thun', location: 'Spiez, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '35mm', aperture: 'f/4', shutter: '1/500s', iso: '160' }
  },
  {
    id: 'sw-10', url: '/images/Spiez%2C%20Switzerland2.jpg', title: 'Castle View', location: 'Spiez, Switzerland', category: 'international', period: '2025',
    exif: { camera: 'Fujifilm XT5', lens: '23mm', aperture: 'f/5.6', shutter: '1/125s', iso: '200' }
  },
  {
    id: 'se-1', url: '/images/Stockholm%2C%20Sweden1.jpg', title: 'Subway Art I', location: 'Stockholm, Sweden', category: 'international', period: '2025',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/60s', iso: '500' }
  },
  {
    id: 'se-2', url: '/images/Stockholm%2C%20Sweden2.jpg', title: 'Subway Art II', location: 'Stockholm, Sweden', category: 'international', period: '2025',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/50s', iso: '640' }
  },


  // --- 2024: DUBLIN, WASHINGTON, ICELAND ---
  {
    id: 'dub-1', url: '/images/Dublin%20Ireland1.jpg', title: 'Dublin Streets I', location: 'Dublin, Ireland', category: 'international', period: '2024',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/4', shutter: '1/250s', iso: '200' }
  },
  {
    id: 'dub-2', url: '/images/Dublin%20Ireland2.jpg', title: 'Dublin Streets II', location: 'Dublin, Ireland', category: 'international', period: '2024',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/125s', iso: '400' }
  },
  {
    id: 'dub-3', url: '/images/Dublin%20Ireland3.jpg', title: 'Liffey River', location: 'Dublin, Ireland', category: 'international', period: '2024',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/5.6', shutter: '1/200s', iso: '100' }
  },
  {
    id: 'dub-4', url: '/images/Dublin%20Ireland4.jpg', title: 'Irish Pub', location: 'Dublin, Ireland', category: 'international', period: '2024',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/60s', iso: '800' }
  },
  {
    id: 'stp-1', url: '/images/St.%20Patrick%27s%20Day%20Dublin1.jpg', title: 'St. Patrick\'s Parade', location: 'Dublin, Ireland', category: 'international', period: '2024',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/4', shutter: '1/500s', iso: '200' }
  },
  {
    id: 'stp-2', url: '/images/St.%20Patrick%27s%20Day%20Dublin2.jpg', title: 'Green Celebration', location: 'Dublin, Ireland', category: 'international', period: '2024',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/250s', iso: '200' }
  },
  {
    id: 'stp-3', url: '/images/St.%20Patrick%27s%20Day%20Dublin3.jpg', title: 'Dublin Spirit', location: 'Dublin, Ireland', category: 'international', period: '2024',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/100s', iso: '400' }
  },
  {
    id: 'dc-1', url: '/images/Firework%20Washington%2C%20D.C1.jpg', title: 'Capital Fireworks I', location: 'Washington, D.C.', category: 'international', period: '2024',
    exif: { camera: 'Sony A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '2s', iso: '100' }
  },
  {
    id: 'dc-2', url: '/images/Firework%20Washington%2C%20D.C2.jpg', title: 'Capital Fireworks II', location: 'Washington, D.C.', category: 'international', period: '2024',
    exif: { camera: 'Sony A7M4', lens: '24-70mm', aperture: 'f/11', shutter: '3s', iso: '100' }
  },
  {
    id: 'dc-3', url: '/images/Firework%20Washington%2C%20D.C3.jpg', title: 'Capital Fireworks III', location: 'Washington, D.C.', category: 'international', period: '2024',
    exif: { camera: 'Sony A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '2.5s', iso: '100' }
  },
  {
    id: 'dc-4', url: '/images/Firework%20Washington%2C%20D.C4.jpg', title: 'Monument Glow', location: 'Washington, D.C.', category: 'international', period: '2024',
    exif: { camera: 'Sony A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1s', iso: '400' }
  },
  // Iceland
  {
    id: 'ice-1', url: '/images/Iceland1.jpg', title: 'Black Sand', location: 'Vik, Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '16-35mm', aperture: 'f/8', shutter: '1/200s', iso: '200' }
  },
  {
    id: 'ice-2', url: '/images/Iceland2.jpg', title: 'Skógafoss', location: 'Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '24-70mm', aperture: 'f/11', shutter: '1/4s', iso: '100' }
  },
  {
    id: 'ice-3', url: '/images/Iceland3.jpg', title: 'Coastal Cliffs', location: 'Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '24mm', aperture: 'f/5.6', shutter: '1/100s', iso: '400' }
  },
  {
    id: 'ice-4', url: '/images/Iceland4.jpg', title: 'Highland Road', location: 'Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '70-200mm', aperture: 'f/4', shutter: '1/500s', iso: '200' }
  },
  {
    id: 'ice-5', url: '/images/Iceland5.jpg', title: 'Fjaðrárgljúfur', location: 'Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '16-35mm', aperture: 'f/8', shutter: '1/60s', iso: '400' }
  },
  {
    id: 'ice-6', url: '/images/Iceland6.jpg', title: 'Glacier Tongue', location: 'Vatnajökull, Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '70-200mm', aperture: 'f/8', shutter: '1/1000s', iso: '100' }
  },
  {
    id: 'ice-7', url: '/images/Iceland7.jpg', title: 'Crater Lake', location: 'Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/125s', iso: '200' }
  },
  {
    id: 'ice-8', url: '/images/Hallgr%C3%ADmskirkja%20Iceland.jpg', title: 'Hallgrímskirkja', location: 'Reykjavík, Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '24-70mm', aperture: 'f/8', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'ice-9', url: '/images/Kirkjufell%20Iceland.jpg', title: 'Kirkjufell', location: 'Grundarfjörður, Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '16-35mm', aperture: 'f/11', shutter: '1/2s', iso: '50' }
  },
  {
    id: 'ice-10', url: '/images/the%20Hellnar%20Red%20House%20Iceland.jpg', title: 'Hellnar Church', location: 'Snæfellsnes, Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '50mm', aperture: 'f/2.8', shutter: '1/800s', iso: '100' }
  },
  {
    id: 'aurora-1', url: '/images/jiguang1.jpg', title: 'Aurora I', location: 'Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '14mm', aperture: 'f/1.8', shutter: '4s', iso: '3200' }
  },
  {
    id: 'aurora-2', url: '/images/jiguang2.jpg', title: 'Aurora II', location: 'Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '14mm', aperture: 'f/1.8', shutter: '5s', iso: '3200' }
  },
  {
    id: 'aurora-3', url: '/images/jiguang3.jpg', title: 'Aurora III', location: 'Iceland', category: 'international', period: '2024',
    exif: { camera: 'SONY A7R5', lens: '20mm', aperture: 'f/1.8', shutter: '3.2s', iso: '2500' }
  },

  // --- 2023: CHINA (Domestic) ---
  {
    id: 'cn-1', url: '/images/72%20Qilou%20zhangjiajie%20Hunan%20China.jpg', title: '72 Qilou', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/4', shutter: '1/60s', iso: '800' }
  },
  {
    id: 'cn-2', url: '/images/changjiangdaqiao%20Wuhan%20China.jpg', title: 'Yangtze Bridge', location: 'Wuhan, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '1/125s', iso: '100' }
  },
  {
    id: 'cn-3', url: '/images/changjiangdaqiao%20Wuhan%20China2.jpg', title: 'Bridge Night', location: 'Wuhan, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/2.8', shutter: '1/30s', iso: '1600' }
  },
  {
    id: 'cn-4', url: '/images/chaoshan%20guangdong%20China1.jpg', title: 'Chaoshan Vibe I', location: 'Guangdong, China', category: 'domestic', period: '2023',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/60s', iso: '400' }
  },
  {
    id: 'cn-5', url: '/images/chaoshan%20guangdong%20China2.jpg', title: 'Chaoshan Vibe II', location: 'Guangdong, China', category: 'domestic', period: '2023',
    exif: { camera: 'Ricoh GR3', lens: '18.3mm', aperture: 'f/2.8', shutter: '1/60s', iso: '500' }
  },
  {
    id: 'cn-6', url: '/images/Cifangzi%20Tianjin.jpg', title: 'Porcelain House', location: 'Tianjin, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '16-35mm', aperture: 'f/5.6', shutter: '1/200s', iso: '200' }
  },
  {
    id: 'cn-7', url: '/images/guqinhuai%20Nanjing%20China.jpg', title: 'Qinhuai River', location: 'Nanjing, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/4', shutter: '1/30s', iso: '1200' }
  },
  {
    id: 'cn-8', url: '/images/huanghelou%20Wuhan%20China.jpg', title: 'Yellow Crane Tower', location: 'Wuhan, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'cn-9', url: '/images/huanghelou%20Wuhan%20China2.jpg', title: 'Yellow Crane Detail', location: 'Wuhan, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '70-200mm', aperture: 'f/5.6', shutter: '1/500s', iso: '100' }
  },
  {
    id: 'cn-10', url: '/images/Huashan%20Shanxi%20China.jpg', title: 'Mount Hua', location: 'Shaanxi, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '16-35mm', aperture: 'f/8', shutter: '1/200s', iso: '200' }
  },
  {
    id: 'cn-11', url: '/images/Jimingsi%20Nanjing%20China.jpg', title: 'Jiming Temple', location: 'Nanjing, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/100s', iso: '100' }
  },
  {
    id: 'cn-12', url: '/images/Saint%20Sophia%20Cathedral%2C%20Harbin%20China1.jpg', title: 'Saint Sophia I', location: 'Harbin, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/4', shutter: '1/200s', iso: '100' }
  },
  {
    id: 'cn-13', url: '/images/Saint%20Sophia%20Cathedral%2C%20Harbin%20China2.jpg', title: 'Saint Sophia II', location: 'Harbin, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/4', shutter: '1/160s', iso: '100' }
  },
  {
    id: 'cn-14', url: '/images/Saint%20Sophia%20Cathedral%2C%20Harbin%20China3.jpg', title: 'Saint Sophia Night', location: 'Harbin, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/2.8', shutter: '1/60s', iso: '800' }
  },
  {
    id: 'cn-15', url: '/images/Shijizhong%20Tianjin%20China.jpg', title: 'Century Clock', location: 'Tianjin, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'cn-16', url: '/images/Tianmenshan%20Zhangjiajie%20China.jpg', title: 'Tianmen Mountain', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '1/200s', iso: '100' }
  },
  {
    id: 'cn-17', url: '/images/Tianmenshan%20Zhangjiajie%20China1.jpg', title: 'Tianmen Stairs', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '1/100s', iso: '200' }
  },
  {
    id: 'cn-18', url: '/images/Tianmenshan%20Zhangjiajie%20China2.jpg', title: 'Heaven\'s Gate', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '1/250s', iso: '100' }
  },
  {
    id: 'cn-19', url: '/images/Tianmenshan%20Zhangjiajie%20China3.jpg', title: 'Tianmen Cable', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/200s', iso: '100' }
  },
  {
    id: 'cn-20', url: '/images/Xiamen%20China1.jpg', title: 'Xiamen Coast', location: 'Xiamen, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '1/500s', iso: '100' }
  },
  {
    id: 'cn-21', url: '/images/zhangjiajie%20Hunan%20China1.jpg', title: 'Avatar Hallelujah I', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '1/125s', iso: '100' }
  },
  {
    id: 'cn-22', url: '/images/zhangjiajie%20Hunan%20China2.jpg', title: 'Avatar Hallelujah II', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '70-200mm', aperture: 'f/5.6', shutter: '1/200s', iso: '100' }
  },
  {
    id: 'cn-23', url: '/images/zhangjiajie%20Hunan%20China3.jpg', title: 'Stone Forest', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/8', shutter: '1/100s', iso: '100' }
  },
  {
    id: 'cn-24', url: '/images/zhangjiajie%20Hunan%20China4.jpg', title: 'Zhangjiajie Mist', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '24-70mm', aperture: 'f/5.6', shutter: '1/160s', iso: '200' }
  },
  {
    id: 'cn-25', url: '/images/zhangjiajie%20Hunan%20China5.jpg', title: 'Zhangjiajie View', location: 'Zhangjiajie, China', category: 'domestic', period: '2023',
    exif: { camera: 'SONY A7M4', lens: '16-35mm', aperture: 'f/8', shutter: '1/100s', iso: '100' }
  }
];
