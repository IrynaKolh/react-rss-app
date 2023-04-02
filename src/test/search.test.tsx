import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Search from '../components/Search';

const searchProps = {
  value: 'react',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  },
};

describe('Search', () => {
  it('renders Search component', () => {
    render(<Search {...searchProps} />);
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search character')).toBeInTheDocument();
    expect(screen.getByDisplayValue('react')).toBeInTheDocument();
    expect(screen.getByLabelText('')).not.toBeRequired();
    expect(screen.getByLabelText('')).toBeEmptyDOMElement;
    expect(screen.getByLabelText('')).toHaveAttribute('id');
    expect(screen.getByRole('searchbox')).toHaveValue('react');
  });

  it('input focus', () => {
    const { getByTestId } = render(<input type="search" data-testid="simple-input" />);
    const input = getByTestId('simple-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });
});
