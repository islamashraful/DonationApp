import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import UserReducer, { UserState } from './reducers/user';
import CategoriesReducer, { CategoriesState } from './reducers/categories';
import { logger } from 'redux-logger';

export interface RootState {
  user: UserState;
  categories: CategoriesState;
}

const rootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
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
