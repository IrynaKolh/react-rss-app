import React from 'react';
import { render } from '@testing-library/react';
import NotFoundPage from '../pages/NotFoundPage';

test('renders 404 page', () => {
  const { getByText, getByRole } = render(<NotFoundPage />);
  expect(getByText(/404! Page not found!/i)).toBeInTheDocument();
  expect(getByRole('heading')).toHaveClass('not-found-page');
});
