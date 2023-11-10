import { combineReducers, configureStore } from '@reduxjs/toolkit';
import UserReducer, { UserState } from './reducers/user';

export interface RootState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: UserReducer,
});

const store = configureStore({
  reducer: rootReducer,
});

export default store;
