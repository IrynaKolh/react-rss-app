import React, { useState } from 'react';
import Card from '../components/Card';
import Form from '../components/Form';
import { Character } from '../model/interfases';
import './styles/formPage.css';

const FormPage = () => {
  const [myCards, setMyCards] = useState<Character[]>([]);

  const getCardData = (newCard: Character) => {
    const newArray: Character[] = [...myCards, newCard];
    setMyCards(newArray);
  };

  return (
    <div>
      <Form onSubmit={getCardData} />
      <div role={'list'} className="form-cards-container">
        {myCards.map((item: Character) => (
          <Card {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
