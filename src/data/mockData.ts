import { Task, CodeSnippet, Tip } from '../types';

export const tasks: Task[] = [
  {
    id: 1,
    title: 'Update user dashboard',
    description: 'Implement new metrics and charts',
    status: 'in-progress',
    priority: 'high'
  },
  {
    id: 2,
    title: 'Fix navigation bug',
    description: 'Mobile menu not closing on click',
    status: 'todo',
    priority: 'medium'
  },
  {
    id: 3,
    title: 'Add dark mode toggle',
    status: 'completed',
    priority: 'low'
  },
  {
    id: 4,
    title: 'Refactor authentication logic',
    description: 'Improve token handling and session management',
    status: 'todo',
    priority: 'high'
  },
  {
    id: 5,
    title: 'Create onboarding flow',
    status: 'in-progress',
    priority: 'medium'
  },
  {
    id: 6,
    title: 'Write API documentation',
    status: 'todo',
    priority: 'medium'
  },
  {
    id: 7,
    title: 'Update dependencies',
    description: 'Check for security vulnerabilities',
    status: 'completed',
    priority: 'low'
  }
];

export const codeSnippets: CodeSnippet[] = [
  {
    id: 1,
    title: 'React useState Hook',
    language: 'typescript',
    code: 'const [state, setState] = useState<string>(\'\');',
    tags: ['react', 'hooks', 'state']
  },
  {
    id: 2,
    title: 'Tailwind Flex Center',
    language: 'html',
    code: '<div className="flex items-center justify-center">...</div>',
    tags: ['tailwind', 'css', 'layout']
  },
  {
    id: 3,
    title: 'TypeScript Interface',
    language: 'typescript',
    code: 'interface User {\n  id: number;\n  name: string;\n  email: string;\n}',
    tags: ['typescript', 'types']
  }
];

export const tips: Tip[] = [
  {
    id: 1,
    content: "Always write tests for your code. Tests are not just a safety net, they're documentation for your code's behavior.",
    source: "Testing Best Practices"
  },
  {
    id: 2,
    content: "Commit early, commit often. Small, focused commits make it easier to track changes and roll back if needed.",
    source: "Git Workflow Tips"
  },
  {
    id: 3,
    content: "Don't repeat yourself (DRY), but know when to make exceptions. Sometimes duplication is better than the wrong abstraction.",
    source: "Clean Code Principles"
  },
  {
    id: 4,
    content: "Take breaks! The Pomodoro Technique suggests working for 25 minutes, then taking a 5-minute break to maintain productivity.",
    source: "Productivity Tips"
  },
  {
    id: 5,
    content: "Learn keyboard shortcuts for your editor. Even a few seconds saved per task adds up over time.",
    source: "Developer Efficiency"
  }
];