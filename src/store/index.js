import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "@reduxjs/toolkit";
import { persistReducer, persistStore } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import userSlice from "./login/loginSlice";

const persistConfig = {
    key: 'root',
    version: 1,
    storage,

}

const reducer = combineReducers({
    login: userSlice.reducer
})

const persistedReducer = persistReducer(persistConfig, reducer)

export const store = configureStore({
    reducer: persistedReducer,
});

export const persistor = persistStore(store);