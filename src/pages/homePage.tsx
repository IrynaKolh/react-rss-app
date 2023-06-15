import Search from '../components/search';
import React from 'react';
import Cards from 'components/cards';
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
