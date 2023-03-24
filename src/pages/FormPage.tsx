import React, { Component } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import { Character } from '../model/interfases';
import './styles/formPage.css';

class FormPage extends Component<Record<string, never>> {
  private myCards: Character[];

  constructor(props: Record<string, never>) {
    super(props);
    this.getCardData = this.getCardData.bind(this);
    this.myCards = [];
  }

  getCardData(newCard: Character) {
    this.setState({ card: newCard });
    this.myCards.push(newCard);
  }

  render() {
    return (
      <div>
        <Form callback={this.getCardData} />
        <div role={'list'} className="form-cards-container">
          {this.myCards.map((item: Character) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormPage;
