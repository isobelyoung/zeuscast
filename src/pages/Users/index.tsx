import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setUsers } from '../../store/reducers/usersReducer';
import { USERS_PAGE } from '../../constants';
import { Button, IconButton } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import './index.css';
import axios from 'axios';

const Users = () => {
    const dispatch = useDispatch();
    const { userDetails } = useSelector((state: RootState) => state.users);

    const getData = async () => {
        const res = await axios('/api/users');
        dispatch(setUsers(res.data.users));
        return;
    };

    useEffect(() => {
        getData();
    }, []);

    return (
        <div>
            <div className='d-flex heading-bar'>
                <h1>{USERS_PAGE.HEADING}</h1>
                <Button
                    variant='contained'
                    startIcon={<AddIcon />}
                    className='custom-button-filled-dark'
                    onClick={() => {
                        alert('clicked');
                    }}
                >
                    {USERS_PAGE.BUTTON_ADD_USER}
                </Button>
            </div>
            <TableContainer component={Paper}>
                <Table>
                    <TableHead>
                        <TableRow key='column-headings'>
                            {USERS_PAGE.TABLE_COL_HEADINGS.map((heading) => (
                                <TableCell key={heading}>{heading}</TableCell>
                            ))}
                        </TableRow>
                        {userDetails.map((user) => (
                            <TableRow key={user.id}>
                                <TableCell key={`${user.id}-${user.gender}`}>
                                    {user.gender}
                                </TableCell>
                                <TableCell key={`${user.id}-${user.firstName}`}>
                                    {user.firstName}
                                </TableCell>
                                <TableCell key={`${user.id}-${user.lastName}`}>
                                    {user.lastName}
                                </TableCell>
                                <TableCell key={`${user.id}-${user.age}`}>
                                    {user.age}
                                </TableCell>
                                <TableCell key={`${user.id}-edit`} style={{ textAlign: 'right' }}>
                                    <Button
                                        variant='outlined'
                                        color='inherit'
                                    >
                                        {USERS_PAGE.BUTTON_EDIT}
                                    </Button>
                                    <IconButton
                                        aria-label={`delete-${user.id}`}
                                    >
                                        <DeleteOutlinedIcon fontSize='inherit' />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))}
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Users;
