export let BASE_URL: string;
if (process.env.NODE_ENV === 'development') {
    let BASE_URL = 'http://localhost:5173';
} else {
    let BASE_URL = '';
}


// Centralising app copy

export const HOME_PAGE = {
    HEADING: 'ZeusCast',
    TEXT: 'Your go-to guide for tracking skies, seasons, and everything in between',
};

export const FORECAST_CARD = {
    LABEL_ONE: 'Date',
    LABEL_TWO: 'Description',
    LABEL_THREE: 'Temperature',
    LABEL_FOUR: 'Wind Speed'
}