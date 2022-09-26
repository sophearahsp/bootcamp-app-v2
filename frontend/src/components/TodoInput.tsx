import React, { KeyboardEvent } from 'react';
import { useState, ChangeEventHandler } from "react";
import { Box, TextField } from '@mui/material';
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

    const onKeyPress = (e: KeyboardEvent<HTMLImageElement>) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addItem()
        }
    }

    return (
        <Box>
            <TextField
                id="outlined-basic"
                label="Add a task"
                variant="outlined"
                onChange={onChange}
                value={inputValue}
                sx={{ display: 'flex', width: '100%'}}
                onKeyDown={onKeyPress}
            />
        </Box>
    )
}

export default TodoInput;