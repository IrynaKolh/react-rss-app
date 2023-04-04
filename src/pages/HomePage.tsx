import Search from '../components/Search';
import React, { useEffect, useRef, useState } from 'react';
import Cards from '../components/Cards';
import './../pages/styles/homePage.css';
import { URL, SEARCH_PARAM } from '../helpers/constants';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('search') ?? '');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchQueryRef = useRef<string>();

  const fetchData = (searchQuery: string) => {
    fetch(`${URL}?${SEARCH_PARAM}${searchQuery}`)
      .then((res) => {
        if (res.ok === false) {
          throw Error('Not found. Try another search request!');
        }
        return res.json();
      })
      .then((data) => {
        setData(data.results);
        setIsLoading(false);
        setError(null);
      })
      .catch((err) => {
        setIsLoading(false);
        setError(err.message);
      });
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchQueryRef.current!);
    };
  }, []);

  useEffect(() => {
    searchQueryRef.current = searchQuery;
    fetchData(searchQuery);
  }, [searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    searchQueryRef.current = e.target.value;
  };

  const cardsProps = {
    data: data,
  };

  return (
    <div className="home-page-container">
      <Search onChange={handleInputChange} value={searchQuery} />
      {isLoading && <p> Loading...</p>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {data ? <Cards {...cardsProps} /> : <p>Not found this character... </p>}
    </div>
  );
};
export default HomePage;