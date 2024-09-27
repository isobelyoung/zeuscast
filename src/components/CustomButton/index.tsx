import { styled } from '@mui/material/styles';
import Button, { ButtonProps } from '@mui/material/Button';

type CustomButtonProps = {
    text: string;
    onClick: () => any;
    width?: string;
    variant?: 'light' | 'dark';
};

const CustomButton = ({
    width = 'fitContent',
    variant = 'dark',
    text,
    onClick,
}: CustomButtonProps): JSX.Element => {
    const StyledButton = styled(Button)({
        backgroundColor: `${variant === 'light' ? '#FFF' : '#000'}`,
        color: `${variant === 'light' ? '#000' : '#FFF'}`,
        width: `${width}`,
        textTransform: 'none',
    });

    // check onClick fn - might need to be added before styled
    // increase border radius to match Apron UI

    return (
        <>
            <StyledButton onClick={onClick}>{text}</StyledButton>
        </>
    );
};

export default CustomButton;
