import React from 'react';
import { motion } from 'framer-motion';
import { WiDaySunny, WiNightClear, WiDayCloudy, WiNightAltCloudy, WiCloud, WiFog, WiDayRain, WiNightAltRain, WiDaySnow, WiNightAltSnow, WiDayThunderstorm, WiNightAltThunderstorm } from 'react-icons/wi';

const iconMap = {
    1000: { day: WiDaySunny, night: WiNightClear, anim: 'sunny' },
    1003: { day: WiDayCloudy, night: WiNightAltCloudy, anim: 'cloudy' },
    1006: { day: WiCloud, night: WiCloud, anim: 'cloudy' },
    1009: { day: WiCloud, night: WiCloud, anim: 'cloudy' },
    1030: { day: WiFog, night: WiFog, anim: 'cloudy' },
    1135: { day: WiFog, night: WiFog, anim: 'cloudy' },
    1147: { day: WiFog, night: WiFog, anim: 'cloudy' },
    1063: { day: WiDayRain, night: WiNightAltRain, anim: 'rainy' },
    1183: { day: WiDayRain, night: WiNightAltRain, anim: 'rainy' },
    1195: { day: WiDayRain, night: WiNightAltRain, anim: 'rainy' },
    1066: { day: WiDaySnow, night: WiNightAltSnow, anim: 'rainy' },
    1213: { day: WiDaySnow, night: WiNightAltSnow, anim: 'rainy' },
    1225: { day: WiDaySnow, night: WiNightAltSnow, anim: 'rainy' },
    1087: { day: WiDayThunderstorm, night: WiNightAltThunderstorm, anim: 'rainy' },
};

const animations = {
    sunny: { scale: [1, 1.1, 1], transition: { duration: 3, repeat: Infinity } },
    cloudy: { x: [-3, 3, -3], transition: { duration: 4, repeat: Infinity, ease: 'easeInOut' } },
    rainy: { y: [-2, 2, -2], transition: { duration: 1.5, repeat: Infinity, ease: 'easeInOut' } },
};

const WeatherIcon = ({ code, isDay, isSmall = false }) => {
    const iconEntry = iconMap[code] || iconMap[1009];
    const IconComponent = isDay ? iconEntry.day : iconEntry.night;

    return (
        <motion.div
            animate={animations[iconEntry.anim]}
            style={{ fontSize: isSmall ? '3rem' : 'clamp(6rem, 20vw, 10rem)', lineHeight: 1 }}
        >
            <IconComponent />
        </motion.div>
    );
};

export default WeatherIcon;