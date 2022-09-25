import TodoItem from "./TodoListItem";
import React from 'react';
import { TodoI, TodoContext, TodoContextType } from "../contexts/TodoItem";

const TodoDisplay = () => {
    const { todos } = React.useContext(TodoContext) as TodoContextType;

    return (
        <div>
            {
                todos.map((todo: TodoI) => (
                    <TodoItem taskName={todo.taskName} />
                ))
            }
        </div>
    )
}

export default TodoDisplay;