import React from 'react';
import { Clock } from 'lucide-react';

interface TimerProps {
  timeLeft: number;
}

const Timer: React.FC<TimerProps> = ({ timeLeft }) => {
  // Ensure timeLeft doesn't go below zero for display
  const safeTimeLeft = Math.max(0, timeLeft);

  const minutes = Math.floor(safeTimeLeft / 60);
  const seconds = safeTimeLeft % 60;

  const formattedMinutes = String(minutes).padStart(2, '0');
  const formattedSeconds = String(seconds).padStart(2, '0');

  return (
    <div
      className="absolute top-3 right-3 z-20 flex items-center gap-2 px-3 py-1.5 rounded-full backdrop-blur-sm text-sm font-semibold shadow-lg bg-blue-500/90 text-white"
      role="timer"
      aria-live="assertive"
    >
      <Clock size={16} />
      <span>
        {formattedMinutes}:{formattedSeconds}
      </span>
    </div>
  );
};

export default Timer;
