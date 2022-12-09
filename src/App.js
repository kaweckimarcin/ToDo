import React, { useState } from 'react'

import classes from './App.module.css'
import AddTodoForm from './components/AddTodoForm'
import TodoList from './components/TodoList'

function App() {
	const [notes, setNotes] = useState([])

	const onSubmitHandler = props => {
		setNotes(prevState => [...prevState, props])
	}

	const onDeleteHandler = props => {
		setNotes(prevState => prevState.filter(item => item.id !== props))
	}

	return (
		<div className={classes.app}>
			<p>Dodaj zadanie do wykonania:</p>
			<AddTodoForm onSubmit={onSubmitHandler} />
			<TodoList notes={notes} onDelete={onDeleteHandler} />
		</div>
	)
}

export default App
