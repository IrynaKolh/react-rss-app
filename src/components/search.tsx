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

  handleKeyPress = (e: React.KeyboardEvent): void => {
    if (e.key === 'Enter') {
      console.log('enter press here! ');
    }
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
      <div className="search">
        <input
          type="search"
          value={inputText}
          onChange={this.handleInputChange}
          onKeyPress={this.handleKeyPress}
          placeholder="Search character"
        />
      </div>
    );
  }
}

export default Search;
