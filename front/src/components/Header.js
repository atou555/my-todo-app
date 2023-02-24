import React from 'react';
import logo from '../images/logo.png';
import Navbar from './Navbar';

function Header() {
  return (
    <header className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <Navbar />
    </header>
  );
}

export default Header;