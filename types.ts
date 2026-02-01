export interface ExifData {
  camera: string;
  lens: string;
  aperture: string;
  shutter: string;
  iso: string;
}

export interface Photo {
  id: string;
  url: string;
  title: string;
  location: string;
  category: 'domestic' | 'international';
  period: '2025' | '2024' | '2023';
  exif: ExifData;
  width?: number;
  height?: number;
}

export type ViewState = 'split' | 'domestic' | 'international';

export type Language = 'en' | 'zh';