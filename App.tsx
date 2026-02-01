import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import LiquidBackground from './components/LiquidBackground';
import Navigation from './components/Navigation';
import PhotoGrid from './components/PhotoGrid';
import PhotoModal from './components/PhotoModal';
import { PHOTOS } from './constants';
import { Photo, Language } from './types';
import { ChevronDown } from 'lucide-react';

const App: React.FC = () => {
  const [selectedPhoto, setSelectedPhoto] = useState<Photo | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [theme, setTheme] = useState<'dark' | 'light'>('dark');
  const [language, setLanguage] = useState<Language>('en');

  const toggleTheme = () => {
    setTheme(prev => prev === 'dark' ? 'light' : 'dark');
  };

  const toggleLanguage = () => {
    setLanguage(prev => prev === 'en' ? 'zh' : 'en');
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Text color class based on theme for the hero section
  const heroTextClass = theme === 'dark' ? 'text-white mix-blend-overlay' : 'text-black/80';
  const heroSubTextClass = theme === 'dark' ? 'text-white/50' : 'text-black/50';

  // Translations
  const t = {
    en: {
      name: 'Zhunming Ma',
      role1: 'Traveler',
      role2: 'Photographer',
      enter: 'Enter Gallery',
      gridTitle: 'Selected Works'
    },
    zh: {
      name: '马准名',
      role1: '旅行者',
      role2: '摄影师',
      enter: '进入画廊',
      gridTitle: '精选作品'
    }
  };

  const content = t[language];
  const isZh = language === 'zh';

  return (
    <div className={`relative min-h-screen w-full transition-colors duration-700 ${theme === 'dark' ? 'bg-black text-white selection:bg-white/20' : 'bg-[#f2f2f7] text-black selection:bg-black/10'}`}>
      <LiquidBackground theme={theme} />
      <Navigation 
        theme={theme} 
        toggleTheme={toggleTheme} 
        language={language} 
        toggleLanguage={toggleLanguage} 
      />

      <main className="relative z-10">
        
        {/* Hero Section */}
        <div className="h-screen w-full flex flex-col items-center justify-center relative px-6">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
            className="text-center z-10"
          >
            <h1 className={`leading-normal font-light transition-colors duration-700 ${heroTextClass} ${isZh ? 'font-zh tracking-wide scale-110 text-[12vw] md:text-[8vw]' : 'font-en-hand text-[15vw] md:text-[10vw]'}`}>
              {content.name}
            </h1>
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 1 }}
              className={`mt-10 md:mt-14 flex flex-col md:flex-row items-center justify-center gap-4 font-light uppercase transition-colors duration-700 ${heroSubTextClass} ${isZh ? 'font-zh text-2xl tracking-[0.25em]' : 'font-en-hand text-3xl md:text-4xl tracking-wide normal-case capitalize'}`}
            >
              <span>{content.role1}</span>
              <span className={`hidden md:inline w-1 h-1 rounded-full ${theme === 'dark' ? 'bg-white/30' : 'bg-black/30'}`} />
              <span>{content.role2}</span>
            </motion.div>
          </motion.div>

          {/* Scroll Indicator */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: scrolled ? 0 : 1 }}
            transition={{ delay: 1, duration: 1 }}
            className={`absolute bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 transition-colors duration-700 ${theme === 'dark' ? 'text-white/30' : 'text-black/30'}`}
          >
            <span className={`uppercase ${isZh ? 'font-zh text-xl tracking-[0.15em]' : 'font-en-hand text-2xl tracking-widest normal-case capitalize'}`}>{content.enter}</span>
            <ChevronDown size={20} className="animate-bounce" />
          </motion.div>
        </div>

        {/* Gallery Section */}
        <div className="min-h-screen w-full pb-32">
          <PhotoGrid 
            photos={PHOTOS} 
            title={content.gridTitle}
            onPhotoClick={setSelectedPhoto}
            theme={theme}
            language={language}
          />
        </div>

      </main>

      <PhotoModal 
        photo={selectedPhoto} 
        onClose={() => setSelectedPhoto(null)}
        theme={theme}
        language={language}
      />
    </div>
  );
};

export default App;