import { Gender, UserType } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UsersState { 
    users: UserType[]
}

const INITIAL_STATE: UsersState = {
    users: []
};

export const usersReducer = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {
        setUsers: (state, action: PayloadAction<UserType[]>) => {
            state.users = action.payload;
        }
    }
})

export const { setUsers } = usersReducer.actions;
