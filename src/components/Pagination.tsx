import React from 'react';
import './styles/pagination.css';
import { PaginationProps } from '../model/interfases';

const Pagination = (props: PaginationProps) => {
  const { page, onClick } = props;

  return (
    <div className="pagination">
      <ul className="pagination-btns">
        <li>
          <button className="pagination-btn" onClick={onClick} disabled={page == 1}>
            &#60;&#60;
          </button>
        </li>
        <li>
          <button className="pagination-btn" onClick={onClick} disabled={page == 1}>
            &#60;
          </button>
        </li>
        <li>
          <button className="pagination-btn" onClick={onClick}>
            {page}
          </button>
        </li>
        <li>
          <button className="pagination-btn" onClick={onClick} disabled={page == 42}>
            &#62;
          </button>
        </li>
        <li>
          <button className="pagination-btn" onClick={onClick} disabled={page == 42}>
            &#62;&#62;
          </button>
        </li>
      </ul>
    </div>
  );
};

export default Pagination;
