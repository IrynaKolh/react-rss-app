import React, { Component } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import { Character } from '../model/interfases';

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
        <h3 style={{ textAlign: 'center' }}>Add New Character!</h3>
        <Form callback={this.getCardData} />
        <div className="cards-contener">
          {this.myCards.map((item: Character) => (
            <Card {...item} key={item.id} />
          ))}
        </div>
      </div>
    );
  }
}

export default FormPage;
