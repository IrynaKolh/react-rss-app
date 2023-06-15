import React, { useState } from 'react';
import FormCard from '../components/FormCard';
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
          <FormCard {...item} key={item.id} />
        ))}
      </div>
    </div>
  );
};

export default FormPage;
