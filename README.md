# Skyera - A Real-Time Weather App

**Submission for the CloudCtrl Mini Project Challenge.**

- **Live Website Link:** [https://riti2043.github.io/skyera-final/](https://riti2043.github.io/skyera-final/)
- **Demo Video Link:** [PASTE THE LINK TO YOUR DEMO VIDEO HERE]

---

## 🚀 Project Overview

Skyera is a sleek, modern weather dashboard that provides real-time weather updates with a beautiful, animated interface and a fixed video background. It was built using React and the WeatherAPI.com service.

The goal of this project was to create a user-friendly and visually appealing weather application that fulfills all the requirements of the CodeFury 8.0 warm-up challenge.

## ✨ Features

- **Real-Time Weather Data:** Get the current temperature, conditions, UV index, wind speed, sunrise, and sunset times.
- **Geolocation:** Automatically detects and displays the weather for the user's current location on page load.
- **City Search:** Manually search for any city in the world to get its weather details.
- **Hourly & Daily Forecasts:** View a scrollable hourly forecast for the next 24 hours and a 5-day forecast for the week ahead.
- **Air Quality Index:** Displays the current Air Quality Index (AQI) with a color-coded indicator.
- **Animated Icons:** Weather condition icons are subtly animated for a more dynamic user experience.
- **Responsive Design:** A two-column layout on desktop that collapses to a single, scrollable column on mobile devices.

## 🛠️ Tech Stack

- **Frontend:** React (with Vite)
- **Styling:** CSS Modules
- **Animations:** Framer Motion
- **Icons:** React Icons
- **API:** WeatherAPI.com

## ⚙️ How to Run Locally

1.  Clone the repository:
    `git clone https://github.com/riti2043/skyera-final.git`
2.  Navigate into the project directory:
    `cd skyera-final`
3.  Install dependencies:
    `npm install`
4.  Get a free API key from [WeatherAPI.com](https://www.weatherapi.com/).
5.  In the `src/components/WeatherColumn.jsx` file, paste your API key into the `API_KEY` constant.
6.  Run the development server:
    `npm run dev`
