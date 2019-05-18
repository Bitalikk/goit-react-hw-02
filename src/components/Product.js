import React from 'react';
import PropTypes from 'prop-types';

const Product = ({ imgUrl, name, price, alt }) => (
  <div className="product">
    <img className="image" src={imgUrl} alt={alt} width="640" />
    <h2 className="name">{name}</h2>
    <p className="price">Price: {price}$</p>
    <button className="btn" type="button">
      Add to cart
    </button>
  </div>
);

Product.defaultProps = {
  alt: 'product image',
};

Product.propTypes = {
  imgUrl: PropTypes.string.isRequired,
  alt: PropTypes.string,
  name: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
};

export default Product;
