import { useDispatch } from 'react-redux';
import { useNavigate, useParams } from 'react-router-dom';
import { setIsModalOpen } from '../../../store/reducers/appReducer';
import { IconButton, Button, Stack } from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import { USER_FORM } from '../../../constants';
import axios from 'axios';
import { setUsers } from '../../../store/reducers/usersReducer';

const DeleteUser = (): JSX.Element => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { id } = useParams();

    const closeModal = () => {
        dispatch(setIsModalOpen(false));
        navigate('/users');
    };

    const deleteUser = async (id: string | undefined) => {
        if (id === undefined) {
            return
        }
        try {
            const res = await axios.delete(`/api/users/${id}`);
            const allUsers = await axios('/api/users');
            dispatch(setUsers(allUsers.data.users));
        } catch (error) {
            console.log(error)
        }
        dispatch(setIsModalOpen(false));
    }

    return (
        <div className='p-2'>
            <div className='d-flex space-between pb-1'>
                <h2>{USER_FORM.HEADING.DELETE}</h2>
                <IconButton aria-label='close-form' onClick={closeModal}>
                    <CloseIcon color='inherit' fontSize='medium' />
                </IconButton>
            </div>
            <Stack spacing={2}>
                <Button variant='contained' color='error' onClick={() => deleteUser(id)}>
                    {USER_FORM.BUTTON.DELETE.toUpperCase()}
                </Button>
                <Button variant='outlined' color='inherit' onClick={closeModal}>
                    {USER_FORM.BUTTON.CANCEL.toUpperCase()}
                </Button>
            </Stack>
        </div>
    );
};

export default DeleteUser;
