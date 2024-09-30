import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { usersReducer, UsersState } from './reducers/usersReducer';

export interface RootState {
    users: UsersState,
}

const rootReducer = combineReducers({
    users: usersReducer.reducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
