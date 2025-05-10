import React from 'react';
import { Github, ArrowUpRight } from 'lucide-react';

const GitHubCard: React.FC = () => {
  // Simulating contribution data
  const contributionData = [
    [0, 1, 3, 2, 4, 2, 1],
    [1, 0, 2, 3, 2, 1, 4],
    [2, 3, 4, 1, 2, 3, 0],
    [0, 1, 3, 4, 2, 1, 2],
    [2, 3, 1, 0, 2, 4, 3]
  ];
  
  const getColorClass = (value: number) => {
    switch (value) {
      case 0: return 'bg-slate-200 dark:bg-slate-700';
      case 1: return 'bg-purple-200 dark:bg-purple-900';
      case 2: return 'bg-purple-300 dark:bg-purple-800';
      case 3: return 'bg-purple-400 dark:bg-purple-700';
      case 4: return 'bg-purple-500 dark:bg-purple-600';
      default: return 'bg-slate-200 dark:bg-slate-700';
    }
  };
  
  const days = ['M', 'T', 'W', 'T', 'F', 'S', 'S'];
  
  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center">
          <div className="flex items-center">
            <Github size={18} className="mr-2 text-purple-500" />
            <h2 className="text-lg font-bold text-slate-900 dark:text-white">GitHub Activity</h2>
          </div>
          <a href="#" className="flex items-center text-xs text-purple-500 hover:text-purple-600 transition-colors">
            <span className="mr-1">View Full History</span>
            <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      
      <div className="p-6">
        <div className="flex flex-col space-y-8">
          <div className="space-y-2">
            <div className="flex justify-between items-center">
              <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Recent Contributions</h3>
              <div className="text-xs text-slate-500 dark:text-slate-400">Last 5 weeks</div>
            </div>
            
            <div className="grid grid-rows-5 grid-flow-col gap-1">
              {contributionData.map((week, weekIndex) => (
                <React.Fragment key={`week-${weekIndex}`}>
                  {week.map((day, dayIndex) => (
                    <div 
                      key={`day-${dayIndex}`}
                      className={`h-4 w-4 rounded-sm ${getColorClass(day)}`}
                      title={`${day} contributions`}
                    ></div>
                  ))}
                </React.Fragment>
              ))}
            </div>
            
            <div className="flex justify-between mt-1">
              {days.map((day, index) => (
                <span key={index} className="text-xs text-slate-500 dark:text-slate-400">{day}</span>
              ))}
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-medium text-slate-700 dark:text-slate-300">Recent Activity</h3>
            
            <div className="space-y-3">
              <ActivityItem 
                repo="devboard/frontend"
                event="Created pull request #42: 'Fix navigation responsiveness'"
                time="2 hours ago"
              />
              <ActivityItem 
                repo="devboard/api"
                event="Merged pull request #38: 'Add user settings endpoint'"
                time="Yesterday"
              />
              <ActivityItem 
                repo="open-source/react-toolkit"
                event="Opened issue #142: 'Improve documentation for hooks'"
                time="2 days ago"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface ActivityItemProps {
  repo: string;
  event: string;
  time: string;
}

const ActivityItem: React.FC<ActivityItemProps> = ({ repo, event, time }) => {
  return (
    <div className="flex items-start">
      <div className="h-2 w-2 mt-1.5 rounded-full bg-purple-500"></div>
      <div className="ml-3">
        <div className="text-xs font-medium text-slate-900 dark:text-white">{repo}</div>
        <div className="text-xs text-slate-600 dark:text-slate-400">{event}</div>
        <div className="text-xs text-slate-500 dark:text-slate-500">{time}</div>
      </div>
    </div>
  );
};

export default GitHubCard;