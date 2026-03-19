// src/store/index.js
import { configureStore } from '@reduxjs/toolkit'
import themeReducer from './themeSlice'

/**
 * Redux store — demonstrates production Redux Toolkit setup.
 * Currently manages: theme (dark/light toggle)
 * Extensible: add more slices (e.g., contactFormSlice, filterSlice)
 */
export const store = configureStore({
  reducer: {
    theme: themeReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: {
        // Ignore these field paths in all actions
        ignoredActionPaths: ['meta.arg', 'payload.timestamp'],
      },
    }),
})

/** @typedef {ReturnType<typeof store.getState>} RootState */
/** @typedef {typeof store.dispatch} AppDispatch */
