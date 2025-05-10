export interface Task {
  id: number;
  title: string;
  description?: string;
  status: 'todo' | 'in-progress' | 'completed';
  priority: 'low' | 'medium' | 'high';
}

export interface CodeSnippet {
  id: number;
  title: string;
  code: string;
  language: string;
  tags: string[];
}

export interface Tip {
  id: number;
  content: string;
  source: string;
}