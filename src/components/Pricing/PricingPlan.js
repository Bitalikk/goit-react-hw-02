import React from 'react';
import PropTypes from 'prop-types';
import PricingItem from './PricingItem';
import styles from './Pricing.module.css';

const PricingPlan = ({ items }) => (
  <ul className={styles.pricingPlan}>
    {items.map(item => (
      <li key={item.id} className={styles.item}>
        <PricingItem {...item} />
      </li>
    ))}
  </ul>
);

PricingPlan.propTypes = {
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      label: PropTypes.string,
      icon: PropTypes.string,
      capacity: PropTypes.string,
      price: PropTypes.number,
      description: PropTypes.string,
    }),
  ).isRequired,
};

export default PricingPlan;
