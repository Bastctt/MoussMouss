import React, { useEffect, useState } from 'react';
import './Acceuil.css';
import Header from '../../Components/Header/Header.jsx';

function Acceuil() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className={`fade-in ${isVisible ? 'visible' : ''}`}>
      <Header />
      <div className='container-card'>
        <div className='card1-washing'>
        </div>
        <div className='card1-washing'>
        </div>
      </div>
    </div>
  );
}

export default Acceuil;



