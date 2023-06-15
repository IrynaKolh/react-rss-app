import Search from '../components/Search';
import React from 'react';
import Cards from '../components/Cards';
import './../pages/styles/homePage.css';

const HomePage = () => {
  return (
    <div className="home-page-container">
      <Search />
      <Cards />
    </div>
  );
};
export default HomePage;
