import React from 'react';

export default function Card() {
  return (
    <div className='card'>
      <img src='img_avatar.png' alt='Avatar' className='card-image' />
      <div className='card-content'>
        <div>Name: Nigeria</div>
        <div>Population: 1324425</div>
        <div>Exchange rate: 12</div>
      </div>
    </div>
  );
}
