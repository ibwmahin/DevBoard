import { create } from 'zustand';
import { Task, CodeSnippet, Tip } from '../types';
import { tasks as initialTasks, codeSnippets as initialSnippets, tips as initialTips } from '../data/mockData';

interface AppState {
  tasks: Task[];
  codeSnippets: CodeSnippet[];
  tips: Tip[];
  searchQuery: string;
  darkMode: boolean;
  addTask: (task: Omit<Task, 'id'>) => void;
  updateTask: (task: Task) => void;
  deleteTask: (id: number) => void;
  addCodeSnippet: (snippet: Omit<CodeSnippet, 'id'>) => void;
  deleteCodeSnippet: (id: number) => void;
  setSearchQuery: (query: string) => void;
  toggleDarkMode: () => void;
}

export const useStore = create<AppState>((set) => ({
  tasks: initialTasks,
  codeSnippets: initialSnippets,
  tips: initialTips,
  searchQuery: '',
  darkMode: true,

  addTask: (task) => set((state) => ({
    tasks: [...state.tasks, { ...task, id: Math.max(...state.tasks.map(t => t.id)) + 1 }]
  })),

  updateTask: (updatedTask) => set((state) => ({
    tasks: state.tasks.map(task => task.id === updatedTask.id ? updatedTask : task)
  })),

  deleteTask: (id) => set((state) => ({
    tasks: state.tasks.filter(task => task.id !== id)
  })),

  addCodeSnippet: (snippet) => set((state) => ({
    codeSnippets: [...state.codeSnippets, { 
      ...snippet, 
      id: Math.max(...state.codeSnippets.map(s => s.id)) + 1 
    }]
  })),

  deleteCodeSnippet: (id) => set((state) => ({
    codeSnippets: state.codeSnippets.filter(snippet => snippet.id !== id)
  })),

  setSearchQuery: (query) => set({ searchQuery: query }),

  toggleDarkMode: () => set((state) => ({ darkMode: !state.darkMode }))
}));