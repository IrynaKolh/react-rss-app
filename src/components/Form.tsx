import React, { Component } from 'react';
import './styles/form.css';
import { FormFilds, FormProps } from '../model/interfases';
import { MAX_IMAGE_SIZE } from '../helpers/constants';

class Forms extends Component<FormProps> {
  isFormValid: Record<string, boolean>;
  isSubmit: boolean;
  idDisabled: boolean;
  isChangeForm: boolean;
  isImgSize: boolean;
  constructor(props: FormProps) {
    super(props);
    this.isFormValid = {
      isName: false,
      isDate: false,
      isStatus: false,
      isGender: false,
      isLocation: false,
      isImg: false,
    };
    this.isSubmit = false;
    this.isChangeForm = false;
    this.idDisabled = true;
    this.isImgSize = false;
  }

  handleSubmit(event: React.FormEvent<HTMLFormElement & FormFilds>) {
    event.preventDefault();
    if (!this.isChangeForm) this.isChangeForm = true;
    const form = event.currentTarget;
    let isChangeState = false;

    if (form.name.value === '') {
      this.isFormValid.isName = true;
      isChangeState = true;
    }

    if (form.date.value === '') {
      this.isFormValid.isDate = true;
      isChangeState = true;
    }

    if (form.status.value === '') {
      this.isFormValid.isStatus = true;
      isChangeState = true;
    }

    if (form.gender.value === '') {
      this.isFormValid.isGender = true;
      isChangeState = true;
    }

    if (form.location.value === '') {
      this.isFormValid.isLocation = true;
      isChangeState = true;
    }

    if (form.img.value === '') {
      this.isFormValid.isImg = true;
      isChangeState = true;
    } else {
      this.checkSizeImage(form.img.files);
      isChangeState = this.isImgSize;
    }

    if (isChangeState) {
      this.idDisabled = true;
      this.forceUpdate();
    } else {
      this.idDisabled = false;

      const curFiles = form.img.files;
      const imgUrl = curFiles ? URL.createObjectURL(curFiles[0]) : ' ';
      const newCard = {
        id: Date.now(),
        name: form.name.value,
        status: form.status.value,
        species: form.species.checked ? 'Human' : 'Alien',
        gender: form.gender.value,
        origin: {
          name: form.location.value,
        },
        location: {
          name: form.location.value,
        },
        image: imgUrl,
        created: Date.now().toString(),
      };
      this.props.callback(newCard);
      form.reset();
      this.resetisFormValids();
    }
  }
  resetisFormValids() {
    this.isFormValid = {
      isName: false,
      isDate: false,
      isStatus: false,
      isGender: false,
      isLocation: false,
      isImg: false,
    };
    this.isSubmit = false;
    this.isChangeForm = false;
    this.idDisabled = true;
    this.isImgSize = false;
    this.forceUpdate();
  }

  checkSizeImage(curFiles: FileList | null) {
    if (curFiles) {
      const file = curFiles[0];
      if (file.size > MAX_IMAGE_SIZE) {
        this.isImgSize = true;
      } else {
        this.isImgSize = false;
      }
    }
  }
  isFirstActivation() {
    if (!this.isChangeForm) {
      this.idDisabled = false;
    } else {
      this.idDisabled =
        this.isSubmit ||
        this.isFormValid.isStatus ||
        this.isFormValid.isName ||
        this.isFormValid.isDate ||
        this.isFormValid.isImg ||
        this.isFormValid.isGender ||
        this.isImgSize ||
        this.isFormValid.isLocation;
    }
    this.forceUpdate();
  }

  handleInputChange(e: React.ChangeEvent<HTMLInputElement>, keyisFormValid: string) {
    if (!this.isChangeForm) {
      this.idDisabled = false;
      this.forceUpdate();
      return;
    }
    if (keyisFormValid === 'isSpecies') {
      this.isFormValid[keyisFormValid] = !e.target.checked;
    } else {
      this.isFormValid[keyisFormValid] = !(e.target.value !== '');
    }
    if (keyisFormValid === 'isImg') {
      const curFiles = e.target.files;
      this.checkSizeImage(curFiles);
    }
    if (keyisFormValid === 'isGender') {
      this.isFormValid.isGender = !(e.target.value !== '');
    }
    this.isFirstActivation();
  }

  handleStatusChange(e: React.ChangeEvent<HTMLSelectElement>, keyisFormValid: string) {
    if (keyisFormValid === 'isStatus') {
      this.isFormValid.isStatus = !(e.target.value !== '');
    }
    if (keyisFormValid === 'isLocation') {
      this.isFormValid.isLocation = !(e.target.value !== '');
    }
    this.isFirstActivation();
  }

  render() {
    return (
      <form
        className="form"
        autoComplete="off"
        onSubmit={(e: React.FormEvent<HTMLFormElement & FormFilds>) => {
          this.handleSubmit(e);
        }}
      >
        <h3 className="form-title">Add New Character!</h3>
        <div className="input-field">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="name"
            id="name"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleInputChange(e, 'isName')
            }
          />
          {this.isFormValid.isName && <div style={{ color: 'red' }}>Enter character name</div>}
        </div>
        <div className="input-field">
          <label></label>
          <input
            type="date"
            name="date"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleInputChange(e, 'isDate')
            }
          />
          {this.isFormValid.isDate && <div style={{ color: 'red' }}>Select date</div>}
        </div>
        <div className="input-field">
          <div className="input-group">
            <label>Status:</label>
            <select
              name="status"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                this.handleStatusChange(e, 'isStatus')
              }
            >
              <option> </option>
              <option>Alive</option>
              <option>Dead</option>
              <option>unknown</option>
            </select>
            {this.isFormValid.isStatus && <div style={{ color: 'red' }}>Select status</div>}
          </div>
          <div className="input-group">
            <label>Location:</label>
            <select
              name="location"
              onChange={(e: React.ChangeEvent<HTMLSelectElement>) =>
                this.handleStatusChange(e, 'isLocation')
              }
            >
              <option> </option>
              <option>Earth</option>
              <option>Space</option>
              <option>unknown</option>
            </select>
            {this.isFormValid.isLocation && <div style={{ color: 'red' }}>Select location</div>}
          </div>
        </div>
        <div className="input-field input-gender">
          <label>
            Male
            <input
              type="radio"
              value="Male"
              name="gender"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.handleInputChange(e, 'isGender')
              }
            />
          </label>
          <label>
            Female
            <input
              type="radio"
              value="Female"
              name="gender"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.handleInputChange(e, 'isGender')
              }
            />
          </label>
          {this.isFormValid.isGender && <div style={{ color: 'red' }}>Select gender</div>}
        </div>
        <div className="input-field">
          <label className="label-check">
            Are you Human?
            <input
              type="checkbox"
              name="species"
              onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
                this.handleInputChange(e, 'isCheck')
              }
            />
            <span></span>
          </label>
        </div>
        <div className="input-field">
          <label>Link to the character{"'"}s image</label>
          <input
            type="file"
            name="img"
            accept="image/*"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              this.handleInputChange(e, 'isImg')
            }
          />
          {this.isFormValid.isImg && <div style={{ color: 'red' }}>Upload image</div>}
          {this.isImgSize && <div style={{ color: 'red' }}>Maximum image size 512 KB</div>}
        </div>
        <input className="submit" type="submit" value="Submit" disabled={this.idDisabled} />
      </form>
    );
  }
}
export default Forms;
