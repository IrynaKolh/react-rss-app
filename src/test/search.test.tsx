import React from 'react';
import { render, screen } from '@testing-library/react';
import Search from '../components/Search';
import { Provider } from 'react-redux';
import store from '../store';
import userEvent from '@testing-library/user-event';

const searchProps = {
  value: 'react',
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  },
};

beforeEach(() => {
  render(
    <Provider store={store}>
      <Search {...searchProps} />
    </Provider>
  );
});

describe('Search', () => {
  it('renders Search component', () => {
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search character')).toBeInTheDocument();
    // expect(screen.getByDisplayValue('react')).toBeInTheDocument();
    expect(screen.getByLabelText('')).not.toBeRequired();
    expect(screen.getByLabelText('')).toBeEmptyDOMElement;
    expect(screen.getByLabelText('')).toHaveAttribute('id');
    // expect(screen.getByRole('searchbox')).toHaveValue('react');
  });

  it('input focus', () => {
    const { getByTestId } = render(<input type="search" data-testid="simple-input" />);
    const input = getByTestId('simple-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  it('dispatches setSearchQuery action', () => {
    const input = screen.getByPlaceholderText('Search character');
    userEvent.click(input);

    expect(store.getState().search.searchQuery).toEqual('');
  });
});
