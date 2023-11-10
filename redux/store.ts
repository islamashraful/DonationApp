import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer, { UserState } from './reducers/user';
import { logger } from 'redux-logger';

export interface RootState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware => getDefaultMiddleware().concat(logger),
});

export default store;
