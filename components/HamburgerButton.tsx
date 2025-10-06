import React from 'react';
import { Menu } from 'lucide-react';

interface HamburgerButtonProps {
    onClick: () => void;
}

const HamburgerButton: React.FC<HamburgerButtonProps> = ({ onClick }) => {
    return (
        <button 
            onClick={onClick}
            className="absolute top-3 left-3 z-20 p-2 rounded-full backdrop-blur-sm text-sm font-semibold shadow-lg bg-slate-800/60 text-white hover:bg-slate-800/90 transition-colors"
            aria-label="Buka menu slide"
        >
            <Menu size={20} />
        </button>
    )
}

export default HamburgerButton;
