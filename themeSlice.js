// src/store/themeSlice.js
import { createSlice } from '@reduxjs/toolkit'

/**
 * Theme slice — manages dark/light mode.
 * Persists preference to localStorage for UX continuity.
 */

const getInitialTheme = () => {
  // Check localStorage first, then system preference
  if (typeof window !== 'undefined') {
    const stored = localStorage.getItem('theme')
    if (stored) return stored
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light'
  }
  return 'dark'
}

const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    mode: getInitialTheme(),
  },
  reducers: {
    toggleTheme(state) {
      state.mode = state.mode === 'dark' ? 'light' : 'dark'
      // Persist to localStorage
      localStorage.setItem('theme', state.mode)
      // Apply/remove class on <html>
      document.documentElement.classList.toggle('dark', state.mode === 'dark')
    },
    setTheme(state, action) {
      state.mode = action.payload
      localStorage.setItem('theme', state.mode)
      document.documentElement.classList.toggle('dark', state.mode === 'dark')
    },
  },
})

export const { toggleTheme, setTheme } = themeSlice.actions

// Selectors
export const selectTheme = (state) => state.theme.mode
export const selectIsDark = (state) => state.theme.mode === 'dark'

export default themeSlice.reducer
