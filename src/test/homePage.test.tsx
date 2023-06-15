import React from 'react';
import { render, screen } from '@testing-library/react';
import HomePage from '../pages/HomePage';
import { act } from 'react-dom/test-utils';
import { cardsProps } from '../helpers/constants';

describe('HomePage', () => {
  it('renders HomePage  component'),
    () => {
      render(<HomePage />);
      expect(screen.getByText(/Rick and Morty characters/i)).toBeInTheDocument();
      expect(screen.getByText(/Rick and Morty characters/i)).toHaveClass('app-title');
      expect(screen.getByPlaceholderText(/Search character/i)).toBeInTheDocument();
    };
  it('fetch data'),
    async () => {
      global.fetch = jest.fn().mockImplementationOnce(
        () =>
          new Promise((resolve) => {
            resolve({
              json: () =>
                new Promise((resolve) => {
                  resolve(cardsProps);
                }),
            });
          })
      );
      await act(async () => {
        render(<HomePage />);
      });

      expect(screen.getByText(/Rick and Morty/i)).toBeInTheDocument();
      expect(screen.getAllByAltText(/Character image/i)).toHaveLength(2);
    };
});
