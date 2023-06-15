import React from 'react';
import { render, screen } from '@testing-library/react';
import Pagination from '../components/Pagination';
import { vi } from 'vitest';

describe('Pagination Component', () => {
  const mockOnClick = vi.fn();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('renders correctly with page number', () => {
    const page = 2;
    render(<Pagination page={page} onClick={mockOnClick} />);

    expect(screen.getByText(page.toString())).toBeInTheDocument();
    expect(screen.getByText('<<')).toBeInTheDocument();
    expect(screen.getByText('<')).toBeInTheDocument();
    expect(screen.getByText('>')).toBeInTheDocument();
    expect(screen.getByText('>>')).toBeInTheDocument();
  });
});
