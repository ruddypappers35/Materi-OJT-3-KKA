import React, { useState } from 'react';
import { Dice5, PlayCircle, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';

const VideoModal: React.FC<{ videoUrl: string; onClose: () => void }> = ({ videoUrl, onClose }) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center p-4"
    >
      <motion.div
        initial={{ scale: 0.5, y: -50 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.5, y: -50 }}
        onClick={(e) => e.stopPropagation()}
        className="relative bg-slate-900 rounded-2xl w-full max-w-md aspect-[9/16] overflow-hidden shadow-2xl"
      >
        <button onClick={onClose} className="absolute top-2 right-2 bg-black/50 text-white rounded-full p-1 z-10 hover:bg-black">
          <X size={24} />
        </button>
        <iframe
          src={`${videoUrl}?autoplay=1`}
          className="w-full h-full"
          allow="autoplay; encrypted-media"
          allowFullScreen
          title="TikTok Video"
        ></iframe>
      </motion.div>
    </motion.div>
  );
};


const ThumbDanceChallenge: React.FC = () => {
    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    const videos = [
        {
            id: 1,
            url: "https://www.tiktok.com/embed/v2/7551459347805621511",
            thumbnailText: "Tantangan Jempol #1"
        },
        {
            id: 2,
            url: "https://www.tiktok.com/embed/v2/7555777441856326920",
            thumbnailText: "Tantangan Jempol #2"
        }
    ];

    return (
        <div className="h-full w-full flex flex-col items-center justify-center text-center text-slate-800">
            <Dice5 size={80} className="text-green-500 mb-6" />
            <h2 className="text-3xl md:text-4xl font-bold text-slate-800 mb-2">Ice Breaking</h2>
            <h3 className="text-2xl font-semibold mb-6 text-indigo-600">Thumb Dance Challenge</h3>

            <p className="text-slate-600 text-base sm:text-lg mb-8 max-w-xl">Ayo kita gerakkan jempol! Klik video di bawah untuk melihat tantangannya dan ikuti gerakannya.</p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full max-w-lg">
                {videos.map(video => (
                    <button
                        key={video.id}
                        onClick={() => setActiveVideo(video.url)}
                        className="group bg-slate-100 p-6 rounded-2xl shadow-md border border-slate-200/80
                                   flex flex-col items-center justify-center gap-4
                                   transition-all duration-300 hover:shadow-xl hover:-translate-y-2 hover:border-indigo-400"
                    >
                        <PlayCircle size={60} className="text-indigo-500 group-hover:text-red-500 transition-colors" />
                        <span className="font-semibold text-lg text-slate-700">{video.thumbnailText}</span>
                    </button>
                ))}
            </div>

            <AnimatePresence>
                {activeVideo && <VideoModal videoUrl={activeVideo} onClose={() => setActiveVideo(null)} />}
            </AnimatePresence>
        </div>
    );
};

export default ThumbDanceChallenge;
