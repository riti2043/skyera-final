import React from 'react';
import TitleColumn from './components/TitleColumn';
import WeatherColumn from './components/WeatherColumn';
import './App.css';

function App() {
    return (
        <>
            <video autoPlay loop muted playsInline className="background-video">
                {/* This is the corrected line */}
                <source src="clouds.mp4" type="video/mp4" />
            </video>
            <div className="main-layout">
                <TitleColumn />
                <WeatherColumn />
            </div>
        </>
    );
}

export default App;
