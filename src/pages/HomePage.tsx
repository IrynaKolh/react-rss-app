import Search from '../components/Search';
import React, { useEffect, useRef, useState } from 'react';
import Cards from '../components/Cards';
import './../pages/styles/homePage.css';
import { URL, SEARCH_PARAM, Endpoint, PAGE } from '../helpers/constants';
import { Character } from '../model/interfases';

const HomePage = () => {
  const [searchQuery, setSearchQuery] = useState(localStorage.getItem('search') ?? '');
  const [data, setData] = useState<Character[] | []>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);
  const searchQueryRef = useRef<string>();
  const pageRef = useRef<string>();
  const [page, setPage] = useState(localStorage.getItem('page') ?? 1);
  // const [selectedSort, setSelectedSort] = useState('');

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

  // const sortedCharacters = useMemo(() => {
  //   console.log('sorting...');
  //   if (selectedSort) {
  //     switch (selectedSort) {
  //       case 'created':
  //         [...data].sort((a, b) => {
  //           const keyA = new Date(a.created),
  //             keyB = new Date(b.created);
  //           // Compare the 2 dates
  //           if (keyA < keyB) return -1;
  //           if (keyA > keyB) return 1;
  //           return 0;
  //         });
  //         break;
  //       case 'name':
  //         [...data].sort((a, b) => {
  //           const keyA = a.name,
  //             keyB = b.name;
  //           if (keyA < keyB) return -1;
  //           if (keyA > keyB) return 1;
  //           return 0;
  //         });
  //         break;
  //       default:
  //         break;
  //     }
  //   }
  //   return data;
  // }, [selectedSort, data]);

  // const sortCharacters = (sort: SortType | string) => {
  //   setSelectedSort(sort);
  // };

  const clickHandlerPage = (event: React.MouseEvent<HTMLButtonElement>) => {
    switch (event.currentTarget.textContent) {
      case '<<':
        setPage(1);
        // setSelectedSort('');
        break;
      case '<':
        setPage(+page - 1);
        // setSelectedSort('');
        break;
      case '>':
        setPage(+page + 1);
        // setSelectedSort('');
        break;
      case '>>':
        setPage(42);
        // setSelectedSort('');
        break;
      default:
        break;
    }
  };

  return (
    <div className="home-page-container">
      <Search onChange={handleInputChange} value={searchQuery} />
      {/* {data && (
        <MySelect
          defaultValue="Sorting"
          value={selectedSort}
          onChange={sortCharacters}
          options={[
            { value: 'name', name: 'By name' },
            { value: 'created', name: 'By created' },
          ]}
        />
      )} */}
      {isLoading && <p> Loading...</p>}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {data.length !== 0 ? (
        <div>
          <h1 className="app-title">Rick and Morty characters</h1>
          <div className="pagination">
            <ul className="pagination-btns">
              <li>
                <button className="pagination-btn" onClick={clickHandlerPage}>
                  &#60;&#60;
                </button>
              </li>
              <li>
                <button className="pagination-btn" onClick={clickHandlerPage}>
                  &#60;
                </button>
              </li>
              <li>
                <button className="pagination-btn" onClick={clickHandlerPage}>
                  {page}
                </button>
              </li>
              <li>
                <button className="pagination-btn" onClick={clickHandlerPage}>
                  &#62;
                </button>
              </li>
              <li>
                <button className="pagination-btn" onClick={clickHandlerPage}>
                  &#62;&#62;
                </button>
              </li>
            </ul>
          </div>
          <Cards data={data} />
        </div>
      ) : (
        <h1 className="app-title">Not found this character... </h1>
      )}
    </div>
  );
};
export default HomePage;
