import React from 'react';
import TasksCard from './TasksCard';
import SnippetsCard from './SnippetsCard';
import GitHubCard from './GitHubCard';
import FocusTimerCard from './FocusTimerCard';
import DailyTipCard from './DailyTipCard';
import { useWindowSize } from '../../hooks/useWindowSize';

const Dashboard: React.FC = () => {
  const { width } = useWindowSize();
  const isMobile = width < 768;

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {/* First Column (full width on mobile, 2 cols on tablet/desktop) */}
      <div className={`${isMobile ? 'col-span-1' : 'col-span-2'} space-y-6`}>
        <TasksCard />
        {isMobile && <FocusTimerCard />}
        <SnippetsCard />
      </div>
      
      {/* Second Column (hidden on mobile, shown on tablet/desktop) */}
      <div className={`${isMobile ? 'hidden' : 'block'} space-y-6 md:col-span-1 lg:col-span-2`}>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <FocusTimerCard />
          <DailyTipCard />
        </div>
        <GitHubCard />
      </div>
    </div>
  );
};

export default Dashboard;