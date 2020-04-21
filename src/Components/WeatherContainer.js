import React, { useState } from 'react';
import '../Styles/Weather.css';

function WeatherContainer() {
    const [searchQuery, setSearchQuery] = useState('');
    const [weatherData, setWeatherData] = useState({
        temp: null,
        humidity: null,
        desc: null,
        city: null,
    })

    function updateSearchQuery(event) {
        setSearchQuery(event.target.value);
    }

    return (
        <section className="weather-container">
            <header className="weather-header">
                <h3>Weather</h3>
                <div>
                    <input
                        placeholder="Zip Code"
                        className="search-input"
                        onChange={updateSearchQuery}
                    />
                    <button className="material-icons">search</button>
                </div>
            </header>
            <section className="weather-info">
                {weatherData.temp === null ? <p>No weather to display<i className="material-icons">wb_sunny</i></p> : ''}
            </section>
        </section >
    )

}

export default WeatherContainer;



