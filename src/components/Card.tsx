import React from 'react';
import { Character } from '../model/interfases';
import './styles/card.css';

type CardProps = {
  card: Character;
  onClick: () => void;
};

const Card = ({ card, onClick }: CardProps) => {
  return (
    <div className="card-container" onClick={onClick}>
      <div className="image-container">
        <img src={card.image} alt="Character image" />
      </div>
      <h3 className="title">{card.name}</h3>
      <ul>
        <li key={`status + ${card.id}`}>{card.status}</li>
        <li key={`gender + ${card.id}`}>{card.gender}</li>
      </ul>
    </div>
  );
};

export default Card;
