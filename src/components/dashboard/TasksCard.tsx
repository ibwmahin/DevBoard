import React, { useState } from 'react';
import { MoreHorizontal, PlusCircle, Trash2 } from 'lucide-react';
import { Task } from '../../types';
import { useStore } from '../../store/store';
import AddTaskModal from '../modals/AddTaskModal';

const TasksCard: React.FC = () => {
  const { tasks, addTask, updateTask, deleteTask, searchQuery } = useStore();
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredTasks = tasks.filter(task => 
    task.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    task.description?.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleAddTask = (taskData: { title: string; description?: string; priority: 'low' | 'medium' | 'high' }) => {
    addTask({ ...taskData, status: 'todo' });
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Today's Tasks</h2>
          <div className="flex space-x-2">
            <button 
              onClick={() => setShowAddModal(true)}
              className="p-1 text-slate-500 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors"
            >
              <PlusCircle size={18} />
            </button>
            <button className="p-1 text-slate-500 dark:text-slate-400 hover:text-purple-500 dark:hover:text-purple-400 transition-colors">
              <MoreHorizontal size={18} />
            </button>
          </div>
        </div>
      </div>
      
      <div className="overflow-x-auto">
        <div className="p-6 grid grid-cols-1 lg:grid-cols-3 gap-4">
          <TaskColumn 
            title="To Do" 
            tasks={filteredTasks.filter(task => task.status === 'todo')}
            onStatusChange={updateTask}
            onDelete={deleteTask}
          />
          <TaskColumn 
            title="In Progress" 
            tasks={filteredTasks.filter(task => task.status === 'in-progress')}
            onStatusChange={updateTask}
            onDelete={deleteTask}
          />
          <TaskColumn 
            title="Completed" 
            tasks={filteredTasks.filter(task => task.status === 'completed')}
            onStatusChange={updateTask}
            onDelete={deleteTask}
          />
        </div>
      </div>

      {showAddModal && (
        <AddTaskModal
          onClose={() => setShowAddModal(false)}
          onAdd={handleAddTask}
        />
      )}
    </div>
  );
};

interface TaskColumnProps {
  title: string;
  tasks: Task[];
  onStatusChange: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskColumn: React.FC<TaskColumnProps> = ({ title, tasks, onStatusChange, onDelete }) => {
  const statusColor = {
    'To Do': 'bg-orange-500',
    'In Progress': 'bg-blue-500',
    'Completed': 'bg-green-500'
  };
  
  return (
    <div className="flex flex-col h-full">
      <div className="flex items-center mb-3">
        <div className={`h-2 w-2 rounded-full mr-2 ${statusColor[title as keyof typeof statusColor]}`}></div>
        <h3 className="font-medium text-slate-700 dark:text-slate-300">{title}</h3>
        <span className="ml-2 text-xs text-slate-500 dark:text-slate-400">{tasks.length}</span>
      </div>
      
      <div className="flex-1 space-y-2">
        {tasks.map(task => (
          <TaskItem 
            key={task.id} 
            task={task} 
            onStatusChange={onStatusChange}
            onDelete={onDelete}
          />
        ))}
      </div>
    </div>
  );
};

interface TaskItemProps {
  task: Task;
  onStatusChange: (task: Task) => void;
  onDelete: (id: number) => void;
}

const TaskItem: React.FC<TaskItemProps> = ({ task, onStatusChange, onDelete }) => {
  const priorityColor = {
    high: 'bg-red-500',
    medium: 'bg-yellow-500',
    low: 'bg-blue-500'
  };
  
  const handleClick = () => {
    const nextStatus = {
      'todo': 'in-progress',
      'in-progress': 'completed',
      'completed': 'todo'
    } as const;
    onStatusChange({ ...task, status: nextStatus[task.status] });
  };

  return (
    <div 
      className="p-3 bg-slate-50 dark:bg-slate-700 rounded-md hover:shadow-md transition-all group"
    >
      <div className="flex items-start justify-between mb-2">
        <div className="flex items-start flex-1" onClick={handleClick} style={{ cursor: 'pointer' }}>
          <div className={`h-2 w-2 rounded-full mt-1.5 ${priorityColor[task.priority]}`}></div>
          <h4 className="ml-2 text-sm font-medium text-slate-900 dark:text-white">{task.title}</h4>
        </div>
        <button
          onClick={() => onDelete(task.id)}
          className="opacity-0 group-hover:opacity-100 p-1 text-slate-500 hover:text-red-500 transition-all"
        >
          <Trash2 size={14} />
        </button>
      </div>
      {task.description && (
        <p className="text-xs text-slate-500 dark:text-slate-400 ml-4">{task.description}</p>
      )}
    </div>
  );
};

export default TasksCard;