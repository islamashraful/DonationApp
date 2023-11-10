import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import UserReducer, { UserState } from './reducers/user';
import { logger } from 'redux-logger';

export interface RootState {
  user: UserState;
}

const rootReducer = combineReducers({
  user: UserReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
  },
  rootReducer,
);

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(logger),
});

export default store;

export const persistor = persistStore(store);
