import TodoItem from "./TodoListItem";
import React from 'react';
import { TodoI, TodoContext, TodoContextType } from "../contexts/TodoItem";
import { FormGroup } from '@mui/material';

const TodoDisplay = () => {
    const { todos } = React.useContext(TodoContext) as TodoContextType;
    return (
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
                todos.map((todo: TodoI) => (
                    <TodoItem todo={todo} />
                ))
            }
        </FormGroup>
    )
}

export default TodoDisplay;