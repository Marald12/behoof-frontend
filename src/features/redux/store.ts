import { configureStore } from '@reduxjs/toolkit'
import compareReducer from './slices/compare.slice'

export const store = configureStore({
	reducer: {
		compare: compareReducer
	}
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch