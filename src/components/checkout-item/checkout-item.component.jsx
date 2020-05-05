import React from 'react';
import { connect } from 'react-redux';
import './checkout-item.styles.scss';

const CheckoutItem = ({ cartItem: { imageUrl, name, price, quantity } }) => {
  return (
    <div className='checkout-item'>
      <div className="image-container">
        <img src={imageUrl} alt="item"/>
      </div>
      <span className='name'>{name}</span>
      <span className='quantity'>{price}</span>
      <span className='price'>{quantity}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  )
};

export default CheckoutItem;
