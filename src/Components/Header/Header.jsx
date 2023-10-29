import React from 'react';
import './Header.css';
import userTest from '../../Assets/userTest.png';

function Header () {
  return (
    <nav className='container-nav'>
      <span class="material-symbols-outlined">menu</span>
      <span className='logo'>Mousse²</span>
      <span className='userProfil'>
        <img src={userTest} alt='User Profile'/>
      </span>
    </nav>
  )
};

export default Header;