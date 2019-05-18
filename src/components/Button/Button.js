import React from 'react';
// import classNames from 'classnames/bind';
import styled from 'styled-components';
import PropTypes from 'prop-types';
// import styles from './Button.module.css';

// classnames/bind
// const cx = classNames.bind(styles);

// styled-components
const StyledButton = styled.button`
  display: inline-flex;
  margin: 0 4px;
  padding: 8px 24px;
  border: 0;
  border-radius: 2px;
  font-size: 14px;
  font-family: inherit;
  background-color: teal;
  transition: background-color 250ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;

  color: ${props => (props.disabled ? 'red' : 'blue')};

  :hover,
  :focus {
    background-color: #1976d2;
  }
`;

const Button = ({ type = 'button', label, disabled }) => (
  // ==================================classNames
  // const classes = cx({
  // 	button: true,
  // 	disabled: disabled,
  // })
  // =========================================Module styles
  // const btnClasses = [styles.button];

  // if(disabled) {
  // 	btnClasses.push(styles.disabled);
  // }

  <StyledButton type={type} disabled={disabled}>
    {label}
  </StyledButton>
);

Button.defaultProps = {
  label: '',
  disabled: false,
};

Button.propTypes = {
  type: PropTypes.string.isRequired,
  label: PropTypes.string,
  disabled: PropTypes.bool,
};

export default Button;
