import React from 'react';
import { useState, ChangeEventHandler } from "react";
import { Box, Button, TextField } from '@mui/material';
import { TodoContext, TodoContextType } from "../contexts/TodoItem";

const TodoInput = () => {
    const [inputValue, setInputValue] = useState("");
    const { todos, setTodos } = React.useContext(TodoContext) as TodoContextType;

	const onChange: ChangeEventHandler<HTMLInputElement> = ({
		target: { value },
	}) => {
		setInputValue(value);
	};

	const addItem = async () => {
		try {
            const newTodo = {
                taskName: inputValue,
	            completed: false
            }

			setTodos(() => [...todos, newTodo]);
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
                Add
            </Button>
        </Box>
    )
}

export default TodoInput;