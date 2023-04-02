import React, { useEffect, useState } from 'react';
import './styles/form.css';
import { FormFilds, FormProps } from '../model/interfases';
import { useForm } from 'react-hook-form';
import { validateBirthDate, validateName } from '../helpers/validators';

const Form: React.FC<FormProps> = ({ onSubmit }) => {
  const {
    register,
    handleSubmit,
    formState: { errors, isDirty },
    reset,
  } = useForm<FormFilds>();

  const [isDisabled, setDisabled] = useState(true);
  const [isValid, setIsValid] = useState(false);

  useEffect(() => {
    setDisabled(!(isDirty && Object.keys(errors).length === 0));
  }, [errors, isDirty]);

  const onFormSubmit = (form: FormFilds) => {
    const curFiles = form.image;
    const imgUrl = curFiles ? URL.createObjectURL(curFiles[0]) : ' ';
    const newCard = {
      id: Date.now(),
      name: form.name,
      status: form.status,
      species: form.species ? 'Human' : 'Alien',
      gender: form.gender,
      origin: {
        name: form.location,
      },
      location: {
        name: form.location,
      },
      image: imgUrl,
      created: form.created,
    };
    onSubmit(newCard);
    setIsValid(true);
    setTimeout(() => {
      reset();
      setIsValid(false);
    }, 1000);
  };

  return (
    <form className="form" autoComplete="off" onSubmit={handleSubmit(onFormSubmit)}>
      <h3 className="form-title">Add New Character!</h3>
      <div className="input-field">
        <label htmlFor="name">Character name: </label>
        <input
          type="text"
          id="name"
          {...register('name', {
            required: 'Please enter your name',
            minLength: { value: 3, message: 'min length is 3' },
            maxLength: { value: 30, message: 'max length is 30' },
            validate: (value) => validateName(value),
          })}
        />
        {errors.name && <div style={{ color: 'red' }}>{errors.name?.message}</div>}
        {errors.name?.type === 'validate' && (
          <div style={{ color: 'red' }}>First letter must be uppercase!</div>
        )}
      </div>
      <div className="input-field">
        <label>
          Date of birth:
          <input
            type="date"
            {...register('created', {
              required: 'Please enter your date of birth',
              validate: (value) => validateBirthDate(value),
            })}
          />
        </label>
        {errors.created?.type === 'required' && (
          <div style={{ color: 'red' }}>{errors.created.message}</div>
        )}
        {errors.created?.type === 'validate' && (
          <div style={{ color: 'red' }}>The birth date can not be in a future!</div>
        )}
      </div>
      <div className="input-field">
        <div className="input-group">
          <label>
            Status:
            <select {...register('status', { required: 'Select status' })}>
              <option> </option>
              <option>Alive</option>
              <option>Dead</option>
              <option>unknown</option>
            </select>
          </label>
          {errors.status && <div style={{ color: 'red' }}>{errors.status.message}</div>}
        </div>
        <div className="input-group">
          <label>
            Location:
            <select {...register('location', { required: 'Select location' })}>
              <option> </option>
              <option>Earth</option>
              <option>Space</option>
              <option>unknown</option>
            </select>
          </label>
          {errors.location && <div style={{ color: 'red' }}>{errors.location.message}</div>}
        </div>
      </div>
      <div className="input-field input-gender">
        <label>
          Male
          <input type="radio" value="Male" {...register('gender', { required: 'Select gender' })} />
        </label>
        <label>
          Female
          <input
            type="radio"
            value="Female"
            {...register('gender', { required: 'Select gender' })}
          />
        </label>
        {errors.gender && <div style={{ color: 'red' }}>{errors.gender.message}</div>}
      </div>
      <div className="input-field">
        <label className="label-check">
          Are you Human?
          <input type="checkbox" {...register('species')} />
          <span></span>
        </label>
      </div>
      <div className="input-field">
        <label>
          Link to the character&lsquo;s image
          <input type="file" {...register('image', { required: 'Please upload profile image' })} />
        </label>
        {errors.image && <div style={{ color: 'red' }}>{errors.image.message}</div>}
      </div>
      <input className="submit" type="submit" value="Submit" disabled={isDisabled} />
      {isValid && <div style={{ color: '#deb887' }}>New character have been saved</div>}
    </form>
  );
};

export default Form;
