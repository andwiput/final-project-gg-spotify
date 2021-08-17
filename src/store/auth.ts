import { createSlice } from '@reduxjs/toolkit'
import { AuthState } from '../types/store'

const initialState: AuthState = {
  isAuth: false,
  token: '',
  user: null
}

const authenticateSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    login: (state, action) => {
      state.isAuth = true
      state.token = action.payload
    },
    userStore: (state, action) => {
      state.user = action.payload
    },
    logout: () => initialState
  },
})

export const { login, logout, userStore } = authenticateSlice.actions

export default authenticateSlice.reducer