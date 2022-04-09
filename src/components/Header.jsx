import React from 'react';
import '../styles/Header.css';
import Buttons from './Buttons';
import Me from '../assets/me31.png';
import HeaderSocials from './HeaderSocials';

function Header() {
  return (
    <header>
      <div className="container header__container">
        <h5>Hello I'm</h5>
        <h1>Muchiri Kennedy</h1>
        <h5 className="text-light">Software Engineer</h5>
        <Buttons />

        <div className="me">
          <img className='pic' src={Me} alt="Muchiri"/>
        </div>

        <a href='#contact' className='scroll__down'>Scroll Down</a>
        <HeaderSocials />

      </div>
    </header>
  )
}

export default Header