import { WeatherCodes } from '../../constants/weatherDescriptions';
import { FORECAST_CARD } from '../../constants/copy';
import './index.scss';

type ForecastCardProps = {
    date: string;
    weatherCode: number;
    minTemp: string;
    maxTemp: string;
    windSpeed: string;
};

const ForecastCard = ({
    date,
    weatherCode,
    minTemp,
    maxTemp,
    windSpeed,
}: ForecastCardProps): JSX.Element => {
    const thisDate = new Date(date);

    const formatDescription = (weatherCode: number) => {
        const icon = WeatherCodes[`${weatherCode}`][1];
        const desc = WeatherCodes[`${weatherCode}`][0];
        return {
            image: icon,
            desc: desc,
        };
    };

    const { image, desc } = formatDescription(weatherCode);

    return (
        <div className='card'>
            <div className='card-image'>
                <img
                    src={`src/assets/weather-images${image}.png`}
                    className='card-image--img'
                />
            </div>
            <div>
                <div>
                    <p className='card-label'>{FORECAST_CARD.LABEL_ONE}</p>
                    <p className='card-attribute'>{thisDate.toDateString()}</p>
                </div>

                <div>
                    <p className='card-label'>{FORECAST_CARD.LABEL_TWO}</p>
                    <p className='card-attribute'>{desc}</p>
                </div>

                <div>
                    <p className='card-label'>{FORECAST_CARD.LABEL_THREE}</p>
                    <p className='card-attribute'>
                        {minTemp}°C - {maxTemp}°C
                    </p>
                </div>

                <div>
                    <p className='card-label'>{FORECAST_CARD.LABEL_FOUR}</p>
                    <p className='card-attribute'>{windSpeed}km/h</p>
                </div>
            </div>
        </div>
    );
};

export default ForecastCard;
