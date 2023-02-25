import React from 'react';
import Navbar from './Navbar';
import logo from '../images/logo.png';

const Header = () => {
  return (
    <header>
      <div className="logo">
        <img src={logo} alt="Logo de l'application" />
      </div>
      <Navbar />
    </header>
  );
};

export default Header;
