// Import necessary modules and components
import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import TodoItem from './components/TodoItem/TodoItem'

// Import Redux actions and types
import { toggleLists } from './store/list/list.slice'
import { RootState } from './store/store'
import { addImportantTodo, addTodo } from './store/todos/todos.slice'
import { TypeTodo } from './types/types'

// Define the structure of the ITodos interface
export interface ITodos {
	items: TypeTodo[]
}

// Define the main App component
export default function App() {
	const dispatch = useDispatch() // Get the Redux dispatch function
	const todos = useSelector((state: RootState) => state.todos.items) // Get the todos array from Redux state
	const list = useSelector((state: RootState) => state.lists.name) // Get the current list filter from Redux state
	const [todo, setTodo] = useState<string>('') // State for storing the new todo input value

	// Handler for updating the todo input value
	const todoHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value)
	}

	// Function for adding a new todo
	const addNewTodo = () => {
		// Dispatch relevant action based on the selected list filter
		if (list === 'important') {
			dispatch(addImportantTodo(todo)) // Add important todo
		} else {
			dispatch(addTodo(todo)) // Add regular todo
		}
		setTodo('') // Clear the input field
	}

	return (
		<div className='app'>
			<div className='title'>ToDo List</div>
			<div className='new_item'>
				<input
					type='text'
					onChange={e => todoHandler(e)}
					onKeyDown={e => e.code === 'Enter' && addNewTodo()}
					value={todo}
					placeholder='Enter something'
				/>
				<button onClick={() => addNewTodo()}>Add</button>
			</div>
			<div className='lists'>
				<div className={list === 'all' ? 'list active' : 'list'}>
					<button onClick={() => dispatch(toggleLists())}>All</button>
				</div>
				<div className={list === 'important' ? 'list active' : 'list'}>
					<button onClick={() => dispatch(toggleLists())}>Important</button>
				</div>
			</div>
			<div className='todos'>
				{list === 'all'
					? todos.map((elem: TypeTodo) => (
							<TodoItem todo={elem} key={elem.id} />
					  ))
					: todos
							.filter(
								({ isImportant }: { isImportant: boolean }) =>
									isImportant === true
							)
							.map((elem: TypeTodo) => <TodoItem todo={elem} key={elem.id} />)}
			</div>
		</div>
	)
}
