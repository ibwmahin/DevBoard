import React from 'react';
import { 
  Home, 
  CheckSquare, 
  Code2, 
  Github, 
  Clock, 
  Settings, 
  Zap 
} from 'lucide-react';

const Sidebar: React.FC = () => {
  return (
    <aside className="hidden md:flex flex-col w-16 bg-slate-800 dark:bg-slate-800 border-r border-slate-700 dark:border-slate-700">
      <div className="flex justify-center py-4">
        <Zap size={26} className="text-purple-500" />
      </div>
      
      <nav className="flex-1 mt-6">
        <ul className="space-y-6">
          <SidebarItem icon={<Home size={20} />} active />
          <SidebarItem icon={<CheckSquare size={20} />} />
          <SidebarItem icon={<Code2 size={20} />} />
          <SidebarItem icon={<Github size={20} />} />
          <SidebarItem icon={<Clock size={20} />} />
        </ul>
      </nav>
      
      <div className="py-6">
        <SidebarItem icon={<Settings size={20} />} />
      </div>
    </aside>
  );
};

interface SidebarItemProps {
  icon: React.ReactNode;
  active?: boolean;
}

const SidebarItem: React.FC<SidebarItemProps> = ({ icon, active }) => {
  return (
    <li className="flex justify-center">
      <button 
        className={`p-2 rounded-md transition-all duration-200 ease-in-out
          ${active 
            ? 'bg-purple-500 bg-opacity-20 text-purple-500' 
            : 'text-slate-400 hover:text-purple-500 hover:bg-slate-700 hover:bg-opacity-30'
          }`}
      >
        {icon}
      </button>
    </li>
  );
};

export default Sidebar;