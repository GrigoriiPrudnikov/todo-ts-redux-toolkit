// Import the necessary module from Redux Toolkit
import { createSlice } from '@reduxjs/toolkit'

// Define the initial state for the list slice
const initialState = { name: 'all' }

// Create a Redux slice using createSlice
export const listSlice = createSlice({
	name: 'list', // The slice name
	initialState, // Initial state for this slice
	reducers: {
		// Define reducer functions
		toggleLists: state => {
			// This reducer toggles between 'all' and 'important' list names
			state.name = state.name === 'all' ? 'important' : 'all'
		},
	},
})

// Export the toggleLists action creator
export const { toggleLists } = listSlice.actions

// Export the reducer function to be used in the Redux store
export default listSlice.reducer
