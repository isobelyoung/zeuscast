import { BASE_URL } from '../constants';

interface Paths {
    [key: string]: string;
}

export default {
    INDEX: ``,
    USERS: `/users`,
    NEW_USER: `/new`,
    EDIT_USER: `/edit`,
    DELETE_USER: `/delete`
} as Paths;
