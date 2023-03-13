import React from 'react';
import { Character } from './../model/interfases';

class Card extends React.Component<Character> {
  render() {
    return (
      <div>
        <div>
          <img src={this.props.image} alt="Character image" />
        </div>
        <h3>{this.props.name}</h3>
        <h4>Main information: </h4>
        <ul>
          <li>Status: {this.props.status}</li>
          <li>Species: {this.props.species}</li>
          <li>Gender: {this.props.gender}</li>
          <li>location: {this.props.location.name}</li>
        </ul>
        <button>More information...</button>
      </div>
    );
  }
}
export default Card;
