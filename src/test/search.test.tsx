import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Search from '../components/Search';
import userEvent from '@testing-library/user-event';

describe('Search', () => {
  it('renders Search component', () => {
    render(<Search />);
    expect(screen.getByText(/Search/i)).toBeInTheDocument();
    expect(screen.getByRole('searchbox')).toBeInTheDocument();
    // expect(screen.getByLabelText(/search/i)).toBeInTheDocument();
    expect(screen.getByPlaceholderText('Search character')).toBeInTheDocument();
    expect(screen.getByDisplayValue('')).toBeInTheDocument();
    //toHaveClass
    // toHaveStyles
    expect(screen.getByLabelText('')).not.toBeRequired();
    expect(screen.getByLabelText('')).toBeEmptyDOMElement;
    expect(screen.getByLabelText('')).toHaveAttribute('id');
  });

  it('event Search component', async () => {
    render(<Search />);
    await screen.getByPlaceholderText('Search character');
    fireEvent.change(screen.getByRole('searchbox'), {
      target: { value: 'React' },
    });
    // =
    // userEvent.type(screen.getByRole('searchbox'), 'React');
    expect(screen.getByRole('searchbox')).toHaveValue('React');
  });

  it('input focus', () => {
    const { getByTestId } = render(<input type="search" data-testid="simple-input" />);
    const input = getByTestId('simple-input');
    expect(input).not.toHaveFocus();
    input.focus();
    expect(input).toHaveFocus();
  });

  // TODO
  it('submit imput', () => {
    const handleClick = jest.fn();
    act(() => {
      render(<Search />);
    });
    act(() => {
      userEvent.click(screen.getByText(/Search/i));
    });
    expect(handleClick).toHaveBeenCalledTimes(0);
  });
});
