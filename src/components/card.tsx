import React from 'react';
import { Character } from './../model/interfases';
import './styles/card.css';

class Card extends React.Component<Character> {
  render() {
    return (
      <div className="card-container">
        <div className="image-container">
          <img src={this.props.image} alt="Character image" />
        </div>
        <h3 className="title">{this.props.name}</h3>
        <h4>Main information: </h4>
        <ul>
          <li>Status: {this.props.status}</li>
          <li>Species: {this.props.species}</li>
          <li>Gender: {this.props.gender}</li>
          <li>Location: {this.props.location.name}</li>
        </ul>
        <button className="card-button">More information...</button>
      </div>
    );
  }
}
export default Card;
