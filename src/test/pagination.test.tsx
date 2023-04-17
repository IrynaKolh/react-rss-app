import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import store from '../store';

describe('Pagination Component', () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders correctly with page number', () => {
    const page = '1 / 1';
    render(
      <Provider store={store}>
        <Pagination onClick={mockOnClick} />
      </Provider>
    );
    expect(screen.getByText(page)).toBeInTheDocument();
    expect(screen.getByText('<<')).toBeInTheDocument();
    expect(screen.getByText('>>')).toBeInTheDocument();
  });
});
