import React from 'react';
import FormCard from '../components/FormCard';
import Form from '../components/Form';
import { Character } from '../model/interfases';
import './styles/formPage.css';
import { addCardForm } from '../store/formSlice';
import { useAppSelector, useAppDispatch } from '../store/hooks';

const FormPage = () => {
  const cardsForm = useAppSelector((state) => state.form.formCards);
  const dispatch = useAppDispatch();
  const getCardData = (cardForm: Character) => dispatch(addCardForm(cardForm));

  return (
    <div>
      <Form onSubmit={getCardData} />
      <div role={'list'} className="form-cards-container">
        {cardsForm ? cardsForm.map((item: Character) => <FormCard {...item} key={item.id} />) : ''}
      </div>
    </div>
  );
};

export default FormPage;
