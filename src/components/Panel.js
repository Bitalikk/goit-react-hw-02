import React from 'react';
import PropTypes from 'prop-types';

const Panel = ({ title, children }) => (
  <section>
    <h2>{title}</h2>
    {children}
  </section>
);

Panel.defaultProps = {
  title: 'UNIT',
  children: '',
};

Panel.propTypes = {
  title: PropTypes.string,
  children: PropTypes.string,
};

export default Panel;
