import React from 'react';
import { render } from '@testing-library/react';
import FormPage from '../pages/FormPage';

describe('FormPage', () => {
  it('renders FormPage', () => {
    const { getByText, getByRole, queryByAltText } = render(<FormPage />);
    expect(getByRole('heading')).toHaveClass('form-title');
    expect(getByRole('list')).toHaveClass('form-cards-container');
    expect(queryByAltText(/Character image/i)).toBeNull();
  });
});
