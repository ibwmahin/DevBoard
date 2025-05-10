import { useEffect } from 'react';
import MainLayout from './components/layout/MainLayout';
import Dashboard from './components/dashboard/Dashboard';
import { useStore } from './store/store';

function App() {
  const { darkMode } = useStore();

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={darkMode ? 'dark' : ''}>
      <MainLayout>
        <Dashboard />
      </MainLayout>
    </div>
  );
}

export default App;