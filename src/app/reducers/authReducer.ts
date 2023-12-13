// authReducer.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

// Definição da interface AuthState
export interface AuthState {
  token: string;
  userType: string;
}

// Estado inicial
const initialState: AuthState = {
  token: '',
  userType: '',
};

// Criar o slice do Redux
const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action: PayloadAction<string>) => {
      state.token = action.payload;
    },
    typeUser: (state, action: PayloadAction<string>) => {
      state.userType = action.payload;
    },
    logout: (state) => {
      state.token = '';
      state.userType = '';
    },
  },
});

// Configuração do persistReducer
const persistConfig = {
  key: 'auth',
  storage,
};

// Exportar o reducer persistido
const persistedAuthReducer = persistReducer<AuthState>(persistConfig, authSlice.reducer);

// Exportar as actions do slice
export const { login, logout, typeUser } = authSlice.actions;

// Exportar o reducer persistido
export default persistedAuthReducer;
