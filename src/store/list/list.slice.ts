import { createSlice } from '@reduxjs/toolkit'

const initialState = { name: 'all' }

export const listSlice = createSlice({
	name: 'list',
	initialState,
	reducers: {
		toggleLists: (state) => {
			state.name = state.name === 'all' ? 'important' : 'all'
		}
	},
})

export const { toggleLists } = listSlice.actions
export default listSlice.reducer
