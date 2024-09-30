import { USERS_PAGE } from '../../constants';
import { Button } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
// import SendIcon from '@mui/icons-material';
import './index.css';

const Users = () => {
    return (
        <div>
            <div className='d-flex heading-bar'>
                <h1>{USERS_PAGE.HEADING}</h1>
                <Button
                    variant='contained'
                    color='primary'
                    startIcon={<AddIcon />}
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
                        <TableRow>
                            <TableCell>Test</TableCell>
                        </TableRow>
                    </TableHead>
                </Table>
            </TableContainer>
        </div>
    );
};

export default Users;
