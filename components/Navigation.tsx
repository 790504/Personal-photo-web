import React from 'react';
import { ArrowUpToLine, Sun, Moon } from 'lucide-react';
import { Language } from '../types';

interface NavigationProps {
  theme: 'dark' | 'light';
  toggleTheme: () => void;
  language: Language;
  toggleLanguage: () => void;
}

const Navigation: React.FC<NavigationProps> = ({ theme, toggleTheme, language, toggleLanguage }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const t = {
    en: {
      name: 'Zhunming Ma',
      home: 'Home',
      contact: 'Contact'
    },
    zh: {
      name: '马准名',
      home: '首页',
      contact: '联系'
    }
  };

  const content = t[language];
  const isZh = language === 'zh';

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 px-6 py-6 flex justify-between items-center mix-blend-difference text-white">
      {/* Logo / Scroll Top Trigger */}
      <div 
        onClick={scrollToTop}
        className="flex items-center gap-3 cursor-pointer group"
      >
        <ArrowUpToLine size={24} className="text-white/80 group-hover:-translate-y-1 transition-transform duration-300" />
        <span className={`font-medium uppercase text-white/90 transition-all duration-500 ${isZh ? 'font-zh text-4xl tracking-[0.25em] ml-1' : 'font-en-hand text-4xl tracking-normal normal-case capitalize ml-1'}`}>
          {content.name}
        </span>
      </div>

      {/* Menu Links */}
      <div className="flex items-center gap-6 md:gap-8">
        <button 
          onClick={scrollToTop}
          className={`text-white/60 hover:text-white transition-colors duration-300 uppercase hidden sm:block ${isZh ? 'font-zh text-2xl tracking-[0.25em]' : 'font-en-hand text-3xl tracking-wide normal-case capitalize'}`}
        >
          {content.home}
        </button>
        <a 
          href="mailto:zhunmingm@gmail.com"
          className={`text-white/60 hover:text-white transition-colors duration-300 uppercase hidden sm:block ${isZh ? 'font-zh text-2xl tracking-[0.25em]' : 'font-en-hand text-3xl tracking-wide normal-case capitalize'}`}
        >
          {content.contact}
        </a>
        
        <div className="w-px h-6 bg-white/20 hidden sm:block" />

        <button 
          onClick={toggleLanguage}
          className={`text-white/60 hover:text-white transition-colors duration-300 uppercase ${isZh ? 'font-zh text-2xl tracking-[0.25em]' : 'font-en-hand text-3xl tracking-wide'}`}
        >
          {language === 'en' ? 'CN' : 'EN'}
        </button>

        <button 
          onClick={toggleTheme}
          className="text-white/80 hover:text-white transition-transform hover:scale-110 active:scale-95 ml-1"
        >
          {theme === 'dark' ? <Sun size={22} /> : <Moon size={22} />}
        </button>
      </div>
    </nav>
  );
};

export default Navigation;