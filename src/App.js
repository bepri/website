import Sidebar from './components/Sidebar';
import './App.css';
import { useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  useEffect(() => {
    document.title = 'Imani Pelton';
  }, []);

  return (
    <>
      <Routes>
        <Route path='/' element={<Sidebar />} />
      </Routes>
    </>
  );
};

export default App;
