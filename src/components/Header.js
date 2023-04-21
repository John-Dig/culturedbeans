import React from 'react';
import coffeePlant from '../img/coffeePlant.jpeg';

function Header() {
  return (
      <div className='header'>
        <div className='header_left'>
          <img className='header_img' src={coffeePlant} alt="Coffee Plant" />
        </div>
        <div className='header_center'>
          <div className='header_content'>
            <h1>Cultured Beans</h1>
            <p>Enjoy the ambiance, you deserve it Fancy Pants.</p>
          </div>
        </div>
      </div>
  );
}

export default Header;