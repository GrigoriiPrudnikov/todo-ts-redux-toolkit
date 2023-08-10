// Import necessary modules, components, and styles
import { BsBookmark, BsBookmarkFill } from 'react-icons/bs' // React icons for bookmark icons
import { useDispatch } from 'react-redux' // React Redux hook for dispatching actions
import { removeTodo, toggleIsImportant } from '../../store/todos/todos.slice' // Actions for managing todos
import { TypeTodo } from '../../types/types' // Type for todo objects
import styles from './TodoItem.module.scss' // Styles for this component

// Define the type for the props received by the TodoItem component
type Props = {
	todo: TypeTodo // The todo object to be displayed
}

// TodoItem component definition
const TodoItem = ({ todo }: Props) => {
	const dispatch = useDispatch() // Get the Redux dispatch function

	return (
		<div className={styles.todo}>
			<div>
				{/* Button for toggling the 'isImportant' status of the todo */}
				<button
					onClick={() => {
						dispatch(toggleIsImportant(todo)) // Dispatch the toggleIsImportant action
					}}
				>
					{/* Display filled bookmark icon if todo is important, otherwise display an outline bookmark */}
					{todo.isImportant ? <BsBookmarkFill /> : <BsBookmark />}
				</button>
				<div className={styles.todo_title}>{todo.title}</div>{' '}
				{/* Display the todo title */}
			</div>
			<div className={styles.todo_delete_btn}>
				{/* Button for deleting the todo */}
				<button
					onClick={() => {
						dispatch(removeTodo(todo)) // Dispatch the removeTodo action
					}}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default TodoItem // Export the TodoItem component
