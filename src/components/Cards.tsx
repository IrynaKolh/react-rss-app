import React, { useState } from 'react';
import { CardsState, Character } from '../model/interfases';
import Card from './Card';
import './styles/cards.css';
import ModalCard from './ModalCard';

const Cards = (cardData: CardsState) => {
  const [isModal, setIsModal] = useState(false);
  const [card, setCard] = useState<Character | null>(null);
  const onClose = () => {
    setIsModal(false);
    setCard(null);
  };
  return (
    <div>
      <div role={'list'} className="cards-contener">
        {cardData.data.map((item: Character) => (
          <Card
            card={item}
            key={item.id}
            onClick={() => {
              setIsModal(true);
              setCard(item);
            }}
          />
        ))}
      </div>
      {card && <ModalCard visible={isModal} onClose={onClose} data={card}></ModalCard>}
    </div>
  );
};

export default Cards;
