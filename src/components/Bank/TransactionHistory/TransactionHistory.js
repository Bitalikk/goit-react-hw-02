import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ history }) => (
  <table className={styles.history}>
    <thead>
      <tr>
        <th>Transaction</th>
        <th>Amount</th>
        <th>Date</th>
      </tr>
    </thead>
    <tbody>
      {history.length &&
        history.map(item => (
          <tr key={item.id}>
            <td>{item.type}</td>
            <td>{item.amount}$</td>
            <td>{item.date}</td>
          </tr>
        ))}
    </tbody>
  </table>
);

TransactionHistory.defaultProps = {
  history: [],
};

TransactionHistory.propTypes = {
  history: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.number.isRequired,
      date: PropTypes.string.isRequired,
    }),
  ),
};

export default TransactionHistory;
