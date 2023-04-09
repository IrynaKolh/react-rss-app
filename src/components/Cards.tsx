import React, { useState } from 'react';
import { CardsState, Character } from '../model/interfases';
import Card from './Card';
import './styles/cards.css';
import ModalCard from './ModalCard';

const Cards = (cardData: CardsState) => {
  const [isModal, setIsModal] = useState(false);
  const [card, setCard] = useState<Character | null>(null);
  const toggle = () => {
    setIsModal(!isModal);
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
      {card && <ModalCard visible={isModal} setVisible={toggle} data={card}></ModalCard>}
    </div>
  );
};

export default Cards;
