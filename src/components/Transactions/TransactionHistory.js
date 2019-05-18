import React from 'react';
import PropTypes from 'prop-types';
import styles from './TransactionHistory.module.css';

const TransactionHistory = ({ items }) => (
  <table className={styles.history}>
    <thead>
      <tr className={styles.row}>
        <th className={styles.title}>Type</th>
        <th className={styles.title}>Amount</th>
        <th className={styles.title}>Currency</th>
      </tr>
    </thead>

    <tbody className={styles.tableBody}>
      {items.map(item => (
        <tr key={item.id} className={styles.row}>
          <td className={styles.col}>
            {item.type.charAt(0).toUpperCase() + item.type.substring(1, 20)}
          </td>
          <td className={styles.col}>{item.amount}</td>
          <td className={styles.col}>{item.currency}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

TransactionHistory.propTypes = {
  items: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default TransactionHistory;
