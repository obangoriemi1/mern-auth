

import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from "./user/userSlice.js"
import { persistReducer, persistStore } from 'redux-persist';
//import persistReducer from 'redux-persist/es/persistReducer';
const rootReducer = combineReducers({user: userReducer})
import storage from 'redux-persist/lib/storage';

const persistConfig = {
    key: "root",
    version: 1,
    storage
}

const persistedReducer = persistReducer(persistConfig, rootReducer)
export const store = configureStore({
  reducer: persistedReducer,
  middleware: (getDefaultMiddleware) =>
  getDefaultMiddleware({
    serializableCheck: false,
  })
});

export const persistor = persistStore(store)