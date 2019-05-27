import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Dropdown.module.css';

export default class Dropdown extends Component {
  static defaultProps = {
    isOpen: false,
  };

  static propTypes = {
    isOpen: PropTypes.bool,
  };

  // constructor() {
  //   super();

  //   this.state = {
  //     isOpen: false,
  //   };
  // }

  state = {
    isOpen: this.props.isOpen,
  };

  handleOpen = () => {
    this.setState({ isOpen: true });
  };

  handleClose = () => {
    this.setState({ isOpen: false });
  };

  handleToggle = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen,
    }));
  };

  render() {
    const { isOpen } = this.state;

    return (
      <div className={styles.container}>
        <button
          type="button"
          className={styles.button}
          onClick={this.handleToggle}
        >
          &#9776;
        </button>

        {isOpen && (
          <div className={styles.dropdown}>
            <ul className={styles.menu}>
              <li className={styles.menuItem}>Option 1</li>
              <li className={styles.menuItem}>Option 2</li>
              <li className={styles.menuItem}>Option 3</li>
              <li className={styles.menuItem}>Option 4</li>
            </ul>
          </div>
        )}
      </div>
    )
  }
}
