import { configureStore, combineReducers, Action } from '@reduxjs/toolkit';
import thunk, { ThunkAction } from 'redux-thunk';
import storage from 'redux-persist/lib/storage';
import { menuState } from './reducers/menuState';
import { persistReducer, persistStore } from 'redux-persist';
import { movieStarsState } from './reducers/movieState';

const reducers = combineReducers({
    menu: menuState.reducer,
    movieStars: movieStarsState.reducer,
});

const persistConfig = {
    key: 'root',
    storage,
};

const persistedReducer = persistReducer(persistConfig, reducers);

export const store = configureStore({
    reducer: persistedReducer,
    middleware: [thunk],
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export type AppThunk = ThunkAction<void, RootState, unknown, Action<string>>;

export const persistor = persistStore(store);
