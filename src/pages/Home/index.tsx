import {
    Button,
    Input,
    FormControl,
    Select,
    TextField,
    Autocomplete,
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HOME_PAGE } from '../../constants/copy';
import { useState } from 'react';
import axios from 'axios';

type LocationType = {
    id: number;
    label: string;
    lat: number;
    long: number;
};

const Home = () => {
    const navigate = useNavigate();
    const handleChange = (e: any) => {
        console.log(e.target.value);
    };

    const [selectedLocation, setSelectedLocation] = useState<LocationType>();
    const [locationOptions, setLocationOptions] = useState([]);

    const [value, setValue] = useState(locationOptions[0]);
    const [inputValue, setInputValue] = useState('');

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
        let filtered = []
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

    const getForecast = async (lat: number, long: number) => {
        try {
            const res = await axios.get(
                `https://api.open-meteo.com/v1/forecast?latitude=${lat}&longitude=${long}&hourly=temperature_2m,weather_code`
            )
            console.log(res)
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div>
            <h1>{HOME_PAGE.HEADING}</h1>
            <FormControl>
                <Autocomplete
                    options={locationOptions}
                    renderInput={(params) => (
                        <TextField {...params} label='Search Location' />
                    )}
                    sx={{ width: 400 }}
                    onChange={(event: any, newValue: any) => {
                        console.log('selected value', newValue);
                        getForecast(newValue.lat, newValue.long)
                    }}
                    onInputChange={(
                        event: any,
                        newInputValue: string
                    ) => {
                        getLocations(newInputValue);
                    }}
                />
            </FormControl>
        </div>
    );
};

export default Home;
