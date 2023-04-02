import Search from '../components/Search';
import React, { useEffect, useState } from 'react';
import Cards from '../components/Cards';
import './../pages/styles/homePage.css';
import { URL, SEARCH_PARAM } from '../helpers/constants';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const fetchData = (searchQuery: string) => {
    fetch(`${URL}?${SEARCH_PARAM}${searchQuery}`)
      .then((res) => res.json())
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
      })
      .catch((error) => error);
  };

  useEffect(() => {
    if (searchQuery) {
      localStorage.setItem('search', searchQuery);
    } else {
      localStorage.removeItem('search');
    }
    fetchData(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
  };

  const cardsProps = {
    data: data,
  };
  let searchResult;
  if (data) {
    searchResult = <Cards {...cardsProps} />;
  } else {
    searchResult = <p>Not found this character... </p>;
  }

  return (
    <div className="home-page-container">
      <Search onChange={handleInputChange} value={searchQuery} />
      {isLoading && <p> Loading...</p>}
      {searchResult}
    </div>
  );
};
export default HomePage;
