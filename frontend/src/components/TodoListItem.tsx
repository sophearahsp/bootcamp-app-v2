import React from 'react';
import { Checkbox, FormControlLabel, Box, IconButton } from '@mui/material';
import ClearIcon from '@mui/icons-material/Clear';
import { deleteTodo, updateTodo } from '../services';
import { TodoContext, TodoContextType, TodoI } from "../contexts/TodoItem";

// Component takes in a prop called 'todo' that is of type 'TodoI'
const TodoItem = (props: { todo: TodoI }) => {
    // useContext() accepts the TodoContext and returns the context values.
    // This extracts both 'todos' and 'setTodos' from the TodoContext for us to use
    const { todos, setTodos } = React.useContext(TodoContext) as TodoContextType;
    
    // Function to handle clicking on the delete button
	const onClickDelete = async () => {
        // If this TodoItem doesn't have an id, throw an error
        if (!props.todo.id) throw "Nothing to delete";

        // Call deleteTodo() and wait until we recieve response
        const response = await deleteTodo(props.todo.id);
        
        // If response is OK (status == 200), use setTodos to update the state of the todos
        if (response.status == 200) {
            // Use filter to create a new array that contains a subset of the array that doesn't have this todoItem's id
            // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter
            // (all javascript is valid typescript)
            setTodos(todos.filter((todoItem) => todoItem.id !== props.todo.id));
        }
	};

    // Function to handle clicking on the checkbox
    const onClickToggle = async () => {
        // If this TodoItem doesn't have an id, throw an error
        if (!props.todo.id) throw "Nothing to toggle";

        // Call updateTodo and provide a copy of this TodoItem's todo object with the completed value reversed
        // Extract the 'todo' object from the result
        const { todo } = await updateTodo({
			...props.todo,
			completed: !props.todo.completed,
		} as TodoI);
        
        // Find the index of this TodoItem's index by using findIndex() to find a todo object where the id is the same
        const todoIndex = todos.findIndex((t) => t.id === props.todo.id)
        // Create an updatedList array by
        // copying todos from 0 to todoIndex, appending the new todo, and copying todos from todoIndex + 1 to the end of todos
        const updatedList = [...todos.slice(0, todoIndex), todo, ...todos.slice(todoIndex + 1)];

        // Use setTodos(updatedList) to update the state of todos with this new array
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
            {/* Checkbox */}
            <FormControlLabel
                // Sets the control to a Checkbox where
                // checked is set to this todo object's completed property
                // onChange (event triggers when this Checkbox changes) is set to the onClickToggle() function
                control={<Checkbox checked={props.todo.completed} onChange={onClickToggle}/>}
                // Checkbox's label is this todo object's taskName property
                label={props.todo.taskName}
                sx={{
                    padding: '0px 0px 0px 16px',
                }}
            />
            {/* Delete button */}
            <IconButton
                // onClick (event triggers when button is clicked) is set to the onClickDelete() function
                onClick={onClickDelete} color="error" aria-label="delete">
                <ClearIcon />
            </IconButton>
        </Box>
    )
}

export default TodoItem;