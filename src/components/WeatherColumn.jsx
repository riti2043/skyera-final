import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import styles from './Dashboard.module.css';
import { FiSearch } from 'react-icons/fi';
import CurrentWeather from './CurrentWeather';
import HourlyForecast from './HourlyForecast';
import DailyForecast from './DailyForecast';
import AirQuality from './AirQuality';

const WeatherColumn = () => {
    const API_KEY = "809f012e7688472a956154023251508";

    const [query, setQuery] = useState('');
    const [searchLocation, setSearchLocation] = useState('');
    const [weatherData, setWeatherData] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const [initialLoad, setInitialLoad] = useState(true); // Track initial load

    const fetchAllWeatherData = useCallback(async (locationQuery) => {
        if (!locationQuery) return;
        setLoading(true);
        setError(null);
        setWeatherData(null);
        try {
            const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=${API_KEY}&q=${locationQuery}&days=6&aqi=yes&alerts=no`);
            if (!response.ok) {
                const errorData = await response.json();
                throw new Error(errorData.error.message || "City not found.");
            }
            const data = await response.json();
            setWeatherData(data);
        } catch (err) {
            setError(err.message);
        } finally {
            setLoading(false);
        }
    }, [API_KEY]);

    useEffect(() => {
        if (searchLocation) {
            fetchAllWeatherData(searchLocation);
        }
    }, [searchLocation, fetchAllWeatherData]);

    useEffect(() => {
        const success = (position) => {
            const latLon = `${position.coords.latitude},${position.coords.longitude}`;
            setSearchLocation(latLon);
            setInitialLoad(false);
        };
        const error = () => {
            // If geolocation fails, stop loading and show a prompt
            setLoading(false);
            setInitialLoad(false);
            setError("Please search for a city to begin.");
        };
        navigator.geolocation.getCurrentPosition(success, error);
    }, []);

    const handleSearch = (e) => {
        e.preventDefault();
        if (query) {
            setSearchLocation(query);
            setError(null); // Clear previous errors on new search
        }
    };

    return (
        <main className={styles.weatherColumn}>
            <form onSubmit={handleSearch} className={styles.searchForm}>
                <input
                    type="text"
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder="Search for a city..."
                    className={styles.searchInput}
                />
                <button type="submit" className={styles.searchButton}><FiSearch /></button>
            </form>

            <AnimatePresence mode="wait">
                {/* Show loader only during active fetching, not on initial load without permission */}
                {loading && !initialLoad && (
                    <motion.div key="loader" className={styles.message} exit={{ opacity: 0 }}>Loading weather data...</motion.div>
                )}
                {error && !loading && (
                    <motion.div key="error" className={styles.message} exit={{ opacity: 0 }}>{error}</motion.div>
                )}
                {weatherData && !loading && (
                    <motion.div
                        key={weatherData.location.name}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <h2 className={styles.cityName}>{weatherData.location.name}, {weatherData.location.country}</h2>
                        <div className={styles.dashboardGrid}>
                            <CurrentWeather data={weatherData.current} astro={weatherData.forecast.forecastday[0].astro} location={weatherData.location} />
                            <HourlyForecast data={weatherData.forecast.forecastday[0].hour} currentTime={weatherData.location.localtime_epoch} />
                            <DailyForecast data={weatherData.forecast.forecastday} />
                            <AirQuality data={weatherData.current.air_quality} />
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </main>
    );
};

export default WeatherColumn;