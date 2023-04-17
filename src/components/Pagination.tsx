import React from 'react';
import './styles/pagination.css';
import { PaginationProps } from '../model/interfases';
import { useAppSelector } from '../store/hooks';

const Pagination = (props: PaginationProps) => {
  const { onClick } = props;
  const { pages, count, cardsPerRage, currentPage } = useAppSelector((state) => state.cards);
  const last = cardsPerRage === 20 ? pages : Math.ceil(Number(count) / 10);

  return (
    <div className="pagination">
      <ul className="pagination-btns">
        <li>
          <button
            className="pagination-btn"
            onClick={onClick}
            disabled={currentPage == 1}
            data-name="prev"
          >
            {'<<'}
          </button>
        </li>
        <li>
          <button className="pagination-btn" onClick={onClick}>
            {`${currentPage} / ${last}`}
          </button>
        </li>
        <li>
          <button
            className="pagination-btn"
            onClick={onClick}
            disabled={currentPage == last}
            data-name="next"
          >
            {'>>'}
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
