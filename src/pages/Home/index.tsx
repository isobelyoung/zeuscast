import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { HOME_PAGE } from '../../constants/copy';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div>
            <h1>{HOME_PAGE.HEADING}</h1>
        </div>
    );
};

export default Home;
