import React, { useEffect, useState } from 'react';
import './Acceuil.css';
import Header from '../../Components/Header/Header.jsx';
import Logo from '../../Assets/Design sans titre (3).png';

function Acceuil() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='section-acceuil'>
      <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <Header />
        <div className="logo">
        <span class="material-symbols-outlined burger">menu</span>
        <img src={Logo} className="logoMouss" alt='Logo'/>
        </div>
        <div className='container-card'>
          <div className="card-presentation">
          </div>
          <div className='card1-washing'>
            <img className='icon' alt="icon" />         
            <p className='card-text'>Washing & Clean </p>
            <button className='card-button'>Take a wash !</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acceuil;





