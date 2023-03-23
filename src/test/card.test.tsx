import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from '../components/Card';
import { exampleCard } from './../helpers/constants';

describe('render Card component', () => {
  it('renders Card component', () => {
    render(<Card {...exampleCard} />);
    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Character image/i)).toBeInTheDocument();
    expect(screen.getByText(/Main information:/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getByText(/Earth/i)).toBeInTheDocument();
  });
});
