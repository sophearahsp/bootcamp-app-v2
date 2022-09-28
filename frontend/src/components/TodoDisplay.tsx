import React from 'react';
import { FormGroup } from '@mui/material';
import TodoItem from "./TodoListItem";
import { TodoI, TodoContext, TodoContextType } from "../contexts/TodoItem";

const TodoDisplay = () => {
    // useContext() accepts the TodoContext and returns the context values.
    // This specifically extracts 'todos' from the TodoContext for us to use since we don't need setTodos()
    const { todos } = React.useContext(TodoContext) as TodoContextType;
    return (
        // FormGroup wraps controls, in this case, Checkboxes
        // https://mui.com/material-ui/api/form-group/
        <FormGroup
            sx={{
                display:'flex',
                alignContent: 'space-between',
                borderRadius: 1,
                border: 1,
                borderColor: 'lightgray',
                margin: '24px 0px 0px 0px'
            }}>
            {
                // map() creates a new array populated with the results of calling a provided function on every element
                // https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map
                todos.map((todo: TodoI) => (
                    <TodoItem todo={todo} />
                ))
            }
        </FormGroup>
    )
}

export default TodoDisplay;