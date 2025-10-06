
import React from 'react';
import { ArrowLeft, ArrowRight } from 'lucide-react';

interface NavigationProps {
  currentSlide: number;
  totalSlides: number;
  onPrev: () => void;
  onNext: () => void;
}

const NavButton: React.FC<{ onClick: () => void; disabled: boolean; children: React.ReactNode }> = ({ onClick, disabled, children }) => (
  <button
    onClick={onClick}
    disabled={disabled}
    className="px-4 py-2 bg-indigo-500 text-white rounded-full flex items-center gap-2 transition-all duration-300
               hover:bg-indigo-600 disabled:bg-slate-300 disabled:cursor-not-allowed transform hover:scale-105"
  >
    {children}
  </button>
);

const Navigation: React.FC<NavigationProps> = ({ currentSlide, totalSlides, onPrev, onNext }) => {
  return (
    <div className="bg-slate-800 text-white p-4 flex justify-between items-center">
      <NavButton onClick={onPrev} disabled={currentSlide === 1}>
        <ArrowLeft size={16} />
        <span className="hidden md:inline">Sebelumnya</span>
      </NavButton>
      <div className="font-semibold tracking-wider">
        {currentSlide} / {totalSlides}
      </div>
      <NavButton onClick={onNext} disabled={currentSlide === totalSlides}>
        <span className="hidden md:inline">Selanjutnya</span>
        <ArrowRight size={16} />
      </NavButton>
    </div>
  );
};

export default Navigation;
