export let BASE_URL: string;
if (process.env.NODE_ENV === 'development') {
    let BASE_URL = 'http://localhost:5173';
} else {
    let BASE_URL = '';
}
