import { BsBookmark, BsBookmarkFill } from 'react-icons/bs'

import { useDispatch } from 'react-redux'
import { removeTodo, toggleIsImportant } from '../../store/todos/todos.slice'
import { TypeTodo } from '../../types/types'
import styles from './TodoItem.module.scss'

type Props = {
	todo: TypeTodo
}

const TodoItem = ({ todo }: Props) => {
	const dispatch = useDispatch()

	return (
		<div className={styles.todo}>
			<div>
				<button
					onClick={() => {
						dispatch(toggleIsImportant(todo))
					}}
				>
					{todo.isImportant ? <BsBookmarkFill /> : <BsBookmark />}
				</button>
				<div className={styles.todo_title}>{todo.title}</div>
			</div>
			<div className={styles.todo_delete_btn}>
				<button
					onClick={() => {
						dispatch(removeTodo(todo))
					}}
				>
					Delete
				</button>
			</div>
		</div>
	)
}

export default TodoItem
