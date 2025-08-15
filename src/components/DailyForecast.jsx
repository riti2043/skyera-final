import React from 'react';
import styles from './Dashboard.module.css';
import WeatherIcon from './WeatherIcon';

const DailyForecast = ({ data }) => {
    return (
        <div className={`${styles.card} ${styles.dailyCard}`}>
            <h3 className={styles.cardTitle}>5-Day Forecast</h3>
            <div className={styles.dailyList}>
                {data.slice(1).map(day => (
                    <div key={day.date_epoch} className={styles.dayItem}>
                        <p className={styles.dayName}>{new Date(day.date).toLocaleDateString([], { weekday: 'long' })}</p>
                        <WeatherIcon code={day.day.condition.code} isDay={1} isSmall={true} />
                        <p className={styles.dayTemps}>
                            <span>{Math.round(day.day.maxtemp_c)}°</span> / <span>{Math.round(day.day.mintemp_c)}°</span>
                        </p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default DailyForecast;