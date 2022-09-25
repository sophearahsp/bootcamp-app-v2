import React from 'react';
import { useState, ChangeEventHandler } from "react";
import { Box, Button, TextField } from '@mui/material';
import { TodoContext, TodoContextType, TodoI } from "../contexts/TodoItem";
import { addTodo } from '../services'

const TodoInput = () => {
    const [inputValue, setInputValue] = useState("");
    const { setTodos } = React.useContext(TodoContext) as TodoContextType;

	const onChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}) => {
		setInputValue(value);
	};

	const addItem = async () => {
		try {
            const { todo } = await addTodo({
                taskName: inputValue,
	            completed: false
            } as TodoI)

			setTodos(prevTodos => [...prevTodos, todo]);
			setInputValue("");
		} catch (e) {}
	};

    return (
        <Box>
            <TextField
                id="outlined-basic"
                label="task name"
                variant="outlined"
                onChange={onChange}
                value={inputValue}
            />
            <Button onClick={addItem} variant="outlined">
                +
            </Button>
        </Box>
    )
}

export default TodoInput;