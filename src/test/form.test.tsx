import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import Form from './../components/Form';
import { vi } from 'vitest';
import { exampleCard } from '../helpers/constants';

const onSubmitMock = vi.fn();

describe('Form component', () => {
  it('should render Form correctly', () => {
    render(<Form onSubmit={onSubmitMock} />);
    expect(screen.getByRole('heading', { name: 'Add New Character!' })).toBeInTheDocument();
    expect(screen.getByRole('textbox', { name: 'Character name:' })).toBeInTheDocument();
    expect(screen.getByLabelText('Date of birth:')).toBeInTheDocument();
    expect(screen.getAllByRole('combobox')).toHaveLength(2);
    expect(screen.getAllByRole('option')).toHaveLength(8);
    expect(screen.getAllByRole('checkbox')).toHaveLength(1);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByText('Submit')).toBeInTheDocument();
    expect(screen.getAllByRole('radio')).toHaveLength(2);
    const radioMale = screen.getByRole('radio', { name: 'Male' });
    expect(radioMale).toBeInTheDocument();
    expect(radioMale).not.toBeChecked();
    const radioFemale = screen.getByRole('radio', { name: 'Female' });
    expect(radioFemale).toBeInTheDocument();
    expect(radioFemale).not.toBeChecked();
    expect(screen.getByLabelText(`Link to the character‘s image`)).toBeInTheDocument();
  });

  it('Submit button should be disabled at initialization (before the first typing)', async () => {
    render(<Form onSubmit={onSubmitMock} />);
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    fireEvent.click(screen.getByRole('textbox'), 'Test');
  });

  // it('renders all error messages when submit an empty form', async () => {
  //   render(<Form onSubmit={onSubmitMock} />);
  //   const button = screen.getByText('Submit');
  //   fireEvent.click(button);
  //   await expect(screen.findByText('Please enter your name')).toBeInTheDocument();
  //   await expect(screen.findByText('Please enter your date of birth')).toBeInTheDocument();
  //   await expect(screen.findByText('Select status')).toBeInTheDocument();
  //   await expect(screen.findByText('Select location')).toBeInTheDocument();
  //   await expect(screen.findByText('Select gender')).toBeInTheDocument();
  //   await expect(screen.findByText('Please upload profile image')).toBeInTheDocument();
  // });

  it('data input', async () => {
    render(<Form onSubmit={onSubmitMock} />);
    expect(screen.getByDisplayValue('Submit')).toBeInTheDocument();
    fireEvent.change(screen.getByDisplayValue('Submit'), {
      target: { value: 'Test' },
    });
    await expect(screen.getByDisplayValue('Test')).toHaveValue('Test');
    await screen.getAllByRole('checkbox')[0];
    expect(screen.getAllByRole('checkbox')[0]).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('checkbox')[0]);
    expect(screen.getAllByRole('checkbox')[0]).toBeChecked();
  });

  it('test form'),
    () => {
      render(<Form onSubmit={onSubmitMock} />);
      expect(onSubmitMock).toHaveBeenCalledTimes(1);
      expect(onSubmitMock).toHaveBeenCalledWith({ exampleCard });
    };
});
