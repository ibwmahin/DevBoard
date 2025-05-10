import React, { useState, useEffect } from 'react';
import { ArrowRight, Lightbulb } from 'lucide-react';
import { tips } from '../../data/mockData';

const DailyTipCard: React.FC = () => {
  const [currentTip, setCurrentTip] = useState(0);
  
  useEffect(() => {
    // Change tip every day - for demo we're just using a random one
    const randomTip = Math.floor(Math.random() * tips.length);
    setCurrentTip(randomTip);
  }, []);
  
  const handleNextTip = () => {
    setCurrentTip(prev => (prev + 1) % tips.length);
  };
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex items-center">
          <Lightbulb size={16} className="text-yellow-500 mr-2" />
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Daily Tip</h2>
        </div>
      </div>
      
      <div className="p-6">
        <blockquote className="italic text-slate-700 dark:text-slate-300 mb-3">
          "{tips[currentTip].content}"
        </blockquote>
        <div className="flex justify-between items-center">
          <div className="text-sm text-slate-500 dark:text-slate-400">
            {tips[currentTip].source}
          </div>
          <button 
            onClick={handleNextTip}
            className="text-purple-500 hover:text-purple-600 transition-colors"
          >
            <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </div>
  );
};

export default DailyTipCard;