import React, { useState, useEffect } from 'react';
import { Play, Pause, RotateCcw, Settings } from 'lucide-react';

const FocusTimerCard: React.FC = () => {
  const [isRunning, setIsRunning] = useState(false);
  const [timeLeft, setTimeLeft] = useState(25 * 60); // 25 minutes in seconds
  const [timerType, setTimerType] = useState<'focus' | 'break'>('focus');
  
  useEffect(() => {
    let interval: number | undefined;
    
    if (isRunning && timeLeft > 0) {
      interval = window.setInterval(() => {
        setTimeLeft(prevTime => prevTime - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      // Timer complete
      setIsRunning(false);
      if (timerType === 'focus') {
        // Switch to break
        setTimerType('break');
        setTimeLeft(5 * 60); // 5 minute break
      } else {
        // Switch to focus
        setTimerType('focus');
        setTimeLeft(25 * 60); // 25 minute focus
      }
    }
    
    return () => clearInterval(interval);
  }, [isRunning, timeLeft, timerType]);
  
  const formatTime = (seconds: number): string => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };
  
  const handleStartPause = () => {
    setIsRunning(!isRunning);
  };
  
  const handleReset = () => {
    setIsRunning(false);
    setTimeLeft(timerType === 'focus' ? 25 * 60 : 5 * 60);
  };
  
  const progressPercent = timerType === 'focus' 
    ? ((25 * 60 - timeLeft) / (25 * 60)) * 100
    : ((5 * 60 - timeLeft) / (5 * 60)) * 100;
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Focus Timer</h2>
          <button className="p-1 text-slate-500 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
            <Settings size={16} />
          </button>
        </div>
      </div>
      
      <div className="p-6 flex flex-col items-center">
        <div className="relative w-32 h-32 mb-4">
          <svg className="w-full h-full" viewBox="0 0 100 100">
            {/* Background circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={timerType === 'focus' ? '#cbd5e1' : '#94a3b8'}
              strokeWidth="6"
              className="dark:opacity-20"
            />
            {/* Progress circle */}
            <circle
              cx="50"
              cy="50"
              r="45"
              fill="none"
              stroke={timerType === 'focus' ? '#8b5cf6' : '#3b82f6'}
              strokeWidth="6"
              strokeDasharray="283"
              strokeDashoffset={283 - (283 * progressPercent) / 100}
              strokeLinecap="round"
              transform="rotate(-90 50 50)"
            />
          </svg>
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <div className="text-2xl font-bold text-slate-900 dark:text-white">
                {formatTime(timeLeft)}
              </div>
              <div className="text-xs text-slate-500 dark:text-slate-400 uppercase tracking-wider mt-1">
                {timerType === 'focus' ? 'Focus' : 'Break'}
              </div>
            </div>
          </div>
        </div>
        
        <div className="flex space-x-4">
          <button
            onClick={handleStartPause}
            className="p-2 bg-purple-500 text-white rounded-full hover:bg-purple-600 transition-colors"
          >
            {isRunning ? <Pause size={20} /> : <Play size={20} />}
          </button>
          <button
            onClick={handleReset}
            className="p-2 bg-slate-200 dark:bg-slate-700 text-slate-600 dark:text-slate-300 rounded-full hover:bg-slate-300 dark:hover:bg-slate-600 transition-colors"
          >
            <RotateCcw size={20} />
          </button>
        </div>
        
        <div className="mt-4 text-sm text-slate-500 dark:text-slate-400">
          {isRunning 
            ? timerType === 'focus' 
              ? 'Stay focused and productive!' 
              : 'Take a short break, you deserve it!'
            : 'Start a 25-minute focused work session'
          }
        </div>
      </div>
    </div>
  );
};

export default FocusTimerCard;