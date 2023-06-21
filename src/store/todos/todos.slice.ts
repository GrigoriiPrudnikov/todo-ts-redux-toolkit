import { createSlice } from '@reduxjs/toolkit'
import { v4 } from 'uuid'
import { ITodos } from '../../App'

const initialState = { items: [] } as ITodos

export const todosSlice = createSlice({
	name: 'todos',
	initialState,
	reducers: {
		addTodo: (state, { payload }) => {
			const todo = {
				id: v4(),
				title: payload,
				isImportant: false,
			}
			state.items.push(todo)
		},
		addImportantTodo: (state, { payload }) => {
			const todo = {
				id: v4(),
				title: payload,
				isImportant: true,
			}
			state.items.push(todo)
		},
		removeTodo: (state, { payload }) => {
			const { id } = payload
			state.items = state.items.filter(item => item.id !== id)
		},
		toggleIsImportant: (state, { payload }) => {
			const { id } = payload
			const index = state.items.findIndex(elem => elem.id === id)
			state.items[index] = {
				id: v4(),
				title: payload.title,
				isImportant: !state.items[index].isImportant,
			}
		},
	},
})

export const { addTodo, addImportantTodo, removeTodo, toggleIsImportant } =
	todosSlice.actions
export default todosSlice.reducer
