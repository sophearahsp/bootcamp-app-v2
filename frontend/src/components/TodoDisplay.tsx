import TodoItem from "./TodoListItem";
import React from 'react';
import { TodoI, TodoContext, TodoContextType } from "../contexts/TodoItem";
import { FormGroup } from '@mui/material';

const TodoDisplay = () => {
    const { todos } = React.useContext(TodoContext) as TodoContextType;
    return (
        <FormGroup>
            {
                todos.map((todo: TodoI) => (
                    <TodoItem taskName={todo.taskName} />
                ))
            }
        </FormGroup>
    )
}

export default TodoDisplay;