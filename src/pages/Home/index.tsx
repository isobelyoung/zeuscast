import { Button } from '@mui/material';
import CustomButton from '../../components/CustomButton';
import { useNavigate } from "react-router-dom";
import { HOME_PAGE } from '../../constants';
import Container from '@mui/material/Container';

const Home = () => {
    const navigate = useNavigate();

    return (
        <div className='middle-child'>
            <Container maxWidth='xs'>
                <div className='centered-text'>
                    <h1>{HOME_PAGE.HEADING}</h1>
                    <p>
                        {HOME_PAGE.PARA_ONE}
                        <a href={HOME_PAGE.LINK_ONE.HREF}>
                            {HOME_PAGE.LINK_ONE.TEXT}
                        </a>
                        .
                    </p>
                    <p>
                        {HOME_PAGE.PARA_TWO}
                        <a href={HOME_PAGE.LINK_LINKEDIN.HREF}>
                            {HOME_PAGE.LINK_LINKEDIN.TEXT}
                        </a>
                        &nbsp;or&nbsp;
                        <a href={HOME_PAGE.LINK_GITHUB.HREF}>
                            {HOME_PAGE.LINK_GITHUB.TEXT}
                        </a>
                        .
                    </p>
                </div>
                <Button
                    variant='contained'
                    color='primary'
                    className='w-100'
                    onClick={() => {
                        navigate('users/')
                    }}
                >
                    {HOME_PAGE.BUTTON}
                </Button>
            </Container>
        </div>
    );
};

export default Home;
