import React from 'react';
import { fireEvent, render, screen } from '@testing-library/react';
import Cards from '../components/Cards';
import { cardsProps } from '../helpers/constants';

describe('Cards', () => {
  it('render Cards component', async () => {
    render(<Cards {...cardsProps} />);
    expect(screen.getAllByAltText(/Character image/i)).toHaveLength(2);
  });
  it('opens modal card on card click', () => {
    render(<Cards {...cardsProps} />);

    const card1 = screen.getByRole('heading', { name: 'Morty Smith' });
    expect(card1).toHaveTextContent('Morty Smith');
    fireEvent.click(card1);

    const modalCard = screen.getByTestId('modal-card');
    expect(modalCard).toBeInTheDocument();
    expect(modalCard).toHaveTextContent('Morty Smith');

    fireEvent.click(modalCard);
    expect(modalCard).not.toBeInTheDocument();
  });
});
