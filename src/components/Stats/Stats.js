import React from 'react';
import PropTypes from 'prop-types';
import styles from './Stats.module.css';

const color = () => {
  return `rgb(${Math.floor(Math.random() * 255)},
  ${Math.floor(Math.random() * 255)}, ${Math.floor(Math.random() * 255)})`;
};

const Stats = ({ title, stats }) => (
  <section className={styles.section}>
    {title && <h2 className={styles.title}>{title.toUpperCase()}</h2>}
    <ul className={styles.list}>
      {stats.map(item => (
        <li
          className={styles.item}
          style={{ backgroundColor: color() }}
          key={item.id}
        >
          <span className={styles.label}>{item.label}</span>
          <span className={styles.per}>{item.percentage}%</span>
        </li>
      ))}
    </ul>
  </section>
);

Stats.defaultProps = {
  title: '',
};

Stats.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default Stats;
