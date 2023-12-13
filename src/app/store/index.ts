// store.ts
import { configureStore } from '@reduxjs/toolkit';
import { persistStore } from 'redux-persist';
import persistedAuthReducer from '../reducers/authReducer'; // Importe o persistedAuthReducer

const store = configureStore({
  reducer: {
    auth: persistedAuthReducer,
    
  },
});

const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export { store, persistor };
