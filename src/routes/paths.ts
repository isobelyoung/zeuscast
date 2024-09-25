import { BASE_URL } from '../constants';

interface Paths {
    [key: string]: string;
}

export default {
    INDEX: ``,
    USERS: `/users`,
    NEW_USER: `/new`,
    // edit, delete route to be added with :id params
} as Paths;
