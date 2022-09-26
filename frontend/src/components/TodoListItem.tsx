import React from 'react';
import { Checkbox, FormControlLabel  } from '@mui/material';
import { Box, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { deleteTodo, updateTodo } from '../services';
import { TodoContext, TodoContextType, TodoI } from "../contexts/TodoItem";

const TodoItem = (props: { todo: TodoI }) => {
    const { todos, setTodos } = React.useContext(TodoContext) as TodoContextType;
    
	const onClickDelete = async () => {
        if (!props.todo.id) throw "Nothing to delete";

        const response = await deleteTodo(props.todo.id);
        
        if (response.status == 200) {
            setTodos(todos.filter((todoItem) => todoItem.id !== props.todo.id));
        }
	};

    const onClickToggle = async () => {
        if (!props.todo.id) throw "Nothing to toggle";

        console.log("trying to toggle")
        const { todo } = await updateTodo({
			...props.todo,
			completed: !props.todo.completed,
		} as TodoI);

        const todoIndex = todos.findIndex((t) => t.id === props.todo.id)
        const updatedList = [...todos.slice(0, todoIndex), todo, ...todos.slice(todoIndex + 1)];
		setTodos(updatedList);
    }

    return (
        <Box sx={{
                display:'flex',
                width: '100%',
                borderBottom: 1,
                justifyContent: 'space-between',
                borderColor: 'lightgray'
            }}>
            <FormControlLabel
                control={<Checkbox checked={props.todo.completed} onChange={onClickToggle}/>}
                label={props.todo.taskName}
                sx={{
                    padding: '0px 0px 0px 16px',
                }}
            />
            <IconButton onClick={onClickDelete} color="error" aria-label="delete">
                <ClearIcon />
            </IconButton>
        </Box>
    )
}

export default TodoItem;