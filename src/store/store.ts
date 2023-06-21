import { configureStore } from '@reduxjs/toolkit'
import listsReducer from './list/list.slice'
import todosReducer from './todos/todos.slice'

export const store = configureStore({
	reducer: {
		todos: todosReducer,
		lists: listsReducer,
	},
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
