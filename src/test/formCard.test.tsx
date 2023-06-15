import React from 'react';
import { render, screen } from '@testing-library/react';
import { exampleCard } from '../helpers/constants';
import FormCard from '../components/FormCard';

describe('render Card component', () => {
  it('renders Card component', () => {
    render(<FormCard {...exampleCard.card} />);
    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Character image/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Earth/i)).toBeInTheDocument();
    expect(screen.getByText(/Date of birthday/i)).toBeInTheDocument();
  });
});
