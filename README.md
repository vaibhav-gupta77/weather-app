# WeatherNow

A responsive weather dashboard built with vanilla HTML, CSS, and JavaScript. It provides live weather conditions, hourly and multi-day forecasts, a clickable map, search suggestions, and location-based weather data using public APIs.

## Overview

WeatherNow is a frontend-only weather application that lets users:

- Search for any city worldwide
- Use browser geolocation to check local weather
- Toggle between Celsius and Fahrenheit
- View current conditions, humidity, wind speed, pressure, UV index, and feels-like temperature
- Explore a 24-hour hourly forecast and a 5-day outlook
- Click on a map to fetch weather for any location
- Reuse recent city searches from local browser storage

## Features

- Real-time weather data using Open-Meteo APIs
- City autocomplete and search suggestions
- Location access support for local weather
- Dynamic weather icons and conditions
- Responsive glassmorphism-inspired UI
- Interactive map with Leaflet
- Search history saved in browser localStorage
- Auto-refresh for the current searched city
- Air quality information when available

## Tech Stack

- HTML5
- CSS3
- JavaScript (vanilla ES6+)
- Leaflet for map rendering
- Open-Meteo Geocoding, Forecast, and Air Quality APIs
- Font Awesome and Google Fonts

## Project Structure

Weather App/
├── index.html
├── style.css
├── script.js
├── README.md


### Prerequisites

- A modern web browser
- Internet connection for API access

### Run the app locally

You can either:

1. Open index.html directly in a browser, or
2. Serve the project locally with a simple web server.

Example:

```bash
cd "Weather App"
python -m http.server 8000
```

Then open:

```text
http://localhost:8000
```

## Usage

1. Type a city name in the search box.
2. Select a suggestion or press Enter to fetch weather.
3. Use the location button to get weather for your current position.
4. Click on the map to check weather for another location.
5. Toggle the temperature unit button to switch between °C and °F.
6. Browse hourly and daily forecast sections for more details.

## APIs Used

This app uses Open-Meteo public APIs:

- Geocoding API for city search and suggestions
- Forecast API for current conditions and forecasts
- Air Quality API for AQI information
- Reverse geocoding for map-based search results

No API key is required for these endpoints.

## Notes

- The app depends on browser permissions for geolocation access.
- If a map or API request fails, the user interface shows a friendly fallback message.
- The app stores search history in the browser, so history is device/browser-specific.

## Future Improvements

- Add dark/light theme toggle
- Improve map layer switching and full-screen behavior
- Add hourly chart styling refinements
- Add weather unit persistence across sessions
- Implement more detailed weather alerts and radar data

## License

This project does not currently include a license file. If you are publishing it publicly, add a license that matches your intended usage.

## Author

Built as a frontend weather app project for learning and demonstration purposes.
