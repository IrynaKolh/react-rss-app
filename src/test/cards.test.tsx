import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../components/Cards';
import { cardsProps } from '../helpers/constants';

describe('Cards', () => {
  it('render Cards component', async () => {
    render(<Cards {...cardsProps} />);
    expect(screen.getByText(/Rick and Morty characters/i)).toBeInTheDocument();
    expect(screen.getByText(/Rick and Morty characters/i)).toHaveClass('app-title');
    expect(screen.getAllByAltText(/Character image/i)).toHaveLength(2);
  });
});
