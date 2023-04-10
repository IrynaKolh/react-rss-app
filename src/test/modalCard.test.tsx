import React from 'react';
import { render, screen } from '@testing-library/react';
import ModalCard from '../components/ModalCard';
import { exampleCard } from '../helpers/constants';
import { ModalProps } from '../model/interfases';
import { vi } from 'vitest';

const modalData: ModalProps = {
  visible: true,
  setVisible: vi.fn(),
  data: exampleCard.card,
};

describe('render ModalCard component', () => {
  it('renders ModalCard component', () => {
    render(<ModalCard {...modalData} />);
    expect(screen.getByText(/Morty Smith/i)).toBeInTheDocument();
    expect(screen.getByAltText(/Character image/i)).toBeInTheDocument();
    expect(screen.getByText(/Alive/i)).toBeInTheDocument();
    expect(screen.getByText(/Male/i)).toBeInTheDocument();
    expect(screen.getAllByText(/Earth/i)).toHaveLength(2);
    expect(screen.getByText(/Human/i)).toBeInTheDocument();
  });

  it('renders correctly when visible prop is true', () => {
    const { getByTestId } = render(<ModalCard {...modalData} />);

    const modalCard = getByTestId('modal-card');

    expect(modalCard).toBeInTheDocument();
    expect(modalCard).toHaveClass('modal-active');
  });
});
