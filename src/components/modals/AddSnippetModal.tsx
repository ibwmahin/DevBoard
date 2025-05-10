import React, { useState } from 'react';
import { X } from 'lucide-react';

interface AddSnippetModalProps {
  onClose: () => void;
  onAdd: (snippet: { title: string; code: string; language: string; tags: string[] }) => void;
}

const AddSnippetModal: React.FC<AddSnippetModalProps> = ({ onClose, onAdd }) => {
  const [title, setTitle] = useState('');
  const [code, setCode] = useState('');
  const [language, setLanguage] = useState('javascript');
  const [tags, setTags] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAdd({
      title,
      code,
      language,
      tags: tags.split(',').map(tag => tag.trim()).filter(tag => tag !== '')
    });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white dark:bg-slate-800 rounded-xl p-6 w-full max-w-md">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-bold text-slate-900 dark:text-white">Add New Snippet</h2>
          <button onClick={onClose} className="text-slate-500 hover:text-slate-700 dark:text-slate-400 dark:hover:text-slate-300">
            <X size={20} />
          </button>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Code
            </label>
            <textarea
              value={code}
              onChange={(e) => setCode(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white font-mono"
              rows={5}
              required
            />
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Language
            </label>
            <select
              value={language}
              onChange={(e) => setLanguage(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
            >
              <option value="javascript">JavaScript</option>
              <option value="typescript">TypeScript</option>
              <option value="python">Python</option>
              <option value="html">HTML</option>
              <option value="css">CSS</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-slate-700 dark:text-slate-300 mb-1">
              Tags (comma-separated)
            </label>
            <input
              type="text"
              value={tags}
              onChange={(e) => setTags(e.target.value)}
              className="w-full px-3 py-2 border border-slate-300 dark:border-slate-600 rounded-md bg-white dark:bg-slate-700 text-slate-900 dark:text-white"
              placeholder="react, hooks, state"
            />
          </div>

          <div className="flex justify-end space-x-3">
            <button
              type="button"
              onClick={onClose}
              className="px-4 py-2 text-sm font-medium text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-700 rounded-md"
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 text-sm font-medium text-white bg-purple-500 hover:bg-purple-600 rounded-md"
            >
              Add Snippet
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddSnippetModal;