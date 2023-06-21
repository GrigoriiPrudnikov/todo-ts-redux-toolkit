import { ChangeEvent, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import './App.scss'
import TodoItem from './components/TodoItem/TodoItem'

import { toggleLists } from './store/list/list.slice'
import { RootState } from './store/store'
import { addImportantTodo, addTodo } from './store/todos/todos.slice'
import { TypeTodo } from './types/types'

export interface ITodos {
	items: TypeTodo[]
}

export default function App() {
	const dispatch = useDispatch()
	const todos = useSelector((state: RootState) => state.todos.items)
	const list = useSelector((state: RootState) => state.lists.name)
	const [todo, setTodo] = useState<string>('')

	const todoHandler = (e: ChangeEvent<HTMLInputElement>) => {
		setTodo(e.target.value)
	}
	const addNewTodo = () => {
		if (list === 'important') dispatch(addImportantTodo(todo))
		else dispatch(addTodo(todo))
		setTodo('')
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
