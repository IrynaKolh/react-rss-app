import React from 'react';
import { render } from '@testing-library/react';
import NotFound from '../pages/notFound';

test('renders learn react link', () => {
  const { getByText } = render(<NotFound />);
  const linkElement = getByText(/404! Page not found!/i);
  expect(linkElement).toBeInTheDocument();
});
