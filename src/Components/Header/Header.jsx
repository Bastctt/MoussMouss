import React from 'react';
import './Header.css';

function Header () {
  return (
    <nav className='container-nav'>
      <span class="material-symbols-outlined iconHome">home</span>
      <span class="material-symbols-outlined iconSearch">search</span>
      <span class="material-symbols-outlined iconShop">shopping_cart</span>
      <span class="material-symbols-outlined iconUser">account_circle</span>
    </nav>
  )
};

export default Header;