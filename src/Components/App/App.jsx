import React, { useState, useEffect, useCallback } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import RoutesConfig from '../../Components/RoutesConfig/RoutesConfig';
import '../../Style.css/style.css';
import Loading from '../../Components/Loading/Loading.jsx';

function App() {
    const [isLoading, setIsLoading] = useState(true);

    const handleAnimationEnd = useCallback(() => {
        setIsLoading(false);
    }, []);

    useEffect(() => {
        const timerId = setTimeout(() => {
            setIsLoading(false);
        }, 3000);

        return () => {
            clearTimeout(timerId);
        };
    }, []);

    return (
        <Router>
            <div className={`loader-container ${isLoading ? '' : 'fade-out'}`}>
                <Loading onAnimationEnd={handleAnimationEnd} />
            </div>
            {!isLoading && <RoutesConfig />}
        </Router>
    );
}

export default App;

