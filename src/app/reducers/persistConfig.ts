import storage from 'redux-persist/lib/storage';
import { persistReducer } from 'redux-persist';
import { AuthState } from './authReducer'; // Certifique-se de importar o tipo AuthState

const authPersistConfig = {
  key: 'auth',
  storage,
};

export const persistedAuthReducer = (authReducer: any) =>
  persistReducer<AuthState>(authPersistConfig, authReducer);
