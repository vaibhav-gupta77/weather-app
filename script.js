// ===== Weather Code Mapping (WMO) =====
const weatherCodes = {
    0: { desc: 'Clear Sky', icon: 'sun' },
    1: { desc: 'Mainly Clear', icon: 'sun-cloud' },
    2: { desc: 'Partly Cloudy', icon: 'cloud-sun' },
    3: { desc: 'Overcast', icon: 'cloud' },
    45: { desc: 'Foggy', icon: 'fog' },
    48: { desc: 'Depositing Rime Fog', icon: 'fog' },
    51: { desc: 'Light Drizzle', icon: 'drizzle' },
    53: { desc: 'Moderate Drizzle', icon: 'drizzle' },
    55: { desc: 'Dense Drizzle', icon: 'drizzle' },
    61: { desc: 'Slight Rain', icon: 'rain' },
    63: { desc: 'Moderate Rain', icon: 'rain' },
    65: { desc: 'Heavy Rain', icon: 'rain-heavy' },
    71: { desc: 'Slight Snow', icon: 'snow' },
    73: { desc: 'Moderate Snow', icon: 'snow' },
    75: { desc: 'Heavy Snow', icon: 'snow' },
    77: { desc: 'Snow Grains', icon: 'snow' },
    80: { desc: 'Slight Showers', icon: 'rain' },
    81: { desc: 'Moderate Showers', icon: 'rain' },
    82: { desc: 'Violent Showers', icon: 'rain-heavy' },
    85: { desc: 'Snow Showers', icon: 'snow' },
    86: { desc: 'Heavy Snow Showers', icon: 'snow' },
    95: { desc: 'Thunderstorm', icon: 'thunder' },
    96: { desc: 'Thunderstorm & Hail', icon: 'thunder' },
    99: { desc: 'Thunderstorm & Hail', icon: 'thunder' }
};

// ===== SVG Icons =====
const icons = {
    sun: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="32" cy="32" r="12" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
        <g stroke="#fbbf24" stroke-width="3" stroke-linecap="round">
            <line x1="32" y1="6" x2="32" y2="12"/><line x1="32" y1="52" x2="32" y2="58"/>
            <line x1="6" y1="32" x2="12" y2="32"/><line x1="52" y1="32" x2="58" y2="32"/>
            <line x1="13.6" y1="13.6" x2="17.8" y2="17.8"/><line x1="46.2" y1="46.2" x2="50.4" y2="50.4"/>
            <line x1="13.6" y1="50.4" x2="17.8" y2="46.2"/><line x1="46.2" y1="17.8" x2="50.4" y2="13.6"/>
        </g>
    </svg>`,

    'sun-cloud': `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="22" cy="22" r="10" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
        <g stroke="#fbbf24" stroke-width="2.5" stroke-linecap="round">
            <line x1="22" y1="4" x2="22" y2="8"/><line x1="22" y1="36" x2="22" y2="40"/>
            <line x1="4" y1="22" x2="8" y2="22"/><line x1="36" y1="22" x2="40" y2="22"/>
        </g>
        <path d="M20 48h24c6.6 0 12-5.4 12-12s-5.4-12-12-12c-.6 0-1.2.1-1.8.2C40.8 18.6 34.2 14 27 14c-8.8 0-16 7.2-16 16 0 1.1.1 2.1.3 3.1C5.1 34.9 2 39.1 2 44c0 5.5 4.5 10 10 10h8" fill="#94a3b8" stroke="#64748b" stroke-width="2" opacity="0.9"/>
    </svg>`,

    'cloud-sun': `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="46" cy="18" r="8" fill="#fbbf24" stroke="#f59e0b" stroke-width="2"/>
        <g stroke="#fbbf24" stroke-width="2" stroke-linecap="round">
            <line x1="46" y1="4" x2="46" y2="8"/><line x1="46" y1="28" x2="46" y2="32"/>
            <line x1="32" y1="18" x2="36" y2="18"/><line x1="56" y1="18" x2="60" y2="18"/>
        </g>
        <path d="M16 52h28c5.5 0 10-4.5 10-10s-4.5-10-10-10c-.5 0-1 .1-1.5.2C40.7 26.4 35.2 22.5 29 22.5c-7.3 0-13.3 6-13.3 13.3 0 .9.1 1.8.2 2.6C10.3 39.1 7.5 42.6 7.5 46.5c0 4.6 3.7 8.3 8.3 8.3h.2" fill="#cbd5e1" stroke="#94a3b8" stroke-width="2"/>
    </svg>`,

    cloud: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M12 48h40c6.6 0 12-5.4 12-12s-5.4-12-12-12c-.6 0-1.2.1-1.8.2C48.8 16.6 40.2 10 30 10c-11 0-20 9-20 20 0 1.4.1 2.7.4 4C5.1 35.9 0 41.6 0 48c0 6.6 5.4 12 12 12h0" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
    </svg>`,

    fog: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8 20h48" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <path d="M12 32h40" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <path d="M16 44h32" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
        <path d="M20 56h24" stroke="#94a3b8" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

    drizzle: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 32h32c5.5 0 10-4.5 10-10s-4.5-10-10-10c-.5 0-1 .1-1.5.2C40.7 6.4 35.2 2.5 29 2.5c-7.3 0-13.3 6-13.3 13.3 0 .9.1 1.8.2 2.6C10.3 19.1 7.5 22.6 7.5 26.5c0 4.6 3.7 8.3 8.3 8.3h.2" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
        <line x1="20" y1="38" x2="18" y2="46" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="32" y1="38" x2="30" y2="46" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="44" y1="38" x2="42" y2="46" stroke="#60a5fa" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,

    rain: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28h32c5.5 0 10-4.5 10-10s-4.5-10-10-10c-.5 0-1 .1-1.5.2C40.7 2.4 35.2-1.5 29-1.5c-7.3 0-13.3 6-13.3 13.3 0 .9.1 1.8.2 2.6C10.3 15.1 7.5 18.6 7.5 22.5c0 4.6 3.7 8.3 8.3 8.3h.2" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
        <line x1="18" y1="36" x2="14" y2="48" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="32" y1="36" x2="28" y2="48" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
        <line x1="46" y1="36" x2="42" y2="48" stroke="#3b82f6" stroke-width="2.5" stroke-linecap="round"/>
    </svg>`,

    'rain-heavy': `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 26h32c5.5 0 10-4.5 10-10s-4.5-10-10-10c-.5 0-1 .1-1.5.2C40.7 .4 35.2-3.5 29-3.5c-7.3 0-13.3 6-13.3 13.3 0 .9.1 1.8.2 2.6C10.3 13.1 7.5 16.6 7.5 20.5c0 4.6 3.7 8.3 8.3 8.3h.2" fill="#64748b" stroke="#475569" stroke-width="2"/>
        <line x1="14" y1="34" x2="10" y2="50" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        <line x1="26" y1="34" x2="22" y2="50" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        <line x1="38" y1="34" x2="34" y2="50" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
        <line x1="50" y1="34" x2="46" y2="50" stroke="#2563eb" stroke-width="3" stroke-linecap="round"/>
    </svg>`,

    snow: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28h32c5.5 0 10-4.5 10-10s-4.5-10-10-10c-.5 0-1 .1-1.5.2C40.7 2.4 35.2-1.5 29-1.5c-7.3 0-13.3 6-13.3 13.3 0 .9.1 1.8.2 2.6C10.3 15.1 7.5 18.6 7.5 22.5c0 4.6 3.7 8.3 8.3 8.3h.2" fill="#94a3b8" stroke="#64748b" stroke-width="2"/>
        <circle cx="18" cy="42" r="2.5" fill="#e2e8f0"/><circle cx="32" cy="48" r="2.5" fill="#e2e8f0"/>
        <circle cx="46" cy="42" r="2.5" fill="#e2e8f0"/><circle cx="24" cy="54" r="2" fill="#e2e8f0"/>
        <circle cx="40" cy="54" r="2" fill="#e2e8f0"/>
    </svg>`,

    thunder: `<svg viewBox="0 0 64 64" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M16 28h32c5.5 0 10-4.5 10-10s-4.5-10-10-10c-.5 0-1 .1-1.5.2C40.7 2.4 35.2-1.5 29-1.5c-7.3 0-13.3 6-13.3 13.3 0 .9.1 1.8.2 2.6C10.3 15.1 7.5 18.6 7.5 22.5c0 4.6 3.7 8.3 8.3 8.3h.2" fill="#64748b" stroke="#475569" stroke-width="2"/>
        <path d="M30 30L22 44h10l-4 14 16-16h-10l6-12H30z" fill="#fbbf24" stroke="#f59e0b" stroke-width="1.5" stroke-linejoin="round"/>
    </svg>`
};

// ===== DOM Elements =====
const cityInput = document.getElementById('cityInput');
const suggestionsEl = document.getElementById('suggestions');
const searchBtn = document.getElementById('searchBtn');
const locationBtn = document.getElementById('locationBtn');
const unitToggle = document.getElementById('unitToggle');
const unitLabel = document.getElementById('unitLabel');
const tempUnit = document.getElementById('tempUnit');
const searchHistoryEl = document.getElementById('searchHistory');
const loading = document.getElementById('loading');
const error = document.getElementById('error');
const errorMsg = document.getElementById('errorMsg');
const retryBtn = document.getElementById('retryBtn');
const weatherContent = document.getElementById('weatherContent');
const initialState = document.getElementById('initialState');
const refreshIndicator = document.getElementById('refreshIndicator');
const fullscreenBtn = document.getElementById('fullscreenBtn');
const mapViewToggle = document.getElementById('mapViewToggle');
const mapErrorEl = document.getElementById('mapError');
const reloadMapBtn = document.getElementById('reloadMapBtn');

// ===== State =====
let lastSearchedCity = '';
let currentUnit = 'C';
let lastWeatherData = null;
let lastCityInfo = null;
let lastTimezone = '';
let map = null;
let currentMarker = null;
let lastCoords = { lat: 51.5074, lon: -0.1278 };
let autoRefreshInterval = null;
const MAX_HISTORY = 5;
let suggestionAbortController = null;
let debounceTimer = null;
let selectedSuggestionIndex = -1;
let currentSuggestions = [];
let mapInitialized = false;
let isMapFullscreen = false;
let currentMapView = 'satellite'; // 'satellite' or 'dark'
let satelliteLayer = null;
let labelsLayer = null;
let darkLayer = null;

// ===== Helper Functions =====
function showLoading() {
    loading.classList.remove('hidden');
    error.classList.add('hidden');
    weatherContent.classList.add('hidden');
    initialState.classList.add('hidden');
}

function showError(message) {
    loading.classList.add('hidden');
    error.classList.remove('hidden');
    weatherContent.classList.add('hidden');
    initialState.classList.add('hidden');
    errorMsg.textContent = message;
}

function showWeather() {
    loading.classList.add('hidden');
    error.classList.add('hidden');
    weatherContent.classList.remove('hidden');
    initialState.classList.add('hidden');
    refreshIndicator.classList.remove('hidden');
}

function getWeatherIcon(code) {
    const mapping = weatherCodes[code] || { icon: 'cloud' };
    return icons[mapping.icon] || icons.cloud;
}

function getWeatherDesc(code) {
    return (weatherCodes[code] || { desc: 'Unknown' }).desc;
}

function convertTemp(c) {
    return currentUnit === 'F' ? Math.round(c * 9/5 + 32) : Math.round(c);
}

function tempSuffix() {
    return currentUnit === 'F' ? '°F' : '°C';
}

function formatTime(isoTime, timezone) {
    const date = new Date(isoTime);
    return new Intl.DateTimeFormat('en-US', {
        hour: '2-digit', minute: '2-digit', hour12: true, timeZone: timezone
    }).format(date);
}

function getLocalDateTime(timezone) {
    const now = new Date();
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'long', year: 'numeric', month: 'long', day: 'numeric',
        hour: '2-digit', minute: '2-digit', second: '2-digit',
        hour12: true, timeZone: timezone
    }).format(now);
}

function getLocalDate(timezone) {
    const now = new Date();
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'short', month: 'short', day: 'numeric', timeZone: timezone
    }).format(now);
}

function getDayName(dateStr, timezone) {
    const date = new Date(dateStr + 'T00:00:00');
    return new Intl.DateTimeFormat('en-US', {
        weekday: 'short', timeZone: timezone
    }).format(date);
}

function isValidCoord(val) {
    const num = parseFloat(val);
    return !isNaN(num) && isFinite(num);
}

function safeCoord(val) {
    const num = parseFloat(val);
    return isNaN(num) ? 0 : num;
}

function windDirectionLabel(deg) {
    const directions = ['N', 'NNE', 'NE', 'ENE', 'E', 'ESE', 'SE', 'SSE', 'S', 'SSW', 'SW', 'WSW', 'W', 'WNW', 'NW', 'NNW'];
    return directions[Math.round(deg / 22.5) % 16];
}

// ===== Autocomplete / Suggestions =====
function hideSuggestions() {
    suggestionsEl.classList.add('hidden');
    selectedSuggestionIndex = -1;
    currentSuggestions = [];
}

function showSuggestions(results) {
    if (!results || results.length === 0) {
        hideSuggestions();
        return;
    }
    currentSuggestions = results;
    selectedSuggestionIndex = -1;

    suggestionsEl.innerHTML = results.map((r, i) => {
        const flag = r.country_code ? `<img src="https://flagcdn.com/w20/${r.country_code.toLowerCase()}.png" class="suggestion-flag" alt="">` : '';
        const admin = r.admin1 ? `, ${r.admin1}` : '';
        const country = r.country ? ` — ${r.country}` : '';
        return `
            <div class="suggestion-item" data-index="${i}" data-name="${r.name}" data-lat="${r.latitude}" data-lon="${r.longitude}" data-timezone="${r.timezone || 'auto'}">
                <div class="suggestion-main">
                    ${flag}
                    <span class="suggestion-name">${r.name}</span>
                    <span class="suggestion-meta">${admin}${country}</span>
                </div>
                <span class="suggestion-coords">${r.latitude.toFixed(2)}, ${r.longitude.toFixed(2)}</span>
            </div>
        `;
    }).join('');

    suggestionsEl.classList.remove('hidden');

    suggestionsEl.querySelectorAll('.suggestion-item').forEach(item => {
        item.addEventListener('click', () => {
            const name = item.dataset.name;
            const lat = parseFloat(item.dataset.lat);
            const lon = parseFloat(item.dataset.lon);
            const tz = item.dataset.timezone;
            cityInput.value = name;
            hideSuggestions();
            getWeatherByCoords(lat, lon, false, name, tz);
        });
        item.addEventListener('mouseenter', () => {
            selectedSuggestionIndex = parseInt(item.dataset.index);
            highlightSuggestion();
        });
    });
}

function highlightSuggestion() {
    const items = suggestionsEl.querySelectorAll('.suggestion-item');
    items.forEach((item, i) => {
        item.classList.toggle('selected', i === selectedSuggestionIndex);
    });
}

async function fetchSuggestions(query) {
    if (!query || query.length < 2) {
        hideSuggestions();
        return;
    }

    if (suggestionAbortController) {
        suggestionAbortController.abort();
    }
    suggestionAbortController = new AbortController();

    try {
        const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(query)}&count=6&language=en&format=json`;
        const response = await fetch(url, { signal: suggestionAbortController.signal });
        if (!response.ok) throw new Error('Failed');
        const data = await response.json();
        showSuggestions(data.results || []);
    } catch (err) {
        if (err.name !== 'AbortError') {
            hideSuggestions();
        }
    }
}

// ===== LocalStorage =====
function getHistory() {
    try {
        return JSON.parse(localStorage.getItem('weatherHistory')) || [];
    } catch {
        return [];
    }
}

function saveToHistory(city) {
    let history = getHistory().filter(c => c.toLowerCase() !== city.toLowerCase());
    history.unshift(city);
    if (history.length > MAX_HISTORY) history = history.slice(0, MAX_HISTORY);
    localStorage.setItem('weatherHistory', JSON.stringify(history));
    renderHistory();
}

function renderHistory() {
    const history = getHistory();
    if (history.length === 0) {
        searchHistoryEl.classList.add('hidden');
        return;
    }
    searchHistoryEl.classList.remove('hidden');
    searchHistoryEl.innerHTML = history.map(city => `
        <button class="history-chip" data-city="${city}">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                <circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/>
            </svg>
            ${city}
        </button>
    `).join('');

    searchHistoryEl.querySelectorAll('.history-chip').forEach(chip => {
        chip.addEventListener('click', () => {
            cityInput.value = chip.dataset.city;
            getWeatherByCity(chip.dataset.city);
        });
    });
}

function saveLastCity(city) {
    localStorage.setItem('lastCity', city);
}

function getLastCity() {
    return localStorage.getItem('lastCity') || '';
}

// ===== Map Functions =====
function initMap() {
    if (mapInitialized || map) return true;

    try {
        const lat = isValidCoord(lastCoords.lat) ? parseFloat(lastCoords.lat) : 51.5074;
        const lon = isValidCoord(lastCoords.lon) ? parseFloat(lastCoords.lon) : -0.1278;

        map = L.map('map', {
            zoomControl: true,
            attributionControl: false
        }).setView([lat, lon], 10);

        L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
            attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>',
            subdomains: 'abcd',
            maxZoom: 19
        }).addTo(map);

        map.on('click', async (e) => {
            const lat = parseFloat(e.latlng?.lat);
            const lng = parseFloat(e.latlng?.lng);
            if (isValidCoord(lat) && isValidCoord(lng)) {
                await getWeatherByCoords(lat, lng, true);
            }
        });

        map.on('error', (err) => {
            console.error('Map error:', err);
            showMapError();
        });

        mapInitialized = true;
        mapErrorEl.classList.add('hidden');
        return true;
    } catch (err) {
        console.error('Map init error:', err);
        showMapError();
        return false;
    }
}

function showMapError() {
    mapErrorEl.classList.remove('hidden');
    const mapContainer = document.getElementById('map');
    if (mapContainer) mapContainer.style.display = 'none';
}

function hideMapError() {
    mapErrorEl.classList.add('hidden');
    const mapContainer = document.getElementById('map');
    if (mapContainer) mapContainer.style.display = '';
}

function toggleMapView() {
    if (!map || !satelliteLayer || !darkLayer) return;

    try {
        if (currentMapView === 'satellite') {
            // Switch to dark street map
            map.removeLayer(satelliteLayer);
            map.removeLayer(labelsLayer);
            darkLayer.addTo(map);
            currentMapView = 'dark';
            if (mapViewToggle) {
                mapViewToggle.classList.remove('active');
                mapViewToggle.innerHTML = '<i class="fas fa-map"></i>';
                mapViewToggle.title = 'Switch to satellite';
            }
        } else {
            // Switch to satellite
            map.removeLayer(darkLayer);
            satelliteLayer.addTo(map);
            labelsLayer.addTo(map);
            currentMapView = 'satellite';
            if (mapViewToggle) {
                mapViewToggle.classList.add('active');
                mapViewToggle.innerHTML = '<i class="fas fa-globe"></i>';
                mapViewToggle.title = 'Switch to street map';
            }
        }
    } catch (err) {
        console.warn('Map view toggle error:', err);
    }
}

function reloadMap() {
    if (map) {
        try { map.remove(); } catch(e) {}
        map = null;
    }
    satelliteLayer = null;
    labelsLayer = null;
    darkLayer = null;
    mapInitialized = false;
    hideMapError();
    const mapContainer = document.getElementById('map');
    if (mapContainer) {
        mapContainer.innerHTML = '';
        mapContainer.style.display = '';
    }
    initMap();
    if (lastCityInfo) {
        updateMap(
            lastCityInfo.latitude ?? lastCityInfo.lat ?? lastCoords.lat,
            lastCityInfo.longitude ?? lastCityInfo.lon ?? lastCoords.lon,
            lastCityInfo.name,
            lastWeatherData?.current?.temperature_2m,
            lastWeatherData?.current?.weather_code
        );
    }
}

function toggleMapFullscreen() {
    const mapSection = document.querySelector('.map-section');
    const icon = fullscreenBtn.querySelector('i');

    if (!isMapFullscreen) {
        if (mapSection.requestFullscreen) {
            mapSection.requestFullscreen();
        } else if (mapSection.webkitRequestFullscreen) {
            mapSection.webkitRequestFullscreen();
        } else if (mapSection.msRequestFullscreen) {
            mapSection.msRequestFullscreen();
        }
    } else {
        if (document.exitFullscreen) {
            document.exitFullscreen();
        } else if (document.webkitExitFullscreen) {
            document.webkitExitFullscreen();
        } else if (document.msExitFullscreen) {
            document.msExitFullscreen();
        }
    }
}

function updateFullscreenIcon() {
    const icon = fullscreenBtn.querySelector('i');
    if (document.fullscreenElement || document.webkitFullscreenElement || document.msFullscreenElement) {
        icon.className = 'fas fa-compress';
        isMapFullscreen = true;
    } else {
        icon.className = 'fas fa-expand';
        isMapFullscreen = false;
    }
    // Invalidate map size after fullscreen transition
    setTimeout(() => {
        if (map) {
            try { map.invalidateSize(); } catch(e) {}
        }
    }, 300);
}

function updateMap(lat, lon, cityName, temp, code) {
    const safeLat = safeCoord(lat);
    const safeLon = safeCoord(lon);

    if (!isValidCoord(safeLat) || !isValidCoord(safeLon)) {
        console.warn('Invalid coordinates for map:', lat, lon);
        return;
    }

    if (!initMap()) return;

    lastCoords = { lat: safeLat, lon: safeLon };

    try {
        map.flyTo([safeLat, safeLon], 10, {
            duration: 1.5,
            easeLinearity: 0.25
        });
    } catch (err) {
        console.warn('Map flyTo error:', err);
        try { map.setView([safeLat, safeLon], 10); } catch(e) {}
    }

    if (currentMarker) {
        try { map.removeLayer(currentMarker); } catch(e) {}
    }

    const weatherIconSvg = getWeatherIcon(code || 0);
    const popupContent = `
        <div class="map-popup">
            <div class="map-popup-city">${cityName || 'Unknown'}</div>
            <div class="map-popup-temp">${convertTemp(temp || 0)}${tempSuffix()}</div>
            <div class="map-popup-desc">${getWeatherDesc(code || 0)}</div>
            <div class="map-popup-coords">${safeLat.toFixed(3)}, ${safeLon.toFixed(3)}</div>
        </div>
    `;

    try {
        currentMarker = L.marker([safeLat, safeLon])
            .addTo(map)
            .bindPopup(popupContent, { 
                closeButton: false,
                className: 'weather-popup',
                offset: [0, -10]
            })
            .openPopup();
    } catch (err) {
        console.warn('Marker error:', err);
    }
}

// ===== Compass =====
function updateCompass(windDir) {
    const arrow = document.getElementById('windArrow');
    const dirText = document.getElementById('windDirText');
    const dirLabel = document.getElementById('windDirLabel');

    if (!arrow || !dirText || !dirLabel) return;

    const deg = parseFloat(windDir) || 0;
    arrow.setAttribute('transform', `rotate(${deg}, 100, 100)`);
    dirText.textContent = `${Math.round(deg)}°`;
    dirLabel.textContent = windDirectionLabel(deg);
}

// ===== Temperature Chart (Canvas) =====
function drawTempChart(hourlyData, timezone) {
    const canvas = document.getElementById('tempChart');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();

    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const width = rect.width;
    const height = rect.height;
    const padding = { top: 20, right: 20, bottom: 30, left: 40 };
    const chartW = width - padding.left - padding.right;
    const chartH = height - padding.top - padding.bottom;

    // Get next 24 hours of data
    const now = new Date();
    const currentHour = now.getHours();
    let startIdx = 0;
    for (let i = 0; i < hourlyData.time.length; i++) {
        const h = new Date(hourlyData.time[i]);
        if (h.getHours() === currentHour) {
            startIdx = i;
            break;
        }
    }

    const temps = [];
    const labels = [];
    for (let i = startIdx; i < startIdx + 24 && i < hourlyData.temperature_2m.length; i++) {
        temps.push(hourlyData.temperature_2m[i]);
        const h = new Date(hourlyData.time[i]);
        labels.push(h.getHours() === currentHour ? 'Now' : h.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, timeZone: timezone }));
    }

    if (temps.length === 0) return;

    const minTemp = Math.min(...temps) - 2;
    const maxTemp = Math.max(...temps) + 2;
    const tempRange = maxTemp - minTemp || 1;

    // Clear
    ctx.clearRect(0, 0, width, height);

    // Grid lines
    ctx.strokeStyle = 'rgba(255,255,255,0.06)';
    ctx.lineWidth = 1;
    for (let i = 0; i <= 4; i++) {
        const y = padding.top + (chartH / 4) * i;
        ctx.beginPath();
        ctx.moveTo(padding.left, y);
        ctx.lineTo(width - padding.right, y);
        ctx.stroke();
    }

    // Y-axis labels
    ctx.fillStyle = 'rgba(148, 163, 184, 0.6)';
    ctx.font = '11px Inter, sans-serif';
    ctx.textAlign = 'right';
    for (let i = 0; i <= 4; i++) {
        const temp = maxTemp - (tempRange / 4) * i;
        const y = padding.top + (chartH / 4) * i;
        ctx.fillText(`${convertTemp(temp)}°`, padding.left - 8, y + 4);
    }

    // Draw line
    ctx.strokeStyle = '#3b82f6';
    ctx.lineWidth = 2.5;
    ctx.lineCap = 'round';
    ctx.lineJoin = 'round';
    ctx.beginPath();

    const points = [];
    for (let i = 0; i < temps.length; i++) {
        const x = padding.left + (chartW / (temps.length - 1)) * i;
        const y = padding.top + chartH - ((temps[i] - minTemp) / tempRange) * chartH;
        points.push({ x, y, temp: temps[i] });
        if (i === 0) ctx.moveTo(x, y);
        else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // Fill area under line
    ctx.fillStyle = 'rgba(59, 130, 246, 0.1)';
    ctx.beginPath();
    ctx.moveTo(points[0].x, padding.top + chartH);
    for (const p of points) ctx.lineTo(p.x, p.y);
    ctx.lineTo(points[points.length - 1].x, padding.top + chartH);
    ctx.closePath();
    ctx.fill();

    // Points
    for (const p of points) {
        ctx.fillStyle = '#1e3a5f';
        ctx.strokeStyle = '#3b82f6';
        ctx.lineWidth = 2;
        ctx.beginPath();
        ctx.arc(p.x, p.y, 4, 0, Math.PI * 2);
        ctx.fill();
        ctx.stroke();
    }

    // X-axis labels (every 4 hours)
    ctx.fillStyle = 'rgba(148, 163, 184, 0.5)';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    for (let i = 0; i < labels.length; i += 4) {
        const x = padding.left + (chartW / (labels.length - 1)) * i;
        ctx.fillText(labels[i], x, height - 10);
    }
}

// ===== Day/Night Indicator =====
function updateDayNightIndicator(sunrise, sunset, timezone) {
    const progress = document.getElementById('dayNightProgress');
    const marker = document.getElementById('dayNightMarker');
    const status = document.getElementById('dayNightStatus');

    if (!progress || !marker || !status || !sunrise || !sunset) return;

    const now = new Date();
    const sunriseTime = new Date(sunrise);
    const sunsetTime = new Date(sunset);

    const dayLength = sunsetTime - sunriseTime;
    const elapsed = now - sunriseTime;
    const percent = Math.max(0, Math.min(100, (elapsed / dayLength) * 100));

    progress.style.width = `${percent}%`;
    marker.style.left = `${percent}%`;

    if (now < sunriseTime) {
        status.textContent = '🌙 Night — Sunrise soon';
    } else if (now > sunsetTime) {
        status.textContent = '🌙 Night — Sunrise tomorrow';
    } else {
        const hoursLeft = Math.ceil((sunsetTime - now) / 3600000);
        status.textContent = `☀️ Daylight — ${hoursLeft}h left`;
    }
}

// ===== Air Quality =====
function getAQIClass(aqi) {
    if (aqi <= 50) return { class: 'aqi-good', label: 'Good', color: '#22c55e' };
    if (aqi <= 100) return { class: 'aqi-moderate', label: 'Moderate', color: '#eab308' };
    if (aqi <= 150) return { class: 'aqi-unhealthy-sensitive', label: 'Unhealthy for Sensitive', color: '#f97316' };
    if (aqi <= 200) return { class: 'aqi-unhealthy', label: 'Unhealthy', color: '#ef4444' };
    if (aqi <= 300) return { class: 'aqi-very-unhealthy', label: 'Very Unhealthy', color: '#a855f7' };
    return { class: 'aqi-hazardous', label: 'Hazardous', color: '#7f1d1d' };
}

function updateAQI(aqiData) {
    const circle = document.getElementById('aqiCircle');
    const value = document.getElementById('aqiValue');
    const label = document.getElementById('aqiLabel');
    const status = document.getElementById('aqiStatus');

    if (!aqiData || !circle) {
        if (status) status.textContent = 'Data unavailable';
        return;
    }

    const aqi = Math.round(aqiData.us_aqi || aqiData.european_aqi || 0);
    const info = getAQIClass(aqi);

    circle.className = `aqi-circle ${info.class}`;
    value.textContent = aqi;
    status.textContent = info.label;
    status.style.color = info.color;

    // Pollutant bars
    const pollutants = [
        { key: 'pm2_5', el: 'pm25', max: 75 },
        { key: 'pm10', el: 'pm10', max: 150 },
        { key: 'ozone', el: 'o3', max: 200 },
        { key: 'nitrogen_dioxide', el: 'no2', max: 200 }
    ];

    for (const p of pollutants) {
        const val = aqiData[p.key];
        const bar = document.getElementById(`${p.el}Bar`);
        const text = document.getElementById(`${p.el}Value`);
        if (bar && text && val !== undefined) {
            const pct = Math.min(100, (val / p.max) * 100);
            bar.style.width = `${pct}%`;
            text.textContent = `${Math.round(val)} µg/m³`;
        }
    }
}

// ===== API Functions =====
async function geocodeCity(city) {
    const url = `https://geocoding-api.open-meteo.com/v1/search?name=${encodeURIComponent(city)}&count=1&language=en&format=json`;
    const response = await fetch(url);
    const data = await response.json();

    if (!data.results || data.results.length === 0) {
        throw new Error(`City "${city}" not found. Please check the spelling and try again.`);
    }

    return data.results[0];
}

async function fetchWeather(lat, lon, timezone) {
    const url = `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${lon}&current=temperature_2m,relative_humidity_2m,apparent_temperature,weather_code,wind_speed_10m,wind_direction_10m,surface_pressure,uv_index,is_day&hourly=temperature_2m,weather_code,precipitation_probability&daily=weather_code,temperature_2m_max,temperature_2m_min,sunrise,sunset&timezone=${encodeURIComponent(timezone)}&forecast_days=6`;
    const response = await fetch(url);

    if (!response.ok) {
        throw new Error('Failed to fetch weather data. Please try again later.');
    }

    return response.json();
}

async function fetchAirQuality(lat, lon) {
    try {
        const url = `https://air-quality-api.open-meteo.com/v1/air-quality?latitude=${lat}&longitude=${lon}&current=us_aqi,pm10,pm2_5,ozone,nitrogen_dioxide`;
        const response = await fetch(url);
        if (!response.ok) return null;
        const data = await response.json();
        return data.current;
    } catch {
        return null;
    }
}

async function reverseGeocode(lat, lon) {
    try {
        const geoUrl = `https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=${lat}&longitude=${lon}&localityLanguage=en`;
        const geoRes = await fetch(geoUrl);
        const geoData = await geoRes.json();
        return geoData.city || geoData.locality || geoData.principalSubdivision || `${parseFloat(lat).toFixed(2)}, ${parseFloat(lon).toFixed(2)}`;
    } catch {
        return `${parseFloat(lat).toFixed(2)}, ${parseFloat(lon).toFixed(2)}`;
    }
}

// ===== Update UI =====
function updateCurrentWeather(data, cityInfo, timezone) {
    const current = data.current;
    const code = current.weather_code;
    const daily = data.daily;

    const lat = safeCoord(cityInfo?.latitude ?? cityInfo?.lat ?? lastCoords.lat);
    const lon = safeCoord(cityInfo?.longitude ?? cityInfo?.lon ?? lastCoords.lon);
    const name = cityInfo?.name || 'Unknown Location';

    document.getElementById('cityName').textContent = name;
    document.getElementById('localDateTime').textContent = getLocalDateTime(timezone);
    document.getElementById('tempValue').textContent = convertTemp(current.temperature_2m);
    document.getElementById('tempUnit').textContent = tempSuffix();
    document.getElementById('weatherDesc').textContent = getWeatherDesc(code);
    document.getElementById('humidity').textContent = `${current.relative_humidity_2m}%`;
    document.getElementById('windSpeed').textContent = `${current.wind_speed_10m} km/h`;
    document.getElementById('feelsLike').textContent = `${convertTemp(current.apparent_temperature)}${tempSuffix()}`;
    document.getElementById('localDate').textContent = getLocalDate(timezone);
    document.getElementById('pressure').textContent = `${Math.round(current.surface_pressure)} hPa`;
    document.getElementById('uvIndex').textContent = current.uv_index !== undefined ? current.uv_index.toFixed(1) : '--';

    const sunrise = daily?.sunrise?.[0];
    const sunset = daily?.sunset?.[0];
    document.getElementById('sunrise').textContent = sunrise ? formatTime(sunrise, timezone) : '--:--';
    document.getElementById('sunset').textContent = sunset ? formatTime(sunset, timezone) : '--:--';

    const iconContainer = document.getElementById('weatherIcon');
    iconContainer.innerHTML = getWeatherIcon(code);
    iconContainer.classList.add('animated');

    updateMap(lat, lon, name, current.temperature_2m, code);
    updateCompass(current.wind_direction_10m);
    drawTempChart(data.hourly, timezone);
    updateDayNightIndicator(sunrise, sunset, timezone);
}

function updateHourly(data, timezone) {
    const hourly = data.hourly;
    const container = document.getElementById('hourlyContainer');
    container.innerHTML = '';

    const now = new Date();
    const currentHour = now.getHours();

    let startIdx = 0;
    for (let i = 0; i < hourly.time.length; i++) {
        const h = new Date(hourly.time[i]);
        if (h.getHours() === currentHour) {
            startIdx = i;
            break;
        }
    }

    for (let i = startIdx; i < startIdx + 24 && i < hourly.time.length; i++) {
        const time = hourly.time[i];
        const code = hourly.weather_code[i];
        const temp = hourly.temperature_2m[i];
        const precip = hourly.precipitation_probability[i];
        const h = new Date(time);
        const hourLabel = h.getHours() === currentHour ? 'Now' : h.toLocaleTimeString('en-US', { hour: 'numeric', hour12: true, timeZone: timezone });
        const isNow = h.getHours() === currentHour;

        const item = document.createElement('div');
        item.className = `hourly-item ${isNow ? 'now' : ''}`;
        item.innerHTML = `
            <span class="hourly-time">${hourLabel}</span>
            <div class="hourly-icon">${getWeatherIcon(code)}</div>
            <span class="hourly-temp">${convertTemp(temp)}°</span>
            ${precip > 0 ? `<span class="hourly-precip">💧 ${precip}%</span>` : ''}
        `;
        container.appendChild(item);
    }
}

function updateForecast(data, timezone) {
    const daily = data.daily;
    const container = document.getElementById('forecastContainer');
    container.innerHTML = '';

    for (let i = 1; i <= 5; i++) {
        const code = daily.weather_code[i];
        const max = daily.temperature_2m_max[i];
        const min = daily.temperature_2m_min[i];
        const date = daily.time[i];

        const item = document.createElement('div');
        item.className = 'forecast-item';
        item.innerHTML = `
            <span class="forecast-day">${getDayName(date, timezone)}</span>
            <div class="forecast-icon animated">${getWeatherIcon(code)}</div>
            <span class="forecast-condition">${getWeatherDesc(code)}</span>
            <div class="forecast-temps">
                <span class="forecast-max">${convertTemp(max)}°</span>
                <span class="forecast-min">${convertTemp(min)}°</span>
            </div>
        `;
        container.appendChild(item);
    }
}

function refreshAllUI() {
    if (!lastWeatherData || !lastCityInfo) return;
    updateCurrentWeather(lastWeatherData, lastCityInfo, lastTimezone);
    updateHourly(lastWeatherData, lastTimezone);
    updateForecast(lastWeatherData, lastTimezone);
    drawTempChart(lastWeatherData.hourly, lastTimezone);
}

// ===== Auto Refresh =====
function startAutoRefresh() {
    if (autoRefreshInterval) clearInterval(autoRefreshInterval);
    autoRefreshInterval = setInterval(() => {
        if (lastSearchedCity) {
            getWeatherByCity(lastSearchedCity);
        }
    }, 600000); // 10 minutes
}

// ===== Main Weather Fetch =====
async function getWeatherByCity(city) {
    try {
        showLoading();
        lastSearchedCity = city;

        const cityInfo = await geocodeCity(city);
        const timezone = cityInfo.timezone || 'auto';
        const weatherData = await fetchWeather(cityInfo.latitude, cityInfo.longitude, timezone);
        const aqiData = await fetchAirQuality(cityInfo.latitude, cityInfo.longitude);

        lastWeatherData = weatherData;
        lastCityInfo = cityInfo;
        lastTimezone = timezone;

        updateCurrentWeather(weatherData, cityInfo, timezone);
        updateHourly(weatherData, timezone);
        updateForecast(weatherData, timezone);
        updateAQI(aqiData);
        showWeather();

        saveToHistory(cityInfo.name);
        saveLastCity(cityInfo.name);
        startAutoRefresh();

    } catch (err) {
        showError(err.message || 'An unexpected error occurred.');
    }
}

async function getWeatherByCoords(lat, lon, fromMap = false, knownName = null, knownTz = null) {
    try {
        const safeLat = safeCoord(lat);
        const safeLon = safeCoord(lon);

        if (!isValidCoord(safeLat) || !isValidCoord(safeLon)) {
            throw new Error('Invalid coordinates. Please try again.');
        }

        if (!fromMap) showLoading();

        const weatherData = await fetchWeather(safeLat, safeLon, knownTz || 'auto');
        const timezone = knownTz || weatherData.timezone;
        const aqiData = await fetchAirQuality(safeLat, safeLon);

        let cityName = knownName;
        if (!cityName) {
            cityName = await reverseGeocode(safeLat, safeLon);
        }
        const cityInfo = { name: cityName, latitude: safeLat, longitude: safeLon };

        lastWeatherData = weatherData;
        lastCityInfo = cityInfo;
        lastTimezone = timezone;

        updateCurrentWeather(weatherData, cityInfo, timezone);
        updateHourly(weatherData, timezone);
        updateForecast(weatherData, timezone);
        updateAQI(aqiData);
        showWeather();

        saveToHistory(cityName);
        saveLastCity(cityName);
        startAutoRefresh();

    } catch (err) {
        if (!fromMap) {
            showError(err.message || 'Unable to get weather for this location.');
        } else {
            console.error('Map click weather error:', err);
        }
    }
}

// ===== Event Listeners =====
searchBtn.addEventListener('click', () => {
    const city = cityInput.value.trim();
    if (city) {
        hideSuggestions();
        getWeatherByCity(city);
    }
});

cityInput.addEventListener('input', () => {
    clearTimeout(debounceTimer);
    const query = cityInput.value.trim();
    if (query.length < 2) {
        hideSuggestions();
        return;
    }
    debounceTimer = setTimeout(() => {
        fetchSuggestions(query);
    }, 250);
});

cityInput.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') {
        e.preventDefault();
        if (selectedSuggestionIndex >= 0 && currentSuggestions[selectedSuggestionIndex]) {
            const s = currentSuggestions[selectedSuggestionIndex];
            cityInput.value = s.name;
            hideSuggestions();
            getWeatherByCoords(s.latitude, s.longitude, false, s.name, s.timezone);
        } else {
            const city = cityInput.value.trim();
            if (city) {
                hideSuggestions();
                getWeatherByCity(city);
            }
        }
        return;
    }

    if (e.key === 'ArrowDown') {
        e.preventDefault();
        if (currentSuggestions.length > 0) {
            selectedSuggestionIndex = (selectedSuggestionIndex + 1) % currentSuggestions.length;
            highlightSuggestion();
        }
        return;
    }

    if (e.key === 'ArrowUp') {
        e.preventDefault();
        if (currentSuggestions.length > 0) {
            selectedSuggestionIndex = selectedSuggestionIndex <= 0 ? currentSuggestions.length - 1 : selectedSuggestionIndex - 1;
            highlightSuggestion();
        }
        return;
    }

    if (e.key === 'Escape') {
        hideSuggestions();
        cityInput.blur();
        return;
    }
});

document.addEventListener('click', (e) => {
    if (!cityInput.contains(e.target) && !suggestionsEl.contains(e.target)) {
        hideSuggestions();
    }
});

locationBtn.addEventListener('click', () => {
    if (!navigator.geolocation) {
        showError('Geolocation is not supported by your browser.');
        return;
    }

    navigator.geolocation.getCurrentPosition(
        (position) => {
            getWeatherByCoords(position.coords.latitude, position.coords.longitude);
        },
        (err) => {
            let message = 'Unable to retrieve your location.';
            if (err.code === 1) message = 'Location access denied. Please enable location permissions.';
            if (err.code === 2) message = 'Location unavailable. Please try searching manually.';
            if (err.code === 3) message = 'Location request timed out. Please try again.';
            showError(message);
        },
        { timeout: 10000 }
    );
});

unitToggle.addEventListener('click', () => {
    currentUnit = currentUnit === 'C' ? 'F' : 'C';
    unitLabel.textContent = `°${currentUnit}`;
    tempUnit.textContent = tempSuffix();
    refreshAllUI();
});

retryBtn.addEventListener('click', () => {
    if (lastSearchedCity) {
        getWeatherByCity(lastSearchedCity);
    } else {
        initialState.classList.remove('hidden');
        error.classList.add('hidden');
    }
});

fullscreenBtn.addEventListener('click', toggleMapFullscreen);
mapViewToggle.addEventListener('click', toggleMapView);
reloadMapBtn.addEventListener('click', reloadMap);

document.addEventListener('fullscreenchange', updateFullscreenIcon);
document.addEventListener('webkitfullscreenchange', updateFullscreenIcon);
document.addEventListener('msfullscreenchange', updateFullscreenIcon);

// ===== Keyboard Shortcuts =====
document.addEventListener('keydown', (e) => {
    // / or Ctrl+K to focus search
    if (e.key === '/' && document.activeElement !== cityInput) {
        e.preventDefault();
        cityInput.focus();
        cityInput.select();
    }

    // Escape to blur search and clear
    if (e.key === 'Escape') {
        if (document.activeElement === cityInput) {
            cityInput.blur();
            cityInput.value = '';
            hideSuggestions();
        }
    }

    // U to toggle units
    if (e.key === 'u' || e.key === 'U') {
        if (document.activeElement !== cityInput) {
            unitToggle.click();
        }
    }

    // L for location
    if (e.key === 'l' || e.key === 'L') {
        if (document.activeElement !== cityInput) {
            locationBtn.click();
        }
    }
});

// ===== Live Clock Update =====
setInterval(() => {
    const timeEl = document.getElementById('localDateTime');
    if (timeEl && lastTimezone) {
        timeEl.textContent = getLocalDateTime(lastTimezone);
    }
}, 1000);

// ===== Init =====
window.addEventListener('DOMContentLoaded', () => {
    renderHistory();
    const savedCity = getLastCity();
    if (savedCity) {
        cityInput.value = savedCity;
        getWeatherByCity(savedCity);
    }
});
