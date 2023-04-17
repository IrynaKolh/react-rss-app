import React from 'react';
import { render, screen } from '@testing-library/react';
import FormPage from '../pages/FormPage';
import { Provider } from 'react-redux';
import store from '../store';

describe('FormPage', () => {
  it('renders FormPage', () => {
    render(
      <Provider store={store}>
        <FormPage />
      </Provider>
    );
    expect(screen.getByRole('heading')).toHaveClass('form-title');
    expect(screen.getByRole('list')).toHaveClass('form-cards-container');
    expect(screen.queryByAltText(/Character image/i)).toBeNull();
  });
});
