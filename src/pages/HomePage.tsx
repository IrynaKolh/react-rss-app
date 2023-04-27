import Search from '../components/Search';
import React, { Suspense, lazy, useEffect } from 'react';
import './../pages/styles/homePage.css';
import Loader from '../components/Loader';
import Pagination from '../components/Pagination';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchCards, setCurrentPage } from '../store/cardsSlice';
import { setSearchQuery } from '../store/searchSlice';

const Cards = lazy(() => import('../components/Cards'));

const HomePage = () => {
  const { cardsList, cardsPerRage, loading, error, currentPage } = useAppSelector(
    (state) => state.cards
  );
  const searchQuery = useAppSelector((state) => state.search.searchQuery);
  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(fetchCards());
  }, [dispatch]);

  useEffect(() => {
    dispatch(fetchCards());
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [currentPage, cardsPerRage, searchQuery]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    dispatch(setSearchQuery(e.target.value));
    dispatch(setCurrentPage(1));
    dispatch(fetchCards);
  };

  const clickHandlerPage = (e: React.MouseEvent<HTMLButtonElement>): void => {
    const btn = e.target as HTMLButtonElement;
    const btnType = btn.getAttribute('data-name');

    switch (btnType) {
      case 'next':
        dispatch(setCurrentPage(currentPage + 1));
        break;
      case 'prev':
        dispatch(setCurrentPage(currentPage - 1));
        break;
    }
  };

  const cardsProps = {
    cardsList: cardsList,
  };

  return (
    <div className="home-page-container">
      <Search onChange={handleInputChange} />

      {loading === true && (
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: 50 }}>
          <Loader />
        </div>
      )}
      {error && <div style={{ color: 'red' }}>{error}</div>}
      {cardsList.length !== 0 ? (
        <div>
          <h1 className="app-title">Rick and Morty characters</h1>
          <Pagination onClick={clickHandlerPage} />
          <Suspense fallback={<Loader />}>
            <Cards {...cardsProps} />
          </Suspense>
        </div>
      ) : (
        <h1 className="app-title">Not found this character... </h1>
      )}
    </div>
  );
};
export default HomePage;
