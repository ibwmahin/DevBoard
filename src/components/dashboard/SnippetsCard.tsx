import React, { useState } from 'react';
import { Plus, Copy, Code, Trash2 } from 'lucide-react';
import { useStore } from '../../store/store';
import AddSnippetModal from '../modals/AddSnippetModal';

const SnippetsCard: React.FC = () => {
  const { codeSnippets, addCodeSnippet, deleteCodeSnippet, searchQuery } = useStore();
  const [showAddModal, setShowAddModal] = useState(false);

  const filteredSnippets = codeSnippets.filter(snippet =>
    snippet.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    snippet.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
    snippet.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  const handleCopy = async (code: string) => {
    try {
      await navigator.clipboard.writeText(code);
    } catch (err) {
      console.error('Failed to copy code:', err);
    }
  };

  return (
    <div className="bg-white dark:bg-slate-800 rounded-xl shadow-sm overflow-hidden">
      <div className="p-6 border-b border-slate-200 dark:border-slate-700">
        <div className="flex justify-between items-center">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Code Snippets</h2>
          <button 
            onClick={() => setShowAddModal(true)}
            className="p-1.5 bg-purple-500 text-white rounded-md hover:bg-purple-600 transition-colors flex items-center"
          >
            <Plus size={14} className="mr-1" />
            <span className="text-xs">New</span>
          </button>
        </div>
      </div>
      
      <div className="p-4">
        <div className="space-y-3">
          {filteredSnippets.map((snippet) => (
            <div 
              key={snippet.id} 
              className="p-3 bg-slate-50 dark:bg-slate-700 rounded-md hover:shadow-md transition-all group"
            >
              <div className="flex justify-between items-start mb-2">
                <div className="flex items-center">
                  <Code size={14} className="text-purple-500 mr-2" />
                  <h4 className="text-sm font-medium text-slate-900 dark:text-white">{snippet.title}</h4>
                </div>
                <div className="flex space-x-2">
                  <button 
                    onClick={() => handleCopy(snippet.code)}
                    className="p-1 text-slate-500 hover:text-purple-500 transition-colors" 
                    title="Copy to clipboard"
                  >
                    <Copy size={14} />
                  </button>
                  <button
                    onClick={() => deleteCodeSnippet(snippet.id)}
                    className="p-1 text-slate-500 hover:text-red-500 transition-colors"
                    title="Delete snippet"
                  >
                    <Trash2 size={14} />
                  </button>
                </div>
              </div>
              
              <div className="ml-6">
                <div className="text-xs bg-slate-200 dark:bg-slate-800 font-mono p-2 rounded whitespace-pre-wrap overflow-x-auto">
                  {snippet.code}
                </div>
                <div className="flex mt-2 space-x-2">
                  {snippet.tags.map((tag, idx) => (
                    <span 
                      key={idx} 
                      className="text-xs px-2 py-0.5 bg-slate-200 dark:bg-slate-600 rounded-full text-slate-700 dark:text-slate-300"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {showAddModal && (
        <AddSnippetModal
          onClose={() => setShowAddModal(false)}
          onAdd={(snippetData) => {
            addCodeSnippet(snippetData);
          }}
        />
      )}
    </div>
  );
};

export default SnippetsCard;