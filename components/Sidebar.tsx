import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, UserCircle } from 'lucide-react';
import type { Slide } from '../types';

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
  slides: Slide[];
  currentSlide: number;
  onNavigate: (index: number) => void;
  onOpenProfile: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose, slides, currentSlide, onNavigate, onOpenProfile }) => {
  
  const handleNavigation = (index: number) => {
      onNavigate(index);
      onClose();
  }
  
  const handleOpenProfile = () => {
    onOpenProfile();
    onClose();
  }

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/50 z-30"
          />
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            className="fixed top-0 left-0 h-full w-72 md:w-80 bg-slate-800 text-white shadow-2xl z-40 flex flex-col"
          >
            <div className="p-4 flex justify-between items-center border-b border-slate-700 flex-shrink-0">
              <h2 className="text-xl font-semibold">Daftar Slide</h2>
              <button onClick={onClose} className="p-1 rounded-full hover:bg-slate-700">
                <X size={24} />
              </button>
            </div>
            
            <nav className="flex-grow overflow-y-auto">
              <ul>
                {slides.map((slide, index) => (
                  <li key={slide.id}>
                    <button
                      onClick={() => handleNavigation(index)}
                      className={`w-full text-left px-4 py-3 text-sm flex items-center gap-3 transition-colors ${
                        currentSlide === index ? 'bg-indigo-500 font-semibold' : 'hover:bg-slate-700'
                      }`}
                    >
                      <span className={`flex-shrink-0 w-6 h-6 rounded-md flex items-center justify-center text-xs font-bold ${currentSlide === index ? 'bg-white text-indigo-600' : 'bg-slate-600 text-slate-200'}`}>
                        {index + 1}
                      </span>
                      <span className="truncate">{slide.title}</span>
                    </button>
                  </li>
                ))}
              </ul>
            </nav>

            <div className="p-2 border-t border-slate-700 flex-shrink-0">
                 <button
                    onClick={handleOpenProfile}
                    className="w-full flex items-center gap-3 px-3 py-3 text-left rounded-md hover:bg-slate-700 transition-colors"
                 >
                    <UserCircle size={24} className="text-indigo-400"/>
                    <span className="font-semibold">Profil Saya</span>
                 </button>
            </div>

          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default Sidebar;
