import { combineReducers, configureStore } from '@reduxjs/toolkit';
import { appReducer, AppState } from './reducers/appReducer';

export interface RootState {
    app: AppState,
}

const rootReducer = combineReducers({
    app: appReducer.reducer,
})

const store = configureStore({
    reducer: rootReducer,
});

export default store;
