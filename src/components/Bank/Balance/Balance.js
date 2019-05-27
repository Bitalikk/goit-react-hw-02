import React from 'react';
import PropTypes from 'prop-types';
import styles from './Balance.module.css';

const Balance = ({ balance, deposit, withdrawal }) => (
  <section className={styles.balance}>
    <span className={styles.arrows}>
      <i className={`fas fa-arrow-up ${styles.deposit}`} />
      {deposit}$
    </span>
    <span className={styles.arrows}>
      <i className={`fas fa-arrow-down ${styles.withdrawal}`} />
      {withdrawal}$
    </span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.defaultProps = {
  balance: 0,
  deposit: 0,
  withdrawal: 0,
};

Balance.propTypes = {
  balance: PropTypes.number,
  deposit: PropTypes.number,
  withdrawal: PropTypes.number,
};

export default Balance;
