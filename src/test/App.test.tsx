import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from './../App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';

describe('App', () => {
  test('App rooter', () => {
    act(() => {
      render(
        <MemoryRouter>
          <App />
        </MemoryRouter>
      );
    });
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    act(() => {
      userEvent.click(aboutLink);
    });
    expect(screen.getByText(/About us/i)).toBeInTheDocument();
    act(() => {
      userEvent.click(homeLink);
    });
    expect(screen.getByText(/Rick and Morty characters/i)).toBeInTheDocument();
  });
  test('Not found page rooter', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/testpage']}>
          <App />
        </MemoryRouter>
      );
    });
    expect(screen.getByText(/Page not found!/i)).toBeInTheDocument();
  });
});
