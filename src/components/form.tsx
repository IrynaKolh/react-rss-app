import React, { Component, FormEvent } from 'react';
import './styles/form.css';
import { Character } from './../model/interfases';

class Form extends Component<Record<string, never>> {
  private nameInput = React.createRef<HTMLInputElement>();
  private dateInput = React.createRef<HTMLInputElement>();
  private statusSelect = React.createRef<HTMLSelectElement>();
  private humanInput = React.createRef<HTMLInputElement>();
  private genderInput = React.createRef<HTMLInputElement>();
  private locationSelect = React.createRef<HTMLSelectElement>();
  private imgFile = React.createRef<HTMLFormElement>();

  constructor(props: never) {
    super(props);
  }

  handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    const newCard: Character = {
      id: Date.now(),
      name: this.nameInput.current?.value as string,
      status: this.statusSelect.current?.value as string,
      species: this.humanInput.current?.value as string,
      gender: this.genderInput.current?.value as string,
      origin: {
        name: this.locationSelect.current?.value as string,
      },
      location: {
        name: this.locationSelect.current?.value as string,
      },
      image: this.imgFile.current?.target as string,
      created: Date.now().toString(),
    };
    console.log(newCard);
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Name:</label>
          <input type="text" ref={this.nameInput} placeholder="Full Name" name="fullname" />
        </div>
        <div>
          <label>Date of birth:</label>
          <input
            type="date"
            ref={this.dateInput}
            placeholder="Date of your birth"
            name="dateInput"
          />
        </div>
        <div>
          <label>Status:</label>
          <select name="statusSelect" ref={this.statusSelect}>
            <option> </option>
            <option value="alive">Alive</option>
            <option value="dead">Dead</option>
            <option value="unknown">unknown</option>
          </select>
        </div>
        <div>
          <label>
            Male
            <input type="radio" value="male" name="genderInput" ref={this.genderInput} />
          </label>
          <label>
            Female
            <input type="radio" value="female" name="genderInput" ref={this.genderInput} />
          </label>
        </div>
        <div>
          <label>Location:</label>
          <select name="locationSelect" ref={this.locationSelect}>
            <option> </option>
            <option>Earth</option>
            <option>Space</option>
            <option>unknown</option>
          </select>
        </div>
        <div>
          <span>Are you Human?</span>
          <label>
            <input type="checkbox" name="humanInput" ref={this.humanInput} />
          </label>
        </div>
        <div>
          <input type="file" name="imgFile" accept="image/*" />
        </div>
      </form>
    );
  }
}

export default Form;
