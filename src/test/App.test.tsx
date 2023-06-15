import React from 'react';
import { render, screen, act } from '@testing-library/react';
import App from '../App';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from '../store';

describe('App', () => {
  test('App rooter', () => {
    act(() => {
      render(
        <MemoryRouter>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
      );
    });
    const homeLink = screen.getByText(/Home/i);
    const aboutLink = screen.getByText(/About/i);
    const addCardLink = screen.getByText(/Add Card/i);
    act(() => {
      userEvent.click(aboutLink);
    });
    expect(screen.getByText(/About/i)).toBeInTheDocument();
    act(() => {
      userEvent.click(addCardLink);
    });
    expect(screen.getByText(/Add Card/i)).toBeInTheDocument();
    act(() => {
      userEvent.click(homeLink);
    });
    expect(screen.getByText(/Not found this character.../i)).toBeInTheDocument();
  });
  test('Not found page rooter', () => {
    act(() => {
      render(
        <MemoryRouter initialEntries={['/testpage']}>
          <Provider store={store}>
            <App />
          </Provider>
        </MemoryRouter>
      );
    });
    expect(screen.getByText(/Page not found!/i)).toBeInTheDocument();
  });
});
