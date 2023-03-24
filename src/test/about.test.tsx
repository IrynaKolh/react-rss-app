import React from 'react';
import { render } from '@testing-library/react';
import About from '../components/About';

test('renders learn react link', () => {
  const { getByText } = render(<About />);
  const linkElement = getByText(/About Us/i);
  expect(linkElement).toBeInTheDocument();
});
