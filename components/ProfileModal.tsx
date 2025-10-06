import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Globe, MessageCircle, Github } from 'lucide-react';

interface ProfileModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const ProfileModal: React.FC<ProfileModalProps> = ({ isOpen, onClose }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center p-4"
        >
          <motion.div
            initial={{ scale: 0.7, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.7, opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 25 }}
            onClick={(e) => e.stopPropagation()}
            className="relative bg-white text-slate-800 rounded-2xl w-full max-w-lg overflow-hidden shadow-2xl p-6 sm:p-8"
          >
            <button onClick={onClose} className="absolute top-4 right-4 text-slate-400 hover:text-slate-700 transition-colors">
              <X size={24} />
            </button>

            <div className="flex flex-col sm:flex-row items-center gap-6 mb-6">
              <img src="https://rdsusanto.my.id/src/images/profile/user.svg" alt="Rudy Susanto" className="w-24 h-24 rounded-full border-4 border-indigo-200 shadow-md" />
              <div className="text-center sm:text-left">
                <h2 className="text-2xl font-bold text-indigo-600">Rudy Susanto, S.Pd.</h2>
                <p className="text-slate-600">Guru IPA dan Informatika di SMPN 2 Tungkal Jaya</p>
              </div>
            </div>

            <div className="space-y-4 text-sm sm:text-base text-slate-700">
                <p>Presentasi ini membahas <strong className="font-semibold">Peran Kecerdasan Artifisial dalam Komunikasi</strong>, menyoroti bagaimana AI mengubah cara kita berinteraksi, kelebihan serta kekurangannya, dan kapan sentuhan manusia tetap tak tergantikan.</p>
                <div className="text-center bg-indigo-50 p-3 rounded-lg border border-indigo-200">
                    <p className="font-semibold">Disajikan dalam kegiatan PEER TEACHING OJT 3 KKA MUBA</p>
                    <p className="text-slate-500">11 Oktober 2025 di SMPN 6 Sekayu</p>
                </div>
            </div>

            <div className="mt-8 pt-6 border-t border-slate-200 flex flex-wrap justify-center gap-4 text-sm">
                <a href="https://rdsusanto.my.id" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-indigo-600 font-medium transition-colors">
                    <Globe size={16} /> Website
                </a>
                 <a href="https://wa.me/6282127618761" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-green-600 font-medium transition-colors">
                    <MessageCircle size={16} /> WhatsApp
                </a>
                 <a href="https://github.com/ruddypappers35" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-slate-600 hover:text-slate-900 font-medium transition-colors">
                    <Github size={16} /> GitHub
                </a>
            </div>

          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default ProfileModal;
