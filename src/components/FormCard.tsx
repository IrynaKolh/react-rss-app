import React from 'react';
import { Character } from '../model/interfases';
import './styles/formCard.css';
import { parseDate } from '../helpers/utils';

class FormCard extends React.Component<Character> {
  render() {
    return (
      <div className="form-card">
        <div className="form-image-container">
          <img src={this.props.image} alt="Character image" />
        </div>
        <h3 className="form-h1">{this.props.name}</h3>
        <h4>Main information: </h4>
        <ul className="form-ul">
          <li key={`status + ${this.props.id}`}>Status: {this.props.status}</li>
          <li key={`species + ${this.props.id}`}>Species: {this.props.species}</li>
          <li key={`gender + ${this.props.id}`}>Gender: {this.props.gender}</li>
          <li key={`location + ${this.props.id}`}>Location: {this.props.location.name}</li>
          <li key={`created + ${this.props.id}`}>
            Date of birthday: {parseDate(this.props.created)}
          </li>
        </ul>
      </div>
    );
  }
}

export default FormCard;
