import { combineReducers, configureStore } from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { persistReducer, persistStore } from 'redux-persist';
import UserReducer, { UserState } from './reducers/user';
import CategoriesReducer, { CategoriesState } from './reducers/categories';
import DonationsReducer, { DonationsState } from './reducers/donations';
import { logger } from 'redux-logger';
import { ENABLE_DEV_TOOL_LOGGER } from '@/config/constants';

export interface RootState {
  user: UserState;
  categories: CategoriesState;
  donations: DonationsState;
}

const rootReducer = combineReducers({
  user: UserReducer,
  categories: CategoriesReducer,
  donations: DonationsReducer,
});

const persistedReducer = persistReducer(
  {
    key: 'root',
    storage: AsyncStorage,
    version: 1,
  },
  rootReducer,
);

const middleware = ENABLE_DEV_TOOL_LOGGER ? [logger] : [];

const store = configureStore({
  reducer: persistedReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({ serializableCheck: false }).concat(middleware),
});

export default store;

export const persistor = persistStore(store);
