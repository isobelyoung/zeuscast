import { render, screen } from '@testing-library/react';
import ForecastCard from '../components/ForecastCard';

describe('ForecastCard component', () => {
    test('it renders without crashing', () => {
        const { getByText } = render(
            <ForecastCard
                date='11/27/2024'
                minTemp='2'
                maxTemp='8'
                weatherCode={3}
                windSpeed='6'
            />
        );
        expect(getByText('Date')).toBeDefined();
        expect(getByText('Description')).toBeDefined();
        expect(getByText('Temperature')).toBeDefined();
        expect(getByText('Wind Speed')).toBeDefined();
        screen.debug();
    });

    test('it renders with props', () => {
        const { getByText } = render(
            <ForecastCard
                date='11/27/2024'
                minTemp='2'
                maxTemp='8'
                weatherCode={3}
                windSpeed='6'
            />
        );
        expect(getByText('Wed Nov 27 2024')).toBeDefined();
        expect(getByText('2°C - 8°C')).toBeDefined();
        expect(getByText('Overcast')).toBeDefined();
        expect(getByText('6km/h')).toBeDefined();
    });
});
