import { describe } from 'vitest';
import formReduser, { addCardForm } from '../store/formSlice';

describe('searchSlice', () => {
  it('should return default state when passed empty action', () => {
    const result = formReduser(undefined, { type: '' });
    expect(result).toStrictEqual({ formCards: [] });
  });
  it('should add form card', () => {
    const card = {
      created: '2017-11-04T18:50:21.651Z',
      gender: 'Male',
      id: 2,
      image: 'https://rickandmortyapi.com/api/character/avatar/2.jpeg',
      location: {
        name: 'Earth',
      },
      name: 'Morty Smith',
      origin: {
        name: 'Earth',
      },
      species: 'Human',
      status: 'Alive',
    };
    const action = { type: addCardForm.type, payload: card };
    const result = formReduser({ formCards: [] }, action);
    expect(result).toStrictEqual({ formCards: [card] });
  });
});
