import {
    Button,
    Input,
    FormControl,
    Select,
    TextField,
    Autocomplete,
    Grid2,
} from '@mui/material';
import { HOME_PAGE } from '../../constants/copy';
import { useState } from 'react';
import axios from 'axios';
import { fetchWeatherApi } from 'openmeteo';
import ForecastCard from '../../components/ForecastCard';
import ForecastGrid from '../../components/ForecastGrid';
import './index.scss';

type LocationType = {
    id: number;
    label: string;
    lat: number;
    long: number;
};

type ForecastDataType = {
    day: string;
    weatherCode: number;
    maxTemp: string;
    minTemp: string;
    windSpeed: string;
};

const Home = () => {
    const [selectedLocation, setSelectedLocation] = useState<LocationType>();
    const [locationOptions, setLocationOptions] = useState([]);
    // const [forecastData, setForecastData] = useState([]);
    const [forecastData, setForecastData] = useState<ForecastDataType[]>([]);

    const getLocations = async (searchString: string) => {
        let locations = [];
        try {
            const res = await axios.get(
                `https://geocoding-api.open-meteo.com/v1/search?name=${searchString}&count=5&language=en&format=json`
            );
            locations = res.data.results;
        } catch (error) {
            console.log(error);
        }
        let filtered = [];
        filtered = locations.map((city: any, index: number) => {
            return {
                id: index,
                label: `${city.name}, ${city.admin1}, ${city.country}`,
                lat: city.latitude,
                long: city.longitude,
            };
        });
        setLocationOptions(filtered);
        return filtered;
    };

    // Helper function to form time ranges
    const range = (start: number, stop: number, step: number) =>
        Array.from(
            { length: (stop - start) / step },
            (_, i) => start + i * step
        );

    const getForecast = async (lat: number, long: number) => {
        let response;
        try {
            const data = await fetchWeatherApi(
                'https://api.open-meteo.com/v1/forecast',
                {
                    latitude: lat,
                    longitude: long,
                    daily: [
                        'weather_code',
                        'temperature_2m_max',
                        'temperature_2m_min',
                        'wind_speed_10m_max',
                    ],
                    timezone: 'auto',
                }
            );
            response = data[0];
        } catch (error) {
            console.log(error);
        }

        const data = [];
        if (response) {
            // Formatting the API response: code lifted from the Open-Meteo documentation

            // Attributes for timezone and location
            const utcOffsetSeconds = response.utcOffsetSeconds();
            const daily = response.daily()!;

            // Note: The order of weather variables in the URL query and the indices below need to match!
            const weatherData = {
                daily: {
                    time: range(
                        Number(daily.time()),
                        Number(daily.timeEnd()),
                        daily.interval()
                    ).map((t) => new Date((t + utcOffsetSeconds) * 1000)),
                    weatherCode: daily.variables(0)!.valuesArray()!,
                    temperature2mMax: daily.variables(1)!.valuesArray()!,
                    temperature2mMin: daily.variables(2)!.valuesArray()!,
                    windSpeed10mMax: daily.variables(3)!.valuesArray()!,
                },
            };

            for (let i = 0; i < weatherData.daily.time.length; i++) {
                data.push({
                    day: weatherData.daily.time[i].toLocaleDateString(),
                    weatherCode: weatherData.daily.weatherCode[i],
                    maxTemp: weatherData.daily.temperature2mMax[i].toFixed(2),
                    minTemp: weatherData.daily.temperature2mMin[i].toFixed(2),
                    windSpeed: weatherData.daily.windSpeed10mMax[i].toFixed(2),
                });
            }
        }
        setForecastData(data);
    };

    return (
        <div>
            <h1>{HOME_PAGE.HEADING}</h1>
            <h2>{HOME_PAGE.TEXT}</h2>
            <FormControl className='form'>
                <Autocomplete
                    options={locationOptions}
                    renderInput={(params) => (
                        <TextField {...params} label='Search Location' />
                    )}
                    onChange={(event: any, newValue: any) => {
                        getForecast(newValue.lat, newValue.long);
                    }}
                    onInputChange={(event: any, newInputValue: string) => {
                        getLocations(newInputValue);
                    }}
                    className='search-box'
                />
            </FormControl>
            <ForecastGrid>
                {forecastData &&
                    forecastData.map((day: any, ind: number) => (
                        <ForecastCard
                            date={day.day}
                            maxTemp={day.maxTemp}
                            minTemp={day.minTemp}
                            windSpeed={day.windSpeed}
                            weatherCode={day.weatherCode}
                        />
                    ))}
            </ForecastGrid>
        </div>
    );
};

export default Home;
