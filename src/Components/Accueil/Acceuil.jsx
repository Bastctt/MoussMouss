import React, { useEffect, useState } from 'react';
import './Acceuil.css';
import Header from '../../Components/Header/Header.jsx';
import Wash from '../../Assets/iconWash3.png';

function Acceuil() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <section className='section-acceuil'>
      <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
        <Header />
        <div className='container-card'>
          <div className='card1-washing'>
            <img className='icon' src={Wash}/>         
            <p className='card-text'>Washing & Clean </p>
            <button className='card-button'>Reservation</button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Acceuil;





