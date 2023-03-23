import HomePage from './pages/HomePage';
import NotFound from './pages/NotFoundPage';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from './components/About';
import Navigation from './components/Navigation';
import FormPage from './pages/FormPage';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<FormPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
