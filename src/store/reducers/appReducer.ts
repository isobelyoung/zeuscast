import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface AppState { 
    appData: any
}

const INITIAL_STATE: AppState = {
    appData: null
};

export const appReducer = createSlice({
    name: 'app',
    initialState: INITIAL_STATE,
    reducers: {
        setAppState: (state, action: PayloadAction<any>) => {
            state = action.payload;
        }
    }
})

export const { setAppState } = appReducer.actions;
