import Sidebar from './components/Sidebar';
import './App.css';
import { useEffect } from 'react';

const App = () => {
  useEffect(() => {
    document.title = 'Imani Pelton';
  }, []);

  return (
    <Sidebar />
  );
};

export default App;
