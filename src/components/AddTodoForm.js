import React, { useRef, useState } from 'react'
import classes from './AddTodoForm.module.css'

const AddTodoForm = props => {
	const textInputRef = useRef()
	const dateInputRef = useRef()
	const [num, setNum] = useState(0)

	

	const formSubmitHandler = event => {
		event.preventDefault()
		const textInput = textInputRef.current.value
		const dateInput = dateInputRef.current.value

		const data = {
			id: num,
			text: textInput,
			date: dateInput,
		}
		setNum(prevState => prevState + 1)
		props.onSubmit(data)
	}

	return (
		<div className={classes.container}>
			<form onSubmit={formSubmitHandler}>
				<label htmlFor='todo'>Tekst notatki</label>
				<input type='text' id='todo' ref={textInputRef} className={classes.todo} />
				<label htmlFor='time'>Termin wykonania</label>
				<input type='date' id='time' ref={dateInputRef} className={classes.time} />
				<button >Dodaj notatkę</button>
			</form>
		</div>
	)
}

export default AddTodoForm
