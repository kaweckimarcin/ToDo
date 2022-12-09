import TodoItem from './TodoItem'

import classes from './TodoList.module.css'

const TodoList = props => {
	return (
		<div className={classes.container}>
			<p>Zadania do zrobienia:</p>
			<div className={classes.list}>
				{props.notes.length > 0 &&
					props.notes.map(note => (
						<TodoItem key={note.id} id={note.id} text={note.text} date={note.date} onDelete={props.onDelete} />
					))}
				{props.notes.length === 0 && <p>Brak zadań do wykonania</p>}
			</div>
		</div>
	)
}

export default TodoList
