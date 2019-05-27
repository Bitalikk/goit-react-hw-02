import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { validateAll } from 'indicative';
import shortid from 'shortid';
import ErrorNotification from './ErrorNotification';

const rules = {
  login: 'required|string',
  email: 'required|email',
  password: 'required|string|min:6',
};

const messages = {
  'login.required': 'Please choose a unique username for your account',
  'email.required': 'Enter valid email address',
  'email.email': 'Email is invalid',
  'password.required': 'Enter valid password',
  'password.min': 'Password must be at least 6 characters long',
};

const Gender = {
  MALE: 'male',
  FEMALE: 'female',
};

export default class SignUpForm extends Component {
  state = {
    login: '',
    email: '',
    password: '',
    agreed: false,
    gender: null,
    age: '',
    errors: null,
  };

  static propTypes = {
    onSubmit: PropTypes.func.isRequired,
  };

  loginInputId = shortid.generate();

  emailInputId = shortid.generate();

  passwordInputId = shortid.generate();

  checkboxInputId = shortid.generate();

  radioMaleInputId = shortid.generate();

  radioFemaleInputId = shortid.generate();

  ageInputId = shortid.generate();

  handleChange = e => {
    const { name, value, type, checked } = e.target;

    this.setState({
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  handleSubmit = e => {
    e.preventDefault();

    const { login, email, password } = this.state;

    validateAll({ login, email, password }, rules, messages)
      .then(() => {
        this.props.onSubmit({ ...this.state });
        this.reset();
      })
      .catch(errors => {
        const formattedErrors = {};

        errors.forEach(error => {
          formattedErrors[error.field] = error.message;
        });

        this.setState({
          errors: formattedErrors,
        });
      });
  };

  reset = () => {
    this.setState({
      login: '',
      email: '',
      password: '',
      agreed: false,
      gender: null,
      age: '',
    });
  };

  render() {
    const { login, email, password, agreed, gender, age, errors } = this.state;

    return (
      <form onSubmit={this.handleSubmit}>
        Login:
        <label htmlFor={this.loginInputId}>
          <input
            type="text"
            value={login}
            onChange={this.handleChange}
            id={this.loginInputId}
            name="login"
          />
          {errors && <ErrorNotification label={errors.login} />}
        </label>
        <br />
        <label htmlFor={this.emailInputId}>
          Email:
          <input
            type="email"
            value={email}
            onChange={this.handleChange}
            id={this.emailInputId}
            name="email"
          />
          {errors && <ErrorNotification label={errors.email} />}
        </label>
        <br />
        <label htmlFor={this.passwordInputId}>
          Password:
          <input
            type="password"
            value={password}
            onChange={this.handleChange}
            id={this.passwordInputId}
            name="password"
          />
          {errors && <ErrorNotification label={errors.password} />}
        </label>
        <br />
        <label htmlFor={this.checkboxInputId}>
          Agree to terms
          <input
            type="checkbox"
            checked={agreed}
            onChange={this.handleChange}
            id={this.checkboxInputId}
            name="agreed"
          />
          {errors && <ErrorNotification label={errors.agreed} />}
        </label>
        <br />
        <section>
          <h2>Choose your gender</h2>
          <label htmlFor={this.radioMaleInputId}>
            Male
            <input
              type="radio"
              checked={gender === Gender.MALE}
              name="gender"
              value={Gender.MALE}
              onChange={this.handleChange}
              id={this.radioMaleInputId}
            />
          </label>
          <label htmlFor={this.radioFemaleInputId}>
            Female
            <input
              type="radio"
              checked={gender === Gender.FEMALE}
              name="gender"
              value={Gender.FEMALE}
              onChange={this.handleChange}
              id={this.radioFemaleInputId}
            />
          </label>
        </section>
        <br />
        <label>
          Choose your age group
          <select name="age" value={age} onChange={this.handleChange}>
            <option value="" disabled>
              ...
            </option>
            <option value="18-25">18-25</option>
            <option value="26-35">26-35</option>
            <option value="36+">36+</option>
          </select>
        </label>
        <br />
        <button type="submit" id={this.signInputId}>
          Sign as {login}
        </button>
      </form>
    );
  }
}
