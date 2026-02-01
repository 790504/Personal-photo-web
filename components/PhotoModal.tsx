import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Aperture, Clock, Gauge, Disc, Camera } from 'lucide-react';
import { Photo, Language } from '../types';

interface PhotoModalProps {
  photo: Photo | null;
  onClose: () => void;
  theme: 'dark' | 'light';
  language: Language;
}

const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose, theme, language }) => {
  const isDark = theme === 'dark';
  const isZh = language === 'zh';

  // Styling Variables
  const overlayBg = isDark ? 'bg-black/90' : 'bg-white/60';
  const panelBg = isDark ? 'bg-white/10 border-white/20 text-white' : 'bg-white/70 border-white/40 text-black shadow-xl';
  const titleColor = isDark ? 'text-white' : 'text-black';
  const subTextColor = isDark ? 'text-white/60' : 'text-black/60';
  const headerLine = isDark ? 'border-white/10 text-white/40' : 'border-black/5 text-black/40';
  const pillsBg = isDark ? 'bg-black/20 border-white/5' : 'bg-white/50 border-black/5';
  const iconColor = isDark ? 'text-white/90' : 'text-black/80';
  const pillTextColor = isDark ? 'text-white/70' : 'text-black/70';
  const separator = isDark ? 'bg-white/10' : 'bg-black/10';
  const detailIconBg = isDark ? 'bg-white/5 border-white/10' : 'bg-black/5 border-black/5';
  const detailLabel = isDark ? 'text-white/40' : 'text-black/40';
  const detailValue = isDark ? 'text-white/90' : 'text-black/90';
  const closeBtnStyles = isDark 
    ? 'bg-white/10 border-white/20 text-white/80 hover:bg-white/20 hover:text-white' 
    : 'bg-black/5 border-black/5 text-black/60 hover:bg-black/10 hover:text-black';

  // Translations
  const t = {
    en: {
      details: 'Shot Details',
      camera: 'Camera',
      lens: 'Lens',
    },
    zh: {
      details: '拍摄参数',
      camera: '相机',
      lens: '镜头',
    }
  };
  const content = t[language];

  return (
    <AnimatePresence>
      {photo && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[60] flex items-center justify-center p-4 md:p-8"
        >
          {/* Backdrop */}
          <div 
            className={`absolute inset-0 backdrop-blur-2xl transition-colors duration-500 ${overlayBg}`} 
            onClick={onClose}
          />

          <motion.div
            layoutId={`photo-${photo.id}`}
            className="relative w-full h-full max-w-7xl max-h-[90vh] flex flex-col md:flex-row gap-8 items-center justify-center z-10 pointer-events-none"
          >
            {/* Image Container */}
            <motion.div 
              className="relative w-full h-full flex-1 flex items-center justify-center pointer-events-auto"
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
            >
              <div className="relative inline-block max-w-full max-h-full">
                <img
                  src={photo.url}
                  alt={photo.title}
                  className="max-w-full max-h-full object-contain rounded-sm shadow-2xl"
                />
                 
                 {/* "Magazine Style" Watermark Overlay */}
                 {/* Placed inside the image container to overlay strictly on the image */}
                 <div className="absolute bottom-0 left-0 p-6 md:p-8 w-full bg-gradient-to-t from-black/50 to-transparent rounded-b-sm">
                    <h3 className={`text-white leading-none drop-shadow-lg ${isZh ? 'font-zh text-4xl' : 'font-en-hand text-5xl md:text-6xl'}`}>
                        {photo.title}
                    </h3>
                    <p className="font-sans text-xs md:text-sm font-bold tracking-[0.2em] text-white/90 uppercase mt-2 md:mt-3 drop-shadow-md">
                        {photo.location}
                    </p>
                </div>
              </div>
            </motion.div>

            {/* Info Panel */}
            <motion.div
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ delay: 0.2, type: "spring", stiffness: 200 }}
              className="w-full md:w-80 pointer-events-auto shrink-0 hidden md:block" // Hidden on mobile to focus on image
            >
              <div className={`backdrop-blur-xl border rounded-2xl p-6 transition-colors duration-500 ${panelBg}`}>
                <div className={`border-b pb-2 mb-6 ${headerLine} ${isZh ? 'font-zh text-2xl tracking-[0.15em]' : 'font-en-hand text-3xl tracking-wide normal-case capitalize'}`}>
                    {content.details}
                </div>
                  
                {/* Primary EXIF Pills */}
                <div className={`flex justify-between items-center rounded-xl p-4 border backdrop-blur-md mb-6 ${pillsBg}`}>
                    <div className="flex flex-col items-center gap-1">
                    <Aperture size={18} className={iconColor} strokeWidth={1.5} />
                    <span className={`text-xs font-mono ${pillTextColor}`}>{photo.exif.aperture}</span>
                    </div>
                    <div className={`w-[1px] h-8 ${separator}`} />
                    <div className="flex flex-col items-center gap-1">
                    <Clock size={18} className={iconColor} strokeWidth={1.5} />
                    <span className={`text-xs font-mono ${pillTextColor}`}>{photo.exif.shutter}</span>
                    </div>
                    <div className={`w-[1px] h-8 ${separator}`} />
                    <div className="flex flex-col items-center gap-1">
                    <Gauge size={18} className={iconColor} strokeWidth={1.5} />
                    <span className={`text-xs font-mono ${pillTextColor}`}>{photo.exif.iso}</span>
                    </div>
                </div>

                <div className="space-y-4">
                    <div className="flex items-center gap-3 text-sm">
                        <div className={`p-2 rounded-full border ${detailIconBg}`}>
                        <Camera size={14} className={isDark ? 'text-white/70' : 'text-black/60'} />
                        </div>
                        <div className="flex flex-col">
                        <span className={`uppercase tracking-wider ${detailLabel} ${isZh ? 'font-zh text-lg tracking-widest' : 'font-en-hand text-xl tracking-wide normal-case capitalize'}`}>{content.camera}</span>
                        <span className={`font-medium ${detailValue}`}>{photo.exif.camera}</span>
                        </div>
                    </div>
                    
                    <div className="flex items-center gap-3 text-sm">
                        <div className={`p-2 rounded-full border ${detailIconBg}`}>
                        <Disc size={14} className={isDark ? 'text-white/70' : 'text-black/60'} />
                        </div>
                        <div className="flex flex-col overflow-hidden">
                        <span className={`uppercase tracking-wider ${detailLabel} ${isZh ? 'font-zh text-lg tracking-widest' : 'font-en-hand text-xl tracking-wide normal-case capitalize'}`}>{content.lens}</span>
                        <span className={`font-medium truncate ${detailValue}`}>{photo.exif.lens}</span>
                        </div>
                    </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <button
            onClick={onClose}
            className={`absolute top-6 right-6 z-50 p-3 rounded-full backdrop-blur-md border transition-all duration-300 ${closeBtnStyles}`}
          >
            <X size={24} />
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PhotoModal;