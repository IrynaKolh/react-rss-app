import Search from '../components/Search';
import React, { useEffect, useRef, useState } from 'react';
import Cards from '../components/Cards';
import './../pages/styles/homePage.css';
import { URL, SEARCH_PARAM, Endpoint, PAGE } from '../helpers/constants';
import { Character } from '../model/interfases';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('search') ?? '');
  const [data, setData] = useState<Character[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchQueryRef = useRef<string>();
  const pageRef = useRef<string>();
  const [page, setPage] = useState(localStorage.getItem('page') ?? 1);

  const fetchData = (searchQuery: string, page: number) => {
    fetch(`${URL}${Endpoint.characters}?${PAGE}${page}&${SEARCH_PARAM}${searchQuery}`)
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
        setData([]);
      });
  };

  useEffect(() => {
    return () => {
      localStorage.setItem('search', searchQueryRef.current!);
      localStorage.setItem('page', pageRef.current!);
    };
  }, []);

  useEffect(() => {
    searchQueryRef.current = searchQuery;
    pageRef.current = page.toString();
    fetchData(searchQuery, +page);
  }, [searchQuery, page]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setSearchQuery(e.target.value);
    searchQueryRef.current = e.target.value;
  };

  const clickHandlerPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (event.currentTarget.textContent) {
      case '<<':
        setPage(1);
        break;
      case '<':
        setPage(+page - 1);
        break;
      case '>':
        setPage(+page + 1);
        break;
      case '>>':
        setPage(42);
        break;
      default:
        break;
    }
  };

  return (
    <div className="home-page-container">
      <Search onChange={handleInputChange} value={searchQuery} />

      {isLoading && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {data.length !== 0 ? (
        <div>
          <h1 className="app-title">Rick and Morty characters</h1>
          <Pagination page={page} onClick={clickHandlerPage} />
          <Cards data={data} />
        </div>
      ) : (
        <h1 className="app-title">Not found this character... </h1>
      )}
    </div>
  );
};
export default HomePage;
