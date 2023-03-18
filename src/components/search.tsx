import React from 'react';
import { SearchState } from './../model/interfases';
import './styles/search.css';

class Search extends React.Component<Record<string, never>, SearchState> {
  constructor(props: Record<string, never>) {
    super(props);
    const inputText = localStorage.getItem('inputText');
    this.state = inputText ? { inputText: inputText } : { inputText: '' };
  }

  handleInputChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const {
      target: { value: inputText },
    } = e;
    this.setState({ inputText });
  };

  handleOnClick = (e: React.FormEvent<HTMLButtonElement>): void => {
    e.preventDefault();
    localStorage.setItem('inputText', this.state.inputText);
    this.setState({ inputText: '' });
  };

  componentWillUnmount() {
    if (this.state.inputText) {
      localStorage.setItem('inputText', this.state.inputText);
    } else {
      localStorage.removeItem('inputText');
    }
  }

  render() {
    const { inputText } = this.state;
    return (
      <div className="search-box">
        <label htmlFor="search"></label>
        <input
          id="search"
          type="search"
          value={inputText}
          onChange={this.handleInputChange}
          placeholder="Search character"
        />

        <button className="search-btn" onClick={this.handleOnClick}>
          Search
        </button>
      </div>
    );
  }
}

export default Search;
