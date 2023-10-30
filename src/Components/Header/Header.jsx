import React from 'react';
import './Header.css';
import userTest from '../../Assets/3d-illustration-bald-person-with-glasses_23-2149436184.avif';

function Header () {
  return (
    <nav className='container-nav'>
      <span class="material-symbols-outlined">menu</span>
      <span className='logo'>Mousse²</span>
      <span className='userProfil'>
        <img className='imgUser' src={userTest} alt='User Profile'/>
      </span>
    </nav>
  )
};

export default Header;