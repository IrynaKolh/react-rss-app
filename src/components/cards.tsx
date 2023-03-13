import React, { Component } from 'react';
import { Character, CardsState } from './../model/interfases';
import Card from './card';

class Cards extends Component {
  state: CardsState = {
    data: [],
  };

  componentDidMount() {
    fetch('https://rickandmortyapi.com/api/character')
      .then((res) => res.json())
      .then((data) => {
        this.setState({ data: data.results });
      });
  }

  render() {
    const { data } = this.state;
    return (
      <div>
        <h1 className="title">The Star Wars universe and its characters</h1>
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