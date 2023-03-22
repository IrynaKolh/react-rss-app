import HomePage from './pages/homePage';
import NotFound from './pages/notFound';
import React from 'react';
import { Route, Routes } from 'react-router-dom';
import './App.css';
import About from 'components/about';
import Navigation from 'components/navigation';
import Form from 'components/form';

function App() {
  return (
    <>
      <header>
        <Navigation />
      </header>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/form" element={<Form />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
