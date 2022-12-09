import classes from './TodoItem.module.css'

const TodoItem = props => {
	const { id, onDelete } = props

	const deleteTodoHandler = props => {
		onDelete(id)
        // console.log(props);
	}

	return (
		<div className={classes.container}>
			<p className={classes.text}>{props.text}</p>
			<div className={classes.innerBox}>
				<p className={classes.date}>Wykonać do: {props.date}</p>
				<button onClick={deleteTodoHandler} className={classes.button}>
					✘
				</button>
			</div>
		</div>
	)
}

export default TodoItem
