import React from 'react';

const Card = props => {
  return (
    <div className='card'>
      <img src={props.flag} alt='Country flag' className='card-image' />
      <div className='card-content'>
        <div>Name: {props.name}</div>
        <div>Population: {props.population}</div>
        <div>Exchange rate: {props.rate ? props.rate : ''}</div>
      </div>
    </div>
  );
};

export default Card;
