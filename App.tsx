import React, { useState, useEffect, useCallback } from 'react';
import { SLIDES } from './constants';
import Navigation from './components/Navigation';
import Timer from './components/Timer';
import HamburgerButton from './components/HamburgerButton';
import Sidebar from './components/Sidebar';
import ProfileModal from './components/ProfileModal';
import { AnimatePresence, motion } from 'framer-motion';

const slideVariants = {
  enter: (direction: number) => ({
    x: direction > 0 ? '100%' : '-100%',
    opacity: 0,
  }),
  center: {
    zIndex: 1,
    x: 0,
    opacity: 1,
  },
  exit: (direction: number) => ({
    zIndex: 0,
    x: direction < 0 ? '100%' : '-100%',
    opacity: 0,
  }),
};

const App: React.FC = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [direction, setDirection] = useState(0);
  const [timeLeft, setTimeLeft] = useState(20 * 60); // 20 minutes in seconds
  const [isSidebarOpen, setSidebarOpen] = useState(false);
  const [isProfileModalOpen, setProfileModalOpen] = useState(false);

  useEffect(() => {
    if (timeLeft <= 0) return;
    const timerId = setInterval(() => setTimeLeft(prevTime => prevTime - 1), 1000);
    return () => clearInterval(timerId);
  }, [timeLeft]);

  const navigateTo = (slideIndex: number) => {
    if (slideIndex < 0 || slideIndex >= SLIDES.length) return;
    const newDirection = slideIndex > currentSlide ? 1 : -1;
    setDirection(newDirection);
    setCurrentSlide(slideIndex);
  };

  const paginate = (pageDirection: number) => {
    navigateTo(currentSlide + pageDirection);
  };

  const handleKeyDown = useCallback((event: KeyboardEvent) => {
    if (['ArrowLeft', 'ArrowRight'].includes(event.key)) {
      event.preventDefault();
    }
    if (event.key === 'ArrowRight') {
      paginate(1);
    } else if (event.key === 'ArrowLeft') {
      paginate(-1);
    }
  }, [currentSlide]);

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);

  const CurrentSlideComponent = SLIDES[currentSlide].content;

  return (
    <main className="min-h-screen w-full bg-gradient-to-br from-indigo-100 via-purple-100 to-pink-100 flex items-center justify-center p-2 sm:p-4">
      <div className="w-full max-w-5xl bg-white rounded-2xl shadow-2xl overflow-hidden flex flex-col h-[95vh] md:h-auto md:aspect-[16/9] md:max-h-[90vh]">
        <div className="flex-grow relative overflow-hidden">
          <HamburgerButton onClick={() => setSidebarOpen(true)} />
          <Timer timeLeft={timeLeft} />
          <AnimatePresence initial={false} custom={direction}>
            <motion.div
              key={currentSlide}
              custom={direction}
              variants={slideVariants}
              initial="enter"
              animate="center"
              exit="exit"
              transition={{
                x: { type: 'spring', stiffness: 300, damping: 35 },
                opacity: { duration: 0.2 },
              }}
              className="absolute w-full h-full p-4 sm:p-8 md:p-10 lg:p-12 overflow-y-auto"
            >
              {CurrentSlideComponent}
            </motion.div>
          </AnimatePresence>
        </div>
        <Navigation
          currentSlide={currentSlide + 1}
          totalSlides={SLIDES.length}
          onPrev={() => paginate(-1)}
          onNext={() => paginate(1)}
        />
      </div>
      <Sidebar
        isOpen={isSidebarOpen}
        onClose={() => setSidebarOpen(false)}
        slides={SLIDES}
        currentSlide={currentSlide}
        onNavigate={navigateTo}
        onOpenProfile={() => setProfileModalOpen(true)}
      />
      <ProfileModal 
        isOpen={isProfileModalOpen}
        onClose={() => setProfileModalOpen(false)}
      />
    </main>
  );
};

export default App;
