import React from 'react';
import styles from './Dashboard.module.css';
import WeatherIcon from './WeatherIcon';

const HourlyForecast = ({ data, currentTime }) => {
    // Filter for hours that are in the future
    const futureHours = data.filter(hour => hour.time_epoch > currentTime);
    
    return (
        <div className={`${styles.card} ${styles.hourlyCard}`}>
            <h3 className={styles.cardTitle}>Next 8 Hours</h3>
            {/* We now use hourlyGrid instead of hourlyScroller */}
            <div className={styles.hourlyGrid}>
                {/* We now slice to show only the next 8 hours */}
                {futureHours.slice(0, 8).map(hour => (
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