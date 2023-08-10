// Import necessary modules and functions
import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import { ITodos } from '../../App' // Assuming ITodos interface is defined in App.tsx

// Define the initial state for the todos slice
const initialState = { items: [] } as ITodos

// Create a Redux slice using createSlice
export const todosSlice = createSlice({
	name: 'todos', // The slice name
	initialState, // Initial state for this slice
	reducers: {
		// Define reducer functions
		addTodo: (state, { payload }) => {
			// Add a new todo with a generated unique id
			const todo = {
				id: v4(), // Generate a unique id using uuid
				title: payload,
				isImportant: false,
			}
			state.items.push(todo) // Add the new todo to the items array
		},
		addImportantTodo: (state, { payload }) => {
			// Add a new important todo with a generated unique id
			const todo = {
				id: v4(),
				title: payload,
				isImportant: true,
			}
			state.items.push(todo)
		},
		removeTodo: (state, { payload }) => {
			// Remove a todo based on its id
			const { id } = payload
			state.items = state.items.filter(item => item.id !== id)
		},
		toggleIsImportant: (state, { payload }) => {
			// Toggle the 'isImportant' status of a todo based on its id
			const { id } = payload
			const index = state.items.findIndex(elem => elem.id === id) // Find the index of the todo
			state.items[index] = {
				id: v4(),
				title: payload.title,
				isImportant: !state.items[index].isImportant, // Toggle the 'isImportant' status
			}
		},
	},
})

// Export the action creators
export const { addTodo, addImportantTodo, removeTodo, toggleIsImportant } =
	todosSlice.actions

// Export the reducer function to be used in the Redux store
export default todosSlice.reducer
