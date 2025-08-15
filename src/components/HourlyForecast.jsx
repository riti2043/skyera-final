import React from 'react';
import styles from './Dashboard.module.css';
import WeatherIcon from './WeatherIcon';

const HourlyForecast = ({ data, currentTime }) => {
    const futureHours = data.filter(hour => hour.time_epoch > currentTime);
    return (
        <div className={`${styles.card} ${styles.hourlyCard}`}>
            <h3 className={styles.cardTitle}>Hourly Forecast</h3>
            <div className={styles.hourlyScroller}>
                {futureHours.slice(0, 24).map(hour => (
                    <div key={hour.time_epoch} className={styles.hourItem}>
                        <p>{new Date(hour.time_epoch * 1000).toLocaleTimeString([], { hour: 'numeric', hour12: true })}</p>
                        <WeatherIcon code={hour.condition.code} isDay={hour.is_day} isSmall={true} />
                        <p className={styles.hourTemp}>{Math.round(hour.temp_c)}°</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default HourlyForecast;