import React from 'react';
import { render, screen, fireEvent, act } from '@testing-library/react';
import Form from './../components/Form';
import { vi } from 'vitest';
import { Provider } from 'react-redux';
import store from '../store';

const onSubmitMock = vi.fn();

beforeEach(() => {
  render(
    <Provider store={store}>
      <Form onSubmit={onSubmitMock} />
    </Provider>
  );
});

describe('Form component', () => {
  it('should render Form correctly', () => {
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
});

describe('Form component', () => {
  it('Submit button should be disabled at initialization (before the first typing)', async () => {
    expect(screen.getByRole('button')).toBeInTheDocument();
    expect(screen.getByRole('button')).toBeDisabled();
    await act(async () => {
      fireEvent.change(screen.getByRole('textbox', { name: 'Character name:' }), {
        target: { value: 'Test' },
      });
    });
    expect(screen.getByRole('button')).toBeEnabled();
  });
});

describe('Form component', () => {
  it('submit form with valid input', async () => {
    await act(async () => {
      fireEvent.change(screen.getByRole('textbox', { name: 'Character name:' }), 'Test');
      fireEvent.change(screen.getByLabelText('Date of birth:'), {
        target: { value: '1987-03-03' },
      });
      fireEvent.change(screen.getByRole('combobox', { name: 'Status:' }), { target: { value: 1 } });
      fireEvent.change(screen.getByRole('combobox', { name: 'Location:' }), {
        target: { value: 1 },
      });
      fireEvent.change(screen.getByLabelText('Male'), { target: { value: 'Male' } });
      fireEvent.load(screen.getByLabelText(`Link to the character‘s image`), {
        target: {
          files: [new File(['(⌐□_□)'], 'chucknorris.png', { type: 'image/png' })],
        },
      });
    });

    await act(async () => {
      fireEvent.click(screen.getByRole('button'));
    });

    expect(onSubmitMock).toHaveBeenCalledTimes(0);
  });
});

// describe('Form component', () => {
//   it('submit form with empty input', async () => {
//     const onSubmitMock = vi.fn();
//     render(<Form onSubmit={onSubmitMock} />);
//     const nameInput = screen.getByRole('textbox', { name: 'Character name:' });
//     userEvent.type(nameInput, 'Test');
//     const button = screen.getByRole('button');
//     userEvent.click(button);

//     screen.debug();
//     await expect(
//       screen.findByRole('alert', { name: 'Please enter your date of birth' })
//     ).toBeInTheDocument();
//     await expect(screen.findByRole('alert', { name: 'Select status' })).toBeInTheDocument();
//     await expect(screen.findByRole('alert', { name: 'Select location' })).toBeInTheDocument();
//     await expect(screen.findByRole('alert', { name: 'Select gender' })).toBeInTheDocument();
//     await expect(
//       screen.findByRole('alert', { name: 'Please upload profile image' })
//     ).toBeInTheDocument();
//   });
// });

// describe('Form component', () => {
//   it('submit form with invalid input', async () => {
//     const onSubmitMock = jest.fn();
//     render(<Form onSubmit={onSubmitMock} />);

//     await act(async () => {
//       fireEvent.change(screen.getByRole('textbox', { name: 'Character name:' }), {
//         target: { value: 'test' },
//       });
//       fireEvent.blur(screen.getByRole('textbox', { name: 'Character name:' }));

//       fireEvent.change(screen.getByLabelText('Date of birth:'), {
//         target: { value: '03-03-2024' },
//       });
//       fireEvent.blur(screen.getByLabelText('Date of birth:'));

//       fireEvent.change(screen.getByRole('combobox', { name: 'Status:' }), {
//         target: { value: '' },
//       });
//       fireEvent.blur(screen.getByRole('combobox', { name: 'Status:' }));

//       fireEvent.change(screen.getByRole('combobox', { name: 'Location:' }), {
//         target: { value: '' },
//       });
//       fireEvent.blur(screen.getByRole('combobox', { name: 'Location:' }));

//       fireEvent.click(screen.getByRole('radio', { name: 'Male' }), { target: { value: '' } });
//       fireEvent.blur(screen.getByRole('radio', { name: 'Male' }));

//       fireEvent.change(screen.getByLabelText(`Link to the character‘s image`));
//       fireEvent.blur(screen.getByLabelText(`Link to the character‘s image`));
//     });

//     expect(screen.debug).toMatch('First letter must be uppercase!');
//     expect(screen.debug).toMatch('The birth date can not be in a future!');
//     expect(screen.debug).toMatch('Select status');
//     expect(screen.debug).toMatch('Select location');
//     expect(screen.debug).toMatch('Select gender');
//     expect(screen.debug).toMatch('Please upload profile image');
//   });
// });
