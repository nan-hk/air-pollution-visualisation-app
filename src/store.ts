import { configureStore } from '@reduxjs/toolkit'
import advancedFiltersReducer from "components/filters/advancedFiltersSlice";

export const store = configureStore({
  // declaring reducers
  reducer: {
    advancedFilters: advancedFiltersReducer
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch