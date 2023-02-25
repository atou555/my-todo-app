import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><a href="/">Accueil</a></li>
        <li><a href="/taches">Tâches</a></li>
        <li><a href="/categories">Catégories</a></li>
        <li><a href="/météo">Météo</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
