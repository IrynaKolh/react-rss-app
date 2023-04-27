import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import './App.css';
import About from './components/About';
import FormPage from './pages/FormPage';
import Layout from './components/Layout';
import { Routes, Route } from 'react-router-dom';

const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
};

export default App;
