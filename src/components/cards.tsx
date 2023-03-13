import React, { Component } from 'react';
import { Character, CardsState } from './../model/interfases';
import Card from './card';
import './styles/cards.css';

class Cards extends Component {
  state: CardsState = {
    data: [],
  };

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        const localStore = data.results;
        this.setState({ data: data.results });
        localStorage.setItem('local', JSON.stringify(localStore));
      });
  }

  render() {
    let data;
    const isLSExist = localStorage.getItem('local');
    if (isLSExist) {
      data = JSON.parse(isLSExist);
    } else {
      data = [];
    }

    return (
      <div>
        <h1 className="app-title">Rick and Morty characters</h1>
        <div className="cards-contener">
          {data.map((item: Character) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default Cards;
