import React, { Component } from 'react';
import './styles/form.css';

class Form extends Component {
  render() {
    return (
      <form className="form-container">
        <h3>Add New Card!</h3>
        <label>
          <input
            id="search"
            placeholder="Enter your first name"
            type="text"
            // value={inputName}
          ></input>
        </label>
      </form>
    );
  }
}

export default Form;
