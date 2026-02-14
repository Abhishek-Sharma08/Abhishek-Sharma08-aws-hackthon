import { createSlice } from '@reduxjs/toolkit'

const tokenFromStorage = localStorage.getItem('token')
const userFromStorage = localStorage.getItem('user')

const initialState = {
  user: userFromStorage ? JSON.parse(userFromStorage) : null,
  token: tokenFromStorage || null,
  isAuthenticated: !!tokenFromStorage,
}

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true

      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
    },

    registerSuccess: (state, action) => {
      state.user = action.payload.user
      state.token = action.payload.token
      state.isAuthenticated = true

      localStorage.setItem('token', action.payload.token)
      localStorage.setItem('user', JSON.stringify(action.payload.user))
    },

    logout: (state) => {
      state.user = null
      state.token = null
      state.isAuthenticated = false

      localStorage.removeItem('token')
      localStorage.removeItem('user')
    },

    updateXP: (state, action) => {
      if (state.user) {
        state.user.xp = (state.user.xp || 0) + action.payload
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    },

    updateLevel: (state, action) => {
      if (state.user) {
        state.user.level = action.payload
        localStorage.setItem('user', JSON.stringify(state.user))
      }
    },

    setUser: (state, action) => {
      state.user = action.payload
      localStorage.setItem('user', JSON.stringify(action.payload))
    },
  },
})

export const {
  loginSuccess,
  registerSuccess,
  logout,
  updateXP,
  updateLevel,
  setUser,
} = authSlice.actions

export default authSlice.reducer
