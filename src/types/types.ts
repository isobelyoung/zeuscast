export enum Gender {
    Female = 'Female',
    Male = 'Male',
    Other = 'Other',
    Undisclosed = 'Undisclosed'
};

export interface UserType {
    id: string,
    gender: Gender,
    firstName: string,
    lastName: string,
    age: number,
}