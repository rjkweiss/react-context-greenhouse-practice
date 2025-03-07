# Greenhouse Climate Control App

The Greenhouse Climate Control App is a React-based application that allows users to monitor and adjust climate conditions (temperature and humidity) within a greenhouse. It features interactive controls, live climate stats, and a theme-based (day/night) UI.

## Features

- Real-time temperature and humidity adjustment with ```rc-slider``` package
- Light switch to toggle between day and night theme
- Climate statistics panel displaying current conditions
- Modular & reusable component architecture
- Navigation system for easy access to the climate controls

## Project Setup

1. Clone the repository
2. Install dependencies
3. Start development server

## Application Structure
```
/src
├── components
│   ├── ClimateSlider
│   │   ├── ClimateSlider.jsx
│   │   ├── ClimateSlider.css
│   ├── ClimateStats
│   │   ├── ClimateStats.jsx
│   │   ├── ClimateStats.css
│   ├── LightSwitch
│   │   ├── LightSwitch.jsx
│   │   ├── LightSwitch.css
│   ├── Thermometer
│   │   ├── Thermometer.jsx
│   ├── Hygrometer
│   │   ├── Hygrometer.jsx
│   ├── Navigation
│   │   ├── Navigation.jsx
│   │   ├── Navigation.css
│   ├── Greenhouse
│   │   ├── Greenhouse.jsx
│   │   ├── Greenhouse.css
├── context
│   ├── ClimateContext.js
│   ├── ThemeContext.js
├── App.jsx
├── index.css
├── main.jsx
└── assets
    ├── greenhouse-day.jpg
    ├── greenhouse-night.jpg
```

## Component Breakdown

### App.jsx
- Sets up navigation bar and routes.
- Loads ```Greenhouse```, ```Thermometer```, and ```Hygrometer``` components for routing.

### Navigation.jsx
- Provides navigation links to different components.
- Uses ```react-router-dom``` for client-side routing

### Greenhouse.jsx
- Displays the greenhouse image based on user selected theme (day/night mode).
- Includes ```LightSwitch``` and ```ClimateStats``` components for easy control.

### ClimateSlider.jsx
- Reusable slider component for adjusting climate values.
- Uses ```rc-slider``` for a vertical slider functionality.

### Thermometer.jsx & Hygrometer.jsx
- Each of these components import ```ClimateSlider``` and interacts with ```ClimateContext``` to adjust their respective values based on user interactions.

### ClimateStats.jsx
- Displays live climate data (current temperature & humidity) from ```ClimateContext```.

### LightSwitch.jsx
- Allows toggling between day and night modes using ```ThemeContext```.

### main.jsx
- Wraps the entire application inside ```ThemeProvider```, ```ClimateProvider```, and ```BrowserRouter```.
- Uses ```StrictMode`` for catching potential issues in React components.

## State Management
- ```ClimateContext.js``` manages temperature and humidity states globally.
- ```ThemeContext.js``` handles theme switching between day and night modes.

## Future Improvements
- Implement animations for a smoother UI
- Improve accessibility and mobile responsiveness
- consolidate styles into a more maintainable structure (refactor global styles)
- Add a real API backend

## License
- This project is open-source under the MIT License


















