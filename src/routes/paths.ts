import { BASE_URL } from '../constants';

interface Paths {
    [key: string]: string;
}

export default {
    INDEX: `/users`,
    NEW_USER: `/users/new`,
    // edit, delete route to be added with :id params
} as Paths;
