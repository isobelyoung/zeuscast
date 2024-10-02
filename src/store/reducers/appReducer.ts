import { Gender, UserType } from '../../types';
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState { 
    isModalOpen: boolean;
}

const INITIAL_STATE: AppState = {
    isModalOpen: false,
};

export const appReducer = createSlice({
    name: 'app',
    initialState: INITIAL_STATE,
    reducers: {
        setIsModalOpen: (state, action: PayloadAction<boolean>) => {
            state.isModalOpen = action.payload;
        }
    }
})

export const { setIsModalOpen } = appReducer.actions;
