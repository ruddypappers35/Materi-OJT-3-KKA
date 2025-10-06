import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles } from 'lucide-react';

interface FloatingWord {
  id: number;
  text: string;
  x: number;
  y: number;
  size: number;
  color: string;
  drift: number;
}

const THANKS_WORDS = [
  'Thank You', 'Gracias', 'Merci', 'Danke', 'ありがとう', '谢谢', '감사합니다',
  'Grazie', 'Спасибо', 'Obrigado', 'شكرًا', 'धन्यवाद', 'Asante', 'Toda', 'Mahalo',
];

const COLORS = [
  'text-pink-400', 'text-cyan-400', 'text-green-400', 'text-yellow-300',
  'text-purple-400', 'text-orange-400', 'text-teal-300', 'text-rose-400',
  'text-sky-400', 'text-lime-400', 'text-fuchsia-400',
];

const ThankYouSlide: React.FC = () => {
  const [words, setWords] = useState<FloatingWord[]>([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setWords(prev => {
        const updatedWords = prev.length > 40 ? prev.slice(1) : prev;
        
        const newWord: FloatingWord = {
          id: Date.now() + Math.random(),
          text: THANKS_WORDS[Math.floor(Math.random() * THANKS_WORDS.length)],
          x: Math.random() * 100,
          y: Math.random() * 100,
          size: Math.random() * 1.25 + 0.75,
          color: COLORS[Math.floor(Math.random() * COLORS.length)],
          drift: (Math.random() - 0.5) * 50,
        };
        return [...updatedWords, newWord];
      });
    }, 600);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-full w-full flex flex-col items-center justify-center text-center bg-gradient-to-br from-slate-900 to-gray-800 rounded-lg overflow-hidden relative select-none">
      <AnimatePresence>
        {words.map((word) => (
          <motion.div
            key={word.id}
            initial={{ opacity: 0, scale: 0, y: 20 }}
            animate={{ 
              opacity: [0.1, 0.6, 0.1], 
              scale: 1, 
              y: -20,
              x: word.drift,
            }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: Math.random() * 15 + 10, ease: "linear", repeat: Infinity, repeatType: "mirror" }}
            style={{
              position: 'absolute',
              left: `${word.x}%`,
              top: `${word.y}%`,
              fontSize: `${word.size}rem`,
              transform: 'translate(-50%, -50%)'
            }}
            className={`font-bold whitespace-nowrap ${word.color}`}
          >
            {word.text}
          </motion.div>
        ))}
      </AnimatePresence>

      <div className="relative z-10 flex flex-col items-center justify-center p-6 bg-black/40 backdrop-blur-md rounded-2xl shadow-2xl">
        <motion.h1
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2, type: 'spring', stiffness: 100 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-extrabold text-white mb-4 tracking-tighter"
          style={{ textShadow: '0 0 20px rgba(255,255,255,0.6), 0 0 40px rgba(255,193,7,0.5)' }}
        >
          Terima Kasih
        </motion.h1>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.5, type: 'spring', stiffness: 100 }}
          className="flex items-center gap-3 text-lg sm:text-xl text-yellow-300"
        >
          <Sparkles className="text-yellow-300 animate-pulse" />
          <span className="font-medium">Semoga pembelajaran ini bermanfaat!</span>
          <Sparkles className="text-yellow-300 animate-pulse" />
        </motion.div>
      </div>
    </div>
  );
};

export default ThankYouSlide;
