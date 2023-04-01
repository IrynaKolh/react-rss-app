import React, { useState } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import { Character } from '../model/interfases';
import './styles/formPage.css';

const FormPage = () => {
  const oneCard: Character[] = [];
  const [myCards, setMyCards] = useState(oneCard);

  const getCardData = (newCard: Character) => {
    const newArray = [...myCards, newCard];
    setMyCards(newArray);
  };

  return (
    <div>
      <Form callback={getCardData} />
      <div role={'list'} className="form-cards-container">
        {myCards.map((item: Character) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
