import React, { useState } from 'react';
import { Search, Bell, ChevronDown, Moon, Sun } from 'lucide-react';
import { useStore } from '../../store/store';

const Navbar: React.FC = () => {
  const [showProfileMenu, setShowProfileMenu] = useState(false);
  const { searchQuery, setSearchQuery, darkMode, toggleDarkMode } = useStore();
  
  return (
    <header className="h-16 px-4 md:px-6 bg-slate-100 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
      <div className="flex-1 md:flex-initial">
        <h1 className="text-xl font-bold text-slate-900 dark:text-white md:hidden">DevBoard</h1>
        <div className="hidden md:flex items-center relative">
          <Search className="absolute left-3 h-4 w-4 text-slate-400" />
          <input 
            type="text" 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search tasks, snippets..." 
            className="py-2 pl-10 pr-4 rounded-md bg-slate-200 dark:bg-slate-800 border-none text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 w-64 transition-all"
          />
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button 
          onClick={toggleDarkMode}
          className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors"
        >
          {darkMode ? <Sun size={20} /> : <Moon size={20} />}
        </button>
        
        <button className="p-2 rounded-full hover:bg-slate-200 dark:hover:bg-slate-800 text-slate-500 dark:text-slate-400 transition-colors">
          <Bell size={20} />
        </button>
        
        <div className="relative">
          <button 
            className="flex items-center space-x-2 focus:outline-none"
            onClick={() => setShowProfileMenu(!showProfileMenu)}
          >
            <div className="h-8 w-8 rounded-full bg-gradient-to-r from-purple-500 to-blue-500 overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=300" 
                alt="User avatar" 
                className="h-full w-full object-cover"
              />
            </div>
            <div className="hidden md:flex items-center text-sm">
              <span className="mr-1">Alex Johnson</span>
              <ChevronDown size={14} />
            </div>
          </button>
          
          {showProfileMenu && (
            <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white dark:bg-slate-800 ring-1 ring-black ring-opacity-5 z-50">
              <a href="#profile" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">Your Profile</a>
              <a href="#settings" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">Settings</a>
              <a href="#logout" className="block px-4 py-2 text-sm text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-700">Sign out</a>
            </div>
          )}
        </div>
      </div>
    </header>
  );
};

export default Navbar;