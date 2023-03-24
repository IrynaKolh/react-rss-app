import React from 'react';
import { render, screen } from '@testing-library/react';
import Cards from '../components/Cards';
// import axios from 'axios';
// import { hits } from './../helpers/constants';
// jest.mock('axios');

describe('Cards', () => {
  // it('fetching cards from an API', async () => {
  // (axios.get as jest.Mock).mockImplementationOnce(() => Promise.resolve({ data: { hits } }));
  // const { findAllByRole } = render(<Cards />);
  // const items = await findAllByRole('listitem');
  // expect(items).not.toHaveLength(0);
  // expect(axios.get).toHaveBeenCalledTimes(1);
  // expect(axios.get).toHaveBeenCalledWith('https://rickandmortyapi.com/api/character');
  // });

  // it('fetching cards from an API and reject', async () => {
  //   (axios.get as jest.Mock).mockImplementationOnce(() => Promise.reject(new Error()));
  //   const { findByText } = render(<Cards />);
  //   const message = await findByText(/Something went wrong/);
  //   expect(message).toBeInTheDocument();
  // });

  // it('fetches news from an API (alternative)', async () => {
  //   const promise = Promise.resolve({ data: { hits } });
  //   (axios.get as jest.Mock).mockImplementationOnce(() => promise);
  //   const { getAllByRole } = render(<Cards />);
  //   await act(() => promise);
  //   expect(getAllByRole('listitem')).toHaveLength(2);
  // });

  it('render Cards component', async () => {
    render(<Cards />);
    expect(screen.getByText(/Rick and Morty characters/i)).toBeInTheDocument();
    expect(screen.getByRole('heading')).toHaveClass('app-title');
    expect(screen.getByRole('list')).toHaveClass('cards-contener');
    expect(screen.queryByAltText(/Character image/i)).toBeNull();
    expect(await screen.findAllByAltText(/Character image/i)).toHaveLength(20);
  });
});
