import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from '../components/Form';
import { Character } from './../model/interfases';

const myCallback = (a: Character) => console.log(a);

describe('Form component', () => {
  it('renders Form  component', () => {
    render(<Form callback={myCallback} />);
    expect(screen.getByText(/Add New Character!/i)).toBeInTheDocument();
    expect(screen.getByRole('textbox')).toBeInTheDocument();
    expect(screen.getAllByRole('combobox')).toHaveLength(2);
    expect(screen.getAllByRole('option')).toHaveLength(8);
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(2);
  });
  it('Submit button should be disabled at initialization (before the first typing)', async () => {
    render(<Form callback={myCallback} />);
    expect(screen.getByDisplayValue('Submit')).toBeInTheDocument();
    expect(screen.getByDisplayValue('Submit')).toBeDisabled();
    fireEvent.click(screen.getByDisplayValue('Submit'));
    // await expect(screen.findByDisplayValue('Submit')).toBeEnabled();
  });

  it('data input', async () => {
    render(<Form callback={myCallback} />);
    expect(screen.getByDisplayValue('Submit')).toBeInTheDocument();
    fireEvent.change(screen.getByDisplayValue('Submit'), {
      target: { value: 'Test' },
    });
    await expect(screen.getByDisplayValue('Test')).toHaveValue('Test');

    await screen.getAllByRole('checkbox')[0];
    expect(screen.getAllByRole('checkbox')[0]).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
    // fireEvent.click(screen.getAllByRole('checkbox')[1]);
    // expect(screen.getAllByRole('checkbox')[1]).toBeChecked();
  });
});
