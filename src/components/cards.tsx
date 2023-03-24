import React, { Component } from 'react';
import { CardsState, Character } from './../model/interfases';
import Card from './Card';
import './styles/cards.css';
import { URL } from './../helpers/constants';

class Cards extends Component {
  state: CardsState = {
    data: [],
    error: '',
  };

  componentDidMount() {
    try {
      fetch(URL)
        .then((res) => res.json())
        .then((data) => {
          this.setState({ data: data.results });
        });
    } catch (error) {
      this.setState({ error: error });
    }
  }

  render() {
    const { data, error } = this.state;

    return (
      <div>
        <h1 className="app-title">Rick and Morty characters</h1>

        {error && <span>Something went wrong ... </span>}

        <div role={'list'} className="cards-contener">
          {data.map((item: Character) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
