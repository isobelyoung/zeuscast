export enum Gender {
    Female = 'female',
    Male = 'male',
    Other = 'other',
    Undisclosed = 'undisclosed'
};

export interface UserType {
    id: string,
    gender: Gender,
    firstName: string,
    lastName: string,
    age: number,
}