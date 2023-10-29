import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Acceuil from '../../Components/Accueil/Acceuil.jsx';

function RoutesConfig() {
    return (
        <Routes>
            <Route path="/Acceuil" element={<Acceuil />} />
        </Routes>
    );
}

export default RoutesConfig;