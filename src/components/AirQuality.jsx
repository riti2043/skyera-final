import React from 'react';
import styles from './Dashboard.module.css';

const AirQuality = ({ data }) => {
    const aqiLevels = {
        1: { label: 'Good', color: '#87E862' },
        2: { label: 'Moderate', color: '#F4E362' },
        3: { label: 'Unhealthy for Sensitive', color: '#F4B162' },
        4: { label: 'Unhealthy', color: '#F47B62' },
        5: { label: 'Very Unhealthy', color: '#D65E7D' },
        6: { label: 'Hazardous', color: '#A85E9A' },
    };
    const aqi = aqiLevels[data['us-epa-index']] || { label: 'N/A', color: '#fff' };
    return (
        <div className={`${styles.card} ${styles.aqiCard}`}>
            <h3 className={styles.cardTitle}>Air Quality</h3>
            <p className={styles.aqiLabel} style={{ color: aqi.color }}>{aqi.label}</p>
            <p className={styles.aqiValue}>US EPA Index: {data['us-epa-index']}</p>
        </div>
    );
};

export default AirQuality;