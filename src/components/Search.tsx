import './styles/search.css';
import { useAppSelector } from './../store/hooks';
import { SearchProps } from '../model/interfases';

const Search = (props: SearchProps) => {
  const search = useAppSelector((state) => state.search.searchQuery);

  return (
    <div className="search-box">
      <label htmlFor="search"></label>
      <input
        id="search"
        type="search"
        value={search}
        onChange={props.onChange}
        placeholder="Search character"
      />
    </div>
  );
};

export default Search;
