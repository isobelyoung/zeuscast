import { UserType, Gender } from '../types';

export const mockUsers: UserType[] = [
    {
        id: '1',
        gender: Gender.Female,
        firstName: 'Betty',
        lastName: 'Draper',
        age: 28,
    },
    {
        id: '2',
        gender: Gender.Female,
        firstName: 'Peggy',
        lastName: 'Olsen',
        age: 26,
    },
    {
        id: '3',
        gender: Gender.Male,
        firstName: 'Don',
        lastName: 'Draper',
        age: 35,
    },
    {
        id: '4',
        gender: Gender.Female,
        firstName: 'Joan',
        lastName: 'Harris',
        age: 30,
    },
]