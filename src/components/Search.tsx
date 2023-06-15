import React from 'react';
import { SearchProps } from '../model/interfases';
import './styles/search.css';

const Search = (props: SearchProps) => {
  const { onChange, value } = props;

  return (
    <div className="search-box">
      <label htmlFor="search"></label>
      <input
        id="search"
        type="search"
        value={value}
        onChange={onChange}
        placeholder="Search character"
      />
    </div>
  );
};

export default Search;
