import React, { useMemo } from 'react';
import { motion, Variants } from 'framer-motion';
import { Photo, Language } from '../types';
import { Info, Calendar } from 'lucide-react';

interface PhotoGridProps {
  photos: Photo[];
  title: string;
  onPhotoClick: (photo: Photo) => void;
  theme: 'dark' | 'light';
  language: Language;
}

const container: Variants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.1
    }
  }
};

const item: Variants = {
  hidden: { y: 30, opacity: 0 },
  show: { 
    y: 0, 
    opacity: 1, 
    transition: {
      type: "spring",
      damping: 20,
      stiffness: 100
    }
  }
};

const PhotoGrid: React.FC<PhotoGridProps> = ({ photos, title, onPhotoClick, theme, language }) => {
  // Group photos by period (Year)
  const groupedPhotos = useMemo(() => {
    const groups: Record<string, Photo[]> = {
      '2025': [],
      '2024': [],
      '2023': []
    };
    
    photos.forEach(photo => {
      if (groups[photo.period]) {
        groups[photo.period].push(photo);
      }
    });
    
    return groups;
  }, [photos]);

  const periods = ['2025', '2024', '2023'];

  const handlePeriodClick = (period: string) => {
    const element = document.getElementById(`section-${period}`);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const isDark = theme === 'dark';
  const isZh = language === 'zh';

  // Dynamic Theme Classes
  const textHeaderColor = isDark ? 'text-white/40' : 'text-black/40';
  const textCountColor = isDark ? 'text-white/30' : 'text-black/30';
  const timelineLineGradient = isDark ? 'from-white/20 via-white/5' : 'from-black/20 via-black/5';
  const timelineDotColor = isDark ? 'bg-white/60 shadow-[0_0_10px_rgba(255,255,255,0.5)]' : 'bg-black/40 shadow-[0_0_10px_rgba(0,0,0,0.1)]';
  const timelineYearColor = isDark ? 'text-white/50 group-hover:text-white' : 'text-black/40 group-hover:text-black';
  
  // Card styles
  const cardBg = isDark ? 'bg-white/5' : 'bg-black/5';

  // Translations
  const t = {
    en: {
      archive: 'Portfolio Archive',
      frames: 'FRAMES',
      comingSoon: 'Coming soon...'
    },
    zh: {
      archive: '作品归档',
      frames: '影像',
      comingSoon: '敬请期待...'
    }
  };
  const content = t[language];

  return (
    <div className="w-full px-4 md:px-12 lg:px-24 relative z-10">
      
      {/* Minimal Header */}
      <motion.div 
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, margin: "-100px" }}
        className={`flex items-end justify-between border-b pb-6 mb-16 transition-colors duration-700 ${isDark ? 'border-white/10' : 'border-black/10'}`}
      >
        <h2 className={`uppercase transition-colors duration-700 ${textHeaderColor} ${isZh ? 'font-zh text-3xl tracking-[0.25em]' : 'font-en-hand text-5xl tracking-normal normal-case capitalize'}`}>
          {content.archive}
        </h2>
        <span className={`font-mono transition-colors duration-700 ${textCountColor} ${isZh ? 'font-zh text-xl tracking-widest' : 'font-en-hand text-3xl'}`}>
          {photos.length} {content.frames}
        </span>
      </motion.div>

      <div className="flex flex-col md:flex-row gap-8 md:gap-16">
        
        {/* Left Timeline (Sticky) */}
        <div className="hidden md:block w-32 relative shrink-0">
          <div className="sticky top-32 h-[calc(100vh-16rem)] flex flex-col">
            <div className={`absolute left-0 top-0 bottom-0 w-px bg-gradient-to-b to-transparent transition-colors duration-700 ${timelineLineGradient}`} />
            
            {periods.map((period, index) => (
              <div 
                key={`timeline-${period}`} 
                onClick={() => handlePeriodClick(period)}
                className="relative pl-6 mb-12 cursor-pointer group"
              >
                 {/* Timeline Dot */}
                <div className={`absolute left-[-2.5px] top-2 w-[5px] h-[5px] rounded-full transition-all duration-300 group-hover:scale-150 ${timelineDotColor} ${isDark ? 'group-hover:bg-white' : 'group-hover:bg-black'}`} />
                
                <span className={`text-sm font-mono transition-colors duration-300 ${timelineYearColor}`}>
                  {period}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Right Content Grid (Masonry Layout) */}
        <div className="flex-1">
          {periods.map((period) => (
            <div 
              id={`section-${period}`} 
              key={period} 
              className="mb-24 relative scroll-mt-32"
            >
              {/* Mobile Period Header (Visible only on mobile) */}
              <div className={`md:hidden flex items-center gap-3 mb-8 border-l-2 pl-4 py-1 transition-colors duration-700 ${isDark ? 'text-white/50 border-white/20' : 'text-black/50 border-black/10'}`}>
                 <Calendar size={16} />
                 <span className="text-sm font-mono tracking-widest">{period}</span>
              </div>

              {groupedPhotos[period].length > 0 ? (
                <motion.div 
                  variants={container}
                  initial="hidden"
                  whileInView="show"
                  viewport={{ once: true, margin: "-100px" }}
                  className="columns-1 md:columns-2 xl:columns-3 gap-8 space-y-8"
                >
                  {groupedPhotos[period].map((photo) => (
                    <motion.div
                      key={photo.id}
                      variants={item}
                      layoutId={`photo-${photo.id}`}
                      className={`group relative w-full mb-8 break-inside-avoid cursor-pointer overflow-hidden rounded-sm transition-colors duration-700 ${cardBg}`}
                      onClick={() => onPhotoClick(photo)}
                    >
                      {/* Image Container */}
                      <div className="w-full relative overflow-hidden">
                        <motion.img
                          src={photo.url}
                          alt={photo.title}
                          loading="lazy"
                          className="w-full h-auto block transition-transform duration-[1.5s] ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:scale-105"
                        />
                        
                        {/* Hover Overlay - Slightly Darker for Text Contrast */}
                        <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                        
                        {/* Bottom Left "Magazine Style" Watermark - Only Visible on Hover */}
                        <div className="absolute bottom-5 left-5 z-20 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 ease-out">
                            {/* Title: Handwritten Script */}
                            <h3 className={`text-white leading-none drop-shadow-lg ${isZh ? 'font-zh text-3xl' : 'font-en-hand text-4xl'}`}>
                                {photo.title}
                            </h3>
                            {/* Location: Uppercase Sans Serif */}
                            <p className="font-sans text-[10px] md:text-xs font-bold tracking-[0.2em] text-white/80 uppercase mt-2 drop-shadow-md">
                                {photo.location}
                            </p>
                        </div>
                      </div>

                      {/* Info Icon */}
                      <div className="absolute top-4 right-4 translate-y-[-10px] opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-75 z-20">
                        <div className="w-8 h-8 rounded-full bg-black/20 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                          <Info size={16} strokeWidth={1.5} />
                        </div>
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              ) : (
                <div className={`h-20 flex items-center font-light italic transition-colors duration-700 ${isDark ? 'text-white/20' : 'text-black/20'} ${isZh ? 'font-zh text-2xl tracking-widest' : 'font-en-hand text-3xl'}`}>
                  {content.comingSoon}
                </div>
              )}
            </div>
          ))}
        </div>

      </div>
    </div>
  );
};

export default PhotoGrid;