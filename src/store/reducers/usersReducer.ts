import { Gender, UserType } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface UsersState { 
    userDetails: UserType[]
}

const INITIAL_STATE: UsersState = {
    userDetails: []
};

export const usersReducer = createSlice({
    name: 'users',
    initialState: INITIAL_STATE,
    reducers: {
        setUsers: (state, action: PayloadAction<UserType[]>) => {
            state.userDetails = action.payload;
        }
    }
})

export const { setUsers } = usersReducer.actions;
