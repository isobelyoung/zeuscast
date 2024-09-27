import CustomButton from '../../components/CustomButton';
import { HOME_PAGE } from '../../constants';
import Container from '@mui/material/Container';

const Home = () => {
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
                <CustomButton
                    text={HOME_PAGE.BUTTON}
                    onClick={() => console.log('Button clicked')}
                    width='100%'
                />
            </Container>
        </div>
    );
};

export default Home;
