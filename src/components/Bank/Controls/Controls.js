import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styles from './Controls.module.css';

export default class Controls extends Component {
  static propTypes = {
    onAddHistory: PropTypes.func.isRequired,
  };

  state = {
    value: '',
  };

  handleChange = e => {
    this.setState({
      value: e.target.value,
    });
  };

  reset() {
    this.setState({
      value: '',
    });
  }

  render() {
    const { value } = this.state;
    const { onAddHistory } = this.props;

    return (
      <section className={styles.controls}>
        <input
          type="number"
          placeholder="Enter sum"
          value={value}
          onChange={this.handleChange}
        />
        <button
          type="button"
          value="Deposit"
          onClick={e => {
            onAddHistory(e.target.value, value);
            this.reset();
          }}
        >
          Deposit
        </button>
        <button
          type="button"
          value="Withdraw"
          onClick={e => onAddHistory(e.target.value, value)}
        >
          Withdraw
        </button>
      </section>
    );
  }
}
