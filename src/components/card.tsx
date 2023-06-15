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
          <li key={`status + ${this.props.id}`}>Status: {this.props.status}</li>
          <li key={`species + ${this.props.id}`}>Species: {this.props.species}</li>
          <li key={`gender + ${this.props.id}`}>Gender: {this.props.gender}</li>
          <li key={`location + ${this.props.id}`}>Location: {this.props.location.name}</li>
        </ul>
        <button className="card-button">More information...</button>
      </div>
    );
  }
}
export default Card;
