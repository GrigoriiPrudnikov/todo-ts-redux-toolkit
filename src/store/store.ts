// Import necessary module and reducers
import { configureStore } from '@reduxjs/toolkit'
import listsReducer from './list/list.slice' // Assuming this is the list reducer
import todosReducer from './todos/todos.slice' // Assuming this is the todos reducer

// Configure and create the Redux store
export const store = configureStore({
	reducer: {
		todos: todosReducer, // Assign the todos reducer to the 'todos' key in the store
		lists: listsReducer, // Assign the lists reducer to the 'lists' key in the store
	},
})

// Define the type for the RootState based on the state structure of the store
export type RootState = ReturnType<typeof store.getState>

// Define the type for the AppDispatch to use dispatch actions
export type AppDispatch = typeof store.dispatch
