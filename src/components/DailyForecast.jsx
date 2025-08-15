import React from 'react';
import styles from './Dashboard.module.css';
import WeatherIcon from './WeatherIcon';

const DailyForecast = ({ data }) => {
    // This function now gets both the day and the date
    const getFormattedDate = (dateString) => {
        const date = new Date(dateString);
        const weekday = date.toLocaleDateString([], { weekday: 'long' });
        // Formats the date to "Month Day", e.g., "Aug 16"
        const monthDay = date.toLocaleDateString([], { month: 'short', day: 'numeric' });
        return { weekday, monthDay };
    };

    return (
        <div className={`${styles.card} ${styles.dailyCard}`}>
            <h3 className={styles.cardTitle}>5-Day Forecast</h3>
            <div className={styles.dailyList}>
                {data.slice(1).map(day => {
                    const { weekday, monthDay } = getFormattedDate(day.date);
                    return (
                        <div key={day.date_epoch} className={styles.dayItem}>
                            <div className={styles.dayNameContainer}>
                                <p className={styles.dayName}>{weekday}</p>
                                {/* This is the new line for the date */}
                                <p className={styles.dayDate}>{monthDay}</p>
                            </div>
                            <WeatherIcon code={day.day.condition.code} isDay={1} isSmall={true} />
                            <p className={styles.dayTemps}>
                                <span>{Math.round(day.day.maxtemp_c)}°</span> / <span>{Math.round(day.day.mintemp_c)}°</span>
                            </p>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default DailyForecast;