import { combineReducers, configureStore } from '@reduxjs/toolkit';

import { usersReducer, UsersState } from './reducers/usersReducer';
import { appReducer, AppState } from './reducers/appReducer';

export interface RootState {
    users: UsersState,
    app: AppState,
}

const rootReducer = combineReducers({
    users: usersReducer.reducer,
    app: appReducer.reducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
