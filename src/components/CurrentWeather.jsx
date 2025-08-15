import React from 'react';
import styles from './Dashboard.module.css';
import WeatherIcon from './WeatherIcon';
import { WiSunrise, WiSunset, WiStrongWind } from 'react-icons/wi';
import { BsSun } from 'react-icons/bs';

const CurrentWeather = ({ data, astro, location }) => {
    // This function formats the date and time string from the API
    const formatDateTime = (dateTimeString) => {
        const date = new Date(dateTimeString);
        const options = {
            weekday: 'long',
            year: 'numeric',
            month: 'long',
            day: 'numeric',
            hour: 'numeric',
            minute: '2-digit',
            hour12: true,
        };
        return date.toLocaleString([], options);
    };

    return (
        <div className={`${styles.card} ${styles.currentWeatherCard}`}>
            {/* This is the new element for the date and time */}
            <p className={styles.localTime}>{formatDateTime(location.localtime)}</p>

            <p className={styles.mainTemp}>{Math.round(data.temp_c)}°</p>
            <div className={styles.mainIconContainer}>
                <WeatherIcon code={data.condition.code} isDay={data.is_day} />
                <p className={styles.mainDescription}>{data.condition.text}</p>
            </div>
            <div className={styles.detailsGrid}>
                <div className={styles.detailItem} title="Sunrise"><WiSunrise /><span>{astro.sunrise}</span></div>
                <div className={styles.detailItem} title="Sunset"><WiSunset /><span>{astro.sunset}</span></div>
                <div className={styles.detailItem} title="UV Index"><BsSun /><span>UV: {data.uv}</span></div>
                <div className={styles.detailItem} title="Wind Speed"><WiStrongWind /><span>{data.wind_kph} kph</span></div>
            </div>
        </div>
    );
};

export default CurrentWeather;